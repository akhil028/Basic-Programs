// 1. Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

// var n = 10;
// for(i=0; i<=n; i++) {
//     for (j=0; j<=n; j++) {

//     var res = i + j;
//     console.log(res)
//     }
//     console.log(i);
    
//}

// 2. Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

// *************To be asked************


// var n=17;
// for(i=0; i<=n; i++) {
//         if(i % 3 == 0 || i % 5) {
//             var res1 = `If ${i} / 3 answer ==> ${i/3}   and   remainder ==> ${i%3}:   Multiples of 3 ==> ${i}`
//             var res2 = `If ${i} / 5 answer ==> ${i/5}   and   remainder ==> ${i%5}:   Multiples of 5 ==> ${i}`
//             console.log(res1);
//             console.log(res2);
            
//         }
//         }


// 3. Write a program that asks the user for their name and greets them with their name.

// var name = 'Ram';

// console.log(`Hello ${name}, how are you today?`)



// 4. Write a program that prints a multiplication table for numbers up to 12.

// for(i=1; i<=10; i++) {
//     for (j=1; j<=12; j++) {
//         var res = j*i;
//         console.log(`Table of ${j} x ${i} = ${res}`);

//     }
//     console.log('\n')
// }


// 5. Write a program that prints all prime numbers.

// var n = 11;
// var flag = 0;
// for(var i =2; i<= n/2; i++) {
//     if(n%i == 0){
//         flag = 1
//     }
// }

// if(flag == 1) {
//     console.log('not a prime number')
// }else {
//     console.log(`${n} is a prime number`)
// }


// function prime(start, end) {

//     for(i=start; i<=end; i++) {
//         var flag=0;
//         for(var j=2; j<=i/2; j++) {
//             if(i%j == 0) {
//                flag = 1
//             }
//         }
//         if(flag == 0) {
//             console.log(i +' Its prime number');
//         }
//         else{
//             console.log(i +' Not a prime number');
//         }
//     }
// } prime(1, 50);








// 6. Write a program that prints the next 20 leap years.

// var year = 2007;
// if(year / 4) {          // 2000/4= 500
//     var leap = `${year/4}`  //leap = 500
//    // console.log(leap)   // display leap = 500
//     if(leap % 2 === 0 || leap % 2 === 1) {  //   500%2 = 0
//         var leap1 = `${leap%2}`  //leap1 = 0
//        // console.log(leap1);      // display = leap1 = 0
//         if(year / 100) {       //   2000/ 100 
//             var leap2 = `${year/100}`       // leap2 = 20 
//            // console.log(leap2);     //display leap2 = 20
//             if(year / 400){         //2000 / 400
//                 var leap3 = `${leap2/400}`      //leap3 = 5
//                 console.log("its a leap year: " + year);
//             }
//         }
//     }else if (leap1 != 0) {

//         console.log("Not a leap year: " + year);
//     }
// }


// 7. Write a function that returns the largest element in a list.


// var larg = [23,45,11,4,23];


// function biggestElement(arr) {
//     var max = arr[0];

//     for(var i=0; i<arr.length; i++) {

//         if(max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// var maxedVal = biggestElement(larg);

// console.log('Maxed Value '+maxedVal);

// //calling function again from above pgm
// var abc = [43,64,75,86,97,64,85];

// var max = biggestElement(abc);
// console.log(max);




// 8. Write function that reverses a list, preferably in place.

// var rev = [1,2,3,4,5,6,7,8,9,10,11,12];

// //var arr2 = [];

// // for(var i=rev.length-1; i>=0; i--) {
// //     // arr2.push(rev[i]);
// // }

// //without using another array::
// for(var i= 0; i< rev.length/2; i++){        
//     var temp = rev[i];
//     rev[i] = rev[(rev.length-1)-i];
//     rev[(rev.length-1)-i] = temp;
// }

// console.log(rev);

// 9. Write a function that checks whether an element occurs in a list.

// var a =[1,2,3,4,5];

// var check = 4;
// var found = false;
// for(i=0; i<=a.length; i++) {
//     if(check == a[i]) {
//         found = true; 
//     }

// }

// if(found) {
//     console.log(`It is available in the list ${check}`)
// } else {
//     console.log('Not available in the list')
// }



// 10. Write a function that returns the elements on odd positions in a list.


// var sp = [2,3,4,5,6,7];

// function oddElements(arr) {
//     var odd = []

//     for(var i=0; i<arr.length; i++) {
//         if(i % 2 != 0) {
//             odd.push(arr[i]);
    
//         } 
//     }
//     return odd;  

// }
// var res = oddElements(sp)

// console.log(res);



// 11. WAP to count how many digits in a number

//without any loop::
// var count = 0;
// var num = 10;

// var count = (Math.log10(num) + 1);

// console.log(`total digits: ${count}`)

// return 0;


//with loop::

var count = 0;
var num = 120012;


while(parseInt(num) != 0) {      //100 > 0 =yes
    count = count + 1;      // 0+1
    console.log(num);
    
    num = num / 10;         // 100/10=10
}
console.log(`total digits : ${count}`)

