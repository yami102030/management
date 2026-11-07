(()=>{var Ig=Object.create;var Cd=Object.defineProperty;var Pg=Object.getOwnPropertyDescriptor;var t4=Object.getOwnPropertyNames;var a4=Object.getPrototypeOf,r4=Object.prototype.hasOwnProperty;var nr=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var e4=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of t4(a))!r4.call(t,i)&&i!==r&&Cd(t,i,{get:()=>a[i],enumerable:!(e=Pg(a,i))||e.enumerable});return t};var Or=(t,a,r)=>(r=t!=null?Ig(a4(t)):{},e4(a||!t||!t.__esModule?Cd(r,"default",{value:t,enumerable:!0}):r,t));var Td=nr(_=>{"use strict";var C2=Symbol.for("react.transitional.element"),i4=Symbol.for("react.portal"),n4=Symbol.for("react.fragment"),o4=Symbol.for("react.strict_mode"),l4=Symbol.for("react.profiler"),d4=Symbol.for("react.consumer"),c4=Symbol.for("react.context"),h4=Symbol.for("react.forward_ref"),u4=Symbol.for("react.suspense"),s4=Symbol.for("react.memo"),Hd=Symbol.for("react.lazy"),g4=Symbol.for("react.activity"),Bd=Symbol.iterator;function p4(t){return t===null||typeof t!="object"?null:(t=Bd&&t[Bd]||t["@@iterator"],typeof t=="function"?t:null)}var Sd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ad=Object.assign,Vd={};function ce(t,a,r){this.props=t,this.context=a,this.refs=Vd,this.updater=r||Sd}ce.prototype.isReactComponent={};ce.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};ce.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zd(){}zd.prototype=ce.prototype;function B2(t,a,r){this.props=t,this.context=a,this.refs=Vd,this.updater=r||Sd}var b2=B2.prototype=new zd;b2.constructor=B2;Ad(b2,ce.prototype);b2.isPureReactComponent=!0;var bd=Array.isArray;function w2(){}var at={H:null,A:null,T:null,S:null},_d=Object.prototype.hasOwnProperty;function j2(t,a,r){var e=r.ref;return{$$typeof:C2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function f4(t,a){return j2(t.type,a,t.props)}function W2(t){return typeof t=="object"&&t!==null&&t.$$typeof===C2}function v4(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var jd=/\/+/g;function y2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?v4(""+t.key):a.toString(36)}function k4(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(w2,w2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function de(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case C2:case i4:o=!0;break;case Hd:return o=t._init,de(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+y2(t,0):e,bd(i)?(r="",o!=null&&(r=o.replace(jd,"$&/")+"/"),de(i,a,r,"",function(s){return s})):i!=null&&(W2(i)&&(i=f4(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(jd,"$&/")+"/")+o)),a.push(i)),1;o=0;var l=e===""?".":e+":";if(bd(t))for(var c=0;c<t.length;c++)e=t[c],n=l+y2(e,c),o+=de(e,a,r,n,i);else if(c=p4(t),typeof c=="function")for(t=c.call(t),c=0;!(e=t.next()).done;)e=e.value,n=l+y2(e,c++),o+=de(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return de(k4(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function yn(t,a,r){if(t==null)return t;var e=[],i=0;return de(t,e,"","",function(n){return a.call(r,n,i++)}),e}function x4(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var Wd=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},L4={map:yn,forEach:function(t,a,r){yn(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return yn(t,function(){a++}),a},toArray:function(t){return yn(t,function(a){return a})||[]},only:function(t){if(!W2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_.Activity=g4;_.Children=L4;_.Component=ce;_.Fragment=n4;_.Profiler=l4;_.PureComponent=B2;_.StrictMode=o4;_.Suspense=u4;_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=at;_.__COMPILER_RUNTIME={__proto__:null,c:function(t){return at.H.useMemoCache(t)}};_.cache=function(t){return function(){return t.apply(null,arguments)}};_.cacheSignal=function(){return null};_.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=Ad({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!_d.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),l=0;l<n;l++)o[l]=arguments[l+2];e.children=o}return j2(t.type,i,e)};_.createContext=function(t){return t={$$typeof:c4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:d4,_context:t},t};_.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)_d.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return j2(t,n,i)};_.createRef=function(){return{current:null}};_.forwardRef=function(t){return{$$typeof:h4,render:t}};_.isValidElement=W2;_.lazy=function(t){return{$$typeof:Hd,_payload:{_status:-1,_result:t},_init:x4}};_.memo=function(t,a){return{$$typeof:s4,type:t,compare:a===void 0?null:a}};_.startTransition=function(t){var a=at.T,r={};at.T=r;try{var e=t(),i=at.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(w2,Wd)}catch(n){Wd(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),at.T=a}};_.unstable_useCacheRefresh=function(){return at.H.useCacheRefresh()};_.use=function(t){return at.H.use(t)};_.useActionState=function(t,a,r){return at.H.useActionState(t,a,r)};_.useCallback=function(t,a){return at.H.useCallback(t,a)};_.useContext=function(t){return at.H.useContext(t)};_.useDebugValue=function(){};_.useDeferredValue=function(t,a){return at.H.useDeferredValue(t,a)};_.useEffect=function(t,a){return at.H.useEffect(t,a)};_.useEffectEvent=function(t){return at.H.useEffectEvent(t)};_.useId=function(){return at.H.useId()};_.useImperativeHandle=function(t,a,r){return at.H.useImperativeHandle(t,a,r)};_.useInsertionEffect=function(t,a){return at.H.useInsertionEffect(t,a)};_.useLayoutEffect=function(t,a){return at.H.useLayoutEffect(t,a)};_.useMemo=function(t,a){return at.H.useMemo(t,a)};_.useOptimistic=function(t,a){return at.H.useOptimistic(t,a)};_.useReducer=function(t,a,r){return at.H.useReducer(t,a,r)};_.useRef=function(t){return at.H.useRef(t)};_.useState=function(t){return at.H.useState(t)};_.useSyncExternalStore=function(t,a,r){return at.H.useSyncExternalStore(t,a,r)};_.useTransition=function(){return at.H.useTransition()};_.version="19.2.8"});var _a=nr((mf,Ed)=>{"use strict";Ed.exports=Td()});var Qd=nr(nt=>{"use strict";function V2(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<wn(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Ba(t){return t.length===0?null:t[0]}function Bn(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,l=t[o],c=o+1,s=t[c];if(0>wn(l,r))c<i&&0>wn(s,l)?(t[e]=s,t[c]=r,e=c):(t[e]=l,t[o]=r,e=o);else if(c<i&&0>wn(s,r))t[e]=s,t[c]=r,e=c;else break t}}return a}function wn(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}nt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Nd=performance,nt.unstable_now=function(){return Nd.now()}):(H2=Date,Dd=H2.now(),nt.unstable_now=function(){return H2.now()-Dd});var Nd,H2,Dd,Ta=[],or=[],M4=1,oa=null,St=3,z2=!1,ci=!1,hi=!1,_2=!1,Zd=typeof setTimeout=="function"?setTimeout:null,qd=typeof clearTimeout=="function"?clearTimeout:null,Od=typeof setImmediate<"u"?setImmediate:null;function Cn(t){for(var a=Ba(or);a!==null;){if(a.callback===null)Bn(or);else if(a.startTime<=t)Bn(or),a.sortIndex=a.expirationTime,V2(Ta,a);else break;a=Ba(or)}}function T2(t){if(hi=!1,Cn(t),!ci)if(Ba(Ta)!==null)ci=!0,ue||(ue=!0,he());else{var a=Ba(or);a!==null&&E2(T2,a.startTime-t)}}var ue=!1,ui=-1,Gd=5,Yd=-1;function Xd(){return _2?!0:!(nt.unstable_now()-Yd<Gd)}function S2(){if(_2=!1,ue){var t=nt.unstable_now();Yd=t;var a=!0;try{t:{ci=!1,hi&&(hi=!1,qd(ui),ui=-1),z2=!0;var r=St;try{a:{for(Cn(t),oa=Ba(Ta);oa!==null&&!(oa.expirationTime>t&&Xd());){var e=oa.callback;if(typeof e=="function"){oa.callback=null,St=oa.priorityLevel;var i=e(oa.expirationTime<=t);if(t=nt.unstable_now(),typeof i=="function"){oa.callback=i,Cn(t),a=!0;break a}oa===Ba(Ta)&&Bn(Ta),Cn(t)}else Bn(Ta);oa=Ba(Ta)}if(oa!==null)a=!0;else{var n=Ba(or);n!==null&&E2(T2,n.startTime-t),a=!1}}break t}finally{oa=null,St=r,z2=!1}a=void 0}}finally{a?he():ue=!1}}}var he;typeof Od=="function"?he=function(){Od(S2)}:typeof MessageChannel<"u"?(A2=new MessageChannel,Ud=A2.port2,A2.port1.onmessage=S2,he=function(){Ud.postMessage(null)}):he=function(){Zd(S2,0)};var A2,Ud;function E2(t,a){ui=Zd(function(){t(nt.unstable_now())},a)}nt.unstable_IdlePriority=5;nt.unstable_ImmediatePriority=1;nt.unstable_LowPriority=4;nt.unstable_NormalPriority=3;nt.unstable_Profiling=null;nt.unstable_UserBlockingPriority=2;nt.unstable_cancelCallback=function(t){t.callback=null};nt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Gd=0<t?Math.floor(1e3/t):5};nt.unstable_getCurrentPriorityLevel=function(){return St};nt.unstable_next=function(t){switch(St){case 1:case 2:case 3:var a=3;break;default:a=St}var r=St;St=a;try{return t()}finally{St=r}};nt.unstable_requestPaint=function(){_2=!0};nt.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=St;St=t;try{return a()}finally{St=r}};nt.unstable_scheduleCallback=function(t,a,r){var e=nt.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:M4++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,V2(or,t),Ba(Ta)===null&&t===Ba(or)&&(hi?(qd(ui),ui=-1):hi=!0,E2(T2,r-e))):(t.sortIndex=i,V2(Ta,t),ci||z2||(ci=!0,ue||(ue=!0,he()))),t};nt.unstable_shouldYield=Xd;nt.unstable_wrapCallback=function(t){var a=St;return function(){var r=St;St=a;try{return t.apply(this,arguments)}finally{St=r}}}});var Rd=nr((wf,Kd)=>{"use strict";Kd.exports=Qd()});var Fd=nr(zt=>{"use strict";var m4=_a();function Jd(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function lr(){}var Vt={d:{f:lr,r:function(){throw Error(Jd(522))},D:lr,C:lr,L:lr,m:lr,X:lr,S:lr,M:lr},p:0,findDOMNode:null},y4=Symbol.for("react.portal");function w4(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y4,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var si=m4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function bn(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Vt;zt.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(Jd(299));return w4(t,a,null,r)};zt.flushSync=function(t){var a=si.T,r=Vt.p;try{if(si.T=null,Vt.p=2,t)return t()}finally{si.T=a,Vt.p=r,Vt.d.f()}};zt.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Vt.d.C(t,a))};zt.prefetchDNS=function(t){typeof t=="string"&&Vt.d.D(t)};zt.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=bn(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Vt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Vt.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};zt.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=bn(a.as,a.crossOrigin);Vt.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Vt.d.M(t)};zt.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=bn(r,a.crossOrigin);Vt.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};zt.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=bn(a.as,a.crossOrigin);Vt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Vt.d.m(t)};zt.requestFormReset=function(t){Vt.d.r(t)};zt.unstable_batchedUpdates=function(t,a){return t(a)};zt.useFormState=function(t,a,r){return si.H.useFormState(t,a,r)};zt.useFormStatus=function(){return si.H.useHostTransitionStatus()};zt.version="19.2.8"});var Pd=nr((Bf,Id)=>{"use strict";function $d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($d)}catch(t){console.error(t)}}$d(),Id.exports=Fd()});var us=nr(Io=>{"use strict";var xt=Rd(),B0=_a(),C4=Pd();function M(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ii(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function j0(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function W0(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function tc(t){if(Ii(t)!==t)throw Error(M(188))}function B4(t){var a=t.alternate;if(!a){if(a=Ii(t),a===null)throw Error(M(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return tc(i),t;if(n===e)return tc(i),a;n=n.sibling}throw Error(M(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,e=n;break}if(l===e){o=!0,e=i,r=n;break}l=l.sibling}if(!o){for(l=n.child;l;){if(l===r){o=!0,r=n,e=i;break}if(l===e){o=!0,e=n,r=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(r.alternate!==e)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?t:a}function H0(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=H0(t),a!==null)return a;t=t.sibling}return null}var it=Object.assign,b4=Symbol.for("react.element"),jn=Symbol.for("react.transitional.element"),Mi=Symbol.for("react.portal"),ke=Symbol.for("react.fragment"),S0=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),A0=Symbol.for("react.consumer"),Ga=Symbol.for("react.context"),u1=Symbol.for("react.forward_ref"),kl=Symbol.for("react.suspense"),xl=Symbol.for("react.suspense_list"),s1=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),Ll=Symbol.for("react.activity"),j4=Symbol.for("react.memo_cache_sentinel"),ac=Symbol.iterator;function gi(t){return t===null||typeof t!="object"?null:(t=ac&&t[ac]||t["@@iterator"],typeof t=="function"?t:null)}var W4=Symbol.for("react.client.reference");function Ml(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===W4?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ke:return"Fragment";case vl:return"Profiler";case S0:return"StrictMode";case kl:return"Suspense";case xl:return"SuspenseList";case Ll:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Mi:return"Portal";case Ga:return t.displayName||"Context";case A0:return(t._context.displayName||"Context")+".Consumer";case u1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case s1:return a=t.displayName||null,a!==null?a:Ml(t.type)||"Memo";case dr:a=t._payload,t=t._init;try{return Ml(t(a))}catch{}}return null}var mi=Array.isArray,V=B0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=C4.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xr={pending:!1,data:null,method:null,action:null},ml=[],xe=-1;function Sa(t){return{current:t}}function mt(t){0>xe||(t.current=ml[xe],ml[xe]=null,xe--)}function tt(t,a){xe++,ml[xe]=t.current,t.current=a}var Ha=Sa(null),Di=Sa(null),Lr=Sa(null),oo=Sa(null);function lo(t,a){switch(tt(Lr,a),tt(Di,t),tt(Ha,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?d0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=d0(a),t=$u(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}mt(Ha),tt(Ha,t)}function Ee(){mt(Ha),mt(Di),mt(Lr)}function yl(t){t.memoizedState!==null&&tt(oo,t);var a=Ha.current,r=$u(a,t.type);a!==r&&(tt(Di,t),tt(Ha,r))}function co(t){Di.current===t&&(mt(Ha),mt(Di)),oo.current===t&&(mt(oo),Ji._currentValue=Xr)}var N2,rc;function Zr(t){if(N2===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);N2=a&&a[1]||"",rc=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+N2+t+rc}var D2=!1;function O2(t,a){if(!t||D2)return"";D2=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(x){var p=x}Reflect.construct(t,[],k)}else{try{k.call()}catch(x){p=x}t.call(k.prototype)}}else{try{throw Error()}catch(x){p=x}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(x){if(x&&p&&typeof x.stack=="string")return[x.stack,p.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],l=n[1];if(o&&l){var c=o.split(`
`),s=l.split(`
`);for(i=e=0;e<c.length&&!c[e].includes("DetermineComponentFrameRoot");)e++;for(;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;if(e===c.length||i===s.length)for(e=c.length-1,i=s.length-1;1<=e&&0<=i&&c[e]!==s[i];)i--;for(;1<=e&&0<=i;e--,i--)if(c[e]!==s[i]){if(e!==1||i!==1)do if(e--,i--,0>i||c[e]!==s[i]){var v=`
`+c[e].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=e&&0<=i);break}}}finally{D2=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Zr(r):""}function H4(t,a){switch(t.tag){case 26:case 27:case 5:return Zr(t.type);case 16:return Zr("Lazy");case 13:return t.child!==a&&a!==null?Zr("Suspense Fallback"):Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 15:return O2(t.type,!1);case 11:return O2(t.type.render,!1);case 1:return O2(t.type,!0);case 31:return Zr("Activity");default:return""}}function ec(t){try{var a="",r=null;do a+=H4(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var wl=Object.prototype.hasOwnProperty,g1=xt.unstable_scheduleCallback,U2=xt.unstable_cancelCallback,S4=xt.unstable_shouldYield,A4=xt.unstable_requestPaint,It=xt.unstable_now,V4=xt.unstable_getCurrentPriorityLevel,V0=xt.unstable_ImmediatePriority,z0=xt.unstable_UserBlockingPriority,ho=xt.unstable_NormalPriority,z4=xt.unstable_LowPriority,_0=xt.unstable_IdlePriority,_4=xt.log,T4=xt.unstable_setDisableYieldValue,Pi=null,Pt=null;function pr(t){if(typeof _4=="function"&&T4(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Pi,t)}catch{}}var ta=Math.clz32?Math.clz32:D4,E4=Math.log,N4=Math.LN2;function D4(t){return t>>>=0,t===0?32:31-(E4(t)/N4|0)|0}var Wn=256,Hn=262144,Sn=4194304;function qr(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Eo(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var l=e&134217727;return l!==0?(e=l&~n,e!==0?i=qr(e):(o&=l,o!==0?i=qr(o):r||(r=l&~t,r!==0&&(i=qr(r))))):(l=e&~n,l!==0?i=qr(l):o!==0?i=qr(o):r||(r=e&~t,r!==0&&(i=qr(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function tn(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function O4(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T0(){var t=Sn;return Sn<<=1,(Sn&62914560)===0&&(Sn=4194304),t}function Z2(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function an(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function U4(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var l=t.entanglements,c=t.expirationTimes,s=t.hiddenUpdates;for(r=o&~r;0<r;){var v=31-ta(r),k=1<<v;l[v]=0,c[v]=-1;var p=s[v];if(p!==null)for(s[v]=null,v=0;v<p.length;v++){var x=p[v];x!==null&&(x.lane&=-536870913)}r&=~k}e!==0&&E0(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function E0(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-ta(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function N0(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-ta(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function D0(t,a){var r=a&-a;return r=(r&42)!==0?1:p1(r),(r&(t.suspendedLanes|a))!==0?0:r}function p1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function f1(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function O0(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:ds(t.type))}function ic(t,a){var r=Q.p;try{return Q.p=t,a()}finally{Q.p=r}}var Vr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Vr,qt="__reactProps$"+Vr,Ke="__reactContainer$"+Vr,Cl="__reactEvents$"+Vr,Z4="__reactListeners$"+Vr,q4="__reactHandles$"+Vr,nc="__reactResources$"+Vr,rn="__reactMarker$"+Vr;function v1(t){delete t[Ct],delete t[qt],delete t[Cl],delete t[Z4],delete t[q4]}function Le(t){var a=t[Ct];if(a)return a;for(var r=t.parentNode;r;){if(a=r[Ke]||r[Ct]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=g0(t);t!==null;){if(r=t[Ct])return r;t=g0(t)}return a}t=r,r=t.parentNode}return null}function Re(t){if(t=t[Ct]||t[Ke]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function yi(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(M(33))}function He(t){var a=t[nc];return a||(a=t[nc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Mt(t){t[rn]=!0}var U0=new Set,Z0={};function ae(t,a){Ne(t,a),Ne(t+"Capture",a)}function Ne(t,a){for(Z0[t]=a,t=0;t<a.length;t++)U0.add(a[t])}var G4=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oc={},lc={};function Y4(t){return wl.call(lc,t)?!0:wl.call(oc,t)?!1:G4.test(t)?lc[t]=!0:(oc[t]=!0,!1)}function Xn(t,a,r){if(Y4(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function An(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function Ea(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function da(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function q0(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function X4(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Bl(t){if(!t._valueTracker){var a=q0(t)?"checked":"value";t._valueTracker=X4(t,a,""+t[a])}}function G0(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=q0(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function uo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Q4=/[\n"\\]/g;function ua(t){return t.replace(Q4,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function bl(t,a,r,e,i,n,o,l){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+da(a)):t.value!==""+da(a)&&(t.value=""+da(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?jl(t,o,da(a)):r!=null?jl(t,o,da(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+da(l):t.removeAttribute("name")}function Y0(t,a,r,e,i,n,o,l){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){Bl(t);return}r=r!=null?""+da(r):"",a=a!=null?""+da(a):r,l||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=l?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Bl(t)}function jl(t,a,r){a==="number"&&uo(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Se(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+da(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function X0(t,a,r){if(a!=null&&(a=""+da(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+da(r):""}function Q0(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(M(92));if(mi(e)){if(1<e.length)throw Error(M(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=da(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),Bl(t)}function De(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var K4=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dc(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||K4.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function K0(t,a,r){if(a!=null&&typeof a!="object")throw Error(M(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&dc(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&dc(t,n,a[n])}function k1(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R4=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),J4=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qn(t){return J4.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ya(){}var Wl=null;function x1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Me=null,Ae=null;function cc(t){var a=Re(t);if(a&&(t=a.stateNode)){var r=t[qt]||null;t:switch(t=a.stateNode,a.type){case"input":if(bl(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ua(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[qt]||null;if(!i)throw Error(M(90));bl(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&G0(e)}break t;case"textarea":X0(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Se(t,!!r.multiple,a,!1)}}}var q2=!1;function R0(t,a,r){if(q2)return t(a,r);q2=!0;try{var e=t(a);return e}finally{if(q2=!1,(Me!==null||Ae!==null)&&(Ro(),Me&&(a=Me,t=Ae,Ae=Me=null,cc(a),t)))for(a=0;a<t.length;a++)cc(t[a])}}function Oi(t,a){var r=t.stateNode;if(r===null)return null;var e=r[qt]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(M(231,a,typeof r));return r}var Ja=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=!1;if(Ja)try{se={},Object.defineProperty(se,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",se,se),window.removeEventListener("test",se,se)}catch{Hl=!1}var se,fr=null,L1=null,Kn=null;function J0(){if(Kn)return Kn;var t,a=L1,r=a.length,e,i="value"in fr?fr.value:fr.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return Kn=i.slice(t,1<e?1-e:void 0)}function Rn(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Vn(){return!0}function hc(){return!1}function Gt(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(n):n[l]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Vn:hc,this.isPropagationStopped=hc,this}return it(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Vn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Vn)},persist:function(){},isPersistent:Vn}),a}var re={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},No=Gt(re),en=it({},re,{view:0,detail:0}),F4=Gt(en),G2,Y2,pi,Do=it({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:M1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pi&&(pi&&t.type==="mousemove"?(G2=t.screenX-pi.screenX,Y2=t.screenY-pi.screenY):Y2=G2=0,pi=t),G2)},movementY:function(t){return"movementY"in t?t.movementY:Y2}}),uc=Gt(Do),$4=it({},Do,{dataTransfer:0}),I4=Gt($4),P4=it({},en,{relatedTarget:0}),X2=Gt(P4),tp=it({},re,{animationName:0,elapsedTime:0,pseudoElement:0}),ap=Gt(tp),rp=it({},re,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ep=Gt(rp),ip=it({},re,{data:0}),sc=Gt(ip),np={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},op={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=lp[t])?!!a[t]:!1}function M1(){return dp}var cp=it({},en,{key:function(t){if(t.key){var a=np[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Rn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?op[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:M1,charCode:function(t){return t.type==="keypress"?Rn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hp=Gt(cp),up=it({},Do,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gc=Gt(up),sp=it({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:M1}),gp=Gt(sp),pp=it({},re,{propertyName:0,elapsedTime:0,pseudoElement:0}),fp=Gt(pp),vp=it({},Do,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kp=Gt(vp),xp=it({},re,{newState:0,oldState:0}),Lp=Gt(xp),Mp=[9,13,27,32],m1=Ja&&"CompositionEvent"in window,Bi=null;Ja&&"documentMode"in document&&(Bi=document.documentMode);var mp=Ja&&"TextEvent"in window&&!Bi,F0=Ja&&(!m1||Bi&&8<Bi&&11>=Bi),pc=" ",fc=!1;function $0(t,a){switch(t){case"keyup":return Mp.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var me=!1;function yp(t,a){switch(t){case"compositionend":return I0(a);case"keypress":return a.which!==32?null:(fc=!0,pc);case"textInput":return t=a.data,t===pc&&fc?null:t;default:return null}}function wp(t,a){if(me)return t==="compositionend"||!m1&&$0(t,a)?(t=J0(),Kn=L1=fr=null,me=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return F0&&a.locale!=="ko"?null:a.data;default:return null}}var Cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!Cp[t.type]:a==="textarea"}function P0(t,a,r,e){Me?Ae?Ae.push(e):Ae=[e]:Me=e,a=Ho(a,"onChange"),0<a.length&&(r=new No("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var bi=null,Ui=null;function Bp(t){Ru(t,0)}function Oo(t){var a=yi(t);if(G0(a))return t}function kc(t,a){if(t==="change")return a}var th=!1;Ja&&(Ja?(_n="oninput"in document,_n||(Q2=document.createElement("div"),Q2.setAttribute("oninput","return;"),_n=typeof Q2.oninput=="function"),zn=_n):zn=!1,th=zn&&(!document.documentMode||9<document.documentMode));var zn,_n,Q2;function xc(){bi&&(bi.detachEvent("onpropertychange",ah),Ui=bi=null)}function ah(t){if(t.propertyName==="value"&&Oo(Ui)){var a=[];P0(a,Ui,t,x1(t)),R0(Bp,a)}}function bp(t,a,r){t==="focusin"?(xc(),bi=a,Ui=r,bi.attachEvent("onpropertychange",ah)):t==="focusout"&&xc()}function jp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oo(Ui)}function Wp(t,a){if(t==="click")return Oo(a)}function Hp(t,a){if(t==="input"||t==="change")return Oo(a)}function Sp(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var ra=typeof Object.is=="function"?Object.is:Sp;function Zi(t,a){if(ra(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!wl.call(a,i)||!ra(t[i],a[i]))return!1}return!0}function Lc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mc(t,a){var r=Lc(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Lc(r)}}function rh(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?rh(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function eh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=uo(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=uo(t.document)}return a}function y1(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var Ap=Ja&&"documentMode"in document&&11>=document.documentMode,ye=null,Sl=null,ji=null,Al=!1;function mc(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Al||ye==null||ye!==uo(e)||(e=ye,"selectionStart"in e&&y1(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),ji&&Zi(ji,e)||(ji=e,e=Ho(Sl,"onSelect"),0<e.length&&(a=new No("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=ye)))}function Ur(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var we={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionrun:Ur("Transition","TransitionRun"),transitionstart:Ur("Transition","TransitionStart"),transitioncancel:Ur("Transition","TransitionCancel"),transitionend:Ur("Transition","TransitionEnd")},K2={},ih={};Ja&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete we.animationend.animation,delete we.animationiteration.animation,delete we.animationstart.animation),"TransitionEvent"in window||delete we.transitionend.transition);function ee(t){if(K2[t])return K2[t];if(!we[t])return t;var a=we[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in ih)return K2[t]=a[r];return t}var nh=ee("animationend"),oh=ee("animationiteration"),lh=ee("animationstart"),Vp=ee("transitionrun"),zp=ee("transitionstart"),_p=ee("transitioncancel"),dh=ee("transitionend"),ch=new Map,Vl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vl.push("scrollEnd");function wa(t,a){ch.set(t,a),ae(a,[t])}var so=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},la=[],Ce=0,w1=0;function Uo(){for(var t=Ce,a=w1=Ce=0;a<t;){var r=la[a];la[a++]=null;var e=la[a];la[a++]=null;var i=la[a];la[a++]=null;var n=la[a];if(la[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&hh(r,i,n)}}function Zo(t,a,r,e){la[Ce++]=t,la[Ce++]=a,la[Ce++]=r,la[Ce++]=e,w1|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function C1(t,a,r,e){return Zo(t,a,r,e),go(t)}function ie(t,a){return Zo(t,null,null,a),go(t)}function hh(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-ta(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function go(t){if(50<Ei)throw Ei=0,Pl=null,Error(M(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Be={};function Tp(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,a,r,e){return new Tp(t,a,r,e)}function B1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qa(t,a){var r=t.alternate;return r===null?(r=Ft(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function uh(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Jn(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")B1(t)&&(o=1);else if(typeof t=="string")o=D5(t,r,Ha.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ll:return t=Ft(31,r,a,i),t.elementType=Ll,t.lanes=n,t;case ke:return Qr(r.children,i,n,a);case S0:o=8,i|=24;break;case vl:return t=Ft(12,r,a,i|2),t.elementType=vl,t.lanes=n,t;case kl:return t=Ft(13,r,a,i),t.elementType=kl,t.lanes=n,t;case xl:return t=Ft(19,r,a,i),t.elementType=xl,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ga:o=10;break t;case A0:o=9;break t;case u1:o=11;break t;case s1:o=14;break t;case dr:o=16,e=null;break t}o=29,r=Error(M(130,t===null?"null":typeof t,"")),e=null}return a=Ft(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function Qr(t,a,r,e){return t=Ft(7,t,e,a),t.lanes=r,t}function R2(t,a,r){return t=Ft(6,t,null,a),t.lanes=r,t}function sh(t){var a=Ft(18,null,null,0);return a.stateNode=t,a}function J2(t,a,r){return a=Ft(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var yc=new WeakMap;function sa(t,a){if(typeof t=="object"&&t!==null){var r=yc.get(t);return r!==void 0?r:(a={value:t,source:a,stack:ec(a)},yc.set(t,a),a)}return{value:t,source:a,stack:ec(a)}}var be=[],je=0,po=null,qi=0,ca=[],ha=0,Wr=null,ba=1,ja="";function Za(t,a){be[je++]=qi,be[je++]=po,po=t,qi=a}function gh(t,a,r){ca[ha++]=ba,ca[ha++]=ja,ca[ha++]=Wr,Wr=t;var e=ba;t=ja;var i=32-ta(e)-1;e&=~(1<<i),r+=1;var n=32-ta(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,ba=1<<32-ta(a)+i|r<<i|e,ja=n+t}else ba=1<<n|r<<i|e,ja=t}function b1(t){t.return!==null&&(Za(t,1),gh(t,1,0))}function j1(t){for(;t===po;)po=be[--je],be[je]=null,qi=be[--je],be[je]=null;for(;t===Wr;)Wr=ca[--ha],ca[ha]=null,ja=ca[--ha],ca[ha]=null,ba=ca[--ha],ca[ha]=null}function ph(t,a){ca[ha++]=ba,ca[ha++]=ja,ca[ha++]=Wr,ba=a.id,ja=a.overflow,Wr=t}var Bt=null,et=null,q=!1,Mr=null,ga=!1,zl=Error(M(519));function Hr(t){var a=Error(M(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gi(sa(a,t)),zl}function wc(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[Ct]=t,a[qt]=e,r){case"dialog":O("cancel",a),O("close",a);break;case"iframe":case"object":case"embed":O("load",a);break;case"video":case"audio":for(r=0;r<Ki.length;r++)O(Ki[r],a);break;case"source":O("error",a);break;case"img":case"image":case"link":O("error",a),O("load",a);break;case"details":O("toggle",a);break;case"input":O("invalid",a),Y0(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":O("invalid",a);break;case"textarea":O("invalid",a),Q0(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||Fu(a.textContent,r)?(e.popover!=null&&(O("beforetoggle",a),O("toggle",a)),e.onScroll!=null&&O("scroll",a),e.onScrollEnd!=null&&O("scrollend",a),e.onClick!=null&&(a.onclick=Ya),a=!0):a=!1,a||Hr(t,!0)}function Cc(t){for(Bt=t.return;Bt;)switch(Bt.tag){case 5:case 31:case 13:ga=!1;return;case 27:case 3:ga=!0;return;default:Bt=Bt.return}}function ge(t){if(t!==Bt)return!1;if(!q)return Cc(t),q=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||i1(t.type,t.memoizedProps)),r=!r),r&&et&&Hr(t),Cc(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));et=s0(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));et=s0(t)}else a===27?(a=et,zr(t.type)?(t=d1,d1=null,et=t):et=a):et=Bt?fa(t.stateNode.nextSibling):null;return!0}function Fr(){et=Bt=null,q=!1}function F2(){var t=Mr;return t!==null&&(Ut===null?Ut=t:Ut.push.apply(Ut,t),Mr=null),t}function Gi(t){Mr===null?Mr=[t]:Mr.push(t)}var _l=Sa(null),ne=null,Xa=null;function hr(t,a,r){tt(_l,a._currentValue),a._currentValue=r}function Ka(t){t._currentValue=_l.current,mt(_l)}function Tl(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function El(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var l=n;n=i;for(var c=0;c<a.length;c++)if(l.context===a[c]){n.lanes|=r,l=n.alternate,l!==null&&(l.lanes|=r),Tl(n.return,r,t),e||(o=null);break t}n=l.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(M(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),Tl(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Je(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(M(387));if(o=o.memoizedProps,o!==null){var l=i.type;ra(i.pendingProps.value,o.value)||(t!==null?t.push(l):t=[l])}}else if(i===oo.current){if(o=i.alternate,o===null)throw Error(M(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ji):t=[Ji])}i=i.return}t!==null&&El(a,t,r,e),a.flags|=262144}function fo(t){for(t=t.firstContext;t!==null;){if(!ra(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $r(t){ne=t,Xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bt(t){return fh(ne,t)}function Tn(t,a){return ne===null&&$r(t),fh(t,a)}function fh(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},Xa===null){if(t===null)throw Error(M(308));Xa=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Xa=Xa.next=a;return r}var Ep=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},Np=xt.unstable_scheduleCallback,Dp=xt.unstable_NormalPriority,ft={$$typeof:Ga,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function W1(){return{controller:new Ep,data:new Map,refCount:0}}function nn(t){t.refCount--,t.refCount===0&&Np(Dp,function(){t.controller.abort()})}var Wi=null,Nl=0,Oe=0,Ve=null;function Op(t,a){if(Wi===null){var r=Wi=[];Nl=0,Oe=P1(),Ve={status:"pending",value:void 0,then:function(e){r.push(e)}}}return Nl++,a.then(Bc,Bc),a}function Bc(){if(--Nl===0&&Wi!==null){Ve!==null&&(Ve.status="fulfilled");var t=Wi;Wi=null,Oe=0,Ve=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function Up(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var bc=V.S;V.S=function(t,a){Hu=It(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Op(t,a),bc!==null&&bc(t,a)};var Kr=Sa(null);function H1(){var t=Kr.current;return t!==null?t:P.pooledCache}function Fn(t,a){a===null?tt(Kr,Kr.current):tt(Kr,a.pool)}function vh(){var t=H1();return t===null?null:{parent:ft._currentValue,pool:t}}var Fe=Error(M(460)),S1=Error(M(474)),qo=Error(M(542)),vo={then:function(){}};function jc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function kh(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(Ya,Ya),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Hc(t),t;default:if(typeof a.status=="string")a.then(Ya,Ya);else{if(t=P,t!==null&&100<t.shellSuspendCounter)throw Error(M(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Hc(t),t}throw Rr=a,Fe}}function Gr(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Rr=r,Fe):r}}var Rr=null;function Wc(){if(Rr===null)throw Error(M(459));var t=Rr;return Rr=null,t}function Hc(t){if(t===Fe||t===qo)throw Error(M(483))}var ze=null,Yi=0;function En(t){var a=Yi;return Yi+=1,ze===null&&(ze=[]),kh(ze,t,a)}function fi(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Nn(t,a){throw a.$$typeof===b4?Error(M(525)):(t=Object.prototype.toString.call(a),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function xh(t){function a(g,u){if(t){var f=g.deletions;f===null?(g.deletions=[u],g.flags|=16):f.push(u)}}function r(g,u){if(!t)return null;for(;u!==null;)a(g,u),u=u.sibling;return null}function e(g){for(var u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function i(g,u){return g=Qa(g,u),g.index=0,g.sibling=null,g}function n(g,u,f){return g.index=f,t?(f=g.alternate,f!==null?(f=f.index,f<u?(g.flags|=67108866,u):f):(g.flags|=67108866,u)):(g.flags|=1048576,u)}function o(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function l(g,u,f,L){return u===null||u.tag!==6?(u=R2(f,g.mode,L),u.return=g,u):(u=i(u,f),u.return=g,u)}function c(g,u,f,L){var j=f.type;return j===ke?v(g,u,f.props.children,L,f.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dr&&Gr(j)===u.type)?(u=i(u,f.props),fi(u,f),u.return=g,u):(u=Jn(f.type,f.key,f.props,null,g.mode,L),fi(u,f),u.return=g,u)}function s(g,u,f,L){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=J2(f,g.mode,L),u.return=g,u):(u=i(u,f.children||[]),u.return=g,u)}function v(g,u,f,L,j){return u===null||u.tag!==7?(u=Qr(f,g.mode,L,j),u.return=g,u):(u=i(u,f),u.return=g,u)}function k(g,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=R2(""+u,g.mode,f),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case jn:return f=Jn(u.type,u.key,u.props,null,g.mode,f),fi(f,u),f.return=g,f;case Mi:return u=J2(u,g.mode,f),u.return=g,u;case dr:return u=Gr(u),k(g,u,f)}if(mi(u)||gi(u))return u=Qr(u,g.mode,f,null),u.return=g,u;if(typeof u.then=="function")return k(g,En(u),f);if(u.$$typeof===Ga)return k(g,Tn(g,u),f);Nn(g,u)}return null}function p(g,u,f,L){var j=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return j!==null?null:l(g,u,""+f,L);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case jn:return f.key===j?c(g,u,f,L):null;case Mi:return f.key===j?s(g,u,f,L):null;case dr:return f=Gr(f),p(g,u,f,L)}if(mi(f)||gi(f))return j!==null?null:v(g,u,f,L,null);if(typeof f.then=="function")return p(g,u,En(f),L);if(f.$$typeof===Ga)return p(g,u,Tn(g,f),L);Nn(g,f)}return null}function x(g,u,f,L,j){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return g=g.get(f)||null,l(u,g,""+L,j);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case jn:return g=g.get(L.key===null?f:L.key)||null,c(u,g,L,j);case Mi:return g=g.get(L.key===null?f:L.key)||null,s(u,g,L,j);case dr:return L=Gr(L),x(g,u,f,L,j)}if(mi(L)||gi(L))return g=g.get(f)||null,v(u,g,L,j,null);if(typeof L.then=="function")return x(g,u,f,En(L),j);if(L.$$typeof===Ga)return x(g,u,f,Tn(u,L),j);Nn(u,L)}return null}function y(g,u,f,L){for(var j=null,z=null,C=u,S=u=0,W=null;C!==null&&S<f.length;S++){C.index>S?(W=C,C=null):W=C.sibling;var D=p(g,C,f[S],L);if(D===null){C===null&&(C=W);break}t&&C&&D.alternate===null&&a(g,C),u=n(D,u,S),z===null?j=D:z.sibling=D,z=D,C=W}if(S===f.length)return r(g,C),q&&Za(g,S),j;if(C===null){for(;S<f.length;S++)C=k(g,f[S],L),C!==null&&(u=n(C,u,S),z===null?j=C:z.sibling=C,z=C);return q&&Za(g,S),j}for(C=e(C);S<f.length;S++)W=x(C,g,S,f[S],L),W!==null&&(t&&W.alternate!==null&&C.delete(W.key===null?S:W.key),u=n(W,u,S),z===null?j=W:z.sibling=W,z=W);return t&&C.forEach(function(Tt){return a(g,Tt)}),q&&Za(g,S),j}function w(g,u,f,L){if(f==null)throw Error(M(151));for(var j=null,z=null,C=u,S=u=0,W=null,D=f.next();C!==null&&!D.done;S++,D=f.next()){C.index>S?(W=C,C=null):W=C.sibling;var Tt=p(g,C,D.value,L);if(Tt===null){C===null&&(C=W);break}t&&C&&Tt.alternate===null&&a(g,C),u=n(Tt,u,S),z===null?j=Tt:z.sibling=Tt,z=Tt,C=W}if(D.done)return r(g,C),q&&Za(g,S),j;if(C===null){for(;!D.done;S++,D=f.next())D=k(g,D.value,L),D!==null&&(u=n(D,u,S),z===null?j=D:z.sibling=D,z=D);return q&&Za(g,S),j}for(C=e(C);!D.done;S++,D=f.next())D=x(C,g,S,D.value,L),D!==null&&(t&&D.alternate!==null&&C.delete(D.key===null?S:D.key),u=n(D,u,S),z===null?j=D:z.sibling=D,z=D);return t&&C.forEach(function(_r){return a(g,_r)}),q&&Za(g,S),j}function N(g,u,f,L){if(typeof f=="object"&&f!==null&&f.type===ke&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case jn:t:{for(var j=f.key;u!==null;){if(u.key===j){if(j=f.type,j===ke){if(u.tag===7){r(g,u.sibling),L=i(u,f.props.children),L.return=g,g=L;break t}}else if(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===dr&&Gr(j)===u.type){r(g,u.sibling),L=i(u,f.props),fi(L,f),L.return=g,g=L;break t}r(g,u);break}else a(g,u);u=u.sibling}f.type===ke?(L=Qr(f.props.children,g.mode,L,f.key),L.return=g,g=L):(L=Jn(f.type,f.key,f.props,null,g.mode,L),fi(L,f),L.return=g,g=L)}return o(g);case Mi:t:{for(j=f.key;u!==null;){if(u.key===j)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){r(g,u.sibling),L=i(u,f.children||[]),L.return=g,g=L;break t}else{r(g,u);break}else a(g,u);u=u.sibling}L=J2(f,g.mode,L),L.return=g,g=L}return o(g);case dr:return f=Gr(f),N(g,u,f,L)}if(mi(f))return y(g,u,f,L);if(gi(f)){if(j=gi(f),typeof j!="function")throw Error(M(150));return f=j.call(f),w(g,u,f,L)}if(typeof f.then=="function")return N(g,u,En(f),L);if(f.$$typeof===Ga)return N(g,u,Tn(g,f),L);Nn(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(r(g,u.sibling),L=i(u,f),L.return=g,g=L):(r(g,u),L=R2(f,g.mode,L),L.return=g,g=L),o(g)):r(g,u)}return function(g,u,f,L){try{Yi=0;var j=N(g,u,f,L);return ze=null,j}catch(C){if(C===Fe||C===qo)throw C;var z=Ft(29,C,null,g.mode);return z.lanes=L,z.return=g,z}}}var Ir=xh(!0),Lh=xh(!1),cr=!1;function A1(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dl(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function mr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function yr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(X&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=go(t),hh(t,null,r),a}return Zo(t,e,a,r),go(t)}function Hi(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,N0(t,r)}}function $2(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var Ol=!1;function Si(){if(Ol){var t=Ve;if(t!==null)throw t}}function Ai(t,a,r,e){Ol=!1;var i=t.updateQueue;cr=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,s=c.next;c.next=null,o===null?n=s:o.next=s,o=c;var v=t.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==o&&(l===null?v.firstBaseUpdate=s:l.next=s,v.lastBaseUpdate=c))}if(n!==null){var k=i.baseState;o=0,v=s=c=null,l=n;do{var p=l.lane&-536870913,x=p!==l.lane;if(x?(Z&p)===p:(e&p)===p){p!==0&&p===Oe&&(Ol=!0),v!==null&&(v=v.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var y=t,w=l;p=a;var N=r;switch(w.tag){case 1:if(y=w.payload,typeof y=="function"){k=y.call(N,k,p);break t}k=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(N,k,p):y,p==null)break t;k=it({},k,p);break t;case 2:cr=!0}}p=l.callback,p!==null&&(t.flags|=64,x&&(t.flags|=8192),x=i.callbacks,x===null?i.callbacks=[p]:x.push(p))}else x={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(s=v=x,c=k):v=v.next=x,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;x=l,l=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);v===null&&(c=k),i.baseState=c,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n===null&&(i.shared.lanes=0),Ar|=o,t.lanes=o,t.memoizedState=k}}function Mh(t,a){if(typeof t!="function")throw Error(M(191,t));t.call(a)}function mh(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Mh(r[t],a)}var Ue=Sa(null),ko=Sa(0);function Sc(t,a){t=Pa,tt(ko,t),tt(Ue,a),Pa=t|a.baseLanes}function Ul(){tt(ko,Pa),tt(Ue,Ue.current)}function V1(){Pa=ko.current,mt(Ue),mt(ko)}var ea=Sa(null),pa=null;function ur(t){var a=t.alternate;tt(ut,ut.current&1),tt(ea,t),pa===null&&(a===null||Ue.current!==null||a.memoizedState!==null)&&(pa=t)}function Zl(t){tt(ut,ut.current),tt(ea,t),pa===null&&(pa=t)}function yh(t){t.tag===22?(tt(ut,ut.current),tt(ea,t),pa===null&&(pa=t)):sr(t)}function sr(){tt(ut,ut.current),tt(ea,ea.current)}function Jt(t){mt(ea),pa===t&&(pa=null),mt(ut)}var ut=Sa(0);function xo(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||o1(r)||l1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Fa=0,E=null,$=null,gt=null,Lo=!1,_e=!1,Pr=!1,Mo=0,Xi=0,Te=null,Zp=0;function lt(){throw Error(M(321))}function z1(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!ra(t[r],a[r]))return!1;return!0}function _1(t,a,r,e,i,n){return Fa=n,E=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,V.H=t===null||t.memoizedState===null?Ph:X1,Pr=!1,n=r(e,i),Pr=!1,_e&&(n=Ch(a,r,e,i)),wh(t),n}function wh(t){V.H=Qi;var a=$!==null&&$.next!==null;if(Fa=0,gt=$=E=null,Lo=!1,Xi=0,Te=null,a)throw Error(M(300));t===null||vt||(t=t.dependencies,t!==null&&fo(t)&&(vt=!0))}function Ch(t,a,r,e){E=t;var i=0;do{if(_e&&(Te=null),Xi=0,_e=!1,25<=i)throw Error(M(301));if(i+=1,gt=$=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}V.H=tu,n=a(r,e)}while(_e);return n}function qp(){var t=V.H,a=t.useState()[0];return a=typeof a.then=="function"?on(a):a,t=t.useState()[0],($!==null?$.memoizedState:null)!==t&&(E.flags|=1024),a}function T1(){var t=Mo!==0;return Mo=0,t}function E1(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function N1(t){if(Lo){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Lo=!1}Fa=0,gt=$=E=null,_e=!1,Xi=Mo=0,Te=null}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?E.memoizedState=gt=t:gt=gt.next=t,gt}function st(){if($===null){var t=E.alternate;t=t!==null?t.memoizedState:null}else t=$.next;var a=gt===null?E.memoizedState:gt.next;if(a!==null)gt=a,$=t;else{if(t===null)throw E.alternate===null?Error(M(467)):Error(M(310));$=t,t={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},gt===null?E.memoizedState=gt=t:gt=gt.next=t}return gt}function Go(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function on(t){var a=Xi;return Xi+=1,Te===null&&(Te=[]),t=kh(Te,t,a),a=E,(gt===null?a.memoizedState:gt.next)===null&&(a=a.alternate,V.H=a===null||a.memoizedState===null?Ph:X1),t}function Yo(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return on(t);if(t.$$typeof===Ga)return bt(t)}throw Error(M(438,String(t)))}function D1(t){var a=null,r=E.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=E.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=Go(),E.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=j4;return a.index++,r}function $a(t,a){return typeof a=="function"?a(t):a}function $n(t){var a=st();return O1(a,$,t)}function O1(t,a,r){var e=t.queue;if(e===null)throw Error(M(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var l=o=null,c=null,s=a,v=!1;do{var k=s.lane&-536870913;if(k!==s.lane?(Z&k)===k:(Fa&k)===k){var p=s.revertLane;if(p===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),k===Oe&&(v=!0);else if((Fa&p)===p){s=s.next,p===Oe&&(v=!0);continue}else k={lane:0,revertLane:s.revertLane,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},c===null?(l=c=k,o=n):c=c.next=k,E.lanes|=p,Ar|=p;k=s.action,Pr&&r(n,k),n=s.hasEagerState?s.eagerState:r(n,k)}else p={lane:k,revertLane:s.revertLane,gesture:s.gesture,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},c===null?(l=c=p,o=n):c=c.next=p,E.lanes|=k,Ar|=k;s=s.next}while(s!==null&&s!==a);if(c===null?o=n:c.next=l,!ra(n,t.memoizedState)&&(vt=!0,v&&(r=Ve,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=c,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function I2(t){var a=st(),r=a.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);ra(n,a.memoizedState)||(vt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function Bh(t,a,r){var e=E,i=st(),n=q;if(n){if(r===void 0)throw Error(M(407));r=r()}else r=a();var o=!ra(($||i).memoizedState,r);if(o&&(i.memoizedState=r,vt=!0),i=i.queue,U1(Wh.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||gt!==null&&gt.memoizedState.tag&1){if(e.flags|=2048,Ze(9,{destroy:void 0},jh.bind(null,e,i,r,a),null),P===null)throw Error(M(349));n||(Fa&127)!==0||bh(e,a,r)}return r}function bh(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=E.updateQueue,a===null?(a=Go(),E.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function jh(t,a,r,e){a.value=r,a.getSnapshot=e,Hh(a)&&Sh(t)}function Wh(t,a,r){return r(function(){Hh(a)&&Sh(t)})}function Hh(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!ra(t,r)}catch{return!0}}function Sh(t){var a=ie(t,2);a!==null&&Zt(a,t,2)}function ql(t){var a=_t();if(typeof t=="function"){var r=t;if(t=r(),Pr){pr(!0);try{r()}finally{pr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:t},a}function Ah(t,a,r,e){return t.baseState=r,O1(t,$,typeof e=="function"?e:$a)}function Gp(t,a,r,e,i){if(Qo(t))throw Error(M(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};V.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,Vh(a,n)):(n.next=r.next,a.pending=r.next=n)}}function Vh(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=V.T,o={};V.T=o;try{var l=r(i,e),c=V.S;c!==null&&c(o,l),Ac(t,a,l)}catch(s){Gl(t,a,s)}finally{n!==null&&o.types!==null&&(n.types=o.types),V.T=n}}else try{n=r(i,e),Ac(t,a,n)}catch(s){Gl(t,a,s)}}function Ac(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){Vc(t,a,e)},function(e){return Gl(t,a,e)}):Vc(t,a,r)}function Vc(t,a,r){a.status="fulfilled",a.value=r,zh(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,Vh(t,r)))}function Gl(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,zh(a),a=a.next;while(a!==e)}t.action=null}function zh(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function _h(t,a){return a}function zc(t,a){if(q){var r=P.formState;if(r!==null){t:{var e=E;if(q){if(et){a:{for(var i=et,n=ga;i.nodeType!==8;){if(!n){i=null;break a}if(i=fa(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){et=fa(i.nextSibling),e=i.data==="F!";break t}}Hr(e)}e=!1}e&&(a=r[0])}}return r=_t(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_h,lastRenderedState:a},r.queue=e,r=Fh.bind(null,E,e),e.dispatch=r,e=ql(!1),n=Y1.bind(null,E,!1,e.queue),e=_t(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=Gp.bind(null,E,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function _c(t){var a=st();return Th(a,$,t)}function Th(t,a,r){if(a=O1(t,a,_h)[0],t=$n($a)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=on(a)}catch(o){throw o===Fe?qo:o}else e=a;a=st();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(E.flags|=2048,Ze(9,{destroy:void 0},Yp.bind(null,i,r),null)),[e,n,t]}function Yp(t,a){t.action=a}function Tc(t){var a=st(),r=$;if(r!==null)return Th(a,r,t);st(),a=a.memoizedState,r=st();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function Ze(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=E.updateQueue,a===null&&(a=Go(),E.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function Eh(){return st().memoizedState}function In(t,a,r,e){var i=_t();E.flags|=t,i.memoizedState=Ze(1|a,{destroy:void 0},r,e===void 0?null:e)}function Xo(t,a,r,e){var i=st();e=e===void 0?null:e;var n=i.memoizedState.inst;$!==null&&e!==null&&z1(e,$.memoizedState.deps)?i.memoizedState=Ze(a,n,r,e):(E.flags|=t,i.memoizedState=Ze(1|a,n,r,e))}function Ec(t,a){In(8390656,8,t,a)}function U1(t,a){Xo(2048,8,t,a)}function Xp(t){E.flags|=4;var a=E.updateQueue;if(a===null)a=Go(),E.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function Nh(t){var a=st().memoizedState;return Xp({ref:a,nextImpl:t}),function(){if((X&2)!==0)throw Error(M(440));return a.impl.apply(void 0,arguments)}}function Dh(t,a){return Xo(4,2,t,a)}function Oh(t,a){return Xo(4,4,t,a)}function Uh(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Zh(t,a,r){r=r!=null?r.concat([t]):null,Xo(4,4,Uh.bind(null,a,t),r)}function Z1(){}function qh(t,a){var r=st();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&z1(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function Gh(t,a){var r=st();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&z1(a,e[1]))return e[0];if(e=t(),Pr){pr(!0);try{t()}finally{pr(!1)}}return r.memoizedState=[e,a],e}function q1(t,a,r){return r===void 0||(Fa&1073741824)!==0&&(Z&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=Au(),E.lanes|=t,Ar|=t,r)}function Yh(t,a,r,e){return ra(r,a)?r:Ue.current!==null?(t=q1(t,r,e),ra(t,a)||(vt=!0),t):(Fa&42)===0||(Fa&1073741824)!==0&&(Z&261930)===0?(vt=!0,t.memoizedState=r):(t=Au(),E.lanes|=t,Ar|=t,a)}function Xh(t,a,r,e,i){var n=Q.p;Q.p=n!==0&&8>n?n:8;var o=V.T,l={};V.T=l,Y1(t,!1,a,r);try{var c=i(),s=V.S;if(s!==null&&s(l,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=Up(c,e);Vi(t,a,v,aa(t))}else Vi(t,a,e,aa(t))}catch(k){Vi(t,a,{then:function(){},status:"rejected",reason:k},aa())}finally{Q.p=n,o!==null&&l.types!==null&&(o.types=l.types),V.T=o}}function Qp(){}function Yl(t,a,r,e){if(t.tag!==5)throw Error(M(476));var i=Qh(t).queue;Xh(t,i,a,Xr,r===null?Qp:function(){return Kh(t),r(e)})}function Qh(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Xr,baseState:Xr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:Xr},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Kh(t){var a=Qh(t);a.next===null&&(a=t.alternate.memoizedState),Vi(t,a.next.queue,{},aa())}function G1(){return bt(Ji)}function Rh(){return st().memoizedState}function Jh(){return st().memoizedState}function Kp(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=aa();t=mr(r);var e=yr(a,t,r);e!==null&&(Zt(e,a,r),Hi(e,a,r)),a={cache:W1()},t.payload=a;return}a=a.return}}function Rp(t,a,r){var e=aa();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Qo(t)?$h(a,r):(r=C1(t,a,r,e),r!==null&&(Zt(r,t,e),Ih(r,a,e)))}function Fh(t,a,r){var e=aa();Vi(t,a,r,e)}function Vi(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Qo(t))$h(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,l=n(o,r);if(i.hasEagerState=!0,i.eagerState=l,ra(l,o))return Zo(t,a,i,0),P===null&&Uo(),!1}catch{}if(r=C1(t,a,i,e),r!==null)return Zt(r,t,e),Ih(r,a,e),!0}return!1}function Y1(t,a,r,e){if(e={lane:2,revertLane:P1(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Qo(t)){if(a)throw Error(M(479))}else a=C1(t,r,e,2),a!==null&&Zt(a,t,2)}function Qo(t){var a=t.alternate;return t===E||a!==null&&a===E}function $h(t,a){_e=Lo=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function Ih(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,N0(t,r)}}var Qi={readContext:bt,use:Yo,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt};Qi.useEffectEvent=lt;var Ph={readContext:bt,use:Yo,useCallback:function(t,a){return _t().memoizedState=[t,a===void 0?null:a],t},useContext:bt,useEffect:Ec,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,In(4194308,4,Uh.bind(null,a,t),r)},useLayoutEffect:function(t,a){return In(4194308,4,t,a)},useInsertionEffect:function(t,a){In(4,2,t,a)},useMemo:function(t,a){var r=_t();a=a===void 0?null:a;var e=t();if(Pr){pr(!0);try{t()}finally{pr(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=_t();if(r!==void 0){var i=r(a);if(Pr){pr(!0);try{r(a)}finally{pr(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=Rp.bind(null,E,t),[e.memoizedState,t]},useRef:function(t){var a=_t();return t={current:t},a.memoizedState=t},useState:function(t){t=ql(t);var a=t.queue,r=Fh.bind(null,E,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:Z1,useDeferredValue:function(t,a){var r=_t();return q1(r,t,a)},useTransition:function(){var t=ql(!1);return t=Xh.bind(null,E,t.queue,!0,!1),_t().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=E,i=_t();if(q){if(r===void 0)throw Error(M(407));r=r()}else{if(r=a(),P===null)throw Error(M(349));(Z&127)!==0||bh(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,Ec(Wh.bind(null,e,n,t),[t]),e.flags|=2048,Ze(9,{destroy:void 0},jh.bind(null,e,n,r,a),null),r},useId:function(){var t=_t(),a=P.identifierPrefix;if(q){var r=ja,e=ba;r=(e&~(1<<32-ta(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=Mo++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=Zp++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:G1,useFormState:zc,useActionState:zc,useOptimistic:function(t){var a=_t();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Y1.bind(null,E,!0,r),r.dispatch=a,[t,a]},useMemoCache:D1,useCacheRefresh:function(){return _t().memoizedState=Kp.bind(null,E)},useEffectEvent:function(t){var a=_t(),r={impl:t};return a.memoizedState=r,function(){if((X&2)!==0)throw Error(M(440));return r.impl.apply(void 0,arguments)}}},X1={readContext:bt,use:Yo,useCallback:qh,useContext:bt,useEffect:U1,useImperativeHandle:Zh,useInsertionEffect:Dh,useLayoutEffect:Oh,useMemo:Gh,useReducer:$n,useRef:Eh,useState:function(){return $n($a)},useDebugValue:Z1,useDeferredValue:function(t,a){var r=st();return Yh(r,$.memoizedState,t,a)},useTransition:function(){var t=$n($a)[0],a=st().memoizedState;return[typeof t=="boolean"?t:on(t),a]},useSyncExternalStore:Bh,useId:Rh,useHostTransitionStatus:G1,useFormState:_c,useActionState:_c,useOptimistic:function(t,a){var r=st();return Ah(r,$,t,a)},useMemoCache:D1,useCacheRefresh:Jh};X1.useEffectEvent=Nh;var tu={readContext:bt,use:Yo,useCallback:qh,useContext:bt,useEffect:U1,useImperativeHandle:Zh,useInsertionEffect:Dh,useLayoutEffect:Oh,useMemo:Gh,useReducer:I2,useRef:Eh,useState:function(){return I2($a)},useDebugValue:Z1,useDeferredValue:function(t,a){var r=st();return $===null?q1(r,t,a):Yh(r,$.memoizedState,t,a)},useTransition:function(){var t=I2($a)[0],a=st().memoizedState;return[typeof t=="boolean"?t:on(t),a]},useSyncExternalStore:Bh,useId:Rh,useHostTransitionStatus:G1,useFormState:Tc,useActionState:Tc,useOptimistic:function(t,a){var r=st();return $!==null?Ah(r,$,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:D1,useCacheRefresh:Jh};tu.useEffectEvent=Nh;function P2(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:it({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Xl={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=aa(),i=mr(e);i.payload=a,r!=null&&(i.callback=r),a=yr(t,i,e),a!==null&&(Zt(a,t,e),Hi(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=aa(),i=mr(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=yr(t,i,e),a!==null&&(Zt(a,t,e),Hi(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=aa(),e=mr(r);e.tag=2,a!=null&&(e.callback=a),a=yr(t,e,r),a!==null&&(Zt(a,t,r),Hi(a,t,r))}};function Nc(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!Zi(r,e)||!Zi(i,n):!0}function Dc(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&Xl.enqueueReplaceState(a,a.state,null)}function te(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=it({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function au(t){so(t)}function ru(t){console.error(t)}function eu(t){so(t)}function mo(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function Oc(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Ql(t,a,r){return r=mr(r),r.tag=3,r.payload={element:null},r.callback=function(){mo(t,a)},r}function iu(t){return t=mr(t),t.tag=3,t}function nu(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){Oc(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Oc(a,r,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})})}function Jp(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&Je(a,r,i,!0),r=ea.current,r!==null){switch(r.tag){case 31:case 13:return pa===null?bo():r.alternate===null&&dt===0&&(dt=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===vo?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),hl(t,e,i)),!1;case 22:return r.flags|=65536,e===vo?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),hl(t,e,i)),!1}throw Error(M(435,r.tag))}return hl(t,e,i),bo(),!1}if(q)return a=ea.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==zl&&(t=Error(M(422),{cause:e}),Gi(sa(t,r)))):(e!==zl&&(a=Error(M(423),{cause:e}),Gi(sa(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=sa(e,r),i=Ql(t.stateNode,e,i),$2(t,i),dt!==4&&(dt=2)),!1;var n=Error(M(520),{cause:e});if(n=sa(n,r),Ti===null?Ti=[n]:Ti.push(n),dt!==4&&(dt=2),a===null)return!0;e=sa(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=Ql(r.stateNode,e,t),$2(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(wr===null||!wr.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=iu(i),nu(i,t,r,e),$2(r,i),!1}r=r.return}while(r!==null);return!1}var Q1=Error(M(461)),vt=!1;function wt(t,a,r,e){a.child=t===null?Lh(a,null,r,e):Ir(a,t.child,r,e)}function Uc(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var l in e)l!=="ref"&&(o[l]=e[l])}else o=e;return $r(a),e=_1(t,a,r,o,n,i),l=T1(),t!==null&&!vt?(E1(t,a,i),Ia(t,a,i)):(q&&l&&b1(a),a.flags|=1,wt(t,a,e,i),a.child)}function Zc(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!B1(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,ou(t,a,n,e,i)):(t=Jn(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!K1(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:Zi,r(o,e)&&t.ref===a.ref)return Ia(t,a,i)}return a.flags|=1,t=Qa(n,e),t.ref=a.ref,t.return=a,a.child=t}function ou(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(Zi(n,e)&&t.ref===a.ref)if(vt=!1,a.pendingProps=e=n,K1(t,i))(t.flags&131072)!==0&&(vt=!0);else return a.lanes=t.lanes,Ia(t,a,i)}return Kl(t,a,r,e,i)}function lu(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return qc(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fn(a,n!==null?n.cachePool:null),n!==null?Sc(a,n):Ul(),yh(a);else return e=a.lanes=536870912,qc(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(Fn(a,n.cachePool),Sc(a,n),sr(a),a.memoizedState=null):(t!==null&&Fn(a,null),Ul(),sr(a));return wt(t,a,i,r),a.child}function wi(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function qc(t,a,r,e,i){var n=H1();return n=n===null?null:{parent:ft._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&Fn(a,null),Ul(),yh(a),t!==null&&Je(t,a,e,!0),a.childLanes=i,null}function Pn(t,a){return a=yo({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function Gc(t,a,r){return Ir(a,t.child,null,r),t=Pn(a,a.pendingProps),t.flags|=2,Jt(a),a.memoizedState=null,t}function Fp(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(q){if(e.mode==="hidden")return t=Pn(a,e),a.lanes=536870912,wi(null,t);if(Zl(a),(t=et)?(t=Pu(t,ga),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Wr!==null?{id:ba,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},r=sh(t),r.return=a,a.child=r,Bt=a,et=null)):t=null,t===null)throw Hr(a);return a.lanes=536870912,null}return Pn(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(Zl(a),i)if(a.flags&256)a.flags&=-257,a=Gc(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(M(558));else if(vt||Je(t,a,r,!1),i=(r&t.childLanes)!==0,vt||i){if(e=P,e!==null&&(o=D0(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,ie(t,o),Zt(e,t,o),Q1;bo(),a=Gc(t,a,r)}else t=n.treeContext,et=fa(o.nextSibling),Bt=a,q=!0,Mr=null,ga=!1,t!==null&&ph(a,t),a=Pn(a,e),a.flags|=4096;return a}return t=Qa(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function to(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(M(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function Kl(t,a,r,e,i){return $r(a),r=_1(t,a,r,e,void 0,i),e=T1(),t!==null&&!vt?(E1(t,a,i),Ia(t,a,i)):(q&&e&&b1(a),a.flags|=1,wt(t,a,r,i),a.child)}function Yc(t,a,r,e,i,n){return $r(a),a.updateQueue=null,r=Ch(a,e,r,i),wh(t),e=T1(),t!==null&&!vt?(E1(t,a,n),Ia(t,a,n)):(q&&e&&b1(a),a.flags|=1,wt(t,a,r,n),a.child)}function Xc(t,a,r,e,i){if($r(a),a.stateNode===null){var n=Be,o=r.contextType;typeof o=="object"&&o!==null&&(n=bt(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Xl,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},A1(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?bt(o):Be,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(P2(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&Xl.enqueueReplaceState(n,n.state,null),Ai(a,e,n,i),Si(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var l=a.memoizedProps,c=te(r,l);n.props=c;var s=n.context,v=r.contextType;o=Be,typeof v=="object"&&v!==null&&(o=bt(v));var k=r.getDerivedStateFromProps;v=typeof k=="function"||typeof n.getSnapshotBeforeUpdate=="function",l=a.pendingProps!==l,v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(l||s!==o)&&Dc(a,n,e,o),cr=!1;var p=a.memoizedState;n.state=p,Ai(a,e,n,i),Si(),s=a.memoizedState,l||p!==s||cr?(typeof k=="function"&&(P2(a,r,k,e),s=a.memoizedState),(c=cr||Nc(a,r,c,e,p,s,o))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=s),n.props=e,n.state=s,n.context=o,e=c):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,Dl(t,a),o=a.memoizedProps,v=te(r,o),n.props=v,k=a.pendingProps,p=n.context,s=r.contextType,c=Be,typeof s=="object"&&s!==null&&(c=bt(s)),l=r.getDerivedStateFromProps,(s=typeof l=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==k||p!==c)&&Dc(a,n,e,c),cr=!1,p=a.memoizedState,n.state=p,Ai(a,e,n,i),Si();var x=a.memoizedState;o!==k||p!==x||cr||t!==null&&t.dependencies!==null&&fo(t.dependencies)?(typeof l=="function"&&(P2(a,r,l,e),x=a.memoizedState),(v=cr||Nc(a,r,v,e,p,x,c)||t!==null&&t.dependencies!==null&&fo(t.dependencies))?(s||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,x,c),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,x,c)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=x),n.props=e,n.state=x,n.context=c,e=v):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,to(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=Ir(a,t.child,null,i),a.child=Ir(a,null,r,i)):wt(t,a,r,i),a.memoizedState=n.state,t=a.child):t=Ia(t,a,i),t}function Qc(t,a,r,e){return Fr(),a.flags|=256,wt(t,a,r,e),a.child}var tl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function al(t){return{baseLanes:t,cachePool:vh()}}function rl(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=$t),t}function du(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(ut.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(q){if(i?ur(a):sr(a),(t=et)?(t=Pu(t,ga),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Wr!==null?{id:ba,overflow:ja}:null,retryLane:536870912,hydrationErrors:null},r=sh(t),r.return=a,a.child=r,Bt=a,et=null)):t=null,t===null)throw Hr(a);return l1(t)?a.lanes=32:a.lanes=536870912,null}var l=e.children;return e=e.fallback,i?(sr(a),i=a.mode,l=yo({mode:"hidden",children:l},i),e=Qr(e,i,r,null),l.return=a,e.return=a,l.sibling=e,a.child=l,e=a.child,e.memoizedState=al(r),e.childLanes=rl(t,o,r),a.memoizedState=tl,wi(null,e)):(ur(a),Rl(a,l))}var c=t.memoizedState;if(c!==null&&(l=c.dehydrated,l!==null)){if(n)a.flags&256?(ur(a),a.flags&=-257,a=el(t,a,r)):a.memoizedState!==null?(sr(a),a.child=t.child,a.flags|=128,a=null):(sr(a),l=e.fallback,i=a.mode,e=yo({mode:"visible",children:e.children},i),l=Qr(l,i,r,null),l.flags|=2,e.return=a,l.return=a,e.sibling=l,a.child=e,Ir(a,t.child,null,r),e=a.child,e.memoizedState=al(r),e.childLanes=rl(t,o,r),a.memoizedState=tl,a=wi(null,e));else if(ur(a),l1(l)){if(o=l.nextSibling&&l.nextSibling.dataset,o)var s=o.dgst;o=s,e=Error(M(419)),e.stack="",e.digest=o,Gi({value:e,source:null,stack:null}),a=el(t,a,r)}else if(vt||Je(t,a,r,!1),o=(r&t.childLanes)!==0,vt||o){if(o=P,o!==null&&(e=D0(o,r),e!==0&&e!==c.retryLane))throw c.retryLane=e,ie(t,e),Zt(o,t,e),Q1;o1(l)||bo(),a=el(t,a,r)}else o1(l)?(a.flags|=192,a.child=t.child,a=null):(t=c.treeContext,et=fa(l.nextSibling),Bt=a,q=!0,Mr=null,ga=!1,t!==null&&ph(a,t),a=Rl(a,e.children),a.flags|=4096);return a}return i?(sr(a),l=e.fallback,i=a.mode,c=t.child,s=c.sibling,e=Qa(c,{mode:"hidden",children:e.children}),e.subtreeFlags=c.subtreeFlags&65011712,s!==null?l=Qa(s,l):(l=Qr(l,i,r,null),l.flags|=2),l.return=a,e.return=a,e.sibling=l,a.child=e,wi(null,e),e=a.child,l=t.child.memoizedState,l===null?l=al(r):(i=l.cachePool,i!==null?(c=ft._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=vh(),l={baseLanes:l.baseLanes|r,cachePool:i}),e.memoizedState=l,e.childLanes=rl(t,o,r),a.memoizedState=tl,wi(t.child,e)):(ur(a),r=t.child,t=r.sibling,r=Qa(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function Rl(t,a){return a=yo({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function yo(t,a){return t=Ft(22,t,null,a),t.lanes=0,t}function el(t,a,r){return Ir(a,t.child,null,r),t=Rl(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Kc(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),Tl(t.return,a,r)}function il(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function cu(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=ut.current,l=(o&2)!==0;if(l?(o=o&1|2,a.flags|=128):o&=1,tt(ut,o),wt(t,a,e,r),e=q?qi:0,!l&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kc(t,r,a);else if(t.tag===19)Kc(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&xo(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),il(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&xo(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}il(a,!0,r,null,n,e);break;case"together":il(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function Ia(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Ar|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(Je(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(M(153));if(a.child!==null){for(t=a.child,r=Qa(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=Qa(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function K1(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&fo(t)))}function $p(t,a,r){switch(a.tag){case 3:lo(a,a.stateNode.containerInfo),hr(a,ft,t.memoizedState.cache),Fr();break;case 27:case 5:yl(a);break;case 4:lo(a,a.stateNode.containerInfo);break;case 10:hr(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Zl(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(ur(a),a.flags|=128,null):(r&a.child.childLanes)!==0?du(t,a,r):(ur(a),t=Ia(t,a,r),t!==null?t.sibling:null);ur(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||(Je(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return cu(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),tt(ut,ut.current),e)break;return null;case 22:return a.lanes=0,lu(t,a,r,a.pendingProps);case 24:hr(a,ft,t.memoizedState.cache)}return Ia(t,a,r)}function hu(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)vt=!0;else{if(!K1(t,r)&&(a.flags&128)===0)return vt=!1,$p(t,a,r);vt=(t.flags&131072)!==0}else vt=!1,q&&(a.flags&1048576)!==0&&gh(a,qi,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=Gr(a.elementType),a.type=t,typeof t=="function")B1(t)?(e=te(t,e),a.tag=1,a=Xc(null,a,t,e,r)):(a.tag=0,a=Kl(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===u1){a.tag=11,a=Uc(null,a,t,e,r);break t}else if(i===s1){a.tag=14,a=Zc(null,a,t,e,r);break t}}throw a=Ml(t)||t,Error(M(306,a,""))}}return a;case 0:return Kl(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=te(e,a.pendingProps),Xc(t,a,e,i,r);case 3:t:{if(lo(a,a.stateNode.containerInfo),t===null)throw Error(M(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,Dl(t,a),Ai(a,e,null,r);var o=a.memoizedState;if(e=o.cache,hr(a,ft,e),e!==n.cache&&El(a,[ft],r,!0),Si(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=Qc(t,a,e,r);break t}else if(e!==i){i=sa(Error(M(424)),a),Gi(i),a=Qc(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,et=fa(t.firstChild),Bt=a,q=!0,Mr=null,ga=!0,r=Lh(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Fr(),e===i){a=Ia(t,a,r);break t}wt(t,a,e,r)}a=a.child}return a;case 26:return to(t,a),t===null?(r=f0(a.type,null,a.pendingProps,null))?a.memoizedState=r:q||(r=a.type,t=a.pendingProps,e=So(Lr.current).createElement(r),e[Ct]=a,e[qt]=t,jt(e,r,t),Mt(e),a.stateNode=e):a.memoizedState=f0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return yl(a),t===null&&q&&(e=a.stateNode=ts(a.type,a.pendingProps,Lr.current),Bt=a,ga=!0,i=et,zr(a.type)?(d1=i,et=fa(e.firstChild)):et=i),wt(t,a,a.pendingProps.children,r),to(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&q&&((i=e=et)&&(e=B5(e,a.type,a.pendingProps,ga),e!==null?(a.stateNode=e,Bt=a,et=fa(e.firstChild),ga=!1,i=!0):i=!1),i||Hr(a)),yl(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,i1(i,n)?e=null:o!==null&&i1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=_1(t,a,qp,null,null,r),Ji._currentValue=i),to(t,a),wt(t,a,e,r),a.child;case 6:return t===null&&q&&((t=r=et)&&(r=b5(r,a.pendingProps,ga),r!==null?(a.stateNode=r,Bt=a,et=null,t=!0):t=!1),t||Hr(a)),null;case 13:return du(t,a,r);case 4:return lo(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=Ir(a,null,e,r):wt(t,a,e,r),a.child;case 11:return Uc(t,a,a.type,a.pendingProps,r);case 7:return wt(t,a,a.pendingProps,r),a.child;case 8:return wt(t,a,a.pendingProps.children,r),a.child;case 12:return wt(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,hr(a,a.type,e.value),wt(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,$r(a),i=bt(i),e=e(i),a.flags|=1,wt(t,a,e,r),a.child;case 14:return Zc(t,a,a.type,a.pendingProps,r);case 15:return ou(t,a,a.type,a.pendingProps,r);case 19:return cu(t,a,r);case 31:return Fp(t,a,r);case 22:return lu(t,a,r,a.pendingProps);case 24:return $r(a),e=bt(ft),t===null?(i=H1(),i===null&&(i=P,n=W1(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},A1(a),hr(a,ft,i)):((t.lanes&r)!==0&&(Dl(t,a),Ai(a,null,null,r),Si()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),hr(a,ft,e)):(e=n.cache,hr(a,ft,e),e!==i.cache&&El(a,[ft],r,!0))),wt(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(M(156,a.tag))}function Na(t){t.flags|=4}function nl(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(_u())t.flags|=8192;else throw Rr=vo,S1}else t.flags&=-16777217}function Rc(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!es(a))if(_u())t.flags|=8192;else throw Rr=vo,S1}function Dn(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?T0():536870912,t.lanes|=a,qe|=a)}function vi(t,a){if(!q)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function rt(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function Ip(t,a,r){var e=a.pendingProps;switch(j1(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(a),null;case 1:return rt(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Ka(ft),Ee(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ge(a)?Na(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,F2())),rt(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(Na(a),n!==null?(rt(a),Rc(a,n)):(rt(a),nl(a,i,null,e,r))):n?n!==t.memoizedState?(Na(a),rt(a),Rc(a,n)):(rt(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&Na(a),rt(a),nl(a,i,t,e,r)),null;case 27:if(co(a),r=Lr.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Na(a);else{if(!e){if(a.stateNode===null)throw Error(M(166));return rt(a),null}t=Ha.current,ge(a)?wc(a,t):(t=ts(i,e,r),a.stateNode=t,Na(a))}return rt(a),null;case 5:if(co(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Na(a);else{if(!e){if(a.stateNode===null)throw Error(M(166));return rt(a),null}if(n=Ha.current,ge(a))wc(a,n);else{var o=So(Lr.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[Ct]=a,n[qt]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(jt(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Na(a)}}return rt(a),nl(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&Na(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(M(166));if(t=Lr.current,ge(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=Bt,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[Ct]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||Fu(t.nodeValue,r)),t||Hr(a,!0)}else t=So(t).createTextNode(e),t[Ct]=a,a.stateNode=t}return rt(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=ge(a),r!==null){if(t===null){if(!e)throw Error(M(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(557));t[Ct]=a}else Fr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),t=!1}else r=F2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?(Jt(a),a):(Jt(a),null);if((a.flags&128)!==0)throw Error(M(558))}return rt(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=ge(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(M(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[Ct]=a}else Fr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),i=!1}else i=F2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(Jt(a),a):(Jt(a),null)}return Jt(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),Dn(a,a.updateQueue),rt(a),null);case 4:return Ee(),t===null&&td(a.stateNode.containerInfo),rt(a),null;case 10:return Ka(a.type),rt(a),null;case 19:if(mt(ut),e=a.memoizedState,e===null)return rt(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)vi(e,!1);else{if(dt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=xo(t),n!==null){for(a.flags|=128,vi(e,!1),t=n.updateQueue,a.updateQueue=t,Dn(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)uh(r,t),r=r.sibling;return tt(ut,ut.current&1|2),q&&Za(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&It()>Co&&(a.flags|=128,i=!0,vi(e,!1),a.lanes=4194304)}else{if(!i)if(t=xo(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,Dn(a,t),vi(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!q)return rt(a),null}else 2*It()-e.renderingStartTime>Co&&r!==536870912&&(a.flags|=128,i=!0,vi(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=It(),t.sibling=null,r=ut.current,tt(ut,i?r&1|2:r&1),q&&Za(a,e.treeForkCount),t):(rt(a),null);case 22:case 23:return Jt(a),V1(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(rt(a),a.subtreeFlags&6&&(a.flags|=8192)):rt(a),r=a.updateQueue,r!==null&&Dn(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&mt(Kr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),Ka(ft),rt(a),null;case 25:return null;case 30:return null}throw Error(M(156,a.tag))}function Pp(t,a){switch(j1(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Ka(ft),Ee(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return co(a),null;case 31:if(a.memoizedState!==null){if(Jt(a),a.alternate===null)throw Error(M(340));Fr()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(Jt(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(M(340));Fr()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return mt(ut),null;case 4:return Ee(),null;case 10:return Ka(a.type),null;case 22:case 23:return Jt(a),V1(),t!==null&&mt(Kr),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Ka(ft),null;case 25:return null;default:return null}}function uu(t,a){switch(j1(a),a.tag){case 3:Ka(ft),Ee();break;case 26:case 27:case 5:co(a);break;case 4:Ee();break;case 31:a.memoizedState!==null&&Jt(a);break;case 13:Jt(a);break;case 19:mt(ut);break;case 10:Ka(a.type);break;case 22:case 23:Jt(a),V1(),t!==null&&mt(Kr);break;case 24:Ka(ft)}}function ln(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(l){R(a,a.return,l)}}function Sr(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,l=o.destroy;if(l!==void 0){o.destroy=void 0,i=a;var c=r,s=l;try{s()}catch(v){R(i,c,v)}}}e=e.next}while(e!==n)}}catch(v){R(a,a.return,v)}}function su(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{mh(a,r)}catch(e){R(t,t.return,e)}}}function gu(t,a,r){r.props=te(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){R(t,a,e)}}function zi(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){R(t,a,i)}}function Wa(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){R(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){R(t,a,i)}else r.current=null}function pu(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){R(t,t.return,i)}}function ol(t,a,r){try{var e=t.stateNode;L5(e,t.type,r,a),e[qt]=a}catch(i){R(t,t.return,i)}}function fu(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&zr(t.type)||t.tag===4}function ll(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||fu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&zr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jl(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Ya));else if(e!==4&&(e===27&&zr(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(Jl(t,a,r),t=t.sibling;t!==null;)Jl(t,a,r),t=t.sibling}function wo(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&zr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(wo(t,a,r),t=t.sibling;t!==null;)wo(t,a,r),t=t.sibling}function vu(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);jt(a,e,r),a[Ct]=t,a[qt]=r}catch(n){R(t,t.return,n)}}var qa=!1,pt=!1,dl=!1,Jc=typeof WeakSet=="function"?WeakSet:Set,Lt=null;function t5(t,a){if(t=t.containerInfo,r1=_o,t=eh(t),y1(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,l=-1,c=-1,s=0,v=0,k=t,p=null;a:for(;;){for(var x;k!==r||i!==0&&k.nodeType!==3||(l=o+i),k!==n||e!==0&&k.nodeType!==3||(c=o+e),k.nodeType===3&&(o+=k.nodeValue.length),(x=k.firstChild)!==null;)p=k,k=x;for(;;){if(k===t)break a;if(p===r&&++s===i&&(l=o),p===n&&++v===e&&(c=o),(x=k.nextSibling)!==null)break;k=p,p=k.parentNode}k=x}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(e1={focusedElem:t,selectionRange:r},_o=!1,Lt=a;Lt!==null;)if(a=Lt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Lt=t;else for(;Lt!==null;){switch(a=Lt,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var y=te(r.type,i);t=e.getSnapshotBeforeUpdate(y,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(w){R(r,r.return,w)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)n1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":n1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(M(163))}if(t=a.sibling,t!==null){t.return=a.return,Lt=t;break}Lt=a.return}}function ku(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:Oa(t,r),e&4&&ln(5,r);break;case 1:if(Oa(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){R(r,r.return,o)}else{var i=te(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){R(r,r.return,o)}}e&64&&su(r),e&512&&zi(r,r.return);break;case 3:if(Oa(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{mh(t,a)}catch(o){R(r,r.return,o)}}break;case 27:a===null&&e&4&&vu(r);case 26:case 5:Oa(t,r),a===null&&e&4&&pu(r),e&512&&zi(r,r.return);break;case 12:Oa(t,r);break;case 31:Oa(t,r),e&4&&Mu(t,r);break;case 13:Oa(t,r),e&4&&mu(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=c5.bind(null,r),j5(t,r))));break;case 22:if(e=r.memoizedState!==null||qa,!e){a=a!==null&&a.memoizedState!==null||pt,i=qa;var n=pt;qa=e,(pt=a)&&!n?Ua(t,r,(r.subtreeFlags&8772)!==0):Oa(t,r),qa=i,pt=n}break;case 30:break;default:Oa(t,r)}}function xu(t){var a=t.alternate;a!==null&&(t.alternate=null,xu(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&v1(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ot=null,Ot=!1;function Da(t,a,r){for(r=r.child;r!==null;)Lu(t,a,r),r=r.sibling}function Lu(t,a,r){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Pi,r)}catch{}switch(r.tag){case 26:pt||Wa(r,a),Da(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:pt||Wa(r,a);var e=ot,i=Ot;zr(r.type)&&(ot=r.stateNode,Ot=!1),Da(t,a,r),Ni(r.stateNode),ot=e,Ot=i;break;case 5:pt||Wa(r,a);case 6:if(e=ot,i=Ot,ot=null,Da(t,a,r),ot=e,Ot=i,ot!==null)if(Ot)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(r.stateNode)}catch(n){R(r,a,n)}else try{ot.removeChild(r.stateNode)}catch(n){R(r,a,n)}break;case 18:ot!==null&&(Ot?(t=ot,h0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Qe(t)):h0(ot,r.stateNode));break;case 4:e=ot,i=Ot,ot=r.stateNode.containerInfo,Ot=!0,Da(t,a,r),ot=e,Ot=i;break;case 0:case 11:case 14:case 15:Sr(2,r,a),pt||Sr(4,r,a),Da(t,a,r);break;case 1:pt||(Wa(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&gu(r,a,e)),Da(t,a,r);break;case 21:Da(t,a,r);break;case 22:pt=(e=pt)||r.memoizedState!==null,Da(t,a,r),pt=e;break;default:Da(t,a,r)}}function Mu(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Qe(t)}catch(r){R(a,a.return,r)}}}function mu(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qe(t)}catch(r){R(a,a.return,r)}}function a5(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new Jc),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new Jc),a;default:throw Error(M(435,t.tag))}}function On(t,a){var r=a5(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=h5.bind(null,t,e);e.then(i,i)}})}function Nt(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(zr(l.type)){ot=l.stateNode,Ot=!1;break t}break;case 5:ot=l.stateNode,Ot=!1;break t;case 3:case 4:ot=l.stateNode.containerInfo,Ot=!0;break t}l=l.return}if(ot===null)throw Error(M(160));Lu(n,o,i),ot=null,Ot=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)yu(a,t),a=a.sibling}var ya=null;function yu(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nt(a,t),Dt(t),e&4&&(Sr(3,t,t.return),ln(3,t),Sr(5,t,t.return));break;case 1:Nt(a,t),Dt(t),e&512&&(pt||r===null||Wa(r,r.return)),e&64&&qa&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=ya;if(Nt(a,t),Dt(t),e&512&&(pt||r===null||Wa(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[rn]||n[Ct]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),jt(n,e,r),n[Ct]=t,Mt(n),e=n;break t;case"link":var o=k0("link","href",i).get(e+(r.href||""));if(o){for(var l=0;l<o.length;l++)if(n=o[l],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(l,1);break a}}n=i.createElement(e),jt(n,e,r),i.head.appendChild(n);break;case"meta":if(o=k0("meta","content",i).get(e+(r.content||""))){for(l=0;l<o.length;l++)if(n=o[l],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(l,1);break a}}n=i.createElement(e),jt(n,e,r),i.head.appendChild(n);break;default:throw Error(M(468,e))}n[Ct]=t,Mt(n),e=n}t.stateNode=e}else x0(i,t.type,t.stateNode);else t.stateNode=v0(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?x0(i,t.type,t.stateNode):v0(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&ol(t,t.memoizedProps,r.memoizedProps)}break;case 27:Nt(a,t),Dt(t),e&512&&(pt||r===null||Wa(r,r.return)),r!==null&&e&4&&ol(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Nt(a,t),Dt(t),e&512&&(pt||r===null||Wa(r,r.return)),t.flags&32){i=t.stateNode;try{De(i,"")}catch(y){R(t,t.return,y)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,ol(t,i,r!==null?r.memoizedProps:i)),e&1024&&(dl=!0);break;case 6:if(Nt(a,t),Dt(t),e&4){if(t.stateNode===null)throw Error(M(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(y){R(t,t.return,y)}}break;case 3:if(eo=null,i=ya,ya=Ao(a.containerInfo),Nt(a,t),ya=i,Dt(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{Qe(a.containerInfo)}catch(y){R(t,t.return,y)}dl&&(dl=!1,wu(t));break;case 4:e=ya,ya=Ao(t.stateNode.containerInfo),Nt(a,t),Dt(t),ya=e;break;case 12:Nt(a,t),Dt(t);break;case 31:Nt(a,t),Dt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,On(t,e)));break;case 13:Nt(a,t),Dt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ko=It()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,On(t,e)));break;case 22:i=t.memoizedState!==null;var c=r!==null&&r.memoizedState!==null,s=qa,v=pt;if(qa=s||i,pt=v||c,Nt(a,t),pt=v,qa=s,Dt(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||c||qa||pt||Yr(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){c=r=a;try{if(n=c.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{l=c.stateNode;var k=c.memoizedProps.style,p=k!=null&&k.hasOwnProperty("display")?k.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){R(c,c.return,y)}}}else if(a.tag===6){if(r===null){c=a;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(y){R(c,c.return,y)}}}else if(a.tag===18){if(r===null){c=a;try{var x=c.stateNode;i?u0(x,!0):u0(c.stateNode,!1)}catch(y){R(c,c.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,On(t,r))));break;case 19:Nt(a,t),Dt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,On(t,e)));break;case 30:break;case 21:break;default:Nt(a,t),Dt(t)}}function Dt(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if(fu(e)){r=e;break}e=e.return}if(r==null)throw Error(M(160));switch(r.tag){case 27:var i=r.stateNode,n=ll(t);wo(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(De(o,""),r.flags&=-33);var l=ll(t);wo(t,l,o);break;case 3:case 4:var c=r.stateNode.containerInfo,s=ll(t);Jl(t,s,c);break;default:throw Error(M(161))}}catch(v){R(t,t.return,v)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function wu(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;wu(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Oa(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)ku(t,a.alternate,a),a=a.sibling}function Yr(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Sr(4,a,a.return),Yr(a);break;case 1:Wa(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&gu(a,a.return,r),Yr(a);break;case 27:Ni(a.stateNode);case 26:case 5:Wa(a,a.return),Yr(a);break;case 22:a.memoizedState===null&&Yr(a);break;case 30:Yr(a);break;default:Yr(a)}t=t.sibling}}function Ua(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:Ua(i,n,r),ln(4,n);break;case 1:if(Ua(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(s){R(e,e.return,s)}if(e=n,i=e.updateQueue,i!==null){var l=e.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Mh(c[i],l)}catch(s){R(e,e.return,s)}}r&&o&64&&su(n),zi(n,n.return);break;case 27:vu(n);case 26:case 5:Ua(i,n,r),r&&e===null&&o&4&&pu(n),zi(n,n.return);break;case 12:Ua(i,n,r);break;case 31:Ua(i,n,r),r&&o&4&&Mu(i,n);break;case 13:Ua(i,n,r),r&&o&4&&mu(i,n);break;case 22:n.memoizedState===null&&Ua(i,n,r),zi(n,n.return);break;case 30:break;default:Ua(i,n,r)}a=a.sibling}}function R1(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&nn(r))}function J1(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&nn(t))}function ma(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Cu(t,a,r,e),a=a.sibling}function Cu(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ma(t,a,r,e),i&2048&&ln(9,a);break;case 1:ma(t,a,r,e);break;case 3:ma(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&nn(t)));break;case 12:if(i&2048){ma(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,l=n.onPostCommit;typeof l=="function"&&l(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){R(a,a.return,c)}}else ma(t,a,r,e);break;case 31:ma(t,a,r,e);break;case 13:ma(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?ma(t,a,r,e):_i(t,a):n._visibility&2?ma(t,a,r,e):(n._visibility|=2,fe(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&R1(o,a);break;case 24:ma(t,a,r,e),i&2048&&J1(a.alternate,a);break;default:ma(t,a,r,e)}}function fe(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,l=r,c=e,s=o.flags;switch(o.tag){case 0:case 11:case 15:fe(n,o,l,c,i),ln(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?fe(n,o,l,c,i):_i(n,o):(v._visibility|=2,fe(n,o,l,c,i)),i&&s&2048&&R1(o.alternate,o);break;case 24:fe(n,o,l,c,i),i&&s&2048&&J1(o.alternate,o);break;default:fe(n,o,l,c,i)}a=a.sibling}}function _i(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:_i(r,e),i&2048&&R1(e.alternate,e);break;case 24:_i(r,e),i&2048&&J1(e.alternate,e);break;default:_i(r,e)}a=a.sibling}}var Ci=8192;function pe(t,a,r){if(t.subtreeFlags&Ci)for(t=t.child;t!==null;)Bu(t,a,r),t=t.sibling}function Bu(t,a,r){switch(t.tag){case 26:pe(t,a,r),t.flags&Ci&&t.memoizedState!==null&&O5(r,ya,t.memoizedState,t.memoizedProps);break;case 5:pe(t,a,r);break;case 3:case 4:var e=ya;ya=Ao(t.stateNode.containerInfo),pe(t,a,r),ya=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Ci,Ci=16777216,pe(t,a,r),Ci=e):pe(t,a,r));break;default:pe(t,a,r)}}function bu(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function ki(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];Lt=e,Wu(e,t)}bu(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ju(t),t=t.sibling}function ju(t){switch(t.tag){case 0:case 11:case 15:ki(t),t.flags&2048&&Sr(9,t,t.return);break;case 3:ki(t);break;case 12:ki(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,ao(t)):ki(t);break;default:ki(t)}}function ao(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];Lt=e,Wu(e,t)}bu(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Sr(8,a,a.return),ao(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,ao(a));break;default:ao(a)}t=t.sibling}}function Wu(t,a){for(;Lt!==null;){var r=Lt;switch(r.tag){case 0:case 11:case 15:Sr(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:nn(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,Lt=e;else t:for(r=t;Lt!==null;){e=Lt;var i=e.sibling,n=e.return;if(xu(e),e===r){Lt=null;break t}if(i!==null){i.return=n,Lt=i;break t}Lt=n}}}var r5={getCacheForType:function(t){var a=bt(ft),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return bt(ft).controller.signal}},e5=typeof WeakMap=="function"?WeakMap:Map,X=0,P=null,U=null,Z=0,K=0,Rt=null,vr=!1,$e=!1,F1=!1,Pa=0,dt=0,Ar=0,Jr=0,$1=0,$t=0,qe=0,Ti=null,Ut=null,Fl=!1,Ko=0,Hu=0,Co=1/0,Bo=null,wr=null,kt=0,Cr=null,Ge=null,Ra=0,$l=0,Il=null,Su=null,Ei=0,Pl=null;function aa(){return(X&2)!==0&&Z!==0?Z&-Z:V.T!==null?P1():O0()}function Au(){if($t===0)if((Z&536870912)===0||q){var t=Hn;Hn<<=1,(Hn&3932160)===0&&(Hn=262144),$t=t}else $t=536870912;return t=ea.current,t!==null&&(t.flags|=32),$t}function Zt(t,a,r){(t===P&&(K===2||K===9)||t.cancelPendingCommit!==null)&&(Ye(t,0),kr(t,Z,$t,!1)),an(t,r),((X&2)===0||t!==P)&&(t===P&&((X&2)===0&&(Jr|=r),dt===4&&kr(t,Z,$t,!1)),Aa(t))}function Vu(t,a,r){if((X&6)!==0)throw Error(M(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||tn(t,a),i=e?o5(t,a):cl(t,a,!0),n=e;do{if(i===0){$e&&!e&&kr(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!i5(r)){i=cl(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var l=t;i=Ti;var c=l.current.memoizedState.isDehydrated;if(c&&(Ye(l,o).flags|=256),o=cl(l,o,!1),o!==2){if(F1&&!c){l.errorRecoveryDisabledLanes|=n,Jr|=n,i=4;break t}n=Ut,Ut=i,n!==null&&(Ut===null?Ut=n:Ut.push.apply(Ut,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){Ye(t,0),kr(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(M(345));case 4:if((a&4194048)!==a)break;case 6:kr(e,a,$t,!vr);break t;case 2:Ut=null;break;case 3:case 5:break;default:throw Error(M(329))}if((a&62914560)===a&&(i=Ko+300-It(),10<i)){if(kr(e,a,$t,!vr),Eo(e,0,!0)!==0)break t;Ra=a,e.timeoutHandle=Iu(Fc.bind(null,e,r,Ut,Bo,Fl,a,$t,Jr,qe,vr,n,"Throttled",-0,0),i);break t}Fc(e,r,Ut,Bo,Fl,a,$t,Jr,qe,vr,n,null,-0,0)}}break}while(!0);Aa(t)}function Fc(t,a,r,e,i,n,o,l,c,s,v,k,p,x){if(t.timeoutHandle=-1,k=a.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ya},Bu(a,n,k);var y=(n&62914560)===n?Ko-It():(n&4194048)===n?Hu-It():0;if(y=U5(k,y),y!==null){Ra=n,t.cancelPendingCommit=y(Ic.bind(null,t,a,n,r,e,i,o,l,c,v,k,null,p,x)),kr(t,n,o,!s);return}}Ic(t,a,n,r,e,i,o,l,c)}function i5(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!ra(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function kr(t,a,r,e){a&=~$1,a&=~Jr,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-ta(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&E0(t,r,a)}function Ro(){return(X&6)===0?(dn(0,!1),!1):!0}function I1(){if(U!==null){if(K===0)var t=U.return;else t=U,Xa=ne=null,N1(t),ze=null,Yi=0,t=U;for(;t!==null;)uu(t.alternate,t),t=t.return;U=null}}function Ye(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,y5(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Ra=0,I1(),P=t,U=r=Qa(t.current,null),Z=a,K=0,Rt=null,vr=!1,$e=tn(t,a),F1=!1,qe=$t=$1=Jr=Ar=dt=0,Ut=Ti=null,Fl=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-ta(e),n=1<<i;a|=t[i],e&=~n}return Pa=a,Uo(),r}function zu(t,a){E=null,V.H=Qi,a===Fe||a===qo?(a=Wc(),K=3):a===S1?(a=Wc(),K=4):K=a===Q1?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Rt=a,U===null&&(dt=1,mo(t,sa(a,t.current)))}function _u(){var t=ea.current;return t===null?!0:(Z&4194048)===Z?pa===null:(Z&62914560)===Z||(Z&536870912)!==0?t===pa:!1}function Tu(){var t=V.H;return V.H=Qi,t===null?Qi:t}function Eu(){var t=V.A;return V.A=r5,t}function bo(){dt=4,vr||(Z&4194048)!==Z&&ea.current!==null||($e=!0),(Ar&134217727)===0&&(Jr&134217727)===0||P===null||kr(P,Z,$t,!1)}function cl(t,a,r){var e=X;X|=2;var i=Tu(),n=Eu();(P!==t||Z!==a)&&(Bo=null,Ye(t,a)),a=!1;var o=dt;t:do try{if(K!==0&&U!==null){var l=U,c=Rt;switch(K){case 8:I1(),o=6;break t;case 3:case 2:case 9:case 6:ea.current===null&&(a=!0);var s=K;if(K=0,Rt=null,We(t,l,c,s),r&&$e){o=0;break t}break;default:s=K,K=0,Rt=null,We(t,l,c,s)}}n5(),o=dt;break}catch(v){zu(t,v)}while(!0);return a&&t.shellSuspendCounter++,Xa=ne=null,X=e,V.H=i,V.A=n,U===null&&(P=null,Z=0,Uo()),o}function n5(){for(;U!==null;)Nu(U)}function o5(t,a){var r=X;X|=2;var e=Tu(),i=Eu();P!==t||Z!==a?(Bo=null,Co=It()+500,Ye(t,a)):$e=tn(t,a);t:do try{if(K!==0&&U!==null){a=U;var n=Rt;a:switch(K){case 1:K=0,Rt=null,We(t,a,n,1);break;case 2:case 9:if(jc(n)){K=0,Rt=null,$c(a);break}a=function(){K!==2&&K!==9||P!==t||(K=7),Aa(t)},n.then(a,a);break t;case 3:K=7;break t;case 4:K=5;break t;case 7:jc(n)?(K=0,Rt=null,$c(a)):(K=0,Rt=null,We(t,a,n,7));break;case 5:var o=null;switch(U.tag){case 26:o=U.memoizedState;case 5:case 27:var l=U;if(o?es(o):l.stateNode.complete){K=0,Rt=null;var c=l.sibling;if(c!==null)U=c;else{var s=l.return;s!==null?(U=s,Jo(s)):U=null}break a}}K=0,Rt=null,We(t,a,n,5);break;case 6:K=0,Rt=null,We(t,a,n,6);break;case 8:I1(),dt=6;break t;default:throw Error(M(462))}}l5();break}catch(v){zu(t,v)}while(!0);return Xa=ne=null,V.H=e,V.A=i,X=r,U!==null?0:(P=null,Z=0,Uo(),dt)}function l5(){for(;U!==null&&!S4();)Nu(U)}function Nu(t){var a=hu(t.alternate,t,Pa);t.memoizedProps=t.pendingProps,a===null?Jo(t):U=a}function $c(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=Yc(r,a,a.pendingProps,a.type,void 0,Z);break;case 11:a=Yc(r,a,a.pendingProps,a.type.render,a.ref,Z);break;case 5:N1(a);default:uu(r,a),a=U=uh(a,Pa),a=hu(r,a,Pa)}t.memoizedProps=t.pendingProps,a===null?Jo(t):U=a}function We(t,a,r,e){Xa=ne=null,N1(a),ze=null,Yi=0;var i=a.return;try{if(Jp(t,i,a,r,Z)){dt=1,mo(t,sa(r,t.current)),U=null;return}}catch(n){if(i!==null)throw U=i,n;dt=1,mo(t,sa(r,t.current)),U=null;return}a.flags&32768?(q||e===1?t=!0:$e||(Z&536870912)!==0?t=!1:(vr=t=!0,(e===2||e===9||e===3||e===6)&&(e=ea.current,e!==null&&e.tag===13&&(e.flags|=16384))),Du(a,t)):Jo(a)}function Jo(t){var a=t;do{if((a.flags&32768)!==0){Du(a,vr);return}t=a.return;var r=Ip(a.alternate,a,Pa);if(r!==null){U=r;return}if(a=a.sibling,a!==null){U=a;return}U=a=t}while(a!==null);dt===0&&(dt=5)}function Du(t,a){do{var r=Pp(t.alternate,t);if(r!==null){r.flags&=32767,U=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){U=t;return}U=t=r}while(t!==null);dt=6,U=null}function Ic(t,a,r,e,i,n,o,l,c){t.cancelPendingCommit=null;do Fo();while(kt!==0);if((X&6)!==0)throw Error(M(327));if(a!==null){if(a===t.current)throw Error(M(177));if(n=a.lanes|a.childLanes,n|=w1,U4(t,r,n,o,l,c),t===P&&(U=P=null,Z=0),Ge=a,Cr=t,Ra=r,$l=n,Il=i,Su=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,u5(ho,function(){return Gu(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=V.T,V.T=null,i=Q.p,Q.p=2,o=X,X|=4;try{t5(t,a,r)}finally{X=o,Q.p=i,V.T=e}}kt=1,Ou(),Uu(),Zu()}}function Ou(){if(kt===1){kt=0;var t=Cr,a=Ge,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=V.T,V.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{yu(a,t);var n=e1,o=eh(t.containerInfo),l=n.focusedElem,c=n.selectionRange;if(o!==l&&l&&l.ownerDocument&&rh(l.ownerDocument.documentElement,l)){if(c!==null&&y1(l)){var s=c.start,v=c.end;if(v===void 0&&(v=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(v,l.value.length);else{var k=l.ownerDocument||document,p=k&&k.defaultView||window;if(p.getSelection){var x=p.getSelection(),y=l.textContent.length,w=Math.min(c.start,y),N=c.end===void 0?w:Math.min(c.end,y);!x.extend&&w>N&&(o=N,N=w,w=o);var g=Mc(l,w),u=Mc(l,N);if(g&&u&&(x.rangeCount!==1||x.anchorNode!==g.node||x.anchorOffset!==g.offset||x.focusNode!==u.node||x.focusOffset!==u.offset)){var f=k.createRange();f.setStart(g.node,g.offset),x.removeAllRanges(),w>N?(x.addRange(f),x.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),x.addRange(f))}}}}for(k=[],x=l;x=x.parentNode;)x.nodeType===1&&k.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<k.length;l++){var L=k[l];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}_o=!!r1,e1=r1=null}finally{X=i,Q.p=e,V.T=r}}t.current=a,kt=2}}function Uu(){if(kt===2){kt=0;var t=Cr,a=Ge,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=V.T,V.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{ku(t,a.alternate,a)}finally{X=i,Q.p=e,V.T=r}}kt=3}}function Zu(){if(kt===4||kt===3){kt=0,A4();var t=Cr,a=Ge,r=Ra,e=Su;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?kt=5:(kt=0,Ge=Cr=null,qu(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(wr=null),f1(r),a=a.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Pi,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=V.T,i=Q.p,Q.p=2,V.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var l=e[o];n(l.value,{componentStack:l.stack})}}finally{V.T=a,Q.p=i}}(Ra&3)!==0&&Fo(),Aa(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===Pl?Ei++:(Ei=0,Pl=t):Ei=0,dn(0,!1)}}function qu(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,nn(a)))}function Fo(){return Ou(),Uu(),Zu(),Gu()}function Gu(){if(kt!==5)return!1;var t=Cr,a=$l;$l=0;var r=f1(Ra),e=V.T,i=Q.p;try{Q.p=32>r?32:r,V.T=null,r=Il,Il=null;var n=Cr,o=Ra;if(kt=0,Ge=Cr=null,Ra=0,(X&6)!==0)throw Error(M(331));var l=X;if(X|=4,ju(n.current),Cu(n,n.current,o,r),X=l,dn(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Pi,n)}catch{}return!0}finally{Q.p=i,V.T=e,qu(t,a)}}function Pc(t,a,r){a=sa(r,a),a=Ql(t.stateNode,a,2),t=yr(t,a,2),t!==null&&(an(t,2),Aa(t))}function R(t,a,r){if(t.tag===3)Pc(t,t,r);else for(;a!==null;){if(a.tag===3){Pc(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(wr===null||!wr.has(e))){t=sa(r,t),r=iu(2),e=yr(a,r,2),e!==null&&(nu(r,e,a,t),an(e,2),Aa(e));break}}a=a.return}}function hl(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new e5;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(F1=!0,i.add(r),t=d5.bind(null,t,a,r),a.then(t,t))}function d5(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,P===t&&(Z&r)===r&&(dt===4||dt===3&&(Z&62914560)===Z&&300>It()-Ko?(X&2)===0&&Ye(t,0):$1|=r,qe===Z&&(qe=0)),Aa(t)}function Yu(t,a){a===0&&(a=T0()),t=ie(t,a),t!==null&&(an(t,a),Aa(t))}function c5(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),Yu(t,r)}function h5(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(M(314))}e!==null&&e.delete(a),Yu(t,r)}function u5(t,a){return g1(t,a)}var jo=null,ve=null,t1=!1,Wo=!1,ul=!1,xr=0;function Aa(t){t!==ve&&t.next===null&&(ve===null?jo=ve=t:ve=ve.next=t),Wo=!0,t1||(t1=!0,g5())}function dn(t,a){if(!ul&&Wo){ul=!0;do for(var r=!1,e=jo;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,l=e.pingedLanes;n=(1<<31-ta(42|t)+1)-1,n&=i&~(o&~l),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,t0(e,n))}else n=Z,n=Eo(e,e===P?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||tn(e,n)||(r=!0,t0(e,n));e=e.next}while(r);ul=!1}}function s5(){Xu()}function Xu(){Wo=t1=!1;var t=0;xr!==0&&m5()&&(t=xr);for(var a=It(),r=null,e=jo;e!==null;){var i=e.next,n=Qu(e,a);n===0?(e.next=null,r===null?jo=i:r.next=i,i===null&&(ve=r)):(r=e,(t!==0||(n&3)!==0)&&(Wo=!0)),e=i}kt!==0&&kt!==5||dn(t,!1),xr!==0&&(xr=0)}function Qu(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-ta(n),l=1<<o,c=i[o];c===-1?((l&r)===0||(l&e)!==0)&&(i[o]=O4(l,a)):c<=a&&(t.expiredLanes|=l),n&=~l}if(a=P,r=Z,r=Eo(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(K===2||K===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&U2(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||tn(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&U2(e),f1(r)){case 2:case 8:r=z0;break;case 32:r=ho;break;case 268435456:r=_0;break;default:r=ho}return e=Ku.bind(null,t),r=g1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&U2(e),t.callbackPriority=2,t.callbackNode=null,2}function Ku(t,a){if(kt!==0&&kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Fo()&&t.callbackNode!==r)return null;var e=Z;return e=Eo(t,t===P?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(Vu(t,e,a),Qu(t,It()),t.callbackNode!=null&&t.callbackNode===r?Ku.bind(null,t):null)}function t0(t,a){if(Fo())return null;Vu(t,a,!0)}function g5(){w5(function(){(X&6)!==0?g1(V0,s5):Xu()})}function P1(){if(xr===0){var t=Oe;t===0&&(t=Wn,Wn<<=1,(Wn&261888)===0&&(Wn=256)),xr=t}return xr}function a0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Qn(""+t)}function r0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function p5(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=a0((i[qt]||null).action),o=e.submitter;o&&(a=(a=o[qt]||null)?a0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var l=new No("action","action",null,e,i);t.push({event:l,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(xr!==0){var c=o?r0(i,o):new FormData(i);Yl(r,{pending:!0,data:c,method:i.method,action:n},null,c)}}else typeof n=="function"&&(l.preventDefault(),c=o?r0(i,o):new FormData(i),Yl(r,{pending:!0,data:c,method:i.method,action:n},n,c))},currentTarget:i}]})}}for(Un=0;Un<Vl.length;Un++)Zn=Vl[Un],e0=Zn.toLowerCase(),i0=Zn[0].toUpperCase()+Zn.slice(1),wa(e0,"on"+i0);var Zn,e0,i0,Un;wa(nh,"onAnimationEnd");wa(oh,"onAnimationIteration");wa(lh,"onAnimationStart");wa("dblclick","onDoubleClick");wa("focusin","onFocus");wa("focusout","onBlur");wa(Vp,"onTransitionRun");wa(zp,"onTransitionStart");wa(_p,"onTransitionCancel");wa(dh,"onTransitionEnd");Ne("onMouseEnter",["mouseout","mouseover"]);Ne("onMouseLeave",["mouseout","mouseover"]);Ne("onPointerEnter",["pointerout","pointerover"]);Ne("onPointerLeave",["pointerout","pointerover"]);ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ae("onBeforeInput",["compositionend","keypress","textInput","paste"]);ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),f5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ki));function Ru(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var l=e[o],c=l.instance,s=l.currentTarget;if(l=l.listener,c!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){so(v)}i.currentTarget=null,n=c}else for(o=0;o<e.length;o++){if(l=e[o],c=l.instance,s=l.currentTarget,l=l.listener,c!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){so(v)}i.currentTarget=null,n=c}}}}function O(t,a){var r=a[Cl];r===void 0&&(r=a[Cl]=new Set);var e=t+"__bubble";r.has(e)||(Ju(a,t,2,!1),r.add(e))}function sl(t,a,r){var e=0;a&&(e|=4),Ju(r,t,e,a)}var qn="_reactListening"+Math.random().toString(36).slice(2);function td(t){if(!t[qn]){t[qn]=!0,U0.forEach(function(r){r!=="selectionchange"&&(f5.has(r)||sl(r,!1,t),sl(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[qn]||(a[qn]=!0,sl("selectionchange",!1,a))}}function Ju(t,a,r,e){switch(ds(a)){case 2:var i=G5;break;case 8:i=Y5;break;default:i=id}r=i.bind(null,a,r,t),i=void 0,!Hl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function gl(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var l=e.stateNode.containerInfo;if(l===i)break;if(o===4)for(o=e.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;l!==null;){if(o=Le(l),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){e=n=o;continue t}l=l.parentNode}}e=e.return}R0(function(){var s=n,v=x1(r),k=[];t:{var p=ch.get(t);if(p!==void 0){var x=No,y=t;switch(t){case"keypress":if(Rn(r)===0)break t;case"keydown":case"keyup":x=hp;break;case"focusin":y="focus",x=X2;break;case"focusout":y="blur",x=X2;break;case"beforeblur":case"afterblur":x=X2;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=I4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=gp;break;case nh:case oh:case lh:x=ap;break;case dh:x=fp;break;case"scroll":case"scrollend":x=F4;break;case"wheel":x=kp;break;case"copy":case"cut":case"paste":x=ep;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=gc;break;case"toggle":case"beforetoggle":x=Lp}var w=(a&4)!==0,N=!w&&(t==="scroll"||t==="scrollend"),g=w?p!==null?p+"Capture":null:p;w=[];for(var u=s,f;u!==null;){var L=u;if(f=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||f===null||g===null||(L=Oi(u,g),L!=null&&w.push(Ri(u,L,f))),N)break;u=u.return}0<w.length&&(p=new x(p,y,null,r,v),k.push({event:p,listeners:w}))}}if((a&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",p&&r!==Wl&&(y=r.relatedTarget||r.fromElement)&&(Le(y)||y[Ke]))break t;if((x||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,x?(y=r.relatedTarget||r.toElement,x=s,y=y?Le(y):null,y!==null&&(N=Ii(y),w=y.tag,y!==N||w!==5&&w!==27&&w!==6)&&(y=null)):(x=null,y=s),x!==y)){if(w=uc,L="onMouseLeave",g="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(w=gc,L="onPointerLeave",g="onPointerEnter",u="pointer"),N=x==null?p:yi(x),f=y==null?p:yi(y),p=new w(L,u+"leave",x,r,v),p.target=N,p.relatedTarget=f,L=null,Le(v)===s&&(w=new w(g,u+"enter",y,r,v),w.target=f,w.relatedTarget=N,L=w),N=L,x&&y)a:{for(w=v5,g=x,u=y,f=0,L=g;L;L=w(L))f++;L=0;for(var j=u;j;j=w(j))L++;for(;0<f-L;)g=w(g),f--;for(;0<L-f;)u=w(u),L--;for(;f--;){if(g===u||u!==null&&g===u.alternate){w=g;break a}g=w(g),u=w(u)}w=null}else w=null;x!==null&&n0(k,p,x,w,!1),y!==null&&N!==null&&n0(k,N,y,w,!0)}}t:{if(p=s?yi(s):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var z=kc;else if(vc(p))if(th)z=Hp;else{z=jp;var C=bp}else x=p.nodeName,!x||x.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?s&&k1(s.elementType)&&(z=kc):z=Wp;if(z&&(z=z(t,s))){P0(k,z,r,v);break t}C&&C(t,p,s),t==="focusout"&&s&&p.type==="number"&&s.memoizedProps.value!=null&&jl(p,"number",p.value)}switch(C=s?yi(s):window,t){case"focusin":(vc(C)||C.contentEditable==="true")&&(ye=C,Sl=s,ji=null);break;case"focusout":ji=Sl=ye=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,mc(k,r,v);break;case"selectionchange":if(Ap)break;case"keydown":case"keyup":mc(k,r,v)}var S;if(m1)t:{switch(t){case"compositionstart":var W="onCompositionStart";break t;case"compositionend":W="onCompositionEnd";break t;case"compositionupdate":W="onCompositionUpdate";break t}W=void 0}else me?$0(t,r)&&(W="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(W="onCompositionStart");W&&(F0&&r.locale!=="ko"&&(me||W!=="onCompositionStart"?W==="onCompositionEnd"&&me&&(S=J0()):(fr=v,L1="value"in fr?fr.value:fr.textContent,me=!0)),C=Ho(s,W),0<C.length&&(W=new sc(W,t,null,r,v),k.push({event:W,listeners:C}),S?W.data=S:(S=I0(r),S!==null&&(W.data=S)))),(S=mp?yp(t,r):wp(t,r))&&(W=Ho(s,"onBeforeInput"),0<W.length&&(C=new sc("onBeforeInput","beforeinput",null,r,v),k.push({event:C,listeners:W}),C.data=S)),p5(k,t,s,r,v)}Ru(k,a)})}function Ri(t,a,r){return{instance:t,listener:a,currentTarget:r}}function Ho(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Oi(t,r),i!=null&&e.unshift(Ri(t,i,n)),i=Oi(t,a),i!=null&&e.push(Ri(t,i,n))),t.tag===3)return e;t=t.return}return[]}function v5(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function n0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var l=r,c=l.alternate,s=l.stateNode;if(l=l.tag,c!==null&&c===e)break;l!==5&&l!==26&&l!==27||s===null||(c=s,i?(s=Oi(r,n),s!=null&&o.unshift(Ri(r,s,c))):i||(s=Oi(r,n),s!=null&&o.push(Ri(r,s,c)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var k5=/\r\n?/g,x5=/\u0000|\uFFFD/g;function o0(t){return(typeof t=="string"?t:""+t).replace(k5,`
`).replace(x5,"")}function Fu(t,a){return a=o0(a),o0(t)===a}function F(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||De(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&De(t,""+e);break;case"className":An(t,"class",e);break;case"tabIndex":An(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":An(t,r,e);break;case"style":K0(t,e,n);break;case"data":if(a!=="object"){An(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=Qn(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&F(t,a,"name",i.name,i,null),F(t,a,"formEncType",i.formEncType,i,null),F(t,a,"formMethod",i.formMethod,i,null),F(t,a,"formTarget",i.formTarget,i,null)):(F(t,a,"encType",i.encType,i,null),F(t,a,"method",i.method,i,null),F(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=Qn(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=Ya);break;case"onScroll":e!=null&&O("scroll",t);break;case"onScrollEnd":e!=null&&O("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(M(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(M(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=Qn(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":O("beforetoggle",t),O("toggle",t),Xn(t,"popover",e);break;case"xlinkActuate":Ea(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Ea(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Ea(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Ea(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Ea(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Ea(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Ea(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Ea(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Ea(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Xn(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=R4.get(r)||r,Xn(t,r,e))}}function a1(t,a,r,e,i,n){switch(r){case"style":K0(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(M(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(M(60));t.innerHTML=r}}break;case"children":typeof e=="string"?De(t,e):(typeof e=="number"||typeof e=="bigint")&&De(t,""+e);break;case"onScroll":e!=null&&O("scroll",t);break;case"onScrollEnd":e!=null&&O("scrollend",t);break;case"onClick":e!=null&&(t.onclick=Ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Z0.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[qt]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):Xn(t,r,e)}}}function jt(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":O("error",t),O("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(M(137,a));default:F(t,a,n,o,r,null)}}i&&F(t,a,"srcSet",r.srcSet,r,null),e&&F(t,a,"src",r.src,r,null);return;case"input":O("invalid",t);var l=n=o=i=null,c=null,s=null;for(e in r)if(r.hasOwnProperty(e)){var v=r[e];if(v!=null)switch(e){case"name":i=v;break;case"type":o=v;break;case"checked":c=v;break;case"defaultChecked":s=v;break;case"value":n=v;break;case"defaultValue":l=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(M(137,a));break;default:F(t,a,e,v,r,null)}}Y0(t,n,l,c,s,o,i,!1);return;case"select":O("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(l=r[i],l!=null))switch(i){case"value":n=l;break;case"defaultValue":o=l;break;case"multiple":e=l;default:F(t,a,i,l,r,null)}a=n,r=o,t.multiple=!!e,a!=null?Se(t,!!e,a,!1):r!=null&&Se(t,!!e,r,!0);return;case"textarea":O("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(l=r[o],l!=null))switch(o){case"value":e=l;break;case"defaultValue":i=l;break;case"children":n=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(M(91));break;default:F(t,a,o,l,r,null)}Q0(t,e,i,n);return;case"option":for(c in r)r.hasOwnProperty(c)&&(e=r[c],e!=null)&&(c==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":F(t,a,c,e,r,null));return;case"dialog":O("beforetoggle",t),O("toggle",t),O("cancel",t),O("close",t);break;case"iframe":case"object":O("load",t);break;case"video":case"audio":for(e=0;e<Ki.length;e++)O(Ki[e],t);break;case"image":O("error",t),O("load",t);break;case"details":O("toggle",t);break;case"embed":case"source":case"link":O("error",t),O("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(s in r)if(r.hasOwnProperty(s)&&(e=r[s],e!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(M(137,a));default:F(t,a,s,e,r,null)}return;default:if(k1(a)){for(v in r)r.hasOwnProperty(v)&&(e=r[v],e!==void 0&&a1(t,a,v,e,r,void 0));return}}for(l in r)r.hasOwnProperty(l)&&(e=r[l],e!=null&&F(t,a,l,e,r,null))}function L5(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,l=null,c=null,s=null,v=null;for(x in r){var k=r[x];if(r.hasOwnProperty(x)&&k!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":c=k;default:e.hasOwnProperty(x)||F(t,a,x,null,e,k)}}for(var p in e){var x=e[p];if(k=r[p],e.hasOwnProperty(p)&&(x!=null||k!=null))switch(p){case"type":n=x;break;case"name":i=x;break;case"checked":s=x;break;case"defaultChecked":v=x;break;case"value":o=x;break;case"defaultValue":l=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(M(137,a));break;default:x!==k&&F(t,a,p,x,e,k)}}bl(t,o,l,c,s,v,n,i);return;case"select":x=o=l=p=null;for(n in r)if(c=r[n],r.hasOwnProperty(n)&&c!=null)switch(n){case"value":break;case"multiple":x=c;default:e.hasOwnProperty(n)||F(t,a,n,null,e,c)}for(i in e)if(n=e[i],c=r[i],e.hasOwnProperty(i)&&(n!=null||c!=null))switch(i){case"value":p=n;break;case"defaultValue":l=n;break;case"multiple":o=n;default:n!==c&&F(t,a,i,n,e,c)}a=l,r=o,e=x,p!=null?Se(t,!!r,p,!1):!!e!=!!r&&(a!=null?Se(t,!!r,a,!0):Se(t,!!r,r?[]:"",!1));return;case"textarea":x=p=null;for(l in r)if(i=r[l],r.hasOwnProperty(l)&&i!=null&&!e.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:F(t,a,l,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":p=i;break;case"defaultValue":x=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(M(91));break;default:i!==n&&F(t,a,o,i,e,n)}X0(t,p,x);return;case"option":for(var y in r)p=r[y],r.hasOwnProperty(y)&&p!=null&&!e.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:F(t,a,y,null,e,p));for(c in e)p=e[c],x=r[c],e.hasOwnProperty(c)&&p!==x&&(p!=null||x!=null)&&(c==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":F(t,a,c,p,e,x));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in r)p=r[w],r.hasOwnProperty(w)&&p!=null&&!e.hasOwnProperty(w)&&F(t,a,w,null,e,p);for(s in e)if(p=e[s],x=r[s],e.hasOwnProperty(s)&&p!==x&&(p!=null||x!=null))switch(s){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(M(137,a));break;default:F(t,a,s,p,e,x)}return;default:if(k1(a)){for(var N in r)p=r[N],r.hasOwnProperty(N)&&p!==void 0&&!e.hasOwnProperty(N)&&a1(t,a,N,void 0,e,p);for(v in e)p=e[v],x=r[v],!e.hasOwnProperty(v)||p===x||p===void 0&&x===void 0||a1(t,a,v,p,e,x);return}}for(var g in r)p=r[g],r.hasOwnProperty(g)&&p!=null&&!e.hasOwnProperty(g)&&F(t,a,g,null,e,p);for(k in e)p=e[k],x=r[k],!e.hasOwnProperty(k)||p===x||p==null&&x==null||F(t,a,k,p,e,x)}function l0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M5(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,l=i.duration;if(n&&l&&l0(o)){for(o=0,l=i.responseEnd,e+=1;e<r.length;e++){var c=r[e],s=c.startTime;if(s>l)break;var v=c.transferSize,k=c.initiatorType;v&&l0(k)&&(c=c.responseEnd,o+=v*(c<l?1:(l-s)/(c-s)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var r1=null,e1=null;function So(t){return t.nodeType===9?t:t.ownerDocument}function d0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $u(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function i1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var pl=null;function m5(){var t=window.event;return t&&t.type==="popstate"?t===pl?!1:(pl=t,!0):(pl=null,!1)}var Iu=typeof setTimeout=="function"?setTimeout:void 0,y5=typeof clearTimeout=="function"?clearTimeout:void 0,c0=typeof Promise=="function"?Promise:void 0,w5=typeof queueMicrotask=="function"?queueMicrotask:typeof c0<"u"?function(t){return c0.resolve(null).then(t).catch(C5)}:Iu;function C5(t){setTimeout(function(){throw t})}function zr(t){return t==="head"}function h0(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),Qe(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")Ni(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Ni(r);for(var n=r.firstChild;n;){var o=n.nextSibling,l=n.nodeName;n[rn]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&Ni(t.ownerDocument.body);r=i}while(r);Qe(a)}function u0(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function n1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":n1(r),v1(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function B5(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[rn])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=fa(t.nextSibling),t===null)break}return null}function b5(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=fa(t.nextSibling),t===null))return null;return t}function Pu(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fa(t.nextSibling),t===null))return null;return t}function o1(t){return t.data==="$?"||t.data==="$~"}function l1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function j5(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function fa(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var d1=null;function s0(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return fa(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function g0(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function ts(t,a,r){switch(a=So(r),t){case"html":if(t=a.documentElement,!t)throw Error(M(452));return t;case"head":if(t=a.head,!t)throw Error(M(453));return t;case"body":if(t=a.body,!t)throw Error(M(454));return t;default:throw Error(M(451))}}function Ni(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);v1(t)}var va=new Map,p0=new Set;function Ao(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var tr=Q.d;Q.d={f:W5,r:H5,D:S5,C:A5,L:V5,m:z5,X:T5,S:_5,M:E5};function W5(){var t=tr.f(),a=Ro();return t||a}function H5(t){var a=Re(t);a!==null&&a.tag===5&&a.type==="form"?Kh(a):tr.r(t)}var Ie=typeof document>"u"?null:document;function as(t,a,r){var e=Ie;if(e&&typeof a=="string"&&a){var i=ua(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),p0.has(i)||(p0.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),jt(a,"link",t),Mt(a),e.head.appendChild(a)))}}function S5(t){tr.D(t),as("dns-prefetch",t,null)}function A5(t,a){tr.C(t,a),as("preconnect",t,a)}function V5(t,a,r){tr.L(t,a,r);var e=Ie;if(e&&t&&a){var i='link[rel="preload"][as="'+ua(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+ua(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+ua(r.imageSizes)+'"]')):i+='[href="'+ua(t)+'"]';var n=i;switch(a){case"style":n=Xe(t);break;case"script":n=Pe(t)}va.has(n)||(t=it({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),va.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(cn(n))||a==="script"&&e.querySelector(hn(n))||(a=e.createElement("link"),jt(a,"link",t),Mt(a),e.head.appendChild(a)))}}function z5(t,a){tr.m(t,a);var r=Ie;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+ua(e)+'"][href="'+ua(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Pe(t)}if(!va.has(n)&&(t=it({rel:"modulepreload",href:t},a),va.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(hn(n)))return}e=r.createElement("link"),jt(e,"link",t),Mt(e),r.head.appendChild(e)}}}function _5(t,a,r){tr.S(t,a,r);var e=Ie;if(e&&t){var i=He(e).hoistableStyles,n=Xe(t);a=a||"default";var o=i.get(n);if(!o){var l={loading:0,preload:null};if(o=e.querySelector(cn(n)))l.loading=5;else{t=it({rel:"stylesheet",href:t,"data-precedence":a},r),(r=va.get(n))&&ad(t,r);var c=o=e.createElement("link");Mt(c),jt(c,"link",t),c._p=new Promise(function(s,v){c.onload=s,c.onerror=v}),c.addEventListener("load",function(){l.loading|=1}),c.addEventListener("error",function(){l.loading|=2}),l.loading|=4,ro(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:l},i.set(n,o)}}}function T5(t,a){tr.X(t,a);var r=Ie;if(r&&t){var e=He(r).hoistableScripts,i=Pe(t),n=e.get(i);n||(n=r.querySelector(hn(i)),n||(t=it({src:t,async:!0},a),(a=va.get(i))&&rd(t,a),n=r.createElement("script"),Mt(n),jt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function E5(t,a){tr.M(t,a);var r=Ie;if(r&&t){var e=He(r).hoistableScripts,i=Pe(t),n=e.get(i);n||(n=r.querySelector(hn(i)),n||(t=it({src:t,async:!0,type:"module"},a),(a=va.get(i))&&rd(t,a),n=r.createElement("script"),Mt(n),jt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function f0(t,a,r,e){var i=(i=Lr.current)?Ao(i):null;if(!i)throw Error(M(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=Xe(r.href),r=He(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Xe(r.href);var n=He(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(cn(t)))&&!n._p&&(o.instance=n,o.state.loading=5),va.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},va.set(t,r),n||N5(i,t,r,o.state))),a&&e===null)throw Error(M(528,""));return o}if(a&&e!==null)throw Error(M(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Pe(r),r=He(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(M(444,t))}}function Xe(t){return'href="'+ua(t)+'"'}function cn(t){return'link[rel="stylesheet"]['+t+"]"}function rs(t){return it({},t,{"data-precedence":t.precedence,precedence:null})}function N5(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),jt(a,"link",r),Mt(a),t.head.appendChild(a))}function Pe(t){return'[src="'+ua(t)+'"]'}function hn(t){return"script[async]"+t}function v0(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+ua(r.href)+'"]');if(e)return a.instance=e,Mt(e),e;var i=it({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Mt(e),jt(e,"style",i),ro(e,r.precedence,t),a.instance=e;case"stylesheet":i=Xe(r.href);var n=t.querySelector(cn(i));if(n)return a.state.loading|=4,a.instance=n,Mt(n),n;e=rs(r),(i=va.get(i))&&ad(e,i),n=(t.ownerDocument||t).createElement("link"),Mt(n);var o=n;return o._p=new Promise(function(l,c){o.onload=l,o.onerror=c}),jt(n,"link",e),a.state.loading|=4,ro(n,r.precedence,t),a.instance=n;case"script":return n=Pe(r.src),(i=t.querySelector(hn(n)))?(a.instance=i,Mt(i),i):(e=r,(i=va.get(n))&&(e=it({},r),rd(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),Mt(i),jt(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(M(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,ro(e,r.precedence,t));return a.instance}function ro(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var l=e[o];if(l.dataset.precedence===a)n=l;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function ad(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function rd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var eo=null;function k0(t,a,r){if(eo===null){var e=new Map,i=eo=new Map;i.set(r,e)}else i=eo,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[rn]||n[Ct]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var l=e.get(o);l?l.push(n):e.set(o,[n])}}return e}function x0(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function D5(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function es(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function O5(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=Xe(e.href),n=a.querySelector(cn(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Vo.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,Mt(n);return}n=a.ownerDocument||a,e=rs(e),(i=va.get(i))&&ad(e,i),n=n.createElement("link"),Mt(n);var o=n;o._p=new Promise(function(l,c){o.onload=l,o.onerror=c}),jt(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Vo.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var fl=0;function U5(t,a){return t.stylesheets&&t.count===0&&io(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&io(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&fl===0&&(fl=62500*M5());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&io(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>fl?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function Vo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)io(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zo=null;function io(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zo=new Map,a.forEach(Z5,t),zo=null,Vo.call(t))}function Z5(t,a){if(!(a.state.loading&4)){var r=zo.get(t);if(r)var e=r.get(null);else{r=new Map,zo.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=Vo.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var Ji={$$typeof:Ga,Provider:null,Consumer:null,_currentValue:Xr,_currentValue2:Xr,_threadCount:0};function q5(t,a,r,e,i,n,o,l,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Z2(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Z2(0),this.hiddenUpdates=Z2(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function is(t,a,r,e,i,n,o,l,c,s,v,k){return t=new q5(t,a,r,o,c,s,v,k,l),a=1,n===!0&&(a|=24),n=Ft(3,null,null,a),t.current=n,n.stateNode=t,a=W1(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},A1(n),t}function ns(t){return t?(t=Be,t):Be}function os(t,a,r,e,i,n){i=ns(i),e.context===null?e.context=i:e.pendingContext=i,e=mr(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=yr(t,e,a),r!==null&&(Zt(r,t,a),Hi(r,t,a))}function L0(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function ed(t,a){L0(t,a),(t=t.alternate)&&L0(t,a)}function ls(t){if(t.tag===13||t.tag===31){var a=ie(t,67108864);a!==null&&Zt(a,t,67108864),ed(t,67108864)}}function M0(t){if(t.tag===13||t.tag===31){var a=aa();a=p1(a);var r=ie(t,a);r!==null&&Zt(r,t,a),ed(t,a)}}var _o=!0;function G5(t,a,r,e){var i=V.T;V.T=null;var n=Q.p;try{Q.p=2,id(t,a,r,e)}finally{Q.p=n,V.T=i}}function Y5(t,a,r,e){var i=V.T;V.T=null;var n=Q.p;try{Q.p=8,id(t,a,r,e)}finally{Q.p=n,V.T=i}}function id(t,a,r,e){if(_o){var i=c1(e);if(i===null)gl(t,a,e,To,r),m0(t,e);else if(Q5(i,t,a,r,e))e.stopPropagation();else if(m0(t,e),a&4&&-1<X5.indexOf(t)){for(;i!==null;){var n=Re(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=qr(n.pendingLanes);if(o!==0){var l=n;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var c=1<<31-ta(o);l.entanglements[1]|=c,o&=~c}Aa(n),(X&6)===0&&(Co=It()+500,dn(0,!1))}}break;case 31:case 13:l=ie(n,2),l!==null&&Zt(l,n,2),Ro(),ed(n,2)}if(n=c1(e),n===null&&gl(t,a,e,To,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else gl(t,a,e,null,r)}}function c1(t){return t=x1(t),nd(t)}var To=null;function nd(t){if(To=null,t=Le(t),t!==null){var a=Ii(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=j0(a),t!==null)return t;t=null}else if(r===31){if(t=W0(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return To=t,null}function ds(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(V4()){case V0:return 2;case z0:return 8;case ho:case z4:return 32;case _0:return 268435456;default:return 32}default:return 32}}var h1=!1,Br=null,br=null,jr=null,Fi=new Map,$i=new Map,gr=[],X5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m0(t,a){switch(t){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":Fi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(a.pointerId)}}function xi(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=Re(a),a!==null&&ls(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function Q5(t,a,r,e,i){switch(a){case"focusin":return Br=xi(Br,t,a,r,e,i),!0;case"dragenter":return br=xi(br,t,a,r,e,i),!0;case"mouseover":return jr=xi(jr,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return Fi.set(n,xi(Fi.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,$i.set(n,xi($i.get(n)||null,t,a,r,e,i)),!0}return!1}function cs(t){var a=Le(t.target);if(a!==null){var r=Ii(a);if(r!==null){if(a=r.tag,a===13){if(a=j0(r),a!==null){t.blockedOn=a,ic(t.priority,function(){M0(r)});return}}else if(a===31){if(a=W0(r),a!==null){t.blockedOn=a,ic(t.priority,function(){M0(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function no(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=c1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);Wl=e,r.target.dispatchEvent(e),Wl=null}else return a=Re(r),a!==null&&ls(a),t.blockedOn=r,!1;a.shift()}return!0}function y0(t,a,r){no(t)&&r.delete(a)}function K5(){h1=!1,Br!==null&&no(Br)&&(Br=null),br!==null&&no(br)&&(br=null),jr!==null&&no(jr)&&(jr=null),Fi.forEach(y0),$i.forEach(y0)}function Gn(t,a){t.blockedOn===a&&(t.blockedOn=null,h1||(h1=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,K5)))}var Yn=null;function w0(t){Yn!==t&&(Yn=t,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,function(){Yn===t&&(Yn=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(nd(e||r)===null)continue;break}var n=Re(r);n!==null&&(t.splice(a,3),a-=3,Yl(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function Qe(t){function a(c){return Gn(c,t)}Br!==null&&Gn(Br,t),br!==null&&Gn(br,t),jr!==null&&Gn(jr,t),Fi.forEach(a),$i.forEach(a);for(var r=0;r<gr.length;r++){var e=gr[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<gr.length&&(r=gr[0],r.blockedOn===null);)cs(r),r.blockedOn===null&&gr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[qt]||null;if(typeof n=="function")o||w0(r);else if(o){var l=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[qt]||null)l=o.formAction;else if(nd(i)!==null)continue}else l=o.action;typeof l=="function"?r[e+1]=l:(r.splice(e,3),e-=3),w0(r)}}}function hs(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function od(t){this._internalRoot=t}$o.prototype.render=od.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(M(409));var r=a.current,e=aa();os(r,e,t,a,null,null)};$o.prototype.unmount=od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;os(t.current,2,null,t,null,null),Ro(),a[Ke]=null}};function $o(t){this._internalRoot=t}$o.prototype.unstable_scheduleHydration=function(t){if(t){var a=O0();t={blockedOn:null,target:t,priority:a};for(var r=0;r<gr.length&&a!==0&&a<gr[r].priority;r++);gr.splice(r,0,t),r===0&&cs(t)}};var C0=B0.version;if(C0!=="19.2.8")throw Error(M(527,C0,"19.2.8"));Q.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=B4(a),t=t!==null?H0(t):null,t=t===null?null:t.stateNode,t};var R5={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Li=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Li.isDisabled&&Li.supportsFiber))try{Pi=Li.inject(R5),Pt=Li}catch{}var Li;Io.createRoot=function(t,a){if(!b0(t))throw Error(M(299));var r=!1,e="",i=au,n=ru,o=eu;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=is(t,1,!1,null,null,r,e,null,i,n,o,hs),t[Ke]=a.current,td(t),new od(a)};Io.hydrateRoot=function(t,a,r){if(!b0(t))throw Error(M(299));var e=!1,i="",n=au,o=ru,l=eu,c=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(l=r.onRecoverableError),r.formState!==void 0&&(c=r.formState)),a=is(t,1,!0,a,r??null,e,i,c,n,o,l,hs),a.context=ns(null),r=a.current,e=aa(),e=p1(e),i=mr(e),i.callback=null,yr(r,i,e),r=e,a.current.lanes=r,an(a,r),Aa(a),t[Ke]=a.current,td(t),new $o(a)};Io.version="19.2.8"});var ps=nr((jf,gs)=>{"use strict";function ss(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ss)}catch(t){console.error(t)}}ss(),gs.exports=us()});var Wt=Or(_a()),_g=Or(ps());var ti=Or(_a(),1);var ld=Or(_a(),1),dd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},cd=ld.default.createContext&&ld.default.createContext(dd);var J5=["attr","size","title"];function F5(t,a){if(t==null)return{};var r,e,i=$5(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function $5(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function Po(){return Po=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},Po.apply(null,arguments)}function fs(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function t2(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?fs(Object(r),!0).forEach(function(e){I5(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):fs(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function I5(t,a,r){return(a=P5(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function P5(t){var a=tf(t,"string");return typeof a=="symbol"?a:a+""}function tf(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function vs(t){return t&&t.map((a,r)=>ti.default.createElement(a.tag,t2({key:r},a.attr),vs(a.child)))}function G(t){return a=>ti.default.createElement(af,Po({attr:t2({},t.attr)},a),vs(t.child))}function af(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=F5(t,J5),l=i||r.size||"1em",c;return r.className&&(c=r.className),t.className&&(c=(c?c+" ":"")+t.className),ti.default.createElement("svg",Po({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:c,style:t2(t2({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),n&&ti.default.createElement("title",null,n),t.children)};return cd!==void 0?ti.default.createElement(cd.Consumer,null,r=>a(r)):a(dd)}function ks(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function xs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function Ls(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function Ms(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function ms(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function ys(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function ws(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function Cs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"21",x2:"14",y1:"4",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",x2:"3",y1:"4",y2:"4"},child:[]},{tag:"line",attr:{x1:"21",x2:"12",y1:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",x2:"3",y1:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",x2:"16",y1:"20",y2:"20"},child:[]},{tag:"line",attr:{x1:"12",x2:"3",y1:"20",y2:"20"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"2",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",x2:"8",y1:"10",y2:"14"},child:[]},{tag:"line",attr:{x1:"16",x2:"16",y1:"18",y2:"22"},child:[]}]})(t)}function Bs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"5 4 15 12 5 20 5 4"},child:[]},{tag:"line",attr:{x1:"19",x2:"19",y1:"5",y2:"19"},child:[]}]})(t)}function bs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function js(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function Ws(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function Hs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function Ss(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function As(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function Vs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function zs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function _s(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function Ts(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function Es(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function Ns(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function Ds(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function Os(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function Us(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function Zs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function qs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function Gs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function Ys(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 11-5-5-5 5"},child:[]},{tag:"path",attr:{d:"m17 18-5-5-5 5"},child:[]}]})(t)}function Xs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 6 5 5 5-5"},child:[]},{tag:"path",attr:{d:"m7 13 5 5 5-5"},child:[]}]})(t)}function Qs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function Ks(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function Rs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 6 9 17l-5-5"},child:[]}]})(t)}function Js(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function Fs(t){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var $s=Es,Is=xs,Ps=_s,hd=zs,tg=Ds,ag=Os,rg=bs,ai=Ls,eg=Us,ig=Ns,un=Hs,ng=Rs,ud=qs,ri=Gs,sd=ms,og=Zs,lg=ys,dg=Qs,cg=Ks,hg=Ys,ug=Xs,a2=Ws,sg=Cs,gg=Bs,r2=ks,gd=Ts,pg=Vs,fg=Ss,vg=As,e2=Fs,kg=js,xg=Js,Lg=Ms,Mg=ws;var ct=Or(_a());var A=Or(_a());var i2={member:"會友",coworker:"同工",admin_staff:"行政",leader:"領袖",pastor:"牧師",admin:"系統管理員"},n2={member:ai,coworker:Lg,admin_staff:ag,leader:Mg,pastor:tg,admin:rg},o2=["leader","pastor","admin"],pd=[{id:"work",label:"工作日誌",Icon:$s,href:"work.html",needsRole:!0},{id:"serve",label:"服事管理",Icon:Is,href:""},{id:"venue",label:"場地預約",Icon:xg,href:""}],rf=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},mg=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},l2=({active:t,shell:a})=>{let[r,e]=(0,A.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(y=>{let w=!y;try{localStorage.setItem("tbcSidebarCollapsed",w?"1":"0")}catch{}return w}),[n,o]=(0,A.useState)(!1),[l,c]=(0,A.useState)(""),s=(0,A.useRef)(null),v=a.identity||{name:"",role:"member",status:"loading"},k=n2[v.role]||ai,p=o2.includes(v.role),x=y=>{c(`${y} 尚未開放`),clearTimeout(s.current),s.current=setTimeout(()=>c(""),2200)};return A.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},A.default.createElement("div",{className:"flex flex-col"},A.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},A.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},A.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},A.default.createElement(e2,{size:20,strokeWidth:2})),r&&A.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},A.default.createElement(hd,{size:18}))),!r&&A.default.createElement(A.default.Fragment,null,A.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),A.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},A.default.createElement(hd,{size:18})))),A.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},pd.map(y=>{let w=t===y.id,N=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${w?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,g=A.default.createElement(A.default.Fragment,null,A.default.createElement(y.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&A.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},y.label));return y.href&&!(y.needsRole&&v.status==="denied")?w?A.default.createElement("div",{key:y.id,className:N,title:y.label,"aria-current":"page"},g):A.default.createElement("a",{key:y.id,href:y.href,className:N,title:y.label},g):A.default.createElement("button",{key:y.id,type:"button",onClick:()=>x(y.label),className:N,title:y.label},g)}))),A.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},A.default.createElement("button",{type:"button",onClick:()=>o(y=>!y),"aria-haspopup":"menu","aria-expanded":n,title:`${v.name}（${i2[v.role]||v.role}）`,className:`tbc-sb-user flex items-center rounded-full hover:bg-slate-100 transition-colors ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-12 w-full"}`},A.default.createElement(k,{size:20,strokeWidth:1.75,className:`shrink-0 ${p?"text-amber-500":"text-slate-500"}`}),!r&&A.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},v.name)),n&&A.default.createElement(A.default.Fragment,null,A.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),A.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},A.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},A.default.createElement(Ps,{size:18,strokeWidth:1.75}),"登出")))),l&&A.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},l))},yg=({supabase:t})=>{let[a,r]=(0,A.useState)(""),[e,i]=(0,A.useState)(""),[n,o]=(0,A.useState)(!1),[l,c]=(0,A.useState)(""),s=async k=>{if(k.preventDefault(),!a.trim()||!e||n)return;o(!0),c("");let{error:p}=await t.auth.signInWithPassword({email:rf(a),password:e});o(!1),p&&c("帳號或密碼不正確，請再試一次")},v="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return A.default.createElement("form",{onSubmit:s,className:"w-full max-w-sm mx-auto space-y-3"},A.default.createElement("input",{value:a,onChange:k=>r(k.target.value),placeholder:"帳號（電話或 Email）",autoComplete:"username",className:v}),A.default.createElement("input",{type:"password",value:e,onChange:k=>i(k.target.value),placeholder:"密碼",autoComplete:"current-password",className:v}),l&&A.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},A.default.createElement(ri,{size:16}),l),A.default.createElement("button",{type:"submit",disabled:n||!a.trim()||!e,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},n?"登入中…":"登入"))};var ef=({shell:t})=>{let[a,r]=(0,ct.useState)(""),e=(0,ct.useRef)(null),i=t.identity||{},n=pd.filter(l=>!(l.needsRole&&i.status==="denied")),o=l=>{r(`${l} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return ct.default.createElement("div",{className:"flex h-[100dvh] w-full bg-white overflow-hidden"},ct.default.createElement(l2,{active:"",shell:t}),ct.default.createElement("main",{className:"flex-1 min-w-0 overflow-auto custom-scrollbar"},ct.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},ct.default.createElement("div",{className:"text-center mb-14"},ct.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),ct.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),ct.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(l=>{let c=ct.default.createElement(ct.default.Fragment,null,ct.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},ct.default.createElement(l.Icon,{size:40,strokeWidth:1.75})),ct.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},l.label)),s="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return l.href?ct.default.createElement("a",{key:l.id,href:l.href,className:s},c):ct.default.createElement("button",{key:l.id,type:"button",onClick:()=>o(l.label),className:s},c)})),i.status==="denied"&&ct.default.createElement("p",{className:"mt-10 text-center text-sm text-slate-400"},"目前只有「工作日誌」需要牧師、行政或系統管理員權限；其他功能之後開放。"))),a&&ct.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},wg=ef;var d=Or(_a());var c2={pastor_decision:"需牧師決策",team_discussion:"需團隊討論",cross_dept:"需跨部門協調",track_progress:"需追蹤進度"},nf={pending:"待處理",in_progress:"進行中",awaiting_confirm:"待確認",done:"已完成"},fd=["日","一","二","三","四","五","六"],Cg={s:13,m:15,l:18},Bg=[{id:"title",label:"任務",locked:!0,w:"minmax(190px,2.4fr)",min:190},{id:"who",label:"負責人",w:"minmax(104px,1fr)",min:104},{id:"status",label:"狀態",locked:!0,w:"150px",min:150},{id:"date",label:"日期",w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(112px,1fr)",min:112},{id:"hours",label:"工時",w:"64px",min:64},{id:"priority",label:"優先級",w:"64px",min:64},{id:"flag",label:"會議對焦",w:"minmax(112px,1fr)",min:112},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],of="Asia/Taipei",bg=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:of,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},u2=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},lf=t=>new Date(t).toISOString().slice(0,10),h2=(t,a)=>lf(u2(t)+a*864e5),Hg=(t,a)=>Math.round((u2(t)-u2(a))/864e5),Sg=t=>new Date(u2(t)).getUTCDay(),df=t=>h2(t,-((Sg(t)+6)%7)),Va=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},cf=(t,a)=>{let r=Hg(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${Va(t)}（${fd[Sg(t)]}）`,tag:e}},ia=t=>t?String(t).slice(0,5):"",hf=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=ia(t.start_time).split(":").map(Number),[e,i]=ia(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*10)/10} 小時`},d2=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的例行工作"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期的任務固定在最上面，不能搬移"],["item not in your list","這筆不在你的清單裡"],["item not found or canceled","這筆工作已被取消或不存在"],["more than one member record","這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號"],["no member record","找不到這個帳號對應的同工資料"],["no permission","沒有使用權限"],["permission denied","沒有使用權限"],["dates are required","日期必填"],["weekly rule needs","每週重複請至少選一個星期"],["monthly rule needs","每月重複請選幾號，或勾「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個例行設定"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},uf=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>fd[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 號`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},sf=({person:t,size:a=16,strong:r})=>{let[e,i]=(0,d.useState)(!1);(0,d.useEffect)(()=>{if(!e)return;let c=setTimeout(()=>i(!1),3e3);return()=>clearTimeout(c)},[e]);let n=t&&t.role,o=n2[n]||ai,l=o2.includes(n);return d.default.createElement("button",{type:"button",onClick:c=>{c.stopPropagation(),i(s=>!s)},title:i2[n]||"",className:"inline-flex items-center gap-1.5 max-w-full text-left"},d.default.createElement("span",{className:`shrink-0 ${l?"text-amber-500":"text-slate-400"}`},d.default.createElement(o,{size:a})),d.default.createElement("span",{className:`truncate ${r?"font-bold text-slate-900":"text-slate-700"}`},e?i2[n]||n:t&&t.name||"（未知）"))},jg=({value:t,placeholder:a,canEdit:r,onSave:e,className:i=""})=>{let[n,o]=(0,d.useState)(!1),[l,c]=(0,d.useState)(t||""),s=(0,d.useRef)(!1);(0,d.useEffect)(()=>{n||c(t||"")},[t,n]);let v=async()=>{if(o(!1),s.current){s.current=!1;return}let k=l.trim();k!==(t||"").trim()&&await e(k)};return n?d.default.createElement("input",{autoFocus:!0,value:l,onChange:k=>c(k.target.value),onBlur:v,onKeyDown:k=>{k.key==="Enter"&&k.currentTarget.blur(),k.key==="Escape"&&(s.current=!0,k.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):d.default.createElement("div",{onClick:()=>r&&o(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?d.default.createElement("span",{className:"text-slate-300"},a):null))},Wg=({type:t,a,b:r,canEdit:e,children:i,onSave:n})=>{let[o,l]=(0,d.useState)(!1),[c,s]=(0,d.useState)(a||""),[v,k]=(0,d.useState)(r||""),p=(0,d.useRef)(!1);(0,d.useEffect)(()=>{o||(s(a||""),k(r||""))},[a,r,o]);let x=async()=>{if(l(!1),p.current){p.current=!1;return}(c!==(a||"")||v!==(r||""))&&await n(c,v)};if(!o)return d.default.createElement("div",{onClick:()=>e&&l(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let y="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return d.default.createElement("div",{tabIndex:-1,onBlur:w=>{w.currentTarget.contains(w.relatedTarget)||x()},onKeyDown:w=>{w.key==="Enter"&&x(),w.key==="Escape"&&(p.current=!0,l(!1))},className:"flex flex-col gap-1"},d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",d.default.createElement("input",{autoFocus:!0,type:t,value:c,onChange:w=>s(w.target.value),className:y})),d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",d.default.createElement("input",{type:t,value:v,onChange:w=>k(w.target.value),className:y})))},gf=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o})=>{let l=a||{},c=t==="editRule",[s,v]=(0,d.useState)(l.title||""),[k,p]=(0,d.useState)(l.start_date||e),[x,y]=(0,d.useState)(ia(l.start_time)),[w,N]=(0,d.useState)(l.end_date||l.start_date||e),[g,u]=(0,d.useState)(ia(l.end_time)),[f,L]=(0,d.useState)(l.priority||"normal"),[j,z]=(0,d.useState)(l.note||""),[C,S]=(0,d.useState)(l.meeting_flag||""),[W,D]=(0,d.useState)(c?l.freq:r||"none"),[Tt,_r]=(0,d.useState)(!!l.weekdays_only),[ar,rr]=(0,d.useState)(l.week_days||[]),[ka,sn]=(0,d.useState)(l.month_day?String(l.month_day):""),[oe,s2]=(0,d.useState)(!!l.month_last_day),[Tr,g2]=(0,d.useState)(l.until_date||""),[gn,pn]=(0,d.useState)(l.is_active===void 0?!0:l.is_active),[ii,xa]=(0,d.useState)(""),Yt="text-xs font-medium text-slate-500",La="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",p2=H=>rr(ht=>ht.includes(H)?ht.filter(Er=>Er!==H):[...ht,H]),ni=()=>{if(xa(""),!s.trim())return xa("請輸入任務名稱");if(!k)return xa("開始日期必填");if(W==="none"&&(!w||w<k))return xa("結束日期不能早於開始日期");if(W==="weekly"&&ar.length===0)return xa("每週重複請至少選一個星期");if(W==="monthly"&&!ka&&!oe)return xa("每月重複請選幾號，或勾「每月最後一天」");if(W!=="none"&&Tr&&Tr<k)return xa("重複的結束日不能早於開始日");n({title:s.trim(),startDate:k,startTime:x||null,endDate:W==="none"?w:k,endTime:g||null,priority:f,note:j.trim()||null,flag:C||null,repeat:W,weekdaysOnly:W==="daily"&&Tt,weekDays:W==="weekly"?ar:[],monthDay:W==="monthly"&&ka?Number(ka):null,monthLast:W==="monthly"&&oe,untilDate:Tr||null,isActive:gn})};return d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},c?d.default.createElement(d.default.Fragment,null,d.default.createElement(a2,{className:"text-indigo-600",size:20})," 修改例行設定"):d.default.createElement(d.default.Fragment,null,d.default.createElement(un,{className:"text-indigo-600",size:20})," 新增例行工作")),d.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(r2,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Yt},"任務名稱（必填）"),d.default.createElement("input",{autoFocus:!0,value:s,onChange:H=>v(H.target.value),placeholder:"一句話說明工作內容",className:La})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Yt},"重複"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([H])=>!(c&&H==="none")).map(([H,ht])=>d.default.createElement("button",{key:H,type:"button",onClick:()=>D(H),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${W===H?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},ht))),W==="daily"&&d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:Tt,onChange:H=>_r(H.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),W==="weekly"&&d.default.createElement("div",{className:"flex gap-2 pt-1 flex-wrap"},[1,2,3,4,5,6,7].map(H=>d.default.createElement("button",{key:H,type:"button",onClick:()=>p2(H),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${ar.includes(H)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},fd[H%7]))),W==="monthly"&&d.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},d.default.createElement("select",{value:ka,onChange:H=>sn(H.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},d.default.createElement("option",{value:""},"不指定號數"),Array.from({length:31},(H,ht)=>ht+1).map(H=>d.default.createElement("option",{key:H,value:H},H," 號"))),d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:oe,onChange:H=>s2(H.target.checked),className:"accent-indigo-600"})," 每月最後一天"),ka&&Number(ka)>28&&!oe&&d.default.createElement("span",{className:"text-xs text-amber-600"},ka," 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」")),W!=="none"&&d.default.createElement("p",{className:"text-xs text-slate-400 pt-1"},"到時間系統會在凌晨自動建立當天的工作；修改週期只影響之後產生的。")),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Yt},W==="none"?"開始日期":"從哪一天開始"),d.default.createElement("input",{type:"date",value:k,onChange:H=>{p(H.target.value),w<H.target.value&&N(H.target.value)},className:La})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Yt},"開始時間（選填）"),d.default.createElement("input",{type:"time",value:x,onChange:H=>y(H.target.value),className:La})),W==="none"?d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Yt},"結束日期（到期日）"),d.default.createElement("input",{type:"date",value:w,min:k,onChange:H=>N(H.target.value),className:La})):d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Yt},"重複到哪一天（選填）"),d.default.createElement("input",{type:"date",value:Tr,min:k,onChange:H=>g2(H.target.value),className:La})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Yt},"結束時間（選填）"),d.default.createElement("input",{type:"time",value:g,onChange:H=>u(H.target.value),className:La}))),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Yt},"優先級"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["normal","普通"],["urgent","緊急"]].map(([H,ht])=>d.default.createElement("button",{key:H,type:"button",onClick:()=>L(H),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${f===H?H==="urgent"?"bg-white text-red-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},ht)))),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Yt},"會議對焦（週三會議挑議題用，可不選）"),d.default.createElement("select",{value:C,onChange:H=>S(H.target.value),className:La},d.default.createElement("option",{value:""},"不標記"),Object.entries(c2).map(([H,ht])=>d.default.createElement("option",{key:H,value:H},ht))))),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:Yt},"備註"),d.default.createElement("textarea",{value:j,onChange:H=>z(H.target.value),rows:2,className:La})),c&&d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:gn,onChange:H=>pn(H.target.checked),className:"accent-indigo-600"})," 啟用這個週期（取消勾選就是停止）"),ii&&d.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},d.default.createElement(ri,{size:16})," ",ii)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},d.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:ni,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},c?"儲存":W==="none"?"新增":"建立週期"))))},pf=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,d.useState)(bg()),[o,l]=(0,d.useState)(null),[c,s]=(0,d.useState)([]),[v,k]=(0,d.useState)(""),[p,x]=(0,d.useState)([]),[y,w]=(0,d.useState)(!0),[N,g]=(0,d.useState)({type:"",text:""}),[u,f]=(0,d.useState)(null),[L,j]=(0,d.useState)("mine"),[z,C]=(0,d.useState)("today"),[S,W]=(0,d.useState)(""),[D,Tt]=(0,d.useState)(""),[_r,ar]=(0,d.useState)(new Set),[rr,ka]=(0,d.useState)(""),[sn,oe]=(0,d.useState)(()=>{try{let h=localStorage.getItem("tbcWorkFont");return Cg[h]?h:"m"}catch{return"m"}}),s2=h=>{oe(h);try{localStorage.setItem("tbcWorkFont",h)}catch{}},[Tr,g2]=(0,d.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),gn=h=>g2(m=>{let b=m.includes(h)?m.filter(T=>T!==h):[...m,h];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(b))}catch{}return b}),[pn,ii]=(0,d.useState)(!1),[xa,Yt]=(0,d.useState)(""),[La,p2]=(0,d.useState)(""),[ni,H]=(0,d.useState)(!1),[ht,Er]=(0,d.useState)(null),[Tg,f2]=(0,d.useState)(!1),[kd,Eg]=(0,d.useState)([]),[oi,fn]=(0,d.useState)(null),[Nr,v2]=(0,d.useState)(null),[Ng,vn]=(0,d.useState)(null),[xd,k2]=(0,d.useState)(null),za=Cg[sn],er=za+3,Xt=i.date,Ld=(0,d.useRef)(null),kn=(0,d.useRef)(0),ir=(h,m)=>{g({type:h,text:m}),clearTimeout(Ld.current),Ld.current=setTimeout(()=>g({type:"",text:""}),3200)},Et=async(h,m)=>{let{data:b,error:T}=await a.rpc(h,m||{});if(T)throw T;return b},na=async(h,m)=>{try{let b=await h();return await x2(!0),m&&ir("success",typeof m=="function"?m(b):m),b}catch(b){ir("error",d2(b)),await x2(!0);return}},yt=(0,d.useMemo)(()=>{if(z==="today")return{start:Xt,end:Xt};if(z==="week"){let b=df(Xt);return{start:b,end:h2(b,6)}}let h=S||Xt,m=D||h;return h<=m?{start:h,end:m}:{start:m,end:h}},[z,S,D,Xt]);(0,d.useEffect)(()=>{let h=setInterval(()=>n(m=>{let b=bg();return b.date===m.date&&b.time===m.time?m:b}),3e4);return()=>clearInterval(h)},[]);let Dg=async()=>{try{let h=await Et("work_current_member"),m=await Et("work_list_people");return l(h),s(m||[]),ar(new Set((m||[]).map(b=>b.member_id))),k(""),!0}catch(h){return k(d2(h)),!1}},x2=async h=>{let m=++kn.current;h||w(!0);try{let b=r&&r.fetchAllData?r.fetchAllData:J=>J(),T=J=>{if(J&&J.error)throw J.error;return J&&J.data||[]},I=T(await b(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).lte("start_date",yt.end).gte("end_date",yt.start))),Qt=T(await b(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).lte("end_date",Xt).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),Kt=new Set(I.map(J=>J.id)),Ht=Qt.map(J=>J.id).filter(J=>!Kt.has(J)),B=[];if(Ht.length&&(B=T(await b(()=>a.from("work_items").select("*, work_assignees(*)").in("id",Ht)))),m!==kn.current)return;let Y=[];for(let J of[...I,...B]){let{work_assignees:At,...Ma}=J;for(let mn of At||[])Y.push({key:mn.id,item:{...Ma,assigneeCount:(At||[]).length},a:mn})}x(Y)}catch(b){m===kn.current&&ir("error","讀取失敗："+d2(b))}finally{m===kn.current&&!h&&w(!1)}};(0,d.useEffect)(()=>{Dg()},[]),(0,d.useEffect)(()=>{o&&x2(!1)},[o,yt.start,yt.end,Xt]),(0,d.useEffect)(()=>{z==="custom"&&!S&&(W(Xt),Tt(h2(Xt,6)))},[z]);let L2=(0,d.useMemo)(()=>{let h={};return c.forEach(m=>{h[m.member_id]={name:m.name,role:m.role}}),h},[c]),xf=o?L2[o]:null,{overdueRows:xn,groups:M2,total:Md}=(0,d.useMemo)(()=>{let h=p.map(B=>{let Y=B.a.status==="done",J=!!B.a.skipped_at,At=ia(B.item.end_time),Ma=!Y&&!J&&(B.item.end_date<i.date||B.item.end_date===i.date&&At&&At<i.time);return{...B,done:Y,skipped:J,overdue:Ma,isMine:B.a.member_id===o,isRoutine:B.item.assigneeCount===1&&B.item.creator_member_id===B.a.member_id,isRecurring:!!B.item.recurring_rule_id,person:L2[B.a.member_id]}}),m=rr.trim().toLowerCase(),b=B=>!m||[B.item.title,B.item.note,B.person&&B.person.name,c2[B.item.meeting_flag]].some(Y=>Y&&String(Y).toLowerCase().includes(m)),T=h.filter(B=>(L==="mine"?B.isMine:_r.has(B.a.member_id))&&b(B)),I=T.filter(B=>B.overdue).sort((B,Y)=>(B.item.end_date+ia(B.item.end_time)).localeCompare(Y.item.end_date+ia(Y.item.end_time))||(B.person&&B.person.name||"").localeCompare(Y.person&&Y.person.name||"")),Qt=T.filter(B=>!B.overdue&&B.item.start_date<=yt.end&&B.item.end_date>=yt.start),Kt={};Qt.forEach(B=>{(Kt[B.item.start_date]=Kt[B.item.start_date]||[]).push(B)});let Ht=Object.keys(Kt).sort().map(B=>{let Y=Kt[B].sort((At,Ma)=>{if(L==="mine")return At.a.sort_order-Ma.a.sort_order||String(At.a.created_at).localeCompare(String(Ma.a.created_at));let mn=ia(At.item.start_time)||"99:99",$g=ia(Ma.item.start_time)||"99:99";return mn.localeCompare($g)||(At.person&&At.person.name||"").localeCompare(Ma.person&&Ma.person.name||"")}),J=L==="mine"&&B>=yt.start&&!m;return{date:B,rows:Y,canMove:J}});return{overdueRows:I,groups:Ht,total:I.length+Qt.length}},[p,i,o,L,_r,yt,L2,rr]),li=Bg.filter(h=>h.locked||!Tr.includes(h.id)),md=`48px ${li.map(h=>h.w).join(" ")}`,Og=48+li.reduce((h,m)=>h+m.min,0)+8*li.length+16,le=(h,m,b)=>na(()=>{let T={...h.item,...m};return Et("work_update_routine",{p_item_id:T.id,p_title:T.title,p_start_date:T.start_date,p_start_time:T.start_time||null,p_end_date:T.end_date,p_end_time:T.end_time||null,p_priority:T.priority||"normal",p_note:T.note||null,p_meeting_flag:T.meeting_flag||null})},b),Ug=(h,m,b)=>{if(!m||!b){ir("error","日期必填");return}let T=m,I=b;if(m!==h.item.start_date&&b===h.item.end_date&&(I=h2(m,Hg(h.item.end_date,h.item.start_date))),I<T){ir("error","結束日期不能早於開始日期");return}let Qt=!(T<=yt.end&&I>=yt.start);return le(h,{start_date:T,end_date:I},Qt?`已改到 ${Va(T)}（目前顯示範圍看不到，切換範圍就會出現）`:null)},Zg=(h,m,b)=>le(h,{start_time:m||null,end_time:b||null}),qg=(h,m)=>{if(!m){ir("error","任務名稱不能空白");return}return le(h,{title:m})},Gg=h=>na(()=>Et("work_complete",{p_item_id:h.item.id,p_note:null}),"已完成"),Yg=h=>na(()=>Et("work_skip",{p_item_id:h.item.id}),"已跳過這次"),Ln=(h,m)=>na(()=>Et("work_move",{p_item_id:h.item.id,p_where:m})),Xg=h=>na(()=>Et("work_copy",{p_item_id:h.item.id}),"已複製到今天，狀態重設為待處理"),Qg=h=>f({title:"警告",confirmText:"刪除",message:`確定要刪除「${h.item.title}」嗎？
（已經完成或跳過過的，會改成「取消」並保留紀錄）`,onConfirm:async()=>{f(null),await na(()=>Et("work_delete",{p_item_id:h.item.id}),m=>m==="canceled"?"這筆已有進度紀錄，已改為取消並保留紀錄":"已刪除")}}),yd=async()=>{let h=xa.trim();if(!h||ni)return;H(!0);let m=La||Xt,b=await na(()=>Et("work_create_routine",{p_title:h,p_start_date:m,p_end_date:m}));if(H(!1),b){Yt("");let T=m<=yt.end&&m>=yt.start;ir("success",T?"已新增":`已新增到 ${Va(m)}（目前顯示範圍看不到，切換範圍就會出現）`)}},Kg=async h=>{H(!0);let m;ht.mode==="editRule"?(m=await na(()=>Et("work_update_rule",{p_rule_id:ht.rule.id,p_title:h.title,p_freq:h.repeat,p_weekdays_only:h.weekdaysOnly,p_week_days:h.weekDays,p_month_day:h.monthDay,p_month_last_day:h.monthLast,p_start_date:h.startDate,p_until_date:h.untilDate,p_start_time:h.startTime,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:h.flag,p_is_active:h.isActive}),"例行設定已儲存（只影響之後產生的工作）"),m!==void 0&&await m2()):h.repeat==="none"?m=await na(()=>Et("work_create_routine",{p_title:h.title,p_start_date:h.startDate,p_start_time:h.startTime,p_end_date:h.endDate,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:h.flag}),"已新增"):m=await na(()=>Et("work_create_rule",{p_title:h.title,p_freq:h.repeat,p_weekdays_only:h.weekdaysOnly,p_week_days:h.weekDays,p_month_day:h.monthDay,p_month_last_day:h.monthLast,p_start_date:h.startDate,p_until_date:h.untilDate,p_start_time:h.startTime,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:h.flag}),"已建立例行設定，之後會在凌晨自動出現在清單"),H(!1),m!==void 0&&Er(null)},m2=async()=>{try{let{data:h,error:m}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(m)throw m;Eg(h||[])}catch(h){ir("error","讀取例行設定失敗："+d2(h))}},Rg=async()=>{f2(!0),await m2()},Jg=async h=>{await na(()=>Et("work_update_rule",{p_rule_id:h.id,p_title:h.title,p_freq:h.freq,p_weekdays_only:h.weekdays_only,p_week_days:h.week_days,p_month_day:h.month_day,p_month_last_day:h.month_last_day,p_start_date:h.start_date,p_until_date:h.until_date,p_start_time:h.start_time,p_end_time:h.end_time,p_priority:h.priority,p_note:h.note,p_meeting_flag:h.meeting_flag,p_is_active:!h.is_active}),h.is_active?"已停止這個週期":"已重新啟用")!==void 0&&await m2()},Fg=async(h,m)=>{let b=Nr;if(v2(null),k2(null),vn(null),!b||b.date!==h.date||b.key===m.key)return;let T=h.rows.filter(Ht=>!Ht.overdue),I=T.findIndex(Ht=>Ht.key===b.key),Qt=T.findIndex(Ht=>Ht.key===m.key),Kt=h.rows.find(Ht=>Ht.key===b.key);!Kt||I<0||Qt<0||await na(()=>Et("work_move_to",{p_item_id:Kt.item.id,p_target_item_id:m.item.id,p_after:I<Qt}))},di="flex items-center bg-slate-100 p-1 rounded-full shrink-0",Dr=h=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${h?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,Ca=oi?[...xn,...M2.flatMap(h=>h.rows)].find(h=>h.key===oi.key):null,Mn=Ca?M2.find(h=>h.rows.some(m=>m.key===Ca.key)):null,wd=(h,m)=>{let b=h.isMine&&h.isRoutine,T=m?m.rows.filter(B=>!B.overdue):[],I=!!m&&m.canMove&&b&&!h.overdue,Qt=xd===h.key&&Nr&&Nr.key!==h.key,Kt=h.done||h.skipped,Ht=B=>{switch(B.id){case"title":return d.default.createElement("div",{key:B.id,className:"min-w-0"},d.default.createElement("div",{className:"flex items-start gap-1.5 flex-wrap"},d.default.createElement("div",{className:"min-w-0 flex-1"},d.default.createElement(jg,{value:h.item.title,placeholder:"任務名稱",canEdit:b,onSave:Y=>qg(h,Y),className:`font-medium ${Kt?"text-slate-400 line-through":h.overdue?"text-red-600":"text-slate-900"}`})),d.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},h.overdue&&d.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},d.default.createElement(sd,{size:Math.round(za*.8)})," 逾期"),h.isRoutine&&d.default.createElement("span",{className:"text-[0.7em] px-1.5 py-0.5 rounded border border-violet-100 bg-violet-50 text-violet-600 font-bold"},"例行"),h.isRecurring&&d.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},d.default.createElement(a2,{size:Math.round(za*.95)})))));case"who":return d.default.createElement("div",{key:B.id,className:"min-w-0"},d.default.createElement(sf,{person:h.person,size:er}));case"date":{let Y=h.item.start_date!==h.item.end_date;return d.default.createElement("div",{key:B.id,className:`min-w-0 ${h.overdue?"text-red-600":"text-slate-700"}`},d.default.createElement(Wg,{type:"date",a:h.item.start_date,b:h.item.end_date,canEdit:b,onSave:(J,At)=>Ug(h,J,At)},Y?`${Va(h.item.start_date)} → ${Va(h.item.end_date)}`:Va(h.item.start_date)))}case"time":{let Y=ia(h.item.start_time),J=ia(h.item.end_time);return d.default.createElement("div",{key:B.id,className:"min-w-0 text-slate-700"},d.default.createElement(Wg,{type:"time",a:Y,b:J,canEdit:b,onSave:(At,Ma)=>Zg(h,At,Ma)},Y||J?`${Y||"—"} ~ ${J||"—"}`:d.default.createElement("span",{className:"text-slate-300"},b?"加時間":"")))}case"hours":return d.default.createElement("div",{key:B.id,className:"text-slate-500 text-[0.9em]"},hf(h.item)||"");case"priority":return d.default.createElement("div",{key:B.id},d.default.createElement("button",{type:"button",disabled:!b,onClick:()=>le(h,{priority:h.item.priority==="urgent"?"normal":"urgent"}),title:b?"點一下切換":"",className:`text-[0.75em] px-2 py-0.5 rounded border font-bold ${h.item.priority==="urgent"?"bg-red-50 border-red-100 text-red-600":"bg-slate-50 border-slate-200 text-slate-400"} ${b?"hover:brightness-95 cursor-pointer":"cursor-default"}`},h.item.priority==="urgent"?"緊急":"普通"));case"flag":return d.default.createElement("div",{key:B.id,className:"min-w-0"},b?d.default.createElement("select",{value:h.item.meeting_flag||"",onChange:Y=>le(h,{meeting_flag:Y.target.value||null}),className:`max-w-full text-[0.8em] rounded border px-1.5 py-1 outline-none cursor-pointer ${h.item.meeting_flag?"bg-violet-50 border-violet-100 text-violet-600 font-bold":"bg-transparent border-transparent text-slate-300 hover:border-slate-200"}`},d.default.createElement("option",{value:""},"—"),Object.entries(c2).map(([Y,J])=>d.default.createElement("option",{key:Y,value:Y},J))):h.item.meeting_flag?d.default.createElement("span",{className:"text-[0.8em] px-2 py-0.5 rounded border bg-violet-50 border-violet-100 text-violet-600 font-bold"},c2[h.item.meeting_flag]):null);case"note":return d.default.createElement("div",{key:B.id,className:"min-w-0"},d.default.createElement(jg,{value:h.item.note,placeholder:"備註",canEdit:b,onSave:Y=>le(h,{note:Y||null}),className:"text-slate-600 text-[0.92em]"}));case"status":return d.default.createElement("div",{key:B.id,className:"flex items-center gap-1.5 flex-wrap"},h.done?d.default.createElement("span",{className:"inline-flex items-center gap-1 text-[0.8em] px-2 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold"},d.default.createElement(ud,{size:Math.round(za)})," 已完成"):h.skipped?d.default.createElement("span",{className:"inline-flex items-center gap-1 text-[0.8em] px-2 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-500 font-bold"},d.default.createElement(gg,{size:Math.round(za)})," 已跳過"):b?d.default.createElement(d.default.Fragment,null,d.default.createElement("button",{onClick:()=>Gg(h),className:"h-8 px-3 rounded-full text-[0.8em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1"},d.default.createElement(ng,{size:Math.round(za)})," 完成"),h.isRecurring&&d.default.createElement("button",{onClick:()=>Yg(h),title:"放假或這次沒做",className:"h-8 px-2.5 rounded-full text-[0.8em] font-medium text-slate-500 bg-white border border-slate-200 hover:bg-slate-50 transition-colors"},"跳過這次")):d.default.createElement("span",{className:"text-[0.8em] px-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-500 font-medium"},nf[h.a.status]));default:return null}};return d.default.createElement("div",{key:h.key,draggable:I&&Ng===h.key,onDragStart:B=>{v2({key:h.key,date:m.date}),B.dataTransfer.effectAllowed="move";try{B.dataTransfer.setData("text/plain",h.key)}catch{}},onDragOver:B=>{Nr&&m&&Nr.date===m.date&&!h.overdue&&(B.preventDefault(),xd!==h.key&&k2(h.key))},onDrop:B=>{B.preventDefault(),m&&Fg(m,h)},onDragEnd:()=>{v2(null),k2(null),vn(null)},className:`group grid items-start gap-x-2 px-2 py-2.5 border-b border-slate-100 last:border-b-0 transition-colors
                    ${h.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Nr&&Nr.key===h.key?"opacity-40":""}
                    ${Qt?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:md}},d.default.createElement("div",{className:"flex items-center gap-0.5 pt-0.5"},I?d.default.createElement("span",{onMouseDown:()=>vn(h.key),onMouseUp:()=>vn(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},d.default.createElement(ig,{size:er})):d.default.createElement("span",{style:{width:er}}),b?d.default.createElement("button",{onClick:B=>{let Y=B.currentTarget.getBoundingClientRect();fn({key:h.key,x:Math.min(Y.left,window.innerWidth-220),y:Math.min(Y.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},d.default.createElement(eg,{size:er})):d.default.createElement("span",{style:{width:er+8}})),li.map(Ht))};return d.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:za}},d.default.createElement(l2,{active:"work",shell:e}),d.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},d.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},d.default.createElement("h1",{className:"font-semibold text-slate-900 truncate",style:{fontSize:za*1.45}},"工作日誌"),d.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},d.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},d.default.createElement(kg,{size:16,className:"text-slate-400 shrink-0"}),d.default.createElement("input",{type:"text",value:rr,onChange:h=>ka(h.target.value),onKeyDown:h=>{h.key==="Escape"&&ka("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),rr&&d.default.createElement("button",{type:"button",onClick:()=>ka(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},d.default.createElement(r2,{size:14}))),d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>ii(h=>!h),className:`${di} !p-1.5`},d.default.createElement("span",{className:Dr(pn)},d.default.createElement(sg,{size:14,className:"text-slate-500"})," 欄位")),pn&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>ii(!1)}),d.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},d.default.createElement("p",{className:"text-[0.75em] text-slate-400 px-2 py-1"},"勾選要顯示的欄位（只記在這台電腦）"),Bg.map(h=>d.default.createElement("label",{key:h.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${h.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},d.default.createElement("input",{type:"checkbox",disabled:h.locked,checked:h.locked||!Tr.includes(h.id),onChange:()=>gn(h.id),className:"accent-indigo-600"}),h.label,h.locked&&d.default.createElement(gd,{size:11})))))),d.default.createElement("div",{className:di},d.default.createElement("button",{onClick:Rg,className:Dr(!1)},d.default.createElement(un,{size:14,className:"text-slate-500"}),"例行設定")),d.default.createElement("div",{className:di,title:"文字大小"},[["s","小",12],["m","標準",15],["l","大",19]].map(([h,m,b])=>d.default.createElement("button",{key:h,onClick:()=>s2(h),title:m,"aria-label":`文字${m}`,className:`h-8 w-9 rounded-md font-bold leading-none transition-all ${sn===h?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:b}},"A"))))),v?d.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},d.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},d.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},d.default.createElement(gd,{size:30})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),d.default.createElement("p",{className:"text-slate-500 font-normal"},v),d.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧師、行政與系統管理員。"))):d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 z-10 shrink-0 space-y-3"},d.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},d.default.createElement("div",{className:di},d.default.createElement("button",{onClick:()=>j("mine"),className:Dr(L==="mine")},"我的"),d.default.createElement("button",{onClick:()=>j("all"),className:Dr(L==="all")},"全部")),d.default.createElement("div",{className:di},d.default.createElement("button",{onClick:()=>C("today"),className:Dr(z==="today")},"今日"),d.default.createElement("button",{onClick:()=>C("week"),className:Dr(z==="week")},"本週"),d.default.createElement("button",{onClick:()=>C("custom"),className:Dr(z==="custom")},"自訂")),z==="custom"&&d.default.createElement("div",{className:"flex items-center gap-2"},d.default.createElement("input",{type:"date",value:S,onChange:h=>W(h.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),d.default.createElement("span",{className:"text-slate-400"},"～"),d.default.createElement("input",{type:"date",value:D,min:S,onChange:h=>Tt(h.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),d.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},yt.start===yt.end?Va(yt.start):`${Va(yt.start)} ～ ${Va(yt.end)}`,d.default.createElement("span",{className:"ml-3"},"共 ",Md," 筆"))),L==="all"&&d.default.createElement("div",{className:"flex items-center gap-2 flex-wrap"},d.default.createElement("button",{onClick:()=>ar(new Set(c.map(h=>h.member_id))),className:"text-[0.8em] px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"},"全選"),d.default.createElement("button",{onClick:()=>ar(new Set),className:"text-[0.8em] px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"},"全不選"),c.map(h=>{let m=_r.has(h.member_id),b=n2[h.role]||ai;return d.default.createElement("button",{key:h.member_id,onClick:()=>ar(T=>{let I=new Set(T);return I.has(h.member_id)?I.delete(h.member_id):I.add(h.member_id),I}),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[0.85em] font-medium transition-all ${m?"bg-indigo-50 border-indigo-200 text-indigo-700":"bg-white border-slate-200 text-slate-400 hover:border-slate-300"}`},d.default.createElement(b,{size:er-2,className:m&&o2.includes(h.role)?"text-amber-500":""}),h.name)})),d.default.createElement("div",{className:"bg-white p-2 rounded-xl shadow-soft border border-slate-100 flex items-center gap-2 transition-all focus-within:ring-2 focus-within:ring-indigo-500/20"},d.default.createElement(un,{className:"text-slate-400 ml-2 shrink-0",size:20}),d.default.createElement("input",{type:"text",value:xa,onChange:h=>Yt(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.nativeEvent.isComposing&&yd()},placeholder:"新增一件自己要做的事，輸入後按 Enter",className:"flex-1 min-w-0 py-2.5 bg-transparent outline-none font-normal text-slate-800"}),d.default.createElement("input",{type:"date",value:La||Xt,onChange:h=>p2(h.target.value),title:"日期（預設今天）",className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.85em] text-slate-700"}),d.default.createElement("button",{onClick:()=>Er({mode:"create"}),className:"h-9 px-4 rounded-full text-[0.85em] font-medium text-slate-600 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors whitespace-nowrap"},"詳細／重複"),d.default.createElement("button",{onClick:yd,disabled:!xa.trim()||ni,className:"h-9 px-5 rounded-full text-[0.85em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:opacity-40 whitespace-nowrap"},"+新增"))),d.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},d.default.createElement("div",{className:"space-y-4",style:{minWidth:Og}},d.default.createElement("div",{className:"grid gap-x-2 px-2 py-2 text-[0.78em] font-medium text-slate-400 sticky top-0 z-10 bg-slate-50",style:{gridTemplateColumns:md}},d.default.createElement("span",null),li.map(h=>d.default.createElement("span",{key:h.id},h.label))),y&&p.length===0?d.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):Md===0?d.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},rr.trim()?`找不到符合「${rr.trim()}」的工作（只搜尋目前顯示的範圍）`:"這段時間沒有工作。從上面輸入一件事，按 Enter 就能新增。"):d.default.createElement(d.default.Fragment,null,xn.length>0&&d.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},d.default.createElement(sd,{size:er})," 逾期未完成 ",d.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},xn.length)),xn.map(h=>wd(h,null))),M2.map(h=>{let m=cf(h.date,Xt);return d.default.createElement("div",{key:h.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},d.default.createElement("span",{className:`font-bold ${m.tag==="今天"?"text-indigo-600":"text-slate-800"}`},m.text),m.tag&&d.default.createElement("span",{className:`text-[0.75em] px-2 py-0.5 rounded font-bold ${m.tag==="今天"?"bg-indigo-50 text-indigo-600 border border-indigo-100":"bg-slate-100 text-slate-500"}`},m.tag),d.default.createElement("span",{className:"text-[0.8em] text-slate-400"},h.rows.length," 筆")),h.rows.map(b=>wd(b,h)))}))))),oi&&Ca&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>fn(null),onContextMenu:h=>{h.preventDefault(),fn(null)}}),d.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:oi.x,top:oi.y,fontSize:za}},(()=>{let h=Mn?Mn.rows.filter(I=>!I.overdue):[],m=h.findIndex(I=>I.key===Ca.key),b=!!Mn&&Mn.canMove&&m>=0,T=(I,Qt,Kt,Ht,B)=>d.default.createElement("button",{disabled:Ht,onClick:()=>{fn(null),Kt()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${B?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},d.default.createElement(I,{size:er-1}),Qt);return d.default.createElement(d.default.Fragment,null,d.default.createElement("p",{className:"px-3 pt-1 pb-0.5 text-[0.72em] text-slate-400 font-medium"},"搬移",!b&&"（這裡不能搬移）"),T(hg,"移到頂端",()=>Ln(Ca,"top"),!b||m===0),T(dg,"上一行",()=>Ln(Ca,"up"),!b||m===0),T(cg,"下一行",()=>Ln(Ca,"down"),!b||m===h.length-1),T(ug,"移到底部",()=>Ln(Ca,"bottom"),!b||m===h.length-1),d.default.createElement("div",{className:"h-px bg-slate-100 my-1"}),T(og,"複製到今天",()=>Xg(Ca)),T(lg,"刪除",()=>Qg(Ca),!1,!0))})())),ht&&d.default.createElement(gf,{key:ht.mode+(ht.rule?ht.rule.id:""),mode:ht.mode,initial:ht.rule,presetRepeat:ht.preset,today:Xt,busy:ni,onClose:()=>Er(null),onSubmit:Kg}),Tg&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},d.default.createElement(a2,{className:"text-indigo-600",size:20})," 我的例行設定"),d.default.createElement("button",{onClick:()=>f2(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(r2,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},d.default.createElement("button",{onClick:()=>{f2(!1),Er({mode:"create",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},d.default.createElement(un,{size:16}),"新增例行設定"),d.default.createElement("div",{className:"bg-sky-50 p-4 rounded-xl border border-sky-100 text-sm font-normal text-sky-700 leading-relaxed"},"例行設定像手機的重複鬧鐘：設定一次，之後每天凌晨系統會自動把當天的工作放進清單。修改只影響之後產生的。"),kd.length===0?d.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"還沒有例行設定。按上面的「+ 新增例行設定」建立。"):kd.map(h=>d.default.createElement("div",{key:h.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${h.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},d.default.createElement("div",{className:"min-w-0"},d.default.createElement("div",{className:`font-medium truncate ${h.is_active?"text-slate-900":"text-slate-400"}`},h.title),d.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},uf(h),h.start_time?`　${ia(h.start_time)}${h.end_time?"~"+ia(h.end_time):""}`:"",h.until_date?`　到 ${Va(h.until_date)}`:"",h.is_active?"":"　（已停止）")),d.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},d.default.createElement("button",{onClick:()=>Er({mode:"editRule",rule:h}),className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},d.default.createElement(vg,{size:16})),d.default.createElement("button",{onClick:()=>Jg(h),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${h.is_active?"bg-amber-50 text-amber-600 hover:bg-amber-100":"bg-emerald-50 text-emerald-600 hover:bg-emerald-100"}`,title:h.is_active?"停止":"重新啟用"},h.is_active?d.default.createElement(pg,{size:16}):d.default.createElement(fg,{size:16})))))))),N.text&&d.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},d.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${N.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},d.default.createElement("div",{className:"shrink-0 mt-0.5"},N.type==="success"?d.default.createElement(ud,{size:18}):d.default.createElement(ri,{size:18})),d.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},N.text))),u&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"p-8 text-center"},d.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},d.default.createElement(ri,{size:32})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),d.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},d.default.createElement("button",{onClick:()=>f(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},Ag=pf;var Vg=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
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
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-amber-600: oklch(66.6% 0.179 58.318);
    --color-emerald-50: oklch(97.9% 0.021 166.113);
    --color-emerald-100: oklch(95% 0.052 163.051);
    --color-emerald-600: oklch(59.6% 0.145 163.225);
    --color-sky-50: oklch(97.7% 0.013 236.62);
    --color-sky-100: oklch(95.1% 0.026 236.824);
    --color-sky-700: oklch(50% 0.134 242.749);
    --color-indigo-50: #eef6fd;
    --color-indigo-100: #d9eafb;
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
    --leading-relaxed: 1.625;
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
  .top-24 {
    top: calc(var(--spacing) * 24);
  }
  .top-full {
    top: 100%;
  }
  .right-0 {
    right: 0px;
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
  .mt-10 {
    margin-top: calc(var(--spacing) * 10);
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
  .gap-x-2 {
    column-gap: calc(var(--spacing) * 2);
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
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .border-\\[\\#7e00c8\\] {
    border-color: #7e00c8;
  }
  .border-emerald-100 {
    border-color: var(--color-emerald-100);
  }
  .border-indigo-100 {
    border-color: var(--color-indigo-100);
  }
  .border-indigo-200 {
    border-color: var(--color-indigo-200);
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
  .border-sky-100 {
    border-color: var(--color-sky-100);
  }
  .border-slate-100 {
    border-color: var(--color-slate-100);
  }
  .border-slate-200 {
    border-color: var(--color-slate-200);
  }
  .border-transparent {
    border-color: transparent;
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
  .pt-0\\.5 {
    padding-top: calc(var(--spacing) * 0.5);
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
  .pb-0\\.5 {
    padding-bottom: calc(var(--spacing) * 0.5);
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
  .text-\\[0\\.78em\\] {
    font-size: 0.78em;
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
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
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
  .text-emerald-600 {
    color: var(--color-emerald-600);
  }
  .text-indigo-600 {
    color: var(--color-indigo-600);
  }
  .text-indigo-700 {
    color: var(--color-indigo-700);
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
  .focus-within\\:ring-indigo-500\\/20:focus-within {
    --tw-ring-color: color-mix(in srgb, #1a7fd9 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-ring-color: color-mix(in oklab, var(--color-indigo-500) 20%, transparent);
    }
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
    .hover\\:border-slate-200:hover {
      border-color: var(--color-slate-200);
    }
    .hover\\:border-slate-300:hover {
      border-color: var(--color-slate-300);
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
`;var ff="https://jcepavwocdujoeoqxvsd.supabase.co",vf="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",vd=document.createElement("style");vd.id="tbc-one-css";vd.textContent=Vg;document.head.appendChild(vd);var ei=window.__TBC_SB||window.supabase.createClient(ff,vf),kf=({page:t})=>{let[a,r]=(0,Wt.useState)(void 0),[e,i]=(0,Wt.useState)({status:"loading",name:"",role:"member"});(0,Wt.useEffect)(()=>{let c=!0;ei.auth.getSession().then(({data:v})=>{c&&r(v.session||null)});let{data:s}=ei.auth.onAuthStateChange((v,k)=>{c&&r(k||null)});return()=>{c=!1,s&&s.subscription&&s.subscription.unsubscribe()}},[]);let n=a&&a.user&&a.user.id;(0,Wt.useEffect)(()=>{if(!a)return;let c=!0;return mg(ei,a).then(s=>{c&&i(s)}),()=>{c=!1}},[n]);let o=async()=>{try{await ei.auth.signOut()}catch{}r(null),i({status:"loading",name:"",role:"member"})};if(a===void 0)return Wt.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return Wt.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},Wt.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},Wt.default.createElement(e2,{size:30})),Wt.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),Wt.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),Wt.default.createElement(yg,{supabase:ei}));let l={identity:e,onLogout:o};return t==="work"?Wt.default.createElement(Ag,{session:a,supabase:ei,utils:{},shell:l}):Wt.default.createElement(wg,{shell:l})},zg=document.getElementById("root");(0,_g.createRoot)(zg).render(Wt.default.createElement(kf,{page:zg.getAttribute("data-page")||"home"}));})();
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
