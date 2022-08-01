const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function CustomPromise(executor) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catches = [];

  function resolve(result) {
    if (state !== PENDING) return;

    state = FULFILLED;
    value = result;

    handlers.forEach((h) => h(value));
  }

  function reject(err) {
    if (state !== PENDING) return;

    state = REJECTED;
    value = err;

    catches.forEach((c) => c(err));
  }

  this.then = function (callback) {
    if (state === FULFILLED) callback(value);
    else handlers.push(callback);
  };

  executor(resolve, reject);
}

const doWork = (res, rej) => {
  setTimeout(() => {
    res("Hello world!");
  }, 1000);
};
const doOtherWork = (res, rej) => {
  setTimeout(() => {
    res("How are you?");
  }, 3000);
};

let someText = new Promise(doWork);

someText
  .then((val) => {
    console.log("1st log: " + val);
    return new Promise(doOtherWork);
  })
  .then((val) => {
    console.log("2nd log: " + val);
  });

setTimeout(() => {
  someText.then((val) => {
    console.log("3rd log: " + val);
  });
}, 3000);
