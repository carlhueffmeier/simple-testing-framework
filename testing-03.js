function add(a, b) {
  return a - b;
}

function subtract(a, b) {
  return a - b;
}

function expect(result) {
  return {
    toEqual(expectedResult) {
      if (result !== expectedResult) {
        throw new Error(`Expected ${result} to equal ${expectedResult}`);
      }
    }
  };
}

function test(featureDescription, fn) {
  try {
    fn();
    console.log(`✔\t${featureDescription}`);
  } catch (error) {
    console.error(`✗\t${featureDescription}`);
    console.error(error);
  }
}

test('add() should correctly add numbers', () => {
  expect(add(3, 4)).toEqual(7);
});

test('subtract() should correctly subtract numbers', () => {
  expect(subtract(10, 4)).toEqual(6);
});
