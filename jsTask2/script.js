// Slack Username: daze
// Is is the second task of js for StartNG

const data = [{ principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 }, 
    { principal: 2000, time: 3 },];

let rate = 0;
let interest = 0;
let interestData = [];

function interestCalculator(array) {
    array.forEach((item) => {
        if (item.principal >= 2500 && item.time > 1&& item.time < 3)
            rate = 3;
        else if (item.principal >= 2500 && item.time >= 3)
            rate = 4;
        else if (item.principal < 2500 || item.time <= 1)
            rate = 2;
        else
            rate = 1;
        interest = (item.principal * rate * item.time) / 100;
        interestData.push({
            principal: item.principal,
            time: item.time,
            rate,
            interest
        });
    });
    console.log(interestData);
    return interestData;
};
interestCalculator(data);

/* First create an array of objects called data with the following values:

1. Principal- 2500, time- 1.8

2. Principal- 1000, time- 5

3. Principal- 3000, time- 1

4. Principal- 2000, time- 3
 

NB: Each individual object should have 'principal' and 'time' as keys.

Write a function called "interestCalculator" that takes an array as a single argument and does the following:


Determine the rate applicable using the conditions:

* If the principal is greater than or equal to 2500 and the time is greater than 1 and less than 3, then rate = 3

* If the principal is greater than or equal to 2500 and the time is greater than or equal to 3, then rate = 4

* If the principal is less than 2500 or the time is less than or equal to 1, then rate = 2

* Otherwise, rate = 1;

 

Calculate the interest for each individual object using the formula: (principal * rate * time) / 100. 

The function should return an array of objects called 'interestData' and each individual object should have 'principal', 'rate', 'time' and 'interest' as keys with their corresponding values.

Log the 'interestData' array to console BEFORE your return statement.

Finally, call/execute the function and pass the 'data' array you created. */

 
