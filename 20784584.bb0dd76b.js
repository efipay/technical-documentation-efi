(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{128:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(2),r=a(6),o=(a(0),a(249)),i={id:"AtualizarTransacoes",title:"Atualizar Transa\xe7\xf5es",hide_title:!0,sidebar_label:"Update transactions"},c={id:"OutrosRecursos/AtualizarTransacoes",isDocsHomePage:!1,title:"Atualizar Transa\xe7\xf5es",description:"Update transactions",source:"@site/docs/OutrosRecursos/AtualizarTransacoes.md",permalink:"/documentation/docs/OutrosRecursos/AtualizarTransacoes",sidebar_label:"Update transactions",sidebar:"someSidebar",previous:{title:"introexamples",permalink:"/documentation/docs/ExemplosIntegracao/introexamples"},next:{title:"Cancelar Transa\xe7\xf5es",permalink:"/documentation/docs/OutrosRecursos/CancelarTransacoes"}},s=[],l={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{className:"titulo"},"Update transactions"),Object(o.b)("div",{className:"subtitulo"},Object(o.b)("p",null,"It is possible to update/change the information in a transaction, for example, change the due date of a charge or installment, change the notification URL and/or custom_id of transactions, carn\xeas or subscriptions."),Object(o.b)("p",null,"The rest of this page has the detailed procedures, but you need to install one of our libraries on your server to run the sample code. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../VisaoGeral/introducao"}),"Make sure the Gest\xe3onet SDK has been installed"),"."),Object(o.b)("p",null,"Get straight to the point - use the table of contents below and see directly what you need:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../PagamentoBoleto/EndpointsBoletos#1-alterar-data-de-vencimento-de-boleto-banc%C3%A1rio"}),"Change boleto banc\xe1rio due date"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../Carnes/EndpointsCarne#2-alterar-url-de-notifica%C3%A7%C3%A3o-notification_url-eou-custom_id-de-carn%C3%AAs"}),"Change a carn\xea's installment due date"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../PagamentoBoleto/EndpointsBoletos#3-alterar-url-de-notifica%C3%A7%C3%A3o-notification_url-eou-custom_id-de-transa%C3%A7%C3%A3o"}),"Change notification URL (notification_url) and/or transaction custom_id"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../Carnes/EndpointsCarne#2-alterar-url-de-notifica%C3%A7%C3%A3o-notification_url-eou-custom_id-de-carn%C3%AAs"}),"Change carn\xea's notification URL (notification_url) and/or transaction custom_id"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../Assinaturas/EndpointsAssinatura#5-alterar-url-de-notifica%C3%A7%C3%A3o-notification_url-eou-custom_id-de-assinaturas"}),"Change subscription's notification URL (notification_url) and/or transaction custom_id"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../Assinaturas/EndpointsAssinatura#8-editar-nome-do-plano-de-assinatura"}),"Edit subscription plan name"))))))}u.isMDXComponent=!0},249:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=n,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);