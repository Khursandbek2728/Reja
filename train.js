// console.log("Jack Ma maslahatlari");
// const list = [
   //  "yaxshi talaba boling", //0-20
    // "togri boshliq tanlag va koproq xato qiling", //20-30
    // "uzingizga ishlashingizni boshlang", //30-40
    // "siz kuchli bo'lgan narsalarni qiling", //40-50
    // "yoshlarga investitsiya qiling", //50-60
    // "endi dam oling, foydasi yoq endi", //60
// ];

// function maslahatBering(a, callback) {
   // if(typeof a !== 'number') callback("Insert a number", null);
   // else if (a <= 20) callback(null, list[0]); 
   // else if (a > 20 && a <= 30) callback(null, list[1]); 
   // else if (a > 30 && a <= 40) callback(null, list[2]); 
   // else if (a > 40 && a <= 50) callback(null, list[3]); 
   // else if (a > 50 && a <= 60) callback(null, list[4]); 
   // else {
    // setTimeout(function() {
     // callback(null, list[5]); 
   // }, 1000);
 // }
// }
// console.log('passed here 0');
// maslahatBering(70, (err, data) => {
   // if(err) console.log("ERROR:", err);
   // else {
   // console.log(data);
   // }
// });
// console.log("passed here 1");

//CALLBACK FUNCTION
// function maslahatBering(a, callback) {
   // if(typeof a !== 'number') callback("Insert a number", null);
   // else if (a <= 20) callback(null, list[0]); 
   // else if (a > 20 && a <= 30) callback(null, list[1]); 
   // else if (a > 30 && a <= 40) callback(null, list[2]); 
   // else if (a > 40 && a <= 50) callback(null, list[3]); 
   // else if (a > 50 && a <= 60) callback(null, list[4]); 
   // else {
    // setTimeout(function() {
     // callback(null, list[5]); 
   // }, 5000);
 // }
// }
// console.log('passed here 0');
// maslahatBering(65, (err, data) => {
   // if(err) console.log("ERROR:", err);
   // else {
   // };
   // console.log('javob:', data);
// });
//console.log('passed here 1');


//22-MAVZU

//ASYNC function
// async function maslahatBering(a) {
    // if(typeof a !== 'number') throw new Error("Insert a number", null);
    // else if (a <= 20) return list[0]; 
    // else if (a > 20 && a <= 30) return list[1]; 
    // else if (a > 30 && a <= 40) return list[2]; 
    // else if (a > 40 && a <= 50) return list[3]; 
    // else if (a > 50 && a <= 60) return list[4];
    // else {
      // return new Promise((resolve, reject) => {
        // setTimeout(() => {
          // resolve(list[5]);
       // }, 5000);
     // });
   // }
 // }
 
 
 // call via then/catch
 // console.log('passed here 0');
 // maslahatBering(25)
 // .then(data => {
    // console.log('javob:', data);
 // })
 // .catch((err) => {
    // console.log('ERROR:', err);
 // });
 // console.log("passed here 1");

 //call via async/await
 // async function run() {
    // let javob = await maslahatBering(25);
    // console.log(javob);
    // javob = await maslahatBering(70);
    // console.log(javob);
    // javob = await maslahatBering(41);
    // console.log(javob);
 // }
 // run();

 // A-TASK

 // function countLetter(letter, word) {
 // let count = 0;
 // for (let char of word) {
    // if (char === letter) {
        // count++;
    // }
 // }
 // return count;
// }



// 26.11.2024
// B-TASK

function countDigits(inputString) {
   const digits = inputString.match(/\d/g);
   return digits ? digits.length : 0;
}

console.log(countDigits(("ad2a54y79wet0sfgb9")));
//7