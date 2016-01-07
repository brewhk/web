Router.onBeforeAction(function () {
  $('.main-layout__container').scrollTop(0);
  this.next();
});