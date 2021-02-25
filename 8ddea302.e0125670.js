(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{125:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(t),u=o,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||a;return t?r.a.createElement(m,i(i({ref:n},l),{},{components:t})):r.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var o=t(3),r=t(7),a=(t(0),t(125)),c={id:"components",title:"Components",sidebar_label:"Components"},i={unversionedId:"client/components",id:"client/components",isDocsHomePage:!1,title:"Components",description:"Creating components",source:"@site/docs/client/components.md",slug:"/client/components",permalink:"/docs/client/components",editUrl:"https://github.com/dooboolab/hackatalk-website/tree/master/docs/client/components.md",version:"current",sidebar_label:"Components",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/client/installation"},next:{title:"Integrate with backend",permalink:"/docs/client/integrate-with-backend"}},p=[{value:"Creating components",id:"creating-components",children:[{value:"Using dooboo-cli",id:"using-dooboo-cli",children:[]}]},{value:"Types",id:"types",children:[{value:"Navigation",id:"navigation",children:[]},{value:"Screen",id:"screen",children:[]},{value:"Shared",id:"shared",children:[]}]}],l={toc:p};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"creating-components"},"Creating components"),Object(a.b)("p",null,"To create additional components to ",Object(a.b)("inlineCode",{parentName:"p"},"HackaTalk"),", you can easily run ",Object(a.b)("inlineCode",{parentName:"p"},"dooboo screen")," command. To do that you need to first install ",Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/dooboo-cli"},"dooboo-cli"),"."),Object(a.b)("h3",{id:"using-dooboo-cli"},"Using ",Object(a.b)("a",{parentName:"h3",href:"https://www.npmjs.com/package/dooboo-cli"},"dooboo-cli")),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/dooboo-cli"},"dooboo-cli")," has been updated to ",Object(a.b)("inlineCode",{parentName:"p"},"version 3")," in Dec 2019. You can read about it in the ",Object(a.b)("a",{parentName:"p",href:"https://medium.com/dooboolab/announcing-dooboo-cli-v3-5c9fceeb2ac4"},"medium post"),"."),Object(a.b)("p",null,Object(a.b)("img",{parentName:"p",src:"https://miro.medium.com/max/1260/1*Lc60i9R2zi7-xR0VZhESDg.png",alt:"dooboo-ui"})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can see how easily you can create sample screens and tests files.")),Object(a.b)("h2",{id:"types"},"Types"),Object(a.b)("p",null,"We are organizing our main components into three different characteristcs which are ",Object(a.b)("inlineCode",{parentName:"p"},"navigation"),", ",Object(a.b)("inlineCode",{parentName:"p"},"screen"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"shared"),"."),Object(a.b)("h3",{id:"navigation"},"Navigation"),Object(a.b)("p",null,"The navigation components are group of screen components."),Object(a.b)("h3",{id:"screen"},"Screen"),Object(a.b)("p",null,"The screen components are screen unit component which means that it fill up the device size."),Object(a.b)("h3",{id:"shared"},"Shared"),Object(a.b)("p",null,"The shared components are mostly reusable components that can be used everywhere. They are components like ",Object(a.b)("inlineCode",{parentName:"p"},"Button"),", ",Object(a.b)("inlineCode",{parentName:"p"},"EditText"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Calendar")," and so on."))}s.isMDXComponent=!0}}]);