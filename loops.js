/* 
Part 1: Fizz Buzz: 
- Loop through all numbers from 1 to 100.
- If a number is divisible by 3, log “Fizz.”
- If a number is divisible by 5, log “Buzz.”
- If a number is divisible by both 3 and 5, log “Fizz Buzz.”
- If a number is not divisible by either 3 or 5, log the number.
*/


//Loop through all numbers from 1 to 100.
for(let i = 1; i <= 100; i++) {
    console.log("Loop through all numbers from 1 to 100:" + i);
}

//If a number is divisible by 3, log “Fizz”
for(let i = 1; i <= 20; i++) {
    if(i % 3 === 0) {
        console.log(i + " Fizz")
    }
}

//If a number is divisible by 5, log “Buzz”
for (let i = 1; i <= 30; i++) {
  if (i % 5 === 0) {
    console.log(i + " Buzz");
  }
}

//If a number is divisible by both 3 and 5, log “Fizz Buzz”

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " Fizz Buzz")
    }
}

//If a number is not divisible by either 3 or 5, log the number

for (let i = 1; i < 20; i++) {
  if (i % 3 !== 0 && i % 5 !== 0) {
    console.log(i);
  }
}

/* 
Part 2: Prime Time
- Declare an arbitrary number, n.
- Create a loop that searches for the next prime number, starting at n and incrementing from there.
- As soon as you find the prime number, log that number and exit the loop.
*/

//need a count for checking for only two values: a prime number = (1 and itself) if it ever goes above 2 then it is not a prime number
//to do that we now need to check each number divides by 1 and itself

let num = 23

while (num) {
    
    let count = 0
    let i = 1

    while (i <= num) {
        if (num % i === 0) {
            count++
        }
        i++
    }

    if (count === 2) {
        console.log("This is the prime number: " + num)
        break
    }
    num++
}

/* 
Part 3: Feeling Loopy
Loop through the characters of a given CSV string.
Store each “cell” of data in a variable.
When you encounter a comma, move to the next cell.
When you encounter the “\r\n” sequence, move to the next “row.”
Log each row of data.
    -You do not need to format the data, the following works well.
    -console.log(cell1, cell2, cell3, cell4);
*/

let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"

let rows = str.split("\n")

for (row of rows) {
    const cells = row.split(",")

    const cell1 = cells[0]
    const cell2 = cells[1]
    const cell3 = cells[2]
    const cell4 = cells[3]

    console.log(cell1, cell2, cell3, cell4)
}
