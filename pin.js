var pin = 226 ;
// console.log(pin)
if (pin === 222){
    setTimeout(
        () =>{
            console.log('your time is up')
            clearInterval(int)
        }, 3000
    )
    const int =  setInterval(
        () => {
            console.log("I Love Coding")
        },
        )
     
   
}
else{
    console.log("it is not correct")
}

module.exports = {
    pin
}