var timer_out = [];
var timerBlink;
var business_enrolment_screens=0;
$(document)
		.ready(
				function() {

					$('.navigationControl li')
							.on(
									'click',
									function() {
									//  TCSL: S.B 21.01.2015 : Expire the timer  
										for(var i=0;i<timer_out.length;i++){
											clearTimeout(timer_out[i]);
										}
										timer_out = [];
										 business_enrolment_screens=0;
										$("#welcomeContentView").hide();
										$('#demoScreen').hide();

										$(".wrapperContent nav ul li")
												.removeClass('activeSelected');
										$(this).addClass('activeSelected');

										var journey_id = '#journeyViewId';

										var dataAttrValue = $(this).data(
												'identity');

										$(journey_id + " .large").text(
												dataAttrValue);
									//  TCSL: I.D 21.01.2015 : BOS Retail and Business under construction (S)
								
										if(dataAttrValue=="BOS Retail" || dataAttrValue=="BOS Business"){
											$('#journeyViewId p:nth-of-type(2)').text("Page under construction.");
											$('#journeyViewId p:nth-of-type(2)').addClass('bos_retail_business');
											$('.journeyButtonParent').hide();
										}else{
											$('#journeyViewId p:nth-of-type(2)').text("Click on the buttons below to view the journeys.");
											$('#journeyViewId p:nth-of-type(2)').addClass('bos_retail_business_journey');
											$('.journeyButtonParent').show();
										}
										//  TCSL: I.D 21.01.2015 : BOS Retail and Business under construction  (E)

										$(journey_id).show();
										$('#demoScreen img').unbind("click");
										$('#demoScreen2 img').unbind("click");
										$('#demoScreen2').hide();
										$('#demoScreen2 img').attr("src", "");
										$('#demoScreen').removeClass('grid_3');
										$('#demoScreen').addClass('demoscreen_width');
										$('#demoScreen').addClass('grid_8');
										$("#demoScreen img").css("margin-left","250px");
										$('#demoScreen div').hide();

									});

					$('#journeyViewId .journeyButtonParent a')
							.on(
									'click',
									function() {
										var module = $(
												'.wrapperContent ul li.activeSelected')
												.data('identity');
										var dataAttrValue = $(this).data('tab');

										$("#journeyViewId").hide();
										//TCSL: S.B 21.01.2015 : Enrollment journey for different modules(S)
										if (dataAttrValue == 'enrolmentJourney') {

											if (module == "Lloyds Retail") {
												var splashScreen = "img/Enrolment/enrolment_launch_1.png";
												var homeScreen = "img/Enrolment/enrolment_welcome_2.png";
												initializeModule(splashScreen,
														homeScreen, module,
														dataAttrValue);
											} else if (module == "Lloyds Business") {
												var splashScreen = "img/lloydsBusiness/splash_1.jpg";
												var homeScreen = "img/lloydsBusiness/intro.PNG";
												initializeModule(splashScreen,
														homeScreen, module,
														dataAttrValue);
											}
											//TCSL: S.B 21.01.2015 : Enrollment journey for different modules(E)
											else if (module == "HALIFAX") {
												var splashScreen = "img/halifax/enrollment/1.PNG";
												var homeScreen = "img/halifax/enrollment/2.PNG";
												initializeModule(splashScreen,
														homeScreen, module,
														dataAttrValue);
											}

											else {
												$("#journeyViewId").show();
											}

										} 
										//TCSL: S.B 21.01.2015 : Calling of different modules(S)
										else {
											if (module == "Lloyds Retail") {
												splashScreen = "img/Enrolment/enrolment_launch_1.png";
												homeScreen = "img/Enrolment/enrolment_memorable_7.png";
												initializeModule(splashScreen,
														homeScreen, module,
														dataAttrValue);
											} else if (module == "Lloyds Business") {
												splashScreen = "img/lloydsBusiness/splash_1.jpg";
												homeScreen = "img/lloydsBusiness/begin_registration_4.PNG";
												initializeModule(splashScreen,
														homeScreen, module,
														dataAttrValue);
											}
											//TCSL: S.B 21.01.2015 : Calling of different modules(E)
											else if(module == "HALIFAX"){
								                 var splashScreen = "img/halifax/enrollment/1.PNG";
								                 var homeScreen = "img/halifax/enrollment/2.PNG";
								                 initializeModule(splashScreen, homeScreen, module, dataAttrValue);        
								         }
										}
									});

				});
//  TCSL: I.D 21.01.2015 : function for blinking effect (S)

function blink(temp) {
    blink1(temp);
}
function blink1(temp) {
 
    temp.removeClass();
    temp.addClass("red-border");
    clearTimeout(timerBlink);
    timerBlink = setTimeout(function () { blink2(temp); }, 500);
}


function blink2(temp) {
    temp.removeClass();
    temp.addClass("orange-border");
    clearTimeout(timerBlink);
    timerBlink = setTimeout(function () { blink1(temp); }, 500);
}

function blinkNext(temp1,temp2) {
    blinkNext1(temp1,temp2);
}
function blinkNext1(temp1,temp2) {
 
    temp1.removeClass();
    temp2.removeClass();
    temp1.addClass("red-border");
    temp2.addClass("red-border");
    clearTimeout(timerBlink);
        blinkNext2(temp1,temp2); 

}


function blinkNext2(temp1,temp2) {
    var toggleSwitch = 0;
    clearTimeout(timerBlink);
    
    timerBlink = setInterval(function () {
        if(toggleSwitch == 0){
              temp1.removeClass("orange-border");
              temp2.removeClass("orange-border");
                
              temp1.addClass("red-border");
              temp2.addClass("red-border");
              
              toggleSwitch = 1;
        }else{
        
              temp1.removeClass("red-border");
              temp2.removeClass("red-border");
              
              temp1.addClass("orange-border");
              temp2.addClass("orange-border");
              
              toggleSwitch = 0;
        }
  
    }, 500);
}

