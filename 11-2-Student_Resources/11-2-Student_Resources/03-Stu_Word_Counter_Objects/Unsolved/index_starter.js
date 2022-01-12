// Initialize the function
function wordCount(word) {
  // Convert string to an array of words
  var wordArray = word.split(" ");


  // An object to hold word frequency
  var freq = {};

  // Iterate through the array and count the occurrence of each word
  wordArray.forEach(function(word) {
  if (word in freq)
  {
    freq[word] = freq[word] + 1;
  }
  else {
  
    freq[word] =1;
  }  

//  Call the function with the string as a parameter.

})
return freq;
}
console.log(wordCount("I yam what I yam and always will be what I yam"))
