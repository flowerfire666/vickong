(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order_addcart/order_addcart"],{"0162":function(t,i,e){"use strict";var n=e("87c1"),o=e.n(n);o.a},"1cae":function(t,i,e){"use strict";e.r(i);var n=e("a6dd"),o=e("8c90");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("9f25"),e("0162");var c=e("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"f42d7056",null,!1,n["a"],void 0);i["default"]=s.exports},"259d":function(t,i,e){"use strict";(function(t,n){var o=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=o(e("448a")),c=e("aa99"),s=e("a2c9"),r=e("a612"),u=e("23b4"),l=e("26cb"),d=o(e("6a7c")),h=e("771e"),f=e("7f43"),p={components:{couponListWindow:function(){Promise.all([e.e("common/vendor"),e.e("components/couponListWindow/index")]).then(function(){return resolve(e("fe72"))}.bind(null,e)).catch(e.oe)},pageFooter:function(){Promise.all([e.e("common/vendor"),e.e("components/pageFooter/index")]).then(function(){return resolve(e("9a5a"))}.bind(null,e)).catch(e.oe)},recommend:function(){Promise.all([e.e("common/vendor"),e.e("components/recommend/index")]).then(function(){return resolve(e("6c16"))}.bind(null,e)).catch(e.oe)},productWindow:function(){e.e("components/productWindow/index").then(function(){return resolve(e("bc64"))}.bind(null,e)).catch(e.oe)},cartDiscount:function(){e.e("components/cartDiscount/index").then(function(){return resolve(e("ce6d"))}.bind(null,e)).catch(e.oe)},authorize:function(){e.e("components/Authorize").then(function(){return resolve(e("1fc0"))}.bind(null,e)).catch(e.oe)}},mixins:[d.default],data:function(){return{isTips:!1,coupon:{coupon:!1,type:-1,list:[],count:[],goFrom:1},discountInfo:{discount:!1,deduction:{},coupon:{}},cartCount:0,goodsHidden:!0,footerswitch:!0,hostProduct:[],cartList:{valid:[],invalid:[]},isAllSelect:!1,selectValue:[],selectCountPrice:0,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,loading:!1,loadend:!1,loadTitle:"没有更多内容啦~",page:1,limit:20,loadingInvalid:!1,loadendInvalid:!1,loadTitleInvalid:"加载更多",pageInvalid:1,limitInvalid:20,attr:{cartAttr:!1,productAttr:[],productSelect:{}},productValue:[],storeInfo:{},attrValue:"",attrTxt:"请选择",cartId:0,product_id:0,sysHeight:0,footerSee:!1,newData:{},activeRouter:"",isCart:0}},computed:(0,l.mapGetters)(["isLogin"]),onLoad:function(t){0==this.isLogin&&(0,u.toLogin)();var i=getCurrentPages(),e=i[i.length-1].route;this.activeRouter="/"+e},onShow:function(){var i=this;t.pageScrollTo({duration:0,scrollTop:0}),(0,h.getNavigation)().then((function(e){i.newData=e.data,i.newData.status&&i.newData.status.status?t.hideTabBar():t.showTabBar()})),1==this.isLogin&&(this.hotPage=1,this.hostProduct=[],this.hotScroll=!1,this.getHostProduct(),this.loadend=!1,this.page=1,this.cartList.valid=[],this.getCartList(),this.loadendInvalid=!1,this.pageInvalid=1,this.cartList.invalid=[],this.getInvalidList(),this.getCartNum(),this.goodsHidden=!0,this.footerswitch=!0,this.hostProduct=[],this.hotScroll=!1,this.hotPage=1,this.hotLimit=10,this.isAllSelect=!1,this.selectValue=[],this.selectCountPrice=0,this.cartCount=0,this.isShowAuth=!1)},methods:{tabCouponType:function(t){this.$set(this.coupon,"type",t),this.getCouponList(t)},ChangCouponsUseState:function(t){this.coupon.list[t].is_use=!0,this.$set(this.coupon,"list",this.coupon.list),this.$set(this.coupon,"coupon",!1)},ChangCouponsClone:function(){this.$set(this.coupon,"coupon",!1)},getCouponList:function(t){var i=this,e={page:1,limit:20,product_id:i.id};void 0===t&&null===t||(e.type=t),(0,s.getCoupons)(e).then((function(e){if(i.$set(i.coupon,"count",e.data.count),void 0===t||null===t){var n=(0,a.default)(i.coupon.count),o="",c=n.findIndex((function(t){return t})),s=i.coupon.count,r=[],u=0;s.forEach((function(t,i){0===t?u=i:r.push(t)})),o=3==r.length?2:2==r.length?2===u?1:2:s.findIndex((function(t){return t===n[c]})),i.$set(i.coupon,"type",o),i.getCouponList(o)}else i.$set(i.coupon,"list",e.data.list)}))},couponTap:function(){!1===this.isLogin?(0,u.toLogin)():(this.getCouponList(),this.$set(this.coupon,"coupon",!0))},goCollect:function(i){t.navigateTo({url:"/pages/goods_list/index?sid=0&title=默认&promotions_type=".concat(i.promotions_type,"&promotions_id=").concat(i.id)})},myDiscount:function(){this.discountInfo.discount=!1},discountTap:function(){this.coupon.coupon=!1,this.discountInfo.discount=!this.discountInfo.discount},authColse:function(t){this.isShowAuth=t},reGoCat:function(){var t=this,i=t.productValue[this.attrValue];if(t.attr.productAttr.length&&void 0===i)return t.$util.Tips({title:"产品库存不足，请选择其它"});var e={id:t.cartId,product_id:t.product_id,num:t.attr.productSelect.cart_num,unique:void 0!==t.attr.productSelect?t.attr.productSelect.unique:""};(0,c.getResetCart)(e).then((function(i){t.attr.cartAttr=!1,t.$util.Tips({title:"添加购物车成功",success:function(){t.loadend=!1,t.page=1,t.cartList.valid=[],t.getCartList(),t.getCartNum()}})})).catch((function(i){return t.$util.Tips({title:i.msg})}))},onMyEvent:function(){this.$set(this.attr,"cartAttr",!1)},cartAttr:function(t){this.isCart=1,this.getGoodsDetails(t)},reElection:function(t){this.getGoodsDetails(t)},getGoodsDetails:function(i){t.showLoading({title:"加载中",mask:!0});var e=this;e.cartId=i.id,e.product_id=i.product_id,(0,r.getProductDetail)(i.product_id).then((function(i){t.hideLoading(),e.attr.cartAttr=!0;var n=i.data.storeInfo;e.$set(e,"storeInfo",n),e.$set(e.attr,"productAttr",i.data.productAttr),e.$set(e,"productValue",i.data.productValue),e.DefaultSelect()})).catch((function(i){t.hideLoading()}))},ChangeAttr:function(t){var i=this.productValue[t];i&&i.stock>0?(this.$set(this.attr.productSelect,"image",i.image),this.$set(this.attr.productSelect,"price",i.price),this.$set(this.attr.productSelect,"stock",i.stock),this.$set(this.attr.productSelect,"unique",i.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",t),this.$set(this,"attrTxt","已选择")):(this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},DefaultSelect:function(){var t=this,i=this.attr.productAttr,e=[],n=0,o=[];for(var a in this.productValue)if(this.productValue[a].stock>0){e=this.attr.productAttr.length?a.split(","):[];break}if(this.isCart){this.cartList.valid.forEach((function(i){i.valid.forEach((function(i){i.id==t.cartId&&(o=i.productInfo.attrInfo.suk.split(","))}))}));var c=o.join(",");n=this.productValue[c].stock;for(var s=0;s<i.length;s++)this.$set(i[s],"index",n?o[s]:e[s])}else for(var r=0;r<i.length;r++)this.$set(i[r],"index",e[r]);var u=this.productValue[this.isCart&&n?o.join(","):e.join(",")];u&&i.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",u.image),this.$set(this.attr.productSelect,"price",u.price),this.$set(this.attr.productSelect,"stock",u.stock),this.$set(this.attr.productSelect,"unique",u.unique),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",e.sort().join(",")),this.$set(this,"attrTxt","已选择")):!u&&i.length?(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",0),this.$set(this.attr.productSelect,"unique",""),this.$set(this.attr.productSelect,"cart_num",0),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择")):u||i.length||(this.$set(this.attr.productSelect,"store_name",this.storeInfo.store_name),this.$set(this.attr.productSelect,"image",this.storeInfo.image),this.$set(this.attr.productSelect,"price",this.storeInfo.price),this.$set(this.attr.productSelect,"stock",this.storeInfo.stock),this.$set(this.attr.productSelect,"unique",this.storeInfo.unique||""),this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"attrValue",""),this.$set(this,"attrTxt","请选择"))},attrVal:function(t){this.$set(this.attr.productAttr[t.indexw],"index",this.attr.productAttr[t.indexw].attr_values[t.indexn])},ChangeCartNum:function(t){var i=this.productValue[this.attrValue];if(void 0!==i||this.attr.productAttr.length||(i=this.attr.productSelect),void 0!==i){var e=i.stock||0,n=this.attr.productSelect;t?(n.cart_num++,n.cart_num>e&&(this.$set(this.attr.productSelect,"cart_num",e||1),this.$set(this,"cart_num",e||1))):(n.cart_num--,n.cart_num<1&&(this.$set(this.attr.productSelect,"cart_num",1),this.$set(this,"cart_num",1)))}},iptCartNum:function(t){this.$set(this.attr.productSelect,"cart_num",t)},subDel:function(t){var i=this,e=i.selectValue;if(!(e.length>0))return i.$util.Tips({title:"请选择产品"});(0,c.cartDel)(e).then((function(t){i.loadend=!1,i.page=1,i.cartList.valid=[],i.getCartList(),i.getCartNum()}))},getSelectValueProductId:function(){var t=this.cartList.valid,i=this.selectValue,e=[];if(i.length>0)for(var n in t)for(var o in t[n].valid)this.inArray(t[n].valid[o].id,i)&&e.push(t[n].valid[o].product_id);return e},subCollect:function(t){var i=this,e=i.selectValue;if(!(e.length>0))return i.$util.Tips({title:"请选择产品"});i.getSelectValueProductId();(0,r.collectAll)(i.getSelectValueProductId().join(",")).then((function(t){return i.$util.Tips({title:t.msg,icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},subOrder:function(i){var e=this,n=e.selectValue;if(!(n.length>0))return e.$util.Tips({title:"请选择产品"});var o=this.discountInfo.coupon;if("[object Object]"!==Object.prototype.toString.call(o)||o.used){var a="";a="[object Array]"===Object.prototype.toString.call(o)?"/pages/users/order_confirm/index?cartId="+n.join(","):"/pages/users/order_confirm/index?cartId="+n.join(",")+"&couponId="+o.used.id+"&couponTitle="+o.coupon_title,t.navigateTo({url:a})}else(0,s.setCouponReceive)(this.discountInfo.coupon.id).then((function(i){t.navigateTo({url:"/pages/users/order_confirm/index?cartId="+n.join(",")+"&couponId="+i.data.id+"&couponTitle="+o.coupon_title})})).catch((function(t){return e.$util.Tips({title:t})}))},checkboxAllChange:function(t){var i=t.detail.value;i.length>0?this.setAllSelectValue(1):this.setAllSelectValue(0)},setAllSelectValue:function(t){var i=this,e=[],n=i.cartList.valid;n.length>0&&(n.forEach((function(n){n.valid.forEach((function(n){t?(i.footerswitch?n.attrStatus&&!n.is_gift?(n.checked=!0,e.push(n.id)):n.checked=!1:(n.checked=!0,e.push(n.id)),i.isAllSelect=!0):(n.checked=!1,i.isAllSelect=!1)}))})),i.$set(i.cartList,"valid",n),i.selectValue=e,i.switchSelect())},checkboxChange:function(t){var i=this,e=t.detail.value,n=i.cartList.valid,o=[],a=[],c=[],s=0;n.forEach((function(t){t.valid.forEach((function(t){s+=1,i.inArray(t.id,e)?i.footerswitch?t.attrStatus&&!t.is_gift?(t.checked=!0,o.push(t)):t.checked=!1:(t.checked=!0,o.push(t)):(t.checked=!1,a.push(t))}))})),i.footerswitch&&(c=a.filter((function(t){return!t.attrStatus||t.is_gift}))),i.$set(i.cartList,"valid",n),i.isAllSelect=s===o.length+c.length,i.selectValue=e,i.switchSelect()},inArray:function(t,i){for(var e in i)if(i[e]==t)return!0;return!1},switchSelect:function(){var t=this.cartList.valid,i=this.selectValue,e=0;if(i.length<1)this.selectCountPrice=e;else{for(var n in t)for(var o in t[n].valid)this.inArray(t[n].valid[o].id,i)&&(e=this.$util.$h.Add(e,this.$util.$h.Mul(t[n].valid[o].cart_num,t[n].valid[o].truePrice)));this.selectCountPrice=e}},subCart:(0,f.Debounce)((function(t,i){var e=this,n=!1,o=e.cartList.valid[t].valid[i];o.cart_num=Number(o.cart_num)-1,o.cart_num<1&&(n=!0),o.cart_num<=1?(o.cart_num=1,o.numSub=!0):(o.numSub=!1,o.numAdd=!1),0==n&&e.setCartNum(o.id,o.cart_num,(function(n){e.cartList.valid[t].valid[i]=o,e.getCartNum(),e.switchSelect(),e.loadend=!1,e.page=1,e.cartList.valid=[],e.getCartList()}))})),addCart:(0,f.Debounce)((function(t,i){var e=this,n=e.cartList.valid[t].valid[i];n.cart_num=Number(n.cart_num)+1;var o=n.productInfo;o.hasOwnProperty("attrInfo")&&n.cart_num>=n.productInfo.attrInfo.stock?(n.cart_num=n.productInfo.attrInfo.stock,n.numAdd=!0,n.numSub=!1):(n.numAdd=!1,n.numSub=!1),e.setCartNum(n.id,n.cart_num,(function(o){e.cartList.valid[t].valid[i]=n,e.getCartNum(),e.switchSelect(),e.loadend=!1,e.page=1,e.cartList.valid=[],e.getCartList()}))})),setCartNum:function(t,i,e){(0,c.changeCartNum)(t,i).then((function(t){e&&e(t.data)}))},getCartNum:function(){var t=this,i=this;(0,c.getCartCounts)().then((function(e){i.cartCount=e.data.count,t.$store.commit("indexData/setCartNum",e.data.count>99?"..":e.data.count),e.data.count>0?n.setTabBarBadge({index:2,text:e.data.count+""}):n.hideTabBarRedDot({index:2})}))},getCartList:function(){var t=this,i=this;if(this.loadend)return!1;if(this.loading)return!1;var e={page:i.page,limit:i.limit,status:1};(0,c.getCartList)(e).then((function(e){t.discountInfo.deduction=e.data.deduction,t.discountInfo.coupon=e.data.coupon,t.isTips=!1;var n=e.data.valid,o=n.map((function(t){return{valid:t.cart,promotions:t.promotions}})),a=o.length<i.limit,c=i.$util.SplitArray(o,i.cartList.valid),s=[];if(c.length>0)for(var r in c)for(var u in c[r].promotions.length>1&&(i.isTips=!0),c[r].valid){1==c[r].valid[u].cart_num?c[r].valid[u].numSub=!0:c[r].valid[u].numSub=!1;var l=c[r].valid[u].productInfo;l.hasOwnProperty("attrInfo")&&c[r].valid[u].cart_num==c[r].valid[u].productInfo.attrInfo.stock||c[r].valid[u].cart_num==c[r].valid[u].productInfo.stock?c[r].valid[u].numAdd=!0:c[r].valid[u].numAdd=!1,c[r].valid[u].attrStatus&&!c[r].valid[u].is_gift?(c[r].valid[u].checked=!0,s.push(c[r].valid[u].id)):t.footerswitch?c[r].valid[u].checked=!1:c[r].valid[u].checked=!0}i.$set(i.cartList,"valid",e.data.valid.length?c:[]),i.loadend=!0,i.loadTitle=a?"没有更多内容啦~":"加载更多",i.page=i.page+1,i.loading=!1,i.selectValue=s;var d=[];c.forEach((function(t){t.valid.forEach((function(t){t.attrStatus&&!t.is_gift&&d.push(t)}))})),i.isAllSelect=d.length==s.length&&d.length,i.switchSelect()})).catch((function(t){i.loading=!1,i.loadTitle="加载失败",i.$util.Tips({title:t})}))},getInvalidList:function(){var t=this;if(this.loadendInvalid)return!1;if(this.loadingInvalid)return!1;var i={page:t.pageInvalid,limit:t.limitInvalid,status:0};(0,c.getCartList)(i).then((function(i){var e=i.data,n=e.invalid,o=n.length<t.limitInvalid,a=t.$util.SplitArray(n,t.cartList.invalid);t.$set(t.cartList,"invalid",a),t.loadendInvalid=o,t.loadTitleInvalid=o?"没有更多内容啦~":"加载更多",t.pageInvalid=t.pageInvalid+1,t.loadingInvalid=!1})).catch((function(i){t.loadingInvalid=!1,t.loadTitleInvalid="加载更多"}))},getHostProduct:function(){var t=this;t.hotScroll||(0,r.getProductHot)(t.hotPage,t.hotLimit).then((function(i){t.hotPage++,t.hotScroll=i.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(i.data)}))},goodsOpen:function(){this.goodsHidden=!this.goodsHidden},goRouter:function(i){var e=getCurrentPages(),n=e[e.length-1].$page.fullPath;i.link!=n&&t.switchTab({url:i.link,fail:function(e){t.redirectTo({url:i.link})}})},manage:function(){var t=this;t.footerswitch=!t.footerswitch;var i=[],e=[],n=0;t.cartList.valid.forEach((function(o){o.valid.forEach((function(o){n+=1,t.footerswitch?o.attrStatus&&!o.is_gift?o.checked&&i.push(o.id):(o.checked=!1,e.push(o)):o.checked&&i.push(o.id)}))})),t.footerswitch?t.isAllSelect=n===i.length+e.length:t.isAllSelect=n===i.length,t.selectValue=i,t.switchSelect()},unsetCart:function(){for(var t=this,i=[],e=0,n=t.cartList.invalid.length;e<n;e++)i.push(t.cartList.invalid[e].id);(0,c.cartDel)(i).then((function(i){t.$util.Tips({title:"清除成功"}),t.$set(t.cartList,"invalid",[]),t.getCartNum()})).catch((function(t){}))}},onReachBottom:function(){this.cartList.invalid.length&&this.getInvalidList(),0==this.cartList.valid.length&&0==this.cartList.invalid.length&&this.getHostProduct()}};i.default=p}).call(this,e("543d")["default"],e("bc2e")["default"])},"5d5d":function(t,i,e){},"87c1":function(t,i,e){},"8c90":function(t,i,e){"use strict";e.r(i);var n=e("259d"),o=e.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(a);i["default"]=o.a},"9f25":function(t,i,e){"use strict";var n=e("5d5d"),o=e.n(n);o.a},a6dd:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,e=(t._self._c,t.cartList.valid.length>0||t.cartList.invalid.length>0),n=t.cartList.valid.length>0||t.cartList.invalid.length>0,o=n?Object.prototype.toString.call(t.discountInfo.coupon):null,a=n?t.cartList.invalid.length:null,c=n?t.cartList.invalid.length&&t.loadend:null,s=0==t.cartList.valid.length&&0==t.cartList.invalid.length&&t.loadend,r=0==t.cartList.valid.length&&0==t.cartList.invalid.length&&t.loadend,u=t.cartList.valid.length,l=u>0?t.selectValue.length:null,d=u>0&&1==t.footerswitch?t.$util.$h.Sub(t.selectCountPrice,t.discountInfo.deduction.coupon_price):null,h=u>0&&1==t.footerswitch&&!(d<=0)?t.$util.$h.Sub(t.selectCountPrice,t.discountInfo.deduction.coupon_price):null,f=u>0&&1==t.footerswitch?Object.prototype.toString.call(t.discountInfo.coupon):null,p=u>0&&1==t.footerswitch?"[object Array]"===Object.prototype.toString.call(t.discountInfo.coupon)||t.discountInfo.coupon.used:null;t.$mp.data=Object.assign({},{$root:{g0:e,g1:n,g2:o,g3:a,g4:c,g5:s,g6:r,g7:u,g8:l,g9:d,g10:h,g11:f,g12:p}})},o=[]},e84c:function(t,i,e){"use strict";(function(t,i){var n=e("4ea4");e("98d3");n(e("66fd"));var o=n(e("1cae"));t.__webpack_require_UNI_MP_PLUGIN__=e,i(o.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])}},[["e84c","common/runtime","common/vendor"]]]);