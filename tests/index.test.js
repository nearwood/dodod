
//import { getOrdinalDatetime, getOrdinalDate } from '../dist/dodod';
import { getOrdinalDatetime, getOrdinalDate } from '../src/index';

const regularYearDatetimeMatrix = [{
  date: new Date(2019, 0, 1, 0, 0),
  string: "90000000"
}, {
  date: new Date(2019, 10, 19, 10, 14),
  string: "93231014"
}, {
  date: new Date(2009, 10, 19, 0, 14),
  string: "93230014"
}, {
  date: new Date(1999, 10, 19, 16, 14),
  string: "93231614"
}];

const leapYearDatetimeMatrix = [{
  date: new Date(2000, 0, 1, 0, 0),
  string: "00000000"
}, {
  date: new Date(2000, 4, 2, 12, 34),
  string: "01231234"
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

test('getOrdinalDatetime', () => {
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
  expect(() => getOrdinalDate()).not.toThrow();
  expect(() => getOrdinalDatetime()).not.toThrow();
  expect(() => getOrdinalDate("Banana")).toThrow();
  expect(() => getOrdinalDatetime("Banana")).toThrow();
  expect(() => getOrdinalDate(42)).toThrow();
  expect(() => getOrdinalDatetime(42)).toThrow();
  expect(() => getOrdinalDate(null)).toThrow();
  expect(() => getOrdinalDatetime(null)).toThrow();
  expect(() => getOrdinalDate(new Date("Banana"))).toThrow();
  expect(() => getOrdinalDatetime(new Date("Banana"))).toThrow();
});
