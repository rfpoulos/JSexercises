var leetSpeak = function(sentence) {
    var leet = {
        a: '4',
        e: '3',
        g: '6',
        l: '1',
        o: '0',
        s: '5',
        t: '7',
    };
    leetSentence = []
    for (var i = 0; i < sentence.length; i++) {
        if (leet[sentence[i].toLowerCase()] === undefined) {
            leetSentence.push(sentence[i]);
        }
        else {
            leetSentence.push(leet[sentence[i].toLowerCase()]);
        }
    }
    return leetSentence.join("");
}
console.log(leetSpeak("This is a test"));