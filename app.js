(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    { name: 'Azurite', price: 2.95 , images : [
      {full: 'gem.png'}
    ] , description : '...'},
    { name: 'Bloodstone', price: 5.95 , images:[
      {full: 'gem.png'}
    ] , description : '...'},
    { name: 'Zircon', price: 3.95 , images:[
      {full: 'gem.png'}
    ] , description : '...'}
  ];
})();
