// Decorator maybe similar to withSomething (withCost, withStyle, with...)

// The constructor to decorate
/* ### Version 1*/
function MacBook() {
  this.cost = function () { return 997; };
  this.screenSize = function () { return 11.6; };
}

// Decorator 1
function memory( macbook ) {
  var v = macbook.cost();
  macbook.cost = function() {
    return v + 75;
  };
}

// Decorator 2
function engraving( macbook ){
  var v = macbook.cost();
  macbook.cost = function(){
    return v + 200;
  };
}

// Decorator 3
function insurance( macbook ){
  var v = macbook.cost();
  macbook.cost = function(){
     return v + 250;
  };
}

var mb = new MacBook();
memory( mb );
engraving( mb );
insurance( mb );

// Outputs: 1522
console.log( mb.cost() );

// Outputs: 11.6
console.log( mb.screenSize() );

// Nó khá giống với storybook hay 1 cái plugins (tại vì cần cái j thì import vào và gọi nó với tham số là 1 instance)

/** Version 2 */
var reminder = new Interface( "List", ["summary", "placeOrder"] );
 
var properties = {
  name: "Remember to buy the milk",
  date: "05/06/2016",
  actions:{
    summary: function (){
      return "Remember to buy the milk, we are almost out!";
   },
    placeOrder: function (){
      return "Ordering milk from your local grocery store";
    }
  }
};
 
// Now create a constructor implementing the above properties
// and methods
 
function Todo( config ){
 
  // State the methods we expect to be supported
  // as well as the Interface instance being checked
  // against
 
  Interface.ensureImplements( config.actions, reminder );
 
  this.name = config.name;
  this.methods = config.actions;
 
}
 
// Create a new instance of our Todo constructor
 
var todoItem = new Todo( properties );
 
// Finally test to make sure these function correctly
 
console.log( todoItem.methods.summary() );
console.log( todoItem.methods.placeOrder() );
 
// Outputs:
// Remember to buy the milk, we are almost out!
// Ordering milk from your local grocery store
