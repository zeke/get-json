var test = require('whew');
var json = require("./");

test.add('Get /users from JSONPlaceholder API', function (res) {
  json('https://jsonplaceholder.typicode.com/users', function (error, body) {
    if (error || typeof body === "object") {
    	res(true, "Got some type of valid response.");
    }
    else {
    	res(false, "Unexpected response.");
    }
  });
});

test.test();