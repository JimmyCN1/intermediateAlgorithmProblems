var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  const firstAndLastArray = firstAndLast.split(" ");

  let _firstName = firstAndLastArray[0];
  let _lastName = firstAndLastArray[1];

  //getters
  this.getFirstName = function() {
    return _firstName;
  };
  this.getLastName = function() {
    return _lastName;
  };
  this.getFullName = function() {
    return `${_firstName} ${_lastName}`;
  };

  //setters
  this.setFirstName = function(firstName) {
    _firstName = firstName;
  };
  this.setLastName = function(lastName) {
    _lastName = lastName;
  };
  this.setFullName = function(fullName) {
    const fullNameArray = fullName.split(" ");
    _firstName = fullNameArray[0];
    _lastName = fullNameArray[fullNameArray.length - 1];
  };
};

var bob = new Person("Bob Ross");

Object.keys(bob).length; // should return 6.
bob instanceof Person; // should return true.
bob.firstName; // should return undefined.
bob.lastName; // should return undefined.
bob.getFirstName(); // should return "Bob".
bob.getLastName(); // should return "Ross".
bob.getFullName(); // should return "Bob Ross".
bob.getFullName(); // should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName(); // should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName(); // should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName(); // should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName(); // should return "Curry" after bob.setFullName("Haskell Curry").
bob.getFullName(); // should return "Haskell Ross" after bob.setFirstName("Haskell").
bob.getFullName(); // should return "Haskell Curry" after bob.setLastName("Curry").
bob.getFullName(); // should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getFirstName(); // should return "Haskell" after bob.setFullName("Haskell Curry").
bob.getLastName(); // should return "Curry" after bob.setFullName("Haskell Curry").
