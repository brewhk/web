Router.route('/projects/', {
  name: 'projects',
  template: 'projects',
  layoutTemplate: 'mainLayout',
  action: function () {
    this.render();
  }
});

Router.route('/projects/skeduo/', {
  name: 'projects-skeduo',
  template: 'skeduo',
  layoutTemplate: 'mainLayout',
  action: function () {
    this.render();
  }
});

Router.route('/projects/takeoff/', {
  name: 'projects-takeoff',
  template: 'takeoff',
  layoutTemplate: 'mainLayout',
  action: function () {
    this.render();
  }
});

Router.route('/projects/bebello/', {
  name: 'projects-bebello',
  template: 'bebello',
  layoutTemplate: 'mainLayout',
  action: function () {
    this.render();
  }
});

Router.route('/projects/techni-photo/', {
  name: 'projects-techni',
  template: 'techni',
  layoutTemplate: 'mainLayout',
  action: function () {
    this.render();
  }
});