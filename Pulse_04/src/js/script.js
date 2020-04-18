const slider = tns({
	container: '.carousel__inner',
	slideBy: 'page',
	controls: false,
	mouseDrag: true,
	navPosition: "bottom",
	nav: false,
	responsive: {
		1095: {
			nav: false
		},
		320: {
			nav: true
		}
	}
});

document.querySelector('.prev').addEventListener('click', function(event) {
	event.preventDefault();
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function(event) {
	event.preventDefault();	
	slider.goTo('next');
});