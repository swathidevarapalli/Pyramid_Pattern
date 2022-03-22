let n = 5;//Row count

//Defining an empty string
let string = "";

// External loop (no. of iterations = no. of rows)
for (let i = 1; i <= n; i++) {

  // creating spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }

  // creating alphabets
  for (let k = 0; k < 2 * i - 1; k++) {
    string += String.fromCharCode(k + 65); //The String.fromCharCode() method converts Unicode values to characters.(ASCII Values of Capital letters starts of 65 onwards.)
  }
  string += "\n"; //To enter the new line.
}
console.log(string);