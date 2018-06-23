import { defined } from '../';

const yes1 = 1;
const yes2 = 0;
const yes3 = null;
const yes4 = '';
const yes5 = true;
const yes6 = [];
const yes7 = {};
const yes8 = false;
const yes9 = {
  a: 1,
  b: 1,
  c: {
    e: 'yes',
    f: [
      'no',
      'no',
      {
        g: true
      },
      'no'
    ]
  },
  d: 1
};

test('defined variables to return true', () => {
  expect(defined(yes1)).toBe(true);
  expect(defined(yes1, '')).toBe(true);
  expect(defined(yes2)).toBe(true);
  expect(defined(yes3)).toBe(true);
  expect(defined(yes4)).toBe(true);
  expect(defined(yes5)).toBe(true);
  expect(defined(yes6)).toBe(true);
  expect(defined(yes7)).toBe(true);
  expect(defined(yes8)).toBe(true);
  expect(defined(yes9)).toBe(true);
  expect(defined(yes9, '.b')).toBe(true);
  expect(defined(yes9, '.c')).toBe(true);
  expect(defined(yes9, '["c"]')).toBe(true);
  expect(defined(yes9, '.c.f')).toBe(true);
  expect(defined(yes9, '.c.f[3]')).toBe(true);
  expect(defined(yes9, '.c.f[2].g')).toBe(true);
});

const no1 = undefined;
const no2 = {};

test('undefined variables to return false', () => {
  expect(defined(no1)).toBe(false);
  expect(defined(no1, '[1]')).toBe(false);
  expect(defined(no1, '.no')).toBe(false);
  expect(defined(no1, '[1].no')).toBe(false);
  expect(defined(no2, '.no')).toBe(false);
  expect(defined(no2, '.no.no.no.no.no')).toBe(false);
  expect(defined(no2, '[0][1][2][3]')).toBe(false);
  expect(defined(no2, '[0].no[2].no[3]')).toBe(false);
  expect(defined(no2, '.no[no]["alsono"]')).toBe(false);
});
