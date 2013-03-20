$(document).ready(function() {

	$(".thumb").on("click", function(){

		var currentId = $(this).attr('id');
		
		$(".thumbnails").addClass('animated fadeOut').delay(501).queue(function(next){
			$(".thumbnails").addClass('offscreen');
			$(".thumbnails").removeClass('animated fadeOut');
			$(".project #" + currentId).removeClass('offscreen');
			$(".project #" + currentId).addClass('animated fadeIn');
			$("#btn-exit").removeClass('offscreen');
			next();
		});
		

		$("#btn-exit").on("click", function(){

			$(".project #" + currentId).addClass('animated fadeOut').delay(501).queue(function(next){
				$(".project .twelvecol").addClass('offscreen');
				$(".project .twelvecol").removeClass('animated fadeOut');
				$("#btn-exit").addClass('offscreen');
				$(".thumbnails").removeClass('offscreen');
				$(".thumbnails").addClass('animated fadeIn').delay(500).queue(function(next){
					$(".thumbnails").removeClass('animated fadeIn');
					next();
				});
				next();
			});

			//$(".thumbnails").removeClass('animated fadeInLeft');
			

		});
	
	});
	
});