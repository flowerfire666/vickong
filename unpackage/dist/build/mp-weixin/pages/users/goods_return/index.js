(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/goods_return/index"],{"307f":function(t,n,e){"use strict";e.r(n);var r=e("71ae"),i=e.n(r);for(var u in r)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=i.a},3558:function(t,n,e){},"71ae":function(t,n,e){"use strict";var r=e("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("aa99"),u=e("23b4"),a=e("26cb"),s=r(e("6a7c")),o={components:{authorize:function(){e.e("components/Authorize").then(function(){return resolve(e("1fc0"))}.bind(null,e)).catch(e.oe)}},mixins:[s.default],data:function(){return{id:0,cartIds:[],refund_reason_wap_img:[],status:{},RefundArray:[],refundCartInfo:[],returnGoodsData:["仅退款","退货并退款"],refund_total_num:0,index:0,returnGoods:0,orderId:0,refundNumData:[],refund_num_index:0,productType:0}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&(this.refundGoodsInfo(),this.getRefundReason())},deep:!0}},onLoad:function(t){this.orderId=t.orderId,this.id=t.id,this.productType=parseInt(t.productType)||0,t.cartIds&&(this.cartIds=JSON.parse(t.cartIds)||[]),this.isLogin?(this.refundGoodsInfo(),this.getRefundReason()):(0,u.toLogin)()},methods:{refundGoodsInfo:function(){var t=this;(0,i.postRefundGoods)({id:this.id,cart_ids:this.cartIds}).then((function(n){var e=n.data;t.status=e._status,t.refundCartInfo=e.cartInfo,t.refundCartInfo.forEach((function(n){t.refund_total_num=t.$util.$h.Add(t.refund_total_num,n.cart_num)})),t.refundNumData=Array(t.refund_total_num).fill(0).map((function(t,n){return n+1}))})).catch((function(n){return t.$util.Tips({title:n})}))},getRefundReason:function(){var t=this;(0,i.ordeRefundReason)().then((function(n){t.$set(t,"RefundArray",n.data)}))},DelPic:function(t){var n=t;this.refund_reason_wap_img[n];this.refund_reason_wap_img.splice(n,1),this.$set(this,"refund_reason_wap_img",this.refund_reason_wap_img)},uploadpic:function(){var t=this;this.$util.uploadImageOne("upload/image",(function(n){t.refund_reason_wap_img.push(n.data.url),t.$set(t,"refund_reason_wap_img",t.refund_reason_wap_img)}))},subRefund:function(t){var n=this,e=t.detail.value;if(!e.refund_reason_wap_explain)return this.$util.Tips({title:"请输入备注说明"});var r=this.refundCartInfo;1===r.length&&(this.cartIds=[{cart_id:r[0].id,cart_num:this.refund_num_index+1}]),(0,i.returnGoodsSubmit)(this.id,{text:this.RefundArray[this.index]||"",refund_reason_wap_explain:e.refund_reason_wap_explain,refund_reason_wap_img:this.refund_reason_wap_img.join(","),refund_type:this.returnGoods?2:1,uni:this.orderId,cart_ids:this.cartIds}).then((function(t){return n.$util.Tips({title:"申请成功",icon:"success"},{tab:5,url:"/pages/users/user_return_list/index?isT=1"})})).catch((function(t){return n.$util.Tips({title:t})}))},bindPickerChange:function(t){this.$set(this,"index",t.detail.value)},returnGoodsChange:function(t){this.$set(this,"returnGoods",t.detail.value)},returnGoodsNum:function(t){this.$set(this,"refund_num_index",Number(t.detail.value))}}};n.default=o},7760:function(t,n,e){"use strict";e.r(n);var r=e("f603"),i=e("307f");for(var u in i)["default"].indexOf(u)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("789b");var a=e("f0c5"),s=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"2b79481f",null,!1,r["a"],void 0);n["default"]=s.exports},"789b":function(t,n,e){"use strict";var r=e("3558"),i=e.n(r);i.a},c911:function(t,n,e){"use strict";(function(t,n){var r=e("4ea4");e("98d3");r(e("66fd"));var i=r(e("7760"));t.__webpack_require_UNI_MP_PLUGIN__=e,n(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},f603:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var r=function(){var t=this.$createElement,n=(this._self._c,1!==this.refundCartInfo.length||1==this.refund_total_num),e=this.refund_reason_wap_img.length;this.$mp.data=Object.assign({},{$root:{g0:n,g1:e}})},i=[]}},[["c911","common/runtime","common/vendor"]]]);