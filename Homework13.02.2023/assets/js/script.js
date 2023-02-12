"use strict";


// function getNumbers(num){

//    console.log(num);

//     let number = num-1;

//     if (number > 0) {

//         getNumbers(number);
//     }

// }

// getNumbers(10);





// function getNumbers(num){

//     let number = num-1;

//     if (number > 0) {

//         getNumbers(number);

//     }

//     console.log(num);

// }

// getNumbers(20);


// function sumOfNums(num){

//     if(num == 1){
//         return num;
//     }else{
//         return num +  sumOfNums(num-1)
//     }
// }

// console.log(sumOfNums(5));


//Loops

// let numbers = [11,4,6,8,9];

// numbers.forEach((element,index,array) => {

//     if (element == 6) {

//         console.log(element);
//     }


//     numbers[index] = element*2;
//     array[index] = element*2;
//     console.log("index - " + "" + index,element,array);
// });

//console.log(numbers);



// let numbers = [11,4,6,8,9];

// for (const item of numbers) {

//     console.log(item);

// }


// let user1 = {

//     name : "Mirze",
//     surname: "Beshirzade"
// }

// for (const key in user1) {

//     if (key == "name") {
//         console.log(user1[key]);
//     }

// console.log(key + " " + user1[key]);

//    console.log(key);

//}



// let user1 = {
//     id : 1,
//     name : "Mirze",
//     surname: "Beshirzade"
// }


// let user2 = {
//     id : 2,
//     name : "Jale",
//     surname: "Abdullazade"
// }


// let user3 = {
//     id : 3,
//     name : "Cinare",
//     surname: "Ibadova"
// }


// let users = [user1,user2,user3];

// for (const user of users) {

//     for (const key in user) {

//         console.log(`key : ${key}, value : ${user[key]}`);
//          console.log("key"+ " : " + key , "value" + " : "  +user[key])
//     }


//     console.log(user.name + " " + user.surname);
// }



// let count = 0;
// for (const user of users) {

//     for (const key in user) {
//         if (key == "name" && user[key] == "Mirze") {

//           count++;  
//         }
//     }
// }


// console.log(count);

// let count  = 0;

// for (const user of users) {

//     if (user.name == "Mirze" && user.surname == "Beshirzade") {

//         count++;

//     }

// }

// console.log(count);



// let nums1 = [1,4,6,8,9]

// let newArr = nums1.map(m=>{
//     // console.log(m)
//      return m*2;
// })

//  console.log(newArr);

//  console.log(nums1);



//Callback



//let nums = [1, 2, 3, 4, 5, 6];


// function numsOfOdd(num) {

//     return num % 2 != 0  
// }


// function numsOfEven(num) {

//     return num % 2 == 0  
// }


// function numsOfGrateThanFive(num) {

//     return num > 5 
// }

// function calculateNums(arr,callback) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             sum +=arr[i]
//         }
        
//     }
//     console.log(sum);
    
// }

//calculateNums(nums,numsOfOdd)

//calculateNums(nums, m => m %2 != 0 && m > 3)

//calculateNums(nums,numsOfEven)

//calculateNums(nums,m => m % 2 == 0)

//calculateNums(nums,numsOfGrateThanFive)

//calculateNums(nums, m => m > 5)






// function sumOfOdd(arr) {

//     let sum = 0;
    
//     for (let i = 0; i < arr.length; i++) {


//         if (arr[i] % 2 != 0) {

//             sum += arr[i];
//         }

//     }

//     console.log(sum);
// }

// function sumOfEven(arr) {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {


//         if (arr[i] % 2 == 0) {

//             sum += arr[i];
//         }

//     }

//     console.log(sum);
// }


// function sumOfGraterThanFive(arr) {

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 5) {

//             sum += arr[i]
//         }

//     }

//     console.log(sum);


// }

// sumOfOdd(nums);

// sumOfEven(nums);

// sumOfGraterThanFive(nums);



// let user1 = {
//     id : 1,
//     name : "Mirze",
//     surname: "Beshirzade",
//     age : 27,
// }


// let user2 = {
//     id : 2,
//     name : "Jale",
//     surname: "Abdullazade",
//     age : 18
// }


// let user3 = {
//     id : 3,
//     name : "Cinare",
//     surname: "Ibadova",
//     age : 25
// }

// let user4 = {
//     id : 4,
//     name : "Elekber",
//     surname: "Hesenov",
//     age : 20
// }



// let users = [user1,user2,user3,user4];

// let filteredDatas = users.filter(m =>m.age > 20);

// console.log(filteredDatas);

// for (const item of filteredDatas) {
    
//     console.log(item.name + " " +item.surname)
// }