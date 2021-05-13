import { getGlobal } from './getGlobal';
import { isArr } from './utils';

// Polyfill custom event
const g = getGlobal();
if (typeof g.CustomEvent === 'undefined') {
  const CustomEvent = function (event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  };

  CustomEvent.prototype = g.Event.prototype;
  g.CustomEvent = CustomEvent;
}

// Polyfill Array.from

if (!Array.from) {
  Array.from = function (arrayLike) {
    if (isArr(arrayLike)) {
      return arrayLike;
    }
    const arr = [];
    for (let i = 0; i < arrayLike.length; i++) {
      arr.push(arrayLike[i]);
    }
    return arr;
  };
}
