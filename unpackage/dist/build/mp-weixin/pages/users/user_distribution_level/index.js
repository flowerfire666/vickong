(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_distribution_level/index"],{3284:function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("7220"),a=n("a612"),r=n("23b4"),l=n("26cb"),s=i(n("6a7c")),u={components:{recommend:function(){Promise.all([n.e("common/vendor"),n.e("components/recommend/index")]).then(function(){return resolve(n("6c16"))}.bind(null,n)).catch(n.oe)}},mixins:[s.default],data:function(){return{reach_count:0,distributionLevel:[],swiperIndex:0,growthValue:!0,task:[],illustrate:"",level_id:0,hostProduct:[],grade:0,hotScroll:!1,hotPage:1,hotLimit:10,level_title:"",level_discount:"",levelInfo:{},userInfo:{},taskInfo:{},taskNum:0}},computed:(0,l.mapGetters)(["isLogin"]),watch:{distributionLevel:function(){var t=this;t.distributionLevel.length>0&&t.distributionLevel.forEach((function(e,n){!1===e.is_clear&&(t.activeIndex=n,t.grade=e.grade)}))},isLogin:{handler:function(t,e){t&&this.get_host_product()},deep:!0}},onLoad:function(){this.isLogin?this.agentLevelList():(0,r.toLogin)(),this.get_host_product()},methods:{agentLevelList:function(){var t=this;(0,o.agentLevelList)().then((function(e){var n=e.data,i=n.level_info,o=n.level_list,a=n.task,r=n.user;t.levelInfo=i,t.distributionLevel=o,t.userInfo=r,t.taskInfo=a,t.levelInfo.exp=parseFloat(t.levelInfo.exp),t.levelInfo.rate=Math.floor(t.levelInfo.exp/t.levelInfo.exp_num*100),t.levelInfo.rate>100&&(t.levelInfo.rate=100);var l=o.findIndex((function(t,e){return t.id===r.agent_level}));-1!==l&&(t.swiperIndex=-1===l?0:l+1),t.level_id=t.distributionLevel[-1===l?0:l+1].id||0,t.getTask()}))},get_host_product:function(){var t=this;t.hotScroll||(0,a.getProductHot)(t.hotPage,t.hotLimit).then((function(e){t.hotPage++,t.hotScroll=e.data.length<t.hotLimit,t.hostProduct=t.hostProduct.concat(e.data)}))},swiperChange:function(t){var e=t.detail.current;this.swiperIndex=e,this.level_id=this.distributionLevel[e].id||0,this.level_title=this.distributionLevel[e].name||"",this.level_discount=this.distributionLevel[e].discount||"",this.getTask()},growthValueClose:function(){this.growthValue=!0},opHelp:function(t){this.growthValue=!1,this.illustrate=this.task[t].desc},getTask:function(){var t=this;t.taskNum=0,(0,o.agentLevelTaskList)(t.level_id).then((function(e){t.task=e.data.list;for(var n=0;n<t.task.length;n++)t.task[n].finish&&(t.taskNum+=1)}))}},onReachBottom:function(){that.hotScroll||this.get_host_product()}};e.default=u},ad28:function(t,e,n){"use strict";var i=n("c6b7"),o=n.n(i);o.a},b089:function(t,e,n){"use strict";n.r(e);var i=n("b18d"),o=n("f401");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("ad28");var r=n("f0c5"),l=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"db01e5b8",null,!1,i["a"],void 0);e["default"]=l.exports},b18d:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.task.length),i=t.__map(t.task,(function(e,n){var i=t.__get_orig(e),o=Math.floor(e.new_number/e.number>1?100:e.new_number/e.number*100);return{$orig:i,g1:o}})),o=t.hostProduct.length;t._isMounted||(t.e0=function(e){t.growthValue=!0}),t.$mp.data=Object.assign({},{$root:{g0:n,l0:i,g2:o}})},o=[]},c6b7:function(t,e,n){},f401:function(t,e,n){"use strict";n.r(e);var i=n("3284"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},ffbf:function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("98d3");i(n("66fd"));var o=i(n("b089"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(o.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])}},[["ffbf","common/runtime","common/vendor"]]]);