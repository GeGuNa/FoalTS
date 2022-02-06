"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1916],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(7294),l=n(2389),o=n(9548),i=n(6010),s="tabItem_LplD";function p(e){var t,n,l,p=e.lazy,u=e.block,d=e.defaultValue,c=e.values,m=e.groupId,k=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=c?c:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,o.UB)(),N=f.tabGroupChoices,b=f.setTabGroupChoices,P=(0,r.useState)(y),x=P[0],C=P[1],T=[],j=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var V=N[m];null!=V&&V!==x&&g.some((function(e){return e.value===V}))&&C(V)}var w=function(e){var t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==x&&(j(t),C(a),null!=m&&b(m,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},k)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:S,onFocus:w,onClick:w},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),p?(0,r.cloneElement)(h.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},523:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=n(9877),i=n(8215),s=["components"],p={title:"Validaci\xf3n & Sanitizaci\xf3n"},u=void 0,d={unversionedId:"common/validation-and-sanitization",id:"common/validation-and-sanitization",title:"Validaci\xf3n & Sanitizaci\xf3n",description:"Validation checks if an input meets a set of criteria (such as the value of a property is a string).",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/common/validation-and-sanitization.md",sourceDirName:"common",slug:"/common/validation-and-sanitization",permalink:"/es/docs/common/validation-and-sanitization",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/common/validation-and-sanitization.md",tags:[],version:"current",frontMatter:{title:"Validaci\xf3n & Sanitizaci\xf3n"},sidebar:"someSidebar",previous:{title:"Configuraci\xf3n",permalink:"/es/docs/architecture/configuration"},next:{title:"Serializaci\xf3n y Deserializaci\xf3n",permalink:"/es/docs/common/serializing-and-deserializing"}},c=[{value:"With a JSON Schema (AJV)",id:"with-a-json-schema-ajv",children:[{value:"Ajv, the JSON Schema Validator",id:"ajv-the-json-schema-validator",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Validation &amp; Sanitization of HTTP Requests",id:"validation--sanitization-of-http-requests",children:[{value:"ValidateBody",id:"validatebody",children:[],level:4},{value:"ValidateHeader",id:"validateheader",children:[],level:4},{value:"ValidateCookie",id:"validatecookie",children:[],level:4},{value:"ValidatePathParam",id:"validatepathparam",children:[],level:4},{value:"ValidateQueryParam",id:"validatequeryparam",children:[],level:4}],level:3},{value:"Sanitization Example",id:"sanitization-example",children:[],level:3},{value:"Custom Error Messages",id:"custom-error-messages",children:[],level:3},{value:"Referencing Schemas",id:"referencing-schemas",children:[],level:3}],level:2},{value:"With a Validation Class (class-validator)",id:"with-a-validation-class-class-validator",children:[{value:"Usage with a Hook",id:"usage-with-a-hook",children:[],level:3},{value:"Usage with TypeORM entities",id:"usage-with-typeorm-entities",children:[],level:3}],level:2}],m={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Validation")," checks if an input meets a set of criteria (such as the value of a property is a string)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Sanitization")," modifies the input to ensure that it is valid (such as coercing a type)."),(0,l.kt)("p",null,"Foal offers several utils and hooks to handle both validation and sanitization. They are particularly useful for checking and transforming parts of HTTP requests (such as the body)."),(0,l.kt)("h2",{id:"with-a-json-schema-ajv"},"With a JSON Schema (AJV)"),(0,l.kt)("h3",{id:"ajv-the-json-schema-validator"},"Ajv, the JSON Schema Validator"),(0,l.kt)("p",null,"FoalTS default validation and sanitization system is based on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv/tree/v6"},"AJV version 6"),", a fast JSON Schema Validator. You'll find more details on how to define a shema on its ",(0,l.kt)("a",{parentName:"p",href:"https://ajv.js.org/"},"website"),". "),(0,l.kt)("h3",{id:"options"},"Options"),(0,l.kt)("p",null,"Here is the list of AJV options that can be overridden with FoalTS configuration system."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Ajv option"),(0,l.kt)("th",{parentName:"tr",align:null},"Configuration key"),(0,l.kt)("th",{parentName:"tr",align:null},"FoalTS default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"$data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"settings.ajv.$data")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allErrors"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"settings.ajv.allErrors")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"coerceTypes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"settings.ajv.coerceType")),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nullable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"settings.ajv.nullable")),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"removeAdditional"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"settings.ajv.removeAdditional")),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"useDefaults"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"settings.ajv.useDefaults")),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  ajv:\n    coerceTypes: true\n"))),(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "ajv": {\n      "coerceTypes": true\n    }\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    ajv: {\n      coerceTypes: true\n    }\n  }\n}\n")))),(0,l.kt)("h3",{id:"validation--sanitization-of-http-requests"},"Validation & Sanitization of HTTP Requests"),(0,l.kt)("p",null,"FoalTS provides many hooks to validate and sanitize HTTP requests. When validation fails, they return an ",(0,l.kt)("inlineCode",{parentName:"p"},"HttpResponseBadRequest")," object whose body contains the validation errors."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Post, ValidateBody } from '@foal/core';\n\nexport class MyController {\n\n  @Post('/user')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      firstName: { type: 'string' },\n      lastName: { type: 'string' },\n    },\n    required: [ 'firstName', 'lastName' ],\n    type: 'object'\n  })\n  postUser(ctx: Context) {\n    // In this method we are sure that firstName and lastName\n    // are defined thanks to the above hook.\n    console.log(\n      ctx.request.body.firstName, ctx.request.body.lastName\n    );\n    return new HttpResponseOK();\n  }\n\n}\n")),(0,l.kt)("h4",{id:"validatebody"},"ValidateBody"),(0,l.kt)("p",null,"It validates the request body (",(0,l.kt)("inlineCode",{parentName:"p"},"Context.request.body"),")."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTTP request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'POST /products\n\n{\n  "price": "hello world"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Controller (first example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      price: { type: 'integer' },\n    },\n    required: [ 'price' ],\n    type: 'object'\n  })\n  createProduct() {\n    // ...\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Controller (second example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n  schema = {\n    additionalProperties: false,\n    properties: {\n      price: { type: 'integer' },\n    },\n    required: [ 'price' ],\n    type: 'object'\n  };\n\n  @Post('/products')\n  @ValidateBody(controller => controller.schema)\n  createProduct() {\n    // ...\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "body": [\n    {\n      "dataPath": ".price",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/price/type"\n    }\n  ]\n}\n')),(0,l.kt)("h4",{id:"validateheader"},"ValidateHeader"),(0,l.kt)("p",null,"It validates the request headers (",(0,l.kt)("inlineCode",{parentName:"p"},"Context.request.headers"),")."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTTP request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /products\nAuthorization: xxx\nA-Number: hello\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Controller (first example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateHeader } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateHeader('A-Number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Controller (second example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateHeader } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateHeader('Authorization')\n  @ValidateHeader('A-Number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "headers": [\n    {\n      "dataPath:" "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n')),(0,l.kt)("h4",{id:"validatecookie"},"ValidateCookie"),(0,l.kt)("p",null,"It validates the request cookies (",(0,l.kt)("inlineCode",{parentName:"p"},"Context.request.cookies"),")."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTTP request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /products\nCookies: Authorization=xxx; A-Number=hello\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Controller (first example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateCookie } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateCookie('Authorization')\n  @ValidateCookie('A-Number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Controller (second example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateCookie } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateCookie('Authorization')\n  @ValidateCookie('A-Number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cookies": [\n    {\n      "dataPath": "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n')),(0,l.kt)("h4",{id:"validatepathparam"},"ValidatePathParam"),(0,l.kt)("p",null,"It validates the request path parameter (",(0,l.kt)("inlineCode",{parentName:"p"},"Context.request.params"),")."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTTP request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /products/xxx\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Controller (first example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidatePathParam } from '@foal/core';\n\nexport class AppController {\n  @Get('/products/:productId')\n  @ValidatePathParam('productId', { type: 'integer' })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Controller (second example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidatePathParam } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products/:productId')\n  @ValidatePathParam('productId', c => c.schema)\n  readProducts() {\n    // ...\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pathParams": [\n    {\n      "dataPath": ".productId",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/productId/type"\n    }\n  ]\n}\n')),(0,l.kt)("h4",{id:"validatequeryparam"},"ValidateQueryParam"),(0,l.kt)("p",null,"It validates the request query (",(0,l.kt)("inlineCode",{parentName:"p"},"Context.request.query"),")."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTTP request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /products?authorization=xxx&a-number=hello\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Controller (first example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateQueryParam } from '@foal/core';\n\nexport class AppController {\n  @Get('/products')\n  @ValidateQueryParam('authorization')\n  @ValidateQueryParam('a-number', { type: 'integer' }, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Controller (second example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Post, ValidateQueryParam } from '@foal/core';\n\nexport class AppController {\n  schema = { type: 'integer' };\n\n  @Get('/products')\n  @ValidateQueryParam('authorization')\n  @ValidateQueryParam('a-number', c => c.schema, { required: false })\n  readProducts() {\n    // ...\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTTP response (400 - BAD REQUEST)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "query": [\n    {\n      "dataPath": "[\'a-number\']",\n      "keyword": "type",\n      "message": "should be integer",\n      "params": {\n        "type": "integer"\n      },\n      "schemaPath": "#/properties/a-number/type"\n    }\n  ]\n}\n')),(0,l.kt)("h3",{id:"sanitization-example"},"Sanitization Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseOK, Post, ValidateBody } from '@foal/core';\n\nexport class AppController {\n\n  @Post('/no-sanitization')\n  noSanitization(ctx: Context) {\n    return new HttpResponseOK(ctx.request.body);\n  }\n\n  @Post('/sanitization')\n  @ValidateBody({\n    additionalProperties: false,\n    properties: {\n      age: { type: 'number' },\n      name: { type: 'string' },\n    },\n    required: [ 'name', 'age' ],\n    type: 'object'\n  })\n  sanitization(ctx: Context) {\n    return new HttpResponseOK(ctx.request.body);\n  }\n\n}\n\n")),(0,l.kt)("p",null,"Assuming that you did not change Foal's default configuration of Ajv (see above), you will get these results:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POST ",(0,l.kt)("inlineCode",{parentName:"td"},"/no-sanitization")," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ name: 'Alex', age: '34', city: 'Paris' }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ name: 'Alex', age: '34', city: 'Paris' }"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"POST ",(0,l.kt)("inlineCode",{parentName:"td"},"/sanitization")," ",(0,l.kt)("inlineCode",{parentName:"td"},"{ name: 'Alex', age: '34', city: 'Paris' }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{ name: 'Alex', age: 34 }"))))),(0,l.kt)("h3",{id:"custom-error-messages"},"Custom Error Messages"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install ajv-errors@1\n")),(0,l.kt)("p",null,"You can customize the errors returned by the validation hooks by using the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv-errors/tree/v1"},"ajv-errors")," plugin (version 1)."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Configuration")),(0,l.kt)(o.Z,{defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"settings:\n  ajv:\n    allErrors: true\n"))),(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "ajv": {\n      "allErrors": true\n    }\n  }\n}\n'))),(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  settings: {\n    ajv: {\n      allErrors: true\n    }\n  }\n}\n")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, getAjvInstance, HttpResponseOK, Post, ValidateBody } from '@foal/core';\nimport * as ajvErrors from 'ajv-errors';\n\nexport class AppController {\n\n  init() {\n    ajvErrors(getAjvInstance());\n  }\n\n  @Post('/products')\n  @ValidateBody({\n    additionalProperties: false,\n    errorMessage: 'The submitted product is incorrect.',\n    properties: {\n      name: { type: 'string' }\n    },\n    required: [ 'name' ],\n    type: 'object',\n  })\n  createProduct(ctx: Context) {\n    // ...\n    return new HttpResponseOK(ctx.request.body);\n  }\n\n}\n")),(0,l.kt)("h3",{id:"referencing-schemas"},"Referencing Schemas"),(0,l.kt)("p",null,"The example below shows how a schema can be defined and reused in several hooks."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, getAjvInstance, HttpResponseOK, Post, ValidateBody } from '@foal/core';\n\nconst productSchema = {\n  additionalProperties: false,\n  properties: {\n    name: { type: 'string' }\n  },\n  required: [ 'name' ],\n  type: 'object',\n};\n\nexport class ProductController {\n\n  boot() {\n    getAjvInstance()\n      .addSchema(productSchema, 'Product');\n  }\n\n  @Post('/products')\n  @ValidateBody({\n    $ref: 'Product'\n  })\n  createProduct(ctx: Context) {\n    // ...\n    return new HttpResponseOK(ctx.request.body);\n  }\n\n}\n")),(0,l.kt)("h2",{id:"with-a-validation-class-class-validator"},"With a Validation Class (class-validator)"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-validator"},"class-validator")," library can also be used in Foal to validate an object against a validation class."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install class-validator\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import {validate, Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max} from "class-validator";\n \nexport class Post {\n\n    @IsInt()\n    @Min(0)\n    @Max(10)\n    rating: number;\n \n    @IsEmail()\n    email: string;\n \n}\n \nlet post = new Post();\npost.rating = 11; // should not pass\npost.email = "google.com"; // should not pass\n \nvalidate(post).then(errors => { // errors is an array of validation errors\n    if (errors.length > 0) {\n        console.log("validation failed. errors: ", errors);\n    } else {\n        console.log("validation succeed");\n    }\n});\n')),(0,l.kt)("h3",{id:"usage-with-a-hook"},"Usage with a Hook"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install class-transformer class-validator @foal/typestack\n")),(0,l.kt)("p",null,"If you want to use it within a hook to validate request bodies, you can install the package ",(0,l.kt)("inlineCode",{parentName:"p"},"@foal/typestack")," for this. It provides a ",(0,l.kt)("inlineCode",{parentName:"p"},"@ValidateBody")," hook that validates the body against a given validator. This body is also unserialized and turned into an instance of the class."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"social-post.validator.ts")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Contains, Length } from 'class-validator';\n\nexport class SocialPost {\n\n  @Length(10, 20)\n  title: string;\n\n  @Contains('hello')\n  text: string;\n\n}\n\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"social-post.controller.ts (first example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseCreated, Post } from '@foal/core';\nimport { ValidateBody } from '@foal/typestack';\nimport { SocialPost } from './social-post.validator';\n\nexport class SocialPostController {\n\n  @Post()\n  @ValidateBody(SocialPost, { /* options if relevant */ })\n  createSocialPost(ctx: Context) {\n    // ctx.request.body is an instance of SocialPost.\n    // ...\n    return new HttpResponseCreated();\n  }\n\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"social-post.controller.ts (second example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Context, HttpResponseCreated, Post } from '@foal/core';\nimport { ValidateBody } from '@foal/typestack';\nimport { SocialPost } from './social-post.validator';\n\nexport class SocialPostController {\n  entityClass = SocialPost;\n\n  @Post()\n  @ValidateBody(controller => controller.entityClass, { /* options if relevant */ })\n  createSocialPost(ctx: Context) {\n    // ctx.request.body is an instance of SocialPost.\n    // ...\n    return new HttpResponseCreated();\n  }\n\n}\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTTP request (example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'POST /\n\n{\n  "text": "foo"\n}\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTTP response (example)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "children": [],\n    "constraints": { "length": "title must be longer than or equal to 10 characters" },\n    "property": "title",\n    "target": { "text": "foo" },\n  },\n  {\n    "children": [],\n    "constraints": { "contains": "text must contain a hello string" },\n    "property": "text",\n    "target": { "text": "foo" },\n    "value": "foo",\n  }\n]\n')),(0,l.kt)("p",null,"The hook takes also an optional parameter to specify the options of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-transformer"},"class-transformer")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/typestack/class-validator"},"class-validator")," libraries."),(0,l.kt)("h3",{id:"usage-with-typeorm-entities"},"Usage with TypeORM entities"),(0,l.kt)("p",null,"The validation decorators are compatible with TypeORM entities. So you can use one single class to define both your model and validation rules."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';\nimport { Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max } from 'class-validator';\n\n@Entity()\nexport class Post {\n\n    @PrimaryGeneratedColumn()\n    id: number;\n    \n    @Column()\n    @Length(10, 20)\n    title: string;\n\n    @Column()\n    @Contains(\"hello\")\n    text: string;\n\n    @Column()\n    @IsInt()\n    @Min(0)\n    @Max(10)\n    rating: number;\n\n    @Column()\n    @IsEmail()\n    email: string;\n\n    @Column()\n    @IsFQDN()\n    site: string;\n\n    @Column()\n    @IsDate()\n    createDate: Date;\n\n}\n")))}k.isMDXComponent=!0}}]);