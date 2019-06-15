const path = require('path');
const fs = require('fs');
const solc = require('solc');            //Could the error be here ?

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync( lotteryPath, 'utf8');

console.log(JSON.parse(solc.compile(JSON.stringify(
  var input = {
  language: 'Solidity',
  sources: {
    'lottery.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['evm', 'bytecode'],
      },
    },
  },
})),1);
