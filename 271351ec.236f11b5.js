(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),c=(n(0),n(249)),o=n(256),i=n(257),l={id:"node",title:"NodeJS",hide_title:!0,sidebar_label:"NodeJS"},s={id:"Instalacao/node",isDocsHomePage:!1,title:"NodeJS",description:"NodeJS",source:"@site/docs/Instalacao/Node.md",permalink:"/documentation/docs/Instalacao/node",sidebar_label:"NodeJS",sidebar:"someSidebar",previous:{title:"PHP",permalink:"/documentation/docs/Instalacao/php"},next:{title:"Python",permalink:"/documentation/docs/Instalacao/python"}},u=[{value:"Installing via NPM",id:"installing-via-npm",children:[]},{value:"Tested with com",id:"tested-with-com",children:[]},{value:"Basic use",id:"basic-use",children:[]},{value:"Exemples",id:"exemples",children:[]},{value:"Tests",id:"tests",children:[]}],b={rightToc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{className:"titulo"},"NodeJS"),Object(c.b)("div",{className:"subtitulo"},Object(c.b)("p",null,"Our API is ",Object(c.b)("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\nand responds in ",Object(c.b)("a",{href:"https://www.json.org/json-en.html"},"JSON"),". Gerencianet uses ",Object(c.b)("a",{href:"https://oauth.net/"},"OAuth")," to provide authorized access to the API. Our NodeJS SDK is already prepared to perform this authentication automatically."),Object(c.b)("p",null,"Below, check out the procedures for installing the Gerencianet SDK in ",Object(c.b)("a",{href:"https://github.com/gerencianet/gn-api-sdk-node",target:"_blank",title:"Link Externo"},"NodeJS"),":"),Object(c.b)("h2",{id:"installing-via-npm"},"Installing via NPM"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"$ npm install gn-api-sdk-node\n")),Object(c.b)("h2",{id:"tested-with-com"},"Tested with com"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Node ",Object(c.b)("inlineCode",{parentName:"li"},"0.12.7"),", ",Object(c.b)("inlineCode",{parentName:"li"},"4.4.0")," , e ",Object(c.b)("inlineCode",{parentName:"li"},"4.4.4"))),Object(c.b)("h2",{id:"basic-use"},"Basic use"),Object(c.b)("p",null,"Reference the module:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"var Gerencianet = require('gn-api-sdk-node');\n")),Object(c.b)("p",null,"Set your credentials and whether you want to use sandbox or not:"),Object(c.b)(o.a,{defaultValue:"Nodejs",values:[{label:"NodeJS",value:"Nodejs"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"Nodejs",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n    // PRODU\xc7\xc3O = false\n    // HOMOLOGA\xc7\xc3O = true\n    sandbox: false,\n    client_id: 'seuClientId',\n    client_secret: 'seuClientSecret',\n    certificate: 'caminho/Ate/O/Certificado/Pix',\n}\n")))),Object(c.b)("p",null,"Instantiate the module passing your options:"),Object(c.b)(o.a,{defaultValue:"Nodejs",values:[{label:"NodeJS",value:"Nodejs"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"Nodejs",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var gerencianet = new Gerencianet(options);\n")))),Object(c.b)("p",null,"Create a charge (transaction):"),Object(c.b)(o.a,{defaultValue:"Nodejs",values:[{label:"NodeJS",value:"Nodejs"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"Nodejs",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var chargeInput = {\n  items: [{\n    name: 'Product A',\n    value: 1000,\n    amount: 2\n  }]\n}\n\ngerencianet\n  .createCharge({}, chargeInput)\n  .then(console.log)\n  .catch(console.log)\n  .done();\n")))),Object(c.b)("h2",{id:"exemples"},"Exemples"),Object(c.b)("p",null,"To run the examples, clone this repository and install the dependencies:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"$ git clone git@github.com:gerencianet/gn-api-sdk-node.git\n$ cd gn-api-sdk-node/examples\n$ npm install\n")),Object(c.b)("p",null,"Set your oauth keys in the file ",Object(c.b)("inlineCode",{parentName:"p"},"credentials.js"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"module.exports = {\n    // PRODU\xc7\xc3O = false\n    // HOMOLOGA\xc7\xc3O = true\n    sandbox: false,\n    client_id: 'seuClientId',\n    client_secret: 'seuClientSecret',\n    pix_cert: 'caminhoAteOCertificadoPix',\n};\n")),Object(c.b)("p",null,"Then run the desired example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"$ node createCharge.js\n")),Object(c.b)("h2",{id:"tests"},"Tests"),Object(c.b)("p",null,"To run the test suite, first install the dependencies and then run the npm test:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"$ cd gn-api-sdk-node/\n$ npm install\n$ npm test\n"))))}d.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,m=b["".concat(o,".").concat(p)]||b[p]||d[p]||c;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},253:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},254:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},255:function(e,t,n){"use strict";var a=n(0),r=n(254);t.a=function(){return Object(a.useContext)(r.a)}},256:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(255),o=n(253),i=n(92),l=n.n(i);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:b,groupId:d}=e,{tabGroupChoices:p,setTabGroupChoices:m}=Object(c.a)(),[O,j]=Object(a.useState)(i);if(null!=d){const e=p[d];null!=e&&e!==O&&b.some(t=>t.value===e)&&j(e)}const f=e=>{j(e),null!=d&&m(d,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),onFocus:()=>f(e),onClick:()=>f(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===O)[0]))}},257:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);