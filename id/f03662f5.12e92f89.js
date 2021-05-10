(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(271)),c={title:"Conversions"},i={unversionedId:"common/conversions",id:"common/conversions",isDocsHomePage:!1,title:"Conversions",description:"This page lists common functions to convert one type or format to another.",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/common/conversions.md",slug:"/common/conversions",permalink:"/id/docs/common/conversions",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/i18n/id/docusaurus-plugin-content-docs/current/common/conversions.md",version:"current",sidebar:"someSidebar",previous:{title:"Generate Tokens",permalink:"/id/docs/common/generate-tokens"},next:{title:"TypeORM",permalink:"/id/docs/databases/typeorm"}},s=[{value:"Base64 to Base64URL",id:"base64-to-base64url",children:[]},{value:"Base64URL to Base64",id:"base64url-to-base64",children:[]},{value:"Stream to Buffer",id:"stream-to-buffer",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This page lists common functions to convert one type or format to another."),Object(a.b)("h2",{id:"base64-to-base64url"},"Base64 to Base64URL"),Object(a.b)("p",null,"This function converts a base64-encoded string into a base64URL-encoded string. "),Object(a.b)("p",null,"It replaces the characters ",Object(a.b)("inlineCode",{parentName:"p"},"+")," and ",Object(a.b)("inlineCode",{parentName:"p"},"/")," with ",Object(a.b)("inlineCode",{parentName:"p"},"-")," and ",Object(a.b)("inlineCode",{parentName:"p"},"_")," and omits the ",Object(a.b)("inlineCode",{parentName:"p"},"=")," sign."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { convertBase64ToBase64url } from '@foal/core';\n\nconst foo = convertBase64ToBase64url('bar');\n")),Object(a.b)("h2",{id:"base64url-to-base64"},"Base64URL to Base64"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"This feature is available from version 2.3 onwards."))),Object(a.b)("p",null,"This function converts a base64URL-encoded string into a base64-encoded string. "),Object(a.b)("p",null,"It replaces the characters ",Object(a.b)("inlineCode",{parentName:"p"},"-")," and ",Object(a.b)("inlineCode",{parentName:"p"},"_")," with ",Object(a.b)("inlineCode",{parentName:"p"},"+")," and ",Object(a.b)("inlineCode",{parentName:"p"},"/")," and adds the ",Object(a.b)("inlineCode",{parentName:"p"},"=")," padding character(s) if any."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { convertBase64urlToBase64 } from '@foal/core';\n\nconst foo = convertBase64urlToBase64('bar');\n")),Object(a.b)("h2",{id:"stream-to-buffer"},"Stream to Buffer"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},"This feature is available from version 2.3 onwards."))),Object(a.b)("p",null,"This function converts a stream of buffers into a concatenated buffer. It returns a promise."),Object(a.b)("p",null,"If the stream emits an error, the promise is rejected with the emitted error."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { streamToBuffer } from '@foal/core';\n\nconst buffer = await streamToBuffer(stream);\n")))}p.isMDXComponent=!0},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||a;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);