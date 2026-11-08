(()=>{var h4=Object.create;var _d=Object.defineProperty;var u4=Object.getOwnPropertyDescriptor;var s4=Object.getOwnPropertyNames;var g4=Object.getPrototypeOf,p4=Object.prototype.hasOwnProperty;var hr=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var f4=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of s4(a))!p4.call(t,i)&&i!==r&&_d(t,i,{get:()=>a[i],enumerable:!(e=u4(a,i))||e.enumerable});return t};var qr=(t,a,r)=>(r=t!=null?h4(g4(t)):{},f4(a||!t||!t.__esModule?_d(r,"default",{value:t,enumerable:!0}):r,t));var Xd=hr(_=>{"use strict";var W2=Symbol.for("react.transitional.element"),v4=Symbol.for("react.portal"),k4=Symbol.for("react.fragment"),x4=Symbol.for("react.strict_mode"),L4=Symbol.for("react.profiler"),M4=Symbol.for("react.consumer"),m4=Symbol.for("react.context"),y4=Symbol.for("react.forward_ref"),w4=Symbol.for("react.suspense"),C4=Symbol.for("react.memo"),Od=Symbol.for("react.lazy"),B4=Symbol.for("react.activity"),Td=Symbol.iterator;function b4(t){return t===null||typeof t!="object"?null:(t=Td&&t[Td]||t["@@iterator"],typeof t=="function"?t:null)}var Ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zd=Object.assign,qd={};function pe(t,a,r){this.props=t,this.context=a,this.refs=qd,this.updater=r||Ud}pe.prototype.isReactComponent={};pe.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};pe.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gd(){}Gd.prototype=pe.prototype;function H2(t,a,r){this.props=t,this.context=a,this.refs=qd,this.updater=r||Ud}var S2=H2.prototype=new Gd;S2.constructor=H2;Zd(S2,pe.prototype);S2.isPureReactComponent=!0;var Ed=Array.isArray;function j2(){}var at={H:null,A:null,T:null,S:null},Yd=Object.prototype.hasOwnProperty;function A2(t,a,r){var e=r.ref;return{$$typeof:W2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function j4(t,a){return A2(t.type,a,t.props)}function V2(t){return typeof t=="object"&&t!==null&&t.$$typeof===W2}function W4(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var Nd=/\/+/g;function b2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?W4(""+t.key):a.toString(36)}function H4(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(j2,j2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ge(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case W2:case v4:o=!0;break;case Od:return o=t._init,ge(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+b2(t,0):e,Ed(i)?(r="",o!=null&&(r=o.replace(Nd,"$&/")+"/"),ge(i,a,r,"",function(g){return g})):i!=null&&(V2(i)&&(i=j4(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Nd,"$&/")+"/")+o)),a.push(i)),1;o=0;var l=e===""?".":e+":";if(Ed(t))for(var c=0;c<t.length;c++)e=t[c],n=l+b2(e,c),o+=ge(e,a,r,n,i);else if(c=b4(t),typeof c=="function")for(t=c.call(t),c=0;!(e=t.next()).done;)e=e.value,n=l+b2(e,c++),o+=ge(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return ge(H4(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function Wn(t,a,r){if(t==null)return t;var e=[],i=0;return ge(t,e,"","",function(n){return a.call(r,n,i++)}),e}function S4(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var Dd=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},A4={map:Wn,forEach:function(t,a,r){Wn(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return Wn(t,function(){a++}),a},toArray:function(t){return Wn(t,function(a){return a})||[]},only:function(t){if(!V2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_.Activity=B4;_.Children=A4;_.Component=pe;_.Fragment=k4;_.Profiler=L4;_.PureComponent=H2;_.StrictMode=x4;_.Suspense=w4;_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=at;_.__COMPILER_RUNTIME={__proto__:null,c:function(t){return at.H.useMemoCache(t)}};_.cache=function(t){return function(){return t.apply(null,arguments)}};_.cacheSignal=function(){return null};_.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=Zd({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!Yd.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),l=0;l<n;l++)o[l]=arguments[l+2];e.children=o}return A2(t.type,i,e)};_.createContext=function(t){return t={$$typeof:m4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:M4,_context:t},t};_.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)Yd.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return A2(t,n,i)};_.createRef=function(){return{current:null}};_.forwardRef=function(t){return{$$typeof:y4,render:t}};_.isValidElement=V2;_.lazy=function(t){return{$$typeof:Od,_payload:{_status:-1,_result:t},_init:S4}};_.memo=function(t,a){return{$$typeof:C4,type:t,compare:a===void 0?null:a}};_.startTransition=function(t){var a=at.T,r={};at.T=r;try{var e=t(),i=at.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(j2,Dd)}catch(n){Dd(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),at.T=a}};_.unstable_useCacheRefresh=function(){return at.H.useCacheRefresh()};_.use=function(t){return at.H.use(t)};_.useActionState=function(t,a,r){return at.H.useActionState(t,a,r)};_.useCallback=function(t,a){return at.H.useCallback(t,a)};_.useContext=function(t){return at.H.useContext(t)};_.useDebugValue=function(){};_.useDeferredValue=function(t,a){return at.H.useDeferredValue(t,a)};_.useEffect=function(t,a){return at.H.useEffect(t,a)};_.useEffectEvent=function(t){return at.H.useEffectEvent(t)};_.useId=function(){return at.H.useId()};_.useImperativeHandle=function(t,a,r){return at.H.useImperativeHandle(t,a,r)};_.useInsertionEffect=function(t,a){return at.H.useInsertionEffect(t,a)};_.useLayoutEffect=function(t,a){return at.H.useLayoutEffect(t,a)};_.useMemo=function(t,a){return at.H.useMemo(t,a)};_.useOptimistic=function(t,a){return at.H.useOptimistic(t,a)};_.useReducer=function(t,a,r){return at.H.useReducer(t,a,r)};_.useRef=function(t){return at.H.useRef(t)};_.useState=function(t){return at.H.useState(t)};_.useSyncExternalStore=function(t,a,r){return at.H.useSyncExternalStore(t,a,r)};_.useTransition=function(){return at.H.useTransition()};_.version="19.2.8"});var Ua=hr((Tf,Qd)=>{"use strict";Qd.exports=Xd()});var rc=hr(dt=>{"use strict";function E2(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<Hn(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Aa(t){return t.length===0?null:t[0]}function An(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,l=t[o],c=o+1,g=t[c];if(0>Hn(l,r))c<i&&0>Hn(g,l)?(t[e]=g,t[c]=r,e=c):(t[e]=l,t[o]=r,e=o);else if(c<i&&0>Hn(g,r))t[e]=g,t[c]=r,e=c;else break t}}return a}function Hn(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}dt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Kd=performance,dt.unstable_now=function(){return Kd.now()}):(z2=Date,Rd=z2.now(),dt.unstable_now=function(){return z2.now()-Rd});var Kd,z2,Rd,Za=[],ur=[],V4=1,ca=null,zt=3,N2=!1,gi=!1,pi=!1,D2=!1,$d=typeof setTimeout=="function"?setTimeout:null,Id=typeof clearTimeout=="function"?clearTimeout:null,Jd=typeof setImmediate<"u"?setImmediate:null;function Sn(t){for(var a=Aa(ur);a!==null;){if(a.callback===null)An(ur);else if(a.startTime<=t)An(ur),a.sortIndex=a.expirationTime,E2(Za,a);else break;a=Aa(ur)}}function O2(t){if(pi=!1,Sn(t),!gi)if(Aa(Za)!==null)gi=!0,ve||(ve=!0,fe());else{var a=Aa(ur);a!==null&&U2(O2,a.startTime-t)}}var ve=!1,fi=-1,Pd=5,tc=-1;function ac(){return D2?!0:!(dt.unstable_now()-tc<Pd)}function _2(){if(D2=!1,ve){var t=dt.unstable_now();tc=t;var a=!0;try{t:{gi=!1,pi&&(pi=!1,Id(fi),fi=-1),N2=!0;var r=zt;try{a:{for(Sn(t),ca=Aa(Za);ca!==null&&!(ca.expirationTime>t&&ac());){var e=ca.callback;if(typeof e=="function"){ca.callback=null,zt=ca.priorityLevel;var i=e(ca.expirationTime<=t);if(t=dt.unstable_now(),typeof i=="function"){ca.callback=i,Sn(t),a=!0;break a}ca===Aa(Za)&&An(Za),Sn(t)}else An(Za);ca=Aa(Za)}if(ca!==null)a=!0;else{var n=Aa(ur);n!==null&&U2(O2,n.startTime-t),a=!1}}break t}finally{ca=null,zt=r,N2=!1}a=void 0}}finally{a?fe():ve=!1}}}var fe;typeof Jd=="function"?fe=function(){Jd(_2)}:typeof MessageChannel<"u"?(T2=new MessageChannel,Fd=T2.port2,T2.port1.onmessage=_2,fe=function(){Fd.postMessage(null)}):fe=function(){$d(_2,0)};var T2,Fd;function U2(t,a){fi=$d(function(){t(dt.unstable_now())},a)}dt.unstable_IdlePriority=5;dt.unstable_ImmediatePriority=1;dt.unstable_LowPriority=4;dt.unstable_NormalPriority=3;dt.unstable_Profiling=null;dt.unstable_UserBlockingPriority=2;dt.unstable_cancelCallback=function(t){t.callback=null};dt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pd=0<t?Math.floor(1e3/t):5};dt.unstable_getCurrentPriorityLevel=function(){return zt};dt.unstable_next=function(t){switch(zt){case 1:case 2:case 3:var a=3;break;default:a=zt}var r=zt;zt=a;try{return t()}finally{zt=r}};dt.unstable_requestPaint=function(){D2=!0};dt.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=zt;zt=t;try{return a()}finally{zt=r}};dt.unstable_scheduleCallback=function(t,a,r){var e=dt.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:V4++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,E2(ur,t),Aa(Za)===null&&t===Aa(ur)&&(pi?(Id(fi),fi=-1):pi=!0,U2(O2,r-e))):(t.sortIndex=i,E2(Za,t),gi||N2||(gi=!0,ve||(ve=!0,fe()))),t};dt.unstable_shouldYield=ac;dt.unstable_wrapCallback=function(t){var a=zt;return function(){var r=zt;zt=a;try{return t.apply(this,arguments)}finally{zt=r}}}});var ic=hr((Nf,ec)=>{"use strict";ec.exports=rc()});var oc=hr(Et=>{"use strict";var z4=Ua();function nc(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function sr(){}var Tt={d:{f:sr,r:function(){throw Error(nc(522))},D:sr,C:sr,L:sr,m:sr,X:sr,S:sr,M:sr},p:0,findDOMNode:null},_4=Symbol.for("react.portal");function T4(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_4,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var vi=z4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Vn(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}Et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Tt;Et.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(nc(299));return T4(t,a,null,r)};Et.flushSync=function(t){var a=vi.T,r=Tt.p;try{if(vi.T=null,Tt.p=2,t)return t()}finally{vi.T=a,Tt.p=r,Tt.d.f()}};Et.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Tt.d.C(t,a))};Et.prefetchDNS=function(t){typeof t=="string"&&Tt.d.D(t)};Et.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=Vn(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Tt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Tt.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};Et.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=Vn(a.as,a.crossOrigin);Tt.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Tt.d.M(t)};Et.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=Vn(r,a.crossOrigin);Tt.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};Et.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=Vn(a.as,a.crossOrigin);Tt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Tt.d.m(t)};Et.requestFormReset=function(t){Tt.d.r(t)};Et.unstable_batchedUpdates=function(t,a){return t(a)};Et.useFormState=function(t,a,r){return vi.H.useFormState(t,a,r)};Et.useFormStatus=function(){return vi.H.useHostTransitionStatus()};Et.version="19.2.8"});var cc=hr((Of,dc)=>{"use strict";function lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc)}catch(t){console.error(t)}}lc(),dc.exports=oc()});var ms=hr(i2=>{"use strict";var Mt=ic(),T0=Ua(),E4=cc();function M(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rn(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function N0(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function D0(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function hc(t){if(rn(t)!==t)throw Error(M(188))}function N4(t){var a=t.alternate;if(!a){if(a=rn(t),a===null)throw Error(M(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return hc(i),t;if(n===e)return hc(i),a;n=n.sibling}throw Error(M(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,e=n;break}if(l===e){o=!0,e=i,r=n;break}l=l.sibling}if(!o){for(l=n.child;l;){if(l===r){o=!0,r=n,e=i;break}if(l===e){o=!0,e=n,r=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(r.alternate!==e)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?t:a}function O0(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=O0(t),a!==null)return a;t=t.sibling}return null}var it=Object.assign,D4=Symbol.for("react.element"),zn=Symbol.for("react.transitional.element"),Ci=Symbol.for("react.portal"),ye=Symbol.for("react.fragment"),U0=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),Z0=Symbol.for("react.consumer"),Ja=Symbol.for("react.context"),f1=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),v1=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),wl=Symbol.for("react.activity"),O4=Symbol.for("react.memo_cache_sentinel"),uc=Symbol.iterator;function ki(t){return t===null||typeof t!="object"?null:(t=uc&&t[uc]||t["@@iterator"],typeof t=="function"?t:null)}var U4=Symbol.for("react.client.reference");function Cl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===U4?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ye:return"Fragment";case Ml:return"Profiler";case U0:return"StrictMode";case ml:return"Suspense";case yl:return"SuspenseList";case wl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ci:return"Portal";case Ja:return t.displayName||"Context";case Z0:return(t._context.displayName||"Context")+".Consumer";case f1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case v1:return a=t.displayName||null,a!==null?a:Cl(t.type)||"Memo";case gr:a=t._payload,t=t._init;try{return Cl(t(a))}catch{}}return null}var Bi=Array.isArray,A=T0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=E4.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rr={pending:!1,data:null,method:null,action:null},Bl=[],we=-1;function Ea(t){return{current:t}}function Bt(t){0>we||(t.current=Bl[we],Bl[we]=null,we--)}function tt(t,a){we++,Bl[we]=t.current,t.current=a}var Ta=Ea(null),qi=Ea(null),Cr=Ea(null),go=Ea(null);function po(t,a){switch(tt(Cr,a),tt(qi,t),tt(Ta,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?x0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=x0(a),t=ls(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Bt(Ta),tt(Ta,t)}function Ze(){Bt(Ta),Bt(qi),Bt(Cr)}function bl(t){t.memoizedState!==null&&tt(go,t);var a=Ta.current,r=ls(a,t.type);a!==r&&(tt(qi,t),tt(Ta,r))}function fo(t){qi.current===t&&(Bt(Ta),Bt(qi)),go.current===t&&(Bt(go),Pi._currentValue=Rr)}var Z2,sc;function Yr(t){if(Z2===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);Z2=a&&a[1]||"",sc=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Z2+t+sc}var q2=!1;function G2(t,a){if(!t||q2)return"";q2=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(k){var p=k}Reflect.construct(t,[],x)}else{try{x.call()}catch(k){p=k}t.call(x.prototype)}}else{try{throw Error()}catch(k){p=k}(x=t())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(k){if(k&&p&&typeof k.stack=="string")return[k.stack,p.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],l=n[1];if(o&&l){var c=o.split(`
`),g=l.split(`
`);for(i=e=0;e<c.length&&!c[e].includes("DetermineComponentFrameRoot");)e++;for(;i<g.length&&!g[i].includes("DetermineComponentFrameRoot");)i++;if(e===c.length||i===g.length)for(e=c.length-1,i=g.length-1;1<=e&&0<=i&&c[e]!==g[i];)i--;for(;1<=e&&0<=i;e--,i--)if(c[e]!==g[i]){if(e!==1||i!==1)do if(e--,i--,0>i||c[e]!==g[i]){var v=`
`+c[e].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=e&&0<=i);break}}}finally{q2=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Yr(r):""}function Z4(t,a){switch(t.tag){case 26:case 27:case 5:return Yr(t.type);case 16:return Yr("Lazy");case 13:return t.child!==a&&a!==null?Yr("Suspense Fallback"):Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 15:return G2(t.type,!1);case 11:return G2(t.type.render,!1);case 1:return G2(t.type,!0);case 31:return Yr("Activity");default:return""}}function gc(t){try{var a="",r=null;do a+=Z4(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var jl=Object.prototype.hasOwnProperty,k1=Mt.unstable_scheduleCallback,Y2=Mt.unstable_cancelCallback,q4=Mt.unstable_shouldYield,G4=Mt.unstable_requestPaint,ta=Mt.unstable_now,Y4=Mt.unstable_getCurrentPriorityLevel,q0=Mt.unstable_ImmediatePriority,G0=Mt.unstable_UserBlockingPriority,vo=Mt.unstable_NormalPriority,X4=Mt.unstable_LowPriority,Y0=Mt.unstable_IdlePriority,Q4=Mt.log,K4=Mt.unstable_setDisableYieldValue,en=null,aa=null;function Lr(t){if(typeof Q4=="function"&&K4(t),aa&&typeof aa.setStrictMode=="function")try{aa.setStrictMode(en,t)}catch{}}var ra=Math.clz32?Math.clz32:F4,R4=Math.log,J4=Math.LN2;function F4(t){return t>>>=0,t===0?32:31-(R4(t)/J4|0)|0}var _n=256,Tn=262144,En=4194304;function Xr(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qo(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var l=e&134217727;return l!==0?(e=l&~n,e!==0?i=Xr(e):(o&=l,o!==0?i=Xr(o):r||(r=l&~t,r!==0&&(i=Xr(r))))):(l=e&~n,l!==0?i=Xr(l):o!==0?i=Xr(o):r||(r=e&~t,r!==0&&(i=Xr(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function nn(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function $4(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X0(){var t=En;return En<<=1,(En&62914560)===0&&(En=4194304),t}function X2(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function on(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function I4(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var l=t.entanglements,c=t.expirationTimes,g=t.hiddenUpdates;for(r=o&~r;0<r;){var v=31-ra(r),x=1<<v;l[v]=0,c[v]=-1;var p=g[v];if(p!==null)for(g[v]=null,v=0;v<p.length;v++){var k=p[v];k!==null&&(k.lane&=-536870913)}r&=~x}e!==0&&Q0(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function Q0(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-ra(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function K0(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-ra(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function R0(t,a){var r=a&-a;return r=(r&42)!==0?1:x1(r),(r&(t.suspendedLanes|a))!==0?0:r}function x1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function L1(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function J0(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:xs(t.type))}function pc(t,a){var r=Q.p;try{return Q.p=t,a()}finally{Q.p=r}}var Nr=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Nr,Xt="__reactProps$"+Nr,Ie="__reactContainer$"+Nr,Wl="__reactEvents$"+Nr,P4="__reactListeners$"+Nr,tp="__reactHandles$"+Nr,fc="__reactResources$"+Nr,ln="__reactMarker$"+Nr;function M1(t){delete t[Wt],delete t[Xt],delete t[Wl],delete t[P4],delete t[tp]}function Ce(t){var a=t[Wt];if(a)return a;for(var r=t.parentNode;r;){if(a=r[Ie]||r[Wt]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=w0(t);t!==null;){if(r=t[Wt])return r;t=w0(t)}return a}t=r,r=t.parentNode}return null}function Pe(t){if(t=t[Wt]||t[Ie]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function bi(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(M(33))}function _e(t){var a=t[fc];return a||(a=t[fc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ct(t){t[ln]=!0}var F0=new Set,$0={};function ie(t,a){qe(t,a),qe(t+"Capture",a)}function qe(t,a){for($0[t]=a,t=0;t<a.length;t++)F0.add(a[t])}var ap=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vc={},kc={};function rp(t){return jl.call(kc,t)?!0:jl.call(vc,t)?!1:ap.test(t)?kc[t]=!0:(vc[t]=!0,!1)}function $n(t,a,r){if(rp(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function Nn(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function qa(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function ua(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function I0(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ep(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Hl(t){if(!t._valueTracker){var a=I0(t)?"checked":"value";t._valueTracker=ep(t,a,""+t[a])}}function P0(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=I0(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function ko(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var ip=/[\n"\\]/g;function pa(t){return t.replace(ip,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Sl(t,a,r,e,i,n,o,l){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+ua(a)):t.value!==""+ua(a)&&(t.value=""+ua(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?Al(t,o,ua(a)):r!=null?Al(t,o,ua(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+ua(l):t.removeAttribute("name")}function th(t,a,r,e,i,n,o,l){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){Hl(t);return}r=r!=null?""+ua(r):"",a=a!=null?""+ua(a):r,l||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=l?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Hl(t)}function Al(t,a,r){a==="number"&&ko(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Te(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+ua(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function ah(t,a,r){if(a!=null&&(a=""+ua(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+ua(r):""}function rh(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(M(92));if(Bi(e)){if(1<e.length)throw Error(M(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=ua(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),Hl(t)}function Ge(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var np=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xc(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||np.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function eh(t,a,r){if(a!=null&&typeof a!="object")throw Error(M(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&xc(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&xc(t,n,a[n])}function m1(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var op=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function In(t){return lp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fa(){}var Vl=null;function y1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Be=null,Ee=null;function Lc(t){var a=Pe(t);if(a&&(t=a.stateNode)){var r=t[Xt]||null;t:switch(t=a.stateNode,a.type){case"input":if(Sl(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+pa(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[Xt]||null;if(!i)throw Error(M(90));Sl(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&P0(e)}break t;case"textarea":ah(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Te(t,!!r.multiple,a,!1)}}}var Q2=!1;function ih(t,a,r){if(Q2)return t(a,r);Q2=!0;try{var e=t(a);return e}finally{if(Q2=!1,(Be!==null||Ee!==null)&&(t2(),Be&&(a=Be,t=Ee,Ee=Be=null,Lc(a),t)))for(a=0;a<t.length;a++)Lc(t[a])}}function Gi(t,a){var r=t.stateNode;if(r===null)return null;var e=r[Xt]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(M(231,a,typeof r));return r}var ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=!1;if(ar)try{ke={},Object.defineProperty(ke,"passive",{get:function(){zl=!0}}),window.addEventListener("test",ke,ke),window.removeEventListener("test",ke,ke)}catch{zl=!1}var ke,Mr=null,w1=null,Pn=null;function nh(){if(Pn)return Pn;var t,a=w1,r=a.length,e,i="value"in Mr?Mr.value:Mr.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return Pn=i.slice(t,1<e?1-e:void 0)}function to(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Dn(){return!0}function Mc(){return!1}function Qt(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(n):n[l]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Dn:Mc,this.isPropagationStopped=Mc,this}return it(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),a}var ne={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Qt(ne),dn=it({},ne,{view:0,detail:0}),dp=Qt(dn),K2,R2,xi,Yo=it({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:C1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xi&&(xi&&t.type==="mousemove"?(K2=t.screenX-xi.screenX,R2=t.screenY-xi.screenY):R2=K2=0,xi=t),K2)},movementY:function(t){return"movementY"in t?t.movementY:R2}}),mc=Qt(Yo),cp=it({},Yo,{dataTransfer:0}),hp=Qt(cp),up=it({},dn,{relatedTarget:0}),J2=Qt(up),sp=it({},ne,{animationName:0,elapsedTime:0,pseudoElement:0}),gp=Qt(sp),pp=it({},ne,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fp=Qt(pp),vp=it({},ne,{data:0}),yc=Qt(vp),kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mp(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=Lp[t])?!!a[t]:!1}function C1(){return Mp}var mp=it({},dn,{key:function(t){if(t.key){var a=kp[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=to(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:C1,charCode:function(t){return t.type==="keypress"?to(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?to(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yp=Qt(mp),wp=it({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=Qt(wp),Cp=it({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:C1}),Bp=Qt(Cp),bp=it({},ne,{propertyName:0,elapsedTime:0,pseudoElement:0}),jp=Qt(bp),Wp=it({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hp=Qt(Wp),Sp=it({},ne,{newState:0,oldState:0}),Ap=Qt(Sp),Vp=[9,13,27,32],B1=ar&&"CompositionEvent"in window,Hi=null;ar&&"documentMode"in document&&(Hi=document.documentMode);var zp=ar&&"TextEvent"in window&&!Hi,oh=ar&&(!B1||Hi&&8<Hi&&11>=Hi),Cc=" ",Bc=!1;function lh(t,a){switch(t){case"keyup":return Vp.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var be=!1;function _p(t,a){switch(t){case"compositionend":return dh(a);case"keypress":return a.which!==32?null:(Bc=!0,Cc);case"textInput":return t=a.data,t===Cc&&Bc?null:t;default:return null}}function Tp(t,a){if(be)return t==="compositionend"||!B1&&lh(t,a)?(t=nh(),Pn=w1=Mr=null,be=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return oh&&a.locale!=="ko"?null:a.data;default:return null}}var Ep={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!Ep[t.type]:a==="textarea"}function ch(t,a,r,e){Be?Ee?Ee.push(e):Ee=[e]:Be=e,a=To(a,"onChange"),0<a.length&&(r=new Go("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var Si=null,Yi=null;function Np(t){is(t,0)}function Xo(t){var a=bi(t);if(P0(a))return t}function jc(t,a){if(t==="change")return a}var hh=!1;ar&&(ar?(Un="oninput"in document,Un||(F2=document.createElement("div"),F2.setAttribute("oninput","return;"),Un=typeof F2.oninput=="function"),On=Un):On=!1,hh=On&&(!document.documentMode||9<document.documentMode));var On,Un,F2;function Wc(){Si&&(Si.detachEvent("onpropertychange",uh),Yi=Si=null)}function uh(t){if(t.propertyName==="value"&&Xo(Yi)){var a=[];ch(a,Yi,t,y1(t)),ih(Np,a)}}function Dp(t,a,r){t==="focusin"?(Wc(),Si=a,Yi=r,Si.attachEvent("onpropertychange",uh)):t==="focusout"&&Wc()}function Op(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(Yi)}function Up(t,a){if(t==="click")return Xo(a)}function Zp(t,a){if(t==="input"||t==="change")return Xo(a)}function qp(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var ia=typeof Object.is=="function"?Object.is:qp;function Xi(t,a){if(ia(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!jl.call(a,i)||!ia(t[i],a[i]))return!1}return!0}function Hc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sc(t,a){var r=Hc(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Hc(r)}}function sh(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?sh(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function gh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=ko(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=ko(t.document)}return a}function b1(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var Gp=ar&&"documentMode"in document&&11>=document.documentMode,je=null,_l=null,Ai=null,Tl=!1;function Ac(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Tl||je==null||je!==ko(e)||(e=je,"selectionStart"in e&&b1(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Ai&&Xi(Ai,e)||(Ai=e,e=To(_l,"onSelect"),0<e.length&&(a=new Go("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=je)))}function Gr(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var We={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionrun:Gr("Transition","TransitionRun"),transitionstart:Gr("Transition","TransitionStart"),transitioncancel:Gr("Transition","TransitionCancel"),transitionend:Gr("Transition","TransitionEnd")},$2={},ph={};ar&&(ph=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function oe(t){if($2[t])return $2[t];if(!We[t])return t;var a=We[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in ph)return $2[t]=a[r];return t}var fh=oe("animationend"),vh=oe("animationiteration"),kh=oe("animationstart"),Yp=oe("transitionrun"),Xp=oe("transitionstart"),Qp=oe("transitioncancel"),xh=oe("transitionend"),Lh=new Map,El="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");El.push("scrollEnd");function ba(t,a){Lh.set(t,a),ie(a,[t])}var xo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ha=[],He=0,j1=0;function Qo(){for(var t=He,a=j1=He=0;a<t;){var r=ha[a];ha[a++]=null;var e=ha[a];ha[a++]=null;var i=ha[a];ha[a++]=null;var n=ha[a];if(ha[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&Mh(r,i,n)}}function Ko(t,a,r,e){ha[He++]=t,ha[He++]=a,ha[He++]=r,ha[He++]=e,j1|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function W1(t,a,r,e){return Ko(t,a,r,e),Lo(t)}function le(t,a){return Ko(t,null,null,a),Lo(t)}function Mh(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-ra(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function Lo(t){if(50<Ui)throw Ui=0,e1=null,Error(M(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Se={};function Kp(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,a,r,e){return new Kp(t,a,r,e)}function H1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ia(t,a){var r=t.alternate;return r===null?(r=It(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function mh(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function ao(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")H1(t)&&(o=1);else if(typeof t=="string")o=F5(t,r,Ta.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case wl:return t=It(31,r,a,i),t.elementType=wl,t.lanes=n,t;case ye:return Jr(r.children,i,n,a);case U0:o=8,i|=24;break;case Ml:return t=It(12,r,a,i|2),t.elementType=Ml,t.lanes=n,t;case ml:return t=It(13,r,a,i),t.elementType=ml,t.lanes=n,t;case yl:return t=It(19,r,a,i),t.elementType=yl,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ja:o=10;break t;case Z0:o=9;break t;case f1:o=11;break t;case v1:o=14;break t;case gr:o=16,e=null;break t}o=29,r=Error(M(130,t===null?"null":typeof t,"")),e=null}return a=It(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function Jr(t,a,r,e){return t=It(7,t,e,a),t.lanes=r,t}function I2(t,a,r){return t=It(6,t,null,a),t.lanes=r,t}function yh(t){var a=It(18,null,null,0);return a.stateNode=t,a}function P2(t,a,r){return a=It(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Vc=new WeakMap;function fa(t,a){if(typeof t=="object"&&t!==null){var r=Vc.get(t);return r!==void 0?r:(a={value:t,source:a,stack:gc(a)},Vc.set(t,a),a)}return{value:t,source:a,stack:gc(a)}}var Ae=[],Ve=0,Mo=null,Qi=0,sa=[],ga=0,zr=null,Va=1,za="";function Ka(t,a){Ae[Ve++]=Qi,Ae[Ve++]=Mo,Mo=t,Qi=a}function wh(t,a,r){sa[ga++]=Va,sa[ga++]=za,sa[ga++]=zr,zr=t;var e=Va;t=za;var i=32-ra(e)-1;e&=~(1<<i),r+=1;var n=32-ra(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,Va=1<<32-ra(a)+i|r<<i|e,za=n+t}else Va=1<<n|r<<i|e,za=t}function S1(t){t.return!==null&&(Ka(t,1),wh(t,1,0))}function A1(t){for(;t===Mo;)Mo=Ae[--Ve],Ae[Ve]=null,Qi=Ae[--Ve],Ae[Ve]=null;for(;t===zr;)zr=sa[--ga],sa[ga]=null,za=sa[--ga],sa[ga]=null,Va=sa[--ga],sa[ga]=null}function Ch(t,a){sa[ga++]=Va,sa[ga++]=za,sa[ga++]=zr,Va=a.id,za=a.overflow,zr=t}var Ht=null,et=null,G=!1,Br=null,va=!1,Nl=Error(M(519));function _r(t){var a=Error(M(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ki(fa(a,t)),Nl}function zc(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[Wt]=t,a[Xt]=e,r){case"dialog":O("cancel",a),O("close",a);break;case"iframe":case"object":case"embed":O("load",a);break;case"video":case"audio":for(r=0;r<$i.length;r++)O($i[r],a);break;case"source":O("error",a);break;case"img":case"image":case"link":O("error",a),O("load",a);break;case"details":O("toggle",a);break;case"input":O("invalid",a),th(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":O("invalid",a);break;case"textarea":O("invalid",a),rh(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||os(a.textContent,r)?(e.popover!=null&&(O("beforetoggle",a),O("toggle",a)),e.onScroll!=null&&O("scroll",a),e.onScrollEnd!=null&&O("scrollend",a),e.onClick!=null&&(a.onclick=Fa),a=!0):a=!1,a||_r(t,!0)}function _c(t){for(Ht=t.return;Ht;)switch(Ht.tag){case 5:case 31:case 13:va=!1;return;case 27:case 3:va=!0;return;default:Ht=Ht.return}}function xe(t){if(t!==Ht)return!1;if(!G)return _c(t),G=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||d1(t.type,t.memoizedProps)),r=!r),r&&et&&_r(t),_c(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));et=y0(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));et=y0(t)}else a===27?(a=et,Dr(t.type)?(t=s1,s1=null,et=t):et=a):et=Ht?xa(t.stateNode.nextSibling):null;return!0}function Pr(){et=Ht=null,G=!1}function tl(){var t=Br;return t!==null&&(Gt===null?Gt=t:Gt.push.apply(Gt,t),Br=null),t}function Ki(t){Br===null?Br=[t]:Br.push(t)}var Dl=Ea(null),de=null,$a=null;function fr(t,a,r){tt(Dl,a._currentValue),a._currentValue=r}function Pa(t){t._currentValue=Dl.current,Bt(Dl)}function Ol(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function Ul(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var l=n;n=i;for(var c=0;c<a.length;c++)if(l.context===a[c]){n.lanes|=r,l=n.alternate,l!==null&&(l.lanes|=r),Ol(n.return,r,t),e||(o=null);break t}n=l.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(M(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),Ol(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ti(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(M(387));if(o=o.memoizedProps,o!==null){var l=i.type;ia(i.pendingProps.value,o.value)||(t!==null?t.push(l):t=[l])}}else if(i===go.current){if(o=i.alternate,o===null)throw Error(M(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Pi):t=[Pi])}i=i.return}t!==null&&Ul(a,t,r,e),a.flags|=262144}function mo(t){for(t=t.firstContext;t!==null;){if(!ia(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function te(t){de=t,$a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function St(t){return Bh(de,t)}function Zn(t,a){return de===null&&te(t),Bh(t,a)}function Bh(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},$a===null){if(t===null)throw Error(M(308));$a=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else $a=$a.next=a;return r}var Rp=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},Jp=Mt.unstable_scheduleCallback,Fp=Mt.unstable_NormalPriority,kt={$$typeof:Ja,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function V1(){return{controller:new Rp,data:new Map,refCount:0}}function cn(t){t.refCount--,t.refCount===0&&Jp(Fp,function(){t.controller.abort()})}var Vi=null,Zl=0,Ye=0,Ne=null;function $p(t,a){if(Vi===null){var r=Vi=[];Zl=0,Ye=ed(),Ne={status:"pending",value:void 0,then:function(e){r.push(e)}}}return Zl++,a.then(Tc,Tc),a}function Tc(){if(--Zl===0&&Vi!==null){Ne!==null&&(Ne.status="fulfilled");var t=Vi;Vi=null,Ye=0,Ne=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function Ip(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var Ec=A.S;A.S=function(t,a){Ou=ta(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&$p(t,a),Ec!==null&&Ec(t,a)};var Fr=Ea(null);function z1(){var t=Fr.current;return t!==null?t:I.pooledCache}function ro(t,a){a===null?tt(Fr,Fr.current):tt(Fr,a.pool)}function bh(){var t=z1();return t===null?null:{parent:kt._currentValue,pool:t}}var ai=Error(M(460)),_1=Error(M(474)),Ro=Error(M(542)),yo={then:function(){}};function Nc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jh(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(Fa,Fa),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Oc(t),t;default:if(typeof a.status=="string")a.then(Fa,Fa);else{if(t=I,t!==null&&100<t.shellSuspendCounter)throw Error(M(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Oc(t),t}throw $r=a,ai}}function Qr(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?($r=r,ai):r}}var $r=null;function Dc(){if($r===null)throw Error(M(459));var t=$r;return $r=null,t}function Oc(t){if(t===ai||t===Ro)throw Error(M(483))}var De=null,Ri=0;function qn(t){var a=Ri;return Ri+=1,De===null&&(De=[]),jh(De,t,a)}function Li(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Gn(t,a){throw a.$$typeof===D4?Error(M(525)):(t=Object.prototype.toString.call(a),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function Wh(t){function a(s,u){if(t){var f=s.deletions;f===null?(s.deletions=[u],s.flags|=16):f.push(u)}}function r(s,u){if(!t)return null;for(;u!==null;)a(s,u),u=u.sibling;return null}function e(s){for(var u=new Map;s!==null;)s.key!==null?u.set(s.key,s):u.set(s.index,s),s=s.sibling;return u}function i(s,u){return s=Ia(s,u),s.index=0,s.sibling=null,s}function n(s,u,f){return s.index=f,t?(f=s.alternate,f!==null?(f=f.index,f<u?(s.flags|=67108866,u):f):(s.flags|=67108866,u)):(s.flags|=1048576,u)}function o(s){return t&&s.alternate===null&&(s.flags|=67108866),s}function l(s,u,f,L){return u===null||u.tag!==6?(u=I2(f,s.mode,L),u.return=s,u):(u=i(u,f),u.return=s,u)}function c(s,u,f,L){var W=f.type;return W===ye?v(s,u,f.props.children,L,f.key):u!==null&&(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===gr&&Qr(W)===u.type)?(u=i(u,f.props),Li(u,f),u.return=s,u):(u=ao(f.type,f.key,f.props,null,s.mode,L),Li(u,f),u.return=s,u)}function g(s,u,f,L){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=P2(f,s.mode,L),u.return=s,u):(u=i(u,f.children||[]),u.return=s,u)}function v(s,u,f,L,W){return u===null||u.tag!==7?(u=Jr(f,s.mode,L,W),u.return=s,u):(u=i(u,f),u.return=s,u)}function x(s,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=I2(""+u,s.mode,f),u.return=s,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case zn:return f=ao(u.type,u.key,u.props,null,s.mode,f),Li(f,u),f.return=s,f;case Ci:return u=P2(u,s.mode,f),u.return=s,u;case gr:return u=Qr(u),x(s,u,f)}if(Bi(u)||ki(u))return u=Jr(u,s.mode,f,null),u.return=s,u;if(typeof u.then=="function")return x(s,qn(u),f);if(u.$$typeof===Ja)return x(s,Zn(s,u),f);Gn(s,u)}return null}function p(s,u,f,L){var W=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return W!==null?null:l(s,u,""+f,L);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case zn:return f.key===W?c(s,u,f,L):null;case Ci:return f.key===W?g(s,u,f,L):null;case gr:return f=Qr(f),p(s,u,f,L)}if(Bi(f)||ki(f))return W!==null?null:v(s,u,f,L,null);if(typeof f.then=="function")return p(s,u,qn(f),L);if(f.$$typeof===Ja)return p(s,u,Zn(s,f),L);Gn(s,f)}return null}function k(s,u,f,L,W){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return s=s.get(f)||null,l(u,s,""+L,W);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case zn:return s=s.get(L.key===null?f:L.key)||null,c(u,s,L,W);case Ci:return s=s.get(L.key===null?f:L.key)||null,g(u,s,L,W);case gr:return L=Qr(L),k(s,u,f,L,W)}if(Bi(L)||ki(L))return s=s.get(f)||null,v(u,s,L,W,null);if(typeof L.then=="function")return k(s,u,f,qn(L),W);if(L.$$typeof===Ja)return k(s,u,f,Zn(u,L),W);Gn(u,L)}return null}function y(s,u,f,L){for(var W=null,V=null,b=u,j=u=0,E=null;b!==null&&j<f.length;j++){b.index>j?(E=b,b=null):E=b.sibling;var N=p(s,b,f[j],L);if(N===null){b===null&&(b=E);break}t&&b&&N.alternate===null&&a(s,b),u=n(N,u,j),V===null?W=N:V.sibling=N,V=N,b=E}if(j===f.length)return r(s,b),G&&Ka(s,j),W;if(b===null){for(;j<f.length;j++)b=x(s,f[j],L),b!==null&&(u=n(b,u,j),V===null?W=b:V.sibling=b,V=b);return G&&Ka(s,j),W}for(b=e(b);j<f.length;j++)E=k(b,s,j,f[j],L),E!==null&&(t&&E.alternate!==null&&b.delete(E.key===null?j:E.key),u=n(E,u,j),V===null?W=E:V.sibling=E,V=E);return t&&b.forEach(function(Kt){return a(s,Kt)}),G&&Ka(s,j),W}function w(s,u,f,L){if(f==null)throw Error(M(151));for(var W=null,V=null,b=u,j=u=0,E=null,N=f.next();b!==null&&!N.done;j++,N=f.next()){b.index>j?(E=b,b=null):E=b.sibling;var Kt=p(s,b,N.value,L);if(Kt===null){b===null&&(b=E);break}t&&b&&Kt.alternate===null&&a(s,b),u=n(Kt,u,j),V===null?W=Kt:V.sibling=Kt,V=Kt,b=E}if(N.done)return r(s,b),G&&Ka(s,j),W;if(b===null){for(;!N.done;j++,N=f.next())N=x(s,N.value,L),N!==null&&(u=n(N,u,j),V===null?W=N:V.sibling=N,V=N);return G&&Ka(s,j),W}for(b=e(b);!N.done;j++,N=f.next())N=k(b,s,j,N.value,L),N!==null&&(t&&N.alternate!==null&&b.delete(N.key===null?j:N.key),u=n(N,u,j),V===null?W=N:V.sibling=N,V=N);return t&&b.forEach(function(ja){return a(s,ja)}),G&&Ka(s,j),W}function z(s,u,f,L){if(typeof f=="object"&&f!==null&&f.type===ye&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case zn:t:{for(var W=f.key;u!==null;){if(u.key===W){if(W=f.type,W===ye){if(u.tag===7){r(s,u.sibling),L=i(u,f.props.children),L.return=s,s=L;break t}}else if(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===gr&&Qr(W)===u.type){r(s,u.sibling),L=i(u,f.props),Li(L,f),L.return=s,s=L;break t}r(s,u);break}else a(s,u);u=u.sibling}f.type===ye?(L=Jr(f.props.children,s.mode,L,f.key),L.return=s,s=L):(L=ao(f.type,f.key,f.props,null,s.mode,L),Li(L,f),L.return=s,s=L)}return o(s);case Ci:t:{for(W=f.key;u!==null;){if(u.key===W)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){r(s,u.sibling),L=i(u,f.children||[]),L.return=s,s=L;break t}else{r(s,u);break}else a(s,u);u=u.sibling}L=P2(f,s.mode,L),L.return=s,s=L}return o(s);case gr:return f=Qr(f),z(s,u,f,L)}if(Bi(f))return y(s,u,f,L);if(ki(f)){if(W=ki(f),typeof W!="function")throw Error(M(150));return f=W.call(f),w(s,u,f,L)}if(typeof f.then=="function")return z(s,u,qn(f),L);if(f.$$typeof===Ja)return z(s,u,Zn(s,f),L);Gn(s,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(r(s,u.sibling),L=i(u,f),L.return=s,s=L):(r(s,u),L=I2(f,s.mode,L),L.return=s,s=L),o(s)):r(s,u)}return function(s,u,f,L){try{Ri=0;var W=z(s,u,f,L);return De=null,W}catch(b){if(b===ai||b===Ro)throw b;var V=It(29,b,null,s.mode);return V.lanes=L,V.return=s,V}}}var ae=Wh(!0),Hh=Wh(!1),pr=!1;function T1(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ql(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function br(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function jr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(X&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=Lo(t),Mh(t,null,r),a}return Ko(t,e,a,r),Lo(t)}function zi(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,K0(t,r)}}function al(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var Gl=!1;function _i(){if(Gl){var t=Ne;if(t!==null)throw t}}function Ti(t,a,r,e){Gl=!1;var i=t.updateQueue;pr=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,g=c.next;c.next=null,o===null?n=g:o.next=g,o=c;var v=t.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==o&&(l===null?v.firstBaseUpdate=g:l.next=g,v.lastBaseUpdate=c))}if(n!==null){var x=i.baseState;o=0,v=g=c=null,l=n;do{var p=l.lane&-536870913,k=p!==l.lane;if(k?(Z&p)===p:(e&p)===p){p!==0&&p===Ye&&(Gl=!0),v!==null&&(v=v.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var y=t,w=l;p=a;var z=r;switch(w.tag){case 1:if(y=w.payload,typeof y=="function"){x=y.call(z,x,p);break t}x=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(z,x,p):y,p==null)break t;x=it({},x,p);break t;case 2:pr=!0}}p=l.callback,p!==null&&(t.flags|=64,k&&(t.flags|=8192),k=i.callbacks,k===null?i.callbacks=[p]:k.push(p))}else k={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(g=v=k,c=x):v=v.next=k,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;k=l,l=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);v===null&&(c=x),i.baseState=c,i.firstBaseUpdate=g,i.lastBaseUpdate=v,n===null&&(i.shared.lanes=0),Er|=o,t.lanes=o,t.memoizedState=x}}function Sh(t,a){if(typeof t!="function")throw Error(M(191,t));t.call(a)}function Ah(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Sh(r[t],a)}var Xe=Ea(null),wo=Ea(0);function Uc(t,a){t=nr,tt(wo,t),tt(Xe,a),nr=t|a.baseLanes}function Yl(){tt(wo,nr),tt(Xe,Xe.current)}function E1(){nr=wo.current,Bt(Xe),Bt(wo)}var na=Ea(null),ka=null;function vr(t){var a=t.alternate;tt(st,st.current&1),tt(na,t),ka===null&&(a===null||Xe.current!==null||a.memoizedState!==null)&&(ka=t)}function Xl(t){tt(st,st.current),tt(na,t),ka===null&&(ka=t)}function Vh(t){t.tag===22?(tt(st,st.current),tt(na,t),ka===null&&(ka=t)):kr(t)}function kr(){tt(st,st.current),tt(na,na.current)}function $t(t){Bt(na),ka===t&&(ka=null),Bt(st)}var st=Ea(0);function Co(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||h1(r)||u1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var rr=0,T=null,$=null,ft=null,Bo=!1,Oe=!1,re=!1,bo=0,Ji=0,Ue=null,Pp=0;function ht(){throw Error(M(321))}function N1(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!ia(t[r],a[r]))return!1;return!0}function D1(t,a,r,e,i,n){return rr=n,T=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,A.H=t===null||t.memoizedState===null?cu:J1,re=!1,n=r(e,i),re=!1,Oe&&(n=_h(a,r,e,i)),zh(t),n}function zh(t){A.H=Fi;var a=$!==null&&$.next!==null;if(rr=0,ft=$=T=null,Bo=!1,Ji=0,Ue=null,a)throw Error(M(300));t===null||xt||(t=t.dependencies,t!==null&&mo(t)&&(xt=!0))}function _h(t,a,r,e){T=t;var i=0;do{if(Oe&&(Ue=null),Ji=0,Oe=!1,25<=i)throw Error(M(301));if(i+=1,ft=$=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}A.H=hu,n=a(r,e)}while(Oe);return n}function t5(){var t=A.H,a=t.useState()[0];return a=typeof a.then=="function"?hn(a):a,t=t.useState()[0],($!==null?$.memoizedState:null)!==t&&(T.flags|=1024),a}function O1(){var t=bo!==0;return bo=0,t}function U1(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function Z1(t){if(Bo){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Bo=!1}rr=0,ft=$=T=null,Oe=!1,Ji=bo=0,Ue=null}function Nt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?T.memoizedState=ft=t:ft=ft.next=t,ft}function gt(){if($===null){var t=T.alternate;t=t!==null?t.memoizedState:null}else t=$.next;var a=ft===null?T.memoizedState:ft.next;if(a!==null)ft=a,$=t;else{if(t===null)throw T.alternate===null?Error(M(467)):Error(M(310));$=t,t={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},ft===null?T.memoizedState=ft=t:ft=ft.next=t}return ft}function Jo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hn(t){var a=Ji;return Ji+=1,Ue===null&&(Ue=[]),t=jh(Ue,t,a),a=T,(ft===null?a.memoizedState:ft.next)===null&&(a=a.alternate,A.H=a===null||a.memoizedState===null?cu:J1),t}function Fo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return hn(t);if(t.$$typeof===Ja)return St(t)}throw Error(M(438,String(t)))}function q1(t){var a=null,r=T.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=T.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=Jo(),T.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=O4;return a.index++,r}function er(t,a){return typeof a=="function"?a(t):a}function eo(t){var a=gt();return G1(a,$,t)}function G1(t,a,r){var e=t.queue;if(e===null)throw Error(M(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var l=o=null,c=null,g=a,v=!1;do{var x=g.lane&-536870913;if(x!==g.lane?(Z&x)===x:(rr&x)===x){var p=g.revertLane;if(p===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),x===Ye&&(v=!0);else if((rr&p)===p){g=g.next,p===Ye&&(v=!0);continue}else x={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(l=c=x,o=n):c=c.next=x,T.lanes|=p,Er|=p;x=g.action,re&&r(n,x),n=g.hasEagerState?g.eagerState:r(n,x)}else p={lane:x,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},c===null?(l=c=p,o=n):c=c.next=p,T.lanes|=x,Er|=x;g=g.next}while(g!==null&&g!==a);if(c===null?o=n:c.next=l,!ia(n,t.memoizedState)&&(xt=!0,v&&(r=Ne,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=c,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function rl(t){var a=gt(),r=a.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);ia(n,a.memoizedState)||(xt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function Th(t,a,r){var e=T,i=gt(),n=G;if(n){if(r===void 0)throw Error(M(407));r=r()}else r=a();var o=!ia(($||i).memoizedState,r);if(o&&(i.memoizedState=r,xt=!0),i=i.queue,Y1(Dh.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||ft!==null&&ft.memoizedState.tag&1){if(e.flags|=2048,Qe(9,{destroy:void 0},Nh.bind(null,e,i,r,a),null),I===null)throw Error(M(349));n||(rr&127)!==0||Eh(e,a,r)}return r}function Eh(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=T.updateQueue,a===null?(a=Jo(),T.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function Nh(t,a,r,e){a.value=r,a.getSnapshot=e,Oh(a)&&Uh(t)}function Dh(t,a,r){return r(function(){Oh(a)&&Uh(t)})}function Oh(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!ia(t,r)}catch{return!0}}function Uh(t){var a=le(t,2);a!==null&&Yt(a,t,2)}function Ql(t){var a=Nt();if(typeof t=="function"){var r=t;if(t=r(),re){Lr(!0);try{r()}finally{Lr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:t},a}function Zh(t,a,r,e){return t.baseState=r,G1(t,$,typeof e=="function"?e:er)}function a5(t,a,r,e,i){if(Io(t))throw Error(M(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};A.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,qh(a,n)):(n.next=r.next,a.pending=r.next=n)}}function qh(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=A.T,o={};A.T=o;try{var l=r(i,e),c=A.S;c!==null&&c(o,l),Zc(t,a,l)}catch(g){Kl(t,a,g)}finally{n!==null&&o.types!==null&&(n.types=o.types),A.T=n}}else try{n=r(i,e),Zc(t,a,n)}catch(g){Kl(t,a,g)}}function Zc(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){qc(t,a,e)},function(e){return Kl(t,a,e)}):qc(t,a,r)}function qc(t,a,r){a.status="fulfilled",a.value=r,Gh(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,qh(t,r)))}function Kl(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,Gh(a),a=a.next;while(a!==e)}t.action=null}function Gh(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function Yh(t,a){return a}function Gc(t,a){if(G){var r=I.formState;if(r!==null){t:{var e=T;if(G){if(et){a:{for(var i=et,n=va;i.nodeType!==8;){if(!n){i=null;break a}if(i=xa(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){et=xa(i.nextSibling),e=i.data==="F!";break t}}_r(e)}e=!1}e&&(a=r[0])}}return r=Nt(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yh,lastRenderedState:a},r.queue=e,r=ou.bind(null,T,e),e.dispatch=r,e=Ql(!1),n=R1.bind(null,T,!1,e.queue),e=Nt(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=a5.bind(null,T,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function Yc(t){var a=gt();return Xh(a,$,t)}function Xh(t,a,r){if(a=G1(t,a,Yh)[0],t=eo(er)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=hn(a)}catch(o){throw o===ai?Ro:o}else e=a;a=gt();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(T.flags|=2048,Qe(9,{destroy:void 0},r5.bind(null,i,r),null)),[e,n,t]}function r5(t,a){t.action=a}function Xc(t){var a=gt(),r=$;if(r!==null)return Xh(a,r,t);gt(),a=a.memoizedState,r=gt();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function Qe(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=T.updateQueue,a===null&&(a=Jo(),T.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function Qh(){return gt().memoizedState}function io(t,a,r,e){var i=Nt();T.flags|=t,i.memoizedState=Qe(1|a,{destroy:void 0},r,e===void 0?null:e)}function $o(t,a,r,e){var i=gt();e=e===void 0?null:e;var n=i.memoizedState.inst;$!==null&&e!==null&&N1(e,$.memoizedState.deps)?i.memoizedState=Qe(a,n,r,e):(T.flags|=t,i.memoizedState=Qe(1|a,n,r,e))}function Qc(t,a){io(8390656,8,t,a)}function Y1(t,a){$o(2048,8,t,a)}function e5(t){T.flags|=4;var a=T.updateQueue;if(a===null)a=Jo(),T.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function Kh(t){var a=gt().memoizedState;return e5({ref:a,nextImpl:t}),function(){if((X&2)!==0)throw Error(M(440));return a.impl.apply(void 0,arguments)}}function Rh(t,a){return $o(4,2,t,a)}function Jh(t,a){return $o(4,4,t,a)}function Fh(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function $h(t,a,r){r=r!=null?r.concat([t]):null,$o(4,4,Fh.bind(null,a,t),r)}function X1(){}function Ih(t,a){var r=gt();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&N1(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function Ph(t,a){var r=gt();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&N1(a,e[1]))return e[0];if(e=t(),re){Lr(!0);try{t()}finally{Lr(!1)}}return r.memoizedState=[e,a],e}function Q1(t,a,r){return r===void 0||(rr&1073741824)!==0&&(Z&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=Zu(),T.lanes|=t,Er|=t,r)}function tu(t,a,r,e){return ia(r,a)?r:Xe.current!==null?(t=Q1(t,r,e),ia(t,a)||(xt=!0),t):(rr&42)===0||(rr&1073741824)!==0&&(Z&261930)===0?(xt=!0,t.memoizedState=r):(t=Zu(),T.lanes|=t,Er|=t,a)}function au(t,a,r,e,i){var n=Q.p;Q.p=n!==0&&8>n?n:8;var o=A.T,l={};A.T=l,R1(t,!1,a,r);try{var c=i(),g=A.S;if(g!==null&&g(l,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=Ip(c,e);Ei(t,a,v,ea(t))}else Ei(t,a,e,ea(t))}catch(x){Ei(t,a,{then:function(){},status:"rejected",reason:x},ea())}finally{Q.p=n,o!==null&&l.types!==null&&(o.types=l.types),A.T=o}}function i5(){}function Rl(t,a,r,e){if(t.tag!==5)throw Error(M(476));var i=ru(t).queue;au(t,i,a,Rr,r===null?i5:function(){return eu(t),r(e)})}function ru(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Rr,baseState:Rr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:Rr},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:er,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function eu(t){var a=ru(t);a.next===null&&(a=t.alternate.memoizedState),Ei(t,a.next.queue,{},ea())}function K1(){return St(Pi)}function iu(){return gt().memoizedState}function nu(){return gt().memoizedState}function n5(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=ea();t=br(r);var e=jr(a,t,r);e!==null&&(Yt(e,a,r),zi(e,a,r)),a={cache:V1()},t.payload=a;return}a=a.return}}function o5(t,a,r){var e=ea();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Io(t)?lu(a,r):(r=W1(t,a,r,e),r!==null&&(Yt(r,t,e),du(r,a,e)))}function ou(t,a,r){var e=ea();Ei(t,a,r,e)}function Ei(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Io(t))lu(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,l=n(o,r);if(i.hasEagerState=!0,i.eagerState=l,ia(l,o))return Ko(t,a,i,0),I===null&&Qo(),!1}catch{}if(r=W1(t,a,i,e),r!==null)return Yt(r,t,e),du(r,a,e),!0}return!1}function R1(t,a,r,e){if(e={lane:2,revertLane:ed(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Io(t)){if(a)throw Error(M(479))}else a=W1(t,r,e,2),a!==null&&Yt(a,t,2)}function Io(t){var a=t.alternate;return t===T||a!==null&&a===T}function lu(t,a){Oe=Bo=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function du(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,K0(t,r)}}var Fi={readContext:St,use:Fo,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht};Fi.useEffectEvent=ht;var cu={readContext:St,use:Fo,useCallback:function(t,a){return Nt().memoizedState=[t,a===void 0?null:a],t},useContext:St,useEffect:Qc,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,io(4194308,4,Fh.bind(null,a,t),r)},useLayoutEffect:function(t,a){return io(4194308,4,t,a)},useInsertionEffect:function(t,a){io(4,2,t,a)},useMemo:function(t,a){var r=Nt();a=a===void 0?null:a;var e=t();if(re){Lr(!0);try{t()}finally{Lr(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=Nt();if(r!==void 0){var i=r(a);if(re){Lr(!0);try{r(a)}finally{Lr(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=o5.bind(null,T,t),[e.memoizedState,t]},useRef:function(t){var a=Nt();return t={current:t},a.memoizedState=t},useState:function(t){t=Ql(t);var a=t.queue,r=ou.bind(null,T,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:X1,useDeferredValue:function(t,a){var r=Nt();return Q1(r,t,a)},useTransition:function(){var t=Ql(!1);return t=au.bind(null,T,t.queue,!0,!1),Nt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=T,i=Nt();if(G){if(r===void 0)throw Error(M(407));r=r()}else{if(r=a(),I===null)throw Error(M(349));(Z&127)!==0||Eh(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,Qc(Dh.bind(null,e,n,t),[t]),e.flags|=2048,Qe(9,{destroy:void 0},Nh.bind(null,e,n,r,a),null),r},useId:function(){var t=Nt(),a=I.identifierPrefix;if(G){var r=za,e=Va;r=(e&~(1<<32-ra(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=bo++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=Pp++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:K1,useFormState:Gc,useActionState:Gc,useOptimistic:function(t){var a=Nt();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=R1.bind(null,T,!0,r),r.dispatch=a,[t,a]},useMemoCache:q1,useCacheRefresh:function(){return Nt().memoizedState=n5.bind(null,T)},useEffectEvent:function(t){var a=Nt(),r={impl:t};return a.memoizedState=r,function(){if((X&2)!==0)throw Error(M(440));return r.impl.apply(void 0,arguments)}}},J1={readContext:St,use:Fo,useCallback:Ih,useContext:St,useEffect:Y1,useImperativeHandle:$h,useInsertionEffect:Rh,useLayoutEffect:Jh,useMemo:Ph,useReducer:eo,useRef:Qh,useState:function(){return eo(er)},useDebugValue:X1,useDeferredValue:function(t,a){var r=gt();return tu(r,$.memoizedState,t,a)},useTransition:function(){var t=eo(er)[0],a=gt().memoizedState;return[typeof t=="boolean"?t:hn(t),a]},useSyncExternalStore:Th,useId:iu,useHostTransitionStatus:K1,useFormState:Yc,useActionState:Yc,useOptimistic:function(t,a){var r=gt();return Zh(r,$,t,a)},useMemoCache:q1,useCacheRefresh:nu};J1.useEffectEvent=Kh;var hu={readContext:St,use:Fo,useCallback:Ih,useContext:St,useEffect:Y1,useImperativeHandle:$h,useInsertionEffect:Rh,useLayoutEffect:Jh,useMemo:Ph,useReducer:rl,useRef:Qh,useState:function(){return rl(er)},useDebugValue:X1,useDeferredValue:function(t,a){var r=gt();return $===null?Q1(r,t,a):tu(r,$.memoizedState,t,a)},useTransition:function(){var t=rl(er)[0],a=gt().memoizedState;return[typeof t=="boolean"?t:hn(t),a]},useSyncExternalStore:Th,useId:iu,useHostTransitionStatus:K1,useFormState:Xc,useActionState:Xc,useOptimistic:function(t,a){var r=gt();return $!==null?Zh(r,$,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:q1,useCacheRefresh:nu};hu.useEffectEvent=Kh;function el(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:it({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Jl={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=ea(),i=br(e);i.payload=a,r!=null&&(i.callback=r),a=jr(t,i,e),a!==null&&(Yt(a,t,e),zi(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=ea(),i=br(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=jr(t,i,e),a!==null&&(Yt(a,t,e),zi(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=ea(),e=br(r);e.tag=2,a!=null&&(e.callback=a),a=jr(t,e,r),a!==null&&(Yt(a,t,r),zi(a,t,r))}};function Kc(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!Xi(r,e)||!Xi(i,n):!0}function Rc(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&Jl.enqueueReplaceState(a,a.state,null)}function ee(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=it({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function uu(t){xo(t)}function su(t){console.error(t)}function gu(t){xo(t)}function jo(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function Jc(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Fl(t,a,r){return r=br(r),r.tag=3,r.payload={element:null},r.callback=function(){jo(t,a)},r}function pu(t){return t=br(t),t.tag=3,t}function fu(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){Jc(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Jc(a,r,e),typeof i!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})})}function l5(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&ti(a,r,i,!0),r=na.current,r!==null){switch(r.tag){case 31:case 13:return ka===null?Vo():r.alternate===null&&ut===0&&(ut=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===yo?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),pl(t,e,i)),!1;case 22:return r.flags|=65536,e===yo?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),pl(t,e,i)),!1}throw Error(M(435,r.tag))}return pl(t,e,i),Vo(),!1}if(G)return a=na.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==Nl&&(t=Error(M(422),{cause:e}),Ki(fa(t,r)))):(e!==Nl&&(a=Error(M(423),{cause:e}),Ki(fa(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=fa(e,r),i=Fl(t.stateNode,e,i),al(t,i),ut!==4&&(ut=2)),!1;var n=Error(M(520),{cause:e});if(n=fa(n,r),Oi===null?Oi=[n]:Oi.push(n),ut!==4&&(ut=2),a===null)return!0;e=fa(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=Fl(r.stateNode,e,t),al(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Wr===null||!Wr.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=pu(i),fu(i,t,r,e),al(r,i),!1}r=r.return}while(r!==null);return!1}var F1=Error(M(461)),xt=!1;function jt(t,a,r,e){a.child=t===null?Hh(a,null,r,e):ae(a,t.child,r,e)}function Fc(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var l in e)l!=="ref"&&(o[l]=e[l])}else o=e;return te(a),e=D1(t,a,r,o,n,i),l=O1(),t!==null&&!xt?(U1(t,a,i),ir(t,a,i)):(G&&l&&S1(a),a.flags|=1,jt(t,a,e,i),a.child)}function $c(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!H1(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,vu(t,a,n,e,i)):(t=ao(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!$1(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:Xi,r(o,e)&&t.ref===a.ref)return ir(t,a,i)}return a.flags|=1,t=Ia(n,e),t.ref=a.ref,t.return=a,a.child=t}function vu(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(Xi(n,e)&&t.ref===a.ref)if(xt=!1,a.pendingProps=e=n,$1(t,i))(t.flags&131072)!==0&&(xt=!0);else return a.lanes=t.lanes,ir(t,a,i)}return $l(t,a,r,e,i)}function ku(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return Ic(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&ro(a,n!==null?n.cachePool:null),n!==null?Uc(a,n):Yl(),Vh(a);else return e=a.lanes=536870912,Ic(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(ro(a,n.cachePool),Uc(a,n),kr(a),a.memoizedState=null):(t!==null&&ro(a,null),Yl(),kr(a));return jt(t,a,i,r),a.child}function ji(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Ic(t,a,r,e,i){var n=z1();return n=n===null?null:{parent:kt._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&ro(a,null),Yl(),Vh(a),t!==null&&ti(t,a,e,!0),a.childLanes=i,null}function no(t,a){return a=Wo({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function Pc(t,a,r){return ae(a,t.child,null,r),t=no(a,a.pendingProps),t.flags|=2,$t(a),a.memoizedState=null,t}function d5(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(G){if(e.mode==="hidden")return t=no(a,e),a.lanes=536870912,ji(null,t);if(Xl(a),(t=et)?(t=cs(t,va),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:zr!==null?{id:Va,overflow:za}:null,retryLane:536870912,hydrationErrors:null},r=yh(t),r.return=a,a.child=r,Ht=a,et=null)):t=null,t===null)throw _r(a);return a.lanes=536870912,null}return no(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(Xl(a),i)if(a.flags&256)a.flags&=-257,a=Pc(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(M(558));else if(xt||ti(t,a,r,!1),i=(r&t.childLanes)!==0,xt||i){if(e=I,e!==null&&(o=R0(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,le(t,o),Yt(e,t,o),F1;Vo(),a=Pc(t,a,r)}else t=n.treeContext,et=xa(o.nextSibling),Ht=a,G=!0,Br=null,va=!1,t!==null&&Ch(a,t),a=no(a,e),a.flags|=4096;return a}return t=Ia(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function oo(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(M(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function $l(t,a,r,e,i){return te(a),r=D1(t,a,r,e,void 0,i),e=O1(),t!==null&&!xt?(U1(t,a,i),ir(t,a,i)):(G&&e&&S1(a),a.flags|=1,jt(t,a,r,i),a.child)}function t0(t,a,r,e,i,n){return te(a),a.updateQueue=null,r=_h(a,e,r,i),zh(t),e=O1(),t!==null&&!xt?(U1(t,a,n),ir(t,a,n)):(G&&e&&S1(a),a.flags|=1,jt(t,a,r,n),a.child)}function a0(t,a,r,e,i){if(te(a),a.stateNode===null){var n=Se,o=r.contextType;typeof o=="object"&&o!==null&&(n=St(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Jl,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},T1(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?St(o):Se,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(el(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&Jl.enqueueReplaceState(n,n.state,null),Ti(a,e,n,i),_i(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var l=a.memoizedProps,c=ee(r,l);n.props=c;var g=n.context,v=r.contextType;o=Se,typeof v=="object"&&v!==null&&(o=St(v));var x=r.getDerivedStateFromProps;v=typeof x=="function"||typeof n.getSnapshotBeforeUpdate=="function",l=a.pendingProps!==l,v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(l||g!==o)&&Rc(a,n,e,o),pr=!1;var p=a.memoizedState;n.state=p,Ti(a,e,n,i),_i(),g=a.memoizedState,l||p!==g||pr?(typeof x=="function"&&(el(a,r,x,e),g=a.memoizedState),(c=pr||Kc(a,r,c,e,p,g,o))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=g),n.props=e,n.state=g,n.context=o,e=c):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,ql(t,a),o=a.memoizedProps,v=ee(r,o),n.props=v,x=a.pendingProps,p=n.context,g=r.contextType,c=Se,typeof g=="object"&&g!==null&&(c=St(g)),l=r.getDerivedStateFromProps,(g=typeof l=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==x||p!==c)&&Rc(a,n,e,c),pr=!1,p=a.memoizedState,n.state=p,Ti(a,e,n,i),_i();var k=a.memoizedState;o!==x||p!==k||pr||t!==null&&t.dependencies!==null&&mo(t.dependencies)?(typeof l=="function"&&(el(a,r,l,e),k=a.memoizedState),(v=pr||Kc(a,r,v,e,p,k,c)||t!==null&&t.dependencies!==null&&mo(t.dependencies))?(g||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,k,c),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,k,c)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=k),n.props=e,n.state=k,n.context=c,e=v):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,oo(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=ae(a,t.child,null,i),a.child=ae(a,null,r,i)):jt(t,a,r,i),a.memoizedState=n.state,t=a.child):t=ir(t,a,i),t}function r0(t,a,r,e){return Pr(),a.flags|=256,jt(t,a,r,e),a.child}var il={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nl(t){return{baseLanes:t,cachePool:bh()}}function ol(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=Pt),t}function xu(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(st.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(G){if(i?vr(a):kr(a),(t=et)?(t=cs(t,va),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:zr!==null?{id:Va,overflow:za}:null,retryLane:536870912,hydrationErrors:null},r=yh(t),r.return=a,a.child=r,Ht=a,et=null)):t=null,t===null)throw _r(a);return u1(t)?a.lanes=32:a.lanes=536870912,null}var l=e.children;return e=e.fallback,i?(kr(a),i=a.mode,l=Wo({mode:"hidden",children:l},i),e=Jr(e,i,r,null),l.return=a,e.return=a,l.sibling=e,a.child=l,e=a.child,e.memoizedState=nl(r),e.childLanes=ol(t,o,r),a.memoizedState=il,ji(null,e)):(vr(a),Il(a,l))}var c=t.memoizedState;if(c!==null&&(l=c.dehydrated,l!==null)){if(n)a.flags&256?(vr(a),a.flags&=-257,a=ll(t,a,r)):a.memoizedState!==null?(kr(a),a.child=t.child,a.flags|=128,a=null):(kr(a),l=e.fallback,i=a.mode,e=Wo({mode:"visible",children:e.children},i),l=Jr(l,i,r,null),l.flags|=2,e.return=a,l.return=a,e.sibling=l,a.child=e,ae(a,t.child,null,r),e=a.child,e.memoizedState=nl(r),e.childLanes=ol(t,o,r),a.memoizedState=il,a=ji(null,e));else if(vr(a),u1(l)){if(o=l.nextSibling&&l.nextSibling.dataset,o)var g=o.dgst;o=g,e=Error(M(419)),e.stack="",e.digest=o,Ki({value:e,source:null,stack:null}),a=ll(t,a,r)}else if(xt||ti(t,a,r,!1),o=(r&t.childLanes)!==0,xt||o){if(o=I,o!==null&&(e=R0(o,r),e!==0&&e!==c.retryLane))throw c.retryLane=e,le(t,e),Yt(o,t,e),F1;h1(l)||Vo(),a=ll(t,a,r)}else h1(l)?(a.flags|=192,a.child=t.child,a=null):(t=c.treeContext,et=xa(l.nextSibling),Ht=a,G=!0,Br=null,va=!1,t!==null&&Ch(a,t),a=Il(a,e.children),a.flags|=4096);return a}return i?(kr(a),l=e.fallback,i=a.mode,c=t.child,g=c.sibling,e=Ia(c,{mode:"hidden",children:e.children}),e.subtreeFlags=c.subtreeFlags&65011712,g!==null?l=Ia(g,l):(l=Jr(l,i,r,null),l.flags|=2),l.return=a,e.return=a,e.sibling=l,a.child=e,ji(null,e),e=a.child,l=t.child.memoizedState,l===null?l=nl(r):(i=l.cachePool,i!==null?(c=kt._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=bh(),l={baseLanes:l.baseLanes|r,cachePool:i}),e.memoizedState=l,e.childLanes=ol(t,o,r),a.memoizedState=il,ji(t.child,e)):(vr(a),r=t.child,t=r.sibling,r=Ia(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function Il(t,a){return a=Wo({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Wo(t,a){return t=It(22,t,null,a),t.lanes=0,t}function ll(t,a,r){return ae(a,t.child,null,r),t=Il(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function e0(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),Ol(t.return,a,r)}function dl(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function Lu(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=st.current,l=(o&2)!==0;if(l?(o=o&1|2,a.flags|=128):o&=1,tt(st,o),jt(t,a,e,r),e=G?Qi:0,!l&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e0(t,r,a);else if(t.tag===19)e0(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&Co(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),dl(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&Co(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}dl(a,!0,r,null,n,e);break;case"together":dl(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function ir(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Er|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(ti(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(M(153));if(a.child!==null){for(t=a.child,r=Ia(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=Ia(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function $1(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&mo(t)))}function c5(t,a,r){switch(a.tag){case 3:po(a,a.stateNode.containerInfo),fr(a,kt,t.memoizedState.cache),Pr();break;case 27:case 5:bl(a);break;case 4:po(a,a.stateNode.containerInfo);break;case 10:fr(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Xl(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(vr(a),a.flags|=128,null):(r&a.child.childLanes)!==0?xu(t,a,r):(vr(a),t=ir(t,a,r),t!==null?t.sibling:null);vr(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||(ti(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return Lu(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),tt(st,st.current),e)break;return null;case 22:return a.lanes=0,ku(t,a,r,a.pendingProps);case 24:fr(a,kt,t.memoizedState.cache)}return ir(t,a,r)}function Mu(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)xt=!0;else{if(!$1(t,r)&&(a.flags&128)===0)return xt=!1,c5(t,a,r);xt=(t.flags&131072)!==0}else xt=!1,G&&(a.flags&1048576)!==0&&wh(a,Qi,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=Qr(a.elementType),a.type=t,typeof t=="function")H1(t)?(e=ee(t,e),a.tag=1,a=a0(null,a,t,e,r)):(a.tag=0,a=$l(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===f1){a.tag=11,a=Fc(null,a,t,e,r);break t}else if(i===v1){a.tag=14,a=$c(null,a,t,e,r);break t}}throw a=Cl(t)||t,Error(M(306,a,""))}}return a;case 0:return $l(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=ee(e,a.pendingProps),a0(t,a,e,i,r);case 3:t:{if(po(a,a.stateNode.containerInfo),t===null)throw Error(M(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,ql(t,a),Ti(a,e,null,r);var o=a.memoizedState;if(e=o.cache,fr(a,kt,e),e!==n.cache&&Ul(a,[kt],r,!0),_i(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=r0(t,a,e,r);break t}else if(e!==i){i=fa(Error(M(424)),a),Ki(i),a=r0(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,et=xa(t.firstChild),Ht=a,G=!0,Br=null,va=!0,r=Hh(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Pr(),e===i){a=ir(t,a,r);break t}jt(t,a,e,r)}a=a.child}return a;case 26:return oo(t,a),t===null?(r=B0(a.type,null,a.pendingProps,null))?a.memoizedState=r:G||(r=a.type,t=a.pendingProps,e=Eo(Cr.current).createElement(r),e[Wt]=a,e[Xt]=t,At(e,r,t),Ct(e),a.stateNode=e):a.memoizedState=B0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return bl(a),t===null&&G&&(e=a.stateNode=hs(a.type,a.pendingProps,Cr.current),Ht=a,va=!0,i=et,Dr(a.type)?(s1=i,et=xa(e.firstChild)):et=i),jt(t,a,a.pendingProps.children,r),oo(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&G&&((i=e=et)&&(e=N5(e,a.type,a.pendingProps,va),e!==null?(a.stateNode=e,Ht=a,et=xa(e.firstChild),va=!1,i=!0):i=!1),i||_r(a)),bl(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,d1(i,n)?e=null:o!==null&&d1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=D1(t,a,t5,null,null,r),Pi._currentValue=i),oo(t,a),jt(t,a,e,r),a.child;case 6:return t===null&&G&&((t=r=et)&&(r=D5(r,a.pendingProps,va),r!==null?(a.stateNode=r,Ht=a,et=null,t=!0):t=!1),t||_r(a)),null;case 13:return xu(t,a,r);case 4:return po(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=ae(a,null,e,r):jt(t,a,e,r),a.child;case 11:return Fc(t,a,a.type,a.pendingProps,r);case 7:return jt(t,a,a.pendingProps,r),a.child;case 8:return jt(t,a,a.pendingProps.children,r),a.child;case 12:return jt(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,fr(a,a.type,e.value),jt(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,te(a),i=St(i),e=e(i),a.flags|=1,jt(t,a,e,r),a.child;case 14:return $c(t,a,a.type,a.pendingProps,r);case 15:return vu(t,a,a.type,a.pendingProps,r);case 19:return Lu(t,a,r);case 31:return d5(t,a,r);case 22:return ku(t,a,r,a.pendingProps);case 24:return te(a),e=St(kt),t===null?(i=z1(),i===null&&(i=I,n=V1(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},T1(a),fr(a,kt,i)):((t.lanes&r)!==0&&(ql(t,a),Ti(a,null,null,r),_i()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),fr(a,kt,e)):(e=n.cache,fr(a,kt,e),e!==i.cache&&Ul(a,[kt],r,!0))),jt(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(M(156,a.tag))}function Ga(t){t.flags|=4}function cl(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(Yu())t.flags|=8192;else throw $r=yo,_1}else t.flags&=-16777217}function i0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!gs(a))if(Yu())t.flags|=8192;else throw $r=yo,_1}function Yn(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?X0():536870912,t.lanes|=a,Ke|=a)}function Mi(t,a){if(!G)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function rt(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function h5(t,a,r){var e=a.pendingProps;switch(A1(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(a),null;case 1:return rt(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Pa(kt),Ze(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xe(a)?Ga(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,tl())),rt(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(Ga(a),n!==null?(rt(a),i0(a,n)):(rt(a),cl(a,i,null,e,r))):n?n!==t.memoizedState?(Ga(a),rt(a),i0(a,n)):(rt(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&Ga(a),rt(a),cl(a,i,t,e,r)),null;case 27:if(fo(a),r=Cr.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ga(a);else{if(!e){if(a.stateNode===null)throw Error(M(166));return rt(a),null}t=Ta.current,xe(a)?zc(a,t):(t=hs(i,e,r),a.stateNode=t,Ga(a))}return rt(a),null;case 5:if(fo(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ga(a);else{if(!e){if(a.stateNode===null)throw Error(M(166));return rt(a),null}if(n=Ta.current,xe(a))zc(a,n);else{var o=Eo(Cr.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[Wt]=a,n[Xt]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(At(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ga(a)}}return rt(a),cl(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&Ga(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(M(166));if(t=Cr.current,xe(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=Ht,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[Wt]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||os(t.nodeValue,r)),t||_r(a,!0)}else t=Eo(t).createTextNode(e),t[Wt]=a,a.stateNode=t}return rt(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=xe(a),r!==null){if(t===null){if(!e)throw Error(M(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(557));t[Wt]=a}else Pr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),t=!1}else r=tl(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?($t(a),a):($t(a),null);if((a.flags&128)!==0)throw Error(M(558))}return rt(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=xe(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(M(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[Wt]=a}else Pr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),i=!1}else i=tl(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?($t(a),a):($t(a),null)}return $t(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),Yn(a,a.updateQueue),rt(a),null);case 4:return Ze(),t===null&&id(a.stateNode.containerInfo),rt(a),null;case 10:return Pa(a.type),rt(a),null;case 19:if(Bt(st),e=a.memoizedState,e===null)return rt(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)Mi(e,!1);else{if(ut!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=Co(t),n!==null){for(a.flags|=128,Mi(e,!1),t=n.updateQueue,a.updateQueue=t,Yn(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)mh(r,t),r=r.sibling;return tt(st,st.current&1|2),G&&Ka(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&ta()>So&&(a.flags|=128,i=!0,Mi(e,!1),a.lanes=4194304)}else{if(!i)if(t=Co(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,Yn(a,t),Mi(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!G)return rt(a),null}else 2*ta()-e.renderingStartTime>So&&r!==536870912&&(a.flags|=128,i=!0,Mi(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=ta(),t.sibling=null,r=st.current,tt(st,i?r&1|2:r&1),G&&Ka(a,e.treeForkCount),t):(rt(a),null);case 22:case 23:return $t(a),E1(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(rt(a),a.subtreeFlags&6&&(a.flags|=8192)):rt(a),r=a.updateQueue,r!==null&&Yn(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&Bt(Fr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),Pa(kt),rt(a),null;case 25:return null;case 30:return null}throw Error(M(156,a.tag))}function u5(t,a){switch(A1(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Pa(kt),Ze(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return fo(a),null;case 31:if(a.memoizedState!==null){if($t(a),a.alternate===null)throw Error(M(340));Pr()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if($t(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(M(340));Pr()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Bt(st),null;case 4:return Ze(),null;case 10:return Pa(a.type),null;case 22:case 23:return $t(a),E1(),t!==null&&Bt(Fr),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Pa(kt),null;case 25:return null;default:return null}}function mu(t,a){switch(A1(a),a.tag){case 3:Pa(kt),Ze();break;case 26:case 27:case 5:fo(a);break;case 4:Ze();break;case 31:a.memoizedState!==null&&$t(a);break;case 13:$t(a);break;case 19:Bt(st);break;case 10:Pa(a.type);break;case 22:case 23:$t(a),E1(),t!==null&&Bt(Fr);break;case 24:Pa(kt)}}function un(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(l){J(a,a.return,l)}}function Tr(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,l=o.destroy;if(l!==void 0){o.destroy=void 0,i=a;var c=r,g=l;try{g()}catch(v){J(i,c,v)}}}e=e.next}while(e!==n)}}catch(v){J(a,a.return,v)}}function yu(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{Ah(a,r)}catch(e){J(t,t.return,e)}}}function wu(t,a,r){r.props=ee(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){J(t,a,e)}}function Ni(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){J(t,a,i)}}function _a(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){J(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){J(t,a,i)}else r.current=null}function Cu(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){J(t,t.return,i)}}function hl(t,a,r){try{var e=t.stateNode;A5(e,t.type,r,a),e[Xt]=a}catch(i){J(t,t.return,i)}}function Bu(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Dr(t.type)||t.tag===4}function ul(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Bu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Dr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pl(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Fa));else if(e!==4&&(e===27&&Dr(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(Pl(t,a,r),t=t.sibling;t!==null;)Pl(t,a,r),t=t.sibling}function Ho(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&Dr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Ho(t,a,r),t=t.sibling;t!==null;)Ho(t,a,r),t=t.sibling}function bu(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);At(a,e,r),a[Wt]=t,a[Xt]=r}catch(n){J(t,t.return,n)}}var Ra=!1,vt=!1,sl=!1,n0=typeof WeakSet=="function"?WeakSet:Set,wt=null;function s5(t,a){if(t=t.containerInfo,o1=Uo,t=gh(t),b1(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,l=-1,c=-1,g=0,v=0,x=t,p=null;a:for(;;){for(var k;x!==r||i!==0&&x.nodeType!==3||(l=o+i),x!==n||e!==0&&x.nodeType!==3||(c=o+e),x.nodeType===3&&(o+=x.nodeValue.length),(k=x.firstChild)!==null;)p=x,x=k;for(;;){if(x===t)break a;if(p===r&&++g===i&&(l=o),p===n&&++v===e&&(c=o),(k=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=k}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(l1={focusedElem:t,selectionRange:r},Uo=!1,wt=a;wt!==null;)if(a=wt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,wt=t;else for(;wt!==null;){switch(a=wt,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var y=ee(r.type,i);t=e.getSnapshotBeforeUpdate(y,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(w){J(r,r.return,w)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)c1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":c1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(M(163))}if(t=a.sibling,t!==null){t.return=a.return,wt=t;break}wt=a.return}}function ju(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:Xa(t,r),e&4&&un(5,r);break;case 1:if(Xa(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){J(r,r.return,o)}else{var i=ee(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){J(r,r.return,o)}}e&64&&yu(r),e&512&&Ni(r,r.return);break;case 3:if(Xa(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{Ah(t,a)}catch(o){J(r,r.return,o)}}break;case 27:a===null&&e&4&&bu(r);case 26:case 5:Xa(t,r),a===null&&e&4&&Cu(r),e&512&&Ni(r,r.return);break;case 12:Xa(t,r);break;case 31:Xa(t,r),e&4&&Su(t,r);break;case 13:Xa(t,r),e&4&&Au(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=m5.bind(null,r),O5(t,r))));break;case 22:if(e=r.memoizedState!==null||Ra,!e){a=a!==null&&a.memoizedState!==null||vt,i=Ra;var n=vt;Ra=e,(vt=a)&&!n?Qa(t,r,(r.subtreeFlags&8772)!==0):Xa(t,r),Ra=i,vt=n}break;case 30:break;default:Xa(t,r)}}function Wu(t){var a=t.alternate;a!==null&&(t.alternate=null,Wu(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&M1(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ct=null,qt=!1;function Ya(t,a,r){for(r=r.child;r!==null;)Hu(t,a,r),r=r.sibling}function Hu(t,a,r){if(aa&&typeof aa.onCommitFiberUnmount=="function")try{aa.onCommitFiberUnmount(en,r)}catch{}switch(r.tag){case 26:vt||_a(r,a),Ya(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:vt||_a(r,a);var e=ct,i=qt;Dr(r.type)&&(ct=r.stateNode,qt=!1),Ya(t,a,r),Zi(r.stateNode),ct=e,qt=i;break;case 5:vt||_a(r,a);case 6:if(e=ct,i=qt,ct=null,Ya(t,a,r),ct=e,qt=i,ct!==null)if(qt)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(r.stateNode)}catch(n){J(r,a,n)}else try{ct.removeChild(r.stateNode)}catch(n){J(r,a,n)}break;case 18:ct!==null&&(qt?(t=ct,M0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),$e(t)):M0(ct,r.stateNode));break;case 4:e=ct,i=qt,ct=r.stateNode.containerInfo,qt=!0,Ya(t,a,r),ct=e,qt=i;break;case 0:case 11:case 14:case 15:Tr(2,r,a),vt||Tr(4,r,a),Ya(t,a,r);break;case 1:vt||(_a(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&wu(r,a,e)),Ya(t,a,r);break;case 21:Ya(t,a,r);break;case 22:vt=(e=vt)||r.memoizedState!==null,Ya(t,a,r),vt=e;break;default:Ya(t,a,r)}}function Su(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{$e(t)}catch(r){J(a,a.return,r)}}}function Au(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{$e(t)}catch(r){J(a,a.return,r)}}function g5(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new n0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new n0),a;default:throw Error(M(435,t.tag))}}function Xn(t,a){var r=g5(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=y5.bind(null,t,e);e.then(i,i)}})}function Ut(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Dr(l.type)){ct=l.stateNode,qt=!1;break t}break;case 5:ct=l.stateNode,qt=!1;break t;case 3:case 4:ct=l.stateNode.containerInfo,qt=!0;break t}l=l.return}if(ct===null)throw Error(M(160));Hu(n,o,i),ct=null,qt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Vu(a,t),a=a.sibling}var Ba=null;function Vu(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ut(a,t),Zt(t),e&4&&(Tr(3,t,t.return),un(3,t),Tr(5,t,t.return));break;case 1:Ut(a,t),Zt(t),e&512&&(vt||r===null||_a(r,r.return)),e&64&&Ra&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=Ba;if(Ut(a,t),Zt(t),e&512&&(vt||r===null||_a(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[ln]||n[Wt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),At(n,e,r),n[Wt]=t,Ct(n),e=n;break t;case"link":var o=j0("link","href",i).get(e+(r.href||""));if(o){for(var l=0;l<o.length;l++)if(n=o[l],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(l,1);break a}}n=i.createElement(e),At(n,e,r),i.head.appendChild(n);break;case"meta":if(o=j0("meta","content",i).get(e+(r.content||""))){for(l=0;l<o.length;l++)if(n=o[l],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(l,1);break a}}n=i.createElement(e),At(n,e,r),i.head.appendChild(n);break;default:throw Error(M(468,e))}n[Wt]=t,Ct(n),e=n}t.stateNode=e}else W0(i,t.type,t.stateNode);else t.stateNode=b0(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?W0(i,t.type,t.stateNode):b0(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&hl(t,t.memoizedProps,r.memoizedProps)}break;case 27:Ut(a,t),Zt(t),e&512&&(vt||r===null||_a(r,r.return)),r!==null&&e&4&&hl(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Ut(a,t),Zt(t),e&512&&(vt||r===null||_a(r,r.return)),t.flags&32){i=t.stateNode;try{Ge(i,"")}catch(y){J(t,t.return,y)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,hl(t,i,r!==null?r.memoizedProps:i)),e&1024&&(sl=!0);break;case 6:if(Ut(a,t),Zt(t),e&4){if(t.stateNode===null)throw Error(M(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(y){J(t,t.return,y)}}break;case 3:if(ho=null,i=Ba,Ba=No(a.containerInfo),Ut(a,t),Ba=i,Zt(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{$e(a.containerInfo)}catch(y){J(t,t.return,y)}sl&&(sl=!1,zu(t));break;case 4:e=Ba,Ba=No(t.stateNode.containerInfo),Ut(a,t),Zt(t),Ba=e;break;case 12:Ut(a,t),Zt(t);break;case 31:Ut(a,t),Zt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Xn(t,e)));break;case 13:Ut(a,t),Zt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Po=ta()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Xn(t,e)));break;case 22:i=t.memoizedState!==null;var c=r!==null&&r.memoizedState!==null,g=Ra,v=vt;if(Ra=g||i,vt=v||c,Ut(a,t),vt=v,Ra=g,Zt(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||c||Ra||vt||Kr(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){c=r=a;try{if(n=c.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{l=c.stateNode;var x=c.memoizedProps.style,p=x!=null&&x.hasOwnProperty("display")?x.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){J(c,c.return,y)}}}else if(a.tag===6){if(r===null){c=a;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(y){J(c,c.return,y)}}}else if(a.tag===18){if(r===null){c=a;try{var k=c.stateNode;i?m0(k,!0):m0(c.stateNode,!1)}catch(y){J(c,c.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,Xn(t,r))));break;case 19:Ut(a,t),Zt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Xn(t,e)));break;case 30:break;case 21:break;default:Ut(a,t),Zt(t)}}function Zt(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if(Bu(e)){r=e;break}e=e.return}if(r==null)throw Error(M(160));switch(r.tag){case 27:var i=r.stateNode,n=ul(t);Ho(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(Ge(o,""),r.flags&=-33);var l=ul(t);Ho(t,l,o);break;case 3:case 4:var c=r.stateNode.containerInfo,g=ul(t);Pl(t,g,c);break;default:throw Error(M(161))}}catch(v){J(t,t.return,v)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function zu(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;zu(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Xa(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)ju(t,a.alternate,a),a=a.sibling}function Kr(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Tr(4,a,a.return),Kr(a);break;case 1:_a(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&wu(a,a.return,r),Kr(a);break;case 27:Zi(a.stateNode);case 26:case 5:_a(a,a.return),Kr(a);break;case 22:a.memoizedState===null&&Kr(a);break;case 30:Kr(a);break;default:Kr(a)}t=t.sibling}}function Qa(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:Qa(i,n,r),un(4,n);break;case 1:if(Qa(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(g){J(e,e.return,g)}if(e=n,i=e.updateQueue,i!==null){var l=e.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Sh(c[i],l)}catch(g){J(e,e.return,g)}}r&&o&64&&yu(n),Ni(n,n.return);break;case 27:bu(n);case 26:case 5:Qa(i,n,r),r&&e===null&&o&4&&Cu(n),Ni(n,n.return);break;case 12:Qa(i,n,r);break;case 31:Qa(i,n,r),r&&o&4&&Su(i,n);break;case 13:Qa(i,n,r),r&&o&4&&Au(i,n);break;case 22:n.memoizedState===null&&Qa(i,n,r),Ni(n,n.return);break;case 30:break;default:Qa(i,n,r)}a=a.sibling}}function I1(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&cn(r))}function P1(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&cn(t))}function Ca(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)_u(t,a,r,e),a=a.sibling}function _u(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ca(t,a,r,e),i&2048&&un(9,a);break;case 1:Ca(t,a,r,e);break;case 3:Ca(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&cn(t)));break;case 12:if(i&2048){Ca(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,l=n.onPostCommit;typeof l=="function"&&l(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){J(a,a.return,c)}}else Ca(t,a,r,e);break;case 31:Ca(t,a,r,e);break;case 13:Ca(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?Ca(t,a,r,e):Di(t,a):n._visibility&2?Ca(t,a,r,e):(n._visibility|=2,Me(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&I1(o,a);break;case 24:Ca(t,a,r,e),i&2048&&P1(a.alternate,a);break;default:Ca(t,a,r,e)}}function Me(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,l=r,c=e,g=o.flags;switch(o.tag){case 0:case 11:case 15:Me(n,o,l,c,i),un(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?Me(n,o,l,c,i):Di(n,o):(v._visibility|=2,Me(n,o,l,c,i)),i&&g&2048&&I1(o.alternate,o);break;case 24:Me(n,o,l,c,i),i&&g&2048&&P1(o.alternate,o);break;default:Me(n,o,l,c,i)}a=a.sibling}}function Di(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:Di(r,e),i&2048&&I1(e.alternate,e);break;case 24:Di(r,e),i&2048&&P1(e.alternate,e);break;default:Di(r,e)}a=a.sibling}}var Wi=8192;function Le(t,a,r){if(t.subtreeFlags&Wi)for(t=t.child;t!==null;)Tu(t,a,r),t=t.sibling}function Tu(t,a,r){switch(t.tag){case 26:Le(t,a,r),t.flags&Wi&&t.memoizedState!==null&&$5(r,Ba,t.memoizedState,t.memoizedProps);break;case 5:Le(t,a,r);break;case 3:case 4:var e=Ba;Ba=No(t.stateNode.containerInfo),Le(t,a,r),Ba=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Wi,Wi=16777216,Le(t,a,r),Wi=e):Le(t,a,r));break;default:Le(t,a,r)}}function Eu(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function mi(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];wt=e,Du(e,t)}Eu(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nu(t),t=t.sibling}function Nu(t){switch(t.tag){case 0:case 11:case 15:mi(t),t.flags&2048&&Tr(9,t,t.return);break;case 3:mi(t);break;case 12:mi(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,lo(t)):mi(t);break;default:mi(t)}}function lo(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];wt=e,Du(e,t)}Eu(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Tr(8,a,a.return),lo(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,lo(a));break;default:lo(a)}t=t.sibling}}function Du(t,a){for(;wt!==null;){var r=wt;switch(r.tag){case 0:case 11:case 15:Tr(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:cn(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,wt=e;else t:for(r=t;wt!==null;){e=wt;var i=e.sibling,n=e.return;if(Wu(e),e===r){wt=null;break t}if(i!==null){i.return=n,wt=i;break t}wt=n}}}var p5={getCacheForType:function(t){var a=St(kt),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return St(kt).controller.signal}},f5=typeof WeakMap=="function"?WeakMap:Map,X=0,I=null,U=null,Z=0,R=0,Ft=null,mr=!1,ri=!1,td=!1,nr=0,ut=0,Er=0,Ir=0,ad=0,Pt=0,Ke=0,Oi=null,Gt=null,t1=!1,Po=0,Ou=0,So=1/0,Ao=null,Wr=null,Lt=0,Hr=null,Re=null,tr=0,a1=0,r1=null,Uu=null,Ui=0,e1=null;function ea(){return(X&2)!==0&&Z!==0?Z&-Z:A.T!==null?ed():J0()}function Zu(){if(Pt===0)if((Z&536870912)===0||G){var t=Tn;Tn<<=1,(Tn&3932160)===0&&(Tn=262144),Pt=t}else Pt=536870912;return t=na.current,t!==null&&(t.flags|=32),Pt}function Yt(t,a,r){(t===I&&(R===2||R===9)||t.cancelPendingCommit!==null)&&(Je(t,0),yr(t,Z,Pt,!1)),on(t,r),((X&2)===0||t!==I)&&(t===I&&((X&2)===0&&(Ir|=r),ut===4&&yr(t,Z,Pt,!1)),Na(t))}function qu(t,a,r){if((X&6)!==0)throw Error(M(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||nn(t,a),i=e?x5(t,a):gl(t,a,!0),n=e;do{if(i===0){ri&&!e&&yr(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!v5(r)){i=gl(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var l=t;i=Oi;var c=l.current.memoizedState.isDehydrated;if(c&&(Je(l,o).flags|=256),o=gl(l,o,!1),o!==2){if(td&&!c){l.errorRecoveryDisabledLanes|=n,Ir|=n,i=4;break t}n=Gt,Gt=i,n!==null&&(Gt===null?Gt=n:Gt.push.apply(Gt,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){Je(t,0),yr(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(M(345));case 4:if((a&4194048)!==a)break;case 6:yr(e,a,Pt,!mr);break t;case 2:Gt=null;break;case 3:case 5:break;default:throw Error(M(329))}if((a&62914560)===a&&(i=Po+300-ta(),10<i)){if(yr(e,a,Pt,!mr),qo(e,0,!0)!==0)break t;tr=a,e.timeoutHandle=ds(o0.bind(null,e,r,Gt,Ao,t1,a,Pt,Ir,Ke,mr,n,"Throttled",-0,0),i);break t}o0(e,r,Gt,Ao,t1,a,Pt,Ir,Ke,mr,n,null,-0,0)}}break}while(!0);Na(t)}function o0(t,a,r,e,i,n,o,l,c,g,v,x,p,k){if(t.timeoutHandle=-1,x=a.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fa},Tu(a,n,x);var y=(n&62914560)===n?Po-ta():(n&4194048)===n?Ou-ta():0;if(y=I5(x,y),y!==null){tr=n,t.cancelPendingCommit=y(d0.bind(null,t,a,n,r,e,i,o,l,c,v,x,null,p,k)),yr(t,n,o,!g);return}}d0(t,a,n,r,e,i,o,l,c)}function v5(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!ia(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function yr(t,a,r,e){a&=~ad,a&=~Ir,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-ra(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&Q0(t,r,a)}function t2(){return(X&6)===0?(sn(0,!1),!1):!0}function rd(){if(U!==null){if(R===0)var t=U.return;else t=U,$a=de=null,Z1(t),De=null,Ri=0,t=U;for(;t!==null;)mu(t.alternate,t),t=t.return;U=null}}function Je(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,_5(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),tr=0,rd(),I=t,U=r=Ia(t.current,null),Z=a,R=0,Ft=null,mr=!1,ri=nn(t,a),td=!1,Ke=Pt=ad=Ir=Er=ut=0,Gt=Oi=null,t1=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-ra(e),n=1<<i;a|=t[i],e&=~n}return nr=a,Qo(),r}function Gu(t,a){T=null,A.H=Fi,a===ai||a===Ro?(a=Dc(),R=3):a===_1?(a=Dc(),R=4):R=a===F1?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ft=a,U===null&&(ut=1,jo(t,fa(a,t.current)))}function Yu(){var t=na.current;return t===null?!0:(Z&4194048)===Z?ka===null:(Z&62914560)===Z||(Z&536870912)!==0?t===ka:!1}function Xu(){var t=A.H;return A.H=Fi,t===null?Fi:t}function Qu(){var t=A.A;return A.A=p5,t}function Vo(){ut=4,mr||(Z&4194048)!==Z&&na.current!==null||(ri=!0),(Er&134217727)===0&&(Ir&134217727)===0||I===null||yr(I,Z,Pt,!1)}function gl(t,a,r){var e=X;X|=2;var i=Xu(),n=Qu();(I!==t||Z!==a)&&(Ao=null,Je(t,a)),a=!1;var o=ut;t:do try{if(R!==0&&U!==null){var l=U,c=Ft;switch(R){case 8:rd(),o=6;break t;case 3:case 2:case 9:case 6:na.current===null&&(a=!0);var g=R;if(R=0,Ft=null,ze(t,l,c,g),r&&ri){o=0;break t}break;default:g=R,R=0,Ft=null,ze(t,l,c,g)}}k5(),o=ut;break}catch(v){Gu(t,v)}while(!0);return a&&t.shellSuspendCounter++,$a=de=null,X=e,A.H=i,A.A=n,U===null&&(I=null,Z=0,Qo()),o}function k5(){for(;U!==null;)Ku(U)}function x5(t,a){var r=X;X|=2;var e=Xu(),i=Qu();I!==t||Z!==a?(Ao=null,So=ta()+500,Je(t,a)):ri=nn(t,a);t:do try{if(R!==0&&U!==null){a=U;var n=Ft;a:switch(R){case 1:R=0,Ft=null,ze(t,a,n,1);break;case 2:case 9:if(Nc(n)){R=0,Ft=null,l0(a);break}a=function(){R!==2&&R!==9||I!==t||(R=7),Na(t)},n.then(a,a);break t;case 3:R=7;break t;case 4:R=5;break t;case 7:Nc(n)?(R=0,Ft=null,l0(a)):(R=0,Ft=null,ze(t,a,n,7));break;case 5:var o=null;switch(U.tag){case 26:o=U.memoizedState;case 5:case 27:var l=U;if(o?gs(o):l.stateNode.complete){R=0,Ft=null;var c=l.sibling;if(c!==null)U=c;else{var g=l.return;g!==null?(U=g,a2(g)):U=null}break a}}R=0,Ft=null,ze(t,a,n,5);break;case 6:R=0,Ft=null,ze(t,a,n,6);break;case 8:rd(),ut=6;break t;default:throw Error(M(462))}}L5();break}catch(v){Gu(t,v)}while(!0);return $a=de=null,A.H=e,A.A=i,X=r,U!==null?0:(I=null,Z=0,Qo(),ut)}function L5(){for(;U!==null&&!q4();)Ku(U)}function Ku(t){var a=Mu(t.alternate,t,nr);t.memoizedProps=t.pendingProps,a===null?a2(t):U=a}function l0(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=t0(r,a,a.pendingProps,a.type,void 0,Z);break;case 11:a=t0(r,a,a.pendingProps,a.type.render,a.ref,Z);break;case 5:Z1(a);default:mu(r,a),a=U=mh(a,nr),a=Mu(r,a,nr)}t.memoizedProps=t.pendingProps,a===null?a2(t):U=a}function ze(t,a,r,e){$a=de=null,Z1(a),De=null,Ri=0;var i=a.return;try{if(l5(t,i,a,r,Z)){ut=1,jo(t,fa(r,t.current)),U=null;return}}catch(n){if(i!==null)throw U=i,n;ut=1,jo(t,fa(r,t.current)),U=null;return}a.flags&32768?(G||e===1?t=!0:ri||(Z&536870912)!==0?t=!1:(mr=t=!0,(e===2||e===9||e===3||e===6)&&(e=na.current,e!==null&&e.tag===13&&(e.flags|=16384))),Ru(a,t)):a2(a)}function a2(t){var a=t;do{if((a.flags&32768)!==0){Ru(a,mr);return}t=a.return;var r=h5(a.alternate,a,nr);if(r!==null){U=r;return}if(a=a.sibling,a!==null){U=a;return}U=a=t}while(a!==null);ut===0&&(ut=5)}function Ru(t,a){do{var r=u5(t.alternate,t);if(r!==null){r.flags&=32767,U=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){U=t;return}U=t=r}while(t!==null);ut=6,U=null}function d0(t,a,r,e,i,n,o,l,c){t.cancelPendingCommit=null;do r2();while(Lt!==0);if((X&6)!==0)throw Error(M(327));if(a!==null){if(a===t.current)throw Error(M(177));if(n=a.lanes|a.childLanes,n|=j1,I4(t,r,n,o,l,c),t===I&&(U=I=null,Z=0),Re=a,Hr=t,tr=r,a1=n,r1=i,Uu=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,w5(vo,function(){return Pu(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=A.T,A.T=null,i=Q.p,Q.p=2,o=X,X|=4;try{s5(t,a,r)}finally{X=o,Q.p=i,A.T=e}}Lt=1,Ju(),Fu(),$u()}}function Ju(){if(Lt===1){Lt=0;var t=Hr,a=Re,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=A.T,A.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{Vu(a,t);var n=l1,o=gh(t.containerInfo),l=n.focusedElem,c=n.selectionRange;if(o!==l&&l&&l.ownerDocument&&sh(l.ownerDocument.documentElement,l)){if(c!==null&&b1(l)){var g=c.start,v=c.end;if(v===void 0&&(v=g),"selectionStart"in l)l.selectionStart=g,l.selectionEnd=Math.min(v,l.value.length);else{var x=l.ownerDocument||document,p=x&&x.defaultView||window;if(p.getSelection){var k=p.getSelection(),y=l.textContent.length,w=Math.min(c.start,y),z=c.end===void 0?w:Math.min(c.end,y);!k.extend&&w>z&&(o=z,z=w,w=o);var s=Sc(l,w),u=Sc(l,z);if(s&&u&&(k.rangeCount!==1||k.anchorNode!==s.node||k.anchorOffset!==s.offset||k.focusNode!==u.node||k.focusOffset!==u.offset)){var f=x.createRange();f.setStart(s.node,s.offset),k.removeAllRanges(),w>z?(k.addRange(f),k.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),k.addRange(f))}}}}for(x=[],k=l;k=k.parentNode;)k.nodeType===1&&x.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<x.length;l++){var L=x[l];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Uo=!!o1,l1=o1=null}finally{X=i,Q.p=e,A.T=r}}t.current=a,Lt=2}}function Fu(){if(Lt===2){Lt=0;var t=Hr,a=Re,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=A.T,A.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{ju(t,a.alternate,a)}finally{X=i,Q.p=e,A.T=r}}Lt=3}}function $u(){if(Lt===4||Lt===3){Lt=0,G4();var t=Hr,a=Re,r=tr,e=Uu;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Lt=5:(Lt=0,Re=Hr=null,Iu(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Wr=null),L1(r),a=a.stateNode,aa&&typeof aa.onCommitFiberRoot=="function")try{aa.onCommitFiberRoot(en,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=A.T,i=Q.p,Q.p=2,A.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var l=e[o];n(l.value,{componentStack:l.stack})}}finally{A.T=a,Q.p=i}}(tr&3)!==0&&r2(),Na(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===e1?Ui++:(Ui=0,e1=t):Ui=0,sn(0,!1)}}function Iu(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,cn(a)))}function r2(){return Ju(),Fu(),$u(),Pu()}function Pu(){if(Lt!==5)return!1;var t=Hr,a=a1;a1=0;var r=L1(tr),e=A.T,i=Q.p;try{Q.p=32>r?32:r,A.T=null,r=r1,r1=null;var n=Hr,o=tr;if(Lt=0,Re=Hr=null,tr=0,(X&6)!==0)throw Error(M(331));var l=X;if(X|=4,Nu(n.current),_u(n,n.current,o,r),X=l,sn(0,!1),aa&&typeof aa.onPostCommitFiberRoot=="function")try{aa.onPostCommitFiberRoot(en,n)}catch{}return!0}finally{Q.p=i,A.T=e,Iu(t,a)}}function c0(t,a,r){a=fa(r,a),a=Fl(t.stateNode,a,2),t=jr(t,a,2),t!==null&&(on(t,2),Na(t))}function J(t,a,r){if(t.tag===3)c0(t,t,r);else for(;a!==null;){if(a.tag===3){c0(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Wr===null||!Wr.has(e))){t=fa(r,t),r=pu(2),e=jr(a,r,2),e!==null&&(fu(r,e,a,t),on(e,2),Na(e));break}}a=a.return}}function pl(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new f5;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(td=!0,i.add(r),t=M5.bind(null,t,a,r),a.then(t,t))}function M5(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,I===t&&(Z&r)===r&&(ut===4||ut===3&&(Z&62914560)===Z&&300>ta()-Po?(X&2)===0&&Je(t,0):ad|=r,Ke===Z&&(Ke=0)),Na(t)}function ts(t,a){a===0&&(a=X0()),t=le(t,a),t!==null&&(on(t,a),Na(t))}function m5(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),ts(t,r)}function y5(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(M(314))}e!==null&&e.delete(a),ts(t,r)}function w5(t,a){return k1(t,a)}var zo=null,me=null,i1=!1,_o=!1,fl=!1,wr=0;function Na(t){t!==me&&t.next===null&&(me===null?zo=me=t:me=me.next=t),_o=!0,i1||(i1=!0,B5())}function sn(t,a){if(!fl&&_o){fl=!0;do for(var r=!1,e=zo;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,l=e.pingedLanes;n=(1<<31-ra(42|t)+1)-1,n&=i&~(o&~l),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,h0(e,n))}else n=Z,n=qo(e,e===I?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||nn(e,n)||(r=!0,h0(e,n));e=e.next}while(r);fl=!1}}function C5(){as()}function as(){_o=i1=!1;var t=0;wr!==0&&z5()&&(t=wr);for(var a=ta(),r=null,e=zo;e!==null;){var i=e.next,n=rs(e,a);n===0?(e.next=null,r===null?zo=i:r.next=i,i===null&&(me=r)):(r=e,(t!==0||(n&3)!==0)&&(_o=!0)),e=i}Lt!==0&&Lt!==5||sn(t,!1),wr!==0&&(wr=0)}function rs(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-ra(n),l=1<<o,c=i[o];c===-1?((l&r)===0||(l&e)!==0)&&(i[o]=$4(l,a)):c<=a&&(t.expiredLanes|=l),n&=~l}if(a=I,r=Z,r=qo(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(R===2||R===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&Y2(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||nn(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&Y2(e),L1(r)){case 2:case 8:r=G0;break;case 32:r=vo;break;case 268435456:r=Y0;break;default:r=vo}return e=es.bind(null,t),r=k1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&Y2(e),t.callbackPriority=2,t.callbackNode=null,2}function es(t,a){if(Lt!==0&&Lt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(r2()&&t.callbackNode!==r)return null;var e=Z;return e=qo(t,t===I?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(qu(t,e,a),rs(t,ta()),t.callbackNode!=null&&t.callbackNode===r?es.bind(null,t):null)}function h0(t,a){if(r2())return null;qu(t,a,!0)}function B5(){T5(function(){(X&6)!==0?k1(q0,C5):as()})}function ed(){if(wr===0){var t=Ye;t===0&&(t=_n,_n<<=1,(_n&261888)===0&&(_n=256)),wr=t}return wr}function u0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:In(""+t)}function s0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function b5(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=u0((i[Xt]||null).action),o=e.submitter;o&&(a=(a=o[Xt]||null)?u0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var l=new Go("action","action",null,e,i);t.push({event:l,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(wr!==0){var c=o?s0(i,o):new FormData(i);Rl(r,{pending:!0,data:c,method:i.method,action:n},null,c)}}else typeof n=="function"&&(l.preventDefault(),c=o?s0(i,o):new FormData(i),Rl(r,{pending:!0,data:c,method:i.method,action:n},n,c))},currentTarget:i}]})}}for(Qn=0;Qn<El.length;Qn++)Kn=El[Qn],g0=Kn.toLowerCase(),p0=Kn[0].toUpperCase()+Kn.slice(1),ba(g0,"on"+p0);var Kn,g0,p0,Qn;ba(fh,"onAnimationEnd");ba(vh,"onAnimationIteration");ba(kh,"onAnimationStart");ba("dblclick","onDoubleClick");ba("focusin","onFocus");ba("focusout","onBlur");ba(Yp,"onTransitionRun");ba(Xp,"onTransitionStart");ba(Qp,"onTransitionCancel");ba(xh,"onTransitionEnd");qe("onMouseEnter",["mouseout","mouseover"]);qe("onMouseLeave",["mouseout","mouseover"]);qe("onPointerEnter",["pointerout","pointerover"]);qe("onPointerLeave",["pointerout","pointerover"]);ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ie("onBeforeInput",["compositionend","keypress","textInput","paste"]);ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($i));function is(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var l=e[o],c=l.instance,g=l.currentTarget;if(l=l.listener,c!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=g;try{n(i)}catch(v){xo(v)}i.currentTarget=null,n=c}else for(o=0;o<e.length;o++){if(l=e[o],c=l.instance,g=l.currentTarget,l=l.listener,c!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=g;try{n(i)}catch(v){xo(v)}i.currentTarget=null,n=c}}}}function O(t,a){var r=a[Wl];r===void 0&&(r=a[Wl]=new Set);var e=t+"__bubble";r.has(e)||(ns(a,t,2,!1),r.add(e))}function vl(t,a,r){var e=0;a&&(e|=4),ns(r,t,e,a)}var Rn="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[Rn]){t[Rn]=!0,F0.forEach(function(r){r!=="selectionchange"&&(j5.has(r)||vl(r,!1,t),vl(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Rn]||(a[Rn]=!0,vl("selectionchange",!1,a))}}function ns(t,a,r,e){switch(xs(a)){case 2:var i=af;break;case 8:i=rf;break;default:i=dd}r=i.bind(null,a,r,t),i=void 0,!zl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function kl(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var l=e.stateNode.containerInfo;if(l===i)break;if(o===4)for(o=e.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;l!==null;){if(o=Ce(l),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){e=n=o;continue t}l=l.parentNode}}e=e.return}ih(function(){var g=n,v=y1(r),x=[];t:{var p=Lh.get(t);if(p!==void 0){var k=Go,y=t;switch(t){case"keypress":if(to(r)===0)break t;case"keydown":case"keyup":k=yp;break;case"focusin":y="focus",k=J2;break;case"focusout":y="blur",k=J2;break;case"beforeblur":case"afterblur":k=J2;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Bp;break;case fh:case vh:case kh:k=gp;break;case xh:k=jp;break;case"scroll":case"scrollend":k=dp;break;case"wheel":k=Hp;break;case"copy":case"cut":case"paste":k=fp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=wc;break;case"toggle":case"beforetoggle":k=Ap}var w=(a&4)!==0,z=!w&&(t==="scroll"||t==="scrollend"),s=w?p!==null?p+"Capture":null:p;w=[];for(var u=g,f;u!==null;){var L=u;if(f=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||f===null||s===null||(L=Gi(u,s),L!=null&&w.push(Ii(u,L,f))),z)break;u=u.return}0<w.length&&(p=new k(p,y,null,r,v),x.push({event:p,listeners:w}))}}if((a&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",p&&r!==Vl&&(y=r.relatedTarget||r.fromElement)&&(Ce(y)||y[Ie]))break t;if((k||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,k?(y=r.relatedTarget||r.toElement,k=g,y=y?Ce(y):null,y!==null&&(z=rn(y),w=y.tag,y!==z||w!==5&&w!==27&&w!==6)&&(y=null)):(k=null,y=g),k!==y)){if(w=mc,L="onMouseLeave",s="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(w=wc,L="onPointerLeave",s="onPointerEnter",u="pointer"),z=k==null?p:bi(k),f=y==null?p:bi(y),p=new w(L,u+"leave",k,r,v),p.target=z,p.relatedTarget=f,L=null,Ce(v)===g&&(w=new w(s,u+"enter",y,r,v),w.target=f,w.relatedTarget=z,L=w),z=L,k&&y)a:{for(w=W5,s=k,u=y,f=0,L=s;L;L=w(L))f++;L=0;for(var W=u;W;W=w(W))L++;for(;0<f-L;)s=w(s),f--;for(;0<L-f;)u=w(u),L--;for(;f--;){if(s===u||u!==null&&s===u.alternate){w=s;break a}s=w(s),u=w(u)}w=null}else w=null;k!==null&&f0(x,p,k,w,!1),y!==null&&z!==null&&f0(x,z,y,w,!0)}}t:{if(p=g?bi(g):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var V=jc;else if(bc(p))if(hh)V=Zp;else{V=Op;var b=Dp}else k=p.nodeName,!k||k.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?g&&m1(g.elementType)&&(V=jc):V=Up;if(V&&(V=V(t,g))){ch(x,V,r,v);break t}b&&b(t,p,g),t==="focusout"&&g&&p.type==="number"&&g.memoizedProps.value!=null&&Al(p,"number",p.value)}switch(b=g?bi(g):window,t){case"focusin":(bc(b)||b.contentEditable==="true")&&(je=b,_l=g,Ai=null);break;case"focusout":Ai=_l=je=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,Ac(x,r,v);break;case"selectionchange":if(Gp)break;case"keydown":case"keyup":Ac(x,r,v)}var j;if(B1)t:{switch(t){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else be?lh(t,r)&&(E="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(E="onCompositionStart");E&&(oh&&r.locale!=="ko"&&(be||E!=="onCompositionStart"?E==="onCompositionEnd"&&be&&(j=nh()):(Mr=v,w1="value"in Mr?Mr.value:Mr.textContent,be=!0)),b=To(g,E),0<b.length&&(E=new yc(E,t,null,r,v),x.push({event:E,listeners:b}),j?E.data=j:(j=dh(r),j!==null&&(E.data=j)))),(j=zp?_p(t,r):Tp(t,r))&&(E=To(g,"onBeforeInput"),0<E.length&&(b=new yc("onBeforeInput","beforeinput",null,r,v),x.push({event:b,listeners:E}),b.data=j)),b5(x,t,g,r,v)}is(x,a)})}function Ii(t,a,r){return{instance:t,listener:a,currentTarget:r}}function To(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Gi(t,r),i!=null&&e.unshift(Ii(t,i,n)),i=Gi(t,a),i!=null&&e.push(Ii(t,i,n))),t.tag===3)return e;t=t.return}return[]}function W5(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function f0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var l=r,c=l.alternate,g=l.stateNode;if(l=l.tag,c!==null&&c===e)break;l!==5&&l!==26&&l!==27||g===null||(c=g,i?(g=Gi(r,n),g!=null&&o.unshift(Ii(r,g,c))):i||(g=Gi(r,n),g!=null&&o.push(Ii(r,g,c)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var H5=/\r\n?/g,S5=/\u0000|\uFFFD/g;function v0(t){return(typeof t=="string"?t:""+t).replace(H5,`
`).replace(S5,"")}function os(t,a){return a=v0(a),v0(t)===a}function F(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||Ge(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&Ge(t,""+e);break;case"className":Nn(t,"class",e);break;case"tabIndex":Nn(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Nn(t,r,e);break;case"style":eh(t,e,n);break;case"data":if(a!=="object"){Nn(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=In(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&F(t,a,"name",i.name,i,null),F(t,a,"formEncType",i.formEncType,i,null),F(t,a,"formMethod",i.formMethod,i,null),F(t,a,"formTarget",i.formTarget,i,null)):(F(t,a,"encType",i.encType,i,null),F(t,a,"method",i.method,i,null),F(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=In(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=Fa);break;case"onScroll":e!=null&&O("scroll",t);break;case"onScrollEnd":e!=null&&O("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(M(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(M(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=In(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":O("beforetoggle",t),O("toggle",t),$n(t,"popover",e);break;case"xlinkActuate":qa(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":qa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":qa(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":qa(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":qa(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":qa(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":qa(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":qa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":qa(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":$n(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=op.get(r)||r,$n(t,r,e))}}function n1(t,a,r,e,i,n){switch(r){case"style":eh(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(M(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(M(60));t.innerHTML=r}}break;case"children":typeof e=="string"?Ge(t,e):(typeof e=="number"||typeof e=="bigint")&&Ge(t,""+e);break;case"onScroll":e!=null&&O("scroll",t);break;case"onScrollEnd":e!=null&&O("scrollend",t);break;case"onClick":e!=null&&(t.onclick=Fa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$0.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[Xt]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):$n(t,r,e)}}}function At(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":O("error",t),O("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(M(137,a));default:F(t,a,n,o,r,null)}}i&&F(t,a,"srcSet",r.srcSet,r,null),e&&F(t,a,"src",r.src,r,null);return;case"input":O("invalid",t);var l=n=o=i=null,c=null,g=null;for(e in r)if(r.hasOwnProperty(e)){var v=r[e];if(v!=null)switch(e){case"name":i=v;break;case"type":o=v;break;case"checked":c=v;break;case"defaultChecked":g=v;break;case"value":n=v;break;case"defaultValue":l=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(M(137,a));break;default:F(t,a,e,v,r,null)}}th(t,n,l,c,g,o,i,!1);return;case"select":O("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(l=r[i],l!=null))switch(i){case"value":n=l;break;case"defaultValue":o=l;break;case"multiple":e=l;default:F(t,a,i,l,r,null)}a=n,r=o,t.multiple=!!e,a!=null?Te(t,!!e,a,!1):r!=null&&Te(t,!!e,r,!0);return;case"textarea":O("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(l=r[o],l!=null))switch(o){case"value":e=l;break;case"defaultValue":i=l;break;case"children":n=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(M(91));break;default:F(t,a,o,l,r,null)}rh(t,e,i,n);return;case"option":for(c in r)r.hasOwnProperty(c)&&(e=r[c],e!=null)&&(c==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":F(t,a,c,e,r,null));return;case"dialog":O("beforetoggle",t),O("toggle",t),O("cancel",t),O("close",t);break;case"iframe":case"object":O("load",t);break;case"video":case"audio":for(e=0;e<$i.length;e++)O($i[e],t);break;case"image":O("error",t),O("load",t);break;case"details":O("toggle",t);break;case"embed":case"source":case"link":O("error",t),O("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in r)if(r.hasOwnProperty(g)&&(e=r[g],e!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(M(137,a));default:F(t,a,g,e,r,null)}return;default:if(m1(a)){for(v in r)r.hasOwnProperty(v)&&(e=r[v],e!==void 0&&n1(t,a,v,e,r,void 0));return}}for(l in r)r.hasOwnProperty(l)&&(e=r[l],e!=null&&F(t,a,l,e,r,null))}function A5(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,l=null,c=null,g=null,v=null;for(k in r){var x=r[k];if(r.hasOwnProperty(k)&&x!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":c=x;default:e.hasOwnProperty(k)||F(t,a,k,null,e,x)}}for(var p in e){var k=e[p];if(x=r[p],e.hasOwnProperty(p)&&(k!=null||x!=null))switch(p){case"type":n=k;break;case"name":i=k;break;case"checked":g=k;break;case"defaultChecked":v=k;break;case"value":o=k;break;case"defaultValue":l=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(M(137,a));break;default:k!==x&&F(t,a,p,k,e,x)}}Sl(t,o,l,c,g,v,n,i);return;case"select":k=o=l=p=null;for(n in r)if(c=r[n],r.hasOwnProperty(n)&&c!=null)switch(n){case"value":break;case"multiple":k=c;default:e.hasOwnProperty(n)||F(t,a,n,null,e,c)}for(i in e)if(n=e[i],c=r[i],e.hasOwnProperty(i)&&(n!=null||c!=null))switch(i){case"value":p=n;break;case"defaultValue":l=n;break;case"multiple":o=n;default:n!==c&&F(t,a,i,n,e,c)}a=l,r=o,e=k,p!=null?Te(t,!!r,p,!1):!!e!=!!r&&(a!=null?Te(t,!!r,a,!0):Te(t,!!r,r?[]:"",!1));return;case"textarea":k=p=null;for(l in r)if(i=r[l],r.hasOwnProperty(l)&&i!=null&&!e.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:F(t,a,l,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":p=i;break;case"defaultValue":k=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(M(91));break;default:i!==n&&F(t,a,o,i,e,n)}ah(t,p,k);return;case"option":for(var y in r)p=r[y],r.hasOwnProperty(y)&&p!=null&&!e.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:F(t,a,y,null,e,p));for(c in e)p=e[c],k=r[c],e.hasOwnProperty(c)&&p!==k&&(p!=null||k!=null)&&(c==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":F(t,a,c,p,e,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in r)p=r[w],r.hasOwnProperty(w)&&p!=null&&!e.hasOwnProperty(w)&&F(t,a,w,null,e,p);for(g in e)if(p=e[g],k=r[g],e.hasOwnProperty(g)&&p!==k&&(p!=null||k!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(M(137,a));break;default:F(t,a,g,p,e,k)}return;default:if(m1(a)){for(var z in r)p=r[z],r.hasOwnProperty(z)&&p!==void 0&&!e.hasOwnProperty(z)&&n1(t,a,z,void 0,e,p);for(v in e)p=e[v],k=r[v],!e.hasOwnProperty(v)||p===k||p===void 0&&k===void 0||n1(t,a,v,p,e,k);return}}for(var s in r)p=r[s],r.hasOwnProperty(s)&&p!=null&&!e.hasOwnProperty(s)&&F(t,a,s,null,e,p);for(x in e)p=e[x],k=r[x],!e.hasOwnProperty(x)||p===k||p==null&&k==null||F(t,a,x,p,e,k)}function k0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function V5(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,l=i.duration;if(n&&l&&k0(o)){for(o=0,l=i.responseEnd,e+=1;e<r.length;e++){var c=r[e],g=c.startTime;if(g>l)break;var v=c.transferSize,x=c.initiatorType;v&&k0(x)&&(c=c.responseEnd,o+=v*(c<l?1:(l-g)/(c-g)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var o1=null,l1=null;function Eo(t){return t.nodeType===9?t:t.ownerDocument}function x0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ls(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function d1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var xl=null;function z5(){var t=window.event;return t&&t.type==="popstate"?t===xl?!1:(xl=t,!0):(xl=null,!1)}var ds=typeof setTimeout=="function"?setTimeout:void 0,_5=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,T5=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(t){return L0.resolve(null).then(t).catch(E5)}:ds;function E5(t){setTimeout(function(){throw t})}function Dr(t){return t==="head"}function M0(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),$e(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")Zi(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Zi(r);for(var n=r.firstChild;n;){var o=n.nextSibling,l=n.nodeName;n[ln]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&Zi(t.ownerDocument.body);r=i}while(r);$e(a)}function m0(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function c1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":c1(r),M1(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function N5(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[ln])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=xa(t.nextSibling),t===null)break}return null}function D5(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=xa(t.nextSibling),t===null))return null;return t}function cs(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=xa(t.nextSibling),t===null))return null;return t}function h1(t){return t.data==="$?"||t.data==="$~"}function u1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function O5(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function xa(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var s1=null;function y0(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return xa(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function w0(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function hs(t,a,r){switch(a=Eo(r),t){case"html":if(t=a.documentElement,!t)throw Error(M(452));return t;case"head":if(t=a.head,!t)throw Error(M(453));return t;case"body":if(t=a.body,!t)throw Error(M(454));return t;default:throw Error(M(451))}}function Zi(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);M1(t)}var La=new Map,C0=new Set;function No(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var or=Q.d;Q.d={f:U5,r:Z5,D:q5,C:G5,L:Y5,m:X5,X:K5,S:Q5,M:R5};function U5(){var t=or.f(),a=t2();return t||a}function Z5(t){var a=Pe(t);a!==null&&a.tag===5&&a.type==="form"?eu(a):or.r(t)}var ei=typeof document>"u"?null:document;function us(t,a,r){var e=ei;if(e&&typeof a=="string"&&a){var i=pa(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),C0.has(i)||(C0.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),At(a,"link",t),Ct(a),e.head.appendChild(a)))}}function q5(t){or.D(t),us("dns-prefetch",t,null)}function G5(t,a){or.C(t,a),us("preconnect",t,a)}function Y5(t,a,r){or.L(t,a,r);var e=ei;if(e&&t&&a){var i='link[rel="preload"][as="'+pa(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+pa(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+pa(r.imageSizes)+'"]')):i+='[href="'+pa(t)+'"]';var n=i;switch(a){case"style":n=Fe(t);break;case"script":n=ii(t)}La.has(n)||(t=it({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),La.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(gn(n))||a==="script"&&e.querySelector(pn(n))||(a=e.createElement("link"),At(a,"link",t),Ct(a),e.head.appendChild(a)))}}function X5(t,a){or.m(t,a);var r=ei;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+pa(e)+'"][href="'+pa(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=ii(t)}if(!La.has(n)&&(t=it({rel:"modulepreload",href:t},a),La.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(pn(n)))return}e=r.createElement("link"),At(e,"link",t),Ct(e),r.head.appendChild(e)}}}function Q5(t,a,r){or.S(t,a,r);var e=ei;if(e&&t){var i=_e(e).hoistableStyles,n=Fe(t);a=a||"default";var o=i.get(n);if(!o){var l={loading:0,preload:null};if(o=e.querySelector(gn(n)))l.loading=5;else{t=it({rel:"stylesheet",href:t,"data-precedence":a},r),(r=La.get(n))&&nd(t,r);var c=o=e.createElement("link");Ct(c),At(c,"link",t),c._p=new Promise(function(g,v){c.onload=g,c.onerror=v}),c.addEventListener("load",function(){l.loading|=1}),c.addEventListener("error",function(){l.loading|=2}),l.loading|=4,co(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:l},i.set(n,o)}}}function K5(t,a){or.X(t,a);var r=ei;if(r&&t){var e=_e(r).hoistableScripts,i=ii(t),n=e.get(i);n||(n=r.querySelector(pn(i)),n||(t=it({src:t,async:!0},a),(a=La.get(i))&&od(t,a),n=r.createElement("script"),Ct(n),At(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function R5(t,a){or.M(t,a);var r=ei;if(r&&t){var e=_e(r).hoistableScripts,i=ii(t),n=e.get(i);n||(n=r.querySelector(pn(i)),n||(t=it({src:t,async:!0,type:"module"},a),(a=La.get(i))&&od(t,a),n=r.createElement("script"),Ct(n),At(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function B0(t,a,r,e){var i=(i=Cr.current)?No(i):null;if(!i)throw Error(M(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=Fe(r.href),r=_e(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Fe(r.href);var n=_e(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(gn(t)))&&!n._p&&(o.instance=n,o.state.loading=5),La.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},La.set(t,r),n||J5(i,t,r,o.state))),a&&e===null)throw Error(M(528,""));return o}if(a&&e!==null)throw Error(M(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ii(r),r=_e(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(M(444,t))}}function Fe(t){return'href="'+pa(t)+'"'}function gn(t){return'link[rel="stylesheet"]['+t+"]"}function ss(t){return it({},t,{"data-precedence":t.precedence,precedence:null})}function J5(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),At(a,"link",r),Ct(a),t.head.appendChild(a))}function ii(t){return'[src="'+pa(t)+'"]'}function pn(t){return"script[async]"+t}function b0(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+pa(r.href)+'"]');if(e)return a.instance=e,Ct(e),e;var i=it({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Ct(e),At(e,"style",i),co(e,r.precedence,t),a.instance=e;case"stylesheet":i=Fe(r.href);var n=t.querySelector(gn(i));if(n)return a.state.loading|=4,a.instance=n,Ct(n),n;e=ss(r),(i=La.get(i))&&nd(e,i),n=(t.ownerDocument||t).createElement("link"),Ct(n);var o=n;return o._p=new Promise(function(l,c){o.onload=l,o.onerror=c}),At(n,"link",e),a.state.loading|=4,co(n,r.precedence,t),a.instance=n;case"script":return n=ii(r.src),(i=t.querySelector(pn(n)))?(a.instance=i,Ct(i),i):(e=r,(i=La.get(n))&&(e=it({},r),od(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),Ct(i),At(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(M(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,co(e,r.precedence,t));return a.instance}function co(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var l=e[o];if(l.dataset.precedence===a)n=l;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function nd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function od(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var ho=null;function j0(t,a,r){if(ho===null){var e=new Map,i=ho=new Map;i.set(r,e)}else i=ho,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[ln]||n[Wt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var l=e.get(o);l?l.push(n):e.set(o,[n])}}return e}function W0(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function F5(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function gs(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $5(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=Fe(e.href),n=a.querySelector(gn(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Do.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,Ct(n);return}n=a.ownerDocument||a,e=ss(e),(i=La.get(i))&&nd(e,i),n=n.createElement("link"),Ct(n);var o=n;o._p=new Promise(function(l,c){o.onload=l,o.onerror=c}),At(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Do.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var Ll=0;function I5(t,a){return t.stylesheets&&t.count===0&&uo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&uo(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&Ll===0&&(Ll=62500*V5());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&uo(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Ll?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function Do(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)uo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Oo=null;function uo(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Oo=new Map,a.forEach(P5,t),Oo=null,Do.call(t))}function P5(t,a){if(!(a.state.loading&4)){var r=Oo.get(t);if(r)var e=r.get(null);else{r=new Map,Oo.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=Do.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var Pi={$$typeof:Ja,Provider:null,Consumer:null,_currentValue:Rr,_currentValue2:Rr,_threadCount:0};function tf(t,a,r,e,i,n,o,l,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=X2(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=X2(0),this.hiddenUpdates=X2(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ps(t,a,r,e,i,n,o,l,c,g,v,x){return t=new tf(t,a,r,o,c,g,v,x,l),a=1,n===!0&&(a|=24),n=It(3,null,null,a),t.current=n,n.stateNode=t,a=V1(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},T1(n),t}function fs(t){return t?(t=Se,t):Se}function vs(t,a,r,e,i,n){i=fs(i),e.context===null?e.context=i:e.pendingContext=i,e=br(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=jr(t,e,a),r!==null&&(Yt(r,t,a),zi(r,t,a))}function H0(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function ld(t,a){H0(t,a),(t=t.alternate)&&H0(t,a)}function ks(t){if(t.tag===13||t.tag===31){var a=le(t,67108864);a!==null&&Yt(a,t,67108864),ld(t,67108864)}}function S0(t){if(t.tag===13||t.tag===31){var a=ea();a=x1(a);var r=le(t,a);r!==null&&Yt(r,t,a),ld(t,a)}}var Uo=!0;function af(t,a,r,e){var i=A.T;A.T=null;var n=Q.p;try{Q.p=2,dd(t,a,r,e)}finally{Q.p=n,A.T=i}}function rf(t,a,r,e){var i=A.T;A.T=null;var n=Q.p;try{Q.p=8,dd(t,a,r,e)}finally{Q.p=n,A.T=i}}function dd(t,a,r,e){if(Uo){var i=g1(e);if(i===null)kl(t,a,e,Zo,r),A0(t,e);else if(nf(i,t,a,r,e))e.stopPropagation();else if(A0(t,e),a&4&&-1<ef.indexOf(t)){for(;i!==null;){var n=Pe(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=Xr(n.pendingLanes);if(o!==0){var l=n;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var c=1<<31-ra(o);l.entanglements[1]|=c,o&=~c}Na(n),(X&6)===0&&(So=ta()+500,sn(0,!1))}}break;case 31:case 13:l=le(n,2),l!==null&&Yt(l,n,2),t2(),ld(n,2)}if(n=g1(e),n===null&&kl(t,a,e,Zo,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else kl(t,a,e,null,r)}}function g1(t){return t=y1(t),cd(t)}var Zo=null;function cd(t){if(Zo=null,t=Ce(t),t!==null){var a=rn(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=N0(a),t!==null)return t;t=null}else if(r===31){if(t=D0(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Zo=t,null}function xs(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y4()){case q0:return 2;case G0:return 8;case vo:case X4:return 32;case Y0:return 268435456;default:return 32}default:return 32}}var p1=!1,Sr=null,Ar=null,Vr=null,tn=new Map,an=new Map,xr=[],ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function A0(t,a){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":tn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":an.delete(a.pointerId)}}function yi(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=Pe(a),a!==null&&ks(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function nf(t,a,r,e,i){switch(a){case"focusin":return Sr=yi(Sr,t,a,r,e,i),!0;case"dragenter":return Ar=yi(Ar,t,a,r,e,i),!0;case"mouseover":return Vr=yi(Vr,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return tn.set(n,yi(tn.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,an.set(n,yi(an.get(n)||null,t,a,r,e,i)),!0}return!1}function Ls(t){var a=Ce(t.target);if(a!==null){var r=rn(a);if(r!==null){if(a=r.tag,a===13){if(a=N0(r),a!==null){t.blockedOn=a,pc(t.priority,function(){S0(r)});return}}else if(a===31){if(a=D0(r),a!==null){t.blockedOn=a,pc(t.priority,function(){S0(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function so(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=g1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);Vl=e,r.target.dispatchEvent(e),Vl=null}else return a=Pe(r),a!==null&&ks(a),t.blockedOn=r,!1;a.shift()}return!0}function V0(t,a,r){so(t)&&r.delete(a)}function of(){p1=!1,Sr!==null&&so(Sr)&&(Sr=null),Ar!==null&&so(Ar)&&(Ar=null),Vr!==null&&so(Vr)&&(Vr=null),tn.forEach(V0),an.forEach(V0)}function Jn(t,a){t.blockedOn===a&&(t.blockedOn=null,p1||(p1=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,of)))}var Fn=null;function z0(t){Fn!==t&&(Fn=t,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,function(){Fn===t&&(Fn=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(cd(e||r)===null)continue;break}var n=Pe(r);n!==null&&(t.splice(a,3),a-=3,Rl(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function $e(t){function a(c){return Jn(c,t)}Sr!==null&&Jn(Sr,t),Ar!==null&&Jn(Ar,t),Vr!==null&&Jn(Vr,t),tn.forEach(a),an.forEach(a);for(var r=0;r<xr.length;r++){var e=xr[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<xr.length&&(r=xr[0],r.blockedOn===null);)Ls(r),r.blockedOn===null&&xr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[Xt]||null;if(typeof n=="function")o||z0(r);else if(o){var l=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[Xt]||null)l=o.formAction;else if(cd(i)!==null)continue}else l=o.action;typeof l=="function"?r[e+1]=l:(r.splice(e,3),e-=3),z0(r)}}}function Ms(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function hd(t){this._internalRoot=t}e2.prototype.render=hd.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(M(409));var r=a.current,e=ea();vs(r,e,t,a,null,null)};e2.prototype.unmount=hd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;vs(t.current,2,null,t,null,null),t2(),a[Ie]=null}};function e2(t){this._internalRoot=t}e2.prototype.unstable_scheduleHydration=function(t){if(t){var a=J0();t={blockedOn:null,target:t,priority:a};for(var r=0;r<xr.length&&a!==0&&a<xr[r].priority;r++);xr.splice(r,0,t),r===0&&Ls(t)}};var _0=T0.version;if(_0!=="19.2.8")throw Error(M(527,_0,"19.2.8"));Q.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=N4(a),t=t!==null?O0(t):null,t=t===null?null:t.stateNode,t};var lf={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(wi=__REACT_DEVTOOLS_GLOBAL_HOOK__,!wi.isDisabled&&wi.supportsFiber))try{en=wi.inject(lf),aa=wi}catch{}var wi;i2.createRoot=function(t,a){if(!E0(t))throw Error(M(299));var r=!1,e="",i=uu,n=su,o=gu;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=ps(t,1,!1,null,null,r,e,null,i,n,o,Ms),t[Ie]=a.current,id(t),new hd(a)};i2.hydrateRoot=function(t,a,r){if(!E0(t))throw Error(M(299));var e=!1,i="",n=uu,o=su,l=gu,c=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(l=r.onRecoverableError),r.formState!==void 0&&(c=r.formState)),a=ps(t,1,!0,a,r??null,e,i,c,n,o,l,Ms),a.context=fs(null),r=a.current,e=ea(),e=x1(e),i=br(e),i.callback=null,jr(r,i,e),r=e,a.current.lanes=r,on(a,r),Na(a),t[Ie]=a.current,id(t),new e2(a)};i2.version="19.2.8"});var Cs=hr((Zf,ws)=>{"use strict";function ys(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ys)}catch(t){console.error(t)}}ys(),ws.exports=ms()});var mt=qr(Ua()),Kg=qr(Cs());var ni=qr(Ua(),1);var ud=qr(Ua(),1),sd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gd=ud.default.createContext&&ud.default.createContext(sd);var df=["attr","size","title"];function cf(t,a){if(t==null)return{};var r,e,i=hf(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function hf(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function n2(){return n2=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},n2.apply(null,arguments)}function Bs(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function o2(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Bs(Object(r),!0).forEach(function(e){uf(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Bs(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function uf(t,a,r){return(a=sf(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function sf(t){var a=gf(t,"string");return typeof a=="symbol"?a:a+""}function gf(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function bs(t){return t&&t.map((a,r)=>ni.default.createElement(a.tag,o2({key:r},a.attr),bs(a.child)))}function Y(t){return a=>ni.default.createElement(pf,n2({attr:o2({},t.attr)},a),bs(t.child))}function pf(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=cf(t,df),l=i||r.size||"1em",c;return r.className&&(c=r.className),t.className&&(c=(c?c+" ":"")+t.className),ni.default.createElement("svg",n2({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:c,style:o2(o2({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),n&&ni.default.createElement("title",null,n),t.children)};return gd!==void 0?ni.default.createElement(gd.Consumer,null,r=>a(r)):a(sd)}function js(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function Ws(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function Hs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function Ss(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function As(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function Vs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function zs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function _s(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function Ts(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function Es(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function Ns(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function Ds(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function Os(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function Us(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function Zs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function qs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function Gs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function Ys(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function Xs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function Qs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function Ks(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function Rs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function Js(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(t)}function Fs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function $s(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function Is(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function Ps(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function tg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 11-5-5-5 5"},child:[]},{tag:"path",attr:{d:"m17 18-5-5-5 5"},child:[]}]})(t)}function ag(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 6 5 5 5-5"},child:[]},{tag:"path",attr:{d:"m7 13 5 5 5-5"},child:[]}]})(t)}function rg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function eg(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function ig(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function ng(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var og=Ys,l2=Ws,lg=qs,pd=Zs,dg=Qs,cg=Ks,hg=_s,d2=Hs,ug=Fs,sg=Xs,fn=Ns;var gg=Is,oi=Ps,fd=As,pg=$s,fg=Vs,vd=rg,kd=eg,vg=tg,kg=ag,vn=Es;var c2=js,xd=Gs,xg=Us,Lg=Ds,Mg=Os,h2=ng,mg=Ts,yg=ig,wg=Ss,Cg=zs,u2=Js,Bg=Rs;var pt=qr(Ua());var H=qr(Ua());var bg={member:d2,coworker:wg,admin_staff:cg,leader:Cg,pastor:dg,admin:hg},jg=["leader","pastor","admin"],Ld=[{id:"work",label:"工作日誌",Icon:og,href:"work.html",roles:["pastor","admin_staff","admin"]},{id:"serve",label:"服事管理",Icon:l2,href:""},{id:"venue",label:"場地預約",Icon:yg,href:""}],ff=t=>{let a=String(t||"").trim();return/^[\u4e00-\u9fff]+$/.test(a)?a.length===4?a.slice(2):a.length>=2&&a.length<=3?a.slice(1):a:a},Wg=["pastor","admin_staff","admin"],Hg=(t,a)=>!t.roles||t.roles.includes(a),vf=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},Sg=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},Ag=({active:t,shell:a})=>{let[r,e]=(0,H.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(y=>{let w=!y;try{localStorage.setItem("tbcSidebarCollapsed",w?"1":"0")}catch{}return w}),[n,o]=(0,H.useState)(!1),[l,c]=(0,H.useState)(""),g=(0,H.useRef)(null),v=a.identity||{name:"",role:"member",status:"loading"},x=bg[v.role]||d2,p=jg.includes(v.role),k=y=>{c(`${y} 尚未開放`),clearTimeout(g.current),g.current=setTimeout(()=>c(""),2200)};return H.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},H.default.createElement("div",{className:"flex flex-col"},H.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},H.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},H.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},H.default.createElement(h2,{size:20,strokeWidth:2})),r&&H.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},H.default.createElement(pd,{size:18}))),!r&&H.default.createElement(H.default.Fragment,null,H.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),H.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},H.default.createElement(pd,{size:18})))),H.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},Ld.map(y=>{let w=t===y.id,z=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${w?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,s=H.default.createElement(H.default.Fragment,null,H.default.createElement(y.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&H.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},y.label));return y.href?w?H.default.createElement("div",{key:y.id,className:z,title:y.label,"aria-current":"page"},s):H.default.createElement("a",{key:y.id,href:y.href,className:z,title:y.label},s):H.default.createElement("button",{key:y.id,type:"button",onClick:()=>k(y.label),className:z,title:y.label},s)}))),H.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},H.default.createElement("button",{type:"button",onClick:()=>o(y=>!y),"aria-haspopup":"menu","aria-expanded":n,className:`tbc-sb-user flex items-center rounded-full transition-colors ${r?"justify-center w-12 h-12 mx-auto bg-slate-100 hover:bg-slate-200":"gap-3 px-4 h-12 w-full hover:bg-slate-100"}`},r?H.default.createElement("span",{className:"text-[13px] text-slate-900 truncate max-w-full px-1"},ff(v.name)):H.default.createElement(H.default.Fragment,null,H.default.createElement(x,{size:20,strokeWidth:1.75,className:`shrink-0 ${p?"text-amber-500":"text-slate-500"}`}),H.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},v.name))),n&&H.default.createElement(H.default.Fragment,null,H.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),H.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},H.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},H.default.createElement(lg,{size:18,strokeWidth:1.75}),"登出")))),l&&H.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},l))},Vg=({supabase:t,notice:a})=>{let[r,e]=(0,H.useState)(!1),[i,n]=(0,H.useState)(""),[o,l]=(0,H.useState)(""),[c,g]=(0,H.useState)(!1),[v,x]=(0,H.useState)(""),p=async y=>{if(y.preventDefault(),!i.trim()||!o||c)return;g(!0),x("");let{error:w}=await t.auth.signInWithPassword({email:vf(i),password:o});g(!1),w&&x("帳號或密碼不正確，請再試一次")},k="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return H.default.createElement("form",{onSubmit:p,className:"w-full max-w-sm mx-auto space-y-3"},H.default.createElement("input",{value:i,onChange:y=>n(y.target.value),placeholder:"帳號",autoComplete:"username",className:k}),H.default.createElement("div",{className:"relative"},H.default.createElement("input",{type:r?"text":"password",value:o,onChange:y=>l(y.target.value),placeholder:"密碼",autoComplete:"current-password",className:k+" pr-12"}),H.default.createElement("button",{type:"button",onClick:()=>e(y=>!y),title:r?"隱藏密碼":"顯示密碼","aria-label":r?"隱藏密碼":"顯示密碼",className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"},r?H.default.createElement(u2,{size:18}):H.default.createElement(Bg,{size:18}))),(v||a)&&H.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},H.default.createElement(oi,{size:16}),v||a),H.default.createElement("button",{type:"submit",disabled:c||!i.trim()||!o,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},c?"登入中…":"登入"))},zg=({shell:t})=>{let a=t.identity||{},r=bg[a.role]||d2,e=jg.includes(a.role);return H.default.createElement("div",{className:"flex flex-col items-center gap-3 mt-14"},H.default.createElement("p",{className:"text-sm text-slate-500"},"準備好了，開始或",H.default.createElement("button",{type:"button",onClick:t.onLogout,className:"tbc-logout ml-0.5 text-indigo-600 hover:text-indigo-700 underline underline-offset-4"},"登出")))};var kf=({shell:t})=>{let[a,r]=(0,pt.useState)(""),e=(0,pt.useRef)(null),i=t.identity||{},n=Ld.filter(l=>Hg(l,i.role)),o=l=>{r(`${l} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return pt.default.createElement("div",{className:"relative h-[100dvh] w-full bg-white overflow-hidden"},pt.default.createElement("main",{className:"h-full overflow-auto custom-scrollbar"},pt.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},pt.default.createElement("div",{className:"text-center mb-14"},pt.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),pt.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),pt.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(l=>{let c=pt.default.createElement(pt.default.Fragment,null,pt.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},pt.default.createElement(l.Icon,{size:40,strokeWidth:1.75})),pt.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},l.label)),g="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return l.href?pt.default.createElement("a",{key:l.id,href:l.href,className:g},c):pt.default.createElement("button",{key:l.id,type:"button",onClick:()=>o(l.label),className:g},c)})),pt.default.createElement(zg,{shell:t}))),a&&pt.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},_g=kf;var d=qr(Ua());var Md=["日","一","二","三","四","五","六"],Tg={m:15,l:18},Eg=["pastor","admin_staff"],Ng=[{id:"title",label:"工作摘要",locked:!0,sortable:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"負責人",sortable:!0,w:t=>`${Math.ceil(t*5+28)}px`,min:t=>Math.ceil(t*5+28)},{id:"status",label:"狀態",sortable:!0,w:t=>`${Math.ceil(t*.85*3+64)}px`,min:t=>Math.ceil(t*.85*3+64)},{id:"date",label:"日期",sortable:!0,w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(150px,1fr)",min:150},{id:"hours",label:"工時",sortable:!0,w:t=>`${Math.ceil(t*4.8+24)}px`,min:t=>Math.ceil(t*4.8+24)},{id:"priority",label:"優先順序",sortable:!0,w:t=>`${Math.ceil(t*.85*4+52)}px`,min:t=>Math.ceil(t*.85*4+52)},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],xf="Asia/Taipei",Dg=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:xf,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},p2=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},Lf=t=>new Date(t).toISOString().slice(0,10),g2=(t,a)=>Lf(p2(t)+a*864e5),qg=(t,a)=>Math.round((p2(t)-p2(a))/864e5),Gg=t=>new Date(p2(t)).getUTCDay(),Mf=t=>g2(t,-((Gg(t)+6)%7)),Da=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},mf=(t,a)=>{let r=qg(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${Da(t)}（${Md[Gg(t)]}）`,tag:e}},Vt=t=>t?String(t).slice(0,5):"",Og=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Vt(t.start_time).split(":").map(Number),[e,i]=Vt(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n>0?n/60:null},yf=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Vt(t.start_time).split(":").map(Number),[e,i]=Vt(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*10)/10} 小時`},s2=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的工作"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期的任務固定在最上面，不能搬移"],["item not in your list","這筆不在你的清單裡"],["item not found or canceled","這筆工作已被取消或不存在"],["more than one member record","這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號"],["no member record","找不到這個帳號對應的同工資料"],["no permission","沒有使用權限"],["permission denied","沒有使用權限"],["dates are required","日期必填"],["weekly rule needs","每週重複請至少選一個星期"],["monthly rule needs","每月重複請選幾號，或勾「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個週期工作"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},wf=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>Md[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 號`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},Cf=({person:t,strong:a})=>d.default.createElement("span",{className:`truncate max-w-full ${a?"font-bold text-slate-900":"text-slate-700"}`},t&&t.name||"（未知）"),Ug=({value:t,placeholder:a,canEdit:r,onSave:e,className:i="",centerEmpty:n})=>{let[o,l]=(0,d.useState)(!1),[c,g]=(0,d.useState)(t||""),v=(0,d.useRef)(!1);(0,d.useEffect)(()=>{o||g(t||"")},[t,o]);let x=async()=>{if(l(!1),v.current){v.current=!1;return}let p=c.trim();p!==(t||"").trim()&&await e(p)};return o?d.default.createElement("input",{autoFocus:!0,value:c,onChange:p=>g(p.target.value),onBlur:x,onKeyDown:p=>{p.key==="Enter"&&p.currentTarget.blur(),p.key==="Escape"&&(v.current=!0,p.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):d.default.createElement("div",{onClick:()=>r&&l(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} ${!t&&n?"text-center":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?d.default.createElement("span",{className:`text-slate-300 ${n?"block text-center":""}`},a):null))},Zg=({type:t,a,b:r,canEdit:e,children:i,onSave:n})=>{let[o,l]=(0,d.useState)(!1),[c,g]=(0,d.useState)(a||""),[v,x]=(0,d.useState)(r||""),p=(0,d.useRef)(!1);(0,d.useEffect)(()=>{o||(g(a||""),x(r||""))},[a,r,o]);let k=async()=>{if(l(!1),p.current){p.current=!1;return}(c!==(a||"")||v!==(r||""))&&await n(c,v)};if(!o)return d.default.createElement("div",{onClick:()=>e&&l(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let y="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return d.default.createElement("div",{tabIndex:-1,onBlur:w=>{w.currentTarget.contains(w.relatedTarget)||k()},onKeyDown:w=>{w.key==="Enter"&&k(),w.key==="Escape"&&(p.current=!0,l(!1))},className:"flex flex-col gap-1"},d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",d.default.createElement("input",{autoFocus:!0,type:t,value:c,onChange:w=>g(w.target.value),className:y})),d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",d.default.createElement("input",{type:t,value:v,onChange:w=>x(w.target.value),className:y})))},Bf=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o})=>{let l=a||{},c=t==="editRule",g=t!=="create",[v,x]=(0,d.useState)(l.title||""),[p,k]=(0,d.useState)(l.start_date||e),[y,w]=(0,d.useState)(Vt(l.start_time)),[z,s]=(0,d.useState)(l.end_date||l.start_date||e),[u,f]=(0,d.useState)(Vt(l.end_time)),[L,W]=(0,d.useState)(l.priority||"normal"),[V,b]=(0,d.useState)(l.note||""),[j,E]=(0,d.useState)(c?l.freq:t==="createRule"?r||"weekly":"none"),[N,Kt]=(0,d.useState)(!!l.weekdays_only),[ja,he]=(0,d.useState)(l.week_days||[]),[Dt,li]=(0,d.useState)(l.month_day?String(l.month_day):""),[_t,f2]=(0,d.useState)(!!l.month_last_day),[ue,kn]=(0,d.useState)(l.until_date||""),[v2,yd]=(0,d.useState)(l.is_active===void 0?!0:l.is_active),[di,Oa]=(0,d.useState)(""),Ma="text-xs font-medium text-slate-500",Wa="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",xn=S=>he(ma=>ma.includes(S)?ma.filter(wd=>wd!==S):[...ma,S]),k2=()=>{if(Oa(""),!v.trim())return Oa("請輸入任務名稱");if(!p)return Oa("開始日期必填");if(j==="none"&&(!z||z<p))return Oa("結束日期不能早於開始日期");if(j==="weekly"&&ja.length===0)return Oa("每週重複請至少選一個星期");if(j==="monthly"&&!Dt&&!_t)return Oa("每月重複請選幾號，或勾「每月最後一天」");if(j!=="none"&&ue&&ue<p)return Oa("重複的結束日不能早於開始日");n({title:v.trim(),startDate:p,startTime:y||null,endDate:j==="none"?z:p,endTime:u||null,priority:L,note:V.trim()||null,repeat:j,weekdaysOnly:j==="daily"&&N,weekDays:j==="weekly"?ja:[],monthDay:j==="monthly"&&Dt?Number(Dt):null,monthLast:j==="monthly"&&_t,untilDate:ue||null,isActive:v2})};return d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},c?d.default.createElement(d.default.Fragment,null,d.default.createElement(vn,{className:"text-indigo-600",size:20})," 修改週期工作"):t==="createRule"?d.default.createElement(d.default.Fragment,null,d.default.createElement(vn,{className:"text-indigo-600",size:20})," 新增週期工作"):d.default.createElement(d.default.Fragment,null,d.default.createElement(fn,{className:"text-indigo-600",size:20})," 新增")),d.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(c2,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"工作摘要",d.default.createElement("span",{className:"text-red-500"},"*")),d.default.createElement("input",{autoFocus:!0,value:v,onChange:S=>x(S.target.value),placeholder:"簡短描述工作內容",className:Wa})),g&&d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"重複"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([S])=>!(c&&S==="none")).map(([S,ma])=>d.default.createElement("button",{key:S,type:"button",onClick:()=>E(S),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${j===S?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},ma))),j==="daily"&&d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:N,onChange:S=>Kt(S.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),j==="weekly"&&d.default.createElement("div",{className:"flex gap-2 pt-1 flex-wrap"},[1,2,3,4,5,6,7].map(S=>d.default.createElement("button",{key:S,type:"button",onClick:()=>xn(S),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${ja.includes(S)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},Md[S%7]))),j==="monthly"&&d.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},d.default.createElement("select",{value:Dt,onChange:S=>li(S.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},d.default.createElement("option",{value:""},"不指定號數"),Array.from({length:31},(S,ma)=>ma+1).map(S=>d.default.createElement("option",{key:S,value:S},S," 號"))),d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:_t,onChange:S=>f2(S.target.checked),className:"accent-indigo-600"})," 每月最後一天"),Dt&&Number(Dt)>28&&!_t&&d.default.createElement("span",{className:"text-xs text-amber-600"},Dt," 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」"))),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"開始日期"),d.default.createElement("input",{type:"date",value:p,onChange:S=>{k(S.target.value),z<S.target.value&&s(S.target.value)},className:Wa})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"開始時間（選填）"),d.default.createElement("input",{type:"time",value:y,onChange:S=>w(S.target.value),className:Wa})),j==="none"?d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"結束日期"),d.default.createElement("input",{type:"date",value:z,min:p,onChange:S=>s(S.target.value),className:Wa})):d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"結束日期（選填）"),d.default.createElement("input",{type:"date",value:ue,min:p,onChange:S=>kn(S.target.value),className:Wa})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"結束時間（選填）"),d.default.createElement("input",{type:"time",value:u,onChange:S=>f(S.target.value),className:Wa}))),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"優先順序"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["normal","普通"],["urgent","緊急"]].map(([S,ma])=>d.default.createElement("button",{key:S,type:"button",onClick:()=>W(S),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${L===S?S==="urgent"?"bg-white text-red-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},ma))))),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Ma},"備註"),d.default.createElement("textarea",{value:V,onChange:S=>b(S.target.value),rows:2,className:Wa})),di&&d.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},d.default.createElement(oi,{size:16})," ",di)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},d.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:k2,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},c?"儲存":j==="none"?"新增":"儲存"))))},bf=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,d.useState)(Dg()),[o,l]=(0,d.useState)(null),[c,g]=(0,d.useState)([]),[v,x]=(0,d.useState)(""),[p,k]=(0,d.useState)([]),[y,w]=(0,d.useState)(!0),[z,s]=(0,d.useState)({type:"",text:""}),[u,f]=(0,d.useState)(null),[L,W]=(0,d.useState)("mine"),[V,b]=(0,d.useState)("today"),[j,E]=(0,d.useState)(""),[N,Kt]=(0,d.useState)(""),[ja,he]=(0,d.useState)(new Set),[Dt,li]=(0,d.useState)(""),[_t,f2]=(0,d.useState)({col:null,dir:"asc"}),ue=h=>f2(m=>m.col!==h?{col:h,dir:"asc"}:m.dir==="asc"?{col:h,dir:"desc"}:{col:null,dir:"asc"}),[kn,v2]=(0,d.useState)(()=>{try{let h=localStorage.getItem("tbcWorkFont");return Tg[h]?h:"m"}catch{return"m"}}),yd=h=>{v2(h);try{localStorage.setItem("tbcWorkFont",h)}catch{}},[di,Oa]=(0,d.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),Ma=h=>Oa(m=>{let B=m.includes(h)?m.filter(D=>D!==h):[...m,h];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(B))}catch{}return B}),[Wa,xn]=(0,d.useState)(!1),[k2,S]=(0,d.useState)(""),[ma,wd]=(0,d.useState)(""),[Cd,Ln]=(0,d.useState)(!1),[ya,ci]=(0,d.useState)(null),[Rg,Mn]=(0,d.useState)(!1),[Bd,bd]=(0,d.useState)(!1),x2=(0,d.useRef)(!1),[jd,Jg]=(0,d.useState)([]),[hi,mn]=(0,d.useState)(null),[Or,L2]=(0,d.useState)(null),[Fg,yn]=(0,d.useState)(null),[Wd,M2]=(0,d.useState)(null),lr=Tg[kn],Ur=lr+3,oa=i.date,Hd=(0,d.useRef)(null),wn=(0,d.useRef)(0),dr=(h,m)=>{s({type:h,text:m}),clearTimeout(Hd.current),Hd.current=setTimeout(()=>s({type:"",text:""}),3200)},Ot=async(h,m)=>{let{data:B,error:D}=await a.rpc(h,m||{});if(D)throw D;return B},la=async(h,m)=>{try{let B=await h();return await m2(!0),m&&dr("success",typeof m=="function"?m(B):m),B}catch(B){dr("error",s2(B)),await m2(!0);return}},bt=(0,d.useMemo)(()=>{if(V==="today")return{start:oa,end:oa};if(V==="week"){let B=Mf(oa);return{start:B,end:g2(B,6)}}let h=j||oa,m=N||h;return h<=m?{start:h,end:m}:{start:m,end:h}},[V,j,N,oa]);(0,d.useEffect)(()=>{let h=setInterval(()=>n(m=>{let B=Dg();return B.date===m.date&&B.time===m.time?m:B}),3e4);return()=>clearInterval(h)},[]);let $g=async()=>{try{let h=await Ot("work_current_member"),m=await Ot("work_list_people");return l(h),g(m||[]),he(new Set((m||[]).filter(B=>Eg.includes(B.role)).map(B=>B.member_id))),x(""),!0}catch(h){return x(s2(h)),!1}},m2=async h=>{let m=++wn.current;h||w(!0);try{let B=r&&r.fetchAllData?r.fetchAllData:C=>C(),D=C=>{if(C&&C.error)throw C.error;return C&&C.data||[]},nt=D(await B(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).lte("start_date",bt.end).gte("end_date",bt.start))),Rt=D(await B(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).lte("end_date",oa).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),Jt=new Set(nt.map(C=>C.id)),yt=Rt.map(C=>C.id).filter(C=>!Jt.has(C)),q=[];if(yt.length&&(q=D(await B(()=>a.from("work_items").select("*, work_assignees(*)").in("id",yt)))),m!==wn.current)return;let K=[];for(let C of[...nt,...q]){let{work_assignees:ot,...wa}=C;for(let da of ot||[])K.push({key:da.id,item:{...wa,assigneeCount:(ot||[]).length},a:da})}k(K)}catch(B){m===wn.current&&dr("error","讀取失敗："+s2(B))}finally{m===wn.current&&!h&&w(!1)}};(0,d.useEffect)(()=>{$g()},[]),(0,d.useEffect)(()=>{o&&m2(!1)},[o,bt.start,bt.end,oa]),(0,d.useEffect)(()=>{V==="custom"&&!j&&(E(oa),Kt(g2(oa,6)))},[V]);let y2=(0,d.useMemo)(()=>{let h={};return c.forEach(m=>{h[m.member_id]={name:m.name,role:m.role}}),h},[c]),Sf=o?y2[o]:null,w2=(0,d.useMemo)(()=>c.filter(h=>Eg.includes(h.role)),[c]),{overdueRows:Cn,groups:C2,total:Sd}=(0,d.useMemo)(()=>{let h=p.map(C=>{let ot=C.a.status==="done",wa=!!C.a.skipped_at||C.a.status==="on_hold",da=Vt(C.item.end_time),Sa=!ot&&!wa&&(C.item.end_date<i.date||C.item.end_date===i.date&&da&&da<i.time);return{...C,done:ot,skipped:wa,overdue:Sa,isMine:C.a.member_id===o,isRoutine:C.item.assigneeCount===1&&C.item.creator_member_id===C.a.member_id,isRecurring:!!C.item.recurring_rule_id,person:y2[C.a.member_id]}}),m=Dt.trim().toLowerCase(),B=C=>!m||[C.item.title,C.item.note,C.person&&C.person.name].some(ot=>ot&&String(ot).toLowerCase().includes(m)),D=h.filter(C=>(L==="mine"?C.isMine:ja.has(C.a.member_id))&&B(C)),nt=D.filter(C=>C.overdue).sort((C,ot)=>(C.item.end_date+Vt(C.item.end_time)).localeCompare(ot.item.end_date+Vt(ot.item.end_time))||(C.person&&C.person.name||"").localeCompare(ot.person&&ot.person.name||"")),Rt=D.filter(C=>!C.overdue&&C.item.start_date<=bt.end&&C.item.end_date>=bt.start),Jt={};Rt.forEach(C=>{(Jt[C.item.start_date]=Jt[C.item.start_date]||[]).push(C)});let yt=Object.keys(Jt).sort().map(C=>{let ot=Jt[C].sort((da,Sa)=>{if(L==="mine")return da.a.sort_order-Sa.a.sort_order||String(da.a.created_at).localeCompare(String(Sa.a.created_at));let P=Vt(da.item.start_time)||"99:99",lt=Vt(Sa.item.start_time)||"99:99";return P.localeCompare(lt)||(da.person&&da.person.name||"").localeCompare(Sa.person&&Sa.person.name||"")}),wa=L==="mine"&&C>=bt.start&&!m;return{date:C,rows:ot,canMove:wa}}),q=nt,K=yt;if(_t.col){let C=_t.dir==="asc"?1:-1,ot=(P,lt)=>String(P||"").localeCompare(String(lt||""),"zh-Hant"),wa=P=>P.done?2:P.skipped?1:0,Sa={title:(P,lt)=>ot(P.item.title,lt.item.title),who:(P,lt)=>ot(P.person&&P.person.name,lt.person&&lt.person.name),status:(P,lt)=>wa(P)-wa(lt),priority:(P,lt)=>(P.item.priority==="urgent"?0:1)-(lt.item.priority==="urgent"?0:1),hours:(P,lt)=>{let Zr=Og(P.item),si=Og(lt.item);return Zr==null&&si==null?0:Zr==null?2*C:si==null?-2*C:Zr-si},date:(P,lt)=>(P.item.start_date+Vt(P.item.start_time)).localeCompare(lt.item.start_date+Vt(lt.item.start_time))}[_t.col];if(Sa){let P=lt=>[...lt].sort((Zr,si)=>C*Sa(Zr,si));_t.col==="date"?(q=P(nt),K=[...yt].sort((lt,Zr)=>C*lt.date.localeCompare(Zr.date))):(q=P(nt),K=yt.map(lt=>({...lt,rows:P(lt.rows)})))}K=K.map(P=>({...P,canMove:!1}))}return{overdueRows:q,groups:K,total:nt.length+Rt.length}},[p,i,o,L,ja,bt,y2,Dt,_t]),Bn=Ng.filter(h=>h.locked||!di.includes(h.id)),Ig=h=>typeof h.w=="function"?h.w(lr):h.w,Pg=h=>typeof h.min=="function"?h.min(lr):h.min,Ad=`56px ${Bn.map(Ig).join(" ")}`,t4=56+Bn.reduce((h,m)=>h+Pg(m),0)+16,ui=(h,m,B)=>la(()=>{let D={...h.item,...m};return Ot("work_update_routine",{p_item_id:D.id,p_title:D.title,p_start_date:D.start_date,p_start_time:D.start_time||null,p_end_date:D.end_date,p_end_time:D.end_time||null,p_priority:D.priority||"normal",p_note:D.note||null,p_meeting_flag:null})},B),a4=(h,m,B)=>{if(!m||!B){dr("error","日期必填");return}let D=m,nt=B;if(m!==h.item.start_date&&B===h.item.end_date&&(nt=g2(m,qg(h.item.end_date,h.item.start_date))),nt<D){dr("error","結束日期不能早於開始日期");return}let Rt=!(D<=bt.end&&nt>=bt.start);return ui(h,{start_date:D,end_date:nt},Rt?`已改到 ${Da(D)}（目前顯示範圍看不到，切換範圍就會出現）`:null)},r4=(h,m,B)=>ui(h,{start_time:m||null,end_time:B||null}),e4=(h,m)=>{if(!m){dr("error","任務名稱不能空白");return}return ui(h,{title:m})},Af=h=>la(()=>Ot("work_complete",{p_item_id:h.item.id,p_note:null}),"已完成"),i4=(h,m)=>la(()=>Ot("work_set_status",{p_item_id:h.item.id,p_status:m}),"狀態已更新"),bn=(h,m)=>la(()=>Ot("work_move",{p_item_id:h.item.id,p_where:m})),n4=h=>la(()=>Ot("work_copy",{p_item_id:h.item.id}),"複製成功"),o4=h=>f({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或擱置不會刪除，標記「取消」並保留紀錄`,onConfirm:async()=>{f(null),await la(()=>Ot("work_delete",{p_item_id:h.item.id}),m=>m==="canceled"?"這筆已有進度紀錄，已改為取消並保留紀錄":"已刪除")}}),Vf=async()=>{let h=k2.trim();if(!h||Cd)return;Ln(!0);let m=ma||oa,B=await la(()=>Ot("work_create_routine",{p_title:h,p_start_date:m,p_end_date:m}));if(Ln(!1),B){S("");let D=m<=bt.end&&m>=bt.start;dr("success",D?"已新增":`已新增到 ${Da(m)}（目前顯示範圍看不到，切換範圍就會出現）`)}},l4=async h=>{Ln(!0);let m;ya.mode==="editRule"?(m=await la(()=>Ot("work_update_rule",{p_rule_id:ya.rule.id,p_title:h.title,p_freq:h.repeat,p_weekdays_only:h.weekdaysOnly,p_week_days:h.weekDays,p_month_day:h.monthDay,p_month_last_day:h.monthLast,p_start_date:h.startDate,p_until_date:h.untilDate,p_start_time:h.startTime,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:null,p_is_active:h.isActive}),"週期工作已儲存（只影響之後產生的工作）"),m!==void 0&&await B2()):h.repeat==="none"?m=await la(()=>Ot("work_create_routine",{p_title:h.title,p_start_date:h.startDate,p_start_time:h.startTime,p_end_date:h.endDate,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:null}),"已新增"):m=await la(()=>Ot("work_create_rule",{p_title:h.title,p_freq:h.repeat,p_weekdays_only:h.weekdaysOnly,p_week_days:h.weekDays,p_month_day:h.monthDay,p_month_last_day:h.monthLast,p_start_date:h.startDate,p_until_date:h.untilDate,p_start_time:h.startTime,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:null}),"已建立週期工作，之後會在凌晨自動出現在清單"),Ln(!1),m!==void 0&&ci(null)},B2=async()=>{try{let{data:h,error:m}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(m)throw m;Jg(h||[])}catch(h){dr("error","讀取週期工作失敗："+s2(h))}},Vd=async()=>{Mn(!0),await B2()};(0,d.useEffect)(()=>{!ya&&x2.current&&(x2.current=!1,Vd())},[ya]);let d4=async h=>{await la(()=>Ot("work_update_rule",{p_rule_id:h.id,p_title:h.title,p_freq:h.freq,p_weekdays_only:h.weekdays_only,p_week_days:h.week_days,p_month_day:h.month_day,p_month_last_day:h.month_last_day,p_start_date:h.start_date,p_until_date:h.until_date,p_start_time:h.start_time,p_end_time:h.end_time,p_priority:h.priority,p_note:h.note,p_meeting_flag:null,p_is_active:!h.is_active}),h.is_active?"已暫停":"已啟用")!==void 0&&await B2()},c4=async(h,m)=>{let B=Or;if(L2(null),M2(null),yn(null),!B||B.date!==h.date||B.key===m.key)return;let D=h.rows.filter(yt=>!yt.overdue),nt=D.findIndex(yt=>yt.key===B.key),Rt=D.findIndex(yt=>yt.key===m.key),Jt=h.rows.find(yt=>yt.key===B.key);!Jt||nt<0||Rt<0||await la(()=>Ot("work_move_to",{p_item_id:Jt.item.id,p_target_item_id:m.item.id,p_after:nt<Rt}))},se="flex items-center bg-slate-100 p-1 rounded-full shrink-0",cr=h=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${h?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,Ha=hi?[...Cn,...C2.flatMap(h=>h.rows)].find(h=>h.key===hi.key):null,jn=Ha?C2.find(h=>h.rows.some(m=>m.key===Ha.key)):null,zd=(h,m)=>{let B=h.isMine&&h.isRoutine,D=m?m.rows.filter(q=>!q.overdue):[],nt=!!m&&m.canMove&&B&&!h.overdue,Rt=Wd===h.key&&Or&&Or.key!==h.key,Jt=h.done||h.skipped,yt=q=>{switch(q.id){case"title":return d.default.createElement("div",{key:q.id,className:"min-w-0 w-full flex items-start gap-1.5"},d.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},h.isRoutine&&d.default.createElement("span",{className:"text-[0.7em] px-1.5 py-0.5 rounded border border-violet-100 bg-violet-50 text-violet-600 font-bold"},"例行"),h.isRecurring&&d.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},d.default.createElement(vn,{size:Math.round(lr*.95)})),h.overdue&&d.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},d.default.createElement(fd,{size:Math.round(lr*.8)})," 逾期")),d.default.createElement("div",{className:"min-w-0 flex-1"},d.default.createElement(Ug,{value:h.item.title,placeholder:"工作摘要",canEdit:B,onSave:K=>e4(h,K),className:`font-medium ${Jt?"text-slate-400 line-through":h.overdue?"text-red-600":"text-slate-900"}`})));case"who":return d.default.createElement("div",{key:q.id,className:"min-w-0"},d.default.createElement(Cf,{person:h.person,size:Ur}));case"date":{let K=h.item.start_date!==h.item.end_date;return d.default.createElement("div",{key:q.id,className:`min-w-0 ${h.overdue?"text-red-600":"text-slate-700"}`},d.default.createElement(Zg,{type:"date",a:h.item.start_date,b:h.item.end_date,canEdit:B,onSave:(C,ot)=>a4(h,C,ot)},K?`${Da(h.item.start_date)} → ${Da(h.item.end_date)}`:Da(h.item.start_date)))}case"time":{let K=Vt(h.item.start_time),C=Vt(h.item.end_time);return d.default.createElement("div",{key:q.id,className:"min-w-0 text-slate-700"},d.default.createElement(Zg,{type:"time",a:K,b:C,canEdit:B,onSave:(ot,wa)=>r4(h,ot,wa)},K||C?`${K||"—"} ~ ${C||"—"}`:d.default.createElement("span",{className:"text-slate-300"},B?"時間設定":"")))}case"hours":return d.default.createElement("div",{key:q.id,className:"text-slate-500 text-[0.9em]"},yf(h.item)||"");case"priority":return d.default.createElement("div",{key:q.id},d.default.createElement("button",{type:"button",disabled:!B,onClick:()=>ui(h,{priority:h.item.priority==="urgent"?"normal":"urgent"}),title:B?"點一下切換":"",className:`text-[0.75em] px-2 py-0.5 rounded border font-bold ${h.item.priority==="urgent"?"bg-red-50 border-red-100 text-red-600":"bg-slate-50 border-slate-200 text-slate-400"} ${B?"hover:brightness-95 cursor-pointer":"cursor-default"}`},h.item.priority==="urgent"?"緊急":"普通"));case"note":return d.default.createElement("div",{key:q.id,className:"min-w-0 w-full"},d.default.createElement(Ug,{value:h.item.note,placeholder:"新增備註",centerEmpty:!0,canEdit:B,onSave:K=>ui(h,{note:K||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let K=h.done?"done":h.skipped?"on_hold":"pending",C=K==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":K==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600";return B?d.default.createElement("select",{key:q.id,value:K,onChange:ot=>i4(h,ot.target.value),"aria-label":"狀態",title:"點一下改變狀態",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${C}`},d.default.createElement("option",{value:"pending"},"待處理"),d.default.createElement("option",{value:"done"},"完成"),d.default.createElement("option",{value:"on_hold"},"擱置")):d.default.createElement("span",{key:q.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${C}`},{pending:"待處理",done:"完成",on_hold:"擱置"}[K])}default:return null}};return d.default.createElement("div",{key:h.key,draggable:nt&&Fg===h.key,onDragStart:q=>{L2({key:h.key,date:m.date}),q.dataTransfer.effectAllowed="move";try{q.dataTransfer.setData("text/plain",h.key)}catch{}},onDragOver:q=>{Or&&m&&Or.date===m.date&&!h.overdue&&(q.preventDefault(),Wd!==h.key&&M2(h.key))},onDrop:q=>{q.preventDefault(),m&&c4(m,h)},onDragEnd:()=>{L2(null),M2(null),yn(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors
                    ${h.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Or&&Or.key===h.key?"opacity-40":""}
                    ${Rt?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:Ad}},d.default.createElement("div",{className:"flex items-center gap-0.5 px-2"},nt?d.default.createElement("span",{onMouseDown:()=>yn(h.key),onMouseUp:()=>yn(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},d.default.createElement(sg,{size:Ur})):d.default.createElement("span",{style:{width:Ur}}),B?d.default.createElement("button",{onClick:q=>{let K=q.currentTarget.getBoundingClientRect();mn({key:h.key,x:Math.min(K.left,window.innerWidth-220),y:Math.min(K.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},d.default.createElement(ug,{size:Ur})):d.default.createElement("span",{style:{width:Ur+8}})),Bn.map(q=>{let K=q.id==="title"||q.id==="note";return d.default.createElement("div",{key:q.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${K?"[&>*]:w-full":"justify-center text-center"}`},yt(q))}))};return d.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:lr}},d.default.createElement(Ag,{active:"work",shell:e}),d.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},d.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},d.default.createElement("div",{className:"flex items-center gap-4 min-w-0"},d.default.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:lr*1.45}},"工作日誌"),d.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},d.default.createElement(mg,{size:16,className:"text-slate-400 shrink-0"}),d.default.createElement("input",{type:"text",value:Dt,onChange:h=>li(h.target.value),onKeyDown:h=>{h.key==="Escape"&&li("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),Dt&&d.default.createElement("button",{type:"button",onClick:()=>li(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},d.default.createElement(c2,{size:14})))),d.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},d.default.createElement("button",{onClick:()=>ci({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},d.default.createElement(fn,{size:16}),"新增"),d.default.createElement("div",{className:se},d.default.createElement("button",{onClick:Vd,className:cr(!1)},d.default.createElement(fn,{size:14,className:"text-slate-500"}),"週期工作")),d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>xn(h=>!h),className:`${se} !p-1.5`},d.default.createElement("span",{className:cr(Wa)},d.default.createElement(u2,{size:14,className:"text-slate-500"}),"隱藏")),Wa&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>xn(!1)}),d.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},Ng.filter(h=>!h.locked).map(h=>d.default.createElement("label",{key:h.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${h.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},d.default.createElement("input",{type:"checkbox",disabled:h.locked,checked:h.locked||!di.includes(h.id),onChange:()=>Ma(h.id),className:"accent-indigo-600"}),h.label,h.locked&&d.default.createElement(xd,{size:11})))))),d.default.createElement("div",{className:se,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([h,m,B])=>d.default.createElement("button",{key:h,onClick:()=>yd(h),title:m,"aria-label":`文字${m}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${kn===h?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:B}},"A"))))),v?d.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},d.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},d.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},d.default.createElement(xd,{size:30})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),d.default.createElement("p",{className:"text-slate-500 font-normal"},v),d.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧師、行政與管理員。"))):d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 relative z-[15] shrink-0 space-y-3"},d.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},d.default.createElement("div",{className:se},d.default.createElement("button",{onClick:()=>W("mine"),className:cr(L==="mine")},"我的"),d.default.createElement("button",{onClick:()=>W("all"),className:cr(L==="all")},"全部")),L==="all"&&d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>bd(h=>!h),className:`${se} !p-1.5`},d.default.createElement("span",{className:cr(Bd)},d.default.createElement(l2,{size:14,className:"text-slate-500"}),"人員（",ja.size,"/",w2.length,"）")),Bd&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>bd(!1)}),d.default.createElement("div",{className:"absolute left-0 top-full mt-2 z-40 w-56 max-h-80 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},d.default.createElement("div",{className:"flex gap-2 px-1 pb-2 mb-1 border-b border-slate-100"},d.default.createElement("button",{onClick:()=>he(new Set(w2.map(h=>h.member_id))),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全選"),d.default.createElement("button",{onClick:()=>he(new Set),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全不選")),w2.map(h=>d.default.createElement("label",{key:h.member_id,className:"flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none text-slate-700 hover:bg-slate-50 cursor-pointer"},d.default.createElement("input",{type:"checkbox",checked:ja.has(h.member_id),onChange:()=>he(m=>{let B=new Set(m);return B.has(h.member_id)?B.delete(h.member_id):B.add(h.member_id),B}),className:"accent-indigo-600"}),h.name))))),d.default.createElement("div",{className:se},d.default.createElement("button",{onClick:()=>b("today"),className:cr(V==="today")},"今日"),d.default.createElement("button",{onClick:()=>b("week"),className:cr(V==="week")},"本週"),d.default.createElement("button",{onClick:()=>b("custom"),className:cr(V==="custom")},"自訂")),V==="custom"&&d.default.createElement("div",{className:"flex items-center gap-2"},d.default.createElement("input",{type:"date",value:j,onChange:h=>E(h.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),d.default.createElement("span",{className:"text-slate-400"},"～"),d.default.createElement("input",{type:"date",value:N,min:j,onChange:h=>Kt(h.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),d.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},bt.start===bt.end?Da(bt.start):`${Da(bt.start)} ～ ${Da(bt.end)}`,d.default.createElement("span",{className:"ml-3"},"共 ",Sd," 筆")))),d.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},d.default.createElement("div",{className:"space-y-4",style:{minWidth:t4}},d.default.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:Ad}},d.default.createElement("span",{className:"py-2"}),Bn.map(h=>h.sortable?d.default.createElement("button",{key:h.id,type:"button",onClick:()=>ue(h.id),title:"點一下排序","aria-sort":_t.col===h.id?_t.dir==="asc"?"ascending":"descending":"none",className:`py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap font-medium inline-flex items-center justify-center gap-0.5 hover:bg-slate-200/70 transition-colors ${_t.col===h.id?"text-indigo-600":""}`},h.label,_t.col===h.id&&(_t.dir==="asc"?d.default.createElement(vd,{size:14}):d.default.createElement(kd,{size:14}))):d.default.createElement("span",{key:h.id,className:"py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap"},h.label))),y&&p.length===0?d.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):Sd===0?d.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},Dt.trim()?`找不到符合「${Dt.trim()}」的工作（只搜尋目前顯示的範圍）`:"新增一筆工作，開始記錄"):d.default.createElement(d.default.Fragment,null,Cn.length>0&&d.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},d.default.createElement(fd,{size:Ur})," 逾期未完成 ",d.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},Cn.length)),Cn.map(h=>zd(h,null))),C2.map(h=>{let m=mf(h.date,oa);return d.default.createElement("div",{key:h.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},d.default.createElement("span",{className:`font-bold ${m.tag==="今天"?"text-indigo-600":"text-slate-800"}`},m.text)),h.rows.map(B=>zd(B,h)))}))))),hi&&Ha&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>mn(null),onContextMenu:h=>{h.preventDefault(),mn(null)}}),d.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:hi.x,top:hi.y,fontSize:lr}},(()=>{let h=jn?jn.rows.filter(nt=>!nt.overdue):[],m=h.findIndex(nt=>nt.key===Ha.key),B=!!jn&&jn.canMove&&m>=0,D=(nt,Rt,Jt,yt,q)=>d.default.createElement("button",{disabled:yt,onClick:()=>{mn(null),Jt()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${q?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},d.default.createElement(nt,{size:Ur-1}),Rt);return d.default.createElement(d.default.Fragment,null,D(vg,"移到頂端",()=>bn(Ha,"top"),!B||m===0),D(vd,"上一行",()=>bn(Ha,"up"),!B||m===0),D(kd,"下一行",()=>bn(Ha,"down"),!B||m===h.length-1),D(kg,"移到底部",()=>bn(Ha,"bottom"),!B||m===h.length-1),d.default.createElement("div",{className:"h-px bg-slate-100 my-1"}),D(pg,"複製",()=>n4(Ha)),D(fg,"刪除",()=>o4(Ha),!1,!0))})())),ya&&d.default.createElement(Bf,{key:ya.mode+(ya.rule?ya.rule.id:""),mode:ya.mode,initial:ya.rule,presetRepeat:ya.preset,today:oa,busy:Cd,onClose:()=>ci(null),onSubmit:l4}),Rg&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},d.default.createElement(vn,{className:"text-indigo-600",size:20})," 我的週期工作"),d.default.createElement("button",{onClick:()=>Mn(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(c2,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},d.default.createElement("button",{onClick:()=>{Mn(!1),ci({mode:"createRule",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},d.default.createElement(fn,{size:16}),"新增週期工作"),jd.length===0?d.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"還沒有週期工作。按上面的「+ 新增週期工作」建立。"):jd.map(h=>d.default.createElement("div",{key:h.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${h.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},d.default.createElement("div",{className:"min-w-0"},d.default.createElement("div",{className:`font-medium truncate ${h.is_active?"text-slate-900":"text-slate-400"}`},h.title),d.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},wf(h),h.start_time?`　${Vt(h.start_time)}${h.end_time?"~"+Vt(h.end_time):""}`:"",h.until_date?`　到 ${Da(h.until_date)}`:"",h.is_active?"":"　（暫停）")),d.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},d.default.createElement("button",{onClick:()=>{x2.current=!0,Mn(!1),ci({mode:"editRule",rule:h})},className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},d.default.createElement(Mg,{size:16})),d.default.createElement("button",{onClick:()=>d4(h),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${h.is_active?"bg-emerald-50 text-emerald-600 hover:bg-emerald-100":"bg-amber-50 text-amber-600 hover:bg-amber-100"}`,title:h.is_active?"啟用":"暫停","aria-label":h.is_active?"啟用":"暫停"},h.is_active?d.default.createElement(Lg,{size:16}):d.default.createElement(xg,{size:16})))))))),z.text&&d.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},d.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${z.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},d.default.createElement("div",{className:"shrink-0 mt-0.5"},z.type==="success"?d.default.createElement(gg,{size:18}):d.default.createElement(oi,{size:18})),d.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},z.text))),u&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"p-8 text-center"},d.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},d.default.createElement(oi,{size:32})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),d.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},d.default.createElement("button",{onClick:()=>f(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},Yg=bf;var Xg=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
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
  .text-\\[0\\.75em\\] {
    font-size: 0.75em;
  }
  .text-\\[0\\.85em\\] {
    font-size: 0.85em;
  }
  .text-\\[0\\.92em\\] {
    font-size: 0.92em;
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
`;var jf="https://jcepavwocdujoeoqxvsd.supabase.co",Wf="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",md=document.createElement("style");md.id="tbc-one-css";md.textContent=Xg;document.head.appendChild(md);var ce=window.__TBC_SB||window.supabase.createClient(jf,Wf),Hf=({page:t})=>{let[a,r]=(0,mt.useState)(void 0),[e,i]=(0,mt.useState)(""),[n,o]=(0,mt.useState)({status:"loading",name:"",role:"member"});(0,mt.useEffect)(()=>{let v=!0;ce.auth.getSession().then(({data:p})=>{v&&r(p.session||null)});let{data:x}=ce.auth.onAuthStateChange((p,k)=>{v&&r(k||null)});return()=>{v=!1,x&&x.subscription&&x.subscription.unsubscribe()}},[]);let l=a&&a.user&&a.user.id;(0,mt.useEffect)(()=>{if(!a)return;let v=!0;return Sg(ce,a).then(async x=>{if(v){if(x.status!=="ok"||!Wg.includes(x.role)){try{await ce.auth.signOut()}catch{}i("權限不足"),r(null);return}i(""),o(x)}}),()=>{v=!1}},[l]);let c=async()=>{try{await ce.auth.signOut()}catch{}r(null),o({status:"loading",name:"",role:"member"})};if(a===void 0)return mt.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return mt.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},mt.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},mt.default.createElement(h2,{size:30})),mt.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),mt.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),mt.default.createElement(Vg,{supabase:ce,notice:e}));if(n.status!=="ok")return mt.default.createElement("div",{className:"h-[100dvh] bg-white"});let g={identity:n,onLogout:c};return t==="work"?mt.default.createElement(Yg,{session:a,supabase:ce,utils:{},shell:g}):mt.default.createElement(_g,{shell:g})},Qg=document.getElementById("root");(0,Kg.createRoot)(Qg).render(mt.default.createElement(Hf,{page:Qg.getAttribute("data-page")||"home"}));})();
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
