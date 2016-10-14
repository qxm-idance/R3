/**
 * @module scroll-to
 * 滚动到指定DOM元素位置插件
 *
 * Modification based on smoothScroll
 *
 * smoothScroll
 * https://github.com/alicelieutier/smoothScroll
 *
 */

// Get the top position of an element in the document
var getTop = function (element) {
  // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
  if (element.nodeName === 'HTML') return -window.pageYOffset;
  return element.getBoundingClientRect().top + window.pageYOffset;
};

// ease in out function thanks to:
// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
var easeInOutCubic = function (t) { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; };

// calculate the scroll position we should be in
// given the start and end point of the scroll
// the time elapsed from the beginning of the scroll
// and the total duration of the scroll (default 500ms)
var position = function (start, end, elapsed, duration) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
  // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
};

var ScollToPlugin = {
  _installed: false,
  install: function (Vue, options) {
    if (ScollToPlugin._installed) {
      return;
    }
    // we use requestAnimationFrame to be called by the browser before every repaint
    // if the first argument is an element then scroll to the top of this element
    // if the first argument is numeric then scroll to this location
    // if the callback exist, it is called when the scrolling is finished
    // if context is set then scroll that element, else scroll window
    Vue.prototype.$scollTo = function (el, duration, callback, context) {
      var end, clock, requestAnimationFrame, step, elapsed;
      var start = window.pageYOffset;
      duration = duration || 500;
      context = context || window;

      if (typeof el === 'number') {
        end = parseInt(el);
      } else {
        end = getTop(el);
      }

      clock = Date.now();
      requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function (fn) { window.setTimeout(fn, 15); };

      step = function () {
        elapsed = Date.now() - clock;
        if (context !== window) {
          context.scrollTop = position(start, end, elapsed, duration);
        } else {
          window.scroll(0, position(start, end, elapsed, duration));
        }

        if (elapsed > duration) {
          if (typeof callback === 'function') {
            callback(el);
          }
        } else {
          requestAnimationFrame(step);
        }
      };
      step();
    };
    Vue.scollTo = Vue.prototype.$scollTo;

    ScollToPlugin._installed = true;
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ScollToPlugin);
}

module.exports = ScollToPlugin;
