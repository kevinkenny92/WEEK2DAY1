var getHTML =  require ('./module.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var totalDataUpperCase = html.toUpperCase();
  console.log(totalDataUpperCase);
}

getHTML(requestOptions, printUpperCase);