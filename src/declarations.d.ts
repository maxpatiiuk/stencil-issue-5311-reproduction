import type { VNode } from '@stencil/core';
import type { HostAttributes, FunctionalUtilities } from '@stencil/core/internal';

declare module '@stencil/core' {
  export namespace h.JSX {
    // Fixes https://github.com/ionic-team/stencil/issues/5306
    type Element = VNode;
  }

  // See errors in src/components/my-component/my-component.tsx
  // Fixing Stencil typings for Host and Fragment would fix the errors:
  // export const Host: (props:HostAttributes)=>VNode;
  // export const Fragment: (props: {})=> VNode;

  // unfortunately, TypeScript doesn't allow me to override Host and Fragment
  // typings in here ("Subsequent variable declarations must have the same type"),
  // so you have to make the fixes in
  // node_modules/@stencil/core/internal/stencil-public-runtime.d.ts
}
