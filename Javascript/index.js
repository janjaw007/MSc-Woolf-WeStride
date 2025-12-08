const request = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.random();
    setTimeout(() => {
      if (delay > 0.7) {
        resolve("Request Success.");
      } else {
        reject("Request Failed.");
      }
    }, delay);
  });
};

request()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
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
