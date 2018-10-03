// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

//Convert string to an array
// use the reverse array reverse() myarray.reverse()
// convert array back to string using toString() myArray.toString()

// function reverse (aStrng){
//     var combined = aStrng.split('').reverse().join('')
    
//     console.log(combined)

//     return combined
// }
// reverse('skoob')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

// function findLongestWord (strOfWords){
//     var wordsArr = strOfWords.split(' ')
//     console.log('The number of words is: '+wordsArr.length)
//     var longestWordLength = 0
//     var longestWord = ''
//     for (i=0; i < wordsArr.length; i++){
//         console.log('Count :'+i+' Word:'+wordsArr[i]+' Length: '+wordsArr[i].length)
//         if (wordsArr[i].length > longestWordLength) {
//             longestWordLength = wordsArr[i].length
//             longestWord = wordsArr[i]
//         } 
//     }
//     console.log('1st Longest Word:'+longestWord+' Length: '+longestWordLength)
//     return longestWord
// }
// findLongestWord('a book full of dog')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
// function nicer (dirtySentence){
//     var words = dirtySentence.split(' ')

//     function isDirtyWord(word){
//         return word !== 'heck' && word !== 'darn' && word !== 'dang' && word !== 'crappy'
//     }
//     var cleanWords = words.filter(isDirtyWord)
//     cleanSentence = cleanWords.join(' ')
//     console.log(cleanSentence)
//     return cleanSentence
// }
// nicer('mom get the heck in here and bring me a darn sandwich.')


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

// function capitalizeAll (sentence){
//     // put the sentence into an array
//     var words = sentence.split(' ')
//     //write a function that capitalizes the first letter of an element
//     function capFirstLetter(word){
//        return word.charAt(0).toUpperCase() + word.slice(1)
//     }
//     // call the function for all the words
//     var capWords = words.forEach(capFirstLetter)

//      // put all the elements back into a string
//     capSentence = capWords.join(' ')
//     console.log(capSentence)
//     return capSentence
// }
// capitalizeAll('every day is like sunday')

// function capitalizeAll(sentence){
//     var words = sentence.split(' ')
//     var capWords = []

//    for (i=0; i < words.length; i++){
//        capWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
//    }

//    // why didn't the forEach work?
//    // 
//    capSentence = capWords.join(' ')
   
//    console.log(capSentence)
//    return capSentence
//     }
//     capitalizeAll('every day is like sunday')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
// function split (inString, delimiter) {
//     // This function will take the elements inside the inString and seperate them based on the given dlimiter
//     var tempString = ''
//     var splitArr = []
//     var delimiterLen
//     var delimCnt = 0
//     //Check for multichar delimiter
//     delimiterLen = delimiter.length

//     for (i=0; i < inString.length; i++) { 
//         if (inString.charAt(i) !== delimiter.charAt(0)){
//             // reset the delimter char counter
//             delimCnt = 0
//             tempString += inString.charAt(i)
            
//         } else  {
//             // We're at a delimiter. Check the delimter char counter
//             if (delimCnt === 0) {
//                 //it's the fist time we've hit the delimiter so add the string to array
//                 splitArr.push(tempString)
//                 // Clear the tempString
//                 tempString = ''
//             } 
//             delimCnt = delimCnt + 1

//         } 
//        // We got to the last word so we put it into the array
//         if (i === inString.length-1){
//         splitArr.push(tempString)
//         }
       
         
//     }   

//     for (i=0; i < splitArr.length; i++) {
//        console.log('New Obj '+i+' '+splitArr[i])
//     }
// return splitArr
// }
// split('APPLExxxBANANAxxxCHERRY', 'xxx')

// Review in Class
function split (str, delimiter) {
  let resultArray = []
  let delimiterIdx = str.indexOf(delimiter)
  while (delimiterIdx !== -1) {    //While there is no more delimiter in the string

// do the chunk procedure
   const chunk = str.substring(0, delimiterIdx)
   resultArray.push(chunk)

   str = str.substring(chunk.length)
   str = str.substring(delimiter.length)

  

   delimiterIdx =str.indexOf(delimiter)
  }
resultArray.push(str)
console.log(resultArray)
// const  testSplit = split('a-b-c', '-')
// console.log(testSplit)
}
  
//   const delimiterIdx = str.indexOf(delimiter)
//    const firstChunk = str.substring(0, delimiterIdx)
//    resultArray.push(firstChunk)

//    str = str.substring(firstChunk.length)
//    str = str.substring(delimiter.length)


split('APPLExxxBANANAxxxCHERRY', 'xxx')
 
