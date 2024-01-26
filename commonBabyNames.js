// run with: node commonNames.js baby_names_1880.txt baby_names_2020.txt

const fs = require('fs');

// Make sure two filenames are provided
if (process.argv.length < 4) {
    console.log('Usage: node commonNames.js FILENAME_1880 FILENAME_2020');
    process.exit(1);
}

const filename1880 = process.argv[2];
const filename2020 = process.argv[3];

// Read the files and print their contents.
fs.readFile(filename1880, 'utf8', function(err, data1880) {
    if (err) throw err;

    fs.readFile(filename2020, 'utf8', function(err, data2020) {
        if (err) throw err;

        const namesArray1880 = data1880.split('\n');
        const namesArray2020 = data2020.split('\n');

        // Filter out empty lines
        const nonEmptyNames1880 = namesArray1880.filter(name => name.trim() !== '');
        const nonEmptyNames2020 = namesArray2020.filter(name => name.trim() !== '');

        // Find common names
        const commonNames = nonEmptyNames1880.filter(name => nonEmptyNames2020.includes(name));

        console.log('Common names in 1880 and 2020:', commonNames);
    });
});
