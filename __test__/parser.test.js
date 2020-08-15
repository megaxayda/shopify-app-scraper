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

it('should get correct title', () => {
  const result = parser(html);
  expect(result[0].title).toBe('Loox ‑ Photo Reviews');
});

it('should get correct author', () => {
  const result = parser(html);
  expect(result[0].author).toBe('Loox');
});

it('should get correct description', () => {
  const result = parser(html);
  expect(result[0].desc).toBe('Product reviews with photos - social proof that looks great');
});

it('should get correct rating', () => {
  const result = parser(html);
  expect(result[0].rating).toBe('4.9');
});

it('should get correct number of reviews', () => {
  const result = parser(html);
  expect(result[0].reviews).toBe('5274');
});

it('should get correct pricing', () => {
  const result = parser(html);
  expect(result[0].pricing).toBe('14-day free trial');
});

it('should get correct url', () => {
  const result = parser(html);
  expect(result[0].url).toBe('https://apps.shopify.com/loox?surface_detail=all&surface_inter_position=1&surface_intra_position=1&surface_type=category');
});
