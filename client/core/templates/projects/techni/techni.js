Template.techni.onRendered(function () {
	$('.techni-screenshots-slider').owlCarousel({
		pagination: false,
		navigation : true,
		navigationText : false,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true,
		autoPlay: true,
		stopOnHover: true
	});

	analytics.page();
});