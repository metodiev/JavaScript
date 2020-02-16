function cinema(input){
    let type = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());
    let seats = Number(rows * columns);
    let sum;
    switch (type) {
        case "Premiere":
           
             sum = seats * 12.00;
            console.log(sum.toFixed(2));
            console.log("leva")
            break;
            case "Normal":
            
             sum = seats * 7.50;
            console.log(sum.toFixed(2));
            console.log("leva")
            break;
            case "Discount":
                
                sum = seats * 5.00;
                console.log(sum.toFixed(2));
                console.log("leva")
                break;
    
        default:
            break;
    }

}

cinema(["Discount", 12,30]);