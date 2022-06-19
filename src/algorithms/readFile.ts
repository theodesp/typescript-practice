const fs = require('fs');
const readline = require('readline');
const path = require('path');

const processLineByLine = async () => {
  const fileStream = fs.createReadStream(path.join(__dirname, 'input.txt'));
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    console.log(`Line from file: ${line}`);
  }
}

processLineByLine();