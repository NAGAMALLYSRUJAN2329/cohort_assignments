/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if (str1.length!=str2.length){
        return false;
    }
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    const removeChar=(str,character)=>{
        let idx=str.indexOf(character);
        if (idx==-1){
            return false;
        }else{
            return str.slice(0,idx)+str.slice(idx+1);
        }
    };
    for (let i=0; i<str2.length; i++){
        let str=removeChar(str1,str2[i]);
        if(str || str===""){
            str1=str;
        }else{
            return false;
        }
    }return true;
}

console.log(isAnagram('hello', 'world'))
module.exports = isAnagram;
