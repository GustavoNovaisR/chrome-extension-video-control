(()=>{"use strict";({8:function(e,r){var t=this&&this.__values||function(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(r,"__esModule",{value:!0}),function(){var e,r,n,a,o,l=new Set,i=document.getElementsByTagName("video");try{for(var u=t(i),y=u.next();!y.done;y=u.next()){var f=y.value;l.add(f)}}catch(r){e={error:r}}finally{try{y&&!y.done&&(r=u.return)&&r.call(u)}finally{if(e)throw e.error}}try{for(var c=t(l),d=c.next();!d.done;d=c.next()){var v=d.value;v.paused?v.play():v.pause(),o=v.playbackRate}}catch(e){n={error:e}}finally{try{d&&!d.done&&(a=c.return)&&a.call(c)}finally{if(n)throw n.error}}if(o){var s={type:"updatePlaybackRate",payload:o.toString()};chrome.runtime.sendMessage(s)}}()}})[8](0,{})})();