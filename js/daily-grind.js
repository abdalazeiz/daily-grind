let myDate = new Date();
let myDay = myDate.getDay();
let today = "";


// get query string
const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){
    myDay = parseInt(urlParams.get("day"));
}

switch(myDay){

    case 0:
        today = "Sunday";
        coffee = {
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A warm caramel latte topped with foam.",
            color:"#C68E17",
            day:"Sunday",
            desc:"Sunday is perfect for a relaxing Caramel Latte. This smooth and sweet drink helps you wind down and enjoy your day."
        };
    break;

    case 1:
        today = "Monday";
        coffee = {
            name:"Mocha",
            pic:"mocha.jpg",
            alt:"A rich mocha coffee with chocolate.",
            color:"#5A3825",
            day:"Monday",
            desc:"Monday's Mocha gives you the energy you need to start the week strong with a rich chocolate flavor."
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A sweet bubble tea with tapioca pearls.",
            color:"#FF69B4",
            day:"Tuesday",
            desc:"Tuesday’s Bubble Tea is fun and refreshing, giving you a sweet break in your busy week."
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"A smooth cold brew coffee over ice.",
            color:"#3B2F2F",
            day:"Wednesday",
            desc:"Wednesday’s Cold Brew is smooth and strong, perfect to keep you going through the middle of the week."
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A creamel latte with foam.",
            color:"#F3E5AB",
            day:"Thursday",
            desc:"Thursday’s Caramel Latte is creamy and comforting, helping you stay focused as the week winds down."
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            name:"Drip Coffee",
            pic:"drip.jpg",
            alt:"A classic drip coffee.",
            color:"#4B3621",
            day:"Friday",
            desc:"Friday’s Drip Coffee is simple and bold, giving you that final boost before the weekend."
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            name:"Espresso",
            pic:"espresso.jpg",
            alt:"A strong shot of espresso.",
            color:"#2E1A12",
            day:"Saturday",
            desc:"Saturday’s Espresso is bold and powerful, perfect for starting your weekend with energy."
        };
    break;

    default:
        today = "Something went wrong!";
}

// debug
console.log(coffee);

// load to page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

// change background color
document.querySelector("html").style.backgroundColor = coffee.color;

// change strong color
document.querySelectorAll("#coffee-cup strong").forEach(el => {
    el.style.color = coffee.color;
});

function coffeeTemplate(coffee){
    return `
    <p>
        <img src="images/${coffee.pic}" alt="${coffee.alt}" class="coffee-img">
        <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.name}<br>
        ${coffee.desc}
    </p>
    `;
}