const component = {}

component.default = `
<header>
<div class="main-header">
    <div class="left-header">

        <a href="./index.html"><img src="./image/logo.png" alt="logo" width="40px" height="33px"
                class="slogan-img"></a>
        <a href="./index.html" class="slogan-img"><img src="./image/slogan.png" alt="" width="150px"
                height="37px" id="slogan"></a>

        <ul class="header-list" id="left-header-list">

            <li class="navbar-list" id="navbar-list-1">

                <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                <div class="navbar-container">
                    <ul id="navbar-ul">
                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                    background-size: 315px 100px">

                                        <p class="navbar-sub">HEADPHONES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                        background-size: 315px 100px">

                                        <p class="navbar-sub">EARPUDS</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                            background-size: 315px 100px">

                                        <p class="navbar-sub">ACCESSORIES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                        background-size: 315px 100px">

                                        <p class="navbar-sub">SPECIALS</p>

                                    </div>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="navbar-title">
                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                    <a href="">
                                        <p class="navbar-sub-detail">Wired Headphones</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                    </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Earpuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Wired Earbuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Indy True Wireless</p>
                            </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Hats</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Speakers</p>
                            </a>
                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">12 Moods</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Custom Product</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">New Arrival</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Sale</p>
                            </a>
                        </div>

                    </div>

                    <div class="show-all">
                        <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                        <div></div>

                    </div>
                </div>

            </li>
            <li class="navbar-list" id="navbar-list-2">
                <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
            </li>
        </ul>


    </div>

    <div class="right-header">

        <ul class="header-list">
            <li class="navbar-list" id="navbar-list-3">
                <a href="#" class="right-navbar-list-anchor">Location</a>

                <div class="navbar-container">
                    <ul class="location">

                        <li class="local-area">NORTH AMERICA

                            <p class="location-store">Canada</p>
                            <p class="location-store">Mexico</p>
                            <p class="location-store">United State</p>
                        </li>

                        <li class="local-area">
                            EUROPE / MIDDLE EARTH
                            <p class="location-store">Austria</p>
                            <p class="location-store">France</p>
                            <p class="location-store">Germany</p>
                            <p class="location-store">Switzerland</p>
                            <p class="location-store">United Kingdom</p>
                            <p class="location-store">Europe (EN)</p>
                            <p class="location-store">Other Middle Earth Countries</p>
                        </li>

                        <li class="local-area">AFRICA
                            <p class="location-store">South Africa</p><br>
                            <div class="location" id="local-area-asia">ASIA
                                <p class="location-store">India</p>
                                <p class="location-store">Japan</p>
                                <p class="location-store">South Korea</p>
                                <p class="location-store">Taiwan</p>
                            </div>


                        </li>
                        <li class="local-area" id="local-area-pacific">PACIFIC
                            <p class="location-store">Australia</p>
                            <p class="location-store">New Zealand</p>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="navbar-list" id="navbar-list-4">
                <a href="#" class="right-navbar-list-anchor">Support</a>

                <div class="navbar-container">
                    <ul class="service-support">
                        <li class="service-support-service">HELP &nbsp; CENTER</li>
                        <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                        <li class="service-support-service">WARRANTY</li>
                        <li class="service-support-service">ORDER &nbsp; STATUS</li>
                        <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                    </ul>

                </div>
            </li>
            <li class="navbar-list"><a href="#"><i class="material-icons" id="sign-in">perm_identity</i></a></li>

            <li class="navbar-list" id="navbar-list-6">
                <a href="#"><i class="material-icons" id="search-button">search</i></a>
                <div id="search-navbar-container">
                    <div class="search-navbar">
                        <form action="" class="search-input">
                            <input type="search" class="search-btn" placeholder="Search">
                            <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                        </form>
                    </div>

                </div>
            </li>
            <li class="navbar-list"><i id="cart-btn" class="material-icons" >work_outline</i></li>


        </ul>

    </div>

</div>


</header>

<main class="main">

<div class="freeship-navbar">
    <p>Free shipping on orders over $100. Just $3.99 on everything else!</p>
</div>

<div class="background-1">

    <div class="background-1-left">
        <div class="background-sub">
            <h5>EXPECT GOOSEBUMPS.</h5>

            <p class="paragraph">Three technologies, one groundbreaking experience.
                Introducing Crusher ANC, the most immersive
                headphones ever made .
            </p>

            <button class="shop-btn" id="shop-btn">SHOP NOW</button>


        </div>


    </div>

    <div class="background-1-right">


        <a href="#" class="background-right-child-1" id="background-right-child-1"></a>
        <a  href="#"class="background-right-child-2" id="background-right-child-2"></a>

    </div>


</div>

<div class="background-2">
    <a href="#" class="background-cover-img" id="background-cover-img-1"></a>
    <a href="#" class="background-cover-img" id="background-cover-img-2"></a>
    <a href="#" class="background-cover-img" id="background-cover-img-3"></a>

</div>

<div class="background-3">
    <div class="background-sub" id="background-sub-2">
        <h5 class="new-h5">HEAR BEYOND THE SURFACE.</h5>

        <p class="paragraph">Meet Crusher ANC, a groundbreaking,
            immersive headphone that can be tuned to your unique hearing
        </p>

        <button class="shop-btn" id="shop-btn-1">SHOP NOW</button>
    </div>
</div>

<div class="background-4">
    <div class="background-sub" id="background-sub-2">
        <h5 class="new-h5">HEAR BEYOND THE SURFACE.</h5>

        <p class="paragraph">Meet Crusher ANC, a groundbreaking,
            immersive headphone that can be tuned to your unique hearing
        </p>

        <button class="shop-btn" id="shop-btn-2">SHOP NOW</button>
    </div>


</div>


</main>

<footer class="footer-main">

<div class="footer-top-container">
    <div class="footer-top">
        <h4>HEAD IT FIRST</h4>
        <p>Sign up and save on your first order.
            Be the first to get access to limited-edition products,
            exclusive music performances, and athlete stories.</p>
        <div class="email-container">
            <input type="email" name="email" placeholder="Email" class="email-btn">

            <button class="send">Send</button>

        </div>

    </div>

</div>

<div class="footer-bottom-container">

    <div class="footer-bottom-column" id="footer-bottom-column-1">

        <div class="footer-bottom-tank">

            <p>F0LLOW US</p>

            <div class="social-icon-container">
                <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                <a href="" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
            </div>

        </div>

    </div>
    <div class="footer-bottom-column" id="footer-bottom-column-2">
        <div class="paragraph-tank">
            <div class="paragraph-column">
                <p class="paragraph-title">Help Center</p>
                <p class="paragraph-title">Contact Us</p>
                <p class="paragraph-title">Account</p>
                <p class="paragraph-title">Product Setup</p>
                <p class="paragraph-title">Warranty</p>
                <p class="paragraph-title">Order Status</p>
            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Custom Product</p>
                <p class="paragraph-title"> Bulk Orders</p>
                <p class="paragraph-title">Press Releases</p>

            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Our Story</p>
                <p class="paragraph-title">Born in PC</p>
                <p class="paragraph-title">Protect Our Winters</p>
                <p class="paragraph-title">Careers</p>
            </div>
        </div>
    </div>

    <div class="footer-bottom-column" id="footer-bottom-column-3">
        <div class="podcast-container">
            <p>SUBSRCIBE TO OUR PODCAST</p>
            <div class="podcast-tank">
                <a href="#" class="paragraph-title">iTunes</a>
                <a href="#" class="paragraph-title">Spotify</a>
                <a href="#" class="paragraph-title">YouTube</a>
            </div>
        </div>


    </div>


</footer>

`

