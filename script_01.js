
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> function getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,"," habbe","Sie","die"],"Q"));
function getSentence(arr) {
    const GAP   = " ";
    let str     = " ";  
    let1        = ".";
    let2        = "?";
    let3        = "!";

for (let i = 0; i < arr.length; i++) {

    if (i != arr.length - 1) {
        str += arr[i] + GAP;
    } else {
        str += arr[i] + let2;
    }    
}
return str;
}    
function output(outputStr) {
    console.log(outputStr);
}