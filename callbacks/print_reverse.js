var getHTML =  require ('./module.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  var totalDataReverse = html.split("").reverse().join("");
  console.log(totalDataReverse);
}

getHTML(requestOptions, printReverse);