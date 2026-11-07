(()=>{var Pg=Object.create;var Cd=Object.defineProperty;var t4=Object.getOwnPropertyDescriptor;var a4=Object.getOwnPropertyNames;var r4=Object.getPrototypeOf,e4=Object.prototype.hasOwnProperty;var or=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var i4=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of a4(a))!e4.call(t,i)&&i!==r&&Cd(t,i,{get:()=>a[i],enumerable:!(e=t4(a,i))||e.enumerable});return t};var Nr=(t,a,r)=>(r=t!=null?Pg(r4(t)):{},i4(a||!t||!t.__esModule?Cd(r,"default",{value:t,enumerable:!0}):r,t));var Td=or(z=>{"use strict";var y2=Symbol.for("react.transitional.element"),n4=Symbol.for("react.portal"),o4=Symbol.for("react.fragment"),l4=Symbol.for("react.strict_mode"),d4=Symbol.for("react.profiler"),c4=Symbol.for("react.consumer"),h4=Symbol.for("react.context"),u4=Symbol.for("react.forward_ref"),s4=Symbol.for("react.suspense"),g4=Symbol.for("react.memo"),Hd=Symbol.for("react.lazy"),p4=Symbol.for("react.activity"),Bd=Symbol.iterator;function f4(t){return t===null||typeof t!="object"?null:(t=Bd&&t[Bd]||t["@@iterator"],typeof t=="function"?t:null)}var Sd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ad=Object.assign,Vd={};function he(t,a,r){this.props=t,this.context=a,this.refs=Vd,this.updater=r||Sd}he.prototype.isReactComponent={};he.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};he.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zd(){}zd.prototype=he.prototype;function w2(t,a,r){this.props=t,this.context=a,this.refs=Vd,this.updater=r||Sd}var C2=w2.prototype=new zd;C2.constructor=w2;Ad(C2,he.prototype);C2.isPureReactComponent=!0;var bd=Array.isArray;function m2(){}var tt={H:null,A:null,T:null,S:null},_d=Object.prototype.hasOwnProperty;function B2(t,a,r){var e=r.ref;return{$$typeof:y2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function v4(t,a){return B2(t.type,a,t.props)}function b2(t){return typeof t=="object"&&t!==null&&t.$$typeof===y2}function k4(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var jd=/\/+/g;function M2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?k4(""+t.key):a.toString(36)}function x4(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(m2,m2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ce(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case y2:case n4:o=!0;break;case Hd:return o=t._init,ce(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+M2(t,0):e,bd(i)?(r="",o!=null&&(r=o.replace(jd,"$&/")+"/"),ce(i,a,r,"",function(s){return s})):i!=null&&(b2(i)&&(i=v4(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(jd,"$&/")+"/")+o)),a.push(i)),1;o=0;var l=e===""?".":e+":";if(bd(t))for(var c=0;c<t.length;c++)e=t[c],n=l+M2(e,c),o+=ce(e,a,r,n,i);else if(c=f4(t),typeof c=="function")for(t=c.call(t),c=0;!(e=t.next()).done;)e=e.value,n=l+M2(e,c++),o+=ce(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return ce(x4(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function mn(t,a,r){if(t==null)return t;var e=[],i=0;return ce(t,e,"","",function(n){return a.call(r,n,i++)}),e}function L4(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var Wd=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},M4={map:mn,forEach:function(t,a,r){mn(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return mn(t,function(){a++}),a},toArray:function(t){return mn(t,function(a){return a})||[]},only:function(t){if(!b2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Activity=p4;z.Children=M4;z.Component=he;z.Fragment=o4;z.Profiler=d4;z.PureComponent=w2;z.StrictMode=l4;z.Suspense=s4;z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tt;z.__COMPILER_RUNTIME={__proto__:null,c:function(t){return tt.H.useMemoCache(t)}};z.cache=function(t){return function(){return t.apply(null,arguments)}};z.cacheSignal=function(){return null};z.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=Ad({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!_d.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),l=0;l<n;l++)o[l]=arguments[l+2];e.children=o}return B2(t.type,i,e)};z.createContext=function(t){return t={$$typeof:h4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:c4,_context:t},t};z.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)_d.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return B2(t,n,i)};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:u4,render:t}};z.isValidElement=b2;z.lazy=function(t){return{$$typeof:Hd,_payload:{_status:-1,_result:t},_init:L4}};z.memo=function(t,a){return{$$typeof:g4,type:t,compare:a===void 0?null:a}};z.startTransition=function(t){var a=tt.T,r={};tt.T=r;try{var e=t(),i=tt.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(m2,Wd)}catch(n){Wd(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),tt.T=a}};z.unstable_useCacheRefresh=function(){return tt.H.useCacheRefresh()};z.use=function(t){return tt.H.use(t)};z.useActionState=function(t,a,r){return tt.H.useActionState(t,a,r)};z.useCallback=function(t,a){return tt.H.useCallback(t,a)};z.useContext=function(t){return tt.H.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t,a){return tt.H.useDeferredValue(t,a)};z.useEffect=function(t,a){return tt.H.useEffect(t,a)};z.useEffectEvent=function(t){return tt.H.useEffectEvent(t)};z.useId=function(){return tt.H.useId()};z.useImperativeHandle=function(t,a,r){return tt.H.useImperativeHandle(t,a,r)};z.useInsertionEffect=function(t,a){return tt.H.useInsertionEffect(t,a)};z.useLayoutEffect=function(t,a){return tt.H.useLayoutEffect(t,a)};z.useMemo=function(t,a){return tt.H.useMemo(t,a)};z.useOptimistic=function(t,a){return tt.H.useOptimistic(t,a)};z.useReducer=function(t,a,r){return tt.H.useReducer(t,a,r)};z.useRef=function(t){return tt.H.useRef(t)};z.useState=function(t){return tt.H.useState(t)};z.useSyncExternalStore=function(t,a,r){return tt.H.useSyncExternalStore(t,a,r)};z.useTransition=function(){return tt.H.useTransition()};z.version="19.2.8"});var _a=or((wf,Ed)=>{"use strict";Ed.exports=Td()});var Qd=or(it=>{"use strict";function S2(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<yn(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Ba(t){return t.length===0?null:t[0]}function Cn(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,l=t[o],c=o+1,s=t[c];if(0>yn(l,r))c<i&&0>yn(s,l)?(t[e]=s,t[c]=r,e=c):(t[e]=l,t[o]=r,e=o);else if(c<i&&0>yn(s,r))t[e]=s,t[c]=r,e=c;else break t}}return a}function yn(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}it.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Nd=performance,it.unstable_now=function(){return Nd.now()}):(j2=Date,Dd=j2.now(),it.unstable_now=function(){return j2.now()-Dd});var Nd,j2,Dd,Ta=[],lr=[],m4=1,la=null,St=3,A2=!1,li=!1,di=!1,V2=!1,Zd=typeof setTimeout=="function"?setTimeout:null,qd=typeof clearTimeout=="function"?clearTimeout:null,Od=typeof setImmediate<"u"?setImmediate:null;function wn(t){for(var a=Ba(lr);a!==null;){if(a.callback===null)Cn(lr);else if(a.startTime<=t)Cn(lr),a.sortIndex=a.expirationTime,S2(Ta,a);else break;a=Ba(lr)}}function z2(t){if(di=!1,wn(t),!li)if(Ba(Ta)!==null)li=!0,se||(se=!0,ue());else{var a=Ba(lr);a!==null&&_2(z2,a.startTime-t)}}var se=!1,ci=-1,Gd=5,Yd=-1;function Xd(){return V2?!0:!(it.unstable_now()-Yd<Gd)}function W2(){if(V2=!1,se){var t=it.unstable_now();Yd=t;var a=!0;try{t:{li=!1,di&&(di=!1,qd(ci),ci=-1),A2=!0;var r=St;try{a:{for(wn(t),la=Ba(Ta);la!==null&&!(la.expirationTime>t&&Xd());){var e=la.callback;if(typeof e=="function"){la.callback=null,St=la.priorityLevel;var i=e(la.expirationTime<=t);if(t=it.unstable_now(),typeof i=="function"){la.callback=i,wn(t),a=!0;break a}la===Ba(Ta)&&Cn(Ta),wn(t)}else Cn(Ta);la=Ba(Ta)}if(la!==null)a=!0;else{var n=Ba(lr);n!==null&&_2(z2,n.startTime-t),a=!1}}break t}finally{la=null,St=r,A2=!1}a=void 0}}finally{a?ue():se=!1}}}var ue;typeof Od=="function"?ue=function(){Od(W2)}:typeof MessageChannel<"u"?(H2=new MessageChannel,Ud=H2.port2,H2.port1.onmessage=W2,ue=function(){Ud.postMessage(null)}):ue=function(){Zd(W2,0)};var H2,Ud;function _2(t,a){ci=Zd(function(){t(it.unstable_now())},a)}it.unstable_IdlePriority=5;it.unstable_ImmediatePriority=1;it.unstable_LowPriority=4;it.unstable_NormalPriority=3;it.unstable_Profiling=null;it.unstable_UserBlockingPriority=2;it.unstable_cancelCallback=function(t){t.callback=null};it.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Gd=0<t?Math.floor(1e3/t):5};it.unstable_getCurrentPriorityLevel=function(){return St};it.unstable_next=function(t){switch(St){case 1:case 2:case 3:var a=3;break;default:a=St}var r=St;St=a;try{return t()}finally{St=r}};it.unstable_requestPaint=function(){V2=!0};it.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=St;St=t;try{return a()}finally{St=r}};it.unstable_scheduleCallback=function(t,a,r){var e=it.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:m4++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,S2(lr,t),Ba(Ta)===null&&t===Ba(lr)&&(di?(qd(ci),ci=-1):di=!0,_2(z2,r-e))):(t.sortIndex=i,S2(Ta,t),li||A2||(li=!0,se||(se=!0,ue()))),t};it.unstable_shouldYield=Xd;it.unstable_wrapCallback=function(t){var a=St;return function(){var r=St;St=a;try{return t.apply(this,arguments)}finally{St=r}}}});var Rd=or((Bf,Kd)=>{"use strict";Kd.exports=Qd()});var Fd=or(zt=>{"use strict";var y4=_a();function Jd(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function dr(){}var Vt={d:{f:dr,r:function(){throw Error(Jd(522))},D:dr,C:dr,L:dr,m:dr,X:dr,S:dr,M:dr},p:0,findDOMNode:null},w4=Symbol.for("react.portal");function C4(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w4,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var hi=y4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Bn(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Vt;zt.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(Jd(299));return C4(t,a,null,r)};zt.flushSync=function(t){var a=hi.T,r=Vt.p;try{if(hi.T=null,Vt.p=2,t)return t()}finally{hi.T=a,Vt.p=r,Vt.d.f()}};zt.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Vt.d.C(t,a))};zt.prefetchDNS=function(t){typeof t=="string"&&Vt.d.D(t)};zt.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=Bn(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Vt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Vt.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};zt.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=Bn(a.as,a.crossOrigin);Vt.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Vt.d.M(t)};zt.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=Bn(r,a.crossOrigin);Vt.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};zt.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=Bn(a.as,a.crossOrigin);Vt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Vt.d.m(t)};zt.requestFormReset=function(t){Vt.d.r(t)};zt.unstable_batchedUpdates=function(t,a){return t(a)};zt.useFormState=function(t,a,r){return hi.H.useFormState(t,a,r)};zt.useFormStatus=function(){return hi.H.useHostTransitionStatus()};zt.version="19.2.8"});var Pd=or((jf,Id)=>{"use strict";function $d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($d)}catch(t){console.error(t)}}$d(),Id.exports=Fd()});var us=or($o=>{"use strict";var kt=Rd(),B0=_a(),B4=Pd();function M(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fi(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function j0(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function W0(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function tc(t){if(Fi(t)!==t)throw Error(M(188))}function b4(t){var a=t.alternate;if(!a){if(a=Fi(t),a===null)throw Error(M(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return tc(i),t;if(n===e)return tc(i),a;n=n.sibling}throw Error(M(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,e=n;break}if(l===e){o=!0,e=i,r=n;break}l=l.sibling}if(!o){for(l=n.child;l;){if(l===r){o=!0,r=n,e=i;break}if(l===e){o=!0,e=n,r=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(r.alternate!==e)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?t:a}function H0(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=H0(t),a!==null)return a;t=t.sibling}return null}var et=Object.assign,j4=Symbol.for("react.element"),bn=Symbol.for("react.transitional.element"),xi=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),S0=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),A0=Symbol.for("react.consumer"),Ga=Symbol.for("react.context"),c1=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),vl=Symbol.for("react.suspense_list"),h1=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),kl=Symbol.for("react.activity"),W4=Symbol.for("react.memo_cache_sentinel"),ac=Symbol.iterator;function ui(t){return t===null||typeof t!="object"?null:(t=ac&&t[ac]||t["@@iterator"],typeof t=="function"?t:null)}var H4=Symbol.for("react.client.reference");function xl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===H4?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xe:return"Fragment";case pl:return"Profiler";case S0:return"StrictMode";case fl:return"Suspense";case vl:return"SuspenseList";case kl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case xi:return"Portal";case Ga:return t.displayName||"Context";case A0:return(t._context.displayName||"Context")+".Consumer";case c1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case h1:return a=t.displayName||null,a!==null?a:xl(t.type)||"Memo";case cr:a=t._payload,t=t._init;try{return xl(t(a))}catch{}}return null}var Li=Array.isArray,A=B0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=B4.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gr={pending:!1,data:null,method:null,action:null},Ll=[],Le=-1;function Sa(t){return{current:t}}function mt(t){0>Le||(t.current=Ll[Le],Ll[Le]=null,Le--)}function P(t,a){Le++,Ll[Le]=t.current,t.current=a}var Ha=Sa(null),Ei=Sa(null),Mr=Sa(null),no=Sa(null);function oo(t,a){switch(P(Mr,a),P(Ei,t),P(Ha,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?d0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=d0(a),t=$u(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}mt(Ha),P(Ha,t)}function Ne(){mt(Ha),mt(Ei),mt(Mr)}function Ml(t){t.memoizedState!==null&&P(no,t);var a=Ha.current,r=$u(a,t.type);a!==r&&(P(Ei,t),P(Ha,r))}function lo(t){Ei.current===t&&(mt(Ha),mt(Ei)),no.current===t&&(mt(no),Ki._currentValue=Gr)}var T2,rc;function Or(t){if(T2===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);T2=a&&a[1]||"",rc=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+T2+t+rc}var E2=!1;function N2(t,a){if(!t||E2)return"";E2=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(k){var p=k}Reflect.construct(t,[],x)}else{try{x.call()}catch(k){p=k}t.call(x.prototype)}}else{try{throw Error()}catch(k){p=k}(x=t())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(k){if(k&&p&&typeof k.stack=="string")return[k.stack,p.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],l=n[1];if(o&&l){var c=o.split(`
`),s=l.split(`
`);for(i=e=0;e<c.length&&!c[e].includes("DetermineComponentFrameRoot");)e++;for(;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;if(e===c.length||i===s.length)for(e=c.length-1,i=s.length-1;1<=e&&0<=i&&c[e]!==s[i];)i--;for(;1<=e&&0<=i;e--,i--)if(c[e]!==s[i]){if(e!==1||i!==1)do if(e--,i--,0>i||c[e]!==s[i]){var v=`
`+c[e].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=e&&0<=i);break}}}finally{E2=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Or(r):""}function S4(t,a){switch(t.tag){case 26:case 27:case 5:return Or(t.type);case 16:return Or("Lazy");case 13:return t.child!==a&&a!==null?Or("Suspense Fallback"):Or("Suspense");case 19:return Or("SuspenseList");case 0:case 15:return N2(t.type,!1);case 11:return N2(t.type.render,!1);case 1:return N2(t.type,!0);case 31:return Or("Activity");default:return""}}function ec(t){try{var a="",r=null;do a+=S4(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ml=Object.prototype.hasOwnProperty,u1=kt.unstable_scheduleCallback,D2=kt.unstable_cancelCallback,A4=kt.unstable_shouldYield,V4=kt.unstable_requestPaint,Jt=kt.unstable_now,z4=kt.unstable_getCurrentPriorityLevel,V0=kt.unstable_ImmediatePriority,z0=kt.unstable_UserBlockingPriority,co=kt.unstable_NormalPriority,_4=kt.unstable_LowPriority,_0=kt.unstable_IdlePriority,T4=kt.log,E4=kt.unstable_setDisableYieldValue,$i=null,Ft=null;function fr(t){if(typeof T4=="function"&&E4(t),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode($i,t)}catch{}}var $t=Math.clz32?Math.clz32:O4,N4=Math.log,D4=Math.LN2;function O4(t){return t>>>=0,t===0?32:31-(N4(t)/D4|0)|0}var jn=256,Wn=262144,Hn=4194304;function Ur(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function To(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var l=e&134217727;return l!==0?(e=l&~n,e!==0?i=Ur(e):(o&=l,o!==0?i=Ur(o):r||(r=l&~t,r!==0&&(i=Ur(r))))):(l=e&~n,l!==0?i=Ur(l):o!==0?i=Ur(o):r||(r=e&~t,r!==0&&(i=Ur(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function Ii(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function U4(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T0(){var t=Hn;return Hn<<=1,(Hn&62914560)===0&&(Hn=4194304),t}function O2(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function Pi(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Z4(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var l=t.entanglements,c=t.expirationTimes,s=t.hiddenUpdates;for(r=o&~r;0<r;){var v=31-$t(r),x=1<<v;l[v]=0,c[v]=-1;var p=s[v];if(p!==null)for(s[v]=null,v=0;v<p.length;v++){var k=p[v];k!==null&&(k.lane&=-536870913)}r&=~x}e!==0&&E0(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function E0(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-$t(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function N0(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-$t(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function D0(t,a){var r=a&-a;return r=(r&42)!==0?1:s1(r),(r&(t.suspendedLanes|a))!==0?0:r}function s1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function g1(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function O0(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:ds(t.type))}function ic(t,a){var r=Q.p;try{return Q.p=t,a()}finally{Q.p=r}}var zr=Math.random().toString(36).slice(2),Bt="__reactFiber$"+zr,Zt="__reactProps$"+zr,Re="__reactContainer$"+zr,yl="__reactEvents$"+zr,q4="__reactListeners$"+zr,G4="__reactHandles$"+zr,nc="__reactResources$"+zr,tn="__reactMarker$"+zr;function p1(t){delete t[Bt],delete t[Zt],delete t[yl],delete t[q4],delete t[G4]}function Me(t){var a=t[Bt];if(a)return a;for(var r=t.parentNode;r;){if(a=r[Re]||r[Bt]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=g0(t);t!==null;){if(r=t[Bt])return r;t=g0(t)}return a}t=r,r=t.parentNode}return null}function Je(t){if(t=t[Bt]||t[Re]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Mi(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(M(33))}function Se(t){var a=t[nc];return a||(a=t[nc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Mt(t){t[tn]=!0}var U0=new Set,Z0={};function Pr(t,a){De(t,a),De(t+"Capture",a)}function De(t,a){for(Z0[t]=a,t=0;t<a.length;t++)U0.add(a[t])}var Y4=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oc={},lc={};function X4(t){return ml.call(lc,t)?!0:ml.call(oc,t)?!1:Y4.test(t)?lc[t]=!0:(oc[t]=!0,!1)}function Yn(t,a,r){if(X4(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function Sn(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function Ea(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function ca(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function q0(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Q4(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function wl(t){if(!t._valueTracker){var a=q0(t)?"checked":"value";t._valueTracker=Q4(t,a,""+t[a])}}function G0(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=q0(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var K4=/[\n"\\]/g;function sa(t){return t.replace(K4,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Cl(t,a,r,e,i,n,o,l){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+ca(a)):t.value!==""+ca(a)&&(t.value=""+ca(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?Bl(t,o,ca(a)):r!=null?Bl(t,o,ca(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+ca(l):t.removeAttribute("name")}function Y0(t,a,r,e,i,n,o,l){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){wl(t);return}r=r!=null?""+ca(r):"",a=a!=null?""+ca(a):r,l||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=l?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),wl(t)}function Bl(t,a,r){a==="number"&&ho(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ae(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+ca(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function X0(t,a,r){if(a!=null&&(a=""+ca(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+ca(r):""}function Q0(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(M(92));if(Li(e)){if(1<e.length)throw Error(M(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=ca(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),wl(t)}function Oe(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var R4=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dc(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||R4.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function K0(t,a,r){if(a!=null&&typeof a!="object")throw Error(M(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&dc(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&dc(t,n,a[n])}function f1(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J4=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),F4=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xn(t){return F4.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ya(){}var bl=null;function v1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var me=null,Ve=null;function cc(t){var a=Je(t);if(a&&(t=a.stateNode)){var r=t[Zt]||null;t:switch(t=a.stateNode,a.type){case"input":if(Cl(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+sa(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[Zt]||null;if(!i)throw Error(M(90));Cl(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&G0(e)}break t;case"textarea":X0(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Ae(t,!!r.multiple,a,!1)}}}var U2=!1;function R0(t,a,r){if(U2)return t(a,r);U2=!0;try{var e=t(a);return e}finally{if(U2=!1,(me!==null||Ve!==null)&&(Ko(),me&&(a=me,t=Ve,Ve=me=null,cc(a),t)))for(a=0;a<t.length;a++)cc(t[a])}}function Ni(t,a){var r=t.stateNode;if(r===null)return null;var e=r[Zt]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(M(231,a,typeof r));return r}var Ja=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=!1;if(Ja)try{ge={},Object.defineProperty(ge,"passive",{get:function(){jl=!0}}),window.addEventListener("test",ge,ge),window.removeEventListener("test",ge,ge)}catch{jl=!1}var ge,vr=null,k1=null,Qn=null;function J0(){if(Qn)return Qn;var t,a=k1,r=a.length,e,i="value"in vr?vr.value:vr.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return Qn=i.slice(t,1<e?1-e:void 0)}function Kn(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function An(){return!0}function hc(){return!1}function qt(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(n):n[l]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?An:hc,this.isPropagationStopped=hc,this}return et(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=An)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=An)},persist:function(){},isPersistent:An}),a}var te={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eo=qt(te),an=et({},te,{view:0,detail:0}),$4=qt(an),Z2,q2,si,No=et({},an,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:x1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==si&&(si&&t.type==="mousemove"?(Z2=t.screenX-si.screenX,q2=t.screenY-si.screenY):q2=Z2=0,si=t),Z2)},movementY:function(t){return"movementY"in t?t.movementY:q2}}),uc=qt(No),I4=et({},No,{dataTransfer:0}),P4=qt(I4),tp=et({},an,{relatedTarget:0}),G2=qt(tp),ap=et({},te,{animationName:0,elapsedTime:0,pseudoElement:0}),rp=qt(ap),ep=et({},te,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ip=qt(ep),np=et({},te,{data:0}),sc=qt(np),op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cp(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=dp[t])?!!a[t]:!1}function x1(){return cp}var hp=et({},an,{key:function(t){if(t.key){var a=op[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Kn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:x1,charCode:function(t){return t.type==="keypress"?Kn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),up=qt(hp),sp=et({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gc=qt(sp),gp=et({},an,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:x1}),pp=qt(gp),fp=et({},te,{propertyName:0,elapsedTime:0,pseudoElement:0}),vp=qt(fp),kp=et({},No,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xp=qt(kp),Lp=et({},te,{newState:0,oldState:0}),Mp=qt(Lp),mp=[9,13,27,32],L1=Ja&&"CompositionEvent"in window,wi=null;Ja&&"documentMode"in document&&(wi=document.documentMode);var yp=Ja&&"TextEvent"in window&&!wi,F0=Ja&&(!L1||wi&&8<wi&&11>=wi),pc=" ",fc=!1;function $0(t,a){switch(t){case"keyup":return mp.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ye=!1;function wp(t,a){switch(t){case"compositionend":return I0(a);case"keypress":return a.which!==32?null:(fc=!0,pc);case"textInput":return t=a.data,t===pc&&fc?null:t;default:return null}}function Cp(t,a){if(ye)return t==="compositionend"||!L1&&$0(t,a)?(t=J0(),Qn=k1=vr=null,ye=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return F0&&a.locale!=="ko"?null:a.data;default:return null}}var Bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!Bp[t.type]:a==="textarea"}function P0(t,a,r,e){me?Ve?Ve.push(e):Ve=[e]:me=e,a=Wo(a,"onChange"),0<a.length&&(r=new Eo("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var Ci=null,Di=null;function bp(t){Ru(t,0)}function Do(t){var a=Mi(t);if(G0(a))return t}function kc(t,a){if(t==="change")return a}var th=!1;Ja&&(Ja?(zn="oninput"in document,zn||(Y2=document.createElement("div"),Y2.setAttribute("oninput","return;"),zn=typeof Y2.oninput=="function"),Vn=zn):Vn=!1,th=Vn&&(!document.documentMode||9<document.documentMode));var Vn,zn,Y2;function xc(){Ci&&(Ci.detachEvent("onpropertychange",ah),Di=Ci=null)}function ah(t){if(t.propertyName==="value"&&Do(Di)){var a=[];P0(a,Di,t,v1(t)),R0(bp,a)}}function jp(t,a,r){t==="focusin"?(xc(),Ci=a,Di=r,Ci.attachEvent("onpropertychange",ah)):t==="focusout"&&xc()}function Wp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Do(Di)}function Hp(t,a){if(t==="click")return Do(a)}function Sp(t,a){if(t==="input"||t==="change")return Do(a)}function Ap(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var Pt=typeof Object.is=="function"?Object.is:Ap;function Oi(t,a){if(Pt(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!ml.call(a,i)||!Pt(t[i],a[i]))return!1}return!0}function Lc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mc(t,a){var r=Lc(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Lc(r)}}function rh(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?rh(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function eh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=ho(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=ho(t.document)}return a}function M1(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var Vp=Ja&&"documentMode"in document&&11>=document.documentMode,we=null,Wl=null,Bi=null,Hl=!1;function mc(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Hl||we==null||we!==ho(e)||(e=we,"selectionStart"in e&&M1(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Bi&&Oi(Bi,e)||(Bi=e,e=Wo(Wl,"onSelect"),0<e.length&&(a=new Eo("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=we)))}function Dr(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var Ce={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionrun:Dr("Transition","TransitionRun"),transitionstart:Dr("Transition","TransitionStart"),transitioncancel:Dr("Transition","TransitionCancel"),transitionend:Dr("Transition","TransitionEnd")},X2={},ih={};Ja&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete Ce.animationend.animation,delete Ce.animationiteration.animation,delete Ce.animationstart.animation),"TransitionEvent"in window||delete Ce.transitionend.transition);function ae(t){if(X2[t])return X2[t];if(!Ce[t])return t;var a=Ce[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in ih)return X2[t]=a[r];return t}var nh=ae("animationend"),oh=ae("animationiteration"),lh=ae("animationstart"),zp=ae("transitionrun"),_p=ae("transitionstart"),Tp=ae("transitioncancel"),dh=ae("transitionend"),ch=new Map,Sl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sl.push("scrollEnd");function ya(t,a){ch.set(t,a),Pr(a,[t])}var uo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},da=[],Be=0,m1=0;function Oo(){for(var t=Be,a=m1=Be=0;a<t;){var r=da[a];da[a++]=null;var e=da[a];da[a++]=null;var i=da[a];da[a++]=null;var n=da[a];if(da[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&hh(r,i,n)}}function Uo(t,a,r,e){da[Be++]=t,da[Be++]=a,da[Be++]=r,da[Be++]=e,m1|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function y1(t,a,r,e){return Uo(t,a,r,e),so(t)}function re(t,a){return Uo(t,null,null,a),so(t)}function hh(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-$t(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function so(t){if(50<_i)throw _i=0,$l=null,Error(M(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var be={};function Ep(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,a,r,e){return new Ep(t,a,r,e)}function w1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qa(t,a){var r=t.alternate;return r===null?(r=Kt(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function uh(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Rn(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")w1(t)&&(o=1);else if(typeof t=="string")o=O5(t,r,Ha.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case kl:return t=Kt(31,r,a,i),t.elementType=kl,t.lanes=n,t;case xe:return Yr(r.children,i,n,a);case S0:o=8,i|=24;break;case pl:return t=Kt(12,r,a,i|2),t.elementType=pl,t.lanes=n,t;case fl:return t=Kt(13,r,a,i),t.elementType=fl,t.lanes=n,t;case vl:return t=Kt(19,r,a,i),t.elementType=vl,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ga:o=10;break t;case A0:o=9;break t;case c1:o=11;break t;case h1:o=14;break t;case cr:o=16,e=null;break t}o=29,r=Error(M(130,t===null?"null":typeof t,"")),e=null}return a=Kt(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function Yr(t,a,r,e){return t=Kt(7,t,e,a),t.lanes=r,t}function Q2(t,a,r){return t=Kt(6,t,null,a),t.lanes=r,t}function sh(t){var a=Kt(18,null,null,0);return a.stateNode=t,a}function K2(t,a,r){return a=Kt(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var yc=new WeakMap;function ga(t,a){if(typeof t=="object"&&t!==null){var r=yc.get(t);return r!==void 0?r:(a={value:t,source:a,stack:ec(a)},yc.set(t,a),a)}return{value:t,source:a,stack:ec(a)}}var je=[],We=0,go=null,Ui=0,ha=[],ua=0,Hr=null,ba=1,ja="";function Za(t,a){je[We++]=Ui,je[We++]=go,go=t,Ui=a}function gh(t,a,r){ha[ua++]=ba,ha[ua++]=ja,ha[ua++]=Hr,Hr=t;var e=ba;t=ja;var i=32-$t(e)-1;e&=~(1<<i),r+=1;var n=32-$t(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,ba=1<<32-$t(a)+i|r<<i|e,ja=n+t}else ba=1<<n|r<<i|e,ja=t}function C1(t){t.return!==null&&(Za(t,1),gh(t,1,0))}function B1(t){for(;t===go;)go=je[--We],je[We]=null,Ui=je[--We],je[We]=null;for(;t===Hr;)Hr=ha[--ua],ha[ua]=null,ja=ha[--ua],ha[ua]=null,ba=ha[--ua],ha[ua]=null}function ph(t,a){ha[ua++]=ba,ha[ua++]=ja,ha[ua++]=Hr,ba=a.id,ja=a.overflow,Hr=t}var bt=null,rt=null,G=!1,mr=null,pa=!1,Al=Error(M(519));function Sr(t){var a=Error(M(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zi(ga(a,t)),Al}function wc(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[Bt]=t,a[Zt]=e,r){case"dialog":O("cancel",a),O("close",a);break;case"iframe":case"object":case"embed":O("load",a);break;case"video":case"audio":for(r=0;r<Xi.length;r++)O(Xi[r],a);break;case"source":O("error",a);break;case"img":case"image":case"link":O("error",a),O("load",a);break;case"details":O("toggle",a);break;case"input":O("invalid",a),Y0(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":O("invalid",a);break;case"textarea":O("invalid",a),Q0(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||Fu(a.textContent,r)?(e.popover!=null&&(O("beforetoggle",a),O("toggle",a)),e.onScroll!=null&&O("scroll",a),e.onScrollEnd!=null&&O("scrollend",a),e.onClick!=null&&(a.onclick=Ya),a=!0):a=!1,a||Sr(t,!0)}function Cc(t){for(bt=t.return;bt;)switch(bt.tag){case 5:case 31:case 13:pa=!1;return;case 27:case 3:pa=!0;return;default:bt=bt.return}}function pe(t){if(t!==bt)return!1;if(!G)return Cc(t),G=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||r1(t.type,t.memoizedProps)),r=!r),r&&rt&&Sr(t),Cc(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));rt=s0(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));rt=s0(t)}else a===27?(a=rt,_r(t.type)?(t=o1,o1=null,rt=t):rt=a):rt=bt?va(t.stateNode.nextSibling):null;return!0}function Rr(){rt=bt=null,G=!1}function R2(){var t=mr;return t!==null&&(Ot===null?Ot=t:Ot.push.apply(Ot,t),mr=null),t}function Zi(t){mr===null?mr=[t]:mr.push(t)}var Vl=Sa(null),ee=null,Xa=null;function ur(t,a,r){P(Vl,a._currentValue),a._currentValue=r}function Ka(t){t._currentValue=Vl.current,mt(Vl)}function zl(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function _l(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var l=n;n=i;for(var c=0;c<a.length;c++)if(l.context===a[c]){n.lanes|=r,l=n.alternate,l!==null&&(l.lanes|=r),zl(n.return,r,t),e||(o=null);break t}n=l.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(M(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),zl(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Fe(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(M(387));if(o=o.memoizedProps,o!==null){var l=i.type;Pt(i.pendingProps.value,o.value)||(t!==null?t.push(l):t=[l])}}else if(i===no.current){if(o=i.alternate,o===null)throw Error(M(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ki):t=[Ki])}i=i.return}t!==null&&_l(a,t,r,e),a.flags|=262144}function po(t){for(t=t.firstContext;t!==null;){if(!Pt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Jr(t){ee=t,Xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function jt(t){return fh(ee,t)}function _n(t,a){return ee===null&&Jr(t),fh(t,a)}function fh(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},Xa===null){if(t===null)throw Error(M(308));Xa=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Xa=Xa.next=a;return r}var Np=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},Dp=kt.unstable_scheduleCallback,Op=kt.unstable_NormalPriority,pt={$$typeof:Ga,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function b1(){return{controller:new Np,data:new Map,refCount:0}}function rn(t){t.refCount--,t.refCount===0&&Dp(Op,function(){t.controller.abort()})}var bi=null,Tl=0,Ue=0,ze=null;function Up(t,a){if(bi===null){var r=bi=[];Tl=0,Ue=$1(),ze={status:"pending",value:void 0,then:function(e){r.push(e)}}}return Tl++,a.then(Bc,Bc),a}function Bc(){if(--Tl===0&&bi!==null){ze!==null&&(ze.status="fulfilled");var t=bi;bi=null,Ue=0,ze=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function Zp(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var bc=A.S;A.S=function(t,a){Hu=Jt(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Up(t,a),bc!==null&&bc(t,a)};var Xr=Sa(null);function j1(){var t=Xr.current;return t!==null?t:I.pooledCache}function Jn(t,a){a===null?P(Xr,Xr.current):P(Xr,a.pool)}function vh(){var t=j1();return t===null?null:{parent:pt._currentValue,pool:t}}var $e=Error(M(460)),W1=Error(M(474)),Zo=Error(M(542)),fo={then:function(){}};function jc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function kh(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(Ya,Ya),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Hc(t),t;default:if(typeof a.status=="string")a.then(Ya,Ya);else{if(t=I,t!==null&&100<t.shellSuspendCounter)throw Error(M(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Hc(t),t}throw Qr=a,$e}}function Zr(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Qr=r,$e):r}}var Qr=null;function Wc(){if(Qr===null)throw Error(M(459));var t=Qr;return Qr=null,t}function Hc(t){if(t===$e||t===Zo)throw Error(M(483))}var _e=null,qi=0;function Tn(t){var a=qi;return qi+=1,_e===null&&(_e=[]),kh(_e,t,a)}function gi(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function En(t,a){throw a.$$typeof===j4?Error(M(525)):(t=Object.prototype.toString.call(a),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function xh(t){function a(g,u){if(t){var f=g.deletions;f===null?(g.deletions=[u],g.flags|=16):f.push(u)}}function r(g,u){if(!t)return null;for(;u!==null;)a(g,u),u=u.sibling;return null}function e(g){for(var u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function i(g,u){return g=Qa(g,u),g.index=0,g.sibling=null,g}function n(g,u,f){return g.index=f,t?(f=g.alternate,f!==null?(f=f.index,f<u?(g.flags|=67108866,u):f):(g.flags|=67108866,u)):(g.flags|=1048576,u)}function o(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function l(g,u,f,L){return u===null||u.tag!==6?(u=Q2(f,g.mode,L),u.return=g,u):(u=i(u,f),u.return=g,u)}function c(g,u,f,L){var W=f.type;return W===xe?v(g,u,f.props.children,L,f.key):u!==null&&(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===cr&&Zr(W)===u.type)?(u=i(u,f.props),gi(u,f),u.return=g,u):(u=Rn(f.type,f.key,f.props,null,g.mode,L),gi(u,f),u.return=g,u)}function s(g,u,f,L){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=K2(f,g.mode,L),u.return=g,u):(u=i(u,f.children||[]),u.return=g,u)}function v(g,u,f,L,W){return u===null||u.tag!==7?(u=Yr(f,g.mode,L,W),u.return=g,u):(u=i(u,f),u.return=g,u)}function x(g,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=Q2(""+u,g.mode,f),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case bn:return f=Rn(u.type,u.key,u.props,null,g.mode,f),gi(f,u),f.return=g,f;case xi:return u=K2(u,g.mode,f),u.return=g,u;case cr:return u=Zr(u),x(g,u,f)}if(Li(u)||ui(u))return u=Yr(u,g.mode,f,null),u.return=g,u;if(typeof u.then=="function")return x(g,Tn(u),f);if(u.$$typeof===Ga)return x(g,_n(g,u),f);En(g,u)}return null}function p(g,u,f,L){var W=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return W!==null?null:l(g,u,""+f,L);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case bn:return f.key===W?c(g,u,f,L):null;case xi:return f.key===W?s(g,u,f,L):null;case cr:return f=Zr(f),p(g,u,f,L)}if(Li(f)||ui(f))return W!==null?null:v(g,u,f,L,null);if(typeof f.then=="function")return p(g,u,Tn(f),L);if(f.$$typeof===Ga)return p(g,u,_n(g,f),L);En(g,f)}return null}function k(g,u,f,L,W){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return g=g.get(f)||null,l(u,g,""+L,W);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case bn:return g=g.get(L.key===null?f:L.key)||null,c(u,g,L,W);case xi:return g=g.get(L.key===null?f:L.key)||null,s(u,g,L,W);case cr:return L=Zr(L),k(g,u,f,L,W)}if(Li(L)||ui(L))return g=g.get(f)||null,v(u,g,L,W,null);if(typeof L.then=="function")return k(g,u,f,Tn(L),W);if(L.$$typeof===Ga)return k(g,u,f,_n(u,L),W);En(u,L)}return null}function y(g,u,f,L){for(var W=null,V=null,w=u,H=u=0,_=null;w!==null&&H<f.length;H++){w.index>H?(_=w,w=null):_=w.sibling;var D=p(g,w,f[H],L);if(D===null){w===null&&(w=_);break}t&&w&&D.alternate===null&&a(g,w),u=n(D,u,H),V===null?W=D:V.sibling=D,V=D,w=_}if(H===f.length)return r(g,w),G&&Za(g,H),W;if(w===null){for(;H<f.length;H++)w=x(g,f[H],L),w!==null&&(u=n(w,u,H),V===null?W=w:V.sibling=w,V=w);return G&&Za(g,H),W}for(w=e(w);H<f.length;H++)_=k(w,g,H,f[H],L),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?H:_.key),u=n(_,u,H),V===null?W=_:V.sibling=_,V=_);return t&&w.forEach(function(At){return a(g,At)}),G&&Za(g,H),W}function C(g,u,f,L){if(f==null)throw Error(M(151));for(var W=null,V=null,w=u,H=u=0,_=null,D=f.next();w!==null&&!D.done;H++,D=f.next()){w.index>H?(_=w,w=null):_=w.sibling;var At=p(g,w,D.value,L);if(At===null){w===null&&(w=_);break}t&&w&&At.alternate===null&&a(g,w),u=n(At,u,H),V===null?W=At:V.sibling=At,V=At,w=_}if(D.done)return r(g,w),G&&Za(g,H),W;if(w===null){for(;!D.done;H++,D=f.next())D=x(g,D.value,L),D!==null&&(u=n(D,u,H),V===null?W=D:V.sibling=D,V=D);return G&&Za(g,H),W}for(w=e(w);!D.done;H++,D=f.next())D=k(w,g,H,D.value,L),D!==null&&(t&&D.alternate!==null&&w.delete(D.key===null?H:D.key),u=n(D,u,H),V===null?W=D:V.sibling=D,V=D);return t&&w.forEach(function(ar){return a(g,ar)}),G&&Za(g,H),W}function E(g,u,f,L){if(typeof f=="object"&&f!==null&&f.type===xe&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case bn:t:{for(var W=f.key;u!==null;){if(u.key===W){if(W=f.type,W===xe){if(u.tag===7){r(g,u.sibling),L=i(u,f.props.children),L.return=g,g=L;break t}}else if(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===cr&&Zr(W)===u.type){r(g,u.sibling),L=i(u,f.props),gi(L,f),L.return=g,g=L;break t}r(g,u);break}else a(g,u);u=u.sibling}f.type===xe?(L=Yr(f.props.children,g.mode,L,f.key),L.return=g,g=L):(L=Rn(f.type,f.key,f.props,null,g.mode,L),gi(L,f),L.return=g,g=L)}return o(g);case xi:t:{for(W=f.key;u!==null;){if(u.key===W)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){r(g,u.sibling),L=i(u,f.children||[]),L.return=g,g=L;break t}else{r(g,u);break}else a(g,u);u=u.sibling}L=K2(f,g.mode,L),L.return=g,g=L}return o(g);case cr:return f=Zr(f),E(g,u,f,L)}if(Li(f))return y(g,u,f,L);if(ui(f)){if(W=ui(f),typeof W!="function")throw Error(M(150));return f=W.call(f),C(g,u,f,L)}if(typeof f.then=="function")return E(g,u,Tn(f),L);if(f.$$typeof===Ga)return E(g,u,_n(g,f),L);En(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(r(g,u.sibling),L=i(u,f),L.return=g,g=L):(r(g,u),L=Q2(f,g.mode,L),L.return=g,g=L),o(g)):r(g,u)}return function(g,u,f,L){try{qi=0;var W=E(g,u,f,L);return _e=null,W}catch(w){if(w===$e||w===Zo)throw w;var V=Kt(29,w,null,g.mode);return V.lanes=L,V.return=g,V}}}var Fr=xh(!0),Lh=xh(!1),hr=!1;function H1(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function El(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function yr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function wr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(X&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=so(t),hh(t,null,r),a}return Uo(t,e,a,r),so(t)}function ji(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,N0(t,r)}}function J2(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var Nl=!1;function Wi(){if(Nl){var t=ze;if(t!==null)throw t}}function Hi(t,a,r,e){Nl=!1;var i=t.updateQueue;hr=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,s=c.next;c.next=null,o===null?n=s:o.next=s,o=c;var v=t.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==o&&(l===null?v.firstBaseUpdate=s:l.next=s,v.lastBaseUpdate=c))}if(n!==null){var x=i.baseState;o=0,v=s=c=null,l=n;do{var p=l.lane&-536870913,k=p!==l.lane;if(k?(q&p)===p:(e&p)===p){p!==0&&p===Ue&&(Nl=!0),v!==null&&(v=v.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var y=t,C=l;p=a;var E=r;switch(C.tag){case 1:if(y=C.payload,typeof y=="function"){x=y.call(E,x,p);break t}x=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=C.payload,p=typeof y=="function"?y.call(E,x,p):y,p==null)break t;x=et({},x,p);break t;case 2:hr=!0}}p=l.callback,p!==null&&(t.flags|=64,k&&(t.flags|=8192),k=i.callbacks,k===null?i.callbacks=[p]:k.push(p))}else k={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(s=v=k,c=x):v=v.next=k,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;k=l,l=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);v===null&&(c=x),i.baseState=c,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n===null&&(i.shared.lanes=0),Vr|=o,t.lanes=o,t.memoizedState=x}}function Mh(t,a){if(typeof t!="function")throw Error(M(191,t));t.call(a)}function mh(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Mh(r[t],a)}var Ze=Sa(null),vo=Sa(0);function Sc(t,a){t=Pa,P(vo,t),P(Ze,a),Pa=t|a.baseLanes}function Dl(){P(vo,Pa),P(Ze,Ze.current)}function S1(){Pa=vo.current,mt(Ze),mt(vo)}var ta=Sa(null),fa=null;function sr(t){var a=t.alternate;P(ct,ct.current&1),P(ta,t),fa===null&&(a===null||Ze.current!==null||a.memoizedState!==null)&&(fa=t)}function Ol(t){P(ct,ct.current),P(ta,t),fa===null&&(fa=t)}function yh(t){t.tag===22?(P(ct,ct.current),P(ta,t),fa===null&&(fa=t)):gr(t)}function gr(){P(ct,ct.current),P(ta,ta.current)}function Qt(t){mt(ta),fa===t&&(fa=null),mt(ct)}var ct=Sa(0);function ko(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||i1(r)||n1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Fa=0,T=null,$=null,st=null,xo=!1,Te=!1,$r=!1,Lo=0,Gi=0,Ee=null,qp=0;function lt(){throw Error(M(321))}function A1(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!Pt(t[r],a[r]))return!1;return!0}function V1(t,a,r,e,i,n){return Fa=n,T=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,A.H=t===null||t.memoizedState===null?Ph:G1,$r=!1,n=r(e,i),$r=!1,Te&&(n=Ch(a,r,e,i)),wh(t),n}function wh(t){A.H=Yi;var a=$!==null&&$.next!==null;if(Fa=0,st=$=T=null,xo=!1,Gi=0,Ee=null,a)throw Error(M(300));t===null||ft||(t=t.dependencies,t!==null&&po(t)&&(ft=!0))}function Ch(t,a,r,e){T=t;var i=0;do{if(Te&&(Ee=null),Gi=0,Te=!1,25<=i)throw Error(M(301));if(i+=1,st=$=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}A.H=tu,n=a(r,e)}while(Te);return n}function Gp(){var t=A.H,a=t.useState()[0];return a=typeof a.then=="function"?en(a):a,t=t.useState()[0],($!==null?$.memoizedState:null)!==t&&(T.flags|=1024),a}function z1(){var t=Lo!==0;return Lo=0,t}function _1(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function T1(t){if(xo){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}xo=!1}Fa=0,st=$=T=null,Te=!1,Gi=Lo=0,Ee=null}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?T.memoizedState=st=t:st=st.next=t,st}function ht(){if($===null){var t=T.alternate;t=t!==null?t.memoizedState:null}else t=$.next;var a=st===null?T.memoizedState:st.next;if(a!==null)st=a,$=t;else{if(t===null)throw T.alternate===null?Error(M(467)):Error(M(310));$=t,t={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},st===null?T.memoizedState=st=t:st=st.next=t}return st}function qo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function en(t){var a=Gi;return Gi+=1,Ee===null&&(Ee=[]),t=kh(Ee,t,a),a=T,(st===null?a.memoizedState:st.next)===null&&(a=a.alternate,A.H=a===null||a.memoizedState===null?Ph:G1),t}function Go(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return en(t);if(t.$$typeof===Ga)return jt(t)}throw Error(M(438,String(t)))}function E1(t){var a=null,r=T.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=T.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=qo(),T.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=W4;return a.index++,r}function $a(t,a){return typeof a=="function"?a(t):a}function Fn(t){var a=ht();return N1(a,$,t)}function N1(t,a,r){var e=t.queue;if(e===null)throw Error(M(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var l=o=null,c=null,s=a,v=!1;do{var x=s.lane&-536870913;if(x!==s.lane?(q&x)===x:(Fa&x)===x){var p=s.revertLane;if(p===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),x===Ue&&(v=!0);else if((Fa&p)===p){s=s.next,p===Ue&&(v=!0);continue}else x={lane:0,revertLane:s.revertLane,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},c===null?(l=c=x,o=n):c=c.next=x,T.lanes|=p,Vr|=p;x=s.action,$r&&r(n,x),n=s.hasEagerState?s.eagerState:r(n,x)}else p={lane:x,revertLane:s.revertLane,gesture:s.gesture,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},c===null?(l=c=p,o=n):c=c.next=p,T.lanes|=x,Vr|=x;s=s.next}while(s!==null&&s!==a);if(c===null?o=n:c.next=l,!Pt(n,t.memoizedState)&&(ft=!0,v&&(r=ze,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=c,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function F2(t){var a=ht(),r=a.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);Pt(n,a.memoizedState)||(ft=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function Bh(t,a,r){var e=T,i=ht(),n=G;if(n){if(r===void 0)throw Error(M(407));r=r()}else r=a();var o=!Pt(($||i).memoizedState,r);if(o&&(i.memoizedState=r,ft=!0),i=i.queue,D1(Wh.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||st!==null&&st.memoizedState.tag&1){if(e.flags|=2048,qe(9,{destroy:void 0},jh.bind(null,e,i,r,a),null),I===null)throw Error(M(349));n||(Fa&127)!==0||bh(e,a,r)}return r}function bh(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=T.updateQueue,a===null?(a=qo(),T.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function jh(t,a,r,e){a.value=r,a.getSnapshot=e,Hh(a)&&Sh(t)}function Wh(t,a,r){return r(function(){Hh(a)&&Sh(t)})}function Hh(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!Pt(t,r)}catch{return!0}}function Sh(t){var a=re(t,2);a!==null&&Ut(a,t,2)}function Ul(t){var a=_t();if(typeof t=="function"){var r=t;if(t=r(),$r){fr(!0);try{r()}finally{fr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},a}function Ah(t,a,r,e){return t.baseState=r,N1(t,$,typeof e=="function"?e:$a)}function Yp(t,a,r,e,i){if(Xo(t))throw Error(M(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};A.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,Vh(a,n)):(n.next=r.next,a.pending=r.next=n)}}function Vh(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=A.T,o={};A.T=o;try{var l=r(i,e),c=A.S;c!==null&&c(o,l),Ac(t,a,l)}catch(s){Zl(t,a,s)}finally{n!==null&&o.types!==null&&(n.types=o.types),A.T=n}}else try{n=r(i,e),Ac(t,a,n)}catch(s){Zl(t,a,s)}}function Ac(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){Vc(t,a,e)},function(e){return Zl(t,a,e)}):Vc(t,a,r)}function Vc(t,a,r){a.status="fulfilled",a.value=r,zh(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,Vh(t,r)))}function Zl(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,zh(a),a=a.next;while(a!==e)}t.action=null}function zh(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function _h(t,a){return a}function zc(t,a){if(G){var r=I.formState;if(r!==null){t:{var e=T;if(G){if(rt){a:{for(var i=rt,n=pa;i.nodeType!==8;){if(!n){i=null;break a}if(i=va(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){rt=va(i.nextSibling),e=i.data==="F!";break t}}Sr(e)}e=!1}e&&(a=r[0])}}return r=_t(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_h,lastRenderedState:a},r.queue=e,r=Fh.bind(null,T,e),e.dispatch=r,e=Ul(!1),n=q1.bind(null,T,!1,e.queue),e=_t(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=Yp.bind(null,T,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function _c(t){var a=ht();return Th(a,$,t)}function Th(t,a,r){if(a=N1(t,a,_h)[0],t=Fn($a)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=en(a)}catch(o){throw o===$e?Zo:o}else e=a;a=ht();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(T.flags|=2048,qe(9,{destroy:void 0},Xp.bind(null,i,r),null)),[e,n,t]}function Xp(t,a){t.action=a}function Tc(t){var a=ht(),r=$;if(r!==null)return Th(a,r,t);ht(),a=a.memoizedState,r=ht();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function qe(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=T.updateQueue,a===null&&(a=qo(),T.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function Eh(){return ht().memoizedState}function $n(t,a,r,e){var i=_t();T.flags|=t,i.memoizedState=qe(1|a,{destroy:void 0},r,e===void 0?null:e)}function Yo(t,a,r,e){var i=ht();e=e===void 0?null:e;var n=i.memoizedState.inst;$!==null&&e!==null&&A1(e,$.memoizedState.deps)?i.memoizedState=qe(a,n,r,e):(T.flags|=t,i.memoizedState=qe(1|a,n,r,e))}function Ec(t,a){$n(8390656,8,t,a)}function D1(t,a){Yo(2048,8,t,a)}function Qp(t){T.flags|=4;var a=T.updateQueue;if(a===null)a=qo(),T.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function Nh(t){var a=ht().memoizedState;return Qp({ref:a,nextImpl:t}),function(){if((X&2)!==0)throw Error(M(440));return a.impl.apply(void 0,arguments)}}function Dh(t,a){return Yo(4,2,t,a)}function Oh(t,a){return Yo(4,4,t,a)}function Uh(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Zh(t,a,r){r=r!=null?r.concat([t]):null,Yo(4,4,Uh.bind(null,a,t),r)}function O1(){}function qh(t,a){var r=ht();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&A1(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function Gh(t,a){var r=ht();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&A1(a,e[1]))return e[0];if(e=t(),$r){fr(!0);try{t()}finally{fr(!1)}}return r.memoizedState=[e,a],e}function U1(t,a,r){return r===void 0||(Fa&1073741824)!==0&&(q&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=Au(),T.lanes|=t,Vr|=t,r)}function Yh(t,a,r,e){return Pt(r,a)?r:Ze.current!==null?(t=U1(t,r,e),Pt(t,a)||(ft=!0),t):(Fa&42)===0||(Fa&1073741824)!==0&&(q&261930)===0?(ft=!0,t.memoizedState=r):(t=Au(),T.lanes|=t,Vr|=t,a)}function Xh(t,a,r,e,i){var n=Q.p;Q.p=n!==0&&8>n?n:8;var o=A.T,l={};A.T=l,q1(t,!1,a,r);try{var c=i(),s=A.S;if(s!==null&&s(l,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=Zp(c,e);Si(t,a,v,It(t))}else Si(t,a,e,It(t))}catch(x){Si(t,a,{then:function(){},status:"rejected",reason:x},It())}finally{Q.p=n,o!==null&&l.types!==null&&(o.types=l.types),A.T=o}}function Kp(){}function ql(t,a,r,e){if(t.tag!==5)throw Error(M(476));var i=Qh(t).queue;Xh(t,i,a,Gr,r===null?Kp:function(){return Kh(t),r(e)})}function Qh(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Gr,baseState:Gr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:Gr},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Kh(t){var a=Qh(t);a.next===null&&(a=t.alternate.memoizedState),Si(t,a.next.queue,{},It())}function Z1(){return jt(Ki)}function Rh(){return ht().memoizedState}function Jh(){return ht().memoizedState}function Rp(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=It();t=yr(r);var e=wr(a,t,r);e!==null&&(Ut(e,a,r),ji(e,a,r)),a={cache:b1()},t.payload=a;return}a=a.return}}function Jp(t,a,r){var e=It();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Xo(t)?$h(a,r):(r=y1(t,a,r,e),r!==null&&(Ut(r,t,e),Ih(r,a,e)))}function Fh(t,a,r){var e=It();Si(t,a,r,e)}function Si(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xo(t))$h(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,l=n(o,r);if(i.hasEagerState=!0,i.eagerState=l,Pt(l,o))return Uo(t,a,i,0),I===null&&Oo(),!1}catch{}if(r=y1(t,a,i,e),r!==null)return Ut(r,t,e),Ih(r,a,e),!0}return!1}function q1(t,a,r,e){if(e={lane:2,revertLane:$1(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Xo(t)){if(a)throw Error(M(479))}else a=y1(t,r,e,2),a!==null&&Ut(a,t,2)}function Xo(t){var a=t.alternate;return t===T||a!==null&&a===T}function $h(t,a){Te=xo=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function Ih(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,N0(t,r)}}var Yi={readContext:jt,use:Go,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt};Yi.useEffectEvent=lt;var Ph={readContext:jt,use:Go,useCallback:function(t,a){return _t().memoizedState=[t,a===void 0?null:a],t},useContext:jt,useEffect:Ec,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,$n(4194308,4,Uh.bind(null,a,t),r)},useLayoutEffect:function(t,a){return $n(4194308,4,t,a)},useInsertionEffect:function(t,a){$n(4,2,t,a)},useMemo:function(t,a){var r=_t();a=a===void 0?null:a;var e=t();if($r){fr(!0);try{t()}finally{fr(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=_t();if(r!==void 0){var i=r(a);if($r){fr(!0);try{r(a)}finally{fr(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=Jp.bind(null,T,t),[e.memoizedState,t]},useRef:function(t){var a=_t();return t={current:t},a.memoizedState=t},useState:function(t){t=Ul(t);var a=t.queue,r=Fh.bind(null,T,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:O1,useDeferredValue:function(t,a){var r=_t();return U1(r,t,a)},useTransition:function(){var t=Ul(!1);return t=Xh.bind(null,T,t.queue,!0,!1),_t().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=T,i=_t();if(G){if(r===void 0)throw Error(M(407));r=r()}else{if(r=a(),I===null)throw Error(M(349));(q&127)!==0||bh(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,Ec(Wh.bind(null,e,n,t),[t]),e.flags|=2048,qe(9,{destroy:void 0},jh.bind(null,e,n,r,a),null),r},useId:function(){var t=_t(),a=I.identifierPrefix;if(G){var r=ja,e=ba;r=(e&~(1<<32-$t(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=Lo++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=qp++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:Z1,useFormState:zc,useActionState:zc,useOptimistic:function(t){var a=_t();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=q1.bind(null,T,!0,r),r.dispatch=a,[t,a]},useMemoCache:E1,useCacheRefresh:function(){return _t().memoizedState=Rp.bind(null,T)},useEffectEvent:function(t){var a=_t(),r={impl:t};return a.memoizedState=r,function(){if((X&2)!==0)throw Error(M(440));return r.impl.apply(void 0,arguments)}}},G1={readContext:jt,use:Go,useCallback:qh,useContext:jt,useEffect:D1,useImperativeHandle:Zh,useInsertionEffect:Dh,useLayoutEffect:Oh,useMemo:Gh,useReducer:Fn,useRef:Eh,useState:function(){return Fn($a)},useDebugValue:O1,useDeferredValue:function(t,a){var r=ht();return Yh(r,$.memoizedState,t,a)},useTransition:function(){var t=Fn($a)[0],a=ht().memoizedState;return[typeof t=="boolean"?t:en(t),a]},useSyncExternalStore:Bh,useId:Rh,useHostTransitionStatus:Z1,useFormState:_c,useActionState:_c,useOptimistic:function(t,a){var r=ht();return Ah(r,$,t,a)},useMemoCache:E1,useCacheRefresh:Jh};G1.useEffectEvent=Nh;var tu={readContext:jt,use:Go,useCallback:qh,useContext:jt,useEffect:D1,useImperativeHandle:Zh,useInsertionEffect:Dh,useLayoutEffect:Oh,useMemo:Gh,useReducer:F2,useRef:Eh,useState:function(){return F2($a)},useDebugValue:O1,useDeferredValue:function(t,a){var r=ht();return $===null?U1(r,t,a):Yh(r,$.memoizedState,t,a)},useTransition:function(){var t=F2($a)[0],a=ht().memoizedState;return[typeof t=="boolean"?t:en(t),a]},useSyncExternalStore:Bh,useId:Rh,useHostTransitionStatus:Z1,useFormState:Tc,useActionState:Tc,useOptimistic:function(t,a){var r=ht();return $!==null?Ah(r,$,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:E1,useCacheRefresh:Jh};tu.useEffectEvent=Nh;function $2(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:et({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Gl={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=It(),i=yr(e);i.payload=a,r!=null&&(i.callback=r),a=wr(t,i,e),a!==null&&(Ut(a,t,e),ji(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=It(),i=yr(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=wr(t,i,e),a!==null&&(Ut(a,t,e),ji(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=It(),e=yr(r);e.tag=2,a!=null&&(e.callback=a),a=wr(t,e,r),a!==null&&(Ut(a,t,r),ji(a,t,r))}};function Nc(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!Oi(r,e)||!Oi(i,n):!0}function Dc(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&Gl.enqueueReplaceState(a,a.state,null)}function Ir(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=et({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function au(t){uo(t)}function ru(t){console.error(t)}function eu(t){uo(t)}function Mo(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function Oc(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Yl(t,a,r){return r=yr(r),r.tag=3,r.payload={element:null},r.callback=function(){Mo(t,a)},r}function iu(t){return t=yr(t),t.tag=3,t}function nu(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){Oc(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Oc(a,r,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})})}function Fp(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&Fe(a,r,i,!0),r=ta.current,r!==null){switch(r.tag){case 31:case 13:return fa===null?Bo():r.alternate===null&&dt===0&&(dt=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===fo?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),dl(t,e,i)),!1;case 22:return r.flags|=65536,e===fo?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),dl(t,e,i)),!1}throw Error(M(435,r.tag))}return dl(t,e,i),Bo(),!1}if(G)return a=ta.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==Al&&(t=Error(M(422),{cause:e}),Zi(ga(t,r)))):(e!==Al&&(a=Error(M(423),{cause:e}),Zi(ga(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=ga(e,r),i=Yl(t.stateNode,e,i),J2(t,i),dt!==4&&(dt=2)),!1;var n=Error(M(520),{cause:e});if(n=ga(n,r),zi===null?zi=[n]:zi.push(n),dt!==4&&(dt=2),a===null)return!0;e=ga(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=Yl(r.stateNode,e,t),J2(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Cr===null||!Cr.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=iu(i),nu(i,t,r,e),J2(r,i),!1}r=r.return}while(r!==null);return!1}var Y1=Error(M(461)),ft=!1;function Ct(t,a,r,e){a.child=t===null?Lh(a,null,r,e):Fr(a,t.child,r,e)}function Uc(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var l in e)l!=="ref"&&(o[l]=e[l])}else o=e;return Jr(a),e=V1(t,a,r,o,n,i),l=z1(),t!==null&&!ft?(_1(t,a,i),Ia(t,a,i)):(G&&l&&C1(a),a.flags|=1,Ct(t,a,e,i),a.child)}function Zc(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!w1(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,ou(t,a,n,e,i)):(t=Rn(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!X1(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:Oi,r(o,e)&&t.ref===a.ref)return Ia(t,a,i)}return a.flags|=1,t=Qa(n,e),t.ref=a.ref,t.return=a,a.child=t}function ou(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(Oi(n,e)&&t.ref===a.ref)if(ft=!1,a.pendingProps=e=n,X1(t,i))(t.flags&131072)!==0&&(ft=!0);else return a.lanes=t.lanes,Ia(t,a,i)}return Xl(t,a,r,e,i)}function lu(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return qc(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jn(a,n!==null?n.cachePool:null),n!==null?Sc(a,n):Dl(),yh(a);else return e=a.lanes=536870912,qc(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(Jn(a,n.cachePool),Sc(a,n),gr(a),a.memoizedState=null):(t!==null&&Jn(a,null),Dl(),gr(a));return Ct(t,a,i,r),a.child}function mi(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function qc(t,a,r,e,i){var n=j1();return n=n===null?null:{parent:pt._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&Jn(a,null),Dl(),yh(a),t!==null&&Fe(t,a,e,!0),a.childLanes=i,null}function In(t,a){return a=mo({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function Gc(t,a,r){return Fr(a,t.child,null,r),t=In(a,a.pendingProps),t.flags|=2,Qt(a),a.memoizedState=null,t}function $p(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(G){if(e.mode==="hidden")return t=In(a,e),a.lanes=536870912,mi(null,t);if(Ol(a),(t=rt)?(t=Pu(t,pa),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Hr!==null?{id:ba,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},r=sh(t),r.return=a,a.child=r,bt=a,rt=null)):t=null,t===null)throw Sr(a);return a.lanes=536870912,null}return In(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(Ol(a),i)if(a.flags&256)a.flags&=-257,a=Gc(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(M(558));else if(ft||Fe(t,a,r,!1),i=(r&t.childLanes)!==0,ft||i){if(e=I,e!==null&&(o=D0(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,re(t,o),Ut(e,t,o),Y1;Bo(),a=Gc(t,a,r)}else t=n.treeContext,rt=va(o.nextSibling),bt=a,G=!0,mr=null,pa=!1,t!==null&&ph(a,t),a=In(a,e),a.flags|=4096;return a}return t=Qa(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function Pn(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(M(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function Xl(t,a,r,e,i){return Jr(a),r=V1(t,a,r,e,void 0,i),e=z1(),t!==null&&!ft?(_1(t,a,i),Ia(t,a,i)):(G&&e&&C1(a),a.flags|=1,Ct(t,a,r,i),a.child)}function Yc(t,a,r,e,i,n){return Jr(a),a.updateQueue=null,r=Ch(a,e,r,i),wh(t),e=z1(),t!==null&&!ft?(_1(t,a,n),Ia(t,a,n)):(G&&e&&C1(a),a.flags|=1,Ct(t,a,r,n),a.child)}function Xc(t,a,r,e,i){if(Jr(a),a.stateNode===null){var n=be,o=r.contextType;typeof o=="object"&&o!==null&&(n=jt(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Gl,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},H1(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?jt(o):be,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&($2(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&Gl.enqueueReplaceState(n,n.state,null),Hi(a,e,n,i),Wi(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var l=a.memoizedProps,c=Ir(r,l);n.props=c;var s=n.context,v=r.contextType;o=be,typeof v=="object"&&v!==null&&(o=jt(v));var x=r.getDerivedStateFromProps;v=typeof x=="function"||typeof n.getSnapshotBeforeUpdate=="function",l=a.pendingProps!==l,v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(l||s!==o)&&Dc(a,n,e,o),hr=!1;var p=a.memoizedState;n.state=p,Hi(a,e,n,i),Wi(),s=a.memoizedState,l||p!==s||hr?(typeof x=="function"&&($2(a,r,x,e),s=a.memoizedState),(c=hr||Nc(a,r,c,e,p,s,o))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=s),n.props=e,n.state=s,n.context=o,e=c):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,El(t,a),o=a.memoizedProps,v=Ir(r,o),n.props=v,x=a.pendingProps,p=n.context,s=r.contextType,c=be,typeof s=="object"&&s!==null&&(c=jt(s)),l=r.getDerivedStateFromProps,(s=typeof l=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==x||p!==c)&&Dc(a,n,e,c),hr=!1,p=a.memoizedState,n.state=p,Hi(a,e,n,i),Wi();var k=a.memoizedState;o!==x||p!==k||hr||t!==null&&t.dependencies!==null&&po(t.dependencies)?(typeof l=="function"&&($2(a,r,l,e),k=a.memoizedState),(v=hr||Nc(a,r,v,e,p,k,c)||t!==null&&t.dependencies!==null&&po(t.dependencies))?(s||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,k,c),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,k,c)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=k),n.props=e,n.state=k,n.context=c,e=v):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,Pn(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=Fr(a,t.child,null,i),a.child=Fr(a,null,r,i)):Ct(t,a,r,i),a.memoizedState=n.state,t=a.child):t=Ia(t,a,i),t}function Qc(t,a,r,e){return Rr(),a.flags|=256,Ct(t,a,r,e),a.child}var I2={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function P2(t){return{baseLanes:t,cachePool:vh()}}function tl(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=Rt),t}function du(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(ct.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(G){if(i?sr(a):gr(a),(t=rt)?(t=Pu(t,pa),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Hr!==null?{id:ba,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},r=sh(t),r.return=a,a.child=r,bt=a,rt=null)):t=null,t===null)throw Sr(a);return n1(t)?a.lanes=32:a.lanes=536870912,null}var l=e.children;return e=e.fallback,i?(gr(a),i=a.mode,l=mo({mode:"hidden",children:l},i),e=Yr(e,i,r,null),l.return=a,e.return=a,l.sibling=e,a.child=l,e=a.child,e.memoizedState=P2(r),e.childLanes=tl(t,o,r),a.memoizedState=I2,mi(null,e)):(sr(a),Ql(a,l))}var c=t.memoizedState;if(c!==null&&(l=c.dehydrated,l!==null)){if(n)a.flags&256?(sr(a),a.flags&=-257,a=al(t,a,r)):a.memoizedState!==null?(gr(a),a.child=t.child,a.flags|=128,a=null):(gr(a),l=e.fallback,i=a.mode,e=mo({mode:"visible",children:e.children},i),l=Yr(l,i,r,null),l.flags|=2,e.return=a,l.return=a,e.sibling=l,a.child=e,Fr(a,t.child,null,r),e=a.child,e.memoizedState=P2(r),e.childLanes=tl(t,o,r),a.memoizedState=I2,a=mi(null,e));else if(sr(a),n1(l)){if(o=l.nextSibling&&l.nextSibling.dataset,o)var s=o.dgst;o=s,e=Error(M(419)),e.stack="",e.digest=o,Zi({value:e,source:null,stack:null}),a=al(t,a,r)}else if(ft||Fe(t,a,r,!1),o=(r&t.childLanes)!==0,ft||o){if(o=I,o!==null&&(e=D0(o,r),e!==0&&e!==c.retryLane))throw c.retryLane=e,re(t,e),Ut(o,t,e),Y1;i1(l)||Bo(),a=al(t,a,r)}else i1(l)?(a.flags|=192,a.child=t.child,a=null):(t=c.treeContext,rt=va(l.nextSibling),bt=a,G=!0,mr=null,pa=!1,t!==null&&ph(a,t),a=Ql(a,e.children),a.flags|=4096);return a}return i?(gr(a),l=e.fallback,i=a.mode,c=t.child,s=c.sibling,e=Qa(c,{mode:"hidden",children:e.children}),e.subtreeFlags=c.subtreeFlags&65011712,s!==null?l=Qa(s,l):(l=Yr(l,i,r,null),l.flags|=2),l.return=a,e.return=a,e.sibling=l,a.child=e,mi(null,e),e=a.child,l=t.child.memoizedState,l===null?l=P2(r):(i=l.cachePool,i!==null?(c=pt._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=vh(),l={baseLanes:l.baseLanes|r,cachePool:i}),e.memoizedState=l,e.childLanes=tl(t,o,r),a.memoizedState=I2,mi(t.child,e)):(sr(a),r=t.child,t=r.sibling,r=Qa(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function Ql(t,a){return a=mo({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function mo(t,a){return t=Kt(22,t,null,a),t.lanes=0,t}function al(t,a,r){return Fr(a,t.child,null,r),t=Ql(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Kc(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),zl(t.return,a,r)}function rl(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function cu(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=ct.current,l=(o&2)!==0;if(l?(o=o&1|2,a.flags|=128):o&=1,P(ct,o),Ct(t,a,e,r),e=G?Ui:0,!l&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kc(t,r,a);else if(t.tag===19)Kc(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&ko(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),rl(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&ko(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}rl(a,!0,r,null,n,e);break;case"together":rl(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function Ia(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Vr|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(Fe(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(M(153));if(a.child!==null){for(t=a.child,r=Qa(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=Qa(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function X1(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&po(t)))}function Ip(t,a,r){switch(a.tag){case 3:oo(a,a.stateNode.containerInfo),ur(a,pt,t.memoizedState.cache),Rr();break;case 27:case 5:Ml(a);break;case 4:oo(a,a.stateNode.containerInfo);break;case 10:ur(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ol(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(sr(a),a.flags|=128,null):(r&a.child.childLanes)!==0?du(t,a,r):(sr(a),t=Ia(t,a,r),t!==null?t.sibling:null);sr(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||(Fe(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return cu(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(ct,ct.current),e)break;return null;case 22:return a.lanes=0,lu(t,a,r,a.pendingProps);case 24:ur(a,pt,t.memoizedState.cache)}return Ia(t,a,r)}function hu(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)ft=!0;else{if(!X1(t,r)&&(a.flags&128)===0)return ft=!1,Ip(t,a,r);ft=(t.flags&131072)!==0}else ft=!1,G&&(a.flags&1048576)!==0&&gh(a,Ui,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=Zr(a.elementType),a.type=t,typeof t=="function")w1(t)?(e=Ir(t,e),a.tag=1,a=Xc(null,a,t,e,r)):(a.tag=0,a=Xl(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===c1){a.tag=11,a=Uc(null,a,t,e,r);break t}else if(i===h1){a.tag=14,a=Zc(null,a,t,e,r);break t}}throw a=xl(t)||t,Error(M(306,a,""))}}return a;case 0:return Xl(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=Ir(e,a.pendingProps),Xc(t,a,e,i,r);case 3:t:{if(oo(a,a.stateNode.containerInfo),t===null)throw Error(M(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,El(t,a),Hi(a,e,null,r);var o=a.memoizedState;if(e=o.cache,ur(a,pt,e),e!==n.cache&&_l(a,[pt],r,!0),Wi(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=Qc(t,a,e,r);break t}else if(e!==i){i=ga(Error(M(424)),a),Zi(i),a=Qc(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,rt=va(t.firstChild),bt=a,G=!0,mr=null,pa=!0,r=Lh(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Rr(),e===i){a=Ia(t,a,r);break t}Ct(t,a,e,r)}a=a.child}return a;case 26:return Pn(t,a),t===null?(r=f0(a.type,null,a.pendingProps,null))?a.memoizedState=r:G||(r=a.type,t=a.pendingProps,e=Ho(Mr.current).createElement(r),e[Bt]=a,e[Zt]=t,Wt(e,r,t),Mt(e),a.stateNode=e):a.memoizedState=f0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Ml(a),t===null&&G&&(e=a.stateNode=ts(a.type,a.pendingProps,Mr.current),bt=a,pa=!0,i=rt,_r(a.type)?(o1=i,rt=va(e.firstChild)):rt=i),Ct(t,a,a.pendingProps.children,r),Pn(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&G&&((i=e=rt)&&(e=b5(e,a.type,a.pendingProps,pa),e!==null?(a.stateNode=e,bt=a,rt=va(e.firstChild),pa=!1,i=!0):i=!1),i||Sr(a)),Ml(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,r1(i,n)?e=null:o!==null&&r1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=V1(t,a,Gp,null,null,r),Ki._currentValue=i),Pn(t,a),Ct(t,a,e,r),a.child;case 6:return t===null&&G&&((t=r=rt)&&(r=j5(r,a.pendingProps,pa),r!==null?(a.stateNode=r,bt=a,rt=null,t=!0):t=!1),t||Sr(a)),null;case 13:return du(t,a,r);case 4:return oo(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=Fr(a,null,e,r):Ct(t,a,e,r),a.child;case 11:return Uc(t,a,a.type,a.pendingProps,r);case 7:return Ct(t,a,a.pendingProps,r),a.child;case 8:return Ct(t,a,a.pendingProps.children,r),a.child;case 12:return Ct(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,ur(a,a.type,e.value),Ct(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,Jr(a),i=jt(i),e=e(i),a.flags|=1,Ct(t,a,e,r),a.child;case 14:return Zc(t,a,a.type,a.pendingProps,r);case 15:return ou(t,a,a.type,a.pendingProps,r);case 19:return cu(t,a,r);case 31:return $p(t,a,r);case 22:return lu(t,a,r,a.pendingProps);case 24:return Jr(a),e=jt(pt),t===null?(i=j1(),i===null&&(i=I,n=b1(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},H1(a),ur(a,pt,i)):((t.lanes&r)!==0&&(El(t,a),Hi(a,null,null,r),Wi()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),ur(a,pt,e)):(e=n.cache,ur(a,pt,e),e!==i.cache&&_l(a,[pt],r,!0))),Ct(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(M(156,a.tag))}function Na(t){t.flags|=4}function el(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(_u())t.flags|=8192;else throw Qr=fo,W1}else t.flags&=-16777217}function Rc(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!es(a))if(_u())t.flags|=8192;else throw Qr=fo,W1}function Nn(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?T0():536870912,t.lanes|=a,Ge|=a)}function pi(t,a){if(!G)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function at(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function Pp(t,a,r){var e=a.pendingProps;switch(B1(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(a),null;case 1:return at(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Ka(pt),Ne(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(pe(a)?Na(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,R2())),at(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(Na(a),n!==null?(at(a),Rc(a,n)):(at(a),el(a,i,null,e,r))):n?n!==t.memoizedState?(Na(a),at(a),Rc(a,n)):(at(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&Na(a),at(a),el(a,i,t,e,r)),null;case 27:if(lo(a),r=Mr.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Na(a);else{if(!e){if(a.stateNode===null)throw Error(M(166));return at(a),null}t=Ha.current,pe(a)?wc(a,t):(t=ts(i,e,r),a.stateNode=t,Na(a))}return at(a),null;case 5:if(lo(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Na(a);else{if(!e){if(a.stateNode===null)throw Error(M(166));return at(a),null}if(n=Ha.current,pe(a))wc(a,n);else{var o=Ho(Mr.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[Bt]=a,n[Zt]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(Wt(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Na(a)}}return at(a),el(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&Na(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(M(166));if(t=Mr.current,pe(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=bt,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[Bt]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||Fu(t.nodeValue,r)),t||Sr(a,!0)}else t=Ho(t).createTextNode(e),t[Bt]=a,a.stateNode=t}return at(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=pe(a),r!==null){if(t===null){if(!e)throw Error(M(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(557));t[Bt]=a}else Rr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;at(a),t=!1}else r=R2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?(Qt(a),a):(Qt(a),null);if((a.flags&128)!==0)throw Error(M(558))}return at(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=pe(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(M(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[Bt]=a}else Rr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;at(a),i=!1}else i=R2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(Qt(a),a):(Qt(a),null)}return Qt(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),Nn(a,a.updateQueue),at(a),null);case 4:return Ne(),t===null&&I1(a.stateNode.containerInfo),at(a),null;case 10:return Ka(a.type),at(a),null;case 19:if(mt(ct),e=a.memoizedState,e===null)return at(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)pi(e,!1);else{if(dt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=ko(t),n!==null){for(a.flags|=128,pi(e,!1),t=n.updateQueue,a.updateQueue=t,Nn(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)uh(r,t),r=r.sibling;return P(ct,ct.current&1|2),G&&Za(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&Jt()>wo&&(a.flags|=128,i=!0,pi(e,!1),a.lanes=4194304)}else{if(!i)if(t=ko(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,Nn(a,t),pi(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!G)return at(a),null}else 2*Jt()-e.renderingStartTime>wo&&r!==536870912&&(a.flags|=128,i=!0,pi(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=Jt(),t.sibling=null,r=ct.current,P(ct,i?r&1|2:r&1),G&&Za(a,e.treeForkCount),t):(at(a),null);case 22:case 23:return Qt(a),S1(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(at(a),a.subtreeFlags&6&&(a.flags|=8192)):at(a),r=a.updateQueue,r!==null&&Nn(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&mt(Xr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),Ka(pt),at(a),null;case 25:return null;case 30:return null}throw Error(M(156,a.tag))}function t5(t,a){switch(B1(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Ka(pt),Ne(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return lo(a),null;case 31:if(a.memoizedState!==null){if(Qt(a),a.alternate===null)throw Error(M(340));Rr()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(Qt(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(M(340));Rr()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return mt(ct),null;case 4:return Ne(),null;case 10:return Ka(a.type),null;case 22:case 23:return Qt(a),S1(),t!==null&&mt(Xr),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Ka(pt),null;case 25:return null;default:return null}}function uu(t,a){switch(B1(a),a.tag){case 3:Ka(pt),Ne();break;case 26:case 27:case 5:lo(a);break;case 4:Ne();break;case 31:a.memoizedState!==null&&Qt(a);break;case 13:Qt(a);break;case 19:mt(ct);break;case 10:Ka(a.type);break;case 22:case 23:Qt(a),S1(),t!==null&&mt(Xr);break;case 24:Ka(pt)}}function nn(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(l){J(a,a.return,l)}}function Ar(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,l=o.destroy;if(l!==void 0){o.destroy=void 0,i=a;var c=r,s=l;try{s()}catch(v){J(i,c,v)}}}e=e.next}while(e!==n)}}catch(v){J(a,a.return,v)}}function su(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{mh(a,r)}catch(e){J(t,t.return,e)}}}function gu(t,a,r){r.props=Ir(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){J(t,a,e)}}function Ai(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){J(t,a,i)}}function Wa(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){J(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){J(t,a,i)}else r.current=null}function pu(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){J(t,t.return,i)}}function il(t,a,r){try{var e=t.stateNode;M5(e,t.type,r,a),e[Zt]=a}catch(i){J(t,t.return,i)}}function fu(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&_r(t.type)||t.tag===4}function nl(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||fu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&_r(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kl(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Ya));else if(e!==4&&(e===27&&_r(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(Kl(t,a,r),t=t.sibling;t!==null;)Kl(t,a,r),t=t.sibling}function yo(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&_r(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(yo(t,a,r),t=t.sibling;t!==null;)yo(t,a,r),t=t.sibling}function vu(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Wt(a,e,r),a[Bt]=t,a[Zt]=r}catch(n){J(t,t.return,n)}}var qa=!1,gt=!1,ol=!1,Jc=typeof WeakSet=="function"?WeakSet:Set,Lt=null;function a5(t,a){if(t=t.containerInfo,t1=zo,t=eh(t),M1(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,l=-1,c=-1,s=0,v=0,x=t,p=null;a:for(;;){for(var k;x!==r||i!==0&&x.nodeType!==3||(l=o+i),x!==n||e!==0&&x.nodeType!==3||(c=o+e),x.nodeType===3&&(o+=x.nodeValue.length),(k=x.firstChild)!==null;)p=x,x=k;for(;;){if(x===t)break a;if(p===r&&++s===i&&(l=o),p===n&&++v===e&&(c=o),(k=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=k}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(a1={focusedElem:t,selectionRange:r},zo=!1,Lt=a;Lt!==null;)if(a=Lt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Lt=t;else for(;Lt!==null;){switch(a=Lt,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var y=Ir(r.type,i);t=e.getSnapshotBeforeUpdate(y,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(C){J(r,r.return,C)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)e1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":e1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(M(163))}if(t=a.sibling,t!==null){t.return=a.return,Lt=t;break}Lt=a.return}}function ku(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:Oa(t,r),e&4&&nn(5,r);break;case 1:if(Oa(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){J(r,r.return,o)}else{var i=Ir(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){J(r,r.return,o)}}e&64&&su(r),e&512&&Ai(r,r.return);break;case 3:if(Oa(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{mh(t,a)}catch(o){J(r,r.return,o)}}break;case 27:a===null&&e&4&&vu(r);case 26:case 5:Oa(t,r),a===null&&e&4&&pu(r),e&512&&Ai(r,r.return);break;case 12:Oa(t,r);break;case 31:Oa(t,r),e&4&&Mu(t,r);break;case 13:Oa(t,r),e&4&&mu(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=h5.bind(null,r),W5(t,r))));break;case 22:if(e=r.memoizedState!==null||qa,!e){a=a!==null&&a.memoizedState!==null||gt,i=qa;var n=gt;qa=e,(gt=a)&&!n?Ua(t,r,(r.subtreeFlags&8772)!==0):Oa(t,r),qa=i,gt=n}break;case 30:break;default:Oa(t,r)}}function xu(t){var a=t.alternate;a!==null&&(t.alternate=null,xu(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&p1(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nt=null,Dt=!1;function Da(t,a,r){for(r=r.child;r!==null;)Lu(t,a,r),r=r.sibling}function Lu(t,a,r){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount($i,r)}catch{}switch(r.tag){case 26:gt||Wa(r,a),Da(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:gt||Wa(r,a);var e=nt,i=Dt;_r(r.type)&&(nt=r.stateNode,Dt=!1),Da(t,a,r),Ti(r.stateNode),nt=e,Dt=i;break;case 5:gt||Wa(r,a);case 6:if(e=nt,i=Dt,nt=null,Da(t,a,r),nt=e,Dt=i,nt!==null)if(Dt)try{(nt.nodeType===9?nt.body:nt.nodeName==="HTML"?nt.ownerDocument.body:nt).removeChild(r.stateNode)}catch(n){J(r,a,n)}else try{nt.removeChild(r.stateNode)}catch(n){J(r,a,n)}break;case 18:nt!==null&&(Dt?(t=nt,h0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Ke(t)):h0(nt,r.stateNode));break;case 4:e=nt,i=Dt,nt=r.stateNode.containerInfo,Dt=!0,Da(t,a,r),nt=e,Dt=i;break;case 0:case 11:case 14:case 15:Ar(2,r,a),gt||Ar(4,r,a),Da(t,a,r);break;case 1:gt||(Wa(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&gu(r,a,e)),Da(t,a,r);break;case 21:Da(t,a,r);break;case 22:gt=(e=gt)||r.memoizedState!==null,Da(t,a,r),gt=e;break;default:Da(t,a,r)}}function Mu(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ke(t)}catch(r){J(a,a.return,r)}}}function mu(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ke(t)}catch(r){J(a,a.return,r)}}function r5(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new Jc),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new Jc),a;default:throw Error(M(435,t.tag))}}function Dn(t,a){var r=r5(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=u5.bind(null,t,e);e.then(i,i)}})}function Et(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(_r(l.type)){nt=l.stateNode,Dt=!1;break t}break;case 5:nt=l.stateNode,Dt=!1;break t;case 3:case 4:nt=l.stateNode.containerInfo,Dt=!0;break t}l=l.return}if(nt===null)throw Error(M(160));Lu(n,o,i),nt=null,Dt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)yu(a,t),a=a.sibling}var ma=null;function yu(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Et(a,t),Nt(t),e&4&&(Ar(3,t,t.return),nn(3,t),Ar(5,t,t.return));break;case 1:Et(a,t),Nt(t),e&512&&(gt||r===null||Wa(r,r.return)),e&64&&qa&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=ma;if(Et(a,t),Nt(t),e&512&&(gt||r===null||Wa(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[tn]||n[Bt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),Wt(n,e,r),n[Bt]=t,Mt(n),e=n;break t;case"link":var o=k0("link","href",i).get(e+(r.href||""));if(o){for(var l=0;l<o.length;l++)if(n=o[l],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(l,1);break a}}n=i.createElement(e),Wt(n,e,r),i.head.appendChild(n);break;case"meta":if(o=k0("meta","content",i).get(e+(r.content||""))){for(l=0;l<o.length;l++)if(n=o[l],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(l,1);break a}}n=i.createElement(e),Wt(n,e,r),i.head.appendChild(n);break;default:throw Error(M(468,e))}n[Bt]=t,Mt(n),e=n}t.stateNode=e}else x0(i,t.type,t.stateNode);else t.stateNode=v0(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?x0(i,t.type,t.stateNode):v0(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&il(t,t.memoizedProps,r.memoizedProps)}break;case 27:Et(a,t),Nt(t),e&512&&(gt||r===null||Wa(r,r.return)),r!==null&&e&4&&il(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Et(a,t),Nt(t),e&512&&(gt||r===null||Wa(r,r.return)),t.flags&32){i=t.stateNode;try{Oe(i,"")}catch(y){J(t,t.return,y)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,il(t,i,r!==null?r.memoizedProps:i)),e&1024&&(ol=!0);break;case 6:if(Et(a,t),Nt(t),e&4){if(t.stateNode===null)throw Error(M(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(y){J(t,t.return,y)}}break;case 3:if(ro=null,i=ma,ma=So(a.containerInfo),Et(a,t),ma=i,Nt(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{Ke(a.containerInfo)}catch(y){J(t,t.return,y)}ol&&(ol=!1,wu(t));break;case 4:e=ma,ma=So(t.stateNode.containerInfo),Et(a,t),Nt(t),ma=e;break;case 12:Et(a,t),Nt(t);break;case 31:Et(a,t),Nt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Dn(t,e)));break;case 13:Et(a,t),Nt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Qo=Jt()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Dn(t,e)));break;case 22:i=t.memoizedState!==null;var c=r!==null&&r.memoizedState!==null,s=qa,v=gt;if(qa=s||i,gt=v||c,Et(a,t),gt=v,qa=s,Nt(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||c||qa||gt||qr(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){c=r=a;try{if(n=c.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{l=c.stateNode;var x=c.memoizedProps.style,p=x!=null&&x.hasOwnProperty("display")?x.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){J(c,c.return,y)}}}else if(a.tag===6){if(r===null){c=a;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(y){J(c,c.return,y)}}}else if(a.tag===18){if(r===null){c=a;try{var k=c.stateNode;i?u0(k,!0):u0(c.stateNode,!1)}catch(y){J(c,c.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,Dn(t,r))));break;case 19:Et(a,t),Nt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Dn(t,e)));break;case 30:break;case 21:break;default:Et(a,t),Nt(t)}}function Nt(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if(fu(e)){r=e;break}e=e.return}if(r==null)throw Error(M(160));switch(r.tag){case 27:var i=r.stateNode,n=nl(t);yo(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(Oe(o,""),r.flags&=-33);var l=nl(t);yo(t,l,o);break;case 3:case 4:var c=r.stateNode.containerInfo,s=nl(t);Kl(t,s,c);break;default:throw Error(M(161))}}catch(v){J(t,t.return,v)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function wu(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;wu(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Oa(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)ku(t,a.alternate,a),a=a.sibling}function qr(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Ar(4,a,a.return),qr(a);break;case 1:Wa(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&gu(a,a.return,r),qr(a);break;case 27:Ti(a.stateNode);case 26:case 5:Wa(a,a.return),qr(a);break;case 22:a.memoizedState===null&&qr(a);break;case 30:qr(a);break;default:qr(a)}t=t.sibling}}function Ua(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:Ua(i,n,r),nn(4,n);break;case 1:if(Ua(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(s){J(e,e.return,s)}if(e=n,i=e.updateQueue,i!==null){var l=e.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Mh(c[i],l)}catch(s){J(e,e.return,s)}}r&&o&64&&su(n),Ai(n,n.return);break;case 27:vu(n);case 26:case 5:Ua(i,n,r),r&&e===null&&o&4&&pu(n),Ai(n,n.return);break;case 12:Ua(i,n,r);break;case 31:Ua(i,n,r),r&&o&4&&Mu(i,n);break;case 13:Ua(i,n,r),r&&o&4&&mu(i,n);break;case 22:n.memoizedState===null&&Ua(i,n,r),Ai(n,n.return);break;case 30:break;default:Ua(i,n,r)}a=a.sibling}}function Q1(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&rn(r))}function K1(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&rn(t))}function Ma(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Cu(t,a,r,e),a=a.sibling}function Cu(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(t,a,r,e),i&2048&&nn(9,a);break;case 1:Ma(t,a,r,e);break;case 3:Ma(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&rn(t)));break;case 12:if(i&2048){Ma(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,l=n.onPostCommit;typeof l=="function"&&l(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){J(a,a.return,c)}}else Ma(t,a,r,e);break;case 31:Ma(t,a,r,e);break;case 13:Ma(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?Ma(t,a,r,e):Vi(t,a):n._visibility&2?Ma(t,a,r,e):(n._visibility|=2,ve(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&Q1(o,a);break;case 24:Ma(t,a,r,e),i&2048&&K1(a.alternate,a);break;default:Ma(t,a,r,e)}}function ve(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,l=r,c=e,s=o.flags;switch(o.tag){case 0:case 11:case 15:ve(n,o,l,c,i),nn(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?ve(n,o,l,c,i):Vi(n,o):(v._visibility|=2,ve(n,o,l,c,i)),i&&s&2048&&Q1(o.alternate,o);break;case 24:ve(n,o,l,c,i),i&&s&2048&&K1(o.alternate,o);break;default:ve(n,o,l,c,i)}a=a.sibling}}function Vi(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:Vi(r,e),i&2048&&Q1(e.alternate,e);break;case 24:Vi(r,e),i&2048&&K1(e.alternate,e);break;default:Vi(r,e)}a=a.sibling}}var yi=8192;function fe(t,a,r){if(t.subtreeFlags&yi)for(t=t.child;t!==null;)Bu(t,a,r),t=t.sibling}function Bu(t,a,r){switch(t.tag){case 26:fe(t,a,r),t.flags&yi&&t.memoizedState!==null&&U5(r,ma,t.memoizedState,t.memoizedProps);break;case 5:fe(t,a,r);break;case 3:case 4:var e=ma;ma=So(t.stateNode.containerInfo),fe(t,a,r),ma=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=yi,yi=16777216,fe(t,a,r),yi=e):fe(t,a,r));break;default:fe(t,a,r)}}function bu(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function fi(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];Lt=e,Wu(e,t)}bu(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ju(t),t=t.sibling}function ju(t){switch(t.tag){case 0:case 11:case 15:fi(t),t.flags&2048&&Ar(9,t,t.return);break;case 3:fi(t);break;case 12:fi(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,to(t)):fi(t);break;default:fi(t)}}function to(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];Lt=e,Wu(e,t)}bu(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Ar(8,a,a.return),to(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,to(a));break;default:to(a)}t=t.sibling}}function Wu(t,a){for(;Lt!==null;){var r=Lt;switch(r.tag){case 0:case 11:case 15:Ar(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:rn(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,Lt=e;else t:for(r=t;Lt!==null;){e=Lt;var i=e.sibling,n=e.return;if(xu(e),e===r){Lt=null;break t}if(i!==null){i.return=n,Lt=i;break t}Lt=n}}}var e5={getCacheForType:function(t){var a=jt(pt),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return jt(pt).controller.signal}},i5=typeof WeakMap=="function"?WeakMap:Map,X=0,I=null,U=null,q=0,R=0,Xt=null,kr=!1,Ie=!1,R1=!1,Pa=0,dt=0,Vr=0,Kr=0,J1=0,Rt=0,Ge=0,zi=null,Ot=null,Rl=!1,Qo=0,Hu=0,wo=1/0,Co=null,Cr=null,vt=0,Br=null,Ye=null,Ra=0,Jl=0,Fl=null,Su=null,_i=0,$l=null;function It(){return(X&2)!==0&&q!==0?q&-q:A.T!==null?$1():O0()}function Au(){if(Rt===0)if((q&536870912)===0||G){var t=Wn;Wn<<=1,(Wn&3932160)===0&&(Wn=262144),Rt=t}else Rt=536870912;return t=ta.current,t!==null&&(t.flags|=32),Rt}function Ut(t,a,r){(t===I&&(R===2||R===9)||t.cancelPendingCommit!==null)&&(Xe(t,0),xr(t,q,Rt,!1)),Pi(t,r),((X&2)===0||t!==I)&&(t===I&&((X&2)===0&&(Kr|=r),dt===4&&xr(t,q,Rt,!1)),Aa(t))}function Vu(t,a,r){if((X&6)!==0)throw Error(M(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||Ii(t,a),i=e?l5(t,a):ll(t,a,!0),n=e;do{if(i===0){Ie&&!e&&xr(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!n5(r)){i=ll(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var l=t;i=zi;var c=l.current.memoizedState.isDehydrated;if(c&&(Xe(l,o).flags|=256),o=ll(l,o,!1),o!==2){if(R1&&!c){l.errorRecoveryDisabledLanes|=n,Kr|=n,i=4;break t}n=Ot,Ot=i,n!==null&&(Ot===null?Ot=n:Ot.push.apply(Ot,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){Xe(t,0),xr(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(M(345));case 4:if((a&4194048)!==a)break;case 6:xr(e,a,Rt,!kr);break t;case 2:Ot=null;break;case 3:case 5:break;default:throw Error(M(329))}if((a&62914560)===a&&(i=Qo+300-Jt(),10<i)){if(xr(e,a,Rt,!kr),To(e,0,!0)!==0)break t;Ra=a,e.timeoutHandle=Iu(Fc.bind(null,e,r,Ot,Co,Rl,a,Rt,Kr,Ge,kr,n,"Throttled",-0,0),i);break t}Fc(e,r,Ot,Co,Rl,a,Rt,Kr,Ge,kr,n,null,-0,0)}}break}while(!0);Aa(t)}function Fc(t,a,r,e,i,n,o,l,c,s,v,x,p,k){if(t.timeoutHandle=-1,x=a.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ya},Bu(a,n,x);var y=(n&62914560)===n?Qo-Jt():(n&4194048)===n?Hu-Jt():0;if(y=Z5(x,y),y!==null){Ra=n,t.cancelPendingCommit=y(Ic.bind(null,t,a,n,r,e,i,o,l,c,v,x,null,p,k)),xr(t,n,o,!s);return}}Ic(t,a,n,r,e,i,o,l,c)}function n5(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!Pt(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function xr(t,a,r,e){a&=~J1,a&=~Kr,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-$t(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&E0(t,r,a)}function Ko(){return(X&6)===0?(on(0,!1),!1):!0}function F1(){if(U!==null){if(R===0)var t=U.return;else t=U,Xa=ee=null,T1(t),_e=null,qi=0,t=U;for(;t!==null;)uu(t.alternate,t),t=t.return;U=null}}function Xe(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,w5(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Ra=0,F1(),I=t,U=r=Qa(t.current,null),q=a,R=0,Xt=null,kr=!1,Ie=Ii(t,a),R1=!1,Ge=Rt=J1=Kr=Vr=dt=0,Ot=zi=null,Rl=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-$t(e),n=1<<i;a|=t[i],e&=~n}return Pa=a,Oo(),r}function zu(t,a){T=null,A.H=Yi,a===$e||a===Zo?(a=Wc(),R=3):a===W1?(a=Wc(),R=4):R=a===Y1?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Xt=a,U===null&&(dt=1,Mo(t,ga(a,t.current)))}function _u(){var t=ta.current;return t===null?!0:(q&4194048)===q?fa===null:(q&62914560)===q||(q&536870912)!==0?t===fa:!1}function Tu(){var t=A.H;return A.H=Yi,t===null?Yi:t}function Eu(){var t=A.A;return A.A=e5,t}function Bo(){dt=4,kr||(q&4194048)!==q&&ta.current!==null||(Ie=!0),(Vr&134217727)===0&&(Kr&134217727)===0||I===null||xr(I,q,Rt,!1)}function ll(t,a,r){var e=X;X|=2;var i=Tu(),n=Eu();(I!==t||q!==a)&&(Co=null,Xe(t,a)),a=!1;var o=dt;t:do try{if(R!==0&&U!==null){var l=U,c=Xt;switch(R){case 8:F1(),o=6;break t;case 3:case 2:case 9:case 6:ta.current===null&&(a=!0);var s=R;if(R=0,Xt=null,He(t,l,c,s),r&&Ie){o=0;break t}break;default:s=R,R=0,Xt=null,He(t,l,c,s)}}o5(),o=dt;break}catch(v){zu(t,v)}while(!0);return a&&t.shellSuspendCounter++,Xa=ee=null,X=e,A.H=i,A.A=n,U===null&&(I=null,q=0,Oo()),o}function o5(){for(;U!==null;)Nu(U)}function l5(t,a){var r=X;X|=2;var e=Tu(),i=Eu();I!==t||q!==a?(Co=null,wo=Jt()+500,Xe(t,a)):Ie=Ii(t,a);t:do try{if(R!==0&&U!==null){a=U;var n=Xt;a:switch(R){case 1:R=0,Xt=null,He(t,a,n,1);break;case 2:case 9:if(jc(n)){R=0,Xt=null,$c(a);break}a=function(){R!==2&&R!==9||I!==t||(R=7),Aa(t)},n.then(a,a);break t;case 3:R=7;break t;case 4:R=5;break t;case 7:jc(n)?(R=0,Xt=null,$c(a)):(R=0,Xt=null,He(t,a,n,7));break;case 5:var o=null;switch(U.tag){case 26:o=U.memoizedState;case 5:case 27:var l=U;if(o?es(o):l.stateNode.complete){R=0,Xt=null;var c=l.sibling;if(c!==null)U=c;else{var s=l.return;s!==null?(U=s,Ro(s)):U=null}break a}}R=0,Xt=null,He(t,a,n,5);break;case 6:R=0,Xt=null,He(t,a,n,6);break;case 8:F1(),dt=6;break t;default:throw Error(M(462))}}d5();break}catch(v){zu(t,v)}while(!0);return Xa=ee=null,A.H=e,A.A=i,X=r,U!==null?0:(I=null,q=0,Oo(),dt)}function d5(){for(;U!==null&&!A4();)Nu(U)}function Nu(t){var a=hu(t.alternate,t,Pa);t.memoizedProps=t.pendingProps,a===null?Ro(t):U=a}function $c(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=Yc(r,a,a.pendingProps,a.type,void 0,q);break;case 11:a=Yc(r,a,a.pendingProps,a.type.render,a.ref,q);break;case 5:T1(a);default:uu(r,a),a=U=uh(a,Pa),a=hu(r,a,Pa)}t.memoizedProps=t.pendingProps,a===null?Ro(t):U=a}function He(t,a,r,e){Xa=ee=null,T1(a),_e=null,qi=0;var i=a.return;try{if(Fp(t,i,a,r,q)){dt=1,Mo(t,ga(r,t.current)),U=null;return}}catch(n){if(i!==null)throw U=i,n;dt=1,Mo(t,ga(r,t.current)),U=null;return}a.flags&32768?(G||e===1?t=!0:Ie||(q&536870912)!==0?t=!1:(kr=t=!0,(e===2||e===9||e===3||e===6)&&(e=ta.current,e!==null&&e.tag===13&&(e.flags|=16384))),Du(a,t)):Ro(a)}function Ro(t){var a=t;do{if((a.flags&32768)!==0){Du(a,kr);return}t=a.return;var r=Pp(a.alternate,a,Pa);if(r!==null){U=r;return}if(a=a.sibling,a!==null){U=a;return}U=a=t}while(a!==null);dt===0&&(dt=5)}function Du(t,a){do{var r=t5(t.alternate,t);if(r!==null){r.flags&=32767,U=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){U=t;return}U=t=r}while(t!==null);dt=6,U=null}function Ic(t,a,r,e,i,n,o,l,c){t.cancelPendingCommit=null;do Jo();while(vt!==0);if((X&6)!==0)throw Error(M(327));if(a!==null){if(a===t.current)throw Error(M(177));if(n=a.lanes|a.childLanes,n|=m1,Z4(t,r,n,o,l,c),t===I&&(U=I=null,q=0),Ye=a,Br=t,Ra=r,Jl=n,Fl=i,Su=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,s5(co,function(){return Gu(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=A.T,A.T=null,i=Q.p,Q.p=2,o=X,X|=4;try{a5(t,a,r)}finally{X=o,Q.p=i,A.T=e}}vt=1,Ou(),Uu(),Zu()}}function Ou(){if(vt===1){vt=0;var t=Br,a=Ye,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=A.T,A.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{yu(a,t);var n=a1,o=eh(t.containerInfo),l=n.focusedElem,c=n.selectionRange;if(o!==l&&l&&l.ownerDocument&&rh(l.ownerDocument.documentElement,l)){if(c!==null&&M1(l)){var s=c.start,v=c.end;if(v===void 0&&(v=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(v,l.value.length);else{var x=l.ownerDocument||document,p=x&&x.defaultView||window;if(p.getSelection){var k=p.getSelection(),y=l.textContent.length,C=Math.min(c.start,y),E=c.end===void 0?C:Math.min(c.end,y);!k.extend&&C>E&&(o=E,E=C,C=o);var g=Mc(l,C),u=Mc(l,E);if(g&&u&&(k.rangeCount!==1||k.anchorNode!==g.node||k.anchorOffset!==g.offset||k.focusNode!==u.node||k.focusOffset!==u.offset)){var f=x.createRange();f.setStart(g.node,g.offset),k.removeAllRanges(),C>E?(k.addRange(f),k.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),k.addRange(f))}}}}for(x=[],k=l;k=k.parentNode;)k.nodeType===1&&x.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<x.length;l++){var L=x[l];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}zo=!!t1,a1=t1=null}finally{X=i,Q.p=e,A.T=r}}t.current=a,vt=2}}function Uu(){if(vt===2){vt=0;var t=Br,a=Ye,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=A.T,A.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{ku(t,a.alternate,a)}finally{X=i,Q.p=e,A.T=r}}vt=3}}function Zu(){if(vt===4||vt===3){vt=0,V4();var t=Br,a=Ye,r=Ra,e=Su;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?vt=5:(vt=0,Ye=Br=null,qu(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Cr=null),g1(r),a=a.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot($i,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=A.T,i=Q.p,Q.p=2,A.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var l=e[o];n(l.value,{componentStack:l.stack})}}finally{A.T=a,Q.p=i}}(Ra&3)!==0&&Jo(),Aa(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===$l?_i++:(_i=0,$l=t):_i=0,on(0,!1)}}function qu(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,rn(a)))}function Jo(){return Ou(),Uu(),Zu(),Gu()}function Gu(){if(vt!==5)return!1;var t=Br,a=Jl;Jl=0;var r=g1(Ra),e=A.T,i=Q.p;try{Q.p=32>r?32:r,A.T=null,r=Fl,Fl=null;var n=Br,o=Ra;if(vt=0,Ye=Br=null,Ra=0,(X&6)!==0)throw Error(M(331));var l=X;if(X|=4,ju(n.current),Cu(n,n.current,o,r),X=l,on(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot($i,n)}catch{}return!0}finally{Q.p=i,A.T=e,qu(t,a)}}function Pc(t,a,r){a=ga(r,a),a=Yl(t.stateNode,a,2),t=wr(t,a,2),t!==null&&(Pi(t,2),Aa(t))}function J(t,a,r){if(t.tag===3)Pc(t,t,r);else for(;a!==null;){if(a.tag===3){Pc(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Cr===null||!Cr.has(e))){t=ga(r,t),r=iu(2),e=wr(a,r,2),e!==null&&(nu(r,e,a,t),Pi(e,2),Aa(e));break}}a=a.return}}function dl(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new i5;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(R1=!0,i.add(r),t=c5.bind(null,t,a,r),a.then(t,t))}function c5(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,I===t&&(q&r)===r&&(dt===4||dt===3&&(q&62914560)===q&&300>Jt()-Qo?(X&2)===0&&Xe(t,0):J1|=r,Ge===q&&(Ge=0)),Aa(t)}function Yu(t,a){a===0&&(a=T0()),t=re(t,a),t!==null&&(Pi(t,a),Aa(t))}function h5(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),Yu(t,r)}function u5(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(M(314))}e!==null&&e.delete(a),Yu(t,r)}function s5(t,a){return u1(t,a)}var bo=null,ke=null,Il=!1,jo=!1,cl=!1,Lr=0;function Aa(t){t!==ke&&t.next===null&&(ke===null?bo=ke=t:ke=ke.next=t),jo=!0,Il||(Il=!0,p5())}function on(t,a){if(!cl&&jo){cl=!0;do for(var r=!1,e=bo;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,l=e.pingedLanes;n=(1<<31-$t(42|t)+1)-1,n&=i&~(o&~l),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,t0(e,n))}else n=q,n=To(e,e===I?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||Ii(e,n)||(r=!0,t0(e,n));e=e.next}while(r);cl=!1}}function g5(){Xu()}function Xu(){jo=Il=!1;var t=0;Lr!==0&&y5()&&(t=Lr);for(var a=Jt(),r=null,e=bo;e!==null;){var i=e.next,n=Qu(e,a);n===0?(e.next=null,r===null?bo=i:r.next=i,i===null&&(ke=r)):(r=e,(t!==0||(n&3)!==0)&&(jo=!0)),e=i}vt!==0&&vt!==5||on(t,!1),Lr!==0&&(Lr=0)}function Qu(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-$t(n),l=1<<o,c=i[o];c===-1?((l&r)===0||(l&e)!==0)&&(i[o]=U4(l,a)):c<=a&&(t.expiredLanes|=l),n&=~l}if(a=I,r=q,r=To(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(R===2||R===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&D2(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ii(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&D2(e),g1(r)){case 2:case 8:r=z0;break;case 32:r=co;break;case 268435456:r=_0;break;default:r=co}return e=Ku.bind(null,t),r=u1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&D2(e),t.callbackPriority=2,t.callbackNode=null,2}function Ku(t,a){if(vt!==0&&vt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Jo()&&t.callbackNode!==r)return null;var e=q;return e=To(t,t===I?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(Vu(t,e,a),Qu(t,Jt()),t.callbackNode!=null&&t.callbackNode===r?Ku.bind(null,t):null)}function t0(t,a){if(Jo())return null;Vu(t,a,!0)}function p5(){C5(function(){(X&6)!==0?u1(V0,g5):Xu()})}function $1(){if(Lr===0){var t=Ue;t===0&&(t=jn,jn<<=1,(jn&261888)===0&&(jn=256)),Lr=t}return Lr}function a0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xn(""+t)}function r0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function f5(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=a0((i[Zt]||null).action),o=e.submitter;o&&(a=(a=o[Zt]||null)?a0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var l=new Eo("action","action",null,e,i);t.push({event:l,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Lr!==0){var c=o?r0(i,o):new FormData(i);ql(r,{pending:!0,data:c,method:i.method,action:n},null,c)}}else typeof n=="function"&&(l.preventDefault(),c=o?r0(i,o):new FormData(i),ql(r,{pending:!0,data:c,method:i.method,action:n},n,c))},currentTarget:i}]})}}for(On=0;On<Sl.length;On++)Un=Sl[On],e0=Un.toLowerCase(),i0=Un[0].toUpperCase()+Un.slice(1),ya(e0,"on"+i0);var Un,e0,i0,On;ya(nh,"onAnimationEnd");ya(oh,"onAnimationIteration");ya(lh,"onAnimationStart");ya("dblclick","onDoubleClick");ya("focusin","onFocus");ya("focusout","onBlur");ya(zp,"onTransitionRun");ya(_p,"onTransitionStart");ya(Tp,"onTransitionCancel");ya(dh,"onTransitionEnd");De("onMouseEnter",["mouseout","mouseover"]);De("onMouseLeave",["mouseout","mouseover"]);De("onPointerEnter",["pointerout","pointerover"]);De("onPointerLeave",["pointerout","pointerover"]);Pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xi));function Ru(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var l=e[o],c=l.instance,s=l.currentTarget;if(l=l.listener,c!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){uo(v)}i.currentTarget=null,n=c}else for(o=0;o<e.length;o++){if(l=e[o],c=l.instance,s=l.currentTarget,l=l.listener,c!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){uo(v)}i.currentTarget=null,n=c}}}}function O(t,a){var r=a[yl];r===void 0&&(r=a[yl]=new Set);var e=t+"__bubble";r.has(e)||(Ju(a,t,2,!1),r.add(e))}function hl(t,a,r){var e=0;a&&(e|=4),Ju(r,t,e,a)}var Zn="_reactListening"+Math.random().toString(36).slice(2);function I1(t){if(!t[Zn]){t[Zn]=!0,U0.forEach(function(r){r!=="selectionchange"&&(v5.has(r)||hl(r,!1,t),hl(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Zn]||(a[Zn]=!0,hl("selectionchange",!1,a))}}function Ju(t,a,r,e){switch(ds(a)){case 2:var i=Y5;break;case 8:i=X5;break;default:i=rd}r=i.bind(null,a,r,t),i=void 0,!jl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function ul(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var l=e.stateNode.containerInfo;if(l===i)break;if(o===4)for(o=e.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;l!==null;){if(o=Me(l),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){e=n=o;continue t}l=l.parentNode}}e=e.return}R0(function(){var s=n,v=v1(r),x=[];t:{var p=ch.get(t);if(p!==void 0){var k=Eo,y=t;switch(t){case"keypress":if(Kn(r)===0)break t;case"keydown":case"keyup":k=up;break;case"focusin":y="focus",k=G2;break;case"focusout":y="blur",k=G2;break;case"beforeblur":case"afterblur":k=G2;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=P4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=pp;break;case nh:case oh:case lh:k=rp;break;case dh:k=vp;break;case"scroll":case"scrollend":k=$4;break;case"wheel":k=xp;break;case"copy":case"cut":case"paste":k=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=gc;break;case"toggle":case"beforetoggle":k=Mp}var C=(a&4)!==0,E=!C&&(t==="scroll"||t==="scrollend"),g=C?p!==null?p+"Capture":null:p;C=[];for(var u=s,f;u!==null;){var L=u;if(f=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||f===null||g===null||(L=Ni(u,g),L!=null&&C.push(Qi(u,L,f))),E)break;u=u.return}0<C.length&&(p=new k(p,y,null,r,v),x.push({event:p,listeners:C}))}}if((a&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",p&&r!==bl&&(y=r.relatedTarget||r.fromElement)&&(Me(y)||y[Re]))break t;if((k||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,k?(y=r.relatedTarget||r.toElement,k=s,y=y?Me(y):null,y!==null&&(E=Fi(y),C=y.tag,y!==E||C!==5&&C!==27&&C!==6)&&(y=null)):(k=null,y=s),k!==y)){if(C=uc,L="onMouseLeave",g="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(C=gc,L="onPointerLeave",g="onPointerEnter",u="pointer"),E=k==null?p:Mi(k),f=y==null?p:Mi(y),p=new C(L,u+"leave",k,r,v),p.target=E,p.relatedTarget=f,L=null,Me(v)===s&&(C=new C(g,u+"enter",y,r,v),C.target=f,C.relatedTarget=E,L=C),E=L,k&&y)a:{for(C=k5,g=k,u=y,f=0,L=g;L;L=C(L))f++;L=0;for(var W=u;W;W=C(W))L++;for(;0<f-L;)g=C(g),f--;for(;0<L-f;)u=C(u),L--;for(;f--;){if(g===u||u!==null&&g===u.alternate){C=g;break a}g=C(g),u=C(u)}C=null}else C=null;k!==null&&n0(x,p,k,C,!1),y!==null&&E!==null&&n0(x,E,y,C,!0)}}t:{if(p=s?Mi(s):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var V=kc;else if(vc(p))if(th)V=Sp;else{V=Wp;var w=jp}else k=p.nodeName,!k||k.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?s&&f1(s.elementType)&&(V=kc):V=Hp;if(V&&(V=V(t,s))){P0(x,V,r,v);break t}w&&w(t,p,s),t==="focusout"&&s&&p.type==="number"&&s.memoizedProps.value!=null&&Bl(p,"number",p.value)}switch(w=s?Mi(s):window,t){case"focusin":(vc(w)||w.contentEditable==="true")&&(we=w,Wl=s,Bi=null);break;case"focusout":Bi=Wl=we=null;break;case"mousedown":Hl=!0;break;case"contextmenu":case"mouseup":case"dragend":Hl=!1,mc(x,r,v);break;case"selectionchange":if(Vp)break;case"keydown":case"keyup":mc(x,r,v)}var H;if(L1)t:{switch(t){case"compositionstart":var _="onCompositionStart";break t;case"compositionend":_="onCompositionEnd";break t;case"compositionupdate":_="onCompositionUpdate";break t}_=void 0}else ye?$0(t,r)&&(_="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(_="onCompositionStart");_&&(F0&&r.locale!=="ko"&&(ye||_!=="onCompositionStart"?_==="onCompositionEnd"&&ye&&(H=J0()):(vr=v,k1="value"in vr?vr.value:vr.textContent,ye=!0)),w=Wo(s,_),0<w.length&&(_=new sc(_,t,null,r,v),x.push({event:_,listeners:w}),H?_.data=H:(H=I0(r),H!==null&&(_.data=H)))),(H=yp?wp(t,r):Cp(t,r))&&(_=Wo(s,"onBeforeInput"),0<_.length&&(w=new sc("onBeforeInput","beforeinput",null,r,v),x.push({event:w,listeners:_}),w.data=H)),f5(x,t,s,r,v)}Ru(x,a)})}function Qi(t,a,r){return{instance:t,listener:a,currentTarget:r}}function Wo(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Ni(t,r),i!=null&&e.unshift(Qi(t,i,n)),i=Ni(t,a),i!=null&&e.push(Qi(t,i,n))),t.tag===3)return e;t=t.return}return[]}function k5(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function n0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var l=r,c=l.alternate,s=l.stateNode;if(l=l.tag,c!==null&&c===e)break;l!==5&&l!==26&&l!==27||s===null||(c=s,i?(s=Ni(r,n),s!=null&&o.unshift(Qi(r,s,c))):i||(s=Ni(r,n),s!=null&&o.push(Qi(r,s,c)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var x5=/\r\n?/g,L5=/\u0000|\uFFFD/g;function o0(t){return(typeof t=="string"?t:""+t).replace(x5,`
`).replace(L5,"")}function Fu(t,a){return a=o0(a),o0(t)===a}function F(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||Oe(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&Oe(t,""+e);break;case"className":Sn(t,"class",e);break;case"tabIndex":Sn(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Sn(t,r,e);break;case"style":K0(t,e,n);break;case"data":if(a!=="object"){Sn(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=Xn(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&F(t,a,"name",i.name,i,null),F(t,a,"formEncType",i.formEncType,i,null),F(t,a,"formMethod",i.formMethod,i,null),F(t,a,"formTarget",i.formTarget,i,null)):(F(t,a,"encType",i.encType,i,null),F(t,a,"method",i.method,i,null),F(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=Xn(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=Ya);break;case"onScroll":e!=null&&O("scroll",t);break;case"onScrollEnd":e!=null&&O("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(M(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(M(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=Xn(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":O("beforetoggle",t),O("toggle",t),Yn(t,"popover",e);break;case"xlinkActuate":Ea(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Ea(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Ea(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Ea(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Ea(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Ea(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Ea(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Ea(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Ea(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Yn(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=J4.get(r)||r,Yn(t,r,e))}}function Pl(t,a,r,e,i,n){switch(r){case"style":K0(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(M(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(M(60));t.innerHTML=r}}break;case"children":typeof e=="string"?Oe(t,e):(typeof e=="number"||typeof e=="bigint")&&Oe(t,""+e);break;case"onScroll":e!=null&&O("scroll",t);break;case"onScrollEnd":e!=null&&O("scrollend",t);break;case"onClick":e!=null&&(t.onclick=Ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Z0.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[Zt]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):Yn(t,r,e)}}}function Wt(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":O("error",t),O("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(M(137,a));default:F(t,a,n,o,r,null)}}i&&F(t,a,"srcSet",r.srcSet,r,null),e&&F(t,a,"src",r.src,r,null);return;case"input":O("invalid",t);var l=n=o=i=null,c=null,s=null;for(e in r)if(r.hasOwnProperty(e)){var v=r[e];if(v!=null)switch(e){case"name":i=v;break;case"type":o=v;break;case"checked":c=v;break;case"defaultChecked":s=v;break;case"value":n=v;break;case"defaultValue":l=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(M(137,a));break;default:F(t,a,e,v,r,null)}}Y0(t,n,l,c,s,o,i,!1);return;case"select":O("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(l=r[i],l!=null))switch(i){case"value":n=l;break;case"defaultValue":o=l;break;case"multiple":e=l;default:F(t,a,i,l,r,null)}a=n,r=o,t.multiple=!!e,a!=null?Ae(t,!!e,a,!1):r!=null&&Ae(t,!!e,r,!0);return;case"textarea":O("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(l=r[o],l!=null))switch(o){case"value":e=l;break;case"defaultValue":i=l;break;case"children":n=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(M(91));break;default:F(t,a,o,l,r,null)}Q0(t,e,i,n);return;case"option":for(c in r)r.hasOwnProperty(c)&&(e=r[c],e!=null)&&(c==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":F(t,a,c,e,r,null));return;case"dialog":O("beforetoggle",t),O("toggle",t),O("cancel",t),O("close",t);break;case"iframe":case"object":O("load",t);break;case"video":case"audio":for(e=0;e<Xi.length;e++)O(Xi[e],t);break;case"image":O("error",t),O("load",t);break;case"details":O("toggle",t);break;case"embed":case"source":case"link":O("error",t),O("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(s in r)if(r.hasOwnProperty(s)&&(e=r[s],e!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(M(137,a));default:F(t,a,s,e,r,null)}return;default:if(f1(a)){for(v in r)r.hasOwnProperty(v)&&(e=r[v],e!==void 0&&Pl(t,a,v,e,r,void 0));return}}for(l in r)r.hasOwnProperty(l)&&(e=r[l],e!=null&&F(t,a,l,e,r,null))}function M5(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,l=null,c=null,s=null,v=null;for(k in r){var x=r[k];if(r.hasOwnProperty(k)&&x!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":c=x;default:e.hasOwnProperty(k)||F(t,a,k,null,e,x)}}for(var p in e){var k=e[p];if(x=r[p],e.hasOwnProperty(p)&&(k!=null||x!=null))switch(p){case"type":n=k;break;case"name":i=k;break;case"checked":s=k;break;case"defaultChecked":v=k;break;case"value":o=k;break;case"defaultValue":l=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(M(137,a));break;default:k!==x&&F(t,a,p,k,e,x)}}Cl(t,o,l,c,s,v,n,i);return;case"select":k=o=l=p=null;for(n in r)if(c=r[n],r.hasOwnProperty(n)&&c!=null)switch(n){case"value":break;case"multiple":k=c;default:e.hasOwnProperty(n)||F(t,a,n,null,e,c)}for(i in e)if(n=e[i],c=r[i],e.hasOwnProperty(i)&&(n!=null||c!=null))switch(i){case"value":p=n;break;case"defaultValue":l=n;break;case"multiple":o=n;default:n!==c&&F(t,a,i,n,e,c)}a=l,r=o,e=k,p!=null?Ae(t,!!r,p,!1):!!e!=!!r&&(a!=null?Ae(t,!!r,a,!0):Ae(t,!!r,r?[]:"",!1));return;case"textarea":k=p=null;for(l in r)if(i=r[l],r.hasOwnProperty(l)&&i!=null&&!e.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:F(t,a,l,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":p=i;break;case"defaultValue":k=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(M(91));break;default:i!==n&&F(t,a,o,i,e,n)}X0(t,p,k);return;case"option":for(var y in r)p=r[y],r.hasOwnProperty(y)&&p!=null&&!e.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:F(t,a,y,null,e,p));for(c in e)p=e[c],k=r[c],e.hasOwnProperty(c)&&p!==k&&(p!=null||k!=null)&&(c==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":F(t,a,c,p,e,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var C in r)p=r[C],r.hasOwnProperty(C)&&p!=null&&!e.hasOwnProperty(C)&&F(t,a,C,null,e,p);for(s in e)if(p=e[s],k=r[s],e.hasOwnProperty(s)&&p!==k&&(p!=null||k!=null))switch(s){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(M(137,a));break;default:F(t,a,s,p,e,k)}return;default:if(f1(a)){for(var E in r)p=r[E],r.hasOwnProperty(E)&&p!==void 0&&!e.hasOwnProperty(E)&&Pl(t,a,E,void 0,e,p);for(v in e)p=e[v],k=r[v],!e.hasOwnProperty(v)||p===k||p===void 0&&k===void 0||Pl(t,a,v,p,e,k);return}}for(var g in r)p=r[g],r.hasOwnProperty(g)&&p!=null&&!e.hasOwnProperty(g)&&F(t,a,g,null,e,p);for(x in e)p=e[x],k=r[x],!e.hasOwnProperty(x)||p===k||p==null&&k==null||F(t,a,x,p,e,k)}function l0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function m5(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,l=i.duration;if(n&&l&&l0(o)){for(o=0,l=i.responseEnd,e+=1;e<r.length;e++){var c=r[e],s=c.startTime;if(s>l)break;var v=c.transferSize,x=c.initiatorType;v&&l0(x)&&(c=c.responseEnd,o+=v*(c<l?1:(l-s)/(c-s)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var t1=null,a1=null;function Ho(t){return t.nodeType===9?t:t.ownerDocument}function d0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $u(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function r1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var sl=null;function y5(){var t=window.event;return t&&t.type==="popstate"?t===sl?!1:(sl=t,!0):(sl=null,!1)}var Iu=typeof setTimeout=="function"?setTimeout:void 0,w5=typeof clearTimeout=="function"?clearTimeout:void 0,c0=typeof Promise=="function"?Promise:void 0,C5=typeof queueMicrotask=="function"?queueMicrotask:typeof c0<"u"?function(t){return c0.resolve(null).then(t).catch(B5)}:Iu;function B5(t){setTimeout(function(){throw t})}function _r(t){return t==="head"}function h0(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),Ke(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")Ti(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Ti(r);for(var n=r.firstChild;n;){var o=n.nextSibling,l=n.nodeName;n[tn]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&Ti(t.ownerDocument.body);r=i}while(r);Ke(a)}function u0(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function e1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":e1(r),p1(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function b5(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[tn])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=va(t.nextSibling),t===null)break}return null}function j5(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=va(t.nextSibling),t===null))return null;return t}function Pu(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=va(t.nextSibling),t===null))return null;return t}function i1(t){return t.data==="$?"||t.data==="$~"}function n1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function W5(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function va(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var o1=null;function s0(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return va(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function g0(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function ts(t,a,r){switch(a=Ho(r),t){case"html":if(t=a.documentElement,!t)throw Error(M(452));return t;case"head":if(t=a.head,!t)throw Error(M(453));return t;case"body":if(t=a.body,!t)throw Error(M(454));return t;default:throw Error(M(451))}}function Ti(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);p1(t)}var ka=new Map,p0=new Set;function So(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var tr=Q.d;Q.d={f:H5,r:S5,D:A5,C:V5,L:z5,m:_5,X:E5,S:T5,M:N5};function H5(){var t=tr.f(),a=Ko();return t||a}function S5(t){var a=Je(t);a!==null&&a.tag===5&&a.type==="form"?Kh(a):tr.r(t)}var Pe=typeof document>"u"?null:document;function as(t,a,r){var e=Pe;if(e&&typeof a=="string"&&a){var i=sa(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),p0.has(i)||(p0.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),Wt(a,"link",t),Mt(a),e.head.appendChild(a)))}}function A5(t){tr.D(t),as("dns-prefetch",t,null)}function V5(t,a){tr.C(t,a),as("preconnect",t,a)}function z5(t,a,r){tr.L(t,a,r);var e=Pe;if(e&&t&&a){var i='link[rel="preload"][as="'+sa(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+sa(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+sa(r.imageSizes)+'"]')):i+='[href="'+sa(t)+'"]';var n=i;switch(a){case"style":n=Qe(t);break;case"script":n=ti(t)}ka.has(n)||(t=et({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),ka.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(ln(n))||a==="script"&&e.querySelector(dn(n))||(a=e.createElement("link"),Wt(a,"link",t),Mt(a),e.head.appendChild(a)))}}function _5(t,a){tr.m(t,a);var r=Pe;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+sa(e)+'"][href="'+sa(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=ti(t)}if(!ka.has(n)&&(t=et({rel:"modulepreload",href:t},a),ka.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(dn(n)))return}e=r.createElement("link"),Wt(e,"link",t),Mt(e),r.head.appendChild(e)}}}function T5(t,a,r){tr.S(t,a,r);var e=Pe;if(e&&t){var i=Se(e).hoistableStyles,n=Qe(t);a=a||"default";var o=i.get(n);if(!o){var l={loading:0,preload:null};if(o=e.querySelector(ln(n)))l.loading=5;else{t=et({rel:"stylesheet",href:t,"data-precedence":a},r),(r=ka.get(n))&&P1(t,r);var c=o=e.createElement("link");Mt(c),Wt(c,"link",t),c._p=new Promise(function(s,v){c.onload=s,c.onerror=v}),c.addEventListener("load",function(){l.loading|=1}),c.addEventListener("error",function(){l.loading|=2}),l.loading|=4,ao(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:l},i.set(n,o)}}}function E5(t,a){tr.X(t,a);var r=Pe;if(r&&t){var e=Se(r).hoistableScripts,i=ti(t),n=e.get(i);n||(n=r.querySelector(dn(i)),n||(t=et({src:t,async:!0},a),(a=ka.get(i))&&td(t,a),n=r.createElement("script"),Mt(n),Wt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function N5(t,a){tr.M(t,a);var r=Pe;if(r&&t){var e=Se(r).hoistableScripts,i=ti(t),n=e.get(i);n||(n=r.querySelector(dn(i)),n||(t=et({src:t,async:!0,type:"module"},a),(a=ka.get(i))&&td(t,a),n=r.createElement("script"),Mt(n),Wt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function f0(t,a,r,e){var i=(i=Mr.current)?So(i):null;if(!i)throw Error(M(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=Qe(r.href),r=Se(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Qe(r.href);var n=Se(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(ln(t)))&&!n._p&&(o.instance=n,o.state.loading=5),ka.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ka.set(t,r),n||D5(i,t,r,o.state))),a&&e===null)throw Error(M(528,""));return o}if(a&&e!==null)throw Error(M(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ti(r),r=Se(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(M(444,t))}}function Qe(t){return'href="'+sa(t)+'"'}function ln(t){return'link[rel="stylesheet"]['+t+"]"}function rs(t){return et({},t,{"data-precedence":t.precedence,precedence:null})}function D5(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),Wt(a,"link",r),Mt(a),t.head.appendChild(a))}function ti(t){return'[src="'+sa(t)+'"]'}function dn(t){return"script[async]"+t}function v0(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+sa(r.href)+'"]');if(e)return a.instance=e,Mt(e),e;var i=et({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Mt(e),Wt(e,"style",i),ao(e,r.precedence,t),a.instance=e;case"stylesheet":i=Qe(r.href);var n=t.querySelector(ln(i));if(n)return a.state.loading|=4,a.instance=n,Mt(n),n;e=rs(r),(i=ka.get(i))&&P1(e,i),n=(t.ownerDocument||t).createElement("link"),Mt(n);var o=n;return o._p=new Promise(function(l,c){o.onload=l,o.onerror=c}),Wt(n,"link",e),a.state.loading|=4,ao(n,r.precedence,t),a.instance=n;case"script":return n=ti(r.src),(i=t.querySelector(dn(n)))?(a.instance=i,Mt(i),i):(e=r,(i=ka.get(n))&&(e=et({},r),td(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),Mt(i),Wt(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(M(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,ao(e,r.precedence,t));return a.instance}function ao(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var l=e[o];if(l.dataset.precedence===a)n=l;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function P1(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function td(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var ro=null;function k0(t,a,r){if(ro===null){var e=new Map,i=ro=new Map;i.set(r,e)}else i=ro,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[tn]||n[Bt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var l=e.get(o);l?l.push(n):e.set(o,[n])}}return e}function x0(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function O5(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function es(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function U5(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=Qe(e.href),n=a.querySelector(ln(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Ao.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,Mt(n);return}n=a.ownerDocument||a,e=rs(e),(i=ka.get(i))&&P1(e,i),n=n.createElement("link"),Mt(n);var o=n;o._p=new Promise(function(l,c){o.onload=l,o.onerror=c}),Wt(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Ao.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var gl=0;function Z5(t,a){return t.stylesheets&&t.count===0&&eo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&eo(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&gl===0&&(gl=62500*m5());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&eo(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>gl?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function Ao(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vo=null;function eo(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vo=new Map,a.forEach(q5,t),Vo=null,Ao.call(t))}function q5(t,a){if(!(a.state.loading&4)){var r=Vo.get(t);if(r)var e=r.get(null);else{r=new Map,Vo.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=Ao.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var Ki={$$typeof:Ga,Provider:null,Consumer:null,_currentValue:Gr,_currentValue2:Gr,_threadCount:0};function G5(t,a,r,e,i,n,o,l,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=O2(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=O2(0),this.hiddenUpdates=O2(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function is(t,a,r,e,i,n,o,l,c,s,v,x){return t=new G5(t,a,r,o,c,s,v,x,l),a=1,n===!0&&(a|=24),n=Kt(3,null,null,a),t.current=n,n.stateNode=t,a=b1(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},H1(n),t}function ns(t){return t?(t=be,t):be}function os(t,a,r,e,i,n){i=ns(i),e.context===null?e.context=i:e.pendingContext=i,e=yr(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=wr(t,e,a),r!==null&&(Ut(r,t,a),ji(r,t,a))}function L0(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function ad(t,a){L0(t,a),(t=t.alternate)&&L0(t,a)}function ls(t){if(t.tag===13||t.tag===31){var a=re(t,67108864);a!==null&&Ut(a,t,67108864),ad(t,67108864)}}function M0(t){if(t.tag===13||t.tag===31){var a=It();a=s1(a);var r=re(t,a);r!==null&&Ut(r,t,a),ad(t,a)}}var zo=!0;function Y5(t,a,r,e){var i=A.T;A.T=null;var n=Q.p;try{Q.p=2,rd(t,a,r,e)}finally{Q.p=n,A.T=i}}function X5(t,a,r,e){var i=A.T;A.T=null;var n=Q.p;try{Q.p=8,rd(t,a,r,e)}finally{Q.p=n,A.T=i}}function rd(t,a,r,e){if(zo){var i=l1(e);if(i===null)ul(t,a,e,_o,r),m0(t,e);else if(K5(i,t,a,r,e))e.stopPropagation();else if(m0(t,e),a&4&&-1<Q5.indexOf(t)){for(;i!==null;){var n=Je(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=Ur(n.pendingLanes);if(o!==0){var l=n;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var c=1<<31-$t(o);l.entanglements[1]|=c,o&=~c}Aa(n),(X&6)===0&&(wo=Jt()+500,on(0,!1))}}break;case 31:case 13:l=re(n,2),l!==null&&Ut(l,n,2),Ko(),ad(n,2)}if(n=l1(e),n===null&&ul(t,a,e,_o,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else ul(t,a,e,null,r)}}function l1(t){return t=v1(t),ed(t)}var _o=null;function ed(t){if(_o=null,t=Me(t),t!==null){var a=Fi(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=j0(a),t!==null)return t;t=null}else if(r===31){if(t=W0(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return _o=t,null}function ds(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z4()){case V0:return 2;case z0:return 8;case co:case _4:return 32;case _0:return 268435456;default:return 32}default:return 32}}var d1=!1,br=null,jr=null,Wr=null,Ri=new Map,Ji=new Map,pr=[],Q5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m0(t,a){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Wr=null;break;case"pointerover":case"pointerout":Ri.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(a.pointerId)}}function vi(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=Je(a),a!==null&&ls(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function K5(t,a,r,e,i){switch(a){case"focusin":return br=vi(br,t,a,r,e,i),!0;case"dragenter":return jr=vi(jr,t,a,r,e,i),!0;case"mouseover":return Wr=vi(Wr,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return Ri.set(n,vi(Ri.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,Ji.set(n,vi(Ji.get(n)||null,t,a,r,e,i)),!0}return!1}function cs(t){var a=Me(t.target);if(a!==null){var r=Fi(a);if(r!==null){if(a=r.tag,a===13){if(a=j0(r),a!==null){t.blockedOn=a,ic(t.priority,function(){M0(r)});return}}else if(a===31){if(a=W0(r),a!==null){t.blockedOn=a,ic(t.priority,function(){M0(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function io(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=l1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);bl=e,r.target.dispatchEvent(e),bl=null}else return a=Je(r),a!==null&&ls(a),t.blockedOn=r,!1;a.shift()}return!0}function y0(t,a,r){io(t)&&r.delete(a)}function R5(){d1=!1,br!==null&&io(br)&&(br=null),jr!==null&&io(jr)&&(jr=null),Wr!==null&&io(Wr)&&(Wr=null),Ri.forEach(y0),Ji.forEach(y0)}function qn(t,a){t.blockedOn===a&&(t.blockedOn=null,d1||(d1=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,R5)))}var Gn=null;function w0(t){Gn!==t&&(Gn=t,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,function(){Gn===t&&(Gn=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(ed(e||r)===null)continue;break}var n=Je(r);n!==null&&(t.splice(a,3),a-=3,ql(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function Ke(t){function a(c){return qn(c,t)}br!==null&&qn(br,t),jr!==null&&qn(jr,t),Wr!==null&&qn(Wr,t),Ri.forEach(a),Ji.forEach(a);for(var r=0;r<pr.length;r++){var e=pr[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<pr.length&&(r=pr[0],r.blockedOn===null);)cs(r),r.blockedOn===null&&pr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[Zt]||null;if(typeof n=="function")o||w0(r);else if(o){var l=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[Zt]||null)l=o.formAction;else if(ed(i)!==null)continue}else l=o.action;typeof l=="function"?r[e+1]=l:(r.splice(e,3),e-=3),w0(r)}}}function hs(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function id(t){this._internalRoot=t}Fo.prototype.render=id.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(M(409));var r=a.current,e=It();os(r,e,t,a,null,null)};Fo.prototype.unmount=id.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;os(t.current,2,null,t,null,null),Ko(),a[Re]=null}};function Fo(t){this._internalRoot=t}Fo.prototype.unstable_scheduleHydration=function(t){if(t){var a=O0();t={blockedOn:null,target:t,priority:a};for(var r=0;r<pr.length&&a!==0&&a<pr[r].priority;r++);pr.splice(r,0,t),r===0&&cs(t)}};var C0=B0.version;if(C0!=="19.2.8")throw Error(M(527,C0,"19.2.8"));Q.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=b4(a),t=t!==null?H0(t):null,t=t===null?null:t.stateNode,t};var J5={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ki=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ki.isDisabled&&ki.supportsFiber))try{$i=ki.inject(J5),Ft=ki}catch{}var ki;$o.createRoot=function(t,a){if(!b0(t))throw Error(M(299));var r=!1,e="",i=au,n=ru,o=eu;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=is(t,1,!1,null,null,r,e,null,i,n,o,hs),t[Re]=a.current,I1(t),new id(a)};$o.hydrateRoot=function(t,a,r){if(!b0(t))throw Error(M(299));var e=!1,i="",n=au,o=ru,l=eu,c=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(l=r.onRecoverableError),r.formState!==void 0&&(c=r.formState)),a=is(t,1,!0,a,r??null,e,i,c,n,o,l,hs),a.context=ns(null),r=a.current,e=It(),e=s1(e),i=yr(e),i.callback=null,wr(r,i,e),r=e,a.current.lanes=r,Pi(a,r),Aa(a),t[Re]=a.current,I1(t),new Fo(a)};$o.version="19.2.8"});var ps=or((Hf,gs)=>{"use strict";function ss(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ss)}catch(t){console.error(t)}}ss(),gs.exports=us()});var xt=Nr(_a()),Ng=Nr(ps());var ai=Nr(_a(),1);var nd=Nr(_a(),1),od={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ld=nd.default.createContext&&nd.default.createContext(od);var F5=["attr","size","title"];function $5(t,a){if(t==null)return{};var r,e,i=I5(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function I5(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function Io(){return Io=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},Io.apply(null,arguments)}function fs(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function Po(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?fs(Object(r),!0).forEach(function(e){P5(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):fs(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function P5(t,a,r){return(a=tf(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function tf(t){var a=af(t,"string");return typeof a=="symbol"?a:a+""}function af(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function vs(t){return t&&t.map((a,r)=>ai.default.createElement(a.tag,Po({key:r},a.attr),vs(a.child)))}function Y(t){return a=>ai.default.createElement(rf,Io({attr:Po({},t.attr)},a),vs(t.child))}function rf(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=$5(t,F5),l=i||r.size||"1em",c;return r.className&&(c=r.className),t.className&&(c=(c?c+" ":"")+t.className),ai.default.createElement("svg",Io({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:c,style:Po(Po({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),n&&ai.default.createElement("title",null,n),t.children)};return ld!==void 0?ai.default.createElement(ld.Consumer,null,r=>a(r)):a(od)}function ks(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function xs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function Ls(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function Ms(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function ms(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function ys(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function ws(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function Cs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function Bs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function bs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function js(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function Ws(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function Hs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function Ss(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function As(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function Vs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function zs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function _s(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function Ts(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function Es(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function Ns(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function Ds(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function Os(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(t)}function Us(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function Zs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function qs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function Gs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function Ys(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 11-5-5-5 5"},child:[]},{tag:"path",attr:{d:"m17 18-5-5-5 5"},child:[]}]})(t)}function Xs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 6 5 5 5-5"},child:[]},{tag:"path",attr:{d:"m7 13 5 5 5-5"},child:[]}]})(t)}function Qs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function Ks(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function Rs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function Js(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var Fs=_s,t2=xs,dd=Vs,cd=As,$s=Es,Is=Ns,Ps=Cs,a2=Ls,tg=Us,ag=Ts,cn=js;var rg=qs,ri=Gs,hd=ms,eg=Zs,ig=ys,ng=Qs,og=Ks,lg=Ys,dg=Xs,r2=bs;var e2=ks,ud=zs,cg=Ss,hg=Ws,ug=Hs,i2=Js,sg=Bs,gg=Rs,pg=Ms,fg=ws,n2=Os,vg=Ds;var ut=Nr(_a());var b=Nr(_a());var kg={member:"會友",coworker:"同工",admin_staff:"行政",leader:"領袖",pastor:"牧師",admin:"管理員"},xg={member:a2,coworker:pg,admin_staff:Is,leader:fg,pastor:$s,admin:Ps},Lg=["leader","pastor","admin"],sd=[{id:"work",label:"工作日誌",Icon:Fs,href:"work.html",roles:["pastor","admin_staff","admin"]},{id:"serve",label:"服事管理",Icon:t2,href:""},{id:"venue",label:"場地預約",Icon:gg,href:""}],Mg=["pastor","admin_staff","admin"],mg=(t,a)=>!t.roles||t.roles.includes(a),ef=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},yg=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},wg=({active:t,shell:a})=>{let[r,e]=(0,b.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(y=>{let C=!y;try{localStorage.setItem("tbcSidebarCollapsed",C?"1":"0")}catch{}return C}),[n,o]=(0,b.useState)(!1),[l,c]=(0,b.useState)(""),s=(0,b.useRef)(null),v=a.identity||{name:"",role:"member",status:"loading"},x=xg[v.role]||a2,p=Lg.includes(v.role),k=y=>{c(`${y} 尚未開放`),clearTimeout(s.current),s.current=setTimeout(()=>c(""),2200)};return b.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},b.default.createElement("div",{className:"flex flex-col"},b.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},b.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},b.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},b.default.createElement(i2,{size:20,strokeWidth:2})),r&&b.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},b.default.createElement(cd,{size:18}))),!r&&b.default.createElement(b.default.Fragment,null,b.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),b.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},b.default.createElement(cd,{size:18})))),b.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},sd.map(y=>{let C=t===y.id,E=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${C?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,g=b.default.createElement(b.default.Fragment,null,b.default.createElement(y.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&b.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},y.label));return y.href?C?b.default.createElement("div",{key:y.id,className:E,title:y.label,"aria-current":"page"},g):b.default.createElement("a",{key:y.id,href:y.href,className:E,title:y.label},g):b.default.createElement("button",{key:y.id,type:"button",onClick:()=>k(y.label),className:E,title:y.label},g)}))),b.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},b.default.createElement("button",{type:"button",onClick:()=>o(y=>!y),"aria-haspopup":"menu","aria-expanded":n,title:`${v.name}（${kg[v.role]||v.role}）`,className:`tbc-sb-user flex items-center rounded-full hover:bg-slate-100 transition-colors ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-12 w-full"}`},b.default.createElement(x,{size:20,strokeWidth:1.75,className:`shrink-0 ${p?"text-amber-500":"text-slate-500"}`}),!r&&b.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},v.name)),n&&b.default.createElement(b.default.Fragment,null,b.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),b.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},b.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},b.default.createElement(dd,{size:18,strokeWidth:1.75}),"登出")))),l&&b.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},l))},Cg=({supabase:t,notice:a})=>{let[r,e]=(0,b.useState)(!1),[i,n]=(0,b.useState)(""),[o,l]=(0,b.useState)(""),[c,s]=(0,b.useState)(!1),[v,x]=(0,b.useState)(""),p=async y=>{if(y.preventDefault(),!i.trim()||!o||c)return;s(!0),x("");let{error:C}=await t.auth.signInWithPassword({email:ef(i),password:o});s(!1),C&&x("帳號或密碼不正確，請再試一次")},k="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return b.default.createElement("form",{onSubmit:p,className:"w-full max-w-sm mx-auto space-y-3"},b.default.createElement("input",{value:i,onChange:y=>n(y.target.value),placeholder:"帳號",autoComplete:"username",className:k}),b.default.createElement("div",{className:"relative"},b.default.createElement("input",{type:r?"text":"password",value:o,onChange:y=>l(y.target.value),placeholder:"密碼",autoComplete:"current-password",className:k+" pr-12"}),b.default.createElement("button",{type:"button",onClick:()=>e(y=>!y),title:r?"隱藏密碼":"顯示密碼","aria-label":r?"隱藏密碼":"顯示密碼",className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"},r?b.default.createElement(n2,{size:18}):b.default.createElement(vg,{size:18}))),(v||a)&&b.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},b.default.createElement(ri,{size:16}),v||a),b.default.createElement("button",{type:"submit",disabled:c||!i.trim()||!o,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},c?"登入中…":"登入"))},Bg=({shell:t,entries:a=[],onSoon:r})=>{let[e,i]=(0,b.useState)(!1),n=t.identity||{},o=xg[n.role]||a2,l=Lg.includes(n.role);return b.default.createElement("div",{className:"relative flex justify-center mt-14"},b.default.createElement("button",{type:"button",onClick:()=>i(c=>!c),"aria-haspopup":"menu","aria-expanded":e,title:`${n.name}（${kg[n.role]||n.role}）`,className:"tbc-user flex items-center gap-2.5 h-11 px-5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"},b.default.createElement(o,{size:20,strokeWidth:1.75,className:l?"text-amber-500":"text-slate-500"}),b.default.createElement("span",{className:"text-[15px] text-slate-900"},n.name)),e&&b.default.createElement(b.default.Fragment,null,b.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>i(!1)}),b.default.createElement("div",{role:"menu",className:"absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-48 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in"},b.default.createElement("p",{className:"px-3 pt-1 pb-1 text-xs text-slate-400"},"選擇功能"),a.map(c=>{let s="tbc-menu-entry w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors",v=b.default.createElement(b.default.Fragment,null,b.default.createElement(c.Icon,{size:18,strokeWidth:1.75}),c.label);return c.href?b.default.createElement("a",{key:c.id,role:"menuitem",href:c.href,className:s},v):b.default.createElement("button",{key:c.id,role:"menuitem",type:"button",onClick:()=>{i(!1),r&&r(c.label)},className:s},v)}),b.default.createElement("div",{className:"h-px bg-slate-100 my-1"}),b.default.createElement("button",{role:"menuitem",onClick:()=>{i(!1),t.onLogout()},className:"tbc-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},b.default.createElement(dd,{size:18,strokeWidth:1.75}),"登出"))))};var nf=({shell:t})=>{let[a,r]=(0,ut.useState)(""),e=(0,ut.useRef)(null),i=t.identity||{},n=sd.filter(l=>mg(l,i.role)),o=l=>{r(`${l} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return ut.default.createElement("div",{className:"relative h-[100dvh] w-full bg-white overflow-hidden"},ut.default.createElement("main",{className:"h-full overflow-auto custom-scrollbar"},ut.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},ut.default.createElement("div",{className:"text-center mb-14"},ut.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),ut.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),ut.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(l=>{let c=ut.default.createElement(ut.default.Fragment,null,ut.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},ut.default.createElement(l.Icon,{size:40,strokeWidth:1.75})),ut.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},l.label)),s="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return l.href?ut.default.createElement("a",{key:l.id,href:l.href,className:s},c):ut.default.createElement("button",{key:l.id,type:"button",onClick:()=>o(l.label),className:s},c)})),ut.default.createElement(Bg,{shell:t,entries:n,onSoon:o}))),a&&ut.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},bg=nf;var d=Nr(_a());var gd=["日","一","二","三","四","五","六"],jg={m:15,l:18},Wg=[{id:"title",label:"任務",locked:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"負責人",w:"minmax(104px,1fr)",min:104},{id:"status",label:"狀態",w:"150px",min:150},{id:"date",label:"日期",w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(150px,1fr)",min:150},{id:"hours",label:"工時",w:"84px",min:84},{id:"priority",label:"優先順序",w:"76px",min:76},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],of="Asia/Taipei",Hg=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:of,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},d2=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},lf=t=>new Date(t).toISOString().slice(0,10),l2=(t,a)=>lf(d2(t)+a*864e5),Vg=(t,a)=>Math.round((d2(t)-d2(a))/864e5),zg=t=>new Date(d2(t)).getUTCDay(),df=t=>l2(t,-((zg(t)+6)%7)),Va=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},cf=(t,a)=>{let r=Vg(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${Va(t)}（${gd[zg(t)]}）`,tag:e}},aa=t=>t?String(t).slice(0,5):"",hf=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=aa(t.start_time).split(":").map(Number),[e,i]=aa(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*10)/10} 小時`},o2=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的例行工作"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期的任務固定在最上面，不能搬移"],["item not in your list","這筆不在你的清單裡"],["item not found or canceled","這筆工作已被取消或不存在"],["more than one member record","這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號"],["no member record","找不到這個帳號對應的同工資料"],["no permission","沒有使用權限"],["permission denied","沒有使用權限"],["dates are required","日期必填"],["weekly rule needs","每週重複請至少選一個星期"],["monthly rule needs","每月重複請選幾號，或勾「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個例行工作"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},uf=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>gd[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 號`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},sf=({person:t,strong:a})=>d.default.createElement("span",{className:`truncate max-w-full ${a?"font-bold text-slate-900":"text-slate-700"}`},t&&t.name||"（未知）"),Sg=({value:t,placeholder:a,canEdit:r,onSave:e,className:i=""})=>{let[n,o]=(0,d.useState)(!1),[l,c]=(0,d.useState)(t||""),s=(0,d.useRef)(!1);(0,d.useEffect)(()=>{n||c(t||"")},[t,n]);let v=async()=>{if(o(!1),s.current){s.current=!1;return}let x=l.trim();x!==(t||"").trim()&&await e(x)};return n?d.default.createElement("input",{autoFocus:!0,value:l,onChange:x=>c(x.target.value),onBlur:v,onKeyDown:x=>{x.key==="Enter"&&x.currentTarget.blur(),x.key==="Escape"&&(s.current=!0,x.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):d.default.createElement("div",{onClick:()=>r&&o(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?d.default.createElement("span",{className:"text-slate-300"},a):null))},Ag=({type:t,a,b:r,canEdit:e,children:i,onSave:n})=>{let[o,l]=(0,d.useState)(!1),[c,s]=(0,d.useState)(a||""),[v,x]=(0,d.useState)(r||""),p=(0,d.useRef)(!1);(0,d.useEffect)(()=>{o||(s(a||""),x(r||""))},[a,r,o]);let k=async()=>{if(l(!1),p.current){p.current=!1;return}(c!==(a||"")||v!==(r||""))&&await n(c,v)};if(!o)return d.default.createElement("div",{onClick:()=>e&&l(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let y="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return d.default.createElement("div",{tabIndex:-1,onBlur:C=>{C.currentTarget.contains(C.relatedTarget)||k()},onKeyDown:C=>{C.key==="Enter"&&k(),C.key==="Escape"&&(p.current=!0,l(!1))},className:"flex flex-col gap-1"},d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",d.default.createElement("input",{autoFocus:!0,type:t,value:c,onChange:C=>s(C.target.value),className:y})),d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",d.default.createElement("input",{type:t,value:v,onChange:C=>x(C.target.value),className:y})))},gf=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o})=>{let l=a||{},c=t==="editRule",[s,v]=(0,d.useState)(l.title||""),[x,p]=(0,d.useState)(l.start_date||e),[k,y]=(0,d.useState)(aa(l.start_time)),[C,E]=(0,d.useState)(l.end_date||l.start_date||e),[g,u]=(0,d.useState)(aa(l.end_time)),[f,L]=(0,d.useState)(l.priority||"normal"),[W,V]=(0,d.useState)(l.note||""),[w,H]=(0,d.useState)(c?l.freq:r||"none"),[_,D]=(0,d.useState)(!!l.weekdays_only),[At,ar]=(0,d.useState)(l.week_days||[]),[ra,rr]=(0,d.useState)(l.month_day?String(l.month_day):""),[er,hn]=(0,d.useState)(!!l.month_last_day),[ne,c2]=(0,d.useState)(l.until_date||""),[ei,h2]=(0,d.useState)(l.is_active===void 0?!0:l.is_active),[un,wa]=(0,d.useState)(""),ea="text-xs font-medium text-slate-500",za="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",u2=S=>ar(ia=>ia.includes(S)?ia.filter(oe=>oe!==S):[...ia,S]),s2=()=>{if(wa(""),!s.trim())return wa("請輸入任務名稱");if(!x)return wa("開始日期必填");if(w==="none"&&(!C||C<x))return wa("結束日期不能早於開始日期");if(w==="weekly"&&At.length===0)return wa("每週重複請至少選一個星期");if(w==="monthly"&&!ra&&!er)return wa("每月重複請選幾號，或勾「每月最後一天」");if(w!=="none"&&ne&&ne<x)return wa("重複的結束日不能早於開始日");n({title:s.trim(),startDate:x,startTime:k||null,endDate:w==="none"?C:x,endTime:g||null,priority:f,note:W.trim()||null,repeat:w,weekdaysOnly:w==="daily"&&_,weekDays:w==="weekly"?At:[],monthDay:w==="monthly"&&ra?Number(ra):null,monthLast:w==="monthly"&&er,untilDate:ne||null,isActive:ei})};return d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},c?d.default.createElement(d.default.Fragment,null,d.default.createElement(r2,{className:"text-indigo-600",size:20})," 修改例行工作"):d.default.createElement(d.default.Fragment,null,d.default.createElement(cn,{className:"text-indigo-600",size:20})," 新增")),d.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(e2,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"任務名稱（必填）"),d.default.createElement("input",{autoFocus:!0,value:s,onChange:S=>v(S.target.value),placeholder:"一句話說明工作內容",className:za})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"重複"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([S])=>!(c&&S==="none")).map(([S,ia])=>d.default.createElement("button",{key:S,type:"button",onClick:()=>H(S),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${w===S?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},ia))),w==="daily"&&d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:_,onChange:S=>D(S.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),w==="weekly"&&d.default.createElement("div",{className:"flex gap-2 pt-1 flex-wrap"},[1,2,3,4,5,6,7].map(S=>d.default.createElement("button",{key:S,type:"button",onClick:()=>u2(S),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${At.includes(S)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},gd[S%7]))),w==="monthly"&&d.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},d.default.createElement("select",{value:ra,onChange:S=>rr(S.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},d.default.createElement("option",{value:""},"不指定號數"),Array.from({length:31},(S,ia)=>ia+1).map(S=>d.default.createElement("option",{key:S,value:S},S," 號"))),d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:er,onChange:S=>hn(S.target.checked),className:"accent-indigo-600"})," 每月最後一天"),ra&&Number(ra)>28&&!er&&d.default.createElement("span",{className:"text-xs text-amber-600"},ra," 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」")),w!=="none"&&d.default.createElement("p",{className:"text-xs text-slate-400 pt-1"},"到時間系統會在凌晨自動建立當天的工作；修改週期只影響之後產生的。")),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},w==="none"?"開始日期":"從哪一天開始"),d.default.createElement("input",{type:"date",value:x,onChange:S=>{p(S.target.value),C<S.target.value&&E(S.target.value)},className:za})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"開始時間（選填）"),d.default.createElement("input",{type:"time",value:k,onChange:S=>y(S.target.value),className:za})),w==="none"?d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"結束日期（到期日）"),d.default.createElement("input",{type:"date",value:C,min:x,onChange:S=>E(S.target.value),className:za})):d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"重複到哪一天（選填）"),d.default.createElement("input",{type:"date",value:ne,min:x,onChange:S=>c2(S.target.value),className:za})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"結束時間（選填）"),d.default.createElement("input",{type:"time",value:g,onChange:S=>u(S.target.value),className:za}))),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"優先順序"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["normal","普通"],["urgent","緊急"]].map(([S,ia])=>d.default.createElement("button",{key:S,type:"button",onClick:()=>L(S),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${f===S?S==="urgent"?"bg-white text-red-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},ia))))),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"備註"),d.default.createElement("textarea",{value:W,onChange:S=>V(S.target.value),rows:2,className:za})),c&&d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:ei,onChange:S=>h2(S.target.checked),className:"accent-indigo-600"})," 啟用（取消勾選＝暫停）"),un&&d.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},d.default.createElement(ri,{size:16})," ",un)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},d.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:s2,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},c?"儲存":w==="none"?"新增":"建立週期"))))},pf=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,d.useState)(Hg()),[o,l]=(0,d.useState)(null),[c,s]=(0,d.useState)([]),[v,x]=(0,d.useState)(""),[p,k]=(0,d.useState)([]),[y,C]=(0,d.useState)(!0),[E,g]=(0,d.useState)({type:"",text:""}),[u,f]=(0,d.useState)(null),[L,W]=(0,d.useState)("mine"),[V,w]=(0,d.useState)("today"),[H,_]=(0,d.useState)(""),[D,At]=(0,d.useState)(""),[ar,ra]=(0,d.useState)(new Set),[rr,er]=(0,d.useState)(""),[hn,ne]=(0,d.useState)(()=>{try{let h=localStorage.getItem("tbcWorkFont");return jg[h]?h:"m"}catch{return"m"}}),c2=h=>{ne(h);try{localStorage.setItem("tbcWorkFont",h)}catch{}},[ei,h2]=(0,d.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),un=h=>h2(m=>{let j=m.includes(h)?m.filter(N=>N!==h):[...m,h];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(j))}catch{}return j}),[wa,ea]=(0,d.useState)(!1),[za,u2]=(0,d.useState)(""),[s2,S]=(0,d.useState)(""),[ia,oe]=(0,d.useState)(!1),[xa,ii]=(0,d.useState)(null),[Dg,sn]=(0,d.useState)(!1),[fd,vd]=(0,d.useState)(!1),g2=(0,d.useRef)(!1),[kd,Og]=(0,d.useState)([]),[ni,gn]=(0,d.useState)(null),[Tr,p2]=(0,d.useState)(null),[Ug,pn]=(0,d.useState)(null),[xd,f2]=(0,d.useState)(null),le=jg[hn],Er=le+3,na=i.date,Ld=(0,d.useRef)(null),fn=(0,d.useRef)(0),ir=(h,m)=>{g({type:h,text:m}),clearTimeout(Ld.current),Ld.current=setTimeout(()=>g({type:"",text:""}),3200)},Tt=async(h,m)=>{let{data:j,error:N}=await a.rpc(h,m||{});if(N)throw N;return j},oa=async(h,m)=>{try{let j=await h();return await v2(!0),m&&ir("success",typeof m=="function"?m(j):m),j}catch(j){ir("error",o2(j)),await v2(!0);return}},yt=(0,d.useMemo)(()=>{if(V==="today")return{start:na,end:na};if(V==="week"){let j=df(na);return{start:j,end:l2(j,6)}}let h=H||na,m=D||h;return h<=m?{start:h,end:m}:{start:m,end:h}},[V,H,D,na]);(0,d.useEffect)(()=>{let h=setInterval(()=>n(m=>{let j=Hg();return j.date===m.date&&j.time===m.time?m:j}),3e4);return()=>clearInterval(h)},[]);let Zg=async()=>{try{let h=await Tt("work_current_member"),m=await Tt("work_list_people");return l(h),s(m||[]),ra(new Set((m||[]).map(j=>j.member_id))),x(""),!0}catch(h){return x(o2(h)),!1}},v2=async h=>{let m=++fn.current;h||C(!0);try{let j=r&&r.fetchAllData?r.fetchAllData:K=>K(),N=K=>{if(K&&K.error)throw K.error;return K&&K.data||[]},ot=N(await j(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).lte("start_date",yt.end).gte("end_date",yt.start))),Gt=N(await j(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).lte("end_date",na).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),Yt=new Set(ot.map(K=>K.id)),Ht=Gt.map(K=>K.id).filter(K=>!Yt.has(K)),B=[];if(Ht.length&&(B=N(await j(()=>a.from("work_items").select("*, work_assignees(*)").in("id",Ht)))),m!==fn.current)return;let Z=[];for(let K of[...ot,...B]){let{work_assignees:wt,...La}=K;for(let Mn of wt||[])Z.push({key:Mn.id,item:{...La,assigneeCount:(wt||[]).length},a:Mn})}k(Z)}catch(j){m===fn.current&&ir("error","讀取失敗："+o2(j))}finally{m===fn.current&&!h&&C(!1)}};(0,d.useEffect)(()=>{Zg()},[]),(0,d.useEffect)(()=>{o&&v2(!1)},[o,yt.start,yt.end,na]),(0,d.useEffect)(()=>{V==="custom"&&!H&&(_(na),At(l2(na,6)))},[V]);let k2=(0,d.useMemo)(()=>{let h={};return c.forEach(m=>{h[m.member_id]={name:m.name,role:m.role}}),h},[c]),xf=o?k2[o]:null,{overdueRows:vn,groups:x2,total:Md}=(0,d.useMemo)(()=>{let h=p.map(B=>{let Z=B.a.status==="done",K=!!B.a.skipped_at||B.a.status==="on_hold",wt=aa(B.item.end_time),La=!Z&&!K&&(B.item.end_date<i.date||B.item.end_date===i.date&&wt&&wt<i.time);return{...B,done:Z,skipped:K,overdue:La,isMine:B.a.member_id===o,isRoutine:B.item.assigneeCount===1&&B.item.creator_member_id===B.a.member_id,isRecurring:!!B.item.recurring_rule_id,person:k2[B.a.member_id]}}),m=rr.trim().toLowerCase(),j=B=>!m||[B.item.title,B.item.note,B.person&&B.person.name].some(Z=>Z&&String(Z).toLowerCase().includes(m)),N=h.filter(B=>(L==="mine"?B.isMine:ar.has(B.a.member_id))&&j(B)),ot=N.filter(B=>B.overdue).sort((B,Z)=>(B.item.end_date+aa(B.item.end_time)).localeCompare(Z.item.end_date+aa(Z.item.end_time))||(B.person&&B.person.name||"").localeCompare(Z.person&&Z.person.name||"")),Gt=N.filter(B=>!B.overdue&&B.item.start_date<=yt.end&&B.item.end_date>=yt.start),Yt={};Gt.forEach(B=>{(Yt[B.item.start_date]=Yt[B.item.start_date]||[]).push(B)});let Ht=Object.keys(Yt).sort().map(B=>{let Z=Yt[B].sort((wt,La)=>{if(L==="mine")return wt.a.sort_order-La.a.sort_order||String(wt.a.created_at).localeCompare(String(La.a.created_at));let Mn=aa(wt.item.start_time)||"99:99",Ig=aa(La.item.start_time)||"99:99";return Mn.localeCompare(Ig)||(wt.person&&wt.person.name||"").localeCompare(La.person&&La.person.name||"")}),K=L==="mine"&&B>=yt.start&&!m;return{date:B,rows:Z,canMove:K}});return{overdueRows:ot,groups:Ht,total:ot.length+Gt.length}},[p,i,o,L,ar,yt,k2,rr]),kn=Wg.filter(h=>h.locked||!ei.includes(h.id)),md=`56px ${kn.map(h=>h.w).join(" ")}`,qg=56+kn.reduce((h,m)=>h+m.min,0)+16,oi=(h,m,j)=>oa(()=>{let N={...h.item,...m};return Tt("work_update_routine",{p_item_id:N.id,p_title:N.title,p_start_date:N.start_date,p_start_time:N.start_time||null,p_end_date:N.end_date,p_end_time:N.end_time||null,p_priority:N.priority||"normal",p_note:N.note||null,p_meeting_flag:null})},j),Gg=(h,m,j)=>{if(!m||!j){ir("error","日期必填");return}let N=m,ot=j;if(m!==h.item.start_date&&j===h.item.end_date&&(ot=l2(m,Vg(h.item.end_date,h.item.start_date))),ot<N){ir("error","結束日期不能早於開始日期");return}let Gt=!(N<=yt.end&&ot>=yt.start);return oi(h,{start_date:N,end_date:ot},Gt?`已改到 ${Va(N)}（目前顯示範圍看不到，切換範圍就會出現）`:null)},Yg=(h,m,j)=>oi(h,{start_time:m||null,end_time:j||null}),Xg=(h,m)=>{if(!m){ir("error","任務名稱不能空白");return}return oi(h,{title:m})},Lf=h=>oa(()=>Tt("work_complete",{p_item_id:h.item.id,p_note:null}),"已完成"),Qg=(h,m)=>oa(()=>Tt("work_set_status",{p_item_id:h.item.id,p_status:m}),"狀態已更新"),xn=(h,m)=>oa(()=>Tt("work_move",{p_item_id:h.item.id,p_where:m})),Kg=h=>oa(()=>Tt("work_copy",{p_item_id:h.item.id}),"複製成功"),Rg=h=>f({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或跳過不會刪除，標記「取消」並保留紀錄`,onConfirm:async()=>{f(null),await oa(()=>Tt("work_delete",{p_item_id:h.item.id}),m=>m==="canceled"?"這筆已有進度紀錄，已改為取消並保留紀錄":"已刪除")}}),Mf=async()=>{let h=za.trim();if(!h||ia)return;oe(!0);let m=s2||na,j=await oa(()=>Tt("work_create_routine",{p_title:h,p_start_date:m,p_end_date:m}));if(oe(!1),j){u2("");let N=m<=yt.end&&m>=yt.start;ir("success",N?"已新增":`已新增到 ${Va(m)}（目前顯示範圍看不到，切換範圍就會出現）`)}},Jg=async h=>{oe(!0);let m;xa.mode==="editRule"?(m=await oa(()=>Tt("work_update_rule",{p_rule_id:xa.rule.id,p_title:h.title,p_freq:h.repeat,p_weekdays_only:h.weekdaysOnly,p_week_days:h.weekDays,p_month_day:h.monthDay,p_month_last_day:h.monthLast,p_start_date:h.startDate,p_until_date:h.untilDate,p_start_time:h.startTime,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:null,p_is_active:h.isActive}),"例行工作已儲存（只影響之後產生的工作）"),m!==void 0&&await L2()):h.repeat==="none"?m=await oa(()=>Tt("work_create_routine",{p_title:h.title,p_start_date:h.startDate,p_start_time:h.startTime,p_end_date:h.endDate,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:null}),"已新增"):m=await oa(()=>Tt("work_create_rule",{p_title:h.title,p_freq:h.repeat,p_weekdays_only:h.weekdaysOnly,p_week_days:h.weekDays,p_month_day:h.monthDay,p_month_last_day:h.monthLast,p_start_date:h.startDate,p_until_date:h.untilDate,p_start_time:h.startTime,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:null}),"已建立例行工作，之後會在凌晨自動出現在清單"),oe(!1),m!==void 0&&ii(null)},L2=async()=>{try{let{data:h,error:m}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(m)throw m;Og(h||[])}catch(h){ir("error","讀取例行工作失敗："+o2(h))}},yd=async()=>{sn(!0),await L2()};(0,d.useEffect)(()=>{!xa&&g2.current&&(g2.current=!1,yd())},[xa]);let Fg=async h=>{await oa(()=>Tt("work_update_rule",{p_rule_id:h.id,p_title:h.title,p_freq:h.freq,p_weekdays_only:h.weekdays_only,p_week_days:h.week_days,p_month_day:h.month_day,p_month_last_day:h.month_last_day,p_start_date:h.start_date,p_until_date:h.until_date,p_start_time:h.start_time,p_end_time:h.end_time,p_priority:h.priority,p_note:h.note,p_meeting_flag:null,p_is_active:!h.is_active}),h.is_active?"已暫停":"已啟用")!==void 0&&await L2()},$g=async(h,m)=>{let j=Tr;if(p2(null),f2(null),pn(null),!j||j.date!==h.date||j.key===m.key)return;let N=h.rows.filter(Ht=>!Ht.overdue),ot=N.findIndex(Ht=>Ht.key===j.key),Gt=N.findIndex(Ht=>Ht.key===m.key),Yt=h.rows.find(Ht=>Ht.key===j.key);!Yt||ot<0||Gt<0||await oa(()=>Tt("work_move_to",{p_item_id:Yt.item.id,p_target_item_id:m.item.id,p_after:ot<Gt}))},de="flex items-center bg-slate-100 p-1 rounded-full shrink-0",nr=h=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${h?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,Ca=ni?[...vn,...x2.flatMap(h=>h.rows)].find(h=>h.key===ni.key):null,Ln=Ca?x2.find(h=>h.rows.some(m=>m.key===Ca.key)):null,wd=(h,m)=>{let j=h.isMine&&h.isRoutine,N=m?m.rows.filter(B=>!B.overdue):[],ot=!!m&&m.canMove&&j&&!h.overdue,Gt=xd===h.key&&Tr&&Tr.key!==h.key,Yt=h.done||h.skipped,Ht=B=>{switch(B.id){case"title":return d.default.createElement("div",{key:B.id,className:"min-w-0 flex items-start gap-1.5"},d.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},h.isRoutine&&d.default.createElement("span",{className:"text-[0.7em] px-1.5 py-0.5 rounded border border-violet-100 bg-violet-50 text-violet-600 font-bold"},"例行"),h.isRecurring&&d.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},d.default.createElement(r2,{size:Math.round(le*.95)})),h.overdue&&d.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},d.default.createElement(hd,{size:Math.round(le*.8)})," 逾期")),d.default.createElement("div",{className:"min-w-0 flex-1"},d.default.createElement(Sg,{value:h.item.title,placeholder:"任務名稱",canEdit:j,onSave:Z=>Xg(h,Z),className:`font-medium ${Yt?"text-slate-400 line-through":h.overdue?"text-red-600":"text-slate-900"}`})));case"who":return d.default.createElement("div",{key:B.id,className:"min-w-0"},d.default.createElement(sf,{person:h.person,size:Er}));case"date":{let Z=h.item.start_date!==h.item.end_date;return d.default.createElement("div",{key:B.id,className:`min-w-0 ${h.overdue?"text-red-600":"text-slate-700"}`},d.default.createElement(Ag,{type:"date",a:h.item.start_date,b:h.item.end_date,canEdit:j,onSave:(K,wt)=>Gg(h,K,wt)},Z?`${Va(h.item.start_date)} → ${Va(h.item.end_date)}`:Va(h.item.start_date)))}case"time":{let Z=aa(h.item.start_time),K=aa(h.item.end_time);return d.default.createElement("div",{key:B.id,className:"min-w-0 text-slate-700"},d.default.createElement(Ag,{type:"time",a:Z,b:K,canEdit:j,onSave:(wt,La)=>Yg(h,wt,La)},Z||K?`${Z||"—"} ~ ${K||"—"}`:d.default.createElement("span",{className:"text-slate-300"},j?"加時間":"")))}case"hours":return d.default.createElement("div",{key:B.id,className:"text-slate-500 text-[0.9em]"},hf(h.item)||"");case"priority":return d.default.createElement("div",{key:B.id},d.default.createElement("button",{type:"button",disabled:!j,onClick:()=>oi(h,{priority:h.item.priority==="urgent"?"normal":"urgent"}),title:j?"點一下切換":"",className:`text-[0.75em] px-2 py-0.5 rounded border font-bold ${h.item.priority==="urgent"?"bg-red-50 border-red-100 text-red-600":"bg-slate-50 border-slate-200 text-slate-400"} ${j?"hover:brightness-95 cursor-pointer":"cursor-default"}`},h.item.priority==="urgent"?"緊急":"普通"));case"note":return d.default.createElement("div",{key:B.id,className:"min-w-0"},d.default.createElement(Sg,{value:h.item.note,placeholder:"備註",canEdit:j,onSave:Z=>oi(h,{note:Z||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let Z=h.done?"done":h.skipped?"on_hold":"pending",K=Z==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":Z==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600";return j?d.default.createElement("select",{key:B.id,value:Z,onChange:wt=>Qg(h,wt.target.value),"aria-label":"狀態",title:"點一下改變狀態",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${K}`},d.default.createElement("option",{value:"pending"},"待處理"),d.default.createElement("option",{value:"done"},"完成"),d.default.createElement("option",{value:"on_hold"},"擱置")):d.default.createElement("span",{key:B.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${K}`},{pending:"待處理",done:"完成",on_hold:"擱置"}[Z])}default:return null}};return d.default.createElement("div",{key:h.key,draggable:ot&&Ug===h.key,onDragStart:B=>{p2({key:h.key,date:m.date}),B.dataTransfer.effectAllowed="move";try{B.dataTransfer.setData("text/plain",h.key)}catch{}},onDragOver:B=>{Tr&&m&&Tr.date===m.date&&!h.overdue&&(B.preventDefault(),xd!==h.key&&f2(h.key))},onDrop:B=>{B.preventDefault(),m&&$g(m,h)},onDragEnd:()=>{p2(null),f2(null),pn(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors
                    ${h.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Tr&&Tr.key===h.key?"opacity-40":""}
                    ${Gt?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:md}},d.default.createElement("div",{className:"flex items-center gap-0.5 px-2"},ot?d.default.createElement("span",{onMouseDown:()=>pn(h.key),onMouseUp:()=>pn(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},d.default.createElement(ag,{size:Er})):d.default.createElement("span",{style:{width:Er}}),j?d.default.createElement("button",{onClick:B=>{let Z=B.currentTarget.getBoundingClientRect();gn({key:h.key,x:Math.min(Z.left,window.innerWidth-220),y:Math.min(Z.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},d.default.createElement(tg,{size:Er})):d.default.createElement("span",{style:{width:Er+8}})),kn.map(B=>{let Z=B.id==="title"||B.id==="note";return d.default.createElement("div",{key:B.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${Z?"[&>*]:w-full":"justify-center text-center"}`},Ht(B))}))};return d.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:le}},d.default.createElement(wg,{active:"work",shell:e}),d.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},d.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},d.default.createElement("div",{className:"flex items-center gap-4 min-w-0"},d.default.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:le*1.45}},"工作日誌"),d.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},d.default.createElement(sg,{size:16,className:"text-slate-400 shrink-0"}),d.default.createElement("input",{type:"text",value:rr,onChange:h=>er(h.target.value),onKeyDown:h=>{h.key==="Escape"&&er("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),rr&&d.default.createElement("button",{type:"button",onClick:()=>er(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},d.default.createElement(e2,{size:14})))),d.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},d.default.createElement("button",{onClick:()=>ii({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},d.default.createElement(cn,{size:16}),"新增"),d.default.createElement("div",{className:de},d.default.createElement("button",{onClick:yd,className:nr(!1)},d.default.createElement(cn,{size:14,className:"text-slate-500"}),"例行工作")),d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>ea(h=>!h),className:`${de} !p-1.5`},d.default.createElement("span",{className:nr(wa)},d.default.createElement(n2,{size:14,className:"text-slate-500"}),"隱藏")),wa&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>ea(!1)}),d.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},Wg.filter(h=>!h.locked).map(h=>d.default.createElement("label",{key:h.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${h.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},d.default.createElement("input",{type:"checkbox",disabled:h.locked,checked:h.locked||!ei.includes(h.id),onChange:()=>un(h.id),className:"accent-indigo-600"}),h.label,h.locked&&d.default.createElement(ud,{size:11})))))),d.default.createElement("div",{className:de,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([h,m,j])=>d.default.createElement("button",{key:h,onClick:()=>c2(h),title:m,"aria-label":`文字${m}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${hn===h?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:j}},"A"))))),v?d.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},d.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},d.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},d.default.createElement(ud,{size:30})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),d.default.createElement("p",{className:"text-slate-500 font-normal"},v),d.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧師、行政與管理員。"))):d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 relative z-[15] shrink-0 space-y-3"},d.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},d.default.createElement("div",{className:de},d.default.createElement("button",{onClick:()=>W("mine"),className:nr(L==="mine")},"我的"),d.default.createElement("button",{onClick:()=>W("all"),className:nr(L==="all")},"全部")),L==="all"&&d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>vd(h=>!h),className:`${de} !p-1.5`},d.default.createElement("span",{className:nr(fd)},d.default.createElement(t2,{size:14,className:"text-slate-500"}),"人員（",ar.size,"/",c.length,"）")),fd&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>vd(!1)}),d.default.createElement("div",{className:"absolute left-0 top-full mt-2 z-40 w-56 max-h-80 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},d.default.createElement("div",{className:"flex gap-2 px-1 pb-2 mb-1 border-b border-slate-100"},d.default.createElement("button",{onClick:()=>ra(new Set(c.map(h=>h.member_id))),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全選"),d.default.createElement("button",{onClick:()=>ra(new Set),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全不選")),c.map(h=>d.default.createElement("label",{key:h.member_id,className:"flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none text-slate-700 hover:bg-slate-50 cursor-pointer"},d.default.createElement("input",{type:"checkbox",checked:ar.has(h.member_id),onChange:()=>ra(m=>{let j=new Set(m);return j.has(h.member_id)?j.delete(h.member_id):j.add(h.member_id),j}),className:"accent-indigo-600"}),h.name))))),d.default.createElement("div",{className:de},d.default.createElement("button",{onClick:()=>w("today"),className:nr(V==="today")},"今日"),d.default.createElement("button",{onClick:()=>w("week"),className:nr(V==="week")},"本週"),d.default.createElement("button",{onClick:()=>w("custom"),className:nr(V==="custom")},"自訂")),V==="custom"&&d.default.createElement("div",{className:"flex items-center gap-2"},d.default.createElement("input",{type:"date",value:H,onChange:h=>_(h.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),d.default.createElement("span",{className:"text-slate-400"},"～"),d.default.createElement("input",{type:"date",value:D,min:H,onChange:h=>At(h.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),d.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},yt.start===yt.end?Va(yt.start):`${Va(yt.start)} ～ ${Va(yt.end)}`,d.default.createElement("span",{className:"ml-3"},"共 ",Md," 筆")))),d.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},d.default.createElement("div",{className:"space-y-4",style:{minWidth:qg}},d.default.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:md}},d.default.createElement("span",{className:"py-2"}),kn.map(h=>d.default.createElement("span",{key:h.id,className:"py-2 px-2 border-l border-slate-300 text-center"},h.label))),y&&p.length===0?d.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):Md===0?d.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},rr.trim()?`找不到符合「${rr.trim()}」的工作（只搜尋目前顯示的範圍）`:"新增一筆工作，開始記錄"):d.default.createElement(d.default.Fragment,null,vn.length>0&&d.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},d.default.createElement(hd,{size:Er})," 逾期未完成 ",d.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},vn.length)),vn.map(h=>wd(h,null))),x2.map(h=>{let m=cf(h.date,na);return d.default.createElement("div",{key:h.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},d.default.createElement("span",{className:`font-bold ${m.tag==="今天"?"text-indigo-600":"text-slate-800"}`},m.text)),h.rows.map(j=>wd(j,h)))}))))),ni&&Ca&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>gn(null),onContextMenu:h=>{h.preventDefault(),gn(null)}}),d.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:ni.x,top:ni.y,fontSize:le}},(()=>{let h=Ln?Ln.rows.filter(ot=>!ot.overdue):[],m=h.findIndex(ot=>ot.key===Ca.key),j=!!Ln&&Ln.canMove&&m>=0,N=(ot,Gt,Yt,Ht,B)=>d.default.createElement("button",{disabled:Ht,onClick:()=>{gn(null),Yt()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${B?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},d.default.createElement(ot,{size:Er-1}),Gt);return d.default.createElement(d.default.Fragment,null,d.default.createElement("p",{className:"px-3 pt-1 pb-0.5 text-[0.72em] text-slate-400 font-medium"},"搬移",!j&&"（這裡不能搬移）"),N(lg,"移到頂端",()=>xn(Ca,"top"),!j||m===0),N(ng,"上一行",()=>xn(Ca,"up"),!j||m===0),N(og,"下一行",()=>xn(Ca,"down"),!j||m===h.length-1),N(dg,"移到底部",()=>xn(Ca,"bottom"),!j||m===h.length-1),d.default.createElement("div",{className:"h-px bg-slate-100 my-1"}),N(eg,"複製到今天",()=>Kg(Ca)),N(ig,"刪除",()=>Rg(Ca),!1,!0))})())),xa&&d.default.createElement(gf,{key:xa.mode+(xa.rule?xa.rule.id:""),mode:xa.mode,initial:xa.rule,presetRepeat:xa.preset,today:na,busy:ia,onClose:()=>ii(null),onSubmit:Jg}),Dg&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},d.default.createElement(r2,{className:"text-indigo-600",size:20})," 我的例行工作"),d.default.createElement("button",{onClick:()=>sn(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(e2,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},d.default.createElement("button",{onClick:()=>{sn(!1),ii({mode:"create",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},d.default.createElement(cn,{size:16}),"新增例行工作"),kd.length===0?d.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"還沒有例行工作。按上面的「+ 新增例行工作」建立。"):kd.map(h=>d.default.createElement("div",{key:h.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${h.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},d.default.createElement("div",{className:"min-w-0"},d.default.createElement("div",{className:`font-medium truncate ${h.is_active?"text-slate-900":"text-slate-400"}`},h.title),d.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},uf(h),h.start_time?`　${aa(h.start_time)}${h.end_time?"~"+aa(h.end_time):""}`:"",h.until_date?`　到 ${Va(h.until_date)}`:"",h.is_active?"":"　（暫停）")),d.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},d.default.createElement("button",{onClick:()=>{g2.current=!0,sn(!1),ii({mode:"editRule",rule:h})},className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},d.default.createElement(ug,{size:16})),d.default.createElement("button",{onClick:()=>Fg(h),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${h.is_active?"bg-amber-50 text-amber-600 hover:bg-amber-100":"bg-emerald-50 text-emerald-600 hover:bg-emerald-100"}`,title:h.is_active?"暫停":"啟用","aria-label":h.is_active?"暫停":"啟用"},h.is_active?d.default.createElement(cg,{size:16}):d.default.createElement(hg,{size:16})))))))),E.text&&d.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},d.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${E.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},d.default.createElement("div",{className:"shrink-0 mt-0.5"},E.type==="success"?d.default.createElement(rg,{size:18}):d.default.createElement(ri,{size:18})),d.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},E.text))),u&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"p-8 text-center"},d.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},d.default.createElement(ri,{size:32})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),d.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},d.default.createElement("button",{onClick:()=>f(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},_g=pf;var Tg=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: "Open Sans", "Noto Sans TC", -apple-system, "PingFang TC", "Microsoft JhengHei", sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-red-50: oklch(97.1% 0.013 17.38);
    --color-red-100: oklch(93.6% 0.032 17.717);
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
    --color-indigo-50: #eef6fd;
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
  .my-1 {
    margin-block: var(--spacing);
  }
  .mt-0\\.5 {
    margin-top: calc(var(--spacing) * 0.5);
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
  .ml-2 {
    margin-left: calc(var(--spacing) * 2);
  }
  .ml-3 {
    margin-left: calc(var(--spacing) * 3);
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
  .h-\\[100dvh\\] {
    height: 100dvh;
  }
  .h-full {
    height: 100%;
  }
  .h-px {
    height: 1px;
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
  .w-48 {
    width: calc(var(--spacing) * 48);
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
  .bg-slate-50 {
    background-color: var(--color-slate-50);
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
  .pr-12 {
    padding-right: calc(var(--spacing) * 12);
  }
  .pb-0\\.5 {
    padding-bottom: calc(var(--spacing) * 0.5);
  }
  .pb-1 {
    padding-bottom: var(--spacing);
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
  .text-\\[0\\.72em\\] {
    font-size: 0.72em;
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
  .text-\\[15px\\] {
    font-size: 15px;
  }
  .text-\\[17px\\] {
    font-size: 17px;
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
  .ring-2 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
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
    .hover\\:text-indigo-600:hover {
      color: var(--color-indigo-600);
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
`;var ff="https://jcepavwocdujoeoqxvsd.supabase.co",vf="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",pd=document.createElement("style");pd.id="tbc-one-css";pd.textContent=Tg;document.head.appendChild(pd);var ie=window.__TBC_SB||window.supabase.createClient(ff,vf),kf=({page:t})=>{let[a,r]=(0,xt.useState)(void 0),[e,i]=(0,xt.useState)(""),[n,o]=(0,xt.useState)({status:"loading",name:"",role:"member"});(0,xt.useEffect)(()=>{let v=!0;ie.auth.getSession().then(({data:p})=>{v&&r(p.session||null)});let{data:x}=ie.auth.onAuthStateChange((p,k)=>{v&&r(k||null)});return()=>{v=!1,x&&x.subscription&&x.subscription.unsubscribe()}},[]);let l=a&&a.user&&a.user.id;(0,xt.useEffect)(()=>{if(!a)return;let v=!0;return yg(ie,a).then(async x=>{if(v){if(x.status!=="ok"||!Mg.includes(x.role)){try{await ie.auth.signOut()}catch{}i("權限不足"),r(null);return}i(""),o(x)}}),()=>{v=!1}},[l]);let c=async()=>{try{await ie.auth.signOut()}catch{}r(null),o({status:"loading",name:"",role:"member"})};if(a===void 0)return xt.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return xt.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},xt.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},xt.default.createElement(i2,{size:30})),xt.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),xt.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),xt.default.createElement(Cg,{supabase:ie,notice:e}));if(n.status!=="ok")return xt.default.createElement("div",{className:"h-[100dvh] bg-white"});let s={identity:n,onLogout:c};return t==="work"?xt.default.createElement(_g,{session:a,supabase:ie,utils:{},shell:s}):xt.default.createElement(bg,{shell:s})},Eg=document.getElementById("root");(0,Ng.createRoot)(Eg).render(xt.default.createElement(kf,{page:Eg.getAttribute("data-page")||"home"}));})();
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
