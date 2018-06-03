const generateTest = ({inputs, solution, algorithm}) => {
  /*
   * Test is an ordered array of object inputs
   * Each input key will be used to generate a test message
   */
  const verboseInput = inputs.reduce((string, input, i, array) => {
    const [ inputArray ] = Object.entries(input);
    const [key, value] = inputArray;
    string += `${key}: ${JSON.stringify(value)}`;
    if (i < array.length - 1) {
      string += `, `;
    }
    return string;
  }, ``);

  const testString = `${verboseInput} should return ${solution}`;

  const inputArray = inputs.reduce((accumulator, inputObj)=>{
    const [ value ] = Object.values(inputObj);
    return [...accumulator, value];
  }, []);

  test(testString, ()=>{
    const received = algorithm(...inputArray);
    const expected = solution;
    expect(received).toBe(expected);
  });
};

const runTests = (tests) => {
  for (const testInput of tests) {
    generateTest(testInput);
  }
};

module.exports = {
  runTests
};
