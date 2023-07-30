<template>
	<view class="card-wrap">
		<view class="card-cont">
			<view class="card-top">
				<view class="card-avatar">
					<image src="https://www.dentalzh.cn/static/images/wechat-avatar.webp" mode="widthFix"></image>
				</view>
				<view class="card-name">
					<view class="wechat-name">
						<text>
							小維助理
						</text>
						<image src="https://www.dentalzh.cn/static/images/icon-women.png" mode="widthFix"></image>
					</view>
					<view class="wechat-location">
						香港 油尖旺區
					</view>
				</view>
			</view>
			<view class="card-bottom">
				<image src="https://www.dentalzh.cn/static/images/wechat-card-nearhk.jpg" mode="widthFix"
					show-menu-by-longpress="true" @longpress="handleLongPress"></image>
			</view>
			<view class="wenzi">長按上圖二維碼識別添加</view>
		</view>
	</view>

</template>

<script>
	import {
		googleFollow
	} from '@/api/api.js';
	export default {
		data() {
			return {
				ifLongPress : false,
				client_id : '',
				gclid: '',
			}
		},
		onLoad(options) {
			if(options.client_id != "" && options.client_id != undefined){
				this.client_id = options.client_id;
			}
			if(options.gclid != "" && options.gclid != undefined){
				this.gclid = options.gclid;
			}
		},
		methods: {
			handleLongPress() {
				let that = this;
				that.ifLongPress = true;
				console.log('用户长按了二维码');
				console.log('that.client_id：' + that.client_id);
				console.log('that.gclid：' + that.gclid);
				
				let data = {
					measurement_id: 'G-991HGVVV9Q',
					api_secret: 'Ce2CgPp6SmevF5YzcMlXcg',
					client_id: that.client_id,
					gclid: that.gclid,
				}
				googleFollow(data).then(res=>{
					console.log(res);
				}).catch(err => {
					console.log(err);
				});
			},
		},

	}
</script>

<style>
	.card-wrap {
		padding: 30% 0 0;
		box-sizing: border-box;
		background-color: #fff;
		height: 100vh;
	}

	.card-cont {
		width: 80%;
		padding: 5% 5%;
		margin: 0 auto;
		box-shadow: 0px 0px 10px 1px #dedede;
		box-sizing: border-box;
		border-radius: 8px;
	}

	.card-top {
		display: flex;
		align-items: center;
	}

	.card-top .card-avatar image {
		width: 100rpx;
		height: 100rpx;
	}

	.card-name {
		margin-left: 14rpx;
	}

	.wechat-name {
		display: flex;
		align-items: center;
		font-size: 32rpx;
	}

	.wechat-name image {
		width: 30rpx;
		height: 30rpx;
		margin-left: 10rpx;
	}

	.wechat-location {
		font-size: 24rpx;
		margin-top: 8rpx;
		color: #666666;
	}

	.card-bottom {
		margin-top: 40rpx;
	}

	.card-bottom image {
		width: 100%;
		height: 527.82rpx;
	}

	.wenzi {
		text-align: center;
		margin-top: 40rpx;
		font-size: 30rpx;
		color: red;
		letter-spacing: 1px;
		font-weight: bold;
	}
</style>