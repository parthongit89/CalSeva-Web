# Frontend Design System (Designs.md) - CalSeva Web

## 1. Design Principles & Figma Synchronization
The design system for **CalSeva Web** is directly derived from the official Figma specification (`https://www.figma.com/design/I0MbnU8Xks35mLwtkTcAKI/Projects?node-id=638-3&m=dev`).

### Primary Design Rules:
1. **Font Integrity**: Exclusively use **Google Sans Flex** across all headings, body text, quotes, and buttons.
2. **Color Strictness**: Implement exact Figma hex codes for text, background, accents, and shadows.
3. **Fluid Responsiveness**: Map absolute pixel offsets from Figma into responsive container grids and flex layouts using Tailwind CSS.
4. **Content Fidelity**: Preserve 100% of text phrasing, titles, service descriptions, and FAQ wording without modification.

---

## 2. Layout Grid & Container Specifications

| Device Breakpoint | Width Range | Container Behavior | Column Layout |
| :--- | :--- | :--- | :--- |
| **Mobile** (`sm`) | `< 640px` | Full width with `px-4` padding | 1 Column Stacked |
| **Tablet** (`md`) | `640px - 1024px` | Centered container `px-8` | 2 Columns for Services / FAQ |
| **Desktop** (`lg` / `xl`) | `> 1024px` | Max width `max-w-7xl mx-auto` | Dual Split Hero, 2 Columns Services |

---

## 3. UI Component Mapping & Visual Specs

### 3.1 Sticky Navigation Bar
- **Height**: `h-20` (80px) with translucent backdrop blur (`backdrop-blur-md bg-white/90`).
- **Brand Logo**: 48px square image (`icon-512.png`) + text `CalSEVA` in color `#3b4f51` (25px Regular).
- **Navigation Links**: Home, Services, FAQ's, Contact Us in `#000000` light weight (20px Light).

### 3.2 Hero Banner Section
- **Headline**: `Precision Calibration. On-Site Support. Reliable Service.` (Color `#607b7d`, Size `text-3xl md:text-4xl`, Weight `SemiBold`).
- **Sub-headline**: 20px Light font `#000000`, maximum container width `max-w-3xl`.
- **Primary CTA Button**:
  - Background: `#3b4f51`
  - Text: `Request a Service` (White, 20px Medium)
  - Radius: `rounded-full` (30px)
  - Hover state: Accent scale transition & shadow elevation (`hover:bg-[#2e4042] hover:shadow-lg`).
- **Equipment Image Collage**: Floating equipment assets with subtle dropshadows.

### 3.3 Services Grid Section
- **Section Heading**: `Our Calibration Services` (Color `#607b7d`, Size `text-3xl md:text-4xl`, Weight `SemiBold`).
- **Service Cards**:
  - Title: 25px Regular weight `#000000`.
  - Body: 18px Light weight `#000000` with high line-height readability.
- **Featured Asset**: High-resolution Temperature Sensor Probe graphic (`Gemini_Generated_Image_xe1zpgxe1zpgxe1z 2.png`) positioned dynamically alongside services.

### 3.4 FAQ Accordion Section
- **Section Heading**: `Frequently Asked Questions` (Color `#607b7d`, Size `text-3xl md:text-4xl`, Weight `SemiBold`).
- **Accordion Card Specification**:
  - Background: `#ffffff` with border `border-2 border-[#607b7d]/35` and radius `rounded-3xl` (`25px`).
  - Shadow: Soft box shadow `shadow-[2px_2px_3px_1px_rgba(0,0,0,0.15)]`.
  - Question Text: 24px Regular weight `#4f6668`.
  - Answer Text: 24px Light weight `#607b7d`.
  - Icon Toggle: Rotating chevron/arrow indicator (`transition-transform duration-300`).

### 3.5 Mission Banner & Footer Section
- **Mission Quote Banner**: Translucent slate container (`bg-[#4f6668]/85` or `#3b4f51`) displaying mission text in 30px Italic Google Sans Flex.
- **Multimeter Asset**: Centered multimeter instrument (`Gemini_Generated_Image_rynkgkrynkgkrynk 1.png`).
- **Footer**:
  - Background: `#3b4f51`
  - Text: White (`#ffffff`) with varied opacities (`opacity-100`, `opacity-55`, `opacity-25`, `opacity-15`).
