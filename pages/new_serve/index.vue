<template>
	<view>
		<view v-if="showDialog" class="dialog">
		  <view class="dialog-content">
		    <view>站点正在紧急维护中</view>
		
		    <button bindtap="confirmDialog">确定</button>
		  </view>
		</view>
		<!-- 顶部栏目 -->
		<view class="index_top">
			服务
		</view>
		<!--  轮播图 -->
		<!-- <view class="new_serve">
			<view class='swiper' v-if="imgUrls.length > 0">
				<swiper indicator-dots="true" :autoplay="autoplay" :circular="circular" :interval="interval" :duration="duration"
				 indicator-color="rgba(102,102,102,0.3)" indicator-active-color="#666">
					<block v-for="(item,index) in imgUrls" :key="index">
						<swiper-item>
							<navigator :url="item.link">
								<image :src="item.pic" class="slide-image" />
							</navigator>
						</swiper-item>
					</block>
				</swiper>
			</view>
		</view> -->
		<!-- 自助服务 -->
		<view class="serve_content">
		    <view class="serve_item_1">
		        <view class="item1_top">
		            自助服务
		        </view>
		        <view class="item1_bottom">
		            <view class="bottom1_left" >
		                <image class="" src="/static/images/jz_1.png" mode="widthFix" />
		                <view class="bottom_text">
		                    就诊情况
		                </view> 
		            </view>
		            <view class="bottom1_right">
		                    <view class="right1_item" >
		                        <image class="" src="/static/images/tuijian.png" mode="widthFix" />
		                        <view class="right1_text">
		                            推荐好友
		                        </view>
		                    </view>
		                    <view class="right1_item" >
		                        <image class="" src="/static/images/daohang.png" mode="widthFix" />
		                        <view class="right1_text">
		                            就诊导航
		                        </view>
		                    </view>
		                    <view class="right1_item" >
		                        <image class="" src="/static/images/jiancha.png" mode="widthFix" />
		                        <view class="right1_text">
		                            检查详情
		                        </view>
		                    </view> 
		                    <button class="right1_item" open-type="contact" hover-class='none'>
		                        <image class="" src="/static/images/zixunyy.png" mode="widthFix" />
		                        <view class="right1_text">
		                            咨询预约
		                        </view>
		                    </button>
		                </view>
		                
		            </view>
		          
		    </view>
		 <!--   <view class="serve_item_2">
		         <view class="item2_top">
		            会员服务
		        </view>
		        <view class="item2_bottom">
		
		            <view class="bottom2_img" wx:for="{{MyMenus}}" wx:key='index' bindtap='goPages' data-url='{{item.url}}' wx:if="{{item.url!='#' && item.url!='/pages/admin/index' && item.url!='/pages/service/index'}}">
		                <image class="" src="{{item.pic}}" mode="widthFix" />
		                <view class="img_text">
		                    {{item.name}}
		                </view>
		            </view>    
		        </view>     
		    </view>   -->
			<!-- 会员菜单 -->
			<view class="user-menus" style="margin-top: 20rpx;">
				<view class="menu-title">我的服务</view>
				<view class="list-box">
					<!-- #ifdef APP-PLUS || H5 -->
					<block v-for="(item,index) in MyMenus" :key="index">
						<view class="item" :url="item.url" hover-class="none"
							v-if="item.url!='#' && item.url!='/pages/service/index'"
							@click="goMenuPage(item.url, item.name)">
							<image :src="item.pic"></image>
							<text>{{item.name}}</text>
						</view>
					</block>
					<!-- #endif -->
					<!-- #ifdef MP -->
					<block v-for="(item,index) in MyMenus" :key="index">
						<view class="item" :url="item.url" hover-class="none" v-if="item.url!='#' 
							&& item.url!='/pages/service/index' 
							&& item.url!='/pages/customer_list/chat' 
							|| (item.url=='/pages/customer_list/chat' && routineContact == 0)" @click="goMenuPage(item.url, item.name)">
							<image :src="item.pic"></image>
							<text>{{item.name}}</text>
						</view>
					</block>
					<button class="item" open-type='contact' v-if="routineContact == 1">
						<image src="/static/images/contact.png"></image>
						<text>联系客服</text>
					</button>
					<!-- #endif -->
					<!-- #ifdef APP-PLUS -->
					<view class="item" hover-class="none" @click="goMenuPage('/pages/users/privacy/index')">
						<image src="/static/images/menu.png"></image>
						<text>隐私协议</text>
					</view>
					<!-- #endif -->
				</view>
			</view>
			<view class="user-menus" style="margin-top: 20rpx;" v-if="storeMenu.length">
				<view class="menu-title">商家管理</view>
				<view class="list-box">
					<block v-for="(item,index) in storeMenu" :key="index">
						<view class="item" :url="item.url" hover-class="none"
							v-if="item.url!='#' && item.url!='/pages/service/index'"
							@click="goMenuPage(item.url, item.name)">
							<image :src="item.pic"></image>
							<text>{{item.name}}</text>
						</view>
					</block>
				</view>
			</view>
		</view>
		
	<!-- 	<pageFooter v-if="footerSee"></pageFooter> -->
		
		<!-- <pageFooter></pageFooter> -->
		<view class="foot" v-if="newData.status && newData.status.status">
			<view class="page-footer" id="target" :style="{'background-color':newData.bgColor.color[0].item}">
				<view class="foot-item" v-for="(item,index) in newData.menuList" :key="index"
					@click="goRouter(item)">
					<block v-if="item.link == activeRouter">
						<image :src="item.imgList[0]"></image>
						<view class="txt" :style="{color:newData.activeTxtColor.color[0].item}">{{item.name}}
						</view>
					</block>
					<block v-else>
						<image :src="item.imgList[1]"></image>
						<view class="txt" :style="{color:newData.txtColor.color[0].item}">{{item.name}}</view>
					</block>
					<div class="count-num"
						v-if="item.link === '/pages/order_addcart/order_addcart' && countNum > 0">
						{{countNum}}
					</div>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getMenuList,
		getUserInfo,
		setVisit,
		updateUserInfo
	} from '@/api/user.js';
	import {
		wechatAuthV2,
		getNavigation,
		silenceAuth
	} from '@/api/public.js';
	import {
		toLogin
	} from '@/libs/login.js';
	import {
		mapGetters
	} from "vuex";
	// #ifdef MP
	import authorize from '@/components/Authorize';
	// #endif
	// #ifdef H5
	import Auth from '@/libs/wechat';
	// #endif
	const app = getApp();
	import pageFooter from '@/components/pageFooter/index.vue';
	import {
		getIndexData
	} from '@/api/api.js';
	import Routine from '@/libs/routine';
	export default {
		components: {
			pageFooter,
			// #ifdef MP
			authorize
			// #endif
		},
		computed: mapGetters(['isLogin']),
		data() {
			return {
				imgUrls: [],
				footerSee: false,
				newData: {},
				activeRouter: '',
				MyMenus: [],
				userInfo: {},
				// #ifdef H5 || MP
				pageHeight: '100%',
				routineContact: 0,
				showDialog: true,
				// #endif
			};
		},
		onLoad(options) {
			if (uni.getStorageSync('FOOTER_BAR')) {
				this.footerSee = true
				uni.hideTabBar()
			} else {
			
			}
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
			this.getIndexData();
			
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
			let curRoute = routes[routes.length - 1].route //获取当前页面路由
			this.activeRouter = '/' + curRoute
		},
		onShow:function() {
			let that=this;
			getNavigation().then(res => {
				this.newData = res.data
			});
			if (that.isLogin) {
			//	this.getUserInfo();
				this.getMyMenus();
			//	this.setVisit();
			};
		},
		methods:{
			// 点击确定按钮的事件处理函数
			  confirmDialog: function() {
			    // 逻辑处理代码，可以在这里进行一些操作
			
			    // 设置showDialog为true，弹窗仍然显示
			    this.setData({
			      showDialog: true
			    });
			},
			getIndexData() {
				//let that=this;
				getIndexData().then(res=>{
					//console.log(res);
					this.imgUrls=res.data.banner;
					 // that.setData({
						// imgUrls: res.data.info
					 // });
				});
			},
			//底部导航栏跳转
			goRouter(item) {
				var pages = getCurrentPages();
				var page = (pages[pages.length - 1]).$page.fullPath;
				if (item.link == page) return
				uni.switchTab({
					url: item.link,
					fail(err) {
						uni.redirectTo({
							url: item.link
						})
					}
				})
			},
			getWechatuserinfo() {
				//#ifdef H5
				Auth.isWeixin() && Auth.oAuth('snsapi_userinfo', '/pages/user/index');
				//#endif
			},
			getRoutineUserInfo(e) {
				updateUserInfo({
					userInfo: e.detail.userInfo
				}).then(res => {
					this.getUserInfo();
					return this.$util.Tips('更新用户信息成功');
				}).catch(res => {
			
				})
			},
			// 记录会员访问
			setVisit() {
				setVisit({
					url: '/pages/user/index'
				}).then(res => {})
			},
			// 打开授权
			openAuto() {
				toLogin();
			},
			// 授权回调
			onLoadFun() {
				this.getUserInfo();
				this.getMyMenus();
				this.setVisit();
			},
			Setting: function() {
				uni.openSetting({
					success: function(res) {}
				});
			},
			// 授权关闭
			authColse: function(e) {
				this.isShowAuth = e
			},
			// 绑定手机
			bindPhone() {
				uni.navigateTo({
					url: '/pages/users/user_phone/index'
				})
			},
			/**
			 * 获取个人用户信息
			 */
			getUserInfo: function() {
				let that = this;
				getUserInfo().then(res => {
					that.userInfo = res.data
				//	that.$store.commit("SETUID", res.data.uid);
					// that.orderMenu.forEach((item, index) => {
					// 	switch (item.title) {
					// 		case '待付款':
					// 			item.num = res.data.orderStatusNum.unpaid_count
					// 			break
					// 		case '待发货':
					// 			item.num = res.data.orderStatusNum.unshipped_count
					// 			break
					// 		case '待收货':
					// 			item.num = res.data.orderStatusNum.received_count
					// 			break
					// 		case '待评价':
					// 			item.num = res.data.orderStatusNum.evaluated_count
					// 			break
					// 		case '售后/退款':
					// 			item.num = res.data.orderStatusNum.refunding_count
					// 			break
					// 	}
					// })
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
			/**
			 * 
			 * 获取个人中心图标
			 */
			getMyMenus: function() {
				let that = this;
				// if (this.MyMenus.length) return;
				getMenuList().then(res => {
					let storeMenu = []
					let myMenu = []
					res.data.routine_my_menus.forEach((el, index, arr) => {
						if (el.url == '/pages/admin/order/index' || el.url ==
							'/pages/admin/order_cancellation/index' || el.name ==
							'客服接待') {
							storeMenu.push(el)
						} else {
							myMenu.push(el)
						}
					})
					that.$set(that, 'MyMenus', myMenu);
				//	that.$set(that, 'storeMenu', storeMenu)
					//this.imgUrls = res.data.routine_my_banner
					this.routineContact = Number(res.data.routine_contact_type)
				});
			},
			/// goMenuPage
			goMenuPage(url, name) {
				if (this.isLogin) {
					if (url.indexOf('http') === -1) {
						// #ifdef H5
						if (name && name === '客服接待') {
							return uni.navigateTo({
								url: `/pages/annex/web_view/index?url=${location.origin}${url}`
							});
						}
						// #endif
						uni.navigateTo({
							url: url
						})
					} else {
						uni.navigateTo({
							url: `/pages/annex/web_view/index?url=${url}`
						});
					}
				} else {
					// #ifdef MP
					this.openAuto()
					// #endif
				}
			},
			// 编辑页面
			goEdit() {
				if (this.isLogin == false) {
					toLogin();
				} else {
					uni.navigateTo({
						url: '/pages/users/user_info/index'
					})
				}
			
			},
			// 签到
			goSignIn() {
				uni.navigateTo({
					url: '/pages/users/user_sgin/index'
				})
			},
		},
	}
</script>

<style lang="scss">
	.dialog {
		z-index: 9999;
	  position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  background-color: rgba(0, 0, 0, 0.5);
	
	  .dialog-content {
	    width: 300px;
	    background-color: #fff;
	    padding: 20px;
	    border-radius: 10px;
	    text-align: center;
	
	    > view {
	      margin-bottom: 10px;
		  font-size: 52rpx;
	    }
	
	    > button {
	      background-color: #007aff;
	      color: #fff;
	      padding: 10px 20px;
	      border-radius: 4px;
	    }
	  }
	}
	.index_top {
		height: 84rpx;
		background: #00b0ef;
		color: white;
		line-height: 84rpx;
		padding: 0 35rpx;
		position: fixed;
		letter-spacing: 6rpx;
		top: 0; 
		left: 0; 
		width: 100%;
		z-index: 99; 
	}
	.new_serve {
		margin-top: 136rpx;
		swiper { 
			width: 100%;
			height: calc(100vw*400/710);
			swiper-item {
				width: 100%;
				height: 100%;
				navigator {
					height: 100%;
					.slide-image {
						width: 100%;
						height: 100%;
						display: block;
					}
				}
			}
		}
	}
	//自助服务以下
	.serve_content {
		background: #f1f1f1;
		overflow: hidden;
		margin-top: 130rpx;
		.serve_item_1 {
		    background: white;
			margin: 14rpx 22rpx;
			overflow: hidden;
			.item1_top {
				margin: 18rpx 40rpx;
				position: relative;
				&::after {
					position: absolute;
					content: "";
					top: 2px;
					left: -7px;
					width: 4rpx;
					height: 30rpx;
					background: #10AAF1;
				}
			}
			.item1_bottom {
				display: flex;
			    padding: 35rpx 0;
			    padding-top: 0;
				.bottom1_left {
					flex: 1.5;
					position: relative;
					padding: 33rpx;
					padding-right: 0;
					image {
						width: 148rpx;
					    height: 148rpx;
					    display: block;
					    margin: 0 auto;
					}
					.bottom_text {
						position: absolute;
						bottom: 30%;
						left: 24%;
						transform: translateX(50%);
						font-size: 20rpx;
					}
				}
				.bottom1_right {
					flex: 2.5;
				    display: flex;
				    flex-wrap: wrap;
				    padding: 0 26rpx;
					.right1_item {
						flex: 50%;
						padding: 17rpx;
						.right1_text {
							text-align: center;
							font-size: 24rpx;
						}
					}
					image {
						width: 70rpx;
					    height: 70rpx;
					    display: block;
					    margin: 0 auto;
					}
				}
			}
		}
		.user-menus {
			background-color: #fff;
			margin: 0 30rpx;
			border-radius: 16rpx;
		
			.menu-title {
				padding: 30rpx 30rpx 40rpx;
				font-size: 30rpx;
				color: #282828;
			}
		
			.list-box {
				display: flex;
				flex-wrap: wrap;
				padding: 0;
			}
		
			.item {
				position: relative;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-direction: column;
				width: 25%;
				margin-bottom: 47rpx;
				font-size: 26rpx;
				color: #333333;
		
				image {
					width: 52rpx;
					height: 52rpx;
					margin-bottom: 18rpx;
				}
		
		
				&:last-child::before {
					display: none;
				}
			}
		
			button {
				font-size: 28rpx;
			}
		}
		.serve_item_2 {
		    background: white;
		    margin: 14rpx 22rpx;
		    overflow: hidden;
		    border-radius: 20rpx;
			.item2_top {
				margin: 18rpx 40rpx;
				position: relative;
				&::after {
					position: absolute;
				    content: "";
				    top: 2px;
				    left: -7px;
				    width: 4rpx;
				    height: 30rpx;
				    background: #10AAF1;
				}
			}
			.item2_bottom {
			    display: flex;
			    flex-wrap: wrap;
			    padding: 20rpx;
			    padding-top: 0;
				.bottom2_img {
					width: 20%;
					padding: 20rpx;
					image {
					    width: 60rpx;
					    height: 60rpx;
					    display: block;
					    margin: 0 auto;
					    margin-bottom: 10rpx;
					}
					.img_text {
						text-align: center;
						font-size: 20rpx;
					}
				}
			}
		}
	}
	.page-footer {
		position: fixed;
		bottom: 0;
		z-index: 30;
		display: flex;
		align-items: center;
		width: 100%;
		height: calc(98rpx+ constant(safe-area-inset-bottom)); ///兼容 IOS<11.2/
		height: calc(98rpx + env(safe-area-inset-bottom)); ///兼容 IOS>11.2/
		box-sizing: border-box;
		border-top: solid 1rpx #F3F3F3;
		background-color: #fff;
		box-shadow: 0px 0px 17rpx 1rpx rgba(206, 206, 206, 0.32);
		padding-bottom: constant(safe-area-inset-bottom); ///兼容 IOS<11.2/
		padding-bottom: env(safe-area-inset-bottom); ///兼容 IOS>11.2/
	
		.foot-item {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
	
		.foot-item image {
			height: 50rpx;
			width: 50rpx;
			text-align: center;
			margin: 0 auto;
		}
	
		.foot-item .txt {
			font-size: 24rpx;
	
	
			&.active {}
		}
	}
</style>
