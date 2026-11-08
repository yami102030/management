(()=>{var U4=Object.create;var tc=Object.defineProperty;var Z4=Object.getOwnPropertyDescriptor;var q4=Object.getOwnPropertyNames;var G4=Object.getPrototypeOf,Y4=Object.prototype.hasOwnProperty;var gr=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var X4=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of q4(a))!Y4.call(t,i)&&i!==r&&tc(t,i,{get:()=>a[i],enumerable:!(e=Z4(a,i))||e.enumerable});return t};var Xr=(t,a,r)=>(r=t!=null?U4(G4(t)):{},X4(a||!t||!t.__esModule?tc(r,"default",{value:t,enumerable:!0}):r,t));var uc=gr(T=>{"use strict";var X2=Symbol.for("react.transitional.element"),Q4=Symbol.for("react.portal"),K4=Symbol.for("react.fragment"),J4=Symbol.for("react.strict_mode"),R4=Symbol.for("react.profiler"),F4=Symbol.for("react.consumer"),$4=Symbol.for("react.context"),I4=Symbol.for("react.forward_ref"),P4=Symbol.for("react.suspense"),tp=Symbol.for("react.memo"),nc=Symbol.for("react.lazy"),ap=Symbol.for("react.activity"),ac=Symbol.iterator;function rp(t){return t===null||typeof t!="object"?null:(t=ac&&t[ac]||t["@@iterator"],typeof t=="function"?t:null)}var oc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lc=Object.assign,dc={};function Me(t,a,r){this.props=t,this.context=a,this.refs=dc,this.updater=r||oc}Me.prototype.isReactComponent={};Me.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};Me.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cc(){}cc.prototype=Me.prototype;function Q2(t,a,r){this.props=t,this.context=a,this.refs=dc,this.updater=r||oc}var K2=Q2.prototype=new cc;K2.constructor=Q2;lc(K2,Me.prototype);K2.isPureReactComponent=!0;var rc=Array.isArray;function Y2(){}var et={H:null,A:null,T:null,S:null},hc=Object.prototype.hasOwnProperty;function J2(t,a,r){var e=r.ref;return{$$typeof:X2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function ep(t,a){return J2(t.type,a,t.props)}function R2(t){return typeof t=="object"&&t!==null&&t.$$typeof===X2}function ip(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var ec=/\/+/g;function G2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?ip(""+t.key):a.toString(36)}function np(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Y2,Y2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Le(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case X2:case Q4:o=!0;break;case nc:return o=t._init,Le(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+G2(t,0):e,rc(i)?(r="",o!=null&&(r=o.replace(ec,"$&/")+"/"),Le(i,a,r,"",function(s){return s})):i!=null&&(R2(i)&&(i=ep(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(ec,"$&/")+"/")+o)),a.push(i)),1;o=0;var l=e===""?".":e+":";if(rc(t))for(var h=0;h<t.length;h++)e=t[h],n=l+G2(e,h),o+=Le(e,a,r,n,i);else if(h=rp(t),typeof h=="function")for(t=h.call(t),h=0;!(e=t.next()).done;)e=e.value,n=l+G2(e,h++),o+=Le(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return Le(np(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function Gn(t,a,r){if(t==null)return t;var e=[],i=0;return Le(t,e,"","",function(n){return a.call(r,n,i++)}),e}function op(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var ic=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},lp={map:Gn,forEach:function(t,a,r){Gn(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return Gn(t,function(){a++}),a},toArray:function(t){return Gn(t,function(a){return a})||[]},only:function(t){if(!R2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};T.Activity=ap;T.Children=lp;T.Component=Me;T.Fragment=K4;T.Profiler=R4;T.PureComponent=Q2;T.StrictMode=J4;T.Suspense=P4;T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=et;T.__COMPILER_RUNTIME={__proto__:null,c:function(t){return et.H.useMemoCache(t)}};T.cache=function(t){return function(){return t.apply(null,arguments)}};T.cacheSignal=function(){return null};T.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=lc({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!hc.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),l=0;l<n;l++)o[l]=arguments[l+2];e.children=o}return J2(t.type,i,e)};T.createContext=function(t){return t={$$typeof:$4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:F4,_context:t},t};T.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)hc.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var l=Array(o),h=0;h<o;h++)l[h]=arguments[h+2];i.children=l}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return J2(t,n,i)};T.createRef=function(){return{current:null}};T.forwardRef=function(t){return{$$typeof:I4,render:t}};T.isValidElement=R2;T.lazy=function(t){return{$$typeof:nc,_payload:{_status:-1,_result:t},_init:op}};T.memo=function(t,a){return{$$typeof:tp,type:t,compare:a===void 0?null:a}};T.startTransition=function(t){var a=et.T,r={};et.T=r;try{var e=t(),i=et.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(Y2,ic)}catch(n){ic(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),et.T=a}};T.unstable_useCacheRefresh=function(){return et.H.useCacheRefresh()};T.use=function(t){return et.H.use(t)};T.useActionState=function(t,a,r){return et.H.useActionState(t,a,r)};T.useCallback=function(t,a){return et.H.useCallback(t,a)};T.useContext=function(t){return et.H.useContext(t)};T.useDebugValue=function(){};T.useDeferredValue=function(t,a){return et.H.useDeferredValue(t,a)};T.useEffect=function(t,a){return et.H.useEffect(t,a)};T.useEffectEvent=function(t){return et.H.useEffectEvent(t)};T.useId=function(){return et.H.useId()};T.useImperativeHandle=function(t,a,r){return et.H.useImperativeHandle(t,a,r)};T.useInsertionEffect=function(t,a){return et.H.useInsertionEffect(t,a)};T.useLayoutEffect=function(t,a){return et.H.useLayoutEffect(t,a)};T.useMemo=function(t,a){return et.H.useMemo(t,a)};T.useOptimistic=function(t,a){return et.H.useOptimistic(t,a)};T.useReducer=function(t,a,r){return et.H.useReducer(t,a,r)};T.useRef=function(t){return et.H.useRef(t)};T.useState=function(t){return et.H.useState(t)};T.useSyncExternalStore=function(t,a,r){return et.H.useSyncExternalStore(t,a,r)};T.useTransition=function(){return et.H.useTransition()};T.version="19.2.8"});var Ya=gr((sv,sc)=>{"use strict";sc.exports=uc()});var yc=gr(lt=>{"use strict";function P2(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<Yn(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Sa(t){return t.length===0?null:t[0]}function Qn(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,l=t[o],h=o+1,s=t[h];if(0>Yn(l,r))h<i&&0>Yn(s,l)?(t[e]=s,t[h]=r,e=h):(t[e]=l,t[o]=r,e=o);else if(h<i&&0>Yn(s,r))t[e]=s,t[h]=r,e=h;else break t}}return a}function Yn(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}lt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(gc=performance,lt.unstable_now=function(){return gc.now()}):(F2=Date,pc=F2.now(),lt.unstable_now=function(){return F2.now()-pc});var gc,F2,pc,Xa=[],pr=[],dp=1,ga=null,Ut=3,tl=!1,mi=!1,yi=!1,al=!1,kc=typeof setTimeout=="function"?setTimeout:null,xc=typeof clearTimeout=="function"?clearTimeout:null,fc=typeof setImmediate<"u"?setImmediate:null;function Xn(t){for(var a=Sa(pr);a!==null;){if(a.callback===null)Qn(pr);else if(a.startTime<=t)Qn(pr),a.sortIndex=a.expirationTime,P2(Xa,a);else break;a=Sa(pr)}}function rl(t){if(yi=!1,Xn(t),!mi)if(Sa(Xa)!==null)mi=!0,ye||(ye=!0,me());else{var a=Sa(pr);a!==null&&el(rl,a.startTime-t)}}var ye=!1,wi=-1,Lc=5,Mc=-1;function mc(){return al?!0:!(lt.unstable_now()-Mc<Lc)}function $2(){if(al=!1,ye){var t=lt.unstable_now();Mc=t;var a=!0;try{t:{mi=!1,yi&&(yi=!1,xc(wi),wi=-1),tl=!0;var r=Ut;try{a:{for(Xn(t),ga=Sa(Xa);ga!==null&&!(ga.expirationTime>t&&mc());){var e=ga.callback;if(typeof e=="function"){ga.callback=null,Ut=ga.priorityLevel;var i=e(ga.expirationTime<=t);if(t=lt.unstable_now(),typeof i=="function"){ga.callback=i,Xn(t),a=!0;break a}ga===Sa(Xa)&&Qn(Xa),Xn(t)}else Qn(Xa);ga=Sa(Xa)}if(ga!==null)a=!0;else{var n=Sa(pr);n!==null&&el(rl,n.startTime-t),a=!1}}break t}finally{ga=null,Ut=r,tl=!1}a=void 0}}finally{a?me():ye=!1}}}var me;typeof fc=="function"?me=function(){fc($2)}:typeof MessageChannel<"u"?(I2=new MessageChannel,vc=I2.port2,I2.port1.onmessage=$2,me=function(){vc.postMessage(null)}):me=function(){kc($2,0)};var I2,vc;function el(t,a){wi=kc(function(){t(lt.unstable_now())},a)}lt.unstable_IdlePriority=5;lt.unstable_ImmediatePriority=1;lt.unstable_LowPriority=4;lt.unstable_NormalPriority=3;lt.unstable_Profiling=null;lt.unstable_UserBlockingPriority=2;lt.unstable_cancelCallback=function(t){t.callback=null};lt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Lc=0<t?Math.floor(1e3/t):5};lt.unstable_getCurrentPriorityLevel=function(){return Ut};lt.unstable_next=function(t){switch(Ut){case 1:case 2:case 3:var a=3;break;default:a=Ut}var r=Ut;Ut=a;try{return t()}finally{Ut=r}};lt.unstable_requestPaint=function(){al=!0};lt.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=Ut;Ut=t;try{return a()}finally{Ut=r}};lt.unstable_scheduleCallback=function(t,a,r){var e=lt.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:dp++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,P2(pr,t),Sa(Xa)===null&&t===Sa(pr)&&(yi?(xc(wi),wi=-1):yi=!0,el(rl,r-e))):(t.sortIndex=i,P2(Xa,t),mi||tl||(mi=!0,ye||(ye=!0,me()))),t};lt.unstable_shouldYield=mc;lt.unstable_wrapCallback=function(t){var a=Ut;return function(){var r=Ut;Ut=a;try{return t.apply(this,arguments)}finally{Ut=r}}}});var Cc=gr((pv,wc)=>{"use strict";wc.exports=yc()});var Bc=gr(qt=>{"use strict";var cp=Ya();function bc(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fr(){}var Zt={d:{f:fr,r:function(){throw Error(bc(522))},D:fr,C:fr,L:fr,m:fr,X:fr,S:fr,M:fr},p:0,findDOMNode:null},hp=Symbol.for("react.portal");function up(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hp,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var Ci=cp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Kn(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Zt;qt.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(bc(299));return up(t,a,null,r)};qt.flushSync=function(t){var a=Ci.T,r=Zt.p;try{if(Ci.T=null,Zt.p=2,t)return t()}finally{Ci.T=a,Zt.p=r,Zt.d.f()}};qt.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Zt.d.C(t,a))};qt.prefetchDNS=function(t){typeof t=="string"&&Zt.d.D(t)};qt.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=Kn(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Zt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Zt.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};qt.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=Kn(a.as,a.crossOrigin);Zt.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Zt.d.M(t)};qt.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=Kn(r,a.crossOrigin);Zt.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};qt.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=Kn(a.as,a.crossOrigin);Zt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Zt.d.m(t)};qt.requestFormReset=function(t){Zt.d.r(t)};qt.unstable_batchedUpdates=function(t,a){return t(a)};qt.useFormState=function(t,a,r){return Ci.H.useFormState(t,a,r)};qt.useFormStatus=function(){return Ci.H.useHostTransitionStatus()};qt.version="19.2.8"});var Hc=gr((vv,Wc)=>{"use strict";function jc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jc)}catch(t){console.error(t)}}jc(),Wc.exports=Bc()});var Zs=gr(L2=>{"use strict";var wt=Cc(),ah=Ya(),sp=Hc();function m(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function un(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function eh(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function ih(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Sc(t){if(un(t)!==t)throw Error(m(188))}function gp(t){var a=t.alternate;if(!a){if(a=un(t),a===null)throw Error(m(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return Sc(i),t;if(n===e)return Sc(i),a;n=n.sibling}throw Error(m(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,e=n;break}if(l===e){o=!0,e=i,r=n;break}l=l.sibling}if(!o){for(l=n.child;l;){if(l===r){o=!0,r=n,e=i;break}if(l===e){o=!0,e=n,r=i;break}l=l.sibling}if(!o)throw Error(m(189))}}if(r.alternate!==e)throw Error(m(190))}if(r.tag!==3)throw Error(m(188));return r.stateNode.current===r?t:a}function nh(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=nh(t),a!==null)return a;t=t.sibling}return null}var ot=Object.assign,pp=Symbol.for("react.element"),Jn=Symbol.for("react.transitional.element"),Vi=Symbol.for("react.portal"),We=Symbol.for("react.fragment"),oh=Symbol.for("react.strict_mode"),El=Symbol.for("react.profiler"),lh=Symbol.for("react.consumer"),Pa=Symbol.for("react.context"),V1=Symbol.for("react.forward_ref"),Dl=Symbol.for("react.suspense"),Ol=Symbol.for("react.suspense_list"),z1=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),Ul=Symbol.for("react.activity"),fp=Symbol.for("react.memo_cache_sentinel"),Ac=Symbol.iterator;function bi(t){return t===null||typeof t!="object"?null:(t=Ac&&t[Ac]||t["@@iterator"],typeof t=="function"?t:null)}var vp=Symbol.for("react.client.reference");function Zl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===vp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case We:return"Fragment";case El:return"Profiler";case oh:return"StrictMode";case Dl:return"Suspense";case Ol:return"SuspenseList";case Ul:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Vi:return"Portal";case Pa:return t.displayName||"Context";case lh:return(t._context.displayName||"Context")+".Consumer";case V1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z1:return a=t.displayName||null,a!==null?a:Zl(t.type)||"Memo";case vr:a=t._payload,t=t._init;try{return Zl(t(a))}catch{}}return null}var zi=Array.isArray,z=ah.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=sp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$r={pending:!1,data:null,method:null,action:null},ql=[],He=-1;function Ta(t){return{current:t}}function Ht(t){0>He||(t.current=ql[He],ql[He]=null,He--)}function at(t,a){He++,ql[He]=t.current,t.current=a}var _a=Ta(null),Fi=Ta(null),jr=Ta(null),Wo=Ta(null);function Ho(t,a){switch(at(jr,a),at(Fi,t),at(_a,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?D0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=D0(a),t=js(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ht(_a),at(_a,t)}function Ke(){Ht(_a),Ht(Fi),Ht(jr)}function Gl(t){t.memoizedState!==null&&at(Wo,t);var a=_a.current,r=js(a,t.type);a!==r&&(at(Fi,t),at(_a,r))}function So(t){Fi.current===t&&(Ht(_a),Ht(Fi)),Wo.current===t&&(Ht(Wo),dn._currentValue=$r)}var il,Vc;function Kr(t){if(il===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);il=a&&a[1]||"",Vc=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+il+t+Vc}var nl=!1;function ol(t,a){if(!t||nl)return"";nl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(x){var g=x}Reflect.construct(t,[],k)}else{try{k.call()}catch(x){g=x}t.call(k.prototype)}}else{try{throw Error()}catch(x){g=x}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(x){if(x&&g&&typeof x.stack=="string")return[x.stack,g.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],l=n[1];if(o&&l){var h=o.split(`
`),s=l.split(`
`);for(i=e=0;e<h.length&&!h[e].includes("DetermineComponentFrameRoot");)e++;for(;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;if(e===h.length||i===s.length)for(e=h.length-1,i=s.length-1;1<=e&&0<=i&&h[e]!==s[i];)i--;for(;1<=e&&0<=i;e--,i--)if(h[e]!==s[i]){if(e!==1||i!==1)do if(e--,i--,0>i||h[e]!==s[i]){var v=`
`+h[e].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=e&&0<=i);break}}}finally{nl=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Kr(r):""}function kp(t,a){switch(t.tag){case 26:case 27:case 5:return Kr(t.type);case 16:return Kr("Lazy");case 13:return t.child!==a&&a!==null?Kr("Suspense Fallback"):Kr("Suspense");case 19:return Kr("SuspenseList");case 0:case 15:return ol(t.type,!1);case 11:return ol(t.type.render,!1);case 1:return ol(t.type,!0);case 31:return Kr("Activity");default:return""}}function zc(t){try{var a="",r=null;do a+=kp(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Yl=Object.prototype.hasOwnProperty,_1=wt.unstable_scheduleCallback,ll=wt.unstable_cancelCallback,xp=wt.unstable_shouldYield,Lp=wt.unstable_requestPaint,ia=wt.unstable_now,Mp=wt.unstable_getCurrentPriorityLevel,dh=wt.unstable_ImmediatePriority,ch=wt.unstable_UserBlockingPriority,Ao=wt.unstable_NormalPriority,mp=wt.unstable_LowPriority,hh=wt.unstable_IdlePriority,yp=wt.log,wp=wt.unstable_setDisableYieldValue,sn=null,na=null;function yr(t){if(typeof yp=="function"&&wp(t),na&&typeof na.setStrictMode=="function")try{na.setStrictMode(sn,t)}catch{}}var oa=Math.clz32?Math.clz32:Bp,Cp=Math.log,bp=Math.LN2;function Bp(t){return t>>>=0,t===0?32:31-(Cp(t)/bp|0)|0}var Rn=256,Fn=262144,$n=4194304;function Jr(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function e2(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var l=e&134217727;return l!==0?(e=l&~n,e!==0?i=Jr(e):(o&=l,o!==0?i=Jr(o):r||(r=l&~t,r!==0&&(i=Jr(r))))):(l=e&~n,l!==0?i=Jr(l):o!==0?i=Jr(o):r||(r=e&~t,r!==0&&(i=Jr(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function gn(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function jp(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uh(){var t=$n;return $n<<=1,($n&62914560)===0&&($n=4194304),t}function dl(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function pn(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wp(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var l=t.entanglements,h=t.expirationTimes,s=t.hiddenUpdates;for(r=o&~r;0<r;){var v=31-oa(r),k=1<<v;l[v]=0,h[v]=-1;var g=s[v];if(g!==null)for(s[v]=null,v=0;v<g.length;v++){var x=g[v];x!==null&&(x.lane&=-536870913)}r&=~k}e!==0&&sh(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function sh(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-oa(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function gh(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-oa(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function ph(t,a){var r=a&-a;return r=(r&42)!==0?1:T1(r),(r&(t.suspendedLanes|a))!==0?0:r}function T1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function N1(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fh(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:Ds(t.type))}function _c(t,a){var r=Q.p;try{return Q.p=t,a()}finally{Q.p=r}}var Ur=Math.random().toString(36).slice(2),zt="__reactFiber$"+Ur,Rt="__reactProps$"+Ur,ii="__reactContainer$"+Ur,Xl="__reactEvents$"+Ur,Hp="__reactListeners$"+Ur,Sp="__reactHandles$"+Ur,Tc="__reactResources$"+Ur,fn="__reactMarker$"+Ur;function E1(t){delete t[zt],delete t[Rt],delete t[Xl],delete t[Hp],delete t[Sp]}function Se(t){var a=t[zt];if(a)return a;for(var r=t.parentNode;r;){if(a=r[ii]||r[zt]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=G0(t);t!==null;){if(r=t[zt])return r;t=G0(t)}return a}t=r,r=t.parentNode}return null}function ni(t){if(t=t[zt]||t[ii]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function _i(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(m(33))}function Ue(t){var a=t[Tc];return a||(a=t[Tc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Wt(t){t[fn]=!0}var vh=new Set,kh={};function le(t,a){Je(t,a),Je(t+"Capture",a)}function Je(t,a){for(kh[t]=a,t=0;t<a.length;t++)vh.add(a[t])}var Ap=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nc={},Ec={};function Vp(t){return Yl.call(Ec,t)?!0:Yl.call(Nc,t)?!1:Ap.test(t)?Ec[t]=!0:(Nc[t]=!0,!1)}function go(t,a,r){if(Vp(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function In(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function Qa(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function fa(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xh(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function zp(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Ql(t){if(!t._valueTracker){var a=xh(t)?"checked":"value";t._valueTracker=zp(t,a,""+t[a])}}function Lh(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=xh(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function Vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var _p=/[\n"\\]/g;function xa(t){return t.replace(_p,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Kl(t,a,r,e,i,n,o,l){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+fa(a)):t.value!==""+fa(a)&&(t.value=""+fa(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?Jl(t,o,fa(a)):r!=null?Jl(t,o,fa(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+fa(l):t.removeAttribute("name")}function Mh(t,a,r,e,i,n,o,l){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){Ql(t);return}r=r!=null?""+fa(r):"",a=a!=null?""+fa(a):r,l||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=l?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Ql(t)}function Jl(t,a,r){a==="number"&&Vo(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ze(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+fa(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function mh(t,a,r){if(a!=null&&(a=""+fa(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+fa(r):""}function yh(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(m(92));if(zi(e)){if(1<e.length)throw Error(m(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=fa(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),Ql(t)}function Re(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var Tp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dc(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||Tp.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function wh(t,a,r){if(a!=null&&typeof a!="object")throw Error(m(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&Dc(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&Dc(t,n,a[n])}function D1(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Np=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ep=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function po(t){return Ep.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function tr(){}var Rl=null;function O1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,qe=null;function Oc(t){var a=ni(t);if(a&&(t=a.stateNode)){var r=t[Rt]||null;t:switch(t=a.stateNode,a.type){case"input":if(Kl(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+xa(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[Rt]||null;if(!i)throw Error(m(90));Kl(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&Lh(e)}break t;case"textarea":mh(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Ze(t,!!r.multiple,a,!1)}}}var cl=!1;function Ch(t,a,r){if(cl)return t(a,r);cl=!0;try{var e=t(a);return e}finally{if(cl=!1,(Ae!==null||qe!==null)&&(f2(),Ae&&(a=Ae,t=qe,qe=Ae=null,Oc(a),t)))for(a=0;a<t.length;a++)Oc(t[a])}}function $i(t,a){var r=t.stateNode;if(r===null)return null;var e=r[Rt]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(m(231,a,typeof r));return r}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=!1;if(nr)try{we={},Object.defineProperty(we,"passive",{get:function(){Fl=!0}}),window.addEventListener("test",we,we),window.removeEventListener("test",we,we)}catch{Fl=!1}var we,wr=null,U1=null,fo=null;function bh(){if(fo)return fo;var t,a=U1,r=a.length,e,i="value"in wr?wr.value:wr.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return fo=i.slice(t,1<e?1-e:void 0)}function vo(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Pn(){return!0}function Uc(){return!1}function Ft(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(n):n[l]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Pn:Uc,this.isPropagationStopped=Uc,this}return ot(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),a}var de={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},i2=Ft(de),vn=ot({},de,{view:0,detail:0}),Dp=Ft(vn),hl,ul,Bi,n2=ot({},vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Z1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bi&&(Bi&&t.type==="mousemove"?(hl=t.screenX-Bi.screenX,ul=t.screenY-Bi.screenY):ul=hl=0,Bi=t),hl)},movementY:function(t){return"movementY"in t?t.movementY:ul}}),Zc=Ft(n2),Op=ot({},n2,{dataTransfer:0}),Up=Ft(Op),Zp=ot({},vn,{relatedTarget:0}),sl=Ft(Zp),qp=ot({},de,{animationName:0,elapsedTime:0,pseudoElement:0}),Gp=Ft(qp),Yp=ot({},de,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xp=Ft(Yp),Qp=ot({},de,{data:0}),qc=Ft(Qp),Kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fp(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=Rp[t])?!!a[t]:!1}function Z1(){return Fp}var $p=ot({},vn,{key:function(t){if(t.key){var a=Kp[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Z1,charCode:function(t){return t.type==="keypress"?vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ip=Ft($p),Pp=ot({},n2,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gc=Ft(Pp),t5=ot({},vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Z1}),a5=Ft(t5),r5=ot({},de,{propertyName:0,elapsedTime:0,pseudoElement:0}),e5=Ft(r5),i5=ot({},n2,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n5=Ft(i5),o5=ot({},de,{newState:0,oldState:0}),l5=Ft(o5),d5=[9,13,27,32],q1=nr&&"CompositionEvent"in window,Ei=null;nr&&"documentMode"in document&&(Ei=document.documentMode);var c5=nr&&"TextEvent"in window&&!Ei,Bh=nr&&(!q1||Ei&&8<Ei&&11>=Ei),Yc=" ",Xc=!1;function jh(t,a){switch(t){case"keyup":return d5.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ve=!1;function h5(t,a){switch(t){case"compositionend":return Wh(a);case"keypress":return a.which!==32?null:(Xc=!0,Yc);case"textInput":return t=a.data,t===Yc&&Xc?null:t;default:return null}}function u5(t,a){if(Ve)return t==="compositionend"||!q1&&jh(t,a)?(t=bh(),fo=U1=wr=null,Ve=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Bh&&a.locale!=="ko"?null:a.data;default:return null}}var s5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!s5[t.type]:a==="textarea"}function Hh(t,a,r,e){Ae?qe?qe.push(e):qe=[e]:Ae=e,a=Fo(a,"onChange"),0<a.length&&(r=new i2("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var Di=null,Ii=null;function g5(t){Cs(t,0)}function o2(t){var a=_i(t);if(Lh(a))return t}function Kc(t,a){if(t==="change")return a}var Sh=!1;nr&&(nr?(ao="oninput"in document,ao||(gl=document.createElement("div"),gl.setAttribute("oninput","return;"),ao=typeof gl.oninput=="function"),to=ao):to=!1,Sh=to&&(!document.documentMode||9<document.documentMode));var to,ao,gl;function Jc(){Di&&(Di.detachEvent("onpropertychange",Ah),Ii=Di=null)}function Ah(t){if(t.propertyName==="value"&&o2(Ii)){var a=[];Hh(a,Ii,t,O1(t)),Ch(g5,a)}}function p5(t,a,r){t==="focusin"?(Jc(),Di=a,Ii=r,Di.attachEvent("onpropertychange",Ah)):t==="focusout"&&Jc()}function f5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return o2(Ii)}function v5(t,a){if(t==="click")return o2(a)}function k5(t,a){if(t==="input"||t==="change")return o2(a)}function x5(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var da=typeof Object.is=="function"?Object.is:x5;function Pi(t,a){if(da(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!Yl.call(a,i)||!da(t[i],a[i]))return!1}return!0}function Rc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fc(t,a){var r=Rc(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=Rc(r)}}function Vh(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Vh(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function zh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Vo(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=Vo(t.document)}return a}function G1(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var L5=nr&&"documentMode"in document&&11>=document.documentMode,ze=null,$l=null,Oi=null,Il=!1;function $c(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Il||ze==null||ze!==Vo(e)||(e=ze,"selectionStart"in e&&G1(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Oi&&Pi(Oi,e)||(Oi=e,e=Fo($l,"onSelect"),0<e.length&&(a=new i2("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=ze)))}function Qr(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var _e={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionrun:Qr("Transition","TransitionRun"),transitionstart:Qr("Transition","TransitionStart"),transitioncancel:Qr("Transition","TransitionCancel"),transitionend:Qr("Transition","TransitionEnd")},pl={},_h={};nr&&(_h=document.createElement("div").style,"AnimationEvent"in window||(delete _e.animationend.animation,delete _e.animationiteration.animation,delete _e.animationstart.animation),"TransitionEvent"in window||delete _e.transitionend.transition);function ce(t){if(pl[t])return pl[t];if(!_e[t])return t;var a=_e[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in _h)return pl[t]=a[r];return t}var Th=ce("animationend"),Nh=ce("animationiteration"),Eh=ce("animationstart"),M5=ce("transitionrun"),m5=ce("transitionstart"),y5=ce("transitioncancel"),Dh=ce("transitionend"),Oh=new Map,Pl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pl.push("scrollEnd");function Wa(t,a){Oh.set(t,a),le(a,[t])}var zo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pa=[],Te=0,Y1=0;function l2(){for(var t=Te,a=Y1=Te=0;a<t;){var r=pa[a];pa[a++]=null;var e=pa[a];pa[a++]=null;var i=pa[a];pa[a++]=null;var n=pa[a];if(pa[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&Uh(r,i,n)}}function d2(t,a,r,e){pa[Te++]=t,pa[Te++]=a,pa[Te++]=r,pa[Te++]=e,Y1|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function X1(t,a,r,e){return d2(t,a,r,e),_o(t)}function he(t,a){return d2(t,null,null,a),_o(t)}function Uh(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-oa(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function _o(t){if(50<Ji)throw Ji=0,M1=null,Error(m(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Ne={};function w5(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ra(t,a,r,e){return new w5(t,a,r,e)}function Q1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rr(t,a){var r=t.alternate;return r===null?(r=ra(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Zh(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function ko(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")Q1(t)&&(o=1);else if(typeof t=="string")o=jf(t,r,_a.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ul:return t=ra(31,r,a,i),t.elementType=Ul,t.lanes=n,t;case We:return Ir(r.children,i,n,a);case oh:o=8,i|=24;break;case El:return t=ra(12,r,a,i|2),t.elementType=El,t.lanes=n,t;case Dl:return t=ra(13,r,a,i),t.elementType=Dl,t.lanes=n,t;case Ol:return t=ra(19,r,a,i),t.elementType=Ol,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pa:o=10;break t;case lh:o=9;break t;case V1:o=11;break t;case z1:o=14;break t;case vr:o=16,e=null;break t}o=29,r=Error(m(130,t===null?"null":typeof t,"")),e=null}return a=ra(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function Ir(t,a,r,e){return t=ra(7,t,e,a),t.lanes=r,t}function fl(t,a,r){return t=ra(6,t,null,a),t.lanes=r,t}function qh(t){var a=ra(18,null,null,0);return a.stateNode=t,a}function vl(t,a,r){return a=ra(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Ic=new WeakMap;function La(t,a){if(typeof t=="object"&&t!==null){var r=Ic.get(t);return r!==void 0?r:(a={value:t,source:a,stack:zc(a)},Ic.set(t,a),a)}return{value:t,source:a,stack:zc(a)}}var Ee=[],De=0,To=null,tn=0,va=[],ka=0,Nr=null,Aa=1,Va="";function $a(t,a){Ee[De++]=tn,Ee[De++]=To,To=t,tn=a}function Gh(t,a,r){va[ka++]=Aa,va[ka++]=Va,va[ka++]=Nr,Nr=t;var e=Aa;t=Va;var i=32-oa(e)-1;e&=~(1<<i),r+=1;var n=32-oa(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,Aa=1<<32-oa(a)+i|r<<i|e,Va=n+t}else Aa=1<<n|r<<i|e,Va=t}function K1(t){t.return!==null&&($a(t,1),Gh(t,1,0))}function J1(t){for(;t===To;)To=Ee[--De],Ee[De]=null,tn=Ee[--De],Ee[De]=null;for(;t===Nr;)Nr=va[--ka],va[ka]=null,Va=va[--ka],va[ka]=null,Aa=va[--ka],va[ka]=null}function Yh(t,a){va[ka++]=Aa,va[ka++]=Va,va[ka++]=Nr,Aa=a.id,Va=a.overflow,Nr=t}var _t=null,nt=null,Y=!1,Wr=null,Ma=!1,t1=Error(m(519));function Er(t){var a=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw an(La(a,t)),t1}function Pc(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[zt]=t,a[Rt]=e,r){case"dialog":U("cancel",a),U("close",a);break;case"iframe":case"object":case"embed":U("load",a);break;case"video":case"audio":for(r=0;r<on.length;r++)U(on[r],a);break;case"source":U("error",a);break;case"img":case"image":case"link":U("error",a),U("load",a);break;case"details":U("toggle",a);break;case"input":U("invalid",a),Mh(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":U("invalid",a);break;case"textarea":U("invalid",a),yh(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||Bs(a.textContent,r)?(e.popover!=null&&(U("beforetoggle",a),U("toggle",a)),e.onScroll!=null&&U("scroll",a),e.onScrollEnd!=null&&U("scrollend",a),e.onClick!=null&&(a.onclick=tr),a=!0):a=!1,a||Er(t,!0)}function t0(t){for(_t=t.return;_t;)switch(_t.tag){case 5:case 31:case 13:Ma=!1;return;case 27:case 3:Ma=!0;return;default:_t=_t.return}}function Ce(t){if(t!==_t)return!1;if(!Y)return t0(t),Y=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||b1(t.type,t.memoizedProps)),r=!r),r&&nt&&Er(t),t0(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));nt=q0(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));nt=q0(t)}else a===27?(a=nt,Zr(t.type)?(t=H1,H1=null,nt=t):nt=a):nt=_t?ya(t.stateNode.nextSibling):null;return!0}function re(){nt=_t=null,Y=!1}function kl(){var t=Wr;return t!==null&&(Kt===null?Kt=t:Kt.push.apply(Kt,t),Wr=null),t}function an(t){Wr===null?Wr=[t]:Wr.push(t)}var a1=Ta(null),ue=null,ar=null;function xr(t,a,r){at(a1,a._currentValue),a._currentValue=r}function er(t){t._currentValue=a1.current,Ht(a1)}function r1(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function e1(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var l=n;n=i;for(var h=0;h<a.length;h++)if(l.context===a[h]){n.lanes|=r,l=n.alternate,l!==null&&(l.lanes|=r),r1(n.return,r,t),e||(o=null);break t}n=l.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),r1(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function oi(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(m(387));if(o=o.memoizedProps,o!==null){var l=i.type;da(i.pendingProps.value,o.value)||(t!==null?t.push(l):t=[l])}}else if(i===Wo.current){if(o=i.alternate,o===null)throw Error(m(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(dn):t=[dn])}i=i.return}t!==null&&e1(a,t,r,e),a.flags|=262144}function No(t){for(t=t.firstContext;t!==null;){if(!da(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ee(t){ue=t,ar=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tt(t){return Xh(ue,t)}function ro(t,a){return ue===null&&ee(t),Xh(t,a)}function Xh(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},ar===null){if(t===null)throw Error(m(308));ar=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else ar=ar.next=a;return r}var C5=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},b5=wt.unstable_scheduleCallback,B5=wt.unstable_NormalPriority,Mt={$$typeof:Pa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function R1(){return{controller:new C5,data:new Map,refCount:0}}function kn(t){t.refCount--,t.refCount===0&&b5(B5,function(){t.controller.abort()})}var Ui=null,i1=0,Fe=0,Ge=null;function j5(t,a){if(Ui===null){var r=Ui=[];i1=0,Fe=Md(),Ge={status:"pending",value:void 0,then:function(e){r.push(e)}}}return i1++,a.then(a0,a0),a}function a0(){if(--i1===0&&Ui!==null){Ge!==null&&(Ge.status="fulfilled");var t=Ui;Ui=null,Fe=0,Ge=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function W5(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var r0=z.S;z.S=function(t,a){ns=ia(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&j5(t,a),r0!==null&&r0(t,a)};var Pr=Ta(null);function F1(){var t=Pr.current;return t!==null?t:tt.pooledCache}function xo(t,a){a===null?at(Pr,Pr.current):at(Pr,a.pool)}function Qh(){var t=F1();return t===null?null:{parent:Mt._currentValue,pool:t}}var li=Error(m(460)),$1=Error(m(474)),c2=Error(m(542)),Eo={then:function(){}};function e0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Kh(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(tr,tr),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,n0(t),t;default:if(typeof a.status=="string")a.then(tr,tr);else{if(t=tt,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,n0(t),t}throw te=a,li}}function Rr(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(te=r,li):r}}var te=null;function i0(){if(te===null)throw Error(m(459));var t=te;return te=null,t}function n0(t){if(t===li||t===c2)throw Error(m(483))}var Ye=null,rn=0;function eo(t){var a=rn;return rn+=1,Ye===null&&(Ye=[]),Kh(Ye,t,a)}function ji(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function io(t,a){throw a.$$typeof===pp?Error(m(525)):(t=Object.prototype.toString.call(a),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function Jh(t){function a(p,u){if(t){var f=p.deletions;f===null?(p.deletions=[u],p.flags|=16):f.push(u)}}function r(p,u){if(!t)return null;for(;u!==null;)a(p,u),u=u.sibling;return null}function e(p){for(var u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function i(p,u){return p=rr(p,u),p.index=0,p.sibling=null,p}function n(p,u,f){return p.index=f,t?(f=p.alternate,f!==null?(f=f.index,f<u?(p.flags|=67108866,u):f):(p.flags|=67108866,u)):(p.flags|=1048576,u)}function o(p){return t&&p.alternate===null&&(p.flags|=67108866),p}function l(p,u,f,L){return u===null||u.tag!==6?(u=fl(f,p.mode,L),u.return=p,u):(u=i(u,f),u.return=p,u)}function h(p,u,f,L){var W=f.type;return W===We?v(p,u,f.props.children,L,f.key):u!==null&&(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===vr&&Rr(W)===u.type)?(u=i(u,f.props),ji(u,f),u.return=p,u):(u=ko(f.type,f.key,f.props,null,p.mode,L),ji(u,f),u.return=p,u)}function s(p,u,f,L){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=vl(f,p.mode,L),u.return=p,u):(u=i(u,f.children||[]),u.return=p,u)}function v(p,u,f,L,W){return u===null||u.tag!==7?(u=Ir(f,p.mode,L,W),u.return=p,u):(u=i(u,f),u.return=p,u)}function k(p,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=fl(""+u,p.mode,f),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Jn:return f=ko(u.type,u.key,u.props,null,p.mode,f),ji(f,u),f.return=p,f;case Vi:return u=vl(u,p.mode,f),u.return=p,u;case vr:return u=Rr(u),k(p,u,f)}if(zi(u)||bi(u))return u=Ir(u,p.mode,f,null),u.return=p,u;if(typeof u.then=="function")return k(p,eo(u),f);if(u.$$typeof===Pa)return k(p,ro(p,u),f);io(p,u)}return null}function g(p,u,f,L){var W=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return W!==null?null:l(p,u,""+f,L);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Jn:return f.key===W?h(p,u,f,L):null;case Vi:return f.key===W?s(p,u,f,L):null;case vr:return f=Rr(f),g(p,u,f,L)}if(zi(f)||bi(f))return W!==null?null:v(p,u,f,L,null);if(typeof f.then=="function")return g(p,u,eo(f),L);if(f.$$typeof===Pa)return g(p,u,ro(p,f),L);io(p,f)}return null}function x(p,u,f,L,W){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return p=p.get(f)||null,l(u,p,""+L,W);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Jn:return p=p.get(L.key===null?f:L.key)||null,h(u,p,L,W);case Vi:return p=p.get(L.key===null?f:L.key)||null,s(u,p,L,W);case vr:return L=Rr(L),x(p,u,f,L,W)}if(zi(L)||bi(L))return p=p.get(f)||null,v(u,p,L,W,null);if(typeof L.then=="function")return x(p,u,f,eo(L),W);if(L.$$typeof===Pa)return x(p,u,f,ro(u,L),W);io(u,L)}return null}function y(p,u,f,L){for(var W=null,_=null,B=u,A=u=0,D=null;B!==null&&A<f.length;A++){B.index>A?(D=B,B=null):D=B.sibling;var S=g(p,B,f[A],L);if(S===null){B===null&&(B=D);break}t&&B&&S.alternate===null&&a(p,B),u=n(S,u,A),_===null?W=S:_.sibling=S,_=S,B=D}if(A===f.length)return r(p,B),Y&&$a(p,A),W;if(B===null){for(;A<f.length;A++)B=k(p,f[A],L),B!==null&&(u=n(B,u,A),_===null?W=B:_.sibling=B,_=B);return Y&&$a(p,A),W}for(B=e(B);A<f.length;A++)D=x(B,p,A,f[A],L),D!==null&&(t&&D.alternate!==null&&B.delete(D.key===null?A:D.key),u=n(D,u,A),_===null?W=D:_.sibling=D,_=D);return t&&B.forEach(function($t){return a(p,$t)}),Y&&$a(p,A),W}function b(p,u,f,L){if(f==null)throw Error(m(151));for(var W=null,_=null,B=u,A=u=0,D=null,S=f.next();B!==null&&!S.done;A++,S=f.next()){B.index>A?(D=B,B=null):D=B.sibling;var $t=g(p,B,S.value,L);if($t===null){B===null&&(B=D);break}t&&B&&$t.alternate===null&&a(p,B),u=n($t,u,A),_===null?W=$t:_.sibling=$t,_=$t,B=D}if(S.done)return r(p,B),Y&&$a(p,A),W;if(B===null){for(;!S.done;A++,S=f.next())S=k(p,S.value,L),S!==null&&(u=n(S,u,A),_===null?W=S:_.sibling=S,_=S);return Y&&$a(p,A),W}for(B=e(B);!S.done;A++,S=f.next())S=x(B,p,A,S.value,L),S!==null&&(t&&S.alternate!==null&&B.delete(S.key===null?A:S.key),u=n(S,u,A),_===null?W=S:_.sibling=S,_=S);return t&&B.forEach(function(Da){return a(p,Da)}),Y&&$a(p,A),W}function E(p,u,f,L){if(typeof f=="object"&&f!==null&&f.type===We&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Jn:t:{for(var W=f.key;u!==null;){if(u.key===W){if(W=f.type,W===We){if(u.tag===7){r(p,u.sibling),L=i(u,f.props.children),L.return=p,p=L;break t}}else if(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===vr&&Rr(W)===u.type){r(p,u.sibling),L=i(u,f.props),ji(L,f),L.return=p,p=L;break t}r(p,u);break}else a(p,u);u=u.sibling}f.type===We?(L=Ir(f.props.children,p.mode,L,f.key),L.return=p,p=L):(L=ko(f.type,f.key,f.props,null,p.mode,L),ji(L,f),L.return=p,p=L)}return o(p);case Vi:t:{for(W=f.key;u!==null;){if(u.key===W)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){r(p,u.sibling),L=i(u,f.children||[]),L.return=p,p=L;break t}else{r(p,u);break}else a(p,u);u=u.sibling}L=vl(f,p.mode,L),L.return=p,p=L}return o(p);case vr:return f=Rr(f),E(p,u,f,L)}if(zi(f))return y(p,u,f,L);if(bi(f)){if(W=bi(f),typeof W!="function")throw Error(m(150));return f=W.call(f),b(p,u,f,L)}if(typeof f.then=="function")return E(p,u,eo(f),L);if(f.$$typeof===Pa)return E(p,u,ro(p,f),L);io(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(r(p,u.sibling),L=i(u,f),L.return=p,p=L):(r(p,u),L=fl(f,p.mode,L),L.return=p,p=L),o(p)):r(p,u)}return function(p,u,f,L){try{rn=0;var W=E(p,u,f,L);return Ye=null,W}catch(B){if(B===li||B===c2)throw B;var _=ra(29,B,null,p.mode);return _.lanes=L,_.return=p,_}}}var ie=Jh(!0),Rh=Jh(!1),kr=!1;function I1(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function n1(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Hr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(X&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=_o(t),Uh(t,null,r),a}return d2(t,e,a,r),_o(t)}function Zi(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,gh(t,r)}}function xl(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var o1=!1;function qi(){if(o1){var t=Ge;if(t!==null)throw t}}function Gi(t,a,r,e){o1=!1;var i=t.updateQueue;kr=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var h=l,s=h.next;h.next=null,o===null?n=s:o.next=s,o=h;var v=t.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==o&&(l===null?v.firstBaseUpdate=s:l.next=s,v.lastBaseUpdate=h))}if(n!==null){var k=i.baseState;o=0,v=s=h=null,l=n;do{var g=l.lane&-536870913,x=g!==l.lane;if(x?(G&g)===g:(e&g)===g){g!==0&&g===Fe&&(o1=!0),v!==null&&(v=v.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var y=t,b=l;g=a;var E=r;switch(b.tag){case 1:if(y=b.payload,typeof y=="function"){k=y.call(E,k,g);break t}k=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,g=typeof y=="function"?y.call(E,k,g):y,g==null)break t;k=ot({},k,g);break t;case 2:kr=!0}}g=l.callback,g!==null&&(t.flags|=64,x&&(t.flags|=8192),x=i.callbacks,x===null?i.callbacks=[g]:x.push(g))}else x={lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(s=v=x,h=k):v=v.next=x,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;x=l,l=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);v===null&&(h=k),i.baseState=h,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n===null&&(i.shared.lanes=0),Or|=o,t.lanes=o,t.memoizedState=k}}function Fh(t,a){if(typeof t!="function")throw Error(m(191,t));t.call(a)}function $h(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Fh(r[t],a)}var $e=Ta(null),Do=Ta(0);function o0(t,a){t=cr,at(Do,t),at($e,a),cr=t|a.baseLanes}function l1(){at(Do,cr),at($e,$e.current)}function P1(){cr=Do.current,Ht($e),Ht(Do)}var ca=Ta(null),ma=null;function Lr(t){var a=t.alternate;at(ut,ut.current&1),at(ca,t),ma===null&&(a===null||$e.current!==null||a.memoizedState!==null)&&(ma=t)}function d1(t){at(ut,ut.current),at(ca,t),ma===null&&(ma=t)}function Ih(t){t.tag===22?(at(ut,ut.current),at(ca,t),ma===null&&(ma=t)):Mr(t)}function Mr(){at(ut,ut.current),at(ca,ca.current)}function aa(t){Ht(ca),ma===t&&(ma=null),Ht(ut)}var ut=Ta(0);function Oo(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||j1(r)||W1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var or=0,N=null,I=null,xt=null,Uo=!1,Xe=!1,ne=!1,Zo=0,en=0,Qe=null,H5=0;function ct(){throw Error(m(321))}function td(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!da(t[r],a[r]))return!1;return!0}function ad(t,a,r,e,i,n){return or=n,N=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=t===null||t.memoizedState===null?Hu:sd,ne=!1,n=r(e,i),ne=!1,Xe&&(n=tu(a,r,e,i)),Ph(t),n}function Ph(t){z.H=nn;var a=I!==null&&I.next!==null;if(or=0,xt=I=N=null,Uo=!1,en=0,Qe=null,a)throw Error(m(300));t===null||mt||(t=t.dependencies,t!==null&&No(t)&&(mt=!0))}function tu(t,a,r,e){N=t;var i=0;do{if(Xe&&(Qe=null),en=0,Xe=!1,25<=i)throw Error(m(301));if(i+=1,xt=I=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}z.H=Su,n=a(r,e)}while(Xe);return n}function S5(){var t=z.H,a=t.useState()[0];return a=typeof a.then=="function"?xn(a):a,t=t.useState()[0],(I!==null?I.memoizedState:null)!==t&&(N.flags|=1024),a}function rd(){var t=Zo!==0;return Zo=0,t}function ed(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function id(t){if(Uo){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Uo=!1}or=0,xt=I=N=null,Xe=!1,en=Zo=0,Qe=null}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?N.memoizedState=xt=t:xt=xt.next=t,xt}function st(){if(I===null){var t=N.alternate;t=t!==null?t.memoizedState:null}else t=I.next;var a=xt===null?N.memoizedState:xt.next;if(a!==null)xt=a,I=t;else{if(t===null)throw N.alternate===null?Error(m(467)):Error(m(310));I=t,t={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},xt===null?N.memoizedState=xt=t:xt=xt.next=t}return xt}function h2(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xn(t){var a=en;return en+=1,Qe===null&&(Qe=[]),t=Kh(Qe,t,a),a=N,(xt===null?a.memoizedState:xt.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?Hu:sd),t}function u2(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xn(t);if(t.$$typeof===Pa)return Tt(t)}throw Error(m(438,String(t)))}function nd(t){var a=null,r=N.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=N.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=h2(),N.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=fp;return a.index++,r}function lr(t,a){return typeof a=="function"?a(t):a}function Lo(t){var a=st();return od(a,I,t)}function od(t,a,r){var e=t.queue;if(e===null)throw Error(m(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var l=o=null,h=null,s=a,v=!1;do{var k=s.lane&-536870913;if(k!==s.lane?(G&k)===k:(or&k)===k){var g=s.revertLane;if(g===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),k===Fe&&(v=!0);else if((or&g)===g){s=s.next,g===Fe&&(v=!0);continue}else k={lane:0,revertLane:s.revertLane,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},h===null?(l=h=k,o=n):h=h.next=k,N.lanes|=g,Or|=g;k=s.action,ne&&r(n,k),n=s.hasEagerState?s.eagerState:r(n,k)}else g={lane:k,revertLane:s.revertLane,gesture:s.gesture,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},h===null?(l=h=g,o=n):h=h.next=g,N.lanes|=k,Or|=k;s=s.next}while(s!==null&&s!==a);if(h===null?o=n:h.next=l,!da(n,t.memoizedState)&&(mt=!0,v&&(r=Ge,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=h,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function Ll(t){var a=st(),r=a.queue;if(r===null)throw Error(m(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);da(n,a.memoizedState)||(mt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function au(t,a,r){var e=N,i=st(),n=Y;if(n){if(r===void 0)throw Error(m(407));r=r()}else r=a();var o=!da((I||i).memoizedState,r);if(o&&(i.memoizedState=r,mt=!0),i=i.queue,ld(iu.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||xt!==null&&xt.memoizedState.tag&1){if(e.flags|=2048,Ie(9,{destroy:void 0},eu.bind(null,e,i,r,a),null),tt===null)throw Error(m(349));n||(or&127)!==0||ru(e,a,r)}return r}function ru(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=N.updateQueue,a===null?(a=h2(),N.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function eu(t,a,r,e){a.value=r,a.getSnapshot=e,nu(a)&&ou(t)}function iu(t,a,r){return r(function(){nu(a)&&ou(t)})}function nu(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!da(t,r)}catch{return!0}}function ou(t){var a=he(t,2);a!==null&&Jt(a,t,2)}function c1(t){var a=Gt();if(typeof t=="function"){var r=t;if(t=r(),ne){yr(!0);try{r()}finally{yr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:t},a}function lu(t,a,r,e){return t.baseState=r,od(t,I,typeof e=="function"?e:lr)}function A5(t,a,r,e,i){if(g2(t))throw Error(m(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};z.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,du(a,n)):(n.next=r.next,a.pending=r.next=n)}}function du(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=z.T,o={};z.T=o;try{var l=r(i,e),h=z.S;h!==null&&h(o,l),l0(t,a,l)}catch(s){h1(t,a,s)}finally{n!==null&&o.types!==null&&(n.types=o.types),z.T=n}}else try{n=r(i,e),l0(t,a,n)}catch(s){h1(t,a,s)}}function l0(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){d0(t,a,e)},function(e){return h1(t,a,e)}):d0(t,a,r)}function d0(t,a,r){a.status="fulfilled",a.value=r,cu(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,du(t,r)))}function h1(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,cu(a),a=a.next;while(a!==e)}t.action=null}function cu(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function hu(t,a){return a}function c0(t,a){if(Y){var r=tt.formState;if(r!==null){t:{var e=N;if(Y){if(nt){a:{for(var i=nt,n=Ma;i.nodeType!==8;){if(!n){i=null;break a}if(i=ya(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){nt=ya(i.nextSibling),e=i.data==="F!";break t}}Er(e)}e=!1}e&&(a=r[0])}}return r=Gt(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hu,lastRenderedState:a},r.queue=e,r=Bu.bind(null,N,e),e.dispatch=r,e=c1(!1),n=ud.bind(null,N,!1,e.queue),e=Gt(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=A5.bind(null,N,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function h0(t){var a=st();return uu(a,I,t)}function uu(t,a,r){if(a=od(t,a,hu)[0],t=Lo(lr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=xn(a)}catch(o){throw o===li?c2:o}else e=a;a=st();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(N.flags|=2048,Ie(9,{destroy:void 0},V5.bind(null,i,r),null)),[e,n,t]}function V5(t,a){t.action=a}function u0(t){var a=st(),r=I;if(r!==null)return uu(a,r,t);st(),a=a.memoizedState,r=st();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function Ie(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=N.updateQueue,a===null&&(a=h2(),N.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function su(){return st().memoizedState}function Mo(t,a,r,e){var i=Gt();N.flags|=t,i.memoizedState=Ie(1|a,{destroy:void 0},r,e===void 0?null:e)}function s2(t,a,r,e){var i=st();e=e===void 0?null:e;var n=i.memoizedState.inst;I!==null&&e!==null&&td(e,I.memoizedState.deps)?i.memoizedState=Ie(a,n,r,e):(N.flags|=t,i.memoizedState=Ie(1|a,n,r,e))}function s0(t,a){Mo(8390656,8,t,a)}function ld(t,a){s2(2048,8,t,a)}function z5(t){N.flags|=4;var a=N.updateQueue;if(a===null)a=h2(),N.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function gu(t){var a=st().memoizedState;return z5({ref:a,nextImpl:t}),function(){if((X&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}function pu(t,a){return s2(4,2,t,a)}function fu(t,a){return s2(4,4,t,a)}function vu(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function ku(t,a,r){r=r!=null?r.concat([t]):null,s2(4,4,vu.bind(null,a,t),r)}function dd(){}function xu(t,a){var r=st();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&td(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function Lu(t,a){var r=st();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&td(a,e[1]))return e[0];if(e=t(),ne){yr(!0);try{t()}finally{yr(!1)}}return r.memoizedState=[e,a],e}function cd(t,a,r){return r===void 0||(or&1073741824)!==0&&(G&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=ls(),N.lanes|=t,Or|=t,r)}function Mu(t,a,r,e){return da(r,a)?r:$e.current!==null?(t=cd(t,r,e),da(t,a)||(mt=!0),t):(or&42)===0||(or&1073741824)!==0&&(G&261930)===0?(mt=!0,t.memoizedState=r):(t=ls(),N.lanes|=t,Or|=t,a)}function mu(t,a,r,e,i){var n=Q.p;Q.p=n!==0&&8>n?n:8;var o=z.T,l={};z.T=l,ud(t,!1,a,r);try{var h=i(),s=z.S;if(s!==null&&s(l,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var v=W5(h,e);Yi(t,a,v,la(t))}else Yi(t,a,e,la(t))}catch(k){Yi(t,a,{then:function(){},status:"rejected",reason:k},la())}finally{Q.p=n,o!==null&&l.types!==null&&(o.types=l.types),z.T=o}}function _5(){}function u1(t,a,r,e){if(t.tag!==5)throw Error(m(476));var i=yu(t).queue;mu(t,i,a,$r,r===null?_5:function(){return wu(t),r(e)})}function yu(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:$r,baseState:$r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:$r},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function wu(t){var a=yu(t);a.next===null&&(a=t.alternate.memoizedState),Yi(t,a.next.queue,{},la())}function hd(){return Tt(dn)}function Cu(){return st().memoizedState}function bu(){return st().memoizedState}function T5(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=la();t=Hr(r);var e=Sr(a,t,r);e!==null&&(Jt(e,a,r),Zi(e,a,r)),a={cache:R1()},t.payload=a;return}a=a.return}}function N5(t,a,r){var e=la();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},g2(t)?ju(a,r):(r=X1(t,a,r,e),r!==null&&(Jt(r,t,e),Wu(r,a,e)))}function Bu(t,a,r){var e=la();Yi(t,a,r,e)}function Yi(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(g2(t))ju(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,l=n(o,r);if(i.hasEagerState=!0,i.eagerState=l,da(l,o))return d2(t,a,i,0),tt===null&&l2(),!1}catch{}if(r=X1(t,a,i,e),r!==null)return Jt(r,t,e),Wu(r,a,e),!0}return!1}function ud(t,a,r,e){if(e={lane:2,revertLane:Md(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},g2(t)){if(a)throw Error(m(479))}else a=X1(t,r,e,2),a!==null&&Jt(a,t,2)}function g2(t){var a=t.alternate;return t===N||a!==null&&a===N}function ju(t,a){Xe=Uo=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function Wu(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,gh(t,r)}}var nn={readContext:Tt,use:u2,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct};nn.useEffectEvent=ct;var Hu={readContext:Tt,use:u2,useCallback:function(t,a){return Gt().memoizedState=[t,a===void 0?null:a],t},useContext:Tt,useEffect:s0,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,Mo(4194308,4,vu.bind(null,a,t),r)},useLayoutEffect:function(t,a){return Mo(4194308,4,t,a)},useInsertionEffect:function(t,a){Mo(4,2,t,a)},useMemo:function(t,a){var r=Gt();a=a===void 0?null:a;var e=t();if(ne){yr(!0);try{t()}finally{yr(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=Gt();if(r!==void 0){var i=r(a);if(ne){yr(!0);try{r(a)}finally{yr(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=N5.bind(null,N,t),[e.memoizedState,t]},useRef:function(t){var a=Gt();return t={current:t},a.memoizedState=t},useState:function(t){t=c1(t);var a=t.queue,r=Bu.bind(null,N,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:dd,useDeferredValue:function(t,a){var r=Gt();return cd(r,t,a)},useTransition:function(){var t=c1(!1);return t=mu.bind(null,N,t.queue,!0,!1),Gt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=N,i=Gt();if(Y){if(r===void 0)throw Error(m(407));r=r()}else{if(r=a(),tt===null)throw Error(m(349));(G&127)!==0||ru(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,s0(iu.bind(null,e,n,t),[t]),e.flags|=2048,Ie(9,{destroy:void 0},eu.bind(null,e,n,r,a),null),r},useId:function(){var t=Gt(),a=tt.identifierPrefix;if(Y){var r=Va,e=Aa;r=(e&~(1<<32-oa(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=Zo++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=H5++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:hd,useFormState:c0,useActionState:c0,useOptimistic:function(t){var a=Gt();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=ud.bind(null,N,!0,r),r.dispatch=a,[t,a]},useMemoCache:nd,useCacheRefresh:function(){return Gt().memoizedState=T5.bind(null,N)},useEffectEvent:function(t){var a=Gt(),r={impl:t};return a.memoizedState=r,function(){if((X&2)!==0)throw Error(m(440));return r.impl.apply(void 0,arguments)}}},sd={readContext:Tt,use:u2,useCallback:xu,useContext:Tt,useEffect:ld,useImperativeHandle:ku,useInsertionEffect:pu,useLayoutEffect:fu,useMemo:Lu,useReducer:Lo,useRef:su,useState:function(){return Lo(lr)},useDebugValue:dd,useDeferredValue:function(t,a){var r=st();return Mu(r,I.memoizedState,t,a)},useTransition:function(){var t=Lo(lr)[0],a=st().memoizedState;return[typeof t=="boolean"?t:xn(t),a]},useSyncExternalStore:au,useId:Cu,useHostTransitionStatus:hd,useFormState:h0,useActionState:h0,useOptimistic:function(t,a){var r=st();return lu(r,I,t,a)},useMemoCache:nd,useCacheRefresh:bu};sd.useEffectEvent=gu;var Su={readContext:Tt,use:u2,useCallback:xu,useContext:Tt,useEffect:ld,useImperativeHandle:ku,useInsertionEffect:pu,useLayoutEffect:fu,useMemo:Lu,useReducer:Ll,useRef:su,useState:function(){return Ll(lr)},useDebugValue:dd,useDeferredValue:function(t,a){var r=st();return I===null?cd(r,t,a):Mu(r,I.memoizedState,t,a)},useTransition:function(){var t=Ll(lr)[0],a=st().memoizedState;return[typeof t=="boolean"?t:xn(t),a]},useSyncExternalStore:au,useId:Cu,useHostTransitionStatus:hd,useFormState:u0,useActionState:u0,useOptimistic:function(t,a){var r=st();return I!==null?lu(r,I,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:nd,useCacheRefresh:bu};Su.useEffectEvent=gu;function Ml(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:ot({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var s1={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=la(),i=Hr(e);i.payload=a,r!=null&&(i.callback=r),a=Sr(t,i,e),a!==null&&(Jt(a,t,e),Zi(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=la(),i=Hr(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=Sr(t,i,e),a!==null&&(Jt(a,t,e),Zi(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=la(),e=Hr(r);e.tag=2,a!=null&&(e.callback=a),a=Sr(t,e,r),a!==null&&(Jt(a,t,r),Zi(a,t,r))}};function g0(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!Pi(r,e)||!Pi(i,n):!0}function p0(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&s1.enqueueReplaceState(a,a.state,null)}function oe(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=ot({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function Au(t){zo(t)}function Vu(t){console.error(t)}function zu(t){zo(t)}function qo(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function f0(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function g1(t,a,r){return r=Hr(r),r.tag=3,r.payload={element:null},r.callback=function(){qo(t,a)},r}function _u(t){return t=Hr(t),t.tag=3,t}function Tu(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){f0(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){f0(a,r,e),typeof i!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})})}function E5(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&oi(a,r,i,!0),r=ca.current,r!==null){switch(r.tag){case 31:case 13:return ma===null?Ko():r.alternate===null&&ht===0&&(ht=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===Eo?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),Al(t,e,i)),!1;case 22:return r.flags|=65536,e===Eo?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),Al(t,e,i)),!1}throw Error(m(435,r.tag))}return Al(t,e,i),Ko(),!1}if(Y)return a=ca.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==t1&&(t=Error(m(422),{cause:e}),an(La(t,r)))):(e!==t1&&(a=Error(m(423),{cause:e}),an(La(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=La(e,r),i=g1(t.stateNode,e,i),xl(t,i),ht!==4&&(ht=2)),!1;var n=Error(m(520),{cause:e});if(n=La(n,r),Ki===null?Ki=[n]:Ki.push(n),ht!==4&&(ht=2),a===null)return!0;e=La(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=g1(r.stateNode,e,t),xl(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Ar===null||!Ar.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=_u(i),Tu(i,t,r,e),xl(r,i),!1}r=r.return}while(r!==null);return!1}var gd=Error(m(461)),mt=!1;function Vt(t,a,r,e){a.child=t===null?Rh(a,null,r,e):ie(a,t.child,r,e)}function v0(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var l in e)l!=="ref"&&(o[l]=e[l])}else o=e;return ee(a),e=ad(t,a,r,o,n,i),l=rd(),t!==null&&!mt?(ed(t,a,i),dr(t,a,i)):(Y&&l&&K1(a),a.flags|=1,Vt(t,a,e,i),a.child)}function k0(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!Q1(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,Nu(t,a,n,e,i)):(t=ko(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!pd(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:Pi,r(o,e)&&t.ref===a.ref)return dr(t,a,i)}return a.flags|=1,t=rr(n,e),t.ref=a.ref,t.return=a,a.child=t}function Nu(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(Pi(n,e)&&t.ref===a.ref)if(mt=!1,a.pendingProps=e=n,pd(t,i))(t.flags&131072)!==0&&(mt=!0);else return a.lanes=t.lanes,dr(t,a,i)}return p1(t,a,r,e,i)}function Eu(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return x0(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&xo(a,n!==null?n.cachePool:null),n!==null?o0(a,n):l1(),Ih(a);else return e=a.lanes=536870912,x0(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(xo(a,n.cachePool),o0(a,n),Mr(a),a.memoizedState=null):(t!==null&&xo(a,null),l1(),Mr(a));return Vt(t,a,i,r),a.child}function Ti(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function x0(t,a,r,e,i){var n=F1();return n=n===null?null:{parent:Mt._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&xo(a,null),l1(),Ih(a),t!==null&&oi(t,a,e,!0),a.childLanes=i,null}function mo(t,a){return a=Go({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function L0(t,a,r){return ie(a,t.child,null,r),t=mo(a,a.pendingProps),t.flags|=2,aa(a),a.memoizedState=null,t}function D5(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(Y){if(e.mode==="hidden")return t=mo(a,e),a.lanes=536870912,Ti(null,t);if(d1(a),(t=nt)?(t=Hs(t,Ma),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Nr!==null?{id:Aa,overflow:Va}:null,retryLane:536870912,hydrationErrors:null},r=qh(t),r.return=a,a.child=r,_t=a,nt=null)):t=null,t===null)throw Er(a);return a.lanes=536870912,null}return mo(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(d1(a),i)if(a.flags&256)a.flags&=-257,a=L0(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(m(558));else if(mt||oi(t,a,r,!1),i=(r&t.childLanes)!==0,mt||i){if(e=tt,e!==null&&(o=ph(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,he(t,o),Jt(e,t,o),gd;Ko(),a=L0(t,a,r)}else t=n.treeContext,nt=ya(o.nextSibling),_t=a,Y=!0,Wr=null,Ma=!1,t!==null&&Yh(a,t),a=mo(a,e),a.flags|=4096;return a}return t=rr(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function yo(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(m(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function p1(t,a,r,e,i){return ee(a),r=ad(t,a,r,e,void 0,i),e=rd(),t!==null&&!mt?(ed(t,a,i),dr(t,a,i)):(Y&&e&&K1(a),a.flags|=1,Vt(t,a,r,i),a.child)}function M0(t,a,r,e,i,n){return ee(a),a.updateQueue=null,r=tu(a,e,r,i),Ph(t),e=rd(),t!==null&&!mt?(ed(t,a,n),dr(t,a,n)):(Y&&e&&K1(a),a.flags|=1,Vt(t,a,r,n),a.child)}function m0(t,a,r,e,i){if(ee(a),a.stateNode===null){var n=Ne,o=r.contextType;typeof o=="object"&&o!==null&&(n=Tt(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=s1,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},I1(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?Tt(o):Ne,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(Ml(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&s1.enqueueReplaceState(n,n.state,null),Gi(a,e,n,i),qi(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var l=a.memoizedProps,h=oe(r,l);n.props=h;var s=n.context,v=r.contextType;o=Ne,typeof v=="object"&&v!==null&&(o=Tt(v));var k=r.getDerivedStateFromProps;v=typeof k=="function"||typeof n.getSnapshotBeforeUpdate=="function",l=a.pendingProps!==l,v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(l||s!==o)&&p0(a,n,e,o),kr=!1;var g=a.memoizedState;n.state=g,Gi(a,e,n,i),qi(),s=a.memoizedState,l||g!==s||kr?(typeof k=="function"&&(Ml(a,r,k,e),s=a.memoizedState),(h=kr||g0(a,r,h,e,g,s,o))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=s),n.props=e,n.state=s,n.context=o,e=h):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,n1(t,a),o=a.memoizedProps,v=oe(r,o),n.props=v,k=a.pendingProps,g=n.context,s=r.contextType,h=Ne,typeof s=="object"&&s!==null&&(h=Tt(s)),l=r.getDerivedStateFromProps,(s=typeof l=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==k||g!==h)&&p0(a,n,e,h),kr=!1,g=a.memoizedState,n.state=g,Gi(a,e,n,i),qi();var x=a.memoizedState;o!==k||g!==x||kr||t!==null&&t.dependencies!==null&&No(t.dependencies)?(typeof l=="function"&&(Ml(a,r,l,e),x=a.memoizedState),(v=kr||g0(a,r,v,e,g,x,h)||t!==null&&t.dependencies!==null&&No(t.dependencies))?(s||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,x,h),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,x,h)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=x),n.props=e,n.state=x,n.context=h,e=v):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,yo(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=ie(a,t.child,null,i),a.child=ie(a,null,r,i)):Vt(t,a,r,i),a.memoizedState=n.state,t=a.child):t=dr(t,a,i),t}function y0(t,a,r,e){return re(),a.flags|=256,Vt(t,a,r,e),a.child}var ml={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yl(t){return{baseLanes:t,cachePool:Qh()}}function wl(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=ea),t}function Du(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(ut.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(Y){if(i?Lr(a):Mr(a),(t=nt)?(t=Hs(t,Ma),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Nr!==null?{id:Aa,overflow:Va}:null,retryLane:536870912,hydrationErrors:null},r=qh(t),r.return=a,a.child=r,_t=a,nt=null)):t=null,t===null)throw Er(a);return W1(t)?a.lanes=32:a.lanes=536870912,null}var l=e.children;return e=e.fallback,i?(Mr(a),i=a.mode,l=Go({mode:"hidden",children:l},i),e=Ir(e,i,r,null),l.return=a,e.return=a,l.sibling=e,a.child=l,e=a.child,e.memoizedState=yl(r),e.childLanes=wl(t,o,r),a.memoizedState=ml,Ti(null,e)):(Lr(a),f1(a,l))}var h=t.memoizedState;if(h!==null&&(l=h.dehydrated,l!==null)){if(n)a.flags&256?(Lr(a),a.flags&=-257,a=Cl(t,a,r)):a.memoizedState!==null?(Mr(a),a.child=t.child,a.flags|=128,a=null):(Mr(a),l=e.fallback,i=a.mode,e=Go({mode:"visible",children:e.children},i),l=Ir(l,i,r,null),l.flags|=2,e.return=a,l.return=a,e.sibling=l,a.child=e,ie(a,t.child,null,r),e=a.child,e.memoizedState=yl(r),e.childLanes=wl(t,o,r),a.memoizedState=ml,a=Ti(null,e));else if(Lr(a),W1(l)){if(o=l.nextSibling&&l.nextSibling.dataset,o)var s=o.dgst;o=s,e=Error(m(419)),e.stack="",e.digest=o,an({value:e,source:null,stack:null}),a=Cl(t,a,r)}else if(mt||oi(t,a,r,!1),o=(r&t.childLanes)!==0,mt||o){if(o=tt,o!==null&&(e=ph(o,r),e!==0&&e!==h.retryLane))throw h.retryLane=e,he(t,e),Jt(o,t,e),gd;j1(l)||Ko(),a=Cl(t,a,r)}else j1(l)?(a.flags|=192,a.child=t.child,a=null):(t=h.treeContext,nt=ya(l.nextSibling),_t=a,Y=!0,Wr=null,Ma=!1,t!==null&&Yh(a,t),a=f1(a,e.children),a.flags|=4096);return a}return i?(Mr(a),l=e.fallback,i=a.mode,h=t.child,s=h.sibling,e=rr(h,{mode:"hidden",children:e.children}),e.subtreeFlags=h.subtreeFlags&65011712,s!==null?l=rr(s,l):(l=Ir(l,i,r,null),l.flags|=2),l.return=a,e.return=a,e.sibling=l,a.child=e,Ti(null,e),e=a.child,l=t.child.memoizedState,l===null?l=yl(r):(i=l.cachePool,i!==null?(h=Mt._currentValue,i=i.parent!==h?{parent:h,pool:h}:i):i=Qh(),l={baseLanes:l.baseLanes|r,cachePool:i}),e.memoizedState=l,e.childLanes=wl(t,o,r),a.memoizedState=ml,Ti(t.child,e)):(Lr(a),r=t.child,t=r.sibling,r=rr(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function f1(t,a){return a=Go({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Go(t,a){return t=ra(22,t,null,a),t.lanes=0,t}function Cl(t,a,r){return ie(a,t.child,null,r),t=f1(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function w0(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),r1(t.return,a,r)}function bl(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function Ou(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=ut.current,l=(o&2)!==0;if(l?(o=o&1|2,a.flags|=128):o&=1,at(ut,o),Vt(t,a,e,r),e=Y?tn:0,!l&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&w0(t,r,a);else if(t.tag===19)w0(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&Oo(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),bl(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&Oo(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}bl(a,!0,r,null,n,e);break;case"together":bl(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function dr(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Or|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(oi(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(m(153));if(a.child!==null){for(t=a.child,r=rr(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=rr(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function pd(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&No(t)))}function O5(t,a,r){switch(a.tag){case 3:Ho(a,a.stateNode.containerInfo),xr(a,Mt,t.memoizedState.cache),re();break;case 27:case 5:Gl(a);break;case 4:Ho(a,a.stateNode.containerInfo);break;case 10:xr(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,d1(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(Lr(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Du(t,a,r):(Lr(a),t=dr(t,a,r),t!==null?t.sibling:null);Lr(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||(oi(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return Ou(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),at(ut,ut.current),e)break;return null;case 22:return a.lanes=0,Eu(t,a,r,a.pendingProps);case 24:xr(a,Mt,t.memoizedState.cache)}return dr(t,a,r)}function Uu(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)mt=!0;else{if(!pd(t,r)&&(a.flags&128)===0)return mt=!1,O5(t,a,r);mt=(t.flags&131072)!==0}else mt=!1,Y&&(a.flags&1048576)!==0&&Gh(a,tn,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=Rr(a.elementType),a.type=t,typeof t=="function")Q1(t)?(e=oe(t,e),a.tag=1,a=m0(null,a,t,e,r)):(a.tag=0,a=p1(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===V1){a.tag=11,a=v0(null,a,t,e,r);break t}else if(i===z1){a.tag=14,a=k0(null,a,t,e,r);break t}}throw a=Zl(t)||t,Error(m(306,a,""))}}return a;case 0:return p1(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=oe(e,a.pendingProps),m0(t,a,e,i,r);case 3:t:{if(Ho(a,a.stateNode.containerInfo),t===null)throw Error(m(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,n1(t,a),Gi(a,e,null,r);var o=a.memoizedState;if(e=o.cache,xr(a,Mt,e),e!==n.cache&&e1(a,[Mt],r,!0),qi(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=y0(t,a,e,r);break t}else if(e!==i){i=La(Error(m(424)),a),an(i),a=y0(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,nt=ya(t.firstChild),_t=a,Y=!0,Wr=null,Ma=!0,r=Rh(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(re(),e===i){a=dr(t,a,r);break t}Vt(t,a,e,r)}a=a.child}return a;case 26:return yo(t,a),t===null?(r=X0(a.type,null,a.pendingProps,null))?a.memoizedState=r:Y||(r=a.type,t=a.pendingProps,e=$o(jr.current).createElement(r),e[zt]=a,e[Rt]=t,Nt(e,r,t),Wt(e),a.stateNode=e):a.memoizedState=X0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Gl(a),t===null&&Y&&(e=a.stateNode=Ss(a.type,a.pendingProps,jr.current),_t=a,Ma=!0,i=nt,Zr(a.type)?(H1=i,nt=ya(e.firstChild)):nt=i),Vt(t,a,a.pendingProps.children,r),yo(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Y&&((i=e=nt)&&(e=pf(e,a.type,a.pendingProps,Ma),e!==null?(a.stateNode=e,_t=a,nt=ya(e.firstChild),Ma=!1,i=!0):i=!1),i||Er(a)),Gl(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,b1(i,n)?e=null:o!==null&&b1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=ad(t,a,S5,null,null,r),dn._currentValue=i),yo(t,a),Vt(t,a,e,r),a.child;case 6:return t===null&&Y&&((t=r=nt)&&(r=ff(r,a.pendingProps,Ma),r!==null?(a.stateNode=r,_t=a,nt=null,t=!0):t=!1),t||Er(a)),null;case 13:return Du(t,a,r);case 4:return Ho(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=ie(a,null,e,r):Vt(t,a,e,r),a.child;case 11:return v0(t,a,a.type,a.pendingProps,r);case 7:return Vt(t,a,a.pendingProps,r),a.child;case 8:return Vt(t,a,a.pendingProps.children,r),a.child;case 12:return Vt(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,xr(a,a.type,e.value),Vt(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,ee(a),i=Tt(i),e=e(i),a.flags|=1,Vt(t,a,e,r),a.child;case 14:return k0(t,a,a.type,a.pendingProps,r);case 15:return Nu(t,a,a.type,a.pendingProps,r);case 19:return Ou(t,a,r);case 31:return D5(t,a,r);case 22:return Eu(t,a,r,a.pendingProps);case 24:return ee(a),e=Tt(Mt),t===null?(i=F1(),i===null&&(i=tt,n=R1(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},I1(a),xr(a,Mt,i)):((t.lanes&r)!==0&&(n1(t,a),Gi(a,null,null,r),qi()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),xr(a,Mt,e)):(e=n.cache,xr(a,Mt,e),e!==i.cache&&e1(a,[Mt],r,!0))),Vt(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(m(156,a.tag))}function Ka(t){t.flags|=4}function Bl(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(hs())t.flags|=8192;else throw te=Eo,$1}else t.flags&=-16777217}function C0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!zs(a))if(hs())t.flags|=8192;else throw te=Eo,$1}function no(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?uh():536870912,t.lanes|=a,Pe|=a)}function Wi(t,a){if(!Y)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function it(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function U5(t,a,r){var e=a.pendingProps;switch(J1(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(a),null;case 1:return it(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),er(Mt),Ke(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ce(a)?Ka(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,kl())),it(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(Ka(a),n!==null?(it(a),C0(a,n)):(it(a),Bl(a,i,null,e,r))):n?n!==t.memoizedState?(Ka(a),it(a),C0(a,n)):(it(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&Ka(a),it(a),Bl(a,i,t,e,r)),null;case 27:if(So(a),r=jr.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ka(a);else{if(!e){if(a.stateNode===null)throw Error(m(166));return it(a),null}t=_a.current,Ce(a)?Pc(a,t):(t=Ss(i,e,r),a.stateNode=t,Ka(a))}return it(a),null;case 5:if(So(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ka(a);else{if(!e){if(a.stateNode===null)throw Error(m(166));return it(a),null}if(n=_a.current,Ce(a))Pc(a,n);else{var o=$o(jr.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[zt]=a,n[Rt]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(Nt(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ka(a)}}return it(a),Bl(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&Ka(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(m(166));if(t=jr.current,Ce(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=_t,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[zt]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||Bs(t.nodeValue,r)),t||Er(a,!0)}else t=$o(t).createTextNode(e),t[zt]=a,a.stateNode=t}return it(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=Ce(a),r!==null){if(t===null){if(!e)throw Error(m(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[zt]=a}else re(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;it(a),t=!1}else r=kl(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?(aa(a),a):(aa(a),null);if((a.flags&128)!==0)throw Error(m(558))}return it(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Ce(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(m(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[zt]=a}else re(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;it(a),i=!1}else i=kl(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(aa(a),a):(aa(a),null)}return aa(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),no(a,a.updateQueue),it(a),null);case 4:return Ke(),t===null&&md(a.stateNode.containerInfo),it(a),null;case 10:return er(a.type),it(a),null;case 19:if(Ht(ut),e=a.memoizedState,e===null)return it(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)Wi(e,!1);else{if(ht!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=Oo(t),n!==null){for(a.flags|=128,Wi(e,!1),t=n.updateQueue,a.updateQueue=t,no(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)Zh(r,t),r=r.sibling;return at(ut,ut.current&1|2),Y&&$a(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&ia()>Xo&&(a.flags|=128,i=!0,Wi(e,!1),a.lanes=4194304)}else{if(!i)if(t=Oo(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,no(a,t),Wi(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!Y)return it(a),null}else 2*ia()-e.renderingStartTime>Xo&&r!==536870912&&(a.flags|=128,i=!0,Wi(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=ia(),t.sibling=null,r=ut.current,at(ut,i?r&1|2:r&1),Y&&$a(a,e.treeForkCount),t):(it(a),null);case 22:case 23:return aa(a),P1(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(it(a),a.subtreeFlags&6&&(a.flags|=8192)):it(a),r=a.updateQueue,r!==null&&no(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&Ht(Pr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),er(Mt),it(a),null;case 25:return null;case 30:return null}throw Error(m(156,a.tag))}function Z5(t,a){switch(J1(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return er(Mt),Ke(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return So(a),null;case 31:if(a.memoizedState!==null){if(aa(a),a.alternate===null)throw Error(m(340));re()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(aa(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(m(340));re()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Ht(ut),null;case 4:return Ke(),null;case 10:return er(a.type),null;case 22:case 23:return aa(a),P1(),t!==null&&Ht(Pr),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return er(Mt),null;case 25:return null;default:return null}}function Zu(t,a){switch(J1(a),a.tag){case 3:er(Mt),Ke();break;case 26:case 27:case 5:So(a);break;case 4:Ke();break;case 31:a.memoizedState!==null&&aa(a);break;case 13:aa(a);break;case 19:Ht(ut);break;case 10:er(a.type);break;case 22:case 23:aa(a),P1(),t!==null&&Ht(Pr);break;case 24:er(Mt)}}function Ln(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(l){R(a,a.return,l)}}function Dr(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,l=o.destroy;if(l!==void 0){o.destroy=void 0,i=a;var h=r,s=l;try{s()}catch(v){R(i,h,v)}}}e=e.next}while(e!==n)}}catch(v){R(a,a.return,v)}}function qu(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{$h(a,r)}catch(e){R(t,t.return,e)}}}function Gu(t,a,r){r.props=oe(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){R(t,a,e)}}function Xi(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){R(t,a,i)}}function za(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){R(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){R(t,a,i)}else r.current=null}function Yu(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){R(t,t.return,i)}}function jl(t,a,r){try{var e=t.stateNode;df(e,t.type,r,a),e[Rt]=a}catch(i){R(t,t.return,i)}}function Xu(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Zr(t.type)||t.tag===4}function Wl(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Xu(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Zr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function v1(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=tr));else if(e!==4&&(e===27&&Zr(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(v1(t,a,r),t=t.sibling;t!==null;)v1(t,a,r),t=t.sibling}function Yo(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&Zr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Yo(t,a,r),t=t.sibling;t!==null;)Yo(t,a,r),t=t.sibling}function Qu(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Nt(a,e,r),a[zt]=t,a[Rt]=r}catch(n){R(t,t.return,n)}}var Ia=!1,Lt=!1,Hl=!1,b0=typeof WeakSet=="function"?WeakSet:Set,jt=null;function q5(t,a){if(t=t.containerInfo,w1=a2,t=zh(t),G1(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,l=-1,h=-1,s=0,v=0,k=t,g=null;a:for(;;){for(var x;k!==r||i!==0&&k.nodeType!==3||(l=o+i),k!==n||e!==0&&k.nodeType!==3||(h=o+e),k.nodeType===3&&(o+=k.nodeValue.length),(x=k.firstChild)!==null;)g=k,k=x;for(;;){if(k===t)break a;if(g===r&&++s===i&&(l=o),g===n&&++v===e&&(h=o),(x=k.nextSibling)!==null)break;k=g,g=k.parentNode}k=x}r=l===-1||h===-1?null:{start:l,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(C1={focusedElem:t,selectionRange:r},a2=!1,jt=a;jt!==null;)if(a=jt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,jt=t;else for(;jt!==null;){switch(a=jt,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var y=oe(r.type,i);t=e.getSnapshotBeforeUpdate(y,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(b){R(r,r.return,b)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)B1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":B1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=a.sibling,t!==null){t.return=a.return,jt=t;break}jt=a.return}}function Ku(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:Ra(t,r),e&4&&Ln(5,r);break;case 1:if(Ra(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){R(r,r.return,o)}else{var i=oe(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){R(r,r.return,o)}}e&64&&qu(r),e&512&&Xi(r,r.return);break;case 3:if(Ra(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{$h(t,a)}catch(o){R(r,r.return,o)}}break;case 27:a===null&&e&4&&Qu(r);case 26:case 5:Ra(t,r),a===null&&e&4&&Yu(r),e&512&&Xi(r,r.return);break;case 12:Ra(t,r);break;case 31:Ra(t,r),e&4&&Fu(t,r);break;case 13:Ra(t,r),e&4&&$u(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=$5.bind(null,r),vf(t,r))));break;case 22:if(e=r.memoizedState!==null||Ia,!e){a=a!==null&&a.memoizedState!==null||Lt,i=Ia;var n=Lt;Ia=e,(Lt=a)&&!n?Fa(t,r,(r.subtreeFlags&8772)!==0):Ra(t,r),Ia=i,Lt=n}break;case 30:break;default:Ra(t,r)}}function Ju(t){var a=t.alternate;a!==null&&(t.alternate=null,Ju(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&E1(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dt=null,Qt=!1;function Ja(t,a,r){for(r=r.child;r!==null;)Ru(t,a,r),r=r.sibling}function Ru(t,a,r){if(na&&typeof na.onCommitFiberUnmount=="function")try{na.onCommitFiberUnmount(sn,r)}catch{}switch(r.tag){case 26:Lt||za(r,a),Ja(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Lt||za(r,a);var e=dt,i=Qt;Zr(r.type)&&(dt=r.stateNode,Qt=!1),Ja(t,a,r),Ri(r.stateNode),dt=e,Qt=i;break;case 5:Lt||za(r,a);case 6:if(e=dt,i=Qt,dt=null,Ja(t,a,r),dt=e,Qt=i,dt!==null)if(Qt)try{(dt.nodeType===9?dt.body:dt.nodeName==="HTML"?dt.ownerDocument.body:dt).removeChild(r.stateNode)}catch(n){R(r,a,n)}else try{dt.removeChild(r.stateNode)}catch(n){R(r,a,n)}break;case 18:dt!==null&&(Qt?(t=dt,U0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),ei(t)):U0(dt,r.stateNode));break;case 4:e=dt,i=Qt,dt=r.stateNode.containerInfo,Qt=!0,Ja(t,a,r),dt=e,Qt=i;break;case 0:case 11:case 14:case 15:Dr(2,r,a),Lt||Dr(4,r,a),Ja(t,a,r);break;case 1:Lt||(za(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&Gu(r,a,e)),Ja(t,a,r);break;case 21:Ja(t,a,r);break;case 22:Lt=(e=Lt)||r.memoizedState!==null,Ja(t,a,r),Lt=e;break;default:Ja(t,a,r)}}function Fu(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ei(t)}catch(r){R(a,a.return,r)}}}function $u(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ei(t)}catch(r){R(a,a.return,r)}}function G5(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new b0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new b0),a;default:throw Error(m(435,t.tag))}}function oo(t,a){var r=G5(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=I5.bind(null,t,e);e.then(i,i)}})}function Yt(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Zr(l.type)){dt=l.stateNode,Qt=!1;break t}break;case 5:dt=l.stateNode,Qt=!1;break t;case 3:case 4:dt=l.stateNode.containerInfo,Qt=!0;break t}l=l.return}if(dt===null)throw Error(m(160));Ru(n,o,i),dt=null,Qt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Iu(a,t),a=a.sibling}var ja=null;function Iu(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yt(a,t),Xt(t),e&4&&(Dr(3,t,t.return),Ln(3,t),Dr(5,t,t.return));break;case 1:Yt(a,t),Xt(t),e&512&&(Lt||r===null||za(r,r.return)),e&64&&Ia&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=ja;if(Yt(a,t),Xt(t),e&512&&(Lt||r===null||za(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[fn]||n[zt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),Nt(n,e,r),n[zt]=t,Wt(n),e=n;break t;case"link":var o=K0("link","href",i).get(e+(r.href||""));if(o){for(var l=0;l<o.length;l++)if(n=o[l],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(l,1);break a}}n=i.createElement(e),Nt(n,e,r),i.head.appendChild(n);break;case"meta":if(o=K0("meta","content",i).get(e+(r.content||""))){for(l=0;l<o.length;l++)if(n=o[l],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(l,1);break a}}n=i.createElement(e),Nt(n,e,r),i.head.appendChild(n);break;default:throw Error(m(468,e))}n[zt]=t,Wt(n),e=n}t.stateNode=e}else J0(i,t.type,t.stateNode);else t.stateNode=Q0(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?J0(i,t.type,t.stateNode):Q0(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&jl(t,t.memoizedProps,r.memoizedProps)}break;case 27:Yt(a,t),Xt(t),e&512&&(Lt||r===null||za(r,r.return)),r!==null&&e&4&&jl(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Yt(a,t),Xt(t),e&512&&(Lt||r===null||za(r,r.return)),t.flags&32){i=t.stateNode;try{Re(i,"")}catch(y){R(t,t.return,y)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,jl(t,i,r!==null?r.memoizedProps:i)),e&1024&&(Hl=!0);break;case 6:if(Yt(a,t),Xt(t),e&4){if(t.stateNode===null)throw Error(m(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(y){R(t,t.return,y)}}break;case 3:if(bo=null,i=ja,ja=Io(a.containerInfo),Yt(a,t),ja=i,Xt(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{ei(a.containerInfo)}catch(y){R(t,t.return,y)}Hl&&(Hl=!1,Pu(t));break;case 4:e=ja,ja=Io(t.stateNode.containerInfo),Yt(a,t),Xt(t),ja=e;break;case 12:Yt(a,t),Xt(t);break;case 31:Yt(a,t),Xt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,oo(t,e)));break;case 13:Yt(a,t),Xt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(p2=ia()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,oo(t,e)));break;case 22:i=t.memoizedState!==null;var h=r!==null&&r.memoizedState!==null,s=Ia,v=Lt;if(Ia=s||i,Lt=v||h,Yt(a,t),Lt=v,Ia=s,Xt(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||h||Ia||Lt||Fr(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){h=r=a;try{if(n=h.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{l=h.stateNode;var k=h.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(y){R(h,h.return,y)}}}else if(a.tag===6){if(r===null){h=a;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(y){R(h,h.return,y)}}}else if(a.tag===18){if(r===null){h=a;try{var x=h.stateNode;i?Z0(x,!0):Z0(h.stateNode,!1)}catch(y){R(h,h.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,oo(t,r))));break;case 19:Yt(a,t),Xt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,oo(t,e)));break;case 30:break;case 21:break;default:Yt(a,t),Xt(t)}}function Xt(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if(Xu(e)){r=e;break}e=e.return}if(r==null)throw Error(m(160));switch(r.tag){case 27:var i=r.stateNode,n=Wl(t);Yo(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(Re(o,""),r.flags&=-33);var l=Wl(t);Yo(t,l,o);break;case 3:case 4:var h=r.stateNode.containerInfo,s=Wl(t);v1(t,s,h);break;default:throw Error(m(161))}}catch(v){R(t,t.return,v)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function Pu(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;Pu(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Ra(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Ku(t,a.alternate,a),a=a.sibling}function Fr(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Dr(4,a,a.return),Fr(a);break;case 1:za(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Gu(a,a.return,r),Fr(a);break;case 27:Ri(a.stateNode);case 26:case 5:za(a,a.return),Fr(a);break;case 22:a.memoizedState===null&&Fr(a);break;case 30:Fr(a);break;default:Fr(a)}t=t.sibling}}function Fa(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:Fa(i,n,r),Ln(4,n);break;case 1:if(Fa(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(s){R(e,e.return,s)}if(e=n,i=e.updateQueue,i!==null){var l=e.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)Fh(h[i],l)}catch(s){R(e,e.return,s)}}r&&o&64&&qu(n),Xi(n,n.return);break;case 27:Qu(n);case 26:case 5:Fa(i,n,r),r&&e===null&&o&4&&Yu(n),Xi(n,n.return);break;case 12:Fa(i,n,r);break;case 31:Fa(i,n,r),r&&o&4&&Fu(i,n);break;case 13:Fa(i,n,r),r&&o&4&&$u(i,n);break;case 22:n.memoizedState===null&&Fa(i,n,r),Xi(n,n.return);break;case 30:break;default:Fa(i,n,r)}a=a.sibling}}function fd(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&kn(r))}function vd(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&kn(t))}function Ba(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ts(t,a,r,e),a=a.sibling}function ts(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(t,a,r,e),i&2048&&Ln(9,a);break;case 1:Ba(t,a,r,e);break;case 3:Ba(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&kn(t)));break;case 12:if(i&2048){Ba(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,l=n.onPostCommit;typeof l=="function"&&l(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){R(a,a.return,h)}}else Ba(t,a,r,e);break;case 31:Ba(t,a,r,e);break;case 13:Ba(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?Ba(t,a,r,e):Qi(t,a):n._visibility&2?Ba(t,a,r,e):(n._visibility|=2,Be(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&fd(o,a);break;case 24:Ba(t,a,r,e),i&2048&&vd(a.alternate,a);break;default:Ba(t,a,r,e)}}function Be(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,l=r,h=e,s=o.flags;switch(o.tag){case 0:case 11:case 15:Be(n,o,l,h,i),Ln(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?Be(n,o,l,h,i):Qi(n,o):(v._visibility|=2,Be(n,o,l,h,i)),i&&s&2048&&fd(o.alternate,o);break;case 24:Be(n,o,l,h,i),i&&s&2048&&vd(o.alternate,o);break;default:Be(n,o,l,h,i)}a=a.sibling}}function Qi(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:Qi(r,e),i&2048&&fd(e.alternate,e);break;case 24:Qi(r,e),i&2048&&vd(e.alternate,e);break;default:Qi(r,e)}a=a.sibling}}var Ni=8192;function be(t,a,r){if(t.subtreeFlags&Ni)for(t=t.child;t!==null;)as(t,a,r),t=t.sibling}function as(t,a,r){switch(t.tag){case 26:be(t,a,r),t.flags&Ni&&t.memoizedState!==null&&Wf(r,ja,t.memoizedState,t.memoizedProps);break;case 5:be(t,a,r);break;case 3:case 4:var e=ja;ja=Io(t.stateNode.containerInfo),be(t,a,r),ja=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Ni,Ni=16777216,be(t,a,r),Ni=e):be(t,a,r));break;default:be(t,a,r)}}function rs(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function Hi(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];jt=e,is(e,t)}rs(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)es(t),t=t.sibling}function es(t){switch(t.tag){case 0:case 11:case 15:Hi(t),t.flags&2048&&Dr(9,t,t.return);break;case 3:Hi(t);break;case 12:Hi(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,wo(t)):Hi(t);break;default:Hi(t)}}function wo(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];jt=e,is(e,t)}rs(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Dr(8,a,a.return),wo(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,wo(a));break;default:wo(a)}t=t.sibling}}function is(t,a){for(;jt!==null;){var r=jt;switch(r.tag){case 0:case 11:case 15:Dr(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:kn(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,jt=e;else t:for(r=t;jt!==null;){e=jt;var i=e.sibling,n=e.return;if(Ju(e),e===r){jt=null;break t}if(i!==null){i.return=n,jt=i;break t}jt=n}}}var Y5={getCacheForType:function(t){var a=Tt(Mt),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return Tt(Mt).controller.signal}},X5=typeof WeakMap=="function"?WeakMap:Map,X=0,tt=null,Z=null,G=0,J=0,ta=null,Cr=!1,di=!1,kd=!1,cr=0,ht=0,Or=0,ae=0,xd=0,ea=0,Pe=0,Ki=null,Kt=null,k1=!1,p2=0,ns=0,Xo=1/0,Qo=null,Ar=null,yt=0,Vr=null,ti=null,ir=0,x1=0,L1=null,os=null,Ji=0,M1=null;function la(){return(X&2)!==0&&G!==0?G&-G:z.T!==null?Md():fh()}function ls(){if(ea===0)if((G&536870912)===0||Y){var t=Fn;Fn<<=1,(Fn&3932160)===0&&(Fn=262144),ea=t}else ea=536870912;return t=ca.current,t!==null&&(t.flags|=32),ea}function Jt(t,a,r){(t===tt&&(J===2||J===9)||t.cancelPendingCommit!==null)&&(ai(t,0),br(t,G,ea,!1)),pn(t,r),((X&2)===0||t!==tt)&&(t===tt&&((X&2)===0&&(ae|=r),ht===4&&br(t,G,ea,!1)),Na(t))}function ds(t,a,r){if((X&6)!==0)throw Error(m(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||gn(t,a),i=e?J5(t,a):Sl(t,a,!0),n=e;do{if(i===0){di&&!e&&br(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!Q5(r)){i=Sl(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var l=t;i=Ki;var h=l.current.memoizedState.isDehydrated;if(h&&(ai(l,o).flags|=256),o=Sl(l,o,!1),o!==2){if(kd&&!h){l.errorRecoveryDisabledLanes|=n,ae|=n,i=4;break t}n=Kt,Kt=i,n!==null&&(Kt===null?Kt=n:Kt.push.apply(Kt,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){ai(t,0),br(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(m(345));case 4:if((a&4194048)!==a)break;case 6:br(e,a,ea,!Cr);break t;case 2:Kt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((a&62914560)===a&&(i=p2+300-ia(),10<i)){if(br(e,a,ea,!Cr),e2(e,0,!0)!==0)break t;ir=a,e.timeoutHandle=Ws(B0.bind(null,e,r,Kt,Qo,k1,a,ea,ae,Pe,Cr,n,"Throttled",-0,0),i);break t}B0(e,r,Kt,Qo,k1,a,ea,ae,Pe,Cr,n,null,-0,0)}}break}while(!0);Na(t)}function B0(t,a,r,e,i,n,o,l,h,s,v,k,g,x){if(t.timeoutHandle=-1,k=a.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tr},as(a,n,k);var y=(n&62914560)===n?p2-ia():(n&4194048)===n?ns-ia():0;if(y=Hf(k,y),y!==null){ir=n,t.cancelPendingCommit=y(W0.bind(null,t,a,n,r,e,i,o,l,h,v,k,null,g,x)),br(t,n,o,!s);return}}W0(t,a,n,r,e,i,o,l,h)}function Q5(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!da(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function br(t,a,r,e){a&=~xd,a&=~ae,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-oa(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&sh(t,r,a)}function f2(){return(X&6)===0?(Mn(0,!1),!1):!0}function Ld(){if(Z!==null){if(J===0)var t=Z.return;else t=Z,ar=ue=null,id(t),Ye=null,rn=0,t=Z;for(;t!==null;)Zu(t.alternate,t),t=t.return;Z=null}}function ai(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,uf(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ir=0,Ld(),tt=t,Z=r=rr(t.current,null),G=a,J=0,ta=null,Cr=!1,di=gn(t,a),kd=!1,Pe=ea=xd=ae=Or=ht=0,Kt=Ki=null,k1=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-oa(e),n=1<<i;a|=t[i],e&=~n}return cr=a,l2(),r}function cs(t,a){N=null,z.H=nn,a===li||a===c2?(a=i0(),J=3):a===$1?(a=i0(),J=4):J=a===gd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ta=a,Z===null&&(ht=1,qo(t,La(a,t.current)))}function hs(){var t=ca.current;return t===null?!0:(G&4194048)===G?ma===null:(G&62914560)===G||(G&536870912)!==0?t===ma:!1}function us(){var t=z.H;return z.H=nn,t===null?nn:t}function ss(){var t=z.A;return z.A=Y5,t}function Ko(){ht=4,Cr||(G&4194048)!==G&&ca.current!==null||(di=!0),(Or&134217727)===0&&(ae&134217727)===0||tt===null||br(tt,G,ea,!1)}function Sl(t,a,r){var e=X;X|=2;var i=us(),n=ss();(tt!==t||G!==a)&&(Qo=null,ai(t,a)),a=!1;var o=ht;t:do try{if(J!==0&&Z!==null){var l=Z,h=ta;switch(J){case 8:Ld(),o=6;break t;case 3:case 2:case 9:case 6:ca.current===null&&(a=!0);var s=J;if(J=0,ta=null,Oe(t,l,h,s),r&&di){o=0;break t}break;default:s=J,J=0,ta=null,Oe(t,l,h,s)}}K5(),o=ht;break}catch(v){cs(t,v)}while(!0);return a&&t.shellSuspendCounter++,ar=ue=null,X=e,z.H=i,z.A=n,Z===null&&(tt=null,G=0,l2()),o}function K5(){for(;Z!==null;)gs(Z)}function J5(t,a){var r=X;X|=2;var e=us(),i=ss();tt!==t||G!==a?(Qo=null,Xo=ia()+500,ai(t,a)):di=gn(t,a);t:do try{if(J!==0&&Z!==null){a=Z;var n=ta;a:switch(J){case 1:J=0,ta=null,Oe(t,a,n,1);break;case 2:case 9:if(e0(n)){J=0,ta=null,j0(a);break}a=function(){J!==2&&J!==9||tt!==t||(J=7),Na(t)},n.then(a,a);break t;case 3:J=7;break t;case 4:J=5;break t;case 7:e0(n)?(J=0,ta=null,j0(a)):(J=0,ta=null,Oe(t,a,n,7));break;case 5:var o=null;switch(Z.tag){case 26:o=Z.memoizedState;case 5:case 27:var l=Z;if(o?zs(o):l.stateNode.complete){J=0,ta=null;var h=l.sibling;if(h!==null)Z=h;else{var s=l.return;s!==null?(Z=s,v2(s)):Z=null}break a}}J=0,ta=null,Oe(t,a,n,5);break;case 6:J=0,ta=null,Oe(t,a,n,6);break;case 8:Ld(),ht=6;break t;default:throw Error(m(462))}}R5();break}catch(v){cs(t,v)}while(!0);return ar=ue=null,z.H=e,z.A=i,X=r,Z!==null?0:(tt=null,G=0,l2(),ht)}function R5(){for(;Z!==null&&!xp();)gs(Z)}function gs(t){var a=Uu(t.alternate,t,cr);t.memoizedProps=t.pendingProps,a===null?v2(t):Z=a}function j0(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=M0(r,a,a.pendingProps,a.type,void 0,G);break;case 11:a=M0(r,a,a.pendingProps,a.type.render,a.ref,G);break;case 5:id(a);default:Zu(r,a),a=Z=Zh(a,cr),a=Uu(r,a,cr)}t.memoizedProps=t.pendingProps,a===null?v2(t):Z=a}function Oe(t,a,r,e){ar=ue=null,id(a),Ye=null,rn=0;var i=a.return;try{if(E5(t,i,a,r,G)){ht=1,qo(t,La(r,t.current)),Z=null;return}}catch(n){if(i!==null)throw Z=i,n;ht=1,qo(t,La(r,t.current)),Z=null;return}a.flags&32768?(Y||e===1?t=!0:di||(G&536870912)!==0?t=!1:(Cr=t=!0,(e===2||e===9||e===3||e===6)&&(e=ca.current,e!==null&&e.tag===13&&(e.flags|=16384))),ps(a,t)):v2(a)}function v2(t){var a=t;do{if((a.flags&32768)!==0){ps(a,Cr);return}t=a.return;var r=U5(a.alternate,a,cr);if(r!==null){Z=r;return}if(a=a.sibling,a!==null){Z=a;return}Z=a=t}while(a!==null);ht===0&&(ht=5)}function ps(t,a){do{var r=Z5(t.alternate,t);if(r!==null){r.flags&=32767,Z=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){Z=t;return}Z=t=r}while(t!==null);ht=6,Z=null}function W0(t,a,r,e,i,n,o,l,h){t.cancelPendingCommit=null;do k2();while(yt!==0);if((X&6)!==0)throw Error(m(327));if(a!==null){if(a===t.current)throw Error(m(177));if(n=a.lanes|a.childLanes,n|=Y1,Wp(t,r,n,o,l,h),t===tt&&(Z=tt=null,G=0),ti=a,Vr=t,ir=r,x1=n,L1=i,os=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,P5(Ao,function(){return Ls(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=z.T,z.T=null,i=Q.p,Q.p=2,o=X,X|=4;try{q5(t,a,r)}finally{X=o,Q.p=i,z.T=e}}yt=1,fs(),vs(),ks()}}function fs(){if(yt===1){yt=0;var t=Vr,a=ti,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{Iu(a,t);var n=C1,o=zh(t.containerInfo),l=n.focusedElem,h=n.selectionRange;if(o!==l&&l&&l.ownerDocument&&Vh(l.ownerDocument.documentElement,l)){if(h!==null&&G1(l)){var s=h.start,v=h.end;if(v===void 0&&(v=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(v,l.value.length);else{var k=l.ownerDocument||document,g=k&&k.defaultView||window;if(g.getSelection){var x=g.getSelection(),y=l.textContent.length,b=Math.min(h.start,y),E=h.end===void 0?b:Math.min(h.end,y);!x.extend&&b>E&&(o=E,E=b,b=o);var p=Fc(l,b),u=Fc(l,E);if(p&&u&&(x.rangeCount!==1||x.anchorNode!==p.node||x.anchorOffset!==p.offset||x.focusNode!==u.node||x.focusOffset!==u.offset)){var f=k.createRange();f.setStart(p.node,p.offset),x.removeAllRanges(),b>E?(x.addRange(f),x.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),x.addRange(f))}}}}for(k=[],x=l;x=x.parentNode;)x.nodeType===1&&k.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<k.length;l++){var L=k[l];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}a2=!!w1,C1=w1=null}finally{X=i,Q.p=e,z.T=r}}t.current=a,yt=2}}function vs(){if(yt===2){yt=0;var t=Vr,a=ti,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{Ku(t,a.alternate,a)}finally{X=i,Q.p=e,z.T=r}}yt=3}}function ks(){if(yt===4||yt===3){yt=0,Lp();var t=Vr,a=ti,r=ir,e=os;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?yt=5:(yt=0,ti=Vr=null,xs(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Ar=null),N1(r),a=a.stateNode,na&&typeof na.onCommitFiberRoot=="function")try{na.onCommitFiberRoot(sn,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=z.T,i=Q.p,Q.p=2,z.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var l=e[o];n(l.value,{componentStack:l.stack})}}finally{z.T=a,Q.p=i}}(ir&3)!==0&&k2(),Na(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===M1?Ji++:(Ji=0,M1=t):Ji=0,Mn(0,!1)}}function xs(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,kn(a)))}function k2(){return fs(),vs(),ks(),Ls()}function Ls(){if(yt!==5)return!1;var t=Vr,a=x1;x1=0;var r=N1(ir),e=z.T,i=Q.p;try{Q.p=32>r?32:r,z.T=null,r=L1,L1=null;var n=Vr,o=ir;if(yt=0,ti=Vr=null,ir=0,(X&6)!==0)throw Error(m(331));var l=X;if(X|=4,es(n.current),ts(n,n.current,o,r),X=l,Mn(0,!1),na&&typeof na.onPostCommitFiberRoot=="function")try{na.onPostCommitFiberRoot(sn,n)}catch{}return!0}finally{Q.p=i,z.T=e,xs(t,a)}}function H0(t,a,r){a=La(r,a),a=g1(t.stateNode,a,2),t=Sr(t,a,2),t!==null&&(pn(t,2),Na(t))}function R(t,a,r){if(t.tag===3)H0(t,t,r);else for(;a!==null;){if(a.tag===3){H0(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Ar===null||!Ar.has(e))){t=La(r,t),r=_u(2),e=Sr(a,r,2),e!==null&&(Tu(r,e,a,t),pn(e,2),Na(e));break}}a=a.return}}function Al(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new X5;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(kd=!0,i.add(r),t=F5.bind(null,t,a,r),a.then(t,t))}function F5(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,tt===t&&(G&r)===r&&(ht===4||ht===3&&(G&62914560)===G&&300>ia()-p2?(X&2)===0&&ai(t,0):xd|=r,Pe===G&&(Pe=0)),Na(t)}function Ms(t,a){a===0&&(a=uh()),t=he(t,a),t!==null&&(pn(t,a),Na(t))}function $5(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),Ms(t,r)}function I5(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(m(314))}e!==null&&e.delete(a),Ms(t,r)}function P5(t,a){return _1(t,a)}var Jo=null,je=null,m1=!1,Ro=!1,Vl=!1,Br=0;function Na(t){t!==je&&t.next===null&&(je===null?Jo=je=t:je=je.next=t),Ro=!0,m1||(m1=!0,af())}function Mn(t,a){if(!Vl&&Ro){Vl=!0;do for(var r=!1,e=Jo;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,l=e.pingedLanes;n=(1<<31-oa(42|t)+1)-1,n&=i&~(o&~l),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,S0(e,n))}else n=G,n=e2(e,e===tt?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||gn(e,n)||(r=!0,S0(e,n));e=e.next}while(r);Vl=!1}}function tf(){ms()}function ms(){Ro=m1=!1;var t=0;Br!==0&&hf()&&(t=Br);for(var a=ia(),r=null,e=Jo;e!==null;){var i=e.next,n=ys(e,a);n===0?(e.next=null,r===null?Jo=i:r.next=i,i===null&&(je=r)):(r=e,(t!==0||(n&3)!==0)&&(Ro=!0)),e=i}yt!==0&&yt!==5||Mn(t,!1),Br!==0&&(Br=0)}function ys(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-oa(n),l=1<<o,h=i[o];h===-1?((l&r)===0||(l&e)!==0)&&(i[o]=jp(l,a)):h<=a&&(t.expiredLanes|=l),n&=~l}if(a=tt,r=G,r=e2(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(J===2||J===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&ll(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||gn(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&ll(e),N1(r)){case 2:case 8:r=ch;break;case 32:r=Ao;break;case 268435456:r=hh;break;default:r=Ao}return e=ws.bind(null,t),r=_1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&ll(e),t.callbackPriority=2,t.callbackNode=null,2}function ws(t,a){if(yt!==0&&yt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(k2()&&t.callbackNode!==r)return null;var e=G;return e=e2(t,t===tt?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(ds(t,e,a),ys(t,ia()),t.callbackNode!=null&&t.callbackNode===r?ws.bind(null,t):null)}function S0(t,a){if(k2())return null;ds(t,a,!0)}function af(){sf(function(){(X&6)!==0?_1(dh,tf):ms()})}function Md(){if(Br===0){var t=Fe;t===0&&(t=Rn,Rn<<=1,(Rn&261888)===0&&(Rn=256)),Br=t}return Br}function A0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:po(""+t)}function V0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function rf(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=A0((i[Rt]||null).action),o=e.submitter;o&&(a=(a=o[Rt]||null)?A0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var l=new i2("action","action",null,e,i);t.push({event:l,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Br!==0){var h=o?V0(i,o):new FormData(i);u1(r,{pending:!0,data:h,method:i.method,action:n},null,h)}}else typeof n=="function"&&(l.preventDefault(),h=o?V0(i,o):new FormData(i),u1(r,{pending:!0,data:h,method:i.method,action:n},n,h))},currentTarget:i}]})}}for(lo=0;lo<Pl.length;lo++)co=Pl[lo],z0=co.toLowerCase(),_0=co[0].toUpperCase()+co.slice(1),Wa(z0,"on"+_0);var co,z0,_0,lo;Wa(Th,"onAnimationEnd");Wa(Nh,"onAnimationIteration");Wa(Eh,"onAnimationStart");Wa("dblclick","onDoubleClick");Wa("focusin","onFocus");Wa("focusout","onBlur");Wa(M5,"onTransitionRun");Wa(m5,"onTransitionStart");Wa(y5,"onTransitionCancel");Wa(Dh,"onTransitionEnd");Je("onMouseEnter",["mouseout","mouseover"]);Je("onMouseLeave",["mouseout","mouseover"]);Je("onPointerEnter",["pointerout","pointerover"]);Je("onPointerLeave",["pointerout","pointerover"]);le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));le("onBeforeInput",["compositionend","keypress","textInput","paste"]);le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var on="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ef=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(on));function Cs(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var l=e[o],h=l.instance,s=l.currentTarget;if(l=l.listener,h!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){zo(v)}i.currentTarget=null,n=h}else for(o=0;o<e.length;o++){if(l=e[o],h=l.instance,s=l.currentTarget,l=l.listener,h!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){zo(v)}i.currentTarget=null,n=h}}}}function U(t,a){var r=a[Xl];r===void 0&&(r=a[Xl]=new Set);var e=t+"__bubble";r.has(e)||(bs(a,t,2,!1),r.add(e))}function zl(t,a,r){var e=0;a&&(e|=4),bs(r,t,e,a)}var ho="_reactListening"+Math.random().toString(36).slice(2);function md(t){if(!t[ho]){t[ho]=!0,vh.forEach(function(r){r!=="selectionchange"&&(ef.has(r)||zl(r,!1,t),zl(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[ho]||(a[ho]=!0,zl("selectionchange",!1,a))}}function bs(t,a,r,e){switch(Ds(a)){case 2:var i=Vf;break;case 8:i=zf;break;default:i=bd}r=i.bind(null,a,r,t),i=void 0,!Fl||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function _l(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var l=e.stateNode.containerInfo;if(l===i)break;if(o===4)for(o=e.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;l!==null;){if(o=Se(l),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){e=n=o;continue t}l=l.parentNode}}e=e.return}Ch(function(){var s=n,v=O1(r),k=[];t:{var g=Oh.get(t);if(g!==void 0){var x=i2,y=t;switch(t){case"keypress":if(vo(r)===0)break t;case"keydown":case"keyup":x=Ip;break;case"focusin":y="focus",x=sl;break;case"focusout":y="blur",x=sl;break;case"beforeblur":case"afterblur":x=sl;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=a5;break;case Th:case Nh:case Eh:x=Gp;break;case Dh:x=e5;break;case"scroll":case"scrollend":x=Dp;break;case"wheel":x=n5;break;case"copy":case"cut":case"paste":x=Xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Gc;break;case"toggle":case"beforetoggle":x=l5}var b=(a&4)!==0,E=!b&&(t==="scroll"||t==="scrollend"),p=b?g!==null?g+"Capture":null:g;b=[];for(var u=s,f;u!==null;){var L=u;if(f=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||f===null||p===null||(L=$i(u,p),L!=null&&b.push(ln(u,L,f))),E)break;u=u.return}0<b.length&&(g=new x(g,y,null,r,v),k.push({event:g,listeners:b}))}}if((a&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",g&&r!==Rl&&(y=r.relatedTarget||r.fromElement)&&(Se(y)||y[ii]))break t;if((x||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,x?(y=r.relatedTarget||r.toElement,x=s,y=y?Se(y):null,y!==null&&(E=un(y),b=y.tag,y!==E||b!==5&&b!==27&&b!==6)&&(y=null)):(x=null,y=s),x!==y)){if(b=Zc,L="onMouseLeave",p="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(b=Gc,L="onPointerLeave",p="onPointerEnter",u="pointer"),E=x==null?g:_i(x),f=y==null?g:_i(y),g=new b(L,u+"leave",x,r,v),g.target=E,g.relatedTarget=f,L=null,Se(v)===s&&(b=new b(p,u+"enter",y,r,v),b.target=f,b.relatedTarget=E,L=b),E=L,x&&y)a:{for(b=nf,p=x,u=y,f=0,L=p;L;L=b(L))f++;L=0;for(var W=u;W;W=b(W))L++;for(;0<f-L;)p=b(p),f--;for(;0<L-f;)u=b(u),L--;for(;f--;){if(p===u||u!==null&&p===u.alternate){b=p;break a}p=b(p),u=b(u)}b=null}else b=null;x!==null&&T0(k,g,x,b,!1),y!==null&&E!==null&&T0(k,E,y,b,!0)}}t:{if(g=s?_i(s):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var _=Kc;else if(Qc(g))if(Sh)_=k5;else{_=f5;var B=p5}else x=g.nodeName,!x||x.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?s&&D1(s.elementType)&&(_=Kc):_=v5;if(_&&(_=_(t,s))){Hh(k,_,r,v);break t}B&&B(t,g,s),t==="focusout"&&s&&g.type==="number"&&s.memoizedProps.value!=null&&Jl(g,"number",g.value)}switch(B=s?_i(s):window,t){case"focusin":(Qc(B)||B.contentEditable==="true")&&(ze=B,$l=s,Oi=null);break;case"focusout":Oi=$l=ze=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,$c(k,r,v);break;case"selectionchange":if(L5)break;case"keydown":case"keyup":$c(k,r,v)}var A;if(q1)t:{switch(t){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Ve?jh(t,r)&&(D="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(Bh&&r.locale!=="ko"&&(Ve||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ve&&(A=bh()):(wr=v,U1="value"in wr?wr.value:wr.textContent,Ve=!0)),B=Fo(s,D),0<B.length&&(D=new qc(D,t,null,r,v),k.push({event:D,listeners:B}),A?D.data=A:(A=Wh(r),A!==null&&(D.data=A)))),(A=c5?h5(t,r):u5(t,r))&&(D=Fo(s,"onBeforeInput"),0<D.length&&(B=new qc("onBeforeInput","beforeinput",null,r,v),k.push({event:B,listeners:D}),B.data=A)),rf(k,t,s,r,v)}Cs(k,a)})}function ln(t,a,r){return{instance:t,listener:a,currentTarget:r}}function Fo(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=$i(t,r),i!=null&&e.unshift(ln(t,i,n)),i=$i(t,a),i!=null&&e.push(ln(t,i,n))),t.tag===3)return e;t=t.return}return[]}function nf(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function T0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var l=r,h=l.alternate,s=l.stateNode;if(l=l.tag,h!==null&&h===e)break;l!==5&&l!==26&&l!==27||s===null||(h=s,i?(s=$i(r,n),s!=null&&o.unshift(ln(r,s,h))):i||(s=$i(r,n),s!=null&&o.push(ln(r,s,h)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var of=/\r\n?/g,lf=/\u0000|\uFFFD/g;function N0(t){return(typeof t=="string"?t:""+t).replace(of,`
`).replace(lf,"")}function Bs(t,a){return a=N0(a),N0(t)===a}function $(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||Re(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&Re(t,""+e);break;case"className":In(t,"class",e);break;case"tabIndex":In(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":In(t,r,e);break;case"style":wh(t,e,n);break;case"data":if(a!=="object"){In(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=po(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&$(t,a,"name",i.name,i,null),$(t,a,"formEncType",i.formEncType,i,null),$(t,a,"formMethod",i.formMethod,i,null),$(t,a,"formTarget",i.formTarget,i,null)):($(t,a,"encType",i.encType,i,null),$(t,a,"method",i.method,i,null),$(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=po(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=tr);break;case"onScroll":e!=null&&U("scroll",t);break;case"onScrollEnd":e!=null&&U("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(m(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(m(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=po(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":U("beforetoggle",t),U("toggle",t),go(t,"popover",e);break;case"xlinkActuate":Qa(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Qa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Qa(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Qa(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Qa(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Qa(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Qa(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Qa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Qa(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":go(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Np.get(r)||r,go(t,r,e))}}function y1(t,a,r,e,i,n){switch(r){case"style":wh(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(m(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(m(60));t.innerHTML=r}}break;case"children":typeof e=="string"?Re(t,e):(typeof e=="number"||typeof e=="bigint")&&Re(t,""+e);break;case"onScroll":e!=null&&U("scroll",t);break;case"onScrollEnd":e!=null&&U("scrollend",t);break;case"onClick":e!=null&&(t.onclick=tr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kh.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[Rt]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):go(t,r,e)}}}function Nt(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":U("error",t),U("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:$(t,a,n,o,r,null)}}i&&$(t,a,"srcSet",r.srcSet,r,null),e&&$(t,a,"src",r.src,r,null);return;case"input":U("invalid",t);var l=n=o=i=null,h=null,s=null;for(e in r)if(r.hasOwnProperty(e)){var v=r[e];if(v!=null)switch(e){case"name":i=v;break;case"type":o=v;break;case"checked":h=v;break;case"defaultChecked":s=v;break;case"value":n=v;break;case"defaultValue":l=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,a));break;default:$(t,a,e,v,r,null)}}Mh(t,n,l,h,s,o,i,!1);return;case"select":U("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(l=r[i],l!=null))switch(i){case"value":n=l;break;case"defaultValue":o=l;break;case"multiple":e=l;default:$(t,a,i,l,r,null)}a=n,r=o,t.multiple=!!e,a!=null?Ze(t,!!e,a,!1):r!=null&&Ze(t,!!e,r,!0);return;case"textarea":U("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(l=r[o],l!=null))switch(o){case"value":e=l;break;case"defaultValue":i=l;break;case"children":n=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(m(91));break;default:$(t,a,o,l,r,null)}yh(t,e,i,n);return;case"option":for(h in r)r.hasOwnProperty(h)&&(e=r[h],e!=null)&&(h==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":$(t,a,h,e,r,null));return;case"dialog":U("beforetoggle",t),U("toggle",t),U("cancel",t),U("close",t);break;case"iframe":case"object":U("load",t);break;case"video":case"audio":for(e=0;e<on.length;e++)U(on[e],t);break;case"image":U("error",t),U("load",t);break;case"details":U("toggle",t);break;case"embed":case"source":case"link":U("error",t),U("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(s in r)if(r.hasOwnProperty(s)&&(e=r[s],e!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:$(t,a,s,e,r,null)}return;default:if(D1(a)){for(v in r)r.hasOwnProperty(v)&&(e=r[v],e!==void 0&&y1(t,a,v,e,r,void 0));return}}for(l in r)r.hasOwnProperty(l)&&(e=r[l],e!=null&&$(t,a,l,e,r,null))}function df(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,l=null,h=null,s=null,v=null;for(x in r){var k=r[x];if(r.hasOwnProperty(x)&&k!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":h=k;default:e.hasOwnProperty(x)||$(t,a,x,null,e,k)}}for(var g in e){var x=e[g];if(k=r[g],e.hasOwnProperty(g)&&(x!=null||k!=null))switch(g){case"type":n=x;break;case"name":i=x;break;case"checked":s=x;break;case"defaultChecked":v=x;break;case"value":o=x;break;case"defaultValue":l=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(m(137,a));break;default:x!==k&&$(t,a,g,x,e,k)}}Kl(t,o,l,h,s,v,n,i);return;case"select":x=o=l=g=null;for(n in r)if(h=r[n],r.hasOwnProperty(n)&&h!=null)switch(n){case"value":break;case"multiple":x=h;default:e.hasOwnProperty(n)||$(t,a,n,null,e,h)}for(i in e)if(n=e[i],h=r[i],e.hasOwnProperty(i)&&(n!=null||h!=null))switch(i){case"value":g=n;break;case"defaultValue":l=n;break;case"multiple":o=n;default:n!==h&&$(t,a,i,n,e,h)}a=l,r=o,e=x,g!=null?Ze(t,!!r,g,!1):!!e!=!!r&&(a!=null?Ze(t,!!r,a,!0):Ze(t,!!r,r?[]:"",!1));return;case"textarea":x=g=null;for(l in r)if(i=r[l],r.hasOwnProperty(l)&&i!=null&&!e.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:$(t,a,l,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":g=i;break;case"defaultValue":x=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:i!==n&&$(t,a,o,i,e,n)}mh(t,g,x);return;case"option":for(var y in r)g=r[y],r.hasOwnProperty(y)&&g!=null&&!e.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:$(t,a,y,null,e,g));for(h in e)g=e[h],x=r[h],e.hasOwnProperty(h)&&g!==x&&(g!=null||x!=null)&&(h==="selected"?t.selected=g&&typeof g!="function"&&typeof g!="symbol":$(t,a,h,g,e,x));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in r)g=r[b],r.hasOwnProperty(b)&&g!=null&&!e.hasOwnProperty(b)&&$(t,a,b,null,e,g);for(s in e)if(g=e[s],x=r[s],e.hasOwnProperty(s)&&g!==x&&(g!=null||x!=null))switch(s){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,a));break;default:$(t,a,s,g,e,x)}return;default:if(D1(a)){for(var E in r)g=r[E],r.hasOwnProperty(E)&&g!==void 0&&!e.hasOwnProperty(E)&&y1(t,a,E,void 0,e,g);for(v in e)g=e[v],x=r[v],!e.hasOwnProperty(v)||g===x||g===void 0&&x===void 0||y1(t,a,v,g,e,x);return}}for(var p in r)g=r[p],r.hasOwnProperty(p)&&g!=null&&!e.hasOwnProperty(p)&&$(t,a,p,null,e,g);for(k in e)g=e[k],x=r[k],!e.hasOwnProperty(k)||g===x||g==null&&x==null||$(t,a,k,g,e,x)}function E0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cf(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,l=i.duration;if(n&&l&&E0(o)){for(o=0,l=i.responseEnd,e+=1;e<r.length;e++){var h=r[e],s=h.startTime;if(s>l)break;var v=h.transferSize,k=h.initiatorType;v&&E0(k)&&(h=h.responseEnd,o+=v*(h<l?1:(l-s)/(h-s)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var w1=null,C1=null;function $o(t){return t.nodeType===9?t:t.ownerDocument}function D0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function js(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function b1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Tl=null;function hf(){var t=window.event;return t&&t.type==="popstate"?t===Tl?!1:(Tl=t,!0):(Tl=null,!1)}var Ws=typeof setTimeout=="function"?setTimeout:void 0,uf=typeof clearTimeout=="function"?clearTimeout:void 0,O0=typeof Promise=="function"?Promise:void 0,sf=typeof queueMicrotask=="function"?queueMicrotask:typeof O0<"u"?function(t){return O0.resolve(null).then(t).catch(gf)}:Ws;function gf(t){setTimeout(function(){throw t})}function Zr(t){return t==="head"}function U0(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),ei(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")Ri(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Ri(r);for(var n=r.firstChild;n;){var o=n.nextSibling,l=n.nodeName;n[fn]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&Ri(t.ownerDocument.body);r=i}while(r);ei(a)}function Z0(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function B1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":B1(r),E1(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function pf(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[fn])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=ya(t.nextSibling),t===null)break}return null}function ff(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=ya(t.nextSibling),t===null))return null;return t}function Hs(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ya(t.nextSibling),t===null))return null;return t}function j1(t){return t.data==="$?"||t.data==="$~"}function W1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function vf(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function ya(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var H1=null;function q0(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return ya(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function G0(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function Ss(t,a,r){switch(a=$o(r),t){case"html":if(t=a.documentElement,!t)throw Error(m(452));return t;case"head":if(t=a.head,!t)throw Error(m(453));return t;case"body":if(t=a.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function Ri(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);E1(t)}var wa=new Map,Y0=new Set;function Io(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var hr=Q.d;Q.d={f:kf,r:xf,D:Lf,C:Mf,L:mf,m:yf,X:Cf,S:wf,M:bf};function kf(){var t=hr.f(),a=f2();return t||a}function xf(t){var a=ni(t);a!==null&&a.tag===5&&a.type==="form"?wu(a):hr.r(t)}var ci=typeof document>"u"?null:document;function As(t,a,r){var e=ci;if(e&&typeof a=="string"&&a){var i=xa(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),Y0.has(i)||(Y0.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),Nt(a,"link",t),Wt(a),e.head.appendChild(a)))}}function Lf(t){hr.D(t),As("dns-prefetch",t,null)}function Mf(t,a){hr.C(t,a),As("preconnect",t,a)}function mf(t,a,r){hr.L(t,a,r);var e=ci;if(e&&t&&a){var i='link[rel="preload"][as="'+xa(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+xa(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+xa(r.imageSizes)+'"]')):i+='[href="'+xa(t)+'"]';var n=i;switch(a){case"style":n=ri(t);break;case"script":n=hi(t)}wa.has(n)||(t=ot({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),wa.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(mn(n))||a==="script"&&e.querySelector(yn(n))||(a=e.createElement("link"),Nt(a,"link",t),Wt(a),e.head.appendChild(a)))}}function yf(t,a){hr.m(t,a);var r=ci;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+xa(e)+'"][href="'+xa(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=hi(t)}if(!wa.has(n)&&(t=ot({rel:"modulepreload",href:t},a),wa.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(yn(n)))return}e=r.createElement("link"),Nt(e,"link",t),Wt(e),r.head.appendChild(e)}}}function wf(t,a,r){hr.S(t,a,r);var e=ci;if(e&&t){var i=Ue(e).hoistableStyles,n=ri(t);a=a||"default";var o=i.get(n);if(!o){var l={loading:0,preload:null};if(o=e.querySelector(mn(n)))l.loading=5;else{t=ot({rel:"stylesheet",href:t,"data-precedence":a},r),(r=wa.get(n))&&yd(t,r);var h=o=e.createElement("link");Wt(h),Nt(h,"link",t),h._p=new Promise(function(s,v){h.onload=s,h.onerror=v}),h.addEventListener("load",function(){l.loading|=1}),h.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Co(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:l},i.set(n,o)}}}function Cf(t,a){hr.X(t,a);var r=ci;if(r&&t){var e=Ue(r).hoistableScripts,i=hi(t),n=e.get(i);n||(n=r.querySelector(yn(i)),n||(t=ot({src:t,async:!0},a),(a=wa.get(i))&&wd(t,a),n=r.createElement("script"),Wt(n),Nt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function bf(t,a){hr.M(t,a);var r=ci;if(r&&t){var e=Ue(r).hoistableScripts,i=hi(t),n=e.get(i);n||(n=r.querySelector(yn(i)),n||(t=ot({src:t,async:!0,type:"module"},a),(a=wa.get(i))&&wd(t,a),n=r.createElement("script"),Wt(n),Nt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function X0(t,a,r,e){var i=(i=jr.current)?Io(i):null;if(!i)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=ri(r.href),r=Ue(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=ri(r.href);var n=Ue(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(mn(t)))&&!n._p&&(o.instance=n,o.state.loading=5),wa.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},wa.set(t,r),n||Bf(i,t,r,o.state))),a&&e===null)throw Error(m(528,""));return o}if(a&&e!==null)throw Error(m(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=hi(r),r=Ue(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function ri(t){return'href="'+xa(t)+'"'}function mn(t){return'link[rel="stylesheet"]['+t+"]"}function Vs(t){return ot({},t,{"data-precedence":t.precedence,precedence:null})}function Bf(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),Nt(a,"link",r),Wt(a),t.head.appendChild(a))}function hi(t){return'[src="'+xa(t)+'"]'}function yn(t){return"script[async]"+t}function Q0(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+xa(r.href)+'"]');if(e)return a.instance=e,Wt(e),e;var i=ot({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Wt(e),Nt(e,"style",i),Co(e,r.precedence,t),a.instance=e;case"stylesheet":i=ri(r.href);var n=t.querySelector(mn(i));if(n)return a.state.loading|=4,a.instance=n,Wt(n),n;e=Vs(r),(i=wa.get(i))&&yd(e,i),n=(t.ownerDocument||t).createElement("link"),Wt(n);var o=n;return o._p=new Promise(function(l,h){o.onload=l,o.onerror=h}),Nt(n,"link",e),a.state.loading|=4,Co(n,r.precedence,t),a.instance=n;case"script":return n=hi(r.src),(i=t.querySelector(yn(n)))?(a.instance=i,Wt(i),i):(e=r,(i=wa.get(n))&&(e=ot({},r),wd(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),Wt(i),Nt(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(m(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,Co(e,r.precedence,t));return a.instance}function Co(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var l=e[o];if(l.dataset.precedence===a)n=l;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function yd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function wd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var bo=null;function K0(t,a,r){if(bo===null){var e=new Map,i=bo=new Map;i.set(r,e)}else i=bo,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[fn]||n[zt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var l=e.get(o);l?l.push(n):e.set(o,[n])}}return e}function J0(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function jf(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function zs(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Wf(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=ri(e.href),n=a.querySelector(mn(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Po.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,Wt(n);return}n=a.ownerDocument||a,e=Vs(e),(i=wa.get(i))&&yd(e,i),n=n.createElement("link"),Wt(n);var o=n;o._p=new Promise(function(l,h){o.onload=l,o.onerror=h}),Nt(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Po.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var Nl=0;function Hf(t,a){return t.stylesheets&&t.count===0&&Bo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&Bo(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&Nl===0&&(Nl=62500*cf());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bo(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Nl?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function Po(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var t2=null;function Bo(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,t2=new Map,a.forEach(Sf,t),t2=null,Po.call(t))}function Sf(t,a){if(!(a.state.loading&4)){var r=t2.get(t);if(r)var e=r.get(null);else{r=new Map,t2.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=Po.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var dn={$$typeof:Pa,Provider:null,Consumer:null,_currentValue:$r,_currentValue2:$r,_threadCount:0};function Af(t,a,r,e,i,n,o,l,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dl(0),this.hiddenUpdates=dl(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function _s(t,a,r,e,i,n,o,l,h,s,v,k){return t=new Af(t,a,r,o,h,s,v,k,l),a=1,n===!0&&(a|=24),n=ra(3,null,null,a),t.current=n,n.stateNode=t,a=R1(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},I1(n),t}function Ts(t){return t?(t=Ne,t):Ne}function Ns(t,a,r,e,i,n){i=Ts(i),e.context===null?e.context=i:e.pendingContext=i,e=Hr(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=Sr(t,e,a),r!==null&&(Jt(r,t,a),Zi(r,t,a))}function R0(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function Cd(t,a){R0(t,a),(t=t.alternate)&&R0(t,a)}function Es(t){if(t.tag===13||t.tag===31){var a=he(t,67108864);a!==null&&Jt(a,t,67108864),Cd(t,67108864)}}function F0(t){if(t.tag===13||t.tag===31){var a=la();a=T1(a);var r=he(t,a);r!==null&&Jt(r,t,a),Cd(t,a)}}var a2=!0;function Vf(t,a,r,e){var i=z.T;z.T=null;var n=Q.p;try{Q.p=2,bd(t,a,r,e)}finally{Q.p=n,z.T=i}}function zf(t,a,r,e){var i=z.T;z.T=null;var n=Q.p;try{Q.p=8,bd(t,a,r,e)}finally{Q.p=n,z.T=i}}function bd(t,a,r,e){if(a2){var i=S1(e);if(i===null)_l(t,a,e,r2,r),$0(t,e);else if(Tf(i,t,a,r,e))e.stopPropagation();else if($0(t,e),a&4&&-1<_f.indexOf(t)){for(;i!==null;){var n=ni(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=Jr(n.pendingLanes);if(o!==0){var l=n;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var h=1<<31-oa(o);l.entanglements[1]|=h,o&=~h}Na(n),(X&6)===0&&(Xo=ia()+500,Mn(0,!1))}}break;case 31:case 13:l=he(n,2),l!==null&&Jt(l,n,2),f2(),Cd(n,2)}if(n=S1(e),n===null&&_l(t,a,e,r2,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else _l(t,a,e,null,r)}}function S1(t){return t=O1(t),Bd(t)}var r2=null;function Bd(t){if(r2=null,t=Se(t),t!==null){var a=un(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=eh(a),t!==null)return t;t=null}else if(r===31){if(t=ih(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return r2=t,null}function Ds(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mp()){case dh:return 2;case ch:return 8;case Ao:case mp:return 32;case hh:return 268435456;default:return 32}default:return 32}}var A1=!1,zr=null,_r=null,Tr=null,cn=new Map,hn=new Map,mr=[],_f="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $0(t,a){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":cn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(a.pointerId)}}function Si(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=ni(a),a!==null&&Es(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function Tf(t,a,r,e,i){switch(a){case"focusin":return zr=Si(zr,t,a,r,e,i),!0;case"dragenter":return _r=Si(_r,t,a,r,e,i),!0;case"mouseover":return Tr=Si(Tr,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return cn.set(n,Si(cn.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,hn.set(n,Si(hn.get(n)||null,t,a,r,e,i)),!0}return!1}function Os(t){var a=Se(t.target);if(a!==null){var r=un(a);if(r!==null){if(a=r.tag,a===13){if(a=eh(r),a!==null){t.blockedOn=a,_c(t.priority,function(){F0(r)});return}}else if(a===31){if(a=ih(r),a!==null){t.blockedOn=a,_c(t.priority,function(){F0(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=S1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);Rl=e,r.target.dispatchEvent(e),Rl=null}else return a=ni(r),a!==null&&Es(a),t.blockedOn=r,!1;a.shift()}return!0}function I0(t,a,r){jo(t)&&r.delete(a)}function Nf(){A1=!1,zr!==null&&jo(zr)&&(zr=null),_r!==null&&jo(_r)&&(_r=null),Tr!==null&&jo(Tr)&&(Tr=null),cn.forEach(I0),hn.forEach(I0)}function uo(t,a){t.blockedOn===a&&(t.blockedOn=null,A1||(A1=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,Nf)))}var so=null;function P0(t){so!==t&&(so=t,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,function(){so===t&&(so=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(Bd(e||r)===null)continue;break}var n=ni(r);n!==null&&(t.splice(a,3),a-=3,u1(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function ei(t){function a(h){return uo(h,t)}zr!==null&&uo(zr,t),_r!==null&&uo(_r,t),Tr!==null&&uo(Tr,t),cn.forEach(a),hn.forEach(a);for(var r=0;r<mr.length;r++){var e=mr[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<mr.length&&(r=mr[0],r.blockedOn===null);)Os(r),r.blockedOn===null&&mr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[Rt]||null;if(typeof n=="function")o||P0(r);else if(o){var l=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[Rt]||null)l=o.formAction;else if(Bd(i)!==null)continue}else l=o.action;typeof l=="function"?r[e+1]=l:(r.splice(e,3),e-=3),P0(r)}}}function Us(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function jd(t){this._internalRoot=t}x2.prototype.render=jd.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(m(409));var r=a.current,e=la();Ns(r,e,t,a,null,null)};x2.prototype.unmount=jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Ns(t.current,2,null,t,null,null),f2(),a[ii]=null}};function x2(t){this._internalRoot=t}x2.prototype.unstable_scheduleHydration=function(t){if(t){var a=fh();t={blockedOn:null,target:t,priority:a};for(var r=0;r<mr.length&&a!==0&&a<mr[r].priority;r++);mr.splice(r,0,t),r===0&&Os(t)}};var th=ah.version;if(th!=="19.2.8")throw Error(m(527,th,"19.2.8"));Q.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=gp(a),t=t!==null?nh(t):null,t=t===null?null:t.stateNode,t};var Ef={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ai=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ai.isDisabled&&Ai.supportsFiber))try{sn=Ai.inject(Ef),na=Ai}catch{}var Ai;L2.createRoot=function(t,a){if(!rh(t))throw Error(m(299));var r=!1,e="",i=Au,n=Vu,o=zu;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=_s(t,1,!1,null,null,r,e,null,i,n,o,Us),t[ii]=a.current,md(t),new jd(a)};L2.hydrateRoot=function(t,a,r){if(!rh(t))throw Error(m(299));var e=!1,i="",n=Au,o=Vu,l=zu,h=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(l=r.onRecoverableError),r.formState!==void 0&&(h=r.formState)),a=_s(t,1,!0,a,r??null,e,i,h,n,o,l,Us),a.context=Ts(null),r=a.current,e=la(),e=T1(e),i=Hr(e),i.callback=null,Sr(r,i,e),r=e,a.current.lanes=r,pn(a,r),Na(a),t[ii]=a.current,md(t),new x2(a)};L2.version="19.2.8"});var Ys=gr((xv,Gs)=>{"use strict";function qs(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qs)}catch(t){console.error(t)}}qs(),Gs.exports=Zs()});var Ct=Xr(Ya()),L4=Xr(Ys());var ui=Xr(Ya(),1);var Wd=Xr(Ya(),1),Hd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Sd=Wd.default.createContext&&Wd.default.createContext(Hd);var Df=["attr","size","title"];function Of(t,a){if(t==null)return{};var r,e,i=Uf(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Uf(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function M2(){return M2=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},M2.apply(null,arguments)}function Xs(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function m2(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Xs(Object(r),!0).forEach(function(e){Zf(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Xs(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function Zf(t,a,r){return(a=qf(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function qf(t){var a=Gf(t,"string");return typeof a=="symbol"?a:a+""}function Gf(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function Qs(t){return t&&t.map((a,r)=>ui.default.createElement(a.tag,m2({key:r},a.attr),Qs(a.child)))}function q(t){return a=>ui.default.createElement(Yf,M2({attr:m2({},t.attr)},a),Qs(t.child))}function Yf(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=Of(t,Df),l=i||r.size||"1em",h;return r.className&&(h=r.className),t.className&&(h=(h?h+" ":"")+t.className),ui.default.createElement("svg",M2({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:h,style:m2(m2({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),n&&ui.default.createElement("title",null,n),t.children)};return Sd!==void 0?ui.default.createElement(Sd.Consumer,null,r=>a(r)):a(Hd)}function Ks(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function Js(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function Rs(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function Fs(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function $s(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 14 4 9l5-5"},child:[]},{tag:"path",attr:{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"},child:[]}]})(t)}function Is(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function Ps(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function tg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function ag(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function rg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function eg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function ig(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function ng(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function og(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function lg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function dg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function cg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function hg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function ug(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function sg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function gg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function pg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function fg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function vg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(t)}function kg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function xg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function Lg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function Mg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function mg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 11-5-5-5 5"},child:[]},{tag:"path",attr:{d:"m17 18-5-5-5 5"},child:[]}]})(t)}function yg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 6 5 5 5-5"},child:[]},{tag:"path",attr:{d:"m7 13 5 5 5-5"},child:[]}]})(t)}function wg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function Cg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function bg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 6 9 17l-5-5"},child:[]}]})(t)}function Bg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function jg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]}]})(t)}function Wg(t){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var Hg=ug,y2=Js,Sg=cg,Ad=dg,Ag=gg,Vg=pg,zg=ag,w2=Rs,_g=kg,Tg=sg,wn=ig,Ng=bg,Eg=Lg,si=Mg,Vd=Is,Dg=xg,zd=Ps,_d=wg,C2=Cg,Og=mg,Ug=yg,Cn=eg;var bn=Ks,Td=hg,Zg=lg,qg=ng,Gg=og,b2=Wg,Yg=rg,Xg=Bg,Qg=Fs,Kg=tg,B2=vg,Jg=fg,Nd=jg,Ed=$s;var gt=Xr(Ya());var j=Xr(Ya());var Rg={member:w2,coworker:Qg,admin_staff:Vg,leader:Kg,pastor:Ag,admin:zg},Fg=["leader","pastor","admin"],Dd=[{id:"work",label:"工作日誌",Icon:Hg,href:"work.html",roles:["pastor","admin_staff","admin"]},{id:"serve",label:"服事管理",Icon:y2,href:""},{id:"venue",label:"場地預約",Icon:Xg,href:""}],Xf=t=>{let a=String(t||"").trim();return/^[\u4e00-\u9fff]+$/.test(a)?a.length===4?a.slice(2):a.length>=2&&a.length<=3?a.slice(1):a:a},$g=["pastor","admin_staff","admin"],Ig=(t,a)=>!t.roles||t.roles.includes(a),Qf=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},Pg=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},t4=({active:t,shell:a})=>{let[r,e]=(0,j.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(y=>{let b=!y;try{localStorage.setItem("tbcSidebarCollapsed",b?"1":"0")}catch{}return b}),[n,o]=(0,j.useState)(!1),[l,h]=(0,j.useState)(""),s=(0,j.useRef)(null),v=a.identity||{name:"",role:"member",status:"loading"},k=Rg[v.role]||w2,g=Fg.includes(v.role),x=y=>{h(`${y} 尚未開放`),clearTimeout(s.current),s.current=setTimeout(()=>h(""),2200)};return j.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},j.default.createElement("div",{className:"flex flex-col"},j.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},j.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},j.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},j.default.createElement(b2,{size:20,strokeWidth:2})),r&&j.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},j.default.createElement(Ad,{size:18}))),!r&&j.default.createElement(j.default.Fragment,null,j.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),j.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},j.default.createElement(Ad,{size:18})))),j.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},Dd.map(y=>{let b=t===y.id,E=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${b?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,p=j.default.createElement(j.default.Fragment,null,j.default.createElement(y.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&j.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},y.label));return y.href?b?j.default.createElement("div",{key:y.id,className:E,title:y.label,"aria-current":"page"},p):j.default.createElement("a",{key:y.id,href:y.href,className:E,title:y.label},p):j.default.createElement("button",{key:y.id,type:"button",onClick:()=>x(y.label),className:E,title:y.label},p)}))),j.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},j.default.createElement("button",{type:"button",onClick:()=>o(y=>!y),"aria-haspopup":"menu","aria-expanded":n,className:`tbc-sb-user flex items-center rounded-full transition-colors ${r?"justify-center w-12 h-12 mx-auto bg-slate-100 hover:bg-slate-200":"gap-3 px-4 h-12 w-full hover:bg-slate-100"}`},r?j.default.createElement("span",{className:"text-[13px] text-slate-900 truncate max-w-full px-1"},Xf(v.name)):j.default.createElement(j.default.Fragment,null,j.default.createElement(k,{size:20,strokeWidth:1.75,className:`shrink-0 ${g?"text-amber-500":"text-slate-500"}`}),j.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},v.name))),n&&j.default.createElement(j.default.Fragment,null,j.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),j.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},j.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},j.default.createElement(Sg,{size:18,strokeWidth:1.75}),"登出")))),l&&j.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},l))},a4=({supabase:t,notice:a})=>{let[r,e]=(0,j.useState)(!1),[i,n]=(0,j.useState)(""),[o,l]=(0,j.useState)(""),[h,s]=(0,j.useState)(!1),[v,k]=(0,j.useState)(""),g=async y=>{if(y.preventDefault(),!i.trim()||!o||h)return;s(!0),k("");let{error:b}=await t.auth.signInWithPassword({email:Qf(i),password:o});s(!1),b&&k("帳號或密碼不正確，請再試一次")},x="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return j.default.createElement("form",{onSubmit:g,className:"w-full max-w-sm mx-auto space-y-3"},j.default.createElement("input",{value:i,onChange:y=>n(y.target.value),placeholder:"帳號",autoComplete:"username",className:x}),j.default.createElement("div",{className:"relative"},j.default.createElement("input",{type:r?"text":"password",value:o,onChange:y=>l(y.target.value),placeholder:"密碼",autoComplete:"current-password",className:x+" pr-12"}),j.default.createElement("button",{type:"button",onClick:()=>e(y=>!y),title:r?"隱藏密碼":"顯示密碼","aria-label":r?"隱藏密碼":"顯示密碼",className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"},r?j.default.createElement(B2,{size:18}):j.default.createElement(Jg,{size:18}))),(v||a)&&j.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},j.default.createElement(si,{size:16}),v||a),j.default.createElement("button",{type:"submit",disabled:h||!i.trim()||!o,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},h?"登入中…":"登入"))},r4=({shell:t})=>{let a=t.identity||{},r=Rg[a.role]||w2,e=Fg.includes(a.role);return j.default.createElement("div",{className:"flex flex-col items-center gap-3 mt-14"},j.default.createElement("p",{className:"text-sm text-slate-500"},"準備好了，開始或",j.default.createElement("button",{type:"button",onClick:t.onLogout,className:"tbc-logout ml-0.5 text-indigo-600 hover:text-indigo-700 underline underline-offset-4"},"登出")))};var Kf=({shell:t})=>{let[a,r]=(0,gt.useState)(""),e=(0,gt.useRef)(null),i=t.identity||{},n=Dd.filter(l=>Ig(l,i.role)),o=l=>{r(`${l} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return gt.default.createElement("div",{className:"relative h-[100dvh] w-full bg-white overflow-hidden"},gt.default.createElement("main",{className:"h-full overflow-auto custom-scrollbar"},gt.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},gt.default.createElement("div",{className:"text-center mb-14"},gt.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),gt.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),gt.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(l=>{let h=gt.default.createElement(gt.default.Fragment,null,gt.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},gt.default.createElement(l.Icon,{size:40,strokeWidth:1.75})),gt.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},l.label)),s="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return l.href?gt.default.createElement("a",{key:l.id,href:l.href,className:s},h):gt.default.createElement("button",{key:l.id,type:"button",onClick:()=>o(l.label),className:s},h)})),gt.default.createElement(r4,{shell:t}))),a&&gt.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},e4=Kf;var d=Xr(Ya());var Ud=["日","一","二","三","四","五","六"],i4={m:15,l:18},Od=["pastor","admin_staff"],n4=[{id:"title",label:"工作摘要",locked:!0,sortable:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"派工",sortable:!0,w:t=>`${Math.ceil(t*5+28)}px`,min:t=>Math.ceil(t*5+28)},{id:"doer",label:"執行",sortable:!0,w:t=>`${Math.ceil(t*5+28)}px`,min:t=>Math.ceil(t*5+28)},{id:"status",label:"狀態",sortable:!0,w:t=>`${Math.ceil(t*.85*4+100)}px`,min:t=>Math.ceil(t*.85*4+100)},{id:"date",label:"日期",sortable:!0,w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(150px,1fr)",min:150},{id:"hours",label:"工時",sortable:!0,w:t=>`${Math.ceil(t*4.8+24)}px`,min:t=>Math.ceil(t*4.8+24)},{id:"priority",label:"優先順序",sortable:!0,w:t=>`${Math.ceil(t*.85*4+52)}px`,min:t=>Math.ceil(t*.85*4+52)},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],Jf="Asia/Taipei",o4=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:Jf,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},W2=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},Rf=t=>new Date(t).toISOString().slice(0,10),j2=(t,a)=>Rf(W2(t)+a*864e5),p4=(t,a)=>Math.round((W2(t)-W2(a))/864e5),f4=t=>new Date(W2(t)).getUTCDay(),Ff=t=>j2(t,-((f4(t)+6)%7)),Ea=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},$f=(t,a)=>{let r=p4(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${Ea(t)}（${Ud[f4(t)]}）`,tag:e}},Et=t=>t?String(t).slice(0,5):"",l4=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Et(t.start_time).split(":").map(Number),[e,i]=Et(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n>0?n/60:null},If=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Et(t.start_time).split(":").map(Number),[e,i]=Et(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*10)/10} 小時`},d4={urgent:0,normal:1,routine:2},Pf={routine:"例行",normal:"普通",urgent:"緊急"},c4={routine:"bg-violet-50 border-violet-100 text-violet-600",normal:"bg-slate-50 border-slate-200 text-slate-500",urgent:"bg-red-50 border-red-100 text-red-600"},tv={routine:"normal",normal:"urgent",urgent:"routine"},Bn=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的工作"],["not your item","只有派工者可以修改這筆工作，負責人只能改狀態"],["nothing to confirm","這筆已經不是「待確認」狀態"],["nothing to return","這筆已經不是「待確認」狀態"],["assignee is not allowed","負責人必須是有權限的同工"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期的任務固定在最上面，不能搬移"],["item not in your list","這筆不在你的清單裡"],["item not found or canceled","這筆工作已被取消或不存在"],["more than one member record","這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號"],["no member record","找不到這個帳號對應的同工資料"],["no permission","沒有使用權限"],["permission denied","沒有使用權限"],["dates are required","日期必填"],["weekly rule needs","每週重複請至少選一個星期"],["monthly rule needs","每月重複請選幾號，或勾「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個週期工作"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},av=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>Ud[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 號`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},h4=({person:t,strong:a})=>d.default.createElement("span",{className:`truncate max-w-full ${a?"font-bold text-slate-900":"text-slate-700"}`},t&&t.name||"（未知）"),u4=({id:t,options:a,selected:r,multi:e,onChange:i,bad:n,className:o=""})=>{let[l,h]=(0,d.useState)(!1),s=a.filter(k=>r.has(k.id)).map(k=>k.label),v=k=>{if(!e){i(new Set([k])),h(!1);return}let g=new Set(r);g.has(k)?g.delete(k):g.add(k),i(g)};return d.default.createElement("div",{className:`relative ${o}`},d.default.createElement("button",{id:t,type:"button",onClick:()=>h(k=>!k),className:`tbc-pick w-full flex items-center justify-between gap-2 bg-slate-50 border rounded-lg px-3 py-2.5 text-left outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${n?"border-red-400 ring-2 ring-red-200":"border-slate-200"}`},d.default.createElement("span",{className:`truncate ${s.length?"text-slate-900":"text-slate-400"}`},s.length?s.join("、"):"請選擇"),d.default.createElement(C2,{size:16,className:"text-slate-400 shrink-0"})),l&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-[110]",onClick:()=>h(!1)}),d.default.createElement("div",{className:"tbc-pick-menu absolute left-0 right-0 top-full mt-1 z-[120] bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in"},a.map(k=>d.default.createElement("label",{key:k.id,className:"flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 cursor-pointer select-none"},d.default.createElement("input",{type:e?"checkbox":"radio",checked:r.has(k.id),onChange:()=>v(k.id),className:"accent-indigo-600"}),k.label)))))},s4=({value:t,placeholder:a,canEdit:r,onSave:e,className:i="",centerEmpty:n})=>{let[o,l]=(0,d.useState)(!1),[h,s]=(0,d.useState)(t||""),v=(0,d.useRef)(!1);(0,d.useEffect)(()=>{o||s(t||"")},[t,o]);let k=async()=>{if(l(!1),v.current){v.current=!1;return}let g=h.trim();g!==(t||"").trim()&&await e(g)};return o?d.default.createElement("input",{autoFocus:!0,value:h,onChange:g=>s(g.target.value),onBlur:k,onKeyDown:g=>{g.key==="Enter"&&g.currentTarget.blur(),g.key==="Escape"&&(v.current=!0,g.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):d.default.createElement("div",{onClick:()=>r&&l(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} ${!t&&n?"text-center":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?d.default.createElement("span",{className:`text-slate-300 ${n?"block text-center":""}`},a):null))},g4=({type:t,a,b:r,canEdit:e,children:i,onSave:n})=>{let[o,l]=(0,d.useState)(!1),[h,s]=(0,d.useState)(a||""),[v,k]=(0,d.useState)(r||""),g=(0,d.useRef)(!1);(0,d.useEffect)(()=>{o||(s(a||""),k(r||""))},[a,r,o]);let x=async()=>{if(l(!1),g.current){g.current=!1;return}(h!==(a||"")||v!==(r||""))&&await n(h,v)};if(!o)return d.default.createElement("div",{onClick:()=>e&&l(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let y="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return d.default.createElement("div",{tabIndex:-1,onBlur:b=>{b.currentTarget.contains(b.relatedTarget)||x()},onKeyDown:b=>{b.key==="Enter"&&x(),b.key==="Escape"&&(g.current=!0,l(!1))},className:"flex flex-col gap-1"},d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",d.default.createElement("input",{autoFocus:!0,type:t,value:h,onChange:b=>s(b.target.value),className:y})),d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",d.default.createElement("input",{type:t,value:v,onChange:b=>k(b.target.value),className:y})))},rv=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o,people:l=[],meId:h})=>{let s=a||{},v=t==="editRule",k=t!=="create",[g,x]=(0,d.useState)(s.title||""),[y,b]=(0,d.useState)(s.start_date||e),[E,p]=(0,d.useState)(Et(s.start_time)),[u,f]=(0,d.useState)(s.end_date||s.start_date||e),[L,W]=(0,d.useState)(Et(s.end_time)),[_,B]=(0,d.useState)(s.priority||"normal"),[A,D]=(0,d.useState)(s.note||""),[S,$t]=(0,d.useState)(v?s.freq:t==="createRule"?r||"weekly":"none"),[Da,ge]=(0,d.useState)(!!s.weekdays_only),[Ha,gi]=(0,d.useState)(s.week_days||[]),[bt,H2]=(0,d.useState)(s.month_day?String(s.month_day):""),[pe,jn]=(0,d.useState)(!!s.month_last_day),[fe,S2]=(0,d.useState)(s.until_date||""),[Wn,qd]=(0,d.useState)(s.is_active===void 0?!0:s.is_active),pi=(0,d.useMemo)(()=>{let H=new Set,ft=[],Ca=ha=>{H.has(ha.member_id)||(H.add(ha.member_id),ft.push({id:ha.member_id,label:ha.member_id===h?"我":ha.name}))};return l.filter(ha=>ha.member_id===h).forEach(Ca),l.filter(ha=>Od.includes(ha.role)).forEach(Ca),h&&!H.has(h)&&ft.unshift({id:h,label:"我"}),ft},[l,h]),[ve,Hn]=(0,d.useState)(()=>new Set(h?[h]:[])),[fi,A2]=(0,d.useState)(()=>new Set(h?[h]:[])),[Sn,V2]=(0,d.useState)(""),[Oa,qr]=(0,d.useState)(""),pt=(H,ft)=>{V2(H),qr(ft),setTimeout(()=>{let Ca=document.getElementById(ft);if(Ca){Ca.scrollIntoView({block:"center",behavior:"smooth"});try{Ca.focus({preventScroll:!0})}catch{}}},0)},St="text-xs font-medium text-slate-500",Ua="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",ke=H=>gi(ft=>ft.includes(H)?ft.filter(Ca=>Ca!==H):[...ft,H]),An=()=>{if(V2(""),qr(""),!g.trim())return pt("請輸入工作摘要","tbc-f-title");if(t==="create"&&ve.size===0)return pt("請選擇派工的人","tbc-f-disp");if(t==="create"&&fi.size===0)return pt("請至少選一位執行的人","tbc-f-doer");if(!y)return pt("開始日期必填","tbc-f-start");if(S==="none"&&(!u||u<y))return pt("結束日期不能早於開始日期","tbc-f-end");if(S==="weekly"&&Ha.length===0)return pt("每週重複請至少選一個星期","tbc-f-week");if(S==="monthly"&&!bt&&!pe)return pt("每月重複請選幾號，或勾「每月最後一天」","tbc-f-month");if(S!=="none"&&fe&&fe<y)return pt("重複的結束日不能早於開始日","tbc-f-until");n({title:g.trim(),startDate:y,startTime:E||null,endDate:S==="none"?u:y,endTime:L||null,priority:_,note:A.trim()||null,repeat:S,weekdaysOnly:S==="daily"&&Da,weekDays:S==="weekly"?Ha:[],monthDay:S==="monthly"&&bt?Number(bt):null,monthLast:S==="monthly"&&pe,untilDate:fe||null,isActive:Wn,assigneeIds:[...fi],dispatcherId:[...ve][0]||h})};return d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},v?d.default.createElement(d.default.Fragment,null,d.default.createElement(Cn,{className:"text-indigo-600",size:20})," 修改週期工作"):t==="createRule"?d.default.createElement(d.default.Fragment,null,d.default.createElement(Cn,{className:"text-indigo-600",size:20})," 新增週期工作"):d.default.createElement(d.default.Fragment,null,d.default.createElement(wn,{className:"text-indigo-600",size:20})," 新增")),d.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(bn,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"工作摘要",d.default.createElement("span",{className:"text-red-500"},"*")),d.default.createElement("input",{id:"tbc-f-title",autoFocus:!0,value:g,onChange:H=>x(H.target.value),placeholder:"簡短描述工作內容",className:`${Ua} ${Oa==="tbc-f-title"?"!border-red-400 ring-2 ring-red-200":""}`})),t==="create"&&pi.length>0&&d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"派工",d.default.createElement("span",{className:"text-red-500"},"*")),d.default.createElement(u4,{id:"tbc-f-disp",options:pi,selected:ve,onChange:Hn,bad:Oa==="tbc-f-disp"})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"執行",d.default.createElement("span",{className:"text-red-500"},"*")),d.default.createElement(u4,{id:"tbc-f-doer",options:pi,selected:fi,multi:!0,onChange:A2,bad:Oa==="tbc-f-doer"}))),k&&d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"重複"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([H])=>!(v&&H==="none")).map(([H,ft])=>d.default.createElement("button",{key:H,type:"button",onClick:()=>$t(H),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${S===H?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},ft))),S==="daily"&&d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:Da,onChange:H=>ge(H.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),S==="weekly"&&d.default.createElement("div",{id:"tbc-f-week",tabIndex:-1,className:`flex gap-2 pt-1 flex-wrap outline-none rounded-lg ${Oa==="tbc-f-week"?"ring-2 ring-red-200":""}`},[1,2,3,4,5,6,7].map(H=>d.default.createElement("button",{key:H,type:"button",onClick:()=>ke(H),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${Ha.includes(H)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},Ud[H%7]))),S==="monthly"&&d.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},d.default.createElement("select",{id:"tbc-f-month",value:bt,onChange:H=>H2(H.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},d.default.createElement("option",{value:""},"不指定號數"),Array.from({length:31},(H,ft)=>ft+1).map(H=>d.default.createElement("option",{key:H,value:H},H," 號"))),d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:pe,onChange:H=>jn(H.target.checked),className:"accent-indigo-600"})," 每月最後一天"),bt&&Number(bt)>28&&!pe&&d.default.createElement("span",{className:"text-xs text-amber-600"},bt," 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」"))),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"開始日期"),d.default.createElement("input",{id:"tbc-f-start",type:"date",value:y,onChange:H=>{b(H.target.value),u<H.target.value&&f(H.target.value)},className:`${Ua} ${Oa==="tbc-f-start"?"!border-red-400 ring-2 ring-red-200":""}`})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"開始時間（選填）"),d.default.createElement("input",{type:"time",value:E,onChange:H=>p(H.target.value),className:Ua})),S==="none"?d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"結束日期"),d.default.createElement("input",{id:"tbc-f-end",type:"date",value:u,min:y,onChange:H=>f(H.target.value),className:`${Ua} ${Oa==="tbc-f-end"?"!border-red-400 ring-2 ring-red-200":""}`})):d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"結束日期（選填）"),d.default.createElement("input",{id:"tbc-f-until",type:"date",value:fe,min:y,onChange:H=>S2(H.target.value),className:Ua})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"結束時間（選填）"),d.default.createElement("input",{type:"time",value:L,onChange:H=>W(H.target.value),className:Ua}))),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"優先順序"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["routine","例行"],["normal","普通"],["urgent","緊急"]].map(([H,ft])=>d.default.createElement("button",{key:H,type:"button",onClick:()=>B(H),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${_===H?H==="urgent"?"bg-white text-red-600 shadow-sm":H==="routine"?"bg-white text-violet-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},ft))))),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"備註"),d.default.createElement("textarea",{value:A,onChange:H=>D(H.target.value),rows:2,className:Ua})),Sn&&d.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},d.default.createElement(si,{size:16})," ",Sn)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},d.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:An,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},v?"儲存":S==="none"?"新增":"儲存"))))},ev=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,d.useState)(o4()),[o,l]=(0,d.useState)(null),[h,s]=(0,d.useState)([]),[v,k]=(0,d.useState)(""),[g,x]=(0,d.useState)([]),[y,b]=(0,d.useState)(!0),[E,p]=(0,d.useState)({type:"",text:""}),[u,f]=(0,d.useState)(null),[L,W]=(0,d.useState)("mine"),[_,B]=(0,d.useState)("today"),[A,D]=(0,d.useState)(""),[S,$t]=(0,d.useState)(""),[Da,ge]=(0,d.useState)(new Set),[Ha,gi]=(0,d.useState)(""),[bt,H2]=(0,d.useState)({col:null,dir:"asc"}),pe=c=>H2(M=>M.col!==c?{col:c,dir:"asc"}:M.dir==="asc"?{col:c,dir:"desc"}:{col:null,dir:"asc"}),[jn,fe]=(0,d.useState)(()=>{try{let c=localStorage.getItem("tbcWorkFont");return i4[c]?c:"m"}catch{return"m"}}),S2=c=>{fe(c);try{localStorage.setItem("tbcWorkFont",c)}catch{}},[Wn,qd]=(0,d.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),pi=c=>qd(M=>{let w=M.includes(c)?M.filter(V=>V!==c):[...M,c];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(w))}catch{}return w}),[ve,Hn]=(0,d.useState)(!1),[fi,A2]=(0,d.useState)(""),[Sn,V2]=(0,d.useState)(""),[Oa,qr]=(0,d.useState)(!1),[pt,St]=(0,d.useState)(null),[Ua,ke]=(0,d.useState)(!1),[An,H]=(0,d.useState)(!1),ft=(0,d.useRef)(!1),[Ca,ha]=(0,d.useState)([]),[Vn,M4]=(0,d.useState)([]),[Gd,Yd]=(0,d.useState)([]),z2=(0,d.useRef)("mine"),[vi,zn]=(0,d.useState)(null),[Gr,_2]=(0,d.useState)(null),[m4,_n]=(0,d.useState)(null),[Xd,T2]=(0,d.useState)(null),Za=i4[jn],ur=Za+3,ua=i.date,Qd=(0,d.useRef)(null),Tn=(0,d.useRef)(0),qa=(c,M)=>{p({type:c,text:M}),clearTimeout(Qd.current),Qd.current=setTimeout(()=>p({type:"",text:""}),3200)},vt=async(c,M)=>{let{data:w,error:V}=await a.rpc(c,M||{});if(V)throw V;return w},Dt=async(c,M)=>{try{let w=await c();return await N2(!0),Li(),z2.current==="notice"&&Id(),M&&qa("success",typeof M=="function"?M(w):M),w}catch(w){qa("error",Bn(w)),await N2(!0);return}},At=(0,d.useMemo)(()=>{if(_==="today")return{start:ua,end:ua};if(_==="week"){let w=Ff(ua);return{start:w,end:j2(w,6)}}let c=A||ua,M=S||c;return c<=M?{start:c,end:M}:{start:M,end:c}},[_,A,S,ua]);(0,d.useEffect)(()=>{let c=setInterval(()=>n(M=>{let w=o4();return w.date===M.date&&w.time===M.time?M:w}),3e4);return()=>clearInterval(c)},[]);let y4=async()=>{try{let c=await vt("work_current_member"),M=await vt("work_list_people");return l(c),s(M||[]),ge(new Set((M||[]).filter(w=>Od.includes(w.role)).map(w=>w.member_id))),k(""),!0}catch(c){return k(Bn(c)),!1}},N2=async c=>{let M=++Tn.current;c||b(!0);try{let w=r&&r.fetchAllData?r.fetchAllData:C=>C(),V=C=>{if(C&&C.error)throw C.error;return C&&C.data||[]},F=V(await w(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).lte("start_date",At.end).gte("end_date",At.start))),Bt=V(await w(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).lte("end_date",ua).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),Ot=new Set(F.map(C=>C.id)),kt=Bt.map(C=>C.id).filter(C=>!Ot.has(C)),It=[];if(kt.length&&(It=V(await w(()=>a.from("work_items").select("*, work_assignees(*)").in("id",kt)))),M!==Tn.current)return;let O=[];for(let C of[...F,...It]){let{work_assignees:rt,...sa}=C;for(let Pt of rt||[])O.push({key:Pt.id,item:{...sa,assigneeCount:(rt||[]).length},a:Pt})}x(O)}catch(w){M===Tn.current&&qa("error","讀取失敗："+Bn(w))}finally{M===Tn.current&&!c&&b(!1)}};(0,d.useEffect)(()=>{y4()},[]),(0,d.useEffect)(()=>{o&&N2(!1)},[o,At.start,At.end,ua]),(0,d.useEffect)(()=>{_==="custom"&&!A&&(D(ua),$t(j2(ua,6)))},[_]);let ki=(0,d.useMemo)(()=>{let c={};return h.forEach(M=>{c[M.member_id]={name:M.name,role:M.role}}),c},[h]),lv=o?ki[o]:null,E2=(0,d.useMemo)(()=>h.filter(c=>Od.includes(c.role)),[h]),Kd=c=>{let M=c.a.status==="done",w=c.a.status==="awaiting_confirm",V=!!c.a.skipped_at||c.a.status==="on_hold",F=Et(c.item.end_time),Bt=!M&&!w&&!V&&(c.item.end_date<i.date||c.item.end_date===i.date&&F&&F<i.time);return{...c,done:M,awaiting:w,skipped:V,overdue:Bt,isMine:c.a.member_id===o,isCreator:c.item.creator_member_id===o,canManage:c.item.creator_member_id===o||c.item.entered_by===o,isRoutine:c.item.assigneeCount===1&&c.item.creator_member_id===c.a.member_id,isRecurring:!!c.item.recurring_rule_id,person:ki[c.a.member_id],dispatcher:ki[c.item.creator_member_id]}},{overdueRows:Nn,groups:D2,total:Jd}=(0,d.useMemo)(()=>{let c=g.map(Kd),M=Ha.trim().toLowerCase(),w=C=>!M||[C.item.title,C.item.note,C.person&&C.person.name,C.dispatcher&&C.dispatcher.name].some(rt=>rt&&String(rt).toLowerCase().includes(M)),V=c.filter(C=>(L==="mine"?C.canManage:L==="tome"?C.isMine&&!C.isCreator:Da.has(C.a.member_id))&&w(C)),F=V.filter(C=>C.overdue).sort((C,rt)=>(C.item.end_date+Et(C.item.end_time)).localeCompare(rt.item.end_date+Et(rt.item.end_time))||(C.person&&C.person.name||"").localeCompare(rt.person&&rt.person.name||"")),Bt=V.filter(C=>!C.overdue&&C.item.start_date<=At.end&&C.item.end_date>=At.start),Ot={};Bt.forEach(C=>{(Ot[C.item.start_date]=Ot[C.item.start_date]||[]).push(C)});let kt=Object.keys(Ot).sort().map(C=>{let rt=Ot[C].sort((Pt,sr)=>{if(L!=="all")return Pt.a.sort_order-sr.a.sort_order||String(Pt.a.created_at).localeCompare(String(sr.a.created_at));let K=Et(Pt.item.start_time)||"99:99",P=Et(sr.item.start_time)||"99:99";return K.localeCompare(P)||(Pt.person&&Pt.person.name||"").localeCompare(sr.person&&sr.person.name||"")}),sa=L==="mine"&&C>=At.start&&!M;return{date:C,rows:rt,canMove:sa}}),It=F,O=kt;if(bt.col){let C=bt.dir==="asc"?1:-1,rt=(K,P)=>String(K||"").localeCompare(String(P||""),"zh-Hant"),sa=K=>K.done?3:K.awaiting?2:K.skipped?1:0,sr={title:(K,P)=>rt(K.item.title,P.item.title),who:(K,P)=>rt(K.dispatcher&&K.dispatcher.name,P.dispatcher&&P.dispatcher.name),doer:(K,P)=>rt(K.person&&K.person.name,P.person&&P.person.name),status:(K,P)=>sa(K)-sa(P),priority:(K,P)=>(d4[K.item.priority]??1)-(d4[P.item.priority]??1),hours:(K,P)=>{let Yr=l4(K.item),Mi=l4(P.item);return Yr==null&&Mi==null?0:Yr==null?2*C:Mi==null?-2*C:Yr-Mi},date:(K,P)=>(K.item.start_date+Et(K.item.start_time)).localeCompare(P.item.start_date+Et(P.item.start_time))}[bt.col];if(sr){let K=P=>[...P].sort((Yr,Mi)=>C*sr(Yr,Mi));bt.col==="date"?(It=K(F),O=[...kt].sort((P,Yr)=>C*P.date.localeCompare(Yr.date))):(It=K(F),O=kt.map(P=>({...P,rows:K(P.rows)})))}O=O.map(K=>({...K,canMove:!1}))}return{overdueRows:It,groups:O,total:F.length+Bt.length}},[g,i,o,L,Da,At,ki,Ha,bt]),O2=(0,d.useMemo)(()=>{let c={};return Vn.forEach(M=>{M.item_id&&!(M.item_id in c)&&(c[M.item_id]=M.created_at)}),Gd.map(Kd).filter(M=>M.canManage||M.isMine).map(M=>({...M,notice:!0})).sort((M,w)=>String(c[w.item.id]||"").localeCompare(String(c[M.item.id]||"")))},[Gd,Vn,o,ki,i]),En=n4.filter(c=>c.locked||!Wn.includes(c.id)),w4=c=>typeof c.w=="function"?c.w(Za):c.w,C4=c=>typeof c.min=="function"?c.min(Za):c.min,Rd=`56px ${En.map(w4).join(" ")}`,b4=56+En.reduce((c,M)=>c+C4(M),0)+16,xi=(c,M,w)=>Dt(()=>{let V={...c.item,...M};return vt("work_update_routine",{p_item_id:V.id,p_title:V.title,p_start_date:V.start_date,p_start_time:V.start_time||null,p_end_date:V.end_date,p_end_time:V.end_time||null,p_priority:V.priority||"normal",p_note:V.note||null,p_meeting_flag:null})},w),B4=(c,M,w)=>{if(!M||!w){qa("error","日期必填");return}let V=M,F=w;if(M!==c.item.start_date&&w===c.item.end_date&&(F=j2(M,p4(c.item.end_date,c.item.start_date))),F<V){qa("error","結束日期不能早於開始日期");return}let Bt=!(V<=At.end&&F>=At.start);return xi(c,{start_date:V,end_date:F},Bt?`已改到 ${Ea(V)}（目前顯示範圍看不到，切換範圍就會出現）`:null)},j4=(c,M,w)=>xi(c,{start_time:M||null,end_time:w||null}),W4=(c,M)=>{if(!M){qa("error","任務名稱不能空白");return}return xi(c,{title:M})},dv=c=>Dt(()=>vt("work_complete",{p_item_id:c.item.id,p_note:null}),"已完成"),H4=(c,M)=>Dt(()=>vt("work_set_status",{p_item_id:c.item.id,p_status:M}),M==="done"&&c.item.creator_member_id!==o?"已完成，等待派工者確認":"狀態已更新"),S4=c=>Dt(()=>vt("work_confirm",{p_assignee_id:c.a.id}),"已確認完成"),[U2,Dn]=(0,d.useState)(null),[Fd,$d]=(0,d.useState)(""),A4=c=>{$d(""),Dn(c)},V4=async()=>{let c=U2;Dn(null),await Dt(()=>vt("work_return",{p_assignee_id:c.a.id,p_note:Fd.trim()||null}),"已退回，送出提醒")},On=(c,M)=>Dt(()=>vt("work_move",{p_item_id:c.item.id,p_where:M})),z4=c=>Dt(()=>vt("work_copy",{p_item_id:c.item.id}),"複製成功"),_4=c=>f({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或擱置不會刪除，標記「取消」並保留紀錄`,onConfirm:async()=>{f(null),await Dt(()=>vt("work_delete",{p_item_id:c.item.id}),M=>M==="canceled"?"這筆已有進度紀錄，已改為取消並保留紀錄":"已刪除")}}),cv=async()=>{let c=fi.trim();if(!c||Oa)return;qr(!0);let M=Sn||ua,w=await Dt(()=>vt("work_create_routine",{p_title:c,p_start_date:M,p_end_date:M}));if(qr(!1),w){A2("");let V=M<=At.end&&M>=At.start;qa("success",V?"已新增":`已新增到 ${Ea(M)}（目前顯示範圍看不到，切換範圍就會出現）`)}},T4=async c=>{qr(!0);let M;if(pt.mode==="editRule")M=await Dt(()=>vt("work_update_rule",{p_rule_id:pt.rule.id,p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:c.isActive}),"週期工作已儲存（只影響之後產生的工作）"),M!==void 0&&await Un();else if(c.repeat==="none"&&c.assigneeIds&&!(c.assigneeIds.length===1&&c.assigneeIds[0]===o&&c.dispatcherId===o)){let w=c.assigneeIds.some(V=>V!==o);M=await Dt(()=>vt("work_assign_create",{p_title:c.title,p_assignee_ids:c.assigneeIds,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_dispatcher_id:c.dispatcherId}),w?"派工完成，送出提醒":"已新增")}else c.repeat==="none"?M=await Dt(()=>vt("work_create_routine",{p_title:c.title,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已新增"):M=await Dt(()=>vt("work_create_rule",{p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已建立週期工作，之後會在凌晨自動出現在清單");qr(!1),M!==void 0&&St(null)},Un=async()=>{try{let{data:c,error:M}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(M)throw M;ha(c||[])}catch(c){qa("error","讀取週期工作失敗："+Bn(c))}},Li=async()=>{try{M4(await vt("work_notifications_list")||[])}catch{}};(0,d.useEffect)(()=>{if(!o)return;Li();let c=setInterval(Li,6e4);return()=>clearInterval(c)},[o]);let Z2=Vn.filter(c=>!c.read_at).length,N4=async()=>{try{await vt("work_notifications_read",{p_ids:null}),await Li()}catch{}},Id=async c=>{let M=[...new Set((c||Vn).map(w=>w.item_id).filter(Boolean))];if(!M.length){Yd([]);return}try{let{data:w,error:V}=await a.from("work_items").select("*, work_assignees(*)").in("id",M).is("canceled_at",null);if(V)throw V;let F=[];for(let Bt of w||[]){let{work_assignees:Ot,...kt}=Bt;for(let It of Ot||[])F.push({key:It.id,item:{...kt,assigneeCount:(Ot||[]).length},a:It})}Yd(F)}catch(w){qa("error","讀取提醒失敗："+Bn(w))}},Zn=async c=>{let M=z2.current;z2.current=c,W(c),c==="notice"?(await Li(),await Id()):M==="notice"&&await N4()},Pd=async()=>{ke(!0),await Un()};(0,d.useEffect)(()=>{!pt&&ft.current&&(ft.current=!1,Pd())},[pt]);let E4=async c=>{await Dt(()=>vt("work_update_rule",{p_rule_id:c.id,p_title:c.title,p_freq:c.freq,p_weekdays_only:c.weekdays_only,p_week_days:c.week_days,p_month_day:c.month_day,p_month_last_day:c.month_last_day,p_start_date:c.start_date,p_until_date:c.until_date,p_start_time:c.start_time,p_end_time:c.end_time,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:!c.is_active}),c.is_active?"已暫停":"已啟用")!==void 0&&await Un()},D4=c=>f({title:"警告",confirmText:"刪除",message:`確定刪除週期工作「${c.title}」？
清單中還沒開始的幾次會一併移除，已過去或已有進度的紀錄會保留`,onConfirm:async()=>{f(null),await Dt(()=>vt("work_delete_rule",{p_rule_id:c.id}),"週期工作已刪除")!==void 0&&await Un()}}),O4=async(c,M)=>{let w=Gr;if(_2(null),T2(null),_n(null),!w||w.date!==c.date||w.key===M.key)return;let V=c.rows.filter(kt=>!kt.overdue),F=V.findIndex(kt=>kt.key===w.key),Bt=V.findIndex(kt=>kt.key===M.key),Ot=c.rows.find(kt=>kt.key===w.key);!Ot||F<0||Bt<0||await Dt(()=>vt("work_move_to",{p_item_id:Ot.item.id,p_target_item_id:M.item.id,p_after:F<Bt}))},xe="flex items-center bg-slate-100 p-1 rounded-full shrink-0",Ga=c=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,ba=vi?[...Nn,...D2.flatMap(c=>c.rows)].find(c=>c.key===vi.key):null,qn=ba?D2.find(c=>c.rows.some(M=>M.key===ba.key)):null,q2=(c,M)=>{let w=c.canManage,V=c.isMine&&c.isRoutine,F=M?M.rows.filter(O=>!O.overdue):[],Bt=!!M&&M.canMove&&V&&!c.overdue,Ot=Xd===c.key&&Gr&&Gr.key!==c.key,kt=c.done||c.skipped,It=O=>{switch(O.id){case"title":return d.default.createElement("div",{key:O.id,className:"min-w-0 w-full flex items-start gap-1.5"},d.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},c.notice&&d.default.createElement("span",{className:"tbc-row-bell text-red-500"},d.default.createElement(Nd,{size:Math.round(Za*.95)})),c.isRecurring&&d.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},d.default.createElement(Cn,{size:Math.round(Za*.95)})),c.overdue&&d.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},d.default.createElement(Vd,{size:Math.round(Za*.8)})," 逾期")),d.default.createElement("div",{className:"min-w-0 flex-1"},d.default.createElement(s4,{value:c.item.title,placeholder:"工作摘要",canEdit:w,onSave:C=>W4(c,C),className:`font-medium ${kt?"text-slate-400 line-through":c.overdue?"text-red-600":"text-slate-900"}`}),c.a.status==="pending"&&c.a.return_note&&d.default.createElement("div",{className:"tbc-return text-[0.78em] text-red-500 -mt-0.5"},"退回原因：",c.a.return_note)));case"who":return d.default.createElement("div",{key:O.id,className:"min-w-0"},d.default.createElement(h4,{person:c.dispatcher,size:ur}));case"doer":return d.default.createElement("div",{key:O.id,className:"min-w-0"},d.default.createElement(h4,{person:c.person,size:ur}));case"date":{let C=c.item.start_date!==c.item.end_date;return d.default.createElement("div",{key:O.id,className:`min-w-0 ${c.overdue?"text-red-600":"text-slate-700"}`},d.default.createElement(g4,{type:"date",a:c.item.start_date,b:c.item.end_date,canEdit:w,onSave:(rt,sa)=>B4(c,rt,sa)},C?`${Ea(c.item.start_date)} → ${Ea(c.item.end_date)}`:Ea(c.item.start_date)))}case"time":{let C=Et(c.item.start_time),rt=Et(c.item.end_time);return d.default.createElement("div",{key:O.id,className:"min-w-0 text-slate-700"},d.default.createElement(g4,{type:"time",a:C,b:rt,canEdit:w,onSave:(sa,Pt)=>j4(c,sa,Pt)},C||rt?`${C||"—"} ~ ${rt||"—"}`:d.default.createElement("span",{className:"text-slate-300"},w?"時間設定":"")))}case"hours":return d.default.createElement("div",{key:O.id,className:"text-slate-500 text-[0.9em]"},If(c.item)||"");case"priority":return d.default.createElement("div",{key:O.id},d.default.createElement("button",{type:"button",disabled:!w,onClick:()=>xi(c,{priority:tv[c.item.priority]||"normal"}),title:w?"點一下切換":"",className:`tbc-prio text-[0.75em] px-2 py-0.5 rounded border font-bold ${c4[c.item.priority]||c4.normal} ${w?"hover:brightness-95 cursor-pointer":"cursor-default"}`},Pf[c.item.priority]||"普通"));case"note":return d.default.createElement("div",{key:O.id,className:"min-w-0 w-full"},d.default.createElement(s4,{value:c.item.note,placeholder:"新增備註",centerEmpty:!0,canEdit:w,onSave:C=>xi(c,{note:C||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let C=c.done?"done":c.awaiting?"awaiting":c.skipped?"on_hold":"pending",rt=C==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":C==="awaiting"?"bg-sky-50 border-sky-200 text-sky-700":C==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600",sa={pending:"待處理",done:"完成",on_hold:"擱置",awaiting:"待確認"}[C];return c.awaiting&&c.isCreator&&!c.isMine?d.default.createElement("div",{key:O.id,className:"flex items-center gap-1.5 tbc-review whitespace-nowrap"},d.default.createElement("button",{type:"button",onClick:()=>S4(c),className:"h-8 px-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},d.default.createElement(Ng,{size:14}),"確認"),d.default.createElement("button",{type:"button",onClick:()=>A4(c),className:"h-8 px-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},d.default.createElement(Ed,{size:14}),"退回")):c.isMine?d.default.createElement("select",{key:O.id,value:C,onChange:Pt=>H4(c,Pt.target.value),"aria-label":"狀態",title:"點一下改變狀態",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${rt}`},d.default.createElement("option",{value:"pending"},"待處理"),d.default.createElement("option",{value:"done"},"完成"),d.default.createElement("option",{value:"on_hold"},"擱置"),C==="awaiting"&&d.default.createElement("option",{value:"awaiting",disabled:!0},"待確認")):d.default.createElement("span",{key:O.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${rt}`},sa)}default:return null}};return d.default.createElement("div",{key:c.key,draggable:Bt&&m4===c.key,onDragStart:O=>{_2({key:c.key,date:M.date}),O.dataTransfer.effectAllowed="move";try{O.dataTransfer.setData("text/plain",c.key)}catch{}},onDragOver:O=>{Gr&&M&&Gr.date===M.date&&!c.overdue&&(O.preventDefault(),Xd!==c.key&&T2(c.key))},onDrop:O=>{O.preventDefault(),M&&O4(M,c)},onDragEnd:()=>{_2(null),T2(null),_n(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors
                    ${c.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Gr&&Gr.key===c.key?"opacity-40":""}
                    ${Ot?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:Rd}},d.default.createElement("div",{className:"flex items-center gap-0.5 px-2"},Bt?d.default.createElement("span",{onMouseDown:()=>_n(c.key),onMouseUp:()=>_n(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},d.default.createElement(Tg,{size:ur})):d.default.createElement("span",{style:{width:ur}}),w?d.default.createElement("button",{onClick:O=>{let C=O.currentTarget.getBoundingClientRect();zn({key:c.key,x:Math.min(C.left,window.innerWidth-220),y:Math.min(C.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},d.default.createElement(_g,{size:ur})):d.default.createElement("span",{style:{width:ur+8}})),En.map(O=>{let C=O.id==="title"||O.id==="note";return d.default.createElement("div",{key:O.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${C?"[&>*]:w-full":"justify-center text-center"}`},It(O))}))};return d.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:Za}},d.default.createElement(t4,{active:"work",shell:e}),d.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},d.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},d.default.createElement("div",{className:"flex items-center gap-4 min-w-0"},d.default.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:Za*1.45}},"工作日誌"),d.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},d.default.createElement(Yg,{size:16,className:"text-slate-400 shrink-0"}),d.default.createElement("input",{type:"text",value:Ha,onChange:c=>gi(c.target.value),onKeyDown:c=>{c.key==="Escape"&&gi("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),Ha&&d.default.createElement("button",{type:"button",onClick:()=>gi(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},d.default.createElement(bn,{size:14})))),d.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},d.default.createElement("button",{onClick:()=>St({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},d.default.createElement(wn,{size:16}),"新增"),d.default.createElement("div",{className:xe},d.default.createElement("button",{onClick:Pd,className:Ga(!1)},d.default.createElement(wn,{size:14,className:"text-slate-500"}),"週期工作")),d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>Hn(c=>!c),className:`${xe} !p-1.5`},d.default.createElement("span",{className:Ga(ve)},d.default.createElement(B2,{size:14,className:"text-slate-500"}),"隱藏")),ve&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Hn(!1)}),d.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},n4.filter(c=>!c.locked).map(c=>d.default.createElement("label",{key:c.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${c.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},d.default.createElement("input",{type:"checkbox",disabled:c.locked,checked:c.locked||!Wn.includes(c.id),onChange:()=>pi(c.id),className:"accent-indigo-600"}),c.label,c.locked&&d.default.createElement(Td,{size:11})))))),d.default.createElement("div",{className:xe,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([c,M,w])=>d.default.createElement("button",{key:c,onClick:()=>S2(c),title:M,"aria-label":`文字${M}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${jn===c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:w}},"A"))))),v?d.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},d.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},d.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},d.default.createElement(Td,{size:30})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),d.default.createElement("p",{className:"text-slate-500 font-normal"},v),d.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧師、行政與管理員。"))):d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 relative z-[15] shrink-0 space-y-3"},d.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},(Z2>0||L==="notice")&&d.default.createElement("button",{onClick:()=>Zn("notice"),"aria-label":"提醒",title:"提醒",className:`tbc-bell relative h-11 w-11 rounded-full flex items-center justify-center transition-colors ${L==="notice"?"bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-200":"bg-slate-100 hover:bg-slate-200 text-slate-600"}`},d.default.createElement(Nd,{size:18}),Z2>0&&d.default.createElement("span",{className:"tbc-bell-count absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[11px] leading-[18px] text-center font-bold"},Z2)),d.default.createElement("div",{className:xe},d.default.createElement("button",{onClick:()=>Zn("mine"),className:Ga(L==="mine")},"我的"),d.default.createElement("button",{onClick:()=>Zn("tome"),className:Ga(L==="tome")},"派工給我"),d.default.createElement("button",{onClick:()=>Zn("all"),className:Ga(L==="all")},"全部")),L==="all"&&d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>H(c=>!c),className:`${xe} !p-1.5`},d.default.createElement("span",{className:Ga(An)},d.default.createElement(y2,{size:14,className:"text-slate-500"}),"人員（",Da.size,"/",E2.length,"）")),An&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>H(!1)}),d.default.createElement("div",{className:"absolute left-0 top-full mt-2 z-40 w-56 max-h-80 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},d.default.createElement("div",{className:"flex gap-2 px-1 pb-2 mb-1 border-b border-slate-100"},d.default.createElement("button",{onClick:()=>ge(new Set(E2.map(c=>c.member_id))),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全選"),d.default.createElement("button",{onClick:()=>ge(new Set),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全不選")),E2.map(c=>d.default.createElement("label",{key:c.member_id,className:"flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none text-slate-700 hover:bg-slate-50 cursor-pointer"},d.default.createElement("input",{type:"checkbox",checked:Da.has(c.member_id),onChange:()=>ge(M=>{let w=new Set(M);return w.has(c.member_id)?w.delete(c.member_id):w.add(c.member_id),w}),className:"accent-indigo-600"}),c.name))))),L!=="notice"&&d.default.createElement("div",{className:xe},d.default.createElement("button",{onClick:()=>B("today"),className:Ga(_==="today")},"今日"),d.default.createElement("button",{onClick:()=>B("week"),className:Ga(_==="week")},"本週"),d.default.createElement("button",{onClick:()=>B("custom"),className:Ga(_==="custom")},"自訂")),L!=="notice"&&_==="custom"&&d.default.createElement("div",{className:"flex items-center gap-2"},d.default.createElement("input",{type:"date",value:A,onChange:c=>D(c.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),d.default.createElement("span",{className:"text-slate-400"},"～"),d.default.createElement("input",{type:"date",value:S,min:A,onChange:c=>$t(c.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),d.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},L==="notice"?d.default.createElement("span",null,"提醒的派工　共 ",O2.length," 筆"):d.default.createElement(d.default.Fragment,null,At.start===At.end?Ea(At.start):`${Ea(At.start)} ～ ${Ea(At.end)}`,d.default.createElement("span",{className:"ml-3"},"共 ",Jd," 筆"))))),d.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},d.default.createElement("div",{className:"space-y-4",style:{minWidth:b4}},d.default.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:Rd}},d.default.createElement("span",{className:"py-2"}),En.map(c=>c.sortable?d.default.createElement("button",{key:c.id,type:"button",onClick:()=>pe(c.id),title:"點一下排序","aria-sort":bt.col===c.id?bt.dir==="asc"?"ascending":"descending":"none",className:`py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap font-medium inline-flex items-center justify-center gap-0.5 hover:bg-slate-200/70 transition-colors ${bt.col===c.id?"text-indigo-600":""}`},c.label,bt.col===c.id&&(bt.dir==="asc"?d.default.createElement(_d,{size:14}):d.default.createElement(C2,{size:14}))):d.default.createElement("span",{key:c.id,className:"py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap"},c.label))),L==="notice"?O2.length===0?d.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},"目前沒有提醒"):d.default.createElement("div",{className:"tbc-notice-list bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},O2.map(c=>q2(c,null))):y&&g.length===0?d.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):Jd===0?d.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},Ha.trim()?`找不到符合「${Ha.trim()}」的工作（只搜尋目前顯示的範圍）`:"新增一筆工作，開始記錄"):d.default.createElement(d.default.Fragment,null,Nn.length>0&&d.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},d.default.createElement(Vd,{size:ur})," 逾期未完成 ",d.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},Nn.length)),Nn.map(c=>q2(c,null))),D2.map(c=>{let M=$f(c.date,ua);return d.default.createElement("div",{key:c.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},d.default.createElement("span",{className:`font-bold ${M.tag==="今天"?"text-indigo-600":"text-slate-800"}`},M.text)),c.rows.map(w=>q2(w,c)))}))))),U2&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},d.default.createElement(Ed,{size:20,className:"text-indigo-600"}),"退回"),d.default.createElement("button",{onClick:()=>Dn(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},d.default.createElement(bn,{size:20}))),d.default.createElement("div",{className:"p-5 space-y-2"},d.default.createElement("p",{className:"text-sm text-slate-600"},"退回「",U2.item.title,"」，對方會收到提醒。"),d.default.createElement("label",{className:"text-xs font-medium text-slate-500"},"退回原因（選填）"),d.default.createElement("textarea",{autoFocus:!0,value:Fd,onChange:c=>$d(c.target.value),rows:3,placeholder:"例如：請補上照片",className:"tbc-return-text w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"})),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},d.default.createElement("button",{onClick:()=>Dn(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full"},"取消"),d.default.createElement("button",{onClick:V4,className:"tbc-return-ok flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full"},"退回")))),vi&&ba&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>zn(null),onContextMenu:c=>{c.preventDefault(),zn(null)}}),d.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:vi.x,top:vi.y,fontSize:Za}},(()=>{let c=qn?qn.rows.filter(F=>!F.overdue):[],M=c.findIndex(F=>F.key===ba.key),w=!!qn&&qn.canMove&&M>=0,V=(F,Bt,Ot,kt,It)=>d.default.createElement("button",{disabled:kt,onClick:()=>{zn(null),Ot()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${It?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},d.default.createElement(F,{size:ur-1}),Bt);return d.default.createElement(d.default.Fragment,null,ba.isRoutine&&d.default.createElement(d.default.Fragment,null,V(Og,"移到頂端",()=>On(ba,"top"),!w||M===0),V(_d,"上一行",()=>On(ba,"up"),!w||M===0),V(C2,"下一行",()=>On(ba,"down"),!w||M===c.length-1),V(Ug,"移到底部",()=>On(ba,"bottom"),!w||M===c.length-1),d.default.createElement("div",{className:"h-px bg-slate-100 my-1"}),V(Dg,"複製",()=>z4(ba))),V(zd,"刪除",()=>_4(ba),!1,!0))})())),pt&&d.default.createElement(rv,{key:pt.mode+(pt.rule?pt.rule.id:""),mode:pt.mode,initial:pt.rule,presetRepeat:pt.preset,today:ua,busy:Oa,onClose:()=>St(null),onSubmit:T4,people:h,meId:o}),Ua&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},d.default.createElement(Cn,{className:"text-indigo-600",size:20})," 我的週期工作"),d.default.createElement("button",{onClick:()=>ke(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(bn,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},d.default.createElement("button",{onClick:()=>{ke(!1),St({mode:"createRule",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},d.default.createElement(wn,{size:16}),"新增週期工作"),Ca.length===0?d.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"還沒有週期工作。按上面的「+ 新增週期工作」建立。"):Ca.map(c=>d.default.createElement("div",{key:c.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${c.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},d.default.createElement("div",{className:"min-w-0"},d.default.createElement("div",{className:`font-medium truncate ${c.is_active?"text-slate-900":"text-slate-400"}`},c.title),d.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},av(c),c.start_time?`　${Et(c.start_time)}${c.end_time?"~"+Et(c.end_time):""}`:"",c.until_date?`　到 ${Ea(c.until_date)}`:"",c.is_active?"":"　（暫停）")),d.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},d.default.createElement("button",{onClick:()=>{ft.current=!0,ke(!1),St({mode:"editRule",rule:c})},className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},d.default.createElement(Gg,{size:16})),d.default.createElement("button",{onClick:()=>E4(c),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${c.is_active?"bg-emerald-50 text-emerald-600 hover:bg-emerald-100":"bg-amber-50 text-amber-600 hover:bg-amber-100"}`,title:c.is_active?"啟用":"暫停","aria-label":c.is_active?"啟用":"暫停"},c.is_active?d.default.createElement(qg,{size:16}):d.default.createElement(Zg,{size:16})),d.default.createElement("button",{onClick:()=>D4(c),className:"tbc-rule-del p-2.5 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg active:scale-95 transition-colors",title:"刪除","aria-label":"刪除週期工作"},d.default.createElement(zd,{size:16})))))))),E.text&&d.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},d.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${E.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},d.default.createElement("div",{className:"shrink-0 mt-0.5"},E.type==="success"?d.default.createElement(Eg,{size:18}):d.default.createElement(si,{size:18})),d.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},E.text))),u&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"p-8 text-center"},d.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},d.default.createElement(si,{size:32})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),d.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},d.default.createElement("button",{onClick:()=>f(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},v4=ev;var k4=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
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
  .my-1 {
    margin-block: var(--spacing);
  }
  .-mt-0\\.5 {
    margin-top: calc(var(--spacing) * -0.5);
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
`;var iv="https://jcepavwocdujoeoqxvsd.supabase.co",nv="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",Zd=document.createElement("style");Zd.id="tbc-one-css";Zd.textContent=k4;document.head.appendChild(Zd);var se=window.__TBC_SB||window.supabase.createClient(iv,nv),ov=({page:t})=>{let[a,r]=(0,Ct.useState)(void 0),[e,i]=(0,Ct.useState)(""),[n,o]=(0,Ct.useState)({status:"loading",name:"",role:"member"});(0,Ct.useEffect)(()=>{let v=!0;se.auth.getSession().then(({data:g})=>{v&&r(g.session||null)});let{data:k}=se.auth.onAuthStateChange((g,x)=>{v&&r(x||null)});return()=>{v=!1,k&&k.subscription&&k.subscription.unsubscribe()}},[]);let l=a&&a.user&&a.user.id;(0,Ct.useEffect)(()=>{if(!a)return;let v=!0;return Pg(se,a).then(async k=>{if(v){if(k.status!=="ok"||!$g.includes(k.role)){try{await se.auth.signOut()}catch{}i("權限不足"),r(null);return}i(""),o(k)}}),()=>{v=!1}},[l]);let h=async()=>{try{await se.auth.signOut()}catch{}r(null),o({status:"loading",name:"",role:"member"})};if(a===void 0)return Ct.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return Ct.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},Ct.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},Ct.default.createElement(b2,{size:30})),Ct.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),Ct.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),Ct.default.createElement(a4,{supabase:se,notice:e}));if(n.status!=="ok")return Ct.default.createElement("div",{className:"h-[100dvh] bg-white"});let s={identity:n,onLogout:h};return t==="work"?Ct.default.createElement(v4,{session:a,supabase:se,utils:{},shell:s}):Ct.default.createElement(e4,{shell:s})},x4=document.getElementById("root");(0,L4.createRoot)(x4).render(Ct.default.createElement(ov,{page:x4.getAttribute("data-page")||"home"}));})();
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