component.logIn = `
<header>
<div class="main-header">
    <div class="left-header">

        <a href="./index.html"><img src="./image/logo.png" alt="logo" width="40px" height="33px"
                class="slogan-img"></a>
        <a href="./index.html" class="slogan-img"><img src="./image/slogan.png" alt="" width="150px"
                height="37px" id="slogan"></a>

        <ul class="header-list" id="left-header-list">

            <li class="navbar-list" id="navbar-list-1">

                <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                <div class="navbar-container">
                    <ul id="navbar-ul">
                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                            background-size: 315px 100px">

                                        <p class="navbar-sub">HEADPHONES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">EARPUDS</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                                    background-size: 315px 100px">

                                        <p class="navbar-sub">ACCESSORIES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">SPECIALS</p>

                                    </div>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="navbar-title">
                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                    <a href="">
                                        <p class="navbar-sub-detail">Wired Headphones</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                    </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Earpuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Wired Earbuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Indy True Wireless</p>
                            </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Hats</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Speakers</p>
                            </a>
                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">12 Moods</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Custom Product</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">New Arrival</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Sale</p>
                            </a>
                        </div>

                    </div>

                    <div class="show-all">
                        <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                        <div></div>

                    </div>
                </div>

            </li>
            <li class="navbar-list" id="navbar-list-2">
                <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
            </li>
        </ul>


    </div>

    <div class="right-header">

        <ul class="header-list">
            <li class="navbar-list" id="navbar-list-3">
                <a href="#" class="right-navbar-list-anchor">Location</a>

                <div class="navbar-container">
                    <ul class="location">

                        <li class="local-area">NORTH AMERICA

                            <p class="location-store">Canada</p>
                            <p class="location-store">Mexico</p>
                            <p class="location-store">United State</p>
                        </li>

                        <li class="local-area">
                            EUROPE / MIDDLE EARTH
                            <p class="location-store">Austria</p>
                            <p class="location-store">France</p>
                            <p class="location-store">Germany</p>
                            <p class="location-store">Switzerland</p>
                            <p class="location-store">United Kingdom</p>
                            <p class="location-store">Europe (EN)</p>
                            <p class="location-store">Other Middle Earth Countries</p>
                        </li>

                        <li class="local-area">AFRICA
                            <p class="location-store">South Africa</p><br>
                            <div class="location" id="local-area-asia">ASIA
                                <p class="location-store">India</p>
                                <p class="location-store">Japan</p>
                                <p class="location-store">South Korea</p>
                                <p class="location-store">Taiwan</p>
                            </div>


                        </li>
                        <li class="local-area" id="local-area-pacific">PACIFIC
                            <p class="location-store">Australia</p>
                            <p class="location-store">New Zealand</p>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="navbar-list" id="navbar-list-4">
                <a href="#" class="right-navbar-list-anchor">Support</a>

                <div class="navbar-container">
                    <ul class="service-support">
                        <li class="service-support-service">HELP &nbsp; CENTER</li>
                        <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                        <li class="service-support-service">WARRANTY</li>
                        <li class="service-support-service">ORDER &nbsp; STATUS</li>
                        <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                    </ul>

                </div>
            </li>
            <li class="navbar-list"><a href="#"><i class="material-icons" id="sign-in">perm_identity</i></a></li>

            <li class="navbar-list" id="navbar-list-6">
                <a href="#"><i class="material-icons" id="search-button">search</i></a>
                <div id="search-navbar-container">
                    <div class="search-navbar">
                        <form action="" class="search-input">
                            <input type="search" class="search-btn" placeholder="Search">
                            <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                        </form>
                    </div>

                </div>
            </li>
            <li class="navbar-list"><i id="cart-btn" class="material-icons">work_outline</i></li>


        </ul>

    </div>

</div>


</header>

<main>
<div class="log-in-form">

    <div class="log-in-container">

        <h3 class="page-heading">SIGN IN</h3>

        <div class="log-in-tank">

            <div class="log-in-side">

                <form class="log-in-side-container" id="log-in-side-container">

                    <p class="log-in-sub">Email Address : </p>

                    <input type="email" name="email" id="email-btn" placeholder="Email" class="log-in-btn">
                    <div id="email-error" class="message-error"></div>

                    <p class="log-in-sub">Password :</p>

                    <input type="password" name="password" id="password-btn" placeholder="Password"
                        class="log-in-btn">
                    <div id="password-error" class="message-error"></div>

                    <div class="submit-container">

                    <div id="login-error"></div>
                        <button type= "submit" class="submit-btn">SIGN IN</button>
                    </div>
                </form>

            </div>

            <div class="register-side">

                <h3>NEW CUSTOMER</h3>

                <div class="register-interest">
                    <p>Create an account with us and you'll be able to:</p>
                    <ul class="register-interest-container">
                        <li class="register-interset-detail">&nbsp;&nbsp; Check out faster</li>
                        <li class="register-interset-detail">&nbsp;&nbsp; Save multiple shipping addresses</li>
                        <li class="register-interset-detail">&nbsp;&nbsp; Access your order history</li>
                        <li class="register-interset-detail">&nbsp;&nbsp; Track new orders</li>
                    </ul>

                </div>

                <button class="register-btn" id="create-account">Create Account</button>

            </div>
        </div>

    </div>
</div>




</main>

<footer class="footer-main">

<div class="footer-top-container">
    <div class="footer-top">
        <h4>HEAD IT FIRST</h4>
        <p>Sign up and save on your first order.
            Be the first to get access to limited-edition products,
            exclusive music performances, and athlete stories.</p>
        <div class="email-container">
            <input type="email" name="email" placeholder="Email" class="email-btn">

            <button type="submit" class="send">Send</button>

        </div>

    </div>

</div>

<div class="footer-bottom-container">

    <div class="footer-bottom-column" id="footer-bottom-column-1">

        <div class="footer-bottom-tank">

            <p>F0LLOW US</p>

            <div class="social-icon-container">
                <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                <a href="" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
            </div>

        </div>

    </div>
    <div class="footer-bottom-column" id="footer-bottom-column-2">
        <div class="paragraph-tank">
            <div class="paragraph-column">
                <p class="paragraph-title">Help Center</p>
                <p class="paragraph-title">Contact Us</p>
                <p class="paragraph-title">Account</p>
                <p class="paragraph-title">Product Setup</p>
                <p class="paragraph-title">Warranty</p>
                <p class="paragraph-title">Order Status</p>
            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Custom Product</p>
                <p class="paragraph-title"> Bulk Orders</p>
                <p class="paragraph-title">Press Releases</p>

            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Our Story</p>
                <p class="paragraph-title">Born in PC</p>
                <p class="paragraph-title">Protect Our Winters</p>
                <p class="paragraph-title">Careers</p>
            </div>
        </div>
    </div>

    <div class="footer-bottom-column" id="footer-bottom-column-3">
        <div class="podcast-container">
            <p>SUBSRCIBE TO OUR PODCAST</p>
            <div class="podcast-tank">
                <a href="#" class="paragraph-title">iTunes</a>
                <a href="#" class="paragraph-title">Spotify</a>
                <a href="#" class="paragraph-title">YouTube</a>
            </div>
        </div>


    </div>

</footer>

`
component.user = `
<header>
<div class="main-header">
    <div class="left-header">

        <a href="./index.html"><img src="./image/logo.png" alt="logo" width="40px" height="33px"
                class="slogan-img"></a>
        <a href="./index.html" class="slogan-img"><img src="./image/slogan.png" alt="" width="150px"
                height="37px" id="slogan"></a>

        <ul class="header-list" id="left-header-list">

            <li class="navbar-list" id="navbar-list-1">

                <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                <div class="navbar-container">
                    <ul id="navbar-ul">
                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                            background-size: 315px 100px">

                                        <p class="navbar-sub">HEADPHONES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">EARPUDS</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                                    background-size: 315px 100px">

                                        <p class="navbar-sub">ACCESSORIES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">SPECIALS</p>

                                    </div>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="navbar-title">
                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                    <a href="">
                                        <p class="navbar-sub-detail">Wired Headphones</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                    </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Earpuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Wired Earbuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Indy True Wireless</p>
                            </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Hats</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Speakers</p>
                            </a>
                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">12 Moods</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Custom Product</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">New Arrival</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Sale</p>
                            </a>
                        </div>

                    </div>

                    <div class="show-all">
                        <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                        <div></div>

                    </div>
                </div>

            </li>
            <li class="navbar-list" id="navbar-list-2">
                <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
            </li>
        </ul>


    </div>

    <div class="right-header">

        <ul class="header-list">
            <li class="navbar-list" id="navbar-list-3">
                <a href="#" class="right-navbar-list-anchor">Location</a>

                <div class="navbar-container">
                    <ul class="location">

                        <li class="local-area">NORTH AMERICA

                            <p class="location-store">Canada</p>
                            <p class="location-store">Mexico</p>
                            <p class="location-store">United State</p>
                        </li>

                        <li class="local-area">
                            EUROPE / MIDDLE EARTH
                            <p class="location-store">Austria</p>
                            <p class="location-store">France</p>
                            <p class="location-store">Germany</p>
                            <p class="location-store">Switzerland</p>
                            <p class="location-store">United Kingdom</p>
                            <p class="location-store">Europe (EN)</p>
                            <p class="location-store">Other Middle Earth Countries</p>
                        </li>

                        <li class="local-area">AFRICA
                            <p class="location-store">South Africa</p><br>
                            <div class="location" id="local-area-asia">ASIA
                                <p class="location-store">India</p>
                                <p class="location-store">Japan</p>
                                <p class="location-store">South Korea</p>
                                <p class="location-store">Taiwan</p>
                            </div>


                        </li>
                        <li class="local-area" id="local-area-pacific">PACIFIC
                            <p class="location-store">Australia</p>
                            <p class="location-store">New Zealand</p>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="navbar-list" id="navbar-list-4">
                <a href="#" class="right-navbar-list-anchor">Support</a>

                <div class="navbar-container">
                    <ul class="service-support">
                        <li class="service-support-service">HELP &nbsp; CENTER</li>
                        <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                        <li class="service-support-service">WARRANTY</li>
                        <li class="service-support-service">ORDER &nbsp; STATUS</li>
                        <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                    </ul>

                </div>
            </li>
            <li class="navbar-list"><a href="#"><i class="material-icons" id="sign-in">perm_identity</i></a></li>

            <li class="navbar-list" id="navbar-list-6">
                <a href="#"><i class="material-icons" id="search-button">search</i></a>
                <div id="search-navbar-container">
                    <div class="search-navbar">
                        <form action="" class="search-input">
                            <input type="search" class="search-btn" placeholder="Search">
                            <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                        </form>
                    </div>

                </div>
            </li>
            <li class="navbar-list"><i id="cart-btn" class="material-icons">work_outline</i></li>


        </ul>

    </div>

</div>


</header>

<main>
<div id="main-user">

    <div class="grey-navbar">

        <section class="grey-navbar-container">

            <div class="navbar-index">
                <button class="navbar-button" onclick="tab(event, 'me')">About Me</button>
            </div>

            <div class="navbar-index">
                <button class="navbar-button" onclick="tab(event, 'order')">Order</button>
            </div>

            <div class="navbar-index">
                <button class="navbar-button" id="sign-out">Sign Out</button>
            </div>

        </section>

    </div>

    <div class="main-detail">

        <div class="input-infor" id='me'>
            Nice to see you again:
            <span id="name-user">ABC</span>
        </div>

        <div class="input-infor" id='order'>
            abc
        </div>

    </div>

</div>

</main>

<footer class="footer-main">

<div class="footer-top-container">
    <div class="footer-top">
        <h4>HEAD IT FIRST</h4>
        <p>Sign up and save on your first order.
            Be the first to get access to limited-edition products,
            exclusive music performances, and athlete stories.</p>
        <div class="email-container">
            <input type="email" name="email" placeholder="Email" class="email-btn">

            <button type="submit" class="send">Send</button>

        </div>

    </div>

</div>

<div class="footer-bottom-container">

    <div class="footer-bottom-column" id="footer-bottom-column-1">

        <div class="footer-bottom-tank">

            <p>F0LLOW US</p>

            <div class="social-icon-container">
                <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                <a href="" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
            </div>

        </div>

    </div>
    <div class="footer-bottom-column" id="footer-bottom-column-2">
        <div class="paragraph-tank">
            <div class="paragraph-column">
                <p class="paragraph-title">Help Center</p>
                <p class="paragraph-title">Contact Us</p>
                <p class="paragraph-title">Account</p>
                <p class="paragraph-title">Product Setup</p>
                <p class="paragraph-title">Warranty</p>
                <p class="paragraph-title">Order Status</p>
            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Custom Product</p>
                <p class="paragraph-title"> Bulk Orders</p>
                <p class="paragraph-title">Press Releases</p>

            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Our Story</p>
                <p class="paragraph-title">Born in PC</p>
                <p class="paragraph-title">Protect Our Winters</p>
                <p class="paragraph-title">Careers</p>
            </div>
        </div>
    </div>

    <div class="footer-bottom-column" id="footer-bottom-column-3">
        <div class="podcast-container">
            <p>SUBSRCIBE TO OUR PODCAST</p>
            <div class="podcast-tank">
                <a href="#" class="paragraph-title">iTunes</a>
                <a href="#" class="paragraph-title">Spotify</a>

                <a href="#" class="paragraph-title">YouTube</a>
            </div>
        </div>


    </div>


</footer>
`


