// add shopping cart to app, then add methods to shopping cart
app.shoppingCart = {
  initialize: function(){
    console.log("Initializing shoppingCart ");
    // start with no items
    this.items = [];
  },

  addItem: function(name, price){
    this.items.push({ name: name, price: price });
  },

  render: function(){
    // display the items on the page
    // by appending all items to the ul element (whose "id" is "items")
    var itemsContainer = document.getElementById('items');

    this.items.forEach(function(item){
      var itemLi = document.createElement('li');
      var itemText = document.createTextNode("Name: " + item.name + " | Price: " + item.price);
      itemLi.appendChild(itemText); // e.g. <li>Name: Book | Price: 5.34</li>

      itemsContainer.appendChild(itemLi);
    });
  }
};
