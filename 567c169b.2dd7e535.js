(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(261)),s=n(265),i=n(266),c={title:"CSRF Protection"},l={unversionedId:"security/csrf-protection",id:"security/csrf-protection",isDocsHomePage:!1,title:"CSRF Protection",description:"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available here. The old documentation can be found here.",source:"@site/docs/security/csrf-protection.md",slug:"/security/csrf-protection",permalink:"/docs/security/csrf-protection",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/security/csrf-protection.md",version:"current",sidebar:"someSidebar",previous:{title:"Protection HTTP Headers",permalink:"/docs/security/http-headers-protection"},next:{title:"XSS Protection",permalink:"/docs/security/xss-protection"}},p=[{value:"Defense Principle",id:"defense-principle",children:[{value:"Authentication with Session Tokens",id:"authentication-with-session-tokens",children:[]},{value:"Authentication with JSON Web Tokens",id:"authentication-with-json-web-tokens",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Single-Page Applications (session tokens)",id:"single-page-applications-session-tokens",children:[]},{value:"Single-Page Applications (JWTs)",id:"single-page-applications-jwts",children:[]},{value:"Regular Web Applications (session tokens)",id:"regular-web-applications-session-tokens",children:[]}]},{value:"Advanced",id:"advanced",children:[{value:"Increase stateless protection (JWT)",id:"increase-stateless-protection-jwt",children:[]},{value:"Custom CSRF cookie name",id:"custom-csrf-cookie-name",children:[]},{value:"Disable CSRF protection on a specific route",id:"disable-csrf-protection-on-a-specific-route",children:[]}]}],u={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"You are reading the documentation for version 2 of FoalTS. Instructions for upgrading to this version are available ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/upgrade-to-v2/README"}),"here"),". The old documentation can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/FoalTS/foal/tree/v1.x/docs"}),"here"),".")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious web site, email, blog, instant message, or program causes a user\u2019s web browser to perform an unwanted action on a trusted site when the user is authenticated."),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"Source: ",Object(o.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.md"}),"OWASP")))),Object(o.b)("h2",{id:"defense-principle"},"Defense Principle"),Object(o.b)("p",null,"FoalTS combines two defenses to protect your application against a CSRF attack. It uses the ",Object(o.b)("inlineCode",{parentName:"p"},"SameSite")," cookie directive and a token-based technique to have in-depth protection."),Object(o.b)("p",null,"When enabled, authentication cookies have their ",Object(o.b)("inlineCode",{parentName:"p"},"SameSite")," attribute set to ",Object(o.b)("inlineCode",{parentName:"p"},"lax")," in order to prevent third-party websites from sending authenticated requests to your server. When they make a POST, PUT, PATCH or DELETE request to your application, the authentication cookie is not sent. As of August 2020, this protection is supported by 92% of modern browsers."),Object(o.b)("p",null,"In addition, the framework provides token-based mitigation that works with either state (session tokens) or stateless (JWT). The client can read the ",Object(o.b)("em",{parentName:"p"},"CSRF token")," either from the HTML page (using a template) or from the ",Object(o.b)("inlineCode",{parentName:"p"},"XSRF-Token")," cookie. Then, the token must be included in the ",Object(o.b)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header, the ",Object(o.b)("inlineCode",{parentName:"p"},"X-CSRF-Token")," header or in the body with the ",Object(o.b)("inlineCode",{parentName:"p"},"_csrf")," field in any POST, PUT, PATCH or DELETE request sent to the server (see examples)."),Object(o.b)("h3",{id:"authentication-with-session-tokens"},"Authentication with Session Tokens"),Object(o.b)(s.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  session:\n    csrf:\n      enabled: true\n"))),Object(o.b)(i.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "session": {\n      "csrf": {\n        "enabled": true\n      }\n    }\n  }\n}\n'))),Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  settings: {\n    session: {\n      csrf: {\n        enabled: true\n      }\n    }\n  }\n}\n")))),Object(o.b)("h3",{id:"authentication-with-json-web-tokens"},"Authentication with JSON Web Tokens"),Object(o.b)(s.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  jwt:\n    csrf:\n      enabled: true\n"))),Object(o.b)(i.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "jwt": {\n      "csrf": {\n        "enabled": true\n      }\n    }\n  }\n}\n'))),Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"module.exports = {\n  settings: {\n    jwt: {\n      csrf: {\n        enabled: true\n      }\n    }\n  }\n}\n")))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"single-page-applications-session-tokens"},"Single-Page Applications (session tokens)"),Object(o.b)("h4",{id:"server"},"Server"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"auth.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  Context,\n  createSession,\n  dependency,\n  HttpResponseNoContent,\n  HttpResponseUnauthorized,\n  Post,\n  Store,\n  UseSessions,\n  ValidateBody,\n  verifyPassword\n} from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = { /* ... */ };\n\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  @UseSessions({\n    cookie: true,\n    required: false,\n  })\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    ctx.session = ctx.session || await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseNoContent();\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { HttpResponseCreated, UseSessions } from '@foal/core';\n\n@UseSessions({\n  cookie: true,\n  required: true,\n})\nexport class ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),Object(o.b)("h4",{id:"client"},"Client"),Object(o.b)("p",null,"The client must retrieve the ",Object(o.b)("em",{parentName:"p"},"CSRF token")," from the ",Object(o.b)("inlineCode",{parentName:"p"},"XSRF-Token")," cookie and then send it in the ",Object(o.b)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header, the ",Object(o.b)("inlineCode",{parentName:"p"},"X-CSRF-Token")," header or in the request body with the ",Object(o.b)("inlineCode",{parentName:"p"},"_csrf")," field."),Object(o.b)("p",null,"Most modern request libraries already handle it automatically for you using the ",Object(o.b)("inlineCode",{parentName:"p"},"X-XSRF-Token")," header."),Object(o.b)(s.a,{defaultValue:"angular",values:[{label:"Angular HttpClient",value:"angular"},{label:"Axios",value:"axios"},{label:"Native JavaScript",value:"native"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"angular",mdxType:"TabItem"},Object(o.b)("p",null,"No additional configuration required.")),Object(o.b)(i.a,{value:"axios",mdxType:"TabItem"},Object(o.b)("p",null,"No additional configuration required.")),Object(o.b)(i.a,{value:"native",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"async function postData(url = '', data = {}) {\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      // Assuming you use this library: https://www.npmjs.com/package/js-cookie.\n      'X-XSRF-TOKEN': Cookies.get('XSRF-Token')\n    },\n    body: JSON.stringify(data),\n  });\n  return response.json();\n}\n")))),Object(o.b)("h3",{id:"single-page-applications-jwts"},"Single-Page Applications (JWTs)"),Object(o.b)("h4",{id:"server-1"},"Server"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"auth.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  Context,\n  HttpResponseNoContent,\n  HttpResponseUnauthorized,\n  Post,\n  ValidateBody,\n  verifyPassword\n} from '@foal/core';\nimport { getSecretOrPrivateKey, setAuthCookie } from '@foal/jwt';\nimport { sign } from 'jsonwebtoken';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = { /* ... */ };\n\nexport class AuthController {\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n    async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseUnauthorized();\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseUnauthorized();\n    }\n\n    const token: string = await new Promise((resolve, reject) => {\n      sign(\n        { email: user.email },\n        getSecretOrPrivateKey(),\n        { subject: user.id.toString() },\n        (err, encoded) => {\n          if (err) {\n            return reject(err);\n          }\n          resolve(encoded);\n        }\n      );\n    });\n\n    const response = new HttpResponseNoContent();\n    // Do not forget the \"await\" keyword.\n    await setAuthCookie(response, token);\n    return response;\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { HttpResponseCreated } from '@foal/core';\nimport { JWTRequired } from '@foal/jwt';\n\n@JWTRequired({\n  cookie: true,\n})\nexport class ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseCreated();\n  }\n}\n")),Object(o.b)("h4",{id:"client-1"},"Client"),Object(o.b)("p",null,"Same as session tokens."),Object(o.b)("h3",{id:"regular-web-applications-session-tokens"},"Regular Web Applications (session tokens)"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Regular Web Applications")," use ",Object(o.b)("em",{parentName:"p"},"Server-Side Rendering")," to generate their HTML pages. "),Object(o.b)("h4",{id:"server-2"},"Server"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"auth.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  Context,\n  createSession,\n  dependency,\n  HttpResponseRedirect,\n  Post,\n  Store,\n  UseSessions,\n  ValidateBody,\n  verifyPassword\n} from '@foal/core';\n\nimport { User } from '../entities';\n\nconst credentialsSchema = { /* ... */ };\n\nexport class AuthController {\n  @dependency\n  store: Store;\n\n  @Post('/login')\n  @ValidateBody(credentialsSchema)\n  @UseSessions({\n    cookie: true,\n    required: false,\n  })\n  async login(ctx: Context) {\n    const user = await User.findOne({ email: ctx.request.body.email });\n\n    if (!user) {\n      return new HttpResponseRedirect('/login');\n    }\n\n    if (!await verifyPassword(ctx.request.body.password, user.password)) {\n      return new HttpResponseRedirect('/login');\n    }\n\n    ctx.session = ctx.session || await createSession(this.store);\n    ctx.session.setUser(user);\n\n    return new HttpResponseRedirect('/products');\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"view.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {\n  Context,\n  dependency,\n  Get,\n  render,\n  Session,\n  Store,\n  UseSessions,\n} from '@foal/core';\n\nimport { User } from '../entities';\n\nexport class ViewController {\n  @dependency\n  store: Store;\n\n  @Get('/login')\n  async login(ctx: Context) {\n    return render('./templates/login.html');\n  }\n\n  @Get('/products')\n  @UseSessions({\n    cookie: true,\n    required: true,\n    redirectTo: '/login'\n  })\n  async index(ctx: Context<User, Session>) {\n    return render(\n      './templates/products.html',\n      { csrfToken: ctx.session.get('csrfToken') },\n    );\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"api.controller.ts")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { HttpResponseRedirect, UseSessions } from '@foal/core';\n\n@UseSessions({\n  cookie: true,\n  required: true,\n  redirectTo: '/login'\n})\nexport class ApiController {\n  @Post('/products')\n  createProduct() {\n    return new HttpResponseRedirect('/products');\n  }\n}\n")),Object(o.b)("h4",{id:"client-2"},"Client"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"login.html")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<html>\n  <head>\n    <title>Log in</title>\n  </head>\n  <body>\n    <form method="POST" action="/login">\n      <input name="email" type="email" >\n      <input name="password" type="password" >\n      <button type="submit">Log in</button>\n    </form>\n  </body>\n</html>\n')),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"products.html")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<html>\n  <head>\n    <title>Add a product</title>\n  </head>\n  <body>\n    <form method="POST" action="/api/products">\n      <input style="display: none" name="_csrf" value="{{ csrfToken }}">\n      <input name="name" type="text">\n      <button type="submit">Add product</button>\n    </form>\n  </body>\n</html>\n')),Object(o.b)("h2",{id:"advanced"},"Advanced"),Object(o.b)("h3",{id:"increase-stateless-protection-jwt"},"Increase stateless protection (JWT)"),Object(o.b)("p",null,"In FoalTS, stateless CSRF protection is based on the double submit technique. CSRF tokens are generated randomly and signed with the JWT secret or RSA private key."),Object(o.b)("p",null,"To increase the effectiveness of protection against sub-domain attacks, your auth JWT must include a unique ",Object(o.b)("inlineCode",{parentName:"p"},"subject")," per user (usually the user ID) and an expiration date. The framework will then use these to create and sign the ",Object(o.b)("em",{parentName:"p"},"CSRF token"),"."),Object(o.b)("h3",{id:"custom-csrf-cookie-name"},"Custom CSRF cookie name"),Object(o.b)("p",null,"The name of the CSRF cookie can be changed in the configuration."),Object(o.b)(s.a,{groupId:"config",defaultValue:"yaml",values:[{label:"YAML",value:"yaml"},{label:"JSON",value:"json"},{label:"JS",value:"js"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"yaml",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"settings:\n  jwt:\n    csrf:\n      enabled: true\n      cookie:\n        name: CSRF-Token # Default: XSRF-TOKEN\n"))),Object(o.b)(i.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "settings": {\n    "jwt": {\n      "csrf": {\n        "enabled": true,\n        "cookie": {\n          "name": "CSRF-Token"\n        }\n      }\n    }\n  }\n}\n'))),Object(o.b)(i.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  settings: {\n    jwt: {\n      csrf: {\n        enabled: true,\n        cookie: {\n          name: "CSRF-Token"\n        }\n      }\n    }\n  }\n}\n')))),Object(o.b)("h3",{id:"disable-csrf-protection-on-a-specific-route"},"Disable CSRF protection on a specific route"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},"This feature is available from version 2.1 onwards."))),Object(o.b)("p",null,"In case the CSRF protection is enabled globally and you want to disable it for a specific route, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"csrf")," option for that."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { HttpResponseOK, Post, UseSessions } from '@foal/core';\n\nexport class ApiController {\n  @Post('/foo')\n  @UseSessions({ cookie: true })\n  foo() {\n    // This method has the CSRF protection enabled.\n    return new HttpResponseOK();\n  }\n\n  @Post('/bar')\n  @UseSessions({ cookie: true, csrf: false })\n  bar() {\n    // This method does not have the CSRF protection enabled.\n    return new HttpResponseOK();\n  }\n}\n\n")))}b.isMDXComponent=!0},261:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},262:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},263:function(e,t,n){"use strict";var a=n(0),r=n(264);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},264:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},265:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(263),s=n(262),i=n(56),c=n.n(i),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,b=e.groupId,d=e.className,m=Object(o.a)(),f=m.tabGroupChoices,j=m.setTabGroupChoices,h=Object(a.useState)(i),O=h[0],g=h[1],y=a.Children.toArray(e.children);if(null!=b){var v=f[b];null!=v&&v!==O&&u.some((function(e){return e.value===v}))&&g(v)}var S=function(e){g(e),null!=b&&j(b,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return S(t)},onClick:function(){S(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},266:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);