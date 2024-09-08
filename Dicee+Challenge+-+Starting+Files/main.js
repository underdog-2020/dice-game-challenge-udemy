var randomNumber1 = Math.round(Math.random() * 6) ;
var randomNumber2 = Math.round(Math.random() * 6) ;
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2')


function player(player,number){
    if(number === 1){
        player.setAttribute('src','./images/dice1.png');
    }

    if(number === 2){
        player.setAttribute('src','./images/dice2.png');
    }

    if(number === 3){
        player.setAttribute('src','./images/dice3.png');
    }

    if (number === 4){
        player.setAttribute('src','./images/dice4.png');
    }

    if (number === 5){
        player.setAttribute('src','./images/dice5.png');
    }
    if(number === 6){
        player.setAttribute('src','./images/dice6.png');
    }

}

function winner(number1, number2){
    if(number1 > number2){
        document.getElementById('heading').innerHTML = 'Player 1 wins'
    }
    if(number2 > number1){
        document.getElementById('heading').innerHTML = 'Player 2 wins'
    }
    if(number1 === number2){
        document.getElementById('heading').innerHTML = 'Draw'
    }
}

player(player1,randomNumber1);
player(player2,randomNumber2);
winner(randomNumber1,randomNumber2);
