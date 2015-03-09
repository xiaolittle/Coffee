Menu.Food = DS.Model.extend({
  id: DS.attr('number'),
  name: DS.attr('string'),
  price: DS.attr('number'),
  size: DS.attr('string'),
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
});


Menu.Food.FIXTURES = [
{
  id: 1,
  name: 'Espresso',
  price: 3.26,
  isLarge: false,
  isGrande: false,
  isVenti: false
},
{
  id: 2,
  name: 'Double Espresso',
  price: 3.26,
  isLarge: false,
  isGrande: false,
  isVenti: false
},
{
  id: 3,
  name: 'Mocha',
  price: 3.26,
  isLarge: false,
  isGrande: false,
  isVenti: false
},
{
  id: 4,
  name: 'Caffè Latte',
  price: 3.26,
  isLarge: false,
  isGrande: false,
  isVenti: false
},
{
  id: 5,
  name: 'Cappuccino',
  price: 3.26,
  isLarge: false,
  isGrande: false,
  isVenti: false
},
{
  id: 6,
  name: 'Caffè Americano',
  price: 3.26,
  isLarge: false,
  isGrande: false,
  isVenti: false
},
{
  id: 7,
  name: 'Frappuccino',
  price: 3.26,
  isLarge: false,
  isGrande: false,
  isVenti: false
},
{
  id: 8,
  name: 'Iced Coffee',
  price: 3.26,
  isLarge: false,
  isGrande: false,
  isVenti: false
}
];