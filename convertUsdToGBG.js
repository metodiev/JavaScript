function solution(number){
    let usd = Number(number.shift());
    let courseBGN = 1.79549;
    let bgn = (usd * courseBGN).toFixed(2);

    console.log(bgn);

}

solution(["20"])