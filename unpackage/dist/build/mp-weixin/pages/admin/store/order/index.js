(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/admin/store/order/index"],{2651:function(t,e,n){"use strict";n.r(e);var i=n("4d3c"),r=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=r.a},3209:function(t,e,n){"use strict";var i=n("f6c9"),r=n.n(i);r.a},"4d3c":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("2eee")),o=i(n("c973")),a=n("1bff"),s=n("0589"),u=n("7f43"),c={name:"order",components:{Loading:function(){n.e("components/Loading/index").then(function(){return resolve(n("ddb8"))}.bind(null,n)).catch(n.oe)},PriceChange:function(){n.e("components/PriceChange/index").then(function(){return resolve(n("f971"))}.bind(null,n)).catch(n.oe)}},props:{},data:function(){return{openErp:!1,orderList:[],type:"",page:1,limit:15,loading:!1,loaded:!1,change:!1,orderInfo:{},status:"",isRefund:0}},onLoad:function(t){this.type=t.type,this.getErpConfig()},onShow:function(){this.settype(this.type)},computed:{},methods:{statusChange:function(t){this.status=t},goDelivery:function(e){this.openErp||t.navigateTo({url:"/pages/admin/store/deliverGoods/index?id="+e.order_id+"&listId="+e.id+"&totalNum="+e.total_num+"&orderStatus="+e._status+"&comeType=1&productType="+e.product_type})},getErpConfig:function(){var t=this;(0,s.erpConfig)().then((function(e){t.openErp=e.data.open_erp})).catch((function(e){t.$util.Tips({title:e})}))},settype:function(t){this.type=t,this.init(),this.getList()},init:function(){this.orderList=[],this.page=1,this.loaded=!1,this.loading=!1},getList:function(){var t=this;if(!this.loading&&!this.loaded){this.loading=!0;var e={status:this.type,page:this.page,limit:this.limit},n="";n=-3==this.type?(0,a.getRefundlistApi)(e):(0,a.getOrderlistApi)(e),n.then((function(e){t.loading=!1,t.loaded=e.data.length<t.limit,t.orderList.push.apply(t.orderList,e.data),t.page+=1}))}},onReachBottom:function(){this.getList()},toDetail:function(e){t.navigateTo({url:"/pages/admin/store/orderDetail/index?id=".concat(e.id,"&types=").concat(this.type)})},modify:function(t,e,n){this.openErp&&1!=e||(this.change=!0,this.status=e.toString(),this.orderInfo=t,2==e&&(this.isRefund=n))},changeclose:function(t){this.change=t},offlinePay:function(t){var e=this;this.openErp||(0,a.getOrderOfflineApi)({order_id:t.order_id}).then((function(t){e.$util.Tips({title:t.msg,icon:"success"}),e.init(),e.getList()}),(function(t){e.$util.Tips(t)}))},objOrderRefund:function(t){var e=this;(0,a.OrderRefund)(t).then((function(t){e.change=!1,e.$util.Tips({title:t.msg}),e.init(),e.getList()}),(function(t){e.change=!1,e.$util.Tips({title:t})}))},savePrice:function(t){var e=this;return(0,o.default)(r.default.mark((function n(){var i,o,s,c,d,f;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i=e,o={},s=t.price,c=t.refund_price,i.orderInfo.refund_status,d=t.remark,o.order_id=i.orderInfo.order_id,0!=i.status){n.next=9;break}if((0,u.isMoney)(s)){n.next=5;break}return n.abrupt("return",i.$util.Tips({title:"请输入正确的金额"}));case 5:o.price=s,(0,a.getOrderPriceApi)(o).then((function(t){i.change=!1,i.$util.Tips({title:"改价成功",icon:"success"}),e.init(),e.getList()}),(function(t){i.change=!1,i.$util.Tips({title:"改价失败",icon:"none"})})),n.next=33;break;case 9:if(2!=i.status){n.next=21;break}if(!e.isRefund){n.next=18;break}if((0,u.isMoney)(c)){n.next=13;break}return n.abrupt("return",i.$util.Tips({title:"请输入正确的金额"}));case 13:o.price=c,o.type=t.type,e.objOrderRefund(o),n.next=19;break;case 18:1==t.type&&(0,a.storeRefundAgree)(e.orderInfo.id).then((function(t){i.change=!1,i.$util.Tips({title:t.msg}),i.init(),i.getList()})).catch((function(t){i.change=!1,i.$util.Tips({title:t})}));case 19:n.next=33;break;case 21:if(8!=i.status){n.next=27;break}o.type=t.type,o.refuse_reason=t.refuse_reason,e.objOrderRefund(o),n.next=33;break;case 27:if(d){n.next=29;break}return n.abrupt("return",e.$util.Tips({title:"请输入备注"}));case 29:o.remark=d,f="",f=-3==i.type?(0,a.getRefundMarkApi)(o):(0,a.getOrderreMarkApi)(o),f.then((function(t){i.change=!1,e.$util.Tips({title:t.msg,icon:"success"})})).catch((function(t){i.change=!1,i.$util.Tips({title:t})}));case 33:case"end":return n.stop()}}),n)})))()}}};e.default=c}).call(this,n("543d")["default"])},6446:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.orderList.length),i=n?t.__map(t.orderList,(function(e,n){var i=t.__get_orig(e),r=0==e.refund_status&&0!==t.type&&e.refund.length,o=0==e.refund_status&&0!==t.type&&e.refund.length,a=(0==e.refund_type||1==e.refund_type||5==e.refund_type)&&-3==t.type&&parseFloat(e.pay_price)>=0;return{$orig:i,g1:r,g2:o,m0:a}})):null;t.$mp.data=Object.assign({},{$root:{g0:n,l0:i}})},r=[]},9360:function(t,e,n){"use strict";n.r(e);var i=n("6446"),r=n("2651");for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);n("3209");var a=n("f0c5"),s=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,"19ee7f3c",null,!1,i["a"],void 0);e["default"]=s.exports},d809:function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("98d3");i(n("66fd"));var r=i(n("9360"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(r.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},f6c9:function(t,e,n){}},[["d809","common/runtime","common/vendor"]]]);