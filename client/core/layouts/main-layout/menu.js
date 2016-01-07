Template.mainLayout.events({
	'click .main-layout__responsive-menu-toggle, click .responsive-menu__link': function (e) {
		$('.main-layout__responsive-menu-toggle, .main-layout__container, .main-layout__responsive-menu').toggleClass('open');
	}
});