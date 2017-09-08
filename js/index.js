
;(function($,PageOpts){

	PageOpts.init = function(){

		// 获取系统语言
		var systemLang = window.navigator.language.slice(0,2);

		var value = sessionStorage.getItem("lang") ? sessionStorage.getItem("lang") : 'en';

		PageOpts.language(value);

		PageOpts.validate();

		$("#item_client").attr('href','https://client.paasoo.cn/login?lng='+value);
	};

	PageOpts.language = function(lang){
		
		jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
			name:'strings', //资源文件名称
			path:'i18n/', //资源文件路径
			mode:'map', //用Map的方式使用资源文件中的值
			language: lang,
			callback: function() {//加载成功后设置显示内容

				var _self = this;

				PageOpts.lang = _self.language;

				sessionStorage.setItem("lang", PageOpts.lang);

				PageOpts.translate(lang);

				$("#item_client").attr('href','https://client.paasoo.cn/login?lng='+lang);
			}
		});
	};

	PageOpts.translate = function(lang){

		// nav
		$('li #item_home').html($.i18n.prop('string_home')); // 首页
		$('.item_product').html($.i18n.prop('string_product'));  // 产品
		$('li #item_price').html($.i18n.prop('string_price'));  // 价格
		$('li #item_APIdoc').html($.i18n.prop('string_APIdoc'));  // API文档
		$('li #item_client').html($.i18n.prop('string_client'));  // 用户登录

		// catchline
		$('#item_catchlineOne').html($.i18n.prop('string_catchlineOne'));  
		$('#item_catchlineTwo_one').html($.i18n.prop('string_catchlineTwo_one')); 
		$('#item_catchlineTwo_two').html($.i18n.prop('string_catchlineTwo_two'));  
		// $('#item_catchlineThree').html($.i18n.prop('string_catchlineThree'));  
		// $('#item_catchlineFour').html($.i18n.prop('string_catchlineFour'));  
		$('.item_catchlineFive').html($.i18n.prop('string_catchlineFive')); 
		$('#createAccount').html($.i18n.prop('string_createAccount'))
		// span
		$('#item_spanOne').html($.i18n.prop('string_spanOne'));
		$('#item_spanOneTitle').html($.i18n.prop('string_spanOneTitle'));  
		$('#item_spanTwo').html($.i18n.prop('string_spanTwo')); 
		$('#item_spanTwoTitle').html($.i18n.prop('string_spanTwoTitle')); 
		$('#item_spanThree').html($.i18n.prop('string_spanThree'));
		$('#item_spanThreeTitle').html($.i18n.prop('string_spanThreeTitle'));

		// modal title
		$('.item_ourProduct').html($.i18n.prop('string_ourProduct'));
		$('.item_ourProductSpan').html($.i18n.prop('string_ourProductSpan'));
		$('#item_advantage').html($.i18n.prop('string_advantage'));  
		$('#item_advantageSpan').html($.i18n.prop('string_advantageSpan'));
		$('#item_customer').html($.i18n.prop('string_customer')); 
		$('#item_customerSpan').html($.i18n.prop('string_customerSpan')); 
		$('#item_getFreeApi').html($.i18n.prop('string_getFreeApi'));
		$('#item_getFreeApiSpan').html($.i18n.prop('string_getFreeApiSpan'));

		// product
		$('.item_globalSms').html($.i18n.prop('string_globalSms'));  // 全球短信
		$('#item_globalSmsSpan').html($.i18n.prop('string_globalSmsSpan'));  
		$('.item_globalVoice').html($.i18n.prop('string_globalVoice')); // 全球语音
		$('#item_globalVoiceSpan').html($.i18n.prop('string_globalVoiceSpan')); 
		$('.item_validate').html($.i18n.prop('string_validate'));  // 号码格式验证API
		$('#item_validateSpan').html($.i18n.prop('string_validateSpan'));  
		$('.item_sent').html($.i18n.prop('string_sent'));  // 自助发送
		$('#item_sentSpan').html($.i18n.prop('string_sentSpan'));  
		$('.item_platform').html($.i18n.prop('string_platform'));  // 可视化服务平台
		$('#item_platformSpan').html($.i18n.prop('string_platformSpan')); 
		$('.item_statusQuery').html($.i18n.prop('string_statusQuery'));  // 号码查询API
		$('#item_statusQuerySpan').html($.i18n.prop('string_statusQuerySpan'));  

		// advantage
		$('#item_settingService').html($.i18n.prop('string_settingService'));
		$('#item_settingServiceOne').html($.i18n.prop('string_settingServiceOne'));
		$('#item_settingServiceTwo').html($.i18n.prop('string_settingServiceTwo'));  
		$('#item_easyInsert').html($.i18n.prop('string_easyInsert'));
		$('#item_easyInsertOne').html($.i18n.prop('string_easyInsertOne')); 
		$('#item_easyInsertTwo').html($.i18n.prop('string_easyInsertTwo')); 
		$('#item_support').html($.i18n.prop('string_support'));
		$('#item_supportOne').html($.i18n.prop('string_supportOne'));
		$('#item_supportThree').html($.i18n.prop('string_supportThree'));
		$('#item_serviceConsult').html($.i18n.prop('string_serviceConsult'));  
		$('#item_serviceConsultOne').html($.i18n.prop('string_serviceConsultOne'));
		$('#item_serviceConsultTwo').html($.i18n.prop('string_serviceConsultTwo')); 
		$('#item_serviceConsultThree').html($.i18n.prop('string_serviceConsultThree')); 
		$('#item_APIService').html($.i18n.prop('string_APIService'));
		$('#item_APIServiceOne').html($.i18n.prop('string_APIServiceOne')); 
		$('#item_APIServiceTwo').html($.i18n.prop('string_APIServiceTwo')); 

		// free 
		$('#item_name').attr('placeholder',$.i18n.prop('string_name'));
		$('#item_email').attr('placeholder',$.i18n.prop('string_email')); 
		$('#item_mobile').attr('placeholder',$.i18n.prop('string_mobile')); 
		$('#item_choose').html($.i18n.prop('string_choose'));
		$('#item_chooseSms').html($.i18n.prop('string_chooseSms')); 
		$('#item_chooseVoice').html($.i18n.prop('string_chooseVoice'));
		$('#item_applyAccount').html($.i18n.prop('string_applyAccount'));

		// footer
		$('#item_footerProductOne').html($.i18n.prop('string_footerProductOne'));
		// $('#item_footerProductTwo').html($.i18n.prop('string_footerProductTwo'));
		$('#item_footerProductThree').html($.i18n.prop('string_footerProductThree'));  
		$('#item_footerService').html($.i18n.prop('string_footerService'));
		$('#item_footerServiceOne').html($.i18n.prop('string_footerServiceOne')); 
		$('#item_footerServiceTwo').html($.i18n.prop('string_footerServiceTwo')); 
		// $('#item_footerServiceThree').html($.i18n.prop('string_footerServiceThree'));
		$('#item_footerAboutUs').html($.i18n.prop('string_footerAboutUs'));
		$('#item_footerAboutUsOne').html($.i18n.prop('string_footerAboutUsOne'));
		$('#item_footerAboutUsTwo').html($.i18n.prop('string_footerAboutUsTwo'));
		$('#item_footerAboutUsThree').html($.i18n.prop('string_footerAboutUsThree'));  
		$('#item_footerAboutUsFour').html($.i18n.prop('string_footerAboutUsFour'));
		// $('#item_footerAboutUsFive').html($.i18n.prop('string_footerAboutUsFive')); 
		$('#item_footerFollowUs').html($.i18n.prop('string_footerFollowUs')); 
		$('#item_copyright').html($.i18n.prop('string_copyright'));

		// if (lang==='zh') {
		// 	$("#question").hide();
		// 	$("#FreeUse").show();
		// 	$("#QRCode").show();       // 二维码
		// 	$("#gtco-subscribe").show();
		// 	$("#productFive").show();
		// 	$("#footerModelTwo").attr('class','col-md-2');
		// 	$("#footerModelThree").attr('class','col-md-3');
		// 	$("#productFour").attr('class','col-md-offset-2 col-md-4 col-sm-6');
		// 	$("#productOne").attr('class','col-md-4 col-sm-6');
		// 	$("#productTwo").attr('class','col-md-4 col-sm-6');
		// 	$("#productThree").attr('class','col-md-4 col-sm-6');
		// 	$("#register").hide();
		// 	$("#item_footerAboutUsOne").show();

		// }else if (lang==='ja') {
		// 	$("#question").hide();
		// 	$("#FreeUse").hide();
		// 	$("#QRCode").hide();       // 二维码
		// 	$("#gtco-subscribe").show();
		// 	$("#productFive").show();
		// 	$("#footerModelTwo").attr('class','col-md-3');
		// 	$("#footerModelThree").attr('class','col-md-4');
		// 	$("#productFour").attr('class','col-md-offset-2 col-md-4 col-sm-6');
		// 	$("#productOne").attr('class','col-md-4 col-sm-6');
		// 	$("#productTwo").attr('class','col-md-4 col-sm-6');
		// 	$("#productThree").attr('class','col-md-4 col-sm-6');
		// 	$("#register").hide();
		// 	$("#item_footerAboutUsOne").hide();

		// }else if (lang==='en') {
		// 	$("#question").show();
		// 	$("#FreeUse").hide();
		// 	$("#QRCode").hide();         // 二维码
		// 	$("#gtco-subscribe").hide();
		// 	$("#productFive").hide();
		// 	$("#footerModelTwo").attr('class','col-md-3');
		// 	$("#footerModelThree").attr('class','col-md-4');
		// 	$("#productOne").attr('class','col-md-3 col-sm-6');
		// 	$("#productTwo").attr('class','col-md-3 col-sm-6');
		// 	$("#productThree").attr('class','col-md-3 col-sm-6');
		// 	$("#productFour").attr('class','col-md-3 col-sm-6');
		// 	$("#register").show();
		// 	$("#item_footerAboutUsOne").hide();
		// }

		var title = {
                    'zh':'PaaSoo 无限云 - 全球云通讯平台::短信/语音/验证码/通知',
                    'en':'PaaSoo Technology Limited – Global cloud communication platform::short messaging/voice/2fa/alert.',
                    'ja':'PaaSoo 無限クラウド – 世界クラウド通信プラットホーム::ショートメッセージ/音声/認証コード/お知らせ'
                }[lang];

        $("title").html(title);        
	}
	
	PageOpts.validate = function(){

		$("#item_applyAccount").on("click",function(){
			var queryParam = {};
			queryParam.name = $("#item_name").val();
			queryParam.email = $("#item_email").val();
			queryParam.mobile = $("#item_mobile").val();
			queryParam.apply = $("#apply").val();
			queryParam.lang = PageOpts.lang;

			var req = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
			var tipOpts = {};
			var langArr = [
				{
					'zh':"请填写公司名称",
					'en':'',
					'ja':"会社名を入力して下さい"
				},{
					'zh':"请填写企业邮箱",
					'en':'',
					'ja':"企業用メールアドレスを入力して下さい"
				},{
					'zh':"请填写手机",
					'en':'',
					'ja':"携帯番号を入力して下さい"
				},{
					'zh':"邮箱格式不正确",
					'en':'',
					'ja':""
				},{
					'zh':"请选择业务类型",
					'en':'',
					'ja':"選択して下さい"
				}
			];

			if (!queryParam.name) {

				tipOpts.title = langArr[0][PageOpts.lang];
				tipOpts.selector = '#item_name';

			}else if (!queryParam.email) {

				tipOpts.title = langArr[1][PageOpts.lang];
				tipOpts.selector = '#item_email';

			}else if (!queryParam.mobile) {

				tipOpts.title = langArr[2][PageOpts.lang];
				tipOpts.selector = '#item_mobile';

			}else if (!req.test(queryParam.email)) {

				tipOpts.title = langArr[3][PageOpts.lang];
				tipOpts.selector = '#item_email';

			}else if (!queryParam.apply){

				tipOpts.title = langArr[4][PageOpts.lang];
				tipOpts.selector = '#apply';

			}else{

				tipOpts = undefined;
			}

			!!tipOpts ?  PageOpts.tips(tipOpts): PageOpts.doAjax(queryParam);

		});

	};

	PageOpts.doAjax = function(queryParam){
		var url = "https://client.paasoo.cn/api/apply?jsoncallback="+(new Date().getTime());
		
		$.ajax({
			type:"GET",
			url:url,
			data:queryParam,
			dataType:"jsonp",
			jsonp:"jsoncallback",
			success : function(data) {
				$("#item_name").val('');
				$("#item_email").val('');
				$("#item_mobile").val('');
				$("#apply").val('');
				layer.open({
				  	title: {
								'zh':"申请成功",
								'en':'Application successful',
								'ja':"申請成功"
							}[PageOpts.lang]
				  	,content: {
								'zh':'感谢您申请PaaSoo-无限云账号，我们的工作人员会尽快与您取得联系，谢谢。',
								'en':'Thank you for applying for a PaaSoo account, our team will get in touch with you shortly.',
								'ja':"PaaSooのアカウントを申請していただき、ありがとうございます。できるだけ早くお客様に連絡させていただきます。"
							}[PageOpts.lang]
				
				});     

			}
		});
	};

	PageOpts.tips = function(tipOpts){
		layer.tips(tipOpts.title,tipOpts.selector,{
		 	tips: [1, '#0e8c87'],
		  	time: 4000
		})
	};

	PageOpts.init();

})(jQuery,window.PageOpts = {});
