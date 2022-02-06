"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9178],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1442:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={title:"Removal of Mongoose Support"},c=void 0,p={unversionedId:"upgrade-to-v2/mongodb",id:"upgrade-to-v2/mongodb",title:"Removal of Mongoose Support",description:"Due to the amount of work needed to maintain Mongoose in the framework and the large number of problems we had to face in the past, FoalTS no longer provides tools for Mongoose starting from version 2. The recommended approach to use MongoDB is now via TypeORM.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/upgrade-to-v2/mongodb.md",sourceDirName:"upgrade-to-v2",slug:"/upgrade-to-v2/mongodb",permalink:"/fr/docs/upgrade-to-v2/mongodb",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/upgrade-to-v2/mongodb.md",tags:[],version:"current",frontMatter:{title:"Removal of Mongoose Support"}},s=[],l={toc:s};function f(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Due to the amount of work needed to maintain Mongoose in the framework and the large number of problems we had to face in the past, FoalTS no longer provides tools for Mongoose starting from version 2. The recommended approach to use MongoDB is now via TypeORM."),(0,a.kt)("p",null,"However, it is still possible to use Mongoose in your application if you want to. If you were using the ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchUser")," function from the package ",(0,a.kt)("inlineCode",{parentName:"p"},"@foal/mongoose")," (now removed), here is its definition so that you can copy/paste it in your code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function fetchUser(userModel: any): (id: number|string) => Promise<any> {\n  return (id: number|string) => {\n    if (typeof id === 'number') {\n      throw new Error('Unexpected type for MongoDB user ID: number.');\n    }\n    return new Promise((resolve, reject) => {\n      userModel.findOne({ _id: id }, (err: any, res: any) => {\n        if (err) {\n          reject(err);\n          return;\n        }\n        resolve(res || undefined);\n      });\n    });\n  };\n}\n")))}f.isMDXComponent=!0}}]);