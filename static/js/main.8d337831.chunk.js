(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(t,e,r){},120:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(74),i=r.n(o);r(92),r(95);function c(t){var e=t.words;return a.a.createElement("div",{className:"title",key:"exp"},e.map(function(t){return" &#x2764; "===t?a.a.createElement("span",{className:"heart",key:"heart"}," \u2764 "):[a.a.createElement("span",{key:"firstWord"},t[0]),a.a.createElement("span",{key:"secondWord"},t.substring(1))]}))}function u(){return a.a.createElement("div",{className:"header"},a.a.createElement(c,{words:["Amir"," &#x2764; ","Michal"]}))}var l=r(21),s=r(55),f=r(4),h=r(11),d=r(78),p=Object(d.a)({apiKey:"AIzaSyCX4S19JEGIJnf255mMBKf609TyjYb8fvk",authDomain:"amir-michal-homepage.firebaseapp.com",projectId:"amir-michal-homepage",storageBucket:"amir-michal-homepage.appspot.com",messagingSenderId:"668244217822",appId:"1:668244217822:web:3df6be5852f87331ab574f",measurementId:"G-QP2T9TXQW6"}),m=r(27),v=(r(97),r(99),r(79)),y=r.n(v),g=r(108),b=r.n(g),w=r(109),E=r.n(w),j=r(165),O=r(163);function x(t){var e=t.task,r=t.handleToggle,n=t.handleDelete,o=t.handleChange,i=function(t){t.preventDefault(),r(t.currentTarget.id,e)};return a.a.createElement("div",{id:e.id,key:"task",className:"todo"},a.a.createElement("span",{className:e.complete?"todo-content complete":"todo-content",id:e.id,contentEditable:"true",value:e.task,onBlur:o},e.task),a.a.createElement(j.a,{className:"todo-actions",key:"task-actions"},e.complete?a.a.createElement(O.a,{id:e.id,onClick:i},a.a.createElement(y.a,{className:"todo-btn check-btn"})):a.a.createElement(O.a,{"aria-label":"check",id:e.id,onClick:i},a.a.createElement(b.a,{className:"todo-btn check-btn"})),a.a.createElement(O.a,{id:e.id,onClick:function(t){t.preventDefault(),n(t.currentTarget.id)}},a.a.createElement(E.a,{className:"todo-btn delete-btn"}))))}r(115);var k=r(166),L=r(162),N=r(118);function T(t){var e=t.addTask,r=Object(n.useState)(""),o=Object(h.a)(r,2),i=o[0],c=o[1];return a.a.createElement("div",{className:"todo-form"},a.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e(i),c("")}},a.a.createElement(k.a,{theme:_},a.a.createElement(L.a,{autoComplete:"off",label:"Enter a new item",variant:"standard",color:"neutral",fullWidth:"true",value:i,onChange:function(t){c(t.currentTarget.value)}}))))}var _=Object(N.a)({status:{danger:"#e53e3e"},palette:{primary:{main:"#0971f1",darker:"#053e85"},neutral:{main:"#3A4750",contrastText:"#3A4750"}}}),S=r(167),C=r(168);function I(t){var e=t.todoList,r=t.handleToggle,n=t.handleDelete,o=t.addTask,i=t.handleChange;return a.a.createElement(S.a,{className:"list"},a.a.createElement(T,{addTask:o}),a.a.createElement(S.a,{direction:"column",divider:a.a.createElement(C.a,{orientation:"horizontal",flexItem:!0,className:"divider"}),spacing:2},e.map(function(t){return a.a.createElement(x,{task:t,handleToggle:r,handleDelete:n,handleChange:i})})))}function G(){G=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=u;var s={};function f(){}function h(){}function d(){}var p={};c(p,a,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(x([])));v&&v!==e&&r.call(v,a)&&(p=v);var y=d.prototype=f.prototype=Object.create(p);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function b(t,e){var n;this._invoke=function(a,o){function i(){return new e(function(n,i){!function n(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=d,c(y,"constructor",d),c(d,"constructor",h),h.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,o,function(){return this}),t.AsyncIterator=b,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=x,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var D="todo-list";function A(){var t=Object(n.useState)([]),e=Object(h.a)(t,2),r=e[0],o=e[1],i=Object(m.f)(p),c=Object(m.b)(i,D),u=r.length>0?r[r.length-1].id:0;function d(){return v.apply(this,arguments)}function v(){return(v=Object(f.a)(G().mark(function t(){var e,r,n,a;return G().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=Object(m.g)(c),r=[],t.next=4,Object(m.e)(e);case 4:t.sent.forEach(function(t){r.push(t.data())}),r.sort(function(t,e){return t.id-e.id}),u=r[r.length-1].id+1,n=r.filter(function(t){return!0===t.complete}),a=r.filter(function(t){return!1===t.complete}),o([].concat(Object(l.a)(a),Object(l.a)(n)));case 11:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(n.useEffect)(function(){d()},[]);var y=function(){var t=Object(f.a)(G().mark(function t(e,n){var a;return G().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(m.g)(c,Object(m.i)("id","==",Number(e))),t.next=3,Object(m.e)(a);case 3:t.sent.forEach(function(t){var e=Object(m.d)(i,D,t.id);Object(m.h)(e,{complete:!n.complete})}),r.map(function(t){return t.id===Number(e)?Object(s.a)({},t,{complete:!t.complete}):t}),d();case 7:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}(),g=function(){var t=Object(f.a)(G().mark(function t(e){var r;return G().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(m.g)(c,Object(m.i)("id","==",Number(e))),t.next=3,Object(m.e)(r);case 3:t.sent.forEach(function(t){var e=Object(m.d)(i,D,t.id);Object(m.c)(e),d()});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(f.a)(G().mark(function t(e){var n;return G().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r.sort(function(t,e){return t.id-e.id}),u=r[r.length-1].id+1,n={id:u,task:e,complete:!1},t.next=5,Object(m.a)(c,n);case 5:d();case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=Object(f.a)(G().mark(function t(e){var r,n,a;return G().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.target.id,n=e.target.textContent,a=Object(m.g)(c,Object(m.i)("id","==",Number(r))),t.next=5,Object(m.e)(a);case 5:t.sent.forEach(function(t){var e=Object(m.d)(i,D,t.id);Object(m.h)(e,{task:n})});case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement("div",{className:""},a.a.createElement(I,{todoList:r,handleToggle:y,handleDelete:g,addTask:b,handleChange:w}))}function P(){return a.a.createElement("div",{className:"App"},a.a.createElement(u,null),a.a.createElement(A,null))}i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(P,null)))},85:function(t,e,r){t.exports=r(120)},92:function(t,e,r){},95:function(t,e,r){},97:function(t,e,r){},99:function(t,e,r){}},[[85,2,1]]]);
//# sourceMappingURL=main.8d337831.chunk.js.map