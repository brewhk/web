Router.route('/', {
  name: 'home',
  template: 'home',
  layoutTemplate: 'mainLayout',
  action: function () {
    this.render();
  }
});

Router.route('/contact-us/', {
  name: 'contact-us',
  template: 'contactUs',
  layoutTemplate: 'mainLayout',
  action: function () {
    this.render();
  }
});

Router.route('/process/', {
  name: 'process',
  template: 'process',
  layoutTemplate: 'mainLayout',
  action: function () {
    this.render();
  }
});

Router.route('/services/', {
  name: 'services',
  template: 'services',
  layoutTemplate: 'mainLayout',
  action: function () {
    this.render();
  }
});

Router.route('/solutions/', {
  name: 'solutions',
  template: 'solutions',
  layoutTemplate: 'mainLayout',
  action: function () {
    this.render();
  }
});