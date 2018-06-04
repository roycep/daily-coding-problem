const { runTests } = require('./lib/runTests.js');
const { solution: productWithoutCurr } = require('../solutions/2.js');

const tests = [
  {
    inputs: [
      { numbers: [1, 2, 3, 4, 5] },
    ],
    solution: [120, 60, 40, 30, 24],
    algorithm: productWithoutCurr,
    tests: ['toEqual']
  },
  {
    inputs: [
      { numbers: [1, 0, 3] },
    ],
    solution: [0, 3, 0],
    algorithm: productWithoutCurr,
    tests: ['toEqual']
  },
  {
    inputs: [
      { numbers: [3, 2, 1] },
    ],
    solution: [2, 3, 6], 
    algorithm: productWithoutCurr,
    tests: ['toEqual']
  }
]

runTests(tests);

