//because therer is form in html so we dont apply click event insted we will apply submit event!!

// so we have to access whole form here

//this usecase will give you empty values
// const height = parseInt(document.querySelector('#height').value);

const form = document.querySelector('form');
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = 'please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //shown in the result

    result.innerHTML = `<span>${bmi}</span>`;
  }
});
