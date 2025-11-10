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


//This is the function that creates cards:
function createCardHTML(card) {
    return `
        <div class="absolute bottom-0 card com" id="${card.id}">
            <div class="relative">
                <img class="w-[calc(2rem+7vw)] md:w-[calc(2rem+12vw)] rounded-[10px]" src="${card.image}" alt="">
                <div class="absolute bottom-0 w-full h-[27%] z-10">
                    <div class="flex justify-center items-center absolute bottom-0 left-0 h-full w-[50%] bg-[#C300FF] rounded-[10px] shadow-[0_0px_20px_#C210BF]"><p class="attack text-xl md:text-3xl select-none">${card.attack}</p></div>
                    <div class="flex justify-center items-center absolute bottom-0 right-0 h-full w-[50%] bg-cyan-500 rounded-[10px] shadow-[0_0px_20px_cyan]"><p class="defense text-xl md:text-3xl select-none">${card.defense}</p></div>
                </div>
            </div>
        </div>
    `;
}
function createCardHTML_opp(card) {
    return `
        <div class="card com rotate-180" id="${card.id}">
            <div class="relative">
                <img class="w-[calc(2rem+7vw)] md:w-[calc(2rem+12vw)] rounded-[10px]" src="/img/back_cover.png" alt="">
            </div>
        </div>
    `;
}

const container = document.getElementById('card-container');
const allCardsHTML = cardData.map(card => createCardHTML(card)).join('');

container.innerHTML = allCardsHTML;

const hand = document.getElementById('hand');
const op_hand = document.getElementById('op_hand');
const firstCard = createCardHTML(cardData[0]);
const firstCard_opp = createCardHTML_opp(cardData[0]);

hand.innerHTML = firstCard;
op_hand.innerHTML = firstCard_opp;



    

});