component.register = `

<header>
<div class="main-header">
    <div class="left-header">

        <a href="./index.html"><img src="./image/logo.png" alt="logo" width="40px" height="33px"
                class="slogan-img"></a>
        <a href="./index.html" class="slogan-img"><img src="./image/slogan.png" alt="" width="150px"
                height="37px" id="slogan"></a>

        <ul class="header-list" id="left-header-list">

            <li class="navbar-list" id="navbar-list-1">

                <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                <div class="navbar-container">
                    <ul id="navbar-ul">
                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                            background-size: 315px 100px">

                                        <p class="navbar-sub">HEADPHONES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">EARPUDS</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                                    background-size: 315px 100px">

                                        <p class="navbar-sub">ACCESSORIES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">SPECIALS</p>

                                    </div>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="navbar-title">
                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                    <a href="">
                                        <p class="navbar-sub-detail">Wired Headphones</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                    </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Earpuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Wired Earbuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Indy True Wireless</p>
                            </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Hats</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Speakers</p>
                            </a>
                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">12 Moods</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Custom Product</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">New Arrival</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Sale</p>
                            </a>
                        </div>

                    </div>

                    <div class="show-all">
                        <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                        <div></div>

                    </div>
                </div>

            </li>
            <li class="navbar-list" id="navbar-list-2">
                <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
            </li>
        </ul>


    </div>

    <div class="right-header">

        <ul class="header-list">
            <li class="navbar-list" id="navbar-list-3">
                <a href="#" class="right-navbar-list-anchor">Location</a>

                <div class="navbar-container">
                    <ul class="location">

                        <li class="local-area">NORTH AMERICA

                            <p class="location-store">Canada</p>
                            <p class="location-store">Mexico</p>
                            <p class="location-store">United State</p>
                        </li>

                        <li class="local-area">
                            EUROPE / MIDDLE EARTH
                            <p class="location-store">Austria</p>
                            <p class="location-store">France</p>
                            <p class="location-store">Germany</p>
                            <p class="location-store">Switzerland</p>
                            <p class="location-store">United Kingdom</p>
                            <p class="location-store">Europe (EN)</p>
                            <p class="location-store">Other Middle Earth Countries</p>
                        </li>

                        <li class="local-area">AFRICA
                            <p class="location-store">South Africa</p><br>
                            <div class="location" id="local-area-asia">ASIA
                                <p class="location-store">India</p>
                                <p class="location-store">Japan</p>
                                <p class="location-store">South Korea</p>
                                <p class="location-store">Taiwan</p>
                            </div>


                        </li>
                        <li class="local-area" id="local-area-pacific">PACIFIC
                            <p class="location-store">Australia</p>
                            <p class="location-store">New Zealand</p>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="navbar-list" id="navbar-list-4">
                <a href="#" class="right-navbar-list-anchor">Support</a>

                <div class="navbar-container">
                    <ul class="service-support">
                        <li class="service-support-service">HELP &nbsp; CENTER</li>
                        <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                        <li class="service-support-service">WARRANTY</li>
                        <li class="service-support-service">ORDER &nbsp; STATUS</li>
                        <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                    </ul>

                </div>
            </li>
            <li class="navbar-list">
                <a href="#">
                    <i class="material-icons" id="sign-in">perm_identity</i>
                </a>
            </li>

            <li class="navbar-list" id="navbar-list-6">
                <a href="#"><i class="material-icons" id="search-button">search</i></a>
                <div id="search-navbar-container">
                    <div class="search-navbar">
                        <form action="" class="search-input">
                            <input type="search" class="search-btn" placeholder="Search">
                            <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                        </form>
                    </div>

                </div>
            </li>
            <li class="navbar-list"><i id="cart-btn" class="material-icons">work_outline</i></li>


        </ul>

    </div>

</div>


</header>

<main>
<form class="register-container" id="register-container">
    <div class="register-title">
        <p>NEW ACCOUNT</p>
    </div>

    <div class="register-tank" id="register-tank">

        <div class="register-wrapper" id="register-wrapper"> 

            <div class="input-wrapper">
                <div class="input-form">
                    <h3>First Name: </h3>
                    <input type="text" name="firstname" id="firstName-title" placeholder="First Name" required>
                    <div id="firstname-error" class="message-error"></div>
                </div>
            </div>

            <div class="input-wrapper">
                <div class="input-form">
                    <h3>Last Name: </h3>
                    <input type="text" name="lastname" id="lastName-title" placeholder="Last Name" required>
                    <div id="lastname-error" class="message-error"></div>
                </div>
            </div>

            <div class="input-wrapper">
                <div class="input-form">
                    <h3>Email address: </h3>
                    <input type="email" name="email" id="email-btn" required placeholder="Email">
                    <div id="email-error" class="message-error"></div>
                </div>
            </div>

            <div class="input-wrapper">
                <div class="input-form">
                    <h3>Password: </h3>
                    <input type="password" name="password" id="password-btn" required placeholder="Password">
                    <div id="password-error" class="message-error"></div>
                </div>
            </div>

            <div class="input-wrapper">
                <div class="input-form">
                    <h3>Confirm Password: </h3>
                    <input type="password" name="confirmPassword" id="confirmPassword-btn" required
                        placeholder="Confirm Password">
                    <div id="confirmPassword-error" class="message-error"></div>
                </div>
            </div>
        </div>

    </div>

    <div class="submit-form">

    <div id="register-success" class="message-success"></div>
    <div id="register-error" class="message-error"></div>
        <button type="submit" class="submit-but">CREATE ACCOUNT</button>
    </div>
</form>

</main>

<footer class="footer-main">

<div class="footer-top-container">
    <div class="footer-top">
        <h4>HEAD IT FIRST</h4>
        <p>Sign up and save on your first order.
            Be the first to get access to limited-edition products,
            exclusive music performances, and athlete stories.</p>
        <div class="email-container">
            <input type="email" name="email" placeholder="Email" class="email-btn">

            <button type="submit" class="send">Send</button>

        </div>

    </div>

</div>

<div class="footer-bottom-container">

    <div class="footer-bottom-column" id="footer-bottom-column-1">

        <div class="footer-bottom-tank">

            <p>F0LLOW US</p>

            <div class="social-icon-container">
                <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                <a href="" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
            </div>

        </div>

    </div>
    <div class="footer-bottom-column" id="footer-bottom-column-2">
        <div class="paragraph-tank">
            <div class="paragraph-column">
                <p class="paragraph-title">Help Center</p>
                <p class="paragraph-title">Contact Us</p>
                <p class="paragraph-title">Account</p>
                <p class="paragraph-title">Product Setup</p>
                <p class="paragraph-title">Warranty</p>
                <p class="paragraph-title">Order Status</p>
            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Custom Product</p>
                <p class="paragraph-title"> Bulk Orders</p>
                <p class="paragraph-title">Press Releases</p>

            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Our Story</p>
                <p class="paragraph-title">Born in PC</p>
                <p class="paragraph-title">Protect Our Winters</p>
                <p class="paragraph-title">Careers</p>
            </div>
        </div>
    </div>

    <div class="footer-bottom-column" id="footer-bottom-column-3">
        <div class="podcast-container">
            <p>SUBSRCIBE TO OUR PODCAST</p>
            <div class="podcast-tank">
                <a href="#" class="paragraph-title">iTunes</a>
                <a href="#" class="paragraph-title">Spotify</a>
                <a href="#" class="paragraph-title">YouTube</a>
            </div>
        </div>


    </div>


</footer>

`

