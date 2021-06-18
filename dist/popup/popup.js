(()=>{"use strict";var e=[,,(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.commandsPathList=n.constants=void 0;var r={back5Seconds:"commands/back5SecondsCommand.js",forward5Seconds:"commands/forward5SecondsCommand.js",playPause:"commands/playPauseCommand.js",lessSpeed:"commands/lessSpeedCommand.js",moreSpeed:"commands/moreSpeedCommand.js",turnUpSound:"commands/turnUpSoundCommand.js",turnDownSound:"commands/turnDownSoundCommand.js",decrease1Speed:"commands/decrease1SpeedCommand.js",add1Speed:"commands/add1SpeedCommand.js",back10Seconds:"commands/back10SecondsCommand.js",forward10Seconds:"commands/forward10SecondsCommand.js",currentSpeed:"commands/currentSpeedCommand.js",retriveIframes:"commands/retriveIframesCommand.js"};n.commandsPathList=r;var t={speedStorageName:"speed",initialSpeed:"1",commands:Object.keys(r),hotkeys:{j:"back5Seconds",k:"playPause",l:"forward5Seconds",",":"lessSpeed",".":"moreSpeed",arrowleft:"back5Seconds",arrowright:"forward5Seconds",arrowup:"turnUpSound",arrowdown:"turnDownSound"}};n.constants=t},function(e,n,r){var t,o,a=this&&this.__awaiter||function(e,n,r,t){return new(r||(r=Promise))((function(o,a){function s(e){try{i(t.next(e))}catch(e){a(e)}}function c(e){try{i(t.throw(e))}catch(e){a(e)}}function i(e){var n;e.done?o(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,c)}i((t=t.apply(e,n||[])).next())}))},s=this&&this.__generator||function(e,n){var r,t,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;switch(t=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,t=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=n.call(e,s)}catch(e){a=[6,e],t=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},c=this&&this.__values||function(e){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&e[n],t=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},i=this&&this.__read||function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var t,o,a=r.call(e),s=[];try{for(;(void 0===n||n-- >0)&&!(t=a.next()).done;)s.push(t.value)}catch(e){o={error:e}}finally{try{t&&!t.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return s};Object.defineProperty(n,"__esModule",{value:!0}),r(4),r(5),r(6),r(7),r(8);var d=r(2);console.log("Iniciando o Popup");var u=[];document.querySelectorAll("button").forEach((function(e){return u.push(e)})),chrome.storage.sync.get(d.constants.speedStorageName,(function(e){return f(e.speed)}));try{for(var l=c(u),p=l.next();!p.done;p=l.next())p.value.addEventListener("click",m,!1)}catch(e){t={error:e}}finally{try{p&&!p.done&&(o=l.return)&&o.call(l)}finally{if(t)throw t.error}}function m(e){return a(this,void 0,void 0,(function(){var n,r,t,o,a;return s(this,(function(s){switch(s.label){case 0:return n={active:!0,currentWindow:!0},[4,chrome.tabs.query(n)];case 1:return r=i.apply(void 0,[s.sent(),1]),t=r[0],o=e.target,a={type:"command",payload:o.id,tabId:t.id},chrome.runtime.sendMessage(a),[2]}}))}))}function f(e){var n;(n="currentSpeed",i(u.filter((function(e){return d.constants.commands.includes(n)&&e.id===n})),1)[0]).innerHTML="↺ "+e}document.onkeydown=function(e){return a(void 0,void 0,void 0,(function(){var n,r,t,o,a;return s(this,(function(s){switch(s.label){case 0:return n=e.key.toLowerCase(),Object.keys(d.constants.hotkeys).includes(n)?(r={active:!0,currentWindow:!0},[4,chrome.tabs.query(r)]):[3,2];case 1:t=i.apply(void 0,[s.sent(),1]),o=t[0],a={type:"keypress",payload:n,tabId:o.id},chrome.runtime.sendMessage(a),s.label=2;case 2:return[2]}}))}))},chrome.runtime.onMessage.addListener((function(e,n,r){console.log("Message retrive Popup",e),"updatePlaybackRate"===e.type&&chrome.storage.sync.get(d.constants.speedStorageName,(function(e){return f(e.speed)})),r("ok")}))},(e,n,r)=>{r.r(n)},(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t=r.p+"popup/images/128.png"},(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t=r.p+"popup/images/48.png"},(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t=r.p+"popup/images/32.png"},(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t=r.p+"popup/images/16.png"}],n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,r),a.exports}r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),r(3)})();