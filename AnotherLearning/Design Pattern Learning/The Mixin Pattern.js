var Mixin = function () {};
Mixin.prototype = {

    driveForward: function () {
        console.log( "drive forward" );
    },

    driveBackward: function () {
        console.log( "drive backward" );
    },

    driveSideways: function () {
        console.log( "drive sideways" );
    }

};

_extends( Car, Mixin, "driveForward", "driveBackward" );

var myCar = new Car({
    model: "Ford Escort",
    color: "blue"
});

myCar.driveForward(); // => drive forward
myCar.driveBackward(); // => drive backward


// Advantages: Reuse
// Disadvantages: That said, the downsides to Mixins are a little more debatable. 
// Some developers feel that injecting functionality into an object prototype is a bad idea as it leads to both prototype pollution and a level of uncertainty regarding the origin of our functions.
// In large systems this may well be the case.	

// Mixin Pattern như 1 cái module chứa các function có sẵn và chỉ việc kế thừa để sử dụng => tăng tính tái sử dụng 
// Nó như mixin trong scss
// Tạo ra 1 đống r dùng cái nào thì extends (giống @extends chứ k phải @include) cái đấy