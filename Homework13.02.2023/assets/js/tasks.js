"use strict";


// Task1

// function getNumFactorial(num) {

//     if (num == 1) {
        
//         return num;
//     }

//     return num * getNumFactorial(num-1);
    
// }

// console.log(getNumFactorial(10));


// Task2

// let stu1 = {

//     name : "Cavid",
//     surname : "Ismayilzade",
//     age : 22,
//     email : "Cavid@mail.com"

// }

// let stu2 = {

//     name : "Jale",
//     surname : "Abdullazade",
//     age : 18,
//     email : "jalicka@mail.com"

// }

// let stu3 = {

//     name : "Cahandar",
//     surname : "Aliyev",
//     age : 27,
//     email : "gahandar@mail.az;"

// }

// let stu4 = {

//     name : "Mirze",
//     surname : "Beshirov",
//     age : 27,
//     email : "mirze@mail.ru"

// }

// let students = [stu1, stu2, stu3,stu4];


// let filtredDatas = students.filter(m => m.age > 18 && m.age < 25);

// let count = 0;

// for (const item of filtredDatas) {

//     count ++;
    
// }

// console.log(count);


// let filtredEmailDatas = students.filter(m =>  m.email.includes("c"));

// console.log(filtredEmailDatas);

// let count = 0;

// for (const item of filtredEmailDatas) {

//     count++ ;  
// }

// console.log(count);


// Task3


// function getAge(num) {
    
//     if (num >= 1) {
//         let age = 2023 - num ;

//         console.log(age);
//     }
//     else{
//         console.log("Duzgun yas daxil edin");
//     }

   
// }

// getAge(56);