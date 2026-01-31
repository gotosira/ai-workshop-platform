# 📋 AI for Designers — Kanban Board

**Last Updated:** 2026-01-31 16:25 ICT  
**Owner:** พี่เมย์ + ญาญ่า

---

## 🔴 BACKLOG (Ideas & Problems)

### 🎬 Video Production
- [ ] **8-sec clips ต่อกันไม่ smooth** — ต้องคิด transition ระหว่าง clips
  - 💡 Solution: ใช้ fade transition 0.5s ระหว่าง clips
  - 💡 Solution: ทำ visual ให้ต่อเนื่อง (same background)
- [ ] **Voice consistency** — AI voice อาจเปลี่ยน tone ระหว่าง clips
  - 💡 Solution: ใช้ seed เดียวกัน / batch generate
  - 💡 Solution: Post-process normalize audio
- [ ] **Visual style guide** — ยังไม่มี consistent visual สำหรับ video
  - 💡 Solution: สร้าง Figma template สำหรับ slides
- [ ] **Background music** — ต้องหาเพลงที่ไม่ติด copyright
  - 💡 Solution: YouTube Audio Library / Pixabay
- [ ] **Subtitle/Caption** — ควรมี Thai subtitles ด้วย
  - 💡 Solution: Auto-generate จาก script ที่มี

### 🌐 Website/Platform
- [x] ~~**Lesson progress tracking**~~ ✅ Done
- [ ] **Video player** — ยังเป็น placeholder ▶️
- [x] ~~**Search function**~~ ✅ Done (search.html)
- [x] ~~**Dark mode**~~ ✅ Done (All 9 pages)
- [x] ~~**Mobile responsive**~~ ✅ Done (320px+ support)
- [ ] **Loading states** — แสดง skeleton ขณะโหลด
- [ ] **Offline support** — PWA cache lessons

### 📚 Content
- [x] ~~**Prompt Library**~~ ✅ Done (50+ prompts)
- [ ] **Exercise files** — ไฟล์ให้ download ทำแบบฝึกหัด
- [ ] **Quiz/Assessment** — ทดสอบความเข้าใจท้ายบท
  - 💡 Solution: Simple quiz component with localStorage
- [x] ~~**Thai vs English**~~ ✅ Done (glossary.html - 34 terms)
- [ ] **Real examples** — เพิ่มตัวอย่างจาก Thai brands
- [ ] **Cheatsheet PDF** — สรุป 1 หน้าต่อ module

### 🤖 AI Tutor
- [ ] **Embed chatbot** — ใส่ใน website จริง
  - 💡 Solution: iframe ChatGPT หรือ custom build
- [ ] **Context-aware** — รู้ว่า user กำลังเรียน lesson ไหน
- [ ] **Progress suggestions** — แนะนำ lesson ถัดไป

### 💰 Business
- [ ] **Payment integration** — ถ้าจะขายจริง
  - 💡 Solution: Stripe / PromptPay QR
- [x] ~~**Certificate generation**~~ ✅ Done (html2canvas → PNG)
- [ ] **Email sequences** — onboarding emails
- [ ] **Analytics** — track ว่าคนดู lesson ไหนบ่อย
  - 💡 Solution: Simple analytics หรือ Plausible
- [ ] **Pricing strategy** — กำหนดราคา
  - 💡 Individual: ฿2,500-3,500
  - 💡 Corporate: ฿50,000+/batch

### 🆕 NEW IDEAS (Just thought of)
- [ ] **AI Prompt Playground** — ลอง prompt ได้ในเว็บ
- [ ] **Before/After Gallery** — แสดง prompt improvement
- [ ] **Community Prompts** — share prompts กัน
- [ ] **Weekly Newsletter** — AI design tips
- [ ] **Testimonials section** — หลังมี students

### 💡 NEW (16:55 Heartbeat)
- [ ] **Quiz links in dashboard** — ให้รู้ว่ามี quiz ท้าย module
- [x] ~~**Social share certificate**~~ ✅ Done (LinkedIn, Twitter, Facebook)
- [ ] **PDF export** — แปลง markdown เป็น PDF
- [ ] **Feedback form** — เก็บ feedback จาก users
- [ ] **Prompt favorites** — save prompts ที่ชอบ
- [x] ~~**Progress stats**~~ ✅ Done (Profile page + Certificate page)
- [ ] **Gamification** — badges, streaks, achievements

### 💡 NEW (17:05 Heartbeat)
- [ ] **Landing page quiz mention** — บอกว่ามี quiz ท้ายบท
- [x] ~~**Email capture**~~ ✅ Done (newsletter section)
- [ ] **Instructor bio** — เพิ่มประวัติผู้สอน
- [x] ~~**FAQ section**~~ ✅ Done (faq.html - 17 Q&A)
- [ ] **Pricing section** — ราคาและ packages

### 💡 NEW (19:00 Heartbeat)
- [ ] **Keyboard shortcuts** — j/k navigate, m toggle sidebar, d toggle dark
- [ ] **Reading time estimate** — "อ่าน 5 นาที" ต่อ lesson
- [ ] **Bookmark lessons** — save ไว้ดูทีหลัง
- [ ] **Print-friendly view** — พิมพ์ได้สวย
- [ ] **Module completion confetti** — ฉลองเมื่อจบ module

### 💡 NEW (Heartbeat Feb 1)
- [ ] **Accessibility (a11y)** — ARIA labels, focus states, screen reader support
- [ ] **Course roadmap visualization** — Visual map แสดง progress ทั้ง course
- [ ] **AI Tools comparison table** — เปรียบเทียบ AI tools ต่างๆ side-by-side
- [ ] **Quiz explanations** — อธิบายคำตอบที่ถูกเมื่อตอบผิด
- [ ] **Spaced repetition reminders** — เตือนให้ทบทวน lessons เก่า
- [ ] **Voice narration option** — TTS อ่าน lesson content ได้
- [ ] **Note-taking feature** — จดโน้ตระหว่างเรียนเก็บไว้

