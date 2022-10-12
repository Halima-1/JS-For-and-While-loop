let output = document.getElementById("output");
let output2 = document.querySelector("#output2");

// for(initialization; condition; increment){

// }

// for (let i = 1; i <= 10; i++) {
//   output.innerHTML += i + "<br>";
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     output2.innerHTML += i + " is even number<br>";
//   } else {
//     output2.innerHTML += i + " is odd number<br>";
//   }
// }

// let j = 1;
// for (; j <= 20; ) {
//   if (j % 2 == 0) {
//     output2.innerHTML += j + " is even number<br>";
//   } else {
//     output2.innerHTML += j + " is odd number<br>";
//   }
//   j++;
// }

// initialize while loop variable here
// while(condition){

//     increment
// }

// let k = 1;
// while (k <= 10) {
//   output.innerHTML += k + "<br>";

//   k++;
// }

// let l = 1;
// while (l <= 20) {
//   if (l % 2 == 1) {
//     output2.innerHTML += l + " is odd number<br>";
//   } else {
//     output2.innerHTML += l + " is even number<br>";
//   }
//   l++;
// }

let scores = [51, 10, 40, 99];

for (let m = 0; m < scores.length; m++) {
  if (scores[m] < 50) {
    output.innerHTML += scores[m] + "You failed<br>";
  } else {
    output.innerHTML += scores[m] + "You passed<br>";
  }
}

let exam = [40, 15, 77, 80, 39, 35];

for (let a = 0; a < exam.length; a++) {
  if (exam[a] >= 50) {
    output2.innerHTML += exam[a] + ": you passed<br>";
  } else {
    if (exam[a] + 10 >= 50) {
      output2.innerHTML += `Your previous score was ${
        exam[a]
      } but you passed after I added 10 to your score to make it ${
        exam[a] + 10
      }<br>`;
    } else {
      output2.innerHTML += `Your previous score was ${
        exam[a]
      } but you failed despite the fact that I added 10 to your score to make it 
      ${exam[a] + 10}<br>`;
    }
  }
}
