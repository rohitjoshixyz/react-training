// export const greet = userNames => { 
//   userNames.map((name) => console.log(`Hello ${name}`))
// }

const greet = userNames => { // named export {} required while importing
  userNames.map((name) => console.log(`Hello ${name}`))
}

export const add = (a, b) => console.log(a + b); // named export {} required while importing
export const sub = (a, b) => console.log(a - b);

export default greet