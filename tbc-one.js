(()=>{var tp=Object.create;var uc=Object.defineProperty;var ap=Object.getOwnPropertyDescriptor;var rp=Object.getOwnPropertyNames;var ep=Object.getPrototypeOf,ip=Object.prototype.hasOwnProperty;var Lr=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var np=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of rp(a))!ip.call(t,i)&&i!==r&&uc(t,i,{get:()=>a[i],enumerable:!(e=ap(a,i))||e.enumerable});return t};var $r=(t,a,r)=>(r=t!=null?tp(ep(t)):{},np(a||!t||!t.__esModule?uc(r,"default",{value:t,enumerable:!0}):r,t));var yc=Lr(_=>{"use strict";var n2=Symbol.for("react.transitional.element"),op=Symbol.for("react.portal"),lp=Symbol.for("react.fragment"),dp=Symbol.for("react.strict_mode"),cp=Symbol.for("react.profiler"),hp=Symbol.for("react.consumer"),up=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),pp=Symbol.for("react.memo"),vc=Symbol.for("react.lazy"),fp=Symbol.for("react.activity"),sc=Symbol.iterator;function vp(t){return t===null||typeof t!="object"?null:(t=sc&&t[sc]||t["@@iterator"],typeof t=="function"?t:null)}var kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xc=Object.assign,Lc={};function Se(t,a,r){this.props=t,this.context=a,this.refs=Lc,this.updater=r||kc}Se.prototype.isReactComponent={};Se.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};Se.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mc(){}Mc.prototype=Se.prototype;function o2(t,a,r){this.props=t,this.context=a,this.refs=Lc,this.updater=r||kc}var l2=o2.prototype=new Mc;l2.constructor=o2;xc(l2,Se.prototype);l2.isPureReactComponent=!0;var gc=Array.isArray;function i2(){}var dt={H:null,A:null,T:null,S:null},mc=Object.prototype.hasOwnProperty;function d2(t,a,r){var e=r.ref;return{$$typeof:n2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function kp(t,a){return d2(t.type,a,t.props)}function c2(t){return typeof t=="object"&&t!==null&&t.$$typeof===n2}function xp(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var pc=/\/+/g;function e2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?xp(""+t.key):a.toString(36)}function Lp(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(i2,i2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function He(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case n2:case op:o=!0;break;case vc:return o=t._init,He(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+e2(t,0):e,gc(i)?(r="",o!=null&&(r=o.replace(pc,"$&/")+"/"),He(i,a,r,"",function(s){return s})):i!=null&&(c2(i)&&(i=kp(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(pc,"$&/")+"/")+o)),a.push(i)),1;o=0;var d=e===""?".":e+":";if(gc(t))for(var h=0;h<t.length;h++)e=t[h],n=d+e2(e,h),o+=He(e,a,r,n,i);else if(h=vp(t),typeof h=="function")for(t=h.call(t),h=0;!(e=t.next()).done;)e=e.value,n=d+e2(e,h++),o+=He(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return He(Lp(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function Pn(t,a,r){if(t==null)return t;var e=[],i=0;return He(t,e,"","",function(n){return a.call(r,n,i++)}),e}function Mp(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var fc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mp={map:Pn,forEach:function(t,a,r){Pn(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return Pn(t,function(){a++}),a},toArray:function(t){return Pn(t,function(a){return a})||[]},only:function(t){if(!c2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_.Activity=fp;_.Children=mp;_.Component=Se;_.Fragment=lp;_.Profiler=cp;_.PureComponent=o2;_.StrictMode=dp;_.Suspense=gp;_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=dt;_.__COMPILER_RUNTIME={__proto__:null,c:function(t){return dt.H.useMemoCache(t)}};_.cache=function(t){return function(){return t.apply(null,arguments)}};_.cacheSignal=function(){return null};_.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=xc({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!mc.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),d=0;d<n;d++)o[d]=arguments[d+2];e.children=o}return d2(t.type,i,e)};_.createContext=function(t){return t={$$typeof:up,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:hp,_context:t},t};_.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)mc.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var d=Array(o),h=0;h<o;h++)d[h]=arguments[h+2];i.children=d}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return d2(t,n,i)};_.createRef=function(){return{current:null}};_.forwardRef=function(t){return{$$typeof:sp,render:t}};_.isValidElement=c2;_.lazy=function(t){return{$$typeof:vc,_payload:{_status:-1,_result:t},_init:Mp}};_.memo=function(t,a){return{$$typeof:pp,type:t,compare:a===void 0?null:a}};_.startTransition=function(t){var a=dt.T,r={};dt.T=r;try{var e=t(),i=dt.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(i2,fc)}catch(n){fc(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),dt.T=a}};_.unstable_useCacheRefresh=function(){return dt.H.useCacheRefresh()};_.use=function(t){return dt.H.use(t)};_.useActionState=function(t,a,r){return dt.H.useActionState(t,a,r)};_.useCallback=function(t,a){return dt.H.useCallback(t,a)};_.useContext=function(t){return dt.H.useContext(t)};_.useDebugValue=function(){};_.useDeferredValue=function(t,a){return dt.H.useDeferredValue(t,a)};_.useEffect=function(t,a){return dt.H.useEffect(t,a)};_.useEffectEvent=function(t){return dt.H.useEffectEvent(t)};_.useId=function(){return dt.H.useId()};_.useImperativeHandle=function(t,a,r){return dt.H.useImperativeHandle(t,a,r)};_.useInsertionEffect=function(t,a){return dt.H.useInsertionEffect(t,a)};_.useLayoutEffect=function(t,a){return dt.H.useLayoutEffect(t,a)};_.useMemo=function(t,a){return dt.H.useMemo(t,a)};_.useOptimistic=function(t,a){return dt.H.useOptimistic(t,a)};_.useReducer=function(t,a,r){return dt.H.useReducer(t,a,r)};_.useRef=function(t){return dt.H.useRef(t)};_.useState=function(t){return dt.H.useState(t)};_.useSyncExternalStore=function(t,a,r){return dt.H.useSyncExternalStore(t,a,r)};_.useTransition=function(){return dt.H.useTransition()};_.version="19.2.8"});var Ja=Lr((Wv,wc)=>{"use strict";wc.exports=yc()});var zc=Lr(gt=>{"use strict";function g2(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<to(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Da(t){return t.length===0?null:t[0]}function ro(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,d=t[o],h=o+1,s=t[h];if(0>to(d,r))h<i&&0>to(s,d)?(t[e]=s,t[h]=r,e=h):(t[e]=d,t[o]=r,e=o);else if(h<i&&0>to(s,r))t[e]=s,t[h]=r,e=h;else break t}}return a}function to(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}gt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Cc=performance,gt.unstable_now=function(){return Cc.now()}):(h2=Date,bc=h2.now(),gt.unstable_now=function(){return h2.now()-bc});var Cc,h2,bc,Ra=[],Mr=[],yp=1,La=null,Qt=3,p2=!1,Ei=!1,Di=!1,f2=!1,Wc=typeof setTimeout=="function"?setTimeout:null,Hc=typeof clearTimeout=="function"?clearTimeout:null,Bc=typeof setImmediate<"u"?setImmediate:null;function ao(t){for(var a=Da(Mr);a!==null;){if(a.callback===null)ro(Mr);else if(a.startTime<=t)ro(Mr),a.sortIndex=a.expirationTime,g2(Ra,a);else break;a=Da(Mr)}}function v2(t){if(Di=!1,ao(t),!Ei)if(Da(Ra)!==null)Ei=!0,Ve||(Ve=!0,Ae());else{var a=Da(Mr);a!==null&&k2(v2,a.startTime-t)}}var Ve=!1,Oi=-1,Sc=5,Ac=-1;function Vc(){return f2?!0:!(gt.unstable_now()-Ac<Sc)}function u2(){if(f2=!1,Ve){var t=gt.unstable_now();Ac=t;var a=!0;try{t:{Ei=!1,Di&&(Di=!1,Hc(Oi),Oi=-1),p2=!0;var r=Qt;try{a:{for(ao(t),La=Da(Ra);La!==null&&!(La.expirationTime>t&&Vc());){var e=La.callback;if(typeof e=="function"){La.callback=null,Qt=La.priorityLevel;var i=e(La.expirationTime<=t);if(t=gt.unstable_now(),typeof i=="function"){La.callback=i,ao(t),a=!0;break a}La===Da(Ra)&&ro(Ra),ao(t)}else ro(Ra);La=Da(Ra)}if(La!==null)a=!0;else{var n=Da(Mr);n!==null&&k2(v2,n.startTime-t),a=!1}}break t}finally{La=null,Qt=r,p2=!1}a=void 0}}finally{a?Ae():Ve=!1}}}var Ae;typeof Bc=="function"?Ae=function(){Bc(u2)}:typeof MessageChannel<"u"?(s2=new MessageChannel,jc=s2.port2,s2.port1.onmessage=u2,Ae=function(){jc.postMessage(null)}):Ae=function(){Wc(u2,0)};var s2,jc;function k2(t,a){Oi=Wc(function(){t(gt.unstable_now())},a)}gt.unstable_IdlePriority=5;gt.unstable_ImmediatePriority=1;gt.unstable_LowPriority=4;gt.unstable_NormalPriority=3;gt.unstable_Profiling=null;gt.unstable_UserBlockingPriority=2;gt.unstable_cancelCallback=function(t){t.callback=null};gt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Sc=0<t?Math.floor(1e3/t):5};gt.unstable_getCurrentPriorityLevel=function(){return Qt};gt.unstable_next=function(t){switch(Qt){case 1:case 2:case 3:var a=3;break;default:a=Qt}var r=Qt;Qt=a;try{return t()}finally{Qt=r}};gt.unstable_requestPaint=function(){f2=!0};gt.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=Qt;Qt=t;try{return a()}finally{Qt=r}};gt.unstable_scheduleCallback=function(t,a,r){var e=gt.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:yp++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,g2(Mr,t),Da(Ra)===null&&t===Da(Mr)&&(Di?(Hc(Oi),Oi=-1):Di=!0,k2(v2,r-e))):(t.sortIndex=i,g2(Ra,t),Ei||p2||(Ei=!0,Ve||(Ve=!0,Ae()))),t};gt.unstable_shouldYield=Vc;gt.unstable_wrapCallback=function(t){var a=Qt;return function(){var r=Qt;Qt=a;try{return t.apply(this,arguments)}finally{Qt=r}}}});var Tc=Lr((Sv,_c)=>{"use strict";_c.exports=zc()});var Ec=Lr(Rt=>{"use strict";var wp=Ja();function Nc(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function mr(){}var Jt={d:{f:mr,r:function(){throw Error(Nc(522))},D:mr,C:mr,L:mr,m:mr,X:mr,S:mr,M:mr},p:0,findDOMNode:null},Cp=Symbol.for("react.portal");function bp(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cp,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var Ui=wp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function eo(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Jt;Rt.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(Nc(299));return bp(t,a,null,r)};Rt.flushSync=function(t){var a=Ui.T,r=Jt.p;try{if(Ui.T=null,Jt.p=2,t)return t()}finally{Ui.T=a,Jt.p=r,Jt.d.f()}};Rt.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Jt.d.C(t,a))};Rt.prefetchDNS=function(t){typeof t=="string"&&Jt.d.D(t)};Rt.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=eo(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Jt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Jt.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};Rt.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=eo(a.as,a.crossOrigin);Jt.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Jt.d.M(t)};Rt.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=eo(r,a.crossOrigin);Jt.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};Rt.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=eo(a.as,a.crossOrigin);Jt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Jt.d.m(t)};Rt.requestFormReset=function(t){Jt.d.r(t)};Rt.unstable_batchedUpdates=function(t,a){return t(a)};Rt.useFormState=function(t,a,r){return Ui.H.useFormState(t,a,r)};Rt.useFormStatus=function(){return Ui.H.useHostTransitionStatus()};Rt.version="19.2.8"});var Uc=Lr((Vv,Oc)=>{"use strict";function Dc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dc)}catch(t){console.error(t)}}Dc(),Oc.exports=Ec()});var Is=Lr(Hl=>{"use strict";var Ht=Tc(),sh=Ja(),Bp=Uc();function m(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function gh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jn(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function ph(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function fh(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Zc(t){if(jn(t)!==t)throw Error(m(188))}function jp(t){var a=t.alternate;if(!a){if(a=jn(t),a===null)throw Error(m(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return Zc(i),t;if(n===e)return Zc(i),a;n=n.sibling}throw Error(m(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,d=i.child;d;){if(d===r){o=!0,r=i,e=n;break}if(d===e){o=!0,e=i,r=n;break}d=d.sibling}if(!o){for(d=n.child;d;){if(d===r){o=!0,r=n,e=i;break}if(d===e){o=!0,e=n,r=i;break}d=d.sibling}if(!o)throw Error(m(189))}}if(r.alternate!==e)throw Error(m(190))}if(r.tag!==3)throw Error(m(188));return r.stateNode.current===r?t:a}function vh(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=vh(t),a!==null)return a;t=t.sibling}return null}var ut=Object.assign,Wp=Symbol.for("react.element"),io=Symbol.for("react.transitional.element"),Ji=Symbol.for("react.portal"),De=Symbol.for("react.fragment"),kh=Symbol.for("react.strict_mode"),$2=Symbol.for("react.profiler"),xh=Symbol.for("react.consumer"),er=Symbol.for("react.context"),Q1=Symbol.for("react.forward_ref"),I2=Symbol.for("react.suspense"),P2=Symbol.for("react.suspense_list"),K1=Symbol.for("react.memo"),yr=Symbol.for("react.lazy"),t1=Symbol.for("react.activity"),Hp=Symbol.for("react.memo_cache_sentinel"),qc=Symbol.iterator;function Zi(t){return t===null||typeof t!="object"?null:(t=qc&&t[qc]||t["@@iterator"],typeof t=="function"?t:null)}var Sp=Symbol.for("react.client.reference");function a1(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Sp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case De:return"Fragment";case $2:return"Profiler";case kh:return"StrictMode";case I2:return"Suspense";case P2:return"SuspenseList";case t1:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ji:return"Portal";case er:return t.displayName||"Context";case xh:return(t._context.displayName||"Context")+".Consumer";case Q1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case K1:return a=t.displayName||null,a!==null?a:a1(t.type)||"Memo";case yr:a=t._payload,t=t._init;try{return a1(t(a))}catch{}}return null}var Ri=Array.isArray,V=sh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=Bp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},r1=[],Oe=-1;function Ga(t){return{current:t}}function Nt(t){0>Oe||(t.current=r1[Oe],r1[Oe]=null,Oe--)}function ot(t,a){Oe++,r1[Oe]=t.current,t.current=a}var qa=Ga(null),gn=Ga(null),zr=Ga(null),Do=Ga(null);function Oo(t,a){switch(ot(zr,a),ot(gn,t),ot(qa,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?R0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=R0(a),t=Ds(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Nt(qa),ot(qa,t)}function ei(){Nt(qa),Nt(gn),Nt(zr)}function e1(t){t.memoizedState!==null&&ot(Do,t);var a=qa.current,r=Ds(a,t.type);a!==r&&(ot(gn,t),ot(qa,r))}function Uo(t){gn.current===t&&(Nt(qa),Nt(gn)),Do.current===t&&(Nt(Do),Cn._currentValue=ee)}var x2,Gc;function Pr(t){if(x2===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);x2=a&&a[1]||"",Gc=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+x2+t+Gc}var L2=!1;function M2(t,a){if(!t||L2)return"";L2=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(x){var p=x}Reflect.construct(t,[],k)}else{try{k.call()}catch(x){p=x}t.call(k.prototype)}}else{try{throw Error()}catch(x){p=x}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(x){if(x&&p&&typeof x.stack=="string")return[x.stack,p.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],d=n[1];if(o&&d){var h=o.split(`
`),s=d.split(`
`);for(i=e=0;e<h.length&&!h[e].includes("DetermineComponentFrameRoot");)e++;for(;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;if(e===h.length||i===s.length)for(e=h.length-1,i=s.length-1;1<=e&&0<=i&&h[e]!==s[i];)i--;for(;1<=e&&0<=i;e--,i--)if(h[e]!==s[i]){if(e!==1||i!==1)do if(e--,i--,0>i||h[e]!==s[i]){var f=`
`+h[e].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=e&&0<=i);break}}}finally{L2=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Pr(r):""}function Ap(t,a){switch(t.tag){case 26:case 27:case 5:return Pr(t.type);case 16:return Pr("Lazy");case 13:return t.child!==a&&a!==null?Pr("Suspense Fallback"):Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 15:return M2(t.type,!1);case 11:return M2(t.type.render,!1);case 1:return M2(t.type,!0);case 31:return Pr("Activity");default:return""}}function Yc(t){try{var a="",r=null;do a+=Ap(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var i1=Object.prototype.hasOwnProperty,J1=Ht.unstable_scheduleCallback,m2=Ht.unstable_cancelCallback,Vp=Ht.unstable_shouldYield,zp=Ht.unstable_requestPaint,ua=Ht.unstable_now,_p=Ht.unstable_getCurrentPriorityLevel,Lh=Ht.unstable_ImmediatePriority,Mh=Ht.unstable_UserBlockingPriority,Zo=Ht.unstable_NormalPriority,Tp=Ht.unstable_LowPriority,mh=Ht.unstable_IdlePriority,Np=Ht.log,Ep=Ht.unstable_setDisableYieldValue,Wn=null,sa=null;function Wr(t){if(typeof Np=="function"&&Ep(t),sa&&typeof sa.setStrictMode=="function")try{sa.setStrictMode(Wn,t)}catch{}}var ga=Math.clz32?Math.clz32:Up,Dp=Math.log,Op=Math.LN2;function Up(t){return t>>>=0,t===0?32:31-(Dp(t)/Op|0)|0}var no=256,oo=262144,lo=4194304;function te(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gl(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var d=e&134217727;return d!==0?(e=d&~n,e!==0?i=te(e):(o&=d,o!==0?i=te(o):r||(r=d&~t,r!==0&&(i=te(r))))):(d=e&~n,d!==0?i=te(d):o!==0?i=te(o):r||(r=e&~t,r!==0&&(i=te(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function Hn(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Zp(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yh(){var t=lo;return lo<<=1,(lo&62914560)===0&&(lo=4194304),t}function y2(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function Sn(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qp(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var d=t.entanglements,h=t.expirationTimes,s=t.hiddenUpdates;for(r=o&~r;0<r;){var f=31-ga(r),k=1<<f;d[f]=0,h[f]=-1;var p=s[f];if(p!==null)for(s[f]=null,f=0;f<p.length;f++){var x=p[f];x!==null&&(x.lane&=-536870913)}r&=~k}e!==0&&wh(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function wh(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-ga(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function Ch(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-ga(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function bh(t,a){var r=a&-a;return r=(r&42)!==0?1:R1(r),(r&(t.suspendedLanes|a))!==0?0:r}function R1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function F1(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Bh(){var t=R.p;return t!==0?t:(t=window.event,t===void 0?32:Rs(t.type))}function Xc(t,a){var r=R.p;try{return R.p=t,a()}finally{R.p=r}}var Qr=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Qr,ea="__reactProps$"+Qr,pi="__reactContainer$"+Qr,n1="__reactEvents$"+Qr,Gp="__reactListeners$"+Qr,Yp="__reactHandles$"+Qr,Qc="__reactResources$"+Qr,An="__reactMarker$"+Qr;function $1(t){delete t[Ut],delete t[ea],delete t[n1],delete t[Gp],delete t[Yp]}function Ue(t){var a=t[Ut];if(a)return a;for(var r=t.parentNode;r;){if(a=r[pi]||r[Ut]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=th(t);t!==null;){if(r=t[Ut])return r;t=th(t)}return a}t=r,r=t.parentNode}return null}function fi(t){if(t=t[Ut]||t[pi]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Fi(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(m(33))}function Fe(t){var a=t[Qc];return a||(a=t[Qc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Tt(t){t[An]=!0}var jh=new Set,Wh={};function ge(t,a){ii(t,a),ii(t+"Capture",a)}function ii(t,a){for(Wh[t]=a,t=0;t<a.length;t++)jh.add(a[t])}var Xp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kc={},Jc={};function Qp(t){return i1.call(Jc,t)?!0:i1.call(Kc,t)?!1:Xp.test(t)?Jc[t]=!0:(Kc[t]=!0,!1)}function wo(t,a,r){if(Qp(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function co(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function Fa(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function ma(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hh(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Kp(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function o1(t){if(!t._valueTracker){var a=Hh(t)?"checked":"value";t._valueTracker=Kp(t,a,""+t[a])}}function Sh(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=Hh(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function qo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Jp=/[\n"\\]/g;function Ca(t){return t.replace(Jp,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function l1(t,a,r,e,i,n,o,d){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+ma(a)):t.value!==""+ma(a)&&(t.value=""+ma(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?d1(t,o,ma(a)):r!=null?d1(t,o,ma(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+ma(d):t.removeAttribute("name")}function Ah(t,a,r,e,i,n,o,d){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){o1(t);return}r=r!=null?""+ma(r):"",a=a!=null?""+ma(a):r,d||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=d?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),o1(t)}function d1(t,a,r){a==="number"&&qo(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function $e(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+ma(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function Vh(t,a,r){if(a!=null&&(a=""+ma(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+ma(r):""}function zh(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(m(92));if(Ri(e)){if(1<e.length)throw Error(m(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=ma(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),o1(t)}function ni(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var Rp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rc(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||Rp.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function _h(t,a,r){if(a!=null&&typeof a!="object")throw Error(m(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&Rc(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&Rc(t,n,a[n])}function I1(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$p=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Co(t){return $p.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ir(){}var c1=null;function P1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ze=null,Ie=null;function Fc(t){var a=fi(t);if(a&&(t=a.stateNode)){var r=t[ea]||null;t:switch(t=a.stateNode,a.type){case"input":if(l1(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ca(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[ea]||null;if(!i)throw Error(m(90));l1(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&Sh(e)}break t;case"textarea":Vh(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&$e(t,!!r.multiple,a,!1)}}}var w2=!1;function Th(t,a,r){if(w2)return t(a,r);w2=!0;try{var e=t(a);return e}finally{if(w2=!1,(Ze!==null||Ie!==null)&&(bl(),Ze&&(a=Ze,t=Ie,Ie=Ze=null,Fc(a),t)))for(a=0;a<t.length;a++)Fc(t[a])}}function pn(t,a){var r=t.stateNode;if(r===null)return null;var e=r[ea]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(m(231,a,typeof r));return r}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h1=!1;if(cr)try{ze={},Object.defineProperty(ze,"passive",{get:function(){h1=!0}}),window.addEventListener("test",ze,ze),window.removeEventListener("test",ze,ze)}catch{h1=!1}var ze,Hr=null,td=null,bo=null;function Nh(){if(bo)return bo;var t,a=td,r=a.length,e,i="value"in Hr?Hr.value:Hr.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return bo=i.slice(t,1<e?1-e:void 0)}function Bo(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function ho(){return!0}function $c(){return!1}function ia(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(r=t[d],this[d]=r?r(n):n[d]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?ho:$c,this.isPropagationStopped=$c,this}return ut(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),a}var pe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=ia(pe),Vn=ut({},pe,{view:0,detail:0}),Ip=ia(Vn),C2,b2,qi,fl=ut({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ad,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qi&&(qi&&t.type==="mousemove"?(C2=t.screenX-qi.screenX,b2=t.screenY-qi.screenY):b2=C2=0,qi=t),C2)},movementY:function(t){return"movementY"in t?t.movementY:b2}}),Ic=ia(fl),Pp=ut({},fl,{dataTransfer:0}),t5=ia(Pp),a5=ut({},Vn,{relatedTarget:0}),B2=ia(a5),r5=ut({},pe,{animationName:0,elapsedTime:0,pseudoElement:0}),e5=ia(r5),i5=ut({},pe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n5=ia(i5),o5=ut({},pe,{data:0}),Pc=ia(o5),l5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h5(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=c5[t])?!!a[t]:!1}function ad(){return h5}var u5=ut({},Vn,{key:function(t){if(t.key){var a=l5[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?d5[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ad,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s5=ia(u5),g5=ut({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),t0=ia(g5),p5=ut({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ad}),f5=ia(p5),v5=ut({},pe,{propertyName:0,elapsedTime:0,pseudoElement:0}),k5=ia(v5),x5=ut({},fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L5=ia(x5),M5=ut({},pe,{newState:0,oldState:0}),m5=ia(M5),y5=[9,13,27,32],rd=cr&&"CompositionEvent"in window,Pi=null;cr&&"documentMode"in document&&(Pi=document.documentMode);var w5=cr&&"TextEvent"in window&&!Pi,Eh=cr&&(!rd||Pi&&8<Pi&&11>=Pi),a0=" ",r0=!1;function Dh(t,a){switch(t){case"keyup":return y5.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qe=!1;function C5(t,a){switch(t){case"compositionend":return Oh(a);case"keypress":return a.which!==32?null:(r0=!0,a0);case"textInput":return t=a.data,t===a0&&r0?null:t;default:return null}}function b5(t,a){if(qe)return t==="compositionend"||!rd&&Dh(t,a)?(t=Nh(),bo=td=Hr=null,qe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Eh&&a.locale!=="ko"?null:a.data;default:return null}}var B5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function e0(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!B5[t.type]:a==="textarea"}function Uh(t,a,r,e){Ze?Ie?Ie.push(e):Ie=[e]:Ze=e,a=ol(a,"onChange"),0<a.length&&(r=new pl("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var tn=null,fn=null;function j5(t){Ts(t,0)}function vl(t){var a=Fi(t);if(Sh(a))return t}function i0(t,a){if(t==="change")return a}var Zh=!1;cr&&(cr?(so="oninput"in document,so||(j2=document.createElement("div"),j2.setAttribute("oninput","return;"),so=typeof j2.oninput=="function"),uo=so):uo=!1,Zh=uo&&(!document.documentMode||9<document.documentMode));var uo,so,j2;function n0(){tn&&(tn.detachEvent("onpropertychange",qh),fn=tn=null)}function qh(t){if(t.propertyName==="value"&&vl(fn)){var a=[];Uh(a,fn,t,P1(t)),Th(j5,a)}}function W5(t,a,r){t==="focusin"?(n0(),tn=a,fn=r,tn.attachEvent("onpropertychange",qh)):t==="focusout"&&n0()}function H5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(fn)}function S5(t,a){if(t==="click")return vl(a)}function A5(t,a){if(t==="input"||t==="change")return vl(a)}function V5(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var fa=typeof Object.is=="function"?Object.is:V5;function vn(t,a){if(fa(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!i1.call(a,i)||!fa(t[i],a[i]))return!1}return!0}function o0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function l0(t,a){var r=o0(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=o0(r)}}function Gh(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Gh(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Yh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=qo(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=qo(t.document)}return a}function ed(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var z5=cr&&"documentMode"in document&&11>=document.documentMode,Ge=null,u1=null,an=null,s1=!1;function d0(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;s1||Ge==null||Ge!==qo(e)||(e=Ge,"selectionStart"in e&&ed(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),an&&vn(an,e)||(an=e,e=ol(u1,"onSelect"),0<e.length&&(a=new pl("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=Ge)))}function Ir(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var Ye={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionrun:Ir("Transition","TransitionRun"),transitionstart:Ir("Transition","TransitionStart"),transitioncancel:Ir("Transition","TransitionCancel"),transitionend:Ir("Transition","TransitionEnd")},W2={},Xh={};cr&&(Xh=document.createElement("div").style,"AnimationEvent"in window||(delete Ye.animationend.animation,delete Ye.animationiteration.animation,delete Ye.animationstart.animation),"TransitionEvent"in window||delete Ye.transitionend.transition);function fe(t){if(W2[t])return W2[t];if(!Ye[t])return t;var a=Ye[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in Xh)return W2[t]=a[r];return t}var Qh=fe("animationend"),Kh=fe("animationiteration"),Jh=fe("animationstart"),_5=fe("transitionrun"),T5=fe("transitionstart"),N5=fe("transitioncancel"),Rh=fe("transitionend"),Fh=new Map,g1="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");g1.push("scrollEnd");function Na(t,a){Fh.set(t,a),ge(a,[t])}var Go=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ma=[],Xe=0,id=0;function kl(){for(var t=Xe,a=id=Xe=0;a<t;){var r=Ma[a];Ma[a++]=null;var e=Ma[a];Ma[a++]=null;var i=Ma[a];Ma[a++]=null;var n=Ma[a];if(Ma[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&$h(r,i,n)}}function xl(t,a,r,e){Ma[Xe++]=t,Ma[Xe++]=a,Ma[Xe++]=r,Ma[Xe++]=e,id|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function nd(t,a,r,e){return xl(t,a,r,e),Yo(t)}function ve(t,a){return xl(t,null,null,a),Yo(t)}function $h(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-ga(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function Yo(t){if(50<un)throw un=0,_1=null,Error(m(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Qe={};function E5(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ca(t,a,r,e){return new E5(t,a,r,e)}function od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function or(t,a){var r=t.alternate;return r===null?(r=ca(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Ih(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function jo(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")od(t)&&(o=1);else if(typeof t=="string")o=Zf(t,r,qa.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case t1:return t=ca(31,r,a,i),t.elementType=t1,t.lanes=n,t;case De:return ie(r.children,i,n,a);case kh:o=8,i|=24;break;case $2:return t=ca(12,r,a,i|2),t.elementType=$2,t.lanes=n,t;case I2:return t=ca(13,r,a,i),t.elementType=I2,t.lanes=n,t;case P2:return t=ca(19,r,a,i),t.elementType=P2,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case er:o=10;break t;case xh:o=9;break t;case Q1:o=11;break t;case K1:o=14;break t;case yr:o=16,e=null;break t}o=29,r=Error(m(130,t===null?"null":typeof t,"")),e=null}return a=ca(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function ie(t,a,r,e){return t=ca(7,t,e,a),t.lanes=r,t}function H2(t,a,r){return t=ca(6,t,null,a),t.lanes=r,t}function Ph(t){var a=ca(18,null,null,0);return a.stateNode=t,a}function S2(t,a,r){return a=ca(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var c0=new WeakMap;function ba(t,a){if(typeof t=="object"&&t!==null){var r=c0.get(t);return r!==void 0?r:(a={value:t,source:a,stack:Yc(a)},c0.set(t,a),a)}return{value:t,source:a,stack:Yc(a)}}var Ke=[],Je=0,Xo=null,kn=0,ya=[],wa=0,qr=null,Oa=1,Ua="";function ar(t,a){Ke[Je++]=kn,Ke[Je++]=Xo,Xo=t,kn=a}function tu(t,a,r){ya[wa++]=Oa,ya[wa++]=Ua,ya[wa++]=qr,qr=t;var e=Oa;t=Ua;var i=32-ga(e)-1;e&=~(1<<i),r+=1;var n=32-ga(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,Oa=1<<32-ga(a)+i|r<<i|e,Ua=n+t}else Oa=1<<n|r<<i|e,Ua=t}function ld(t){t.return!==null&&(ar(t,1),tu(t,1,0))}function dd(t){for(;t===Xo;)Xo=Ke[--Je],Ke[Je]=null,kn=Ke[--Je],Ke[Je]=null;for(;t===qr;)qr=ya[--wa],ya[wa]=null,Ua=ya[--wa],ya[wa]=null,Oa=ya[--wa],ya[wa]=null}function au(t,a){ya[wa++]=Oa,ya[wa++]=Ua,ya[wa++]=qr,Oa=a.id,Ua=a.overflow,qr=t}var Zt=null,ht=null,Q=!1,_r=null,Ba=!1,p1=Error(m(519));function Gr(t){var a=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xn(ba(a,t)),p1}function h0(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[Ut]=t,a[ea]=e,r){case"dialog":U("cancel",a),U("close",a);break;case"iframe":case"object":case"embed":U("load",a);break;case"video":case"audio":for(r=0;r<yn.length;r++)U(yn[r],a);break;case"source":U("error",a);break;case"img":case"image":case"link":U("error",a),U("load",a);break;case"details":U("toggle",a);break;case"input":U("invalid",a),Ah(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":U("invalid",a);break;case"textarea":U("invalid",a),zh(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||Es(a.textContent,r)?(e.popover!=null&&(U("beforetoggle",a),U("toggle",a)),e.onScroll!=null&&U("scroll",a),e.onScrollEnd!=null&&U("scrollend",a),e.onClick!=null&&(a.onclick=ir),a=!0):a=!1,a||Gr(t,!0)}function u0(t){for(Zt=t.return;Zt;)switch(Zt.tag){case 5:case 31:case 13:Ba=!1;return;case 27:case 3:Ba=!0;return;default:Zt=Zt.return}}function _e(t){if(t!==Zt)return!1;if(!Q)return u0(t),Q=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||O1(t.type,t.memoizedProps)),r=!r),r&&ht&&Gr(t),u0(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));ht=P0(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));ht=P0(t)}else a===27?(a=ht,Kr(t.type)?(t=G1,G1=null,ht=t):ht=a):ht=Zt?Wa(t.stateNode.nextSibling):null;return!0}function de(){ht=Zt=null,Q=!1}function A2(){var t=_r;return t!==null&&(aa===null?aa=t:aa.push.apply(aa,t),_r=null),t}function xn(t){_r===null?_r=[t]:_r.push(t)}var f1=Ga(null),ke=null,nr=null;function Cr(t,a,r){ot(f1,a._currentValue),a._currentValue=r}function lr(t){t._currentValue=f1.current,Nt(f1)}function v1(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function k1(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var d=n;n=i;for(var h=0;h<a.length;h++)if(d.context===a[h]){n.lanes|=r,d=n.alternate,d!==null&&(d.lanes|=r),v1(n.return,r,t),e||(o=null);break t}n=d.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),v1(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function vi(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(m(387));if(o=o.memoizedProps,o!==null){var d=i.type;fa(i.pendingProps.value,o.value)||(t!==null?t.push(d):t=[d])}}else if(i===Do.current){if(o=i.alternate,o===null)throw Error(m(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Cn):t=[Cn])}i=i.return}t!==null&&k1(a,t,r,e),a.flags|=262144}function Qo(t){for(t=t.firstContext;t!==null;){if(!fa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ce(t){ke=t,nr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qt(t){return ru(ke,t)}function go(t,a){return ke===null&&ce(t),ru(t,a)}function ru(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},nr===null){if(t===null)throw Error(m(308));nr=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else nr=nr.next=a;return r}var D5=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},O5=Ht.unstable_scheduleCallback,U5=Ht.unstable_NormalPriority,Bt={$$typeof:er,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cd(){return{controller:new D5,data:new Map,refCount:0}}function zn(t){t.refCount--,t.refCount===0&&O5(U5,function(){t.controller.abort()})}var rn=null,x1=0,oi=0,Pe=null;function Z5(t,a){if(rn===null){var r=rn=[];x1=0,oi=_d(),Pe={status:"pending",value:void 0,then:function(e){r.push(e)}}}return x1++,a.then(s0,s0),a}function s0(){if(--x1===0&&rn!==null){Pe!==null&&(Pe.status="fulfilled");var t=rn;rn=null,oi=0,Pe=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function q5(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var g0=V.S;V.S=function(t,a){vs=ua(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Z5(t,a),g0!==null&&g0(t,a)};var ne=Ga(null);function hd(){var t=ne.current;return t!==null?t:nt.pooledCache}function Wo(t,a){a===null?ot(ne,ne.current):ot(ne,a.pool)}function eu(){var t=hd();return t===null?null:{parent:Bt._currentValue,pool:t}}var ki=Error(m(460)),ud=Error(m(474)),Ll=Error(m(542)),Ko={then:function(){}};function p0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function iu(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(ir,ir),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,v0(t),t;default:if(typeof a.status=="string")a.then(ir,ir);else{if(t=nt,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,v0(t),t}throw oe=a,ki}}function ae(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(oe=r,ki):r}}var oe=null;function f0(){if(oe===null)throw Error(m(459));var t=oe;return oe=null,t}function v0(t){if(t===ki||t===Ll)throw Error(m(483))}var ti=null,Ln=0;function po(t){var a=Ln;return Ln+=1,ti===null&&(ti=[]),iu(ti,t,a)}function Gi(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function fo(t,a){throw a.$$typeof===Wp?Error(m(525)):(t=Object.prototype.toString.call(a),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function nu(t){function a(g,u){if(t){var v=g.deletions;v===null?(g.deletions=[u],g.flags|=16):v.push(u)}}function r(g,u){if(!t)return null;for(;u!==null;)a(g,u),u=u.sibling;return null}function e(g){for(var u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function i(g,u){return g=or(g,u),g.index=0,g.sibling=null,g}function n(g,u,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<u?(g.flags|=67108866,u):v):(g.flags|=67108866,u)):(g.flags|=1048576,u)}function o(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function d(g,u,v,L){return u===null||u.tag!==6?(u=H2(v,g.mode,L),u.return=g,u):(u=i(u,v),u.return=g,u)}function h(g,u,v,L){var W=v.type;return W===De?f(g,u,v.props.children,L,v.key):u!==null&&(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===yr&&ae(W)===u.type)?(u=i(u,v.props),Gi(u,v),u.return=g,u):(u=jo(v.type,v.key,v.props,null,g.mode,L),Gi(u,v),u.return=g,u)}function s(g,u,v,L){return u===null||u.tag!==4||u.stateNode.containerInfo!==v.containerInfo||u.stateNode.implementation!==v.implementation?(u=S2(v,g.mode,L),u.return=g,u):(u=i(u,v.children||[]),u.return=g,u)}function f(g,u,v,L,W){return u===null||u.tag!==7?(u=ie(v,g.mode,L,W),u.return=g,u):(u=i(u,v),u.return=g,u)}function k(g,u,v){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=H2(""+u,g.mode,v),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case io:return v=jo(u.type,u.key,u.props,null,g.mode,v),Gi(v,u),v.return=g,v;case Ji:return u=S2(u,g.mode,v),u.return=g,u;case yr:return u=ae(u),k(g,u,v)}if(Ri(u)||Zi(u))return u=ie(u,g.mode,v,null),u.return=g,u;if(typeof u.then=="function")return k(g,po(u),v);if(u.$$typeof===er)return k(g,go(g,u),v);fo(g,u)}return null}function p(g,u,v,L){var W=u!==null?u.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return W!==null?null:d(g,u,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case io:return v.key===W?h(g,u,v,L):null;case Ji:return v.key===W?s(g,u,v,L):null;case yr:return v=ae(v),p(g,u,v,L)}if(Ri(v)||Zi(v))return W!==null?null:f(g,u,v,L,null);if(typeof v.then=="function")return p(g,u,po(v),L);if(v.$$typeof===er)return p(g,u,go(g,v),L);fo(g,v)}return null}function x(g,u,v,L,W){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return g=g.get(v)||null,d(u,g,""+L,W);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case io:return g=g.get(L.key===null?v:L.key)||null,h(u,g,L,W);case Ji:return g=g.get(L.key===null?v:L.key)||null,s(u,g,L,W);case yr:return L=ae(L),x(g,u,v,L,W)}if(Ri(L)||Zi(L))return g=g.get(v)||null,f(u,g,L,W,null);if(typeof L.then=="function")return x(g,u,v,po(L),W);if(L.$$typeof===er)return x(g,u,v,go(u,L),W);fo(u,L)}return null}function y(g,u,v,L){for(var W=null,z=null,B=u,A=u=0,T=null;B!==null&&A<v.length;A++){B.index>A?(T=B,B=null):T=B.sibling;var D=p(g,B,v[A],L);if(D===null){B===null&&(B=T);break}t&&B&&D.alternate===null&&a(g,B),u=n(D,u,A),z===null?W=D:z.sibling=D,z=D,B=T}if(A===v.length)return r(g,B),Q&&ar(g,A),W;if(B===null){for(;A<v.length;A++)B=k(g,v[A],L),B!==null&&(u=n(B,u,A),z===null?W=B:z.sibling=B,z=B);return Q&&ar(g,A),W}for(B=e(B);A<v.length;A++)T=x(B,g,A,v[A],L),T!==null&&(t&&T.alternate!==null&&B.delete(T.key===null?A:T.key),u=n(T,u,A),z===null?W=T:z.sibling=T,z=T);return t&&B.forEach(function(st){return a(g,st)}),Q&&ar(g,A),W}function b(g,u,v,L){if(v==null)throw Error(m(151));for(var W=null,z=null,B=u,A=u=0,T=null,D=v.next();B!==null&&!D.done;A++,D=v.next()){B.index>A?(T=B,B=null):T=B.sibling;var st=p(g,B,D.value,L);if(st===null){B===null&&(B=T);break}t&&B&&st.alternate===null&&a(g,B),u=n(st,u,A),z===null?W=st:z.sibling=st,z=st,B=T}if(D.done)return r(g,B),Q&&ar(g,A),W;if(B===null){for(;!D.done;A++,D=v.next())D=k(g,D.value,L),D!==null&&(u=n(D,u,A),z===null?W=D:z.sibling=D,z=D);return Q&&ar(g,A),W}for(B=e(B);!D.done;A++,D=v.next())D=x(B,g,A,D.value,L),D!==null&&(t&&D.alternate!==null&&B.delete(D.key===null?A:D.key),u=n(D,u,A),z===null?W=D:z.sibling=D,z=D);return t&&B.forEach(function(ka){return a(g,ka)}),Q&&ar(g,A),W}function E(g,u,v,L){if(typeof v=="object"&&v!==null&&v.type===De&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case io:t:{for(var W=v.key;u!==null;){if(u.key===W){if(W=v.type,W===De){if(u.tag===7){r(g,u.sibling),L=i(u,v.props.children),L.return=g,g=L;break t}}else if(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===yr&&ae(W)===u.type){r(g,u.sibling),L=i(u,v.props),Gi(L,v),L.return=g,g=L;break t}r(g,u);break}else a(g,u);u=u.sibling}v.type===De?(L=ie(v.props.children,g.mode,L,v.key),L.return=g,g=L):(L=jo(v.type,v.key,v.props,null,g.mode,L),Gi(L,v),L.return=g,g=L)}return o(g);case Ji:t:{for(W=v.key;u!==null;){if(u.key===W)if(u.tag===4&&u.stateNode.containerInfo===v.containerInfo&&u.stateNode.implementation===v.implementation){r(g,u.sibling),L=i(u,v.children||[]),L.return=g,g=L;break t}else{r(g,u);break}else a(g,u);u=u.sibling}L=S2(v,g.mode,L),L.return=g,g=L}return o(g);case yr:return v=ae(v),E(g,u,v,L)}if(Ri(v))return y(g,u,v,L);if(Zi(v)){if(W=Zi(v),typeof W!="function")throw Error(m(150));return v=W.call(v),b(g,u,v,L)}if(typeof v.then=="function")return E(g,u,po(v),L);if(v.$$typeof===er)return E(g,u,go(g,v),L);fo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,u!==null&&u.tag===6?(r(g,u.sibling),L=i(u,v),L.return=g,g=L):(r(g,u),L=H2(v,g.mode,L),L.return=g,g=L),o(g)):r(g,u)}return function(g,u,v,L){try{Ln=0;var W=E(g,u,v,L);return ti=null,W}catch(B){if(B===ki||B===Ll)throw B;var z=ca(29,B,null,g.mode);return z.lanes=L,z.return=g,z}}}var he=nu(!0),ou=nu(!1),wr=!1;function sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function L1(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Tr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Nr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(J&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=Yo(t),$h(t,null,r),a}return xl(t,e,a,r),Yo(t)}function en(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,Ch(t,r)}}function V2(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var M1=!1;function nn(){if(M1){var t=Pe;if(t!==null)throw t}}function on(t,a,r,e){M1=!1;var i=t.updateQueue;wr=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var h=d,s=h.next;h.next=null,o===null?n=s:o.next=s,o=h;var f=t.alternate;f!==null&&(f=f.updateQueue,d=f.lastBaseUpdate,d!==o&&(d===null?f.firstBaseUpdate=s:d.next=s,f.lastBaseUpdate=h))}if(n!==null){var k=i.baseState;o=0,f=s=h=null,d=n;do{var p=d.lane&-536870913,x=p!==d.lane;if(x?(G&p)===p:(e&p)===p){p!==0&&p===oi&&(M1=!0),f!==null&&(f=f.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var y=t,b=d;p=a;var E=r;switch(b.tag){case 1:if(y=b.payload,typeof y=="function"){k=y.call(E,k,p);break t}k=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,p=typeof y=="function"?y.call(E,k,p):y,p==null)break t;k=ut({},k,p);break t;case 2:wr=!0}}p=d.callback,p!==null&&(t.flags|=64,x&&(t.flags|=8192),x=i.callbacks,x===null?i.callbacks=[p]:x.push(p))}else x={lane:p,tag:d.tag,payload:d.payload,callback:d.callback,next:null},f===null?(s=f=x,h=k):f=f.next=x,o|=p;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;x=d,d=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);f===null&&(h=k),i.baseState=h,i.firstBaseUpdate=s,i.lastBaseUpdate=f,n===null&&(i.shared.lanes=0),Xr|=o,t.lanes=o,t.memoizedState=k}}function lu(t,a){if(typeof t!="function")throw Error(m(191,t));t.call(a)}function du(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)lu(r[t],a)}var li=Ga(null),Jo=Ga(0);function k0(t,a){t=gr,ot(Jo,t),ot(li,a),gr=t|a.baseLanes}function m1(){ot(Jo,gr),ot(li,li.current)}function gd(){gr=Jo.current,Nt(li),Nt(Jo)}var va=Ga(null),ja=null;function br(t){var a=t.alternate;ot(xt,xt.current&1),ot(va,t),ja===null&&(a===null||li.current!==null||a.memoizedState!==null)&&(ja=t)}function y1(t){ot(xt,xt.current),ot(va,t),ja===null&&(ja=t)}function cu(t){t.tag===22?(ot(xt,xt.current),ot(va,t),ja===null&&(ja=t)):Br(t)}function Br(){ot(xt,xt.current),ot(va,va.current)}function da(t){Nt(va),ja===t&&(ja=null),Nt(xt)}var xt=Ga(0);function Ro(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Z1(r)||q1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var hr=0,N=null,et=null,Ct=null,Fo=!1,ai=!1,ue=!1,$o=0,Mn=0,ri=null,G5=0;function ft(){throw Error(m(321))}function pd(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!fa(t[r],a[r]))return!1;return!0}function fd(t,a,r,e,i,n){return hr=n,N=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,V.H=t===null||t.memoizedState===null?Uu:Bd,ue=!1,n=r(e,i),ue=!1,ai&&(n=uu(a,r,e,i)),hu(t),n}function hu(t){V.H=mn;var a=et!==null&&et.next!==null;if(hr=0,Ct=et=N=null,Fo=!1,Mn=0,ri=null,a)throw Error(m(300));t===null||jt||(t=t.dependencies,t!==null&&Qo(t)&&(jt=!0))}function uu(t,a,r,e){N=t;var i=0;do{if(ai&&(ri=null),Mn=0,ai=!1,25<=i)throw Error(m(301));if(i+=1,Ct=et=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}V.H=Zu,n=a(r,e)}while(ai);return n}function Y5(){var t=V.H,a=t.useState()[0];return a=typeof a.then=="function"?_n(a):a,t=t.useState()[0],(et!==null?et.memoizedState:null)!==t&&(N.flags|=1024),a}function vd(){var t=$o!==0;return $o=0,t}function kd(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function xd(t){if(Fo){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Fo=!1}hr=0,Ct=et=N=null,ai=!1,Mn=$o=0,ri=null}function Ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?N.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Lt(){if(et===null){var t=N.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var a=Ct===null?N.memoizedState:Ct.next;if(a!==null)Ct=a,et=t;else{if(t===null)throw N.alternate===null?Error(m(467)):Error(m(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},Ct===null?N.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _n(t){var a=Mn;return Mn+=1,ri===null&&(ri=[]),t=iu(ri,t,a),a=N,(Ct===null?a.memoizedState:Ct.next)===null&&(a=a.alternate,V.H=a===null||a.memoizedState===null?Uu:Bd),t}function ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _n(t);if(t.$$typeof===er)return qt(t)}throw Error(m(438,String(t)))}function Ld(t){var a=null,r=N.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=N.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=Ml(),N.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=Hp;return a.index++,r}function ur(t,a){return typeof a=="function"?a(t):a}function Ho(t){var a=Lt();return Md(a,et,t)}function Md(t,a,r){var e=t.queue;if(e===null)throw Error(m(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var d=o=null,h=null,s=a,f=!1;do{var k=s.lane&-536870913;if(k!==s.lane?(G&k)===k:(hr&k)===k){var p=s.revertLane;if(p===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),k===oi&&(f=!0);else if((hr&p)===p){s=s.next,p===oi&&(f=!0);continue}else k={lane:0,revertLane:s.revertLane,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},h===null?(d=h=k,o=n):h=h.next=k,N.lanes|=p,Xr|=p;k=s.action,ue&&r(n,k),n=s.hasEagerState?s.eagerState:r(n,k)}else p={lane:k,revertLane:s.revertLane,gesture:s.gesture,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},h===null?(d=h=p,o=n):h=h.next=p,N.lanes|=k,Xr|=k;s=s.next}while(s!==null&&s!==a);if(h===null?o=n:h.next=d,!fa(n,t.memoizedState)&&(jt=!0,f&&(r=Pe,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=h,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function z2(t){var a=Lt(),r=a.queue;if(r===null)throw Error(m(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);fa(n,a.memoizedState)||(jt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function su(t,a,r){var e=N,i=Lt(),n=Q;if(n){if(r===void 0)throw Error(m(407));r=r()}else r=a();var o=!fa((et||i).memoizedState,r);if(o&&(i.memoizedState=r,jt=!0),i=i.queue,md(fu.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||Ct!==null&&Ct.memoizedState.tag&1){if(e.flags|=2048,di(9,{destroy:void 0},pu.bind(null,e,i,r,a),null),nt===null)throw Error(m(349));n||(hr&127)!==0||gu(e,a,r)}return r}function gu(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=N.updateQueue,a===null?(a=Ml(),N.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function pu(t,a,r,e){a.value=r,a.getSnapshot=e,vu(a)&&ku(t)}function fu(t,a,r){return r(function(){vu(a)&&ku(t)})}function vu(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!fa(t,r)}catch{return!0}}function ku(t){var a=ve(t,2);a!==null&&ra(a,t,2)}function w1(t){var a=Ft();if(typeof t=="function"){var r=t;if(t=r(),ue){Wr(!0);try{r()}finally{Wr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:t},a}function xu(t,a,r,e){return t.baseState=r,Md(t,et,typeof e=="function"?e:ur)}function X5(t,a,r,e,i){if(wl(t))throw Error(m(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};V.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,Lu(a,n)):(n.next=r.next,a.pending=r.next=n)}}function Lu(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=V.T,o={};V.T=o;try{var d=r(i,e),h=V.S;h!==null&&h(o,d),x0(t,a,d)}catch(s){C1(t,a,s)}finally{n!==null&&o.types!==null&&(n.types=o.types),V.T=n}}else try{n=r(i,e),x0(t,a,n)}catch(s){C1(t,a,s)}}function x0(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){L0(t,a,e)},function(e){return C1(t,a,e)}):L0(t,a,r)}function L0(t,a,r){a.status="fulfilled",a.value=r,Mu(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,Lu(t,r)))}function C1(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,Mu(a),a=a.next;while(a!==e)}t.action=null}function Mu(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function mu(t,a){return a}function M0(t,a){if(Q){var r=nt.formState;if(r!==null){t:{var e=N;if(Q){if(ht){a:{for(var i=ht,n=Ba;i.nodeType!==8;){if(!n){i=null;break a}if(i=Wa(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){ht=Wa(i.nextSibling),e=i.data==="F!";break t}}Gr(e)}e=!1}e&&(a=r[0])}}return r=Ft(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mu,lastRenderedState:a},r.queue=e,r=Eu.bind(null,N,e),e.dispatch=r,e=w1(!1),n=bd.bind(null,N,!1,e.queue),e=Ft(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=X5.bind(null,N,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function m0(t){var a=Lt();return yu(a,et,t)}function yu(t,a,r){if(a=Md(t,a,mu)[0],t=Ho(ur)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=_n(a)}catch(o){throw o===ki?Ll:o}else e=a;a=Lt();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(N.flags|=2048,di(9,{destroy:void 0},Q5.bind(null,i,r),null)),[e,n,t]}function Q5(t,a){t.action=a}function y0(t){var a=Lt(),r=et;if(r!==null)return yu(a,r,t);Lt(),a=a.memoizedState,r=Lt();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function di(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=N.updateQueue,a===null&&(a=Ml(),N.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function wu(){return Lt().memoizedState}function So(t,a,r,e){var i=Ft();N.flags|=t,i.memoizedState=di(1|a,{destroy:void 0},r,e===void 0?null:e)}function yl(t,a,r,e){var i=Lt();e=e===void 0?null:e;var n=i.memoizedState.inst;et!==null&&e!==null&&pd(e,et.memoizedState.deps)?i.memoizedState=di(a,n,r,e):(N.flags|=t,i.memoizedState=di(1|a,n,r,e))}function w0(t,a){So(8390656,8,t,a)}function md(t,a){yl(2048,8,t,a)}function K5(t){N.flags|=4;var a=N.updateQueue;if(a===null)a=Ml(),N.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function Cu(t){var a=Lt().memoizedState;return K5({ref:a,nextImpl:t}),function(){if((J&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}function bu(t,a){return yl(4,2,t,a)}function Bu(t,a){return yl(4,4,t,a)}function ju(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Wu(t,a,r){r=r!=null?r.concat([t]):null,yl(4,4,ju.bind(null,a,t),r)}function yd(){}function Hu(t,a){var r=Lt();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&pd(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function Su(t,a){var r=Lt();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&pd(a,e[1]))return e[0];if(e=t(),ue){Wr(!0);try{t()}finally{Wr(!1)}}return r.memoizedState=[e,a],e}function wd(t,a,r){return r===void 0||(hr&1073741824)!==0&&(G&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=xs(),N.lanes|=t,Xr|=t,r)}function Au(t,a,r,e){return fa(r,a)?r:li.current!==null?(t=wd(t,r,e),fa(t,a)||(jt=!0),t):(hr&42)===0||(hr&1073741824)!==0&&(G&261930)===0?(jt=!0,t.memoizedState=r):(t=xs(),N.lanes|=t,Xr|=t,a)}function Vu(t,a,r,e,i){var n=R.p;R.p=n!==0&&8>n?n:8;var o=V.T,d={};V.T=d,bd(t,!1,a,r);try{var h=i(),s=V.S;if(s!==null&&s(d,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var f=q5(h,e);ln(t,a,f,pa(t))}else ln(t,a,e,pa(t))}catch(k){ln(t,a,{then:function(){},status:"rejected",reason:k},pa())}finally{R.p=n,o!==null&&d.types!==null&&(o.types=d.types),V.T=o}}function J5(){}function b1(t,a,r,e){if(t.tag!==5)throw Error(m(476));var i=zu(t).queue;Vu(t,i,a,ee,r===null?J5:function(){return _u(t),r(e)})}function zu(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:ee},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function _u(t){var a=zu(t);a.next===null&&(a=t.alternate.memoizedState),ln(t,a.next.queue,{},pa())}function Cd(){return qt(Cn)}function Tu(){return Lt().memoizedState}function Nu(){return Lt().memoizedState}function R5(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=pa();t=Tr(r);var e=Nr(a,t,r);e!==null&&(ra(e,a,r),en(e,a,r)),a={cache:cd()},t.payload=a;return}a=a.return}}function F5(t,a,r){var e=pa();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},wl(t)?Du(a,r):(r=nd(t,a,r,e),r!==null&&(ra(r,t,e),Ou(r,a,e)))}function Eu(t,a,r){var e=pa();ln(t,a,r,e)}function ln(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(wl(t))Du(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,d=n(o,r);if(i.hasEagerState=!0,i.eagerState=d,fa(d,o))return xl(t,a,i,0),nt===null&&kl(),!1}catch{}if(r=nd(t,a,i,e),r!==null)return ra(r,t,e),Ou(r,a,e),!0}return!1}function bd(t,a,r,e){if(e={lane:2,revertLane:_d(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},wl(t)){if(a)throw Error(m(479))}else a=nd(t,r,e,2),a!==null&&ra(a,t,2)}function wl(t){var a=t.alternate;return t===N||a!==null&&a===N}function Du(t,a){ai=Fo=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function Ou(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,Ch(t,r)}}var mn={readContext:qt,use:ml,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useInsertionEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useSyncExternalStore:ft,useId:ft,useHostTransitionStatus:ft,useFormState:ft,useActionState:ft,useOptimistic:ft,useMemoCache:ft,useCacheRefresh:ft};mn.useEffectEvent=ft;var Uu={readContext:qt,use:ml,useCallback:function(t,a){return Ft().memoizedState=[t,a===void 0?null:a],t},useContext:qt,useEffect:w0,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,So(4194308,4,ju.bind(null,a,t),r)},useLayoutEffect:function(t,a){return So(4194308,4,t,a)},useInsertionEffect:function(t,a){So(4,2,t,a)},useMemo:function(t,a){var r=Ft();a=a===void 0?null:a;var e=t();if(ue){Wr(!0);try{t()}finally{Wr(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=Ft();if(r!==void 0){var i=r(a);if(ue){Wr(!0);try{r(a)}finally{Wr(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=F5.bind(null,N,t),[e.memoizedState,t]},useRef:function(t){var a=Ft();return t={current:t},a.memoizedState=t},useState:function(t){t=w1(t);var a=t.queue,r=Eu.bind(null,N,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:yd,useDeferredValue:function(t,a){var r=Ft();return wd(r,t,a)},useTransition:function(){var t=w1(!1);return t=Vu.bind(null,N,t.queue,!0,!1),Ft().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=N,i=Ft();if(Q){if(r===void 0)throw Error(m(407));r=r()}else{if(r=a(),nt===null)throw Error(m(349));(G&127)!==0||gu(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,w0(fu.bind(null,e,n,t),[t]),e.flags|=2048,di(9,{destroy:void 0},pu.bind(null,e,n,r,a),null),r},useId:function(){var t=Ft(),a=nt.identifierPrefix;if(Q){var r=Ua,e=Oa;r=(e&~(1<<32-ga(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=$o++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=G5++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:Cd,useFormState:M0,useActionState:M0,useOptimistic:function(t){var a=Ft();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=bd.bind(null,N,!0,r),r.dispatch=a,[t,a]},useMemoCache:Ld,useCacheRefresh:function(){return Ft().memoizedState=R5.bind(null,N)},useEffectEvent:function(t){var a=Ft(),r={impl:t};return a.memoizedState=r,function(){if((J&2)!==0)throw Error(m(440));return r.impl.apply(void 0,arguments)}}},Bd={readContext:qt,use:ml,useCallback:Hu,useContext:qt,useEffect:md,useImperativeHandle:Wu,useInsertionEffect:bu,useLayoutEffect:Bu,useMemo:Su,useReducer:Ho,useRef:wu,useState:function(){return Ho(ur)},useDebugValue:yd,useDeferredValue:function(t,a){var r=Lt();return Au(r,et.memoizedState,t,a)},useTransition:function(){var t=Ho(ur)[0],a=Lt().memoizedState;return[typeof t=="boolean"?t:_n(t),a]},useSyncExternalStore:su,useId:Tu,useHostTransitionStatus:Cd,useFormState:m0,useActionState:m0,useOptimistic:function(t,a){var r=Lt();return xu(r,et,t,a)},useMemoCache:Ld,useCacheRefresh:Nu};Bd.useEffectEvent=Cu;var Zu={readContext:qt,use:ml,useCallback:Hu,useContext:qt,useEffect:md,useImperativeHandle:Wu,useInsertionEffect:bu,useLayoutEffect:Bu,useMemo:Su,useReducer:z2,useRef:wu,useState:function(){return z2(ur)},useDebugValue:yd,useDeferredValue:function(t,a){var r=Lt();return et===null?wd(r,t,a):Au(r,et.memoizedState,t,a)},useTransition:function(){var t=z2(ur)[0],a=Lt().memoizedState;return[typeof t=="boolean"?t:_n(t),a]},useSyncExternalStore:su,useId:Tu,useHostTransitionStatus:Cd,useFormState:y0,useActionState:y0,useOptimistic:function(t,a){var r=Lt();return et!==null?xu(r,et,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Ld,useCacheRefresh:Nu};Zu.useEffectEvent=Cu;function _2(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:ut({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var B1={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=pa(),i=Tr(e);i.payload=a,r!=null&&(i.callback=r),a=Nr(t,i,e),a!==null&&(ra(a,t,e),en(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=pa(),i=Tr(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=Nr(t,i,e),a!==null&&(ra(a,t,e),en(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=pa(),e=Tr(r);e.tag=2,a!=null&&(e.callback=a),a=Nr(t,e,r),a!==null&&(ra(a,t,r),en(a,t,r))}};function C0(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!vn(r,e)||!vn(i,n):!0}function b0(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&B1.enqueueReplaceState(a,a.state,null)}function se(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=ut({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function qu(t){Go(t)}function Gu(t){console.error(t)}function Yu(t){Go(t)}function Io(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function B0(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function j1(t,a,r){return r=Tr(r),r.tag=3,r.payload={element:null},r.callback=function(){Io(t,a)},r}function Xu(t){return t=Tr(t),t.tag=3,t}function Qu(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){B0(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){B0(a,r,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var d=e.stack;this.componentDidCatch(e.value,{componentStack:d!==null?d:""})})}function $5(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&vi(a,r,i,!0),r=va.current,r!==null){switch(r.tag){case 31:case 13:return ja===null?el():r.alternate===null&&vt===0&&(vt=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===Ko?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),X2(t,e,i)),!1;case 22:return r.flags|=65536,e===Ko?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),X2(t,e,i)),!1}throw Error(m(435,r.tag))}return X2(t,e,i),el(),!1}if(Q)return a=va.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==p1&&(t=Error(m(422),{cause:e}),xn(ba(t,r)))):(e!==p1&&(a=Error(m(423),{cause:e}),xn(ba(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=ba(e,r),i=j1(t.stateNode,e,i),V2(t,i),vt!==4&&(vt=2)),!1;var n=Error(m(520),{cause:e});if(n=ba(n,r),hn===null?hn=[n]:hn.push(n),vt!==4&&(vt=2),a===null)return!0;e=ba(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=j1(r.stateNode,e,t),V2(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Er===null||!Er.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=Xu(i),Qu(i,t,r,e),V2(r,i),!1}r=r.return}while(r!==null);return!1}var jd=Error(m(461)),jt=!1;function Ot(t,a,r,e){a.child=t===null?ou(a,null,r,e):he(a,t.child,r,e)}function j0(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var d in e)d!=="ref"&&(o[d]=e[d])}else o=e;return ce(a),e=fd(t,a,r,o,n,i),d=vd(),t!==null&&!jt?(kd(t,a,i),sr(t,a,i)):(Q&&d&&ld(a),a.flags|=1,Ot(t,a,e,i),a.child)}function W0(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!od(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,Ku(t,a,n,e,i)):(t=jo(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!Wd(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:vn,r(o,e)&&t.ref===a.ref)return sr(t,a,i)}return a.flags|=1,t=or(n,e),t.ref=a.ref,t.return=a,a.child=t}function Ku(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(vn(n,e)&&t.ref===a.ref)if(jt=!1,a.pendingProps=e=n,Wd(t,i))(t.flags&131072)!==0&&(jt=!0);else return a.lanes=t.lanes,sr(t,a,i)}return W1(t,a,r,e,i)}function Ju(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return H0(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wo(a,n!==null?n.cachePool:null),n!==null?k0(a,n):m1(),cu(a);else return e=a.lanes=536870912,H0(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(Wo(a,n.cachePool),k0(a,n),Br(a),a.memoizedState=null):(t!==null&&Wo(a,null),m1(),Br(a));return Ot(t,a,i,r),a.child}function $i(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function H0(t,a,r,e,i){var n=hd();return n=n===null?null:{parent:Bt._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&Wo(a,null),m1(),cu(a),t!==null&&vi(t,a,e,!0),a.childLanes=i,null}function Ao(t,a){return a=Po({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function S0(t,a,r){return he(a,t.child,null,r),t=Ao(a,a.pendingProps),t.flags|=2,da(a),a.memoizedState=null,t}function I5(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(Q){if(e.mode==="hidden")return t=Ao(a,e),a.lanes=536870912,$i(null,t);if(y1(a),(t=ht)?(t=Us(t,Ba),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:qr!==null?{id:Oa,overflow:Ua}:null,retryLane:536870912,hydrationErrors:null},r=Ph(t),r.return=a,a.child=r,Zt=a,ht=null)):t=null,t===null)throw Gr(a);return a.lanes=536870912,null}return Ao(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(y1(a),i)if(a.flags&256)a.flags&=-257,a=S0(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(m(558));else if(jt||vi(t,a,r,!1),i=(r&t.childLanes)!==0,jt||i){if(e=nt,e!==null&&(o=bh(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,ve(t,o),ra(e,t,o),jd;el(),a=S0(t,a,r)}else t=n.treeContext,ht=Wa(o.nextSibling),Zt=a,Q=!0,_r=null,Ba=!1,t!==null&&au(a,t),a=Ao(a,e),a.flags|=4096;return a}return t=or(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function Vo(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(m(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function W1(t,a,r,e,i){return ce(a),r=fd(t,a,r,e,void 0,i),e=vd(),t!==null&&!jt?(kd(t,a,i),sr(t,a,i)):(Q&&e&&ld(a),a.flags|=1,Ot(t,a,r,i),a.child)}function A0(t,a,r,e,i,n){return ce(a),a.updateQueue=null,r=uu(a,e,r,i),hu(t),e=vd(),t!==null&&!jt?(kd(t,a,n),sr(t,a,n)):(Q&&e&&ld(a),a.flags|=1,Ot(t,a,r,n),a.child)}function V0(t,a,r,e,i){if(ce(a),a.stateNode===null){var n=Qe,o=r.contextType;typeof o=="object"&&o!==null&&(n=qt(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=B1,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},sd(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?qt(o):Qe,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(_2(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&B1.enqueueReplaceState(n,n.state,null),on(a,e,n,i),nn(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var d=a.memoizedProps,h=se(r,d);n.props=h;var s=n.context,f=r.contextType;o=Qe,typeof f=="object"&&f!==null&&(o=qt(f));var k=r.getDerivedStateFromProps;f=typeof k=="function"||typeof n.getSnapshotBeforeUpdate=="function",d=a.pendingProps!==d,f||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(d||s!==o)&&b0(a,n,e,o),wr=!1;var p=a.memoizedState;n.state=p,on(a,e,n,i),nn(),s=a.memoizedState,d||p!==s||wr?(typeof k=="function"&&(_2(a,r,k,e),s=a.memoizedState),(h=wr||C0(a,r,h,e,p,s,o))?(f||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=s),n.props=e,n.state=s,n.context=o,e=h):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,L1(t,a),o=a.memoizedProps,f=se(r,o),n.props=f,k=a.pendingProps,p=n.context,s=r.contextType,h=Qe,typeof s=="object"&&s!==null&&(h=qt(s)),d=r.getDerivedStateFromProps,(s=typeof d=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==k||p!==h)&&b0(a,n,e,h),wr=!1,p=a.memoizedState,n.state=p,on(a,e,n,i),nn();var x=a.memoizedState;o!==k||p!==x||wr||t!==null&&t.dependencies!==null&&Qo(t.dependencies)?(typeof d=="function"&&(_2(a,r,d,e),x=a.memoizedState),(f=wr||C0(a,r,f,e,p,x,h)||t!==null&&t.dependencies!==null&&Qo(t.dependencies))?(s||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,x,h),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,x,h)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=x),n.props=e,n.state=x,n.context=h,e=f):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,Vo(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=he(a,t.child,null,i),a.child=he(a,null,r,i)):Ot(t,a,r,i),a.memoizedState=n.state,t=a.child):t=sr(t,a,i),t}function z0(t,a,r,e){return de(),a.flags|=256,Ot(t,a,r,e),a.child}var T2={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function N2(t){return{baseLanes:t,cachePool:eu()}}function E2(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=ha),t}function Ru(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(xt.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(Q){if(i?br(a):Br(a),(t=ht)?(t=Us(t,Ba),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:qr!==null?{id:Oa,overflow:Ua}:null,retryLane:536870912,hydrationErrors:null},r=Ph(t),r.return=a,a.child=r,Zt=a,ht=null)):t=null,t===null)throw Gr(a);return q1(t)?a.lanes=32:a.lanes=536870912,null}var d=e.children;return e=e.fallback,i?(Br(a),i=a.mode,d=Po({mode:"hidden",children:d},i),e=ie(e,i,r,null),d.return=a,e.return=a,d.sibling=e,a.child=d,e=a.child,e.memoizedState=N2(r),e.childLanes=E2(t,o,r),a.memoizedState=T2,$i(null,e)):(br(a),H1(a,d))}var h=t.memoizedState;if(h!==null&&(d=h.dehydrated,d!==null)){if(n)a.flags&256?(br(a),a.flags&=-257,a=D2(t,a,r)):a.memoizedState!==null?(Br(a),a.child=t.child,a.flags|=128,a=null):(Br(a),d=e.fallback,i=a.mode,e=Po({mode:"visible",children:e.children},i),d=ie(d,i,r,null),d.flags|=2,e.return=a,d.return=a,e.sibling=d,a.child=e,he(a,t.child,null,r),e=a.child,e.memoizedState=N2(r),e.childLanes=E2(t,o,r),a.memoizedState=T2,a=$i(null,e));else if(br(a),q1(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var s=o.dgst;o=s,e=Error(m(419)),e.stack="",e.digest=o,xn({value:e,source:null,stack:null}),a=D2(t,a,r)}else if(jt||vi(t,a,r,!1),o=(r&t.childLanes)!==0,jt||o){if(o=nt,o!==null&&(e=bh(o,r),e!==0&&e!==h.retryLane))throw h.retryLane=e,ve(t,e),ra(o,t,e),jd;Z1(d)||el(),a=D2(t,a,r)}else Z1(d)?(a.flags|=192,a.child=t.child,a=null):(t=h.treeContext,ht=Wa(d.nextSibling),Zt=a,Q=!0,_r=null,Ba=!1,t!==null&&au(a,t),a=H1(a,e.children),a.flags|=4096);return a}return i?(Br(a),d=e.fallback,i=a.mode,h=t.child,s=h.sibling,e=or(h,{mode:"hidden",children:e.children}),e.subtreeFlags=h.subtreeFlags&65011712,s!==null?d=or(s,d):(d=ie(d,i,r,null),d.flags|=2),d.return=a,e.return=a,e.sibling=d,a.child=e,$i(null,e),e=a.child,d=t.child.memoizedState,d===null?d=N2(r):(i=d.cachePool,i!==null?(h=Bt._currentValue,i=i.parent!==h?{parent:h,pool:h}:i):i=eu(),d={baseLanes:d.baseLanes|r,cachePool:i}),e.memoizedState=d,e.childLanes=E2(t,o,r),a.memoizedState=T2,$i(t.child,e)):(br(a),r=t.child,t=r.sibling,r=or(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function H1(t,a){return a=Po({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Po(t,a){return t=ca(22,t,null,a),t.lanes=0,t}function D2(t,a,r){return he(a,t.child,null,r),t=H1(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function _0(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),v1(t.return,a,r)}function O2(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function Fu(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=xt.current,d=(o&2)!==0;if(d?(o=o&1|2,a.flags|=128):o&=1,ot(xt,o),Ot(t,a,e,r),e=Q?kn:0,!d&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_0(t,r,a);else if(t.tag===19)_0(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&Ro(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),O2(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&Ro(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}O2(a,!0,r,null,n,e);break;case"together":O2(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function sr(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Xr|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(vi(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(m(153));if(a.child!==null){for(t=a.child,r=or(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=or(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function Wd(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Qo(t)))}function P5(t,a,r){switch(a.tag){case 3:Oo(a,a.stateNode.containerInfo),Cr(a,Bt,t.memoizedState.cache),de();break;case 27:case 5:e1(a);break;case 4:Oo(a,a.stateNode.containerInfo);break;case 10:Cr(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,y1(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(br(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Ru(t,a,r):(br(a),t=sr(t,a,r),t!==null?t.sibling:null);br(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||(vi(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return Fu(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ot(xt,xt.current),e)break;return null;case 22:return a.lanes=0,Ju(t,a,r,a.pendingProps);case 24:Cr(a,Bt,t.memoizedState.cache)}return sr(t,a,r)}function $u(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)jt=!0;else{if(!Wd(t,r)&&(a.flags&128)===0)return jt=!1,P5(t,a,r);jt=(t.flags&131072)!==0}else jt=!1,Q&&(a.flags&1048576)!==0&&tu(a,kn,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=ae(a.elementType),a.type=t,typeof t=="function")od(t)?(e=se(t,e),a.tag=1,a=V0(null,a,t,e,r)):(a.tag=0,a=W1(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===Q1){a.tag=11,a=j0(null,a,t,e,r);break t}else if(i===K1){a.tag=14,a=W0(null,a,t,e,r);break t}}throw a=a1(t)||t,Error(m(306,a,""))}}return a;case 0:return W1(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=se(e,a.pendingProps),V0(t,a,e,i,r);case 3:t:{if(Oo(a,a.stateNode.containerInfo),t===null)throw Error(m(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,L1(t,a),on(a,e,null,r);var o=a.memoizedState;if(e=o.cache,Cr(a,Bt,e),e!==n.cache&&k1(a,[Bt],r,!0),nn(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=z0(t,a,e,r);break t}else if(e!==i){i=ba(Error(m(424)),a),xn(i),a=z0(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ht=Wa(t.firstChild),Zt=a,Q=!0,_r=null,Ba=!0,r=ou(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(de(),e===i){a=sr(t,a,r);break t}Ot(t,a,e,r)}a=a.child}return a;case 26:return Vo(t,a),t===null?(r=rh(a.type,null,a.pendingProps,null))?a.memoizedState=r:Q||(r=a.type,t=a.pendingProps,e=ll(zr.current).createElement(r),e[Ut]=a,e[ea]=t,Gt(e,r,t),Tt(e),a.stateNode=e):a.memoizedState=rh(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return e1(a),t===null&&Q&&(e=a.stateNode=Zs(a.type,a.pendingProps,zr.current),Zt=a,Ba=!0,i=ht,Kr(a.type)?(G1=i,ht=Wa(e.firstChild)):ht=i),Ot(t,a,a.pendingProps.children,r),Vo(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Q&&((i=e=ht)&&(e=Wf(e,a.type,a.pendingProps,Ba),e!==null?(a.stateNode=e,Zt=a,ht=Wa(e.firstChild),Ba=!1,i=!0):i=!1),i||Gr(a)),e1(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,O1(i,n)?e=null:o!==null&&O1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=fd(t,a,Y5,null,null,r),Cn._currentValue=i),Vo(t,a),Ot(t,a,e,r),a.child;case 6:return t===null&&Q&&((t=r=ht)&&(r=Hf(r,a.pendingProps,Ba),r!==null?(a.stateNode=r,Zt=a,ht=null,t=!0):t=!1),t||Gr(a)),null;case 13:return Ru(t,a,r);case 4:return Oo(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=he(a,null,e,r):Ot(t,a,e,r),a.child;case 11:return j0(t,a,a.type,a.pendingProps,r);case 7:return Ot(t,a,a.pendingProps,r),a.child;case 8:return Ot(t,a,a.pendingProps.children,r),a.child;case 12:return Ot(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,Cr(a,a.type,e.value),Ot(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,ce(a),i=qt(i),e=e(i),a.flags|=1,Ot(t,a,e,r),a.child;case 14:return W0(t,a,a.type,a.pendingProps,r);case 15:return Ku(t,a,a.type,a.pendingProps,r);case 19:return Fu(t,a,r);case 31:return I5(t,a,r);case 22:return Ju(t,a,r,a.pendingProps);case 24:return ce(a),e=qt(Bt),t===null?(i=hd(),i===null&&(i=nt,n=cd(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},sd(a),Cr(a,Bt,i)):((t.lanes&r)!==0&&(L1(t,a),on(a,null,null,r),nn()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),Cr(a,Bt,e)):(e=n.cache,Cr(a,Bt,e),e!==i.cache&&k1(a,[Bt],r,!0))),Ot(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(m(156,a.tag))}function $a(t){t.flags|=4}function U2(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(ms())t.flags|=8192;else throw oe=Ko,ud}else t.flags&=-16777217}function T0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ys(a))if(ms())t.flags|=8192;else throw oe=Ko,ud}function vo(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?yh():536870912,t.lanes|=a,ci|=a)}function Yi(t,a){if(!Q)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function ct(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function tf(t,a,r){var e=a.pendingProps;switch(dd(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(a),null;case 1:return ct(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),lr(Bt),ei(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_e(a)?$a(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,A2())),ct(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?($a(a),n!==null?(ct(a),T0(a,n)):(ct(a),U2(a,i,null,e,r))):n?n!==t.memoizedState?($a(a),ct(a),T0(a,n)):(ct(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&$a(a),ct(a),U2(a,i,t,e,r)),null;case 27:if(Uo(a),r=zr.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&$a(a);else{if(!e){if(a.stateNode===null)throw Error(m(166));return ct(a),null}t=qa.current,_e(a)?h0(a,t):(t=Zs(i,e,r),a.stateNode=t,$a(a))}return ct(a),null;case 5:if(Uo(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&$a(a);else{if(!e){if(a.stateNode===null)throw Error(m(166));return ct(a),null}if(n=qa.current,_e(a))h0(a,n);else{var o=ll(zr.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[Ut]=a,n[ea]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(Gt(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&$a(a)}}return ct(a),U2(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&$a(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(m(166));if(t=zr.current,_e(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=Zt,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[Ut]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||Es(t.nodeValue,r)),t||Gr(a,!0)}else t=ll(t).createTextNode(e),t[Ut]=a,a.stateNode=t}return ct(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=_e(a),r!==null){if(t===null){if(!e)throw Error(m(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[Ut]=a}else de(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ct(a),t=!1}else r=A2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?(da(a),a):(da(a),null);if((a.flags&128)!==0)throw Error(m(558))}return ct(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=_e(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(m(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[Ut]=a}else de(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ct(a),i=!1}else i=A2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(da(a),a):(da(a),null)}return da(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),vo(a,a.updateQueue),ct(a),null);case 4:return ei(),t===null&&Td(a.stateNode.containerInfo),ct(a),null;case 10:return lr(a.type),ct(a),null;case 19:if(Nt(xt),e=a.memoizedState,e===null)return ct(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)Yi(e,!1);else{if(vt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=Ro(t),n!==null){for(a.flags|=128,Yi(e,!1),t=n.updateQueue,a.updateQueue=t,vo(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)Ih(r,t),r=r.sibling;return ot(xt,xt.current&1|2),Q&&ar(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&ua()>al&&(a.flags|=128,i=!0,Yi(e,!1),a.lanes=4194304)}else{if(!i)if(t=Ro(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,vo(a,t),Yi(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!Q)return ct(a),null}else 2*ua()-e.renderingStartTime>al&&r!==536870912&&(a.flags|=128,i=!0,Yi(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=ua(),t.sibling=null,r=xt.current,ot(xt,i?r&1|2:r&1),Q&&ar(a,e.treeForkCount),t):(ct(a),null);case 22:case 23:return da(a),gd(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(ct(a),a.subtreeFlags&6&&(a.flags|=8192)):ct(a),r=a.updateQueue,r!==null&&vo(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&Nt(ne),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),lr(Bt),ct(a),null;case 25:return null;case 30:return null}throw Error(m(156,a.tag))}function af(t,a){switch(dd(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return lr(Bt),ei(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Uo(a),null;case 31:if(a.memoizedState!==null){if(da(a),a.alternate===null)throw Error(m(340));de()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(da(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(m(340));de()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Nt(xt),null;case 4:return ei(),null;case 10:return lr(a.type),null;case 22:case 23:return da(a),gd(),t!==null&&Nt(ne),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return lr(Bt),null;case 25:return null;default:return null}}function Iu(t,a){switch(dd(a),a.tag){case 3:lr(Bt),ei();break;case 26:case 27:case 5:Uo(a);break;case 4:ei();break;case 31:a.memoizedState!==null&&da(a);break;case 13:da(a);break;case 19:Nt(xt);break;case 10:lr(a.type);break;case 22:case 23:da(a),gd(),t!==null&&Nt(ne);break;case 24:lr(Bt)}}function Tn(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(d){at(a,a.return,d)}}function Yr(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,i=a;var h=r,s=d;try{s()}catch(f){at(i,h,f)}}}e=e.next}while(e!==n)}}catch(f){at(a,a.return,f)}}function Pu(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{du(a,r)}catch(e){at(t,t.return,e)}}}function ts(t,a,r){r.props=se(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){at(t,a,e)}}function dn(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){at(t,a,i)}}function Za(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){at(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){at(t,a,i)}else r.current=null}function as(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){at(t,t.return,i)}}function Z2(t,a,r){try{var e=t.stateNode;yf(e,t.type,r,a),e[ea]=a}catch(i){at(t,t.return,i)}}function rs(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Kr(t.type)||t.tag===4}function q2(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||rs(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Kr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function S1(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=ir));else if(e!==4&&(e===27&&Kr(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(S1(t,a,r),t=t.sibling;t!==null;)S1(t,a,r),t=t.sibling}function tl(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&Kr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(tl(t,a,r),t=t.sibling;t!==null;)tl(t,a,r),t=t.sibling}function es(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Gt(a,e,r),a[Ut]=t,a[ea]=r}catch(n){at(t,t.return,n)}}var rr=!1,bt=!1,G2=!1,N0=typeof WeakSet=="function"?WeakSet:Set,_t=null;function rf(t,a){if(t=t.containerInfo,E1=ul,t=Yh(t),ed(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,d=-1,h=-1,s=0,f=0,k=t,p=null;a:for(;;){for(var x;k!==r||i!==0&&k.nodeType!==3||(d=o+i),k!==n||e!==0&&k.nodeType!==3||(h=o+e),k.nodeType===3&&(o+=k.nodeValue.length),(x=k.firstChild)!==null;)p=k,k=x;for(;;){if(k===t)break a;if(p===r&&++s===i&&(d=o),p===n&&++f===e&&(h=o),(x=k.nextSibling)!==null)break;k=p,p=k.parentNode}k=x}r=d===-1||h===-1?null:{start:d,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(D1={focusedElem:t,selectionRange:r},ul=!1,_t=a;_t!==null;)if(a=_t,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,_t=t;else for(;_t!==null;){switch(a=_t,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var y=se(r.type,i);t=e.getSnapshotBeforeUpdate(y,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(b){at(r,r.return,b)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)U1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":U1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=a.sibling,t!==null){t.return=a.return,_t=t;break}_t=a.return}}function is(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:Pa(t,r),e&4&&Tn(5,r);break;case 1:if(Pa(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){at(r,r.return,o)}else{var i=se(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){at(r,r.return,o)}}e&64&&Pu(r),e&512&&dn(r,r.return);break;case 3:if(Pa(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{du(t,a)}catch(o){at(r,r.return,o)}}break;case 27:a===null&&e&4&&es(r);case 26:case 5:Pa(t,r),a===null&&e&4&&as(r),e&512&&dn(r,r.return);break;case 12:Pa(t,r);break;case 31:Pa(t,r),e&4&&ls(t,r);break;case 13:Pa(t,r),e&4&&ds(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=sf.bind(null,r),Sf(t,r))));break;case 22:if(e=r.memoizedState!==null||rr,!e){a=a!==null&&a.memoizedState!==null||bt,i=rr;var n=bt;rr=e,(bt=a)&&!n?tr(t,r,(r.subtreeFlags&8772)!==0):Pa(t,r),rr=i,bt=n}break;case 30:break;default:Pa(t,r)}}function ns(t){var a=t.alternate;a!==null&&(t.alternate=null,ns(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&$1(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pt=null,ta=!1;function Ia(t,a,r){for(r=r.child;r!==null;)os(t,a,r),r=r.sibling}function os(t,a,r){if(sa&&typeof sa.onCommitFiberUnmount=="function")try{sa.onCommitFiberUnmount(Wn,r)}catch{}switch(r.tag){case 26:bt||Za(r,a),Ia(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:bt||Za(r,a);var e=pt,i=ta;Kr(r.type)&&(pt=r.stateNode,ta=!1),Ia(t,a,r),sn(r.stateNode),pt=e,ta=i;break;case 5:bt||Za(r,a);case 6:if(e=pt,i=ta,pt=null,Ia(t,a,r),pt=e,ta=i,pt!==null)if(ta)try{(pt.nodeType===9?pt.body:pt.nodeName==="HTML"?pt.ownerDocument.body:pt).removeChild(r.stateNode)}catch(n){at(r,a,n)}else try{pt.removeChild(r.stateNode)}catch(n){at(r,a,n)}break;case 18:pt!==null&&(ta?(t=pt,$0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),gi(t)):$0(pt,r.stateNode));break;case 4:e=pt,i=ta,pt=r.stateNode.containerInfo,ta=!0,Ia(t,a,r),pt=e,ta=i;break;case 0:case 11:case 14:case 15:Yr(2,r,a),bt||Yr(4,r,a),Ia(t,a,r);break;case 1:bt||(Za(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&ts(r,a,e)),Ia(t,a,r);break;case 21:Ia(t,a,r);break;case 22:bt=(e=bt)||r.memoizedState!==null,Ia(t,a,r),bt=e;break;default:Ia(t,a,r)}}function ls(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gi(t)}catch(r){at(a,a.return,r)}}}function ds(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gi(t)}catch(r){at(a,a.return,r)}}function ef(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new N0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new N0),a;default:throw Error(m(435,t.tag))}}function ko(t,a){var r=ef(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=gf.bind(null,t,e);e.then(i,i)}})}function It(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,d=o;t:for(;d!==null;){switch(d.tag){case 27:if(Kr(d.type)){pt=d.stateNode,ta=!1;break t}break;case 5:pt=d.stateNode,ta=!1;break t;case 3:case 4:pt=d.stateNode.containerInfo,ta=!0;break t}d=d.return}if(pt===null)throw Error(m(160));os(n,o,i),pt=null,ta=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)cs(a,t),a=a.sibling}var Ta=null;function cs(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:It(a,t),Pt(t),e&4&&(Yr(3,t,t.return),Tn(3,t),Yr(5,t,t.return));break;case 1:It(a,t),Pt(t),e&512&&(bt||r===null||Za(r,r.return)),e&64&&rr&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=Ta;if(It(a,t),Pt(t),e&512&&(bt||r===null||Za(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[An]||n[Ut]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),Gt(n,e,r),n[Ut]=t,Tt(n),e=n;break t;case"link":var o=ih("link","href",i).get(e+(r.href||""));if(o){for(var d=0;d<o.length;d++)if(n=o[d],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(d,1);break a}}n=i.createElement(e),Gt(n,e,r),i.head.appendChild(n);break;case"meta":if(o=ih("meta","content",i).get(e+(r.content||""))){for(d=0;d<o.length;d++)if(n=o[d],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(d,1);break a}}n=i.createElement(e),Gt(n,e,r),i.head.appendChild(n);break;default:throw Error(m(468,e))}n[Ut]=t,Tt(n),e=n}t.stateNode=e}else nh(i,t.type,t.stateNode);else t.stateNode=eh(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?nh(i,t.type,t.stateNode):eh(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&Z2(t,t.memoizedProps,r.memoizedProps)}break;case 27:It(a,t),Pt(t),e&512&&(bt||r===null||Za(r,r.return)),r!==null&&e&4&&Z2(t,t.memoizedProps,r.memoizedProps);break;case 5:if(It(a,t),Pt(t),e&512&&(bt||r===null||Za(r,r.return)),t.flags&32){i=t.stateNode;try{ni(i,"")}catch(y){at(t,t.return,y)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,Z2(t,i,r!==null?r.memoizedProps:i)),e&1024&&(G2=!0);break;case 6:if(It(a,t),Pt(t),e&4){if(t.stateNode===null)throw Error(m(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(y){at(t,t.return,y)}}break;case 3:if(To=null,i=Ta,Ta=dl(a.containerInfo),It(a,t),Ta=i,Pt(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{gi(a.containerInfo)}catch(y){at(t,t.return,y)}G2&&(G2=!1,hs(t));break;case 4:e=Ta,Ta=dl(t.stateNode.containerInfo),It(a,t),Pt(t),Ta=e;break;case 12:It(a,t),Pt(t);break;case 31:It(a,t),Pt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,ko(t,e)));break;case 13:It(a,t),Pt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Cl=ua()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,ko(t,e)));break;case 22:i=t.memoizedState!==null;var h=r!==null&&r.memoizedState!==null,s=rr,f=bt;if(rr=s||i,bt=f||h,It(a,t),bt=f,rr=s,Pt(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||h||rr||bt||re(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){h=r=a;try{if(n=h.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=h.stateNode;var k=h.memoizedProps.style,p=k!=null&&k.hasOwnProperty("display")?k.display:null;d.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){at(h,h.return,y)}}}else if(a.tag===6){if(r===null){h=a;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(y){at(h,h.return,y)}}}else if(a.tag===18){if(r===null){h=a;try{var x=h.stateNode;i?I0(x,!0):I0(h.stateNode,!1)}catch(y){at(h,h.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,ko(t,r))));break;case 19:It(a,t),Pt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,ko(t,e)));break;case 30:break;case 21:break;default:It(a,t),Pt(t)}}function Pt(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if(rs(e)){r=e;break}e=e.return}if(r==null)throw Error(m(160));switch(r.tag){case 27:var i=r.stateNode,n=q2(t);tl(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(ni(o,""),r.flags&=-33);var d=q2(t);tl(t,d,o);break;case 3:case 4:var h=r.stateNode.containerInfo,s=q2(t);S1(t,s,h);break;default:throw Error(m(161))}}catch(f){at(t,t.return,f)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function hs(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;hs(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Pa(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)is(t,a.alternate,a),a=a.sibling}function re(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Yr(4,a,a.return),re(a);break;case 1:Za(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&ts(a,a.return,r),re(a);break;case 27:sn(a.stateNode);case 26:case 5:Za(a,a.return),re(a);break;case 22:a.memoizedState===null&&re(a);break;case 30:re(a);break;default:re(a)}t=t.sibling}}function tr(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:tr(i,n,r),Tn(4,n);break;case 1:if(tr(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(s){at(e,e.return,s)}if(e=n,i=e.updateQueue,i!==null){var d=e.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)lu(h[i],d)}catch(s){at(e,e.return,s)}}r&&o&64&&Pu(n),dn(n,n.return);break;case 27:es(n);case 26:case 5:tr(i,n,r),r&&e===null&&o&4&&as(n),dn(n,n.return);break;case 12:tr(i,n,r);break;case 31:tr(i,n,r),r&&o&4&&ls(i,n);break;case 13:tr(i,n,r),r&&o&4&&ds(i,n);break;case 22:n.memoizedState===null&&tr(i,n,r),dn(n,n.return);break;case 30:break;default:tr(i,n,r)}a=a.sibling}}function Hd(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&zn(r))}function Sd(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&zn(t))}function _a(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)us(t,a,r,e),a=a.sibling}function us(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a,r,e),i&2048&&Tn(9,a);break;case 1:_a(t,a,r,e);break;case 3:_a(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&zn(t)));break;case 12:if(i&2048){_a(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,d=n.onPostCommit;typeof d=="function"&&d(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){at(a,a.return,h)}}else _a(t,a,r,e);break;case 31:_a(t,a,r,e);break;case 13:_a(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?_a(t,a,r,e):cn(t,a):n._visibility&2?_a(t,a,r,e):(n._visibility|=2,Ne(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&Hd(o,a);break;case 24:_a(t,a,r,e),i&2048&&Sd(a.alternate,a);break;default:_a(t,a,r,e)}}function Ne(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,d=r,h=e,s=o.flags;switch(o.tag){case 0:case 11:case 15:Ne(n,o,d,h,i),Tn(8,o);break;case 23:break;case 22:var f=o.stateNode;o.memoizedState!==null?f._visibility&2?Ne(n,o,d,h,i):cn(n,o):(f._visibility|=2,Ne(n,o,d,h,i)),i&&s&2048&&Hd(o.alternate,o);break;case 24:Ne(n,o,d,h,i),i&&s&2048&&Sd(o.alternate,o);break;default:Ne(n,o,d,h,i)}a=a.sibling}}function cn(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:cn(r,e),i&2048&&Hd(e.alternate,e);break;case 24:cn(r,e),i&2048&&Sd(e.alternate,e);break;default:cn(r,e)}a=a.sibling}}var Ii=8192;function Te(t,a,r){if(t.subtreeFlags&Ii)for(t=t.child;t!==null;)ss(t,a,r),t=t.sibling}function ss(t,a,r){switch(t.tag){case 26:Te(t,a,r),t.flags&Ii&&t.memoizedState!==null&&qf(r,Ta,t.memoizedState,t.memoizedProps);break;case 5:Te(t,a,r);break;case 3:case 4:var e=Ta;Ta=dl(t.stateNode.containerInfo),Te(t,a,r),Ta=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Ii,Ii=16777216,Te(t,a,r),Ii=e):Te(t,a,r));break;default:Te(t,a,r)}}function gs(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function Xi(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];_t=e,fs(e,t)}gs(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ps(t),t=t.sibling}function ps(t){switch(t.tag){case 0:case 11:case 15:Xi(t),t.flags&2048&&Yr(9,t,t.return);break;case 3:Xi(t);break;case 12:Xi(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,zo(t)):Xi(t);break;default:Xi(t)}}function zo(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];_t=e,fs(e,t)}gs(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Yr(8,a,a.return),zo(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,zo(a));break;default:zo(a)}t=t.sibling}}function fs(t,a){for(;_t!==null;){var r=_t;switch(r.tag){case 0:case 11:case 15:Yr(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:zn(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,_t=e;else t:for(r=t;_t!==null;){e=_t;var i=e.sibling,n=e.return;if(ns(e),e===r){_t=null;break t}if(i!==null){i.return=n,_t=i;break t}_t=n}}}var nf={getCacheForType:function(t){var a=qt(Bt),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return qt(Bt).controller.signal}},of=typeof WeakMap=="function"?WeakMap:Map,J=0,nt=null,Z=null,G=0,tt=0,la=null,Sr=!1,xi=!1,Ad=!1,gr=0,vt=0,Xr=0,le=0,Vd=0,ha=0,ci=0,hn=null,aa=null,A1=!1,Cl=0,vs=0,al=1/0,rl=null,Er=null,Wt=0,Dr=null,hi=null,dr=0,V1=0,z1=null,ks=null,un=0,_1=null;function pa(){return(J&2)!==0&&G!==0?G&-G:V.T!==null?_d():Bh()}function xs(){if(ha===0)if((G&536870912)===0||Q){var t=oo;oo<<=1,(oo&3932160)===0&&(oo=262144),ha=t}else ha=536870912;return t=va.current,t!==null&&(t.flags|=32),ha}function ra(t,a,r){(t===nt&&(tt===2||tt===9)||t.cancelPendingCommit!==null)&&(ui(t,0),Ar(t,G,ha,!1)),Sn(t,r),((J&2)===0||t!==nt)&&(t===nt&&((J&2)===0&&(le|=r),vt===4&&Ar(t,G,ha,!1)),Ya(t))}function Ls(t,a,r){if((J&6)!==0)throw Error(m(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||Hn(t,a),i=e?cf(t,a):Y2(t,a,!0),n=e;do{if(i===0){xi&&!e&&Ar(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!lf(r)){i=Y2(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var d=t;i=hn;var h=d.current.memoizedState.isDehydrated;if(h&&(ui(d,o).flags|=256),o=Y2(d,o,!1),o!==2){if(Ad&&!h){d.errorRecoveryDisabledLanes|=n,le|=n,i=4;break t}n=aa,aa=i,n!==null&&(aa===null?aa=n:aa.push.apply(aa,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){ui(t,0),Ar(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(m(345));case 4:if((a&4194048)!==a)break;case 6:Ar(e,a,ha,!Sr);break t;case 2:aa=null;break;case 3:case 5:break;default:throw Error(m(329))}if((a&62914560)===a&&(i=Cl+300-ua(),10<i)){if(Ar(e,a,ha,!Sr),gl(e,0,!0)!==0)break t;dr=a,e.timeoutHandle=Os(E0.bind(null,e,r,aa,rl,A1,a,ha,le,ci,Sr,n,"Throttled",-0,0),i);break t}E0(e,r,aa,rl,A1,a,ha,le,ci,Sr,n,null,-0,0)}}break}while(!0);Ya(t)}function E0(t,a,r,e,i,n,o,d,h,s,f,k,p,x){if(t.timeoutHandle=-1,k=a.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ir},ss(a,n,k);var y=(n&62914560)===n?Cl-ua():(n&4194048)===n?vs-ua():0;if(y=Gf(k,y),y!==null){dr=n,t.cancelPendingCommit=y(O0.bind(null,t,a,n,r,e,i,o,d,h,f,k,null,p,x)),Ar(t,n,o,!s);return}}O0(t,a,n,r,e,i,o,d,h)}function lf(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!fa(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ar(t,a,r,e){a&=~Vd,a&=~le,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-ga(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&wh(t,r,a)}function bl(){return(J&6)===0?(Nn(0,!1),!1):!0}function zd(){if(Z!==null){if(tt===0)var t=Z.return;else t=Z,nr=ke=null,xd(t),ti=null,Ln=0,t=Z;for(;t!==null;)Iu(t.alternate,t),t=t.return;Z=null}}function ui(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,bf(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),dr=0,zd(),nt=t,Z=r=or(t.current,null),G=a,tt=0,la=null,Sr=!1,xi=Hn(t,a),Ad=!1,ci=ha=Vd=le=Xr=vt=0,aa=hn=null,A1=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-ga(e),n=1<<i;a|=t[i],e&=~n}return gr=a,kl(),r}function Ms(t,a){N=null,V.H=mn,a===ki||a===Ll?(a=f0(),tt=3):a===ud?(a=f0(),tt=4):tt=a===jd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,la=a,Z===null&&(vt=1,Io(t,ba(a,t.current)))}function ms(){var t=va.current;return t===null?!0:(G&4194048)===G?ja===null:(G&62914560)===G||(G&536870912)!==0?t===ja:!1}function ys(){var t=V.H;return V.H=mn,t===null?mn:t}function ws(){var t=V.A;return V.A=nf,t}function el(){vt=4,Sr||(G&4194048)!==G&&va.current!==null||(xi=!0),(Xr&134217727)===0&&(le&134217727)===0||nt===null||Ar(nt,G,ha,!1)}function Y2(t,a,r){var e=J;J|=2;var i=ys(),n=ws();(nt!==t||G!==a)&&(rl=null,ui(t,a)),a=!1;var o=vt;t:do try{if(tt!==0&&Z!==null){var d=Z,h=la;switch(tt){case 8:zd(),o=6;break t;case 3:case 2:case 9:case 6:va.current===null&&(a=!0);var s=tt;if(tt=0,la=null,Re(t,d,h,s),r&&xi){o=0;break t}break;default:s=tt,tt=0,la=null,Re(t,d,h,s)}}df(),o=vt;break}catch(f){Ms(t,f)}while(!0);return a&&t.shellSuspendCounter++,nr=ke=null,J=e,V.H=i,V.A=n,Z===null&&(nt=null,G=0,kl()),o}function df(){for(;Z!==null;)Cs(Z)}function cf(t,a){var r=J;J|=2;var e=ys(),i=ws();nt!==t||G!==a?(rl=null,al=ua()+500,ui(t,a)):xi=Hn(t,a);t:do try{if(tt!==0&&Z!==null){a=Z;var n=la;a:switch(tt){case 1:tt=0,la=null,Re(t,a,n,1);break;case 2:case 9:if(p0(n)){tt=0,la=null,D0(a);break}a=function(){tt!==2&&tt!==9||nt!==t||(tt=7),Ya(t)},n.then(a,a);break t;case 3:tt=7;break t;case 4:tt=5;break t;case 7:p0(n)?(tt=0,la=null,D0(a)):(tt=0,la=null,Re(t,a,n,7));break;case 5:var o=null;switch(Z.tag){case 26:o=Z.memoizedState;case 5:case 27:var d=Z;if(o?Ys(o):d.stateNode.complete){tt=0,la=null;var h=d.sibling;if(h!==null)Z=h;else{var s=d.return;s!==null?(Z=s,Bl(s)):Z=null}break a}}tt=0,la=null,Re(t,a,n,5);break;case 6:tt=0,la=null,Re(t,a,n,6);break;case 8:zd(),vt=6;break t;default:throw Error(m(462))}}hf();break}catch(f){Ms(t,f)}while(!0);return nr=ke=null,V.H=e,V.A=i,J=r,Z!==null?0:(nt=null,G=0,kl(),vt)}function hf(){for(;Z!==null&&!Vp();)Cs(Z)}function Cs(t){var a=$u(t.alternate,t,gr);t.memoizedProps=t.pendingProps,a===null?Bl(t):Z=a}function D0(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=A0(r,a,a.pendingProps,a.type,void 0,G);break;case 11:a=A0(r,a,a.pendingProps,a.type.render,a.ref,G);break;case 5:xd(a);default:Iu(r,a),a=Z=Ih(a,gr),a=$u(r,a,gr)}t.memoizedProps=t.pendingProps,a===null?Bl(t):Z=a}function Re(t,a,r,e){nr=ke=null,xd(a),ti=null,Ln=0;var i=a.return;try{if($5(t,i,a,r,G)){vt=1,Io(t,ba(r,t.current)),Z=null;return}}catch(n){if(i!==null)throw Z=i,n;vt=1,Io(t,ba(r,t.current)),Z=null;return}a.flags&32768?(Q||e===1?t=!0:xi||(G&536870912)!==0?t=!1:(Sr=t=!0,(e===2||e===9||e===3||e===6)&&(e=va.current,e!==null&&e.tag===13&&(e.flags|=16384))),bs(a,t)):Bl(a)}function Bl(t){var a=t;do{if((a.flags&32768)!==0){bs(a,Sr);return}t=a.return;var r=tf(a.alternate,a,gr);if(r!==null){Z=r;return}if(a=a.sibling,a!==null){Z=a;return}Z=a=t}while(a!==null);vt===0&&(vt=5)}function bs(t,a){do{var r=af(t.alternate,t);if(r!==null){r.flags&=32767,Z=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){Z=t;return}Z=t=r}while(t!==null);vt=6,Z=null}function O0(t,a,r,e,i,n,o,d,h){t.cancelPendingCommit=null;do jl();while(Wt!==0);if((J&6)!==0)throw Error(m(327));if(a!==null){if(a===t.current)throw Error(m(177));if(n=a.lanes|a.childLanes,n|=id,qp(t,r,n,o,d,h),t===nt&&(Z=nt=null,G=0),hi=a,Dr=t,dr=r,V1=n,z1=i,ks=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,pf(Zo,function(){return Ss(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=V.T,V.T=null,i=R.p,R.p=2,o=J,J|=4;try{rf(t,a,r)}finally{J=o,R.p=i,V.T=e}}Wt=1,Bs(),js(),Ws()}}function Bs(){if(Wt===1){Wt=0;var t=Dr,a=hi,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=V.T,V.T=null;var e=R.p;R.p=2;var i=J;J|=4;try{cs(a,t);var n=D1,o=Yh(t.containerInfo),d=n.focusedElem,h=n.selectionRange;if(o!==d&&d&&d.ownerDocument&&Gh(d.ownerDocument.documentElement,d)){if(h!==null&&ed(d)){var s=h.start,f=h.end;if(f===void 0&&(f=s),"selectionStart"in d)d.selectionStart=s,d.selectionEnd=Math.min(f,d.value.length);else{var k=d.ownerDocument||document,p=k&&k.defaultView||window;if(p.getSelection){var x=p.getSelection(),y=d.textContent.length,b=Math.min(h.start,y),E=h.end===void 0?b:Math.min(h.end,y);!x.extend&&b>E&&(o=E,E=b,b=o);var g=l0(d,b),u=l0(d,E);if(g&&u&&(x.rangeCount!==1||x.anchorNode!==g.node||x.anchorOffset!==g.offset||x.focusNode!==u.node||x.focusOffset!==u.offset)){var v=k.createRange();v.setStart(g.node,g.offset),x.removeAllRanges(),b>E?(x.addRange(v),x.extend(u.node,u.offset)):(v.setEnd(u.node,u.offset),x.addRange(v))}}}}for(k=[],x=d;x=x.parentNode;)x.nodeType===1&&k.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<k.length;d++){var L=k[d];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}ul=!!E1,D1=E1=null}finally{J=i,R.p=e,V.T=r}}t.current=a,Wt=2}}function js(){if(Wt===2){Wt=0;var t=Dr,a=hi,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=V.T,V.T=null;var e=R.p;R.p=2;var i=J;J|=4;try{is(t,a.alternate,a)}finally{J=i,R.p=e,V.T=r}}Wt=3}}function Ws(){if(Wt===4||Wt===3){Wt=0,zp();var t=Dr,a=hi,r=dr,e=ks;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Wt=5:(Wt=0,hi=Dr=null,Hs(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Er=null),F1(r),a=a.stateNode,sa&&typeof sa.onCommitFiberRoot=="function")try{sa.onCommitFiberRoot(Wn,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=V.T,i=R.p,R.p=2,V.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var d=e[o];n(d.value,{componentStack:d.stack})}}finally{V.T=a,R.p=i}}(dr&3)!==0&&jl(),Ya(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===_1?un++:(un=0,_1=t):un=0,Nn(0,!1)}}function Hs(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,zn(a)))}function jl(){return Bs(),js(),Ws(),Ss()}function Ss(){if(Wt!==5)return!1;var t=Dr,a=V1;V1=0;var r=F1(dr),e=V.T,i=R.p;try{R.p=32>r?32:r,V.T=null,r=z1,z1=null;var n=Dr,o=dr;if(Wt=0,hi=Dr=null,dr=0,(J&6)!==0)throw Error(m(331));var d=J;if(J|=4,ps(n.current),us(n,n.current,o,r),J=d,Nn(0,!1),sa&&typeof sa.onPostCommitFiberRoot=="function")try{sa.onPostCommitFiberRoot(Wn,n)}catch{}return!0}finally{R.p=i,V.T=e,Hs(t,a)}}function U0(t,a,r){a=ba(r,a),a=j1(t.stateNode,a,2),t=Nr(t,a,2),t!==null&&(Sn(t,2),Ya(t))}function at(t,a,r){if(t.tag===3)U0(t,t,r);else for(;a!==null;){if(a.tag===3){U0(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Er===null||!Er.has(e))){t=ba(r,t),r=Xu(2),e=Nr(a,r,2),e!==null&&(Qu(r,e,a,t),Sn(e,2),Ya(e));break}}a=a.return}}function X2(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new of;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(Ad=!0,i.add(r),t=uf.bind(null,t,a,r),a.then(t,t))}function uf(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,nt===t&&(G&r)===r&&(vt===4||vt===3&&(G&62914560)===G&&300>ua()-Cl?(J&2)===0&&ui(t,0):Vd|=r,ci===G&&(ci=0)),Ya(t)}function As(t,a){a===0&&(a=yh()),t=ve(t,a),t!==null&&(Sn(t,a),Ya(t))}function sf(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),As(t,r)}function gf(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(m(314))}e!==null&&e.delete(a),As(t,r)}function pf(t,a){return J1(t,a)}var il=null,Ee=null,T1=!1,nl=!1,Q2=!1,Vr=0;function Ya(t){t!==Ee&&t.next===null&&(Ee===null?il=Ee=t:Ee=Ee.next=t),nl=!0,T1||(T1=!0,vf())}function Nn(t,a){if(!Q2&&nl){Q2=!0;do for(var r=!1,e=il;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,d=e.pingedLanes;n=(1<<31-ga(42|t)+1)-1,n&=i&~(o&~d),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,Z0(e,n))}else n=G,n=gl(e,e===nt?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||Hn(e,n)||(r=!0,Z0(e,n));e=e.next}while(r);Q2=!1}}function ff(){Vs()}function Vs(){nl=T1=!1;var t=0;Vr!==0&&Cf()&&(t=Vr);for(var a=ua(),r=null,e=il;e!==null;){var i=e.next,n=zs(e,a);n===0?(e.next=null,r===null?il=i:r.next=i,i===null&&(Ee=r)):(r=e,(t!==0||(n&3)!==0)&&(nl=!0)),e=i}Wt!==0&&Wt!==5||Nn(t,!1),Vr!==0&&(Vr=0)}function zs(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-ga(n),d=1<<o,h=i[o];h===-1?((d&r)===0||(d&e)!==0)&&(i[o]=Zp(d,a)):h<=a&&(t.expiredLanes|=d),n&=~d}if(a=nt,r=G,r=gl(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(tt===2||tt===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&m2(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Hn(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&m2(e),F1(r)){case 2:case 8:r=Mh;break;case 32:r=Zo;break;case 268435456:r=mh;break;default:r=Zo}return e=_s.bind(null,t),r=J1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&m2(e),t.callbackPriority=2,t.callbackNode=null,2}function _s(t,a){if(Wt!==0&&Wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(jl()&&t.callbackNode!==r)return null;var e=G;return e=gl(t,t===nt?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(Ls(t,e,a),zs(t,ua()),t.callbackNode!=null&&t.callbackNode===r?_s.bind(null,t):null)}function Z0(t,a){if(jl())return null;Ls(t,a,!0)}function vf(){Bf(function(){(J&6)!==0?J1(Lh,ff):Vs()})}function _d(){if(Vr===0){var t=oi;t===0&&(t=no,no<<=1,(no&261888)===0&&(no=256)),Vr=t}return Vr}function q0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Co(""+t)}function G0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function kf(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=q0((i[ea]||null).action),o=e.submitter;o&&(a=(a=o[ea]||null)?q0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var d=new pl("action","action",null,e,i);t.push({event:d,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Vr!==0){var h=o?G0(i,o):new FormData(i);b1(r,{pending:!0,data:h,method:i.method,action:n},null,h)}}else typeof n=="function"&&(d.preventDefault(),h=o?G0(i,o):new FormData(i),b1(r,{pending:!0,data:h,method:i.method,action:n},n,h))},currentTarget:i}]})}}for(xo=0;xo<g1.length;xo++)Lo=g1[xo],Y0=Lo.toLowerCase(),X0=Lo[0].toUpperCase()+Lo.slice(1),Na(Y0,"on"+X0);var Lo,Y0,X0,xo;Na(Qh,"onAnimationEnd");Na(Kh,"onAnimationIteration");Na(Jh,"onAnimationStart");Na("dblclick","onDoubleClick");Na("focusin","onFocus");Na("focusout","onBlur");Na(_5,"onTransitionRun");Na(T5,"onTransitionStart");Na(N5,"onTransitionCancel");Na(Rh,"onTransitionEnd");ii("onMouseEnter",["mouseout","mouseover"]);ii("onMouseLeave",["mouseout","mouseover"]);ii("onPointerEnter",["pointerout","pointerover"]);ii("onPointerLeave",["pointerout","pointerover"]);ge("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ge("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ge("onBeforeInput",["compositionend","keypress","textInput","paste"]);ge("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ge("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ge("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yn));function Ts(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var d=e[o],h=d.instance,s=d.currentTarget;if(d=d.listener,h!==n&&i.isPropagationStopped())break t;n=d,i.currentTarget=s;try{n(i)}catch(f){Go(f)}i.currentTarget=null,n=h}else for(o=0;o<e.length;o++){if(d=e[o],h=d.instance,s=d.currentTarget,d=d.listener,h!==n&&i.isPropagationStopped())break t;n=d,i.currentTarget=s;try{n(i)}catch(f){Go(f)}i.currentTarget=null,n=h}}}}function U(t,a){var r=a[n1];r===void 0&&(r=a[n1]=new Set);var e=t+"__bubble";r.has(e)||(Ns(a,t,2,!1),r.add(e))}function K2(t,a,r){var e=0;a&&(e|=4),Ns(r,t,e,a)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Td(t){if(!t[Mo]){t[Mo]=!0,jh.forEach(function(r){r!=="selectionchange"&&(xf.has(r)||K2(r,!1,t),K2(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Mo]||(a[Mo]=!0,K2("selectionchange",!1,a))}}function Ns(t,a,r,e){switch(Rs(a)){case 2:var i=Qf;break;case 8:i=Kf;break;default:i=Od}r=i.bind(null,a,r,t),i=void 0,!h1||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function J2(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var d=e.stateNode.containerInfo;if(d===i)break;if(o===4)for(o=e.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;d!==null;){if(o=Ue(d),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){e=n=o;continue t}d=d.parentNode}}e=e.return}Th(function(){var s=n,f=P1(r),k=[];t:{var p=Fh.get(t);if(p!==void 0){var x=pl,y=t;switch(t){case"keypress":if(Bo(r)===0)break t;case"keydown":case"keyup":x=s5;break;case"focusin":y="focus",x=B2;break;case"focusout":y="blur",x=B2;break;case"beforeblur":case"afterblur":x=B2;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=t5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=f5;break;case Qh:case Kh:case Jh:x=e5;break;case Rh:x=k5;break;case"scroll":case"scrollend":x=Ip;break;case"wheel":x=L5;break;case"copy":case"cut":case"paste":x=n5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=t0;break;case"toggle":case"beforetoggle":x=m5}var b=(a&4)!==0,E=!b&&(t==="scroll"||t==="scrollend"),g=b?p!==null?p+"Capture":null:p;b=[];for(var u=s,v;u!==null;){var L=u;if(v=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||v===null||g===null||(L=pn(u,g),L!=null&&b.push(wn(u,L,v))),E)break;u=u.return}0<b.length&&(p=new x(p,y,null,r,f),k.push({event:p,listeners:b}))}}if((a&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",p&&r!==c1&&(y=r.relatedTarget||r.fromElement)&&(Ue(y)||y[pi]))break t;if((x||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,x?(y=r.relatedTarget||r.toElement,x=s,y=y?Ue(y):null,y!==null&&(E=jn(y),b=y.tag,y!==E||b!==5&&b!==27&&b!==6)&&(y=null)):(x=null,y=s),x!==y)){if(b=Ic,L="onMouseLeave",g="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(b=t0,L="onPointerLeave",g="onPointerEnter",u="pointer"),E=x==null?p:Fi(x),v=y==null?p:Fi(y),p=new b(L,u+"leave",x,r,f),p.target=E,p.relatedTarget=v,L=null,Ue(f)===s&&(b=new b(g,u+"enter",y,r,f),b.target=v,b.relatedTarget=E,L=b),E=L,x&&y)a:{for(b=Lf,g=x,u=y,v=0,L=g;L;L=b(L))v++;L=0;for(var W=u;W;W=b(W))L++;for(;0<v-L;)g=b(g),v--;for(;0<L-v;)u=b(u),L--;for(;v--;){if(g===u||u!==null&&g===u.alternate){b=g;break a}g=b(g),u=b(u)}b=null}else b=null;x!==null&&Q0(k,p,x,b,!1),y!==null&&E!==null&&Q0(k,E,y,b,!0)}}t:{if(p=s?Fi(s):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var z=i0;else if(e0(p))if(Zh)z=A5;else{z=H5;var B=W5}else x=p.nodeName,!x||x.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?s&&I1(s.elementType)&&(z=i0):z=S5;if(z&&(z=z(t,s))){Uh(k,z,r,f);break t}B&&B(t,p,s),t==="focusout"&&s&&p.type==="number"&&s.memoizedProps.value!=null&&d1(p,"number",p.value)}switch(B=s?Fi(s):window,t){case"focusin":(e0(B)||B.contentEditable==="true")&&(Ge=B,u1=s,an=null);break;case"focusout":an=u1=Ge=null;break;case"mousedown":s1=!0;break;case"contextmenu":case"mouseup":case"dragend":s1=!1,d0(k,r,f);break;case"selectionchange":if(z5)break;case"keydown":case"keyup":d0(k,r,f)}var A;if(rd)t:{switch(t){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else qe?Dh(t,r)&&(T="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(Eh&&r.locale!=="ko"&&(qe||T!=="onCompositionStart"?T==="onCompositionEnd"&&qe&&(A=Nh()):(Hr=f,td="value"in Hr?Hr.value:Hr.textContent,qe=!0)),B=ol(s,T),0<B.length&&(T=new Pc(T,t,null,r,f),k.push({event:T,listeners:B}),A?T.data=A:(A=Oh(r),A!==null&&(T.data=A)))),(A=w5?C5(t,r):b5(t,r))&&(T=ol(s,"onBeforeInput"),0<T.length&&(B=new Pc("onBeforeInput","beforeinput",null,r,f),k.push({event:B,listeners:T}),B.data=A)),kf(k,t,s,r,f)}Ts(k,a)})}function wn(t,a,r){return{instance:t,listener:a,currentTarget:r}}function ol(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=pn(t,r),i!=null&&e.unshift(wn(t,i,n)),i=pn(t,a),i!=null&&e.push(wn(t,i,n))),t.tag===3)return e;t=t.return}return[]}function Lf(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Q0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var d=r,h=d.alternate,s=d.stateNode;if(d=d.tag,h!==null&&h===e)break;d!==5&&d!==26&&d!==27||s===null||(h=s,i?(s=pn(r,n),s!=null&&o.unshift(wn(r,s,h))):i||(s=pn(r,n),s!=null&&o.push(wn(r,s,h)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var Mf=/\r\n?/g,mf=/\u0000|\uFFFD/g;function K0(t){return(typeof t=="string"?t:""+t).replace(Mf,`
`).replace(mf,"")}function Es(t,a){return a=K0(a),K0(t)===a}function rt(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||ni(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&ni(t,""+e);break;case"className":co(t,"class",e);break;case"tabIndex":co(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":co(t,r,e);break;case"style":_h(t,e,n);break;case"data":if(a!=="object"){co(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=Co(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&rt(t,a,"name",i.name,i,null),rt(t,a,"formEncType",i.formEncType,i,null),rt(t,a,"formMethod",i.formMethod,i,null),rt(t,a,"formTarget",i.formTarget,i,null)):(rt(t,a,"encType",i.encType,i,null),rt(t,a,"method",i.method,i,null),rt(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=Co(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=ir);break;case"onScroll":e!=null&&U("scroll",t);break;case"onScrollEnd":e!=null&&U("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(m(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(m(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=Co(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":U("beforetoggle",t),U("toggle",t),wo(t,"popover",e);break;case"xlinkActuate":Fa(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Fa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Fa(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Fa(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Fa(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Fa(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Fa(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Fa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Fa(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":wo(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Fp.get(r)||r,wo(t,r,e))}}function N1(t,a,r,e,i,n){switch(r){case"style":_h(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(m(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(m(60));t.innerHTML=r}}break;case"children":typeof e=="string"?ni(t,e):(typeof e=="number"||typeof e=="bigint")&&ni(t,""+e);break;case"onScroll":e!=null&&U("scroll",t);break;case"onScrollEnd":e!=null&&U("scrollend",t);break;case"onClick":e!=null&&(t.onclick=ir);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wh.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[ea]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):wo(t,r,e)}}}function Gt(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":U("error",t),U("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:rt(t,a,n,o,r,null)}}i&&rt(t,a,"srcSet",r.srcSet,r,null),e&&rt(t,a,"src",r.src,r,null);return;case"input":U("invalid",t);var d=n=o=i=null,h=null,s=null;for(e in r)if(r.hasOwnProperty(e)){var f=r[e];if(f!=null)switch(e){case"name":i=f;break;case"type":o=f;break;case"checked":h=f;break;case"defaultChecked":s=f;break;case"value":n=f;break;case"defaultValue":d=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(m(137,a));break;default:rt(t,a,e,f,r,null)}}Ah(t,n,d,h,s,o,i,!1);return;case"select":U("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(d=r[i],d!=null))switch(i){case"value":n=d;break;case"defaultValue":o=d;break;case"multiple":e=d;default:rt(t,a,i,d,r,null)}a=n,r=o,t.multiple=!!e,a!=null?$e(t,!!e,a,!1):r!=null&&$e(t,!!e,r,!0);return;case"textarea":U("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(d=r[o],d!=null))switch(o){case"value":e=d;break;case"defaultValue":i=d;break;case"children":n=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(m(91));break;default:rt(t,a,o,d,r,null)}zh(t,e,i,n);return;case"option":for(h in r)r.hasOwnProperty(h)&&(e=r[h],e!=null)&&(h==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":rt(t,a,h,e,r,null));return;case"dialog":U("beforetoggle",t),U("toggle",t),U("cancel",t),U("close",t);break;case"iframe":case"object":U("load",t);break;case"video":case"audio":for(e=0;e<yn.length;e++)U(yn[e],t);break;case"image":U("error",t),U("load",t);break;case"details":U("toggle",t);break;case"embed":case"source":case"link":U("error",t),U("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(s in r)if(r.hasOwnProperty(s)&&(e=r[s],e!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:rt(t,a,s,e,r,null)}return;default:if(I1(a)){for(f in r)r.hasOwnProperty(f)&&(e=r[f],e!==void 0&&N1(t,a,f,e,r,void 0));return}}for(d in r)r.hasOwnProperty(d)&&(e=r[d],e!=null&&rt(t,a,d,e,r,null))}function yf(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,d=null,h=null,s=null,f=null;for(x in r){var k=r[x];if(r.hasOwnProperty(x)&&k!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":h=k;default:e.hasOwnProperty(x)||rt(t,a,x,null,e,k)}}for(var p in e){var x=e[p];if(k=r[p],e.hasOwnProperty(p)&&(x!=null||k!=null))switch(p){case"type":n=x;break;case"name":i=x;break;case"checked":s=x;break;case"defaultChecked":f=x;break;case"value":o=x;break;case"defaultValue":d=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(m(137,a));break;default:x!==k&&rt(t,a,p,x,e,k)}}l1(t,o,d,h,s,f,n,i);return;case"select":x=o=d=p=null;for(n in r)if(h=r[n],r.hasOwnProperty(n)&&h!=null)switch(n){case"value":break;case"multiple":x=h;default:e.hasOwnProperty(n)||rt(t,a,n,null,e,h)}for(i in e)if(n=e[i],h=r[i],e.hasOwnProperty(i)&&(n!=null||h!=null))switch(i){case"value":p=n;break;case"defaultValue":d=n;break;case"multiple":o=n;default:n!==h&&rt(t,a,i,n,e,h)}a=d,r=o,e=x,p!=null?$e(t,!!r,p,!1):!!e!=!!r&&(a!=null?$e(t,!!r,a,!0):$e(t,!!r,r?[]:"",!1));return;case"textarea":x=p=null;for(d in r)if(i=r[d],r.hasOwnProperty(d)&&i!=null&&!e.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:rt(t,a,d,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":p=i;break;case"defaultValue":x=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:i!==n&&rt(t,a,o,i,e,n)}Vh(t,p,x);return;case"option":for(var y in r)p=r[y],r.hasOwnProperty(y)&&p!=null&&!e.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:rt(t,a,y,null,e,p));for(h in e)p=e[h],x=r[h],e.hasOwnProperty(h)&&p!==x&&(p!=null||x!=null)&&(h==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":rt(t,a,h,p,e,x));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in r)p=r[b],r.hasOwnProperty(b)&&p!=null&&!e.hasOwnProperty(b)&&rt(t,a,b,null,e,p);for(s in e)if(p=e[s],x=r[s],e.hasOwnProperty(s)&&p!==x&&(p!=null||x!=null))switch(s){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,a));break;default:rt(t,a,s,p,e,x)}return;default:if(I1(a)){for(var E in r)p=r[E],r.hasOwnProperty(E)&&p!==void 0&&!e.hasOwnProperty(E)&&N1(t,a,E,void 0,e,p);for(f in e)p=e[f],x=r[f],!e.hasOwnProperty(f)||p===x||p===void 0&&x===void 0||N1(t,a,f,p,e,x);return}}for(var g in r)p=r[g],r.hasOwnProperty(g)&&p!=null&&!e.hasOwnProperty(g)&&rt(t,a,g,null,e,p);for(k in e)p=e[k],x=r[k],!e.hasOwnProperty(k)||p===x||p==null&&x==null||rt(t,a,k,p,e,x)}function J0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wf(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,d=i.duration;if(n&&d&&J0(o)){for(o=0,d=i.responseEnd,e+=1;e<r.length;e++){var h=r[e],s=h.startTime;if(s>d)break;var f=h.transferSize,k=h.initiatorType;f&&J0(k)&&(h=h.responseEnd,o+=f*(h<d?1:(d-s)/(h-s)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var E1=null,D1=null;function ll(t){return t.nodeType===9?t:t.ownerDocument}function R0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ds(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function O1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var R2=null;function Cf(){var t=window.event;return t&&t.type==="popstate"?t===R2?!1:(R2=t,!0):(R2=null,!1)}var Os=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,F0=typeof Promise=="function"?Promise:void 0,Bf=typeof queueMicrotask=="function"?queueMicrotask:typeof F0<"u"?function(t){return F0.resolve(null).then(t).catch(jf)}:Os;function jf(t){setTimeout(function(){throw t})}function Kr(t){return t==="head"}function $0(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),gi(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")sn(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,sn(r);for(var n=r.firstChild;n;){var o=n.nextSibling,d=n.nodeName;n[An]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&sn(t.ownerDocument.body);r=i}while(r);gi(a)}function I0(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function U1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":U1(r),$1(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Wf(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[An])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=Wa(t.nextSibling),t===null)break}return null}function Hf(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Wa(t.nextSibling),t===null))return null;return t}function Us(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Wa(t.nextSibling),t===null))return null;return t}function Z1(t){return t.data==="$?"||t.data==="$~"}function q1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Sf(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function Wa(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var G1=null;function P0(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return Wa(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function th(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function Zs(t,a,r){switch(a=ll(r),t){case"html":if(t=a.documentElement,!t)throw Error(m(452));return t;case"head":if(t=a.head,!t)throw Error(m(453));return t;case"body":if(t=a.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function sn(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);$1(t)}var Ha=new Map,ah=new Set;function dl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var pr=R.d;R.d={f:Af,r:Vf,D:zf,C:_f,L:Tf,m:Nf,X:Df,S:Ef,M:Of};function Af(){var t=pr.f(),a=bl();return t||a}function Vf(t){var a=fi(t);a!==null&&a.tag===5&&a.type==="form"?_u(a):pr.r(t)}var Li=typeof document>"u"?null:document;function qs(t,a,r){var e=Li;if(e&&typeof a=="string"&&a){var i=Ca(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),ah.has(i)||(ah.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),Gt(a,"link",t),Tt(a),e.head.appendChild(a)))}}function zf(t){pr.D(t),qs("dns-prefetch",t,null)}function _f(t,a){pr.C(t,a),qs("preconnect",t,a)}function Tf(t,a,r){pr.L(t,a,r);var e=Li;if(e&&t&&a){var i='link[rel="preload"][as="'+Ca(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+Ca(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+Ca(r.imageSizes)+'"]')):i+='[href="'+Ca(t)+'"]';var n=i;switch(a){case"style":n=si(t);break;case"script":n=Mi(t)}Ha.has(n)||(t=ut({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),Ha.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(En(n))||a==="script"&&e.querySelector(Dn(n))||(a=e.createElement("link"),Gt(a,"link",t),Tt(a),e.head.appendChild(a)))}}function Nf(t,a){pr.m(t,a);var r=Li;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+Ca(e)+'"][href="'+Ca(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Mi(t)}if(!Ha.has(n)&&(t=ut({rel:"modulepreload",href:t},a),Ha.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Dn(n)))return}e=r.createElement("link"),Gt(e,"link",t),Tt(e),r.head.appendChild(e)}}}function Ef(t,a,r){pr.S(t,a,r);var e=Li;if(e&&t){var i=Fe(e).hoistableStyles,n=si(t);a=a||"default";var o=i.get(n);if(!o){var d={loading:0,preload:null};if(o=e.querySelector(En(n)))d.loading=5;else{t=ut({rel:"stylesheet",href:t,"data-precedence":a},r),(r=Ha.get(n))&&Nd(t,r);var h=o=e.createElement("link");Tt(h),Gt(h,"link",t),h._p=new Promise(function(s,f){h.onload=s,h.onerror=f}),h.addEventListener("load",function(){d.loading|=1}),h.addEventListener("error",function(){d.loading|=2}),d.loading|=4,_o(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:d},i.set(n,o)}}}function Df(t,a){pr.X(t,a);var r=Li;if(r&&t){var e=Fe(r).hoistableScripts,i=Mi(t),n=e.get(i);n||(n=r.querySelector(Dn(i)),n||(t=ut({src:t,async:!0},a),(a=Ha.get(i))&&Ed(t,a),n=r.createElement("script"),Tt(n),Gt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function Of(t,a){pr.M(t,a);var r=Li;if(r&&t){var e=Fe(r).hoistableScripts,i=Mi(t),n=e.get(i);n||(n=r.querySelector(Dn(i)),n||(t=ut({src:t,async:!0,type:"module"},a),(a=Ha.get(i))&&Ed(t,a),n=r.createElement("script"),Tt(n),Gt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function rh(t,a,r,e){var i=(i=zr.current)?dl(i):null;if(!i)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=si(r.href),r=Fe(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=si(r.href);var n=Fe(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(En(t)))&&!n._p&&(o.instance=n,o.state.loading=5),Ha.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ha.set(t,r),n||Uf(i,t,r,o.state))),a&&e===null)throw Error(m(528,""));return o}if(a&&e!==null)throw Error(m(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Mi(r),r=Fe(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function si(t){return'href="'+Ca(t)+'"'}function En(t){return'link[rel="stylesheet"]['+t+"]"}function Gs(t){return ut({},t,{"data-precedence":t.precedence,precedence:null})}function Uf(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),Gt(a,"link",r),Tt(a),t.head.appendChild(a))}function Mi(t){return'[src="'+Ca(t)+'"]'}function Dn(t){return"script[async]"+t}function eh(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+Ca(r.href)+'"]');if(e)return a.instance=e,Tt(e),e;var i=ut({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Tt(e),Gt(e,"style",i),_o(e,r.precedence,t),a.instance=e;case"stylesheet":i=si(r.href);var n=t.querySelector(En(i));if(n)return a.state.loading|=4,a.instance=n,Tt(n),n;e=Gs(r),(i=Ha.get(i))&&Nd(e,i),n=(t.ownerDocument||t).createElement("link"),Tt(n);var o=n;return o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),Gt(n,"link",e),a.state.loading|=4,_o(n,r.precedence,t),a.instance=n;case"script":return n=Mi(r.src),(i=t.querySelector(Dn(n)))?(a.instance=i,Tt(i),i):(e=r,(i=Ha.get(n))&&(e=ut({},r),Ed(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),Tt(i),Gt(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(m(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,_o(e,r.precedence,t));return a.instance}function _o(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var d=e[o];if(d.dataset.precedence===a)n=d;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function Nd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function Ed(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var To=null;function ih(t,a,r){if(To===null){var e=new Map,i=To=new Map;i.set(r,e)}else i=To,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[An]||n[Ut]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var d=e.get(o);d?d.push(n):e.set(o,[n])}}return e}function nh(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function Zf(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Ys(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function qf(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=si(e.href),n=a.querySelector(En(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=cl.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,Tt(n);return}n=a.ownerDocument||a,e=Gs(e),(i=Ha.get(i))&&Nd(e,i),n=n.createElement("link"),Tt(n);var o=n;o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),Gt(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=cl.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var F2=0;function Gf(t,a){return t.stylesheets&&t.count===0&&No(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&No(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&F2===0&&(F2=62500*wf());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&No(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>F2?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function cl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)No(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hl=null;function No(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hl=new Map,a.forEach(Yf,t),hl=null,cl.call(t))}function Yf(t,a){if(!(a.state.loading&4)){var r=hl.get(t);if(r)var e=r.get(null);else{r=new Map,hl.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=cl.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var Cn={$$typeof:er,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Xf(t,a,r,e,i,n,o,d,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=y2(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=y2(0),this.hiddenUpdates=y2(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Xs(t,a,r,e,i,n,o,d,h,s,f,k){return t=new Xf(t,a,r,o,h,s,f,k,d),a=1,n===!0&&(a|=24),n=ca(3,null,null,a),t.current=n,n.stateNode=t,a=cd(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},sd(n),t}function Qs(t){return t?(t=Qe,t):Qe}function Ks(t,a,r,e,i,n){i=Qs(i),e.context===null?e.context=i:e.pendingContext=i,e=Tr(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=Nr(t,e,a),r!==null&&(ra(r,t,a),en(r,t,a))}function oh(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function Dd(t,a){oh(t,a),(t=t.alternate)&&oh(t,a)}function Js(t){if(t.tag===13||t.tag===31){var a=ve(t,67108864);a!==null&&ra(a,t,67108864),Dd(t,67108864)}}function lh(t){if(t.tag===13||t.tag===31){var a=pa();a=R1(a);var r=ve(t,a);r!==null&&ra(r,t,a),Dd(t,a)}}var ul=!0;function Qf(t,a,r,e){var i=V.T;V.T=null;var n=R.p;try{R.p=2,Od(t,a,r,e)}finally{R.p=n,V.T=i}}function Kf(t,a,r,e){var i=V.T;V.T=null;var n=R.p;try{R.p=8,Od(t,a,r,e)}finally{R.p=n,V.T=i}}function Od(t,a,r,e){if(ul){var i=Y1(e);if(i===null)J2(t,a,e,sl,r),dh(t,e);else if(Rf(i,t,a,r,e))e.stopPropagation();else if(dh(t,e),a&4&&-1<Jf.indexOf(t)){for(;i!==null;){var n=fi(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=te(n.pendingLanes);if(o!==0){var d=n;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var h=1<<31-ga(o);d.entanglements[1]|=h,o&=~h}Ya(n),(J&6)===0&&(al=ua()+500,Nn(0,!1))}}break;case 31:case 13:d=ve(n,2),d!==null&&ra(d,n,2),bl(),Dd(n,2)}if(n=Y1(e),n===null&&J2(t,a,e,sl,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else J2(t,a,e,null,r)}}function Y1(t){return t=P1(t),Ud(t)}var sl=null;function Ud(t){if(sl=null,t=Ue(t),t!==null){var a=jn(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=ph(a),t!==null)return t;t=null}else if(r===31){if(t=fh(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return sl=t,null}function Rs(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_p()){case Lh:return 2;case Mh:return 8;case Zo:case Tp:return 32;case mh:return 268435456;default:return 32}default:return 32}}var X1=!1,Or=null,Ur=null,Zr=null,bn=new Map,Bn=new Map,jr=[],Jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dh(t,a){switch(t){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":bn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(a.pointerId)}}function Qi(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=fi(a),a!==null&&Js(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function Rf(t,a,r,e,i){switch(a){case"focusin":return Or=Qi(Or,t,a,r,e,i),!0;case"dragenter":return Ur=Qi(Ur,t,a,r,e,i),!0;case"mouseover":return Zr=Qi(Zr,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return bn.set(n,Qi(bn.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,Bn.set(n,Qi(Bn.get(n)||null,t,a,r,e,i)),!0}return!1}function Fs(t){var a=Ue(t.target);if(a!==null){var r=jn(a);if(r!==null){if(a=r.tag,a===13){if(a=ph(r),a!==null){t.blockedOn=a,Xc(t.priority,function(){lh(r)});return}}else if(a===31){if(a=fh(r),a!==null){t.blockedOn=a,Xc(t.priority,function(){lh(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Eo(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=Y1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);c1=e,r.target.dispatchEvent(e),c1=null}else return a=fi(r),a!==null&&Js(a),t.blockedOn=r,!1;a.shift()}return!0}function ch(t,a,r){Eo(t)&&r.delete(a)}function Ff(){X1=!1,Or!==null&&Eo(Or)&&(Or=null),Ur!==null&&Eo(Ur)&&(Ur=null),Zr!==null&&Eo(Zr)&&(Zr=null),bn.forEach(ch),Bn.forEach(ch)}function mo(t,a){t.blockedOn===a&&(t.blockedOn=null,X1||(X1=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,Ff)))}var yo=null;function hh(t){yo!==t&&(yo=t,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,function(){yo===t&&(yo=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(Ud(e||r)===null)continue;break}var n=fi(r);n!==null&&(t.splice(a,3),a-=3,b1(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function gi(t){function a(h){return mo(h,t)}Or!==null&&mo(Or,t),Ur!==null&&mo(Ur,t),Zr!==null&&mo(Zr,t),bn.forEach(a),Bn.forEach(a);for(var r=0;r<jr.length;r++){var e=jr[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<jr.length&&(r=jr[0],r.blockedOn===null);)Fs(r),r.blockedOn===null&&jr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[ea]||null;if(typeof n=="function")o||hh(r);else if(o){var d=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[ea]||null)d=o.formAction;else if(Ud(i)!==null)continue}else d=o.action;typeof d=="function"?r[e+1]=d:(r.splice(e,3),e-=3),hh(r)}}}function $s(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function Zd(t){this._internalRoot=t}Wl.prototype.render=Zd.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(m(409));var r=a.current,e=pa();Ks(r,e,t,a,null,null)};Wl.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Ks(t.current,2,null,t,null,null),bl(),a[pi]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var a=Bh();t={blockedOn:null,target:t,priority:a};for(var r=0;r<jr.length&&a!==0&&a<jr[r].priority;r++);jr.splice(r,0,t),r===0&&Fs(t)}};var uh=sh.version;if(uh!=="19.2.8")throw Error(m(527,uh,"19.2.8"));R.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=jp(a),t=t!==null?vh(t):null,t=t===null?null:t.stateNode,t};var $f={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ki=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ki.isDisabled&&Ki.supportsFiber))try{Wn=Ki.inject($f),sa=Ki}catch{}var Ki;Hl.createRoot=function(t,a){if(!gh(t))throw Error(m(299));var r=!1,e="",i=qu,n=Gu,o=Yu;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=Xs(t,1,!1,null,null,r,e,null,i,n,o,$s),t[pi]=a.current,Td(t),new Zd(a)};Hl.hydrateRoot=function(t,a,r){if(!gh(t))throw Error(m(299));var e=!1,i="",n=qu,o=Gu,d=Yu,h=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(d=r.onRecoverableError),r.formState!==void 0&&(h=r.formState)),a=Xs(t,1,!0,a,r??null,e,i,h,n,o,d,$s),a.context=Qs(null),r=a.current,e=pa(),e=R1(e),i=Tr(e),i.callback=null,Nr(r,i,e),r=e,a.current.lanes=r,Sn(a,r),Ya(a),t[pi]=a.current,Td(t),new Wl(a)};Hl.version="19.2.8"});var ag=Lr((_v,tg)=>{"use strict";function Ps(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ps)}catch(t){console.error(t)}}Ps(),tg.exports=Is()});var At=$r(Ja()),_4=$r(ag());var mi=$r(Ja(),1);var qd=$r(Ja(),1),Gd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Yd=qd.default.createContext&&qd.default.createContext(Gd);var If=["attr","size","title"];function Pf(t,a){if(t==null)return{};var r,e,i=tv(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function tv(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function Sl(){return Sl=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},Sl.apply(null,arguments)}function rg(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function Al(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?rg(Object(r),!0).forEach(function(e){av(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rg(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function av(t,a,r){return(a=rv(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function rv(t){var a=ev(t,"string");return typeof a=="symbol"?a:a+""}function ev(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function eg(t){return t&&t.map((a,r)=>mi.default.createElement(a.tag,Al({key:r},a.attr),eg(a.child)))}function Y(t){return a=>mi.default.createElement(iv,Sl({attr:Al({},t.attr)},a),eg(t.child))}function iv(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=Pf(t,If),d=i||r.size||"1em",h;return r.className&&(h=r.className),t.className&&(h=(h?h+" ":"")+t.className),mi.default.createElement("svg",Sl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:h,style:Al(Al({color:t.color||r.color},r.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),n&&mi.default.createElement("title",null,n),t.children)};return Yd!==void 0?mi.default.createElement(Yd.Consumer,null,r=>a(r)):a(Gd)}function ig(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function ng(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function og(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function lg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function dg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 14 4 9l5-5"},child:[]},{tag:"path",attr:{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"},child:[]}]})(t)}function cg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function hg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function ug(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function sg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function gg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function pg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},child:[]},{tag:"path",attr:{d:"M3 3v5h5"},child:[]}]})(t)}function fg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function vg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function kg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function xg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function Lg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function Mg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function mg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function yg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function wg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function Cg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function bg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function Bg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function jg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function Wg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(t)}function Hg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function Sg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function Ag(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function Vg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function zg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function _g(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 18 6-6-6-6"},child:[]}]})(t)}function Tg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function Ng(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function Eg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]}]})(t)}function Dg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var Og=wg,Vl=ng,Ug=mg,Xd=Mg,Zg=bg,qg=Bg,Gg=sg,zl=og,Yg=Hg,Xg=Cg,yi=vg;var Qg=Ag,wi=Vg,Qd=cg,Kg=Sg,Kd=hg,Jg=zg,_l=Tg;var On=fg;var Ci=ig,Jd=yg,Rg=Lg,Fg=kg,$g=xg,Tl=Dg,Ig=gg,Pg=Ng,t4=lg,a4=ug,Nl=Wg,r4=jg,e4=Eg,i4=dg,Rd=pg,n4=_g;var Mt=$r(Ja());var H=$r(Ja());var o4={member:zl,coworker:t4,admin_staff:qg,leader:a4,pastor:Zg,admin:Gg},l4=["leader","pastor","admin"],Fd=[{id:"work",label:"工作日誌",Icon:Og,href:"work.html",roles:["pastor","admin_staff","admin"]},{id:"serve",label:"服事管理",Icon:Vl,href:""},{id:"venue",label:"場地預約",Icon:Pg,href:""}],nv=t=>{let a=String(t||"").trim();return/^[\u4e00-\u9fff]+$/.test(a)?a.length===4?a.slice(2):a.length>=2&&a.length<=3?a.slice(1):a:a},d4=["pastor","admin_staff","admin"],c4=(t,a)=>!t.roles||t.roles.includes(a),ov=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},h4=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},u4=({active:t,shell:a})=>{let[r,e]=(0,H.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(y=>{let b=!y;try{localStorage.setItem("tbcSidebarCollapsed",b?"1":"0")}catch{}return b}),[n,o]=(0,H.useState)(!1),[d,h]=(0,H.useState)(""),s=(0,H.useRef)(null),f=a.identity||{name:"",role:"member",status:"loading"},k=o4[f.role]||zl,p=l4.includes(f.role),x=y=>{h(`${y} 尚未開放`),clearTimeout(s.current),s.current=setTimeout(()=>h(""),2200)};return H.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},H.default.createElement("div",{className:"flex flex-col"},H.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},H.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},H.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},H.default.createElement(Tl,{size:20,strokeWidth:2})),r&&H.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},H.default.createElement(Xd,{size:18}))),!r&&H.default.createElement(H.default.Fragment,null,H.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),H.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},H.default.createElement(Xd,{size:18})))),H.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},Fd.map(y=>{let b=t===y.id,E=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${b?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,g=H.default.createElement(H.default.Fragment,null,H.default.createElement(y.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&H.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},y.label));return y.href?b?H.default.createElement("div",{key:y.id,className:E,title:y.label,"aria-current":"page"},g):H.default.createElement("a",{key:y.id,href:y.href,className:E,title:y.label},g):H.default.createElement("button",{key:y.id,type:"button",onClick:()=>x(y.label),className:E,title:y.label},g)}))),H.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},H.default.createElement("button",{type:"button",onClick:()=>o(y=>!y),"aria-haspopup":"menu","aria-expanded":n,className:`tbc-sb-user flex items-center rounded-full transition-colors ${r?"justify-center w-12 h-12 mx-auto bg-slate-100 hover:bg-slate-200":"gap-3 px-4 h-12 w-full hover:bg-slate-100"}`},r?H.default.createElement("span",{className:"text-[13px] text-slate-900 truncate max-w-full px-1"},nv(f.name)):H.default.createElement(H.default.Fragment,null,H.default.createElement(k,{size:20,strokeWidth:1.75,className:`shrink-0 ${p?"text-amber-500":"text-slate-500"}`}),H.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},f.name))),n&&H.default.createElement(H.default.Fragment,null,H.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),H.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},H.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},H.default.createElement(Ug,{size:18,strokeWidth:1.75}),"登出")))),d&&H.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},d))},s4=({supabase:t,notice:a})=>{let[r,e]=(0,H.useState)(!1),[i,n]=(0,H.useState)(""),[o,d]=(0,H.useState)(""),[h,s]=(0,H.useState)(!1),[f,k]=(0,H.useState)(""),p=async y=>{if(y.preventDefault(),!i.trim()||!o||h)return;s(!0),k("");let{error:b}=await t.auth.signInWithPassword({email:ov(i),password:o});s(!1),b&&k("帳號或密碼不正確，請再試一次")},x="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return H.default.createElement("form",{onSubmit:p,className:"w-full max-w-sm mx-auto space-y-3"},H.default.createElement("input",{value:i,onChange:y=>n(y.target.value),placeholder:"帳號",autoComplete:"username",className:x}),H.default.createElement("div",{className:"relative"},H.default.createElement("input",{type:r?"text":"password",value:o,onChange:y=>d(y.target.value),placeholder:"密碼",autoComplete:"current-password",className:x+" pr-12"}),H.default.createElement("button",{type:"button",onClick:()=>e(y=>!y),title:r?"隱藏密碼":"顯示密碼","aria-label":r?"隱藏密碼":"顯示密碼",className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"},r?H.default.createElement(Nl,{size:18}):H.default.createElement(r4,{size:18}))),(f||a)&&H.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},H.default.createElement(wi,{size:16}),f||a),H.default.createElement("button",{type:"submit",disabled:h||!i.trim()||!o,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},h?"登入中…":"登入"))},g4=({shell:t})=>{let a=t.identity||{},r=o4[a.role]||zl,e=l4.includes(a.role);return H.default.createElement("div",{className:"flex flex-col items-center gap-3 mt-14"},H.default.createElement("p",{className:"text-sm text-slate-500"},"準備好了，開始或",H.default.createElement("button",{type:"button",onClick:t.onLogout,className:"tbc-logout ml-0.5 text-indigo-600 hover:text-indigo-700 underline underline-offset-4"},"登出")))};var lv=({shell:t})=>{let[a,r]=(0,Mt.useState)(""),e=(0,Mt.useRef)(null),i=t.identity||{},n=Fd.filter(d=>c4(d,i.role)),o=d=>{r(`${d} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return Mt.default.createElement("div",{className:"relative h-[100dvh] w-full bg-white overflow-hidden"},Mt.default.createElement("main",{className:"h-full overflow-auto custom-scrollbar"},Mt.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},Mt.default.createElement("div",{className:"text-center mb-14"},Mt.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),Mt.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),Mt.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(d=>{let h=Mt.default.createElement(Mt.default.Fragment,null,Mt.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},Mt.default.createElement(d.Icon,{size:40,strokeWidth:1.75})),Mt.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},d.label)),s="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return d.href?Mt.default.createElement("a",{key:d.id,href:d.href,className:s},h):Mt.default.createElement("button",{key:d.id,type:"button",onClick:()=>o(d.label),className:s},h)})),Mt.default.createElement(g4,{shell:t}))),a&&Mt.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},p4=lv;var l=$r(Ja());var Id=["日","一","二","三","四","五","六"],f4={m:15,l:18},$d=["pastor","admin_staff"],v4=[{id:"title",label:"工作摘要",locked:!0,sortable:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"派工",sortable:!0,w:t=>`${Math.ceil(t*4+22)}px`,min:t=>Math.ceil(t*4+22)},{id:"doer",label:"執行",sortable:!0,w:t=>`${Math.ceil(t*4+22)}px`,min:t=>Math.ceil(t*4+22)},{id:"status",label:"狀態",sortable:!0,w:t=>`${Math.ceil(t*.85*4+100)}px`,min:t=>Math.ceil(t*.85*4+100)},{id:"date",label:"日期",sortable:!0,w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(150px,1fr)",min:150},{id:"hours",label:"工時",sortable:!0,w:t=>`${Math.ceil(t*4.8+24)}px`,min:t=>Math.ceil(t*4.8+24)},{id:"priority",label:"優先順序",sortable:!0,w:t=>`${Math.ceil(t*.85*4+52)}px`,min:t=>Math.ceil(t*.85*4+52)},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],dv="Asia/Taipei",k4=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:dv,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},Dl=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},W4=t=>new Date(t).toISOString().slice(0,10),El=(t,a)=>W4(Dl(t)+a*864e5),H4=(t,a)=>Math.round((Dl(t)-Dl(a))/864e5),S4=t=>new Date(Dl(t)).getUTCDay(),cv=t=>El(t,-((S4(t)+6)%7)),Xa=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},hv=(t,a)=>{let r=H4(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${Xa(t)}（${Id[S4(t)]}）`,tag:e}},St=t=>t?String(t).slice(0,5):"",x4=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=St(t.start_time).split(":").map(Number),[e,i]=St(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n>0?n/60:null},uv=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=St(t.start_time).split(":").map(Number),[e,i]=St(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*10)/10} 小時`},L4={urgent:0,normal:1,routine:2},sv={routine:"例行",normal:"普通",urgent:"緊急"},M4={routine:"bg-violet-50 border-violet-100 text-violet-600",normal:"bg-slate-50 border-slate-200 text-slate-500",urgent:"bg-red-50 border-red-100 text-red-600"},gv={routine:"normal",normal:"urgent",urgent:"routine"},Un=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的工作"],["not your item","只有派工者可以修改這筆工作，負責人只能改狀態"],["nothing to confirm","這筆已經不是「待確認」狀態"],["nothing to return","這筆已經不是「待確認」狀態"],["assignee is not allowed","負責人必須是有權限的同工"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期的任務固定在最上面，不能搬移"],["item not in your list","這筆不在你的清單裡"],["item not found or canceled","這筆工作已被取消或不存在"],["more than one member record","這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號"],["no member record","找不到這個帳號對應的同工資料"],["no permission","沒有使用權限"],["permission denied","沒有使用權限"],["dates are required","日期必填"],["weekly rule needs","每週重複請至少選一個星期"],["monthly rule needs","每月重複請選幾號，或勾「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個週期工作"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},pv=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>Id[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 號`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},m4=({person:t,strong:a})=>l.default.createElement("span",{className:`truncate max-w-full ${a?"font-bold text-slate-900":"text-slate-700"}`},t&&t.name||"（未知）"),y4=[[15,"15分鐘"],[30,"30分鐘"],[60,"1小時"],[90,"1.5小時"]],bi=t=>{if(!t)return null;let[a,r]=t.split(":").map(Number);return a*60+r},w4=t=>`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`,C4=t=>String(Math.round(t/60*100)/100),fv=Array.from({length:24},(t,a)=>String(a).padStart(2,"0")),vv=Array.from({length:60},(t,a)=>String(a).padStart(2,"0")),Ol=({value:t,onChange:a,className:r="",autoFocus:e,id:i})=>{let[n,o]=(t||"").split(":"),d=`tbc-time-sel bg-transparent outline-none cursor-pointer text-center ${n===void 0||n===""?"text-slate-400":"text-slate-900"}`;return l.default.createElement("div",{className:`tbc-time flex items-center gap-1 ${r}`},l.default.createElement("select",{id:i,autoFocus:e,"aria-label":"時",value:n||"",className:d,onChange:h=>{let s=h.target.value;a(s===""?"":`${s}:${o||"00"}`)}},l.default.createElement("option",{value:""},"--"),fv.map(h=>l.default.createElement("option",{key:h,value:h},h))),l.default.createElement("span",{className:"text-slate-400"},":"),l.default.createElement("select",{"aria-label":"分",value:o||"",className:d,onChange:h=>{let s=h.target.value;a(s===""&&!n?"":`${n||"00"}:${s||"00"}`)}},l.default.createElement("option",{value:""},"--"),vv.map(h=>l.default.createElement("option",{key:h,value:h},h))))},b4=({id:t,options:a,selected:r,multi:e,onChange:i,bad:n,className:o=""})=>{let[d,h]=(0,l.useState)(!1),s=a.filter(k=>r.has(k.id)).map(k=>k.label),f=k=>{if(!e){i(new Set([k])),h(!1);return}let p=new Set(r);p.has(k)?p.delete(k):p.add(k),i(p)};return l.default.createElement("div",{className:`relative ${o}`},l.default.createElement("button",{id:t,type:"button",onClick:()=>h(k=>!k),className:`tbc-pick w-full flex items-center justify-between gap-2 bg-slate-50 border rounded-lg px-3 py-2.5 text-left outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${n?"border-red-400 ring-2 ring-red-200":"border-slate-200"}`},l.default.createElement("span",{className:`truncate ${s.length?"text-slate-900":"text-slate-400"}`},s.length?s.join("、"):"請選擇"),l.default.createElement(_l,{size:16,className:"text-slate-400 shrink-0"})),d&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-[110]",onClick:()=>h(!1)}),l.default.createElement("div",{className:"tbc-pick-menu absolute left-0 right-0 top-full mt-1 z-[120] bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in"},a.map(k=>l.default.createElement("label",{key:k.id,className:"flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 cursor-pointer select-none"},l.default.createElement("input",{type:e?"checkbox":"radio",checked:r.has(k.id),onChange:()=>f(k.id),className:"accent-indigo-600"}),k.label)))))},B4=({value:t,placeholder:a,canEdit:r,onSave:e,className:i="",centerEmpty:n})=>{let[o,d]=(0,l.useState)(!1),[h,s]=(0,l.useState)(t||""),f=(0,l.useRef)(!1);(0,l.useEffect)(()=>{o||s(t||"")},[t,o]);let k=async()=>{if(d(!1),f.current){f.current=!1;return}let p=h.trim();p!==(t||"").trim()&&await e(p)};return o?l.default.createElement("input",{autoFocus:!0,value:h,onChange:p=>s(p.target.value),onBlur:k,onKeyDown:p=>{p.key==="Enter"&&p.currentTarget.blur(),p.key==="Escape"&&(f.current=!0,p.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):l.default.createElement("div",{onClick:()=>r&&d(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} ${!t&&n?"text-center":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?l.default.createElement("span",{className:`text-slate-300 ${n?"block text-center":""}`},a):null))},j4=({type:t,a,b:r,canEdit:e,children:i,onSave:n})=>{let[o,d]=(0,l.useState)(!1),[h,s]=(0,l.useState)(a||""),[f,k]=(0,l.useState)(r||""),p=(0,l.useRef)(!1);(0,l.useEffect)(()=>{o||(s(a||""),k(r||""))},[a,r,o]);let x=async()=>{if(d(!1),p.current){p.current=!1;return}(h!==(a||"")||f!==(r||""))&&await n(h,f)};if(!o)return l.default.createElement("div",{onClick:()=>e&&d(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let y="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return l.default.createElement("div",{tabIndex:-1,onBlur:b=>{b.currentTarget.contains(b.relatedTarget)||x()},onKeyDown:b=>{b.key==="Enter"&&x(),b.key==="Escape"&&(p.current=!0,d(!1))},className:"flex flex-col gap-1"},l.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",t==="time"?l.default.createElement(Ol,{autoFocus:!0,value:h,onChange:s,className:y}):l.default.createElement("input",{autoFocus:!0,type:t,value:h,onChange:b=>s(b.target.value),className:y})),l.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",t==="time"?l.default.createElement(Ol,{value:f,onChange:k,className:y}):l.default.createElement("input",{type:t,value:f,onChange:b=>k(b.target.value),className:y})))},kv=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o,people:d=[],meId:h,parent:s})=>{let f=a||{},k=t==="editRule",p=t!=="create",[x,y]=(0,l.useState)(f.title||""),[b,E]=(0,l.useState)(f.start_date||e),[g,u]=(0,l.useState)(St(f.start_time)),[v,L]=(0,l.useState)(f.end_date||f.start_date||e),[W,z]=(0,l.useState)(St(f.end_time)),[B,A]=(0,l.useState)(f.priority||(t==="createRule"?"routine":"normal")),[T,D]=(0,l.useState)(f.note||""),[st,ka]=(0,l.useState)(null),[Jr,Sa]=(0,l.useState)(!1),[Le,Et]=(0,l.useState)(!1),[Ul,Zn]=(0,l.useState)(""),[Bi,Aa]=(0,l.useState)(""),Zl=t==="createRule"||t==="editRule"||b===v,Me=(C,q)=>{let F=bi(C),it=bi(q);if(!Zl||F===null||it===null||it<=F){ka(null),Et(!1);return}ka(it-F),Et(!1)},me=(C,q,F,it)=>{if(Aa(""),!!C){if(it!=="end"&&q){let kt=bi(q)+C;if(kt>=1440){Aa("工時超出當天，請調整開始時間或工時");return}F&&bi(F)!==kt&&Aa("開始、結束時間和工時不符，已自動修正結束時間"),z(w4(kt))}else if(F){let kt=bi(F)-C;if(kt<0){Aa("工時超出當天，請調整結束時間或工時");return}q&&bi(q)!==kt&&Aa("開始、結束時間和工時不符，已自動修正開始時間"),u(w4(kt))}}},ql=C=>{C!==g&&(u(C),Aa(""),Jr&&st?me(st,C,W,"start"):Me(C,W))},qn=C=>{C!==W&&(z(C),Aa(""),Jr&&st?me(st,g,C,"end"):Me(g,C))},Gn=C=>{if(Aa(""),C===""){Sa(!1),Et(!1),Me(g,W);return}if(C==="custom"){Sa(!0),Et(!0),Zn(st?C4(st):"");return}let q=Number(C);Sa(!0),Et(!1),ka(q),me(q,g,W,g?"start":"end")},Gl=C=>{Zn(C),Sa(!0),Et(!0);let q=parseFloat(C);if(q>0&&q<24){let F=Math.round(q*60);ka(F),me(F,g,W,g?"start":"end")}else ka(null),Aa("")},ji=Le?"custom":st===null?"":y4.some(([C])=>C===st)?String(st):"custom",[Vt,tc]=(0,l.useState)(k?f.freq:t==="createRule"?r||"weekly":"none"),[Wi,ye]=(0,l.useState)(!!f.weekdays_only),[lt,fr]=(0,l.useState)(f.week_days||[]),[Qa,we]=(0,l.useState)(f.month_day?String(f.month_day):""),[Rr,Yn]=(0,l.useState)(!!f.month_last_day),[vr,Xn]=(0,l.useState)(f.until_date||""),[Yl,Qn]=(0,l.useState)(f.is_active===void 0?!0:f.is_active),Ce=(0,l.useMemo)(()=>{let C=new Set,q=[],F=it=>{C.has(it.member_id)||(C.add(it.member_id),q.push({id:it.member_id,label:it.member_id===h?"我":it.name}))};return d.filter(it=>it.member_id===h).forEach(F),d.filter(it=>$d.includes(it.role)).forEach(F),h&&!C.has(h)&&q.unshift({id:h,label:"我"}),q},[d,h]),[be,Xl]=(0,l.useState)(()=>new Set(h?[h]:[])),[kr,Ql]=(0,l.useState)(()=>new Set(h?[h]:[])),[Hi,Si]=(0,l.useState)(""),[Ea,xr]=(0,l.useState)(""),$t=(C,q)=>{Si(C),xr(q),setTimeout(()=>{let F=document.getElementById(q);if(F){F.scrollIntoView({block:"center",behavior:"smooth"});try{F.focus({preventScroll:!0})}catch{}}},0)},mt="text-xs font-medium text-slate-500",xa="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",Kl=C=>fr(q=>q.includes(C)?q.filter(F=>F!==C):[...q,C]),Be=()=>{if(Si(""),xr(""),!x.trim())return $t(s?"輸入子工作":"輸入工作摘要","tbc-f-title");if(t==="create"&&be.size===0)return $t("請選擇派工的人","tbc-f-disp");if(t==="create"&&kr.size===0)return $t("請至少選一位執行的人","tbc-f-doer");if(!b)return $t("開始日期必填","tbc-f-start");if(st&&!g&&!W)return $t("填了工時，請再填開始時間或結束時間","tbc-f-stime");if(Vt==="none"&&(!v||v<b))return $t("結束日期不能早於開始日期","tbc-f-end");if(Vt==="weekly"&&lt.length===0)return $t("每週重複請至少選一個星期","tbc-f-week");if(Vt==="monthly"&&!Qa&&!Rr)return $t("每月重複請選幾號，或勾「每月最後一天」","tbc-f-month");if(Vt!=="none"&&vr&&vr<b)return $t("重複的結束日不能早於開始日","tbc-f-until");n({title:x.trim(),startDate:b,startTime:g||null,endDate:Vt==="none"?v:b,endTime:W||null,priority:B,note:T.trim()||null,repeat:Vt,weekdaysOnly:Vt==="daily"&&Wi,weekDays:Vt==="weekly"?lt:[],monthDay:Vt==="monthly"&&Qa?Number(Qa):null,monthLast:Vt==="monthly"&&Rr,untilDate:vr||null,isActive:Yl,assigneeIds:[...kr],dispatcherId:[...be][0]||h})};return l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},k?l.default.createElement(l.default.Fragment,null,l.default.createElement(On,{className:"text-indigo-600",size:20})," 修改週期工作"):t==="createRule"?l.default.createElement(l.default.Fragment,null,l.default.createElement(On,{className:"text-indigo-600",size:20})," 新增週期工作"):l.default.createElement(l.default.Fragment,null,l.default.createElement(yi,{className:"text-indigo-600",size:20})," ",s?"新增子工作":"新增")),l.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},l.default.createElement(Ci,{size:20}))),l.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:mt},s?"子工作":"工作摘要",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement("input",{id:"tbc-f-title",autoFocus:!0,value:x,onChange:C=>y(C.target.value),placeholder:"簡短描述工作內容",className:`${xa} ${Ea==="tbc-f-title"?"!border-red-400 ring-2 ring-red-200":""}`})),t==="create"&&Ce.length>0&&l.default.createElement("div",{className:"grid grid-cols-2 gap-4"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:mt},"派工",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement(b4,{id:"tbc-f-disp",options:Ce,selected:be,onChange:Xl,bad:Ea==="tbc-f-disp"})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:mt},"執行",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement(b4,{id:"tbc-f-doer",options:Ce,selected:kr,multi:!0,onChange:Ql,bad:Ea==="tbc-f-doer"}))),p&&l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:mt},"重複"),l.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([C])=>!((k||t==="createRule")&&C==="none")).map(([C,q])=>l.default.createElement("button",{key:C,type:"button",onClick:()=>tc(C),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${Vt===C?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},q))),Vt==="daily"&&l.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},l.default.createElement("input",{type:"checkbox",checked:Wi,onChange:C=>ye(C.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),Vt==="weekly"&&l.default.createElement("div",{id:"tbc-f-week",tabIndex:-1,className:`flex gap-2 pt-1 flex-wrap outline-none rounded-lg ${Ea==="tbc-f-week"?"ring-2 ring-red-200":""}`},[1,2,3,4,5,6,7].map(C=>l.default.createElement("button",{key:C,type:"button",onClick:()=>Kl(C),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${lt.includes(C)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},Id[C%7]))),Vt==="monthly"&&l.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},l.default.createElement("select",{id:"tbc-f-month",value:Qa,onChange:C=>we(C.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},l.default.createElement("option",{value:""},"不指定號數"),Array.from({length:31},(C,q)=>q+1).map(C=>l.default.createElement("option",{key:C,value:C},C," 號"))),l.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},l.default.createElement("input",{type:"checkbox",checked:Rr,onChange:C=>Yn(C.target.checked),className:"accent-indigo-600"})," 每月最後一天"),Qa&&Number(Qa)>28&&!Rr&&l.default.createElement("span",{className:"text-xs text-amber-600"},Qa," 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」"))),l.default.createElement("div",{className:"grid grid-cols-2 gap-4"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:mt},"開始日期"),l.default.createElement("input",{id:"tbc-f-start",type:"date",value:b,onChange:C=>{E(C.target.value),v<C.target.value&&L(C.target.value)},className:`${xa} ${Ea==="tbc-f-start"?"!border-red-400 ring-2 ring-red-200":""}`})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:mt},"開始時間（選填）"),l.default.createElement(Ol,{id:"tbc-f-stime",value:g,onChange:ql,className:`${xa} !w-auto min-w-[8rem]`})),Vt==="none"?l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:mt},"結束日期"),l.default.createElement("input",{id:"tbc-f-end",type:"date",value:v,min:b,onChange:C=>L(C.target.value),className:`${xa} ${Ea==="tbc-f-end"?"!border-red-400 ring-2 ring-red-200":""}`})):l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:mt},"結束日期（選填）"),l.default.createElement("input",{id:"tbc-f-until",type:"date",value:vr,min:b,onChange:C=>Xn(C.target.value),className:xa})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:mt},"結束時間（選填）"),l.default.createElement(Ol,{value:W,onChange:qn,className:`${xa} !w-auto min-w-[8rem]`})),l.default.createElement("div",{className:"hidden sm:block"}),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:mt},"工時（選填）"),l.default.createElement("div",{className:"flex items-center gap-2"},l.default.createElement("select",{id:"tbc-f-dur","aria-label":"工時",value:ji,onChange:C=>Gn(C.target.value),className:`${xa} !w-auto min-w-[8rem] cursor-pointer ${ji?"text-slate-900":"text-slate-400"}`},l.default.createElement("option",{value:""},"--"),y4.map(([C,q])=>l.default.createElement("option",{key:C,value:C},q)),l.default.createElement("option",{value:"custom"},"自訂")),ji==="custom"&&l.default.createElement("label",{className:"flex items-center gap-1.5 text-sm text-slate-500 whitespace-nowrap"},l.default.createElement("input",{"aria-label":"自訂工時（小時）",type:"number",min:"0.25",max:"23",step:"0.25",value:Le?Ul:st?C4(st):"",onChange:C=>Gl(C.target.value),className:"tbc-dur-custom w-20 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"}),"小時")))),l.default.createElement("div",{className:"grid grid-cols-2 gap-4"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:mt},"優先順序"),l.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["routine","例行"],["normal","普通"],["urgent","緊急"]].map(([C,q])=>l.default.createElement("button",{key:C,type:"button",onClick:()=>A(C),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${B===C?C==="urgent"?"bg-white text-red-600 shadow-sm":C==="routine"?"bg-white text-violet-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},q))))),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:mt},"備註"),l.default.createElement("textarea",{value:T,onChange:C=>D(C.target.value),rows:2,className:xa})),Bi&&l.default.createElement("div",{className:"tbc-hint bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-lg px-4 py-3"},Bi),Hi&&l.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},l.default.createElement(wi,{size:16})," ",Hi)),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},l.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),l.default.createElement("button",{onClick:Be,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},k?"儲存":Vt==="none"?"新增":"儲存"))))},xv=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,l.useState)(k4()),[o,d]=(0,l.useState)(null),[h,s]=(0,l.useState)([]),[f,k]=(0,l.useState)(""),[p,x]=(0,l.useState)([]),[y,b]=(0,l.useState)(!0),[E,g]=(0,l.useState)({type:"",text:""}),[u,v]=(0,l.useState)(null),[L,W]=(0,l.useState)("mine"),[z,B]=(0,l.useState)("today"),[A,T]=(0,l.useState)(""),[D,st]=(0,l.useState)(""),[ka,Jr]=(0,l.useState)(new Set),[Sa,Le]=(0,l.useState)(""),[Et,Ul]=(0,l.useState)({col:null,dir:"asc"}),Zn=c=>Ul(M=>M.col!==c?{col:c,dir:"asc"}:M.dir==="asc"?{col:c,dir:"desc"}:{col:null,dir:"asc"}),[Bi,Aa]=(0,l.useState)(()=>{try{let c=localStorage.getItem("tbcWorkFont");return f4[c]?c:"m"}catch{return"m"}}),Zl=c=>{Aa(c);try{localStorage.setItem("tbcWorkFont",c)}catch{}},[Me,me]=(0,l.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),ql=c=>me(M=>{let w=M.includes(c)?M.filter(S=>S!==c):[...M,c];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(w))}catch{}return w}),[qn,Gn]=(0,l.useState)(!1),[Gl,ji]=(0,l.useState)(""),[Vt,tc]=(0,l.useState)(""),[Wi,ye]=(0,l.useState)(!1),[lt,fr]=(0,l.useState)(null),[Qa,we]=(0,l.useState)(!1),[Rr,Yn]=(0,l.useState)(!1),vr=(0,l.useRef)(!1),[Xn,Yl]=(0,l.useState)([]),[Qn,Ce]=(0,l.useState)(()=>new Set),[be,Xl]=(0,l.useState)([]),[kr,Ql]=(0,l.useState)([]),[Hi,Si]=(0,l.useState)([]),Ea=(0,l.useRef)("mine"),[xr,$t]=(0,l.useState)(null),[mt,xa]=(0,l.useState)(null),[Kl,Be]=(0,l.useState)(null),[C,q]=(0,l.useState)(null),F=f4[Bi],it=F+3,kt=i.date,ac=(0,l.useRef)(null),Ai=(0,l.useRef)(0),Ka=(c,M)=>{g({type:c,text:M}),clearTimeout(ac.current),ac.current=setTimeout(()=>g({type:"",text:""}),3200)},yt=async(c,M)=>{let{data:w,error:S}=await a.rpc(c,M||{});if(S)throw S;return w},Yt=async(c,M)=>{try{let w=await c();return await Jl(!0),_i(),Ea.current==="notice"&&oc(),M&&Ka("success",typeof M=="function"?M(w):M),w}catch(w){Ka("error",Un(w)),await Jl(!0);return}},Dt=(0,l.useMemo)(()=>{if(z==="today")return{start:kt,end:kt};if(z==="month"){let[w,S]=kt.split("-").map(Number);return{start:`${w}-${String(S).padStart(2,"0")}-01`,end:W4(Date.UTC(w,S,0))}}if(z==="week"){let w=cv(kt);return{start:w,end:El(w,6)}}let c=A||kt,M=D||c;return c<=M?{start:c,end:M}:{start:M,end:c}},[z,A,D,kt]);(0,l.useEffect)(()=>{let c=setInterval(()=>n(M=>{let w=k4();return w.date===M.date&&w.time===M.time?M:w}),3e4);return()=>clearInterval(c)},[]);let T4=async()=>{try{let c=await yt("work_current_member"),M=await yt("work_list_people");return d(c),s(M||[]),Jr(new Set((M||[]).filter(w=>$d.includes(w.role)).map(w=>w.member_id))),k(""),!0}catch(c){return k(Un(c)),!1}},Jl=async c=>{let M=++Ai.current;c||b(!0);try{let w=r&&r.fetchAllData?r.fetchAllData:I=>I(),S=I=>{if(I&&I.error)throw I.error;return I&&I.data||[]},K=S(await w(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).is("parent_id",null).lte("start_date",Dt.end).gte("end_date",Dt.start))),zt=S(await w(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).is("parent_id",null).lte("end_date",kt).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),Xt=new Set(K.map(I=>I.id)),wt=zt.map(I=>I.id).filter(I=>!Xt.has(I)),na=[];if(wt.length&&(na=S(await w(()=>a.from("work_items").select("*, work_assignees(*)").in("id",wt)))),M!==Ai.current)return;let O=[];for(let I of[...K,...na]){let{work_assignees:Kt,...oa}=I;for(let X of Kt||[])O.push({key:X.id,item:{...oa,assigneeCount:(Kt||[]).length},a:X})}x(O);let j=[...new Set(O.map(I=>I.item.id))],$=[];if(j.length){let I=S(await w(()=>a.from("work_items").select("*, work_assignees(*)").in("parent_id",j).is("canceled_at",null)));for(let Kt of I){let{work_assignees:oa,...X}=Kt;for(let P of oa||[])$.push({key:P.id,item:{...X,assigneeCount:(oa||[]).length},a:P})}}if(M!==Ai.current)return;Xl($)}catch(w){M===Ai.current&&Ka("error","讀取失敗："+Un(w))}finally{M===Ai.current&&!c&&b(!1)}};(0,l.useEffect)(()=>{T4()},[]),(0,l.useEffect)(()=>{o&&Jl(!1)},[o,Dt.start,Dt.end,kt]),(0,l.useEffect)(()=>{z==="custom"&&!A&&(T(kt),st(El(kt,6)))},[z]);let je=(0,l.useMemo)(()=>{let c={};return h.forEach(M=>{c[M.member_id]={name:M.name,role:M.role}}),c},[h]),yv=o?je[o]:null,Rl=(0,l.useMemo)(()=>h.filter(c=>$d.includes(c.role)),[h]),Fl=c=>{let M=c.a.status==="done",w=c.a.status==="awaiting_confirm",S=!!c.a.skipped_at||c.a.status==="on_hold",K=St(c.item.end_time),zt=!M&&!w&&!S&&(c.item.end_date<i.date||c.item.end_date===i.date&&K&&K<i.time);return{...c,done:M,awaiting:w,skipped:S,overdue:zt,isMine:c.a.member_id===o,isCreator:c.item.creator_member_id===o,canManage:c.item.creator_member_id===o||c.item.entered_by===o,isRoutine:c.item.assigneeCount===1&&c.item.creator_member_id===c.a.member_id,isRecurring:!!c.item.recurring_rule_id,person:je[c.a.member_id],dispatcher:je[c.item.creator_member_id]}},{overdueRows:Kn,groups:$l,total:rc}=(0,l.useMemo)(()=>{let c=p.map(Fl),M=Sa.trim().toLowerCase(),w=j=>!M||[j.item.title,j.item.note,j.person&&j.person.name,j.dispatcher&&j.dispatcher.name].some($=>$&&String($).toLowerCase().includes(M)),S=c.filter(j=>(L==="mine"?j.isMine:L==="tome"?j.isMine&&!j.isCreator:L==="dispatched"?j.canManage&&!j.isMine:ka.has(j.a.member_id))&&w(j)),K=S.filter(j=>j.overdue).sort((j,$)=>(j.item.end_date+St(j.item.end_time)).localeCompare($.item.end_date+St($.item.end_time))||(j.person&&j.person.name||"").localeCompare($.person&&$.person.name||"")),zt=S.filter(j=>!j.overdue&&j.item.start_date<=Dt.end&&j.item.end_date>=Dt.start),Xt={};zt.forEach(j=>{(Xt[j.item.start_date]=Xt[j.item.start_date]||[]).push(j)});let wt=Object.keys(Xt).sort().map(j=>{let $=Xt[j].sort((Kt,oa)=>{if(L!=="all")return Kt.a.sort_order-oa.a.sort_order||String(Kt.a.created_at).localeCompare(String(oa.a.created_at));let X=St(Kt.item.start_time)||"99:99",P=St(oa.item.start_time)||"99:99";return X.localeCompare(P)||(Kt.person&&Kt.person.name||"").localeCompare(oa.person&&oa.person.name||"")}),I=L==="mine"&&j>=Dt.start&&!M;return{date:j,rows:$,canMove:I}}),na=K,O=wt;if(Et.col){let j=Et.dir==="asc"?1:-1,$=(X,P)=>String(X||"").localeCompare(String(P||""),"zh-Hant"),I=X=>X.done?3:X.awaiting?2:X.skipped?1:0,oa={title:(X,P)=>$(X.item.title,P.item.title),who:(X,P)=>$(X.dispatcher&&X.dispatcher.name,P.dispatcher&&P.dispatcher.name),doer:(X,P)=>$(X.person&&X.person.name,P.person&&P.person.name),status:(X,P)=>I(X)-I(P),priority:(X,P)=>(L4[X.item.priority]??1)-(L4[P.item.priority]??1),hours:(X,P)=>{let Fr=x4(X.item),Ni=x4(P.item);return Fr==null&&Ni==null?0:Fr==null?2*j:Ni==null?-2*j:Fr-Ni},date:(X,P)=>(X.item.start_date+St(X.item.start_time)).localeCompare(P.item.start_date+St(P.item.start_time))}[Et.col];if(oa){let X=P=>[...P].sort((Fr,Ni)=>j*oa(Fr,Ni));Et.col==="date"?(na=X(K),O=[...wt].sort((P,Fr)=>j*P.date.localeCompare(Fr.date))):(na=X(K),O=wt.map(P=>({...P,rows:X(P.rows)})))}O=O.map(X=>({...X,canMove:!1}))}return{overdueRows:na,groups:O,total:K.length+zt.length}},[p,i,o,L,ka,Dt,je,Sa,Et]),Jn=(0,l.useMemo)(()=>{let c={};return be.map(Fl).sort((M,w)=>(M.item.start_date+St(M.item.start_time)).localeCompare(w.item.start_date+St(w.item.start_time))||String(M.item.created_at).localeCompare(String(w.item.created_at))).forEach(M=>{(c[M.item.parent_id]=c[M.item.parent_id]||[]).push(M)}),c},[be,i,o,je]),Rn=(0,l.useMemo)(()=>{let c={};return kr.forEach(M=>{M.item_id&&!M.read_at&&!(M.item_id in c)&&(c[M.item_id]=M.created_at)}),Hi.map(Fl).filter(M=>(M.canManage||M.isMine)&&M.item.id in c).map(M=>({...M,notice:!0})).sort((M,w)=>String(c[w.item.id]||"").localeCompare(String(c[M.item.id]||"")))},[Hi,kr,o,je,i]),Vi=v4.filter(c=>c.locked||!Me.includes(c.id)),N4=c=>typeof c.w=="function"?c.w(F):c.w,E4=c=>typeof c.min=="function"?c.min(F):c.min,Il=`56px ${Vi.map(N4).join(" ")}`,D4=56+Vi.reduce((c,M)=>c+E4(M),0)+16,zi=(c,M,w)=>Yt(()=>{let S={...c.item,...M};return yt("work_update_routine",{p_item_id:S.id,p_title:S.title,p_start_date:S.start_date,p_start_time:S.start_time||null,p_end_date:S.end_date,p_end_time:S.end_time||null,p_priority:S.priority||"normal",p_note:S.note||null,p_meeting_flag:null})},w),O4=(c,M,w)=>{if(!M||!w){Ka("error","日期必填");return}let S=M,K=w;if(M!==c.item.start_date&&w===c.item.end_date&&(K=El(M,H4(c.item.end_date,c.item.start_date))),K<S){Ka("error","結束日期不能早於開始日期");return}let zt=!(S<=Dt.end&&K>=Dt.start);return zi(c,{start_date:S,end_date:K},zt?`已改到 ${Xa(S)}（目前顯示範圍看不到，切換範圍就會出現）`:null)},U4=(c,M,w)=>zi(c,{start_time:M||null,end_time:w||null}),Z4=(c,M)=>{if(!M){Ka("error","任務名稱不能空白");return}return zi(c,{title:M})},wv=c=>Yt(()=>yt("work_complete",{p_item_id:c.item.id,p_note:null}),"已完成"),q4=(c,M)=>Yt(()=>yt("work_set_status",{p_item_id:c.item.id,p_status:M}),M==="done"&&c.item.creator_member_id!==o?"完成回報，等待派工者確認":"狀態已更新"),G4=c=>Yt(()=>yt("work_confirm",{p_assignee_id:c.a.id}),"已確認完成"),[Pl,t2]=(0,l.useState)(null),[ec,Fn]=(0,l.useState)(null),[ic,nc]=(0,l.useState)(""),Y4=c=>{nc(""),Fn(c)},X4=async()=>{let c=ec;Fn(null),await Yt(()=>yt("work_return",{p_assignee_id:c.a.id,p_note:ic.trim()||null}),"已退回")},Cv=(c,M)=>Yt(()=>yt("work_move",{p_item_id:c.item.id,p_where:M})),Q4=c=>Yt(()=>yt("work_copy",{p_item_id:c.item.id}),"複製成功"),K4=c=>v({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或擱置不會刪除，標記「取消」並保留紀錄`,onConfirm:async()=>{v(null),await Yt(()=>yt("work_delete",{p_item_id:c.item.id}),M=>M==="canceled"?"刪除資料，保留原進度紀錄":"已刪除")}}),bv=async()=>{let c=Gl.trim();if(!c||Wi)return;ye(!0);let M=Vt||kt,w=await Yt(()=>yt("work_create_routine",{p_title:c,p_start_date:M,p_end_date:M}));if(ye(!1),w){ji("");let S=M<=Dt.end&&M>=Dt.start;Ka("success",S?"已新增":`已新增到 ${Xa(M)}（目前顯示範圍看不到，切換範圍就會出現）`)}},J4=async c=>{ye(!0);let M;if(lt.mode==="editRule")M=await Yt(()=>yt("work_update_rule",{p_rule_id:lt.rule.id,p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:c.isActive}),"週期工作已儲存（只影響之後產生的工作）"),M!==void 0&&await $n();else if(c.repeat==="none"&&c.assigneeIds&&(lt.parent||!(c.assigneeIds.length===1&&c.assigneeIds[0]===o&&c.dispatcherId===o))){let w=c.assigneeIds.some(S=>S!==o);M=await Yt(()=>yt("work_assign_create",{p_title:c.title,p_assignee_ids:c.assigneeIds,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_dispatcher_id:c.dispatcherId,p_parent_id:lt.parent?lt.parent.id:null}),w?"派工完成，送出提醒":lt.parent?"子工作已新增":"已新增"),M!==void 0&&lt.parent&&Ce(S=>new Set(S).add(lt.parent.id))}else c.repeat==="none"?M=await Yt(()=>yt("work_create_routine",{p_title:c.title,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已新增"):M=await Yt(()=>yt("work_create_rule",{p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已建立週期工作，之後會在凌晨自動出現在清單");ye(!1),M!==void 0&&fr(null)},$n=async()=>{try{let{data:c,error:M}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(M)throw M;Yl(c||[])}catch(c){Ka("error","讀取週期工作失敗："+Un(c))}},_i=async()=>{try{let c=await yt("work_notifications_list")||[];return Ql(c),c}catch{return[]}};(0,l.useEffect)(()=>{if(!o)return;_i();let c=setInterval(_i,6e4);return()=>clearInterval(c)},[o]);let R4=kr.filter(c=>!c.read_at),a2=new Set(R4.map(c=>c.item_id||c.id)).size,F4=async()=>{try{await yt("work_notifications_read",{p_ids:null}),await _i()}catch{}},oc=async c=>{let M=[...new Set((c||kr).filter(w=>!w.read_at).map(w=>w.item_id).filter(Boolean))];if(!M.length){Si([]);return}try{let{data:w,error:S}=await a.from("work_items").select("*, work_assignees(*)").in("id",M).is("canceled_at",null);if(S)throw S;let K=[];for(let zt of w||[]){let{work_assignees:Xt,...wt}=zt;for(let na of Xt||[])K.push({key:na.id,item:{...wt,assigneeCount:(Xt||[]).length},a:na})}Si(K)}catch(w){Ka("error","讀取提醒失敗："+Un(w))}},Ti=async c=>{let M=Ea.current;if(Ea.current=c,W(c),c==="notice"){let w=await _i();await oc(w)}else M==="notice"&&await F4()},lc=async()=>{we(!0),await $n()};(0,l.useEffect)(()=>{!lt&&vr.current&&(vr.current=!1,lc())},[lt]);let $4=async c=>{await Yt(()=>yt("work_update_rule",{p_rule_id:c.id,p_title:c.title,p_freq:c.freq,p_weekdays_only:c.weekdays_only,p_week_days:c.week_days,p_month_day:c.month_day,p_month_last_day:c.month_last_day,p_start_date:c.start_date,p_until_date:c.until_date,p_start_time:c.start_time,p_end_time:c.end_time,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:!c.is_active}),c.is_active?"已暫停":"已啟用")!==void 0&&await $n()},I4=c=>v({title:"警告",confirmText:"刪除",message:`刪除週期工作？
刪除未來排程，保留歷史紀錄`,onConfirm:async()=>{v(null),await Yt(()=>yt("work_delete_rule",{p_rule_id:c.id}),"週期工作已刪除")!==void 0&&await $n()}}),P4=async(c,M)=>{let w=mt;if(xa(null),q(null),Be(null),!w||w.date!==c.date||w.key===M.key)return;let S=c.rows.filter(wt=>!wt.overdue),K=S.findIndex(wt=>wt.key===w.key),zt=S.findIndex(wt=>wt.key===M.key),Xt=c.rows.find(wt=>wt.key===w.key);!Xt||K<0||zt<0||await Yt(()=>yt("work_move_to",{p_item_id:Xt.item.id,p_target_item_id:M.item.id,p_after:K<zt}))},We="flex items-center bg-slate-100 p-1 rounded-full shrink-0",Va=c=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,za=xr?[...Kn,...$l.flatMap(c=>c.rows),...Rn,...Object.values(Jn).flat()].find(c=>c.key===xr.key):null,In=za?$l.find(c=>c.rows.some(M=>M.key===za.key)):null,dc=(c,M)=>{let w=c.canManage,S=c.isMine&&c.isRoutine,K=M?M.rows.filter(O=>!O.overdue):[],zt=!!M&&M.canMove&&S&&!c.overdue,Xt=C===c.key&&mt&&mt.key!==c.key,wt=c.done||c.skipped,na=O=>{switch(O.id){case"title":return l.default.createElement("div",{key:O.id,className:"min-w-0 w-full flex items-start gap-1.5"},!c.item.parent_id&&(Jn[c.item.id]||[]).length>0&&l.default.createElement("button",{type:"button",onClick:()=>Ce(j=>{let $=new Set(j);return $.has(c.item.id)?$.delete(c.item.id):$.add(c.item.id),$}),"aria-label":Qn.has(c.item.id)?"收合子工作":"展開子工作",className:"tbc-expand mt-0.5 shrink-0 inline-flex items-center gap-0.5 rounded-md px-1 py-0.5 text-slate-500 hover:bg-slate-100"},Qn.has(c.item.id)?l.default.createElement(_l,{size:it}):l.default.createElement(n4,{size:it}),l.default.createElement("span",{className:"text-[0.75em] px-1.5 rounded bg-slate-100 text-slate-600"},new Set(Jn[c.item.id].map(j=>j.item.id)).size)),l.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},c.a.status==="pending"&&c.a.return_note&&l.default.createElement("button",{type:"button",onClick:()=>t2(c),className:"tbc-return-tag inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-amber-200 bg-amber-50 text-amber-700 font-bold hover:brightness-95 cursor-pointer whitespace-nowrap"},l.default.createElement(Rd,{size:Math.round(F*.8)}),"退回"),c.isRecurring&&l.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},l.default.createElement(On,{size:Math.round(F*.95)})),c.overdue&&l.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},l.default.createElement(Qd,{size:Math.round(F*.8)})," 逾期")),l.default.createElement("div",{className:"min-w-0 flex-1"},l.default.createElement(B4,{value:c.item.title,placeholder:"工作摘要",canEdit:w,onSave:j=>Z4(c,j),className:`font-medium ${wt?"text-slate-400 line-through":c.overdue?"text-red-600":"text-slate-900"}`})));case"who":return l.default.createElement("div",{key:O.id,className:"min-w-0"},l.default.createElement(m4,{person:c.dispatcher,size:it}));case"doer":return l.default.createElement("div",{key:O.id,className:"min-w-0"},l.default.createElement(m4,{person:c.person,size:it}));case"date":{let j=c.item.start_date!==c.item.end_date;return l.default.createElement("div",{key:O.id,className:`min-w-0 ${c.overdue?"text-red-600":"text-slate-700"}`},l.default.createElement(j4,{type:"date",a:c.item.start_date,b:c.item.end_date,canEdit:w,onSave:($,I)=>O4(c,$,I)},j?`${Xa(c.item.start_date)} → ${Xa(c.item.end_date)}`:Xa(c.item.start_date)))}case"time":{let j=St(c.item.start_time),$=St(c.item.end_time);return l.default.createElement("div",{key:O.id,className:"min-w-0 text-slate-700"},l.default.createElement(j4,{type:"time",a:j,b:$,canEdit:w,onSave:(I,Kt)=>U4(c,I,Kt)},j||$?`${j||"—"} ~ ${$||"—"}`:l.default.createElement("span",{className:"text-slate-300"},w?"時間設定":"")))}case"hours":return l.default.createElement("div",{key:O.id,className:"text-slate-500 text-[0.9em]"},uv(c.item)||"");case"priority":return l.default.createElement("div",{key:O.id},l.default.createElement("button",{type:"button",disabled:!w,onClick:()=>zi(c,{priority:gv[c.item.priority]||"normal"}),title:w?"點一下切換":"",className:`tbc-prio text-[0.75em] px-2 py-0.5 rounded border font-bold ${M4[c.item.priority]||M4.normal} ${w?"hover:brightness-95 cursor-pointer":"cursor-default"}`},sv[c.item.priority]||"普通"));case"note":return l.default.createElement("div",{key:O.id,className:"min-w-0 w-full"},l.default.createElement(B4,{value:c.item.note,placeholder:"新增備註",centerEmpty:!0,canEdit:w,onSave:j=>zi(c,{note:j||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let j=c.done?"done":c.awaiting?"awaiting":c.skipped?"on_hold":"pending",$=j==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":j==="awaiting"?"bg-sky-50 border-sky-200 text-sky-700":j==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600",I={pending:"待處理",done:"完成",on_hold:"擱置",awaiting:"待確認"}[j];return c.awaiting&&c.isCreator&&!c.isMine?l.default.createElement("div",{key:O.id,className:"flex items-center gap-1.5 tbc-review whitespace-nowrap"},l.default.createElement("button",{type:"button",onClick:()=>G4(c),className:"h-8 px-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},"確認"),l.default.createElement("button",{type:"button",onClick:()=>Y4(c),className:"h-8 px-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},"退回")):c.isMine?l.default.createElement("select",{key:O.id,value:j,onChange:Kt=>q4(c,Kt.target.value),"aria-label":"狀態",title:"點一下改變狀態",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${$}`},l.default.createElement("option",{value:"pending"},"待處理"),l.default.createElement("option",{value:"done"},"完成"),l.default.createElement("option",{value:"on_hold"},"擱置"),j==="awaiting"&&l.default.createElement("option",{value:"awaiting",disabled:!0},"待確認")):l.default.createElement("span",{key:O.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${$}`},I)}default:return null}};return l.default.createElement("div",{key:c.key,draggable:zt&&Kl===c.key,onDragStart:O=>{xa({key:c.key,date:M.date}),O.dataTransfer.effectAllowed="move";try{O.dataTransfer.setData("text/plain",c.key)}catch{}},onDragOver:O=>{mt&&M&&mt.date===M.date&&!c.overdue&&(O.preventDefault(),C!==c.key&&q(c.key))},onDrop:O=>{O.preventDefault(),M&&P4(M,c)},onDragEnd:()=>{xa(null),q(null),Be(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors
                    ${c.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${mt&&mt.key===c.key?"opacity-40":""}
                    ${Xt?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:Il}},l.default.createElement("div",{className:"flex items-center gap-0.5 px-2"},zt?l.default.createElement("span",{onMouseDown:()=>Be(c.key),onMouseUp:()=>Be(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},l.default.createElement(Xg,{size:it})):l.default.createElement("span",{style:{width:it}}),w||c.isMine&&!c.item.parent_id?l.default.createElement("button",{onClick:O=>{let j=O.currentTarget.getBoundingClientRect();$t({key:c.key,x:Math.min(j.left,window.innerWidth-220),y:Math.min(j.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},l.default.createElement(Yg,{size:it})):l.default.createElement("span",{style:{width:it+8}})),Vi.map(O=>{let j=O.id==="title"||O.id==="note";return l.default.createElement("div",{key:O.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${j?"[&>*]:w-full":"justify-center text-center"}`},na(O))}))},cc=new Set,hc=c=>fr({mode:"create",parent:c.item,initial:{start_date:c.item.start_date,end_date:c.item.end_date}}),r2=(c,M)=>{let w=c.item.parent_id?[]:Jn[c.item.id]||[],S=w.length>0&&Qn.has(c.item.id)&&!cc.has(c.item.id);return S&&cc.add(c.item.id),l.default.createElement(l.default.Fragment,{key:c.key},dc(c,M),S&&l.default.createElement("div",{className:"tbc-subs bg-slate-50/70 border-b border-slate-200 pl-8 pr-3 py-2"},l.default.createElement("div",{className:"rounded-lg border border-slate-200 bg-white overflow-hidden"},l.default.createElement("div",{className:"grid bg-slate-100 border-b border-slate-200 text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:Il}},l.default.createElement("span",{className:"py-1.5"}),Vi.map(K=>l.default.createElement("span",{key:K.id,className:"py-1.5 px-2 border-l border-slate-200 text-center whitespace-nowrap"},K.id==="title"?"子工作":K.label))),w.map(K=>dc(K,null)),(c.canManage||c.isMine)&&l.default.createElement("button",{type:"button",onClick:()=>hc(c),className:"tbc-add-sub w-full text-left px-4 py-2 text-[0.9em] text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-colors"},"+ 新增子工作"))))};return l.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:F}},l.default.createElement(u4,{active:"work",shell:e}),l.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},l.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},l.default.createElement("div",{className:"flex items-center gap-4 min-w-0"},l.default.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:F*1.45}},"工作日誌"),l.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},l.default.createElement(Ig,{size:16,className:"text-slate-400 shrink-0"}),l.default.createElement("input",{type:"text",value:Sa,onChange:c=>Le(c.target.value),onKeyDown:c=>{c.key==="Escape"&&Le("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),Sa&&l.default.createElement("button",{type:"button",onClick:()=>Le(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},l.default.createElement(Ci,{size:14})))),l.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},l.default.createElement("button",{onClick:()=>fr({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},l.default.createElement(yi,{size:16}),"新增"),l.default.createElement("div",{className:We},l.default.createElement("button",{onClick:lc,className:Va(!1)},l.default.createElement(yi,{size:14,className:"text-slate-500"}),"週期工作")),l.default.createElement("div",{className:"relative"},l.default.createElement("button",{onClick:()=>Gn(c=>!c),className:`${We} !p-1.5`},l.default.createElement("span",{className:Va(qn)},l.default.createElement(Nl,{size:14,className:"text-slate-500"}),"隱藏")),qn&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Gn(!1)}),l.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},v4.filter(c=>!c.locked).map(c=>l.default.createElement("label",{key:c.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${c.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},l.default.createElement("input",{type:"checkbox",disabled:c.locked,checked:c.locked||!Me.includes(c.id),onChange:()=>ql(c.id),className:"accent-indigo-600"}),c.label,c.locked&&l.default.createElement(Jd,{size:11})))))),l.default.createElement("div",{className:We,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([c,M,w])=>l.default.createElement("button",{key:c,onClick:()=>Zl(c),title:M,"aria-label":`文字${M}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${Bi===c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:w}},"A"))))),f?l.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},l.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},l.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},l.default.createElement(Jd,{size:30})),l.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),l.default.createElement("p",{className:"text-slate-500 font-normal"},f),l.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧者、行政與管理員。"))):l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 relative z-[15] shrink-0 space-y-3"},l.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},(a2>0||L==="notice")&&l.default.createElement("button",{onClick:()=>Ti("notice"),"aria-label":"提醒",title:"提醒",className:`tbc-bell relative h-11 w-11 rounded-full flex items-center justify-center transition-colors ${L==="notice"?"bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-200":"bg-slate-100 hover:bg-slate-200 text-slate-600"}`},l.default.createElement(e4,{size:18}),a2>0&&l.default.createElement("span",{className:"tbc-bell-count absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[11px] leading-[18px] text-center font-bold"},a2)),l.default.createElement("div",{className:We},l.default.createElement("button",{onClick:()=>Ti("mine"),className:Va(L==="mine")},"我的"),l.default.createElement("button",{onClick:()=>Ti("tome"),className:Va(L==="tome")},"派工給我"),l.default.createElement("button",{onClick:()=>Ti("dispatched"),className:Va(L==="dispatched")},"我派工的"),l.default.createElement("button",{onClick:()=>Ti("all"),className:Va(L==="all")},"全部")),L==="all"&&l.default.createElement("div",{className:"relative"},l.default.createElement("button",{onClick:()=>Yn(c=>!c),className:`${We} !p-1.5`},l.default.createElement("span",{className:Va(Rr)},l.default.createElement(Vl,{size:14,className:"text-slate-500"}),"人員（",ka.size,"/",Rl.length,"）")),Rr&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Yn(!1)}),l.default.createElement("div",{className:"absolute left-0 top-full mt-2 z-40 w-56 max-h-80 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},l.default.createElement("div",{className:"flex gap-2 px-1 pb-2 mb-1 border-b border-slate-100"},l.default.createElement("button",{onClick:()=>Jr(new Set(Rl.map(c=>c.member_id))),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全選"),l.default.createElement("button",{onClick:()=>Jr(new Set),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全不選")),Rl.map(c=>l.default.createElement("label",{key:c.member_id,className:"flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none text-slate-700 hover:bg-slate-50 cursor-pointer"},l.default.createElement("input",{type:"checkbox",checked:ka.has(c.member_id),onChange:()=>Jr(M=>{let w=new Set(M);return w.has(c.member_id)?w.delete(c.member_id):w.add(c.member_id),w}),className:"accent-indigo-600"}),c.name))))),L!=="notice"&&l.default.createElement("div",{className:We},l.default.createElement("button",{onClick:()=>B("today"),className:Va(z==="today")},"今日"),l.default.createElement("button",{onClick:()=>B("week"),className:Va(z==="week")},"本週"),l.default.createElement("button",{onClick:()=>B("month"),className:Va(z==="month")},"本月"),l.default.createElement("button",{onClick:()=>B("custom"),className:Va(z==="custom")},"自訂")),L!=="notice"&&z==="custom"&&l.default.createElement("div",{className:"flex items-center gap-2"},l.default.createElement("input",{type:"date",value:A,onChange:c=>T(c.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),l.default.createElement("span",{className:"text-slate-400"},"～"),l.default.createElement("input",{type:"date",value:D,min:A,onChange:c=>st(c.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),l.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},L==="notice"?l.default.createElement("span",null,"提醒的派工　共 ",Rn.length," 筆"):l.default.createElement(l.default.Fragment,null,Dt.start===Dt.end?Xa(Dt.start):`${Xa(Dt.start)} ～ ${Xa(Dt.end)}`,l.default.createElement("span",{className:"ml-3"},"共 ",rc," 筆"))))),l.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},l.default.createElement("div",{className:"space-y-4",style:{minWidth:D4}},l.default.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:Il}},l.default.createElement("span",{className:"py-2"}),Vi.map(c=>c.sortable?l.default.createElement("button",{key:c.id,type:"button",onClick:()=>Zn(c.id),title:"點一下排序","aria-sort":Et.col===c.id?Et.dir==="asc"?"ascending":"descending":"none",className:`py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap font-medium inline-flex items-center justify-center gap-0.5 hover:bg-slate-200/70 transition-colors ${Et.col===c.id?"text-indigo-600":""}`},c.label,Et.col===c.id&&(Et.dir==="asc"?l.default.createElement(Jg,{size:14}):l.default.createElement(_l,{size:14}))):l.default.createElement("span",{key:c.id,className:"py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap"},c.label))),L==="notice"?Rn.length===0?l.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},"目前沒有提醒"):l.default.createElement("div",{className:"tbc-notice-list bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},Rn.map(c=>r2(c,null))):y&&p.length===0?l.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):rc===0?l.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},Sa.trim()?`找不到符合「${Sa.trim()}」的工作（只搜尋目前顯示的範圍）`:"新增一筆工作，開始記錄"):l.default.createElement(l.default.Fragment,null,Kn.length>0&&l.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},l.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},l.default.createElement(Qd,{size:it})," 逾期未完成 ",l.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},Kn.length)),Kn.map(c=>r2(c,null))),$l.map(c=>{let M=hv(c.date,kt);return l.default.createElement("div",{key:c.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},l.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},l.default.createElement("span",{className:`font-bold ${M.tag==="今天"?"text-indigo-600":"text-slate-800"}`},M.text)),c.rows.map(w=>r2(w,c)))}))))),Pl&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm",onClick:()=>t2(null)},l.default.createElement("div",{className:"tbc-return-info bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in",onClick:c=>c.stopPropagation()},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(Rd,{size:20,className:"text-amber-600"}),"退回原因"),l.default.createElement("button",{"aria-label":"關閉",onClick:()=>t2(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},l.default.createElement(Ci,{size:20}))),l.default.createElement("div",{className:"p-5 space-y-2"},l.default.createElement("div",{className:"tbc-return-title font-bold text-slate-900"},"工作摘要：",Pl.item.title),l.default.createElement("div",{className:"tbc-return-reason text-slate-900 whitespace-pre-wrap"},Pl.a.return_note)))),ec&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(i4,{size:20,className:"text-indigo-600"}),"退回"),l.default.createElement("button",{onClick:()=>Fn(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},l.default.createElement(Ci,{size:20}))),l.default.createElement("div",{className:"p-5 space-y-2"},l.default.createElement("label",{className:"text-xs font-medium text-slate-500"},"原因（選填）"),l.default.createElement("textarea",{autoFocus:!0,value:ic,onChange:c=>nc(c.target.value),rows:3,placeholder:"簡要說明",className:"tbc-return-text w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"})),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},l.default.createElement("button",{onClick:()=>Fn(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full"},"取消"),l.default.createElement("button",{onClick:X4,className:"tbc-return-ok flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full"},"退回")))),xr&&za&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>$t(null),onContextMenu:c=>{c.preventDefault(),$t(null)}}),l.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:xr.x,top:xr.y,fontSize:F}},(()=>{let M=(In?In.rows.filter(K=>!K.overdue):[]).findIndex(K=>K.key===za.key),w=!!In&&In.canMove&&M>=0,S=(K,zt,Xt,wt,na)=>l.default.createElement("button",{disabled:wt,onClick:()=>{$t(null),Xt()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${na?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},l.default.createElement(K,{size:it-1}),zt);return l.default.createElement(l.default.Fragment,null,!za.item.parent_id&&S(yi,"新增子工作",()=>hc(za)),za.canManage&&za.isRoutine&&S(Kg,"複製",()=>Q4(za)),za.canManage&&S(Kd,"刪除",()=>K4(za),!1,!0))})())),lt&&l.default.createElement(kv,{key:lt.mode+(lt.rule?lt.rule.id:"")+(lt.parent?lt.parent.id:""),mode:lt.mode,parent:lt.parent,initial:lt.rule||lt.initial,presetRepeat:lt.preset,today:kt,busy:Wi,onClose:()=>fr(null),onSubmit:J4,people:h,meId:o}),Qa&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(On,{className:"text-indigo-600",size:20})," 我的週期工作"),l.default.createElement("button",{onClick:()=>we(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},l.default.createElement(Ci,{size:20}))),l.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},l.default.createElement("button",{onClick:()=>{we(!1),fr({mode:"createRule",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},l.default.createElement(yi,{size:16}),"新增週期工作"),Xn.length===0?l.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"尚未建立週期工作"):Xn.map(c=>l.default.createElement("div",{key:c.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${c.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},l.default.createElement("div",{className:"min-w-0"},l.default.createElement("div",{className:`font-medium truncate ${c.is_active?"text-slate-900":"text-slate-400"}`},c.title),l.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},pv(c),c.start_time?`　${St(c.start_time)}${c.end_time?"~"+St(c.end_time):""}`:"",c.until_date?`　到 ${Xa(c.until_date)}`:"",c.is_active?"":"　（暫停）")),l.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},l.default.createElement("button",{onClick:()=>{vr.current=!0,we(!1),fr({mode:"editRule",rule:c})},className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},l.default.createElement($g,{size:16})),l.default.createElement("button",{onClick:()=>$4(c),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${c.is_active?"bg-emerald-50 text-emerald-600 hover:bg-emerald-100":"bg-amber-50 text-amber-600 hover:bg-amber-100"}`,title:c.is_active?"啟用":"暫停","aria-label":c.is_active?"啟用":"暫停"},c.is_active?l.default.createElement(Fg,{size:16}):l.default.createElement(Rg,{size:16})),l.default.createElement("button",{onClick:()=>I4(c),className:"tbc-rule-del p-2.5 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg active:scale-95 transition-colors",title:"刪除","aria-label":"刪除週期工作"},l.default.createElement(Kd,{size:16})))))))),E.text&&l.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},l.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${E.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},l.default.createElement("div",{className:"shrink-0 mt-0.5"},E.type==="success"?l.default.createElement(Qg,{size:18}):l.default.createElement(wi,{size:18})),l.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},E.text))),u&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"p-8 text-center"},l.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},l.default.createElement(wi,{size:32})),l.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),l.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},l.default.createElement("button",{onClick:()=>v(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),l.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},A4=xv;var V4=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
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
  .hidden {
    display: none;
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
  .\\!w-auto {
    width: auto !important;
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
  .w-20 {
    width: calc(var(--spacing) * 20);
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
  .min-w-\\[8rem\\] {
    min-width: 8rem;
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
    .sm\\:block {
      display: block;
    }
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
`;var Lv="https://jcepavwocdujoeoqxvsd.supabase.co",Mv="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",Pd=document.createElement("style");Pd.id="tbc-one-css";Pd.textContent=V4;document.head.appendChild(Pd);var xe=window.__TBC_SB||window.supabase.createClient(Lv,Mv),mv=({page:t})=>{let[a,r]=(0,At.useState)(void 0),[e,i]=(0,At.useState)(""),[n,o]=(0,At.useState)({status:"loading",name:"",role:"member"});(0,At.useEffect)(()=>{let f=!0;xe.auth.getSession().then(({data:p})=>{f&&r(p.session||null)});let{data:k}=xe.auth.onAuthStateChange((p,x)=>{f&&r(x||null)});return()=>{f=!1,k&&k.subscription&&k.subscription.unsubscribe()}},[]);let d=a&&a.user&&a.user.id;(0,At.useEffect)(()=>{if(!a)return;let f=!0;return h4(xe,a).then(async k=>{if(f){if(k.status!=="ok"||!d4.includes(k.role)){try{await xe.auth.signOut()}catch{}i("權限不足"),r(null);return}i(""),o(k)}}),()=>{f=!1}},[d]);let h=async()=>{try{await xe.auth.signOut()}catch{}r(null),o({status:"loading",name:"",role:"member"})};if(a===void 0)return At.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return At.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},At.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},At.default.createElement(Tl,{size:30})),At.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),At.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),At.default.createElement(s4,{supabase:xe,notice:e}));if(n.status!=="ok")return At.default.createElement("div",{className:"h-[100dvh] bg-white"});let s={identity:n,onLogout:h};return t==="work"?At.default.createElement(A4,{session:a,supabase:xe,utils:{},shell:s}):At.default.createElement(p4,{shell:s})},z4=document.getElementById("root");(0,_4.createRoot)(z4).render(At.default.createElement(mv,{page:z4.getAttribute("data-page")||"home"}));})();
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
