/// <reference types="vite/client" />

// 1. Le enseñamos a TypeScript a aceptar archivos .md importados con ?raw
declare module '*.md' {
  const content: string;
  export default content;
}

// 2. Le enseñamos a TypeScript cómo interpretar la librería front-matter
declare module 'front-matter' {
  interface FrontMatterResult<T> {
    attributes: T;
    body: string;
    bodyBegin: number;
    frontmatter: string;
  }
  function frontMatter<T = any>(input: string): FrontMatterResult<T>;
  export = frontMatter;
}