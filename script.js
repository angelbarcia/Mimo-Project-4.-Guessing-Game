let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;


function checkGuess() {
  let inputElement = document.getElementById("guess");
let feedbackElement = document.getElementById ("feedback");
let guess = inputElement.value;
while (attempts > 0){
  attempts--;

if (guess==randomNumber){
  attempts = 0;
feedbackElement.style.color = "green";
feedbackElement.innerHTML = "You got it!";
break;
}
else if (guess<randomNumber){
  feedbackElement.style.color = "red";
  feedbackElement.innerHTML = "Too low! Try again. " + attempts + " remaining.";
  break;
}
else{
  feedbackElement.style.color = "red";
  feedbackElement.innerHTML = "Too high! Try again. " + attempts + " remaining.";
  break;
}
}
if(attempts === 0 && guess!==randomNumber){
feedbackElement.style.color = "red";
feedbackElement.innerHTML = "GAME OVER!" + " The correct number was " + randomNumber;
}
}