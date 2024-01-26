// run with: node scrabbleWordsSetTimer.js baby_names_2020.txt

const fs = require('fs');
const filename = process.argv[2];

// Make sure a filename is provided
if (!filename) {
    console.log('Usage: node scrabbleWordsSetTimer.js FILENAME');
    process.exit(1);
}

// Replace this list with a comprehensive Scrabble word list
const scrabbleWordSet = new Set(['word1', 'word2', 'word3', /* ... */]);

// Read the file and print its contents.
fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;

    const namesArray = data.split('\n');

    // Filter out empty lines
    const nonEmptyNames = namesArray.filter(name => name.trim() !== '');

    if (nonEmptyNames.length === 0) {
        console.log('No valid names found in the file.');
        process.exit(1);
    }

    // Timer start
    console.time('scrabbleWordsSetTimer');

    // Find names that form a valid Scrabble word when spelled backward using a set
    const scrabbleWordsSetResult = nonEmptyNames.filter(name => {
        const reversedName = name.split('').reverse().join('');
        return scrabbleWordSet.has(reversedName.toLowerCase());
    });

    // Timer stop
    console.timeEnd('scrabbleWordsSetTimer');

    console.log('Scrabble words formed by spelling names backward (using set):', scrabbleWordsSetResult);
});


