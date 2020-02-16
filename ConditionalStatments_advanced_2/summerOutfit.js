function summerOutfit(input){

    let degrees = Number(input.shift());
    let timeOfDay = input.shift();
    let outfit;
    let shoes;
   // let morning = ["Outfit = Sweatshirt Shoes = Sneakers", "Outfit = Shirt Shoes = Moccasins", "Outfit = T-Shirt Shoes = Sandals" ];
    //let afternoon = ["Outfit = Shirt Shoes = Moccasins", "Outfit = T-Shirt Shoes = Sandals", "Outfit = Swim Suit Shoes = Barefoot"];

    if(degrees >= 10 && degrees <=18 ){
        if(timeOfDay == "Morning"){
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }
        else if(timeOfDay == "Afternoon" || timeOfDay == "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    if(degrees > 18 && degrees <=24 ){
        if(timeOfDay == "Morning"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if(timeOfDay == "Afternoon"){
            outfit = "T-Shirt";
            shoes = "Sandals";
        }else if(timeOfDay == "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    if( degrees >= 25 ){
        if(timeOfDay == "Morning"){
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        else if(timeOfDay == "Afternoon"){
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }else if(timeOfDay == "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

}

summerOutfit([22, "Afternoon"]);