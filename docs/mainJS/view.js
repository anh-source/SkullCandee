const view = {}

let cartList = []

view.showComponent = function (name) {

    switch (name) {
        case 'default': {

            let app = document.getElementById('app')
            app.innerHTML = component.header + component.default + component.footer

            defaultFunction()

            let logIn = document.getElementById('sign-in')

            let shopping1 = document.getElementById("navbar-column-1")

            shopping1.onclick = shoppingHandler

            let shopping2 = document.getElementById("navbar-column-2")

            shopping2.onclick = shoppingHandler

            let shopping3 = document.getElementById("navbar-column-3")

            shopping3.onclick = shoppingHandler

            let shopping4 = document.getElementById("navbar-column-4")

            shopping4.onclick = shoppingHandler


            function shoppingHandler() {

                view.showComponent('shopPage1')

            }
            logIn.onclick = signIn

            function signIn() {

                if (typeof (localStorage.getItem('dataUser')) == 'string') {

                    view.showComponent('user')

                } else {

                    view.showComponent('logIn')

                }

            }

            let shopBtn = document.getElementById('shop')

            shopBtn.onclick = showListHandler

            function showListHandler() {
                view.showComponent('shopPage1')
            }

            function linkToShopHandler() {

                view.showComponent('shopPage1')

            }

            let shopNowBtn = document.getElementById('shop-btn')
            shopNowBtn.onclick = linkToShopHandler

            let shopNowBtn1 = document.getElementById('shop-btn-1')
            shopNowBtn1.onclick = linkToShopHandler

            let shopNowBtn2 = document.getElementById('shop-btn-2')
            shopNowBtn2.onclick = linkToShopHandler

            let backgroundCoverBtn1 = document.getElementById('background-cover-img-1')
            backgroundCoverBtn1.onclick = linkToShopHandler

            let backgroundCoverBtn2 = document.getElementById('background-cover-img-2')
            backgroundCoverBtn2.onclick = linkToShopHandler

            let backgroundCoverBtn3 = document.getElementById('background-cover-img-3')
            backgroundCoverBtn3.onclick = linkToShopHandler

            let backgroundRightChild1 = document.getElementById('background-right-child-1')
            backgroundRightChild1.onclick = linkToShopHandler

            let backgroundRightChild2 = document.getElementById('background-right-child-2')
            backgroundRightChild2.onclick = linkToShopHandler

            let cartBtn = document.getElementById("cart-btn")

            cartBtn.onclick = showCartHandler

            function showCartHandler() {
                view.showComponent("showCart")
            }

            break

        }

        case 'logIn': {
            let app = document.getElementById('app')

            app.innerHTML = component.header + component.logIn + component.footer

            defaultFunction()

            let register = document.getElementById('create-account')

            register.onclick = createAccount

            function createAccount() {

                view.showComponent('register')

            }
            let shopping1 = document.getElementById("navbar-column-1")

            shopping1.onclick = shoppingHandler

            let shopping2 = document.getElementById("navbar-column-2")

            shopping2.onclick = shoppingHandler

            let shopping3 = document.getElementById("navbar-column-3")

            shopping3.onclick = shoppingHandler

            let shopping4 = document.getElementById("navbar-column-4")

            shopping4.onclick = shoppingHandler


            function shoppingHandler() {

                view.showComponent('shopPage1')

            }

            let logIn = document.getElementById('sign-in')

            logIn.onclick = signIn

            function signIn() {

                view.showComponent('logIn')
            }

            let shopBtn = document.getElementById('shop')

            shopBtn.onclick = showListHandler

            function showListHandler() {
                view.showComponent('shopPage1')
            }

            let formLogIn = document.getElementById('log-in-side-container')

            formLogIn.onsubmit = formLogInHandler

            function formLogInHandler(event) {

                event.preventDefault()

                let logInInfor = {
                    email: formLogIn.email.value,
                    password: formLogIn.password.value
                }

                let validateResult = [
                    view.validateResult(logInInfor.email, 'email-error', 'Invalid Email'),
                    view.validateResult(logInInfor.password, 'password-error', 'Invalid Password')

                ]

                // submit 

                if (check(validateResult)) {

                    controller.logIn(logInInfor)

                }

            }
            let cartBtn = document.getElementById("cart-btn")

            cartBtn.onclick = showCartHandler

            function showCartHandler() {
                view.showComponent("showCart")
            }
            break

        }

        case 'user': {

            let app = document.getElementById('app')

            app.innerHTML = component.header + component.user + component.footer;

            defaultFunction()

            let inforUser = JSON.parse(localStorage.getItem('dataUser'));

            let displayName = inforUser.user.displayName

            document.getElementById('name-user').innerText = displayName;

            let signOut = document.getElementById('sign-out')
            signOut.onclick = sigOutHandler

            function sigOutHandler() {
                localStorage.removeItem('dataUser')
                view.showComponent('logIn')
            }

            let shopping1 = document.getElementById("navbar-column-1")

            shopping1.onclick = shoppingHandler

            let shopping2 = document.getElementById("navbar-column-2")

            shopping2.onclick = shoppingHandler

            let shopping3 = document.getElementById("navbar-column-3")

            shopping3.onclick = shoppingHandler

            let shopping4 = document.getElementById("navbar-column-4")

            shopping4.onclick = shoppingHandler


            function shoppingHandler() {

                view.showComponent('shopPage1')

            }

            let shopBtn = document.getElementById('shop')

            shopBtn.onclick = showListHandler

            function showListHandler() {
                view.showComponent('shopPage1')
            }
            let cartBtn = document.getElementById("cart-btn")

            cartBtn.onclick = showCartHandler

            function showCartHandler() {
                view.showComponent("showCart")
            }

            break
        }

        case 'register': {

            let app = document.getElementById('app')

            app.innerHTML = component.header + component.register + component.footer

            defaultFunction()

            let shopBtn = document.getElementById('shop')

            shopBtn.onclick = showListHandler

            function showListHandler() {
                view.showComponent('shopPage1')
            }

            let formsubmit = document.getElementById('register-container')

            formsubmit.onsubmit = formSubmitHandler

            function formSubmitHandler(event) {

                event.preventDefault()
                //1, get data
                let registerInfor = {

                    firstname: formsubmit.firstname.value,
                    lastname: formsubmit.lastname.value,
                    email: formsubmit.email.value,
                    password: formsubmit.password.value,
                    confirmPassword: formsubmit.confirmPassword.value
                }

                console.log(registerInfor)

                //2,validate information

                let validateResult = [

                    view.validateResult(registerInfor.firstname, 'firstname-error', 'Invalid First Name'),
                    view.validateResult(registerInfor.lastname, 'lastname-error', 'Invalid Last Name'),
                    view.validateResult(registerInfor.email, 'email-error', 'Invalid Email'),
                    view.validateResult(registerInfor.password && registerInfor.password.length >= 6, 'password-error', 'Invalid Password'),
                    view.validateResult(registerInfor.confirmPassword === registerInfor.password, 'confirmPassword-error', 'Invalid Confirm Password')

                ]

                //3,check submitForm

                if (check(validateResult)) {

                    controller.register(registerInfor)
                }
                let shopping1 = document.getElementById("navbar-column-1")

                shopping1.onclick = shoppingHandler

                let shopping2 = document.getElementById("navbar-column-2")

                shopping2.onclick = shoppingHandler

                let shopping3 = document.getElementById("navbar-column-3")

                shopping3.onclick = shoppingHandler

                let shopping4 = document.getElementById("navbar-column-4")

                shopping4.onclick = shoppingHandler


                function shoppingHandler() {

                    view.showComponent('shopPage1')

                }
            }

            defaultFunction()

            let logIn = document.getElementById('sign-in')

            logIn.onclick = signIn

            function signIn() {

                view.showComponent('logIn')
            }

            let cartBtn = document.getElementById("cart-btn")

            cartBtn.onclick = showCartHandler

            function showCartHandler() {
                view.showComponent("showCart")
            }

            break
        }

        case 'shopPage1': {

            let app = document.getElementById('app')

            app.innerHTML = component.header + component.shopPage1 + component.footer;

            if (model.productInfo == null) {
                controller.loadShowPage()
            } else {
                view.showPage()
            }

            defaultFunction()

            let sortRole = document.getElementById("sort-role")

            sortRole.onchange = function () {
                controller.changeOrder(sortRole.value)
                view.showComponent("shopPage1")
                console.log('1')
            }

            let shopping1 = document.getElementById("navbar-column-1")

            shopping1.onclick = shoppingHandler

            let shopping2 = document.getElementById("navbar-column-2")

            shopping2.onclick = shoppingHandler

            let shopping3 = document.getElementById("navbar-column-3")

            shopping3.onclick = shoppingHandler

            let shopping4 = document.getElementById("navbar-column-4")

            shopping4.onclick = shoppingHandler


            function shoppingHandler() {

                view.showComponent('shopPage1')
                
            }


            let logIn = document.getElementById('sign-in')

            logIn.onclick = signIn

            function signIn() {

                if (typeof (localStorage.getItem('dataUser')) == 'string') {

                    view.showComponent('user')

                } else {

                    view.showComponent('logIn')

                }

            }

            let cartBtn = document.getElementById("cart-btn")

            cartBtn.onclick = showCartHandler

            function showCartHandler() {
                view.showComponent("showCart")
            }



            break
        }

        case 'detail': {
            let app = document.getElementById('app')

            app.innerHTML = component.header + component.detail + component.footer;

            view.showDetail(model.currentProductInfo)

            let shopBtn = document.getElementById('shop')

            shopBtn.onclick = showListHandler

            function showListHandler() {
                view.showComponent('shopPage1')
            }

            let cartBtn = document.getElementById("cart-btn")

            cartBtn.onclick = showCartHandler

            function showCartHandler() {
                view.showComponent("showCart")
            }

            let shopping1 = document.getElementById("navbar-column-1")

            shopping1.onclick = shoppingHandler

            let shopping2 = document.getElementById("navbar-column-2")

            shopping2.onclick = shoppingHandler

            let shopping3 = document.getElementById("navbar-column-3")

            shopping3.onclick = shoppingHandler

            let shopping4 = document.getElementById("navbar-column-4")

            shopping4.onclick = shoppingHandler


            function shoppingHandler() {

                view.showComponent('shopPage1')
                
            }



            let logIn = document.getElementById('sign-in')

            logIn.onclick = signIn

            function signIn() {

                if (typeof (localStorage.getItem('dataUser')) == 'string') {

                    view.showComponent('user')

                } else {

                    view.showComponent('logIn')

                }

            }

            defaultFunction()



            break

        }

        case 'showCart': {

            let app = document.getElementById('app')

            app.innerHTML = component.header + component.showCart + component.footer;

            let shopBtn = document.getElementById('shop')

            shopBtn.onclick = showListHandler

            function showListHandler() {
                view.showComponent('shopPage1')
            }

            let shopping1 = document.getElementById("navbar-column-1")

            shopping1.onclick = shoppingHandler

            let shopping2 = document.getElementById("navbar-column-2")

            shopping2.onclick = shoppingHandler

            let shopping3 = document.getElementById("navbar-column-3")

            shopping3.onclick = shoppingHandler

            let shopping4 = document.getElementById("navbar-column-4")

            shopping4.onclick = shoppingHandler


            function shoppingHandler() {

                view.showComponent('shopPage1')
                
            }

            defaultFunction()

            let logIn = document.getElementById('sign-in')

            logIn.onclick = signIn

            function signIn() {

                if (typeof (localStorage.getItem('dataUser')) == 'string') {

                    view.showComponent('user')

                } else {

                    view.showComponent('logIn')

                }

            }

            view.showCartList()



            break

        }

    }
}

