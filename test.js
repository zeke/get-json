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

test('get repositories from GitHub', function (t) {
  json('https://api.github.com/repositories', { 'headers': { 'User-Agent': 'A user agent' } }, function (error, body) {
    t.plan(4);
    t.error(error);
    t.ok(body[0]);
    t.ok(body[0].name);
    t.equal(body.length, 100);
  });
});