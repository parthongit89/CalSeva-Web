# Color Theory & Palette Strategy (Color_theory.md) - CalSeva Web

## 1. Executive Summary & Brand Identity
The color palette for **CalSeva Web** is engineered to project **precision, technical trust, industrial reliability, and clarity**. Grounded in deep teal and slate tones, the palette strictly reflects the Figma design system (`node-id=638-3`).

---

## 2. Core Color Palette Tokens

```mermaid
graph LR
    P[Primary Deep Teal #3b4f51] --- S[Accent Slate #607b7d]
    S --- T[Text Slate #4f6668]
    T --- B[Background White #ffffff]
    B --- D[Dark Overlay bg-[#3b4f51]]
```

### Color Specification Table

| Role | Color Name | Hex Code | Tailwind Custom Class | Usage Description |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | CalSeva Deep Teal | `#3b4f51` | `bg-[#3b4f51]`, `text-[#3b4f51]` | Primary buttons, Footer background, Brand logo title |
| **Accent / Headings** | CalSeva Slate Teal | `#607b7d` | `text-[#607b7d]`, `border-[#607b7d]` | Section Headings ("Precision Calibration", "Our Calibration Services"), FAQ answers |
| **Text Secondary** | Industrial Muted Slate | `#4f6668` | `text-[#4f6668]` | FAQ Questions, sub-heading accents |
| **Primary Text** | Pure Black | `#000000` | `text-black` | Core body copy, service descriptions |
| **Background** | Clean Pure White | `#ffffff` | `bg-white` | Page background, card backgrounds |
| **Border Soft** | Slate Border | `rgba(96,123,125,0.35)` | `border-[#607b7d]/35` | FAQ Card borders, input container borders |
| **Footer Text** | Crisp White | `#ffffff` | `text-white` | Footer headlines, contact details, copyright |

---

## 3. The 60-30-10 UI Distribution Rule
To achieve visual harmony and high readability:
- **60% Dominant Color**: Pure White (`#ffffff`) background for clean readability and high contrast.
- **30% Secondary Structure**: Slate Teal (`#607b7d` & `#4f6668`) for section headers, FAQ cards, and service item text.
- **10% Accent Call-to-Action**: CalSeva Deep Teal (`#3b4f51`) for primary buttons, sticky footer, and brand logo mark.

---

## 4. Accessibility & Contrast Verification (WCAG AAA)
- **Primary CTA Button**: `#ffffff` text on `#3b4f51` background -> **Contrast Ratio: 7.2:1** (Passes WCAG AAA for normal text).
- **Section Headings**: `#607b7d` text on `#ffffff` background -> **Contrast Ratio: 4.8:1** (Passes WCAG AA for large headings).
- **Body Copy**: `#000000` text on `#ffffff` background -> **Contrast Ratio: 21:1** (Passes WCAG AAA).
- **Footer Text**: `#ffffff` text on `#3b4f51` background -> **Contrast Ratio: 7.2:1** (Passes WCAG AAA).