//  TCSL: I.D 21.01.2015 :  function for blinking effect (E)
/*TCSL: S.B 21.01.2015 : To find out the coordinates of event by calling function 'findCords'.
 *  flow of light login of llyods retail,llyods business and halifax.
*/
function initializeModule(splashimage, homeImage, module, subModule) {
    $('#demoScreen img').attr("src", splashimage);
    $('#demoScreen').show();

    if (module == "Lloyds Retail" && subModule != 'enrolmentJourney') {
		timer_out.push(setTimeout(function() {
			$('#demoScreen img').attr("src", homeImage);
		}, 1500));
		timer_out.push(setTimeout(function() {
			$('#demoScreen img').attr("src",
					"img/Enrolment/enrolment_confirmMI_8.png");
		}, 3000));
		timer_out.push(setTimeout(function() {
			$('#demoScreen img').attr("src",
					"img/Enrolment/enrolment_home_15.png");
		}, 4500));

		findCords(module, subModule);
    }
    // If business > Other Journey
    
    else if (module == "Lloyds Business" && subModule != "enrolmentJourney") {
		timer_out.push(setTimeout(function() {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/begin_registration_4.PNG");
		}, 1500));

		timer_out.push(setTimeout(function() {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/begin_registration_5.PNG");
			findCords(module, subModule);
		}, 3000));

		timer_out.push(setTimeout(function() {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/select_business.PNG");
		}, 4500));
		//  TCSL: I.D 21.01.2015 : blinking of adidas tile(S)
		timer_out.push(setTimeout(function() {
			$('#adidas').css('display','block');
			blink($('#adidas'));
		}, 4700));
		//  TCSL: I.D 21.01.2015 : blinking of adidas tile (E)
    }
    
     // Halifax > Other Journey
    else if(module == "HALIFAX" && subModule != "enrolmentJourney") {
            timer_out.push(setTimeout(function() {
                    $('#demoScreen img').attr("src","img/halifax/lightLogin/3.PNG");
            }, 1500));

            timer_out.push(setTimeout(function() {
                    $('#demoScreen img').attr("src","img/halifax/lightLogin/4.PNG");
            }, 3000));

            timer_out.push(setTimeout(function() {
                    $('#demoScreen img').attr("src", "img/halifax/lightLogin/5.PNG");
                    findCords(module, subModule);
               }, 4500));
    }

    else { 
		//  TCSL: I.D 21.01.2015 : blinking of first next button(S)
		timer_out.push(setTimeout(function() {
			$('#demoScreen img').attr("src", homeImage);
			if(module == 'HALIFAX'){
				$('#temp1').show();
				blink($('#temp1'));
			}
			else{
				$('#temp').show();
				blink($('#temp'));
			}
			findCords(module, subModule);
		}, 1000));
		//  TCSL: I.D 21.01.2015 :  blinking of first next button(E)
    }

}
//TCSL: S.B 21.01.2015 : To find out the coordinates of event.
function findCords(moduleName, subModule) {
    $('#demoScreen img').bind(
			"click",
			function(e) {
				var offset = $(this).offset();
				var X = (e.pageX - offset.left);
				var Y = (e.pageY - offset.top);

			    console.log("x:" + X + "   y:" + Y);

				if (moduleName == 'Lloyds Retail') {
					changeImage(X, Y);
				} else if (moduleName == "Lloyds Business"
						&& subModule == "enrolmentJourney") {
					changeImageLloydsBusiness(X, Y);
				} else if (moduleName == "Lloyds Business"
						&& subModule == "otherJourney") {
					changeImageOtherLloydsBusiness(X, Y);
				} else if (moduleName == "HALIFAX"
						&& subModule == "enrolmentJourney") {
					changeImageHalifax(X, Y);
				}
				else if(moduleName == "HALIFAX" && subModule == "otherJourney") { 
		            changeImageOtherHalifax(X,Y);
		    }
			});

    $('#demoScreen2 img').bind("click", function(e) {
		offset = $(this).offset();
		X = (e.pageX - offset.left);
		Y = (e.pageY - offset.top);

		changeImageLloydsBusiness(X, Y);

    });

}
//TCSL: S.B 21.01.2015 : Enrollment journey of Retail.
function changeImage(pos_x, pos_y) {
    var imageDiv_id = $('#demoScreen img');
    var image = $(imageDiv_id).attr("src");

    if ((pos_x > 282 && pos_x < 321) && (pos_y > 30.5 && pos_y < 53)) {
		if (image == 'img/Enrolment/enrolment_welcome_2.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/enrolment_need_3.png");
			//  TCSL: I.D 21.01.2015 : blinking of next button(S)
			$('#back').show();
             blinkNext($('#back'),$('#temp')); 
             //  TCSL: I.D 21.01.2015 : blinking of next button(E)
		} else if (image == 'img/Enrolment/enrolment_need_3.png') {
			$(imageDiv_id)
					.attr("src", "img/Enrolment/enrolment_register_4.png");
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#temp').hide();
			$('#btn').show();
            blinkNext($('#btn'),$('#back'));
            //  TCSL: I.D 21.01.2015 : blinking of button(E)
		}
    } else if ((pos_x > 11 && pos_x < 49) && (pos_y > 30.5 && pos_y < 49)) {
		if (image == 'img/Enrolment/enrolment_need_3.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/enrolment_welcome_2.png");
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#back').hide();
		//  TCSL: I.D 21.01.2015 : blinking of button(E)
		} else if (image == 'img/Enrolment/enrolment_register_4.png') {
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			  $('#btn').hide();
			  //  TCSL: I.D 21.01.2015 : blinking of button(E)
			$(imageDiv_id).attr("src", "img/Enrolment/enrolment_need_3.png");
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#temp').show();
			 //  TCSL: I.D 21.01.2015 : blinking of button(E)
		}
    }

    else if ((pos_x > 14 && pos_x < 319) && (pos_y > 487.5 && pos_y < 557)) {
		if ((pos_x > 169 && pos_x < 317) && (pos_y > 499 && pos_y < 536)) {
			if (image == 'img/Enrolment/enrolment_mobile_9.png') {
				$(imageDiv_id).attr("src",
						"img/Enrolment/enrolment_wait_10.png");
				//  TCSL: I.D 21.01.2015 : blinking of button (S)
				  $('#callBtn').hide();
				  //  TCSL: I.D 21.01.2015 : blinking of button(E)
				timer_out.push(setTimeout(function() {
					$(imageDiv_id).attr("src",
							"img/Enrolment/enrolment_authentication_11.png");
				}, 1500));
				timer_out.push(setTimeout(function() {
					$(imageDiv_id).attr("src",
							"img/Enrolment/enrolment_congratulation_12.png");
				}, 3000));
				//  TCSL: I.D 21.01.2015 : blinking of button(S)
				timer_out.push(setTimeout(function() {
					$('#contBtn').show();
                     blink($('#contBtn'));
                 }, 3300));
				//  TCSL: I.D 21.01.2015 : blinking of button(E)
			}
		}
		if (image == 'img/Enrolment/enrolment_congratulation_12.png') {
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#contBtn').hide();
			//  TCSL: I.D 21.01.2015 : blinking of button(E)
			
			$(imageDiv_id).attr("src",
					"img/Enrolment/enrolment_security_13.png");
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#saveBtn').show();
             blink($('#saveBtn'));
             //  TCSL: I.D 21.01.2015 : blinking of button(E)
		}

		else if (image == 'img/Enrolment/enrolment_register_4.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/enrolment_login_5.png");
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#temp').hide();
			$('#back').hide();
			$('#btn').hide();
			$('#goBtn').show();
            blink($('#goBtn'));
            //  TCSL: I.D 21.01.2015 : blinking of button(E)
		} else if (image == 'img/Enrolment/enrolment_security_13.png') {
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#saveBtn').hide();
			//  TCSL: I.D 21.01.2015 :blinking of button (E)
			$(imageDiv_id).attr("src",
					"img/Enrolment/enrolment_security_loading_14.png");
			timer_out.push(setTimeout(function() {
				$(imageDiv_id).attr("src",
						"img/Enrolment/enrolment_home_15.png");
			}, 1500));

		} else if (image == 'img/Enrolment/enrolment_congratulation_12.png') {
			$(imageDiv_id).attr("src",
					"img/Enrolment/enrolment_security_13.png");
		}

		if ((pos_x > 252 && pos_x < 332) && (pos_y > 509 && pos_y < 556)) {
			if (image == 'img/Enrolment/enrolment_login_5.png') {
				//  TCSL: I.D 21.01.2015 : blinking of button(S)
				$('#goBtn').hide();
				$('#callBtn').hide();
				     //  TCSL: I.D 21.01.2015 : blinking of button(E)
				
				$(imageDiv_id).attr("src",
						"img/Enrolment/enrolment_confirmuser_6.png");

				timer_out.push(setTimeout(function() {
					$(imageDiv_id).attr("src",
							"img/Enrolment/enrolment_memorable_7.png");
				}, 1500));
				timer_out.push(setTimeout(function() {
					$(imageDiv_id).attr("src",
							"img/Enrolment/enrolment_confirmMI_8.png");
				}, 3000));
				timer_out.push(setTimeout(function() {
					$(imageDiv_id).attr("src",
							"img/Enrolment/enrolment_mobile_9.png");
				}, 4500));
				//  TCSL: I.D 21.01.2015 : blinking of button(S)
				 timer_out.push(setTimeout(function() {
					 $('#callBtn').show();
                     blink($('#callBtn'));
                 }, 4800));           //  TCSL: I.D 21.01.2015 : blinking of button(E)
			}
		}

    }
    // Other Journey > Light
    // Login
    // Transfer and Payments button
    if ((pos_x > 166.5 && pos_x < 333.5) && (pos_y > 243 && pos_y < 350)) {
		if (image == 'img/Enrolment/enrolment_home_15.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/payAContact/2.png");
			timer_out.push(setTimeout(function() {
				$(imageDiv_id).attr("src", "img/Enrolment/payAContact/3.png");
			}, 1500));

		}
    }

    // Register Button
    if ((pos_x > 161.5 && pos_x < 330.5) && (pos_y > 499 && pos_y < 556)) {
		if (image == 'img/Enrolment/payAContact/3.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/payAContact/4.png");
		}
    }

    // 'From:' Panel
    if ((pos_x > 1.5 && pos_x < 332.5) && (pos_y > 104 && pos_y < 184)) {
		if (image == 'img/Enrolment/payAContact/4.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/payAContact/5.png");
		}
    }

    // 'From:' Panel
    if ((pos_x > 1.5 && pos_x < 332.5) && (pos_y > 106 && pos_y < 310)) {
		if (image == 'img/Enrolment/payAContact/5.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/payAContact/6.png");
		}
    }

    // Contacts button
    if ((pos_x > 270.5 && pos_x < 330.5) && (pos_y > 198 && pos_y < 261)) {
		if (image == 'img/Enrolment/payAContact/6.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/payAContact/7.0.png");
		}
    }

    // OK button to confirm contact selection
    if ((pos_x > 159.5 && pos_x < 315.5) && (pos_y > 296 && pos_y < 355)) {
		if (image == 'img/Enrolment/payAContact/7.0.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/payAContact/7.1.png");
		}
    }

    // Contact selection from list of contacts
    if ((pos_x > 1.5 && pos_x < 333.5) && (pos_y > 101 && pos_y < 155)) {
		if (image == 'img/Enrolment/payAContact/7.1.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/payAContact/7.2.png");
		}
    }

    // Phone number selection
    if ((pos_x > 1.5 && pos_x < 177.5) && (pos_y > 147 && pos_y < 196)) {
		if (image == 'img/Enrolment/payAContact/7.2.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/payAContact/7.5.png");
		}
    }

    // Review Payment
    if ((pos_x > 3.5 && pos_x < 332.5) && (pos_y > 507 && pos_y < 559)) {
		if (image == 'img/Enrolment/payAContact/7.5.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/payAContact/7.7.png");
			timer_out.push(setTimeout(
					function() {
						$(imageDiv_id).attr("src",
								"img/Enrolment/payAContact/7.8.png");
					}, 1500));
		}
    }

    // Confirm Contact
    if ((pos_x > 160.5 && pos_x < 329.5) && (pos_y > 508 && pos_y < 556)) {
		if (image == 'img/Enrolment/payAContact/7.8.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/payAContact/7.10.png");
		}
    }

    // GO button
    if ((pos_x > 246.5 && pos_x < 330.5) && (pos_y > 505 && pos_y < 553)) {
		if (image == 'img/Enrolment/payAContact/7.10.png') {
			$(imageDiv_id).attr("src", "img/Enrolment/payAContact/7.11.png");
		}
    }

}

