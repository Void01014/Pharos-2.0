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

cardData.forEach(card => {
    console.log(card.number)
    for(let i = 0; i < card.number; i++){
        deck_cards.push(card.id)
    }
});

console.log(cardData);
console.log(deck_cards);

let deck = document.getElementById('card-container');
let hand_e = document.getElementById('hand');
let  op_hand_e = document.getElementById('op_hand');

//This is the function that creates cards:
function createCardHTML_pl(card) {
    return `
        <div class="absolute bottom-0 card com" id="${card.id}" draggable="true">
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
                <img class="rounded-[5%]" src="/img/back_cover.png" alt="">
            </div>
        </div>
    `;
}


let fact2 = 0; 
function createCardHTML_deck(card) {
    fact2 = fact2 + 1;
    console.log(fact2)
    return `
        <div class="absolute w-[calc(2rem+4.5vw)] md:w-[calc(2rem+10vw)]  bottom-0 com bottom-[calc(15px*${fact2/(deck.children.length + 2)})] left-8 cursor-pointer deck_card" id="${card.id}" draggable="false">
            <div class="relative">
                <img class="rounded-[5%]" src="/img/back_cover.png" alt="" draggable="false">
            </div>
        </div>
    `;
}

const allCardsHTML = cardData.map(card => createCardHTML_pl(card)).join('');
const allCardsHTML_deck = deck_cards.map(card => createCardHTML_deck(card)).join('');
const allCardsHTML_opp = deck_opp.map(card => createCardHTML_opp(card)).join('');

deck.innerHTML = allCardsHTML_deck;

const firstCard = createCardHTML_pl(cardData[0]);
const firstCard_opp = createCardHTML_opp(cardData[0]);

console.log(deck)
hand_e.innerHTML = allCardsHTML;
op_hand_e.innerHTML = allCardsHTML_opp;


hand_e.addEventListener('mouseover', function () {
    hand_e = document.getElementById('hand');
    console.log(hand_e);
    console.log(hand_e.children.length);
    Array.from(hand_e.children).forEach(child => {
        child.classList.add('relative');
    })
    if(hand_e.children.length > 2){
        hand_e.style.height = `calc(15vh*${hand.children.length})`;
        hand_e.style.overflowY = 'scroll';
    }else if(hand_e.children.length == 2){
        hand_e.style.height = `calc(10vh*${hand.children.length})`;
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



//Drag-n-Drop

let cards = document.querySelectorAll('.card');
const slots = Array.from(document.querySelectorAll('#p_side div'));

cards.forEach(card =>{
    card.addEventListener('dragstart', (event) =>{
        let selected = event.target;

        slots.forEach(slot => {
            slot.addEventListener('dragover', (dragover) =>{
                dragover.preventDefault();
            })
        });

        slots.forEach(slot => {
            if(slot.children.length === 0){
                const popup = document.getElementById('popup');
                const layer = document.getElementById('layer');

                slot.addEventListener('drop', (drop) =>{
                    popup.style.display = 'flex';
                    layer.style.display = 'block'
                    
                    popup.addEventListener('click', (event) => {
                        if(event.target.id == 'ch_att'){
                            const choice = 'attack';
                            slot.appendChild(selected);
                            selected = null;
                            slot.style.width = 'max-content';
                            slot.style.height = 'max-content';
                            
                        }
                        else if(event.target.id == 'ch_def'){
                            const choice = 'attack';
                            slot.appendChild(selected);
                            selected = null;
                            slot.style.transform = 'rotate(90deg) scale(.8)';
                            slot.style.width = 'max-content';
                            slot.style.height = 'max-content';
                        }
                        popup.style.display = 'none';
                        layer.style.display = 'none'

                    })
                })
            }
        });

    })
})
 
    

});
