(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/pageFooter/index"],{"0444":function(t,e,a){},"4fc85":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement;this._self._c},r=[]},7555:function(t,e,a){"use strict";var n=a("0444"),r=a.n(n);r.a},"85a2":function(t,e,a){"use strict";(function(t,n){var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,u=r(a("9523")),i=a("26cb"),c=a("771e"),s=a("aa99");function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}var d=(o={name:"pageFooter",props:{noTop:{type:Boolean,default:!0},status:{type:Number|String,default:1},countNum:{type:Number|String,default:0}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){(0,u.default)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,i.mapState)({configData:function(t){return t.app.pageFooter}}))},(0,u.default)(o,"computed",(0,i.mapGetters)(["isLogin","cartNum"])),(0,u.default)(o,"watch",{configData:{handler:function(e,a){var n=this,r=t.createSelectorQuery().in(this);this.newData=e,this.$nextTick((function(){r.select("#target").boundingClientRect((function(e){t.$emit("footHeight",e.height),e&&(n.footHeight=e.height+50)})).exec()}))},deep:!0},cartNum:function(e,a){this.$store.commit("indexData/setCartNum",e+""),e>0?t.setTabBarBadge({index:Number(t.getStorageSync("FOOTER_ADDCART")),text:e+""}):n.hideTabBarRedDot({index:Number(t.getStorageSync("FOOTER_ADDCART"))})}}),(0,u.default)(o,"created",(function(){var t=getCurrentPages(),e=t[t.length-1].route;this.activeRouter="/"+e})),(0,u.default)(o,"onShow",(function(){var e=this;(0,c.getNavigation)().then((function(a){t.setStorageSync("pageFoot",a.data),e.$store.commit("FOOT_UPLOAD",a.data),e.newData=a.data,e.newData.status&&e.newData.status.status?t.hideTabBar():t.showTabBar()}))})),(0,u.default)(o,"mounted",(function(){this.newData=this.$store.state.app.pageFooter,this.newData.status&&this.newData.status.status?t.hideTabBar():t.showTabBar(),this.isLogin&&this.getCartNum()})),(0,u.default)(o,"data",(function(){return{newData:{},activeRouter:"/",footHeight:0}})),(0,u.default)(o,"methods",{goRouter:function(e){var a=getCurrentPages();if(a.length)var n=a[a.length-1].$page.fullPath;else n="";e.link!=n&&t.switchTab({url:e.link,fail:function(a){t.redirectTo({url:e.link})}})},getCartNum:function(){var t=this,e=this;(0,s.getCartCounts)().then((function(a){e.cartCount=a.data.count,t.$store.commit("indexData/setCartNum",a.data.count>99?"...":a.data.count)}))}}),o);e.default=d}).call(this,a("543d")["default"],a("bc2e")["default"])},"9a5a":function(t,e,a){"use strict";a.r(e);var n=a("4fc85"),r=a("bde8");for(var o in r)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(o);a("7555");var u=a("f0c5"),i=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"4e7099a5",null,!1,n["a"],void 0);e["default"]=i.exports},bde8:function(t,e,a){"use strict";a.r(e);var n=a("85a2"),r=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/pageFooter/index-create-component',
    {
        'components/pageFooter/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9a5a"))
        })
    },
    [['components/pageFooter/index-create-component']]
]);
