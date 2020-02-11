function animalType(input){
    let animal = input.shift();

    switch (animal) {
        case "dog":
                console.log("mammal");
            break;

            case "snake":
            case "tortoise":
            case"crocodile":
                console.log("reptile");
            break;
            case "cat":
                console.log("unknown");
            break;
        
    
        default:
            console.log("unknown");
            break;
    }
}


animalType(["dog"]);