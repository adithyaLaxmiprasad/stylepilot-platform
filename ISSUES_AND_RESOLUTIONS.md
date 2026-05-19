# StylePilot AI - Issues & Resolutions Log

This document tracks technical hurdles, architectural challenges, and design problems encountered during the development of StylePilot AI, along with their implemented solutions. It serves as a continuous knowledge base for future iterations.

---

### 1. Google GenAI SDK Model Versioning Conflict
**Issue:** 
After migrating from OpenAI to the new `@google/genai` SDK for image analysis, the backend threw a `404 Not Found` error stating: `models/gemini-1.5-flash is not found for API version v1beta`. The newer SDK version had distinct structural requirements for models.
**Resolution:** 
Upgraded the target model string in `ai-service/src/index.js` from `gemini-1.5-flash` to `gemini-2.5-flash`. The newer model natively supports the exact multimodal inputs in the `v1beta` environment without deprecation warnings, restoring instant generation capabilities.

### 2. UI Conflict: Redundant Skin Tone Selection
**Issue:** 
The original UI included a standard text `<select>` dropdown for Skin Tone alongside an interactive, visual circle-based `SkinToneGuide` component. This was redundant and degraded the premium "luxury" feel of the platform by offering two conflicting ways to set the same state.
**Resolution:** 
Completely removed the `InputSelect` component for skin tone from `page.tsx`. Bound the `skinTone` React state exclusively to the visual `SkinToneGuide`, forcing a more elegant, tactile user experience.

### 3. Styling Limitations of Native HTML Select Elements
**Issue:** 
To achieve the Apple/Nike luxury aesthetic, we needed dropdown menus that supported custom typography tracking, glowing borders on focus, and frosted glass backgrounds. The native HTML `<select>` and `<option>` tags are severely restricted by the OS and browser, making it impossible to style the open dropdown menu seamlessly.
**Resolution:** 
Scrapped the native `<select>` element entirely. Built a custom `InputSelect` React component from scratch. It utilizes a `framer-motion` `<AnimatePresence>` block for buttery smooth entrance/exit animations, a custom `max-height` overflow container with a custom scrollbar, and an `useEffect` hook to detect "clicks outside" to close the menu.

### 4. Background Animation Distraction vs. Premium Feel
**Issue:** 
The user requested a "continuous, wow-factor" background that felt alive but remained elegant. Traditional particle.js implementations felt too "techy" or distracting, ruining text readability.
**Resolution:** 
Implemented an "Aurora Mesh" using pure CSS. Placed 3 massive, highly blurred (`blur-[120px]`) circular `div`s with low opacity behind a global `mix-blend-overlay` noise texture. Assigned infinite, alternating CSS keyframes (`translate` and `rotate`) to each circle to create a breathing, liquid gradient effect that never repeats exactly the same way.

### 5. Managing Generation History Without a Database
**Issue:** 
The user wanted to keep track of their best generated outfits on the page, but the project does not yet utilize a backend database (like PostgreSQL or MongoDB) for persistent user sessions.
**Resolution:** 
Implemented a local, React state-based First-In-First-Out (FIFO) queue. A `history` array state was added to `page.tsx`. On every successful generation, `data.outfits[0]` is unshifted into the array. If the array length exceeds 5, `.pop()` is called to drop the oldest item. Rendered via an `AnimatePresence` grid at the bottom of the page ("Style Archive"). *(Note: This history resets upon a browser refresh until a DB is integrated).*

### 6. Missing Favicon in Browser Tabs
**Issue:** 
The Next.js App Router was displaying the default Vercel/Next.js logo in the browser tab instead of the new StylePilot AI logo.
**Resolution:** 
Extracted the SVG code from the custom React `<Logo />` component. Thickened the stroke weights from `1.5px` to `6px` and scaled up the dots to ensure visibility at very small resolutions. Saved this strictly as `src/app/icon.svg` allowing Next.js to automatically compile and serve it as the application favicon.

### 7. Static Loading State & Cluttered History Grid
**Issue:**
The previous loading state was a standard, generic spinning circle, and the "Style Archive" (history) used a standard wrapping grid that became visually cluttered when 5 cards were present. Long text descriptions in the history cards would spill out of the layout.
**Resolution:**
Created a custom `ClothesLoader.tsx` component that cycles through elegant SVG icons (shirt, pants, dress, sparkle) at 700ms intervals using `framer-motion` to simulate a "Myntra-like" premium loading experience. Refactored the history section in `page.tsx` to use a `flex overflow-x-auto snap-x` horizontal scroll layout (`hide-scrollbar`), and applied `line-clamp-3` to the `OutfitCard` to perfectly constrain text and maintain the luxury aesthetic.

### 8. Enhancing Background Interactivity
**Issue:**
While the CSS Aurora background was visually appealing, the user requested an ambient effect that reacted to cursor movement to increase the premium, "alive" feel of the platform without being distracting.
**Resolution:**
Built an `InteractiveBackground.tsx` client component that listens to the `mousemove` event and tracks the cursor coordinates. Used a `framer-motion` animated `div` with a massive `blur-[140px]` and `mix-blend-screen` to create a soft, glowing orb that fluidly trails the user's cursor. Handled SSR compatibility by wrapping the rendering logic in a client-side `isClient` check.

---
*(End of current log - To be updated during further iterations)*
