const start = document.querySelector("#start");
const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minutes");
const pause = document.querySelector("#pause");
const stop = document.querySelector("#stop");

// Загальні змінні
let s = 0;
let m = 0;
let h = 0;
let timer;

// Основні функції
const counterWork = () => {
  if (s < 10 || m<10 || h<10) {
    seconds.innerHTML = `0${s}`;
    minutes.innerHTML=`0${m}`;
    hours.innerHTML=`0${h}`;
  }
  if (s>=10 && s<=59) {
    seconds.innerHTML = s;
  }
  if (s >59) {
    s = 0;
    seconds.innerHTML='00';
    m++;
    minutes.innerHTML = `0${m}`;
  }
  if(m>=10 && m <=59){
    minutes.innerHTML=m;
  }
  if (m >59) {
    m = 0;
    minutes.innerHTML='00';
    h++;
    hours.innerHTML = `0${h}`;
  }
  if(h>=10){
    hours.innerHTML=h;
  }
  s++;
};

// При старті  
const onStart = () => {
  start.innerHTML='Start';
  if (timer) console.log('dont do this');
  else{
  timer = setInterval(counterWork, 1000);
  }
};

// При паузі
const onPause = () => {
  clearInterval(timer);
  timer=false;
  start.innerHTML='Resume';
};

// При стопі
const onStop = () => {
  start.innerHTML='Start';
  clearInterval(timer);
  timer=false;
  s = 0;
  m = 0;
  h = 0;
  seconds.innerHTML='00';
  minutes.innerHTML='00';
  hours.innerHTML='00';
  
};

// Заборона повторного запуску циклу при вже запущеному
const checkButton=()=>{
  if(counterWork) start.removeEventListener('click',onStart);
  else start.addEventListener("click", onStart);
}

// event listeners
stop.addEventListener("click", onStop);
start.addEventListener("click", onStart);
pause.addEventListener("click", onPause);
