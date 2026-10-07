function sayMessage(fName, lName) {
  let message = "Hello";
  function concat() {
    function getName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getName()}`;
  }
  return concat();
}
document.write(sayMessage("Hossam", "Shiref"));
