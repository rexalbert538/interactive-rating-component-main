'strict';

const cardEl = document.querySelectorAll('.card');
const btns = document.querySelector('.buttons');
const btnSmall = document.querySelectorAll('.small__btn');
const btnSubmit = document.querySelector('.submit__btn');
const text = document.querySelector('.text__highlited');

const rest = function () {
  btnSmall.forEach(small => {
    small.classList.remove('btn--active');
  });
};

const buttons = e => {
  rest();

  if (e.target.classList.contains('small__btn')) {
    e.target.classList.add('btn--active');
    text.textContent = `You selected ${e.target.innerHTML} out of 5`;
  }
};

const submit = e => {
  e.preventDefault();

  cardEl.forEach(card => {
    if (card.classList.contains('hidden')) {
      card.classList.remove('hidden');
    }
  });
};

btns.addEventListener('click', buttons);
btnSubmit.addEventListener('click', submit);
