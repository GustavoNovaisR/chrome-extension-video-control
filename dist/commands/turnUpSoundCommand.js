(()=>{"use strict";({15:function(e,r){var t=this&&this.__values||function(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(r,"__esModule",{value:!0}),function(){var e,r,n,o,a,l,i=new Set,u=document.getElementsByTagName("video"),c=function(e){return.95>e.volume};try{for(var y=t(u),f=y.next();!f.done;f=y.next()){var d=f.value;i.add(d)}}catch(r){e={error:r}}finally{try{f&&!f.done&&(r=y.return)&&r.call(y)}finally{if(e)throw e.error}}try{for(var v=t(i),s=v.next();!s.done;s=v.next()){var m=s.value;c(m)?m.volume+=.05:m.volume=1,l=m.playbackRate}}catch(e){n={error:e}}finally{try{s&&!s.done&&(o=v.return)&&o.call(v)}finally{if(n)throw n.error}}if(l){var h={type:"updatePlaybackRate",payload:l.toString()};chrome.runtime.sendMessage(h),chrome.storage.sync.set(((a={}).speed=h.payload,a))}}()}})[15](0,{})})();