(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{111:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return i})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(125)),o={id:"pgcli",title:"pgcli"},i={unversionedId:"postgres/pgcli",id:"postgres/pgcli",isDocsHomePage:!1,title:"pgcli",description:"Pgcli is a command line interface for Postgres with auto-completion and syntax highlighting.",source:"@site/docs/postgres/pgcli.md",slug:"/postgres/pgcli",permalink:"/docs/postgres/pgcli",editUrl:"https://github.com/dooboolab/hackatalk-website/tree/master/docs/postgres/pgcli.md",version:"current",sidebar:"docs",previous:{title:"Shell",permalink:"/docs/postgres/shell"}},c=[{value:"Install",id:"install",children:[]},{value:"Terminal Term Usage",id:"terminal-term-usage",children:[]}],b={toc:c};function p(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Pgcli is a command line interface for Postgres with auto-completion and syntax highlighting."),Object(l.b)("h3",{id:"install"},"Install"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$ pip install pgcli\n")),Object(l.b)("h3",{id:"terminal-term-usage"},"Terminal Term Usage"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Options"),Object(l.b)("th",{parentName:"tr",align:null},"Explanation"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-h, --host TEXT"),Object(l.b)("td",{parentName:"tr",align:null},"Host address of the postgres database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-p, --port INTEGER"),Object(l.b)("td",{parentName:"tr",align:null},"Port number at which the postgres instance is listening")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-U, --username TEXT"),Object(l.b)("td",{parentName:"tr",align:null},"Username to connect to the postgres database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-u, --user TEXT"),Object(l.b)("td",{parentName:"tr",align:null},"Username to connect to the postgres database")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-W, --password"),Object(l.b)("td",{parentName:"tr",align:null},"Force password prompt")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-w, --no-password"),Object(l.b)("td",{parentName:"tr",align:null},"Never prompt for password")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--single-connection"),Object(l.b)("td",{parentName:"tr",align:null},"Do not use a separate connection for completions")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-v, --version"),Object(l.b)("td",{parentName:"tr",align:null},"Version of pgcli")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-d, --dbname TEXT"),Object(l.b)("td",{parentName:"tr",align:null},"database name to connect to")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--pgclirc PATH"),Object(l.b)("td",{parentName:"tr",align:null},"Location of pgclirc file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-D, --dsn TEXT"),Object(l.b)("td",{parentName:"tr",align:null},"Use DSN configured into the ","[alias_dsn]"," section of pgclirc file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--list-dsn"),Object(l.b)("td",{parentName:"tr",align:null},"list of DSN configured into the ","[alias_dsn]"," section of pgclirc file")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--row-limit INTEGER"),Object(l.b)("td",{parentName:"tr",align:null},"Set threshold for row limit prompt. Use 0 to disable prompt")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--less-chatty"),Object(l.b)("td",{parentName:"tr",align:null},"Skip intro on startup and goodbye on exit")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--prompt TEXT"),Object(l.b)("td",{parentName:"tr",align:null},'Prompt format (Default: "\\u@\\h:\\d> ")')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--prompt-dsn TEXT"),Object(l.b)("td",{parentName:"tr",align:null},'Prompt format for connections using DSN aliases (Default: "\\u@\\h:\\d> ")')),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"-l, --list"),Object(l.b)("td",{parentName:"tr",align:null},"list available databases, then exit")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--auto-vertical-output"),Object(l.b)("td",{parentName:"tr",align:null},"Automatically switch to vertical output mode if the result is wider than the terminal width")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--warn / --no-warn"),Object(l.b)("td",{parentName:"tr",align:null},"Warn before running a destructive query")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"--help"),Object(l.b)("td",{parentName:"tr",align:null},"Show this message and exit")))))}p.isMDXComponent=!0},125:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return u}));var r=n(0),a=n.n(r);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var b=a.a.createContext({}),p=function(t){var e=a.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return a.a.createElement(b.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},m=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,b=c(t,["components","mdxType","originalType","parentName"]),s=p(n),m=r,u=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return n?a.a.createElement(u,i(i({ref:e},b),{},{components:n})):a.a.createElement(u,i({ref:e},b))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);