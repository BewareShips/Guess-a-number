let x = Math.floor(Math.random()* 10 + 1)

document.querySelector('.guessSubmit').onclick = () =>{
  let y = document.querySelector('.guessField').value;
  if(x==y){
    alert("Congratulations you guessed it was "+ x );
  }else if(x<y){
    alert("Sorry try a smaller number"); 
  }else if(x>y){
    alert("Sorry try a greater number")
  }else{
    alert("Please write a number ")
  }
}
