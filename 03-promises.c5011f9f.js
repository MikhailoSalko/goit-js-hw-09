!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i,u=r("h6c0i"),f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,s=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,m=v||p||Function("return this")(),y=Object.prototype.toString,b=Math.max,g=Math.min,h=function(){return m.Date.now()};function j(t){var n=void 0===t?"undefined":e(f)(t);return!!t&&("object"==n||"function"==n)}function O(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(f)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(j(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=j(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var o=l.test(t);return o||d.test(t)?s(t.slice(2),o?2:8):c.test(t)?NaN:+t}i=function(e,t,n){var o,r,i,u,f,a,c=0,l=!1,d=!1,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function p(e){return c=e,f=setTimeout(y,t),l?v(e):u}function m(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=i}function y(){var e=h();if(m(e))return T(e);f=setTimeout(y,function(e){var n=t-(e-a);return d?g(n,i-(e-c)):n}(e))}function T(e){return f=void 0,s&&o?v(e):(o=r=void 0,u)}function w(){var e=h(),n=m(e);if(o=arguments,r=this,a=e,n){if(void 0===f)return p(a);if(d)return f=setTimeout(y,t),v(a)}return void 0===f&&(f=setTimeout(y,t)),u}return t=O(t)||0,j(n)&&(l=!!n.leading,i=(d="maxWait"in n)?b(O(n.maxWait)||0,t):i,s="trailing"in n?!!n.trailing:s),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=r=f=void 0},w.flush=function(){return void 0===f?u:T(h())},w};var T=document.querySelector(".form"),w={};function x(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}T.addEventListener("submit",(function(e){e.preventDefault();for(var t=w.delay,n=w.step,o=w.amount,r=0;r<o;r++){x(r+1,t+=n).then((function(e){var t=e.position,n=e.delay;u.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;u.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}e.currentTarget.reset()})),T.addEventListener("input",e(i)((function(e){w[e.target.name]=Number(e.target.value)}),200))}();
//# sourceMappingURL=03-promises.c5011f9f.js.map
