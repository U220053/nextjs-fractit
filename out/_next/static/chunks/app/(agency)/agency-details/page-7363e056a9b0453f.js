(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9408,5406],{29474:function(e,n,r){Promise.resolve().then(r.bind(r,51292)),Promise.resolve().then(r.bind(r,77827)),Promise.resolve().then(r.bind(r,95707)),Promise.resolve().then(r.bind(r,7784)),Promise.resolve().then(r.bind(r,78458)),Promise.resolve().then(r.bind(r,51919)),Promise.resolve().then(r.t.bind(r,81749,23)),Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.bind(r,19721))},77827:function(e,n,r){"use strict";r.r(n);var t=r(3827),s=r(64090);r(20703);var o=r(10176),l=r(88522),a=r(18722),i=r(86123);r(88062);var c=r(24623),d=r.n(c);let m="ibc/57097251ED81A232CE3C9D899E7C8096D6D87EF84BA203E12E424AA4C9B57A64";n.default=e=>{let{id:n}=e,{data:r}=(0,o.hT)(),{client:c,logout:u}=(0,o.Hj)(),[b,h]=(0,o.dd)(),[x,f]=(0,s.useState)(!1),[j,v]=(0,s.useState)(!1),[g,N]=(0,s.useState)(void 0),[p,y]=(0,s.useState)("1"),[k,C]=(0,s.useState)("0"),[w,S]=(0,s.useState)(void 0),[E,P]=(0,s.useState)(""),[T,A]=(0,s.useState)("");(0,s.useEffect)(()=>{r&&""!=r.bech32Address?(f(!0),_()):(f(!1),C("0")),O()},[r]);let _=async()=>{if(c&&r)try{let e=await c.getBalance(r.bech32Address,m),n=Number(e.amount)/1e6;C(n.toFixed(2))}catch(e){console.error("Error fetching USDC balance:",e)}},O=async()=>{try{console.log("nitu");let e=await c.queryContractSmart("xion1gtvfxt2nhy42hrqcz437vpeujr9dk5jf4re507qv203ud35xnwms0rwrf0",{token_info:{}}),n=Math.floor(e.total_supply/1e6);S(n)}catch(e){console.error("Query error:",e)}},F=async()=>{if(E||""===p){i.Am.error("Please enter a valid amount before minting.");return}v(!0);try{if(!c||!r)throw Error("Wallet not connected");let e=1e6*parseInt(1),n=await c.execute(r.bech32Address,"xion13krpd7lm8vfac6nnzyfjyrk7035gzlxvczspumnj0jgvd9ltwa2s8lxlkj",{deposit:{}},{amount:[{amount:"0",denom:"uxion"}],gas:"500000"},"",(0,a.coins)(e,m));N(n),i.Am.success("Token minted successfully!"),A(n.transactionHash),await _(),await O()}catch(e){console.error("Minting error:",e),i.Am.error("Minting failed")}finally{v(!1)}};return(null===d()||void 0===d()?void 0:d().find(e=>e.id==n))||d()[0],(0,t.jsxs)("div",{className:"container mx-auto p-4 burnt-bg text-black",children:[(0,t.jsx)("div",{style:{marginBottom:"10px"},children:2==n?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{children:"Token Symbol: FJWHM"})," ",(0,t.jsx)("div",{children:"Token Price: 1 USDC "}),(0,t.jsxs)("div",{children:["Token Sold:"," ",(0,t.jsx)("span",{className:"font-bold",children:void 0!==w?w.toString():"0"}),"/365,000"]})]}):1==n?(0,t.jsx)(t.Fragment,{children:"Token Purchased: 235/235"}):(0,t.jsx)(t.Fragment,{children:"Coming Soon"})}),2==n?(0,t.jsx)(t.Fragment,{}):(0,t.jsxs)(t.Fragment,{children:[" ",(0,t.jsx)("header",{className:"flex justify-between items-center mb-8",children:(0,t.jsxs)("div",{className:"mb-4",style:{margin:"10px"},children:[(0,t.jsx)("input",{type:"number",className:"form-control",placeholder:"Enter amount (1-20)",value:p,onChange:e=>{let n=e.target.value;""===n||Number(n)>=1&&20>=Number(n)&&Number.isInteger(Number(n))?(y(n),P("")):P("Please enter a whole number between 1 and 20.")},min:"1",max:"20",style:{margin:"10px"}}),E&&(0,t.jsx)("div",{style:{color:"red",marginTop:"5px"},children:E})]})})]}),(0,t.jsx)("main",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-6"}),(0,t.jsx)("div",{className:"mb-6",children:(0,t.jsx)("div",{className:"flex justify-between mt-2 ",children:(0,t.jsxs)("span",{style:{color:"#3b82f6"},className:"font-bold",children:["Wallet Balance: ",k," USDC"]})})}),x?2==n?(0,t.jsx)(l.z,{style:{backgroundColor:"#3b82f6",color:"white",borderColor:"#3b82f6"},className:"btn btn-block btn-thm w-100",onClick:F,disabled:j||!!E||""===p,children:T?"Successful":j?"MINTING...":"MINT 1 TOKEN"}):(0,t.jsx)(l.z,{style:{backgroundColor:"#3b82f6",color:"white",cursor:"not-allowed"},className:"btn btn-block btn-thm w-100",disabled:!0,children:"COMING SOON"}):(0,t.jsx)(l.z,{style:{backgroundColor:"#3b82f6",color:"white",borderColor:"#3b82f6"},className:"btn btn-block btn-thm w-100",onClick:()=>h(!0),children:"CONNECT WALLET"}),T&&(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)("p",{children:"Transaction Successful!"}),(0,t.jsxs)("p",{children:["Transaction Hash:"," ",(0,t.jsx)("a",{href:"https://explorer.burnt.com/xion-testnet-1/tx/".concat(T),target:"_blank",rel:"noopener noreferrer",className:"break-words",children:T})]})]})]})}),(0,t.jsx)(o.my,{onClose:()=>{h(!1)}}),(0,t.jsx)(i.Ix,{position:"bottom-right"})]})}},19721:function(e,n,r){"use strict";function t(e){let{reason:n,children:r}=e;return r}Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"BailoutToCSR",{enumerable:!0,get:function(){return t}}),r(99775)}},function(e){e.O(0,[4350,8218,9228,8933,5455,9805,9933,4134,138,5880,3604,8664,5350,2971,8069,1744],function(){return e(e.s=29474)}),_N_E=e.O()}]);