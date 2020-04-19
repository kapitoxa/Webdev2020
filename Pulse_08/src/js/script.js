$(document).ready(function() {
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

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active')
				.eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(className) {
		$(className).each(function(index) {
			$(this).on('click', function(event) {
				event.preventDefault();
				$('.catalog-item__content').eq(index).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(index).toggleClass('catalog-item__list_active')
			});
		});
	}

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	/* Modal */
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.button_mini').each(function(index) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(index).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

	/* Validate */
	function validateForm(form) {
		$(form).validate({
			rules: {
				name: "required",
				phone: "required",
				enail: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Пожалуйста, введите свое имя",
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введен адрес почты"
				}
			}
		});
	}

	validateForm('#consultation-form');
	validateForm('#consultation form');
	validateForm('#order form');

	$('input[name=phone]').mask('+7 (999) 999-99-99');

	$('form').submit(function(event) {
		event.preventDefault();
		$.ajax({
			type: 'POST',
			url: 'mailer/smart.php',
			data: $(this).serialize()
		}).done(function() {
			$(this).find('input').val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
			$("form").trigger();
		});
		return false;
	});
});