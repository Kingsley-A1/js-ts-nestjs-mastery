//Method 1
import { multiply } from './mathEngine.js';
import { divide } from './mathEngine.js';

console.log(multiply(2, 3));
console.log(divide(2, 5));

//Method 2
import * as calcMethods from './mathEngine.js';

console.log(calcMethods.multiply(2, 3));
console.log(calcMethods.divide(2, 5));
