### 防抖

触发一个事件后，n秒后执行，如果在n秒内又触发了这个事件，就以新的事件的时间为准，n秒后执行

    function debounce (event, time) {
      let timer = null;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          event.apply(this, args)
        }, time);
      }
    }

## 节流

不管频率多高，单位时间内只执行一次

    function throttle (event, time) {
      let pre = 0;
      return function (...args) {
        if (Date.now() - pre > time) {
          pre = Date.now();
          event.apply(this, args);
        }
      }
    }

    function throttle (event, time) {
      let timer = null;
      return function (...args) {
        if (!timer) {
          timer = setTimeout(() => {
            timer = null;
            event.apply(this, args);
          }, time);
        }
      }
    }