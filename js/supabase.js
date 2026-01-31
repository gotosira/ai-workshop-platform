// Supabase Client Configuration
// Replace with your Supabase project credentials

const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============ AUTH FUNCTIONS ============

async function signUp(email, password, fullName) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: { full_name: fullName }
        }
    });
    if (error) throw error;
    return data;
}

async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) throw error;
    
    // Log action
    await logAction('login', { method: 'email' });
    
    return data;
}

async function signOut() {
    await logAction('logout', {});
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

async function getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

// ============ PROFILE FUNCTIONS ============

async function getProfile(userId) {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();
    if (error) throw error;
    return data;
}

async function updateProfile(userId, updates) {
    const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId)
        .select()
        .single();
    if (error) throw error;
    
    // Log action
    await logAction('profile_update', { fields: Object.keys(updates) });
    
    return data;
}

async function uploadAvatar(userId, file) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${userId}/avatar.${fileExt}`;
    
    // Upload to storage
    const { data, error } = await supabase.storage
        .from('avatars')
        .upload(fileName, file, { upsert: true });
    
    if (error) throw error;
    
    // Get public URL
    const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);
    
    // Update profile with new avatar URL
    await updateProfile(userId, { avatar_url: publicUrl });
    
    // Log action
    await logAction('avatar_upload', { file_type: fileExt });
    
    return publicUrl;
}

// ============ PROGRESS FUNCTIONS ============

async function getLessonProgress(userId) {
    const { data, error } = await supabase
        .from('lesson_progress')
        .select('*')
        .eq('user_id', userId);
    if (error) throw error;
    return data;
}

async function saveLessonProgress(userId, lessonId, completed = true, timeSpent = 0) {
    const { data, error } = await supabase
        .from('lesson_progress')
        .upsert({
            user_id: userId,
            lesson_id: lessonId,
            completed,
            completed_at: completed ? new Date().toISOString() : null,
            time_spent_seconds: timeSpent
        }, { onConflict: 'user_id,lesson_id' })
        .select()
        .single();
    
    if (error) throw error;
    
    // Log action
    if (completed) {
        await logAction('lesson_complete', { lesson_id: lessonId });
    }
    
    return data;
}

// ============ QUIZ FUNCTIONS ============

async function saveQuizResult(userId, quizId, score, maxScore, answers) {
    const { data, error } = await supabase
        .from('quiz_results')
        .insert({
            user_id: userId,
            quiz_id: quizId,
            score,
            max_score: maxScore,
            answers
        })
        .select()
        .single();
    
    if (error) throw error;
    
    // Log action
    await logAction('quiz_submit', { quiz_id: quizId, score, max_score: maxScore });
    
    return data;
}

async function getQuizResults(userId) {
    const { data, error } = await supabase
        .from('quiz_results')
        .select('*')
        .eq('user_id', userId)
        .order('completed_at', { ascending: false });
    if (error) throw error;
    return data;
}

// ============ ACTION LOGGING ============

async function logAction(actionType, actionData, pageUrl = window.location.href) {
    const user = await getCurrentUser();
    if (!user) return;
    
    const { error } = await supabase
        .from('user_actions')
        .insert({
            user_id: user.id,
            action_type: actionType,
            action_data: actionData,
            page_url: pageUrl
        });
    
    if (error) console.error('Failed to log action:', error);
}

async function logPageView() {
    await logAction('page_view', {
        title: document.title,
        referrer: document.referrer
    });
}

// ============ DOWNLOAD TRACKING ============

async function trackDownload(fileName, fileType) {
    const user = await getCurrentUser();
    if (!user) return;
    
    const { error } = await supabase
        .from('downloads')
        .insert({
            user_id: user.id,
            file_name: fileName,
            file_type: fileType
        });
    
    if (error) console.error('Failed to track download:', error);
    
    // Also log as action
    await logAction('download', { file_name: fileName, file_type: fileType });
}

// ============ INITIALIZATION ============

// Auto-log page views
document.addEventListener('DOMContentLoaded', () => {
    if (SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
        logPageView();
    }
});

// Export for use in other files
window.db = {
    supabase,
    signUp,
    signIn,
    signOut,
    getCurrentUser,
    getProfile,
    updateProfile,
    uploadAvatar,
    getLessonProgress,
    saveLessonProgress,
    saveQuizResult,
    getQuizResults,
    logAction,
    trackDownload
};
