(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8211],{84456:function(e,s,i){Promise.resolve().then(i.bind(i,95707)),Promise.resolve().then(i.bind(i,70850)),Promise.resolve().then(i.bind(i,7784)),Promise.resolve().then(i.bind(i,78458)),Promise.resolve().then(i.bind(i,51919)),Promise.resolve().then(i.bind(i,56203)),Promise.resolve().then(i.bind(i,79590)),Promise.resolve().then(i.bind(i,22096)),Promise.resolve().then(i.bind(i,65432)),Promise.resolve().then(i.t.bind(i,81749,23)),Promise.resolve().then(i.t.bind(i,25250,23)),Promise.resolve().then(i.bind(i,19721))},27177:function(e,s,i){"use strict";var a=i(3827),l=i(64090),t=i(25274),n=i(37780);s.Z=()=>{let[e,s]=(0,l.useState)({value:{min:1e4,max:2e4}}),i=(0,t.I0)();return(0,l.useEffect)(()=>{i((0,n.zB)({min:e.value.min,max:e.value.max}))},[i,e]),(0,a.jsxs)("div",{className:"nft__filter-price tp-range-slider tp-range-slider-dark mb-20",children:[(0,a.jsxs)("div",{className:"nft__filter-price-inner d-flex align-items-center justify-content-between",children:[(0,a.jsx)("div",{className:"nft__filter-price-box",children:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[(0,a.jsx)("span",{children:"$ "}),(0,a.jsx)("span",{children:e.value.min})]})}),(0,a.jsx)("div",{className:"nft__filter-price-box",children:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[(0,a.jsx)("span",{children:"$ "}),(0,a.jsx)("span",{children:e.value.max})]})})]}),(0,a.jsx)("div",{className:"slider-styled inside-slider",id:"nft-slider"})]})}},7784:function(e,s,i){"use strict";i.r(s);var a=i(3827),l=i(8792),t=i(64090),n=i(45592),r=i(20703);s.default=()=>{let[e,s]=(0,t.useState)(!1),i=()=>{window.scrollY>=95?s(!0):s(!1)};return(0,t.useEffect)(()=>{window.addEventListener("scroll",i)},[]),(0,a.jsx)("header",{className:"header-nav menu_style_home_one style2 navbar-scrolltofixed stricky main-menu  ".concat(e?"stricky-fixed ":""),children:(0,a.jsxs)("div",{className:"container-fluid p0",children:[(0,a.jsxs)(l.default,{href:"/",className:"float-start dn-smd navbar_brand",style:{marginTop:"30px"},children:[(0,a.jsx)(r.default,{width:200,height:45,className:"logo1 img-fluid",src:"/assets/images/Logo_black-blue.png",alt:"header-logo2.png"}),(0,a.jsx)(r.default,{width:200,height:45,className:"logo2 img-fluid",src:"/assets/images/Logo_black-blue.png",alt:"header-logo2.png"})]}),(0,a.jsx)("nav",{children:(0,a.jsx)(n.Z,{})})]})})}},51919:function(e,s,i){"use strict";i.r(s);var a=i(3827),l=i(20703),t=i(24623),n=i.n(t),r=i(138);s.default=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z,{dots:!0,arrows:!1,fade:!0,slidesToShow:1,slidesToScroll:1,autoplay:!1,speed:1e3,arrows:!1,children:n().slice(0,5).map(e=>(0,a.jsx)("div",{className:"item",children:(0,a.jsx)("div",{className:"feat_property home7",children:(0,a.jsxs)("div",{className:"thumb",children:[(0,a.jsx)(l.default,{width:300,height:220,className:"img-whp w-100 h-100 cover",src:e.img,alt:"properties identity"}),(0,a.jsxs)("div",{className:"thmb_cntnt",children:[(0,a.jsx)("ul",{className:"tag mb0",children:e.saleTag.map((e,s)=>(0,a.jsx)("li",{className:"list-inline-item",children:(0,a.jsx)("a",{href:"#",children:e})},s))}),(0,a.jsxs)("a",{className:"fp_price",href:"#",children:["$",e.price,(0,a.jsx)("small",{children:"/mo"})]}),(0,a.jsx)("h4",{className:"posr color-white",children:e.title})]})]})})},e.id))})})},56203:function(e,s,i){"use strict";i.r(s);var a=i(3827),l=i(64090),t=i(25274),n=i(12993);s.default=()=>{let{length:e}=(0,t.v9)(e=>e.properties),{statusType:s,featured:i}=(0,t.v9)(e=>e.filter),[r,d]=(0,l.useState)(s),[c,o]=(0,l.useState)(i),m=(0,t.I0)();return(0,l.useEffect)(()=>{m((0,n.PA)(r))},[m,r]),(0,l.useEffect)(()=>{m((0,n.S4)(c))},[m,c]),(0,l.useEffect)(()=>{""===s&&d(""),""===i&&o("")},[s,d,i,o]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"col-sm-12 col-md-4 col-lg-4 col-xl-5",children:(0,a.jsx)("div",{className:"left_area tac-xsd",children:(0,a.jsxs)("p",{children:[(0,a.jsxs)("span",{className:0===e?"text-danger":void 0,children:[e," "]}),0!==e?"Search results":(0,a.jsx)("span",{className:"text-danger",children:"Not found results"})]})})}),(0,a.jsx)("div",{className:"col-sm-12 col-md-8 col-lg-8 col-xl-7",children:(0,a.jsx)("div",{className:"right_area text-end tac-xsd",children:(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{className:"list-inline-item",children:[(0,a.jsx)("span",{className:"stts",children:"Status:"}),(0,a.jsxs)("select",{className:"selectpicker show-tick",onChange:e=>d(e.target.value),value:r,children:[(0,a.jsx)("option",{value:"",children:"All Status"}),(0,a.jsx)("option",{value:"old",children:"Old"}),(0,a.jsx)("option",{value:"recent",children:"Recent"})]})]}),(0,a.jsxs)("li",{className:"list-inline-item",children:[(0,a.jsx)("span",{className:"shrtby",children:"Sort by:"}),(0,a.jsxs)("select",{className:"selectpicker show-tick",onChange:e=>o(e.target.value),value:c,children:[(0,a.jsx)("option",{value:"",children:"Featured All"}),(0,a.jsx)("option",{value:"sale",children:"Sale"}),(0,a.jsx)("option",{value:"rent",children:"Rent"})]})]})]})})})]})}},79590:function(e,s,i){"use strict";i.r(s);var a=i(3827),l=i(25274),t=i(12993);s.default=()=>{let{isGridOrList:e}=(0,l.v9)(e=>e.filter),s=(0,l.I0)();return(0,a.jsxs)("ul",{className:"mb-3",children:[(0,a.jsx)("li",{className:"list-inline-item ".concat(e?"":"active"),onClick:()=>s((0,t.Ih)(!1)),children:(0,a.jsx)("a",{children:(0,a.jsx)("span",{className:"fa fa-th-large"})})}),(0,a.jsx)("li",{className:"list-inline-item ".concat(e?"active":""),onClick:()=>s((0,t.Ih)(!0)),children:(0,a.jsx)("a",{children:(0,a.jsx)("span",{className:"fa fa-th-list"})})})]})}},22096:function(e,s,i){"use strict";i.r(s);var a=i(3827),l=i(8792),t=i(64090),n=i(25274),r=i(37780),d=i(24623),c=i.n(d),o=i(20703);s.default=()=>{var e,s,i,d,m,u,h,f,x,p,v,j,g;let{keyword:N,location:y,status:b,propertyType:_,price:w,bathrooms:S,bedrooms:C,garages:L,yearBuilt:P,area:k,amenities:T}=(0,n.v9)(e=>e.properties),{statusType:E,featured:A,isGridOrList:B}=(0,n.v9)(e=>e.filter),I=(0,n.I0)(),F=null===c()||void 0===c()?void 0:null===(g=c().slice(0,10))||void 0===g?void 0:null===(j=g.filter(e=>e.title.toLowerCase().includes(null==N?void 0:N.toLowerCase())))||void 0===j?void 0:null===(v=j.filter(e=>e.location.toLowerCase().includes(y.toLowerCase())))||void 0===v?void 0:null===(p=v.filter(e=>e.type.toLowerCase().includes(b.toLowerCase())))||void 0===p?void 0:null===(x=p.filter(e=>e.type.toLowerCase().includes(_.toLowerCase())))||void 0===x?void 0:null===(f=x.filter(e=>e.price<(null==w?void 0:w.max)&&e.price>(null==w?void 0:w.min)))||void 0===f?void 0:null===(h=f.filter(e=>""===S||e.itemDetails[1].number==S))||void 0===h?void 0:null===(u=h.filter(e=>""===C||e.itemDetails[0].number==C))||void 0===u?void 0:null===(m=u.filter(e=>{var s;return""===L||(null===(s=e.garages)||void 0===s?void 0:s.toLowerCase().includes(L.toLowerCase()))}))||void 0===m?void 0:null===(d=m.filter(e=>""===P||(null==e?void 0:e.built)==P))||void 0===d?void 0:null===(i=d.filter(e=>0===k.min||0===k.max||""===k.min||""===k.max||parseInt(e.itemDetails[2].number)>k.min&&parseInt(e.itemDetails[2].number)<k.max))||void 0===i?void 0:null===(s=i.filter(e=>0===T.length||T.find(s=>s.toLowerCase().includes(e.amenities.toLowerCase()))))||void 0===s?void 0:null===(e=s.sort((e,s)=>"recent"===E?e.created_at+s.created_at:"old"===E?e.created_at-s.created_at:""===E?e.created_at+s.created_at:void 0))||void 0===e?void 0:e.filter(e=>""===A||e.featured===A).map(e=>(0,a.jsx)("div",{className:"".concat(B?"col-12 feature-list":"col-md-6 col-lg-6"," "),children:(0,a.jsxs)("div",{className:"feat_property home7 style4 ".concat(B?"d-flex align-items-center":void 0),children:[(0,a.jsxs)("div",{className:"thumb",children:[(0,a.jsx)(o.default,{width:342,height:220,className:"img-whp w-100 h-100 cover",src:e.img,alt:"fp1.jpg"}),(0,a.jsxs)("div",{className:"thmb_cntnt",children:[(0,a.jsxs)("ul",{className:"tag mb0",children:[(0,a.jsx)("li",{className:"list-inline-item",children:(0,a.jsx)("a",{href:"#",children:"Featured"})}),(0,a.jsx)("li",{className:"list-inline-item",children:(0,a.jsx)("a",{href:"#",className:"text-capitalize",children:e.featured})})]}),(0,a.jsxs)("ul",{className:"icon mb0",children:[(0,a.jsx)("li",{className:"list-inline-item",children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("span",{className:"flaticon-transfer-1"})})}),(0,a.jsx)("li",{className:"list-inline-item",children:(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("span",{className:"flaticon-heart"})})})]}),(0,a.jsxs)(l.default,{href:"/listing-details-v1/".concat(e.id),className:"fp_price",children:["$",e.price,(0,a.jsx)("small",{children:"/mo"})]})]})]}),(0,a.jsxs)("div",{className:"details",children:[(0,a.jsxs)("div",{className:"tc_content",children:[(0,a.jsx)("p",{className:"text-thm",children:e.type}),(0,a.jsx)("h4",{children:(0,a.jsx)(l.default,{href:"/listing-details-v1/".concat(e.id),children:e.title})}),(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"flaticon-placeholder"}),e.location]}),(0,a.jsx)("ul",{className:"prop_details mb0",children:e.itemDetails.map((e,s)=>(0,a.jsx)("li",{className:"list-inline-item",children:(0,a.jsxs)("a",{href:"#",children:[e.name,": ",e.number]})},s))})]}),(0,a.jsxs)("div",{className:"fp_footer",children:[(0,a.jsxs)("ul",{className:"fp_meta float-start mb0",children:[(0,a.jsx)("li",{className:"list-inline-item",children:(0,a.jsx)(l.default,{href:"/agent-v2",children:(0,a.jsx)(o.default,{width:40,height:40,src:e.posterAvatar,alt:"pposter1.png"})})}),(0,a.jsx)("li",{className:"list-inline-item",children:(0,a.jsx)(l.default,{href:"/agent-v2",children:e.posterName})})]}),(0,a.jsx)("div",{className:"fp_pdate float-end",children:e.postedYear})]})]})]})},e.id));return(0,t.useEffect)(()=>{I((0,r.Td)(F.length))},[I,F]),(0,a.jsx)(a.Fragment,{children:F})}},65432:function(e,s,i){"use strict";i.r(s);var a=i(3827),l=i(138);s.default=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(l.Z,{dots:!1,arrows:!0,slidesToShow:1,slidesToScroll:1,speed:2e3,arrows:!0,children:[(0,a.jsx)("div",{className:"slide slide-one image-5"}),(0,a.jsx)("div",{className:"slide slide-one image-4"}),(0,a.jsx)("div",{className:"slide slide-one image-1"})]})})},12993:function(e,s,i){"use strict";i.d(s,{Ih:function(){return n},PA:function(){return l},S4:function(){return t}});let a=(0,i(33387).oM)({name:"filter",initialState:{statusType:"",featured:"",isGridOrList:!1},reducers:{addStatusType:(e,s)=>{e.statusType=s.payload},addFeatured:(e,s)=>{e.featured=s.payload},toggleGridAndList:(e,s)=>{e.isGridOrList=s.payload}}}),{addStatusType:l,addFeatured:t,toggleGridAndList:n}=a.actions;s.ZP=a.reducer},37780:function(e,s,i){"use strict";i.d(s,{B4:function(){return v},CS:function(){return m},Dx:function(){return n},F6:function(){return d},O8:function(){return c},Td:function(){return p},UQ:function(){return h},ZE:function(){return t},c9:function(){return l},dZ:function(){return o},du:function(){return f},hi:function(){return x},ub:function(){return u},zB:function(){return r}});let a=(0,i(33387).oM)({name:"properties",initialState:{keyword:"",propertyType:"",location:"",price:{min:0,max:0},amenities:[],status:"",bathrooms:"",bedrooms:"",garages:"",yearBuilt:"",area:{min:"",max:""},length:0},reducers:{addKeyword:(e,s)=>{e.keyword=s.payload},addPropertyType:(e,s)=>{e.propertyType=s.payload},addLocation:(e,s)=>{e.location=s.payload},addPrice:(e,s)=>{e.price.min=s.payload.min,e.price.max=s.payload.max},addAmenities:(e,s)=>{e.amenities.some(e=>e===s.payload)?e.amenities=e.amenities.filter(e=>e!==s.payload):e.amenities.push(s.payload)},resetAmenities:(e,s)=>{e.amenities=[]},addStatus:(e,s)=>{e.status=s.payload},addBathrooms:(e,s)=>{e.bathrooms=s.payload},addBedrooms:(e,s)=>{e.bathrooms=s.payload},addGarages:(e,s)=>{e.garages=s.payload},addYearBuilt:(e,s)=>{e.yearBuilt=s.payload},addAreaMin:(e,s)=>{e.area.min=s.payload},addAreaMax:(e,s)=>{e.area.max=s.payload},addLength:(e,s)=>{e.length=s.payload}}}),{addKeyword:l,addPropertyType:t,addLocation:n,addPrice:r,addAmenities:d,addStatus:c,addBathrooms:o,addBedrooms:m,addGarages:u,addYearBuilt:h,addAreaMin:f,addAreaMax:x,addLength:p,resetAmenities:v}=a.actions;s.ZP=a.reducer},19721:function(e,s,i){"use strict";function a(e){let{reason:s,children:i}=e;return i}Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"BailoutToCSR",{enumerable:!0,get:function(){return a}}),i(99775)}},function(e){e.O(0,[4350,8218,1676,9228,8933,5455,9805,4908,4134,138,5880,9940,5709,2971,8069,1744],function(){return e(e.s=84456)}),_N_E=e.O()}]);