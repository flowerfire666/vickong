(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/homeList/index"],{"0293":function(e,n,t){},5028:function(e,n,t){"use strict";var a=t("0293"),o=t.n(a);o.a},7043:function(e,n,t){"use strict";t.r(n);var a=t("ca31"),o=t.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(r);n["default"]=o.a},"7af8":function(e,n,t){"use strict";t.r(n);var a=t("d0dc"),o=t("7043");for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("5028");var i=t("f0c5"),u=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"63c50db4",null,!1,a["a"],void 0);n["default"]=u.exports},ca31:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={name:"homeIdex",props:{navH:{type:String|Number,default:""},returnShow:{type:Boolean,default:!0},goodList:{type:Boolean,default:!1},currentPage:{type:Boolean,default:!1},goodsShow:{type:Boolean,default:!1},sysHeight:{type:String|Number,default:""}},data:function(){return{selectNavList:[{name:"首页",icon:"icon-shouye8",url:"/pages/index/index",after:"dialog_after"},{name:"搜索",icon:"icon-sousuo6",url:"/pages/goods_search/index",after:"dialog_after"},{name:"购物车",icon:"icon-gouwuche7",url:"/pages/order_addcart/order_addcart",after:"dialog_after"},{name:"我的收藏",icon:"icon-shoucang3",url:"/pages/users/user_goods_collection/index",after:"dialog_after"},{name:"个人中心",icon:"icon-gerenzhongxin1",url:"/pages/user/index"}]}},methods:{linkPage:function(n){-1==["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index","/pages/index/index"].indexOf(n)?e.navigateTo({url:n}):e.switchTab({url:n})}},created:function(){},beforeDestroy:function(){}};n.default=t}).call(this,t("543d")["default"])},d0dc:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},o=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/homeList/index-create-component',
    {
        'components/homeList/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7af8"))
        })
    },
    [['components/homeList/index-create-component']]
]);
