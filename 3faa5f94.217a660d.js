(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?a.a.createElement(m,s(s({ref:t},p),{},{components:n})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(107)),o={id:"message",title:"Message",sidebar_label:"Message"},s={unversionedId:"server/message",id:"server/message",isDocsHomePage:!1,title:"Message",description:"Creating a message is pretty straightforward as long as you know the id of the channel you wish to send the message to.",source:"@site/docs/server/message.md",slug:"/server/message",permalink:"/docs/server/message",editUrl:"https://github.com/dooboolab/hackatalk-website/tree/master/docs/docs/server/message.md",version:"current",sidebar_label:"Message",sidebar:"docs",previous:{title:"Membership",permalink:"/docs/server/membership"}},c=[{value:"Type of message",id:"type-of-message",children:[]},{value:"Encryption",id:"encryption",children:[]},{value:"Push Notification",id:"push-notification",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Creating a message is pretty straightforward as long as you know the ",Object(i.b)("inlineCode",{parentName:"p"},"id")," of the channel you wish to send the message to."),Object(i.b)("h2",{id:"type-of-message"},"Type of message"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Types of message are defined in ",Object(i.b)("inlineCode",{parentName:"p"},"MessageType"),".")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"text",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Text message"))),Object(i.b)("li",{parentName:"ol"},"photo",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Photo type will display images in the client"))),Object(i.b)("li",{parentName:"ol"},"file",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"File type will be displayed and be presented as a downloadable link in the client")))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"photo")," and the ",Object(i.b)("inlineCode",{parentName:"p"},"file")," will be provided by the array of string which contains urls. The urls will be provided by ",Object(i.b)("inlineCode",{parentName:"p"},"singleUpload")," mutation query defined in our ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"http://hackatalk.azurewebsites.net/graphql"}),"HackaTalk's graphql server"),"."),Object(i.b)("h2",{id:"encryption"},"Encryption"),Object(i.b)("p",null,"The encryption is being done in the ",Object(i.b)("strong",{parentName:"p"},"text")," message only. This should be ",Object(i.b)("strong",{parentName:"p"},"encrypted")," and ",Object(i.b)("strong",{parentName:"p"},"decrpyted")," when communicating with the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Database"}),"database"),". We are using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://encode-decode.com/aes-192-cbc-encrypt-online"}),"aes-192-cbc")," algorithm with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/api/crypto.html"}),"crypto")," package in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org"}),"nodejs"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can read more about it in ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/crypto.html"}),"nodejs crypto"),".")),Object(i.b)("h2",{id:"push-notification"},"Push Notification"),Object(i.b)("p",null,"There are push token id in each device and browser. They are used to receive ",Object(i.b)("strong",{parentName:"p"},"push notification")," in their devices. Push token in the device is sent to the server when user sign-in. ",Object(i.b)("inlineCode",{parentName:"p"},"createNotification")," mutation will be called on the client-side. The ",Object(i.b)("inlineCode",{parentName:"p"},"id")," of the user and the device's ",Object(i.b)("inlineCode",{parentName:"p"},"push token")," will be mapped in the database and they will be used to send messages via ",Object(i.b)("strong",{parentName:"p"},"push notification"),". This will be removed with the ",Object(i.b)("inlineCode",{parentName:"p"},"deleteNotification")," mutation query when the user signs out."))}l.isMDXComponent=!0}}]);