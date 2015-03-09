
import Ember from 'ember';
import DS from 'ember-data';

var Food = DS.Model.extend({
  //id: DS.attr('number'),
  name: DS.attr('string'),
  price: DS.attr('number'),
  
  options: DS.hasMany('options'),
  //selectedOption,

  size: DS.attr('string'),

/*

  isLarge: DS.attr('boolean'),
  isGrande: DS.attr('boolean'),
  isVenti: DS.attr('boolean'),
  fullPrice: function() {
    if(this.get('size') == 1) {
      return this.get('price');
    } else if(this.get('size') == 2) {
      return this.get('price') + 1;
    } else {
      return this.get('price') + 2;
    }
  }.property('price', 'size')
  */
});


Food.reopenClass({
  FIXTURES: [
  /*
  {
    id: 1,
    price: 3.25,
    label: 'Small'，
    isSelected
  }
];

Menu.Food.FIXTURES = [
*/
{
  id: 1,
  name: 'Espresso',
  options: [1,2,3]
},
{
  id: 2,
  name: 'Double Espresso',
  price: 3.26,
},
{
  id: 3,
  name: 'Mocha',
  price: 3.26,
},
{
  id: 4,
  name: 'Caffè Latte',
  price: 3.26,
},
{
  id: 5,
  name: 'Cappuccino',
  price: 3.26,
},
{
  id: 6,
  name: 'Caffè Americano',
  price: 3.26,
},
{
  id: 7,
  name: 'Frappuccino',
  price: 3.26,
},
{
  id: 8,
  name: 'Iced Coffee',
  price: 3.26,
}
]});

export default Food;