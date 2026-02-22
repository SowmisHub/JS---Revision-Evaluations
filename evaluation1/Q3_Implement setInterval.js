function mySetInterval(callback, delay){
    let stop = false;
    function run(){
        if(stop) return;
        callback();
        timerId= setTimeout(run,delay);
    }
    let timerId = setTimeout(run,delay);
    return{
        stop: function(){
            stop = true;
            clearTimeout(timerId);
        }
    }
}

const timer = mySetInterval(()=>{
    console.log("Running");
},1000)

setTimeout(()=>{
    timer.stop();
    console.log("stopped")
},4000)