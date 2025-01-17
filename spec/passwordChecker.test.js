const isValidPassword = require('./passwordChecker');

test('Valid password should pass all checks', () => {
    expect(isValidPassword('Valid123!')).toBe(true);
  });