function onOff(element) {


    if (element.style.display == 'none') {

        element.style.display = 'block'

    } else {
        element.style.display = 'none'
    }

}

function defaultFunction() {

    window.onscroll = function () {

        let slogan = document.getElementById('slogan')

        if (window.scrollY > 0) {

            slogan.style.display = 'none'


        }

        if (window.scrollY == 0) {
            slogan.style.transition = 'all 0.4s 0.5s ease'
            slogan.style.display = 'block'


        }

    }

    let search = document.getElementById('search-navbar-container')

    search.style.display = 'none'

    let exitBtn = document.getElementById('search-button')

    exitBtn.addEventListener('click', function () {

        onOff(search)

    })

    let exit = document.getElementById('exit')

    exit.addEventListener('click', function () {

        onOff(search)

    })

}

function tab(event, name) {

    let i, tabContent, tabButton;

    //Get all elements with class="input-infor" and hide them
    tabContent = document.getElementsByClassName('input-infor')

    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none'
    }
    console.log(tabContent.length)

    // Get all elements with class="navbar-button" and remove the class "active"

    tabButton = document.getElementsByClassName("navbar-button")

    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" active", "")

    }

    console.log(tabButton.length)

    document.getElementById(name).style.display = 'block'
    console.log(name)
    event.currentTarget.className += " active";

}

