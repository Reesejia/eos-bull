(function(t){function e(e){for(var n,s,c=e[0],o=e[1],u=e[2],l=0,p=[];l<c.length;l++)s=c[l],r[s]&&p.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={mobile:0},r={mobile:0},i=[];function c(t){return o.p+"js/"+({about:"about",business:"business",businessHistory:"businessHistory",homepage:"homepage",market:"market",more:"more",orders:"orders"}[t]||t)+"."+{about:"788f808a",business:"5a3a7296",businessHistory:"6472d2d9",homepage:"df8d3cb8",market:"b4f6e3db",more:"3d2144f4",orders:"44bd3688"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={business:1,businessHistory:1,homepage:1,market:1,more:1,orders:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise(function(e,a){for(var n="css/"+({about:"about",business:"business",businessHistory:"businessHistory",homepage:"homepage",market:"market",more:"more",orders:"orders"}[t]||t)+"."+{about:"31d6cfe0",business:"fddb23ea",businessHistory:"0c08da38",homepage:"d18f8fca",market:"0dab36a1",more:"f6a6f00f",orders:"0daa3b20"}[t]+".css",r=o.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===r))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===n||l===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.request=n,delete s[t],f.parentNode.removeChild(f),a(i)},f.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(f)}).then(function(){s[t]=0}));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=i);var u,l=document.getElementsByTagName("head")[0],p=document.createElement("script");p.charset="utf-8",p.timeout=120,o.nc&&p.setAttribute("nonce",o.nc),p.src=c(t),u=function(e){p.onerror=p.onload=null,clearTimeout(f);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+s+")");i.type=n,i.request=s,a[1](i)}r[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:p})},12e4);p.onerror=p.onload=u,l.appendChild(p)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var f=l;i.push([1,"chunk-vendors"]),a()})({"0066":function(t,e,a){},1:function(t,e,a){t.exports=a("6b2c")},"119c":function(t,e,a){"use strict";var n=a("259e"),s=a.n(n);s.a},"163a":function(t,e,a){"use strict";var n=a("0066"),s=a.n(n);s.a},"1baf":function(t,e,a){t.exports=a.p+"img/ic_nav_quotes_press.d9e054bf.svg"},2224:function(t,e,a){},"259e":function(t,e,a){},2948:function(t,e,a){"use strict";var n=a("d4ec"),s=a("bee2"),r=a("9ab4"),i=a("daf9"),c=function(){function t(){Object(n["a"])(this,t),this.currency="BTC",this.account="admin",this.marketId=1}return Object(s["a"])(t,[{key:"setCurrency",value:function(t){this.currency=t}}]),t}();r["b"]([i["e"]],c.prototype,"currency",void 0),r["b"]([i["b"].bound],c.prototype,"setCurrency",null),e["a"]=new c},2996:function(t,e,a){t.exports=a.p+"img/logo_eosmex.14878857.svg"},"2b83":function(t,e,a){},"2fc0":function(t,e,a){t.exports=a.p+"img/ic_topping.130261e6.svg"},"40f4":function(t,e,a){t.exports=a.p+"img/ic_correct.0ded1522.svg"},"45d3":function(t,e,a){t.exports=a.p+"img/ic_find.b559396c.svg"},4850:function(t,e,a){t.exports=a.p+"img/ic_nav_order_normal.4f8d9c31.svg"},"4cf6":function(t,e,a){"use strict";var n=a("2224"),s=a.n(n);s.a},"541d":function(t,e,a){t.exports=a.p+"img/ic_nav_quotes_normal.079d3f39.svg"},5422:function(t,e,a){"use strict";var n=a("c092"),s=a.n(n);s.a},"5c6b":function(t,e,a){t.exports=a.p+"img/ic_nav_assets_normal.c26c2067.svg"},"6b2c":function(t,e,a){"use strict";a.r(e);a("7f7f"),a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=(a("4cf6"),a("2877")),c={},o=Object(i["a"])(c,s,r,!1,null,null,null);o.options.__file="App.vue";var u=o.exports,l=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-package-box"},[a("router-view"),a("tab-type-container")],1)},f=[],v=a("d4ec"),d=a("99de"),m=a("7e84"),b=a("262e"),_=a("9ab4"),h=a("60a3"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-type-box flex-row-start"},[n("div",{on:{click:function(e){t.setCurrentNum("1")}}},["1"===t.$store.state.tabnum.currentNum?n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:a("807b"),alt:""}}),n("p",{staticClass:"special"},[t._v("首页")])]):n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:a("5c6b"),alt:""}}),n("p",[t._v("首页")])])],1),n("div",{on:{click:function(e){t.setCurrentNum("2")}}},["2"===t.$store.state.tabnum.currentNum?n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:a("ffa4"),alt:""}}),n("p",{staticClass:"special"},[t._v("行情")])]):n("router-link",{attrs:{to:"/market"}},[n("img",{attrs:{src:a("ff16"),alt:""}}),n("p",[t._v("行情")])])],1),n("div",{on:{click:function(e){t.setCurrentNum("3")}}},["3"===t.$store.state.tabnum.currentNum?n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:a("88f2"),alt:""}}),n("p",{staticClass:"special"},[t._v("订单")])]):n("router-link",{attrs:{to:"/orders"}},[n("img",{attrs:{src:a("f7c9"),alt:""}}),n("p",[t._v("订单")])])],1),n("div",{on:{click:function(e){t.setCurrentNum("4")}}},["4"===t.$store.state.tabnum.currentNum?n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:a("9a85"),alt:""}}),n("p",{staticClass:"special"},[t._v("资产")])]):n("router-link",{attrs:{to:"/assets"}},[n("img",{attrs:{src:a("4850"),alt:""}}),n("p",[t._v("资产")])])],1),n("div",{on:{click:function(e){t.setCurrentNum("5")}}},["5"===t.$store.state.tabnum.currentNum?n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:a("1baf"),alt:""}}),n("p",{staticClass:"special"},[t._v("更多")])]):n("router-link",{attrs:{to:"/more"}},[n("img",{attrs:{src:a("541d"),alt:""}}),n("p",[t._v("更多")])])],1)])},C=[],x=a("bee2"),y=a("2948"),k=function(t){function e(){var t;return Object(v["a"])(this,e),t=Object(d["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.count=1,t}return Object(b["a"])(e,t),Object(x["a"])(e,[{key:"setCurrentNum",value:function(t){sessionStorage.setItem("currentNum",t),y["a"].setCurrency(t)}},{key:"created",value:function(){y["a"].setCurrency(sessionStorage.getItem("currentNum")||"")}}]),e}(h["c"]),O=k,w=(a("8084"),Object(i["a"])(O,g,C,!1,null,null,null));w.options.__file="TabTypeContainer.vue";var j=w.exports,E=function(t){function e(){return Object(v["a"])(this,e),Object(d["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),e}(h["c"]);E=_["b"]([Object(h["a"])({components:{TabTypeContainer:j}})],E);var S=E,T=S,I=(a("5422"),Object(i["a"])(T,p,f,!1,null,null,null));I.options.__file="TabPackage.vue";var $=I.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"market-view-box"},[t.showAlert?a("TransactionDetail",{attrs:{onTransaction:t.onTransaction}}):t._e(),a("div",{staticClass:"market-container"},[a("TopView"),a("div",{staticClass:"trading-box"},[t._v("trading view")]),a("BomView")],1),a("div",{staticClass:"btn-box"},[a("div",[a("mt-button",{staticStyle:{background:"rgba(7,199,78,1)",color:"#fff"},attrs:{type:"default"},on:{click:function(e){t.onTransaction("buy")}}},[t._v("买入")])],1),a("div",[a("mt-button",{staticStyle:{background:"rgba(255,0,0,1)",color:"#fff"},attrs:{type:"default"},on:{click:function(e){t.onTransaction("sell")}}},[t._v("卖出")])],1)])],1)},N=[],P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"view-box-top"},[n("div",{staticClass:"currency-box flex-row-between"},[n("span",{staticClass:"currency-name"},[t._v("LTC/EOS")]),n("img",{attrs:{src:a("b353"),alt:""}})]),n("div",{staticClass:"real-data flex-row-between-start"},[n("div",{staticClass:"real-name-box"},[n("span",{staticClass:"real-text green-color"},[t._v("0.00000314")]),n("img",{attrs:{src:a("b353"),alt:""}})]),n("span",{staticClass:"long-text green-color"},[t._v("+ 112.16%")])]),n("div",{staticClass:"max24-box"},[n("div",[n("span",{staticClass:"real-title"},[t._v("24H最高价：")]),n("span",{staticClass:"real-text"},[t._v("0.000000373")])]),n("div",[n("span",{staticClass:"real-title"},[t._v("24H最低价：")]),n("span",{staticClass:"real-text"},[t._v("0.000000147")])]),n("div",[n("span",{staticClass:"real-title"},[t._v("24H成交量：")]),n("span",{staticClass:"real-text"},[t._v("8584584.134")])])])])}],B={name:"top-view"},z=B,A=(a("8f65"),Object(i["a"])(z,P,L,!1,null,"35ec1ab6",null));A.options.__file="TopView.vue";var H=A.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"bom-container"}},[a("div",{staticClass:"flex-row-start",attrs:{id:"tab-box-container"}},[a("div",{staticClass:"type-select-box"},[a("mt-navbar",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("mt-tab-item",{attrs:{id:"1"}},[t._v("委托订单")]),a("mt-tab-item",{attrs:{id:"2"}},[t._v("深度")]),a("mt-tab-item",{attrs:{id:"3"}},[t._v("最新成交")]),a("mt-tab-item",{attrs:{id:"4"}},[t._v("简介")])],1)],1),a("div",[a("mt-tab-container",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("mt-tab-container-item",{attrs:{id:"1"}},[a("OrderTab")],1),a("mt-tab-container-item",{attrs:{id:"2"}},[t._v("深度图")]),a("mt-tab-container-item",{attrs:{id:"3"}},[a("DealTab")],1),a("mt-tab-container-item",{attrs:{id:"4"}},[a("Introduction")],1)],1)],1)]),a("div",{staticClass:"container-box"})])},R=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-box"},[t._m(0),a("div",{staticClass:"order-content"},[a("div",{staticClass:"buy-part"},[a("OrderItem",{attrs:{data:t.asks}})],1),a("div",{staticClass:"sell-part"},[a("OrderItem",{attrs:{data:t.bids}})],1)])])},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-top"},[a("div",{staticClass:"tab-box"},[a("span",[a("span",{staticClass:"buy-text"},[t._v("买")]),a("span",{staticClass:"tab-title"},[t._v("数量(WIZBOX)")])]),a("span",{staticClass:"tab-title"},[t._v("价格(EOS)")]),a("span",[a("span",{staticClass:"tab-title"},[t._v("数量(WIZBOX)")]),a("span",{staticClass:"sell-text"},[t._v("卖")])])])])}],F=(a("96cf"),a("1da1")),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-out-box"},t._l(t.data,function(e){return a("div",{staticClass:"item-box"},[a("span",{staticClass:"total greenbg"}),a("span",{staticClass:"price"},[t._v(t._s(e.price))]),a("span",{staticClass:"size"},[t._v(t._s(e.size))])])}),0)},G=[],U={name:"order-item",props:{data:{type:Array,required:!0}}},K=U,X=(a("72cb"),Object(i["a"])(K,W,G,!1,null,"9bdd21d8",null));X.options.__file="OrderItem.vue";var Y=X.exports,Z=a("b3c7"),J=function(t){function e(){var t;return Object(v["a"])(this,e),t=Object(d["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.asks=[],t.bids=[],t}return Object(b["a"])(e,t),Object(x["a"])(e,[{key:"mounted",value:function(){this.getMarketOrder()}},{key:"getMarketOrder",value:function(){var t=Object(F["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Z["a"])({marketId:1});case 3:e=t.sent,this.asks=e.asks,this.bids=e.bids,console.log(e),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));function e(){return t.apply(this,arguments)}return e}()}]),e}(h["c"]);J=_["b"]([Object(h["a"])({components:{OrderItem:Y}})],J);var Q=J,tt=Q,et=(a("b46f"),Object(i["a"])(tt,M,V,!1,null,"d5104d28",null));et.options.__file="OrderTab.vue";var at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"deal-box"},[t._m(0),a("div",{staticClass:"order-content"},[a("div",{staticClass:"buy-part"},[a("DealItem",{attrs:{data:t.dealData}})],1)])])},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-top"},[a("div",{staticClass:"tab-box"},[a("span",{staticClass:"tab-title time-mark"},[t._v("时间")]),a("span",{staticClass:"tab-title price-mark"},[t._v("价格(EOS)")]),a("span",{staticClass:"tab-title size-mark"},[t._v("数量(WIZBOX)")])])])}],rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item-out-box"},t._l(t.data,function(e){return a("div",{staticClass:"item-box"},[a("span",{staticClass:"time-mark time"},[t._v(t._s(t._f("formatTime")(e.time)))]),a("span",{staticClass:"price-mark price"},[t._v(t._s(e.price))]),a("span",{staticClass:"size-mark size"},[t._v(t._s(e.size))])])}),0)},it=[],ct=a("5a0c"),ot=a.n(ct);function ut(t){return ot()(t).format("MM-DD-HH:mm:ss")}var lt=function(t){function e(){var t;return Object(v["a"])(this,e),t=Object(d["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.data=[],t}return Object(b["a"])(e,t),e}(h["c"]);_["b"]([Object(h["b"])({required:!0})],lt.prototype,"data",void 0),lt=_["b"]([Object(h["a"])({filters:{formatTime:ut}})],lt);var pt=lt,ft=pt,vt=(a("f344"),Object(i["a"])(ft,rt,it,!1,null,"0b17d6ee",null));vt.options.__file="DealItem.vue";var dt=vt.exports,mt=function(t){function e(){var t;return Object(v["a"])(this,e),t=Object(d["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.dealData=[],t}return Object(b["a"])(e,t),Object(x["a"])(e,[{key:"mounted",value:function(){this.getDealData()}},{key:"getDealData",value:function(){var t=Object(F["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Z["b"])({marketId:1});case 3:e=t.sent,this.dealData=e,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}()}]),e}(h["c"]);mt=_["b"]([Object(h["a"])({components:{DealItem:dt}})],mt);var bt=mt,_t=bt,ht=(a("fdb2"),Object(i["a"])(_t,nt,st,!1,null,"17d566b5",null));ht.options.__file="DealTab.vue";var gt=ht.exports,Ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro-box"},[n("div",{staticClass:"intro-top"},[n("img",{attrs:{src:a("2996"),alt:""}}),n("p",[t._v("这是一个由这是一个由这是一个由这是一个由这是一个由这是一个由这是一个由")])]),n("div",{staticClass:"intro-bom"},[n("p",{staticClass:"base-info"},[t._v("基本信息")]),n("p",{staticClass:"info-title"},[n("span",[t._v("流通总量")]),n("span",[t._v("info-title")])]),n("p",{staticClass:"info-title"},[n("span",[t._v("发行总量")]),n("span",[t._v("info-title")])]),n("p",{staticClass:"info-title"},[n("span",[t._v("合约名称")]),n("span",[t._v("info-title")])]),n("p",{staticClass:"info-title"},[n("span",[t._v("官 网")]),n("span",[t._v("info-title")])])])])}],yt={name:"introduction"},kt=yt,Ot=(a("97ab"),Object(i["a"])(kt,Ct,xt,!1,null,"8c2ff390",null));Ot.options.__file="Introduction.vue";var wt=Ot.exports,jt={name:"bom-view",data:function(){return{selected:"1"}},methods:{},components:{OrderTab:at,DealTab:gt,Introduction:wt}},Et=jt,St=(a("df1a"),Object(i["a"])(Et,q,R,!1,null,null,null));St.options.__file="BomView.vue";var Tt=St.exports,It=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-container",on:{click:t.onTransaction,touchmove:function(t){t.preventDefault()}}},[a("div",{staticClass:"detail-content",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"title"},[t._v("DICE/EOS交易明细")]),t._m(0),t._m(1),t._m(2)])])},$t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tans-detail-top"},[a("div",{staticClass:"detail-box"},[a("div",{staticClass:"detail-item"},[a("p",[t._v("成交价")]),a("p",[t._v("0.000150")])]),a("div",{staticClass:"detail-item"},[a("p",[t._v("成交量")]),a("p",[t._v("0.000150")])])]),a("div",{staticClass:"detail-box"},[a("div",{staticClass:"detail-item"},[a("p",[t._v("成交金额")]),a("p",[t._v("0.000150")])]),a("div",{staticClass:"detail-item"},[a("p",[t._v("成交时间")]),a("p",[t._v("0.000150")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"trans-buy"},[a("div",{staticClass:"trans-type buy-text"},[t._v("\n        买方\n      ")]),a("div",{staticClass:"detail-text-box"},[a("p",{staticClass:"text-item"},[a("span",[t._v("EOS账户名：")]),a("span",{staticClass:"account account-text"},[t._v("WantLine")])]),a("p",{staticClass:"text-item"},[a("span",[t._v("结算数量：")]),a("span",{staticClass:"account"},[t._v("2390.8097")])]),a("p",{staticClass:"text-item"},[a("span",[t._v("手续费：")]),a("span",{staticClass:"account"},[t._v("2.8097")])]),a("p",{staticClass:"text-item"},[a("span",[t._v("交易委托TrxID：")]),a("span",{staticClass:"account"},[t._v("4ewfewf214...")])]),a("p",{staticClass:"text-item"},[a("span",[t._v("成交结算TrxID：")]),a("span",{staticClass:"account"},[t._v("4ewfewf214...")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"trans-sell"},[a("div",{staticClass:"trans-type sell-text"},[t._v("\n         卖方\n      ")]),a("div",{staticClass:"detail-text-box"},[a("p",{staticClass:"text-item"},[a("span",[t._v("EOS账户名：")]),a("span",{staticClass:"account account-text"},[t._v("WantLine")])]),a("p",{staticClass:"text-item"},[a("span",[t._v("结算数量：")]),a("span",{staticClass:"account"},[t._v("2390.8097")])]),a("p",{staticClass:"text-item"},[a("span",[t._v("手续费：")]),a("span",{staticClass:"account"},[t._v("2.8097")])]),a("p",{staticClass:"text-item"},[a("span",[t._v("交易委托TrxID：")]),a("span",{staticClass:"account"},[t._v("4ewfewf214...")])]),a("p",{staticClass:"text-item"},[a("span",[t._v("成交结算TrxID：")]),a("span",{staticClass:"account"},[t._v("4ewfewf214...")])])])])}],Dt={name:"transaction-detail",props:{onTransaction:{type:String,required:!0}}},Nt=Dt,Pt=(a("163a"),Object(i["a"])(Nt,It,$t,!1,null,"2f89b695",null));Pt.options.__file="TransactionDetail.vue";var Lt=Pt.exports,Bt=function(t){function e(){var t;return Object(v["a"])(this,e),t=Object(d["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.showAlert=!1,t}return Object(b["a"])(e,t),Object(x["a"])(e,[{key:"onTransaction",value:function(t){var e={name:"business",params:{id:String(y["a"].marketId),type:t}};this.$router.push(e)}}]),e}(h["c"]);Bt=_["b"]([Object(h["a"])({components:{TopView:H,BomView:Tt,TransactionDetail:Lt}})],Bt);var zt=Bt,At=zt,Ht=(a("119c"),Object(i["a"])(At,D,N,!1,null,"1f6dfa04",null));Ht.options.__file="index.vue";var qt=Ht.exports,Rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"market-search-page"}},[n("div",{staticClass:"market-search-input-box"},[n("img",{attrs:{src:a("45d3"),alt:""}}),n("input",{attrs:{type:"text",placeholder:"搜索"}}),n("router-link",{attrs:{to:"market"}},[n("img",{attrs:{src:a("45d3"),alt:""}})])],1),t.growList.length>0?n("div",[n("div",{staticClass:"search-result-box"},[t._v("搜索结果")]),t._l(t.growList,function(e){return n("div",{key:e.id,staticClass:"search-list-child-box"},[n("h4",{staticClass:"list-title"},[t._v(t._s(e.currency)+"/EOS")]),n("p",{staticClass:"list-price"},[t._v(t._s(e.price))]),1===e.statu?n("p",{staticClass:"list-precentage-rise"},[t._v("+"+t._s(e.percentage)+"%")]):0===e.statu?n("p",{staticClass:"list-precentage-fall"},[t._v("-"+t._s(e.percentage)+"%")]):n("p",{staticClass:"list-precentage-middle"},[t._v("0.00%")]),1===e.collectionState?n("img",{attrs:{src:a("963b"),alt:""}}):n("img",{attrs:{src:a("df94"),alt:""}})])})],2):n("div",{staticClass:"list-no-box"},[n("img",{attrs:{src:a("963b"),alt:""}}),n("p",[t._v("暂无数据")])])])},Mt=[],Vt=[{currency:"EOS",dealSize:3333,price:.0023,statu:1,percentage:10,collectionState:1,id:1},{currency:"EOS",dealSize:3333,price:.0023,statu:0,percentage:10,collectionState:0,id:2},{currency:"EOS",dealSize:3333,price:.0023,statu:2,percentage:10,collectionState:0,id:3}],Ft={date:function(){return{growList:[]}},methods:{setGrowList:function(t){this.growList=t}},created:function(){this.setGrowList(Vt)}},Wt=Ft,Gt=(a("a96c"),Object(i["a"])(Wt,Rt,Mt,!1,null,null,null));Gt.options.__file="MarketSearch.vue";var Ut=Gt.exports,Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"market-optional-page"}},[n("div",{staticClass:"market-search-input-box"},[n("router-link",{attrs:{to:"market"}},[n("img",{attrs:{src:a("45d3"),alt:""}})]),n("h4",[t._v("编辑自选")]),n("router-link",{attrs:{to:"market"}},[n("p",[t._v("完成")])])],1),t.growList.length>0?n("div",{staticClass:"optional-list-box"},[t._m(0),t._l(t.growList,function(e,s){return n("div",{key:s,staticClass:"search-list-child-box"},[n("h4",{staticClass:"list-title"},[t._v(t._s(e.currency)+"/EOS")]),0!==s?n("img",{attrs:{src:a("2fc0"),alt:""}}):t._e(),n("img",{attrs:{src:a("e1f7"),alt:""}})])})],2):n("div",{staticClass:"list-no-box"},[n("img",{attrs:{src:a("963b"),alt:""}}),n("p",[t._v("暂无数据")])])])},Xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"optional-list-title-box"},[a("p",[t._v("交易对")]),a("p",[t._v("置顶")]),a("p",[t._v("删除")])])}],Yt=[{currency:"EOS",dealSize:3333,price:.0023,statu:1,percentage:10,collectionState:1,id:1},{currency:"EOS",dealSize:3333,price:.0023,statu:0,percentage:10,collectionState:0,id:2},{currency:"EOS",dealSize:3333,price:.0023,statu:2,percentage:10,collectionState:0,id:3}],Zt={date:function(){return{growList:[]}},methods:{setGrowList:function(t){this.growList=t}},created:function(){this.setGrowList(Yt)}},Jt=Zt,Qt=(a("7869"),Object(i["a"])(Jt,Kt,Xt,!1,null,null,null));Qt.options.__file="MarketOptional.vue";var te=Qt.exports,ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about-page"}},[t._m(0),a("div",{staticClass:"about-CPU-info-box",on:{click:t.onpopupState}},[t._m(1),t._m(2),t._m(3)]),t._m(4),a("div",{staticClass:"currener-info-box-package"},[t._m(5),t._l(t.currendcrInfo,function(e,n){return a("div",{staticClass:"currener-info-box"},[a("div",[a("h4",[t._v(t._s(e.name))]),a("p",[t._v(t._s(e.value))])]),a("div",[a("h4",[t._v("可用："+t._s(e.available))]),a("p",[t._v("冻结："+t._s(e.Frozen))])])])})],2),a("mt-popup",{attrs:{"popup-transition":"popup-fade"},model:{value:t.popupVisible,callback:function(e){t.popupVisible=e},expression:"popupVisible"}},[a("h4",[t._v("资源用量")]),a("div",[a("h4",[t._v("\n        CPU：\n        "),a("span",[t._v("已用 5048.2%")])]),a("p",[t._v("已用 0.00us/总45.00us(0.1000 EOS)")]),a("h4",[t._v("NET：已用 1.9%")]),a("p",[t._v("已用 0.00B/总77.15KB(0.1000 EOS)")]),a("h4",[t._v("RAM：已用 57.0%")]),a("p",[t._v("已用 2.92KB/总5.34KB")])]),a("mt-button",{attrs:{type:"primary"},on:{click:t.onpopupState}},[t._v("确认")])],1)],1)},ae=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-banner-box"},[n("img",{attrs:{src:a("40f4"),alt:""}}),n("h3",[t._v("WantLine")]),n("div",[n("h4",[t._v("8888.93")]),n("span",[t._v("EOS")])]),n("p",[t._v("总估值")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("CPU")]),a("p",[t._v("已用 5048.2%")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("NET")]),a("p",[t._v("已用 5048.2%")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("RAM")]),a("p",[t._v("已用 5048.2%")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"currency-input-box"},[n("div",[n("p",[t._v("非小额资产")]),n("img",{attrs:{src:a("90b4"),alt:""}})]),n("div",[n("input",{attrs:{type:"text",placeholder:"搜索"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"currener-info-box"},[a("div",[a("h4",[t._v("EOS")])]),a("div",[a("h4",[t._v("可用：808.19")]),a("p",[t._v("冻结：0.0000")])])])}],ne=[{name:"DPY",available:3333,value:3333,Frozen:3333,id:1},{name:"DPY",available:3333,value:3333,Frozen:3333,id:2},{name:"DPY",available:3333,value:3333,Frozen:3333,id:3}],se=function(t){function e(){var t;return Object(v["a"])(this,e),t=Object(d["a"])(this,Object(m["a"])(e).apply(this,arguments)),t.popupVisible=!1,t.currendcrInfo=[],t}return Object(b["a"])(e,t),Object(x["a"])(e,[{key:"onpopupState",value:function(){this.popupVisible=!this.popupVisible}},{key:"setCurrendcrInfo",value:function(t){this.currendcrInfo=t}},{key:"created",value:function(){this.setCurrendcrInfo(ne),y["a"].setCurrency("4")}}]),e}(h["c"]),re=se,ie=(a("f712"),Object(i["a"])(re,ee,ae,!1,null,null,null));ie.options.__file="Assets.vue";var ce=ie.exports;n["default"].use(l["a"]);var oe=new l["a"]({routes:[{path:"/",name:"TabPackage",component:$,children:[{path:"/",name:"homepage",component:function(){return a.e("homepage").then(a.bind(null,"028c"))}},{path:"/market",component:function(){return a.e("market").then(a.bind(null,"77e1"))},children:[]},{path:"/orders",name:"orders",component:function(){return a.e("orders").then(a.bind(null,"5729"))}},{path:"/more",name:"more",component:function(){return a.e("more").then(a.bind(null,"02f41"))}},{path:"/assets",name:"assets",component:ce}]},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"61e0"))}},{path:"/market-search",name:"market-search",component:Ut},{path:"/market-optional",name:"market-optional",component:te},{path:"/business/:id",name:"business",component:function(){return a.e("business").then(a.bind(null,"8dce"))}},{path:"/businessHistory",name:"businessHistory",component:function(){return a.e("businessHistory").then(a.bind(null,"cd73"))}},{path:"/market-view",name:"market-view",component:qt}]}),ue=(a("bb3e"),a("76a0")),le=a.n(ue);a("aa35");n["default"].component(ue["Button"].name,ue["Button"]),n["default"].component(ue["Navbar"].name,ue["Navbar"]),n["default"].component(ue["TabItem"].name,ue["TabItem"]),n["default"].component(ue["TabContainer"].name,ue["TabContainer"]),n["default"].component(ue["TabContainerItem"].name,ue["TabContainerItem"]),n["default"].component(ue["Popup"].name,ue["Popup"]),n["default"].use(le.a),n["default"].config.productionTip=!1,new n["default"]({router:oe,render:function(t){return t(u)}}).$mount("#app")},"6eef":function(t,e,a){},"72cb":function(t,e,a){"use strict";var n=a("a1a7"),s=a.n(n);s.a},"77dc":function(t,e,a){},7869:function(t,e,a){"use strict";var n=a("cc72"),s=a.n(n);s.a},"807b":function(t,e,a){t.exports=a.p+"img/ic_nav_assets_press.5237b329.svg"},8084:function(t,e,a){"use strict";var n=a("ffef"),s=a.n(n);s.a},"88f2":function(t,e,a){t.exports=a.p+"img/ic_nav_more_press.7c078b7c.svg"},"8f65":function(t,e,a){"use strict";var n=a("6eef"),s=a.n(n);s.a},"90b4":function(t,e,a){t.exports=a.p+"img/ic_arrow_under.34b30a49.svg"},"963b":function(t,e,a){t.exports=a.p+"img/ic_collection_s.cad51709.svg"},"97ab":function(t,e,a){"use strict";var n=a("a7cc"),s=a.n(n);s.a},"9a85":function(t,e,a){t.exports=a.p+"img/ic_nav_order_press.1d9ac509.svg"},a1a7:function(t,e,a){},a7cc:function(t,e,a){},a96c:function(t,e,a){"use strict";var n=a("2b83"),s=a.n(n);s.a},ae77:function(t,e,a){},b353:function(t,e,a){t.exports=a.p+"img/ic_collection_normal.bbd09999.svg"},b3c7:function(t,e,a){"use strict";a("96cf");var n=a("1da1"),s=a("53ca"),r=a("d4ec"),i=a("bee2"),c=a("99de"),o=a("7e84"),u=a("262e"),l=a("9072"),p=(a("f751"),a("bc3a")),f=a.n(p),v=f.a.create({baseURL:"http://47.52.113.167:5566/v1",timeout:1e4});v.interceptors.request.use(function(t){return Object.assign(t.headers,{sessionId:sessionStorage.getItem("sessionId")}),t},function(){return new Promise(function(){})});var d=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(i["a"])(e,null,[{key:"fromAxiosError",value:function(t){var a=new e,n=t.response,r=t.config,i=t.request;return n&&"object"===Object(s["a"])(n.data)&&(a.resCode=n.data.code,a.msg=n.data.msg),a.config=r,a.request=i,a.response=n,a}}]),e}(Object(l["a"])(Error));function m(t){return t.data.data}v.interceptors.response.use(function(t){var e=t.data,a=e.code,n=e.msg,s=e.data;if(t.data.code<0){if(-10022===t.data.code)return new Promise(function(){});if(-100023===t.data.code)return new Promise(function(){});var r=new d(t.data.msg||"Request fail.");return r.resCode=a,r.msg=n,r.data=s,r.response=t,r.config=t.config,r.request=t.request,Promise.reject(r)}return t},function(t){var e=d.fromAxiosError(t);return e.response,Promise.reject(e)});var b=v;function _(t,e){return h.apply(this,arguments)}function h(){return h=Object(n["a"])(regeneratorRuntime.mark(function t(e,a){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.get("/orders/history/"+e,{params:a});case 2:return n=t.sent,t.abrupt("return",m(n));case 4:case"end":return t.stop()}},t,this)})),h.apply(this,arguments)}function g(t){return C.apply(this,arguments)}function C(){return C=Object(n["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.get("/markets/"+e.marketId+"/orderbook");case 2:return a=t.sent,t.abrupt("return",m(a));case 4:case"end":return t.stop()}},t,this)})),C.apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return y=Object(n["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.get("/markets/"+e.marketId+"/trades");case 2:return a=t.sent,t.abrupt("return",m(a));case 4:case"end":return t.stop()}},t,this)})),y.apply(this,arguments)}a.d(e,"c",function(){return _}),a.d(e,"a",function(){return g}),a.d(e,"b",function(){return x})},b46f:function(t,e,a){"use strict";var n=a("ef6f"),s=a.n(n);s.a},bb3e:function(t,e,a){"use strict";var n=a("9483");Object(n["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}})},c092:function(t,e,a){},c391:function(t,e,a){},ca6a:function(t,e,a){},cc72:function(t,e,a){},df1a:function(t,e,a){"use strict";var n=a("ae77"),s=a.n(n);s.a},df94:function(t,e,a){t.exports=a.p+"img/ic_collection_current_s.d215103e.svg"},e1f7:function(t,e,a){t.exports=a.p+"img/ic_delete.36afbe26.svg"},ef6f:function(t,e,a){},f344:function(t,e,a){"use strict";var n=a("c391"),s=a.n(n);s.a},f712:function(t,e,a){"use strict";var n=a("ca6a"),s=a.n(n);s.a},f7c9:function(t,e,a){t.exports=a.p+"img/ic_nav_more_normal.5ffe6392.svg"},fdb2:function(t,e,a){"use strict";var n=a("77dc"),s=a.n(n);s.a},ff16:function(t,e,a){t.exports=a.p+"img/ic_nav_home_normal.9ea7b0bb.svg"},ffa4:function(t,e,a){t.exports=a.p+"img/ic_nav_home_press.a4c62b92.svg"},ffef:function(t,e,a){}});
//# sourceMappingURL=mobile.df7cc6c9.js.map