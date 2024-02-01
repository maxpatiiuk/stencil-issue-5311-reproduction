import { Component, Fragment, Host, h } from '@stencil/core';

@Component({ tag: 'my-component' })
export class MyComponent {
  render() {
    if (1 === 1) return <Host />;
    if (2 === 2) return <Fragment />;
    return <br />;
  }
}
