<template>
	<view>
		<!-- 顶部栏目 -->
		<view class="title">
			卡券生成
		</view>
		<view>
			<button type="primary" @click="receive" class="receive">领取</button>
		</view>
		<view>
			{{msg}}
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				msg: 'Hello',
			}
		},
		
		methods:{
			async receive(){
				console.log('receive');
			},
		},
		
		onLoad: function(){
			console.log('App Load')
		},
		onShow: function(){
			console.log('App Show')
		},
		onHide: function(){
			console.log('App Hide')
		},
	}
</script>
 
<style>
		.title{
			font-size: x-large;
			text-align: center;
			margin-top: 100rpx;
		}
		
		.receive{
			width: 200rpx;
			height: 100rpx;
			line-height: 100rpx;
			font-size: small;
			color: #fff;
			margin: 4% auto;
		}
</style>
