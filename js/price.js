
;(function($,PageOpts){

	PageOpts.init = function(){
		var systemLang = window.navigator.language.slice(0,2);

		var value = sessionStorage.getItem("lang") ? sessionStorage.getItem("lang") : 'zh';

		$("#item_client").attr('href','https://client.paasoo.cn/login?lng='+value);
		
		PageOpts.language(value);
		
		$.ajax({
			type:"get",
			url:'https://client.paasoo.cn/api/price/list',
			dataType : "jsonp",
			jsonp: "jsoncallback",
			success : function(data){
				for (var i = 0,j = data.length; i < j; i++) {
					var option = "<option title="+data[i].label+" data-eurPrise="+data[i].eur_price+" data-rmbPrice="+data[i].rmb_price+" value="+ data[i].value +">"+data[i].value +'&nbsp;'+data[i].label+"</option>"
					$("#combobox").append(option);
				}
			}
		});

		$("#combobox").selected
	    $.widget( "custom.combobox", {
	      _create: function() {
	        this.wrapper = $( "<span>" )
	        	.addClass( "custom-combobox" )
	       		.insertAfter( this.element );
	 
	        this.element.hide();
	        this._createAutocomplete();
	        this._createShowAllButton();
	      },
	 
		_createAutocomplete: function() {
	        var selected = this.element.children( ":selected" ),
	    	value = selected.val() ? selected.text() : "1 United States·美国";

	        this.input = $( "<input>" )
	          .appendTo( this.wrapper )
	          .val( value )
	          .attr( "title", "" )
	          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
	          .autocomplete({
	            delay: 0,
	            minLength: 0,
	        	scrollHeight: 100,
	            source: $.proxy( this, "_source" )
	          })
	          .tooltip({
	            classes: {
	              "ui-tooltip": "ui-state-highlight"
	            }
	          });
	 
	        this._on( this.input, {
	          autocompleteselect: function( event, ui ) {
	            ui.item.option.selected = true;
	            
	            this._trigger( "select", event, {
	            	item: ui.item.option
	            });
	            
	            var $option = $(ui.item.option);
	   			$("#c3").html("€"+$($option).attr('data-eurPrise'));
				$("#c4").html("￥"+$($option).attr('data-rmbPrice'));
	          },
	 
	          autocompletechange: "_removeIfInvalid"
	        });
	      },
	 
		_createShowAllButton: function() {
	        var input = this.input,
	          wasOpen = false;
	 
	        $( "<a>" )
	          .attr( "tabIndex", -1 )
	          .tooltip()
	          .appendTo( this.wrapper )
	          .button({
	            icons: {
	              primary: "ui-icon-triangle-1-s"
	            },
	            text: false
	          })
	          .removeClass( "ui-corner-all" )
	          .addClass( "fa fa-chevron-down combobox-right-icon" )
	          .on( "mousedown", function() {
	            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
	          })
	          .on( "click", function() {
	            input.trigger( "focus" );
	 
	            // Close if already visible
	            if ( wasOpen ) {
	              return;
	            }
	 
	            // Pass empty string as value to search for, displaying all results
	            input.autocomplete( "search", "" );
	          });
	      },
	 
		_source: function( request, response ) {
	        var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
	        response( this.element.children( "option" ).map(function() {
	          var text = $( this ).text();
	          if ( this.value && ( !request.term || matcher.test(text) ) )
	            return {
	              label: text,
	              value: text,
	              option: this
	            };
	        }) );
	      },
	 
		_removeIfInvalid: function( event, ui ) {
	 
	        // Selected an item, nothing to do
	        if ( ui.item ) {
	          return;
	        }
	 
	        // Search for a match (case-insensitive)
	        var value = this.input.val(),
	          valueLowerCase = value.toLowerCase(),
	          valid = false;
	        this.element.children( "option" ).each(function() {
	          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
	            this.selected = valid = true;
	            return false;
	          }
	        });
	 
	        // Found a match, nothing to do
	        if ( valid ) {
	          return;
	        }
	 
	        // Remove invalid value
	        this.input
	          .val( "" )
	          .tooltip( "open" );
	        this.element.val( "" );
	        this._delay(function() {
	          this.input.tooltip( "close" ).attr( "title", "" );
	        }, 2500 );
	        this.input.autocomplete( "instance" ).term = "";
	      },
	 
		_destroy: function() {
	        this.wrapper.remove();
	        this.element.show();
		}
	    });
	 
	    $( "#combobox" ).combobox();
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

		// content
		$('#item_productPrice').html($.i18n.prop('string_footerProductOne'));
		$('#item_productPriceSpan').html($.i18n.prop('string_footerProductTwo'));
		$('.item_globalSms').html($.i18n.prop('string_globalSms'));  // 全球短信
		$('.item_globalVoice').html($.i18n.prop('string_globalVoice')); // 全球语音
		$('.item_validate').html($.i18n.prop('string_validate'));  // 号码格式验证API
		$('.item_sent').html($.i18n.prop('string_sent'));  // 自助发送
		$('#item_numberQuery').html($.i18n.prop('string_numberQuery')); 
		$('#item_formatter').html($.i18n.prop('string_formatter'));
		$('#item_free').html($.i18n.prop('string_free')); 
		$('#item_chinaRmb').html($.i18n.prop('string_chinaRmb'));
		$('.item_chinaRmbMeasure').html($.i18n.prop('string_chinaRmbMeasure'));
		$('.item_priceSale').html($.i18n.prop('string_priceSale'));
		$('.item_otherCountry').html($.i18n.prop('string_otherCountry'));
		$('.item_eur').html($.i18n.prop('string_eur'));
		$('.item_referenceRmb').html($.i18n.prop('string_referenceRmb'));
		$('#item_numberQueryOne').html($.i18n.prop('string_numberQueryOne')); 
		$('#item_numberQueryTwo').html($.i18n.prop('string_numberQueryTwo'));
		$('#item_chinaRmbMeasure').html($.i18n.prop('string_chinaRmbMeasure'));
		$('#item_numberQueryThree').html($.i18n.prop('string_numberQueryThree'));
		$('#item_numberQueryFour').html($.i18n.prop('string_numberQueryFour'));
		$('#item_numberQueryFive').html($.i18n.prop('string_numberQueryFive'));
		$('#item_numberQuerySix').html($.i18n.prop('string_numberQuerySix'));
		$('#item_priceToEur').html($.i18n.prop('string_priceToEur'));
		$('#item_voicePriceConsult').html($.i18n.prop('string_voicePriceConsult'));

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

		$(".item_japanCurrency").html($.i18n.prop('string_japanCurrency'))

		if (lang==='ja') {
			$(".priceZh").hide();
			$(".priceJa").show();
			$("#FreeUse").hide();
			$("#QRCode").hide();
			$("#c4").parent().hide();
			$("ul #referenceCurrency").hide();
			$(".item_priceSale").parent().hide();
			$("#footerModelTwo").attr('class','col-md-3');
			$("#footerModelThree").attr('class','col-md-4');
			$("#item_footerAboutUsOne").hide();
			$("#item_footerAboutUsOne").hide();
			$("#gtco-products .special").css("min-height","26em");
			$("#item_footerAboutUsOne").hide();
			$("#special_price").text('0.02');

		}else if (lang === 'en') {
			$(".priceZh").hide();
			$(".priceJa").hide();
			$("#FreeUse").hide();
			$("#QRCode").hide();
			$("#c4").parent().hide();
			$("ul #referenceCurrency").show();
			$(".item_priceSale").parent().hide();
			$("#footerModelTwo").attr('class','col-md-3');
			$("#footerModelThree").attr('class','col-md-4');
			$("#gtco-products .special").css("min-height","26em");
			$("#item_footerAboutUsOne").hide();		
			$("#special_price").text('');	

		}else{
			$(".priceZh").show();
			$(".priceJa").hide();
			$("#FreeUse").show();
			$("#QRCode").show();
			$("#c4").parent().show();
			$("ul #referenceCurrency").show();
			$(".item_priceSale").parent().show();
			$("#footerModelTwo").attr('class','col-md-2');
			$("#footerModelThree").attr('class','col-md-3');
			$("#item_footerAboutUsOne").show();
			$("#gtco-products .special").css("min-height","32em");
			$("#item_footerAboutUsOne").show();	
			$("#special_price").text('0.02');		
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
