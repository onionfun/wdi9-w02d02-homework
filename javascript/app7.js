// The game should be able to:
// keep a library of all the Pokemon cards that can be played (see the array in the "The Cards" section)
// know what cards have been played
// know how many cards are left to be played/dealt overall
// track points for both the player and the computer Note: Points are determined by the following: If the player's card beats the computer's card, the player gets one point (and vice versa). If there is a tie, no one gets a point.
// track rounds
// track number of rounds won for both player and computer
// automatically deal 3 cards from the library to the player and 3 cards to the computer each round
// determine the winner of each play
// stop once there are no cards left or not enough to deal 3 to each the player and computer

//console logs should go into h2.append("text")
let $body = $("body");
game = {
    deck:
[
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ],

    player: {
        name: "Ash",
        hand:[],
        points: 0,
        roundsWon: 0
    },
    computer: {
        name: "Gary",
        hand: [],
        points: 0,
        roundsWon: 0
    },

    dealCard(player) {
        $body.append(`<h2>Deal card to ${player.name}</h2>`)
        let randomIndex = Math.floor(Math.random()*this.deck.length); //know what cards have been played
        let cardToDeal = game.deck.splice(randomIndex, 1)[0]; //accessing the thing in the array that splice is putting it into our hand shouldn't be spliced with smaller arrays splice returns an array
        // console.log(cardToDeal);
        // console.log(player.hand);
        player.hand.push(cardToDeal);

        // $('.deal-cards').click(()=>{
        //   $('body').append("<button class='start-game btn btn-info'>Deal Cards</button>")
        // $('player-one-cards').append(player.hand)
        // })   
        // $('.start-game').click(()=>{
        //   console.log(game[0])
        //   let randomIndex = Math.floor(Math.random() * game.deck.length);
        //   let computerChoice = game.deck[randomIndex]
        //   $('.start-game').remove()
        //  //this will refer to whatever element you have up top but only if using function
        //  $('body').append("<button class ='gameChoice'>card1</button>")
        //  $('body').append("<button class ='gameChoice'>card2</button>")
        //  $('body').append("<button class ='gameChoice'>card3</button>")
        //  $(".gameChoice").click(function(){
        //      let choice = $(this.cardToDeal).text();
        //             console.log(`you chose ${choice}`)
        //             playerChoice = choice;
        //             $('.gameChoice').remove();
        //             $('body').append(`<h3>you chose ${randomIndex}`);
        //             $('body').append(`<h3>you chose ${computerChoice}`);
        //             let result = computeResult(randomIndex, computerChoice) //<put a string in there see if game works then go into hard logic to figure out how to actually compute result
        //             $('body').append(`<h2>${result}</h2>`)
                  
        //  })
        // })
         
      
    },
    
    startGame () {
      //return the jQuery
        //console.log("The game is beginning");
        for (let i = 0; i < 3; i++) {
          //how to get cards to appear on page
          // const $btn = $('#btn');
          this.dealCard(game.player);
            this.dealCard(game.computer);
            battle();
    }
    $body.append(`You're holding ${this.player.hand[0].name}, ${this.player.hand[1].name}, ${this.player.hand[2].name}`);
    
}
    },
    battle = () => {
      $body.append("<h4>Battle</h4");
        if(game.player.hand[0].damage > game.computer.hand[0].damage){
          game.player.points++
          $body.append("<h3>Ash won this battle</h3>")
      } else if(game.player.hand[0].damage === game.computer.hand[0].damage){
        $body.append("<h3>tie</h3>");
      } else {
          game.computer.points++
          $body.append("<h3>Gary won</h3>");
      }

      for(let i = 0; i <= 3; i++) {
        let playerCard = game.player.hand.pop();
        let computerCard = game.computer.hand.pop();
        $body.append(`<h4>${playerCard}</h4>`);
        $body.append(`<h4>${computerCard}<h4>`);
        
        $body.append(`<h3>Gary has ${game.computer.points}</h3>`)    //(this.computer.points);
        $body.append(`<h3>Ash has ${game.player.points}</h3>`)
        ///console.log(this.player.points);
      }
    };
 //do you want to play your cards


    game.startGame();


//battle
          // $('player-one-cards').on("click", ()=>{
        //do combat
        //check if enemy alive
        //rename button
        //call combat again
    //console.log(game.player.hand[0]);
        // $body.append(`<button class ='deal-cards btn btn-info'>${game.player.hand[0].name}</button>`),
        // $body.append(`<button class ='deal-cards btn btn-info'>${game.player.hand[1].name}</button>`),
        // $body.append(`<button class ='deal-cards btn btn-info'>${game.player.hand[2].name}</button>`)      