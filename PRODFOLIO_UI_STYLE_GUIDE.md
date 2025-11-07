**\# Prodfolio UI Style Guide**

**\*\*Version:\*\*** 2.0  
**\*\*Last Updated:\*\*** November 6, 2025  
**\*\*North Star Principle:\*\*** User efficiency and task completion \> Visual aesthetics  
**\*\*Design System:\*\*** Glassy 2025 Fintech (Phase 5 Complete)

**\#\# Success Filter**

Every design decision in this guide passes this filter:

\> **\*\*"Does this make it easier, faster, or clearer for a PM to build their portfolio?"\*\***  
\> \- ✅ If YES → Implement it  
\> \- ❌ If NO → Don't include it  
\> \- 🤔 If UNSURE → Note for user testing

\---

**\#\# Table of Contents**

1\. \[SaaS UX Principles\](\#1-saas-ux-principles)  
2\. \[Color System (Functional First)\](\#2-color-system-functional-first)  
3\. \[Typography System\](\#3-typography-system)  
4\. \[Component Patterns\](\#4-component-patterns)  
5\. \[Layout & Spacing\](\#5-layout--spacing)  
6\. \[Interaction & Animation\](\#6-interaction--animation)  
7\. \[Accessibility Standards\](\#7-accessibility-standards)  
8\. \[Component Library\](\#8-component-library)

\---

**\#\# 1\. SaaS UX Principles**

**\#\#\# Core Philosophy**  
Prodfolio prioritizes **\*\*intuitive, clean, and highly functional\*\*** experiences over pure aesthetics. Every UI element must serve a clear purpose in helping product managers build and showcase their portfolios efficiently.

**\#\#\# 1.1 Zero Learning Curve**  
Users should understand how to use any feature within 3 seconds of seeing it.

**\*\*Guidelines:\*\***  
\- Use industry-standard patterns (modals for confirmations, inline editing for quick changes)  
\- Label buttons with action verbs (e.g., "Save Draft", not "OK")  
\- Provide immediate visual feedback for all actions  
\- Never require users to read documentation to understand basic features

**\*\*Example:\*\***  
\`\`\`tsx  
// ✅ GOOD: Clear, action-oriented  
\<Button\>Add Case Study\</Button\>

// ❌ BAD: Vague, requires interpretation  
\<Button\>New\</Button\>  
\`\`\`

**\#\#\# 1.2 Information Hierarchy**  
Content must be scannable. Users should find what they need without reading everything.

**\*\*Hierarchy Rules:\*\***  
1\. **\*\*Primary actions\*\*** → Highest contrast, prominent placement  
2\. **\*\*Secondary actions\*\*** → Lower contrast, adjacent placement  
3\. **\*\*Tertiary actions\*\*** → Ghost/link styles, subtle  
4\. **\*\*Destructive actions\*\*** → Separated, require confirmation

**\*\*Visual Weight Progression:\*\***  
\- Hero headings: Bold, large (40-48px)  
\- Section headings: Semibold, medium (24-32px)  
\- Subsection headings: Semibold, small (18-20px)  
\- Body text: Regular, readable (14-16px)  
\- Supporting text: Regular, smaller (12-14px)

**\#\#\# 1.3 Cognitive Load Minimization**

**\*\*Reduce Decisions:\*\***  
\- Default to the most common choice  
\- Progressive disclosure (show basic options first, advanced on demand)  
\- Chunk information (max 7±2 items per group)  
\- Use smart defaults that can be overridden

**\*\*Examples:\*\***  
\- Portfolio builder shows essential fields by default, "Advanced Settings" for edge cases  
\- Case study templates pre-fill with suggested structures  
\- Tags auto-suggest from user's previous entries

**\#\#\# 1.4 Feedback Mechanisms**

Every user action must receive immediate, clear feedback.

**\*\*Loading States:\*\***  
\- **\*\*\< 100ms:\*\*** No indicator needed  
\- **\*\*100ms \- 1s:\*\*** Subtle spinner or progress indicator  
\- **\*\*1s \- 5s:\*\*** Full loading state with message  
\- **\*\*\> 5s:\*\*** Progress bar showing completion percentage

**\*\*Success/Error Patterns:\*\***  
\`\`\`tsx  
// Success: Green toast, auto-dismiss after 3s  
toast.success("Portfolio published successfully\!")

// Error: Red toast with action, stays until dismissed  
toast.error("Failed to save. Check your connection.", {  
 action: { label: "Retry", onClick: () \=\> retry() }  
})

// Warning: Yellow toast with context  
toast.warning("Some images are still uploading...")  
\`\`\`

**\#\#\# 1.5 Data Density Guidelines**

Balance information density with scannability.

**\*\*Dashboard/List Views:\*\***  
\- Show 7-10 items per viewport initially  
\- Use compact cards with key information visible  
\- Provide "Show more" for additional details  
\- Prioritize recent/relevant content at top

**\*\*Detail Views:\*\***  
\- Single column for reading flow  
\- Maximum 80 characters line length  
\- Generous whitespace between sections  
\- Sticky headers for long-form content

**\#\#\# 1.6 Form Design Best Practices**

Forms are critical user touchpoints. Make them effortless.

**\*\*Layout:\*\***  
\- Single column (easier to scan and complete)  
\- Group related fields with subtle backgrounds  
\- Place labels above inputs (better for mobile, accessibility)  
\- Use placeholder text sparingly (it disappears\!)

**\*\*Validation:\*\***  
\- Validate on blur (not on every keystroke)  
\- Show success indicators for valid fields (subtle checkmark)  
\- Error messages appear inline, below the field  
\- Disable submit until all required fields are valid

**\*\*Example Structure:\*\***  
\`\`\`tsx  
\<form\>  
 \<FormField\>  
   \<Label\>Case Study Title \*\</Label\>  
   \<Input placeholder\="e.g., Launched New Mobile App" /\>  
   {error && \<ErrorMessage\>{error}\</ErrorMessage\>}  
   {valid && \<SuccessIndicator /\>}  
 \</FormField\>  
\</form\>  
\`\`\`

**\#\#\# 1.7 Navigation Patterns**

**\*\*Primary Navigation:\*\***  
\- Sidebar for main sections (Dashboard, Portfolio, Case Studies, Settings)  
\- Max 5-7 primary items  
\- Active state clearly indicated  
\- Collapsible on mobile

**\*\*Secondary Navigation:\*\***  
\- Tabs for related views within a section  
\- Breadcrumbs for deep hierarchies  
\- Back buttons that maintain context

**\*\*Navigation Hierarchy:\*\***  
1\. Primary: Top-level sections (always visible)  
2\. Secondary: Sub-sections within primary (contextual)  
3\. Tertiary: Actions within content (inline)

**\#\#\# 1.8 Modal vs. Inline vs. Drawer**

**\*\*Use Modals when:\*\***  
\- Requiring user decision before proceeding  
\- Capturing critical information  
\- Warning about destructive actions  
\- Content is self-contained and temporary

**\*\*Use Inline Editing when:\*\***  
\- Quick, single-field changes  
\- User needs to see surrounding context  
\- Changes are non-destructive and reversible

**\*\*Use Drawers when:\*\***  
\- Showing supplementary information  
\- Multi-step processes that need context  
\- Editing complex objects without losing page context

**\#\#\# 1.9 Empty States**

Never show a blank screen. Empty states are opportunities.

**\*\*Components:\*\***  
\- **\*\*Icon/Illustration:\*\*** Friendly, relevant to content type  
\- **\*\*Heading:\*\*** Clear statement of what's missing  
\- **\*\*Description:\*\*** Brief explanation (1-2 sentences)  
\- **\*\*Primary Action:\*\*** Clear CTA to add first item  
\- **\*\*Secondary Action (optional):\*\*** Link to docs/help

**\*\*Example:\*\***  
\`\`\`  
\[Icon: Portfolio\]  
No case studies yet  
Add your first case study to start building your portfolio.  
\[Button: Create Case Study\]  
\[Link: View examples\]  
\`\`\`

\---

**\#\# 2\. Color System (Functional First)**

**\#\#\# Philosophy**  
Colors serve functional purposes first, aesthetic purposes second. Every color choice must improve usability or communicate meaning.

**\#\#\# 2.1 Brand Palette Implementation**

Based on Prodfolio brand guidelines, colors are defined semantically:

**\#\#\#\# Primary Colors (CSS Variables in HSL)**

**\*\*Purple (Primary Brand Color):\*\***  
\`\`\`css  
\--primary: 257 100% 62%;           /\* \#9E85F9 \- Main actions, primary CTAs \*/  
\--primary-foreground: 0 0% 100%;   /\* White text on purple \*/  
\`\`\`  
**\*\*When to use:\*\*** Primary buttons, key CTAs, active states, brand moments

**\*\*Deep Purple (Secondary Brand Color):\*\***  
\`\`\`css  
\--secondary: 262 54% 41%;          /\* \#484689 \- Supporting actions \*/  
\--secondary-foreground: 0 0% 100%; /\* White text on deep purple \*/  
\`\`\`  
**\*\*When to use:\*\*** Secondary buttons, tags, accents, less prominent actions

**\*\*Navy (Dark Neutral):\*\***  
\`\`\`css  
\--foreground: 240 10% 6%;          /\* \#100D22 \- Primary text \*/  
\--navy-default: \#122349;           /\* Custom navy shade \*/  
\--navy-light: \#394867;  
\--navy-dark: \#0F1219;  
\`\`\`  
**\*\*When to use:\*\*** Body text, headings, dark backgrounds

**\*\*Lavender (Subtle Accent):\*\***  
\`\`\`css  
\--muted: 240 4.8% 95.9%;          /\* \#D6CEFF equivalent \- Subtle backgrounds \*/  
\`\`\`  
**\*\*When to use:\*\*** Hover states, subtle accents, disabled states, backgrounds

**\#\#\#\# Warm Accent System (Pending Selection)**

**\*\*Current Issue:\*\*** Orange accent \`hsl(31 92% 57%)\` not in brand guidelines

**\*\*Proposed Options:\*\***  
\`\`\`css  
/\* Option A: Warm Coral (Recommended) \*/  
\--accent: 9 100% 73%;              /\* \#FF8B7B \- Energetic, attention-grabbing \*/

/\* Option B: Warm Purple Gradient \*/  
\--accent: 290 80% 68%;             /\* Purple-to-pink tint \*/

/\* Option C: Soft Peach \*/  
\--accent: 25 100% 85%;             /\* \#FFCDB2 \- Softer, subtle highlights \*/  
\`\`\`

**\*\*Recommendation:\*\*** Option A (Warm Coral) for high-energy CTAs that need to stand out from purple system while maintaining warmth.

**\#\#\# 2.2 Semantic Color Usage**

**\#\#\#\# UI State Colors**

**\*\*Success:\*\***  
\`\`\`css  
\--success: 142 76% 36%;            /\* Green \*/  
\--success-foreground: 0 0% 100%;  
\`\`\`  
**\*\*Usage:\*\*** Successful saves, published portfolios, completed actions

**\*\*Warning:\*\***  
\`\`\`css  
\--warning: 38 92% 50%;             /\* Amber \*/  
\--warning-foreground: 0 0% 0%;  
\`\`\`  
**\*\*Usage:\*\*** Caution states, unsaved changes, approaching limits

**\*\*Error/Destructive:\*\***  
\`\`\`css  
\--destructive: 0 84.2% 60.2%;      /\* Red \*/  
\--destructive-foreground: 210 40% 98%;  
\`\`\`  
**\*\*Usage:\*\*** Failed actions, validation errors, delete confirmations

**\*\*Info:\*\***  
\`\`\`css  
\--info: 199 89% 48%;               /\* Blue \*/  
\--info-foreground: 0 0% 100%;  
\`\`\`  
**\*\*Usage:\*\*** Informational messages, tips, neutral notifications

**\#\#\#\# Background Colors**

\`\`\`css  
\--background: 0 0% 100%;           /\* Pure white \- Main canvas \*/  
\--card: 0 0% 100%;                 /\* White \- Card backgrounds \*/  
\--popover: 0 0% 100%;              /\* White \- Popover/dropdown backgrounds \*/  
\`\`\`

**\#\#\#\# Border & Input Colors**

\`\`\`css  
\--border: 240 5.9% 90%;            /\* Light gray \- Subtle borders \*/  
\--input: 240 5.9% 90%;             /\* Light gray \- Input borders \*/  
\--ring: 261 67% 54%;               /\* Purple \- Focus rings \*/  
\`\`\`

**\#\#\#\# Neutral Grays (Hierarchy)**

\`\`\`css  
\--muted: 240 4.8% 95.9%;           /\* Very light gray \- Subtle backgrounds \*/  
\--muted-foreground: 240 3.8% 46.1%; /\* Mid gray \- Secondary text \*/  
\`\`\`

**\#\#\# 2.3 Dark Mode**

Prodfolio includes dark mode support with adjusted color values:

\`\`\`css  
.dark {  
 \--background: 222.2 84% 4.9%;    /\* Very dark blue \*/  
 \--foreground: 210 40% 98%;       /\* Off-white text \*/  
 \--card: 222.2 84% 4.9%;  
 \--primary: 261 67% 54%;          /\* Slightly muted purple \*/  
 \--secondary: 262 54% 41%;  
 \--accent: 31 92% 57%;            /\* Keep warm accent visible \*/  
 \--border: 217.2 32.6% 17.5%;     /\* Dark borders \*/  
}  
\`\`\`

**\#\#\# 2.4 Accessibility: Color Contrast**

All color combinations must meet **\*\*WCAG 2.1 AA standards\*\*** (minimum 4.5:1 for normal text, 3:1 for large text).

**\*\*Tested Combinations:\*\***

| Foreground | Background | Ratio | Pass |  
|------------|------------|-------|------|  
| Navy (\#100D22) | White (\#FFFFFF) | 16.8:1 | ✅ AAA |  
| Purple (\#9E85F9) | White (\#FFFFFF) | 3.2:1 | ⚠️ Large text only |  
| White (\#FFFFFF) | Purple (\#9E85F9) | 3.2:1 | ⚠️ Large text only |  
| White (\#FFFFFF) | Deep Purple (\#484689) | 8.1:1 | ✅ AAA |  
| White (\#FFFFFF) | Navy (\#100D22) | 16.8:1 | ✅ AAA |

**\*\*Action Required:\*\***  
\- Primary purple buttons use white text (passes for large text/UI elements)  
\- Body text on purple backgrounds requires deep purple or navy  
\- Never use lavender for text (too low contrast)

**\#\#\# 2.5 Never Use Color Alone**

Color should reinforce meaning, not be the sole indicator.

**\*\*Always pair color with:\*\***  
\- Icons (e.g., checkmark for success, X for error)  
\- Text labels (e.g., "Success", "Error")  
\- Patterns/shapes (e.g., dashed borders for drafts)

**\*\*Example:\*\***  
\`\`\`tsx  
// ✅ GOOD: Color \+ Icon \+ Text  
\<Alert variant\="success"\>  
 \<CheckCircle /\> Successfully saved draft  
\</Alert\>

// ❌ BAD: Color only  
\<div className\="bg-green-500"\>Saved\</div\>  
\`\`\`

**\#\#\# 2.6 Color Usage by Component**

| Component | Primary Color | Use Case |  
|-----------|---------------|----------|  
| Primary Button | \`--primary\` | Main actions (Save, Publish, Create) |  
| Secondary Button | \`--secondary\` | Supporting actions (Cancel, Back) |  
| Accent Button | \`--accent\` | High-energy CTAs (Upgrade, Try Pro) |  
| Destructive Button | \`--destructive\` | Delete, remove, irreversible actions |  
| Tag/Badge | \`--secondary\` | Categories, skills, labels |  
| Link | \`--primary\` | Text links, navigation |  
| Focus Ring | \`--ring\` | Keyboard navigation focus |

\---

**\#\# 3\. Typography System**

**\#\#\# Philosophy**  
Typography optimized for readability and efficient scanning. Clear hierarchy guides users through content.

**\#\#\# 3.1 Font Families**

**\*\*Poppins (Display & UI):\*\***  
\- **\*\*Usage:\*\*** Headings, navigation, buttons, UI emphasis  
\- **\*\*Characteristics:\*\*** Geometric, friendly, professional  
\- **\*\*Weights:\*\*** 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

**\*\*Roboto (Body Text):\*\***  
\- **\*\*Usage:\*\*** Body text, descriptions, form fields, long-form content  
\- **\*\*Characteristics:\*\*** Highly readable, neutral, optimized for screens  
\- **\*\*Weights:\*\*** 400 (Regular), 500 (Medium), 700 (Bold)  
\- **\*\*Status:\*\*** ⚠️ **\*\*Needs Implementation\*\*** (currently using Poppins for all text)

**\*\*Fallbacks:\*\***  
\`\`\`css  
font-family: 'Poppins', 'Inter', sans-serif; /\* Display \*/  
font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif; /\* Body \*/  
\`\`\`

**\#\#\# 3.2 Type Scale**

Based on a modular scale with good visual rhythm:

| Name | Size | Line Height | Weight | Use Case |  
|------|------|-------------|--------|----------|  
| Hero | 40-48px | 1.1 | Bold (700) | Landing page headlines |  
| H1 | 32px | 1.2 | Semibold (600) | Page titles |  
| H2 | 24px | 1.3 | Semibold (600) | Section headings |  
| H3 | 20px | 1.4 | Semibold (600) | Subsection headings |  
| H4 | 18px | 1.4 | Medium (500) | Card headings |  
| Body Large | 16px | 1.6 | Regular (400) | Prominent body text |  
| Body | 14px | 1.5 | Regular (400) | Default body text |  
| Small | 12px | 1.5 | Regular (400) | Supporting text, captions |

**\#\#\# 3.3 Line Length (Measure)**

Optimal readability occurs at **\*\*60-80 characters per line\*\*** (approximately 600-800px).

**\*\*Implementation:\*\***  
\`\`\`css  
.content-text {  
 max-width: 70ch; /\* 70 characters \*/  
}

.prodfolio-container {  
 max-width: 1400px; /\* General layout container \*/  
}  
\`\`\`

**\#\#\# 3.4 Heading Hierarchy**

\`\`\`tsx  
// Hero (Landing pages)  
\<h1 className\="text-5xl font-bold leading-tight tracking-tight"\>  
 Build Your Product Portfolio  
\</h1\>

// H1 (Page titles)  
\<h1 className\="text-3xl font-semibold tracking-tight"\>  
 My Case Studies  
\</h1\>

// H2 (Section headings)  
\<h2 className\="text-2xl font-semibold"\>  
 Published Portfolios  
\</h2\>

// H3 (Subsections)  
\<h3 className\="text-xl font-semibold"\>  
 Project Overview  
\</h3\>

// H4 (Card headings)  
\<h4 className\="text-lg font-medium"\>  
 Mobile App Redesign  
\</h4\>  
\`\`\`

**\#\#\# 3.5 Body Text Guidelines**

**\*\*Line Height:\*\***  
\- Body text: 1.5-1.7 (better readability)  
\- Headings: 1.1-1.4 (tighter, more impactful)  
\- UI elements: 1.2-1.5 (balanced)

**\*\*Letter Spacing:\*\***  
\- Headings: \-0.02em to \-0.01em (tighter)  
\- Body text: 0 (default)  
\- Small text: 0.01em (slightly looser)

**\*\*Text Colors:\*\***  
\`\`\`css  
/\* Primary text \*/  
color: hsl(var(--foreground)); /\* Navy/dark blue \*/

/\* Secondary text \*/  
color: hsl(var(--muted-foreground)); /\* Mid gray \*/

/\* Disabled text \*/  
color: hsl(var(--muted-foreground) / 0.5); /\* Light gray \*/  
\`\`\`

**\#\#\# 3.6 Implementation To-Do**

**\*\*Add Roboto to Project:\*\***

1\. Update \`index.html\` or import in main CSS:  
\`\`\`html  
\<link rel\="preconnect" href\="https://fonts.googleapis.com"\>  
\<link rel\="preconnect" href\="https://fonts.gstatic.com" crossorigin\>  
\<link href\="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700\&family=Roboto:wght@400;500;700\&display=swap" rel\="stylesheet"\>  
\`\`\`

2\. Update \`tailwind.config.ts\`:  
\`\`\`typescript  
fontFamily: {  
 sans: \['Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'\], // Body  
 display: \['Poppins', 'Inter', 'sans-serif'\], // Headings/UI  
}  
\`\`\`

3\. Apply in components:  
\`\`\`tsx  
// Headings, buttons, UI  
\<h1 className\="font-display"\>Title\</h1\>

// Body text  
\<p className\="font-sans"\>Body text here...\</p\>  
\`\`\`

\---

**\#\# 4\. Component Patterns**

**\#\#\# Philosophy**  
Components are designed for **\*\*consistency, reusability, and clear communication\*\*** of their purpose.

\---

**\#\#\# 4.1 Buttons**

Buttons are the primary action mechanism. They must be unmistakable and clearly communicate their action.

**\#\#\#\# Variants**

**\*\*Primary (Default):\*\***  
\`\`\`tsx  
\<Button\>Save Changes\</Button\>  
\<Button variant\="default"\>Publish Portfolio\</Button\>  
\`\`\`  
\- **\*\*When to use:\*\*** Main action on a page or form  
\- **\*\*UX rationale:\*\*** Highest visual weight draws attention to primary action  
\- **\*\*Style:\*\*** Purple background, white text, subtle hover lift  
\- **\*\*Limit:\*\*** Max 1-2 per view

**\*\*Secondary:\*\***  
\`\`\`tsx  
\<Button variant\="secondary"\>Go Back\</Button\>  
\`\`\`  
\- **\*\*When to use:\*\*** Supporting actions that are less critical  
\- **\*\*UX rationale:\*\*** Lower contrast prevents competing with primary action  
\- **\*\*Style:\*\*** Deep purple background, white text, hover darken

**\*\*Outline:\*\***  
\`\`\`tsx  
\<Button variant\="outline"\>Cancel\</Button\>  
\`\`\`  
\- **\*\*When to use:\*\*** Tertiary actions, cancellations, neutral choices  
\- **\*\*UX rationale:\*\*** Minimal visual weight, doesn't distract from primary flow  
\- **\*\*Style:\*\*** Border only, transparent background, hover fill

**\*\*Ghost:\*\***  
\`\`\`tsx  
\<Button variant\="ghost"\>Learn More\</Button\>  
\`\`\`  
\- **\*\*When to use:\*\*** Inline actions, secondary navigation, subtle links  
\- **\*\*UX rationale:\*\*** Blends with content, available but unobtrusive  
\- **\*\*Style:\*\*** No border/background, text color primary, hover background

**\*\*Destructive:\*\***  
\`\`\`tsx  
\<Button variant\="destructive"\>Delete Case Study\</Button\>  
\`\`\`  
\- **\*\*When to use:\*\*** Irreversible or dangerous actions (delete, remove, reset)  
\- **\*\*UX rationale:\*\*** Red color signals caution, prompts user consideration  
\- **\*\*Style:\*\*** Red background, white text, requires confirmation dialog

**\*\*Accent (High Energy):\*\***  
\`\`\`tsx  
\<Button variant\="orange"\>Upgrade to Pro\</Button\>  
\`\`\`  
\- **\*\*When to use:\*\*** Conversion-focused CTAs, standout actions  
\- **\*\*UX rationale:\*\*** Warm color creates urgency and excitement  
\- **\*\*Style:\*\*** Orange/warm accent, white text, prominent

**\#\#\#\# Sizes**

\`\`\`tsx  
\<Button size\="sm"\>Small\</Button\>      {/\* Height: 36px \*/}  
\<Button size\="default"\>Default\</Button\> {/\* Height: 40px \*/}  
\<Button size\="lg"\>Large\</Button\>      {/\* Height: 44px \*/}  
\<Button size\="icon"\>🔍\</Button\>       {/\* Square: 40x40px \*/}  
\`\`\`

**\#\#\#\# States**

**\*\*Default:\*\***  
\- Clear, readable text  
\- Sufficient padding (min 16px horizontal)  
\- Visible hover affordance

**\*\*Hover:\*\***  
\`\`\`css  
.btn-primary:hover {  
 background: hsl(var(\--primary) / 0.9);  
 box-shadow: 0 4px 16px rgba(123, 63, 242, 0.2);  
 transform: scale(1.02); /\* Subtle lift \*/  
}  
\`\`\`

**\*\*Active (Pressed):\*\***  
\`\`\`css  
.btn-primary:active {  
 transform: scale(0.98); /\* Press down \*/  
}  
\`\`\`

**\*\*Disabled:\*\***  
\`\`\`tsx  
\<Button disabled\>Cannot Save\</Button\>  
\`\`\`  
\- **\*\*Style:\*\*** 50% opacity, no pointer events  
\- **\*\*UX Note:\*\*** Always explain why button is disabled (via tooltip or helper text)

**\*\*Loading:\*\***  
\`\`\`tsx  
\<Button disabled\>  
 \<Spinner className\="mr-2" /\> Saving...  
\</Button\>  
\`\`\`  
\- **\*\*Style:\*\*** Spinner replaces icon, text indicates action in progress  
\- **\*\*UX Note:\*\*** Disable clicks during loading, keep button visible (no layout shift)

**\#\#\#\# Common Mistakes to Avoid**

❌ **\*\*Too many primary buttons\*\*** (creates confusion)  
\`\`\`tsx  
\<Button\>Save\</Button\>  
\<Button\>Publish\</Button\>  
\<Button\>Send\</Button\>  
\`\`\`

✅ **\*\*One primary, others secondary/outline\*\***  
\`\`\`tsx  
\<Button\>Publish\</Button\>  
\<Button variant\="secondary"\>Save Draft\</Button\>  
\<Button variant\="outline"\>Cancel\</Button\>  
\`\`\`

❌ **\*\*Vague labels\*\***  
\`\`\`tsx  
\<Button\>OK\</Button\>  
\<Button\>Submit\</Button\>  
\`\`\`

✅ **\*\*Action-specific labels\*\***  
\`\`\`tsx  
\<Button\>Save Changes\</Button\>  
\<Button\>Create Case Study\</Button\>  
\`\`\`

**\#\#\#\# Accessibility Requirements**

\- **\*\*Keyboard:\*\*** Must be focusable and activatable via Enter/Space  
\- **\*\*Focus indicator:\*\*** Visible ring (2px purple outline)  
\- **\*\*Screen readers:\*\*** Text content must describe action  
\- **\*\*Touch targets:\*\*** Minimum 44x44px (WCAG 2.1 AA)  
\- **\*\*Disabled state:\*\*** Use \`aria-disabled\` and explain why

\`\`\`tsx  
\<Button  
 aria-label\="Save draft of case study"  
 aria-disabled\={\!canSave}  
 title\={\!canSave ? "Fill required fields to save" : ""}  
\>  
 Save Draft  
\</Button\>  
\`\`\`

\---

**\#\#\# 4.2 Cards**

Cards contain grouped, related information and actions.

**\#\#\#\# Types**

**\*\*Case Study Card:\*\***  
\`\`\`tsx  
\<Card className\="hover:shadow-elevated transition-shadow"\>  
 \<CardHeader\>  
   \<CardTitle\>Mobile App Redesign\</CardTitle\>  
   \<CardDescription\>Led UX overhaul for 50K users\</CardDescription\>  
 \</CardHeader\>  
 \<CardContent\>  
   \<img src\="thumbnail.jpg" alt\="Project preview" /\>  
   \<div className\="flex gap-2 mt-4"\>  
     \<Badge\>UX Research\</Badge\>  
     \<Badge\>Mobile\</Badge\>  
   \</div\>  
 \</CardContent\>  
 \<CardFooter\>  
   \<Button variant\="ghost"\>Edit\</Button\>  
   \<Button\>View Details\</Button\>  
 \</CardFooter\>  
\</Card\>  
\`\`\`

**\*\*Portfolio Card:\*\***  
\- **\*\*When to use:\*\*** Displaying published portfolios on dashboard  
\- **\*\*Contents:\*\*** Portfolio name, URL, last updated, status  
\- **\*\*Actions:\*\*** Edit, view live, share

**\*\*Generic Content Card:\*\***  
\- **\*\*When to use:\*\*** Grouping related information  
\- **\*\*Style:\*\*** White background, subtle border, hover shadow  
\- **\*\*Contents:\*\*** Flexible, any related content

**\#\#\#\# States**

\- **\*\*Default:\*\*** Subtle border, white background  
\- **\*\*Hover:\*\*** Elevated shadow (depth), slight scale (1.01)  
\- **\*\*Active:\*\*** Border highlight (purple)  
\- **\*\*Loading:\*\*** Skeleton placeholder (prevents layout shift)

**\#\#\#\# Accessibility**

\- **\*\*Focus:\*\*** Entire card should be focusable if clickable  
\- **\*\*Keyboard:\*\*** Enter to activate primary action  
\- **\*\*Screen readers:\*\*** Semantic structure (\`\<article\>\` or \`\<section\>\`)

\---

**\#\#\# 4.3 Forms**

Forms must be effortless and guide users to successful completion.

**\#\#\#\# Input Fields**

**\*\*Text Input:\*\***  
\`\`\`tsx  
\<div className\="space-y-2"\>  
 \<Label htmlFor\="title"\>Case Study Title \*\</Label\>  
 \<Input  
   id\="title"  
   type\="text"  
   placeholder\="e.g., Launched New Mobile App"  
   aria-required\="true"  
   aria-invalid\={\!\!error}  
   aria-describedby\={error ? "title-error" : undefined}  
 /\>  
 {error && (  
   \<p id\="title-error" className\="text-sm text-destructive"\>  
     {error}  
   \</p\>  
 )}  
\</div\>  
\`\`\`

**\*\*Textarea:\*\***  
\`\`\`tsx  
\<Textarea  
 rows\={4}  
 placeholder\="Describe the problem you were solving..."  
 className\="resize-none"  
/\>  
\`\`\`  
\- **\*\*Min height:\*\*** 80px (prevent tiny textareas)  
\- **\*\*Max height:\*\*** 400px (or allow expansion with resize)

**\*\*Select/Dropdown:\*\***  
\`\`\`tsx  
\<Select\>  
 \<SelectTrigger\>  
   \<SelectValue placeholder\="Select a category" /\>  
 \</SelectTrigger\>  
 \<SelectContent\>  
   \<SelectItem value\="research"\>UX Research\</SelectItem\>  
   \<SelectItem value\="design"\>Design\</SelectItem\>  
 \</SelectContent\>  
\</Select\>  
\`\`\`

**\#\#\#\# Validation**

**\*\*Timing:\*\***  
\- Validate on blur (when user leaves field)  
\- Show success checkmark on valid fields (optional, not required)  
\- Show errors immediately on blur, clear on change

**\*\*Error Messages:\*\***  
\- Appear below field, red text, small size  
\- Be specific: "Email must include @" not "Invalid input"  
\- Use friendly tone: "Oops, we need an email address"

**\*\*Visual States:\*\***  
\`\`\`css  
/\* Error state \*/  
.input-error {  
 border-color: hsl(var(\--destructive));  
 background: hsl(var(\--destructive) / 0.05);  
}

/\* Success state (optional) \*/  
.input-success {  
 border-color: hsl(var(\--success));  
}  
\`\`\`

**\#\#\#\# Accessibility**

\- **\*\*Labels:\*\*** Always visible (not placeholder-only)  
\- **\*\*Required fields:\*\*** Mark with \`\*\` and \`aria-required\`  
\- **\*\*Error messages:\*\*** Link with \`aria-describedby\`  
\- **\*\*Autocomplete:\*\*** Use HTML autocomplete attributes

\---

**\#\#\# 4.4 Modals/Dialogs**

**\*\*When to use:\*\***  
\- Critical decisions (delete, publish)  
\- Capturing focused information  
\- Interrupting user for important info

**\*\*Structure:\*\***  
\`\`\`tsx  
\<Dialog open\={isOpen} onOpenChange\={setIsOpen}\>  
 \<DialogContent\>  
   \<DialogHeader\>  
     \<DialogTitle\>Delete Case Study?\</DialogTitle\>  
     \<DialogDescription\>  
       This action cannot be undone. The case study will be permanently removed.  
     \</DialogDescription\>  
   \</DialogHeader\>  
   \<DialogFooter\>  
     \<Button variant\="outline" onClick\={() \=\> setIsOpen(false)}\>  
       Cancel  
     \</Button\>  
     \<Button variant\="destructive" onClick\={handleDelete}\>  
       Delete Forever  
     \</Button\>  
   \</DialogFooter\>  
 \</DialogContent\>  
\</Dialog\>  
\`\`\`

**\*\*Best Practices:\*\***  
\- **\*\*Focus trap:\*\*** Keep keyboard navigation within modal  
\- **\*\*Escape to close:\*\*** Allow ESC key to dismiss  
\- **\*\*Overlay click:\*\*** Close on background click (for non-critical modals)  
\- **\*\*Max width:\*\*** 600px (readable, not overwhelming)

\---

**\#\#\# 4.5 Tags/Badges**

**\*\*Usage:\*\*** Categorization, labels, status indicators

\`\`\`tsx  
\<Badge\>UX Research\</Badge\>  
\<Badge variant\="secondary"\>Mobile\</Badge\>  
\<Badge variant\="outline"\>Draft\</Badge\>  
\<Badge variant\="destructive"\>Archived\</Badge\>  
\`\`\`

**\*\*Styles:\*\***  
\- **\*\*Default:\*\*** Purple background, white text  
\- **\*\*Secondary:\*\*** Deep purple, white text  
\- **\*\*Outline:\*\*** Border only, transparent  
\- **\*\*Destructive:\*\*** Red background (for warnings)

**\*\*Size:\*\*** Small, compact (24-32px height)

\---

**\#\#\# 4.6 Tooltips**

**\*\*When to use:\*\***  
\- Explaining icon-only buttons  
\- Providing additional context without cluttering UI  
\- Showing keyboard shortcuts

\`\`\`tsx  
\<Tooltip\>  
 \<TooltipTrigger asChild\>  
   \<Button variant\="ghost" size\="icon"\>  
     \<HelpCircle /\>  
   \</Button\>  
 \</TooltipTrigger\>  
 \<TooltipContent\>  
   \<p\>Learn more about custom domains\</p\>  
 \</TooltipContent\>  
\</Tooltip\>  
\`\`\`

**\*\*Best Practices:\*\***  
\- Appear on hover after 300ms delay  
\- Dismiss on click or mouse leave  
\- Max width 300px, wrap text  
\- Don't hide critical information in tooltips

\---

**\#\#\# 4.7 Loading States/Skeletons**

**\*\*Purpose:\*\*** Maintain layout, provide perceived performance

**\*\*Skeletons:\*\***  
\`\`\`tsx  
\<div className\="space-y-4"\>  
 \<Skeleton className\="h-12 w-full" /\> {/\* Title \*/}  
 \<Skeleton className\="h-4 w-3/4" /\>  {/\* Subtitle \*/}  
 \<Skeleton className\="h-64 w-full" /\> {/\* Content \*/}  
\</div\>  
\`\`\`

**\*\*Shimmer Animation:\*\***  
\`\`\`css  
@keyframes shimmer {  
 0% { background-position: \-1000px 0; }  
 100% { background-position: 1000px 0; }  
}

.skeleton {  
 background: linear-gradient(  
   90deg,  
   hsl(var(\--muted)) 0%,  
   hsl(var(\--muted) / 0.5) 50%,  
   hsl(var(\--muted)) 100%  
 );  
 background-size: 1000px 100%;  
 animation: shimmer 2s infinite linear;  
}  
\`\`\`

**\*\*When to use:\*\***  
\- Initial page load (show structure immediately)  
\- Pagination/infinite scroll  
\- Slow API responses (\> 300ms)

\---

**\#\#\# 4.8 Navigation Patterns**

**\*\*Primary Sidebar:\*\***  
\`\`\`tsx  
\<aside className\="w-64 border-r"\>  
 \<nav\>  
   \<NavLink to\="/dashboard" active\={isActive}\>  
     \<LayoutDashboard /\>  
     Dashboard  
   \</NavLink\>  
   \<NavLink to\="/case-studies"\>  
     \<FileText /\>  
     Case Studies  
   \</NavLink\>  
 \</nav\>  
\</aside\>  
\`\`\`

**\*\*Active State:\*\***  
\- Background: \`hsl(var(--primary) / 0.1)\`  
\- Border-left: 3px solid primary color  
\- Text: Primary color, semibold

\---

**\#\# 5\. Layout & Spacing**

**\#\#\# Philosophy**  
Consistent spacing creates visual rhythm and improves scannability.

**\#\#\# 5.1 8px Spacing System**

All spacing uses multiples of 8px for consistent visual rhythm:

\`\`\`css  
/\* Tailwind spacing utilities \*/  
0   \= 0px  
1   \= 4px   (0.5 × 8\)  
2   \= 8px   (1 × 8\)  
3   \= 12px  (1.5 × 8\)  
4   \= 16px  (2 × 8\)  
6   \= 24px  (3 × 8\)  
8   \= 32px  (4 × 8\)  
12  \= 48px  (6 × 8\)  
16  \= 64px  (8 × 8\)  
\`\`\`

**\#\#\# 5.2 Spacing Usage**

| Element | Spacing | Tailwind Class |  
|---------|---------|----------------|  
| Between buttons | 8-12px | \`gap-2\` or \`gap-3\` |  
| Form field gap | 16px | \`space-y-4\` |  
| Section padding | 24-32px | \`p-6\` or \`p-8\` |  
| Card padding | 16-24px | \`p-4\` or \`p-6\` |  
| Page margins | 24-48px | \`px-6\` or \`px-12\` |  
| Between sections | 48-64px | \`space-y-12\` or \`space-y-16\` |

**\#\#\# 5.3 Content Width Limits**

Prevent eye strain and maintain readability:

\`\`\`css  
/\* Main content container \*/  
.prodfolio-container {  
 max-width: 1400px;  
 margin: 0 auto;  
 padding: 0 24px;  
}

/\* Reading content (articles, descriptions) \*/  
.content-text {  
 max-width: 70ch; /\* \~700px \*/  
}

/\* Forms \*/  
.form-container {  
 max-width: 600px;  
}  
\`\`\`

**\#\#\# 5.4 Z-Index Hierarchy**

Layering ensures proper stacking of UI elements:

\`\`\`css  
\--z-base: 0;          /\* Normal content \*/  
\--z-dropdown: 1000;   /\* Dropdowns, selects \*/  
\--z-sticky: 1100;     /\* Sticky headers \*/  
\--z-modal-overlay: 1200; /\* Modal backdrops \*/  
\--z-modal: 1300;      /\* Modal content \*/  
\--z-popover: 1400;    /\* Popovers, tooltips \*/  
\--z-toast: 1500;      /\* Notifications \*/  
\`\`\`

**\#\#\# 5.5 Responsive Breakpoints**

Content-first breakpoints (based on when design needs adjustment):

\`\`\`typescript  
// tailwind.config.ts  
screens: {  
 'sm': '640px',   // Mobile landscape  
 'md': '768px',   // Tablet portrait  
 'lg': '1024px',  // Tablet landscape / small laptop  
 'xl': '1280px',  // Desktop  
 '2xl': '1536px', // Large desktop  
}  
\`\`\`

**\*\*Mobile-first approach:\*\***  
\`\`\`tsx  
\<div className\="p-4 md:p-6 lg:p-8"\>  
 {/\* 16px mobile, 24px tablet, 32px desktop \*/}  
\</div\>  
\`\`\`

**\#\#\# 5.6 Grid System**

\`\`\`tsx  
// Two-column layout (responsive)  
\<div className\="grid grid-cols-1 md:grid-cols-2 gap-6"\>  
 \<Card\>Left\</Card\>  
 \<Card\>Right\</Card\>  
\</div\>

// Three-column layout  
\<div className\="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"\>  
 \<Card\>1\</Card\>  
 \<Card\>2\</Card\>  
 \<Card\>3\</Card\>  
\</div\>  
\`\`\`

\---

**\#\# 6\. Interaction & Animation**

**\#\#\# Philosophy**  
Animations provide feedback and guide attention, but must feel instant (\< 300ms).

**\#\#\# 6.1 Animation Principles**

1\. **\*\*Purpose-driven:\*\*** Every animation must serve a functional purpose  
2\. **\*\*Instant feel:\*\*** \< 300ms (anything longer feels sluggish)  
3\. **\*\*Respectful:\*\*** Honor \`prefers-reduced-motion\`  
4\. **\*\*No jank:\*\*** Maintain layout, avoid reflows

**\#\#\# 6.2 Timing Functions**

\`\`\`css  
/\* Use easing for natural motion \*/  
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); /\* ease-out \*/  
\`\`\`

**\*\*Recommended:\*\***  
\- **\*\*ease-out:\*\*** Elements entering viewport (modals, dropdowns)  
\- **\*\*ease-in:\*\*** Elements exiting viewport  
\- **\*\*ease-in-out:\*\*** State changes (hover, active)

**\#\#\# 6.3 Animation Durations**

\`\`\`css  
\--duration-instant: 100ms;  /\* Hover states, focus \*/  
\--duration-fast: 150ms;     /\* Button presses, small movements \*/  
\--duration-base: 200ms;     /\* Default transitions \*/  
\--duration-slow: 300ms;     /\* Large movements, modals \*/  
\`\`\`

**\#\#\# 6.4 Common Animations**

**\*\*Hover Effects:\*\***  
\`\`\`css  
.card {  
 transition: box-shadow 200ms ease-out, transform 200ms ease-out;  
}

.card:hover {  
 box-shadow: var(\--shadow-elevated);  
 transform: translateY(\-2px);  
}  
\`\`\`

**\*\*Button Press:\*\***  
\`\`\`css  
.button:active {  
 transform: scale(0.98);  
 transition-duration: 100ms;  
}  
\`\`\`

**\*\*Fade In:\*\***  
\`\`\`css  
@keyframes fadeIn {  
 from { opacity: 0; }  
 to { opacity: 1; }  
}

.fade-in {  
 animation: fadeIn 200ms ease-out;  
}  
\`\`\`

**\*\*Slide Up (for modals):\*\***  
\`\`\`css  
@keyframes slideUp {  
 from {  
   opacity: 0;  
   transform: translateY(20px);  
 }  
 to {  
   opacity: 1;  
   transform: translateY(0);  
 }  
}

.modal-enter {  
 animation: slideUp 250ms ease-out;  
}  
\`\`\`

**\#\#\# 6.5 Loading Animations**

**\*\*Spinner:\*\***  
\`\`\`tsx  
\<div className\="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" /\>  
\`\`\`

**\*\*Pulse (for avatars, icons):\*\***  
\`\`\`css  
@keyframes pulse {  
 0%, 100% { opacity: 1; }  
 50% { opacity: 0.5; }  
}

.pulse {  
 animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;  
}  
\`\`\`

**\#\#\# 6.6 Reduced Motion**

Always respect user preferences:

\`\`\`css  
@media (prefers-reduced-motion: reduce) {  
 \*,  
 \*::before,  
 \*::after {  
   animation-duration: 0.01ms \!important;  
   animation-iteration-count: 1 \!important;  
   transition-duration: 0.01ms \!important;  
 }  
}  
\`\`\`

\---

**\#\# 7\. Accessibility Standards**

**\#\#\# Philosophy**  
Prodfolio is usable by everyone, regardless of ability or assistive technology.

**\#\#\# 7.1 WCAG 2.1 AA Compliance**

**\*\*Target Standard:\*\*** WCAG 2.1 Level AA (legally required in many jurisdictions)

**\*\*Key Requirements:\*\***  
\- Color contrast: 4.5:1 for normal text, 3:1 for large text  
\- Keyboard navigation: All interactive elements accessible via keyboard  
\- Focus indicators: Visible focus states (2px outline, 3:1 contrast)  
\- Alt text: Meaningful descriptions for images  
\- Form labels: Programmatically associated with inputs  
\- Heading hierarchy: Proper semantic structure (H1 → H2 → H3)

**\#\#\# 7.2 Color Contrast Ratios**

All text/background combinations must meet minimum ratios:

**\*\*Normal Text (\< 18pt or \< 14pt bold):\*\***  
\- AA: 4.5:1 minimum  
\- AAA: 7:1 (strive for this when possible)

**\*\*Large Text (≥ 18pt or ≥ 14pt bold):\*\***  
\- AA: 3:1 minimum  
\- AAA: 4.5:1

**\*\*UI Components (buttons, borders):\*\***  
\- AA: 3:1 minimum

**\*\*Tools:\*\*** Use \[WebAIM Contrast Checker\](https://webaim.org/resources/contrastchecker/)

**\#\#\# 7.3 Keyboard Navigation**

**\*\*Focus Indicators:\*\***  
\`\`\`css  
\*:focus-visible {  
 outline: 2px solid hsl(var(\--ring));  
 outline-offset: 2px;  
}  
\`\`\`

**\*\*Tab Order:\*\***  
\- Logical, left-to-right, top-to-bottom  
\- Skip links for long navigation  
\- Modal focus traps

**\*\*Keyboard Shortcuts:\*\***  
| Key | Action |  
|-----|--------|  
| Tab | Move to next focusable element |  
| Shift+Tab | Move to previous element |  
| Enter/Space | Activate button/link |  
| Escape | Close modal/dropdown |  
| Arrow Keys | Navigate within lists/menus |

**\#\#\# 7.4 Screen Reader Support**

**\*\*Semantic HTML:\*\***  
\`\`\`tsx  
// ✅ GOOD: Semantic elements  
\<nav\>  
 \<ul\>  
   \<li\>\<a href\="/dashboard"\>Dashboard\</a\>\</li\>  
 \</ul\>  
\</nav\>

// ❌ BAD: Div soup  
\<div\>  
 \<div onClick\={goToDashboard}\>Dashboard\</div\>  
\</div\>  
\`\`\`

**\*\*ARIA Labels:\*\***  
\`\`\`tsx  
// Icon-only button  
\<Button aria-label\="Delete case study"\>  
 \<Trash /\>  
\</Button\>

// Loading state  
\<Button aria-busy\="true" aria-live\="polite"\>  
 \<Spinner /\> Saving...  
\</Button\>

// Expandable section  
\<button aria-expanded\={isOpen} aria-controls\="details-panel"\>  
 Show Details  
\</button\>  
\`\`\`

**\*\*Landmarks:\*\***  
\`\`\`tsx  
\<header role\="banner"\>...\</header\>  
\<nav role\="navigation"\>...\</nav\>  
\<main role\="main"\>...\</main\>  
\<aside role\="complementary"\>...\</aside\>  
\<footer role\="contentinfo"\>...\</footer\>  
\`\`\`

**\#\#\# 7.5 Form Accessibility**

**\*\*Labels:\*\***  
\`\`\`tsx  
// ✅ GOOD: Explicit label association  
\<Label htmlFor\="email"\>Email Address \*\</Label\>  
\<Input id\="email" type\="email" required /\>

// ❌ BAD: Placeholder-only label  
\<Input type\="email" placeholder\="Email" /\>  
\`\`\`

**\*\*Required Fields:\*\***  
\`\`\`tsx  
\<Input  
 id\="title"  
 aria-required\="true"  
 required  
/\>  
\<span aria-hidden\="true"\>\*\</span\> {/\* Visual only \*/}  
\`\`\`

**\*\*Error Messages:\*\***  
\`\`\`tsx  
\<Input  
 id\="email"  
 aria-invalid\={\!\!error}  
 aria-describedby\="email-error"  
/\>  
{error && (  
 \<p id\="email-error" role\="alert" className\="text-destructive"\>  
   {error}  
 \</p\>  
)}  
\`\`\`

**\#\#\# 7.6 Images & Media**

**\*\*Alt Text:\*\***  
\`\`\`tsx  
// Decorative images (no alt needed)  
\<img src\="decoration.svg" alt\="" role\="presentation" /\>

// Informative images  
\<img src\="chart.png" alt\="User growth chart showing 40% increase in Q3" /\>

// Linked images  
\<a href\="/case-study"\>  
 \<img src\="thumbnail.jpg" alt\="Mobile app redesign case study" /\>  
\</a\>  
\`\`\`

**\#\#\# 7.7 Testing Checklist**

**\*\*Manual Testing:\*\***  
\- \[ \] Navigate entire app using only keyboard (no mouse)  
\- \[ \] Test with screen reader (NVDA, JAWS, VoiceOver)  
\- \[ \] Zoom to 200% (text remains readable, no horizontal scroll)  
\- \[ \] Turn on high contrast mode (content still visible)  
\- \[ \] Enable \`prefers-reduced-motion\` (animations respect setting)

**\*\*Automated Testing:\*\***  
\- Use \[axe DevTools\](https://www.deque.com/axe/devtools/) browser extension  
\- Run Lighthouse accessibility audit  
\- Integrate \[axe-core\](https://github.com/dequelabs/axe-core) into CI/CD

\---

**\#\# Implementation Checklist**

**\#\#\# Phase 1: Color System Migration**  
\- \[ \] Replace orange accent with approved warm accent (coral/peach/warm purple)  
\- \[ \] Update CSS variables in \`src/index.css\`  
\- \[ \] Audit all components using \`bg-accent\` class  
\- \[ \] Test color contrast ratios for all new combinations

**\#\#\# Phase 2: Typography Implementation**  
\- \[ \] Add Roboto to Google Fonts import  
\- \[ \] Update \`tailwind.config.ts\` with dual font families  
\- \[ \] Apply \`font-display\` to headings/UI, \`font-sans\` to body text  
\- \[ \] Define typography utility classes for common patterns

**\#\#\# Phase 3: Component Audit**  
\- \[ \] Button: Ensure all variants follow guide  
\- \[ \] Cards: Consistent padding, hover states  
\- \[ \] Forms: Validation patterns, error messages  
\- \[ \] Modals: Focus trap, escape to close  
\- \[ \] Navigation: Active states, keyboard support

**\#\#\# Phase 4: Accessibility Audit**  
\- \[x\] Run axe DevTools on all pages  
\- \[x\] Keyboard navigation test (no mouse)  
\- \[x\] Screen reader test (key user flows)  
\- \[x\] Color contrast validation  
\- \[x\] Add skip links and landmarks

**\#\#\# Phase 5: Glassy 2025 Fintech Design System ✅ \*\*COMPLETED\*\***  
**\*\*Status:\*\*** Fully implemented across all components (November 2025\)

**\#\#\#\# 5.1 Foundation & Color System**  
\- \[x\] Enhanced glass effect utilities (backdrop-blur-glass: 12px)  
\- \[x\] Modern shadow system with purple tints (shadow-glass, shadow-float, shadow-soft)  
\- \[x\] Hairline border utility (0.5px)  
\- \[x\] Modern timing functions (ease-spring, ease-smooth, ease-bounce-in)  
\- \[x\] Gradient mesh backgrounds (bg-gradient-mesh, bg-gradient-mesh-intense)

**\#\#\#\# 5.2 Background & Layout Modernization**  
\- \[x\] Replace all gray-50 backgrounds with white or subtle gradients  
\- \[x\] PortfolioBuilder: gradient-mesh-bg for main wrapper  
\- \[x\] Editor panel: clean bg-white  
\- \[x\] Preview panel: bg-white with border-glass shadow-float  
\- \[x\] PortfolioRenderer sections: white or gradient-to-br from-white to-primary/5

**\#\#\#\# 5.3 Card System Overhaul**  
\- \[x\] Base card component with glass-card utility  
\- \[x\] Modern hover effects (shadow-glass-lg, border-primary/20, translateY)  
\- \[x\] CaseStudyCard: standardized glass styling  
\- \[x\] Portfolio cards: consistent glass-card pattern  
\- \[x\] Case study modal and builder components aligned

**\#\#\#\# 5.4 Navigation & Builder Interface**  
\- \[x\] Sidebar default collapsed (expands on first login)  
\- \[x\] Enhanced glass effect: bg-white/98 backdrop-blur-glass  
\- \[x\] Builder header: enhanced transparency and glass blur  
\- \[x\] Modern borders: border-glass throughout  
\- \[x\] Refined shadows: shadow-float for depth

**\#\#\#\# 5.5 Form Components Polish**  
\- \[x\] Input component: enhanced focus states (ring-primary/20, border-primary/40)  
\- \[x\] Textarea component: matched input focus states  
\- \[x\] Smooth transitions: transition-all on all form elements  
\- \[x\] Better integration with glass-card backgrounds

**\#\#\#\# 5.6 Animation & Interaction Refinement**  
\- \[x\] Button press feedback: active:scale-\[0.98\]  
\- \[x\] Smooth hover transitions: transition-all duration-200  
\- \[x\] Enhanced button hover: shadow-soft on primary/secondary/destructive  
\- \[x\] Link transitions: smooth color changes (0.2s cubic-bezier)  
\- \[x\] Custom animations: smooth-spin, subtle-pulse, fade-in  
\- \[x\] Reduced motion support: respects prefers-reduced-motion

**\#\#\#\# 5.7 Glass Morphism System**

**\*\*Glass Card Pattern:\*\***  
\`\`\`css  
.glass-card {  
 background: rgba(255, 255, 255, 0.95);  
 backdrop-filter: blur(12px);  
 border: 1px solid rgba(158, 133, 249, 0.1);  
 box-shadow: 0 4px 24px \-4px rgba(0, 0, 0, 0.08);  
 transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);  
}

.glass-card:hover {  
 box-shadow: 0 8px 32px 0 rgba(158, 133, 249, 0.12);  
 border-color: rgba(158, 133, 249, 0.2);  
 transform: translateY(\-2px);  
}  
\`\`\`

**\*\*Gradient Mesh Backgrounds:\*\***  
\`\`\`css  
.gradient-mesh-bg {  
 background:  
   radial-gradient(at 20% 30%, rgba(158, 133, 249, 0.05) 0px, transparent 50%),  
   radial-gradient(at 80% 70%, rgba(255, 139, 123, 0.05) 0px, transparent 50%),  
   white;  
}  
\`\`\`

**\*\*Border Utilities:\*\***  
\- \`.border-glass\`: 1px solid rgba(158, 133, 249, 0.08)  
\- \`.border-glass-light\`: 1px solid rgba(158, 133, 249, 0.05)  
\- \`.border-glass-strong\`: 1px solid rgba(158, 133, 249, 0.15)

**\*\*Shadow System:\*\***  
\- \`.shadow-glass\`: 0 8px 32px 0 rgba(158, 133, 249, 0.08)  
\- \`.shadow-float\`: 0 4px 24px \-4px rgba(0, 0, 0, 0.08)  
\- \`.shadow-soft\`: 0 12px 28px \-12px hsl(var(--ring) / 0.18)

**\*\*Usage Guidelines:\*\***  
\- Use \`glass-card\` for all card components  
\- Use \`gradient-mesh-bg\` for page backgrounds instead of gray-50  
\- Apply \`border-glass\` for subtle separators  
\- Use \`shadow-float\` for elevated elements (headers, panels)  
\- Apply purple-tinted hover states (hover:bg-primary/5)

**\*\*Visual Impact:\*\***  
\- Professional, revenue-generating aesthetic  
\- Consistent glass morphism across all surfaces  
\- Purple-tinted shadows for brand alignment  
\- Clean white backgrounds with subtle depth  
\- Modern micro-interactions and animations

\---

**\#\# 8\. Component Library**

**\#\#\# 8.1 Component Philosophy**

Our component library is built on three principles:  
1\. **\*\*Consistency\*\*** \- Same behavior across the app  
2\. **\*\*Accessibility\*\*** \- Keyboard and screen reader support by default  
3\. **\*\*Flexibility\*\*** \- Composable and customizable

**\#\#\# 8.2 Button Component**

The primary interactive element for user actions.

**\*\*When to use:\*\***  
\- Main CTAs (save, submit, create)  
\- Secondary actions (cancel, back)  
\- Destructive actions (delete, remove)  
\- Navigation triggers

**\*\*Variants:\*\***

\`\`\`tsx  
// Primary \- Main CTAs (limit to 1-2 per page)  
\<Button variant\="default"\>Save Portfolio\</Button\>

// Secondary \- Supporting actions  
\<Button variant\="secondary"\>Preview\</Button\>

// Outline \- Alternative secondary actions  
\<Button variant\="outline"\>Cancel\</Button\>

// Destructive \- Delete, remove actions (always confirm)  
\<Button variant\="destructive"\>Delete Case Study\</Button\>

// Ghost \- Subtle actions, toolbar buttons  
\<Button variant\="ghost"\>Edit\</Button\>

// Link \- Text links styled as buttons  
\<Button variant\="link"\>Learn More\</Button\>  
\`\`\`

**\*\*Sizes:\*\***

\`\`\`tsx  
\<Button size\="sm"\>Small Action\</Button\>      {/\* 36px height \*/}  
\<Button size\="default"\>Default Action\</Button\> {/\* 40px height \*/}  
\<Button size\="lg"\>Large CTA\</Button\>          {/\* 44px height \*/}  
\<Button size\="icon"\>\<Icon /\>\</Button\>          {/\* Square button \*/}  
\`\`\`

**\*\*Loading State:\*\***

\`\`\`tsx  
\<Button disabled\={isLoading}\>  
 {isLoading ? (  
   \<\>  
     \<Loader2 className\="mr-2 h-4 w-4 animate-spin" /\>  
     Saving...  
   \</\>  
 ) : (  
   'Save Changes'  
 )}  
\</Button\>  
\`\`\`

**\*\*Accessibility:\*\***  
\- ✅ Keyboard: Enter/Space to activate  
\- ✅ Focus: 2px ring with brand color  
\- ✅ Screen reader: Button role, label read aloud  
\- ✅ Disabled: \`pointer-events-none\`, reduced opacity

\---

**\#\#\# 8.3 Form Components**

**\#\#\#\# Input**

Text input for single-line data entry.

**\*\*Basic Usage:\*\***

\`\`\`tsx  
\<div className\="space-y-2"\>  
 \<Label htmlFor\="name"\>Name\</Label\>  
 \<Input  
   id\="name"  
   type\="text"  
   placeholder\="Enter your name"  
   value\={name}  
   onChange\={(e) \=\> setName(e.target.value)}  
 /\>  
\</div\>  
\`\`\`

**\*\*With Error State:\*\***

\`\`\`tsx  
\<div className\="space-y-2"\>  
 \<Label htmlFor\="email"\>Email\</Label\>  
 \<Input  
   id\="email"  
   type\="email"  
   value\={email}  
   onChange\={(e) \=\> setEmail(e.target.value)}  
   aria-invalid\={\!\!error}  
   aria-describedby\={error ? "email-error" : undefined}  
   className\={error ? "border-destructive" : ""}  
 /\>  
 {error && (  
   \<p id\="email-error" className\="text-sm text-destructive"\>  
     {error}  
   \</p\>  
 )}  
\</div\>  
\`\`\`

**\*\*Accessibility:\*\***  
\- ✅ Always pair with \`\<Label\>\` using \`htmlFor\`  
\- ✅ Use \`aria-invalid\` for error states  
\- ✅ Use \`aria-describedby\` to link error messages  
\- ✅ Clear placeholder text (not labels\!)

\---

**\#\#\#\# Textarea**

Multi-line text input for longer content.

\`\`\`tsx  
\<div className\="space-y-2"\>  
 \<Label htmlFor\="description"\>Description\</Label\>  
 \<Textarea  
   id\="description"  
   placeholder\="Describe your case study..."  
   value\={description}  
   onChange\={(e) \=\> setDescription(e.target.value)}  
   rows\={4}  
 /\>  
\</div\>  
\`\`\`

\---

**\#\#\#\# Select**

Dropdown selection for choosing from predefined options.

\`\`\`tsx  
\<div className\="space-y-2"\>  
 \<Label htmlFor\="category"\>Category\</Label\>  
 \<Select value\={category} onValueChange\={setCategory}\>  
   \<SelectTrigger id\="category"\>  
     \<SelectValue placeholder\="Select a category" /\>  
   \</SelectTrigger\>  
   \<SelectContent\>  
     \<SelectItem value\="product"\>Product\</SelectItem\>  
     \<SelectItem value\="growth"\>Growth\</SelectItem\>  
     \<SelectItem value\="design"\>Design\</SelectItem\>  
   \</SelectContent\>  
 \</Select\>  
\</div\>  
\`\`\`

\---

**\#\#\#\# Checkbox**

Boolean input for yes/no selections.

\`\`\`tsx  
\<div className\="flex items-center space-x-2"\>  
 \<Checkbox  
   id\="terms"  
   checked\={accepted}  
   onCheckedChange\={setAccepted}  
 /\>  
 \<Label  
   htmlFor\="terms"  
   className\="cursor-pointer"  
 \>  
   I accept the terms and conditions  
 \</Label\>  
\</div\>  
\`\`\`

\---

**\#\#\#\# Switch**

Toggle for on/off states (alternative to checkbox).

\`\`\`tsx  
\<div className\="flex items-center justify-between"\>  
 \<div className\="space-y-0.5"\>  
   \<Label htmlFor\="notifications"\>Email Notifications\</Label\>  
   \<p className\="text-sm text-muted-foreground"\>  
     Receive emails about your portfolio activity  
   \</p\>  
 \</div\>  
 \<Switch  
   id\="notifications"  
   checked\={enabled}  
   onCheckedChange\={setEnabled}  
 /\>  
\</div\>  
\`\`\`

**\*\*When to use Switch vs Checkbox:\*\***  
\- Use **\*\*Switch\*\*** for settings that take effect immediately  
\- Use **\*\*Checkbox\*\*** for form submissions or multi-select

\---

**\#\#\# 8.4 Layout Components**

**\#\#\#\# Card**

Container for grouping related content.

**\*\*Basic Usage:\*\***

\`\`\`tsx  
\<Card\>  
 \<CardHeader\>  
   \<CardTitle\>Profile Information\</CardTitle\>  
   \<CardDescription\>Update your personal details\</CardDescription\>  
 \</CardHeader\>  
 \<CardContent\>  
   {/\* Form fields \*/}  
 \</CardContent\>  
 \<CardFooter\>  
   \<Button\>Save Changes\</Button\>  
 \</CardFooter\>  
\</Card\>  
\`\`\`

**\*\*When to use:\*\***  
\- Grouping related settings  
\- Displaying case studies or portfolios  
\- Creating distinct content sections

**\*\*Remove border for cleaner look:\*\***

\`\`\`tsx  
\<Card className\="border-0"\>  
 {/\* Content \*/}  
\</Card\>  
\`\`\`

\---

**\#\#\#\# Separator**

Visual divider between sections.

\`\`\`tsx  
\<div\>  
 \<p\>Section One Content\</p\>  
 \<Separator className\="my-4" /\>  
 \<p\>Section Two Content\</p\>  
\</div\>  
\`\`\`

\---

**\#\#\#\# Tabs**

Organize content into switchable panels.

\`\`\`tsx  
\<Tabs defaultValue\="account"\>  
 \<TabsList\>  
   \<TabsTrigger value\="account"\>Account\</TabsTrigger\>  
   \<TabsTrigger value\="password"\>Password\</TabsTrigger\>  
 \</TabsList\>  
 \<TabsContent value\="account"\>  
   {/\* Account settings \*/}  
 \</TabsContent\>  
 \<TabsContent value\="password"\>  
   {/\* Password settings \*/}  
 \</TabsContent\>  
\</Tabs\>  
\`\`\`

\---

**\#\#\# 8.5 Feedback Components**

**\#\#\#\# Badge**

Display status, tags, or metadata.

**\*\*Variants:\*\***

\`\`\`tsx  
\<Badge variant\="default"\>Active\</Badge\>  
\<Badge variant\="secondary"\>Draft\</Badge\>  
\<Badge variant\="destructive"\>Deleted\</Badge\>  
\<Badge variant\="outline"\>Pending\</Badge\>  
\`\`\`

**\*\*Use cases:\*\***  
\- Status indicators (Published, Draft, Archived)  
\- Skill tags  
\- Counts (3 case studies)  
\- Category labels

\---

**\#\#\#\# Toast**

Non-intrusive notifications for user feedback.

\`\`\`tsx  
import { toast } from "@/hooks/use-toast"

// Success  
toast({  
 title: "Portfolio saved\!",  
 description: "Your changes have been published.",  
})

// Error  
toast({  
 title: "Save failed",  
 description: "Please check your connection and try again.",  
 variant: "destructive"  
})

// With action  
toast({  
 title: "Portfolio deleted",  
 action: \<Button onClick\={undo}\>Undo\</Button\>  
})  
\`\`\`

**\*\*Guidelines:\*\***  
\- Success messages: Auto-dismiss after 3-5 seconds  
\- Error messages: Persist until dismissed (provide action if possible)  
\- Loading states: Show spinner, update on completion  
\- Keep messages concise (1-2 lines)

\---

**\#\#\#\# Tooltip**

Contextual help for UI elements.

\`\`\`tsx  
\<TooltipProvider\>  
 \<Tooltip\>  
   \<TooltipTrigger asChild\>  
     \<Button variant\="icon"\>  
       \<HelpCircle className\="h-4 w-4" /\>  
     \</Button\>  
   \</TooltipTrigger\>  
   \<TooltipContent\>  
     \<p\>Click to learn more about this feature\</p\>  
   \</TooltipContent\>  
 \</Tooltip\>  
\</TooltipProvider\>  
\`\`\`

**\*\*When to use:\*\***  
\- Icon buttons (always\!)  
\- Abbreviated text  
\- Additional context for form fields  
\- Help text that shouldn't clutter the UI

\---

**\#\#\#\# Skeleton**

Loading placeholder for content.

\`\`\`tsx  
\<div className\="space-y-4"\>  
 \<Skeleton className\="h-12 w-\[250px\]" /\>  
 \<Skeleton className\="h-4 w-full" /\>  
 \<Skeleton className\="h-4 w-\[80%\]" /\>  
\</div\>  
\`\`\`

\---

**\#\#\# 8.6 Overlay Components**

**\#\#\#\# Dialog (Modal)**

Modal dialog for focused tasks or confirmations.

\`\`\`tsx  
\<Dialog open\={open} onOpenChange\={setOpen}\>  
 \<DialogTrigger asChild\>  
   \<Button\>Open Dialog\</Button\>  
 \</DialogTrigger\>  
 \<DialogContent\>  
   \<DialogHeader\>  
     \<DialogTitle\>Confirm Deletion\</DialogTitle\>  
     \<DialogDescription\>  
       This action cannot be undone. Are you sure?  
     \</DialogDescription\>  
   \</DialogHeader\>  
   \<DialogFooter\>  
     \<Button variant\="outline" onClick\={() \=\> setOpen(false)}\>  
       Cancel  
     \</Button\>  
     \<Button variant\="destructive" onClick\={handleDelete}\>  
       Delete  
     \</Button\>  
   \</DialogFooter\>  
 \</DialogContent\>  
\</Dialog\>  
\`\`\`

**\*\*When to use:\*\***  
\- Confirmations (delete, discard changes)  
\- Forms that require focus  
\- Multi-step processes  
\- Error details

**\*\*Guidelines:\*\***  
\- Always provide a way to close (X button, Cancel, ESC key)  
\- Limit content height (use scrolling if needed)  
\- Destructive actions should require confirmation  
\- Focus management: Return focus to trigger on close

\---

**\#\#\#\# Sheet**

Slide-out drawer for secondary content.

\`\`\`tsx  
\<Sheet\>  
 \<SheetTrigger asChild\>  
   \<Button\>Open Filters\</Button\>  
 \</SheetTrigger\>  
 \<SheetContent side\="right"\>  
   \<SheetHeader\>  
     \<SheetTitle\>Filter Options\</SheetTitle\>  
     \<SheetDescription\>  
       Refine your search results  
     \</SheetDescription\>  
   \</SheetHeader\>  
   {/\* Filter controls \*/}  
 \</SheetContent\>  
\</Sheet\>  
\`\`\`

**\*\*When to use:\*\***  
\- Filters and search options  
\- Settings panels  
\- Additional information  
\- Mobile navigation menus

\---

**\#\#\# 8.7 Component Patterns**

**\#\#\#\# Inline Save States**

Show immediate feedback for save operations.

\`\`\`tsx  
const \[saving, setSaving\] \= useState(false);  
const \[saved, setSaved\] \= useState(false);

const handleSave \= async () \=\> {  
 setSaving(true);  
 setSaved(false);  
 try {  
   await saveData();  
   setSaved(true);  
   setTimeout(() \=\> setSaved(false), 3000); // Auto-hide after 3s  
 } finally {  
   setSaving(false);  
 }  
};

return (  
 \<Button onClick\={handleSave} disabled\={saving}\>  
   {saving ? (  
     \<\>  
       \<Loader2 className\="mr-2 h-4 w-4 animate-spin" /\>  
       Saving...  
     \</\>  
   ) : saved ? (  
     \<\>  
       \<Check className\="mr-2 h-4 w-4" /\>  
       Saved  
     \</\>  
   ) : (  
     'Save Changes'  
   )}  
 \</Button\>  
);  
\`\`\`

\---

**\#\#\#\# Form Error Handling**

Consistent error display across forms.

\`\`\`tsx  
const \[errors, setErrors\] \= useState({});

return (  
 \<form\>  
   \<div className\="space-y-2"\>  
     \<Label htmlFor\="email"\>Email\</Label\>  
     \<Input  
       id\="email"  
       type\="email"  
       value\={email}  
       onChange\={(e) \=\> setEmail(e.target.value)}  
       aria-invalid\={\!\!errors.email}  
       aria-describedby\={errors.email ? "email-error" : undefined}  
       className\={errors.email ? "border-destructive" : ""}  
     /\>  
     {errors.email && (  
       \<p id\="email-error" className\="text-sm text-destructive"\>  
         {errors.email}  
       \</p\>  
     )}  
   \</div\>  
 \</form\>  
);  
\`\`\`

\---

**\#\#\#\# Confirmations for Destructive Actions**

Always confirm before deleting or removing data.

\`\`\`tsx  
const \[isOpen, setIsOpen\] \= useState(false);

const handleDelete \= async () \=\> {  
 await deleteItem();  
 setIsOpen(false);  
 toast({ title: "Item deleted successfully" });  
};

return (  
 \<Dialog open\={isOpen} onOpenChange\={setIsOpen}\>  
   \<DialogTrigger asChild\>  
     \<Button variant\="destructive"\>Delete\</Button\>  
   \</DialogTrigger\>  
   \<DialogContent\>  
     \<DialogHeader\>  
       \<DialogTitle\>Are you sure?\</DialogTitle\>  
       \<DialogDescription\>  
         This action cannot be undone. This will permanently delete your case study.  
       \</DialogDescription\>  
     \</DialogHeader\>  
     \<DialogFooter\>  
       \<Button variant\="outline" onClick\={() \=\> setIsOpen(false)}\>  
         Cancel  
       \</Button\>  
       \<Button variant\="destructive" onClick\={handleDelete}\>  
         Yes, Delete  
       \</Button\>  
     \</DialogFooter\>  
   \</DialogContent\>  
 \</Dialog\>  
);  
\`\`\`

\---

**\#\#\# 8.8 Component Accessibility Checklist**

For every component, ensure:

**\*\*Keyboard Navigation:\*\***  
\- \[ \] Tab to focus  
\- \[ \] Enter/Space to activate  
\- \[ \] Arrow keys for lists/menus  
\- \[ \] ESC to close overlays

**\*\*Screen Reader:\*\***  
\- \[ \] Semantic HTML (button, input, nav, etc.)  
\- \[ \] ARIA labels where needed  
\- \[ \] Role attributes for custom components  
\- \[ \] Live regions for dynamic updates

**\*\*Visual:\*\***  
\- \[ \] Focus indicators (2px ring)  
\- \[ \] Color contrast (4.5:1 minimum)  
\- \[ \] Text sizing (minimum 14px)  
\- \[ \] Touch targets (minimum 44x44px)

**\*\*States:\*\***  
\- \[ \] Default  
\- \[ \] Hover  
\- \[ \] Focus  
\- \[ \] Active  
\- \[ \] Disabled  
\- \[ \] Loading  
\- \[ \] Error

\---

**\#\# Resources**

**\#\#\# Design System References**  
\- \[Linear Design System\](https://linear.app/design-system)  
\- \[Notion Design System\](https://www.notion.so/design)  
\- \[Figma UI\](https://www.figma.com/)

**\#\#\# Accessibility**  
\- \[WCAG 2.1 Quick Reference\](https://www.w3.org/WAI/WCAG21/quickref/)  
\- \[WebAIM Contrast Checker\](https://webaim.org/resources/contrastchecker/)  
\- \[axe DevTools\](https://www.deque.com/axe/devtools/)

**\#\#\# Typography**  
\- \[Google Fonts: Poppins\](https://fonts.google.com/specimen/Poppins)  
\- \[Google Fonts: Roboto\](https://fonts.google.com/specimen/Roboto)

**\#\#\# Code References**  
\- Current colors: \[src/index.css:8-90\](src/index.css\#L8-L90)  
\- Tailwind config: \[tailwind.config.ts\](tailwind.config.ts)  
\- Button component: \[src/components/ui/button.tsx\](src/components/ui/button.tsx)

\---

**\#\# Questions & Feedback**

For questions about this style guide or to propose changes:  
1\. Open an issue on GitHub  
2\. Reference this guide and specific section  
3\. Provide UX rationale for proposed changes  
4\. Include examples/mockups if applicable

**\*\*Remember:\*\*** Every design decision must pass the filter:  
\> "Does this make it easier, faster, or clearer for a PM to build their portfolio?"

\---

**\*\*Document Owner:\*\*** Product Team  
**\*\*Last Review:\*\*** November 1, 2025  
**\*\*Next Review:\*\*** January 2026

