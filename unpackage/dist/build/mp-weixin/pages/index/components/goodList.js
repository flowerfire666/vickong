(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/components/goodList"],{1366:function(t,o,e){"use strict";e.r(o);var i=e("dbc7"),n=e("7bc7");for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(o,t,(function(){return n[t]}))}(a);e("89d7");var l=e("f0c5"),r=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);o["default"]=r.exports},7466:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e("a612"),n={name:"goodList",props:{dataConfig:{type:Object,default:function(){}},isSortType:{type:String|Number,default:0}},data:function(){return{tempArr:[],mbConfig:this.dataConfig.mbConfig.val,numConfig:this.dataConfig.numConfig.val,themeColor:this.dataConfig.themeColor.color[0].item,itemStyle:this.dataConfig.itemStyle.type,sortType:this.dataConfig.goodsSort.type,type:this.dataConfig.tabConfig.tabVal||0,selectId:this.dataConfig.selectConfig.activeValue,productIds:this.dataConfig.goodsList.ids||[],opriceShow:this.dataConfig.opriceShow.val,priceShow:this.dataConfig.priceShow.val,titleShow:this.dataConfig.titleShow.val,couponShow:this.dataConfig.couponShow.val,prConfig:this.dataConfig.prConfig.val,bgStyle:this.dataConfig.bgStyle.type,conStyle:this.dataConfig.conStyle.type,fontColor:this.dataConfig.fontColor.color?this.dataConfig.fontColor.color[0].item:"",labelColor:this.dataConfig.labelColor.color?this.dataConfig.labelColor.color[0].item:""}},created:function(){},mounted:function(){this.productslist()},methods:{productslist:function(){var t=this,o=(this.$config.LIMIT,{});o=1==this.type?{ids:this.productIds.join(",")}:{priceOrder:2==this.sortType?"desc":"",salesOrder:1==this.sortType?"desc":"",selectId:this.selectId[this.selectId.length-1]||0,limit:this.numConfig},(0,i.getProductslist)(o).then((function(o){t.tempArr=o.data}))},goDetail:function(t){this.$emit("detail",t)}}};o.default=n},"7bc7":function(t,o,e){"use strict";e.r(o);var i=e("7466"),n=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(o,t,(function(){return i[t]}))}(a);o["default"]=n.a},"89d7":function(t,o,e){"use strict";var i=e("e977"),n=e.n(i);n.a},dbc7:function(t,o,e){"use strict";e.d(o,"b",(function(){return i})),e.d(o,"c",(function(){return n})),e.d(o,"a",(function(){}));var i=function(){var t=this,o=t.$createElement,e=(t._self._c,t.tempArr.length),i=e&&0==t.itemStyle?t.tempArr.length:null,n=e&&1==t.itemStyle?t.tempArr.length:null,a=e&&2==t.itemStyle?t.tempArr.length:null,l=3==t.itemStyle&&t.tempArr.length;t.$mp.data=Object.assign({},{$root:{g0:e,g1:i,g2:n,g3:a,g4:l}})},n=[]},e977:function(t,o,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/components/goodList-create-component',
    {
        'pages/index/components/goodList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1366"))
        })
    },
    [['pages/index/components/goodList-create-component']]
]);
