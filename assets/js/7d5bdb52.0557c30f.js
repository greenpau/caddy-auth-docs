"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7010],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9526:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},s="Single Sign-On with SAML",i={unversionedId:"apps/sso_saml",id:"apps/sso_saml",title:"Single Sign-On with SAML",description:"AWS SSO",source:"@site/docs/apps/sso_saml.md",sourceDirName:"apps",slug:"/apps/sso_saml",permalink:"/docs/apps/sso_saml",draft:!1,editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/apps/sso_saml.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/apps/intro"}},l={},p=[{value:"AWS SSO",id:"aws-sso",level:2},{value:"Configuration",id:"configuration",level:3}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"single-sign-on-with-saml"},"Single Sign-On with SAML"),(0,r.kt)("h2",{id:"aws-sso"},"AWS SSO"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_federated-users.html"},"Identity Federation with SAML 2.0"),"\nallows creating trust between authentication portal as an Identity Provider (IdP)\nand AWS as the service provider."),(0,r.kt)("p",null,"The authentication portal generates a SAML authentication response that includes assertions\nthat identify the user and include attributes about the user. You can also configure the portal\nto include a SAML assertion attribute called ",(0,r.kt)("inlineCode",{parentName:"p"},"SessionDuration")," that specifies how long\nthe console session is valid. You can also configure the portal to pass attributes as\nsession tags. The portal sends this response via the client browser to AWS SAML\nendpoint."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_saml_assertions.html"},"Configuring SAML assertions for the authentication response"),"\ndescribes how the authentication portal crafts the XML request to AWS SAML endpoint, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"https://region-code.signin.aws.amazon.com/saml"),"."),(0,r.kt)("p",null,"For example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Attributes/Role"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<Attribute Name="https://aws.amazon.com/SAML/Attributes/Role">\n  <AttributeValue>arn:aws:iam::account-number:role/role-name1,arn:aws:iam::account-number:saml-provider/provider-name</AttributeValue>\n  <AttributeValue>arn:aws:iam::account-number:role/role-name2,arn:aws:iam::account-number:saml-provider/provider-name</AttributeValue>\n  <AttributeValue>arn:aws:iam::account-number:role/role-name3,arn:aws:iam::account-number:saml-provider/provider-name</AttributeValue>\n</Attribute>\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_enable-console-saml.html"},"Enabling SAML 2.0 federated users to access the AWS Management Console"),"\noutlines the steps necessary to enable SSO on AWS side."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_saml.html"},"Creating a role for SAML 2.0 federation"),"\ndescribes how to create an IAM role for use with SAML federation."),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The steps necessary to enable AWS SSO in the plugin follow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Generate a self-signed ceritficate (for ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata.xml"),") and private key (for creating assertions)"),(0,r.kt)("li",{parentName:"ol"},"Add Caddyfile directives enabling AWS SSO"),(0,r.kt)("li",{parentName:"ol"},"Add Caddyfile user transforms with AWS SSO roles"),(0,r.kt)("li",{parentName:"ol"},"Download metadata file")),(0,r.kt)("p",null,"First, generate self-signed certificate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'openssl req -x509 -nodes -sha256 -days 1095 -newkey rsa:4096 \\\n  -keyout authp_saml.key -out authp_saml.crt \\\n  -subj "/C=US/ST=New York/L=New York/O=AuthPortal/OU=AuthPortalSAMLIdP/CN=AuthPortalSAMLUser"\n')),(0,r.kt)("p",null,"Second, create ",(0,r.kt)("inlineCode",{parentName:"p"},"Caddyfile")," config. Please see an example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/authp/authp.github.io/blob/main/assets/conf/apps/sso/aws/Caddyfile"},"here"),"."),(0,r.kt)("p",null,"The name of the SSO provider is significant. Access SSO console via ",(0,r.kt)("inlineCode",{parentName:"p"},"/apps/sso/<provider_name>")," endpoint, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/apps/sso/aws"),".\nIf you want to fetch ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.xml"),", then the URL is ",(0,r.kt)("inlineCode",{parentName:"p"},"/apps/sso/aws/metadata.xml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sso provider aws {\n  entity_id caddy-authp-idp\n  driver aws\n  private key {$HOME}/tmp/authp/awssso/authp_saml.key\n  cert {$HOME} ${HOME}/tmp/authp/awssso/authp_saml.crt\n  location https://auth.myfiosgateway.com:8443/apps/sso/aws\n}\n")),(0,r.kt)("p",null,"TBC."))}c.isMDXComponent=!0}}]);