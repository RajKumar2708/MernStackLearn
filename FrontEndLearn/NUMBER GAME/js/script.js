var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var score=document.getElementById("score")
var greet=document.getElementById("greet")
var randomnumber=Math.floor(Math.random()*10)
var scoree=0;

function check(){
    var enterednumber=guessnumber.value
    if(randomnumber==enterednumber){
        result.textContent="Your Guessing is Right"
        greet.textContent="CONGRATS! GUESS NEXT"
        scoree=scoree+1
        score.textContent="Your Current Score : "+scoree
    }
    else{
        result.textContent="Your Guessing is Wrong"
        greet.textContent="OOPS! TRY AGAIN"
        scoree=scoree-1
        score.textContent="Your Current Score : "+scoree
    }
}