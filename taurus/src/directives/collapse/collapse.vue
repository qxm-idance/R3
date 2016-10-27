<script>
  const CSS_COLLAPSED = 'is-collapsed';
  const CSS_COLLAPSING = 'collapsing';
  export default {
    bind (el) {
      // el.classList.add('collapse__target');
    },
    update (el, binding) {
      var value = binding.value;
      el.setAttribute('aria-expanded', value);
      el.classList.add(CSS_COLLAPSING);
      if (typeof window.screenX === 'number') {
        var height = 0;
        Array.prototype.slice.call(el.childNodes).forEach(function (child) {
          if (child.nodeType === 1) {
            var oStyle = window.getComputedStyle(child);
            height = child.clientHeight + (parseInt(oStyle.borderTopWidth) || 0) + (parseInt(oStyle.borderBottomWidth) || 0);
          }
        });
      }
      el.style.height = value ? `${height}px` : '0px';
      if (value) {
        el.classList.contains(CSS_COLLAPSED) && el.classList.remove(CSS_COLLAPSED);
      }
      setTimeout(function () {
        el.classList.remove(CSS_COLLAPSING);
        if (!value) {
          el.classList.add(CSS_COLLAPSED);
        }
      }, 350);
    }
  };
</script>
