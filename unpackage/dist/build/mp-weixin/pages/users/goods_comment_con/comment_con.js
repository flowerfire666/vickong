(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/goods_comment_con/comment_con"],{"11b6":function(e,t,i){},3599:function(e,t,i){"use strict";i.r(t);var n=i("aaf6"),r=i("a3e60");for(var s in r)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(s);i("96c8");var o=i("f0c5"),a=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"205fd02a",null,!1,n["a"],void 0);t["default"]=a.exports},"96c8":function(e,t,i){"use strict";var n=i("11b6"),r=i.n(n);r.a},a3e60:function(e,t,i){"use strict";i.r(t);var n=i("ed85"),r=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=r.a},aaf6:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this.$createElement,t=(this._self._c,this.replyList.length);this.$mp.data=Object.assign({},{$root:{g0:t}})},r=[]},caaa:function(e,t,i){"use strict";(function(e,t){var n=i("4ea4");i("98d3");n(i("66fd"));var r=n(i("3599"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(r.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},ed85:function(e,t,i){"use strict";(function(e){var n=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i("a612"),s=n(i("6a7c")),o={components:{home:function(){Promise.all([i.e("common/vendor"),i.e("components/home/index")]).then(function(){return resolve(i("47cf"))}.bind(null,i)).catch(i.oe)}},mixins:[s.default],data:function(){return{id:0,page:1,limit:200,replyCon:{},replyList:[],con:"",scrollTop:0,replyNum:0}},onLoad:function(e){this.id=e.id,this.getInfo(),this.getList()},methods:{tapPraise:function(){var e=this;this.replyCon.is_praise?(0,r.getUnReplyPraise)(this.id).then((function(t){return e.replyCon.is_praise=!e.replyCon.is_praise,e.replyCon.reply.praise=e.replyCon.reply.praise-1,e.$util.Tips({title:t.msg})})):(0,r.getReplyPraise)(this.id).then((function(t){return e.replyCon.is_praise=!e.replyCon.is_praise,e.replyCon.reply.praise=e.replyCon.reply.praise+1,e.$util.Tips({title:t.msg})}))},setPageScrollTo:function(){var t=this,i=e.createSelectorQuery().in(this).select("#tops");i.boundingClientRect((function(e){t.scrollTop=parseFloat(e.height)})).exec()},sendText:function(){var e=this;if(!this.con.trim())return this.$util.Tips({title:"说点什么呗"});(0,r.replyComment)(this.id,{content:this.con}).then((function(t){var i=e;e.con="",e.replyNum=e.replyNum+1,e.getList(),e.$nextTick((function(){setTimeout((function(){i.setPageScrollTo()}),100)})),e.$util.Tips({title:t.msg})}))},details:function(t){e.navigateTo({url:"/pages/goods_details/index?id="+t})},getInfo:function(){var e=this;(0,r.getReplyInfo)(this.id).then((function(t){e.replyCon=t.data,e.replyNum=e.replyCon.reply.comment_sum}))},getList:function(){var e=this;(0,r.getReplyComment)(this.id,{page:this.page,limit:this.limit}).then((function(t){e.replyList=t.data})).catch((function(t){return e.$util.Tips({title:t.msg})}))},getpreviewImage:function(t){e.previewImage({urls:this.replyCon.reply.pics,current:this.replyCon.reply.pics[t]})},praise:function(e){var t=this;e.is_praise?(0,r.postUnReplyPraise)(e.id).then((function(i){return e.is_praise=!e.is_praise,e.praise=e.praise-1,t.$util.Tips({title:i.msg})})):(0,r.postReplyPraise)(e.id).then((function(i){return e.is_praise=!e.is_praise,e.praise=e.praise+1,t.$util.Tips({title:i.msg})}))}}};t.default=o}).call(this,i("543d")["default"])}},[["caaa","common/runtime","common/vendor"]]]);