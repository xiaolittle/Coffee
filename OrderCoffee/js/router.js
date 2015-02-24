Menu.Router.map(function() {
  this.resource('menu', { path: '/' });
});

Menu.MenuRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('food');
  }
});