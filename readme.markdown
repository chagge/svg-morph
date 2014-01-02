# svg-morph

morph animate between two svg path arrays

# example

[run this demo](http://scratch.substack.net/svg-morph/)

main.js:

``` js
var morph = require('svg-morph');
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
        /* disable text selection: */
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .hide {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="a" class="viewport"></div>
    <div id="b" class="viewport"></div>
    <div id="c" class="viewport"></div>
    <div>
      <button id="run" class="hide">run</button>
    </div>
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
