import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

let timeToCount = 0;
let isStarted = false;

const currentDate = Date.now();
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
startBtn.setAttribute('disabled', true);

const datePicker = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    if (currentDate < selectedDates[0]) {
      if (isStarted) {
        Notify.failure('The countdown has already started');
        return;
      }
      startBtn.removeAttribute('disabled');
      timeToCount = selectedDates[0].getTime();
      return timeToCount;
    }
    if (currentDate > selectedDates[0] && isStarted) {
      Notify.failure('Please choose a date in the future');
      startBtn.setAttribute('disabled', true);
    }
  },
});

startBtn.addEventListener('click', handleCountDown);

function handleCountDown() {
  startBtn.setAttribute('disabled', true);
  Notify.success('Starting countdown');
  isStarted = true;

  setInterval(() => {
    const currenDate = Date.now();
    let deltaTime = timeToCount - currenDate;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
    // console.log(convertMs(deltaTime));
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
