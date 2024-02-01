# Stencil Issue 5311 reproduction

Reproduction for https://github.com/ionic-team/stencil/issues/5311.

1. Install dependencies:

   ```bash
   npm install
   ```

2. See src/declarations.d.ts - that file fixes Stencil typings as per
   https://github.com/ionic-team/stencil/issues/5306

3. That uncovers futher errors with Stencil typings. See TypeScript
   errors in src/components/my-component/my-component.tsx
