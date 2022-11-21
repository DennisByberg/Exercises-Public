// Vad kommer stå i console.log()?

var greeting = "Good bye world!";
{
  let greeting = "Hello World";
}
console.log(greeting);

// Svar: "Good bye world!" eftersom texten endast ändras inuti kodblocket och inte utanför...
