
// for loop
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

    // while loop
    let output2 = document.getElementById('output2');
    let score2 = [60, 77, 53, 19, 59, 47, 23, 55]
    let y=0;
    while (y <= score2.length){
        if((score2[y] - 5) > 50 ){
            output2.innerHTML += 'You Passed <br>';
        }else{
            if (((score2[y] + (score2[y] - 5))/2) > 50){
                output2.innerHTML += `You escaped my punishment because your original score was ${score2[y]} 
                and my manipulated score is ${((score2[y] + (score2[y] - 5))/2)} <br>`;
            }else{
                output2.innerHTML += 'You are trapped because you failed <br>';
            }
        }
        y++;
    }