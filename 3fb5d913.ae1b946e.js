(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"Highlight",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),o=a(6),r=(a(0),a(249)),i=(a(251),{id:"PrestaShop",title:"PrestaShop",hide_title:!0,sidebar_label:"PrestaShop"}),c={id:"Modulos/PrestaShop",isDocsHomePage:!1,title:"PrestaShop",description:"PrestaShop",source:"@site/docs/Modulos/PrestaShop.md",permalink:"/documentation/docs/Modulos/PrestaShop",sidebar_label:"PrestaShop",sidebar:"someSidebar",previous:{title:"OpenCartPix",permalink:"/documentation/docs/Modulos/OpenCartPix"},next:{title:"WHMCS - Boletos",permalink:"/documentation/docs/Modulos/WHMCS"}},s=[{value:"1. Requisitos",id:"1-requisitos",children:[]},{value:"2. Module Installation",id:"2-module-installation",children:[{value:"Automatic Installation",id:"automatic-installation",children:[]},{value:"Manual Installation",id:"manual-installation",children:[]}]},{value:"3. Gerencianet&#39;s Plugin Settings for PrestaShop",id:"3-gerencianets-plugin-settings-for-prestashop",children:[{value:"General Settings",id:"general-settings",children:[]},{value:"Credentials",id:"credentials",children:[]}]},{value:"4. Module Operation",id:"4-module-operation",children:[]},{value:"5. Fequently asked questions",id:"5-fequently-asked-questions",children:[]},{value:"6. Support and Suggestions",id:"6-support-and-suggestions",children:[]}],l=function(e){var t=e.children,a=e.color;return Object(r.b)("span",{style:{backgroundColor:a,borderRadius:"4px",color:"#fff",padding:"0.1rem"}},t)},b={rightToc:s,Highlight:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{className:"titulo"},"PrestaShop"),Object(r.b)("div",{className:"subtitulo"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Gerencianet Integration Module for PrestaShop - Version 0.3.1")),Object(r.b)("p",null,"The Gerencianet module for Prestashop allows you to receive payments through the ",Object(r.b)("strong",null,"transparent checkout of our API"),". Compatible with PrestaShop's ",Object(r.b)(l,{color:"#777",mdxType:"Highlight"},"1.6.x")," version."),Object(r.b)("p",null,"This is the Integration Module provided by ",Object(r.b)("a",{target:"blank",href:"https://gerencianet.com.br"},"Gerencianet "),"for PrestaShop. With it, the store owner can choose to receive payments by bank slip and/or credit card. The entire process is carried out through the transparent checkout. With this, the buyer does not need to leave the store's website to make the payment."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Bolix")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you have activated Bolix in your Gestornet account, the charges generated by our module/plugin will already come with the pix on the ticket.\nMore details about Bolix and how to activate it, click ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../Bolix/bolix"}),"here"),"."))),Object(r.b)("br",null),Object(r.b)("h2",{id:"1-requisitos"},"1. Requisitos"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"PHP version: ",Object(r.b)("inlineCode",{parentName:"li"},"5.4.39")," to ",Object(r.b)("inlineCode",{parentName:"li"},"7.0.3")),Object(r.b)("li",{parentName:"ul"},"PrestaShop version: ",Object(r.b)("inlineCode",{parentName:"li"},"1.6.x"))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"IMPORTANT")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The system requirements were defined according to our tests. If your system doesn't meet the requirements, it doesn't mean that the module won't work in your PrestaShop, but that we don't test it in the same environment. ",Object(r.b)("strong",{parentName:"p"},"Therefore, we do not guarantee the operation of this module in environments other than those mentioned above.")))),Object(r.b)("br",null),Object(r.b)("h2",{id:"2-module-installation"},"2. Module Installation"),Object(r.b)("p",null,"The Gerencianet module for PrestaShop can be installed in two different ways:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"#instala%C3%A7%C3%A3o-autom%C3%A1tica"}),"Automatic Installation:"))," using the module installation file packaged through the PrestaShop Add New Modules tool;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"#instala%C3%A7%C3%A3o-manual"}),"Manual Installation:")),"module files must be manually uploaded to the hosting server via FTP."))),Object(r.b)("br",null),Object(r.b)("h3",{id:"automatic-installation"},"Automatic Installation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Download ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gerencianet/gn-api-prestashop/raw/master/auto/gerencianet.zip"}),"the latest version of the module"),' (file "',Object(r.b)("strong",{parentName:"p"},"gerencianet.zip"),'");')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Access the administration panel of your store, then access ",Object(r.b)("code",null,"M\xf3dulos > Adicione um novo M\xf3dulo"),' and send the file "',Object(r.b)("strong",{parentName:"p"},"gerencianet.zip"),'" just downloaded in the first step;')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After sending the module to your store, click on ",Object(r.b)("code",null,"Instalar")," and wait for the process to complete."))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/prestashop.png",alt:"alt text"}))),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"Configure it in ",Object(r.b)("code",null,"M\xf3dulos > Gerencianet > Configurar")," and start receiving payments.")),Object(r.b)("br",null),Object(r.b)("h3",{id:"manual-installation"},"Manual Installation"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Download ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/gerencianet/gn-api-prestashop/raw/master/auto/gerencianet.zip"}),"the latest version of the module"),' (file "',Object(r.b)("strong",{parentName:"p"},"gerencianet.zip"),'") and extract its content or ',Object(r.b)("a",{href:"https://github.com/gerencianet/gn-api-prestashop/tree/master/manual/gerencianet",target:"_blank"},"download")," of the last unzipped version (folder ",Object(r.b)("code",null,"/manual"),");")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Access the store via FTP and upload the entire ",Object(r.b)("code",null,"gerencianet")," unzipped flder to the destination folder ",Object(r.b)("code",null,"modules")," which is at the root of the store files on the server;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Go to the store administration and access ",Object(r.b)("code",null,"M\xf3dulos"),". Look for the Gerencianet module in the list, click in ",Object(r.b)("code",null,"Instalar")," and wait until the process is finished;")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Configure the module in ",Object(r.b)("code",null,"M\xf3dulos > Gerencianet > Configurar")," and start receiving payments."))),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"3-gerencianets-plugin-settings-for-prestashop"},"3. Gerencianet's Plugin Settings for PrestaShop"),Object(r.b)("p",null,"To configure the Gerencianet Module for Prestashop, the merchant must access the administrative interface of the virtual store and, in the main menu, access the ",Object(r.b)("inlineCode",{parentName:"p"},"Modules")," option. Look for the Gerencianet module in the list that will be displayed and then click on ",Object(r.b)("inlineCode",{parentName:"p"},"Configure"),", as shown in the image below:"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/prestashop1.png",alt:"alt text"}))),Object(r.b)("br",null),Object(r.b)("p",null,"When entering module configuration, the following interface will be displayed:"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/prestashop2.png",alt:"alt text"}))),Object(r.b)("p",null,"The credentials and preferences must be configured through the two available tabs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#configura%C3%A7%C3%B5es-gerais"}),"Generel")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#credenciais"}),"Credentials"))),Object(r.b)("br",null),Object(r.b)("h3",{id:"general-settings"},"General Settings"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/prestashop3.png",alt:"alt text"}))),Object(r.b)("p",null,"On this tab, the following properties can be configured:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Modo (mode):")," Configure if you want to activate the development module (testing environment) or production (real billing);")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Op\xe7\xf5es de Pagamento (payments options):")," Configure the payment options you want to receive: Boleto and/or Credit Card.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Dias para vencimento do Boleto (Boleto expiration days):")," Configure the number of calendar days for the Boleto to expire.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Desconto para pagamento no boleto(%) (Boleto's payment discount(%)):")," Define if you want to apply a discount for payments with Boleto.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Atualizar status dos pedidos PrestaShop automaticamente:")," Configure if you want the module to update the status of the store orders automatically according to the Gerencianet notifications.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Status:")," Configure whether the Module will be available to clients."))),Object(r.b)("br",null),Object(r.b)("h3",{id:"credentials"},"Credentials"),Object(r.b)("p",null,'In this tab it is necessary to inform the credentials of your application, that is, the "Client_Id" and "Client_Secret" (see where to find it, according to the environment: ',Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/3d4208-de7a4092-1d7e-4526-9e20-dd7ed0329500.png",target:"_blank"},"development")," and ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/335826-79f10f33-9878-4898-8795-a49b798b7185.png",target:"_blank"},"production"),")of your application and the ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/24/matheus.rodrigues/b66b15-d2201967-d646-4988-8e39-cffae37df203.png",target:"_blank"},"account identifier")," obtained in the application created in Gerencianet."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The shopkeeper shall insert the management credentials manage in their fields. To access these credentials, you must create a new managem application or use an existing one. To create an application, enter your management account, go to",Object(r.b)("code",null,"API > Minhas Aplica\xe7\xf5es > Nova aplica\xe7\xe3o"),'. Choose a name and create the new application. It will now have access to the application credentials. Copy them and enter the respective fields in the "credentials" tab in your store (client_id and client_secret of ',Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/335826-79f10f33-9878-4898-8795-a49b798b7185.png",target:"_blank"},"production")," and ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/3d4208-de7a4092-1d7e-4526-9e20-dd7ed0329500.png",target:"_blank"},"development"),").")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Insert the ",Object(r.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/24/matheus.rodrigues/b66b15-d2201967-d646-4988-8e39-cffae37df203.png",target:"_blank"},"account identifier")," Gerencianet.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Click in ",Object(r.b)("code",null,"Salvar")," and now your virtual store is ready to receive payments through Gerencianet."))),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"IMPORTANT")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},'When in production environment, use the Client_Id and Client_Secret from the "Production" tab and the sandbox option disabled. If it\'s under development, use the Client_Id and Client_Secret from the "Development" tab with the sandbox option enabled. If not done this way, a possible "unauthorized" message may be returned.'))),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"CAUTION")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It is important to note that ",Object(r.b)("strong",{parentName:"p"},"boletos generated in sandbox are not valid and cannot be paid"),', they have the typeable line "zero" and a watermark at the bottom stating that it is a test ticket.'),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},'Payments for sandbox charges using credit card are dummy even if using a "real" card.'),' All card payments in this environment will have the payment confirmed automatically, but this is just a status change to "Paid" . This feature allows you to test the ',Object(r.b)("code",null,"paid")," status notification."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"This means that all payments made in the sandbox are not real and, therefore, there is no financial charge.")),Object(r.b)("p",{parentName:"div"},"It is important to know that the words ",Object(r.b)("strong",{parentName:"p"},"Playground, Sandbox and Development Environment"),", in the Gerencianet context, are synonymous in the sense that they refer to the test site we offer where you can freely test your API integration."))),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"4-module-operation"},"4. Module Operation"),Object(r.b)("p",null,"After being enabled, the module will already be available as a payment option."),Object(r.b)("p",null,"Depending on whether you enable or disable the ",Object(r.b)("code",null,"Payment in one step")," option, the page where the customer will enter their payment details will be different."),Object(r.b)("p",null,"If the ",Object(r.b)("code",null,"One-step payment")," option is active, your customer will fill in the payment details on the same ",Object(r.b)("code",null,"Checkout")," screen, as shown in the figures below:"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/prestashop4.png",alt:"alt text"}))),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/prestashop5.png",alt:"alt text"}))),Object(r.b)("p",null,"In this way, when clicking on ",Object(r.b)("code",null,"Checkout"),", the customer's data will be validated and, if everything is correct, the charge will be generated and the purchase completed. The customer is then redirected to the finalized purchase page."),Object(r.b)("p",null,"If the ",Object(r.b)("code",null,"One-step payment")," option is not active, your customer will fill in the personal and delivery details on the ",Object(r.b)("code",null,"Checkout")," page and by clicking on ",Object(r.b)("code",null,"Confirm Order ")," will be redirected to another page to proceed with the payment, where you will choose the Gerencianet payment option, as shown below:"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/img/prestashop6.png",alt:"alt text"}))),Object(r.b)("p",null,"Both payment screens may change depending on the theme used in the store."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"NOTE")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If any of the mandatory fields for making the payment is not filled in correctly, it will be charged again in the payment form. For ",Object(r.b)("strong",{parentName:"p"},"Boleto Banc\xe1rio"),", the mandatory fields are: ",Object(r.b)("strong",null,"Name, E-mail, CPF and phone number"),". For ",Object(r.b)("strong",{parentName:"p"},"Credit Card"),", the mandatory fields are:: ",Object(r.b)("strong",null,"Name, E-mail, CPF, date of birth, Phone, Address, Number, Neighborhood, Zip Code, City and State.")))),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"5-fequently-asked-questions"},"5. Fequently asked questions"),Object(r.b)("h4",{id:"51-is-it-mandatory-to-have-ssl-in-my-store-to-accept-payments-with-the-module"},"5.1. Is it mandatory to have SSL in my store to accept payments with the module?"),Object(r.b)("p",null,"For the Gerencianet module for PrestaShop to work, it is not necessary for the store to have an SSL certificate. However, it is highly recommended by Gerencianet to use it. Regardless of its use, all payment data is encrypted and transmitted securely for payment validation. The presence of an SSL certificate\ninstalled in your store guarantees greater security for the shopkeeper and for customers who make purchases. The absence of the SSL certificate on the payment screen can cause the merchant to lose sales, as the customer may feel insecure to enter payment data on a page that does not have a certificate."),Object(r.b)("br",null),Object(r.b)("h4",{id:"52-i-want-to-use-transparent-checkout-so-that-the-customer-does-not-leave-my-store-to-make-the-payment-its-possible"},"5.2. I want to use Transparent Checkout so that the customer does not leave my store to make the payment. It's possible?"),Object(r.b)("p",null,"Yes. The Gerencianet module for PrestaShop uses the transparent checkout to pay customers, that is, at no time will the customer leave your virtual store to complete the payment. Thus, in the last step of the purchase, the customer will be asked for the mandatory data to make the payment."),Object(r.b)("h4",{id:"53-is-it-possible-to-use-the-marketplace-or-signatures-features-with-the-module"},"5.3. Is it possible to use the marketplace or signatures features with the module?"),Object(r.b)("p",null,"Not yet. Follow our ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../UltimasNovidades/changelog"}),"Changelog")," to view all news."),Object(r.b)("br",null),Object(r.b)("h4",{id:"54-payment-option-installments-are-not-loading-how-to-fix-it"},"5.4. Payment option installments are not loading. How to fix it?"),Object(r.b)("p",null,'If, after installing and configuring the module, the credit card installments do not load when clicking on the card brands, the merchant must verify the credentials informed in the module configuration (Client_Id, Client_Secret keys and also the "account identifier"). If they are correct, contact the Gerencianet so that the problem can be analyzed.'),Object(r.b)("br",null),Object(r.b)("h4",{id:"55-im-getting-the-message-unauthorized-when-trying-to-complete-a-purchase-what-to-do"},'5.5. I\'m getting the message "Unauthorized" when trying to complete a purchase. What to do?'),Object(r.b)("p",null,"This error message may be related to incorrectly entered credentials. Check that your credentials are correctly entered in the respective PRODUCTION and DEVELOPMENT fields. Check more details in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://gerencianet.com.br/artigo/estou-deparando-com-mensagem-de-unauthorized-sem-autorizacao-por-que/"}),"our FAQ"),"."),Object(r.b)("br",null),Object(r.b)("h4",{id:"56-the-message-management-disabled-sandbox-mode-test-environment-is-active-your-charges-will-not-be-validated-how-to-fix"},"5.6. The message \u201c",Object(r.b)("em",{parentName:"h4"},"Management Disabled: Sandbox mode (Test environment) is active. Your charges will not be validated"),"\u201d. How to fix?"),Object(r.b)("p",null,'This message will be displayed when your module is configured in a test environment (sandbox). To remove this message and start receiving with Gestoret, access the module settings in "M\xf3dulos" > "Gerencianet" > "Configurar"  and uncheck the option \u201cSandBox\u201d > \u201cHabilitar Sandbox Gerencianet (Ambiente de testes)\u201d.'),Object(r.b)("br",null),Object(r.b)("h4",{id:"57-where-can-i-follow-the-transactions-generated-by-the-module"},"5.7. Where can I follow the transactions generated by the module?"),Object(r.b)("p",null,"Transactions generated through the module can be accompanied in your management account in the \u201cAPI\u201d > \u201cMinhas Aplica\xe7\xf5es\u201d > \u201cYour Aplica\xe7\xe3o\u201d. In this environment you can track all transactions and their respective situations."),Object(r.b)("h4",{id:"58-when-i-try-to-make-a-payment-i-get-the-message-an-error-occurred-while-trying-to-make-your-request-contact-your-owner-of-the-store-"},'5.8. When I try to make a payment I get the message "An error occurred while trying to make your request. Contact your owner of the store. "'),Object(r.b)("p",null,'This error message can be displayed at the time of completing purchase by several factors. In this case, the first step is to check the credentials of your application and also check in your API to subbtab "hist\xf3rico de requisi\xe7\xf5es" ',Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"../../docs/VisaoGeral/InterpretandoErros"}),"See How to Use This Resource"),")"),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"6-support-and-suggestions"},"6. Support and Suggestions"),Object(r.b)("p",null,"Your suggestion of new ideas and implementations for the Gerencianet module for PrestaShop is very important. So, if you have any ideas, please contact our team. We will analyze your suggestion and evaluate the possibility of implementation."),Object(r.b)("p",null,"If you have any questions, please contact us via the website. ",Object(r.b)("a",{href:"https://gerencianet.com.br/",target:"_blank"},"Gerencianet"),".")))}p.isMDXComponent=!0},249:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),h=n,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||r;return a?o.a.createElement(m,c(c({ref:t},l),{},{components:a})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},250:function(e,t,a){"use strict";var n=a(0),o=a(35);t.a=function(){return Object(n.useContext)(o.a)}},251:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(250),o=a(252);function r(e,{forcePrependBaseUrl:t=!1,absolute:a=!1}={}){const{siteConfig:{baseUrl:r="/",url:i}={}}=Object(n.a)();if(!e)return e;if(t)return r+e;if(!Object(o.a)(e))return e;const c=r+e.replace(/^\//,"");return a?i+c:c}},252:function(e,t,a){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}a.d(t,"a",(function(){return n}))}}]);