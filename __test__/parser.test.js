const parser = require('../parser');
const fs = require('fs');
let html;

beforeAll(() => {
  html = fs.readFileSync('site.html', 'utf8');
});

it('should return correct amount of apps', () => {
  const result = parser(html);
  expect(result.length).toBe(24);
});