function changeImageLloydsBusiness(pos_x, pos_y) {
    var imageDiv_id = $('#demoScreen img');
    var image = $(imageDiv_id).attr("src");

    if ((pos_x > 282.4 && pos_x < 324.6) && (pos_y > 28.3 && pos_y < 52.1)) {
		if (image == 'img/lloydsBusiness/intro.PNG') {
			$(imageDiv_id).attr("src",
					"img/lloydsBusiness/need_to_register.PNG");
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#back').css('display','block');
			blinkNext($('#back'),$('#temp'));
			//  TCSL: I.D 21.01.2015 : blinking of button(E)
		} else if (image == 'img/lloydsBusiness/need_to_register.PNG') {
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#temp').css('display','none');
			$(imageDiv_id)
					.attr("src", "img/lloydsBusiness/register_device.PNG");
			$('#btn').css('display','block');
			blinkNext($('#btn'),$('#back'));        //  TCSL: I.D 21.01.2015 : blinking of button(E)
		}
    }

    if ((pos_x > 10.4 && pos_x < 52) && (pos_y > 28.9 && pos_y < 51.1)){
		if (image == 'img/lloydsBusiness/need_to_register.PNG') {
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#back').hide();
			//  TCSL: I.D 21.01.2015 : blinking of button(E)
		
			$(imageDiv_id).attr("src", "img/lloydsBusiness/intro.PNG");
		} else if (image == 'img/lloydsBusiness/register_device.PNG') {
			$(imageDiv_id).attr("src",
					"img/lloydsBusiness/need_to_register.PNG");
			//  TCSL: I.D 21.01.2015 : blinking of button (S)
			$('#temp').show();
			$('#btn').hide();
			  blinkNext($('#temp'),$('#back'));
			  //  TCSL: I.D 21.01.2015 : blinking of button(E)
		}
    }

    if ((pos_x > 17.4 && pos_x < 316.6) && (pos_y > 490.8 && pos_y < 529)) {
		if (image == 'img/lloydsBusiness/register_device.PNG') {
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#btn').hide();
			$('#back').hide();
			//  TCSL: I.D 21.01.2015 : blinking of button(E)
			
			$(imageDiv_id).attr("src",
					"img/lloydsBusiness/begin_registration.PNG");

			timer_out.push(setTimeout(function() {
				$('#demoScreen img').attr("src",
						"img/lloydsBusiness/begin_registration_2.PNG");
			}, 1500));
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			timer_out.push(setTimeout(function() {
				$('#goBtn').show();
                blink($('#goBtn'));
            }, 1700));                      //  TCSL: I.D 21.01.2015 : blinking of button(E)
		}
    }

    if ((pos_x > 254.4 && pos_x < 329.7) && (pos_y > 512.5 && pos_y < 554)) {
		if (image == 'img/lloydsBusiness/begin_registration_2.PNG') {
			//  TCSL: I.D 21.01.2015 : changing visibility of button(S)
			$('#goBtn').hide();
          //  TCSL: I.D 21.01.2015 :  changing visibility of button(E)
			
			$(imageDiv_id).attr("src",
					"img/lloydsBusiness/begin_registration_3.PNG");
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			timer_out.push(setTimeout(function() {
				$('#demoScreen img').attr("src",
						"img/lloydsBusiness/begin_registration_3.PNG");
			}, 1500));   
			//  TCSL: I.D 21.01.2015 : blinking of button(E)

			// Split Flow

			timer_out.push(setTimeout(function() {

				var demoDiv1 = $('#demoScreen .grid_3');
				var demoDiv2 = $('#demoScreen2 .grid_3');

				$(demoDiv1).text('Software Token Input');
				$(demoDiv1).show();
				$(demoDiv2).text('Card Reader Input');
				$(demoDiv2).show();

				$('#demoScreen').removeClass('grid_8');
				$('#demoScreen').addClass('grid_3');
				$('#demoScreen').css('width', '485px');
				$("#demoScreen img").css("margin-left", "100px");
				$('#demoScreen2 img').attr("src", "img/lloydsBusiness/enter_passcode_3.PNG");
				$('#demoScreen2').show();

				$('#demoScreen img').attr("src",
						"img/lloydsBusiness/device_registration_1.8.PNG");
			}, 1500));
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			timer_out.push(setTimeout(function() {
				$('#contBtn1').show();
				$('#contBtn3').show();
				blinkNext($('#contBtn1'),$('#contBtn3'));
			}, 1800));
			//  TCSL: I.D 21.01.2015 : blinking of button(E)

		}
		if (image == 'img/lloydsBusiness/create_MI.PNG') {
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#goBtn').hide();
	        //  TCSL: I.D 21.01.2015 : blinking of button(E)
			
			$(imageDiv_id).attr("src",
					"img/lloydsBusiness/create_MI_loading.PNG");
			timer_out.push(setTimeout(function() {

				var demoDiv1 = $('#demoScreen .grid_3');
				var demoDiv2 = $('#demoScreen2 .grid_3');

				$(demoDiv1).text('Software Token Input');
				$(demoDiv1).show();
				$(demoDiv2).text('Card Reader Input');
				$(demoDiv2).show();

				$('#demoScreen').removeClass('grid_8');
				$('#demoScreen').addClass('grid_3');
				$('#demoScreen').css('width', '485px');
				$("#demoScreen img").css('margin-left','100px');
				$('#demoScreen2 img').attr("src", "img/lloydsBusiness/enter_passcode_3.PNG");
				$('#demoScreen2').show();

				$('#demoScreen img').attr("src",
						"img/lloydsBusiness/device_registration_1.8.PNG");
			}, 1500));
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			timer_out.push(setTimeout(function() {
				$('#contBtn1').show();
				$('#contBtn3').show();
				blinkNext($('#contBtn1'),$('#contBtn3'));
			}, 1800));
			//  TCSL: I.D 21.01.2015 : blinking of button(E)
			
		}
    }

    if ((pos_x > 15.5 && pos_x < 317) && (pos_y > 507 && pos_y < 543.1)) {

		var imageDiv_id2 = $('#demoScreen2 img');
		var image2 = $(imageDiv_id2).attr("src");

		if (image == 'img/lloydsBusiness/congratulations.PNG') {
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#contBtn2').hide();
			//  TCSL: I.D 21.01.2015 : blinking of button(E)
		
			$(imageDiv_id).attr("src",
					"img/lloydsBusiness/security_setting.PNG");
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#saveBtn').show();
			blink($('#saveBtn'));                          //  TCSL: I.D 21.01.2015 : blinking of button(E)
		} else if (image == 'img/lloydsBusiness/device_registration_1.8.PNG'
				|| image2 == 'img/lloydsBusiness/enter_passcode_3.PNG') {
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#contBtn1').hide();
			$('#contBtn3').hide();
			//  TCSL: I.D 21.01.2015 : blinking of button(E)
			if(business_enrolment_screens==0){
			$('#demoScreen2').hide();
			$('#demoScreen2 img').attr("src", "");
			$('#demoScreen').removeClass('grid_3');
			$('#demoScreen').addClass('demoscreen_width');
			$('#demoScreen').addClass('grid_8');
			$("#demoScreen img").css("margin-left", "250px");
			$('#demoScreen img').attr("src","img/lloydsBusiness/create_MI.PNG");
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#goBtn').show();
			blink($('#goBtn'));
			//  TCSL: I.D 21.01.2015 : blinking of button(E)
			business_enrolment_screens++;
			}
			else if(business_enrolment_screens==1){
				$('#demoScreen2').hide();
				$('#demoScreen2 img').attr("src", "");
				$('#demoScreen').removeClass('grid_3');
				//$('#demoScreen').css('width', '');
				$('#demoScreen').addClass('demoscreen_width');
				$('#demoScreen').addClass('grid_8');
				$("#demoScreen img").css("margin-left", "250px");
				$("#demoScreen img")
				.attr("src", "img/lloydsBusiness/congratulations.PNG");
				//  TCSL: I.D 21.01.2015 : blinking of button(S)
				$('#contBtn2').show();
				blink($('#contBtn2'));                    //  TCSL: I.D 21.01.2015 : blinking of button(E)
				business_enrolment_screens--;
				
			}
			
		}
		$('#demoScreen2 div').hide();
		$('#demoScreen .grid_3').hide();

    }

    if ((pos_x > 11 && pos_x < 322.5) && (pos_y > 501.6 && pos_y < 546)) {
		if (image == 'img/lloydsBusiness/security_setting.PNG') {
			$('#saveBtn').hide();
			$(imageDiv_id).attr("src",
					"img/lloydsBusiness/security_setting_2.PNG");

			timer_out.push(setTimeout(function() {
				$('#demoScreen img').attr("src",
						"img/lloydsBusiness/select_business.PNG");
			}, 1500));
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			timer_out.push(setTimeout(function() {
				$('#adidas').show();
				blink($('#adidas'));
			}, 1700));                     //  TCSL: I.D 21.01.2015 : blinking of button(E)
		}
    }

    if ((pos_x > 8.5 && pos_x < 325.5) && (pos_y > 139 && pos_y < 193)) {
		if (image == 'img/lloydsBusiness/select_business.PNG') {
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#adidas').hide();
           //  TCSL: I.D 21.01.2015 : blinking of button(E)
			
			$(imageDiv_id).attr("src",
					"img/lloydsBusiness/select_business_2.PNG");
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			timer_out.push(setTimeout(function() {
				$('#demoScreen img').attr("src",
						"img/lloydsBusiness/business_selected.PNG");
			}, 1500));
			
			//  TCSL: I.D 21.01.2015 : blinking of button(E)
		}
    }

}
//TCSL: S.B 21.01.2015 : light login journey of llyods bussiness

