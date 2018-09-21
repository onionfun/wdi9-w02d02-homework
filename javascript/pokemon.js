$("button").on("click", () =>{
    //this is where user clicks button so we want to populate the squares here;
    game.startGame();
}); 

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
        $('body').append(`<h3>Deal card to ${player.name}</h3>`)
        let randomIndex = Math.floor(Math.random()*this.deck.length); //know what cards have been played
        let cardToDeal = game.deck.splice(randomIndex, 1)[0]; //accessing the thing in the array that splice is putting it into our hand shouldn't be spliced with smaller arrays splice returns an array
        $('body').append(`<h3>${JSON.stringify(cardToDeal)}</h3>`);
        $('body').append(`<h3>${JSON.stringify(player.hand)}</h3>`);
        player.hand.push(cardToDeal);
        //pick a rando card from deck
        //remove that card from deck
        //put card into someone's hand
        //START GAME IDEA -hard code an object and eventually figure out how to get it working
        // return {
        //     name: "Bulbasaur",
        //     damage: 60
        // }
    },
    battle () {
      for (let i = 0; i <= 3; i++) {
        let playerCard = game.player.hand.pop();
        let computerCard = game.computer.hand.pop();
        $('body').append(`<h3>${JSON.stringify(playerCard)}</h3>`);
        $('body').append(`<h3>${JSON.stringify(computerCard)}</h3>`);
        if(playerCard.damage > computerCard.damage){
            game.player.points++
            $('body').append("<h3>Ash won this battle</h3>")
        } else if(playerCard.damage === computerCard.damage){
            $('body').append("<h3>tie</h3>");
        } else {
            game.computer.points++
            $('body').append("<h3>Gary won</h3>");
        }
        $('body').append(`<h3>${game.computer.points}</h3>`);
        $('body').append(`<h3>${game.player.points}</h3>`);
      }
    
    },
    startGame () {
        //console.log("The game is beginning");
        for (let i = 0; i < 3; i++) {
            this.dealCard(game.player);
            this.dealCard(game.computer);
        }
        $('.start-game').click(()=>{
            $('body').append(`<h3>${game[0]}</h3>`)
              let randomIndex = Math.floor(Math.random() * game.deck.length);
              let computerChoice = game.deck[randomIndex]
       }) 
       this.battle(); 
   
         
        //deal three cards to player
        //deal 3 to computer
        //where is it going to go? Player or computer
    },
    
}

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

