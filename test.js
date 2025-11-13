const Phases = {
  DRAW: 'Draw',
  MAIN: 'Main',
  BATTLE: 'Battle',
  END: 'End'
};

const turnManager = {
  currentPhase: null,
  currentPlayer: 'player', // 'player' or 'bot'

  startTurn : function(playerType = 'player') {
    console.log(`starting ${playerType}'s turn`)
    this.playerType = playerType;
    this.transitionTo(Phases.DRAW)
  },

  transitionTo: function (phase){
    this.currentPhase = phase;
    console.log(`now entering the ${phase} phase`);
    this.handlePhase(phase);
  },

  handlePhase: function(phase){
    switch (phase){
      case Phases.DRAW :
        if (this.currentPlayer === 'player') {
           console.log("Draw a card"); 
          // Here you'd enable player buttons
        } 
        else{
           console.log("bot is drawing"); 
           // Bot logic this.botMainPhase();
        } 
        break;

      case Phases.MAIN:
        if (this.currentPlayer === 'player') {
           console.log("Your move: Summon or end Main phase"); 
          // Here you'd enable player buttons
        } 
        else{
           console.log("Bot is deciding its move..."); 
           // Bot logic this.botMainPhase();
        } 
        break;
        
      case Phases.BATTLE:
        if (this.currentPlayer === 'player') {
           console.log("Your move: Attack"); 
          // Here you'd enable player buttons
          //check Trello for the "end_turn button"
        } 
        else{
           console.log("Bot is deciding its move..."); 
           // Bot logic this.botBattlePhase();
        } 
        break;
      case Phases.END:
        if (this.currentPlayer === 'player') {
          console.log("Your turn ended"); 
          this.startTurn('bot');
          //check Trello for the "end_turn button"
        } 
        else{
          console.log("Bot's turn ended"); 
          this.startTurn('player');
           // Bot logic this.botBattlePhase();
        } 
        break;

      }
      
    },
    
    playerEndMain: function(){
      console.log(`End of main phase, moving to the battle phase`);
    },

    playerEndBattle: function(){
      console.log(`End of battle phase, starting opponent's turn`);
    },

    //Bot functions
    botDraw: function(bot_deck){
      //add one card from thr bot's deck to bot hand
    },
    
    botMainPhase: function(){
      //Deciding what card to summon
    },

    botBattlePhase: function(){
      //Deciding which cards to use
    }
};

// Start the game
turnManager.startTurn();