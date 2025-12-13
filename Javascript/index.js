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

// changeBackgroundPromise("red", 1000)
//   .then(() => changeBackgroundPromise("green", 1000))
//   .then(() => changeBackgroundPromise("blue", 1000));

// const changeBackgroundPromise = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };
// const rainbow = async () => {
//   await changeBackgroundPromise("red", 1000);
//   await changeBackgroundPromise("orange", 1000);
//   changeBackgroundPromise("green", 1000);
// };

// rainbow();

// console.log("hello docker!");

// XML method
// const req = new XMLHttpRequest();

// req.open("GET", "https://swapi.dev/api/people/1");
// req.send();

// req.onload = function () {
//   console.log("success");
//   const res = JSON.parse(this.responseText);
//   console.log(res);
// };

// req.onerror = function () {
//   console.log("failed");
//   console.log(this);
// };

//Fetch Api

// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/2");
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch async await
// const makeRequest = async () => {
//   try {
//     const res = await fetch("https://swapi.dev/api/people/1");
//     const data = await res.json();

//     console.log(data);

//     const res2 = await fetch("https://swapi.dev/api/people/2");
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (error) {
//     console.log(error);
//   }
// };

// makeRequest();

// axios
// console.log("hello world");
// console.log(axios.get("https://swapi.dev/api/people/2"));

// axios
//   .get("https://swapi.dev/api/peoplee/2")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const makeAxiosRequest = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data.name);
  } catch (error) {
    console.log(error);
  }
};

makeAxiosRequest(1);
makeAxiosRequest(2);
makeAxiosRequest(3);
