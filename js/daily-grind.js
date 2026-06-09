/*

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/





let myDate = new Date();
let myDay = myDate.getDay();
let today = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){

// retrive data from querydtring,if exists 
myDay = urlParams.get("day");
}
// turn string into a numbers
myDay = parseInt(myDay);

switch(myDay){

 	case 0:
    	today =  "Sunday";
 	break;
    case 1:
   	today = "monday";
    coffee = {
        name:"mocha",
        pic:"mocha.jpg",
        alt:"A pic of mocha.",
        color:"brown",
        day:"monday",
        desc:'I like me mocha coffee'
    };

 	case 2:
   	today = "Tuesday";
    coffee = {
        name:"Bubble Tea",
        pic:"bubble-tea.jpg",
        alt:"A pic of a Yummy bubble tea.",
        color:"pink",
        day:"Tuesday",
        desc:'I like me some Bubble tea'
    };
 	break;

    	case 5:
   	today = "friday";
    coffee = {
        name:"Drip",
        pic:"drip.jpg",
        alt:"A pic of drip coffee.",
        color:"pink",
        day:"friday",
        desc:'I need a constant drip'
    };
 	break;

 	default:
    	today = "Something went wrong!";

}
 
 console.log(coffee);

 alert(today);

 //adds coffee to page?
 document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
 document.querySelector("html").style.backgroundColor = coffee.color;
 // change strong tag in templte to our color
document.querySelectorAll("#coffee-cup strong").forEach(el => {
    el.style.color = coffee.color;
})



function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
  <p>
            <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
            <strong>${coffee.day}'s Coffee Special:</strong>${coffee.name} <strong>${coffee.desc}</strong>,
        
        </p>
    `;

    return myReturn;
}
