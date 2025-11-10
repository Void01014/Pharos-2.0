window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    let cardData = [
    { id: 0, rarity: 'com', image: 'img/images.ygoprodeck.com_images_cards_102380.jpg', name: '102380', price: 2, heartSrc: 'img/heart(empty).png', attack: 400, defense: 200 },
    { id: 1, rarity: 'sup_rare', image: 'img/images.ygoprodeck.com_images_cards_109401.jpg', name: '109401', price: 5, heartSrc: 'img/heart(empty).png', attack: 1200, defense: 1000 },
    { id: 2, rarity: 'ult_rare', image: 'img/Magnum_The_Reliever.jpg', name: '111280', price: 2, heartSrc: 'img/heart(empty).png', attack: 1800, defense: 1000 },
    { id: 3, rarity: 'sup_rare', image: 'img/tarry_Knight_Orbitael.jpg', name: 'Limit_reverse', price: 1, heartSrc: 'img/heart(empty).png', attack: 400, defense: 2000 },
    { id: 4, rarity: 'com', image: 'img/The_13th_Grave.jpg', name: 'The_13th_Grave', price: 2, heartSrc: 'img/heart(empty).png', attack: 300, defense: 100 },
    { id: 5, rarity: 'sec_rare', image: 'img/Ten_Thousand_Dragon.jpg', name: 'Ten_Thousand_Dragon', price: 8, heartSrc: 'img/heart(empty).png', attack: 2900, defense: 1000 },
    { id: 6, rarity: 'rare', image: 'img/images.ygoprodeck.com_images_cards_176393.jpg', name: '176393', price: 4, heartSrc: 'img/heart(empty).png', attack: 600, defense: 600},
    { id: 7, rarity: 'ult_rare', image: 'img/Jet_Warrior.jpg', name: 'Jet_Warrior', price: 7, heartSrc: 'img/heart(empty).png', attack: 2000, defense: 1800 },
    { id: 8, rarity: 'sup_rare', image: 'img/images.ygoprodeck.com_images_cards_35699.jpg', name: '35699', price: 5, heartSrc: 'img/heart(empty).png', attack: 1200, defense: 800 },
    { id: 9, rarity: 'ult_rare', image: 'img/images.ygoprodeck.com_images_cards_197042.jpg', name: '197042', price: 5, heartSrc: 'img/heart(empty).png', attack: 2000, defense: 1800 },
    { id: 10, rarity: 'sup_rare', image: 'img/Laval_Lancelord.jpg', name: '191749', price: 5, heartSrc: 'img/heart(empty).png', attack: 1300, defense: 1000 },
    { id: 11, rarity: 'rare', image: 'img/images.ygoprodeck.com_images_cards_128454.jpg', name: '128454', price: 5, heartSrc: 'img/heart(empty).png', attack: 500, defense: 100 },
    { id: 12, rarity: 'com', image: 'img/images.ygoprodeck.com_images_cards_126218.jpg', name: '126218', price: 5, heartSrc: 'img/heart(empty).png', attack: 100, defense: 100},
    { id: 13, rarity: 'sec_rare', image: 'img/Burial_Bicorn.jpg', name: 'Burial_Bicorn', price: 5, heartSrc: 'img/heart(empty).png', attack: 2800, defense: 2500},
    { id: 14, rarity: 'ult_rare', image: 'img/Blaze_Supreme.jpg', name: 'Blaze_Supreme', price: 5, heartSrc: 'img/heart(empty).png', attack: 2500, defense: 1800},
    { id: 15, rarity: 'sec_rare', image: 'img/Heretical_Phobos_Covos.jpg', name: 'Heretical_Phobos_Covos', price: 5, heartSrc: 'img/heart(empty).png', attack: 1800, defense: 3000 }
];

    menu.onclick = (e) => {
        e.stopPropagation(); // prevent click from bubbling up to window
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };

    window.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    });


//This is the function that creates cards:
function createCardHTML(card) {
    return `
        <div class="mt-10 card com" id="${card.id}">
            <div class="relative">
                <img class="w-[160px] md:w-[200px] rounded-[10px]" src="${card.image}" alt="">
                <div class="absolute bottom-0 w-full h-[27%] z-10">
                    <div class="flex justify-center items-center absolute bottom-0 left-0 h-full w-[50%] bg-[#C300FF] rounded-[10px] shadow-[0_0px_20px_#C210BF]"><p class="attack text-4xl">${card.attack}</p></div>
                    <div class="flex justify-center items-center absolute bottom-0 right-0 h-full w-[50%] bg-cyan-500 rounded-[10px] shadow-[0_0px_20px_cyan]"><p class="defense text-4xl">${card.defense}</p></div>
                </div>
            </div>
        </div>
    `;
}

const container = document.getElementById('card-container');
const allCardsHTML = cardData.map(card => createCardHTML(card)).join('');

container.innerHTML = allCardsHTML;

const hand = document.getElementById('hand');
const firstCard = createCardHTML(cardData[0]);

hand.innerHTML = firstCard;



    // const filter_btns = document.getElementById('filter_btns');

    // filter_btns.addEventListener('click', event => {
    //     let isButton = event.target.nodeName === 'BUTTON';
    //     let id = event.target.id;
        
    //     if(isButton){
    //         btns.forEach(btn => {
    //             let cards = Array.from(document.querySelectorAll(".cards")); 

    //             cards.forEach(check_rare =>{
    //                 // if(id == ){
    //                 // }
    //             });
    //         });
    //     }
    // });   

});
// Burger menu
    
    
