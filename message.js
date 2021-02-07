console.log('Message')
// import {countCharacter}
import Messagemixer from './messageMixer.js'
function displayMessage() {
    console.log(Messagemixer.countCharacter('What is the color of the sky?','t'));
    console.log(Messagemixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(Messagemixer.reverseWord("What is the color of the sky?"));
    console.log(Messagemixer.reverseAllWords("What is the color of the sky?"));
    console.log(Messagemixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(Messagemixer.encode("What is the color of the sky?"));
    console.log(Messagemixer.palindrome('Malayalam'));
    console.log(Messagemixer.pigLatin("What is the color of the sky?","y"));
  }
  
  displayMessage();