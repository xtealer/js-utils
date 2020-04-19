const fs = require('fs');

/*
* change the template string to contain the words that you want to parse
*/
const words = `
Alexandra
Alison
Diana
Elizabeth
Emily
Irene
`;

const parseWords = () => {
    // * remove '/n' between words
    const wordsToProcess = words.split(/\n/g);
    // * data to be written to file
    let fileData = 'export default [';

    if (wordsToProcess.length < 1) {
        console.log('No words to process');
        return;
    }

    for (const word in wordsToProcess) {
        fileData += `\n'${wordsToProcess[word]}'`;
        if (wordsToProcess[word] !== wordsToProcess[wordsToProcess.length - 1]) {
            fileData += ',';
        } else {
            fileData += '];\n';
        }
    }

    // * save words on file
    fs.writeFileSync(`${wordsToProcess[0]}.ts`, fileData);
}

parseWords();
