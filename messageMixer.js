console.log('Message-Mixer-original')
const Messagemixer = {}
Messagemixer.countCharacter = function (inputString, inputCharacter) {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
      for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
           count++;
        }
      }
    return count; 
  };
  
  Messagemixer.capitalizeFirstCharacterOfWords = function (string) {
    let arr = string.split(" ");  
      for (let i = 0; i < arr.length; i++) {  
        let word = arr[i];
          arr[i] = word[0].toUpperCase() + word.substring(1); 
      }
    return arr.join(" "); 
  };
  
  
  Messagemixer.reverseWord = function (word) {
    return word.split("").reverse().join("");
  };
 
  
  Messagemixer.reverseAllWords = function (sentence) {
    let words = sentence.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = Messagemixer.reverseWord(words[i]);
      }
     return words.join(" ");
  };
 
  
  
  Messagemixer.replaceFirstOccurence = function (string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
  };
  
  
  Messagemixer.replaceAllOccurrences = function (string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
  };
  
  
  Messagemixer.encode = function (string) {
    let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
      for (let key in replacementObject) {
        string = Messagemixer.replaceAllOccurrences(string, key, replacementObject[key]); 
      }	
      return string;
  }
  Messagemixer.palindrome = function(str)
  {
      return str + " " + Messagemixer.reverseWord(str) 
  }
  Messagemixer.pigLatin = function(inputSentance,inputCharacter)
  {
      return inputSentance.split(' ').join(inputCharacter + ' ')
  }
  export default Messagemixer;
// export {countCharacter}
  
  
  