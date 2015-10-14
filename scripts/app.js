"use strict"

var app = {};

app.initialize = function(){
  console.log("Starting app...");
  app.shoppingCart.initialize();
  app.shoppingCart.addItem("EloquentJavascript", 28.88, 2);
  app.shoppingCart.addItem("Javascript, The Good Parts", 19.99);
  app.shoppingCart.addItem("Trampoline", 350.54);
  app.shoppingCart.render();
}

// ensure DOM is loaded
document.addEventListener("DOMContentLoaded", function(event) {app.initialize();});
