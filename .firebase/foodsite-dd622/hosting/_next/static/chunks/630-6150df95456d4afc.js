"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[630],{5137:function(t,e,n){n.d(e,{Z:function(){return r}});/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(3480).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},1976:function(t,e,n){n.d(e,{Z:function(){return r}});/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(3480).Z)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]])},3274:function(t,e,n){n.d(e,{Z:function(){return r}});/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(3480).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},9715:function(t,e,n){n.d(e,{Z:function(){return r}});/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(3480).Z)("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]])},4300:function(t,e,n){n.d(e,{Z:function(){return O}});var r=n(2265);function i(t){return"[object Object]"===Object.prototype.toString.call(t)||Array.isArray(t)}function o(t,e){let n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&JSON.stringify(Object.keys(t.breakpoints||{}))===JSON.stringify(Object.keys(e.breakpoints||{}))&&n.every(n=>{let r=t[n],u=e[n];return"function"==typeof r?`${r}`==`${u}`:i(r)&&i(u)?o(r,u):r===u})}function u(t){return t.concat().sort((t,e)=>t.name>e.name?1:-1).map(t=>t.options)}function c(t){return"number"==typeof t}function a(t){return"string"==typeof t}function l(t){return"boolean"==typeof t}function s(t){return"[object Object]"===Object.prototype.toString.call(t)}function f(t){return Math.abs(t)}function d(t){return Math.sign(t)}function p(t){return y(t).map(Number)}function m(t){return t[g(t)]}function g(t){return Math.max(0,t.length-1)}function h(t,e=0){return Array.from(Array(t),(t,n)=>e+n)}function y(t){return Object.keys(t)}function b(t,e){return void 0!==e.MouseEvent&&t instanceof e.MouseEvent}function v(){let t=[],e={add:function(n,r,i,o={passive:!0}){let u;return"addEventListener"in n?(n.addEventListener(r,i,o),u=()=>n.removeEventListener(r,i,o)):(n.addListener(i),u=()=>n.removeListener(i)),t.push(u),e},clear:function(){t=t.filter(t=>t())}};return e}function x(t=0,e=0){let n=f(t-e);function r(n){return n<t||n>e}return{length:n,max:e,min:t,constrain:function(n){return r(n)?n<t?t:e:n},reachedAny:r,reachedMax:function(t){return t>e},reachedMin:function(e){return e<t},removeOffset:function(t){return n?t-n*Math.ceil((t-e)/n):t}}}function w(t){let e=t;function n(t){return c(t)?t:t.get()}return{get:function(){return e},set:function(t){e=n(t)},add:function(t){e+=n(t)},subtract:function(t){e-=n(t)}}}function k(t,e){let n="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},r=e.style,i=!1;return{clear:function(){i||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(e){i||(r.transform=n(t.direction(e)))},toggleActive:function(t){i=!t}}}let S={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function E(t,e,n){let r,i,o,u,O;let D=t.ownerDocument,M=D.defaultView,L=function(t){function e(t,e){return function t(e,n){return[e,n].reduce((e,n)=>(y(n).forEach(r=>{let i=e[r],o=n[r],u=s(i)&&s(o);e[r]=u?t(i,o):o}),e),{})}(t,e||{})}return{mergeOptions:e,optionsAtMedia:function(n){let r=n.breakpoints||{},i=y(r).filter(e=>t.matchMedia(e).matches).map(t=>r[t]).reduce((t,n)=>e(t,n),{});return e(n,i)},optionsMediaQueries:function(e){return e.map(t=>y(t.breakpoints||{})).reduce((t,e)=>t.concat(e),[]).map(t.matchMedia)}}}(M),A=(O=[],{init:function(t,e){return(O=e.filter(({options:t})=>!1!==L.optionsAtMedia(t).active)).forEach(e=>e.init(t,L)),e.reduce((t,e)=>Object.assign(t,{[e.name]:e}),{})},destroy:function(){O=O.filter(t=>t.destroy())}}),I=v(),F=function(){let t;let e={},n={init:function(e){t=e},emit:function(r){return(e[r]||[]).forEach(e=>e(t,r)),n},off:function(t,r){return e[t]=(e[t]||[]).filter(t=>t!==r),n},on:function(t,r){return e[t]=(e[t]||[]).concat([r]),n}};return n}(),{mergeOptions:j,optionsAtMedia:N,optionsMediaQueries:P}=L,{on:T,off:z,emit:H}=F,V=!1,Z=j(S,E.globalOptions),C=j(Z),B=[];function R(e,n){!V&&(C=N(Z=j(Z,e)),B=n||B,function(){let{container:e,slides:n}=C;o=(a(e)?t.querySelector(e):e)||t.children[0];let r=a(n)?o.querySelectorAll(n):n;u=[].slice.call(r||o.children)}(),r=function e(n){let r=function(t,e,n,r,i,o,u){let s,S;let{align:E,axis:O,direction:D,startIndex:M,loop:L,duration:A,dragFree:I,dragThreshold:F,inViewThreshold:j,slidesToScroll:N,skipSnaps:P,containScroll:T,watchResize:z,watchSlides:H,watchDrag:V}=o,Z={measure:function(t){let{offsetTop:e,offsetLeft:n,offsetWidth:r,offsetHeight:i}=t;return{top:e,right:n+r,bottom:e+i,left:n,width:r,height:i}}},C=Z.measure(e),B=n.map(Z.measure),R=function(t,e){let n="rtl"===e,r="y"===t,i=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(t){let{height:e,width:n}=t;return r?e:n},direction:function(t){return t*i}}}(O,D),q=R.measureSize(C),$={measure:function(t){return t/100*q}},U=function(t,e){let n={start:function(){return 0},center:function(t){return(e-t)/2},end:function(t){return e-t}};return{measure:function(r,i){return a(t)?n[t](r):t(e,r,i)}}}(E,q),_=!L&&!!T,{slideSizes:J,slideSizesWithGaps:X,startGap:Q,endGap:Y}=function(t,e,n,r,i,o){let{measureSize:u,startEdge:c,endEdge:a}=t,l=n[0]&&i,s=function(){if(!l)return 0;let t=n[0];return f(e[c]-t[c])}(),d=l?parseFloat(o.getComputedStyle(m(r)).getPropertyValue(`margin-${a}`)):0,p=n.map(u),h=n.map((t,e,n)=>{let r=e===g(n);return e?r?p[e]+d:n[e+1][c]-t[c]:p[e]+s}).map(f);return{slideSizes:p,slideSizesWithGaps:h,startGap:s,endGap:d}}(R,C,B,n,L||!!T,i),G=function(t,e,n,r,i,o,u,a,l){let{startEdge:s,endEdge:d,direction:h}=t,y=c(n);return{groupSlides:function(t){return y?p(t).filter(t=>t%n==0).map(e=>t.slice(e,e+n)):t.length?p(t).reduce((n,c,l)=>{let p=m(n)||0,y=c===g(t),b=i[s]-o[p][s],v=i[s]-o[c][d],x=r||0!==p?0:h(u),w=f(v-(!r&&y?h(a):0)-(b+x));return l&&w>e+2&&n.push(c),y&&n.push(t.length),n},[]).map((e,n,r)=>{let i=Math.max(r[n-1]||0);return t.slice(i,e)}):[]}}}(R,q,N,L,C,B,Q,Y,0),{snaps:K,snapsAligned:W}=function(t,e,n,r,i){let{startEdge:o,endEdge:u}=t,{groupSlides:c}=i,a=c(r).map(t=>m(t)[u]-t[0][o]).map(f).map(e.measure),l=r.map(t=>n[o]-t[o]).map(t=>-f(t)),s=c(l).map(t=>t[0]).map((t,e)=>t+a[e]);return{snaps:l,snapsAligned:s}}(R,U,C,B,G),tt=-m(K)+m(X),{snapsContained:te,scrollContainLimit:tn}=function(t,e,n,r,i){let o=x(-e+t,0),u=n.map((t,e)=>{let{min:r,max:i}=o,u=o.constrain(t),c=e===g(n);return e?c||1>f(r-u)?r:1>f(i-u)?i:u:i}).map(t=>parseFloat(t.toFixed(3))),c=function(){let t=u[0],e=m(u);return x(u.lastIndexOf(t),u.indexOf(e)+1)}();return{snapsContained:function(){if(e<=t+2)return[o.max];if("keepSnaps"===r)return u;let{min:n,max:i}=c;return u.slice(n,i)}(),scrollContainLimit:c}}(q,tt,W,T,0),tr=_?te:W,{limit:ti}=function(t,e,n){let r=e[0];return{limit:x(n?r-t:m(e),r)}}(tt,tr,L),to=function t(e,n,r){let{constrain:i}=x(0,e),o=e+1,u=c(n);function c(t){return r?f((o+t)%o):i(t)}function a(){return t(e,u,r)}let l={get:function(){return u},set:function(t){return u=c(t),l},add:function(t){return a().set(u+t)},clone:a};return l}(g(tr),M,L),tu=to.clone(),tc=p(n),ta=({dragHandler:t,scrollBody:e,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(t.pointerDown()),e.seek()},tl=({scrollBody:t,translate:e,location:n,offsetLocation:r,scrollLooper:i,slideLooper:o,dragHandler:u,animation:c,eventHandler:a,options:{loop:l}},s)=>{let f=t.velocity(),d=t.settled();d&&!u.pointerDown()&&(c.stop(),a.emit("settle")),d||a.emit("scroll"),r.set(n.get()-f+f*s),l&&(i.loop(t.direction()),o.loop()),e.to(r.get())},ts=function(t,e,n,r){let i=v(),o=1e3/60,u=null,c=0,a=0;function l(t){if(!a)return;u||(u=t);let i=t-u;for(u=t,c+=i;c>=o;)n(),c-=o;r(f(c/o)),a&&e.requestAnimationFrame(l)}function s(){e.cancelAnimationFrame(a),u=null,c=0,a=0}return{init:function(){i.add(t,"visibilitychange",()=>{t.hidden&&(u=null,c=0)})},destroy:function(){s(),i.clear()},start:function(){a||(a=e.requestAnimationFrame(l))},stop:s,update:n,render:r}}(r,i,()=>ta(tS),t=>tl(tS,t)),tf=tr[to.get()],td=w(tf),tp=w(tf),tm=w(tf),tg=function(t,e,n,r,i){let o=0,u=0,c=r,a=.68,l=t.get(),s=0;function p(t){return c=t,g}function m(t){return a=t,g}let g={direction:function(){return u},duration:function(){return c},velocity:function(){return o},seek:function(){let e=n.get()-t.get(),r=0;return c?(o+=e/c,o*=a,l+=o,t.add(o),r=l-s):(o=0,t.set(n),r=e),u=d(r),s=l,g},settled:function(){return .001>f(n.get()-e.get())},useBaseFriction:function(){return m(.68)},useBaseDuration:function(){return p(r)},useFriction:m,useDuration:p};return g}(td,tp,tm,A,0),th=function(t,e,n,r,i){let{reachedAny:o,removeOffset:u,constrain:c}=r;function a(t){return t.concat().sort((t,e)=>f(t)-f(e))[0]}function l(e,r){let i=[e,e+n,e-n];if(!t)return i[0];if(!r)return a(i);let o=i.filter(t=>d(t)===r);return o.length?a(o):m(i)-n}return{byDistance:function(n,r){let a=i.get()+n,{index:s,distance:d}=function(n){let r=t?u(n):c(n),{index:i}=e.map((t,e)=>({diff:l(t-r,0),index:e})).sort((t,e)=>f(t.diff)-f(e.diff))[0];return{index:i,distance:r}}(a),p=!t&&o(a);if(!r||p)return{index:s,distance:n};let m=n+l(e[s]-d,0);return{index:s,distance:m}},byIndex:function(t,n){let r=l(e[t]-i.get(),n);return{index:t,distance:r}},shortcut:l}}(L,tr,tt,ti,tm),ty=function(t,e,n,r,i,o,u){function c(i){let c=i.distance,a=i.index!==e.get();o.add(c),c&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),a&&(n.set(e.get()),e.set(i.index),u.emit("select"))}return{distance:function(t,e){c(i.byDistance(t,e))},index:function(t,n){let r=e.clone().set(t);c(i.byIndex(r.get(),n))}}}(ts,to,tu,tg,th,tm,u),tb=function(t){let{max:e,length:n}=t;return{get:function(t){return n?-((t-e)/n):0}}}(ti),tv=v(),tx=function(t,e,n,r){let i;let o={},u=null,c=null,a=!1;return{init:function(){i=new IntersectionObserver(t=>{a||(t.forEach(t=>{o[e.indexOf(t.target)]=t}),u=null,c=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(t=>i.observe(t))},destroy:function(){i&&i.disconnect(),a=!0},get:function(t=!0){if(t&&u)return u;if(!t&&c)return c;let e=y(o).reduce((e,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(t&&i||!t&&!i)&&e.push(r),e},[]);return t&&(u=e),t||(c=e),e}}}(e,n,u,j),{slideRegistry:tw}=function(t,e,n,r,i,o){let{groupSlides:u}=i,{min:c,max:a}=r;return{slideRegistry:function(){let r=u(o);return 1===n.length?[o]:t&&"keepSnaps"!==e?r.slice(c,a).map((t,e,n)=>{let r=e===g(n);return e?r?h(g(o)-m(n)[0]+1,m(n)[0]):t:h(m(n[0])+1)}):r}()}}(_,T,tr,tn,G,tc),tk=function(t,e,n,r,i,o){let u=0;function a(t){"Tab"===t.code&&(u=new Date().getTime())}function l(a){o.add(a,"focus",()=>{if(new Date().getTime()-u>10)return;t.scrollLeft=0;let o=e.indexOf(a),l=n.findIndex(t=>t.includes(o));c(l)&&(i.useDuration(0),r.index(l,0))},{passive:!0,capture:!0})}return{init:function(){o.add(document,"keydown",a,!1),e.forEach(l)}}}(t,n,tw,ty,tg,tv),tS={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:C,slideRects:B,animation:ts,axis:R,dragHandler:function(t,e,n,r,i,o,u,c,a,s,p,m,g,h,y,w,k,S,E){let{cross:O,direction:D}=t,M=["INPUT","SELECT","TEXTAREA"],L={passive:!1},A=v(),I=v(),F=x(50,225).constrain(h.measure(20)),j={mouse:300,touch:400},N={mouse:500,touch:600},P=y?43:25,T=!1,z=0,H=0,V=!1,Z=!1,C=!1,B=!1;function R(t){let e=o.readPoint(t),n=o.readPoint(t,O),r=f(e-z),u=f(n-H);if(!Z&&!B&&(!t.cancelable||!(Z=r>u)))return q(t);let a=o.pointerMove(t);r>w&&(C=!0),s.useFriction(.3).useDuration(1),c.start(),i.add(D(a)),t.preventDefault()}function q(t){let e=p.byDistance(0,!1).index!==m.get(),n=o.pointerUp(t)*(y?N:j)[B?"mouse":"touch"],r=function(t,e){let n=m.add(-1*d(t)),r=p.byDistance(t,!y).distance;return y||f(t)<F?r:k&&e?.5*r:p.byIndex(n.get(),0).distance}(D(n),e),i=function(t,e){var n,r;if(0===t||0===e||f(t)<=f(e))return 0;let i=(n=f(t),r=f(e),f(n-r));return f(i/t)}(n,r);Z=!1,V=!1,I.clear(),s.useDuration(P-10*i).useFriction(.68+i/50),a.distance(r,!y),B=!1,g.emit("pointerUp")}function $(t){C&&(t.stopPropagation(),t.preventDefault(),C=!1)}return{init:function(t){E&&A.add(e,"dragstart",t=>t.preventDefault(),L).add(e,"touchmove",()=>void 0,L).add(e,"touchend",()=>void 0).add(e,"touchstart",c).add(e,"mousedown",c).add(e,"touchcancel",q).add(e,"contextmenu",q).add(e,"click",$,!0);function c(c){(l(E)||E(t,c))&&function(t){let c=b(t,r);B=c,C=y&&c&&!t.buttons&&T,T=f(i.get()-u.get())>=2,c&&0!==t.button||function(t){let e=t.nodeName||"";return M.includes(e)}(t.target)||(V=!0,o.pointerDown(t),s.useFriction(0).useDuration(0),i.set(u),function(){let t=B?n:e;I.add(t,"touchmove",R,L).add(t,"touchend",q).add(t,"mousemove",R,L).add(t,"mouseup",q)}(),z=o.readPoint(t),H=o.readPoint(t,O),g.emit("pointerDown"))}(c)}},pointerDown:function(){return V},destroy:function(){A.clear(),I.clear()}}}(R,t,r,i,tm,function(t,e){let n,r;function i(t){return t.timeStamp}function o(n,r){let i=r||t.scroll,o=`client${"x"===i?"X":"Y"}`;return(b(n,e)?n:n.touches[0])[o]}return{pointerDown:function(t){return n=t,r=t,o(t)},pointerMove:function(t){let e=o(t)-o(r),u=i(t)-i(n)>170;return r=t,u&&(n=t),e},pointerUp:function(t){if(!n||!r)return 0;let e=o(r)-o(n),u=i(t)-i(n),c=i(t)-i(r)>170,a=e/u;return u&&!c&&f(a)>.1?a:0},readPoint:o}}(R,i),td,ts,ty,tg,th,to,u,$,I,F,P,0,V),eventStore:tv,percentOfView:$,index:to,indexPrevious:tu,limit:ti,location:td,offsetLocation:tp,options:o,resizeHandler:function(t,e,n,r,i,o,u){let c,a;let s=[],d=!1;function p(t){return i.measureSize(u.measure(t))}return{init:function(i){o&&(a=p(t),s=r.map(p),c=new ResizeObserver(u=>{!d&&(l(o)||o(i,u))&&function(o){for(let u of o){let o=u.target===t,c=r.indexOf(u.target),l=o?a:s[c];if(f(p(o?t:r[c])-l)>=.5){n.requestAnimationFrame(()=>{i.reInit(),e.emit("resize")});break}}}(u)}),[t].concat(r).forEach(t=>c.observe(t)))},destroy:function(){c&&c.disconnect(),d=!0}}}(e,u,i,n,R,z,Z),scrollBody:tg,scrollBounds:function(t,e,n,r,i){let o=i.measure(10),u=i.measure(50),c=x(.1,.99),a=!1;return{constrain:function(i){if(!(!a&&t.reachedAny(n.get())&&t.reachedAny(e.get())))return;let l=t.reachedMin(e.get())?"min":"max",s=f(t[l]-e.get()),d=n.get()-e.get(),p=c.constrain(s/u);n.subtract(d*p),!i&&f(d)<o&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){a=!t}}}(ti,tp,tm,tg,$),scrollLooper:function(t,e,n,r){let{reachedMin:i,reachedMax:o}=x(e.min+.1,e.max+.1);return{loop:function(e){if(!(1===e?o(n.get()):-1===e&&i(n.get())))return;let u=-1*e*t;r.forEach(t=>t.add(u))}}}(tt,ti,tp,[td,tp,tm]),scrollProgress:tb,scrollSnapList:tr.map(tb.get),scrollSnaps:tr,scrollTarget:th,scrollTo:ty,slideLooper:function(t,e,n,r,i,o,u,c,a){let l=p(i),s=m(d(p(i).reverse(),u[0]),n,!1).concat(m(d(l,e-u[0]-1),-n,!0));function f(t,e){return t.reduce((t,e)=>t-i[e],e)}function d(t,e){return t.reduce((t,n)=>f(t,e)>0?t.concat([n]):t,[])}function m(i,u,l){let s=o.map((t,n)=>({start:t-r[n]+.5+u,end:t+e-.5+u}));return i.map(e=>{let r=l?0:-n,i=l?n:0,o=s[e][l?"end":"start"];return{index:e,loopPoint:o,slideLocation:w(-1),translate:k(t,a[e]),target:()=>c.get()>o?r:i}})}return{canLoop:function(){return s.every(({index:t})=>.1>=f(l.filter(e=>e!==t),e))},clear:function(){s.forEach(t=>t.translate.clear())},loop:function(){s.forEach(t=>{let{target:e,translate:n,slideLocation:r}=t,i=e();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:s}}(R,q,tt,J,X,K,tr,tp,n),slideFocus:tk,slidesHandler:(S=!1,{init:function(t){H&&(s=new MutationObserver(e=>{!S&&(l(H)||H(t,e))&&function(e){for(let n of e)if("childList"===n.type){t.reInit(),u.emit("slidesChanged");break}}(e)})).observe(e,{childList:!0})},destroy:function(){s&&s.disconnect(),S=!0}}),slidesInView:tx,slideIndexes:tc,slideRegistry:tw,slidesToScroll:G,target:tm,translate:k(R,e)};return tS}(t,o,u,D,M,n,F);return n.loop&&!r.slideLooper.canLoop()?e(Object.assign({},n,{loop:!1})):r}(C),P([Z,...B.map(({options:t})=>t)]).forEach(t=>I.add(t,"change",q)),C.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(),r.eventHandler.init(J),r.resizeHandler.init(J),r.slidesHandler.init(J),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&u.length&&r.dragHandler.init(J),i=A.init(J,B)))}function q(t,e){let n=_();$(),R(j({startIndex:n},t),e),F.emit("reInit")}function $(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),A.destroy(),I.clear()}function U(t,e,n){C.active&&!V&&(r.scrollBody.useBaseFriction().useDuration(!0===e?0:C.duration),r.scrollTo.index(t,n||0))}function _(){return r.index.get()}let J={canScrollNext:function(){return r.index.add(1).get()!==_()},canScrollPrev:function(){return r.index.add(-1).get()!==_()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){V||(V=!0,I.clear(),$(),F.emit("destroy"))},off:z,on:T,emit:H,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:q,rootNode:function(){return t},scrollNext:function(t){U(r.index.add(1).get(),t,-1)},scrollPrev:function(t){U(r.index.add(-1).get(),t,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:U,selectedScrollSnap:_,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return R(e,n),setTimeout(()=>F.emit("init"),0),J}function O(t={},e=[]){let n=(0,r.useRef)(t),i=(0,r.useRef)(e),[c,a]=(0,r.useState)(),[l,s]=(0,r.useState)(),f=(0,r.useCallback)(()=>{c&&c.reInit(n.current,i.current)},[c]);return(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&l){E.globalOptions=O.globalOptions;let t=E(l,n.current,i.current);return a(t),()=>t.destroy()}a(void 0)},[l,a]),(0,r.useEffect)(()=>{o(n.current,t)||(n.current=t,f())},[t,f]),(0,r.useEffect)(()=>{!function(t,e){if(t.length!==e.length)return!1;let n=u(t),r=u(e);return n.every((t,e)=>o(t,r[e]))}(i.current,e)&&(i.current=e,f())},[e,f]),[s,c]}E.globalOptions=void 0,O.globalOptions=void 0}}]);