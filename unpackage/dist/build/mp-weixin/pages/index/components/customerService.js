(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/customerService"],{"2c9a":function(t,n,e){"use strict";var o=e("d49f"),i=e.n(o);i.a},7500:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"customerService",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{routineContact:this.dataConfig.routine_contact_type,logoConfig:this.dataConfig.logoConfig.url,topConfig:this.dataConfig.topConfig.val?this.dataConfig.topConfig.val>=80?"80%":this.dataConfig.topConfig.val+"%":"30%"}},created:function(){},methods:{setTouchMove:function(t){t.touches[0].clientY<545&&t.touches[0].clientY>66&&(this.topConfig=t.touches[0].clientY+"px")}}};n.default=o},"8d0b":function(t,n,e){"use strict";e.r(n);var o=e("7500"),i=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},be7a:function(t,n,e){"use strict";e.r(n);var o=e("e32b"),i=e("8d0b");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("2c9a");var u=e("f0c5"),c=Object(u["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=c.exports},d49f:function(t,n,e){},e32b:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/customerService-create-component',
    {
        'pages/index/components/customerService-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("be7a"))
        })
    },
    [['pages/index/components/customerService-create-component']]
]);
