
;(function($,PageOpts){

	PageOpts.init = function(){
		var systemLang = window.navigator.language.slice(0,2);
		var value = sessionStorage.getItem("lang") ? sessionStorage.getItem("lang") : 'zh';
		
		$("#item_client").attr('href','https://client.paasoo.cn/login?lng='+value);
		PageOpts.language(value);
	
	};

	PageOpts.language = function(lang){
		
		jQuery.i18n.properties({//加载资浏览器语言对应的资源文件
			name:'strings', //资源文件名称
			path:'i18n/', //资源文件路径
			mode:'map', //用Map的方式使用资源文件中的值
			language: lang,
			callback: function() {//加载成功后设置显示内容
				sessionStorage.setItem("lang", lang);
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
		$('.item_globalSms').html($.i18n.prop('string_globalSms'));  // 全球短信
		$('.item_globalVoice').html($.i18n.prop('string_globalVoice')); // 全球语音
		$('.item_validate').html($.i18n.prop('string_validate'));  // 号码格式验证API
		$('.item_sent').html($.i18n.prop('string_sent'));  // 自助发送

		// content
		$('.item_ourProduct').html($.i18n.prop('string_ourProduct'));
		$('.item_ourProductSpan').html($.i18n.prop('string_ourProductSpan'));
		$('#item_globalSmsTitle').html($.i18n.prop('string_globalSmsTitle'));
		$('.item_globalSmsOne').html($.i18n.prop('string_globalSmsOne'));
		$('#item_globalSmsOneTitle').html($.i18n.prop('string_globalSmsOneTitle'));
		$('#item_globalSmsTwo').html($.i18n.prop('string_globalSmsTwo'));
		$('#item_globalSmsTwoTitle').html($.i18n.prop('string_globalSmsTwoTitle'));
		$('#item_globalSmsThree').html($.i18n.prop('string_globalSmsThree'));
		$('#item_globalSmsThreeTitle').html($.i18n.prop('string_globalSmsThreeTitle'));
		$('#item_globalSmsFour').html($.i18n.prop('string_globalSmsFour'));
		$('#item_globalSmsFourTitle').html($.i18n.prop('string_globalSmsFourTitle'));
		$('#item_globalSmsSix').html($.i18n.prop('string_globalSmsSix'));
		$('#item_globalSmsSixTitle').html($.i18n.prop('string_globalSmsSixTitle'));
		$('#item_validateCode').html($.i18n.prop('string_validateCode'));
		$('#item_validateCodeTitle').html($.i18n.prop('string_validateCodeTitle'));
		$('#item_validateCodeOne').html($.i18n.prop('string_validateCodeOne'));
		$('#item_validateCodeOneTitle').html($.i18n.prop('string_validateCodeOneTitle'));
		$('#item_validateCodeTwo').html($.i18n.prop('string_validateCodeTwo'));
		$('#item_validateCodeTwoTitle').html($.i18n.prop('string_validateCodeTwoTitle'));
		$('#item_validateCodeThree').html($.i18n.prop('string_validateCodeThree'));
		$('#item_validateCodeThreeTitle').html($.i18n.prop('string_validateCodeThreeTitle'));
		$('#item_validateCodeFour').html($.i18n.prop('string_validateCodeFour'));
		$('#item_validateCodeFourTitle').html($.i18n.prop('string_validateCodeFourTitle'));
		$('#item_validateApiTitle').html($.i18n.prop('string_validateApiTitle'));		
		$('#item_validateApiOne').html($.i18n.prop('string_validateApiOne'));
		$('#item_validateApiOneTitle').html($.i18n.prop('string_validateApiOneTitle'));
		$('#item_validateApiTwo').html($.i18n.prop('string_validateApiTwo'));
		$('#item_validateApiTwoTitle').html($.i18n.prop('string_validateApiTwoTitle'));
		$('#item_validateApiThree').html($.i18n.prop('string_validateApiThree'));
		$('#item_validateApiThreeTitle').html($.i18n.prop('string_validateApiThreeTitle'));
		$('#item_validateApiFour').html($.i18n.prop('string_validateApiFour'));
		$('#item_validateApiFourTitle').html($.i18n.prop('string_validateApiFourTitle'));
		$('#item_sentTitle').html($.i18n.prop('string_sentTitle'));		
		$('#item_sentOne').html($.i18n.prop('string_sentOne'));
		$('#item_sentOneTitle').html($.i18n.prop('string_sentOneTitle'));
		$('#item_sentTwo').html($.i18n.prop('string_sentTwo'));
		$('#item_sentTwoTitle').html($.i18n.prop('string_sentTwoTitle'));
		$('#item_sentThree').html($.i18n.prop('string_sentThree'));
		$('#item_sentThreeTitle').html($.i18n.prop('string_sentThreeTitle'));
		$('#item_sentFour').html($.i18n.prop('string_sentFour'));
		$('#item_sentFourTitle').html($.i18n.prop('string_sentFourTitle'));

		$('.item_platform').html($.i18n.prop('string_platform')); 
		$('#item_platformTitle').html($.i18n.prop('string_platformTitle'));		
		$('#item_platformOne').html($.i18n.prop('string_platformOne'));
		$('#item_platformOneTitle').html($.i18n.prop('string_platformOneTitle'));
		$('#item_platformTwo').html($.i18n.prop('string_platformTwo'));
		$('#item_platformTwoTitle').html($.i18n.prop('string_platformTwoTitle'));
		$('#item_platformThree').html($.i18n.prop('string_platformThree'));
		$('#item_platformThreeTitle').html($.i18n.prop('string_platformThreeTitle'));
		$('#item_platformFour').html($.i18n.prop('string_platformFour'));
		$('#item_platformFourTitle').html($.i18n.prop('string_platformFourTitle'));


		// footer
		$('.item_catchlineFive').html($.i18n.prop('string_catchlineFive')); 
		$('#item_footerProductOne').html($.i18n.prop('string_footerProductOne'));
		$('#item_footerProductTwo').html($.i18n.prop('string_footerProductTwo'));
		$('#item_footerProductThree').html($.i18n.prop('string_footerProductThree'));  
		$('#item_footerService').html($.i18n.prop('string_footerService'));
		$('#item_footerServiceOne').html($.i18n.prop('string_footerServiceOne')); 
		$('#item_footerServiceTwo').html($.i18n.prop('string_footerServiceTwo')); 
		$('#item_footerServiceThree').html($.i18n.prop('string_footerServiceThree'));
		$('#item_footerAboutUs').html($.i18n.prop('string_footerAboutUs'));
		$('#item_footerAboutUsOne').html($.i18n.prop('string_footerAboutUsOne'));
		$('#item_footerAboutUsTwo').html($.i18n.prop('string_footerAboutUsTwo'));
		$('#item_footerAboutUsThree').html($.i18n.prop('string_footerAboutUsThree'));  
		$('#item_footerAboutUsFour').html($.i18n.prop('string_footerAboutUsFour'));
		$('#item_footerAboutUsFive').html($.i18n.prop('string_footerAboutUsFive')); 
		$('#item_footerFollowUs').html($.i18n.prop('string_footerFollowUs')); 
		$('#item_copyright').html($.i18n.prop('string_copyright'));

		if (lang==='zh') {
			$("#autoSent").show();
			$("#countryAnalysis").show();
			$("#question").hide();		
			$("#FreeUse").show();
			$("#QRCode").show();       // 二维码
			$("#footerModelTwo").attr('class','col-md-2');
			$("#footerModelThree").attr('class','col-md-3');
			$("#item_footerAboutUsOne").show();

		}else if (lang==='ja') {
			$("#autoSent").show();
			$("#countryAnalysis").show();
			$("#question").hide();	
			$("#FreeUse").hide();
			$("#QRCode").hide();       // 二维码
			$("#footerModelTwo").attr('class','col-md-3');
			$("#footerModelThree").attr('class','col-md-4');
			$("#item_footerAboutUsOne").hide();

		}else if (lang==='en') {
			$("#autoSent").hide();
			$("#countryAnalysis").hide();
			$("#question").show();
			$("#FreeUse").hide();
			$("#QRCode").hide();         // 二维码
			$("#footerModelTwo").attr('class','col-md-3');
			$("#footerModelThree").attr('class','col-md-4');
			$("#item_footerAboutUsOne").hide();
		}

		var title = {
                    'zh':'PaaSoo 无限云 - 全球云通讯平台::短信/语音/验证码/通知',
                    'en':'PaaSoo Technology Limited – Global cloud communication platform::short messaging/voice/2fa/alert.',
                    'ja':'PaaSoo 無限クラウド – 世界クラウド通信プラットホーム::ショートメッセージ/音声/認証コード/お知らせ'
                }[lang];

        $("title").html(title);   

	};

	PageOpts.init();

})(jQuery,window.PageOpts = {});
