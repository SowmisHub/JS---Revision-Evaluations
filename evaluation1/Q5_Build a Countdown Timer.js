function createCountdown(seconds, onTick, onComplete){
    let remaining = seconds;
    let timerId=null;
    let running= false;

    function tick(){
        if(!running) return;

        onTick(remaining);
        remaining--;
        if(remaining<0){
            running =  false;
            onComplete();
            return;
        }
        timerId=setTimeout(tick, 1000);

    }
    function start(){
        if(!running){
            running = true;
            tick()
        }
    }
    function pause(){
      running = false;
            clearTimeout(timerId)
    }
    function resume(){
        if(!running && remaining>=0){
            running = true;
            tick();
        }
    }
    start();
    return {pause, resume}
}

const timer = createCountdown(3,(time)=>console.log("remaining: ", time), ()=>console.log("completed"));
setTimeout(()=>{
    timer.pause();
    console.log("paused");
},1500)

setTimeout(()=>{
    timer.resume();
    console.log("resumed");
},2500)