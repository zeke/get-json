var test = require('prova');
var json = require("./");

test('Get IP from JSONTest API', function (t) {
  json('http://ip.jsontest.com/', function (error, body) {
    t.plan(2);
    t.error(error);
    t.ok(body.ip);
  });
});