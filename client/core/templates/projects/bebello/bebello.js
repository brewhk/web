Template.bebello.onRendered(function () {
	$('.bebello-screenshots-slider').owlCarousel({
		pagination: false,
		navigation : true,
		navigationText : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		autoPlay: true,
		stopOnHover: true,
		autoHeight: true
	});

	$('.bebello-screens-slider').owlCarousel({
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
});