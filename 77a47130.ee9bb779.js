(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(249)),c=n(256),i=n(257),l={id:"core",title:".NET Core",hide_title:!0,sidebar_label:".NET Core"},s={id:"Instalacao/core",isDocsHomePage:!1,title:".NET Core",description:".NET Core",source:"@site/docs/Instalacao/core.md",permalink:"/documentation/docs/Instalacao/core",sidebar_label:".NET Core",sidebar:"someSidebar",previous:{title:".NET",permalink:"/documentation/docs/Instalacao/net"},next:{title:"GO",permalink:"/documentation/docs/Instalacao/go"}},u=[{value:"Installing via:",id:"installing-via",children:[]},{value:"Tested with",id:"tested-with",children:[]},{value:"Basic use",id:"basic-use",children:[]},{value:"Examples",id:"examples",children:[]}],b={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{className:"titulo"},".NET Core"),Object(o.b)("div",{className:"subtitulo"},Object(o.b)("p",null,"Our API is ",Object(o.b)("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\nand responds in ",Object(o.b)("a",{href:"https://www.json.org/json-en.html"},"JSON"),". Ef\xed uses ",Object(o.b)("a",{href:"https://oauth.net/"},"OAuth")," to provide authorized access to the API. Our .NET core SDK is already prepared to perform this authentication automatically."),Object(o.b)("p",null,"Below, check out the procedures for installing the Ef\xed SDK in ",Object(o.b)("a",{href:"https://github.com/gerencianet/gn-api-sdk-dotnet-core",target:"_blank",title:"Link Externo"},".NET Core"),":"),Object(o.b)("br",null),Object(o.b)("h2",{id:"installing-via"},"Installing via:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Visual Studio package manager")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"PM>Install-Package Gerencianet.NETCore.SDK -Version 2.0.1\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},".NET Cli")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),">dotnet add package Gerencianet.NETCore.SDK --version 2.0.1\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Git"),"\nOur SDK is also available in our ",Object(o.b)("a",{href:"https://github.com/gerencianet/gn-api-sdk-dotnet-core"},"GitHub repository"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ git clone https://github.com/gerencianet/gn-api-sdk-dotnet-core.git\n")),Object(o.b)("br",null),Object(o.b)("h2",{id:"tested-with"},"Tested with"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},".NET ",Object(o.b)("inlineCode",{parentName:"li"},"5.0"))),Object(o.b)("br",null),Object(o.b)("h2",{id:"basic-use"},"Basic use"),Object(o.b)(c.a,{defaultValue:"c",values:[{label:".NET Core",value:"c"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"c",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'using Gerencianet.NETCore.SDK;\n...\ndynamic endpoints = new Endpoints("client_id", "client_secret", true, "production.p12");\n            \nvar body = new \n{\n    calendario = new {\n        expiracao = 3600\n    },\n    devedor = new {\n        cpf = "12345678909",\n        nome = "Francisco da Silva"\n    },\n    valor = new {\n        original = "1.45"\n    },\n    chave = "71cdf9ba-c695-4e3c-b010-abb521a3f1be",\n    solicitacaoPagador = "Informe o n\xfamero ou identificador do pedido."\n};\n\nvar response = endpoints.PixCreateImmediateCharge(null, body);\nConsole.WriteLine(response);\n')))),Object(o.b)("br",null),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"You can run the examples contained in the ",Object(o.b)("inlineCode",{parentName:"p"},"Gerencianet.NETCore.SDK.Examples")," directory, uncomment the lines in ",Object(o.b)("inlineCode",{parentName:"p"},"Program.cs"),"."),Object(o.b)("p",null,"Also make sure you enter the credentials correctly in ",Object(o.b)("inlineCode",{parentName:"p"},"Gerencianet.NETCore.SDK.Examples/credentials.json")," before running the examples.")))}p.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},253:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},254:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=a},255:function(e,t,n){"use strict";var r=n(0),a=n(254);t.a=function(){return Object(r.useContext)(a.a)}},256:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(255),c=n(253),i=n(92),l=n.n(i);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:b,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(o.a)(),[f,O]=Object(r.useState)(i);if(null!=p){const e=d[p];null!=e&&e!==f&&b.some(t=>t.value===e)&&O(e)}const j=e=>{O(e),null!=p&&m(p,e)},h=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===e,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===f)[0]))}},257:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);