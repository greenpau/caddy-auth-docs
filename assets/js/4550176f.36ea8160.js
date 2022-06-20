"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[594],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),m=a,d=h["".concat(u,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7557:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={},u="Developer Notes",s={unversionedId:"authenticate/dev",id:"authenticate/dev",title:"Developer Notes",description:"Authentication Challenges",source:"@site/docs/authenticate/95-dev.md",sourceDirName:"authenticate",slug:"/authenticate/dev",permalink:"/docs/authenticate/dev",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/95-dev.md",tags:[],version:"current",sidebarPosition:95,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Miscellaneous",permalink:"/docs/authenticate/misc"},next:{title:"Angular Framework Integration",permalink:"/docs/authenticate/webapps/angular"}},c={},p=[{value:"Authentication Challenges",id:"authentication-challenges",level:2},{value:"Sandbox Views",id:"sandbox-views",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"developer-notes"},"Developer Notes"),(0,i.kt)("h2",{id:"authentication-challenges"},"Authentication Challenges"),(0,i.kt)("p",null,'Conceptually, when a user provides username or email during an authentication\nsession to authentication portal, the user provides "identity". Optionally, the\nuser could provide the "realm" to further assist in identifying the user. For\nexample, user ',(0,i.kt)("inlineCode",{parentName:"p"},"foo")," may exists in multiple realms, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"bar.baz")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"baz.bar"),"."),(0,i.kt)("p",null,'Once the portal has the "identity" (',(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"realm"),") of the user, the\nportal determines the challenges the user must pass to get authentication."),(0,i.kt)("p",null,'The "challenge" or "checkpoint" could be one of these:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Authenticating with a password (",(0,i.kt)("inlineCode",{parentName:"li"},"password"),")"),(0,i.kt)("li",{parentName:"ul"},"Authenticating with application authentication or hardware token (",(0,i.kt)("inlineCode",{parentName:"li"},"mfa"),")"),(0,i.kt)("li",{parentName:"ul"},"Accepting terms of use or consenting to conditions (",(0,i.kt)("inlineCode",{parentName:"li"},"consent"),")")),(0,i.kt)("p",null,'The checkpoints represent authentication scheme for a user and is being stored\nin local authentication database. Additionally, a checkpoint can be applied by\nusing "User Transforms".'),(0,i.kt)("p",null,"The order of the checkpoints in the user transforms will determine the order\nin which the user will receive the challenges."),(0,i.kt)("p",null,'The portal constructs a list of one or more challenges from the above list.\nThen, redirects the user to "sandbox" where the user solves the challenges\nto authenticate.'),(0,i.kt)("p",null,"If the user passes these challenges, the user gets authenticated and granted\naccess."),(0,i.kt)("p",null,"References:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NewCheckpoint")," function in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/greenpau/aaasf/blob/main/pkg/user/user.go"},(0,i.kt)("inlineCode",{parentName:"a"},"aaasf/pkg/user/user.go"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Transform")," function in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/greenpau/aaasf/blob/main/pkg/authn/transformer/transformer.go"},"`aaasf/pkg/authn/transformer/transformer.go"))),(0,i.kt)("h2",{id:"sandbox-views"},"Sandbox Views"),(0,i.kt)("p",null,"When a user enters the authentication sandbox, the user gets presented one\nof the following views:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error"),": A user encountered an error during one of security challenges"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"terminate"),": A user have failed a number of security challenges and is required\nto restart the authentication process"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mfa_app_auth"),": App Authenticator authentication screen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mfa_app_register"),": App Authenticator registration screen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mfa_mixed_auth"),": TODO"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mfa_mixed_register"),": TODO"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mfa_u2f_auth"),": TODO"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mfa_u2f_register"),": TODO"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password_auth"),": TODO"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"password_recovery"),": TODO")))}m.isMDXComponent=!0}}]);