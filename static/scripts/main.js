 

	//Sidebar Rotator	
	$(document).ready(function(){
		$("#rotator").click(function(){
		$(".front").toggleClass('flippedf');
		$(".back").toggleClass('flippedb');
	});

		//setting up cover pic position.
	$(".cover_pic").scrollTop(150);

});



// character count for editing bio
maxCharacters = 160;

$('#count').text(maxCharacters);

$('.edit_bio').bind('input', function() {
		var count = $('#count');
		var save = $('.save');
		var characters = $(this).val().length;
		
		if (characters > maxCharacters) {
				count.addClass('over');
				save.prop("disabled", true);

		} else {
				count.removeClass('over');
				save.prop("disabled", false);
		}
		
		count.text(maxCharacters - characters);
});


//hide the relationship partner search form
	$('.rel_part').hide(); 

//Relationship partner box
	$(document).ready(function(){
		$('.rel_status').change(function(){
				var wth = $('#with');
				var to = $('#to');
				var from = $('#from');
				if ($('.rel_status').val() == '0'){
						$('.rel_part').hide(); 
						wth.removeClass('dis_inl');
						to.removeClass('dis_inl');
						from.removeClass('dis_inl');
				} else if ($('.rel_status').val() == '11'){
						$('.rel_part').hide(); 
						wth.removeClass('dis_inl');
						to.removeClass('dis_inl');
						from.removeClass('dis_inl');
				} else if ($('.rel_status').val() == '2'){
						$('.rel_part').show(); 
						wth.addClass('dis_inl');
						to.removeClass('dis_inl');
						from.removeClass('dis_inl');
				} else if ($('.rel_status').val() == '3'){
						$('.rel_part').show(); 
						wth.removeClass('dis_inl');
						to.addClass('dis_inl');
						from.removeClass('dis_inl');
				} else if ($('.rel_status').val() == '4'){
						$('.rel_part').show(); 
						wth.removeClass('dis_inl');
						to.addClass('dis_inl');
						from.removeClass('dis_inl');
				} else if ($('.rel_status').val() == '5'){
						$('.rel_part').show(); 
						wth.addClass('dis_inl');
						to.removeClass('dis_inl');
						from.removeClass('dis_inl');
				} else if ($('.rel_status').val() == '6'){
						$('.rel_part').show(); 
						wth.addClass('dis_inl');
						to.removeClass('dis_inl');
						from.removeClass('dis_inl');
				} else if ($('.rel_status').val() == '7'){
						$('.rel_part').show(); 
						wth.addClass('dis_inl');
						to.removeClass('dis_inl');
						from.removeClass('dis_inl');
				} else if ($('.rel_status').val() == '8'){
						$('.rel_part').show(); 
						wth.addClass('dis_inl');
						to.removeClass('dis_inl');
						from.removeClass('dis_inl');
				} else if ($('.rel_status').val() == '10'){
						$('.rel_part').hide(); 
						wth.removeClass('dis_inl');
						to.removeClass('dis_inl');
						from.removeClass('dis_inl');
				} else {
						$('.rel_part').show(); 
						wth.removeClass('dis_inl');
						to.removeClass('dis_inl');
						from.addClass('dis_inl');
				} 
		});


	});



	//slide down and transform chevron 180deg for ***HAVE WORKED AT***

	$(document).ready(function(){
		$("#chev_b_1").click(function(){
				$("#s_down1").slideToggle("fast");
				$("#chev1").toggleClass('chev_180');
		});
});


$(document).ready(function(){
		$("#chev_b_2").click(function(){
				$("#s_down2").slideToggle("fast");
				$("#chev2").toggleClass('chev_180');
		});
});


$(document).ready(function(){
		$("#chev_b_3").click(function(){
				$("#s_down3").slideToggle("fast");
				$("#chev3").toggleClass('chev_180');
		});
});


$(document).ready(function(){
		$("#chev_b_4").click(function(){
				$("#s_down4").slideToggle("fast");
				$("#chev4").toggleClass('chev_180');
		});
});


// Disable education "to" year when "from" year is not selected

	$('.to_1').prop("disabled", true);
$(document).ready(function(){
	$('.from_1').change(function(){
		if ($('.from_1').val() == '0'){
			$('.to_1').prop("disabled", true);
		} else {
			$('.to_1').prop("disabled", false);
		}
	});
});


// Disable work "to" year when "from" year is not selecd
$('.to_2').prop("disabled", true);
$(document).ready(function(){
	$('.from_2').change(function(){
		if ($('.from_2').val() == '0'){
			$('.to_2').prop("disabled", true);
		} else {
			$('.to_2').prop("disabled", false);
		}
	});
});


// if workplace checkbox is checked hide "to" year and show "present"
$('#present_work').removeClass('d_inline');
$(document).ready(function(){
	$('.work_check').change(function(){
	if ($('.work_check').is(':checked')) {
		$('.to_2').addClass('d_none');
		$('#present_work').addClass('d_inline');
	} else {
		$('.to_2').removeClass('d_none');
		$('#present_work').removeClass('d_inline');
	}

	});
});




//PRIVACY DROPDOWN 


	$('.pvt_btn').off('click').on('click', function(){

		var dropdown = $(this).siblings('div');
		var pri_down = $('.pri_down');

		pri_down.not(dropdown).hide();		// hide all other privacy dropdown

		window.container = $(this).parents('.indicator');	//Global variable for hiding privacy dropdown 

		dropdown.toggle();	//Toggle the pivacy dropdown

		var n = 0;
		dropdown.children('ul').children('li').off('click').on('click', function(){

			var cls = $(this).attr('class');

			var icon = $(this).siblings('li').children('.icon');
			var privacy = $(this).parents('div').siblings('.pvt_btn').children('.privacy');
			var sprite_1 = $(this).parents('div').siblings('.pvt_btn').children('.sprite_1');
			var pvt_btn = $(this).parents('div').siblings('.pvt_btn');

			function pub() {
				icon.removeClass('checked');
				privacy.removeClass('on');
				sprite_1.removeClass('hide fork lock').addClass('globe');	
			}

			function con() {
				icon.removeClass('checked');
				privacy.removeClass('on');
				sprite_1.removeClass('hide globe lock').addClass('fork');	
			}

			function me() {
				icon.removeClass('checked');
				privacy.removeClass('on');
				sprite_1.removeClass('hide fork globe').addClass('lock');	
			}



			if ($(this).hasClass('public')) {
				pri_down.hide();
				pub();
			}

			else if ($(this).hasClass('connection')) {
				pri_down.hide();
				con();
			}

			else if ($(this).hasClass('private')) {
				pri_down.hide();
				me();
			}

			else {
				$(this).children('.icon').toggleClass('checked');
				pvt_btn.children('.'+cls).toggleClass('on');
				pvt_btn.children('.sprite_1').addClass('hide');


				if (pvt_btn.children('.'+cls).hasClass('on')) {
					n++;
				}	
				else if (!pvt_btn.children('.'+cls).hasClass('on')) {
						n--;
				}

				if (n==6) {
					con();
					$(this).children('.icon').removeClass('checked'); 
					n=0;
				}
				else if (n<1) {
					me();
					$(this).children('.icon').removeClass('checked'); 
					n=0;
				}


			}



		});
	});




//close privacy dropdown
$(document).click(function(e) {

		// if the target of the click isn't the descendant of the container
		if (container.has(e.target).length === 0 ) 
		{
				container.children(".pri_down").hide();
		}
});

