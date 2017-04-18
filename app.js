(function() {
  var app = angular.module('gemStore', ['store-products']);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function (setTab)
    {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab)
    {
      return this.tab === checkTab;
    };
  });

 app.controller("reviewController", function(){
   this.review = {};
   this.addReview = function(product){
     product.reviews.push (this.review);
     this.review = {};
   };
 });


  var gems = [
    { name: 'Azurite', price: 2.95 ,
     images : [{full: 'gem.png'}] ,
     description : '...',
     reviews : [{ stars: 5, body:'I love this gem', author:'sb@st.ghg.com' }, {stars:2, body: 'it sucks', author: 'me@man.kjk.com'}]
   },
    { name: 'Bloodstone',
     price: 5.95 ,
     images:[
      {full: 'gem.png'}
    ] ,
    description : '...',
    reviews : [{ stars: 4, body:'I love this shit', author:'sb@st.ghg.com' }, {stars:1, body: 'its sucks', author: 'me@man.kjk.com'}]
  },
    { name: 'Zircon', price: 3.95 , images:[
      {full: 'gem.png'}
    ] , description : '...'}
  ];
})();
