import Ember from 'ember';
//import Food from 'EmberCoffee/models/coffeemodel';
//import DataManager from 'weather-2/datamanager';

var IndexRoute = Ember.Route.extend({
	init: function() {
    //this._super();
    //this.set('dataManager', DataManager);
  },
/*
  model: function(params) {
  	return this.store.find('food');
  },
*/
    setupController: function(controller, model){
    	//$('body').removeClass().addClass('show-cities-list');
    	//var dataManager = this.get('dataManager');
    	//var test = model.get('name');

    //$('body').removeClass('is-cloudy').removeClass('is-night').removeClass('is-day').addClass(dataManager.conditionClassname(weatherData));
    //$('nav').removeClass('is-cloudy').removeClass('is-night').removeClass('is-day').addClass(dataManager.conditionClassname(weatherData));
 //   	controller.set('model', model);
    	//controller.set('content', model.get('content'));
    	//controller.propertyDidChange('content');
	}

});


export default IndexRoute;