
/**
* Returns a "Julian Day" string from a provided date, or `new Date()` if not provided.
* @param {Date} date - The date to calculate the Julian Day from.
* @return {string} - Formatted Julian date string
*/
export default function getJulianDay(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 1, 0, 0, 0); //January (index 0), 1, 00:00:00

  //Use milliseconds since Unix Epoch to perform calculation.
  const diffTime = Math.abs(date.getTime() - startOfYear.getTime());

  //Convert the difference (in ms) from the beginning of the year to days.
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  //Split out the parts to make a fixed length string.
  const yearString = date.getFullYear().toString().substring(3);
  const daysString = diffDays.toString().padStart(3, '0');
  const hourString = date.getHours().toString().padStart(2, '0')
  const minsString = date.getMinutes().toString().padStart(2, '0');

  return `${yearString}${daysString}${hourString}${minsString}`;
}