component.shopPage1 = `
<header>
<div class="main-header">
    <div class="left-header">

        <a href="./index.html"><img src="./image/logo.png" alt="logo"
                width="40px" height="33px" class="slogan-img"></a>
        <a href="./index.html" class="slogan-img"><img
                src="./image/slogan.png" alt="" width="150px" height="37px" id="slogan"></a>

        <ul class="header-list" id="left-header-list">

            <li class="navbar-list" id="navbar-list-1">

                <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                <div class="navbar-container">
                    <ul id="navbar-ul">
                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                                    background-size: 315px 100px">

                                        <p class="navbar-sub">HEADPHONES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                                        background-size: 315px 100px">

                                        <p class="navbar-sub">EARPUDS</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                                            background-size: 315px 100px">

                                        <p class="navbar-sub">ACCESSORIES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                                        background-size: 315px 100px">

                                        <p class="navbar-sub">SPECIALS</p>

                                    </div>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="navbar-title">
                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                    <a href="">
                                        <p class="navbar-sub-detail">Wired Headphones</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                    </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Earpuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Wired Earbuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Indy True Wireless</p>
                            </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Hats</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Speakers</p>
                            </a>
                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">12 Moods</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Custom Product</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">New Arrival</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Sale</p>
                            </a>
                        </div>

                    </div>

                    <div class="show-all">
                        <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                        <div></div>

                    </div>
                </div>

            </li>
            <li class="navbar-list" id="navbar-list-2">
                <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
            </li>
        </ul>


    </div>

    <div class="right-header">

        <ul class="header-list">
            <li class="navbar-list" id="navbar-list-3">
                <a href="#" class="right-navbar-list-anchor">Location</a>

                <div class="navbar-container">
                    <ul class="location">

                        <li class="local-area">NORTH AMERICA

                            <p class="location-store">Canada</p>
                            <p class="location-store">Mexico</p>
                            <p class="location-store">United State</p>
                        </li>

                        <li class="local-area">
                            EUROPE / MIDDLE EARTH
                            <p class="location-store">Austria</p>
                            <p class="location-store">France</p>
                            <p class="location-store">Germany</p>
                            <p class="location-store">Switzerland</p>
                            <p class="location-store">United Kingdom</p>
                            <p class="location-store">Europe (EN)</p>
                            <p class="location-store">Other Middle Earth Countries</p>
                        </li>

                        <li class="local-area">AFRICA
                            <p class="location-store">South Africa</p><br>
                            <div class="location" id="local-area-asia">ASIA
                                <p class="location-store">India</p>
                                <p class="location-store">Japan</p>
                                <p class="location-store">South Korea</p>
                                <p class="location-store">Taiwan</p>
                            </div>


                        </li>
                        <li class="local-area" id="local-area-pacific">PACIFIC
                            <p class="location-store">Australia</p>
                            <p class="location-store">New Zealand</p>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="navbar-list" id="navbar-list-4">
                <a href="#" class="right-navbar-list-anchor">Support</a>

                <div class="navbar-container">
                    <ul class="service-support">
                        <li class="service-support-service">HELP &nbsp; CENTER</li>
                        <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                        <li class="service-support-service">WARRANTY</li>
                        <li class="service-support-service">ORDER &nbsp; STATUS</li>
                        <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                    </ul>

                </div>
            </li>
            <li class="navbar-list"><a href="#"><i class="material-icons" id="sign-in">perm_identity</i></a></li>

            <li class="navbar-list" id="navbar-list-6">
                <a href="#"><i class="material-icons" id="search-button">search</i></a>
                <div id="search-navbar-container">
                    <div class="search-navbar">
                        <form action="" class="search-input">
                            <input type="search" class="search-btn" placeholder="Search">
                            <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                        </form>
                    </div>

                </div>
            </li>
            <li class="navbar-list"><i id="cart-btn" class="material-icons">work_outline</i></li>


        </ul>

    </div>

</div>


</header>

<main>
<div class="freeship-navbar">
    <p>Free shipping on orders over $100. Just $3.99 on everything else!</p>
</div>

<div class="main-product">

    <div class="shop-container">
        <h1 class="shop-title">SHOP</h1>
    </div>

    <div class="category-container">

        <div class="category-list">
            <a href="#" class="category-kind">
                <p class="category-name">EARBUDS</p>
            </a>

            <a href="#" class="category-kind">
                <p class="category-name">HEADPHONES</p>
            </a>

            <a href="#" class="category-kind">
                <p class="category-name">SPEAKERS</p>
            </a>

            <a href="#" class="category-kind">
                <p class="category-name">SALE</p>
            </a>
        </div>

        <div class="sort">
            <a href="#" class="sort-container">
                <select name="sort" id="sort-role">
                    <option disabled selected class="sort-title">SORT: FEATURED ITEMS</option>
                    <option value="Featured Items" class="sort-title">Featured Items</option>
                    <option value="Newest Items" class="sort-title">Newest Items</option>
                    <option value="Best Selling" class="sort-title">Best Selling</option>
                    <option value="A to Z" class="sort-title">A to Z</option>
                    <option value="Z to A" class="sort-title">Z to A</option>
                    <option value="By Review" class="sort-title">By Review</option>
                    <option value="PRICE LOW TO HIGH" class="sort-title">PRICE LOW TO HIGH</option>
                    <option value="PRICE HIGH TO LOW" class="sort-title">PRICE HIGH TO LOW</option>
                </select>

            </a>
        </div>

    </div>

    <div class="product-container" id="product-container">

    </div>

</main>

<footer class="footer-main">

<div class="footer-top-container">
    <div class="footer-top">
        <h4>HEAD IT FIRST</h4>
        <p>Sign up and save on your first order.
            Be the first to get access to limited-edition products,
            exclusive music performances, and athlete stories.</p>
        <div class="email-container">
            <input type="email" name="email" placeholder="Email" class="email-btn">

            <button type="submit" class="send">Send</button>

        </div>

    </div>

</div>

<div class="footer-bottom-container">

    <div class="footer-bottom-column" id="footer-bottom-column-1">

        <div class="footer-bottom-tank">

            <p>F0LLOW US</p>

            <div class="social-icon-container">
                <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                <a href="" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
            </div>

        </div>

    </div>
    <div class="footer-bottom-column" id="footer-bottom-column-2">
        <div class="paragraph-tank">
            <div class="paragraph-column">
                <p class="paragraph-title">Help Center</p>
                <p class="paragraph-title">Contact Us</p>
                <p class="paragraph-title">Account</p>
                <p class="paragraph-title">Product Setup</p>
                <p class="paragraph-title">Warranty</p>
                <p class="paragraph-title">Order Status</p>
            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Custom Product</p>
                <p class="paragraph-title"> Bulk Orders</p>
                <p class="paragraph-title">Press Releases</p>

            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Our Story</p>
                <p class="paragraph-title">Born in PC</p>
                <p class="paragraph-title">Protect Our Winters</p>
                <p class="paragraph-title">Careers</p>
            </div>
        </div>
    </div>

    <div class="footer-bottom-column" id="footer-bottom-column-3">
        <div class="podcast-container">
            <p>SUBSRCIBE TO OUR PODCAST</p>
            <div class="podcast-tank">
                <a href="#" class="paragraph-title">iTunes</a>
                <a href="#" class="paragraph-title">Spotify</a>
                <a href="#" class="paragraph-title">YouTube</a>
            </div>
        </div>


    </div>


</footer>

`

