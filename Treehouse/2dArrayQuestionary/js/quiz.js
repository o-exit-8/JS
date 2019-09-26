
function print(message) {
  document.getElementById('output').innerHTML = message;
  //document.write(message);
}

var questions = [
  ['How many legs has a spider?', '8'],
  ['How many states has USA?', '50'],
  ['How many continets?', '7'],
  ['How many letters in english alphabet?', '26'],
  ['What years was the beggining of WWI?', '1914'],
  ['What years was the beggining of WWII?', '1939']
];

let data = '';
let arrData = [
  ['<h2> Correct Questions Answered </h2> <p>' ],
  ['<h2> Incorrect Questions Answered </h2> <p>' ]
]
for(let i=0; i<questions.length; i++)
{
  let response = prompt(questions[i][0]);
  let answer = questions[i][0] + ' ' + response;
  
  if(response === questions[i][1])
  {
    arrData[0].push(answer + '<br>');
    if(i === questions.length-1)
      arrData[0].push('</p>');
  }
  else 
  {
    arrData[1].push(answer + '<br>');
    if(i === questions.length-1)
      arrData[1].push('</p>');
  }

  
  let arrFormat = arrData.map(qa => qa.join(' '));
 
  print(arrFormat);
  
}
