	

	$(document).ready(function() {

		$('.welcome-text').textillate({
			in: {effect:'flip', delay:200}			
		});
			setTimeout(function(){
				$('.sub-text').show();
				$('.sub-text').textillate();
			},3000);

			setTimeout(function(){
				$('.btn').animate({'opacity':1}, 2000);	
			},6000);
	});

		$( ".btn" ).click(function() {

			$('.welcome-text').animate({ 'opacity': '0' }, 1000, function () {
				 $('.welcome-text').remove()
			});

			$('.sub-text').animate({'opacity': '0' }, 1000, function () { 
				$('.sub-text').remove();
			});

			$('.btn').animate({ 'opacity': '0' }, 500, function () {
				 $('.btn').remove();
			});
			$('.overlay').animate({ 'opacity': '0' }, 1000, function () { 
				$('.overlay').remove();
			});
			$('.bg-img').animate({ 'opacity': '0' }, 2000, function () {
				$('.bg-img').remove(); 
				$('.bg-img2').animate({ 'opacity': '1' }, 2000);
			});
					
				setTimeout(function(){
					$('.box').animate({ 'opacity': '1' }, 1000);
    				$('.box').animate({'margin-top': '100px'}, 1000);
    				$('.cn-button').animate({'margin-top': '-170px'}, 2000);	
    			},3000);

		});

		$( ".left" ).click(function() {
			$('.left-side').animate({ 'margin-left': '0' }, 2000);
		});

		$( ".right" ).click(function() {
			$('.right-side').animate({ 'margin-right': '0' }, 2000); 
		});

		$('.btn-left').click(function() {
			$('.left-side').animate({ 'margin-left': '-510px' }, 2000);
		});

		$('.btn-right').click(function() {
			$('.right-side').animate({ 'margin-right': '-510px' }, 2000);
		});