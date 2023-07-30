(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extension/components/noticeBar"],{"11f6":function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},a=[]},2379:function(t,n,e){"use strict";e.r(n);var i=e("e4c3"),a=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},5817:function(t,n,e){"use strict";var i=e("72fe"),a=e.n(i);a.a},"61f3":function(t,n,e){"use strict";e.r(n);var i=e("11f6"),a=e("2379");for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("5817");var s=e("f0c5"),u=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"8e943d9a",null,!1,i["a"],void 0);n["default"]=u.exports},"72fe":function(t,n,e){},e4c3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"noticeBar",data:function(){return{animateUp:!1,listData:JSON.parse(JSON.stringify(this.showMsg)),timer:null}},props:{showMsg:{type:Array}},mounted:function(){this.timer=setInterval(this.scrollAnimate,2500)},methods:{scrollAnimate:function(){var t=this;this.animateUp=!0,setTimeout((function(){t.listData.push(t.listData[0]),t.listData.shift(),t.animateUp=!1}),500)}},destroyed:function(){clearInterval(this.timer)}};n.default=i}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/extension/components/noticeBar-create-component',
    {
        'pages/extension/components/noticeBar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("61f3"))
        })
    },
    [['pages/extension/components/noticeBar-create-component']]
]);
