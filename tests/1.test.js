const { runTests } = require('./lib/runTests.js');
const { solution: twoSum } = require('../solutions/1.js');

const tests = [
  {
    inputs: [
      { numbers: [10, 15, 3, 7] },
      { k: 17 }
    ],
    solution: true,
    algorithm: twoSum
  },
  {
    inputs: [
      { numbers: [10, 5, 6] },
      { k: 17 }
    ],
    solution: false, 
    algorithm: twoSum
  }
]

runTests(tests);
