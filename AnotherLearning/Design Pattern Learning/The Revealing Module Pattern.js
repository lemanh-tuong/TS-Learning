var myRevealingModule = (function () {
 
  var privateVar = "Ben Cherry",
      publicVar = "Hey there!";

  function privateFunction() {
      console.log( "Name:" + privateVar );
  }

  function publicSetName( strName ) {
      privateVar = strName;
  }

  function publicGetName() {
      privateFunction();
  }


  // Reveal public pointers to
  // private functions and properties

  return {
      setName: publicSetName,
      greeting: publicVar,
      getName: publicGetName
  };

})();
 
myRevealingModule.setName( "Paul Kinlan" );
/** 
  Disadvantages:
    A disadvantage of this pattern is that if a private function refers to a public function, that public function can't be overridden if a patch is necessary. This is because the private function will continue to refer to the private implementation and the pattern doesn't apply to public members, only to functions.
    Public object members which refer to private variables are also subject to the no-patch rule notes above.
*/

/** 
  Giống The Module Pattẻn nhưng đặt lại tên các public method khi return
*/

