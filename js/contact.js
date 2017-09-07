
;(function($,PageOpts){

	PageOpts.init = function(){

		// 获取系统语言
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

				var _self = this;

				PageOpts.lang = _self.language;

				sessionStorage.setItem("lang", PageOpts.lang);

				$("#item_client").attr('href','https://client.paasoo.cn/login?lng='+lang);

				PageOpts.translate(lang);
			}
		});
	};

	PageOpts.translate = function(lang){

		$('#item_getFreeApi').html($.i18n.prop('string_getFreeApi'));
		$('#item_getFreeApiSpan').html($.i18n.prop('string_getFreeApiSpan'));
		$('li #item_home').html($.i18n.prop('string_home')); // 首页
		$('.item_product').html($.i18n.prop('string_product'));  // 产品
		$('li #item_price').html($.i18n.prop('string_price'));  // 价格
		$('li #item_APIdoc').html($.i18n.prop('string_APIdoc'));  // API文档
		$('li #item_client').html($.i18n.prop('string_client'));  // 用户登录
		$('.item_catchlineFive').html($.i18n.prop('string_catchlineFive')); 

		$('.item_globalSms').html($.i18n.prop('string_globalSms'));  // 全球短信
		$('.item_globalVoice').html($.i18n.prop('string_globalVoice')); // 全球语音
		$('.item_validate').html($.i18n.prop('string_validate'));  // 号码格式验证API
		$('.item_sent').html($.i18n.prop('string_sent'));  // 自助发送 


		// footer
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

		if (lang==='ja') {
			
			window.location.href = 'index.html';

		}else if (lang==='en') {

			window.location.href = 'index.html';

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
