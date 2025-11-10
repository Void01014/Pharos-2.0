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
            <div class="flex mt-5 justify-evenly items-center">
                <button class="heart h-max mt-[10px]"><img class="w-[25px] pointer-events-none" src="${card.heartSrc}" alt=""></button>
                <h2 class="text-white"><span class="price">${card.price}</span> $</h2>
                <button class="add text-2xl bg-[#F72440] w-[calc(4rem+2vw)] text-center rounded-[2.5px] shadow-[0_3px_20px_#F72449]">Add</button>
            </div>
        </div>
    `;
}

const container = document.getElementById('card-container');
const allCardsHTML = cardData.map(card => createCardHTML(card)).join('');

container.innerHTML = allCardsHTML;
    
    //Add to Cart
    const btns = document.getElementById('card-container');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let fav = JSON.parse(localStorage.getItem('fav')) || [];
    let collection = JSON.parse(localStorage.getItem('collection')) || [];

    //Display total cards and price in car
    let T_n = cart.reduce((sum, card) => sum + card.number, 0);
    let T_p = cart.reduce((sum, card) => sum + card.price, 0);

    document.getElementById("T_number").textContent = T_n;
    document.getElementById("T_price").textContent = T_p + '$';    
    
    
    const add_btns = Array.from(document.querySelectorAll('.add'));
    
    add_btns.forEach(element => {
        let card_id = (element.closest('.card').id);
        let found = cart.findIndex(obj => obj.id == card_id);
        
        if(found >= 0 && cart[found].number){
            element.outerHTML = `<div class="add flex items-center gap-2"><button class="minus w-[30px] bg-[#F72440] px-2 rounded-[20px] shadow-[0_3px_15px_red]">- </button><span class="count text-xl text-white">${cart[found].number}</span><button class="plus w-[30px] bg-[green] px-2 rounded-[20px] shadow-[0_3px_5px_green]">+</button></div>`;
        }
    });
    
    //set the favorites
    const favs = Array.from(document.querySelectorAll('.heart'));
    favs.forEach(element => {
        let card_id = (element.closest('.card').id);
        let found = fav.find(elem =>  elem == element.closest('.card').id);
        let heart_img = element.querySelector("img");
        
        if(found >= 0){
            heart_img.src = "img/heart(full).png"; 
        }
    })
    
    


    btns.addEventListener('click', (event) =>{
        const is_heart = event.target.classList.contains("heart"); 
        const is_add = event.target.classList.contains("add"); 
        const is_plus = event.target.classList.contains("plus");
        const is_minus = event.target.classList.contains("minus");        

        if(is_add){
            
            let found = cart.findIndex(obj => obj.id == event.target.closest('.card').id);
            const parent = event.target.closest('.card');
            const price = Number(parent.querySelector('.price').textContent);

            if(found >= 0){
                cart[found].number += 1;
                cart[found].price += price;
            }
            else{
                cart.push({
                    id: event.target.closest('.card').id,
                    number: 1,
                    price: price
                });
            }
        }
        else if(is_heart){
            let heart_img = event.target.querySelector("img");
            let card_id = (event.target.closest('.card').id);

            if(heart_img.src.includes("heart(empty).png")){
                heart_img.src = "img/heart(full).png"; 
                fav.push(event.target.closest('.card').id);
            }
            else{
                heart_img.src = "img/heart(empty).png";
                fav = fav.filter(id => id !== card_id);
            }

            localStorage.setItem('fav', JSON.stringify(fav));
        }
        else if(is_plus){
            let found = cart.findIndex(obj => obj.id == event.target.closest('.card').id);
            const parent = event.target.closest('.card');
            const price = Number(parent.querySelector('.price').textContent);
            
           if(cart[found].number < 4){
                cart[found].number += 1;
                cart[found].price += price;
            }
            else{
                alert("you can't have more than 4 of one card")
            }
        }
        else if(is_minus){
            let found = cart.findIndex(obj => obj.id == event.target.closest('.card').id);
            const parent = event.target.closest('.card');
            const price = Number(parent.querySelector('.price').textContent);

            if(cart[found].number > 0){
                cart[found].number -= 1;
                cart[found].price -= price;
            }
            else{
                alert("you can't go under 0")
            }
        }
        else{
            return;   
        }

        let T_n = cart.reduce((sum, card) => sum + card.number, 0);
        let T_p = cart.reduce((sum, card) => sum + card.price, 0);
        localStorage.setItem('cart', JSON.stringify(cart));

        document.getElementById("T_number").textContent = T_n;
        document.getElementById("T_price").textContent = T_p + '$';

        const add_btns = Array.from(document.querySelectorAll('.add'));
    
            add_btns.forEach(element => {
            let card_id = (element.closest('.card').id);
            let found = cart.findIndex(obj => obj.id == card_id);
            
            if(found >= 0 && cart[found].number){
                element.outerHTML = `<div class="add flex items-center gap-2"><button class="minus w-[30px] bg-[#F72440] px-2 rounded-[20px] shadow-[0_3px_15px_red]">- </button><span class="count text-xl text-white">${cart[found].number}</span><button class="plus w-[30px] bg-[green] px-2 rounded-[20px] shadow-[0_3px_5px_green]">+</button></div>`;
            }
            else if(found >= 0 && cart[found].number == 0){
                element.outerHTML = `<button class="add text-2xl bg-[#F72440] w-[calc(4rem+2vw)] text-center rounded-[2.5px] shadow-[0_3px_20px_#F72449]" >Add</button>`
            }
        });        
    })

    const order = document.getElementById('order');

    
    order.addEventListener( 'click', (event) =>{
        let found = collection.filter(colObj => cart.some(cartObj => cartObj.id == colObj.id)).map(obj => obj.id);

        if (found.length > 0){
            found.forEach(id => {
                let item = collection.find(obj => obj.id === id);
                const card = document.getElementById(id);
                const price = Number(card.querySelector('.price').textContent);
                
                item.number = (item.number || 0) + 1;
                item.price = (item.price || 0) + price;
            });
        }
        else{
            cart.forEach(push_or => {
                console.log(collection);
                collection.push(push_or);
            });
        }
        cart.length = 0;
        localStorage.setItem('collection', JSON.stringify(collection));
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Card were added to your collection successfuly");
        location.reload();
    });

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
    
    
