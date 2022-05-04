(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{let g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ProgressBar = f()}})(function(){let define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){let c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);let a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}let p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){let n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(let u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    /*! Shifty 2.8.3 - https://github.com/jeremyckahn/shifty */
    !function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("shifty",[],n):"object"==typeof exports?exports.shifty=n():t.shifty=n()}(window,(function(){return function(t){let n={};function e(r){if(n[r])return n[r].exports;let i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;let r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(let i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){let n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([function(t,n,e){"use strict";(function(t){e.d(n,"e",(function(){return v})),e.d(n,"c",(function(){return _})),e.d(n,"b",(function(){return m})),e.d(n,"a",(function(){return b})),e.d(n,"d",(function(){return w}));let r=e(1);function i(t,n){for(let e=0;e<n.length;e++){let r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){let e=Object.keys(t);if(Object.getOwnPropertySymbols){let r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function a(t){for(let n=1;n<arguments.length;n++){let e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}let f="undefined"!=typeof window?window:t,s=f.requestAnimationFrame||f.webkitRequestAnimationFrame||f.oRequestAnimationFrame||f.msRequestAnimationFrame||f.mozCancelRequestAnimationFrame&&f.mozRequestAnimationFrame||setTimeout,l=function(){},h=null,p=null,d=a({},r),v=function(t,n,e,r,i,u,o){let a=t<u?0:(t-u)/i;for(let c in n){let f=o[c],s=f.call?f:d[f],l=e[c];n[c]=l+(r[c]-l)*s(a)}return n},y=function(t,n){let e=t._attachment,r=t._currentState,i=t._delay,u=t._easing,o=t._originalState,a=t._duration,c=t._step,f=t._targetState,s=t._timestamp,l=s+i+a,h=n>l?l:n,p=a-(l-h);h>=l?(c(f,e,p),t.stop(!0)):(t._applyFilter("beforeTween"),h<s+i?(h=1,a=1,s=1):s+=i,v(h,r,o,f,a,s,u),t._applyFilter("afterTween"),c(r,e,p))},_=function(){for(let t=b.now(),n=h;n;){let e=n._next;y(n,t),n=e}},m=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"linear",e={},r=u(n);if("string"===r||"function"===r)for(let i in t)e[i]=n;else for(let o in t)e[o]=n[o]||"linear";return e},g=function(t){if(t===h)(h=t._next)?h._previous=null:p=null;else if(t===p)(p=t._previous)?p._next=null:h=null;else{let n=t._previous,e=t._next;n._next=e,e._previous=n}t._previous=t._next=null},b=function(){function t(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this._currentState=n,this._configured=!1,this._filters=[],this._timestamp=null,this._next=null,this._previous=null,e&&this.setConfig(e)}let n,e,r;return n=t,(e=[{key:"_applyFilter",value:function(t){let n=!0,e=!1,r=void 0;try{for(let i,u=this._filters[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){let o=i.value[t];o&&o(this)}}catch(t){e=!0,r=t}finally{try{n||null==u.return||u.return()}finally{if(e)throw r}}}},{key:"tween",value:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,e=this._attachment,r=this._configured;return!n&&r||this.setConfig(n),this._pausedAtTime=null,this._timestamp=t.now(),this._start(this.get(),e),this.resume()}},{key:"setConfig",value:function(){let n=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.attachment,i=e.delay,u=void 0===i?0:i,o=e.duration,c=void 0===o?500:o,f=e.easing,s=e.from,h=e.promise,p=void 0===h?Promise:h,d=e.start,v=void 0===d?l:d,y=e.step,_=void 0===y?l:y,g=e.to;this._configured=!0,this._attachment=r,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=u,this._start=v,this._step=_,this._duration=c,this._currentState=a({},s||this.get()),this._originalState=this.get(),this._targetState=a({},g||this.get());let b=this._currentState;this._targetState=a({},b,{},this._targetState),this._easing=m(b,f);let w=t.filters;for(let O in this._filters.length=0,w)w[O].doesApply(this)&&this._filters.push(w[O]);return this._applyFilter("tweenCreated"),this._promise=new p((function(t,e){n._resolve=t,n._reject=e})),this._promise.catch(l),this}},{key:"get",value:function(){return a({},this._currentState)}},{key:"set",value:function(t){this._currentState=t}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=t.now(),this._isPlaying=!1,g(this),this}},{key:"resume",value:function(){if(null===this._timestamp)return this.tween();if(this._isPlaying)return this._promise;let n=t.now();return this._pausedAtTime&&(this._timestamp+=n-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,null===h?(h=this,p=this,function t(){h&&(s.call(f,t,1e3/60),_())}()):(this._previous=p,p._next=this,p=this),this._promise}},{key:"seek",value:function(n){n=Math.max(n,0);let e=t.now();return this._timestamp+n===0?this:(this._timestamp=e-n,this._isPlaying||y(this,e),this)}},{key:"stop",value:function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this._attachment,e=this._currentState,r=this._easing,i=this._originalState,u=this._targetState;if(this._isPlaying)return this._isPlaying=!1,g(this),t?(this._applyFilter("beforeTween"),v(1,e,i,u,1,0,r),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd"),this._resolve(e,n)):this._reject(e,n),this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(n){t.setScheduleFunction(n)}},{key:"dispose",value:function(){for(let t in this)delete this[t]}}])&&i(n.prototype,e),r&&i(n,r),t}();function w(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new b,e=n.tween(t);return e.tweenable=n,e}b.setScheduleFunction=function(t){return s=t},b.formulas=d,b.filters={},b.now=Date.now||function(){return+new Date}}).call(this,e(2))},function(t,n,e){"use strict";e.r(n),e.d(n,"linear",(function(){return r})),e.d(n,"easeInQuad",(function(){return i})),e.d(n,"easeOutQuad",(function(){return u})),e.d(n,"easeInOutQuad",(function(){return o})),e.d(n,"easeInCubic",(function(){return a})),e.d(n,"easeOutCubic",(function(){return c})),e.d(n,"easeInOutCubic",(function(){return f})),e.d(n,"easeInQuart",(function(){return s})),e.d(n,"easeOutQuart",(function(){return l})),e.d(n,"easeInOutQuart",(function(){return h})),e.d(n,"easeInQuint",(function(){return p})),e.d(n,"easeOutQuint",(function(){return d})),e.d(n,"easeInOutQuint",(function(){return v})),e.d(n,"easeInSine",(function(){return y})),e.d(n,"easeOutSine",(function(){return _})),e.d(n,"easeInOutSine",(function(){return m})),e.d(n,"easeInExpo",(function(){return g})),e.d(n,"easeOutExpo",(function(){return b})),e.d(n,"easeInOutExpo",(function(){return w})),e.d(n,"easeInCirc",(function(){return O})),e.d(n,"easeOutCirc",(function(){return S})),e.d(n,"easeInOutCirc",(function(){return j})),e.d(n,"easeOutBounce",(function(){return M})),e.d(n,"easeInBack",(function(){return k})),e.d(n,"easeOutBack",(function(){return P})),e.d(n,"easeInOutBack",(function(){return x})),e.d(n,"elastic",(function(){return T})),e.d(n,"swingFromTo",(function(){return E})),e.d(n,"swingFrom",(function(){return F})),e.d(n,"swingTo",(function(){return A})),e.d(n,"bounce",(function(){return I})),e.d(n,"bouncePast",(function(){return C})),e.d(n,"easeFromTo",(function(){return D})),e.d(n,"easeFrom",(function(){return q})),e.d(n,"easeTo",(function(){return Q}));
    /*!
     * All equations are adapted from Thomas Fuchs'
     * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
     *
     * Based on Easing Equations (c) 2003 [Robert
     * Penner](http://www.robertpenner.com/), all rights reserved. This work is
     * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
     */
    /*!
     *  TERMS OF USE - EASING EQUATIONS
     *  Open source under the BSD License.
     *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
     */
    let r=function(t){return t},i=function(t){return Math.pow(t,2)},u=function(t){return-(Math.pow(t-1,2)-1)},o=function(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},a=function(t){return Math.pow(t,3)},c=function(t){return Math.pow(t-1,3)+1},f=function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},s=function(t){return Math.pow(t,4)},l=function(t){return-(Math.pow(t-1,4)-1)},h=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},p=function(t){return Math.pow(t,5)},d=function(t){return Math.pow(t-1,5)+1},v=function(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},y=function(t){return 1-Math.cos(t*(Math.PI/2))},_=function(t){return Math.sin(t*(Math.PI/2))},m=function(t){return-.5*(Math.cos(Math.PI*t)-1)},g=function(t){return 0===t?0:Math.pow(2,10*(t-1))},b=function(t){return 1===t?1:1-Math.pow(2,-10*t)},w=function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},O=function(t){return-(Math.sqrt(1-t*t)-1)},S=function(t){return Math.sqrt(1-Math.pow(t-1,2))},j=function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},M=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},k=function(t){let n=1.70158;return t*t*((n+1)*t-n)},P=function(t){let n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},x=function(t){let n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},T=function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*(2*Math.PI)/2)+1},E=function(t){let n=1.70158;return(t/=.5)<1?t*t*((1+(n*=1.525))*t-n)*.5:.5*((t-=2)*t*((1+(n*=1.525))*t+n)+2)},F=function(t){let n=1.70158;return t*t*((n+1)*t-n)},A=function(t){let n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},I=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},C=function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},D=function(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},q=function(t){return Math.pow(t,4)},Q=function(t){return Math.pow(t,.25)}},function(t,n){let e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n);let r={};e.r(r),e.d(r,"doesApply",(function(){return x})),e.d(r,"tweenCreated",(function(){return T})),e.d(r,"beforeTween",(function(){return E})),e.d(r,"afterTween",(function(){return F}));let i,u,o=e(0),a=/(\d|-|\.)/,c=/([^\-0-9.]+)/g,f=/[0-9.-]+/g,s=(i=f.source,u=/,\s*/.source,new RegExp("rgb\\(".concat(i).concat(u).concat(i).concat(u).concat(i,"\\)"),"g")),l=/^.*\(/,h=/#([0-9]|[a-f]){3,6}/gi,p=function(t,n){return t.map((function(t,e){return"_".concat(n,"_").concat(e)}))};function d(t){return parseInt(t,16)}let v=function(t){return"rgb(".concat((n=t,3===(n=n.replace(/#/,"")).length&&(n=(n=n.split(""))[0]+n[0]+n[1]+n[1]+n[2]+n[2]),[d(n.substr(0,2)),d(n.substr(2,2)),d(n.substr(4,2))]).join(","),")");let n},y=function(t,n,e){let r=n.match(t),i=n.replace(t,"VAL");return r&&r.forEach((function(t){return i=i.replace("VAL",e(t))})),i},_=function(t){for(let n in t){let e=t[n];"string"==typeof e&&e.match(h)&&(t[n]=y(h,e,v))}},m=function(t){let n=t.match(f).map(Math.floor),e=t.match(l)[0];return"".concat(e).concat(n.join(","),")")},g=function(t){return t.match(f)},b=function(t){let n,e,r={};for(let i in t){let u=t[i];"string"==typeof u&&(r[i]={formatString:(n=u,e=void 0,e=n.match(c),e?(1===e.length||n.charAt(0).match(a))&&e.unshift(""):e=["",""],e.join("VAL")),chunkNames:p(g(u),i)})}return r},w=function(t,n){let e=function(e){g(t[e]).forEach((function(r,i){return t[n[e].chunkNames[i]]=+r})),delete t[e]};for(let r in n)e(r)},O=function(t,n){let e={};return n.forEach((function(n){e[n]=t[n],delete t[n]})),e},S=function(t,n){return n.map((function(n){return t[n]}))},j=function(t,n){return n.forEach((function(n){return t=t.replace("VAL",+n.toFixed(4))})),t},M=function(t,n){for(let e in n){let r=n[e],i=r.chunkNames,u=r.formatString,o=j(u,S(O(t,i),i));t[e]=y(s,o,m)}},k=function(t,n){let e=function(e){let r=n[e].chunkNames,i=t[e];if("string"==typeof i){let u=i.split(" "),o=u[u.length-1];r.forEach((function(n,e){return t[n]=u[e]||o}))}else r.forEach((function(n){return t[n]=i}));delete t[e]};for(let r in n)e(r)},P=function(t,n){for(let e in n){let r=n[e].chunkNames,i=t[r[0]];t[e]="string"==typeof i?r.map((function(n){let e=t[n];return delete t[n],e})).join(" "):i}},x=function(t){let n=t._currentState;return Object.keys(n).some((function(t){return"string"==typeof n[t]}))};function T(t){let n=t._currentState;[n,t._originalState,t._targetState].forEach(_),t._tokenData=b(n)}function E(t){let n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;k(i,u),[n,e,r].forEach((function(t){return w(t,u)}))}function F(t){let n=t._currentState,e=t._originalState,r=t._targetState,i=t._easing,u=t._tokenData;[n,e,r].forEach((function(t){return M(t,u)})),P(i,u)}function A(t,n){let e=Object.keys(t);if(Object.getOwnPropertySymbols){let r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function I(t){for(let n=1;n<arguments.length;n++){let e=null!=arguments[n]?arguments[n]:{};n%2?A(Object(e),!0).forEach((function(n){C(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function C(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}let D=new o.a,q=o.a.filters,Q=function(t,n,e,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,u=I({},t),a=Object(o.b)(t,r);for(let c in D._filters.length=0,D.set({}),D._currentState=u,D._originalState=t,D._targetState=n,D._easing=a,q)q[c].doesApply(D)&&D._filters.push(q[c]);D._applyFilter("tweenCreated"),D._applyFilter("beforeTween");let f=Object(o.e)(e,u,t,n,1,i,a);return D._applyFilter("afterTween"),f};function B(t){return function(t){if(Array.isArray(t)){for(let n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function N(t,n){for(let e=0;e<n.length;e++){let r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function R(t,n){let e=n.get(t);if(!e)throw new TypeError("attempted to get private field on non-instance");return e.get?e.get.call(t):e.value}let z=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),L.set(this,{writable:!0,value:[]});for(let n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];e.forEach(this.add.bind(this))}let n,e,r;return n=t,(e=[{key:"add",value:function(t){return R(this,L).push(t),t}},{key:"remove",value:function(t){let n=R(this,L).indexOf(t);return~n&&R(this,L).splice(n,1),t}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return R(this,L).some((function(t){return t.isPlaying()}))}},{key:"play",value:function(){return R(this,L).forEach((function(t){return t.tween()})),this}},{key:"pause",value:function(){return R(this,L).forEach((function(t){return t.pause()})),this}},{key:"resume",value:function(){return R(this,L).forEach((function(t){return t.resume()})),this}},{key:"stop",value:function(t){return R(this,L).forEach((function(n){return n.stop(t)})),this}},{key:"tweenables",get:function(){return B(R(this,L))}},{key:"promises",get:function(){return R(this,L).map((function(t){return t._promise}))}}])&&N(n.prototype,e),r&&N(n,r),t}(),L=new WeakMap;function V(t,n,e,r,i,u){let o,a,c=0,f=0,s=0,l=0,h=0,p=0,d=function(t){return((c*t+f)*t+s)*t},v=function(t){return(3*c*t+2*f)*t+s},y=function(t){return t>=0?t:0-t};return c=1-(s=3*n)-(f=3*(r-n)-s),l=1-(p=3*e)-(h=3*(i-e)-p),o=t,a=function(t){return 1/(200*t)}(u),function(t){return((l*t+h)*t+p)*t}(function(t,n){let e,r,i,u,o,a;for(i=t,a=0;a<8;a++){if(u=d(i)-t,y(u)<n)return i;if(o=v(i),y(o)<1e-6)break;i-=u/o}if((i=t)<(e=0))return e;if(i>(r=1))return r;for(;e<r;){if(u=d(i),y(u-t)<n)return i;t>u?e=i:r=i,i=.5*(r-e)+e}return i}(o,a))}let W=function(t,n,e,r,i){let u=function(t,n,e,r){return function(i){return V(i,t,n,e,r,1)}}(n,e,r,i);return u.displayName=t,u.x1=n,u.y1=e,u.x2=r,u.y2=i,o.a.formulas[t]=u},G=function(t){return delete o.a.formulas[t]};e.d(n,"processTweens",(function(){return o.c})),e.d(n,"Tweenable",(function(){return o.a})),e.d(n,"tween",(function(){return o.d})),e.d(n,"interpolate",(function(){return Q})),e.d(n,"Scene",(function(){return z})),e.d(n,"setBezierFunction",(function(){return W})),e.d(n,"unsetBezierFunction",(function(){return G})),o.a.filters.token=r}])}));
    
    },{}],2:[function(require,module,exports){
    // Circle shaped progress bar
    
    let Shape = require('./shape');
    let utils = require('./utils');
    
    let Circle = function Circle(container, options) {
        // Use two arcs to form a circle
        // See this answer http://stackoverflow.com/a/10477334/1446092
        this._pathTemplate =
            'M 50,50 m 0,-{radius}' +
            ' a {radius},{radius} 0 1 1 0,{2radius}' +
            ' a {radius},{radius} 0 1 1 0,-{2radius}';
    
        this.containerAspectRatio = 1;
    
        Shape.apply(this, arguments);
    };
    
    Circle.prototype = new Shape();
    Circle.prototype.constructor = Circle;
    
    Circle.prototype._pathString = function _pathString(opts) {
        let widthOfWider = opts.strokeWidth;
        if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) {
            widthOfWider = opts.trailWidth;
        }
    
        let r = 50 - widthOfWider / 2;
    
        return utils.render(this._pathTemplate, {
            radius: r,
            '2radius': r * 2
        });
    };
    
    Circle.prototype._trailString = function _trailString(opts) {
        return this._pathString(opts);
    };
    
    module.exports = Circle;
    
    },{"./shape":7,"./utils":9}],3:[function(require,module,exports){
    // Line shaped progress bar
    
    let Shape = require('./shape');
    let utils = require('./utils');
    
    let Line = function Line(container, options) {
        this._pathTemplate = options.vertical
            ? 'M {center},100 L {center},0'
            : 'M 0,{center} L 100,{center}';
        Shape.apply(this, arguments);
    };
    
    Line.prototype = new Shape();
    Line.prototype.constructor = Line;
    
    Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
        let viewBoxStr = opts.vertical
            ? '0 0 ' + opts.strokeWidth + ' 100'
            : '0 0 100 ' + opts.strokeWidth;
        svg.setAttribute('viewBox', viewBoxStr);
        svg.setAttribute('preserveAspectRatio', 'none');
    };
    
    Line.prototype._pathString = function _pathString(opts) {
        return utils.render(this._pathTemplate, {
            center: opts.strokeWidth / 2
        });
    };
    
    Line.prototype._trailString = function _trailString(opts) {
        return this._pathString(opts);
    };
    
    module.exports = Line;
    
    },{"./shape":7,"./utils":9}],4:[function(require,module,exports){
    module.exports = {
        // Higher level API, different shaped progress bars
        Line: require('./line'),
        Circle: require('./circle'),
        SemiCircle: require('./semicircle'),
        Square: require('./square'),
    
        // Lower level API to use any SVG path
        Path: require('./path'),
    
        // Base-class for creating new custom shapes
        // to be in line with the API of built-in shapes
        // Undocumented.
        Shape: require('./shape'),
    
        // Internal utils, undocumented.
        utils: require('./utils')
    };
    
    },{"./circle":2,"./line":3,"./path":5,"./semicircle":6,"./shape":7,"./square":8,"./utils":9}],5:[function(require,module,exports){
    // Lower level API to animate any kind of svg path
    
    let shifty = require('shifty');
    let utils = require('./utils');
    
    let Tweenable = shifty.Tweenable;
    
    let EASING_ALIASES = {
        easeIn: 'easeInCubic',
        easeOut: 'easeOutCubic',
        easeInOut: 'easeInOutCubic'
    };
    
    let Path = function Path(path, opts) {
        // Throw a better error if not initialized with `new` keyword
        if (!(this instanceof Path)) {
            throw new Error('Constructor was called without new keyword');
        }
    
        // Default parameters for animation
        opts = utils.extend({
            delay: 0,
            duration: 800,
            easing: 'linear',
            from: {},
            to: {},
            step: function() {}
        }, opts);
    
        let element;
        if (utils.isString(path)) {
            element = document.querySelector(path);
        } else {
            element = path;
        }
    
        // Reveal .path as public attribute
        this.path = element;
        this._opts = opts;
        this._tweenable = null;
    
        // Set up the starting positions
        let length = this.path.getTotalLength();
        this.path.style.strokeDasharray = length + ' ' + length;
        this.set(0);
    };
    
    Path.prototype.value = function value() {
        let offset = this._getComputedDashOffset();
        let length = this.path.getTotalLength();
    
        let progress = 1 - offset / length;
        // Round number to prevent returning very small number like 1e-30, which
        // is practically 0
        return parseFloat(progress.toFixed(6), 10);
    };
    
    Path.prototype.set = function set(progress) {
        this.stop();
    
        this.path.style.strokeDashoffset = this._progressToOffset(progress);
    
        let step = this._opts.step;
        if (utils.isFunction(step)) {
            let easing = this._easing(this._opts.easing);
            let values = this._calculateTo(progress, easing);
            let reference = this._opts.shape || this;
            step(values, reference, this._opts.attachment);
        }
    };
    
    Path.prototype.stop = function stop() {
        this._stopTween();
        this.path.style.strokeDashoffset = this._getComputedDashOffset();
    };
    
    // Method introduced here:
    // http://jakearchibald.com/2013/animated-line-drawing-svg/
    Path.prototype.animate = function animate(progress, opts, cb) {
        opts = opts || {};
    
        if (utils.isFunction(opts)) {
            cb = opts;
            opts = {};
        }
    
        let passedOpts = utils.extend({}, opts);
    
        // Copy default opts to new object so defaults are not modified
        let defaultOpts = utils.extend({}, this._opts);
        opts = utils.extend(defaultOpts, opts);
    
        let shiftyEasing = this._easing(opts.easing);
        let values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);
    
        this.stop();
    
        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        this.path.getBoundingClientRect();
    
        let offset = this._getComputedDashOffset();
        let newOffset = this._progressToOffset(progress);
    
        let self = this;
        this._tweenable = new Tweenable();
        this._tweenable.tween({
            from: utils.extend({ offset: offset }, values.from),
            to: utils.extend({ offset: newOffset }, values.to),
            duration: opts.duration,
            delay: opts.delay,
            easing: shiftyEasing,
            step: function(state) {
                self.path.style.strokeDashoffset = state.offset;
                let reference = opts.shape || self;
                opts.step(state, reference, opts.attachment);
            }
        }).then(function(state) {
            if (utils.isFunction(cb)) {
                cb();
            }
        }).catch(function(err) {
            console.error('Error in tweening:', err);
            throw err;
        });
    };
    
    Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
        let computedStyle = window.getComputedStyle(this.path, null);
        return parseFloat(computedStyle.getPropertyValue('stroke-dashoffset'), 10);
    };
    
    Path.prototype._progressToOffset = function _progressToOffset(progress) {
        let length = this.path.getTotalLength();
        return length - progress * length;
    };
    
    // Resolves from and to values for animation.
    Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
        if (opts.from && opts.to) {
            return {
                from: opts.from,
                to: opts.to
            };
        }
    
        return {
            from: this._calculateFrom(easing),
            to: this._calculateTo(progress, easing)
        };
    };
    
    // Calculate `from` values from options passed at initialization
    Path.prototype._calculateFrom = function _calculateFrom(easing) {
        return shifty.interpolate(this._opts.from, this._opts.to, this.value(), easing);
    };
    
    // Calculate `to` values from options passed at initialization
    Path.prototype._calculateTo = function _calculateTo(progress, easing) {
        return shifty.interpolate(this._opts.from, this._opts.to, progress, easing);
    };
    
    Path.prototype._stopTween = function _stopTween() {
        if (this._tweenable !== null) {
            this._tweenable.stop(true);
            this._tweenable = null;
        }
    };
    
    Path.prototype._easing = function _easing(easing) {
        if (EASING_ALIASES.hasOwnProperty(easing)) {
            return EASING_ALIASES[easing];
        }
    
        return easing;
    };
    
    module.exports = Path;
    
    },{"./utils":9,"shifty":1}],6:[function(require,module,exports){
    // Semi-SemiCircle shaped progress bar
    
    let Shape = require('./shape');
    let Circle = require('./circle');
    let utils = require('./utils');
    
    let SemiCircle = function SemiCircle(container, options) {
        // Use one arc to form a SemiCircle
        // See this answer http://stackoverflow.com/a/10477334/1446092
        this._pathTemplate =
            'M 50,50 m -{radius},0' +
            ' a {radius},{radius} 0 1 1 {2radius},0';
    
        this.containerAspectRatio = 2;
    
        Shape.apply(this, arguments);
    };
    
    SemiCircle.prototype = new Shape();
    SemiCircle.prototype.constructor = SemiCircle;
    
    SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
        svg.setAttribute('viewBox', '0 0 100 50');
    };
    
    SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(
        opts,
        container,
        textContainer
    ) {
        if (opts.text.style) {
            // Reset top style
            textContainer.style.top = 'auto';
            textContainer.style.bottom = '0';
    
            if (opts.text.alignToBottom) {
                utils.setStyle(textContainer, 'transform', 'translate(-50%, 0)');
            } else {
                utils.setStyle(textContainer, 'transform', 'translate(-50%, 50%)');
            }
        }
    };
    
    // Share functionality with Circle, just have different path
    SemiCircle.prototype._pathString = Circle.prototype._pathString;
    SemiCircle.prototype._trailString = Circle.prototype._trailString;
    
    module.exports = SemiCircle;
    
    },{"./circle":2,"./shape":7,"./utils":9}],7:[function(require,module,exports){
    // Base object for different progress bar shapes
    
    let Path = require('./path');
    let utils = require('./utils');
    
    let DESTROYED_ERROR = 'Object is destroyed';
    
    let Shape = function Shape(container, opts) {
        // Throw a better error if progress bars are not initialized with `new`
        // keyword
        if (!(this instanceof Shape)) {
            throw new Error('Constructor was called without new keyword');
        }
    
        // Prevent calling constructor without parameters so inheritance
        // works correctly. To understand, this is how Shape is inherited:
        //
        //   Line.prototype = new Shape();
        //
        // We just want to set the prototype for Line.
        if (arguments.length === 0) {
            return;
        }
    
        // Default parameters for progress bar creation
        this._opts = utils.extend({
            color: '#555',
            strokeWidth: 1.0,
            trailColor: null,
            trailWidth: null,
            fill: null,
            text: {
                style: {
                    color: null,
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    padding: 0,
                    margin: 0,
                    transform: {
                        prefix: true,
                        value: 'translate(-50%, -50%)'
                    }
                },
                autoStyleContainer: true,
                alignToBottom: true,
                value: null,
                className: 'progressbar-text'
            },
            svgStyle: {
                display: 'block',
                width: '100%'
            },
            warnings: false
        }, opts, true);  // Use recursive extend
    
        // If user specifies e.g. svgStyle or text style, the whole object
        // should replace the defaults to make working with styles easier
        if (utils.isObject(opts) && opts.svgStyle !== undefined) {
            this._opts.svgStyle = opts.svgStyle;
        }
        if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== undefined) {
            this._opts.text.style = opts.text.style;
        }
    
        let svgView = this._createSvgView(this._opts);
    
        let element;
        if (utils.isString(container)) {
            element = document.querySelector(container);
        } else {
            element = container;
        }
    
        if (!element) {
            throw new Error('Container does not exist: ' + container);
        }
    
        this._container = element;
        this._container.appendChild(svgView.svg);
        if (this._opts.warnings) {
            this._warnContainerAspectRatio(this._container);
        }
    
        if (this._opts.svgStyle) {
            utils.setStyles(svgView.svg, this._opts.svgStyle);
        }
    
        // Expose public attributes before Path initialization
        this.svg = svgView.svg;
        this.path = svgView.path;
        this.trail = svgView.trail;
        this.text = null;
    
        let newOpts = utils.extend({
            attachment: undefined,
            shape: this
        }, this._opts);
        this._progressPath = new Path(svgView.path, newOpts);
    
        if (utils.isObject(this._opts.text) && this._opts.text.value !== null) {
            this.setText(this._opts.text.value);
        }
    };
    
    Shape.prototype.animate = function animate(progress, opts, cb) {
        if (this._progressPath === null) {
            throw new Error(DESTROYED_ERROR);
        }
    
        this._progressPath.animate(progress, opts, cb);
    };
    
    Shape.prototype.stop = function stop() {
        if (this._progressPath === null) {
            throw new Error(DESTROYED_ERROR);
        }
    
        // Don't crash if stop is called inside step function
        if (this._progressPath === undefined) {
            return;
        }
    
        this._progressPath.stop();
    };
    
    Shape.prototype.pause = function pause() {
        if (this._progressPath === null) {
            throw new Error(DESTROYED_ERROR);
        }
    
        if (this._progressPath === undefined) {
            return;
        }
    
        if (!this._progressPath._tweenable) {
            // It seems that we can't pause this
            return;
        }
    
        this._progressPath._tweenable.pause();
    };
    
    Shape.prototype.resume = function resume() {
        if (this._progressPath === null) {
            throw new Error(DESTROYED_ERROR);
        }
    
        if (this._progressPath === undefined) {
            return;
        }
    
        if (!this._progressPath._tweenable) {
            // It seems that we can't resume this
            return;
        }
    
        this._progressPath._tweenable.resume();
    };
    
    Shape.prototype.destroy = function destroy() {
        if (this._progressPath === null) {
            throw new Error(DESTROYED_ERROR);
        }
    
        this.stop();
        this.svg.parentNode.removeChild(this.svg);
        this.svg = null;
        this.path = null;
        this.trail = null;
        this._progressPath = null;
    
        if (this.text !== null) {
            this.text.parentNode.removeChild(this.text);
            this.text = null;
        }
    };
    
    Shape.prototype.set = function set(progress) {
        if (this._progressPath === null) {
            throw new Error(DESTROYED_ERROR);
        }
    
        this._progressPath.set(progress);
    };
    
    Shape.prototype.value = function value() {
        if (this._progressPath === null) {
            throw new Error(DESTROYED_ERROR);
        }
    
        if (this._progressPath === undefined) {
            return 0;
        }
    
        return this._progressPath.value();
    };
    
    Shape.prototype.setText = function setText(newText) {
        if (this._progressPath === null) {
            throw new Error(DESTROYED_ERROR);
        }
    
        if (this.text === null) {
            // Create new text node
            this.text = this._createTextContainer(this._opts, this._container);
            this._container.appendChild(this.text);
        }
    
        // Remove previous text and add new
        if (utils.isObject(newText)) {
            utils.removeChildren(this.text);
            this.text.appendChild(newText);
        } else {
            this.text.innerHTML = newText;
        }
    };
    
    Shape.prototype._createSvgView = function _createSvgView(opts) {
        let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this._initializeSvg(svg, opts);
    
        let trailPath = null;
        // Each option listed in the if condition are 'triggers' for creating
        // the trail path
        if (opts.trailColor || opts.trailWidth) {
            trailPath = this._createTrail(opts);
            svg.appendChild(trailPath);
        }
    
        let path = this._createPath(opts);
        svg.appendChild(path);
    
        return {
            svg: svg,
            path: path,
            trail: trailPath
        };
    };
    
    Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
        svg.setAttribute('viewBox', '0 0 100 100');
    };
    
    Shape.prototype._createPath = function _createPath(opts) {
        let pathString = this._pathString(opts);
        return this._createPathElement(pathString, opts);
    };
    
    Shape.prototype._createTrail = function _createTrail(opts) {
        // Create path string with original passed options
        let pathString = this._trailString(opts);
    
        // Prevent modifying original
        let newOpts = utils.extend({}, opts);
    
        // Defaults for parameters which modify trail path
        if (!newOpts.trailColor) {
            newOpts.trailColor = '#eee';
        }
        if (!newOpts.trailWidth) {
            newOpts.trailWidth = newOpts.strokeWidth;
        }
    
        newOpts.color = newOpts.trailColor;
        newOpts.strokeWidth = newOpts.trailWidth;
    
        // When trail path is set, fill must be set for it instead of the
        // actual path to prevent trail stroke from clipping
        newOpts.fill = null;
    
        return this._createPathElement(pathString, newOpts);
    };
    
    Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathString);
        path.setAttribute('stroke', opts.color);
        path.setAttribute('stroke-width', opts.strokeWidth);
    
        if (opts.fill) {
            path.setAttribute('fill', opts.fill);
        } else {
            path.setAttribute('fill-opacity', '0');
        }
    
        return path;
    };
    
    Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
        let textContainer = document.createElement('div');
        textContainer.className = opts.text.className;
    
        let textStyle = opts.text.style;
        if (textStyle) {
            if (opts.text.autoStyleContainer) {
                container.style.position = 'relative';
            }
    
            utils.setStyles(textContainer, textStyle);
            // Default text color to progress bar's color
            if (!textStyle.color) {
                textContainer.style.color = opts.color;
            }
        }
    
        this._initializeTextContainer(opts, container, textContainer);
        return textContainer;
    };
    
    // Give custom shapes possibility to modify text element
    Shape.prototype._initializeTextContainer = function(opts, container, element) {
        // By default, no-op
        // Custom shapes should respect API options, such as text.style
    };
    
    Shape.prototype._pathString = function _pathString(opts) {
        throw new Error('Override this function for each progress bar');
    };
    
    Shape.prototype._trailString = function _trailString(opts) {
        throw new Error('Override this function for each progress bar');
    };
    
    Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
        if (!this.containerAspectRatio) {
            return;
        }
    
        let computedStyle = window.getComputedStyle(container, null);
        let width = parseFloat(computedStyle.getPropertyValue('width'), 10);
        let height = parseFloat(computedStyle.getPropertyValue('height'), 10);
        if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
            console.warn(
                'Incorrect aspect ratio of container',
                '#' + container.id,
                'detected:',
                computedStyle.getPropertyValue('width') + '(width)',
                '/',
                computedStyle.getPropertyValue('height') + '(height)',
                '=',
                width / height
            );
    
            console.warn(
                'Aspect ratio of should be',
                this.containerAspectRatio
            );
        }
    };
    
    module.exports = Shape;
    
    },{"./path":5,"./utils":9}],8:[function(require,module,exports){
    // Square shaped progress bar
    // Note: Square is not core part of API anymore. It's left here
    //       for reference. square is not included to the progressbar
    //       build anymore
    
    let Shape = require('./shape');
    let utils = require('./utils');
    
    let Square = function Square(container, options) {
        this._pathTemplate =
            'M 0,{halfOfStrokeWidth}' +
            ' L {width},{halfOfStrokeWidth}' +
            ' L {width},{width}' +
            ' L {halfOfStrokeWidth},{width}' +
            ' L {halfOfStrokeWidth},{strokeWidth}';
    
        this._trailTemplate =
            'M {startMargin},{halfOfStrokeWidth}' +
            ' L {width},{halfOfStrokeWidth}' +
            ' L {width},{width}' +
            ' L {halfOfStrokeWidth},{width}' +
            ' L {halfOfStrokeWidth},{halfOfStrokeWidth}';
    
        Shape.apply(this, arguments);
    };
    
    Square.prototype = new Shape();
    Square.prototype.constructor = Square;
    
    Square.prototype._pathString = function _pathString(opts) {
        let w = 100 - opts.strokeWidth / 2;
    
        return utils.render(this._pathTemplate, {
            width: w,
            strokeWidth: opts.strokeWidth,
            halfOfStrokeWidth: opts.strokeWidth / 2
        });
    };
    
    Square.prototype._trailString = function _trailString(opts) {
        let w = 100 - opts.strokeWidth / 2;
    
        return utils.render(this._trailTemplate, {
            width: w,
            strokeWidth: opts.strokeWidth,
            halfOfStrokeWidth: opts.strokeWidth / 2,
            startMargin: opts.strokeWidth / 2 - opts.trailWidth / 2
        });
    };
    
    module.exports = Square;
    
    },{"./shape":7,"./utils":9}],9:[function(require,module,exports){
    // Utility functions
    
    let PREFIXES = 'Webkit Moz O ms'.split(' ');
    let FLOAT_COMPARISON_EPSILON = 0.001;
    
    // Copy all attributes from source object to destination object.
    // destination object is mutated.
    function extend(destination, source, recursive) {
        destination = destination || {};
        source = source || {};
        recursive = recursive || false;
    
        for (let attrName in source) {
            if (source.hasOwnProperty(attrName)) {
                let destVal = destination[attrName];
                let sourceVal = source[attrName];
                if (recursive && isObject(destVal) && isObject(sourceVal)) {
                    destination[attrName] = extend(destVal, sourceVal, recursive);
                } else {
                    destination[attrName] = sourceVal;
                }
            }
        }
    
        return destination;
    }
    
    // Renders templates with given letiables. Variables must be surrounded with
    // braces without any spaces, e.g. {letiable}
    // All instances of letiable placeholders will be replaced with given content
    // Example:
    // render('Hello, {message}!', {message: 'world'})
    function render(template, lets) {
        let rendered = template;
    
        for (let key in lets) {
            if (lets.hasOwnProperty(key)) {
                let val = lets[key];
                let regExpString = '\\{' + key + '\\}';
                let regExp = new RegExp(regExpString, 'g');
    
                rendered = rendered.replace(regExp, val);
            }
        }
    
        return rendered;
    }
    
    function setStyle(element, style, value) {
        let elStyle = element.style;  // cache for performance
    
        for (let i = 0; i < PREFIXES.length; ++i) {
            let prefix = PREFIXES[i];
            elStyle[prefix + capitalize(style)] = value;
        }
    
        elStyle[style] = value;
    }
    
    function setStyles(element, styles) {
        forEachObject(styles, function(styleValue, styleName) {
            // Allow disabling some individual styles by setting them
            // to null or undefined
            if (styleValue === null || styleValue === undefined) {
                return;
            }
    
            // If style's value is {prefix: true, value: '50%'},
            // Set also browser prefixed styles
            if (isObject(styleValue) && styleValue.prefix === true) {
                setStyle(element, styleName, styleValue.value);
            } else {
                element.style[styleName] = styleValue;
            }
        });
    }
    
    function capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    
    function isString(obj) {
        return typeof obj === 'string' || obj instanceof String;
    }
    
    function isFunction(obj) {
        return typeof obj === 'function';
    }
    
    function isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
    
    // Returns true if `obj` is object as in {a: 1, b: 2}, not if it's function or
    // array
    function isObject(obj) {
        if (isArray(obj)) {
            return false;
        }
    
        let type = typeof obj;
        return type === 'object' && !!obj;
    }
    
    function forEachObject(object, callback) {
        for (let key in object) {
            if (object.hasOwnProperty(key)) {
                let val = object[key];
                callback(val, key);
            }
        }
    }
    
    function floatEquals(a, b) {
        return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
    }
    
    // https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
    function removeChildren(el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }
    
    module.exports = {
        extend: extend,
        render: render,
        setStyle: setStyle,
        setStyles: setStyles,
        capitalize: capitalize,
        isString: isString,
        isFunction: isFunction,
        isObject: isObject,
        forEachObject: forEachObject,
        floatEquals: floatEquals,
        removeChildren: removeChildren
    };
    
    },{}]},{},[4])(4)
    });