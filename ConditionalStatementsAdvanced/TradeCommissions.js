function tradeCommisions(input) {
  let town = input.shift();
  let sels = Number(input.shift());

  var sofia = [0.05, 0.07, 0.08, 0.12];
  var varna = [0.045, 0.075, 0.1, 0.13];
  var plovdiv = [0.055, 0.08, 0.12, 0.145];

  let comission = 0;
  switch (town) {
    case "Sofia":
      if (sels >= 0 && sels <= 500) {
        comission = sels * sofia[0];
      }
      if (sels > 500 && sels <= 1000) {
        comission = sels * sofia[1];
      }
      if (sels > 1000 && sels <= 10000) {
        comission = sels * sofia[2];
      }
      if (sels > 10000) {
        comission = sels * sofia[3];
      }
      if (sels < 0) {
        console.log("error");
      }
      break;
    case "Plovdiv":
      if (sels >= 0 && sels <= 500) {
        comission = sels * plovdiv[0];
      }
      if (sels > 500 && sels <= 1000) {
        comission = sels * plovdiv[1];
      }
      if (sels > 1000 && sels <= 10000) {
        comission = sels * plovdiv[2];
      }
      if (sels > 10000) {
        comission = sels * plovdiv[3];
      }
      if (sels < 0) {
        console.log("error");
      }
      break;
    case "Varna":
      if (sels >= 0 && sels <= 500) {
        comission = sels * varna[0];
      }
      if (sels > 500 && sels <= 1000) {
        comission = sels * varna[1];
      }
      if (sels > 1000 && sels <= 10000) {
        comission = sels * varna[2];
      }
      if (sels > 10000) {
        comission = sels * varna[3];
      }
      if (sels < 0) {
        console.log("error");
      }
      break;

    default:
      console.log("error");
      break;
  }
  if (comission != 0 && sels > 0) {
    console.log(comission.toFixed(2));
  }
}

tradeCommisions(["Varna", 500]);
