(()=>{var S4=Object.create;var Zd=Object.defineProperty;var A4=Object.getOwnPropertyDescriptor;var V4=Object.getOwnPropertyNames;var z4=Object.getPrototypeOf,_4=Object.prototype.hasOwnProperty;var hr=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var T4=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of V4(a))!_4.call(t,i)&&i!==r&&Zd(t,i,{get:()=>a[i],enumerable:!(e=A4(a,i))||e.enumerable});return t};var qr=(t,a,r)=>(r=t!=null?S4(z4(t)):{},T4(a||!t||!t.__esModule?Zd(r,"default",{value:t,enumerable:!0}):r,t));var Id=hr(_=>{"use strict";var z2=Symbol.for("react.transitional.element"),N4=Symbol.for("react.portal"),E4=Symbol.for("react.fragment"),O4=Symbol.for("react.strict_mode"),D4=Symbol.for("react.profiler"),U4=Symbol.for("react.consumer"),Z4=Symbol.for("react.context"),q4=Symbol.for("react.forward_ref"),G4=Symbol.for("react.suspense"),Y4=Symbol.for("react.memo"),Qd=Symbol.for("react.lazy"),X4=Symbol.for("react.activity"),qd=Symbol.iterator;function Q4(t){return t===null||typeof t!="object"?null:(t=qd&&t[qd]||t["@@iterator"],typeof t=="function"?t:null)}var Kd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rd=Object.assign,Jd={};function ve(t,a,r){this.props=t,this.context=a,this.refs=Jd,this.updater=r||Kd}ve.prototype.isReactComponent={};ve.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};ve.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fd(){}Fd.prototype=ve.prototype;function _2(t,a,r){this.props=t,this.context=a,this.refs=Jd,this.updater=r||Kd}var T2=_2.prototype=new Fd;T2.constructor=_2;Rd(T2,ve.prototype);T2.isPureReactComponent=!0;var Gd=Array.isArray;function V2(){}var tt={H:null,A:null,T:null,S:null},$d=Object.prototype.hasOwnProperty;function N2(t,a,r){var e=r.ref;return{$$typeof:z2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function K4(t,a){return N2(t.type,a,t.props)}function E2(t){return typeof t=="object"&&t!==null&&t.$$typeof===z2}function R4(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var Yd=/\/+/g;function A2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?R4(""+t.key):a.toString(36)}function J4(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(V2,V2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function fe(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case z2:case N4:o=!0;break;case Qd:return o=t._init,fe(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+A2(t,0):e,Gd(i)?(r="",o!=null&&(r=o.replace(Yd,"$&/")+"/"),fe(i,a,r,"",function(s){return s})):i!=null&&(E2(i)&&(i=K4(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Yd,"$&/")+"/")+o)),a.push(i)),1;o=0;var l=e===""?".":e+":";if(Gd(t))for(var h=0;h<t.length;h++)e=t[h],n=l+A2(e,h),o+=fe(e,a,r,n,i);else if(h=Q4(t),typeof h=="function")for(t=h.call(t),h=0;!(e=t.next()).done;)e=e.value,n=l+A2(e,h++),o+=fe(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return fe(J4(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function Tn(t,a,r){if(t==null)return t;var e=[],i=0;return fe(t,e,"","",function(n){return a.call(r,n,i++)}),e}function F4(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var Xd=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},$4={map:Tn,forEach:function(t,a,r){Tn(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return Tn(t,function(){a++}),a},toArray:function(t){return Tn(t,function(a){return a})||[]},only:function(t){if(!E2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_.Activity=X4;_.Children=$4;_.Component=ve;_.Fragment=E4;_.Profiler=D4;_.PureComponent=_2;_.StrictMode=O4;_.Suspense=G4;_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tt;_.__COMPILER_RUNTIME={__proto__:null,c:function(t){return tt.H.useMemoCache(t)}};_.cache=function(t){return function(){return t.apply(null,arguments)}};_.cacheSignal=function(){return null};_.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=Rd({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!$d.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),l=0;l<n;l++)o[l]=arguments[l+2];e.children=o}return N2(t.type,i,e)};_.createContext=function(t){return t={$$typeof:Z4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:U4,_context:t},t};_.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)$d.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var l=Array(o),h=0;h<o;h++)l[h]=arguments[h+2];i.children=l}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return N2(t,n,i)};_.createRef=function(){return{current:null}};_.forwardRef=function(t){return{$$typeof:q4,render:t}};_.isValidElement=E2;_.lazy=function(t){return{$$typeof:Qd,_payload:{_status:-1,_result:t},_init:F4}};_.memo=function(t,a){return{$$typeof:Y4,type:t,compare:a===void 0?null:a}};_.startTransition=function(t){var a=tt.T,r={};tt.T=r;try{var e=t(),i=tt.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(V2,Xd)}catch(n){Xd(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),tt.T=a}};_.unstable_useCacheRefresh=function(){return tt.H.useCacheRefresh()};_.use=function(t){return tt.H.use(t)};_.useActionState=function(t,a,r){return tt.H.useActionState(t,a,r)};_.useCallback=function(t,a){return tt.H.useCallback(t,a)};_.useContext=function(t){return tt.H.useContext(t)};_.useDebugValue=function(){};_.useDeferredValue=function(t,a){return tt.H.useDeferredValue(t,a)};_.useEffect=function(t,a){return tt.H.useEffect(t,a)};_.useEffectEvent=function(t){return tt.H.useEffectEvent(t)};_.useId=function(){return tt.H.useId()};_.useImperativeHandle=function(t,a,r){return tt.H.useImperativeHandle(t,a,r)};_.useInsertionEffect=function(t,a){return tt.H.useInsertionEffect(t,a)};_.useLayoutEffect=function(t,a){return tt.H.useLayoutEffect(t,a)};_.useMemo=function(t,a){return tt.H.useMemo(t,a)};_.useOptimistic=function(t,a){return tt.H.useOptimistic(t,a)};_.useReducer=function(t,a,r){return tt.H.useReducer(t,a,r)};_.useRef=function(t){return tt.H.useRef(t)};_.useState=function(t){return tt.H.useState(t)};_.useSyncExternalStore=function(t,a,r){return tt.H.useSyncExternalStore(t,a,r)};_.useTransition=function(){return tt.H.useTransition()};_.version="19.2.8"});var Za=hr((ev,Pd)=>{"use strict";Pd.exports=Id()});var cc=hr(nt=>{"use strict";function Z2(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<Nn(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Ha(t){return t.length===0?null:t[0]}function On(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,l=t[o],h=o+1,s=t[h];if(0>Nn(l,r))h<i&&0>Nn(s,l)?(t[e]=s,t[h]=r,e=h):(t[e]=l,t[o]=r,e=o);else if(h<i&&0>Nn(s,r))t[e]=s,t[h]=r,e=h;else break t}}return a}function Nn(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}nt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(tc=performance,nt.unstable_now=function(){return tc.now()}):(O2=Date,ac=O2.now(),nt.unstable_now=function(){return O2.now()-ac});var tc,O2,ac,qa=[],ur=[],I4=1,ha=null,Et=3,q2=!1,fi=!1,vi=!1,G2=!1,ic=typeof setTimeout=="function"?setTimeout:null,nc=typeof clearTimeout=="function"?clearTimeout:null,rc=typeof setImmediate<"u"?setImmediate:null;function En(t){for(var a=Ha(ur);a!==null;){if(a.callback===null)On(ur);else if(a.startTime<=t)On(ur),a.sortIndex=a.expirationTime,Z2(qa,a);else break;a=Ha(ur)}}function Y2(t){if(vi=!1,En(t),!fi)if(Ha(qa)!==null)fi=!0,xe||(xe=!0,ke());else{var a=Ha(ur);a!==null&&X2(Y2,a.startTime-t)}}var xe=!1,ki=-1,oc=5,lc=-1;function dc(){return G2?!0:!(nt.unstable_now()-lc<oc)}function D2(){if(G2=!1,xe){var t=nt.unstable_now();lc=t;var a=!0;try{t:{fi=!1,vi&&(vi=!1,nc(ki),ki=-1),q2=!0;var r=Et;try{a:{for(En(t),ha=Ha(qa);ha!==null&&!(ha.expirationTime>t&&dc());){var e=ha.callback;if(typeof e=="function"){ha.callback=null,Et=ha.priorityLevel;var i=e(ha.expirationTime<=t);if(t=nt.unstable_now(),typeof i=="function"){ha.callback=i,En(t),a=!0;break a}ha===Ha(qa)&&On(qa),En(t)}else On(qa);ha=Ha(qa)}if(ha!==null)a=!0;else{var n=Ha(ur);n!==null&&X2(Y2,n.startTime-t),a=!1}}break t}finally{ha=null,Et=r,q2=!1}a=void 0}}finally{a?ke():xe=!1}}}var ke;typeof rc=="function"?ke=function(){rc(D2)}:typeof MessageChannel<"u"?(U2=new MessageChannel,ec=U2.port2,U2.port1.onmessage=D2,ke=function(){ec.postMessage(null)}):ke=function(){ic(D2,0)};var U2,ec;function X2(t,a){ki=ic(function(){t(nt.unstable_now())},a)}nt.unstable_IdlePriority=5;nt.unstable_ImmediatePriority=1;nt.unstable_LowPriority=4;nt.unstable_NormalPriority=3;nt.unstable_Profiling=null;nt.unstable_UserBlockingPriority=2;nt.unstable_cancelCallback=function(t){t.callback=null};nt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oc=0<t?Math.floor(1e3/t):5};nt.unstable_getCurrentPriorityLevel=function(){return Et};nt.unstable_next=function(t){switch(Et){case 1:case 2:case 3:var a=3;break;default:a=Et}var r=Et;Et=a;try{return t()}finally{Et=r}};nt.unstable_requestPaint=function(){G2=!0};nt.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=Et;Et=t;try{return a()}finally{Et=r}};nt.unstable_scheduleCallback=function(t,a,r){var e=nt.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:I4++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,Z2(ur,t),Ha(qa)===null&&t===Ha(ur)&&(vi?(nc(ki),ki=-1):vi=!0,X2(Y2,r-e))):(t.sortIndex=i,Z2(qa,t),fi||q2||(fi=!0,xe||(xe=!0,ke()))),t};nt.unstable_shouldYield=dc;nt.unstable_wrapCallback=function(t){var a=Et;return function(){var r=Et;Et=a;try{return t.apply(this,arguments)}finally{Et=r}}}});var uc=hr((nv,hc)=>{"use strict";hc.exports=cc()});var gc=hr(Ut=>{"use strict";var P4=Za();function sc(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function sr(){}var Dt={d:{f:sr,r:function(){throw Error(sc(522))},D:sr,C:sr,L:sr,m:sr,X:sr,S:sr,M:sr},p:0,findDOMNode:null},tp=Symbol.for("react.portal");function ap(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tp,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var xi=P4.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Dn(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}Ut.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Dt;Ut.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(sc(299));return ap(t,a,null,r)};Ut.flushSync=function(t){var a=xi.T,r=Dt.p;try{if(xi.T=null,Dt.p=2,t)return t()}finally{xi.T=a,Dt.p=r,Dt.d.f()}};Ut.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Dt.d.C(t,a))};Ut.prefetchDNS=function(t){typeof t=="string"&&Dt.d.D(t)};Ut.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=Dn(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Dt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Dt.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};Ut.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=Dn(a.as,a.crossOrigin);Dt.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Dt.d.M(t)};Ut.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=Dn(r,a.crossOrigin);Dt.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};Ut.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=Dn(a.as,a.crossOrigin);Dt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Dt.d.m(t)};Ut.requestFormReset=function(t){Dt.d.r(t)};Ut.unstable_batchedUpdates=function(t,a){return t(a)};Ut.useFormState=function(t,a,r){return xi.H.useFormState(t,a,r)};Ut.useFormStatus=function(){return xi.H.useHostTransitionStatus()};Ut.version="19.2.8"});var vc=hr((lv,fc)=>{"use strict";function pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pc)}catch(t){console.error(t)}}pc(),fc.exports=gc()});var Ws=hr(u2=>{"use strict";var Mt=uc(),q0=Za(),rp=vc();function M(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function G0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nn(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function Y0(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function X0(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function kc(t){if(nn(t)!==t)throw Error(M(188))}function ep(t){var a=t.alternate;if(!a){if(a=nn(t),a===null)throw Error(M(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return kc(i),t;if(n===e)return kc(i),a;n=n.sibling}throw Error(M(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,e=n;break}if(l===e){o=!0,e=i,r=n;break}l=l.sibling}if(!o){for(l=n.child;l;){if(l===r){o=!0,r=n,e=i;break}if(l===e){o=!0,e=n,r=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(r.alternate!==e)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?t:a}function Q0(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=Q0(t),a!==null)return a;t=t.sibling}return null}var et=Object.assign,ip=Symbol.for("react.element"),Un=Symbol.for("react.transitional.element"),bi=Symbol.for("react.portal"),Ce=Symbol.for("react.fragment"),K0=Symbol.for("react.strict_mode"),Bl=Symbol.for("react.profiler"),R0=Symbol.for("react.consumer"),Fa=Symbol.for("react.context"),M1=Symbol.for("react.forward_ref"),bl=Symbol.for("react.suspense"),jl=Symbol.for("react.suspense_list"),m1=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),Wl=Symbol.for("react.activity"),np=Symbol.for("react.memo_cache_sentinel"),xc=Symbol.iterator;function Li(t){return t===null||typeof t!="object"?null:(t=xc&&t[xc]||t["@@iterator"],typeof t=="function"?t:null)}var op=Symbol.for("react.client.reference");function Hl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===op?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ce:return"Fragment";case Bl:return"Profiler";case K0:return"StrictMode";case bl:return"Suspense";case jl:return"SuspenseList";case Wl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case bi:return"Portal";case Fa:return t.displayName||"Context";case R0:return(t._context.displayName||"Context")+".Consumer";case M1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case m1:return a=t.displayName||null,a!==null?a:Hl(t.type)||"Memo";case gr:a=t._payload,t=t._init;try{return Hl(t(a))}catch{}}return null}var ji=Array.isArray,V=q0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=rp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rr={pending:!1,data:null,method:null,action:null},Sl=[],Be=-1;function _a(t){return{current:t}}function Wt(t){0>Be||(t.current=Sl[Be],Sl[Be]=null,Be--)}function P(t,a){Be++,Sl[Be]=t.current,t.current=a}var za=_a(null),Yi=_a(null),Cr=_a(null),Mo=_a(null);function mo(t,a){switch(P(Cr,a),P(Yi,t),P(za,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?B0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=B0(a),t=ps(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Wt(za),P(za,t)}function Ge(){Wt(za),Wt(Yi),Wt(Cr)}function Al(t){t.memoizedState!==null&&P(Mo,t);var a=za.current,r=ps(a,t.type);a!==r&&(P(Yi,t),P(za,r))}function yo(t){Yi.current===t&&(Wt(za),Wt(Yi)),Mo.current===t&&(Wt(Mo),an._currentValue=Rr)}var Q2,Lc;function Yr(t){if(Q2===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);Q2=a&&a[1]||"",Lc=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Q2+t+Lc}var K2=!1;function R2(t,a){if(!t||K2)return"";K2=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(k){var p=k}Reflect.construct(t,[],x)}else{try{x.call()}catch(k){p=k}t.call(x.prototype)}}else{try{throw Error()}catch(k){p=k}(x=t())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(k){if(k&&p&&typeof k.stack=="string")return[k.stack,p.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],l=n[1];if(o&&l){var h=o.split(`
`),s=l.split(`
`);for(i=e=0;e<h.length&&!h[e].includes("DetermineComponentFrameRoot");)e++;for(;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;if(e===h.length||i===s.length)for(e=h.length-1,i=s.length-1;1<=e&&0<=i&&h[e]!==s[i];)i--;for(;1<=e&&0<=i;e--,i--)if(h[e]!==s[i]){if(e!==1||i!==1)do if(e--,i--,0>i||h[e]!==s[i]){var v=`
`+h[e].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=e&&0<=i);break}}}finally{K2=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Yr(r):""}function lp(t,a){switch(t.tag){case 26:case 27:case 5:return Yr(t.type);case 16:return Yr("Lazy");case 13:return t.child!==a&&a!==null?Yr("Suspense Fallback"):Yr("Suspense");case 19:return Yr("SuspenseList");case 0:case 15:return R2(t.type,!1);case 11:return R2(t.type.render,!1);case 1:return R2(t.type,!0);case 31:return Yr("Activity");default:return""}}function Mc(t){try{var a="",r=null;do a+=lp(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Vl=Object.prototype.hasOwnProperty,y1=Mt.unstable_scheduleCallback,J2=Mt.unstable_cancelCallback,dp=Mt.unstable_shouldYield,cp=Mt.unstable_requestPaint,ra=Mt.unstable_now,hp=Mt.unstable_getCurrentPriorityLevel,J0=Mt.unstable_ImmediatePriority,F0=Mt.unstable_UserBlockingPriority,wo=Mt.unstable_NormalPriority,up=Mt.unstable_LowPriority,$0=Mt.unstable_IdlePriority,sp=Mt.log,gp=Mt.unstable_setDisableYieldValue,on=null,ea=null;function Lr(t){if(typeof sp=="function"&&gp(t),ea&&typeof ea.setStrictMode=="function")try{ea.setStrictMode(on,t)}catch{}}var ia=Math.clz32?Math.clz32:vp,pp=Math.log,fp=Math.LN2;function vp(t){return t>>>=0,t===0?32:31-(pp(t)/fp|0)|0}var Zn=256,qn=262144,Gn=4194304;function Xr(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Jo(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var l=e&134217727;return l!==0?(e=l&~n,e!==0?i=Xr(e):(o&=l,o!==0?i=Xr(o):r||(r=l&~t,r!==0&&(i=Xr(r))))):(l=e&~n,l!==0?i=Xr(l):o!==0?i=Xr(o):r||(r=e&~t,r!==0&&(i=Xr(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function ln(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function kp(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I0(){var t=Gn;return Gn<<=1,(Gn&62914560)===0&&(Gn=4194304),t}function F2(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function dn(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xp(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var l=t.entanglements,h=t.expirationTimes,s=t.hiddenUpdates;for(r=o&~r;0<r;){var v=31-ia(r),x=1<<v;l[v]=0,h[v]=-1;var p=s[v];if(p!==null)for(s[v]=null,v=0;v<p.length;v++){var k=p[v];k!==null&&(k.lane&=-536870913)}r&=~x}e!==0&&P0(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function P0(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-ia(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function th(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-ia(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function ah(t,a){var r=a&-a;return r=(r&42)!==0?1:w1(r),(r&(t.suspendedLanes|a))!==0?0:r}function w1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function C1(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function rh(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:Bs(t.type))}function mc(t,a){var r=Q.p;try{return Q.p=t,a()}finally{Q.p=r}}var Er=Math.random().toString(36).slice(2),At="__reactFiber$"+Er,Rt="__reactProps$"+Er,ti="__reactContainer$"+Er,zl="__reactEvents$"+Er,Lp="__reactListeners$"+Er,Mp="__reactHandles$"+Er,yc="__reactResources$"+Er,cn="__reactMarker$"+Er;function B1(t){delete t[At],delete t[Rt],delete t[zl],delete t[Lp],delete t[Mp]}function be(t){var a=t[At];if(a)return a;for(var r=t.parentNode;r;){if(a=r[ti]||r[At]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=S0(t);t!==null;){if(r=t[At])return r;t=S0(t)}return a}t=r,r=t.parentNode}return null}function ai(t){if(t=t[At]||t[ti]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Wi(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(M(33))}function Ne(t){var a=t[yc];return a||(a=t[yc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function jt(t){t[cn]=!0}var eh=new Set,ih={};function ie(t,a){Ye(t,a),Ye(t+"Capture",a)}function Ye(t,a){for(ih[t]=a,t=0;t<a.length;t++)eh.add(a[t])}var mp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wc={},Cc={};function yp(t){return Vl.call(Cc,t)?!0:Vl.call(wc,t)?!1:mp.test(t)?Cc[t]=!0:(wc[t]=!0,!1)}function io(t,a,r){if(yp(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function Yn(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function Ga(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function sa(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nh(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function wp(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function _l(t){if(!t._valueTracker){var a=nh(t)?"checked":"value";t._valueTracker=wp(t,a,""+t[a])}}function oh(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=nh(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function Co(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Cp=/[\n"\\]/g;function fa(t){return t.replace(Cp,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Tl(t,a,r,e,i,n,o,l){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+sa(a)):t.value!==""+sa(a)&&(t.value=""+sa(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?Nl(t,o,sa(a)):r!=null?Nl(t,o,sa(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+sa(l):t.removeAttribute("name")}function lh(t,a,r,e,i,n,o,l){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){_l(t);return}r=r!=null?""+sa(r):"",a=a!=null?""+sa(a):r,l||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=l?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),_l(t)}function Nl(t,a,r){a==="number"&&Co(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ee(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+sa(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function dh(t,a,r){if(a!=null&&(a=""+sa(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+sa(r):""}function ch(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(M(92));if(ji(e)){if(1<e.length)throw Error(M(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=sa(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),_l(t)}function Xe(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var Bp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bc(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||Bp.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function hh(t,a,r){if(a!=null&&typeof a!="object")throw Error(M(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&Bc(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&Bc(t,n,a[n])}function b1(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function no(t){return jp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $a(){}var El=null;function j1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var je=null,Oe=null;function bc(t){var a=ai(t);if(a&&(t=a.stateNode)){var r=t[Rt]||null;t:switch(t=a.stateNode,a.type){case"input":if(Tl(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+fa(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[Rt]||null;if(!i)throw Error(M(90));Tl(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&oh(e)}break t;case"textarea":dh(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Ee(t,!!r.multiple,a,!1)}}}var $2=!1;function uh(t,a,r){if($2)return t(a,r);$2=!0;try{var e=t(a);return e}finally{if($2=!1,(je!==null||Oe!==null)&&(l2(),je&&(a=je,t=Oe,Oe=je=null,bc(a),t)))for(a=0;a<t.length;a++)bc(t[a])}}function Xi(t,a){var r=t.stateNode;if(r===null)return null;var e=r[Rt]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(M(231,a,typeof r));return r}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ol=!1;if(rr)try{Le={},Object.defineProperty(Le,"passive",{get:function(){Ol=!0}}),window.addEventListener("test",Le,Le),window.removeEventListener("test",Le,Le)}catch{Ol=!1}var Le,Mr=null,W1=null,oo=null;function sh(){if(oo)return oo;var t,a=W1,r=a.length,e,i="value"in Mr?Mr.value:Mr.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return oo=i.slice(t,1<e?1-e:void 0)}function lo(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Xn(){return!0}function jc(){return!1}function Jt(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(n):n[l]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Xn:jc,this.isPropagationStopped=jc,this}return et(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),a}var ne={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Jt(ne),hn=et({},ne,{view:0,detail:0}),Wp=Jt(hn),I2,P2,Mi,$o=et({},hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:H1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mi&&(Mi&&t.type==="mousemove"?(I2=t.screenX-Mi.screenX,P2=t.screenY-Mi.screenY):P2=I2=0,Mi=t),I2)},movementY:function(t){return"movementY"in t?t.movementY:P2}}),Wc=Jt($o),Hp=et({},$o,{dataTransfer:0}),Sp=Jt(Hp),Ap=et({},hn,{relatedTarget:0}),tl=Jt(Ap),Vp=et({},ne,{animationName:0,elapsedTime:0,pseudoElement:0}),zp=Jt(Vp),_p=et({},ne,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tp=Jt(_p),Np=et({},ne,{data:0}),Hc=Jt(Np),Ep={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Op={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Up(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=Dp[t])?!!a[t]:!1}function H1(){return Up}var Zp=et({},hn,{key:function(t){if(t.key){var a=Ep[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Op[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:H1,charCode:function(t){return t.type==="keypress"?lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qp=Jt(Zp),Gp=et({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sc=Jt(Gp),Yp=et({},hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:H1}),Xp=Jt(Yp),Qp=et({},ne,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kp=Jt(Qp),Rp=et({},$o,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jp=Jt(Rp),Fp=et({},ne,{newState:0,oldState:0}),$p=Jt(Fp),Ip=[9,13,27,32],S1=rr&&"CompositionEvent"in window,Ai=null;rr&&"documentMode"in document&&(Ai=document.documentMode);var Pp=rr&&"TextEvent"in window&&!Ai,gh=rr&&(!S1||Ai&&8<Ai&&11>=Ai),Ac=" ",Vc=!1;function ph(t,a){switch(t){case"keyup":return Ip.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var We=!1;function t5(t,a){switch(t){case"compositionend":return fh(a);case"keypress":return a.which!==32?null:(Vc=!0,Ac);case"textInput":return t=a.data,t===Ac&&Vc?null:t;default:return null}}function a5(t,a){if(We)return t==="compositionend"||!S1&&ph(t,a)?(t=sh(),oo=W1=Mr=null,We=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return gh&&a.locale!=="ko"?null:a.data;default:return null}}var r5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!r5[t.type]:a==="textarea"}function vh(t,a,r,e){je?Oe?Oe.push(e):Oe=[e]:je=e,a=qo(a,"onChange"),0<a.length&&(r=new Fo("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var Vi=null,Qi=null;function e5(t){us(t,0)}function Io(t){var a=Wi(t);if(oh(a))return t}function _c(t,a){if(t==="change")return a}var kh=!1;rr&&(rr?(Kn="oninput"in document,Kn||(al=document.createElement("div"),al.setAttribute("oninput","return;"),Kn=typeof al.oninput=="function"),Qn=Kn):Qn=!1,kh=Qn&&(!document.documentMode||9<document.documentMode));var Qn,Kn,al;function Tc(){Vi&&(Vi.detachEvent("onpropertychange",xh),Qi=Vi=null)}function xh(t){if(t.propertyName==="value"&&Io(Qi)){var a=[];vh(a,Qi,t,j1(t)),uh(e5,a)}}function i5(t,a,r){t==="focusin"?(Tc(),Vi=a,Qi=r,Vi.attachEvent("onpropertychange",xh)):t==="focusout"&&Tc()}function n5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Io(Qi)}function o5(t,a){if(t==="click")return Io(a)}function l5(t,a){if(t==="input"||t==="change")return Io(a)}function d5(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var oa=typeof Object.is=="function"?Object.is:d5;function Ki(t,a){if(oa(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!Vl.call(a,i)||!oa(t[i],a[i]))return!1}return!0}function Nc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ec(t,a){var r=Nc(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Nc(r)}}function Lh(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Lh(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Mh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Co(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=Co(t.document)}return a}function A1(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var c5=rr&&"documentMode"in document&&11>=document.documentMode,He=null,Dl=null,zi=null,Ul=!1;function Oc(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ul||He==null||He!==Co(e)||(e=He,"selectionStart"in e&&A1(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),zi&&Ki(zi,e)||(zi=e,e=qo(Dl,"onSelect"),0<e.length&&(a=new Fo("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=He)))}function Gr(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var Se={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionrun:Gr("Transition","TransitionRun"),transitionstart:Gr("Transition","TransitionStart"),transitioncancel:Gr("Transition","TransitionCancel"),transitionend:Gr("Transition","TransitionEnd")},rl={},mh={};rr&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete Se.animationend.animation,delete Se.animationiteration.animation,delete Se.animationstart.animation),"TransitionEvent"in window||delete Se.transitionend.transition);function oe(t){if(rl[t])return rl[t];if(!Se[t])return t;var a=Se[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in mh)return rl[t]=a[r];return t}var yh=oe("animationend"),wh=oe("animationiteration"),Ch=oe("animationstart"),h5=oe("transitionrun"),u5=oe("transitionstart"),s5=oe("transitioncancel"),Bh=oe("transitionend"),bh=new Map,Zl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zl.push("scrollEnd");function Ba(t,a){bh.set(t,a),ie(a,[t])}var Bo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ua=[],Ae=0,V1=0;function Po(){for(var t=Ae,a=V1=Ae=0;a<t;){var r=ua[a];ua[a++]=null;var e=ua[a];ua[a++]=null;var i=ua[a];ua[a++]=null;var n=ua[a];if(ua[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&jh(r,i,n)}}function t2(t,a,r,e){ua[Ae++]=t,ua[Ae++]=a,ua[Ae++]=r,ua[Ae++]=e,V1|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function z1(t,a,r,e){return t2(t,a,r,e),bo(t)}function le(t,a){return t2(t,null,null,a),bo(t)}function jh(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-ia(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function bo(t){if(50<qi)throw qi=0,d1=null,Error(M(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Ve={};function g5(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ta(t,a,r,e){return new g5(t,a,r,e)}function _1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pa(t,a){var r=t.alternate;return r===null?(r=ta(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Wh(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function co(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")_1(t)&&(o=1);else if(typeof t=="string")o=kf(t,r,za.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Wl:return t=ta(31,r,a,i),t.elementType=Wl,t.lanes=n,t;case Ce:return Jr(r.children,i,n,a);case K0:o=8,i|=24;break;case Bl:return t=ta(12,r,a,i|2),t.elementType=Bl,t.lanes=n,t;case bl:return t=ta(13,r,a,i),t.elementType=bl,t.lanes=n,t;case jl:return t=ta(19,r,a,i),t.elementType=jl,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fa:o=10;break t;case R0:o=9;break t;case M1:o=11;break t;case m1:o=14;break t;case gr:o=16,e=null;break t}o=29,r=Error(M(130,t===null?"null":typeof t,"")),e=null}return a=ta(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function Jr(t,a,r,e){return t=ta(7,t,e,a),t.lanes=r,t}function el(t,a,r){return t=ta(6,t,null,a),t.lanes=r,t}function Hh(t){var a=ta(18,null,null,0);return a.stateNode=t,a}function il(t,a,r){return a=ta(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Dc=new WeakMap;function va(t,a){if(typeof t=="object"&&t!==null){var r=Dc.get(t);return r!==void 0?r:(a={value:t,source:a,stack:Mc(a)},Dc.set(t,a),a)}return{value:t,source:a,stack:Mc(a)}}var ze=[],_e=0,jo=null,Ri=0,ga=[],pa=0,zr=null,Sa=1,Aa="";function Ra(t,a){ze[_e++]=Ri,ze[_e++]=jo,jo=t,Ri=a}function Sh(t,a,r){ga[pa++]=Sa,ga[pa++]=Aa,ga[pa++]=zr,zr=t;var e=Sa;t=Aa;var i=32-ia(e)-1;e&=~(1<<i),r+=1;var n=32-ia(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,Sa=1<<32-ia(a)+i|r<<i|e,Aa=n+t}else Sa=1<<n|r<<i|e,Aa=t}function T1(t){t.return!==null&&(Ra(t,1),Sh(t,1,0))}function N1(t){for(;t===jo;)jo=ze[--_e],ze[_e]=null,Ri=ze[--_e],ze[_e]=null;for(;t===zr;)zr=ga[--pa],ga[pa]=null,Aa=ga[--pa],ga[pa]=null,Sa=ga[--pa],ga[pa]=null}function Ah(t,a){ga[pa++]=Sa,ga[pa++]=Aa,ga[pa++]=zr,Sa=a.id,Aa=a.overflow,zr=t}var Vt=null,rt=null,Y=!1,Br=null,ka=!1,ql=Error(M(519));function _r(t){var a=Error(M(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ji(va(a,t)),ql}function Uc(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[At]=t,a[Rt]=e,r){case"dialog":U("cancel",a),U("close",a);break;case"iframe":case"object":case"embed":U("load",a);break;case"video":case"audio":for(r=0;r<Pi.length;r++)U(Pi[r],a);break;case"source":U("error",a);break;case"img":case"image":case"link":U("error",a),U("load",a);break;case"details":U("toggle",a);break;case"input":U("invalid",a),lh(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":U("invalid",a);break;case"textarea":U("invalid",a),ch(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||gs(a.textContent,r)?(e.popover!=null&&(U("beforetoggle",a),U("toggle",a)),e.onScroll!=null&&U("scroll",a),e.onScrollEnd!=null&&U("scrollend",a),e.onClick!=null&&(a.onclick=$a),a=!0):a=!1,a||_r(t,!0)}function Zc(t){for(Vt=t.return;Vt;)switch(Vt.tag){case 5:case 31:case 13:ka=!1;return;case 27:case 3:ka=!0;return;default:Vt=Vt.return}}function Me(t){if(t!==Vt)return!1;if(!Y)return Zc(t),Y=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||g1(t.type,t.memoizedProps)),r=!r),r&&rt&&_r(t),Zc(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));rt=H0(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));rt=H0(t)}else a===27?(a=rt,Or(t.type)?(t=k1,k1=null,rt=t):rt=a):rt=Vt?La(t.stateNode.nextSibling):null;return!0}function Pr(){rt=Vt=null,Y=!1}function nl(){var t=Br;return t!==null&&(Qt===null?Qt=t:Qt.push.apply(Qt,t),Br=null),t}function Ji(t){Br===null?Br=[t]:Br.push(t)}var Gl=_a(null),de=null,Ia=null;function fr(t,a,r){P(Gl,a._currentValue),a._currentValue=r}function tr(t){t._currentValue=Gl.current,Wt(Gl)}function Yl(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function Xl(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var l=n;n=i;for(var h=0;h<a.length;h++)if(l.context===a[h]){n.lanes|=r,l=n.alternate,l!==null&&(l.lanes|=r),Yl(n.return,r,t),e||(o=null);break t}n=l.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(M(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),Yl(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ri(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(M(387));if(o=o.memoizedProps,o!==null){var l=i.type;oa(i.pendingProps.value,o.value)||(t!==null?t.push(l):t=[l])}}else if(i===Mo.current){if(o=i.alternate,o===null)throw Error(M(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(an):t=[an])}i=i.return}t!==null&&Xl(a,t,r,e),a.flags|=262144}function Wo(t){for(t=t.firstContext;t!==null;){if(!oa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function te(t){de=t,Ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function zt(t){return Vh(de,t)}function Rn(t,a){return de===null&&te(t),Vh(t,a)}function Vh(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},Ia===null){if(t===null)throw Error(M(308));Ia=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else Ia=Ia.next=a;return r}var p5=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},f5=Mt.unstable_scheduleCallback,v5=Mt.unstable_NormalPriority,kt={$$typeof:Fa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function E1(){return{controller:new p5,data:new Map,refCount:0}}function un(t){t.refCount--,t.refCount===0&&f5(v5,function(){t.controller.abort()})}var _i=null,Ql=0,Qe=0,De=null;function k5(t,a){if(_i===null){var r=_i=[];Ql=0,Qe=dd(),De={status:"pending",value:void 0,then:function(e){r.push(e)}}}return Ql++,a.then(qc,qc),a}function qc(){if(--Ql===0&&_i!==null){De!==null&&(De.status="fulfilled");var t=_i;_i=null,Qe=0,De=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function x5(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var Gc=V.S;V.S=function(t,a){Qu=ra(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&k5(t,a),Gc!==null&&Gc(t,a)};var Fr=_a(null);function O1(){var t=Fr.current;return t!==null?t:I.pooledCache}function ho(t,a){a===null?P(Fr,Fr.current):P(Fr,a.pool)}function zh(){var t=O1();return t===null?null:{parent:kt._currentValue,pool:t}}var ei=Error(M(460)),D1=Error(M(474)),a2=Error(M(542)),Ho={then:function(){}};function Yc(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _h(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then($a,$a),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Qc(t),t;default:if(typeof a.status=="string")a.then($a,$a);else{if(t=I,t!==null&&100<t.shellSuspendCounter)throw Error(M(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,Qc(t),t}throw $r=a,ei}}function Qr(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?($r=r,ei):r}}var $r=null;function Xc(){if($r===null)throw Error(M(459));var t=$r;return $r=null,t}function Qc(t){if(t===ei||t===a2)throw Error(M(483))}var Ue=null,Fi=0;function Jn(t){var a=Fi;return Fi+=1,Ue===null&&(Ue=[]),_h(Ue,t,a)}function mi(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Fn(t,a){throw a.$$typeof===ip?Error(M(525)):(t=Object.prototype.toString.call(a),Error(M(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function Th(t){function a(g,u){if(t){var f=g.deletions;f===null?(g.deletions=[u],g.flags|=16):f.push(u)}}function r(g,u){if(!t)return null;for(;u!==null;)a(g,u),u=u.sibling;return null}function e(g){for(var u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function i(g,u){return g=Pa(g,u),g.index=0,g.sibling=null,g}function n(g,u,f){return g.index=f,t?(f=g.alternate,f!==null?(f=f.index,f<u?(g.flags|=67108866,u):f):(g.flags|=67108866,u)):(g.flags|=1048576,u)}function o(g){return t&&g.alternate===null&&(g.flags|=67108866),g}function l(g,u,f,L){return u===null||u.tag!==6?(u=el(f,g.mode,L),u.return=g,u):(u=i(u,f),u.return=g,u)}function h(g,u,f,L){var j=f.type;return j===Ce?v(g,u,f.props.children,L,f.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===gr&&Qr(j)===u.type)?(u=i(u,f.props),mi(u,f),u.return=g,u):(u=co(f.type,f.key,f.props,null,g.mode,L),mi(u,f),u.return=g,u)}function s(g,u,f,L){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=il(f,g.mode,L),u.return=g,u):(u=i(u,f.children||[]),u.return=g,u)}function v(g,u,f,L,j){return u===null||u.tag!==7?(u=Jr(f,g.mode,L,j),u.return=g,u):(u=i(u,f),u.return=g,u)}function x(g,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=el(""+u,g.mode,f),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Un:return f=co(u.type,u.key,u.props,null,g.mode,f),mi(f,u),f.return=g,f;case bi:return u=il(u,g.mode,f),u.return=g,u;case gr:return u=Qr(u),x(g,u,f)}if(ji(u)||Li(u))return u=Jr(u,g.mode,f,null),u.return=g,u;if(typeof u.then=="function")return x(g,Jn(u),f);if(u.$$typeof===Fa)return x(g,Rn(g,u),f);Fn(g,u)}return null}function p(g,u,f,L){var j=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return j!==null?null:l(g,u,""+f,L);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Un:return f.key===j?h(g,u,f,L):null;case bi:return f.key===j?s(g,u,f,L):null;case gr:return f=Qr(f),p(g,u,f,L)}if(ji(f)||Li(f))return j!==null?null:v(g,u,f,L,null);if(typeof f.then=="function")return p(g,u,Jn(f),L);if(f.$$typeof===Fa)return p(g,u,Rn(g,f),L);Fn(g,f)}return null}function k(g,u,f,L,j){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return g=g.get(f)||null,l(u,g,""+L,j);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Un:return g=g.get(L.key===null?f:L.key)||null,h(u,g,L,j);case bi:return g=g.get(L.key===null?f:L.key)||null,s(u,g,L,j);case gr:return L=Qr(L),k(g,u,f,L,j)}if(ji(L)||Li(L))return g=g.get(f)||null,v(u,g,L,j,null);if(typeof L.then=="function")return k(g,u,f,Jn(L),j);if(L.$$typeof===Fa)return k(g,u,f,Rn(u,L),j);Fn(u,L)}return null}function y(g,u,f,L){for(var j=null,z=null,b=u,A=u=0,O=null;b!==null&&A<f.length;A++){b.index>A?(O=b,b=null):O=b.sibling;var S=p(g,b,f[A],L);if(S===null){b===null&&(b=O);break}t&&b&&S.alternate===null&&a(g,b),u=n(S,u,A),z===null?j=S:z.sibling=S,z=S,b=O}if(A===f.length)return r(g,b),Y&&Ra(g,A),j;if(b===null){for(;A<f.length;A++)b=x(g,f[A],L),b!==null&&(u=n(b,u,A),z===null?j=b:z.sibling=b,z=b);return Y&&Ra(g,A),j}for(b=e(b);A<f.length;A++)O=k(b,g,A,f[A],L),O!==null&&(t&&O.alternate!==null&&b.delete(O.key===null?A:O.key),u=n(O,u,A),z===null?j=O:z.sibling=O,z=O);return t&&b.forEach(function(Ft){return a(g,Ft)}),Y&&Ra(g,A),j}function C(g,u,f,L){if(f==null)throw Error(M(151));for(var j=null,z=null,b=u,A=u=0,O=null,S=f.next();b!==null&&!S.done;A++,S=f.next()){b.index>A?(O=b,b=null):O=b.sibling;var Ft=p(g,b,S.value,L);if(Ft===null){b===null&&(b=O);break}t&&b&&Ft.alternate===null&&a(g,b),u=n(Ft,u,A),z===null?j=Ft:z.sibling=Ft,z=Ft,b=O}if(S.done)return r(g,b),Y&&Ra(g,A),j;if(b===null){for(;!S.done;A++,S=f.next())S=x(g,S.value,L),S!==null&&(u=n(S,u,A),z===null?j=S:z.sibling=S,z=S);return Y&&Ra(g,A),j}for(b=e(b);!S.done;A++,S=f.next())S=k(b,g,A,S.value,L),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?A:S.key),u=n(S,u,A),z===null?j=S:z.sibling=S,z=S);return t&&b.forEach(function(Ea){return a(g,Ea)}),Y&&Ra(g,A),j}function E(g,u,f,L){if(typeof f=="object"&&f!==null&&f.type===Ce&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Un:t:{for(var j=f.key;u!==null;){if(u.key===j){if(j=f.type,j===Ce){if(u.tag===7){r(g,u.sibling),L=i(u,f.props.children),L.return=g,g=L;break t}}else if(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===gr&&Qr(j)===u.type){r(g,u.sibling),L=i(u,f.props),mi(L,f),L.return=g,g=L;break t}r(g,u);break}else a(g,u);u=u.sibling}f.type===Ce?(L=Jr(f.props.children,g.mode,L,f.key),L.return=g,g=L):(L=co(f.type,f.key,f.props,null,g.mode,L),mi(L,f),L.return=g,g=L)}return o(g);case bi:t:{for(j=f.key;u!==null;){if(u.key===j)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){r(g,u.sibling),L=i(u,f.children||[]),L.return=g,g=L;break t}else{r(g,u);break}else a(g,u);u=u.sibling}L=il(f,g.mode,L),L.return=g,g=L}return o(g);case gr:return f=Qr(f),E(g,u,f,L)}if(ji(f))return y(g,u,f,L);if(Li(f)){if(j=Li(f),typeof j!="function")throw Error(M(150));return f=j.call(f),C(g,u,f,L)}if(typeof f.then=="function")return E(g,u,Jn(f),L);if(f.$$typeof===Fa)return E(g,u,Rn(g,f),L);Fn(g,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(r(g,u.sibling),L=i(u,f),L.return=g,g=L):(r(g,u),L=el(f,g.mode,L),L.return=g,g=L),o(g)):r(g,u)}return function(g,u,f,L){try{Fi=0;var j=E(g,u,f,L);return Ue=null,j}catch(b){if(b===ei||b===a2)throw b;var z=ta(29,b,null,g.mode);return z.lanes=L,z.return=g,z}}}var ae=Th(!0),Nh=Th(!1),pr=!1;function U1(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kl(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function br(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function jr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(X&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=bo(t),jh(t,null,r),a}return t2(t,e,a,r),bo(t)}function Ti(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,th(t,r)}}function ol(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var Rl=!1;function Ni(){if(Rl){var t=De;if(t!==null)throw t}}function Ei(t,a,r,e){Rl=!1;var i=t.updateQueue;pr=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var h=l,s=h.next;h.next=null,o===null?n=s:o.next=s,o=h;var v=t.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==o&&(l===null?v.firstBaseUpdate=s:l.next=s,v.lastBaseUpdate=h))}if(n!==null){var x=i.baseState;o=0,v=s=h=null,l=n;do{var p=l.lane&-536870913,k=p!==l.lane;if(k?(G&p)===p:(e&p)===p){p!==0&&p===Qe&&(Rl=!0),v!==null&&(v=v.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var y=t,C=l;p=a;var E=r;switch(C.tag){case 1:if(y=C.payload,typeof y=="function"){x=y.call(E,x,p);break t}x=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=C.payload,p=typeof y=="function"?y.call(E,x,p):y,p==null)break t;x=et({},x,p);break t;case 2:pr=!0}}p=l.callback,p!==null&&(t.flags|=64,k&&(t.flags|=8192),k=i.callbacks,k===null?i.callbacks=[p]:k.push(p))}else k={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(s=v=k,h=x):v=v.next=k,o|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;k=l,l=k.next,k.next=null,i.lastBaseUpdate=k,i.shared.pending=null}}while(!0);v===null&&(h=x),i.baseState=h,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n===null&&(i.shared.lanes=0),Nr|=o,t.lanes=o,t.memoizedState=x}}function Eh(t,a){if(typeof t!="function")throw Error(M(191,t));t.call(a)}function Oh(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Eh(r[t],a)}var Ke=_a(null),So=_a(0);function Kc(t,a){t=or,P(So,t),P(Ke,a),or=t|a.baseLanes}function Jl(){P(So,or),P(Ke,Ke.current)}function Z1(){or=So.current,Wt(Ke),Wt(So)}var la=_a(null),xa=null;function vr(t){var a=t.alternate;P(ut,ut.current&1),P(la,t),xa===null&&(a===null||Ke.current!==null||a.memoizedState!==null)&&(xa=t)}function Fl(t){P(ut,ut.current),P(la,t),xa===null&&(xa=t)}function Dh(t){t.tag===22?(P(ut,ut.current),P(la,t),xa===null&&(xa=t)):kr(t)}function kr(){P(ut,ut.current),P(la,la.current)}function Pt(t){Wt(la),xa===t&&(xa=null),Wt(ut)}var ut=_a(0);function Ao(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||f1(r)||v1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var er=0,N=null,$=null,ft=null,Vo=!1,Ze=!1,re=!1,zo=0,$i=0,qe=null,L5=0;function ct(){throw Error(M(321))}function q1(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!oa(t[r],a[r]))return!1;return!0}function G1(t,a,r,e,i,n){return er=n,N=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,V.H=t===null||t.memoizedState===null?vu:td,re=!1,n=r(e,i),re=!1,Ze&&(n=Zh(a,r,e,i)),Uh(t),n}function Uh(t){V.H=Ii;var a=$!==null&&$.next!==null;if(er=0,ft=$=N=null,Vo=!1,$i=0,qe=null,a)throw Error(M(300));t===null||xt||(t=t.dependencies,t!==null&&Wo(t)&&(xt=!0))}function Zh(t,a,r,e){N=t;var i=0;do{if(Ze&&(qe=null),$i=0,Ze=!1,25<=i)throw Error(M(301));if(i+=1,ft=$=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}V.H=ku,n=a(r,e)}while(Ze);return n}function M5(){var t=V.H,a=t.useState()[0];return a=typeof a.then=="function"?sn(a):a,t=t.useState()[0],($!==null?$.memoizedState:null)!==t&&(N.flags|=1024),a}function Y1(){var t=zo!==0;return zo=0,t}function X1(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function Q1(t){if(Vo){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Vo=!1}er=0,ft=$=N=null,Ze=!1,$i=zo=0,qe=null}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?N.memoizedState=ft=t:ft=ft.next=t,ft}function st(){if($===null){var t=N.alternate;t=t!==null?t.memoizedState:null}else t=$.next;var a=ft===null?N.memoizedState:ft.next;if(a!==null)ft=a,$=t;else{if(t===null)throw N.alternate===null?Error(M(467)):Error(M(310));$=t,t={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},ft===null?N.memoizedState=ft=t:ft=ft.next=t}return ft}function r2(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sn(t){var a=$i;return $i+=1,qe===null&&(qe=[]),t=_h(qe,t,a),a=N,(ft===null?a.memoizedState:ft.next)===null&&(a=a.alternate,V.H=a===null||a.memoizedState===null?vu:td),t}function e2(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return sn(t);if(t.$$typeof===Fa)return zt(t)}throw Error(M(438,String(t)))}function K1(t){var a=null,r=N.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=N.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=r2(),N.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=np;return a.index++,r}function ir(t,a){return typeof a=="function"?a(t):a}function uo(t){var a=st();return R1(a,$,t)}function R1(t,a,r){var e=t.queue;if(e===null)throw Error(M(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var l=o=null,h=null,s=a,v=!1;do{var x=s.lane&-536870913;if(x!==s.lane?(G&x)===x:(er&x)===x){var p=s.revertLane;if(p===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),x===Qe&&(v=!0);else if((er&p)===p){s=s.next,p===Qe&&(v=!0);continue}else x={lane:0,revertLane:s.revertLane,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},h===null?(l=h=x,o=n):h=h.next=x,N.lanes|=p,Nr|=p;x=s.action,re&&r(n,x),n=s.hasEagerState?s.eagerState:r(n,x)}else p={lane:x,revertLane:s.revertLane,gesture:s.gesture,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},h===null?(l=h=p,o=n):h=h.next=p,N.lanes|=x,Nr|=x;s=s.next}while(s!==null&&s!==a);if(h===null?o=n:h.next=l,!oa(n,t.memoizedState)&&(xt=!0,v&&(r=De,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=h,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function ll(t){var a=st(),r=a.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);oa(n,a.memoizedState)||(xt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function qh(t,a,r){var e=N,i=st(),n=Y;if(n){if(r===void 0)throw Error(M(407));r=r()}else r=a();var o=!oa(($||i).memoizedState,r);if(o&&(i.memoizedState=r,xt=!0),i=i.queue,J1(Xh.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||ft!==null&&ft.memoizedState.tag&1){if(e.flags|=2048,Re(9,{destroy:void 0},Yh.bind(null,e,i,r,a),null),I===null)throw Error(M(349));n||(er&127)!==0||Gh(e,a,r)}return r}function Gh(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=N.updateQueue,a===null?(a=r2(),N.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function Yh(t,a,r,e){a.value=r,a.getSnapshot=e,Qh(a)&&Kh(t)}function Xh(t,a,r){return r(function(){Qh(a)&&Kh(t)})}function Qh(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!oa(t,r)}catch{return!0}}function Kh(t){var a=le(t,2);a!==null&&Kt(a,t,2)}function $l(t){var a=Zt();if(typeof t=="function"){var r=t;if(t=r(),re){Lr(!0);try{r()}finally{Lr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:t},a}function Rh(t,a,r,e){return t.baseState=r,R1(t,$,typeof e=="function"?e:ir)}function m5(t,a,r,e,i){if(n2(t))throw Error(M(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};V.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,Jh(a,n)):(n.next=r.next,a.pending=r.next=n)}}function Jh(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=V.T,o={};V.T=o;try{var l=r(i,e),h=V.S;h!==null&&h(o,l),Rc(t,a,l)}catch(s){Il(t,a,s)}finally{n!==null&&o.types!==null&&(n.types=o.types),V.T=n}}else try{n=r(i,e),Rc(t,a,n)}catch(s){Il(t,a,s)}}function Rc(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){Jc(t,a,e)},function(e){return Il(t,a,e)}):Jc(t,a,r)}function Jc(t,a,r){a.status="fulfilled",a.value=r,Fh(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,Jh(t,r)))}function Il(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,Fh(a),a=a.next;while(a!==e)}t.action=null}function Fh(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function $h(t,a){return a}function Fc(t,a){if(Y){var r=I.formState;if(r!==null){t:{var e=N;if(Y){if(rt){a:{for(var i=rt,n=ka;i.nodeType!==8;){if(!n){i=null;break a}if(i=La(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){rt=La(i.nextSibling),e=i.data==="F!";break t}}_r(e)}e=!1}e&&(a=r[0])}}return r=Zt(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$h,lastRenderedState:a},r.queue=e,r=gu.bind(null,N,e),e.dispatch=r,e=$l(!1),n=P1.bind(null,N,!1,e.queue),e=Zt(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=m5.bind(null,N,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function $c(t){var a=st();return Ih(a,$,t)}function Ih(t,a,r){if(a=R1(t,a,$h)[0],t=uo(ir)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=sn(a)}catch(o){throw o===ei?a2:o}else e=a;a=st();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(N.flags|=2048,Re(9,{destroy:void 0},y5.bind(null,i,r),null)),[e,n,t]}function y5(t,a){t.action=a}function Ic(t){var a=st(),r=$;if(r!==null)return Ih(a,r,t);st(),a=a.memoizedState,r=st();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function Re(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=N.updateQueue,a===null&&(a=r2(),N.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function Ph(){return st().memoizedState}function so(t,a,r,e){var i=Zt();N.flags|=t,i.memoizedState=Re(1|a,{destroy:void 0},r,e===void 0?null:e)}function i2(t,a,r,e){var i=st();e=e===void 0?null:e;var n=i.memoizedState.inst;$!==null&&e!==null&&q1(e,$.memoizedState.deps)?i.memoizedState=Re(a,n,r,e):(N.flags|=t,i.memoizedState=Re(1|a,n,r,e))}function Pc(t,a){so(8390656,8,t,a)}function J1(t,a){i2(2048,8,t,a)}function w5(t){N.flags|=4;var a=N.updateQueue;if(a===null)a=r2(),N.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function tu(t){var a=st().memoizedState;return w5({ref:a,nextImpl:t}),function(){if((X&2)!==0)throw Error(M(440));return a.impl.apply(void 0,arguments)}}function au(t,a){return i2(4,2,t,a)}function ru(t,a){return i2(4,4,t,a)}function eu(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function iu(t,a,r){r=r!=null?r.concat([t]):null,i2(4,4,eu.bind(null,a,t),r)}function F1(){}function nu(t,a){var r=st();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&q1(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function ou(t,a){var r=st();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&q1(a,e[1]))return e[0];if(e=t(),re){Lr(!0);try{t()}finally{Lr(!1)}}return r.memoizedState=[e,a],e}function $1(t,a,r){return r===void 0||(er&1073741824)!==0&&(G&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=Ru(),N.lanes|=t,Nr|=t,r)}function lu(t,a,r,e){return oa(r,a)?r:Ke.current!==null?(t=$1(t,r,e),oa(t,a)||(xt=!0),t):(er&42)===0||(er&1073741824)!==0&&(G&261930)===0?(xt=!0,t.memoizedState=r):(t=Ru(),N.lanes|=t,Nr|=t,a)}function du(t,a,r,e,i){var n=Q.p;Q.p=n!==0&&8>n?n:8;var o=V.T,l={};V.T=l,P1(t,!1,a,r);try{var h=i(),s=V.S;if(s!==null&&s(l,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var v=x5(h,e);Oi(t,a,v,na(t))}else Oi(t,a,e,na(t))}catch(x){Oi(t,a,{then:function(){},status:"rejected",reason:x},na())}finally{Q.p=n,o!==null&&l.types!==null&&(o.types=l.types),V.T=o}}function C5(){}function Pl(t,a,r,e){if(t.tag!==5)throw Error(M(476));var i=cu(t).queue;du(t,i,a,Rr,r===null?C5:function(){return hu(t),r(e)})}function cu(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:Rr,baseState:Rr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:Rr},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function hu(t){var a=cu(t);a.next===null&&(a=t.alternate.memoizedState),Oi(t,a.next.queue,{},na())}function I1(){return zt(an)}function uu(){return st().memoizedState}function su(){return st().memoizedState}function B5(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=na();t=br(r);var e=jr(a,t,r);e!==null&&(Kt(e,a,r),Ti(e,a,r)),a={cache:E1()},t.payload=a;return}a=a.return}}function b5(t,a,r){var e=na();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},n2(t)?pu(a,r):(r=z1(t,a,r,e),r!==null&&(Kt(r,t,e),fu(r,a,e)))}function gu(t,a,r){var e=na();Oi(t,a,r,e)}function Oi(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(n2(t))pu(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,l=n(o,r);if(i.hasEagerState=!0,i.eagerState=l,oa(l,o))return t2(t,a,i,0),I===null&&Po(),!1}catch{}if(r=z1(t,a,i,e),r!==null)return Kt(r,t,e),fu(r,a,e),!0}return!1}function P1(t,a,r,e){if(e={lane:2,revertLane:dd(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},n2(t)){if(a)throw Error(M(479))}else a=z1(t,r,e,2),a!==null&&Kt(a,t,2)}function n2(t){var a=t.alternate;return t===N||a!==null&&a===N}function pu(t,a){Ze=Vo=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function fu(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,th(t,r)}}var Ii={readContext:zt,use:e2,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct};Ii.useEffectEvent=ct;var vu={readContext:zt,use:e2,useCallback:function(t,a){return Zt().memoizedState=[t,a===void 0?null:a],t},useContext:zt,useEffect:Pc,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,so(4194308,4,eu.bind(null,a,t),r)},useLayoutEffect:function(t,a){return so(4194308,4,t,a)},useInsertionEffect:function(t,a){so(4,2,t,a)},useMemo:function(t,a){var r=Zt();a=a===void 0?null:a;var e=t();if(re){Lr(!0);try{t()}finally{Lr(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=Zt();if(r!==void 0){var i=r(a);if(re){Lr(!0);try{r(a)}finally{Lr(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=b5.bind(null,N,t),[e.memoizedState,t]},useRef:function(t){var a=Zt();return t={current:t},a.memoizedState=t},useState:function(t){t=$l(t);var a=t.queue,r=gu.bind(null,N,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:F1,useDeferredValue:function(t,a){var r=Zt();return $1(r,t,a)},useTransition:function(){var t=$l(!1);return t=du.bind(null,N,t.queue,!0,!1),Zt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=N,i=Zt();if(Y){if(r===void 0)throw Error(M(407));r=r()}else{if(r=a(),I===null)throw Error(M(349));(G&127)!==0||Gh(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,Pc(Xh.bind(null,e,n,t),[t]),e.flags|=2048,Re(9,{destroy:void 0},Yh.bind(null,e,n,r,a),null),r},useId:function(){var t=Zt(),a=I.identifierPrefix;if(Y){var r=Aa,e=Sa;r=(e&~(1<<32-ia(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=zo++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=L5++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:I1,useFormState:Fc,useActionState:Fc,useOptimistic:function(t){var a=Zt();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=P1.bind(null,N,!0,r),r.dispatch=a,[t,a]},useMemoCache:K1,useCacheRefresh:function(){return Zt().memoizedState=B5.bind(null,N)},useEffectEvent:function(t){var a=Zt(),r={impl:t};return a.memoizedState=r,function(){if((X&2)!==0)throw Error(M(440));return r.impl.apply(void 0,arguments)}}},td={readContext:zt,use:e2,useCallback:nu,useContext:zt,useEffect:J1,useImperativeHandle:iu,useInsertionEffect:au,useLayoutEffect:ru,useMemo:ou,useReducer:uo,useRef:Ph,useState:function(){return uo(ir)},useDebugValue:F1,useDeferredValue:function(t,a){var r=st();return lu(r,$.memoizedState,t,a)},useTransition:function(){var t=uo(ir)[0],a=st().memoizedState;return[typeof t=="boolean"?t:sn(t),a]},useSyncExternalStore:qh,useId:uu,useHostTransitionStatus:I1,useFormState:$c,useActionState:$c,useOptimistic:function(t,a){var r=st();return Rh(r,$,t,a)},useMemoCache:K1,useCacheRefresh:su};td.useEffectEvent=tu;var ku={readContext:zt,use:e2,useCallback:nu,useContext:zt,useEffect:J1,useImperativeHandle:iu,useInsertionEffect:au,useLayoutEffect:ru,useMemo:ou,useReducer:ll,useRef:Ph,useState:function(){return ll(ir)},useDebugValue:F1,useDeferredValue:function(t,a){var r=st();return $===null?$1(r,t,a):lu(r,$.memoizedState,t,a)},useTransition:function(){var t=ll(ir)[0],a=st().memoizedState;return[typeof t=="boolean"?t:sn(t),a]},useSyncExternalStore:qh,useId:uu,useHostTransitionStatus:I1,useFormState:Ic,useActionState:Ic,useOptimistic:function(t,a){var r=st();return $!==null?Rh(r,$,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:K1,useCacheRefresh:su};ku.useEffectEvent=tu;function dl(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:et({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var t1={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=na(),i=br(e);i.payload=a,r!=null&&(i.callback=r),a=jr(t,i,e),a!==null&&(Kt(a,t,e),Ti(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=na(),i=br(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=jr(t,i,e),a!==null&&(Kt(a,t,e),Ti(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=na(),e=br(r);e.tag=2,a!=null&&(e.callback=a),a=jr(t,e,r),a!==null&&(Kt(a,t,r),Ti(a,t,r))}};function t0(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!Ki(r,e)||!Ki(i,n):!0}function a0(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&t1.enqueueReplaceState(a,a.state,null)}function ee(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=et({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function xu(t){Bo(t)}function Lu(t){console.error(t)}function Mu(t){Bo(t)}function _o(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function r0(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function a1(t,a,r){return r=br(r),r.tag=3,r.payload={element:null},r.callback=function(){_o(t,a)},r}function mu(t){return t=br(t),t.tag=3,t}function yu(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){r0(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){r0(a,r,e),typeof i!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})})}function j5(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&ri(a,r,i,!0),r=la.current,r!==null){switch(r.tag){case 31:case 13:return xa===null?Do():r.alternate===null&&ht===0&&(ht=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===Ho?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),Ll(t,e,i)),!1;case 22:return r.flags|=65536,e===Ho?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),Ll(t,e,i)),!1}throw Error(M(435,r.tag))}return Ll(t,e,i),Do(),!1}if(Y)return a=la.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==ql&&(t=Error(M(422),{cause:e}),Ji(va(t,r)))):(e!==ql&&(a=Error(M(423),{cause:e}),Ji(va(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=va(e,r),i=a1(t.stateNode,e,i),ol(t,i),ht!==4&&(ht=2)),!1;var n=Error(M(520),{cause:e});if(n=va(n,r),Zi===null?Zi=[n]:Zi.push(n),ht!==4&&(ht=2),a===null)return!0;e=va(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=a1(r.stateNode,e,t),ol(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Wr===null||!Wr.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=mu(i),yu(i,t,r,e),ol(r,i),!1}r=r.return}while(r!==null);return!1}var ad=Error(M(461)),xt=!1;function St(t,a,r,e){a.child=t===null?Nh(a,null,r,e):ae(a,t.child,r,e)}function e0(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var l in e)l!=="ref"&&(o[l]=e[l])}else o=e;return te(a),e=G1(t,a,r,o,n,i),l=Y1(),t!==null&&!xt?(X1(t,a,i),nr(t,a,i)):(Y&&l&&T1(a),a.flags|=1,St(t,a,e,i),a.child)}function i0(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!_1(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,wu(t,a,n,e,i)):(t=co(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!rd(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:Ki,r(o,e)&&t.ref===a.ref)return nr(t,a,i)}return a.flags|=1,t=Pa(n,e),t.ref=a.ref,t.return=a,a.child=t}function wu(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(Ki(n,e)&&t.ref===a.ref)if(xt=!1,a.pendingProps=e=n,rd(t,i))(t.flags&131072)!==0&&(xt=!0);else return a.lanes=t.lanes,nr(t,a,i)}return r1(t,a,r,e,i)}function Cu(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return n0(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&ho(a,n!==null?n.cachePool:null),n!==null?Kc(a,n):Jl(),Dh(a);else return e=a.lanes=536870912,n0(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(ho(a,n.cachePool),Kc(a,n),kr(a),a.memoizedState=null):(t!==null&&ho(a,null),Jl(),kr(a));return St(t,a,i,r),a.child}function Hi(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function n0(t,a,r,e,i){var n=O1();return n=n===null?null:{parent:kt._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&ho(a,null),Jl(),Dh(a),t!==null&&ri(t,a,e,!0),a.childLanes=i,null}function go(t,a){return a=To({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function o0(t,a,r){return ae(a,t.child,null,r),t=go(a,a.pendingProps),t.flags|=2,Pt(a),a.memoizedState=null,t}function W5(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(Y){if(e.mode==="hidden")return t=go(a,e),a.lanes=536870912,Hi(null,t);if(Fl(a),(t=rt)?(t=vs(t,ka),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:zr!==null?{id:Sa,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},r=Hh(t),r.return=a,a.child=r,Vt=a,rt=null)):t=null,t===null)throw _r(a);return a.lanes=536870912,null}return go(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(Fl(a),i)if(a.flags&256)a.flags&=-257,a=o0(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(M(558));else if(xt||ri(t,a,r,!1),i=(r&t.childLanes)!==0,xt||i){if(e=I,e!==null&&(o=ah(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,le(t,o),Kt(e,t,o),ad;Do(),a=o0(t,a,r)}else t=n.treeContext,rt=La(o.nextSibling),Vt=a,Y=!0,Br=null,ka=!1,t!==null&&Ah(a,t),a=go(a,e),a.flags|=4096;return a}return t=Pa(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function po(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(M(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function r1(t,a,r,e,i){return te(a),r=G1(t,a,r,e,void 0,i),e=Y1(),t!==null&&!xt?(X1(t,a,i),nr(t,a,i)):(Y&&e&&T1(a),a.flags|=1,St(t,a,r,i),a.child)}function l0(t,a,r,e,i,n){return te(a),a.updateQueue=null,r=Zh(a,e,r,i),Uh(t),e=Y1(),t!==null&&!xt?(X1(t,a,n),nr(t,a,n)):(Y&&e&&T1(a),a.flags|=1,St(t,a,r,n),a.child)}function d0(t,a,r,e,i){if(te(a),a.stateNode===null){var n=Ve,o=r.contextType;typeof o=="object"&&o!==null&&(n=zt(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=t1,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},U1(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?zt(o):Ve,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(dl(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&t1.enqueueReplaceState(n,n.state,null),Ei(a,e,n,i),Ni(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var l=a.memoizedProps,h=ee(r,l);n.props=h;var s=n.context,v=r.contextType;o=Ve,typeof v=="object"&&v!==null&&(o=zt(v));var x=r.getDerivedStateFromProps;v=typeof x=="function"||typeof n.getSnapshotBeforeUpdate=="function",l=a.pendingProps!==l,v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(l||s!==o)&&a0(a,n,e,o),pr=!1;var p=a.memoizedState;n.state=p,Ei(a,e,n,i),Ni(),s=a.memoizedState,l||p!==s||pr?(typeof x=="function"&&(dl(a,r,x,e),s=a.memoizedState),(h=pr||t0(a,r,h,e,p,s,o))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=s),n.props=e,n.state=s,n.context=o,e=h):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,Kl(t,a),o=a.memoizedProps,v=ee(r,o),n.props=v,x=a.pendingProps,p=n.context,s=r.contextType,h=Ve,typeof s=="object"&&s!==null&&(h=zt(s)),l=r.getDerivedStateFromProps,(s=typeof l=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==x||p!==h)&&a0(a,n,e,h),pr=!1,p=a.memoizedState,n.state=p,Ei(a,e,n,i),Ni();var k=a.memoizedState;o!==x||p!==k||pr||t!==null&&t.dependencies!==null&&Wo(t.dependencies)?(typeof l=="function"&&(dl(a,r,l,e),k=a.memoizedState),(v=pr||t0(a,r,v,e,p,k,h)||t!==null&&t.dependencies!==null&&Wo(t.dependencies))?(s||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,k,h),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,k,h)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=k),n.props=e,n.state=k,n.context=h,e=v):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,po(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=ae(a,t.child,null,i),a.child=ae(a,null,r,i)):St(t,a,r,i),a.memoizedState=n.state,t=a.child):t=nr(t,a,i),t}function c0(t,a,r,e){return Pr(),a.flags|=256,St(t,a,r,e),a.child}var cl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hl(t){return{baseLanes:t,cachePool:zh()}}function ul(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=aa),t}function Bu(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(ut.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(Y){if(i?vr(a):kr(a),(t=rt)?(t=vs(t,ka),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:zr!==null?{id:Sa,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},r=Hh(t),r.return=a,a.child=r,Vt=a,rt=null)):t=null,t===null)throw _r(a);return v1(t)?a.lanes=32:a.lanes=536870912,null}var l=e.children;return e=e.fallback,i?(kr(a),i=a.mode,l=To({mode:"hidden",children:l},i),e=Jr(e,i,r,null),l.return=a,e.return=a,l.sibling=e,a.child=l,e=a.child,e.memoizedState=hl(r),e.childLanes=ul(t,o,r),a.memoizedState=cl,Hi(null,e)):(vr(a),e1(a,l))}var h=t.memoizedState;if(h!==null&&(l=h.dehydrated,l!==null)){if(n)a.flags&256?(vr(a),a.flags&=-257,a=sl(t,a,r)):a.memoizedState!==null?(kr(a),a.child=t.child,a.flags|=128,a=null):(kr(a),l=e.fallback,i=a.mode,e=To({mode:"visible",children:e.children},i),l=Jr(l,i,r,null),l.flags|=2,e.return=a,l.return=a,e.sibling=l,a.child=e,ae(a,t.child,null,r),e=a.child,e.memoizedState=hl(r),e.childLanes=ul(t,o,r),a.memoizedState=cl,a=Hi(null,e));else if(vr(a),v1(l)){if(o=l.nextSibling&&l.nextSibling.dataset,o)var s=o.dgst;o=s,e=Error(M(419)),e.stack="",e.digest=o,Ji({value:e,source:null,stack:null}),a=sl(t,a,r)}else if(xt||ri(t,a,r,!1),o=(r&t.childLanes)!==0,xt||o){if(o=I,o!==null&&(e=ah(o,r),e!==0&&e!==h.retryLane))throw h.retryLane=e,le(t,e),Kt(o,t,e),ad;f1(l)||Do(),a=sl(t,a,r)}else f1(l)?(a.flags|=192,a.child=t.child,a=null):(t=h.treeContext,rt=La(l.nextSibling),Vt=a,Y=!0,Br=null,ka=!1,t!==null&&Ah(a,t),a=e1(a,e.children),a.flags|=4096);return a}return i?(kr(a),l=e.fallback,i=a.mode,h=t.child,s=h.sibling,e=Pa(h,{mode:"hidden",children:e.children}),e.subtreeFlags=h.subtreeFlags&65011712,s!==null?l=Pa(s,l):(l=Jr(l,i,r,null),l.flags|=2),l.return=a,e.return=a,e.sibling=l,a.child=e,Hi(null,e),e=a.child,l=t.child.memoizedState,l===null?l=hl(r):(i=l.cachePool,i!==null?(h=kt._currentValue,i=i.parent!==h?{parent:h,pool:h}:i):i=zh(),l={baseLanes:l.baseLanes|r,cachePool:i}),e.memoizedState=l,e.childLanes=ul(t,o,r),a.memoizedState=cl,Hi(t.child,e)):(vr(a),r=t.child,t=r.sibling,r=Pa(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function e1(t,a){return a=To({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function To(t,a){return t=ta(22,t,null,a),t.lanes=0,t}function sl(t,a,r){return ae(a,t.child,null,r),t=e1(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function h0(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),Yl(t.return,a,r)}function gl(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function bu(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=ut.current,l=(o&2)!==0;if(l?(o=o&1|2,a.flags|=128):o&=1,P(ut,o),St(t,a,e,r),e=Y?Ri:0,!l&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h0(t,r,a);else if(t.tag===19)h0(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&Ao(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),gl(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&Ao(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}gl(a,!0,r,null,n,e);break;case"together":gl(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function nr(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Nr|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(ri(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(M(153));if(a.child!==null){for(t=a.child,r=Pa(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=Pa(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function rd(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Wo(t)))}function H5(t,a,r){switch(a.tag){case 3:mo(a,a.stateNode.containerInfo),fr(a,kt,t.memoizedState.cache),Pr();break;case 27:case 5:Al(a);break;case 4:mo(a,a.stateNode.containerInfo);break;case 10:fr(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Fl(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(vr(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Bu(t,a,r):(vr(a),t=nr(t,a,r),t!==null?t.sibling:null);vr(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||(ri(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return bu(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),P(ut,ut.current),e)break;return null;case 22:return a.lanes=0,Cu(t,a,r,a.pendingProps);case 24:fr(a,kt,t.memoizedState.cache)}return nr(t,a,r)}function ju(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)xt=!0;else{if(!rd(t,r)&&(a.flags&128)===0)return xt=!1,H5(t,a,r);xt=(t.flags&131072)!==0}else xt=!1,Y&&(a.flags&1048576)!==0&&Sh(a,Ri,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=Qr(a.elementType),a.type=t,typeof t=="function")_1(t)?(e=ee(t,e),a.tag=1,a=d0(null,a,t,e,r)):(a.tag=0,a=r1(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===M1){a.tag=11,a=e0(null,a,t,e,r);break t}else if(i===m1){a.tag=14,a=i0(null,a,t,e,r);break t}}throw a=Hl(t)||t,Error(M(306,a,""))}}return a;case 0:return r1(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=ee(e,a.pendingProps),d0(t,a,e,i,r);case 3:t:{if(mo(a,a.stateNode.containerInfo),t===null)throw Error(M(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,Kl(t,a),Ei(a,e,null,r);var o=a.memoizedState;if(e=o.cache,fr(a,kt,e),e!==n.cache&&Xl(a,[kt],r,!0),Ni(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=c0(t,a,e,r);break t}else if(e!==i){i=va(Error(M(424)),a),Ji(i),a=c0(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,rt=La(t.firstChild),Vt=a,Y=!0,Br=null,ka=!0,r=Nh(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Pr(),e===i){a=nr(t,a,r);break t}St(t,a,e,r)}a=a.child}return a;case 26:return po(t,a),t===null?(r=V0(a.type,null,a.pendingProps,null))?a.memoizedState=r:Y||(r=a.type,t=a.pendingProps,e=Go(Cr.current).createElement(r),e[At]=a,e[Rt]=t,_t(e,r,t),jt(e),a.stateNode=e):a.memoizedState=V0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Al(a),t===null&&Y&&(e=a.stateNode=ks(a.type,a.pendingProps,Cr.current),Vt=a,ka=!0,i=rt,Or(a.type)?(k1=i,rt=La(e.firstChild)):rt=i),St(t,a,a.pendingProps.children,r),po(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Y&&((i=e=rt)&&(e=ef(e,a.type,a.pendingProps,ka),e!==null?(a.stateNode=e,Vt=a,rt=La(e.firstChild),ka=!1,i=!0):i=!1),i||_r(a)),Al(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,g1(i,n)?e=null:o!==null&&g1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=G1(t,a,M5,null,null,r),an._currentValue=i),po(t,a),St(t,a,e,r),a.child;case 6:return t===null&&Y&&((t=r=rt)&&(r=nf(r,a.pendingProps,ka),r!==null?(a.stateNode=r,Vt=a,rt=null,t=!0):t=!1),t||_r(a)),null;case 13:return Bu(t,a,r);case 4:return mo(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=ae(a,null,e,r):St(t,a,e,r),a.child;case 11:return e0(t,a,a.type,a.pendingProps,r);case 7:return St(t,a,a.pendingProps,r),a.child;case 8:return St(t,a,a.pendingProps.children,r),a.child;case 12:return St(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,fr(a,a.type,e.value),St(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,te(a),i=zt(i),e=e(i),a.flags|=1,St(t,a,e,r),a.child;case 14:return i0(t,a,a.type,a.pendingProps,r);case 15:return wu(t,a,a.type,a.pendingProps,r);case 19:return bu(t,a,r);case 31:return W5(t,a,r);case 22:return Cu(t,a,r,a.pendingProps);case 24:return te(a),e=zt(kt),t===null?(i=O1(),i===null&&(i=I,n=E1(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},U1(a),fr(a,kt,i)):((t.lanes&r)!==0&&(Kl(t,a),Ei(a,null,null,r),Ni()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),fr(a,kt,e)):(e=n.cache,fr(a,kt,e),e!==i.cache&&Xl(a,[kt],r,!0))),St(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(M(156,a.tag))}function Ya(t){t.flags|=4}function pl(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if($u())t.flags|=8192;else throw $r=Ho,D1}else t.flags&=-16777217}function u0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ms(a))if($u())t.flags|=8192;else throw $r=Ho,D1}function $n(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?I0():536870912,t.lanes|=a,Je|=a)}function yi(t,a){if(!Y)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function at(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function S5(t,a,r){var e=a.pendingProps;switch(N1(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(a),null;case 1:return at(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),tr(kt),Ge(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Me(a)?Ya(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,nl())),at(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(Ya(a),n!==null?(at(a),u0(a,n)):(at(a),pl(a,i,null,e,r))):n?n!==t.memoizedState?(Ya(a),at(a),u0(a,n)):(at(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&Ya(a),at(a),pl(a,i,t,e,r)),null;case 27:if(yo(a),r=Cr.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ya(a);else{if(!e){if(a.stateNode===null)throw Error(M(166));return at(a),null}t=za.current,Me(a)?Uc(a,t):(t=ks(i,e,r),a.stateNode=t,Ya(a))}return at(a),null;case 5:if(yo(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ya(a);else{if(!e){if(a.stateNode===null)throw Error(M(166));return at(a),null}if(n=za.current,Me(a))Uc(a,n);else{var o=Go(Cr.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[At]=a,n[Rt]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(_t(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ya(a)}}return at(a),pl(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&Ya(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(M(166));if(t=Cr.current,Me(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=Vt,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[At]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||gs(t.nodeValue,r)),t||_r(a,!0)}else t=Go(t).createTextNode(e),t[At]=a,a.stateNode=t}return at(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=Me(a),r!==null){if(t===null){if(!e)throw Error(M(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(557));t[At]=a}else Pr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;at(a),t=!1}else r=nl(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?(Pt(a),a):(Pt(a),null);if((a.flags&128)!==0)throw Error(M(558))}return at(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Me(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(M(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[At]=a}else Pr(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;at(a),i=!1}else i=nl(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(Pt(a),a):(Pt(a),null)}return Pt(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),$n(a,a.updateQueue),at(a),null);case 4:return Ge(),t===null&&cd(a.stateNode.containerInfo),at(a),null;case 10:return tr(a.type),at(a),null;case 19:if(Wt(ut),e=a.memoizedState,e===null)return at(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)yi(e,!1);else{if(ht!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=Ao(t),n!==null){for(a.flags|=128,yi(e,!1),t=n.updateQueue,a.updateQueue=t,$n(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)Wh(r,t),r=r.sibling;return P(ut,ut.current&1|2),Y&&Ra(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&ra()>Eo&&(a.flags|=128,i=!0,yi(e,!1),a.lanes=4194304)}else{if(!i)if(t=Ao(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,$n(a,t),yi(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!Y)return at(a),null}else 2*ra()-e.renderingStartTime>Eo&&r!==536870912&&(a.flags|=128,i=!0,yi(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=ra(),t.sibling=null,r=ut.current,P(ut,i?r&1|2:r&1),Y&&Ra(a,e.treeForkCount),t):(at(a),null);case 22:case 23:return Pt(a),Z1(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(at(a),a.subtreeFlags&6&&(a.flags|=8192)):at(a),r=a.updateQueue,r!==null&&$n(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&Wt(Fr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),tr(kt),at(a),null;case 25:return null;case 30:return null}throw Error(M(156,a.tag))}function A5(t,a){switch(N1(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return tr(kt),Ge(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return yo(a),null;case 31:if(a.memoizedState!==null){if(Pt(a),a.alternate===null)throw Error(M(340));Pr()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(Pt(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(M(340));Pr()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Wt(ut),null;case 4:return Ge(),null;case 10:return tr(a.type),null;case 22:case 23:return Pt(a),Z1(),t!==null&&Wt(Fr),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return tr(kt),null;case 25:return null;default:return null}}function Wu(t,a){switch(N1(a),a.tag){case 3:tr(kt),Ge();break;case 26:case 27:case 5:yo(a);break;case 4:Ge();break;case 31:a.memoizedState!==null&&Pt(a);break;case 13:Pt(a);break;case 19:Wt(ut);break;case 10:tr(a.type);break;case 22:case 23:Pt(a),Z1(),t!==null&&Wt(Fr);break;case 24:tr(kt)}}function gn(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(l){J(a,a.return,l)}}function Tr(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,l=o.destroy;if(l!==void 0){o.destroy=void 0,i=a;var h=r,s=l;try{s()}catch(v){J(i,h,v)}}}e=e.next}while(e!==n)}}catch(v){J(a,a.return,v)}}function Hu(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{Oh(a,r)}catch(e){J(t,t.return,e)}}}function Su(t,a,r){r.props=ee(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){J(t,a,e)}}function Di(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){J(t,a,i)}}function Va(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){J(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){J(t,a,i)}else r.current=null}function Au(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){J(t,t.return,i)}}function fl(t,a,r){try{var e=t.stateNode;$5(e,t.type,r,a),e[Rt]=a}catch(i){J(t,t.return,i)}}function Vu(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Or(t.type)||t.tag===4}function vl(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Vu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Or(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function i1(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=$a));else if(e!==4&&(e===27&&Or(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(i1(t,a,r),t=t.sibling;t!==null;)i1(t,a,r),t=t.sibling}function No(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&Or(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(No(t,a,r),t=t.sibling;t!==null;)No(t,a,r),t=t.sibling}function zu(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);_t(a,e,r),a[At]=t,a[Rt]=r}catch(n){J(t,t.return,n)}}var Ja=!1,vt=!1,kl=!1,s0=typeof WeakSet=="function"?WeakSet:Set,bt=null;function V5(t,a){if(t=t.containerInfo,u1=Ko,t=Mh(t),A1(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,l=-1,h=-1,s=0,v=0,x=t,p=null;a:for(;;){for(var k;x!==r||i!==0&&x.nodeType!==3||(l=o+i),x!==n||e!==0&&x.nodeType!==3||(h=o+e),x.nodeType===3&&(o+=x.nodeValue.length),(k=x.firstChild)!==null;)p=x,x=k;for(;;){if(x===t)break a;if(p===r&&++s===i&&(l=o),p===n&&++v===e&&(h=o),(k=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=k}r=l===-1||h===-1?null:{start:l,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(s1={focusedElem:t,selectionRange:r},Ko=!1,bt=a;bt!==null;)if(a=bt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,bt=t;else for(;bt!==null;){switch(a=bt,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var y=ee(r.type,i);t=e.getSnapshotBeforeUpdate(y,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(C){J(r,r.return,C)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)p1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":p1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(M(163))}if(t=a.sibling,t!==null){t.return=a.return,bt=t;break}bt=a.return}}function _u(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:Qa(t,r),e&4&&gn(5,r);break;case 1:if(Qa(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){J(r,r.return,o)}else{var i=ee(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){J(r,r.return,o)}}e&64&&Hu(r),e&512&&Di(r,r.return);break;case 3:if(Qa(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{Oh(t,a)}catch(o){J(r,r.return,o)}}break;case 27:a===null&&e&4&&zu(r);case 26:case 5:Qa(t,r),a===null&&e&4&&Au(r),e&512&&Di(r,r.return);break;case 12:Qa(t,r);break;case 31:Qa(t,r),e&4&&Eu(t,r);break;case 13:Qa(t,r),e&4&&Ou(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Z5.bind(null,r),of(t,r))));break;case 22:if(e=r.memoizedState!==null||Ja,!e){a=a!==null&&a.memoizedState!==null||vt,i=Ja;var n=vt;Ja=e,(vt=a)&&!n?Ka(t,r,(r.subtreeFlags&8772)!==0):Qa(t,r),Ja=i,vt=n}break;case 30:break;default:Qa(t,r)}}function Tu(t){var a=t.alternate;a!==null&&(t.alternate=null,Tu(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&B1(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ot=null,Xt=!1;function Xa(t,a,r){for(r=r.child;r!==null;)Nu(t,a,r),r=r.sibling}function Nu(t,a,r){if(ea&&typeof ea.onCommitFiberUnmount=="function")try{ea.onCommitFiberUnmount(on,r)}catch{}switch(r.tag){case 26:vt||Va(r,a),Xa(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:vt||Va(r,a);var e=ot,i=Xt;Or(r.type)&&(ot=r.stateNode,Xt=!1),Xa(t,a,r),Gi(r.stateNode),ot=e,Xt=i;break;case 5:vt||Va(r,a);case 6:if(e=ot,i=Xt,ot=null,Xa(t,a,r),ot=e,Xt=i,ot!==null)if(Xt)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(r.stateNode)}catch(n){J(r,a,n)}else try{ot.removeChild(r.stateNode)}catch(n){J(r,a,n)}break;case 18:ot!==null&&(Xt?(t=ot,j0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Pe(t)):j0(ot,r.stateNode));break;case 4:e=ot,i=Xt,ot=r.stateNode.containerInfo,Xt=!0,Xa(t,a,r),ot=e,Xt=i;break;case 0:case 11:case 14:case 15:Tr(2,r,a),vt||Tr(4,r,a),Xa(t,a,r);break;case 1:vt||(Va(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&Su(r,a,e)),Xa(t,a,r);break;case 21:Xa(t,a,r);break;case 22:vt=(e=vt)||r.memoizedState!==null,Xa(t,a,r),vt=e;break;default:Xa(t,a,r)}}function Eu(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Pe(t)}catch(r){J(a,a.return,r)}}}function Ou(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Pe(t)}catch(r){J(a,a.return,r)}}function z5(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new s0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new s0),a;default:throw Error(M(435,t.tag))}}function In(t,a){var r=z5(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=q5.bind(null,t,e);e.then(i,i)}})}function Gt(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Or(l.type)){ot=l.stateNode,Xt=!1;break t}break;case 5:ot=l.stateNode,Xt=!1;break t;case 3:case 4:ot=l.stateNode.containerInfo,Xt=!0;break t}l=l.return}if(ot===null)throw Error(M(160));Nu(n,o,i),ot=null,Xt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Du(a,t),a=a.sibling}var Ca=null;function Du(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gt(a,t),Yt(t),e&4&&(Tr(3,t,t.return),gn(3,t),Tr(5,t,t.return));break;case 1:Gt(a,t),Yt(t),e&512&&(vt||r===null||Va(r,r.return)),e&64&&Ja&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=Ca;if(Gt(a,t),Yt(t),e&512&&(vt||r===null||Va(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[cn]||n[At]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),_t(n,e,r),n[At]=t,jt(n),e=n;break t;case"link":var o=_0("link","href",i).get(e+(r.href||""));if(o){for(var l=0;l<o.length;l++)if(n=o[l],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(l,1);break a}}n=i.createElement(e),_t(n,e,r),i.head.appendChild(n);break;case"meta":if(o=_0("meta","content",i).get(e+(r.content||""))){for(l=0;l<o.length;l++)if(n=o[l],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(l,1);break a}}n=i.createElement(e),_t(n,e,r),i.head.appendChild(n);break;default:throw Error(M(468,e))}n[At]=t,jt(n),e=n}t.stateNode=e}else T0(i,t.type,t.stateNode);else t.stateNode=z0(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?T0(i,t.type,t.stateNode):z0(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&fl(t,t.memoizedProps,r.memoizedProps)}break;case 27:Gt(a,t),Yt(t),e&512&&(vt||r===null||Va(r,r.return)),r!==null&&e&4&&fl(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Gt(a,t),Yt(t),e&512&&(vt||r===null||Va(r,r.return)),t.flags&32){i=t.stateNode;try{Xe(i,"")}catch(y){J(t,t.return,y)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,fl(t,i,r!==null?r.memoizedProps:i)),e&1024&&(kl=!0);break;case 6:if(Gt(a,t),Yt(t),e&4){if(t.stateNode===null)throw Error(M(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(y){J(t,t.return,y)}}break;case 3:if(ko=null,i=Ca,Ca=Yo(a.containerInfo),Gt(a,t),Ca=i,Yt(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{Pe(a.containerInfo)}catch(y){J(t,t.return,y)}kl&&(kl=!1,Uu(t));break;case 4:e=Ca,Ca=Yo(t.stateNode.containerInfo),Gt(a,t),Yt(t),Ca=e;break;case 12:Gt(a,t),Yt(t);break;case 31:Gt(a,t),Yt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,In(t,e)));break;case 13:Gt(a,t),Yt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(o2=ra()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,In(t,e)));break;case 22:i=t.memoizedState!==null;var h=r!==null&&r.memoizedState!==null,s=Ja,v=vt;if(Ja=s||i,vt=v||h,Gt(a,t),vt=v,Ja=s,Yt(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||h||Ja||vt||Kr(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){h=r=a;try{if(n=h.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{l=h.stateNode;var x=h.memoizedProps.style,p=x!=null&&x.hasOwnProperty("display")?x.display:null;l.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){J(h,h.return,y)}}}else if(a.tag===6){if(r===null){h=a;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(y){J(h,h.return,y)}}}else if(a.tag===18){if(r===null){h=a;try{var k=h.stateNode;i?W0(k,!0):W0(h.stateNode,!1)}catch(y){J(h,h.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,In(t,r))));break;case 19:Gt(a,t),Yt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,In(t,e)));break;case 30:break;case 21:break;default:Gt(a,t),Yt(t)}}function Yt(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if(Vu(e)){r=e;break}e=e.return}if(r==null)throw Error(M(160));switch(r.tag){case 27:var i=r.stateNode,n=vl(t);No(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(Xe(o,""),r.flags&=-33);var l=vl(t);No(t,l,o);break;case 3:case 4:var h=r.stateNode.containerInfo,s=vl(t);i1(t,s,h);break;default:throw Error(M(161))}}catch(v){J(t,t.return,v)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Uu(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;Uu(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Qa(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)_u(t,a.alternate,a),a=a.sibling}function Kr(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Tr(4,a,a.return),Kr(a);break;case 1:Va(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Su(a,a.return,r),Kr(a);break;case 27:Gi(a.stateNode);case 26:case 5:Va(a,a.return),Kr(a);break;case 22:a.memoizedState===null&&Kr(a);break;case 30:Kr(a);break;default:Kr(a)}t=t.sibling}}function Ka(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:Ka(i,n,r),gn(4,n);break;case 1:if(Ka(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(s){J(e,e.return,s)}if(e=n,i=e.updateQueue,i!==null){var l=e.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)Eh(h[i],l)}catch(s){J(e,e.return,s)}}r&&o&64&&Hu(n),Di(n,n.return);break;case 27:zu(n);case 26:case 5:Ka(i,n,r),r&&e===null&&o&4&&Au(n),Di(n,n.return);break;case 12:Ka(i,n,r);break;case 31:Ka(i,n,r),r&&o&4&&Eu(i,n);break;case 13:Ka(i,n,r),r&&o&4&&Ou(i,n);break;case 22:n.memoizedState===null&&Ka(i,n,r),Di(n,n.return);break;case 30:break;default:Ka(i,n,r)}a=a.sibling}}function ed(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&un(r))}function id(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&un(t))}function wa(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Zu(t,a,r,e),a=a.sibling}function Zu(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:wa(t,a,r,e),i&2048&&gn(9,a);break;case 1:wa(t,a,r,e);break;case 3:wa(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&un(t)));break;case 12:if(i&2048){wa(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,l=n.onPostCommit;typeof l=="function"&&l(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){J(a,a.return,h)}}else wa(t,a,r,e);break;case 31:wa(t,a,r,e);break;case 13:wa(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?wa(t,a,r,e):Ui(t,a):n._visibility&2?wa(t,a,r,e):(n._visibility|=2,ye(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&ed(o,a);break;case 24:wa(t,a,r,e),i&2048&&id(a.alternate,a);break;default:wa(t,a,r,e)}}function ye(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,l=r,h=e,s=o.flags;switch(o.tag){case 0:case 11:case 15:ye(n,o,l,h,i),gn(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?ye(n,o,l,h,i):Ui(n,o):(v._visibility|=2,ye(n,o,l,h,i)),i&&s&2048&&ed(o.alternate,o);break;case 24:ye(n,o,l,h,i),i&&s&2048&&id(o.alternate,o);break;default:ye(n,o,l,h,i)}a=a.sibling}}function Ui(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:Ui(r,e),i&2048&&ed(e.alternate,e);break;case 24:Ui(r,e),i&2048&&id(e.alternate,e);break;default:Ui(r,e)}a=a.sibling}}var Si=8192;function me(t,a,r){if(t.subtreeFlags&Si)for(t=t.child;t!==null;)qu(t,a,r),t=t.sibling}function qu(t,a,r){switch(t.tag){case 26:me(t,a,r),t.flags&Si&&t.memoizedState!==null&&xf(r,Ca,t.memoizedState,t.memoizedProps);break;case 5:me(t,a,r);break;case 3:case 4:var e=Ca;Ca=Yo(t.stateNode.containerInfo),me(t,a,r),Ca=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Si,Si=16777216,me(t,a,r),Si=e):me(t,a,r));break;default:me(t,a,r)}}function Gu(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function wi(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];bt=e,Xu(e,t)}Gu(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yu(t),t=t.sibling}function Yu(t){switch(t.tag){case 0:case 11:case 15:wi(t),t.flags&2048&&Tr(9,t,t.return);break;case 3:wi(t);break;case 12:wi(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,fo(t)):wi(t);break;default:wi(t)}}function fo(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];bt=e,Xu(e,t)}Gu(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Tr(8,a,a.return),fo(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,fo(a));break;default:fo(a)}t=t.sibling}}function Xu(t,a){for(;bt!==null;){var r=bt;switch(r.tag){case 0:case 11:case 15:Tr(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:un(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,bt=e;else t:for(r=t;bt!==null;){e=bt;var i=e.sibling,n=e.return;if(Tu(e),e===r){bt=null;break t}if(i!==null){i.return=n,bt=i;break t}bt=n}}}var _5={getCacheForType:function(t){var a=zt(kt),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return zt(kt).controller.signal}},T5=typeof WeakMap=="function"?WeakMap:Map,X=0,I=null,Z=null,G=0,R=0,It=null,mr=!1,ii=!1,nd=!1,or=0,ht=0,Nr=0,Ir=0,od=0,aa=0,Je=0,Zi=null,Qt=null,n1=!1,o2=0,Qu=0,Eo=1/0,Oo=null,Wr=null,Lt=0,Hr=null,Fe=null,ar=0,o1=0,l1=null,Ku=null,qi=0,d1=null;function na(){return(X&2)!==0&&G!==0?G&-G:V.T!==null?dd():rh()}function Ru(){if(aa===0)if((G&536870912)===0||Y){var t=qn;qn<<=1,(qn&3932160)===0&&(qn=262144),aa=t}else aa=536870912;return t=la.current,t!==null&&(t.flags|=32),aa}function Kt(t,a,r){(t===I&&(R===2||R===9)||t.cancelPendingCommit!==null)&&($e(t,0),yr(t,G,aa,!1)),dn(t,r),((X&2)===0||t!==I)&&(t===I&&((X&2)===0&&(Ir|=r),ht===4&&yr(t,G,aa,!1)),Ta(t))}function Ju(t,a,r){if((X&6)!==0)throw Error(M(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||ln(t,a),i=e?O5(t,a):xl(t,a,!0),n=e;do{if(i===0){ii&&!e&&yr(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!N5(r)){i=xl(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var l=t;i=Zi;var h=l.current.memoizedState.isDehydrated;if(h&&($e(l,o).flags|=256),o=xl(l,o,!1),o!==2){if(nd&&!h){l.errorRecoveryDisabledLanes|=n,Ir|=n,i=4;break t}n=Qt,Qt=i,n!==null&&(Qt===null?Qt=n:Qt.push.apply(Qt,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){$e(t,0),yr(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(M(345));case 4:if((a&4194048)!==a)break;case 6:yr(e,a,aa,!mr);break t;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(M(329))}if((a&62914560)===a&&(i=o2+300-ra(),10<i)){if(yr(e,a,aa,!mr),Jo(e,0,!0)!==0)break t;ar=a,e.timeoutHandle=fs(g0.bind(null,e,r,Qt,Oo,n1,a,aa,Ir,Je,mr,n,"Throttled",-0,0),i);break t}g0(e,r,Qt,Oo,n1,a,aa,Ir,Je,mr,n,null,-0,0)}}break}while(!0);Ta(t)}function g0(t,a,r,e,i,n,o,l,h,s,v,x,p,k){if(t.timeoutHandle=-1,x=a.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$a},qu(a,n,x);var y=(n&62914560)===n?o2-ra():(n&4194048)===n?Qu-ra():0;if(y=Lf(x,y),y!==null){ar=n,t.cancelPendingCommit=y(f0.bind(null,t,a,n,r,e,i,o,l,h,v,x,null,p,k)),yr(t,n,o,!s);return}}f0(t,a,n,r,e,i,o,l,h)}function N5(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!oa(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function yr(t,a,r,e){a&=~od,a&=~Ir,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-ia(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&P0(t,r,a)}function l2(){return(X&6)===0?(pn(0,!1),!1):!0}function ld(){if(Z!==null){if(R===0)var t=Z.return;else t=Z,Ia=de=null,Q1(t),Ue=null,Fi=0,t=Z;for(;t!==null;)Wu(t.alternate,t),t=t.return;Z=null}}function $e(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,tf(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ar=0,ld(),I=t,Z=r=Pa(t.current,null),G=a,R=0,It=null,mr=!1,ii=ln(t,a),nd=!1,Je=aa=od=Ir=Nr=ht=0,Qt=Zi=null,n1=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-ia(e),n=1<<i;a|=t[i],e&=~n}return or=a,Po(),r}function Fu(t,a){N=null,V.H=Ii,a===ei||a===a2?(a=Xc(),R=3):a===D1?(a=Xc(),R=4):R=a===ad?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,It=a,Z===null&&(ht=1,_o(t,va(a,t.current)))}function $u(){var t=la.current;return t===null?!0:(G&4194048)===G?xa===null:(G&62914560)===G||(G&536870912)!==0?t===xa:!1}function Iu(){var t=V.H;return V.H=Ii,t===null?Ii:t}function Pu(){var t=V.A;return V.A=_5,t}function Do(){ht=4,mr||(G&4194048)!==G&&la.current!==null||(ii=!0),(Nr&134217727)===0&&(Ir&134217727)===0||I===null||yr(I,G,aa,!1)}function xl(t,a,r){var e=X;X|=2;var i=Iu(),n=Pu();(I!==t||G!==a)&&(Oo=null,$e(t,a)),a=!1;var o=ht;t:do try{if(R!==0&&Z!==null){var l=Z,h=It;switch(R){case 8:ld(),o=6;break t;case 3:case 2:case 9:case 6:la.current===null&&(a=!0);var s=R;if(R=0,It=null,Te(t,l,h,s),r&&ii){o=0;break t}break;default:s=R,R=0,It=null,Te(t,l,h,s)}}E5(),o=ht;break}catch(v){Fu(t,v)}while(!0);return a&&t.shellSuspendCounter++,Ia=de=null,X=e,V.H=i,V.A=n,Z===null&&(I=null,G=0,Po()),o}function E5(){for(;Z!==null;)ts(Z)}function O5(t,a){var r=X;X|=2;var e=Iu(),i=Pu();I!==t||G!==a?(Oo=null,Eo=ra()+500,$e(t,a)):ii=ln(t,a);t:do try{if(R!==0&&Z!==null){a=Z;var n=It;a:switch(R){case 1:R=0,It=null,Te(t,a,n,1);break;case 2:case 9:if(Yc(n)){R=0,It=null,p0(a);break}a=function(){R!==2&&R!==9||I!==t||(R=7),Ta(t)},n.then(a,a);break t;case 3:R=7;break t;case 4:R=5;break t;case 7:Yc(n)?(R=0,It=null,p0(a)):(R=0,It=null,Te(t,a,n,7));break;case 5:var o=null;switch(Z.tag){case 26:o=Z.memoizedState;case 5:case 27:var l=Z;if(o?Ms(o):l.stateNode.complete){R=0,It=null;var h=l.sibling;if(h!==null)Z=h;else{var s=l.return;s!==null?(Z=s,d2(s)):Z=null}break a}}R=0,It=null,Te(t,a,n,5);break;case 6:R=0,It=null,Te(t,a,n,6);break;case 8:ld(),ht=6;break t;default:throw Error(M(462))}}D5();break}catch(v){Fu(t,v)}while(!0);return Ia=de=null,V.H=e,V.A=i,X=r,Z!==null?0:(I=null,G=0,Po(),ht)}function D5(){for(;Z!==null&&!dp();)ts(Z)}function ts(t){var a=ju(t.alternate,t,or);t.memoizedProps=t.pendingProps,a===null?d2(t):Z=a}function p0(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=l0(r,a,a.pendingProps,a.type,void 0,G);break;case 11:a=l0(r,a,a.pendingProps,a.type.render,a.ref,G);break;case 5:Q1(a);default:Wu(r,a),a=Z=Wh(a,or),a=ju(r,a,or)}t.memoizedProps=t.pendingProps,a===null?d2(t):Z=a}function Te(t,a,r,e){Ia=de=null,Q1(a),Ue=null,Fi=0;var i=a.return;try{if(j5(t,i,a,r,G)){ht=1,_o(t,va(r,t.current)),Z=null;return}}catch(n){if(i!==null)throw Z=i,n;ht=1,_o(t,va(r,t.current)),Z=null;return}a.flags&32768?(Y||e===1?t=!0:ii||(G&536870912)!==0?t=!1:(mr=t=!0,(e===2||e===9||e===3||e===6)&&(e=la.current,e!==null&&e.tag===13&&(e.flags|=16384))),as(a,t)):d2(a)}function d2(t){var a=t;do{if((a.flags&32768)!==0){as(a,mr);return}t=a.return;var r=S5(a.alternate,a,or);if(r!==null){Z=r;return}if(a=a.sibling,a!==null){Z=a;return}Z=a=t}while(a!==null);ht===0&&(ht=5)}function as(t,a){do{var r=A5(t.alternate,t);if(r!==null){r.flags&=32767,Z=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){Z=t;return}Z=t=r}while(t!==null);ht=6,Z=null}function f0(t,a,r,e,i,n,o,l,h){t.cancelPendingCommit=null;do c2();while(Lt!==0);if((X&6)!==0)throw Error(M(327));if(a!==null){if(a===t.current)throw Error(M(177));if(n=a.lanes|a.childLanes,n|=V1,xp(t,r,n,o,l,h),t===I&&(Z=I=null,G=0),Fe=a,Hr=t,ar=r,o1=n,l1=i,Ku=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,G5(wo,function(){return os(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=V.T,V.T=null,i=Q.p,Q.p=2,o=X,X|=4;try{V5(t,a,r)}finally{X=o,Q.p=i,V.T=e}}Lt=1,rs(),es(),is()}}function rs(){if(Lt===1){Lt=0;var t=Hr,a=Fe,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=V.T,V.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{Du(a,t);var n=s1,o=Mh(t.containerInfo),l=n.focusedElem,h=n.selectionRange;if(o!==l&&l&&l.ownerDocument&&Lh(l.ownerDocument.documentElement,l)){if(h!==null&&A1(l)){var s=h.start,v=h.end;if(v===void 0&&(v=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(v,l.value.length);else{var x=l.ownerDocument||document,p=x&&x.defaultView||window;if(p.getSelection){var k=p.getSelection(),y=l.textContent.length,C=Math.min(h.start,y),E=h.end===void 0?C:Math.min(h.end,y);!k.extend&&C>E&&(o=E,E=C,C=o);var g=Ec(l,C),u=Ec(l,E);if(g&&u&&(k.rangeCount!==1||k.anchorNode!==g.node||k.anchorOffset!==g.offset||k.focusNode!==u.node||k.focusOffset!==u.offset)){var f=x.createRange();f.setStart(g.node,g.offset),k.removeAllRanges(),C>E?(k.addRange(f),k.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),k.addRange(f))}}}}for(x=[],k=l;k=k.parentNode;)k.nodeType===1&&x.push({element:k,left:k.scrollLeft,top:k.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<x.length;l++){var L=x[l];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Ko=!!u1,s1=u1=null}finally{X=i,Q.p=e,V.T=r}}t.current=a,Lt=2}}function es(){if(Lt===2){Lt=0;var t=Hr,a=Fe,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=V.T,V.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{_u(t,a.alternate,a)}finally{X=i,Q.p=e,V.T=r}}Lt=3}}function is(){if(Lt===4||Lt===3){Lt=0,cp();var t=Hr,a=Fe,r=ar,e=Ku;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Lt=5:(Lt=0,Fe=Hr=null,ns(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Wr=null),C1(r),a=a.stateNode,ea&&typeof ea.onCommitFiberRoot=="function")try{ea.onCommitFiberRoot(on,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=V.T,i=Q.p,Q.p=2,V.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var l=e[o];n(l.value,{componentStack:l.stack})}}finally{V.T=a,Q.p=i}}(ar&3)!==0&&c2(),Ta(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===d1?qi++:(qi=0,d1=t):qi=0,pn(0,!1)}}function ns(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,un(a)))}function c2(){return rs(),es(),is(),os()}function os(){if(Lt!==5)return!1;var t=Hr,a=o1;o1=0;var r=C1(ar),e=V.T,i=Q.p;try{Q.p=32>r?32:r,V.T=null,r=l1,l1=null;var n=Hr,o=ar;if(Lt=0,Fe=Hr=null,ar=0,(X&6)!==0)throw Error(M(331));var l=X;if(X|=4,Yu(n.current),Zu(n,n.current,o,r),X=l,pn(0,!1),ea&&typeof ea.onPostCommitFiberRoot=="function")try{ea.onPostCommitFiberRoot(on,n)}catch{}return!0}finally{Q.p=i,V.T=e,ns(t,a)}}function v0(t,a,r){a=va(r,a),a=a1(t.stateNode,a,2),t=jr(t,a,2),t!==null&&(dn(t,2),Ta(t))}function J(t,a,r){if(t.tag===3)v0(t,t,r);else for(;a!==null;){if(a.tag===3){v0(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Wr===null||!Wr.has(e))){t=va(r,t),r=mu(2),e=jr(a,r,2),e!==null&&(yu(r,e,a,t),dn(e,2),Ta(e));break}}a=a.return}}function Ll(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new T5;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(nd=!0,i.add(r),t=U5.bind(null,t,a,r),a.then(t,t))}function U5(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,I===t&&(G&r)===r&&(ht===4||ht===3&&(G&62914560)===G&&300>ra()-o2?(X&2)===0&&$e(t,0):od|=r,Je===G&&(Je=0)),Ta(t)}function ls(t,a){a===0&&(a=I0()),t=le(t,a),t!==null&&(dn(t,a),Ta(t))}function Z5(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),ls(t,r)}function q5(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(M(314))}e!==null&&e.delete(a),ls(t,r)}function G5(t,a){return y1(t,a)}var Uo=null,we=null,c1=!1,Zo=!1,Ml=!1,wr=0;function Ta(t){t!==we&&t.next===null&&(we===null?Uo=we=t:we=we.next=t),Zo=!0,c1||(c1=!0,X5())}function pn(t,a){if(!Ml&&Zo){Ml=!0;do for(var r=!1,e=Uo;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,l=e.pingedLanes;n=(1<<31-ia(42|t)+1)-1,n&=i&~(o&~l),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,k0(e,n))}else n=G,n=Jo(e,e===I?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||ln(e,n)||(r=!0,k0(e,n));e=e.next}while(r);Ml=!1}}function Y5(){ds()}function ds(){Zo=c1=!1;var t=0;wr!==0&&P5()&&(t=wr);for(var a=ra(),r=null,e=Uo;e!==null;){var i=e.next,n=cs(e,a);n===0?(e.next=null,r===null?Uo=i:r.next=i,i===null&&(we=r)):(r=e,(t!==0||(n&3)!==0)&&(Zo=!0)),e=i}Lt!==0&&Lt!==5||pn(t,!1),wr!==0&&(wr=0)}function cs(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-ia(n),l=1<<o,h=i[o];h===-1?((l&r)===0||(l&e)!==0)&&(i[o]=kp(l,a)):h<=a&&(t.expiredLanes|=l),n&=~l}if(a=I,r=G,r=Jo(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(R===2||R===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&J2(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||ln(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&J2(e),C1(r)){case 2:case 8:r=F0;break;case 32:r=wo;break;case 268435456:r=$0;break;default:r=wo}return e=hs.bind(null,t),r=y1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&J2(e),t.callbackPriority=2,t.callbackNode=null,2}function hs(t,a){if(Lt!==0&&Lt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(c2()&&t.callbackNode!==r)return null;var e=G;return e=Jo(t,t===I?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(Ju(t,e,a),cs(t,ra()),t.callbackNode!=null&&t.callbackNode===r?hs.bind(null,t):null)}function k0(t,a){if(c2())return null;Ju(t,a,!0)}function X5(){af(function(){(X&6)!==0?y1(J0,Y5):ds()})}function dd(){if(wr===0){var t=Qe;t===0&&(t=Zn,Zn<<=1,(Zn&261888)===0&&(Zn=256)),wr=t}return wr}function x0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:no(""+t)}function L0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function Q5(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=x0((i[Rt]||null).action),o=e.submitter;o&&(a=(a=o[Rt]||null)?x0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var l=new Fo("action","action",null,e,i);t.push({event:l,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(wr!==0){var h=o?L0(i,o):new FormData(i);Pl(r,{pending:!0,data:h,method:i.method,action:n},null,h)}}else typeof n=="function"&&(l.preventDefault(),h=o?L0(i,o):new FormData(i),Pl(r,{pending:!0,data:h,method:i.method,action:n},n,h))},currentTarget:i}]})}}for(Pn=0;Pn<Zl.length;Pn++)to=Zl[Pn],M0=to.toLowerCase(),m0=to[0].toUpperCase()+to.slice(1),Ba(M0,"on"+m0);var to,M0,m0,Pn;Ba(yh,"onAnimationEnd");Ba(wh,"onAnimationIteration");Ba(Ch,"onAnimationStart");Ba("dblclick","onDoubleClick");Ba("focusin","onFocus");Ba("focusout","onBlur");Ba(h5,"onTransitionRun");Ba(u5,"onTransitionStart");Ba(s5,"onTransitionCancel");Ba(Bh,"onTransitionEnd");Ye("onMouseEnter",["mouseout","mouseover"]);Ye("onMouseLeave",["mouseout","mouseover"]);Ye("onPointerEnter",["pointerout","pointerover"]);Ye("onPointerLeave",["pointerout","pointerover"]);ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ie("onBeforeInput",["compositionend","keypress","textInput","paste"]);ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Pi));function us(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var l=e[o],h=l.instance,s=l.currentTarget;if(l=l.listener,h!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){Bo(v)}i.currentTarget=null,n=h}else for(o=0;o<e.length;o++){if(l=e[o],h=l.instance,s=l.currentTarget,l=l.listener,h!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){Bo(v)}i.currentTarget=null,n=h}}}}function U(t,a){var r=a[zl];r===void 0&&(r=a[zl]=new Set);var e=t+"__bubble";r.has(e)||(ss(a,t,2,!1),r.add(e))}function ml(t,a,r){var e=0;a&&(e|=4),ss(r,t,e,a)}var ao="_reactListening"+Math.random().toString(36).slice(2);function cd(t){if(!t[ao]){t[ao]=!0,eh.forEach(function(r){r!=="selectionchange"&&(K5.has(r)||ml(r,!1,t),ml(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[ao]||(a[ao]=!0,ml("selectionchange",!1,a))}}function ss(t,a,r,e){switch(Bs(a)){case 2:var i=yf;break;case 8:i=wf;break;default:i=gd}r=i.bind(null,a,r,t),i=void 0,!Ol||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function yl(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var l=e.stateNode.containerInfo;if(l===i)break;if(o===4)for(o=e.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;l!==null;){if(o=be(l),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){e=n=o;continue t}l=l.parentNode}}e=e.return}uh(function(){var s=n,v=j1(r),x=[];t:{var p=bh.get(t);if(p!==void 0){var k=Fo,y=t;switch(t){case"keypress":if(lo(r)===0)break t;case"keydown":case"keyup":k=qp;break;case"focusin":y="focus",k=tl;break;case"focusout":y="blur",k=tl;break;case"beforeblur":case"afterblur":k=tl;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=Sp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Xp;break;case yh:case wh:case Ch:k=zp;break;case Bh:k=Kp;break;case"scroll":case"scrollend":k=Wp;break;case"wheel":k=Jp;break;case"copy":case"cut":case"paste":k=Tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Sc;break;case"toggle":case"beforetoggle":k=$p}var C=(a&4)!==0,E=!C&&(t==="scroll"||t==="scrollend"),g=C?p!==null?p+"Capture":null:p;C=[];for(var u=s,f;u!==null;){var L=u;if(f=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||f===null||g===null||(L=Xi(u,g),L!=null&&C.push(tn(u,L,f))),E)break;u=u.return}0<C.length&&(p=new k(p,y,null,r,v),x.push({event:p,listeners:C}))}}if((a&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",p&&r!==El&&(y=r.relatedTarget||r.fromElement)&&(be(y)||y[ti]))break t;if((k||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,k?(y=r.relatedTarget||r.toElement,k=s,y=y?be(y):null,y!==null&&(E=nn(y),C=y.tag,y!==E||C!==5&&C!==27&&C!==6)&&(y=null)):(k=null,y=s),k!==y)){if(C=Wc,L="onMouseLeave",g="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(C=Sc,L="onPointerLeave",g="onPointerEnter",u="pointer"),E=k==null?p:Wi(k),f=y==null?p:Wi(y),p=new C(L,u+"leave",k,r,v),p.target=E,p.relatedTarget=f,L=null,be(v)===s&&(C=new C(g,u+"enter",y,r,v),C.target=f,C.relatedTarget=E,L=C),E=L,k&&y)a:{for(C=R5,g=k,u=y,f=0,L=g;L;L=C(L))f++;L=0;for(var j=u;j;j=C(j))L++;for(;0<f-L;)g=C(g),f--;for(;0<L-f;)u=C(u),L--;for(;f--;){if(g===u||u!==null&&g===u.alternate){C=g;break a}g=C(g),u=C(u)}C=null}else C=null;k!==null&&y0(x,p,k,C,!1),y!==null&&E!==null&&y0(x,E,y,C,!0)}}t:{if(p=s?Wi(s):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var z=_c;else if(zc(p))if(kh)z=l5;else{z=n5;var b=i5}else k=p.nodeName,!k||k.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?s&&b1(s.elementType)&&(z=_c):z=o5;if(z&&(z=z(t,s))){vh(x,z,r,v);break t}b&&b(t,p,s),t==="focusout"&&s&&p.type==="number"&&s.memoizedProps.value!=null&&Nl(p,"number",p.value)}switch(b=s?Wi(s):window,t){case"focusin":(zc(b)||b.contentEditable==="true")&&(He=b,Dl=s,zi=null);break;case"focusout":zi=Dl=He=null;break;case"mousedown":Ul=!0;break;case"contextmenu":case"mouseup":case"dragend":Ul=!1,Oc(x,r,v);break;case"selectionchange":if(c5)break;case"keydown":case"keyup":Oc(x,r,v)}var A;if(S1)t:{switch(t){case"compositionstart":var O="onCompositionStart";break t;case"compositionend":O="onCompositionEnd";break t;case"compositionupdate":O="onCompositionUpdate";break t}O=void 0}else We?ph(t,r)&&(O="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(O="onCompositionStart");O&&(gh&&r.locale!=="ko"&&(We||O!=="onCompositionStart"?O==="onCompositionEnd"&&We&&(A=sh()):(Mr=v,W1="value"in Mr?Mr.value:Mr.textContent,We=!0)),b=qo(s,O),0<b.length&&(O=new Hc(O,t,null,r,v),x.push({event:O,listeners:b}),A?O.data=A:(A=fh(r),A!==null&&(O.data=A)))),(A=Pp?t5(t,r):a5(t,r))&&(O=qo(s,"onBeforeInput"),0<O.length&&(b=new Hc("onBeforeInput","beforeinput",null,r,v),x.push({event:b,listeners:O}),b.data=A)),Q5(x,t,s,r,v)}us(x,a)})}function tn(t,a,r){return{instance:t,listener:a,currentTarget:r}}function qo(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Xi(t,r),i!=null&&e.unshift(tn(t,i,n)),i=Xi(t,a),i!=null&&e.push(tn(t,i,n))),t.tag===3)return e;t=t.return}return[]}function R5(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function y0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var l=r,h=l.alternate,s=l.stateNode;if(l=l.tag,h!==null&&h===e)break;l!==5&&l!==26&&l!==27||s===null||(h=s,i?(s=Xi(r,n),s!=null&&o.unshift(tn(r,s,h))):i||(s=Xi(r,n),s!=null&&o.push(tn(r,s,h)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var J5=/\r\n?/g,F5=/\u0000|\uFFFD/g;function w0(t){return(typeof t=="string"?t:""+t).replace(J5,`
`).replace(F5,"")}function gs(t,a){return a=w0(a),w0(t)===a}function F(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||Xe(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&Xe(t,""+e);break;case"className":Yn(t,"class",e);break;case"tabIndex":Yn(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Yn(t,r,e);break;case"style":hh(t,e,n);break;case"data":if(a!=="object"){Yn(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=no(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&F(t,a,"name",i.name,i,null),F(t,a,"formEncType",i.formEncType,i,null),F(t,a,"formMethod",i.formMethod,i,null),F(t,a,"formTarget",i.formTarget,i,null)):(F(t,a,"encType",i.encType,i,null),F(t,a,"method",i.method,i,null),F(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=no(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=$a);break;case"onScroll":e!=null&&U("scroll",t);break;case"onScrollEnd":e!=null&&U("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(M(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(M(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=no(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":U("beforetoggle",t),U("toggle",t),io(t,"popover",e);break;case"xlinkActuate":Ga(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Ga(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Ga(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Ga(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Ga(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Ga(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Ga(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Ga(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Ga(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":io(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=bp.get(r)||r,io(t,r,e))}}function h1(t,a,r,e,i,n){switch(r){case"style":hh(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(M(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(M(60));t.innerHTML=r}}break;case"children":typeof e=="string"?Xe(t,e):(typeof e=="number"||typeof e=="bigint")&&Xe(t,""+e);break;case"onScroll":e!=null&&U("scroll",t);break;case"onScrollEnd":e!=null&&U("scrollend",t);break;case"onClick":e!=null&&(t.onclick=$a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ih.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[Rt]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):io(t,r,e)}}}function _t(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":U("error",t),U("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(M(137,a));default:F(t,a,n,o,r,null)}}i&&F(t,a,"srcSet",r.srcSet,r,null),e&&F(t,a,"src",r.src,r,null);return;case"input":U("invalid",t);var l=n=o=i=null,h=null,s=null;for(e in r)if(r.hasOwnProperty(e)){var v=r[e];if(v!=null)switch(e){case"name":i=v;break;case"type":o=v;break;case"checked":h=v;break;case"defaultChecked":s=v;break;case"value":n=v;break;case"defaultValue":l=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(M(137,a));break;default:F(t,a,e,v,r,null)}}lh(t,n,l,h,s,o,i,!1);return;case"select":U("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(l=r[i],l!=null))switch(i){case"value":n=l;break;case"defaultValue":o=l;break;case"multiple":e=l;default:F(t,a,i,l,r,null)}a=n,r=o,t.multiple=!!e,a!=null?Ee(t,!!e,a,!1):r!=null&&Ee(t,!!e,r,!0);return;case"textarea":U("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(l=r[o],l!=null))switch(o){case"value":e=l;break;case"defaultValue":i=l;break;case"children":n=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(M(91));break;default:F(t,a,o,l,r,null)}ch(t,e,i,n);return;case"option":for(h in r)r.hasOwnProperty(h)&&(e=r[h],e!=null)&&(h==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":F(t,a,h,e,r,null));return;case"dialog":U("beforetoggle",t),U("toggle",t),U("cancel",t),U("close",t);break;case"iframe":case"object":U("load",t);break;case"video":case"audio":for(e=0;e<Pi.length;e++)U(Pi[e],t);break;case"image":U("error",t),U("load",t);break;case"details":U("toggle",t);break;case"embed":case"source":case"link":U("error",t),U("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(s in r)if(r.hasOwnProperty(s)&&(e=r[s],e!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(M(137,a));default:F(t,a,s,e,r,null)}return;default:if(b1(a)){for(v in r)r.hasOwnProperty(v)&&(e=r[v],e!==void 0&&h1(t,a,v,e,r,void 0));return}}for(l in r)r.hasOwnProperty(l)&&(e=r[l],e!=null&&F(t,a,l,e,r,null))}function $5(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,l=null,h=null,s=null,v=null;for(k in r){var x=r[k];if(r.hasOwnProperty(k)&&x!=null)switch(k){case"checked":break;case"value":break;case"defaultValue":h=x;default:e.hasOwnProperty(k)||F(t,a,k,null,e,x)}}for(var p in e){var k=e[p];if(x=r[p],e.hasOwnProperty(p)&&(k!=null||x!=null))switch(p){case"type":n=k;break;case"name":i=k;break;case"checked":s=k;break;case"defaultChecked":v=k;break;case"value":o=k;break;case"defaultValue":l=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(M(137,a));break;default:k!==x&&F(t,a,p,k,e,x)}}Tl(t,o,l,h,s,v,n,i);return;case"select":k=o=l=p=null;for(n in r)if(h=r[n],r.hasOwnProperty(n)&&h!=null)switch(n){case"value":break;case"multiple":k=h;default:e.hasOwnProperty(n)||F(t,a,n,null,e,h)}for(i in e)if(n=e[i],h=r[i],e.hasOwnProperty(i)&&(n!=null||h!=null))switch(i){case"value":p=n;break;case"defaultValue":l=n;break;case"multiple":o=n;default:n!==h&&F(t,a,i,n,e,h)}a=l,r=o,e=k,p!=null?Ee(t,!!r,p,!1):!!e!=!!r&&(a!=null?Ee(t,!!r,a,!0):Ee(t,!!r,r?[]:"",!1));return;case"textarea":k=p=null;for(l in r)if(i=r[l],r.hasOwnProperty(l)&&i!=null&&!e.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:F(t,a,l,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":p=i;break;case"defaultValue":k=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(M(91));break;default:i!==n&&F(t,a,o,i,e,n)}dh(t,p,k);return;case"option":for(var y in r)p=r[y],r.hasOwnProperty(y)&&p!=null&&!e.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:F(t,a,y,null,e,p));for(h in e)p=e[h],k=r[h],e.hasOwnProperty(h)&&p!==k&&(p!=null||k!=null)&&(h==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":F(t,a,h,p,e,k));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var C in r)p=r[C],r.hasOwnProperty(C)&&p!=null&&!e.hasOwnProperty(C)&&F(t,a,C,null,e,p);for(s in e)if(p=e[s],k=r[s],e.hasOwnProperty(s)&&p!==k&&(p!=null||k!=null))switch(s){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(M(137,a));break;default:F(t,a,s,p,e,k)}return;default:if(b1(a)){for(var E in r)p=r[E],r.hasOwnProperty(E)&&p!==void 0&&!e.hasOwnProperty(E)&&h1(t,a,E,void 0,e,p);for(v in e)p=e[v],k=r[v],!e.hasOwnProperty(v)||p===k||p===void 0&&k===void 0||h1(t,a,v,p,e,k);return}}for(var g in r)p=r[g],r.hasOwnProperty(g)&&p!=null&&!e.hasOwnProperty(g)&&F(t,a,g,null,e,p);for(x in e)p=e[x],k=r[x],!e.hasOwnProperty(x)||p===k||p==null&&k==null||F(t,a,x,p,e,k)}function C0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function I5(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,l=i.duration;if(n&&l&&C0(o)){for(o=0,l=i.responseEnd,e+=1;e<r.length;e++){var h=r[e],s=h.startTime;if(s>l)break;var v=h.transferSize,x=h.initiatorType;v&&C0(x)&&(h=h.responseEnd,o+=v*(h<l?1:(l-s)/(h-s)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var u1=null,s1=null;function Go(t){return t.nodeType===9?t:t.ownerDocument}function B0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ps(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function g1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var wl=null;function P5(){var t=window.event;return t&&t.type==="popstate"?t===wl?!1:(wl=t,!0):(wl=null,!1)}var fs=typeof setTimeout=="function"?setTimeout:void 0,tf=typeof clearTimeout=="function"?clearTimeout:void 0,b0=typeof Promise=="function"?Promise:void 0,af=typeof queueMicrotask=="function"?queueMicrotask:typeof b0<"u"?function(t){return b0.resolve(null).then(t).catch(rf)}:fs;function rf(t){setTimeout(function(){throw t})}function Or(t){return t==="head"}function j0(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),Pe(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")Gi(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Gi(r);for(var n=r.firstChild;n;){var o=n.nextSibling,l=n.nodeName;n[cn]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&Gi(t.ownerDocument.body);r=i}while(r);Pe(a)}function W0(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function p1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":p1(r),B1(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function ef(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[cn])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=La(t.nextSibling),t===null)break}return null}function nf(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=La(t.nextSibling),t===null))return null;return t}function vs(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=La(t.nextSibling),t===null))return null;return t}function f1(t){return t.data==="$?"||t.data==="$~"}function v1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function of(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function La(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var k1=null;function H0(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return La(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function S0(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function ks(t,a,r){switch(a=Go(r),t){case"html":if(t=a.documentElement,!t)throw Error(M(452));return t;case"head":if(t=a.head,!t)throw Error(M(453));return t;case"body":if(t=a.body,!t)throw Error(M(454));return t;default:throw Error(M(451))}}function Gi(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);B1(t)}var Ma=new Map,A0=new Set;function Yo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var lr=Q.d;Q.d={f:lf,r:df,D:cf,C:hf,L:uf,m:sf,X:pf,S:gf,M:ff};function lf(){var t=lr.f(),a=l2();return t||a}function df(t){var a=ai(t);a!==null&&a.tag===5&&a.type==="form"?hu(a):lr.r(t)}var ni=typeof document>"u"?null:document;function xs(t,a,r){var e=ni;if(e&&typeof a=="string"&&a){var i=fa(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),A0.has(i)||(A0.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),_t(a,"link",t),jt(a),e.head.appendChild(a)))}}function cf(t){lr.D(t),xs("dns-prefetch",t,null)}function hf(t,a){lr.C(t,a),xs("preconnect",t,a)}function uf(t,a,r){lr.L(t,a,r);var e=ni;if(e&&t&&a){var i='link[rel="preload"][as="'+fa(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+fa(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+fa(r.imageSizes)+'"]')):i+='[href="'+fa(t)+'"]';var n=i;switch(a){case"style":n=Ie(t);break;case"script":n=oi(t)}Ma.has(n)||(t=et({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),Ma.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(fn(n))||a==="script"&&e.querySelector(vn(n))||(a=e.createElement("link"),_t(a,"link",t),jt(a),e.head.appendChild(a)))}}function sf(t,a){lr.m(t,a);var r=ni;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+fa(e)+'"][href="'+fa(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=oi(t)}if(!Ma.has(n)&&(t=et({rel:"modulepreload",href:t},a),Ma.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(vn(n)))return}e=r.createElement("link"),_t(e,"link",t),jt(e),r.head.appendChild(e)}}}function gf(t,a,r){lr.S(t,a,r);var e=ni;if(e&&t){var i=Ne(e).hoistableStyles,n=Ie(t);a=a||"default";var o=i.get(n);if(!o){var l={loading:0,preload:null};if(o=e.querySelector(fn(n)))l.loading=5;else{t=et({rel:"stylesheet",href:t,"data-precedence":a},r),(r=Ma.get(n))&&hd(t,r);var h=o=e.createElement("link");jt(h),_t(h,"link",t),h._p=new Promise(function(s,v){h.onload=s,h.onerror=v}),h.addEventListener("load",function(){l.loading|=1}),h.addEventListener("error",function(){l.loading|=2}),l.loading|=4,vo(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:l},i.set(n,o)}}}function pf(t,a){lr.X(t,a);var r=ni;if(r&&t){var e=Ne(r).hoistableScripts,i=oi(t),n=e.get(i);n||(n=r.querySelector(vn(i)),n||(t=et({src:t,async:!0},a),(a=Ma.get(i))&&ud(t,a),n=r.createElement("script"),jt(n),_t(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function ff(t,a){lr.M(t,a);var r=ni;if(r&&t){var e=Ne(r).hoistableScripts,i=oi(t),n=e.get(i);n||(n=r.querySelector(vn(i)),n||(t=et({src:t,async:!0,type:"module"},a),(a=Ma.get(i))&&ud(t,a),n=r.createElement("script"),jt(n),_t(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function V0(t,a,r,e){var i=(i=Cr.current)?Yo(i):null;if(!i)throw Error(M(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=Ie(r.href),r=Ne(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Ie(r.href);var n=Ne(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(fn(t)))&&!n._p&&(o.instance=n,o.state.loading=5),Ma.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Ma.set(t,r),n||vf(i,t,r,o.state))),a&&e===null)throw Error(M(528,""));return o}if(a&&e!==null)throw Error(M(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=oi(r),r=Ne(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(M(444,t))}}function Ie(t){return'href="'+fa(t)+'"'}function fn(t){return'link[rel="stylesheet"]['+t+"]"}function Ls(t){return et({},t,{"data-precedence":t.precedence,precedence:null})}function vf(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),_t(a,"link",r),jt(a),t.head.appendChild(a))}function oi(t){return'[src="'+fa(t)+'"]'}function vn(t){return"script[async]"+t}function z0(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+fa(r.href)+'"]');if(e)return a.instance=e,jt(e),e;var i=et({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),jt(e),_t(e,"style",i),vo(e,r.precedence,t),a.instance=e;case"stylesheet":i=Ie(r.href);var n=t.querySelector(fn(i));if(n)return a.state.loading|=4,a.instance=n,jt(n),n;e=Ls(r),(i=Ma.get(i))&&hd(e,i),n=(t.ownerDocument||t).createElement("link"),jt(n);var o=n;return o._p=new Promise(function(l,h){o.onload=l,o.onerror=h}),_t(n,"link",e),a.state.loading|=4,vo(n,r.precedence,t),a.instance=n;case"script":return n=oi(r.src),(i=t.querySelector(vn(n)))?(a.instance=i,jt(i),i):(e=r,(i=Ma.get(n))&&(e=et({},r),ud(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),jt(i),_t(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(M(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,vo(e,r.precedence,t));return a.instance}function vo(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var l=e[o];if(l.dataset.precedence===a)n=l;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function hd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function ud(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var ko=null;function _0(t,a,r){if(ko===null){var e=new Map,i=ko=new Map;i.set(r,e)}else i=ko,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[cn]||n[At]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var l=e.get(o);l?l.push(n):e.set(o,[n])}}return e}function T0(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function kf(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Ms(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function xf(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=Ie(e.href),n=a.querySelector(fn(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Xo.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,jt(n);return}n=a.ownerDocument||a,e=Ls(e),(i=Ma.get(i))&&hd(e,i),n=n.createElement("link"),jt(n);var o=n;o._p=new Promise(function(l,h){o.onload=l,o.onerror=h}),_t(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Xo.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var Cl=0;function Lf(t,a){return t.stylesheets&&t.count===0&&xo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&xo(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&Cl===0&&(Cl=62500*I5());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&xo(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Cl?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function Xo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Qo=null;function xo(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Qo=new Map,a.forEach(Mf,t),Qo=null,Xo.call(t))}function Mf(t,a){if(!(a.state.loading&4)){var r=Qo.get(t);if(r)var e=r.get(null);else{r=new Map,Qo.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=Xo.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var an={$$typeof:Fa,Provider:null,Consumer:null,_currentValue:Rr,_currentValue2:Rr,_threadCount:0};function mf(t,a,r,e,i,n,o,l,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=F2(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=F2(0),this.hiddenUpdates=F2(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function ms(t,a,r,e,i,n,o,l,h,s,v,x){return t=new mf(t,a,r,o,h,s,v,x,l),a=1,n===!0&&(a|=24),n=ta(3,null,null,a),t.current=n,n.stateNode=t,a=E1(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},U1(n),t}function ys(t){return t?(t=Ve,t):Ve}function ws(t,a,r,e,i,n){i=ys(i),e.context===null?e.context=i:e.pendingContext=i,e=br(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=jr(t,e,a),r!==null&&(Kt(r,t,a),Ti(r,t,a))}function N0(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function sd(t,a){N0(t,a),(t=t.alternate)&&N0(t,a)}function Cs(t){if(t.tag===13||t.tag===31){var a=le(t,67108864);a!==null&&Kt(a,t,67108864),sd(t,67108864)}}function E0(t){if(t.tag===13||t.tag===31){var a=na();a=w1(a);var r=le(t,a);r!==null&&Kt(r,t,a),sd(t,a)}}var Ko=!0;function yf(t,a,r,e){var i=V.T;V.T=null;var n=Q.p;try{Q.p=2,gd(t,a,r,e)}finally{Q.p=n,V.T=i}}function wf(t,a,r,e){var i=V.T;V.T=null;var n=Q.p;try{Q.p=8,gd(t,a,r,e)}finally{Q.p=n,V.T=i}}function gd(t,a,r,e){if(Ko){var i=x1(e);if(i===null)yl(t,a,e,Ro,r),O0(t,e);else if(Bf(i,t,a,r,e))e.stopPropagation();else if(O0(t,e),a&4&&-1<Cf.indexOf(t)){for(;i!==null;){var n=ai(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=Xr(n.pendingLanes);if(o!==0){var l=n;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var h=1<<31-ia(o);l.entanglements[1]|=h,o&=~h}Ta(n),(X&6)===0&&(Eo=ra()+500,pn(0,!1))}}break;case 31:case 13:l=le(n,2),l!==null&&Kt(l,n,2),l2(),sd(n,2)}if(n=x1(e),n===null&&yl(t,a,e,Ro,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else yl(t,a,e,null,r)}}function x1(t){return t=j1(t),pd(t)}var Ro=null;function pd(t){if(Ro=null,t=be(t),t!==null){var a=nn(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=Y0(a),t!==null)return t;t=null}else if(r===31){if(t=X0(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return Ro=t,null}function Bs(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(hp()){case J0:return 2;case F0:return 8;case wo:case up:return 32;case $0:return 268435456;default:return 32}default:return 32}}var L1=!1,Sr=null,Ar=null,Vr=null,rn=new Map,en=new Map,xr=[],Cf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function O0(t,a){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":rn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":en.delete(a.pointerId)}}function Ci(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=ai(a),a!==null&&Cs(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function Bf(t,a,r,e,i){switch(a){case"focusin":return Sr=Ci(Sr,t,a,r,e,i),!0;case"dragenter":return Ar=Ci(Ar,t,a,r,e,i),!0;case"mouseover":return Vr=Ci(Vr,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return rn.set(n,Ci(rn.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,en.set(n,Ci(en.get(n)||null,t,a,r,e,i)),!0}return!1}function bs(t){var a=be(t.target);if(a!==null){var r=nn(a);if(r!==null){if(a=r.tag,a===13){if(a=Y0(r),a!==null){t.blockedOn=a,mc(t.priority,function(){E0(r)});return}}else if(a===31){if(a=X0(r),a!==null){t.blockedOn=a,mc(t.priority,function(){E0(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lo(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=x1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);El=e,r.target.dispatchEvent(e),El=null}else return a=ai(r),a!==null&&Cs(a),t.blockedOn=r,!1;a.shift()}return!0}function D0(t,a,r){Lo(t)&&r.delete(a)}function bf(){L1=!1,Sr!==null&&Lo(Sr)&&(Sr=null),Ar!==null&&Lo(Ar)&&(Ar=null),Vr!==null&&Lo(Vr)&&(Vr=null),rn.forEach(D0),en.forEach(D0)}function ro(t,a){t.blockedOn===a&&(t.blockedOn=null,L1||(L1=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,bf)))}var eo=null;function U0(t){eo!==t&&(eo=t,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,function(){eo===t&&(eo=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(pd(e||r)===null)continue;break}var n=ai(r);n!==null&&(t.splice(a,3),a-=3,Pl(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function Pe(t){function a(h){return ro(h,t)}Sr!==null&&ro(Sr,t),Ar!==null&&ro(Ar,t),Vr!==null&&ro(Vr,t),rn.forEach(a),en.forEach(a);for(var r=0;r<xr.length;r++){var e=xr[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<xr.length&&(r=xr[0],r.blockedOn===null);)bs(r),r.blockedOn===null&&xr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[Rt]||null;if(typeof n=="function")o||U0(r);else if(o){var l=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[Rt]||null)l=o.formAction;else if(pd(i)!==null)continue}else l=o.action;typeof l=="function"?r[e+1]=l:(r.splice(e,3),e-=3),U0(r)}}}function js(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function fd(t){this._internalRoot=t}h2.prototype.render=fd.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(M(409));var r=a.current,e=na();ws(r,e,t,a,null,null)};h2.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;ws(t.current,2,null,t,null,null),l2(),a[ti]=null}};function h2(t){this._internalRoot=t}h2.prototype.unstable_scheduleHydration=function(t){if(t){var a=rh();t={blockedOn:null,target:t,priority:a};for(var r=0;r<xr.length&&a!==0&&a<xr[r].priority;r++);xr.splice(r,0,t),r===0&&bs(t)}};var Z0=q0.version;if(Z0!=="19.2.8")throw Error(M(527,Z0,"19.2.8"));Q.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(M(188)):(t=Object.keys(t).join(","),Error(M(268,t)));return t=ep(a),t=t!==null?Q0(t):null,t=t===null?null:t.stateNode,t};var jf={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Bi=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Bi.isDisabled&&Bi.supportsFiber))try{on=Bi.inject(jf),ea=Bi}catch{}var Bi;u2.createRoot=function(t,a){if(!G0(t))throw Error(M(299));var r=!1,e="",i=xu,n=Lu,o=Mu;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=ms(t,1,!1,null,null,r,e,null,i,n,o,js),t[ti]=a.current,cd(t),new fd(a)};u2.hydrateRoot=function(t,a,r){if(!G0(t))throw Error(M(299));var e=!1,i="",n=xu,o=Lu,l=Mu,h=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(l=r.onRecoverableError),r.formState!==void 0&&(h=r.formState)),a=ms(t,1,!0,a,r??null,e,i,h,n,o,l,js),a.context=ys(null),r=a.current,e=na(),e=w1(e),i=br(e),i.callback=null,jr(r,i,e),r=e,a.current.lanes=r,dn(a,r),Ta(a),t[ti]=a.current,cd(t),new h2(a)};u2.version="19.2.8"});var As=hr((cv,Ss)=>{"use strict";function Hs(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hs)}catch(t){console.error(t)}}Hs(),Ss.exports=Ws()});var mt=qr(Za()),l4=qr(As());var li=qr(Za(),1);var vd=qr(Za(),1),kd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xd=vd.default.createContext&&vd.default.createContext(kd);var Wf=["attr","size","title"];function Hf(t,a){if(t==null)return{};var r,e,i=Sf(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Sf(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function s2(){return s2=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},s2.apply(null,arguments)}function Vs(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function g2(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Vs(Object(r),!0).forEach(function(e){Af(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Vs(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function Af(t,a,r){return(a=Vf(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function Vf(t){var a=zf(t,"string");return typeof a=="symbol"?a:a+""}function zf(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function zs(t){return t&&t.map((a,r)=>li.default.createElement(a.tag,g2({key:r},a.attr),zs(a.child)))}function q(t){return a=>li.default.createElement(_f,s2({attr:g2({},t.attr)},a),zs(t.child))}function _f(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=Hf(t,Wf),l=i||r.size||"1em",h;return r.className&&(h=r.className),t.className&&(h=(h?h+" ":"")+t.className),li.default.createElement("svg",s2({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:h,style:g2(g2({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),n&&li.default.createElement("title",null,n),t.children)};return xd!==void 0?li.default.createElement(xd.Consumer,null,r=>a(r)):a(kd)}function _s(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function Ts(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function Ns(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function Es(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function Os(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 14 4 9l5-5"},child:[]},{tag:"path",attr:{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"},child:[]}]})(t)}function Ds(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function Us(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function Zs(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function qs(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function Gs(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function Ys(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function Xs(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function Qs(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function Ks(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function Rs(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function Js(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function Fs(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function $s(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function Is(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function Ps(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function tg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function ag(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function rg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function eg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(t)}function ig(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function ng(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function og(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function lg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function dg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 11-5-5-5 5"},child:[]},{tag:"path",attr:{d:"m17 18-5-5-5 5"},child:[]}]})(t)}function cg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 6 5 5 5-5"},child:[]},{tag:"path",attr:{d:"m7 13 5 5 5-5"},child:[]}]})(t)}function hg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function ug(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function sg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 6 9 17l-5-5"},child:[]}]})(t)}function gg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function pg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]}]})(t)}function fg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var vg=Is,p2=Ts,kg=Fs,Ld=Js,xg=tg,Lg=ag,Mg=qs,f2=Ns,mg=ig,yg=Ps,kn=Xs,wg=sg,Cg=og,di=lg,Md=Ds,Bg=ng,md=Us,yd=hg,wd=ug,bg=dg,jg=cg,xn=Ys;var v2=_s,Cd=$s,Wg=Rs,Hg=Qs,Sg=Ks,k2=fg,Ag=Gs,Vg=gg,zg=Es,_g=Zs,x2=eg,Tg=rg,Ng=pg,Eg=Os;var gt=qr(Za());var H=qr(Za());var Og={member:f2,coworker:zg,admin_staff:Lg,leader:_g,pastor:xg,admin:Mg},Dg=["leader","pastor","admin"],Bd=[{id:"work",label:"工作日誌",Icon:vg,href:"work.html",roles:["pastor","admin_staff","admin"]},{id:"serve",label:"服事管理",Icon:p2,href:""},{id:"venue",label:"場地預約",Icon:Vg,href:""}],Tf=t=>{let a=String(t||"").trim();return/^[\u4e00-\u9fff]+$/.test(a)?a.length===4?a.slice(2):a.length>=2&&a.length<=3?a.slice(1):a:a},Ug=["pastor","admin_staff","admin"],Zg=(t,a)=>!t.roles||t.roles.includes(a),Nf=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},qg=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},Gg=({active:t,shell:a})=>{let[r,e]=(0,H.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(y=>{let C=!y;try{localStorage.setItem("tbcSidebarCollapsed",C?"1":"0")}catch{}return C}),[n,o]=(0,H.useState)(!1),[l,h]=(0,H.useState)(""),s=(0,H.useRef)(null),v=a.identity||{name:"",role:"member",status:"loading"},x=Og[v.role]||f2,p=Dg.includes(v.role),k=y=>{h(`${y} 尚未開放`),clearTimeout(s.current),s.current=setTimeout(()=>h(""),2200)};return H.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},H.default.createElement("div",{className:"flex flex-col"},H.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},H.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},H.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},H.default.createElement(k2,{size:20,strokeWidth:2})),r&&H.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},H.default.createElement(Ld,{size:18}))),!r&&H.default.createElement(H.default.Fragment,null,H.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),H.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},H.default.createElement(Ld,{size:18})))),H.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},Bd.map(y=>{let C=t===y.id,E=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${C?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,g=H.default.createElement(H.default.Fragment,null,H.default.createElement(y.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&H.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},y.label));return y.href?C?H.default.createElement("div",{key:y.id,className:E,title:y.label,"aria-current":"page"},g):H.default.createElement("a",{key:y.id,href:y.href,className:E,title:y.label},g):H.default.createElement("button",{key:y.id,type:"button",onClick:()=>k(y.label),className:E,title:y.label},g)}))),H.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},H.default.createElement("button",{type:"button",onClick:()=>o(y=>!y),"aria-haspopup":"menu","aria-expanded":n,className:`tbc-sb-user flex items-center rounded-full transition-colors ${r?"justify-center w-12 h-12 mx-auto bg-slate-100 hover:bg-slate-200":"gap-3 px-4 h-12 w-full hover:bg-slate-100"}`},r?H.default.createElement("span",{className:"text-[13px] text-slate-900 truncate max-w-full px-1"},Tf(v.name)):H.default.createElement(H.default.Fragment,null,H.default.createElement(x,{size:20,strokeWidth:1.75,className:`shrink-0 ${p?"text-amber-500":"text-slate-500"}`}),H.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},v.name))),n&&H.default.createElement(H.default.Fragment,null,H.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),H.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},H.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},H.default.createElement(kg,{size:18,strokeWidth:1.75}),"登出")))),l&&H.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},l))},Yg=({supabase:t,notice:a})=>{let[r,e]=(0,H.useState)(!1),[i,n]=(0,H.useState)(""),[o,l]=(0,H.useState)(""),[h,s]=(0,H.useState)(!1),[v,x]=(0,H.useState)(""),p=async y=>{if(y.preventDefault(),!i.trim()||!o||h)return;s(!0),x("");let{error:C}=await t.auth.signInWithPassword({email:Nf(i),password:o});s(!1),C&&x("帳號或密碼不正確，請再試一次")},k="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return H.default.createElement("form",{onSubmit:p,className:"w-full max-w-sm mx-auto space-y-3"},H.default.createElement("input",{value:i,onChange:y=>n(y.target.value),placeholder:"帳號",autoComplete:"username",className:k}),H.default.createElement("div",{className:"relative"},H.default.createElement("input",{type:r?"text":"password",value:o,onChange:y=>l(y.target.value),placeholder:"密碼",autoComplete:"current-password",className:k+" pr-12"}),H.default.createElement("button",{type:"button",onClick:()=>e(y=>!y),title:r?"隱藏密碼":"顯示密碼","aria-label":r?"隱藏密碼":"顯示密碼",className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"},r?H.default.createElement(x2,{size:18}):H.default.createElement(Tg,{size:18}))),(v||a)&&H.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},H.default.createElement(di,{size:16}),v||a),H.default.createElement("button",{type:"submit",disabled:h||!i.trim()||!o,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},h?"登入中…":"登入"))},Xg=({shell:t})=>{let a=t.identity||{},r=Og[a.role]||f2,e=Dg.includes(a.role);return H.default.createElement("div",{className:"flex flex-col items-center gap-3 mt-14"},H.default.createElement("p",{className:"text-sm text-slate-500"},"準備好了，開始或",H.default.createElement("button",{type:"button",onClick:t.onLogout,className:"tbc-logout ml-0.5 text-indigo-600 hover:text-indigo-700 underline underline-offset-4"},"登出")))};var Ef=({shell:t})=>{let[a,r]=(0,gt.useState)(""),e=(0,gt.useRef)(null),i=t.identity||{},n=Bd.filter(l=>Zg(l,i.role)),o=l=>{r(`${l} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return gt.default.createElement("div",{className:"relative h-[100dvh] w-full bg-white overflow-hidden"},gt.default.createElement("main",{className:"h-full overflow-auto custom-scrollbar"},gt.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},gt.default.createElement("div",{className:"text-center mb-14"},gt.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),gt.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),gt.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(l=>{let h=gt.default.createElement(gt.default.Fragment,null,gt.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},gt.default.createElement(l.Icon,{size:40,strokeWidth:1.75})),gt.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},l.label)),s="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return l.href?gt.default.createElement("a",{key:l.id,href:l.href,className:s},h):gt.default.createElement("button",{key:l.id,type:"button",onClick:()=>o(l.label),className:s},h)})),gt.default.createElement(Xg,{shell:t}))),a&&gt.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},Qg=Ef;var d=qr(Za());var bd=["日","一","二","三","四","五","六"],Kg={m:15,l:18},Rg=["pastor","admin_staff"],Jg=[{id:"title",label:"工作摘要",locked:!0,sortable:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"負責人",sortable:!0,w:t=>`${Math.ceil(t*5+28)}px`,min:t=>Math.ceil(t*5+28)},{id:"status",label:"狀態",sortable:!0,w:t=>`${Math.ceil(t*.85*3+64)}px`,min:t=>Math.ceil(t*.85*3+64)},{id:"date",label:"日期",sortable:!0,w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(150px,1fr)",min:150},{id:"hours",label:"工時",sortable:!0,w:t=>`${Math.ceil(t*4.8+24)}px`,min:t=>Math.ceil(t*4.8+24)},{id:"priority",label:"優先順序",sortable:!0,w:t=>`${Math.ceil(t*.85*4+52)}px`,min:t=>Math.ceil(t*.85*4+52)},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],Of="Asia/Taipei",Fg=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:Of,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},M2=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},Df=t=>new Date(t).toISOString().slice(0,10),L2=(t,a)=>Df(M2(t)+a*864e5),r4=(t,a)=>Math.round((M2(t)-M2(a))/864e5),e4=t=>new Date(M2(t)).getUTCDay(),Uf=t=>L2(t,-((e4(t)+6)%7)),Na=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},Zf=(t,a)=>{let r=r4(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${Na(t)}（${bd[e4(t)]}）`,tag:e}},Tt=t=>t?String(t).slice(0,5):"",$g=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Tt(t.start_time).split(":").map(Number),[e,i]=Tt(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n>0?n/60:null},qf=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Tt(t.start_time).split(":").map(Number),[e,i]=Tt(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*10)/10} 小時`},Ig={urgent:0,normal:1,routine:2},Gf={routine:"例行",normal:"普通",urgent:"緊急"},Pg={routine:"bg-violet-50 border-violet-100 text-violet-600",normal:"bg-slate-50 border-slate-200 text-slate-500",urgent:"bg-red-50 border-red-100 text-red-600"},Yf={routine:"normal",normal:"urgent",urgent:"routine"},Ln=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的工作"],["not your item","只有派工者可以修改這筆工作，負責人只能改狀態"],["nothing to confirm","這筆已經不是「待確認」狀態"],["nothing to return","這筆已經不是「待確認」狀態"],["assignee is not allowed","負責人必須是有權限的同工"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期的任務固定在最上面，不能搬移"],["item not in your list","這筆不在你的清單裡"],["item not found or canceled","這筆工作已被取消或不存在"],["more than one member record","這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號"],["no member record","找不到這個帳號對應的同工資料"],["no permission","沒有使用權限"],["permission denied","沒有使用權限"],["dates are required","日期必填"],["weekly rule needs","每週重複請至少選一個星期"],["monthly rule needs","每月重複請選幾號，或勾「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個週期工作"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},Xf=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>bd[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 號`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},Qf=({person:t,strong:a})=>d.default.createElement("span",{className:`truncate max-w-full ${a?"font-bold text-slate-900":"text-slate-700"}`},t&&t.name||"（未知）"),t4=({value:t,placeholder:a,canEdit:r,onSave:e,className:i="",centerEmpty:n})=>{let[o,l]=(0,d.useState)(!1),[h,s]=(0,d.useState)(t||""),v=(0,d.useRef)(!1);(0,d.useEffect)(()=>{o||s(t||"")},[t,o]);let x=async()=>{if(l(!1),v.current){v.current=!1;return}let p=h.trim();p!==(t||"").trim()&&await e(p)};return o?d.default.createElement("input",{autoFocus:!0,value:h,onChange:p=>s(p.target.value),onBlur:x,onKeyDown:p=>{p.key==="Enter"&&p.currentTarget.blur(),p.key==="Escape"&&(v.current=!0,p.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):d.default.createElement("div",{onClick:()=>r&&l(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} ${!t&&n?"text-center":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?d.default.createElement("span",{className:`text-slate-300 ${n?"block text-center":""}`},a):null))},a4=({type:t,a,b:r,canEdit:e,children:i,onSave:n})=>{let[o,l]=(0,d.useState)(!1),[h,s]=(0,d.useState)(a||""),[v,x]=(0,d.useState)(r||""),p=(0,d.useRef)(!1);(0,d.useEffect)(()=>{o||(s(a||""),x(r||""))},[a,r,o]);let k=async()=>{if(l(!1),p.current){p.current=!1;return}(h!==(a||"")||v!==(r||""))&&await n(h,v)};if(!o)return d.default.createElement("div",{onClick:()=>e&&l(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let y="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return d.default.createElement("div",{tabIndex:-1,onBlur:C=>{C.currentTarget.contains(C.relatedTarget)||k()},onKeyDown:C=>{C.key==="Enter"&&k(),C.key==="Escape"&&(p.current=!0,l(!1))},className:"flex flex-col gap-1"},d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",d.default.createElement("input",{autoFocus:!0,type:t,value:h,onChange:C=>s(C.target.value),className:y})),d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",d.default.createElement("input",{type:t,value:v,onChange:C=>x(C.target.value),className:y})))},Kf=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o,people:l=[],meId:h})=>{let s=a||{},v=t==="editRule",x=t!=="create",[p,k]=(0,d.useState)(s.title||""),[y,C]=(0,d.useState)(s.start_date||e),[E,g]=(0,d.useState)(Tt(s.start_time)),[u,f]=(0,d.useState)(s.end_date||s.start_date||e),[L,j]=(0,d.useState)(Tt(s.end_time)),[z,b]=(0,d.useState)(s.priority||"normal"),[A,O]=(0,d.useState)(s.note||""),[S,Ft]=(0,d.useState)(v?s.freq:t==="createRule"?r||"weekly":"none"),[Ea,he]=(0,d.useState)(!!s.weekdays_only),[ba,ci]=(0,d.useState)(s.week_days||[]),[yt,m2]=(0,d.useState)(s.month_day?String(s.month_day):""),[ue,Mn]=(0,d.useState)(!!s.month_last_day),[se,y2]=(0,d.useState)(s.until_date||""),[mn,Wd]=(0,d.useState)(s.is_active===void 0?!0:s.is_active),[hi,yn]=(0,d.useState)(()=>new Set(h?[h]:[])),[ui,ja]=(0,d.useState)(""),da="text-xs font-medium text-slate-500",Oa="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",Hd=W=>ci(lt=>lt.includes(W)?lt.filter(Da=>Da!==W):[...lt,W]),wn=()=>{if(ja(""),!p.trim())return ja("請輸入任務名稱");if(t==="create"&&hi.size===0)return ja("請至少選一位負責人");if(!y)return ja("開始日期必填");if(S==="none"&&(!u||u<y))return ja("結束日期不能早於開始日期");if(S==="weekly"&&ba.length===0)return ja("每週重複請至少選一個星期");if(S==="monthly"&&!yt&&!ue)return ja("每月重複請選幾號，或勾「每月最後一天」");if(S!=="none"&&se&&se<y)return ja("重複的結束日不能早於開始日");n({title:p.trim(),startDate:y,startTime:E||null,endDate:S==="none"?u:y,endTime:L||null,priority:z,note:A.trim()||null,repeat:S,weekdaysOnly:S==="daily"&&Ea,weekDays:S==="weekly"?ba:[],monthDay:S==="monthly"&&yt?Number(yt):null,monthLast:S==="monthly"&&ue,untilDate:se||null,isActive:mn,assigneeIds:[...hi]})};return d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},v?d.default.createElement(d.default.Fragment,null,d.default.createElement(xn,{className:"text-indigo-600",size:20})," 修改週期工作"):t==="createRule"?d.default.createElement(d.default.Fragment,null,d.default.createElement(xn,{className:"text-indigo-600",size:20})," 新增週期工作"):d.default.createElement(d.default.Fragment,null,d.default.createElement(kn,{className:"text-indigo-600",size:20})," 新增")),d.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(v2,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:da},"工作摘要",d.default.createElement("span",{className:"text-red-500"},"*")),d.default.createElement("input",{autoFocus:!0,value:p,onChange:W=>k(W.target.value),placeholder:"簡短描述工作內容",className:Oa})),t==="create"&&l.length>0&&d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:da},"負責人",d.default.createElement("span",{className:"text-slate-400"},"（可多選，預設是自己）")),d.default.createElement("div",{className:"flex flex-wrap gap-2 tbc-assignees"},l.map(W=>{let lt=hi.has(W.member_id);return d.default.createElement("button",{key:W.member_id,type:"button",onClick:()=>yn(Da=>{let ge=new Set(Da);return ge.has(W.member_id)?ge.delete(W.member_id):ge.add(W.member_id),ge}),className:`h-9 px-4 rounded-full border text-sm font-medium transition-all ${lt?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},W.name,W.member_id===h?"（我）":"")}))),x&&d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:da},"重複"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([W])=>!(v&&W==="none")).map(([W,lt])=>d.default.createElement("button",{key:W,type:"button",onClick:()=>Ft(W),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${S===W?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},lt))),S==="daily"&&d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:Ea,onChange:W=>he(W.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),S==="weekly"&&d.default.createElement("div",{className:"flex gap-2 pt-1 flex-wrap"},[1,2,3,4,5,6,7].map(W=>d.default.createElement("button",{key:W,type:"button",onClick:()=>Hd(W),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${ba.includes(W)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},bd[W%7]))),S==="monthly"&&d.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},d.default.createElement("select",{value:yt,onChange:W=>m2(W.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},d.default.createElement("option",{value:""},"不指定號數"),Array.from({length:31},(W,lt)=>lt+1).map(W=>d.default.createElement("option",{key:W,value:W},W," 號"))),d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:ue,onChange:W=>Mn(W.target.checked),className:"accent-indigo-600"})," 每月最後一天"),yt&&Number(yt)>28&&!ue&&d.default.createElement("span",{className:"text-xs text-amber-600"},yt," 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」"))),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:da},"開始日期"),d.default.createElement("input",{type:"date",value:y,onChange:W=>{C(W.target.value),u<W.target.value&&f(W.target.value)},className:Oa})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:da},"開始時間（選填）"),d.default.createElement("input",{type:"time",value:E,onChange:W=>g(W.target.value),className:Oa})),S==="none"?d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:da},"結束日期"),d.default.createElement("input",{type:"date",value:u,min:y,onChange:W=>f(W.target.value),className:Oa})):d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:da},"結束日期（選填）"),d.default.createElement("input",{type:"date",value:se,min:y,onChange:W=>y2(W.target.value),className:Oa})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:da},"結束時間（選填）"),d.default.createElement("input",{type:"time",value:L,onChange:W=>j(W.target.value),className:Oa}))),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:da},"優先順序"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["routine","例行"],["normal","普通"],["urgent","緊急"]].map(([W,lt])=>d.default.createElement("button",{key:W,type:"button",onClick:()=>b(W),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${z===W?W==="urgent"?"bg-white text-red-600 shadow-sm":W==="routine"?"bg-white text-violet-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},lt))))),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:da},"備註"),d.default.createElement("textarea",{value:A,onChange:W=>O(W.target.value),rows:2,className:Oa})),ui&&d.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},d.default.createElement(di,{size:16})," ",ui)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},d.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:wn,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},v?"儲存":S==="none"?"新增":"儲存"))))},Rf=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,d.useState)(Fg()),[o,l]=(0,d.useState)(null),[h,s]=(0,d.useState)([]),[v,x]=(0,d.useState)(""),[p,k]=(0,d.useState)([]),[y,C]=(0,d.useState)(!0),[E,g]=(0,d.useState)({type:"",text:""}),[u,f]=(0,d.useState)(null),[L,j]=(0,d.useState)("mine"),[z,b]=(0,d.useState)("today"),[A,O]=(0,d.useState)(""),[S,Ft]=(0,d.useState)(""),[Ea,he]=(0,d.useState)(new Set),[ba,ci]=(0,d.useState)(""),[yt,m2]=(0,d.useState)({col:null,dir:"asc"}),ue=c=>m2(m=>m.col!==c?{col:c,dir:"asc"}:m.dir==="asc"?{col:c,dir:"desc"}:{col:null,dir:"asc"}),[Mn,se]=(0,d.useState)(()=>{try{let c=localStorage.getItem("tbcWorkFont");return Kg[c]?c:"m"}catch{return"m"}}),y2=c=>{se(c);try{localStorage.setItem("tbcWorkFont",c)}catch{}},[mn,Wd]=(0,d.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),hi=c=>Wd(m=>{let B=m.includes(c)?m.filter(T=>T!==c):[...m,c];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(B))}catch{}return B}),[yn,ui]=(0,d.useState)(!1),[ja,da]=(0,d.useState)(""),[Oa,Hd]=(0,d.useState)(""),[wn,W]=(0,d.useState)(!1),[lt,Da]=(0,d.useState)(null),[ge,Cn]=(0,d.useState)(!1),[Sd,Ad]=(0,d.useState)(!1),w2=(0,d.useRef)(!1),[Vd,d4]=(0,d.useState)([]),[C2,c4]=(0,d.useState)([]),[zd,_d]=(0,d.useState)(!1),[si,Bn]=(0,d.useState)(null),[Dr,B2]=(0,d.useState)(null),[h4,bn]=(0,d.useState)(null),[Td,b2]=(0,d.useState)(null),dr=Kg[Mn],Ur=dr+3,ca=i.date,Nd=(0,d.useRef)(null),jn=(0,d.useRef)(0),Ua=(c,m)=>{g({type:c,text:m}),clearTimeout(Nd.current),Nd.current=setTimeout(()=>g({type:"",text:""}),3200)},pt=async(c,m)=>{let{data:B,error:T}=await a.rpc(c,m||{});if(T)throw T;return B},Nt=async(c,m)=>{try{let B=await c();return await j2(!0),m&&Ua("success",typeof m=="function"?m(B):m),B}catch(B){Ua("error",Ln(B)),await j2(!0);return}},Ht=(0,d.useMemo)(()=>{if(z==="today")return{start:ca,end:ca};if(z==="week"){let B=Uf(ca);return{start:B,end:L2(B,6)}}let c=A||ca,m=S||c;return c<=m?{start:c,end:m}:{start:m,end:c}},[z,A,S,ca]);(0,d.useEffect)(()=>{let c=setInterval(()=>n(m=>{let B=Fg();return B.date===m.date&&B.time===m.time?m:B}),3e4);return()=>clearInterval(c)},[]);let u4=async()=>{try{let c=await pt("work_current_member"),m=await pt("work_list_people");return l(c),s(m||[]),he(new Set((m||[]).filter(B=>Rg.includes(B.role)).map(B=>B.member_id))),x(""),!0}catch(c){return x(Ln(c)),!1}},j2=async c=>{let m=++jn.current;c||C(!0);try{let B=r&&r.fetchAllData?r.fetchAllData:w=>w(),T=w=>{if(w&&w.error)throw w.error;return w&&w.data||[]},dt=T(await B(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).lte("start_date",Ht.end).gte("end_date",Ht.start))),qt=T(await B(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).lte("end_date",ca).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),$t=new Set(dt.map(w=>w.id)),wt=qt.map(w=>w.id).filter(w=>!$t.has(w)),ya=[];if(wt.length&&(ya=T(await B(()=>a.from("work_items").select("*, work_assignees(*)").in("id",wt)))),m!==jn.current)return;let Wa=[];for(let w of[...dt,...ya]){let{work_assignees:D,...Ct}=w;for(let Bt of D||[])Wa.push({key:Bt.id,item:{...Ct,assigneeCount:(D||[]).length},a:Bt})}k(Wa)}catch(B){m===jn.current&&Ua("error","讀取失敗："+Ln(B))}finally{m===jn.current&&!c&&C(!1)}};(0,d.useEffect)(()=>{u4()},[]),(0,d.useEffect)(()=>{o&&j2(!1)},[o,Ht.start,Ht.end,ca]),(0,d.useEffect)(()=>{z==="custom"&&!A&&(O(ca),Ft(L2(ca,6)))},[z]);let Wn=(0,d.useMemo)(()=>{let c={};return h.forEach(m=>{c[m.member_id]={name:m.name,role:m.role}}),c},[h]),If=o?Wn[o]:null,W2=(0,d.useMemo)(()=>h.filter(c=>Rg.includes(c.role)),[h]),{overdueRows:Hn,groups:H2,total:Ed}=(0,d.useMemo)(()=>{let c=p.map(w=>{let D=w.a.status==="done",Ct=w.a.status==="awaiting_confirm",Bt=!!w.a.skipped_at||w.a.status==="on_hold",Ot=Tt(w.item.end_time),K=!D&&!Ct&&!Bt&&(w.item.end_date<i.date||w.item.end_date===i.date&&Ot&&Ot<i.time);return{...w,done:D,awaiting:Ct,skipped:Bt,overdue:K,isMine:w.a.member_id===o,isCreator:w.item.creator_member_id===o,isRoutine:w.item.assigneeCount===1&&w.item.creator_member_id===w.a.member_id,isRecurring:!!w.item.recurring_rule_id,person:Wn[w.a.member_id]}}),m=ba.trim().toLowerCase(),B=w=>!m||[w.item.title,w.item.note,w.person&&w.person.name].some(D=>D&&String(D).toLowerCase().includes(m)),T=c.filter(w=>(L==="mine"?w.isMine||w.isCreator:Ea.has(w.a.member_id))&&B(w)),dt=T.filter(w=>w.overdue).sort((w,D)=>(w.item.end_date+Tt(w.item.end_time)).localeCompare(D.item.end_date+Tt(D.item.end_time))||(w.person&&w.person.name||"").localeCompare(D.person&&D.person.name||"")),qt=T.filter(w=>!w.overdue&&w.item.start_date<=Ht.end&&w.item.end_date>=Ht.start),$t={};qt.forEach(w=>{($t[w.item.start_date]=$t[w.item.start_date]||[]).push(w)});let wt=Object.keys($t).sort().map(w=>{let D=$t[w].sort((Bt,Ot)=>{if(L==="mine")return Bt.a.sort_order-Ot.a.sort_order||String(Bt.a.created_at).localeCompare(String(Ot.a.created_at));let K=Tt(Bt.item.start_time)||"99:99",it=Tt(Ot.item.start_time)||"99:99";return K.localeCompare(it)||(Bt.person&&Bt.person.name||"").localeCompare(Ot.person&&Ot.person.name||"")}),Ct=L==="mine"&&w>=Ht.start&&!m;return{date:w,rows:D,canMove:Ct}}),ya=dt,Wa=wt;if(yt.col){let w=yt.dir==="asc"?1:-1,D=(K,it)=>String(K||"").localeCompare(String(it||""),"zh-Hant"),Ct=K=>K.done?3:K.awaiting?2:K.skipped?1:0,Ot={title:(K,it)=>D(K.item.title,it.item.title),who:(K,it)=>D(K.person&&K.person.name,it.person&&it.person.name),status:(K,it)=>Ct(K)-Ct(it),priority:(K,it)=>(Ig[K.item.priority]??1)-(Ig[it.item.priority]??1),hours:(K,it)=>{let Zr=$g(K.item),pi=$g(it.item);return Zr==null&&pi==null?0:Zr==null?2*w:pi==null?-2*w:Zr-pi},date:(K,it)=>(K.item.start_date+Tt(K.item.start_time)).localeCompare(it.item.start_date+Tt(it.item.start_time))}[yt.col];if(Ot){let K=it=>[...it].sort((Zr,pi)=>w*Ot(Zr,pi));yt.col==="date"?(ya=K(dt),Wa=[...wt].sort((it,Zr)=>w*it.date.localeCompare(Zr.date))):(ya=K(dt),Wa=wt.map(it=>({...it,rows:K(it.rows)})))}Wa=Wa.map(K=>({...K,canMove:!1}))}return{overdueRows:ya,groups:Wa,total:dt.length+qt.length}},[p,i,o,L,Ea,Ht,Wn,ba,yt]),Sn=Jg.filter(c=>c.locked||!mn.includes(c.id)),s4=c=>typeof c.w=="function"?c.w(dr):c.w,g4=c=>typeof c.min=="function"?c.min(dr):c.min,Od=`56px ${Sn.map(s4).join(" ")}`,p4=56+Sn.reduce((c,m)=>c+g4(m),0)+16,gi=(c,m,B)=>Nt(()=>{let T={...c.item,...m};return pt("work_update_routine",{p_item_id:T.id,p_title:T.title,p_start_date:T.start_date,p_start_time:T.start_time||null,p_end_date:T.end_date,p_end_time:T.end_time||null,p_priority:T.priority||"normal",p_note:T.note||null,p_meeting_flag:null})},B),f4=(c,m,B)=>{if(!m||!B){Ua("error","日期必填");return}let T=m,dt=B;if(m!==c.item.start_date&&B===c.item.end_date&&(dt=L2(m,r4(c.item.end_date,c.item.start_date))),dt<T){Ua("error","結束日期不能早於開始日期");return}let qt=!(T<=Ht.end&&dt>=Ht.start);return gi(c,{start_date:T,end_date:dt},qt?`已改到 ${Na(T)}（目前顯示範圍看不到，切換範圍就會出現）`:null)},v4=(c,m,B)=>gi(c,{start_time:m||null,end_time:B||null}),k4=(c,m)=>{if(!m){Ua("error","任務名稱不能空白");return}return gi(c,{title:m})},Pf=c=>Nt(()=>pt("work_complete",{p_item_id:c.item.id,p_note:null}),"已完成"),x4=(c,m)=>Nt(()=>pt("work_set_status",{p_item_id:c.item.id,p_status:m}),m==="done"&&c.item.creator_member_id!==o?"已完成，等待派工者確認":"狀態已更新"),L4=c=>Nt(()=>pt("work_confirm",{p_assignee_id:c.a.id}),"已確認完成"),M4=c=>Nt(()=>pt("work_return",{p_assignee_id:c.a.id,p_note:null}),"已退回，對方會收到提醒"),An=(c,m)=>Nt(()=>pt("work_move",{p_item_id:c.item.id,p_where:m})),m4=c=>Nt(()=>pt("work_copy",{p_item_id:c.item.id}),"複製成功"),y4=c=>f({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或擱置不會刪除，標記「取消」並保留紀錄`,onConfirm:async()=>{f(null),await Nt(()=>pt("work_delete",{p_item_id:c.item.id}),m=>m==="canceled"?"這筆已有進度紀錄，已改為取消並保留紀錄":"已刪除")}}),tv=async()=>{let c=ja.trim();if(!c||wn)return;W(!0);let m=Oa||ca,B=await Nt(()=>pt("work_create_routine",{p_title:c,p_start_date:m,p_end_date:m}));if(W(!1),B){da("");let T=m<=Ht.end&&m>=Ht.start;Ua("success",T?"已新增":`已新增到 ${Na(m)}（目前顯示範圍看不到，切換範圍就會出現）`)}},w4=async c=>{W(!0);let m;if(lt.mode==="editRule")m=await Nt(()=>pt("work_update_rule",{p_rule_id:lt.rule.id,p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:c.isActive}),"週期工作已儲存（只影響之後產生的工作）"),m!==void 0&&await Vn();else if(c.repeat==="none"&&c.assigneeIds&&!(c.assigneeIds.length===1&&c.assigneeIds[0]===o)){let B=c.assigneeIds.some(T=>T!==o);m=await Nt(()=>pt("work_assign_create",{p_title:c.title,p_assignee_ids:c.assigneeIds,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note}),B?"已指派，對方會收到提醒":"已新增")}else c.repeat==="none"?m=await Nt(()=>pt("work_create_routine",{p_title:c.title,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已新增"):m=await Nt(()=>pt("work_create_rule",{p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已建立週期工作，之後會在凌晨自動出現在清單");W(!1),m!==void 0&&Da(null)},Vn=async()=>{try{let{data:c,error:m}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(m)throw m;d4(c||[])}catch(c){Ua("error","讀取週期工作失敗："+Ln(c))}},zn=async()=>{try{c4(await pt("work_notifications_list")||[])}catch{}};(0,d.useEffect)(()=>{if(!o)return;zn();let c=setInterval(zn,6e4);return()=>clearInterval(c)},[o]);let S2=C2.filter(c=>!c.read_at).length,C4=async()=>{let c=!zd;_d(c),c&&await zn()},B4=async()=>{try{await pt("work_notifications_read",{p_ids:null}),await zn()}catch(c){Ua("error",Ln(c))}},b4={assigned:"指派工作給你",awaiting_confirm:"完成了工作，等你確認",confirmed:"已確認你的工作完成",returned:"把工作退回給你"},Dd=async()=>{Cn(!0),await Vn()};(0,d.useEffect)(()=>{!lt&&w2.current&&(w2.current=!1,Dd())},[lt]);let j4=async c=>{await Nt(()=>pt("work_update_rule",{p_rule_id:c.id,p_title:c.title,p_freq:c.freq,p_weekdays_only:c.weekdays_only,p_week_days:c.week_days,p_month_day:c.month_day,p_month_last_day:c.month_last_day,p_start_date:c.start_date,p_until_date:c.until_date,p_start_time:c.start_time,p_end_time:c.end_time,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:!c.is_active}),c.is_active?"已暫停":"已啟用")!==void 0&&await Vn()},W4=c=>f({title:"警告",confirmText:"刪除",message:`確定刪除週期工作「${c.title}」？
清單中還沒開始的幾次會一併移除，已過去或已有進度的紀錄會保留`,onConfirm:async()=>{f(null),await Nt(()=>pt("work_delete_rule",{p_rule_id:c.id}),"週期工作已刪除")!==void 0&&await Vn()}}),H4=async(c,m)=>{let B=Dr;if(B2(null),b2(null),bn(null),!B||B.date!==c.date||B.key===m.key)return;let T=c.rows.filter(wt=>!wt.overdue),dt=T.findIndex(wt=>wt.key===B.key),qt=T.findIndex(wt=>wt.key===m.key),$t=c.rows.find(wt=>wt.key===B.key);!$t||dt<0||qt<0||await Nt(()=>pt("work_move_to",{p_item_id:$t.item.id,p_target_item_id:m.item.id,p_after:dt<qt}))},pe="flex items-center bg-slate-100 p-1 rounded-full shrink-0",cr=c=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,ma=si?[...Hn,...H2.flatMap(c=>c.rows)].find(c=>c.key===si.key):null,_n=ma?H2.find(c=>c.rows.some(m=>m.key===ma.key)):null,Ud=(c,m)=>{let B=c.isCreator,T=c.isMine&&c.isRoutine,dt=m?m.rows.filter(w=>!w.overdue):[],qt=!!m&&m.canMove&&T&&!c.overdue,$t=Td===c.key&&Dr&&Dr.key!==c.key,wt=c.done||c.skipped,ya=(Wn[c.item.creator_member_id]||{}).name,Wa=w=>{switch(w.id){case"title":return d.default.createElement("div",{key:w.id,className:"min-w-0 w-full flex items-start gap-1.5"},d.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},c.isRecurring&&d.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},d.default.createElement(xn,{size:Math.round(dr*.95)})),c.overdue&&d.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},d.default.createElement(Md,{size:Math.round(dr*.8)})," 逾期")),d.default.createElement("div",{className:"min-w-0 flex-1"},d.default.createElement(t4,{value:c.item.title,placeholder:"工作摘要",canEdit:B,onSave:D=>k4(c,D),className:`font-medium ${wt?"text-slate-400 line-through":c.overdue?"text-red-600":"text-slate-900"}`}),c.item.creator_member_id!==c.a.member_id&&ya&&d.default.createElement("div",{className:"tbc-from text-[0.78em] text-slate-400 px-0 -mt-0.5"},"派工者：",ya)));case"who":return d.default.createElement("div",{key:w.id,className:"min-w-0"},d.default.createElement(Qf,{person:c.person,size:Ur}));case"date":{let D=c.item.start_date!==c.item.end_date;return d.default.createElement("div",{key:w.id,className:`min-w-0 ${c.overdue?"text-red-600":"text-slate-700"}`},d.default.createElement(a4,{type:"date",a:c.item.start_date,b:c.item.end_date,canEdit:B,onSave:(Ct,Bt)=>f4(c,Ct,Bt)},D?`${Na(c.item.start_date)} → ${Na(c.item.end_date)}`:Na(c.item.start_date)))}case"time":{let D=Tt(c.item.start_time),Ct=Tt(c.item.end_time);return d.default.createElement("div",{key:w.id,className:"min-w-0 text-slate-700"},d.default.createElement(a4,{type:"time",a:D,b:Ct,canEdit:B,onSave:(Bt,Ot)=>v4(c,Bt,Ot)},D||Ct?`${D||"—"} ~ ${Ct||"—"}`:d.default.createElement("span",{className:"text-slate-300"},B?"時間設定":"")))}case"hours":return d.default.createElement("div",{key:w.id,className:"text-slate-500 text-[0.9em]"},qf(c.item)||"");case"priority":return d.default.createElement("div",{key:w.id},d.default.createElement("button",{type:"button",disabled:!B,onClick:()=>gi(c,{priority:Yf[c.item.priority]||"normal"}),title:B?"點一下切換":"",className:`tbc-prio text-[0.75em] px-2 py-0.5 rounded border font-bold ${Pg[c.item.priority]||Pg.normal} ${B?"hover:brightness-95 cursor-pointer":"cursor-default"}`},Gf[c.item.priority]||"普通"));case"note":return d.default.createElement("div",{key:w.id,className:"min-w-0 w-full"},d.default.createElement(t4,{value:c.item.note,placeholder:"新增備註",centerEmpty:!0,canEdit:B,onSave:D=>gi(c,{note:D||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let D=c.done?"done":c.awaiting?"awaiting":c.skipped?"on_hold":"pending",Ct=D==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":D==="awaiting"?"bg-sky-50 border-sky-200 text-sky-700":D==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600",Bt={pending:"待處理",done:"完成",on_hold:"擱置",awaiting:"待確認"}[D];return c.awaiting&&c.isCreator&&!c.isMine?d.default.createElement("div",{key:w.id,className:"flex items-center gap-1.5 tbc-review"},d.default.createElement("button",{type:"button",onClick:()=>L4(c),className:"h-8 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[0.85em] font-medium transition-colors inline-flex items-center gap-1"},d.default.createElement(wg,{size:14}),"確認"),d.default.createElement("button",{type:"button",onClick:()=>M4(c),className:"h-8 px-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-[0.85em] font-medium transition-colors inline-flex items-center gap-1"},d.default.createElement(Eg,{size:14}),"退回")):c.isMine?d.default.createElement("select",{key:w.id,value:D,onChange:Ot=>x4(c,Ot.target.value),"aria-label":"狀態",title:"點一下改變狀態",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${Ct}`},d.default.createElement("option",{value:"pending"},"待處理"),d.default.createElement("option",{value:"done"},"完成"),d.default.createElement("option",{value:"on_hold"},"擱置"),D==="awaiting"&&d.default.createElement("option",{value:"awaiting",disabled:!0},"待確認")):d.default.createElement("span",{key:w.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${Ct}`},Bt)}default:return null}};return d.default.createElement("div",{key:c.key,draggable:qt&&h4===c.key,onDragStart:w=>{B2({key:c.key,date:m.date}),w.dataTransfer.effectAllowed="move";try{w.dataTransfer.setData("text/plain",c.key)}catch{}},onDragOver:w=>{Dr&&m&&Dr.date===m.date&&!c.overdue&&(w.preventDefault(),Td!==c.key&&b2(c.key))},onDrop:w=>{w.preventDefault(),m&&H4(m,c)},onDragEnd:()=>{B2(null),b2(null),bn(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors
                    ${c.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Dr&&Dr.key===c.key?"opacity-40":""}
                    ${$t?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:Od}},d.default.createElement("div",{className:"flex items-center gap-0.5 px-2"},qt?d.default.createElement("span",{onMouseDown:()=>bn(c.key),onMouseUp:()=>bn(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},d.default.createElement(yg,{size:Ur})):d.default.createElement("span",{style:{width:Ur}}),B?d.default.createElement("button",{onClick:w=>{let D=w.currentTarget.getBoundingClientRect();Bn({key:c.key,x:Math.min(D.left,window.innerWidth-220),y:Math.min(D.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},d.default.createElement(mg,{size:Ur})):d.default.createElement("span",{style:{width:Ur+8}})),Sn.map(w=>{let D=w.id==="title"||w.id==="note";return d.default.createElement("div",{key:w.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${D?"[&>*]:w-full":"justify-center text-center"}`},Wa(w))}))};return d.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:dr}},d.default.createElement(Gg,{active:"work",shell:e}),d.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},d.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},d.default.createElement("div",{className:"flex items-center gap-4 min-w-0"},d.default.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:dr*1.45}},"工作日誌"),d.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},d.default.createElement(Ag,{size:16,className:"text-slate-400 shrink-0"}),d.default.createElement("input",{type:"text",value:ba,onChange:c=>ci(c.target.value),onKeyDown:c=>{c.key==="Escape"&&ci("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),ba&&d.default.createElement("button",{type:"button",onClick:()=>ci(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},d.default.createElement(v2,{size:14})))),d.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},d.default.createElement("button",{onClick:()=>Da({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},d.default.createElement(kn,{size:16}),"新增"),d.default.createElement("div",{className:pe},d.default.createElement("button",{onClick:Dd,className:cr(!1)},d.default.createElement(kn,{size:14,className:"text-slate-500"}),"週期工作")),d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:C4,"aria-label":"提醒",title:"提醒",className:"tbc-bell relative h-11 w-11 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"},d.default.createElement(Ng,{size:18}),S2>0&&d.default.createElement("span",{className:"tbc-bell-count absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[11px] leading-[18px] text-center font-bold"},S2)),zd&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>_d(!1)}),d.default.createElement("div",{className:"tbc-notes absolute right-0 top-full mt-2 z-40 w-80 max-h-96 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},d.default.createElement("div",{className:"flex items-center justify-between px-2 pb-2 mb-1 border-b border-slate-100"},d.default.createElement("span",{className:"font-medium text-slate-800"},"提醒"),d.default.createElement("button",{onClick:B4,disabled:S2===0,className:"text-[0.85em] text-indigo-600 hover:text-indigo-700 disabled:text-slate-300"},"全部標為已讀")),C2.length===0?d.default.createElement("div",{className:"text-center py-8 text-slate-400 text-[0.9em]"},"目前沒有提醒"):C2.map(c=>d.default.createElement("div",{key:c.id,className:`px-2 py-2 rounded-lg text-[0.9em] ${c.read_at?"text-slate-500":"bg-indigo-50/60 text-slate-800"}`},d.default.createElement("div",null,d.default.createElement("b",{className:"font-medium"},c.from_name||"有人")," ",b4[c.kind]||""),d.default.createElement("div",{className:"truncate"},"「",c.item_title,"」")))))),d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>ui(c=>!c),className:`${pe} !p-1.5`},d.default.createElement("span",{className:cr(yn)},d.default.createElement(x2,{size:14,className:"text-slate-500"}),"隱藏")),yn&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>ui(!1)}),d.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},Jg.filter(c=>!c.locked).map(c=>d.default.createElement("label",{key:c.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${c.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},d.default.createElement("input",{type:"checkbox",disabled:c.locked,checked:c.locked||!mn.includes(c.id),onChange:()=>hi(c.id),className:"accent-indigo-600"}),c.label,c.locked&&d.default.createElement(Cd,{size:11})))))),d.default.createElement("div",{className:pe,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([c,m,B])=>d.default.createElement("button",{key:c,onClick:()=>y2(c),title:m,"aria-label":`文字${m}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${Mn===c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:B}},"A"))))),v?d.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},d.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},d.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},d.default.createElement(Cd,{size:30})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),d.default.createElement("p",{className:"text-slate-500 font-normal"},v),d.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧師、行政與管理員。"))):d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 relative z-[15] shrink-0 space-y-3"},d.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},d.default.createElement("div",{className:pe},d.default.createElement("button",{onClick:()=>j("mine"),className:cr(L==="mine")},"我的"),d.default.createElement("button",{onClick:()=>j("all"),className:cr(L==="all")},"全部")),L==="all"&&d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>Ad(c=>!c),className:`${pe} !p-1.5`},d.default.createElement("span",{className:cr(Sd)},d.default.createElement(p2,{size:14,className:"text-slate-500"}),"人員（",Ea.size,"/",W2.length,"）")),Sd&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Ad(!1)}),d.default.createElement("div",{className:"absolute left-0 top-full mt-2 z-40 w-56 max-h-80 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},d.default.createElement("div",{className:"flex gap-2 px-1 pb-2 mb-1 border-b border-slate-100"},d.default.createElement("button",{onClick:()=>he(new Set(W2.map(c=>c.member_id))),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全選"),d.default.createElement("button",{onClick:()=>he(new Set),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全不選")),W2.map(c=>d.default.createElement("label",{key:c.member_id,className:"flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none text-slate-700 hover:bg-slate-50 cursor-pointer"},d.default.createElement("input",{type:"checkbox",checked:Ea.has(c.member_id),onChange:()=>he(m=>{let B=new Set(m);return B.has(c.member_id)?B.delete(c.member_id):B.add(c.member_id),B}),className:"accent-indigo-600"}),c.name))))),d.default.createElement("div",{className:pe},d.default.createElement("button",{onClick:()=>b("today"),className:cr(z==="today")},"今日"),d.default.createElement("button",{onClick:()=>b("week"),className:cr(z==="week")},"本週"),d.default.createElement("button",{onClick:()=>b("custom"),className:cr(z==="custom")},"自訂")),z==="custom"&&d.default.createElement("div",{className:"flex items-center gap-2"},d.default.createElement("input",{type:"date",value:A,onChange:c=>O(c.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),d.default.createElement("span",{className:"text-slate-400"},"～"),d.default.createElement("input",{type:"date",value:S,min:A,onChange:c=>Ft(c.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),d.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},Ht.start===Ht.end?Na(Ht.start):`${Na(Ht.start)} ～ ${Na(Ht.end)}`,d.default.createElement("span",{className:"ml-3"},"共 ",Ed," 筆")))),d.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},d.default.createElement("div",{className:"space-y-4",style:{minWidth:p4}},d.default.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:Od}},d.default.createElement("span",{className:"py-2"}),Sn.map(c=>c.sortable?d.default.createElement("button",{key:c.id,type:"button",onClick:()=>ue(c.id),title:"點一下排序","aria-sort":yt.col===c.id?yt.dir==="asc"?"ascending":"descending":"none",className:`py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap font-medium inline-flex items-center justify-center gap-0.5 hover:bg-slate-200/70 transition-colors ${yt.col===c.id?"text-indigo-600":""}`},c.label,yt.col===c.id&&(yt.dir==="asc"?d.default.createElement(yd,{size:14}):d.default.createElement(wd,{size:14}))):d.default.createElement("span",{key:c.id,className:"py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap"},c.label))),y&&p.length===0?d.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):Ed===0?d.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},ba.trim()?`找不到符合「${ba.trim()}」的工作（只搜尋目前顯示的範圍）`:"新增一筆工作，開始記錄"):d.default.createElement(d.default.Fragment,null,Hn.length>0&&d.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},d.default.createElement(Md,{size:Ur})," 逾期未完成 ",d.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},Hn.length)),Hn.map(c=>Ud(c,null))),H2.map(c=>{let m=Zf(c.date,ca);return d.default.createElement("div",{key:c.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},d.default.createElement("span",{className:`font-bold ${m.tag==="今天"?"text-indigo-600":"text-slate-800"}`},m.text)),c.rows.map(B=>Ud(B,c)))}))))),si&&ma&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>Bn(null),onContextMenu:c=>{c.preventDefault(),Bn(null)}}),d.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:si.x,top:si.y,fontSize:dr}},(()=>{let c=_n?_n.rows.filter(dt=>!dt.overdue):[],m=c.findIndex(dt=>dt.key===ma.key),B=!!_n&&_n.canMove&&m>=0,T=(dt,qt,$t,wt,ya)=>d.default.createElement("button",{disabled:wt,onClick:()=>{Bn(null),$t()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${ya?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},d.default.createElement(dt,{size:Ur-1}),qt);return d.default.createElement(d.default.Fragment,null,ma.isRoutine&&d.default.createElement(d.default.Fragment,null,T(bg,"移到頂端",()=>An(ma,"top"),!B||m===0),T(yd,"上一行",()=>An(ma,"up"),!B||m===0),T(wd,"下一行",()=>An(ma,"down"),!B||m===c.length-1),T(jg,"移到底部",()=>An(ma,"bottom"),!B||m===c.length-1),d.default.createElement("div",{className:"h-px bg-slate-100 my-1"}),T(Bg,"複製",()=>m4(ma))),T(md,"刪除",()=>y4(ma),!1,!0))})())),lt&&d.default.createElement(Kf,{key:lt.mode+(lt.rule?lt.rule.id:""),mode:lt.mode,initial:lt.rule,presetRepeat:lt.preset,today:ca,busy:wn,onClose:()=>Da(null),onSubmit:w4,people:h,meId:o}),ge&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},d.default.createElement(xn,{className:"text-indigo-600",size:20})," 我的週期工作"),d.default.createElement("button",{onClick:()=>Cn(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(v2,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},d.default.createElement("button",{onClick:()=>{Cn(!1),Da({mode:"createRule",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},d.default.createElement(kn,{size:16}),"新增週期工作"),Vd.length===0?d.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"還沒有週期工作。按上面的「+ 新增週期工作」建立。"):Vd.map(c=>d.default.createElement("div",{key:c.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${c.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},d.default.createElement("div",{className:"min-w-0"},d.default.createElement("div",{className:`font-medium truncate ${c.is_active?"text-slate-900":"text-slate-400"}`},c.title),d.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},Xf(c),c.start_time?`　${Tt(c.start_time)}${c.end_time?"~"+Tt(c.end_time):""}`:"",c.until_date?`　到 ${Na(c.until_date)}`:"",c.is_active?"":"　（暫停）")),d.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},d.default.createElement("button",{onClick:()=>{w2.current=!0,Cn(!1),Da({mode:"editRule",rule:c})},className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},d.default.createElement(Sg,{size:16})),d.default.createElement("button",{onClick:()=>j4(c),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${c.is_active?"bg-emerald-50 text-emerald-600 hover:bg-emerald-100":"bg-amber-50 text-amber-600 hover:bg-amber-100"}`,title:c.is_active?"啟用":"暫停","aria-label":c.is_active?"啟用":"暫停"},c.is_active?d.default.createElement(Hg,{size:16}):d.default.createElement(Wg,{size:16})),d.default.createElement("button",{onClick:()=>W4(c),className:"tbc-rule-del p-2.5 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg active:scale-95 transition-colors",title:"刪除","aria-label":"刪除週期工作"},d.default.createElement(md,{size:16})))))))),E.text&&d.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},d.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${E.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},d.default.createElement("div",{className:"shrink-0 mt-0.5"},E.type==="success"?d.default.createElement(Cg,{size:18}):d.default.createElement(di,{size:18})),d.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},E.text))),u&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"p-8 text-center"},d.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},d.default.createElement(di,{size:32})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),d.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},d.default.createElement("button",{onClick:()=>f(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},i4=Rf;var n4=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
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
    --color-sky-200: oklch(90.1% 0.058 230.902);
    --color-sky-700: oklch(50% 0.134 242.749);
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
  .my-1 {
    margin-block: var(--spacing);
  }
  .-mt-0\\.5 {
    margin-top: calc(var(--spacing) * -0.5);
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
  .h-\\[18px\\] {
    height: 18px;
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
  .max-h-96 {
    max-height: calc(var(--spacing) * 96);
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
  .w-80 {
    width: calc(var(--spacing) * 80);
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
  .px-0 {
    padding-inline: 0px;
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
  .text-\\[0\\.78em\\] {
    font-size: 0.78em;
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
  .disabled\\:text-slate-300:disabled {
    color: var(--color-slate-300);
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
`;var Jf="https://jcepavwocdujoeoqxvsd.supabase.co",Ff="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",jd=document.createElement("style");jd.id="tbc-one-css";jd.textContent=n4;document.head.appendChild(jd);var ce=window.__TBC_SB||window.supabase.createClient(Jf,Ff),$f=({page:t})=>{let[a,r]=(0,mt.useState)(void 0),[e,i]=(0,mt.useState)(""),[n,o]=(0,mt.useState)({status:"loading",name:"",role:"member"});(0,mt.useEffect)(()=>{let v=!0;ce.auth.getSession().then(({data:p})=>{v&&r(p.session||null)});let{data:x}=ce.auth.onAuthStateChange((p,k)=>{v&&r(k||null)});return()=>{v=!1,x&&x.subscription&&x.subscription.unsubscribe()}},[]);let l=a&&a.user&&a.user.id;(0,mt.useEffect)(()=>{if(!a)return;let v=!0;return qg(ce,a).then(async x=>{if(v){if(x.status!=="ok"||!Ug.includes(x.role)){try{await ce.auth.signOut()}catch{}i("權限不足"),r(null);return}i(""),o(x)}}),()=>{v=!1}},[l]);let h=async()=>{try{await ce.auth.signOut()}catch{}r(null),o({status:"loading",name:"",role:"member"})};if(a===void 0)return mt.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return mt.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},mt.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},mt.default.createElement(k2,{size:30})),mt.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),mt.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),mt.default.createElement(Yg,{supabase:ce,notice:e}));if(n.status!=="ok")return mt.default.createElement("div",{className:"h-[100dvh] bg-white"});let s={identity:n,onLogout:h};return t==="work"?mt.default.createElement(i4,{session:a,supabase:ce,utils:{},shell:s}):mt.default.createElement(Qg,{shell:s})},o4=document.getElementById("root");(0,l4.createRoot)(o4).render(mt.default.createElement($f,{page:o4.getAttribute("data-page")||"home"}));})();
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