function changeImageOtherLloydsBusiness(pos_x, pos_y) {
    var imageDiv_id = $('#demoScreen img');
    var image = $(imageDiv_id).attr("src");
    
    /* home page in light login*/
    if ((pos_x > 8.5 && pos_x < 325.5) && (pos_y > 139 && pos_y < 194)) {
		if (image == 'img/lloydsBusiness/select_business.PNG') {
			//  TCSL: I.D 21.01.2015 : blinking of button(S)
			$('#adidas').hide();
              //  TCSL: I.D 21.01.2015 : blinking of button(E)
			
			$(imageDiv_id).attr("src",
					"img/lloydsBusiness/select_business_2.PNG");

			timer_out.push(setTimeout(function() {
				$('#demoScreen img').attr("src",
						"img/lloydsBusiness/business_selected.PNG");
			}, 1500));
			timer_out.push(setTimeout(function() {
				$('#otherArrowBack').show();
				blink($('#otherArrowBack'));
			}, 1700));
		}
    }
    /* Make Payment in light login*/
    
    /*if ((pos_x > 4 && pos_x < 331) && (pos_y > 322 && pos_y < 396)) { // Jan 27: COMMENT: To be used in future release
		if (image == 'img/lloydsBusiness/business_selected.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/homepage_loading.PNG");
			timer_out.push(setTimeout(function() {
				$('#demoScreen img').attr("src",
						"img/lloydsBusiness/Make_Payment/make_payment_1.PNG");
			}, 1500));
		}
    }*/
    /* Make Transfer in light login*/
    
    if ((pos_x > 2.5 && pos_x < 330.5) && (pos_y > 107 && pos_y < 166)) {
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_1.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_2.1.PNG");
		}
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_3.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_2.1.PNG");
		}
		if (image == 'img/lloydsBusiness/Make_Transfer/make_transfer_1.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Transfer/make_transfer_1.1.PNG");
		}
		if (image == 'img/lloydsBusiness/Make_Transfer/make_transfer_2.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Transfer/make_transfer_1.1.PNG");
		}
    }

    if ((pos_x > 1.5 && pos_x < 331.5) && (pos_y > 170 && pos_y < 244)) {
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_1.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_2.2.PNG");
		}
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_3.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_2.2.PNG");
		}

		if (image == 'img/lloydsBusiness/Make_Transfer/make_transfer_1.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Transfer/make_transfer_1.2.PNG");
		}
		if (image == 'img/lloydsBusiness/Make_Transfer/make_transfer_2.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Transfer/make_transfer_1.2.PNG");
		}
    }

    if ((pos_x > 2.5 && pos_x < 331.5) && (pos_y > 183 && pos_y < 244)) {
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_2.2.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_3.PNG");
		}

    }

    if ((pos_x > 12.5 && pos_x < 323.5) && (pos_y > 497 && pos_y < 543)) {
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_3.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_4.PNG");

			timer_out.push(setTimeout(function() {
				$('#demoScreen img').attr("src",
						"img/lloydsBusiness/Make_Payment/make_payment_5.PNG");
			}, 1500));
		}
    }

    if ((pos_x > 162.5 && pos_x < 327.5) && (pos_y > 511 && pos_y < 557)) {
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_5.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_6.PNG");
		}

		if (image == 'img/lloydsBusiness/Make_Transfer/make_transfer_5.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Transfer/make_transfer_6.PNG");
			timer_out.push(setTimeout(
					function() {
						$('#demoScreen img')
								.attr("src",
										"img/lloydsBusiness/Make_Transfer/make_transfer_7.PNG");
					}, 1500));
		}
    }

    if ((pos_x > 247.5 && pos_x < 330.5) && (pos_y > 509 && pos_y < 553)) {
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_6.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_7.PNG");

			timer_out.push(setTimeout(function() {
				$('#demoScreen img').attr("src",
						"img/lloydsBusiness/Make_Payment/make_payment_8.PNG");
			}, 1500));
		}
    }

    if ((pos_x > 17.5 && pos_x < 315.5) && (pos_y > 496 && pos_y < 539)) {
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_8.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_1.PNG");
		}
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_5.2.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_6.PNG");
		}

		if (image == 'img/lloydsBusiness/Make_Transfer/make_transfer_7.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Transfer/make_transfer_1.PNG");
		}

		if (image == 'img/lloydsBusiness/Make_Transfer/make_transfer_3.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Transfer/make_transfer_4.PNG");
			timer_out.push(setTimeout(
					function() {
						$('#demoScreen img')
								.attr("src",
										"img/lloydsBusiness/Make_Transfer/make_transfer_5.PNG");
					}, 1500));
		}
    }

    if ((pos_x > 1.5 && pos_x < 332.5) && (pos_y > 170 && pos_y < 558)) {
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_2.1.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_3.PNG");
		}

		if (image == 'img/lloydsBusiness/Make_Transfer/make_transfer_1.1.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Transfer/make_transfer_1.PNG");
		}

		if (image == 'img/lloydsBusiness/Make_Transfer/make_transfer_1.2.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Transfer/make_transfer_2.PNG");
		}

    }

    if ((pos_x > 171.5 && pos_x < 318.5) && (pos_y > 448 && pos_y < 482)) {
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_1.PNG' || image == 'img/lloydsBusiness/Make_Payment/make_payment_3.PNG') {
		$('#demoScreen img').attr("src",
				"img/lloydsBusiness/Make_Payment/make_payment_5.1.PNG");
		}
    }

    if ((pos_x > 20.5 && pos_x < 317.5) && (pos_y > 170 && pos_y < 361)) {
		if (image == 'img/lloydsBusiness/Make_Payment/make_payment_5.1.PNG' ) {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_5.2.PNG");
		}
    }

    if ((pos_x > 2.5 && pos_x < 167.5) && (pos_y > 63 && pos_y < 102)) {
		$('#demoScreen img').attr("src",
				"img/lloydsBusiness/Make_Transfer/make_transfer_1.PNG");
		
    }

    if ((pos_x > 18.5 && pos_x < 315.5) && (pos_y > 263 && pos_y < 299)) {
		if (image == 'img/lloydsBusiness/Make_Transfer/make_transfer_2.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Transfer/make_transfer_2.1.PNG");
		}
    }

    if ((pos_x > 260.5 && pos_x < 332.5) && (pos_y > 304 && pos_y < 347)) {
		if (image == 'img/lloydsBusiness/Make_Transfer/make_transfer_2.1.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Transfer/make_transfer_3.PNG");
		}
    }

    if ((pos_x > 166.5 && pos_x < 331.5) && (pos_y > 65 && pos_y < 105)) {
		if (image == 'img/lloydsBusiness/Make_Transfer/make_transfer_1.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Make_Payment/make_payment_1.PNG");
		}
		if (image == 'img/lloydsBusiness/business_selected.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Standing_Orders/standing_order_1.PNG");
		}
    }

    if ((pos_x > 1.5 && pos_x < 331.5) && (pos_y > 427 && pos_y < 465)) {
		if (image == 'img/lloydsBusiness/Standing_Orders/standing_order_1.PNG') {
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/Standing_Orders/standing_order_2.PNG");
		}
    }

    if ((pos_x > 8.5 && pos_x < 39.5) && (pos_y > 25 && pos_y < 52)) {
		$('#demoScreen img').attr("src",
				"img/lloydsBusiness/business_selected.PNG");
    }

    if ((pos_x > 8.5 && pos_x < 54.5) && (pos_y > 25 && pos_y < 58)) {
		if (image == 'img/lloydsBusiness/business_selected.PNG') {
			$('#otherArrowBack').hide();
			$('#demoScreen img').attr("src",
					"img/lloydsBusiness/select_business_2.PNG");
			timer_out.push(setTimeout(function() {
				$('#demoScreen img').attr("src",
						"img/lloydsBusiness/select_business.PNG");
			}, 1500));
			timer_out.push(setTimeout(function() {
				$('#adidas').show();
				blink($('#adidas'));
			},1700 ));
		}
    }

}

