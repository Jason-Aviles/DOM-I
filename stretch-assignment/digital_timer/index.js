let secoundOne = document.getElementById('secondOnes')
let time=0;

let running=0;


function start() {
    if (running == 0){
        running=1
        increment();

    }else{
        running = 0
    }
}

function increment(){

    setTimeout(function() {
        time++;
        //var mins =Math.floor(time/10/60) ;
        var secs = Math.floor(time/10);
        var tenths = time% 10;
        secoundOne.textContent= secs;
        increment()
    },100)
}

start()