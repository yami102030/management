(()=>{var tp=Object.create;var sc=Object.defineProperty;var ap=Object.getOwnPropertyDescriptor;var rp=Object.getOwnPropertyNames;var ep=Object.getPrototypeOf,ip=Object.prototype.hasOwnProperty;var vr=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var np=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of rp(a))!ip.call(t,i)&&i!==r&&sc(t,i,{get:()=>a[i],enumerable:!(e=ap(a,i))||e.enumerable});return t};var Ir=(t,a,r)=>(r=t!=null?tp(ep(t)):{},np(a||!t||!t.__esModule?sc(r,"default",{value:t,enumerable:!0}):r,t));var wc=vr(T=>{"use strict";var l2=Symbol.for("react.transitional.element"),op=Symbol.for("react.portal"),lp=Symbol.for("react.fragment"),dp=Symbol.for("react.strict_mode"),cp=Symbol.for("react.profiler"),hp=Symbol.for("react.consumer"),up=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),pp=Symbol.for("react.memo"),kc=Symbol.for("react.lazy"),fp=Symbol.for("react.activity"),gc=Symbol.iterator;function vp(t){return t===null||typeof t!="object"?null:(t=gc&&t[gc]||t["@@iterator"],typeof t=="function"?t:null)}var xc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lc=Object.assign,Mc={};function Ae(t,a,r){this.props=t,this.context=a,this.refs=Mc,this.updater=r||xc}Ae.prototype.isReactComponent={};Ae.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};Ae.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mc(){}mc.prototype=Ae.prototype;function d2(t,a,r){this.props=t,this.context=a,this.refs=Mc,this.updater=r||xc}var c2=d2.prototype=new mc;c2.constructor=d2;Lc(c2,Ae.prototype);c2.isPureReactComponent=!0;var pc=Array.isArray;function o2(){}var lt={H:null,A:null,T:null,S:null},yc=Object.prototype.hasOwnProperty;function h2(t,a,r){var e=r.ref;return{$$typeof:l2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function kp(t,a){return h2(t.type,a,t.props)}function u2(t){return typeof t=="object"&&t!==null&&t.$$typeof===l2}function xp(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var fc=/\/+/g;function n2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?xp(""+t.key):a.toString(36)}function Lp(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(o2,o2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Se(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case l2:case op:o=!0;break;case kc:return o=t._init,Se(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+n2(t,0):e,pc(i)?(r="",o!=null&&(r=o.replace(fc,"$&/")+"/"),Se(i,a,r,"",function(s){return s})):i!=null&&(u2(i)&&(i=kp(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(fc,"$&/")+"/")+o)),a.push(i)),1;o=0;var d=e===""?".":e+":";if(pc(t))for(var h=0;h<t.length;h++)e=t[h],n=d+n2(e,h),o+=Se(e,a,r,n,i);else if(h=vp(t),typeof h=="function")for(t=h.call(t),h=0;!(e=t.next()).done;)e=e.value,n=d+n2(e,h++),o+=Se(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return Se(Lp(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function ro(t,a,r){if(t==null)return t;var e=[],i=0;return Se(t,e,"","",function(n){return a.call(r,n,i++)}),e}function Mp(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var vc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mp={map:ro,forEach:function(t,a,r){ro(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return ro(t,function(){a++}),a},toArray:function(t){return ro(t,function(a){return a})||[]},only:function(t){if(!u2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};T.Activity=fp;T.Children=mp;T.Component=Ae;T.Fragment=lp;T.Profiler=cp;T.PureComponent=d2;T.StrictMode=dp;T.Suspense=gp;T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=lt;T.__COMPILER_RUNTIME={__proto__:null,c:function(t){return lt.H.useMemoCache(t)}};T.cache=function(t){return function(){return t.apply(null,arguments)}};T.cacheSignal=function(){return null};T.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=Lc({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!yc.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),d=0;d<n;d++)o[d]=arguments[d+2];e.children=o}return h2(t.type,i,e)};T.createContext=function(t){return t={$$typeof:up,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:hp,_context:t},t};T.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)yc.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var d=Array(o),h=0;h<o;h++)d[h]=arguments[h+2];i.children=d}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return h2(t,n,i)};T.createRef=function(){return{current:null}};T.forwardRef=function(t){return{$$typeof:sp,render:t}};T.isValidElement=u2;T.lazy=function(t){return{$$typeof:kc,_payload:{_status:-1,_result:t},_init:Mp}};T.memo=function(t,a){return{$$typeof:pp,type:t,compare:a===void 0?null:a}};T.startTransition=function(t){var a=lt.T,r={};lt.T=r;try{var e=t(),i=lt.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(o2,vc)}catch(n){vc(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),lt.T=a}};T.unstable_useCacheRefresh=function(){return lt.H.useCacheRefresh()};T.use=function(t){return lt.H.use(t)};T.useActionState=function(t,a,r){return lt.H.useActionState(t,a,r)};T.useCallback=function(t,a){return lt.H.useCallback(t,a)};T.useContext=function(t){return lt.H.useContext(t)};T.useDebugValue=function(){};T.useDeferredValue=function(t,a){return lt.H.useDeferredValue(t,a)};T.useEffect=function(t,a){return lt.H.useEffect(t,a)};T.useEffectEvent=function(t){return lt.H.useEffectEvent(t)};T.useId=function(){return lt.H.useId()};T.useImperativeHandle=function(t,a,r){return lt.H.useImperativeHandle(t,a,r)};T.useInsertionEffect=function(t,a){return lt.H.useInsertionEffect(t,a)};T.useLayoutEffect=function(t,a){return lt.H.useLayoutEffect(t,a)};T.useMemo=function(t,a){return lt.H.useMemo(t,a)};T.useOptimistic=function(t,a){return lt.H.useOptimistic(t,a)};T.useReducer=function(t,a,r){return lt.H.useReducer(t,a,r)};T.useRef=function(t){return lt.H.useRef(t)};T.useState=function(t){return lt.H.useState(t)};T.useSyncExternalStore=function(t,a,r){return lt.H.useSyncExternalStore(t,a,r)};T.useTransition=function(){return lt.H.useTransition()};T.version="19.2.8"});var Ra=vr((Wv,Cc)=>{"use strict";Cc.exports=wc()});var _c=vr(st=>{"use strict";function f2(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<eo(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Ua(t){return t.length===0?null:t[0]}function no(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,d=t[o],h=o+1,s=t[h];if(0>eo(d,r))h<i&&0>eo(s,d)?(t[e]=s,t[h]=r,e=h):(t[e]=d,t[o]=r,e=o);else if(h<i&&0>eo(s,r))t[e]=s,t[h]=r,e=h;else break t}}return a}function eo(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}st.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(bc=performance,st.unstable_now=function(){return bc.now()}):(s2=Date,Bc=s2.now(),st.unstable_now=function(){return s2.now()-Bc});var bc,s2,Bc,Fa=[],kr=[],yp=1,Ma=null,Qt=3,v2=!1,Oi=!1,Ui=!1,k2=!1,Hc=typeof setTimeout=="function"?setTimeout:null,Sc=typeof clearTimeout=="function"?clearTimeout:null,jc=typeof setImmediate<"u"?setImmediate:null;function io(t){for(var a=Ua(kr);a!==null;){if(a.callback===null)no(kr);else if(a.startTime<=t)no(kr),a.sortIndex=a.expirationTime,f2(Fa,a);else break;a=Ua(kr)}}function x2(t){if(Ui=!1,io(t),!Oi)if(Ua(Fa)!==null)Oi=!0,ze||(ze=!0,Ve());else{var a=Ua(kr);a!==null&&L2(x2,a.startTime-t)}}var ze=!1,Zi=-1,Ac=5,Vc=-1;function zc(){return k2?!0:!(st.unstable_now()-Vc<Ac)}function g2(){if(k2=!1,ze){var t=st.unstable_now();Vc=t;var a=!0;try{t:{Oi=!1,Ui&&(Ui=!1,Sc(Zi),Zi=-1),v2=!0;var r=Qt;try{a:{for(io(t),Ma=Ua(Fa);Ma!==null&&!(Ma.expirationTime>t&&zc());){var e=Ma.callback;if(typeof e=="function"){Ma.callback=null,Qt=Ma.priorityLevel;var i=e(Ma.expirationTime<=t);if(t=st.unstable_now(),typeof i=="function"){Ma.callback=i,io(t),a=!0;break a}Ma===Ua(Fa)&&no(Fa),io(t)}else no(Fa);Ma=Ua(Fa)}if(Ma!==null)a=!0;else{var n=Ua(kr);n!==null&&L2(x2,n.startTime-t),a=!1}}break t}finally{Ma=null,Qt=r,v2=!1}a=void 0}}finally{a?Ve():ze=!1}}}var Ve;typeof jc=="function"?Ve=function(){jc(g2)}:typeof MessageChannel<"u"?(p2=new MessageChannel,Wc=p2.port2,p2.port1.onmessage=g2,Ve=function(){Wc.postMessage(null)}):Ve=function(){Hc(g2,0)};var p2,Wc;function L2(t,a){Zi=Hc(function(){t(st.unstable_now())},a)}st.unstable_IdlePriority=5;st.unstable_ImmediatePriority=1;st.unstable_LowPriority=4;st.unstable_NormalPriority=3;st.unstable_Profiling=null;st.unstable_UserBlockingPriority=2;st.unstable_cancelCallback=function(t){t.callback=null};st.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ac=0<t?Math.floor(1e3/t):5};st.unstable_getCurrentPriorityLevel=function(){return Qt};st.unstable_next=function(t){switch(Qt){case 1:case 2:case 3:var a=3;break;default:a=Qt}var r=Qt;Qt=a;try{return t()}finally{Qt=r}};st.unstable_requestPaint=function(){k2=!0};st.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=Qt;Qt=t;try{return a()}finally{Qt=r}};st.unstable_scheduleCallback=function(t,a,r){var e=st.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:yp++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,f2(kr,t),Ua(Fa)===null&&t===Ua(kr)&&(Ui?(Sc(Zi),Zi=-1):Ui=!0,L2(x2,r-e))):(t.sortIndex=i,f2(Fa,t),Oi||v2||(Oi=!0,ze||(ze=!0,Ve()))),t};st.unstable_shouldYield=zc;st.unstable_wrapCallback=function(t){var a=Qt;return function(){var r=Qt;Qt=a;try{return t.apply(this,arguments)}finally{Qt=r}}}});var Nc=vr((Sv,Tc)=>{"use strict";Tc.exports=_c()});var Dc=vr(Rt=>{"use strict";var wp=Ra();function Ec(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function xr(){}var Jt={d:{f:xr,r:function(){throw Error(Ec(522))},D:xr,C:xr,L:xr,m:xr,X:xr,S:xr,M:xr},p:0,findDOMNode:null},Cp=Symbol.for("react.portal");function bp(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cp,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var qi=wp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function oo(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Jt;Rt.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(Ec(299));return bp(t,a,null,r)};Rt.flushSync=function(t){var a=qi.T,r=Jt.p;try{if(qi.T=null,Jt.p=2,t)return t()}finally{qi.T=a,Jt.p=r,Jt.d.f()}};Rt.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Jt.d.C(t,a))};Rt.prefetchDNS=function(t){typeof t=="string"&&Jt.d.D(t)};Rt.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=oo(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Jt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Jt.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};Rt.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=oo(a.as,a.crossOrigin);Jt.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Jt.d.M(t)};Rt.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=oo(r,a.crossOrigin);Jt.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};Rt.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=oo(a.as,a.crossOrigin);Jt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Jt.d.m(t)};Rt.requestFormReset=function(t){Jt.d.r(t)};Rt.unstable_batchedUpdates=function(t,a){return t(a)};Rt.useFormState=function(t,a,r){return qi.H.useFormState(t,a,r)};Rt.useFormStatus=function(){return qi.H.useHostTransitionStatus()};Rt.version="19.2.8"});var Zc=vr((Vv,Uc)=>{"use strict";function Oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc)}catch(t){console.error(t)}}Oc(),Uc.exports=Dc()});var Ps=vr(Vl=>{"use strict";var jt=Nc(),gh=Ra(),Bp=Zc();function m(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hn(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function fh(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function vh(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function qc(t){if(Hn(t)!==t)throw Error(m(188))}function jp(t){var a=t.alternate;if(!a){if(a=Hn(t),a===null)throw Error(m(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return qc(i),t;if(n===e)return qc(i),a;n=n.sibling}throw Error(m(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,d=i.child;d;){if(d===r){o=!0,r=i,e=n;break}if(d===e){o=!0,e=i,r=n;break}d=d.sibling}if(!o){for(d=n.child;d;){if(d===r){o=!0,r=n,e=i;break}if(d===e){o=!0,e=n,r=i;break}d=d.sibling}if(!o)throw Error(m(189))}}if(r.alternate!==e)throw Error(m(190))}if(r.tag!==3)throw Error(m(188));return r.stateNode.current===r?t:a}function kh(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=kh(t),a!==null)return a;t=t.sibling}return null}var ht=Object.assign,Wp=Symbol.for("react.element"),lo=Symbol.for("react.transitional.element"),Fi=Symbol.for("react.portal"),Oe=Symbol.for("react.fragment"),xh=Symbol.for("react.strict_mode"),P2=Symbol.for("react.profiler"),Lh=Symbol.for("react.consumer"),ir=Symbol.for("react.context"),J1=Symbol.for("react.forward_ref"),t1=Symbol.for("react.suspense"),a1=Symbol.for("react.suspense_list"),R1=Symbol.for("react.memo"),Lr=Symbol.for("react.lazy"),r1=Symbol.for("react.activity"),Hp=Symbol.for("react.memo_cache_sentinel"),Gc=Symbol.iterator;function Gi(t){return t===null||typeof t!="object"?null:(t=Gc&&t[Gc]||t["@@iterator"],typeof t=="function"?t:null)}var Sp=Symbol.for("react.client.reference");function e1(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Sp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Oe:return"Fragment";case P2:return"Profiler";case xh:return"StrictMode";case t1:return"Suspense";case a1:return"SuspenseList";case r1:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Fi:return"Portal";case ir:return t.displayName||"Context";case Lh:return(t._context.displayName||"Context")+".Consumer";case J1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R1:return a=t.displayName||null,a!==null?a:e1(t.type)||"Memo";case Lr:a=t._payload,t=t._init;try{return e1(t(a))}catch{}}return null}var $i=Array.isArray,V=gh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=Bp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},i1=[],Ue=-1;function Xa(t){return{current:t}}function zt(t){0>Ue||(t.current=i1[Ue],i1[Ue]=null,Ue--)}function ot(t,a){Ue++,i1[Ue]=t.current,t.current=a}var Ya=Xa(null),fn=Xa(null),Sr=Xa(null),Zo=Xa(null);function qo(t,a){switch(ot(Sr,a),ot(fn,t),ot(Ya,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?F0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=F0(a),t=Os(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}zt(Ya),ot(Ya,t)}function ii(){zt(Ya),zt(fn),zt(Sr)}function n1(t){t.memoizedState!==null&&ot(Zo,t);var a=Ya.current,r=Os(a,t.type);a!==r&&(ot(fn,t),ot(Ya,r))}function Go(t){fn.current===t&&(zt(Ya),zt(fn)),Zo.current===t&&(zt(Zo),Bn._currentValue=ie)}var M2,Yc;function te(t){if(M2===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);M2=a&&a[1]||"",Yc=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M2+t+Yc}var m2=!1;function y2(t,a){if(!t||m2)return"";m2=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(x){var p=x}Reflect.construct(t,[],k)}else{try{k.call()}catch(x){p=x}t.call(k.prototype)}}else{try{throw Error()}catch(x){p=x}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(x){if(x&&p&&typeof x.stack=="string")return[x.stack,p.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],d=n[1];if(o&&d){var h=o.split(`
`),s=d.split(`
`);for(i=e=0;e<h.length&&!h[e].includes("DetermineComponentFrameRoot");)e++;for(;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;if(e===h.length||i===s.length)for(e=h.length-1,i=s.length-1;1<=e&&0<=i&&h[e]!==s[i];)i--;for(;1<=e&&0<=i;e--,i--)if(h[e]!==s[i]){if(e!==1||i!==1)do if(e--,i--,0>i||h[e]!==s[i]){var f=`
`+h[e].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=e&&0<=i);break}}}finally{m2=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?te(r):""}function Ap(t,a){switch(t.tag){case 26:case 27:case 5:return te(t.type);case 16:return te("Lazy");case 13:return t.child!==a&&a!==null?te("Suspense Fallback"):te("Suspense");case 19:return te("SuspenseList");case 0:case 15:return y2(t.type,!1);case 11:return y2(t.type.render,!1);case 1:return y2(t.type,!0);case 31:return te("Activity");default:return""}}function Xc(t){try{var a="",r=null;do a+=Ap(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var o1=Object.prototype.hasOwnProperty,F1=jt.unstable_scheduleCallback,w2=jt.unstable_cancelCallback,Vp=jt.unstable_shouldYield,zp=jt.unstable_requestPaint,ua=jt.unstable_now,_p=jt.unstable_getCurrentPriorityLevel,Mh=jt.unstable_ImmediatePriority,mh=jt.unstable_UserBlockingPriority,Yo=jt.unstable_NormalPriority,Tp=jt.unstable_LowPriority,yh=jt.unstable_IdlePriority,Np=jt.log,Ep=jt.unstable_setDisableYieldValue,Sn=null,sa=null;function br(t){if(typeof Np=="function"&&Ep(t),sa&&typeof sa.setStrictMode=="function")try{sa.setStrictMode(Sn,t)}catch{}}var ga=Math.clz32?Math.clz32:Up,Dp=Math.log,Op=Math.LN2;function Up(t){return t>>>=0,t===0?32:31-(Dp(t)/Op|0)|0}var co=256,ho=262144,uo=4194304;function ae(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vl(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var d=e&134217727;return d!==0?(e=d&~n,e!==0?i=ae(e):(o&=d,o!==0?i=ae(o):r||(r=d&~t,r!==0&&(i=ae(r))))):(d=e&~n,d!==0?i=ae(d):o!==0?i=ae(o):r||(r=e&~t,r!==0&&(i=ae(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function An(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Zp(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wh(){var t=uo;return uo<<=1,(uo&62914560)===0&&(uo=4194304),t}function C2(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function Vn(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qp(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var d=t.entanglements,h=t.expirationTimes,s=t.hiddenUpdates;for(r=o&~r;0<r;){var f=31-ga(r),k=1<<f;d[f]=0,h[f]=-1;var p=s[f];if(p!==null)for(s[f]=null,f=0;f<p.length;f++){var x=p[f];x!==null&&(x.lane&=-536870913)}r&=~k}e!==0&&Ch(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function Ch(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-ga(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function bh(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-ga(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function Bh(t,a){var r=a&-a;return r=(r&42)!==0?1:$1(r),(r&(t.suspendedLanes|a))!==0?0:r}function $1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function I1(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function jh(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:Fs(t.type))}function Qc(t,a){var r=F.p;try{return F.p=t,a()}finally{F.p=r}}var Gr=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Gr,ra="__reactProps$"+Gr,fi="__reactContainer$"+Gr,l1="__reactEvents$"+Gr,Gp="__reactListeners$"+Gr,Yp="__reactHandles$"+Gr,Kc="__reactResources$"+Gr,zn="__reactMarker$"+Gr;function P1(t){delete t[Ot],delete t[ra],delete t[l1],delete t[Gp],delete t[Yp]}function Ze(t){var a=t[Ot];if(a)return a;for(var r=t.parentNode;r;){if(a=r[fi]||r[Ot]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=ah(t);t!==null;){if(r=t[Ot])return r;t=ah(t)}return a}t=r,r=t.parentNode}return null}function vi(t){if(t=t[Ot]||t[fi]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Ii(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(m(33))}function $e(t){var a=t[Kc];return a||(a=t[Kc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Vt(t){t[zn]=!0}var Wh=new Set,Hh={};function pe(t,a){ni(t,a),ni(t+"Capture",a)}function ni(t,a){for(Hh[t]=a,t=0;t<a.length;t++)Wh.add(a[t])}var Xp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jc={},Rc={};function Qp(t){return o1.call(Rc,t)?!0:o1.call(Jc,t)?!1:Xp.test(t)?Rc[t]=!0:(Jc[t]=!0,!1)}function Bo(t,a,r){if(Qp(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function so(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function $a(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function ya(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Sh(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Kp(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function d1(t){if(!t._valueTracker){var a=Sh(t)?"checked":"value";t._valueTracker=Kp(t,a,""+t[a])}}function Ah(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=Sh(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function Xo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Jp=/[\n"\\]/g;function ba(t){return t.replace(Jp,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function c1(t,a,r,e,i,n,o,d){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+ya(a)):t.value!==""+ya(a)&&(t.value=""+ya(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?h1(t,o,ya(a)):r!=null?h1(t,o,ya(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+ya(d):t.removeAttribute("name")}function Vh(t,a,r,e,i,n,o,d){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){d1(t);return}r=r!=null?""+ya(r):"",a=a!=null?""+ya(a):r,d||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=d?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),d1(t)}function h1(t,a,r){a==="number"&&Xo(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ie(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+ya(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function zh(t,a,r){if(a!=null&&(a=""+ya(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+ya(r):""}function _h(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(m(92));if($i(e)){if(1<e.length)throw Error(m(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=ya(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),d1(t)}function oi(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var Rp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fc(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||Rp.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function Th(t,a,r){if(a!=null&&typeof a!="object")throw Error(m(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&Fc(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&Fc(t,n,a[n])}function td(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$p=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jo(t){return $p.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function nr(){}var u1=null;function ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qe=null,Pe=null;function $c(t){var a=vi(t);if(a&&(t=a.stateNode)){var r=t[ra]||null;t:switch(t=a.stateNode,a.type){case"input":if(c1(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ba(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[ra]||null;if(!i)throw Error(m(90));c1(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&Ah(e)}break t;case"textarea":zh(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Ie(t,!!r.multiple,a,!1)}}}var b2=!1;function Nh(t,a,r){if(b2)return t(a,r);b2=!0;try{var e=t(a);return e}finally{if(b2=!1,(qe!==null||Pe!==null)&&(Wl(),qe&&(a=qe,t=Pe,Pe=qe=null,$c(a),t)))for(a=0;a<t.length;a++)$c(t[a])}}function vn(t,a){var r=t.stateNode;if(r===null)return null;var e=r[ra]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(m(231,a,typeof r));return r}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),s1=!1;if(hr)try{_e={},Object.defineProperty(_e,"passive",{get:function(){s1=!0}}),window.addEventListener("test",_e,_e),window.removeEventListener("test",_e,_e)}catch{s1=!1}var _e,Br=null,rd=null,Wo=null;function Eh(){if(Wo)return Wo;var t,a=rd,r=a.length,e,i="value"in Br?Br.value:Br.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return Wo=i.slice(t,1<e?1-e:void 0)}function Ho(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function go(){return!0}function Ic(){return!1}function ea(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(r=t[d],this[d]=r?r(n):n[d]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?go:Ic,this.isPropagationStopped=Ic,this}return ht(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),a}var fe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=ea(fe),_n=ht({},fe,{view:0,detail:0}),Ip=ea(_n),B2,j2,Yi,xl=ht({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yi&&(Yi&&t.type==="mousemove"?(B2=t.screenX-Yi.screenX,j2=t.screenY-Yi.screenY):j2=B2=0,Yi=t),B2)},movementY:function(t){return"movementY"in t?t.movementY:j2}}),Pc=ea(xl),Pp=ht({},xl,{dataTransfer:0}),t5=ea(Pp),a5=ht({},_n,{relatedTarget:0}),W2=ea(a5),r5=ht({},fe,{animationName:0,elapsedTime:0,pseudoElement:0}),e5=ea(r5),i5=ht({},fe,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n5=ea(i5),o5=ht({},fe,{data:0}),t0=ea(o5),l5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h5(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=c5[t])?!!a[t]:!1}function ed(){return h5}var u5=ht({},_n,{key:function(t){if(t.key){var a=l5[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?d5[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ed,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s5=ea(u5),g5=ht({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),a0=ea(g5),p5=ht({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ed}),f5=ea(p5),v5=ht({},fe,{propertyName:0,elapsedTime:0,pseudoElement:0}),k5=ea(v5),x5=ht({},xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),L5=ea(x5),M5=ht({},fe,{newState:0,oldState:0}),m5=ea(M5),y5=[9,13,27,32],id=hr&&"CompositionEvent"in window,an=null;hr&&"documentMode"in document&&(an=document.documentMode);var w5=hr&&"TextEvent"in window&&!an,Dh=hr&&(!id||an&&8<an&&11>=an),r0=" ",e0=!1;function Oh(t,a){switch(t){case"keyup":return y5.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ge=!1;function C5(t,a){switch(t){case"compositionend":return Uh(a);case"keypress":return a.which!==32?null:(e0=!0,r0);case"textInput":return t=a.data,t===r0&&e0?null:t;default:return null}}function b5(t,a){if(Ge)return t==="compositionend"||!id&&Oh(t,a)?(t=Eh(),Wo=rd=Br=null,Ge=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Dh&&a.locale!=="ko"?null:a.data;default:return null}}var B5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function i0(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!B5[t.type]:a==="textarea"}function Zh(t,a,r,e){qe?Pe?Pe.push(e):Pe=[e]:qe=e,a=cl(a,"onChange"),0<a.length&&(r=new kl("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var rn=null,kn=null;function j5(t){Ns(t,0)}function Ll(t){var a=Ii(t);if(Ah(a))return t}function n0(t,a){if(t==="change")return a}var qh=!1;hr&&(hr?(fo="oninput"in document,fo||(H2=document.createElement("div"),H2.setAttribute("oninput","return;"),fo=typeof H2.oninput=="function"),po=fo):po=!1,qh=po&&(!document.documentMode||9<document.documentMode));var po,fo,H2;function o0(){rn&&(rn.detachEvent("onpropertychange",Gh),kn=rn=null)}function Gh(t){if(t.propertyName==="value"&&Ll(kn)){var a=[];Zh(a,kn,t,ad(t)),Nh(j5,a)}}function W5(t,a,r){t==="focusin"?(o0(),rn=a,kn=r,rn.attachEvent("onpropertychange",Gh)):t==="focusout"&&o0()}function H5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(kn)}function S5(t,a){if(t==="click")return Ll(a)}function A5(t,a){if(t==="input"||t==="change")return Ll(a)}function V5(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var fa=typeof Object.is=="function"?Object.is:V5;function xn(t,a){if(fa(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!o1.call(a,i)||!fa(t[i],a[i]))return!1}return!0}function l0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function d0(t,a){var r=l0(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=l0(r)}}function Yh(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Yh(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Xh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Xo(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=Xo(t.document)}return a}function nd(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var z5=hr&&"documentMode"in document&&11>=document.documentMode,Ye=null,g1=null,en=null,p1=!1;function c0(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;p1||Ye==null||Ye!==Xo(e)||(e=Ye,"selectionStart"in e&&nd(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),en&&xn(en,e)||(en=e,e=cl(g1,"onSelect"),0<e.length&&(a=new kl("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=Ye)))}function Pr(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var Xe={animationend:Pr("Animation","AnimationEnd"),animationiteration:Pr("Animation","AnimationIteration"),animationstart:Pr("Animation","AnimationStart"),transitionrun:Pr("Transition","TransitionRun"),transitionstart:Pr("Transition","TransitionStart"),transitioncancel:Pr("Transition","TransitionCancel"),transitionend:Pr("Transition","TransitionEnd")},S2={},Qh={};hr&&(Qh=document.createElement("div").style,"AnimationEvent"in window||(delete Xe.animationend.animation,delete Xe.animationiteration.animation,delete Xe.animationstart.animation),"TransitionEvent"in window||delete Xe.transitionend.transition);function ve(t){if(S2[t])return S2[t];if(!Xe[t])return t;var a=Xe[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in Qh)return S2[t]=a[r];return t}var Kh=ve("animationend"),Jh=ve("animationiteration"),Rh=ve("animationstart"),_5=ve("transitionrun"),T5=ve("transitionstart"),N5=ve("transitioncancel"),Fh=ve("transitionend"),$h=new Map,f1="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");f1.push("scrollEnd");function Na(t,a){$h.set(t,a),pe(a,[t])}var Qo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ma=[],Qe=0,od=0;function Ml(){for(var t=Qe,a=od=Qe=0;a<t;){var r=ma[a];ma[a++]=null;var e=ma[a];ma[a++]=null;var i=ma[a];ma[a++]=null;var n=ma[a];if(ma[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&Ih(r,i,n)}}function ml(t,a,r,e){ma[Qe++]=t,ma[Qe++]=a,ma[Qe++]=r,ma[Qe++]=e,od|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function ld(t,a,r,e){return ml(t,a,r,e),Ko(t)}function ke(t,a){return ml(t,null,null,a),Ko(t)}function Ih(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-ga(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function Ko(t){if(50<gn)throw gn=0,N1=null,Error(m(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Ke={};function E5(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ca(t,a,r,e){return new E5(t,a,r,e)}function dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lr(t,a){var r=t.alternate;return r===null?(r=ca(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Ph(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function So(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")dd(t)&&(o=1);else if(typeof t=="string")o=Zf(t,r,Ya.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case r1:return t=ca(31,r,a,i),t.elementType=r1,t.lanes=n,t;case Oe:return ne(r.children,i,n,a);case xh:o=8,i|=24;break;case P2:return t=ca(12,r,a,i|2),t.elementType=P2,t.lanes=n,t;case t1:return t=ca(13,r,a,i),t.elementType=t1,t.lanes=n,t;case a1:return t=ca(19,r,a,i),t.elementType=a1,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ir:o=10;break t;case Lh:o=9;break t;case J1:o=11;break t;case R1:o=14;break t;case Lr:o=16,e=null;break t}o=29,r=Error(m(130,t===null?"null":typeof t,"")),e=null}return a=ca(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function ne(t,a,r,e){return t=ca(7,t,e,a),t.lanes=r,t}function A2(t,a,r){return t=ca(6,t,null,a),t.lanes=r,t}function tu(t){var a=ca(18,null,null,0);return a.stateNode=t,a}function V2(t,a,r){return a=ca(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var h0=new WeakMap;function Ba(t,a){if(typeof t=="object"&&t!==null){var r=h0.get(t);return r!==void 0?r:(a={value:t,source:a,stack:Xc(a)},h0.set(t,a),a)}return{value:t,source:a,stack:Xc(a)}}var Je=[],Re=0,Jo=null,Ln=0,wa=[],Ca=0,Or=null,Za=1,qa="";function rr(t,a){Je[Re++]=Ln,Je[Re++]=Jo,Jo=t,Ln=a}function au(t,a,r){wa[Ca++]=Za,wa[Ca++]=qa,wa[Ca++]=Or,Or=t;var e=Za;t=qa;var i=32-ga(e)-1;e&=~(1<<i),r+=1;var n=32-ga(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,Za=1<<32-ga(a)+i|r<<i|e,qa=n+t}else Za=1<<n|r<<i|e,qa=t}function cd(t){t.return!==null&&(rr(t,1),au(t,1,0))}function hd(t){for(;t===Jo;)Jo=Je[--Re],Je[Re]=null,Ln=Je[--Re],Je[Re]=null;for(;t===Or;)Or=wa[--Ca],wa[Ca]=null,qa=wa[--Ca],wa[Ca]=null,Za=wa[--Ca],wa[Ca]=null}function ru(t,a){wa[Ca++]=Za,wa[Ca++]=qa,wa[Ca++]=Or,Za=a.id,qa=a.overflow,Or=t}var Ut=null,ct=null,Q=!1,Ar=null,ja=!1,v1=Error(m(519));function Ur(t){var a=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mn(Ba(a,t)),v1}function u0(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[Ot]=t,a[ra]=e,r){case"dialog":Z("cancel",a),Z("close",a);break;case"iframe":case"object":case"embed":Z("load",a);break;case"video":case"audio":for(r=0;r<Cn.length;r++)Z(Cn[r],a);break;case"source":Z("error",a);break;case"img":case"image":case"link":Z("error",a),Z("load",a);break;case"details":Z("toggle",a);break;case"input":Z("invalid",a),Vh(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":Z("invalid",a);break;case"textarea":Z("invalid",a),_h(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||Ds(a.textContent,r)?(e.popover!=null&&(Z("beforetoggle",a),Z("toggle",a)),e.onScroll!=null&&Z("scroll",a),e.onScrollEnd!=null&&Z("scrollend",a),e.onClick!=null&&(a.onclick=nr),a=!0):a=!1,a||Ur(t,!0)}function s0(t){for(Ut=t.return;Ut;)switch(Ut.tag){case 5:case 31:case 13:ja=!1;return;case 27:case 3:ja=!0;return;default:Ut=Ut.return}}function Te(t){if(t!==Ut)return!1;if(!Q)return s0(t),Q=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Z1(t.type,t.memoizedProps)),r=!r),r&&ct&&Ur(t),s0(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));ct=th(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));ct=th(t)}else a===27?(a=ct,Yr(t.type)?(t=X1,X1=null,ct=t):ct=a):ct=Ut?Ha(t.stateNode.nextSibling):null;return!0}function ce(){ct=Ut=null,Q=!1}function z2(){var t=Ar;return t!==null&&(ta===null?ta=t:ta.push.apply(ta,t),Ar=null),t}function Mn(t){Ar===null?Ar=[t]:Ar.push(t)}var k1=Xa(null),xe=null,or=null;function mr(t,a,r){ot(k1,a._currentValue),a._currentValue=r}function dr(t){t._currentValue=k1.current,zt(k1)}function x1(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function L1(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var d=n;n=i;for(var h=0;h<a.length;h++)if(d.context===a[h]){n.lanes|=r,d=n.alternate,d!==null&&(d.lanes|=r),x1(n.return,r,t),e||(o=null);break t}n=d.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),x1(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ki(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(m(387));if(o=o.memoizedProps,o!==null){var d=i.type;fa(i.pendingProps.value,o.value)||(t!==null?t.push(d):t=[d])}}else if(i===Zo.current){if(o=i.alternate,o===null)throw Error(m(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Bn):t=[Bn])}i=i.return}t!==null&&L1(a,t,r,e),a.flags|=262144}function Ro(t){for(t=t.firstContext;t!==null;){if(!fa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function he(t){xe=t,or=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Zt(t){return eu(xe,t)}function vo(t,a){return xe===null&&he(t),eu(t,a)}function eu(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},or===null){if(t===null)throw Error(m(308));or=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else or=or.next=a;return r}var D5=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},O5=jt.unstable_scheduleCallback,U5=jt.unstable_NormalPriority,Ct={$$typeof:ir,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ud(){return{controller:new D5,data:new Map,refCount:0}}function Tn(t){t.refCount--,t.refCount===0&&O5(U5,function(){t.controller.abort()})}var nn=null,M1=0,li=0,ti=null;function Z5(t,a){if(nn===null){var r=nn=[];M1=0,li=Nd(),ti={status:"pending",value:void 0,then:function(e){r.push(e)}}}return M1++,a.then(g0,g0),a}function g0(){if(--M1===0&&nn!==null){ti!==null&&(ti.status="fulfilled");var t=nn;nn=null,li=0,ti=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function q5(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var p0=V.S;V.S=function(t,a){ks=ua(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Z5(t,a),p0!==null&&p0(t,a)};var oe=Xa(null);function sd(){var t=oe.current;return t!==null?t:nt.pooledCache}function Ao(t,a){a===null?ot(oe,oe.current):ot(oe,a.pool)}function iu(){var t=sd();return t===null?null:{parent:Ct._currentValue,pool:t}}var xi=Error(m(460)),gd=Error(m(474)),yl=Error(m(542)),Fo={then:function(){}};function f0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nu(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(nr,nr),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,k0(t),t;default:if(typeof a.status=="string")a.then(nr,nr);else{if(t=nt,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,k0(t),t}throw le=a,xi}}function re(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(le=r,xi):r}}var le=null;function v0(){if(le===null)throw Error(m(459));var t=le;return le=null,t}function k0(t){if(t===xi||t===yl)throw Error(m(483))}var ai=null,mn=0;function ko(t){var a=mn;return mn+=1,ai===null&&(ai=[]),nu(ai,t,a)}function Xi(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function xo(t,a){throw a.$$typeof===Wp?Error(m(525)):(t=Object.prototype.toString.call(a),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function ou(t){function a(g,u){if(t){var v=g.deletions;v===null?(g.deletions=[u],g.flags|=16):v.push(u)}}function r(g,u){if(!t)return null;for(;u!==null;)a(g,u),u=u.sibling;return null}function e(g){for(var u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function i(g,u){return g=lr(g,u),g.index=0,g.sibling=null,g}function n(g,u,v){return g.index=v,t?(v=g.alternate,v!==null?(v=v.index,v<u?(g.flags|=67108866,u):v):(g.flags|=67108866,u)):(g.flags|=1048576,u)}function o(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function d(g,u,v,L){return u===null||u.tag!==6?(u=A2(v,g.mode,L),u.return=g,u):(u=i(u,v),u.return=g,u)}function h(g,u,v,L){var B=v.type;return B===Oe?f(g,u,v.props.children,L,v.key):u!==null&&(u.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Lr&&re(B)===u.type)?(u=i(u,v.props),Xi(u,v),u.return=g,u):(u=So(v.type,v.key,v.props,null,g.mode,L),Xi(u,v),u.return=g,u)}function s(g,u,v,L){return u===null||u.tag!==4||u.stateNode.containerInfo!==v.containerInfo||u.stateNode.implementation!==v.implementation?(u=V2(v,g.mode,L),u.return=g,u):(u=i(u,v.children||[]),u.return=g,u)}function f(g,u,v,L,B){return u===null||u.tag!==7?(u=ne(v,g.mode,L,B),u.return=g,u):(u=i(u,v),u.return=g,u)}function k(g,u,v){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=A2(""+u,g.mode,v),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case lo:return v=So(u.type,u.key,u.props,null,g.mode,v),Xi(v,u),v.return=g,v;case Fi:return u=V2(u,g.mode,v),u.return=g,u;case Lr:return u=re(u),k(g,u,v)}if($i(u)||Gi(u))return u=ne(u,g.mode,v,null),u.return=g,u;if(typeof u.then=="function")return k(g,ko(u),v);if(u.$$typeof===ir)return k(g,vo(g,u),v);xo(g,u)}return null}function p(g,u,v,L){var B=u!==null?u.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return B!==null?null:d(g,u,""+v,L);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case lo:return v.key===B?h(g,u,v,L):null;case Fi:return v.key===B?s(g,u,v,L):null;case Lr:return v=re(v),p(g,u,v,L)}if($i(v)||Gi(v))return B!==null?null:f(g,u,v,L,null);if(typeof v.then=="function")return p(g,u,ko(v),L);if(v.$$typeof===ir)return p(g,u,vo(g,v),L);xo(g,v)}return null}function x(g,u,v,L,B){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return g=g.get(v)||null,d(u,g,""+L,B);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case lo:return g=g.get(L.key===null?v:L.key)||null,h(u,g,L,B);case Fi:return g=g.get(L.key===null?v:L.key)||null,s(u,g,L,B);case Lr:return L=re(L),x(g,u,v,L,B)}if($i(L)||Gi(L))return g=g.get(v)||null,f(u,g,L,B,null);if(typeof L.then=="function")return x(g,u,v,ko(L),B);if(L.$$typeof===ir)return x(g,u,v,vo(u,L),B);xo(u,L)}return null}function y(g,u,v,L){for(var B=null,z=null,j=u,A=u=0,N=null;j!==null&&A<v.length;A++){j.index>A?(N=j,j=null):N=j.sibling;var O=p(g,j,v[A],L);if(O===null){j===null&&(j=N);break}t&&j&&O.alternate===null&&a(g,j),u=n(O,u,A),z===null?B=O:z.sibling=O,z=O,j=N}if(A===v.length)return r(g,j),Q&&rr(g,A),B;if(j===null){for(;A<v.length;A++)j=k(g,v[A],L),j!==null&&(u=n(j,u,A),z===null?B=j:z.sibling=j,z=j);return Q&&rr(g,A),B}for(j=e(j);A<v.length;A++)N=x(j,g,A,v[A],L),N!==null&&(t&&N.alternate!==null&&j.delete(N.key===null?A:N.key),u=n(N,u,A),z===null?B=N:z.sibling=N,z=N);return t&&j.forEach(function(ut){return a(g,ut)}),Q&&rr(g,A),B}function b(g,u,v,L){if(v==null)throw Error(m(151));for(var B=null,z=null,j=u,A=u=0,N=null,O=v.next();j!==null&&!O.done;A++,O=v.next()){j.index>A?(N=j,j=null):N=j.sibling;var ut=p(g,j,O.value,L);if(ut===null){j===null&&(j=N);break}t&&j&&ut.alternate===null&&a(g,j),u=n(ut,u,A),z===null?B=ut:z.sibling=ut,z=ut,j=N}if(O.done)return r(g,j),Q&&rr(g,A),B;if(j===null){for(;!O.done;A++,O=v.next())O=k(g,O.value,L),O!==null&&(u=n(O,u,A),z===null?B=O:z.sibling=O,z=O);return Q&&rr(g,A),B}for(j=e(j);!O.done;A++,O=v.next())O=x(j,g,A,O.value,L),O!==null&&(t&&O.alternate!==null&&j.delete(O.key===null?A:O.key),u=n(O,u,A),z===null?B=O:z.sibling=O,z=O);return t&&j.forEach(function(ia){return a(g,ia)}),Q&&rr(g,A),B}function D(g,u,v,L){if(typeof v=="object"&&v!==null&&v.type===Oe&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case lo:t:{for(var B=v.key;u!==null;){if(u.key===B){if(B=v.type,B===Oe){if(u.tag===7){r(g,u.sibling),L=i(u,v.props.children),L.return=g,g=L;break t}}else if(u.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Lr&&re(B)===u.type){r(g,u.sibling),L=i(u,v.props),Xi(L,v),L.return=g,g=L;break t}r(g,u);break}else a(g,u);u=u.sibling}v.type===Oe?(L=ne(v.props.children,g.mode,L,v.key),L.return=g,g=L):(L=So(v.type,v.key,v.props,null,g.mode,L),Xi(L,v),L.return=g,g=L)}return o(g);case Fi:t:{for(B=v.key;u!==null;){if(u.key===B)if(u.tag===4&&u.stateNode.containerInfo===v.containerInfo&&u.stateNode.implementation===v.implementation){r(g,u.sibling),L=i(u,v.children||[]),L.return=g,g=L;break t}else{r(g,u);break}else a(g,u);u=u.sibling}L=V2(v,g.mode,L),L.return=g,g=L}return o(g);case Lr:return v=re(v),D(g,u,v,L)}if($i(v))return y(g,u,v,L);if(Gi(v)){if(B=Gi(v),typeof B!="function")throw Error(m(150));return v=B.call(v),b(g,u,v,L)}if(typeof v.then=="function")return D(g,u,ko(v),L);if(v.$$typeof===ir)return D(g,u,vo(g,v),L);xo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,u!==null&&u.tag===6?(r(g,u.sibling),L=i(u,v),L.return=g,g=L):(r(g,u),L=A2(v,g.mode,L),L.return=g,g=L),o(g)):r(g,u)}return function(g,u,v,L){try{mn=0;var B=D(g,u,v,L);return ai=null,B}catch(j){if(j===xi||j===yl)throw j;var z=ca(29,j,null,g.mode);return z.lanes=L,z.return=g,z}}}var ue=ou(!0),lu=ou(!1),Mr=!1;function pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function m1(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Vr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function zr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(R&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=Ko(t),Ih(t,null,r),a}return ml(t,e,a,r),Ko(t)}function on(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,bh(t,r)}}function _2(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var y1=!1;function ln(){if(y1){var t=ti;if(t!==null)throw t}}function dn(t,a,r,e){y1=!1;var i=t.updateQueue;Mr=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var h=d,s=h.next;h.next=null,o===null?n=s:o.next=s,o=h;var f=t.alternate;f!==null&&(f=f.updateQueue,d=f.lastBaseUpdate,d!==o&&(d===null?f.firstBaseUpdate=s:d.next=s,f.lastBaseUpdate=h))}if(n!==null){var k=i.baseState;o=0,f=s=h=null,d=n;do{var p=d.lane&-536870913,x=p!==d.lane;if(x?(G&p)===p:(e&p)===p){p!==0&&p===li&&(y1=!0),f!==null&&(f=f.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var y=t,b=d;p=a;var D=r;switch(b.tag){case 1:if(y=b.payload,typeof y=="function"){k=y.call(D,k,p);break t}k=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,p=typeof y=="function"?y.call(D,k,p):y,p==null)break t;k=ht({},k,p);break t;case 2:Mr=!0}}p=d.callback,p!==null&&(t.flags|=64,x&&(t.flags|=8192),x=i.callbacks,x===null?i.callbacks=[p]:x.push(p))}else x={lane:p,tag:d.tag,payload:d.payload,callback:d.callback,next:null},f===null?(s=f=x,h=k):f=f.next=x,o|=p;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;x=d,d=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);f===null&&(h=k),i.baseState=h,i.firstBaseUpdate=s,i.lastBaseUpdate=f,n===null&&(i.shared.lanes=0),qr|=o,t.lanes=o,t.memoizedState=k}}function du(t,a){if(typeof t!="function")throw Error(m(191,t));t.call(a)}function cu(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)du(r[t],a)}var di=Xa(null),$o=Xa(0);function x0(t,a){t=pr,ot($o,t),ot(di,a),pr=t|a.baseLanes}function w1(){ot($o,pr),ot(di,di.current)}function fd(){pr=$o.current,zt(di),zt($o)}var va=Xa(null),Wa=null;function yr(t){var a=t.alternate;ot(kt,kt.current&1),ot(va,t),Wa===null&&(a===null||di.current!==null||a.memoizedState!==null)&&(Wa=t)}function C1(t){ot(kt,kt.current),ot(va,t),Wa===null&&(Wa=t)}function hu(t){t.tag===22?(ot(kt,kt.current),ot(va,t),Wa===null&&(Wa=t)):wr(t)}function wr(){ot(kt,kt.current),ot(va,va.current)}function da(t){zt(va),Wa===t&&(Wa=null),zt(kt)}var kt=Xa(0);function Io(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||G1(r)||Y1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ur=0,E=null,it=null,yt=null,Po=!1,ri=!1,se=!1,tl=0,yn=0,ei=null,G5=0;function ft(){throw Error(m(321))}function vd(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!fa(t[r],a[r]))return!1;return!0}function kd(t,a,r,e,i,n){return ur=n,E=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,V.H=t===null||t.memoizedState===null?Zu:Wd,se=!1,n=r(e,i),se=!1,ri&&(n=su(a,r,e,i)),uu(t),n}function uu(t){V.H=wn;var a=it!==null&&it.next!==null;if(ur=0,yt=it=E=null,Po=!1,yn=0,ei=null,a)throw Error(m(300));t===null||bt||(t=t.dependencies,t!==null&&Ro(t)&&(bt=!0))}function su(t,a,r,e){E=t;var i=0;do{if(ri&&(ei=null),yn=0,ri=!1,25<=i)throw Error(m(301));if(i+=1,yt=it=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}V.H=qu,n=a(r,e)}while(ri);return n}function Y5(){var t=V.H,a=t.useState()[0];return a=typeof a.then=="function"?Nn(a):a,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(E.flags|=1024),a}function xd(){var t=tl!==0;return tl=0,t}function Ld(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function Md(t){if(Po){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Po=!1}ur=0,yt=it=E=null,ri=!1,yn=tl=0,ei=null}function Ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?E.memoizedState=yt=t:yt=yt.next=t,yt}function xt(){if(it===null){var t=E.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var a=yt===null?E.memoizedState:yt.next;if(a!==null)yt=a,it=t;else{if(t===null)throw E.alternate===null?Error(m(467)):Error(m(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},yt===null?E.memoizedState=yt=t:yt=yt.next=t}return yt}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Nn(t){var a=yn;return yn+=1,ei===null&&(ei=[]),t=nu(ei,t,a),a=E,(yt===null?a.memoizedState:yt.next)===null&&(a=a.alternate,V.H=a===null||a.memoizedState===null?Zu:Wd),t}function Cl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Nn(t);if(t.$$typeof===ir)return Zt(t)}throw Error(m(438,String(t)))}function md(t){var a=null,r=E.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=E.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=wl(),E.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=Hp;return a.index++,r}function sr(t,a){return typeof a=="function"?a(t):a}function Vo(t){var a=xt();return yd(a,it,t)}function yd(t,a,r){var e=t.queue;if(e===null)throw Error(m(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var d=o=null,h=null,s=a,f=!1;do{var k=s.lane&-536870913;if(k!==s.lane?(G&k)===k:(ur&k)===k){var p=s.revertLane;if(p===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),k===li&&(f=!0);else if((ur&p)===p){s=s.next,p===li&&(f=!0);continue}else k={lane:0,revertLane:s.revertLane,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},h===null?(d=h=k,o=n):h=h.next=k,E.lanes|=p,qr|=p;k=s.action,se&&r(n,k),n=s.hasEagerState?s.eagerState:r(n,k)}else p={lane:k,revertLane:s.revertLane,gesture:s.gesture,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},h===null?(d=h=p,o=n):h=h.next=p,E.lanes|=k,qr|=k;s=s.next}while(s!==null&&s!==a);if(h===null?o=n:h.next=d,!fa(n,t.memoizedState)&&(bt=!0,f&&(r=ti,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=h,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function T2(t){var a=xt(),r=a.queue;if(r===null)throw Error(m(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);fa(n,a.memoizedState)||(bt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function gu(t,a,r){var e=E,i=xt(),n=Q;if(n){if(r===void 0)throw Error(m(407));r=r()}else r=a();var o=!fa((it||i).memoizedState,r);if(o&&(i.memoizedState=r,bt=!0),i=i.queue,wd(vu.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||yt!==null&&yt.memoizedState.tag&1){if(e.flags|=2048,ci(9,{destroy:void 0},fu.bind(null,e,i,r,a),null),nt===null)throw Error(m(349));n||(ur&127)!==0||pu(e,a,r)}return r}function pu(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=E.updateQueue,a===null?(a=wl(),E.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function fu(t,a,r,e){a.value=r,a.getSnapshot=e,ku(a)&&xu(t)}function vu(t,a,r){return r(function(){ku(a)&&xu(t)})}function ku(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!fa(t,r)}catch{return!0}}function xu(t){var a=ke(t,2);a!==null&&aa(a,t,2)}function b1(t){var a=Ft();if(typeof t=="function"){var r=t;if(t=r(),se){br(!0);try{r()}finally{br(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:t},a}function Lu(t,a,r,e){return t.baseState=r,yd(t,it,typeof e=="function"?e:sr)}function X5(t,a,r,e,i){if(Bl(t))throw Error(m(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};V.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,Mu(a,n)):(n.next=r.next,a.pending=r.next=n)}}function Mu(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=V.T,o={};V.T=o;try{var d=r(i,e),h=V.S;h!==null&&h(o,d),L0(t,a,d)}catch(s){B1(t,a,s)}finally{n!==null&&o.types!==null&&(n.types=o.types),V.T=n}}else try{n=r(i,e),L0(t,a,n)}catch(s){B1(t,a,s)}}function L0(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){M0(t,a,e)},function(e){return B1(t,a,e)}):M0(t,a,r)}function M0(t,a,r){a.status="fulfilled",a.value=r,mu(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,Mu(t,r)))}function B1(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,mu(a),a=a.next;while(a!==e)}t.action=null}function mu(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function yu(t,a){return a}function m0(t,a){if(Q){var r=nt.formState;if(r!==null){t:{var e=E;if(Q){if(ct){a:{for(var i=ct,n=ja;i.nodeType!==8;){if(!n){i=null;break a}if(i=Ha(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){ct=Ha(i.nextSibling),e=i.data==="F!";break t}}Ur(e)}e=!1}e&&(a=r[0])}}return r=Ft(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yu,lastRenderedState:a},r.queue=e,r=Du.bind(null,E,e),e.dispatch=r,e=b1(!1),n=jd.bind(null,E,!1,e.queue),e=Ft(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=X5.bind(null,E,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function y0(t){var a=xt();return wu(a,it,t)}function wu(t,a,r){if(a=yd(t,a,yu)[0],t=Vo(sr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=Nn(a)}catch(o){throw o===xi?yl:o}else e=a;a=xt();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(E.flags|=2048,ci(9,{destroy:void 0},Q5.bind(null,i,r),null)),[e,n,t]}function Q5(t,a){t.action=a}function w0(t){var a=xt(),r=it;if(r!==null)return wu(a,r,t);xt(),a=a.memoizedState,r=xt();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function ci(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=E.updateQueue,a===null&&(a=wl(),E.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function Cu(){return xt().memoizedState}function zo(t,a,r,e){var i=Ft();E.flags|=t,i.memoizedState=ci(1|a,{destroy:void 0},r,e===void 0?null:e)}function bl(t,a,r,e){var i=xt();e=e===void 0?null:e;var n=i.memoizedState.inst;it!==null&&e!==null&&vd(e,it.memoizedState.deps)?i.memoizedState=ci(a,n,r,e):(E.flags|=t,i.memoizedState=ci(1|a,n,r,e))}function C0(t,a){zo(8390656,8,t,a)}function wd(t,a){bl(2048,8,t,a)}function K5(t){E.flags|=4;var a=E.updateQueue;if(a===null)a=wl(),E.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function bu(t){var a=xt().memoizedState;return K5({ref:a,nextImpl:t}),function(){if((R&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}function Bu(t,a){return bl(4,2,t,a)}function ju(t,a){return bl(4,4,t,a)}function Wu(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Hu(t,a,r){r=r!=null?r.concat([t]):null,bl(4,4,Wu.bind(null,a,t),r)}function Cd(){}function Su(t,a){var r=xt();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&vd(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function Au(t,a){var r=xt();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&vd(a,e[1]))return e[0];if(e=t(),se){br(!0);try{t()}finally{br(!1)}}return r.memoizedState=[e,a],e}function bd(t,a,r){return r===void 0||(ur&1073741824)!==0&&(G&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=Ls(),E.lanes|=t,qr|=t,r)}function Vu(t,a,r,e){return fa(r,a)?r:di.current!==null?(t=bd(t,r,e),fa(t,a)||(bt=!0),t):(ur&42)===0||(ur&1073741824)!==0&&(G&261930)===0?(bt=!0,t.memoizedState=r):(t=Ls(),E.lanes|=t,qr|=t,a)}function zu(t,a,r,e,i){var n=F.p;F.p=n!==0&&8>n?n:8;var o=V.T,d={};V.T=d,jd(t,!1,a,r);try{var h=i(),s=V.S;if(s!==null&&s(d,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var f=q5(h,e);cn(t,a,f,pa(t))}else cn(t,a,e,pa(t))}catch(k){cn(t,a,{then:function(){},status:"rejected",reason:k},pa())}finally{F.p=n,o!==null&&d.types!==null&&(o.types=d.types),V.T=o}}function J5(){}function j1(t,a,r,e){if(t.tag!==5)throw Error(m(476));var i=_u(t).queue;zu(t,i,a,ie,r===null?J5:function(){return Tu(t),r(e)})}function _u(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:ie},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Tu(t){var a=_u(t);a.next===null&&(a=t.alternate.memoizedState),cn(t,a.next.queue,{},pa())}function Bd(){return Zt(Bn)}function Nu(){return xt().memoizedState}function Eu(){return xt().memoizedState}function R5(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=pa();t=Vr(r);var e=zr(a,t,r);e!==null&&(aa(e,a,r),on(e,a,r)),a={cache:ud()},t.payload=a;return}a=a.return}}function F5(t,a,r){var e=pa();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bl(t)?Ou(a,r):(r=ld(t,a,r,e),r!==null&&(aa(r,t,e),Uu(r,a,e)))}function Du(t,a,r){var e=pa();cn(t,a,r,e)}function cn(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bl(t))Ou(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,d=n(o,r);if(i.hasEagerState=!0,i.eagerState=d,fa(d,o))return ml(t,a,i,0),nt===null&&Ml(),!1}catch{}if(r=ld(t,a,i,e),r!==null)return aa(r,t,e),Uu(r,a,e),!0}return!1}function jd(t,a,r,e){if(e={lane:2,revertLane:Nd(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Bl(t)){if(a)throw Error(m(479))}else a=ld(t,r,e,2),a!==null&&aa(a,t,2)}function Bl(t){var a=t.alternate;return t===E||a!==null&&a===E}function Ou(t,a){ri=Po=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function Uu(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,bh(t,r)}}var wn={readContext:Zt,use:Cl,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useInsertionEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useSyncExternalStore:ft,useId:ft,useHostTransitionStatus:ft,useFormState:ft,useActionState:ft,useOptimistic:ft,useMemoCache:ft,useCacheRefresh:ft};wn.useEffectEvent=ft;var Zu={readContext:Zt,use:Cl,useCallback:function(t,a){return Ft().memoizedState=[t,a===void 0?null:a],t},useContext:Zt,useEffect:C0,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,zo(4194308,4,Wu.bind(null,a,t),r)},useLayoutEffect:function(t,a){return zo(4194308,4,t,a)},useInsertionEffect:function(t,a){zo(4,2,t,a)},useMemo:function(t,a){var r=Ft();a=a===void 0?null:a;var e=t();if(se){br(!0);try{t()}finally{br(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=Ft();if(r!==void 0){var i=r(a);if(se){br(!0);try{r(a)}finally{br(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=F5.bind(null,E,t),[e.memoizedState,t]},useRef:function(t){var a=Ft();return t={current:t},a.memoizedState=t},useState:function(t){t=b1(t);var a=t.queue,r=Du.bind(null,E,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:Cd,useDeferredValue:function(t,a){var r=Ft();return bd(r,t,a)},useTransition:function(){var t=b1(!1);return t=zu.bind(null,E,t.queue,!0,!1),Ft().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=E,i=Ft();if(Q){if(r===void 0)throw Error(m(407));r=r()}else{if(r=a(),nt===null)throw Error(m(349));(G&127)!==0||pu(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,C0(vu.bind(null,e,n,t),[t]),e.flags|=2048,ci(9,{destroy:void 0},fu.bind(null,e,n,r,a),null),r},useId:function(){var t=Ft(),a=nt.identifierPrefix;if(Q){var r=qa,e=Za;r=(e&~(1<<32-ga(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=tl++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=G5++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:Bd,useFormState:m0,useActionState:m0,useOptimistic:function(t){var a=Ft();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=jd.bind(null,E,!0,r),r.dispatch=a,[t,a]},useMemoCache:md,useCacheRefresh:function(){return Ft().memoizedState=R5.bind(null,E)},useEffectEvent:function(t){var a=Ft(),r={impl:t};return a.memoizedState=r,function(){if((R&2)!==0)throw Error(m(440));return r.impl.apply(void 0,arguments)}}},Wd={readContext:Zt,use:Cl,useCallback:Su,useContext:Zt,useEffect:wd,useImperativeHandle:Hu,useInsertionEffect:Bu,useLayoutEffect:ju,useMemo:Au,useReducer:Vo,useRef:Cu,useState:function(){return Vo(sr)},useDebugValue:Cd,useDeferredValue:function(t,a){var r=xt();return Vu(r,it.memoizedState,t,a)},useTransition:function(){var t=Vo(sr)[0],a=xt().memoizedState;return[typeof t=="boolean"?t:Nn(t),a]},useSyncExternalStore:gu,useId:Nu,useHostTransitionStatus:Bd,useFormState:y0,useActionState:y0,useOptimistic:function(t,a){var r=xt();return Lu(r,it,t,a)},useMemoCache:md,useCacheRefresh:Eu};Wd.useEffectEvent=bu;var qu={readContext:Zt,use:Cl,useCallback:Su,useContext:Zt,useEffect:wd,useImperativeHandle:Hu,useInsertionEffect:Bu,useLayoutEffect:ju,useMemo:Au,useReducer:T2,useRef:Cu,useState:function(){return T2(sr)},useDebugValue:Cd,useDeferredValue:function(t,a){var r=xt();return it===null?bd(r,t,a):Vu(r,it.memoizedState,t,a)},useTransition:function(){var t=T2(sr)[0],a=xt().memoizedState;return[typeof t=="boolean"?t:Nn(t),a]},useSyncExternalStore:gu,useId:Nu,useHostTransitionStatus:Bd,useFormState:w0,useActionState:w0,useOptimistic:function(t,a){var r=xt();return it!==null?Lu(r,it,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:md,useCacheRefresh:Eu};qu.useEffectEvent=bu;function N2(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:ht({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var W1={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=pa(),i=Vr(e);i.payload=a,r!=null&&(i.callback=r),a=zr(t,i,e),a!==null&&(aa(a,t,e),on(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=pa(),i=Vr(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=zr(t,i,e),a!==null&&(aa(a,t,e),on(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=pa(),e=Vr(r);e.tag=2,a!=null&&(e.callback=a),a=zr(t,e,r),a!==null&&(aa(a,t,r),on(a,t,r))}};function b0(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!xn(r,e)||!xn(i,n):!0}function B0(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&W1.enqueueReplaceState(a,a.state,null)}function ge(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=ht({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function Gu(t){Qo(t)}function Yu(t){console.error(t)}function Xu(t){Qo(t)}function al(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function j0(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function H1(t,a,r){return r=Vr(r),r.tag=3,r.payload={element:null},r.callback=function(){al(t,a)},r}function Qu(t){return t=Vr(t),t.tag=3,t}function Ku(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){j0(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){j0(a,r,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var d=e.stack;this.componentDidCatch(e.value,{componentStack:d!==null?d:""})})}function $5(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&ki(a,r,i,!0),r=va.current,r!==null){switch(r.tag){case 31:case 13:return Wa===null?ol():r.alternate===null&&vt===0&&(vt=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===Fo?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),K2(t,e,i)),!1;case 22:return r.flags|=65536,e===Fo?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),K2(t,e,i)),!1}throw Error(m(435,r.tag))}return K2(t,e,i),ol(),!1}if(Q)return a=va.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==v1&&(t=Error(m(422),{cause:e}),Mn(Ba(t,r)))):(e!==v1&&(a=Error(m(423),{cause:e}),Mn(Ba(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=Ba(e,r),i=H1(t.stateNode,e,i),_2(t,i),vt!==4&&(vt=2)),!1;var n=Error(m(520),{cause:e});if(n=Ba(n,r),sn===null?sn=[n]:sn.push(n),vt!==4&&(vt=2),a===null)return!0;e=Ba(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=H1(r.stateNode,e,t),_2(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(_r===null||!_r.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=Qu(i),Ku(i,t,r,e),_2(r,i),!1}r=r.return}while(r!==null);return!1}var Hd=Error(m(461)),bt=!1;function Dt(t,a,r,e){a.child=t===null?lu(a,null,r,e):ue(a,t.child,r,e)}function W0(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var d in e)d!=="ref"&&(o[d]=e[d])}else o=e;return he(a),e=kd(t,a,r,o,n,i),d=xd(),t!==null&&!bt?(Ld(t,a,i),gr(t,a,i)):(Q&&d&&cd(a),a.flags|=1,Dt(t,a,e,i),a.child)}function H0(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!dd(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,Ju(t,a,n,e,i)):(t=So(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!Sd(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:xn,r(o,e)&&t.ref===a.ref)return gr(t,a,i)}return a.flags|=1,t=lr(n,e),t.ref=a.ref,t.return=a,a.child=t}function Ju(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(xn(n,e)&&t.ref===a.ref)if(bt=!1,a.pendingProps=e=n,Sd(t,i))(t.flags&131072)!==0&&(bt=!0);else return a.lanes=t.lanes,gr(t,a,i)}return S1(t,a,r,e,i)}function Ru(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return S0(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ao(a,n!==null?n.cachePool:null),n!==null?x0(a,n):w1(),hu(a);else return e=a.lanes=536870912,S0(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(Ao(a,n.cachePool),x0(a,n),wr(a),a.memoizedState=null):(t!==null&&Ao(a,null),w1(),wr(a));return Dt(t,a,i,r),a.child}function Pi(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function S0(t,a,r,e,i){var n=sd();return n=n===null?null:{parent:Ct._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&Ao(a,null),w1(),hu(a),t!==null&&ki(t,a,e,!0),a.childLanes=i,null}function _o(t,a){return a=rl({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function A0(t,a,r){return ue(a,t.child,null,r),t=_o(a,a.pendingProps),t.flags|=2,da(a),a.memoizedState=null,t}function I5(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(Q){if(e.mode==="hidden")return t=_o(a,e),a.lanes=536870912,Pi(null,t);if(C1(a),(t=ct)?(t=Zs(t,ja),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Or!==null?{id:Za,overflow:qa}:null,retryLane:536870912,hydrationErrors:null},r=tu(t),r.return=a,a.child=r,Ut=a,ct=null)):t=null,t===null)throw Ur(a);return a.lanes=536870912,null}return _o(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(C1(a),i)if(a.flags&256)a.flags&=-257,a=A0(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(m(558));else if(bt||ki(t,a,r,!1),i=(r&t.childLanes)!==0,bt||i){if(e=nt,e!==null&&(o=Bh(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,ke(t,o),aa(e,t,o),Hd;ol(),a=A0(t,a,r)}else t=n.treeContext,ct=Ha(o.nextSibling),Ut=a,Q=!0,Ar=null,ja=!1,t!==null&&ru(a,t),a=_o(a,e),a.flags|=4096;return a}return t=lr(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function To(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(m(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function S1(t,a,r,e,i){return he(a),r=kd(t,a,r,e,void 0,i),e=xd(),t!==null&&!bt?(Ld(t,a,i),gr(t,a,i)):(Q&&e&&cd(a),a.flags|=1,Dt(t,a,r,i),a.child)}function V0(t,a,r,e,i,n){return he(a),a.updateQueue=null,r=su(a,e,r,i),uu(t),e=xd(),t!==null&&!bt?(Ld(t,a,n),gr(t,a,n)):(Q&&e&&cd(a),a.flags|=1,Dt(t,a,r,n),a.child)}function z0(t,a,r,e,i){if(he(a),a.stateNode===null){var n=Ke,o=r.contextType;typeof o=="object"&&o!==null&&(n=Zt(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=W1,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},pd(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?Zt(o):Ke,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(N2(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&W1.enqueueReplaceState(n,n.state,null),dn(a,e,n,i),ln(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var d=a.memoizedProps,h=ge(r,d);n.props=h;var s=n.context,f=r.contextType;o=Ke,typeof f=="object"&&f!==null&&(o=Zt(f));var k=r.getDerivedStateFromProps;f=typeof k=="function"||typeof n.getSnapshotBeforeUpdate=="function",d=a.pendingProps!==d,f||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(d||s!==o)&&B0(a,n,e,o),Mr=!1;var p=a.memoizedState;n.state=p,dn(a,e,n,i),ln(),s=a.memoizedState,d||p!==s||Mr?(typeof k=="function"&&(N2(a,r,k,e),s=a.memoizedState),(h=Mr||b0(a,r,h,e,p,s,o))?(f||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=s),n.props=e,n.state=s,n.context=o,e=h):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,m1(t,a),o=a.memoizedProps,f=ge(r,o),n.props=f,k=a.pendingProps,p=n.context,s=r.contextType,h=Ke,typeof s=="object"&&s!==null&&(h=Zt(s)),d=r.getDerivedStateFromProps,(s=typeof d=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==k||p!==h)&&B0(a,n,e,h),Mr=!1,p=a.memoizedState,n.state=p,dn(a,e,n,i),ln();var x=a.memoizedState;o!==k||p!==x||Mr||t!==null&&t.dependencies!==null&&Ro(t.dependencies)?(typeof d=="function"&&(N2(a,r,d,e),x=a.memoizedState),(f=Mr||b0(a,r,f,e,p,x,h)||t!==null&&t.dependencies!==null&&Ro(t.dependencies))?(s||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,x,h),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,x,h)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=x),n.props=e,n.state=x,n.context=h,e=f):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,To(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=ue(a,t.child,null,i),a.child=ue(a,null,r,i)):Dt(t,a,r,i),a.memoizedState=n.state,t=a.child):t=gr(t,a,i),t}function _0(t,a,r,e){return ce(),a.flags|=256,Dt(t,a,r,e),a.child}var E2={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function D2(t){return{baseLanes:t,cachePool:iu()}}function O2(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=ha),t}function Fu(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(kt.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(Q){if(i?yr(a):wr(a),(t=ct)?(t=Zs(t,ja),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Or!==null?{id:Za,overflow:qa}:null,retryLane:536870912,hydrationErrors:null},r=tu(t),r.return=a,a.child=r,Ut=a,ct=null)):t=null,t===null)throw Ur(a);return Y1(t)?a.lanes=32:a.lanes=536870912,null}var d=e.children;return e=e.fallback,i?(wr(a),i=a.mode,d=rl({mode:"hidden",children:d},i),e=ne(e,i,r,null),d.return=a,e.return=a,d.sibling=e,a.child=d,e=a.child,e.memoizedState=D2(r),e.childLanes=O2(t,o,r),a.memoizedState=E2,Pi(null,e)):(yr(a),A1(a,d))}var h=t.memoizedState;if(h!==null&&(d=h.dehydrated,d!==null)){if(n)a.flags&256?(yr(a),a.flags&=-257,a=U2(t,a,r)):a.memoizedState!==null?(wr(a),a.child=t.child,a.flags|=128,a=null):(wr(a),d=e.fallback,i=a.mode,e=rl({mode:"visible",children:e.children},i),d=ne(d,i,r,null),d.flags|=2,e.return=a,d.return=a,e.sibling=d,a.child=e,ue(a,t.child,null,r),e=a.child,e.memoizedState=D2(r),e.childLanes=O2(t,o,r),a.memoizedState=E2,a=Pi(null,e));else if(yr(a),Y1(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var s=o.dgst;o=s,e=Error(m(419)),e.stack="",e.digest=o,Mn({value:e,source:null,stack:null}),a=U2(t,a,r)}else if(bt||ki(t,a,r,!1),o=(r&t.childLanes)!==0,bt||o){if(o=nt,o!==null&&(e=Bh(o,r),e!==0&&e!==h.retryLane))throw h.retryLane=e,ke(t,e),aa(o,t,e),Hd;G1(d)||ol(),a=U2(t,a,r)}else G1(d)?(a.flags|=192,a.child=t.child,a=null):(t=h.treeContext,ct=Ha(d.nextSibling),Ut=a,Q=!0,Ar=null,ja=!1,t!==null&&ru(a,t),a=A1(a,e.children),a.flags|=4096);return a}return i?(wr(a),d=e.fallback,i=a.mode,h=t.child,s=h.sibling,e=lr(h,{mode:"hidden",children:e.children}),e.subtreeFlags=h.subtreeFlags&65011712,s!==null?d=lr(s,d):(d=ne(d,i,r,null),d.flags|=2),d.return=a,e.return=a,e.sibling=d,a.child=e,Pi(null,e),e=a.child,d=t.child.memoizedState,d===null?d=D2(r):(i=d.cachePool,i!==null?(h=Ct._currentValue,i=i.parent!==h?{parent:h,pool:h}:i):i=iu(),d={baseLanes:d.baseLanes|r,cachePool:i}),e.memoizedState=d,e.childLanes=O2(t,o,r),a.memoizedState=E2,Pi(t.child,e)):(yr(a),r=t.child,t=r.sibling,r=lr(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function A1(t,a){return a=rl({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function rl(t,a){return t=ca(22,t,null,a),t.lanes=0,t}function U2(t,a,r){return ue(a,t.child,null,r),t=A1(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function T0(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),x1(t.return,a,r)}function Z2(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function $u(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=kt.current,d=(o&2)!==0;if(d?(o=o&1|2,a.flags|=128):o&=1,ot(kt,o),Dt(t,a,e,r),e=Q?Ln:0,!d&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,r,a);else if(t.tag===19)T0(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&Io(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),Z2(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&Io(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Z2(a,!0,r,null,n,e);break;case"together":Z2(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function gr(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),qr|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(ki(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(m(153));if(a.child!==null){for(t=a.child,r=lr(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=lr(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function Sd(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Ro(t)))}function P5(t,a,r){switch(a.tag){case 3:qo(a,a.stateNode.containerInfo),mr(a,Ct,t.memoizedState.cache),ce();break;case 27:case 5:n1(a);break;case 4:qo(a,a.stateNode.containerInfo);break;case 10:mr(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,C1(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(yr(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Fu(t,a,r):(yr(a),t=gr(t,a,r),t!==null?t.sibling:null);yr(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||(ki(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return $u(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ot(kt,kt.current),e)break;return null;case 22:return a.lanes=0,Ru(t,a,r,a.pendingProps);case 24:mr(a,Ct,t.memoizedState.cache)}return gr(t,a,r)}function Iu(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)bt=!0;else{if(!Sd(t,r)&&(a.flags&128)===0)return bt=!1,P5(t,a,r);bt=(t.flags&131072)!==0}else bt=!1,Q&&(a.flags&1048576)!==0&&au(a,Ln,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=re(a.elementType),a.type=t,typeof t=="function")dd(t)?(e=ge(t,e),a.tag=1,a=z0(null,a,t,e,r)):(a.tag=0,a=S1(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===J1){a.tag=11,a=W0(null,a,t,e,r);break t}else if(i===R1){a.tag=14,a=H0(null,a,t,e,r);break t}}throw a=e1(t)||t,Error(m(306,a,""))}}return a;case 0:return S1(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=ge(e,a.pendingProps),z0(t,a,e,i,r);case 3:t:{if(qo(a,a.stateNode.containerInfo),t===null)throw Error(m(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,m1(t,a),dn(a,e,null,r);var o=a.memoizedState;if(e=o.cache,mr(a,Ct,e),e!==n.cache&&L1(a,[Ct],r,!0),ln(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=_0(t,a,e,r);break t}else if(e!==i){i=Ba(Error(m(424)),a),Mn(i),a=_0(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ct=Ha(t.firstChild),Ut=a,Q=!0,Ar=null,ja=!0,r=lu(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ce(),e===i){a=gr(t,a,r);break t}Dt(t,a,e,r)}a=a.child}return a;case 26:return To(t,a),t===null?(r=eh(a.type,null,a.pendingProps,null))?a.memoizedState=r:Q||(r=a.type,t=a.pendingProps,e=hl(Sr.current).createElement(r),e[Ot]=a,e[ra]=t,qt(e,r,t),Vt(e),a.stateNode=e):a.memoizedState=eh(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return n1(a),t===null&&Q&&(e=a.stateNode=qs(a.type,a.pendingProps,Sr.current),Ut=a,ja=!0,i=ct,Yr(a.type)?(X1=i,ct=Ha(e.firstChild)):ct=i),Dt(t,a,a.pendingProps.children,r),To(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Q&&((i=e=ct)&&(e=Wf(e,a.type,a.pendingProps,ja),e!==null?(a.stateNode=e,Ut=a,ct=Ha(e.firstChild),ja=!1,i=!0):i=!1),i||Ur(a)),n1(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,Z1(i,n)?e=null:o!==null&&Z1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=kd(t,a,Y5,null,null,r),Bn._currentValue=i),To(t,a),Dt(t,a,e,r),a.child;case 6:return t===null&&Q&&((t=r=ct)&&(r=Hf(r,a.pendingProps,ja),r!==null?(a.stateNode=r,Ut=a,ct=null,t=!0):t=!1),t||Ur(a)),null;case 13:return Fu(t,a,r);case 4:return qo(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=ue(a,null,e,r):Dt(t,a,e,r),a.child;case 11:return W0(t,a,a.type,a.pendingProps,r);case 7:return Dt(t,a,a.pendingProps,r),a.child;case 8:return Dt(t,a,a.pendingProps.children,r),a.child;case 12:return Dt(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,mr(a,a.type,e.value),Dt(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,he(a),i=Zt(i),e=e(i),a.flags|=1,Dt(t,a,e,r),a.child;case 14:return H0(t,a,a.type,a.pendingProps,r);case 15:return Ju(t,a,a.type,a.pendingProps,r);case 19:return $u(t,a,r);case 31:return I5(t,a,r);case 22:return Ru(t,a,r,a.pendingProps);case 24:return he(a),e=Zt(Ct),t===null?(i=sd(),i===null&&(i=nt,n=ud(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},pd(a),mr(a,Ct,i)):((t.lanes&r)!==0&&(m1(t,a),dn(a,null,null,r),ln()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),mr(a,Ct,e)):(e=n.cache,mr(a,Ct,e),e!==i.cache&&L1(a,[Ct],r,!0))),Dt(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(m(156,a.tag))}function Ia(t){t.flags|=4}function q2(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(ys())t.flags|=8192;else throw le=Fo,gd}else t.flags&=-16777217}function N0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Xs(a))if(ys())t.flags|=8192;else throw le=Fo,gd}function Lo(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?wh():536870912,t.lanes|=a,hi|=a)}function Qi(t,a){if(!Q)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function dt(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function tf(t,a,r){var e=a.pendingProps;switch(hd(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(a),null;case 1:return dt(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),dr(Ct),ii(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Te(a)?Ia(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,z2())),dt(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(Ia(a),n!==null?(dt(a),N0(a,n)):(dt(a),q2(a,i,null,e,r))):n?n!==t.memoizedState?(Ia(a),dt(a),N0(a,n)):(dt(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&Ia(a),dt(a),q2(a,i,t,e,r)),null;case 27:if(Go(a),r=Sr.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ia(a);else{if(!e){if(a.stateNode===null)throw Error(m(166));return dt(a),null}t=Ya.current,Te(a)?u0(a,t):(t=qs(i,e,r),a.stateNode=t,Ia(a))}return dt(a),null;case 5:if(Go(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ia(a);else{if(!e){if(a.stateNode===null)throw Error(m(166));return dt(a),null}if(n=Ya.current,Te(a))u0(a,n);else{var o=hl(Sr.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[Ot]=a,n[ra]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(qt(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ia(a)}}return dt(a),q2(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&Ia(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(m(166));if(t=Sr.current,Te(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=Ut,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[Ot]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||Ds(t.nodeValue,r)),t||Ur(a,!0)}else t=hl(t).createTextNode(e),t[Ot]=a,a.stateNode=t}return dt(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=Te(a),r!==null){if(t===null){if(!e)throw Error(m(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[Ot]=a}else ce(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;dt(a),t=!1}else r=z2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?(da(a),a):(da(a),null);if((a.flags&128)!==0)throw Error(m(558))}return dt(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Te(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(m(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[Ot]=a}else ce(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;dt(a),i=!1}else i=z2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(da(a),a):(da(a),null)}return da(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),Lo(a,a.updateQueue),dt(a),null);case 4:return ii(),t===null&&Ed(a.stateNode.containerInfo),dt(a),null;case 10:return dr(a.type),dt(a),null;case 19:if(zt(kt),e=a.memoizedState,e===null)return dt(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)Qi(e,!1);else{if(vt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=Io(t),n!==null){for(a.flags|=128,Qi(e,!1),t=n.updateQueue,a.updateQueue=t,Lo(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)Ph(r,t),r=r.sibling;return ot(kt,kt.current&1|2),Q&&rr(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&ua()>il&&(a.flags|=128,i=!0,Qi(e,!1),a.lanes=4194304)}else{if(!i)if(t=Io(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,Lo(a,t),Qi(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!Q)return dt(a),null}else 2*ua()-e.renderingStartTime>il&&r!==536870912&&(a.flags|=128,i=!0,Qi(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=ua(),t.sibling=null,r=kt.current,ot(kt,i?r&1|2:r&1),Q&&rr(a,e.treeForkCount),t):(dt(a),null);case 22:case 23:return da(a),fd(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(dt(a),a.subtreeFlags&6&&(a.flags|=8192)):dt(a),r=a.updateQueue,r!==null&&Lo(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&zt(oe),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),dr(Ct),dt(a),null;case 25:return null;case 30:return null}throw Error(m(156,a.tag))}function af(t,a){switch(hd(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return dr(Ct),ii(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Go(a),null;case 31:if(a.memoizedState!==null){if(da(a),a.alternate===null)throw Error(m(340));ce()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(da(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(m(340));ce()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return zt(kt),null;case 4:return ii(),null;case 10:return dr(a.type),null;case 22:case 23:return da(a),fd(),t!==null&&zt(oe),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return dr(Ct),null;case 25:return null;default:return null}}function Pu(t,a){switch(hd(a),a.tag){case 3:dr(Ct),ii();break;case 26:case 27:case 5:Go(a);break;case 4:ii();break;case 31:a.memoizedState!==null&&da(a);break;case 13:da(a);break;case 19:zt(kt);break;case 10:dr(a.type);break;case 22:case 23:da(a),fd(),t!==null&&zt(oe);break;case 24:dr(Ct)}}function En(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(d){rt(a,a.return,d)}}function Zr(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,i=a;var h=r,s=d;try{s()}catch(f){rt(i,h,f)}}}e=e.next}while(e!==n)}}catch(f){rt(a,a.return,f)}}function ts(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{cu(a,r)}catch(e){rt(t,t.return,e)}}}function as(t,a,r){r.props=ge(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){rt(t,a,e)}}function hn(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){rt(t,a,i)}}function Ga(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){rt(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){rt(t,a,i)}else r.current=null}function rs(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){rt(t,t.return,i)}}function G2(t,a,r){try{var e=t.stateNode;yf(e,t.type,r,a),e[ra]=a}catch(i){rt(t,t.return,i)}}function es(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Yr(t.type)||t.tag===4}function Y2(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||es(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Yr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function V1(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=nr));else if(e!==4&&(e===27&&Yr(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(V1(t,a,r),t=t.sibling;t!==null;)V1(t,a,r),t=t.sibling}function el(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&Yr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(el(t,a,r),t=t.sibling;t!==null;)el(t,a,r),t=t.sibling}function is(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);qt(a,e,r),a[Ot]=t,a[ra]=r}catch(n){rt(t,t.return,n)}}var er=!1,wt=!1,X2=!1,E0=typeof WeakSet=="function"?WeakSet:Set,At=null;function rf(t,a){if(t=t.containerInfo,O1=pl,t=Xh(t),nd(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,d=-1,h=-1,s=0,f=0,k=t,p=null;a:for(;;){for(var x;k!==r||i!==0&&k.nodeType!==3||(d=o+i),k!==n||e!==0&&k.nodeType!==3||(h=o+e),k.nodeType===3&&(o+=k.nodeValue.length),(x=k.firstChild)!==null;)p=k,k=x;for(;;){if(k===t)break a;if(p===r&&++s===i&&(d=o),p===n&&++f===e&&(h=o),(x=k.nextSibling)!==null)break;k=p,p=k.parentNode}k=x}r=d===-1||h===-1?null:{start:d,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(U1={focusedElem:t,selectionRange:r},pl=!1,At=a;At!==null;)if(a=At,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,At=t;else for(;At!==null;){switch(a=At,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var y=ge(r.type,i);t=e.getSnapshotBeforeUpdate(y,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(b){rt(r,r.return,b)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)q1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":q1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=a.sibling,t!==null){t.return=a.return,At=t;break}At=a.return}}function ns(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:tr(t,r),e&4&&En(5,r);break;case 1:if(tr(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){rt(r,r.return,o)}else{var i=ge(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){rt(r,r.return,o)}}e&64&&ts(r),e&512&&hn(r,r.return);break;case 3:if(tr(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{cu(t,a)}catch(o){rt(r,r.return,o)}}break;case 27:a===null&&e&4&&is(r);case 26:case 5:tr(t,r),a===null&&e&4&&rs(r),e&512&&hn(r,r.return);break;case 12:tr(t,r);break;case 31:tr(t,r),e&4&&ds(t,r);break;case 13:tr(t,r),e&4&&cs(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=sf.bind(null,r),Sf(t,r))));break;case 22:if(e=r.memoizedState!==null||er,!e){a=a!==null&&a.memoizedState!==null||wt,i=er;var n=wt;er=e,(wt=a)&&!n?ar(t,r,(r.subtreeFlags&8772)!==0):tr(t,r),er=i,wt=n}break;case 30:break;default:tr(t,r)}}function os(t){var a=t.alternate;a!==null&&(t.alternate=null,os(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&P1(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,Pt=!1;function Pa(t,a,r){for(r=r.child;r!==null;)ls(t,a,r),r=r.sibling}function ls(t,a,r){if(sa&&typeof sa.onCommitFiberUnmount=="function")try{sa.onCommitFiberUnmount(Sn,r)}catch{}switch(r.tag){case 26:wt||Ga(r,a),Pa(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:wt||Ga(r,a);var e=gt,i=Pt;Yr(r.type)&&(gt=r.stateNode,Pt=!1),Pa(t,a,r),pn(r.stateNode),gt=e,Pt=i;break;case 5:wt||Ga(r,a);case 6:if(e=gt,i=Pt,gt=null,Pa(t,a,r),gt=e,Pt=i,gt!==null)if(Pt)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(r.stateNode)}catch(n){rt(r,a,n)}else try{gt.removeChild(r.stateNode)}catch(n){rt(r,a,n)}break;case 18:gt!==null&&(Pt?(t=gt,I0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),pi(t)):I0(gt,r.stateNode));break;case 4:e=gt,i=Pt,gt=r.stateNode.containerInfo,Pt=!0,Pa(t,a,r),gt=e,Pt=i;break;case 0:case 11:case 14:case 15:Zr(2,r,a),wt||Zr(4,r,a),Pa(t,a,r);break;case 1:wt||(Ga(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&as(r,a,e)),Pa(t,a,r);break;case 21:Pa(t,a,r);break;case 22:wt=(e=wt)||r.memoizedState!==null,Pa(t,a,r),wt=e;break;default:Pa(t,a,r)}}function ds(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{pi(t)}catch(r){rt(a,a.return,r)}}}function cs(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{pi(t)}catch(r){rt(a,a.return,r)}}function ef(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new E0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new E0),a;default:throw Error(m(435,t.tag))}}function Mo(t,a){var r=ef(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=gf.bind(null,t,e);e.then(i,i)}})}function $t(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,d=o;t:for(;d!==null;){switch(d.tag){case 27:if(Yr(d.type)){gt=d.stateNode,Pt=!1;break t}break;case 5:gt=d.stateNode,Pt=!1;break t;case 3:case 4:gt=d.stateNode.containerInfo,Pt=!0;break t}d=d.return}if(gt===null)throw Error(m(160));ls(n,o,i),gt=null,Pt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)hs(a,t),a=a.sibling}var Ta=null;function hs(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$t(a,t),It(t),e&4&&(Zr(3,t,t.return),En(3,t),Zr(5,t,t.return));break;case 1:$t(a,t),It(t),e&512&&(wt||r===null||Ga(r,r.return)),e&64&&er&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=Ta;if($t(a,t),It(t),e&512&&(wt||r===null||Ga(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[zn]||n[Ot]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),qt(n,e,r),n[Ot]=t,Vt(n),e=n;break t;case"link":var o=nh("link","href",i).get(e+(r.href||""));if(o){for(var d=0;d<o.length;d++)if(n=o[d],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(d,1);break a}}n=i.createElement(e),qt(n,e,r),i.head.appendChild(n);break;case"meta":if(o=nh("meta","content",i).get(e+(r.content||""))){for(d=0;d<o.length;d++)if(n=o[d],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(d,1);break a}}n=i.createElement(e),qt(n,e,r),i.head.appendChild(n);break;default:throw Error(m(468,e))}n[Ot]=t,Vt(n),e=n}t.stateNode=e}else oh(i,t.type,t.stateNode);else t.stateNode=ih(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?oh(i,t.type,t.stateNode):ih(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&G2(t,t.memoizedProps,r.memoizedProps)}break;case 27:$t(a,t),It(t),e&512&&(wt||r===null||Ga(r,r.return)),r!==null&&e&4&&G2(t,t.memoizedProps,r.memoizedProps);break;case 5:if($t(a,t),It(t),e&512&&(wt||r===null||Ga(r,r.return)),t.flags&32){i=t.stateNode;try{oi(i,"")}catch(y){rt(t,t.return,y)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,G2(t,i,r!==null?r.memoizedProps:i)),e&1024&&(X2=!0);break;case 6:if($t(a,t),It(t),e&4){if(t.stateNode===null)throw Error(m(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(y){rt(t,t.return,y)}}break;case 3:if(Do=null,i=Ta,Ta=ul(a.containerInfo),$t(a,t),Ta=i,It(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{pi(a.containerInfo)}catch(y){rt(t,t.return,y)}X2&&(X2=!1,us(t));break;case 4:e=Ta,Ta=ul(t.stateNode.containerInfo),$t(a,t),It(t),Ta=e;break;case 12:$t(a,t),It(t);break;case 31:$t(a,t),It(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Mo(t,e)));break;case 13:$t(a,t),It(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(jl=ua()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Mo(t,e)));break;case 22:i=t.memoizedState!==null;var h=r!==null&&r.memoizedState!==null,s=er,f=wt;if(er=s||i,wt=f||h,$t(a,t),wt=f,er=s,It(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||h||er||wt||ee(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){h=r=a;try{if(n=h.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=h.stateNode;var k=h.memoizedProps.style,p=k!=null&&k.hasOwnProperty("display")?k.display:null;d.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){rt(h,h.return,y)}}}else if(a.tag===6){if(r===null){h=a;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(y){rt(h,h.return,y)}}}else if(a.tag===18){if(r===null){h=a;try{var x=h.stateNode;i?P0(x,!0):P0(h.stateNode,!1)}catch(y){rt(h,h.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,Mo(t,r))));break;case 19:$t(a,t),It(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Mo(t,e)));break;case 30:break;case 21:break;default:$t(a,t),It(t)}}function It(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if(es(e)){r=e;break}e=e.return}if(r==null)throw Error(m(160));switch(r.tag){case 27:var i=r.stateNode,n=Y2(t);el(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(oi(o,""),r.flags&=-33);var d=Y2(t);el(t,d,o);break;case 3:case 4:var h=r.stateNode.containerInfo,s=Y2(t);V1(t,s,h);break;default:throw Error(m(161))}}catch(f){rt(t,t.return,f)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function us(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;us(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function tr(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)ns(t,a.alternate,a),a=a.sibling}function ee(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Zr(4,a,a.return),ee(a);break;case 1:Ga(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&as(a,a.return,r),ee(a);break;case 27:pn(a.stateNode);case 26:case 5:Ga(a,a.return),ee(a);break;case 22:a.memoizedState===null&&ee(a);break;case 30:ee(a);break;default:ee(a)}t=t.sibling}}function ar(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:ar(i,n,r),En(4,n);break;case 1:if(ar(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(s){rt(e,e.return,s)}if(e=n,i=e.updateQueue,i!==null){var d=e.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)du(h[i],d)}catch(s){rt(e,e.return,s)}}r&&o&64&&ts(n),hn(n,n.return);break;case 27:is(n);case 26:case 5:ar(i,n,r),r&&e===null&&o&4&&rs(n),hn(n,n.return);break;case 12:ar(i,n,r);break;case 31:ar(i,n,r),r&&o&4&&ds(i,n);break;case 13:ar(i,n,r),r&&o&4&&cs(i,n);break;case 22:n.memoizedState===null&&ar(i,n,r),hn(n,n.return);break;case 30:break;default:ar(i,n,r)}a=a.sibling}}function Ad(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Tn(r))}function Vd(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Tn(t))}function _a(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ss(t,a,r,e),a=a.sibling}function ss(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:_a(t,a,r,e),i&2048&&En(9,a);break;case 1:_a(t,a,r,e);break;case 3:_a(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Tn(t)));break;case 12:if(i&2048){_a(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,d=n.onPostCommit;typeof d=="function"&&d(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){rt(a,a.return,h)}}else _a(t,a,r,e);break;case 31:_a(t,a,r,e);break;case 13:_a(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?_a(t,a,r,e):un(t,a):n._visibility&2?_a(t,a,r,e):(n._visibility|=2,Ee(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&Ad(o,a);break;case 24:_a(t,a,r,e),i&2048&&Vd(a.alternate,a);break;default:_a(t,a,r,e)}}function Ee(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,d=r,h=e,s=o.flags;switch(o.tag){case 0:case 11:case 15:Ee(n,o,d,h,i),En(8,o);break;case 23:break;case 22:var f=o.stateNode;o.memoizedState!==null?f._visibility&2?Ee(n,o,d,h,i):un(n,o):(f._visibility|=2,Ee(n,o,d,h,i)),i&&s&2048&&Ad(o.alternate,o);break;case 24:Ee(n,o,d,h,i),i&&s&2048&&Vd(o.alternate,o);break;default:Ee(n,o,d,h,i)}a=a.sibling}}function un(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:un(r,e),i&2048&&Ad(e.alternate,e);break;case 24:un(r,e),i&2048&&Vd(e.alternate,e);break;default:un(r,e)}a=a.sibling}}var tn=8192;function Ne(t,a,r){if(t.subtreeFlags&tn)for(t=t.child;t!==null;)gs(t,a,r),t=t.sibling}function gs(t,a,r){switch(t.tag){case 26:Ne(t,a,r),t.flags&tn&&t.memoizedState!==null&&qf(r,Ta,t.memoizedState,t.memoizedProps);break;case 5:Ne(t,a,r);break;case 3:case 4:var e=Ta;Ta=ul(t.stateNode.containerInfo),Ne(t,a,r),Ta=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=tn,tn=16777216,Ne(t,a,r),tn=e):Ne(t,a,r));break;default:Ne(t,a,r)}}function ps(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function Ki(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];At=e,vs(e,t)}ps(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)fs(t),t=t.sibling}function fs(t){switch(t.tag){case 0:case 11:case 15:Ki(t),t.flags&2048&&Zr(9,t,t.return);break;case 3:Ki(t);break;case 12:Ki(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,No(t)):Ki(t);break;default:Ki(t)}}function No(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];At=e,vs(e,t)}ps(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Zr(8,a,a.return),No(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,No(a));break;default:No(a)}t=t.sibling}}function vs(t,a){for(;At!==null;){var r=At;switch(r.tag){case 0:case 11:case 15:Zr(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Tn(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,At=e;else t:for(r=t;At!==null;){e=At;var i=e.sibling,n=e.return;if(os(e),e===r){At=null;break t}if(i!==null){i.return=n,At=i;break t}At=n}}}var nf={getCacheForType:function(t){var a=Zt(Ct),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return Zt(Ct).controller.signal}},of=typeof WeakMap=="function"?WeakMap:Map,R=0,nt=null,q=null,G=0,at=0,la=null,jr=!1,Li=!1,zd=!1,pr=0,vt=0,qr=0,de=0,_d=0,ha=0,hi=0,sn=null,ta=null,z1=!1,jl=0,ks=0,il=1/0,nl=null,_r=null,Bt=0,Tr=null,ui=null,cr=0,_1=0,T1=null,xs=null,gn=0,N1=null;function pa(){return(R&2)!==0&&G!==0?G&-G:V.T!==null?Nd():jh()}function Ls(){if(ha===0)if((G&536870912)===0||Q){var t=ho;ho<<=1,(ho&3932160)===0&&(ho=262144),ha=t}else ha=536870912;return t=va.current,t!==null&&(t.flags|=32),ha}function aa(t,a,r){(t===nt&&(at===2||at===9)||t.cancelPendingCommit!==null)&&(si(t,0),Wr(t,G,ha,!1)),Vn(t,r),((R&2)===0||t!==nt)&&(t===nt&&((R&2)===0&&(de|=r),vt===4&&Wr(t,G,ha,!1)),Qa(t))}function Ms(t,a,r){if((R&6)!==0)throw Error(m(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||An(t,a),i=e?cf(t,a):Q2(t,a,!0),n=e;do{if(i===0){Li&&!e&&Wr(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!lf(r)){i=Q2(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var d=t;i=sn;var h=d.current.memoizedState.isDehydrated;if(h&&(si(d,o).flags|=256),o=Q2(d,o,!1),o!==2){if(zd&&!h){d.errorRecoveryDisabledLanes|=n,de|=n,i=4;break t}n=ta,ta=i,n!==null&&(ta===null?ta=n:ta.push.apply(ta,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){si(t,0),Wr(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(m(345));case 4:if((a&4194048)!==a)break;case 6:Wr(e,a,ha,!jr);break t;case 2:ta=null;break;case 3:case 5:break;default:throw Error(m(329))}if((a&62914560)===a&&(i=jl+300-ua(),10<i)){if(Wr(e,a,ha,!jr),vl(e,0,!0)!==0)break t;cr=a,e.timeoutHandle=Us(D0.bind(null,e,r,ta,nl,z1,a,ha,de,hi,jr,n,"Throttled",-0,0),i);break t}D0(e,r,ta,nl,z1,a,ha,de,hi,jr,n,null,-0,0)}}break}while(!0);Qa(t)}function D0(t,a,r,e,i,n,o,d,h,s,f,k,p,x){if(t.timeoutHandle=-1,k=a.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:nr},gs(a,n,k);var y=(n&62914560)===n?jl-ua():(n&4194048)===n?ks-ua():0;if(y=Gf(k,y),y!==null){cr=n,t.cancelPendingCommit=y(U0.bind(null,t,a,n,r,e,i,o,d,h,f,k,null,p,x)),Wr(t,n,o,!s);return}}U0(t,a,n,r,e,i,o,d,h)}function lf(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!fa(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Wr(t,a,r,e){a&=~_d,a&=~de,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-ga(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&Ch(t,r,a)}function Wl(){return(R&6)===0?(Dn(0,!1),!1):!0}function Td(){if(q!==null){if(at===0)var t=q.return;else t=q,or=xe=null,Md(t),ai=null,mn=0,t=q;for(;t!==null;)Pu(t.alternate,t),t=t.return;q=null}}function si(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,bf(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),cr=0,Td(),nt=t,q=r=lr(t.current,null),G=a,at=0,la=null,jr=!1,Li=An(t,a),zd=!1,hi=ha=_d=de=qr=vt=0,ta=sn=null,z1=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-ga(e),n=1<<i;a|=t[i],e&=~n}return pr=a,Ml(),r}function ms(t,a){E=null,V.H=wn,a===xi||a===yl?(a=v0(),at=3):a===gd?(a=v0(),at=4):at=a===Hd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,la=a,q===null&&(vt=1,al(t,Ba(a,t.current)))}function ys(){var t=va.current;return t===null?!0:(G&4194048)===G?Wa===null:(G&62914560)===G||(G&536870912)!==0?t===Wa:!1}function ws(){var t=V.H;return V.H=wn,t===null?wn:t}function Cs(){var t=V.A;return V.A=nf,t}function ol(){vt=4,jr||(G&4194048)!==G&&va.current!==null||(Li=!0),(qr&134217727)===0&&(de&134217727)===0||nt===null||Wr(nt,G,ha,!1)}function Q2(t,a,r){var e=R;R|=2;var i=ws(),n=Cs();(nt!==t||G!==a)&&(nl=null,si(t,a)),a=!1;var o=vt;t:do try{if(at!==0&&q!==null){var d=q,h=la;switch(at){case 8:Td(),o=6;break t;case 3:case 2:case 9:case 6:va.current===null&&(a=!0);var s=at;if(at=0,la=null,Fe(t,d,h,s),r&&Li){o=0;break t}break;default:s=at,at=0,la=null,Fe(t,d,h,s)}}df(),o=vt;break}catch(f){ms(t,f)}while(!0);return a&&t.shellSuspendCounter++,or=xe=null,R=e,V.H=i,V.A=n,q===null&&(nt=null,G=0,Ml()),o}function df(){for(;q!==null;)bs(q)}function cf(t,a){var r=R;R|=2;var e=ws(),i=Cs();nt!==t||G!==a?(nl=null,il=ua()+500,si(t,a)):Li=An(t,a);t:do try{if(at!==0&&q!==null){a=q;var n=la;a:switch(at){case 1:at=0,la=null,Fe(t,a,n,1);break;case 2:case 9:if(f0(n)){at=0,la=null,O0(a);break}a=function(){at!==2&&at!==9||nt!==t||(at=7),Qa(t)},n.then(a,a);break t;case 3:at=7;break t;case 4:at=5;break t;case 7:f0(n)?(at=0,la=null,O0(a)):(at=0,la=null,Fe(t,a,n,7));break;case 5:var o=null;switch(q.tag){case 26:o=q.memoizedState;case 5:case 27:var d=q;if(o?Xs(o):d.stateNode.complete){at=0,la=null;var h=d.sibling;if(h!==null)q=h;else{var s=d.return;s!==null?(q=s,Hl(s)):q=null}break a}}at=0,la=null,Fe(t,a,n,5);break;case 6:at=0,la=null,Fe(t,a,n,6);break;case 8:Td(),vt=6;break t;default:throw Error(m(462))}}hf();break}catch(f){ms(t,f)}while(!0);return or=xe=null,V.H=e,V.A=i,R=r,q!==null?0:(nt=null,G=0,Ml(),vt)}function hf(){for(;q!==null&&!Vp();)bs(q)}function bs(t){var a=Iu(t.alternate,t,pr);t.memoizedProps=t.pendingProps,a===null?Hl(t):q=a}function O0(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=V0(r,a,a.pendingProps,a.type,void 0,G);break;case 11:a=V0(r,a,a.pendingProps,a.type.render,a.ref,G);break;case 5:Md(a);default:Pu(r,a),a=q=Ph(a,pr),a=Iu(r,a,pr)}t.memoizedProps=t.pendingProps,a===null?Hl(t):q=a}function Fe(t,a,r,e){or=xe=null,Md(a),ai=null,mn=0;var i=a.return;try{if($5(t,i,a,r,G)){vt=1,al(t,Ba(r,t.current)),q=null;return}}catch(n){if(i!==null)throw q=i,n;vt=1,al(t,Ba(r,t.current)),q=null;return}a.flags&32768?(Q||e===1?t=!0:Li||(G&536870912)!==0?t=!1:(jr=t=!0,(e===2||e===9||e===3||e===6)&&(e=va.current,e!==null&&e.tag===13&&(e.flags|=16384))),Bs(a,t)):Hl(a)}function Hl(t){var a=t;do{if((a.flags&32768)!==0){Bs(a,jr);return}t=a.return;var r=tf(a.alternate,a,pr);if(r!==null){q=r;return}if(a=a.sibling,a!==null){q=a;return}q=a=t}while(a!==null);vt===0&&(vt=5)}function Bs(t,a){do{var r=af(t.alternate,t);if(r!==null){r.flags&=32767,q=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){q=t;return}q=t=r}while(t!==null);vt=6,q=null}function U0(t,a,r,e,i,n,o,d,h){t.cancelPendingCommit=null;do Sl();while(Bt!==0);if((R&6)!==0)throw Error(m(327));if(a!==null){if(a===t.current)throw Error(m(177));if(n=a.lanes|a.childLanes,n|=od,qp(t,r,n,o,d,h),t===nt&&(q=nt=null,G=0),ui=a,Tr=t,cr=r,_1=n,T1=i,xs=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,pf(Yo,function(){return As(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=V.T,V.T=null,i=F.p,F.p=2,o=R,R|=4;try{rf(t,a,r)}finally{R=o,F.p=i,V.T=e}}Bt=1,js(),Ws(),Hs()}}function js(){if(Bt===1){Bt=0;var t=Tr,a=ui,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=V.T,V.T=null;var e=F.p;F.p=2;var i=R;R|=4;try{hs(a,t);var n=U1,o=Xh(t.containerInfo),d=n.focusedElem,h=n.selectionRange;if(o!==d&&d&&d.ownerDocument&&Yh(d.ownerDocument.documentElement,d)){if(h!==null&&nd(d)){var s=h.start,f=h.end;if(f===void 0&&(f=s),"selectionStart"in d)d.selectionStart=s,d.selectionEnd=Math.min(f,d.value.length);else{var k=d.ownerDocument||document,p=k&&k.defaultView||window;if(p.getSelection){var x=p.getSelection(),y=d.textContent.length,b=Math.min(h.start,y),D=h.end===void 0?b:Math.min(h.end,y);!x.extend&&b>D&&(o=D,D=b,b=o);var g=d0(d,b),u=d0(d,D);if(g&&u&&(x.rangeCount!==1||x.anchorNode!==g.node||x.anchorOffset!==g.offset||x.focusNode!==u.node||x.focusOffset!==u.offset)){var v=k.createRange();v.setStart(g.node,g.offset),x.removeAllRanges(),b>D?(x.addRange(v),x.extend(u.node,u.offset)):(v.setEnd(u.node,u.offset),x.addRange(v))}}}}for(k=[],x=d;x=x.parentNode;)x.nodeType===1&&k.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<k.length;d++){var L=k[d];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}pl=!!O1,U1=O1=null}finally{R=i,F.p=e,V.T=r}}t.current=a,Bt=2}}function Ws(){if(Bt===2){Bt=0;var t=Tr,a=ui,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=V.T,V.T=null;var e=F.p;F.p=2;var i=R;R|=4;try{ns(t,a.alternate,a)}finally{R=i,F.p=e,V.T=r}}Bt=3}}function Hs(){if(Bt===4||Bt===3){Bt=0,zp();var t=Tr,a=ui,r=cr,e=xs;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Bt=5:(Bt=0,ui=Tr=null,Ss(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(_r=null),I1(r),a=a.stateNode,sa&&typeof sa.onCommitFiberRoot=="function")try{sa.onCommitFiberRoot(Sn,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=V.T,i=F.p,F.p=2,V.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var d=e[o];n(d.value,{componentStack:d.stack})}}finally{V.T=a,F.p=i}}(cr&3)!==0&&Sl(),Qa(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===N1?gn++:(gn=0,N1=t):gn=0,Dn(0,!1)}}function Ss(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Tn(a)))}function Sl(){return js(),Ws(),Hs(),As()}function As(){if(Bt!==5)return!1;var t=Tr,a=_1;_1=0;var r=I1(cr),e=V.T,i=F.p;try{F.p=32>r?32:r,V.T=null,r=T1,T1=null;var n=Tr,o=cr;if(Bt=0,ui=Tr=null,cr=0,(R&6)!==0)throw Error(m(331));var d=R;if(R|=4,fs(n.current),ss(n,n.current,o,r),R=d,Dn(0,!1),sa&&typeof sa.onPostCommitFiberRoot=="function")try{sa.onPostCommitFiberRoot(Sn,n)}catch{}return!0}finally{F.p=i,V.T=e,Ss(t,a)}}function Z0(t,a,r){a=Ba(r,a),a=H1(t.stateNode,a,2),t=zr(t,a,2),t!==null&&(Vn(t,2),Qa(t))}function rt(t,a,r){if(t.tag===3)Z0(t,t,r);else for(;a!==null;){if(a.tag===3){Z0(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(_r===null||!_r.has(e))){t=Ba(r,t),r=Qu(2),e=zr(a,r,2),e!==null&&(Ku(r,e,a,t),Vn(e,2),Qa(e));break}}a=a.return}}function K2(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new of;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(zd=!0,i.add(r),t=uf.bind(null,t,a,r),a.then(t,t))}function uf(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,nt===t&&(G&r)===r&&(vt===4||vt===3&&(G&62914560)===G&&300>ua()-jl?(R&2)===0&&si(t,0):_d|=r,hi===G&&(hi=0)),Qa(t)}function Vs(t,a){a===0&&(a=wh()),t=ke(t,a),t!==null&&(Vn(t,a),Qa(t))}function sf(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),Vs(t,r)}function gf(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(m(314))}e!==null&&e.delete(a),Vs(t,r)}function pf(t,a){return F1(t,a)}var ll=null,De=null,E1=!1,dl=!1,J2=!1,Hr=0;function Qa(t){t!==De&&t.next===null&&(De===null?ll=De=t:De=De.next=t),dl=!0,E1||(E1=!0,vf())}function Dn(t,a){if(!J2&&dl){J2=!0;do for(var r=!1,e=ll;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,d=e.pingedLanes;n=(1<<31-ga(42|t)+1)-1,n&=i&~(o&~d),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,q0(e,n))}else n=G,n=vl(e,e===nt?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||An(e,n)||(r=!0,q0(e,n));e=e.next}while(r);J2=!1}}function ff(){zs()}function zs(){dl=E1=!1;var t=0;Hr!==0&&Cf()&&(t=Hr);for(var a=ua(),r=null,e=ll;e!==null;){var i=e.next,n=_s(e,a);n===0?(e.next=null,r===null?ll=i:r.next=i,i===null&&(De=r)):(r=e,(t!==0||(n&3)!==0)&&(dl=!0)),e=i}Bt!==0&&Bt!==5||Dn(t,!1),Hr!==0&&(Hr=0)}function _s(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-ga(n),d=1<<o,h=i[o];h===-1?((d&r)===0||(d&e)!==0)&&(i[o]=Zp(d,a)):h<=a&&(t.expiredLanes|=d),n&=~d}if(a=nt,r=G,r=vl(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(at===2||at===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&w2(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||An(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&w2(e),I1(r)){case 2:case 8:r=mh;break;case 32:r=Yo;break;case 268435456:r=yh;break;default:r=Yo}return e=Ts.bind(null,t),r=F1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&w2(e),t.callbackPriority=2,t.callbackNode=null,2}function Ts(t,a){if(Bt!==0&&Bt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Sl()&&t.callbackNode!==r)return null;var e=G;return e=vl(t,t===nt?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(Ms(t,e,a),_s(t,ua()),t.callbackNode!=null&&t.callbackNode===r?Ts.bind(null,t):null)}function q0(t,a){if(Sl())return null;Ms(t,a,!0)}function vf(){Bf(function(){(R&6)!==0?F1(Mh,ff):zs()})}function Nd(){if(Hr===0){var t=li;t===0&&(t=co,co<<=1,(co&261888)===0&&(co=256)),Hr=t}return Hr}function G0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:jo(""+t)}function Y0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function kf(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=G0((i[ra]||null).action),o=e.submitter;o&&(a=(a=o[ra]||null)?G0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var d=new kl("action","action",null,e,i);t.push({event:d,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Hr!==0){var h=o?Y0(i,o):new FormData(i);j1(r,{pending:!0,data:h,method:i.method,action:n},null,h)}}else typeof n=="function"&&(d.preventDefault(),h=o?Y0(i,o):new FormData(i),j1(r,{pending:!0,data:h,method:i.method,action:n},n,h))},currentTarget:i}]})}}for(mo=0;mo<f1.length;mo++)yo=f1[mo],X0=yo.toLowerCase(),Q0=yo[0].toUpperCase()+yo.slice(1),Na(X0,"on"+Q0);var yo,X0,Q0,mo;Na(Kh,"onAnimationEnd");Na(Jh,"onAnimationIteration");Na(Rh,"onAnimationStart");Na("dblclick","onDoubleClick");Na("focusin","onFocus");Na("focusout","onBlur");Na(_5,"onTransitionRun");Na(T5,"onTransitionStart");Na(N5,"onTransitionCancel");Na(Fh,"onTransitionEnd");ni("onMouseEnter",["mouseout","mouseover"]);ni("onMouseLeave",["mouseout","mouseover"]);ni("onPointerEnter",["pointerout","pointerover"]);ni("onPointerLeave",["pointerout","pointerover"]);pe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pe("onBeforeInput",["compositionend","keypress","textInput","paste"]);pe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cn));function Ns(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var d=e[o],h=d.instance,s=d.currentTarget;if(d=d.listener,h!==n&&i.isPropagationStopped())break t;n=d,i.currentTarget=s;try{n(i)}catch(f){Qo(f)}i.currentTarget=null,n=h}else for(o=0;o<e.length;o++){if(d=e[o],h=d.instance,s=d.currentTarget,d=d.listener,h!==n&&i.isPropagationStopped())break t;n=d,i.currentTarget=s;try{n(i)}catch(f){Qo(f)}i.currentTarget=null,n=h}}}}function Z(t,a){var r=a[l1];r===void 0&&(r=a[l1]=new Set);var e=t+"__bubble";r.has(e)||(Es(a,t,2,!1),r.add(e))}function R2(t,a,r){var e=0;a&&(e|=4),Es(r,t,e,a)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Ed(t){if(!t[wo]){t[wo]=!0,Wh.forEach(function(r){r!=="selectionchange"&&(xf.has(r)||R2(r,!1,t),R2(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[wo]||(a[wo]=!0,R2("selectionchange",!1,a))}}function Es(t,a,r,e){switch(Fs(a)){case 2:var i=Qf;break;case 8:i=Kf;break;default:i=Zd}r=i.bind(null,a,r,t),i=void 0,!s1||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function F2(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var d=e.stateNode.containerInfo;if(d===i)break;if(o===4)for(o=e.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;d!==null;){if(o=Ze(d),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){e=n=o;continue t}d=d.parentNode}}e=e.return}Nh(function(){var s=n,f=ad(r),k=[];t:{var p=$h.get(t);if(p!==void 0){var x=kl,y=t;switch(t){case"keypress":if(Ho(r)===0)break t;case"keydown":case"keyup":x=s5;break;case"focusin":y="focus",x=W2;break;case"focusout":y="blur",x=W2;break;case"beforeblur":case"afterblur":x=W2;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Pc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=t5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=f5;break;case Kh:case Jh:case Rh:x=e5;break;case Fh:x=k5;break;case"scroll":case"scrollend":x=Ip;break;case"wheel":x=L5;break;case"copy":case"cut":case"paste":x=n5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=a0;break;case"toggle":case"beforetoggle":x=m5}var b=(a&4)!==0,D=!b&&(t==="scroll"||t==="scrollend"),g=b?p!==null?p+"Capture":null:p;b=[];for(var u=s,v;u!==null;){var L=u;if(v=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||v===null||g===null||(L=vn(u,g),L!=null&&b.push(bn(u,L,v))),D)break;u=u.return}0<b.length&&(p=new x(p,y,null,r,f),k.push({event:p,listeners:b}))}}if((a&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",p&&r!==u1&&(y=r.relatedTarget||r.fromElement)&&(Ze(y)||y[fi]))break t;if((x||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,x?(y=r.relatedTarget||r.toElement,x=s,y=y?Ze(y):null,y!==null&&(D=Hn(y),b=y.tag,y!==D||b!==5&&b!==27&&b!==6)&&(y=null)):(x=null,y=s),x!==y)){if(b=Pc,L="onMouseLeave",g="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(b=a0,L="onPointerLeave",g="onPointerEnter",u="pointer"),D=x==null?p:Ii(x),v=y==null?p:Ii(y),p=new b(L,u+"leave",x,r,f),p.target=D,p.relatedTarget=v,L=null,Ze(f)===s&&(b=new b(g,u+"enter",y,r,f),b.target=v,b.relatedTarget=D,L=b),D=L,x&&y)a:{for(b=Lf,g=x,u=y,v=0,L=g;L;L=b(L))v++;L=0;for(var B=u;B;B=b(B))L++;for(;0<v-L;)g=b(g),v--;for(;0<L-v;)u=b(u),L--;for(;v--;){if(g===u||u!==null&&g===u.alternate){b=g;break a}g=b(g),u=b(u)}b=null}else b=null;x!==null&&K0(k,p,x,b,!1),y!==null&&D!==null&&K0(k,D,y,b,!0)}}t:{if(p=s?Ii(s):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var z=n0;else if(i0(p))if(qh)z=A5;else{z=H5;var j=W5}else x=p.nodeName,!x||x.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?s&&td(s.elementType)&&(z=n0):z=S5;if(z&&(z=z(t,s))){Zh(k,z,r,f);break t}j&&j(t,p,s),t==="focusout"&&s&&p.type==="number"&&s.memoizedProps.value!=null&&h1(p,"number",p.value)}switch(j=s?Ii(s):window,t){case"focusin":(i0(j)||j.contentEditable==="true")&&(Ye=j,g1=s,en=null);break;case"focusout":en=g1=Ye=null;break;case"mousedown":p1=!0;break;case"contextmenu":case"mouseup":case"dragend":p1=!1,c0(k,r,f);break;case"selectionchange":if(z5)break;case"keydown":case"keyup":c0(k,r,f)}var A;if(id)t:{switch(t){case"compositionstart":var N="onCompositionStart";break t;case"compositionend":N="onCompositionEnd";break t;case"compositionupdate":N="onCompositionUpdate";break t}N=void 0}else Ge?Oh(t,r)&&(N="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(Dh&&r.locale!=="ko"&&(Ge||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ge&&(A=Eh()):(Br=f,rd="value"in Br?Br.value:Br.textContent,Ge=!0)),j=cl(s,N),0<j.length&&(N=new t0(N,t,null,r,f),k.push({event:N,listeners:j}),A?N.data=A:(A=Uh(r),A!==null&&(N.data=A)))),(A=w5?C5(t,r):b5(t,r))&&(N=cl(s,"onBeforeInput"),0<N.length&&(j=new t0("onBeforeInput","beforeinput",null,r,f),k.push({event:j,listeners:N}),j.data=A)),kf(k,t,s,r,f)}Ns(k,a)})}function bn(t,a,r){return{instance:t,listener:a,currentTarget:r}}function cl(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=vn(t,r),i!=null&&e.unshift(bn(t,i,n)),i=vn(t,a),i!=null&&e.push(bn(t,i,n))),t.tag===3)return e;t=t.return}return[]}function Lf(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function K0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var d=r,h=d.alternate,s=d.stateNode;if(d=d.tag,h!==null&&h===e)break;d!==5&&d!==26&&d!==27||s===null||(h=s,i?(s=vn(r,n),s!=null&&o.unshift(bn(r,s,h))):i||(s=vn(r,n),s!=null&&o.push(bn(r,s,h)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var Mf=/\r\n?/g,mf=/\u0000|\uFFFD/g;function J0(t){return(typeof t=="string"?t:""+t).replace(Mf,`
`).replace(mf,"")}function Ds(t,a){return a=J0(a),J0(t)===a}function et(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||oi(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&oi(t,""+e);break;case"className":so(t,"class",e);break;case"tabIndex":so(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":so(t,r,e);break;case"style":Th(t,e,n);break;case"data":if(a!=="object"){so(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=jo(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&et(t,a,"name",i.name,i,null),et(t,a,"formEncType",i.formEncType,i,null),et(t,a,"formMethod",i.formMethod,i,null),et(t,a,"formTarget",i.formTarget,i,null)):(et(t,a,"encType",i.encType,i,null),et(t,a,"method",i.method,i,null),et(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=jo(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=nr);break;case"onScroll":e!=null&&Z("scroll",t);break;case"onScrollEnd":e!=null&&Z("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(m(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(m(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=jo(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":Z("beforetoggle",t),Z("toggle",t),Bo(t,"popover",e);break;case"xlinkActuate":$a(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":$a(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":$a(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":$a(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":$a(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":$a(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":$a(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":$a(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":$a(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Bo(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Fp.get(r)||r,Bo(t,r,e))}}function D1(t,a,r,e,i,n){switch(r){case"style":Th(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(m(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(m(60));t.innerHTML=r}}break;case"children":typeof e=="string"?oi(t,e):(typeof e=="number"||typeof e=="bigint")&&oi(t,""+e);break;case"onScroll":e!=null&&Z("scroll",t);break;case"onScrollEnd":e!=null&&Z("scrollend",t);break;case"onClick":e!=null&&(t.onclick=nr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hh.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[ra]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):Bo(t,r,e)}}}function qt(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",t),Z("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:et(t,a,n,o,r,null)}}i&&et(t,a,"srcSet",r.srcSet,r,null),e&&et(t,a,"src",r.src,r,null);return;case"input":Z("invalid",t);var d=n=o=i=null,h=null,s=null;for(e in r)if(r.hasOwnProperty(e)){var f=r[e];if(f!=null)switch(e){case"name":i=f;break;case"type":o=f;break;case"checked":h=f;break;case"defaultChecked":s=f;break;case"value":n=f;break;case"defaultValue":d=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(m(137,a));break;default:et(t,a,e,f,r,null)}}Vh(t,n,d,h,s,o,i,!1);return;case"select":Z("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(d=r[i],d!=null))switch(i){case"value":n=d;break;case"defaultValue":o=d;break;case"multiple":e=d;default:et(t,a,i,d,r,null)}a=n,r=o,t.multiple=!!e,a!=null?Ie(t,!!e,a,!1):r!=null&&Ie(t,!!e,r,!0);return;case"textarea":Z("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(d=r[o],d!=null))switch(o){case"value":e=d;break;case"defaultValue":i=d;break;case"children":n=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(m(91));break;default:et(t,a,o,d,r,null)}_h(t,e,i,n);return;case"option":for(h in r)r.hasOwnProperty(h)&&(e=r[h],e!=null)&&(h==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":et(t,a,h,e,r,null));return;case"dialog":Z("beforetoggle",t),Z("toggle",t),Z("cancel",t),Z("close",t);break;case"iframe":case"object":Z("load",t);break;case"video":case"audio":for(e=0;e<Cn.length;e++)Z(Cn[e],t);break;case"image":Z("error",t),Z("load",t);break;case"details":Z("toggle",t);break;case"embed":case"source":case"link":Z("error",t),Z("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(s in r)if(r.hasOwnProperty(s)&&(e=r[s],e!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:et(t,a,s,e,r,null)}return;default:if(td(a)){for(f in r)r.hasOwnProperty(f)&&(e=r[f],e!==void 0&&D1(t,a,f,e,r,void 0));return}}for(d in r)r.hasOwnProperty(d)&&(e=r[d],e!=null&&et(t,a,d,e,r,null))}function yf(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,d=null,h=null,s=null,f=null;for(x in r){var k=r[x];if(r.hasOwnProperty(x)&&k!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":h=k;default:e.hasOwnProperty(x)||et(t,a,x,null,e,k)}}for(var p in e){var x=e[p];if(k=r[p],e.hasOwnProperty(p)&&(x!=null||k!=null))switch(p){case"type":n=x;break;case"name":i=x;break;case"checked":s=x;break;case"defaultChecked":f=x;break;case"value":o=x;break;case"defaultValue":d=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(m(137,a));break;default:x!==k&&et(t,a,p,x,e,k)}}c1(t,o,d,h,s,f,n,i);return;case"select":x=o=d=p=null;for(n in r)if(h=r[n],r.hasOwnProperty(n)&&h!=null)switch(n){case"value":break;case"multiple":x=h;default:e.hasOwnProperty(n)||et(t,a,n,null,e,h)}for(i in e)if(n=e[i],h=r[i],e.hasOwnProperty(i)&&(n!=null||h!=null))switch(i){case"value":p=n;break;case"defaultValue":d=n;break;case"multiple":o=n;default:n!==h&&et(t,a,i,n,e,h)}a=d,r=o,e=x,p!=null?Ie(t,!!r,p,!1):!!e!=!!r&&(a!=null?Ie(t,!!r,a,!0):Ie(t,!!r,r?[]:"",!1));return;case"textarea":x=p=null;for(d in r)if(i=r[d],r.hasOwnProperty(d)&&i!=null&&!e.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:et(t,a,d,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":p=i;break;case"defaultValue":x=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:i!==n&&et(t,a,o,i,e,n)}zh(t,p,x);return;case"option":for(var y in r)p=r[y],r.hasOwnProperty(y)&&p!=null&&!e.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:et(t,a,y,null,e,p));for(h in e)p=e[h],x=r[h],e.hasOwnProperty(h)&&p!==x&&(p!=null||x!=null)&&(h==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":et(t,a,h,p,e,x));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in r)p=r[b],r.hasOwnProperty(b)&&p!=null&&!e.hasOwnProperty(b)&&et(t,a,b,null,e,p);for(s in e)if(p=e[s],x=r[s],e.hasOwnProperty(s)&&p!==x&&(p!=null||x!=null))switch(s){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,a));break;default:et(t,a,s,p,e,x)}return;default:if(td(a)){for(var D in r)p=r[D],r.hasOwnProperty(D)&&p!==void 0&&!e.hasOwnProperty(D)&&D1(t,a,D,void 0,e,p);for(f in e)p=e[f],x=r[f],!e.hasOwnProperty(f)||p===x||p===void 0&&x===void 0||D1(t,a,f,p,e,x);return}}for(var g in r)p=r[g],r.hasOwnProperty(g)&&p!=null&&!e.hasOwnProperty(g)&&et(t,a,g,null,e,p);for(k in e)p=e[k],x=r[k],!e.hasOwnProperty(k)||p===x||p==null&&x==null||et(t,a,k,p,e,x)}function R0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wf(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,d=i.duration;if(n&&d&&R0(o)){for(o=0,d=i.responseEnd,e+=1;e<r.length;e++){var h=r[e],s=h.startTime;if(s>d)break;var f=h.transferSize,k=h.initiatorType;f&&R0(k)&&(h=h.responseEnd,o+=f*(h<d?1:(d-s)/(h-s)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var O1=null,U1=null;function hl(t){return t.nodeType===9?t:t.ownerDocument}function F0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Os(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Z1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var $2=null;function Cf(){var t=window.event;return t&&t.type==="popstate"?t===$2?!1:($2=t,!0):($2=null,!1)}var Us=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,$0=typeof Promise=="function"?Promise:void 0,Bf=typeof queueMicrotask=="function"?queueMicrotask:typeof $0<"u"?function(t){return $0.resolve(null).then(t).catch(jf)}:Us;function jf(t){setTimeout(function(){throw t})}function Yr(t){return t==="head"}function I0(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),pi(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")pn(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,pn(r);for(var n=r.firstChild;n;){var o=n.nextSibling,d=n.nodeName;n[zn]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&pn(t.ownerDocument.body);r=i}while(r);pi(a)}function P0(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function q1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":q1(r),P1(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Wf(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[zn])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=Ha(t.nextSibling),t===null)break}return null}function Hf(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Ha(t.nextSibling),t===null))return null;return t}function Zs(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ha(t.nextSibling),t===null))return null;return t}function G1(t){return t.data==="$?"||t.data==="$~"}function Y1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Sf(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function Ha(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var X1=null;function th(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return Ha(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function ah(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function qs(t,a,r){switch(a=hl(r),t){case"html":if(t=a.documentElement,!t)throw Error(m(452));return t;case"head":if(t=a.head,!t)throw Error(m(453));return t;case"body":if(t=a.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function pn(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);P1(t)}var Sa=new Map,rh=new Set;function ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fr=F.d;F.d={f:Af,r:Vf,D:zf,C:_f,L:Tf,m:Nf,X:Df,S:Ef,M:Of};function Af(){var t=fr.f(),a=Wl();return t||a}function Vf(t){var a=vi(t);a!==null&&a.tag===5&&a.type==="form"?Tu(a):fr.r(t)}var Mi=typeof document>"u"?null:document;function Gs(t,a,r){var e=Mi;if(e&&typeof a=="string"&&a){var i=ba(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),rh.has(i)||(rh.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),qt(a,"link",t),Vt(a),e.head.appendChild(a)))}}function zf(t){fr.D(t),Gs("dns-prefetch",t,null)}function _f(t,a){fr.C(t,a),Gs("preconnect",t,a)}function Tf(t,a,r){fr.L(t,a,r);var e=Mi;if(e&&t&&a){var i='link[rel="preload"][as="'+ba(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+ba(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+ba(r.imageSizes)+'"]')):i+='[href="'+ba(t)+'"]';var n=i;switch(a){case"style":n=gi(t);break;case"script":n=mi(t)}Sa.has(n)||(t=ht({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),Sa.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(On(n))||a==="script"&&e.querySelector(Un(n))||(a=e.createElement("link"),qt(a,"link",t),Vt(a),e.head.appendChild(a)))}}function Nf(t,a){fr.m(t,a);var r=Mi;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+ba(e)+'"][href="'+ba(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=mi(t)}if(!Sa.has(n)&&(t=ht({rel:"modulepreload",href:t},a),Sa.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Un(n)))return}e=r.createElement("link"),qt(e,"link",t),Vt(e),r.head.appendChild(e)}}}function Ef(t,a,r){fr.S(t,a,r);var e=Mi;if(e&&t){var i=$e(e).hoistableStyles,n=gi(t);a=a||"default";var o=i.get(n);if(!o){var d={loading:0,preload:null};if(o=e.querySelector(On(n)))d.loading=5;else{t=ht({rel:"stylesheet",href:t,"data-precedence":a},r),(r=Sa.get(n))&&Dd(t,r);var h=o=e.createElement("link");Vt(h),qt(h,"link",t),h._p=new Promise(function(s,f){h.onload=s,h.onerror=f}),h.addEventListener("load",function(){d.loading|=1}),h.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Eo(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:d},i.set(n,o)}}}function Df(t,a){fr.X(t,a);var r=Mi;if(r&&t){var e=$e(r).hoistableScripts,i=mi(t),n=e.get(i);n||(n=r.querySelector(Un(i)),n||(t=ht({src:t,async:!0},a),(a=Sa.get(i))&&Od(t,a),n=r.createElement("script"),Vt(n),qt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function Of(t,a){fr.M(t,a);var r=Mi;if(r&&t){var e=$e(r).hoistableScripts,i=mi(t),n=e.get(i);n||(n=r.querySelector(Un(i)),n||(t=ht({src:t,async:!0,type:"module"},a),(a=Sa.get(i))&&Od(t,a),n=r.createElement("script"),Vt(n),qt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function eh(t,a,r,e){var i=(i=Sr.current)?ul(i):null;if(!i)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=gi(r.href),r=$e(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=gi(r.href);var n=$e(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(On(t)))&&!n._p&&(o.instance=n,o.state.loading=5),Sa.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Sa.set(t,r),n||Uf(i,t,r,o.state))),a&&e===null)throw Error(m(528,""));return o}if(a&&e!==null)throw Error(m(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=mi(r),r=$e(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function gi(t){return'href="'+ba(t)+'"'}function On(t){return'link[rel="stylesheet"]['+t+"]"}function Ys(t){return ht({},t,{"data-precedence":t.precedence,precedence:null})}function Uf(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),qt(a,"link",r),Vt(a),t.head.appendChild(a))}function mi(t){return'[src="'+ba(t)+'"]'}function Un(t){return"script[async]"+t}function ih(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+ba(r.href)+'"]');if(e)return a.instance=e,Vt(e),e;var i=ht({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Vt(e),qt(e,"style",i),Eo(e,r.precedence,t),a.instance=e;case"stylesheet":i=gi(r.href);var n=t.querySelector(On(i));if(n)return a.state.loading|=4,a.instance=n,Vt(n),n;e=Ys(r),(i=Sa.get(i))&&Dd(e,i),n=(t.ownerDocument||t).createElement("link"),Vt(n);var o=n;return o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),qt(n,"link",e),a.state.loading|=4,Eo(n,r.precedence,t),a.instance=n;case"script":return n=mi(r.src),(i=t.querySelector(Un(n)))?(a.instance=i,Vt(i),i):(e=r,(i=Sa.get(n))&&(e=ht({},r),Od(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),Vt(i),qt(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(m(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,Eo(e,r.precedence,t));return a.instance}function Eo(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var d=e[o];if(d.dataset.precedence===a)n=d;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function Dd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function Od(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Do=null;function nh(t,a,r){if(Do===null){var e=new Map,i=Do=new Map;i.set(r,e)}else i=Do,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[zn]||n[Ot]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var d=e.get(o);d?d.push(n):e.set(o,[n])}}return e}function oh(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function Zf(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Xs(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function qf(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=gi(e.href),n=a.querySelector(On(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=sl.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,Vt(n);return}n=a.ownerDocument||a,e=Ys(e),(i=Sa.get(i))&&Dd(e,i),n=n.createElement("link"),Vt(n);var o=n;o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),qt(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=sl.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var I2=0;function Gf(t,a){return t.stylesheets&&t.count===0&&Oo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&Oo(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&I2===0&&(I2=62500*wf());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Oo(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>I2?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function sl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Oo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var gl=null;function Oo(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,gl=new Map,a.forEach(Yf,t),gl=null,sl.call(t))}function Yf(t,a){if(!(a.state.loading&4)){var r=gl.get(t);if(r)var e=r.get(null);else{r=new Map,gl.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=sl.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var Bn={$$typeof:ir,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Xf(t,a,r,e,i,n,o,d,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=C2(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=C2(0),this.hiddenUpdates=C2(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Qs(t,a,r,e,i,n,o,d,h,s,f,k){return t=new Xf(t,a,r,o,h,s,f,k,d),a=1,n===!0&&(a|=24),n=ca(3,null,null,a),t.current=n,n.stateNode=t,a=ud(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},pd(n),t}function Ks(t){return t?(t=Ke,t):Ke}function Js(t,a,r,e,i,n){i=Ks(i),e.context===null?e.context=i:e.pendingContext=i,e=Vr(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=zr(t,e,a),r!==null&&(aa(r,t,a),on(r,t,a))}function lh(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function Ud(t,a){lh(t,a),(t=t.alternate)&&lh(t,a)}function Rs(t){if(t.tag===13||t.tag===31){var a=ke(t,67108864);a!==null&&aa(a,t,67108864),Ud(t,67108864)}}function dh(t){if(t.tag===13||t.tag===31){var a=pa();a=$1(a);var r=ke(t,a);r!==null&&aa(r,t,a),Ud(t,a)}}var pl=!0;function Qf(t,a,r,e){var i=V.T;V.T=null;var n=F.p;try{F.p=2,Zd(t,a,r,e)}finally{F.p=n,V.T=i}}function Kf(t,a,r,e){var i=V.T;V.T=null;var n=F.p;try{F.p=8,Zd(t,a,r,e)}finally{F.p=n,V.T=i}}function Zd(t,a,r,e){if(pl){var i=Q1(e);if(i===null)F2(t,a,e,fl,r),ch(t,e);else if(Rf(i,t,a,r,e))e.stopPropagation();else if(ch(t,e),a&4&&-1<Jf.indexOf(t)){for(;i!==null;){var n=vi(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=ae(n.pendingLanes);if(o!==0){var d=n;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var h=1<<31-ga(o);d.entanglements[1]|=h,o&=~h}Qa(n),(R&6)===0&&(il=ua()+500,Dn(0,!1))}}break;case 31:case 13:d=ke(n,2),d!==null&&aa(d,n,2),Wl(),Ud(n,2)}if(n=Q1(e),n===null&&F2(t,a,e,fl,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else F2(t,a,e,null,r)}}function Q1(t){return t=ad(t),qd(t)}var fl=null;function qd(t){if(fl=null,t=Ze(t),t!==null){var a=Hn(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=fh(a),t!==null)return t;t=null}else if(r===31){if(t=vh(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return fl=t,null}function Fs(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_p()){case Mh:return 2;case mh:return 8;case Yo:case Tp:return 32;case yh:return 268435456;default:return 32}default:return 32}}var K1=!1,Nr=null,Er=null,Dr=null,jn=new Map,Wn=new Map,Cr=[],Jf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ch(t,a){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":jn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(a.pointerId)}}function Ji(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=vi(a),a!==null&&Rs(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function Rf(t,a,r,e,i){switch(a){case"focusin":return Nr=Ji(Nr,t,a,r,e,i),!0;case"dragenter":return Er=Ji(Er,t,a,r,e,i),!0;case"mouseover":return Dr=Ji(Dr,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return jn.set(n,Ji(jn.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,Wn.set(n,Ji(Wn.get(n)||null,t,a,r,e,i)),!0}return!1}function $s(t){var a=Ze(t.target);if(a!==null){var r=Hn(a);if(r!==null){if(a=r.tag,a===13){if(a=fh(r),a!==null){t.blockedOn=a,Qc(t.priority,function(){dh(r)});return}}else if(a===31){if(a=vh(r),a!==null){t.blockedOn=a,Qc(t.priority,function(){dh(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=Q1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);u1=e,r.target.dispatchEvent(e),u1=null}else return a=vi(r),a!==null&&Rs(a),t.blockedOn=r,!1;a.shift()}return!0}function hh(t,a,r){Uo(t)&&r.delete(a)}function Ff(){K1=!1,Nr!==null&&Uo(Nr)&&(Nr=null),Er!==null&&Uo(Er)&&(Er=null),Dr!==null&&Uo(Dr)&&(Dr=null),jn.forEach(hh),Wn.forEach(hh)}function Co(t,a){t.blockedOn===a&&(t.blockedOn=null,K1||(K1=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,Ff)))}var bo=null;function uh(t){bo!==t&&(bo=t,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,function(){bo===t&&(bo=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(qd(e||r)===null)continue;break}var n=vi(r);n!==null&&(t.splice(a,3),a-=3,j1(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function pi(t){function a(h){return Co(h,t)}Nr!==null&&Co(Nr,t),Er!==null&&Co(Er,t),Dr!==null&&Co(Dr,t),jn.forEach(a),Wn.forEach(a);for(var r=0;r<Cr.length;r++){var e=Cr[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<Cr.length&&(r=Cr[0],r.blockedOn===null);)$s(r),r.blockedOn===null&&Cr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[ra]||null;if(typeof n=="function")o||uh(r);else if(o){var d=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[ra]||null)d=o.formAction;else if(qd(i)!==null)continue}else d=o.action;typeof d=="function"?r[e+1]=d:(r.splice(e,3),e-=3),uh(r)}}}function Is(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function Gd(t){this._internalRoot=t}Al.prototype.render=Gd.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(m(409));var r=a.current,e=pa();Js(r,e,t,a,null,null)};Al.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Js(t.current,2,null,t,null,null),Wl(),a[fi]=null}};function Al(t){this._internalRoot=t}Al.prototype.unstable_scheduleHydration=function(t){if(t){var a=jh();t={blockedOn:null,target:t,priority:a};for(var r=0;r<Cr.length&&a!==0&&a<Cr[r].priority;r++);Cr.splice(r,0,t),r===0&&$s(t)}};var sh=gh.version;if(sh!=="19.2.8")throw Error(m(527,sh,"19.2.8"));F.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=jp(a),t=t!==null?kh(t):null,t=t===null?null:t.stateNode,t};var $f={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ri.isDisabled&&Ri.supportsFiber))try{Sn=Ri.inject($f),sa=Ri}catch{}var Ri;Vl.createRoot=function(t,a){if(!ph(t))throw Error(m(299));var r=!1,e="",i=Gu,n=Yu,o=Xu;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=Qs(t,1,!1,null,null,r,e,null,i,n,o,Is),t[fi]=a.current,Ed(t),new Gd(a)};Vl.hydrateRoot=function(t,a,r){if(!ph(t))throw Error(m(299));var e=!1,i="",n=Gu,o=Yu,d=Xu,h=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(d=r.onRecoverableError),r.formState!==void 0&&(h=r.formState)),a=Qs(t,1,!0,a,r??null,e,i,h,n,o,d,Is),a.context=Ks(null),r=a.current,e=pa(),e=$1(e),i=Vr(e),i.callback=null,zr(r,i,e),r=e,a.current.lanes=r,Vn(a,r),Qa(a),t[fi]=a.current,Ed(t),new Al(a)};Vl.version="19.2.8"});var rg=vr((_v,ag)=>{"use strict";function tg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tg)}catch(t){console.error(t)}}tg(),ag.exports=Ps()});var Ht=Ir(Ra()),_4=Ir(rg());var yi=Ir(Ra(),1);var Yd=Ir(Ra(),1),Xd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qd=Yd.default.createContext&&Yd.default.createContext(Xd);var If=["attr","size","title"];function Pf(t,a){if(t==null)return{};var r,e,i=tv(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function tv(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function zl(){return zl=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},zl.apply(null,arguments)}function eg(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function _l(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?eg(Object(r),!0).forEach(function(e){av(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):eg(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function av(t,a,r){return(a=rv(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function rv(t){var a=ev(t,"string");return typeof a=="symbol"?a:a+""}function ev(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function ig(t){return t&&t.map((a,r)=>yi.default.createElement(a.tag,_l({key:r},a.attr),ig(a.child)))}function Y(t){return a=>yi.default.createElement(iv,zl({attr:_l({},t.attr)},a),ig(t.child))}function iv(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=Pf(t,If),d=i||r.size||"1em",h;return r.className&&(h=r.className),t.className&&(h=(h?h+" ":"")+t.className),yi.default.createElement("svg",zl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:h,style:_l(_l({color:t.color||r.color},r.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),n&&yi.default.createElement("title",null,n),t.children)};return Qd!==void 0?yi.default.createElement(Qd.Consumer,null,r=>a(r)):a(Xd)}function ng(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function og(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function lg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function dg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function cg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 14 4 9l5-5"},child:[]},{tag:"path",attr:{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"},child:[]}]})(t)}function hg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function ug(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function sg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function gg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function pg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function fg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},child:[]},{tag:"path",attr:{d:"M3 3v5h5"},child:[]}]})(t)}function vg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function kg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function xg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function Lg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function Mg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function mg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function yg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function wg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function Cg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function bg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function Bg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function jg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function Wg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function Hg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(t)}function Sg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function Ag(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function Vg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function zg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function _g(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function Tg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 18 6-6-6-6"},child:[]}]})(t)}function Ng(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function Eg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function Dg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]}]})(t)}function Og(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var Ug=Cg,Tl=og,Zg=yg,Kd=mg,qg=Bg,Gg=jg,Yg=gg,Nl=lg,Xg=Sg,Qg=bg,wi=kg;var Kg=Vg,Ci=zg,Jd=hg,Jg=Ag,Rd=ug,Rg=_g,El=Ng;var Zn=vg;var bi=ng,Fd=wg,Fg=Mg,$g=xg,Ig=Lg,Dl=Og,Pg=pg,t4=Eg,a4=dg,r4=sg,Ol=Hg,e4=Wg,i4=Dg,n4=cg,$d=fg,o4=Tg;var Lt=Ir(Ra());var H=Ir(Ra());var l4={member:Nl,coworker:a4,admin_staff:Gg,leader:r4,pastor:qg,admin:Yg},d4=["leader","pastor","admin"],Id=[{id:"work",label:"工作日誌",Icon:Ug,href:"work.html",roles:["pastor","admin_staff","admin"]},{id:"serve",label:"服事管理",Icon:Tl,href:""},{id:"venue",label:"場地預約",Icon:t4,href:""}],nv=t=>{let a=String(t||"").trim();return/^[\u4e00-\u9fff]+$/.test(a)?a.length===4?a.slice(2):a.length>=2&&a.length<=3?a.slice(1):a:a},c4=["pastor","admin_staff","admin"],h4=(t,a)=>!t.roles||t.roles.includes(a),ov=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},u4=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},s4=({active:t,shell:a})=>{let[r,e]=(0,H.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(y=>{let b=!y;try{localStorage.setItem("tbcSidebarCollapsed",b?"1":"0")}catch{}return b}),[n,o]=(0,H.useState)(!1),[d,h]=(0,H.useState)(""),s=(0,H.useRef)(null),f=a.identity||{name:"",role:"member",status:"loading"},k=l4[f.role]||Nl,p=d4.includes(f.role),x=y=>{h(`${y} 尚未開放`),clearTimeout(s.current),s.current=setTimeout(()=>h(""),2200)};return H.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},H.default.createElement("div",{className:"flex flex-col"},H.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},H.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},H.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},H.default.createElement(Dl,{size:20,strokeWidth:2})),r&&H.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},H.default.createElement(Kd,{size:18}))),!r&&H.default.createElement(H.default.Fragment,null,H.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),H.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},H.default.createElement(Kd,{size:18})))),H.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},Id.map(y=>{let b=t===y.id,D=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${b?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,g=H.default.createElement(H.default.Fragment,null,H.default.createElement(y.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&H.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},y.label));return y.href?b?H.default.createElement("div",{key:y.id,className:D,title:y.label,"aria-current":"page"},g):H.default.createElement("a",{key:y.id,href:y.href,className:D,title:y.label},g):H.default.createElement("button",{key:y.id,type:"button",onClick:()=>x(y.label),className:D,title:y.label},g)}))),H.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},H.default.createElement("button",{type:"button",onClick:()=>o(y=>!y),"aria-haspopup":"menu","aria-expanded":n,className:`tbc-sb-user flex items-center rounded-full transition-colors ${r?"justify-center w-12 h-12 mx-auto bg-slate-100 hover:bg-slate-200":"gap-3 px-4 h-12 w-full hover:bg-slate-100"}`},r?H.default.createElement("span",{className:"text-[13px] text-slate-900 truncate max-w-full px-1"},nv(f.name)):H.default.createElement(H.default.Fragment,null,H.default.createElement(k,{size:20,strokeWidth:1.75,className:`shrink-0 ${p?"text-amber-500":"text-slate-500"}`}),H.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},f.name))),n&&H.default.createElement(H.default.Fragment,null,H.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),H.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},H.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},H.default.createElement(Zg,{size:18,strokeWidth:1.75}),"登出")))),d&&H.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},d))},g4=({supabase:t,notice:a})=>{let[r,e]=(0,H.useState)(!1),[i,n]=(0,H.useState)(""),[o,d]=(0,H.useState)(""),[h,s]=(0,H.useState)(!1),[f,k]=(0,H.useState)(""),p=async y=>{if(y.preventDefault(),!i.trim()||!o||h)return;s(!0),k("");let{error:b}=await t.auth.signInWithPassword({email:ov(i),password:o});s(!1),b&&k("帳號或密碼不正確，請再試一次")},x="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return H.default.createElement("form",{onSubmit:p,className:"w-full max-w-sm mx-auto space-y-3"},H.default.createElement("input",{value:i,onChange:y=>n(y.target.value),placeholder:"帳號",autoComplete:"username",className:x}),H.default.createElement("div",{className:"relative"},H.default.createElement("input",{type:r?"text":"password",value:o,onChange:y=>d(y.target.value),placeholder:"密碼",autoComplete:"current-password",className:x+" pr-12"}),H.default.createElement("button",{type:"button",onClick:()=>e(y=>!y),title:r?"隱藏密碼":"顯示密碼","aria-label":r?"隱藏密碼":"顯示密碼",className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"},r?H.default.createElement(Ol,{size:18}):H.default.createElement(e4,{size:18}))),(f||a)&&H.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},H.default.createElement(Ci,{size:16}),f||a),H.default.createElement("button",{type:"submit",disabled:h||!i.trim()||!o,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},h?"登入中…":"登入"))},p4=({shell:t})=>{let a=t.identity||{},r=l4[a.role]||Nl,e=d4.includes(a.role);return H.default.createElement("div",{className:"flex flex-col items-center gap-3 mt-14"},H.default.createElement("p",{className:"text-sm text-slate-500"},"準備好了，開始或",H.default.createElement("button",{type:"button",onClick:t.onLogout,className:"tbc-logout ml-0.5 text-indigo-600 hover:text-indigo-700 underline underline-offset-4"},"登出")))};var lv=({shell:t})=>{let[a,r]=(0,Lt.useState)(""),e=(0,Lt.useRef)(null),i=t.identity||{},n=Id.filter(d=>h4(d,i.role)),o=d=>{r(`${d} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return Lt.default.createElement("div",{className:"relative h-[100dvh] w-full bg-white overflow-hidden"},Lt.default.createElement("main",{className:"h-full overflow-auto custom-scrollbar"},Lt.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},Lt.default.createElement("div",{className:"text-center mb-14"},Lt.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),Lt.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),Lt.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(d=>{let h=Lt.default.createElement(Lt.default.Fragment,null,Lt.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},Lt.default.createElement(d.Icon,{size:40,strokeWidth:1.75})),Lt.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},d.label)),s="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return d.href?Lt.default.createElement("a",{key:d.id,href:d.href,className:s},h):Lt.default.createElement("button",{key:d.id,type:"button",onClick:()=>o(d.label),className:s},h)})),Lt.default.createElement(p4,{shell:t}))),a&&Lt.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},f4=lv;var l=Ir(Ra());var ac=["日","一","二","三","四","五","六"],v4={m:15,l:18},tc=["pastor","admin_staff"],k4=[{id:"title",label:"工作摘要",locked:!0,sortable:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"派工",sortable:!0,w:t=>`${Math.ceil(t*4+22)}px`,min:t=>Math.ceil(t*4+22)},{id:"doer",label:"執行",sortable:!0,w:t=>`${Math.ceil(t*4+22)}px`,min:t=>Math.ceil(t*4+22)},{id:"status",label:"狀態",sortable:!0,w:t=>`${Math.ceil(t*.85*4+100)}px`,min:t=>Math.ceil(t*.85*4+100)},{id:"date",label:"日期",sortable:!0,w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(150px,1fr)",min:150},{id:"hours",label:"工時",sortable:!0,w:t=>`${Math.ceil(t*4.8+24)}px`,min:t=>Math.ceil(t*4.8+24)},{id:"priority",label:"優先順序",sortable:!0,w:t=>`${Math.ceil(t*.85*4+52)}px`,min:t=>Math.ceil(t*.85*4+52)},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],dv="Asia/Taipei",x4=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:dv,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},Zl=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},W4=t=>new Date(t).toISOString().slice(0,10),Ul=(t,a)=>W4(Zl(t)+a*864e5),H4=(t,a)=>Math.round((Zl(t)-Zl(a))/864e5),S4=t=>new Date(Zl(t)).getUTCDay(),cv=t=>Ul(t,-((S4(t)+6)%7)),Ka=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},hv=(t,a)=>{let r=H4(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${Ka(t)}（${ac[S4(t)]}）`,tag:e}},Wt=t=>t?String(t).slice(0,5):"",L4=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Wt(t.start_time).split(":").map(Number),[e,i]=Wt(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n>0?n/60:null},uv=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Wt(t.start_time).split(":").map(Number),[e,i]=Wt(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*10)/10} 小時`},M4={urgent:0,normal:1,routine:2},sv={routine:"例行",normal:"普通",urgent:"緊急"},m4={routine:"bg-violet-50 border-violet-100 text-violet-600",normal:"bg-slate-50 border-slate-200 text-slate-500",urgent:"bg-red-50 border-red-100 text-red-600"},gv={routine:"normal",normal:"urgent",urgent:"routine"},qn=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的工作"],["not your item","只有派工者可以修改這筆工作，負責人只能改狀態"],["nothing to confirm","這筆已經不是「待確認」狀態"],["nothing to return","這筆已經不是「待確認」狀態"],["assignee is not allowed","負責人必須是有權限的同工"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期的任務固定在最上面，不能搬移"],["item not in your list","這筆不在你的清單裡"],["item not found or canceled","這筆工作已被取消或不存在"],["more than one member record","這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號"],["no member record","找不到這個帳號對應的同工資料"],["no permission","沒有使用權限"],["permission denied","沒有使用權限"],["dates are required","日期必填"],["weekly rule needs","每週重複請至少選一個星期"],["monthly rule needs","每月重複請選幾號，或勾「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個週期工作"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},pv=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>ac[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 號`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},y4=({person:t,strong:a})=>l.default.createElement("span",{className:`truncate max-w-full ${a?"font-bold text-slate-900":"text-slate-700"}`},t&&t.name||"（未知）"),w4=[[15,"15分鐘"],[30,"30分鐘"],[45,"45分鐘"],[60,"1小時"],[90,"1.5小時"]],Xr=t=>{if(!t)return null;let[a,r]=t.split(":").map(Number);return a*60+r},C4=t=>`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`,Pd=t=>String(Math.round(t/60*100)/100),fv=Array.from({length:24},(t,a)=>String(a).padStart(2,"0")),vv=Array.from({length:60},(t,a)=>String(a).padStart(2,"0")),ql=({value:t,onChange:a,className:r="",autoFocus:e,id:i})=>{let[n,o]=(t||"").split(":"),d=`tbc-time-sel bg-transparent outline-none cursor-pointer text-center ${n===void 0||n===""?"text-slate-400":"text-slate-900"}`;return l.default.createElement("div",{className:`tbc-time flex items-center gap-1 ${r}`},l.default.createElement("select",{id:i,autoFocus:e,"aria-label":"時",value:n||"",className:d,onChange:h=>{let s=h.target.value;a(s===""?"":`${s}:${o||"00"}`)}},l.default.createElement("option",{value:""},"--"),fv.map(h=>l.default.createElement("option",{key:h,value:h},h))),l.default.createElement("span",{className:"text-slate-400"},":"),l.default.createElement("select",{"aria-label":"分",value:o||"",className:d,onChange:h=>{let s=h.target.value;a(s===""&&!n?"":`${n||"00"}:${s||"00"}`)}},l.default.createElement("option",{value:""},"--"),vv.map(h=>l.default.createElement("option",{key:h,value:h},h))))},b4=({id:t,options:a,selected:r,multi:e,onChange:i,bad:n,className:o=""})=>{let[d,h]=(0,l.useState)(!1),s=a.filter(k=>r.has(k.id)).map(k=>k.label),f=k=>{if(!e){i(new Set([k])),h(!1);return}let p=new Set(r);p.has(k)?p.delete(k):p.add(k),i(p)};return l.default.createElement("div",{className:`relative ${o}`},l.default.createElement("button",{id:t,type:"button",onClick:()=>h(k=>!k),className:`tbc-pick w-full flex items-center justify-between gap-2 bg-slate-50 border rounded-lg px-3 py-2.5 text-left outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${n?"border-red-400 ring-2 ring-red-200":"border-slate-200"}`},l.default.createElement("span",{className:`truncate ${s.length?"text-slate-900":"text-slate-400"}`},s.length?s.join("、"):"請選擇"),l.default.createElement(El,{size:16,className:"text-slate-400 shrink-0"})),d&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-[110]",onClick:()=>h(!1)}),l.default.createElement("div",{className:"tbc-pick-menu absolute left-0 right-0 top-full mt-1 z-[120] bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in"},a.map(k=>l.default.createElement("label",{key:k.id,className:"flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 cursor-pointer select-none"},l.default.createElement("input",{type:e?"checkbox":"radio",checked:r.has(k.id),onChange:()=>f(k.id),className:"accent-indigo-600"}),k.label)))))},B4=({value:t,placeholder:a,canEdit:r,onSave:e,className:i="",centerEmpty:n})=>{let[o,d]=(0,l.useState)(!1),[h,s]=(0,l.useState)(t||""),f=(0,l.useRef)(!1);(0,l.useEffect)(()=>{o||s(t||"")},[t,o]);let k=async()=>{if(d(!1),f.current){f.current=!1;return}let p=h.trim();p!==(t||"").trim()&&await e(p)};return o?l.default.createElement("input",{autoFocus:!0,value:h,onChange:p=>s(p.target.value),onBlur:k,onKeyDown:p=>{p.key==="Enter"&&p.currentTarget.blur(),p.key==="Escape"&&(f.current=!0,p.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):l.default.createElement("div",{onClick:()=>r&&d(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} ${!t&&n?"text-center":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?l.default.createElement("span",{className:`text-slate-300 ${n?"block text-center":""}`},a):null))},j4=({type:t,a,b:r,canEdit:e,children:i,onSave:n})=>{let[o,d]=(0,l.useState)(!1),[h,s]=(0,l.useState)(a||""),[f,k]=(0,l.useState)(r||""),p=(0,l.useRef)(!1);(0,l.useEffect)(()=>{o||(s(a||""),k(r||""))},[a,r,o]);let x=async()=>{if(d(!1),p.current){p.current=!1;return}(h!==(a||"")||f!==(r||""))&&await n(h,f)};if(!o)return l.default.createElement("div",{onClick:()=>e&&d(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let y="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return l.default.createElement("div",{tabIndex:-1,onBlur:b=>{b.currentTarget.contains(b.relatedTarget)||x()},onKeyDown:b=>{b.key==="Enter"&&x(),b.key==="Escape"&&(p.current=!0,d(!1))},className:"flex flex-col gap-1"},l.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",t==="time"?l.default.createElement(ql,{autoFocus:!0,value:h,onChange:s,className:y}):l.default.createElement("input",{autoFocus:!0,type:t,value:h,onChange:b=>s(b.target.value),className:y})),l.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",t==="time"?l.default.createElement(ql,{value:f,onChange:k,className:y}):l.default.createElement("input",{type:t,value:f,onChange:b=>k(b.target.value),className:y})))},kv=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o,people:d=[],meId:h,parent:s})=>{let f=a||{},k=t==="editRule",p=t!=="create",[x,y]=(0,l.useState)(f.title||""),[b,D]=(0,l.useState)(f.start_date||e),[g,u]=(0,l.useState)(Wt(f.start_time)),[v,L]=(0,l.useState)(f.end_date||f.start_date||e),[B,z]=(0,l.useState)(Wt(f.end_time)),[j,A]=(0,l.useState)(f.priority||(t==="createRule"?"routine":"normal")),[N,O]=(0,l.useState)(f.note||""),[ut,ia]=(0,l.useState)(null),[Qr,Aa]=(0,l.useState)(!1),[Me,_t]=(0,l.useState)(!1),[Gl,Gn]=(0,l.useState)(""),[Bi,ka]=(0,l.useState)(""),Yl=t==="createRule"||t==="editRule"||b===v,me=(C,_)=>{let J=Xr(C),$=Xr(_);if(!Yl||J===null||$===null||$<=J){ia(null),_t(!1);return}ia($-J),_t(!1)},ye=(C,_,J,$)=>{if(ka(""),!!C){if($!=="end"&&_){let Oa=Xr(_)+C;if(Oa>=1440){ka("工時超出當天，請調整開始時間或工時");return}J&&Xr(J)!==Oa&&ka("開始、結束時間和工時不符，已自動修正結束時間"),z(C4(Oa))}else if(J){let Oa=Xr(J)-C;if(Oa<0){ka("工時超出當天，請調整結束時間或工時");return}_&&Xr(_)!==Oa&&ka("開始、結束時間和工時不符，已自動修正開始時間"),u(C4(Oa))}}},Xl=C=>{C!==g&&(u(C),ka(""),Qr&&ut?ye(ut,C,B,"start"):me(C,B))},Yn=C=>{C!==B&&(z(C),ka(""),Qr&&ut?ye(ut,g,C,"end"):me(g,C))},Xn=C=>{if(ka(""),C===""){Aa(!1),_t(!1),me(g,B);return}if(C==="custom"){Aa(!0),_t(!0),Gn(ut?Pd(ut):"");return}let _=Number(C);Aa(!0),_t(!1),ia(_),ye(_,g,B,g?"start":"end")},Ql=C=>{Gn(C),Aa(!0),_t(!0);let _=parseFloat(C);if(_>0&&Math.round(_*60)>we){ia(null),ka(`工時不能超出當天，最多 ${Pd(we)} 小時`);return}if(_>0&&_<24){let J=Math.round(_*60);ia(J),ye(J,g,B,g?"start":"end")}else ia(null),ka("")},we=g?1439-Xr(g):B?Xr(B):1439,ji=Me?"custom":ut===null?"":w4.some(([C])=>C===ut)?String(ut):"custom",[Tt,Qn]=(0,l.useState)(k?f.freq:t==="createRule"?r||"weekly":"none"),[Kr,pt]=(0,l.useState)(!!f.weekdays_only),[Ea,Kl]=(0,l.useState)(f.week_days||[]),[xa,Kn]=(0,l.useState)(f.month_day?String(f.month_day):""),[Jr,Wi]=(0,l.useState)(!!f.month_last_day),[Rr,Jl]=(0,l.useState)(f.until_date||""),[Hi,Rl]=(0,l.useState)(f.is_active===void 0?!0:f.is_active),Ce=(0,l.useMemo)(()=>{let C=new Set,_=[],J=$=>{C.has($.member_id)||(C.add($.member_id),_.push({id:$.member_id,label:$.member_id===h?"我":$.name}))};return d.filter($=>$.member_id===h).forEach(J),d.filter($=>tc.includes($.role)).forEach(J),h&&!C.has(h)&&_.unshift({id:h,label:"我"}),_},[d,h]),[Si,be]=(0,l.useState)(()=>new Set(h?[h]:[])),[Ai,Jn]=(0,l.useState)(()=>new Set(h?[h]:[])),[Vi,Be]=(0,l.useState)(""),[La,Fr]=(0,l.useState)(""),Nt=(C,_)=>{Be(C),Fr(_),setTimeout(()=>{let J=document.getElementById(_);if(J){J.scrollIntoView({block:"center",behavior:"smooth"});try{J.focus({preventScroll:!0})}catch{}}},0)},Gt="text-xs font-medium text-slate-500",Da="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",je=C=>Kl(_=>_.includes(C)?_.filter(J=>J!==C):[..._,C]),Rn=()=>{if(Be(""),Fr(""),!x.trim())return Nt(s?"輸入子工作":"輸入工作摘要","tbc-f-title");if(t==="create"&&Si.size===0)return Nt("請選擇派工的人","tbc-f-disp");if(t==="create"&&Ai.size===0)return Nt("請至少選一位執行的人","tbc-f-doer");if(!b)return Nt("開始日期必填","tbc-f-start");if(ut&&!g&&!B)return Nt("填寫開始時間或結束時間","tbc-f-stime");if(Tt==="none"&&(!v||v<b))return Nt("結束日期不能早於開始日期","tbc-f-end");if(Tt==="weekly"&&Ea.length===0)return Nt("每週重複請至少選一個星期","tbc-f-week");if(Tt==="monthly"&&!xa&&!Jr)return Nt("每月重複請選幾號，或勾「每月最後一天」","tbc-f-month");if(Tt!=="none"&&Rr&&Rr<b)return Nt("重複的結束日不能早於開始日","tbc-f-until");n({title:x.trim(),startDate:b,startTime:g||null,endDate:Tt==="none"?v:b,endTime:B||null,priority:j,note:N.trim()||null,repeat:Tt,weekdaysOnly:Tt==="daily"&&Kr,weekDays:Tt==="weekly"?Ea:[],monthDay:Tt==="monthly"&&xa?Number(xa):null,monthLast:Tt==="monthly"&&Jr,untilDate:Rr||null,isActive:Hi,assigneeIds:[...Ai],dispatcherId:[...Si][0]||h})};return l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},k?l.default.createElement(l.default.Fragment,null,l.default.createElement(Zn,{className:"text-indigo-600",size:20})," 修改週期工作"):t==="createRule"?l.default.createElement(l.default.Fragment,null,l.default.createElement(Zn,{className:"text-indigo-600",size:20})," 新增週期工作"):l.default.createElement(l.default.Fragment,null,l.default.createElement(wi,{className:"text-indigo-600",size:20})," ",s?"新增子工作":"新增")),l.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},l.default.createElement(bi,{size:20}))),l.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Gt},s?"子工作":"工作摘要",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement("input",{id:"tbc-f-title",autoFocus:!0,value:x,onChange:C=>y(C.target.value),placeholder:"簡短描述工作內容",className:`${Da} ${La==="tbc-f-title"?"!border-red-400 ring-2 ring-red-200":""}`})),t==="create"&&Ce.length>0&&l.default.createElement("div",{className:"grid grid-cols-2 gap-4"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Gt},"派工",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement(b4,{id:"tbc-f-disp",options:Ce,selected:Si,onChange:be,bad:La==="tbc-f-disp"})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Gt},"執行",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement(b4,{id:"tbc-f-doer",options:Ce,selected:Ai,multi:!0,onChange:Jn,bad:La==="tbc-f-doer"}))),p&&l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Gt},"重複"),l.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([C])=>!((k||t==="createRule")&&C==="none")).map(([C,_])=>l.default.createElement("button",{key:C,type:"button",onClick:()=>Qn(C),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${Tt===C?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},_))),Tt==="daily"&&l.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},l.default.createElement("input",{type:"checkbox",checked:Kr,onChange:C=>pt(C.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),Tt==="weekly"&&l.default.createElement("div",{id:"tbc-f-week",tabIndex:-1,className:`flex gap-2 pt-1 flex-wrap outline-none rounded-lg ${La==="tbc-f-week"?"ring-2 ring-red-200":""}`},[1,2,3,4,5,6,7].map(C=>l.default.createElement("button",{key:C,type:"button",onClick:()=>je(C),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${Ea.includes(C)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},ac[C%7]))),Tt==="monthly"&&l.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},l.default.createElement("select",{id:"tbc-f-month",value:xa,onChange:C=>Kn(C.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},l.default.createElement("option",{value:""},"不指定號數"),Array.from({length:31},(C,_)=>_+1).map(C=>l.default.createElement("option",{key:C,value:C},C," 號"))),l.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},l.default.createElement("input",{type:"checkbox",checked:Jr,onChange:C=>Wi(C.target.checked),className:"accent-indigo-600"})," 每月最後一天"),xa&&Number(xa)>28&&!Jr&&l.default.createElement("span",{className:"text-xs text-amber-600"},xa," 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」"))),l.default.createElement("div",{className:"grid grid-cols-2 gap-4"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Gt},"開始日期"),l.default.createElement("input",{id:"tbc-f-start",type:"date",value:b,onChange:C=>{D(C.target.value),v<C.target.value&&L(C.target.value)},className:`${Da} ${La==="tbc-f-start"?"!border-red-400 ring-2 ring-red-200":""}`})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Gt},"開始時間（選填）"),l.default.createElement(ql,{id:"tbc-f-stime",value:g,onChange:Xl,className:`${Da} !w-auto min-w-[8rem]`})),Tt==="none"?l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Gt},"結束日期"),l.default.createElement("input",{id:"tbc-f-end",type:"date",value:v,min:b,onChange:C=>L(C.target.value),className:`${Da} ${La==="tbc-f-end"?"!border-red-400 ring-2 ring-red-200":""}`})):l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Gt},"結束日期（選填）"),l.default.createElement("input",{id:"tbc-f-until",type:"date",value:Rr,min:b,onChange:C=>Jl(C.target.value),className:Da})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Gt},"結束時間（選填）"),l.default.createElement(ql,{value:B,onChange:Yn,className:`${Da} !w-auto min-w-[8rem]`})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Gt},"優先順序"),l.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["routine","例行"],["normal","普通"],["urgent","緊急"]].map(([C,_])=>l.default.createElement("button",{key:C,type:"button",onClick:()=>A(C),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${j===C?C==="urgent"?"bg-white text-red-600 shadow-sm":C==="routine"?"bg-white text-violet-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},_)))),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Gt},"工時（選填）"),l.default.createElement("div",{className:"flex items-center gap-2"},l.default.createElement("select",{id:"tbc-f-dur","aria-label":"工時",value:ji,onChange:C=>Xn(C.target.value),className:`${Da} !w-auto min-w-[8rem] cursor-pointer ${ji?"text-slate-900":"text-slate-400"}`},l.default.createElement("option",{value:""},"--"),w4.map(([C,_])=>l.default.createElement("option",{key:C,value:C,disabled:C>we},_)),l.default.createElement("option",{value:"custom"},"自訂")),ji==="custom"&&l.default.createElement("label",{className:"flex items-center gap-1.5 text-sm text-slate-500 whitespace-nowrap"},l.default.createElement("input",{"aria-label":"自訂工時（小時）",type:"number",min:"0.25",max:Math.floor(we/60*100)/100,step:"0.25",value:Me?Gl:ut?Pd(ut):"",onChange:C=>Ql(C.target.value),className:"tbc-dur-custom w-20 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"}),"小時")))),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Gt},"備註"),l.default.createElement("textarea",{value:N,onChange:C=>O(C.target.value),rows:2,className:Da})),Bi&&l.default.createElement("div",{className:"tbc-hint bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-lg px-4 py-3"},Bi),Vi&&l.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},l.default.createElement(Ci,{size:16})," ",Vi)),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},l.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),l.default.createElement("button",{onClick:Rn,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},k?"儲存":Tt==="none"?"新增":"儲存"))))},xv=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,l.useState)(x4()),[o,d]=(0,l.useState)(null),[h,s]=(0,l.useState)([]),[f,k]=(0,l.useState)(""),[p,x]=(0,l.useState)([]),[y,b]=(0,l.useState)(!0),[D,g]=(0,l.useState)({type:"",text:""}),[u,v]=(0,l.useState)(null),[L,B]=(0,l.useState)("mine"),[z,j]=(0,l.useState)("today"),[A,N]=(0,l.useState)(""),[O,ut]=(0,l.useState)(""),[ia,Qr]=(0,l.useState)(new Set),[Aa,Me]=(0,l.useState)(""),[_t,Gl]=(0,l.useState)({col:null,dir:"asc"}),Gn=c=>Gl(M=>M.col!==c?{col:c,dir:"asc"}:M.dir==="asc"?{col:c,dir:"desc"}:{col:null,dir:"asc"}),[Bi,ka]=(0,l.useState)(()=>{try{let c=localStorage.getItem("tbcWorkFont");return v4[c]?c:"m"}catch{return"m"}}),Yl=c=>{ka(c);try{localStorage.setItem("tbcWorkFont",c)}catch{}},[me,ye]=(0,l.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),Xl=c=>ye(M=>{let w=M.includes(c)?M.filter(S=>S!==c):[...M,c];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(w))}catch{}return w}),[Yn,Xn]=(0,l.useState)(!1),[Ql,we]=(0,l.useState)(""),[ji,Tt]=(0,l.useState)(""),[Qn,Kr]=(0,l.useState)(!1),[pt,Ea]=(0,l.useState)(null),[Kl,xa]=(0,l.useState)(!1),[Kn,Jr]=(0,l.useState)(!1),Wi=(0,l.useRef)(!1),[Rr,Jl]=(0,l.useState)([]),[Hi,Rl]=(0,l.useState)(()=>new Set),[Ce,Si]=(0,l.useState)([]),[be,Ai]=(0,l.useState)([]),[Jn,Vi]=(0,l.useState)([]),Be=(0,l.useRef)("mine"),[La,Fr]=(0,l.useState)(null),[Nt,Gt]=(0,l.useState)(null),[Da,je]=(0,l.useState)(null),[Rn,C]=(0,l.useState)(null),_=v4[Bi],J=_+3,$=i.date,Oa=(0,l.useRef)(null),zi=(0,l.useRef)(0),Ja=(c,M)=>{g({type:c,text:M}),clearTimeout(Oa.current),Oa.current=setTimeout(()=>g({type:"",text:""}),3200)},Mt=async(c,M)=>{let{data:w,error:S}=await a.rpc(c,M||{});if(S)throw S;return w},Yt=async(c,M)=>{try{let w=await c();return await Fl(!0),Ni(),Be.current==="notice"&&lc(),M&&Ja("success",typeof M=="function"?M(w):M),w}catch(w){Ja("error",qn(w)),await Fl(!0);return}},Et=(0,l.useMemo)(()=>{if(z==="today")return{start:$,end:$};if(z==="month"){let[w,S]=$.split("-").map(Number);return{start:`${w}-${String(S).padStart(2,"0")}-01`,end:W4(Date.UTC(w,S,0))}}if(z==="week"){let w=cv($);return{start:w,end:Ul(w,6)}}let c=A||$,M=O||c;return c<=M?{start:c,end:M}:{start:M,end:c}},[z,A,O,$]);(0,l.useEffect)(()=>{let c=setInterval(()=>n(M=>{let w=x4();return w.date===M.date&&w.time===M.time?M:w}),3e4);return()=>clearInterval(c)},[]);let T4=async()=>{try{let c=await Mt("work_current_member"),M=await Mt("work_list_people");return d(c),s(M||[]),Qr(new Set((M||[]).filter(w=>tc.includes(w.role)).map(w=>w.member_id))),k(""),!0}catch(c){return k(qn(c)),!1}},Fl=async c=>{let M=++zi.current;c||b(!0);try{let w=r&&r.fetchAllData?r.fetchAllData:P=>P(),S=P=>{if(P&&P.error)throw P.error;return P&&P.data||[]},K=S(await w(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).is("parent_id",null).lte("start_date",Et.end).gte("end_date",Et.start))),St=S(await w(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).is("parent_id",null).lte("end_date",$).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),Xt=new Set(K.map(P=>P.id)),mt=St.map(P=>P.id).filter(P=>!Xt.has(P)),na=[];if(mt.length&&(na=S(await w(()=>a.from("work_items").select("*, work_assignees(*)").in("id",mt)))),M!==zi.current)return;let U=[];for(let P of[...K,...na]){let{work_assignees:Kt,...oa}=P;for(let X of Kt||[])U.push({key:X.id,item:{...oa,assigneeCount:(Kt||[]).length},a:X})}x(U);let W=[...new Set(U.map(P=>P.item.id))],I=[];if(W.length){let P=S(await w(()=>a.from("work_items").select("*, work_assignees(*)").in("parent_id",W).is("canceled_at",null)));for(let Kt of P){let{work_assignees:oa,...X}=Kt;for(let tt of oa||[])I.push({key:tt.id,item:{...X,assigneeCount:(oa||[]).length},a:tt})}}if(M!==zi.current)return;Si(I)}catch(w){M===zi.current&&Ja("error","讀取失敗："+qn(w))}finally{M===zi.current&&!c&&b(!1)}};(0,l.useEffect)(()=>{T4()},[]),(0,l.useEffect)(()=>{o&&Fl(!1)},[o,Et.start,Et.end,$]),(0,l.useEffect)(()=>{z==="custom"&&!A&&(N($),ut(Ul($,6)))},[z]);let We=(0,l.useMemo)(()=>{let c={};return h.forEach(M=>{c[M.member_id]={name:M.name,role:M.role}}),c},[h]),yv=o?We[o]:null,$l=(0,l.useMemo)(()=>h.filter(c=>tc.includes(c.role)),[h]),Il=c=>{let M=c.a.status==="done",w=c.a.status==="awaiting_confirm",S=!!c.a.skipped_at||c.a.status==="on_hold",K=Wt(c.item.end_time),St=!M&&!w&&!S&&(c.item.end_date<i.date||c.item.end_date===i.date&&K&&K<i.time);return{...c,done:M,awaiting:w,skipped:S,overdue:St,isMine:c.a.member_id===o,isCreator:c.item.creator_member_id===o,canManage:c.item.creator_member_id===o||c.item.entered_by===o,isRoutine:c.item.assigneeCount===1&&c.item.creator_member_id===c.a.member_id,isRecurring:!!c.item.recurring_rule_id,person:We[c.a.member_id],dispatcher:We[c.item.creator_member_id]}},{overdueRows:Fn,groups:Pl,total:ec}=(0,l.useMemo)(()=>{let c=p.map(Il),M=Aa.trim().toLowerCase(),w=W=>!M||[W.item.title,W.item.note,W.person&&W.person.name,W.dispatcher&&W.dispatcher.name].some(I=>I&&String(I).toLowerCase().includes(M)),S=c.filter(W=>(L==="mine"?W.isMine:L==="tome"?W.isMine&&!W.isCreator:L==="dispatched"?W.canManage&&!W.isMine:ia.has(W.a.member_id))&&w(W)),K=S.filter(W=>W.overdue).sort((W,I)=>(W.item.end_date+Wt(W.item.end_time)).localeCompare(I.item.end_date+Wt(I.item.end_time))||(W.person&&W.person.name||"").localeCompare(I.person&&I.person.name||"")),St=S.filter(W=>!W.overdue&&W.item.start_date<=Et.end&&W.item.end_date>=Et.start),Xt={};St.forEach(W=>{(Xt[W.item.start_date]=Xt[W.item.start_date]||[]).push(W)});let mt=Object.keys(Xt).sort().map(W=>{let I=Xt[W].sort((Kt,oa)=>{if(L!=="all")return Kt.a.sort_order-oa.a.sort_order||String(Kt.a.created_at).localeCompare(String(oa.a.created_at));let X=Wt(Kt.item.start_time)||"99:99",tt=Wt(oa.item.start_time)||"99:99";return X.localeCompare(tt)||(Kt.person&&Kt.person.name||"").localeCompare(oa.person&&oa.person.name||"")}),P=L==="mine"&&W>=Et.start&&!M;return{date:W,rows:I,canMove:P}}),na=K,U=mt;if(_t.col){let W=_t.dir==="asc"?1:-1,I=(X,tt)=>String(X||"").localeCompare(String(tt||""),"zh-Hant"),P=X=>X.done?3:X.awaiting?2:X.skipped?1:0,oa={title:(X,tt)=>I(X.item.title,tt.item.title),who:(X,tt)=>I(X.dispatcher&&X.dispatcher.name,tt.dispatcher&&tt.dispatcher.name),doer:(X,tt)=>I(X.person&&X.person.name,tt.person&&tt.person.name),status:(X,tt)=>P(X)-P(tt),priority:(X,tt)=>(M4[X.item.priority]??1)-(M4[tt.item.priority]??1),hours:(X,tt)=>{let $r=L4(X.item),Di=L4(tt.item);return $r==null&&Di==null?0:$r==null?2*W:Di==null?-2*W:$r-Di},date:(X,tt)=>(X.item.start_date+Wt(X.item.start_time)).localeCompare(tt.item.start_date+Wt(tt.item.start_time))}[_t.col];if(oa){let X=tt=>[...tt].sort(($r,Di)=>W*oa($r,Di));_t.col==="date"?(na=X(K),U=[...mt].sort((tt,$r)=>W*tt.date.localeCompare($r.date))):(na=X(K),U=mt.map(tt=>({...tt,rows:X(tt.rows)})))}U=U.map(X=>({...X,canMove:!1}))}return{overdueRows:na,groups:U,total:K.length+St.length}},[p,i,o,L,ia,Et,We,Aa,_t]),$n=(0,l.useMemo)(()=>{let c={};return Ce.map(Il).sort((M,w)=>(M.item.start_date+Wt(M.item.start_time)).localeCompare(w.item.start_date+Wt(w.item.start_time))||String(M.item.created_at).localeCompare(String(w.item.created_at))).forEach(M=>{(c[M.item.parent_id]=c[M.item.parent_id]||[]).push(M)}),c},[Ce,i,o,We]),In=(0,l.useMemo)(()=>{let c={};return be.forEach(M=>{M.item_id&&!M.read_at&&!(M.item_id in c)&&(c[M.item_id]=M.created_at)}),Jn.map(Il).filter(M=>(M.canManage||M.isMine)&&M.item.id in c).map(M=>({...M,notice:!0})).sort((M,w)=>String(c[w.item.id]||"").localeCompare(String(c[M.item.id]||"")))},[Jn,be,o,We,i]),_i=k4.filter(c=>c.locked||!me.includes(c.id)),N4=c=>typeof c.w=="function"?c.w(_):c.w,E4=c=>typeof c.min=="function"?c.min(_):c.min,t2=`56px ${_i.map(N4).join(" ")}`,D4=56+_i.reduce((c,M)=>c+E4(M),0)+16,Ti=(c,M,w)=>Yt(()=>{let S={...c.item,...M};return Mt("work_update_routine",{p_item_id:S.id,p_title:S.title,p_start_date:S.start_date,p_start_time:S.start_time||null,p_end_date:S.end_date,p_end_time:S.end_time||null,p_priority:S.priority||"normal",p_note:S.note||null,p_meeting_flag:null})},w),O4=(c,M,w)=>{if(!M||!w){Ja("error","日期必填");return}let S=M,K=w;if(M!==c.item.start_date&&w===c.item.end_date&&(K=Ul(M,H4(c.item.end_date,c.item.start_date))),K<S){Ja("error","結束日期不能早於開始日期");return}let St=!(S<=Et.end&&K>=Et.start);return Ti(c,{start_date:S,end_date:K},St?`已改到 ${Ka(S)}（目前顯示範圍看不到，切換範圍就會出現）`:null)},U4=(c,M,w)=>Ti(c,{start_time:M||null,end_time:w||null}),Z4=(c,M)=>{if(!M){Ja("error","任務名稱不能空白");return}return Ti(c,{title:M})},wv=c=>Yt(()=>Mt("work_complete",{p_item_id:c.item.id,p_note:null}),"已完成"),q4=(c,M)=>Yt(()=>Mt("work_set_status",{p_item_id:c.item.id,p_status:M}),M==="done"&&c.item.creator_member_id!==o?"完成回報，等待派工者確認":"狀態已更新"),G4=c=>Yt(()=>Mt("work_confirm",{p_assignee_id:c.a.id}),"已確認完成"),[a2,r2]=(0,l.useState)(null),[ic,Pn]=(0,l.useState)(null),[nc,oc]=(0,l.useState)(""),Y4=c=>{oc(""),Pn(c)},X4=async()=>{let c=ic;Pn(null),await Yt(()=>Mt("work_return",{p_assignee_id:c.a.id,p_note:nc.trim()||null}),"已退回")},Cv=(c,M)=>Yt(()=>Mt("work_move",{p_item_id:c.item.id,p_where:M})),Q4=c=>Yt(()=>Mt("work_copy",{p_item_id:c.item.id}),"複製成功"),K4=c=>v({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或擱置不會刪除，標記「取消」並保留紀錄`,onConfirm:async()=>{v(null),await Yt(()=>Mt("work_delete",{p_item_id:c.item.id}),M=>M==="canceled"?"刪除資料，保留原進度紀錄":"已刪除")}}),bv=async()=>{let c=Ql.trim();if(!c||Qn)return;Kr(!0);let M=ji||$,w=await Yt(()=>Mt("work_create_routine",{p_title:c,p_start_date:M,p_end_date:M}));if(Kr(!1),w){we("");let S=M<=Et.end&&M>=Et.start;Ja("success",S?"已新增":`已新增到 ${Ka(M)}（目前顯示範圍看不到，切換範圍就會出現）`)}},J4=async c=>{Kr(!0);let M;if(pt.mode==="editRule")M=await Yt(()=>Mt("work_update_rule",{p_rule_id:pt.rule.id,p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:c.isActive}),"週期工作已儲存（只影響之後產生的工作）"),M!==void 0&&await to();else if(c.repeat==="none"&&c.assigneeIds&&(pt.parent||!(c.assigneeIds.length===1&&c.assigneeIds[0]===o&&c.dispatcherId===o))){let w=c.assigneeIds.some(S=>S!==o);M=await Yt(()=>Mt("work_assign_create",{p_title:c.title,p_assignee_ids:c.assigneeIds,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_dispatcher_id:c.dispatcherId,p_parent_id:pt.parent?pt.parent.id:null}),w?"派工完成，送出提醒":pt.parent?"子工作已新增":"已新增"),M!==void 0&&pt.parent&&Rl(S=>new Set(S).add(pt.parent.id))}else c.repeat==="none"?M=await Yt(()=>Mt("work_create_routine",{p_title:c.title,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已新增"):M=await Yt(()=>Mt("work_create_rule",{p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已建立週期工作，之後會在凌晨自動出現在清單");Kr(!1),M!==void 0&&Ea(null)},to=async()=>{try{let{data:c,error:M}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(M)throw M;Jl(c||[])}catch(c){Ja("error","讀取週期工作失敗："+qn(c))}},Ni=async()=>{try{let c=await Mt("work_notifications_list")||[];return Ai(c),c}catch{return[]}};(0,l.useEffect)(()=>{if(!o)return;Ni();let c=setInterval(Ni,6e4);return()=>clearInterval(c)},[o]);let R4=be.filter(c=>!c.read_at),e2=new Set(R4.map(c=>c.item_id||c.id)).size,F4=async()=>{try{await Mt("work_notifications_read",{p_ids:null}),await Ni()}catch{}},lc=async c=>{let M=[...new Set((c||be).filter(w=>!w.read_at).map(w=>w.item_id).filter(Boolean))];if(!M.length){Vi([]);return}try{let{data:w,error:S}=await a.from("work_items").select("*, work_assignees(*)").in("id",M).is("canceled_at",null);if(S)throw S;let K=[];for(let St of w||[]){let{work_assignees:Xt,...mt}=St;for(let na of Xt||[])K.push({key:na.id,item:{...mt,assigneeCount:(Xt||[]).length},a:na})}Vi(K)}catch(w){Ja("error","讀取提醒失敗："+qn(w))}},Ei=async c=>{let M=Be.current;if(Be.current=c,B(c),c==="notice"){let w=await Ni();await lc(w)}else M==="notice"&&await F4()},dc=async()=>{xa(!0),await to()};(0,l.useEffect)(()=>{!pt&&Wi.current&&(Wi.current=!1,dc())},[pt]);let $4=async c=>{await Yt(()=>Mt("work_update_rule",{p_rule_id:c.id,p_title:c.title,p_freq:c.freq,p_weekdays_only:c.weekdays_only,p_week_days:c.week_days,p_month_day:c.month_day,p_month_last_day:c.month_last_day,p_start_date:c.start_date,p_until_date:c.until_date,p_start_time:c.start_time,p_end_time:c.end_time,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:!c.is_active}),c.is_active?"已暫停":"已啟用")!==void 0&&await to()},I4=c=>v({title:"警告",confirmText:"刪除",message:`刪除週期工作？
刪除未來排程，保留歷史紀錄`,onConfirm:async()=>{v(null),await Yt(()=>Mt("work_delete_rule",{p_rule_id:c.id}),"週期工作已刪除")!==void 0&&await to()}}),P4=async(c,M)=>{let w=Nt;if(Gt(null),C(null),je(null),!w||w.date!==c.date||w.key===M.key)return;let S=c.rows.filter(mt=>!mt.overdue),K=S.findIndex(mt=>mt.key===w.key),St=S.findIndex(mt=>mt.key===M.key),Xt=c.rows.find(mt=>mt.key===w.key);!Xt||K<0||St<0||await Yt(()=>Mt("work_move_to",{p_item_id:Xt.item.id,p_target_item_id:M.item.id,p_after:K<St}))},He="flex items-center bg-slate-100 p-1 rounded-full shrink-0",Va=c=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,za=La?[...Fn,...Pl.flatMap(c=>c.rows),...In,...Object.values($n).flat()].find(c=>c.key===La.key):null,ao=za?Pl.find(c=>c.rows.some(M=>M.key===za.key)):null,cc=(c,M)=>{let w=c.canManage,S=c.isMine&&c.isRoutine,K=M?M.rows.filter(U=>!U.overdue):[],St=!!M&&M.canMove&&S&&!c.overdue,Xt=Rn===c.key&&Nt&&Nt.key!==c.key,mt=c.done||c.skipped,na=U=>{switch(U.id){case"title":return l.default.createElement("div",{key:U.id,className:"min-w-0 w-full flex items-start gap-1.5"},!c.item.parent_id&&($n[c.item.id]||[]).length>0&&l.default.createElement("button",{type:"button",onClick:()=>Rl(W=>{let I=new Set(W);return I.has(c.item.id)?I.delete(c.item.id):I.add(c.item.id),I}),"aria-label":Hi.has(c.item.id)?"收合子工作":"展開子工作",className:"tbc-expand mt-0.5 shrink-0 inline-flex items-center gap-0.5 rounded-md px-1 py-0.5 text-slate-500 hover:bg-slate-100"},Hi.has(c.item.id)?l.default.createElement(El,{size:J}):l.default.createElement(o4,{size:J}),l.default.createElement("span",{className:"text-[0.75em] px-1.5 rounded bg-slate-100 text-slate-600"},new Set($n[c.item.id].map(W=>W.item.id)).size)),l.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},c.a.status==="pending"&&c.a.return_note&&l.default.createElement("button",{type:"button",onClick:()=>r2(c),className:"tbc-return-tag inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-amber-200 bg-amber-50 text-amber-700 font-bold hover:brightness-95 cursor-pointer whitespace-nowrap"},l.default.createElement($d,{size:Math.round(_*.8)}),"退回"),c.isRecurring&&l.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},l.default.createElement(Zn,{size:Math.round(_*.95)})),c.overdue&&l.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},l.default.createElement(Jd,{size:Math.round(_*.8)})," 逾期")),l.default.createElement("div",{className:"min-w-0 flex-1"},l.default.createElement(B4,{value:c.item.title,placeholder:"工作摘要",canEdit:w,onSave:W=>Z4(c,W),className:`font-medium ${mt?"text-slate-400 line-through":c.overdue?"text-red-600":"text-slate-900"}`})));case"who":return l.default.createElement("div",{key:U.id,className:"min-w-0"},l.default.createElement(y4,{person:c.dispatcher,size:J}));case"doer":return l.default.createElement("div",{key:U.id,className:"min-w-0"},l.default.createElement(y4,{person:c.person,size:J}));case"date":{let W=c.item.start_date!==c.item.end_date;return l.default.createElement("div",{key:U.id,className:`min-w-0 ${c.overdue?"text-red-600":"text-slate-700"}`},l.default.createElement(j4,{type:"date",a:c.item.start_date,b:c.item.end_date,canEdit:w,onSave:(I,P)=>O4(c,I,P)},W?`${Ka(c.item.start_date)} → ${Ka(c.item.end_date)}`:Ka(c.item.start_date)))}case"time":{let W=Wt(c.item.start_time),I=Wt(c.item.end_time);return l.default.createElement("div",{key:U.id,className:"min-w-0 text-slate-700"},l.default.createElement(j4,{type:"time",a:W,b:I,canEdit:w,onSave:(P,Kt)=>U4(c,P,Kt)},W||I?`${W||"—"} ~ ${I||"—"}`:l.default.createElement("span",{className:"text-slate-300"},w?"時間設定":"")))}case"hours":return l.default.createElement("div",{key:U.id,className:"text-slate-500 text-[0.9em]"},uv(c.item)||"");case"priority":return l.default.createElement("div",{key:U.id},l.default.createElement("button",{type:"button",disabled:!w,onClick:()=>Ti(c,{priority:gv[c.item.priority]||"normal"}),title:w?"點一下切換":"",className:`tbc-prio text-[0.75em] px-2 py-0.5 rounded border font-bold ${m4[c.item.priority]||m4.normal} ${w?"hover:brightness-95 cursor-pointer":"cursor-default"}`},sv[c.item.priority]||"普通"));case"note":return l.default.createElement("div",{key:U.id,className:"min-w-0 w-full"},l.default.createElement(B4,{value:c.item.note,placeholder:"新增備註",centerEmpty:!0,canEdit:w,onSave:W=>Ti(c,{note:W||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let W=c.done?"done":c.awaiting?"awaiting":c.skipped?"on_hold":"pending",I=W==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":W==="awaiting"?"bg-sky-50 border-sky-200 text-sky-700":W==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600",P={pending:"待處理",done:"完成",on_hold:"擱置",awaiting:"待確認"}[W];return c.awaiting&&c.isCreator&&!c.isMine?l.default.createElement("div",{key:U.id,className:"flex items-center gap-1.5 tbc-review whitespace-nowrap"},l.default.createElement("button",{type:"button",onClick:()=>G4(c),className:"h-8 px-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},"確認"),l.default.createElement("button",{type:"button",onClick:()=>Y4(c),className:"h-8 px-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},"退回")):c.isMine?l.default.createElement("select",{key:U.id,value:W,onChange:Kt=>q4(c,Kt.target.value),"aria-label":"狀態",title:"點一下改變狀態",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${I}`},l.default.createElement("option",{value:"pending"},"待處理"),l.default.createElement("option",{value:"done"},"完成"),l.default.createElement("option",{value:"on_hold"},"擱置"),W==="awaiting"&&l.default.createElement("option",{value:"awaiting",disabled:!0},"待確認")):l.default.createElement("span",{key:U.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${I}`},P)}default:return null}};return l.default.createElement("div",{key:c.key,draggable:St&&Da===c.key,onDragStart:U=>{Gt({key:c.key,date:M.date}),U.dataTransfer.effectAllowed="move";try{U.dataTransfer.setData("text/plain",c.key)}catch{}},onDragOver:U=>{Nt&&M&&Nt.date===M.date&&!c.overdue&&(U.preventDefault(),Rn!==c.key&&C(c.key))},onDrop:U=>{U.preventDefault(),M&&P4(M,c)},onDragEnd:()=>{Gt(null),C(null),je(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors
                    ${c.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Nt&&Nt.key===c.key?"opacity-40":""}
                    ${Xt?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:t2}},l.default.createElement("div",{className:"flex items-center gap-0.5 px-2"},St?l.default.createElement("span",{onMouseDown:()=>je(c.key),onMouseUp:()=>je(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},l.default.createElement(Qg,{size:J})):l.default.createElement("span",{style:{width:J}}),w||c.isMine&&!c.item.parent_id?l.default.createElement("button",{onClick:U=>{let W=U.currentTarget.getBoundingClientRect();Fr({key:c.key,x:Math.min(W.left,window.innerWidth-220),y:Math.min(W.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},l.default.createElement(Xg,{size:J})):l.default.createElement("span",{style:{width:J+8}})),_i.map(U=>{let W=U.id==="title"||U.id==="note";return l.default.createElement("div",{key:U.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${W?"[&>*]:w-full":"justify-center text-center"}`},na(U))}))},hc=new Set,uc=c=>Ea({mode:"create",parent:c.item,initial:{start_date:c.item.start_date,end_date:c.item.end_date}}),i2=(c,M)=>{let w=c.item.parent_id?[]:$n[c.item.id]||[],S=w.length>0&&Hi.has(c.item.id)&&!hc.has(c.item.id);return S&&hc.add(c.item.id),l.default.createElement(l.default.Fragment,{key:c.key},cc(c,M),S&&l.default.createElement("div",{className:"tbc-subs bg-slate-50/70 border-b border-slate-200 pl-8 pr-3 py-2"},l.default.createElement("div",{className:"rounded-lg border border-slate-200 bg-white overflow-hidden"},l.default.createElement("div",{className:"grid bg-slate-100 border-b border-slate-200 text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:t2}},l.default.createElement("span",{className:"py-1.5"}),_i.map(K=>l.default.createElement("span",{key:K.id,className:"py-1.5 px-2 border-l border-slate-200 text-center whitespace-nowrap"},K.id==="title"?"子工作":K.label))),w.map(K=>cc(K,null)),(c.canManage||c.isMine)&&l.default.createElement("button",{type:"button",onClick:()=>uc(c),className:"tbc-add-sub w-full text-left px-4 py-2 text-[0.9em] text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-colors"},"+ 新增子工作"))))};return l.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:_}},l.default.createElement(s4,{active:"work",shell:e}),l.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},l.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},l.default.createElement("div",{className:"flex items-center gap-4 min-w-0"},l.default.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:_*1.45}},"工作日誌"),l.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},l.default.createElement(Pg,{size:16,className:"text-slate-400 shrink-0"}),l.default.createElement("input",{type:"text",value:Aa,onChange:c=>Me(c.target.value),onKeyDown:c=>{c.key==="Escape"&&Me("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),Aa&&l.default.createElement("button",{type:"button",onClick:()=>Me(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},l.default.createElement(bi,{size:14})))),l.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},l.default.createElement("button",{onClick:()=>Ea({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},l.default.createElement(wi,{size:16}),"新增"),l.default.createElement("div",{className:He},l.default.createElement("button",{onClick:dc,className:Va(!1)},l.default.createElement(wi,{size:14,className:"text-slate-500"}),"週期工作")),l.default.createElement("div",{className:"relative"},l.default.createElement("button",{onClick:()=>Xn(c=>!c),className:`${He} !p-1.5`},l.default.createElement("span",{className:Va(Yn)},l.default.createElement(Ol,{size:14,className:"text-slate-500"}),"隱藏")),Yn&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Xn(!1)}),l.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},k4.filter(c=>!c.locked).map(c=>l.default.createElement("label",{key:c.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${c.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},l.default.createElement("input",{type:"checkbox",disabled:c.locked,checked:c.locked||!me.includes(c.id),onChange:()=>Xl(c.id),className:"accent-indigo-600"}),c.label,c.locked&&l.default.createElement(Fd,{size:11})))))),l.default.createElement("div",{className:He,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([c,M,w])=>l.default.createElement("button",{key:c,onClick:()=>Yl(c),title:M,"aria-label":`文字${M}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${Bi===c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:w}},"A"))))),f?l.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},l.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},l.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},l.default.createElement(Fd,{size:30})),l.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),l.default.createElement("p",{className:"text-slate-500 font-normal"},f),l.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧者、行政與管理員。"))):l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 relative z-[15] shrink-0 space-y-3"},l.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},(e2>0||L==="notice")&&l.default.createElement("button",{onClick:()=>Ei("notice"),"aria-label":"提醒",title:"提醒",className:`tbc-bell relative h-11 w-11 rounded-full flex items-center justify-center transition-colors ${L==="notice"?"bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-200":"bg-slate-100 hover:bg-slate-200 text-slate-600"}`},l.default.createElement(i4,{size:18}),e2>0&&l.default.createElement("span",{className:"tbc-bell-count absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[11px] leading-[18px] text-center font-bold"},e2)),l.default.createElement("div",{className:He},l.default.createElement("button",{onClick:()=>Ei("mine"),className:Va(L==="mine")},"我的"),l.default.createElement("button",{onClick:()=>Ei("tome"),className:Va(L==="tome")},"派工給我"),l.default.createElement("button",{onClick:()=>Ei("dispatched"),className:Va(L==="dispatched")},"我派工的"),l.default.createElement("button",{onClick:()=>Ei("all"),className:Va(L==="all")},"全部")),L==="all"&&l.default.createElement("div",{className:"relative"},l.default.createElement("button",{onClick:()=>Jr(c=>!c),className:`${He} !p-1.5`},l.default.createElement("span",{className:Va(Kn)},l.default.createElement(Tl,{size:14,className:"text-slate-500"}),"人員（",ia.size,"/",$l.length,"）")),Kn&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Jr(!1)}),l.default.createElement("div",{className:"absolute left-0 top-full mt-2 z-40 w-56 max-h-80 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},l.default.createElement("div",{className:"flex gap-2 px-1 pb-2 mb-1 border-b border-slate-100"},l.default.createElement("button",{onClick:()=>Qr(new Set($l.map(c=>c.member_id))),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全選"),l.default.createElement("button",{onClick:()=>Qr(new Set),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全不選")),$l.map(c=>l.default.createElement("label",{key:c.member_id,className:"flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none text-slate-700 hover:bg-slate-50 cursor-pointer"},l.default.createElement("input",{type:"checkbox",checked:ia.has(c.member_id),onChange:()=>Qr(M=>{let w=new Set(M);return w.has(c.member_id)?w.delete(c.member_id):w.add(c.member_id),w}),className:"accent-indigo-600"}),c.name))))),L!=="notice"&&l.default.createElement("div",{className:He},l.default.createElement("button",{onClick:()=>j("today"),className:Va(z==="today")},"今日"),l.default.createElement("button",{onClick:()=>j("week"),className:Va(z==="week")},"本週"),l.default.createElement("button",{onClick:()=>j("month"),className:Va(z==="month")},"本月"),l.default.createElement("button",{onClick:()=>j("custom"),className:Va(z==="custom")},"自訂")),L!=="notice"&&z==="custom"&&l.default.createElement("div",{className:"flex items-center gap-2"},l.default.createElement("input",{type:"date",value:A,onChange:c=>N(c.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),l.default.createElement("span",{className:"text-slate-400"},"～"),l.default.createElement("input",{type:"date",value:O,min:A,onChange:c=>ut(c.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),l.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},L==="notice"?l.default.createElement("span",null,"提醒的派工　共 ",In.length," 筆"):l.default.createElement(l.default.Fragment,null,Et.start===Et.end?Ka(Et.start):`${Ka(Et.start)} ～ ${Ka(Et.end)}`,l.default.createElement("span",{className:"ml-3"},"共 ",ec," 筆"))))),l.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},l.default.createElement("div",{className:"space-y-4",style:{minWidth:D4}},l.default.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:t2}},l.default.createElement("span",{className:"py-2"}),_i.map(c=>c.sortable?l.default.createElement("button",{key:c.id,type:"button",onClick:()=>Gn(c.id),title:"點一下排序","aria-sort":_t.col===c.id?_t.dir==="asc"?"ascending":"descending":"none",className:`py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap font-medium inline-flex items-center justify-center gap-0.5 hover:bg-slate-200/70 transition-colors ${_t.col===c.id?"text-indigo-600":""}`},c.label,_t.col===c.id&&(_t.dir==="asc"?l.default.createElement(Rg,{size:14}):l.default.createElement(El,{size:14}))):l.default.createElement("span",{key:c.id,className:"py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap"},c.label))),L==="notice"?In.length===0?l.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},"目前沒有提醒"):l.default.createElement("div",{className:"tbc-notice-list bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},In.map(c=>i2(c,null))):y&&p.length===0?l.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):ec===0?l.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},Aa.trim()?`找不到符合「${Aa.trim()}」的工作（只搜尋目前顯示的範圍）`:"新增一筆工作，開始記錄"):l.default.createElement(l.default.Fragment,null,Fn.length>0&&l.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},l.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},l.default.createElement(Jd,{size:J})," 逾期未完成 ",l.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},Fn.length)),Fn.map(c=>i2(c,null))),Pl.map(c=>{let M=hv(c.date,$);return l.default.createElement("div",{key:c.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},l.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},l.default.createElement("span",{className:`font-bold ${M.tag==="今天"?"text-indigo-600":"text-slate-800"}`},M.text)),c.rows.map(w=>i2(w,c)))}))))),a2&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm",onClick:()=>r2(null)},l.default.createElement("div",{className:"tbc-return-info bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in",onClick:c=>c.stopPropagation()},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement($d,{size:20,className:"text-amber-600"}),"退回原因"),l.default.createElement("button",{"aria-label":"關閉",onClick:()=>r2(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},l.default.createElement(bi,{size:20}))),l.default.createElement("div",{className:"p-5 space-y-2"},l.default.createElement("div",{className:"tbc-return-title font-bold text-slate-900"},"工作摘要：",a2.item.title),l.default.createElement("div",{className:"tbc-return-reason text-slate-900 whitespace-pre-wrap"},a2.a.return_note)))),ic&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(n4,{size:20,className:"text-indigo-600"}),"退回"),l.default.createElement("button",{onClick:()=>Pn(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},l.default.createElement(bi,{size:20}))),l.default.createElement("div",{className:"p-5 space-y-2"},l.default.createElement("label",{className:"text-xs font-medium text-slate-500"},"原因（選填）"),l.default.createElement("textarea",{autoFocus:!0,value:nc,onChange:c=>oc(c.target.value),rows:3,placeholder:"簡要說明",className:"tbc-return-text w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"})),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},l.default.createElement("button",{onClick:()=>Pn(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full"},"取消"),l.default.createElement("button",{onClick:X4,className:"tbc-return-ok flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full"},"退回")))),La&&za&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>Fr(null),onContextMenu:c=>{c.preventDefault(),Fr(null)}}),l.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:La.x,top:La.y,fontSize:_}},(()=>{let M=(ao?ao.rows.filter(K=>!K.overdue):[]).findIndex(K=>K.key===za.key),w=!!ao&&ao.canMove&&M>=0,S=(K,St,Xt,mt,na)=>l.default.createElement("button",{disabled:mt,onClick:()=>{Fr(null),Xt()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${na?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},l.default.createElement(K,{size:J-1}),St);return l.default.createElement(l.default.Fragment,null,!za.item.parent_id&&S(wi,"新增子工作",()=>uc(za)),za.canManage&&za.isRoutine&&S(Jg,"複製",()=>Q4(za)),za.canManage&&S(Rd,"刪除",()=>K4(za),!1,!0))})())),pt&&l.default.createElement(kv,{key:pt.mode+(pt.rule?pt.rule.id:"")+(pt.parent?pt.parent.id:""),mode:pt.mode,parent:pt.parent,initial:pt.rule||pt.initial,presetRepeat:pt.preset,today:$,busy:Qn,onClose:()=>Ea(null),onSubmit:J4,people:h,meId:o}),Kl&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(Zn,{className:"text-indigo-600",size:20})," 我的週期工作"),l.default.createElement("button",{onClick:()=>xa(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},l.default.createElement(bi,{size:20}))),l.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},l.default.createElement("button",{onClick:()=>{xa(!1),Ea({mode:"createRule",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},l.default.createElement(wi,{size:16}),"新增週期工作"),Rr.length===0?l.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"尚未建立週期工作"):Rr.map(c=>l.default.createElement("div",{key:c.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${c.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},l.default.createElement("div",{className:"min-w-0"},l.default.createElement("div",{className:`font-medium truncate ${c.is_active?"text-slate-900":"text-slate-400"}`},c.title),l.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},pv(c),c.start_time?`　${Wt(c.start_time)}${c.end_time?"~"+Wt(c.end_time):""}`:"",c.until_date?`　到 ${Ka(c.until_date)}`:"",c.is_active?"":"　（暫停）")),l.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},l.default.createElement("button",{onClick:()=>{Wi.current=!0,xa(!1),Ea({mode:"editRule",rule:c})},className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},l.default.createElement(Ig,{size:16})),l.default.createElement("button",{onClick:()=>$4(c),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${c.is_active?"bg-emerald-50 text-emerald-600 hover:bg-emerald-100":"bg-amber-50 text-amber-600 hover:bg-amber-100"}`,title:c.is_active?"啟用":"暫停","aria-label":c.is_active?"啟用":"暫停"},c.is_active?l.default.createElement($g,{size:16}):l.default.createElement(Fg,{size:16})),l.default.createElement("button",{onClick:()=>I4(c),className:"tbc-rule-del p-2.5 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg active:scale-95 transition-colors",title:"刪除","aria-label":"刪除週期工作"},l.default.createElement(Rd,{size:16})))))))),D.text&&l.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},l.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${D.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},l.default.createElement("div",{className:"shrink-0 mt-0.5"},D.type==="success"?l.default.createElement(Kg,{size:18}):l.default.createElement(Ci,{size:18})),l.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},D.text))),u&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"p-8 text-center"},l.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},l.default.createElement(Ci,{size:32})),l.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),l.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},l.default.createElement("button",{onClick:()=>v(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),l.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},A4=xv;var V4=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
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
`;var Lv="https://jcepavwocdujoeoqxvsd.supabase.co",Mv="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",rc=document.createElement("style");rc.id="tbc-one-css";rc.textContent=V4;document.head.appendChild(rc);var Le=window.__TBC_SB||window.supabase.createClient(Lv,Mv),mv=({page:t})=>{let[a,r]=(0,Ht.useState)(void 0),[e,i]=(0,Ht.useState)(""),[n,o]=(0,Ht.useState)({status:"loading",name:"",role:"member"});(0,Ht.useEffect)(()=>{let f=!0;Le.auth.getSession().then(({data:p})=>{f&&r(p.session||null)});let{data:k}=Le.auth.onAuthStateChange((p,x)=>{f&&r(x||null)});return()=>{f=!1,k&&k.subscription&&k.subscription.unsubscribe()}},[]);let d=a&&a.user&&a.user.id;(0,Ht.useEffect)(()=>{if(!a)return;let f=!0;return u4(Le,a).then(async k=>{if(f){if(k.status!=="ok"||!c4.includes(k.role)){try{await Le.auth.signOut()}catch{}i("權限不足"),r(null);return}i(""),o(k)}}),()=>{f=!1}},[d]);let h=async()=>{try{await Le.auth.signOut()}catch{}r(null),o({status:"loading",name:"",role:"member"})};if(a===void 0)return Ht.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return Ht.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},Ht.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},Ht.default.createElement(Dl,{size:30})),Ht.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),Ht.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),Ht.default.createElement(g4,{supabase:Le,notice:e}));if(n.status!=="ok")return Ht.default.createElement("div",{className:"h-[100dvh] bg-white"});let s={identity:n,onLogout:h};return t==="work"?Ht.default.createElement(A4,{session:a,supabase:Le,utils:{},shell:s}):Ht.default.createElement(f4,{shell:s})},z4=document.getElementById("root");(0,_4.createRoot)(z4).render(Ht.default.createElement(mv,{page:z4.getAttribute("data-page")||"home"}));})();
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
