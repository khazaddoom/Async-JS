// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     var result = await resolveAfter2Seconds();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();



// var test = () => {

//     console.log('ES6!')

// };

// test();

setTimeout(() => {
    console.log('ES6: I am delayed!')    
 }, 2000);