// const request = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.random();
//     setTimeout(() => {
//       if (delay > 0.7) {
//         resolve("Request Success.");
//       } else {
//         reject("Request Failed.");
//       }
//     }, delay);
//   });
// };

// // request()
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// const changeBackground = (color, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = color;
//     doNext && doNext();
//   }, delay);
// };

// const changeBackgroundPromise = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// changeBackgroundPromise("red", 1000)
//   .then(() => changeBackgroundPromise("green", 1000))
//   .then(() => changeBackgroundPromise("blue", 1000));

// const fakeRequestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4500) {
//         reject("Connection timeout");
//       } else {
//         resolve(`Yours Data from ${url}`);
//       }
//     }, delay);
//   });
// };

// const res = fakeRequestPromise("book.com");

// // res
//   .then((data) => {
//     console.log(data);
//     fakeRequestPromise("test")
//       .then((data) => {
//         console.log(data);
//         fakeRequestPromise("agoda")
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// res
//   .then(() => {
//     console.log("success ! book");
//     return fakeRequestPromise("test");
//   })
//   .then(() => {
//     console.log("success ! test");
//     return fakeRequestPromise("test2");
//   })
//   .then(() => {
//     console.log("success test2");
//   })
//   .catch(() => {
//     console.log("Failed");
//   });

// console.log("Hello word");

// async function hello() {
//   return;
// }

// console.log(hello());

// const testArrow = async () => console.log("test Arrow");

// testArrow();

// const login = async (username, password) => {
//   if (!username || !password) {
//     throw "Missing Credentials";
//   }

//   if (password === "hello") return "Welcome !";

//   throw "Invalid password";
// };

// login("hello", "hello")
//   .then(() => {
//     console.log("success");
//   })
//   .catch(() => {
//     console.log("error");
//   });

const changeBackgroundPromise = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// changeBackgroundPromise("red", 1000)
//   .then(() => changeBackgroundPromise("green", 1000))
//   .then(() => changeBackgroundPromise("blue", 1000));

const rainbow = async () => {
  await changeBackgroundPromise("red", 1000);
  await changeBackgroundPromise("orange", 1000);
  changeBackgroundPromise("green", 1000);
};

rainbow();
