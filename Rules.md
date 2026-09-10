# Development Rules & Coding Standards (Rules.md) - CalSeva Web

## 1. Core Principles
1. **Figma Content Integrity**: Never alter text content, wording, or service titles from the Figma specification (`node-id=638-3`).
2. **Typography Consistency**: Only use **Google Sans Flex** across all components.
3. **No Database Dependencies**: All UI state must remain pure client-side; no server databases or auth requirements are needed.
4. **Responsive Positioning**: Avoid static pixel layout breakage on smaller viewports. Convert absolute Figma dimensions to flexible Tailwind grid/flex classes.

---

## 2. Component & Code Conventions
- **Component File Naming**: Use PascalCase for React components (`Navbar.tsx`, `HeroSection.tsx`).
- **Styling Method**: Utility classes via **Tailwind CSS**. Avoid inline `style={{ ... }}` unless setting dynamic font variation settings.
- **Type Safety**: Strictly define TypeScript interfaces for component props.
- **Image Optimization**: Use standard HTML `<img>` or Next.js `<Image>` with optimized relative paths (`/images/...`).

---

## 3. Error Handling & Accessibility Rules
- All buttons must include accessible `aria-label` or visible text.
- FAQ accordions must maintain `aria-expanded` attributes.
- Image tags must provide accurate `alt` attributes.
