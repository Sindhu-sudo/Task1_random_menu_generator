var menu =[
    {
        title:'FOOD MENU' ,
        name: 'Main Course',
        item: 'Chicken Burger',
        price: '$4',
        count: 'Counter-1',
        src:'burger.jpg'

    },
    {
        title:'Food Menu' ,
        name: 'Main Course',
        item: 'Cheese Sandwich',
        price: '$3',
        count: 'Counter-1',
        src:'san.jpg'

    },
    {
        title:'Food Menu' ,
        name: 'Appetizers',
        item: 'French Fries',
        price: '$2',
        count: 'Counter-2',
        src:'fries.jpg'

    },
    {
        title:'Food Menu' ,
        name: 'Appetizers',
        item: 'Chicken Nuggets',
        price: '$2',
        count: 'Counter-2',
        src:'nugg.jpg'
    },
    {
        title:'Food Menu' ,
        name: 'Drinks',
        item: 'Lemon Tea',
        price: '$2',
        count: 'Counter-3',
        src:'tea.jpg'

    },
    {
        title:'Food Menu' ,
        name: 'Drinks',
        item: 'Orange Juice',
        price: '$2',
        count: 'Counter-3',
        src: 'juice.jpg'
    }
]
function getRandomColor(){
    var red = Math.floor(Math.random () * 256)
    var green = Math.floor(Math.random () * 256)
    var blue = Math.floor(Math.random () * 256)
    var randColor = 'rgb('+red+','+green+','+blue+')'
    return randColor
}

function randomNumber(){
    var randomNo = Math.floor(Math.random() * menu.length)
    var randDetails = menu[randomNo]
    console.log(randDetails)
    return randDetails
}
function printMenu(){
var details = randomNumber()
var menuContainer= document.getElementById('menu-box')
var imageContainer= document.getElementById('img-box')
imageContainer.src = details.src
var display =`<p class='title'>${details.title}</p><p class='name'>${details.name}</p><p class='item'>${details.item}</p><p class='price'>${details.price}</p><p class=count>${details.count}</p>`
if (details.title){
   
        display += `</p>`
    }
    menuContainer.innerHTML = display
document.body.style.backgroundColor = getRandomColor()
}
window.setInterval(function(){
    printMenu()
},5000)
document.getElementById('loadName').addEventListener('click',printMenu)