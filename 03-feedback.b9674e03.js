function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,p=function(){return l.Date.now()};function v(t,e,n){var o,r,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,i=r;return o=r=void 0,c=e,a=t.apply(i,n)}function O(t){return c=t,f=setTimeout(j,e),l?b(t):a}function h(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function j(){var t=p();if(h(t))return E(t);f=setTimeout(j,function(t){var n=e-(t-u);return s?g(n,i-(t-c)):n}(t))}function E(t){return f=void 0,v&&o?b(t):(o=r=void 0,a)}function S(){var t=p(),n=h(t);if(o=arguments,r=this,u=t,n){if(void 0===f)return O(u);if(s)return f=setTimeout(j,e),b(u)}return void 0===f&&(f=setTimeout(j,e)),a}return e=y(e)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},S.flush=function(){return void 0===f?a:E(p())},S}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):r.test(t)?NaN:+t}e=function(t,e,n){var o=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(t,e,{leading:o,maxWait:e,trailing:r})};const b=document.querySelector(".feedback-form"),O={};function h(t){O[t.target.name]=t.target.value;const e=JSON.stringify(O);localStorage.setItem("KEY_FORM",e)}b.addEventListener("input",t(e)(h,500)),b.addEventListener("submit",(function(t){t.preventDefault();const e=localStorage.getItem("KEY_FORM");try{const t=e?JSON.parse(e):{};console.log(t)}catch(t){console.log("parsing error")}localStorage.removeItem("feedback-form-state"),t.target.reset()})),console.log((function(){let t=localStorage.getItem("KEY_FORM");t&&(t=JSON.parse(t),Object.entries(t).forEach((([t,e])=>{h.elements[t].value=e})))}));
//# sourceMappingURL=03-feedback.b9674e03.js.map