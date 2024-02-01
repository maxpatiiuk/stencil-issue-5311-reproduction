# Stencil Issue 5306 and 5311 reproduction

Reproduction for https://github.com/ionic-team/stencil/issues/5306 and https://github.com/ionic-team/stencil/issues/5311.

1. Install dependencies:

   ```bash
   npm install
   ```

## Stencil Issue 5306 reproduction

2. Comment out `type Element = VNode;` in [src/declarations.d.ts](src/declarations.d.ts) (that line is not present in original Stencil typings)

3. See ESLint errors in [src/components/my-component/my-component.tsx](src/components/my-component/my-component.tsx) (either by opening it in your editor, or by running `npx eslint src/components/my-component/my-component.tsx` in the command line)

   ```yaml
   /Users/mak13180/site/esri/temp/stencil-issue-5311/src/components/my-component/my-component.tsx
   6:18  warning  Unsafe return of an `any` typed value  @typescript-eslint/no-unsafe-return
   7:18  warning  Unsafe return of an `any` typed value  @typescript-eslint/no-unsafe-return
   8:5   warning  Unsafe return of an `any` typed value  @typescript-eslint/no-unsafe-return

   ✖ 3 problems (0 errors, 3 warnings)
   ```

4. Return back the `type Element = VNode;` line in [src/declarations.d.ts](src/declarations.d.ts)

5. See that ESlint errors are fixed (depending on the IDE, yuo might have to restart the IDE)

# Stencil Issue 5311 reproduction

Reproduction for https://github.com/ionic-team/stencil/issues/5311.

2. See src/declarations.d.ts - that file fixes Stencil typings as per
   https://github.com/ionic-team/stencil/issues/5306

3. That uncovers further errors with Stencil typings. See TypeScript
   errors in [src/components/my-component/my-component.tsx](src/components/my-component/my-component.tsx)

   ```yaml
   ❯ npx tsc
   src/components/my-component/my-component.tsx:6:26 - error TS2786: 'Host' cannot be used as a JSX component.
     Its return type 'VNode | VNode[]' is not a valid JSX element.
       Type 'VNode[]' is missing the following properties from type 'VNode': $flags$, $tag$, $elm$, $text$, $children$

   6     if (1 === 1) return <Host />;
                              ~~~~

   src/components/my-component/my-component.tsx:7:26 - error TS2786: 'Fragment' cannot be used as a JSX component.
     Its return type 'VNode | VNode[]' is not a valid JSX element.
       Type 'VNode[]' is not assignable to type 'VNode'.

   7     if (2 === 2) return <Fragment />;
                              ~~~~~~~~


   Found 2 errors in the same file, starting at: src/components/my-component/my-component.tsx:6
   ```

```

```
