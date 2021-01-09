let rock=document.getElementById("rock")
rock.addEventListener("click",function(){
    game(1);
})
let paper=document.getElementById("paper")
paper.addEventListener("click",function(){
    game(2);
})
let scizors=document.getElementById("scizors")
scizors.addEventListener("click",function(){
    game(3);
})


function game(playerChoise){    
    let randomNumber= (Math.ceil(Math.random() * 3));
    let computerMove= getMove(randomNumber);
    let playerMove= getMove(playerChoise);
        
    function getMove(number){
        if (number===1){
            return "kamien";
        }else if (number===2){
            return "papier"
        }else if (number===3){
            return "nozyczki"
        }else {
            return "podaj liczbe od 1 do 3 !!!"
        }
    }
    result(playerMove,computerMove);

    function result(playerMove,computerMove){
        if (computerMove==="papier" && playerMove==="papier"){
            return "remis";
        }else  if (computerMove==="papier" && playerMove==="kamien"){
            return "wygral pc";
        }else  if (computerMove==="papier" && playerMove==="nozyczki"){
            return "wygrales !";
        }else  if (computerMove==="kamien" && playerMove==="papier"){
            return "wygrales !";
        }else  if (computerMove==="kamien" && playerMove==="kamien"){
            return "remis";
        }else  if (computerMove==="kamien" && playerMove==="nozyczki"){
            return "wygral pc";
        }else  if (computerMove==="nozyczki" && playerMove==="papier"){
            return "wygral pc";
        }else  if (computerMove==="nozyczki" && playerMove==="kamien"){
            return "wygrales !";
        }else  if (computerMove==="nozyczki" && playerMove==="nozyczki"){
            return "remis";
        }else {
            return "Blad !!! Podaj poprawna wartosc"
        }
    }
    console.log(result(playerMove,computerMove));
}





