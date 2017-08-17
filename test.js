var test = require('prova');
var json = require("./");

test('get last songs from radio paradise api', function (t) {
  json('http://api.listenparadise.org', function (error, body) {
    t.plan(3);
    t.error(error);
    t.ok(body.ok);
    t.equal(body.result.length, 4);
  });
});