(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_spread_user/index","components/Authorize"],{"0204":function(e,t,n){"use strict";var o=n("3971"),i=n.n(o);i.a},"0a2d":function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("98d3");o(n("66fd"));var i=o(n("8159"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"0d07":function(e,t,n){"use strict";n.r(t);var o=n("0e34"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},"0e34":function(e,t,n){"use strict";(function(e){var o=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("9523")),a=n("7220"),s=n("60e3"),r=n("23b4"),u=n("26cb"),c=(o(n("1fc0")),o(n("6a7c")));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={components:{home:function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("47cf"))}.bind(null,n)).catch(n.oe)},commission:function(){n.e("pages/users/user_spread_user/components/commission").then(function(){return resolve(n("e75d"))}.bind(null,n)).catch(n.oe)},order:function(){n.e("pages/users/user_spread_user/components/order").then(function(){return resolve(n("750d"))}.bind(null,n)).catch(n.oe)},promoter:function(){n.e("pages/users/user_spread_user/components/promoter").then(function(){return resolve(n("741f"))}.bind(null,n)).catch(n.oe)},task:function(){n.e("pages/users/user_spread_user/components/task").then(function(){return resolve(n("6f88"))}.bind(null,n)).catch(n.oe)}},mixins:[c.default],data:function(){return{userInfo:{},taskShow:!1,yesterdayPrice:0,isAuto:!1,isShowAuth:!1,distributionLevel:[],levelList:[],task:[],levelInfo:{},tabs:[{name:"佣金"},{name:"订单"},{name:"推广人"}],listData:[],sel:0,speedAll:0,headerStatus:!1}},computed:(0,u.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(e,t){e&&this.getUserInfo()},deep:!0}},onLoad:function(){this.isLogin?(this.agentLevelList(),this.clickTab(0)):(0,r.toLogin)()},methods:{agentLevelList:function(){var e=this;(0,a.agentLevelList)().then((function(t){var n=t.data,o=n.level_info,i=n.level_list,a=n.task,s=n.user;e.levelInfo=o,e.userInfo=s,e.taskInfo=a,e.levelList=i,e.headerStatus=!!i.length,e.level_id=o.id||0;var r=i.findIndex((function(e,t){return e.id===s.agent_level}));-1!==r&&(e.swiperIndex=-1===r?0:r+1),e.level_id=e.levelList[-1===r?0:r+1].id||0,e.getTask()}))},getTask:function(){var e=this;e.taskNum=0,(0,a.agentLevelTaskList)(e.level_id).then((function(t){e.task=t.data.list,e.speedAll=t.data.speedAll}))},onLoadFun:function(){this.getUserInfo()},jumbPath:function(t){e.navigateTo({url:["/pages/users/user_cash/index","/pages/users/promoter_rank/index","/pages/users/commission_rank/index","/pages/users/user_spread_code/index","/pages/users/user_vip/index","/pages/extension/invite_friend/index","/pages/users/user_spread_money/index?type=1","/pages/users/user_spread_money/index?type=4","/pages/users/promoter-order/index","/pages/users/promoter-list/index","/pages/users/user_distribution_level/index"][t]})},authColse:function(e){this.isShowAuth=e},openSubscribe:function(t){e.showLoading({title:"正在加载"}),(0,s.openExtrctSubscribe)().then((function(n){e.hideLoading(),e.navigateTo({url:t})})).catch((function(){e.hideLoading()}))},getUserInfo:function(){var e=this;(0,a.getUserInfo)().then((function(t){e.$set(e,"userInfo",t.data),t.data.spread_status||e.$util.Tips({title:"您目前暂无推广权限"},{tab:4,url:"/pages/index/index"})}))},clickTab:function(e){var t=this;this.sel=e;var n=[a.moneyList,a.spreadOrder,a.spreadPeople],o={keyword:"",start:0,stop:0,page:1,limit:10};2==e&&(o=l(l({},o),{},{grade:0,sort:""})),n[e](o,3).then((function(e){t.listData=e.data.list}))}}};t.default=f}).call(this,n("543d")["default"])},"1fc0":function(e,t,n){"use strict";n.r(t);var o=n("937a"),i=n("3e37");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("0204");var s=n("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"03cc894a",null,!1,o["a"],void 0);t["default"]=r.exports},"34b2":function(e,t,n){"use strict";var o=n("cedf"),i=n.n(o);i.a},3971:function(e,t,n){},"3e37":function(e,t,n){"use strict";n.r(t);var o=n("cc9b"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},8159:function(e,t,n){"use strict";n.r(t);var o=n("f79d"),i=n("0d07");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("34b2");var s=n("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"3dcd1d58",null,!1,o["a"],void 0);t["default"]=r.exports},"937a":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var o=function(){var e=this.$createElement;this._self._c},i=[]},cc9b:function(e,t,n){"use strict";(function(e,o){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("249b")),s=n("771e"),r=n("6188"),u=n("26cb"),c=i(n("5602")),d=i(n("0eea")),l=getApp(),f={name:"Authorize",props:{isAuto:{type:Boolean,default:!0},isGoIndex:{type:Boolean,default:!0},isShowAuth:{type:Boolean,default:!1}},data:function(){return{logoUrl:"",authKey:""}},computed:(0,u.mapGetters)(["isLogin","userInfo"]),watch:{isLogin:function(e){!0===e&&this.$emit("onLoadFun",this.userInfo)}},mounted:function(){this.getLogoUrl();var t=this;this.isLogin||a.default.has(r.STATE_R_KEY)?this.setAuthStatus():e.login({success:function(e){a.default.set(r.STATE_R_KEY,e.code,10800);var n=l.globalData.spid?l.globalData.spid:"";(0,s.silenceAuth)({code:e.code,spread:n,spid:l.globalData.code}).then((function(e){if(void 0!==e.data.key&&e.data.key)t.authKey=e.data.key;else{l.globalData.code=0;var n=e.data.expires_time-a.default.time();d.default.commit("LOGIN",{token:e.data.token,time:n})}})).catch((function(e){}))}})},methods:{setAuthStatus:function(){var e=this;c.default.authorize().then((function(t){!1===t.islogin?e.setUserInfo():e.$emit("onLoadFun",e.userInfo)})).catch((function(t){e.isAuto&&e.$emit("authColse",!0)}))},getUserInfo:function(e){var t=this;c.default.getUserInfo().then((function(n){var i=n.userInfo;i.code=e,i.spread_spid=l.globalData.spid,i.spread_code=l.globalData.code,c.default.authUserInfo(i).then((function(e){o.hideLoading(),t.$emit("authColse",!1),t.$emit("onLoadFun",t.userInfo)})).catch((function(e){o.hideLoading(),o.showToast({title:e.msg,icon:"none",duration:2e3})}))})).catch((function(e){o.hideLoading()}))},getUserPhoneNumber:function(e,t,n){var i=this;(0,s.getUserPhone)({encryptedData:e,iv:t,code:n,spid:l.globalData.spid,spread:l.globalData.code}).then((function(e){var t=e.data.expires_time-i.$Cache.time();i.$store.commit("LOGIN",{token:e.data.token,time:t}),i.$emit("authColse",!1),i.$emit("onLoadFun",e.data.userInfo),o.hideLoading()})).catch((function(e){o.hideLoading()}))},setUserInfo:function(e){var t=this;o.showLoading({title:"正在登录中"}),c.default.getCode().then((function(n){t.getUserPhoneNumber(e.detail.encryptedData,e.detail.iv,n)})).catch((function(e){o.hideLoading()}))},getLogoUrl:function(){var e=this;a.default.has(r.LOGO_URL)?this.logoUrl=a.default.get(r.LOGO_URL):(0,s.getLogo)().then((function(t){e.logoUrl=t.data.logo_url,a.default.set(r.LOGO_URL,e.logoUrl)}))},close:function(){var e=getCurrentPages();e[e.length-1];this.isGoIndex?o.navigateTo({url:"/pages/index/index"}):this.$emit("authColse",!1)}}};t.default=f}).call(this,n("bc2e")["default"],n("543d")["default"])},cedf:function(e,t,n){},f79d:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.levelList.length),o=e.levelList.length,i=e.levelList.length;e._isMounted||(e.e0=function(t){e.taskShow=!0},e.e1=function(){e.taskShow=!1}),e.$mp.data=Object.assign({},{$root:{g0:n,g1:o,g2:i}})},i=[]}},[["0a2d","common/runtime","common/vendor"]]]);