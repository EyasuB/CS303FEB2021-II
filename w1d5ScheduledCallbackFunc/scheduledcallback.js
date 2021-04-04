/*
• Question 1: Write a function printNumbers(from, to) that outputs a number every second, starting from
from and ending with to.
*/

let i = 0;
let printNumbers = setInterval(() => {
    if (i === 10) {
        clearInterval(printNumbers)
    }
    console.log(i);
    i++;
}, 1000);
/*
• Question 2:
• In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.
• When will the scheduled function run?
• After the loop.
• Before the loop.
• In the beginning of the loop.
• What is alert going to show?
*/
let i = 0;
setTimeout(() => alert(i), 100); // ?
// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
i++;
}

//Response: The set settimeout function runs excutes time t after the loop excutes. This is from the order
// of the excution even if we set time to 1000(1s) the function excutes after the loop. 





*/