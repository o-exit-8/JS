
function print(message) {
  document.getElementById('output').innerHTML = message;
  
  //document.write(message);
}

var questions = [
  ['How many legs has a spider?', '8'],
  ['How many states has USA?', 50],
  ['How many continets?', 7],
  ['How many letters in english alphabet?', 26],
  ['What years was WWI?', 1914],
  ['What years was WWI?', 1939]
];

let data = '';
for(let i=0; i<questions.length; i++)
{
  let response = prompt(questions[i][0]);

  let answer = questions[i][0] + ' ' + response;

  if(response === questions[i][1])
  {
    data += '<h6> Correct Questions Answered </h6> <br>' + '<p>' + answer + '<br>'  + '</p>';
  }
  else 
  {
    data += '<h6> Incorrect Questions Answered </h6> <br>' + '<p>' + answer + '<br>' + '</p>';
  }
  print(data);
  //console.log(questions[i][1]);
}
