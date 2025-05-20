// textUtils.cjs

function wordcount(text) {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

function charcount(text) {
    return text.length;
}

function linecount(text) {
    return text.split('\n').filter(line => line.trim().length > 0).length;
}

function paragraphcount(text) {
    return text.split(/\n\s*\n/).filter(para => para.trim().length > 0).length;
}

function readingTime(text, wordsPerMinute = 200) {
    const words = wordcount(text);
    const minutes = words / wordsPerMinute;
    return Math.ceil(minutes);
}

function averageWordLength(text) {
    const words = text.split(/\s+/).filter(word => word.length > 0);
    if (words.length === 0) return 0;

    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    return totalLength / words.length;
}

function sentenceCount(text) {
    return text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
}

module.exports = {
    wordcount,
    charcount,
    linecount,
    paragraphcount,
    readingTime,
    averageWordLength,
    sentenceCount
};
