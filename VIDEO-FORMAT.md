# 🎬 Video Script Format Guide

## Video Structure (Per Lesson)

```
┌────────────────────────────────────┐
│ INTRO (30 sec)                     │
│ - Hook/Problem statement           │
│ - "In this lesson..."              │
└────────────────────────────────────┘
         ↓
┌────────────────────────────────────┐
│ LEARNING OBJECTIVES (30 sec)       │
│ - 3 bullet points                  │
│ - "By the end, you'll be able to"  │
└────────────────────────────────────┘
         ↓
┌────────────────────────────────────┐
│ MAIN CONTENT (70%)                 │
│ - Part 1 → Example                 │
│ - Part 2 → Example                 │
│ - Part 3 → Example                 │
└────────────────────────────────────┘
         ↓
┌────────────────────────────────────┐
│ DEMO (15%)                         │
│ - Live walkthrough                 │
│ - Screen recording                 │
└────────────────────────────────────┘
         ↓
┌────────────────────────────────────┐
│ SUMMARY (30 sec)                   │
│ - Key takeaways (3-4)              │
│ - "Remember..."                    │
└────────────────────────────────────┘
         ↓
┌────────────────────────────────────┐
│ CTA (15 sec)                       │
│ - Practice assignment              │
│ - Next lesson preview              │
└────────────────────────────────────┘
```

---

## 🎙️ Script Format for Recording

```markdown
# Lesson X.X: [Title]

## [SCENE 1: INTRO]
**Visual:** Course logo → Lesson title
**Duration:** 30 seconds

**Script:**
> [Hook - problem/question]
> 
> สวัสดีครับ/ค่ะ ยินดีต้อนรับสู่ Lesson [X.X]
> วันนี้เราจะเรียนรู้เรื่อง [Topic]

---

## [SCENE 2: OBJECTIVES]
**Visual:** Bullet list animation
**Duration:** 30 seconds

**Script:**
> หลังจากจบ Lesson นี้ คุณจะสามารถ:
> - หนึ่ง: [Objective 1]
> - สอง: [Objective 2]
> - สาม: [Objective 3]

---

## [SCENE 3-N: CONTENT]
**Visual:** [Slides/Screen/B-roll]
**Duration:** [X minutes]

**Script:**
> [Content here - conversational tone]
> 
> [Pause for emphasis]
> 
> [Continue...]

**On-screen text:** [Key points to show]

---

## [SCENE: DEMO]
**Visual:** Screen recording
**Duration:** [X minutes]

**Script:**
> มาดูกันว่าทำจริงเป็นอย่างไร
> [Narrate while showing screen]

---

## [SCENE: SUMMARY]
**Visual:** Key points list
**Duration:** 30 seconds

**Script:**
> มาสรุปสิ่งที่เรียนวันนี้:
> - [Takeaway 1]
> - [Takeaway 2]
> - [Takeaway 3]

---

## [SCENE: CTA]
**Visual:** Next lesson preview
**Duration:** 15 seconds

**Script:**
> ลองทำ [Assignment] แล้วเจอกัน Lesson หน้า
> ที่เราจะเรียนเรื่อง [Next topic]
```

---

## 🎨 Visual Guidelines

### Slides
- **Background:** Light (#FAFAFA)
- **Text:** Dark (#1A1A1A)
- **Accent:** Brand color (#C9785D)
- **Font:** Clean sans-serif
- **Max text:** 6 bullet points per slide

### Screen Recording
- **Resolution:** 1920x1080
- **Clean desktop** (hide personal files)
- **Zoom:** 125-150% for readability
- **Highlight cursor** movements

### B-roll Suggestions
- Typing on keyboard
- Design tools in action
- Abstract AI visualizations
- Person thinking/working

---

## 🔊 Audio Guidelines

- **Pace:** Moderate (not too fast)
- **Tone:** Friendly, conversational
- **Pauses:** After key points
- **Energy:** Engaged but calm

---

## ⏱️ Timing Template

| Section | % of Total | 25 min lesson |
|---------|------------|---------------|
| Intro | 3% | 45 sec |
| Objectives | 3% | 45 sec |
| Content | 70% | 17.5 min |
| Demo | 15% | 3.75 min |
| Summary | 5% | 1.25 min |
| CTA | 4% | 1 min |

---

## 🤖 AI Voice Production

### Using ElevenLabs/TTS:
1. Export script as plain text
2. Remove scene markers
3. Add [pause] markers for breaks
4. Generate in chunks (5 min max)
5. Edit in audio software
6. Sync with visuals

### Script Cleanup for TTS:
```
# Remove:
- **Bold** markers
- Scene headers
- Duration notes

# Add:
- [pause] for emphasis
- Phonetic spellings if needed
- Natural contractions
```

---

## 📁 File Naming

```
ai-for-designers/
├── videos/
│   ├── 1.1-prompting-principles.mp4
│   ├── 1.2-structure-format.mp4
│   └── ...
├── audio/
│   ├── 1.1-prompting-principles.mp3
│   └── ...
└── slides/
    ├── 1.1-prompting-principles.pdf
    └── ...
```
