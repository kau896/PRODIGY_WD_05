const watch = document.querySelector('.watch');
const playBtn = document.querySelector('.bi-play-fill');
const addBtn = document.querySelector('.bi-plus');
const add = document.querySelector('.add');
const range = document.querySelector('.range input');
const reset = document.querySelector('.reset');

const min = document.getElementById('min');
const sec = document.getElementById('sec');
const ms = document.getElementById('ms');

//creating inner div
const inner = document.createElement('div')
inner.className = 'inner';


let milisecends = '0'+0;
let secends = '0'+0;
let minutes = '0'+0;
let interval;
let count = 0;


playBtn.addEventListener('click',stopWatch);
//check its running or not then
function stopWatch() {
  if (playBtn.classList.contains('bi-play-fill')) {
    start();
    playBtn.setAttribute('class','bi bi-pause-fill');
    
    addBtn.setAttribute('class','bi bi-plus');
  }else {
    stop();
  };
  
}

//Star time
function start () {
  interval = setInterval(()=> {
    range.value = secends;
    milisecends++;
    //if ms lesthen ten
    milisecends = (milisecends < 10) ? '0' + milisecends : milisecends;
    //check for milisecends
    if (milisecends == 100) {
      secends++;
      secends = (secends < 10) ? '0' + secends : secends;
      milisecends = '0'+0;
    }
    //check for secends
    if (secends == 60) {
      minutes++;
      minutes = (minutes < 10) ? '0' + minutes : minutes;
      secends = '0'+0;
    }
    //check for minutes
    if (minutes == 60) {
      milisecends = '0' + 0;
      secends = '0' + 0;
      minutes = '0' + 0;
    }
    //set Values
    min.textContent = minutes;
    sec.textContent = secends;
    ms.textContent = milisecends;
  },10);

}

//Stop time
function stop(){
  clearInterval(interval)
  playBtn.setAttribute('class','bi bi-play-fill');
  //change icon when time will stop
  addBtn.setAttribute('class','bi bi-stop-fill');
}

addBtn.addEventListener('click',addTime);
//Add time to list
function addTime () {
  if (addBtn.classList.contains('bi-plus')) {
    watch.style.top = '20px';
    
    count++;
    //its contain count And time
    const element = document.createElement('div');
    element.className = 'elem';
    element.classList.add('clr');
    //create a new element for conut
    const counter = document.createElement('h3');
    counter.className = 'count';
    counter.textContent = count;
    //create a new element for time
    const text = document.createElement('h3');
    text.className = 'text';
    text.textContent = `${minutes} : ${secends} : ${milisecends}`;
    //appending
    add.append(inner);
    inner.prepend(element);
    element.append(counter, text);
  }else {
    inner.remove();
    inner.innerText = '';
    count = '';
    watch.style.top = '100px';
  };
  
}


reset.addEventListener('click',resetTime)

function resetTime () {
  //reset time to 00
  milisecends = '0'+0;
  secends = '0'+0;
  minutes = '0'+0;
  clearInterval(interval);
  
  //update values
  min.textContent = minutes;
  sec.textContent = secends;
  ms.textContent = milisecends;
  
  //change icon
  playBtn.setAttribute('class', 'bi bi-play-fill');
  addBtn.setAttribute('class','bi bi-plus');
  
  //Go further
  inner.remove();
  inner.innerText = '';
  count = '';
  watch.style.top = '100px';
  range.value = 0;
}

