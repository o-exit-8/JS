var html = '';
var number = '';

var rgbColor;

function randRGB() {
  return Math.floor(Math.random() * 256 );
}
function _color() {
  var color = 'rgb('
  color += randRGB() + ',';
  color += randRGB() + ',';
  color += randRGB() + ')';
  return color;
}
for (var i = 0; i < 10; i += 1) {

  rgbColor = _color();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}
for(let i = 2; i<=24; i++)
  {

    number += i + ' ';
  }
  document.write(number)

document.write(html);
