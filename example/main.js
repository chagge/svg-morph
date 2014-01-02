var morph = require('../');
var pencil = require('svg-pencil');

var pa = pencil();
pa.appendTo(document.getElementById('a'));

var pb = pencil();
pb.appendTo(document.getElementById('b'));

var pts = {};
pa.on('points', function (ps) { pts.a = ps; pa.unregister(); done() });
pb.on('points', function (ps) { pts.b = ps; pb.unregister(); done() });

function done () {
    if (pts.a && pts.b) run.classList.remove('hide');
}

var run = document.getElementById('run');

run.addEventListener('click', function () {
    var m = morph(pts.a, pts.b);
    var c = document.getElementById('c');
    m.appendTo(c);
    run.classList.add('hide');
});
