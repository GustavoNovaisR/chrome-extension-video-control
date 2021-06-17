(()=>{"use strict";var e=[,,(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.commandsPathList=n.constants=void 0;var r={back5Seconds:"commands/back5SecondsCommand.js",forward5Seconds:"commands/forward5SecondsCommand.js",playPause:"commands/playPauseCommand.js",lessSpeed:"commands/lessSpeedCommand.js",moreSpeed:"commands/moreSpeedCommand.js",turnUpSound:"commands/turnUpSoundCommand.js",turnDownSound:"commands/turnDownSoundCommand.js",decrease1Speed:"commands/decrease1SpeedCommand.js",add1Speed:"commands/add1SpeedCommand.js",back10Seconds:"commands/back10SecondsCommand.js",forward10Seconds:"commands/forward10SecondsCommand.js",currentSpeed:"commands/currentSpeedCommand.js",retriveIframes:"commands/retriveIframesCommand.js"};n.commandsPathList=r;var o={speedStorageName:"speed",initialSpeed:"1",commands:Object.keys(r),hotkeys:{j:"back5Seconds",k:"playPause",l:"forward5Seconds",",":"lessSpeed",".":"moreSpeed",arrowleft:"back5Seconds",arrowright:"forward5Seconds",arrowup:"turnUpSound",arrowdown:"turnDownSound"}};n.constants=o},function(e,n,r){var o,t,a=this&&this.__awaiter||function(e,n,r,o){return new(r||(r=Promise))((function(t,a){function s(e){try{d(o.next(e))}catch(e){a(e)}}function c(e){try{d(o.throw(e))}catch(e){a(e)}}function d(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,c)}d((o=o.apply(e,n||[])).next())}))},s=this&&this.__generator||function(e,n){var r,o,t,a,s={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,o&&(t=2&a[0]?o.return:a[0]?o.throw||((t=o.return)&&t.call(o),0):o.next)&&!(t=t.call(o,a[1])).done)return t;switch(o=0,t&&(a=[2&a[0],t.value]),a[0]){case 0:case 1:t=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((t=(t=s.trys).length>0&&t[t.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!t||a[1]>t[0]&&a[1]<t[3])){s.label=a[1];break}if(6===a[0]&&s.label<t[1]){s.label=t[1],t=a;break}if(t&&s.label<t[2]){s.label=t[2],s.ops.push(a);break}t[2]&&s.ops.pop(),s.trys.pop();continue}a=n.call(e,s)}catch(e){a=[6,e],o=0}finally{r=t=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},c=this&&this.__values||function(e){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&e[n],o=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},d=this&&this.__read||function(e,n){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var o,t,a=r.call(e),s=[];try{for(;(void 0===n||n-- >0)&&!(o=a.next()).done;)s.push(o.value)}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}return s};Object.defineProperty(n,"__esModule",{value:!0}),r(4);var i=r(2);console.log("Iniciando o Popup");var u=[];document.querySelectorAll("button").forEach((function(e){u.push(e)})),chrome.storage.sync.get(i.constants.speedStorageName,(function(e){var n=e.speed;p("currentSpeed").innerHTML="↺ "+n}));try{for(var l=c(u),m=l.next();!m.done;m=l.next())m.value.addEventListener("click",f,!1)}catch(e){o={error:e}}finally{try{m&&!m.done&&(t=l.return)&&t.call(l)}finally{if(o)throw o.error}}function f(e){return a(this,void 0,void 0,(function(){var n,r,o,t;return s(this,(function(a){switch(a.label){case 0:return n={active:!0,currentWindow:!0},[4,chrome.tabs.query(n)];case 1:return r=d.apply(void 0,[a.sent(),1]),o=r[0],t=e.target,chrome.runtime.sendMessage({type:"command",payload:t.id,tabId:o.id}),[2]}}))}))}function p(e){return d(u.filter((function(n){return i.constants.commands.includes(e)&&n.id===e})),1)[0]}document.onkeydown=function(e){return a(void 0,void 0,void 0,(function(){var n,r,o,t;return s(this,(function(a){switch(a.label){case 0:return n=e.key.toLowerCase(),Object.keys(i.constants.hotkeys).includes(n)?(r={active:!0,currentWindow:!0},[4,chrome.tabs.query(r)]):[3,2];case 1:o=d.apply(void 0,[a.sent(),1]),t=o[0],chrome.runtime.sendMessage({type:"keypress",payload:n,tabId:t.id}),a.label=2;case 2:return[2]}}))}))},chrome.runtime.onMessage.addListener((function(e,n,r){console.log("CHEGOU MENSAGEM POPUP",e),"updatePlaybackRate"===e.type&&(p("currentSpeed").innerHTML="↺ "+e.payload,chrome.storage.sync.get(i.constants.speedStorageName,(function(e){var n=e.speed;console.log("speed :>> ",n)}))),r("ok")}))},(e,n,r)=>{r.r(n)}],n={};function r(o){var t=n[o];if(void 0!==t)return t.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(3)})();