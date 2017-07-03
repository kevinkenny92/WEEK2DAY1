var https = require('https');

function getHTML (options, callback) {

  /* Add your code here */
var totalData = '';
https.get(requestOptions, function (response) {
  response.setEncoding('utf8');

  response.on('data', function (data) {
      totalData += data;
    });
  response.on('end', function() {
      printHTML(totalData);
    });
});

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions,printHTML());