// run with: node scrabbleWordsArray.js baby_names_2020_short.txt

const fs = require('fs');
const filename = process.argv[2];

// Make sure a filename is provided
if (!filename) {
    console.log('Usage: node scrabbleWordsArray.js FILENAME');
    process.exit(1);
}

// Replace this list with a comprehensive Scrabble word list
const scrabbleWordList = ['word1', 'word2', 'word3', /* ... */];

// Read the file and print its contents.
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;

    const namesArray = data.split('\n');

    // Filter out empty lines and trim whitespace
    const nonEmptyNames = namesArray.filter(name => name.trim() !== '');

    if (nonEmptyNames.length === 0) {
        console.log('No valid names found in the file.');
        process.exit(1);
    }

    // Function to check if a word is a valid Scrabble word (case-insensitive)
    function isScrabbleWord(word) {
        return scrabbleWordList.some(scrabbleWord => scrabbleWord.toLowerCase() === word.toLowerCase());
    }

    // Find names that form a valid Scrabble word when spelled backward using an array
    const scrabbleWordsArray = nonEmptyNames.filter(name => {
        const reversedName = name.split('').reverse().join('').trim().toLowerCase();
        console.log(`Checking ${reversedName}`);
        const isScrabbleWordResult = isScrabbleWord(reversedName);
        console.log(`Result: ${isScrabbleWordResult}`);
        return isScrabbleWordResult;
    });

    console.log('Scrabble words formed by spelling names backward (using array):', scrabbleWordsArray);
});


