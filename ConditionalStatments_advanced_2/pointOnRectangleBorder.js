function pointonRectangleBorder(input){
    let x1= Number(input.shift());
    let y1= Number(input.shift());
    let x2= Number(input.shift());
    let y2= Number(input.shift());
    let x= Number(input.shift());
    let y= Number(input.shift());

    let firstCondition = (x == x1 || x == x2) && (y>= y1 && y <=y2);
    let secondCondition = (y == y1 || y ==y2) && (x >=x1 && x<=x2);

    if(firstCondition || secondCondition){
        console.log("Border")
    }else{
        console.log("Inside / Outside")
    }


}

pointonRectangleBorder([2,-3,12,3,10,3]);