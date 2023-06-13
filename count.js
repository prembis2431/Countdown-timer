// Select Countdown container
const countContainer = document.getElementById("countdown-number");

//select button elements
const stopBtn = document.getElementById("stop");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

//select audio elements
const timeoutAudio = document.getElementById("timeout_audio");

//variable to store time count
let remainingTime = 30;

//variable to store time interval
let timer;

//variable to track whether timer is running or not
let isStopped = true;


const startTimer = () => {

    if (isStopped) {

        isStopped = false;
        countContainer.innerHTML = remainingTime;
        timer = setInterval(renderTime,1000);
        timeoutAudio.play();
        
    }
};

const stopTimer = () => {


    isStopped = true;
    if (timer) {

        clearInterval(timer);
        timeoutAudio.play();
    }
   

};

const resetTimer = () => {

    isStopped = true;
    clearInterval(timer);
    remainingTime = 30;
    countContainer.innerHTML = remainingTime;
    timeoutAudio.play();

};



timeoutAudio.src = "http://soundbible.com/grab.php?id=1252&type=mp3";
timeoutAudio.load();



startBtn.onclick= startTimer;
stopBtn.onclick= stopTimer;
resetBtn.onclick= resetTimer;


const renderTime= ()=>{

    remainingTime-=1;


countContainer.innerHTML = remainingTime;


if(remainingTime===0){

    isStopped=true;
    clearInterval(timer);
    timeoutAudio.play();
    remainingTime=30;
}

};

