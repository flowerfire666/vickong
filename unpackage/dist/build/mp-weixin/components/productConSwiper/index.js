(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/productConSwiper/index"],{"0a57":function(t,n,e){"use strict";var i=e("17aa"),o=e.n(i);o.a},"17aa":function(t,n,e){},"1b6f":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},o=[]},"2f98":function(t,n,e){"use strict";e.r(n);var i=e("e5cc"),o=e.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=o.a},"6a26":function(t,n,e){"use strict";e.r(n);var i=e("1b6f"),o=e("2f98");for(var u in o)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("0a57");var a=e("f0c5"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"6b421cd3",null,!1,i["a"],void 0);n["default"]=r.exports},e5cc:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{imgUrls:{type:Array,default:function(){return[]}},videoline:{type:String,value:""}},data:function(){return{indicatorDots:!0,circular:!0,autoplay:!0,interval:3e3,duration:500,currents:"1",controls:!0,isPlay:!0,videoContext:""}},mounted:function(){this.videoline&&this.imgUrls.shift(),this.videoContext=t.createVideoContext("myVideo",this)},methods:{videoPause:function(t){},bindPause:function(){this.videoContext.play(),this.$set(this,"controls",!1),this.autoplay=!1},change:function(t){this.$set(this,"currents",t.detail.current+1)}}};n.default=e}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/productConSwiper/index-create-component',
    {
        'components/productConSwiper/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6a26"))
        })
    },
    [['components/productConSwiper/index-create-component']]
]);
