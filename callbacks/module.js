var https = require('https');

function printHTML(html) {
  console.log(html);
}

module.exports = function getHTML (options, callback = printHTML) {
 var totalData = '';
 var requestOptions = options;

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
       totalData += data;
     });
    response.on('end', function() {
      callback(totalData);
    });
  });
 }


