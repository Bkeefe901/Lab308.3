// Part 1: Fizz Buzz

// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.

// Accomplish the following:

// Loop through all numbers from 1 to 100.

// If a number is divisible by 3, log “Fizz.”

// If a number is divisible by 5, log “Buzz.”

// If a number is divisible by both 3 and 5, log “Fizz Buzz.”

// If a number is not divisible by either 3 or 5, log the number.

let x = 1;
let str = 'Fizz ';
let str2 = 'Buzz';

while(x <= 100){
    if(x % 3 == 0 && x % 5 == 0){
        console.log(str + str2);
    }
    else if(x % 3 == 0){
        console.log(str);
    }
    else if(x % 5 == 0){
        console.log(str2);
    }
    else{
        console.log(x);
    }
    x++;
}







// Part 3: Feeling Loopy

// Your task is to write a script that accomplishes the following:

// // Loop through the characters of a given CSV string.

// // Store each “cell” of data in a variable.

// // When you encounter a comma, move to the next cell.

// // When you encounter the “\r\n” sequence, move to the next “row.”

// // Log each row of data.

// // You do not need to format the data, the following works well.

// // console.log(cell1, cell2, cell3, cell4);

// You can make the following assumptions:

// // There will only be 4 cells per row.

// // There will be no escaped characters other than “\n”.

// // Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.





//////////////////////////////////////////////////////////////////////


let str3 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell1 = ``;
let cell2 = ``;
let cell3 = ``;
let cell4 = ``;


// // an iterable loop that can go through each character in a the string


for(let a = 0; a < 4; a++){

for(let i = 0; i <= str3.length; i++){
    if(str3[i] != `,`){
    cell1 += str3[i];
    } else{
        break
    }
}

for(let i = cell1.length + 1; i <= str3.length; i++){
    if(str3[i] != `,`){
    cell2 += str3[i];
    } else{
        break
    }
}

for(let i = cell1.length + cell2.length + 2; i <= str3.length; i++){
    if(str3[i] != `,`){
    cell3 += str3[i];
    } else{
        break
    }
}

// // `\n` marks the end of a row therefore `\n` also marks the end of the 4th cell in a row
for(let i = cell1.length + cell2.length + cell3.length + 3; i <= str3.length; i++){
    if(str3[i] != `\n`){
    cell4 += str3[i];
    // // There will only be 4 cells per row, so after storing 4 cell variables we can console.log the four for that row then recycle the variables for the next row
    } else{
        console.log(cell1, cell2, cell3, cell4);
        str3 = str3.replace(str3.substring(0, i), "");
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
        break
    }

}

}

// str3 = str3.replace(str3.substring(0, 23), "");

// console.log(str3);
// console.log(str3[0], str3[1]);

