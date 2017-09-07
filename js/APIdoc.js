
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
		$('.item_APIdoc').html($.i18n.prop('string_APIdoc'));  // API文档
		$('li #item_client').html($.i18n.prop('string_client'));  // 用户登录
		$('.item_globalSms').html($.i18n.prop('string_globalSms'));  // 全球短信
		$('.item_globalVoice').html($.i18n.prop('string_globalVoice')); // 全球语音
		$('.item_validate').html($.i18n.prop('string_validate'));  // 号码格式验证API
		$('.item_sent').html($.i18n.prop('string_sent'));  // 自助发送

		// content
		$('#item_APIdocTitle').html($.i18n.prop('string_APIdocTitle')); 	
		$('.item_APIdocOne').html($.i18n.prop('string_APIdocOne'));
		$('#item_APIdocOneTitle').html($.i18n.prop('string_APIdocOneTitle'));
		$('.item_APIdocTwo').html($.i18n.prop('string_APIdocTwo'));
		$('.item_APIdocTwoTitle').html($.i18n.prop('string_APIdocTwoTitle'));
		$('.item_APIdocThree').html($.i18n.prop('string_APIdocThree'));
		$('#item_APIdocThreeTitle').html($.i18n.prop('string_APIdocThreeTitle'));
		$('.item_APIdocFour').html($.i18n.prop('string_APIdocFour'));
		$('#item_APIdocFourTitle').html($.i18n.prop('string_APIdocFourTitle'));
		$('.item_APIdocFive').html($.i18n.prop('string_APIdocFive'));
		$('#item_APIdocFiveTitle').html($.i18n.prop('string_APIdocFiveTitle'));
		$('.item_APIdocSix').html($.i18n.prop('string_APIdocSix'));
		$('#item_APIdocSixTitle').html($.i18n.prop('string_APIdocSixTitle'));
		$('.item_APIdocSeven').html($.i18n.prop('string_APIdocSeven'));

		$('.item_APIdocReturn').html($.i18n.prop('string_APIdocReturn'));
		$('.item_APIdocRequire').html($.i18n.prop('string_APIdocRequire'));
		$('.item_requireType').html($.i18n.prop('string_requireType'));
		$('.item_requireAdd').html($.i18n.prop('string_requireAdd'));
		$('.item_requireExample').html($.i18n.prop('string_requireExample'));
		$('.item_APIdocRespon').html($.i18n.prop('string_APIdocRespon'));
		$('.item_responExample').html($.i18n.prop('string_responExample'));
		$('.item_APIdocSuccess').html($.i18n.prop('string_APIdocSuccess'));
		$('.item_APIdocFail').html($.i18n.prop('string_APIdocFail'));
		$('#item_APIdocExample').html($.i18n.prop('string_APIdocExample'));
		$('#item_formatterRight').html($.i18n.prop('string_formatterRight'));
		$('#item_formatterMistake').html($.i18n.prop('string_formatterMistake'));
		$('#item_statusReturn').html($.i18n.prop('string_statusReturn'));
		$('#item_statusReturnAdd').html($.i18n.prop('string_statusReturnAdd'));
		$('#item_statusReturnExample').html($.i18n.prop('string_statusReturnExample'));
		$('#item_APIdocParam').html($.i18n.prop('string_APIdocParam'));
		$('#item_voiceParams').html($.i18n.prop('string_voiceParams'));
		$('#item_voiceParamsOne').html($.i18n.prop('string_voiceParamsOne'));
		$('#item_voiceParamsTwo').html($.i18n.prop('string_voiceParamsTwo'));
		$('#item_voiceParamsThree').html($.i18n.prop('string_voiceParamsThree'));
		$('#item_voiceParamsFour').html($.i18n.prop('string_voiceParamsFour'));
		$('#item_voiceExample').html($.i18n.prop('string_voiceExample'));
		$('#item_voiceExampleOne').html($.i18n.prop('string_voiceExampleOne'));
		$('#item_voiceExampleTwo').html($.i18n.prop('string_voiceExampleTwo'));
		$('#item_voiceExampleThree').html($.i18n.prop('string_voiceExampleThree'));

		$('#item_javaOne').html($.i18n.prop('string_javaOne'));
		$('#item_javaTwo').html($.i18n.prop('string_javaTwo'));
		$('#item_javaThree').html($.i18n.prop('string_javaThree'));
		$('#item_javaFour').html($.i18n.prop('string_javaFour'));
		$('#item_javaFive').html($.i18n.prop('string_javaFive'));
		$('#item_javaSix').html($.i18n.prop('string_javaSix'));
		$('#item_javaSeven').html($.i18n.prop('string_javaSeven'));
		$('#item_javaEight').html($.i18n.prop('string_javaEight'));
		$('#item_javaNine').html($.i18n.prop('string_javaNine'));
		$('#item_javaTen').html($.i18n.prop('string_javaTen'));
		$('#item_javaEleven').html($.i18n.prop('string_javaEleven'));
		$('#item_javaTwelve').html($.i18n.prop('string_javaTwelve'));
		$('#item_javaThirteen').html($.i18n.prop('string_javaThirteen'));
		$('#item_javaFourteen').html($.i18n.prop('string_javaFourteen'));
		$('#item_javaFifteen').html($.i18n.prop('string_javaFifteen'));
		$('#item_javaSixteen').html($.i18n.prop('string_javaSixteen'));
		$('#item_javaSeventeen').html($.i18n.prop('string_javaSeventeen'));
		$('#item_javaEighteen').html($.i18n.prop('string_javaEighteen'));
		$('#item_javaNineteen').html($.i18n.prop('string_javaNineteen'));
		$('#item_javaTwenty').html($.i18n.prop('string_javaTwenty'));
		$('#item_javaTwentyOne').html($.i18n.prop('string_javaTwentyOne'));
		$('#item_javaTwentyTwo').html($.i18n.prop('string_javaTwentyTwo'));
		$('#item_javaTwentyThree').html($.i18n.prop('string_javaTwentyThree'));
		$('#item_javaTwentyFour').html($.i18n.prop('string_javaTwentyFour'));
		$('#item_javaTwentyFive').html($.i18n.prop('string_javaTwentyFive'));
		$('#item_javaApi').html($.i18n.prop('string_javaApi'));
		$('#item_javaSecret').html($.i18n.prop('string_javaSecret'));

		$('#item_phpOne').html($.i18n.prop('string_phpOne'));
		$('#item_phpTwo').html($.i18n.prop('string_phpTwo'));
		$('#item_phpThree').html($.i18n.prop('string_phpThree'));
		$('#item_phpFour').html($.i18n.prop('string_phpFour'));
		$('#item_phpFive').html($.i18n.prop('string_phpFive'));
		$('#item_phpSix').html($.i18n.prop('string_phpSix'));
		$('.item_phpSeven').html($.i18n.prop('string_phpSeven'));
		$('#item_phpNine').html($.i18n.prop('string_phpNine'));
		$('#item_phpTen').html($.i18n.prop('string_phpTen'));
		$('#item_phpEleven').html($.i18n.prop('string_phpEleven'));
		$('#item_phpTwelve').html($.i18n.prop('string_phpTwelve'));

		$('#item_nodeOne').html($.i18n.prop('string_nodeOne'));
		$('#item_nodeTwo').html($.i18n.prop('string_nodeTwo'));
		$('#item_nodeThree').html($.i18n.prop('string_nodeThree'));
		$('#item_nodeFour').html($.i18n.prop('string_nodeFour'));
		$('#item_nodeFive').html($.i18n.prop('string_nodeFive'));
		$('#item_nodeSix').html($.i18n.prop('string_nodeSix'));
		$('#item_nodeSeven').html($.i18n.prop('string_nodeSeven'));
		$('#item_nodeNine').html($.i18n.prop('string_nodeNine'));
		$('#item_nodeTen').html($.i18n.prop('string_nodeTen'));
		$('#item_nodeEleven').html($.i18n.prop('string_nodeEleven'));

		$('#item_cOne').html($.i18n.prop('string_cOne'));
		$('#item_cTwo').html($.i18n.prop('string_cTwo'));
		$('#item_cThree').html($.i18n.prop('string_cThree'));
		$('#item_cFour').html($.i18n.prop('string_cFour'));
		$('#item_cFive').html($.i18n.prop('string_cFive'));
		$('#item_cSix').html($.i18n.prop('string_cSix'));
		$('#item_cSeven').html($.i18n.prop('string_cSeven'));

		$('#item_pythonOne').html($.i18n.prop('string_pythonOne'));
		$('#item_pythonTwo').html($.i18n.prop('string_pythonTwo'));
		$('#item_pythonThree').html($.i18n.prop('string_pythonThree'));
		$('#item_pythonFour').html($.i18n.prop('string_pythonFour'));
		$('#item_pythonFive').html($.i18n.prop('string_pythonFive'));
		$('#item_pythonSix').html($.i18n.prop('string_pythonSix'));
		$('#item_pythonSeven').html($.i18n.prop('string_pythonSeven'));
		$('#item_pythonNine').html($.i18n.prop('string_pythonNine'));
		$('#item_pythonTen').html($.i18n.prop('string_pythonTen'));

		$('tr .APIparams').html($.i18n.prop('string_APIparams'));
		$('tr .APItype').html($.i18n.prop('string_APItype'));
		$('tr .APIrequire').html($.i18n.prop('string_APIrequire'));
		$('tr .APIdescription').html($.i18n.prop('string_APIdescription'));
		$('tr .APIexample').html($.i18n.prop('string_APIexample'));
		$('tr .APIattribute').html($.i18n.prop('string_APIattribute'));
		$('tr .item_isRequire').html($.i18n.prop('string_item_isRequire'));
		$('tr .APIkeyDescription').html($.i18n.prop('string_APIkeyDescription'));
		$('tr .APIsecretDescription').html($.i18n.prop('string_APIsecretDescription'));
		$('tr .fromDescription').html($.i18n.prop('string_fromDescription'));
		$('tr .toDescription').html($.i18n.prop('string_toDescription'));
		$('tr .response').html($.i18n.prop('string_response'));
		$('tr .toExample').html($.i18n.prop('string_toExample'));
		$("#statusDescription").html($.i18n.prop('string_statusDescription'));
		$('tr .fileDescription').html($.i18n.prop('string_fileDescription'));
		$('tr .messageDescription').html($.i18n.prop('string_messageDescription'));
		$('tr .statusZero').html($.i18n.prop('string_statusZero'));
		$('tr .statusTwo').html($.i18n.prop('string_statusTwo'));
		$('tr .statusFour').html($.i18n.prop('string_statusFour'));
		$('tr .statusFive').html($.i18n.prop('string_statusFive'));
		$('tr .statusSix').html($.i18n.prop('string_statusSix'));
		$('tr .statusSeven').html($.i18n.prop('string_statusSeven'));
		$('tr .statusNine').html($.i18n.prop('string_statusNine'));
		$("#voiceRepeat").html($.i18n.prop('string_voiceRepeat'));
		$("#voiceBreakSetting").html($.i18n.prop('string_voiceBreakSetting'));
		$("#voiceBreakTime").html($.i18n.prop('string_voiceBreakTime'));
		$("#voiceProsodyRate").html($.i18n.prop('string_voiceProsodyRate'));
		$("#voiceProsodySpeed").html($.i18n.prop('string_voiceProsodySpeed'));
		$('tr .messageidThree').html($.i18n.prop('string_messageidThree'));
		$("#codeDescription").html($.i18n.prop('string_codeDescription'));
		$("#codeExample").html($.i18n.prop('string_codeExample'));
		$("#numberDescript").html($.i18n.prop('string_numberDescript'));
		$("#numberExample").html($.i18n.prop('string_numberExample'));
		$("#statusCodeTitle").html($.i18n.prop('string_statusCodeTitle'));
		$("#messageidTwo").html($.i18n.prop('string_messageidTwo'));
		$("#accountBalance").html($.i18n.prop('string_accountBalance'));
		$("#messageidTwo").html($.i18n.prop('string_messageidTwo'));
		$("#currencyUnit").html($.i18n.prop('string_currencyUnit'));
		$('#messageidFour').html($.i18n.prop('string_messageidFour'));
		$('#networkTitle').html($.i18n.prop('string_networkTitle'));
		$('#returnType').html($.i18n.prop('string_returnType'));
		$('tr .aimNumber').html($.i18n.prop('string_aimNumber'));
		$('#typeDlr').html($.i18n.prop('string_typeDlr'));
		$('#sentStatusCode').html($.i18n.prop('string_sentStatusCode'));
		$('tr .statusReport').html($.i18n.prop('string_statusReport'));
		$('tr .normalStatus').html($.i18n.prop('string_normalStatus'));
		$('tr .unnormalStatus').html($.i18n.prop('string_unnormalStatus'));
		$('tr .statusReportCode').html($.i18n.prop('string_statusReportCode'));
		$('tr .errorStatusCode').html($.i18n.prop('string_errorStatusCode'));
		$('tr .messageArrive').html($.i18n.prop('string_messageArrive'));
		$('tr .messageArrive').html($.i18n.prop('string_messageArrive'));
		$('tr .sendFail').html($.i18n.prop('string_sendFail'));
		$('tr .applyRefuse').html($.i18n.prop('string_applyRefuse'));
		$('tr .unknowError').html($.i18n.prop('string_unknowError'));
		$('tr .errorCodeOne').html($.i18n.prop('string_errorCodeOne'));
		$('tr .errorCodeTwo').html($.i18n.prop('string_errorCodeTwo'));
		$('tr .errorCodeThree').html($.i18n.prop('string_errorCodeThree'));
		$('tr .errorCodeFour').html($.i18n.prop('string_errorCodeFour'));
		$('tr .errorCodeFive').html($.i18n.prop('string_errorCodeFive'));
		$('tr .errorCodeOther').html($.i18n.prop('string_errorCodeOther'));
		$("#singleCost").html($.i18n.prop('string_singleCost'));
		$("#countCost").html($.i18n.prop('string_countCost'));


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

			$("#FreeUse").show();
			$("#QRCode").show();       // 二维码
			$("#footerModelTwo").attr('class','col-md-2');
			$("#footerModelThree").attr('class','col-md-3');
			$("#item_footerAboutUsOne").show();

		}else if (lang==='ja') {

			$("#FreeUse").hide();
			$("#QRCode").hide();       // 二维码
			$("#footerModelTwo").attr('class','col-md-3');
			$("#footerModelThree").attr('class','col-md-4');
			$("#item_footerAboutUsOne").hide();

		}else if (lang==='en') {

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
	}

	PageOpts.init();

})(jQuery,window.PageOpts = {});
