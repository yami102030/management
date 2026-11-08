(()=>{var R4=Object.create;var oc=Object.defineProperty;var F4=Object.getOwnPropertyDescriptor;var $4=Object.getOwnPropertyNames;var I4=Object.getPrototypeOf,P4=Object.prototype.hasOwnProperty;var fr=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var tp=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of $4(a))!P4.call(t,i)&&i!==r&&oc(t,i,{get:()=>a[i],enumerable:!(e=F4(a,i))||e.enumerable});return t};var Rr=(t,a,r)=>(r=t!=null?R4(I4(t)):{},tp(a||!t||!t.__esModule?oc(r,"default",{value:t,enumerable:!0}):r,t));var kc=fr(_=>{"use strict";var R2=Symbol.for("react.transitional.element"),ap=Symbol.for("react.portal"),rp=Symbol.for("react.fragment"),ep=Symbol.for("react.strict_mode"),ip=Symbol.for("react.profiler"),np=Symbol.for("react.consumer"),op=Symbol.for("react.context"),lp=Symbol.for("react.forward_ref"),dp=Symbol.for("react.suspense"),cp=Symbol.for("react.memo"),uc=Symbol.for("react.lazy"),hp=Symbol.for("react.activity"),lc=Symbol.iterator;function up(t){return t===null||typeof t!="object"?null:(t=lc&&t[lc]||t["@@iterator"],typeof t=="function"?t:null)}var sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gc=Object.assign,pc={};function we(t,a,r){this.props=t,this.context=a,this.refs=pc,this.updater=r||sc}we.prototype.isReactComponent={};we.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};we.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function fc(){}fc.prototype=we.prototype;function F2(t,a,r){this.props=t,this.context=a,this.refs=pc,this.updater=r||sc}var $2=F2.prototype=new fc;$2.constructor=F2;gc($2,we.prototype);$2.isPureReactComponent=!0;var dc=Array.isArray;function J2(){}var nt={H:null,A:null,T:null,S:null},vc=Object.prototype.hasOwnProperty;function I2(t,a,r){var e=r.ref;return{$$typeof:R2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function sp(t,a){return I2(t.type,a,t.props)}function P2(t){return typeof t=="object"&&t!==null&&t.$$typeof===R2}function gp(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var cc=/\/+/g;function K2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?gp(""+t.key):a.toString(36)}function pp(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(J2,J2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ye(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case R2:case ap:o=!0;break;case uc:return o=t._init,ye(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+K2(t,0):e,dc(i)?(r="",o!=null&&(r=o.replace(cc,"$&/")+"/"),ye(i,a,r,"",function(s){return s})):i!=null&&(P2(i)&&(i=sp(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(cc,"$&/")+"/")+o)),a.push(i)),1;o=0;var d=e===""?".":e+":";if(dc(t))for(var h=0;h<t.length;h++)e=t[h],n=d+K2(e,h),o+=ye(e,a,r,n,i);else if(h=up(t),typeof h=="function")for(t=h.call(t),h=0;!(e=t.next()).done;)e=e.value,n=d+K2(e,h++),o+=ye(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return ye(pp(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function Gn(t,a,r){if(t==null)return t;var e=[],i=0;return ye(t,e,"","",function(n){return a.call(r,n,i++)}),e}function fp(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var hc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vp={map:Gn,forEach:function(t,a,r){Gn(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return Gn(t,function(){a++}),a},toArray:function(t){return Gn(t,function(a){return a})||[]},only:function(t){if(!P2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_.Activity=hp;_.Children=vp;_.Component=we;_.Fragment=rp;_.Profiler=ip;_.PureComponent=F2;_.StrictMode=ep;_.Suspense=dp;_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=nt;_.__COMPILER_RUNTIME={__proto__:null,c:function(t){return nt.H.useMemoCache(t)}};_.cache=function(t){return function(){return t.apply(null,arguments)}};_.cacheSignal=function(){return null};_.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=gc({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!vc.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),d=0;d<n;d++)o[d]=arguments[d+2];e.children=o}return I2(t.type,i,e)};_.createContext=function(t){return t={$$typeof:op,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:np,_context:t},t};_.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)vc.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var d=Array(o),h=0;h<o;h++)d[h]=arguments[h+2];i.children=d}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return I2(t,n,i)};_.createRef=function(){return{current:null}};_.forwardRef=function(t){return{$$typeof:lp,render:t}};_.isValidElement=P2;_.lazy=function(t){return{$$typeof:uc,_payload:{_status:-1,_result:t},_init:fp}};_.memo=function(t,a){return{$$typeof:cp,type:t,compare:a===void 0?null:a}};_.startTransition=function(t){var a=nt.T,r={};nt.T=r;try{var e=t(),i=nt.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(J2,hc)}catch(n){hc(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),nt.T=a}};_.unstable_useCacheRefresh=function(){return nt.H.useCacheRefresh()};_.use=function(t){return nt.H.use(t)};_.useActionState=function(t,a,r){return nt.H.useActionState(t,a,r)};_.useCallback=function(t,a){return nt.H.useCallback(t,a)};_.useContext=function(t){return nt.H.useContext(t)};_.useDebugValue=function(){};_.useDeferredValue=function(t,a){return nt.H.useDeferredValue(t,a)};_.useEffect=function(t,a){return nt.H.useEffect(t,a)};_.useEffectEvent=function(t){return nt.H.useEffectEvent(t)};_.useId=function(){return nt.H.useId()};_.useImperativeHandle=function(t,a,r){return nt.H.useImperativeHandle(t,a,r)};_.useInsertionEffect=function(t,a){return nt.H.useInsertionEffect(t,a)};_.useLayoutEffect=function(t,a){return nt.H.useLayoutEffect(t,a)};_.useMemo=function(t,a){return nt.H.useMemo(t,a)};_.useOptimistic=function(t,a){return nt.H.useOptimistic(t,a)};_.useReducer=function(t,a,r){return nt.H.useReducer(t,a,r)};_.useRef=function(t){return nt.H.useRef(t)};_.useState=function(t){return nt.H.useState(t)};_.useSyncExternalStore=function(t,a,r){return nt.H.useSyncExternalStore(t,a,r)};_.useTransition=function(){return nt.H.useTransition()};_.version="19.2.8"});var Qa=fr((mv,xc)=>{"use strict";xc.exports=kc()});var Wc=fr(ht=>{"use strict";function el(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<Yn(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Ta(t){return t.length===0?null:t[0]}function Qn(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,d=t[o],h=o+1,s=t[h];if(0>Yn(d,r))h<i&&0>Yn(s,d)?(t[e]=s,t[h]=r,e=h):(t[e]=d,t[o]=r,e=o);else if(h<i&&0>Yn(s,r))t[e]=s,t[h]=r,e=h;else break t}}return a}function Yn(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}ht.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Lc=performance,ht.unstable_now=function(){return Lc.now()}):(tl=Date,Mc=tl.now(),ht.unstable_now=function(){return tl.now()-Mc});var Lc,tl,Mc,Ka=[],vr=[],kp=1,va=null,Ut=3,il=!1,ji=!1,Wi=!1,nl=!1,wc=typeof setTimeout=="function"?setTimeout:null,Cc=typeof clearTimeout=="function"?clearTimeout:null,mc=typeof setImmediate<"u"?setImmediate:null;function Xn(t){for(var a=Ta(vr);a!==null;){if(a.callback===null)Qn(vr);else if(a.startTime<=t)Qn(vr),a.sortIndex=a.expirationTime,el(Ka,a);else break;a=Ta(vr)}}function ol(t){if(Wi=!1,Xn(t),!ji)if(Ta(Ka)!==null)ji=!0,be||(be=!0,Ce());else{var a=Ta(vr);a!==null&&ll(ol,a.startTime-t)}}var be=!1,Hi=-1,bc=5,Bc=-1;function jc(){return nl?!0:!(ht.unstable_now()-Bc<bc)}function al(){if(nl=!1,be){var t=ht.unstable_now();Bc=t;var a=!0;try{t:{ji=!1,Wi&&(Wi=!1,Cc(Hi),Hi=-1),il=!0;var r=Ut;try{a:{for(Xn(t),va=Ta(Ka);va!==null&&!(va.expirationTime>t&&jc());){var e=va.callback;if(typeof e=="function"){va.callback=null,Ut=va.priorityLevel;var i=e(va.expirationTime<=t);if(t=ht.unstable_now(),typeof i=="function"){va.callback=i,Xn(t),a=!0;break a}va===Ta(Ka)&&Qn(Ka),Xn(t)}else Qn(Ka);va=Ta(Ka)}if(va!==null)a=!0;else{var n=Ta(vr);n!==null&&ll(ol,n.startTime-t),a=!1}}break t}finally{va=null,Ut=r,il=!1}a=void 0}}finally{a?Ce():be=!1}}}var Ce;typeof mc=="function"?Ce=function(){mc(al)}:typeof MessageChannel<"u"?(rl=new MessageChannel,yc=rl.port2,rl.port1.onmessage=al,Ce=function(){yc.postMessage(null)}):Ce=function(){wc(al,0)};var rl,yc;function ll(t,a){Hi=wc(function(){t(ht.unstable_now())},a)}ht.unstable_IdlePriority=5;ht.unstable_ImmediatePriority=1;ht.unstable_LowPriority=4;ht.unstable_NormalPriority=3;ht.unstable_Profiling=null;ht.unstable_UserBlockingPriority=2;ht.unstable_cancelCallback=function(t){t.callback=null};ht.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):bc=0<t?Math.floor(1e3/t):5};ht.unstable_getCurrentPriorityLevel=function(){return Ut};ht.unstable_next=function(t){switch(Ut){case 1:case 2:case 3:var a=3;break;default:a=Ut}var r=Ut;Ut=a;try{return t()}finally{Ut=r}};ht.unstable_requestPaint=function(){nl=!0};ht.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=Ut;Ut=t;try{return a()}finally{Ut=r}};ht.unstable_scheduleCallback=function(t,a,r){var e=ht.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:kp++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,el(vr,t),Ta(Ka)===null&&t===Ta(vr)&&(Wi?(Cc(Hi),Hi=-1):Wi=!0,ll(ol,r-e))):(t.sortIndex=i,el(Ka,t),ji||il||(ji=!0,be||(be=!0,Ce()))),t};ht.unstable_shouldYield=jc;ht.unstable_wrapCallback=function(t){var a=Ut;return function(){var r=Ut;Ut=a;try{return t.apply(this,arguments)}finally{Ut=r}}}});var Sc=fr((wv,Hc)=>{"use strict";Hc.exports=Wc()});var Vc=fr(Yt=>{"use strict";var xp=Qa();function Ac(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function kr(){}var Gt={d:{f:kr,r:function(){throw Error(Ac(522))},D:kr,C:kr,L:kr,m:kr,X:kr,S:kr,M:kr},p:0,findDOMNode:null},Lp=Symbol.for("react.portal");function Mp(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lp,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var Si=xp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Kn(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Gt;Yt.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(Ac(299));return Mp(t,a,null,r)};Yt.flushSync=function(t){var a=Si.T,r=Gt.p;try{if(Si.T=null,Gt.p=2,t)return t()}finally{Si.T=a,Gt.p=r,Gt.d.f()}};Yt.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Gt.d.C(t,a))};Yt.prefetchDNS=function(t){typeof t=="string"&&Gt.d.D(t)};Yt.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=Kn(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Gt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Gt.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};Yt.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=Kn(a.as,a.crossOrigin);Gt.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Gt.d.M(t)};Yt.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=Kn(r,a.crossOrigin);Gt.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};Yt.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=Kn(a.as,a.crossOrigin);Gt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Gt.d.m(t)};Yt.requestFormReset=function(t){Gt.d.r(t)};Yt.unstable_batchedUpdates=function(t,a){return t(a)};Yt.useFormState=function(t,a,r){return Si.H.useFormState(t,a,r)};Yt.useFormStatus=function(){return Si.H.useHostTransitionStatus()};Yt.version="19.2.8"});var Tc=fr((bv,_c)=>{"use strict";function zc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc)}catch(t){console.error(t)}}zc(),_c.exports=Vc()});var Ks=fr(L2=>{"use strict";var bt=Sc(),lh=Qa(),mp=Tc();function m(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kn(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function ch(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function hh(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Nc(t){if(kn(t)!==t)throw Error(m(188))}function yp(t){var a=t.alternate;if(!a){if(a=kn(t),a===null)throw Error(m(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return Nc(i),t;if(n===e)return Nc(i),a;n=n.sibling}throw Error(m(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,d=i.child;d;){if(d===r){o=!0,r=i,e=n;break}if(d===e){o=!0,e=i,r=n;break}d=d.sibling}if(!o){for(d=n.child;d;){if(d===r){o=!0,r=n,e=i;break}if(d===e){o=!0,e=n,r=i;break}d=d.sibling}if(!o)throw Error(m(189))}}if(r.alternate!==e)throw Error(m(190))}if(r.tag!==3)throw Error(m(188));return r.stateNode.current===r?t:a}function uh(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=uh(t),a!==null)return a;t=t.sibling}return null}var dt=Object.assign,wp=Symbol.for("react.element"),Jn=Symbol.for("react.transitional.element"),Di=Symbol.for("react.portal"),Ae=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),Zl=Symbol.for("react.profiler"),gh=Symbol.for("react.consumer"),ar=Symbol.for("react.context"),N1=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),E1=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),Yl=Symbol.for("react.activity"),Cp=Symbol.for("react.memo_cache_sentinel"),Ec=Symbol.iterator;function Ai(t){return t===null||typeof t!="object"?null:(t=Ec&&t[Ec]||t["@@iterator"],typeof t=="function"?t:null)}var bp=Symbol.for("react.client.reference");function Xl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ae:return"Fragment";case Zl:return"Profiler";case sh:return"StrictMode";case ql:return"Suspense";case Gl:return"SuspenseList";case Yl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Di:return"Portal";case ar:return t.displayName||"Context";case gh:return(t._context.displayName||"Context")+".Consumer";case N1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case E1:return a=t.displayName||null,a!==null?a:Xl(t.type)||"Memo";case xr:a=t._payload,t=t._init;try{return Xl(t(a))}catch{}}return null}var Oi=Array.isArray,V=lh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=mp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Ql=[],Ve=-1;function Ua(t){return{current:t}}function At(t){0>Ve||(t.current=Ql[Ve],Ql[Ve]=null,Ve--)}function it(t,a){Ve++,Ql[Ve]=t.current,t.current=a}var Oa=Ua(null),rn=Ua(null),Hr=Ua(null),Wo=Ua(null);function Ho(t,a){switch(it(Hr,a),it(rn,t),it(Oa,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?Y0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=Y0(a),t=zs(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}At(Oa),it(Oa,t)}function Fe(){At(Oa),At(rn),At(Hr)}function Kl(t){t.memoizedState!==null&&it(Wo,t);var a=Oa.current,r=zs(a,t.type);a!==r&&(it(rn,t),it(Oa,r))}function So(t){rn.current===t&&(At(Oa),At(rn)),Wo.current===t&&(At(Wo),pn._currentValue=ae)}var dl,Dc;function $r(t){if(dl===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);dl=a&&a[1]||"",Dc=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dl+t+Dc}var cl=!1;function hl(t,a){if(!t||cl)return"";cl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(x){var p=x}Reflect.construct(t,[],k)}else{try{k.call()}catch(x){p=x}t.call(k.prototype)}}else{try{throw Error()}catch(x){p=x}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(x){if(x&&p&&typeof x.stack=="string")return[x.stack,p.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],d=n[1];if(o&&d){var h=o.split(`
`),s=d.split(`
`);for(i=e=0;e<h.length&&!h[e].includes("DetermineComponentFrameRoot");)e++;for(;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;if(e===h.length||i===s.length)for(e=h.length-1,i=s.length-1;1<=e&&0<=i&&h[e]!==s[i];)i--;for(;1<=e&&0<=i;e--,i--)if(h[e]!==s[i]){if(e!==1||i!==1)do if(e--,i--,0>i||h[e]!==s[i]){var f=`
`+h[e].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=e&&0<=i);break}}}finally{cl=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?$r(r):""}function Bp(t,a){switch(t.tag){case 26:case 27:case 5:return $r(t.type);case 16:return $r("Lazy");case 13:return t.child!==a&&a!==null?$r("Suspense Fallback"):$r("Suspense");case 19:return $r("SuspenseList");case 0:case 15:return hl(t.type,!1);case 11:return hl(t.type.render,!1);case 1:return hl(t.type,!0);case 31:return $r("Activity");default:return""}}function Oc(t){try{var a="",r=null;do a+=Bp(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Jl=Object.prototype.hasOwnProperty,D1=bt.unstable_scheduleCallback,ul=bt.unstable_cancelCallback,jp=bt.unstable_shouldYield,Wp=bt.unstable_requestPaint,da=bt.unstable_now,Hp=bt.unstable_getCurrentPriorityLevel,ph=bt.unstable_ImmediatePriority,fh=bt.unstable_UserBlockingPriority,Ao=bt.unstable_NormalPriority,Sp=bt.unstable_LowPriority,vh=bt.unstable_IdlePriority,Ap=bt.log,Vp=bt.unstable_setDisableYieldValue,xn=null,ca=null;function Cr(t){if(typeof Ap=="function"&&Vp(t),ca&&typeof ca.setStrictMode=="function")try{ca.setStrictMode(xn,t)}catch{}}var ha=Math.clz32?Math.clz32:Tp,zp=Math.log,_p=Math.LN2;function Tp(t){return t>>>=0,t===0?32:31-(zp(t)/_p|0)|0}var Rn=256,Fn=262144,$n=4194304;function Ir(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function e2(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var d=e&134217727;return d!==0?(e=d&~n,e!==0?i=Ir(e):(o&=d,o!==0?i=Ir(o):r||(r=d&~t,r!==0&&(i=Ir(r))))):(d=e&~n,d!==0?i=Ir(d):o!==0?i=Ir(o):r||(r=e&~t,r!==0&&(i=Ir(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function Ln(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Np(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kh(){var t=$n;return $n<<=1,($n&62914560)===0&&($n=4194304),t}function sl(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function Mn(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ep(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var d=t.entanglements,h=t.expirationTimes,s=t.hiddenUpdates;for(r=o&~r;0<r;){var f=31-ha(r),k=1<<f;d[f]=0,h[f]=-1;var p=s[f];if(p!==null)for(s[f]=null,f=0;f<p.length;f++){var x=p[f];x!==null&&(x.lane&=-536870913)}r&=~k}e!==0&&xh(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function xh(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-ha(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function Lh(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-ha(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function Mh(t,a){var r=a&-a;return r=(r&42)!==0?1:O1(r),(r&(t.suspendedLanes|a))!==0?0:r}function O1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function U1(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function mh(){var t=J.p;return t!==0?t:(t=window.event,t===void 0?32:Ys(t.type))}function Uc(t,a){var r=J.p;try{return J.p=t,a()}finally{J.p=r}}var qr=Math.random().toString(36).slice(2),_t="__reactFiber$"+qr,It="__reactProps$"+qr,li="__reactContainer$"+qr,Rl="__reactEvents$"+qr,Dp="__reactListeners$"+qr,Op="__reactHandles$"+qr,Zc="__reactResources$"+qr,mn="__reactMarker$"+qr;function Z1(t){delete t[_t],delete t[It],delete t[Rl],delete t[Dp],delete t[Op]}function ze(t){var a=t[_t];if(a)return a;for(var r=t.parentNode;r;){if(a=r[li]||r[_t]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=R0(t);t!==null;){if(r=t[_t])return r;t=R0(t)}return a}t=r,r=t.parentNode}return null}function di(t){if(t=t[_t]||t[li]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Ui(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(m(33))}function Ge(t){var a=t[Zc];return a||(a=t[Zc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function St(t){t[mn]=!0}var yh=new Set,wh={};function ue(t,a){$e(t,a),$e(t+"Capture",a)}function $e(t,a){for(wh[t]=a,t=0;t<a.length;t++)yh.add(a[t])}var Up=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qc={},Gc={};function Zp(t){return Jl.call(Gc,t)?!0:Jl.call(qc,t)?!1:Up.test(t)?Gc[t]=!0:(qc[t]=!0,!1)}function go(t,a,r){if(Zp(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function In(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function Ja(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function xa(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ch(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function qp(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Fl(t){if(!t._valueTracker){var a=Ch(t)?"checked":"value";t._valueTracker=qp(t,a,""+t[a])}}function bh(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=Ch(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function Vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gp=/[\n"\\]/g;function ma(t){return t.replace(Gp,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function $l(t,a,r,e,i,n,o,d){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+xa(a)):t.value!==""+xa(a)&&(t.value=""+xa(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?Il(t,o,xa(a)):r!=null?Il(t,o,xa(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+xa(d):t.removeAttribute("name")}function Bh(t,a,r,e,i,n,o,d){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){Fl(t);return}r=r!=null?""+xa(r):"",a=a!=null?""+xa(a):r,d||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=d?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Fl(t)}function Il(t,a,r){a==="number"&&Vo(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ye(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+xa(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function jh(t,a,r){if(a!=null&&(a=""+xa(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+xa(r):""}function Wh(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(m(92));if(Oi(e)){if(1<e.length)throw Error(m(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=xa(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),Fl(t)}function Ie(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var Yp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yc(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||Yp.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function Hh(t,a,r){if(a!=null&&typeof a!="object")throw Error(m(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&Yc(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&Yc(t,n,a[n])}function q1(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function po(t){return Qp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function rr(){}var Pl=null;function G1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _e=null,Xe=null;function Xc(t){var a=di(t);if(a&&(t=a.stateNode)){var r=t[It]||null;t:switch(t=a.stateNode,a.type){case"input":if($l(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ma(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[It]||null;if(!i)throw Error(m(90));$l(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&bh(e)}break t;case"textarea":jh(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Ye(t,!!r.multiple,a,!1)}}}var gl=!1;function Sh(t,a,r){if(gl)return t(a,r);gl=!0;try{var e=t(a);return e}finally{if(gl=!1,(_e!==null||Xe!==null)&&(f2(),_e&&(a=_e,t=Xe,Xe=_e=null,Xc(a),t)))for(a=0;a<t.length;a++)Xc(t[a])}}function en(t,a){var r=t.stateNode;if(r===null)return null;var e=r[It]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(m(231,a,typeof r));return r}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),t1=!1;if(lr)try{Be={},Object.defineProperty(Be,"passive",{get:function(){t1=!0}}),window.addEventListener("test",Be,Be),window.removeEventListener("test",Be,Be)}catch{t1=!1}var Be,br=null,Y1=null,fo=null;function Ah(){if(fo)return fo;var t,a=Y1,r=a.length,e,i="value"in br?br.value:br.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return fo=i.slice(t,1<e?1-e:void 0)}function vo(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Pn(){return!0}function Qc(){return!1}function Pt(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(r=t[d],this[d]=r?r(n):n[d]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Pn:Qc,this.isPropagationStopped=Qc,this}return dt(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),a}var se={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},i2=Pt(se),yn=dt({},se,{view:0,detail:0}),Kp=Pt(yn),pl,fl,Vi,n2=dt({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:X1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vi&&(Vi&&t.type==="mousemove"?(pl=t.screenX-Vi.screenX,fl=t.screenY-Vi.screenY):fl=pl=0,Vi=t),pl)},movementY:function(t){return"movementY"in t?t.movementY:fl}}),Kc=Pt(n2),Jp=dt({},n2,{dataTransfer:0}),Rp=Pt(Jp),Fp=dt({},yn,{relatedTarget:0}),vl=Pt(Fp),$p=dt({},se,{animationName:0,elapsedTime:0,pseudoElement:0}),Ip=Pt($p),Pp=dt({},se,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t5=Pt(Pp),a5=dt({},se,{data:0}),Jc=Pt(a5),r5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n5(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=i5[t])?!!a[t]:!1}function X1(){return n5}var o5=dt({},yn,{key:function(t){if(t.key){var a=r5[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e5[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:X1,charCode:function(t){return t.type==="keypress"?vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l5=Pt(o5),d5=dt({},n2,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rc=Pt(d5),c5=dt({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:X1}),h5=Pt(c5),u5=dt({},se,{propertyName:0,elapsedTime:0,pseudoElement:0}),s5=Pt(u5),g5=dt({},n2,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p5=Pt(g5),f5=dt({},se,{newState:0,oldState:0}),v5=Pt(f5),k5=[9,13,27,32],Q1=lr&&"CompositionEvent"in window,Gi=null;lr&&"documentMode"in document&&(Gi=document.documentMode);var x5=lr&&"TextEvent"in window&&!Gi,Vh=lr&&(!Q1||Gi&&8<Gi&&11>=Gi),Fc=" ",$c=!1;function zh(t,a){switch(t){case"keyup":return k5.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _h(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Te=!1;function L5(t,a){switch(t){case"compositionend":return _h(a);case"keypress":return a.which!==32?null:($c=!0,Fc);case"textInput":return t=a.data,t===Fc&&$c?null:t;default:return null}}function M5(t,a){if(Te)return t==="compositionend"||!Q1&&zh(t,a)?(t=Ah(),fo=Y1=br=null,Te=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Vh&&a.locale!=="ko"?null:a.data;default:return null}}var m5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ic(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!m5[t.type]:a==="textarea"}function Th(t,a,r,e){_e?Xe?Xe.push(e):Xe=[e]:_e=e,a=Fo(a,"onChange"),0<a.length&&(r=new i2("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var Yi=null,nn=null;function y5(t){Ss(t,0)}function o2(t){var a=Ui(t);if(bh(a))return t}function Pc(t,a){if(t==="change")return a}var Nh=!1;lr&&(lr?(ao="oninput"in document,ao||(kl=document.createElement("div"),kl.setAttribute("oninput","return;"),ao=typeof kl.oninput=="function"),to=ao):to=!1,Nh=to&&(!document.documentMode||9<document.documentMode));var to,ao,kl;function t0(){Yi&&(Yi.detachEvent("onpropertychange",Eh),nn=Yi=null)}function Eh(t){if(t.propertyName==="value"&&o2(nn)){var a=[];Th(a,nn,t,G1(t)),Sh(y5,a)}}function w5(t,a,r){t==="focusin"?(t0(),Yi=a,nn=r,Yi.attachEvent("onpropertychange",Eh)):t==="focusout"&&t0()}function C5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return o2(nn)}function b5(t,a){if(t==="click")return o2(a)}function B5(t,a){if(t==="input"||t==="change")return o2(a)}function j5(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var sa=typeof Object.is=="function"?Object.is:j5;function on(t,a){if(sa(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!Jl.call(a,i)||!sa(t[i],a[i]))return!1}return!0}function a0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function r0(t,a){var r=a0(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=a0(r)}}function Dh(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Dh(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Oh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Vo(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=Vo(t.document)}return a}function K1(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var W5=lr&&"documentMode"in document&&11>=document.documentMode,Ne=null,a1=null,Xi=null,r1=!1;function e0(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;r1||Ne==null||Ne!==Vo(e)||(e=Ne,"selectionStart"in e&&K1(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Xi&&on(Xi,e)||(Xi=e,e=Fo(a1,"onSelect"),0<e.length&&(a=new i2("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=Ne)))}function Fr(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var Ee={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionrun:Fr("Transition","TransitionRun"),transitionstart:Fr("Transition","TransitionStart"),transitioncancel:Fr("Transition","TransitionCancel"),transitionend:Fr("Transition","TransitionEnd")},xl={},Uh={};lr&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete Ee.animationend.animation,delete Ee.animationiteration.animation,delete Ee.animationstart.animation),"TransitionEvent"in window||delete Ee.transitionend.transition);function ge(t){if(xl[t])return xl[t];if(!Ee[t])return t;var a=Ee[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in Uh)return xl[t]=a[r];return t}var Zh=ge("animationend"),qh=ge("animationiteration"),Gh=ge("animationstart"),H5=ge("transitionrun"),S5=ge("transitionstart"),A5=ge("transitioncancel"),Yh=ge("transitionend"),Xh=new Map,e1="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");e1.push("scrollEnd");function Va(t,a){Xh.set(t,a),ue(a,[t])}var zo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ka=[],De=0,J1=0;function l2(){for(var t=De,a=J1=De=0;a<t;){var r=ka[a];ka[a++]=null;var e=ka[a];ka[a++]=null;var i=ka[a];ka[a++]=null;var n=ka[a];if(ka[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&Qh(r,i,n)}}function d2(t,a,r,e){ka[De++]=t,ka[De++]=a,ka[De++]=r,ka[De++]=e,J1|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function R1(t,a,r,e){return d2(t,a,r,e),_o(t)}function pe(t,a){return d2(t,null,null,a),_o(t)}function Qh(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-ha(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function _o(t){if(50<tn)throw tn=0,C1=null,Error(m(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Oe={};function V5(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oa(t,a,r,e){return new V5(t,a,r,e)}function F1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ir(t,a){var r=t.alternate;return r===null?(r=oa(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Kh(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function ko(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")F1(t)&&(o=1);else if(typeof t=="string")o=Nf(t,r,Oa.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Yl:return t=oa(31,r,a,i),t.elementType=Yl,t.lanes=n,t;case Ae:return re(r.children,i,n,a);case sh:o=8,i|=24;break;case Zl:return t=oa(12,r,a,i|2),t.elementType=Zl,t.lanes=n,t;case ql:return t=oa(13,r,a,i),t.elementType=ql,t.lanes=n,t;case Gl:return t=oa(19,r,a,i),t.elementType=Gl,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ar:o=10;break t;case gh:o=9;break t;case N1:o=11;break t;case E1:o=14;break t;case xr:o=16,e=null;break t}o=29,r=Error(m(130,t===null?"null":typeof t,"")),e=null}return a=oa(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function re(t,a,r,e){return t=oa(7,t,e,a),t.lanes=r,t}function Ll(t,a,r){return t=oa(6,t,null,a),t.lanes=r,t}function Jh(t){var a=oa(18,null,null,0);return a.stateNode=t,a}function Ml(t,a,r){return a=oa(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var i0=new WeakMap;function ya(t,a){if(typeof t=="object"&&t!==null){var r=i0.get(t);return r!==void 0?r:(a={value:t,source:a,stack:Oc(a)},i0.set(t,a),a)}return{value:t,source:a,stack:Oc(a)}}var Ue=[],Ze=0,To=null,ln=0,La=[],Ma=0,Dr=null,Na=1,Ea="";function Pa(t,a){Ue[Ze++]=ln,Ue[Ze++]=To,To=t,ln=a}function Rh(t,a,r){La[Ma++]=Na,La[Ma++]=Ea,La[Ma++]=Dr,Dr=t;var e=Na;t=Ea;var i=32-ha(e)-1;e&=~(1<<i),r+=1;var n=32-ha(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,Na=1<<32-ha(a)+i|r<<i|e,Ea=n+t}else Na=1<<n|r<<i|e,Ea=t}function $1(t){t.return!==null&&(Pa(t,1),Rh(t,1,0))}function I1(t){for(;t===To;)To=Ue[--Ze],Ue[Ze]=null,ln=Ue[--Ze],Ue[Ze]=null;for(;t===Dr;)Dr=La[--Ma],La[Ma]=null,Ea=La[--Ma],La[Ma]=null,Na=La[--Ma],La[Ma]=null}function Fh(t,a){La[Ma++]=Na,La[Ma++]=Ea,La[Ma++]=Dr,Na=a.id,Ea=a.overflow,Dr=t}var Tt=null,lt=null,X=!1,Sr=null,wa=!1,i1=Error(m(519));function Or(t){var a=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw dn(ya(a,t)),i1}function n0(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[_t]=t,a[It]=e,r){case"dialog":U("cancel",a),U("close",a);break;case"iframe":case"object":case"embed":U("load",a);break;case"video":case"audio":for(r=0;r<sn.length;r++)U(sn[r],a);break;case"source":U("error",a);break;case"img":case"image":case"link":U("error",a),U("load",a);break;case"details":U("toggle",a);break;case"input":U("invalid",a),Bh(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":U("invalid",a);break;case"textarea":U("invalid",a),Wh(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||Vs(a.textContent,r)?(e.popover!=null&&(U("beforetoggle",a),U("toggle",a)),e.onScroll!=null&&U("scroll",a),e.onScrollEnd!=null&&U("scrollend",a),e.onClick!=null&&(a.onclick=rr),a=!0):a=!1,a||Or(t,!0)}function o0(t){for(Tt=t.return;Tt;)switch(Tt.tag){case 5:case 31:case 13:wa=!1;return;case 27:case 3:wa=!0;return;default:Tt=Tt.return}}function je(t){if(t!==Tt)return!1;if(!X)return o0(t),X=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||H1(t.type,t.memoizedProps)),r=!r),r&&lt&&Or(t),o0(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));lt=J0(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));lt=J0(t)}else a===27?(a=lt,Gr(t.type)?(t=z1,z1=null,lt=t):lt=a):lt=Tt?ba(t.stateNode.nextSibling):null;return!0}function oe(){lt=Tt=null,X=!1}function ml(){var t=Sr;return t!==null&&(Ft===null?Ft=t:Ft.push.apply(Ft,t),Sr=null),t}function dn(t){Sr===null?Sr=[t]:Sr.push(t)}var n1=Ua(null),fe=null,er=null;function Mr(t,a,r){it(n1,a._currentValue),a._currentValue=r}function nr(t){t._currentValue=n1.current,At(n1)}function o1(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function l1(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var d=n;n=i;for(var h=0;h<a.length;h++)if(d.context===a[h]){n.lanes|=r,d=n.alternate,d!==null&&(d.lanes|=r),o1(n.return,r,t),e||(o=null);break t}n=d.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),o1(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ci(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(m(387));if(o=o.memoizedProps,o!==null){var d=i.type;sa(i.pendingProps.value,o.value)||(t!==null?t.push(d):t=[d])}}else if(i===Wo.current){if(o=i.alternate,o===null)throw Error(m(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(pn):t=[pn])}i=i.return}t!==null&&l1(a,t,r,e),a.flags|=262144}function No(t){for(t=t.firstContext;t!==null;){if(!sa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function le(t){fe=t,er=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nt(t){return $h(fe,t)}function ro(t,a){return fe===null&&le(t),$h(t,a)}function $h(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},er===null){if(t===null)throw Error(m(308));er=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else er=er.next=a;return r}var z5=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},_5=bt.unstable_scheduleCallback,T5=bt.unstable_NormalPriority,mt={$$typeof:ar,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function P1(){return{controller:new z5,data:new Map,refCount:0}}function wn(t){t.refCount--,t.refCount===0&&_5(T5,function(){t.controller.abort()})}var Qi=null,d1=0,Pe=0,Qe=null;function N5(t,a){if(Qi===null){var r=Qi=[];d1=0,Pe=Cd(),Qe={status:"pending",value:void 0,then:function(e){r.push(e)}}}return d1++,a.then(l0,l0),a}function l0(){if(--d1===0&&Qi!==null){Qe!==null&&(Qe.status="fulfilled");var t=Qi;Qi=null,Pe=0,Qe=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function E5(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var d0=V.S;V.S=function(t,a){us=da(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&N5(t,a),d0!==null&&d0(t,a)};var ee=Ua(null);function td(){var t=ee.current;return t!==null?t:et.pooledCache}function xo(t,a){a===null?it(ee,ee.current):it(ee,a.pool)}function Ih(){var t=td();return t===null?null:{parent:mt._currentValue,pool:t}}var hi=Error(m(460)),ad=Error(m(474)),c2=Error(m(542)),Eo={then:function(){}};function c0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ph(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(rr,rr),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,u0(t),t;default:if(typeof a.status=="string")a.then(rr,rr);else{if(t=et,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,u0(t),t}throw ie=a,hi}}function Pr(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ie=r,hi):r}}var ie=null;function h0(){if(ie===null)throw Error(m(459));var t=ie;return ie=null,t}function u0(t){if(t===hi||t===c2)throw Error(m(483))}var Ke=null,cn=0;function eo(t){var a=cn;return cn+=1,Ke===null&&(Ke=[]),Ph(Ke,t,a)}function zi(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function io(t,a){throw a.$$typeof===wp?Error(m(525)):(t=Object.prototype.toString.call(a),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function tu(t){function a(g,u){if(t){var v=g.deletions;v===null?(g.deletions=[u],g.flags|=16):v.push(u)}}function r(g,u){if(!t)return null;for(;u!==null;)a(g,u),u=u.sibling;return null}function e(g){for(var u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function i(g,u){return g=ir(g,u),g.index=0,g.sibling=null,g}function n(g,u,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<u?(g.flags|=67108866,u):v):(g.flags|=67108866,u)):(g.flags|=1048576,u)}function o(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function d(g,u,v,L){return u===null||u.tag!==6?(u=Ll(v,g.mode,L),u.return=g,u):(u=i(u,v),u.return=g,u)}function h(g,u,v,L){var j=v.type;return j===Ae?f(g,u,v.props.children,L,v.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===xr&&Pr(j)===u.type)?(u=i(u,v.props),zi(u,v),u.return=g,u):(u=ko(v.type,v.key,v.props,null,g.mode,L),zi(u,v),u.return=g,u)}function s(g,u,v,L){return u===null||u.tag!==4||u.stateNode.containerInfo!==v.containerInfo||u.stateNode.implementation!==v.implementation?(u=Ml(v,g.mode,L),u.return=g,u):(u=i(u,v.children||[]),u.return=g,u)}function f(g,u,v,L,j){return u===null||u.tag!==7?(u=re(v,g.mode,L,j),u.return=g,u):(u=i(u,v),u.return=g,u)}function k(g,u,v){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=Ll(""+u,g.mode,v),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Jn:return v=ko(u.type,u.key,u.props,null,g.mode,v),zi(v,u),v.return=g,v;case Di:return u=Ml(u,g.mode,v),u.return=g,u;case xr:return u=Pr(u),k(g,u,v)}if(Oi(u)||Ai(u))return u=re(u,g.mode,v,null),u.return=g,u;if(typeof u.then=="function")return k(g,eo(u),v);if(u.$$typeof===ar)return k(g,ro(g,u),v);io(g,u)}return null}function p(g,u,v,L){var j=u!==null?u.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return j!==null?null:d(g,u,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jn:return v.key===j?h(g,u,v,L):null;case Di:return v.key===j?s(g,u,v,L):null;case xr:return v=Pr(v),p(g,u,v,L)}if(Oi(v)||Ai(v))return j!==null?null:f(g,u,v,L,null);if(typeof v.then=="function")return p(g,u,eo(v),L);if(v.$$typeof===ar)return p(g,u,ro(g,v),L);io(g,v)}return null}function x(g,u,v,L,j){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return g=g.get(v)||null,d(u,g,""+L,j);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Jn:return g=g.get(L.key===null?v:L.key)||null,h(u,g,L,j);case Di:return g=g.get(L.key===null?v:L.key)||null,s(u,g,L,j);case xr:return L=Pr(L),x(g,u,v,L,j)}if(Oi(L)||Ai(L))return g=g.get(v)||null,f(u,g,L,j,null);if(typeof L.then=="function")return x(g,u,v,eo(L),j);if(L.$$typeof===ar)return x(g,u,v,ro(u,L),j);io(u,L)}return null}function y(g,u,v,L){for(var j=null,z=null,b=u,A=u=0,T=null;b!==null&&A<v.length;A++){b.index>A?(T=b,b=null):T=b.sibling;var D=p(g,b,v[A],L);if(D===null){b===null&&(b=T);break}t&&b&&D.alternate===null&&a(g,b),u=n(D,u,A),z===null?j=D:z.sibling=D,z=D,b=T}if(A===v.length)return r(g,b),X&&Pa(g,A),j;if(b===null){for(;A<v.length;A++)b=k(g,v[A],L),b!==null&&(u=n(b,u,A),z===null?j=b:z.sibling=b,z=b);return X&&Pa(g,A),j}for(b=e(b);A<v.length;A++)T=x(b,g,A,v[A],L),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?A:T.key),u=n(T,u,A),z===null?j=T:z.sibling=T,z=T);return t&&b.forEach(function(tt){return a(g,tt)}),X&&Pa(g,A),j}function C(g,u,v,L){if(v==null)throw Error(m(151));for(var j=null,z=null,b=u,A=u=0,T=null,D=v.next();b!==null&&!D.done;A++,D=v.next()){b.index>A?(T=b,b=null):T=b.sibling;var tt=p(g,b,D.value,L);if(tt===null){b===null&&(b=T);break}t&&b&&tt.alternate===null&&a(g,b),u=n(tt,u,A),z===null?j=tt:z.sibling=tt,z=tt,b=T}if(D.done)return r(g,b),X&&Pa(g,A),j;if(b===null){for(;!D.done;A++,D=v.next())D=k(g,D.value,L),D!==null&&(u=n(D,u,A),z===null?j=D:z.sibling=D,z=D);return X&&Pa(g,A),j}for(b=e(b);!D.done;A++,D=v.next())D=x(b,g,A,D.value,L),D!==null&&(t&&D.alternate!==null&&b.delete(D.key===null?A:D.key),u=n(D,u,A),z===null?j=D:z.sibling=D,z=D);return t&&b.forEach(function(gr){return a(g,gr)}),X&&Pa(g,A),j}function E(g,u,v,L){if(typeof v=="object"&&v!==null&&v.type===Ae&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Jn:t:{for(var j=v.key;u!==null;){if(u.key===j){if(j=v.type,j===Ae){if(u.tag===7){r(g,u.sibling),L=i(u,v.props.children),L.return=g,g=L;break t}}else if(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===xr&&Pr(j)===u.type){r(g,u.sibling),L=i(u,v.props),zi(L,v),L.return=g,g=L;break t}r(g,u);break}else a(g,u);u=u.sibling}v.type===Ae?(L=re(v.props.children,g.mode,L,v.key),L.return=g,g=L):(L=ko(v.type,v.key,v.props,null,g.mode,L),zi(L,v),L.return=g,g=L)}return o(g);case Di:t:{for(j=v.key;u!==null;){if(u.key===j)if(u.tag===4&&u.stateNode.containerInfo===v.containerInfo&&u.stateNode.implementation===v.implementation){r(g,u.sibling),L=i(u,v.children||[]),L.return=g,g=L;break t}else{r(g,u);break}else a(g,u);u=u.sibling}L=Ml(v,g.mode,L),L.return=g,g=L}return o(g);case xr:return v=Pr(v),E(g,u,v,L)}if(Oi(v))return y(g,u,v,L);if(Ai(v)){if(j=Ai(v),typeof j!="function")throw Error(m(150));return v=j.call(v),C(g,u,v,L)}if(typeof v.then=="function")return E(g,u,eo(v),L);if(v.$$typeof===ar)return E(g,u,ro(g,v),L);io(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,u!==null&&u.tag===6?(r(g,u.sibling),L=i(u,v),L.return=g,g=L):(r(g,u),L=Ll(v,g.mode,L),L.return=g,g=L),o(g)):r(g,u)}return function(g,u,v,L){try{cn=0;var j=E(g,u,v,L);return Ke=null,j}catch(b){if(b===hi||b===c2)throw b;var z=oa(29,b,null,g.mode);return z.lanes=L,z.return=g,z}}}var de=tu(!0),au=tu(!1),Lr=!1;function rd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function c1(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ar(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Vr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(K&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=_o(t),Qh(t,null,r),a}return d2(t,e,a,r),_o(t)}function Ki(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,Lh(t,r)}}function yl(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var h1=!1;function Ji(){if(h1){var t=Qe;if(t!==null)throw t}}function Ri(t,a,r,e){h1=!1;var i=t.updateQueue;Lr=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var h=d,s=h.next;h.next=null,o===null?n=s:o.next=s,o=h;var f=t.alternate;f!==null&&(f=f.updateQueue,d=f.lastBaseUpdate,d!==o&&(d===null?f.firstBaseUpdate=s:d.next=s,f.lastBaseUpdate=h))}if(n!==null){var k=i.baseState;o=0,f=s=h=null,d=n;do{var p=d.lane&-536870913,x=p!==d.lane;if(x?(q&p)===p:(e&p)===p){p!==0&&p===Pe&&(h1=!0),f!==null&&(f=f.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var y=t,C=d;p=a;var E=r;switch(C.tag){case 1:if(y=C.payload,typeof y=="function"){k=y.call(E,k,p);break t}k=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=C.payload,p=typeof y=="function"?y.call(E,k,p):y,p==null)break t;k=dt({},k,p);break t;case 2:Lr=!0}}p=d.callback,p!==null&&(t.flags|=64,x&&(t.flags|=8192),x=i.callbacks,x===null?i.callbacks=[p]:x.push(p))}else x={lane:p,tag:d.tag,payload:d.payload,callback:d.callback,next:null},f===null?(s=f=x,h=k):f=f.next=x,o|=p;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;x=d,d=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);f===null&&(h=k),i.baseState=h,i.firstBaseUpdate=s,i.lastBaseUpdate=f,n===null&&(i.shared.lanes=0),Zr|=o,t.lanes=o,t.memoizedState=k}}function ru(t,a){if(typeof t!="function")throw Error(m(191,t));t.call(a)}function eu(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)ru(r[t],a)}var ti=Ua(null),Do=Ua(0);function s0(t,a){t=ur,it(Do,t),it(ti,a),ur=t|a.baseLanes}function u1(){it(Do,ur),it(ti,ti.current)}function ed(){ur=Do.current,At(ti),At(Do)}var ga=Ua(null),Ca=null;function mr(t){var a=t.alternate;it(pt,pt.current&1),it(ga,t),Ca===null&&(a===null||ti.current!==null||a.memoizedState!==null)&&(Ca=t)}function s1(t){it(pt,pt.current),it(ga,t),Ca===null&&(Ca=t)}function iu(t){t.tag===22?(it(pt,pt.current),it(ga,t),Ca===null&&(Ca=t)):yr(t)}function yr(){it(pt,pt.current),it(ga,ga.current)}function na(t){At(ga),Ca===t&&(Ca=null),At(pt)}var pt=Ua(0);function Oo(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||A1(r)||V1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var dr=0,N=null,rt=null,Lt=null,Uo=!1,Je=!1,ce=!1,Zo=0,hn=0,Re=null,D5=0;function st(){throw Error(m(321))}function id(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!sa(t[r],a[r]))return!1;return!0}function nd(t,a,r,e,i,n){return dr=n,N=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,V.H=t===null||t.memoizedState===null?Tu:vd,ce=!1,n=r(e,i),ce=!1,Je&&(n=ou(a,r,e,i)),nu(t),n}function nu(t){V.H=un;var a=rt!==null&&rt.next!==null;if(dr=0,Lt=rt=N=null,Uo=!1,hn=0,Re=null,a)throw Error(m(300));t===null||yt||(t=t.dependencies,t!==null&&No(t)&&(yt=!0))}function ou(t,a,r,e){N=t;var i=0;do{if(Je&&(Re=null),hn=0,Je=!1,25<=i)throw Error(m(301));if(i+=1,Lt=rt=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}V.H=Nu,n=a(r,e)}while(Je);return n}function O5(){var t=V.H,a=t.useState()[0];return a=typeof a.then=="function"?Cn(a):a,t=t.useState()[0],(rt!==null?rt.memoizedState:null)!==t&&(N.flags|=1024),a}function od(){var t=Zo!==0;return Zo=0,t}function ld(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function dd(t){if(Uo){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Uo=!1}dr=0,Lt=rt=N=null,Je=!1,hn=Zo=0,Re=null}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?N.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function ft(){if(rt===null){var t=N.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var a=Lt===null?N.memoizedState:Lt.next;if(a!==null)Lt=a,rt=t;else{if(t===null)throw N.alternate===null?Error(m(467)):Error(m(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},Lt===null?N.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function h2(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cn(t){var a=hn;return hn+=1,Re===null&&(Re=[]),t=Ph(Re,t,a),a=N,(Lt===null?a.memoizedState:Lt.next)===null&&(a=a.alternate,V.H=a===null||a.memoizedState===null?Tu:vd),t}function u2(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Cn(t);if(t.$$typeof===ar)return Nt(t)}throw Error(m(438,String(t)))}function cd(t){var a=null,r=N.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=N.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=h2(),N.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=Cp;return a.index++,r}function cr(t,a){return typeof a=="function"?a(t):a}function Lo(t){var a=ft();return hd(a,rt,t)}function hd(t,a,r){var e=t.queue;if(e===null)throw Error(m(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var d=o=null,h=null,s=a,f=!1;do{var k=s.lane&-536870913;if(k!==s.lane?(q&k)===k:(dr&k)===k){var p=s.revertLane;if(p===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),k===Pe&&(f=!0);else if((dr&p)===p){s=s.next,p===Pe&&(f=!0);continue}else k={lane:0,revertLane:s.revertLane,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},h===null?(d=h=k,o=n):h=h.next=k,N.lanes|=p,Zr|=p;k=s.action,ce&&r(n,k),n=s.hasEagerState?s.eagerState:r(n,k)}else p={lane:k,revertLane:s.revertLane,gesture:s.gesture,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},h===null?(d=h=p,o=n):h=h.next=p,N.lanes|=k,Zr|=k;s=s.next}while(s!==null&&s!==a);if(h===null?o=n:h.next=d,!sa(n,t.memoizedState)&&(yt=!0,f&&(r=Qe,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=h,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function wl(t){var a=ft(),r=a.queue;if(r===null)throw Error(m(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);sa(n,a.memoizedState)||(yt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function lu(t,a,r){var e=N,i=ft(),n=X;if(n){if(r===void 0)throw Error(m(407));r=r()}else r=a();var o=!sa((rt||i).memoizedState,r);if(o&&(i.memoizedState=r,yt=!0),i=i.queue,ud(hu.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||Lt!==null&&Lt.memoizedState.tag&1){if(e.flags|=2048,ai(9,{destroy:void 0},cu.bind(null,e,i,r,a),null),et===null)throw Error(m(349));n||(dr&127)!==0||du(e,a,r)}return r}function du(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=N.updateQueue,a===null?(a=h2(),N.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function cu(t,a,r,e){a.value=r,a.getSnapshot=e,uu(a)&&su(t)}function hu(t,a,r){return r(function(){uu(a)&&su(t)})}function uu(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!sa(t,r)}catch{return!0}}function su(t){var a=pe(t,2);a!==null&&$t(a,t,2)}function g1(t){var a=Xt();if(typeof t=="function"){var r=t;if(t=r(),ce){Cr(!0);try{r()}finally{Cr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:t},a}function gu(t,a,r,e){return t.baseState=r,hd(t,rt,typeof e=="function"?e:cr)}function U5(t,a,r,e,i){if(g2(t))throw Error(m(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};V.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,pu(a,n)):(n.next=r.next,a.pending=r.next=n)}}function pu(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=V.T,o={};V.T=o;try{var d=r(i,e),h=V.S;h!==null&&h(o,d),g0(t,a,d)}catch(s){p1(t,a,s)}finally{n!==null&&o.types!==null&&(n.types=o.types),V.T=n}}else try{n=r(i,e),g0(t,a,n)}catch(s){p1(t,a,s)}}function g0(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){p0(t,a,e)},function(e){return p1(t,a,e)}):p0(t,a,r)}function p0(t,a,r){a.status="fulfilled",a.value=r,fu(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,pu(t,r)))}function p1(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,fu(a),a=a.next;while(a!==e)}t.action=null}function fu(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function vu(t,a){return a}function f0(t,a){if(X){var r=et.formState;if(r!==null){t:{var e=N;if(X){if(lt){a:{for(var i=lt,n=wa;i.nodeType!==8;){if(!n){i=null;break a}if(i=ba(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){lt=ba(i.nextSibling),e=i.data==="F!";break t}}Or(e)}e=!1}e&&(a=r[0])}}return r=Xt(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vu,lastRenderedState:a},r.queue=e,r=Vu.bind(null,N,e),e.dispatch=r,e=g1(!1),n=fd.bind(null,N,!1,e.queue),e=Xt(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=U5.bind(null,N,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function v0(t){var a=ft();return ku(a,rt,t)}function ku(t,a,r){if(a=hd(t,a,vu)[0],t=Lo(cr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=Cn(a)}catch(o){throw o===hi?c2:o}else e=a;a=ft();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(N.flags|=2048,ai(9,{destroy:void 0},Z5.bind(null,i,r),null)),[e,n,t]}function Z5(t,a){t.action=a}function k0(t){var a=ft(),r=rt;if(r!==null)return ku(a,r,t);ft(),a=a.memoizedState,r=ft();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function ai(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=N.updateQueue,a===null&&(a=h2(),N.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function xu(){return ft().memoizedState}function Mo(t,a,r,e){var i=Xt();N.flags|=t,i.memoizedState=ai(1|a,{destroy:void 0},r,e===void 0?null:e)}function s2(t,a,r,e){var i=ft();e=e===void 0?null:e;var n=i.memoizedState.inst;rt!==null&&e!==null&&id(e,rt.memoizedState.deps)?i.memoizedState=ai(a,n,r,e):(N.flags|=t,i.memoizedState=ai(1|a,n,r,e))}function x0(t,a){Mo(8390656,8,t,a)}function ud(t,a){s2(2048,8,t,a)}function q5(t){N.flags|=4;var a=N.updateQueue;if(a===null)a=h2(),N.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function Lu(t){var a=ft().memoizedState;return q5({ref:a,nextImpl:t}),function(){if((K&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}function Mu(t,a){return s2(4,2,t,a)}function mu(t,a){return s2(4,4,t,a)}function yu(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function wu(t,a,r){r=r!=null?r.concat([t]):null,s2(4,4,yu.bind(null,a,t),r)}function sd(){}function Cu(t,a){var r=ft();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&id(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function bu(t,a){var r=ft();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&id(a,e[1]))return e[0];if(e=t(),ce){Cr(!0);try{t()}finally{Cr(!1)}}return r.memoizedState=[e,a],e}function gd(t,a,r){return r===void 0||(dr&1073741824)!==0&&(q&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=gs(),N.lanes|=t,Zr|=t,r)}function Bu(t,a,r,e){return sa(r,a)?r:ti.current!==null?(t=gd(t,r,e),sa(t,a)||(yt=!0),t):(dr&42)===0||(dr&1073741824)!==0&&(q&261930)===0?(yt=!0,t.memoizedState=r):(t=gs(),N.lanes|=t,Zr|=t,a)}function ju(t,a,r,e,i){var n=J.p;J.p=n!==0&&8>n?n:8;var o=V.T,d={};V.T=d,fd(t,!1,a,r);try{var h=i(),s=V.S;if(s!==null&&s(d,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var f=E5(h,e);Fi(t,a,f,ua(t))}else Fi(t,a,e,ua(t))}catch(k){Fi(t,a,{then:function(){},status:"rejected",reason:k},ua())}finally{J.p=n,o!==null&&d.types!==null&&(o.types=d.types),V.T=o}}function G5(){}function f1(t,a,r,e){if(t.tag!==5)throw Error(m(476));var i=Wu(t).queue;ju(t,i,a,ae,r===null?G5:function(){return Hu(t),r(e)})}function Wu(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:ae},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Hu(t){var a=Wu(t);a.next===null&&(a=t.alternate.memoizedState),Fi(t,a.next.queue,{},ua())}function pd(){return Nt(pn)}function Su(){return ft().memoizedState}function Au(){return ft().memoizedState}function Y5(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=ua();t=Ar(r);var e=Vr(a,t,r);e!==null&&($t(e,a,r),Ki(e,a,r)),a={cache:P1()},t.payload=a;return}a=a.return}}function X5(t,a,r){var e=ua();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},g2(t)?zu(a,r):(r=R1(t,a,r,e),r!==null&&($t(r,t,e),_u(r,a,e)))}function Vu(t,a,r){var e=ua();Fi(t,a,r,e)}function Fi(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(g2(t))zu(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,d=n(o,r);if(i.hasEagerState=!0,i.eagerState=d,sa(d,o))return d2(t,a,i,0),et===null&&l2(),!1}catch{}if(r=R1(t,a,i,e),r!==null)return $t(r,t,e),_u(r,a,e),!0}return!1}function fd(t,a,r,e){if(e={lane:2,revertLane:Cd(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},g2(t)){if(a)throw Error(m(479))}else a=R1(t,r,e,2),a!==null&&$t(a,t,2)}function g2(t){var a=t.alternate;return t===N||a!==null&&a===N}function zu(t,a){Je=Uo=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function _u(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,Lh(t,r)}}var un={readContext:Nt,use:u2,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st};un.useEffectEvent=st;var Tu={readContext:Nt,use:u2,useCallback:function(t,a){return Xt().memoizedState=[t,a===void 0?null:a],t},useContext:Nt,useEffect:x0,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,Mo(4194308,4,yu.bind(null,a,t),r)},useLayoutEffect:function(t,a){return Mo(4194308,4,t,a)},useInsertionEffect:function(t,a){Mo(4,2,t,a)},useMemo:function(t,a){var r=Xt();a=a===void 0?null:a;var e=t();if(ce){Cr(!0);try{t()}finally{Cr(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=Xt();if(r!==void 0){var i=r(a);if(ce){Cr(!0);try{r(a)}finally{Cr(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=X5.bind(null,N,t),[e.memoizedState,t]},useRef:function(t){var a=Xt();return t={current:t},a.memoizedState=t},useState:function(t){t=g1(t);var a=t.queue,r=Vu.bind(null,N,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:sd,useDeferredValue:function(t,a){var r=Xt();return gd(r,t,a)},useTransition:function(){var t=g1(!1);return t=ju.bind(null,N,t.queue,!0,!1),Xt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=N,i=Xt();if(X){if(r===void 0)throw Error(m(407));r=r()}else{if(r=a(),et===null)throw Error(m(349));(q&127)!==0||du(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,x0(hu.bind(null,e,n,t),[t]),e.flags|=2048,ai(9,{destroy:void 0},cu.bind(null,e,n,r,a),null),r},useId:function(){var t=Xt(),a=et.identifierPrefix;if(X){var r=Ea,e=Na;r=(e&~(1<<32-ha(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=Zo++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=D5++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:pd,useFormState:f0,useActionState:f0,useOptimistic:function(t){var a=Xt();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=fd.bind(null,N,!0,r),r.dispatch=a,[t,a]},useMemoCache:cd,useCacheRefresh:function(){return Xt().memoizedState=Y5.bind(null,N)},useEffectEvent:function(t){var a=Xt(),r={impl:t};return a.memoizedState=r,function(){if((K&2)!==0)throw Error(m(440));return r.impl.apply(void 0,arguments)}}},vd={readContext:Nt,use:u2,useCallback:Cu,useContext:Nt,useEffect:ud,useImperativeHandle:wu,useInsertionEffect:Mu,useLayoutEffect:mu,useMemo:bu,useReducer:Lo,useRef:xu,useState:function(){return Lo(cr)},useDebugValue:sd,useDeferredValue:function(t,a){var r=ft();return Bu(r,rt.memoizedState,t,a)},useTransition:function(){var t=Lo(cr)[0],a=ft().memoizedState;return[typeof t=="boolean"?t:Cn(t),a]},useSyncExternalStore:lu,useId:Su,useHostTransitionStatus:pd,useFormState:v0,useActionState:v0,useOptimistic:function(t,a){var r=ft();return gu(r,rt,t,a)},useMemoCache:cd,useCacheRefresh:Au};vd.useEffectEvent=Lu;var Nu={readContext:Nt,use:u2,useCallback:Cu,useContext:Nt,useEffect:ud,useImperativeHandle:wu,useInsertionEffect:Mu,useLayoutEffect:mu,useMemo:bu,useReducer:wl,useRef:xu,useState:function(){return wl(cr)},useDebugValue:sd,useDeferredValue:function(t,a){var r=ft();return rt===null?gd(r,t,a):Bu(r,rt.memoizedState,t,a)},useTransition:function(){var t=wl(cr)[0],a=ft().memoizedState;return[typeof t=="boolean"?t:Cn(t),a]},useSyncExternalStore:lu,useId:Su,useHostTransitionStatus:pd,useFormState:k0,useActionState:k0,useOptimistic:function(t,a){var r=ft();return rt!==null?gu(r,rt,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:cd,useCacheRefresh:Au};Nu.useEffectEvent=Lu;function Cl(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:dt({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var v1={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=ua(),i=Ar(e);i.payload=a,r!=null&&(i.callback=r),a=Vr(t,i,e),a!==null&&($t(a,t,e),Ki(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=ua(),i=Ar(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=Vr(t,i,e),a!==null&&($t(a,t,e),Ki(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=ua(),e=Ar(r);e.tag=2,a!=null&&(e.callback=a),a=Vr(t,e,r),a!==null&&($t(a,t,r),Ki(a,t,r))}};function L0(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!on(r,e)||!on(i,n):!0}function M0(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&v1.enqueueReplaceState(a,a.state,null)}function he(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=dt({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function Eu(t){zo(t)}function Du(t){console.error(t)}function Ou(t){zo(t)}function qo(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function m0(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function k1(t,a,r){return r=Ar(r),r.tag=3,r.payload={element:null},r.callback=function(){qo(t,a)},r}function Uu(t){return t=Ar(t),t.tag=3,t}function Zu(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){m0(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){m0(a,r,e),typeof i!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var d=e.stack;this.componentDidCatch(e.value,{componentStack:d!==null?d:""})})}function Q5(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&ci(a,r,i,!0),r=ga.current,r!==null){switch(r.tag){case 31:case 13:return Ca===null?Ko():r.alternate===null&&gt===0&&(gt=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===Eo?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),Tl(t,e,i)),!1;case 22:return r.flags|=65536,e===Eo?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),Tl(t,e,i)),!1}throw Error(m(435,r.tag))}return Tl(t,e,i),Ko(),!1}if(X)return a=ga.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==i1&&(t=Error(m(422),{cause:e}),dn(ya(t,r)))):(e!==i1&&(a=Error(m(423),{cause:e}),dn(ya(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=ya(e,r),i=k1(t.stateNode,e,i),yl(t,i),gt!==4&&(gt=2)),!1;var n=Error(m(520),{cause:e});if(n=ya(n,r),Pi===null?Pi=[n]:Pi.push(n),gt!==4&&(gt=2),a===null)return!0;e=ya(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=k1(r.stateNode,e,t),yl(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(zr===null||!zr.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=Uu(i),Zu(i,t,r,e),yl(r,i),!1}r=r.return}while(r!==null);return!1}var kd=Error(m(461)),yt=!1;function zt(t,a,r,e){a.child=t===null?au(a,null,r,e):de(a,t.child,r,e)}function y0(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var d in e)d!=="ref"&&(o[d]=e[d])}else o=e;return le(a),e=nd(t,a,r,o,n,i),d=od(),t!==null&&!yt?(ld(t,a,i),hr(t,a,i)):(X&&d&&$1(a),a.flags|=1,zt(t,a,e,i),a.child)}function w0(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!F1(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,qu(t,a,n,e,i)):(t=ko(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!xd(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:on,r(o,e)&&t.ref===a.ref)return hr(t,a,i)}return a.flags|=1,t=ir(n,e),t.ref=a.ref,t.return=a,a.child=t}function qu(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(on(n,e)&&t.ref===a.ref)if(yt=!1,a.pendingProps=e=n,xd(t,i))(t.flags&131072)!==0&&(yt=!0);else return a.lanes=t.lanes,hr(t,a,i)}return x1(t,a,r,e,i)}function Gu(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return C0(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&xo(a,n!==null?n.cachePool:null),n!==null?s0(a,n):u1(),iu(a);else return e=a.lanes=536870912,C0(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(xo(a,n.cachePool),s0(a,n),yr(a),a.memoizedState=null):(t!==null&&xo(a,null),u1(),yr(a));return zt(t,a,i,r),a.child}function Zi(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function C0(t,a,r,e,i){var n=td();return n=n===null?null:{parent:mt._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&xo(a,null),u1(),iu(a),t!==null&&ci(t,a,e,!0),a.childLanes=i,null}function mo(t,a){return a=Go({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function b0(t,a,r){return de(a,t.child,null,r),t=mo(a,a.pendingProps),t.flags|=2,na(a),a.memoizedState=null,t}function K5(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(X){if(e.mode==="hidden")return t=mo(a,e),a.lanes=536870912,Zi(null,t);if(s1(a),(t=lt)?(t=Ts(t,wa),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Dr!==null?{id:Na,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},r=Jh(t),r.return=a,a.child=r,Tt=a,lt=null)):t=null,t===null)throw Or(a);return a.lanes=536870912,null}return mo(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(s1(a),i)if(a.flags&256)a.flags&=-257,a=b0(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(m(558));else if(yt||ci(t,a,r,!1),i=(r&t.childLanes)!==0,yt||i){if(e=et,e!==null&&(o=Mh(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,pe(t,o),$t(e,t,o),kd;Ko(),a=b0(t,a,r)}else t=n.treeContext,lt=ba(o.nextSibling),Tt=a,X=!0,Sr=null,wa=!1,t!==null&&Fh(a,t),a=mo(a,e),a.flags|=4096;return a}return t=ir(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function yo(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(m(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function x1(t,a,r,e,i){return le(a),r=nd(t,a,r,e,void 0,i),e=od(),t!==null&&!yt?(ld(t,a,i),hr(t,a,i)):(X&&e&&$1(a),a.flags|=1,zt(t,a,r,i),a.child)}function B0(t,a,r,e,i,n){return le(a),a.updateQueue=null,r=ou(a,e,r,i),nu(t),e=od(),t!==null&&!yt?(ld(t,a,n),hr(t,a,n)):(X&&e&&$1(a),a.flags|=1,zt(t,a,r,n),a.child)}function j0(t,a,r,e,i){if(le(a),a.stateNode===null){var n=Oe,o=r.contextType;typeof o=="object"&&o!==null&&(n=Nt(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=v1,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},rd(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?Nt(o):Oe,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(Cl(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&v1.enqueueReplaceState(n,n.state,null),Ri(a,e,n,i),Ji(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var d=a.memoizedProps,h=he(r,d);n.props=h;var s=n.context,f=r.contextType;o=Oe,typeof f=="object"&&f!==null&&(o=Nt(f));var k=r.getDerivedStateFromProps;f=typeof k=="function"||typeof n.getSnapshotBeforeUpdate=="function",d=a.pendingProps!==d,f||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(d||s!==o)&&M0(a,n,e,o),Lr=!1;var p=a.memoizedState;n.state=p,Ri(a,e,n,i),Ji(),s=a.memoizedState,d||p!==s||Lr?(typeof k=="function"&&(Cl(a,r,k,e),s=a.memoizedState),(h=Lr||L0(a,r,h,e,p,s,o))?(f||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=s),n.props=e,n.state=s,n.context=o,e=h):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,c1(t,a),o=a.memoizedProps,f=he(r,o),n.props=f,k=a.pendingProps,p=n.context,s=r.contextType,h=Oe,typeof s=="object"&&s!==null&&(h=Nt(s)),d=r.getDerivedStateFromProps,(s=typeof d=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==k||p!==h)&&M0(a,n,e,h),Lr=!1,p=a.memoizedState,n.state=p,Ri(a,e,n,i),Ji();var x=a.memoizedState;o!==k||p!==x||Lr||t!==null&&t.dependencies!==null&&No(t.dependencies)?(typeof d=="function"&&(Cl(a,r,d,e),x=a.memoizedState),(f=Lr||L0(a,r,f,e,p,x,h)||t!==null&&t.dependencies!==null&&No(t.dependencies))?(s||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,x,h),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,x,h)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=x),n.props=e,n.state=x,n.context=h,e=f):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,yo(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=de(a,t.child,null,i),a.child=de(a,null,r,i)):zt(t,a,r,i),a.memoizedState=n.state,t=a.child):t=hr(t,a,i),t}function W0(t,a,r,e){return oe(),a.flags|=256,zt(t,a,r,e),a.child}var bl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bl(t){return{baseLanes:t,cachePool:Ih()}}function jl(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=la),t}function Yu(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(pt.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(X){if(i?mr(a):yr(a),(t=lt)?(t=Ts(t,wa),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Dr!==null?{id:Na,overflow:Ea}:null,retryLane:536870912,hydrationErrors:null},r=Jh(t),r.return=a,a.child=r,Tt=a,lt=null)):t=null,t===null)throw Or(a);return V1(t)?a.lanes=32:a.lanes=536870912,null}var d=e.children;return e=e.fallback,i?(yr(a),i=a.mode,d=Go({mode:"hidden",children:d},i),e=re(e,i,r,null),d.return=a,e.return=a,d.sibling=e,a.child=d,e=a.child,e.memoizedState=Bl(r),e.childLanes=jl(t,o,r),a.memoizedState=bl,Zi(null,e)):(mr(a),L1(a,d))}var h=t.memoizedState;if(h!==null&&(d=h.dehydrated,d!==null)){if(n)a.flags&256?(mr(a),a.flags&=-257,a=Wl(t,a,r)):a.memoizedState!==null?(yr(a),a.child=t.child,a.flags|=128,a=null):(yr(a),d=e.fallback,i=a.mode,e=Go({mode:"visible",children:e.children},i),d=re(d,i,r,null),d.flags|=2,e.return=a,d.return=a,e.sibling=d,a.child=e,de(a,t.child,null,r),e=a.child,e.memoizedState=Bl(r),e.childLanes=jl(t,o,r),a.memoizedState=bl,a=Zi(null,e));else if(mr(a),V1(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var s=o.dgst;o=s,e=Error(m(419)),e.stack="",e.digest=o,dn({value:e,source:null,stack:null}),a=Wl(t,a,r)}else if(yt||ci(t,a,r,!1),o=(r&t.childLanes)!==0,yt||o){if(o=et,o!==null&&(e=Mh(o,r),e!==0&&e!==h.retryLane))throw h.retryLane=e,pe(t,e),$t(o,t,e),kd;A1(d)||Ko(),a=Wl(t,a,r)}else A1(d)?(a.flags|=192,a.child=t.child,a=null):(t=h.treeContext,lt=ba(d.nextSibling),Tt=a,X=!0,Sr=null,wa=!1,t!==null&&Fh(a,t),a=L1(a,e.children),a.flags|=4096);return a}return i?(yr(a),d=e.fallback,i=a.mode,h=t.child,s=h.sibling,e=ir(h,{mode:"hidden",children:e.children}),e.subtreeFlags=h.subtreeFlags&65011712,s!==null?d=ir(s,d):(d=re(d,i,r,null),d.flags|=2),d.return=a,e.return=a,e.sibling=d,a.child=e,Zi(null,e),e=a.child,d=t.child.memoizedState,d===null?d=Bl(r):(i=d.cachePool,i!==null?(h=mt._currentValue,i=i.parent!==h?{parent:h,pool:h}:i):i=Ih(),d={baseLanes:d.baseLanes|r,cachePool:i}),e.memoizedState=d,e.childLanes=jl(t,o,r),a.memoizedState=bl,Zi(t.child,e)):(mr(a),r=t.child,t=r.sibling,r=ir(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function L1(t,a){return a=Go({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Go(t,a){return t=oa(22,t,null,a),t.lanes=0,t}function Wl(t,a,r){return de(a,t.child,null,r),t=L1(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function H0(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),o1(t.return,a,r)}function Hl(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function Xu(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=pt.current,d=(o&2)!==0;if(d?(o=o&1|2,a.flags|=128):o&=1,it(pt,o),zt(t,a,e,r),e=X?ln:0,!d&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&H0(t,r,a);else if(t.tag===19)H0(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&Oo(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),Hl(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&Oo(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Hl(a,!0,r,null,n,e);break;case"together":Hl(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function hr(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Zr|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(ci(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(m(153));if(a.child!==null){for(t=a.child,r=ir(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=ir(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function xd(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&No(t)))}function J5(t,a,r){switch(a.tag){case 3:Ho(a,a.stateNode.containerInfo),Mr(a,mt,t.memoizedState.cache),oe();break;case 27:case 5:Kl(a);break;case 4:Ho(a,a.stateNode.containerInfo);break;case 10:Mr(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,s1(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(mr(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Yu(t,a,r):(mr(a),t=hr(t,a,r),t!==null?t.sibling:null);mr(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||(ci(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return Xu(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),it(pt,pt.current),e)break;return null;case 22:return a.lanes=0,Gu(t,a,r,a.pendingProps);case 24:Mr(a,mt,t.memoizedState.cache)}return hr(t,a,r)}function Qu(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)yt=!0;else{if(!xd(t,r)&&(a.flags&128)===0)return yt=!1,J5(t,a,r);yt=(t.flags&131072)!==0}else yt=!1,X&&(a.flags&1048576)!==0&&Rh(a,ln,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=Pr(a.elementType),a.type=t,typeof t=="function")F1(t)?(e=he(t,e),a.tag=1,a=j0(null,a,t,e,r)):(a.tag=0,a=x1(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===N1){a.tag=11,a=y0(null,a,t,e,r);break t}else if(i===E1){a.tag=14,a=w0(null,a,t,e,r);break t}}throw a=Xl(t)||t,Error(m(306,a,""))}}return a;case 0:return x1(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=he(e,a.pendingProps),j0(t,a,e,i,r);case 3:t:{if(Ho(a,a.stateNode.containerInfo),t===null)throw Error(m(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,c1(t,a),Ri(a,e,null,r);var o=a.memoizedState;if(e=o.cache,Mr(a,mt,e),e!==n.cache&&l1(a,[mt],r,!0),Ji(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=W0(t,a,e,r);break t}else if(e!==i){i=ya(Error(m(424)),a),dn(i),a=W0(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,lt=ba(t.firstChild),Tt=a,X=!0,Sr=null,wa=!0,r=au(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(oe(),e===i){a=hr(t,a,r);break t}zt(t,a,e,r)}a=a.child}return a;case 26:return yo(t,a),t===null?(r=$0(a.type,null,a.pendingProps,null))?a.memoizedState=r:X||(r=a.type,t=a.pendingProps,e=$o(Hr.current).createElement(r),e[_t]=a,e[It]=t,Et(e,r,t),St(e),a.stateNode=e):a.memoizedState=$0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Kl(a),t===null&&X&&(e=a.stateNode=Ns(a.type,a.pendingProps,Hr.current),Tt=a,wa=!0,i=lt,Gr(a.type)?(z1=i,lt=ba(e.firstChild)):lt=i),zt(t,a,a.pendingProps.children,r),yo(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&X&&((i=e=lt)&&(e=wf(e,a.type,a.pendingProps,wa),e!==null?(a.stateNode=e,Tt=a,lt=ba(e.firstChild),wa=!1,i=!0):i=!1),i||Or(a)),Kl(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,H1(i,n)?e=null:o!==null&&H1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=nd(t,a,O5,null,null,r),pn._currentValue=i),yo(t,a),zt(t,a,e,r),a.child;case 6:return t===null&&X&&((t=r=lt)&&(r=Cf(r,a.pendingProps,wa),r!==null?(a.stateNode=r,Tt=a,lt=null,t=!0):t=!1),t||Or(a)),null;case 13:return Yu(t,a,r);case 4:return Ho(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=de(a,null,e,r):zt(t,a,e,r),a.child;case 11:return y0(t,a,a.type,a.pendingProps,r);case 7:return zt(t,a,a.pendingProps,r),a.child;case 8:return zt(t,a,a.pendingProps.children,r),a.child;case 12:return zt(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,Mr(a,a.type,e.value),zt(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,le(a),i=Nt(i),e=e(i),a.flags|=1,zt(t,a,e,r),a.child;case 14:return w0(t,a,a.type,a.pendingProps,r);case 15:return qu(t,a,a.type,a.pendingProps,r);case 19:return Xu(t,a,r);case 31:return K5(t,a,r);case 22:return Gu(t,a,r,a.pendingProps);case 24:return le(a),e=Nt(mt),t===null?(i=td(),i===null&&(i=et,n=P1(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},rd(a),Mr(a,mt,i)):((t.lanes&r)!==0&&(c1(t,a),Ri(a,null,null,r),Ji()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),Mr(a,mt,e)):(e=n.cache,Mr(a,mt,e),e!==i.cache&&l1(a,[mt],r,!0))),zt(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(m(156,a.tag))}function Ra(t){t.flags|=4}function Sl(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(vs())t.flags|=8192;else throw ie=Eo,ad}else t.flags&=-16777217}function S0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Os(a))if(vs())t.flags|=8192;else throw ie=Eo,ad}function no(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?kh():536870912,t.lanes|=a,ri|=a)}function _i(t,a){if(!X)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function ot(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function R5(t,a,r){var e=a.pendingProps;switch(I1(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(a),null;case 1:return ot(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),nr(mt),Fe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(je(a)?Ra(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,ml())),ot(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(Ra(a),n!==null?(ot(a),S0(a,n)):(ot(a),Sl(a,i,null,e,r))):n?n!==t.memoizedState?(Ra(a),ot(a),S0(a,n)):(ot(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&Ra(a),ot(a),Sl(a,i,t,e,r)),null;case 27:if(So(a),r=Hr.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ra(a);else{if(!e){if(a.stateNode===null)throw Error(m(166));return ot(a),null}t=Oa.current,je(a)?n0(a,t):(t=Ns(i,e,r),a.stateNode=t,Ra(a))}return ot(a),null;case 5:if(So(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ra(a);else{if(!e){if(a.stateNode===null)throw Error(m(166));return ot(a),null}if(n=Oa.current,je(a))n0(a,n);else{var o=$o(Hr.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[_t]=a,n[It]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(Et(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ra(a)}}return ot(a),Sl(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&Ra(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(m(166));if(t=Hr.current,je(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=Tt,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[_t]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||Vs(t.nodeValue,r)),t||Or(a,!0)}else t=$o(t).createTextNode(e),t[_t]=a,a.stateNode=t}return ot(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=je(a),r!==null){if(t===null){if(!e)throw Error(m(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[_t]=a}else oe(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ot(a),t=!1}else r=ml(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?(na(a),a):(na(a),null);if((a.flags&128)!==0)throw Error(m(558))}return ot(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=je(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(m(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[_t]=a}else oe(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ot(a),i=!1}else i=ml(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(na(a),a):(na(a),null)}return na(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),no(a,a.updateQueue),ot(a),null);case 4:return Fe(),t===null&&bd(a.stateNode.containerInfo),ot(a),null;case 10:return nr(a.type),ot(a),null;case 19:if(At(pt),e=a.memoizedState,e===null)return ot(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)_i(e,!1);else{if(gt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=Oo(t),n!==null){for(a.flags|=128,_i(e,!1),t=n.updateQueue,a.updateQueue=t,no(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)Kh(r,t),r=r.sibling;return it(pt,pt.current&1|2),X&&Pa(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&da()>Xo&&(a.flags|=128,i=!0,_i(e,!1),a.lanes=4194304)}else{if(!i)if(t=Oo(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,no(a,t),_i(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!X)return ot(a),null}else 2*da()-e.renderingStartTime>Xo&&r!==536870912&&(a.flags|=128,i=!0,_i(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=da(),t.sibling=null,r=pt.current,it(pt,i?r&1|2:r&1),X&&Pa(a,e.treeForkCount),t):(ot(a),null);case 22:case 23:return na(a),ed(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(ot(a),a.subtreeFlags&6&&(a.flags|=8192)):ot(a),r=a.updateQueue,r!==null&&no(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&At(ee),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),nr(mt),ot(a),null;case 25:return null;case 30:return null}throw Error(m(156,a.tag))}function F5(t,a){switch(I1(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return nr(mt),Fe(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return So(a),null;case 31:if(a.memoizedState!==null){if(na(a),a.alternate===null)throw Error(m(340));oe()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(na(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(m(340));oe()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return At(pt),null;case 4:return Fe(),null;case 10:return nr(a.type),null;case 22:case 23:return na(a),ed(),t!==null&&At(ee),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return nr(mt),null;case 25:return null;default:return null}}function Ku(t,a){switch(I1(a),a.tag){case 3:nr(mt),Fe();break;case 26:case 27:case 5:So(a);break;case 4:Fe();break;case 31:a.memoizedState!==null&&na(a);break;case 13:na(a);break;case 19:At(pt);break;case 10:nr(a.type);break;case 22:case 23:na(a),ed(),t!==null&&At(ee);break;case 24:nr(mt)}}function bn(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(d){P(a,a.return,d)}}function Ur(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,i=a;var h=r,s=d;try{s()}catch(f){P(i,h,f)}}}e=e.next}while(e!==n)}}catch(f){P(a,a.return,f)}}function Ju(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{eu(a,r)}catch(e){P(t,t.return,e)}}}function Ru(t,a,r){r.props=he(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){P(t,a,e)}}function $i(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){P(t,a,i)}}function Da(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){P(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){P(t,a,i)}else r.current=null}function Fu(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){P(t,t.return,i)}}function Al(t,a,r){try{var e=t.stateNode;kf(e,t.type,r,a),e[It]=a}catch(i){P(t,t.return,i)}}function $u(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Gr(t.type)||t.tag===4}function Vl(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$u(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Gr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function M1(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=rr));else if(e!==4&&(e===27&&Gr(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(M1(t,a,r),t=t.sibling;t!==null;)M1(t,a,r),t=t.sibling}function Yo(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&Gr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Yo(t,a,r),t=t.sibling;t!==null;)Yo(t,a,r),t=t.sibling}function Iu(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Et(a,e,r),a[_t]=t,a[It]=r}catch(n){P(t,t.return,n)}}var tr=!1,Mt=!1,zl=!1,A0=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function $5(t,a){if(t=t.containerInfo,j1=a2,t=Oh(t),K1(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,d=-1,h=-1,s=0,f=0,k=t,p=null;a:for(;;){for(var x;k!==r||i!==0&&k.nodeType!==3||(d=o+i),k!==n||e!==0&&k.nodeType!==3||(h=o+e),k.nodeType===3&&(o+=k.nodeValue.length),(x=k.firstChild)!==null;)p=k,k=x;for(;;){if(k===t)break a;if(p===r&&++s===i&&(d=o),p===n&&++f===e&&(h=o),(x=k.nextSibling)!==null)break;k=p,p=k.parentNode}k=x}r=d===-1||h===-1?null:{start:d,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(W1={focusedElem:t,selectionRange:r},a2=!1,Ht=a;Ht!==null;)if(a=Ht,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Ht=t;else for(;Ht!==null;){switch(a=Ht,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var y=he(r.type,i);t=e.getSnapshotBeforeUpdate(y,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(C){P(r,r.return,C)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)S1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":S1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=a.sibling,t!==null){t.return=a.return,Ht=t;break}Ht=a.return}}function Pu(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:$a(t,r),e&4&&bn(5,r);break;case 1:if($a(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){P(r,r.return,o)}else{var i=he(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){P(r,r.return,o)}}e&64&&Ju(r),e&512&&$i(r,r.return);break;case 3:if($a(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{eu(t,a)}catch(o){P(r,r.return,o)}}break;case 27:a===null&&e&4&&Iu(r);case 26:case 5:$a(t,r),a===null&&e&4&&Fu(r),e&512&&$i(r,r.return);break;case 12:$a(t,r);break;case 31:$a(t,r),e&4&&rs(t,r);break;case 13:$a(t,r),e&4&&es(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=lf.bind(null,r),bf(t,r))));break;case 22:if(e=r.memoizedState!==null||tr,!e){a=a!==null&&a.memoizedState!==null||Mt,i=tr;var n=Mt;tr=e,(Mt=a)&&!n?Ia(t,r,(r.subtreeFlags&8772)!==0):$a(t,r),tr=i,Mt=n}break;case 30:break;default:$a(t,r)}}function ts(t){var a=t.alternate;a!==null&&(t.alternate=null,ts(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&Z1(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ut=null,Rt=!1;function Fa(t,a,r){for(r=r.child;r!==null;)as(t,a,r),r=r.sibling}function as(t,a,r){if(ca&&typeof ca.onCommitFiberUnmount=="function")try{ca.onCommitFiberUnmount(xn,r)}catch{}switch(r.tag){case 26:Mt||Da(r,a),Fa(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Mt||Da(r,a);var e=ut,i=Rt;Gr(r.type)&&(ut=r.stateNode,Rt=!1),Fa(t,a,r),an(r.stateNode),ut=e,Rt=i;break;case 5:Mt||Da(r,a);case 6:if(e=ut,i=Rt,ut=null,Fa(t,a,r),ut=e,Rt=i,ut!==null)if(Rt)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(r.stateNode)}catch(n){P(r,a,n)}else try{ut.removeChild(r.stateNode)}catch(n){P(r,a,n)}break;case 18:ut!==null&&(Rt?(t=ut,Q0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),oi(t)):Q0(ut,r.stateNode));break;case 4:e=ut,i=Rt,ut=r.stateNode.containerInfo,Rt=!0,Fa(t,a,r),ut=e,Rt=i;break;case 0:case 11:case 14:case 15:Ur(2,r,a),Mt||Ur(4,r,a),Fa(t,a,r);break;case 1:Mt||(Da(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&Ru(r,a,e)),Fa(t,a,r);break;case 21:Fa(t,a,r);break;case 22:Mt=(e=Mt)||r.memoizedState!==null,Fa(t,a,r),Mt=e;break;default:Fa(t,a,r)}}function rs(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{oi(t)}catch(r){P(a,a.return,r)}}}function es(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{oi(t)}catch(r){P(a,a.return,r)}}function I5(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new A0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new A0),a;default:throw Error(m(435,t.tag))}}function oo(t,a){var r=I5(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=df.bind(null,t,e);e.then(i,i)}})}function Kt(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,d=o;t:for(;d!==null;){switch(d.tag){case 27:if(Gr(d.type)){ut=d.stateNode,Rt=!1;break t}break;case 5:ut=d.stateNode,Rt=!1;break t;case 3:case 4:ut=d.stateNode.containerInfo,Rt=!0;break t}d=d.return}if(ut===null)throw Error(m(160));as(n,o,i),ut=null,Rt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)is(a,t),a=a.sibling}var Aa=null;function is(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kt(a,t),Jt(t),e&4&&(Ur(3,t,t.return),bn(3,t),Ur(5,t,t.return));break;case 1:Kt(a,t),Jt(t),e&512&&(Mt||r===null||Da(r,r.return)),e&64&&tr&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=Aa;if(Kt(a,t),Jt(t),e&512&&(Mt||r===null||Da(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[mn]||n[_t]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),Et(n,e,r),n[_t]=t,St(n),e=n;break t;case"link":var o=P0("link","href",i).get(e+(r.href||""));if(o){for(var d=0;d<o.length;d++)if(n=o[d],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(d,1);break a}}n=i.createElement(e),Et(n,e,r),i.head.appendChild(n);break;case"meta":if(o=P0("meta","content",i).get(e+(r.content||""))){for(d=0;d<o.length;d++)if(n=o[d],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(d,1);break a}}n=i.createElement(e),Et(n,e,r),i.head.appendChild(n);break;default:throw Error(m(468,e))}n[_t]=t,St(n),e=n}t.stateNode=e}else th(i,t.type,t.stateNode);else t.stateNode=I0(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?th(i,t.type,t.stateNode):I0(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&Al(t,t.memoizedProps,r.memoizedProps)}break;case 27:Kt(a,t),Jt(t),e&512&&(Mt||r===null||Da(r,r.return)),r!==null&&e&4&&Al(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Kt(a,t),Jt(t),e&512&&(Mt||r===null||Da(r,r.return)),t.flags&32){i=t.stateNode;try{Ie(i,"")}catch(y){P(t,t.return,y)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,Al(t,i,r!==null?r.memoizedProps:i)),e&1024&&(zl=!0);break;case 6:if(Kt(a,t),Jt(t),e&4){if(t.stateNode===null)throw Error(m(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(y){P(t,t.return,y)}}break;case 3:if(bo=null,i=Aa,Aa=Io(a.containerInfo),Kt(a,t),Aa=i,Jt(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{oi(a.containerInfo)}catch(y){P(t,t.return,y)}zl&&(zl=!1,ns(t));break;case 4:e=Aa,Aa=Io(t.stateNode.containerInfo),Kt(a,t),Jt(t),Aa=e;break;case 12:Kt(a,t),Jt(t);break;case 31:Kt(a,t),Jt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,oo(t,e)));break;case 13:Kt(a,t),Jt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(p2=da()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,oo(t,e)));break;case 22:i=t.memoizedState!==null;var h=r!==null&&r.memoizedState!==null,s=tr,f=Mt;if(tr=s||i,Mt=f||h,Kt(a,t),Mt=f,tr=s,Jt(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||h||tr||Mt||te(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){h=r=a;try{if(n=h.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=h.stateNode;var k=h.memoizedProps.style,p=k!=null&&k.hasOwnProperty("display")?k.display:null;d.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){P(h,h.return,y)}}}else if(a.tag===6){if(r===null){h=a;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(y){P(h,h.return,y)}}}else if(a.tag===18){if(r===null){h=a;try{var x=h.stateNode;i?K0(x,!0):K0(h.stateNode,!1)}catch(y){P(h,h.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,oo(t,r))));break;case 19:Kt(a,t),Jt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,oo(t,e)));break;case 30:break;case 21:break;default:Kt(a,t),Jt(t)}}function Jt(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if($u(e)){r=e;break}e=e.return}if(r==null)throw Error(m(160));switch(r.tag){case 27:var i=r.stateNode,n=Vl(t);Yo(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(Ie(o,""),r.flags&=-33);var d=Vl(t);Yo(t,d,o);break;case 3:case 4:var h=r.stateNode.containerInfo,s=Vl(t);M1(t,s,h);break;default:throw Error(m(161))}}catch(f){P(t,t.return,f)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function ns(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;ns(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function $a(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Pu(t,a.alternate,a),a=a.sibling}function te(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Ur(4,a,a.return),te(a);break;case 1:Da(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Ru(a,a.return,r),te(a);break;case 27:an(a.stateNode);case 26:case 5:Da(a,a.return),te(a);break;case 22:a.memoizedState===null&&te(a);break;case 30:te(a);break;default:te(a)}t=t.sibling}}function Ia(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:Ia(i,n,r),bn(4,n);break;case 1:if(Ia(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(s){P(e,e.return,s)}if(e=n,i=e.updateQueue,i!==null){var d=e.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)ru(h[i],d)}catch(s){P(e,e.return,s)}}r&&o&64&&Ju(n),$i(n,n.return);break;case 27:Iu(n);case 26:case 5:Ia(i,n,r),r&&e===null&&o&4&&Fu(n),$i(n,n.return);break;case 12:Ia(i,n,r);break;case 31:Ia(i,n,r),r&&o&4&&rs(i,n);break;case 13:Ia(i,n,r),r&&o&4&&es(i,n);break;case 22:n.memoizedState===null&&Ia(i,n,r),$i(n,n.return);break;case 30:break;default:Ia(i,n,r)}a=a.sibling}}function Ld(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&wn(r))}function Md(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&wn(t))}function Sa(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)os(t,a,r,e),a=a.sibling}function os(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(t,a,r,e),i&2048&&bn(9,a);break;case 1:Sa(t,a,r,e);break;case 3:Sa(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&wn(t)));break;case 12:if(i&2048){Sa(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,d=n.onPostCommit;typeof d=="function"&&d(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){P(a,a.return,h)}}else Sa(t,a,r,e);break;case 31:Sa(t,a,r,e);break;case 13:Sa(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?Sa(t,a,r,e):Ii(t,a):n._visibility&2?Sa(t,a,r,e):(n._visibility|=2,He(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&Ld(o,a);break;case 24:Sa(t,a,r,e),i&2048&&Md(a.alternate,a);break;default:Sa(t,a,r,e)}}function He(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,d=r,h=e,s=o.flags;switch(o.tag){case 0:case 11:case 15:He(n,o,d,h,i),bn(8,o);break;case 23:break;case 22:var f=o.stateNode;o.memoizedState!==null?f._visibility&2?He(n,o,d,h,i):Ii(n,o):(f._visibility|=2,He(n,o,d,h,i)),i&&s&2048&&Ld(o.alternate,o);break;case 24:He(n,o,d,h,i),i&&s&2048&&Md(o.alternate,o);break;default:He(n,o,d,h,i)}a=a.sibling}}function Ii(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:Ii(r,e),i&2048&&Ld(e.alternate,e);break;case 24:Ii(r,e),i&2048&&Md(e.alternate,e);break;default:Ii(r,e)}a=a.sibling}}var qi=8192;function We(t,a,r){if(t.subtreeFlags&qi)for(t=t.child;t!==null;)ls(t,a,r),t=t.sibling}function ls(t,a,r){switch(t.tag){case 26:We(t,a,r),t.flags&qi&&t.memoizedState!==null&&Ef(r,Aa,t.memoizedState,t.memoizedProps);break;case 5:We(t,a,r);break;case 3:case 4:var e=Aa;Aa=Io(t.stateNode.containerInfo),We(t,a,r),Aa=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=qi,qi=16777216,We(t,a,r),qi=e):We(t,a,r));break;default:We(t,a,r)}}function ds(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function Ti(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];Ht=e,hs(e,t)}ds(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cs(t),t=t.sibling}function cs(t){switch(t.tag){case 0:case 11:case 15:Ti(t),t.flags&2048&&Ur(9,t,t.return);break;case 3:Ti(t);break;case 12:Ti(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,wo(t)):Ti(t);break;default:Ti(t)}}function wo(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];Ht=e,hs(e,t)}ds(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Ur(8,a,a.return),wo(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,wo(a));break;default:wo(a)}t=t.sibling}}function hs(t,a){for(;Ht!==null;){var r=Ht;switch(r.tag){case 0:case 11:case 15:Ur(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:wn(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,Ht=e;else t:for(r=t;Ht!==null;){e=Ht;var i=e.sibling,n=e.return;if(ts(e),e===r){Ht=null;break t}if(i!==null){i.return=n,Ht=i;break t}Ht=n}}}var P5={getCacheForType:function(t){var a=Nt(mt),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return Nt(mt).controller.signal}},tf=typeof WeakMap=="function"?WeakMap:Map,K=0,et=null,Z=null,q=0,I=0,ia=null,Br=!1,ui=!1,md=!1,ur=0,gt=0,Zr=0,ne=0,yd=0,la=0,ri=0,Pi=null,Ft=null,m1=!1,p2=0,us=0,Xo=1/0,Qo=null,zr=null,Ct=0,_r=null,ei=null,or=0,y1=0,w1=null,ss=null,tn=0,C1=null;function ua(){return(K&2)!==0&&q!==0?q&-q:V.T!==null?Cd():mh()}function gs(){if(la===0)if((q&536870912)===0||X){var t=Fn;Fn<<=1,(Fn&3932160)===0&&(Fn=262144),la=t}else la=536870912;return t=ga.current,t!==null&&(t.flags|=32),la}function $t(t,a,r){(t===et&&(I===2||I===9)||t.cancelPendingCommit!==null)&&(ii(t,0),jr(t,q,la,!1)),Mn(t,r),((K&2)===0||t!==et)&&(t===et&&((K&2)===0&&(ne|=r),gt===4&&jr(t,q,la,!1)),Za(t))}function ps(t,a,r){if((K&6)!==0)throw Error(m(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||Ln(t,a),i=e?ef(t,a):_l(t,a,!0),n=e;do{if(i===0){ui&&!e&&jr(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!af(r)){i=_l(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var d=t;i=Pi;var h=d.current.memoizedState.isDehydrated;if(h&&(ii(d,o).flags|=256),o=_l(d,o,!1),o!==2){if(md&&!h){d.errorRecoveryDisabledLanes|=n,ne|=n,i=4;break t}n=Ft,Ft=i,n!==null&&(Ft===null?Ft=n:Ft.push.apply(Ft,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){ii(t,0),jr(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(m(345));case 4:if((a&4194048)!==a)break;case 6:jr(e,a,la,!Br);break t;case 2:Ft=null;break;case 3:case 5:break;default:throw Error(m(329))}if((a&62914560)===a&&(i=p2+300-da(),10<i)){if(jr(e,a,la,!Br),e2(e,0,!0)!==0)break t;or=a,e.timeoutHandle=_s(V0.bind(null,e,r,Ft,Qo,m1,a,la,ne,ri,Br,n,"Throttled",-0,0),i);break t}V0(e,r,Ft,Qo,m1,a,la,ne,ri,Br,n,null,-0,0)}}break}while(!0);Za(t)}function V0(t,a,r,e,i,n,o,d,h,s,f,k,p,x){if(t.timeoutHandle=-1,k=a.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rr},ls(a,n,k);var y=(n&62914560)===n?p2-da():(n&4194048)===n?us-da():0;if(y=Df(k,y),y!==null){or=n,t.cancelPendingCommit=y(_0.bind(null,t,a,n,r,e,i,o,d,h,f,k,null,p,x)),jr(t,n,o,!s);return}}_0(t,a,n,r,e,i,o,d,h)}function af(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!sa(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function jr(t,a,r,e){a&=~yd,a&=~ne,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-ha(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&xh(t,r,a)}function f2(){return(K&6)===0?(Bn(0,!1),!1):!0}function wd(){if(Z!==null){if(I===0)var t=Z.return;else t=Z,er=fe=null,dd(t),Ke=null,cn=0,t=Z;for(;t!==null;)Ku(t.alternate,t),t=t.return;Z=null}}function ii(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Mf(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),or=0,wd(),et=t,Z=r=ir(t.current,null),q=a,I=0,ia=null,Br=!1,ui=Ln(t,a),md=!1,ri=la=yd=ne=Zr=gt=0,Ft=Pi=null,m1=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-ha(e),n=1<<i;a|=t[i],e&=~n}return ur=a,l2(),r}function fs(t,a){N=null,V.H=un,a===hi||a===c2?(a=h0(),I=3):a===ad?(a=h0(),I=4):I=a===kd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ia=a,Z===null&&(gt=1,qo(t,ya(a,t.current)))}function vs(){var t=ga.current;return t===null?!0:(q&4194048)===q?Ca===null:(q&62914560)===q||(q&536870912)!==0?t===Ca:!1}function ks(){var t=V.H;return V.H=un,t===null?un:t}function xs(){var t=V.A;return V.A=P5,t}function Ko(){gt=4,Br||(q&4194048)!==q&&ga.current!==null||(ui=!0),(Zr&134217727)===0&&(ne&134217727)===0||et===null||jr(et,q,la,!1)}function _l(t,a,r){var e=K;K|=2;var i=ks(),n=xs();(et!==t||q!==a)&&(Qo=null,ii(t,a)),a=!1;var o=gt;t:do try{if(I!==0&&Z!==null){var d=Z,h=ia;switch(I){case 8:wd(),o=6;break t;case 3:case 2:case 9:case 6:ga.current===null&&(a=!0);var s=I;if(I=0,ia=null,qe(t,d,h,s),r&&ui){o=0;break t}break;default:s=I,I=0,ia=null,qe(t,d,h,s)}}rf(),o=gt;break}catch(f){fs(t,f)}while(!0);return a&&t.shellSuspendCounter++,er=fe=null,K=e,V.H=i,V.A=n,Z===null&&(et=null,q=0,l2()),o}function rf(){for(;Z!==null;)Ls(Z)}function ef(t,a){var r=K;K|=2;var e=ks(),i=xs();et!==t||q!==a?(Qo=null,Xo=da()+500,ii(t,a)):ui=Ln(t,a);t:do try{if(I!==0&&Z!==null){a=Z;var n=ia;a:switch(I){case 1:I=0,ia=null,qe(t,a,n,1);break;case 2:case 9:if(c0(n)){I=0,ia=null,z0(a);break}a=function(){I!==2&&I!==9||et!==t||(I=7),Za(t)},n.then(a,a);break t;case 3:I=7;break t;case 4:I=5;break t;case 7:c0(n)?(I=0,ia=null,z0(a)):(I=0,ia=null,qe(t,a,n,7));break;case 5:var o=null;switch(Z.tag){case 26:o=Z.memoizedState;case 5:case 27:var d=Z;if(o?Os(o):d.stateNode.complete){I=0,ia=null;var h=d.sibling;if(h!==null)Z=h;else{var s=d.return;s!==null?(Z=s,v2(s)):Z=null}break a}}I=0,ia=null,qe(t,a,n,5);break;case 6:I=0,ia=null,qe(t,a,n,6);break;case 8:wd(),gt=6;break t;default:throw Error(m(462))}}nf();break}catch(f){fs(t,f)}while(!0);return er=fe=null,V.H=e,V.A=i,K=r,Z!==null?0:(et=null,q=0,l2(),gt)}function nf(){for(;Z!==null&&!jp();)Ls(Z)}function Ls(t){var a=Qu(t.alternate,t,ur);t.memoizedProps=t.pendingProps,a===null?v2(t):Z=a}function z0(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=B0(r,a,a.pendingProps,a.type,void 0,q);break;case 11:a=B0(r,a,a.pendingProps,a.type.render,a.ref,q);break;case 5:dd(a);default:Ku(r,a),a=Z=Kh(a,ur),a=Qu(r,a,ur)}t.memoizedProps=t.pendingProps,a===null?v2(t):Z=a}function qe(t,a,r,e){er=fe=null,dd(a),Ke=null,cn=0;var i=a.return;try{if(Q5(t,i,a,r,q)){gt=1,qo(t,ya(r,t.current)),Z=null;return}}catch(n){if(i!==null)throw Z=i,n;gt=1,qo(t,ya(r,t.current)),Z=null;return}a.flags&32768?(X||e===1?t=!0:ui||(q&536870912)!==0?t=!1:(Br=t=!0,(e===2||e===9||e===3||e===6)&&(e=ga.current,e!==null&&e.tag===13&&(e.flags|=16384))),Ms(a,t)):v2(a)}function v2(t){var a=t;do{if((a.flags&32768)!==0){Ms(a,Br);return}t=a.return;var r=R5(a.alternate,a,ur);if(r!==null){Z=r;return}if(a=a.sibling,a!==null){Z=a;return}Z=a=t}while(a!==null);gt===0&&(gt=5)}function Ms(t,a){do{var r=F5(t.alternate,t);if(r!==null){r.flags&=32767,Z=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){Z=t;return}Z=t=r}while(t!==null);gt=6,Z=null}function _0(t,a,r,e,i,n,o,d,h){t.cancelPendingCommit=null;do k2();while(Ct!==0);if((K&6)!==0)throw Error(m(327));if(a!==null){if(a===t.current)throw Error(m(177));if(n=a.lanes|a.childLanes,n|=J1,Ep(t,r,n,o,d,h),t===et&&(Z=et=null,q=0),ei=a,_r=t,or=r,y1=n,w1=i,ss=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,cf(Ao,function(){return bs(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=V.T,V.T=null,i=J.p,J.p=2,o=K,K|=4;try{$5(t,a,r)}finally{K=o,J.p=i,V.T=e}}Ct=1,ms(),ys(),ws()}}function ms(){if(Ct===1){Ct=0;var t=_r,a=ei,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=V.T,V.T=null;var e=J.p;J.p=2;var i=K;K|=4;try{is(a,t);var n=W1,o=Oh(t.containerInfo),d=n.focusedElem,h=n.selectionRange;if(o!==d&&d&&d.ownerDocument&&Dh(d.ownerDocument.documentElement,d)){if(h!==null&&K1(d)){var s=h.start,f=h.end;if(f===void 0&&(f=s),"selectionStart"in d)d.selectionStart=s,d.selectionEnd=Math.min(f,d.value.length);else{var k=d.ownerDocument||document,p=k&&k.defaultView||window;if(p.getSelection){var x=p.getSelection(),y=d.textContent.length,C=Math.min(h.start,y),E=h.end===void 0?C:Math.min(h.end,y);!x.extend&&C>E&&(o=E,E=C,C=o);var g=r0(d,C),u=r0(d,E);if(g&&u&&(x.rangeCount!==1||x.anchorNode!==g.node||x.anchorOffset!==g.offset||x.focusNode!==u.node||x.focusOffset!==u.offset)){var v=k.createRange();v.setStart(g.node,g.offset),x.removeAllRanges(),C>E?(x.addRange(v),x.extend(u.node,u.offset)):(v.setEnd(u.node,u.offset),x.addRange(v))}}}}for(k=[],x=d;x=x.parentNode;)x.nodeType===1&&k.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<k.length;d++){var L=k[d];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}a2=!!j1,W1=j1=null}finally{K=i,J.p=e,V.T=r}}t.current=a,Ct=2}}function ys(){if(Ct===2){Ct=0;var t=_r,a=ei,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=V.T,V.T=null;var e=J.p;J.p=2;var i=K;K|=4;try{Pu(t,a.alternate,a)}finally{K=i,J.p=e,V.T=r}}Ct=3}}function ws(){if(Ct===4||Ct===3){Ct=0,Wp();var t=_r,a=ei,r=or,e=ss;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Ct=5:(Ct=0,ei=_r=null,Cs(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(zr=null),U1(r),a=a.stateNode,ca&&typeof ca.onCommitFiberRoot=="function")try{ca.onCommitFiberRoot(xn,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=V.T,i=J.p,J.p=2,V.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var d=e[o];n(d.value,{componentStack:d.stack})}}finally{V.T=a,J.p=i}}(or&3)!==0&&k2(),Za(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===C1?tn++:(tn=0,C1=t):tn=0,Bn(0,!1)}}function Cs(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,wn(a)))}function k2(){return ms(),ys(),ws(),bs()}function bs(){if(Ct!==5)return!1;var t=_r,a=y1;y1=0;var r=U1(or),e=V.T,i=J.p;try{J.p=32>r?32:r,V.T=null,r=w1,w1=null;var n=_r,o=or;if(Ct=0,ei=_r=null,or=0,(K&6)!==0)throw Error(m(331));var d=K;if(K|=4,cs(n.current),os(n,n.current,o,r),K=d,Bn(0,!1),ca&&typeof ca.onPostCommitFiberRoot=="function")try{ca.onPostCommitFiberRoot(xn,n)}catch{}return!0}finally{J.p=i,V.T=e,Cs(t,a)}}function T0(t,a,r){a=ya(r,a),a=k1(t.stateNode,a,2),t=Vr(t,a,2),t!==null&&(Mn(t,2),Za(t))}function P(t,a,r){if(t.tag===3)T0(t,t,r);else for(;a!==null;){if(a.tag===3){T0(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(zr===null||!zr.has(e))){t=ya(r,t),r=Uu(2),e=Vr(a,r,2),e!==null&&(Zu(r,e,a,t),Mn(e,2),Za(e));break}}a=a.return}}function Tl(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new tf;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(md=!0,i.add(r),t=of.bind(null,t,a,r),a.then(t,t))}function of(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,et===t&&(q&r)===r&&(gt===4||gt===3&&(q&62914560)===q&&300>da()-p2?(K&2)===0&&ii(t,0):yd|=r,ri===q&&(ri=0)),Za(t)}function Bs(t,a){a===0&&(a=kh()),t=pe(t,a),t!==null&&(Mn(t,a),Za(t))}function lf(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),Bs(t,r)}function df(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(m(314))}e!==null&&e.delete(a),Bs(t,r)}function cf(t,a){return D1(t,a)}var Jo=null,Se=null,b1=!1,Ro=!1,Nl=!1,Wr=0;function Za(t){t!==Se&&t.next===null&&(Se===null?Jo=Se=t:Se=Se.next=t),Ro=!0,b1||(b1=!0,uf())}function Bn(t,a){if(!Nl&&Ro){Nl=!0;do for(var r=!1,e=Jo;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,d=e.pingedLanes;n=(1<<31-ha(42|t)+1)-1,n&=i&~(o&~d),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,N0(e,n))}else n=q,n=e2(e,e===et?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||Ln(e,n)||(r=!0,N0(e,n));e=e.next}while(r);Nl=!1}}function hf(){js()}function js(){Ro=b1=!1;var t=0;Wr!==0&&Lf()&&(t=Wr);for(var a=da(),r=null,e=Jo;e!==null;){var i=e.next,n=Ws(e,a);n===0?(e.next=null,r===null?Jo=i:r.next=i,i===null&&(Se=r)):(r=e,(t!==0||(n&3)!==0)&&(Ro=!0)),e=i}Ct!==0&&Ct!==5||Bn(t,!1),Wr!==0&&(Wr=0)}function Ws(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-ha(n),d=1<<o,h=i[o];h===-1?((d&r)===0||(d&e)!==0)&&(i[o]=Np(d,a)):h<=a&&(t.expiredLanes|=d),n&=~d}if(a=et,r=q,r=e2(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(I===2||I===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&ul(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ln(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&ul(e),U1(r)){case 2:case 8:r=fh;break;case 32:r=Ao;break;case 268435456:r=vh;break;default:r=Ao}return e=Hs.bind(null,t),r=D1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&ul(e),t.callbackPriority=2,t.callbackNode=null,2}function Hs(t,a){if(Ct!==0&&Ct!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(k2()&&t.callbackNode!==r)return null;var e=q;return e=e2(t,t===et?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(ps(t,e,a),Ws(t,da()),t.callbackNode!=null&&t.callbackNode===r?Hs.bind(null,t):null)}function N0(t,a){if(k2())return null;ps(t,a,!0)}function uf(){mf(function(){(K&6)!==0?D1(ph,hf):js()})}function Cd(){if(Wr===0){var t=Pe;t===0&&(t=Rn,Rn<<=1,(Rn&261888)===0&&(Rn=256)),Wr=t}return Wr}function E0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:po(""+t)}function D0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function sf(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=E0((i[It]||null).action),o=e.submitter;o&&(a=(a=o[It]||null)?E0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var d=new i2("action","action",null,e,i);t.push({event:d,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Wr!==0){var h=o?D0(i,o):new FormData(i);f1(r,{pending:!0,data:h,method:i.method,action:n},null,h)}}else typeof n=="function"&&(d.preventDefault(),h=o?D0(i,o):new FormData(i),f1(r,{pending:!0,data:h,method:i.method,action:n},n,h))},currentTarget:i}]})}}for(lo=0;lo<e1.length;lo++)co=e1[lo],O0=co.toLowerCase(),U0=co[0].toUpperCase()+co.slice(1),Va(O0,"on"+U0);var co,O0,U0,lo;Va(Zh,"onAnimationEnd");Va(qh,"onAnimationIteration");Va(Gh,"onAnimationStart");Va("dblclick","onDoubleClick");Va("focusin","onFocus");Va("focusout","onBlur");Va(H5,"onTransitionRun");Va(S5,"onTransitionStart");Va(A5,"onTransitionCancel");Va(Yh,"onTransitionEnd");$e("onMouseEnter",["mouseout","mouseover"]);$e("onMouseLeave",["mouseout","mouseover"]);$e("onPointerEnter",["pointerout","pointerover"]);$e("onPointerLeave",["pointerout","pointerover"]);ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ue("onBeforeInput",["compositionend","keypress","textInput","paste"]);ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(sn));function Ss(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var d=e[o],h=d.instance,s=d.currentTarget;if(d=d.listener,h!==n&&i.isPropagationStopped())break t;n=d,i.currentTarget=s;try{n(i)}catch(f){zo(f)}i.currentTarget=null,n=h}else for(o=0;o<e.length;o++){if(d=e[o],h=d.instance,s=d.currentTarget,d=d.listener,h!==n&&i.isPropagationStopped())break t;n=d,i.currentTarget=s;try{n(i)}catch(f){zo(f)}i.currentTarget=null,n=h}}}}function U(t,a){var r=a[Rl];r===void 0&&(r=a[Rl]=new Set);var e=t+"__bubble";r.has(e)||(As(a,t,2,!1),r.add(e))}function El(t,a,r){var e=0;a&&(e|=4),As(r,t,e,a)}var ho="_reactListening"+Math.random().toString(36).slice(2);function bd(t){if(!t[ho]){t[ho]=!0,yh.forEach(function(r){r!=="selectionchange"&&(gf.has(r)||El(r,!1,t),El(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[ho]||(a[ho]=!0,El("selectionchange",!1,a))}}function As(t,a,r,e){switch(Ys(a)){case 2:var i=Zf;break;case 8:i=qf;break;default:i=Hd}r=i.bind(null,a,r,t),i=void 0,!t1||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function Dl(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var d=e.stateNode.containerInfo;if(d===i)break;if(o===4)for(o=e.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;d!==null;){if(o=ze(d),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){e=n=o;continue t}d=d.parentNode}}e=e.return}Sh(function(){var s=n,f=G1(r),k=[];t:{var p=Xh.get(t);if(p!==void 0){var x=i2,y=t;switch(t){case"keypress":if(vo(r)===0)break t;case"keydown":case"keyup":x=l5;break;case"focusin":y="focus",x=vl;break;case"focusout":y="blur",x=vl;break;case"beforeblur":case"afterblur":x=vl;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Kc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=h5;break;case Zh:case qh:case Gh:x=Ip;break;case Yh:x=s5;break;case"scroll":case"scrollend":x=Kp;break;case"wheel":x=p5;break;case"copy":case"cut":case"paste":x=t5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Rc;break;case"toggle":case"beforetoggle":x=v5}var C=(a&4)!==0,E=!C&&(t==="scroll"||t==="scrollend"),g=C?p!==null?p+"Capture":null:p;C=[];for(var u=s,v;u!==null;){var L=u;if(v=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||v===null||g===null||(L=en(u,g),L!=null&&C.push(gn(u,L,v))),E)break;u=u.return}0<C.length&&(p=new x(p,y,null,r,f),k.push({event:p,listeners:C}))}}if((a&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",p&&r!==Pl&&(y=r.relatedTarget||r.fromElement)&&(ze(y)||y[li]))break t;if((x||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,x?(y=r.relatedTarget||r.toElement,x=s,y=y?ze(y):null,y!==null&&(E=kn(y),C=y.tag,y!==E||C!==5&&C!==27&&C!==6)&&(y=null)):(x=null,y=s),x!==y)){if(C=Kc,L="onMouseLeave",g="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(C=Rc,L="onPointerLeave",g="onPointerEnter",u="pointer"),E=x==null?p:Ui(x),v=y==null?p:Ui(y),p=new C(L,u+"leave",x,r,f),p.target=E,p.relatedTarget=v,L=null,ze(f)===s&&(C=new C(g,u+"enter",y,r,f),C.target=v,C.relatedTarget=E,L=C),E=L,x&&y)a:{for(C=pf,g=x,u=y,v=0,L=g;L;L=C(L))v++;L=0;for(var j=u;j;j=C(j))L++;for(;0<v-L;)g=C(g),v--;for(;0<L-v;)u=C(u),L--;for(;v--;){if(g===u||u!==null&&g===u.alternate){C=g;break a}g=C(g),u=C(u)}C=null}else C=null;x!==null&&Z0(k,p,x,C,!1),y!==null&&E!==null&&Z0(k,E,y,C,!0)}}t:{if(p=s?Ui(s):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var z=Pc;else if(Ic(p))if(Nh)z=B5;else{z=C5;var b=w5}else x=p.nodeName,!x||x.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?s&&q1(s.elementType)&&(z=Pc):z=b5;if(z&&(z=z(t,s))){Th(k,z,r,f);break t}b&&b(t,p,s),t==="focusout"&&s&&p.type==="number"&&s.memoizedProps.value!=null&&Il(p,"number",p.value)}switch(b=s?Ui(s):window,t){case"focusin":(Ic(b)||b.contentEditable==="true")&&(Ne=b,a1=s,Xi=null);break;case"focusout":Xi=a1=Ne=null;break;case"mousedown":r1=!0;break;case"contextmenu":case"mouseup":case"dragend":r1=!1,e0(k,r,f);break;case"selectionchange":if(W5)break;case"keydown":case"keyup":e0(k,r,f)}var A;if(Q1)t:{switch(t){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else Te?zh(t,r)&&(T="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(Vh&&r.locale!=="ko"&&(Te||T!=="onCompositionStart"?T==="onCompositionEnd"&&Te&&(A=Ah()):(br=f,Y1="value"in br?br.value:br.textContent,Te=!0)),b=Fo(s,T),0<b.length&&(T=new Jc(T,t,null,r,f),k.push({event:T,listeners:b}),A?T.data=A:(A=_h(r),A!==null&&(T.data=A)))),(A=x5?L5(t,r):M5(t,r))&&(T=Fo(s,"onBeforeInput"),0<T.length&&(b=new Jc("onBeforeInput","beforeinput",null,r,f),k.push({event:b,listeners:T}),b.data=A)),sf(k,t,s,r,f)}Ss(k,a)})}function gn(t,a,r){return{instance:t,listener:a,currentTarget:r}}function Fo(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=en(t,r),i!=null&&e.unshift(gn(t,i,n)),i=en(t,a),i!=null&&e.push(gn(t,i,n))),t.tag===3)return e;t=t.return}return[]}function pf(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Z0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var d=r,h=d.alternate,s=d.stateNode;if(d=d.tag,h!==null&&h===e)break;d!==5&&d!==26&&d!==27||s===null||(h=s,i?(s=en(r,n),s!=null&&o.unshift(gn(r,s,h))):i||(s=en(r,n),s!=null&&o.push(gn(r,s,h)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var ff=/\r\n?/g,vf=/\u0000|\uFFFD/g;function q0(t){return(typeof t=="string"?t:""+t).replace(ff,`
`).replace(vf,"")}function Vs(t,a){return a=q0(a),q0(t)===a}function at(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||Ie(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&Ie(t,""+e);break;case"className":In(t,"class",e);break;case"tabIndex":In(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":In(t,r,e);break;case"style":Hh(t,e,n);break;case"data":if(a!=="object"){In(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=po(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&at(t,a,"name",i.name,i,null),at(t,a,"formEncType",i.formEncType,i,null),at(t,a,"formMethod",i.formMethod,i,null),at(t,a,"formTarget",i.formTarget,i,null)):(at(t,a,"encType",i.encType,i,null),at(t,a,"method",i.method,i,null),at(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=po(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=rr);break;case"onScroll":e!=null&&U("scroll",t);break;case"onScrollEnd":e!=null&&U("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(m(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(m(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=po(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":U("beforetoggle",t),U("toggle",t),go(t,"popover",e);break;case"xlinkActuate":Ja(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Ja(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Ja(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Ja(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Ja(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Ja(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Ja(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Ja(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Ja(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":go(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Xp.get(r)||r,go(t,r,e))}}function B1(t,a,r,e,i,n){switch(r){case"style":Hh(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(m(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(m(60));t.innerHTML=r}}break;case"children":typeof e=="string"?Ie(t,e):(typeof e=="number"||typeof e=="bigint")&&Ie(t,""+e);break;case"onScroll":e!=null&&U("scroll",t);break;case"onScrollEnd":e!=null&&U("scrollend",t);break;case"onClick":e!=null&&(t.onclick=rr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wh.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[It]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):go(t,r,e)}}}function Et(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":U("error",t),U("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:at(t,a,n,o,r,null)}}i&&at(t,a,"srcSet",r.srcSet,r,null),e&&at(t,a,"src",r.src,r,null);return;case"input":U("invalid",t);var d=n=o=i=null,h=null,s=null;for(e in r)if(r.hasOwnProperty(e)){var f=r[e];if(f!=null)switch(e){case"name":i=f;break;case"type":o=f;break;case"checked":h=f;break;case"defaultChecked":s=f;break;case"value":n=f;break;case"defaultValue":d=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(m(137,a));break;default:at(t,a,e,f,r,null)}}Bh(t,n,d,h,s,o,i,!1);return;case"select":U("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(d=r[i],d!=null))switch(i){case"value":n=d;break;case"defaultValue":o=d;break;case"multiple":e=d;default:at(t,a,i,d,r,null)}a=n,r=o,t.multiple=!!e,a!=null?Ye(t,!!e,a,!1):r!=null&&Ye(t,!!e,r,!0);return;case"textarea":U("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(d=r[o],d!=null))switch(o){case"value":e=d;break;case"defaultValue":i=d;break;case"children":n=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(m(91));break;default:at(t,a,o,d,r,null)}Wh(t,e,i,n);return;case"option":for(h in r)r.hasOwnProperty(h)&&(e=r[h],e!=null)&&(h==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":at(t,a,h,e,r,null));return;case"dialog":U("beforetoggle",t),U("toggle",t),U("cancel",t),U("close",t);break;case"iframe":case"object":U("load",t);break;case"video":case"audio":for(e=0;e<sn.length;e++)U(sn[e],t);break;case"image":U("error",t),U("load",t);break;case"details":U("toggle",t);break;case"embed":case"source":case"link":U("error",t),U("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(s in r)if(r.hasOwnProperty(s)&&(e=r[s],e!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:at(t,a,s,e,r,null)}return;default:if(q1(a)){for(f in r)r.hasOwnProperty(f)&&(e=r[f],e!==void 0&&B1(t,a,f,e,r,void 0));return}}for(d in r)r.hasOwnProperty(d)&&(e=r[d],e!=null&&at(t,a,d,e,r,null))}function kf(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,d=null,h=null,s=null,f=null;for(x in r){var k=r[x];if(r.hasOwnProperty(x)&&k!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":h=k;default:e.hasOwnProperty(x)||at(t,a,x,null,e,k)}}for(var p in e){var x=e[p];if(k=r[p],e.hasOwnProperty(p)&&(x!=null||k!=null))switch(p){case"type":n=x;break;case"name":i=x;break;case"checked":s=x;break;case"defaultChecked":f=x;break;case"value":o=x;break;case"defaultValue":d=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(m(137,a));break;default:x!==k&&at(t,a,p,x,e,k)}}$l(t,o,d,h,s,f,n,i);return;case"select":x=o=d=p=null;for(n in r)if(h=r[n],r.hasOwnProperty(n)&&h!=null)switch(n){case"value":break;case"multiple":x=h;default:e.hasOwnProperty(n)||at(t,a,n,null,e,h)}for(i in e)if(n=e[i],h=r[i],e.hasOwnProperty(i)&&(n!=null||h!=null))switch(i){case"value":p=n;break;case"defaultValue":d=n;break;case"multiple":o=n;default:n!==h&&at(t,a,i,n,e,h)}a=d,r=o,e=x,p!=null?Ye(t,!!r,p,!1):!!e!=!!r&&(a!=null?Ye(t,!!r,a,!0):Ye(t,!!r,r?[]:"",!1));return;case"textarea":x=p=null;for(d in r)if(i=r[d],r.hasOwnProperty(d)&&i!=null&&!e.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:at(t,a,d,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":p=i;break;case"defaultValue":x=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:i!==n&&at(t,a,o,i,e,n)}jh(t,p,x);return;case"option":for(var y in r)p=r[y],r.hasOwnProperty(y)&&p!=null&&!e.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:at(t,a,y,null,e,p));for(h in e)p=e[h],x=r[h],e.hasOwnProperty(h)&&p!==x&&(p!=null||x!=null)&&(h==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":at(t,a,h,p,e,x));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var C in r)p=r[C],r.hasOwnProperty(C)&&p!=null&&!e.hasOwnProperty(C)&&at(t,a,C,null,e,p);for(s in e)if(p=e[s],x=r[s],e.hasOwnProperty(s)&&p!==x&&(p!=null||x!=null))switch(s){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,a));break;default:at(t,a,s,p,e,x)}return;default:if(q1(a)){for(var E in r)p=r[E],r.hasOwnProperty(E)&&p!==void 0&&!e.hasOwnProperty(E)&&B1(t,a,E,void 0,e,p);for(f in e)p=e[f],x=r[f],!e.hasOwnProperty(f)||p===x||p===void 0&&x===void 0||B1(t,a,f,p,e,x);return}}for(var g in r)p=r[g],r.hasOwnProperty(g)&&p!=null&&!e.hasOwnProperty(g)&&at(t,a,g,null,e,p);for(k in e)p=e[k],x=r[k],!e.hasOwnProperty(k)||p===x||p==null&&x==null||at(t,a,k,p,e,x)}function G0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xf(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,d=i.duration;if(n&&d&&G0(o)){for(o=0,d=i.responseEnd,e+=1;e<r.length;e++){var h=r[e],s=h.startTime;if(s>d)break;var f=h.transferSize,k=h.initiatorType;f&&G0(k)&&(h=h.responseEnd,o+=f*(h<d?1:(d-s)/(h-s)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var j1=null,W1=null;function $o(t){return t.nodeType===9?t:t.ownerDocument}function Y0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zs(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function H1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Ol=null;function Lf(){var t=window.event;return t&&t.type==="popstate"?t===Ol?!1:(Ol=t,!0):(Ol=null,!1)}var _s=typeof setTimeout=="function"?setTimeout:void 0,Mf=typeof clearTimeout=="function"?clearTimeout:void 0,X0=typeof Promise=="function"?Promise:void 0,mf=typeof queueMicrotask=="function"?queueMicrotask:typeof X0<"u"?function(t){return X0.resolve(null).then(t).catch(yf)}:_s;function yf(t){setTimeout(function(){throw t})}function Gr(t){return t==="head"}function Q0(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),oi(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")an(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,an(r);for(var n=r.firstChild;n;){var o=n.nextSibling,d=n.nodeName;n[mn]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&an(t.ownerDocument.body);r=i}while(r);oi(a)}function K0(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function S1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":S1(r),Z1(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function wf(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[mn])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=ba(t.nextSibling),t===null)break}return null}function Cf(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=ba(t.nextSibling),t===null))return null;return t}function Ts(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ba(t.nextSibling),t===null))return null;return t}function A1(t){return t.data==="$?"||t.data==="$~"}function V1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function bf(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function ba(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var z1=null;function J0(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return ba(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function R0(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function Ns(t,a,r){switch(a=$o(r),t){case"html":if(t=a.documentElement,!t)throw Error(m(452));return t;case"head":if(t=a.head,!t)throw Error(m(453));return t;case"body":if(t=a.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function an(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Z1(t)}var Ba=new Map,F0=new Set;function Io(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var sr=J.d;J.d={f:Bf,r:jf,D:Wf,C:Hf,L:Sf,m:Af,X:zf,S:Vf,M:_f};function Bf(){var t=sr.f(),a=f2();return t||a}function jf(t){var a=di(t);a!==null&&a.tag===5&&a.type==="form"?Hu(a):sr.r(t)}var si=typeof document>"u"?null:document;function Es(t,a,r){var e=si;if(e&&typeof a=="string"&&a){var i=ma(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),F0.has(i)||(F0.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),Et(a,"link",t),St(a),e.head.appendChild(a)))}}function Wf(t){sr.D(t),Es("dns-prefetch",t,null)}function Hf(t,a){sr.C(t,a),Es("preconnect",t,a)}function Sf(t,a,r){sr.L(t,a,r);var e=si;if(e&&t&&a){var i='link[rel="preload"][as="'+ma(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+ma(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+ma(r.imageSizes)+'"]')):i+='[href="'+ma(t)+'"]';var n=i;switch(a){case"style":n=ni(t);break;case"script":n=gi(t)}Ba.has(n)||(t=dt({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),Ba.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(jn(n))||a==="script"&&e.querySelector(Wn(n))||(a=e.createElement("link"),Et(a,"link",t),St(a),e.head.appendChild(a)))}}function Af(t,a){sr.m(t,a);var r=si;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+ma(e)+'"][href="'+ma(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=gi(t)}if(!Ba.has(n)&&(t=dt({rel:"modulepreload",href:t},a),Ba.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Wn(n)))return}e=r.createElement("link"),Et(e,"link",t),St(e),r.head.appendChild(e)}}}function Vf(t,a,r){sr.S(t,a,r);var e=si;if(e&&t){var i=Ge(e).hoistableStyles,n=ni(t);a=a||"default";var o=i.get(n);if(!o){var d={loading:0,preload:null};if(o=e.querySelector(jn(n)))d.loading=5;else{t=dt({rel:"stylesheet",href:t,"data-precedence":a},r),(r=Ba.get(n))&&Bd(t,r);var h=o=e.createElement("link");St(h),Et(h,"link",t),h._p=new Promise(function(s,f){h.onload=s,h.onerror=f}),h.addEventListener("load",function(){d.loading|=1}),h.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Co(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:d},i.set(n,o)}}}function zf(t,a){sr.X(t,a);var r=si;if(r&&t){var e=Ge(r).hoistableScripts,i=gi(t),n=e.get(i);n||(n=r.querySelector(Wn(i)),n||(t=dt({src:t,async:!0},a),(a=Ba.get(i))&&jd(t,a),n=r.createElement("script"),St(n),Et(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function _f(t,a){sr.M(t,a);var r=si;if(r&&t){var e=Ge(r).hoistableScripts,i=gi(t),n=e.get(i);n||(n=r.querySelector(Wn(i)),n||(t=dt({src:t,async:!0,type:"module"},a),(a=Ba.get(i))&&jd(t,a),n=r.createElement("script"),St(n),Et(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function $0(t,a,r,e){var i=(i=Hr.current)?Io(i):null;if(!i)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=ni(r.href),r=Ge(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=ni(r.href);var n=Ge(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(jn(t)))&&!n._p&&(o.instance=n,o.state.loading=5),Ba.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ba.set(t,r),n||Tf(i,t,r,o.state))),a&&e===null)throw Error(m(528,""));return o}if(a&&e!==null)throw Error(m(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=gi(r),r=Ge(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function ni(t){return'href="'+ma(t)+'"'}function jn(t){return'link[rel="stylesheet"]['+t+"]"}function Ds(t){return dt({},t,{"data-precedence":t.precedence,precedence:null})}function Tf(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),Et(a,"link",r),St(a),t.head.appendChild(a))}function gi(t){return'[src="'+ma(t)+'"]'}function Wn(t){return"script[async]"+t}function I0(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+ma(r.href)+'"]');if(e)return a.instance=e,St(e),e;var i=dt({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),St(e),Et(e,"style",i),Co(e,r.precedence,t),a.instance=e;case"stylesheet":i=ni(r.href);var n=t.querySelector(jn(i));if(n)return a.state.loading|=4,a.instance=n,St(n),n;e=Ds(r),(i=Ba.get(i))&&Bd(e,i),n=(t.ownerDocument||t).createElement("link"),St(n);var o=n;return o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),Et(n,"link",e),a.state.loading|=4,Co(n,r.precedence,t),a.instance=n;case"script":return n=gi(r.src),(i=t.querySelector(Wn(n)))?(a.instance=i,St(i),i):(e=r,(i=Ba.get(n))&&(e=dt({},r),jd(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),St(i),Et(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(m(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,Co(e,r.precedence,t));return a.instance}function Co(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var d=e[o];if(d.dataset.precedence===a)n=d;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function Bd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function jd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var bo=null;function P0(t,a,r){if(bo===null){var e=new Map,i=bo=new Map;i.set(r,e)}else i=bo,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[mn]||n[_t]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var d=e.get(o);d?d.push(n):e.set(o,[n])}}return e}function th(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function Nf(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Os(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ef(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=ni(e.href),n=a.querySelector(jn(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Po.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,St(n);return}n=a.ownerDocument||a,e=Ds(e),(i=Ba.get(i))&&Bd(e,i),n=n.createElement("link"),St(n);var o=n;o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),Et(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Po.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var Ul=0;function Df(t,a){return t.stylesheets&&t.count===0&&Bo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&Bo(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&Ul===0&&(Ul=62500*xf());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bo(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Ul?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function Po(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var t2=null;function Bo(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,t2=new Map,a.forEach(Of,t),t2=null,Po.call(t))}function Of(t,a){if(!(a.state.loading&4)){var r=t2.get(t);if(r)var e=r.get(null);else{r=new Map,t2.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=Po.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var pn={$$typeof:ar,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Uf(t,a,r,e,i,n,o,d,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=sl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sl(0),this.hiddenUpdates=sl(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Us(t,a,r,e,i,n,o,d,h,s,f,k){return t=new Uf(t,a,r,o,h,s,f,k,d),a=1,n===!0&&(a|=24),n=oa(3,null,null,a),t.current=n,n.stateNode=t,a=P1(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},rd(n),t}function Zs(t){return t?(t=Oe,t):Oe}function qs(t,a,r,e,i,n){i=Zs(i),e.context===null?e.context=i:e.pendingContext=i,e=Ar(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=Vr(t,e,a),r!==null&&($t(r,t,a),Ki(r,t,a))}function ah(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function Wd(t,a){ah(t,a),(t=t.alternate)&&ah(t,a)}function Gs(t){if(t.tag===13||t.tag===31){var a=pe(t,67108864);a!==null&&$t(a,t,67108864),Wd(t,67108864)}}function rh(t){if(t.tag===13||t.tag===31){var a=ua();a=O1(a);var r=pe(t,a);r!==null&&$t(r,t,a),Wd(t,a)}}var a2=!0;function Zf(t,a,r,e){var i=V.T;V.T=null;var n=J.p;try{J.p=2,Hd(t,a,r,e)}finally{J.p=n,V.T=i}}function qf(t,a,r,e){var i=V.T;V.T=null;var n=J.p;try{J.p=8,Hd(t,a,r,e)}finally{J.p=n,V.T=i}}function Hd(t,a,r,e){if(a2){var i=_1(e);if(i===null)Dl(t,a,e,r2,r),eh(t,e);else if(Yf(i,t,a,r,e))e.stopPropagation();else if(eh(t,e),a&4&&-1<Gf.indexOf(t)){for(;i!==null;){var n=di(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=Ir(n.pendingLanes);if(o!==0){var d=n;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var h=1<<31-ha(o);d.entanglements[1]|=h,o&=~h}Za(n),(K&6)===0&&(Xo=da()+500,Bn(0,!1))}}break;case 31:case 13:d=pe(n,2),d!==null&&$t(d,n,2),f2(),Wd(n,2)}if(n=_1(e),n===null&&Dl(t,a,e,r2,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else Dl(t,a,e,null,r)}}function _1(t){return t=G1(t),Sd(t)}var r2=null;function Sd(t){if(r2=null,t=ze(t),t!==null){var a=kn(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=ch(a),t!==null)return t;t=null}else if(r===31){if(t=hh(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return r2=t,null}function Ys(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hp()){case ph:return 2;case fh:return 8;case Ao:case Sp:return 32;case vh:return 268435456;default:return 32}default:return 32}}var T1=!1,Tr=null,Nr=null,Er=null,fn=new Map,vn=new Map,wr=[],Gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eh(t,a){switch(t){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":fn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(a.pointerId)}}function Ni(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=di(a),a!==null&&Gs(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function Yf(t,a,r,e,i){switch(a){case"focusin":return Tr=Ni(Tr,t,a,r,e,i),!0;case"dragenter":return Nr=Ni(Nr,t,a,r,e,i),!0;case"mouseover":return Er=Ni(Er,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return fn.set(n,Ni(fn.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,vn.set(n,Ni(vn.get(n)||null,t,a,r,e,i)),!0}return!1}function Xs(t){var a=ze(t.target);if(a!==null){var r=kn(a);if(r!==null){if(a=r.tag,a===13){if(a=ch(r),a!==null){t.blockedOn=a,Uc(t.priority,function(){rh(r)});return}}else if(a===31){if(a=hh(r),a!==null){t.blockedOn=a,Uc(t.priority,function(){rh(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=_1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);Pl=e,r.target.dispatchEvent(e),Pl=null}else return a=di(r),a!==null&&Gs(a),t.blockedOn=r,!1;a.shift()}return!0}function ih(t,a,r){jo(t)&&r.delete(a)}function Xf(){T1=!1,Tr!==null&&jo(Tr)&&(Tr=null),Nr!==null&&jo(Nr)&&(Nr=null),Er!==null&&jo(Er)&&(Er=null),fn.forEach(ih),vn.forEach(ih)}function uo(t,a){t.blockedOn===a&&(t.blockedOn=null,T1||(T1=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,Xf)))}var so=null;function nh(t){so!==t&&(so=t,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,function(){so===t&&(so=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(Sd(e||r)===null)continue;break}var n=di(r);n!==null&&(t.splice(a,3),a-=3,f1(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function oi(t){function a(h){return uo(h,t)}Tr!==null&&uo(Tr,t),Nr!==null&&uo(Nr,t),Er!==null&&uo(Er,t),fn.forEach(a),vn.forEach(a);for(var r=0;r<wr.length;r++){var e=wr[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<wr.length&&(r=wr[0],r.blockedOn===null);)Xs(r),r.blockedOn===null&&wr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[It]||null;if(typeof n=="function")o||nh(r);else if(o){var d=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[It]||null)d=o.formAction;else if(Sd(i)!==null)continue}else d=o.action;typeof d=="function"?r[e+1]=d:(r.splice(e,3),e-=3),nh(r)}}}function Qs(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function Ad(t){this._internalRoot=t}x2.prototype.render=Ad.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(m(409));var r=a.current,e=ua();qs(r,e,t,a,null,null)};x2.prototype.unmount=Ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;qs(t.current,2,null,t,null,null),f2(),a[li]=null}};function x2(t){this._internalRoot=t}x2.prototype.unstable_scheduleHydration=function(t){if(t){var a=mh();t={blockedOn:null,target:t,priority:a};for(var r=0;r<wr.length&&a!==0&&a<wr[r].priority;r++);wr.splice(r,0,t),r===0&&Xs(t)}};var oh=lh.version;if(oh!=="19.2.8")throw Error(m(527,oh,"19.2.8"));J.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=yp(a),t=t!==null?uh(t):null,t=t===null?null:t.stateNode,t};var Qf={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ei=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ei.isDisabled&&Ei.supportsFiber))try{xn=Ei.inject(Qf),ca=Ei}catch{}var Ei;L2.createRoot=function(t,a){if(!dh(t))throw Error(m(299));var r=!1,e="",i=Eu,n=Du,o=Ou;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=Us(t,1,!1,null,null,r,e,null,i,n,o,Qs),t[li]=a.current,bd(t),new Ad(a)};L2.hydrateRoot=function(t,a,r){if(!dh(t))throw Error(m(299));var e=!1,i="",n=Eu,o=Du,d=Ou,h=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(d=r.onRecoverableError),r.formState!==void 0&&(h=r.formState)),a=Us(t,1,!0,a,r??null,e,i,h,n,o,d,Qs),a.context=Zs(null),r=a.current,e=ua(),e=O1(e),i=Ar(e),i.callback=null,Vr(r,i,e),r=e,a.current.lanes=r,Mn(a,r),Za(a),t[li]=a.current,bd(t),new x2(a)};L2.version="19.2.8"});var Fs=fr((jv,Rs)=>{"use strict";function Js(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Js)}catch(t){console.error(t)}}Js(),Rs.exports=Ks()});var jt=Rr(Qa()),B4=Rr(Fs());var pi=Rr(Qa(),1);var Vd=Rr(Qa(),1),zd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_d=Vd.default.createContext&&Vd.default.createContext(zd);var Kf=["attr","size","title"];function Jf(t,a){if(t==null)return{};var r,e,i=Rf(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Rf(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function M2(){return M2=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},M2.apply(null,arguments)}function $s(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function m2(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?$s(Object(r),!0).forEach(function(e){Ff(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):$s(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function Ff(t,a,r){return(a=$f(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function $f(t){var a=If(t,"string");return typeof a=="symbol"?a:a+""}function If(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function Is(t){return t&&t.map((a,r)=>pi.default.createElement(a.tag,m2({key:r},a.attr),Is(a.child)))}function G(t){return a=>pi.default.createElement(Pf,M2({attr:m2({},t.attr)},a),Is(t.child))}function Pf(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=Jf(t,Kf),d=i||r.size||"1em",h;return r.className&&(h=r.className),t.className&&(h=(h?h+" ":"")+t.className),pi.default.createElement("svg",M2({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:h,style:m2(m2({color:t.color||r.color},r.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),n&&pi.default.createElement("title",null,n),t.children)};return _d!==void 0?pi.default.createElement(_d.Consumer,null,r=>a(r)):a(zd)}function Ps(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function tg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function ag(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function rg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function eg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 14 4 9l5-5"},child:[]},{tag:"path",attr:{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"},child:[]}]})(t)}function ig(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function ng(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function og(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function lg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function dg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function cg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},child:[]},{tag:"path",attr:{d:"M3 3v5h5"},child:[]}]})(t)}function hg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function ug(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function sg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function gg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function pg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function fg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function vg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function kg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function xg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function Lg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function Mg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function mg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function yg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function wg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(t)}function Cg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function bg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function Bg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function jg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function Wg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function Hg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 18 6-6-6-6"},child:[]}]})(t)}function Sg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function Ag(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function Vg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]}]})(t)}function zg(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var _g=xg,y2=tg,Tg=vg,Td=fg,Ng=Mg,Eg=mg,Dg=lg,w2=ag,Og=Cg,Ug=Lg,fi=ug;var Zg=Bg,vi=jg,Nd=ig,qg=bg,Ed=ng,Gg=Wg,C2=Sg;var Hn=hg;var ki=Ps,Dd=kg,Yg=pg,Xg=sg,Qg=gg,b2=zg,Kg=dg,Jg=Ag,Rg=rg,Fg=og,B2=wg,$g=yg,Ig=Vg,Pg=eg,Od=cg,t4=Hg;var vt=Rr(Qa());var W=Rr(Qa());var a4={member:w2,coworker:Rg,admin_staff:Eg,leader:Fg,pastor:Ng,admin:Dg},r4=["leader","pastor","admin"],Ud=[{id:"work",label:"工作日誌",Icon:_g,href:"work.html",roles:["pastor","admin_staff","admin"]},{id:"serve",label:"服事管理",Icon:y2,href:""},{id:"venue",label:"場地預約",Icon:Jg,href:""}],tv=t=>{let a=String(t||"").trim();return/^[\u4e00-\u9fff]+$/.test(a)?a.length===4?a.slice(2):a.length>=2&&a.length<=3?a.slice(1):a:a},e4=["pastor","admin_staff","admin"],i4=(t,a)=>!t.roles||t.roles.includes(a),av=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},n4=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},o4=({active:t,shell:a})=>{let[r,e]=(0,W.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(y=>{let C=!y;try{localStorage.setItem("tbcSidebarCollapsed",C?"1":"0")}catch{}return C}),[n,o]=(0,W.useState)(!1),[d,h]=(0,W.useState)(""),s=(0,W.useRef)(null),f=a.identity||{name:"",role:"member",status:"loading"},k=a4[f.role]||w2,p=r4.includes(f.role),x=y=>{h(`${y} 尚未開放`),clearTimeout(s.current),s.current=setTimeout(()=>h(""),2200)};return W.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},W.default.createElement("div",{className:"flex flex-col"},W.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},W.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},W.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},W.default.createElement(b2,{size:20,strokeWidth:2})),r&&W.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},W.default.createElement(Td,{size:18}))),!r&&W.default.createElement(W.default.Fragment,null,W.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),W.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},W.default.createElement(Td,{size:18})))),W.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},Ud.map(y=>{let C=t===y.id,E=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${C?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,g=W.default.createElement(W.default.Fragment,null,W.default.createElement(y.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&W.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},y.label));return y.href?C?W.default.createElement("div",{key:y.id,className:E,title:y.label,"aria-current":"page"},g):W.default.createElement("a",{key:y.id,href:y.href,className:E,title:y.label},g):W.default.createElement("button",{key:y.id,type:"button",onClick:()=>x(y.label),className:E,title:y.label},g)}))),W.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},W.default.createElement("button",{type:"button",onClick:()=>o(y=>!y),"aria-haspopup":"menu","aria-expanded":n,className:`tbc-sb-user flex items-center rounded-full transition-colors ${r?"justify-center w-12 h-12 mx-auto bg-slate-100 hover:bg-slate-200":"gap-3 px-4 h-12 w-full hover:bg-slate-100"}`},r?W.default.createElement("span",{className:"text-[13px] text-slate-900 truncate max-w-full px-1"},tv(f.name)):W.default.createElement(W.default.Fragment,null,W.default.createElement(k,{size:20,strokeWidth:1.75,className:`shrink-0 ${p?"text-amber-500":"text-slate-500"}`}),W.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},f.name))),n&&W.default.createElement(W.default.Fragment,null,W.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),W.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},W.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},W.default.createElement(Tg,{size:18,strokeWidth:1.75}),"登出")))),d&&W.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},d))},l4=({supabase:t,notice:a})=>{let[r,e]=(0,W.useState)(!1),[i,n]=(0,W.useState)(""),[o,d]=(0,W.useState)(""),[h,s]=(0,W.useState)(!1),[f,k]=(0,W.useState)(""),p=async y=>{if(y.preventDefault(),!i.trim()||!o||h)return;s(!0),k("");let{error:C}=await t.auth.signInWithPassword({email:av(i),password:o});s(!1),C&&k("帳號或密碼不正確，請再試一次")},x="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return W.default.createElement("form",{onSubmit:p,className:"w-full max-w-sm mx-auto space-y-3"},W.default.createElement("input",{value:i,onChange:y=>n(y.target.value),placeholder:"帳號",autoComplete:"username",className:x}),W.default.createElement("div",{className:"relative"},W.default.createElement("input",{type:r?"text":"password",value:o,onChange:y=>d(y.target.value),placeholder:"密碼",autoComplete:"current-password",className:x+" pr-12"}),W.default.createElement("button",{type:"button",onClick:()=>e(y=>!y),title:r?"隱藏密碼":"顯示密碼","aria-label":r?"隱藏密碼":"顯示密碼",className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"},r?W.default.createElement(B2,{size:18}):W.default.createElement($g,{size:18}))),(f||a)&&W.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},W.default.createElement(vi,{size:16}),f||a),W.default.createElement("button",{type:"submit",disabled:h||!i.trim()||!o,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},h?"登入中…":"登入"))},d4=({shell:t})=>{let a=t.identity||{},r=a4[a.role]||w2,e=r4.includes(a.role);return W.default.createElement("div",{className:"flex flex-col items-center gap-3 mt-14"},W.default.createElement("p",{className:"text-sm text-slate-500"},"準備好了，開始或",W.default.createElement("button",{type:"button",onClick:t.onLogout,className:"tbc-logout ml-0.5 text-indigo-600 hover:text-indigo-700 underline underline-offset-4"},"登出")))};var rv=({shell:t})=>{let[a,r]=(0,vt.useState)(""),e=(0,vt.useRef)(null),i=t.identity||{},n=Ud.filter(d=>i4(d,i.role)),o=d=>{r(`${d} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return vt.default.createElement("div",{className:"relative h-[100dvh] w-full bg-white overflow-hidden"},vt.default.createElement("main",{className:"h-full overflow-auto custom-scrollbar"},vt.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},vt.default.createElement("div",{className:"text-center mb-14"},vt.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),vt.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),vt.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(d=>{let h=vt.default.createElement(vt.default.Fragment,null,vt.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},vt.default.createElement(d.Icon,{size:40,strokeWidth:1.75})),vt.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},d.label)),s="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return d.href?vt.default.createElement("a",{key:d.id,href:d.href,className:s},h):vt.default.createElement("button",{key:d.id,type:"button",onClick:()=>o(d.label),className:s},h)})),vt.default.createElement(d4,{shell:t}))),a&&vt.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},c4=rv;var l=Rr(Qa());var qd=["日","一","二","三","四","五","六"],h4={m:15,l:18},Zd=["pastor","admin_staff"],u4=[{id:"title",label:"工作摘要",locked:!0,sortable:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"派工",sortable:!0,w:t=>`${Math.ceil(t*4+22)}px`,min:t=>Math.ceil(t*4+22)},{id:"doer",label:"執行",sortable:!0,w:t=>`${Math.ceil(t*4+22)}px`,min:t=>Math.ceil(t*4+22)},{id:"status",label:"狀態",sortable:!0,w:t=>`${Math.ceil(t*.85*4+100)}px`,min:t=>Math.ceil(t*.85*4+100)},{id:"date",label:"日期",sortable:!0,w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(150px,1fr)",min:150},{id:"hours",label:"工時",sortable:!0,w:t=>`${Math.ceil(t*4.8+24)}px`,min:t=>Math.ceil(t*4.8+24)},{id:"priority",label:"優先順序",sortable:!0,w:t=>`${Math.ceil(t*.85*4+52)}px`,min:t=>Math.ceil(t*.85*4+52)},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],ev="Asia/Taipei",s4=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:ev,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},W2=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},M4=t=>new Date(t).toISOString().slice(0,10),j2=(t,a)=>M4(W2(t)+a*864e5),m4=(t,a)=>Math.round((W2(t)-W2(a))/864e5),y4=t=>new Date(W2(t)).getUTCDay(),iv=t=>j2(t,-((y4(t)+6)%7)),qa=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},nv=(t,a)=>{let r=m4(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${qa(t)}（${qd[y4(t)]}）`,tag:e}},Bt=t=>t?String(t).slice(0,5):"",g4=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Bt(t.start_time).split(":").map(Number),[e,i]=Bt(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n>0?n/60:null},ov=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Bt(t.start_time).split(":").map(Number),[e,i]=Bt(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*10)/10} 小時`},p4={urgent:0,normal:1,routine:2},lv={routine:"例行",normal:"普通",urgent:"緊急"},f4={routine:"bg-violet-50 border-violet-100 text-violet-600",normal:"bg-slate-50 border-slate-200 text-slate-500",urgent:"bg-red-50 border-red-100 text-red-600"},dv={routine:"normal",normal:"urgent",urgent:"routine"},Sn=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的工作"],["not your item","只有派工者可以修改這筆工作，負責人只能改狀態"],["nothing to confirm","這筆已經不是「待確認」狀態"],["nothing to return","這筆已經不是「待確認」狀態"],["assignee is not allowed","負責人必須是有權限的同工"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期的任務固定在最上面，不能搬移"],["item not in your list","這筆不在你的清單裡"],["item not found or canceled","這筆工作已被取消或不存在"],["more than one member record","這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號"],["no member record","找不到這個帳號對應的同工資料"],["no permission","沒有使用權限"],["permission denied","沒有使用權限"],["dates are required","日期必填"],["weekly rule needs","每週重複請至少選一個星期"],["monthly rule needs","每月重複請選幾號，或勾「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個週期工作"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},cv=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>qd[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 號`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},v4=({person:t,strong:a})=>l.default.createElement("span",{className:`truncate max-w-full ${a?"font-bold text-slate-900":"text-slate-700"}`},t&&t.name||"（未知）"),k4=({id:t,options:a,selected:r,multi:e,onChange:i,bad:n,className:o=""})=>{let[d,h]=(0,l.useState)(!1),s=a.filter(k=>r.has(k.id)).map(k=>k.label),f=k=>{if(!e){i(new Set([k])),h(!1);return}let p=new Set(r);p.has(k)?p.delete(k):p.add(k),i(p)};return l.default.createElement("div",{className:`relative ${o}`},l.default.createElement("button",{id:t,type:"button",onClick:()=>h(k=>!k),className:`tbc-pick w-full flex items-center justify-between gap-2 bg-slate-50 border rounded-lg px-3 py-2.5 text-left outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${n?"border-red-400 ring-2 ring-red-200":"border-slate-200"}`},l.default.createElement("span",{className:`truncate ${s.length?"text-slate-900":"text-slate-400"}`},s.length?s.join("、"):"請選擇"),l.default.createElement(C2,{size:16,className:"text-slate-400 shrink-0"})),d&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-[110]",onClick:()=>h(!1)}),l.default.createElement("div",{className:"tbc-pick-menu absolute left-0 right-0 top-full mt-1 z-[120] bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in"},a.map(k=>l.default.createElement("label",{key:k.id,className:"flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 cursor-pointer select-none"},l.default.createElement("input",{type:e?"checkbox":"radio",checked:r.has(k.id),onChange:()=>f(k.id),className:"accent-indigo-600"}),k.label)))))},x4=({value:t,placeholder:a,canEdit:r,onSave:e,className:i="",centerEmpty:n})=>{let[o,d]=(0,l.useState)(!1),[h,s]=(0,l.useState)(t||""),f=(0,l.useRef)(!1);(0,l.useEffect)(()=>{o||s(t||"")},[t,o]);let k=async()=>{if(d(!1),f.current){f.current=!1;return}let p=h.trim();p!==(t||"").trim()&&await e(p)};return o?l.default.createElement("input",{autoFocus:!0,value:h,onChange:p=>s(p.target.value),onBlur:k,onKeyDown:p=>{p.key==="Enter"&&p.currentTarget.blur(),p.key==="Escape"&&(f.current=!0,p.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):l.default.createElement("div",{onClick:()=>r&&d(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} ${!t&&n?"text-center":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?l.default.createElement("span",{className:`text-slate-300 ${n?"block text-center":""}`},a):null))},L4=({type:t,a,b:r,canEdit:e,children:i,onSave:n})=>{let[o,d]=(0,l.useState)(!1),[h,s]=(0,l.useState)(a||""),[f,k]=(0,l.useState)(r||""),p=(0,l.useRef)(!1);(0,l.useEffect)(()=>{o||(s(a||""),k(r||""))},[a,r,o]);let x=async()=>{if(d(!1),p.current){p.current=!1;return}(h!==(a||"")||f!==(r||""))&&await n(h,f)};if(!o)return l.default.createElement("div",{onClick:()=>e&&d(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let y="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return l.default.createElement("div",{tabIndex:-1,onBlur:C=>{C.currentTarget.contains(C.relatedTarget)||x()},onKeyDown:C=>{C.key==="Enter"&&x(),C.key==="Escape"&&(p.current=!0,d(!1))},className:"flex flex-col gap-1"},l.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",l.default.createElement("input",{autoFocus:!0,type:t,value:h,onChange:C=>s(C.target.value),className:y})),l.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",l.default.createElement("input",{type:t,value:f,onChange:C=>k(C.target.value),className:y})))},hv=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o,people:d=[],meId:h,parent:s})=>{let f=a||{},k=t==="editRule",p=t!=="create",[x,y]=(0,l.useState)(f.title||""),[C,E]=(0,l.useState)(f.start_date||e),[g,u]=(0,l.useState)(Bt(f.start_time)),[v,L]=(0,l.useState)(f.end_date||f.start_date||e),[j,z]=(0,l.useState)(Bt(f.end_time)),[b,A]=(0,l.useState)(f.priority||"normal"),[T,D]=(0,l.useState)(f.note||""),[tt,gr]=(0,l.useState)(k?f.freq:t==="createRule"?r||"weekly":"none"),[Yr,pr]=(0,l.useState)(!!f.weekdays_only),[Xr,pa]=(0,l.useState)(f.week_days||[]),[Ga,H2]=(0,l.useState)(f.month_day?String(f.month_day):""),[Qr,S2]=(0,l.useState)(!!f.month_last_day),[ke,An]=(0,l.useState)(f.until_date||""),[A2,Yd]=(0,l.useState)(f.is_active===void 0?!0:f.is_active),xe=(0,l.useMemo)(()=>{let H=new Set,wt=[],za=Qt=>{H.has(Qt.member_id)||(H.add(Qt.member_id),wt.push({id:Qt.member_id,label:Qt.member_id===h?"我":Qt.name}))};return d.filter(Qt=>Qt.member_id===h).forEach(za),d.filter(Qt=>Zd.includes(Qt.role)).forEach(za),h&&!H.has(h)&&wt.unshift({id:h,label:"我"}),wt},[d,h]),[Le,V2]=(0,l.useState)(()=>new Set(h?[h]:[])),[xi,z2]=(0,l.useState)(()=>new Set(h?[h]:[])),[_2,Li]=(0,l.useState)(""),[ja,ct]=(0,l.useState)(""),Zt=(H,wt)=>{Li(H),ct(wt),setTimeout(()=>{let za=document.getElementById(wt);if(za){za.scrollIntoView({block:"center",behavior:"smooth"});try{za.focus({preventScroll:!0})}catch{}}},0)},ta="text-xs font-medium text-slate-500",fa="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",Vn=H=>pa(wt=>wt.includes(H)?wt.filter(za=>za!==H):[...wt,H]),zn=()=>{if(Li(""),ct(""),!x.trim())return Zt(s?"輸入子工作":"輸入工作摘要","tbc-f-title");if(t==="create"&&Le.size===0)return Zt("請選擇派工的人","tbc-f-disp");if(t==="create"&&xi.size===0)return Zt("請至少選一位執行的人","tbc-f-doer");if(!C)return Zt("開始日期必填","tbc-f-start");if(tt==="none"&&(!v||v<C))return Zt("結束日期不能早於開始日期","tbc-f-end");if(tt==="weekly"&&Xr.length===0)return Zt("每週重複請至少選一個星期","tbc-f-week");if(tt==="monthly"&&!Ga&&!Qr)return Zt("每月重複請選幾號，或勾「每月最後一天」","tbc-f-month");if(tt!=="none"&&ke&&ke<C)return Zt("重複的結束日不能早於開始日","tbc-f-until");n({title:x.trim(),startDate:C,startTime:g||null,endDate:tt==="none"?v:C,endTime:j||null,priority:b,note:T.trim()||null,repeat:tt,weekdaysOnly:tt==="daily"&&Yr,weekDays:tt==="weekly"?Xr:[],monthDay:tt==="monthly"&&Ga?Number(Ga):null,monthLast:tt==="monthly"&&Qr,untilDate:ke||null,isActive:A2,assigneeIds:[...xi],dispatcherId:[...Le][0]||h})};return l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},k?l.default.createElement(l.default.Fragment,null,l.default.createElement(Hn,{className:"text-indigo-600",size:20})," 修改週期工作"):t==="createRule"?l.default.createElement(l.default.Fragment,null,l.default.createElement(Hn,{className:"text-indigo-600",size:20})," 新增週期工作"):l.default.createElement(l.default.Fragment,null,l.default.createElement(fi,{className:"text-indigo-600",size:20})," ",s?"新增子工作":"新增")),l.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},l.default.createElement(ki,{size:20}))),l.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:ta},s?"子工作":"工作摘要",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement("input",{id:"tbc-f-title",autoFocus:!0,value:x,onChange:H=>y(H.target.value),placeholder:"簡短描述工作內容",className:`${fa} ${ja==="tbc-f-title"?"!border-red-400 ring-2 ring-red-200":""}`})),t==="create"&&xe.length>0&&l.default.createElement("div",{className:"grid grid-cols-2 gap-4"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:ta},"派工",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement(k4,{id:"tbc-f-disp",options:xe,selected:Le,onChange:V2,bad:ja==="tbc-f-disp"})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:ta},"執行",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement(k4,{id:"tbc-f-doer",options:xe,selected:xi,multi:!0,onChange:z2,bad:ja==="tbc-f-doer"}))),p&&l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:ta},"重複"),l.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([H])=>!((k||t==="createRule")&&H==="none")).map(([H,wt])=>l.default.createElement("button",{key:H,type:"button",onClick:()=>gr(H),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${tt===H?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},wt))),tt==="daily"&&l.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},l.default.createElement("input",{type:"checkbox",checked:Yr,onChange:H=>pr(H.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),tt==="weekly"&&l.default.createElement("div",{id:"tbc-f-week",tabIndex:-1,className:`flex gap-2 pt-1 flex-wrap outline-none rounded-lg ${ja==="tbc-f-week"?"ring-2 ring-red-200":""}`},[1,2,3,4,5,6,7].map(H=>l.default.createElement("button",{key:H,type:"button",onClick:()=>Vn(H),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${Xr.includes(H)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},qd[H%7]))),tt==="monthly"&&l.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},l.default.createElement("select",{id:"tbc-f-month",value:Ga,onChange:H=>H2(H.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},l.default.createElement("option",{value:""},"不指定號數"),Array.from({length:31},(H,wt)=>wt+1).map(H=>l.default.createElement("option",{key:H,value:H},H," 號"))),l.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},l.default.createElement("input",{type:"checkbox",checked:Qr,onChange:H=>S2(H.target.checked),className:"accent-indigo-600"})," 每月最後一天"),Ga&&Number(Ga)>28&&!Qr&&l.default.createElement("span",{className:"text-xs text-amber-600"},Ga," 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」"))),l.default.createElement("div",{className:"grid grid-cols-2 gap-4"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:ta},"開始日期"),l.default.createElement("input",{id:"tbc-f-start",type:"date",value:C,onChange:H=>{E(H.target.value),v<H.target.value&&L(H.target.value)},className:`${fa} ${ja==="tbc-f-start"?"!border-red-400 ring-2 ring-red-200":""}`})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:ta},"開始時間（選填）"),l.default.createElement("input",{type:"time",value:g,onChange:H=>u(H.target.value),className:fa})),tt==="none"?l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:ta},"結束日期"),l.default.createElement("input",{id:"tbc-f-end",type:"date",value:v,min:C,onChange:H=>L(H.target.value),className:`${fa} ${ja==="tbc-f-end"?"!border-red-400 ring-2 ring-red-200":""}`})):l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:ta},"結束日期（選填）"),l.default.createElement("input",{id:"tbc-f-until",type:"date",value:ke,min:C,onChange:H=>An(H.target.value),className:fa})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:ta},"結束時間（選填）"),l.default.createElement("input",{type:"time",value:j,onChange:H=>z(H.target.value),className:fa}))),l.default.createElement("div",{className:"grid grid-cols-2 gap-4"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:ta},"優先順序"),l.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["routine","例行"],["normal","普通"],["urgent","緊急"]].map(([H,wt])=>l.default.createElement("button",{key:H,type:"button",onClick:()=>A(H),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${b===H?H==="urgent"?"bg-white text-red-600 shadow-sm":H==="routine"?"bg-white text-violet-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},wt))))),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:ta},"備註"),l.default.createElement("textarea",{value:T,onChange:H=>D(H.target.value),rows:2,className:fa})),_2&&l.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},l.default.createElement(vi,{size:16})," ",_2)),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},l.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),l.default.createElement("button",{onClick:zn,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},k?"儲存":tt==="none"?"新增":"儲存"))))},uv=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,l.useState)(s4()),[o,d]=(0,l.useState)(null),[h,s]=(0,l.useState)([]),[f,k]=(0,l.useState)(""),[p,x]=(0,l.useState)([]),[y,C]=(0,l.useState)(!0),[E,g]=(0,l.useState)({type:"",text:""}),[u,v]=(0,l.useState)(null),[L,j]=(0,l.useState)("mine"),[z,b]=(0,l.useState)("today"),[A,T]=(0,l.useState)(""),[D,tt]=(0,l.useState)(""),[gr,Yr]=(0,l.useState)(new Set),[pr,Xr]=(0,l.useState)(""),[pa,Ga]=(0,l.useState)({col:null,dir:"asc"}),H2=c=>Ga(M=>M.col!==c?{col:c,dir:"asc"}:M.dir==="asc"?{col:c,dir:"desc"}:{col:null,dir:"asc"}),[Qr,S2]=(0,l.useState)(()=>{try{let c=localStorage.getItem("tbcWorkFont");return h4[c]?c:"m"}catch{return"m"}}),ke=c=>{S2(c);try{localStorage.setItem("tbcWorkFont",c)}catch{}},[An,A2]=(0,l.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),Yd=c=>A2(M=>{let w=M.includes(c)?M.filter(S=>S!==c):[...M,c];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(w))}catch{}return w}),[xe,Le]=(0,l.useState)(!1),[V2,xi]=(0,l.useState)(""),[z2,_2]=(0,l.useState)(""),[Li,ja]=(0,l.useState)(!1),[ct,Zt]=(0,l.useState)(null),[ta,fa]=(0,l.useState)(!1),[Vn,zn]=(0,l.useState)(!1),H=(0,l.useRef)(!1),[wt,za]=(0,l.useState)([]),[Qt,Xd]=(0,l.useState)(()=>new Set),[Qd,j4]=(0,l.useState)([]),[_n,W4]=(0,l.useState)([]),[Kd,Jd]=(0,l.useState)([]),T2=(0,l.useRef)("mine"),[Mi,Tn]=(0,l.useState)(null),[Kr,N2]=(0,l.useState)(null),[H4,Nn]=(0,l.useState)(null),[Rd,E2]=(0,l.useState)(null),Ya=h4[Qr],_a=Ya+3,aa=i.date,Fd=(0,l.useRef)(null),mi=(0,l.useRef)(0),Xa=(c,M)=>{g({type:c,text:M}),clearTimeout(Fd.current),Fd.current=setTimeout(()=>g({type:"",text:""}),3200)},kt=async(c,M)=>{let{data:w,error:S}=await a.rpc(c,M||{});if(S)throw S;return w},Dt=async(c,M)=>{try{let w=await c();return await D2(!0),Ci(),T2.current==="notice"&&ac(),M&&Xa("success",typeof M=="function"?M(w):M),w}catch(w){Xa("error",Sn(w)),await D2(!0);return}},Vt=(0,l.useMemo)(()=>{if(z==="today")return{start:aa,end:aa};if(z==="month"){let[w,S]=aa.split("-").map(Number);return{start:`${w}-${String(S).padStart(2,"0")}-01`,end:M4(Date.UTC(w,S,0))}}if(z==="week"){let w=iv(aa);return{start:w,end:j2(w,6)}}let c=A||aa,M=D||c;return c<=M?{start:c,end:M}:{start:M,end:c}},[z,A,D,aa]);(0,l.useEffect)(()=>{let c=setInterval(()=>n(M=>{let w=s4();return w.date===M.date&&w.time===M.time?M:w}),3e4);return()=>clearInterval(c)},[]);let S4=async()=>{try{let c=await kt("work_current_member"),M=await kt("work_list_people");return d(c),s(M||[]),Yr(new Set((M||[]).filter(w=>Zd.includes(w.role)).map(w=>w.member_id))),k(""),!0}catch(c){return k(Sn(c)),!1}},D2=async c=>{let M=++mi.current;c||C(!0);try{let w=r&&r.fetchAllData?r.fetchAllData:F=>F(),S=F=>{if(F&&F.error)throw F.error;return F&&F.data||[]},Q=S(await w(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).is("parent_id",null).lte("start_date",Vt.end).gte("end_date",Vt.start))),Wt=S(await w(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).is("parent_id",null).lte("end_date",aa).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),Ot=new Set(Q.map(F=>F.id)),xt=Wt.map(F=>F.id).filter(F=>!Ot.has(F)),ra=[];if(xt.length&&(ra=S(await w(()=>a.from("work_items").select("*, work_assignees(*)").in("id",xt)))),M!==mi.current)return;let O=[];for(let F of[...Q,...ra]){let{work_assignees:qt,...ea}=F;for(let Y of qt||[])O.push({key:Y.id,item:{...ea,assigneeCount:(qt||[]).length},a:Y})}x(O);let B=[...new Set(O.map(F=>F.item.id))],R=[];if(B.length){let F=S(await w(()=>a.from("work_items").select("*, work_assignees(*)").in("parent_id",B).is("canceled_at",null)));for(let qt of F){let{work_assignees:ea,...Y}=qt;for(let $ of ea||[])R.push({key:$.id,item:{...Y,assigneeCount:(ea||[]).length},a:$})}}if(M!==mi.current)return;j4(R)}catch(w){M===mi.current&&Xa("error","讀取失敗："+Sn(w))}finally{M===mi.current&&!c&&C(!1)}};(0,l.useEffect)(()=>{S4()},[]),(0,l.useEffect)(()=>{o&&D2(!1)},[o,Vt.start,Vt.end,aa]),(0,l.useEffect)(()=>{z==="custom"&&!A&&(T(aa),tt(j2(aa,6)))},[z]);let Me=(0,l.useMemo)(()=>{let c={};return h.forEach(M=>{c[M.member_id]={name:M.name,role:M.role}}),c},[h]),fv=o?Me[o]:null,O2=(0,l.useMemo)(()=>h.filter(c=>Zd.includes(c.role)),[h]),U2=c=>{let M=c.a.status==="done",w=c.a.status==="awaiting_confirm",S=!!c.a.skipped_at||c.a.status==="on_hold",Q=Bt(c.item.end_time),Wt=!M&&!w&&!S&&(c.item.end_date<i.date||c.item.end_date===i.date&&Q&&Q<i.time);return{...c,done:M,awaiting:w,skipped:S,overdue:Wt,isMine:c.a.member_id===o,isCreator:c.item.creator_member_id===o,canManage:c.item.creator_member_id===o||c.item.entered_by===o,isRoutine:c.item.assigneeCount===1&&c.item.creator_member_id===c.a.member_id,isRecurring:!!c.item.recurring_rule_id,person:Me[c.a.member_id],dispatcher:Me[c.item.creator_member_id]}},{overdueRows:En,groups:Z2,total:$d}=(0,l.useMemo)(()=>{let c=p.map(U2),M=pr.trim().toLowerCase(),w=B=>!M||[B.item.title,B.item.note,B.person&&B.person.name,B.dispatcher&&B.dispatcher.name].some(R=>R&&String(R).toLowerCase().includes(M)),S=c.filter(B=>(L==="mine"?B.isMine:L==="tome"?B.isMine&&!B.isCreator:L==="dispatched"?B.canManage&&!B.isMine:gr.has(B.a.member_id))&&w(B)),Q=S.filter(B=>B.overdue).sort((B,R)=>(B.item.end_date+Bt(B.item.end_time)).localeCompare(R.item.end_date+Bt(R.item.end_time))||(B.person&&B.person.name||"").localeCompare(R.person&&R.person.name||"")),Wt=S.filter(B=>!B.overdue&&B.item.start_date<=Vt.end&&B.item.end_date>=Vt.start),Ot={};Wt.forEach(B=>{(Ot[B.item.start_date]=Ot[B.item.start_date]||[]).push(B)});let xt=Object.keys(Ot).sort().map(B=>{let R=Ot[B].sort((qt,ea)=>{if(L!=="all")return qt.a.sort_order-ea.a.sort_order||String(qt.a.created_at).localeCompare(String(ea.a.created_at));let Y=Bt(qt.item.start_time)||"99:99",$=Bt(ea.item.start_time)||"99:99";return Y.localeCompare($)||(qt.person&&qt.person.name||"").localeCompare(ea.person&&ea.person.name||"")}),F=L==="mine"&&B>=Vt.start&&!M;return{date:B,rows:R,canMove:F}}),ra=Q,O=xt;if(pa.col){let B=pa.dir==="asc"?1:-1,R=(Y,$)=>String(Y||"").localeCompare(String($||""),"zh-Hant"),F=Y=>Y.done?3:Y.awaiting?2:Y.skipped?1:0,ea={title:(Y,$)=>R(Y.item.title,$.item.title),who:(Y,$)=>R(Y.dispatcher&&Y.dispatcher.name,$.dispatcher&&$.dispatcher.name),doer:(Y,$)=>R(Y.person&&Y.person.name,$.person&&$.person.name),status:(Y,$)=>F(Y)-F($),priority:(Y,$)=>(p4[Y.item.priority]??1)-(p4[$.item.priority]??1),hours:(Y,$)=>{let Jr=g4(Y.item),Bi=g4($.item);return Jr==null&&Bi==null?0:Jr==null?2*B:Bi==null?-2*B:Jr-Bi},date:(Y,$)=>(Y.item.start_date+Bt(Y.item.start_time)).localeCompare($.item.start_date+Bt($.item.start_time))}[pa.col];if(ea){let Y=$=>[...$].sort((Jr,Bi)=>B*ea(Jr,Bi));pa.col==="date"?(ra=Y(Q),O=[...xt].sort(($,Jr)=>B*$.date.localeCompare(Jr.date))):(ra=Y(Q),O=xt.map($=>({...$,rows:Y($.rows)})))}O=O.map(Y=>({...Y,canMove:!1}))}return{overdueRows:ra,groups:O,total:Q.length+Wt.length}},[p,i,o,L,gr,Vt,Me,pr,pa]),Dn=(0,l.useMemo)(()=>{let c={};return Qd.map(U2).sort((M,w)=>(M.item.start_date+Bt(M.item.start_time)).localeCompare(w.item.start_date+Bt(w.item.start_time))||String(M.item.created_at).localeCompare(String(w.item.created_at))).forEach(M=>{(c[M.item.parent_id]=c[M.item.parent_id]||[]).push(M)}),c},[Qd,i,o,Me]),On=(0,l.useMemo)(()=>{let c={};return _n.forEach(M=>{M.item_id&&!M.read_at&&!(M.item_id in c)&&(c[M.item_id]=M.created_at)}),Kd.map(U2).filter(M=>(M.canManage||M.isMine)&&M.item.id in c).map(M=>({...M,notice:!0})).sort((M,w)=>String(c[w.item.id]||"").localeCompare(String(c[M.item.id]||"")))},[Kd,_n,o,Me,i]),yi=u4.filter(c=>c.locked||!An.includes(c.id)),A4=c=>typeof c.w=="function"?c.w(Ya):c.w,V4=c=>typeof c.min=="function"?c.min(Ya):c.min,q2=`56px ${yi.map(A4).join(" ")}`,z4=56+yi.reduce((c,M)=>c+V4(M),0)+16,wi=(c,M,w)=>Dt(()=>{let S={...c.item,...M};return kt("work_update_routine",{p_item_id:S.id,p_title:S.title,p_start_date:S.start_date,p_start_time:S.start_time||null,p_end_date:S.end_date,p_end_time:S.end_time||null,p_priority:S.priority||"normal",p_note:S.note||null,p_meeting_flag:null})},w),_4=(c,M,w)=>{if(!M||!w){Xa("error","日期必填");return}let S=M,Q=w;if(M!==c.item.start_date&&w===c.item.end_date&&(Q=j2(M,m4(c.item.end_date,c.item.start_date))),Q<S){Xa("error","結束日期不能早於開始日期");return}let Wt=!(S<=Vt.end&&Q>=Vt.start);return wi(c,{start_date:S,end_date:Q},Wt?`已改到 ${qa(S)}（目前顯示範圍看不到，切換範圍就會出現）`:null)},T4=(c,M,w)=>wi(c,{start_time:M||null,end_time:w||null}),N4=(c,M)=>{if(!M){Xa("error","任務名稱不能空白");return}return wi(c,{title:M})},vv=c=>Dt(()=>kt("work_complete",{p_item_id:c.item.id,p_note:null}),"已完成"),E4=(c,M)=>Dt(()=>kt("work_set_status",{p_item_id:c.item.id,p_status:M}),M==="done"&&c.item.creator_member_id!==o?"完成回報，等待派工者確認":"狀態已更新"),D4=c=>Dt(()=>kt("work_confirm",{p_assignee_id:c.a.id}),"已確認完成"),[G2,Y2]=(0,l.useState)(null),[Id,Un]=(0,l.useState)(null),[Pd,tc]=(0,l.useState)(""),O4=c=>{tc(""),Un(c)},U4=async()=>{let c=Id;Un(null),await Dt(()=>kt("work_return",{p_assignee_id:c.a.id,p_note:Pd.trim()||null}),"已退回")},kv=(c,M)=>Dt(()=>kt("work_move",{p_item_id:c.item.id,p_where:M})),Z4=c=>Dt(()=>kt("work_copy",{p_item_id:c.item.id}),"複製成功"),q4=c=>v({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或擱置不會刪除，標記「取消」並保留紀錄`,onConfirm:async()=>{v(null),await Dt(()=>kt("work_delete",{p_item_id:c.item.id}),M=>M==="canceled"?"這筆已有進度紀錄，已改為取消並保留紀錄":"已刪除")}}),xv=async()=>{let c=V2.trim();if(!c||Li)return;ja(!0);let M=z2||aa,w=await Dt(()=>kt("work_create_routine",{p_title:c,p_start_date:M,p_end_date:M}));if(ja(!1),w){xi("");let S=M<=Vt.end&&M>=Vt.start;Xa("success",S?"已新增":`已新增到 ${qa(M)}（目前顯示範圍看不到，切換範圍就會出現）`)}},G4=async c=>{ja(!0);let M;if(ct.mode==="editRule")M=await Dt(()=>kt("work_update_rule",{p_rule_id:ct.rule.id,p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:c.isActive}),"週期工作已儲存（只影響之後產生的工作）"),M!==void 0&&await Zn();else if(c.repeat==="none"&&c.assigneeIds&&(ct.parent||!(c.assigneeIds.length===1&&c.assigneeIds[0]===o&&c.dispatcherId===o))){let w=c.assigneeIds.some(S=>S!==o);M=await Dt(()=>kt("work_assign_create",{p_title:c.title,p_assignee_ids:c.assigneeIds,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_dispatcher_id:c.dispatcherId,p_parent_id:ct.parent?ct.parent.id:null}),w?"派工完成，送出提醒":ct.parent?"子工作已新增":"已新增"),M!==void 0&&ct.parent&&Xd(S=>new Set(S).add(ct.parent.id))}else c.repeat==="none"?M=await Dt(()=>kt("work_create_routine",{p_title:c.title,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已新增"):M=await Dt(()=>kt("work_create_rule",{p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已建立週期工作，之後會在凌晨自動出現在清單");ja(!1),M!==void 0&&Zt(null)},Zn=async()=>{try{let{data:c,error:M}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(M)throw M;za(c||[])}catch(c){Xa("error","讀取週期工作失敗："+Sn(c))}},Ci=async()=>{try{let c=await kt("work_notifications_list")||[];return W4(c),c}catch{return[]}};(0,l.useEffect)(()=>{if(!o)return;Ci();let c=setInterval(Ci,6e4);return()=>clearInterval(c)},[o]);let Y4=_n.filter(c=>!c.read_at),X2=new Set(Y4.map(c=>c.item_id||c.id)).size,X4=async()=>{try{await kt("work_notifications_read",{p_ids:null}),await Ci()}catch{}},ac=async c=>{let M=[...new Set((c||_n).filter(w=>!w.read_at).map(w=>w.item_id).filter(Boolean))];if(!M.length){Jd([]);return}try{let{data:w,error:S}=await a.from("work_items").select("*, work_assignees(*)").in("id",M).is("canceled_at",null);if(S)throw S;let Q=[];for(let Wt of w||[]){let{work_assignees:Ot,...xt}=Wt;for(let ra of Ot||[])Q.push({key:ra.id,item:{...xt,assigneeCount:(Ot||[]).length},a:ra})}Jd(Q)}catch(w){Xa("error","讀取提醒失敗："+Sn(w))}},bi=async c=>{let M=T2.current;if(T2.current=c,j(c),c==="notice"){let w=await Ci();await ac(w)}else M==="notice"&&await X4()},rc=async()=>{fa(!0),await Zn()};(0,l.useEffect)(()=>{!ct&&H.current&&(H.current=!1,rc())},[ct]);let Q4=async c=>{await Dt(()=>kt("work_update_rule",{p_rule_id:c.id,p_title:c.title,p_freq:c.freq,p_weekdays_only:c.weekdays_only,p_week_days:c.week_days,p_month_day:c.month_day,p_month_last_day:c.month_last_day,p_start_date:c.start_date,p_until_date:c.until_date,p_start_time:c.start_time,p_end_time:c.end_time,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:!c.is_active}),c.is_active?"已暫停":"已啟用")!==void 0&&await Zn()},K4=c=>v({title:"警告",confirmText:"刪除",message:`刪除週期工作？
刪除未來排程，保留歷史紀錄`,onConfirm:async()=>{v(null),await Dt(()=>kt("work_delete_rule",{p_rule_id:c.id}),"週期工作已刪除")!==void 0&&await Zn()}}),J4=async(c,M)=>{let w=Kr;if(N2(null),E2(null),Nn(null),!w||w.date!==c.date||w.key===M.key)return;let S=c.rows.filter(xt=>!xt.overdue),Q=S.findIndex(xt=>xt.key===w.key),Wt=S.findIndex(xt=>xt.key===M.key),Ot=c.rows.find(xt=>xt.key===w.key);!Ot||Q<0||Wt<0||await Dt(()=>kt("work_move_to",{p_item_id:Ot.item.id,p_target_item_id:M.item.id,p_after:Q<Wt}))},me="flex items-center bg-slate-100 p-1 rounded-full shrink-0",Wa=c=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,Ha=Mi?[...En,...Z2.flatMap(c=>c.rows),...On,...Object.values(Dn).flat()].find(c=>c.key===Mi.key):null,qn=Ha?Z2.find(c=>c.rows.some(M=>M.key===Ha.key)):null,ec=(c,M)=>{let w=c.canManage,S=c.isMine&&c.isRoutine,Q=M?M.rows.filter(O=>!O.overdue):[],Wt=!!M&&M.canMove&&S&&!c.overdue,Ot=Rd===c.key&&Kr&&Kr.key!==c.key,xt=c.done||c.skipped,ra=O=>{switch(O.id){case"title":return l.default.createElement("div",{key:O.id,className:"min-w-0 w-full flex items-start gap-1.5"},!c.item.parent_id&&(Dn[c.item.id]||[]).length>0&&l.default.createElement("button",{type:"button",onClick:()=>Xd(B=>{let R=new Set(B);return R.has(c.item.id)?R.delete(c.item.id):R.add(c.item.id),R}),"aria-label":Qt.has(c.item.id)?"收合子工作":"展開子工作",className:"tbc-expand mt-0.5 shrink-0 inline-flex items-center gap-0.5 rounded-md px-1 py-0.5 text-slate-500 hover:bg-slate-100"},Qt.has(c.item.id)?l.default.createElement(C2,{size:_a}):l.default.createElement(t4,{size:_a}),l.default.createElement("span",{className:"text-[0.75em] px-1.5 rounded bg-slate-100 text-slate-600"},new Set(Dn[c.item.id].map(B=>B.item.id)).size)),l.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},c.a.status==="pending"&&c.a.return_note&&l.default.createElement("button",{type:"button",onClick:()=>Y2(c),className:"tbc-return-tag inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-amber-200 bg-amber-50 text-amber-700 font-bold hover:brightness-95 cursor-pointer whitespace-nowrap"},l.default.createElement(Od,{size:Math.round(Ya*.8)}),"退回"),c.isRecurring&&l.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},l.default.createElement(Hn,{size:Math.round(Ya*.95)})),c.overdue&&l.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},l.default.createElement(Nd,{size:Math.round(Ya*.8)})," 逾期")),l.default.createElement("div",{className:"min-w-0 flex-1"},l.default.createElement(x4,{value:c.item.title,placeholder:"工作摘要",canEdit:w,onSave:B=>N4(c,B),className:`font-medium ${xt?"text-slate-400 line-through":c.overdue?"text-red-600":"text-slate-900"}`})));case"who":return l.default.createElement("div",{key:O.id,className:"min-w-0"},l.default.createElement(v4,{person:c.dispatcher,size:_a}));case"doer":return l.default.createElement("div",{key:O.id,className:"min-w-0"},l.default.createElement(v4,{person:c.person,size:_a}));case"date":{let B=c.item.start_date!==c.item.end_date;return l.default.createElement("div",{key:O.id,className:`min-w-0 ${c.overdue?"text-red-600":"text-slate-700"}`},l.default.createElement(L4,{type:"date",a:c.item.start_date,b:c.item.end_date,canEdit:w,onSave:(R,F)=>_4(c,R,F)},B?`${qa(c.item.start_date)} → ${qa(c.item.end_date)}`:qa(c.item.start_date)))}case"time":{let B=Bt(c.item.start_time),R=Bt(c.item.end_time);return l.default.createElement("div",{key:O.id,className:"min-w-0 text-slate-700"},l.default.createElement(L4,{type:"time",a:B,b:R,canEdit:w,onSave:(F,qt)=>T4(c,F,qt)},B||R?`${B||"—"} ~ ${R||"—"}`:l.default.createElement("span",{className:"text-slate-300"},w?"時間設定":"")))}case"hours":return l.default.createElement("div",{key:O.id,className:"text-slate-500 text-[0.9em]"},ov(c.item)||"");case"priority":return l.default.createElement("div",{key:O.id},l.default.createElement("button",{type:"button",disabled:!w,onClick:()=>wi(c,{priority:dv[c.item.priority]||"normal"}),title:w?"點一下切換":"",className:`tbc-prio text-[0.75em] px-2 py-0.5 rounded border font-bold ${f4[c.item.priority]||f4.normal} ${w?"hover:brightness-95 cursor-pointer":"cursor-default"}`},lv[c.item.priority]||"普通"));case"note":return l.default.createElement("div",{key:O.id,className:"min-w-0 w-full"},l.default.createElement(x4,{value:c.item.note,placeholder:"新增備註",centerEmpty:!0,canEdit:w,onSave:B=>wi(c,{note:B||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let B=c.done?"done":c.awaiting?"awaiting":c.skipped?"on_hold":"pending",R=B==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":B==="awaiting"?"bg-sky-50 border-sky-200 text-sky-700":B==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600",F={pending:"待處理",done:"完成",on_hold:"擱置",awaiting:"待確認"}[B];return c.awaiting&&c.isCreator&&!c.isMine?l.default.createElement("div",{key:O.id,className:"flex items-center gap-1.5 tbc-review whitespace-nowrap"},l.default.createElement("button",{type:"button",onClick:()=>D4(c),className:"h-8 px-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},"確認"),l.default.createElement("button",{type:"button",onClick:()=>O4(c),className:"h-8 px-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},"退回")):c.isMine?l.default.createElement("select",{key:O.id,value:B,onChange:qt=>E4(c,qt.target.value),"aria-label":"狀態",title:"點一下改變狀態",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${R}`},l.default.createElement("option",{value:"pending"},"待處理"),l.default.createElement("option",{value:"done"},"完成"),l.default.createElement("option",{value:"on_hold"},"擱置"),B==="awaiting"&&l.default.createElement("option",{value:"awaiting",disabled:!0},"待確認")):l.default.createElement("span",{key:O.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${R}`},F)}default:return null}};return l.default.createElement("div",{key:c.key,draggable:Wt&&H4===c.key,onDragStart:O=>{N2({key:c.key,date:M.date}),O.dataTransfer.effectAllowed="move";try{O.dataTransfer.setData("text/plain",c.key)}catch{}},onDragOver:O=>{Kr&&M&&Kr.date===M.date&&!c.overdue&&(O.preventDefault(),Rd!==c.key&&E2(c.key))},onDrop:O=>{O.preventDefault(),M&&J4(M,c)},onDragEnd:()=>{N2(null),E2(null),Nn(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors
                    ${c.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Kr&&Kr.key===c.key?"opacity-40":""}
                    ${Ot?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:q2}},l.default.createElement("div",{className:"flex items-center gap-0.5 px-2"},Wt?l.default.createElement("span",{onMouseDown:()=>Nn(c.key),onMouseUp:()=>Nn(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},l.default.createElement(Ug,{size:_a})):l.default.createElement("span",{style:{width:_a}}),w||c.isMine&&!c.item.parent_id?l.default.createElement("button",{onClick:O=>{let B=O.currentTarget.getBoundingClientRect();Tn({key:c.key,x:Math.min(B.left,window.innerWidth-220),y:Math.min(B.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},l.default.createElement(Og,{size:_a})):l.default.createElement("span",{style:{width:_a+8}})),yi.map(O=>{let B=O.id==="title"||O.id==="note";return l.default.createElement("div",{key:O.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${B?"[&>*]:w-full":"justify-center text-center"}`},ra(O))}))},ic=new Set,nc=c=>Zt({mode:"create",parent:c.item,initial:{start_date:c.item.start_date,end_date:c.item.end_date}}),Q2=(c,M)=>{let w=c.item.parent_id?[]:Dn[c.item.id]||[],S=w.length>0&&Qt.has(c.item.id)&&!ic.has(c.item.id);return S&&ic.add(c.item.id),l.default.createElement(l.default.Fragment,{key:c.key},ec(c,M),S&&l.default.createElement("div",{className:"tbc-subs bg-slate-50/70 border-b border-slate-200 pl-8 pr-3 py-2"},l.default.createElement("div",{className:"rounded-lg border border-slate-200 bg-white overflow-hidden"},l.default.createElement("div",{className:"grid bg-slate-100 border-b border-slate-200 text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:q2}},l.default.createElement("span",{className:"py-1.5"}),yi.map(Q=>l.default.createElement("span",{key:Q.id,className:"py-1.5 px-2 border-l border-slate-200 text-center whitespace-nowrap"},Q.id==="title"?"子工作":Q.label))),w.map(Q=>ec(Q,null)),(c.canManage||c.isMine)&&l.default.createElement("button",{type:"button",onClick:()=>nc(c),className:"tbc-add-sub w-full text-left px-4 py-2 text-[0.9em] text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-colors"},"+ 新增子工作"))))};return l.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:Ya}},l.default.createElement(o4,{active:"work",shell:e}),l.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},l.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},l.default.createElement("div",{className:"flex items-center gap-4 min-w-0"},l.default.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:Ya*1.45}},"工作日誌"),l.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},l.default.createElement(Kg,{size:16,className:"text-slate-400 shrink-0"}),l.default.createElement("input",{type:"text",value:pr,onChange:c=>Xr(c.target.value),onKeyDown:c=>{c.key==="Escape"&&Xr("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),pr&&l.default.createElement("button",{type:"button",onClick:()=>Xr(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},l.default.createElement(ki,{size:14})))),l.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},l.default.createElement("button",{onClick:()=>Zt({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},l.default.createElement(fi,{size:16}),"新增"),l.default.createElement("div",{className:me},l.default.createElement("button",{onClick:rc,className:Wa(!1)},l.default.createElement(fi,{size:14,className:"text-slate-500"}),"週期工作")),l.default.createElement("div",{className:"relative"},l.default.createElement("button",{onClick:()=>Le(c=>!c),className:`${me} !p-1.5`},l.default.createElement("span",{className:Wa(xe)},l.default.createElement(B2,{size:14,className:"text-slate-500"}),"隱藏")),xe&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Le(!1)}),l.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},u4.filter(c=>!c.locked).map(c=>l.default.createElement("label",{key:c.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${c.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},l.default.createElement("input",{type:"checkbox",disabled:c.locked,checked:c.locked||!An.includes(c.id),onChange:()=>Yd(c.id),className:"accent-indigo-600"}),c.label,c.locked&&l.default.createElement(Dd,{size:11})))))),l.default.createElement("div",{className:me,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([c,M,w])=>l.default.createElement("button",{key:c,onClick:()=>ke(c),title:M,"aria-label":`文字${M}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${Qr===c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:w}},"A"))))),f?l.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},l.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},l.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},l.default.createElement(Dd,{size:30})),l.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),l.default.createElement("p",{className:"text-slate-500 font-normal"},f),l.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧師、行政與管理員。"))):l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 relative z-[15] shrink-0 space-y-3"},l.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},(X2>0||L==="notice")&&l.default.createElement("button",{onClick:()=>bi("notice"),"aria-label":"提醒",title:"提醒",className:`tbc-bell relative h-11 w-11 rounded-full flex items-center justify-center transition-colors ${L==="notice"?"bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-200":"bg-slate-100 hover:bg-slate-200 text-slate-600"}`},l.default.createElement(Ig,{size:18}),X2>0&&l.default.createElement("span",{className:"tbc-bell-count absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[11px] leading-[18px] text-center font-bold"},X2)),l.default.createElement("div",{className:me},l.default.createElement("button",{onClick:()=>bi("mine"),className:Wa(L==="mine")},"我的"),l.default.createElement("button",{onClick:()=>bi("tome"),className:Wa(L==="tome")},"派工給我"),l.default.createElement("button",{onClick:()=>bi("dispatched"),className:Wa(L==="dispatched")},"我派工的"),l.default.createElement("button",{onClick:()=>bi("all"),className:Wa(L==="all")},"全部")),L==="all"&&l.default.createElement("div",{className:"relative"},l.default.createElement("button",{onClick:()=>zn(c=>!c),className:`${me} !p-1.5`},l.default.createElement("span",{className:Wa(Vn)},l.default.createElement(y2,{size:14,className:"text-slate-500"}),"人員（",gr.size,"/",O2.length,"）")),Vn&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>zn(!1)}),l.default.createElement("div",{className:"absolute left-0 top-full mt-2 z-40 w-56 max-h-80 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},l.default.createElement("div",{className:"flex gap-2 px-1 pb-2 mb-1 border-b border-slate-100"},l.default.createElement("button",{onClick:()=>Yr(new Set(O2.map(c=>c.member_id))),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全選"),l.default.createElement("button",{onClick:()=>Yr(new Set),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全不選")),O2.map(c=>l.default.createElement("label",{key:c.member_id,className:"flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none text-slate-700 hover:bg-slate-50 cursor-pointer"},l.default.createElement("input",{type:"checkbox",checked:gr.has(c.member_id),onChange:()=>Yr(M=>{let w=new Set(M);return w.has(c.member_id)?w.delete(c.member_id):w.add(c.member_id),w}),className:"accent-indigo-600"}),c.name))))),L!=="notice"&&l.default.createElement("div",{className:me},l.default.createElement("button",{onClick:()=>b("today"),className:Wa(z==="today")},"今日"),l.default.createElement("button",{onClick:()=>b("week"),className:Wa(z==="week")},"本週"),l.default.createElement("button",{onClick:()=>b("month"),className:Wa(z==="month")},"本月"),l.default.createElement("button",{onClick:()=>b("custom"),className:Wa(z==="custom")},"自訂")),L!=="notice"&&z==="custom"&&l.default.createElement("div",{className:"flex items-center gap-2"},l.default.createElement("input",{type:"date",value:A,onChange:c=>T(c.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),l.default.createElement("span",{className:"text-slate-400"},"～"),l.default.createElement("input",{type:"date",value:D,min:A,onChange:c=>tt(c.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),l.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},L==="notice"?l.default.createElement("span",null,"提醒的派工　共 ",On.length," 筆"):l.default.createElement(l.default.Fragment,null,Vt.start===Vt.end?qa(Vt.start):`${qa(Vt.start)} ～ ${qa(Vt.end)}`,l.default.createElement("span",{className:"ml-3"},"共 ",$d," 筆"))))),l.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},l.default.createElement("div",{className:"space-y-4",style:{minWidth:z4}},l.default.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:q2}},l.default.createElement("span",{className:"py-2"}),yi.map(c=>c.sortable?l.default.createElement("button",{key:c.id,type:"button",onClick:()=>H2(c.id),title:"點一下排序","aria-sort":pa.col===c.id?pa.dir==="asc"?"ascending":"descending":"none",className:`py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap font-medium inline-flex items-center justify-center gap-0.5 hover:bg-slate-200/70 transition-colors ${pa.col===c.id?"text-indigo-600":""}`},c.label,pa.col===c.id&&(pa.dir==="asc"?l.default.createElement(Gg,{size:14}):l.default.createElement(C2,{size:14}))):l.default.createElement("span",{key:c.id,className:"py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap"},c.label))),L==="notice"?On.length===0?l.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},"目前沒有提醒"):l.default.createElement("div",{className:"tbc-notice-list bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},On.map(c=>Q2(c,null))):y&&p.length===0?l.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):$d===0?l.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},pr.trim()?`找不到符合「${pr.trim()}」的工作（只搜尋目前顯示的範圍）`:"新增一筆工作，開始記錄"):l.default.createElement(l.default.Fragment,null,En.length>0&&l.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},l.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},l.default.createElement(Nd,{size:_a})," 逾期未完成 ",l.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},En.length)),En.map(c=>Q2(c,null))),Z2.map(c=>{let M=nv(c.date,aa);return l.default.createElement("div",{key:c.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},l.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},l.default.createElement("span",{className:`font-bold ${M.tag==="今天"?"text-indigo-600":"text-slate-800"}`},M.text)),c.rows.map(w=>Q2(w,c)))}))))),G2&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm",onClick:()=>Y2(null)},l.default.createElement("div",{className:"tbc-return-info bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in",onClick:c=>c.stopPropagation()},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(Od,{size:20,className:"text-amber-600"}),"退回原因"),l.default.createElement("button",{"aria-label":"關閉",onClick:()=>Y2(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},l.default.createElement(ki,{size:20}))),l.default.createElement("div",{className:"p-5 space-y-2"},l.default.createElement("div",{className:"tbc-return-title font-bold text-slate-900"},"工作摘要：",G2.item.title),l.default.createElement("div",{className:"tbc-return-reason text-slate-900 whitespace-pre-wrap"},G2.a.return_note)))),Id&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(Pg,{size:20,className:"text-indigo-600"}),"退回"),l.default.createElement("button",{onClick:()=>Un(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},l.default.createElement(ki,{size:20}))),l.default.createElement("div",{className:"p-5 space-y-2"},l.default.createElement("label",{className:"text-xs font-medium text-slate-500"},"原因（選填）"),l.default.createElement("textarea",{autoFocus:!0,value:Pd,onChange:c=>tc(c.target.value),rows:3,placeholder:"簡要說明",className:"tbc-return-text w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"})),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},l.default.createElement("button",{onClick:()=>Un(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full"},"取消"),l.default.createElement("button",{onClick:U4,className:"tbc-return-ok flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full"},"退回")))),Mi&&Ha&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>Tn(null),onContextMenu:c=>{c.preventDefault(),Tn(null)}}),l.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:Mi.x,top:Mi.y,fontSize:Ya}},(()=>{let M=(qn?qn.rows.filter(Q=>!Q.overdue):[]).findIndex(Q=>Q.key===Ha.key),w=!!qn&&qn.canMove&&M>=0,S=(Q,Wt,Ot,xt,ra)=>l.default.createElement("button",{disabled:xt,onClick:()=>{Tn(null),Ot()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${ra?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},l.default.createElement(Q,{size:_a-1}),Wt);return l.default.createElement(l.default.Fragment,null,!Ha.item.parent_id&&S(fi,"新增子工作",()=>nc(Ha)),Ha.canManage&&Ha.isRoutine&&S(qg,"複製",()=>Z4(Ha)),Ha.canManage&&S(Ed,"刪除",()=>q4(Ha),!1,!0))})())),ct&&l.default.createElement(hv,{key:ct.mode+(ct.rule?ct.rule.id:"")+(ct.parent?ct.parent.id:""),mode:ct.mode,parent:ct.parent,initial:ct.rule||ct.initial,presetRepeat:ct.preset,today:aa,busy:Li,onClose:()=>Zt(null),onSubmit:G4,people:h,meId:o}),ta&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(Hn,{className:"text-indigo-600",size:20})," 我的週期工作"),l.default.createElement("button",{onClick:()=>fa(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},l.default.createElement(ki,{size:20}))),l.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},l.default.createElement("button",{onClick:()=>{fa(!1),Zt({mode:"createRule",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},l.default.createElement(fi,{size:16}),"新增週期工作"),wt.length===0?l.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"尚未建立週期工作"):wt.map(c=>l.default.createElement("div",{key:c.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${c.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},l.default.createElement("div",{className:"min-w-0"},l.default.createElement("div",{className:`font-medium truncate ${c.is_active?"text-slate-900":"text-slate-400"}`},c.title),l.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},cv(c),c.start_time?`　${Bt(c.start_time)}${c.end_time?"~"+Bt(c.end_time):""}`:"",c.until_date?`　到 ${qa(c.until_date)}`:"",c.is_active?"":"　（暫停）")),l.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},l.default.createElement("button",{onClick:()=>{H.current=!0,fa(!1),Zt({mode:"editRule",rule:c})},className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},l.default.createElement(Qg,{size:16})),l.default.createElement("button",{onClick:()=>Q4(c),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${c.is_active?"bg-emerald-50 text-emerald-600 hover:bg-emerald-100":"bg-amber-50 text-amber-600 hover:bg-amber-100"}`,title:c.is_active?"啟用":"暫停","aria-label":c.is_active?"啟用":"暫停"},c.is_active?l.default.createElement(Xg,{size:16}):l.default.createElement(Yg,{size:16})),l.default.createElement("button",{onClick:()=>K4(c),className:"tbc-rule-del p-2.5 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg active:scale-95 transition-colors",title:"刪除","aria-label":"刪除週期工作"},l.default.createElement(Ed,{size:16})))))))),E.text&&l.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},l.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${E.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},l.default.createElement("div",{className:"shrink-0 mt-0.5"},E.type==="success"?l.default.createElement(Zg,{size:18}):l.default.createElement(vi,{size:18})),l.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},E.text))),u&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"p-8 text-center"},l.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},l.default.createElement(vi,{size:32})),l.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),l.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},l.default.createElement("button",{onClick:()=>v(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),l.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},w4=uv;var C4=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: "Open Sans", "Noto Sans TC", -apple-system, "PingFang TC", "Microsoft JhengHei", sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
    --color-red-200: oklch(88.5% 0.062 18.334);
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: #f5222d;
    --color-red-600: #d4101b;
    --color-amber-50: oklch(98.7% 0.022 95.277);
    --color-amber-100: oklch(96.2% 0.059 95.617);
    --color-amber-200: oklch(92.4% 0.12 95.746);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-amber-700: oklch(55.5% 0.163 48.998);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-200: oklch(90.5% 0.093 164.15);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-emerald-700: oklch(50.8% 0.118 165.612);
    --color-sky-50: oklch(97.7% 0.013 236.62);
    --color-sky-200: oklch(90.1% 0.058 230.902);
    --color-sky-700: oklch(50% 0.134 242.749);
    --color-indigo-50: #eef6fd;
    --color-indigo-200: #b3d5f6;
    --color-indigo-300: #80b9ee;
    --color-indigo-400: #3d94e2;
    --color-indigo-500: #1a7fd9;
    --color-indigo-600: #0070d5;
    --color-indigo-700: #005cb0;
    --color-violet-50: #eef6fd;
    --color-violet-100: #d9eafb;
    --color-violet-600: #0070d5;
    --color-slate-50: #f7f9fa;
    --color-slate-100: #f5f5f5;
    --color-slate-200: #e8e8e8;
    --color-slate-300: #d9d9d9;
    --color-slate-400: #8c8c8c;
    --color-slate-500: #595959;
    --color-slate-600: #595959;
    --color-slate-700: #3b3e40;
    --color-slate-800: #262626;
    --color-slate-900: #262626;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 600;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: .5rem;
    --radius-2xl: .75rem;
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --blur-sm: 8px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring:where(:not(iframe)) {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .sticky {
    position: sticky;
  }
  .inset-0 {
    inset: 0px;
  }
  .inset-x-0 {
    inset-inline: 0px;
  }
  .-top-1 {
    top: calc(var(--spacing) * -1);
  }
  .top-0 {
    top: 0px;
  }
  .top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-24 {
    top: calc(var(--spacing) * 24);
  }
  .top-full {
    top: 100%;
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .right-0 {
    right: 0px;
  }
  .right-2 {
    right: calc(var(--spacing) * 2);
  }
  .bottom-3 {
    bottom: calc(var(--spacing) * 3);
  }
  .bottom-8 {
    bottom: calc(var(--spacing) * 8);
  }
  .bottom-full {
    bottom: 100%;
  }
  .left-0 {
    left: 0px;
  }
  .left-1\\/2 {
    left: calc(1 / 2 * 100%);
  }
  .left-3 {
    left: calc(var(--spacing) * 3);
  }
  .left-full {
    left: 100%;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }
  .z-\\[15\\] {
    z-index: 15;
  }
  .z-\\[60\\] {
    z-index: 60;
  }
  .z-\\[70\\] {
    z-index: 70;
  }
  .z-\\[100\\] {
    z-index: 100;
  }
  .z-\\[110\\] {
    z-index: 110;
  }
  .z-\\[120\\] {
    z-index: 120;
  }
  .-mx-1\\.5 {
    margin-inline: calc(var(--spacing) * -1.5);
  }
  .mx-auto {
    margin-inline: auto;
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: var(--spacing);
  }
  .mt-2 {
    margin-top: calc(var(--spacing) * 2);
  }
  .mt-3 {
    margin-top: calc(var(--spacing) * 3);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .mt-14 {
    margin-top: calc(var(--spacing) * 14);
  }
  .mb-1 {
    margin-bottom: var(--spacing);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }
  .mb-5 {
    margin-bottom: calc(var(--spacing) * 5);
  }
  .mb-10 {
    margin-bottom: calc(var(--spacing) * 10);
  }
  .mb-14 {
    margin-bottom: calc(var(--spacing) * 14);
  }
  .ml-0\\.5 {
    margin-left: calc(var(--spacing) * 0.5);
  }
  .ml-2 {
    margin-left: calc(var(--spacing) * 2);
  }
  .ml-3 {
    margin-left: calc(var(--spacing) * 3);
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .inline-flex {
    display: inline-flex;
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-9 {
    height: calc(var(--spacing) * 9);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-11 {
    height: calc(var(--spacing) * 11);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-14 {
    height: calc(var(--spacing) * 14);
  }
  .h-16 {
    height: calc(var(--spacing) * 16);
  }
  .h-24 {
    height: calc(var(--spacing) * 24);
  }
  .h-\\[18px\\] {
    height: 18px;
  }
  .h-\\[100dvh\\] {
    height: 100dvh;
  }
  .h-full {
    height: 100%;
  }
  .max-h-80 {
    max-height: calc(var(--spacing) * 80);
  }
  .max-h-\\[85dvh\\] {
    max-height: 85dvh;
  }
  .max-h-\\[92dvh\\] {
    max-height: 92dvh;
  }
  .min-h-\\[1\\.9em\\] {
    min-height: 1.9em;
  }
  .min-h-\\[100dvh\\] {
    min-height: 100dvh;
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-9 {
    width: calc(var(--spacing) * 9);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-11 {
    width: calc(var(--spacing) * 11);
  }
  .w-12 {
    width: calc(var(--spacing) * 12);
  }
  .w-14 {
    width: calc(var(--spacing) * 14);
  }
  .w-16 {
    width: calc(var(--spacing) * 16);
  }
  .w-24 {
    width: calc(var(--spacing) * 24);
  }
  .w-28 {
    width: calc(var(--spacing) * 28);
  }
  .w-40 {
    width: calc(var(--spacing) * 40);
  }
  .w-52 {
    width: calc(var(--spacing) * 52);
  }
  .w-56 {
    width: calc(var(--spacing) * 56);
  }
  .w-64 {
    width: calc(var(--spacing) * 64);
  }
  .w-\\[72px\\] {
    width: 72px;
  }
  .w-full {
    width: 100%;
  }
  .w-max {
    width: max-content;
  }
  .max-w-2xl {
    max-width: var(--container-2xl);
  }
  .max-w-3xl {
    max-width: var(--container-3xl);
  }
  .max-w-full {
    max-width: 100%;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .max-w-sm {
    max-width: var(--container-sm);
  }
  .max-w-xl {
    max-width: var(--container-xl);
  }
  .min-w-0 {
    min-width: 0px;
  }
  .min-w-\\[18px\\] {
    min-width: 18px;
  }
  .flex-1 {
    flex: 1;
  }
  .shrink-0 {
    flex-shrink: 0;
  }
  .-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-grab {
    cursor: grab;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .cursor-text {
    cursor: text;
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .items-center {
    align-items: center;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-0\\.5 {
    gap: calc(var(--spacing) * 0.5);
  }
  .gap-1 {
    gap: var(--spacing);
  }
  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-2\\.5 {
    gap: calc(var(--spacing) * 2.5);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .gap-6 {
    gap: calc(var(--spacing) * 6);
  }
  :where(.space-y-1\\.5 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-2 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-3 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-4 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));
  }
  :where(.space-y-5 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 5) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 5) * calc(1 - var(--tw-space-y-reverse)));
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-r {
    border-right-style: var(--tw-border-style);
    border-right-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-l {
    border-left-style: var(--tw-border-style);
    border-left-width: 1px;
  }
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .\\!border-red-400 {
    border-color: var(--color-red-400) !important;
  }
  .border-\\[\\#7e00c8\\] {
    border-color: #7e00c8;
  }
  .border-amber-200 {
    border-color: var(--color-amber-200);
  }
  .border-emerald-200 {
    border-color: var(--color-emerald-200);
  }
  .border-indigo-300 {
    border-color: var(--color-indigo-300);
  }
  .border-indigo-600 {
    border-color: var(--color-indigo-600);
  }
  .border-red-100 {
    border-color: var(--color-red-100);
  }
  .border-red-400 {
    border-color: var(--color-red-400);
  }
  .border-sky-200 {
    border-color: var(--color-sky-200);
  }
  .border-slate-100 {
    border-color: var(--color-slate-100);
  }
  .border-slate-200 {
    border-color: var(--color-slate-200);
  }
  .border-slate-300 {
    border-color: var(--color-slate-300);
  }
  .border-violet-100 {
    border-color: var(--color-violet-100);
  }
  .bg-amber-50 {
    background-color: var(--color-amber-50);
  }
  .bg-emerald-50 {
    background-color: var(--color-emerald-50);
  }
  .bg-emerald-600 {
    background-color: var(--color-emerald-600);
  }
  .bg-indigo-50 {
    background-color: var(--color-indigo-50);
  }
  .bg-indigo-50\\/60 {
    background-color: color-mix(in srgb, #eef6fd 60%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-indigo-50) 60%, transparent);
    }
  }
  .bg-indigo-600 {
    background-color: var(--color-indigo-600);
  }
  .bg-red-50 {
    background-color: var(--color-red-50);
  }
  .bg-red-50\\/40 {
    background-color: color-mix(in srgb, oklch(97.1% 0.013 17.38) 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-50) 40%, transparent);
    }
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-600 {
    background-color: var(--color-red-600);
  }
  .bg-sky-50 {
    background-color: var(--color-sky-50);
  }
  .bg-slate-50 {
    background-color: var(--color-slate-50);
  }
  .bg-slate-50\\/70 {
    background-color: color-mix(in srgb, #f7f9fa 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-slate-50) 70%, transparent);
    }
  }
  .bg-slate-50\\/80 {
    background-color: color-mix(in srgb, #f7f9fa 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-slate-50) 80%, transparent);
    }
  }
  .bg-slate-100 {
    background-color: var(--color-slate-100);
  }
  .bg-slate-800 {
    background-color: var(--color-slate-800);
  }
  .bg-slate-900\\/40 {
    background-color: color-mix(in srgb, #262626 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-slate-900) 40%, transparent);
    }
  }
  .bg-transparent {
    background-color: transparent;
  }
  .bg-violet-50 {
    background-color: var(--color-violet-50);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .bg-white\\/80 {
    background-color: color-mix(in srgb, #fff 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 80%, transparent);
    }
  }
  .\\!p-1\\.5 {
    padding: calc(var(--spacing) * 1.5) !important;
  }
  .p-1 {
    padding: var(--spacing);
  }
  .p-1\\.5 {
    padding: calc(var(--spacing) * 1.5);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-2\\.5 {
    padding: calc(var(--spacing) * 2.5);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .p-10 {
    padding: calc(var(--spacing) * 10);
  }
  .px-1 {
    padding-inline: var(--spacing);
  }
  .px-1\\.5 {
    padding-inline: calc(var(--spacing) * 1.5);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-2\\.5 {
    padding-inline: calc(var(--spacing) * 2.5);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-5 {
    padding-inline: calc(var(--spacing) * 5);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .py-0\\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: var(--spacing);
  }
  .py-1\\.5 {
    padding-block: calc(var(--spacing) * 1.5);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-2\\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .py-16 {
    padding-block: calc(var(--spacing) * 16);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pt-1 {
    padding-top: var(--spacing);
  }
  .pt-2 {
    padding-top: calc(var(--spacing) * 2);
  }
  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }
  .pt-24 {
    padding-top: calc(var(--spacing) * 24);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pr-3 {
    padding-right: calc(var(--spacing) * 3);
  }
  .pr-12 {
    padding-right: calc(var(--spacing) * 12);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-16 {
    padding-bottom: calc(var(--spacing) * 16);
  }
  .pb-24 {
    padding-bottom: calc(var(--spacing) * 24);
  }
  .pl-3 {
    padding-left: calc(var(--spacing) * 3);
  }
  .pl-8 {
    padding-left: calc(var(--spacing) * 8);
  }
  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-4xl {
    font-size: var(--text-4xl);
    line-height: var(--tw-leading, var(--text-4xl--line-height));
  }
  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }
  .text-base {
    font-size: var(--text-base);
    line-height: var(--tw-leading, var(--text-base--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\\[0\\.7em\\] {
    font-size: 0.7em;
  }
  .text-\\[0\\.8em\\] {
    font-size: 0.8em;
  }
  .text-\\[0\\.9em\\] {
    font-size: 0.9em;
  }
  .text-\\[0\\.75em\\] {
    font-size: 0.75em;
  }
  .text-\\[0\\.85em\\] {
    font-size: 0.85em;
  }
  .text-\\[0\\.92em\\] {
    font-size: 0.92em;
  }
  .text-\\[11px\\] {
    font-size: 11px;
  }
  .text-\\[13px\\] {
    font-size: 13px;
  }
  .text-\\[15px\\] {
    font-size: 15px;
  }
  .text-\\[17px\\] {
    font-size: 17px;
  }
  .leading-\\[18px\\] {
    --tw-leading: 18px;
    line-height: 18px;
  }
  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }
  .leading-snug {
    --tw-leading: var(--leading-snug);
    line-height: var(--leading-snug);
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .font-normal {
    --tw-font-weight: var(--font-weight-normal);
    font-weight: var(--font-weight-normal);
  }
  .font-semibold {
    --tw-font-weight: var(--font-weight-semibold);
    font-weight: var(--font-weight-semibold);
  }
  .break-words {
    overflow-wrap: break-word;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }
  .text-\\[\\#7e00c8\\] {
    color: #7e00c8;
  }
  .text-amber-500 {
    color: var(--color-amber-500);
  }
  .text-amber-600 {
    color: var(--color-amber-600);
  }
  .text-amber-700 {
    color: var(--color-amber-700);
  }
  .text-emerald-600 {
    color: var(--color-emerald-600);
  }
  .text-emerald-700 {
    color: var(--color-emerald-700);
  }
  .text-indigo-600 {
    color: var(--color-indigo-600);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-red-600 {
    color: var(--color-red-600);
  }
  .text-sky-700 {
    color: var(--color-sky-700);
  }
  .text-slate-300 {
    color: var(--color-slate-300);
  }
  .text-slate-400 {
    color: var(--color-slate-400);
  }
  .text-slate-500 {
    color: var(--color-slate-500);
  }
  .text-slate-600 {
    color: var(--color-slate-600);
  }
  .text-slate-700 {
    color: var(--color-slate-700);
  }
  .text-slate-800 {
    color: var(--color-slate-800);
  }
  .text-slate-900 {
    color: var(--color-slate-900);
  }
  .text-violet-600 {
    color: var(--color-violet-600);
  }
  .text-white {
    color: var(--color-white);
  }
  .line-through {
    text-decoration-line: line-through;
  }
  .underline {
    text-decoration-line: underline;
  }
  .underline-offset-4 {
    text-underline-offset: 4px;
  }
  .accent-indigo-600 {
    accent-color: var(--color-indigo-600);
  }
  .opacity-0 {
    opacity: 0%;
  }
  .opacity-40 {
    opacity: 40%;
  }
  .shadow-hover-soft {
    --tw-shadow: 0 8px 16px var(--tw-shadow-color, rgba(0,0,0,.10));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-sm {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-soft {
    --tw-shadow: 0 0 0 0 var(--tw-shadow-color, rgba(0,0,0,0));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-2 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .ring-indigo-200 {
    --tw-ring-color: var(--color-indigo-200);
  }
  .ring-indigo-400 {
    --tw-ring-color: var(--color-indigo-400);
  }
  .ring-indigo-500\\/20 {
    --tw-ring-color: color-mix(in srgb, #1a7fd9 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-indigo-500) 20%, transparent);
    }
  }
  .ring-red-200 {
    --tw-ring-color: var(--color-red-200);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition-\\[width\\] {
    transition-property: width;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .duration-200 {
    --tw-duration: 200ms;
    transition-duration: 200ms;
  }
  .ease-in-out {
    --tw-ease: var(--ease-in-out);
    transition-timing-function: var(--ease-in-out);
  }
  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }
  .select-none {
    -webkit-user-select: none;
    user-select: none;
  }
  .ring-inset {
    --tw-ring-inset: inset;
  }
  @media (hover: hover) {
    .group-hover\\:opacity-0:is(:where(.group):hover *) {
      opacity: 0%;
    }
    .group-hover\\:opacity-100:is(:where(.group):hover *) {
      opacity: 100%;
    }
  }
  .placeholder\\:text-slate-400::placeholder {
    color: var(--color-slate-400);
  }
  .last\\:border-b-0:last-child {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 0px;
  }
  .focus-within\\:bg-white:focus-within {
    background-color: var(--color-white);
  }
  .focus-within\\:ring-2:focus-within {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .focus-within\\:ring-indigo-500\\/40:focus-within {
    --tw-ring-color: color-mix(in srgb, #1a7fd9 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-indigo-500) 40%, transparent);
    }
  }
  @media (hover: hover) {
    .hover\\:border-indigo-300:hover {
      border-color: var(--color-indigo-300);
    }
    .hover\\:bg-amber-100:hover {
      background-color: var(--color-amber-100);
    }
    .hover\\:bg-emerald-100:hover {
      background-color: var(--color-emerald-100);
    }
    .hover\\:bg-emerald-700:hover {
      background-color: var(--color-emerald-700);
    }
    .hover\\:bg-indigo-50\\/30:hover {
      background-color: color-mix(in srgb, #eef6fd 30%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-indigo-50\\/30:hover {
        background-color: color-mix(in oklab, var(--color-indigo-50) 30%, transparent);
      }
    }
    .hover\\:bg-indigo-700:hover {
      background-color: var(--color-indigo-700);
    }
    .hover\\:bg-red-50:hover {
      background-color: var(--color-red-50);
    }
    .hover\\:bg-red-100:hover {
      background-color: var(--color-red-100);
    }
    .hover\\:bg-red-600:hover {
      background-color: var(--color-red-600);
    }
    .hover\\:bg-slate-50:hover {
      background-color: var(--color-slate-50);
    }
    .hover\\:bg-slate-100:hover {
      background-color: var(--color-slate-100);
    }
    .hover\\:bg-slate-100\\/80:hover {
      background-color: color-mix(in srgb, #f5f5f5 80%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-slate-100\\/80:hover {
        background-color: color-mix(in oklab, var(--color-slate-100) 80%, transparent);
      }
    }
    .hover\\:bg-slate-200:hover {
      background-color: var(--color-slate-200);
    }
    .hover\\:bg-slate-200\\/50:hover {
      background-color: color-mix(in srgb, #e8e8e8 50%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-slate-200\\/50:hover {
        background-color: color-mix(in oklab, var(--color-slate-200) 50%, transparent);
      }
    }
    .hover\\:bg-slate-200\\/70:hover {
      background-color: color-mix(in srgb, #e8e8e8 70%, transparent);
    }
    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-slate-200\\/70:hover {
        background-color: color-mix(in oklab, var(--color-slate-200) 70%, transparent);
      }
    }
    .hover\\:text-indigo-600:hover {
      color: var(--color-indigo-600);
    }
    .hover\\:text-indigo-700:hover {
      color: var(--color-indigo-700);
    }
    .hover\\:text-slate-500:hover {
      color: var(--color-slate-500);
    }
    .hover\\:text-slate-700:hover {
      color: var(--color-slate-700);
    }
    .hover\\:brightness-95:hover {
      --tw-brightness: brightness(95%);
      filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
    }
  }
  .focus\\:border-indigo-500:focus {
    border-color: var(--color-indigo-500);
  }
  .focus\\:bg-white:focus {
    background-color: var(--color-white);
  }
  .focus\\:ring-2:focus {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .focus\\:ring-indigo-500\\/20:focus {
    --tw-ring-color: color-mix(in srgb, #1a7fd9 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-indigo-500) 20%, transparent);
    }
  }
  .focus\\:ring-indigo-500\\/40:focus {
    --tw-ring-color: color-mix(in srgb, #1a7fd9 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-indigo-500) 40%, transparent);
    }
  }
  .focus-visible\\:outline-2:focus-visible {
    outline-style: var(--tw-outline-style);
    outline-width: 2px;
  }
  .focus-visible\\:outline-offset-4:focus-visible {
    outline-offset: 4px;
  }
  .focus-visible\\:outline-indigo-600:focus-visible {
    outline-color: var(--color-indigo-600);
  }
  .active\\:scale-95:active {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .active\\:cursor-grabbing:active {
    cursor: grabbing;
  }
  .disabled\\:cursor-not-allowed:disabled {
    cursor: not-allowed;
  }
  .disabled\\:opacity-30:disabled {
    opacity: 30%;
  }
  .disabled\\:opacity-40:disabled {
    opacity: 40%;
  }
  .disabled\\:opacity-50:disabled {
    opacity: 50%;
  }
  @media (width >= 40rem) {
    .sm\\:gap-10 {
      gap: calc(var(--spacing) * 10);
    }
  }
}
@layer base {
  *, ::after, ::before {
    border-color: var(--color-slate-200);
  }
  button {
    cursor: pointer;
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-outline-style: solid;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
    }
  }
}

/* TBC ONE 共用樣式：照 DESIGN.md（DJI 風格）——白底、藍色主色、扁平、中文字距標準 */
html, body { margin: 0; background: #fff; color: #262626; letter-spacing: normal; -webkit-font-smoothing: antialiased; }
body, button, input, select, textarea { font-family: "Open Sans", "Noto Sans TC", -apple-system, "PingFang TC", "Microsoft JhengHei", sans-serif; letter-spacing: normal; }
.animate-fade-in { animation: tbcFadeIn .18s ease-out; }
@keyframes tbcFadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
.custom-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #d9d9d9; border-radius: 8px; }
.entry:hover .entry-icon, .entry:focus-visible .entry-icon { border-color: #0070d5; color: #0070d5; background: #eef6fd; }
@media (prefers-reduced-motion: reduce) { .animate-fade-in { animation: none; } }
`;var sv="https://jcepavwocdujoeoqxvsd.supabase.co",gv="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",Gd=document.createElement("style");Gd.id="tbc-one-css";Gd.textContent=C4;document.head.appendChild(Gd);var ve=window.__TBC_SB||window.supabase.createClient(sv,gv),pv=({page:t})=>{let[a,r]=(0,jt.useState)(void 0),[e,i]=(0,jt.useState)(""),[n,o]=(0,jt.useState)({status:"loading",name:"",role:"member"});(0,jt.useEffect)(()=>{let f=!0;ve.auth.getSession().then(({data:p})=>{f&&r(p.session||null)});let{data:k}=ve.auth.onAuthStateChange((p,x)=>{f&&r(x||null)});return()=>{f=!1,k&&k.subscription&&k.subscription.unsubscribe()}},[]);let d=a&&a.user&&a.user.id;(0,jt.useEffect)(()=>{if(!a)return;let f=!0;return n4(ve,a).then(async k=>{if(f){if(k.status!=="ok"||!e4.includes(k.role)){try{await ve.auth.signOut()}catch{}i("權限不足"),r(null);return}i(""),o(k)}}),()=>{f=!1}},[d]);let h=async()=>{try{await ve.auth.signOut()}catch{}r(null),o({status:"loading",name:"",role:"member"})};if(a===void 0)return jt.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return jt.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},jt.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},jt.default.createElement(b2,{size:30})),jt.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),jt.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),jt.default.createElement(l4,{supabase:ve,notice:e}));if(n.status!=="ok")return jt.default.createElement("div",{className:"h-[100dvh] bg-white"});let s={identity:n,onLogout:h};return t==="work"?jt.default.createElement(w4,{session:a,supabase:ve,utils:{},shell:s}):jt.default.createElement(c4,{shell:s})},b4=document.getElementById("root");(0,B4.createRoot)(b4).render(jt.default.createElement(pv,{page:b4.getAttribute("data-page")||"home"}));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
