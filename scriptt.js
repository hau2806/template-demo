// function love(){
//     var like = document.querySelector(".icon-love");
//     alert("Đã yêu thích")
//     like.style.color = "red";
//  }


 //SELECT ELEMENT
 const productsEl = document.querySelector(".product-colums");
 const cartItemsEl = document.querySelector(".item");
 const subtotalEl = document.querySelector(".price-total");
 const totalCountEl = document.querySelector(".cartAmount");


 //RENDER PRODUCTs
 function renderProducts(){
    products.forEach((product) => {
        productsEl.innerHTML += `
        <div class="product-item">
            <div class="product-img">
                <div class="item1">
                    <a href="#"><img src="${product.imgSrc}" alt="${product.name}" class="ads-img"></a>
                    <button class="product-img__btn-add" onclick = "addToCart(${product.id})">add to cart</button>
                    <a href="#"><h3 class="heading">${product.name}</h3></a>
                    <p><del>$99.00</del> $<span class="price">${product.price.toFixed(2)}</span> </p> 
                </div>
                <div class="star">
                    <span class="fa-regular fa-star checked"></span>
                    <span class="fa-regular fa-star checked"></span>
                    <span class="fa-regular fa-star checked"></span>
                    <span class="fa-regular fa-star checked"></span>
                    <span class="fa-regular fa-star"></span>
                </div>
            </div>
        </div>
        `;
    });
 };
 renderProducts()

 //cart array
 let cart = [];

 //add to cart
function addToCart(id) {
    alert("Thêm sản phẩm thành công");
    //check if product already exist in cart
    if(cart.some((item) => item.id === id )){
      changeNumberOfUnits("plus", id)
    }else{
        const item = products.find((product) => product.id === id);

        cart.push({
            ...item,
            numberOfUnits: 1,
        });
    }
    updateCart();
}
 
//updateCart
function updateCart(){
    renderCartItems();
    renderSubtotal();
}

// calculate and render subtotal
function renderSubtotal(){
    let totalPrice = 0, 
        totalItem = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItem += item.numberOfUnits;
    })

    subtotalEl.innerHTML = ` <p>Tổng tiền: $ <span> ${totalPrice.toFixed(2)} </span></p>`
    totalCountEl.innerHTML =totalItem;
}

//render cart items
function renderCartItems(){
    cartItemsEl.innerHTML = ""// clear cart element
    cart.forEach((item) => {
        cartItemsEl.innerHTML +=`
        <tr class="cart-item cart-item-1" data-id="1">
            <td><img style="width: 70px;" src="${item.imgSrc}" alt="${item.name}"></td>
            <td> <h3 class="heading">${item.name}</h3></td>
            <td><p>$<span class="price"> ${item.price}</span></p></td>
            <td>
                <div class="units">
                    <div class="btn minus" onclick ="changeNumberOfUnits('minus',  ${item.id})">-</div>
                    <div class="number">${item.numberOfUnits}</div>
                    <div class="btn plus" onclick ="changeNumberOfUnits('plus',  ${item.id})">+</div>
                </div>
            </td>
            <td style="cursor: pointer;" onclick =" removeItemFromCart(${item.id})">Xoá</td>
         
        </tr>
        `
    })
}

// remove item from cart
function removeItemFromCart(id){
    cart = cart.filter((item) => item.id !== id);

    updateCart();
}

//change number of unit for an item 
function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {

        let numberOfUnits = item.numberOfUnits

        if(item.id === id){
            if(action === "minus" && numberOfUnits > 1){
                numberOfUnits--;
            } else if(action === "plus" ){
                numberOfUnits++;
            }
        }

        return {
            ...item,
            numberOfUnits,
        };
    })

    updateCart();
}


function name(){
    document.querySelector(".header__add-cart").style.display = "block";
}
function element(){
    document.querySelector('.header__add-cart').style.display = "none";
}
function love(){
   var like = document.querySelector(".icon-love");
   alert("Đã yêu thích")
   like.style.color = "red";
}

