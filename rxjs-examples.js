
// Creating observable
rxjs.of(1, 2, 3)
  //subscribing to observable to listen the result value
  .subscribe((resp) => {
  console.log(resp)
},
(error) => console.log(error),
  () => {console.log('completed')})



var button = document.querySelector('button');


rxjs.fromEvent(button, 'click')
  .subscribe(() => console.log('Clicked!'));