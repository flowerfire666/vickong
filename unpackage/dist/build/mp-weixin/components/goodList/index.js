(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/goodList/index"],{"5b4d":function(t,n,e){"use strict";var a=e("c2e5"),u=e.n(a);u.a},"7a698":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("26cb"),u=e("2a40"),i={computed:(0,a.mapGetters)(["uid"]),props:{status:{type:Number,default:0},bastList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{goDetail:function(n){var e=this;(0,u.goPage)().then((function(a){(0,u.goShopDetail)(n,e.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}))}}};n.default=i}).call(this,e("543d")["default"])},bad7:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},u=[]},c2e5:function(t,n,e){},ddab:function(t,n,e){"use strict";e.r(n);var a=e("7a698"),u=e.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=u.a},f701:function(t,n,e){"use strict";e.r(n);var a=e("bad7"),u=e("ddab");for(var i in u)["default"].indexOf(i)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("5b4d");var o=e("f0c5"),c=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"53b90fef",null,!1,a["a"],void 0);n["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/goodList/index-create-component',
    {
        'components/goodList/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("f701"))
        })
    },
    [['components/goodList/index-create-component']]
]);
