// Calc is short for calculator
// A year is a leap year if it is divisible by 4  (ex: 0008 is leap)
//   with an exception that if its divisible by 4 AND 100 then it is not a leap year (ex: 1900 is not leap)
//   sike! An exception to the exception, if its divisible by 4 AND 100 AND 400 its back to being a leap year (ex: 2000 is leap)

const year = 2000;
let result;

function isLeapYear(year) {
  let output;
  if (!(year%4) && (year%100)) {
  output =  `${year} is a leap year.`;
  } else if (!(year%4) && !(year%400)) {
  output = `${year} is a leap year.`;
  } else {
  output =  `${year} is not a leap year.`;
  };
  return output;
  
}
result = isLeapYear(year);
console.log(result);


