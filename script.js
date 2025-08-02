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

// let str3 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// let cell1 = ``;
// let cell2 = ``;
// let cell3 = ``;
// let cell4 = ``;

// let cell1Length = 1;
// let cell2Length = 1;
// let cell3Length = 1;
// let cell4Length = 1;

// let commaIndex = -1;




// for(let i = 0; i <= str3.length; i++){
//     if(str3[i] != `,`){
//         cell1 += str3[i];
//     }
//     else{

//         continue
//     }

//     console.log(cell1);
// }




// for(let i = 0; i <= str3.length; i++){
//     // if(str3[i] == `,`){
//     //     commaIndex = i;
//     // }
//     if(str3[i] == `\n`){
//         console.log(cell1, cell2, cell3, cell4);
//         cell1 = ``;
//         cell2 = ``;
//         cell3 = ``;
//         cell4 = ``;
//     }
//     else if(cell1.length == 0){

//     }
//     // else if(cell4.length == 0){
//     //     if(cell3.length == 0){
//     //         if(cell2.length == 0){
//     //             cell1 += str3[i];
//     //             if(str)
//     //         }
//     //     }
//     // }
    
// }

// console.log(cell1, cell2, cell3, cell4);







// for(let i = 0; i <= str3.length; i++){
//     if(str3[i] != `\n`){
//         if(str3[i] != `,`){
//             if(cell1.length + 1 != cell1Length){
//                 cell1 += str3[i]
//                 cell1Length += 1;
//             }
//             else if(cell2.length + 1 != cell2Length){
//                 cell2 += str3[i]
//                 cell2Length += 1;
//             }
//             else if(cell3.length + 1 != cell3Length){
//                 cell3 += str3[i]
//                 cell3Length += 1;
//             }
//             else if(cell4.length + 1 != cell4Length){
//                 cell4 += str3[i]
//                 cell4Length += 1;
//             }
//         }
//     }
//     else{
//         console.log(cell1, cell2, cell3, cell4);
//     }
// }

// another idea is to find where the commas are up to \n and the use those values to run a loop up to that comma and \n and save to each cell then log.



//  for(let i = 0; i <= str3.length; i++){
//     if(str3[i] != `,`){
//         cell1 += str3[i]
//         continue
//     } else{
//         i++
//     }
//     if(str3[i] != `,`){
//         cell1 += str3[i]
//         continue
//     } else{
//         i++
//     }
//     if(str3[i] != `,`){
//         cell1 += str3[i]
//         continue
//     } else{
//         i++
//     }
//     if(str3[i] != `\n`){
//         cell1 += str3[i]
//         continue
//     } else{
//         i++
//     }

//     console.log(cell1, cell2, cell3, cell4)
// }








// for(let i = 0; i <= str3.length; i++){
//     if(str3[i] != `,`){
//         cell1 += str3[i]
//     }
//     else{ 
//         break }
//     if(str3[i] != `,`){
//         cell2 += str3[i]
//     }
//     else{ 
//         break }
//     if(str3[i] != `,`){
//         cell3 += str3[i]
//     }
//     else{ 
//         break }
//     if(str3[i] != `\n`){
//         cell4 += str3[i]
//     }
//     else{ 
//         break }
// }
















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



// What do we need?
// // an iterable loop that can go through each character in a the string

// for(let i = 0; i <= str3.length; i++){

// }

// // // we need to store each cell of data in a variable (every character up to the next comma)

// if(str3[i] != `,`){
//     cell1 += str3[i];
// }

// if(str3[i] != `,`){
//     cell2 += str3[i];
// }

// if(str3[i] != `,`){
//     cell3 += str3[i];
// }


// // // `\n` marks the end of a row therefore `\n` also marks the end of the 4th cell in a row

// if(str3[i] != `\n`){
//     cell4 += str3[i];
//     // // There will only be 4 cells per row, so after storing 4 cell variables we can console.log the four for that row then recycle the variables for the next row
//     console.log(cell1, cell2, cell3, cell4);
// }




//////////////////////////////////////////////////////////////////////


let str3 = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let cell1 = ``;
let cell2 = ``;
let cell3 = ``;
let cell4 = ``;


// // an iterable loop that can go through each character in a the string


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
        break
    }

}


