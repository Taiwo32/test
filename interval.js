setTimeout(
    () => {
        console.log('in 3 seconds timeout');
        clearInterval(int);
    },
    3000
)
const int = setInterval(
    () => {
        console.log("in the interval")
    },
    
)
 