(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/areaWindow/index"],{"0d34":function(e,t,s){},"28af5":function(e,t,s){"use strict";s.r(t);var d=s("8df7"),i=s("6cc6");for(var n in i)["default"].indexOf(n)<0&&function(e){s.d(t,e,(function(){return i[e]}))}(n);s("d2ed");var r=s("f0c5"),c=Object(r["a"])(i["default"],d["b"],d["c"],!1,null,"b0518102",null,!1,d["a"],void 0);t["default"]=c.exports},"6cc6":function(e,t,s){"use strict";s.r(t);var d=s("7b06"),i=s.n(d);for(var n in d)["default"].indexOf(n)<0&&function(e){s.d(t,e,(function(){return d[e]}))}(n);t["default"]=i.a},"7b06":function(e,t,s){"use strict";var d=s("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(s("448a")),n=s("a2c9"),r={},c={props:{display:{type:Boolean,default:!0},address:Array},data:function(){return{active:0,addressList:[],selectedArr:[],selectedIndex:-1,is_loading:!1,old:{scrollTop:0},scrollTop:0}},computed:{activeId:function(){return-1==this.selectedIndex?0:this.selectedArr[this.selectedIndex].id},showMore:function(){return!this.selectedArr.length||this.selectedArr[this.selectedArr.length-1].hasOwnProperty("children")}},watch:{address:function(e){this.selectedArr=e?(0,i.default)(e):[]},display:function(e){e?this.loadAddress(0):(this.addressList=[],this.selectedArr=this.address?(0,i.default)(this.address):[],this.selectedIndex=-1,this.is_loading=!1)}},mounted:function(){this.loadAddress(0)},methods:{change:function(e,t){this.selectedIndex!=t&&(-1===e&&(e=this.selectedArr.length?this.selectedArr[this.selectedArr.length-1].id:0),this.selectedIndex=t,this.loadAddress(e))},loadAddress:function(e){var t=this;r[e]?this.addressList=r[e]:(this.is_loading=!0,(0,n.getCityData)(e).then((function(s){t.is_loading=!1,r[e]=s.data,t.addressList=s.data})),this.goTop())},selected:function(e){this.is_loading||(this.selectedIndex>-1?(this.selectedArr.splice(this.selectedIndex+1,999),this.selectedArr[this.selectedIndex]=e,this.selectedIndex=-1):e.pid?this.selectedArr.push(e):this.selectedArr=[e],e.hasOwnProperty("children")?this.loadAddress(e.id):(this.$emit("submit",(0,i.default)(this.selectedArr)),this.$emit("changeClose")),this.goTop())},close:function(){this.$emit("changeClose")},scroll:function(e){this.old.scrollTop=e.detail.scrollTop},goTop:function(e){var t=this;this.scrollTop=this.old.scrollTop,this.$nextTick((function(){t.scrollTop=0}))}}};t.default=c},"8df7":function(e,t,s){"use strict";s.d(t,"b",(function(){return d})),s.d(t,"c",(function(){return i})),s.d(t,"a",(function(){}));var d=function(){var e=this.$createElement;this._self._c},i=[]},d2ed:function(e,t,s){"use strict";var d=s("0d34"),i=s.n(d);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/areaWindow/index-create-component',
    {
        'components/areaWindow/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("28af5"))
        })
    },
    [['components/areaWindow/index-create-component']]
]);
