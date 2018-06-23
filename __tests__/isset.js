import { isset } from '../';

const yes1 = 1;
const yes2 = 0;
const yes3 = 1.1;
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

test('defined not null variables to return true', () => {
  expect(isset(yes1)).toBe(true);
  expect(isset(yes1, '')).toBe(true);
  expect(isset(yes2)).toBe(true);
  expect(isset(yes3)).toBe(true);
  expect(isset(yes4)).toBe(true);
  expect(isset(yes5)).toBe(true);
  expect(isset(yes6)).toBe(true);
  expect(isset(yes7)).toBe(true);
  expect(isset(yes8)).toBe(true);
  expect(isset(yes9)).toBe(true);
  expect(isset(yes9, '.b')).toBe(true);
  expect(isset(yes9, '.c')).toBe(true);
  expect(isset(yes9, '["c"]')).toBe(true);
  expect(isset(yes9, '.c.f')).toBe(true);
  expect(isset(yes9, '.c.f[3]')).toBe(true);
  expect(isset(yes9, '.c.f[2].g')).toBe(true);
});

const no1 = undefined;
const no2 = {};
const no3 = null;

test('undefined or null variables to return false', () => {
  expect(isset(no1)).toBe(false);
  expect(isset(no1, '[1]')).toBe(false);
  expect(isset(no1, '.no')).toBe(false);
  expect(isset(no1, '[1].no')).toBe(false);
  expect(isset(no2, '.no')).toBe(false);
  expect(isset(no2, '.no.no.no.no.no')).toBe(false);
  expect(isset(no2, '[0][1][2][3]')).toBe(false);
  expect(isset(no2, '[0].no[2].no[3]')).toBe(false);
  expect(isset(no2, '.no[no]["alsono"]')).toBe(false);
  expect(isset(no3)).toBe(false);
});
