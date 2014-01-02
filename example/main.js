var morph = require('../');
var pencil = require('svg-pencil');

var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');

var pa = pencil();
pa.appendTo(a);

var pb = pencil();
pb.appendTo(b);

var pts = {};
pa.on('points', function (ps) {
    pts.a = ps;
    pa.unregister();
    b.classList.remove('hide');
});

pb.on('points', function (ps) {
    pts.b = ps;
    pb.unregister();
    c.classList.remove('hide');
    
    var m = morph(pts.a, pts.b);
    m.appendTo(c);
    
    var link = document.getElementById('download');
    var div = document.createElement('div');
    div.appendChild(m.element.cloneNode(true));
    
    var data = btoa(div.innerHTML);
    link.setAttribute('download', 'animation.svg');
    link.setAttribute('href', 'data:image/svg;base64,' + data);
    link.classList.remove('hide');
});
