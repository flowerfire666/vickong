(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/wechat_login/index"],{3283:function(e,t,n){"use strict";var o=n("6592"),i=n.n(o);i.a},"35cf":function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("98d3");o(n("66fd"));var i=o(n("581d"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"387f":function(e,t,n){"use strict";(function(e){var o=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("771e"),a=(n("6188"),n("7220")),s=o(n("5602")),c=(o(n("cbe5")),o(n("6a7c"))),d=getApp(),r=e.getSystemInfoSync().statusBarHeight+"px",u={mixins:[c.default],data:function(){return{isUp:!1,phone:"",statusBarHeight:r,isHome:!1,isPhoneBox:!1,logoUrl:"",code:"",authKey:"",options:"",userInfo:{},codeNum:0,canUseGetUserProfile:!1,mp_is_new:this.$Cache.get("MP_VERSION_ISNEW")||!1}},components:{mobileLogin:function(){Promise.all([n.e("common/vendor"),n.e("components/login_mobile/index")]).then(function(){return resolve(n("0c16"))}.bind(null,n)).catch(n.oe)},routinePhone:function(){n.e("components/login_mobile/routine_phone").then(function(){return resolve(n("eb03"))}.bind(null,n)).catch(n.oe)}},onLoad:function(t){var n=this;e.getUserProfile&&(this.canUseGetUserProfile=!0),(0,i.getLogo)().then((function(e){n.logoUrl=e.data.logo_url}));s.default.getCode().then((function(e){n.code=e}));var o=getCurrentPages(),a=o[o.length-2];a&&"pages/order_addcart/order_addcart"==a.route?this.isHome=!0:this.isHome=!1},methods:{back:function(){e.navigateBack()},home:function(){e.switchTab({url:"/pages/index/index"})},maskClose:function(){this.isUp=!1},bindPhoneClose:function(e){e.isStatus?(this.isPhoneBox=!1,this.$util.Tips({title:"登录成功",icon:"success"},{tab:3})):this.isPhoneBox=!1},getphonenumber:function(t){var n=this;e.showLoading({title:"正在登录中"}),s.default.getCode().then((function(e){n.getUserPhoneNumber(t.detail.encryptedData,t.detail.iv,e)})).catch((function(t){e.$emit("closePage",!1),e.hideLoading()}))},getUserPhoneNumber:function(t,n,o){var a=this;(0,i.getUserPhone)({encryptedData:t,iv:n,code:o,spread_spid:d.globalData.spid,spread_code:d.globalData.code}).then((function(e){var t=e.data.expires_time-a.$Cache.time();a.$store.commit("LOGIN",{token:e.data.token,time:t}),a.userInfo=e.data.userInfo,a.$store.commit("SETUID",e.data.userInfo.uid),a.$store.commit("UPDATE_USERINFO",e.data.userInfo),a.$Cache.clear("snsapiKey"),a.$util.Tips({title:"登录成功",icon:"success"},{tab:3})})).catch((function(t){e.hideLoading()}))},getUserInfo:function(){var t=this;(0,a.getUserInfo)().then((function(n){e.hideLoading(),t.userInfo=n.data,t.$store.commit("SETUID",n.data.uid),t.$store.commit("UPDATE_USERINFO",n.data),t.$util.Tips({title:"登录成功",icon:"success"},{tab:3})}))},setUserInfo:function(t){var n=this;e.showLoading({title:"正在登录中"}),s.default.getCode().then((function(e){n.getWxUser(e)})).catch((function(t){e.hideLoading()}))},getUserProfile:function(){var t=this;e.showLoading({title:"正在登录中"});var n=this;s.default.getUserProfile().then((function(o){var i=o.userInfo;i.code=t.code,i.spread_spid=d.globalData.spid||t.$Cache.get("spread"),i.spread_code=d.globalData.code,s.default.authUserInfo(i).then((function(o){if(void 0!==o.data.key&&o.data.key)e.hideLoading(),n.authKey=o.data.key,n.isPhoneBox=!0;else{e.hideLoading();var i=o.data.expires_time-n.$Cache.time();n.$store.commit("LOGIN",{token:o.data.token,time:i}),t.getUserInfo()}})).catch((function(t){e.hideLoading(),e.showToast({title:t.msg,icon:"none",duration:2e3})}))})).catch((function(t){e.hideLoading()}))},getWxUser:function(t){var n=this;s.default.getUserInfo().then((function(o){var i=o.userInfo;i.code=t,i.spread_spid=d.globalData.spid,i.spread_code=d.globalData.code,s.default.authUserInfo(i).then((function(t){if(void 0!==t.data.key&&t.data.key)e.hideLoading(),n.authKey=t.data.key,n.isPhoneBox=!0;else{e.hideLoading();var o=t.data.expires_time-n.$Cache.time();n.$store.commit("LOGIN",{token:t.data.token,time:o}),n.$util.Tips({title:t.msg,icon:"success"},{tab:3})}})).catch((function(t){e.hideLoading(),e.showToast({title:t.msg,icon:"none",duration:2e3})}))})).catch((function(t){e.hideLoading()}))},userLogin:function(){var t=this;s.default.getCode().then((function(n){e.showLoading({title:"正在登录中"}),(0,i.authLogin)({code:n,spread_spid:d.globalData.spid,spread_code:d.globalData.code}).then((function(n){if(void 0!==n.data.key&&n.data.key)e.hideLoading(),t.authKey=n.data.key,t.isPhoneBox=!0;else{e.hideLoading();var o=n.data.expires_time-t.$Cache.time();t.$store.commit("LOGIN",{token:n.data.token,time:o}),t.getUserInfo()}}))})).catch((function(e){}))}}};t.default=u}).call(this,n("543d")["default"])},"581d":function(e,t,n){"use strict";n.r(t);var o=n("c340"),i=n("5b1d");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("3283");var s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=c.exports},"5b1d":function(e,t,n){"use strict";n.r(t);var o=n("387f"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},6592:function(e,t,n){},c340:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var o=function(){var e=this.$createElement;this._self._c},i=[]}},[["35cf","common/runtime","common/vendor"]]]);