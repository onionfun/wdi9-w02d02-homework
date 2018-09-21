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
        console.log(`Deal card to ${player.name}`)
        let randomIndex = Math.floor(Math.random()*this.deck.length); //know what cards have been played
        let cardToDeal = game.deck.splice(randomIndex, 1)[0]; //accessing the thing in the array that splice is putting it into our hand shouldn't be spliced with smaller arrays splice returns an array
        // console.log(cardToDeal);
        // console.log(player.hand);
        player.hand.push(cardToDeal);
        //pick a rando card from deck
        //remove that card from deck
        //put card into someone's hand
        //START GAME IDEA -hard code an object and eventually figure out how to get it working
        // return {
        //     name: "Bulbasaur",
        //     damage: 60
        // }
        //button click - get deal cards
        $('.deal-cards').click(()=>{
          $('body').append("<button class='start-game btn btn-info'>Deal Cards</button>")
        $('player-one-cards').append(player.hand)
        })   
        $('.start-game').click(()=>{
          console.log(game[0])
          let randomIndex = Math.floor(Math.random() * game.deck.length);
          let computerChoice = game.deck[randomIndex]
          $('.start-game').remove()
         //this will refer to whatever element you have up top but only if using function
         $('body').append("<button class ='gameChoice'>card1</button>")
         $('body').append("<button class ='gameChoice'>card2</button>")
         $('body').append("<button class ='gameChoice'>card3</button>")
         $(".gameChoice").click(function(){
             let choice = $(this.cardToDeal).text();
                    console.log(`you chose ${choice}`)
                    playerChoice = choice;
                    $('.gameChoice').remove();
                    $('body').append(`<h3>you chose ${randomIndex}`);
                    $('body').append(`<h3>you chose ${computerChoice}`);
                    let result = computeResult(randomIndex, computerChoice) //<put a string in there see if game works then go into hard logic to figure out how to actually compute result
                    $('body').append(`<h2>${result}</h2>`)
                  
         })
        })
         
        

    },
    
    startGame () {
      //return the jQuery
        //console.log("The game is beginning");
        for (let i = 0; i < 3; i++) {
          //how to get cards to appear on page
          // const $btn = $('#btn');
          this.dealCard(game.player);
            this.dealCard(game.computer);
            let $div = $('<div/>')
// $div.text("Cards here ${cardToDeal}")
// let $body = $("body");
// $body.append($div);
// console.log("hello")
let deck = [game[0]]
computeResult =()=>{
    if(playerChoice === "rock"){
        if(computerChoice === "paper"){
            $('body').append(`<h3>you lose</h3>`)
        }else if(computerChoice === "rock"){
            $('body').append(`<h3>you tie</h3>`)
        }else $('body').append(`<h3>you tie</h3>`)
    }
    const $body = $("body");
 // //creates section tag, creates the elements and can chain on text with .text()
const $section = $("<section/>").text("This is the section tag");
// //if we want to add section to body
$body.append($section);
//puts something at the end of the body
 const section = $("#container.dogs").append("Lab");
// // // $( "container" ).add( "Lab" ).appendTo( document.body.container.ul);
// // $("#container ul li:first").before('<li>Lab</li>'); //$("ul").preped("<li>lab</li>")
// // $("#container ul").append('<li>Shepherd</li>');
// // //$("#container ul li:second").remove('</li>');
// // $("li").filter(':contains("Golden")').remove(); //filter returns the li element and remove removes it
// // //$('li').remove(":contains('Golden')");
// // //creating an h1 element=$("<h1/>")  $("li") < selects an element on the page
// // const $greeting = $("<h1/>").text("Fave dogs");
// // $("section").prepend($greeting);
// // //create function to get random RGB
// // const randRBG = () => {
// //     return (Math.floor(Math.random() * 256), 
// //     Math.floor(Math.random() * 256), 
// //     Math.floor(Math.random() * 256));
// // }
}

        }
        //deal three cards to player
        //deal 3 to computer
        //where is it going to go? Player or computer

        //store player cards in variable to iterate through.
        //why iterate array? i want individual ones to separate them out and access them from an object
    // let playerOneCards = game.player.hand;
    // let playerTwoCards = game.computer.hand;

    //   console.log(playerOneCards);
    //   console.log(playerTwoCards);
// this.battle()
        //pass data to html via .data()
        //need to find value of the card to display
        // for (let i = 0; i <; i++) {
        //   const element = array[i];}
          //what property of the random cards do I want to display
        
    // let playerOneHand = $('#player-one-cards')[0];
    //     jQuery.data(playerOneHand, 'card name', game.player.hand);
    //     $('span').text(jQuery.data(playerOneHand, 'card name', game.player.hand));

    // let playerTwoHand = $('#player-two-cards')[0];
    //     jQuery.data(playerTwoHand, 'card', game.computer.hand);
    //     $('span').text(jQuery.data(playerTwoHand, 'card', game.computer.hand));

    //$($playerOneHand).appendTo('#player-one-cards')
    },
    battle () {
      for (let i = 0; i <= 3; i++) {
        let playerCard = this.player.hand.pop();
        let computerCard = this.computer.hand.pop();
        // console.log(playerCard);
        // console.log(computerCard);
        if(playerCard.damage > computerCard.damage){
            this.player.points++
            console.log("Ash won this battle")
        } else if(playerCard.damage === computerCard.damage){
            console.log("tie");
        } else {
            this.computer.points++
            console.log("Gary won");
        }
        console.log(this.computer.points);
        console.log(this.player.points);
      }
    }
 //do you want to play your cards
    };

    // rounds () {
    //     for (let i = 0; i < 3; i++) {
    //         battle();
    //         this.player.points++
    //             console.log(this.player.points);
    //     }
    // }


//comparing the scores
  //deal a card
  //start the game which will deal a hand to player and computer
//game object should have all of our stuff in it
// $('.start-game').click(()=>{
//   console.log("Starting")
//   $('.start-game').remove()
//   $('body').append("<button class='start-game btn btn-info'>Deal Cards</button>")
game.startGame();
// })

//   The basic idea
// You are going to create a simple card game in which a player will be 
// able to battle the autoplayer. The game will deal 3 cards (each of which 
//has a damage value) to the player and three cards to the autoplayer. 
//The player will choose a card, and the computer will randomly choose 
//a card, and whichever's card has the highest value will win the point.
//A round is finished once this has happened three times.
// Hint/reminder: use a property when you want to "keep track" of something
// Or should you create a method?
// Hint/reminder: use a method when you want to "do" something
