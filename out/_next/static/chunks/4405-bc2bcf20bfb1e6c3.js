"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4405],{77827:function(e,a,s){s.r(a);var l=s(3827),t=s(64090);s(20703);var i=s(10176),r=s(88522),n=s(18722),o=s(86123);s(88062);var c=s(24623),d=s.n(c);let m="ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64";a.default=e=>{let{id:a}=e,{data:s}=(0,i.hT)(),{client:c,logout:h}=(0,i.Hj)(),[u,x]=(0,i.dd)(),[p,b]=(0,t.useState)(!1),[j,v]=(0,t.useState)(!1),[f,g]=(0,t.useState)(void 0),[N,y]=(0,t.useState)("1"),[w,k]=(0,t.useState)("0"),[_,C]=(0,t.useState)(void 0),[S,T]=(0,t.useState)(""),[E,F]=(0,t.useState)("");(0,t.useEffect)(()=>{s&&""!=s.bech32Address?(b(!0),A()):(b(!1),k("0")),z()},[s]);let A=async()=>{if(c&&s)try{let e=await c.getBalance(s.bech32Address,m),a=Number(e.amount)/1e6;k(a.toFixed(2))}catch(e){console.error("Error fetching USDC balance:",e)}},z=async()=>{try{console.log("nitu");let e=await c.queryContractSmart("xion1gtvfxt2nhy42hrqcz437vpeujr9dk5jf4re507qv203ud35xnwms0rwrf0",{token_info:{}}),a=Math.floor(e.total_supply/1e6);C(a)}catch(e){console.error("Query error:",e)}},I=async()=>{if(S||""===N){o.Am.error("Please enter a valid amount before minting.");return}v(!0);try{if(!c||!s)throw Error("Wallet not connected");let e=1e6*parseInt(1),a=await c.execute(s.bech32Address,"xion13krpd7lm8vfac6nnzyfjyrk7035gzlxvczspumnj0jgvd9ltwa2s8lxlkj",{deposit:{}},{amount:[{amount:"0",denom:"uxion"}],gas:"500000"},"",(0,n.coins)(e,m));g(a),o.Am.success("Token minted successfully!"),F(a.transactionHash),await A(),await z()}catch(e){console.error("Minting error:",e),o.Am.error("Minting failed")}finally{v(!1)}};return(null===d()||void 0===d()?void 0:d().find(e=>e.id==a))||d()[0],(0,l.jsxs)("div",{className:"container mx-auto p-4 burnt-bg text-black",children:[(0,l.jsx)("div",{style:{marginBottom:"10px"},children:2==a?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:"Token Symbol: FJWHM"})," ",(0,l.jsx)("div",{children:"Token Price: 1 USDC "}),(0,l.jsxs)("div",{children:["Token Sold:"," ",(0,l.jsx)("span",{className:"font-bold",children:void 0!==_?_.toString():"0"}),"/365,000"]})]}):1==a?(0,l.jsx)(l.Fragment,{children:"Token Purchased: 235/235"}):(0,l.jsx)(l.Fragment,{children:"Coming Soon"})}),2==a?(0,l.jsx)(l.Fragment,{}):(0,l.jsxs)(l.Fragment,{children:[" ",(0,l.jsx)("header",{className:"flex justify-between items-center mb-8",children:(0,l.jsxs)("div",{className:"mb-4",style:{margin:"10px"},children:[(0,l.jsx)("input",{type:"number",className:"form-control",placeholder:"Enter amount (1-20)",value:N,onChange:e=>{let a=e.target.value;""===a||Number(a)>=1&&20>=Number(a)&&Number.isInteger(Number(a))?(y(a),T("")):T("Please enter a whole number between 1 and 20.")},min:"1",max:"20",style:{margin:"10px"}}),S&&(0,l.jsx)("div",{style:{color:"red",marginTop:"5px"},children:S})]})})]}),(0,l.jsx)("main",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"mb-6"}),(0,l.jsx)("div",{className:"mb-6",children:(0,l.jsx)("div",{className:"flex justify-between mt-2 ",children:(0,l.jsxs)("span",{style:{color:"#3b82f6"},className:"font-bold",children:["Wallet Balance: ",w," USDC"]})})}),p?2==a?(0,l.jsx)(r.z,{style:{backgroundColor:"#3b82f6",color:"white",borderColor:"#3b82f6"},className:"btn btn-block btn-thm w-100",onClick:I,disabled:j||!!S||""===N,children:E?"Successful":j?"MINTING...":"MINT 1 TOKEN"}):(0,l.jsx)(r.z,{style:{backgroundColor:"#3b82f6",color:"white",cursor:"not-allowed"},className:"btn btn-block btn-thm w-100",disabled:!0,children:"COMING SOON"}):(0,l.jsx)(r.z,{style:{backgroundColor:"#3b82f6",color:"white",borderColor:"#3b82f6"},className:"btn btn-block btn-thm w-100",onClick:()=>x(!0),children:"CONNECT WALLET"}),E&&(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)("p",{children:"Transaction Successful!"}),(0,l.jsxs)("p",{children:["Transaction Hash:"," ",(0,l.jsx)("a",{href:"https://explorer.burnt.com/xion-testnet-1/tx/".concat(E),target:"_blank",rel:"noopener noreferrer",className:"break-words",children:E})]})]})]})}),(0,l.jsx)(i.my,{onClose:()=>{x(!1)}}),(0,l.jsx)(o.Ix,{position:"bottom-right"})]})}},95707:function(e,a,s){s.r(a);var l=s(3827);a.default=()=>(0,l.jsx)("form",{className:"footer_mailchimp_form",onClick:e=>{e.preventDefault()},children:(0,l.jsxs)("div",{className:"d-flex align-items-center",children:[(0,l.jsx)("div",{className:"col-auto",children:(0,l.jsx)("input",{type:"email",className:"form-control mb-2",id:"inlineFormInput",placeholder:"Your email"})}),(0,l.jsx)("div",{className:"col-auto ms-2",children:(0,l.jsx)("button",{type:"submit",className:"btn btn-primary mb-2",children:(0,l.jsx)("i",{className:"fa fa-angle-right"})})})]})})},7784:function(e,a,s){s.r(a);var l=s(3827),t=s(8792),i=s(64090),r=s(45592),n=s(20703);a.default=()=>{let[e,a]=(0,i.useState)(!1),s=()=>{window.scrollY>=95?a(!0):a(!1)};return(0,i.useEffect)(()=>{window.addEventListener("scroll",s)},[]),(0,l.jsx)("header",{className:"header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu  ".concat(e?"stricky-fixed ":""),children:(0,l.jsxs)("div",{className:"container-fluid p0",children:[(0,l.jsxs)(t.default,{href:"/",className:"float-start dn-smd navbar_brand",style:{marginTop:"30px"},children:[(0,l.jsx)(n.default,{width:200,height:45,className:"logo1 img-fluid",src:"/assets/images/Logo_black-blue.png",alt:"header-logo2.png"}),(0,l.jsx)(n.default,{width:200,height:45,className:"logo2 img-fluid",src:"/assets/images/Logo_black-blue.png",alt:"header-logo2.png"})]}),(0,l.jsx)("nav",{children:(0,l.jsx)(r.Z,{})})]})})}},65754:function(e,a,s){s.r(a);var l=s(3827),t=s(64090),i=s(24623),r=s.n(i);a.default=e=>{var a,s,i,n,o;let{id:c}=e,[d,m]=(0,t.useState)(!0),h=(null===r()||void 0===r()?void 0:r().find(e=>e.id==c))||r()[0],u=(null==h?void 0:null===(a=h.description)||void 0===a?void 0:a.length)>=3;return(0,l.jsx)(l.Fragment,{children:u?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("p",{className:"mb25",children:(null===(s=h.description[0])||void 0===s?void 0:s.text)||"No description available"}),(0,l.jsx)("p",{className:d?"gpara second_para white_goverlay mt10 mb10":"",children:(null===(i=h.description[1])||void 0===i?void 0:i.text)||"No additional description available"}),(0,l.jsx)("div",{className:"collapse",id:"collapseExample",children:(0,l.jsxs)("div",{className:"card card-body",children:[(0,l.jsx)("p",{className:"mt10 mb10",children:(null===(n=h.description[2])||void 0===n?void 0:n.text)||"No description available"}),h.description[3]&&(0,l.jsx)("p",{className:"mt10 mb10",children:null===(o=h.description[3])||void 0===o?void 0:o.text})]})}),(0,l.jsx)("p",{className:"overlay_close",children:(0,l.jsxs)("a",{className:"text-thm fz14","data-bs-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample",onClick:()=>m(!d),children:["Show More ",(0,l.jsx)("span",{className:"flaticon-download-1 fz12"})]})})]}):(0,l.jsx)("p",{children:"No description data available"})})}},76107:function(e,a,s){s.r(a);var l=s(3827),t=s(20703),i=s(64090),r=s(26353);a.default=()=>{let[e,a]=(0,i.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{channel:"youtube",autoplay:!0,isOpen:e,videoId:"oqNZOOWF8qM",onClose:()=>a(!1)}),(0,l.jsxs)("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist",children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{className:"nav-link active","data-bs-toggle":"tab",href:"#description",role:"tab",children:"Property video"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{className:"nav-link","data-bs-toggle":"tab",href:"#listing",role:"tab",children:"Virtual Tour"})})]}),(0,l.jsxs)("div",{className:"tab-content",id:"myTabContent2",children:[(0,l.jsx)("div",{className:"tab-pane fade show active",id:"description",role:"tabpanel",children:(0,l.jsx)("div",{className:"property_video",children:(0,l.jsxs)("div",{className:"thumb",children:[(0,l.jsx)(t.default,{width:692,height:390,className:"pro_img  w100 w-100 cover",src:"/assets/images/background/7.jpg",alt:"7.jpg"}),(0,l.jsx)("div",{className:"overlay_icon",children:(0,l.jsx)("div",{onClick:()=>a(!0),role:"button",className:"video_popup_btn red popup-youtube",children:(0,l.jsx)("span",{className:"flaticon-play"})})})]})})}),(0,l.jsx)("div",{className:"tab-pane fade row pl15 pl0-1199 pr15 pr0-1199",id:"listing",role:"tabpanel",children:(0,l.jsx)("div",{className:"property_video",children:(0,l.jsxs)("div",{className:"thumb",children:[(0,l.jsx)(t.default,{width:692,height:390,className:"pro_img  w100 w-100 cover",src:"/assets/images/background/7.jpg",alt:"7.jpg"}),(0,l.jsx)("div",{className:"overlay_icon",children:(0,l.jsx)("div",{onClick:()=>a(!0),role:"button",className:"video_popup_btn red popup-youtube",children:(0,l.jsx)("span",{className:"flaticon-play"})})})]})})})]})]})}},51919:function(e,a,s){s.r(a);var l=s(3827),t=s(20703),i=s(24623),r=s.n(i),n=s(138);a.default=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(n.Z,{dots:!0,arrows:!1,fade:!0,slidesToShow:1,slidesToScroll:1,autoplay:!1,speed:1e3,arrows:!1,children:r().slice(0,5).map(e=>(0,l.jsx)("div",{className:"item",children:(0,l.jsx)("div",{className:"feat_property home7",children:(0,l.jsxs)("div",{className:"thumb",children:[(0,l.jsx)(t.default,{width:300,height:220,className:"img-whp w-100 h-100 cover",src:e.img,alt:"properties identity"}),(0,l.jsxs)("div",{className:"thmb_cntnt",children:[(0,l.jsx)("ul",{className:"tag mb0",children:e.saleTag.map((e,a)=>(0,l.jsx)("li",{className:"list-inline-item",children:(0,l.jsx)("a",{href:"#",children:e})},a))}),(0,l.jsxs)("a",{className:"fp_price",href:"#",children:["$",e.price,(0,l.jsx)("small",{children:"/mo"})]}),(0,l.jsx)("h4",{className:"posr color-white",children:e.title})]})]})})},e.id))})})}}]);