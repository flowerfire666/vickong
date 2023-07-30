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
			维港品牌
		</view>
		<view class='newsList'>		
			<view class="scroll_tap">
			    <scroll-view class="" scroll-x="true">
			        <block  v-for="(item,index) in navList" :key='index'>
			            <view class="item" :class='active==item.id?"on":""'  data-id="{item.id}"  @click="tabSelect(item.id,index)"  v-if="item.id!=0">
			                {{item.title}}
			            </view>
			        </block>
			    </scroll-view>
			</view>
			
			<view class="ppjs_content" v-if="active==6">
				<!-- <block  v-for="(item,index) in articleList" :key="index">
			        <image class="" :src="item.image_input[0]" mode="widthFix" />
			    </block> -->
				<!-- Banner -->
				<view class="banner">
					<image src="https://www.dentalzh.cn/statics/images_ppjj/banner.png" alt="拱北維港口腔">
				</view>
				<!-- 关于维港 -->
				<view class="about space">
				    <view class="title">
				        <view class="english">
				            <text>about us</text><text></text>
				        </view>
				        <view class="title_content">
				            關 於 維 港.
				        </view>
				    </view>
				    <view class="content">
						<view class="intro_video">
						    <image src="https://www.dentalzh.cn/statics/images_ppjj/about.png" alt="珠海維港口腔評價">
						    <image class="play" src="https://www.dentalzh.cn/statics/images_ppjj/play.png" alt="珠海維港口腔評價">
						    <view class="play_bg"></view>
						</view>
				        <view class="intro">
				            <view>	維港口腔連鎖致力於引領醫療服務回歸醫療本質，係粵港澳大灣區專業醫療品牌，在2020年抗疫期間，維港口腔3月1日正式複工接診，成為「國內較早獲得複工資質的牙科連鎖機構」。維港口腔連鎖接診多個國家和地區的顧客，執行嚴格的診療服務標準，擁有種植牙5大優勢和牙齒矯正6項規範，與高校和醫院聯合開展牙周診療，長期開展口腔健康公益活動，致力於成為市民放心看牙的好牙科，做廣受香港、澳門、深圳與珠海市民的喜愛及好評牙科品牌。
				            </view>
				            <view>	維港口腔連鎖日常診療以廣東話、潮汕話、客家話、英語、普通話、泰語、日語等7種語言專業諮詢接診，向市民提供專業種植牙、牙齒矯正、牙齒美學修復、牙科治療等口腔科服務，多位廣東籍的人民醫院口腔科專家主任、省級三甲醫院 口腔科執業醫師定點指導會診，執行好的服務品質、公開透明的收費標準，實實在在看牙，創造歡樂幸福。
				            </view>
				        </view>
				    </view>
				    <view class="icon">
				        <view class="icon-item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/pp.png" alt="珠海維港口腔好唔好">
				            <view>品牌連鎖</view>
				        </view>
				        <view class="icon-item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/xd.png" alt="珠海維港口腔評價">
				            <view>專業消毒</view>
				        </view>
				        <view class="icon-item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/bz.png" alt="珠海維港口腔好唔好">
				            <view>專業標準</view>
				        </view>
				        <view class="icon-item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/my.png" alt="珠海維港口腔怎麼樣">
				            <view>專業醫師</view>
				        </view>
				        <view class="icon-item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/js.png" alt="珠海維港口腔如何">
				            <view>進口技術</view>
				        </view>
				    </view>
				</view>
				<!-- 环境 -->
				<view class="environment space">
				    <view class="title">
				        <view class="english">
				            <text>Environment</text><text></text>
				        </view>
				        <view class="title_content">
				            品 牌 環 境.
				        </view>
				    </view>
				    <view class="envir_img_wrap">
				        <view class="envir_img_item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/hj1.webp" alt="珠海維港口腔評價">
				            <view class="mb"></view>
				            <view class="environment_intro">
				                <view>
				                    整潔明亮<br>的環境
				                </view>
				            </view>
				        </view>
				        <view class="envir_img_item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/hj2.webp" alt="珠海維港口腔評價">
				            <view class="mb"></view>
				            <view class="environment_intro">
				                <view>
				                    明亮乾淨<br>的前台
				                </view>
				            </view>
				        </view>
				        <view class="envir_img_item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/hj3.webp" alt="珠海維港口腔評價">
				            <view class="mb"></view>
				            <view class="environment_intro">
				                <view>
				                    溫馨舒適<br>的候診區
				                </view>
				            </view>
				        </view>
				        <view class="envir_img_item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/hj4.png" alt="珠海維港口腔評價">
				            <view class="mb"></view>
				            <view class="environment_intro">
				                <view>
				                    琳瑯滿目<br>的榮譽牌
				                </view>
				            </view>
				        </view>
				        <view class="envir_img_item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/hj5.png" alt="珠海維港口腔怎麼樣">
				            <view class="mb"></view>
				            <view class="environment_intro">
				                <view>
				                    寬敞乾淨<br>的診室
				                </view>
				            </view>
				        </view>
				        <view class="envir_img_item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/hj6.png" alt="珠海維港口腔口碑">
				            <view class="mb"></view>
				            <view class="environment_intro">
				                <view>
				                    寬敞乾淨<br>的診室
				                </view>
				            </view>
				        </view>
				        <view class="envir_img_item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/hj7.png" alt="珠海維港口腔好唔好">
				            <view class="mb"></view>
				            <view class="environment_intro">
				                <view>
				                    寬敞乾淨<br>的診室
				                </view>
				            </view>
				        </view>
				        <view class="envir_img_item">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/hj8.png" alt="珠海維港口腔評價">
				            <view class="mb"></view>
				            <view class="environment_intro">
				                <view>
				                    寬敞乾淨<br>的診室
				                </view>
				            </view>
				        </view>
				    </view>
				</view>
				<!-- 荣誉 -->
				<view class="brand space">
				    <view class="title">
				        <view class="english">
				            <text>brand honor</text><text></text>
				        </view>
				        <view class="title_content">
				            品 牌 榮 譽.
				        </view>
				    </view>
				    <view class="brand_img">
				        <image src="https://www.dentalzh.cn/statics/images_ppjj/award-m.png" alt="珠海維港口腔評價">
				    </view>
				</view>
				<!-- 品牌连锁 -->
				<view class="chain space">
				    <view class="title">
				        <view class="english">
				            <text>vickong dental</text><text></text>
				        </view>
				        <view class="title_content">
				            品 牌 連 鎖.
				        </view>
				    </view>
				    <view class="branch branch1">
						<view class="branch_honor">
						    <view>清華大學博士後工作站</view>
						    <view>廣東藥科大學教授/導師工作站</view>
						    <view>維港國際醫療集團（香港）有限公司大灣區旗下第八分院</view>
						    <view>香港健道國際醫療集團指定合作醫療機構</view>
						    <view>廣藥附屬第一醫院口腔科(省級重點)專家會診機構</view>
						    <view>MSH Asia萬欣和指定會員合作醫療品牌</view>
						    <view>廣東衛視2020年全國愛牙日專訪</view>
						</view>
				        <view class="branch1_img">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/zhuhai2.webp" alt="珠海維港口腔評價">
				            <view>維港口腔連鎖「珠海拱北院」</view>
				        </view>
				        <view class="branch1_img">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/huanle.webp" alt="珠海維港口腔評價">
				            <view>維港歡樂口腔(羅湖區區委院)</view>
				        </view>
				    </view>
				    <view class="branch branch2">
				        <view class="branch2_img">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/huanxiao-m.png" alt="珠海維港口腔評價">
				            <view>維港歡笑口腔</view>
				        </view>
				        <view class="branch2_img">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/jiale-m.png" alt="珠海維港口腔評價">
				            <view>維港加樂口腔</view>
				        </view>
				        <view class="branch2_img">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/sankong-m.png" alt="珠海維港口腔評價">
				            <view>維港三康口腔</view>
				        </view>
				    </view>
				</view>
				<!-- 理念 -->
				<view class="profile space">
				    <view class="title">
				        <view class="english">
				            <text>company profile</text><text></text>
				        </view>
				        <view class="title_content">
				            責 任 與 理 念.
				        </view>
				    </view>
				    <view class="profile_content">
				        <view class="profile_1">
				           <image mode="widthFix" src="https://www.dentalzh.cn/statics/images_ppjj/ppjj_1_1.webp" alt="珠海維港口腔評價">
				           <image mode="widthFix" src="https://www.dentalzh.cn/statics/images_ppjj/ppjj_1_2.webp" alt="珠海維港口腔評價">
				           <image mode="widthFix" src="https://www.dentalzh.cn/statics/images_ppjj/ppjj_1_3.png" alt="珠海維港口腔評價">
				        </view>
				        <view id="profile_item1" class="profile_item" :class="[isActive[0]?'profile_item_active':'']" @click="changeProStatu" data-proitem="0">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/idea1-m.png" alt="珠海維港口腔如何">
				            <view class="mb"></view>
				            <view class="profile_intro">
				                <view>回歸醫療本質的執業理念</view>
				                <view>
				                    十多年來，維港口腔連鎖「回歸本質、注重規範」的執業理念，得到越來越多人的認同，接下來願能以維港口腔連鎖品牌的一步步發展，為行業樹立好牙科的榜樣，引領業界回歸醫療本質，讓廣大醫護人員與醫學院師生進一步崇尚醫德，實現醫者大愛，讓市民得到放心品質醫療。
				                </view>
				            </view>
				        </view>
				        <view id="profile_item2" class="profile_item" :class="[isActive[1]?'profile_item_active':'']" @click="changeProStatu" data-proitem="1">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/idea2-m.png" alt="維港口腔好唔好">
				            <view class="mb"></view>
				            <view class="profile_intro">
				                <view>温馨的港式牙科</view>
				                <view>
				                    維港口腔連鎖全面推出5種牙科接診語言，分別包括廣州話、潮汕話、客家話、普通話、英語，配備專門的諮詢師和熟悉多種語言的牙科醫師。專門的粵語諮詢與接診服務、本土化牙醫診療，好多香港澳門市民、周邊粵語城市市民慕名而來。 維港口腔連鎖從每個細節做好服務，致力於成為珠海、澳門及周邊城市市民放心看牙的好牙醫！
				                </view>
				            </view>
				        </view>
				        <view id="profile_item3" class="profile_item" :class="[isActive[2]?'profile_item_active':'']" @click="changeProStatu" data-proitem="2">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/idea3-m.png" alt="珠海維港口腔評價">
				            <view class="mb"></view>
				            <view class="profile_intro">
				                <view>細緻化治療</view>
				                <view>
				                    維港口腔連鎖引進高端數位化設備，引領專業口腔醫療服務。設備及技術與醫療連鎖接軌，為了在深港市民生活圈中擁有良好的口碑，患者就醫看診的優選。我們構建了數位化種植牙的五大優勢、牙齒矯正的六大優勢，開展細緻診療、大數據方案設計、美學修復、一站式免費檢查診斷服務，優化顧客就診流程，改善齒科看診的舒適度。
				                </view>
				            </view>
				        </view>
				        <view id="profile_item4" class="profile_item" :class=" isActive[3]?'profile_item_active':'' " @click="changeProStatu" data-proitem="3">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/idea4-m.png" alt="珠海維港口腔評價">
				            <view class="mb"></view>
				            <view class="profile_intro">
				                <view>收費公開透明</view>
				                <view>
				                    作為專業牙科機構維港口腔連鎖在引進多種技術的同時，採用透明公開的收費制度，保證每個患者都可以清楚就診、價格表更明細，放心付費，放心治療。
				                </view>
				            </view>
				        </view>
				        <view id="profile_item5" class="profile_item" :class=" isActive[4]?'profile_item_active':'' " @click="changeProStatu" data-proitem="4">
				            <image src="https://www.dentalzh.cn/statics/images_ppjj/idea5-m.png" alt="珠海維港口腔評價">
				            <view class="mb"></view>
				            <view class="profile_intro">
				                <view>國內外大型企業信任牙科</view>
				                <view>
				                    十多年來，維港口腔連鎖是粵港澳地區市民看牙的牙科，先後與沃爾瑪、MSH萬欣和、周大福等中高端企業簽約合作，是國內外大型企業員工口腔健康的牙科。
				                </view>
				            </view>
				        </view>
				    </view>
				</view>
				
			</view>
			 
			<!-- <view class="project_content" v-if="active==5">
			    <view class="project_ystd">
			        <block  v-for="(item,index) in articleList" :key='index'>
			            <navigator :url="'/pages/news_details/index?id='+item.id" hover-class='none' class='item acea-row row-between-wrapper' v-if="item.image_input.length == 1">
			                <view class="ystd_item">
			                    <view class="item_top">
			                        <image class="" :src="item.image_input[0]" mode="widthFix" />
			                        <view class="item_text">
			                            <view class="text_title">
			                                <text class="ys_name">
			                                    {{item.title}}
			                                </text>
			                                <text class="ys_dj">
			                                    {{item.author}}
			                                </text>
			                            </view>
			                            <view class="text_middle">
			                                <text>
			                                    {{item.bz1}}
			                                </text>
			                                <text>
			                                    {{item.bz2}}
			                                </text>
			                            </view>
			                            <view class="text_scxm">
			                                <view class="scxm_title">
			
			                                </view>
			                                <view class="scxm_bottom">
			                                    <text>
			                                        {{item.synopsis}}
			                                    </text>
			                                </view>
			
			                            </view>
			                        </view>
			
			                    </view>
			                    <view class="item_bottom">
			                        <button>
			                            医师详情
			                        </button>
			                        <button open-type="contact" hover-class='none'>
			                          预约医师
			                        </button>
			                    </view>
			
			                </view>
			            </navigator>
			        </block>
			     
			    </view>
			
			</view> -->
			
			<view class="ryzs_content" v-if="active==5">
				<view class="ystd_wrap">
					<view class="ystd_item" v-for="item in articleList" :key="item.id">
						<view class="head_name_wrap">
							<image :src="item.image_input[0]" mode="widthFix"></image>
							<view class="name">
								<text>{{item.title}}</text><text>{{item.author}}</text>
							</view>
						</view>
						<view class="detail_wrap intro">
							<view class="detail_head">
								醫生簡介
							</view>
							<view class="detail_cont">
								{{item.synopsis}}
							</view>
						</view>
						<view class="detail_wrap good">
							<view class="detail_head">
								擅長項目
							</view>
							<view class="detail_cont">
								{{item.scxm}}
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="ryzs_content" v-if="active==3">
			   <view class='conters'>
			   	<jyf-parser :content="content" ref="article" :tag-style="tagStyle"></jyf-parser>
			   </view>
			</view>
			<view class="ryzs_content" v-if="active==4">
			   <view class='conters'>
			   	<jyf-parser :content="content" ref="article" :tag-style="tagStyle"></jyf-parser>
			   </view>
			</view>
			<view class="ryzs_content" v-if="active==7">
			   <view class='conters'>
			   	<jyf-parser :content="content" ref="article" :tag-style="tagStyle"></jyf-parser>
			   </view>
			</view>
			<!--<view class="ryzs_content" v-if="active==5">
			   <view class='conters'>
			   	<jyf-parser :content="content" ref="article" :tag-style="tagStyle"></jyf-parser>
			   </view>
			</view> -->
			<view class="ryzs_content" v-if="active==13">
			    <block  v-for="(item,index) in articleList"  :key='index'>
			        <image class="" :src="item.image_input[0]" mode="widthFix" />
			    </block>
			</view>
			<view class="ryzs_content" v-if="active==14">
			    <block  v-for="(item,index) in articleList"  :key='index'>
			        <image class="" :src="item.image_input[0]" mode="widthFix" />
			    </block>
			</view>
			
			<view class="kqbk_content" v-if="active==1">
			    <block  v-for="(item,index) in articleList"  :key='index'>
			        <view class="kqbk_item">
			            <view class="kqbk_top">
			                <view class="texttop_Q">
			                    Q
			                </view>
			                <view class="texttop">
			                {{item.title}}
			                  
			                </view>
			            </view>
			            <view class="kqbk_bottom">
			                <view class="texttop_Q">
			                    A
			                </view>
			                <view class="texttop">
			                {{item.synopsis}}
			                </view>
			            </view>
			            <image class="" :src="item.image_input[0]" mode="widthFix" />
			        </view>
			    </block>
			</view>
		
		</view>
		<view class='noCommodity' v-if="articleList.length == 0 && (page != 1 || active== 0)">
			<view class='pictrue'>
				<image src='../../static/images/noNews.png'></image>
			</view>
		</view>
		<pageFooter v-if="footerSee"></pageFooter>
		<!-- <pageFooter></pageFooter> -->
		<view class="foot" v-if="footerSee && newData.menuList">
			<view class="page-footer" id="target" :style="{'background-color':newData.bgColor.color[0].item}">
				<view class="foot-item" v-for="(item,index) in newData.menuList" :key="index" @click="goRouter(item)">
					<block v-if="item.link == activeRouter">
						<image :src="item.imgList[0]"></image>
						<view class="txt" :style="{color:newData.activeTxtColor.color[0].item}">{{item.name}}</view>
					</block>
					<block v-else>
						<image :src="item.imgList[1]"></image>
						<view class="txt" :style="{color:newData.txtColor.color[0].item}">{{item.name}}</view>
					</block>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getArticleCategoryList,
		getArticleList,
		getArticleHotList,
		getArticleBannerList,
		getArticleDetails
	} from '@/api/api.js';
	import {
		getNavigation,
	} from '@/api/public.js';
	import home from '@/components/home';
	import pageFooter from '@/components/pageFooter/index.vue';
	import parser from "@/components/mp-html/mp-html";
	export default {
		components: {
			pageFooter,
			home,
			"jyf-parser": parser
		},
		data() {
			return {
				imgUrls: [],
				articleList: [],
				indicatorDots: false,
				circular: true,
				autoplay: true,
				interval: 3000,
				duration: 500,
				navList: [],
				active: 6,
				page: 1,
				limit: 50,
				status: false,
				scrollLeft: 0,
			//	active:0,
				routineContact: 0,//底部导航
				footerSee: false,//底部导航
				newData: {},//底部导航
				activeRouter: '',//底部导航
				
				id: 2,
				articleInfo: [],
				store_info: {},
				content:'',//品牌简介文章内容
				tagStyle: {
					img: 'width:100%;'
				},
				showDialog: true,
				
				isActive: [true,false,false,false,false],
			};
		},
		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow: function() {
			this.getArticleHot();
			this.getArticleBanner();
			this.getArticleCate();
			this.status = false;
			this.page = 1;
			this.articleList = [];
			this.getCidArticle();
			this.getArticleOne();
			getNavigation().then(res => {
				this.newData = res.data
			});
		},
		/*
			*底部导航添加的内容
		*/
	    onLoad() {
			
			if (uni.getStorageSync('FOOTER_BAR')) {
				this.footerSee = true
				uni.hideTabBar()
			} else {
			
			}
			
	    	let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
	    	let curRoute = routes[routes.length - 1].route; //获取当前页面路由
	    	this.activeRouter = '/' + curRoute;
			
	    },
		
		  /**
		   * 页面上拉触底事件的处理函数
		   */
		  onReachBottom: function () {
			this.getCidArticle();
		  },
		methods: {
			getArticleHot: function() {
				let that = this;
				getArticleHotList().then(res => {
					that.$set(that, 'articleList', res.data);
				});
			},
			getArticleBanner: function() {
				let that = this;
				getArticleBannerList().then(res => {
					that.imgUrls = res.data;
				});
			},
			getCidArticle: function() {
				let that = this;
				if (that.active == 0) return;
				let limit = that.limit;
				let page = that.page;
				let articleList = that.articleList;
				if (that.status) return;
				getArticleList(that.active, {
					page: page,
					limit: limit
				}).then(res => {
					let articleListNew = [];
					let len = res.length;
					articleListNew = articleList.concat(res.data);
					that.page++;
					that.$set(that, 'articleList', articleListNew);
					that.status = limit > len;
					that.page = that.page;
				});
			},
			getCidArticleYstd: function() {
				let that = this;
				if (that.active == 0) return;
				let limit = that.limit;
				let page = that.page;
				let articleList = that.articleList;
				if (that.status) return;
				getArticleList(that.active, {
					page: page,
					limit: limit
				}).then(res => {
					let articleListNew = [];
					let len = res.length;
					articleListNew = articleList.concat(res.data);
					that.page++;
					
					that.$set(that, 'articleList', articleListNew);
					that.status = limit > len;
					that.page = that.page;
				});
			},
			getArticleCate: function() {
				let that = this;
				getArticleCategoryList().then(res => {
					that.$set(that, 'navList', res.data);
				});
			},
			//品牌文章
			getArticleOne:function(){
			   let that = this;
			   getArticleDetails(that.id).then(res=>{
								uni.setNavigationBarTitle({
								   title:res.data.title.substring(0,7) + "..."
								});
								that.$set(that,'articleInfo',res.data);
								that.$set(that,'store_info',res.data.store_info ? res.data.store_info : {});
								that.content = res.data.content;
								// #ifdef H5
								if(this.$wechat.isWeixin()){
									this.setShareInfo();
								}
								// #endif
			   });
			 },
			setShareInfo: function() {
			 	let href = location.href;
			 	let configAppMessage = {
			 		desc: this.articleInfo.synopsis,
			 		title: this.articleInfo.title,
			 		link: href,
			 		imgUrl: this.articleInfo.image_input.length ? this.articleInfo.image_input[0] : ""
			 	};
			 	this.$wechat.wechatEvevt(["updateAppMessageShareData", "updateTimelineShareData"], configAppMessage);
			},
			tabSelect(active,e) {
				this.active = active;
				this.scrollLeft =  e * 60;
			//	this.scrollLeft = (active - 1) * 50;
				if (this.active == 0) {
					this.getArticleHot();	
				}
				else if(this.active == 6){
					this.id=2;
					this.getArticleOne();
					this.page = 1;
					this.status = false;
				}
				else if(this.active == 3){
					this.id=3;
					this.getArticleOne();
					this.page = 1;
					this.status = false;
				}
				else if(this.active == 4){
					this.id=4;
					this.getArticleOne();
					this.page = 1;
					this.status = false;
				}
				else if(this.active == 7){
					this.id=5;
					this.getArticleOne();
					this.page = 1;
					this.status = false;
				}
				else if(this.active == 5){
					this.$set(this, 'articleList', []);
					this.page = 1;
					this.status = false;
					this.getCidArticleYstd();
					
				}
				else {
					this.$set(this, 'articleList', []);
					this.page = 1;
					this.status = false;
					this.getCidArticle();
				}
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
			
			changeProStatu(e) {
				let that = this;
				let proitem = e.currentTarget.dataset.proitem;
				switch(proitem)
				{
					case '0':
					    that.isActive = [true,false,false,false,false];
					    break;
					case '1':
					    that.isActive = [false,true,false,false,false];
					    break;
				    case '2':
				        that.isActive = [false,false,true,false,false];
				        break;
				    case '3':
				        that.isActive = [false,false,false,true,false];
				        break;
				    default:
				        that.isActive = [false,false,false,false,true];
				}
			},
		}
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
	.noCommodity{
		border-top-width: 0;
	}
	page {
		background-color: #fff !important;
	}

	 .scroll_tap {
	    background: white;
	  }
	  .scroll_tap scroll-view {
	    overflow: hidden;
	    white-space: nowrap;
	  }
	  .scroll_tap scroll-view view {
	    display: inline-block;
	    padding: 24rpx 18rpx;
	    font-size: 23rpx;
	  }
	  .scroll_tap scroll-view .on {
	    color: #10AAF1;
	    position: relative;
	  }
	  .scroll_tap scroll-view .on::after {
	    position: absolute;
	    content: "";
	    bottom: -5px;
	    left: -12px;
	    width: 77%;
	    transform: translateX(50%);
	    height: 2rpx;
	    background: #10AAF1;
	  }
	  .scroll_tap scroll-view .scroll_active {
	    color: #10AAF1;
	  }

	.index_top {
		height: 136rpx;
		background: #00b0ef;
		color: white;
		line-height: 178rpx;
		padding: 0 35rpx;
		position: fixed;
		letter-spacing: 6rpx;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 99;
	}
	.newsList {
		margin-top: 136rpx;
	}
	.newsList .swiper {
		width: 100%;
		position: relative;
		box-sizing: border-box;
		padding: 0 30rpx;
	}

	.newsList .swiper swiper {
		width: 100%;
		height: 365rpx;
		position: relative;
	}

	.newsList .swiper .slide-image {
		width: 100%;
		height: 335rpx;
		border-radius: 6rpx;
	}
	// #ifdef APP-PLUS || H5
	.newsList /deep/uni-swiper .uni-swiper-dots-horizontal{
		bottom: 0;
	}
	
	.newsList .swiper /deep/.uni-swiper-dot {
			width: 12rpx !important;
			height: 12rpx !important;
			border-radius: 0;
			transform: rotate(-45deg);
			transform-origin: 0 100%;
	}
	
	.newsList .swiper /deep/.uni-swiper-dot~.uni-swiper-dot {
		margin-left: 5rpx;
	}
	// #endif
	// #ifdef MP
	.newsList /deep/wx-swiper .wx-swiper-dots-horizontal{
		bottom: 0;
	}
	
	.newsList .swiper /deep/.wx-swiper-dot {
			width: 12rpx !important;
			height: 12rpx !important;
			border-radius: 0;
			transform: rotate(-45deg);
			transform-origin: 0 100%;
	}
	
	.newsList .swiper /deep/.wx-swiper-dot~.wx-swiper-dot {
		margin-left: 5rpx;
	}
	
	 .project_content .project_ystd {
	    background: #f1f1f1;
	  }
	  .project_content .project_ystd .ystd_item {
	    background: white;
	    margin: 20rpx;
	    overflow: hidden;
	  }
	  .project_content .project_ystd .ystd_item .item_top {
	    display: flex;
	  }
	  .project_content .project_ystd .ystd_item .item_top image {
	    width: 33%;
	    height: calc(100vw*234/308);
	  }
	  .project_content .project_ystd .ystd_item .item_top .item_text {
	    width: 67%;
	    padding: 14rpx 20rpx;
	    box-sizing: border-box;
	  }
	  .project_content .project_ystd .ystd_item .item_top .item_text .text_title .ys_name {
	    color: #10AAF1;
	    font-size: 35rpx;
	    display: inline-block;
	    line-height: 35rpx;
	    font-weight: 400;
	    font-family: Source Han Sans CN;
	  }
	  .project_content .project_ystd .ystd_item .item_top .item_text .text_title .ys_dj {
	    display: inline-block;
	    margin-left: 16rpx;
	  }
	  .project_content .project_ystd .ystd_item .item_top .item_text .text_middle text {
	    color: #4B4B4B;
	    font-size: 21rpx;
	    line-height: 44rpx;
	    display: inline-block;
	    margin-top: 4px;
	    position: relative;
	    font-family: Source Han Sans CN;
	    margin-left: 12px;
	    width: 100%;
	  }
	  .project_content .project_ystd .ystd_item .item_top .item_text .text_middle text::after {
	    display: block;
	    content: "";
	    position: absolute;
	    top: 9px;
	    left: -10px;
	    width: 10rpx;
	    height: 10rpx;
	    background: #7D7D7D;
	    border-radius: 50%;
	  }
	  .project_content .project_ystd .ystd_item .item_top .item_text .text_scxm .scxm_title {
	    margin: 10px 0;
	    margin-bottom: 0;
	    font-size: 26rpx;
		height: 36rpx;
	    position: relative;
	  }
	  .project_content .project_ystd .ystd_item .item_top .item_text .text_scxm .scxm_title::after {
	    position: absolute;
	    content: "";
	    top: 6px;
	    left: 0px;
	    width: 85rpx;
	    height: 10rpx;
	    background: #10AAF1;
	    transform: skew(-51deg, 179deg);
	    z-index: 2;
	  }
	  .project_content .project_ystd .ystd_item .item_top .item_text .text_scxm .scxm_title::before {
	    position: absolute;
	    top: 0;
	    left: 0;
	    content: "擅长项目";
	    color: black;
	    z-index: 22;
	    font-size: 21rpx;
	  }
	  .project_content .project_ystd .ystd_item .item_top .item_text .text_scxm .scxm_bottom {
	    font-size: 21rpx;
	    line-height: 31rpx;
	  }
	  .project_content .project_ystd .ystd_item .item_bottom {
	    display: flex;
	    margin-top: 30rpx;
	    margin-bottom: 20rpx;
	    justify-content: space-between;
	  }
	  .project_content .project_ystd .ystd_item .item_bottom button {
	    padding: 10rpx 30rpx;
	    background: white;
	    border: 1px solid #10AAF1;
	    width: 189rpx;
	    height: 50rpx;
	    color: #10AAF1;
	    font-size: 20rpx;
	    margin: 0 80rpx;
	  }
	
	  .project_content .project_title {
	    background: white;
	    padding-bottom: 20rpx;
	  }
	  .project_content .project_title view {
	    width: 100%;
	    height: 100rpx;
	    position: relative;
	    text-align: center;
	  }
	  .project_content .project_title view text {
	    position: absolute;
	    width: 79%;
	    height: 50rpx;
	    top: 0;
	    left: 50%;
	    transform: translateX(-50%);
	  }
	  .project_content .project_title view image {
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%, -50%);
	    width: 100rpx;
	    height: 50rpx;
	  }

	
	  .ryzs_content image {
	    width: 95%;
	    display: block;
	    margin: 0 auto;
	  }
	  .kqbk_content {
	    padding: 30rpx 20rpx;
	  }
	  .kqbk_content .kqbk_item {
	    margin-bottom: 40rpx;
	  }
	  .kqbk_content .kqbk_item .kqbk_top {
	    display: flex;
	    margin-bottom: 22rpx;
	  }
	  .kqbk_content .kqbk_item .kqbk_top .texttop_Q {
	    background: #10AAF1;
	    color: white;
	    border-radius: 50%;
	    padding: 7rpx;
	    font-size: 20rpx;
	  }
	  .kqbk_content .kqbk_item .kqbk_top .texttop {
	    font-size: 26rpx;
	    margin-left: 18rpx;
	    font-weight: bold;
	    color: #10AAF1;  
	    font-family: Source Han Sans CN;
	  } 
	  .kqbk_content .kqbk_item .kqbk_bottom {
	    display: flex;
	    margin-bottom: 45rpx;
	  }
	  .kqbk_content .kqbk_item .kqbk_bottom .texttop_Q {
	    background: #10AAF1;
	    color: white;
	    border-radius: 50%;
	    padding: 7rpx;
	    height: 37rpx;
	    font-size: 20rpx;
	  }
	  .kqbk_content .kqbk_item .kqbk_bottom .texttop {
	    font-size: 26rpx;
	    margin-left: 18rpx;
	    color: black;
	    line-height: 34rpx;
	  } 
	  .kqbk_content .kqbk_item image {
	    width: 100%;
	  }
	 .ppjs_content image{
	    width: 100%;
	  }
	  .ppjs_content .content_bottom .ppjs_title{
	    text-align: center;
	    font-size: 37rpx;
	    margin: 20rpx;
	    font-weight: bold;
	  }
	  .ppjs_content .content_bottom .ppjs_stitle {
	    text-align: center;
	    color: #10AAF1;
	    border-bottom: 1px solid;
	    width: 333rpx;
	    margin: 0 auto;
	    font-size: 22rpx;
	    padding-bottom: 9rpx;
	  }
	  .ppjs_content .ppjs_title {
	    font-size: 34rpx;
	    text-align: center;
	    margin: 20rpx;
	  }
	  .ppjs_content .ppjs_stitle {
	    text-align: center;
	    border-bottom: 1px solid;
	    width: 365rpx;
	    margin: 0 auto;
	    padding-bottom: 8rpx;
	    color: #10AAF1;
	    font-size: 24rpx;
	  }
	  .ppjs_content .content_bottom .ppjs_text {
	    padding: 23rpx;
	    font-size: 24rpx;
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
	
	.banner{
		image{
			display: block;
			width: 750rpx;
		    height: 604rpx;
		}
	}
	
	.space {
	    margin-top: 8%;
	}
	.title {
	    margin-bottom: 5%;
		text-align: center;
		
		.english {
			display: flex;
			align-items: center;
			justify-content: center;
			text-transform: uppercase;
			color: #666666;
		    font-size: 30rpx;
			
			text:nth-of-type(2){
				display: inline-block;
				width: 80rpx;
				height: 4rpx;
				background: #666;
				margin-left: 10px;
			}
		}
		.title_content{
			font-size: 44rpx;
			margin-top: 0.5%;
			color: #3498cb;
			font-weight: bold;
		}
	} 
	.about {
		.content{
			display: flex;
			flex-wrap: wrap;
			width: 92%;
			margin: 3% auto;
			
			.intro_video{
				position: relative;
				width: 690rpx;
				margin-top: 2%;
				
				image{
					width: 100%;
					height: 409.68rpx;
				}
				
				.play {
					position: absolute;
					top: 46%;
					left: 48.5%;
					z-index: 3;
					transition: 0.5s;
				    width: 36rpx;
					height: 42rpx;
				}
				.play_bg{
					position: absolute;
					top: 50%;
					left: 50%;
					width: 160rpx;
					height: 160rpx;
					transform: translate(-50%, -50%);
					background-color: #3498cb;
					border-radius: 50%;
					z-index: 2;
					transition: 0.5s;
				}
			}
			
			.intro{
				view{
					font-size: 30rpx;
					text-indent: 2em;
					color: #1a1a1a;
					line-height: 1.5em;
					text-align: justify;
					letter-spacing: 2rpx;
				}
			}
		}
	}
	
	.icon {
		display: flex;
		justify-content: space-around;
		width: 92%;
		margin: 2% auto;
		
		.icon-item{
			width: 20%;
			
			image{
				width: 138rpx;
				height: 138rpx;
			}
			view{
				font-size: 28rpx;
				margin-top: -20rpx;
			}
		}
	}
	
	.envir_img_wrap{
		display: flex;
		flex-wrap: wrap;
		margin-top: 3%;
		
		.envir_img_item{
			position: relative;
			width: 50%;
			overflow: hidden;
			
			image{
				display: block;
				width: 100%;
				height: 296.88rpx;
			}
			.mb{
				position: absolute;
				top: 0%;
				left: 0%;
				width: 100%;
				height: 100%;
				background-color: #3498cb;
				opacity: 0;
				z-index: 2;
				transition: 0.5s;
			}
			.environment_intro{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 35%;
				height: 45%;
				border-radius: 50%;
				background: rgba(255, 255, 255, 0.8);
				color: #3498cb;
				text-align: center;
				z-index: 3;
				transition: 1s;
				opacity: 0;
				
				view{
					font-size: 28rpx;
					margin-top: 27%;
					user-select: none;
				}
			}
		}
		.envir_img_item_active{
			.mb{
				opacity: 1;
			}
			.environment_intro{
				opacity: 1;
			}
		}
	}
	
	.brand{
		.brand_img{
			image{
				width: 750rpx;
				height: 560rpx;
			}
		}
	}
	
	.chain{
		.branch{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			
			.branch_honor{
				text-align: center;
				font-size: 30rpx;
				line-height: 1.8em;
				color: #1a1a1a;
			}
			.branch1_img{
				position: relative;
				width: 49.5%;
				margin-top: 10px;
				
				image{
					display: block;
					width: 100%;
					height: 305.38rpx;
				}
				
				view{
					position: absolute;
					bottom: 0%;
					left: 0%;
					width: 100%;
					padding: 8px 0;
					background-color: rgba(52, 152, 203, 0.7);
					text-align: center;
					font-size: 26rpx;
					color: #fff;
				}
			}
			
			.branch2_img{
				position: relative;
				width: 32.5%;
				margin-top: 10px;
				
				
				image{
					display: block;
					width: 100%;
					height: 339.62rpx;
				}
				view{
					position: absolute;
					bottom: 0%;
					left: 0%;
					width: 100%;
					padding: 8px 0;
					background-color: rgba(52, 152, 203, 0.7);
					text-align: center;
					font-size: 26rpx;
					color: #fff;
				}
			}
			
		}
	}
	
	.profile{
		.profile_content{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			
			.profile_1{
				width: 100%;
				image{
					width: 750rpx;
				}
			}
			
			.profile_item{
				position: relative;
				margin-top: 2%;
				width: 750rpx;
				overflow: hidden;
				
				image{
					width: 100%;
					height: 354rpx;
					pointer-events: none;
				}
				.mb{
					position: absolute;
					top: 83%;
					left: 0%;
					width: 100%;
					height: 100%;
					background-color: rgba(52, 152, 203, 0.9);
					z-index: 2;
					transition: 0.5s;
				}
				.profile_intro{
					position: absolute;
					top: 86%;
					left: 5%;
					width: 90%;
					color: #fff;
					z-index: 3;
					transition: 0.7s;
					
					view:nth-of-type(1){
						font-size: 30rpx;
						text-align: center;
					}
					view:nth-of-type(2){
						margin-top: 2%;
						font-size: 28rpx;
						text-align: justify;
						line-height: 1.5em;
					}
					
				}
			}
			
			.profile_item_active{
				.mb{
					top: 0%;
				}
				.profile_intro{
					top: 8%;
				}
			}
		}
	}
	
	.ystd_wrap{
		background-color: #f2f2f2;
		overflow: hidden;
	}
	.ystd_item{
		position: relative;
		padding: 0 26rpx 40rpx;
		width: 94%;
		margin: 320rpx auto 0;
		background-color: #ffffff;
		border-radius: 10px;
	}
	.ystd_item .head_name_wrap{
		position: absolute;
		top: -260rpx;
		left: 50%;
		width: 100%;
		transform: translateX(-50%);
	}
	.ystd_item .head_name_wrap image{
		width: 352.5rpx;
		height: 352.5rpx;
		border-radius: 50%;
	}
	.ystd_item .head_name_wrap .name{
		margin-top: 8px;
		text-align: center;
	}
	.ystd_item .head_name_wrap .name text:nth-of-type(1){
		font-size: 48rpx;
		color: #003989;
		margin-right: 15rpx;
		letter-spacing: 2px;
	}
	.ystd_item .head_name_wrap .name text:nth-of-type(2){
		font-size: 38rpx;
		color: #003989;
	}
	.ystd_item .intro{
		padding-top: 200rpx;
	}
	.ystd_item .intro .detail_cont{
		white-space: pre-line;
	}
	.good{
		margin-top: 24rpx;
	}
	.detail_wrap .detail_head{
		padding: 6px 0;
		margin-bottom: 16rpx;
		width: 250rpx;
		font-size: 34rpx;
		color: #ffffff;
		letter-spacing: 2px;
		text-indent: 8px;
		background-image: linear-gradient(to right, rgba(2, 59, 138,1), rgba(255,0,0,0));
	}
	.detail_wrap .detail_cont{
		color: #000;
		font-size: 32rpx;
		line-height: 1.5em;
		letter-spacing: 1px;
		text-align: justify;
	}
	
	// #endif
</style>