component.detail = `

<header>
<div class="main-header">
    <div class="left-header">
        <a href="../docs/index.html"></a>
        <a href="./index.html"><img src="./image/logo.png" alt="logo" width="40px" height="33px"
                class="slogan-img"></a>
        <a href="./index.html" class="slogan-img"><img src="./image/slogan.png" alt="" width="150px"
                height="37px" id="slogan"></a>

        <ul class="header-list" id="left-header-list">

            <li class="navbar-list" id="navbar-list-1">

                <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                <div class="navbar-container">
                    <ul id="navbar-ul">
                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                            background-size: 315px 100px">

                                        <p class="navbar-sub">HEADPHONES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">EARPUDS</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                                    background-size: 315px 100px">

                                        <p class="navbar-sub">ACCESSORIES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">SPECIALS</p>

                                    </div>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="navbar-title">
                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                    <a href="">
                                        <p class="navbar-sub-detail">Wired Headphones</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                    </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Earpuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Wired Earbuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Indy True Wireless</p>
                            </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Hats</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Speakers</p>
                            </a>
                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">12 Moods</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Custom Product</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">New Arrival</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Sale</p>
                            </a>
                        </div>

                    </div>

                    <div class="show-all">
                        <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                        <div></div>

                    </div>
                </div>

            </li>
            <li class="navbar-list" id="navbar-list-2">
                <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
            </li>
        </ul>


    </div>

    <div class="right-header">

        <ul class="header-list">
            <li class="navbar-list" id="navbar-list-3">
                <a href="#" class="right-navbar-list-anchor">Location</a>

                <div class="navbar-container">
                    <ul class="location">

                        <li class="local-area">NORTH AMERICA

                            <p class="location-store">Canada</p>
                            <p class="location-store">Mexico</p>
                            <p class="location-store">United State</p>
                        </li>

                        <li class="local-area">
                            EUROPE / MIDDLE EARTH
                            <p class="location-store">Austria</p>
                            <p class="location-store">France</p>
                            <p class="location-store">Germany</p>
                            <p class="location-store">Switzerland</p>
                            <p class="location-store">United Kingdom</p>
                            <p class="location-store">Europe (EN)</p>
                            <p class="location-store">Other Middle Earth Countries</p>
                        </li>

                        <li class="local-area">AFRICA
                            <p class="location-store">South Africa</p><br>
                            <div class="location" id="local-area-asia">ASIA
                                <p class="location-store">India</p>
                                <p class="location-store">Japan</p>
                                <p class="location-store">South Korea</p>
                                <p class="location-store">Taiwan</p>
                            </div>


                        </li>
                        <li class="local-area" id="local-area-pacific">PACIFIC
                            <p class="location-store">Australia</p>
                            <p class="location-store">New Zealand</p>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="navbar-list" id="navbar-list-4">
                <a href="#" class="right-navbar-list-anchor">Support</a>

                <div class="navbar-container">
                    <ul class="service-support">
                        <li class="service-support-service">HELP &nbsp; CENTER</li>
                        <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                        <li class="service-support-service">WARRANTY</li>
                        <li class="service-support-service">ORDER &nbsp; STATUS</li>
                        <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                    </ul>

                </div>
            </li>
            <li class="navbar-list"><a href="#"><i class="material-icons" id="sign-in">perm_identity</i></a>
            </li>

            <li class="navbar-list" id="navbar-list-6">
                <a href="#"><i class="material-icons" id="search-button">search</i></a>
                <div id="search-navbar-container">
                    <div class="search-navbar">
                        <form action="" class="search-input">
                            <input type="search" class="search-btn" placeholder="Search">
                            <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                        </form>
                    </div>

                </div>
            </li>
            <li class="navbar-list"><i id="cart-btn" class="material-icons">work_outline</i></li>


        </ul>

    </div>

</div>


</header>

<main class="main">
<div id="backgroundCover-container">
   
</div>




</main>

<footer class="footer-main">

<div class="footer-top-container">
    <div class="footer-top">
        <h4>HEAD IT FIRST</h4>
        <p>Sign up and save on your first order.
            Be the first to get access to limited-edition products,
            exclusive music performances, and athlete stories.</p>
        <div class="email-container">
            <input type="email" name="email" placeholder="Email" class="email-btn">

            <button class="send">Send</button>

        </div>

    </div>

</div>


<div class="footer-bottom-container">

    <div class="footer-bottom-column" id="footer-bottom-column-1">

        <div class="footer-bottom-tank">

            <p>F0LLOW US</p>

            <div class="social-icon-container">
                <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                <a href="#" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
            </div>

        </div>

    </div>
    <div class="footer-bottom-column" id="footer-bottom-column-2">
        <div class="paragraph-tank">
            <div class="paragraph-column">
                <p class="paragraph-title">Help Center</p>
                <p class="paragraph-title">Contact Us</p>
                <p class="paragraph-title">Account</p>
                <p class="paragraph-title">Product Setup</p>
                <p class="paragraph-title">Warranty</p>
                <p class="paragraph-title">Order Status</p>
            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Custom Product</p>
                <p class="paragraph-title"> Bulk Orders</p>
                <p class="paragraph-title">Press Releases</p>

            </div>
            <div class="paragraph-column">
                <p class="paragraph-title">Our Story</p>
                <p class="paragraph-title">Born in PC</p>
                <p class="paragraph-title">Protect Our Winters</p>
                <p class="paragraph-title">Careers</p>
            </div>
        </div>
    </div>

    <div class="footer-bottom-column" id="footer-bottom-column-3">
        <div class="podcast-container">
            <p>SUBSRCIBE TO OUR PODCAST</p>
            <div class="podcast-tank">
                <a href="#" class="paragraph-title">iTunes</a>
                <a href="#" class="paragraph-title">Spotify</a>
                <a href="#" class="paragraph-title">YouTube</a>
            </div>
        </div>


    </div>


</footer>

`

