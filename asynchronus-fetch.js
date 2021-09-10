console.log('11111')
console.log('12111')
setTimeout(()=>{
    console.log('practice asynchornus fetch');
},5000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log('12111')
for (let i=0;i<1000;i++){
    console.log(i);
}