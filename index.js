module.exports = Morph;

function Morph (a, b) {
    if (!(this instanceof Morph)) return new Morph(a, b);
    
    var svg = this.element = createElement('svg');
    var pa = createElement('path');
    pa.setAttribute('style', 'fill:none;stroke:red;stroke-width:1px;');
    pa.setAttribute('d', 'M ' + a.join(' L '));
    svg.appendChild(pa);
    
    var pb = createElement('path');
    pb.setAttribute('style', 'fill:none;stroke:green;stroke-width:1px;');
    pb.setAttribute('d', 'M ' + b.join(' L '));
    svg.appendChild(pb);
    
    var amean = mean(a);
    var bmean = mean(b);
    
    var pc = createElement('path');
    pc.setAttribute('style', 'fill:none;stroke:purple;stroke-width:1px;');
    pc.setAttribute('d', 'M ' + a.join(' L '));
    
    var start = 'M ' + a.slice(0, Math.min(a.length, b.length)).join(' L ');
    var end = 'M ' + b.slice(0, Math.min(a.length, b.length)).join(' L ');
    
    var anim = createElement('animate');
    anim.setAttribute('dur', '5s');
    anim.setAttribute('repeatCount', 'indefinite');
    anim.setAttribute('attributeName', 'd');
    anim.setAttribute('d', start);
    anim.setAttribute('values', start + ';' + end);
    
    pc.appendChild(anim);
    svg.appendChild(pc);
}

Morph.prototype.animate = function () {
};

Morph.prototype.appendTo = function (target) {
    if (typeof target === 'string') {
        target = document.querySelector(target);
    }
    target.appendChild(this.element);
};

function createElement (name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}

function mean (pts) {
    var sum = [ 0, 0 ];
    for (var i = 0; i < pts.length; i++) {
        sum[0] += pts[i][0];
        sum[1] += pts[i][1];
    }
    return [ sum[0] / sum.length, sum[1] / sum.length ];
}
