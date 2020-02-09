function toyShop(input) {
  let tripMoney = Number(input.shift());
  let puzzelsNumbers = Number(input.shift());
  let doolsNumbers = Number(input.shift());
  let bearsNumbers = Number(input.shift());
  let minionsNumbers = Number(input.shift());
  let trucksNumbers = Number(input.shift());

  let sum = Number(sumToys(
    puzzelsNumbers,
    doolsNumbers,
    bearsNumbers,
    minionsNumbers,
    trucksNumbers
  ));

  if(sum > tripMoney){
      let left = (sum - tripMoney).toFixed(2);
      console.log(`Yes! ${left} lv left.`)
  }else{
      let notEnoughMoney = (tripMoney - sum).toFixed(2);
      console.log(`Not enough modey! ${notEnoughMoney} lv needed`)
  }

}

function sumToys(
  puzzelsNumbers,
  doolsNumbers,
  bearsNumbers,
  minionsNumbers,
  trucksNumbers
) {
    let discount = puzzelsNumbers + doolsNumbers + bearsNumbers + minionsNumbers + trucksNumbers;
    
  let totalSum =
    puzzelsNumbers * 2.6 +
    doolsNumbers * 3 +
    bearsNumbers * 4.1 +
    minionsNumbers * 8.2 +
    trucksNumbers * 2;

    let sum;
    if(discount >= 50){
        sum = totalSum - ( totalSum * 1/4);

    }else{
        sum = totalSum;
    }
    sum = sum - (sum * 0.10);
  return sum;
}

toyShop([320,8,2,5,5,1]);
