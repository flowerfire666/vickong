(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/wmf-code/components/w-qrcode/index"],{7207:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this.$createElement;this._self._c},r=[]},8279:function(t,e,i){"use strict";i.r(e);var n=i("7207"),r=i("ae49");for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);var s=i("f0c5"),c=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=c.exports},ae49:function(t,e,i){"use strict";i.r(e);var n=i("e6ce"),r=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=r.a},e6ce:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(i("2eee")),o=n(i("c973")),s=n(i("9523")),c=i("85dc"),a=i("d042");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){(0,s.default)(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={name:"WQrcode",props:{options:{type:Object,required:!0,default:function(){return{}}}},data:function(){return{destHeight:0,destWidth:0,width:0,height:0,listCode:[],id:(0,a.getUUid)()}},mounted:function(){var t=this;this.height=this.width=(0,c.GetPx)(this.options.size)+"px",this.destHeight=this.destWidth=(0,c.GetPx)(this.options.size)*(0,c.GetPixelRatio)()+"px",this.SpecialTreatment(this.options),this.$nextTick((function(){t.generateCode()}))},watch:{options:{deep:!0,handler:function(t){var e=this;this.height=this.width=(0,c.GetPx)(t.size)+"px",this.destHeight=this.destWidth=(0,c.GetPx)(t.size)*(0,c.GetPixelRatio)()+"px",this.SpecialTreatment(t),setTimeout((function(){e.generateCode()}),50)}}},methods:{longtap:function(t){this.$emit("press",t)},handleError:function(t){this.$emit("error",t.detail)},SpecialTreatment:function(t){var e=(0,a.deepClone)(t);e.id=this.id,this.listCode=[e]},generateCode:function(){var t=this;try{var e=d(d({},this.options),{},{source:(0,a.platform)(),id:this.id,ctx:this});(0,c.QRCode)(e,(function(e){t.$emit("generate",e)}))}catch(i){}},GetCodeImg:function(){var t=this;return(0,o.default)(r.default.mark((function e(){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.GetCodeImg)({id:t.id,width:t.options.size,height:t.options.size,ctx:t});case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e["catch"](0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})))()}}};e.default=f}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/wmf-code/components/w-qrcode/index-create-component',
    {
        'uni_modules/wmf-code/components/w-qrcode/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8279"))
        })
    },
    [['uni_modules/wmf-code/components/w-qrcode/index-create-component']]
]);
