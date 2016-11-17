var test = require('tape');
var json = require("./");

test('get last libraries from cdnjs.com', function (t) {
  json('https://api.cdnjs.com/libraries/jquery', function (error, body) {
    t.plan(3);
    t.error(error);
    t.ok(body.name);
    t.equal(body.keywords.length, 6);
  });
});
