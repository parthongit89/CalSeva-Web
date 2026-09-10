# AI System Memory & Decision Log (Memory.md) - CalSeva Web

## 1. Project Context & Setup
- **Project**: CalSeva Web
- **Target Repository**: `https://github.com/parthongit89/CalSeva-Web.git`
- **Figma Design Node**: `node-id=638-3` (`https://www.figma.com/design/I0MbnU8Xks35mLwtkTcAKI/Projects?node-id=638-3&m=dev`)
- **Key Stack**: Next.js App Router, React, Tailwind CSS, TypeScript, Google Sans Flex font, Lucide icons, Vercel Edge CDN.

---

## 2. Key Architectural Decisions Log
1. **Decision**: Use Next.js 14 App Router + Tailwind CSS over raw static HTML or full-stack framework.
   - *Rationale*: Next.js gives instant zero-config static HTML export for Vercel edge deployment while supporting React component modularity.
2. **Decision**: Exclude database and server auth logic from project scope.
   - *Rationale*: CalSeva Web is a high-performance marketing and service showcase site with inquiry triggers; no database is needed.
3. **Decision**: Load **Google Sans Flex** via `@import` in `globals.css` with fallbacks.
   - *Rationale*: Exact alignment with user prompt requiring Google Sans Flex.
4. **Decision**: Consolidate local PNG assets into `public/images/`.
   - *Rationale*: Ensures fast, local CDN asset serving without depending on temporary localhost MCP image servers.

---

## 3. Current Execution State
- [x] Cloned strategy specification repo `Project-Strategies-Prompt-engineering-`.
- [x] Generated 10 core markdown specification files tailored for CalSeva Web.
- [ ] Initialize Next.js project and component architecture.
- [ ] Push to `https://github.com/parthongit89/CalSeva-Web.git`.
