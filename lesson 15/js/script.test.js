const scriptFile = require('./script');

test('sum return true', () => {
  expect(scriptFile.sum()).toBe(true);
});

test('num must equal to 5', () => {
  expect(scriptFile.num).toBe(5);
});
