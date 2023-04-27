(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(249)),i={id:"Introducao",title:"Introdu\xe7\xe3o",hide_title:!0,sidebar_label:"Introduction"},c={id:"Assinaturas/Introducao",isDocsHomePage:!1,title:"Introdu\xe7\xe3o",description:"Introduction",source:"@site/docs/Assinaturas/Introducao.md",permalink:"/technical-documentation-efi/docs/Assinaturas/Introducao",sidebar_label:"Introduction",sidebar:"someSidebar",previous:{title:"Outros endpoints",permalink:"/technical-documentation-efi/docs/PagamentoCartao/EndpointsCartao"},next:{title:"Como funciona",permalink:"/technical-documentation-efi/docs/Assinaturas/ComoFunciona"}},s=[{value:"Next steps",id:"next-steps",children:[]}],u={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{className:"titulo"},"Introduction"),Object(o.b)("div",{className:"subtitulo"},Object(o.b)("p",null,"Charge your customers with recurrent bilings through subscription plans. As soon as he authorizes the debits, you don't have to worry about sending the bill every month and your customer doesn't run the risk of forgetting to make the payment."),Object(o.b)("p",null,"A subscription is a set of transactions generated in a recurrent way."),Object(o.b)("p",null,"To generate a subscription, simply generate a charge and send, together with the information of this charge, data that determine the number of installments and the frequency in which the system must generate a transaction exactly the same as the first one. This information is called ",Object(o.b)("em",{parentName:"p"},"Planos de Assinaturas"),"."),Object(o.b)("p",null,"That way, a subscription is always associated with a plan."),Object(o.b)("p",null,"A subscription is characterized by the ",Object(o.b)("em",{parentName:"p"},"recurring charge"),", which can be carried out by boleto or card: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Credit Card:")," your customer makes the payment, according to the frequency you have defined (monthly, quarterly, etc.), the same amount being automatically charged to your customer's credit card. In the recurrence by card, your customer enters the card data only in the first payment, then the charge is carried out automatically without having to inform the data again;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Boleto Banc\xe1rio:")," the subscription is made via boleto and your customer receives the boleto in 5 (five) days before the due date of the installment.")),Object(o.b)("p",null,"Creating a subscription is quite simple and requires only three steps: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../Assinaturas/CriandoAssinatura#1-crie-o-plano-de-assinatura"}),"Create the subscription plan"),", defining the frequency and how many charges should be generated;")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../Assinaturas/CriandoAssinatura#2-crie-inscri%C3%A7%C3%B5es-assinaturas-para-vincular-ao-plano"}),"Create subscriptions (subscriptions) to link to plan in One Step"),";")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../Assinaturas/CriandoAssinatura#3-defina-a-forma-de-pagamento-da-assinatura-e-os-dados-do-cliente"}),"Create subscriptions (subscriptions) to link to plan in Two Steps"),"."))),Object(o.b)("h2",{id:"next-steps"},"Next steps"),Object(o.b)("p",null,"Now that you know a little about subscriptions, how about seeing ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/technical-documentation-efi/docs/Assinaturas/ComoFunciona"}),"how subscriptions work")," so that you can then ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/technical-documentation-efi/docs/Assinaturas/CriandoAssinatura"}),"create your subscription plan"),".")))}l.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},u),{},{components:n})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);