function changeImageHalifax(pos_x, pos_y) {
    var imageDiv_id = $('#demoScreen img');
    var image = $(imageDiv_id).attr("src");

      //Next Button
    if ((pos_x > 267.5 && pos_x < 328) && (pos_y > 25 && pos_y < 55)) {
            if (image == 'img/halifax/enrollment/2.PNG') {
                    $(imageDiv_id).attr("src", "img/halifax/enrollment/3.PNG");
                    //  TCSL: I.D 21.01.2015 : blinking of button(S)
                    $('#back1').show();
                    blinkNext($('#back1'),$('#temp1'));
                    //  TCSL: I.D 21.01.2015 : blinking of button(E)
            } 
            
            else if (image == 'img/halifax/enrollment/3.PNG') {
                //  TCSL: I.D 21.01.2015 : blinking of button(S)
            	$('#temp1').hide();
                    $(imageDiv_id).attr("src", "img/halifax/enrollment/4.PNG");
                    $('#btn').show();
                    blinkNext($('#btn'),$('#back1'));         //  TCSL: I.D 21.01.2015 : blinking of button(E)
            }
      }
      
      //Previous Button
    if ((pos_x > 5.6 && pos_x < 66.6) && (pos_y > 24 && pos_y < 56)) {
                    if (image == 'img/halifax/enrollment/3.PNG') {
                        //  TCSL: I.D 21.01.2015 : blinking of button(S)
                    	$('#back1').hide();
                        //  TCSL: I.D 21.01.2015 : blinking of button(E)
                            $(imageDiv_id).attr("src", "img/halifax/enrollment/2.PNG");
                    } 
                    
                    else if (image == 'img/halifax/enrollment/4.PNG') {
                        //  TCSL: I.D 21.01.2015 : blinking of button(S)
                    	$('#btn').hide();
                    	//  TCSL: I.D 21.01.2015 : blinking of button(E)
                    	
                            $(imageDiv_id).attr("src", "img/halifax/enrollment/3.PNG");
                            //  TCSL: I.D 21.01.2015 : blinking of button(S)
                            $('#temp1').show();
                            blinkNext($('#temp1'),$('#back1'));
                            //  TCSL: I.D 21.01.2015 : blinking of button(E)
                    } 
      }
      
     
    if ((pos_x > 15 && pos_x < 318.6) && (pos_y > 491 && pos_y < 548)){
            //Get Started Button
            if (image == 'img/halifax/enrollment/4.PNG') {
                //  TCSL: I.D 21.01.2015 : blinking of button(S)
            	$('#back1').hide();
            	$('#btn').hide();
                    //  TCSL: I.D 21.01.2015 : blinking of button(E)
                    $(imageDiv_id).attr("src", "img/halifax/enrollment/5.PNG");
                    
                    timer_out.push(setTimeout(function() {
            $('#demoScreen img').attr("src", "img/halifax/enrollment/7.PNG");
    }, 1500));
                    //  TCSL: I.D 21.01.2015 : blinking of button(S)
                    timer_out.push(setTimeout(function() {
                    	 $('#goBtn').show();
                       blink($('#goBtn'));
                }, 1600));
                    //  TCSL: I.D 21.01.2015 : blinking of button(E)
            }
            
            // Continue Button
            if (image == 'img/halifax/enrollment/15.PNG') {
                    
                    $(imageDiv_id).attr("src", "img/halifax/enrollment/16.PNG");
                    //  TCSL: I.D 21.01.2015 : blinking of button(S)
                    $('#contBtn').hide();
                    $('#saveBtn').show();
                    blink($('#saveBtn'));
                    //  TCSL: I.D 21.01.2015 : blinking of button(E)
            }
            
            // Save Button
            if (image == 'img/halifax/enrollment/16.PNG') {
                //  TCSL: I.D 21.01.2015 : blinking of button(S)
            	$('#saveBtn').hide();
            	//  TCSL: I.D 21.01.2015 : blinking of button(E)
            
                    $(imageDiv_id).attr("src", "img/halifax/enrollment/17.PNG");
                    
                    timer_out.push(setTimeout(function() { 
                        $('#demoScreen img').attr("src", "img/halifax/lightLogin/5.PNG");
                }, 1500));
            }
      }
      
    
    if ((pos_x > 254 && pos_x < 332.5) && (pos_y > 511 && pos_y < 557.5)) { 
        //GO Button
                    if (image == 'img/halifax/enrollment/7.PNG') {
                        //  TCSL: I.D 21.01.2015 : blinking of button(S)
                    	$('#goBtn').hide();
                    	//  TCSL: I.D 21.01.2015 : blinking of button(E)
                    	
                            $(imageDiv_id).attr("src", "img/halifax/enrollment/8.PNG");
                            
                    timer_out.push(setTimeout(function() {
                    $('#demoScreen img').attr("src", "img/halifax/enrollment/10.PNG");
            }, 1500));
                    
                    timer_out.push(setTimeout(function() {
                    	$('#goBtn').show();
                }, 1700));
                    
                    
                    //  TCSL: I.D 21.01.2015 : blinking of button(S)
                   
                    //  TCSL: I.D 21.01.2015 : blinking of button(E)
                    } 
                    
                  //Create MI > GO Button
                    if (image == 'img/halifax/enrollment/10.PNG') {
                        //  TCSL: I.D 21.01.2015 : blinking of button(S)
                    	$('#goBtn').hide();
                        //  TCSL: I.D 21.01.2015 : blinking of button(E)
                        $(imageDiv_id).attr("src", "img/halifax/enrollment/11.PNG");
                        
                        timer_out.push(setTimeout(function() {
                            $('#demoScreen img').attr("src", "img/halifax/enrollment/12.PNG");
                                    }, 1500));
                        timer_out.push(setTimeout(function() {
                        	$('#callBtn1').show();
                            blink($('#callBtn1'));
                                     }, 1700));
                    }
      }

      
    //Call Me Button
    if ((pos_x > 170 && pos_x < 318.5) && (pos_y > 462 && pos_y < 506)) {
            if (image == 'img/halifax/enrollment/12.PNG') {
                //  TCSL: I.D 21.01.2015 : blinking of button(S)
            	$('#callBtn1').hide();
                          //  TCSL: I.D 21.01.2015 : blinking of button(E)
            	
                    $(imageDiv_id).attr("src", "img/halifax/enrollment/13.PNG");
                    
                    timer_out.push(setTimeout(function() {
            $('#demoScreen img').attr("src", "img/halifax/enrollment/14.PNG");
    }, 1500));
                    timer_out.push(setTimeout(function() {
            $('#demoScreen img').attr("src", "img/halifax/enrollment/15.PNG");
    }, 3000));
                    //  TCSL: I.D 21.01.2015 : blinking of button(S)
                    timer_out.push(setTimeout(function() {
                        //$('#contBtn').css('display','block');
                    	$('#contBtn').show();
                        blink($('#contBtn'));
                }, 3200));
                    //  TCSL: I.D 21.01.2015 : blinking of button(E)
            } 
      }
}

