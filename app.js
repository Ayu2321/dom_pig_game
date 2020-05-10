/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/




var scores, roundScore, activePlayer, dice, gamePlay;

    initialize();



// var x = document.querySelector('#score-0').textContent;//for getting data from html code
document.querySelector('.dice').style.display = 'none';


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlay){
        //1. random number
        var dice = Math.floor(Math.random()*6 + 1);
        //2. display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        //3.update the roundScore if the rolled number is ot 1
        if(dice !== 1)
            {
                //add score
                roundScore += dice;
                document.querySelector('#current-'+activePlayer).textContent = roundScore;//putting data}
            }
        else
            {
                //next player
                nextPlayer();
            }
     }
    
});


document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlay ){
        //1.add current score to global score
        scores[activePlayer]+=roundScore;
        //2.update the ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //3.check if player won the game
        if(scores[activePlayer] >= 20){
            document.getElementById('name-' + activePlayer).textContent = 'WINNER';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
            gamePlay = false;
        }
        else{
            //4.next player
            nextPlayer();
        }

    }
    
    
});

function nextPlayer(){
    activePlayer==='1'? activePlayer = '0' : activePlayer = '1';
                roundScore = 0;

                document.getElementById('current-0').textContent = '0';
                document.getElementById('current-1').textContent = '0';


                document.querySelector('.player-0-panel').classList.toggle('active');
                document.querySelector('.player-1-panel').classList.toggle('active');

                // document.querySelector('.player-0-panel').classList.remove('active');
                // document.querySelector('.player-1-panel').classList.add('active');

                document.querySelector('.dice').style.display = 'none';
            

}

document.querySelector('.btn-new').addEventListener('click',initialize);


function initialize(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlay = true;
    dice = Math.floor(Math.random()*6 + 1);

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0' ).textContent = 'Player1';
    document.getElementById('name-1' ).textContent = 'Player2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
