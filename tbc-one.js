(()=>{var d4=Object.create;var zd=Object.defineProperty;var c4=Object.getOwnPropertyDescriptor;var h4=Object.getOwnPropertyNames;var u4=Object.getPrototypeOf,s4=Object.prototype.hasOwnProperty;var sr=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var g4=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of h4(a))!s4.call(t,i)&&i!==r&&zd(t,i,{get:()=>a[i],enumerable:!(e=c4(a,i))||e.enumerable});return t};var Yr=(t,a,r)=>(r=t!=null?d4(u4(t)):{},g4(a||!t||!t.__esModule?zd(r,"default",{value:t,enumerable:!0}):r,t));var Yd=sr(z=>{"use strict";var W2=Symbol.for("react.transitional.element"),p4=Symbol.for("react.portal"),f4=Symbol.for("react.fragment"),v4=Symbol.for("react.strict_mode"),k4=Symbol.for("react.profiler"),x4=Symbol.for("react.consumer"),L4=Symbol.for("react.context"),M4=Symbol.for("react.forward_ref"),m4=Symbol.for("react.suspense"),y4=Symbol.for("react.memo"),Dd=Symbol.for("react.lazy"),w4=Symbol.for("react.activity"),_d=Symbol.iterator;function C4(t){return t===null||typeof t!="object"?null:(t=_d&&t[_d]||t["@@iterator"],typeof t=="function"?t:null)}var Od={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ud=Object.assign,Zd={};function fe(t,a,r){this.props=t,this.context=a,this.refs=Zd,this.updater=r||Od}fe.prototype.isReactComponent={};fe.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};fe.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qd(){}qd.prototype=fe.prototype;function H2(t,a,r){this.props=t,this.context=a,this.refs=Zd,this.updater=r||Od}var S2=H2.prototype=new qd;S2.constructor=H2;Ud(S2,fe.prototype);S2.isPureReactComponent=!0;var Td=Array.isArray;function j2(){}var at={H:null,A:null,T:null,S:null},Gd=Object.prototype.hasOwnProperty;function A2(t,a,r){var e=r.ref;return{$$typeof:W2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function B4(t,a){return A2(t.type,a,t.props)}function V2(t){return typeof t=="object"&&t!==null&&t.$$typeof===W2}function b4(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var Ed=/\/+/g;function b2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?b4(""+t.key):a.toString(36)}function j4(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(j2,j2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function pe(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case W2:case p4:o=!0;break;case Dd:return o=t._init,pe(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+b2(t,0):e,Td(i)?(r="",o!=null&&(r=o.replace(Ed,"$&/")+"/"),pe(i,a,r,"",function(s){return s})):i!=null&&(V2(i)&&(i=B4(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Ed,"$&/")+"/")+o)),a.push(i)),1;o=0;var l=e===""?".":e+":";if(Td(t))for(var c=0;c<t.length;c++)e=t[c],n=l+b2(e,c),o+=pe(e,a,r,n,i);else if(c=C4(t),typeof c=="function")for(t=c.call(t),c=0;!(e=t.next()).done;)e=e.value,n=l+b2(e,c++),o+=pe(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return pe(j4(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function Wn(t,a,r){if(t==null)return t;var e=[],i=0;return pe(t,e,"","",function(n){return a.call(r,n,i++)}),e}function W4(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var Nd=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},H4={map:Wn,forEach:function(t,a,r){Wn(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return Wn(t,function(){a++}),a},toArray:function(t){return Wn(t,function(a){return a})||[]},only:function(t){if(!V2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Activity=w4;z.Children=H4;z.Component=fe;z.Fragment=f4;z.Profiler=k4;z.PureComponent=H2;z.StrictMode=v4;z.Suspense=m4;z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=at;z.__COMPILER_RUNTIME={__proto__:null,c:function(t){return at.H.useMemoCache(t)}};z.cache=function(t){return function(){return t.apply(null,arguments)}};z.cacheSignal=function(){return null};z.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=Ud({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!Gd.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),l=0;l<n;l++)o[l]=arguments[l+2];e.children=o}return A2(t.type,i,e)};z.createContext=function(t){return t={$$typeof:L4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:x4,_context:t},t};z.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)Gd.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return A2(t,n,i)};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:M4,render:t}};z.isValidElement=V2;z.lazy=function(t){return{$$typeof:Dd,_payload:{_status:-1,_result:t},_init:W4}};z.memo=function(t,a){return{$$typeof:y4,type:t,compare:a===void 0?null:a}};z.startTransition=function(t){var a=at.T,r={};at.T=r;try{var e=t(),i=at.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(j2,Nd)}catch(n){Nd(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),at.T=a}};z.unstable_useCacheRefresh=function(){return at.H.useCacheRefresh()};z.use=function(t){return at.H.use(t)};z.useActionState=function(t,a,r){return at.H.useActionState(t,a,r)};z.useCallback=function(t,a){return at.H.useCallback(t,a)};z.useContext=function(t){return at.H.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t,a){return at.H.useDeferredValue(t,a)};z.useEffect=function(t,a){return at.H.useEffect(t,a)};z.useEffectEvent=function(t){return at.H.useEffectEvent(t)};z.useId=function(){return at.H.useId()};z.useImperativeHandle=function(t,a,r){return at.H.useImperativeHandle(t,a,r)};z.useInsertionEffect=function(t,a){return at.H.useInsertionEffect(t,a)};z.useLayoutEffect=function(t,a){return at.H.useLayoutEffect(t,a)};z.useMemo=function(t,a){return at.H.useMemo(t,a)};z.useOptimistic=function(t,a){return at.H.useOptimistic(t,a)};z.useReducer=function(t,a,r){return at.H.useReducer(t,a,r)};z.useRef=function(t){return at.H.useRef(t)};z.useState=function(t){return at.H.useState(t)};z.useSyncExternalStore=function(t,a,r){return at.H.useSyncExternalStore(t,a,r)};z.useTransition=function(){return at.H.useTransition()};z.version="19.2.8"});var Oa=sr((zf,Xd)=>{"use strict";Xd.exports=Yd()});var ac=sr(dt=>{"use strict";function E2(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<Hn(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Sa(t){return t.length===0?null:t[0]}function An(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,l=t[o],c=o+1,s=t[c];if(0>Hn(l,r))c<i&&0>Hn(s,l)?(t[e]=s,t[c]=r,e=c):(t[e]=l,t[o]=r,e=o);else if(c<i&&0>Hn(s,r))t[e]=s,t[c]=r,e=c;else break t}}return a}function Hn(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}dt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Qd=performance,dt.unstable_now=function(){return Qd.now()}):(z2=Date,Kd=z2.now(),dt.unstable_now=function(){return z2.now()-Kd});var Qd,z2,Kd,Ua=[],gr=[],S4=1,ca=null,zt=3,N2=!1,gi=!1,pi=!1,D2=!1,Fd=typeof setTimeout=="function"?setTimeout:null,$d=typeof clearTimeout=="function"?clearTimeout:null,Rd=typeof setImmediate<"u"?setImmediate:null;function Sn(t){for(var a=Sa(gr);a!==null;){if(a.callback===null)An(gr);else if(a.startTime<=t)An(gr),a.sortIndex=a.expirationTime,E2(Ua,a);else break;a=Sa(gr)}}function O2(t){if(pi=!1,Sn(t),!gi)if(Sa(Ua)!==null)gi=!0,ke||(ke=!0,ve());else{var a=Sa(gr);a!==null&&U2(O2,a.startTime-t)}}var ke=!1,fi=-1,Id=5,Pd=-1;function tc(){return D2?!0:!(dt.unstable_now()-Pd<Id)}function _2(){if(D2=!1,ke){var t=dt.unstable_now();Pd=t;var a=!0;try{t:{gi=!1,pi&&(pi=!1,$d(fi),fi=-1),N2=!0;var r=zt;try{a:{for(Sn(t),ca=Sa(Ua);ca!==null&&!(ca.expirationTime>t&&tc());){var e=ca.callback;if(typeof e=="function"){ca.callback=null,zt=ca.priorityLevel;var i=e(ca.expirationTime<=t);if(t=dt.unstable_now(),typeof i=="function"){ca.callback=i,Sn(t),a=!0;break a}ca===Sa(Ua)&&An(Ua),Sn(t)}else An(Ua);ca=Sa(Ua)}if(ca!==null)a=!0;else{var n=Sa(gr);n!==null&&U2(O2,n.startTime-t),a=!1}}break t}finally{ca=null,zt=r,N2=!1}a=void 0}}finally{a?ve():ke=!1}}}var ve;typeof Rd=="function"?ve=function(){Rd(_2)}:typeof MessageChannel<"u"?(T2=new MessageChannel,Jd=T2.port2,T2.port1.onmessage=_2,ve=function(){Jd.postMessage(null)}):ve=function(){Fd(_2,0)};var T2,Jd;function U2(t,a){fi=Fd(function(){t(dt.unstable_now())},a)}dt.unstable_IdlePriority=5;dt.unstable_ImmediatePriority=1;dt.unstable_LowPriority=4;dt.unstable_NormalPriority=3;dt.unstable_Profiling=null;dt.unstable_UserBlockingPriority=2;dt.unstable_cancelCallback=function(t){t.callback=null};dt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Id=0<t?Math.floor(1e3/t):5};dt.unstable_getCurrentPriorityLevel=function(){return zt};dt.unstable_next=function(t){switch(zt){case 1:case 2:case 3:var a=3;break;default:a=zt}var r=zt;zt=a;try{return t()}finally{zt=r}};dt.unstable_requestPaint=function(){D2=!0};dt.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=zt;zt=t;try{return a()}finally{zt=r}};dt.unstable_scheduleCallback=function(t,a,r){var e=dt.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:S4++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,E2(gr,t),Sa(Ua)===null&&t===Sa(gr)&&(pi?($d(fi),fi=-1):pi=!0,U2(O2,r-e))):(t.sortIndex=i,E2(Ua,t),gi||N2||(gi=!0,ke||(ke=!0,ve()))),t};dt.unstable_shouldYield=tc;dt.unstable_wrapCallback=function(t){var a=zt;return function(){var r=zt;zt=a;try{return t.apply(this,arguments)}finally{zt=r}}}});var ec=sr((Tf,rc)=>{"use strict";rc.exports=ac()});var nc=sr(Et=>{"use strict";var A4=Oa();function ic(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function pr(){}var Tt={d:{f:pr,r:function(){throw Error(ic(522))},D:pr,C:pr,L:pr,m:pr,X:pr,S:pr,M:pr},p:0,findDOMNode:null},V4=Symbol.for("react.portal");function z4(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V4,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var vi=A4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Vn(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tt;Et.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(ic(299));return z4(t,a,null,r)};Et.flushSync=function(t){var a=vi.T,r=Tt.p;try{if(vi.T=null,Tt.p=2,t)return t()}finally{vi.T=a,Tt.p=r,Tt.d.f()}};Et.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Tt.d.C(t,a))};Et.prefetchDNS=function(t){typeof t=="string"&&Tt.d.D(t)};Et.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=Vn(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Tt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Tt.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};Et.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=Vn(a.as,a.crossOrigin);Tt.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Tt.d.M(t)};Et.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=Vn(r,a.crossOrigin);Tt.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};Et.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=Vn(a.as,a.crossOrigin);Tt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Tt.d.m(t)};Et.requestFormReset=function(t){Tt.d.r(t)};Et.unstable_batchedUpdates=function(t,a){return t(a)};Et.useFormState=function(t,a,r){return vi.H.useFormState(t,a,r)};Et.useFormStatus=function(){return vi.H.useHostTransitionStatus()};Et.version="19.2.8"});var dc=sr((Nf,lc)=>{"use strict";function oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc)}catch(t){console.error(t)}}oc(),lc.exports=nc()});var Ms=sr(i2=>{"use strict";var Mt=ec(),_0=Oa(),_4=dc();function M(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rn(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function E0(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function N0(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function cc(t){if(rn(t)!==t)throw Error(M(188))}function T4(t){var a=t.alternate;if(!a){if(a=rn(t),a===null)throw Error(M(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return cc(i),t;if(n===e)return cc(i),a;n=n.sibling}throw Error(M(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,e=n;break}if(l===e){o=!0,e=i,r=n;break}l=l.sibling}if(!o){for(l=n.child;l;){if(l===r){o=!0,r=n,e=i;break}if(l===e){o=!0,e=n,r=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(r.alternate!==e)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?t:a}function D0(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=D0(t),a!==null)return a;t=t.sibling}return null}var it=Object.assign,E4=Symbol.for("react.element"),zn=Symbol.for("react.transitional.element"),Ci=Symbol.for("react.portal"),we=Symbol.for("react.fragment"),O0=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),U0=Symbol.for("react.consumer"),Ra=Symbol.for("react.context"),f1=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),v1=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),wl=Symbol.for("react.activity"),N4=Symbol.for("react.memo_cache_sentinel"),hc=Symbol.iterator;function ki(t){return t===null||typeof t!="object"?null:(t=hc&&t[hc]||t["@@iterator"],typeof t=="function"?t:null)}var D4=Symbol.for("react.client.reference");function Cl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===D4?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case we:return"Fragment";case Ml:return"Profiler";case O0:return"StrictMode";case ml:return"Suspense";case yl:return"SuspenseList";case wl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ci:return"Portal";case Ra:return t.displayName||"Context";case U0:return(t._context.displayName||"Context")+".Consumer";case f1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case v1:return a=t.displayName||null,a!==null?a:Cl(t.type)||"Memo";case fr:a=t._payload,t=t._init;try{return Cl(t(a))}catch{}}return null}var Bi=Array.isArray,A=_0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=_4.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Fr={pending:!1,data:null,method:null,action:null},Bl=[],Ce=-1;function Ta(t){return{current:t}}function Bt(t){0>Ce||(t.current=Bl[Ce],Bl[Ce]=null,Ce--)}function tt(t,a){Ce++,Bl[Ce]=t.current,t.current=a}var _a=Ta(null),qi=Ta(null),br=Ta(null),go=Ta(null);function po(t,a){switch(tt(br,a),tt(qi,t),tt(_a,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?k0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=k0(a),t=os(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Bt(_a),tt(_a,t)}function qe(){Bt(_a),Bt(qi),Bt(br)}function bl(t){t.memoizedState!==null&&tt(go,t);var a=_a.current,r=os(a,t.type);a!==r&&(tt(qi,t),tt(_a,r))}function fo(t){qi.current===t&&(Bt(_a),Bt(qi)),go.current===t&&(Bt(go),Pi._currentValue=Fr)}var Z2,uc;function Qr(t){if(Z2===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);Z2=a&&a[1]||"",uc=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Z2+t+uc}var q2=!1;function G2(t,a){if(!t||q2)return"";q2=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(k){var p=k}Reflect.construct(t,[],x)}else{try{x.call()}catch(k){p=k}t.call(x.prototype)}}else{try{throw Error()}catch(k){p=k}(x=t())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(k){if(k&&p&&typeof k.stack=="string")return[k.stack,p.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],l=n[1];if(o&&l){var c=o.split(`
`),s=l.split(`
`);for(i=e=0;e<c.length&&!c[e].includes("DetermineComponentFrameRoot");)e++;for(;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;if(e===c.length||i===s.length)for(e=c.length-1,i=s.length-1;1<=e&&0<=i&&c[e]!==s[i];)i--;for(;1<=e&&0<=i;e--,i--)if(c[e]!==s[i]){if(e!==1||i!==1)do if(e--,i--,0>i||c[e]!==s[i]){var v=`
`+c[e].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=e&&0<=i);break}}}finally{q2=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Qr(r):""}function O4(t,a){switch(t.tag){case 26:case 27:case 5:return Qr(t.type);case 16:return Qr("Lazy");case 13:return t.child!==a&&a!==null?Qr("Suspense Fallback"):Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 15:return G2(t.type,!1);case 11:return G2(t.type.render,!1);case 1:return G2(t.type,!0);case 31:return Qr("Activity");default:return""}}function sc(t){try{var a="",r=null;do a+=O4(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var jl=Object.prototype.hasOwnProperty,k1=Mt.unstable_scheduleCallback,Y2=Mt.unstable_cancelCallback,U4=Mt.unstable_shouldYield,Z4=Mt.unstable_requestPaint,It=Mt.unstable_now,q4=Mt.unstable_getCurrentPriorityLevel,Z0=Mt.unstable_ImmediatePriority,q0=Mt.unstable_UserBlockingPriority,vo=Mt.unstable_NormalPriority,G4=Mt.unstable_LowPriority,G0=Mt.unstable_IdlePriority,Y4=Mt.log,X4=Mt.unstable_setDisableYieldValue,en=null,Pt=null;function mr(t){if(typeof Y4=="function"&&X4(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(en,t)}catch{}}var ta=Math.clz32?Math.clz32:R4,Q4=Math.log,K4=Math.LN2;function R4(t){return t>>>=0,t===0?32:31-(Q4(t)/K4|0)|0}var _n=256,Tn=262144,En=4194304;function Kr(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qo(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var l=e&134217727;return l!==0?(e=l&~n,e!==0?i=Kr(e):(o&=l,o!==0?i=Kr(o):r||(r=l&~t,r!==0&&(i=Kr(r))))):(l=e&~n,l!==0?i=Kr(l):o!==0?i=Kr(o):r||(r=e&~t,r!==0&&(i=Kr(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function nn(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function J4(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y0(){var t=En;return En<<=1,(En&62914560)===0&&(En=4194304),t}function X2(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function on(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function F4(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var l=t.entanglements,c=t.expirationTimes,s=t.hiddenUpdates;for(r=o&~r;0<r;){var v=31-ta(r),x=1<<v;l[v]=0,c[v]=-1;var p=s[v];if(p!==null)for(s[v]=null,v=0;v<p.length;v++){var k=p[v];k!==null&&(k.lane&=-536870913)}r&=~x}e!==0&&X0(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function X0(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-ta(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function Q0(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-ta(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function K0(t,a){var r=a&-a;return r=(r&42)!==0?1:x1(r),(r&(t.suspendedLanes|a))!==0?0:r}function x1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function L1(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function R0(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:ks(t.type))}function gc(t,a){var r=Q.p;try{return Q.p=t,a()}finally{Q.p=r}}var Or=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Or,Yt="__reactProps$"+Or,Pe="__reactContainer$"+Or,Wl="__reactEvents$"+Or,$4="__reactListeners$"+Or,I4="__reactHandles$"+Or,pc="__reactResources$"+Or,ln="__reactMarker$"+Or;function M1(t){delete t[Wt],delete t[Yt],delete t[Wl],delete t[$4],delete t[I4]}function Be(t){var a=t[Wt];if(a)return a;for(var r=t.parentNode;r;){if(a=r[Pe]||r[Wt]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=y0(t);t!==null;){if(r=t[Wt])return r;t=y0(t)}return a}t=r,r=t.parentNode}return null}function ti(t){if(t=t[Wt]||t[Pe]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function bi(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(M(33))}function Te(t){var a=t[pc];return a||(a=t[pc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ct(t){t[ln]=!0}var J0=new Set,F0={};function oe(t,a){Ge(t,a),Ge(t+"Capture",a)}function Ge(t,a){for(F0[t]=a,t=0;t<a.length;t++)J0.add(a[t])}var P4=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fc={},vc={};function tp(t){return jl.call(vc,t)?!0:jl.call(fc,t)?!1:P4.test(t)?vc[t]=!0:(fc[t]=!0,!1)}function $n(t,a,r){if(tp(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function Nn(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function Za(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function ua(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $0(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ap(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Hl(t){if(!t._valueTracker){var a=$0(t)?"checked":"value";t._valueTracker=ap(t,a,""+t[a])}}function I0(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=$0(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function ko(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rp=/[\n"\\]/g;function pa(t){return t.replace(rp,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Sl(t,a,r,e,i,n,o,l){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+ua(a)):t.value!==""+ua(a)&&(t.value=""+ua(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?Al(t,o,ua(a)):r!=null?Al(t,o,ua(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+ua(l):t.removeAttribute("name")}function P0(t,a,r,e,i,n,o,l){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){Hl(t);return}r=r!=null?""+ua(r):"",a=a!=null?""+ua(a):r,l||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=l?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Hl(t)}function Al(t,a,r){a==="number"&&ko(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ee(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+ua(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function th(t,a,r){if(a!=null&&(a=""+ua(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+ua(r):""}function ah(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(M(92));if(Bi(e)){if(1<e.length)throw Error(M(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=ua(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),Hl(t)}function Ye(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var ep=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kc(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||ep.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function rh(t,a,r){if(a!=null&&typeof a!="object")throw Error(M(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&kc(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&kc(t,n,a[n])}function m1(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ip=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),np=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function In(t){return np.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ja(){}var Vl=null;function y1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var be=null,Ne=null;function xc(t){var a=ti(t);if(a&&(t=a.stateNode)){var r=t[Yt]||null;t:switch(t=a.stateNode,a.type){case"input":if(Sl(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+pa(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[Yt]||null;if(!i)throw Error(M(90));Sl(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&I0(e)}break t;case"textarea":th(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Ee(t,!!r.multiple,a,!1)}}}var Q2=!1;function eh(t,a,r){if(Q2)return t(a,r);Q2=!0;try{var e=t(a);return e}finally{if(Q2=!1,(be!==null||Ne!==null)&&(t2(),be&&(a=be,t=Ne,Ne=be=null,xc(a),t)))for(a=0;a<t.length;a++)xc(t[a])}}function Gi(t,a){var r=t.stateNode;if(r===null)return null;var e=r[Yt]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(M(231,a,typeof r));return r}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=!1;if(tr)try{xe={},Object.defineProperty(xe,"passive",{get:function(){zl=!0}}),window.addEventListener("test",xe,xe),window.removeEventListener("test",xe,xe)}catch{zl=!1}var xe,yr=null,w1=null,Pn=null;function ih(){if(Pn)return Pn;var t,a=w1,r=a.length,e,i="value"in yr?yr.value:yr.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return Pn=i.slice(t,1<e?1-e:void 0)}function to(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Dn(){return!0}function Lc(){return!1}function Xt(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(n):n[l]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Dn:Lc,this.isPropagationStopped=Lc,this}return it(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),a}var le={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Xt(le),dn=it({},le,{view:0,detail:0}),op=Xt(dn),K2,R2,xi,Yo=it({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:C1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xi&&(xi&&t.type==="mousemove"?(K2=t.screenX-xi.screenX,R2=t.screenY-xi.screenY):R2=K2=0,xi=t),K2)},movementY:function(t){return"movementY"in t?t.movementY:R2}}),Mc=Xt(Yo),lp=it({},Yo,{dataTransfer:0}),dp=Xt(lp),cp=it({},dn,{relatedTarget:0}),J2=Xt(cp),hp=it({},le,{animationName:0,elapsedTime:0,pseudoElement:0}),up=Xt(hp),sp=it({},le,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gp=Xt(sp),pp=it({},le,{data:0}),mc=Xt(pp),fp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xp(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=kp[t])?!!a[t]:!1}function C1(){return xp}var Lp=it({},dn,{key:function(t){if(t.key){var a=fp[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:C1,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Mp=Xt(Lp),mp=it({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=Xt(mp),yp=it({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:C1}),wp=Xt(yp),Cp=it({},le,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bp=Xt(Cp),bp=it({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=Xt(bp),Wp=it({},le,{newState:0,oldState:0}),Hp=Xt(Wp),Sp=[9,13,27,32],B1=tr&&"CompositionEvent"in window,Hi=null;tr&&"documentMode"in document&&(Hi=document.documentMode);var Ap=tr&&"TextEvent"in window&&!Hi,nh=tr&&(!B1||Hi&&8<Hi&&11>=Hi),wc=" ",Cc=!1;function oh(t,a){switch(t){case"keyup":return Sp.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var je=!1;function Vp(t,a){switch(t){case"compositionend":return lh(a);case"keypress":return a.which!==32?null:(Cc=!0,wc);case"textInput":return t=a.data,t===wc&&Cc?null:t;default:return null}}function zp(t,a){if(je)return t==="compositionend"||!B1&&oh(t,a)?(t=ih(),Pn=w1=yr=null,je=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return nh&&a.locale!=="ko"?null:a.data;default:return null}}var _p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!_p[t.type]:a==="textarea"}function dh(t,a,r,e){be?Ne?Ne.push(e):Ne=[e]:be=e,a=To(a,"onChange"),0<a.length&&(r=new Go("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var Si=null,Yi=null;function Tp(t){es(t,0)}function Xo(t){var a=bi(t);if(I0(a))return t}function bc(t,a){if(t==="change")return a}var ch=!1;tr&&(tr?(Un="oninput"in document,Un||(F2=document.createElement("div"),F2.setAttribute("oninput","return;"),Un=typeof F2.oninput=="function"),On=Un):On=!1,ch=On&&(!document.documentMode||9<document.documentMode));var On,Un,F2;function jc(){Si&&(Si.detachEvent("onpropertychange",hh),Yi=Si=null)}function hh(t){if(t.propertyName==="value"&&Xo(Yi)){var a=[];dh(a,Yi,t,y1(t)),eh(Tp,a)}}function Ep(t,a,r){t==="focusin"?(jc(),Si=a,Yi=r,Si.attachEvent("onpropertychange",hh)):t==="focusout"&&jc()}function Np(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(Yi)}function Dp(t,a){if(t==="click")return Xo(a)}function Op(t,a){if(t==="input"||t==="change")return Xo(a)}function Up(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var ra=typeof Object.is=="function"?Object.is:Up;function Xi(t,a){if(ra(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!jl.call(a,i)||!ra(t[i],a[i]))return!1}return!0}function Wc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hc(t,a){var r=Wc(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Wc(r)}}function uh(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?uh(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function sh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=ko(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=ko(t.document)}return a}function b1(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var Zp=tr&&"documentMode"in document&&11>=document.documentMode,We=null,_l=null,Ai=null,Tl=!1;function Sc(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Tl||We==null||We!==ko(e)||(e=We,"selectionStart"in e&&b1(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Ai&&Xi(Ai,e)||(Ai=e,e=To(_l,"onSelect"),0<e.length&&(a=new Go("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=We)))}function Xr(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var He={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionrun:Xr("Transition","TransitionRun"),transitionstart:Xr("Transition","TransitionStart"),transitioncancel:Xr("Transition","TransitionCancel"),transitionend:Xr("Transition","TransitionEnd")},$2={},gh={};tr&&(gh=document.createElement("div").style,"AnimationEvent"in window||(delete He.animationend.animation,delete He.animationiteration.animation,delete He.animationstart.animation),"TransitionEvent"in window||delete He.transitionend.transition);function de(t){if($2[t])return $2[t];if(!He[t])return t;var a=He[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in gh)return $2[t]=a[r];return t}var ph=de("animationend"),fh=de("animationiteration"),vh=de("animationstart"),qp=de("transitionrun"),Gp=de("transitionstart"),Yp=de("transitioncancel"),kh=de("transitionend"),xh=new Map,El="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");El.push("scrollEnd");function ba(t,a){xh.set(t,a),oe(a,[t])}var xo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ha=[],Se=0,j1=0;function Qo(){for(var t=Se,a=j1=Se=0;a<t;){var r=ha[a];ha[a++]=null;var e=ha[a];ha[a++]=null;var i=ha[a];ha[a++]=null;var n=ha[a];if(ha[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&Lh(r,i,n)}}function Ko(t,a,r,e){ha[Se++]=t,ha[Se++]=a,ha[Se++]=r,ha[Se++]=e,j1|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function W1(t,a,r,e){return Ko(t,a,r,e),Lo(t)}function ce(t,a){return Ko(t,null,null,a),Lo(t)}function Lh(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-ta(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function Lo(t){if(50<Ui)throw Ui=0,e1=null,Error(M(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Ae={};function Xp(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,a,r,e){return new Xp(t,a,r,e)}function H1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $a(t,a){var r=t.alternate;return r===null?(r=Ft(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Mh(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function ao(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")H1(t)&&(o=1);else if(typeof t=="string")o=R5(t,r,_a.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case wl:return t=Ft(31,r,a,i),t.elementType=wl,t.lanes=n,t;case we:return $r(r.children,i,n,a);case O0:o=8,i|=24;break;case Ml:return t=Ft(12,r,a,i|2),t.elementType=Ml,t.lanes=n,t;case ml:return t=Ft(13,r,a,i),t.elementType=ml,t.lanes=n,t;case yl:return t=Ft(19,r,a,i),t.elementType=yl,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ra:o=10;break t;case U0:o=9;break t;case f1:o=11;break t;case v1:o=14;break t;case fr:o=16,e=null;break t}o=29,r=Error(M(130,t===null?"null":typeof t,"")),e=null}return a=Ft(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function $r(t,a,r,e){return t=Ft(7,t,e,a),t.lanes=r,t}function I2(t,a,r){return t=Ft(6,t,null,a),t.lanes=r,t}function mh(t){var a=Ft(18,null,null,0);return a.stateNode=t,a}function P2(t,a,r){return a=Ft(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Ac=new WeakMap;function fa(t,a){if(typeof t=="object"&&t!==null){var r=Ac.get(t);return r!==void 0?r:(a={value:t,source:a,stack:sc(a)},Ac.set(t,a),a)}return{value:t,source:a,stack:sc(a)}}var Ve=[],ze=0,Mo=null,Qi=0,sa=[],ga=0,Tr=null,Aa=1,Va="";function Qa(t,a){Ve[ze++]=Qi,Ve[ze++]=Mo,Mo=t,Qi=a}function yh(t,a,r){sa[ga++]=Aa,sa[ga++]=Va,sa[ga++]=Tr,Tr=t;var e=Aa;t=Va;var i=32-ta(e)-1;e&=~(1<<i),r+=1;var n=32-ta(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,Aa=1<<32-ta(a)+i|r<<i|e,Va=n+t}else Aa=1<<n|r<<i|e,Va=t}function S1(t){t.return!==null&&(Qa(t,1),yh(t,1,0))}function A1(t){for(;t===Mo;)Mo=Ve[--ze],Ve[ze]=null,Qi=Ve[--ze],Ve[ze]=null;for(;t===Tr;)Tr=sa[--ga],sa[ga]=null,Va=sa[--ga],sa[ga]=null,Aa=sa[--ga],sa[ga]=null}function wh(t,a){sa[ga++]=Aa,sa[ga++]=Va,sa[ga++]=Tr,Aa=a.id,Va=a.overflow,Tr=t}var Ht=null,et=null,G=!1,jr=null,va=!1,Nl=Error(M(519));function Er(t){var a=Error(M(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ki(fa(a,t)),Nl}function Vc(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[Wt]=t,a[Yt]=e,r){case"dialog":O("cancel",a),O("close",a);break;case"iframe":case"object":case"embed":O("load",a);break;case"video":case"audio":for(r=0;r<$i.length;r++)O($i[r],a);break;case"source":O("error",a);break;case"img":case"image":case"link":O("error",a),O("load",a);break;case"details":O("toggle",a);break;case"input":O("invalid",a),P0(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":O("invalid",a);break;case"textarea":O("invalid",a),ah(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||ns(a.textContent,r)?(e.popover!=null&&(O("beforetoggle",a),O("toggle",a)),e.onScroll!=null&&O("scroll",a),e.onScrollEnd!=null&&O("scrollend",a),e.onClick!=null&&(a.onclick=Ja),a=!0):a=!1,a||Er(t,!0)}function zc(t){for(Ht=t.return;Ht;)switch(Ht.tag){case 5:case 31:case 13:va=!1;return;case 27:case 3:va=!0;return;default:Ht=Ht.return}}function Le(t){if(t!==Ht)return!1;if(!G)return zc(t),G=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||d1(t.type,t.memoizedProps)),r=!r),r&&et&&Er(t),zc(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));et=m0(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));et=m0(t)}else a===27?(a=et,Ur(t.type)?(t=s1,s1=null,et=t):et=a):et=Ht?xa(t.stateNode.nextSibling):null;return!0}function ae(){et=Ht=null,G=!1}function tl(){var t=jr;return t!==null&&(qt===null?qt=t:qt.push.apply(qt,t),jr=null),t}function Ki(t){jr===null?jr=[t]:jr.push(t)}var Dl=Ta(null),he=null,Fa=null;function kr(t,a,r){tt(Dl,a._currentValue),a._currentValue=r}function Ia(t){t._currentValue=Dl.current,Bt(Dl)}function Ol(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function Ul(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var l=n;n=i;for(var c=0;c<a.length;c++)if(l.context===a[c]){n.lanes|=r,l=n.alternate,l!==null&&(l.lanes|=r),Ol(n.return,r,t),e||(o=null);break t}n=l.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(M(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),Ol(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ai(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(M(387));if(o=o.memoizedProps,o!==null){var l=i.type;ra(i.pendingProps.value,o.value)||(t!==null?t.push(l):t=[l])}}else if(i===go.current){if(o=i.alternate,o===null)throw Error(M(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Pi):t=[Pi])}i=i.return}t!==null&&Ul(a,t,r,e),a.flags|=262144}function mo(t){for(t=t.firstContext;t!==null;){if(!ra(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function re(t){he=t,Fa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function St(t){return Ch(he,t)}function Zn(t,a){return he===null&&re(t),Ch(t,a)}function Ch(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},Fa===null){if(t===null)throw Error(M(308));Fa=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Fa=Fa.next=a;return r}var Qp=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},Kp=Mt.unstable_scheduleCallback,Rp=Mt.unstable_NormalPriority,kt={$$typeof:Ra,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function V1(){return{controller:new Qp,data:new Map,refCount:0}}function cn(t){t.refCount--,t.refCount===0&&Kp(Rp,function(){t.controller.abort()})}var Vi=null,Zl=0,Xe=0,De=null;function Jp(t,a){if(Vi===null){var r=Vi=[];Zl=0,Xe=ed(),De={status:"pending",value:void 0,then:function(e){r.push(e)}}}return Zl++,a.then(_c,_c),a}function _c(){if(--Zl===0&&Vi!==null){De!==null&&(De.status="fulfilled");var t=Vi;Vi=null,Xe=0,De=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function Fp(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var Tc=A.S;A.S=function(t,a){Du=It(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Jp(t,a),Tc!==null&&Tc(t,a)};var Ir=Ta(null);function z1(){var t=Ir.current;return t!==null?t:I.pooledCache}function ro(t,a){a===null?tt(Ir,Ir.current):tt(Ir,a.pool)}function Bh(){var t=z1();return t===null?null:{parent:kt._currentValue,pool:t}}var ri=Error(M(460)),_1=Error(M(474)),Ro=Error(M(542)),yo={then:function(){}};function Ec(t){return t=t.status,t==="fulfilled"||t==="rejected"}function bh(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(Ja,Ja),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Dc(t),t;default:if(typeof a.status=="string")a.then(Ja,Ja);else{if(t=I,t!==null&&100<t.shellSuspendCounter)throw Error(M(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Dc(t),t}throw Pr=a,ri}}function Rr(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Pr=r,ri):r}}var Pr=null;function Nc(){if(Pr===null)throw Error(M(459));var t=Pr;return Pr=null,t}function Dc(t){if(t===ri||t===Ro)throw Error(M(483))}var Oe=null,Ri=0;function qn(t){var a=Ri;return Ri+=1,Oe===null&&(Oe=[]),bh(Oe,t,a)}function Li(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Gn(t,a){throw a.$$typeof===E4?Error(M(525)):(t=Object.prototype.toString.call(a),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function jh(t){function a(g,u){if(t){var f=g.deletions;f===null?(g.deletions=[u],g.flags|=16):f.push(u)}}function r(g,u){if(!t)return null;for(;u!==null;)a(g,u),u=u.sibling;return null}function e(g){for(var u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function i(g,u){return g=$a(g,u),g.index=0,g.sibling=null,g}function n(g,u,f){return g.index=f,t?(f=g.alternate,f!==null?(f=f.index,f<u?(g.flags|=67108866,u):f):(g.flags|=67108866,u)):(g.flags|=1048576,u)}function o(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function l(g,u,f,L){return u===null||u.tag!==6?(u=I2(f,g.mode,L),u.return=g,u):(u=i(u,f),u.return=g,u)}function c(g,u,f,L){var W=f.type;return W===we?v(g,u,f.props.children,L,f.key):u!==null&&(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===fr&&Rr(W)===u.type)?(u=i(u,f.props),Li(u,f),u.return=g,u):(u=ao(f.type,f.key,f.props,null,g.mode,L),Li(u,f),u.return=g,u)}function s(g,u,f,L){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=P2(f,g.mode,L),u.return=g,u):(u=i(u,f.children||[]),u.return=g,u)}function v(g,u,f,L,W){return u===null||u.tag!==7?(u=$r(f,g.mode,L,W),u.return=g,u):(u=i(u,f),u.return=g,u)}function x(g,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=I2(""+u,g.mode,f),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case zn:return f=ao(u.type,u.key,u.props,null,g.mode,f),Li(f,u),f.return=g,f;case Ci:return u=P2(u,g.mode,f),u.return=g,u;case fr:return u=Rr(u),x(g,u,f)}if(Bi(u)||ki(u))return u=$r(u,g.mode,f,null),u.return=g,u;if(typeof u.then=="function")return x(g,qn(u),f);if(u.$$typeof===Ra)return x(g,Zn(g,u),f);Gn(g,u)}return null}function p(g,u,f,L){var W=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return W!==null?null:l(g,u,""+f,L);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case zn:return f.key===W?c(g,u,f,L):null;case Ci:return f.key===W?s(g,u,f,L):null;case fr:return f=Rr(f),p(g,u,f,L)}if(Bi(f)||ki(f))return W!==null?null:v(g,u,f,L,null);if(typeof f.then=="function")return p(g,u,qn(f),L);if(f.$$typeof===Ra)return p(g,u,Zn(g,f),L);Gn(g,f)}return null}function k(g,u,f,L,W){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return g=g.get(f)||null,l(u,g,""+L,W);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case zn:return g=g.get(L.key===null?f:L.key)||null,c(u,g,L,W);case Ci:return g=g.get(L.key===null?f:L.key)||null,s(u,g,L,W);case fr:return L=Rr(L),k(g,u,f,L,W)}if(Bi(L)||ki(L))return g=g.get(f)||null,v(u,g,L,W,null);if(typeof L.then=="function")return k(g,u,f,qn(L),W);if(L.$$typeof===Ra)return k(g,u,f,Zn(u,L),W);Gn(u,L)}return null}function y(g,u,f,L){for(var W=null,V=null,w=u,S=u=0,_=null;w!==null&&S<f.length;S++){w.index>S?(_=w,w=null):_=w.sibling;var D=p(g,w,f[S],L);if(D===null){w===null&&(w=_);break}t&&w&&D.alternate===null&&a(g,w),u=n(D,u,S),V===null?W=D:V.sibling=D,V=D,w=_}if(S===f.length)return r(g,w),G&&Qa(g,S),W;if(w===null){for(;S<f.length;S++)w=x(g,f[S],L),w!==null&&(u=n(w,u,S),V===null?W=w:V.sibling=w,V=w);return G&&Qa(g,S),W}for(w=e(w);S<f.length;S++)_=k(w,g,S,f[S],L),_!==null&&(t&&_.alternate!==null&&w.delete(_.key===null?S:_.key),u=n(_,u,S),V===null?W=_:V.sibling=_,V=_);return t&&w.forEach(function(_t){return a(g,_t)}),G&&Qa(g,S),W}function C(g,u,f,L){if(f==null)throw Error(M(151));for(var W=null,V=null,w=u,S=u=0,_=null,D=f.next();w!==null&&!D.done;S++,D=f.next()){w.index>S?(_=w,w=null):_=w.sibling;var _t=p(g,w,D.value,L);if(_t===null){w===null&&(w=_);break}t&&w&&_t.alternate===null&&a(g,w),u=n(_t,u,S),V===null?W=_t:V.sibling=_t,V=_t,w=_}if(D.done)return r(g,w),G&&Qa(g,S),W;if(w===null){for(;!D.done;S++,D=f.next())D=x(g,D.value,L),D!==null&&(u=n(D,u,S),V===null?W=D:V.sibling=D,V=D);return G&&Qa(g,S),W}for(w=e(w);!D.done;S++,D=f.next())D=k(w,g,S,D.value,L),D!==null&&(t&&D.alternate!==null&&w.delete(D.key===null?S:D.key),u=n(D,u,S),V===null?W=D:V.sibling=D,V=D);return t&&w.forEach(function(or){return a(g,or)}),G&&Qa(g,S),W}function E(g,u,f,L){if(typeof f=="object"&&f!==null&&f.type===we&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case zn:t:{for(var W=f.key;u!==null;){if(u.key===W){if(W=f.type,W===we){if(u.tag===7){r(g,u.sibling),L=i(u,f.props.children),L.return=g,g=L;break t}}else if(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===fr&&Rr(W)===u.type){r(g,u.sibling),L=i(u,f.props),Li(L,f),L.return=g,g=L;break t}r(g,u);break}else a(g,u);u=u.sibling}f.type===we?(L=$r(f.props.children,g.mode,L,f.key),L.return=g,g=L):(L=ao(f.type,f.key,f.props,null,g.mode,L),Li(L,f),L.return=g,g=L)}return o(g);case Ci:t:{for(W=f.key;u!==null;){if(u.key===W)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){r(g,u.sibling),L=i(u,f.children||[]),L.return=g,g=L;break t}else{r(g,u);break}else a(g,u);u=u.sibling}L=P2(f,g.mode,L),L.return=g,g=L}return o(g);case fr:return f=Rr(f),E(g,u,f,L)}if(Bi(f))return y(g,u,f,L);if(ki(f)){if(W=ki(f),typeof W!="function")throw Error(M(150));return f=W.call(f),C(g,u,f,L)}if(typeof f.then=="function")return E(g,u,qn(f),L);if(f.$$typeof===Ra)return E(g,u,Zn(g,f),L);Gn(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(r(g,u.sibling),L=i(u,f),L.return=g,g=L):(r(g,u),L=I2(f,g.mode,L),L.return=g,g=L),o(g)):r(g,u)}return function(g,u,f,L){try{Ri=0;var W=E(g,u,f,L);return Oe=null,W}catch(w){if(w===ri||w===Ro)throw w;var V=Ft(29,w,null,g.mode);return V.lanes=L,V.return=g,V}}}var ee=jh(!0),Wh=jh(!1),vr=!1;function T1(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ql(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Wr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Hr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(X&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=Lo(t),Lh(t,null,r),a}return Ko(t,e,a,r),Lo(t)}function zi(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,Q0(t,r)}}function al(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var Gl=!1;function _i(){if(Gl){var t=De;if(t!==null)throw t}}function Ti(t,a,r,e){Gl=!1;var i=t.updateQueue;vr=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,s=c.next;c.next=null,o===null?n=s:o.next=s,o=c;var v=t.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==o&&(l===null?v.firstBaseUpdate=s:l.next=s,v.lastBaseUpdate=c))}if(n!==null){var x=i.baseState;o=0,v=s=c=null,l=n;do{var p=l.lane&-536870913,k=p!==l.lane;if(k?(Z&p)===p:(e&p)===p){p!==0&&p===Xe&&(Gl=!0),v!==null&&(v=v.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var y=t,C=l;p=a;var E=r;switch(C.tag){case 1:if(y=C.payload,typeof y=="function"){x=y.call(E,x,p);break t}x=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=C.payload,p=typeof y=="function"?y.call(E,x,p):y,p==null)break t;x=it({},x,p);break t;case 2:vr=!0}}p=l.callback,p!==null&&(t.flags|=64,k&&(t.flags|=8192),k=i.callbacks,k===null?i.callbacks=[p]:k.push(p))}else k={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(s=v=k,c=x):v=v.next=k,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;k=l,l=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);v===null&&(c=x),i.baseState=c,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n===null&&(i.shared.lanes=0),Dr|=o,t.lanes=o,t.memoizedState=x}}function Hh(t,a){if(typeof t!="function")throw Error(M(191,t));t.call(a)}function Sh(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Hh(r[t],a)}var Qe=Ta(null),wo=Ta(0);function Oc(t,a){t=ir,tt(wo,t),tt(Qe,a),ir=t|a.baseLanes}function Yl(){tt(wo,ir),tt(Qe,Qe.current)}function E1(){ir=wo.current,Bt(Qe),Bt(wo)}var ea=Ta(null),ka=null;function xr(t){var a=t.alternate;tt(st,st.current&1),tt(ea,t),ka===null&&(a===null||Qe.current!==null||a.memoizedState!==null)&&(ka=t)}function Xl(t){tt(st,st.current),tt(ea,t),ka===null&&(ka=t)}function Ah(t){t.tag===22?(tt(st,st.current),tt(ea,t),ka===null&&(ka=t)):Lr(t)}function Lr(){tt(st,st.current),tt(ea,ea.current)}function Jt(t){Bt(ea),ka===t&&(ka=null),Bt(st)}var st=Ta(0);function Co(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||h1(r)||u1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var ar=0,T=null,$=null,ft=null,Bo=!1,Ue=!1,ie=!1,bo=0,Ji=0,Ze=null,$p=0;function ht(){throw Error(M(321))}function N1(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!ra(t[r],a[r]))return!1;return!0}function D1(t,a,r,e,i,n){return ar=n,T=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,A.H=t===null||t.memoizedState===null?du:J1,ie=!1,n=r(e,i),ie=!1,Ue&&(n=zh(a,r,e,i)),Vh(t),n}function Vh(t){A.H=Fi;var a=$!==null&&$.next!==null;if(ar=0,ft=$=T=null,Bo=!1,Ji=0,Ze=null,a)throw Error(M(300));t===null||xt||(t=t.dependencies,t!==null&&mo(t)&&(xt=!0))}function zh(t,a,r,e){T=t;var i=0;do{if(Ue&&(Ze=null),Ji=0,Ue=!1,25<=i)throw Error(M(301));if(i+=1,ft=$=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}A.H=cu,n=a(r,e)}while(Ue);return n}function Ip(){var t=A.H,a=t.useState()[0];return a=typeof a.then=="function"?hn(a):a,t=t.useState()[0],($!==null?$.memoizedState:null)!==t&&(T.flags|=1024),a}function O1(){var t=bo!==0;return bo=0,t}function U1(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function Z1(t){if(Bo){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Bo=!1}ar=0,ft=$=T=null,Ue=!1,Ji=bo=0,Ze=null}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?T.memoizedState=ft=t:ft=ft.next=t,ft}function gt(){if($===null){var t=T.alternate;t=t!==null?t.memoizedState:null}else t=$.next;var a=ft===null?T.memoizedState:ft.next;if(a!==null)ft=a,$=t;else{if(t===null)throw T.alternate===null?Error(M(467)):Error(M(310));$=t,t={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},ft===null?T.memoizedState=ft=t:ft=ft.next=t}return ft}function Jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hn(t){var a=Ji;return Ji+=1,Ze===null&&(Ze=[]),t=bh(Ze,t,a),a=T,(ft===null?a.memoizedState:ft.next)===null&&(a=a.alternate,A.H=a===null||a.memoizedState===null?du:J1),t}function Fo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hn(t);if(t.$$typeof===Ra)return St(t)}throw Error(M(438,String(t)))}function q1(t){var a=null,r=T.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=T.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=Jo(),T.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=N4;return a.index++,r}function rr(t,a){return typeof a=="function"?a(t):a}function eo(t){var a=gt();return G1(a,$,t)}function G1(t,a,r){var e=t.queue;if(e===null)throw Error(M(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var l=o=null,c=null,s=a,v=!1;do{var x=s.lane&-536870913;if(x!==s.lane?(Z&x)===x:(ar&x)===x){var p=s.revertLane;if(p===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),x===Xe&&(v=!0);else if((ar&p)===p){s=s.next,p===Xe&&(v=!0);continue}else x={lane:0,revertLane:s.revertLane,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},c===null?(l=c=x,o=n):c=c.next=x,T.lanes|=p,Dr|=p;x=s.action,ie&&r(n,x),n=s.hasEagerState?s.eagerState:r(n,x)}else p={lane:x,revertLane:s.revertLane,gesture:s.gesture,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},c===null?(l=c=p,o=n):c=c.next=p,T.lanes|=x,Dr|=x;s=s.next}while(s!==null&&s!==a);if(c===null?o=n:c.next=l,!ra(n,t.memoizedState)&&(xt=!0,v&&(r=De,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=c,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function rl(t){var a=gt(),r=a.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);ra(n,a.memoizedState)||(xt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function _h(t,a,r){var e=T,i=gt(),n=G;if(n){if(r===void 0)throw Error(M(407));r=r()}else r=a();var o=!ra(($||i).memoizedState,r);if(o&&(i.memoizedState=r,xt=!0),i=i.queue,Y1(Nh.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||ft!==null&&ft.memoizedState.tag&1){if(e.flags|=2048,Ke(9,{destroy:void 0},Eh.bind(null,e,i,r,a),null),I===null)throw Error(M(349));n||(ar&127)!==0||Th(e,a,r)}return r}function Th(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=T.updateQueue,a===null?(a=Jo(),T.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function Eh(t,a,r,e){a.value=r,a.getSnapshot=e,Dh(a)&&Oh(t)}function Nh(t,a,r){return r(function(){Dh(a)&&Oh(t)})}function Dh(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!ra(t,r)}catch{return!0}}function Oh(t){var a=ce(t,2);a!==null&&Gt(a,t,2)}function Ql(t){var a=Nt();if(typeof t=="function"){var r=t;if(t=r(),ie){mr(!0);try{r()}finally{mr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:t},a}function Uh(t,a,r,e){return t.baseState=r,G1(t,$,typeof e=="function"?e:rr)}function Pp(t,a,r,e,i){if(Io(t))throw Error(M(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};A.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,Zh(a,n)):(n.next=r.next,a.pending=r.next=n)}}function Zh(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=A.T,o={};A.T=o;try{var l=r(i,e),c=A.S;c!==null&&c(o,l),Uc(t,a,l)}catch(s){Kl(t,a,s)}finally{n!==null&&o.types!==null&&(n.types=o.types),A.T=n}}else try{n=r(i,e),Uc(t,a,n)}catch(s){Kl(t,a,s)}}function Uc(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){Zc(t,a,e)},function(e){return Kl(t,a,e)}):Zc(t,a,r)}function Zc(t,a,r){a.status="fulfilled",a.value=r,qh(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,Zh(t,r)))}function Kl(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,qh(a),a=a.next;while(a!==e)}t.action=null}function qh(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Gh(t,a){return a}function qc(t,a){if(G){var r=I.formState;if(r!==null){t:{var e=T;if(G){if(et){a:{for(var i=et,n=va;i.nodeType!==8;){if(!n){i=null;break a}if(i=xa(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){et=xa(i.nextSibling),e=i.data==="F!";break t}}Er(e)}e=!1}e&&(a=r[0])}}return r=Nt(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gh,lastRenderedState:a},r.queue=e,r=nu.bind(null,T,e),e.dispatch=r,e=Ql(!1),n=R1.bind(null,T,!1,e.queue),e=Nt(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=Pp.bind(null,T,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function Gc(t){var a=gt();return Yh(a,$,t)}function Yh(t,a,r){if(a=G1(t,a,Gh)[0],t=eo(rr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=hn(a)}catch(o){throw o===ri?Ro:o}else e=a;a=gt();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(T.flags|=2048,Ke(9,{destroy:void 0},t5.bind(null,i,r),null)),[e,n,t]}function t5(t,a){t.action=a}function Yc(t){var a=gt(),r=$;if(r!==null)return Yh(a,r,t);gt(),a=a.memoizedState,r=gt();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function Ke(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=T.updateQueue,a===null&&(a=Jo(),T.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function Xh(){return gt().memoizedState}function io(t,a,r,e){var i=Nt();T.flags|=t,i.memoizedState=Ke(1|a,{destroy:void 0},r,e===void 0?null:e)}function $o(t,a,r,e){var i=gt();e=e===void 0?null:e;var n=i.memoizedState.inst;$!==null&&e!==null&&N1(e,$.memoizedState.deps)?i.memoizedState=Ke(a,n,r,e):(T.flags|=t,i.memoizedState=Ke(1|a,n,r,e))}function Xc(t,a){io(8390656,8,t,a)}function Y1(t,a){$o(2048,8,t,a)}function a5(t){T.flags|=4;var a=T.updateQueue;if(a===null)a=Jo(),T.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function Qh(t){var a=gt().memoizedState;return a5({ref:a,nextImpl:t}),function(){if((X&2)!==0)throw Error(M(440));return a.impl.apply(void 0,arguments)}}function Kh(t,a){return $o(4,2,t,a)}function Rh(t,a){return $o(4,4,t,a)}function Jh(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Fh(t,a,r){r=r!=null?r.concat([t]):null,$o(4,4,Jh.bind(null,a,t),r)}function X1(){}function $h(t,a){var r=gt();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&N1(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function Ih(t,a){var r=gt();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&N1(a,e[1]))return e[0];if(e=t(),ie){mr(!0);try{t()}finally{mr(!1)}}return r.memoizedState=[e,a],e}function Q1(t,a,r){return r===void 0||(ar&1073741824)!==0&&(Z&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=Uu(),T.lanes|=t,Dr|=t,r)}function Ph(t,a,r,e){return ra(r,a)?r:Qe.current!==null?(t=Q1(t,r,e),ra(t,a)||(xt=!0),t):(ar&42)===0||(ar&1073741824)!==0&&(Z&261930)===0?(xt=!0,t.memoizedState=r):(t=Uu(),T.lanes|=t,Dr|=t,a)}function tu(t,a,r,e,i){var n=Q.p;Q.p=n!==0&&8>n?n:8;var o=A.T,l={};A.T=l,R1(t,!1,a,r);try{var c=i(),s=A.S;if(s!==null&&s(l,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=Fp(c,e);Ei(t,a,v,aa(t))}else Ei(t,a,e,aa(t))}catch(x){Ei(t,a,{then:function(){},status:"rejected",reason:x},aa())}finally{Q.p=n,o!==null&&l.types!==null&&(o.types=l.types),A.T=o}}function r5(){}function Rl(t,a,r,e){if(t.tag!==5)throw Error(M(476));var i=au(t).queue;tu(t,i,a,Fr,r===null?r5:function(){return ru(t),r(e)})}function au(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Fr,baseState:Fr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:Fr},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function ru(t){var a=au(t);a.next===null&&(a=t.alternate.memoizedState),Ei(t,a.next.queue,{},aa())}function K1(){return St(Pi)}function eu(){return gt().memoizedState}function iu(){return gt().memoizedState}function e5(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=aa();t=Wr(r);var e=Hr(a,t,r);e!==null&&(Gt(e,a,r),zi(e,a,r)),a={cache:V1()},t.payload=a;return}a=a.return}}function i5(t,a,r){var e=aa();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Io(t)?ou(a,r):(r=W1(t,a,r,e),r!==null&&(Gt(r,t,e),lu(r,a,e)))}function nu(t,a,r){var e=aa();Ei(t,a,r,e)}function Ei(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Io(t))ou(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,l=n(o,r);if(i.hasEagerState=!0,i.eagerState=l,ra(l,o))return Ko(t,a,i,0),I===null&&Qo(),!1}catch{}if(r=W1(t,a,i,e),r!==null)return Gt(r,t,e),lu(r,a,e),!0}return!1}function R1(t,a,r,e){if(e={lane:2,revertLane:ed(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Io(t)){if(a)throw Error(M(479))}else a=W1(t,r,e,2),a!==null&&Gt(a,t,2)}function Io(t){var a=t.alternate;return t===T||a!==null&&a===T}function ou(t,a){Ue=Bo=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function lu(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,Q0(t,r)}}var Fi={readContext:St,use:Fo,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht};Fi.useEffectEvent=ht;var du={readContext:St,use:Fo,useCallback:function(t,a){return Nt().memoizedState=[t,a===void 0?null:a],t},useContext:St,useEffect:Xc,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,io(4194308,4,Jh.bind(null,a,t),r)},useLayoutEffect:function(t,a){return io(4194308,4,t,a)},useInsertionEffect:function(t,a){io(4,2,t,a)},useMemo:function(t,a){var r=Nt();a=a===void 0?null:a;var e=t();if(ie){mr(!0);try{t()}finally{mr(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=Nt();if(r!==void 0){var i=r(a);if(ie){mr(!0);try{r(a)}finally{mr(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=i5.bind(null,T,t),[e.memoizedState,t]},useRef:function(t){var a=Nt();return t={current:t},a.memoizedState=t},useState:function(t){t=Ql(t);var a=t.queue,r=nu.bind(null,T,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:X1,useDeferredValue:function(t,a){var r=Nt();return Q1(r,t,a)},useTransition:function(){var t=Ql(!1);return t=tu.bind(null,T,t.queue,!0,!1),Nt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=T,i=Nt();if(G){if(r===void 0)throw Error(M(407));r=r()}else{if(r=a(),I===null)throw Error(M(349));(Z&127)!==0||Th(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,Xc(Nh.bind(null,e,n,t),[t]),e.flags|=2048,Ke(9,{destroy:void 0},Eh.bind(null,e,n,r,a),null),r},useId:function(){var t=Nt(),a=I.identifierPrefix;if(G){var r=Va,e=Aa;r=(e&~(1<<32-ta(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=bo++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=$p++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:K1,useFormState:qc,useActionState:qc,useOptimistic:function(t){var a=Nt();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=R1.bind(null,T,!0,r),r.dispatch=a,[t,a]},useMemoCache:q1,useCacheRefresh:function(){return Nt().memoizedState=e5.bind(null,T)},useEffectEvent:function(t){var a=Nt(),r={impl:t};return a.memoizedState=r,function(){if((X&2)!==0)throw Error(M(440));return r.impl.apply(void 0,arguments)}}},J1={readContext:St,use:Fo,useCallback:$h,useContext:St,useEffect:Y1,useImperativeHandle:Fh,useInsertionEffect:Kh,useLayoutEffect:Rh,useMemo:Ih,useReducer:eo,useRef:Xh,useState:function(){return eo(rr)},useDebugValue:X1,useDeferredValue:function(t,a){var r=gt();return Ph(r,$.memoizedState,t,a)},useTransition:function(){var t=eo(rr)[0],a=gt().memoizedState;return[typeof t=="boolean"?t:hn(t),a]},useSyncExternalStore:_h,useId:eu,useHostTransitionStatus:K1,useFormState:Gc,useActionState:Gc,useOptimistic:function(t,a){var r=gt();return Uh(r,$,t,a)},useMemoCache:q1,useCacheRefresh:iu};J1.useEffectEvent=Qh;var cu={readContext:St,use:Fo,useCallback:$h,useContext:St,useEffect:Y1,useImperativeHandle:Fh,useInsertionEffect:Kh,useLayoutEffect:Rh,useMemo:Ih,useReducer:rl,useRef:Xh,useState:function(){return rl(rr)},useDebugValue:X1,useDeferredValue:function(t,a){var r=gt();return $===null?Q1(r,t,a):Ph(r,$.memoizedState,t,a)},useTransition:function(){var t=rl(rr)[0],a=gt().memoizedState;return[typeof t=="boolean"?t:hn(t),a]},useSyncExternalStore:_h,useId:eu,useHostTransitionStatus:K1,useFormState:Yc,useActionState:Yc,useOptimistic:function(t,a){var r=gt();return $!==null?Uh(r,$,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:q1,useCacheRefresh:iu};cu.useEffectEvent=Qh;function el(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:it({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Jl={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=aa(),i=Wr(e);i.payload=a,r!=null&&(i.callback=r),a=Hr(t,i,e),a!==null&&(Gt(a,t,e),zi(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=aa(),i=Wr(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=Hr(t,i,e),a!==null&&(Gt(a,t,e),zi(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=aa(),e=Wr(r);e.tag=2,a!=null&&(e.callback=a),a=Hr(t,e,r),a!==null&&(Gt(a,t,r),zi(a,t,r))}};function Qc(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!Xi(r,e)||!Xi(i,n):!0}function Kc(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&Jl.enqueueReplaceState(a,a.state,null)}function ne(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=it({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function hu(t){xo(t)}function uu(t){console.error(t)}function su(t){xo(t)}function jo(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function Rc(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Fl(t,a,r){return r=Wr(r),r.tag=3,r.payload={element:null},r.callback=function(){jo(t,a)},r}function gu(t){return t=Wr(t),t.tag=3,t}function pu(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){Rc(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Rc(a,r,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})})}function n5(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&ai(a,r,i,!0),r=ea.current,r!==null){switch(r.tag){case 31:case 13:return ka===null?Vo():r.alternate===null&&ut===0&&(ut=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===yo?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),pl(t,e,i)),!1;case 22:return r.flags|=65536,e===yo?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),pl(t,e,i)),!1}throw Error(M(435,r.tag))}return pl(t,e,i),Vo(),!1}if(G)return a=ea.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==Nl&&(t=Error(M(422),{cause:e}),Ki(fa(t,r)))):(e!==Nl&&(a=Error(M(423),{cause:e}),Ki(fa(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=fa(e,r),i=Fl(t.stateNode,e,i),al(t,i),ut!==4&&(ut=2)),!1;var n=Error(M(520),{cause:e});if(n=fa(n,r),Oi===null?Oi=[n]:Oi.push(n),ut!==4&&(ut=2),a===null)return!0;e=fa(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=Fl(r.stateNode,e,t),al(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Sr===null||!Sr.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=gu(i),pu(i,t,r,e),al(r,i),!1}r=r.return}while(r!==null);return!1}var F1=Error(M(461)),xt=!1;function jt(t,a,r,e){a.child=t===null?Wh(a,null,r,e):ee(a,t.child,r,e)}function Jc(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var l in e)l!=="ref"&&(o[l]=e[l])}else o=e;return re(a),e=D1(t,a,r,o,n,i),l=O1(),t!==null&&!xt?(U1(t,a,i),er(t,a,i)):(G&&l&&S1(a),a.flags|=1,jt(t,a,e,i),a.child)}function Fc(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!H1(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,fu(t,a,n,e,i)):(t=ao(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!$1(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:Xi,r(o,e)&&t.ref===a.ref)return er(t,a,i)}return a.flags|=1,t=$a(n,e),t.ref=a.ref,t.return=a,a.child=t}function fu(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(Xi(n,e)&&t.ref===a.ref)if(xt=!1,a.pendingProps=e=n,$1(t,i))(t.flags&131072)!==0&&(xt=!0);else return a.lanes=t.lanes,er(t,a,i)}return $l(t,a,r,e,i)}function vu(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return $c(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&ro(a,n!==null?n.cachePool:null),n!==null?Oc(a,n):Yl(),Ah(a);else return e=a.lanes=536870912,$c(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(ro(a,n.cachePool),Oc(a,n),Lr(a),a.memoizedState=null):(t!==null&&ro(a,null),Yl(),Lr(a));return jt(t,a,i,r),a.child}function ji(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function $c(t,a,r,e,i){var n=z1();return n=n===null?null:{parent:kt._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&ro(a,null),Yl(),Ah(a),t!==null&&ai(t,a,e,!0),a.childLanes=i,null}function no(t,a){return a=Wo({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function Ic(t,a,r){return ee(a,t.child,null,r),t=no(a,a.pendingProps),t.flags|=2,Jt(a),a.memoizedState=null,t}function o5(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(G){if(e.mode==="hidden")return t=no(a,e),a.lanes=536870912,ji(null,t);if(Xl(a),(t=et)?(t=ds(t,va),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Tr!==null?{id:Aa,overflow:Va}:null,retryLane:536870912,hydrationErrors:null},r=mh(t),r.return=a,a.child=r,Ht=a,et=null)):t=null,t===null)throw Er(a);return a.lanes=536870912,null}return no(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(Xl(a),i)if(a.flags&256)a.flags&=-257,a=Ic(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(M(558));else if(xt||ai(t,a,r,!1),i=(r&t.childLanes)!==0,xt||i){if(e=I,e!==null&&(o=K0(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,ce(t,o),Gt(e,t,o),F1;Vo(),a=Ic(t,a,r)}else t=n.treeContext,et=xa(o.nextSibling),Ht=a,G=!0,jr=null,va=!1,t!==null&&wh(a,t),a=no(a,e),a.flags|=4096;return a}return t=$a(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function oo(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(M(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function $l(t,a,r,e,i){return re(a),r=D1(t,a,r,e,void 0,i),e=O1(),t!==null&&!xt?(U1(t,a,i),er(t,a,i)):(G&&e&&S1(a),a.flags|=1,jt(t,a,r,i),a.child)}function Pc(t,a,r,e,i,n){return re(a),a.updateQueue=null,r=zh(a,e,r,i),Vh(t),e=O1(),t!==null&&!xt?(U1(t,a,n),er(t,a,n)):(G&&e&&S1(a),a.flags|=1,jt(t,a,r,n),a.child)}function t0(t,a,r,e,i){if(re(a),a.stateNode===null){var n=Ae,o=r.contextType;typeof o=="object"&&o!==null&&(n=St(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Jl,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},T1(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?St(o):Ae,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(el(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&Jl.enqueueReplaceState(n,n.state,null),Ti(a,e,n,i),_i(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var l=a.memoizedProps,c=ne(r,l);n.props=c;var s=n.context,v=r.contextType;o=Ae,typeof v=="object"&&v!==null&&(o=St(v));var x=r.getDerivedStateFromProps;v=typeof x=="function"||typeof n.getSnapshotBeforeUpdate=="function",l=a.pendingProps!==l,v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(l||s!==o)&&Kc(a,n,e,o),vr=!1;var p=a.memoizedState;n.state=p,Ti(a,e,n,i),_i(),s=a.memoizedState,l||p!==s||vr?(typeof x=="function"&&(el(a,r,x,e),s=a.memoizedState),(c=vr||Qc(a,r,c,e,p,s,o))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=s),n.props=e,n.state=s,n.context=o,e=c):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,ql(t,a),o=a.memoizedProps,v=ne(r,o),n.props=v,x=a.pendingProps,p=n.context,s=r.contextType,c=Ae,typeof s=="object"&&s!==null&&(c=St(s)),l=r.getDerivedStateFromProps,(s=typeof l=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==x||p!==c)&&Kc(a,n,e,c),vr=!1,p=a.memoizedState,n.state=p,Ti(a,e,n,i),_i();var k=a.memoizedState;o!==x||p!==k||vr||t!==null&&t.dependencies!==null&&mo(t.dependencies)?(typeof l=="function"&&(el(a,r,l,e),k=a.memoizedState),(v=vr||Qc(a,r,v,e,p,k,c)||t!==null&&t.dependencies!==null&&mo(t.dependencies))?(s||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,k,c),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,k,c)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=k),n.props=e,n.state=k,n.context=c,e=v):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,oo(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=ee(a,t.child,null,i),a.child=ee(a,null,r,i)):jt(t,a,r,i),a.memoizedState=n.state,t=a.child):t=er(t,a,i),t}function a0(t,a,r,e){return ae(),a.flags|=256,jt(t,a,r,e),a.child}var il={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nl(t){return{baseLanes:t,cachePool:Bh()}}function ol(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=$t),t}function ku(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(st.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(G){if(i?xr(a):Lr(a),(t=et)?(t=ds(t,va),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Tr!==null?{id:Aa,overflow:Va}:null,retryLane:536870912,hydrationErrors:null},r=mh(t),r.return=a,a.child=r,Ht=a,et=null)):t=null,t===null)throw Er(a);return u1(t)?a.lanes=32:a.lanes=536870912,null}var l=e.children;return e=e.fallback,i?(Lr(a),i=a.mode,l=Wo({mode:"hidden",children:l},i),e=$r(e,i,r,null),l.return=a,e.return=a,l.sibling=e,a.child=l,e=a.child,e.memoizedState=nl(r),e.childLanes=ol(t,o,r),a.memoizedState=il,ji(null,e)):(xr(a),Il(a,l))}var c=t.memoizedState;if(c!==null&&(l=c.dehydrated,l!==null)){if(n)a.flags&256?(xr(a),a.flags&=-257,a=ll(t,a,r)):a.memoizedState!==null?(Lr(a),a.child=t.child,a.flags|=128,a=null):(Lr(a),l=e.fallback,i=a.mode,e=Wo({mode:"visible",children:e.children},i),l=$r(l,i,r,null),l.flags|=2,e.return=a,l.return=a,e.sibling=l,a.child=e,ee(a,t.child,null,r),e=a.child,e.memoizedState=nl(r),e.childLanes=ol(t,o,r),a.memoizedState=il,a=ji(null,e));else if(xr(a),u1(l)){if(o=l.nextSibling&&l.nextSibling.dataset,o)var s=o.dgst;o=s,e=Error(M(419)),e.stack="",e.digest=o,Ki({value:e,source:null,stack:null}),a=ll(t,a,r)}else if(xt||ai(t,a,r,!1),o=(r&t.childLanes)!==0,xt||o){if(o=I,o!==null&&(e=K0(o,r),e!==0&&e!==c.retryLane))throw c.retryLane=e,ce(t,e),Gt(o,t,e),F1;h1(l)||Vo(),a=ll(t,a,r)}else h1(l)?(a.flags|=192,a.child=t.child,a=null):(t=c.treeContext,et=xa(l.nextSibling),Ht=a,G=!0,jr=null,va=!1,t!==null&&wh(a,t),a=Il(a,e.children),a.flags|=4096);return a}return i?(Lr(a),l=e.fallback,i=a.mode,c=t.child,s=c.sibling,e=$a(c,{mode:"hidden",children:e.children}),e.subtreeFlags=c.subtreeFlags&65011712,s!==null?l=$a(s,l):(l=$r(l,i,r,null),l.flags|=2),l.return=a,e.return=a,e.sibling=l,a.child=e,ji(null,e),e=a.child,l=t.child.memoizedState,l===null?l=nl(r):(i=l.cachePool,i!==null?(c=kt._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=Bh(),l={baseLanes:l.baseLanes|r,cachePool:i}),e.memoizedState=l,e.childLanes=ol(t,o,r),a.memoizedState=il,ji(t.child,e)):(xr(a),r=t.child,t=r.sibling,r=$a(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function Il(t,a){return a=Wo({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Wo(t,a){return t=Ft(22,t,null,a),t.lanes=0,t}function ll(t,a,r){return ee(a,t.child,null,r),t=Il(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function r0(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),Ol(t.return,a,r)}function dl(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function xu(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=st.current,l=(o&2)!==0;if(l?(o=o&1|2,a.flags|=128):o&=1,tt(st,o),jt(t,a,e,r),e=G?Qi:0,!l&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&r0(t,r,a);else if(t.tag===19)r0(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&Co(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),dl(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&Co(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}dl(a,!0,r,null,n,e);break;case"together":dl(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function er(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Dr|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(ai(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(M(153));if(a.child!==null){for(t=a.child,r=$a(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=$a(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function $1(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&mo(t)))}function l5(t,a,r){switch(a.tag){case 3:po(a,a.stateNode.containerInfo),kr(a,kt,t.memoizedState.cache),ae();break;case 27:case 5:bl(a);break;case 4:po(a,a.stateNode.containerInfo);break;case 10:kr(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Xl(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(xr(a),a.flags|=128,null):(r&a.child.childLanes)!==0?ku(t,a,r):(xr(a),t=er(t,a,r),t!==null?t.sibling:null);xr(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||(ai(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return xu(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),tt(st,st.current),e)break;return null;case 22:return a.lanes=0,vu(t,a,r,a.pendingProps);case 24:kr(a,kt,t.memoizedState.cache)}return er(t,a,r)}function Lu(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)xt=!0;else{if(!$1(t,r)&&(a.flags&128)===0)return xt=!1,l5(t,a,r);xt=(t.flags&131072)!==0}else xt=!1,G&&(a.flags&1048576)!==0&&yh(a,Qi,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=Rr(a.elementType),a.type=t,typeof t=="function")H1(t)?(e=ne(t,e),a.tag=1,a=t0(null,a,t,e,r)):(a.tag=0,a=$l(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===f1){a.tag=11,a=Jc(null,a,t,e,r);break t}else if(i===v1){a.tag=14,a=Fc(null,a,t,e,r);break t}}throw a=Cl(t)||t,Error(M(306,a,""))}}return a;case 0:return $l(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=ne(e,a.pendingProps),t0(t,a,e,i,r);case 3:t:{if(po(a,a.stateNode.containerInfo),t===null)throw Error(M(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,ql(t,a),Ti(a,e,null,r);var o=a.memoizedState;if(e=o.cache,kr(a,kt,e),e!==n.cache&&Ul(a,[kt],r,!0),_i(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=a0(t,a,e,r);break t}else if(e!==i){i=fa(Error(M(424)),a),Ki(i),a=a0(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,et=xa(t.firstChild),Ht=a,G=!0,jr=null,va=!0,r=Wh(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ae(),e===i){a=er(t,a,r);break t}jt(t,a,e,r)}a=a.child}return a;case 26:return oo(t,a),t===null?(r=C0(a.type,null,a.pendingProps,null))?a.memoizedState=r:G||(r=a.type,t=a.pendingProps,e=Eo(br.current).createElement(r),e[Wt]=a,e[Yt]=t,At(e,r,t),Ct(e),a.stateNode=e):a.memoizedState=C0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return bl(a),t===null&&G&&(e=a.stateNode=cs(a.type,a.pendingProps,br.current),Ht=a,va=!0,i=et,Ur(a.type)?(s1=i,et=xa(e.firstChild)):et=i),jt(t,a,a.pendingProps.children,r),oo(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&G&&((i=e=et)&&(e=T5(e,a.type,a.pendingProps,va),e!==null?(a.stateNode=e,Ht=a,et=xa(e.firstChild),va=!1,i=!0):i=!1),i||Er(a)),bl(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,d1(i,n)?e=null:o!==null&&d1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=D1(t,a,Ip,null,null,r),Pi._currentValue=i),oo(t,a),jt(t,a,e,r),a.child;case 6:return t===null&&G&&((t=r=et)&&(r=E5(r,a.pendingProps,va),r!==null?(a.stateNode=r,Ht=a,et=null,t=!0):t=!1),t||Er(a)),null;case 13:return ku(t,a,r);case 4:return po(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=ee(a,null,e,r):jt(t,a,e,r),a.child;case 11:return Jc(t,a,a.type,a.pendingProps,r);case 7:return jt(t,a,a.pendingProps,r),a.child;case 8:return jt(t,a,a.pendingProps.children,r),a.child;case 12:return jt(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,kr(a,a.type,e.value),jt(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,re(a),i=St(i),e=e(i),a.flags|=1,jt(t,a,e,r),a.child;case 14:return Fc(t,a,a.type,a.pendingProps,r);case 15:return fu(t,a,a.type,a.pendingProps,r);case 19:return xu(t,a,r);case 31:return o5(t,a,r);case 22:return vu(t,a,r,a.pendingProps);case 24:return re(a),e=St(kt),t===null?(i=z1(),i===null&&(i=I,n=V1(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},T1(a),kr(a,kt,i)):((t.lanes&r)!==0&&(ql(t,a),Ti(a,null,null,r),_i()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),kr(a,kt,e)):(e=n.cache,kr(a,kt,e),e!==i.cache&&Ul(a,[kt],r,!0))),jt(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(M(156,a.tag))}function qa(t){t.flags|=4}function cl(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(Gu())t.flags|=8192;else throw Pr=yo,_1}else t.flags&=-16777217}function e0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ss(a))if(Gu())t.flags|=8192;else throw Pr=yo,_1}function Yn(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?Y0():536870912,t.lanes|=a,Re|=a)}function Mi(t,a){if(!G)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function rt(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function d5(t,a,r){var e=a.pendingProps;switch(A1(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(a),null;case 1:return rt(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Ia(kt),qe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Le(a)?qa(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,tl())),rt(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(qa(a),n!==null?(rt(a),e0(a,n)):(rt(a),cl(a,i,null,e,r))):n?n!==t.memoizedState?(qa(a),rt(a),e0(a,n)):(rt(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&qa(a),rt(a),cl(a,i,t,e,r)),null;case 27:if(fo(a),r=br.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&qa(a);else{if(!e){if(a.stateNode===null)throw Error(M(166));return rt(a),null}t=_a.current,Le(a)?Vc(a,t):(t=cs(i,e,r),a.stateNode=t,qa(a))}return rt(a),null;case 5:if(fo(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&qa(a);else{if(!e){if(a.stateNode===null)throw Error(M(166));return rt(a),null}if(n=_a.current,Le(a))Vc(a,n);else{var o=Eo(br.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[Wt]=a,n[Yt]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(At(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&qa(a)}}return rt(a),cl(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&qa(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(M(166));if(t=br.current,Le(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=Ht,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[Wt]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||ns(t.nodeValue,r)),t||Er(a,!0)}else t=Eo(t).createTextNode(e),t[Wt]=a,a.stateNode=t}return rt(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=Le(a),r!==null){if(t===null){if(!e)throw Error(M(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(557));t[Wt]=a}else ae(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),t=!1}else r=tl(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?(Jt(a),a):(Jt(a),null);if((a.flags&128)!==0)throw Error(M(558))}return rt(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Le(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(M(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[Wt]=a}else ae(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),i=!1}else i=tl(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(Jt(a),a):(Jt(a),null)}return Jt(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),Yn(a,a.updateQueue),rt(a),null);case 4:return qe(),t===null&&id(a.stateNode.containerInfo),rt(a),null;case 10:return Ia(a.type),rt(a),null;case 19:if(Bt(st),e=a.memoizedState,e===null)return rt(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)Mi(e,!1);else{if(ut!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=Co(t),n!==null){for(a.flags|=128,Mi(e,!1),t=n.updateQueue,a.updateQueue=t,Yn(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)Mh(r,t),r=r.sibling;return tt(st,st.current&1|2),G&&Qa(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&It()>So&&(a.flags|=128,i=!0,Mi(e,!1),a.lanes=4194304)}else{if(!i)if(t=Co(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,Yn(a,t),Mi(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!G)return rt(a),null}else 2*It()-e.renderingStartTime>So&&r!==536870912&&(a.flags|=128,i=!0,Mi(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=It(),t.sibling=null,r=st.current,tt(st,i?r&1|2:r&1),G&&Qa(a,e.treeForkCount),t):(rt(a),null);case 22:case 23:return Jt(a),E1(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(rt(a),a.subtreeFlags&6&&(a.flags|=8192)):rt(a),r=a.updateQueue,r!==null&&Yn(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&Bt(Ir),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),Ia(kt),rt(a),null;case 25:return null;case 30:return null}throw Error(M(156,a.tag))}function c5(t,a){switch(A1(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Ia(kt),qe(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return fo(a),null;case 31:if(a.memoizedState!==null){if(Jt(a),a.alternate===null)throw Error(M(340));ae()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(Jt(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(M(340));ae()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Bt(st),null;case 4:return qe(),null;case 10:return Ia(a.type),null;case 22:case 23:return Jt(a),E1(),t!==null&&Bt(Ir),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Ia(kt),null;case 25:return null;default:return null}}function Mu(t,a){switch(A1(a),a.tag){case 3:Ia(kt),qe();break;case 26:case 27:case 5:fo(a);break;case 4:qe();break;case 31:a.memoizedState!==null&&Jt(a);break;case 13:Jt(a);break;case 19:Bt(st);break;case 10:Ia(a.type);break;case 22:case 23:Jt(a),E1(),t!==null&&Bt(Ir);break;case 24:Ia(kt)}}function un(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(l){J(a,a.return,l)}}function Nr(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,l=o.destroy;if(l!==void 0){o.destroy=void 0,i=a;var c=r,s=l;try{s()}catch(v){J(i,c,v)}}}e=e.next}while(e!==n)}}catch(v){J(a,a.return,v)}}function mu(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{Sh(a,r)}catch(e){J(t,t.return,e)}}}function yu(t,a,r){r.props=ne(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){J(t,a,e)}}function Ni(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){J(t,a,i)}}function za(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){J(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){J(t,a,i)}else r.current=null}function wu(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){J(t,t.return,i)}}function hl(t,a,r){try{var e=t.stateNode;H5(e,t.type,r,a),e[Yt]=a}catch(i){J(t,t.return,i)}}function Cu(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ur(t.type)||t.tag===4}function ul(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Cu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ur(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pl(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Ja));else if(e!==4&&(e===27&&Ur(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(Pl(t,a,r),t=t.sibling;t!==null;)Pl(t,a,r),t=t.sibling}function Ho(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&Ur(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Ho(t,a,r),t=t.sibling;t!==null;)Ho(t,a,r),t=t.sibling}function Bu(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);At(a,e,r),a[Wt]=t,a[Yt]=r}catch(n){J(t,t.return,n)}}var Ka=!1,vt=!1,sl=!1,i0=typeof WeakSet=="function"?WeakSet:Set,wt=null;function h5(t,a){if(t=t.containerInfo,o1=Uo,t=sh(t),b1(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,l=-1,c=-1,s=0,v=0,x=t,p=null;a:for(;;){for(var k;x!==r||i!==0&&x.nodeType!==3||(l=o+i),x!==n||e!==0&&x.nodeType!==3||(c=o+e),x.nodeType===3&&(o+=x.nodeValue.length),(k=x.firstChild)!==null;)p=x,x=k;for(;;){if(x===t)break a;if(p===r&&++s===i&&(l=o),p===n&&++v===e&&(c=o),(k=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=k}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(l1={focusedElem:t,selectionRange:r},Uo=!1,wt=a;wt!==null;)if(a=wt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,wt=t;else for(;wt!==null;){switch(a=wt,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var y=ne(r.type,i);t=e.getSnapshotBeforeUpdate(y,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(C){J(r,r.return,C)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)c1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":c1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(M(163))}if(t=a.sibling,t!==null){t.return=a.return,wt=t;break}wt=a.return}}function bu(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:Ya(t,r),e&4&&un(5,r);break;case 1:if(Ya(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){J(r,r.return,o)}else{var i=ne(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){J(r,r.return,o)}}e&64&&mu(r),e&512&&Ni(r,r.return);break;case 3:if(Ya(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{Sh(t,a)}catch(o){J(r,r.return,o)}}break;case 27:a===null&&e&4&&Bu(r);case 26:case 5:Ya(t,r),a===null&&e&4&&wu(r),e&512&&Ni(r,r.return);break;case 12:Ya(t,r);break;case 31:Ya(t,r),e&4&&Hu(t,r);break;case 13:Ya(t,r),e&4&&Su(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=L5.bind(null,r),N5(t,r))));break;case 22:if(e=r.memoizedState!==null||Ka,!e){a=a!==null&&a.memoizedState!==null||vt,i=Ka;var n=vt;Ka=e,(vt=a)&&!n?Xa(t,r,(r.subtreeFlags&8772)!==0):Ya(t,r),Ka=i,vt=n}break;case 30:break;default:Ya(t,r)}}function ju(t){var a=t.alternate;a!==null&&(t.alternate=null,ju(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&M1(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ct=null,Zt=!1;function Ga(t,a,r){for(r=r.child;r!==null;)Wu(t,a,r),r=r.sibling}function Wu(t,a,r){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(en,r)}catch{}switch(r.tag){case 26:vt||za(r,a),Ga(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:vt||za(r,a);var e=ct,i=Zt;Ur(r.type)&&(ct=r.stateNode,Zt=!1),Ga(t,a,r),Zi(r.stateNode),ct=e,Zt=i;break;case 5:vt||za(r,a);case 6:if(e=ct,i=Zt,ct=null,Ga(t,a,r),ct=e,Zt=i,ct!==null)if(Zt)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(r.stateNode)}catch(n){J(r,a,n)}else try{ct.removeChild(r.stateNode)}catch(n){J(r,a,n)}break;case 18:ct!==null&&(Zt?(t=ct,L0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Ie(t)):L0(ct,r.stateNode));break;case 4:e=ct,i=Zt,ct=r.stateNode.containerInfo,Zt=!0,Ga(t,a,r),ct=e,Zt=i;break;case 0:case 11:case 14:case 15:Nr(2,r,a),vt||Nr(4,r,a),Ga(t,a,r);break;case 1:vt||(za(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&yu(r,a,e)),Ga(t,a,r);break;case 21:Ga(t,a,r);break;case 22:vt=(e=vt)||r.memoizedState!==null,Ga(t,a,r),vt=e;break;default:Ga(t,a,r)}}function Hu(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ie(t)}catch(r){J(a,a.return,r)}}}function Su(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ie(t)}catch(r){J(a,a.return,r)}}function u5(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new i0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new i0),a;default:throw Error(M(435,t.tag))}}function Xn(t,a){var r=u5(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=M5.bind(null,t,e);e.then(i,i)}})}function Ot(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Ur(l.type)){ct=l.stateNode,Zt=!1;break t}break;case 5:ct=l.stateNode,Zt=!1;break t;case 3:case 4:ct=l.stateNode.containerInfo,Zt=!0;break t}l=l.return}if(ct===null)throw Error(M(160));Wu(n,o,i),ct=null,Zt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Au(a,t),a=a.sibling}var Ba=null;function Au(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ot(a,t),Ut(t),e&4&&(Nr(3,t,t.return),un(3,t),Nr(5,t,t.return));break;case 1:Ot(a,t),Ut(t),e&512&&(vt||r===null||za(r,r.return)),e&64&&Ka&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=Ba;if(Ot(a,t),Ut(t),e&512&&(vt||r===null||za(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[ln]||n[Wt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),At(n,e,r),n[Wt]=t,Ct(n),e=n;break t;case"link":var o=b0("link","href",i).get(e+(r.href||""));if(o){for(var l=0;l<o.length;l++)if(n=o[l],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(l,1);break a}}n=i.createElement(e),At(n,e,r),i.head.appendChild(n);break;case"meta":if(o=b0("meta","content",i).get(e+(r.content||""))){for(l=0;l<o.length;l++)if(n=o[l],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(l,1);break a}}n=i.createElement(e),At(n,e,r),i.head.appendChild(n);break;default:throw Error(M(468,e))}n[Wt]=t,Ct(n),e=n}t.stateNode=e}else j0(i,t.type,t.stateNode);else t.stateNode=B0(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?j0(i,t.type,t.stateNode):B0(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&hl(t,t.memoizedProps,r.memoizedProps)}break;case 27:Ot(a,t),Ut(t),e&512&&(vt||r===null||za(r,r.return)),r!==null&&e&4&&hl(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Ot(a,t),Ut(t),e&512&&(vt||r===null||za(r,r.return)),t.flags&32){i=t.stateNode;try{Ye(i,"")}catch(y){J(t,t.return,y)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,hl(t,i,r!==null?r.memoizedProps:i)),e&1024&&(sl=!0);break;case 6:if(Ot(a,t),Ut(t),e&4){if(t.stateNode===null)throw Error(M(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(y){J(t,t.return,y)}}break;case 3:if(ho=null,i=Ba,Ba=No(a.containerInfo),Ot(a,t),Ba=i,Ut(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{Ie(a.containerInfo)}catch(y){J(t,t.return,y)}sl&&(sl=!1,Vu(t));break;case 4:e=Ba,Ba=No(t.stateNode.containerInfo),Ot(a,t),Ut(t),Ba=e;break;case 12:Ot(a,t),Ut(t);break;case 31:Ot(a,t),Ut(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Xn(t,e)));break;case 13:Ot(a,t),Ut(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Po=It()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Xn(t,e)));break;case 22:i=t.memoizedState!==null;var c=r!==null&&r.memoizedState!==null,s=Ka,v=vt;if(Ka=s||i,vt=v||c,Ot(a,t),vt=v,Ka=s,Ut(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||c||Ka||vt||Jr(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){c=r=a;try{if(n=c.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{l=c.stateNode;var x=c.memoizedProps.style,p=x!=null&&x.hasOwnProperty("display")?x.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){J(c,c.return,y)}}}else if(a.tag===6){if(r===null){c=a;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(y){J(c,c.return,y)}}}else if(a.tag===18){if(r===null){c=a;try{var k=c.stateNode;i?M0(k,!0):M0(c.stateNode,!1)}catch(y){J(c,c.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,Xn(t,r))));break;case 19:Ot(a,t),Ut(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Xn(t,e)));break;case 30:break;case 21:break;default:Ot(a,t),Ut(t)}}function Ut(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if(Cu(e)){r=e;break}e=e.return}if(r==null)throw Error(M(160));switch(r.tag){case 27:var i=r.stateNode,n=ul(t);Ho(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(Ye(o,""),r.flags&=-33);var l=ul(t);Ho(t,l,o);break;case 3:case 4:var c=r.stateNode.containerInfo,s=ul(t);Pl(t,s,c);break;default:throw Error(M(161))}}catch(v){J(t,t.return,v)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Vu(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;Vu(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Ya(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)bu(t,a.alternate,a),a=a.sibling}function Jr(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Nr(4,a,a.return),Jr(a);break;case 1:za(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&yu(a,a.return,r),Jr(a);break;case 27:Zi(a.stateNode);case 26:case 5:za(a,a.return),Jr(a);break;case 22:a.memoizedState===null&&Jr(a);break;case 30:Jr(a);break;default:Jr(a)}t=t.sibling}}function Xa(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:Xa(i,n,r),un(4,n);break;case 1:if(Xa(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(s){J(e,e.return,s)}if(e=n,i=e.updateQueue,i!==null){var l=e.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Hh(c[i],l)}catch(s){J(e,e.return,s)}}r&&o&64&&mu(n),Ni(n,n.return);break;case 27:Bu(n);case 26:case 5:Xa(i,n,r),r&&e===null&&o&4&&wu(n),Ni(n,n.return);break;case 12:Xa(i,n,r);break;case 31:Xa(i,n,r),r&&o&4&&Hu(i,n);break;case 13:Xa(i,n,r),r&&o&4&&Su(i,n);break;case 22:n.memoizedState===null&&Xa(i,n,r),Ni(n,n.return);break;case 30:break;default:Xa(i,n,r)}a=a.sibling}}function I1(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&cn(r))}function P1(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&cn(t))}function Ca(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)zu(t,a,r,e),a=a.sibling}function zu(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ca(t,a,r,e),i&2048&&un(9,a);break;case 1:Ca(t,a,r,e);break;case 3:Ca(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&cn(t)));break;case 12:if(i&2048){Ca(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,l=n.onPostCommit;typeof l=="function"&&l(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){J(a,a.return,c)}}else Ca(t,a,r,e);break;case 31:Ca(t,a,r,e);break;case 13:Ca(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?Ca(t,a,r,e):Di(t,a):n._visibility&2?Ca(t,a,r,e):(n._visibility|=2,me(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&I1(o,a);break;case 24:Ca(t,a,r,e),i&2048&&P1(a.alternate,a);break;default:Ca(t,a,r,e)}}function me(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,l=r,c=e,s=o.flags;switch(o.tag){case 0:case 11:case 15:me(n,o,l,c,i),un(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?me(n,o,l,c,i):Di(n,o):(v._visibility|=2,me(n,o,l,c,i)),i&&s&2048&&I1(o.alternate,o);break;case 24:me(n,o,l,c,i),i&&s&2048&&P1(o.alternate,o);break;default:me(n,o,l,c,i)}a=a.sibling}}function Di(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:Di(r,e),i&2048&&I1(e.alternate,e);break;case 24:Di(r,e),i&2048&&P1(e.alternate,e);break;default:Di(r,e)}a=a.sibling}}var Wi=8192;function Me(t,a,r){if(t.subtreeFlags&Wi)for(t=t.child;t!==null;)_u(t,a,r),t=t.sibling}function _u(t,a,r){switch(t.tag){case 26:Me(t,a,r),t.flags&Wi&&t.memoizedState!==null&&J5(r,Ba,t.memoizedState,t.memoizedProps);break;case 5:Me(t,a,r);break;case 3:case 4:var e=Ba;Ba=No(t.stateNode.containerInfo),Me(t,a,r),Ba=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Wi,Wi=16777216,Me(t,a,r),Wi=e):Me(t,a,r));break;default:Me(t,a,r)}}function Tu(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function mi(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];wt=e,Nu(e,t)}Tu(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Eu(t),t=t.sibling}function Eu(t){switch(t.tag){case 0:case 11:case 15:mi(t),t.flags&2048&&Nr(9,t,t.return);break;case 3:mi(t);break;case 12:mi(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,lo(t)):mi(t);break;default:mi(t)}}function lo(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];wt=e,Nu(e,t)}Tu(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Nr(8,a,a.return),lo(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,lo(a));break;default:lo(a)}t=t.sibling}}function Nu(t,a){for(;wt!==null;){var r=wt;switch(r.tag){case 0:case 11:case 15:Nr(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:cn(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,wt=e;else t:for(r=t;wt!==null;){e=wt;var i=e.sibling,n=e.return;if(ju(e),e===r){wt=null;break t}if(i!==null){i.return=n,wt=i;break t}wt=n}}}var s5={getCacheForType:function(t){var a=St(kt),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return St(kt).controller.signal}},g5=typeof WeakMap=="function"?WeakMap:Map,X=0,I=null,U=null,Z=0,R=0,Rt=null,wr=!1,ei=!1,td=!1,ir=0,ut=0,Dr=0,te=0,ad=0,$t=0,Re=0,Oi=null,qt=null,t1=!1,Po=0,Du=0,So=1/0,Ao=null,Sr=null,Lt=0,Ar=null,Je=null,Pa=0,a1=0,r1=null,Ou=null,Ui=0,e1=null;function aa(){return(X&2)!==0&&Z!==0?Z&-Z:A.T!==null?ed():R0()}function Uu(){if($t===0)if((Z&536870912)===0||G){var t=Tn;Tn<<=1,(Tn&3932160)===0&&(Tn=262144),$t=t}else $t=536870912;return t=ea.current,t!==null&&(t.flags|=32),$t}function Gt(t,a,r){(t===I&&(R===2||R===9)||t.cancelPendingCommit!==null)&&(Fe(t,0),Cr(t,Z,$t,!1)),on(t,r),((X&2)===0||t!==I)&&(t===I&&((X&2)===0&&(te|=r),ut===4&&Cr(t,Z,$t,!1)),Ea(t))}function Zu(t,a,r){if((X&6)!==0)throw Error(M(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||nn(t,a),i=e?v5(t,a):gl(t,a,!0),n=e;do{if(i===0){ei&&!e&&Cr(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!p5(r)){i=gl(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var l=t;i=Oi;var c=l.current.memoizedState.isDehydrated;if(c&&(Fe(l,o).flags|=256),o=gl(l,o,!1),o!==2){if(td&&!c){l.errorRecoveryDisabledLanes|=n,te|=n,i=4;break t}n=qt,qt=i,n!==null&&(qt===null?qt=n:qt.push.apply(qt,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){Fe(t,0),Cr(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(M(345));case 4:if((a&4194048)!==a)break;case 6:Cr(e,a,$t,!wr);break t;case 2:qt=null;break;case 3:case 5:break;default:throw Error(M(329))}if((a&62914560)===a&&(i=Po+300-It(),10<i)){if(Cr(e,a,$t,!wr),qo(e,0,!0)!==0)break t;Pa=a,e.timeoutHandle=ls(n0.bind(null,e,r,qt,Ao,t1,a,$t,te,Re,wr,n,"Throttled",-0,0),i);break t}n0(e,r,qt,Ao,t1,a,$t,te,Re,wr,n,null,-0,0)}}break}while(!0);Ea(t)}function n0(t,a,r,e,i,n,o,l,c,s,v,x,p,k){if(t.timeoutHandle=-1,x=a.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ja},_u(a,n,x);var y=(n&62914560)===n?Po-It():(n&4194048)===n?Du-It():0;if(y=F5(x,y),y!==null){Pa=n,t.cancelPendingCommit=y(l0.bind(null,t,a,n,r,e,i,o,l,c,v,x,null,p,k)),Cr(t,n,o,!s);return}}l0(t,a,n,r,e,i,o,l,c)}function p5(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!ra(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Cr(t,a,r,e){a&=~ad,a&=~te,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-ta(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&X0(t,r,a)}function t2(){return(X&6)===0?(sn(0,!1),!1):!0}function rd(){if(U!==null){if(R===0)var t=U.return;else t=U,Fa=he=null,Z1(t),Oe=null,Ri=0,t=U;for(;t!==null;)Mu(t.alternate,t),t=t.return;U=null}}function Fe(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,V5(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Pa=0,rd(),I=t,U=r=$a(t.current,null),Z=a,R=0,Rt=null,wr=!1,ei=nn(t,a),td=!1,Re=$t=ad=te=Dr=ut=0,qt=Oi=null,t1=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-ta(e),n=1<<i;a|=t[i],e&=~n}return ir=a,Qo(),r}function qu(t,a){T=null,A.H=Fi,a===ri||a===Ro?(a=Nc(),R=3):a===_1?(a=Nc(),R=4):R=a===F1?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Rt=a,U===null&&(ut=1,jo(t,fa(a,t.current)))}function Gu(){var t=ea.current;return t===null?!0:(Z&4194048)===Z?ka===null:(Z&62914560)===Z||(Z&536870912)!==0?t===ka:!1}function Yu(){var t=A.H;return A.H=Fi,t===null?Fi:t}function Xu(){var t=A.A;return A.A=s5,t}function Vo(){ut=4,wr||(Z&4194048)!==Z&&ea.current!==null||(ei=!0),(Dr&134217727)===0&&(te&134217727)===0||I===null||Cr(I,Z,$t,!1)}function gl(t,a,r){var e=X;X|=2;var i=Yu(),n=Xu();(I!==t||Z!==a)&&(Ao=null,Fe(t,a)),a=!1;var o=ut;t:do try{if(R!==0&&U!==null){var l=U,c=Rt;switch(R){case 8:rd(),o=6;break t;case 3:case 2:case 9:case 6:ea.current===null&&(a=!0);var s=R;if(R=0,Rt=null,_e(t,l,c,s),r&&ei){o=0;break t}break;default:s=R,R=0,Rt=null,_e(t,l,c,s)}}f5(),o=ut;break}catch(v){qu(t,v)}while(!0);return a&&t.shellSuspendCounter++,Fa=he=null,X=e,A.H=i,A.A=n,U===null&&(I=null,Z=0,Qo()),o}function f5(){for(;U!==null;)Qu(U)}function v5(t,a){var r=X;X|=2;var e=Yu(),i=Xu();I!==t||Z!==a?(Ao=null,So=It()+500,Fe(t,a)):ei=nn(t,a);t:do try{if(R!==0&&U!==null){a=U;var n=Rt;a:switch(R){case 1:R=0,Rt=null,_e(t,a,n,1);break;case 2:case 9:if(Ec(n)){R=0,Rt=null,o0(a);break}a=function(){R!==2&&R!==9||I!==t||(R=7),Ea(t)},n.then(a,a);break t;case 3:R=7;break t;case 4:R=5;break t;case 7:Ec(n)?(R=0,Rt=null,o0(a)):(R=0,Rt=null,_e(t,a,n,7));break;case 5:var o=null;switch(U.tag){case 26:o=U.memoizedState;case 5:case 27:var l=U;if(o?ss(o):l.stateNode.complete){R=0,Rt=null;var c=l.sibling;if(c!==null)U=c;else{var s=l.return;s!==null?(U=s,a2(s)):U=null}break a}}R=0,Rt=null,_e(t,a,n,5);break;case 6:R=0,Rt=null,_e(t,a,n,6);break;case 8:rd(),ut=6;break t;default:throw Error(M(462))}}k5();break}catch(v){qu(t,v)}while(!0);return Fa=he=null,A.H=e,A.A=i,X=r,U!==null?0:(I=null,Z=0,Qo(),ut)}function k5(){for(;U!==null&&!U4();)Qu(U)}function Qu(t){var a=Lu(t.alternate,t,ir);t.memoizedProps=t.pendingProps,a===null?a2(t):U=a}function o0(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=Pc(r,a,a.pendingProps,a.type,void 0,Z);break;case 11:a=Pc(r,a,a.pendingProps,a.type.render,a.ref,Z);break;case 5:Z1(a);default:Mu(r,a),a=U=Mh(a,ir),a=Lu(r,a,ir)}t.memoizedProps=t.pendingProps,a===null?a2(t):U=a}function _e(t,a,r,e){Fa=he=null,Z1(a),Oe=null,Ri=0;var i=a.return;try{if(n5(t,i,a,r,Z)){ut=1,jo(t,fa(r,t.current)),U=null;return}}catch(n){if(i!==null)throw U=i,n;ut=1,jo(t,fa(r,t.current)),U=null;return}a.flags&32768?(G||e===1?t=!0:ei||(Z&536870912)!==0?t=!1:(wr=t=!0,(e===2||e===9||e===3||e===6)&&(e=ea.current,e!==null&&e.tag===13&&(e.flags|=16384))),Ku(a,t)):a2(a)}function a2(t){var a=t;do{if((a.flags&32768)!==0){Ku(a,wr);return}t=a.return;var r=d5(a.alternate,a,ir);if(r!==null){U=r;return}if(a=a.sibling,a!==null){U=a;return}U=a=t}while(a!==null);ut===0&&(ut=5)}function Ku(t,a){do{var r=c5(t.alternate,t);if(r!==null){r.flags&=32767,U=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){U=t;return}U=t=r}while(t!==null);ut=6,U=null}function l0(t,a,r,e,i,n,o,l,c){t.cancelPendingCommit=null;do r2();while(Lt!==0);if((X&6)!==0)throw Error(M(327));if(a!==null){if(a===t.current)throw Error(M(177));if(n=a.lanes|a.childLanes,n|=j1,F4(t,r,n,o,l,c),t===I&&(U=I=null,Z=0),Je=a,Ar=t,Pa=r,a1=n,r1=i,Ou=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,m5(vo,function(){return Iu(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=A.T,A.T=null,i=Q.p,Q.p=2,o=X,X|=4;try{h5(t,a,r)}finally{X=o,Q.p=i,A.T=e}}Lt=1,Ru(),Ju(),Fu()}}function Ru(){if(Lt===1){Lt=0;var t=Ar,a=Je,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=A.T,A.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{Au(a,t);var n=l1,o=sh(t.containerInfo),l=n.focusedElem,c=n.selectionRange;if(o!==l&&l&&l.ownerDocument&&uh(l.ownerDocument.documentElement,l)){if(c!==null&&b1(l)){var s=c.start,v=c.end;if(v===void 0&&(v=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(v,l.value.length);else{var x=l.ownerDocument||document,p=x&&x.defaultView||window;if(p.getSelection){var k=p.getSelection(),y=l.textContent.length,C=Math.min(c.start,y),E=c.end===void 0?C:Math.min(c.end,y);!k.extend&&C>E&&(o=E,E=C,C=o);var g=Hc(l,C),u=Hc(l,E);if(g&&u&&(k.rangeCount!==1||k.anchorNode!==g.node||k.anchorOffset!==g.offset||k.focusNode!==u.node||k.focusOffset!==u.offset)){var f=x.createRange();f.setStart(g.node,g.offset),k.removeAllRanges(),C>E?(k.addRange(f),k.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),k.addRange(f))}}}}for(x=[],k=l;k=k.parentNode;)k.nodeType===1&&x.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<x.length;l++){var L=x[l];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Uo=!!o1,l1=o1=null}finally{X=i,Q.p=e,A.T=r}}t.current=a,Lt=2}}function Ju(){if(Lt===2){Lt=0;var t=Ar,a=Je,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=A.T,A.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{bu(t,a.alternate,a)}finally{X=i,Q.p=e,A.T=r}}Lt=3}}function Fu(){if(Lt===4||Lt===3){Lt=0,Z4();var t=Ar,a=Je,r=Pa,e=Ou;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Lt=5:(Lt=0,Je=Ar=null,$u(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Sr=null),L1(r),a=a.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(en,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=A.T,i=Q.p,Q.p=2,A.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var l=e[o];n(l.value,{componentStack:l.stack})}}finally{A.T=a,Q.p=i}}(Pa&3)!==0&&r2(),Ea(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===e1?Ui++:(Ui=0,e1=t):Ui=0,sn(0,!1)}}function $u(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,cn(a)))}function r2(){return Ru(),Ju(),Fu(),Iu()}function Iu(){if(Lt!==5)return!1;var t=Ar,a=a1;a1=0;var r=L1(Pa),e=A.T,i=Q.p;try{Q.p=32>r?32:r,A.T=null,r=r1,r1=null;var n=Ar,o=Pa;if(Lt=0,Je=Ar=null,Pa=0,(X&6)!==0)throw Error(M(331));var l=X;if(X|=4,Eu(n.current),zu(n,n.current,o,r),X=l,sn(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(en,n)}catch{}return!0}finally{Q.p=i,A.T=e,$u(t,a)}}function d0(t,a,r){a=fa(r,a),a=Fl(t.stateNode,a,2),t=Hr(t,a,2),t!==null&&(on(t,2),Ea(t))}function J(t,a,r){if(t.tag===3)d0(t,t,r);else for(;a!==null;){if(a.tag===3){d0(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Sr===null||!Sr.has(e))){t=fa(r,t),r=gu(2),e=Hr(a,r,2),e!==null&&(pu(r,e,a,t),on(e,2),Ea(e));break}}a=a.return}}function pl(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new g5;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(td=!0,i.add(r),t=x5.bind(null,t,a,r),a.then(t,t))}function x5(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,I===t&&(Z&r)===r&&(ut===4||ut===3&&(Z&62914560)===Z&&300>It()-Po?(X&2)===0&&Fe(t,0):ad|=r,Re===Z&&(Re=0)),Ea(t)}function Pu(t,a){a===0&&(a=Y0()),t=ce(t,a),t!==null&&(on(t,a),Ea(t))}function L5(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),Pu(t,r)}function M5(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(M(314))}e!==null&&e.delete(a),Pu(t,r)}function m5(t,a){return k1(t,a)}var zo=null,ye=null,i1=!1,_o=!1,fl=!1,Br=0;function Ea(t){t!==ye&&t.next===null&&(ye===null?zo=ye=t:ye=ye.next=t),_o=!0,i1||(i1=!0,w5())}function sn(t,a){if(!fl&&_o){fl=!0;do for(var r=!1,e=zo;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,l=e.pingedLanes;n=(1<<31-ta(42|t)+1)-1,n&=i&~(o&~l),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,c0(e,n))}else n=Z,n=qo(e,e===I?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||nn(e,n)||(r=!0,c0(e,n));e=e.next}while(r);fl=!1}}function y5(){ts()}function ts(){_o=i1=!1;var t=0;Br!==0&&A5()&&(t=Br);for(var a=It(),r=null,e=zo;e!==null;){var i=e.next,n=as(e,a);n===0?(e.next=null,r===null?zo=i:r.next=i,i===null&&(ye=r)):(r=e,(t!==0||(n&3)!==0)&&(_o=!0)),e=i}Lt!==0&&Lt!==5||sn(t,!1),Br!==0&&(Br=0)}function as(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-ta(n),l=1<<o,c=i[o];c===-1?((l&r)===0||(l&e)!==0)&&(i[o]=J4(l,a)):c<=a&&(t.expiredLanes|=l),n&=~l}if(a=I,r=Z,r=qo(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(R===2||R===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&Y2(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||nn(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&Y2(e),L1(r)){case 2:case 8:r=q0;break;case 32:r=vo;break;case 268435456:r=G0;break;default:r=vo}return e=rs.bind(null,t),r=k1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&Y2(e),t.callbackPriority=2,t.callbackNode=null,2}function rs(t,a){if(Lt!==0&&Lt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(r2()&&t.callbackNode!==r)return null;var e=Z;return e=qo(t,t===I?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(Zu(t,e,a),as(t,It()),t.callbackNode!=null&&t.callbackNode===r?rs.bind(null,t):null)}function c0(t,a){if(r2())return null;Zu(t,a,!0)}function w5(){z5(function(){(X&6)!==0?k1(Z0,y5):ts()})}function ed(){if(Br===0){var t=Xe;t===0&&(t=_n,_n<<=1,(_n&261888)===0&&(_n=256)),Br=t}return Br}function h0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:In(""+t)}function u0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function C5(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=h0((i[Yt]||null).action),o=e.submitter;o&&(a=(a=o[Yt]||null)?h0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var l=new Go("action","action",null,e,i);t.push({event:l,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Br!==0){var c=o?u0(i,o):new FormData(i);Rl(r,{pending:!0,data:c,method:i.method,action:n},null,c)}}else typeof n=="function"&&(l.preventDefault(),c=o?u0(i,o):new FormData(i),Rl(r,{pending:!0,data:c,method:i.method,action:n},n,c))},currentTarget:i}]})}}for(Qn=0;Qn<El.length;Qn++)Kn=El[Qn],s0=Kn.toLowerCase(),g0=Kn[0].toUpperCase()+Kn.slice(1),ba(s0,"on"+g0);var Kn,s0,g0,Qn;ba(ph,"onAnimationEnd");ba(fh,"onAnimationIteration");ba(vh,"onAnimationStart");ba("dblclick","onDoubleClick");ba("focusin","onFocus");ba("focusout","onBlur");ba(qp,"onTransitionRun");ba(Gp,"onTransitionStart");ba(Yp,"onTransitionCancel");ba(kh,"onTransitionEnd");Ge("onMouseEnter",["mouseout","mouseover"]);Ge("onMouseLeave",["mouseout","mouseover"]);Ge("onPointerEnter",["pointerout","pointerover"]);Ge("onPointerLeave",["pointerout","pointerover"]);oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));oe("onBeforeInput",["compositionend","keypress","textInput","paste"]);oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($i));function es(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var l=e[o],c=l.instance,s=l.currentTarget;if(l=l.listener,c!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){xo(v)}i.currentTarget=null,n=c}else for(o=0;o<e.length;o++){if(l=e[o],c=l.instance,s=l.currentTarget,l=l.listener,c!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){xo(v)}i.currentTarget=null,n=c}}}}function O(t,a){var r=a[Wl];r===void 0&&(r=a[Wl]=new Set);var e=t+"__bubble";r.has(e)||(is(a,t,2,!1),r.add(e))}function vl(t,a,r){var e=0;a&&(e|=4),is(r,t,e,a)}var Rn="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[Rn]){t[Rn]=!0,J0.forEach(function(r){r!=="selectionchange"&&(B5.has(r)||vl(r,!1,t),vl(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Rn]||(a[Rn]=!0,vl("selectionchange",!1,a))}}function is(t,a,r,e){switch(ks(a)){case 2:var i=P5;break;case 8:i=tf;break;default:i=dd}r=i.bind(null,a,r,t),i=void 0,!zl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function kl(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var l=e.stateNode.containerInfo;if(l===i)break;if(o===4)for(o=e.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;l!==null;){if(o=Be(l),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){e=n=o;continue t}l=l.parentNode}}e=e.return}eh(function(){var s=n,v=y1(r),x=[];t:{var p=xh.get(t);if(p!==void 0){var k=Go,y=t;switch(t){case"keypress":if(to(r)===0)break t;case"keydown":case"keyup":k=Mp;break;case"focusin":y="focus",k=J2;break;case"focusout":y="blur",k=J2;break;case"beforeblur":case"afterblur":k=J2;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=wp;break;case ph:case fh:case vh:k=up;break;case kh:k=Bp;break;case"scroll":case"scrollend":k=op;break;case"wheel":k=jp;break;case"copy":case"cut":case"paste":k=gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=yc;break;case"toggle":case"beforetoggle":k=Hp}var C=(a&4)!==0,E=!C&&(t==="scroll"||t==="scrollend"),g=C?p!==null?p+"Capture":null:p;C=[];for(var u=s,f;u!==null;){var L=u;if(f=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||f===null||g===null||(L=Gi(u,g),L!=null&&C.push(Ii(u,L,f))),E)break;u=u.return}0<C.length&&(p=new k(p,y,null,r,v),x.push({event:p,listeners:C}))}}if((a&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",p&&r!==Vl&&(y=r.relatedTarget||r.fromElement)&&(Be(y)||y[Pe]))break t;if((k||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,k?(y=r.relatedTarget||r.toElement,k=s,y=y?Be(y):null,y!==null&&(E=rn(y),C=y.tag,y!==E||C!==5&&C!==27&&C!==6)&&(y=null)):(k=null,y=s),k!==y)){if(C=Mc,L="onMouseLeave",g="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(C=yc,L="onPointerLeave",g="onPointerEnter",u="pointer"),E=k==null?p:bi(k),f=y==null?p:bi(y),p=new C(L,u+"leave",k,r,v),p.target=E,p.relatedTarget=f,L=null,Be(v)===s&&(C=new C(g,u+"enter",y,r,v),C.target=f,C.relatedTarget=E,L=C),E=L,k&&y)a:{for(C=b5,g=k,u=y,f=0,L=g;L;L=C(L))f++;L=0;for(var W=u;W;W=C(W))L++;for(;0<f-L;)g=C(g),f--;for(;0<L-f;)u=C(u),L--;for(;f--;){if(g===u||u!==null&&g===u.alternate){C=g;break a}g=C(g),u=C(u)}C=null}else C=null;k!==null&&p0(x,p,k,C,!1),y!==null&&E!==null&&p0(x,E,y,C,!0)}}t:{if(p=s?bi(s):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var V=bc;else if(Bc(p))if(ch)V=Op;else{V=Np;var w=Ep}else k=p.nodeName,!k||k.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?s&&m1(s.elementType)&&(V=bc):V=Dp;if(V&&(V=V(t,s))){dh(x,V,r,v);break t}w&&w(t,p,s),t==="focusout"&&s&&p.type==="number"&&s.memoizedProps.value!=null&&Al(p,"number",p.value)}switch(w=s?bi(s):window,t){case"focusin":(Bc(w)||w.contentEditable==="true")&&(We=w,_l=s,Ai=null);break;case"focusout":Ai=_l=We=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,Sc(x,r,v);break;case"selectionchange":if(Zp)break;case"keydown":case"keyup":Sc(x,r,v)}var S;if(B1)t:{switch(t){case"compositionstart":var _="onCompositionStart";break t;case"compositionend":_="onCompositionEnd";break t;case"compositionupdate":_="onCompositionUpdate";break t}_=void 0}else je?oh(t,r)&&(_="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(_="onCompositionStart");_&&(nh&&r.locale!=="ko"&&(je||_!=="onCompositionStart"?_==="onCompositionEnd"&&je&&(S=ih()):(yr=v,w1="value"in yr?yr.value:yr.textContent,je=!0)),w=To(s,_),0<w.length&&(_=new mc(_,t,null,r,v),x.push({event:_,listeners:w}),S?_.data=S:(S=lh(r),S!==null&&(_.data=S)))),(S=Ap?Vp(t,r):zp(t,r))&&(_=To(s,"onBeforeInput"),0<_.length&&(w=new mc("onBeforeInput","beforeinput",null,r,v),x.push({event:w,listeners:_}),w.data=S)),C5(x,t,s,r,v)}es(x,a)})}function Ii(t,a,r){return{instance:t,listener:a,currentTarget:r}}function To(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Gi(t,r),i!=null&&e.unshift(Ii(t,i,n)),i=Gi(t,a),i!=null&&e.push(Ii(t,i,n))),t.tag===3)return e;t=t.return}return[]}function b5(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function p0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var l=r,c=l.alternate,s=l.stateNode;if(l=l.tag,c!==null&&c===e)break;l!==5&&l!==26&&l!==27||s===null||(c=s,i?(s=Gi(r,n),s!=null&&o.unshift(Ii(r,s,c))):i||(s=Gi(r,n),s!=null&&o.push(Ii(r,s,c)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var j5=/\r\n?/g,W5=/\u0000|\uFFFD/g;function f0(t){return(typeof t=="string"?t:""+t).replace(j5,`
`).replace(W5,"")}function ns(t,a){return a=f0(a),f0(t)===a}function F(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||Ye(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&Ye(t,""+e);break;case"className":Nn(t,"class",e);break;case"tabIndex":Nn(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Nn(t,r,e);break;case"style":rh(t,e,n);break;case"data":if(a!=="object"){Nn(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=In(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&F(t,a,"name",i.name,i,null),F(t,a,"formEncType",i.formEncType,i,null),F(t,a,"formMethod",i.formMethod,i,null),F(t,a,"formTarget",i.formTarget,i,null)):(F(t,a,"encType",i.encType,i,null),F(t,a,"method",i.method,i,null),F(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=In(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=Ja);break;case"onScroll":e!=null&&O("scroll",t);break;case"onScrollEnd":e!=null&&O("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(M(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(M(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=In(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":O("beforetoggle",t),O("toggle",t),$n(t,"popover",e);break;case"xlinkActuate":Za(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Za(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Za(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Za(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Za(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Za(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Za(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Za(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Za(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":$n(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=ip.get(r)||r,$n(t,r,e))}}function n1(t,a,r,e,i,n){switch(r){case"style":rh(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(M(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(M(60));t.innerHTML=r}}break;case"children":typeof e=="string"?Ye(t,e):(typeof e=="number"||typeof e=="bigint")&&Ye(t,""+e);break;case"onScroll":e!=null&&O("scroll",t);break;case"onScrollEnd":e!=null&&O("scrollend",t);break;case"onClick":e!=null&&(t.onclick=Ja);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!F0.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[Yt]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):$n(t,r,e)}}}function At(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":O("error",t),O("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(M(137,a));default:F(t,a,n,o,r,null)}}i&&F(t,a,"srcSet",r.srcSet,r,null),e&&F(t,a,"src",r.src,r,null);return;case"input":O("invalid",t);var l=n=o=i=null,c=null,s=null;for(e in r)if(r.hasOwnProperty(e)){var v=r[e];if(v!=null)switch(e){case"name":i=v;break;case"type":o=v;break;case"checked":c=v;break;case"defaultChecked":s=v;break;case"value":n=v;break;case"defaultValue":l=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(M(137,a));break;default:F(t,a,e,v,r,null)}}P0(t,n,l,c,s,o,i,!1);return;case"select":O("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(l=r[i],l!=null))switch(i){case"value":n=l;break;case"defaultValue":o=l;break;case"multiple":e=l;default:F(t,a,i,l,r,null)}a=n,r=o,t.multiple=!!e,a!=null?Ee(t,!!e,a,!1):r!=null&&Ee(t,!!e,r,!0);return;case"textarea":O("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(l=r[o],l!=null))switch(o){case"value":e=l;break;case"defaultValue":i=l;break;case"children":n=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(M(91));break;default:F(t,a,o,l,r,null)}ah(t,e,i,n);return;case"option":for(c in r)r.hasOwnProperty(c)&&(e=r[c],e!=null)&&(c==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":F(t,a,c,e,r,null));return;case"dialog":O("beforetoggle",t),O("toggle",t),O("cancel",t),O("close",t);break;case"iframe":case"object":O("load",t);break;case"video":case"audio":for(e=0;e<$i.length;e++)O($i[e],t);break;case"image":O("error",t),O("load",t);break;case"details":O("toggle",t);break;case"embed":case"source":case"link":O("error",t),O("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(s in r)if(r.hasOwnProperty(s)&&(e=r[s],e!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(M(137,a));default:F(t,a,s,e,r,null)}return;default:if(m1(a)){for(v in r)r.hasOwnProperty(v)&&(e=r[v],e!==void 0&&n1(t,a,v,e,r,void 0));return}}for(l in r)r.hasOwnProperty(l)&&(e=r[l],e!=null&&F(t,a,l,e,r,null))}function H5(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,l=null,c=null,s=null,v=null;for(k in r){var x=r[k];if(r.hasOwnProperty(k)&&x!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":c=x;default:e.hasOwnProperty(k)||F(t,a,k,null,e,x)}}for(var p in e){var k=e[p];if(x=r[p],e.hasOwnProperty(p)&&(k!=null||x!=null))switch(p){case"type":n=k;break;case"name":i=k;break;case"checked":s=k;break;case"defaultChecked":v=k;break;case"value":o=k;break;case"defaultValue":l=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(M(137,a));break;default:k!==x&&F(t,a,p,k,e,x)}}Sl(t,o,l,c,s,v,n,i);return;case"select":k=o=l=p=null;for(n in r)if(c=r[n],r.hasOwnProperty(n)&&c!=null)switch(n){case"value":break;case"multiple":k=c;default:e.hasOwnProperty(n)||F(t,a,n,null,e,c)}for(i in e)if(n=e[i],c=r[i],e.hasOwnProperty(i)&&(n!=null||c!=null))switch(i){case"value":p=n;break;case"defaultValue":l=n;break;case"multiple":o=n;default:n!==c&&F(t,a,i,n,e,c)}a=l,r=o,e=k,p!=null?Ee(t,!!r,p,!1):!!e!=!!r&&(a!=null?Ee(t,!!r,a,!0):Ee(t,!!r,r?[]:"",!1));return;case"textarea":k=p=null;for(l in r)if(i=r[l],r.hasOwnProperty(l)&&i!=null&&!e.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:F(t,a,l,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":p=i;break;case"defaultValue":k=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(M(91));break;default:i!==n&&F(t,a,o,i,e,n)}th(t,p,k);return;case"option":for(var y in r)p=r[y],r.hasOwnProperty(y)&&p!=null&&!e.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:F(t,a,y,null,e,p));for(c in e)p=e[c],k=r[c],e.hasOwnProperty(c)&&p!==k&&(p!=null||k!=null)&&(c==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":F(t,a,c,p,e,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var C in r)p=r[C],r.hasOwnProperty(C)&&p!=null&&!e.hasOwnProperty(C)&&F(t,a,C,null,e,p);for(s in e)if(p=e[s],k=r[s],e.hasOwnProperty(s)&&p!==k&&(p!=null||k!=null))switch(s){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(M(137,a));break;default:F(t,a,s,p,e,k)}return;default:if(m1(a)){for(var E in r)p=r[E],r.hasOwnProperty(E)&&p!==void 0&&!e.hasOwnProperty(E)&&n1(t,a,E,void 0,e,p);for(v in e)p=e[v],k=r[v],!e.hasOwnProperty(v)||p===k||p===void 0&&k===void 0||n1(t,a,v,p,e,k);return}}for(var g in r)p=r[g],r.hasOwnProperty(g)&&p!=null&&!e.hasOwnProperty(g)&&F(t,a,g,null,e,p);for(x in e)p=e[x],k=r[x],!e.hasOwnProperty(x)||p===k||p==null&&k==null||F(t,a,x,p,e,k)}function v0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function S5(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,l=i.duration;if(n&&l&&v0(o)){for(o=0,l=i.responseEnd,e+=1;e<r.length;e++){var c=r[e],s=c.startTime;if(s>l)break;var v=c.transferSize,x=c.initiatorType;v&&v0(x)&&(c=c.responseEnd,o+=v*(c<l?1:(l-s)/(c-s)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var o1=null,l1=null;function Eo(t){return t.nodeType===9?t:t.ownerDocument}function k0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function os(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function d1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var xl=null;function A5(){var t=window.event;return t&&t.type==="popstate"?t===xl?!1:(xl=t,!0):(xl=null,!1)}var ls=typeof setTimeout=="function"?setTimeout:void 0,V5=typeof clearTimeout=="function"?clearTimeout:void 0,x0=typeof Promise=="function"?Promise:void 0,z5=typeof queueMicrotask=="function"?queueMicrotask:typeof x0<"u"?function(t){return x0.resolve(null).then(t).catch(_5)}:ls;function _5(t){setTimeout(function(){throw t})}function Ur(t){return t==="head"}function L0(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),Ie(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")Zi(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Zi(r);for(var n=r.firstChild;n;){var o=n.nextSibling,l=n.nodeName;n[ln]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&Zi(t.ownerDocument.body);r=i}while(r);Ie(a)}function M0(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function c1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":c1(r),M1(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function T5(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[ln])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=xa(t.nextSibling),t===null)break}return null}function E5(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=xa(t.nextSibling),t===null))return null;return t}function ds(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xa(t.nextSibling),t===null))return null;return t}function h1(t){return t.data==="$?"||t.data==="$~"}function u1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function N5(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function xa(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var s1=null;function m0(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return xa(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function y0(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function cs(t,a,r){switch(a=Eo(r),t){case"html":if(t=a.documentElement,!t)throw Error(M(452));return t;case"head":if(t=a.head,!t)throw Error(M(453));return t;case"body":if(t=a.body,!t)throw Error(M(454));return t;default:throw Error(M(451))}}function Zi(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);M1(t)}var La=new Map,w0=new Set;function No(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var nr=Q.d;Q.d={f:D5,r:O5,D:U5,C:Z5,L:q5,m:G5,X:X5,S:Y5,M:Q5};function D5(){var t=nr.f(),a=t2();return t||a}function O5(t){var a=ti(t);a!==null&&a.tag===5&&a.type==="form"?ru(a):nr.r(t)}var ii=typeof document>"u"?null:document;function hs(t,a,r){var e=ii;if(e&&typeof a=="string"&&a){var i=pa(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),w0.has(i)||(w0.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),At(a,"link",t),Ct(a),e.head.appendChild(a)))}}function U5(t){nr.D(t),hs("dns-prefetch",t,null)}function Z5(t,a){nr.C(t,a),hs("preconnect",t,a)}function q5(t,a,r){nr.L(t,a,r);var e=ii;if(e&&t&&a){var i='link[rel="preload"][as="'+pa(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+pa(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+pa(r.imageSizes)+'"]')):i+='[href="'+pa(t)+'"]';var n=i;switch(a){case"style":n=$e(t);break;case"script":n=ni(t)}La.has(n)||(t=it({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),La.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(gn(n))||a==="script"&&e.querySelector(pn(n))||(a=e.createElement("link"),At(a,"link",t),Ct(a),e.head.appendChild(a)))}}function G5(t,a){nr.m(t,a);var r=ii;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+pa(e)+'"][href="'+pa(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=ni(t)}if(!La.has(n)&&(t=it({rel:"modulepreload",href:t},a),La.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(pn(n)))return}e=r.createElement("link"),At(e,"link",t),Ct(e),r.head.appendChild(e)}}}function Y5(t,a,r){nr.S(t,a,r);var e=ii;if(e&&t){var i=Te(e).hoistableStyles,n=$e(t);a=a||"default";var o=i.get(n);if(!o){var l={loading:0,preload:null};if(o=e.querySelector(gn(n)))l.loading=5;else{t=it({rel:"stylesheet",href:t,"data-precedence":a},r),(r=La.get(n))&&nd(t,r);var c=o=e.createElement("link");Ct(c),At(c,"link",t),c._p=new Promise(function(s,v){c.onload=s,c.onerror=v}),c.addEventListener("load",function(){l.loading|=1}),c.addEventListener("error",function(){l.loading|=2}),l.loading|=4,co(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:l},i.set(n,o)}}}function X5(t,a){nr.X(t,a);var r=ii;if(r&&t){var e=Te(r).hoistableScripts,i=ni(t),n=e.get(i);n||(n=r.querySelector(pn(i)),n||(t=it({src:t,async:!0},a),(a=La.get(i))&&od(t,a),n=r.createElement("script"),Ct(n),At(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function Q5(t,a){nr.M(t,a);var r=ii;if(r&&t){var e=Te(r).hoistableScripts,i=ni(t),n=e.get(i);n||(n=r.querySelector(pn(i)),n||(t=it({src:t,async:!0,type:"module"},a),(a=La.get(i))&&od(t,a),n=r.createElement("script"),Ct(n),At(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function C0(t,a,r,e){var i=(i=br.current)?No(i):null;if(!i)throw Error(M(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=$e(r.href),r=Te(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=$e(r.href);var n=Te(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(gn(t)))&&!n._p&&(o.instance=n,o.state.loading=5),La.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},La.set(t,r),n||K5(i,t,r,o.state))),a&&e===null)throw Error(M(528,""));return o}if(a&&e!==null)throw Error(M(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ni(r),r=Te(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(M(444,t))}}function $e(t){return'href="'+pa(t)+'"'}function gn(t){return'link[rel="stylesheet"]['+t+"]"}function us(t){return it({},t,{"data-precedence":t.precedence,precedence:null})}function K5(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),At(a,"link",r),Ct(a),t.head.appendChild(a))}function ni(t){return'[src="'+pa(t)+'"]'}function pn(t){return"script[async]"+t}function B0(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+pa(r.href)+'"]');if(e)return a.instance=e,Ct(e),e;var i=it({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Ct(e),At(e,"style",i),co(e,r.precedence,t),a.instance=e;case"stylesheet":i=$e(r.href);var n=t.querySelector(gn(i));if(n)return a.state.loading|=4,a.instance=n,Ct(n),n;e=us(r),(i=La.get(i))&&nd(e,i),n=(t.ownerDocument||t).createElement("link"),Ct(n);var o=n;return o._p=new Promise(function(l,c){o.onload=l,o.onerror=c}),At(n,"link",e),a.state.loading|=4,co(n,r.precedence,t),a.instance=n;case"script":return n=ni(r.src),(i=t.querySelector(pn(n)))?(a.instance=i,Ct(i),i):(e=r,(i=La.get(n))&&(e=it({},r),od(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),Ct(i),At(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(M(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,co(e,r.precedence,t));return a.instance}function co(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var l=e[o];if(l.dataset.precedence===a)n=l;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function nd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function od(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var ho=null;function b0(t,a,r){if(ho===null){var e=new Map,i=ho=new Map;i.set(r,e)}else i=ho,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[ln]||n[Wt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var l=e.get(o);l?l.push(n):e.set(o,[n])}}return e}function j0(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function R5(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ss(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function J5(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=$e(e.href),n=a.querySelector(gn(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Do.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,Ct(n);return}n=a.ownerDocument||a,e=us(e),(i=La.get(i))&&nd(e,i),n=n.createElement("link"),Ct(n);var o=n;o._p=new Promise(function(l,c){o.onload=l,o.onerror=c}),At(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Do.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var Ll=0;function F5(t,a){return t.stylesheets&&t.count===0&&uo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&uo(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&Ll===0&&(Ll=62500*S5());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uo(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Ll?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function Do(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Oo=null;function uo(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Oo=new Map,a.forEach($5,t),Oo=null,Do.call(t))}function $5(t,a){if(!(a.state.loading&4)){var r=Oo.get(t);if(r)var e=r.get(null);else{r=new Map,Oo.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=Do.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var Pi={$$typeof:Ra,Provider:null,Consumer:null,_currentValue:Fr,_currentValue2:Fr,_threadCount:0};function I5(t,a,r,e,i,n,o,l,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=X2(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=X2(0),this.hiddenUpdates=X2(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function gs(t,a,r,e,i,n,o,l,c,s,v,x){return t=new I5(t,a,r,o,c,s,v,x,l),a=1,n===!0&&(a|=24),n=Ft(3,null,null,a),t.current=n,n.stateNode=t,a=V1(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},T1(n),t}function ps(t){return t?(t=Ae,t):Ae}function fs(t,a,r,e,i,n){i=ps(i),e.context===null?e.context=i:e.pendingContext=i,e=Wr(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=Hr(t,e,a),r!==null&&(Gt(r,t,a),zi(r,t,a))}function W0(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function ld(t,a){W0(t,a),(t=t.alternate)&&W0(t,a)}function vs(t){if(t.tag===13||t.tag===31){var a=ce(t,67108864);a!==null&&Gt(a,t,67108864),ld(t,67108864)}}function H0(t){if(t.tag===13||t.tag===31){var a=aa();a=x1(a);var r=ce(t,a);r!==null&&Gt(r,t,a),ld(t,a)}}var Uo=!0;function P5(t,a,r,e){var i=A.T;A.T=null;var n=Q.p;try{Q.p=2,dd(t,a,r,e)}finally{Q.p=n,A.T=i}}function tf(t,a,r,e){var i=A.T;A.T=null;var n=Q.p;try{Q.p=8,dd(t,a,r,e)}finally{Q.p=n,A.T=i}}function dd(t,a,r,e){if(Uo){var i=g1(e);if(i===null)kl(t,a,e,Zo,r),S0(t,e);else if(rf(i,t,a,r,e))e.stopPropagation();else if(S0(t,e),a&4&&-1<af.indexOf(t)){for(;i!==null;){var n=ti(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=Kr(n.pendingLanes);if(o!==0){var l=n;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var c=1<<31-ta(o);l.entanglements[1]|=c,o&=~c}Ea(n),(X&6)===0&&(So=It()+500,sn(0,!1))}}break;case 31:case 13:l=ce(n,2),l!==null&&Gt(l,n,2),t2(),ld(n,2)}if(n=g1(e),n===null&&kl(t,a,e,Zo,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else kl(t,a,e,null,r)}}function g1(t){return t=y1(t),cd(t)}var Zo=null;function cd(t){if(Zo=null,t=Be(t),t!==null){var a=rn(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=E0(a),t!==null)return t;t=null}else if(r===31){if(t=N0(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Zo=t,null}function ks(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q4()){case Z0:return 2;case q0:return 8;case vo:case G4:return 32;case G0:return 268435456;default:return 32}default:return 32}}var p1=!1,Vr=null,zr=null,_r=null,tn=new Map,an=new Map,Mr=[],af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function S0(t,a){switch(t){case"focusin":case"focusout":Vr=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":tn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(a.pointerId)}}function yi(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=ti(a),a!==null&&vs(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function rf(t,a,r,e,i){switch(a){case"focusin":return Vr=yi(Vr,t,a,r,e,i),!0;case"dragenter":return zr=yi(zr,t,a,r,e,i),!0;case"mouseover":return _r=yi(_r,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return tn.set(n,yi(tn.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,an.set(n,yi(an.get(n)||null,t,a,r,e,i)),!0}return!1}function xs(t){var a=Be(t.target);if(a!==null){var r=rn(a);if(r!==null){if(a=r.tag,a===13){if(a=E0(r),a!==null){t.blockedOn=a,gc(t.priority,function(){H0(r)});return}}else if(a===31){if(a=N0(r),a!==null){t.blockedOn=a,gc(t.priority,function(){H0(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=g1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);Vl=e,r.target.dispatchEvent(e),Vl=null}else return a=ti(r),a!==null&&vs(a),t.blockedOn=r,!1;a.shift()}return!0}function A0(t,a,r){so(t)&&r.delete(a)}function ef(){p1=!1,Vr!==null&&so(Vr)&&(Vr=null),zr!==null&&so(zr)&&(zr=null),_r!==null&&so(_r)&&(_r=null),tn.forEach(A0),an.forEach(A0)}function Jn(t,a){t.blockedOn===a&&(t.blockedOn=null,p1||(p1=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,ef)))}var Fn=null;function V0(t){Fn!==t&&(Fn=t,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,function(){Fn===t&&(Fn=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(cd(e||r)===null)continue;break}var n=ti(r);n!==null&&(t.splice(a,3),a-=3,Rl(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function Ie(t){function a(c){return Jn(c,t)}Vr!==null&&Jn(Vr,t),zr!==null&&Jn(zr,t),_r!==null&&Jn(_r,t),tn.forEach(a),an.forEach(a);for(var r=0;r<Mr.length;r++){var e=Mr[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<Mr.length&&(r=Mr[0],r.blockedOn===null);)xs(r),r.blockedOn===null&&Mr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[Yt]||null;if(typeof n=="function")o||V0(r);else if(o){var l=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[Yt]||null)l=o.formAction;else if(cd(i)!==null)continue}else l=o.action;typeof l=="function"?r[e+1]=l:(r.splice(e,3),e-=3),V0(r)}}}function Ls(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function hd(t){this._internalRoot=t}e2.prototype.render=hd.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(M(409));var r=a.current,e=aa();fs(r,e,t,a,null,null)};e2.prototype.unmount=hd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;fs(t.current,2,null,t,null,null),t2(),a[Pe]=null}};function e2(t){this._internalRoot=t}e2.prototype.unstable_scheduleHydration=function(t){if(t){var a=R0();t={blockedOn:null,target:t,priority:a};for(var r=0;r<Mr.length&&a!==0&&a<Mr[r].priority;r++);Mr.splice(r,0,t),r===0&&xs(t)}};var z0=_0.version;if(z0!=="19.2.8")throw Error(M(527,z0,"19.2.8"));Q.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=T4(a),t=t!==null?D0(t):null,t=t===null?null:t.stateNode,t};var nf={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(wi=__REACT_DEVTOOLS_GLOBAL_HOOK__,!wi.isDisabled&&wi.supportsFiber))try{en=wi.inject(nf),Pt=wi}catch{}var wi;i2.createRoot=function(t,a){if(!T0(t))throw Error(M(299));var r=!1,e="",i=hu,n=uu,o=su;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=gs(t,1,!1,null,null,r,e,null,i,n,o,Ls),t[Pe]=a.current,id(t),new hd(a)};i2.hydrateRoot=function(t,a,r){if(!T0(t))throw Error(M(299));var e=!1,i="",n=hu,o=uu,l=su,c=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(l=r.onRecoverableError),r.formState!==void 0&&(c=r.formState)),a=gs(t,1,!0,a,r??null,e,i,c,n,o,l,Ls),a.context=ps(null),r=a.current,e=aa(),e=x1(e),i=Wr(e),i.callback=null,Hr(r,i,e),r=e,a.current.lanes=r,on(a,r),Ea(a),t[Pe]=a.current,id(t),new e2(a)};i2.version="19.2.8"});var ws=sr((Of,ys)=>{"use strict";function ms(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ms)}catch(t){console.error(t)}}ms(),ys.exports=Ms()});var mt=Yr(Oa()),Xg=Yr(ws());var oi=Yr(Oa(),1);var ud=Yr(Oa(),1),sd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gd=ud.default.createContext&&ud.default.createContext(sd);var of=["attr","size","title"];function lf(t,a){if(t==null)return{};var r,e,i=df(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function df(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function n2(){return n2=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},n2.apply(null,arguments)}function Cs(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function o2(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Cs(Object(r),!0).forEach(function(e){cf(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Cs(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function cf(t,a,r){return(a=hf(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function hf(t){var a=uf(t,"string");return typeof a=="symbol"?a:a+""}function uf(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function Bs(t){return t&&t.map((a,r)=>oi.default.createElement(a.tag,o2({key:r},a.attr),Bs(a.child)))}function Y(t){return a=>oi.default.createElement(sf,n2({attr:o2({},t.attr)},a),Bs(t.child))}function sf(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=lf(t,of),l=i||r.size||"1em",c;return r.className&&(c=r.className),t.className&&(c=(c?c+" ":"")+t.className),oi.default.createElement("svg",n2({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:c,style:o2(o2({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),n&&oi.default.createElement("title",null,n),t.children)};return gd!==void 0?oi.default.createElement(gd.Consumer,null,r=>a(r)):a(sd)}function bs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function js(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function Ws(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function Hs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function Ss(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function As(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function Vs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function zs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function _s(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function Ts(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function Es(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function Ns(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function Ds(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function Os(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function Us(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function Zs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function qs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function Gs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function Ys(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function Xs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function Qs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function Ks(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function Rs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(t)}function Js(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function Fs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function $s(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function Is(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function Ps(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 11-5-5-5 5"},child:[]},{tag:"path",attr:{d:"m17 18-5-5-5 5"},child:[]}]})(t)}function tg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 6 5 5 5-5"},child:[]},{tag:"path",attr:{d:"m7 13 5 5 5-5"},child:[]}]})(t)}function ag(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function rg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function eg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function ig(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var ng=Gs,l2=js,pd=Zs,fd=Us,og=Xs,lg=Qs,dg=zs,d2=Ws,cg=Js,hg=Ys,fn=Es;var ug=$s,li=Is,vd=Ss,sg=Fs,gg=As,kd=ag,xd=rg,pg=Ps,fg=tg,c2=Ts;var h2=bs,Ld=qs,vg=Os,kg=Ns,xg=Ds,u2=ig,Lg=_s,Mg=eg,mg=Hs,yg=Vs,s2=Rs,wg=Ks;var pt=Yr(Oa());var B=Yr(Oa());var Cg={member:"會友",coworker:"同工",admin_staff:"行政",leader:"領袖",pastor:"牧師",admin:"管理員"},Bg={member:d2,coworker:mg,admin_staff:lg,leader:yg,pastor:og,admin:dg},bg=["leader","pastor","admin"],Md=[{id:"work",label:"工作日誌",Icon:ng,href:"work.html",roles:["pastor","admin_staff","admin"]},{id:"serve",label:"服事管理",Icon:l2,href:""},{id:"venue",label:"場地預約",Icon:Mg,href:""}],jg=["pastor","admin_staff","admin"],Wg=(t,a)=>!t.roles||t.roles.includes(a),gf=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},Hg=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},Sg=({active:t,shell:a})=>{let[r,e]=(0,B.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(y=>{let C=!y;try{localStorage.setItem("tbcSidebarCollapsed",C?"1":"0")}catch{}return C}),[n,o]=(0,B.useState)(!1),[l,c]=(0,B.useState)(""),s=(0,B.useRef)(null),v=a.identity||{name:"",role:"member",status:"loading"},x=Bg[v.role]||d2,p=bg.includes(v.role),k=y=>{c(`${y} 尚未開放`),clearTimeout(s.current),s.current=setTimeout(()=>c(""),2200)};return B.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},B.default.createElement("div",{className:"flex flex-col"},B.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},B.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},B.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},B.default.createElement(u2,{size:20,strokeWidth:2})),r&&B.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},B.default.createElement(fd,{size:18}))),!r&&B.default.createElement(B.default.Fragment,null,B.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),B.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},B.default.createElement(fd,{size:18})))),B.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},Md.map(y=>{let C=t===y.id,E=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${C?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,g=B.default.createElement(B.default.Fragment,null,B.default.createElement(y.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&B.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},y.label));return y.href?C?B.default.createElement("div",{key:y.id,className:E,title:y.label,"aria-current":"page"},g):B.default.createElement("a",{key:y.id,href:y.href,className:E,title:y.label},g):B.default.createElement("button",{key:y.id,type:"button",onClick:()=>k(y.label),className:E,title:y.label},g)}))),B.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},B.default.createElement("button",{type:"button",onClick:()=>o(y=>!y),"aria-haspopup":"menu","aria-expanded":n,title:`${v.name}（${Cg[v.role]||v.role}）`,className:`tbc-sb-user flex items-center rounded-full hover:bg-slate-100 transition-colors ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-12 w-full"}`},B.default.createElement(x,{size:20,strokeWidth:1.75,className:`shrink-0 ${p?"text-amber-500":"text-slate-500"}`}),!r&&B.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},v.name)),n&&B.default.createElement(B.default.Fragment,null,B.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),B.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},B.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},B.default.createElement(pd,{size:18,strokeWidth:1.75}),"登出")))),l&&B.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},l))},Ag=({supabase:t,notice:a})=>{let[r,e]=(0,B.useState)(!1),[i,n]=(0,B.useState)(""),[o,l]=(0,B.useState)(""),[c,s]=(0,B.useState)(!1),[v,x]=(0,B.useState)(""),p=async y=>{if(y.preventDefault(),!i.trim()||!o||c)return;s(!0),x("");let{error:C}=await t.auth.signInWithPassword({email:gf(i),password:o});s(!1),C&&x("帳號或密碼不正確，請再試一次")},k="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return B.default.createElement("form",{onSubmit:p,className:"w-full max-w-sm mx-auto space-y-3"},B.default.createElement("input",{value:i,onChange:y=>n(y.target.value),placeholder:"帳號",autoComplete:"username",className:k}),B.default.createElement("div",{className:"relative"},B.default.createElement("input",{type:r?"text":"password",value:o,onChange:y=>l(y.target.value),placeholder:"密碼",autoComplete:"current-password",className:k+" pr-12"}),B.default.createElement("button",{type:"button",onClick:()=>e(y=>!y),title:r?"隱藏密碼":"顯示密碼","aria-label":r?"隱藏密碼":"顯示密碼",className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"},r?B.default.createElement(s2,{size:18}):B.default.createElement(wg,{size:18}))),(v||a)&&B.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},B.default.createElement(li,{size:16}),v||a),B.default.createElement("button",{type:"submit",disabled:c||!i.trim()||!o,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},c?"登入中…":"登入"))},Vg=({shell:t,entries:a=[],onSoon:r})=>{let[e,i]=(0,B.useState)(!1),n=t.identity||{},o=Bg[n.role]||d2,l=bg.includes(n.role);return B.default.createElement("div",{className:"relative flex justify-center mt-14"},B.default.createElement("button",{type:"button",onClick:()=>i(c=>!c),"aria-haspopup":"menu","aria-expanded":e,title:`${n.name}（${Cg[n.role]||n.role}）`,className:"tbc-user flex items-center gap-2.5 h-11 px-5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"},B.default.createElement(o,{size:20,strokeWidth:1.75,className:l?"text-amber-500":"text-slate-500"}),B.default.createElement("span",{className:"text-[15px] text-slate-900"},n.name)),e&&B.default.createElement(B.default.Fragment,null,B.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>i(!1)}),B.default.createElement("div",{role:"menu",className:"absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 w-48 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in"},B.default.createElement("p",{className:"px-3 pt-1 pb-1 text-xs text-slate-400"},"選擇功能"),a.map(c=>{let s="tbc-menu-entry w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors",v=B.default.createElement(B.default.Fragment,null,B.default.createElement(c.Icon,{size:18,strokeWidth:1.75}),c.label);return c.href?B.default.createElement("a",{key:c.id,role:"menuitem",href:c.href,className:s},v):B.default.createElement("button",{key:c.id,role:"menuitem",type:"button",onClick:()=>{i(!1),r&&r(c.label)},className:s},v)}),B.default.createElement("div",{className:"h-px bg-slate-100 my-1"}),B.default.createElement("button",{role:"menuitem",onClick:()=>{i(!1),t.onLogout()},className:"tbc-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},B.default.createElement(pd,{size:18,strokeWidth:1.75}),"登出"))))};var pf=({shell:t})=>{let[a,r]=(0,pt.useState)(""),e=(0,pt.useRef)(null),i=t.identity||{},n=Md.filter(l=>Wg(l,i.role)),o=l=>{r(`${l} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return pt.default.createElement("div",{className:"relative h-[100dvh] w-full bg-white overflow-hidden"},pt.default.createElement("main",{className:"h-full overflow-auto custom-scrollbar"},pt.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},pt.default.createElement("div",{className:"text-center mb-14"},pt.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),pt.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),pt.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(l=>{let c=pt.default.createElement(pt.default.Fragment,null,pt.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},pt.default.createElement(l.Icon,{size:40,strokeWidth:1.75})),pt.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},l.label)),s="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return l.href?pt.default.createElement("a",{key:l.id,href:l.href,className:s},c):pt.default.createElement("button",{key:l.id,type:"button",onClick:()=>o(l.label),className:s},c)})),pt.default.createElement(Vg,{shell:t,entries:n,onSoon:o}))),a&&pt.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},zg=pf;var d=Yr(Oa());var md=["日","一","二","三","四","五","六"],_g={m:15,l:18},Tg=[{id:"title",label:"任務",locked:!0,sortable:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"負責人",sortable:!0,w:t=>`${Math.ceil(t*5+28)}px`,min:t=>Math.ceil(t*5+28)},{id:"status",label:"狀態",sortable:!0,w:t=>`${Math.ceil(t*.85*3+64)}px`,min:t=>Math.ceil(t*.85*3+64)},{id:"date",label:"日期",sortable:!0,w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(150px,1fr)",min:150},{id:"hours",label:"工時",sortable:!0,w:t=>`${Math.ceil(t*4.8+24)}px`,min:t=>Math.ceil(t*4.8+24)},{id:"priority",label:"優先順序",sortable:!0,w:t=>`${Math.ceil(t*.85*4+52)}px`,min:t=>Math.ceil(t*.85*4+52)},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],ff="Asia/Taipei",Eg=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:ff,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},f2=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},vf=t=>new Date(t).toISOString().slice(0,10),p2=(t,a)=>vf(f2(t)+a*864e5),Ug=(t,a)=>Math.round((f2(t)-f2(a))/864e5),Zg=t=>new Date(f2(t)).getUTCDay(),kf=t=>p2(t,-((Zg(t)+6)%7)),Na=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},xf=(t,a)=>{let r=Ug(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${Na(t)}（${md[Zg(t)]}）`,tag:e}},Vt=t=>t?String(t).slice(0,5):"",Ng=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Vt(t.start_time).split(":").map(Number),[e,i]=Vt(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n>0?n/60:null},Lf=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Vt(t.start_time).split(":").map(Number),[e,i]=Vt(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*10)/10} 小時`},g2=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的例行工作"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期的任務固定在最上面，不能搬移"],["item not in your list","這筆不在你的清單裡"],["item not found or canceled","這筆工作已被取消或不存在"],["more than one member record","這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號"],["no member record","找不到這個帳號對應的同工資料"],["no permission","沒有使用權限"],["permission denied","沒有使用權限"],["dates are required","日期必填"],["weekly rule needs","每週重複請至少選一個星期"],["monthly rule needs","每月重複請選幾號，或勾「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個例行工作"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},Mf=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>md[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 號`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},mf=({person:t,strong:a})=>d.default.createElement("span",{className:`truncate max-w-full ${a?"font-bold text-slate-900":"text-slate-700"}`},t&&t.name||"（未知）"),Dg=({value:t,placeholder:a,canEdit:r,onSave:e,className:i=""})=>{let[n,o]=(0,d.useState)(!1),[l,c]=(0,d.useState)(t||""),s=(0,d.useRef)(!1);(0,d.useEffect)(()=>{n||c(t||"")},[t,n]);let v=async()=>{if(o(!1),s.current){s.current=!1;return}let x=l.trim();x!==(t||"").trim()&&await e(x)};return n?d.default.createElement("input",{autoFocus:!0,value:l,onChange:x=>c(x.target.value),onBlur:v,onKeyDown:x=>{x.key==="Enter"&&x.currentTarget.blur(),x.key==="Escape"&&(s.current=!0,x.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):d.default.createElement("div",{onClick:()=>r&&o(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?d.default.createElement("span",{className:"text-slate-300"},a):null))},Og=({type:t,a,b:r,canEdit:e,children:i,onSave:n})=>{let[o,l]=(0,d.useState)(!1),[c,s]=(0,d.useState)(a||""),[v,x]=(0,d.useState)(r||""),p=(0,d.useRef)(!1);(0,d.useEffect)(()=>{o||(s(a||""),x(r||""))},[a,r,o]);let k=async()=>{if(l(!1),p.current){p.current=!1;return}(c!==(a||"")||v!==(r||""))&&await n(c,v)};if(!o)return d.default.createElement("div",{onClick:()=>e&&l(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let y="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return d.default.createElement("div",{tabIndex:-1,onBlur:C=>{C.currentTarget.contains(C.relatedTarget)||k()},onKeyDown:C=>{C.key==="Enter"&&k(),C.key==="Escape"&&(p.current=!0,l(!1))},className:"flex flex-col gap-1"},d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",d.default.createElement("input",{autoFocus:!0,type:t,value:c,onChange:C=>s(C.target.value),className:y})),d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",d.default.createElement("input",{type:t,value:v,onChange:C=>x(C.target.value),className:y})))},yf=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o})=>{let l=a||{},c=t==="editRule",[s,v]=(0,d.useState)(l.title||""),[x,p]=(0,d.useState)(l.start_date||e),[k,y]=(0,d.useState)(Vt(l.start_time)),[C,E]=(0,d.useState)(l.end_date||l.start_date||e),[g,u]=(0,d.useState)(Vt(l.end_time)),[f,L]=(0,d.useState)(l.priority||"normal"),[W,V]=(0,d.useState)(l.note||""),[w,S]=(0,d.useState)(c?l.freq:r||"none"),[_,D]=(0,d.useState)(!!l.weekdays_only),[_t,or]=(0,d.useState)(l.week_days||[]),[ia,lr]=(0,d.useState)(l.month_day?String(l.month_day):""),[dr,na]=(0,d.useState)(!!l.month_last_day),[se,v2]=(0,d.useState)(l.until_date||""),[di,k2]=(0,d.useState)(l.is_active===void 0?!0:l.is_active),[vn,ja]=(0,d.useState)(""),Ma="text-xs font-medium text-slate-500",Da="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",kn=H=>or(ma=>ma.includes(H)?ma.filter(x2=>x2!==H):[...ma,H]),xn=()=>{if(ja(""),!s.trim())return ja("請輸入任務名稱");if(!x)return ja("開始日期必填");if(w==="none"&&(!C||C<x))return ja("結束日期不能早於開始日期");if(w==="weekly"&&_t.length===0)return ja("每週重複請至少選一個星期");if(w==="monthly"&&!ia&&!dr)return ja("每月重複請選幾號，或勾「每月最後一天」");if(w!=="none"&&se&&se<x)return ja("重複的結束日不能早於開始日");n({title:s.trim(),startDate:x,startTime:k||null,endDate:w==="none"?C:x,endTime:g||null,priority:f,note:W.trim()||null,repeat:w,weekdaysOnly:w==="daily"&&_,weekDays:w==="weekly"?_t:[],monthDay:w==="monthly"&&ia?Number(ia):null,monthLast:w==="monthly"&&dr,untilDate:se||null,isActive:di})};return d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},c?d.default.createElement(d.default.Fragment,null,d.default.createElement(c2,{className:"text-indigo-600",size:20})," 修改例行工作"):d.default.createElement(d.default.Fragment,null,d.default.createElement(fn,{className:"text-indigo-600",size:20})," 新增")),d.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(h2,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"任務",d.default.createElement("span",{className:"text-red-500"},"*")),d.default.createElement("input",{autoFocus:!0,value:s,onChange:H=>v(H.target.value),placeholder:"一句話說明工作內容",className:Da})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"重複"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([H])=>!(c&&H==="none")).map(([H,ma])=>d.default.createElement("button",{key:H,type:"button",onClick:()=>S(H),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${w===H?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},ma))),w==="daily"&&d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:_,onChange:H=>D(H.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),w==="weekly"&&d.default.createElement("div",{className:"flex gap-2 pt-1 flex-wrap"},[1,2,3,4,5,6,7].map(H=>d.default.createElement("button",{key:H,type:"button",onClick:()=>kn(H),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${_t.includes(H)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},md[H%7]))),w==="monthly"&&d.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},d.default.createElement("select",{value:ia,onChange:H=>lr(H.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},d.default.createElement("option",{value:""},"不指定號數"),Array.from({length:31},(H,ma)=>ma+1).map(H=>d.default.createElement("option",{key:H,value:H},H," 號"))),d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:dr,onChange:H=>na(H.target.checked),className:"accent-indigo-600"})," 每月最後一天"),ia&&Number(ia)>28&&!dr&&d.default.createElement("span",{className:"text-xs text-amber-600"},ia," 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」")),w!=="none"&&d.default.createElement("p",{className:"text-xs text-slate-400 pt-1"},"到時間系統會在凌晨自動建立當天的工作；修改週期只影響之後產生的。")),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},w==="none"?"開始日期":"從哪一天開始"),d.default.createElement("input",{type:"date",value:x,onChange:H=>{p(H.target.value),C<H.target.value&&E(H.target.value)},className:Da})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"開始時間（選填）"),d.default.createElement("input",{type:"time",value:k,onChange:H=>y(H.target.value),className:Da})),w==="none"?d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"結束日期（到期日）"),d.default.createElement("input",{type:"date",value:C,min:x,onChange:H=>E(H.target.value),className:Da})):d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"重複到哪一天（選填）"),d.default.createElement("input",{type:"date",value:se,min:x,onChange:H=>v2(H.target.value),className:Da})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"結束時間（選填）"),d.default.createElement("input",{type:"time",value:g,onChange:H=>u(H.target.value),className:Da}))),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"優先順序"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["normal","普通"],["urgent","緊急"]].map(([H,ma])=>d.default.createElement("button",{key:H,type:"button",onClick:()=>L(H),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${f===H?H==="urgent"?"bg-white text-red-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},ma))))),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"備註"),d.default.createElement("textarea",{value:W,onChange:H=>V(H.target.value),rows:2,className:Da})),c&&d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:di,onChange:H=>k2(H.target.checked),className:"accent-indigo-600"})," 啟用（取消勾選＝暫停）"),vn&&d.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},d.default.createElement(li,{size:16})," ",vn)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},d.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:xn,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},c?"儲存":w==="none"?"新增":"建立週期"))))},wf=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,d.useState)(Eg()),[o,l]=(0,d.useState)(null),[c,s]=(0,d.useState)([]),[v,x]=(0,d.useState)(""),[p,k]=(0,d.useState)([]),[y,C]=(0,d.useState)(!0),[E,g]=(0,d.useState)({type:"",text:""}),[u,f]=(0,d.useState)(null),[L,W]=(0,d.useState)("mine"),[V,w]=(0,d.useState)("today"),[S,_]=(0,d.useState)(""),[D,_t]=(0,d.useState)(""),[or,ia]=(0,d.useState)(new Set),[lr,dr]=(0,d.useState)(""),[na,se]=(0,d.useState)({col:null,dir:"asc"}),v2=h=>se(m=>m.col!==h?{col:h,dir:"asc"}:m.dir==="asc"?{col:h,dir:"desc"}:{col:null,dir:"asc"}),[di,k2]=(0,d.useState)(()=>{try{let h=localStorage.getItem("tbcWorkFont");return _g[h]?h:"m"}catch{return"m"}}),vn=h=>{k2(h);try{localStorage.setItem("tbcWorkFont",h)}catch{}},[ja,Ma]=(0,d.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),Da=h=>Ma(m=>{let j=m.includes(h)?m.filter(N=>N!==h):[...m,h];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(j))}catch{}return j}),[kn,xn]=(0,d.useState)(!1),[H,ma]=(0,d.useState)(""),[x2,jf]=(0,d.useState)(""),[wd,Ln]=(0,d.useState)(!1),[ya,ci]=(0,d.useState)(null),[Qg,Mn]=(0,d.useState)(!1),[Cd,Bd]=(0,d.useState)(!1),L2=(0,d.useRef)(!1),[bd,Kg]=(0,d.useState)([]),[hi,mn]=(0,d.useState)(null),[Zr,M2]=(0,d.useState)(null),[Rg,yn]=(0,d.useState)(null),[jd,m2]=(0,d.useState)(null),cr=_g[di],qr=cr+3,oa=i.date,Wd=(0,d.useRef)(null),wn=(0,d.useRef)(0),hr=(h,m)=>{g({type:h,text:m}),clearTimeout(Wd.current),Wd.current=setTimeout(()=>g({type:"",text:""}),3200)},Dt=async(h,m)=>{let{data:j,error:N}=await a.rpc(h,m||{});if(N)throw N;return j},la=async(h,m)=>{try{let j=await h();return await y2(!0),m&&hr("success",typeof m=="function"?m(j):m),j}catch(j){hr("error",g2(j)),await y2(!0);return}},bt=(0,d.useMemo)(()=>{if(V==="today")return{start:oa,end:oa};if(V==="week"){let j=kf(oa);return{start:j,end:p2(j,6)}}let h=S||oa,m=D||h;return h<=m?{start:h,end:m}:{start:m,end:h}},[V,S,D,oa]);(0,d.useEffect)(()=>{let h=setInterval(()=>n(m=>{let j=Eg();return j.date===m.date&&j.time===m.time?m:j}),3e4);return()=>clearInterval(h)},[]);let Jg=async()=>{try{let h=await Dt("work_current_member"),m=await Dt("work_list_people");return l(h),s(m||[]),ia(new Set((m||[]).map(j=>j.member_id))),x(""),!0}catch(h){return x(g2(h)),!1}},y2=async h=>{let m=++wn.current;h||C(!0);try{let j=r&&r.fetchAllData?r.fetchAllData:b=>b(),N=b=>{if(b&&b.error)throw b.error;return b&&b.data||[]},nt=N(await j(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).lte("start_date",bt.end).gte("end_date",bt.start))),Qt=N(await j(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).lte("end_date",oa).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),Kt=new Set(nt.map(b=>b.id)),yt=Qt.map(b=>b.id).filter(b=>!Kt.has(b)),q=[];if(yt.length&&(q=N(await j(()=>a.from("work_items").select("*, work_assignees(*)").in("id",yt)))),m!==wn.current)return;let K=[];for(let b of[...nt,...q]){let{work_assignees:ot,...wa}=b;for(let da of ot||[])K.push({key:da.id,item:{...wa,assigneeCount:(ot||[]).length},a:da})}k(K)}catch(j){m===wn.current&&hr("error","讀取失敗："+g2(j))}finally{m===wn.current&&!h&&C(!1)}};(0,d.useEffect)(()=>{Jg()},[]),(0,d.useEffect)(()=>{o&&y2(!1)},[o,bt.start,bt.end,oa]),(0,d.useEffect)(()=>{V==="custom"&&!S&&(_(oa),_t(p2(oa,6)))},[V]);let w2=(0,d.useMemo)(()=>{let h={};return c.forEach(m=>{h[m.member_id]={name:m.name,role:m.role}}),h},[c]),Wf=o?w2[o]:null,{overdueRows:Cn,groups:C2,total:Hd}=(0,d.useMemo)(()=>{let h=p.map(b=>{let ot=b.a.status==="done",wa=!!b.a.skipped_at||b.a.status==="on_hold",da=Vt(b.item.end_time),Ha=!ot&&!wa&&(b.item.end_date<i.date||b.item.end_date===i.date&&da&&da<i.time);return{...b,done:ot,skipped:wa,overdue:Ha,isMine:b.a.member_id===o,isRoutine:b.item.assigneeCount===1&&b.item.creator_member_id===b.a.member_id,isRecurring:!!b.item.recurring_rule_id,person:w2[b.a.member_id]}}),m=lr.trim().toLowerCase(),j=b=>!m||[b.item.title,b.item.note,b.person&&b.person.name].some(ot=>ot&&String(ot).toLowerCase().includes(m)),N=h.filter(b=>(L==="mine"?b.isMine:or.has(b.a.member_id))&&j(b)),nt=N.filter(b=>b.overdue).sort((b,ot)=>(b.item.end_date+Vt(b.item.end_time)).localeCompare(ot.item.end_date+Vt(ot.item.end_time))||(b.person&&b.person.name||"").localeCompare(ot.person&&ot.person.name||"")),Qt=N.filter(b=>!b.overdue&&b.item.start_date<=bt.end&&b.item.end_date>=bt.start),Kt={};Qt.forEach(b=>{(Kt[b.item.start_date]=Kt[b.item.start_date]||[]).push(b)});let yt=Object.keys(Kt).sort().map(b=>{let ot=Kt[b].sort((da,Ha)=>{if(L==="mine")return da.a.sort_order-Ha.a.sort_order||String(da.a.created_at).localeCompare(String(Ha.a.created_at));let P=Vt(da.item.start_time)||"99:99",lt=Vt(Ha.item.start_time)||"99:99";return P.localeCompare(lt)||(da.person&&da.person.name||"").localeCompare(Ha.person&&Ha.person.name||"")}),wa=L==="mine"&&b>=bt.start&&!m;return{date:b,rows:ot,canMove:wa}}),q=nt,K=yt;if(na.col){let b=na.dir==="asc"?1:-1,ot=(P,lt)=>String(P||"").localeCompare(String(lt||""),"zh-Hant"),wa=P=>P.done?2:P.skipped?1:0,Ha={title:(P,lt)=>ot(P.item.title,lt.item.title),who:(P,lt)=>ot(P.person&&P.person.name,lt.person&&lt.person.name),status:(P,lt)=>wa(P)-wa(lt),priority:(P,lt)=>(P.item.priority==="urgent"?0:1)-(lt.item.priority==="urgent"?0:1),hours:(P,lt)=>{let Gr=Ng(P.item),si=Ng(lt.item);return Gr==null&&si==null?0:Gr==null?2*b:si==null?-2*b:Gr-si},date:(P,lt)=>(P.item.start_date+Vt(P.item.start_time)).localeCompare(lt.item.start_date+Vt(lt.item.start_time))}[na.col];if(Ha){let P=lt=>[...lt].sort((Gr,si)=>b*Ha(Gr,si));na.col==="date"?(q=P(nt),K=[...yt].sort((lt,Gr)=>b*lt.date.localeCompare(Gr.date))):(q=P(nt),K=yt.map(lt=>({...lt,rows:P(lt.rows)})))}K=K.map(P=>({...P,canMove:!1}))}return{overdueRows:q,groups:K,total:nt.length+Qt.length}},[p,i,o,L,or,bt,w2,lr,na]),Bn=Tg.filter(h=>h.locked||!ja.includes(h.id)),Fg=h=>typeof h.w=="function"?h.w(cr):h.w,$g=h=>typeof h.min=="function"?h.min(cr):h.min,Sd=`56px ${Bn.map(Fg).join(" ")}`,Ig=56+Bn.reduce((h,m)=>h+$g(m),0)+16,ui=(h,m,j)=>la(()=>{let N={...h.item,...m};return Dt("work_update_routine",{p_item_id:N.id,p_title:N.title,p_start_date:N.start_date,p_start_time:N.start_time||null,p_end_date:N.end_date,p_end_time:N.end_time||null,p_priority:N.priority||"normal",p_note:N.note||null,p_meeting_flag:null})},j),Pg=(h,m,j)=>{if(!m||!j){hr("error","日期必填");return}let N=m,nt=j;if(m!==h.item.start_date&&j===h.item.end_date&&(nt=p2(m,Ug(h.item.end_date,h.item.start_date))),nt<N){hr("error","結束日期不能早於開始日期");return}let Qt=!(N<=bt.end&&nt>=bt.start);return ui(h,{start_date:N,end_date:nt},Qt?`已改到 ${Na(N)}（目前顯示範圍看不到，切換範圍就會出現）`:null)},t4=(h,m,j)=>ui(h,{start_time:m||null,end_time:j||null}),a4=(h,m)=>{if(!m){hr("error","任務名稱不能空白");return}return ui(h,{title:m})},Hf=h=>la(()=>Dt("work_complete",{p_item_id:h.item.id,p_note:null}),"已完成"),r4=(h,m)=>la(()=>Dt("work_set_status",{p_item_id:h.item.id,p_status:m}),"狀態已更新"),bn=(h,m)=>la(()=>Dt("work_move",{p_item_id:h.item.id,p_where:m})),e4=h=>la(()=>Dt("work_copy",{p_item_id:h.item.id}),"複製成功"),i4=h=>f({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或擱置不會刪除，標記「取消」並保留紀錄`,onConfirm:async()=>{f(null),await la(()=>Dt("work_delete",{p_item_id:h.item.id}),m=>m==="canceled"?"這筆已有進度紀錄，已改為取消並保留紀錄":"已刪除")}}),Sf=async()=>{let h=H.trim();if(!h||wd)return;Ln(!0);let m=x2||oa,j=await la(()=>Dt("work_create_routine",{p_title:h,p_start_date:m,p_end_date:m}));if(Ln(!1),j){ma("");let N=m<=bt.end&&m>=bt.start;hr("success",N?"已新增":`已新增到 ${Na(m)}（目前顯示範圍看不到，切換範圍就會出現）`)}},n4=async h=>{Ln(!0);let m;ya.mode==="editRule"?(m=await la(()=>Dt("work_update_rule",{p_rule_id:ya.rule.id,p_title:h.title,p_freq:h.repeat,p_weekdays_only:h.weekdaysOnly,p_week_days:h.weekDays,p_month_day:h.monthDay,p_month_last_day:h.monthLast,p_start_date:h.startDate,p_until_date:h.untilDate,p_start_time:h.startTime,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:null,p_is_active:h.isActive}),"例行工作已儲存（只影響之後產生的工作）"),m!==void 0&&await B2()):h.repeat==="none"?m=await la(()=>Dt("work_create_routine",{p_title:h.title,p_start_date:h.startDate,p_start_time:h.startTime,p_end_date:h.endDate,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:null}),"已新增"):m=await la(()=>Dt("work_create_rule",{p_title:h.title,p_freq:h.repeat,p_weekdays_only:h.weekdaysOnly,p_week_days:h.weekDays,p_month_day:h.monthDay,p_month_last_day:h.monthLast,p_start_date:h.startDate,p_until_date:h.untilDate,p_start_time:h.startTime,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:null}),"已建立例行工作，之後會在凌晨自動出現在清單"),Ln(!1),m!==void 0&&ci(null)},B2=async()=>{try{let{data:h,error:m}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(m)throw m;Kg(h||[])}catch(h){hr("error","讀取例行工作失敗："+g2(h))}},Ad=async()=>{Mn(!0),await B2()};(0,d.useEffect)(()=>{!ya&&L2.current&&(L2.current=!1,Ad())},[ya]);let o4=async h=>{await la(()=>Dt("work_update_rule",{p_rule_id:h.id,p_title:h.title,p_freq:h.freq,p_weekdays_only:h.weekdays_only,p_week_days:h.week_days,p_month_day:h.month_day,p_month_last_day:h.month_last_day,p_start_date:h.start_date,p_until_date:h.until_date,p_start_time:h.start_time,p_end_time:h.end_time,p_priority:h.priority,p_note:h.note,p_meeting_flag:null,p_is_active:!h.is_active}),h.is_active?"已暫停":"已啟用")!==void 0&&await B2()},l4=async(h,m)=>{let j=Zr;if(M2(null),m2(null),yn(null),!j||j.date!==h.date||j.key===m.key)return;let N=h.rows.filter(yt=>!yt.overdue),nt=N.findIndex(yt=>yt.key===j.key),Qt=N.findIndex(yt=>yt.key===m.key),Kt=h.rows.find(yt=>yt.key===j.key);!Kt||nt<0||Qt<0||await la(()=>Dt("work_move_to",{p_item_id:Kt.item.id,p_target_item_id:m.item.id,p_after:nt<Qt}))},ge="flex items-center bg-slate-100 p-1 rounded-full shrink-0",ur=h=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${h?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,Wa=hi?[...Cn,...C2.flatMap(h=>h.rows)].find(h=>h.key===hi.key):null,jn=Wa?C2.find(h=>h.rows.some(m=>m.key===Wa.key)):null,Vd=(h,m)=>{let j=h.isMine&&h.isRoutine,N=m?m.rows.filter(q=>!q.overdue):[],nt=!!m&&m.canMove&&j&&!h.overdue,Qt=jd===h.key&&Zr&&Zr.key!==h.key,Kt=h.done||h.skipped,yt=q=>{switch(q.id){case"title":return d.default.createElement("div",{key:q.id,className:"min-w-0 flex items-start gap-1.5"},d.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},h.isRoutine&&d.default.createElement("span",{className:"text-[0.7em] px-1.5 py-0.5 rounded border border-violet-100 bg-violet-50 text-violet-600 font-bold"},"例行"),h.isRecurring&&d.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},d.default.createElement(c2,{size:Math.round(cr*.95)})),h.overdue&&d.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},d.default.createElement(vd,{size:Math.round(cr*.8)})," 逾期")),d.default.createElement("div",{className:"min-w-0 flex-1"},d.default.createElement(Dg,{value:h.item.title,placeholder:"任務名稱",canEdit:j,onSave:K=>a4(h,K),className:`font-medium ${Kt?"text-slate-400 line-through":h.overdue?"text-red-600":"text-slate-900"}`})));case"who":return d.default.createElement("div",{key:q.id,className:"min-w-0"},d.default.createElement(mf,{person:h.person,size:qr}));case"date":{let K=h.item.start_date!==h.item.end_date;return d.default.createElement("div",{key:q.id,className:`min-w-0 ${h.overdue?"text-red-600":"text-slate-700"}`},d.default.createElement(Og,{type:"date",a:h.item.start_date,b:h.item.end_date,canEdit:j,onSave:(b,ot)=>Pg(h,b,ot)},K?`${Na(h.item.start_date)} → ${Na(h.item.end_date)}`:Na(h.item.start_date)))}case"time":{let K=Vt(h.item.start_time),b=Vt(h.item.end_time);return d.default.createElement("div",{key:q.id,className:"min-w-0 text-slate-700"},d.default.createElement(Og,{type:"time",a:K,b,canEdit:j,onSave:(ot,wa)=>t4(h,ot,wa)},K||b?`${K||"—"} ~ ${b||"—"}`:d.default.createElement("span",{className:"text-slate-300"},j?"加時間":"")))}case"hours":return d.default.createElement("div",{key:q.id,className:"text-slate-500 text-[0.9em]"},Lf(h.item)||"");case"priority":return d.default.createElement("div",{key:q.id},d.default.createElement("button",{type:"button",disabled:!j,onClick:()=>ui(h,{priority:h.item.priority==="urgent"?"normal":"urgent"}),title:j?"點一下切換":"",className:`text-[0.75em] px-2 py-0.5 rounded border font-bold ${h.item.priority==="urgent"?"bg-red-50 border-red-100 text-red-600":"bg-slate-50 border-slate-200 text-slate-400"} ${j?"hover:brightness-95 cursor-pointer":"cursor-default"}`},h.item.priority==="urgent"?"緊急":"普通"));case"note":return d.default.createElement("div",{key:q.id,className:"min-w-0"},d.default.createElement(Dg,{value:h.item.note,placeholder:"備註",canEdit:j,onSave:K=>ui(h,{note:K||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let K=h.done?"done":h.skipped?"on_hold":"pending",b=K==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":K==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600";return j?d.default.createElement("select",{key:q.id,value:K,onChange:ot=>r4(h,ot.target.value),"aria-label":"狀態",title:"點一下改變狀態",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${b}`},d.default.createElement("option",{value:"pending"},"待處理"),d.default.createElement("option",{value:"done"},"完成"),d.default.createElement("option",{value:"on_hold"},"擱置")):d.default.createElement("span",{key:q.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${b}`},{pending:"待處理",done:"完成",on_hold:"擱置"}[K])}default:return null}};return d.default.createElement("div",{key:h.key,draggable:nt&&Rg===h.key,onDragStart:q=>{M2({key:h.key,date:m.date}),q.dataTransfer.effectAllowed="move";try{q.dataTransfer.setData("text/plain",h.key)}catch{}},onDragOver:q=>{Zr&&m&&Zr.date===m.date&&!h.overdue&&(q.preventDefault(),jd!==h.key&&m2(h.key))},onDrop:q=>{q.preventDefault(),m&&l4(m,h)},onDragEnd:()=>{M2(null),m2(null),yn(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors
                    ${h.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Zr&&Zr.key===h.key?"opacity-40":""}
                    ${Qt?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:Sd}},d.default.createElement("div",{className:"flex items-center gap-0.5 px-2"},nt?d.default.createElement("span",{onMouseDown:()=>yn(h.key),onMouseUp:()=>yn(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},d.default.createElement(hg,{size:qr})):d.default.createElement("span",{style:{width:qr}}),j?d.default.createElement("button",{onClick:q=>{let K=q.currentTarget.getBoundingClientRect();mn({key:h.key,x:Math.min(K.left,window.innerWidth-220),y:Math.min(K.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},d.default.createElement(cg,{size:qr})):d.default.createElement("span",{style:{width:qr+8}})),Bn.map(q=>{let K=q.id==="title"||q.id==="note";return d.default.createElement("div",{key:q.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${K?"[&>*]:w-full":"justify-center text-center"}`},yt(q))}))};return d.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:cr}},d.default.createElement(Sg,{active:"work",shell:e}),d.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},d.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},d.default.createElement("div",{className:"flex items-center gap-4 min-w-0"},d.default.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:cr*1.45}},"工作日誌"),d.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},d.default.createElement(Lg,{size:16,className:"text-slate-400 shrink-0"}),d.default.createElement("input",{type:"text",value:lr,onChange:h=>dr(h.target.value),onKeyDown:h=>{h.key==="Escape"&&dr("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),lr&&d.default.createElement("button",{type:"button",onClick:()=>dr(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},d.default.createElement(h2,{size:14})))),d.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},d.default.createElement("button",{onClick:()=>ci({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},d.default.createElement(fn,{size:16}),"新增"),d.default.createElement("div",{className:ge},d.default.createElement("button",{onClick:Ad,className:ur(!1)},d.default.createElement(fn,{size:14,className:"text-slate-500"}),"例行工作")),d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>xn(h=>!h),className:`${ge} !p-1.5`},d.default.createElement("span",{className:ur(kn)},d.default.createElement(s2,{size:14,className:"text-slate-500"}),"隱藏")),kn&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>xn(!1)}),d.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},Tg.filter(h=>!h.locked).map(h=>d.default.createElement("label",{key:h.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${h.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},d.default.createElement("input",{type:"checkbox",disabled:h.locked,checked:h.locked||!ja.includes(h.id),onChange:()=>Da(h.id),className:"accent-indigo-600"}),h.label,h.locked&&d.default.createElement(Ld,{size:11})))))),d.default.createElement("div",{className:ge,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([h,m,j])=>d.default.createElement("button",{key:h,onClick:()=>vn(h),title:m,"aria-label":`文字${m}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${di===h?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:j}},"A"))))),v?d.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},d.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},d.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},d.default.createElement(Ld,{size:30})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),d.default.createElement("p",{className:"text-slate-500 font-normal"},v),d.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧師、行政與管理員。"))):d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 relative z-[15] shrink-0 space-y-3"},d.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},d.default.createElement("div",{className:ge},d.default.createElement("button",{onClick:()=>W("mine"),className:ur(L==="mine")},"我的"),d.default.createElement("button",{onClick:()=>W("all"),className:ur(L==="all")},"全部")),L==="all"&&d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>Bd(h=>!h),className:`${ge} !p-1.5`},d.default.createElement("span",{className:ur(Cd)},d.default.createElement(l2,{size:14,className:"text-slate-500"}),"人員（",or.size,"/",c.length,"）")),Cd&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Bd(!1)}),d.default.createElement("div",{className:"absolute left-0 top-full mt-2 z-40 w-56 max-h-80 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},d.default.createElement("div",{className:"flex gap-2 px-1 pb-2 mb-1 border-b border-slate-100"},d.default.createElement("button",{onClick:()=>ia(new Set(c.map(h=>h.member_id))),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全選"),d.default.createElement("button",{onClick:()=>ia(new Set),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全不選")),c.map(h=>d.default.createElement("label",{key:h.member_id,className:"flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none text-slate-700 hover:bg-slate-50 cursor-pointer"},d.default.createElement("input",{type:"checkbox",checked:or.has(h.member_id),onChange:()=>ia(m=>{let j=new Set(m);return j.has(h.member_id)?j.delete(h.member_id):j.add(h.member_id),j}),className:"accent-indigo-600"}),h.name))))),d.default.createElement("div",{className:ge},d.default.createElement("button",{onClick:()=>w("today"),className:ur(V==="today")},"今日"),d.default.createElement("button",{onClick:()=>w("week"),className:ur(V==="week")},"本週"),d.default.createElement("button",{onClick:()=>w("custom"),className:ur(V==="custom")},"自訂")),V==="custom"&&d.default.createElement("div",{className:"flex items-center gap-2"},d.default.createElement("input",{type:"date",value:S,onChange:h=>_(h.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),d.default.createElement("span",{className:"text-slate-400"},"～"),d.default.createElement("input",{type:"date",value:D,min:S,onChange:h=>_t(h.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),d.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},bt.start===bt.end?Na(bt.start):`${Na(bt.start)} ～ ${Na(bt.end)}`,d.default.createElement("span",{className:"ml-3"},"共 ",Hd," 筆")))),d.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},d.default.createElement("div",{className:"space-y-4",style:{minWidth:Ig}},d.default.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:Sd}},d.default.createElement("span",{className:"py-2"}),Bn.map(h=>h.sortable?d.default.createElement("button",{key:h.id,type:"button",onClick:()=>v2(h.id),title:"點一下排序","aria-sort":na.col===h.id?na.dir==="asc"?"ascending":"descending":"none",className:`py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap font-medium inline-flex items-center justify-center gap-0.5 hover:bg-slate-200/70 transition-colors ${na.col===h.id?"text-indigo-600":""}`},h.label,na.col===h.id&&(na.dir==="asc"?d.default.createElement(kd,{size:14}):d.default.createElement(xd,{size:14}))):d.default.createElement("span",{key:h.id,className:"py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap"},h.label))),y&&p.length===0?d.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):Hd===0?d.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},lr.trim()?`找不到符合「${lr.trim()}」的工作（只搜尋目前顯示的範圍）`:"新增一筆工作，開始記錄"):d.default.createElement(d.default.Fragment,null,Cn.length>0&&d.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},d.default.createElement(vd,{size:qr})," 逾期未完成 ",d.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},Cn.length)),Cn.map(h=>Vd(h,null))),C2.map(h=>{let m=xf(h.date,oa);return d.default.createElement("div",{key:h.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},d.default.createElement("span",{className:`font-bold ${m.tag==="今天"?"text-indigo-600":"text-slate-800"}`},m.text)),h.rows.map(j=>Vd(j,h)))}))))),hi&&Wa&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>mn(null),onContextMenu:h=>{h.preventDefault(),mn(null)}}),d.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:hi.x,top:hi.y,fontSize:cr}},(()=>{let h=jn?jn.rows.filter(nt=>!nt.overdue):[],m=h.findIndex(nt=>nt.key===Wa.key),j=!!jn&&jn.canMove&&m>=0,N=(nt,Qt,Kt,yt,q)=>d.default.createElement("button",{disabled:yt,onClick:()=>{mn(null),Kt()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${q?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},d.default.createElement(nt,{size:qr-1}),Qt);return d.default.createElement(d.default.Fragment,null,d.default.createElement("p",{className:"px-3 pt-1 pb-0.5 text-[0.72em] text-slate-400 font-medium"},"搬移",!j&&"（這裡不能搬移）"),N(pg,"移到頂端",()=>bn(Wa,"top"),!j||m===0),N(kd,"上一行",()=>bn(Wa,"up"),!j||m===0),N(xd,"下一行",()=>bn(Wa,"down"),!j||m===h.length-1),N(fg,"移到底部",()=>bn(Wa,"bottom"),!j||m===h.length-1),d.default.createElement("div",{className:"h-px bg-slate-100 my-1"}),N(sg,"複製到今天",()=>e4(Wa)),N(gg,"刪除",()=>i4(Wa),!1,!0))})())),ya&&d.default.createElement(yf,{key:ya.mode+(ya.rule?ya.rule.id:""),mode:ya.mode,initial:ya.rule,presetRepeat:ya.preset,today:oa,busy:wd,onClose:()=>ci(null),onSubmit:n4}),Qg&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},d.default.createElement(c2,{className:"text-indigo-600",size:20})," 我的例行工作"),d.default.createElement("button",{onClick:()=>Mn(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(h2,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},d.default.createElement("button",{onClick:()=>{Mn(!1),ci({mode:"create",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},d.default.createElement(fn,{size:16}),"新增例行工作"),bd.length===0?d.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"還沒有例行工作。按上面的「+ 新增例行工作」建立。"):bd.map(h=>d.default.createElement("div",{key:h.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${h.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},d.default.createElement("div",{className:"min-w-0"},d.default.createElement("div",{className:`font-medium truncate ${h.is_active?"text-slate-900":"text-slate-400"}`},h.title),d.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},Mf(h),h.start_time?`　${Vt(h.start_time)}${h.end_time?"~"+Vt(h.end_time):""}`:"",h.until_date?`　到 ${Na(h.until_date)}`:"",h.is_active?"":"　（暫停）")),d.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},d.default.createElement("button",{onClick:()=>{L2.current=!0,Mn(!1),ci({mode:"editRule",rule:h})},className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},d.default.createElement(xg,{size:16})),d.default.createElement("button",{onClick:()=>o4(h),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${h.is_active?"bg-amber-50 text-amber-600 hover:bg-amber-100":"bg-emerald-50 text-emerald-600 hover:bg-emerald-100"}`,title:h.is_active?"暫停":"啟用","aria-label":h.is_active?"暫停":"啟用"},h.is_active?d.default.createElement(vg,{size:16}):d.default.createElement(kg,{size:16})))))))),E.text&&d.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},d.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${E.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},d.default.createElement("div",{className:"shrink-0 mt-0.5"},E.type==="success"?d.default.createElement(ug,{size:18}):d.default.createElement(li,{size:18})),d.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},E.text))),u&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"p-8 text-center"},d.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},d.default.createElement(li,{size:32})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),d.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},d.default.createElement("button",{onClick:()=>f(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},qg=wf;var Gg=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
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
`;var Cf="https://jcepavwocdujoeoqxvsd.supabase.co",Bf="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",yd=document.createElement("style");yd.id="tbc-one-css";yd.textContent=Gg;document.head.appendChild(yd);var ue=window.__TBC_SB||window.supabase.createClient(Cf,Bf),bf=({page:t})=>{let[a,r]=(0,mt.useState)(void 0),[e,i]=(0,mt.useState)(""),[n,o]=(0,mt.useState)({status:"loading",name:"",role:"member"});(0,mt.useEffect)(()=>{let v=!0;ue.auth.getSession().then(({data:p})=>{v&&r(p.session||null)});let{data:x}=ue.auth.onAuthStateChange((p,k)=>{v&&r(k||null)});return()=>{v=!1,x&&x.subscription&&x.subscription.unsubscribe()}},[]);let l=a&&a.user&&a.user.id;(0,mt.useEffect)(()=>{if(!a)return;let v=!0;return Hg(ue,a).then(async x=>{if(v){if(x.status!=="ok"||!jg.includes(x.role)){try{await ue.auth.signOut()}catch{}i("權限不足"),r(null);return}i(""),o(x)}}),()=>{v=!1}},[l]);let c=async()=>{try{await ue.auth.signOut()}catch{}r(null),o({status:"loading",name:"",role:"member"})};if(a===void 0)return mt.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return mt.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},mt.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},mt.default.createElement(u2,{size:30})),mt.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),mt.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),mt.default.createElement(Ag,{supabase:ue,notice:e}));if(n.status!=="ok")return mt.default.createElement("div",{className:"h-[100dvh] bg-white"});let s={identity:n,onLogout:c};return t==="work"?mt.default.createElement(qg,{session:a,supabase:ue,utils:{},shell:s}):mt.default.createElement(zg,{shell:s})},Yg=document.getElementById("root");(0,Xg.createRoot)(Yg).render(mt.default.createElement(bf,{page:Yg.getAttribute("data-page")||"home"}));})();
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
