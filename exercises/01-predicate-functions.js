// TIP:
// A predicate function is a function that returns boolean true or false
// They are useful for improving the semantics of checking for conditions.
// Examples:
// - isUserLoggedIn(user)
// - isString(s)
// - isValidZipCode(code)
// etc
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false

function isVowel (inChar){
    var upperChar = inChar.toString().toUpperCase()
    var vowelArr = ['A', 'E', 'I', 'O', 'U']
    console.log(vowelArr.includes(upperChar))
    return  vowelArr.includes(upperChar)
}
isVowel('e')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write two functions: "isEven" and "isOdd" that take a number argument and
// return true or false if the number is even or odd, respectively.
// The functions should return "false" if the number passed in is not an integer.
//
// Examples:
// isEven(100) --> true
// isEven(1) --> false
// isEven(-2) --> true
// isEven('banana') --> false
// isOdd(5) --> true
// isOdd('7') --> false
// isOdd(3.14) --> false

// function isEven (number){
//     var tfResponse 
//     if ((Number.isInteger(number)) === false){
//         tfResponse = false
//     } else  if ((number % 2) === 0) {
//             tfResponse = true
//     } else tfResponse = false   
//     console.log(tfResponse)
//     return tfResponse
// }
// isEven(2)

function isOdd (number){
    var tfResponse
    if ((Number.isInteger(number)) === false){
        tfResponse = false
    } 
    else if ((number % 2) >0) {
        tfResponse = true
    } else tfResponse = false
    console.log(tfResponse)
    return tfResponse
}
isOdd(5)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isCapitalCity" that takes two arguments: a US state and a city name
// and returns true or false if the city name is the capital of the state.
// The function should return false if the state name is not a valid US state.
//
// Hint 1: What is the best data structure to store this information? Object? Array? etc.
// Hint 2: This problem can be solved without using a "for" or "while" loop.
//
// Examples:
// isCapitalCity('Texas', 'Austin') --> true
// isCapitalCity('Texas', 'Houston') --> false
// isCapitalCity('Alaska', 'Juneau') --> true
// isCapitalCity('Strawberry', 'Mango') --> false

function isCapitalCity (state, city){
    var retCapipalCityCheck = false
    console.log('Input is:'+state+' '+city)
    var stateCityObj = {
      'Alabama' : 'Montgomery',
      'Alaska' : 'Juneau',
      'Arkansas' : 'Little Rock',
      'Califonia' : 'Sacramento',
      'Coloardo' : 'Denver',
      'Forida' : 'Tallahassee',
      'Georgia' : 'Atlanta',
      'Texas' : 'Austin'
  }
//Why didn't the dot notation work - but bracket notation does?
// stateCityObj.state returned undefined
//console.log(stateCityObj.state)
if (stateCityObj[state] === city) {
    retCapipalCityCheck = true
}
  console.log(retCapipalCityCheck)
  return retCapipalCityCheck 
}
isCapitalCity('Strawberry', 'Mango')