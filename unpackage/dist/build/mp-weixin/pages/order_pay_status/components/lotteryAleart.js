(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_pay_status/components/lotteryAleart"],{"19b9":function(t,a,e){"use strict";var n=e("8baf"),r=e.n(n);r.a},"42d4":function(t,a,e){"use strict";e.r(a);var n=e("a1c1"),r=e("c44b");for(var u in r)["default"].indexOf(u)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(u);e("19b9");var i=e("f0c5"),o=Object(i["a"])(r["default"],n["b"],n["c"],!1,null,"9a39f772",null,!1,n["a"],void 0);a["default"]=o.exports},"8baf":function(t,a,e){},a1c1:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){}));var n=function(){var t=this.$createElement;this._self._c},r=[]},b213:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{aleartData:{}}},props:{aleartType:{type:Number},alData:{type:Object},aleartStatus:{type:Boolean,default:!1}},watch:{aleartType:function(t){1===t?this.aleartData={title:"暂无抽奖资格",msg:"1、您未关注公众号\n2、您未获得VIP权限，获取VIP途径：\n（1）购买过打通版的用户可在会员群联系官方客服开通\n（2）官方小程序商城购买CRMEB打通版、企业版后自动开通",btn:"我知道了"}:2===t&&(this.aleartData={title:"抽奖结果",img:this.alData.image,msg:this.alData.prompt,btn:"好的",type:this.alData.type})},aleartStatus:function(t){t||(this.aleartData={})}},methods:{posterImageClose:function(t){this.$emit("close",!1)}}};a.default=n},c44b:function(t,a,e){"use strict";e.r(a);var n=e("b213"),r=e.n(n);for(var u in n)["default"].indexOf(u)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(u);a["default"]=r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/order_pay_status/components/lotteryAleart-create-component',
    {
        'pages/order_pay_status/components/lotteryAleart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("42d4"))
        })
    },
    [['pages/order_pay_status/components/lotteryAleart-create-component']]
]);
