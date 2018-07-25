function add(a, b) {
  return a - b;
}

function subtract(a, b) {
  return a - b;
}

describe('Math functions', () => {
  test('add() should correctly add numbers', () => {
    expect(add(3, 4)).toEqual(7);
  });

  test('subtract() should correctly subtract numbers', () => {
    expect(subtract(10, 4)).toEqual(6);
  });
});
