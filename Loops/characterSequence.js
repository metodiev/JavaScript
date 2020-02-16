function characterSequence(input){
    let text = input.shift();

    for (let index = 0; index < text.length; index++) {
        let letter = text[index];
        console.log(letter);
        
    }
}

characterSequence(["softuni"])