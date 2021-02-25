(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var i=n(3),a=n(7),r=(n(0),n(125)),o={id:"authentication",title:"Authentication",sidebar_label:"Authentication"},s={unversionedId:"development/authentication",id:"development/authentication",isDocsHomePage:!1,title:"Authentication",description:"We mainly use json web token to verify our user. This is very efficient in handling multi-device(phone, tablet, pc) users.",source:"@site/docs/development/authentication.md",slug:"/development/authentication",permalink:"/docs/development/authentication",editUrl:"https://github.com/dooboolab/hackatalk-website/tree/master/docs/development/authentication.md",version:"current",sidebar_label:"Authentication",sidebar:"docs",previous:{title:"Design",permalink:"/docs/development/design"},next:{title:"Features",permalink:"/docs/development/features"}},l=[{value:"Resolvers",id:"resolvers",children:[{value:"Mutations",id:"mutations",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Protecting our queries",id:"protecting-our-queries",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"We mainly use ",Object(r.b)("a",{parentName:"p",href:"https://jwt.io"},"json web token")," to verify our user. This is very efficient in handling multi-device(phone, tablet, pc) users."),Object(r.b)("h2",{id:"resolvers"},"Resolvers"),Object(r.b)("h3",{id:"mutations"},"Mutations"),Object(r.b)("p",null,"Below are the mutations you can find in our development server."),Object(r.b)("h4",{id:"register-user"},"Register user"),Object(r.b)("p",null,"You can use the ",Object(r.b)("inlineCode",{parentName:"p"},"signUp")," mutation to register users to ",Object(r.b)("inlineCode",{parentName:"p"},"HackaTalk")," and get user info. Note that the token is not delivered directly just by the ",Object(r.b)("inlineCode",{parentName:"p"},"signUp")," mutation. Users need to ",Object(r.b)("inlineCode",{parentName:"p"},"sign in")," in order to achieve the ",Object(r.b)("inlineCode",{parentName:"p"},"jwt token"),"."),Object(r.b)("h4",{id:"sign-in-user"},"Sign in user"),Object(r.b)("p",null,"Users sign in into ",Object(r.b)("inlineCode",{parentName:"p"},"HackaTalk")," and this returns ",Object(r.b)("inlineCode",{parentName:"p"},"AuthPayload")," which we've defined. This returns a ",Object(r.b)("inlineCode",{parentName:"p"},"user")," and ",Object(r.b)("inlineCode",{parentName:"p"},"token")," field. Put the ",Object(r.b)("inlineCode",{parentName:"p"},"token")," into the ",Object(r.b)("inlineCode",{parentName:"p"},"header")," as below so that the server knows the user is signed in. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'{\n   "authorization: "{returned_user_token}"\n}\n')),Object(r.b)("p",null,"There are 2 types of ways to sign in."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Sign in with email"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"signInEmail")," mutation lets users of ",Object(r.b)("inlineCode",{parentName:"p"},"HackaTalk")," sign in with an ",Object(r.b)("inlineCode",{parentName:"p"},"email")," and ",Object(r.b)("inlineCode",{parentName:"p"},"password"),". However, if the ",Object(r.b)("inlineCode",{parentName:"p"},"user"),"'s email is not ",Object(r.b)("inlineCode",{parentName:"p"},"verified"),", the client's app will direct users to their verify email. In this case, you should ",Object(r.b)("a",{parentName:"p",href:"#verify-email"},"verify user's email"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Sign in with a social account"),Object(r.b)("p",{parentName:"li"},"We provide a social account sign-in. We are currently supporting below."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Facebook - ",Object(r.b)("inlineCode",{parentName:"li"},"signInWithFacebook")),Object(r.b)("li",{parentName:"ul"},"Apple - ",Object(r.b)("inlineCode",{parentName:"li"},"signInWithApple")),Object(r.b)("li",{parentName:"ul"},"Google - ",Object(r.b)("inlineCode",{parentName:"li"},"signInWithGoogle"))),Object(r.b)("blockquote",{parentName:"li"},Object(r.b)("p",{parentName:"blockquote"},"We are not providing any ",Object(r.b)("inlineCode",{parentName:"p"},"redirect")," url approach like in ",Object(r.b)("a",{parentName:"p",href:"https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow"},"facebook login flow"),". Social authentication providers redirect the url after user's authentication completes. If we use this approach in ",Object(r.b)("inlineCode",{parentName:"p"},"HackaTalk"),", we should have to open up a new browser for mobile applications. We don't like this workflow so instead , we will we require each client to receive a social provider's ",Object(r.b)("inlineCode",{parentName:"p"},"access_token")," by themselves and then send a request to our server with that ",Object(r.b)("inlineCode",{parentName:"p"},"access_token"),". Our ",Object(r.b)("inlineCode",{parentName:"p"},"schema")," is designed as below.")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"signInWithFacebook(accessToken: String!): AuthPayload!\nsignInWithApple(accessToken: String!): AuthPayload!\nsignInWithGoogle(accessToken: String!): AuthPayload!\n")),Object(r.b)("p",{parentName:"li"},"We used ",Object(r.b)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/sdk/auth-session"},"expo-auth-session")," for ",Object(r.b)("inlineCode",{parentName:"p"},"facebook")," and ",Object(r.b)("inlineCode",{parentName:"p"},"google")," sign in to support all platforms in one codebase. This has been provided by ",Object(r.b)("a",{parentName:"p",href:"https://expo.io"},"expo")," by ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/baconbrix/status/1256985914749759488"},"Evan Bacon in twitter"),". However, we still use ",Object(r.b)("a",{parentName:"p",href:"https://docs.expo.io/versions/latest/sdk/apple-authentication"},"expo-apple-authentication")," for ",Object(r.b)("inlineCode",{parentName:"p"},"apple")," because providing this on server-side makes hands dirty currently refered to ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ananay/apple-auth"},"apple-auth"),". Therefore we decide to provide Apple signin only in ",Object(r.b)("inlineCode",{parentName:"p"},"iOS")," (AUG-02-2020)."))),Object(r.b)("h4",{id:"verify-email"},"Verify email"),Object(r.b)("p",null,"   We are verifying user's email with the ",Object(r.b)("inlineCode",{parentName:"p"},"sendVerification")," mutation. By using this mutation query, we'll send our email to customer via ",Object(r.b)("a",{parentName:"p",href:"https://sendgrid.com"},"SendGrid")," api. We are not using ",Object(r.b)("inlineCode",{parentName:"p"},"gmail")," in this case since it has limitations."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"sendVerification(email: String!): Boolean!\n")),Object(r.b)("h4",{id:"resetting-password"},"Resetting password"),Object(r.b)("p",null,"   Users may not remember his or her password. In this case, we will provide a query to reset their password via the link sent to user's email address."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"findPassword(email: String!): Boolean!\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"We wish to omit multiple requests from the same client. Maybe max 3 times per minutes would be good first step.")),Object(r.b)("h4",{id:"change-password"},"Change password"),Object(r.b)("p",null,"   Users can change their password only if the user is signed in. This should be done somewhere in client's user profile page."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"changeEmailPassword(password: String!, newPassword: String!): Boolean!\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note that our queries are protected by ",Object(r.b)("a",{parentName:"p",href:"#graphql-shield"},"graphql-shield")," which we use as a middleware.")),Object(r.b)("h3",{id:"queries"},"Queries"),Object(r.b)("h4",{id:"query-users-own-profile"},"Query user's own profile"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-graphql"},"me: User!\n")),Object(r.b)("p",null,"   ",Object(r.b)("inlineCode",{parentName:"p"},"me")," query is used mostly for ",Object(r.b)("inlineCode",{parentName:"p"},"authentication")," like when the user is signed in after app finishes loading. If the correct user's ",Object(r.b)("a",{parentName:"p",href:"https://jwt.io"},"jwt token")," is not provided, it will return an error and the ",Object(r.b)("inlineCode",{parentName:"p"},"client's")," request will fail. This is how the client knows that the user is signed in. Therefore, this query does not need any extra input arguments."),Object(r.b)("h3",{id:"protecting-our-queries"},"Protecting our queries"),Object(r.b)("h4",{id:"graphql-shield"},"Graphql Shield"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://github.com/maticzav/graphql-shield"},"graphql-shield")," is wonderful permission management library which can be used in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/prisma-labs/graphql-middleware"},"graphql-middlewares"),"."),Object(r.b)("p",null,"This is somewhat similar to ",Object(r.b)("a",{parentName:"p",href:"https://firebase.google.com/docs/rules"},"firebase security rules")," in some sense that it protects queries logically. This is defined in ",Object(r.b)("a",{parentName:"p",href:"https://github.com/dooboolab/hackatalk/blob/master/server/src/permissions/index.ts"},"permissions/index.ts")," file in our ",Object(r.b)("inlineCode",{parentName:"p"},"server"),"."))}c.isMDXComponent=!0},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),c=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=c(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(n),d=i,h=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(h,s(s({ref:t},p),{},{components:n})):a.a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);