component.showCart=`

<header>
<div class="main-header">
    <div class="left-header">
        <a href="../docs/index.html"></a>
        <a href="./index.html"><img src="./image/logo.png" alt="logo" width="40px" height="33px"
                class="slogan-img"></a>
        <a href="./index.html" class="slogan-img"><img src="./image/slogan.png" alt="" width="150px"
                height="37px" id="slogan"></a>

        <ul class="header-list" id="left-header-list">

            <li class="navbar-list" id="navbar-list-1">

                <a href="#" class="left-navbar-list-anchor" id="shop">Shop</a>

                <div class="navbar-container">
                    <ul id="navbar-ul">
                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-1.jpg?t=234');
                                            background-size: 315px 100px">

                                        <p class="navbar-sub">HEADPHONES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-2.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">EARPUDS</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-3.jpg?t=234');
                                                    background-size: 315px 100px">

                                        <p class="navbar-sub">ACCESSORIES</p>

                                    </div>

                                </a>
                            </div>
                        </li>

                        <li class="navbar-container-li">

                            <div class="navbar-column">

                                <a href="#" class="hover-to-zoom">

                                    <div class="navbar-background" style="background-image: url('https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/navigation/v2/desktop-dropdown-1-4.jpg?t=234');
                                                background-size: 315px 100px">

                                        <p class="navbar-sub">SPECIALS</p>

                                    </div>

                                </a>
                            </div>
                        </li>
                    </ul>

                    <div class="navbar-title">
                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Headphones</p><a>
                                    <a href="">
                                        <p class="navbar-sub-detail">Wired Headphones</p>
                                    </a>
                                    <a href="#">
                                        <p class="navbar-sub-detail">Crusher ANC-NEW</p>
                                    </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Wireless Earpuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Wired Earbuds</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Indy True Wireless</p>
                            </a>

                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">Backpacks, Travel Kit & Cases</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Hats</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Speakers</p>
                            </a>
                        </div>

                        <div class="navbar-sub-column">
                            <a href="#">
                                <p class="navbar-sub-detail">12 Moods</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Custom Product</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">New Arrival</p>
                            </a>
                            <a href="#">
                                <p class="navbar-sub-detail">Sale</p>
                            </a>
                        </div>

                    </div>

                    <div class="show-all">
                        <div><a href="#" class="show-all-detail">Shop all Headphones</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Earpuds</a></div>
                        <div><a href="#" class="show-all-detail">Shop all Accessories</a></div>
                        <div></div>

                    </div>
                </div>

            </li>
            <li class="navbar-list" id="navbar-list-2">
                <a href="#" class="left-navbar-list-anchor">12 MOODS</a>
            </li>
        </ul>


    </div>

    <div class="right-header">

        <ul class="header-list">
            <li class="navbar-list" id="navbar-list-3">
                <a href="#" class="right-navbar-list-anchor">Location</a>

                <div class="navbar-container">
                    <ul class="location">

                        <li class="local-area">NORTH AMERICA

                            <p class="location-store">Canada</p>
                            <p class="location-store">Mexico</p>
                            <p class="location-store">United State</p>
                        </li>

                        <li class="local-area">
                            EUROPE / MIDDLE EARTH
                            <p class="location-store">Austria</p>
                            <p class="location-store">France</p>
                            <p class="location-store">Germany</p>
                            <p class="location-store">Switzerland</p>
                            <p class="location-store">United Kingdom</p>
                            <p class="location-store">Europe (EN)</p>
                            <p class="location-store">Other Middle Earth Countries</p>
                        </li>

                        <li class="local-area">AFRICA
                            <p class="location-store">South Africa</p><br>
                            <div class="location" id="local-area-asia">ASIA
                                <p class="location-store">India</p>
                                <p class="location-store">Japan</p>
                                <p class="location-store">South Korea</p>
                                <p class="location-store">Taiwan</p>
                            </div>


                        </li>
                        <li class="local-area" id="local-area-pacific">PACIFIC
                            <p class="location-store">Australia</p>
                            <p class="location-store">New Zealand</p>
                        </li>
                    </ul>
                </div>
            </li>

            <li class="navbar-list" id="navbar-list-4">
                <a href="#" class="right-navbar-list-anchor">Support</a>

                <div class="navbar-container">
                    <ul class="service-support">
                        <li class="service-support-service">HELP &nbsp; CENTER</li>
                        <li class="service-support-service">PRODUCT &nbsp; SETUP</li>
                        <li class="service-support-service">WARRANTY</li>
                        <li class="service-support-service">ORDER &nbsp; STATUS</li>
                        <li class="service-support-service">INTERNATIONAL &nbsp; SUPPORT</li>

                    </ul>

                </div>
            </li>
            <li class="navbar-list"><a href="#"><i class="material-icons" id="sign-in">perm_identity</i></a>
            </li>

            <li class="navbar-list" id="navbar-list-6">
                <a href="#"><i class="material-icons" id="search-button">search</i></a>
                <div id="search-navbar-container">
                    <div class="search-navbar">
                        <form action="" class="search-input">
                            <input type="search" class="search-btn" placeholder="Search">
                            <a class="exit-btn" id="exit" href="#"><i class=" fa-1x fas fa-times"></i></a>
                        </form>
                    </div>

                </div>
            </li>
            <li class="navbar-list"><i id="cart-btn"class="material-icons">work_outline</i></li>


        </ul>

    </div>

</div>


</header>

<main class="main" id="main-cart">

<div class="cart-tank">
    <div class="cart-tank-container">
        <div id="main-cart-list" class="main-cart">

        </div>

        <div class="check-out-bar">
            <div id="check-out-corner-container" class="check-out-corner-container">

            </div>

        </div>
    </div>
</div>

</main>

<footer class="footer-main">

        <div class="footer-top-container">
            <div class="footer-top">
                <h4>HEAD IT FIRST</h4>
                <p>Sign up and save on your first order.
                    Be the first to get access to limited-edition products,
                    exclusive music performances, and athlete stories.</p>
                <div class="email-container">
                    <input type="email" name="email" placeholder="Email" class="email-btn">

                    <button class="send">Send</button>

                </div>

            </div>

        </div>

        <div class="footer-bottom-container">

            <div class="footer-bottom-column" id="footer-bottom-column-1">

                <div class="footer-bottom-tank">

                    <p>F0LLOW US</p>

                    <div class="social-icon-container">
                        <a href="#" class="social-icon"><i class="fa-3x fab fa-instagram"></i></a>
                        <a href="#" class="social-icon"><i class=" fa-3x fab fa-youtube"></i></a>
                        <a href="#" class="social-icon"><i class=" fa-3x fab fa-facebook-square"></i></a>
                        <a href="#" class="social-icon"><i class="fa-3x  fab fa-twitter"></i></a>
                    </div>

                </div>

            </div>
            <div class="footer-bottom-column" id="footer-bottom-column-2">
                <div class="paragraph-tank">
                    <div class="paragraph-column">
                        <p class="paragraph-title">Help Center</p>
                        <p class="paragraph-title">Contact Us</p>
                        <p class="paragraph-title">Account</p>
                        <p class="paragraph-title">Product Setup</p>
                        <p class="paragraph-title">Warranty</p>
                        <p class="paragraph-title">Order Status</p>
                    </div>
                    <div class="paragraph-column">
                        <p class="paragraph-title">Custom Product</p>
                        <p class="paragraph-title"> Bulk Orders</p>
                        <p class="paragraph-title">Press Releases</p>

                    </div>
                    <div class="paragraph-column">
                        <p class="paragraph-title">Our Story</p>
                        <p class="paragraph-title">Born in PC</p>
                        <p class="paragraph-title">Protect Our Winters</p>
                        <p class="paragraph-title">Careers</p>
                    </div>
                </div>
            </div>

            <div class="footer-bottom-column" id="footer-bottom-column-3">
                <div class="podcast-container">
                    <p>SUBSRCIBE TO OUR PODCAST</p>
                    <div class="podcast-tank">
                        <a href="#" class="paragraph-title">iTunes</a>
                        <a href="#" class="paragraph-title">Spotify</a>
                        <a href="#" class="paragraph-title">YouTube</a>
                    </div>
                </div>


            </div>


    </footer>

`
