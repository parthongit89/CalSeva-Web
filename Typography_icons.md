# Typography & Icons Strategy (Typography_icons.md) - CalSeva Web

## 1. Primary Typography: Google Sans Flex
**CalSeva Web** strictly uses **Google Sans Flex**, a variable sans-serif font family. It is loaded dynamically via `@import` in `globals.css` or Google Fonts standard CDN.

### Font Family Declaration
```css
@import url('https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@100..900&display=swap');

body {
  font-family: 'Google Sans Flex', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

---

## 2. Font Weight & Hierarchy Specification

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height | CSS / Tailwind Class | Application |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | 35px (`2.1875rem`) | 28px (`1.75rem`) | SemiBold (600) | `leading-tight` | `text-3xl md:text-4xl font-semibold` | Hero main headline |
| **Section Title** | 40px (`2.5rem`) | 30px (`1.875rem`) | SemiBold (600) | `leading-snug` | `text-3xl md:text-[40px] font-semibold` | "Our Calibration Services", "Frequently Asked Questions" |
| **Service Title** | 25px (`1.5625rem`) | 20px (`1.25rem`) | Regular (400) | `leading-normal` | `text-xl md:text-[25px] font-normal` | Service titles (e.g., Temperature Controller Calibration) |
| **FAQ Question** | 24px (`1.5rem`) | 18px (`1.125rem`) | Regular (400) | `leading-normal` | `text-lg md:text-[24px] font-normal` | Accordion question headers |
| **Body / Subtitle**| 20px (`1.25rem`) | 16px (`1rem`) | Light (300) | `leading-relaxed` | `text-base md:text-xl font-light` | Hero description, Service details, FAQ answers |
| **Quote Text** | 30px (`1.875rem`) | 20px (`1.25rem`) | Italic (400) | `leading-snug` | `text-xl md:text-[30px] italic` | Mission statement banner quote |
| **Button Text** | 20px (`1.25rem`) | 16px (`1rem`) | Medium (500) | `leading-none` | `text-base md:text-[20px] font-medium` | "Request a Service" CTA button |
| **Footer Brand** | 45px (`2.8125rem`) | 32px (`2rem`) | SemiBold (600) | `leading-none` | `text-3xl md:text-[45px] font-semibold` | Footer CalSeva logo headline |

---

## 3. Iconography & SVG System
We utilize **Lucide React** for clean, crisp vector controls and icons:
- `ArrowRight` / `ChevronRight`: Primary CTA button action indicator.
- `ChevronDown` / `ChevronUp`: FAQ accordion collapse indicators.
- `Phone`, `Mail`, `MapPin`: Footer contact items.
- `CheckCircle2`: Service feature highlights.
