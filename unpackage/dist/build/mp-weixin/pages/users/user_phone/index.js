(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_phone/index"],{"0bc7":function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=i(n("2eee")),a=i(n("c973")),c=i(n("50f0")),r=n("a2c9"),s=n("23b4"),o=n("26cb"),f=i(n("6a7c")),l={mixins:[c.default,f.default],components:{authorize:function(){n.e("components/Authorize").then(function(){return resolve(n("1fc0"))}.bind(null,n)).catch(n.oe)}},data:function(){return{phone:"",captcha:"",isAuto:!1,isShowAuth:!1,key:"",authKey:"",type:0}},computed:(0,o.mapGetters)(["isLogin"]),onLoad:function(t){var e=this;this.isLogin?((0,r.verifyCode)().then((function(t){e.$set(e,"key",t.data.key)})),this.authKey=t.key||"",this.url=t.url||""):(0,s.toLogin)(),this.type=t.type||0},methods:{onLoadFun:function(){},authColse:function(t){this.isShowAuth=t},editPwd:function(){var e=this;return e.phone?/^1(3|4|5|7|8|9|6)\d{9}$/i.test(e.phone)?e.captcha?void(0==this.type?(0,r.bindingUserPhone)({phone:e.phone,captcha:e.captcha}).then((function(n){if(void 0===n.data||!n.data.is_bind)return e.$util.Tips({title:"绑定成功！",icon:"success"},{tab:5,url:"/pages/users/user_info/index"});t.showModal({title:"是否绑定账号",content:n.msg,confirmText:"绑定",success:function(t){if(t.confirm)(0,r.bindingUserPhone)({phone:e.phone,captcha:e.captcha,step:1}).then((function(t){return e.$util.Tips({title:t.msg,icon:"success"},{tab:5,url:"/pages/users/user_info/index"})})).catch((function(t){return e.$util.Tips({title:t})}));else if(t.cancel)return e.$util.Tips({title:"您已取消绑定！"},{tab:5,url:"/pages/users/user_info/index"})}})})).catch((function(t){return e.$util.Tips({title:t})})):(0,r.updatePhone)({phone:e.phone,captcha:e.captcha}).then((function(t){return e.$util.Tips({title:t.msg,icon:"success"},{tab:5,url:"/pages/users/user_info/index"})})).catch((function(t){return e.$util.Tips({title:t})}))):e.$util.Tips({title:"请填写验证码"}):e.$util.Tips({title:"请输入正确的手机号码！"}):e.$util.Tips({title:"请填写手机号码！"})},code:function(){var t=this;return(0,a.default)(u.default.mark((function e(){var n;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t,n.phone){e.next=3;break}return e.abrupt("return",n.$util.Tips({title:"请填写手机号码！"}));case 3:if(/^1(3|4|5|7|8|9|6)\d{9}$/i.test(n.phone)){e.next=5;break}return e.abrupt("return",n.$util.Tips({title:"请输入正确的手机号码！"}));case 5:return e.next=7,(0,r.verifyCode)().then((function(t){(0,r.registerVerify)(n.phone,"reset",t.data.key,n.captcha).then((function(t){n.$util.Tips({title:t.msg}),n.sendCode()})).catch((function(t){return n.$util.Tips({title:t})}))}));case 7:case"end":return e.stop()}}),e)})))()}}};e.default=l}).call(this,n("543d")["default"])},"2e8c":function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("98d3");i(n("66fd"));var u=i(n("d38d"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(u.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},"76ae":function(t,e,n){},a3c1:function(t,e,n){"use strict";var i=n("76ae"),u=n.n(i);u.a},a7a5:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},u=[]},a94a:function(t,e,n){"use strict";n.r(e);var i=n("0bc7"),u=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=u.a},d38d:function(t,e,n){"use strict";n.r(e);var i=n("a7a5"),u=n("a94a");for(var a in u)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("a3c1");var c=n("f0c5"),r=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=r.exports}},[["2e8c","common/runtime","common/vendor"]]]);