import { truthy } from '../';

const yes1 = 1;
const yes2 = true;
const yes3 = [];
const yes4 = {};
const yes5 = {
  something: true
};
const yes6 = '1';

test('truthy variables to return true', () => {
  expect(truthy(yes1)).toBe(true);
  expect(truthy(yes2)).toBe(true);
  expect(truthy(yes3)).toBe(true);
  expect(truthy(yes4)).toBe(true);
  expect(truthy(yes5)).toBe(true);
  expect(truthy(yes5, '.something')).toBe(true);
  expect(truthy(yes5, '["something"]')).toBe(true);
  expect(truthy(yes6)).toBe(true);
  expect(truthy(yes6, '')).toBe(true);
});

const no1 = undefined;
const no2 = { x: false };
const no3 = 0;
const no4 = null;
const no5 = '';
const no6 = false;
const no7 = [];

test('not truthy variables to return false', () => {
  expect(truthy(no1)).toBe(false);
  expect(truthy(no2, '.x')).toBe(false);
  expect(truthy(no3)).toBe(false);
  expect(truthy(no4)).toBe(false);
  expect(truthy(no5)).toBe(false);
  expect(truthy(no6)).toBe(false);
  expect(truthy(no7, '[0]')).toBe(false);
  expect(truthy(no7, '[1]')).toBe(false);
});
