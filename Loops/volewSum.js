function volewSum(input){

let str = input.shift();
let sum = 0 ;
for (let index = 0; index < str.length; index++) {
    let letter  = str[index];
    
    switch (letter) {
        case "a":
            sum += 1;       
            break;
        case "e":
            sum += 2; 
            break;
        case "i":
            sum += 3;       
            break;
        case "o":
            sum += 4;       
            break; 
        case "u":
            sum += 5;       
            break; 
    
        default:
            break;
    }
    
}
console.log(sum);

}

volewSum(["beer"]);