view.setText = function (id, text) {

    document.getElementById(id).innerText = text

}

view.validateResult = function (condition, id, text) {

    if (condition) {
        view.setText(id, '')
        return true

    } else {

        view.setText(id, text)
        return false

    }

}

function check(validateResult) {

    for (let result of validateResult) {

        if (!result) {
            return false

        } else {
            return true
        }
    }

}

view.showPage = function () {


    let infos = model.productInfo
    let productContainer = document.getElementById('product-container')
    productContainer.innerHTML = ``
    let productIndex = 0
    let row = 1
    for (let info of infos) {

        if (productIndex % 3 == 0) {

            productContainer.innerHTML += `
            <div class="product-detail-row" id="${row}"></div>
            `
            row += 1
        }

        let productdetailRow = document.getElementById(`${row - 1}`)

        let productDetail = `

            <div class="product-cell" id="product-cell" onclick="view.littleFunction(${productIndex})">
                <a href="#" class="product-tank">
                    <figure class="product-figure">
                        <img class="product-picture"
                            src="${info.image}"
                            alt="">
                    </figure>           
                    <div class="name-product-container">
                        <div class="name-product">
                            ${info.name}</div>          
                        <div class="price-container">
                            <div class="price-tag">
                            $ ${info.price}
                            </div>          
                        </div>          
                    </div>
                </a>
            </div>

        `
        productdetailRow.innerHTML += productDetail
        productIndex += 1
    }
}

