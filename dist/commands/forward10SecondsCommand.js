(()=>{"use strict";({16:function(e,r){var t=this&&this.__values||function(e){var r="function"==typeof Symbol&&Symbol.iterator,t=r&&e[r],n=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(r,"__esModule",{value:!0}),function(){var e,r,n,a,o,i=new Set,l=document.getElementsByTagName("video"),u=function(e){return e.duration-10>e.currentTime};try{for(var c=t(l),f=c.next();!f.done;f=c.next()){var y=f.value;i.add(y)}}catch(r){e={error:r}}finally{try{f&&!f.done&&(r=c.return)&&r.call(c)}finally{if(e)throw e.error}}try{for(var d=t(i),v=d.next();!v.done;v=d.next()){var m=v.value;u(m)?m.currentTime+=10:m.currentTime=m.duration,o=m.playbackRate}}catch(e){n={error:e}}finally{try{v&&!v.done&&(a=d.return)&&a.call(d)}finally{if(n)throw n.error}}if(o){var s={type:"updatePlaybackRate",payload:o.toString()};chrome.runtime.sendMessage(s)}}()}})[16](0,{})})();