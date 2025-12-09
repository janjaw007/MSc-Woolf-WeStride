console.log("hello world!");

const oddOrEven = (data) => {
  return new Promise((resolve, reject) => {
    if (!Number(data)) {
      reject("error please input number");
    } else if (data % 2 === 0) {
      setTimeout(() => {
        resolve("even");
      }, 2000);
    } else {
      setTimeout(() => {
        resolve("odd");
      }, 1000);
    }
  });
};

oddOrEven("a")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

oddOrEven(1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

oddOrEven(2)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
