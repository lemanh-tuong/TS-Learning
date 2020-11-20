/** 
	The Observer is a design pattern where an object (known as a subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state.
	When a subject needs to notify observers about something interesting happening, it broadcasts a notification to the observers (which can include specific data related to the topic of the notification).
	When we no longer wish for a particular observer to be notified of changes by the subject they are registered with, the subject can remove them from the list of observers.
	
	We can now expand on what we've learned to implement the Observer pattern with the following components:
		-Subject: maintains a list of observers, facilitates adding or removing observers
		-Observer: provides an update interface for objects that need to be notified of a Subject's changes of state
		-ConcreteSubject: broadcasts notifications to observers on changes of state, stores the state of ConcreteObservers
		-ConcreteObserver: stores a reference to the ConcreteSubject, implements an update interface for the Observer to ensure state is consistent with the Subject's

*/
class Subject {
  constructor() {
    this.state = {
      test: 1
    };
    this.observers = [];
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.state.test++;
    this.notifyObserver();
  }
  addObserver(observer) {
    if (observer !== undefined) {
      this.observers.push(observer);
    }
  }
  notifyObserver() {
    this.observers.map(observer => {
      observer.update(this.state);
    });
  }
  removeObserver(observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }
}

class Observer {
  constructor(element) {
    this.element = document.querySelector(element);
  }
  update(state) {
    this.element.textContent = state.test;
  }
}

const s = new Subject();
const observer1 = new Observer("#button1");
const observer2 = new Observer("#button2");
s.addObserver(observer1);
s.addObserver(observer2);
s.notifyObserver();
const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");
console.log(observer1);
btn1.addEventListener("click", s.increment);
btn2.addEventListener("click", s.increment);
btn3.addEventListener("click", s.removeObserver.bind(s, observer1));

/** 
	Cái này có khá nhiều cái áp dụng
	Cơ bản Subject chứa các observer sẽ lắng nghe data trong Subject thay đổi
	redux là 1 ví dụ điển hình với các observer sử dụng connect() hoặc useSelector
	khi store thay đổi các componnent registed sẽ update theo
*/