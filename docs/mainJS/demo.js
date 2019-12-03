
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



function onOff(element) {


    if (element.style.display == 'none') {

        element.style.display = 'block'

    } else {
        element.style.display = 'none'
    }

}

let img1 = document.getElementById('product-cell-1')
let img2 = document.getElementById('product-cell-2')
let img3 = document.getElementById('product-cell-3')


let product = [
     {
        name: 'anhle wireless',
        price: 19.9,
        img: img1
    },

    {
        name: 'anhwireless',
        price: 20,
        img: img2
    },

    {
        name: 'wabc',
        price: 23,
        img: img3
    },

]

console.log(product[0].name)

function filterItems(query) {
    return product.filter(function(el) {
        return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
  }

console.log(filterItems('wireless'))

  let obj = JSON.stringify(filterItems('wireless'))

  console.log(obj)

  let data = JSON.parse(obj)

  console.log(data)

  console.log(data[0].name)


  for (let i = 0; i < product.length; i++) {

    if (filterItems('wireless')) {

        product[i].img.style.display = 'block'
        
    } else {
        product[i].img.style.display = 'none'
    }
      
  }

  
 



//   for( item of product){
//       if (filterItems('wireless')) {
//         item.img.style.display ='block'

          
//       } else {
//         item.img.style.display ='none'
//       }
//   }









