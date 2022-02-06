"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6121],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1039:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"JSX Server-Side Rendering"},s=void 0,p={unversionedId:"frontend-integration/jsx-server-side-rendering",id:"version-1.x/frontend-integration/jsx-server-side-rendering",title:"JSX Server-Side Rendering",description:'If you are interested in SSR without JSX, then you might take a look at the "templating" page.',source:"@site/versioned_docs/version-1.x/frontend-integration/jsx-server-side-rendering.md",sourceDirName:"frontend-integration",slug:"/frontend-integration/jsx-server-side-rendering",permalink:"/id/docs/1.x/frontend-integration/jsx-server-side-rendering",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/versioned_docs/version-1.x/frontend-integration/jsx-server-side-rendering.md",tags:[],version:"1.x",frontMatter:{title:"JSX Server-Side Rendering"},sidebar:"someSidebar",previous:{title:"Angular, React & Vue",permalink:"/id/docs/1.x/frontend-integration/angular-react-vue"},next:{title:"Nuxt.js",permalink:"/id/docs/1.x/frontend-integration/nuxt.js"}},c=[{value:"Compile JSX Files",id:"compile-jsx-files",children:[],level:2},{value:"Example with React",id:"example-with-react",children:[],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are interested in SSR without JSX, then you might take a look at ",(0,i.kt)("a",{parentName:"p",href:"/id/docs/1.x/utilities/templating"},'the "templating" page'),".")),(0,i.kt)("h2",{id:"compile-jsx-files"},"Compile JSX Files"),(0,i.kt)("p",null,"The TypeScript compiler supports JSX."),(0,i.kt)("p",null,"To enable this feature, update the ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    ...\n    "jsx": "react",\n  },\n  "include": [\n    "src/**/*.ts"\n    "src/**/*.tsx"\n  ]\n}\n\n')),(0,i.kt)("p",null,"Then, add the file extension ",(0,i.kt)("inlineCode",{parentName:"p"},"tsx")," in every ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.*.json"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example with ",(0,i.kt)("inlineCode",{parentName:"em"},"tsconfig.app.json"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "./tsconfig.json",\n  "include": [\n    "src/app/**/*.ts",\n    "src/app/**/*.tsx",\n    "src/index.ts"\n  ],\n  "exclude": [\n    "src/app/**/*.spec.ts"\n  ]\n}\n')),(0,i.kt)("p",null,"Every file using JSX must now have the extension ",(0,i.kt)("inlineCode",{parentName:"p"},".tsx"),"."),(0,i.kt)("h2",{id:"example-with-react"},"Example with React"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install react react-dom @types/react-dom\n")),(0,i.kt)("p",null,"This example shows how to use JSX SSR with React. It assumes that ",(0,i.kt)("inlineCode",{parentName:"p"},"templates")," directory is in the root, next to ",(0,i.kt)("inlineCode",{parentName:"p"},"src"),"."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"view.controller.tsx")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Get, render } from '@foal/core';\nimport * as React from 'react';\nimport * as ReactDOMServer from 'react-dom/server';\n\nexport class ViewController {\n\n  @Get('/')\n  async index() {\n    const content = ReactDOMServer.renderToString(<div>Hello world!</div>);\n\n    return render('./templates/index.html', {\n      content,\n    });\n  }\n\n}\n\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"./templates/index.html")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Home</title>\n</head>\n<body>\n  {{ content }}\n</body>\n</html>\n')))}u.isMDXComponent=!0}}]);