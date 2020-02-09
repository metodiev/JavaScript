function projectCreation(input){
    let architectName = input.shift();
    let projects = Number(input.shift());
    let hoursToPrepareProjects = projects * 3;

    console.log(`The architect ${architectName} will need ${hoursToPrepareProjects} hours to complete ${projects} project/s.`)

}


projectCreation(["George", 4]);

