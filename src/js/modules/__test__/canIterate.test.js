import canIterate from '../canIterate';

describe('canIterate', () => {
  const values = [
    [new Map(), true],
    [new Set(), true],
    [null, false],
    [10, false],
    ['Netology', true],
  ];

  test.each(values)('return boolean', (received, expected) => {
    expect(canIterate(received)).toEqual(expected);
  });
});
