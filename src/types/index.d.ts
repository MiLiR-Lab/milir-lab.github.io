/// <reference types="@docusaurus/theme-classic" />
/// <reference path="./css.d.ts" />
/// <reference path="./docusaurus.d.ts" />

// Global JSX namespace for React
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Type definitions for CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Type definitions for Docusaurus components
declare module '@docusaurus/*';
declare module '@theme/*';
declare module '@theme-original/*';

// Type definitions for React components
declare namespace React {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    // Add any additional HTML attributes here if needed
  }
}

// Type definitions for Node.js
interface ProcessEnv {
  NODE_ENV: 'development' | 'production' | 'test';
  // Add other environment variables here
}
