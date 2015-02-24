Menu.Food = DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('number'),
  isLarge: DS.attr('boolean'),
  isGrande: DS.attr('boolean'),
  isVenti: DS.attr('boolean')
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