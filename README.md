## DoD Ordinal Date (dodod)

Generate a date string utilizing the DoD's confusingly named "Julian Date" format, which is not really a [Julian Date]() at all, more like a [Julian Day](https://en.wikipedia.org/wiki/Julian_day)--or, wait, is it more like a [Julian Year](https://en.wikipedia.org/wiki/Julian_year_(astronomy))?

But seriously, it's just a slightly modified [Ordinal Date](https://en.wikipedia.org/wiki/Ordinal_date).

Because npm I named it something trendy and cryptic sounding.

See this reference which the code and all tests are based on: https://landweb.modaps.eosdis.nasa.gov/browse/calendar.html

## Usage

```
import dodod from 'dodod';

let j = dodod(new Date(2019, 10, 19, 10, 14));
console.log(j); // "93231014"

/* Where:
 *   "9"   // Last digit of year
 * + "323" // Ordinal day in year
 * + "10"  // Hour (24h format)
 * + "14"  // Minute
 */
```

## Contributing

hmu if you can get me a cool logo.
