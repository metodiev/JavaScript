function timePlus15Minutes(input){
    let startHour = Number(input.shift());
    let startMinutes = Number(input.shift());

    let timeInMinutes = (startHour * 60) + startMinutes;
    let timePlus15 = timeInMinutes + 15;

    let finalHour = Math.floor(timePlus15 / 60).toFixed(0);
    let finalMinutes =timePlus15 % 60;
   
    if(finalHour >= 24){
        finalHour -= 24;
    }

    if(finalMinutes < 10){
        console.log(`${finalHour}:0${finalMinutes}`);
    }else{
        console.log(`${finalHour}:${finalMinutes}`);
    }

}


timePlus15Minutes([1, 46]);