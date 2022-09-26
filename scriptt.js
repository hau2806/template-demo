const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H3").innerText
        var productPrice = product.querySelector("SPAN.price").innerText
        // console.log(productPrice,productName,productImg)
        addcart(productPrice,productName,productImg)
        deleteCart()
    })
})
function addcart(productPrice,productName,productImg){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    // for (var i=0;i<cartItem.length;i++){
    //     var productT = document.querySelectorAll(".tle")
    //     if(productT[i].innerHTML==productName){
    //         alert("Sản phẩm của bạn đã có trong giỏ hàng")
    //         return
    //     }
    // }
    var trcontent = '<tr><td  style = "display: flex; align-items: center;"><img style = "width: 70px;" src="'+productImg+'" alt="ảnh 2"><span class="tle">'+productName+'</span> </td><td><p>$<span class="price">'+productPrice+'</span> </p></td><td><input style="width: 25px;" type="number" value="1" min="0"></td><td><span style="cursor: pointer;" class = "cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var carTable = document.querySelector("tbody")
    carTable.append(addtr)

    carttotal()
    deleteCart()
}
//------------total price---------
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    // console.log(cartItem.length)
    for (var i=0;i<cartItem.length;i++){
       var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        // console.log(productPrice)
        totalA = inputValue*productPrice*1000
        // totalB = totalA.toLocaleString('de-DE')
        // console.log(totalB)
        totalC = totalC + totalA
        // totalD = totalC.toLocaleString('de-DE')
        // console.log(totalC)
    }
    var cartTotalA = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cartAmount ")
    cartTotalA.innerHTML = totalC  
    // cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()  
    // console.log(cartTotalA)
    document.getElementsByClassName('cartAmount')[0].textContent = i /= 1;
}
// function cartt(){
//     for(var i=0;i<cartItem.length;i++){
//         var cartSp = document.querySelectorAll(".cartt")
//         // cartPrice.innerHTML = totalC.toLocaleString('de-DE')
//     }
// }


//--------xóa-------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
            // console.log(cartitemR)
        }) 
    }
}
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
      inputValue.addEventListener("change",function(){
        carttotal()
      })
    }
}

// const cartbtn = document.querySelector(".fa-xmark")
// const cartshow = document.querySelector(".shopping")
// cartshow.addEventListener("click",function(){
//     console.log(cartshow)
//     document.querySelector(".shopping").style.right = "0"
// })
// cartbtn.addEventListener("click",function(){
//     console.log(cartshow)
//     // document.querySelector(".cartt").style.right = "-100%"
// })
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

// function menu(){
//     document.querySelector(".toggle").style.display = "block";
// }
// const shopping =  document.querySelector('shopping');

// const name = document.getElementById('name');
// shopping.onclick = function(){
//     shopping.classList.shopping('active');
//     name.classList.shopping('active');

// }
// document.onclick = function(clickEvent){
//     if(clickEvent.target.id !== 'name' && clickEvent.target.id !== 'shopping' ){
//         shopping.classList.remove('active');
//         name.classList.remove('active');
//     }
// }
