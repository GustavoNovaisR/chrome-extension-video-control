(()=>{"use strict";({18:function(e,t){var r=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],a=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};Object.defineProperty(t,"__esModule",{value:!0}),function(){var e,t,a,n,o,l,i=new Set,c=document.getElementsByTagName("video"),y=function(e){return 9>e.playbackRate};try{for(var u=r(c),f=u.next();!f.done;f=u.next()){var d=f.value;i.add(d)}}catch(t){e={error:t}}finally{try{f&&!f.done&&(t=u.return)&&t.call(u)}finally{if(e)throw e.error}}try{for(var s=r(i),v=s.next();!v.done;v=s.next()){var p=v.value;y(p)?p.playbackRate+=1:p.playbackRate=10,l=p.playbackRate}}catch(e){a={error:e}}finally{try{v&&!v.done&&(n=s.return)&&n.call(s)}finally{if(a)throw a.error}}if(l){var b={type:"updatePlaybackRate",payload:l.toString()};chrome.runtime.sendMessage(b),chrome.storage.sync.set(((o={}).speed=b.payload,o))}}()}})[18](0,{})})();