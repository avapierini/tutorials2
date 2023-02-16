const getTodos = (callback) =>{
const request = new XMLHttpRequest();

request.addEventListener('readystatechange',() => {
  if(request.readyState === 4) && request.status ===200){
  const data = JSON.parse(request.responsiveText);
  callback(undefined,data);
  } else if (request.readyState === 4){
  callback('could not fetch the data',undefined);
  }
});

request.open('GET','todos,json');
request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log('callback fired');
  if(err){
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))