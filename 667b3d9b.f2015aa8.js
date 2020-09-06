(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{107:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),s=function(e){var n=a.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},h=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(t),h=r,u=p["".concat(o,".").concat(h)]||p[h]||m[h]||i;return t?a.a.createElement(u,l(l({ref:n},b),{},{components:t})):a.a.createElement(u,l({ref:n},b))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},76:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(6),i=(t(0),t(107)),o={id:"membership",title:"Membership",sidebar_label:"Membership"},l={unversionedId:"server/membership",id:"server/membership",isDocsHomePage:!1,title:"Membership",description:"As described in Channel, Membership model is a single table inheritance. Only one member(user) in the channel will have the authorization to grant other user's permission to the Channel. This member will be referred to as the owner.",source:"@site/docs/server/membership.md",slug:"/server/membership",permalink:"/docs/server/membership",editUrl:"https://github.com/dooboolab/hackatalk-website/tree/master/docs/docs/server/membership.md",version:"current",sidebar_label:"Membership",sidebar:"docs",previous:{title:"Channel",permalink:"/docs/server/channel"},next:{title:"Message",permalink:"/docs/server/message"}},c=[{value:"Types of membership",id:"types-of-membership",children:[]}],b={rightToc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As described in ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"docs/server/channel"}),"Channel"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Membership")," model is a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/@User3141592/when-to-use-single-table-inheritance-vs-multiple-table-inheritance-db7e9733ae2e"}),"single table inheritance"),". Only one member(user) in the channel will have the authorization to grant other user's permission to the ",Object(i.b)("inlineCode",{parentName:"p"},"Channel"),". This member will be referred to as the ",Object(i.b)("inlineCode",{parentName:"p"},"owner"),"."),Object(i.b)("h2",{id:"types-of-membership"},"Types of membership"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Types of membership are defined in ",Object(i.b)("inlineCode",{parentName:"p"},"MembershipType"),". Note that the ",Object(i.b)("inlineCode",{parentName:"p"},"MembershipType")," is only considered when the channel is ",Object(i.b)("strong",{parentName:"p"},"public"),". All users will have the same ",Object(i.b)("inlineCode",{parentName:"p"},"membershipType")," when the channel is ",Object(i.b)("strong",{parentName:"p"},"private"),".")),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"owner",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"owner")," of the ",Object(i.b)("strong",{parentName:"li"},"channel")," can add or remove ",Object(i.b)("inlineCode",{parentName:"li"},"admin")," users in the ",Object(i.b)("strong",{parentName:"li"},"channel"),"."),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("inlineCode",{parentName:"li"},"owner")," wants to leave the ",Object(i.b)("strong",{parentName:"li"},"public")," channel, he or she needs to transfer ownership to other users if the users are in the channel."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"owner")," of the ",Object(i.b)("strong",{parentName:"li"},"public")," channel can change the ",Object(i.b)("strong",{parentName:"li"},"channel")," name."))),Object(i.b)("li",{parentName:"ol"},"admin",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"admin")," user can add more users to the channel."))),Object(i.b)("li",{parentName:"ol"},"member",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The only thing member can do in the ",Object(i.b)("strong",{parentName:"li"},"public")," channel is sending messages or leave the channel.")))))}s.isMDXComponent=!0}}]);