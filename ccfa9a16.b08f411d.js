(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{217:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(249)),o=n(256),i=n(257),l={id:"go",title:"GO",hide_title:!0,sidebar_label:"GO"},s={id:"Instalacao/go",isDocsHomePage:!1,title:"GO",description:"GO",source:"@site/docs/Instalacao/Go.md",permalink:"/technical-documentation-efi/docs/Instalacao/go",sidebar_label:"GO",sidebar:"someSidebar",previous:{title:".NET Core",permalink:"/technical-documentation-efi/docs/Instalacao/core"},next:{title:"Ruby",permalink:"/technical-documentation-efi/docs/Instalacao/ruby"}},u=[{value:"Tested with",id:"tested-with",children:[]},{value:"Basic use",id:"basic-use",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Tests",id:"tests",children:[]}],b={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{className:"titulo"},"GO"),Object(c.b)("div",{className:"subtitulo"},Object(c.b)("p",null,"Our API is ",Object(c.b)("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RESTful"),"\nand responds in ",Object(c.b)("a",{href:"https://www.json.org/json-en.html"},"JSON"),". Ef\xed uses ",Object(c.b)("a",{href:"https://oauth.net/"},"OAuth")," to provide authorized access to the API. Our NodeJS SDK is already prepared to perform this authentication automatically."),Object(c.b)("p",null,"Below, check out the procedures for installing the Ef\xed SDK in GO:"),Object(c.b)(o.a,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Go Pix",value:"pix"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"go",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"$ go get github.com/gerencianet/gn-api-sdk-go/gerencianet\n"))),Object(c.b)(i.a,{value:"pix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"go get github.com/gerencianet/gn-api-sdk-go-pix/gerencianet\n")))),Object(c.b)("br",null),Object(c.b)("h2",{id:"tested-with"},"Tested with"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Go ",Object(c.b)("inlineCode",{parentName:"li"},"1.8"),", ",Object(c.b)("inlineCode",{parentName:"li"},"1.11.4"),", ",Object(c.b)("inlineCode",{parentName:"li"},"1.16.5")," and ",Object(c.b)("inlineCode",{parentName:"li"},"1.19.2")," ")),Object(c.b)("br",null),Object(c.b)("h2",{id:"basic-use"},"Basic use"),Object(c.b)(o.a,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Go Pix",value:"pix"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"go",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'import (\n    "github.com/gerencianet/gn-api-sdk-go/gerencianet"\n)\n\ncredentials := map[string]interface{} {\n    "client_id": "client_id",\n    "client_secret": "client_secret",\n    "sandbox": true,\n    "timeout": 10,\n}\n\ngn := gerencianet.NewGerencianet(credentials)\n\nbody = {\n    "items": [{\n        "name": "Product 1",\n        "value": 1000,\n        "amount": 2,\n    }],\n    "shippings": [{\n        "name": "Default Shipping Cost",\n        "value": 100,\n    }]\n}\n\nres, err := gn.CreateCharge(body)\n'))),Object(c.b)(i.a,{value:"pix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'import (\n    "fmt"\n    "github.com/gerencianet/gn-api-sdk-go-pix/gerencianet"\n    "github.com/gerencianet/gn-api-sdk-go-pix/_examples/configs"\n)\n\ncredentials := map[string]interface{} {\n    "client_id": "Your Client_Id",\n    "client_secret": "Your Client_Secret",\n    "sandbox": true,\n    "timeout": 20,\n    "CA" : "Path to your public key",\n    "Key" : "Path to your private key",\n}\n\ngn := gerencianet.NewGerencianet(credentials)\n\nbody := map[string]interface{} {\n        \n        "calendario": map[string]interface{} {\n                "expiracao": 3600,\n            },\n        "devedor": map[string]interface{}{\n            \n                "cpf": "12345678909",\n                "nome": "Francisco da Silva",\n            \n        },\n        "valor": map[string]interface{} {\n            \n                "original": "00.01",\n            \n        },\n        "chave": "47e7e515-44d3-42cc-8e1f-ef529b4ba4d1",\n        "solicitacaoPagador": "Teste.",\n        "infoAdicionais": []map[string]interface{} {\n            {\n                "nome": "Campo 1",\n                "valor": "Informa\xe7\xe3o Adicional1 do PSP-Recebedor",\n            },\n        },\n    }\n\nres, err := gn.CreateImmediateCharge(body)\n')))),Object(c.b)("br",null),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("p",null,"You can run the examples inside ",Object(c.b)("inlineCode",{parentName:"p"},"_examples")," with ",Object(c.b)("inlineCode",{parentName:"p"},"$ go run example.go"),":"),Object(c.b)(o.a,{defaultValue:"go",values:[{label:"Go",value:"go"},{label:"Go Pix",value:"pix"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"go",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"$ go run charge/create_charge.go\n"))),Object(c.b)(i.a,{value:"pix",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"$ go run chargecreateImmediateCharge.go\n")))),Object(c.b)("p",null,"Just remember to set the correct credentials inside ",Object(c.b)("inlineCode",{parentName:"p"},"_examples/configs.go")," before they run."),Object(c.b)("br",null),Object(c.b)("h2",{id:"tests"},"Tests"),Object(c.b)("p",null,"To run the tests, just run:"),Object(c.b)(o.a,{defaultValue:"go",values:[{label:"GO",value:"go"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"go",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),"$ go test\n"))))))}p.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},253:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},254:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},255:function(e,t,n){"use strict";var a=n(0),r=n(254);t.a=function(){return Object(a.useContext)(r.a)}},256:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(255),o=n(253),i=n(92),l=n.n(i);const s=37,u=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:b,groupId:p}=e,{tabGroupChoices:d,setTabGroupChoices:m}=Object(c.a)(),[g,f]=Object(a.useState)(i);if(null!=p){const e=d[p];null!=e&&e!==g&&b.some(t=>t.value===e)&&f(e)}const O=e=>{f(e),null!=p&&m(p,e)},j=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===g)[0]))}},257:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);