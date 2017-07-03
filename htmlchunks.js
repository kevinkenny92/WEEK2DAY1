var https = require('https');
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var callback = function() {
  console.log('In response handler callback!');

https.get(requestOptions, function (response) {
  response.setEncoding('utf8');

  response.on('data', function(data) {
    console.log('Chunk Received. Length:', data.length);
  });
}
  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}  /* Add your code here */