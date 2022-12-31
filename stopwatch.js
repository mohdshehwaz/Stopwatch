// fetch buttons here using ids
var startBtn = document.getElementById('startBtn');
var stopBtn = document.getElementById('stopBtn');
var resetBtn = document.getElementById('resetBtn');
// fetch timer details using ids here
var hourId = document.getElementById('hour');
var minId = document.getElementById('minute');
var secId = document.getElementById('second');
var miliId = document.getElementById('mili');
var hour =0;
var minute=0;
var second = 0;
var mili = 0;
var interval = true;
var stopTimer=0;
// reset btn event listeners define here
resetBtn.addEventListener('click',()=>{
    hourId.textContent = "00";
    minId.textContent = "00";
    secId.textContent ="00";
    miliId.textContent = "00";
    hour=0;
    minute=0;
    second=0;
    mili=0;
    interval=false;
    startBtn.disabled =false;
});
// stop button event listeners define here
stopBtn.addEventListener('click',()=>{
    startBtn.disabled = false;
    interval = false;
});
// starts buttons event listenrs start from here
startBtn.addEventListener('click',()=>{
    interval=true;
    startBtn.disabled = true;
    startTimer();
});
function startTimer(){
    if(interval){
        mili +=1;
        if(mili==100){
            mili =0;
            second = second+1;
        }
        if(second==60){
            second=0;
            minute +=1;
        }
        if(minute==60){
            minute=0;
            second=0;
            hour +=1;

        }
        let hourData = hour;
        let minuteData = minute;
        let secondData = second;
        let miliData = mili;
        if(hourData<10){
            hourData = "0" + hourData;
        }
        if(minuteData<10){
            minuteData = "0" +minuteData;
        }
        if(secondData<10){
            secondData = "0" + secondData;

        }
        if(miliData<10){
            miliData = "0" + miliData;
        }
        hourId.innerHTML = hourData;
        minId.innerHTML = minuteData;
        secId.innerHTML = secondData;
        miliId.innerHTML = miliData;
        setTimeout(startTimer,10);
    }
    
}
