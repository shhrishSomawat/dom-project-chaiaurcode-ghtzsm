let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    switch (event.target.id) {
      case 'grey':
        body.style.backgroundColor = 'grey';
        break;
      case 'yellow':
        body.style.backgroundColor = 'yellow';
        break;
      case 'blue':
        body.style.backgroundColor = 'blue';
        break;
      case 'pink':
        body.style.backgroundColor = 'pink';
        break;
      case 'white':
        body.style.backgroundColor = 'white';
        break;
      default:
        console.log('click on boxes');
      // code block
    }
  });
});
