var getHTML =  require ('./module.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  var totalDataLowerCase = html.toLowerCase();
  console.log(totalDataLowerCase);
}

getHTML(requestOptions, printLowerCase);