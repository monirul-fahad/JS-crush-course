const name = 'Fahad';
const age = 22;

// console.log('My name is ' + name + '. ' + 'I am ' + age + ' years old')
// console.log(`My name is ${name} and I am ${age} years old.`)


// Array object 

const rotune = [
    {
      id: 1,
      text: 'get ready for class.',
      isComplete: false
    },
    {
      id: 2,
      text: 'Play with friends.',
      isComplete: false
    },
    {
      id: 3,
      text: 'Hanging out with friends',
      isComplete: true
    }
  ];

//   console.log(rotune[1].text)
  

//    LOOPS

// For
for(let i = 0; i <= 10; i++){
  console.log(`For Loop Number: ${i}`);
}

// While
let i = 0
while(i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}


// Loop Through Arrays

for(let i = 0; i < rotune.length; i++){
    console.log(` Todo ${i + 1}: ${rotune[i].text}`);
  }
  
  // For...of Loop
  for(let todo of rotune) {
    console.log(todo.text);
  }
  
  
  // HIGH ORDER ARRAY METHODS (show prototype)
  
  // forEach() - Loops through array
  rotune.forEach(function(todo, i, myRotune) {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(myRotune);
  });
  
  // map() - Loop through and create new array
  const todoTextArray = rotune.map(function(todo) {
    return todo.text;
  });
  
  console.log(todoTextArray);
  
  // filter() - Returns array based on condition
  const todo1 = rotune.filter(function(todo) {
    // Return only todos where id is 1
    return todo.id === 1; 
  });
