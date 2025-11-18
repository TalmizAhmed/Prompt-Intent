# Prompt Intent Landing Page - Content Plan

## Overview
A minimal, conversion-focused landing page for the Prompt Intent AI extension. The page follows a clear user journey: problem awareness → solution demonstration → action.

---

## Page Structure

### 1. Hero Section

### 2. Content Section

### 3. Features Section

### 4. Footer

---

## Detailed Content

## 1. Hero Section (hero-section-3)

### Primary Headline
```
Perfect Your AI Prompts in Seconds
```

### Subheadline
```
Stop guessing what makes a great prompt. Our intelligent assistant asks the right questions to optimize your prompts for better AI responses—automatically.
```

### CTA Buttons
- **Primary CTA:** "Get Started Free"
- **Secondary CTA:** "See How It Works"

### Supporting Text
```
Works with ChatGPT, Claude, and any text input field
```

### Visual Element
- Screenshot/demo of the extension modal showing the clarifying questions interface
- Or animated GIF showing the optimization flow

---

## 2. Content Section (content-1)

### Section Layout
Typically content-1 has a 2-column layout with text on one side and visual on the other.

### Headline
```
From Vague Ideas to Perfect Prompts
```

### Subheadline
```
Most AI responses fall short because of unclear prompts. Prompt Intent bridges that gap by asking intelligent questions that help you clarify your intent—before you hit send.
```

### Body Content

**The Problem:**
Generic prompts like "Write a blog post" or "Help me with code" lead to generic, unhelpful responses. You end up in a frustrating back-and-forth, trying to explain what you actually meant.

**The Solution:**
Prompt Intent analyzes your prompt and generates 3 targeted clarifying questions. Answer the ones that matter, skip the rest. Within seconds, you'll have a refined, detailed prompt that gets you the results you need.

### Key Points (Optional Bullet List)
- ✅ **No more back-and-forth** - Get it right the first time
- ✅ **Smart question generation** - Only asks what's relevant
- ✅ **Iterative refinement** - Keep improving until perfect
- ✅ **Zero learning curve** - Works with your existing workflow

### Visual Element (Right Column)

**Option 1: Before/After Comparison**

**Before (Vague Prompt):**
```
Write a blog post about productivity
```

**After (Optimized Prompt):**
```
Write a 1,200-word blog post about productivity strategies for remote software developers. Focus on time management techniques specific to asynchronous work environments. Include actionable tips for managing distractions at home, setting boundaries with family, and maintaining work-life balance. Target audience: mid-level developers (3-7 years experience) transitioning to remote work for the first time. Tone: conversational but professional, with practical examples.
```

**Option 2: Workflow Diagram**

```
1. Focus on any text input
   ↓
2. Extension analyzes your prompt
   ↓
3. Get 3 clarifying questions
   ↓
4. Answer what matters
   ↓
5. Receive optimized prompt
   ↓
6. Apply with one click
```

**Option 3: Extension Screenshot**

- Full-width screenshot of the AnalysisModal showing:
  - Original prompt at top
  - 3 clarifying questions (accordion style)
  - Sample answers filled in
  - Optimized result section
  - "Use This Prompt" button

**Recommended:** Use Option 3 (Screenshot) with Option 1 (Before/After) as text callouts

### Supporting Text (Below Visual)
```
Prompt Intent doesn't just rewrite your prompts—it helps you think through what you're actually asking for. The result? Better prompts, better responses, and less wasted time.
```

---

## 3. Features Section (features-11)

### Section Header

**Title:**
```
Everything You Need to Master Prompt Engineering
```

**Subtitle:**
```
Prompt Intent takes the guesswork out of crafting effective AI prompts with intelligent guidance and optimization.
```

### Feature Items (6 features in 2x3 grid)

#### Feature 1: Smart Clarifying Questions
**Icon:** 🎯 (or custom icon)

**Title:**
```
Smart Clarifying Questions
```

**Description:**
```
Get 3 intelligent questions tailored to your prompt. Answer what matters, skip what doesn't, and refine iteratively until perfect.
```

---

#### Feature 2: One-Click Optimization
**Icon:** ✨ (or custom icon)

