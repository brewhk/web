Template.takeoff.onRendered(function () {
	$('.takeoff-screenshots-slider').owlCarousel({
		pagination: false,
		navigation : true,
		navigationText : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		autoPlay: true,
		stopOnHover: true
	});

	$('.takeoff-screens-slider').owlCarousel({
		pagination: false,
		navigation : true,
		navigationText : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay: true,
		stopOnHover: true,
		items : 3,
		itemsCustom: [[0,1], [768, 2], [1200,3], []]
	});

	analytics.page();
});