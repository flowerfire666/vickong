(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/lottery/components/noticeBar"],{3622:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={name:"noticeBar",data:function(){return{animateUp:!1,listData:JSON.parse(JSON.stringify(this.showMsg)),timer:null}},props:{showMsg:{type:Array}},mounted:function(){this.timer=setInterval(this.scrollAnimate,2500)},methods:{scrollAnimate:function(){var t=this;this.animateUp=!0,setTimeout((function(){t.listData.push(t.listData[0]),t.listData.shift(),t.animateUp=!1}),500)}},destroyed:function(){clearInterval(this.timer)}};n.default=a},"5b89":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},i=[]},"654a":function(t,n,e){"use strict";var a=e("997a"),i=e.n(a);i.a},"997a":function(t,n,e){},a075:function(t,n,e){"use strict";e.r(n);var a=e("3622"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},ce58:function(t,n,e){"use strict";e.r(n);var a=e("5b89"),i=e("a075");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("654a");var s=e("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"66e4c842",null,!1,a["a"],void 0);n["default"]=u.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/activity/lottery/components/noticeBar-create-component',
    {
        'pages/activity/lottery/components/noticeBar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ce58"))
        })
    },
    [['pages/activity/lottery/components/noticeBar-create-component']]
]);
