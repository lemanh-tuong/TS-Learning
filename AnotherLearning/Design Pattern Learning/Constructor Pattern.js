/** 
	- In classical object-oriented programming languages,
	a constructor is a special method used to initialize a newly created object
	once memory has been allocated for it. In JavaScript, 
	as almost everything is an object, we're most often interested in object constructors.
	
	- Inside a constructor, the keyword this references the new object that's being created.
	Revisiting object creation, a basic constructor may look as follows:
*/

function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
}
 
 
// Note here that we are using Object.prototype.newMethod rather than
// Object.prototype so as to avoid redefining the prototype object
Car.prototype.toString = function () {
  return this.model + " has done " + this.miles + " miles";
};
 
// Usage:
 
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
console.log( civic.toString() );
console.log( mondeo.toString() );

/** 
	Giống như việc định hình type trước cho 1 object trong TypeScript
	=> Tạo ra 1 đối tượng theo dataType đã khai báo sẵn
*/