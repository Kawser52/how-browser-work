function doSomething (){
    console.log('Kita r kiti');
}

setTimeout(function(){
    console.log('abul jobbar ki khai');
}, 5000)

setTimeout(()=>{
  console.log('useing arrow funtion');
},2000)
doSomething();