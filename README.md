# JQuery Routing Plugin
JQuery router is a SPA (Single Page Apps) router plugin for jQuery.

# Upgrade to Silkrouter (Recommended)
``Silkrouter`` is the next version of JQuery router (without jQuery). Refer to <a href="https://github.com/scssyworks/silkrouter/blob/feature/ver2/MIGRATION.md">migration documentation</a> to migrate to newest version.

# Installation

Using npm:

```sh
npm install --save jqueryrouter deparam.js jquery
```

Using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/jqueryrouter@2.2.4/dist/js/jquery.router.min.js"></script>
```

# How to use?
JQuery router follows a similar pattern as custom events.

## Bind router events

```js
import $ from 'jquery';
import 'jqueryrouter';

$.route('/path/to/route', (e) => {
    ...
});
$.route('#/path/to/route', (e) => {
    ...
});
```

## Trigger router event

```js
$.router.set('/path/to/route');
// OR
$.router.set({
    route: '/path/to/route'
});
```

<b>Note:</b> You need to attach handlers before you can trigger router events.

## Hash routing check
If normal and hash routes are same, it causes route handler to execute twice. Luckily you can add a check to prevent that:

```js
$.route('...', (e) => {
    if (e.hash) { ... }
});
```

## Trigger route handlers on page load/reload
To trigger route handlers on page load/reload, you need to call ``router.init`` method.

```js
$.router.init();
```

The ``init`` method keeps track of handlers which have been triggered. If a handler has been called before, it will not be called again.

## Persisting data
JQuery router supports data persistence via <b>query strings</b> and <b>route params</b>.<br>

Query string:
```js
$.route('/path/to/route', (e, params, query) => {
    console.log(query); // -> { h: 'Hello World' }
});

$.router.set({
    route: '/path/to/route',
    queryString: 'h=Hello World'
});
```

Route params:
```js
$.route('/path/:to/:route', (e, params, query) => {
    console.log(params); // -> { to: 'value1', route: 'value2' }
});

$.router.set({
    route: '/path/value1/value2'
});
```

## Passing data directly
JQuery router allows you to pass data directly to handler. However, this only works if route is triggered manually. In other words this data is never persisted.

```js
$.router.set({
    route: '/path/to/route',
    data: { ... } // Disclaimer: Data should be a valid object
});
```

# Browser support
Jquery router has been tested in following browsers:
<b>Desktop:</b> IE 9 - 11, Chrome, Firefox, Safari, Opera, Edge
<b>Mobile:</b> Chrome, Safari, Firefox

# Debugging
<a href="https://github.com/scssyworks/silkrouter/blob/feature/ver2/DEBUGGING.md">Debugging</a>

# Demo
https://jqueryrouter.herokuapp.com/
