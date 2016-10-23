var request = require("request");

module.exports = getJSON;

function getJSON (url, options, callback) {
  if (!callback) {
    callback = options;
    options  = null;
  }

  var defaultOptions = { url: url, json: true };

  if (options) {
    defaultOptions = Object.assign(defaultOptions, options);
  }

  request(defaultOptions, function (error, response, body) {
    if(error) return callback(error);

    if(response.statusCode != 200) return;

    callback(undefined, body);
  });
}