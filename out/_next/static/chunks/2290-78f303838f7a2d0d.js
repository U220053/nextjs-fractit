(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2290],{62290:function(e,s,l){Promise.resolve().then(l.bind(l,29611)),Promise.resolve().then(l.bind(l,7784)),Promise.resolve().then(l.bind(l,78458)),Promise.resolve().then(l.bind(l,9770)),Promise.resolve().then(l.t.bind(l,81749,23)),Promise.resolve().then(l.t.bind(l,25250,23)),Promise.resolve().then(l.bind(l,19721))},7784:function(e,s,l){"use strict";l.r(s);var a=l(3827),t=l(8792),n=l(64090),i=l(45592),r=l(20703);s.default=()=>{let[e,s]=(0,n.useState)(!1),l=()=>{window.scrollY>=95?s(!0):s(!1)};return(0,n.useEffect)(()=>{window.addEventListener("scroll",l)},[]),(0,a.jsx)("header",{className:"header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu  ".concat(e?"stricky-fixed ":""),children:(0,a.jsxs)("div",{className:"container-fluid p0",children:[(0,a.jsxs)(t.default,{href:"/",className:"float-start dn-smd navbar_brand",style:{marginTop:"30px"},children:[(0,a.jsx)(r.default,{width:200,height:45,className:"logo1 img-fluid",src:"/assets/images/Logo_black-blue.png",alt:"header-logo2.png"}),(0,a.jsx)(r.default,{width:200,height:45,className:"logo2 img-fluid",src:"/assets/images/Logo_black-blue.png",alt:"header-logo2.png"})]}),(0,a.jsx)("nav",{children:(0,a.jsx)(i.Z,{})})]})})}},29611:function(e,s,l){"use strict";l.r(s);var a=l(3827),t=l(8792),n=l(43342),i=l(20703),r=l(47907);s.default=()=>{let e=(0,r.usePathname)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("ul",{className:"sidebar-menu",children:[(0,a.jsx)("li",{className:"sidebar_header header",children:(0,a.jsx)(t.default,{href:"/",children:(0,a.jsx)(i.default,{width:200,height:100,src:"/assets/images/Logo_black-blue.png",alt:"header-logo2.png"})})}),(0,a.jsxs)("li",{className:"title",children:[(0,a.jsx)("span",{children:"Main"}),(0,a.jsx)("ul",{children:(0,a.jsx)("li",{className:"treeview ".concat((0,n.J)("/account",e)?"active":""),children:(0,a.jsxs)(t.default,{href:"/account",children:[(0,a.jsx)("i",{className:"flaticon-layers"}),(0,a.jsx)("span",{children:" Dashboard"})]})})})]}),(0,a.jsxs)("li",{className:"title",children:[(0,a.jsx)("span",{children:"Coming Soon"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{className:"treeview ".concat((0,n.V)([{id:1,name:"General Elements",route:"/my-properties"},{id:2,name:"Advanced Elements",route:"/my-properties"},{id:3,name:"Editors",route:"/my-properties"}],e)?"active":""),children:(0,a.jsxs)("a",{"data-bs-toggle":"collapse",href:"",children:[(0,a.jsx)("i",{className:"flaticon-home"})," ",(0,a.jsx)("span",{children:"Investment"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)("a",{"data-bs-toggle":"collapse",href:"",children:[(0,a.jsx)("i",{className:"flaticon-chat"}),(0,a.jsx)("span",{children:"Reviews"})]})}),(0,a.jsx)("li",{className:"treeview ".concat((0,n.J)("/my-favourites",e)?"active":""),children:(0,a.jsxs)(t.default,{href:"/account",children:[(0,a.jsx)("i",{className:"flaticon-magnifying-glass"}),(0,a.jsx)("span",{children:" My Favorites"})]})}),(0,a.jsx)("li",{className:"treeview ".concat((0,n.J)("/my-saved-search",e)?"active":""),children:(0,a.jsxs)(t.default,{href:"",children:[(0,a.jsx)("i",{className:"flaticon-magnifying-glass"}),(0,a.jsx)("span",{children:" Transactions"})]})})]})]}),(0,a.jsxs)("li",{className:"title",children:[(0,a.jsx)("span",{children:"Manage Account"}),(0,a.jsx)("ul",{children:[{id:2,name:"My Profile",route:"/account",icon:"flaticon-user"},{id:3,name:"Logout",route:"/account",icon:"flaticon-logout"}].map(s=>(0,a.jsx)("li",{className:(0,n.J)(s.route,e)?"active":"",children:(0,a.jsxs)(t.default,{href:s.route,children:[(0,a.jsx)("i",{className:s.icon})," ",(0,a.jsx)("span",{children:s.name})]})},s.id))})]})]})})}},9770:function(e,s,l){"use strict";l.r(s);var a=l(3827),t=l(64090),n=l(20703),i=l(10176),r=l(8792);l(88062);var c=l(24623),o=l.n(c);let d={2:"xion1gtvfxt2nhy42hrqcz437vpeujr9dk5jf4re507qv203ud35xnwms0rwrf0"};s.default=()=>{var e;let{data:s}=(0,i.hT)(),{client:l}=(0,i.Hj)(),[c,h]=(0,t.useState)(!1),[u,m]=(0,t.useState)({}),[f,x]=(0,t.useState)("Claim Yield");(0,t.useEffect)(()=>{s&&""!==s.bech32Address?h(!0):h(!1),l&&(null==s?void 0:s.bech32Address)&&g()},[s,l]);let j=()=>{x("Coming Soon")},b=()=>{x("Sell")},g=async()=>{let e={};for(let a of o()){let t=d[a.id];if(t)try{let n={balance:{address:s.bech32Address}},i=await l.queryContractSmart(t,n),r=Math.floor(i.balance/1e6);e[a.id]=r}catch(s){console.error("Error querying balance for property ".concat(a.id,":"),s),e[a.id]="0"}else e[a.id]="0"}m(e)},p=null===o()||void 0===o()?void 0:null===(e=o().slice(0,6))||void 0===e?void 0:e.map(e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{scope:"row",children:(0,a.jsx)(r.default,{href:"/listing-details-v1/".concat(e.id),passHref:!0,children:(0,a.jsxs)("div",{className:"feat_property list favorite_page style2",children:[(0,a.jsx)("div",{className:"thumb",children:(0,a.jsx)(n.default,{width:150,height:220,className:"img-whp cover",src:null==e?void 0:e.img1,alt:e.title})}),(0,a.jsx)("div",{className:"details",children:(0,a.jsxs)("div",{className:"tc_content",children:[(0,a.jsx)("h4",{children:e.title}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"flaticon-placeholder"}),e.location]}),(0,a.jsxs)("a",{className:"fp_price ",href:"#",style:{color:"#3b82f6"},children:["Property Value: $",e.price]})]})})]})})}),(0,a.jsx)("td",{children:void 0!==u[e.id]?(0,a.jsx)("span",{children:u[e.id]}):(0,a.jsx)("span",{children:"Loading..."})}),(0,a.jsx)("td",{children:(0,a.jsxs)("ul",{className:"view_edit_delete_list mb0",children:[(0,a.jsx)("button",{style:{backgroundColor:"#3b82f6",color:"white",borderColor:"#3b82f6",cursor:"not-allowed"},className:"btn btn-block btn-thm w-100 hover-text",onMouseEnter:j,onMouseLeave:b,children:"Claim Yield"}),(0,a.jsx)("button",{style:{backgroundColor:"#3b82f6",color:"white",borderColor:"#3b82f6",cursor:"not-allowed"},className:"btn btn-block btn-thm w-100",children:"Sell"})]})})]},e.id));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("table",{className:"table",children:[(0,a.jsx)("thead",{className:"thead-light",style:{whiteSpace:"nowrap"},children:(0,a.jsx)("tr",{children:["Listing Title","My Holding","Action (Coming Soon)"].map((e,s)=>(0,a.jsx)("th",{scope:"col",children:e},s))})}),(0,a.jsx)("tbody",{children:p})]}),(0,a.jsx)(i.my,{})]})}},19721:function(e,s,l){"use strict";function a(e){let{reason:s,children:l}=e;return l}Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"BailoutToCSR",{enumerable:!0,get:function(){return a}}),l(99775)},43342:function(e,s,l){"use strict";function a(e,s){return!!e&&!!s&&e===s}function t(e,s){return!!e&&e.some(e=>e.route===s)}l.d(s,{J:function(){return a},V:function(){return t}})},88062:function(){}}]);