let stopwatch;
var id,count;
let countdown;



// document.getElementById('startStopwatch').addEventListener('click',()=>{
    function start(){
        if(stopwatch){
            clearInterval(stopwatch);
        }
        let startTime = new Date().getTime();
        stopwatch = setInterval(()=>{
        let currentTime = new Date().getTime();
        let elaspedTime = currentTime-startTime;
        let minutes = Math.floor(elaspedTime/60000);
        let seconds = Math.floor((elaspedTime % 60000) / 1000);
        document.getElementById('StopwatchDisplay').innerText = `${minutes}:${(seconds < 10 ? '0':'00')} ${seconds}`;
    },1000);
};

function stop(){
    clearInterval(stopwatch);
};



function reset(){
    if(stopwatch){
        clearInterval(stopwatch);
    }
    
    document.getElementById('StopwatchDisplay').innerText = '0:00:00:00';
};

function startCountDown(){
    if(countdown){
        clearInterval(countdown);
    }
    let countdownTime = parseInt(document.getElementById('countdownInput').value)* 1000;
    let startCount = document.getElementById('startCountdown');
    let endTime = new Date().getTime() + countdownTime;
    countdown = setInterval(()=>{
        let currentTime = new Date().getTime();
        let remainingTime = endTime - currentTime;
        if(remainingTime <= 0){
            clearInterval(countdown);
            document.getElementById('countdownDisplay').innerText = "Time's up!";

        } else {
            let minutes = Math.floor(remainingTime/60000);
            let seconds = Math.floor((remainingTime % 60000)/1000);
            document.getElementById('countdownDisplay').innerText = `${minutes}:${(seconds < 10 ? '0': '00' )}${seconds}`;
        }
    },1000);
};

function endCountDown(){
    clearInterval(countdown);
}

function resetCountDown(){
    clearInterval(countdown);
    document.getElementById('countdownDisplay').innerText = '0:00:00:00';
};

