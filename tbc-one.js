(()=>{var $g=Object.create;var wd=Object.defineProperty;var Ig=Object.getOwnPropertyDescriptor;var Pg=Object.getOwnPropertyNames;var t4=Object.getPrototypeOf,a4=Object.prototype.hasOwnProperty;var ir=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var r4=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of Pg(a))!a4.call(t,i)&&i!==r&&wd(t,i,{get:()=>a[i],enumerable:!(e=Ig(a,i))||e.enumerable});return t};var Dr=(t,a,r)=>(r=t!=null?$g(t4(t)):{},r4(a||!t||!t.__esModule?wd(r,"default",{value:t,enumerable:!0}):r,t));var _d=ir(_=>{"use strict";var w2=Symbol.for("react.transitional.element"),e4=Symbol.for("react.portal"),i4=Symbol.for("react.fragment"),n4=Symbol.for("react.strict_mode"),o4=Symbol.for("react.profiler"),l4=Symbol.for("react.consumer"),d4=Symbol.for("react.context"),c4=Symbol.for("react.forward_ref"),h4=Symbol.for("react.suspense"),u4=Symbol.for("react.memo"),Wd=Symbol.for("react.lazy"),s4=Symbol.for("react.activity"),Cd=Symbol.iterator;function g4(t){return t===null||typeof t!="object"?null:(t=Cd&&t[Cd]||t["@@iterator"],typeof t=="function"?t:null)}var Hd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sd=Object.assign,Ad={};function ue(t,a,r){this.props=t,this.context=a,this.refs=Ad,this.updater=r||Hd}ue.prototype.isReactComponent={};ue.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};ue.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vd(){}Vd.prototype=ue.prototype;function C2(t,a,r){this.props=t,this.context=a,this.refs=Ad,this.updater=r||Hd}var B2=C2.prototype=new Vd;B2.constructor=C2;Sd(B2,ue.prototype);B2.isPureReactComponent=!0;var Bd=Array.isArray;function y2(){}var at={H:null,A:null,T:null,S:null},zd=Object.prototype.hasOwnProperty;function b2(t,a,r){var e=r.ref;return{$$typeof:w2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function p4(t,a){return b2(t.type,a,t.props)}function j2(t){return typeof t=="object"&&t!==null&&t.$$typeof===w2}function f4(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var bd=/\/+/g;function m2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?f4(""+t.key):a.toString(36)}function v4(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(y2,y2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function he(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case w2:case e4:o=!0;break;case Wd:return o=t._init,he(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+m2(t,0):e,Bd(i)?(r="",o!=null&&(r=o.replace(bd,"$&/")+"/"),he(i,a,r,"",function(s){return s})):i!=null&&(j2(i)&&(i=p4(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(bd,"$&/")+"/")+o)),a.push(i)),1;o=0;var l=e===""?".":e+":";if(Bd(t))for(var c=0;c<t.length;c++)e=t[c],n=l+m2(e,c),o+=he(e,a,r,n,i);else if(c=g4(t),typeof c=="function")for(t=c.call(t),c=0;!(e=t.next()).done;)e=e.value,n=l+m2(e,c++),o+=he(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return he(v4(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function Bn(t,a,r){if(t==null)return t;var e=[],i=0;return he(t,e,"","",function(n){return a.call(r,n,i++)}),e}function k4(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var jd=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},x4={map:Bn,forEach:function(t,a,r){Bn(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return Bn(t,function(){a++}),a},toArray:function(t){return Bn(t,function(a){return a})||[]},only:function(t){if(!j2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_.Activity=s4;_.Children=x4;_.Component=ue;_.Fragment=i4;_.Profiler=o4;_.PureComponent=C2;_.StrictMode=n4;_.Suspense=h4;_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=at;_.__COMPILER_RUNTIME={__proto__:null,c:function(t){return at.H.useMemoCache(t)}};_.cache=function(t){return function(){return t.apply(null,arguments)}};_.cacheSignal=function(){return null};_.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=Sd({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!zd.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),l=0;l<n;l++)o[l]=arguments[l+2];e.children=o}return b2(t.type,i,e)};_.createContext=function(t){return t={$$typeof:d4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:l4,_context:t},t};_.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)zd.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return b2(t,n,i)};_.createRef=function(){return{current:null}};_.forwardRef=function(t){return{$$typeof:c4,render:t}};_.isValidElement=j2;_.lazy=function(t){return{$$typeof:Wd,_payload:{_status:-1,_result:t},_init:k4}};_.memo=function(t,a){return{$$typeof:u4,type:t,compare:a===void 0?null:a}};_.startTransition=function(t){var a=at.T,r={};at.T=r;try{var e=t(),i=at.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(y2,jd)}catch(n){jd(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),at.T=a}};_.unstable_useCacheRefresh=function(){return at.H.useCacheRefresh()};_.use=function(t){return at.H.use(t)};_.useActionState=function(t,a,r){return at.H.useActionState(t,a,r)};_.useCallback=function(t,a){return at.H.useCallback(t,a)};_.useContext=function(t){return at.H.useContext(t)};_.useDebugValue=function(){};_.useDeferredValue=function(t,a){return at.H.useDeferredValue(t,a)};_.useEffect=function(t,a){return at.H.useEffect(t,a)};_.useEffectEvent=function(t){return at.H.useEffectEvent(t)};_.useId=function(){return at.H.useId()};_.useImperativeHandle=function(t,a,r){return at.H.useImperativeHandle(t,a,r)};_.useInsertionEffect=function(t,a){return at.H.useInsertionEffect(t,a)};_.useLayoutEffect=function(t,a){return at.H.useLayoutEffect(t,a)};_.useMemo=function(t,a){return at.H.useMemo(t,a)};_.useOptimistic=function(t,a){return at.H.useOptimistic(t,a)};_.useReducer=function(t,a,r){return at.H.useReducer(t,a,r)};_.useRef=function(t){return at.H.useRef(t)};_.useState=function(t){return at.H.useState(t)};_.useSyncExternalStore=function(t,a,r){return at.H.useSyncExternalStore(t,a,r)};_.useTransition=function(){return at.H.useTransition()};_.version="19.2.8"});var za=ir((mf,Td)=>{"use strict";Td.exports=_d()});var Xd=ir(nt=>{"use strict";function A2(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<bn(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Ca(t){return t.length===0?null:t[0]}function Wn(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,l=t[o],c=o+1,s=t[c];if(0>bn(l,r))c<i&&0>bn(s,l)?(t[e]=s,t[c]=r,e=c):(t[e]=l,t[o]=r,e=o);else if(c<i&&0>bn(s,r))t[e]=s,t[c]=r,e=c;else break t}}return a}function bn(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}nt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Ed=performance,nt.unstable_now=function(){return Ed.now()}):(W2=Date,Nd=W2.now(),nt.unstable_now=function(){return W2.now()-Nd});var Ed,W2,Nd,_a=[],nr=[],L4=1,oa=null,At=3,V2=!1,li=!1,di=!1,z2=!1,Ud=typeof setTimeout=="function"?setTimeout:null,Zd=typeof clearTimeout=="function"?clearTimeout:null,Dd=typeof setImmediate<"u"?setImmediate:null;function jn(t){for(var a=Ca(nr);a!==null;){if(a.callback===null)Wn(nr);else if(a.startTime<=t)Wn(nr),a.sortIndex=a.expirationTime,A2(_a,a);else break;a=Ca(nr)}}function _2(t){if(di=!1,jn(t),!li)if(Ca(_a)!==null)li=!0,ge||(ge=!0,se());else{var a=Ca(nr);a!==null&&T2(_2,a.startTime-t)}}var ge=!1,ci=-1,qd=5,Gd=-1;function Yd(){return z2?!0:!(nt.unstable_now()-Gd<qd)}function H2(){if(z2=!1,ge){var t=nt.unstable_now();Gd=t;var a=!0;try{t:{li=!1,di&&(di=!1,Zd(ci),ci=-1),V2=!0;var r=At;try{a:{for(jn(t),oa=Ca(_a);oa!==null&&!(oa.expirationTime>t&&Yd());){var e=oa.callback;if(typeof e=="function"){oa.callback=null,At=oa.priorityLevel;var i=e(oa.expirationTime<=t);if(t=nt.unstable_now(),typeof i=="function"){oa.callback=i,jn(t),a=!0;break a}oa===Ca(_a)&&Wn(_a),jn(t)}else Wn(_a);oa=Ca(_a)}if(oa!==null)a=!0;else{var n=Ca(nr);n!==null&&T2(_2,n.startTime-t),a=!1}}break t}finally{oa=null,At=r,V2=!1}a=void 0}}finally{a?se():ge=!1}}}var se;typeof Dd=="function"?se=function(){Dd(H2)}:typeof MessageChannel<"u"?(S2=new MessageChannel,Od=S2.port2,S2.port1.onmessage=H2,se=function(){Od.postMessage(null)}):se=function(){Ud(H2,0)};var S2,Od;function T2(t,a){ci=Ud(function(){t(nt.unstable_now())},a)}nt.unstable_IdlePriority=5;nt.unstable_ImmediatePriority=1;nt.unstable_LowPriority=4;nt.unstable_NormalPriority=3;nt.unstable_Profiling=null;nt.unstable_UserBlockingPriority=2;nt.unstable_cancelCallback=function(t){t.callback=null};nt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qd=0<t?Math.floor(1e3/t):5};nt.unstable_getCurrentPriorityLevel=function(){return At};nt.unstable_next=function(t){switch(At){case 1:case 2:case 3:var a=3;break;default:a=At}var r=At;At=a;try{return t()}finally{At=r}};nt.unstable_requestPaint=function(){z2=!0};nt.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=At;At=t;try{return a()}finally{At=r}};nt.unstable_scheduleCallback=function(t,a,r){var e=nt.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:L4++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,A2(nr,t),Ca(_a)===null&&t===Ca(nr)&&(di?(Zd(ci),ci=-1):di=!0,T2(_2,r-e))):(t.sortIndex=i,A2(_a,t),li||V2||(li=!0,ge||(ge=!0,se()))),t};nt.unstable_shouldYield=Yd;nt.unstable_wrapCallback=function(t){var a=At;return function(){var r=At;At=a;try{return t.apply(this,arguments)}finally{At=r}}}});var Kd=ir((wf,Qd)=>{"use strict";Qd.exports=Xd()});var Jd=ir(zt=>{"use strict";var M4=za();function Rd(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function or(){}var Vt={d:{f:or,r:function(){throw Error(Rd(522))},D:or,C:or,L:or,m:or,X:or,S:or,M:or},p:0,findDOMNode:null},m4=Symbol.for("react.portal");function y4(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m4,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var hi=M4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Hn(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Vt;zt.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(Rd(299));return y4(t,a,null,r)};zt.flushSync=function(t){var a=hi.T,r=Vt.p;try{if(hi.T=null,Vt.p=2,t)return t()}finally{hi.T=a,Vt.p=r,Vt.d.f()}};zt.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Vt.d.C(t,a))};zt.prefetchDNS=function(t){typeof t=="string"&&Vt.d.D(t)};zt.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=Hn(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Vt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Vt.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};zt.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=Hn(a.as,a.crossOrigin);Vt.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Vt.d.M(t)};zt.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=Hn(r,a.crossOrigin);Vt.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};zt.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=Hn(a.as,a.crossOrigin);Vt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Vt.d.m(t)};zt.requestFormReset=function(t){Vt.d.r(t)};zt.unstable_batchedUpdates=function(t,a){return t(a)};zt.useFormState=function(t,a,r){return hi.H.useFormState(t,a,r)};zt.useFormStatus=function(){return hi.H.useHostTransitionStatus()};zt.version="19.2.8"});var Id=ir((Bf,$d)=>{"use strict";function Fd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fd)}catch(t){console.error(t)}}Fd(),$d.exports=Jd()});var hs=ir(a2=>{"use strict";var xt=Kd(),C0=za(),w4=Id();function M(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function B0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fi(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function b0(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function j0(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Pd(t){if(Fi(t)!==t)throw Error(M(188))}function C4(t){var a=t.alternate;if(!a){if(a=Fi(t),a===null)throw Error(M(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return Pd(i),t;if(n===e)return Pd(i),a;n=n.sibling}throw Error(M(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,e=n;break}if(l===e){o=!0,e=i,r=n;break}l=l.sibling}if(!o){for(l=n.child;l;){if(l===r){o=!0,r=n,e=i;break}if(l===e){o=!0,e=n,r=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(r.alternate!==e)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?t:a}function W0(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=W0(t),a!==null)return a;t=t.sibling}return null}var it=Object.assign,B4=Symbol.for("react.element"),Sn=Symbol.for("react.transitional.element"),xi=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),H0=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),S0=Symbol.for("react.consumer"),qa=Symbol.for("react.context"),h1=Symbol.for("react.forward_ref"),vl=Symbol.for("react.suspense"),kl=Symbol.for("react.suspense_list"),u1=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),xl=Symbol.for("react.activity"),b4=Symbol.for("react.memo_cache_sentinel"),tc=Symbol.iterator;function ui(t){return t===null||typeof t!="object"?null:(t=tc&&t[tc]||t["@@iterator"],typeof t=="function"?t:null)}var j4=Symbol.for("react.client.reference");function Ll(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===j4?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Le:return"Fragment";case fl:return"Profiler";case H0:return"StrictMode";case vl:return"Suspense";case kl:return"SuspenseList";case xl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case xi:return"Portal";case qa:return t.displayName||"Context";case S0:return(t._context.displayName||"Context")+".Consumer";case h1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case u1:return a=t.displayName||null,a!==null?a:Ll(t.type)||"Memo";case lr:a=t._payload,t=t._init;try{return Ll(t(a))}catch{}}return null}var Li=Array.isArray,V=C0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=w4.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Yr={pending:!1,data:null,method:null,action:null},Ml=[],Me=-1;function Ha(t){return{current:t}}function yt(t){0>Me||(t.current=Ml[Me],Ml[Me]=null,Me--)}function tt(t,a){Me++,Ml[Me]=t.current,t.current=a}var Wa=Ha(null),Ei=Ha(null),xr=Ha(null),ho=Ha(null);function uo(t,a){switch(tt(xr,a),tt(Ei,t),tt(Wa,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?l0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=l0(a),t=Fu(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}yt(Wa),tt(Wa,t)}function De(){yt(Wa),yt(Ei),yt(xr)}function ml(t){t.memoizedState!==null&&tt(ho,t);var a=Wa.current,r=Fu(a,t.type);a!==r&&(tt(Ei,t),tt(Wa,r))}function so(t){Ei.current===t&&(yt(Wa),yt(Ei)),ho.current===t&&(yt(ho),Ki._currentValue=Yr)}var E2,ac;function Ur(t){if(E2===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);E2=a&&a[1]||"",ac=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E2+t+ac}var N2=!1;function D2(t,a){if(!t||N2)return"";N2=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(k){var p=k}Reflect.construct(t,[],x)}else{try{x.call()}catch(k){p=k}t.call(x.prototype)}}else{try{throw Error()}catch(k){p=k}(x=t())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(k){if(k&&p&&typeof k.stack=="string")return[k.stack,p.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],l=n[1];if(o&&l){var c=o.split(`
`),s=l.split(`
`);for(i=e=0;e<c.length&&!c[e].includes("DetermineComponentFrameRoot");)e++;for(;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;if(e===c.length||i===s.length)for(e=c.length-1,i=s.length-1;1<=e&&0<=i&&c[e]!==s[i];)i--;for(;1<=e&&0<=i;e--,i--)if(c[e]!==s[i]){if(e!==1||i!==1)do if(e--,i--,0>i||c[e]!==s[i]){var v=`
`+c[e].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=e&&0<=i);break}}}finally{N2=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Ur(r):""}function W4(t,a){switch(t.tag){case 26:case 27:case 5:return Ur(t.type);case 16:return Ur("Lazy");case 13:return t.child!==a&&a!==null?Ur("Suspense Fallback"):Ur("Suspense");case 19:return Ur("SuspenseList");case 0:case 15:return D2(t.type,!1);case 11:return D2(t.type.render,!1);case 1:return D2(t.type,!0);case 31:return Ur("Activity");default:return""}}function rc(t){try{var a="",r=null;do a+=W4(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var yl=Object.prototype.hasOwnProperty,s1=xt.unstable_scheduleCallback,O2=xt.unstable_cancelCallback,H4=xt.unstable_shouldYield,S4=xt.unstable_requestPaint,Ft=xt.unstable_now,A4=xt.unstable_getCurrentPriorityLevel,A0=xt.unstable_ImmediatePriority,V0=xt.unstable_UserBlockingPriority,go=xt.unstable_NormalPriority,V4=xt.unstable_LowPriority,z0=xt.unstable_IdlePriority,z4=xt.log,_4=xt.unstable_setDisableYieldValue,$i=null,$t=null;function gr(t){if(typeof z4=="function"&&_4(t),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode($i,t)}catch{}}var It=Math.clz32?Math.clz32:N4,T4=Math.log,E4=Math.LN2;function N4(t){return t>>>=0,t===0?32:31-(T4(t)/E4|0)|0}var An=256,Vn=262144,zn=4194304;function Zr(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Oo(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var l=e&134217727;return l!==0?(e=l&~n,e!==0?i=Zr(e):(o&=l,o!==0?i=Zr(o):r||(r=l&~t,r!==0&&(i=Zr(r))))):(l=e&~n,l!==0?i=Zr(l):o!==0?i=Zr(o):r||(r=e&~t,r!==0&&(i=Zr(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function Ii(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function D4(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _0(){var t=zn;return zn<<=1,(zn&62914560)===0&&(zn=4194304),t}function U2(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function Pi(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function O4(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var l=t.entanglements,c=t.expirationTimes,s=t.hiddenUpdates;for(r=o&~r;0<r;){var v=31-It(r),x=1<<v;l[v]=0,c[v]=-1;var p=s[v];if(p!==null)for(s[v]=null,v=0;v<p.length;v++){var k=p[v];k!==null&&(k.lane&=-536870913)}r&=~x}e!==0&&T0(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function T0(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-It(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function E0(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-It(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function N0(t,a){var r=a&-a;return r=(r&42)!==0?1:g1(r),(r&(t.suspendedLanes|a))!==0?0:r}function g1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function p1(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function D0(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:ls(t.type))}function ec(t,a){var r=K.p;try{return K.p=t,a()}finally{K.p=r}}var Ar=Math.random().toString(36).slice(2),bt="__reactFiber$"+Ar,qt="__reactProps$"+Ar,Je="__reactContainer$"+Ar,wl="__reactEvents$"+Ar,U4="__reactListeners$"+Ar,Z4="__reactHandles$"+Ar,ic="__reactResources$"+Ar,tn="__reactMarker$"+Ar;function f1(t){delete t[bt],delete t[qt],delete t[wl],delete t[U4],delete t[Z4]}function me(t){var a=t[bt];if(a)return a;for(var r=t.parentNode;r;){if(a=r[Je]||r[bt]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=s0(t);t!==null;){if(r=t[bt])return r;t=s0(t)}return a}t=r,r=t.parentNode}return null}function Fe(t){if(t=t[bt]||t[Je]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Mi(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(M(33))}function Ae(t){var a=t[ic];return a||(a=t[ic]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function mt(t){t[tn]=!0}var O0=new Set,U0={};function te(t,a){Oe(t,a),Oe(t+"Capture",a)}function Oe(t,a){for(U0[t]=a,t=0;t<a.length;t++)O0.add(a[t])}var q4=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nc={},oc={};function G4(t){return yl.call(oc,t)?!0:yl.call(nc,t)?!1:q4.test(t)?oc[t]=!0:(nc[t]=!0,!1)}function Rn(t,a,r){if(G4(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function _n(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function Ta(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function da(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Z0(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Y4(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Cl(t){if(!t._valueTracker){var a=Z0(t)?"checked":"value";t._valueTracker=Y4(t,a,""+t[a])}}function q0(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=Z0(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function po(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var X4=/[\n"\\]/g;function ua(t){return t.replace(X4,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Bl(t,a,r,e,i,n,o,l){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+da(a)):t.value!==""+da(a)&&(t.value=""+da(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?bl(t,o,da(a)):r!=null?bl(t,o,da(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+da(l):t.removeAttribute("name")}function G0(t,a,r,e,i,n,o,l){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){Cl(t);return}r=r!=null?""+da(r):"",a=a!=null?""+da(a):r,l||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=l?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Cl(t)}function bl(t,a,r){a==="number"&&po(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ve(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+da(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function Y0(t,a,r){if(a!=null&&(a=""+da(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+da(r):""}function X0(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(M(92));if(Li(e)){if(1<e.length)throw Error(M(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=da(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),Cl(t)}function Ue(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var Q4=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lc(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||Q4.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function Q0(t,a,r){if(a!=null&&typeof a!="object")throw Error(M(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&lc(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&lc(t,n,a[n])}function v1(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var K4=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),R4=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jn(t){return R4.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ga(){}var jl=null;function k1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ye=null,ze=null;function dc(t){var a=Fe(t);if(a&&(t=a.stateNode)){var r=t[qt]||null;t:switch(t=a.stateNode,a.type){case"input":if(Bl(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ua(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[qt]||null;if(!i)throw Error(M(90));Bl(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&q0(e)}break t;case"textarea":Y0(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Ve(t,!!r.multiple,a,!1)}}}var Z2=!1;function K0(t,a,r){if(Z2)return t(a,r);Z2=!0;try{var e=t(a);return e}finally{if(Z2=!1,(ye!==null||ze!==null)&&($o(),ye&&(a=ye,t=ze,ze=ye=null,dc(a),t)))for(a=0;a<t.length;a++)dc(t[a])}}function Ni(t,a){var r=t.stateNode;if(r===null)return null;var e=r[qt]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(M(231,a,typeof r));return r}var Ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=!1;if(Ra)try{pe={},Object.defineProperty(pe,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",pe,pe),window.removeEventListener("test",pe,pe)}catch{Wl=!1}var pe,pr=null,x1=null,Fn=null;function R0(){if(Fn)return Fn;var t,a=x1,r=a.length,e,i="value"in pr?pr.value:pr.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return Fn=i.slice(t,1<e?1-e:void 0)}function $n(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Tn(){return!0}function cc(){return!1}function Gt(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(n):n[l]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Tn:cc,this.isPropagationStopped=cc,this}return it(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),a}var ae={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uo=Gt(ae),an=it({},ae,{view:0,detail:0}),J4=Gt(an),q2,G2,si,Zo=it({},an,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:L1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==si&&(si&&t.type==="mousemove"?(q2=t.screenX-si.screenX,G2=t.screenY-si.screenY):G2=q2=0,si=t),q2)},movementY:function(t){return"movementY"in t?t.movementY:G2}}),hc=Gt(Zo),F4=it({},Zo,{dataTransfer:0}),$4=Gt(F4),I4=it({},an,{relatedTarget:0}),Y2=Gt(I4),P4=it({},ae,{animationName:0,elapsedTime:0,pseudoElement:0}),tp=Gt(P4),ap=it({},ae,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rp=Gt(ap),ep=it({},ae,{data:0}),uc=Gt(ep),ip={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},op={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lp(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=op[t])?!!a[t]:!1}function L1(){return lp}var dp=it({},an,{key:function(t){if(t.key){var a=ip[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=$n(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?np[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:L1,charCode:function(t){return t.type==="keypress"?$n(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$n(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cp=Gt(dp),hp=it({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sc=Gt(hp),up=it({},an,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:L1}),sp=Gt(up),gp=it({},ae,{propertyName:0,elapsedTime:0,pseudoElement:0}),pp=Gt(gp),fp=it({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vp=Gt(fp),kp=it({},ae,{newState:0,oldState:0}),xp=Gt(kp),Lp=[9,13,27,32],M1=Ra&&"CompositionEvent"in window,wi=null;Ra&&"documentMode"in document&&(wi=document.documentMode);var Mp=Ra&&"TextEvent"in window&&!wi,J0=Ra&&(!M1||wi&&8<wi&&11>=wi),gc=" ",pc=!1;function F0(t,a){switch(t){case"keyup":return Lp.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var we=!1;function mp(t,a){switch(t){case"compositionend":return $0(a);case"keypress":return a.which!==32?null:(pc=!0,gc);case"textInput":return t=a.data,t===gc&&pc?null:t;default:return null}}function yp(t,a){if(we)return t==="compositionend"||!M1&&F0(t,a)?(t=R0(),Fn=x1=pr=null,we=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return J0&&a.locale!=="ko"?null:a.data;default:return null}}var wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!wp[t.type]:a==="textarea"}function I0(t,a,r,e){ye?ze?ze.push(e):ze=[e]:ye=e,a=Vo(a,"onChange"),0<a.length&&(r=new Uo("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var Ci=null,Di=null;function Cp(t){Ku(t,0)}function qo(t){var a=Mi(t);if(q0(a))return t}function vc(t,a){if(t==="change")return a}var P0=!1;Ra&&(Ra?(Nn="oninput"in document,Nn||(X2=document.createElement("div"),X2.setAttribute("oninput","return;"),Nn=typeof X2.oninput=="function"),En=Nn):En=!1,P0=En&&(!document.documentMode||9<document.documentMode));var En,Nn,X2;function kc(){Ci&&(Ci.detachEvent("onpropertychange",th),Di=Ci=null)}function th(t){if(t.propertyName==="value"&&qo(Di)){var a=[];I0(a,Di,t,k1(t)),K0(Cp,a)}}function Bp(t,a,r){t==="focusin"?(kc(),Ci=a,Di=r,Ci.attachEvent("onpropertychange",th)):t==="focusout"&&kc()}function bp(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qo(Di)}function jp(t,a){if(t==="click")return qo(a)}function Wp(t,a){if(t==="input"||t==="change")return qo(a)}function Hp(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var ta=typeof Object.is=="function"?Object.is:Hp;function Oi(t,a){if(ta(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!yl.call(a,i)||!ta(t[i],a[i]))return!1}return!0}function xc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lc(t,a){var r=xc(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=xc(r)}}function ah(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?ah(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function rh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=po(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=po(t.document)}return a}function m1(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var Sp=Ra&&"documentMode"in document&&11>=document.documentMode,Ce=null,Hl=null,Bi=null,Sl=!1;function Mc(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Sl||Ce==null||Ce!==po(e)||(e=Ce,"selectionStart"in e&&m1(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Bi&&Oi(Bi,e)||(Bi=e,e=Vo(Hl,"onSelect"),0<e.length&&(a=new Uo("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=Ce)))}function Or(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var Be={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionrun:Or("Transition","TransitionRun"),transitionstart:Or("Transition","TransitionStart"),transitioncancel:Or("Transition","TransitionCancel"),transitionend:Or("Transition","TransitionEnd")},Q2={},eh={};Ra&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete Be.animationend.animation,delete Be.animationiteration.animation,delete Be.animationstart.animation),"TransitionEvent"in window||delete Be.transitionend.transition);function re(t){if(Q2[t])return Q2[t];if(!Be[t])return t;var a=Be[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in eh)return Q2[t]=a[r];return t}var ih=re("animationend"),nh=re("animationiteration"),oh=re("animationstart"),Ap=re("transitionrun"),Vp=re("transitionstart"),zp=re("transitioncancel"),lh=re("transitionend"),dh=new Map,Al="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Al.push("scrollEnd");function ma(t,a){dh.set(t,a),te(a,[t])}var fo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},la=[],be=0,y1=0;function Go(){for(var t=be,a=y1=be=0;a<t;){var r=la[a];la[a++]=null;var e=la[a];la[a++]=null;var i=la[a];la[a++]=null;var n=la[a];if(la[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&ch(r,i,n)}}function Yo(t,a,r,e){la[be++]=t,la[be++]=a,la[be++]=r,la[be++]=e,y1|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function w1(t,a,r,e){return Yo(t,a,r,e),vo(t)}function ee(t,a){return Yo(t,null,null,a),vo(t)}function ch(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-It(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function vo(t){if(50<_i)throw _i=0,Il=null,Error(M(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var je={};function _p(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,a,r,e){return new _p(t,a,r,e)}function C1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xa(t,a){var r=t.alternate;return r===null?(r=Rt(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function hh(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function In(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")C1(t)&&(o=1);else if(typeof t=="string")o=N5(t,r,Wa.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case xl:return t=Rt(31,r,a,i),t.elementType=xl,t.lanes=n,t;case Le:return Xr(r.children,i,n,a);case H0:o=8,i|=24;break;case fl:return t=Rt(12,r,a,i|2),t.elementType=fl,t.lanes=n,t;case vl:return t=Rt(13,r,a,i),t.elementType=vl,t.lanes=n,t;case kl:return t=Rt(19,r,a,i),t.elementType=kl,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qa:o=10;break t;case S0:o=9;break t;case h1:o=11;break t;case u1:o=14;break t;case lr:o=16,e=null;break t}o=29,r=Error(M(130,t===null?"null":typeof t,"")),e=null}return a=Rt(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function Xr(t,a,r,e){return t=Rt(7,t,e,a),t.lanes=r,t}function K2(t,a,r){return t=Rt(6,t,null,a),t.lanes=r,t}function uh(t){var a=Rt(18,null,null,0);return a.stateNode=t,a}function R2(t,a,r){return a=Rt(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var mc=new WeakMap;function sa(t,a){if(typeof t=="object"&&t!==null){var r=mc.get(t);return r!==void 0?r:(a={value:t,source:a,stack:rc(a)},mc.set(t,a),a)}return{value:t,source:a,stack:rc(a)}}var We=[],He=0,ko=null,Ui=0,ca=[],ha=0,jr=null,Ba=1,ba="";function Ua(t,a){We[He++]=Ui,We[He++]=ko,ko=t,Ui=a}function sh(t,a,r){ca[ha++]=Ba,ca[ha++]=ba,ca[ha++]=jr,jr=t;var e=Ba;t=ba;var i=32-It(e)-1;e&=~(1<<i),r+=1;var n=32-It(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,Ba=1<<32-It(a)+i|r<<i|e,ba=n+t}else Ba=1<<n|r<<i|e,ba=t}function B1(t){t.return!==null&&(Ua(t,1),sh(t,1,0))}function b1(t){for(;t===ko;)ko=We[--He],We[He]=null,Ui=We[--He],We[He]=null;for(;t===jr;)jr=ca[--ha],ca[ha]=null,ba=ca[--ha],ca[ha]=null,Ba=ca[--ha],ca[ha]=null}function gh(t,a){ca[ha++]=Ba,ca[ha++]=ba,ca[ha++]=jr,Ba=a.id,ba=a.overflow,jr=t}var jt=null,et=null,G=!1,Lr=null,ga=!1,Vl=Error(M(519));function Wr(t){var a=Error(M(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zi(sa(a,t)),Vl}function yc(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[bt]=t,a[qt]=e,r){case"dialog":U("cancel",a),U("close",a);break;case"iframe":case"object":case"embed":U("load",a);break;case"video":case"audio":for(r=0;r<Xi.length;r++)U(Xi[r],a);break;case"source":U("error",a);break;case"img":case"image":case"link":U("error",a),U("load",a);break;case"details":U("toggle",a);break;case"input":U("invalid",a),G0(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":U("invalid",a);break;case"textarea":U("invalid",a),X0(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||Ju(a.textContent,r)?(e.popover!=null&&(U("beforetoggle",a),U("toggle",a)),e.onScroll!=null&&U("scroll",a),e.onScrollEnd!=null&&U("scrollend",a),e.onClick!=null&&(a.onclick=Ga),a=!0):a=!1,a||Wr(t,!0)}function wc(t){for(jt=t.return;jt;)switch(jt.tag){case 5:case 31:case 13:ga=!1;return;case 27:case 3:ga=!0;return;default:jt=jt.return}}function fe(t){if(t!==jt)return!1;if(!G)return wc(t),G=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||e1(t.type,t.memoizedProps)),r=!r),r&&et&&Wr(t),wc(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));et=u0(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));et=u0(t)}else a===27?(a=et,Vr(t.type)?(t=l1,l1=null,et=t):et=a):et=jt?fa(t.stateNode.nextSibling):null;return!0}function Jr(){et=jt=null,G=!1}function J2(){var t=Lr;return t!==null&&(Ut===null?Ut=t:Ut.push.apply(Ut,t),Lr=null),t}function Zi(t){Lr===null?Lr=[t]:Lr.push(t)}var zl=Ha(null),ie=null,Ya=null;function cr(t,a,r){tt(zl,a._currentValue),a._currentValue=r}function Qa(t){t._currentValue=zl.current,yt(zl)}function _l(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function Tl(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var l=n;n=i;for(var c=0;c<a.length;c++)if(l.context===a[c]){n.lanes|=r,l=n.alternate,l!==null&&(l.lanes|=r),_l(n.return,r,t),e||(o=null);break t}n=l.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(M(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),_l(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function $e(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(M(387));if(o=o.memoizedProps,o!==null){var l=i.type;ta(i.pendingProps.value,o.value)||(t!==null?t.push(l):t=[l])}}else if(i===ho.current){if(o=i.alternate,o===null)throw Error(M(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ki):t=[Ki])}i=i.return}t!==null&&Tl(a,t,r,e),a.flags|=262144}function xo(t){for(t=t.firstContext;t!==null;){if(!ta(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fr(t){ie=t,Ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wt(t){return ph(ie,t)}function Dn(t,a){return ie===null&&Fr(t),ph(t,a)}function ph(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},Ya===null){if(t===null)throw Error(M(308));Ya=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Ya=Ya.next=a;return r}var Tp=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},Ep=xt.unstable_scheduleCallback,Np=xt.unstable_NormalPriority,ft={$$typeof:qa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function j1(){return{controller:new Tp,data:new Map,refCount:0}}function rn(t){t.refCount--,t.refCount===0&&Ep(Np,function(){t.controller.abort()})}var bi=null,El=0,Ze=0,_e=null;function Dp(t,a){if(bi===null){var r=bi=[];El=0,Ze=I1(),_e={status:"pending",value:void 0,then:function(e){r.push(e)}}}return El++,a.then(Cc,Cc),a}function Cc(){if(--El===0&&bi!==null){_e!==null&&(_e.status="fulfilled");var t=bi;bi=null,Ze=0,_e=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function Op(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var Bc=V.S;V.S=function(t,a){Wu=Ft(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Dp(t,a),Bc!==null&&Bc(t,a)};var Qr=Ha(null);function W1(){var t=Qr.current;return t!==null?t:P.pooledCache}function Pn(t,a){a===null?tt(Qr,Qr.current):tt(Qr,a.pool)}function fh(){var t=W1();return t===null?null:{parent:ft._currentValue,pool:t}}var Ie=Error(M(460)),H1=Error(M(474)),Xo=Error(M(542)),Lo={then:function(){}};function bc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function vh(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(Ga,Ga),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Wc(t),t;default:if(typeof a.status=="string")a.then(Ga,Ga);else{if(t=P,t!==null&&100<t.shellSuspendCounter)throw Error(M(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Wc(t),t}throw Kr=a,Ie}}function qr(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Kr=r,Ie):r}}var Kr=null;function jc(){if(Kr===null)throw Error(M(459));var t=Kr;return Kr=null,t}function Wc(t){if(t===Ie||t===Xo)throw Error(M(483))}var Te=null,qi=0;function On(t){var a=qi;return qi+=1,Te===null&&(Te=[]),vh(Te,t,a)}function gi(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Un(t,a){throw a.$$typeof===B4?Error(M(525)):(t=Object.prototype.toString.call(a),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function kh(t){function a(g,u){if(t){var f=g.deletions;f===null?(g.deletions=[u],g.flags|=16):f.push(u)}}function r(g,u){if(!t)return null;for(;u!==null;)a(g,u),u=u.sibling;return null}function e(g){for(var u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function i(g,u){return g=Xa(g,u),g.index=0,g.sibling=null,g}function n(g,u,f){return g.index=f,t?(f=g.alternate,f!==null?(f=f.index,f<u?(g.flags|=67108866,u):f):(g.flags|=67108866,u)):(g.flags|=1048576,u)}function o(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function l(g,u,f,L){return u===null||u.tag!==6?(u=K2(f,g.mode,L),u.return=g,u):(u=i(u,f),u.return=g,u)}function c(g,u,f,L){var W=f.type;return W===Le?v(g,u,f.props.children,L,f.key):u!==null&&(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===lr&&qr(W)===u.type)?(u=i(u,f.props),gi(u,f),u.return=g,u):(u=In(f.type,f.key,f.props,null,g.mode,L),gi(u,f),u.return=g,u)}function s(g,u,f,L){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=R2(f,g.mode,L),u.return=g,u):(u=i(u,f.children||[]),u.return=g,u)}function v(g,u,f,L,W){return u===null||u.tag!==7?(u=Xr(f,g.mode,L,W),u.return=g,u):(u=i(u,f),u.return=g,u)}function x(g,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=K2(""+u,g.mode,f),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Sn:return f=In(u.type,u.key,u.props,null,g.mode,f),gi(f,u),f.return=g,f;case xi:return u=R2(u,g.mode,f),u.return=g,u;case lr:return u=qr(u),x(g,u,f)}if(Li(u)||ui(u))return u=Xr(u,g.mode,f,null),u.return=g,u;if(typeof u.then=="function")return x(g,On(u),f);if(u.$$typeof===qa)return x(g,Dn(g,u),f);Un(g,u)}return null}function p(g,u,f,L){var W=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return W!==null?null:l(g,u,""+f,L);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Sn:return f.key===W?c(g,u,f,L):null;case xi:return f.key===W?s(g,u,f,L):null;case lr:return f=qr(f),p(g,u,f,L)}if(Li(f)||ui(f))return W!==null?null:v(g,u,f,L,null);if(typeof f.then=="function")return p(g,u,On(f),L);if(f.$$typeof===qa)return p(g,u,Dn(g,f),L);Un(g,f)}return null}function k(g,u,f,L,W){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return g=g.get(f)||null,l(u,g,""+L,W);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Sn:return g=g.get(L.key===null?f:L.key)||null,c(u,g,L,W);case xi:return g=g.get(L.key===null?f:L.key)||null,s(u,g,L,W);case lr:return L=qr(L),k(g,u,f,L,W)}if(Li(L)||ui(L))return g=g.get(f)||null,v(u,g,L,W,null);if(typeof L.then=="function")return k(g,u,f,On(L),W);if(L.$$typeof===qa)return k(g,u,f,Dn(u,L),W);Un(u,L)}return null}function y(g,u,f,L){for(var W=null,z=null,B=u,A=u=0,H=null;B!==null&&A<f.length;A++){B.index>A?(H=B,B=null):H=B.sibling;var O=p(g,B,f[A],L);if(O===null){B===null&&(B=H);break}t&&B&&O.alternate===null&&a(g,B),u=n(O,u,A),z===null?W=O:z.sibling=O,z=O,B=H}if(A===f.length)return r(g,B),G&&Ua(g,A),W;if(B===null){for(;A<f.length;A++)B=x(g,f[A],L),B!==null&&(u=n(B,u,A),z===null?W=B:z.sibling=B,z=B);return G&&Ua(g,A),W}for(B=e(B);A<f.length;A++)H=k(B,g,A,f[A],L),H!==null&&(t&&H.alternate!==null&&B.delete(H.key===null?A:H.key),u=n(H,u,A),z===null?W=H:z.sibling=H,z=H);return t&&B.forEach(function(Tt){return a(g,Tt)}),G&&Ua(g,A),W}function w(g,u,f,L){if(f==null)throw Error(M(151));for(var W=null,z=null,B=u,A=u=0,H=null,O=f.next();B!==null&&!O.done;A++,O=f.next()){B.index>A?(H=B,B=null):H=B.sibling;var Tt=p(g,B,O.value,L);if(Tt===null){B===null&&(B=H);break}t&&B&&Tt.alternate===null&&a(g,B),u=n(Tt,u,A),z===null?W=Tt:z.sibling=Tt,z=Tt,B=H}if(O.done)return r(g,B),G&&Ua(g,A),W;if(B===null){for(;!O.done;A++,O=f.next())O=x(g,O.value,L),O!==null&&(u=n(O,u,A),z===null?W=O:z.sibling=O,z=O);return G&&Ua(g,A),W}for(B=e(B);!O.done;A++,O=f.next())O=k(B,g,A,O.value,L),O!==null&&(t&&O.alternate!==null&&B.delete(O.key===null?A:O.key),u=n(O,u,A),z===null?W=O:z.sibling=O,z=O);return t&&B.forEach(function(zr){return a(g,zr)}),G&&Ua(g,A),W}function N(g,u,f,L){if(typeof f=="object"&&f!==null&&f.type===Le&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Sn:t:{for(var W=f.key;u!==null;){if(u.key===W){if(W=f.type,W===Le){if(u.tag===7){r(g,u.sibling),L=i(u,f.props.children),L.return=g,g=L;break t}}else if(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===lr&&qr(W)===u.type){r(g,u.sibling),L=i(u,f.props),gi(L,f),L.return=g,g=L;break t}r(g,u);break}else a(g,u);u=u.sibling}f.type===Le?(L=Xr(f.props.children,g.mode,L,f.key),L.return=g,g=L):(L=In(f.type,f.key,f.props,null,g.mode,L),gi(L,f),L.return=g,g=L)}return o(g);case xi:t:{for(W=f.key;u!==null;){if(u.key===W)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){r(g,u.sibling),L=i(u,f.children||[]),L.return=g,g=L;break t}else{r(g,u);break}else a(g,u);u=u.sibling}L=R2(f,g.mode,L),L.return=g,g=L}return o(g);case lr:return f=qr(f),N(g,u,f,L)}if(Li(f))return y(g,u,f,L);if(ui(f)){if(W=ui(f),typeof W!="function")throw Error(M(150));return f=W.call(f),w(g,u,f,L)}if(typeof f.then=="function")return N(g,u,On(f),L);if(f.$$typeof===qa)return N(g,u,Dn(g,f),L);Un(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(r(g,u.sibling),L=i(u,f),L.return=g,g=L):(r(g,u),L=K2(f,g.mode,L),L.return=g,g=L),o(g)):r(g,u)}return function(g,u,f,L){try{qi=0;var W=N(g,u,f,L);return Te=null,W}catch(B){if(B===Ie||B===Xo)throw B;var z=Rt(29,B,null,g.mode);return z.lanes=L,z.return=g,z}}}var $r=kh(!0),xh=kh(!1),dr=!1;function S1(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nl(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Mr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function mr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(Q&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=vo(t),ch(t,null,r),a}return Yo(t,e,a,r),vo(t)}function ji(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,E0(t,r)}}function F2(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var Dl=!1;function Wi(){if(Dl){var t=_e;if(t!==null)throw t}}function Hi(t,a,r,e){Dl=!1;var i=t.updateQueue;dr=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,s=c.next;c.next=null,o===null?n=s:o.next=s,o=c;var v=t.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==o&&(l===null?v.firstBaseUpdate=s:l.next=s,v.lastBaseUpdate=c))}if(n!==null){var x=i.baseState;o=0,v=s=c=null,l=n;do{var p=l.lane&-536870913,k=p!==l.lane;if(k?(q&p)===p:(e&p)===p){p!==0&&p===Ze&&(Dl=!0),v!==null&&(v=v.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var y=t,w=l;p=a;var N=r;switch(w.tag){case 1:if(y=w.payload,typeof y=="function"){x=y.call(N,x,p);break t}x=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,p=typeof y=="function"?y.call(N,x,p):y,p==null)break t;x=it({},x,p);break t;case 2:dr=!0}}p=l.callback,p!==null&&(t.flags|=64,k&&(t.flags|=8192),k=i.callbacks,k===null?i.callbacks=[p]:k.push(p))}else k={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(s=v=k,c=x):v=v.next=k,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;k=l,l=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);v===null&&(c=x),i.baseState=c,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n===null&&(i.shared.lanes=0),Sr|=o,t.lanes=o,t.memoizedState=x}}function Lh(t,a){if(typeof t!="function")throw Error(M(191,t));t.call(a)}function Mh(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Lh(r[t],a)}var qe=Ha(null),Mo=Ha(0);function Hc(t,a){t=Ia,tt(Mo,t),tt(qe,a),Ia=t|a.baseLanes}function Ol(){tt(Mo,Ia),tt(qe,qe.current)}function A1(){Ia=Mo.current,yt(qe),yt(Mo)}var aa=Ha(null),pa=null;function hr(t){var a=t.alternate;tt(ht,ht.current&1),tt(aa,t),pa===null&&(a===null||qe.current!==null||a.memoizedState!==null)&&(pa=t)}function Ul(t){tt(ht,ht.current),tt(aa,t),pa===null&&(pa=t)}function mh(t){t.tag===22?(tt(ht,ht.current),tt(aa,t),pa===null&&(pa=t)):ur(t)}function ur(){tt(ht,ht.current),tt(aa,aa.current)}function Kt(t){yt(aa),pa===t&&(pa=null),yt(ht)}var ht=Ha(0);function mo(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||n1(r)||o1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ja=0,E=null,$=null,gt=null,yo=!1,Ee=!1,Ir=!1,wo=0,Gi=0,Ne=null,Up=0;function lt(){throw Error(M(321))}function V1(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!ta(t[r],a[r]))return!1;return!0}function z1(t,a,r,e,i,n){return Ja=n,E=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,V.H=t===null||t.memoizedState===null?Ih:Y1,Ir=!1,n=r(e,i),Ir=!1,Ee&&(n=wh(a,r,e,i)),yh(t),n}function yh(t){V.H=Yi;var a=$!==null&&$.next!==null;if(Ja=0,gt=$=E=null,yo=!1,Gi=0,Ne=null,a)throw Error(M(300));t===null||vt||(t=t.dependencies,t!==null&&xo(t)&&(vt=!0))}function wh(t,a,r,e){E=t;var i=0;do{if(Ee&&(Ne=null),Gi=0,Ee=!1,25<=i)throw Error(M(301));if(i+=1,gt=$=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}V.H=Ph,n=a(r,e)}while(Ee);return n}function Zp(){var t=V.H,a=t.useState()[0];return a=typeof a.then=="function"?en(a):a,t=t.useState()[0],($!==null?$.memoizedState:null)!==t&&(E.flags|=1024),a}function _1(){var t=wo!==0;return wo=0,t}function T1(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function E1(t){if(yo){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}yo=!1}Ja=0,gt=$=E=null,Ee=!1,Gi=wo=0,Ne=null}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?E.memoizedState=gt=t:gt=gt.next=t,gt}function ut(){if($===null){var t=E.alternate;t=t!==null?t.memoizedState:null}else t=$.next;var a=gt===null?E.memoizedState:gt.next;if(a!==null)gt=a,$=t;else{if(t===null)throw E.alternate===null?Error(M(467)):Error(M(310));$=t,t={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},gt===null?E.memoizedState=gt=t:gt=gt.next=t}return gt}function Qo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function en(t){var a=Gi;return Gi+=1,Ne===null&&(Ne=[]),t=vh(Ne,t,a),a=E,(gt===null?a.memoizedState:gt.next)===null&&(a=a.alternate,V.H=a===null||a.memoizedState===null?Ih:Y1),t}function Ko(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return en(t);if(t.$$typeof===qa)return Wt(t)}throw Error(M(438,String(t)))}function N1(t){var a=null,r=E.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=E.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=Qo(),E.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=b4;return a.index++,r}function Fa(t,a){return typeof a=="function"?a(t):a}function to(t){var a=ut();return D1(a,$,t)}function D1(t,a,r){var e=t.queue;if(e===null)throw Error(M(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var l=o=null,c=null,s=a,v=!1;do{var x=s.lane&-536870913;if(x!==s.lane?(q&x)===x:(Ja&x)===x){var p=s.revertLane;if(p===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),x===Ze&&(v=!0);else if((Ja&p)===p){s=s.next,p===Ze&&(v=!0);continue}else x={lane:0,revertLane:s.revertLane,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},c===null?(l=c=x,o=n):c=c.next=x,E.lanes|=p,Sr|=p;x=s.action,Ir&&r(n,x),n=s.hasEagerState?s.eagerState:r(n,x)}else p={lane:x,revertLane:s.revertLane,gesture:s.gesture,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},c===null?(l=c=p,o=n):c=c.next=p,E.lanes|=x,Sr|=x;s=s.next}while(s!==null&&s!==a);if(c===null?o=n:c.next=l,!ta(n,t.memoizedState)&&(vt=!0,v&&(r=_e,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=c,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function $2(t){var a=ut(),r=a.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);ta(n,a.memoizedState)||(vt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function Ch(t,a,r){var e=E,i=ut(),n=G;if(n){if(r===void 0)throw Error(M(407));r=r()}else r=a();var o=!ta(($||i).memoizedState,r);if(o&&(i.memoizedState=r,vt=!0),i=i.queue,O1(jh.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||gt!==null&&gt.memoizedState.tag&1){if(e.flags|=2048,Ge(9,{destroy:void 0},bh.bind(null,e,i,r,a),null),P===null)throw Error(M(349));n||(Ja&127)!==0||Bh(e,a,r)}return r}function Bh(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=E.updateQueue,a===null?(a=Qo(),E.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function bh(t,a,r,e){a.value=r,a.getSnapshot=e,Wh(a)&&Hh(t)}function jh(t,a,r){return r(function(){Wh(a)&&Hh(t)})}function Wh(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!ta(t,r)}catch{return!0}}function Hh(t){var a=ee(t,2);a!==null&&Zt(a,t,2)}function Zl(t){var a=_t();if(typeof t=="function"){var r=t;if(t=r(),Ir){gr(!0);try{r()}finally{gr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},a}function Sh(t,a,r,e){return t.baseState=r,D1(t,$,typeof e=="function"?e:Fa)}function qp(t,a,r,e,i){if(Jo(t))throw Error(M(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};V.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,Ah(a,n)):(n.next=r.next,a.pending=r.next=n)}}function Ah(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=V.T,o={};V.T=o;try{var l=r(i,e),c=V.S;c!==null&&c(o,l),Sc(t,a,l)}catch(s){ql(t,a,s)}finally{n!==null&&o.types!==null&&(n.types=o.types),V.T=n}}else try{n=r(i,e),Sc(t,a,n)}catch(s){ql(t,a,s)}}function Sc(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){Ac(t,a,e)},function(e){return ql(t,a,e)}):Ac(t,a,r)}function Ac(t,a,r){a.status="fulfilled",a.value=r,Vh(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,Ah(t,r)))}function ql(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,Vh(a),a=a.next;while(a!==e)}t.action=null}function Vh(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function zh(t,a){return a}function Vc(t,a){if(G){var r=P.formState;if(r!==null){t:{var e=E;if(G){if(et){a:{for(var i=et,n=ga;i.nodeType!==8;){if(!n){i=null;break a}if(i=fa(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){et=fa(i.nextSibling),e=i.data==="F!";break t}}Wr(e)}e=!1}e&&(a=r[0])}}return r=_t(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zh,lastRenderedState:a},r.queue=e,r=Jh.bind(null,E,e),e.dispatch=r,e=Zl(!1),n=G1.bind(null,E,!1,e.queue),e=_t(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=qp.bind(null,E,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function zc(t){var a=ut();return _h(a,$,t)}function _h(t,a,r){if(a=D1(t,a,zh)[0],t=to(Fa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=en(a)}catch(o){throw o===Ie?Xo:o}else e=a;a=ut();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(E.flags|=2048,Ge(9,{destroy:void 0},Gp.bind(null,i,r),null)),[e,n,t]}function Gp(t,a){t.action=a}function _c(t){var a=ut(),r=$;if(r!==null)return _h(a,r,t);ut(),a=a.memoizedState,r=ut();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function Ge(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=E.updateQueue,a===null&&(a=Qo(),E.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function Th(){return ut().memoizedState}function ao(t,a,r,e){var i=_t();E.flags|=t,i.memoizedState=Ge(1|a,{destroy:void 0},r,e===void 0?null:e)}function Ro(t,a,r,e){var i=ut();e=e===void 0?null:e;var n=i.memoizedState.inst;$!==null&&e!==null&&V1(e,$.memoizedState.deps)?i.memoizedState=Ge(a,n,r,e):(E.flags|=t,i.memoizedState=Ge(1|a,n,r,e))}function Tc(t,a){ao(8390656,8,t,a)}function O1(t,a){Ro(2048,8,t,a)}function Yp(t){E.flags|=4;var a=E.updateQueue;if(a===null)a=Qo(),E.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function Eh(t){var a=ut().memoizedState;return Yp({ref:a,nextImpl:t}),function(){if((Q&2)!==0)throw Error(M(440));return a.impl.apply(void 0,arguments)}}function Nh(t,a){return Ro(4,2,t,a)}function Dh(t,a){return Ro(4,4,t,a)}function Oh(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Uh(t,a,r){r=r!=null?r.concat([t]):null,Ro(4,4,Oh.bind(null,a,t),r)}function U1(){}function Zh(t,a){var r=ut();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&V1(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function qh(t,a){var r=ut();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&V1(a,e[1]))return e[0];if(e=t(),Ir){gr(!0);try{t()}finally{gr(!1)}}return r.memoizedState=[e,a],e}function Z1(t,a,r){return r===void 0||(Ja&1073741824)!==0&&(q&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=Su(),E.lanes|=t,Sr|=t,r)}function Gh(t,a,r,e){return ta(r,a)?r:qe.current!==null?(t=Z1(t,r,e),ta(t,a)||(vt=!0),t):(Ja&42)===0||(Ja&1073741824)!==0&&(q&261930)===0?(vt=!0,t.memoizedState=r):(t=Su(),E.lanes|=t,Sr|=t,a)}function Yh(t,a,r,e,i){var n=K.p;K.p=n!==0&&8>n?n:8;var o=V.T,l={};V.T=l,G1(t,!1,a,r);try{var c=i(),s=V.S;if(s!==null&&s(l,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=Op(c,e);Si(t,a,v,Pt(t))}else Si(t,a,e,Pt(t))}catch(x){Si(t,a,{then:function(){},status:"rejected",reason:x},Pt())}finally{K.p=n,o!==null&&l.types!==null&&(o.types=l.types),V.T=o}}function Xp(){}function Gl(t,a,r,e){if(t.tag!==5)throw Error(M(476));var i=Xh(t).queue;Yh(t,i,a,Yr,r===null?Xp:function(){return Qh(t),r(e)})}function Xh(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Yr,baseState:Yr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:Yr},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Qh(t){var a=Xh(t);a.next===null&&(a=t.alternate.memoizedState),Si(t,a.next.queue,{},Pt())}function q1(){return Wt(Ki)}function Kh(){return ut().memoizedState}function Rh(){return ut().memoizedState}function Qp(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=Pt();t=Mr(r);var e=mr(a,t,r);e!==null&&(Zt(e,a,r),ji(e,a,r)),a={cache:j1()},t.payload=a;return}a=a.return}}function Kp(t,a,r){var e=Pt();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Jo(t)?Fh(a,r):(r=w1(t,a,r,e),r!==null&&(Zt(r,t,e),$h(r,a,e)))}function Jh(t,a,r){var e=Pt();Si(t,a,r,e)}function Si(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Jo(t))Fh(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,l=n(o,r);if(i.hasEagerState=!0,i.eagerState=l,ta(l,o))return Yo(t,a,i,0),P===null&&Go(),!1}catch{}if(r=w1(t,a,i,e),r!==null)return Zt(r,t,e),$h(r,a,e),!0}return!1}function G1(t,a,r,e){if(e={lane:2,revertLane:I1(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Jo(t)){if(a)throw Error(M(479))}else a=w1(t,r,e,2),a!==null&&Zt(a,t,2)}function Jo(t){var a=t.alternate;return t===E||a!==null&&a===E}function Fh(t,a){Ee=yo=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function $h(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,E0(t,r)}}var Yi={readContext:Wt,use:Ko,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt};Yi.useEffectEvent=lt;var Ih={readContext:Wt,use:Ko,useCallback:function(t,a){return _t().memoizedState=[t,a===void 0?null:a],t},useContext:Wt,useEffect:Tc,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,ao(4194308,4,Oh.bind(null,a,t),r)},useLayoutEffect:function(t,a){return ao(4194308,4,t,a)},useInsertionEffect:function(t,a){ao(4,2,t,a)},useMemo:function(t,a){var r=_t();a=a===void 0?null:a;var e=t();if(Ir){gr(!0);try{t()}finally{gr(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=_t();if(r!==void 0){var i=r(a);if(Ir){gr(!0);try{r(a)}finally{gr(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=Kp.bind(null,E,t),[e.memoizedState,t]},useRef:function(t){var a=_t();return t={current:t},a.memoizedState=t},useState:function(t){t=Zl(t);var a=t.queue,r=Jh.bind(null,E,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:U1,useDeferredValue:function(t,a){var r=_t();return Z1(r,t,a)},useTransition:function(){var t=Zl(!1);return t=Yh.bind(null,E,t.queue,!0,!1),_t().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=E,i=_t();if(G){if(r===void 0)throw Error(M(407));r=r()}else{if(r=a(),P===null)throw Error(M(349));(q&127)!==0||Bh(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,Tc(jh.bind(null,e,n,t),[t]),e.flags|=2048,Ge(9,{destroy:void 0},bh.bind(null,e,n,r,a),null),r},useId:function(){var t=_t(),a=P.identifierPrefix;if(G){var r=ba,e=Ba;r=(e&~(1<<32-It(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=wo++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=Up++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:q1,useFormState:Vc,useActionState:Vc,useOptimistic:function(t){var a=_t();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=G1.bind(null,E,!0,r),r.dispatch=a,[t,a]},useMemoCache:N1,useCacheRefresh:function(){return _t().memoizedState=Qp.bind(null,E)},useEffectEvent:function(t){var a=_t(),r={impl:t};return a.memoizedState=r,function(){if((Q&2)!==0)throw Error(M(440));return r.impl.apply(void 0,arguments)}}},Y1={readContext:Wt,use:Ko,useCallback:Zh,useContext:Wt,useEffect:O1,useImperativeHandle:Uh,useInsertionEffect:Nh,useLayoutEffect:Dh,useMemo:qh,useReducer:to,useRef:Th,useState:function(){return to(Fa)},useDebugValue:U1,useDeferredValue:function(t,a){var r=ut();return Gh(r,$.memoizedState,t,a)},useTransition:function(){var t=to(Fa)[0],a=ut().memoizedState;return[typeof t=="boolean"?t:en(t),a]},useSyncExternalStore:Ch,useId:Kh,useHostTransitionStatus:q1,useFormState:zc,useActionState:zc,useOptimistic:function(t,a){var r=ut();return Sh(r,$,t,a)},useMemoCache:N1,useCacheRefresh:Rh};Y1.useEffectEvent=Eh;var Ph={readContext:Wt,use:Ko,useCallback:Zh,useContext:Wt,useEffect:O1,useImperativeHandle:Uh,useInsertionEffect:Nh,useLayoutEffect:Dh,useMemo:qh,useReducer:$2,useRef:Th,useState:function(){return $2(Fa)},useDebugValue:U1,useDeferredValue:function(t,a){var r=ut();return $===null?Z1(r,t,a):Gh(r,$.memoizedState,t,a)},useTransition:function(){var t=$2(Fa)[0],a=ut().memoizedState;return[typeof t=="boolean"?t:en(t),a]},useSyncExternalStore:Ch,useId:Kh,useHostTransitionStatus:q1,useFormState:_c,useActionState:_c,useOptimistic:function(t,a){var r=ut();return $!==null?Sh(r,$,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:N1,useCacheRefresh:Rh};Ph.useEffectEvent=Eh;function I2(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:it({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Yl={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=Pt(),i=Mr(e);i.payload=a,r!=null&&(i.callback=r),a=mr(t,i,e),a!==null&&(Zt(a,t,e),ji(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=Pt(),i=Mr(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=mr(t,i,e),a!==null&&(Zt(a,t,e),ji(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=Pt(),e=Mr(r);e.tag=2,a!=null&&(e.callback=a),a=mr(t,e,r),a!==null&&(Zt(a,t,r),ji(a,t,r))}};function Ec(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!Oi(r,e)||!Oi(i,n):!0}function Nc(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&Yl.enqueueReplaceState(a,a.state,null)}function Pr(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=it({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function tu(t){fo(t)}function au(t){console.error(t)}function ru(t){fo(t)}function Co(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function Dc(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Xl(t,a,r){return r=Mr(r),r.tag=3,r.payload={element:null},r.callback=function(){Co(t,a)},r}function eu(t){return t=Mr(t),t.tag=3,t}function iu(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){Dc(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Dc(a,r,e),typeof i!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})})}function Rp(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&$e(a,r,i,!0),r=aa.current,r!==null){switch(r.tag){case 31:case 13:return pa===null?Ho():r.alternate===null&&dt===0&&(dt=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===Lo?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),cl(t,e,i)),!1;case 22:return r.flags|=65536,e===Lo?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),cl(t,e,i)),!1}throw Error(M(435,r.tag))}return cl(t,e,i),Ho(),!1}if(G)return a=aa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==Vl&&(t=Error(M(422),{cause:e}),Zi(sa(t,r)))):(e!==Vl&&(a=Error(M(423),{cause:e}),Zi(sa(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=sa(e,r),i=Xl(t.stateNode,e,i),F2(t,i),dt!==4&&(dt=2)),!1;var n=Error(M(520),{cause:e});if(n=sa(n,r),zi===null?zi=[n]:zi.push(n),dt!==4&&(dt=2),a===null)return!0;e=sa(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=Xl(r.stateNode,e,t),F2(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(yr===null||!yr.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=eu(i),iu(i,t,r,e),F2(r,i),!1}r=r.return}while(r!==null);return!1}var X1=Error(M(461)),vt=!1;function Bt(t,a,r,e){a.child=t===null?xh(a,null,r,e):$r(a,t.child,r,e)}function Oc(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var l in e)l!=="ref"&&(o[l]=e[l])}else o=e;return Fr(a),e=z1(t,a,r,o,n,i),l=_1(),t!==null&&!vt?(T1(t,a,i),$a(t,a,i)):(G&&l&&B1(a),a.flags|=1,Bt(t,a,e,i),a.child)}function Uc(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!C1(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,nu(t,a,n,e,i)):(t=In(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!Q1(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:Oi,r(o,e)&&t.ref===a.ref)return $a(t,a,i)}return a.flags|=1,t=Xa(n,e),t.ref=a.ref,t.return=a,a.child=t}function nu(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(Oi(n,e)&&t.ref===a.ref)if(vt=!1,a.pendingProps=e=n,Q1(t,i))(t.flags&131072)!==0&&(vt=!0);else return a.lanes=t.lanes,$a(t,a,i)}return Ql(t,a,r,e,i)}function ou(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return Zc(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Pn(a,n!==null?n.cachePool:null),n!==null?Hc(a,n):Ol(),mh(a);else return e=a.lanes=536870912,Zc(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(Pn(a,n.cachePool),Hc(a,n),ur(a),a.memoizedState=null):(t!==null&&Pn(a,null),Ol(),ur(a));return Bt(t,a,i,r),a.child}function mi(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Zc(t,a,r,e,i){var n=W1();return n=n===null?null:{parent:ft._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&Pn(a,null),Ol(),mh(a),t!==null&&$e(t,a,e,!0),a.childLanes=i,null}function ro(t,a){return a=Bo({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function qc(t,a,r){return $r(a,t.child,null,r),t=ro(a,a.pendingProps),t.flags|=2,Kt(a),a.memoizedState=null,t}function Jp(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(G){if(e.mode==="hidden")return t=ro(a,e),a.lanes=536870912,mi(null,t);if(Ul(a),(t=et)?(t=Iu(t,ga),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:jr!==null?{id:Ba,overflow:ba}:null,retryLane:536870912,hydrationErrors:null},r=uh(t),r.return=a,a.child=r,jt=a,et=null)):t=null,t===null)throw Wr(a);return a.lanes=536870912,null}return ro(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(Ul(a),i)if(a.flags&256)a.flags&=-257,a=qc(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(M(558));else if(vt||$e(t,a,r,!1),i=(r&t.childLanes)!==0,vt||i){if(e=P,e!==null&&(o=N0(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,ee(t,o),Zt(e,t,o),X1;Ho(),a=qc(t,a,r)}else t=n.treeContext,et=fa(o.nextSibling),jt=a,G=!0,Lr=null,ga=!1,t!==null&&gh(a,t),a=ro(a,e),a.flags|=4096;return a}return t=Xa(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function eo(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(M(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function Ql(t,a,r,e,i){return Fr(a),r=z1(t,a,r,e,void 0,i),e=_1(),t!==null&&!vt?(T1(t,a,i),$a(t,a,i)):(G&&e&&B1(a),a.flags|=1,Bt(t,a,r,i),a.child)}function Gc(t,a,r,e,i,n){return Fr(a),a.updateQueue=null,r=wh(a,e,r,i),yh(t),e=_1(),t!==null&&!vt?(T1(t,a,n),$a(t,a,n)):(G&&e&&B1(a),a.flags|=1,Bt(t,a,r,n),a.child)}function Yc(t,a,r,e,i){if(Fr(a),a.stateNode===null){var n=je,o=r.contextType;typeof o=="object"&&o!==null&&(n=Wt(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Yl,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},S1(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?Wt(o):je,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(I2(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&Yl.enqueueReplaceState(n,n.state,null),Hi(a,e,n,i),Wi(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var l=a.memoizedProps,c=Pr(r,l);n.props=c;var s=n.context,v=r.contextType;o=je,typeof v=="object"&&v!==null&&(o=Wt(v));var x=r.getDerivedStateFromProps;v=typeof x=="function"||typeof n.getSnapshotBeforeUpdate=="function",l=a.pendingProps!==l,v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(l||s!==o)&&Nc(a,n,e,o),dr=!1;var p=a.memoizedState;n.state=p,Hi(a,e,n,i),Wi(),s=a.memoizedState,l||p!==s||dr?(typeof x=="function"&&(I2(a,r,x,e),s=a.memoizedState),(c=dr||Ec(a,r,c,e,p,s,o))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=s),n.props=e,n.state=s,n.context=o,e=c):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,Nl(t,a),o=a.memoizedProps,v=Pr(r,o),n.props=v,x=a.pendingProps,p=n.context,s=r.contextType,c=je,typeof s=="object"&&s!==null&&(c=Wt(s)),l=r.getDerivedStateFromProps,(s=typeof l=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==x||p!==c)&&Nc(a,n,e,c),dr=!1,p=a.memoizedState,n.state=p,Hi(a,e,n,i),Wi();var k=a.memoizedState;o!==x||p!==k||dr||t!==null&&t.dependencies!==null&&xo(t.dependencies)?(typeof l=="function"&&(I2(a,r,l,e),k=a.memoizedState),(v=dr||Ec(a,r,v,e,p,k,c)||t!==null&&t.dependencies!==null&&xo(t.dependencies))?(s||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,k,c),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,k,c)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=k),n.props=e,n.state=k,n.context=c,e=v):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,eo(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=$r(a,t.child,null,i),a.child=$r(a,null,r,i)):Bt(t,a,r,i),a.memoizedState=n.state,t=a.child):t=$a(t,a,i),t}function Xc(t,a,r,e){return Jr(),a.flags|=256,Bt(t,a,r,e),a.child}var P2={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tl(t){return{baseLanes:t,cachePool:fh()}}function al(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=Jt),t}function lu(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(ht.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(G){if(i?hr(a):ur(a),(t=et)?(t=Iu(t,ga),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:jr!==null?{id:Ba,overflow:ba}:null,retryLane:536870912,hydrationErrors:null},r=uh(t),r.return=a,a.child=r,jt=a,et=null)):t=null,t===null)throw Wr(a);return o1(t)?a.lanes=32:a.lanes=536870912,null}var l=e.children;return e=e.fallback,i?(ur(a),i=a.mode,l=Bo({mode:"hidden",children:l},i),e=Xr(e,i,r,null),l.return=a,e.return=a,l.sibling=e,a.child=l,e=a.child,e.memoizedState=tl(r),e.childLanes=al(t,o,r),a.memoizedState=P2,mi(null,e)):(hr(a),Kl(a,l))}var c=t.memoizedState;if(c!==null&&(l=c.dehydrated,l!==null)){if(n)a.flags&256?(hr(a),a.flags&=-257,a=rl(t,a,r)):a.memoizedState!==null?(ur(a),a.child=t.child,a.flags|=128,a=null):(ur(a),l=e.fallback,i=a.mode,e=Bo({mode:"visible",children:e.children},i),l=Xr(l,i,r,null),l.flags|=2,e.return=a,l.return=a,e.sibling=l,a.child=e,$r(a,t.child,null,r),e=a.child,e.memoizedState=tl(r),e.childLanes=al(t,o,r),a.memoizedState=P2,a=mi(null,e));else if(hr(a),o1(l)){if(o=l.nextSibling&&l.nextSibling.dataset,o)var s=o.dgst;o=s,e=Error(M(419)),e.stack="",e.digest=o,Zi({value:e,source:null,stack:null}),a=rl(t,a,r)}else if(vt||$e(t,a,r,!1),o=(r&t.childLanes)!==0,vt||o){if(o=P,o!==null&&(e=N0(o,r),e!==0&&e!==c.retryLane))throw c.retryLane=e,ee(t,e),Zt(o,t,e),X1;n1(l)||Ho(),a=rl(t,a,r)}else n1(l)?(a.flags|=192,a.child=t.child,a=null):(t=c.treeContext,et=fa(l.nextSibling),jt=a,G=!0,Lr=null,ga=!1,t!==null&&gh(a,t),a=Kl(a,e.children),a.flags|=4096);return a}return i?(ur(a),l=e.fallback,i=a.mode,c=t.child,s=c.sibling,e=Xa(c,{mode:"hidden",children:e.children}),e.subtreeFlags=c.subtreeFlags&65011712,s!==null?l=Xa(s,l):(l=Xr(l,i,r,null),l.flags|=2),l.return=a,e.return=a,e.sibling=l,a.child=e,mi(null,e),e=a.child,l=t.child.memoizedState,l===null?l=tl(r):(i=l.cachePool,i!==null?(c=ft._currentValue,i=i.parent!==c?{parent:c,pool:c}:i):i=fh(),l={baseLanes:l.baseLanes|r,cachePool:i}),e.memoizedState=l,e.childLanes=al(t,o,r),a.memoizedState=P2,mi(t.child,e)):(hr(a),r=t.child,t=r.sibling,r=Xa(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function Kl(t,a){return a=Bo({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Bo(t,a){return t=Rt(22,t,null,a),t.lanes=0,t}function rl(t,a,r){return $r(a,t.child,null,r),t=Kl(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function Qc(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),_l(t.return,a,r)}function el(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function du(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=ht.current,l=(o&2)!==0;if(l?(o=o&1|2,a.flags|=128):o&=1,tt(ht,o),Bt(t,a,e,r),e=G?Ui:0,!l&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qc(t,r,a);else if(t.tag===19)Qc(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&mo(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),el(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&mo(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}el(a,!0,r,null,n,e);break;case"together":el(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function $a(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Sr|=a.lanes,(r&a.childLanes)===0)if(t!==null){if($e(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(M(153));if(a.child!==null){for(t=a.child,r=Xa(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=Xa(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function Q1(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&xo(t)))}function Fp(t,a,r){switch(a.tag){case 3:uo(a,a.stateNode.containerInfo),cr(a,ft,t.memoizedState.cache),Jr();break;case 27:case 5:ml(a);break;case 4:uo(a,a.stateNode.containerInfo);break;case 10:cr(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ul(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(hr(a),a.flags|=128,null):(r&a.child.childLanes)!==0?lu(t,a,r):(hr(a),t=$a(t,a,r),t!==null?t.sibling:null);hr(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||($e(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return du(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),tt(ht,ht.current),e)break;return null;case 22:return a.lanes=0,ou(t,a,r,a.pendingProps);case 24:cr(a,ft,t.memoizedState.cache)}return $a(t,a,r)}function cu(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)vt=!0;else{if(!Q1(t,r)&&(a.flags&128)===0)return vt=!1,Fp(t,a,r);vt=(t.flags&131072)!==0}else vt=!1,G&&(a.flags&1048576)!==0&&sh(a,Ui,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=qr(a.elementType),a.type=t,typeof t=="function")C1(t)?(e=Pr(t,e),a.tag=1,a=Yc(null,a,t,e,r)):(a.tag=0,a=Ql(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===h1){a.tag=11,a=Oc(null,a,t,e,r);break t}else if(i===u1){a.tag=14,a=Uc(null,a,t,e,r);break t}}throw a=Ll(t)||t,Error(M(306,a,""))}}return a;case 0:return Ql(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=Pr(e,a.pendingProps),Yc(t,a,e,i,r);case 3:t:{if(uo(a,a.stateNode.containerInfo),t===null)throw Error(M(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,Nl(t,a),Hi(a,e,null,r);var o=a.memoizedState;if(e=o.cache,cr(a,ft,e),e!==n.cache&&Tl(a,[ft],r,!0),Wi(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=Xc(t,a,e,r);break t}else if(e!==i){i=sa(Error(M(424)),a),Zi(i),a=Xc(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,et=fa(t.firstChild),jt=a,G=!0,Lr=null,ga=!0,r=xh(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Jr(),e===i){a=$a(t,a,r);break t}Bt(t,a,e,r)}a=a.child}return a;case 26:return eo(t,a),t===null?(r=p0(a.type,null,a.pendingProps,null))?a.memoizedState=r:G||(r=a.type,t=a.pendingProps,e=zo(xr.current).createElement(r),e[bt]=a,e[qt]=t,Ht(e,r,t),mt(e),a.stateNode=e):a.memoizedState=p0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return ml(a),t===null&&G&&(e=a.stateNode=Pu(a.type,a.pendingProps,xr.current),jt=a,ga=!0,i=et,Vr(a.type)?(l1=i,et=fa(e.firstChild)):et=i),Bt(t,a,a.pendingProps.children,r),eo(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&G&&((i=e=et)&&(e=C5(e,a.type,a.pendingProps,ga),e!==null?(a.stateNode=e,jt=a,et=fa(e.firstChild),ga=!1,i=!0):i=!1),i||Wr(a)),ml(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,e1(i,n)?e=null:o!==null&&e1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=z1(t,a,Zp,null,null,r),Ki._currentValue=i),eo(t,a),Bt(t,a,e,r),a.child;case 6:return t===null&&G&&((t=r=et)&&(r=B5(r,a.pendingProps,ga),r!==null?(a.stateNode=r,jt=a,et=null,t=!0):t=!1),t||Wr(a)),null;case 13:return lu(t,a,r);case 4:return uo(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=$r(a,null,e,r):Bt(t,a,e,r),a.child;case 11:return Oc(t,a,a.type,a.pendingProps,r);case 7:return Bt(t,a,a.pendingProps,r),a.child;case 8:return Bt(t,a,a.pendingProps.children,r),a.child;case 12:return Bt(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,cr(a,a.type,e.value),Bt(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,Fr(a),i=Wt(i),e=e(i),a.flags|=1,Bt(t,a,e,r),a.child;case 14:return Uc(t,a,a.type,a.pendingProps,r);case 15:return nu(t,a,a.type,a.pendingProps,r);case 19:return du(t,a,r);case 31:return Jp(t,a,r);case 22:return ou(t,a,r,a.pendingProps);case 24:return Fr(a),e=Wt(ft),t===null?(i=W1(),i===null&&(i=P,n=j1(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},S1(a),cr(a,ft,i)):((t.lanes&r)!==0&&(Nl(t,a),Hi(a,null,null,r),Wi()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),cr(a,ft,e)):(e=n.cache,cr(a,ft,e),e!==i.cache&&Tl(a,[ft],r,!0))),Bt(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(M(156,a.tag))}function Ea(t){t.flags|=4}function il(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(zu())t.flags|=8192;else throw Kr=Lo,H1}else t.flags&=-16777217}function Kc(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!rs(a))if(zu())t.flags|=8192;else throw Kr=Lo,H1}function Zn(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?_0():536870912,t.lanes|=a,Ye|=a)}function pi(t,a){if(!G)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function rt(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function $p(t,a,r){var e=a.pendingProps;switch(b1(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(a),null;case 1:return rt(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),Qa(ft),De(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fe(a)?Ea(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,J2())),rt(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(Ea(a),n!==null?(rt(a),Kc(a,n)):(rt(a),il(a,i,null,e,r))):n?n!==t.memoizedState?(Ea(a),rt(a),Kc(a,n)):(rt(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&Ea(a),rt(a),il(a,i,t,e,r)),null;case 27:if(so(a),r=xr.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ea(a);else{if(!e){if(a.stateNode===null)throw Error(M(166));return rt(a),null}t=Wa.current,fe(a)?yc(a,t):(t=Pu(i,e,r),a.stateNode=t,Ea(a))}return rt(a),null;case 5:if(so(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ea(a);else{if(!e){if(a.stateNode===null)throw Error(M(166));return rt(a),null}if(n=Wa.current,fe(a))yc(a,n);else{var o=zo(xr.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[bt]=a,n[qt]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(Ht(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ea(a)}}return rt(a),il(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&Ea(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(M(166));if(t=xr.current,fe(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=jt,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[bt]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||Ju(t.nodeValue,r)),t||Wr(a,!0)}else t=zo(t).createTextNode(e),t[bt]=a,a.stateNode=t}return rt(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=fe(a),r!==null){if(t===null){if(!e)throw Error(M(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(557));t[bt]=a}else Jr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),t=!1}else r=J2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?(Kt(a),a):(Kt(a),null);if((a.flags&128)!==0)throw Error(M(558))}return rt(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=fe(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(M(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[bt]=a}else Jr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),i=!1}else i=J2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(Kt(a),a):(Kt(a),null)}return Kt(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),Zn(a,a.updateQueue),rt(a),null);case 4:return De(),t===null&&P1(a.stateNode.containerInfo),rt(a),null;case 10:return Qa(a.type),rt(a),null;case 19:if(yt(ht),e=a.memoizedState,e===null)return rt(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)pi(e,!1);else{if(dt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=mo(t),n!==null){for(a.flags|=128,pi(e,!1),t=n.updateQueue,a.updateQueue=t,Zn(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)hh(r,t),r=r.sibling;return tt(ht,ht.current&1|2),G&&Ua(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&Ft()>jo&&(a.flags|=128,i=!0,pi(e,!1),a.lanes=4194304)}else{if(!i)if(t=mo(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,Zn(a,t),pi(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!G)return rt(a),null}else 2*Ft()-e.renderingStartTime>jo&&r!==536870912&&(a.flags|=128,i=!0,pi(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=Ft(),t.sibling=null,r=ht.current,tt(ht,i?r&1|2:r&1),G&&Ua(a,e.treeForkCount),t):(rt(a),null);case 22:case 23:return Kt(a),A1(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(rt(a),a.subtreeFlags&6&&(a.flags|=8192)):rt(a),r=a.updateQueue,r!==null&&Zn(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&yt(Qr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),Qa(ft),rt(a),null;case 25:return null;case 30:return null}throw Error(M(156,a.tag))}function Ip(t,a){switch(b1(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return Qa(ft),De(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return so(a),null;case 31:if(a.memoizedState!==null){if(Kt(a),a.alternate===null)throw Error(M(340));Jr()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(Kt(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(M(340));Jr()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return yt(ht),null;case 4:return De(),null;case 10:return Qa(a.type),null;case 22:case 23:return Kt(a),A1(),t!==null&&yt(Qr),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return Qa(ft),null;case 25:return null;default:return null}}function hu(t,a){switch(b1(a),a.tag){case 3:Qa(ft),De();break;case 26:case 27:case 5:so(a);break;case 4:De();break;case 31:a.memoizedState!==null&&Kt(a);break;case 13:Kt(a);break;case 19:yt(ht);break;case 10:Qa(a.type);break;case 22:case 23:Kt(a),A1(),t!==null&&yt(Qr);break;case 24:Qa(ft)}}function nn(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(l){J(a,a.return,l)}}function Hr(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,l=o.destroy;if(l!==void 0){o.destroy=void 0,i=a;var c=r,s=l;try{s()}catch(v){J(i,c,v)}}}e=e.next}while(e!==n)}}catch(v){J(a,a.return,v)}}function uu(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{Mh(a,r)}catch(e){J(t,t.return,e)}}}function su(t,a,r){r.props=Pr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){J(t,a,e)}}function Ai(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){J(t,a,i)}}function ja(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){J(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){J(t,a,i)}else r.current=null}function gu(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){J(t,t.return,i)}}function nl(t,a,r){try{var e=t.stateNode;x5(e,t.type,r,a),e[qt]=a}catch(i){J(t,t.return,i)}}function pu(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Vr(t.type)||t.tag===4}function ol(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||pu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Vr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rl(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=Ga));else if(e!==4&&(e===27&&Vr(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(Rl(t,a,r),t=t.sibling;t!==null;)Rl(t,a,r),t=t.sibling}function bo(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&Vr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(bo(t,a,r),t=t.sibling;t!==null;)bo(t,a,r),t=t.sibling}function fu(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Ht(a,e,r),a[bt]=t,a[qt]=r}catch(n){J(t,t.return,n)}}var Za=!1,pt=!1,ll=!1,Rc=typeof WeakSet=="function"?WeakSet:Set,Mt=null;function Pp(t,a){if(t=t.containerInfo,a1=No,t=rh(t),m1(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,l=-1,c=-1,s=0,v=0,x=t,p=null;a:for(;;){for(var k;x!==r||i!==0&&x.nodeType!==3||(l=o+i),x!==n||e!==0&&x.nodeType!==3||(c=o+e),x.nodeType===3&&(o+=x.nodeValue.length),(k=x.firstChild)!==null;)p=x,x=k;for(;;){if(x===t)break a;if(p===r&&++s===i&&(l=o),p===n&&++v===e&&(c=o),(k=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=k}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(r1={focusedElem:t,selectionRange:r},No=!1,Mt=a;Mt!==null;)if(a=Mt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Mt=t;else for(;Mt!==null;){switch(a=Mt,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var y=Pr(r.type,i);t=e.getSnapshotBeforeUpdate(y,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(w){J(r,r.return,w)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)i1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":i1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(M(163))}if(t=a.sibling,t!==null){t.return=a.return,Mt=t;break}Mt=a.return}}function vu(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:Da(t,r),e&4&&nn(5,r);break;case 1:if(Da(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){J(r,r.return,o)}else{var i=Pr(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){J(r,r.return,o)}}e&64&&uu(r),e&512&&Ai(r,r.return);break;case 3:if(Da(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{Mh(t,a)}catch(o){J(r,r.return,o)}}break;case 27:a===null&&e&4&&fu(r);case 26:case 5:Da(t,r),a===null&&e&4&&gu(r),e&512&&Ai(r,r.return);break;case 12:Da(t,r);break;case 31:Da(t,r),e&4&&Lu(t,r);break;case 13:Da(t,r),e&4&&Mu(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=d5.bind(null,r),b5(t,r))));break;case 22:if(e=r.memoizedState!==null||Za,!e){a=a!==null&&a.memoizedState!==null||pt,i=Za;var n=pt;Za=e,(pt=a)&&!n?Oa(t,r,(r.subtreeFlags&8772)!==0):Da(t,r),Za=i,pt=n}break;case 30:break;default:Da(t,r)}}function ku(t){var a=t.alternate;a!==null&&(t.alternate=null,ku(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&f1(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ot=null,Ot=!1;function Na(t,a,r){for(r=r.child;r!==null;)xu(t,a,r),r=r.sibling}function xu(t,a,r){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount($i,r)}catch{}switch(r.tag){case 26:pt||ja(r,a),Na(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:pt||ja(r,a);var e=ot,i=Ot;Vr(r.type)&&(ot=r.stateNode,Ot=!1),Na(t,a,r),Ti(r.stateNode),ot=e,Ot=i;break;case 5:pt||ja(r,a);case 6:if(e=ot,i=Ot,ot=null,Na(t,a,r),ot=e,Ot=i,ot!==null)if(Ot)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(r.stateNode)}catch(n){J(r,a,n)}else try{ot.removeChild(r.stateNode)}catch(n){J(r,a,n)}break;case 18:ot!==null&&(Ot?(t=ot,c0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Re(t)):c0(ot,r.stateNode));break;case 4:e=ot,i=Ot,ot=r.stateNode.containerInfo,Ot=!0,Na(t,a,r),ot=e,Ot=i;break;case 0:case 11:case 14:case 15:Hr(2,r,a),pt||Hr(4,r,a),Na(t,a,r);break;case 1:pt||(ja(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&su(r,a,e)),Na(t,a,r);break;case 21:Na(t,a,r);break;case 22:pt=(e=pt)||r.memoizedState!==null,Na(t,a,r),pt=e;break;default:Na(t,a,r)}}function Lu(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Re(t)}catch(r){J(a,a.return,r)}}}function Mu(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Re(t)}catch(r){J(a,a.return,r)}}function t5(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new Rc),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new Rc),a;default:throw Error(M(435,t.tag))}}function qn(t,a){var r=t5(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=c5.bind(null,t,e);e.then(i,i)}})}function Nt(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Vr(l.type)){ot=l.stateNode,Ot=!1;break t}break;case 5:ot=l.stateNode,Ot=!1;break t;case 3:case 4:ot=l.stateNode.containerInfo,Ot=!0;break t}l=l.return}if(ot===null)throw Error(M(160));xu(n,o,i),ot=null,Ot=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)mu(a,t),a=a.sibling}var Ma=null;function mu(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nt(a,t),Dt(t),e&4&&(Hr(3,t,t.return),nn(3,t),Hr(5,t,t.return));break;case 1:Nt(a,t),Dt(t),e&512&&(pt||r===null||ja(r,r.return)),e&64&&Za&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=Ma;if(Nt(a,t),Dt(t),e&512&&(pt||r===null||ja(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[tn]||n[bt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),Ht(n,e,r),n[bt]=t,mt(n),e=n;break t;case"link":var o=v0("link","href",i).get(e+(r.href||""));if(o){for(var l=0;l<o.length;l++)if(n=o[l],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(l,1);break a}}n=i.createElement(e),Ht(n,e,r),i.head.appendChild(n);break;case"meta":if(o=v0("meta","content",i).get(e+(r.content||""))){for(l=0;l<o.length;l++)if(n=o[l],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(l,1);break a}}n=i.createElement(e),Ht(n,e,r),i.head.appendChild(n);break;default:throw Error(M(468,e))}n[bt]=t,mt(n),e=n}t.stateNode=e}else k0(i,t.type,t.stateNode);else t.stateNode=f0(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?k0(i,t.type,t.stateNode):f0(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&nl(t,t.memoizedProps,r.memoizedProps)}break;case 27:Nt(a,t),Dt(t),e&512&&(pt||r===null||ja(r,r.return)),r!==null&&e&4&&nl(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Nt(a,t),Dt(t),e&512&&(pt||r===null||ja(r,r.return)),t.flags&32){i=t.stateNode;try{Ue(i,"")}catch(y){J(t,t.return,y)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,nl(t,i,r!==null?r.memoizedProps:i)),e&1024&&(ll=!0);break;case 6:if(Nt(a,t),Dt(t),e&4){if(t.stateNode===null)throw Error(M(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(y){J(t,t.return,y)}}break;case 3:if(oo=null,i=Ma,Ma=_o(a.containerInfo),Nt(a,t),Ma=i,Dt(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{Re(a.containerInfo)}catch(y){J(t,t.return,y)}ll&&(ll=!1,yu(t));break;case 4:e=Ma,Ma=_o(t.stateNode.containerInfo),Nt(a,t),Dt(t),Ma=e;break;case 12:Nt(a,t),Dt(t);break;case 31:Nt(a,t),Dt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,qn(t,e)));break;case 13:Nt(a,t),Dt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Fo=Ft()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,qn(t,e)));break;case 22:i=t.memoizedState!==null;var c=r!==null&&r.memoizedState!==null,s=Za,v=pt;if(Za=s||i,pt=v||c,Nt(a,t),pt=v,Za=s,Dt(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||c||Za||pt||Gr(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){c=r=a;try{if(n=c.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{l=c.stateNode;var x=c.memoizedProps.style,p=x!=null&&x.hasOwnProperty("display")?x.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){J(c,c.return,y)}}}else if(a.tag===6){if(r===null){c=a;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(y){J(c,c.return,y)}}}else if(a.tag===18){if(r===null){c=a;try{var k=c.stateNode;i?h0(k,!0):h0(c.stateNode,!1)}catch(y){J(c,c.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,qn(t,r))));break;case 19:Nt(a,t),Dt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,qn(t,e)));break;case 30:break;case 21:break;default:Nt(a,t),Dt(t)}}function Dt(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if(pu(e)){r=e;break}e=e.return}if(r==null)throw Error(M(160));switch(r.tag){case 27:var i=r.stateNode,n=ol(t);bo(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(Ue(o,""),r.flags&=-33);var l=ol(t);bo(t,l,o);break;case 3:case 4:var c=r.stateNode.containerInfo,s=ol(t);Rl(t,s,c);break;default:throw Error(M(161))}}catch(v){J(t,t.return,v)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function yu(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;yu(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Da(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)vu(t,a.alternate,a),a=a.sibling}function Gr(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Hr(4,a,a.return),Gr(a);break;case 1:ja(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&su(a,a.return,r),Gr(a);break;case 27:Ti(a.stateNode);case 26:case 5:ja(a,a.return),Gr(a);break;case 22:a.memoizedState===null&&Gr(a);break;case 30:Gr(a);break;default:Gr(a)}t=t.sibling}}function Oa(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:Oa(i,n,r),nn(4,n);break;case 1:if(Oa(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(s){J(e,e.return,s)}if(e=n,i=e.updateQueue,i!==null){var l=e.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Lh(c[i],l)}catch(s){J(e,e.return,s)}}r&&o&64&&uu(n),Ai(n,n.return);break;case 27:fu(n);case 26:case 5:Oa(i,n,r),r&&e===null&&o&4&&gu(n),Ai(n,n.return);break;case 12:Oa(i,n,r);break;case 31:Oa(i,n,r),r&&o&4&&Lu(i,n);break;case 13:Oa(i,n,r),r&&o&4&&Mu(i,n);break;case 22:n.memoizedState===null&&Oa(i,n,r),Ai(n,n.return);break;case 30:break;default:Oa(i,n,r)}a=a.sibling}}function K1(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&rn(r))}function R1(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&rn(t))}function La(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)wu(t,a,r,e),a=a.sibling}function wu(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:La(t,a,r,e),i&2048&&nn(9,a);break;case 1:La(t,a,r,e);break;case 3:La(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&rn(t)));break;case 12:if(i&2048){La(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,l=n.onPostCommit;typeof l=="function"&&l(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(c){J(a,a.return,c)}}else La(t,a,r,e);break;case 31:La(t,a,r,e);break;case 13:La(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?La(t,a,r,e):Vi(t,a):n._visibility&2?La(t,a,r,e):(n._visibility|=2,ke(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&K1(o,a);break;case 24:La(t,a,r,e),i&2048&&R1(a.alternate,a);break;default:La(t,a,r,e)}}function ke(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,l=r,c=e,s=o.flags;switch(o.tag){case 0:case 11:case 15:ke(n,o,l,c,i),nn(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?ke(n,o,l,c,i):Vi(n,o):(v._visibility|=2,ke(n,o,l,c,i)),i&&s&2048&&K1(o.alternate,o);break;case 24:ke(n,o,l,c,i),i&&s&2048&&R1(o.alternate,o);break;default:ke(n,o,l,c,i)}a=a.sibling}}function Vi(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:Vi(r,e),i&2048&&K1(e.alternate,e);break;case 24:Vi(r,e),i&2048&&R1(e.alternate,e);break;default:Vi(r,e)}a=a.sibling}}var yi=8192;function ve(t,a,r){if(t.subtreeFlags&yi)for(t=t.child;t!==null;)Cu(t,a,r),t=t.sibling}function Cu(t,a,r){switch(t.tag){case 26:ve(t,a,r),t.flags&yi&&t.memoizedState!==null&&D5(r,Ma,t.memoizedState,t.memoizedProps);break;case 5:ve(t,a,r);break;case 3:case 4:var e=Ma;Ma=_o(t.stateNode.containerInfo),ve(t,a,r),Ma=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=yi,yi=16777216,ve(t,a,r),yi=e):ve(t,a,r));break;default:ve(t,a,r)}}function Bu(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function fi(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];Mt=e,ju(e,t)}Bu(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bu(t),t=t.sibling}function bu(t){switch(t.tag){case 0:case 11:case 15:fi(t),t.flags&2048&&Hr(9,t,t.return);break;case 3:fi(t);break;case 12:fi(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,io(t)):fi(t);break;default:fi(t)}}function io(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];Mt=e,ju(e,t)}Bu(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Hr(8,a,a.return),io(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,io(a));break;default:io(a)}t=t.sibling}}function ju(t,a){for(;Mt!==null;){var r=Mt;switch(r.tag){case 0:case 11:case 15:Hr(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:rn(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,Mt=e;else t:for(r=t;Mt!==null;){e=Mt;var i=e.sibling,n=e.return;if(ku(e),e===r){Mt=null;break t}if(i!==null){i.return=n,Mt=i;break t}Mt=n}}}var a5={getCacheForType:function(t){var a=Wt(ft),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return Wt(ft).controller.signal}},r5=typeof WeakMap=="function"?WeakMap:Map,Q=0,P=null,Z=null,q=0,R=0,Qt=null,fr=!1,Pe=!1,J1=!1,Ia=0,dt=0,Sr=0,Rr=0,F1=0,Jt=0,Ye=0,zi=null,Ut=null,Jl=!1,Fo=0,Wu=0,jo=1/0,Wo=null,yr=null,kt=0,wr=null,Xe=null,Ka=0,Fl=0,$l=null,Hu=null,_i=0,Il=null;function Pt(){return(Q&2)!==0&&q!==0?q&-q:V.T!==null?I1():D0()}function Su(){if(Jt===0)if((q&536870912)===0||G){var t=Vn;Vn<<=1,(Vn&3932160)===0&&(Vn=262144),Jt=t}else Jt=536870912;return t=aa.current,t!==null&&(t.flags|=32),Jt}function Zt(t,a,r){(t===P&&(R===2||R===9)||t.cancelPendingCommit!==null)&&(Qe(t,0),vr(t,q,Jt,!1)),Pi(t,r),((Q&2)===0||t!==P)&&(t===P&&((Q&2)===0&&(Rr|=r),dt===4&&vr(t,q,Jt,!1)),Sa(t))}function Au(t,a,r){if((Q&6)!==0)throw Error(M(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||Ii(t,a),i=e?n5(t,a):dl(t,a,!0),n=e;do{if(i===0){Pe&&!e&&vr(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!e5(r)){i=dl(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var l=t;i=zi;var c=l.current.memoizedState.isDehydrated;if(c&&(Qe(l,o).flags|=256),o=dl(l,o,!1),o!==2){if(J1&&!c){l.errorRecoveryDisabledLanes|=n,Rr|=n,i=4;break t}n=Ut,Ut=i,n!==null&&(Ut===null?Ut=n:Ut.push.apply(Ut,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){Qe(t,0),vr(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(M(345));case 4:if((a&4194048)!==a)break;case 6:vr(e,a,Jt,!fr);break t;case 2:Ut=null;break;case 3:case 5:break;default:throw Error(M(329))}if((a&62914560)===a&&(i=Fo+300-Ft(),10<i)){if(vr(e,a,Jt,!fr),Oo(e,0,!0)!==0)break t;Ka=a,e.timeoutHandle=$u(Jc.bind(null,e,r,Ut,Wo,Jl,a,Jt,Rr,Ye,fr,n,"Throttled",-0,0),i);break t}Jc(e,r,Ut,Wo,Jl,a,Jt,Rr,Ye,fr,n,null,-0,0)}}break}while(!0);Sa(t)}function Jc(t,a,r,e,i,n,o,l,c,s,v,x,p,k){if(t.timeoutHandle=-1,x=a.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ga},Cu(a,n,x);var y=(n&62914560)===n?Fo-Ft():(n&4194048)===n?Wu-Ft():0;if(y=O5(x,y),y!==null){Ka=n,t.cancelPendingCommit=y($c.bind(null,t,a,n,r,e,i,o,l,c,v,x,null,p,k)),vr(t,n,o,!s);return}}$c(t,a,n,r,e,i,o,l,c)}function e5(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!ta(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function vr(t,a,r,e){a&=~F1,a&=~Rr,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-It(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&T0(t,r,a)}function $o(){return(Q&6)===0?(on(0,!1),!1):!0}function $1(){if(Z!==null){if(R===0)var t=Z.return;else t=Z,Ya=ie=null,E1(t),Te=null,qi=0,t=Z;for(;t!==null;)hu(t.alternate,t),t=t.return;Z=null}}function Qe(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,m5(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),Ka=0,$1(),P=t,Z=r=Xa(t.current,null),q=a,R=0,Qt=null,fr=!1,Pe=Ii(t,a),J1=!1,Ye=Jt=F1=Rr=Sr=dt=0,Ut=zi=null,Jl=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-It(e),n=1<<i;a|=t[i],e&=~n}return Ia=a,Go(),r}function Vu(t,a){E=null,V.H=Yi,a===Ie||a===Xo?(a=jc(),R=3):a===H1?(a=jc(),R=4):R=a===X1?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Qt=a,Z===null&&(dt=1,Co(t,sa(a,t.current)))}function zu(){var t=aa.current;return t===null?!0:(q&4194048)===q?pa===null:(q&62914560)===q||(q&536870912)!==0?t===pa:!1}function _u(){var t=V.H;return V.H=Yi,t===null?Yi:t}function Tu(){var t=V.A;return V.A=a5,t}function Ho(){dt=4,fr||(q&4194048)!==q&&aa.current!==null||(Pe=!0),(Sr&134217727)===0&&(Rr&134217727)===0||P===null||vr(P,q,Jt,!1)}function dl(t,a,r){var e=Q;Q|=2;var i=_u(),n=Tu();(P!==t||q!==a)&&(Wo=null,Qe(t,a)),a=!1;var o=dt;t:do try{if(R!==0&&Z!==null){var l=Z,c=Qt;switch(R){case 8:$1(),o=6;break t;case 3:case 2:case 9:case 6:aa.current===null&&(a=!0);var s=R;if(R=0,Qt=null,Se(t,l,c,s),r&&Pe){o=0;break t}break;default:s=R,R=0,Qt=null,Se(t,l,c,s)}}i5(),o=dt;break}catch(v){Vu(t,v)}while(!0);return a&&t.shellSuspendCounter++,Ya=ie=null,Q=e,V.H=i,V.A=n,Z===null&&(P=null,q=0,Go()),o}function i5(){for(;Z!==null;)Eu(Z)}function n5(t,a){var r=Q;Q|=2;var e=_u(),i=Tu();P!==t||q!==a?(Wo=null,jo=Ft()+500,Qe(t,a)):Pe=Ii(t,a);t:do try{if(R!==0&&Z!==null){a=Z;var n=Qt;a:switch(R){case 1:R=0,Qt=null,Se(t,a,n,1);break;case 2:case 9:if(bc(n)){R=0,Qt=null,Fc(a);break}a=function(){R!==2&&R!==9||P!==t||(R=7),Sa(t)},n.then(a,a);break t;case 3:R=7;break t;case 4:R=5;break t;case 7:bc(n)?(R=0,Qt=null,Fc(a)):(R=0,Qt=null,Se(t,a,n,7));break;case 5:var o=null;switch(Z.tag){case 26:o=Z.memoizedState;case 5:case 27:var l=Z;if(o?rs(o):l.stateNode.complete){R=0,Qt=null;var c=l.sibling;if(c!==null)Z=c;else{var s=l.return;s!==null?(Z=s,Io(s)):Z=null}break a}}R=0,Qt=null,Se(t,a,n,5);break;case 6:R=0,Qt=null,Se(t,a,n,6);break;case 8:$1(),dt=6;break t;default:throw Error(M(462))}}o5();break}catch(v){Vu(t,v)}while(!0);return Ya=ie=null,V.H=e,V.A=i,Q=r,Z!==null?0:(P=null,q=0,Go(),dt)}function o5(){for(;Z!==null&&!H4();)Eu(Z)}function Eu(t){var a=cu(t.alternate,t,Ia);t.memoizedProps=t.pendingProps,a===null?Io(t):Z=a}function Fc(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=Gc(r,a,a.pendingProps,a.type,void 0,q);break;case 11:a=Gc(r,a,a.pendingProps,a.type.render,a.ref,q);break;case 5:E1(a);default:hu(r,a),a=Z=hh(a,Ia),a=cu(r,a,Ia)}t.memoizedProps=t.pendingProps,a===null?Io(t):Z=a}function Se(t,a,r,e){Ya=ie=null,E1(a),Te=null,qi=0;var i=a.return;try{if(Rp(t,i,a,r,q)){dt=1,Co(t,sa(r,t.current)),Z=null;return}}catch(n){if(i!==null)throw Z=i,n;dt=1,Co(t,sa(r,t.current)),Z=null;return}a.flags&32768?(G||e===1?t=!0:Pe||(q&536870912)!==0?t=!1:(fr=t=!0,(e===2||e===9||e===3||e===6)&&(e=aa.current,e!==null&&e.tag===13&&(e.flags|=16384))),Nu(a,t)):Io(a)}function Io(t){var a=t;do{if((a.flags&32768)!==0){Nu(a,fr);return}t=a.return;var r=$p(a.alternate,a,Ia);if(r!==null){Z=r;return}if(a=a.sibling,a!==null){Z=a;return}Z=a=t}while(a!==null);dt===0&&(dt=5)}function Nu(t,a){do{var r=Ip(t.alternate,t);if(r!==null){r.flags&=32767,Z=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){Z=t;return}Z=t=r}while(t!==null);dt=6,Z=null}function $c(t,a,r,e,i,n,o,l,c){t.cancelPendingCommit=null;do Po();while(kt!==0);if((Q&6)!==0)throw Error(M(327));if(a!==null){if(a===t.current)throw Error(M(177));if(n=a.lanes|a.childLanes,n|=y1,O4(t,r,n,o,l,c),t===P&&(Z=P=null,q=0),Xe=a,wr=t,Ka=r,Fl=n,$l=i,Hu=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,h5(go,function(){return qu(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=V.T,V.T=null,i=K.p,K.p=2,o=Q,Q|=4;try{Pp(t,a,r)}finally{Q=o,K.p=i,V.T=e}}kt=1,Du(),Ou(),Uu()}}function Du(){if(kt===1){kt=0;var t=wr,a=Xe,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=V.T,V.T=null;var e=K.p;K.p=2;var i=Q;Q|=4;try{mu(a,t);var n=r1,o=rh(t.containerInfo),l=n.focusedElem,c=n.selectionRange;if(o!==l&&l&&l.ownerDocument&&ah(l.ownerDocument.documentElement,l)){if(c!==null&&m1(l)){var s=c.start,v=c.end;if(v===void 0&&(v=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(v,l.value.length);else{var x=l.ownerDocument||document,p=x&&x.defaultView||window;if(p.getSelection){var k=p.getSelection(),y=l.textContent.length,w=Math.min(c.start,y),N=c.end===void 0?w:Math.min(c.end,y);!k.extend&&w>N&&(o=N,N=w,w=o);var g=Lc(l,w),u=Lc(l,N);if(g&&u&&(k.rangeCount!==1||k.anchorNode!==g.node||k.anchorOffset!==g.offset||k.focusNode!==u.node||k.focusOffset!==u.offset)){var f=x.createRange();f.setStart(g.node,g.offset),k.removeAllRanges(),w>N?(k.addRange(f),k.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),k.addRange(f))}}}}for(x=[],k=l;k=k.parentNode;)k.nodeType===1&&x.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<x.length;l++){var L=x[l];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}No=!!a1,r1=a1=null}finally{Q=i,K.p=e,V.T=r}}t.current=a,kt=2}}function Ou(){if(kt===2){kt=0;var t=wr,a=Xe,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=V.T,V.T=null;var e=K.p;K.p=2;var i=Q;Q|=4;try{vu(t,a.alternate,a)}finally{Q=i,K.p=e,V.T=r}}kt=3}}function Uu(){if(kt===4||kt===3){kt=0,S4();var t=wr,a=Xe,r=Ka,e=Hu;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?kt=5:(kt=0,Xe=wr=null,Zu(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(yr=null),p1(r),a=a.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot($i,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=V.T,i=K.p,K.p=2,V.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var l=e[o];n(l.value,{componentStack:l.stack})}}finally{V.T=a,K.p=i}}(Ka&3)!==0&&Po(),Sa(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===Il?_i++:(_i=0,Il=t):_i=0,on(0,!1)}}function Zu(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,rn(a)))}function Po(){return Du(),Ou(),Uu(),qu()}function qu(){if(kt!==5)return!1;var t=wr,a=Fl;Fl=0;var r=p1(Ka),e=V.T,i=K.p;try{K.p=32>r?32:r,V.T=null,r=$l,$l=null;var n=wr,o=Ka;if(kt=0,Xe=wr=null,Ka=0,(Q&6)!==0)throw Error(M(331));var l=Q;if(Q|=4,bu(n.current),wu(n,n.current,o,r),Q=l,on(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot($i,n)}catch{}return!0}finally{K.p=i,V.T=e,Zu(t,a)}}function Ic(t,a,r){a=sa(r,a),a=Xl(t.stateNode,a,2),t=mr(t,a,2),t!==null&&(Pi(t,2),Sa(t))}function J(t,a,r){if(t.tag===3)Ic(t,t,r);else for(;a!==null;){if(a.tag===3){Ic(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(yr===null||!yr.has(e))){t=sa(r,t),r=eu(2),e=mr(a,r,2),e!==null&&(iu(r,e,a,t),Pi(e,2),Sa(e));break}}a=a.return}}function cl(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new r5;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(J1=!0,i.add(r),t=l5.bind(null,t,a,r),a.then(t,t))}function l5(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,P===t&&(q&r)===r&&(dt===4||dt===3&&(q&62914560)===q&&300>Ft()-Fo?(Q&2)===0&&Qe(t,0):F1|=r,Ye===q&&(Ye=0)),Sa(t)}function Gu(t,a){a===0&&(a=_0()),t=ee(t,a),t!==null&&(Pi(t,a),Sa(t))}function d5(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),Gu(t,r)}function c5(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(M(314))}e!==null&&e.delete(a),Gu(t,r)}function h5(t,a){return s1(t,a)}var So=null,xe=null,Pl=!1,Ao=!1,hl=!1,kr=0;function Sa(t){t!==xe&&t.next===null&&(xe===null?So=xe=t:xe=xe.next=t),Ao=!0,Pl||(Pl=!0,s5())}function on(t,a){if(!hl&&Ao){hl=!0;do for(var r=!1,e=So;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,l=e.pingedLanes;n=(1<<31-It(42|t)+1)-1,n&=i&~(o&~l),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,Pc(e,n))}else n=q,n=Oo(e,e===P?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||Ii(e,n)||(r=!0,Pc(e,n));e=e.next}while(r);hl=!1}}function u5(){Yu()}function Yu(){Ao=Pl=!1;var t=0;kr!==0&&M5()&&(t=kr);for(var a=Ft(),r=null,e=So;e!==null;){var i=e.next,n=Xu(e,a);n===0?(e.next=null,r===null?So=i:r.next=i,i===null&&(xe=r)):(r=e,(t!==0||(n&3)!==0)&&(Ao=!0)),e=i}kt!==0&&kt!==5||on(t,!1),kr!==0&&(kr=0)}function Xu(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-It(n),l=1<<o,c=i[o];c===-1?((l&r)===0||(l&e)!==0)&&(i[o]=D4(l,a)):c<=a&&(t.expiredLanes|=l),n&=~l}if(a=P,r=q,r=Oo(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(R===2||R===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&O2(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ii(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&O2(e),p1(r)){case 2:case 8:r=V0;break;case 32:r=go;break;case 268435456:r=z0;break;default:r=go}return e=Qu.bind(null,t),r=s1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&O2(e),t.callbackPriority=2,t.callbackNode=null,2}function Qu(t,a){if(kt!==0&&kt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Po()&&t.callbackNode!==r)return null;var e=q;return e=Oo(t,t===P?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(Au(t,e,a),Xu(t,Ft()),t.callbackNode!=null&&t.callbackNode===r?Qu.bind(null,t):null)}function Pc(t,a){if(Po())return null;Au(t,a,!0)}function s5(){y5(function(){(Q&6)!==0?s1(A0,u5):Yu()})}function I1(){if(kr===0){var t=Ze;t===0&&(t=An,An<<=1,(An&261888)===0&&(An=256)),kr=t}return kr}function t0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Jn(""+t)}function a0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function g5(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=t0((i[qt]||null).action),o=e.submitter;o&&(a=(a=o[qt]||null)?t0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var l=new Uo("action","action",null,e,i);t.push({event:l,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(kr!==0){var c=o?a0(i,o):new FormData(i);Gl(r,{pending:!0,data:c,method:i.method,action:n},null,c)}}else typeof n=="function"&&(l.preventDefault(),c=o?a0(i,o):new FormData(i),Gl(r,{pending:!0,data:c,method:i.method,action:n},n,c))},currentTarget:i}]})}}for(Gn=0;Gn<Al.length;Gn++)Yn=Al[Gn],r0=Yn.toLowerCase(),e0=Yn[0].toUpperCase()+Yn.slice(1),ma(r0,"on"+e0);var Yn,r0,e0,Gn;ma(ih,"onAnimationEnd");ma(nh,"onAnimationIteration");ma(oh,"onAnimationStart");ma("dblclick","onDoubleClick");ma("focusin","onFocus");ma("focusout","onBlur");ma(Ap,"onTransitionRun");ma(Vp,"onTransitionStart");ma(zp,"onTransitionCancel");ma(lh,"onTransitionEnd");Oe("onMouseEnter",["mouseout","mouseover"]);Oe("onMouseLeave",["mouseout","mouseover"]);Oe("onPointerEnter",["pointerout","pointerover"]);Oe("onPointerLeave",["pointerout","pointerover"]);te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));te("onBeforeInput",["compositionend","keypress","textInput","paste"]);te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xi));function Ku(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var l=e[o],c=l.instance,s=l.currentTarget;if(l=l.listener,c!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){fo(v)}i.currentTarget=null,n=c}else for(o=0;o<e.length;o++){if(l=e[o],c=l.instance,s=l.currentTarget,l=l.listener,c!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){fo(v)}i.currentTarget=null,n=c}}}}function U(t,a){var r=a[wl];r===void 0&&(r=a[wl]=new Set);var e=t+"__bubble";r.has(e)||(Ru(a,t,2,!1),r.add(e))}function ul(t,a,r){var e=0;a&&(e|=4),Ru(r,t,e,a)}var Xn="_reactListening"+Math.random().toString(36).slice(2);function P1(t){if(!t[Xn]){t[Xn]=!0,O0.forEach(function(r){r!=="selectionchange"&&(p5.has(r)||ul(r,!1,t),ul(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Xn]||(a[Xn]=!0,ul("selectionchange",!1,a))}}function Ru(t,a,r,e){switch(ls(a)){case 2:var i=q5;break;case 8:i=G5;break;default:i=ed}r=i.bind(null,a,r,t),i=void 0,!Wl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function sl(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var l=e.stateNode.containerInfo;if(l===i)break;if(o===4)for(o=e.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;l!==null;){if(o=me(l),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){e=n=o;continue t}l=l.parentNode}}e=e.return}K0(function(){var s=n,v=k1(r),x=[];t:{var p=dh.get(t);if(p!==void 0){var k=Uo,y=t;switch(t){case"keypress":if($n(r)===0)break t;case"keydown":case"keyup":k=cp;break;case"focusin":y="focus",k=Y2;break;case"focusout":y="blur",k=Y2;break;case"beforeblur":case"afterblur":k=Y2;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=$4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=sp;break;case ih:case nh:case oh:k=tp;break;case lh:k=pp;break;case"scroll":case"scrollend":k=J4;break;case"wheel":k=vp;break;case"copy":case"cut":case"paste":k=rp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=sc;break;case"toggle":case"beforetoggle":k=xp}var w=(a&4)!==0,N=!w&&(t==="scroll"||t==="scrollend"),g=w?p!==null?p+"Capture":null:p;w=[];for(var u=s,f;u!==null;){var L=u;if(f=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||f===null||g===null||(L=Ni(u,g),L!=null&&w.push(Qi(u,L,f))),N)break;u=u.return}0<w.length&&(p=new k(p,y,null,r,v),x.push({event:p,listeners:w}))}}if((a&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",p&&r!==jl&&(y=r.relatedTarget||r.fromElement)&&(me(y)||y[Je]))break t;if((k||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,k?(y=r.relatedTarget||r.toElement,k=s,y=y?me(y):null,y!==null&&(N=Fi(y),w=y.tag,y!==N||w!==5&&w!==27&&w!==6)&&(y=null)):(k=null,y=s),k!==y)){if(w=hc,L="onMouseLeave",g="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(w=sc,L="onPointerLeave",g="onPointerEnter",u="pointer"),N=k==null?p:Mi(k),f=y==null?p:Mi(y),p=new w(L,u+"leave",k,r,v),p.target=N,p.relatedTarget=f,L=null,me(v)===s&&(w=new w(g,u+"enter",y,r,v),w.target=f,w.relatedTarget=N,L=w),N=L,k&&y)a:{for(w=f5,g=k,u=y,f=0,L=g;L;L=w(L))f++;L=0;for(var W=u;W;W=w(W))L++;for(;0<f-L;)g=w(g),f--;for(;0<L-f;)u=w(u),L--;for(;f--;){if(g===u||u!==null&&g===u.alternate){w=g;break a}g=w(g),u=w(u)}w=null}else w=null;k!==null&&i0(x,p,k,w,!1),y!==null&&N!==null&&i0(x,N,y,w,!0)}}t:{if(p=s?Mi(s):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var z=vc;else if(fc(p))if(P0)z=Wp;else{z=bp;var B=Bp}else k=p.nodeName,!k||k.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?s&&v1(s.elementType)&&(z=vc):z=jp;if(z&&(z=z(t,s))){I0(x,z,r,v);break t}B&&B(t,p,s),t==="focusout"&&s&&p.type==="number"&&s.memoizedProps.value!=null&&bl(p,"number",p.value)}switch(B=s?Mi(s):window,t){case"focusin":(fc(B)||B.contentEditable==="true")&&(Ce=B,Hl=s,Bi=null);break;case"focusout":Bi=Hl=Ce=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,Mc(x,r,v);break;case"selectionchange":if(Sp)break;case"keydown":case"keyup":Mc(x,r,v)}var A;if(M1)t:{switch(t){case"compositionstart":var H="onCompositionStart";break t;case"compositionend":H="onCompositionEnd";break t;case"compositionupdate":H="onCompositionUpdate";break t}H=void 0}else we?F0(t,r)&&(H="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(H="onCompositionStart");H&&(J0&&r.locale!=="ko"&&(we||H!=="onCompositionStart"?H==="onCompositionEnd"&&we&&(A=R0()):(pr=v,x1="value"in pr?pr.value:pr.textContent,we=!0)),B=Vo(s,H),0<B.length&&(H=new uc(H,t,null,r,v),x.push({event:H,listeners:B}),A?H.data=A:(A=$0(r),A!==null&&(H.data=A)))),(A=Mp?mp(t,r):yp(t,r))&&(H=Vo(s,"onBeforeInput"),0<H.length&&(B=new uc("onBeforeInput","beforeinput",null,r,v),x.push({event:B,listeners:H}),B.data=A)),g5(x,t,s,r,v)}Ku(x,a)})}function Qi(t,a,r){return{instance:t,listener:a,currentTarget:r}}function Vo(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Ni(t,r),i!=null&&e.unshift(Qi(t,i,n)),i=Ni(t,a),i!=null&&e.push(Qi(t,i,n))),t.tag===3)return e;t=t.return}return[]}function f5(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function i0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var l=r,c=l.alternate,s=l.stateNode;if(l=l.tag,c!==null&&c===e)break;l!==5&&l!==26&&l!==27||s===null||(c=s,i?(s=Ni(r,n),s!=null&&o.unshift(Qi(r,s,c))):i||(s=Ni(r,n),s!=null&&o.push(Qi(r,s,c)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var v5=/\r\n?/g,k5=/\u0000|\uFFFD/g;function n0(t){return(typeof t=="string"?t:""+t).replace(v5,`
`).replace(k5,"")}function Ju(t,a){return a=n0(a),n0(t)===a}function F(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||Ue(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&Ue(t,""+e);break;case"className":_n(t,"class",e);break;case"tabIndex":_n(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":_n(t,r,e);break;case"style":Q0(t,e,n);break;case"data":if(a!=="object"){_n(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=Jn(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&F(t,a,"name",i.name,i,null),F(t,a,"formEncType",i.formEncType,i,null),F(t,a,"formMethod",i.formMethod,i,null),F(t,a,"formTarget",i.formTarget,i,null)):(F(t,a,"encType",i.encType,i,null),F(t,a,"method",i.method,i,null),F(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=Jn(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=Ga);break;case"onScroll":e!=null&&U("scroll",t);break;case"onScrollEnd":e!=null&&U("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(M(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(M(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=Jn(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":U("beforetoggle",t),U("toggle",t),Rn(t,"popover",e);break;case"xlinkActuate":Ta(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Ta(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Ta(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Ta(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Ta(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Ta(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Ta(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Ta(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Ta(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Rn(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=K4.get(r)||r,Rn(t,r,e))}}function t1(t,a,r,e,i,n){switch(r){case"style":Q0(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(M(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(M(60));t.innerHTML=r}}break;case"children":typeof e=="string"?Ue(t,e):(typeof e=="number"||typeof e=="bigint")&&Ue(t,""+e);break;case"onScroll":e!=null&&U("scroll",t);break;case"onScrollEnd":e!=null&&U("scrollend",t);break;case"onClick":e!=null&&(t.onclick=Ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!U0.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[qt]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):Rn(t,r,e)}}}function Ht(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":U("error",t),U("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(M(137,a));default:F(t,a,n,o,r,null)}}i&&F(t,a,"srcSet",r.srcSet,r,null),e&&F(t,a,"src",r.src,r,null);return;case"input":U("invalid",t);var l=n=o=i=null,c=null,s=null;for(e in r)if(r.hasOwnProperty(e)){var v=r[e];if(v!=null)switch(e){case"name":i=v;break;case"type":o=v;break;case"checked":c=v;break;case"defaultChecked":s=v;break;case"value":n=v;break;case"defaultValue":l=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(M(137,a));break;default:F(t,a,e,v,r,null)}}G0(t,n,l,c,s,o,i,!1);return;case"select":U("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(l=r[i],l!=null))switch(i){case"value":n=l;break;case"defaultValue":o=l;break;case"multiple":e=l;default:F(t,a,i,l,r,null)}a=n,r=o,t.multiple=!!e,a!=null?Ve(t,!!e,a,!1):r!=null&&Ve(t,!!e,r,!0);return;case"textarea":U("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(l=r[o],l!=null))switch(o){case"value":e=l;break;case"defaultValue":i=l;break;case"children":n=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(M(91));break;default:F(t,a,o,l,r,null)}X0(t,e,i,n);return;case"option":for(c in r)r.hasOwnProperty(c)&&(e=r[c],e!=null)&&(c==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":F(t,a,c,e,r,null));return;case"dialog":U("beforetoggle",t),U("toggle",t),U("cancel",t),U("close",t);break;case"iframe":case"object":U("load",t);break;case"video":case"audio":for(e=0;e<Xi.length;e++)U(Xi[e],t);break;case"image":U("error",t),U("load",t);break;case"details":U("toggle",t);break;case"embed":case"source":case"link":U("error",t),U("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(s in r)if(r.hasOwnProperty(s)&&(e=r[s],e!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(M(137,a));default:F(t,a,s,e,r,null)}return;default:if(v1(a)){for(v in r)r.hasOwnProperty(v)&&(e=r[v],e!==void 0&&t1(t,a,v,e,r,void 0));return}}for(l in r)r.hasOwnProperty(l)&&(e=r[l],e!=null&&F(t,a,l,e,r,null))}function x5(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,l=null,c=null,s=null,v=null;for(k in r){var x=r[k];if(r.hasOwnProperty(k)&&x!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":c=x;default:e.hasOwnProperty(k)||F(t,a,k,null,e,x)}}for(var p in e){var k=e[p];if(x=r[p],e.hasOwnProperty(p)&&(k!=null||x!=null))switch(p){case"type":n=k;break;case"name":i=k;break;case"checked":s=k;break;case"defaultChecked":v=k;break;case"value":o=k;break;case"defaultValue":l=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(M(137,a));break;default:k!==x&&F(t,a,p,k,e,x)}}Bl(t,o,l,c,s,v,n,i);return;case"select":k=o=l=p=null;for(n in r)if(c=r[n],r.hasOwnProperty(n)&&c!=null)switch(n){case"value":break;case"multiple":k=c;default:e.hasOwnProperty(n)||F(t,a,n,null,e,c)}for(i in e)if(n=e[i],c=r[i],e.hasOwnProperty(i)&&(n!=null||c!=null))switch(i){case"value":p=n;break;case"defaultValue":l=n;break;case"multiple":o=n;default:n!==c&&F(t,a,i,n,e,c)}a=l,r=o,e=k,p!=null?Ve(t,!!r,p,!1):!!e!=!!r&&(a!=null?Ve(t,!!r,a,!0):Ve(t,!!r,r?[]:"",!1));return;case"textarea":k=p=null;for(l in r)if(i=r[l],r.hasOwnProperty(l)&&i!=null&&!e.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:F(t,a,l,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":p=i;break;case"defaultValue":k=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(M(91));break;default:i!==n&&F(t,a,o,i,e,n)}Y0(t,p,k);return;case"option":for(var y in r)p=r[y],r.hasOwnProperty(y)&&p!=null&&!e.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:F(t,a,y,null,e,p));for(c in e)p=e[c],k=r[c],e.hasOwnProperty(c)&&p!==k&&(p!=null||k!=null)&&(c==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":F(t,a,c,p,e,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in r)p=r[w],r.hasOwnProperty(w)&&p!=null&&!e.hasOwnProperty(w)&&F(t,a,w,null,e,p);for(s in e)if(p=e[s],k=r[s],e.hasOwnProperty(s)&&p!==k&&(p!=null||k!=null))switch(s){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(M(137,a));break;default:F(t,a,s,p,e,k)}return;default:if(v1(a)){for(var N in r)p=r[N],r.hasOwnProperty(N)&&p!==void 0&&!e.hasOwnProperty(N)&&t1(t,a,N,void 0,e,p);for(v in e)p=e[v],k=r[v],!e.hasOwnProperty(v)||p===k||p===void 0&&k===void 0||t1(t,a,v,p,e,k);return}}for(var g in r)p=r[g],r.hasOwnProperty(g)&&p!=null&&!e.hasOwnProperty(g)&&F(t,a,g,null,e,p);for(x in e)p=e[x],k=r[x],!e.hasOwnProperty(x)||p===k||p==null&&k==null||F(t,a,x,p,e,k)}function o0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function L5(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,l=i.duration;if(n&&l&&o0(o)){for(o=0,l=i.responseEnd,e+=1;e<r.length;e++){var c=r[e],s=c.startTime;if(s>l)break;var v=c.transferSize,x=c.initiatorType;v&&o0(x)&&(c=c.responseEnd,o+=v*(c<l?1:(l-s)/(c-s)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var a1=null,r1=null;function zo(t){return t.nodeType===9?t:t.ownerDocument}function l0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fu(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function e1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var gl=null;function M5(){var t=window.event;return t&&t.type==="popstate"?t===gl?!1:(gl=t,!0):(gl=null,!1)}var $u=typeof setTimeout=="function"?setTimeout:void 0,m5=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,y5=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(t){return d0.resolve(null).then(t).catch(w5)}:$u;function w5(t){setTimeout(function(){throw t})}function Vr(t){return t==="head"}function c0(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),Re(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")Ti(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Ti(r);for(var n=r.firstChild;n;){var o=n.nextSibling,l=n.nodeName;n[tn]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&Ti(t.ownerDocument.body);r=i}while(r);Re(a)}function h0(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function i1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":i1(r),f1(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function C5(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[tn])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=fa(t.nextSibling),t===null)break}return null}function B5(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=fa(t.nextSibling),t===null))return null;return t}function Iu(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fa(t.nextSibling),t===null))return null;return t}function n1(t){return t.data==="$?"||t.data==="$~"}function o1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function b5(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function fa(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var l1=null;function u0(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return fa(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function s0(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function Pu(t,a,r){switch(a=zo(r),t){case"html":if(t=a.documentElement,!t)throw Error(M(452));return t;case"head":if(t=a.head,!t)throw Error(M(453));return t;case"body":if(t=a.body,!t)throw Error(M(454));return t;default:throw Error(M(451))}}function Ti(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);f1(t)}var va=new Map,g0=new Set;function _o(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Pa=K.d;K.d={f:j5,r:W5,D:H5,C:S5,L:A5,m:V5,X:_5,S:z5,M:T5};function j5(){var t=Pa.f(),a=$o();return t||a}function W5(t){var a=Fe(t);a!==null&&a.tag===5&&a.type==="form"?Qh(a):Pa.r(t)}var ti=typeof document>"u"?null:document;function ts(t,a,r){var e=ti;if(e&&typeof a=="string"&&a){var i=ua(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),g0.has(i)||(g0.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),Ht(a,"link",t),mt(a),e.head.appendChild(a)))}}function H5(t){Pa.D(t),ts("dns-prefetch",t,null)}function S5(t,a){Pa.C(t,a),ts("preconnect",t,a)}function A5(t,a,r){Pa.L(t,a,r);var e=ti;if(e&&t&&a){var i='link[rel="preload"][as="'+ua(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+ua(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+ua(r.imageSizes)+'"]')):i+='[href="'+ua(t)+'"]';var n=i;switch(a){case"style":n=Ke(t);break;case"script":n=ai(t)}va.has(n)||(t=it({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),va.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(ln(n))||a==="script"&&e.querySelector(dn(n))||(a=e.createElement("link"),Ht(a,"link",t),mt(a),e.head.appendChild(a)))}}function V5(t,a){Pa.m(t,a);var r=ti;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+ua(e)+'"][href="'+ua(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=ai(t)}if(!va.has(n)&&(t=it({rel:"modulepreload",href:t},a),va.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(dn(n)))return}e=r.createElement("link"),Ht(e,"link",t),mt(e),r.head.appendChild(e)}}}function z5(t,a,r){Pa.S(t,a,r);var e=ti;if(e&&t){var i=Ae(e).hoistableStyles,n=Ke(t);a=a||"default";var o=i.get(n);if(!o){var l={loading:0,preload:null};if(o=e.querySelector(ln(n)))l.loading=5;else{t=it({rel:"stylesheet",href:t,"data-precedence":a},r),(r=va.get(n))&&td(t,r);var c=o=e.createElement("link");mt(c),Ht(c,"link",t),c._p=new Promise(function(s,v){c.onload=s,c.onerror=v}),c.addEventListener("load",function(){l.loading|=1}),c.addEventListener("error",function(){l.loading|=2}),l.loading|=4,no(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:l},i.set(n,o)}}}function _5(t,a){Pa.X(t,a);var r=ti;if(r&&t){var e=Ae(r).hoistableScripts,i=ai(t),n=e.get(i);n||(n=r.querySelector(dn(i)),n||(t=it({src:t,async:!0},a),(a=va.get(i))&&ad(t,a),n=r.createElement("script"),mt(n),Ht(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function T5(t,a){Pa.M(t,a);var r=ti;if(r&&t){var e=Ae(r).hoistableScripts,i=ai(t),n=e.get(i);n||(n=r.querySelector(dn(i)),n||(t=it({src:t,async:!0,type:"module"},a),(a=va.get(i))&&ad(t,a),n=r.createElement("script"),mt(n),Ht(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function p0(t,a,r,e){var i=(i=xr.current)?_o(i):null;if(!i)throw Error(M(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=Ke(r.href),r=Ae(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Ke(r.href);var n=Ae(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(ln(t)))&&!n._p&&(o.instance=n,o.state.loading=5),va.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},va.set(t,r),n||E5(i,t,r,o.state))),a&&e===null)throw Error(M(528,""));return o}if(a&&e!==null)throw Error(M(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ai(r),r=Ae(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(M(444,t))}}function Ke(t){return'href="'+ua(t)+'"'}function ln(t){return'link[rel="stylesheet"]['+t+"]"}function as(t){return it({},t,{"data-precedence":t.precedence,precedence:null})}function E5(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),Ht(a,"link",r),mt(a),t.head.appendChild(a))}function ai(t){return'[src="'+ua(t)+'"]'}function dn(t){return"script[async]"+t}function f0(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+ua(r.href)+'"]');if(e)return a.instance=e,mt(e),e;var i=it({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),mt(e),Ht(e,"style",i),no(e,r.precedence,t),a.instance=e;case"stylesheet":i=Ke(r.href);var n=t.querySelector(ln(i));if(n)return a.state.loading|=4,a.instance=n,mt(n),n;e=as(r),(i=va.get(i))&&td(e,i),n=(t.ownerDocument||t).createElement("link"),mt(n);var o=n;return o._p=new Promise(function(l,c){o.onload=l,o.onerror=c}),Ht(n,"link",e),a.state.loading|=4,no(n,r.precedence,t),a.instance=n;case"script":return n=ai(r.src),(i=t.querySelector(dn(n)))?(a.instance=i,mt(i),i):(e=r,(i=va.get(n))&&(e=it({},r),ad(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),mt(i),Ht(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(M(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,no(e,r.precedence,t));return a.instance}function no(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var l=e[o];if(l.dataset.precedence===a)n=l;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function td(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function ad(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var oo=null;function v0(t,a,r){if(oo===null){var e=new Map,i=oo=new Map;i.set(r,e)}else i=oo,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[tn]||n[bt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var l=e.get(o);l?l.push(n):e.set(o,[n])}}return e}function k0(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function N5(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function rs(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function D5(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=Ke(e.href),n=a.querySelector(ln(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=To.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,mt(n);return}n=a.ownerDocument||a,e=as(e),(i=va.get(i))&&td(e,i),n=n.createElement("link"),mt(n);var o=n;o._p=new Promise(function(l,c){o.onload=l,o.onerror=c}),Ht(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=To.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var pl=0;function O5(t,a){return t.stylesheets&&t.count===0&&lo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&lo(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&pl===0&&(pl=62500*L5());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lo(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>pl?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function To(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Eo=null;function lo(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Eo=new Map,a.forEach(U5,t),Eo=null,To.call(t))}function U5(t,a){if(!(a.state.loading&4)){var r=Eo.get(t);if(r)var e=r.get(null);else{r=new Map,Eo.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=To.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var Ki={$$typeof:qa,Provider:null,Consumer:null,_currentValue:Yr,_currentValue2:Yr,_threadCount:0};function Z5(t,a,r,e,i,n,o,l,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=U2(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=U2(0),this.hiddenUpdates=U2(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function es(t,a,r,e,i,n,o,l,c,s,v,x){return t=new Z5(t,a,r,o,c,s,v,x,l),a=1,n===!0&&(a|=24),n=Rt(3,null,null,a),t.current=n,n.stateNode=t,a=j1(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},S1(n),t}function is(t){return t?(t=je,t):je}function ns(t,a,r,e,i,n){i=is(i),e.context===null?e.context=i:e.pendingContext=i,e=Mr(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=mr(t,e,a),r!==null&&(Zt(r,t,a),ji(r,t,a))}function x0(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function rd(t,a){x0(t,a),(t=t.alternate)&&x0(t,a)}function os(t){if(t.tag===13||t.tag===31){var a=ee(t,67108864);a!==null&&Zt(a,t,67108864),rd(t,67108864)}}function L0(t){if(t.tag===13||t.tag===31){var a=Pt();a=g1(a);var r=ee(t,a);r!==null&&Zt(r,t,a),rd(t,a)}}var No=!0;function q5(t,a,r,e){var i=V.T;V.T=null;var n=K.p;try{K.p=2,ed(t,a,r,e)}finally{K.p=n,V.T=i}}function G5(t,a,r,e){var i=V.T;V.T=null;var n=K.p;try{K.p=8,ed(t,a,r,e)}finally{K.p=n,V.T=i}}function ed(t,a,r,e){if(No){var i=d1(e);if(i===null)sl(t,a,e,Do,r),M0(t,e);else if(X5(i,t,a,r,e))e.stopPropagation();else if(M0(t,e),a&4&&-1<Y5.indexOf(t)){for(;i!==null;){var n=Fe(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=Zr(n.pendingLanes);if(o!==0){var l=n;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var c=1<<31-It(o);l.entanglements[1]|=c,o&=~c}Sa(n),(Q&6)===0&&(jo=Ft()+500,on(0,!1))}}break;case 31:case 13:l=ee(n,2),l!==null&&Zt(l,n,2),$o(),rd(n,2)}if(n=d1(e),n===null&&sl(t,a,e,Do,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else sl(t,a,e,null,r)}}function d1(t){return t=k1(t),id(t)}var Do=null;function id(t){if(Do=null,t=me(t),t!==null){var a=Fi(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=b0(a),t!==null)return t;t=null}else if(r===31){if(t=j0(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Do=t,null}function ls(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(A4()){case A0:return 2;case V0:return 8;case go:case V4:return 32;case z0:return 268435456;default:return 32}default:return 32}}var c1=!1,Cr=null,Br=null,br=null,Ri=new Map,Ji=new Map,sr=[],Y5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function M0(t,a){switch(t){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Ri.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(a.pointerId)}}function vi(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=Fe(a),a!==null&&os(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function X5(t,a,r,e,i){switch(a){case"focusin":return Cr=vi(Cr,t,a,r,e,i),!0;case"dragenter":return Br=vi(Br,t,a,r,e,i),!0;case"mouseover":return br=vi(br,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return Ri.set(n,vi(Ri.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,Ji.set(n,vi(Ji.get(n)||null,t,a,r,e,i)),!0}return!1}function ds(t){var a=me(t.target);if(a!==null){var r=Fi(a);if(r!==null){if(a=r.tag,a===13){if(a=b0(r),a!==null){t.blockedOn=a,ec(t.priority,function(){L0(r)});return}}else if(a===31){if(a=j0(r),a!==null){t.blockedOn=a,ec(t.priority,function(){L0(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function co(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=d1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);jl=e,r.target.dispatchEvent(e),jl=null}else return a=Fe(r),a!==null&&os(a),t.blockedOn=r,!1;a.shift()}return!0}function m0(t,a,r){co(t)&&r.delete(a)}function Q5(){c1=!1,Cr!==null&&co(Cr)&&(Cr=null),Br!==null&&co(Br)&&(Br=null),br!==null&&co(br)&&(br=null),Ri.forEach(m0),Ji.forEach(m0)}function Qn(t,a){t.blockedOn===a&&(t.blockedOn=null,c1||(c1=!0,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,Q5)))}var Kn=null;function y0(t){Kn!==t&&(Kn=t,xt.unstable_scheduleCallback(xt.unstable_NormalPriority,function(){Kn===t&&(Kn=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(id(e||r)===null)continue;break}var n=Fe(r);n!==null&&(t.splice(a,3),a-=3,Gl(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function Re(t){function a(c){return Qn(c,t)}Cr!==null&&Qn(Cr,t),Br!==null&&Qn(Br,t),br!==null&&Qn(br,t),Ri.forEach(a),Ji.forEach(a);for(var r=0;r<sr.length;r++){var e=sr[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<sr.length&&(r=sr[0],r.blockedOn===null);)ds(r),r.blockedOn===null&&sr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[qt]||null;if(typeof n=="function")o||y0(r);else if(o){var l=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[qt]||null)l=o.formAction;else if(id(i)!==null)continue}else l=o.action;typeof l=="function"?r[e+1]=l:(r.splice(e,3),e-=3),y0(r)}}}function cs(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function nd(t){this._internalRoot=t}t2.prototype.render=nd.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(M(409));var r=a.current,e=Pt();ns(r,e,t,a,null,null)};t2.prototype.unmount=nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;ns(t.current,2,null,t,null,null),$o(),a[Je]=null}};function t2(t){this._internalRoot=t}t2.prototype.unstable_scheduleHydration=function(t){if(t){var a=D0();t={blockedOn:null,target:t,priority:a};for(var r=0;r<sr.length&&a!==0&&a<sr[r].priority;r++);sr.splice(r,0,t),r===0&&ds(t)}};var w0=C0.version;if(w0!=="19.2.8")throw Error(M(527,w0,"19.2.8"));K.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=C4(a),t=t!==null?W0(t):null,t=t===null?null:t.stateNode,t};var K5={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ki=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ki.isDisabled&&ki.supportsFiber))try{$i=ki.inject(K5),$t=ki}catch{}var ki;a2.createRoot=function(t,a){if(!B0(t))throw Error(M(299));var r=!1,e="",i=tu,n=au,o=ru;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=es(t,1,!1,null,null,r,e,null,i,n,o,cs),t[Je]=a.current,P1(t),new nd(a)};a2.hydrateRoot=function(t,a,r){if(!B0(t))throw Error(M(299));var e=!1,i="",n=tu,o=au,l=ru,c=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(l=r.onRecoverableError),r.formState!==void 0&&(c=r.formState)),a=es(t,1,!0,a,r??null,e,i,c,n,o,l,cs),a.context=is(null),r=a.current,e=Pt(),e=g1(e),i=Mr(e),i.callback=null,mr(r,i,e),r=e,a.current.lanes=r,Pi(a,r),Sa(a),t[Je]=a.current,P1(t),new t2(a)};a2.version="19.2.8"});var gs=ir((jf,ss)=>{"use strict";function us(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(us)}catch(t){console.error(t)}}us(),ss.exports=hs()});var Lt=Dr(za()),_g=Dr(gs());var ri=Dr(za(),1);var od=Dr(za(),1),ld={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},dd=od.default.createContext&&od.default.createContext(ld);var R5=["attr","size","title"];function J5(t,a){if(t==null)return{};var r,e,i=F5(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function F5(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function r2(){return r2=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},r2.apply(null,arguments)}function ps(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function e2(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?ps(Object(r),!0).forEach(function(e){$5(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ps(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function $5(t,a,r){return(a=I5(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function I5(t){var a=P5(t,"string");return typeof a=="symbol"?a:a+""}function P5(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function fs(t){return t&&t.map((a,r)=>ri.default.createElement(a.tag,e2({key:r},a.attr),fs(a.child)))}function Y(t){return a=>ri.default.createElement(tf,r2({attr:e2({},t.attr)},a),fs(t.child))}function tf(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=J5(t,R5),l=i||r.size||"1em",c;return r.className&&(c=r.className),t.className&&(c=(c?c+" ":"")+t.className),ri.default.createElement("svg",r2({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:c,style:e2(e2({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),n&&ri.default.createElement("title",null,n),t.children)};return dd!==void 0?ri.default.createElement(dd.Consumer,null,r=>a(r)):a(ld)}function vs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function ks(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function xs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function Ls(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function Ms(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function ms(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function ys(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function ws(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function Cs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function Bs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function bs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function js(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function Ws(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function Hs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function Ss(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function As(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function Vs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function zs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function _s(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function Ts(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function Es(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function Ns(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function Ds(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(t)}function Os(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function Us(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function Zs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function qs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function Gs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 11-5-5-5 5"},child:[]},{tag:"path",attr:{d:"m17 18-5-5-5 5"},child:[]}]})(t)}function Ys(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 6 5 5 5-5"},child:[]},{tag:"path",attr:{d:"m7 13 5 5 5-5"},child:[]}]})(t)}function Xs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function Qs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function Ks(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function Rs(t){return Y({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var Js=zs,Fs=ks,cd=As,hd=Ss,$s=Ts,Is=Es,Ps=ws,ne=xs,tg=Os,ag=_s,cn=bs;var rg=Zs,ei=qs,ud=Ms,eg=Us,ig=ms,ng=Xs,og=Qs,lg=Gs,dg=Ys,i2=Bs;var n2=vs,sd=Vs,cg=Hs,hg=js,ug=Ws,o2=Rs,sg=Cs,gg=Ks,pg=Ls,fg=ys,l2=Ds,vg=Ns;var st=Dr(za());var j=Dr(za());var hn={member:"會友",coworker:"同工",admin_staff:"行政",leader:"領袖",pastor:"牧師",admin:"系統管理員"},un={member:ne,coworker:pg,admin_staff:Is,leader:fg,pastor:$s,admin:Ps},sn=["leader","pastor","admin"],gd=[{id:"work",label:"工作日誌",Icon:Js,href:"work.html",roles:["pastor","admin_staff","admin"]},{id:"serve",label:"服事管理",Icon:Fs,href:""},{id:"venue",label:"場地預約",Icon:gg,href:""}],kg=["pastor","admin_staff","admin"],xg=(t,a)=>!t.roles||t.roles.includes(a),af=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},Lg=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},Mg=({active:t,shell:a})=>{let[r,e]=(0,j.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(y=>{let w=!y;try{localStorage.setItem("tbcSidebarCollapsed",w?"1":"0")}catch{}return w}),[n,o]=(0,j.useState)(!1),[l,c]=(0,j.useState)(""),s=(0,j.useRef)(null),v=a.identity||{name:"",role:"member",status:"loading"},x=un[v.role]||ne,p=sn.includes(v.role),k=y=>{c(`${y} 尚未開放`),clearTimeout(s.current),s.current=setTimeout(()=>c(""),2200)};return j.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},j.default.createElement("div",{className:"flex flex-col"},j.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},j.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},j.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},j.default.createElement(o2,{size:20,strokeWidth:2})),r&&j.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},j.default.createElement(hd,{size:18}))),!r&&j.default.createElement(j.default.Fragment,null,j.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),j.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},j.default.createElement(hd,{size:18})))),j.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},gd.map(y=>{let w=t===y.id,N=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${w?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,g=j.default.createElement(j.default.Fragment,null,j.default.createElement(y.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&j.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},y.label));return y.href?w?j.default.createElement("div",{key:y.id,className:N,title:y.label,"aria-current":"page"},g):j.default.createElement("a",{key:y.id,href:y.href,className:N,title:y.label},g):j.default.createElement("button",{key:y.id,type:"button",onClick:()=>k(y.label),className:N,title:y.label},g)}))),j.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},j.default.createElement("button",{type:"button",onClick:()=>o(y=>!y),"aria-haspopup":"menu","aria-expanded":n,title:`${v.name}（${hn[v.role]||v.role}）`,className:`tbc-sb-user flex items-center rounded-full hover:bg-slate-100 transition-colors ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-12 w-full"}`},j.default.createElement(x,{size:20,strokeWidth:1.75,className:`shrink-0 ${p?"text-amber-500":"text-slate-500"}`}),!r&&j.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},v.name)),n&&j.default.createElement(j.default.Fragment,null,j.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),j.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},j.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},j.default.createElement(cd,{size:18,strokeWidth:1.75}),"登出")))),l&&j.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},l))},mg=({supabase:t,notice:a})=>{let[r,e]=(0,j.useState)(!1),[i,n]=(0,j.useState)(""),[o,l]=(0,j.useState)(""),[c,s]=(0,j.useState)(!1),[v,x]=(0,j.useState)(""),p=async y=>{if(y.preventDefault(),!i.trim()||!o||c)return;s(!0),x("");let{error:w}=await t.auth.signInWithPassword({email:af(i),password:o});s(!1),w&&x("帳號或密碼不正確，請再試一次")},k="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return j.default.createElement("form",{onSubmit:p,className:"w-full max-w-sm mx-auto space-y-3"},j.default.createElement("input",{value:i,onChange:y=>n(y.target.value),placeholder:"帳號",autoComplete:"username",className:k}),j.default.createElement("div",{className:"relative"},j.default.createElement("input",{type:r?"text":"password",value:o,onChange:y=>l(y.target.value),placeholder:"密碼",autoComplete:"current-password",className:k+" pr-12"}),j.default.createElement("button",{type:"button",onClick:()=>e(y=>!y),title:r?"隱藏密碼":"顯示密碼","aria-label":r?"隱藏密碼":"顯示密碼",className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"},r?j.default.createElement(l2,{size:18}):j.default.createElement(vg,{size:18}))),(v||a)&&j.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},j.default.createElement(ei,{size:16}),v||a),j.default.createElement("button",{type:"submit",disabled:c||!i.trim()||!o,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},c?"登入中…":"登入"))},yg=({shell:t})=>{let[a,r]=(0,j.useState)(!1),e=t.identity||{},i=un[e.role]||ne,n=sn.includes(e.role);return j.default.createElement("div",{className:"absolute top-4 right-6 z-30"},j.default.createElement("button",{type:"button",onClick:()=>r(o=>!o),"aria-haspopup":"menu","aria-expanded":a,title:`${e.name}（${hn[e.role]||e.role}）`,className:"tbc-user flex items-center gap-2.5 h-11 px-4 rounded-full hover:bg-slate-100 transition-colors"},j.default.createElement(i,{size:20,strokeWidth:1.75,className:n?"text-amber-500":"text-slate-500"}),j.default.createElement("span",{className:"text-[15px] text-slate-900"},e.name)),a&&j.default.createElement(j.default.Fragment,null,j.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>r(!1)}),j.default.createElement("div",{role:"menu",className:"absolute right-0 top-full mt-1 z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in"},j.default.createElement("button",{role:"menuitem",onClick:()=>{r(!1),t.onLogout()},className:"tbc-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},j.default.createElement(cd,{size:18,strokeWidth:1.75}),"登出"))))};var rf=({shell:t})=>{let[a,r]=(0,st.useState)(""),e=(0,st.useRef)(null),i=t.identity||{},n=gd.filter(l=>xg(l,i.role)),o=l=>{r(`${l} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return st.default.createElement("div",{className:"relative h-[100dvh] w-full bg-white overflow-hidden"},st.default.createElement(yg,{shell:t}),st.default.createElement("main",{className:"h-full overflow-auto custom-scrollbar"},st.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},st.default.createElement("div",{className:"text-center mb-14"},st.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),st.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),st.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(l=>{let c=st.default.createElement(st.default.Fragment,null,st.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},st.default.createElement(l.Icon,{size:40,strokeWidth:1.75})),st.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},l.label)),s="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return l.href?st.default.createElement("a",{key:l.id,href:l.href,className:s},c):st.default.createElement("button",{key:l.id,type:"button",onClick:()=>o(l.label),className:s},c)})))),a&&st.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},wg=rf;var d=Dr(za());var c2={pastor_decision:"需牧師決策",team_discussion:"需團隊討論",cross_dept:"需跨部門協調",track_progress:"需追蹤進度"};var pd=["日","一","二","三","四","五","六"],Cg={m:15,l:18},Bg=[{id:"title",label:"任務",locked:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"負責人",w:"minmax(104px,1fr)",min:104},{id:"status",label:"狀態",locked:!0,w:"150px",min:150},{id:"date",label:"日期",w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(150px,1fr)",min:150},{id:"hours",label:"工時",w:"84px",min:84},{id:"priority",label:"優先級",w:"76px",min:76},{id:"flag",label:"會議對焦",w:"minmax(140px,1fr)",min:140},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],ef="Asia/Taipei",bg=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:ef,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},u2=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},nf=t=>new Date(t).toISOString().slice(0,10),h2=(t,a)=>nf(u2(t)+a*864e5),Hg=(t,a)=>Math.round((u2(t)-u2(a))/864e5),Sg=t=>new Date(u2(t)).getUTCDay(),of=t=>h2(t,-((Sg(t)+6)%7)),Aa=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},lf=(t,a)=>{let r=Hg(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${Aa(t)}（${pd[Sg(t)]}）`,tag:e}},ra=t=>t?String(t).slice(0,5):"",df=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=ra(t.start_time).split(":").map(Number),[e,i]=ra(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*10)/10} 小時`},d2=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的例行工作"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期的任務固定在最上面，不能搬移"],["item not in your list","這筆不在你的清單裡"],["item not found or canceled","這筆工作已被取消或不存在"],["more than one member record","這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號"],["no member record","找不到這個帳號對應的同工資料"],["no permission","沒有使用權限"],["permission denied","沒有使用權限"],["dates are required","日期必填"],["weekly rule needs","每週重複請至少選一個星期"],["monthly rule needs","每月重複請選幾號，或勾「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個例行工作"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},cf=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>pd[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 號`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},hf=({person:t,size:a=16,strong:r})=>{let[e,i]=(0,d.useState)(!1);(0,d.useEffect)(()=>{if(!e)return;let c=setTimeout(()=>i(!1),3e3);return()=>clearTimeout(c)},[e]);let n=t&&t.role,o=un[n]||ne,l=sn.includes(n);return d.default.createElement("button",{type:"button",onClick:c=>{c.stopPropagation(),i(s=>!s)},title:hn[n]||"",className:"inline-flex items-center gap-1.5 max-w-full text-left"},d.default.createElement("span",{className:`shrink-0 ${l?"text-amber-500":"text-slate-400"}`},d.default.createElement(o,{size:a})),d.default.createElement("span",{className:`truncate ${r?"font-bold text-slate-900":"text-slate-700"}`},e?hn[n]||n:t&&t.name||"（未知）"))},jg=({value:t,placeholder:a,canEdit:r,onSave:e,className:i=""})=>{let[n,o]=(0,d.useState)(!1),[l,c]=(0,d.useState)(t||""),s=(0,d.useRef)(!1);(0,d.useEffect)(()=>{n||c(t||"")},[t,n]);let v=async()=>{if(o(!1),s.current){s.current=!1;return}let x=l.trim();x!==(t||"").trim()&&await e(x)};return n?d.default.createElement("input",{autoFocus:!0,value:l,onChange:x=>c(x.target.value),onBlur:v,onKeyDown:x=>{x.key==="Enter"&&x.currentTarget.blur(),x.key==="Escape"&&(s.current=!0,x.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):d.default.createElement("div",{onClick:()=>r&&o(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?d.default.createElement("span",{className:"text-slate-300"},a):null))},Wg=({type:t,a,b:r,canEdit:e,children:i,onSave:n})=>{let[o,l]=(0,d.useState)(!1),[c,s]=(0,d.useState)(a||""),[v,x]=(0,d.useState)(r||""),p=(0,d.useRef)(!1);(0,d.useEffect)(()=>{o||(s(a||""),x(r||""))},[a,r,o]);let k=async()=>{if(l(!1),p.current){p.current=!1;return}(c!==(a||"")||v!==(r||""))&&await n(c,v)};if(!o)return d.default.createElement("div",{onClick:()=>e&&l(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let y="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return d.default.createElement("div",{tabIndex:-1,onBlur:w=>{w.currentTarget.contains(w.relatedTarget)||k()},onKeyDown:w=>{w.key==="Enter"&&k(),w.key==="Escape"&&(p.current=!0,l(!1))},className:"flex flex-col gap-1"},d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",d.default.createElement("input",{autoFocus:!0,type:t,value:c,onChange:w=>s(w.target.value),className:y})),d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",d.default.createElement("input",{type:t,value:v,onChange:w=>x(w.target.value),className:y})))},uf=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o})=>{let l=a||{},c=t==="editRule",[s,v]=(0,d.useState)(l.title||""),[x,p]=(0,d.useState)(l.start_date||e),[k,y]=(0,d.useState)(ra(l.start_time)),[w,N]=(0,d.useState)(l.end_date||l.start_date||e),[g,u]=(0,d.useState)(ra(l.end_time)),[f,L]=(0,d.useState)(l.priority||"normal"),[W,z]=(0,d.useState)(l.note||""),[B,A]=(0,d.useState)(l.meeting_flag||""),[H,O]=(0,d.useState)(c?l.freq:r||"none"),[Tt,zr]=(0,d.useState)(!!l.weekdays_only),[tr,ar]=(0,d.useState)(l.week_days||[]),[ka,gn]=(0,d.useState)(l.month_day?String(l.month_day):""),[le,s2]=(0,d.useState)(!!l.month_last_day),[_r,g2]=(0,d.useState)(l.until_date||""),[pn,fn]=(0,d.useState)(l.is_active===void 0?!0:l.is_active),[ii,Va]=(0,d.useState)(""),ea="text-xs font-medium text-slate-500",ya="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",vd=S=>ar(ct=>ct.includes(S)?ct.filter(Tr=>Tr!==S):[...ct,S]),vn=()=>{if(Va(""),!s.trim())return Va("請輸入任務名稱");if(!x)return Va("開始日期必填");if(H==="none"&&(!w||w<x))return Va("結束日期不能早於開始日期");if(H==="weekly"&&tr.length===0)return Va("每週重複請至少選一個星期");if(H==="monthly"&&!ka&&!le)return Va("每月重複請選幾號，或勾「每月最後一天」");if(H!=="none"&&_r&&_r<x)return Va("重複的結束日不能早於開始日");n({title:s.trim(),startDate:x,startTime:k||null,endDate:H==="none"?w:x,endTime:g||null,priority:f,note:W.trim()||null,flag:B||null,repeat:H,weekdaysOnly:H==="daily"&&Tt,weekDays:H==="weekly"?tr:[],monthDay:H==="monthly"&&ka?Number(ka):null,monthLast:H==="monthly"&&le,untilDate:_r||null,isActive:pn})};return d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},c?d.default.createElement(d.default.Fragment,null,d.default.createElement(i2,{className:"text-indigo-600",size:20})," 修改例行工作"):d.default.createElement(d.default.Fragment,null,d.default.createElement(cn,{className:"text-indigo-600",size:20})," 新增")),d.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(n2,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"任務名稱（必填）"),d.default.createElement("input",{autoFocus:!0,value:s,onChange:S=>v(S.target.value),placeholder:"一句話說明工作內容",className:ya})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"重複"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([S])=>!(c&&S==="none")).map(([S,ct])=>d.default.createElement("button",{key:S,type:"button",onClick:()=>O(S),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${H===S?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},ct))),H==="daily"&&d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:Tt,onChange:S=>zr(S.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),H==="weekly"&&d.default.createElement("div",{className:"flex gap-2 pt-1 flex-wrap"},[1,2,3,4,5,6,7].map(S=>d.default.createElement("button",{key:S,type:"button",onClick:()=>vd(S),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${tr.includes(S)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},pd[S%7]))),H==="monthly"&&d.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},d.default.createElement("select",{value:ka,onChange:S=>gn(S.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},d.default.createElement("option",{value:""},"不指定號數"),Array.from({length:31},(S,ct)=>ct+1).map(S=>d.default.createElement("option",{key:S,value:S},S," 號"))),d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:le,onChange:S=>s2(S.target.checked),className:"accent-indigo-600"})," 每月最後一天"),ka&&Number(ka)>28&&!le&&d.default.createElement("span",{className:"text-xs text-amber-600"},ka," 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」")),H!=="none"&&d.default.createElement("p",{className:"text-xs text-slate-400 pt-1"},"到時間系統會在凌晨自動建立當天的工作；修改週期只影響之後產生的。")),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},H==="none"?"開始日期":"從哪一天開始"),d.default.createElement("input",{type:"date",value:x,onChange:S=>{p(S.target.value),w<S.target.value&&N(S.target.value)},className:ya})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"開始時間（選填）"),d.default.createElement("input",{type:"time",value:k,onChange:S=>y(S.target.value),className:ya})),H==="none"?d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"結束日期（到期日）"),d.default.createElement("input",{type:"date",value:w,min:x,onChange:S=>N(S.target.value),className:ya})):d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"重複到哪一天（選填）"),d.default.createElement("input",{type:"date",value:_r,min:x,onChange:S=>g2(S.target.value),className:ya})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"結束時間（選填）"),d.default.createElement("input",{type:"time",value:g,onChange:S=>u(S.target.value),className:ya}))),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"優先級"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["normal","普通"],["urgent","緊急"]].map(([S,ct])=>d.default.createElement("button",{key:S,type:"button",onClick:()=>L(S),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${f===S?S==="urgent"?"bg-white text-red-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},ct)))),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"會議對焦（週三會議挑議題用，可不選）"),d.default.createElement("select",{value:B,onChange:S=>A(S.target.value),className:ya},d.default.createElement("option",{value:""},"不標記"),Object.entries(c2).map(([S,ct])=>d.default.createElement("option",{key:S,value:S},ct))))),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:ea},"備註"),d.default.createElement("textarea",{value:W,onChange:S=>z(S.target.value),rows:2,className:ya})),c&&d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:pn,onChange:S=>fn(S.target.checked),className:"accent-indigo-600"})," 啟用這個週期（取消勾選就是停止）"),ii&&d.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},d.default.createElement(ei,{size:16})," ",ii)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},d.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:vn,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},c?"儲存":H==="none"?"新增":"建立週期"))))},sf=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,d.useState)(bg()),[o,l]=(0,d.useState)(null),[c,s]=(0,d.useState)([]),[v,x]=(0,d.useState)(""),[p,k]=(0,d.useState)([]),[y,w]=(0,d.useState)(!0),[N,g]=(0,d.useState)({type:"",text:""}),[u,f]=(0,d.useState)(null),[L,W]=(0,d.useState)("mine"),[z,B]=(0,d.useState)("today"),[A,H]=(0,d.useState)(""),[O,Tt]=(0,d.useState)(""),[zr,tr]=(0,d.useState)(new Set),[ar,ka]=(0,d.useState)(""),[gn,le]=(0,d.useState)(()=>{try{let h=localStorage.getItem("tbcWorkFont");return Cg[h]?h:"m"}catch{return"m"}}),s2=h=>{le(h);try{localStorage.setItem("tbcWorkFont",h)}catch{}},[_r,g2]=(0,d.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),pn=h=>g2(m=>{let b=m.includes(h)?m.filter(T=>T!==h):[...m,h];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(b))}catch{}return b}),[fn,ii]=(0,d.useState)(!1),[Va,ea]=(0,d.useState)(""),[ya,vd]=(0,d.useState)(""),[vn,S]=(0,d.useState)(!1),[ct,Tr]=(0,d.useState)(null),[Tg,p2]=(0,d.useState)(!1),[kd,Eg]=(0,d.useState)([]),[ni,kn]=(0,d.useState)(null),[Er,f2]=(0,d.useState)(null),[Ng,xn]=(0,d.useState)(null),[xd,v2]=(0,d.useState)(null),de=Cg[gn],rr=de+3,ia=i.date,Ld=(0,d.useRef)(null),Ln=(0,d.useRef)(0),er=(h,m)=>{g({type:h,text:m}),clearTimeout(Ld.current),Ld.current=setTimeout(()=>g({type:"",text:""}),3200)},Et=async(h,m)=>{let{data:b,error:T}=await a.rpc(h,m||{});if(T)throw T;return b},na=async(h,m)=>{try{let b=await h();return await k2(!0),m&&er("success",typeof m=="function"?m(b):m),b}catch(b){er("error",d2(b)),await k2(!0);return}},wt=(0,d.useMemo)(()=>{if(z==="today")return{start:ia,end:ia};if(z==="week"){let b=of(ia);return{start:b,end:h2(b,6)}}let h=A||ia,m=O||h;return h<=m?{start:h,end:m}:{start:m,end:h}},[z,A,O,ia]);(0,d.useEffect)(()=>{let h=setInterval(()=>n(m=>{let b=bg();return b.date===m.date&&b.time===m.time?m:b}),3e4);return()=>clearInterval(h)},[]);let Dg=async()=>{try{let h=await Et("work_current_member"),m=await Et("work_list_people");return l(h),s(m||[]),tr(new Set((m||[]).map(b=>b.member_id))),x(""),!0}catch(h){return x(d2(h)),!1}},k2=async h=>{let m=++Ln.current;h||w(!0);try{let b=r&&r.fetchAllData?r.fetchAllData:X=>X(),T=X=>{if(X&&X.error)throw X.error;return X&&X.data||[]},I=T(await b(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).lte("start_date",wt.end).gte("end_date",wt.start))),Yt=T(await b(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).lte("end_date",ia).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),Xt=new Set(I.map(X=>X.id)),St=Yt.map(X=>X.id).filter(X=>!Xt.has(X)),C=[];if(St.length&&(C=T(await b(()=>a.from("work_items").select("*, work_assignees(*)").in("id",St)))),m!==Ln.current)return;let D=[];for(let X of[...I,...C]){let{work_assignees:Ct,...xa}=X;for(let Cn of Ct||[])D.push({key:Cn.id,item:{...xa,assigneeCount:(Ct||[]).length},a:Cn})}k(D)}catch(b){m===Ln.current&&er("error","讀取失敗："+d2(b))}finally{m===Ln.current&&!h&&w(!1)}};(0,d.useEffect)(()=>{Dg()},[]),(0,d.useEffect)(()=>{o&&k2(!1)},[o,wt.start,wt.end,ia]),(0,d.useEffect)(()=>{z==="custom"&&!A&&(H(ia),Tt(h2(ia,6)))},[z]);let x2=(0,d.useMemo)(()=>{let h={};return c.forEach(m=>{h[m.member_id]={name:m.name,role:m.role}}),h},[c]),vf=o?x2[o]:null,{overdueRows:Mn,groups:L2,total:Md}=(0,d.useMemo)(()=>{let h=p.map(C=>{let D=C.a.status==="done",X=!!C.a.skipped_at,Ct=ra(C.item.end_time),xa=!D&&!X&&(C.item.end_date<i.date||C.item.end_date===i.date&&Ct&&Ct<i.time);return{...C,done:D,skipped:X,overdue:xa,isMine:C.a.member_id===o,isRoutine:C.item.assigneeCount===1&&C.item.creator_member_id===C.a.member_id,isRecurring:!!C.item.recurring_rule_id,person:x2[C.a.member_id]}}),m=ar.trim().toLowerCase(),b=C=>!m||[C.item.title,C.item.note,C.person&&C.person.name,c2[C.item.meeting_flag]].some(D=>D&&String(D).toLowerCase().includes(m)),T=h.filter(C=>(L==="mine"?C.isMine:zr.has(C.a.member_id))&&b(C)),I=T.filter(C=>C.overdue).sort((C,D)=>(C.item.end_date+ra(C.item.end_time)).localeCompare(D.item.end_date+ra(D.item.end_time))||(C.person&&C.person.name||"").localeCompare(D.person&&D.person.name||"")),Yt=T.filter(C=>!C.overdue&&C.item.start_date<=wt.end&&C.item.end_date>=wt.start),Xt={};Yt.forEach(C=>{(Xt[C.item.start_date]=Xt[C.item.start_date]||[]).push(C)});let St=Object.keys(Xt).sort().map(C=>{let D=Xt[C].sort((Ct,xa)=>{if(L==="mine")return Ct.a.sort_order-xa.a.sort_order||String(Ct.a.created_at).localeCompare(String(xa.a.created_at));let Cn=ra(Ct.item.start_time)||"99:99",Fg=ra(xa.item.start_time)||"99:99";return Cn.localeCompare(Fg)||(Ct.person&&Ct.person.name||"").localeCompare(xa.person&&xa.person.name||"")}),X=L==="mine"&&C>=wt.start&&!m;return{date:C,rows:D,canMove:X}});return{overdueRows:I,groups:St,total:I.length+Yt.length}},[p,i,o,L,zr,wt,x2,ar]),mn=Bg.filter(h=>h.locked||!_r.includes(h.id)),md=`56px ${mn.map(h=>h.w).join(" ")}`,Og=56+mn.reduce((h,m)=>h+m.min,0)+16,ce=(h,m,b)=>na(()=>{let T={...h.item,...m};return Et("work_update_routine",{p_item_id:T.id,p_title:T.title,p_start_date:T.start_date,p_start_time:T.start_time||null,p_end_date:T.end_date,p_end_time:T.end_time||null,p_priority:T.priority||"normal",p_note:T.note||null,p_meeting_flag:T.meeting_flag||null})},b),Ug=(h,m,b)=>{if(!m||!b){er("error","日期必填");return}let T=m,I=b;if(m!==h.item.start_date&&b===h.item.end_date&&(I=h2(m,Hg(h.item.end_date,h.item.start_date))),I<T){er("error","結束日期不能早於開始日期");return}let Yt=!(T<=wt.end&&I>=wt.start);return ce(h,{start_date:T,end_date:I},Yt?`已改到 ${Aa(T)}（目前顯示範圍看不到，切換範圍就會出現）`:null)},Zg=(h,m,b)=>ce(h,{start_time:m||null,end_time:b||null}),qg=(h,m)=>{if(!m){er("error","任務名稱不能空白");return}return ce(h,{title:m})},kf=h=>na(()=>Et("work_complete",{p_item_id:h.item.id,p_note:null}),"已完成"),Gg=(h,m)=>na(()=>Et("work_set_status",{p_item_id:h.item.id,p_status:m}),"狀態已更新"),yn=(h,m)=>na(()=>Et("work_move",{p_item_id:h.item.id,p_where:m})),Yg=h=>na(()=>Et("work_copy",{p_item_id:h.item.id}),"複製成功"),Xg=h=>f({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或跳過不會刪除，標記「取消」並保留紀錄`,onConfirm:async()=>{f(null),await na(()=>Et("work_delete",{p_item_id:h.item.id}),m=>m==="canceled"?"這筆已有進度紀錄，已改為取消並保留紀錄":"已刪除")}}),xf=async()=>{let h=Va.trim();if(!h||vn)return;S(!0);let m=ya||ia,b=await na(()=>Et("work_create_routine",{p_title:h,p_start_date:m,p_end_date:m}));if(S(!1),b){ea("");let T=m<=wt.end&&m>=wt.start;er("success",T?"已新增":`已新增到 ${Aa(m)}（目前顯示範圍看不到，切換範圍就會出現）`)}},Qg=async h=>{S(!0);let m;ct.mode==="editRule"?(m=await na(()=>Et("work_update_rule",{p_rule_id:ct.rule.id,p_title:h.title,p_freq:h.repeat,p_weekdays_only:h.weekdaysOnly,p_week_days:h.weekDays,p_month_day:h.monthDay,p_month_last_day:h.monthLast,p_start_date:h.startDate,p_until_date:h.untilDate,p_start_time:h.startTime,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:h.flag,p_is_active:h.isActive}),"例行工作已儲存（只影響之後產生的工作）"),m!==void 0&&await M2()):h.repeat==="none"?m=await na(()=>Et("work_create_routine",{p_title:h.title,p_start_date:h.startDate,p_start_time:h.startTime,p_end_date:h.endDate,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:h.flag}),"已新增"):m=await na(()=>Et("work_create_rule",{p_title:h.title,p_freq:h.repeat,p_weekdays_only:h.weekdaysOnly,p_week_days:h.weekDays,p_month_day:h.monthDay,p_month_last_day:h.monthLast,p_start_date:h.startDate,p_until_date:h.untilDate,p_start_time:h.startTime,p_end_time:h.endTime,p_priority:h.priority,p_note:h.note,p_meeting_flag:h.flag}),"已建立例行工作，之後會在凌晨自動出現在清單"),S(!1),m!==void 0&&Tr(null)},M2=async()=>{try{let{data:h,error:m}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(m)throw m;Eg(h||[])}catch(h){er("error","讀取例行工作失敗："+d2(h))}},Kg=async()=>{p2(!0),await M2()},Rg=async h=>{await na(()=>Et("work_update_rule",{p_rule_id:h.id,p_title:h.title,p_freq:h.freq,p_weekdays_only:h.weekdays_only,p_week_days:h.week_days,p_month_day:h.month_day,p_month_last_day:h.month_last_day,p_start_date:h.start_date,p_until_date:h.until_date,p_start_time:h.start_time,p_end_time:h.end_time,p_priority:h.priority,p_note:h.note,p_meeting_flag:h.meeting_flag,p_is_active:!h.is_active}),h.is_active?"已停止這個週期":"已重新啟用")!==void 0&&await M2()},Jg=async(h,m)=>{let b=Er;if(f2(null),v2(null),xn(null),!b||b.date!==h.date||b.key===m.key)return;let T=h.rows.filter(St=>!St.overdue),I=T.findIndex(St=>St.key===b.key),Yt=T.findIndex(St=>St.key===m.key),Xt=h.rows.find(St=>St.key===b.key);!Xt||I<0||Yt<0||await na(()=>Et("work_move_to",{p_item_id:Xt.item.id,p_target_item_id:m.item.id,p_after:I<Yt}))},oi="flex items-center bg-slate-100 p-1 rounded-full shrink-0",Nr=h=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${h?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,wa=ni?[...Mn,...L2.flatMap(h=>h.rows)].find(h=>h.key===ni.key):null,wn=wa?L2.find(h=>h.rows.some(m=>m.key===wa.key)):null,yd=(h,m)=>{let b=h.isMine&&h.isRoutine,T=m?m.rows.filter(C=>!C.overdue):[],I=!!m&&m.canMove&&b&&!h.overdue,Yt=xd===h.key&&Er&&Er.key!==h.key,Xt=h.done||h.skipped,St=C=>{switch(C.id){case"title":return d.default.createElement("div",{key:C.id,className:"min-w-0 flex items-start gap-1.5"},d.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},h.isRoutine&&d.default.createElement("span",{className:"text-[0.7em] px-1.5 py-0.5 rounded border border-violet-100 bg-violet-50 text-violet-600 font-bold"},"例行"),h.isRecurring&&d.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},d.default.createElement(i2,{size:Math.round(de*.95)})),h.overdue&&d.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},d.default.createElement(ud,{size:Math.round(de*.8)})," 逾期")),d.default.createElement("div",{className:"min-w-0 flex-1"},d.default.createElement(jg,{value:h.item.title,placeholder:"任務名稱",canEdit:b,onSave:D=>qg(h,D),className:`font-medium ${Xt?"text-slate-400 line-through":h.overdue?"text-red-600":"text-slate-900"}`})));case"who":return d.default.createElement("div",{key:C.id,className:"min-w-0"},d.default.createElement(hf,{person:h.person,size:rr}));case"date":{let D=h.item.start_date!==h.item.end_date;return d.default.createElement("div",{key:C.id,className:`min-w-0 ${h.overdue?"text-red-600":"text-slate-700"}`},d.default.createElement(Wg,{type:"date",a:h.item.start_date,b:h.item.end_date,canEdit:b,onSave:(X,Ct)=>Ug(h,X,Ct)},D?`${Aa(h.item.start_date)} → ${Aa(h.item.end_date)}`:Aa(h.item.start_date)))}case"time":{let D=ra(h.item.start_time),X=ra(h.item.end_time);return d.default.createElement("div",{key:C.id,className:"min-w-0 text-slate-700"},d.default.createElement(Wg,{type:"time",a:D,b:X,canEdit:b,onSave:(Ct,xa)=>Zg(h,Ct,xa)},D||X?`${D||"—"} ~ ${X||"—"}`:d.default.createElement("span",{className:"text-slate-300"},b?"加時間":"")))}case"hours":return d.default.createElement("div",{key:C.id,className:"text-slate-500 text-[0.9em]"},df(h.item)||"");case"priority":return d.default.createElement("div",{key:C.id},d.default.createElement("button",{type:"button",disabled:!b,onClick:()=>ce(h,{priority:h.item.priority==="urgent"?"normal":"urgent"}),title:b?"點一下切換":"",className:`text-[0.75em] px-2 py-0.5 rounded border font-bold ${h.item.priority==="urgent"?"bg-red-50 border-red-100 text-red-600":"bg-slate-50 border-slate-200 text-slate-400"} ${b?"hover:brightness-95 cursor-pointer":"cursor-default"}`},h.item.priority==="urgent"?"緊急":"普通"));case"flag":return d.default.createElement("div",{key:C.id,className:"min-w-0"},b?d.default.createElement("select",{value:h.item.meeting_flag||"",onChange:D=>ce(h,{meeting_flag:D.target.value||null}),className:`max-w-full text-[0.8em] rounded border px-1.5 py-1 outline-none cursor-pointer ${h.item.meeting_flag?"bg-violet-50 border-violet-100 text-violet-600 font-bold":"bg-transparent border-transparent text-slate-300 hover:border-slate-200"}`},d.default.createElement("option",{value:""},"—"),Object.entries(c2).map(([D,X])=>d.default.createElement("option",{key:D,value:D},X))):h.item.meeting_flag?d.default.createElement("span",{className:"text-[0.8em] px-2 py-0.5 rounded border bg-violet-50 border-violet-100 text-violet-600 font-bold"},c2[h.item.meeting_flag]):null);case"note":return d.default.createElement("div",{key:C.id,className:"min-w-0"},d.default.createElement(jg,{value:h.item.note,placeholder:"備註",canEdit:b,onSave:D=>ce(h,{note:D||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let D=h.done?"done":h.skipped?"on_hold":"pending",X=D==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":D==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600";return b?d.default.createElement("select",{key:C.id,value:D,onChange:Ct=>Gg(h,Ct.target.value),"aria-label":"狀態",title:"點一下改變狀態",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${X}`},d.default.createElement("option",{value:"pending"},"待處理"),d.default.createElement("option",{value:"done"},"完成"),d.default.createElement("option",{value:"on_hold"},"擱置")):d.default.createElement("span",{key:C.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${X}`},{pending:"待處理",done:"完成",on_hold:"擱置"}[D])}default:return null}};return d.default.createElement("div",{key:h.key,draggable:I&&Ng===h.key,onDragStart:C=>{f2({key:h.key,date:m.date}),C.dataTransfer.effectAllowed="move";try{C.dataTransfer.setData("text/plain",h.key)}catch{}},onDragOver:C=>{Er&&m&&Er.date===m.date&&!h.overdue&&(C.preventDefault(),xd!==h.key&&v2(h.key))},onDrop:C=>{C.preventDefault(),m&&Jg(m,h)},onDragEnd:()=>{f2(null),v2(null),xn(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors
                    ${h.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Er&&Er.key===h.key?"opacity-40":""}
                    ${Yt?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:md}},d.default.createElement("div",{className:"flex items-center gap-0.5 px-2"},I?d.default.createElement("span",{onMouseDown:()=>xn(h.key),onMouseUp:()=>xn(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},d.default.createElement(ag,{size:rr})):d.default.createElement("span",{style:{width:rr}}),b?d.default.createElement("button",{onClick:C=>{let D=C.currentTarget.getBoundingClientRect();kn({key:h.key,x:Math.min(D.left,window.innerWidth-220),y:Math.min(D.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},d.default.createElement(tg,{size:rr})):d.default.createElement("span",{style:{width:rr+8}})),mn.map(C=>{let D=C.id==="title"||C.id==="note";return d.default.createElement("div",{key:C.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${D?"[&>*]:w-full":"justify-center text-center"}`},St(C))}))};return d.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:de}},d.default.createElement(Mg,{active:"work",shell:e}),d.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},d.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},d.default.createElement("div",{className:"flex items-center gap-4 min-w-0"},d.default.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:de*1.45}},"工作日誌"),d.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},d.default.createElement(sg,{size:16,className:"text-slate-400 shrink-0"}),d.default.createElement("input",{type:"text",value:ar,onChange:h=>ka(h.target.value),onKeyDown:h=>{h.key==="Escape"&&ka("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),ar&&d.default.createElement("button",{type:"button",onClick:()=>ka(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},d.default.createElement(n2,{size:14})))),d.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},d.default.createElement("button",{onClick:()=>Tr({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},d.default.createElement(cn,{size:16}),"新增"),d.default.createElement("div",{className:oi},d.default.createElement("button",{onClick:Kg,className:Nr(!1)},d.default.createElement(cn,{size:14,className:"text-slate-500"}),"例行工作")),d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>ii(h=>!h),className:`${oi} !p-1.5`},d.default.createElement("span",{className:Nr(fn)},d.default.createElement(l2,{size:14,className:"text-slate-500"}),"隱藏")),fn&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>ii(!1)}),d.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},d.default.createElement("p",{className:"text-[0.75em] text-slate-400 px-2 py-1"},"勾選要顯示的欄位（只記在這台電腦）"),Bg.map(h=>d.default.createElement("label",{key:h.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${h.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},d.default.createElement("input",{type:"checkbox",disabled:h.locked,checked:h.locked||!_r.includes(h.id),onChange:()=>pn(h.id),className:"accent-indigo-600"}),h.label,h.locked&&d.default.createElement(sd,{size:11})))))),d.default.createElement("div",{className:oi,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([h,m,b])=>d.default.createElement("button",{key:h,onClick:()=>s2(h),title:m,"aria-label":`文字${m}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${gn===h?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:b}},"A"))))),v?d.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},d.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},d.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},d.default.createElement(sd,{size:30})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),d.default.createElement("p",{className:"text-slate-500 font-normal"},v),d.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧師、行政與系統管理員。"))):d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 z-10 shrink-0 space-y-3"},d.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},d.default.createElement("div",{className:oi},d.default.createElement("button",{onClick:()=>W("mine"),className:Nr(L==="mine")},"我的"),d.default.createElement("button",{onClick:()=>W("all"),className:Nr(L==="all")},"全部")),d.default.createElement("div",{className:oi},d.default.createElement("button",{onClick:()=>B("today"),className:Nr(z==="today")},"今日"),d.default.createElement("button",{onClick:()=>B("week"),className:Nr(z==="week")},"本週"),d.default.createElement("button",{onClick:()=>B("custom"),className:Nr(z==="custom")},"自訂")),z==="custom"&&d.default.createElement("div",{className:"flex items-center gap-2"},d.default.createElement("input",{type:"date",value:A,onChange:h=>H(h.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),d.default.createElement("span",{className:"text-slate-400"},"～"),d.default.createElement("input",{type:"date",value:O,min:A,onChange:h=>Tt(h.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),d.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},wt.start===wt.end?Aa(wt.start):`${Aa(wt.start)} ～ ${Aa(wt.end)}`,d.default.createElement("span",{className:"ml-3"},"共 ",Md," 筆"))),L==="all"&&d.default.createElement("div",{className:"flex items-center gap-2 flex-wrap"},d.default.createElement("button",{onClick:()=>tr(new Set(c.map(h=>h.member_id))),className:"text-[0.8em] px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"},"全選"),d.default.createElement("button",{onClick:()=>tr(new Set),className:"text-[0.8em] px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"},"全不選"),c.map(h=>{let m=zr.has(h.member_id),b=un[h.role]||ne;return d.default.createElement("button",{key:h.member_id,onClick:()=>tr(T=>{let I=new Set(T);return I.has(h.member_id)?I.delete(h.member_id):I.add(h.member_id),I}),className:`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[0.85em] font-medium transition-all ${m?"bg-indigo-50 border-indigo-200 text-indigo-700":"bg-white border-slate-200 text-slate-400 hover:border-slate-300"}`},d.default.createElement(b,{size:rr-2,className:m&&sn.includes(h.role)?"text-amber-500":""}),h.name)}))),d.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},d.default.createElement("div",{className:"space-y-4",style:{minWidth:Og}},d.default.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:md}},d.default.createElement("span",{className:"py-2"}),mn.map(h=>d.default.createElement("span",{key:h.id,className:"py-2 px-2 border-l border-slate-300 text-center"},h.label))),y&&p.length===0?d.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):Md===0?d.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},ar.trim()?`找不到符合「${ar.trim()}」的工作（只搜尋目前顯示的範圍）`:"這段時間沒有工作。按右上角的「+新增」建立第一筆。"):d.default.createElement(d.default.Fragment,null,Mn.length>0&&d.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},d.default.createElement(ud,{size:rr})," 逾期未完成 ",d.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},Mn.length)),Mn.map(h=>yd(h,null))),L2.map(h=>{let m=lf(h.date,ia);return d.default.createElement("div",{key:h.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},d.default.createElement("span",{className:`font-bold ${m.tag==="今天"?"text-indigo-600":"text-slate-800"}`},m.text)),h.rows.map(b=>yd(b,h)))}))))),ni&&wa&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>kn(null),onContextMenu:h=>{h.preventDefault(),kn(null)}}),d.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:ni.x,top:ni.y,fontSize:de}},(()=>{let h=wn?wn.rows.filter(I=>!I.overdue):[],m=h.findIndex(I=>I.key===wa.key),b=!!wn&&wn.canMove&&m>=0,T=(I,Yt,Xt,St,C)=>d.default.createElement("button",{disabled:St,onClick:()=>{kn(null),Xt()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${C?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},d.default.createElement(I,{size:rr-1}),Yt);return d.default.createElement(d.default.Fragment,null,d.default.createElement("p",{className:"px-3 pt-1 pb-0.5 text-[0.72em] text-slate-400 font-medium"},"搬移",!b&&"（這裡不能搬移）"),T(lg,"移到頂端",()=>yn(wa,"top"),!b||m===0),T(ng,"上一行",()=>yn(wa,"up"),!b||m===0),T(og,"下一行",()=>yn(wa,"down"),!b||m===h.length-1),T(dg,"移到底部",()=>yn(wa,"bottom"),!b||m===h.length-1),d.default.createElement("div",{className:"h-px bg-slate-100 my-1"}),T(eg,"複製到今天",()=>Yg(wa)),T(ig,"刪除",()=>Xg(wa),!1,!0))})())),ct&&d.default.createElement(uf,{key:ct.mode+(ct.rule?ct.rule.id:""),mode:ct.mode,initial:ct.rule,presetRepeat:ct.preset,today:ia,busy:vn,onClose:()=>Tr(null),onSubmit:Qg}),Tg&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},d.default.createElement(i2,{className:"text-indigo-600",size:20})," 我的例行工作"),d.default.createElement("button",{onClick:()=>p2(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(n2,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},d.default.createElement("button",{onClick:()=>{p2(!1),Tr({mode:"create",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},d.default.createElement(cn,{size:16}),"新增例行工作"),d.default.createElement("div",{className:"bg-sky-50 p-4 rounded-xl border border-sky-100 text-sm font-normal text-sky-700 leading-relaxed"},"例行工作像手機的重複鬧鐘：設定一次，之後每天凌晨系統會自動把當天的工作放進清單。修改只影響之後產生的。"),kd.length===0?d.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"還沒有例行工作。按上面的「+ 新增例行工作」建立。"):kd.map(h=>d.default.createElement("div",{key:h.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${h.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},d.default.createElement("div",{className:"min-w-0"},d.default.createElement("div",{className:`font-medium truncate ${h.is_active?"text-slate-900":"text-slate-400"}`},h.title),d.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},cf(h),h.start_time?`　${ra(h.start_time)}${h.end_time?"~"+ra(h.end_time):""}`:"",h.until_date?`　到 ${Aa(h.until_date)}`:"",h.is_active?"":"　（已停止）")),d.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},d.default.createElement("button",{onClick:()=>Tr({mode:"editRule",rule:h}),className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},d.default.createElement(ug,{size:16})),d.default.createElement("button",{onClick:()=>Rg(h),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${h.is_active?"bg-amber-50 text-amber-600 hover:bg-amber-100":"bg-emerald-50 text-emerald-600 hover:bg-emerald-100"}`,title:h.is_active?"停止":"重新啟用"},h.is_active?d.default.createElement(cg,{size:16}):d.default.createElement(hg,{size:16})))))))),N.text&&d.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},d.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${N.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},d.default.createElement("div",{className:"shrink-0 mt-0.5"},N.type==="success"?d.default.createElement(rg,{size:18}):d.default.createElement(ei,{size:18})),d.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},N.text))),u&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"p-8 text-center"},d.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},d.default.createElement(ei,{size:32})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),d.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},d.default.createElement("button",{onClick:()=>f(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},Ag=sf;var Vg=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
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
    --color-sky-50: oklch(97.7% 0.013 236.62);
    --color-sky-100: oklch(95.1% 0.026 236.824);
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
  .top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .top-4 {
    top: calc(var(--spacing) * 4);
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
  .right-6 {
    right: calc(var(--spacing) * 6);
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
  .border-slate-300 {
    border-color: var(--color-slate-300);
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
`;var gf="https://jcepavwocdujoeoqxvsd.supabase.co",pf="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",fd=document.createElement("style");fd.id="tbc-one-css";fd.textContent=Vg;document.head.appendChild(fd);var oe=window.__TBC_SB||window.supabase.createClient(gf,pf),ff=({page:t})=>{let[a,r]=(0,Lt.useState)(void 0),[e,i]=(0,Lt.useState)(""),[n,o]=(0,Lt.useState)({status:"loading",name:"",role:"member"});(0,Lt.useEffect)(()=>{let v=!0;oe.auth.getSession().then(({data:p})=>{v&&r(p.session||null)});let{data:x}=oe.auth.onAuthStateChange((p,k)=>{v&&r(k||null)});return()=>{v=!1,x&&x.subscription&&x.subscription.unsubscribe()}},[]);let l=a&&a.user&&a.user.id;(0,Lt.useEffect)(()=>{if(!a)return;let v=!0;return Lg(oe,a).then(async x=>{if(v){if(x.status!=="ok"||!kg.includes(x.role)){try{await oe.auth.signOut()}catch{}i("此帳號沒有使用權限（僅限牧師、行政、系統管理員）"),r(null);return}i(""),o(x)}}),()=>{v=!1}},[l]);let c=async()=>{try{await oe.auth.signOut()}catch{}r(null),o({status:"loading",name:"",role:"member"})};if(a===void 0)return Lt.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return Lt.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},Lt.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},Lt.default.createElement(o2,{size:30})),Lt.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),Lt.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),Lt.default.createElement(mg,{supabase:oe,notice:e}));if(n.status!=="ok")return Lt.default.createElement("div",{className:"h-[100dvh] bg-white"});let s={identity:n,onLogout:c};return t==="work"?Lt.default.createElement(Ag,{session:a,supabase:oe,utils:{},shell:s}):Lt.default.createElement(wg,{shell:s})},zg=document.getElementById("root");(0,_g.createRoot)(zg).render(Lt.default.createElement(ff,{page:zg.getAttribute("data-page")||"home"}));})();
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
