"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4981],{3443:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var s=n(4848),t=n(8453),a=n(1470),l=n(9365);const c={sidebar_position:3},i="\uc81c\uc548 \uac80\uc0c9\uc5b4 \uc870\ud68c\ud558\uae30",o={id:"\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API/get_catalog_search_suggestions.mdx",title:"\uc81c\uc548 \uac80\uc0c9\uc5b4 \uc870\ud68c\ud558\uae30",description:"\uc124\uba85",source:"@site/docs/\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API/get_catalog_search_suggestions.mdx.md",sourceDirName:"\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API",slug:"/\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API/get_catalog_search_suggestions.mdx",permalink:"/docs/\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API/get_catalog_search_suggestions.mdx",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API/get_catalog_search_suggestions.mdx.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud0a4\uc6cc\ub4dc\ub85c \ub178\ub798 \uac80\uc0c9\ud558\uae30",permalink:"/docs/\uae30\uc220 \uc2a4\ud0dd/API Docs/Apple Music Docs/Requests/Search-API/search_for_catalog_resources.mdx"},next:{title:"2-2. Responses",permalink:"/docs/category/2-2-responses"}},d={},u=[{value:"\uc124\uba85",id:"\uc124\uba85",level:3},{value:"Web Service Endpoint",id:"web-service-endpoint",level:3},{value:"Path Parameters",id:"path-parameters",level:3},{value:"Query Parameters",id:"query-parameters",level:3},{value:"Response Codes",id:"response-codes",level:3}];function h(e){const r={br:"br",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"\uc81c\uc548-\uac80\uc0c9\uc5b4-\uc870\ud68c\ud558\uae30",children:"\uc81c\uc548 \uac80\uc0c9\uc5b4 \uc870\ud68c\ud558\uae30"})}),"\n",(0,s.jsx)(r.h3,{id:"\uc124\uba85",children:"\uc124\uba85"}),"\n",(0,s.jsx)(r.p,{children:"\uc785\ub825\ub41c \uac80\uc0c9\uc5b4\ub97c \uae30\ubc18\uc73c\ub85c \uac80\uc0c9 \uc81c\uc548\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(r.h3,{id:"web-service-endpoint",children:"Web Service Endpoint"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"HTTP \uba54\uc18c\ub4dc"})," : ",(0,s.jsx)(r.code,{children:"GET"})]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"\uc5d4\ub4dc\ud3ec\uc778\ud2b8"})," :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-http",children:"https://api.music.apple.com/v1/catalog/{storefront}/search/suggestions\n"})}),"\n",(0,s.jsxs)(a.A,{groupId:"examples",children:[(0,s.jsx)(l.A,{value:"request",label:"\uc694\uccad \uc608\uc2dc",default:!0,children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-http",children:"GET https://api.music.apple.com/v1/catalog/us/search/suggestions?term=beach+bunny&kinds=terms\nAuthorization: Bearer {developer_token}\n"})})}),(0,s.jsx)(l.A,{value:"response",label:"\uc751\ub2f5 \ud615\uc2dd",children:(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n  "results": {\n      "suggestions": [\n          {\n              "kind": "terms",\n              "searchTerm": "beach bunny",\n              "displayTerm": "beach bunny"\n          },\n          {\n              "kind": "terms",\n              "searchTerm": "oxygen beach bunny",\n              "displayTerm": "oxygen beach bunny"\n          },\n          {\n              "kind": "terms",\n              "searchTerm": "cloud 9 beach bunny",\n              "displayTerm": "cloud 9 beach bunny"\n          }\n      ]\n  }\n}\n'})})})]}),"\n",(0,s.jsx)(r.h3,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\ub9e4\uac1c\ubcc0\uc218"}),(0,s.jsx)(r.th,{children:"\ud0c0\uc785"}),(0,s.jsx)(r.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,s.jsx)(r.th,{children:"\uc124\uba85"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"storefront"})})}),(0,s.jsx)(r.td,{children:"String"}),(0,s.jsx)(r.td,{children:"Required"}),(0,s.jsxs)(r.td,{children:["iTunes Store\uc758 \uad6d\uac00 \ub610\ub294 \uc9c0\uc5ed \ucf54\ub4dc\uc785\ub2c8\ub2e4. (ISO 3166 alpha-2 \ud615\uc2dd). \uac00\ub2a5\ud55c \uac12\uc740 Storefront \uac1d\uccb4\uc758 ",(0,s.jsx)(r.code,{children:"id"})," \uc18d\uc131\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"\ub9e4\uac1c\ubcc0\uc218"}),(0,s.jsx)(r.th,{children:"\ud0c0\uc785"}),(0,s.jsx)(r.th,{children:"\ud544\uc218 \uc5ec\ubd80"}),(0,s.jsx)(r.th,{children:"\uc124\uba85"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"kinds"})})}),(0,s.jsx)(r.td,{children:"String[]"}),(0,s.jsx)(r.td,{children:"Required"}),(0,s.jsxs)(r.td,{children:["\uacb0\uacfc\uc5d0 \ud3ec\ud568\ud560 \uc81c\uc548\uc758 \uc885\ub958\uc785\ub2c8\ub2e4. \uac00\ub2a5\ud55c \uac12: ",(0,s.jsx)(r.code,{children:"terms"}),", ",(0,s.jsx)(r.code,{children:"topResults"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"l"})})}),(0,s.jsx)(r.td,{children:"String"}),(0,s.jsx)(r.td,{children:"Optional"}),(0,s.jsxs)(r.td,{children:["\uc0ac\uc6a9\ud560 \uc5b8\uc5b4\ub97c \uc9c0\uc815\ud558\ub294 \uc5b8\uc5b4 \ud0dc\uadf8\uc785\ub2c8\ub2e4. \uae30\ubcf8\uac12\uc740 \ud574\ub2f9 ",(0,s.jsx)(r.code,{children:"Storefront"})," \uac1d\uccb4\uc758 ",(0,s.jsx)(r.code,{children:"defaultLanguageTag"}),"\uc785\ub2c8\ub2e4."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"limit"})})}),(0,s.jsx)(r.td,{children:"Integer"}),(0,s.jsx)(r.td,{children:"Optional"}),(0,s.jsx)(r.td,{children:"\ubc18\ud658\ud560 \uac1d\uccb4 \uc218\ub97c \uc81c\ud55c\ud569\ub2c8\ub2e4. \uae30\ubcf8\uac12: 5, \ucd5c\ub300\uac12: 10."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"term"})})}),(0,s.jsx)(r.td,{children:"String"}),(0,s.jsx)(r.td,{children:"Required"}),(0,s.jsx)(r.td,{children:"\uac80\uc0c9 \uc81c\uc548\uc5d0 \uc0ac\uc6a9\ud560 \ud14d\uc2a4\ud2b8 \uc785\ub825\uc785\ub2c8\ub2e4."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"types"})})}),(0,s.jsx)(r.td,{children:"String[]"}),(0,s.jsx)(r.td,{children:"Optional"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"topResults"}),"\uc5d0 \ud3ec\ud568\ud560 \ub9ac\uc18c\uc2a4 \uc720\ud615 \ubaa9\ub85d\uc785\ub2c8\ub2e4. \uac00\ub2a5\ud55c \uac12: ",(0,s.jsx)(r.code,{children:"activities"}),", ",(0,s.jsx)(r.code,{children:"albums"}),", ",(0,s.jsx)(r.code,{children:"artists"}),", \ub4f1."]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"response-codes",children:"Response Codes"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"200 OK"})}),":",(0,s.jsx)(r.br,{}),"\n","\uc694\uccad\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ucc98\ub9ac\ub418\uc5c8\uc73c\uba70, ",(0,s.jsx)(r.code,{children:"SearchSuggestionsResponse"})," \uac1d\uccb4\uac00 \ubc18\ud658\ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"401 Unauthorized"})}),":",(0,s.jsx)(r.br,{}),"\n","\uc62c\ubc14\ub974\uc9c0 \uc54a\uc740 Authorization \ud5e4\ub354\uac00 \uc0ac\uc6a9\ub418\uc5c8\uc74c\uc744 \ub098\ud0c0\ub0b4\ub294 \uc751\ub2f5\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.code,{children:"500 Internal Server Error"})}),":",(0,s.jsx)(r.br,{}),"\n","\uc11c\ubc84\uc5d0\uc11c \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc74c\uc744 \ub098\ud0c0\ub0b4\ub294 \uc751\ub2f5\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,r,n)=>{n.d(r,{A:()=>l});n(6540);var s=n(4164);const t={tabItem:"tabItem_Ymn6"};var a=n(4848);function l(e){let{children:r,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:n,children:r})}},1470:(e,r,n)=>{n.d(r,{A:()=>A});var s=n(6540),t=n(4164),a=n(3104),l=n(6347),c=n(205),i=n(7485),o=n(1682),d=n(679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:n}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:n,attributes:s,default:t}}=e;return{value:r,label:n,attributes:s,default:t}}))}(n);return function(e){const r=(0,o.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function p(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:n}=e;const t=(0,l.W6)(),a=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(t.location.search);r.set(a,e),t.replace({...t.location,search:r.toString()})}),[a,t])]}function j(e){const{defaultValue:r,queryString:n=!1,groupId:t}=e,a=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:a}))),[o,u]=x({queryString:n,groupId:t}),[j,b]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,a]=(0,d.Dv)(n);return[t,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:t}),m=(()=>{const e=o??j;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{m&&i(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function f(e){let{className:r,block:n,selectedValue:s,selectValue:l,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),d=e=>{const r=e.currentTarget,n=i.indexOf(r),t=c[n].value;t!==s&&(o(r),l(t))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},r),children:c.map((e=>{let{value:r,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,t.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":s===r}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=j(e);return(0,g.jsxs)("div",{className:(0,t.A)("tabs-container",m.tabList),children:[(0,g.jsx)(f,{...r,...e}),(0,g.jsx)(v,{...r,...e})]})}function A(e){const r=(0,b.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(r))}},8453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>c});var s=n(6540);const t={},a=s.createContext(t);function l(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);