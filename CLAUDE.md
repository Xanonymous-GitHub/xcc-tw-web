# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Xanonymous (T.U.) built with Nuxt 4, using UnoCSS for styling and Nuxt UI components. The site is statically generated and deployed to GitHub Pages.

**Tech Stack:**
- Nuxt 4 (Vue 3) - SSG mode (Static Site Generation)
- UnoCSS - Atomic CSS framework with custom shortcuts
- Nuxt UI - Component library (@nuxt/ui)
- TypeScript (strict mode)
- SCSS for custom styles
- VueUse - Vue composition utilities
- ESLint with @antfu/eslint-config

## Development Commands

### Install dependencies
```bash
pnpm install
```

### Development server
```bash
pnpm dev
```
Starts dev server at http://localhost:3000

### Build for production
```bash
pnpm build
```
Generates static site to `dist/` directory using `nuxt generate`

### Linting
```bash
pnpm lint
```
Runs ESLint with auto-fix enabled

### Production preview
```bash
pnpm start
```
Runs the built site (requires running `pnpm build` first)

## Architecture

### Directory Structure

- **`pages/`** - File-based routing (Nuxt auto-routing)
  - `index.vue` - Homepage wrapper with metadata
  - `404.vue` - Error page
  - `privacy.vue` - Privacy policy page

- **`components/`** - Vue components (auto-imported by Nuxt)
  - `Home.vue` - Main homepage content and layout
  - `Footer.vue` - Footer component
  - `DarkToggle.vue` - Theme switcher
  - `XLogo.vue` - Logo component
  - `SiteButton.vue` - Reusable button component

- **`composables/`** - Composition functions (auto-imported)
  - `dark.ts` - Dark mode state management using VueUse
  - `index.ts` - Composables barrel export

- **`assets/`** - Static assets
  - `fonts/` - Custom fonts (JosefinSans)
  - `images/` - Image assets

- **`styles/`** - Global styles
  - `main.scss` - Main stylesheet entry point
  - `fonts.scss` - Font definitions

- **`public/`** - Static files served at root
  - `robots.txt`
  - `favicon.ico`

### Key Architectural Decisions

**1. Static Site Generation (SSG)**
- Uses `nuxt generate` to produce static HTML files
- No server runtime required
- Deployed to GitHub Pages via GitHub Actions
- All pages are pre-rendered at build time

**2. Styling Approach**
- UnoCSS for utility-first atomic CSS
- Custom shortcuts defined in `unocss.config.ts` (`btn`, `icon-btn`)
- Attributify mode enabled for cleaner templates
- SCSS for custom global styles
- Uses UnoCSS presets: uno, attributify, icons, typography, web-fonts

**3. Component Auto-imports**
- Nuxt auto-imports all components from `components/`
- No manual imports needed for components
- Composables from `composables/` are also auto-imported

**4. Dark Mode**
- Managed through `@nuxtjs/color-mode` module
- State exposed via `useDark()` and `useToggle()` composables
- Class-based theme switching (no suffix)

**5. TypeScript**
- Strict mode enabled
- Extends Nuxt's generated tsconfig
- No type errors tolerated (`strict: true`)

## Code Style

### ESLint Configuration
- Uses @antfu/eslint-config (opinionated config)
- HTML formatting enabled
- TypeScript comments allowed (`ts/ban-ts-comment: off`)
- `no-undef` disabled for JavaScript (Nuxt auto-imports)

### Vue Component Patterns
- Script setup syntax (`<script setup lang="ts">`)
- Type interfaces defined inline when small
- UnoCSS utilities used directly in templates (attributify mode)
- Custom fonts loaded via CSS classes (`fugaz-one`)

### Example Component Structure
```vue
<script lang="ts" setup>
// Imports
import foo from '~/path'

// Types
interface Props {
  text: string
}

// State and logic
const state = ref(...)
</script>

<template>
  <div cursor-default font-300>
    <!-- Content with UnoCSS utilities -->
  </div>
</template>
```

## Testing & Quality

**Linting:** Run `pnpm lint` before committing
- ESLint will auto-fix most issues
- Check terminal output for errors

**Build Verification:** Run `pnpm build` to ensure SSG succeeds
- Must complete without errors
- Generates static files to `dist/`

## Deployment

**Automatic deployment via GitHub Actions:**
1. Push to `main` branch triggers workflow
2. Installs dependencies with pnpm
3. Runs `pnpm build` (nuxt generate)
4. Deploys `dist/` to GitHub Pages
5. Site updates at https://xcc.tw

**Workflow file:** `.github/workflows/nuxtjs.yml`
- Uses Node 24
- Caches build artifacts (`.nuxt`, `dist`)
- Frozen lockfile for reproducible builds

## Module System

**Nuxt Modules (in order):**
1. `@vueuse/nuxt` - Vue composition utilities
2. `@unocss/nuxt` - Atomic CSS integration
3. `@nuxtjs/color-mode` - Dark mode support
4. `@nuxt/ui` - UI component library

**Module behavior:**
- Auto-imports components and composables
- Provides global utilities without explicit imports
- Type definitions generated to `.nuxt/`

## Common Patterns

### Adding a new page
1. Create `pages/your-page.vue`
2. Use `<script setup>` with `useHead()` for metadata
3. Route automatically available at `/your-page`

### Adding a component
1. Create in `components/ComponentName.vue`
2. Auto-imported, use directly in templates: `<ComponentName />`
3. Use PascalCase for multi-word component names

### Using dark mode
```ts
import { isDark, toggleDark } from '~/composables/dark'
// or simply use isDark and toggleDark directly (auto-imported)
```

### Custom UnoCSS utilities
Define shortcuts in `unocss.config.ts`:
```ts
shortcuts: [
  ['custom-class', 'px-4 py-2 bg-blue-500 text-white rounded'],
]
```
