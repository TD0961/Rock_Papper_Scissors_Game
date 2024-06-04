let score = JSON.parse(localStorage.getItem('score'));

    if( score === null){
      score ={
      wins : 0,
      looses : 0,
      ties : 0
      }
    }
    /*
    document.querySelector(".js-result").innerHTML= `Result : ${result}`;
    
    document.querySelector(".js-score").innerHTML=  `Wins : ${score.wins}, Looses : ${score.looses}, Ties : ${score.ties}`;

    document.querySelector(".js-move").innerHTML = `You :${playerMove }-Computer : ${computerMove} `;

*/
    function autoPlay(){


      setInterval(function() {

        let playerMove = pickComputerMove();
        playerMove(playerMove);
                
      }, 2000);

    }
  
    function playerMove(playerMove){
      
      let computerMove = pickComputerMove();

      let result = '';

      if(playerMove === 'Scissors'){

        if(computerMove === 'Rock'){
          result = 'you loose';
        }
        else if(computerMove === 'Papper'){
          result = 'you win';
        }
        else{
          result = 'tie'
        }       

      }
      else if (playerMove === 'Papper'){


        if(computerMove === 'Rock'){
          result = 'you win';
        }
        else if(computerMove === 'Papper'){
          result = 'tie';
        }
        else{
          result = 'you loose';
        }

      }
      else if(playerMove === 'Rock'){

        if(computerMove === 'Rock'){
          result = 'tie';
        }
        else if(computerMove === 'Papper'){
          result = 'you loose';
        }
        else{
          result = 'you win'
        }
      }
      if(result === 'you win'){
        score.wins += 1;
      }
      else if(result === 'you loose'){
        score.looses += 1;
      }
      else if(result === 'tie'){
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      document.querySelector(".js-result").innerHTML= `Result : ${result}`;

      document.querySelector(".js-score").innerHTML=  `Wins : ${score.wins}, Looses : ${score.looses}, Ties : ${score.ties}`;

      document.querySelector(".js-move").innerHTML = `You <img src="${playerMove}-emoji.png" >- Computer <img src="${computerMove}-emoji.png" > `;

      /*
      alert(`You choose ${playerMove }. computer Move ${computerMove}. result: ${result}.
      Wins : ${score.wins}, Looses : ${score.looses}, Ties : ${score.ties}`);
      */

    }
    
    function pickComputerMove(){
      let randomNumber = Math.random();

      let computerMove = '';

      if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
      }
      else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'Papper';
      }
      else{
        computerMove = 'Scissors';
      }
      return computerMove;
   }
/*
   function uppdateElementScore(){

    document.querySelector(".js-score").innerHTML=  `Wins : ${score.wins}, Looses : ${score.looses}, Ties : ${score.ties}`;
   }

   function uppdateElementResult(){

    document.querySelector(".js-result").innerHTML= `Result : ${result}`;
   }
*/