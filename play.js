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

    let bot_deck = [
        { id: 0, rarity: 'com', image: 'img/images.ygoprodeck.com_images_cards_102380.jpg', name: '102380', price: 2, heartSrc: 'img/heart(empty).png', attack: 400, defense: 200 },
        { id: 0, rarity: 'com', image: 'img/images.ygoprodeck.com_images_cards_102380.jpg', name: '102380', price: 2, heartSrc: 'img/heart(empty).png', attack: 400, defense: 200 },
        { id: 0, rarity: 'com', image: 'img/images.ygoprodeck.com_images_cards_102380.jpg', name: '102380', price: 2, heartSrc: 'img/heart(empty).png', attack: 400, defense: 200 },
        { id: 0, rarity: 'com', image: 'img/images.ygoprodeck.com_images_cards_102380.jpg', name: '102380', price: 2, heartSrc: 'img/heart(empty).png', attack: 400, defense: 200 },
        { id: 6, rarity: 'rare', image: 'img/images.ygoprodeck.com_images_cards_176393.jpg', name: '176393', price: 4, heartSrc: 'img/heart(empty).png', attack: 600, defense: 600 },
        { id: 6, rarity: 'rare', image: 'img/images.ygoprodeck.com_images_cards_176393.jpg', name: '176393', price: 4, heartSrc: 'img/heart(empty).png', attack: 600, defense: 600 },
        { id: 6, rarity: 'rare', image: 'img/images.ygoprodeck.com_images_cards_176393.jpg', name: '176393', price: 4, heartSrc: 'img/heart(empty).png', attack: 600, defense: 600 },
        { id: 1, rarity: 'sup_rare', image: 'img/images.ygoprodeck.com_images_cards_109401.jpg', name: '109401', price: 5, heartSrc: 'img/heart(empty).png', attack: 1200, defense: 1000 },
        { id: 1, rarity: 'sup_rare', image: 'img/images.ygoprodeck.com_images_cards_109401.jpg', name: '109401', price: 5, heartSrc: 'img/heart(empty).png', attack: 1200, defense: 1000 },
        { id: 3, rarity: 'sup_rare', image: 'img/tarry_Knight_Orbitael.jpg', name: 'Limit_reverse', price: 1, heartSrc: 'img/heart(empty).png', attack: 400, defense: 2000 },
        { id: 3, rarity: 'sup_rare', image: 'img/tarry_Knight_Orbitael.jpg', name: 'Limit_reverse', price: 1, heartSrc: 'img/heart(empty).png', attack: 400, defense: 2000 },
        { id: 2, rarity: 'ult_rare', image: 'img/Magnum_The_Reliever.jpg', name: '111280', price: 2, heartSrc: 'img/heart(empty).png', attack: 1800, defense: 1000 },
        { id: 2, rarity: 'ult_rare', image: 'img/Magnum_The_Reliever.jpg', name: '111280', price: 2, heartSrc: 'img/heart(empty).png', attack: 1800, defense: 1000 },
        { id: 7, rarity: 'ult_rare', image: 'img/Jet_Warrior.jpg', name: 'Jet_Warrior', price: 7, heartSrc: 'img/heart(empty).png', attack: 2000, defense: 1800 },
        { id: 7, rarity: 'ult_rare', image: 'img/Jet_Warrior.jpg', name: 'Jet_Warrior', price: 7, heartSrc: 'img/heart(empty).png', attack: 2000, defense: 1800 },
        { id: 13, rarity: 'sec_rare', image: 'img/Burial_Bicorn.jpg', name: 'Burial_Bicorn', price: 5, heartSrc: 'img/heart(empty).png', attack: 2800, defense: 2500 },
        { id: 13, rarity: 'sec_rare', image: 'img/Burial_Bicorn.jpg', name: 'Burial_Bicorn', price: 5, heartSrc: 'img/heart(empty).png', attack: 2800, defense: 2500 },
        { id: 15, rarity: 'sec_rare', image: 'img/Heretical_Phobos_Covos.jpg', name: 'Heretical_Phobos_Covos', price: 5, heartSrc: 'img/heart(empty).png', attack: 1800, defense: 3000 },
        { id: 15, rarity: 'sec_rare', image: 'img/Heretical_Phobos_Covos.jpg', name: 'Heretical_Phobos_Covos', price: 5, heartSrc: 'img/heart(empty).png', attack: 1800, defense: 3000 },
        { id: 5, rarity: 'sec_rare', image: 'img/Ten_Thousand_Dragon.jpg', name: 'Ten_Thousand_Dragon', price: 8, heartSrc: 'img/heart(empty).png', attack: 2900, defense: 1000 }
    ];

    // Creating the player's deck
    let deck_cards = [];
    let hand_cards = [];
    let bot_hand = [];

    // let turn = Math.floor(Math.random() * 2);

    let turn = 1;
    let summon = 1;

    cardData.forEach(card => {
        for (let i = 0; i < card.number; i++) {
            deck_cards.push(card.id)
        }
    });



    let deck = document.getElementById('card-container');
    let hand_e = document.getElementById('hand');
    let op_hand_e = document.getElementById('op_hand');

    //This is the function that creates cards:
    function createCardHTML_pl(card) {
        return `
            <div class="absolute bottom-0 card com" id="${card}">
                <div class="relative pointer-events-none">
                    <img class="w-[calc(2rem+7vw)] md:w-[calc(2rem+12vw)] rounded-[5%] pointer-events-none" src="${card.image}" alt="" draggable="false">
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
            <div class="w-[calc(2rem+2.5vw)] md:w-[calc(2rem+6vw)] com rotate-180 top-[calc(15px*${fact1 / (op_hand_e.children.length + 2)})]" id="${card.id}" draggable="false">
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
            <div class="absolute w-[calc(2rem+4.5vw)] md:w-[calc(2rem+10vw)]  bottom-0 com bottom-[calc(15px*${fact2 / (deck.children.length + 2)})] left-8 cursor-pointer deck_card" id="${card}" draggable="false">
                <div class="relative deck_card pointer-events-none">
                    <img class="rounded-[5%] pointer-events-none" src="img/back_cover.png" alt="" draggable="false">
                </div>
            </div>
        `;
    }

    let allCardsHTML_pl = hand_cards.map(card => createCardHTML_pl(card)).join('');
    let allCardsHTML_deck = deck_cards.map(card => createCardHTML_deck(card)).join('');
    let allCardsHTML_opp = bot_hand.map(card => createCardHTML_opp(card)).join('');

    deck.innerHTML = allCardsHTML_deck;

    hand_e.innerHTML = allCardsHTML_pl;
    op_hand_e.innerHTML = allCardsHTML_opp;


    hand_e.addEventListener('mouseover', function () {
        hand_e = document.getElementById('hand');
        Array.from(hand_e.children).forEach(child => {
            child.classList.add('relative');
        })

        if (hand_e.children.length > 3) {
            hand_e.style.height = `calc(20vh*${hand.children.length})`;
            hand_e.style.overflowY = 'scroll';
        }
        else if (hand_e.children.length == 3) {
            hand_e.style.height = `calc(28vh*${hand.children.length})`;
            hand_e.style.overflowY = 'scroll';
        } else if (hand_e.children.length == 2) {
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


    function showPhase(phase) {
        const box = document.getElementById('phase_message');
        const title = box.querySelector('h1');

        title.textContent = phase;

        box.classList.remove('opacity-0');
        box.classList.add('opacity-100');

        setTimeout(() => {
            box.classList.remove('opacity-100');
            box.classList.add('opacity-0');
        }, 2000);



    }

    const Phases = {
        DRAW: 'Draw',
        MAIN: 'Main',
        BATTLE: 'Battle',
        END: 'End'
    };

    const turnManager = {
        currentPhase: null,
        currentPlayer: 'player', // 'player' or 'bot'

        startTurn: function (playerType) {
            console.log(`starting ${playerType}'s turn`)
            this.playerType = playerType;
            this.currentPlayer = playerType;
            this.transitionTo(Phases.DRAW)
        },

        transitionTo: function (phase) {
            this.currentPhase = phase;
            console.log(`now entering the ${phase} phase`);
            showPhase(phase);
            this.handlePhase(phase);
        },

        handlePhase: function (phase) {
            const end_turn = document.getElementById('end_turn');



            switch (phase) {
                case Phases.DRAW:

                    if (this.currentPlayer === 'player') {
                        deck.classList.remove('pointer-events-none');
                        console.log("Draw a card");
                        deck.onclick = (event) => {
                            let selected = event.target;
                            let click_card = cardData.find(card => card.id == selected.id)

                            if (selected.classList.contains('deck_card')) {
                                if (hand_cards.length < 5) {
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
                                    deck.classList.add('pointer-events-none');
                                    const allCardsHTML_pl = hand_cards.map(card => createCardHTML_pl(card)).join('');
                                    hand_e.innerHTML = allCardsHTML_pl;
                                    cards = document.querySelectorAll('.card');
                                    console.log(cards)

                                    this.transitionTo(Phases.MAIN);
                                }
                                else {
                                    alert('your hand is full');
                                    this.transitionTo(Phases.MAIN);

                                }
                            }
                        };

                    }
                    else {
                        console.log("bot is drawing");
                        this.botDraw(bot_deck);
                    }
                    break;

                case Phases.MAIN:
                    end_turn.classList.remove('opacity-50');
                    end_turn.classList.add('cursor-pointer');

                    if (this.currentPlayer === 'player') {
                        Array.from(hand_e.children).forEach(child => {
                            child.draggable = true;
                        });

                        console.log("Your move: Summon or end Main phase");
                        const slots = Array.from(document.querySelectorAll('#p_side div'));
                        let dragged_card = null;
                        let selectedSlot = null;

                        cards.forEach(card => {
                            card.addEventListener('dragstart', (event) => {
                                dragged_card = card;
                            });
                        });

                        //Add an event listener to each slot
                        slots.forEach(slot => {
                            slot.addEventListener('dragover', (dragover) => {
                                dragover.preventDefault();
                                slot.classList.add('opacity-40');
                            });
                            slot.addEventListener('dragleave', (dragleave) => {
                                slot.classList.remove('opacity-40');
                                dragover.preventDefault();
                            });

                            slot.addEventListener('drop', (drop) => {
                                selectedSlot = drop.currentTarget;
                                if (selectedSlot.children.length === 0) {
                                    const popup = document.getElementById('popup');
                                    const layer = document.getElementById('layer');
                                    popup.style.display = 'flex';
                                    layer.style.display = 'block';

                                    popup.onclick = (event) => {
                                        let cardPlayed = false;

                                        if (event.target.id == 'ch_att') {
                                            dragged_card.style.position = 'relative';
                                            selectedSlot.appendChild(dragged_card);
                                            selectedSlot.style.height = 'max-content';
                                            hand_cards.find(card => card.id === dragged_card.id)
                                            dragged_card.setAttribute('state', 'attack');
                                            cardPlayed = true;
                                        }
                                        else if (event.target.id == 'ch_def') {
                                            dragged_card.style.position = 'relative';
                                            selectedSlot.appendChild(dragged_card);
                                            selectedSlot.style.transform = 'rotate(90deg) scale(.8)';
                                            selectedSlot.style.height = 'max-content';
                                            dragged_card.setAttribute('state', 'defense');
                                            cardPlayed = true;
                                        }

                                        let cardId = dragged_card.id;
                                        let cardIndex = hand_cards.findIndex(card => card.id == cardId);

                                        if (cardPlayed) {
                                            hand_cards.splice(cardIndex, 1)
                                            popup.style.display = 'none';
                                            layer.style.display = 'none';
                                            slot.classList.remove('opacity-40');
                                            dragged_card.draggable = false;
                                            dragged_card = null;
                                        }
                                    };
                                }
                                else {
                                    alert("no no no");
                                }
                            });
                        });
                    }
                    else {
                        console.log("Bot is deciding its move...");
                        this.botMainPhase();
                    }
                    end_turn.onclick = () => {
                        end_turn.classList.add('opacity-50');
                        end_turn.classList.remove('cursor-pointer');
                        Array.from(hand_e.children).forEach(child => {
                            child.draggable = false;
                        });
                        console.log(`End of main phase, moving to the battle phase`);
                        this.transitionTo(Phases.BATTLE);
                    };
                    break;

                case Phases.BATTLE:
                    end_turn.classList.remove('opacity-50');
                    end_turn.classList.add('cursor-pointer');

                    if (this.currentPlayer === 'player') {
                        playerSide = document.getElementById('p_side');

                        summonedCards = playerSide.querySelectorAll('.card')
                        summonedCards.forEach(card => {
                            if (card.getAttribute("state") == "attack") {
                                card.style.boxShadow = '0 0 20px blue';
                                card.classList.add('cursor-pointer')

                                card.onclick = (ev) => {
                                    ev.stopPropagation();
                                    card.style.transform = 'scale(1.1)';
                                    document.addEventListener('click', cancelSelect);

                                    function cancelSelect() {
                                        if (ev.target !== card) {
                                            card.style.transform = '';
                                            document.removeEventListener('click', cancelSelect);
                                            console.log(ev.target)
                                        }
                                    }
                                }
                            }
                        });
                        console.log("Your move: Attack or end turn");

                    }
                    else {
                        console.log("Bot is deciding its move...");
                        this.botBattlePhase();
                    }
                    end_turn.onclick = () => {
                        end_turn.classList.add('opacity-50');
                        end_turn.classList.remove('cursor-pointer');
                        console.log(`End of battle phase, starting opponent's turn`);
                        this.transitionTo(Phases.END);
                    };
                    break;

                case Phases.END:
                    if (this.currentPlayer === 'player') {
                        console.log("Your turn ended");
                        this.startTurn('bot');
                        //check Trello for the "end_turn button"
                    }
                    else {
                        console.log("Bot's turn ended");
                        this.startTurn('player');
                        // Bot logic this.botBattlePhase();
                    }
                    break;
            }

        },

        //Bot functions
        botDraw: function (bot_deck) {
            let topCard = bot_deck.pop();

            console.log(topCard);
            if (bot_hand.length < 5) {
                bot_hand.push({
                    id: topCard.id,
                    number: 1,
                    price: topCard.price,
                    rarity: topCard.rarity,
                    image: topCard.image,
                    attack: topCard.attack,
                    defense: topCard.defense
                });
                console.log(bot_hand)
                allCardsHTML_opp = bot_hand.map(card => createCardHTML_opp(card)).join('');
                op_hand_e.innerHTML = allCardsHTML_opp;

                this.transitionTo(Phases.MAIN);
            }
            else {
                alert('bot hand is full');
                this.transitionTo(Phases.MAIN);

            }
},

    botMainPhase: function (bot_hand) {
        
    },

    botBattlePhase: function () {
        //Deciding which cards to use
    }
    };

// Start the game
turnManager.startTurn('bot');

//Main      
layer.onclick = () => {
    popup.style.display = 'none';
    layer.style.display = 'none';
    dragged_card = null;
}
});
