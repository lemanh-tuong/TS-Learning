// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#mediatorpatternjavascript

/** 
	If it appears a system has too many direct relationships between components, it may be time to have a central point of control that components communicate through instead. The Mediator promotes loose coupling by ensuring that instead of components referring to each other explicitly, their interaction is handled through this central point. This can help us decouple systems and improve the potential for component reusability.
	
*/
class Participant {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }
  send(msg, to) {
    this.chatroom.send(msg, this, to);
    console.log(this.chatroom);
  }
}

class ChatRoom {
  constructor() {
    this.Participants = {};
  }
  register(participant) {
    this.Participants[participant.name] = participant;
    participant.chatroom = this;
  }
  send(msg, from, to) {
    console.log(`${msg} from ${from.name} to ${to}`);
  }
}

var person = new Participant("T");
var room = new ChatRoom();
room.register(person);
person.send("Test", "AAA");

/** 
	Advantages & Disadvantages
		-The largest benefit of the Mediator pattern is that it reduces the communication channels needed between objects or components in a system from many to many to just many to one. Adding new publishers and subscribers is relatively easy due to the level of decoupling present.

		-Perhaps the biggest downside of using the pattern is that it can introduce a single point of failure. Placing a Mediator between modules can also cause a performance hit as they are always communicating indirectly. Because of the nature of loose coupling, it's difficult to establish how a system might react by only looking at the broadcasts.

		-That said, it's useful to remind ourselves that decoupled systems have a number of other benefits - if our modules communicated with each other directly, changes to modules (e.g another module throwing an exception) could easily have a domino effect on the rest of our application. This problem is less of a concern with decoupled systems.

		-At the end of the day, tight coupling causes all kinds of headaches and this is just another alternative solution, but one which can work very well if implemented correctly.
*/