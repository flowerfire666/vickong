(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/customForm/index"],{"284c":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"customForm",props:{customForm:{type:Array}},data:function(){return{isShow:0}},watch:{customForm:function(t){var n=this;t&&t.length&&t.forEach((function(t){if(t.value)return n.isShow=1}))}},created:function(){},mounted:function(){},methods:{getCustomForm:function(n,e){t.previewImage({urls:this.customForm[n].value,current:this.customForm[n].value[e]})}}};n.default=e}).call(this,e("543d")["default"])},"937d":function(t,n,e){},b732:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var o=function(){var t=this.$createElement,n=(this._self._c,this.customForm&&this.customForm.length&&this.isShow);this.$mp.data=Object.assign({},{$root:{g0:n}})},u=[]},be5e:function(t,n,e){"use strict";e.r(n);var o=e("284c"),u=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n["default"]=u.a},e663:function(t,n,e){"use strict";var o=e("937d"),u=e.n(o);u.a},fd98:function(t,n,e){"use strict";e.r(n);var o=e("b732"),u=e("be5e");for(var r in u)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("e663");var c=e("f0c5"),i=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/customForm/index-create-component',
    {
        'components/customForm/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("fd98"))
        })
    },
    [['components/customForm/index-create-component']]
]);
