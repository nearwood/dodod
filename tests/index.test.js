import { getOrdinalDatetime, getOrdinalDate } from '../dist/dodod';

const regularYearDatetimeMatrix = [{
  date: new Date(2019, 10, 19, 10, 14),
  string: "93231014"
}, {
  date: new Date(2009, 10, 19, 10, 14),
  string: "93231014"
}, {
  date: new Date(1999, 10, 19, 10, 14),
  string: "93231014"
}];

const leapYearDatetimeMatrix = [{
  date: new Date(2000, 0, 1, 2, 3),
  string: "00010203"
}, {
  date: new Date(2008, 5, 7, 8, 9),
  string: "81590809"
}, {
  date: new Date(2012, 11, 31, 12, 13),
  string: "23661213"
}];

const dateMatrix = [{
  date: new Date(2000, 0, 1, 2, 3),
  string: "0001"
},{
  date: new Date(2019, 10, 19, 10, 14),
  string: "9323"
}];

test('getOrdinalDate', () => {
  dateMatrix.forEach(test => {
    const testDateResult = getOrdinalDate(test.date);
    expect(testDateResult.length).toBe(4);
    expect(testDateResult).toBe(test.string);
  });
});

test('Regular Years', () => {
  regularYearDatetimeMatrix.forEach(test => {
    const testDateResult = getOrdinalDatetime(test.date);
    expect(testDateResult.length).toBe(8);
    expect(testDateResult).toBe(test.string);
  });
});

test('Leap Years', () => {
  leapYearDatetimeMatrix.forEach(test => {
    const testDateResult = getOrdinalDatetime(test.date);
    expect(testDateResult.length).toBe(8);
    expect(testDateResult).toBe(test.string);
  });
});

test('Invalid arguments throw', () => {
  expect(() => getOrdinalDatetime("Banana")).toThrow();
  expect(() => getOrdinalDatetime(42)).toThrow();
  expect(() => getOrdinalDatetime(3.14)).toThrow();
  expect(() => getOrdinalDatetime(null)).toThrow();
  expect(() => getOrdinalDatetime(new Date("Banana"))).toThrow();
});
