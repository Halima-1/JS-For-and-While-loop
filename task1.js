let output = document.getElementById('output');


let score = [60, 77, 53, 19, 59, 47, 23, 55]
for (let x =0; x < score.length; x++){
    if((score[x] - 5) > 50 ){
        output.innerHTML += 'You Passed <br>'
    }else{
        if (((score[x] + (score[x] - 5))/2) > 50){
            output.innerHTML += `You escaped my punishment because your original score was ${score[x]} 
            and my manipulated score is ${((score[x] + (score[x] - 5))/2)} <br>`
        }else{
            output.innerHTML += 'You are trapped because you failed <br>'
        }
    }
    } 