(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/goods_comment_con/components/userAddress"],{"0cf3":function(t,i,e){},1727:function(t,i,e){"use strict";e.r(i);var n=e("ccae"),s=e.n(n);for(var c in n)["default"].indexOf(c)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(c);i["default"]=s.a},"4ca4":function(t,i,e){"use strict";var n=e("0cf3"),s=e.n(n);s.a},"50e5":function(t,i,e){"use strict";e.r(i);var n=e("c053"),s=e("1727");for(var c in s)["default"].indexOf(c)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(c);e("4ca4");var r=e("f0c5"),o=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"3ac8fc88",null,!1,n["a"],void 0);i["default"]=o.exports},c053:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){}));var n=function(){var t=this.$createElement;this._self._c},s=[]},ccae:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e("7220"),s=e("a2c9"),c=e("23b4"),r=e("26cb"),o={components:{authorize:function(){e.e("components/Authorize").then(function(){return resolve(e("1fc0"))}.bind(null,e)).catch(e.oe)},home:function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("47cf"))}.bind(null,e)).catch(e.oe)}},props:{aleartStatus:{type:Boolean,default:!1}},data:function(){return{regionDval:["浙江省","杭州市","滨江区"],id:0,userAddress:{is_default:!1},region:["省","市","区"],valueRegion:[0,0,0],isAuto:!1,isShowAuth:!1,district:[],multiArray:[],multiIndex:[0,0,0],cityId:0,defaultRegion:["广东省","广州市","番禺区"],defaultRegionCode:"110101"}},computed:(0,r.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,i){t&&this.getUserAddress()},deep:!0}},created:function(t){this.isLogin?this.getUserAddress():(0,c.toLogin)()},methods:{addressList:function(){this.getCityList()},getCityList:function(){var t=this,i=this;(0,s.getCity)().then((function(e){t.district=e.data,i.initialize()}))},initialize:function(){var t=[],i=[],e=[];if(this.district.length){var n=this.district[0].c||[],s=n.length&&n[0].c||[];this.district.forEach((function(i){t.push(i.n)})),n.forEach((function(t){i.push(t.n)})),s.forEach((function(t){e.push(t.n)})),this.multiArray=[t,i,e]}},bindRegionChange:function(t){var i=this.multiIndex,e=this.district[i[0]]||{c:[]},n=e.c[i[1]]||{v:0},s=this.multiArray,c=t.detail.value;this.region=[s[0][c[0]],s[1][c[1]],s[2][c[2]]],this.cityId=n.v,this.valueRegion=[0,0,0],this.initialize()},bindMultiPickerColumnChange:function(t){var i=t.detail.column,e=t.detail.value,n=this.district[e]||{c:[]},s=this.multiArray,c=this.multiIndex;switch(c[i]=e,i){case 0:var r=n.c[0]||{c:[]};s[1]=n.c.map((function(t){return t.n})),s[2]=r.c.map((function(t){return t.n}));break;case 1:var o=this.district[c[0]].c[c[1]].c||[];s[2]=o.map((function(t){return t.n}));break;case 2:break}this.$set(this.multiArray,0,s[0]),this.$set(this.multiArray,1,s[1]),this.$set(this.multiArray,2,s[2]),this.multiIndex=c},onLoadFun:function(){this.getUserAddress()},authColse:function(t){this.isShowAuth=t},toggleTab:function(t){this.$refs[t].show()},onConfirm:function(t){this.region=t.checkArr[0]+"-"+t.checkArr[1]+"-"+t.checkArr[2]},getUserAddress:function(){if(!this.id)return!1;var t=this;(0,n.getAddressDetail)(this.id).then((function(i){var e=[i.data.province,i.data.city,i.data.district];t.$set(t,"userAddress",i.data),t.$set(t,"region",e),t.cityId=i.data.city_id}))},getWxAddress:function(){var i=this;t.authorize({scope:"scope.address",success:function(e){t.chooseAddress({success:function(e){var s={};s.province=e.provinceName,s.city=e.cityName,s.district=e.countyName,(0,n.editAddress)({address:s,is_default:1,real_name:e.userName,post_code:e.postalCode,phone:e.telNumber,detail:e.detailInfo,id:0,type:1}).then((function(e){return setTimeout((function(){if(i.cartId){i.cartId,i.pinkId,i.couponId;i.cartId="",i.pinkId="",i.couponId="",t.navigateTo({url:i.id})}else t.navigateBack({delta:1})}),1e3),i.$util.Tips({title:"添加成功",icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}))},fail:function(t){if("chooseAddress:cancel"==t.errMsg)return i.$util.Tips({title:"取消选择"})}})},fail:function(e){t.showModal({title:"您已拒绝导入微信地址权限",content:"是否进入权限管理，调整授权？",success:function(e){if(e.confirm)t.openSetting({success:function(t){}});else if(e.cancel)return i.$util.Tips({title:"已取消！"})}})}})},getAddress:function(){var i=this,e=this;e.$wechat.openAddress().then((function(s){(0,n.editAddress)({id:i.id,real_name:s.userName,phone:s.telNumber,address:{province:s.provinceName,city:s.cityName,district:s.countryName},detail:s.detailInfo,is_default:1,post_code:s.postalCode,type:1}).then((function(){setTimeout((function(){t.navigateTo({url:e.id})}),1e3),e.$util.Tips({title:"添加成功",icon:"success"})})).catch((function(t){return e.$util.Tips({title:t||"添加失败"})}))})).catch((function(t){}))},formSubmit:function(t){var i=t.detail.value;if(!i.name.trim())return this.$util.Tips({title:"请填写收货人姓名"});if(!i.phone)return this.$util.Tips({title:"请填写联系电话"});if(!/^1(3|4|5|7|8|9|6)\d{9}$/i.test(i.phone))return this.$util.Tips({title:"请输入正确的手机号码"});if("省"==this.region[0])return this.$util.Tips({title:"请选择所在地区"});if(!i.detail.trim())return this.$util.Tips({title:"请填写详细地址"});var e=this.region;i.address={province:e[0],city:e[1],district:e[2],city_id:this.cityId},this.$emit("getAddress",i)},posterImageClose:function(){this.$emit("close",!1)}}};i.default=o}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/users/goods_comment_con/components/userAddress-create-component',
    {
        'pages/users/goods_comment_con/components/userAddress-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("50e5"))
        })
    },
    [['pages/users/goods_comment_con/components/userAddress-create-component']]
]);
