(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/recommend/index"],{"488a":function(t,n,e){"use strict";e.r(n);var a=e("f406"),u=e.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=u.a},"6c16":function(t,n,e){"use strict";e.r(n);var a=e("ec64"),u=e("488a");for(var c in u)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("a42f");var i=e("f0c5"),o=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,"6bbd961a",null,!1,a["a"],void 0);n["default"]=o.exports},a42f:function(t,n,e){"use strict";var a=e("c77e"),u=e.n(a);u.a},c77e:function(t,n,e){},ec64:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},u=[]},f406:function(t,n,e){"use strict";(function(t){var a=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),c=e("2a40"),i=a(e("6a7c")),o={computed:(0,u.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[i.default],data:function(){return{}},methods:{goDetail:function(n){(0,c.goShopDetail)(n,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}}};n.default=o}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/recommend/index-create-component',
    {
        'components/recommend/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6c16"))
        })
    },
    [['components/recommend/index-create-component']]
]);
