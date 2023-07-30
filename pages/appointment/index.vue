<template>
<!-- 	<form @submit="formSubmit" class="form_book">
		<view class="list">
			<view class="item">
				姓　　名
			</view>
			<input type="text" name='real_name' placeholder="真实姓名" :value="appoinInfo.real_name"/>
		</view>
		<view class="list">
			<view class="item">	
				联系方式
			</view>
			<input type="text" name='phone2' placeholder="手机号码" :value="appoinInfo.phone"/>
		</view>
		<view class="list">
			<view class="item">
				预约时间
			</view>
			<input type="text" name='birthday' placeholder="预约时间" :value="appoinInfo.birthday"/>
		</view>
		<view class="list">
			<view class="item">
				预约项目
			</view>
			<input type="text" name='mark' placeholder="预约项目" :value="appoinInfo.mark"/>
		</view>
		<button type="primary" form-type="submit">确认</button>
	</form> -->
	<view class="wrap">
		<view class="list">
			<view class="item">
				姓　　名
			</view>
			<view class="">
				{{appoinInfo.real_name}}
			</view>
		</view>
		<view class="list">
			<view class="item">
				联系方式
			</view>
			<view class="">
				{{appoinInfo.phone2}}
			</view>
		</view>
		<view class="list">
			<view class="item">
				预约时间
			</view>
			<view class="">
				{{appoinInfo.birthday}}
			</view>
		</view>
		<view class="list">
			<view class="item">
				预约项目
			</view>
			<view class="">
				{{appoinInfo.mark}}
			</view>
		</view>
		<button type="primary" @click="sumbitInfo">确认</button>
	</view>

</template>

<script>
	import {
		getUserInfo,
		getAppointInfo,
		editAppointInfo,
	} from '@/api/user.js';
	
	import {
		mapGetters
	} from "vuex";
	
	import Routine from '@/libs/routine';
	
	export default {
		data() {
			return {
				userInfo: {},
				appoinInfo: {},
			}
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
				this.getAppointInfo();
			};
			
		},
		methods: {
			// 授权回调
			onLoadFun() {
				this.getUserInfo();
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
			/**
			 * 时间戳换时间
			 */
			formatDate(time) {
				var date = new Date(time*1000);
				var YY = date.getFullYear() + '-';
				var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
				var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
				var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
				var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
				// return YY + MM + DD + " " + hh + mm + ss;
				return YY + MM + DD ;
			},
			/**
			 * 获取预约信息
			 */
			getAppointInfo:function() {
				let that = this;
				getAppointInfo().then(res=> {
					res.msg = JSON.parse(res.msg);
					that.appoinInfo = res.msg;
					that.appoinInfo.birthday = that.formatDate(res.msg.birthday);
				});
			},
			/**
			 * 确认预约信息
			 */
			sumbitInfo: function() {
				var that = this;
				var birthday = new Date(that.appoinInfo.birthday).getTime()/ 1000;
				var value = {
					'real_name': that.appoinInfo.real_name,
					'phone2': that.appoinInfo.phone2,
					'birthday': birthday,
					'mark': that.appoinInfo.mark,
				}
				editAppointInfo(value).then(res=>{
				  return this.$util.Tips({ title: res.msg, icon: 'success' }, { tab: 4, url: 1 });
				}).catch(msg=>{
				  return this.$util.Tips({ title: msg || '保存失败，您并没有修改' }, { tab: 3, url: 1 });
				});;
			},
			/**
			 * 确认预约信息
			 */
			formSubmit: function(e) {
				console.log(e);
				var value = e.detail.value;
				value.birthday = new Date(value.birthday).getTime()/ 1000;
				editAppointInfo(value).then(res=>{
			      return this.$util.Tips({ title: res.msg, icon: 'success' }, { tab: 4, url: 1 });
			    }).catch(msg=>{
			      return this.$util.Tips({ title: msg || '保存失败，您并没有修改' }, { tab: 3, url: 1 });
			    });;
			},
		},
		
	}
</script>

<style>
	.form_book{
		display: block;
		width: 80%;
		margin: 0 auto;
	}
	.list{
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20rpx;
	}
	.list .item{
		font-size: 30rpx;
		margin-right: 15rpx;
	}
	.list input{
		border: 1px solid #000;
		font-size: 25rpx;
		border-radius: 8rpx;
		padding-left: 10rpx;
	}
	button{
		display: block;
		margin: 20rpx auto 0;
		width: 150rpx;
		font-size: 30rpx;
		padding: 5px 20px;
	}
</style>
