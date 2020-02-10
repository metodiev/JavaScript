function wordSwimmingRecord(input){
    let worldRecord = Number(input.shift());
    let distance = Number(input.shift());
    let timeInSeconds = Number(input.shift());

    let swimSeconds = Number((distance * timeInSeconds)) ; 
    let resistance = (distance / 15).toFixed(0) * 12.5;

    let finalTime = Number(swimSeconds + resistance);

    if (finalTime < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${finalTime.toFixed(2)} seconds.`);

    }

    if (worldRecord < finalTime) {
        console.log(`No, he failed! He was ${(finalTime - worldRecord).toFixed(2)} seconds slower.`);
    }

}

wordSwimmingRecord([55555.67,3017,5.03 ]);