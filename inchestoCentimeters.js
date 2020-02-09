function inchesTocentimeters(input){
    let centimeters = Number(input.shift());

    let inches = centimeters * 2.54;
    console.log(inches);
}

inchesTocentimeters(["5"])