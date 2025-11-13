window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    let cardData = JSON.parse(localStorage.getItem('collection')) || [];

    menu.onclick = (e) => {
        e.stopPropagation(); // prevent click from bubbling up to window
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };

    window.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    });


    //Opponent deck

    let deck_opp = [
        { id: 0, rarity: 'com', image: 'img/images.ygoprodeck.com_images_cards_102380.jpg', name: '102380', price: 2, heartSrc: 'img/heart(empty).png', attack: 400, defense: 200 },
        { id: 0, rarity: 'com', image: 'img/images.ygoprodeck.com_images_cards_102380.jpg', name: '102380', price: 2, heartSrc: 'img/heart(empty).png', attack: 400, defense: 200 },
        { id: 0, rarity: 'com', image: 'img/images.ygoprodeck.com_images_cards_102380.jpg', name: '102380', price: 2, heartSrc: 'img/heart(empty).png', attack: 400, defense: 200 },
        { id: 0, rarity: 'com', image: 'img/images.ygoprodeck.com_images_cards_102380.jpg', name: '102380', price: 2, heartSrc: 'img/heart(empty).png', attack: 400, defense: 200 },
        { id: 6, rarity: 'rare', image: 'img/images.ygoprodeck.com_images_cards_176393.jpg', name: '176393', price: 4, heartSrc: 'img/heart(empty).png', attack: 600, defense: 600},
        { id: 6, rarity: 'rare', image: 'img/images.ygoprodeck.com_images_cards_176393.jpg', name: '176393', price: 4, heartSrc: 'img/heart(empty).png', attack: 600, defense: 600},
        { id: 6, rarity: 'rare', image: 'img/images.ygoprodeck.com_images_cards_176393.jpg', name: '176393', price: 4, heartSrc: 'img/heart(empty).png', attack: 600, defense: 600},
        { id: 1, rarity: 'sup_rare', image: 'img/images.ygoprodeck.com_images_cards_109401.jpg', name: '109401', price: 5, heartSrc: 'img/heart(empty).png', attack: 1200, defense: 1000 },
        { id: 1, rarity: 'sup_rare', image: 'img/images.ygoprodeck.com_images_cards_109401.jpg', name: '109401', price: 5, heartSrc: 'img/heart(empty).png', attack: 1200, defense: 1000 },
        { id: 3, rarity: 'sup_rare', image: 'img/tarry_Knight_Orbitael.jpg', name: 'Limit_reverse', price: 1, heartSrc: 'img/heart(empty).png', attack: 400, defense: 2000 },
        { id: 3, rarity: 'sup_rare', image: 'img/tarry_Knight_Orbitael.jpg', name: 'Limit_reverse', price: 1, heartSrc: 'img/heart(empty).png', attack: 400, defense: 2000 },
        { id: 2, rarity: 'ult_rare', image: 'img/Magnum_The_Reliever.jpg', name: '111280', price: 2, heartSrc: 'img/heart(empty).png', attack: 1800, defense: 1000 },
        { id: 2, rarity: 'ult_rare', image: 'img/Magnum_The_Reliever.jpg', name: '111280', price: 2, heartSrc: 'img/heart(empty).png', attack: 1800, defense: 1000 },
        { id: 7, rarity: 'ult_rare', image: 'img/Jet_Warrior.jpg', name: 'Jet_Warrior', price: 7, heartSrc: 'img/heart(empty).png', attack: 2000, defense: 1800 },
        { id: 7, rarity: 'ult_rare', image: 'img/Jet_Warrior.jpg', name: 'Jet_Warrior', price: 7, heartSrc: 'img/heart(empty).png', attack: 2000, defense: 1800 },
        { id: 13, rarity: 'sec_rare', image: 'img/Burial_Bicorn.jpg', name: 'Burial_Bicorn', price: 5, heartSrc: 'img/heart(empty).png', attack: 2800, defense: 2500},
        { id: 13, rarity: 'sec_rare', image: 'img/Burial_Bicorn.jpg', name: 'Burial_Bicorn', price: 5, heartSrc: 'img/heart(empty).png', attack: 2800, defense: 2500},
        { id: 15, rarity: 'sec_rare', image: 'img/Heretical_Phobos_Covos.jpg', name: 'Heretical_Phobos_Covos', price: 5, heartSrc: 'img/heart(empty).png', attack: 1800, defense: 3000 },
        { id: 15, rarity: 'sec_rare', image: 'img/Heretical_Phobos_Covos.jpg', name: 'Heretical_Phobos_Covos', price: 5, heartSrc: 'img/heart(empty).png', attack: 1800, defense: 3000 },
        { id: 5, rarity: 'sec_rare', image: 'img/Ten_Thousand_Dragon.jpg', name: 'Ten_Thousand_Dragon', price: 8, heartSrc: 'img/heart(empty).png', attack: 2900, defense: 1000 }
    ];

    // Creating the player's deck
    let deck_cards = [];
    let hand_cards = [];
    let op_hand = [];

    // let turn = Math.floor(Math.random() * 2);

    let turn = 1;
    let summon = 1;

    cardData.forEach(card => {
        for(let i = 0; i < card.number; i++){
            deck_cards.push(card.id)
        }
    });



    let deck = document.getElementById('card-container');
    let hand_e = document.getElementById('hand');
    let  op_hand_e = document.getElementById('op_hand');

    //This is the function that creates cards:
    function createCardHTML_pl(card) {
        return `
            <div class="absolute bottom-0 card com" id="${card}" draggable="true">
                <div class="relative" draggable="true">
                    <img class="w-[calc(2rem+7vw)] md:w-[calc(2rem+12vw)] rounded-[5%]" src="${card.image}" alt="" draggable="false">
                    <div class="absolute bottom-0 w-full h-[27%] z-10">
                        <div class="flex justify-center items-center absolute bottom-0 left-0 h-full w-[50%] bg-[#C300FF] rounded-[10%] shadow-[0_0px_20px_#C210BF]"><p class="attack text-xl md:text-3xl select-none">${card.attack}</p></div>
                        <div class="flex justify-center items-center absolute bottom-0 right-0 h-full w-[50%] bg-cyan-500 rounded-[10%] shadow-[0_0px_20px_cyan]"><p class="defense text-xl md:text-3xl select-none">${card.defense}</p></div>
                    </div>
                </div>
            </div>
        `;
    }
    let fact1 = 0;
    function createCardHTML_opp(card) {
        fact1 = fact1 + 1;
        return `
            <div class="w-[calc(2rem+2.5vw)] md:w-[calc(2rem+6vw)] com rotate-180 top-[calc(15px*${fact1/(op_hand_e.children.length + 2)})]" id="${card.id}" draggable="false">
                <div class="relative">
                    <img class="rounded-[5%]" src="img/back_cover.png" alt="">
                </div>
            </div>
        `;
    }


    let fact2 = 0; 
    function createCardHTML_deck(card) {
        fact2 = fact2 + 1;
        return `
            <div class="absolute w-[calc(2rem+4.5vw)] md:w-[calc(2rem+10vw)]  bottom-0 com bottom-[calc(15px*${fact2/(deck.children.length + 2)})] left-8 cursor-pointer deck_card" id="${card}" draggable="false">
                <div class="relative deck_card pointer-events-none">
                    <img class="rounded-[5%] pointer-events-none" src="img/back_cover.png" alt="" draggable="false">
                </div>
            </div>
        `;
    }

    const allCardsHTML_pl = hand_cards.map(card => createCardHTML_pl(card)).join('');
    const allCardsHTML_deck = deck_cards.map(card => createCardHTML_deck(card)).join('');
    const allCardsHTML_opp = deck_opp.map(card => createCardHTML_opp(card)).join('');

    deck.innerHTML = allCardsHTML_deck;

    const firstCard = createCardHTML_pl(cardData[0]);
    const firstCard_opp = createCardHTML_opp(cardData[0]);

    hand_e.innerHTML = allCardsHTML_pl;
    op_hand_e.innerHTML = allCardsHTML_opp;


    hand_e.addEventListener('mouseover', function () {
        hand_e = document.getElementById('hand');
        Array.from(hand_e.children).forEach(child => {
            child.classList.add('relative');
        })
        
        if(hand_e.children.length > 3){
            hand_e.style.height = `calc(20vh*${hand.children.length})`;
            hand_e.style.overflowY = 'scroll';
        }
        else if(hand_e.children.length == 3){
            hand_e.style.height = `calc(28vh*${hand.children.length})`;
            hand_e.style.overflowY = 'scroll';
        }else if(hand_e.children.length == 2){
            hand_e.style.height = `calc(25vh*${hand.children.length})`;
            hand_e.style.overflowY = 'scroll';
        }
    });
    hand_e.addEventListener('mouseout', function () {
        Array.from(hand.children).forEach(child => {
            child.classList.remove('relative');
        })
        hand_e.style.height = '26vh';
        hand_e.style.overflowY = 'visible';
    });

    let cards = document.querySelectorAll('.card');
    
    //State Machine, handeling turns and phases

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
                deck.addEventListener('click', (event) => {
                    let selected = event.target;
                    click_card = cardData.find(card => card.id == selected.id)
                    if(selected.classList.contains('deck_card')){
                        if(hand_cards.length < 5){
                            hand_cards.push({
                                id: click_card.id,
                                number: 1,
                                price: click_card.price,
                                rarity: click_card.rarity,
                                image: click_card.image,
                                attack: click_card.attack,
                                defense: click_card.defense 
                            });
                            selected.remove();
                            
                        }
                        else{
                            alert('Arret')
                        }
                    }
                    const allCardsHTML_pl = hand_cards.map(card => createCardHTML_pl(card)).join('');
                    hand_e.innerHTML = allCardsHTML_pl;
                    cards = document.querySelectorAll('.card');
                    console.log(Array.from(cards));
                });

                } 
                else{
                console.log("bot is drawing"); 
                // Bot logic this.botMainPhase();
                } 
                break;

            case Phases.MAIN:
                if (this.currentPlayer === 'player') {
                    console.log("Your move: Summon or end Main phase"); 
                    const slots = Array.from(document.querySelectorAll('#p_side div'));
                    let dragged_card = null;
                    let selectedSlot = null;
                    
                        Array.from(cards).forEach(card =>{
                            alert()
                            card.addEventListener('dragstart', (event) =>{
                                dragged_card = card;
                                alert()
                            });
                        });
                        
                        //Add an event listener to each slot
                        slots.forEach(slot => {
                            slot.addEventListener('dragover', (dragover) =>{
                                dragover.preventDefault();
                            });
                            
                        slot.addEventListener('drop', (drop) =>{
                            selectedSlot = drop.currentTarget;
                            if(selectedSlot.children.length === 0){
                                const popup = document.getElementById('popup');
                                const layer = document.getElementById('layer');
                                popup.style.display = 'flex';
                                layer.style.display = 'block';
                                
                                popup.onclick = (event) => {
                                    if(event.target.id == 'ch_att'){
                                        console.log(dragged_card);
                                        dragged_card.style.position = 'relative';
                                        selectedSlot.appendChild(dragged_card);
                                        selectedSlot.style.height = 'max-content';
                                        hand_cards.pop(hand_cards.find(card => card.id === dragged_card.id))
                                        dragged_card = null;
                                    }
                                    else if(event.target.id == 'ch_def'){
                                        console.log(dragged_card);
                                        dragged_card.style.position = 'relative';
                                        selectedSlot.appendChild(dragged_card);
                                        selectedSlot.style.transform = 'rotate(90deg) scale(.8)';
                                        selectedSlot.style.heigh = 'max-content';
                                        hand_cards.pop(hand_cards.find(card => card.id === dragged_card.id))
                                        dragged_card = null;
                                    }
                                    popup.style.display = 'none';
                                    layer.style.display = 'none';
                                };
                            }
                            else{
                                alert("no no no");
                            }
                        });
                    });  
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
    
    //Main      
        layer.onclick = () => {
            popup.style.display = 'none';
            layer.style.display = 'none';
            dragged_card = null;
        } 
});
