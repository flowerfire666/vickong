<template>
	<view>
		<!-- 顶部栏目 -->
		<view class="index_top">
			疫情防控
		</view>		
		<!-- 表单页面-->
		<form @submit="formSubmit" report-submit='true'>
		  <view class='personal-data'>
		    <view class='list'>
		      <view class='item acea-row row-between-wrapper'>
		        <view class='input'><input type='text' auto-focus name='real_name' placeholder="真实姓名"></input></view>
		      </view>
		      <view class='item acea-row row-between-wrapper'>
		        <view class='input'><input type='number'  name='phone2'  placeholder="手机号码"></input></view>
		      </view>
		       <view class='item acea-row row-between-wrapper'>
		        <view class='input'><input type='digit' name='temperature_real'  placeholder="实测体温"></input></view>
		      </view>
		    </view>    
		    <!-- <button class='modifyBnt bg-color' form-type="submit" @tap="onSubscribe()">确定提交</button> -->
		    <button class='modifyBnt bg-color' form-type="submit">确定提交</button> 
		  </view>
		  <view class="personal_bottom">
		      <view class="bottom_text">
		         ·珠海市防疫防控·
		      </view>
		  </view>    
		</form>
	</view>
</template>

<script>
	const 	ms_id_one ='XGJPhkwi1xydIHEjVxcP1SqBxBRdsWMJR6thjhMGzI8';
	const   ms_id_second = 'oVKtQE7q_cpcy1gtnJe64px7jDPSRQza1STgXxJNiwQ';
	const   ms_id_third = 'tzT0DMnrIVaYpTUvqkwmrkiajW5Gd1405jzmzn3kOD4';
	import {
		getUserInfo,
		//setVisit,
		userEditreal
	} from '@/api/user.js';
	import {
		mapGetters
	} from "vuex";
	import Routine from '@/libs/routine';
	export default {
		data() {
			return {
				userInfo: {},
				//秒杀提醒的模板id
				ms_id_one : 'XGJPhkwi1xydIHEjVxcP1SqBxBRdsWMJR6thjhMGzI8',
				ms_id_second : 'oVKtQE7q_cpcy1gtnJe64px7jDPSRQza1STgXxJNiwQ',
				ms_id_third : 'tzT0DMnrIVaYpTUvqkwmrkiajW5Gd1405jzmzn3kOD4',
				lessons : [
				  {
					id:1,
					thing1:'超声波洗牙',
					amount2:'200元',
					amount7:'39.9元',
					thing4: '秒杀！39.9元超声波洗牙马上抢',
				  },
				  {
					id:2,
					thing1:'超声波洗牙',
					thing3: '秒杀！39.9元超声波洗牙马上抢',
				  },
				  {
					id:3,
					thing1:'超声波洗牙',
					thing4: '秒杀！39.9元超声波洗牙马上抢',
				  },
				]
				
			};
		},
		computed: mapGetters(['isLogin']),
		onLoad() {
			//#ifdef MP
			//小程序静默授权
			if (!this.$store.getters.isLogin) {
				Routine.getCode()
					.then(code => {
						Routine.silenceAuth(code).then(res => {
							this.onLoadFun();
						})
					})
					.catch(res => {
						uni.hideLoading();
					});
			}
			//#endif
		},
		onShow:function(){
			let that = this;
			if (that.isLogin) {
				this.getUserInfo();
			//	this.getMyMenus();
			//	this.setVisit();
			};
			
		},
		methods:{
			//提交表单处理
			 formSubmit:function(e){
			    console.log(e)
			    var that = this, value = e.detail.value
			    //,userInfo = that.data.switchUserInfo[that.data.userIndex];
			    if (!value.real_name) return this.$util.Tips({title:'真实姓名不能为空'});
			    if (!value.phone2) return this.$util.Tips({title:'手机号码不能为空'});
			    if (!value.temperature_real) return this.$util.Tips({title:'实测体温不能为空'});
			    if (!(/^1[3456789]\d{9}$/.test(value.phone2))) return this.$util.Tips({ title: '请输入正确的手机号码！' });
			    userEditreal(value).then(res=>{
			    //  that.openSubscribe();
			      return this.$util.Tips({ title: res.msg, icon: 'success' }, { tab: 4, url: '/pages/index/index' });
			    }).catch(msg=>{
			      return this.$util.Tips({ title: msg || '保存失败，您并没有修改' }, { tab: 3, url: 1 });
			    });
				setTimeout(function () {
				//   that.onSubscribe();
				}, 1000)
			  },
			
			  /*
			  * 云开发版的订阅消息，订阅之后，第二天11点，3点，8点提醒秒杀活动
			  */
			 onSubscribe: function(e) {
			  // 调用微信 API 申请发送订阅消息
			   console.log("我现在");
			  // const item = e.currentTarget.dataset.item;
			    wx.requestSubscribeMessage({
			      // 传入订阅消息的模板id，模板 id 可在小程序管理后台申请
			      tmplIds: [ms_id_one,ms_id_second,ms_id_third],
			      success(res) {
					  console.log(res)
			        if(res[ms_id_one]=='accept') {
			          wx.cloud
			              .callFunction({
			                name: 'subscript_msd',
			                data: {
			                  idd:1,
			                  data: {
			                    thing1: {value:'200元超声波洗牙，限时秒杀'},
			                    amount2: {value:200.00},
			                    amount7: {value:39.90},
			                    thing4: {value:'恭喜你获得39.9元洗牙秒杀，点击领取'},
			                  },
			                  templateId: ms_id_one,
			                },
			              })
			              .then(() => {
			                uni.showToast({
			                  title: '欢迎到来',
			                //  icon: 'success',
			                  duration: 2000,
			                });
			              })
			              .catch(() => {
			                uni.showToast({
			                  title: '失败',
			                //  icon: 'success',
			                  duration: 2000,
			                });
			              });
			        }
			        if(res[ms_id_second]=='accept') {
			          wx.cloud
			              .callFunction({
			                name: 'subscript_msd',
			                data: {
			             
			                  idd:2,
			                  data: {
			                    thing1: {value: '200元超声波洗牙，限时秒杀'},
			                    thing3: {value: '限时39.9元洗牙秒杀，点击领取'},
			                  },
			                  templateId: ms_id_second,
			                },
			              })
			              .then(() => {
			                uni.showToast({
			                  title: '欢迎到来',
			                //  icon: 'success',
			                  duration: 2000,
			                });
			              })
			              .catch(() => {
			                uni.showToast({
			                  title: '失败',
			                 // icon: 'success',
			                  duration: 2000,
			                });
			              });
			        }
			        if(res[ms_id_third]=='accept') {
			          wx.cloud
			              .callFunction({
			                name: 'subscript_msd',
			                data: {
			                  idd:3,
			                  data: {
			                    thing1: {value: '200元超声波洗牙，限时秒杀'},
			                    thing4: {value: '恭喜你获得39.9元洗牙秒杀，点击领取'},
			                  },
			                  templateId: ms_id_third,
			                },
			              })
			              .then(() => {
			                uni.showToast({
			                  title: '欢迎到来',
			                 // icon: 'success',
			                  duration: 2000,
			                });
			              })
			              .catch(() => {
			                uni.showToast({
			                  title: '失败',
			                //  icon: 'success',
			                  duration: 2000,
			                });
			              });
			        }
			      },
			    });
			  },
			
			
			// 授权回调
			onLoadFun() {
				this.getUserInfo();
				//this.getMyMenus();
				//this.setVisit();
			},
			/**
			 * 获取个人用户信息
			 */
			getUserInfo: function() {
				let that = this;
				getUserInfo().then(res => {
					that.userInfo = res.data
				});
			},
		
			//小程序授权api替换 getUserInfo
			getUserProfile() {
				uni.showLoading({
					title: '获取中'
				});
				let self = this;
				Routine.getUserProfile()
					.then(res => {
						Routine.getCode()
							.then(code => {
								let userInfo = res.userInfo;
								userInfo.code = code;
								userInfo.spread_spid = app.globalData.spid; //获取推广人ID
								userInfo.spread_code = app.globalData.code; //获取推广人分享二维码ID
								Routine.authUserInfo(userInfo)
									.then(res => {
										if (res.data.key !== undefined && res.data.key) {
											uni.hideLoading();
											self.authKey = res.data.key;
											self.isPhoneBox = true;
										} else {
											uni.hideLoading();
											let time = res.data.expires_time - self.$Cache.time();
											self.$store.commit('LOGIN', {
												token: res.data.token,
												time: time
											});
											this.getUserInfo()
										}
									})
									.catch(res => {
										uni.hideLoading();
										uni.showToast({
											title: res.msg,
											icon: 'none',
											duration: 2000
										});
									});
							})
							.catch(res => {
								uni.hideLoading();
							});
					})
					.catch(res => {
						uni.hideLoading();
					});
			},
		}
	}
