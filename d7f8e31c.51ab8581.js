(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"Highlight",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(249)),o=(n(256),n(257),{id:"Introduction",title:"Introduction",hide_title:!0,sidebar_label:"Introduction"}),c={id:"PIX/Introduction",isDocsHomePage:!1,title:"Introduction",description:"Introduction",source:"@site/docs/PIX/introduction.md",permalink:"/technical-documentation-efi/docs/PIX/Introduction",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Credentials",permalink:"/technical-documentation-efi/docs/PIX/Credentials"}},l=[{value:"About Ef\xed",id:"about-ef\xed",children:[]},{value:"Pix API Changes",id:"pix-api-changes",children:[]},{value:"Ef\xed&#39;s Postman Collection of Ef\xed Pix API",id:"ef\xeds-postman-collection-of-ef\xed-pix-api",children:[]},{value:"Pix SDK",id:"pix-sdk",children:[]}],s=function(e){var t=e.children;e.color;return Object(i.b)("span",{style:{borderRadius:"2px",color:"#009615",padding:"0.2rem"}},t)},b={rightToc:l,Highlight:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{className:"titulo"},"Introduction"),Object(i.b)("div",{className:"subtitulo"},Object(i.b)("h1",{id:"ef\xeds-pix-api"},"Ef\xed's Pix API"),Object(i.b)("hr",null),Object(i.b)("p",null,"Ef\xed's Pix API makes our services available in the context of the Pix arrangement of the Central Bank of Brazil. With our API it is possible to create charges, check the Pix received, refund and send Pix."),Object(i.b)("p",null,"The services of this API allow the recipient to integrate their platform or system with Ef\xed's Pix services."),Object(i.b)("br",null),Object(i.b)("h2",{id:"about-ef\xed"},"About Ef\xed"),Object(i.b)("p",null,"Ef\xed is a Payment Service Provider (PSP) authorized by the Central Bank of Brazil. With our solutions, you can pay and receive with Pix, issue charges to your customers via banking billet, carnet, credit card, payment links and subscriptions - and carry out financial transactions in your Digital Ef\xed's Account."),Object(i.b)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LJJ2w1wVcS8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(i.b)("br",null),Object(i.b)("h2",{id:"pix-api-changes"},"Pix API Changes"),Object(i.b)("p",null,"The following changes are expected and considered (backwards-compatibility):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Addition of new features in the Pix API."),Object(i.b)("li",{parentName:"ul"},"Addition of new optional parameters to charges."),Object(i.b)("li",{parentName:"ul"},"Addition of new fields in Pix API responses."),Object(i.b)("li",{parentName:"ul"},"Changing the field order."),Object(i.b)("li",{parentName:"ul"},"Addition of new elements to enumerations.")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"A new version of the  Ef\xed's Pix API will be generated whenever there are incompatible changes. But don't worry, our team will let you know in advance, on our official channels, how you should proceed."))),Object(i.b)("p",null,"To learn more about the implementation of the Ef\xed's Pix API or to receive a commercial proposal, contact one of our specialists by e-mail ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:pix@gerencianet.com.br"}),"pix@gerencianet.com.br")," or click on the button below."),Object(i.b)("a",{href:"https://gerencianet.com.br/pix/?utm_referrer=https%3A%2F%2Fdev.gerencianet.com.br%2F",target:"_blank",alt:"QUERO SER CLIENTE GERENCIANET"},Object(i.b)("button",{type:"button",className:"buttonCTA buttonorange"},"I WANT TO BE A Ef\xed CUSTOMER")),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("p",null,"You can also talk to our Technical and Commercial teams on the ",Object(i.b)("strong",{parentName:"p"},"Discord")," Platform. Click on the image below to access the server."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gerencianet.github.io/gn-comunidade-discord/"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://gnetbr.com/BJx0f1k4_F",alt:"Foo"})))),Object(i.b)("h2",{id:"ef\xeds-postman-collection-of-ef\xed-pix-api"},"Ef\xed's Postman Collection of Ef\xed Pix API"),Object(i.b)("p",null,"This is the ",Object(i.b)("a",{href:"https://documenter.getpostman.com/view/13574984/TVetcm6R",target:"_blank",alt:"Collection Pix"},"link")," to our Collection that we will keep updated with the  Ef\xed's Pix API endpoints."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://documenter.getpostman.com/view/13574984/TVetcm6R"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"})))),Object(i.b)("br",null),Object(i.b)("h2",{id:"pix-sdk"},"Pix SDK"),Object(i.b)("p",null,"In our repository on github you can find several examples of Pix Ef\xed SDKs, which contain examples from emmision to rendering the QR code. For more details, go to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"SDK PHP: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gerencianet/gn-api-sdk-php"}),"https://github.com/gerencianet/gn-api-sdk-php")),Object(i.b)("li",{parentName:"ul"},"SDK Python: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gerencianet/gn-api-sdk-python"}),"https://github.com/gerencianet/gn-api-sdk-python")),Object(i.b)("li",{parentName:"ul"},"SDK Node.js: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gerencianet/gn-api-sdk-node"}),"https://github.com/gerencianet/gn-api-sdk-node")),Object(i.b)("li",{parentName:"ul"},"SDK Typescript: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gerencianet/gn-api-sdk-typescript"}),"https://github.com/gerencianet/gn-api-sdk-typescript")),Object(i.b)("li",{parentName:"ul"},"SDK Java: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gerencianet/gn-api-sdk-java-examples"}),"https://github.com/gerencianet/gn-api-sdk-java-examples")),Object(i.b)("li",{parentName:"ul"},"SDK C#: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gerencianet/gn-api-sdk-dotnet-core"}),"https://github.com/gerencianet/gn-api-sdk-dotnet-core")),Object(i.b)("li",{parentName:"ul"},"SDK Delphi: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gerencianet/gn-api-sdk-delphi-pix"}),"https://github.com/gerencianet/gn-api-sdk-delphi-pix")),Object(i.b)("li",{parentName:"ul"},"SDK Flutter: ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gerencianet/gn-api-sdk-flutter-examples"}),"https://github.com/gerencianet/gn-api-sdk-flutter-examples")))))}u.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},253:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},254:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},255:function(e,t,n){"use strict";var a=n(0),r=n(254);t.a=function(){return Object(a.useContext)(r.a)}},256:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(255),o=n(253),c=n(92),l=n.n(c);const s=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:u,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:d}=Object(i.a)(),[h,f]=Object(a.useState)(c);if(null!=p){const e=m[p];null!=e&&e!==h&&u.some(t=>t.value===e)&&f(e)}const g=e=>{f(e),null!=p&&d(p,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},u.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===h)[0]))}},257:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);