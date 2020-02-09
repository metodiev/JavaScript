function areaofFigure(input){
    let figure = input.shift();
    let size = Number(input.shift());
    let width;
    if(figure == "rectangle" || figure == "triangle"){
         width = Number(input.shift());
    }

 switch (figure) {
     case "square":
            console.log((size*size).toFixed(3));
         break;
    case "rectangle":
        console.log((size*width).toFixed(3));
        break;
        case "circle":
            console.log((size*size*Math.PI).toFixed(3));
            break;

            case "triangle":
                console.log(((size*width)/2).toFixed(3))
            break;
     default:
         break;
 }
}

areaofFigure(["triangle",4.5, 20 ])