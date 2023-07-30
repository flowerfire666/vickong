(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/lottery/components/lotteryAleart"],{"06b9":function(t,a,e){"use strict";var n=e("5870"),r=e.n(n);r.a},2041:function(t,a,e){"use strict";e.r(a);var n=e("6d3a"),r=e("30c5");for(var i in r)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(i);e("06b9");var u=e("f0c5"),c=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"264cea95",null,!1,n["a"],void 0);a["default"]=c.exports},"30c5":function(t,a,e){"use strict";e.r(a);var n=e("ac01"),r=e.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(i);a["default"]=r.a},5870:function(t,a,e){},"6d3a":function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){}));var n=function(){var t=this.$createElement;this._self._c},r=[]},ac01:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{aleartData:{}}},props:{aleartType:{type:Number},alData:{type:Object},aleartStatus:{type:Boolean,default:!1}},watch:{aleartType:function(t){1===t?this.aleartData={title:"暂无抽奖资格",msg:"1、您未关注公众号\n2、您未获得VIP权限，获取VIP途径：\n（1）购买过打通版的用户可在会员群联系官方客服开通\n（2）官方小程序商城购买CRMEB打通版、企业版后自动开通",btn:"我知道了"}:2===t&&(this.aleartData={title:"抽奖结果",img:this.alData.image,msg:this.alData.prompt,btn:"好的",type:this.alData.type})},aleartStatus:function(t){t||(this.aleartData={})}},methods:{posterImageClose:function(t){this.$emit("close",!1)}}};a.default=n}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/activity/lottery/components/lotteryAleart-create-component',
    {
        'pages/activity/lottery/components/lotteryAleart-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2041"))
        })
    },
    [['pages/activity/lottery/components/lotteryAleart-create-component']]
]);
