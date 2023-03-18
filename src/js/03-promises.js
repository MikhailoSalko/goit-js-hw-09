import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const form = document.querySelector('.form');
let formInput = {};

form.addEventListener('submit', handleSubmitForm);
form.addEventListener('input', debounce(handleInputValues, 200));

function handleInputValues(e) {
  formInput[e.target.name] = Number(e.target.value);

  // console.log(formInput);
  // return formInput;
}

function handleSubmitForm(e) {
  e.preventDefault();
  // console.log(formInput);

  let { delay, step, amount } = formInput;
  for (let i = 0; i < amount; i++) {
    let position = i + 1;
    delay += step;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }

  e.currentTarget.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
