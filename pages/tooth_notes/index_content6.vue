<template>
	<view>
		<web-view src="https://mp.weixin.qq.com/s?__biz=MzkyMjMwODE3Ng==&mid=2247483953&idx=6&sn=1579399bcfe4e8a0e177dd1fa351ad90&chksm=c1f7190ef680901840dbd2a40da0a40de25d3bc936eac1aa1c6f941404507c6775c53b3eeed3&token=1200207803&lang=zh_CN#rd"></web-view> 
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
				select_web:5,
				select_web2:6,
				notes_contents:[],
				userInfo: {},
			};
		},
		onLoad(options) {
	
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
		//#ifdef MP
		onShareAppMessage() {
			let that = this;
			return {
				title: that.notes_contents[that.select_web].contents,
				path: 'pages/tooth_notes/index_content'+that.select_web2,
				imageUrl: that.notes_contents[that.select_web].note_pic,
			};
		},
	    //#endif
		methods: {
			getIndexData() {
				//let that=this;
				getIndexData().then(res=>{
					this.notes_contents=res.data.tooth_notes;
					 // that.setData({
						// imgUrls: res.data.info
					 // });
				//	 this.new_content=this.notes_contents.reverse();
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
		}
	}
</script>

<style lang="scss">

</style>
