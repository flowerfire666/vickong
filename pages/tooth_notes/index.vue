<template>
	<view class="notes_content">
		<block v-for="(item,index) in notes_contents" :key="index">
			<view class="notes_top" v-if="item.id==1">
				<navigator url="/pages/tooth_notes/index_content">
					<image :src="item.note_pic" mode="widthFix"/>
					<view class="notes_text">
					{{item.contents}}
					</view>
				</navigator>
			</view>
			<view class="notes_bottom" v-else>
		
					<view class="notes_item" @click="goDetail(item.id)"> 
						<view class="item_left"> 
							{{item.contents}}
						</view>
						<view class="item_right">
							<image :src="item.note_pic" mode="widthFix"></image>
						</view>
					</view>
			
			</view>
		</block>
	</view>
</template>

<script>
	import Routine from '@/libs/routine';
	import {
		getUserInfo,
	} from '@/api/user.js';
	import {
		mapGetters
	} from "vuex";
	import {
		getIndexData
	} from '@/api/api.js';
	export default {
		data() {
			return {
				notes_contents:[],
				userInfo: {},
				//new_content:[],
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
			this.getIndexData();
		},
		onShow:function(){
			let that = this;
			if (that.isLogin) {
				this.getUserInfo();
			//	this.getMyMenus();
			//	this.setVisit();
			};
			
		},
		//#ifdef MP
		onShareAppMessage() {
			return {
				title: '術後注意事項',
				path: '/pages/tooth_notes/index',
			};
		},
		//#endif
		methods: {
			getIndexData() {
				//let that=this;
				getIndexData().then(res=>{
					console.log(res);
					this.notes_contents=res.data.tooth_notes;
					 // that.setData({
						// imgUrls: res.data.info
					 // });
				//	 this.new_content=this.notes_contents.reverse();
				});
			},
			goDetail(item) {
				uni.navigateTo({
					url: '/pages/tooth_notes/index_content' + item,
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
		},
	
	}
</script>

<style lang="scss">
	.notes_content {
		.notes_top {
			position: relative;
			image {
				width: 100%;
				display: block;
			}
			.notes_text {
				position: absolute;
				left: 0px;
				bottom: 0px;
				width: 100%;
				font-size: 34rpx;
				color: white;
				font-weight: bold;
				letter-spacing: 3rpx;
				background-image: -webkit-linear-gradient(bottom, rgba(27, 26, 26, 0.55) 50%, rgba(127, 127, 122, 0.1));
				background-image: linear-gradient(to top, rgba(27, 26, 26, 0.55) 50%, rgba(127, 127, 122, 0.1));
				height: 108rpx;
				line-height: 123rpx;
				padding-left: 31rpx;
			}
		}
		.notes_bottom {
			.notes_item {
				background: white;
				padding: 40rpx 40rpx 20rpx 40rpx;
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-pack: justify;
				-webkit-justify-content: space-between;
				justify-content: space-between;
				border-bottom: 4rpx solid #f1eded;
				.item_left {
					flex: 7;
					font-size: 32rpx;
					line-height: 100rpx;
				}
				.item_right {
					flex:2;
					image {
						width: 100%;
						display: block;
					}
				}
			}
			.item_bottom {
				margin: 0 20rpx;
			//	border-bottom: 2px solid #f1eded;
			}
		}
	}
</style>
