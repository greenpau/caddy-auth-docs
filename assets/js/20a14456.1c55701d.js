"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3738],{2533:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(4848),o=i(8453);const r={},s="Overview",l={id:"authenticate/oauth/oauth2",title:"Overview",description:"OAuth 2.0 Flow",source:"@site/docs/authenticate/oauth/10-oauth2.md",sourceDirName:"authenticate/oauth",slug:"/authenticate/oauth/oauth2",permalink:"/docs/authenticate/oauth/oauth2",draft:!1,unlisted:!1,editUrl:"https://github.com/authcrunch/authcrunch.github.io/edit/main/docs/authenticate/oauth/10-oauth2.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Jumpcloud SAML Integration",permalink:"/docs/authenticate/saml/jumpcloud"},next:{title:"Generic Provider",permalink:"/docs/authenticate/oauth/backend-oauth2-0000-generic"}},c={},d=[{value:"OAuth 2.0 Flow",id:"oauth-20-flow",level:2},{value:"Adding Role Claims",id:"adding-role-claims",level:2},{value:"Icon Name, Text, and Color",id:"icon-name-text-and-color",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.h2,{id:"oauth-20-flow",children:"OAuth 2.0 Flow"}),"\n",(0,t.jsx)(n.p,{children:'Generally, a developer must create an "Application" with and identity provider.\ne.g. Google, Okta, Azure, etc., and obtain OAuth 2.0 "Client ID" and\n"Client Secret".'}),"\n",(0,t.jsx)(n.p,{children:'The authentication flow begins with obtaining "Authorization Code" from an\nidentity provider.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"What does the portal send to Okta?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Client ID"}),"\n",(0,t.jsx)(n.li,{children:"Redirect URI"}),"\n",(0,t.jsx)(n.li,{children:"Response Type"}),"\n",(0,t.jsx)(n.li,{children:"Scope"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"What does the portal receive from Okta?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Authorization Code"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'Once, the portal has the "Authorization Code", it could get "Access Token"\nto access the user\'s data at the identity provider.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"What does the portal send to Okta?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Authorization Code"}),"\n",(0,t.jsx)(n.li,{children:"Client ID"}),"\n",(0,t.jsx)(n.li,{children:"Client Secret"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"What does Okta respond with?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Access Token"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'What could the portal use "Access Token" for?'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Make API calls to obtain user information"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The OpenID Connect (OIDC) adds login and profile information about the person\nwho is logged in. The differences between standard OAuth2.0 flow are:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the initial request, a specific scope of ",(0,t.jsx)(n.code,{children:"openid"})," is used"]}),"\n",(0,t.jsx)(n.li,{children:'In the final exchange the Client receives both an "Access Token" and an "ID Token" (JWT Token).'}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"References:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://infosec.mozilla.org/guidelines/iam/openid_connect.html#oidc-in-a-nutshell",children:"Mozilla - OIDC in a nutshell"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"adding-role-claims",children:"Adding Role Claims"}),"\n",(0,t.jsxs)(n.p,{children:["By default, all users authenticated with the plugin get ",(0,t.jsx)(n.code,{children:"authp/guest"}),"\nrole, unless the following applies."]}),"\n",(0,t.jsxs)(n.p,{children:["The Caddyfile ",(0,t.jsx)(n.code,{children:"transform user"})," directive allows adding roles based on the\ninformation provided by OAuth 2.0 provider."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/docs/authenticate/user-transforms",children:"User Transforms"})," section for explanation about\nthe ",(0,t.jsx)(n.code,{children:"transform user"})," directive."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, the following transform matches any user authenticated\nvia ",(0,t.jsx)(n.code,{children:"google"})," OAuth provider. Upon the match, the plugin adds ",(0,t.jsx)(n.code,{children:"authp/user"}),"\nrole to the token issued by the it."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"      transform user {\n        match origin google\n        action add role authp/user\n      }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The next transform requires the Google authenticated user to have\nemail address of ",(0,t.jsx)(n.code,{children:"jsmith@contoso.com"})," to get ",(0,t.jsx)(n.code,{children:"authp/admin"})," role."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"      transform user {\n        match origin google\n        match email jsmith@contoso.com\n        action add role authp/admin\n      }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"icon-name-text-and-color",children:"Icon Name, Text, and Color"}),"\n",(0,t.jsx)(n.p,{children:"The following directive sets name, text, and color of the icon\nfor this identity provider:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'oauth identity provider generic {\n  icon "Gitlab" "lab la-gitlab la-2x" "white" "#fc6d26" priority 100\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"lab la-gitlab la-2x"})," refers to the name of the ",(0,t.jsx)(n.a,{href:"https://icons8.com/line-awesome",children:"Line Awesome"})," icon."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"white"})," refers to the icon color."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"#fc6d26"})," refers to the background color."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"priority 100"})," specified the order in which the icon will be shown."]}),"\n",(0,t.jsx)(n.p,{children:"Other examples:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'icon "Discord" "lab la-discord la-2x" "white" "#5865f2" priority 100\nicon "Discord" "lab la-discord la-2x" "white" "#7289da" priority 100\nicon "Discord" "lab la-discord la-2x" "white" "#404eed" priority 100\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);