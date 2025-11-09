window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    // Burger menu
    menu.onclick = (e) => {
        e.stopPropagation(); // prevent click from bubbling up to window
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };

    window.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    });
    
    //Add to Cart
    const btns = document.getElementById('btns');
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

    const filter_btns = document.getElementById('filter_btns');

    filter_btns.addEventListener('click', event => {
        let isButton = event.target.nodeName === 'BUTTON';
        let id = event.target.id;
        
        if(isButton){
            btns.forEach(btn => {
                let cards = Array.from(document.querySelectorAll(".cards")); 

                cards.forEach(check_rare =>{
                    // if(id == ){
                    // }
                });
            });
        }
    });   

});
