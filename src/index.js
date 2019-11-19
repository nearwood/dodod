
/**
* Returns a ordinal datetime string from a provided date.
* @param {Date} [date=new Date()] - The date to convert
* @return {string} - Formatted, fixed length ordinal date string (eg. "91501230")
*/
export function getOrdinalDatetime(date = new Date()) {
  const { year, days, hour, min } = toOrdinalDatetimeObject(date);
  return `${year}${days}${hour}${min}`;
}

/**
* Returns a ordinal date string from a provided date.
* @param {Date} [date] - The date to convert
* @return {string} - Formatted, fixed length ordinal date string (eg. "9150")
*/
export function getOrdinalDate(date = new Date()) {
  const { year, days } = toOrdinalDatetimeObject(date);
  return `${year}${days}`;
}

function toOrdinalDatetimeObject(date) {
  //Ensure it's a date object and `isNaN` checks if it's a valid date (no, really)
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error("Argument must be a valid Date object");
  }

  const startOfYear = new Date(date.getFullYear(), 0, 1, 0, 0, 0); //January (index 0), 1, 00:00:00

  //Use milliseconds since Unix Epoch to perform calculation.
  const diffTime = Math.abs(date.getTime() - startOfYear.getTime());

  //Convert the difference (in ms) from the beginning of the year to days.
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  //Split out the parts to make a fixed length string.
  const year = date.getFullYear().toString().substring(3);
  const days = diffDays.toString().padStart(3, '0');
  const hour = date.getHours().toString().padStart(2, '0')
  const min = date.getMinutes().toString().padStart(2, '0');

  return {year, days, hour, min};
}
