let intervalID;
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());

const startIntervalmethod = function () {
  intervalID = setInterval(changeBGcolor, 1000);

  function changeBGcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopIntervalmethod = function () {
  clearInterval(intervalID);
};
const start = document
  .querySelector('#start')
  .addEventListener('click', startIntervalmethod);
const stop = document
  .querySelector('#stop')
  .addEventListener('click', stopIntervalmethod);
