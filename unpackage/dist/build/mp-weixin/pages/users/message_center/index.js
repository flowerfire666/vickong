(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/message_center/index"],{"0347":function(t,e,i){"use strict";var s=i("1913"),n=i.n(s);n.a},1913:function(t,e,i){},"972c":function(t,e,i){"use strict";i.r(e);var s=i("c626"),n=i.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},b1d6:function(t,e,i){"use strict";(function(t,e){var s=i("4ea4");i("98d3");s(i("66fd"));var n=s(i("bd7b"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(n.default)}).call(this,i("bc2e")["default"],i("543d")["createPage"])},bd7b:function(t,e,i){"use strict";i.r(e);var s=i("eeed"),n=i("972c");for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("0347");var o=i("f0c5"),c=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"70a2eea6",null,!1,s["a"],void 0);e["default"]=c.exports},c626:function(t,e,i){"use strict";(function(t){var s=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("7220"),a=s(i("6a7c")),o={mixins:[a.default],data:function(){return{list:[],page:1,type:0,limit:20,loading:!1,finished:!1,tabsList:[{key:0,name:"站内消息"},{key:1,name:"客服消息"}]}},onShow:function(){this.page=1,this.list=[],this.changeTabs(this.type)},onReachBottom:function(){1===this.type?this.getList():this.messageSystem()},onPullDownRefresh:function(){this.page=1,this.finished=!1,this.list=[],1===this.type?this.getList():this.messageSystem()},methods:{changeTabs:function(t){this.type=t,this.page=1,this.limit=20,this.list=[],this.finished=!1,1===t?this.getList():this.messageSystem()},messageSystem:function(){var e=this;this.loading||this.finished||(this.loading=!0,t.showLoading({title:"加载中"}),(0,n.messageSystem)({page:this.page,limit:this.limit}).then((function(i){var s=i.data.list;t.hideLoading(),e.loading=!1,e.list=e.list.concat(s),e.finished=s.length<e.limit,e.page+=1,t.stopPullDownRefresh()})).catch((function(e){t.showToast({title:e.msg,icon:"none"})})))},getList:function(){var e=this;this.loading||this.finished||(this.loading=!0,t.showLoading({title:"加载中"}),(0,n.serviceRecord)({page:this.page,limit:this.limit}).then((function(i){t.stopPullDownRefresh();var s=i.data;t.hideLoading(),e.loading=!1,s.forEach((function(t){1===t.message_type&&(t.message=e.replace_em(t.message)),2===t.message_type&&(t.message=e.replace_em(t.message))})),e.list=e.list.concat(s),e.finished=s.length<e.limit,e.page+=1})).catch((function(e){t.showToast({title:e.msg,icon:"none"})})))},replace_em:function(t){return t=t.replace(/\[em-([a-z_]*)\]/g,"<span class='em em-$1'/></span>"),t},goChat:function(e){t.navigateTo({url:"/pages/customer_list/chat?to_uid="+e+"&type=1"})},goDetail:function(e){t.navigateTo({url:"/pages/users/message_center/messageDetail?id="+e})}}};e.default=o}).call(this,i("543d")["default"])},eeed:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var s=function(){var t=this.$createElement,e=(this._self._c,this.list.length&&1===this.type),i=this.list.length&&0===this.type,s=i?null:this.finished&&!this.list.length;this.$mp.data=Object.assign({},{$root:{g0:e,g1:i,g2:s}})},n=[]}},[["b1d6","common/runtime","common/vendor"]]]);