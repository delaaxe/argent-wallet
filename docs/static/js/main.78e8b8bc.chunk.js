(this["webpackJsonpargent-wallet"]=this["webpackJsonpargent-wallet"]||[]).push([[0],{230:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"securityWindow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_wallet","type":"address"}],"name":"init","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_wallet","type":"address"},{"name":"_guardian","type":"address"}],"name":"revokeGuardian","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_wallet","type":"address"},{"name":"_guardian","type":"address"}],"name":"cancelGuardianRevokation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_wallet","type":"address"}],"name":"getNonce","outputs":[{"name":"nonce","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_wallet","type":"address"},{"name":"_guardian","type":"address"}],"name":"confirmGuardianRevokation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_wallet","type":"address"}],"name":"guardianCount","outputs":[{"name":"_count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_wallet","type":"address"},{"name":"_module","type":"address"}],"name":"addModule","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_wallet","type":"address"},{"name":"_guardian","type":"address"}],"name":"confirmGuardianAddition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"securityPeriod","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"recoverToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_wallet","type":"address"},{"name":"_guardian","type":"address"}],"name":"cancelGuardianAddition","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_wallet","type":"address"},{"name":"_data","type":"bytes"},{"name":"_nonce","type":"uint256"},{"name":"_signatures","type":"bytes"},{"name":"_gasPrice","type":"uint256"},{"name":"_gasLimit","type":"uint256"}],"name":"execute","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_wallet","type":"address"},{"name":"_guardian","type":"address"}],"name":"addGuardian","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"relayer","outputs":[{"name":"nonce","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_wallet","type":"address"},{"name":"_guardian","type":"address"}],"name":"isGuardian","outputs":[{"name":"_isGuardian","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"guardianStorage","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_wallet","type":"address"}],"name":"getGuardians","outputs":[{"name":"_guardians","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_registry","type":"address"},{"name":"_guardianStorage","type":"address"},{"name":"_securityPeriod","type":"uint256"},{"name":"_securityWindow","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"wallet","type":"address"},{"indexed":true,"name":"guardian","type":"address"},{"indexed":false,"name":"executeAfter","type":"uint256"}],"name":"GuardianAdditionRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"wallet","type":"address"},{"indexed":true,"name":"guardian","type":"address"},{"indexed":false,"name":"executeAfter","type":"uint256"}],"name":"GuardianRevokationRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"wallet","type":"address"},{"indexed":true,"name":"guardian","type":"address"}],"name":"GuardianAdditionCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"wallet","type":"address"},{"indexed":true,"name":"guardian","type":"address"}],"name":"GuardianRevokationCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"wallet","type":"address"},{"indexed":true,"name":"guardian","type":"address"}],"name":"GuardianAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"wallet","type":"address"},{"indexed":true,"name":"guardian","type":"address"}],"name":"GuardianRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"wallet","type":"address"},{"indexed":true,"name":"success","type":"bool"},{"indexed":false,"name":"signedHash","type":"bytes32"}],"name":"TransactionExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"name","type":"bytes32"}],"name":"ModuleCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"wallet","type":"address"}],"name":"ModuleInitialised","type":"event"}]')},247:function(e,t,a){},261:function(e,t){},284:function(e,t){},286:function(e,t){},300:function(e,t){},301:function(e,t){},364:function(e,t){},366:function(e,t){},398:function(e,t){},403:function(e,t){},405:function(e,t){},412:function(e,t){},425:function(e,t){},443:function(e,t){},454:function(e,t){},457:function(e,t){},518:function(e,t,a){},519:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(67),r=a.n(i),u=a(66),c=(a(247),a(18)),o=a(19),d=a.n(o),p=a(40),l=a(45),y=a(546),b=a(551),f=a(133),m=a.n(f),j=a(230),h=new m.a(m.a.givenProvider||"https://mainnet.infura.io/v3/7d0d81d0919f4f05b9ab6634be01ee73"),x=new h.eth.Contract(j,"0xFF5A7299ff6f0fbAad9b38906b77d08c0FBdc9A7"),g=function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.eth.getBalance(t);case 2:return a=e.sent,e.abrupt("return",h.utils.fromWei(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.methods.guardianCount(t).call({from:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n,s,i,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams({apiKey:"freekey"}),n="".concat("https://api.ethplorer.io","/getAddressInfo/").concat(t,"?").concat(a),e.next=4,fetch(n);case 4:return s=e.sent,e.next=7,s.json();case 7:if(null===(i=e.sent)||void 0===i?void 0:i.tokens){e.next=10;break}throw new Error("Cannot find ERC20 token balances");case 10:return r=i.tokens.map((function(e){var t=e.balance;return[e.tokenInfo.symbol,h.utils.fromWei(t.toString())]})),console.log("erc20",r),e.abrupt("return",Object.fromEntries(r));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=a(7),k=function(){var e=Object(c.h)().address,t=Object(n.useState)(),a=Object(l.a)(t,2),s=a[0],i=a[1],r=Object(n.useState)(),u=Object(l.a)(r,2),o=u[0],f=u[1],m=Object(n.useState)(),j=Object(l.a)(m,2),h=j[0],x=j[1],k=Object(n.useState)(),_=Object(l.a)(k,2),M=_[0],S=_[1];return Object(n.useEffect)((function(){Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.t0=x,t.next=6,O(e);case 6:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 10:t.prev=10,t.t2=t.catch(2),S(t.t2.message||t.t2.toString());case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()}),[e]),Object(n.useEffect)((function(){Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.t0=i,t.next=6,g(e);case 6:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 10:t.prev=10,t.t2=t.catch(2),S(t.t2.message||t.t2.toString());case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()}),[e]),Object(n.useEffect)((function(){Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.t0=f,t.next=6,v(e);case 6:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 10:t.prev=10,t.t2=t.catch(2),S(t.t2.message||t.t2.toString());case 13:case"end":return t.stop()}}),t,null,[[2,10]])})))()}),[e]),M?Object(w.jsx)(b.a,{severity:"error",style:{marginTop:30},children:M}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h4",{children:"Wallet balance"}),Object(w.jsx)("div",{children:void 0===s?Object(w.jsx)(y.a,{}):Object(w.jsxs)(w.Fragment,{children:["ETH ",s]})}),Object(w.jsx)("h4",{children:"Number of guardians"}),Object(w.jsx)("div",{children:void 0===o?Object(w.jsx)(y.a,{}):o}),Object(w.jsx)("h4",{children:"ERC20 tokens"}),void 0===h?Object(w.jsx)(y.a,{}):Object.entries(h).map((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(w.jsxs)("div",{children:[a," ",n]},a)}))]})},_=a(69),M=a(547),S=a(44),C=a(548),G=a(549),R=a(550),A=a(552),E=a(235),I=a.n(E),N=Object(M.a)((function(e){return{grow:{flexGrow:1},title:Object(_.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(_.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(S.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(S.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(_.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(_.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(_.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),P=function(){var e=Object(c.f)(),t=N(),a=Object(c.g)().pathname.slice(1),n=s.a.useState(a),i=Object(l.a)(n,2),r=i[0],u=i[1];return Object(w.jsx)("div",{className:t.grow,children:Object(w.jsx)(C.a,{position:"static",children:Object(w.jsxs)(G.a,{children:[Object(w.jsx)(R.a,{className:t.title,variant:"h6",noWrap:!0,children:"Argent wallet"}),Object(w.jsxs)("div",{className:t.search,children:[Object(w.jsx)("div",{className:t.searchIcon,children:Object(w.jsx)(I.a,{})}),Object(w.jsx)("form",{onSubmit:function(t){t.stopPropagation(),t.preventDefault(),e.push("/".concat(r))},children:Object(w.jsx)(A.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},value:r,onChange:function(e){var t=e.target;return u(t.value)}})})]}),Object(w.jsx)("div",{className:t.grow})]})})})},F=(a(518),function(){return Object(w.jsx)(u.a,{children:Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(P,{}),Object(w.jsx)("header",{className:"App-header",children:Object(w.jsxs)(c.c,{children:[Object(w.jsx)(c.a,{exact:!0,path:"/",children:Object(w.jsx)("p",{children:"Please search for a wallet"})}),Object(w.jsx)(c.a,{path:"/:address",children:Object(w.jsx)(k,{})})]})})]})})}),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,554)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),i(e),r(e)}))};r.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(u.a,{children:Object(w.jsx)(F,{})})}),document.getElementById("root")),L()}},[[519,1,2]]]);
//# sourceMappingURL=main.78e8b8bc.chunk.js.map