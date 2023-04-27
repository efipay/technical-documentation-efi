(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(249)),i={id:"BoletoBancario",title:"Boleto Banc\xe1rio",hide_title:!0,sidebar_label:"Boleto Banc\xe1rio"},c={id:"ExemplosIntegracao/BoletoBancario",isDocsHomePage:!1,title:"Boleto Banc\xe1rio",description:"Boleto Banc\xe1rio",source:"@site/docs/ExemplosIntegracao/BoletoBancario.md",permalink:"/technical-documentation-efi/docs/ExemplosIntegracao/BoletoBancario",sidebar_label:"Boleto Banc\xe1rio"},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{className:"titulo"},"Boleto Banc\xe1rio"),Object(r.b)("div",{className:"subtitulo"},Object(r.b)("p",null,"Neste local, voc\xea encontra um ",Object(r.b)("strong",null,"exemplo pronto de uma integra\xe7\xe3o com a API da Gerencianet")," que demonstra a forma de pagamento atrav\xe9s de ",Object(r.b)("strong",null,"boleto banc\xe1rio"),"."),Object(r.b)("p",null,"Por se tratar de um exemplo meramente ilustrativo e de cunho educativo, \xe9 necess\xe1rio que voc\xea adapte \xe0 sua necessidade. ",Object(r.b)("strong",{parentName:"p"},"N\xe3o nos responsabilizamos pela utiliza\xe7\xe3o deste exemplo sem os ajustes necess\xe1rios para seu ambiente de produ\xe7\xe3o.")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"IMPORTANTE")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"N\xe3o esque\xe7a de alterar o ",Object(r.b)("inlineCode",{parentName:"p"},"Client_Id")," e ",Object(r.b)("inlineCode",{parentName:"p"},"Client_Secret")," de acordo com o ambiente utilizado (desenvolvimento ou produ\xe7\xe3o), al\xe9m de lembrar que a vari\xe1vel ",Object(r.b)("inlineCode",{parentName:"p"},'"sandbox"')," \xe9 booleana e possui 2 valores poss\xedveis, de acordo com o ambiente, sendo: ",Object(r.b)("inlineCode",{parentName:"p"},"sandbox => true")," equivale ao ambiente de desenvolvimento e ",Object(r.b)("inlineCode",{parentName:"p"},"sandbox => false")," equivale ao ambiente de produ\xe7\xe3o."))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{href:"https://www.gerencianet.com.br/wp-content/themes/Gerencianet/exemplos-api/boleto/",target:"_blank"},"Clique aqui")," para acessar nosso exemplo de pagamento atrav\xe9s de boleto banc\xe1rio."))))}p.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||r;return n?o.a.createElement(d,c(c({ref:t},s),{},{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);