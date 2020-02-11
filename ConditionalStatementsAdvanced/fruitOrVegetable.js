function fruiOrVegetable(input){
    let product = input.shift();


    var fruit = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
    var vegetable = ["tomato", "cucumber", "pepper", "carrot"];

    let match = 0;

    for (let i = 0; i < fruit.length; i++) {
        if(fruit[i] == product){
             match = 1;
             console.log("fruit");
             break;
        }
    }
    for (let i = 0; i < vegetable.length; i++) {
        if(vegetable[i] == product){
             match = 1;
             console.log("vegetable")
             break;
        }
    }

    if(match == 0){
        console.log("unknown");
    }


}


fruiOrVegetable(["tomato"]);