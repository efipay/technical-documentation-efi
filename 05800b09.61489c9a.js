(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"Highlight",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(249)),c={id:"ComoFunciona",title:"Como funciona",hide_title:!0,sidebar_label:"How it works"},i={id:"Marketplace/ComoFunciona",isDocsHomePage:!1,title:"Como funciona",description:"How it works",source:"@site/docs/Marketplace/ComoFunciona.md",permalink:"/documentation/docs/Marketplace/ComoFunciona",sidebar_label:"How it works",sidebar:"someSidebar",previous:{title:"Introdu\xe7\xe3o",permalink:"/documentation/docs/Marketplace/Introducao"},next:{title:"Dividindo recebimentos",permalink:"/documentation/docs/Marketplace/DividindoRecebimentos"}},l=[{value:"Marketplace settings",id:"marketplace-settings",children:[]}],b=function(e){var t=e.children;e.color;return Object(o.b)("span",{style:{borderRadius:"2px",color:"#009615",padding:"0.2rem"}},t)},s={rightToc:l,Highlight:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{className:"titulo"},"How it works"),Object(o.b)("div",{className:"subtitulo"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If at least one item in a transaction is shipped as a Marketplace item, then all items are considered Marketplace items;")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If the sum of transfers of an item is less than 100%, the remainder will be transferred automatically to the integrating account;")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If the sum of transfers of an item is greater than 100%, it will not be possible to generate the transaction;")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The Ef\xed intermediation fee can be configured in two ways, with ",Object(o.b)("code",null,"mode = 1")," for the rate to be deducted only from the main account that issued the charge, ",Object(o.b)("code",null,"mode = 2")," for the rate to be deducted proportionally to the percentage defined for each account that will receive the transfer. If the mode attribute is not informed in the request, it will be set to ",Object(o.b)("code",null,"mode = 2")," by default.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Marketplace transfers are carried out individually on each product in a charge. Thus, each product can have transfers to different accounts in the same charge;")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"It is not possible to carry out a partial transfer of the shipping value;")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'For the Marketplace to work, the only data required is the account identifier  ("',Object(o.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/24/matheus.rodrigues/b66b15-d2201967-d646-4988-8e39-cffae37df203.png",target:"_blank"},"payee_code"),'") of the accounts that will receive the transfers;')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Transfers cannot have a value equal to zero percent;")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"It is possible to generate charges with several items, some with configured marketplace and others not;")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"It is not possible to transfer two transfers to the same account in the same item;")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Transfers of different or equal amounts to the same account in different items of the same order is allowed. "))),Object(o.b)("br",null),Object(o.b)("h2",{id:"marketplace-settings"},"Marketplace settings"),Object(o.b)("table",null,Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("th",{align:"center"},"Tag"),Object(o.b)("th",{align:"center"},"Standard")),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("code",null,"repass")),Object(o.b)("td",{align:"left"},"Set up a Marketplace pass.",Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("em",null,"Repass attributes:"),Object(o.b)("br",null),Object(o.b)("b",null,Object(o.b)("code",null,"payeeCode*")),'// account code Ef\xed that will receive the transfer - refers to the Ef\xed\'s "account identifier"(',Object(o.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/24/matheus.rodrigues/b66b15-d2201967-d646-4988-8e39-cffae37df203.png",target:"_blank"},"where to find my identifier?"),") ",Object(o.b)(b,{color:"#009615",mdxType:"Highlight"},"(String)"),Object(o.b)("br",null),Object(o.b)("br",null)," ",Object(o.b)("b",null,Object(o.b)("code",null,"percentage*")),"// Percentage that will be passed on to the account whose identifier was entered, including digits to 2 decimal places. Eg: 90% = 9000. ",Object(o.b)(b,{color:"#009615",mdxType:"Highlight"},"(Integer)"))),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("code",null,"mode")),Object(o.b)("td",{align:"left"},"Configures the type of intermediation fee.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("code",null,"mode = 1"),", for the rate to be deducted only from the billing account.",Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("code",null,"mode = 2")," for the tax to be discounted proportionally to the percentage defined for all accounts that will receive transfers."))))))}u.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(f,i(i({ref:t},b),{},{components:n})):a.a.createElement(f,i({ref:t},b))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);