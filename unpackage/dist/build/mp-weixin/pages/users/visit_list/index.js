(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/visit_list/index"],{3288:function(t,i,e){"use strict";var s=e("c510"),n=e.n(s);n.a},a946:function(t,i,e){"use strict";(function(t,i){var s=e("4ea4");e("98d3");s(e("66fd"));var n=s(e("e569"));t.__webpack_require_UNI_MP_PLUGIN__=e,i(n.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},b079:function(t,i,e){"use strict";e.r(i);var s=e("eca1"),n=e.n(s);for(var o in s)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(o);i["default"]=n.a},c510:function(t,i,e){},e569:function(t,i,e){"use strict";e.r(i);var s=e("e5f7"),n=e("b079");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("3288");var c=e("f0c5"),l=Object(c["a"])(n["default"],s["b"],s["c"],!1,null,null,null,!1,s["a"],void 0);i["default"]=l.exports},e5f7:function(t,i,e){"use strict";e.d(i,"b",(function(){return s})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){}));var s=function(){var t=this,i=t.$createElement,e=(t._self._c,t.visitList.length),s=e?t.__map(t.visitList,(function(i,e){var s=t.__get_orig(i),n=t.__map(i.picList,(function(i,e){var s=t.__get_orig(i),n=t.isShowChecked?i.id.toString():null;return{$orig:s,g1:n}}));return{$orig:s,l0:n}})):null,n=e?null:!t.visitList.length&&2==t.page;t.$mp.data=Object.assign({},{$root:{g0:e,l1:s,g2:n}})},n=[]},eca1:function(t,i,e){"use strict";(function(t){var s=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("a612"),o=e("26cb"),c=e("23b4"),l=s(e("6a7c")),a={components:{recommend:function(){Promise.all([e.e("common/vendor"),e.e("components/recommend/index")]).then(function(){return resolve(e("6c16"))}.bind(null,e)).catch(e.oe)},authorize:function(){e.e("components/Authorize").then(function(){return resolve(e("1fc0"))}.bind(null,e)).catch(e.oe)},home:function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("47cf"))}.bind(null,e)).catch(e.oe)}},mixins:[l.default],data:function(){return{isShowChecked:0,count:0,times:[],isAllSelect:!1,hostProduct:[],loadTitle:"加载更多",loading:!1,loadend:!1,visitList:[],limit:21,page:1,isAuto:!1,isShowAuth:!1,hotScroll:!1,hotPage:1,hotLimit:10,isItemAll:[]}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?(this.loadend=!1,this.page=1,this.visitList=[],this.get_user_visit_list(),this.get_host_product()):(0,c.toLogin)()},onShow:function(){this.times=[],this.loadend=!1,this.page=1,this.visitList=[],this.get_user_visit_list()},methods:{goDetails:function(i){if(this.isShowChecked||!i.is_show)return!1;t.navigateTo({url:"/pages/goods_details/index?id="+i.product_id})},switchTap:function(){this.isShowChecked=!this.isShowChecked},collect:function(){var t=this,i=[];if(this.visitList.forEach((function(t){t.picList.forEach((function(t){t.checked&&i.push(t.product_id)}))})),!i.length)return this.$util.Tips({title:"请选择收藏商品"});(0,n.collectAdd)(i).then((function(i){return t.$util.Tips({title:i.msg})}))},del:function(){var t=this,i=[];if(this.visitList.forEach((function(t){t.picList.forEach((function(t){t.checked&&i.push(t.product_id)}))})),!i.length)return this.$util.Tips({title:"请选择删除商品"});(0,n.deleteVisitList)({ids:i}).then((function(i){return t.times=[],t.loadend=!1,t.page=1,t.$set(t,"visitList",[]),t.get_user_visit_list(),t.$util.Tips({title:i.msg})}))},picCheckbox:function(t,i){var e=t.detail.value;this.visitList[i].picList.forEach((function(t){-1!==e.indexOf(t.id+"")?t.checked=!0:t.checked=!1})),this.visitList[i].picList.length==e.length?this.visitList[i].checked=!0:this.visitList[i].checked=!1;var s=[];this.visitList.forEach((function(t){t.checked?s.push(t.time):-1!==s.indexOf(t.time)&&s.remove(t.time)})),s.length==this.visitList.length?this.isAllSelect=!0:this.isAllSelect=!1},checkboxChange:function(t){var i=t.detail.value;this.isItemAll=i,this.visitList.forEach((function(t,e){-1!==i.indexOf(t.time)?t.checked=!0:t.checked=!1,t.picList.forEach((function(i){t.checked?i.checked=!0:i.checked=!1}))})),i.length===this.visitList.length?this.isAllSelect=!0:this.isAllSelect=!1},forGoods:function(t){this.visitList.length&&this.visitList.forEach((function(i){i.checked=!!t,i.picList.forEach((function(i){i.checked=!!t}))}))},checkboxAllChange:function(t){var i=t.detail.value;i.length?(this.isAllSelect=!0,this.forGoods(1)):(this.isAllSelect=!1,this.forGoods(0))},authColse:function(t){this.isShowAuth=t},get_user_visit_list:function(){var t=this,i=this;this.loading||this.loadend||(i.loading=!0,i.loadTitle="",(0,n.getVisitList)({page:i.page,limit:i.limit}).then((function(e){t.count=e.data.count;for(var s=0;s<e.data.time.length;s++)-1==t.times.indexOf(e.data.time[s])&&(t.times.push(e.data.time[s]),t.visitList.push({time:e.data.time[s],picList:[]}));for(var n=0;n<t.times.length;n++){t.visitList[n].checked=!!t.isAllSelect;for(var o=0;o<e.data.list.length;o++)t.times[n]===e.data.list[o].time_key&&(t.isAllSelect?e.data.list[o].checked=!0:e.data.list[o].checked=!1,t.visitList[n].picList.push(e.data.list[o]))}var c=e.data.list.length<i.limit;i.loadend=c,i.loadTitle=c?"没有更多内容啦~":"加载更多",i.page=i.page+1,i.loading=!1})).catch((function(t){i.loading=!1,i.loadTitle="加载更多"})))},get_host_product:function(){var t=this;t.hotScroll||(0,n.getProductHot)(t.hotPage,t.hotLimit).then((function(i){t.hotPage++,t.hotScroll=i.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(i.data)}))}},onReachBottom:function(){this.visitList.length?this.get_user_visit_list():this.get_host_product()}};i.default=a}).call(this,e("543d")["default"])}},[["a946","common/runtime","common/vendor"]]]);