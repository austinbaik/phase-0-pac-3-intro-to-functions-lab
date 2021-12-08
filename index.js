
 function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(_string) {
    console.log("hello".toUpperCase());
}

function logWhisper(_string) {
    console.log("hello".toLowerCase());
}

function sayHiToGrandma(_string) {
    //Q why don't we need to declare here? 


    if (_string === _string.toLowerCase()) {
        return "I can't hear you!";
} else if (_string === _string.toUpperCase()){
        return "YES INDEED!";
} else if (_string === "I love you, Grandma.") {
        return "I love you, too.";}

    
}

console.log(sayHiToGrandma("I love you, Grandma."));
