# HANDOFF CONTEXT: Abdur Rehman Cybersecurity Portfolio

## 1. Project Overview
This repository contains Abdur Rehman's 3D-enabled cybersecurity portfolio. The project is designed with a premium, glassmorphism aesthetic inspired by dark-mode terminal interfaces and autonomous cyber-defense platforms. 

**Deployment details:** Auto-deployed to `abdur-rehman.me` via GitHub Actions triggered off pushes to the `main` branch.

## 2. Tech Stack
- Framework: Next.js 16 (App Router)
- Styling: Tailwind CSS v4
- 3D Rendering: React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), and Three.js
- Animations: Framer Motion
- UI Libraries: `react-tilt` (3D glassmorphism cards), `react-vertical-timeline-component` (experience flow).

## 3. Architectural Decisions & Fixes
To prevent future UI regressions, understand these structural resolutions implemented during the V3 overhaul:

* **3D Canvas Stacking (Hero.tsx):** The `<Canvas>` component is absolutely positioned with `inset-0 z-0` to sit seamlessly behind the foreground text, ensuring it neither bleeds out of the hero container nor overlaps interactive elements. The foreground text overlay strictly utilizes `absolute inset-0 z-10`.
* **Tailwind v4 Configuration Pitfalls:** During development, Tailwind v4 JIT compilation failed on arbitrary values (like `sm:w-[360px]`). We initially bypassed this with explicit `globals.css` media queries for `.project-card-wrapper` and `.hero-scroll-indicator`. **HOWEVER, the final architecture correctly resolves this** by abandoning Tailwind v3 directives (`@tailwind base;`) in favor of the pure v4 syntax (`@import "tailwindcss";`) and defining custom breakpoints directly in the `@theme` block. Future agents MUST use standard utility classes, as the theme compiler is now fully operational.
* **Project Card Grid (Projects.tsx):** `react-tilt` wrappers naturally fight responsive grids. The solution bounds them tightly in a `<div className="mt-20 flex flex-wrap justify-center gap-7">` section. Each Tilt card is wrapped in a hard container (`xs:w-[360px] w-full shrink-0`), enforcing the 3-column side-by-side array while collapsing perfectly on mobile.

## 4. Data Constraints (DO NOT HALLUCINATE)
This portfolio reflects the immutable professional reality of a cybersecurity engineer. Under no circumstances should placeholder copy or unverified experience be generated. 
- **Work History:** Verified history includes SOCentriq infrastructure design leveraging local Llama 3.1 models deployed across 5 remote VMs (Internship at **SNSKIES**), offensive Python dev at **ITSOLERA**, and directing lab infrastructure at **FAST-NUCES**. 
- **Tech Constraints:** Only listed dependencies and factual credentials apply. Keep the tone sharp, senior, and aligned with operational reality.
