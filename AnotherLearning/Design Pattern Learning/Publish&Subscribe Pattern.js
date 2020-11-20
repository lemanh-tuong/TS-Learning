/**
	Whilst the Observer pattern is useful to be aware of, quite often in the JavaScript world, we'll find it commonly implemented using a variation known as the Publish/Subscribe pattern. 
	Whilst very similar, there are differences between these patterns worth noting.

	The Observer pattern requires that the observer (or object) wishing to receive topic notifications must subscribe this interest to the object firing the event (the subject).

	The Publish/Subscribe pattern however uses a topic/event channel which sits between the objects wishing to receive notifications (subscribers) and the object firing the event (the publisher). 
	This event system allows code to define application specific events which can pass custom arguments containing values needed by the subscriber. The idea here is to avoid dependencies between the subscriber and publisher.
*/

// A very simple new mail handler
 
// A count of the number of messages received
var mailCounter = 0;
 
// Initialize subscribers that will listen out for a topic
// with the name "inbox/newMessage".
 
// Render a preview of new messages
var subscriber1 = subscribe( "inbox/newMessage", function( topic, data ) {
 
  // Log the topic for debugging purposes
  console.log( "A new message was received: ", topic );
 
  // Use the data that was passed from our subject
  // to display a message preview to the user
  $( ".messageSender" ).html( data.sender );
  $( ".messagePreview" ).html( data.body );
 
});
 
// Here's another subscriber using the same data to perform
// a different task.
 
// Update the counter displaying the number of new
// messages received via the publisher
 
var subscriber2 = subscribe( "inbox/newMessage", function( topic, data ) {
 
  $('.newMessageCounter').html( ++mailCounter );
 
});
 
publish( "inbox/newMessage", [{
  sender: "hello@google.com",
  body: "Hey there! How are you doing today?"
}]);
 
// We could then at a later point unsubscribe our subscribers
// from receiving any new topic notifications as follows:
// unsubscribe( subscriber1 );
// unsubscribe( subscriber2 );

/** 
	The Observer and Publish/Subscribe patterns encourage us to think hard about the relationships between different parts of our application. They also help us identify what layers containing direct relationships which could instead be replaced with sets of subjects and observers. This effectively could be used to break down an application into smaller, more loosely coupled blocks to improve code management and potentials for re-use.

	Further motivation behind using the Observer pattern is where we need to maintain consistency between related objects without making classes tightly coupled. For example, when an object needs to be able to notify other objects without making assumptions regarding those objects.

	Dynamic relationships can exist between observers and subjects when using either pattern. This provides a great deal of flexibility which may not be as easy to implement when disparate parts of our application are tightly coupled.

	Whilst it may not always be the best solution to every problem, these patterns remain one of the best tools for designing decoupled systems and should be considered an important tool in any JavaScript developer's utility belt.

	Disadvantages
	Consequently, some of the issues with these patterns actually stem from their main benefits. In Publish/Subscribe, by decoupling publishers from subscribers, it can sometimes become difficult to obtain guarantees that particular parts of our applications are functioning as we may expect.

	For example, publishers may make an assumption that one or more subscribers are listening to them. Say that we're using such an assumption to log or output errors regarding some application process. If the subscriber performing the logging crashes (or for some reason fails to function), the publisher won't have a way of seeing this due to the decoupled nature of the system.

	Another draw-back of the pattern is that subscribers are quite ignorant to the existence of each other and are blind to the cost of switching publishers. Due to the dynamic relationship between subscribers and publishers, the update dependency can be difficult to track.
*/

/** 
	Cái này mới thực sự là EventEmitter
*/