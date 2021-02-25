(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{102:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"toc",(function(){return o})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),c=(t(0),t(125)),i={id:"search-users",title:"Search Users",sidebar_label:"Searching users"},s={unversionedId:"client/search-users",id:"client/search-users",isDocsHomePage:!1,title:"Search Users",description:"SearchUser screen",source:"@site/docs/client/search-users.md",slug:"/client/search-users",permalink:"/docs/client/search-users",editUrl:"https://github.com/dooboolab/hackatalk-website/tree/master/docs/client/search-users.md",version:"current",sidebar_label:"Searching users",sidebar:"docs",previous:{title:"Integrate with backend",permalink:"/docs/client/integrate-with-backend"},next:{title:"Start direct messaging",permalink:"/docs/client/start-direct-messaging"}},o=[{value:"SearchUser screen",id:"searchuser-screen",children:[{value:"Searching Users",id:"searching-users",children:[]}]}],l={toc:o};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"searchuser-screen"},"SearchUser screen"),Object(c.b)("img",{src:"https://miro.medium.com/max/287/1*EOsuX75bI_fGjp93Gbm_5Q.gif",width:"200"}),Object(c.b)("p",null,"Users will be fetched in infinite scrollview. Relay style cursor pagination is applied in this implementation as written in ",Object(c.b)("a",{parentName:"p",href:"https://medium.com/@dooboolab/relay-experimental-cursor-pagination-6a9e448d3146"},"medium blog"),"."),Object(c.b)("h3",{id:"searching-users"},"Searching Users"),Object(c.b)("p",null,"When searching users, you can just send ",Object(c.b)("inlineCode",{parentName:"p"},"searchText")," argument to grapqhl ",Object(c.b)("inlineCode",{parentName:"p"},"query")," and it will likey return the list of users who might be related."))}u.isMDXComponent=!0},125:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||c;return t?a.a.createElement(m,s(s({ref:r},l),{},{components:t})):a.a.createElement(m,s({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=b;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<c;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);