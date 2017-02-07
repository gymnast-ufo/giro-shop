$(function(){
	$(function(){
		$('.model').click(function(){
			$('.model').removeClass('active');
			$(this).toggleClass("active");
			$('#cost').html(" " + $(this).attr('value') + " руб.");
			$('.order_model').text($(this).children('.model_name').text());
			$('.order_price_value').html($(this).attr('value') + " руб.");
		});
		$('.modelC').click(function(){
			$('.modelC').removeClass('active');
			$(this).toggleClass("active");
			$('.order_color').css( 'background-color', $(this).css("background-color"));
		});
		$('.modelS').click(function(){
			$('.modelS').removeClass('active');
			$(this).toggleClass("active");
			$('.order_wheel_value').html($(this).text());
		});
	});
});
jQuery(function($){
   $("#phone").mask("+7 (999) 999-99-99");
   $("#phone2").mask("+7 (999) 999-99-99");
});
$(document).ready(function() {
	$(".fancybox").fancybox();
});
$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});
