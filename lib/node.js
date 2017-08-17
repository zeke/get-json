var phin = require("phin");

module.exports = getJSON;

function getJSON (url, callback) {
  phin({url: url}, function (error, response) {
    if(error) {
    	callback(error);
    	return;
    }

    try {
      var body = JSON.parse(response.body);
    }
    catch (parseError) {
      callback("Parse error: " + parseError);
      return;
    }

    if(response.statusCode != 200) {
    	callback("Unexpected response code.");
    	return;
    }

    callback(null, body);
  });
}