//Halifax Other Journeys
function changeImageOtherHalifax(pos_x, pos_y) {
            var imageDiv_id = $('#demoScreen img');
            var image = $(imageDiv_id).attr("src");

              //Transfers and Payments Button
              /*if ((pos_x > 170.5 && pos_x < 328.5) && (pos_y > 247 && pos_y < 344)) {  // 27 Jan: Commented: will be used in future releases
                    if (image == 'img/halifax/lightLogin/5.PNG') {
                            $(imageDiv_id).attr("src", "img/halifax/payToNew/2.PNG");
                            
                            timer_out.push(setTimeout(function() {
                                    $('#demoScreen img').attr("src", "img/halifax/payToNew/3.PNG");
                            }, 1500));
                    }
              }*/
              
              //No Thanks button
              if ((pos_x > 4.5 && pos_x < 168.5) && (pos_y > 496 && pos_y < 557)) {
            if (image == 'img/halifax/payToNew/3.PNG') {
                    $(imageDiv_id).attr("src", "img/halifax/payToNew/4.PNG");
            }
              }
              
            
              if ((pos_x > 0.5 && pos_x < 333.5) && (pos_y > 106 && pos_y < 179)) {
                    //Reward Select Account Ribbon
            if (image == 'img/halifax/payToNew/4.PNG') {
                    $(imageDiv_id).attr("src", "img/halifax/payToNew/5.PNG");
            } 
              }
              
            //Select Account Ribbon
              if ((pos_x > 1.5 && pos_x < 333.5) && (pos_y > 184 && pos_y < 246)) {
            if (image == 'img/halifax/payToNew/5.PNG') {
                    $(imageDiv_id).attr("src", "img/halifax/payToNew/6.PNG");
            }
            
              }

              if ((pos_x > 0.5 && pos_x < 333.5) && (pos_y > 182 && pos_y < 261)) {
                            //Please Select Ribbon
                    if (image == 'img/halifax/payToNew/6.PNG') {
                            $(imageDiv_id).attr("src", "img/halifax/payToNew/7.PNG");
                    } 
                      }
              
              if ((pos_x > 0.5 && pos_x < 333.5) && (pos_y > 178 && pos_y < 247)) {
                            //Add a new recipient Ribbon
                      if (image == 'img/halifax/payToNew/7.PNG') {
                  $(imageDiv_id).attr("src", "img/halifax/payToNew/8.PNG");
                  
         } 
                      }
              
              //Security check Dialog Box > OK Button 
              if ((pos_x > 25.5 && pos_x < 306.5) && (pos_y > 324 && pos_y < 371)) {
                  //Add a new recipient Ribbon
            if (image == 'img/halifax/payToNew/8.PNG') {
        $(imageDiv_id).attr("src", "img/halifax/payToNew/9.PNG");
        
        timer_out.push(setTimeout(function() { 
                $('#demoScreen img').attr("src", "img/halifax/payToNew/10.PNG");
        }, 1500));
} 
            }
              
              if ((pos_x > 165.5 && pos_x < 325.5) && (pos_y > 504 && pos_y < 553)) {
                            //Next Button
                    if (image == 'img/halifax/payToNew/10.PNG') {
                            $(imageDiv_id).attr("src", "img/halifax/payToNew/13.PNG");
                            
                            timer_out.push(setTimeout(function() {
                                      $('#demoScreen img').attr("src", "img/halifax/payToNew/15.PNG");
                              }, 1500));
                    } 
                    
                  //Next Button
                    else if (image == 'img/halifax/payToNew/15.PNG') {
                            $(imageDiv_id).attr("src", "img/halifax/payToNew/16.PNG");
                            
                            timer_out.push(setTimeout(function() {
                                      $('#demoScreen img').attr("src", "img/halifax/payToNew/17.PNG");
                              }, 1500));
                    }
                    
                  //Pay Button
                    else if (image == 'img/halifax/payToNew/23.PNG') {
                            $(imageDiv_id).attr("src", "img/halifax/payToNew/24.PNG");
                    }
                      }
              
              //Call me now Button
              if ((pos_x > 167.5 && pos_x < 331.5) && (pos_y > 380 && pos_y < 431)) {
                    if (image == 'img/halifax/payToNew/17.PNG') {
                            $(imageDiv_id).attr("src", "img/halifax/payToNew/18.PNG");
                            
                            timer_out.push(setTimeout(function() {
                                      $('#demoScreen img').attr("src", "img/halifax/payToNew/19.0.PNG");
                              }, 1500));
                            
                            timer_out.push(setTimeout(function() {
                                      $('#demoScreen img').attr("src", "img/halifax/payToNew/21.PNG");
                              }, 3000));
                    } 
                      }
              
              if ((pos_x > 1.5 && pos_x < 332.5) && (pos_y > 183 && pos_y < 257)) {
                  //click on British gas Ribbon
          if (image == 'img/halifax/payToNew/21.PNG') {
                  $(imageDiv_id).attr("src", "img/halifax/payToNew/20.PNG");
          }
              }
              
            
          //Review Payment Button
          if ((pos_x > 1.5 && pos_x < 322.5) && (pos_y > 511 && pos_y < 557)) {
            if (image == 'img/halifax/payToNew/21.PNG') {
                $(imageDiv_id).attr("src", "img/halifax/payToNew/22.PNG");
                
                timer_out.push(setTimeout(function() {
                          $('#demoScreen img').attr("src", "img/halifax/payToNew/23.PNG");
                  }, 1500));
        }
              }
              
            //Select Existing recipient i.e British Gas
              if ((pos_x > 1.5 && pos_x < 322.5) && (pos_y > 309 && pos_y < 372)) {
            if (image == 'img/halifax/payToNew/20.PNG') {
                    $(imageDiv_id).attr("src", "img/halifax/payToNew/21.PNG");
            }
              }
              
}