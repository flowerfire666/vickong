(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/combination"],{"0979":function(t,n,i){"use strict";i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){}));var o=function(){var t=this.$createElement,n=(this._self._c,this.combinationList.length);this.$mp.data=Object.assign({},{$root:{g0:n}})},a=[]},"0b8c":function(t,n,i){"use strict";i.r(n);var o=i("3422"),a=i.n(o);for(var e in o)["default"].indexOf(e)<0&&function(t){i.d(n,t,(function(){return o[t]}))}(e);n["default"]=a.a},3422:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i("a2c9"),a=i("218c"),e={name:"combination",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{pinkInfo:"",combinationList:[],numConfig:this.dataConfig.numConfig.val,txtColor:this.dataConfig.txtColor.color[0].item,themeColor:this.dataConfig.themeColor.color[0].item,mbConfig:this.dataConfig.mbConfig.val,lrConfig:this.dataConfig.lrConfig.val,imgUrl:this.dataConfig.imgConfig.url,priceShow:this.dataConfig.priceShow.val,bntShow:this.dataConfig.bntShow.val,titleShow:this.dataConfig.titleShow.val,pinkShow:this.dataConfig.pinkShow.val,joinShow:this.dataConfig.joinShow.val,prConfig:this.dataConfig.prConfig.val,bgColor:this.dataConfig.bgColor.color[0].item,conStyle:this.dataConfig.conStyle.type}},created:function(){},mounted:function(){this.pink(),this.getCombinationList()},methods:{getCombinationList:function(){var t=this,n=t.$config.LIMIT,i={page:1,limit:t.numConfig>=n?n:t.numConfig};(0,a.getCombinationList)(i).then((function(n){t.combinationList=n.data})).catch((function(n){return t.$util.Tips({title:n})}))},pink:function(){var t=this;(0,o.pink)().then((function(n){t.pinkInfo=n.data}))}}};n.default=e},"7b14":function(t,n,i){"use strict";i.r(n);var o=i("0979"),a=i("0b8c");for(var e in a)["default"].indexOf(e)<0&&function(t){i.d(n,t,(function(){return a[t]}))}(e);i("9d62");var f=i("f0c5"),c=Object(f["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=c.exports},"9d62":function(t,n,i){"use strict";var o=i("bc8d"),a=i.n(o);a.a},bc8d:function(t,n,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/combination-create-component',
    {
        'pages/index/components/combination-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7b14"))
        })
    },
    [['pages/index/components/combination-create-component']]
]);