---

## 🟡 IN PROGRESS

### 🎬 Video Production
- [ ] **Script Lesson 1.1** — 68 clips ready
  - Next: Test generate 1 clip

### 📦 Platform
- [ ] **Quiz component** — thinking about structure

### 🧪 Testing
- [ ] **ทดสอบ sync จากญาญ่า 🪷** — เพิ่มโดยญาญ่า (Feb 1, 05:41)

---

## 🟢 DONE ✅

### 📅 2026-01-31

**Morning:**
- [x] Course curriculum 24 lessons
- [x] Landing page design
- [x] Dashboard with login
- [x] Lesson viewer (load markdown)
- [x] All 24 lesson scripts

**Afternoon:**
- [x] Video format guide
- [x] AI Tutor system prompt
- [x] Slide deck template
- [x] Character profile (พี่เมย์)
- [x] Video script 1.1 (full + 8-sec)
- [x] Vercel deployment
- [x] Prompt Library (50+ prompts)
- [x] Progress tracking (localStorage)
- [x] AI video tools research
- [x] LIFE-TASKS.md setup

---

## 💡 IDEAS PARKING LOT

- Community Discord
- Live Q&A sessions
- Guest Thai designers
- Thai company case studies
- Certification exam
- Corporate training package
- Notion template companion
- Figma plugin with prompts
- YouTube channel
- Podcast version

---

## 🐛 BUGS & ISSUES

| Issue | Priority | Status |
|-------|----------|--------|
| `ai-course.vercel.app` ชี้ผิด | 🔴 High | ✅ Fixed |
| Dashboard lesson links | 🟡 Medium | ✅ Fixed |

---

## 📊 METRICS TO TRACK

- Lesson completion rate
- Average time per lesson
- Quiz scores
- User feedback ratings
- Drop-off points
- Conversion rate (if selling)

---

## 🔄 HOURLY LOG

| Time | Action |
|------|--------|
| 15:22 | Created KANBAN |
| 16:04 | Added LIFE-TASKS, autonomous work mode |
| 16:20 | Prompt Library + Progress tracking done |
| 16:25 | Heartbeat update + new ideas |
| 16:30 | Quiz system created ✅ |
| 16:32 | SEO meta tags added ✅ |
| 16:35 | Cheatsheets x3 modules ✅ |
| 16:36 | Deployed to Vercel ✅ |
| 16:45 | Quiz Module 2 + 3 created ✅ |
| 16:50 | Downloads page created ✅ |
| 16:55 | Heartbeat - thinking new ideas |
| 17:00 | Quiz links added to all modules ✅ |
| 17:05 | Heartbeat - more ideas added |
| 17:10 | Quiz badge added to landing page ✅ |
| 17:15 | Heartbeat - fixed resources link ✅ |
| 17:20 | Heartbeat - platform stable, 8 deploys today |
| 17:30 | Demo account reset (0 data) ✅ |
| 17:38 | Prompt boxes redesign (warm colors) ✅ |
| 17:38 | Reset progress feature (?reset=true) ✅ |
| 17:40 | Download fix (JS fetch + vercel.json) ✅ |
| 17:42 | Downloads page redesign (full-width, header nav) ✅ |
| 16:52 | Multi-format downloads (.md + .docx) ✅ |
| 16:55 | Lesson page full redesign (responsive) ✅ |
| 16:58 | Fixed .docx download (blob instead of text) ✅ |
| 16:59 | Lesson layout wider content area ✅ |
| 17:02 | Dashboard full redesign (no sidebar, top header) ✅ |
| 17:06 | Unified Nav Bar across all pages ✅ |
| 17:10 | Nav centered design + home→dashboard logic ✅ |
| 17:14 | Profile page + Supabase client + DB schema ✅ |
| 17:18 | Avatar sync across pages (name + image) ✅ |
| 17:22 | Certificate page + Quiz nav consistency ✅ |
| 17:39 | Mobile responsive overhaul (320px+) ✅ |
| 17:46 | Lesson page mobile comprehensive fix ✅ |
| 18:22 | Search page + Glossary (34 terms) ✅ |
| 18:28 | FAQ page (17 questions) ✅ |
| 18:32 | Newsletter signup section (landing page) ✅ |
| 18:35 | Dark mode toggle (Dashboard) ✅ |
| 18:38 | Dark mode added to Lesson page ✅ |
| 18:42 | Social share buttons (Certificate) ✅ |
| 18:45 | Dark mode added to Quiz page ✅ |
| 18:48 | Dark mode added to Downloads page ✅ |
| 18:52 | Dark mode added to Profile + Certificate ✅ |
| 18:58 | Dark mode added to Search, Glossary, FAQ ✅ |
| 20:00 | Tools section unique selling point added ✅ |
| 20:20 | Expanded 6 short lessons (3.8, 2.3, 2.6, 2.7, 2.2, 3.6) ✅ |
| 20:35 | Expanded 2 more (2.4 UX Writing, 2.8 Project) ✅ |

---

## ✅ Autonomous Work Log (16:13+)

**Without asking:**
- [x] Quiz system (5 questions, Module 1)
- [x] SEO meta tags (OG, Twitter, description)
- [x] Module 1 Cheatsheet
- [x] Module 2 Cheatsheet
- [x] Module 3 Cheatsheet
- [x] Deploy to production

**Next up (still working):**
- [ ] Link quiz from dashboard
- [ ] Downloads page
- [ ] More quiz questions

*ญาญ่าทำงานต่อเนื่อง ไม่หยุด* 🪷