**Title:**
```
One-Click Optimization
```

**Description:**
```
Transform basic prompts into detailed, effective ones. Preserve your intent while adding clarity and apply optimized prompts instantly.
```

---

#### Feature 3: Iterative Refinement
**Icon:** 🔄 (or custom icon)

**Title:**
```
Iterative Refinement
```

**Description:**
```
Keep improving with additional questions. Add custom instructions at any stage and see improvements in real-time.
```

---

#### Feature 4: Works Everywhere
**Icon:** 🚀 (or custom icon)

**Title:**
```
Works Everywhere
```

**Description:**
```
ChatGPT, Claude, and any text field. No copy-pasting between tools. Seamless browser integration that fits your workflow.
```

---

#### Feature 5: Create From Scratch
**Icon:** 💡 (or custom icon)

**Title:**
```
Create From Scratch
```

**Description:**
```
Start with just an idea. Let AI guide you with questions and generate complete prompts effortlessly—even from an empty field.
```

---

#### Feature 6: Lightning Fast
**Icon:** ⚡ (or custom icon)

**Title:**
```
Lightning Fast
```

**Description:**
```
Instant question generation, real-time optimization, and no workflow interruption. Get better prompts without slowing down.
```

---

## 4. Footer

### Tagline
```
Prompt Intent - Your AI Prompt Optimization Assistant
```

### Navigation Links

**Product**
- Features
- How It Works
- Pricing (if applicable)

**Resources**
- Documentation
- FAQ
- Blog

**Legal**
- Privacy Policy
- Terms of Service
- Cookie Policy

**Support**
- Contact Support
- GitHub Issues
- Feature Requests

### Social Media Links
- GitHub
- Twitter/X
- Discord Community
- Product Hunt

### Copyright
```
© 2024 Prompt Intent. All rights reserved.
```

---

## Design Guidelines

**Note:** Landing page MUST match the extension modal's design system for brand consistency.

### Color Scheme (Exact Match to Extension)

The landing page uses the same minimalist black-and-white color palette as the modal, defined using HSL colors via CSS custom properties:

**Primary Colors:**
```css
--background: 0 0% 100%;        /* Pure White */
--foreground: 0 0% 5%;          /* Near Black */
--primary: 0 0% 5%;             /* Near Black */
--primary-foreground: 0 0% 100%; /* White */
```

**Secondary Colors:**
```css
--secondary: 0 0% 98%;          /* Off White */
--secondary-foreground: 0 0% 5%; /* Near Black */
--muted: 0 0% 97.5%;            /* Light Gray */
--muted-foreground: 0 0% 40%;   /* Medium Gray */
```

**UI Element Colors:**
```css
--border: 0 0% 92%;             /* Light Gray Border */
--input: 0 0% 92%;              /* Input Background */
--ring: 0 0% 5%;                /* Focus Ring */
--card: 0 0% 100%;              /* White */
```

**Accent Colors:**
```css
--destructive: 0 0% 15%;        /* Dark Gray/Black */
--destructive-foreground: 0 0% 100%; /* White */
```

**Shadow Colors (3D Effects):**
```css
--primary-shadow: 0 0% 0%;      /* Pure Black */
--secondary-shadow: 0 0% 85%;   /* Light Gray */
--destructive-shadow: 0 0% 5%;  /* Near Black */
```

**Color Usage Guidelines:**
- Hero section background: White (`--background`)
- Primary text: Near black (`--foreground`)
- Feature cards: White (`--card`) with light gray borders (`--border`)
- CTA buttons: Use 3D button styling (see Button section below)
- Muted text (descriptions): Medium gray (`--muted-foreground`)

### Typography (Exact Match to Extension)

**Font Family:**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
```

**Font Settings:**
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
letter-spacing: -0.011em; /* slightly tighter */
font-feature-settings: "rlig" 1, "calt" 1; /* ligatures and contextual alternates */
```

**Font Weights:**
- Headlines: `font-semibold` with `tracking-tight`
- Body: `font-normal`
- Labels: `font-medium`

### Buttons (Match Modal's 3D Style)

