(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_cate/goods_cate1"],{"09fb":function(t,e,n){"use strict";var i=n("512e"),r=n.n(i);r.a},"0cda":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("9523")),o=n("a612"),a=n("26cb"),c=n("771e");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}var s=t.getSystemInfoSync().statusBarHeight+"px",l=(getApp(),{components:{pageFooter:function(){Promise.all([n.e("common/vendor"),n.e("components/pageFooter/index")]).then(function(){return resolve(n("9a5a"))}.bind(null,n)).catch(n.oe)}},data:function(){return{navlist:[],productList:[],navActive:0,number:"",height:0,heightDiv:0,hightArr:[],toView:"",tabbarH:0,footH:0,windowHeight:0,newData:{},activeRouter:"",pageHeight:"100%",sysHeight:s,footerStatus:!1,lock:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,r.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},(0,a.mapState)({cartNum:function(t){return t.indexData.cartNum}})),mounted:function(){var t=getCurrentPages(),e=t[t.length-1].route;this.activeRouter="/"+e,this.getAllCategory()},methods:{getNav:function(){var e=this;(0,c.getNavigation)().then((function(n){e.newData=n.data,e.newData.status&&e.newData.status.status?t.hideTabBar():t.showTabBar()}))},goRouter:function(e){var n=getCurrentPages(),i=n[n.length-1].$page.fullPath;e.link!=i&&t.switchTab({url:e.link,fail:function(n){t.redirectTo({url:e.link})}})},footHeight:function(t){this.footH=t},infoScroll:function(){var e=this,n=e.productList.length;this.number=e.productList[n-1].children.length;var i=0,r=t.createSelectorQuery().in(this);r.select(".conter").boundingClientRect(),r.exec((function(t){i=t[0].height}));for(var o=0;o<n;o++){var a=t.createSelectorQuery().in(this),c="#b"+o;a.select(c).boundingClientRect(),a.exec((function(r){var o=r[0].top;e.hightArr.push(o),n==e.hightArr.length&&t.getSystemInfo({success:function(t){var n=750/t.windowWidth;e.height=i*n,e.heightDiv=(e.hightArr[e.hightArr.length-1]-e.hightArr[e.hightArr.length-2])*n}})}))}},tap:function(t,e){this.toView=e,this.navActive=t,this.$set(this,"lock",!0)},getAllCategory:function(){var t=this;(0,o.getCategoryList)().then((function(e){t.productList=e.data,t.$nextTick((function(e){setTimeout((function(){t.infoScroll()}))}))}))},scroll:function(t){var e=t.detail.scrollTop,n=this.hightArr;if(this.lock)this.$set(this,"lock",!1);else for(var i=0;i<n.length;i++)e>=0&&e<n[1]-n[0]?this.navActive=0:e>=n[i]-n[0]&&e<n[i+1]-n[0]?this.navActive=i:e>=n[n.length-1]-n[0]&&(this.navActive=n.length-1)},searchSubmitValue:function(e){if(!(this.$util.trim(e.detail.value).length>0))return this.$util.Tips({title:"请填写要搜索的产品信息"});t.navigateTo({url:"/pages/goods_list/index?searchValue="+e.detail.value})}}});e.default=l}).call(this,n("543d")["default"])},"24d0":function(t,e,n){"use strict";n.r(e);var i=n("0cda"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},"512e":function(t,e,n){},58161:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},r=[]},"5ca7":function(t,e,n){"use strict";n.r(e);var i=n("58161"),r=n("24d0");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("c1bf"),n("09fb");var a=n("f0c5"),c=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"1851b495",null,!1,i["a"],void 0);e["default"]=c.exports},"8ce4":function(t,e,n){},c1bf:function(t,e,n){"use strict";var i=n("8ce4"),r=n.n(i);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/goods_cate/goods_cate1-create-component',
    {
        'pages/goods_cate/goods_cate1-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("5ca7"))
        })
    },
    [['pages/goods_cate/goods_cate1-create-component']]
]);
