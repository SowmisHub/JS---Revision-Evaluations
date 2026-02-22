function createRateLimiter(limit, interval){
    let count = 0;
    setInterval(()=>{
        count =0;
        console.log("counter is reset");
    },interval);

    return function(){
        if(count<limit){
            count++;
            return "call allowed";
        }else{
            return "Rate limit exceeded"
        }
    };
}

const limiter = createRateLimiter(3,5000);
console.log(limiter())
console.log(limiter())
console.log(limiter())
console.log(limiter()) 