</script>
 
<style>
		.index_top {
			height: 136rpx;
			//background: #00b0ef;
			background: white;
			color: black;
			line-height: 178rpx;
			padding: 0 35rpx;
			position: fixed;
			letter-spacing: 6rpx;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 99;
			text-align: center;
		}
		.personal-data {
			margin-top: 165rpx;
		}
		.personal-data .list{margin-top:15rpx;background-color:#fff;}
		.personal-data .list .item{margin:30rpx;border-bottom:1rpx solid #f2f2f2;font-size:32rpx;color:#282828;position: relative;border-radius: 10rpx;}
		.personal-data .list .item .item_top{
		    position: absolute;
		    top: 14px;
		    left: 14px;
		    font-size: 24rpx;
		}
		.personal-data .list .item .phone{width:160rpx;height:56rpx;font-size:24rpx;color:#fff;line-height:56rpx;border-radius: 32rpx}
		.personal-data .list .item .pictrue{width:88rpx;height:88rpx;}
		.personal-data .list .item .pictrue image{width:100%;height:100%;border-radius:50%;}
		.personal-data .list .item .input{width:100%;color:#868686; border: 1px solid #d3d4de;padding: 20rpx 0;background: white;opacity: 0.5;border-radius: 10rpx;}
		.personal-data .list .item .input .id{width:365rpx;}
		.personal-data .list .item .input input {
		    padding: 0 27rpx;
		    font-size: 24rpx;
		}
		page {
		    background-color: white!important;
		}
		.personal_bottom {
		    position: fixed;
		    bottom: 0;
		    left: 50%;
		    transform: translateX(-50%);
		}
		.personal_bottom image {
		    width: 39rpx;
		}
		.personal_bottom .bottom_text{
		    float: right;
		    line-height: 42rpx;
		}
		.personal-data .list .item .input .iconfont{font-size:35rpx;}
		.personal-data .modifyBnt{font-size:32rpx;color:#fff;width:690rpx;height:90rpx;border-radius:15rpx;text-align:center;line-height:90rpx;margin:76rpx auto 0 auto;background-image: linear-gradient(to right,#0a9de2, #27dbb4);}
		.personal-data .logOut{font-size:32rpx;text-align:center;width:690rpx;height:90rpx;border-radius:45rpx;margin:30rpx auto 0 auto;}
</style>
