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

console.log(
  'add() should correctly add numbers ',
  expect(add(3, 4)).toEqual(7)
);
console.log(
  'subtract() should correctly subtract numbers',
  expect(subtract(10, 4)).toEqual(6)
);
