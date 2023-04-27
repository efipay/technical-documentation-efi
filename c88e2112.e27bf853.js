(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{215:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(6),i=(n(0),n(249)),r=(n(251),{id:"WHMCS",title:"WHMCS - Boletos",hide_title:!0,sidebar_label:"WHMCS - Boletos"}),c={id:"Modulos/WHMCS",isDocsHomePage:!1,title:"WHMCS - Boletos",description:"WHMCS - Boletos",source:"@site/docs/Modulos/WHMCS.md",permalink:"/technical-documentation-efi/docs/Modulos/WHMCS",sidebar_label:"WHMCS - Boletos",sidebar:"someSidebar",previous:{title:"PrestaShop",permalink:"/technical-documentation-efi/docs/Modulos/PrestaShop"},next:{title:"whmcspix",permalink:"/technical-documentation-efi/docs/Modulos/whmcspix"}},l=[{value:"1. System requirements",id:"1-system-requirements",children:[]},{value:"2. Installation of the Gerencianet Module for WHMCS",id:"2-installation-of-the-gerencianet-module-for-whmcs",children:[]},{value:"3. Gerencianet Module Settings for WHMCS",id:"3-gerencianet-module-settings-for-whmcs",children:[]},{value:"4. How to cancel a charge",id:"4-how-to-cancel-a-charge",children:[]},{value:"5. How to change the billing due date",id:"5-how-to-change-the-billing-due-date",children:[]},{value:"6. WHMCS discounts",id:"6-whmcs-discounts",children:[]},{value:"7. Common Integration Errors",id:"7-common-integration-errors",children:[]},{value:"8. Gerencianet module developed by Gofas (a Gerencianet&#39;s Partnership for WHMCS)",id:"8-gerencianet-module-developed-by-gofas-a-gerencianets-partnership-for-whmcs",children:[]},{value:"9. Support and Suggestions",id:"9-support-and-suggestions",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{className:"titulo"},"WHMCS - Boletos"),Object(i.b)("div",{className:"subtitulo"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Gerencianet Integration Module for Official WHMCS - Version 0.3.1")),Object(i.b)("p",null,"The Gerencianet's module for WHMCS allows you to ",Object(i.b)("strong",{parentName:"p"},"generate and create boletos with registration")," (registered boleto) through our API. In addition, it allows you to receive payments through ",Object(i.b)("strong",null,"transparent checkout"),"."),Object(i.b)("p",null,"This is a version of the Official Integration Module provided by Gerencianet for WHMCS. With it, the person responsible for the WHMCS account can receive payments by bank slip and, as soon as the charge has a payment confirmation or is canceled, Gerencianet sends an automatic notification to WHMCS."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Biggest versions than 0.2.7 of the Gerencianet/WHMCS module, the automatic WHMCS callback was made available to Gerencianet in cases of cancellation and due date update.")," Therefore, whenever an invoice is canceled in WHMCS it is automatically canceled in Gerencianet, and whenever the invoice has a modified due date, the Gerencianet boleto also has its due date updated."),Object(i.b)("p",null,"To activate the automatic callback from WHMCS to Gerencianet, follow the 5th step in the ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(a.a)({parentName:"em"},{href:"#2-instala%C3%A7%C3%A3o-do-m%C3%B3dulo-gerencianet-para-whmcs"}),"2. Installation of the Gerencianet Module for WHMCS"),".")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Bolix")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you have activated Bolix in your Gerencianet account, the charges generated by our module/plugin will already come with the pix on the ticket.\nMore details about Bolix and how to activate it, click ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../Bolix/bolix"}),"here"),"."))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"IMPORTANT")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For correct operation, we recommend that you read this document carefully and do exactly what is described regarding the necessary configurations in our module, ",Object(i.b)("strong",{parentName:"p"},"including paying attention to the requirements of PHP versions of the server and WHMCS.")))),Object(i.b)("br",null),Object(i.b)("p",null,"Get straight to the point - use the table of contents below and see directly what you need:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#1-requisitos-do-sistema"}),"System requirements"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#2-instala%C3%A7%C3%A3o-do-m%C3%B3dulo-gerencianet-para-whmcs"}),"Installation of the Gerencianet Module for WHMCS"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#3-configura%C3%A7%C3%B5es-do-m%C3%B3dulo-gerencianet-para-whmcs"}),"Gerencianet's Module Settings for WHMCS"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#4-como-cancelar-uma-cobran%C3%A7a"}),"How to cancell a charge"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#5-como-alterar-a-data-de-vencimento-da-cobran%C3%A7a"}),"How to update de due date of a charge"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#6-descontos-no-whmcs"}),"WHMCS discount"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#7-erros-comuns-de-integra%C3%A7%C3%A3o"}),"Common Integration Errors"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#8-m%C3%B3dulo-gerencianet-desenvolvido-por-gofas-parceria-gerencianet-para-whmcs"}),"Gerencianet module developed by Gofas (Gerencianet's Partnership for WHMCS)"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#9-suporte-e-sugest%C3%B5es"}),"Support and Suggestions")))),Object(i.b)("br",null),Object(i.b)("h2",{id:"1-system-requirements"},"1. System requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"PHP version: ",Object(i.b)("inlineCode",{parentName:"li"},"5.4.39")," to ",Object(i.b)("inlineCode",{parentName:"li"},"7.0.3")),Object(i.b)("li",{parentName:"ul"},"WHMCS version: ",Object(i.b)("inlineCode",{parentName:"li"},"6.0.4")," to ",Object(i.b)("inlineCode",{parentName:"li"},"7.1.1"))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"IMPORTANT")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The system requirements were defined according to our tests. If your system doesn't fit the requirements, it doesn't mean that the module won't work on your WHMCS, but that we don't test it in the same environment. ",Object(i.b)("strong",{parentName:"p"},"Therefore, we do not guarantee the operation of this module in environments other than those mentioned above.")),Object(i.b)("p",{parentName:"div"},"You can also check out the Gerencianet's module for WHMCS developed by our official partner Gofas ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#8-m%C3%B3dulo-gerencianet-desenvolvido-por-gofas-parceria-gerencianet-para-whmcs"}),"in this link"),", which is compatible with higher versions of WHMCS and PHP."))),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h2",{id:"2-installation-of-the-gerencianet-module-for-whmcs"},"2. Installation of the Gerencianet Module for WHMCS"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{href:"https://codeload.github.com/gerencianet/gn-api-whmcs/zip/master",target:"_blank"},"Download")," the module latest version;"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Unzip the downloaded file;")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Copy the file ",Object(i.b)("code",null,"gerencianetcharge.php")," and the folder ",Object(i.b)("code",null,"gerencianet_lib"),", availables in the folder ",Object(i.b)("code",null,"gn-api-whmcs")," of our module, to the directory ",Object(i.b)("code",null,"modules/gateways")," of the WHMCS installation;")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Copy the file ",Object(i.b)("code",null,"gerencianetcharge.php"),", available in ",Object(i.b)("code",null,"gn-api-whmcs/callback")," from our module, to the directory ",Object(i.b)("code",null,"modules/gateways/callback")," of the WHMCS installation. It must follow the model ",Object(i.b)("code",null,"modules/gateways/callback/gerencianetcharge.php"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Copy the file ",Object(i.b)("code",null,"gerencianet.php"),", available in ",Object(i.b)("code",null,"gn-api-whmcs/hooks")," from our module and paste in the directory ",Object(i.b)("code",null,"/includes/hooks")," of the WHMCS installation. It must follow the model ",Object(i.b)("code",null,"includes/hooks/gerencianet.php"),"."))),Object(i.b)("p",null,"The Gerencianet module files must follow the same structure in WHMCS, as shown below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"includes/hooks/\n  | gerencianet.php\n\nmodules/gateways/\n  | callback/gerencianetcharge.php\n  | gerencianet_lib/\n  | gerencianetcharge.php\n")),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h2",{id:"3-gerencianet-module-settings-for-whmcs"},"3. Gerencianet Module Settings for WHMCS"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"../../img/whmcs.png",alt:"alt text",title:"Tela de Configura\xe7\xf5es do M\xf3dulo Gerencianet para WHMCS"}))),Object(i.b)("br",null),Object(i.b)("p",null,"Within the WMCS administrative panel, access the menu ",Object(i.b)("code",null,"Setup > Payments > Payment Gateways"),". No campo ",Object(i.b)("code",null,"Active Module"),", chose the option ",Object(i.b)("code",null,"Gerencianet"),". The screen shown above will be displayed. In the form, you must fill the following fields:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1. Client_Id Produ\xe7\xe3o"),": It must be filled in with the production ",Object(i.b)("code",null,"Client_Id")," of your Gerencianet account. This field is mandatory and can be found in the menu ",Object(i.b)("code",null,"API > Minhas Aplica\xe7\xf5es"),". Then select the created application as shown ",Object(i.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/335826-79f10f33-9878-4898-8795-a49b798b7185.png",target:"_blank"},"in this link"),";"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"2. Client_Secret Produ\xe7\xe3o"),": It must be filled in with the production ",Object(i.b)("code",null,"Client_Secret")," of your Gerencianet account. This field is mandatory and can be found in the menu ",Object(i.b)("code",null,"API > Minhas Aplica\xe7\xf5es"),". Then select the created application as shown  ",Object(i.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/335826-79f10f33-9878-4898-8795-a49b798b7185.png",target:"_blank"},"in this link"),";"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"3. Client_Id Desenvolvimento"),": It must be filled in with the development ",Object(i.b)("code",null,"Client_Id")," of your Gerencianet account. This field is mandatory and can be found in the menu ",Object(i.b)("code",null,"API > Minhas Aplica\xe7\xf5es"),". Then select the created application as shown  ",Object(i.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/3d4208-de7a4092-1d7e-4526-9e20-dd7ed0329500.png",target:"_blank"},"in this link"),";"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"4. Client_Secret Desenvolvimento"),": It must be filled in with the development ",Object(i.b)("code",null,"Client_Secret")," of your Gerencianet account. This field is mandatory and can be found in the menu ",Object(i.b)("code",null,"API > Minhas Aplica\xe7\xf5es"),". Then select the created application as shown  ",Object(i.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/30/matheus.rodrigues/3d4208-de7a4092-1d7e-4526-9e20-dd7ed0329500.png",target:"_blank"},"in this link"),";"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"5. Identificador da Conta"),": It must be filled in with the identifier of your Gerencianet account. This field is required. Check where to find it on your platform (",Object(i.b)("a",{href:"https://s3.amazonaws.com/gerencianet-pub-prod-1/printscreen/2020/07/24/matheus.rodrigues/b66b15-d2201967-d646-4988-8e39-cffae37df203.png",target:"_blank"},"Identificador da Conta"),");"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"6. Usu\xe1rio administrador do WHMCS"),":It must be filled in with the WHMCS administrator user. You must use the same user that the WHMCS administrator uses to log into the administrative area of your account. This field is mandatory;"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"7. Desconto do Boleto"),": Inform the discount amount that should be applied to tickets generated exclusively by Gerencianet. This information is optional;"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"8. Tipo de desconto"),": Inform the type of discount (percentage or fixed amount) that should be applied to the boletos generated exclusively by Gerencianet. This information is optional;"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"9. Numero de dias para o vencimento da cobran\xe7a"),": Inform the number of days for the Gerencianet boleto to expire after the charge is generated. If the field is empty, the value is 0;"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"10. Nome do campo referente ao CPF e/ou CNPJ"),": The name of the field that the WHMCS administrator created to receive the CPF and/or CNPJ of the end customer must be informed. This field is mandatory and, if you haven't created it yet, go to the WHMCS admin panel at ",Object(i.b)("code",null,"Setup > Custom Client Fields"),' and configure a field to receive these values. Ex: "CPF/CNPJ";'),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"11. Valor m\xednimo da fatura"),": In this field, the minimum amount of the charge in WHMCS must be informed so that the Gerencianet boleto is generated. So, if you want to limit the generation of transactions in Gerencianet for WHMCS invoices with values greater than R$ 7.00, for example, you must fill in this field with ",Object(i.b)("code",null,"7.00"),". The discount offered in the module by Gerencianet (see field 7) is not included in the calculation of this minimum amount;"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"12. Sandbox"),": If you are interested, enable the Gerencianet API test environment;"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"13. Debug"),": In this field it is possible to enable the Gerencianet transaction and error logs in the WHMCS panel;"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"14. E-mail de cobran\xe7a - Gerencianet"),": If you are interested, enable the sending of collection emails from Gerencianet to the end customer;"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"15. Configura\xe7\xe3o de Multa"),": If you are interested, inform the amount, in percentage, charged as a fine after the due date. For example: if you want 2%, you must enter 2. Minimum of 0.01 and maximum of 10. Integer."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"16. Configura\xe7\xe3o de Juros"),": interest charged per day after the due date. For example: if you want 0.033%, you would enter 0.033. Minimum of 0.001 and maximum of 0.33;"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"17. Observa\xe7\xe3o"),": Allows you to include a message for the customer in the boleto."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"CAUTION")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"During the configuration of our module, specifically in item 10 (see above), it is necessary that you have created a custom field ",Object(i.b)("em",{parentName:"p"},"(custom_field)")," in your WHMCS to receive the CPF and/or CNPJ from the end customer. ",Object(i.b)("strong",{parentName:"p"},"Creation of this field is mandatory.")),Object(i.b)("p",{parentName:"div"},"If not, go to the WHMCS administrative panel at ",Object(i.b)("code",null,"Setup > Custom Client Fields"),' and configure a field to receive these values. Ex: "CPF/CNPJ".'),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Note:")," the custom field, referring to the customer's CPF/CNPJ, must not have its position changed. We suggest this as we have seen reports from WHMCS users who have changed the field position and experienced problems with collecting customer data."),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"DO NOT FORGET: in our module, you must fill in item 10 with exactly the same name as you created the custom field.")))),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"CAUTION")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is important to note that ",Object(i.b)("strong",{parentName:"p"},"boletos generated in sandbox are not valid and cannot be paid"),', they have the typeable line "zero" and a watermark at the bottom stating that it is a test ticket.'),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},'Payments for sandbox charges using credit card are dummy even if using a "real" card.'),' All card payments in this environment will have the payment confirmed automatically, but this is just a status change to "Paid" . This feature allows you to test the ',Object(i.b)("code",null,"paid")," status notification."),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"This means that all payments made in the sandbox are not real and, therefore, there is no financial charge.")),Object(i.b)("p",{parentName:"div"},"It is important to know that the words ",Object(i.b)("strong",{parentName:"p"},"Playground, Sandbox and Development Environment"),", in the Gerencianet's context, are synonymous in the sense that they refer to the test site we offer where you can freely test your API integration."))),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h2",{id:"4-how-to-cancel-a-charge"},"4. How to cancel a charge"),Object(i.b)("p",null," Latest versions than 0.2.6 of the Gerencianet/WHMCS module, we have made the WHMCS automatic callback available to Gerencianet in cases of cancellation of the charges. Therefore, whenever a charge is canceled in WHMCS, it is automatically canceled in Gerencianet."),Object(i.b)("p",null,"To cancel the charge on WHMCS, go to ",Object(i.b)("code",null,"Orders > List All Orders"),", click on the desired ",Object(i.b)("em",{parentName:"p"},"invoice")," ID. Then click on ",Object(i.b)("code",null,"Cancel Order")," (",Object(i.b)("a",{href:"http://content.screencast.com/users/tiagogerencianet/folders/Jing/media/93d867ee-fb78-4e32-88f5-a3648a8fdd8d/whmcs-cancel-order.png",target:"_blank"},"veja onde"),")."),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h2",{id:"5-how-to-change-the-billing-due-date"},"5. How to change the billing due date"),Object(i.b)("p",null,"Latest versions than 0.2.6 of the Gerencianet/WHMCS module, we have made the WHMCS automatic callback available to Gerencianet in cases of updating the bill's expiration date. Therefore, whenever the invoice has its due date modified, the Gerencianet boleto also has its due date updated."),Object(i.b)("p",null,"To change the billing due date, go to ",Object(i.b)("code",null,"Orders > List All Orders"),", click on the invoice ID (",Object(i.b)("a",{href:"http://content.screencast.com/users/tiagogerencianet/folders/Jing/media/1370e079-b893-4ae9-83bb-3d6ccb9b6814/whmcs-vencimento-01.png",target:"_blank"},"veja onde"),"), then in the tab ",Object(i.b)("code",null,"Options")," (",Object(i.b)("a",{href:"http://content.screencast.com/users/tiagogerencianet/folders/Jing/media/6f99b13f-5b6d-4170-ac6e-949183c11c98/whmcs-vencimento-02.png",target:"_blank"},"veja onde"),") and in ",Object(i.b)("code",null,"Due Date")," select the new due date (",Object(i.b)("a",{href:"http://content.screencast.com/users/tiagogerencianet/folders/Jing/media/f8b68f76-f8b4-41f0-a28b-ec3658ea0bcc/whmcs-vencimento-03.png",target:"_blank"},"veja onde"),"),then, click in ",Object(i.b)("code",null,"Save Changes"),"."),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h2",{id:"6-whmcs-discounts"},"6. WHMCS discounts"),Object(i.b)("p",null,"In this integration module it is possible to generate charges considering the discounts of promotional coupons provided by WHMCS. If the integrator chooses one of the 4 WHMCS discount forms (percentage, fixed amount, price replacement and tariff exemption), such discount is converted into reais and passed on to the Gerencianet API at the time of generating the charge."),Object(i.b)("p",null,"In addition to the discounts provided by WHMCS, it is possible to provide exclusive discounts for tickets generated through the Gerencianet module. This discount option is configured in the ",Object(i.b)("inlineCode",{parentName:"p"},"Desconto do Boleto")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Tipo de desconto")," (",Object(i.b)("inlineCode",{parentName:"p"},"Boleto Discount")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Discount type"),") fields of the Gerencianet's module. Once configured, this discount will be displayed on the Gerencianet boleto and, as soon as it is paid, the order and billing amount on WHMCS will be updated to the value with the Gerencianet's discount."),Object(i.b)("p",null,"Another form of discount, in addition to those mentioned above, are the credits that the user has in WHMCS. Thus, if a customer wants to apply a certain credit to the WHMCS order, such amount will be converted into a discount on the Gerencianet charge."),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h2",{id:"7-common-integration-errors"},"7. Common Integration Errors"),Object(i.b)("p",null,"Even before the module tries to generate a charge, some fields required in the integration go through a validation. The errors that this validation can return are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Nome Inv\xe1lido"),": The name informed by the end customer is very short, so the full name must be informed;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"E-mail Inv\xe1lido"),": The email provided by the end customer is invalid (does not follow the pattern ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:xxxxx@xxxx.com"}),"xxxxx@xxxx.com"),") or does not exist;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Telefone Inv\xe1lido"),": The telephone number informed by the end customer does not exist or the area code (DDD) is incorrect;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Documento Inv\xe1lido"),": The final customer's CPF/CNPJ number is invalid;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Documento Nulo"),": The field referring to the customer's CPF and/or CNPJ does not exist in WHMCS or is not filled in;")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Raz\xe3o Social Inv\xe1lida"),': The Social Reason is invalid. The client must type in the "Empresa" (company) field of the WHMCS the business name that appears in the Receita Federal;')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Raz\xe3o Social Nula"),': WHMCS "Empresa" (company) field is not populated;')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Erro Inesperado"),": There was an error in the integration. You probably didn't fill in all the fields in the module correctly, or the PHP version of WHMCS is not compatible with the Gerencianet API. You will need to enable the module's Debug mode to know more details."))),Object(i.b)("p",null,'Even if none of these validation errors are returned, the GeGerencianet API may return errors regarding the generation of the charge. To interpret the API returns and, of course, correct possible data validation errors or similar ones, access the page "',Object(i.b)("a",{href:"../VisaoGeral/InterpretandoErros",target:"_blank"},"Interpretando Erros da API"),'".'),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h2",{id:"8-gerencianet-module-developed-by-gofas-a-gerencianets-partnership-for-whmcs"},"8. Gerencianet module developed by Gofas (a Gerencianet's Partnership for WHMCS)"),Object(i.b)("p",null,"In addition to the module for WHMCS developed internally by our team, Gerencianet has an official partner that developed a module for WHMCS separately. The solution is approved by the company and, if you prefer, you can use it:"),Object(i.b)("p",null,"Gerencianet module for WHMCS (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gofas.net/whmcs/modulo-gerencianet-cartao-para-whmcs-checkout-transparente-e-pagamento-recorrente/"}),"credit card")," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gofas.net/whmcs/modulo-gerencianet-boleto-para-whmcs/"}),"boleto banc\xe1rio"),") ",Object(i.b)("em",{parentName:"p"},"(developed by Maur\xedcio Gofas)")),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h2",{id:"9-support-and-suggestions"},"9. Support and Suggestions"),Object(i.b)("p",null,"Your suggestion of new ideas and implementations for the Gerencianet module for WHMCS is very important. So, if you have any ideas, please contact our team. We will analyze your suggestion and evaluate the possibility of implementation."),Object(i.b)("p",null,"If you have any questions, please contact us via the website. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://gerencianet.com.br/"}),"Gerencianet"),".")))}b.isMDXComponent=!0},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(n),m=a,u=d["".concat(r,".").concat(m)]||d[m]||p[m]||i;return n?o.a.createElement(u,c(c({ref:t},s),{},{components:n})):o.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},250:function(e,t,n){"use strict";var a=n(0),o=n(35);t.a=function(){return Object(a.useContext)(o.a)}},251:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(250),o=n(252);function i(e,{forcePrependBaseUrl:t=!1,absolute:n=!1}={}){const{siteConfig:{baseUrl:i="/",url:r}={}}=Object(a.a)();if(!e)return e;if(t)return i+e;if(!Object(o.a)(e))return e;const c=i+e.replace(/^\//,"");return n?r+c:c}},252:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))}}]);