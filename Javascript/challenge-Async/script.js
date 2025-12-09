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

const checkOddOrEven = async (input) => {
  try {
    const res = await oddOrEven(input);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

checkOddOrEven("a");
checkOddOrEven(1);
checkOddOrEven(2);
