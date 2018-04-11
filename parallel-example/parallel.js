function createRandomBigNumber() {
  const timeToCalculate = Math.random() * 2000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = parseInt(Math.random() * 9999999);
      console.log(`Beregnede ${result} efter ${timeToCalculate} ms`);
      resolve(result);
    }, timeToCalculate);
  });
}

const promiseArray = [];
for(let i = 0; i < 10; i++) {
  promiseArray.push(createRandomBigNumber());
}

Promise.all(promiseArray).then(results => {
  const sum = results.reduce((accumulator, current) => accumulator + current);
  console.log(`I alt: ${sum}`);
});