view.littleFunction = function (index) {

    let infos = model.productInfo

    for (let info of infos) {

        if (info.idProduct == index) {

            model.saveCurrentProductInfo(info)

        }
    }

    view.showComponent('detail')

}

view.showDetail = function (info) {

    console.log(info)

    let backgroundCoverContainer = document.getElementById('backgroundCover-container')

    backgroundCoverContainer.innerHTML = `
    <div class="background-cover" id="background-cover" style ="background: url('${info.background}') center center no-repeat" >
        <div class="center-container">
        <ul class="product-infor-container">
            <li id="name-tag-product" class="tag-product">
                <h3>
                    ${info.name}
                </h3>
            </li>

            <li id="price-tag-product" class="tag-product">
                <h3>
                    $ ${info.price}
                </h3>
            </li>
            <li id="brief-tag-product" class="tag-product">
                <div class="form-label">

                    <div class="little-img" title="White/Crimson" style="background: url('${info.littleImage}') center center no-repeat; background-size: contain"></div>
                    <div class="little-text-sub-container">
                        <div class="little-text-sub">${info.littlename}</div>
                    </div>

                </div>
            </li>

            <li id="cart-tag-product" class="tag-product">

                <input type="number" min="1" max="9" step="1" value="1" class="number-index" id="number-index">

                <button class="cart-container" id="cart-container">
                    ADD TO CART
                </button>

            </li>

            <li class="tag-product" id="freeship-container">
                <div class="freeship-sub">Free shipping on orders over $100. Just $3.99 on everything else!</div>
            </li>

            <li id="footer-tag-product" class="tag-product">
                <div class="product-video-container">Product Video</div>
                <div class="review-container"> Review</div>
            </li>
        </ul>
    </div>
</div>  
    `

    let inputSubmit = document.getElementById("number-index")

    let cartContainer = document.getElementById("cart-container")

    cartContainer.onclick = function () {

        view.addCart(info, inputSubmit.value)

    }

}


