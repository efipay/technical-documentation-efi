(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{229:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return d}));var o=t(2),n=t(6),i=(t(0),t(249)),r=t(256),c=t(257),l={id:"verificacaoTLS",title:"Atualiza\xe7\xe3o do protocolo de seguran\xe7a TLS 1.2",hide_title:!0,sidebar_label:"Verificando vers\xf5es e conex\xe3o com TLS 1.2"},s={id:"TLS/verificacaoTLS",isDocsHomePage:!1,title:"Atualiza\xe7\xe3o do protocolo de seguran\xe7a TLS 1.2",description:"Verificando vers\xf5es e conex\xe3o com TLS 1.2",source:"@site/docs/TLS/verificacaoTLS.md",permalink:"/documentation/docs/TLS/verificacaoTLS",sidebar_label:"Verificando vers\xf5es e conex\xe3o com TLS 1.2"},b=[{value:"PHP",id:"php",children:[{value:"Requisitos",id:"requisitos",children:[]},{value:"Diretrizes",id:"diretrizes",children:[]},{value:"Verificando sua conex\xe3o com TLS 1.2",id:"verificando-sua-conex\xe3o-com-tls-12",children:[]}]},{value:"NodeJS",id:"nodejs",children:[{value:"Requisitos",id:"requisitos-1",children:[]},{value:"Verificando sua conex\xe3o com TLS 1.2",id:"verificando-sua-conex\xe3o-com-tls-12-1",children:[]},{value:"Executando exemplo de NodeJS",id:"executando-exemplo-de-nodejs",children:[]}]},{value:"Ruby",id:"ruby",children:[{value:"Requisitos",id:"requisitos-2",children:[]},{value:"Verificando sua conex\xe3o com TLS 1.2",id:"verificando-sua-conex\xe3o-com-tls-12-2",children:[]}]},{value:"Python",id:"python",children:[{value:"Requisitos",id:"requisitos-3",children:[]},{value:"Verificando sua conex\xe3o com TLS 1.2",id:"verificando-sua-conex\xe3o-com-tls-12-3",children:[]}]},{value:".NET",id:"net",children:[{value:"Requisitos",id:"requisitos-4",children:[]},{value:"Verificando sua conex\xe3o com TLS 1.2",id:"verificando-sua-conex\xe3o-com-tls-12-4",children:[]},{value:"Windows",id:"windows",children:[]},{value:"Linux",id:"linux",children:[]}]},{value:"Java",id:"java",children:[{value:"TLS 1.2 no Java",id:"tls-12-no-java",children:[]},{value:"Verificando se seu servidor consegue realizar requisi\xe7\xf5es usando TLS 1.2",id:"verificando-se-seu-servidor-consegue-realizar-requisi\xe7\xf5es-usando-tls-12",children:[]},{value:"Windows",id:"windows-1",children:[]},{value:"Linux",id:"linux-1",children:[]}]},{value:"Delphi",id:"delphi",children:[{value:"Requisitos",id:"requisitos-5",children:[]},{value:"Verificando suas vers\xf5es",id:"verificando-suas-vers\xf5es",children:[]},{value:"Links",id:"links",children:[]}]},{value:"GO",id:"go",children:[{value:"Requisitos",id:"requisitos-6",children:[]}]}],u={rightToc:b};function d(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{className:"titulo"},"Verificando vers\xf5es e conex\xe3o com TLS 1.2"),Object(i.b)("div",{className:"subtitulo"},Object(i.b)("p",null,"Esse reposit\xf3rio cont\xe9m dicas e instru\xe7\xf5es para te ajudar a verificar se seu sistema \xe9 compat\xedvel com certificados TLS 1.2."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"IMPORTANTE")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Enfatizamos que protocolos de seguran\xe7a envolvem a parte t\xe9cnica da sua aplica\xe7\xe3o, ent\xe3o \xe9 crucial que ela seja revisada pelo servi\xe7o de hospedagem web, fornecedor de software ou pela equipe de desenvolvimento/infraestrutura do sistema do cliente."))),Object(i.b)("p",null,"Para ajuda adicional, voc\xea pode considerar as orienta\xe7\xf5es a seguir, espec\xedficas de acordo com linguagens de programa\xe7\xe3o que disponibilizamos SDK's:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#php"}),"PHP")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#nodejs"}),"NodeJs")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#ruby"}),"Ruby")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#python"}),"Python")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#net"}),".NET")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#java"}),"Java")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#delphi"}),"Delphi")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#go"}),"GO"))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"php"},"PHP"),Object(i.b)("h3",{id:"requisitos"},"Requisitos"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Vers\xe3o do PHP: ",Object(i.b)("inlineCode",{parentName:"li"},">= 5.4")),Object(i.b)("li",{parentName:"ul"},"Vers\xe3o da biblioteca cURL: ",Object(i.b)("inlineCode",{parentName:"li"},">= 7.34.0")),Object(i.b)("li",{parentName:"ul"},"Vers\xe3o da biblioteca OpenSSL: ",Object(i.b)("inlineCode",{parentName:"li"},">= 1.0.1c")),Object(i.b)("li",{parentName:"ul"},"O PHP utiliza o cURL fornecido pelo sistema, e precisa ter a vers\xe3o do OpenSSL igual ou superior \xe0 ",Object(i.b)("inlineCode",{parentName:"li"},"1.0.1c")),Object(i.b)("li",{parentName:"ul"},"Pode ser necess\xe1rio ",Object(i.b)("a",{href:"https://curl.haxx.se/docs/ssl-compared.html",target:"_blank"},"atualizar suas bibliotecas SSL/TLS"))),Object(i.b)("br",null),Object(i.b)("h3",{id:"diretrizes"},"Diretrizes"),Object(i.b)("p",null,"Voc\xea pode encontrar informa\xe7\xf5es sobre as bibliotecas OpenSSL dessa forma:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"OpenSSL instalado em seu sistema operacional:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Execute o comando ",Object(i.b)("inlineCode",{parentName:"li"},"openssl version")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"OpenSSL que seu PHP est\xe1 utilizando:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Procure esta informa\xe7\xe3o dentro do arquivo ",Object(i.b)("inlineCode",{parentName:"li"},"php.ini")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Para encontrar a vers\xe3o do OpenSSL de seu cURL, execute o comando a seguir em seu servidor:"))),Object(i.b)(r.a,{defaultValue:"codigo",values:[{label:"C\xf3digo",value:"codigo"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"codigo",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-php"}),"php -r 'echo json_encode(curl_version(), JSON_PRETTY_PRINT);'\n")))),Object(i.b)("p",null,"Todas essas bibliotecas OpenSSL podem ser diferentes, e atualizar uma n\xe3o atualizar\xe1 a outra automaticamente."),Object(i.b)("p",null,"O ",Object(i.b)("inlineCode",{parentName:"p"},"php_curl")," utiliza sua pr\xf3pria vers\xe3o da biblioteca OpenSSL, que n\xe3o \xe9 a mesma que o PHP usa, que est\xe3o nos arquivos ",Object(i.b)("inlineCode",{parentName:"p"},"openssl.so")," e ",Object(i.b)("inlineCode",{parentName:"p"},"php.ini"),"."),Object(i.b)("br",null),Object(i.b)("h3",{id:"verificando-sua-conex\xe3o-com-tls-12"},"Verificando sua conex\xe3o com TLS 1.2"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Baixe ",Object(i.b)("a",{href:"https://github.com/gerencianet/TLS-update/tree/master/PHP",target:"_blank"},"esses arquivos")," em seu servidor."),Object(i.b)("li",{parentName:"ol"},"No terminal de seu servidor, execute os comandos a seguir:")),Object(i.b)(r.a,{defaultValue:"codigo",values:[{label:"C\xf3digo",value:"codigo"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"codigo",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-php"}),"php tls.php\n")))),Object(i.b)("p",null,"Em caso de sucesso, o retorno ser\xe1:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Sucesso: sua conex\xe3o com a Gerencianet est\xe1 utilizando o protocolo TLS 1.2.")),Object(i.b)("p",null,"Em caso de falha, um dos erros a seguir deve ser exibido:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Peer's Certificate issuer is not recognized")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Unable to connect to api.gerencianet.com.br")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"error: Could not resolve host: api.gerencianet.com.br; Name or service not known")),Object(i.b)("ol",{start:3},Object(i.b)("li",{parentName:"ol"},"Ao atualizar bibliotecas OpenSSL, voc\xea precisa atualizar a vers\xe3o do OpenSSL de seu php_curl, e n\xe3o a vers\xe3o do OpenSSL de seu servidor operacional.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"nota")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Tenha certeza que os testes executados em seu terminal utilizam a mesma vers\xe3o de PHP e bibliotecas SSL/TLS que seu servidor web."),Object(i.b)("p",{parentName:"div"},"Se voc\xea usar MAMP ou XAMPP, o PHP j\xe1 \xe9 configurado com a vers\xe3o mais antiga do OpenSSL, onde pode ser complicado atualizar. Os links a seguir podem ajud\xe1-lo nessa atualiza\xe7\xe3o:"),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://stackoverflow.com/questions/33887552/change-openssl-version-in-mamp",target:"_blank"},"Change OpenSSL version in MAMP")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://www.php.net/manual/pt_BR/openssl.installation.php",target:"_blank"},"PHP - OpenSSL Installation"))))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"nodejs"},"NodeJS"),Object(i.b)("h3",{id:"requisitos-1"},"Requisitos"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"O Node utiliza o OpenSSL instalado no sistema."),Object(i.b)("li",{parentName:"ul"},"O TLS 1.2 exige que a vers\xe3o m\xednima do OpenSSL seja a ",Object(i.b)("inlineCode",{parentName:"li"},"1.0.1c"),".")),Object(i.b)("br",null),Object(i.b)("h3",{id:"verificando-sua-conex\xe3o-com-tls-12-1"},"Verificando sua conex\xe3o com TLS 1.2"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Execute o seguinte comando em seu servidor:")),Object(i.b)(r.a,{defaultValue:"codigo",values:[{label:"C\xf3digo",value:"codigo"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"codigo",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'node -e "console.log(process.versions)"\n')))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"vers\xe3o do seu OpenSSL ser\xe1 exibida na propriedade ",Object(i.b)("inlineCode",{parentName:"li"},"openssl"),", conforme demonstrado no exemplo a seguir:")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),"{\nhttp_parser: '2.7.0',\nnode: '8.6.0',\nv8: '6.0.287.53',\nuv: '1.14.1',\nzlib: '1.2.11',\nares: '1.10.1-DEV',\nmodules: '57',\nnghttp2: '1.25.0',\nopenssl: '1.0.2l',\nicu: '59.1',\nunicode: '9.0',\ncldr: '31.0.1',\ntz: '2017b'\n}\n")),Object(i.b)("br",null),Object(i.b)("h3",{id:"executando-exemplo-de-nodejs"},"Executando exemplo de NodeJS"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Baixe o arquivo ",Object(i.b)("inlineCode",{parentName:"li"},"tls.js")," ",Object(i.b)("a",{href:"https://github.com/gerencianet/TLS-update/tree/master/Node",target:"_blank"},"neste link")),Object(i.b)("li",{parentName:"ol"},"Coloque-o em seu servidor, e execute-o com o comando ",Object(i.b)("inlineCode",{parentName:"li"},"node tls.js"),".")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"ruby"},"Ruby"),Object(i.b)("h3",{id:"requisitos-2"},"Requisitos"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\xc9 necess\xe1rio que a vers\xe3o de seu Ruby seja",Object(i.b)("inlineCode",{parentName:"li"}," 2.0.0")," ou superior, assim como a do OpenSSL ",Object(i.b)("inlineCode",{parentName:"li"},"1.0.1c")," ou superior:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"O Ruby ",Object(i.b)("inlineCode",{parentName:"li"},"2.0.0")," ou superior \xe9 necess\xe1rio para que o mesmo consiga utilizar o TLS 1.2 do OpenSSL de seu pr\xf3prio sistema;"),Object(i.b)("li",{parentName:"ul"},"Para conseguir utilizar o TLS 1.2 \xe9 necess\xe1rio o OpenSSL ",Object(i.b)("inlineCode",{parentName:"li"},"1.0.1c")," ou superior instalado em seu sistema."))),Object(i.b)("li",{parentName:"ul"},"Para atualizar as depend\xeancias de seu aplicativo, talvez seja necess\xe1rio utilizar o comando bundle update.")),Object(i.b)("br",null),Object(i.b)("h3",{id:"verificando-sua-conex\xe3o-com-tls-12-2"},"Verificando sua conex\xe3o com TLS 1.2"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Execute o arquivo ",Object(i.b)("code",null,"tls-example.rb"),", que pode ser encontrado ",Object(i.b)("a",{href:"https://github.com/gerencianet/TLS-update/tree/master/Ruby",target:"_blank"},"neste link"),", da seguinte maneira:")),Object(i.b)(r.a,{defaultValue:"codigo",values:[{label:"C\xf3digo",value:"codigo"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"codigo",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-rb"}),"$ ruby tls.rb\n")))),Object(i.b)("p",null,"Em caso de sucesso, o retorno ser\xe1 exibido em seu terminal:"),Object(i.b)("code",null,"Sucesso: sua conex\xe3o com a Gerencianet est\xe1 utilizando o protocolo TLS 1.2."),Object(i.b)("p",null,"Caso ocorra algum erro na requisi\xe7\xe3o devido ao protocolo TLS, uma exce\xe7\xe3o ser\xe1 lan\xe7ada."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"python"},"Python"),Object(i.b)("h3",{id:"requisitos-3"},"Requisitos"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"O Python utiliza o OpenSSL fornecido pelo sistema"),Object(i.b)("li",{parentName:"ul"},"O TLS 1.2 necessita da vers\xe3o OpenSSL ",Object(i.b)("inlineCode",{parentName:"li"},"1.0.1c")," ou posterior")),Object(i.b)("br",null),Object(i.b)("h3",{id:"verificando-sua-conex\xe3o-com-tls-12-3"},"Verificando sua conex\xe3o com TLS 1.2"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Baixe ",Object(i.b)("a",{href:"https://github.com/gerencianet/TLS-update/blob/master/Python/tls.py",target:"_blank"},"esse arquivo")," em seu servidor."),Object(i.b)("li",{parentName:"ol"},"Execute-o arquivo com o comando ",Object(i.b)("inlineCode",{parentName:"li"},"python tls.py"))),Object(i.b)("p",null,"Em caso de sucesso, o retorno ser\xe1:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Sucesso: sua conex\xe3o com a Gerencianet est\xe1 utilizando o protocolo TLS 1.2.")),Object(i.b)("p",null,"Em  caso de falha, a seguinte mensagem ser\xe1 exibida:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Sua vers\xe3o SSL \xe9 xxx"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"Sua vers\xe3o deve ser superior \xe0 1.0.1c")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"net"},".NET"),Object(i.b)("h3",{id:"requisitos-4"},"Requisitos"),Object(i.b)("p",null,"Para habilitar o funcionamento do protocolo TLS 1.2 em seu sistema, voc\xea precisa utilizar a vers\xe3o mais recente do Mono (Linux) ou ",Object(i.b)("a",{href:"https://www.microsoft.com/pt-br/download/details.aspx?id=30653",target:"_blank"},".NET Framework 4.5")," ou ",Object(i.b)("a",{href:"https://docs.microsoft.com/pt-br/dotnet/framework/migration-guide/versions-and-dependencies",target:"_blank"},"superior"),"."),Object(i.b)("br",null),Object(i.b)("h3",{id:"verificando-sua-conex\xe3o-com-tls-12-4"},"Verificando sua conex\xe3o com TLS 1.2"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Execute o arquivo ",Object(i.b)("code",null,"Tls.exe"),", que pode ser encontrado ",Object(i.b)("a",{href:"https://github.com/gerencianet/TLS-update/raw/master/C%23/Tls.exe",target:"_blank"},"neste link"),".")),Object(i.b)("br",null),Object(i.b)("h3",{id:"windows"},"Windows"),Object(i.b)("p",null,"Execute o arquivo normalmente como qualquer outro execut\xe1vel (extens\xe3o .exe)."),Object(i.b)("br",null),Object(i.b)("h3",{id:"linux"},"Linux"),Object(i.b)("p",null,"Execute o comando a partir do ",Object(i.b)("inlineCode",{parentName:"p"},"mono")," da seguinte maneira:"),Object(i.b)(r.a,{defaultValue:"codigo",values:[{label:"C\xf3digo",value:"codigo"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"codigo",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-code"}),"$ mono Tls.exe\n")))),Object(i.b)("p",null,"Em caso de sucesso, o retorno ser\xe1:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Sucesso: sua conex\xe3o com a Gerencianet est\xe1 utilizando o protocolo TLS 1.2.")),Object(i.b)("p",null,"Para exemplo completo, veja ",Object(i.b)("a",{href:"https://github.com/gerencianet/TLS-update/tree/master/C%23",target:"_blank"},"este link"),"."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"java"},"Java"),Object(i.b)("h3",{id:"tls-12-no-java"},"TLS 1.2 no Java"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Na vers\xe3o ",Object(i.b)("code",null,"1.6")," do Java, o TLS 1.2 est\xe1 dispon\xedvel a partir da atualiza\xe7\xe3o de n\xfamero ",Object(i.b)("code",null,"11"),". Caso necess\xe1rio, atualize a JDK de seu servidor - as vers\xf5es mais recentes est\xe3o dispon\xedveis ",Object(i.b)("a",{href:"http://www.oracle.com/technetwork/java/javase/downloads/java-archive-downloads-javase6-419409.html",target:"_blank"},"neste link"),"."),Object(i.b)("li",{parentName:"ul"},"Nas vers\xf5es ",Object(i.b)("inlineCode",{parentName:"li"},"1.7")," e ",Object(i.b)("inlineCode",{parentName:"li"},"1.8")," do Java o suporte para TLS 1.2 \xe9 nativo."),Object(i.b)("li",{parentName:"ul"},"A habilita\xe7\xe3o deste recurso depende do servidor que sua aplica\xe7\xe3o est\xe1 utilizando.")),Object(i.b)("br",null),Object(i.b)("h3",{id:"verificando-se-seu-servidor-consegue-realizar-requisi\xe7\xf5es-usando-tls-12"},"Verificando se seu servidor consegue realizar requisi\xe7\xf5es usando TLS 1.2"),Object(i.b)("p",null,"Obtenha o arquivo .jar ",Object(i.b)("a",{href:"https://github.com/gerencianet/TLS-update/blob/master/Java/tls.jar",target:"_blank"},"neste link")," e fa\xe7a o teste."),Object(i.b)("br",null),Object(i.b)("h3",{id:"windows-1"},"Windows"),Object(i.b)("p",null,"Basta clicar 2x no arquivo ",Object(i.b)("inlineCode",{parentName:"p"},"tls.jar"),"."),Object(i.b)("br",null),Object(i.b)("h3",{id:"linux-1"},"Linux"),Object(i.b)("p",null,"Execute o seguinte comando a partir do terminal, na pasta que cont\xe9m o arquivo ",Object(i.b)("inlineCode",{parentName:"p"},"tls.jar"),":"),Object(i.b)(r.a,{defaultValue:"codigo",values:[{label:"C\xf3digo",value:"codigo"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"codigo",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"java -jar tls.jar\n")))),"Para download, a classe completa pode ser encontrada ",Object(i.b)("a",{href:"https://github.com/gerencianet/TLS-update/blob/master/Java/tls.java",target:"_blank"},"neste link"),".",Object(i.b)("h2",{id:"delphi"},"Delphi"),Object(i.b)("h3",{id:"requisitos-5"},"Requisitos"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Para habilitar o funcionamento do protocolo TLSv1.2 em seu sistema, a \xfanica coisa necess\xe1ria \xe9 utilizar a vers\xe3o mais recente do Mono(linux) ou .NET Framework (maior que 4.5, recomendado >= 4.6.2). ")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"As vers\xf5es do Windows Server 2003 e Windows XP, al\xe9m de vers\xf5es mais antigas e anteriores ",Object(i.b)("strong",{parentName:"p"},"n\xe3o s\xe3o compat\xedveis com TLS"),". Confira a rela\xe7\xe3o completa da compatibilidade de sistemas operacionais nesta tabela")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Deve-se utilizar, no m\xednimo, ",Object(i.b)("a",{href:"https://www.microsoft.com/pt-br/download/details.aspx?id=53344",target:"_blank"},".NET Framework 4.6.2")," ou superior. Confira nesta tabela a rela\xe7\xe3o das vers\xf5es do Windows e sua compatibilidade com o .NET Framework 4.6.2."))),Object(i.b)("p",null,"Portanto, \xe9 importante estar atento certificar-se que o sistema operacional que roda a sua aplica\xe7\xe3o seja compat\xedvel com o protocolo TLS 1.2 e Microsoft .NET Framework 4.6.2."),Object(i.b)("br",null),Object(i.b)("h3",{id:"verificando-suas-vers\xf5es"},"Verificando suas vers\xf5es"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Para testar a compatibilidade de seu sistema com o Protocolo TLS 1.2 fa\xe7a o download da pasta completa ",Object(i.b)("a",{href:"https://github.com/gerencianet/gn-api-sdk-delphi/tree/master/src/dll-compilada",target:"_blank"},"dll-compilada"),', descompacte os arquivos em um diret\xf3rio de sua preferencia e execute o arquivo "GerenciaDemo.exe". No console insira suas credenciais de produ\xe7\xe3o (Client_Id e Client_Secret) e clique em "conectar", se a mensagem "Conected" for devolvida seu sistema \xe9 compat\xedvel. Tal exemplo est\xe1 demonstrado em ',Object(i.b)("a",{href:"https://www.screencast.com/t/CedXxr8e",target:"_blank"},"imagem"),".")),Object(i.b)("br",null),Object(i.b)("h3",{id:"links"},"Links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://blogs.msdn.microsoft.com/kaushal/2011/10/02/support-for-ssltls-protocols-on-windows/",target:"_blank"},"Compatibilidade do Windows com TLS 1.2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{href:"https://docs.microsoft.com/pt-br/dotnet/framework/get-started/system-requirements",target:"_blank"},"Compatibilidade do Windows com as vers\xf5es do .NET Framework"))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"go"},"GO"),Object(i.b)("p",null,"Todas as vers\xf5es do Go j\xe1 suportam TLS 1.2 por padr\xe3o, portanto, voc\xea n\xe3o precisar\xe1 fazer nenhuma altera\xe7\xe3o."),Object(i.b)("h3",{id:"requisitos-6"},"Requisitos"),Object(i.b)("p",null,"GO usa o OpenSSL fornecido pelo sistema.\nTLSv1.2 precisa da vers\xe3o OpenSSL 1.0.1c ou superior.\nExecutando exemplo em GO\nBaixe o arquivo ",Object(i.b)("code",null,"tls.go")," do nosso ",Object(i.b)("a",{href:"https://github.com/gerencianet/TLS-update/tree/master/Go",target:"_blank"},"reposit\xf3rio"),"."),Object(i.b)("p",null,"Coloque-o em seu servidor, e execute-o com o comando:"),Object(i.b)(r.a,{defaultValue:"codigo",values:[{label:"C\xf3digo",value:"codigo"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"codigo",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-go"}),"go run tls.go\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"On sucess:\n",Object(i.b)("inlineCode",{parentName:"li"},"Gerencianet_Connection_TLS1.2_OK!")),Object(i.b)("li",{parentName:"ul"},"On failure:\n",Object(i.b)("inlineCode",{parentName:"li"},"Fatalln err")))))))}d.isMDXComponent=!0},249:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return m}));var o=t(0),n=t.n(o);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),b=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=b(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},p=n.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(t),p=o,m=u["".concat(r,".").concat(p)]||u[p]||d[p]||i;return t?n.a.createElement(m,c(c({ref:a},s),{},{components:t})):n.a.createElement(m,c({ref:a},s))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=p;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},253:function(e,a,t){"use strict";function o(e){var a,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=o(e[a]))&&(n&&(n+=" "),n+=t);else for(a in e)e[a]&&(n&&(n+=" "),n+=a);return n}a.a=function(){for(var e,a,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(a=o(e))&&(n&&(n+=" "),n+=a);return n}},254:function(e,a,t){"use strict";var o=t(0);const n=Object(o.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});a.a=n},255:function(e,a,t){"use strict";var o=t(0),n=t(254);a.a=function(){return Object(o.useContext)(n.a)}},256:function(e,a,t){"use strict";var o=t(0),n=t.n(o),i=t(255),r=t(253),c=t(92),l=t.n(c);const s=37,b=39;a.a=function(e){const{block:a,children:t,defaultValue:c,values:u,groupId:d}=e,{tabGroupChoices:p,setTabGroupChoices:m}=Object(i.a)(),[O,j]=Object(o.useState)(c);if(null!=d){const e=p[d];null!=e&&e!==O&&u.some(a=>a.value===e)&&j(e)}const v=e=>{j(e),null!=d&&m(d,e)},h=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a})},u.map(({value:e,label:a})=>n.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===e,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,a,t)=>{switch(t.keyCode){case b:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case s:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(h,e.target,e),onFocus:()=>v(e),onClick:()=>v(e)},a))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(t).filter(e=>e.props.value===O)[0]))}},257:function(e,a,t){"use strict";var o=t(0),n=t.n(o);a.a=function(e){return n.a.createElement("div",null,e.children)}}}]);