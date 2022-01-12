// grab references to the input element and the output div
// @TODO: YOUR CODE HERE
var inputtext = d3.select("#text")
var out = d3.select("#output")
// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  // @TODO: YOUR CODE HERE
  let inputtext = d3.event.target.value;
  // clear the existing output
  // @TODO: YOUR CODE HERE

  // reverse the input string
  // @TODO: YOUR CODE HERE
  let reverse = reverseString(inputtext)
  // Set the output text to the reversed input string
  // @TODO: YOUR CODE HERE
  output.text(reverse)
} 

// Attach an event to detect changes to the input field.
// @TODO: YOUR CODE HERE