view.addCart = function (info, quantity) {

    let index = -1

    for (let i = 0; i < cartList.length; i++) {
        if (info == cartList[i][0]) {
            index = i;
            cartList[i] = [info, quantity]
            break
        }
    }

    if (index < 0) {
        cartList.push([info, quantity])
    }
}

view.removeCart = function (id) {


    for (let i = 0; i < cartList.length; i++) {
        let item = cartList[i]
        if (id == item[0].idProduct) cartList.splice(i, 1)
    }
    view.showComponent("showCart")

}

view.showCartList = function () {

    let mainCart = document.getElementById("main-cart-list")

    mainCart.innerHTML += `
        <div class="cart-tank-row">
            <p class="cart-title" id="cart-title-1">Item</p>
            <p class="cart-title">Price</p>
            <p class="cart-title">Quantity</p>
            <p class="cart-title">Total</p>
        </div>
    `

    let subTotal = 0


    for (let item of cartList) {

        mainCart.innerHTML += `
        <div class="cart-product-container">
                        <div class="cart-product" id="column-1">
                            <div class="cart-img-product">
                                <img src="${item[0].littleImage}"
                                    alt="">
                            </div>
                            <div class="cart-img-title">
                                <div class="main-cart-title">${item[0].name}</div>
                                <a class="remove-btn" href="#" onclick=view.removeCart(${item[0].idProduct})>Remove</a>

                            </div>
                        </div>
                        <div class="cart-product">${item[0].price}</div>
                        <div class="cart-product">
                            <div class="cart-product-quantity">
                                ${item[1]}
                            </div>
                        </div>
                        <div class="cart-product">${Math.round(item[0].price * item[1] * 100) / 100}</div>
                    </div>
        `
        subTotal += Math.round(item[0].price * item[1] * 100) / 100
    }

    let checkOutContainer = document.getElementById("check-out-corner-container")
    checkOutContainer.innerHTML = `
    <div class="check-out-corner">

                            <div class="check-out-row" id="check-out-row-1">
                                <p class="check-out-title">Subtotal</p>
                                <p class="subtotal-price">$${subTotal}</p>
                            </div>
                            <div class="check-out-row" id="check-out-row-2">
                                <p class="check-out-title">Shipping</p>
                                <p class="shipping-price"></p>
                            </div>
                            <div class="check-out-row">
                                <p class="check-out-title" id="total-title">TOTAL</p>
                                <p class="total-price">$${subTotal}</p>
                            </div>

                            <button class="shop-btn" id="checkOut-btn" >
                                Check Out
                            </button>
                        </div>
        
        `

    let checkOut = document.getElementById("checkOut-btn")

    checkOut.onclick = afterShopping

    function afterShopping() {


        if (cartList[0]) {

            alert("Thank You")
            window.location.reload(false);

        }


    }


}






