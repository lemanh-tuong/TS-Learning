class Strategy {
  doOperation(num1, num2);
}

class OperationAdd extends Strategy {
  doOperation(num1, num2) {
    return num1 + num2;
  }
}
class OperationSubstract  extends Strategy {
  doOperation(num1, num2) {
    return num1 - num2;
  }
}
class OperationMultiply  extends Strategy {
  doOperation(num1, num2) {
    return num1 * num2;
  }
}

class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }
   executeStrategy(num1, num2){
      return strategy.doOperation(num1, num2);
   }
}

contextAdd = new Context(new OperationAdd());		
console.log(`10 + 5 = ${contextAdd.executeStrategy(10, 5)}`);

contextSubtract = new Context(new OperationSubstract());		
console.log(`10 - 5 = ${contextSubtract.executeStrategy(10, 5)}`);