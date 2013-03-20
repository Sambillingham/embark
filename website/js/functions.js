$(document).ready(function() {

	$(".thumb").on("click", function(){
		
		$(".thumbnails").removeClass('animated fadeIn');
		$(".thumbnails").addClass('offscreen');
		var currentId = $(this).attr('id');
		$(".project #" + currentId).removeClass('offscreen');
		$(".project #" + currentId).addClass('animated fadeIn');
		$("#btn-exit").removeClass('offscreen');

		$("#btn-exit").on("click", function(){
			$("#btn-exit").addClass('offscreen');
			$(".project #" + currentId).addClass('offscreen');
			$(".project #" + currentId).removeClass('animated fadeIn');
			$(".thumbnails").removeClass('offscreen');
			$(".thumbnails").addClass('animated fadeIn');
		});
	
	});
	
});