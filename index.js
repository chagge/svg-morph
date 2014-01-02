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
