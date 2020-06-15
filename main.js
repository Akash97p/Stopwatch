const startButton = document.getElementById('strbtn');
const pauseButton = document.getElementById('psbtn');
const resetButton = document.getElementById('rstbtn');
const divTimer = document.getElementById('timer');

let hoverFlag = false;
let milliSecond = 0;
let second = 00;
let minut = 00;
let hour = 00;
let countFlag = 00;
var a;
let resumeFlag = 0;

/*
divTimer.addEventListener('mouseover', function (e) {
    divTimer.style.background = '#996600'; 
    hoverFlag = !hoverFlag;
    stopWatch(0);
});

divTimer.addEventListener('mouseout', function (e) {
    divTimer.style.background = '#fac04d';
    hoverFlag = !hoverFlag;
    stopWatch(1);
});*/


startButton.addEventListener('click', function (e) {
    if(startButton.className === 'button-en'){
        countFlag = 1;
        stopWatch(countFlag);
        startButton.className = "button-dis";
        pauseButton.className = "button-en";
        resetButton.className = "button-en";
    }
});


pauseButton.addEventListener('click', function (e) {
    if(pauseButton.className === 'button-en'){
        countFlag = 0;
        stopWatch(countFlag);
        startButton.className = "button-en";
        pauseButton.className = "button-dis";
        resetButton.className = "button-en";
    }
});

resetButton.addEventListener('click', function (e) {
    if(resetButton.className === 'button-en'){
        let rcf = confirm("Do you want to Reset Timer !");
        if (rcf === true){
            countFlag = -1;
            stopWatch(countFlag);
            startButton.className = "button-en";
            pauseButton.className = "button-dis";
            resetButton.className = "button-dis";
        }
    }
});

function stopWatch(b){
    if (b===1){                             // Strart
        milliSecond++;
        if (milliSecond === 60){milliSecond = 00; second++;}
        if (second === 60){second = 00; minut++; }
        if (minut === 60){minut = 00; hour++;}
        //if (resumeFlag === 1){startButton.textContent ='Start';}
        else{
            if (milliSecond<10){
            divTimer.textContent = hour+':'+minut+':'+second+':0'+milliSecond;
            a = setTimeout(stopWatch,16.6666666666666666666666666666667,b);
            console.log(milliSecond);}
            else {
            divTimer.textContent = hour+':'+minut+':'+second+':'+milliSecond;
            a = setTimeout(stopWatch,16.6666666666666666666666666666667,b);
            console.log(milliSecond);}
        }
    }
    else if ( b === 0 ){clearTimeout(a);startButton.textContent = 'Resume'; resumeFlag=1;}   // Pause
    else if (b === -1 ){       
        resumeFlag=0;             // Reset
        startButton.textContent = 'Start'
        hour = minut = second = milliSecond = 00 ; 
        clearTimeout(a);
        divTimer.textContent = hour+':'+minut+':'+second+':'+milliSecond;
    }  
}