(()=>{"use strict";({17:function(e,r){var t=this&&this.__values||function(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],a=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(r,"__esModule",{value:!0}),chrome.storage.sync.get("speed",(function(e){var r,a,n,o,l,i,c=e.speed,y=new Set;l=parseInt(c);var f=document.getElementsByTagName("video");try{for(var u=t(f),d=u.next();!d.done;d=u.next()){var s=d.value;y.add(s)}}catch(e){r={error:e}}finally{try{d&&!d.done&&(a=u.return)&&a.call(u)}finally{if(r)throw r.error}}if(l){try{for(var v=t(y),p=v.next();!p.done;p=v.next()){var b=p.value;b.playbackRate=l,i=b.playbackRate}}catch(e){n={error:e}}finally{try{p&&!p.done&&(o=v.return)&&o.call(v)}finally{if(n)throw n.error}}if(i){console.log("playbackRate>>>>>",i);var h={type:"updatePlaybackRate",payload:i.toString()};chrome.runtime.sendMessage(h),console.log("EXECUTOU O CURRENT SPEED")}}}))}})[17](0,{})})();