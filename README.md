## DoD Ordinal Date (dodod)

Generate a date string utilizing the DoD's confusingly named "Julian Date" format, which is not really a [Julian Date]() at all, more like a [Julian Day](https://en.wikipedia.org/wiki/Julian_day)--or, wait, is it more like a [Julian Year](https://en.wikipedia.org/wiki/Julian_year_(astronomy))?

But seriously, it's just a slightly modified [Ordinal Date](https://en.wikipedia.org/wiki/Ordinal_date).

Because npm I named it something trendy and cryptic sounding.

See this reference which the code and all tests are based on: https://landweb.modaps.eosdis.nasa.gov/browse/calendar.html

## Badges

NPM | Build | Test Coverage | Dependencies
--- | --- | --- | ---
| [![npm version](https://badge.fury.io/js/dodod.svg)](https://www.npmjs.com/package/dodod) | [![Publish NPM Package](https://github.com/nearwood/dodod/actions/workflows/npmpublish.yml/badge.svg)](https://github.com/nearwood/dodod/actions/workflows/npmpublish.yml) | [![Coverage Status](https://coveralls.io/repos/github/nearwood/dodod/badge.svg?branch=master)](https://coveralls.io/github/nearwood/dodod?branch=master) | `0`

## Usage

```
import { getOrdinalDatetime, getOrdinalDate } from 'dodod';

const date = new Date(2019, 10, 19, 16, 14);

let j = getOrdinalDatetime(date);
let k = getOrdinalDate(date);

console.log(j); // "93231614"
console.log(k); // "9323"

/* Where:
 *   "9"   // Last digit of year
 * + "323" // Ordinal day in year
 * + "16"  // Hour (24h format)
 * + "14"  // Minute
 */
```

## Contributing

hmu if you can get me a cool logo.