**Use the 3D Button Component (`Button3D`) for Primary CTAs:**

```jsx
<Button3D size="lg">Get Started Free</Button3D>
<Button3D variant="secondary">See How It Works</Button3D>
```

**3D Button Effects (CSS):**
- Shadow layer: `blur-[4px]` with `bg-[hsl(0deg 0% 0% / 0.25)]`
- Edge layer: Gradient backgrounds
- Front layer: `-translate-y-[4px]` base position

**Button Variants:**
- Primary black button
- Secondary light gray button
- Outline (border only)
- Ghost (no background)

**Screenshots:**
- Extension modal screenshots with borders and shadows
- Rounded corners matching design system

**Logo:**
- Use existing logo from `src/assets/logo.png`
- Pair with "Prompt Intent" text

### Responsive Design

- Mobile-first approach
- Stack elements on small screens
- Responsive grid layouts

### Design Principles (Match Modal Philosophy)

1. **Minimalism**: Clean, uncluttered interface with ample whitespace
2. **Clarity**: High contrast (black on white) for maximum readability
3. **Tactile**: 3D button effects provide visual feedback and delight
4. **Consistent**: Unified spacing, borders, and shadows throughout
5. **Accessible**: System font stack, proper contrast ratios, focus indicators
---

## User Journey Flow

```
1. Hero Section
   ↓ (Value proposition: "Perfect Your AI Prompts in Seconds")
   
2. Content Section
   ↓ (Understand the problem & solution with visual proof)
   
3. Features Section
   ↓ (See detailed capabilities: questions → optimization → refinement)
   
4. Footer
   ✓ (Navigation and resources)
```

---

## Key Messaging Themes

1. **Simplicity:** "In seconds", "One-click", "No guesswork"
2. **Intelligence:** "Smart questions", "AI-guided", "Tailored"
3. **Results:** "Better responses", "Perfect prompts", "Effective"
4. **Integration:** "Works everywhere", "Seamless", "Any text field"
5. **Iteration:** "Keep improving", "Refine", "Real-time"

---

## Conversion Optimization Notes

### Above the Fold (Hero)
- Clear value proposition within 3 seconds
- Primary call-to-action buttons in hero section
- Visual proof (screenshot/demo)

### Key Messages
- "Free" emphasized
- "Works everywhere" - compatibility
- Clear benefits and features

---

### FEATURES
✨ Perfect Prompt - Marketing Features
🔄 Infinite Improvement Loop
Never settle for "good enough." Keep refining with fresh questions and custom tweaks until your prompt is absolutely perfect. Each iteration builds on the last - your insights compound.
🔒 100% Private. Zero API Keys. Always Free.
Your prompts never leave your device. Powered by Chrome's built-in AI - no accounts, no costs, no limits.
🧠 Smart Questions Replace Guesswork
Stop wondering what makes a good prompt. AI asks strategic questions to uncover exactly what you need - teaching you while it optimizes.
🎯 Works Everywhere You Type
ChatGPT, Claude, Gemini, Google Docs, email, Slack - any text field on any website. One extension, infinite possibilities.
⚡ Instant Results. No Waiting.
Local AI means no network delays, no rate limits, no loading screens. Just instant optimization.
🚫 Dismiss & Regenerate Questions
Don't like a question? Click X and get a fresh one instantly. AI remembers everything you've dismissed and never repeats itself across all iterations.
🔮 Two-Stage Power User Workflow
Stage 1: Answer 3 questions → Get optimized prompt
Stage 2: Keep improving with new questions + custom instructions → Iterate endlessly
📝 Generate or Optimize - Your Choice
Empty field? Describe your goal and AI writes the complete prompt. Already have text? AI makes it 10x better.
🎨 Edit Results in Real-Time
Optimized prompt appears in an editable text area. Manually tweak, then hit "Keep Improving" to let AI refine your edits.
🎓 Learn the Art of Prompting
Every clarifying question teaches you what professionals know. Get better results today AND become a better prompt writer tomorrow.
🔮 Auto-Detects Field Changes
Switch between input fields seamlessly. The modal updates automatically - no clicking, no closing, no friction.