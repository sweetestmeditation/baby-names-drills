// run with: node longestBabyNames.js baby_names_2020_long.txt

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}

// Read the file and print its contents.
const fs = require('fs');
const filename = process.argv[2];

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err; // throw an error if we can't read the file

    const namesArray = data.split('\n'); // split the text into a JavaScript array

    // Filter out empty lines
    const nonEmptyNames = namesArray.filter(name => name.trim() !== '');

    if (nonEmptyNames.length === 0) {
        console.log('No valid names found in the file.');
        process.exit(1);
    }

    // Find the longest names
    const maxLength = Math.max(...nonEmptyNames.map(name => name.length));
    const longestNames = nonEmptyNames.filter(name => name.length === maxLength);

    console.log('Longest baby names in the top 40 for 2020:', longestNames);
});
