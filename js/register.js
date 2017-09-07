
;(function($,PageOpts){

	PageOpts.init = function(){

		// 获取系统语言
		var systemLang = window.navigator.language.slice(0,2);

		var value = sessionStorage.getItem("lang") ? sessionStorage.getItem("lang") : 'zh';

		$("#item_client").attr('href','https://client.paasoo.cn/login?lng='+value);

		PageOpts.language(value);

    	PageOpts.areaCode();		

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

		if (lang==='zh') {
			
			window.location.href = 'index.html#gtco-subscribe';

		}else if (lang==='ja') {
			
			window.location.href = 'index.html#gtco-subscribe';

		}else if (lang==='en') {
			$("#footerModelTwo").attr('class','col-md-3');
			$("#footerModelThree").attr('class','col-md-4');
			$("#item_footerAboutUsThree").hide();
			$("#FreeUse").hide();
			$("#QRCode").hide();         // 二维码
		}


		var title = {
                    'zh':'PaaSoo 无限云 - 全球云通讯平台::短信/语音/验证码/通知',
                    'en':'PaaSoo Technology Limited – Global cloud communication platform::short messaging/voice/2fa/alert.',
                    'ja':'PaaSoo 無限クラウド – 世界クラウド通信プラットホーム::ショートメッセージ/音声/認証コード/お知らせ'
                }[lang];

        $("title").html(title);        
	};

	// 消息提示框公用方法
    PageOpts.openLayer = function (title, callback, opts) {

        var defaultOpts = {
            time: 2000 //2秒关闭（如果不配置，默认是3秒）
        };

        var newOpts = $.extend({}, defaultOpts, opts);

        callback = callback ? callback : "";

        layer.msg(title, callback, newOpts);
    };

	PageOpts.getSecCode = function(){

		PageOpts.mobile = $("#item_mobile").val();

		var tipOpts = {};
		var msg = [
			{'zh':'请输入手机号。','en':"Please enter the phone number.",'ja':'携帯番号を入力して下さい。'},
			{'zh':"请输入验证码：",'en':"Verification Code:",'ja':'認証コードを入力して下さい:'}
		];

		if (!PageOpts.mobile) {

			tipOpts.title = msg[0][PageOpts.lang];
			tipOpts.selector = '#item_mobile';
			PageOpts.tips(tipOpts);
			return;

		};

		// 获取验证码
    	var html = 
    	'<div class="layer-container">' +
	        '<ul style="list-style:none">' +
		        '<li class="base-li">' +
		        	'<input style="margin:30px 10px 0 0; outline:none; padding:5px" id="valideteCode"  type="text"/>' +
		        	'<img src="http://192.168.0.103:8080/sec/imgCode?time=' + new Date().getTime() + '" onclick="PageOpts.changeImgCode(this);">' +
		        '</li>' +
	        '</ul>' +
        '</div>';

        layer.open({
            title: {'zh':'短信验证码','en':'Verification Code','ja':'認証コード'}[PageOpts.lang],
            type: 1,
            content: html,
            area: ['320px', '200px'],
            btn: {'zh':['确定'],'en':['OK'],'ja':['確認']}[PageOpts.lang],
            btn1: function (index) {
            	var imgSecCode = $("#valideteCode").val();

            	if (!imgSecCode) {

					PageOpts.msg = {'zh':'请输入验证码','en':'Verification Code','ja':'認証コードを入力して下さい'}[PageOpts.lang];
		            PageOpts.tips(PageOpts.msg,'#valideteCode');
		            return;

            	}else{

                	PageOpts.getMessage(imgSecCode);
                	layer.close(index);
            	}
            }
        });
	};

	//改变验证码
    PageOpts.changeImgCode = function (self) {

        $(self).attr('src', 'http://192.168.0.103:8080/sec/imgCode?t=' + new Date().getTime());

    };

	PageOpts.getMessage = function (imgSecCode) {

        var queryParam = {};
        queryParam.mobileCode = $("#mobileCode").val();
        queryParam.mobile = $("#item_mobile").val();
        queryParam.imgSecCode = imgSecCode;
        queryParam.case = 'apply';
       
        $.ajax({
            type: 'GET',
            url: 'http://192.168.0.103:8080/sec/sendMobileCode?jsoncallback='+(new Date().getTime()),
            dataType: 'jsonp',
            jsonp:"jsoncallback",
            data: queryParam,
            success: function (data) {

                if (data.success){

                    PageOpts.showtime(60);

                }else {

                    switch(data.status) {

                        case "4001":
                            PageOpts.msg = {'zh':"短信验证码错误。",'en':"Verification Code error.",'ja':"認証コードエラー。"}[PageOpts.lang];
                            break;
                        case "4008":
                            PageOpts.msg = {'zh':"验证手机错误。",'en':"Phone number verification failed.",'ja':"携帯認証エラー。"}[PageOpts.lang];
                            break;
                        case "4011":
                            PageOpts.msg = {'zh':"号码格式错误。",'en':"Phone number format error.",'ja':"番号形式エラー。"}[PageOpts.lang];
                            break;
                        case "4012":
                            PageOpts.msg = {'zh':"欠费或者信用不足。",'en':"Insufficient balance or credit limit.",'ja':"支払延滞または限度額不足。"}[PageOpts.lang];
                            break;
                        case "4022":
                            PageOpts.msg = {'zh':"手机号码未注册。",'en':"Unregistered phone number.",'ja':"携帯番号が未登録です。"}[PageOpts.lang];
                            break;
                        case "4025":
                            PageOpts.msg = {'zh':"获取短信验证码超时。",'en':"Get SMS verification code timeout.",'ja':"認証コードタイムアウト。"}[PageOpts.lang];
                            break;
                        default:
                            PageOpts.msg = {'zh':"系统出错。",'en':"Error.",'ja':"エラー。"}[PageOpts.lang];
                    }
                    PageOpts.openLayer(PageOpts.msg);
                }
            }
        })
    };

    // 倒计时60秒
    PageOpts.showtime = function (t) {

        var selector = $("#getCode");

        selector.attr("disabled", true);

        for (var i = 1; i <= t; i++) {

            window.setTimeout("PageOpts.update_p(" + i + "," + t + ")", i * 1000);
        }
    };

    PageOpts.update_p = function (num, t) {

        var selector = $("#getCode");

        if (num === t) {
            PageOpts.msg = {
                'zh':'获取短信验证码',
                'en':'Get Verification Code',
                'ja':'認証コードを取得する'
            }[PageOpts.lang];
            selector.val(PageOpts.msg);
            selector.removeAttr("disabled");

        } else {
            var printnr = t - num;
            PageOpts.msg = {'zh':" (" + printnr + ")秒后重新发送",'en':" Resend after (" + printnr + ")seconds",'ja':" (" + printnr + ")秒後に再送"}[PageOpts.lang];
            selector.val(PageOpts.msg);
        }
    };

        // 消息提示框公用方法
    PageOpts.openLayer = function (title, callback, opts) {

        var defaultOpts = {
            time: 2000 //2秒关闭（如果不配置，默认是3秒）
        };

        var newOpts = $.extend({}, defaultOpts, opts);

        callback = callback ? callback : "";

        layer.msg(title, callback, newOpts);
    };

    // 区号
    PageOpts.areaCode = function (lang) {

        var select = $("#mobileCode");
        var name = {'zh':"cnName",'en':"enName",'ja':'enName'}[PageOpts.lang];

        $.getJSON("js/countryCode.json", function(json){

            for (var i = 0;i<json.length;i++){
                var option = "<option value="+json[i].code+">"+json[i][name]+"("+json[i].code+")"+"</option>";
                select.append(option);
            }

            select.val("86");
        });

    };
	
	PageOpts.validate = function(){

		var queryParam = {};
			queryParam.name = $("#item_name").val();
			queryParam.email = $("#item_email").val();
			queryParam.mobile = $("#item_mobile").val();
			queryParam.mobileCode = $("#mobileCode").val();
			queryParam.secCode = $("#item_code").val();
			queryParam.message = $("#message").val();
			queryParam.lang = PageOpts.lang;

			var req = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
			var tipOpts = {};
			var langArr = [
				{
					'zh':"请填写公司名称",
					'en':'Please enter the company name.',
					'ja':"会社名を入力して下さい"
				},{
					'zh':"请填写企业邮箱",
					'en':'Please enter the company E-mail.',
					'ja':"企業用メールアドレスを入力して下さい"
				},{
					'zh':"请填写手机",
					'en':'Please enter the phone number.',
					'ja':"携帯番号を入力して下さい"
				},{
					'zh':'请输入短信验证码',
                	'en':'Please enter the verification code',
                	'ja':'認証コードを入力して下さい'
				},{
					'zh':"邮箱格式不正确",
					'en':'Incorrect E-mail Format',
					'ja':''
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

			}else if (!queryParam.secCode) {

				tipOpts.title = langArr[3][PageOpts.lang];
				tipOpts.selector = '#item_code';

			}else if (!req.test(queryParam.email)) {

				tipOpts.title = langArr[4][PageOpts.lang];
				tipOpts.selector = '#item_email';

			}else{
				tipOpts = false;
			}

			!!tipOpts ? PageOpts.tips(tipOpts): PageOpts.doAjax(queryParam);

	};

	PageOpts.doAjax = function(queryParam){
		var url = "http://192.168.0.103:8080/api/apply?jsoncallback="+(new Date().getTime());
		
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
				$("#item_code").val('');
				$("#message").val('');
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

			},
			error:function(data){

			}
		});
	};

	PageOpts.tips = function(tipOpts){
		layer.tips(tipOpts.title,tipOpts.selector,{
		 	tips: [3, '#0e8c87'],
		  	time: 4000
		})
	};

	PageOpts.init();

})(jQuery,window.PageOpts = {});
