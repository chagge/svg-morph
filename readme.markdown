# svg-morph

morph animation between two svg path arrays

# example

[run this demo](http://scratch.substack.net/svg-morph/)

main.js:

``` js
var morph = require('svg-morph');
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
});
```

index.html:

``` html
<html>
  <head>
    <style>
      .viewport {
        display: inline-block;
        border: 2px solid purple;
        width: 300px;
        height: 300px;
        cursor: crosshair;
        user-select: none;
      }
      .hide {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="a" class="viewport"></div>
    <div id="b" class="viewport hide"></div>
    <div id="c" class="viewport hide"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

compile with [browserify](http://browserify.org):

```
browserify main.js > bundle.js
```

then load index.html in a browser.

# methods

``` js
var morph = require('svg-morph')
```

## var m = morph(a, b, opts={})

Create a new morph animation svg that morphs between the point arrays `a` and
`b`. Each element in `a` and `b` is of the form `[x,y]`.

The `opts` are:

* `opts.svg` - append to this svg, otherwise one will be created
* `opts.fill` - fill color to use, default: `'none'`
* `opts.stroke` - stroke color to use, default: `'black'`
* `opts.strokeWidth` - stroke width to use, default: `'1px'`
* `opts.duration` - animation duration, default: `'1s'`
* `opts.repeatCount` - number of animation repetitions, default: `'indefinite'`

The svg will have a single `<path>` element with an `<animate>` tag containing
the morph data.

## m.appendTo(target)

Append the `m.element` svg to the dom element or query string `target`.

# install

With [npm](https://npmjs.org) do:

```
npm install svg-morph
```

# license

MIT
