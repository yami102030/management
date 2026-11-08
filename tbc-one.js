(()=>{var Q4=Object.create;var rc=Object.defineProperty;var K4=Object.getOwnPropertyDescriptor;var J4=Object.getOwnPropertyNames;var R4=Object.getPrototypeOf,F4=Object.prototype.hasOwnProperty;var gr=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var $4=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of J4(a))!F4.call(t,i)&&i!==r&&rc(t,i,{get:()=>a[i],enumerable:!(e=K4(a,i))||e.enumerable});return t};var Xr=(t,a,r)=>(r=t!=null?Q4(R4(t)):{},$4(a||!t||!t.__esModule?rc(r,"default",{value:t,enumerable:!0}):r,t));var gc=gr(T=>{"use strict";var Q2=Symbol.for("react.transitional.element"),I4=Symbol.for("react.portal"),P4=Symbol.for("react.fragment"),tp=Symbol.for("react.strict_mode"),ap=Symbol.for("react.profiler"),rp=Symbol.for("react.consumer"),ep=Symbol.for("react.context"),ip=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),op=Symbol.for("react.memo"),lc=Symbol.for("react.lazy"),lp=Symbol.for("react.activity"),ec=Symbol.iterator;function dp(t){return t===null||typeof t!="object"?null:(t=ec&&t[ec]||t["@@iterator"],typeof t=="function"?t:null)}var dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cc=Object.assign,hc={};function Me(t,a,r){this.props=t,this.context=a,this.refs=hc,this.updater=r||dc}Me.prototype.isReactComponent={};Me.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};Me.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uc(){}uc.prototype=Me.prototype;function K2(t,a,r){this.props=t,this.context=a,this.refs=hc,this.updater=r||dc}var J2=K2.prototype=new uc;J2.constructor=K2;cc(J2,Me.prototype);J2.isPureReactComponent=!0;var ic=Array.isArray;function X2(){}var et={H:null,A:null,T:null,S:null},sc=Object.prototype.hasOwnProperty;function R2(t,a,r){var e=r.ref;return{$$typeof:Q2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function cp(t,a){return R2(t.type,a,t.props)}function F2(t){return typeof t=="object"&&t!==null&&t.$$typeof===Q2}function hp(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var nc=/\/+/g;function Y2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?hp(""+t.key):a.toString(36)}function up(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(X2,X2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Le(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Q2:case I4:o=!0;break;case lc:return o=t._init,Le(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+Y2(t,0):e,ic(i)?(r="",o!=null&&(r=o.replace(nc,"$&/")+"/"),Le(i,a,r,"",function(s){return s})):i!=null&&(F2(i)&&(i=cp(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(nc,"$&/")+"/")+o)),a.push(i)),1;o=0;var l=e===""?".":e+":";if(ic(t))for(var h=0;h<t.length;h++)e=t[h],n=l+Y2(e,h),o+=Le(e,a,r,n,i);else if(h=dp(t),typeof h=="function")for(t=h.call(t),h=0;!(e=t.next()).done;)e=e.value,n=l+Y2(e,h++),o+=Le(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return Le(up(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function Gn(t,a,r){if(t==null)return t;var e=[],i=0;return Le(t,e,"","",function(n){return a.call(r,n,i++)}),e}function sp(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var oc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gp={map:Gn,forEach:function(t,a,r){Gn(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return Gn(t,function(){a++}),a},toArray:function(t){return Gn(t,function(a){return a})||[]},only:function(t){if(!F2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};T.Activity=lp;T.Children=gp;T.Component=Me;T.Fragment=P4;T.Profiler=ap;T.PureComponent=K2;T.StrictMode=tp;T.Suspense=np;T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=et;T.__COMPILER_RUNTIME={__proto__:null,c:function(t){return et.H.useMemoCache(t)}};T.cache=function(t){return function(){return t.apply(null,arguments)}};T.cacheSignal=function(){return null};T.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=cc({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!sc.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),l=0;l<n;l++)o[l]=arguments[l+2];e.children=o}return R2(t.type,i,e)};T.createContext=function(t){return t={$$typeof:ep,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:rp,_context:t},t};T.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)sc.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var l=Array(o),h=0;h<o;h++)l[h]=arguments[h+2];i.children=l}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return R2(t,n,i)};T.createRef=function(){return{current:null}};T.forwardRef=function(t){return{$$typeof:ip,render:t}};T.isValidElement=F2;T.lazy=function(t){return{$$typeof:lc,_payload:{_status:-1,_result:t},_init:sp}};T.memo=function(t,a){return{$$typeof:op,type:t,compare:a===void 0?null:a}};T.startTransition=function(t){var a=et.T,r={};et.T=r;try{var e=t(),i=et.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(X2,oc)}catch(n){oc(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),et.T=a}};T.unstable_useCacheRefresh=function(){return et.H.useCacheRefresh()};T.use=function(t){return et.H.use(t)};T.useActionState=function(t,a,r){return et.H.useActionState(t,a,r)};T.useCallback=function(t,a){return et.H.useCallback(t,a)};T.useContext=function(t){return et.H.useContext(t)};T.useDebugValue=function(){};T.useDeferredValue=function(t,a){return et.H.useDeferredValue(t,a)};T.useEffect=function(t,a){return et.H.useEffect(t,a)};T.useEffectEvent=function(t){return et.H.useEffectEvent(t)};T.useId=function(){return et.H.useId()};T.useImperativeHandle=function(t,a,r){return et.H.useImperativeHandle(t,a,r)};T.useInsertionEffect=function(t,a){return et.H.useInsertionEffect(t,a)};T.useLayoutEffect=function(t,a){return et.H.useLayoutEffect(t,a)};T.useMemo=function(t,a){return et.H.useMemo(t,a)};T.useOptimistic=function(t,a){return et.H.useOptimistic(t,a)};T.useReducer=function(t,a,r){return et.H.useReducer(t,a,r)};T.useRef=function(t){return et.H.useRef(t)};T.useState=function(t){return et.H.useState(t)};T.useSyncExternalStore=function(t,a,r){return et.H.useSyncExternalStore(t,a,r)};T.useTransition=function(){return et.H.useTransition()};T.version="19.2.8"});var Ya=gr((kv,pc)=>{"use strict";pc.exports=gc()});var Cc=gr(lt=>{"use strict";function tl(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<Yn(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Aa(t){return t.length===0?null:t[0]}function Qn(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,l=t[o],h=o+1,s=t[h];if(0>Yn(l,r))h<i&&0>Yn(s,l)?(t[e]=s,t[h]=r,e=h):(t[e]=l,t[o]=r,e=o);else if(h<i&&0>Yn(s,r))t[e]=s,t[h]=r,e=h;else break t}}return a}function Yn(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}lt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(fc=performance,lt.unstable_now=function(){return fc.now()}):($2=Date,vc=$2.now(),lt.unstable_now=function(){return $2.now()-vc});var fc,$2,vc,Xa=[],pr=[],pp=1,ga=null,Ut=3,al=!1,wi=!1,Ci=!1,rl=!1,Lc=typeof setTimeout=="function"?setTimeout:null,Mc=typeof clearTimeout=="function"?clearTimeout:null,kc=typeof setImmediate<"u"?setImmediate:null;function Xn(t){for(var a=Aa(pr);a!==null;){if(a.callback===null)Qn(pr);else if(a.startTime<=t)Qn(pr),a.sortIndex=a.expirationTime,tl(Xa,a);else break;a=Aa(pr)}}function el(t){if(Ci=!1,Xn(t),!wi)if(Aa(Xa)!==null)wi=!0,ye||(ye=!0,me());else{var a=Aa(pr);a!==null&&il(el,a.startTime-t)}}var ye=!1,bi=-1,mc=5,yc=-1;function wc(){return rl?!0:!(lt.unstable_now()-yc<mc)}function I2(){if(rl=!1,ye){var t=lt.unstable_now();yc=t;var a=!0;try{t:{wi=!1,Ci&&(Ci=!1,Mc(bi),bi=-1),al=!0;var r=Ut;try{a:{for(Xn(t),ga=Aa(Xa);ga!==null&&!(ga.expirationTime>t&&wc());){var e=ga.callback;if(typeof e=="function"){ga.callback=null,Ut=ga.priorityLevel;var i=e(ga.expirationTime<=t);if(t=lt.unstable_now(),typeof i=="function"){ga.callback=i,Xn(t),a=!0;break a}ga===Aa(Xa)&&Qn(Xa),Xn(t)}else Qn(Xa);ga=Aa(Xa)}if(ga!==null)a=!0;else{var n=Aa(pr);n!==null&&il(el,n.startTime-t),a=!1}}break t}finally{ga=null,Ut=r,al=!1}a=void 0}}finally{a?me():ye=!1}}}var me;typeof kc=="function"?me=function(){kc(I2)}:typeof MessageChannel<"u"?(P2=new MessageChannel,xc=P2.port2,P2.port1.onmessage=I2,me=function(){xc.postMessage(null)}):me=function(){Lc(I2,0)};var P2,xc;function il(t,a){bi=Lc(function(){t(lt.unstable_now())},a)}lt.unstable_IdlePriority=5;lt.unstable_ImmediatePriority=1;lt.unstable_LowPriority=4;lt.unstable_NormalPriority=3;lt.unstable_Profiling=null;lt.unstable_UserBlockingPriority=2;lt.unstable_cancelCallback=function(t){t.callback=null};lt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):mc=0<t?Math.floor(1e3/t):5};lt.unstable_getCurrentPriorityLevel=function(){return Ut};lt.unstable_next=function(t){switch(Ut){case 1:case 2:case 3:var a=3;break;default:a=Ut}var r=Ut;Ut=a;try{return t()}finally{Ut=r}};lt.unstable_requestPaint=function(){rl=!0};lt.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=Ut;Ut=t;try{return a()}finally{Ut=r}};lt.unstable_scheduleCallback=function(t,a,r){var e=lt.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:pp++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,tl(pr,t),Aa(Xa)===null&&t===Aa(pr)&&(Ci?(Mc(bi),bi=-1):Ci=!0,il(el,r-e))):(t.sortIndex=i,tl(Xa,t),wi||al||(wi=!0,ye||(ye=!0,me()))),t};lt.unstable_shouldYield=wc;lt.unstable_wrapCallback=function(t){var a=Ut;return function(){var r=Ut;Ut=a;try{return t.apply(this,arguments)}finally{Ut=r}}}});var Bc=gr((Lv,bc)=>{"use strict";bc.exports=Cc()});var Wc=gr(qt=>{"use strict";var fp=Ya();function jc(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fr(){}var Zt={d:{f:fr,r:function(){throw Error(jc(522))},D:fr,C:fr,L:fr,m:fr,X:fr,S:fr,M:fr},p:0,findDOMNode:null},vp=Symbol.for("react.portal");function kp(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vp,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var Bi=fp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Kn(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Zt;qt.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(jc(299));return kp(t,a,null,r)};qt.flushSync=function(t){var a=Bi.T,r=Zt.p;try{if(Bi.T=null,Zt.p=2,t)return t()}finally{Bi.T=a,Zt.p=r,Zt.d.f()}};qt.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Zt.d.C(t,a))};qt.prefetchDNS=function(t){typeof t=="string"&&Zt.d.D(t)};qt.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=Kn(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Zt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Zt.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};qt.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=Kn(a.as,a.crossOrigin);Zt.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Zt.d.M(t)};qt.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=Kn(r,a.crossOrigin);Zt.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};qt.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=Kn(a.as,a.crossOrigin);Zt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Zt.d.m(t)};qt.requestFormReset=function(t){Zt.d.r(t)};qt.unstable_batchedUpdates=function(t,a){return t(a)};qt.useFormState=function(t,a,r){return Bi.H.useFormState(t,a,r)};qt.useFormStatus=function(){return Bi.H.useHostTransitionStatus()};qt.version="19.2.8"});var Ac=gr((mv,Sc)=>{"use strict";function Hc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hc)}catch(t){console.error(t)}}Hc(),Sc.exports=Wc()});var Gs=gr(L2=>{"use strict";var wt=Bc(),eh=Ya(),xp=Ac();function m(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gn(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function nh(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function oh(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Vc(t){if(gn(t)!==t)throw Error(m(188))}function Lp(t){var a=t.alternate;if(!a){if(a=gn(t),a===null)throw Error(m(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return Vc(i),t;if(n===e)return Vc(i),a;n=n.sibling}throw Error(m(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,l=i.child;l;){if(l===r){o=!0,r=i,e=n;break}if(l===e){o=!0,e=i,r=n;break}l=l.sibling}if(!o){for(l=n.child;l;){if(l===r){o=!0,r=n,e=i;break}if(l===e){o=!0,e=n,r=i;break}l=l.sibling}if(!o)throw Error(m(189))}}if(r.alternate!==e)throw Error(m(190))}if(r.tag!==3)throw Error(m(188));return r.stateNode.current===r?t:a}function lh(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=lh(t),a!==null)return a;t=t.sibling}return null}var ot=Object.assign,Mp=Symbol.for("react.element"),Jn=Symbol.for("react.transitional.element"),_i=Symbol.for("react.portal"),We=Symbol.for("react.fragment"),dh=Symbol.for("react.strict_mode"),Dl=Symbol.for("react.profiler"),ch=Symbol.for("react.consumer"),Pa=Symbol.for("react.context"),z1=Symbol.for("react.forward_ref"),Ol=Symbol.for("react.suspense"),Ul=Symbol.for("react.suspense_list"),_1=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),Zl=Symbol.for("react.activity"),mp=Symbol.for("react.memo_cache_sentinel"),zc=Symbol.iterator;function ji(t){return t===null||typeof t!="object"?null:(t=zc&&t[zc]||t["@@iterator"],typeof t=="function"?t:null)}var yp=Symbol.for("react.client.reference");function ql(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===yp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case We:return"Fragment";case Dl:return"Profiler";case dh:return"StrictMode";case Ol:return"Suspense";case Ul:return"SuspenseList";case Zl:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case _i:return"Portal";case Pa:return t.displayName||"Context";case ch:return(t._context.displayName||"Context")+".Consumer";case z1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _1:return a=t.displayName||null,a!==null?a:ql(t.type)||"Memo";case vr:a=t._payload,t=t._init;try{return ql(t(a))}catch{}}return null}var Ti=Array.isArray,z=eh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=xp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$r={pending:!1,data:null,method:null,action:null},Gl=[],He=-1;function Na(t){return{current:t}}function Ht(t){0>He||(t.current=Gl[He],Gl[He]=null,He--)}function at(t,a){He++,Gl[He]=t.current,t.current=a}var Ta=Na(null),Ii=Na(null),jr=Na(null),Wo=Na(null);function Ho(t,a){switch(at(jr,a),at(Ii,t),at(Ta,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?U0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=U0(a),t=Hs(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ht(Ta),at(Ta,t)}function Ke(){Ht(Ta),Ht(Ii),Ht(jr)}function Yl(t){t.memoizedState!==null&&at(Wo,t);var a=Ta.current,r=Hs(a,t.type);a!==r&&(at(Ii,t),at(Ta,r))}function So(t){Ii.current===t&&(Ht(Ta),Ht(Ii)),Wo.current===t&&(Ht(Wo),hn._currentValue=$r)}var nl,_c;function Kr(t){if(nl===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);nl=a&&a[1]||"",_c=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+nl+t+_c}var ol=!1;function ll(t,a){if(!t||ol)return"";ol=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(x){var g=x}Reflect.construct(t,[],k)}else{try{k.call()}catch(x){g=x}t.call(k.prototype)}}else{try{throw Error()}catch(x){g=x}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(x){if(x&&g&&typeof x.stack=="string")return[x.stack,g.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],l=n[1];if(o&&l){var h=o.split(`
`),s=l.split(`
`);for(i=e=0;e<h.length&&!h[e].includes("DetermineComponentFrameRoot");)e++;for(;i<s.length&&!s[i].includes("DetermineComponentFrameRoot");)i++;if(e===h.length||i===s.length)for(e=h.length-1,i=s.length-1;1<=e&&0<=i&&h[e]!==s[i];)i--;for(;1<=e&&0<=i;e--,i--)if(h[e]!==s[i]){if(e!==1||i!==1)do if(e--,i--,0>i||h[e]!==s[i]){var v=`
`+h[e].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=e&&0<=i);break}}}finally{ol=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Kr(r):""}function wp(t,a){switch(t.tag){case 26:case 27:case 5:return Kr(t.type);case 16:return Kr("Lazy");case 13:return t.child!==a&&a!==null?Kr("Suspense Fallback"):Kr("Suspense");case 19:return Kr("SuspenseList");case 0:case 15:return ll(t.type,!1);case 11:return ll(t.type.render,!1);case 1:return ll(t.type,!0);case 31:return Kr("Activity");default:return""}}function Tc(t){try{var a="",r=null;do a+=wp(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Xl=Object.prototype.hasOwnProperty,T1=wt.unstable_scheduleCallback,dl=wt.unstable_cancelCallback,Cp=wt.unstable_shouldYield,bp=wt.unstable_requestPaint,na=wt.unstable_now,Bp=wt.unstable_getCurrentPriorityLevel,hh=wt.unstable_ImmediatePriority,uh=wt.unstable_UserBlockingPriority,Ao=wt.unstable_NormalPriority,jp=wt.unstable_LowPriority,sh=wt.unstable_IdlePriority,Wp=wt.log,Hp=wt.unstable_setDisableYieldValue,pn=null,oa=null;function yr(t){if(typeof Wp=="function"&&Hp(t),oa&&typeof oa.setStrictMode=="function")try{oa.setStrictMode(pn,t)}catch{}}var la=Math.clz32?Math.clz32:Vp,Sp=Math.log,Ap=Math.LN2;function Vp(t){return t>>>=0,t===0?32:31-(Sp(t)/Ap|0)|0}var Rn=256,Fn=262144,$n=4194304;function Jr(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function e2(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var l=e&134217727;return l!==0?(e=l&~n,e!==0?i=Jr(e):(o&=l,o!==0?i=Jr(o):r||(r=l&~t,r!==0&&(i=Jr(r))))):(l=e&~n,l!==0?i=Jr(l):o!==0?i=Jr(o):r||(r=e&~t,r!==0&&(i=Jr(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function fn(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function zp(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gh(){var t=$n;return $n<<=1,($n&62914560)===0&&($n=4194304),t}function cl(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function vn(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function _p(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var l=t.entanglements,h=t.expirationTimes,s=t.hiddenUpdates;for(r=o&~r;0<r;){var v=31-la(r),k=1<<v;l[v]=0,h[v]=-1;var g=s[v];if(g!==null)for(s[v]=null,v=0;v<g.length;v++){var x=g[v];x!==null&&(x.lane&=-536870913)}r&=~k}e!==0&&ph(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function ph(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-la(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function fh(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-la(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function vh(t,a){var r=a&-a;return r=(r&42)!==0?1:N1(r),(r&(t.suspendedLanes|a))!==0?0:r}function N1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function E1(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function kh(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:Us(t.type))}function Nc(t,a){var r=Q.p;try{return Q.p=t,a()}finally{Q.p=r}}var Ur=Math.random().toString(36).slice(2),zt="__reactFiber$"+Ur,Rt="__reactProps$"+Ur,ii="__reactContainer$"+Ur,Ql="__reactEvents$"+Ur,Tp="__reactListeners$"+Ur,Np="__reactHandles$"+Ur,Ec="__reactResources$"+Ur,kn="__reactMarker$"+Ur;function D1(t){delete t[zt],delete t[Rt],delete t[Ql],delete t[Tp],delete t[Np]}function Se(t){var a=t[zt];if(a)return a;for(var r=t.parentNode;r;){if(a=r[ii]||r[zt]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=X0(t);t!==null;){if(r=t[zt])return r;t=X0(t)}return a}t=r,r=t.parentNode}return null}function ni(t){if(t=t[zt]||t[ii]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Ni(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(m(33))}function Ue(t){var a=t[Ec];return a||(a=t[Ec]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Wt(t){t[kn]=!0}var xh=new Set,Lh={};function le(t,a){Je(t,a),Je(t+"Capture",a)}function Je(t,a){for(Lh[t]=a,t=0;t<a.length;t++)xh.add(a[t])}var Ep=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dc={},Oc={};function Dp(t){return Xl.call(Oc,t)?!0:Xl.call(Dc,t)?!1:Ep.test(t)?Oc[t]=!0:(Dc[t]=!0,!1)}function go(t,a,r){if(Dp(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function In(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function Qa(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function fa(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mh(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Op(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Kl(t){if(!t._valueTracker){var a=Mh(t)?"checked":"value";t._valueTracker=Op(t,a,""+t[a])}}function mh(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=Mh(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function Vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Up=/[\n"\\]/g;function xa(t){return t.replace(Up,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Jl(t,a,r,e,i,n,o,l){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+fa(a)):t.value!==""+fa(a)&&(t.value=""+fa(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?Rl(t,o,fa(a)):r!=null?Rl(t,o,fa(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+fa(l):t.removeAttribute("name")}function yh(t,a,r,e,i,n,o,l){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){Kl(t);return}r=r!=null?""+fa(r):"",a=a!=null?""+fa(a):r,l||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=l?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Kl(t)}function Rl(t,a,r){a==="number"&&Vo(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ze(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+fa(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function wh(t,a,r){if(a!=null&&(a=""+fa(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+fa(r):""}function Ch(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(m(92));if(Ti(e)){if(1<e.length)throw Error(m(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=fa(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),Kl(t)}function Re(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var Zp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uc(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||Zp.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function bh(t,a,r){if(a!=null&&typeof a!="object")throw Error(m(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&Uc(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&Uc(t,n,a[n])}function O1(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function po(t){return Gp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function tr(){}var Fl=null;function U1(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ae=null,qe=null;function Zc(t){var a=ni(t);if(a&&(t=a.stateNode)){var r=t[Rt]||null;t:switch(t=a.stateNode,a.type){case"input":if(Jl(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+xa(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[Rt]||null;if(!i)throw Error(m(90));Jl(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&mh(e)}break t;case"textarea":wh(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Ze(t,!!r.multiple,a,!1)}}}var hl=!1;function Bh(t,a,r){if(hl)return t(a,r);hl=!0;try{var e=t(a);return e}finally{if(hl=!1,(Ae!==null||qe!==null)&&(f2(),Ae&&(a=Ae,t=qe,qe=Ae=null,Zc(a),t)))for(a=0;a<t.length;a++)Zc(t[a])}}function Pi(t,a){var r=t.stateNode;if(r===null)return null;var e=r[Rt]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(m(231,a,typeof r));return r}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$l=!1;if(nr)try{we={},Object.defineProperty(we,"passive",{get:function(){$l=!0}}),window.addEventListener("test",we,we),window.removeEventListener("test",we,we)}catch{$l=!1}var we,wr=null,Z1=null,fo=null;function jh(){if(fo)return fo;var t,a=Z1,r=a.length,e,i="value"in wr?wr.value:wr.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return fo=i.slice(t,1<e?1-e:void 0)}function vo(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function Pn(){return!0}function qc(){return!1}function Ft(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(r=t[l],this[l]=r?r(n):n[l]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Pn:qc,this.isPropagationStopped=qc,this}return ot(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),a}var de={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},i2=Ft(de),xn=ot({},de,{view:0,detail:0}),Yp=Ft(xn),ul,sl,Wi,n2=ot({},xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:q1,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wi&&(Wi&&t.type==="mousemove"?(ul=t.screenX-Wi.screenX,sl=t.screenY-Wi.screenY):sl=ul=0,Wi=t),ul)},movementY:function(t){return"movementY"in t?t.movementY:sl}}),Gc=Ft(n2),Xp=ot({},n2,{dataTransfer:0}),Qp=Ft(Xp),Kp=ot({},xn,{relatedTarget:0}),gl=Ft(Kp),Jp=ot({},de,{animationName:0,elapsedTime:0,pseudoElement:0}),Rp=Ft(Jp),Fp=ot({},de,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$p=Ft(Fp),Ip=ot({},de,{data:0}),Yc=Ft(Ip),Pp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r5(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=a5[t])?!!a[t]:!1}function q1(){return r5}var e5=ot({},xn,{key:function(t){if(t.key){var a=Pp[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t5[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:q1,charCode:function(t){return t.type==="keypress"?vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),i5=Ft(e5),n5=ot({},n2,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=Ft(n5),o5=ot({},xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:q1}),l5=Ft(o5),d5=ot({},de,{propertyName:0,elapsedTime:0,pseudoElement:0}),c5=Ft(d5),h5=ot({},n2,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),u5=Ft(h5),s5=ot({},de,{newState:0,oldState:0}),g5=Ft(s5),p5=[9,13,27,32],G1=nr&&"CompositionEvent"in window,Oi=null;nr&&"documentMode"in document&&(Oi=document.documentMode);var f5=nr&&"TextEvent"in window&&!Oi,Wh=nr&&(!G1||Oi&&8<Oi&&11>=Oi),Qc=" ",Kc=!1;function Hh(t,a){switch(t){case"keyup":return p5.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ve=!1;function v5(t,a){switch(t){case"compositionend":return Sh(a);case"keypress":return a.which!==32?null:(Kc=!0,Qc);case"textInput":return t=a.data,t===Qc&&Kc?null:t;default:return null}}function k5(t,a){if(Ve)return t==="compositionend"||!G1&&Hh(t,a)?(t=jh(),fo=Z1=wr=null,Ve=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Wh&&a.locale!=="ko"?null:a.data;default:return null}}var x5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!x5[t.type]:a==="textarea"}function Ah(t,a,r,e){Ae?qe?qe.push(e):qe=[e]:Ae=e,a=Fo(a,"onChange"),0<a.length&&(r=new i2("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var Ui=null,tn=null;function L5(t){Bs(t,0)}function o2(t){var a=Ni(t);if(mh(a))return t}function Rc(t,a){if(t==="change")return a}var Vh=!1;nr&&(nr?(ao="oninput"in document,ao||(pl=document.createElement("div"),pl.setAttribute("oninput","return;"),ao=typeof pl.oninput=="function"),to=ao):to=!1,Vh=to&&(!document.documentMode||9<document.documentMode));var to,ao,pl;function Fc(){Ui&&(Ui.detachEvent("onpropertychange",zh),tn=Ui=null)}function zh(t){if(t.propertyName==="value"&&o2(tn)){var a=[];Ah(a,tn,t,U1(t)),Bh(L5,a)}}function M5(t,a,r){t==="focusin"?(Fc(),Ui=a,tn=r,Ui.attachEvent("onpropertychange",zh)):t==="focusout"&&Fc()}function m5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return o2(tn)}function y5(t,a){if(t==="click")return o2(a)}function w5(t,a){if(t==="input"||t==="change")return o2(a)}function C5(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var ca=typeof Object.is=="function"?Object.is:C5;function an(t,a){if(ca(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!Xl.call(a,i)||!ca(t[i],a[i]))return!1}return!0}function $c(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ic(t,a){var r=$c(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=$c(r)}}function _h(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?_h(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Th(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Vo(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=Vo(t.document)}return a}function Y1(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var b5=nr&&"documentMode"in document&&11>=document.documentMode,ze=null,Il=null,Zi=null,Pl=!1;function Pc(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Pl||ze==null||ze!==Vo(e)||(e=ze,"selectionStart"in e&&Y1(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Zi&&an(Zi,e)||(Zi=e,e=Fo(Il,"onSelect"),0<e.length&&(a=new i2("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=ze)))}function Qr(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var _e={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionrun:Qr("Transition","TransitionRun"),transitionstart:Qr("Transition","TransitionStart"),transitioncancel:Qr("Transition","TransitionCancel"),transitionend:Qr("Transition","TransitionEnd")},fl={},Nh={};nr&&(Nh=document.createElement("div").style,"AnimationEvent"in window||(delete _e.animationend.animation,delete _e.animationiteration.animation,delete _e.animationstart.animation),"TransitionEvent"in window||delete _e.transitionend.transition);function ce(t){if(fl[t])return fl[t];if(!_e[t])return t;var a=_e[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in Nh)return fl[t]=a[r];return t}var Eh=ce("animationend"),Dh=ce("animationiteration"),Oh=ce("animationstart"),B5=ce("transitionrun"),j5=ce("transitionstart"),W5=ce("transitioncancel"),Uh=ce("transitionend"),Zh=new Map,t1="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");t1.push("scrollEnd");function Ha(t,a){Zh.set(t,a),le(a,[t])}var zo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pa=[],Te=0,X1=0;function l2(){for(var t=Te,a=X1=Te=0;a<t;){var r=pa[a];pa[a++]=null;var e=pa[a];pa[a++]=null;var i=pa[a];pa[a++]=null;var n=pa[a];if(pa[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&qh(r,i,n)}}function d2(t,a,r,e){pa[Te++]=t,pa[Te++]=a,pa[Te++]=r,pa[Te++]=e,X1|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function Q1(t,a,r,e){return d2(t,a,r,e),_o(t)}function he(t,a){return d2(t,null,null,a),_o(t)}function qh(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-la(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function _o(t){if(50<Fi)throw Fi=0,m1=null,Error(m(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Ne={};function H5(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ea(t,a,r,e){return new H5(t,a,r,e)}function K1(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rr(t,a){var r=t.alternate;return r===null?(r=ea(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Gh(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function ko(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")K1(t)&&(o=1);else if(typeof t=="string")o=zf(t,r,Ta.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Zl:return t=ea(31,r,a,i),t.elementType=Zl,t.lanes=n,t;case We:return Ir(r.children,i,n,a);case dh:o=8,i|=24;break;case Dl:return t=ea(12,r,a,i|2),t.elementType=Dl,t.lanes=n,t;case Ol:return t=ea(13,r,a,i),t.elementType=Ol,t.lanes=n,t;case Ul:return t=ea(19,r,a,i),t.elementType=Ul,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pa:o=10;break t;case ch:o=9;break t;case z1:o=11;break t;case _1:o=14;break t;case vr:o=16,e=null;break t}o=29,r=Error(m(130,t===null?"null":typeof t,"")),e=null}return a=ea(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function Ir(t,a,r,e){return t=ea(7,t,e,a),t.lanes=r,t}function vl(t,a,r){return t=ea(6,t,null,a),t.lanes=r,t}function Yh(t){var a=ea(18,null,null,0);return a.stateNode=t,a}function kl(t,a,r){return a=ea(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var t0=new WeakMap;function La(t,a){if(typeof t=="object"&&t!==null){var r=t0.get(t);return r!==void 0?r:(a={value:t,source:a,stack:Tc(a)},t0.set(t,a),a)}return{value:t,source:a,stack:Tc(a)}}var Ee=[],De=0,To=null,rn=0,va=[],ka=0,Nr=null,Va=1,za="";function $a(t,a){Ee[De++]=rn,Ee[De++]=To,To=t,rn=a}function Xh(t,a,r){va[ka++]=Va,va[ka++]=za,va[ka++]=Nr,Nr=t;var e=Va;t=za;var i=32-la(e)-1;e&=~(1<<i),r+=1;var n=32-la(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,Va=1<<32-la(a)+i|r<<i|e,za=n+t}else Va=1<<n|r<<i|e,za=t}function J1(t){t.return!==null&&($a(t,1),Xh(t,1,0))}function R1(t){for(;t===To;)To=Ee[--De],Ee[De]=null,rn=Ee[--De],Ee[De]=null;for(;t===Nr;)Nr=va[--ka],va[ka]=null,za=va[--ka],va[ka]=null,Va=va[--ka],va[ka]=null}function Qh(t,a){va[ka++]=Va,va[ka++]=za,va[ka++]=Nr,Va=a.id,za=a.overflow,Nr=t}var _t=null,nt=null,Y=!1,Wr=null,Ma=!1,a1=Error(m(519));function Er(t){var a=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw en(La(a,t)),a1}function a0(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[zt]=t,a[Rt]=e,r){case"dialog":Z("cancel",a),Z("close",a);break;case"iframe":case"object":case"embed":Z("load",a);break;case"video":case"audio":for(r=0;r<dn.length;r++)Z(dn[r],a);break;case"source":Z("error",a);break;case"img":case"image":case"link":Z("error",a),Z("load",a);break;case"details":Z("toggle",a);break;case"input":Z("invalid",a),yh(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":Z("invalid",a);break;case"textarea":Z("invalid",a),Ch(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||Ws(a.textContent,r)?(e.popover!=null&&(Z("beforetoggle",a),Z("toggle",a)),e.onScroll!=null&&Z("scroll",a),e.onScrollEnd!=null&&Z("scrollend",a),e.onClick!=null&&(a.onclick=tr),a=!0):a=!1,a||Er(t,!0)}function r0(t){for(_t=t.return;_t;)switch(_t.tag){case 5:case 31:case 13:Ma=!1;return;case 27:case 3:Ma=!0;return;default:_t=_t.return}}function Ce(t){if(t!==_t)return!1;if(!Y)return r0(t),Y=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||B1(t.type,t.memoizedProps)),r=!r),r&&nt&&Er(t),r0(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));nt=Y0(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));nt=Y0(t)}else a===27?(a=nt,Zr(t.type)?(t=S1,S1=null,nt=t):nt=a):nt=_t?ya(t.stateNode.nextSibling):null;return!0}function re(){nt=_t=null,Y=!1}function xl(){var t=Wr;return t!==null&&(Kt===null?Kt=t:Kt.push.apply(Kt,t),Wr=null),t}function en(t){Wr===null?Wr=[t]:Wr.push(t)}var r1=Na(null),ue=null,ar=null;function xr(t,a,r){at(r1,a._currentValue),a._currentValue=r}function er(t){t._currentValue=r1.current,Ht(r1)}function e1(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function i1(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var l=n;n=i;for(var h=0;h<a.length;h++)if(l.context===a[h]){n.lanes|=r,l=n.alternate,l!==null&&(l.lanes|=r),e1(n.return,r,t),e||(o=null);break t}n=l.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),e1(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function oi(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(m(387));if(o=o.memoizedProps,o!==null){var l=i.type;ca(i.pendingProps.value,o.value)||(t!==null?t.push(l):t=[l])}}else if(i===Wo.current){if(o=i.alternate,o===null)throw Error(m(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(hn):t=[hn])}i=i.return}t!==null&&i1(a,t,r,e),a.flags|=262144}function No(t){for(t=t.firstContext;t!==null;){if(!ca(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ee(t){ue=t,ar=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tt(t){return Kh(ue,t)}function ro(t,a){return ue===null&&ee(t),Kh(t,a)}function Kh(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},ar===null){if(t===null)throw Error(m(308));ar=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else ar=ar.next=a;return r}var S5=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},A5=wt.unstable_scheduleCallback,V5=wt.unstable_NormalPriority,Mt={$$typeof:Pa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function F1(){return{controller:new S5,data:new Map,refCount:0}}function Ln(t){t.refCount--,t.refCount===0&&A5(V5,function(){t.controller.abort()})}var qi=null,n1=0,Fe=0,Ge=null;function z5(t,a){if(qi===null){var r=qi=[];n1=0,Fe=md(),Ge={status:"pending",value:void 0,then:function(e){r.push(e)}}}return n1++,a.then(e0,e0),a}function e0(){if(--n1===0&&qi!==null){Ge!==null&&(Ge.status="fulfilled");var t=qi;qi=null,Fe=0,Ge=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function _5(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var i0=z.S;z.S=function(t,a){ls=na(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&z5(t,a),i0!==null&&i0(t,a)};var Pr=Na(null);function $1(){var t=Pr.current;return t!==null?t:tt.pooledCache}function xo(t,a){a===null?at(Pr,Pr.current):at(Pr,a.pool)}function Jh(){var t=$1();return t===null?null:{parent:Mt._currentValue,pool:t}}var li=Error(m(460)),I1=Error(m(474)),c2=Error(m(542)),Eo={then:function(){}};function n0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rh(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(tr,tr),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,l0(t),t;default:if(typeof a.status=="string")a.then(tr,tr);else{if(t=tt,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,l0(t),t}throw te=a,li}}function Rr(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(te=r,li):r}}var te=null;function o0(){if(te===null)throw Error(m(459));var t=te;return te=null,t}function l0(t){if(t===li||t===c2)throw Error(m(483))}var Ye=null,nn=0;function eo(t){var a=nn;return nn+=1,Ye===null&&(Ye=[]),Rh(Ye,t,a)}function Hi(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function io(t,a){throw a.$$typeof===Mp?Error(m(525)):(t=Object.prototype.toString.call(a),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function Fh(t){function a(p,u){if(t){var f=p.deletions;f===null?(p.deletions=[u],p.flags|=16):f.push(u)}}function r(p,u){if(!t)return null;for(;u!==null;)a(p,u),u=u.sibling;return null}function e(p){for(var u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function i(p,u){return p=rr(p,u),p.index=0,p.sibling=null,p}function n(p,u,f){return p.index=f,t?(f=p.alternate,f!==null?(f=f.index,f<u?(p.flags|=67108866,u):f):(p.flags|=67108866,u)):(p.flags|=1048576,u)}function o(p){return t&&p.alternate===null&&(p.flags|=67108866),p}function l(p,u,f,L){return u===null||u.tag!==6?(u=vl(f,p.mode,L),u.return=p,u):(u=i(u,f),u.return=p,u)}function h(p,u,f,L){var W=f.type;return W===We?v(p,u,f.props.children,L,f.key):u!==null&&(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===vr&&Rr(W)===u.type)?(u=i(u,f.props),Hi(u,f),u.return=p,u):(u=ko(f.type,f.key,f.props,null,p.mode,L),Hi(u,f),u.return=p,u)}function s(p,u,f,L){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=kl(f,p.mode,L),u.return=p,u):(u=i(u,f.children||[]),u.return=p,u)}function v(p,u,f,L,W){return u===null||u.tag!==7?(u=Ir(f,p.mode,L,W),u.return=p,u):(u=i(u,f),u.return=p,u)}function k(p,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=vl(""+u,p.mode,f),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Jn:return f=ko(u.type,u.key,u.props,null,p.mode,f),Hi(f,u),f.return=p,f;case _i:return u=kl(u,p.mode,f),u.return=p,u;case vr:return u=Rr(u),k(p,u,f)}if(Ti(u)||ji(u))return u=Ir(u,p.mode,f,null),u.return=p,u;if(typeof u.then=="function")return k(p,eo(u),f);if(u.$$typeof===Pa)return k(p,ro(p,u),f);io(p,u)}return null}function g(p,u,f,L){var W=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return W!==null?null:l(p,u,""+f,L);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Jn:return f.key===W?h(p,u,f,L):null;case _i:return f.key===W?s(p,u,f,L):null;case vr:return f=Rr(f),g(p,u,f,L)}if(Ti(f)||ji(f))return W!==null?null:v(p,u,f,L,null);if(typeof f.then=="function")return g(p,u,eo(f),L);if(f.$$typeof===Pa)return g(p,u,ro(p,f),L);io(p,f)}return null}function x(p,u,f,L,W){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return p=p.get(f)||null,l(u,p,""+L,W);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Jn:return p=p.get(L.key===null?f:L.key)||null,h(u,p,L,W);case _i:return p=p.get(L.key===null?f:L.key)||null,s(u,p,L,W);case vr:return L=Rr(L),x(p,u,f,L,W)}if(Ti(L)||ji(L))return p=p.get(f)||null,v(u,p,L,W,null);if(typeof L.then=="function")return x(p,u,f,eo(L),W);if(L.$$typeof===Pa)return x(p,u,f,ro(u,L),W);io(u,L)}return null}function y(p,u,f,L){for(var W=null,_=null,B=u,V=u=0,D=null;B!==null&&V<f.length;V++){B.index>V?(D=B,B=null):D=B.sibling;var S=g(p,B,f[V],L);if(S===null){B===null&&(B=D);break}t&&B&&S.alternate===null&&a(p,B),u=n(S,u,V),_===null?W=S:_.sibling=S,_=S,B=D}if(V===f.length)return r(p,B),Y&&$a(p,V),W;if(B===null){for(;V<f.length;V++)B=k(p,f[V],L),B!==null&&(u=n(B,u,V),_===null?W=B:_.sibling=B,_=B);return Y&&$a(p,V),W}for(B=e(B);V<f.length;V++)D=x(B,p,V,f[V],L),D!==null&&(t&&D.alternate!==null&&B.delete(D.key===null?V:D.key),u=n(D,u,V),_===null?W=D:_.sibling=D,_=D);return t&&B.forEach(function($t){return a(p,$t)}),Y&&$a(p,V),W}function b(p,u,f,L){if(f==null)throw Error(m(151));for(var W=null,_=null,B=u,V=u=0,D=null,S=f.next();B!==null&&!S.done;V++,S=f.next()){B.index>V?(D=B,B=null):D=B.sibling;var $t=g(p,B,S.value,L);if($t===null){B===null&&(B=D);break}t&&B&&$t.alternate===null&&a(p,B),u=n($t,u,V),_===null?W=$t:_.sibling=$t,_=$t,B=D}if(S.done)return r(p,B),Y&&$a(p,V),W;if(B===null){for(;!S.done;V++,S=f.next())S=k(p,S.value,L),S!==null&&(u=n(S,u,V),_===null?W=S:_.sibling=S,_=S);return Y&&$a(p,V),W}for(B=e(B);!S.done;V++,S=f.next())S=x(B,p,V,S.value,L),S!==null&&(t&&S.alternate!==null&&B.delete(S.key===null?V:S.key),u=n(S,u,V),_===null?W=S:_.sibling=S,_=S);return t&&B.forEach(function(Oa){return a(p,Oa)}),Y&&$a(p,V),W}function E(p,u,f,L){if(typeof f=="object"&&f!==null&&f.type===We&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Jn:t:{for(var W=f.key;u!==null;){if(u.key===W){if(W=f.type,W===We){if(u.tag===7){r(p,u.sibling),L=i(u,f.props.children),L.return=p,p=L;break t}}else if(u.elementType===W||typeof W=="object"&&W!==null&&W.$$typeof===vr&&Rr(W)===u.type){r(p,u.sibling),L=i(u,f.props),Hi(L,f),L.return=p,p=L;break t}r(p,u);break}else a(p,u);u=u.sibling}f.type===We?(L=Ir(f.props.children,p.mode,L,f.key),L.return=p,p=L):(L=ko(f.type,f.key,f.props,null,p.mode,L),Hi(L,f),L.return=p,p=L)}return o(p);case _i:t:{for(W=f.key;u!==null;){if(u.key===W)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){r(p,u.sibling),L=i(u,f.children||[]),L.return=p,p=L;break t}else{r(p,u);break}else a(p,u);u=u.sibling}L=kl(f,p.mode,L),L.return=p,p=L}return o(p);case vr:return f=Rr(f),E(p,u,f,L)}if(Ti(f))return y(p,u,f,L);if(ji(f)){if(W=ji(f),typeof W!="function")throw Error(m(150));return f=W.call(f),b(p,u,f,L)}if(typeof f.then=="function")return E(p,u,eo(f),L);if(f.$$typeof===Pa)return E(p,u,ro(p,f),L);io(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(r(p,u.sibling),L=i(u,f),L.return=p,p=L):(r(p,u),L=vl(f,p.mode,L),L.return=p,p=L),o(p)):r(p,u)}return function(p,u,f,L){try{nn=0;var W=E(p,u,f,L);return Ye=null,W}catch(B){if(B===li||B===c2)throw B;var _=ea(29,B,null,p.mode);return _.lanes=L,_.return=p,_}}}var ie=Fh(!0),$h=Fh(!1),kr=!1;function P1(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function o1(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Hr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Sr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(X&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=_o(t),qh(t,null,r),a}return d2(t,e,a,r),_o(t)}function Gi(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,fh(t,r)}}function Ll(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var l1=!1;function Yi(){if(l1){var t=Ge;if(t!==null)throw t}}function Xi(t,a,r,e){l1=!1;var i=t.updateQueue;kr=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var h=l,s=h.next;h.next=null,o===null?n=s:o.next=s,o=h;var v=t.alternate;v!==null&&(v=v.updateQueue,l=v.lastBaseUpdate,l!==o&&(l===null?v.firstBaseUpdate=s:l.next=s,v.lastBaseUpdate=h))}if(n!==null){var k=i.baseState;o=0,v=s=h=null,l=n;do{var g=l.lane&-536870913,x=g!==l.lane;if(x?(G&g)===g:(e&g)===g){g!==0&&g===Fe&&(l1=!0),v!==null&&(v=v.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var y=t,b=l;g=a;var E=r;switch(b.tag){case 1:if(y=b.payload,typeof y=="function"){k=y.call(E,k,g);break t}k=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,g=typeof y=="function"?y.call(E,k,g):y,g==null)break t;k=ot({},k,g);break t;case 2:kr=!0}}g=l.callback,g!==null&&(t.flags|=64,x&&(t.flags|=8192),x=i.callbacks,x===null?i.callbacks=[g]:x.push(g))}else x={lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},v===null?(s=v=x,h=k):v=v.next=x,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;x=l,l=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);v===null&&(h=k),i.baseState=h,i.firstBaseUpdate=s,i.lastBaseUpdate=v,n===null&&(i.shared.lanes=0),Or|=o,t.lanes=o,t.memoizedState=k}}function Ih(t,a){if(typeof t!="function")throw Error(m(191,t));t.call(a)}function Ph(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Ih(r[t],a)}var $e=Na(null),Do=Na(0);function d0(t,a){t=cr,at(Do,t),at($e,a),cr=t|a.baseLanes}function d1(){at(Do,cr),at($e,$e.current)}function td(){cr=Do.current,Ht($e),Ht(Do)}var ha=Na(null),ma=null;function Lr(t){var a=t.alternate;at(ut,ut.current&1),at(ha,t),ma===null&&(a===null||$e.current!==null||a.memoizedState!==null)&&(ma=t)}function c1(t){at(ut,ut.current),at(ha,t),ma===null&&(ma=t)}function tu(t){t.tag===22?(at(ut,ut.current),at(ha,t),ma===null&&(ma=t)):Mr(t)}function Mr(){at(ut,ut.current),at(ha,ha.current)}function ra(t){Ht(ha),ma===t&&(ma=null),Ht(ut)}var ut=Na(0);function Oo(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||W1(r)||H1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var or=0,N=null,I=null,xt=null,Uo=!1,Xe=!1,ne=!1,Zo=0,on=0,Qe=null,T5=0;function ct(){throw Error(m(321))}function ad(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!ca(t[r],a[r]))return!1;return!0}function rd(t,a,r,e,i,n){return or=n,N=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=t===null||t.memoizedState===null?Au:gd,ne=!1,n=r(e,i),ne=!1,Xe&&(n=ru(a,r,e,i)),au(t),n}function au(t){z.H=ln;var a=I!==null&&I.next!==null;if(or=0,xt=I=N=null,Uo=!1,on=0,Qe=null,a)throw Error(m(300));t===null||mt||(t=t.dependencies,t!==null&&No(t)&&(mt=!0))}function ru(t,a,r,e){N=t;var i=0;do{if(Xe&&(Qe=null),on=0,Xe=!1,25<=i)throw Error(m(301));if(i+=1,xt=I=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}z.H=Vu,n=a(r,e)}while(Xe);return n}function N5(){var t=z.H,a=t.useState()[0];return a=typeof a.then=="function"?Mn(a):a,t=t.useState()[0],(I!==null?I.memoizedState:null)!==t&&(N.flags|=1024),a}function ed(){var t=Zo!==0;return Zo=0,t}function id(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function nd(t){if(Uo){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}Uo=!1}or=0,xt=I=N=null,Xe=!1,on=Zo=0,Qe=null}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?N.memoizedState=xt=t:xt=xt.next=t,xt}function st(){if(I===null){var t=N.alternate;t=t!==null?t.memoizedState:null}else t=I.next;var a=xt===null?N.memoizedState:xt.next;if(a!==null)xt=a,I=t;else{if(t===null)throw N.alternate===null?Error(m(467)):Error(m(310));I=t,t={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},xt===null?N.memoizedState=xt=t:xt=xt.next=t}return xt}function h2(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mn(t){var a=on;return on+=1,Qe===null&&(Qe=[]),t=Rh(Qe,t,a),a=N,(xt===null?a.memoizedState:xt.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?Au:gd),t}function u2(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Mn(t);if(t.$$typeof===Pa)return Tt(t)}throw Error(m(438,String(t)))}function od(t){var a=null,r=N.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=N.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=h2(),N.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=mp;return a.index++,r}function lr(t,a){return typeof a=="function"?a(t):a}function Lo(t){var a=st();return ld(a,I,t)}function ld(t,a,r){var e=t.queue;if(e===null)throw Error(m(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var l=o=null,h=null,s=a,v=!1;do{var k=s.lane&-536870913;if(k!==s.lane?(G&k)===k:(or&k)===k){var g=s.revertLane;if(g===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),k===Fe&&(v=!0);else if((or&g)===g){s=s.next,g===Fe&&(v=!0);continue}else k={lane:0,revertLane:s.revertLane,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},h===null?(l=h=k,o=n):h=h.next=k,N.lanes|=g,Or|=g;k=s.action,ne&&r(n,k),n=s.hasEagerState?s.eagerState:r(n,k)}else g={lane:k,revertLane:s.revertLane,gesture:s.gesture,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},h===null?(l=h=g,o=n):h=h.next=g,N.lanes|=k,Or|=k;s=s.next}while(s!==null&&s!==a);if(h===null?o=n:h.next=l,!ca(n,t.memoizedState)&&(mt=!0,v&&(r=Ge,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=h,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function Ml(t){var a=st(),r=a.queue;if(r===null)throw Error(m(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);ca(n,a.memoizedState)||(mt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function eu(t,a,r){var e=N,i=st(),n=Y;if(n){if(r===void 0)throw Error(m(407));r=r()}else r=a();var o=!ca((I||i).memoizedState,r);if(o&&(i.memoizedState=r,mt=!0),i=i.queue,dd(ou.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||xt!==null&&xt.memoizedState.tag&1){if(e.flags|=2048,Ie(9,{destroy:void 0},nu.bind(null,e,i,r,a),null),tt===null)throw Error(m(349));n||(or&127)!==0||iu(e,a,r)}return r}function iu(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=N.updateQueue,a===null?(a=h2(),N.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function nu(t,a,r,e){a.value=r,a.getSnapshot=e,lu(a)&&du(t)}function ou(t,a,r){return r(function(){lu(a)&&du(t)})}function lu(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!ca(t,r)}catch{return!0}}function du(t){var a=he(t,2);a!==null&&Jt(a,t,2)}function h1(t){var a=Gt();if(typeof t=="function"){var r=t;if(t=r(),ne){yr(!0);try{r()}finally{yr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:t},a}function cu(t,a,r,e){return t.baseState=r,ld(t,I,typeof e=="function"?e:lr)}function E5(t,a,r,e,i){if(g2(t))throw Error(m(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};z.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,hu(a,n)):(n.next=r.next,a.pending=r.next=n)}}function hu(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=z.T,o={};z.T=o;try{var l=r(i,e),h=z.S;h!==null&&h(o,l),c0(t,a,l)}catch(s){u1(t,a,s)}finally{n!==null&&o.types!==null&&(n.types=o.types),z.T=n}}else try{n=r(i,e),c0(t,a,n)}catch(s){u1(t,a,s)}}function c0(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){h0(t,a,e)},function(e){return u1(t,a,e)}):h0(t,a,r)}function h0(t,a,r){a.status="fulfilled",a.value=r,uu(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,hu(t,r)))}function u1(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,uu(a),a=a.next;while(a!==e)}t.action=null}function uu(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function su(t,a){return a}function u0(t,a){if(Y){var r=tt.formState;if(r!==null){t:{var e=N;if(Y){if(nt){a:{for(var i=nt,n=Ma;i.nodeType!==8;){if(!n){i=null;break a}if(i=ya(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){nt=ya(i.nextSibling),e=i.data==="F!";break t}}Er(e)}e=!1}e&&(a=r[0])}}return r=Gt(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:su,lastRenderedState:a},r.queue=e,r=Wu.bind(null,N,e),e.dispatch=r,e=h1(!1),n=sd.bind(null,N,!1,e.queue),e=Gt(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=E5.bind(null,N,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function s0(t){var a=st();return gu(a,I,t)}function gu(t,a,r){if(a=ld(t,a,su)[0],t=Lo(lr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=Mn(a)}catch(o){throw o===li?c2:o}else e=a;a=st();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(N.flags|=2048,Ie(9,{destroy:void 0},D5.bind(null,i,r),null)),[e,n,t]}function D5(t,a){t.action=a}function g0(t){var a=st(),r=I;if(r!==null)return gu(a,r,t);st(),a=a.memoizedState,r=st();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function Ie(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=N.updateQueue,a===null&&(a=h2(),N.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function pu(){return st().memoizedState}function Mo(t,a,r,e){var i=Gt();N.flags|=t,i.memoizedState=Ie(1|a,{destroy:void 0},r,e===void 0?null:e)}function s2(t,a,r,e){var i=st();e=e===void 0?null:e;var n=i.memoizedState.inst;I!==null&&e!==null&&ad(e,I.memoizedState.deps)?i.memoizedState=Ie(a,n,r,e):(N.flags|=t,i.memoizedState=Ie(1|a,n,r,e))}function p0(t,a){Mo(8390656,8,t,a)}function dd(t,a){s2(2048,8,t,a)}function O5(t){N.flags|=4;var a=N.updateQueue;if(a===null)a=h2(),N.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function fu(t){var a=st().memoizedState;return O5({ref:a,nextImpl:t}),function(){if((X&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}function vu(t,a){return s2(4,2,t,a)}function ku(t,a){return s2(4,4,t,a)}function xu(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Lu(t,a,r){r=r!=null?r.concat([t]):null,s2(4,4,xu.bind(null,a,t),r)}function cd(){}function Mu(t,a){var r=st();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&ad(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function mu(t,a){var r=st();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&ad(a,e[1]))return e[0];if(e=t(),ne){yr(!0);try{t()}finally{yr(!1)}}return r.memoizedState=[e,a],e}function hd(t,a,r){return r===void 0||(or&1073741824)!==0&&(G&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=cs(),N.lanes|=t,Or|=t,r)}function yu(t,a,r,e){return ca(r,a)?r:$e.current!==null?(t=hd(t,r,e),ca(t,a)||(mt=!0),t):(or&42)===0||(or&1073741824)!==0&&(G&261930)===0?(mt=!0,t.memoizedState=r):(t=cs(),N.lanes|=t,Or|=t,a)}function wu(t,a,r,e,i){var n=Q.p;Q.p=n!==0&&8>n?n:8;var o=z.T,l={};z.T=l,sd(t,!1,a,r);try{var h=i(),s=z.S;if(s!==null&&s(l,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var v=_5(h,e);Qi(t,a,v,da(t))}else Qi(t,a,e,da(t))}catch(k){Qi(t,a,{then:function(){},status:"rejected",reason:k},da())}finally{Q.p=n,o!==null&&l.types!==null&&(o.types=l.types),z.T=o}}function U5(){}function s1(t,a,r,e){if(t.tag!==5)throw Error(m(476));var i=Cu(t).queue;wu(t,i,a,$r,r===null?U5:function(){return bu(t),r(e)})}function Cu(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:$r,baseState:$r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:$r},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:lr,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function bu(t){var a=Cu(t);a.next===null&&(a=t.alternate.memoizedState),Qi(t,a.next.queue,{},da())}function ud(){return Tt(hn)}function Bu(){return st().memoizedState}function ju(){return st().memoizedState}function Z5(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=da();t=Hr(r);var e=Sr(a,t,r);e!==null&&(Jt(e,a,r),Gi(e,a,r)),a={cache:F1()},t.payload=a;return}a=a.return}}function q5(t,a,r){var e=da();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},g2(t)?Hu(a,r):(r=Q1(t,a,r,e),r!==null&&(Jt(r,t,e),Su(r,a,e)))}function Wu(t,a,r){var e=da();Qi(t,a,r,e)}function Qi(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(g2(t))Hu(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,l=n(o,r);if(i.hasEagerState=!0,i.eagerState=l,ca(l,o))return d2(t,a,i,0),tt===null&&l2(),!1}catch{}if(r=Q1(t,a,i,e),r!==null)return Jt(r,t,e),Su(r,a,e),!0}return!1}function sd(t,a,r,e){if(e={lane:2,revertLane:md(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},g2(t)){if(a)throw Error(m(479))}else a=Q1(t,r,e,2),a!==null&&Jt(a,t,2)}function g2(t){var a=t.alternate;return t===N||a!==null&&a===N}function Hu(t,a){Xe=Uo=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function Su(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,fh(t,r)}}var ln={readContext:Tt,use:u2,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct};ln.useEffectEvent=ct;var Au={readContext:Tt,use:u2,useCallback:function(t,a){return Gt().memoizedState=[t,a===void 0?null:a],t},useContext:Tt,useEffect:p0,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,Mo(4194308,4,xu.bind(null,a,t),r)},useLayoutEffect:function(t,a){return Mo(4194308,4,t,a)},useInsertionEffect:function(t,a){Mo(4,2,t,a)},useMemo:function(t,a){var r=Gt();a=a===void 0?null:a;var e=t();if(ne){yr(!0);try{t()}finally{yr(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=Gt();if(r!==void 0){var i=r(a);if(ne){yr(!0);try{r(a)}finally{yr(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=q5.bind(null,N,t),[e.memoizedState,t]},useRef:function(t){var a=Gt();return t={current:t},a.memoizedState=t},useState:function(t){t=h1(t);var a=t.queue,r=Wu.bind(null,N,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:cd,useDeferredValue:function(t,a){var r=Gt();return hd(r,t,a)},useTransition:function(){var t=h1(!1);return t=wu.bind(null,N,t.queue,!0,!1),Gt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=N,i=Gt();if(Y){if(r===void 0)throw Error(m(407));r=r()}else{if(r=a(),tt===null)throw Error(m(349));(G&127)!==0||iu(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,p0(ou.bind(null,e,n,t),[t]),e.flags|=2048,Ie(9,{destroy:void 0},nu.bind(null,e,n,r,a),null),r},useId:function(){var t=Gt(),a=tt.identifierPrefix;if(Y){var r=za,e=Va;r=(e&~(1<<32-la(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=Zo++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=T5++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:ud,useFormState:u0,useActionState:u0,useOptimistic:function(t){var a=Gt();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=sd.bind(null,N,!0,r),r.dispatch=a,[t,a]},useMemoCache:od,useCacheRefresh:function(){return Gt().memoizedState=Z5.bind(null,N)},useEffectEvent:function(t){var a=Gt(),r={impl:t};return a.memoizedState=r,function(){if((X&2)!==0)throw Error(m(440));return r.impl.apply(void 0,arguments)}}},gd={readContext:Tt,use:u2,useCallback:Mu,useContext:Tt,useEffect:dd,useImperativeHandle:Lu,useInsertionEffect:vu,useLayoutEffect:ku,useMemo:mu,useReducer:Lo,useRef:pu,useState:function(){return Lo(lr)},useDebugValue:cd,useDeferredValue:function(t,a){var r=st();return yu(r,I.memoizedState,t,a)},useTransition:function(){var t=Lo(lr)[0],a=st().memoizedState;return[typeof t=="boolean"?t:Mn(t),a]},useSyncExternalStore:eu,useId:Bu,useHostTransitionStatus:ud,useFormState:s0,useActionState:s0,useOptimistic:function(t,a){var r=st();return cu(r,I,t,a)},useMemoCache:od,useCacheRefresh:ju};gd.useEffectEvent=fu;var Vu={readContext:Tt,use:u2,useCallback:Mu,useContext:Tt,useEffect:dd,useImperativeHandle:Lu,useInsertionEffect:vu,useLayoutEffect:ku,useMemo:mu,useReducer:Ml,useRef:pu,useState:function(){return Ml(lr)},useDebugValue:cd,useDeferredValue:function(t,a){var r=st();return I===null?hd(r,t,a):yu(r,I.memoizedState,t,a)},useTransition:function(){var t=Ml(lr)[0],a=st().memoizedState;return[typeof t=="boolean"?t:Mn(t),a]},useSyncExternalStore:eu,useId:Bu,useHostTransitionStatus:ud,useFormState:g0,useActionState:g0,useOptimistic:function(t,a){var r=st();return I!==null?cu(r,I,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:od,useCacheRefresh:ju};Vu.useEffectEvent=fu;function ml(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:ot({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var g1={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=da(),i=Hr(e);i.payload=a,r!=null&&(i.callback=r),a=Sr(t,i,e),a!==null&&(Jt(a,t,e),Gi(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=da(),i=Hr(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=Sr(t,i,e),a!==null&&(Jt(a,t,e),Gi(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=da(),e=Hr(r);e.tag=2,a!=null&&(e.callback=a),a=Sr(t,e,r),a!==null&&(Jt(a,t,r),Gi(a,t,r))}};function f0(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!an(r,e)||!an(i,n):!0}function v0(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&g1.enqueueReplaceState(a,a.state,null)}function oe(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=ot({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function zu(t){zo(t)}function _u(t){console.error(t)}function Tu(t){zo(t)}function qo(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function k0(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function p1(t,a,r){return r=Hr(r),r.tag=3,r.payload={element:null},r.callback=function(){qo(t,a)},r}function Nu(t){return t=Hr(t),t.tag=3,t}function Eu(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){k0(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){k0(a,r,e),typeof i!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})})}function G5(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&oi(a,r,i,!0),r=ha.current,r!==null){switch(r.tag){case 31:case 13:return ma===null?Ko():r.alternate===null&&ht===0&&(ht=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===Eo?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),Vl(t,e,i)),!1;case 22:return r.flags|=65536,e===Eo?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),Vl(t,e,i)),!1}throw Error(m(435,r.tag))}return Vl(t,e,i),Ko(),!1}if(Y)return a=ha.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==a1&&(t=Error(m(422),{cause:e}),en(La(t,r)))):(e!==a1&&(a=Error(m(423),{cause:e}),en(La(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=La(e,r),i=p1(t.stateNode,e,i),Ll(t,i),ht!==4&&(ht=2)),!1;var n=Error(m(520),{cause:e});if(n=La(n,r),Ri===null?Ri=[n]:Ri.push(n),ht!==4&&(ht=2),a===null)return!0;e=La(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=p1(r.stateNode,e,t),Ll(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Ar===null||!Ar.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=Nu(i),Eu(i,t,r,e),Ll(r,i),!1}r=r.return}while(r!==null);return!1}var pd=Error(m(461)),mt=!1;function Vt(t,a,r,e){a.child=t===null?$h(a,null,r,e):ie(a,t.child,r,e)}function x0(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var l in e)l!=="ref"&&(o[l]=e[l])}else o=e;return ee(a),e=rd(t,a,r,o,n,i),l=ed(),t!==null&&!mt?(id(t,a,i),dr(t,a,i)):(Y&&l&&J1(a),a.flags|=1,Vt(t,a,e,i),a.child)}function L0(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!K1(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,Du(t,a,n,e,i)):(t=ko(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!fd(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:an,r(o,e)&&t.ref===a.ref)return dr(t,a,i)}return a.flags|=1,t=rr(n,e),t.ref=a.ref,t.return=a,a.child=t}function Du(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(an(n,e)&&t.ref===a.ref)if(mt=!1,a.pendingProps=e=n,fd(t,i))(t.flags&131072)!==0&&(mt=!0);else return a.lanes=t.lanes,dr(t,a,i)}return f1(t,a,r,e,i)}function Ou(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return M0(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&xo(a,n!==null?n.cachePool:null),n!==null?d0(a,n):d1(),tu(a);else return e=a.lanes=536870912,M0(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(xo(a,n.cachePool),d0(a,n),Mr(a),a.memoizedState=null):(t!==null&&xo(a,null),d1(),Mr(a));return Vt(t,a,i,r),a.child}function Ei(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function M0(t,a,r,e,i){var n=$1();return n=n===null?null:{parent:Mt._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&xo(a,null),d1(),tu(a),t!==null&&oi(t,a,e,!0),a.childLanes=i,null}function mo(t,a){return a=Go({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function m0(t,a,r){return ie(a,t.child,null,r),t=mo(a,a.pendingProps),t.flags|=2,ra(a),a.memoizedState=null,t}function Y5(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(Y){if(e.mode==="hidden")return t=mo(a,e),a.lanes=536870912,Ei(null,t);if(c1(a),(t=nt)?(t=As(t,Ma),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Nr!==null?{id:Va,overflow:za}:null,retryLane:536870912,hydrationErrors:null},r=Yh(t),r.return=a,a.child=r,_t=a,nt=null)):t=null,t===null)throw Er(a);return a.lanes=536870912,null}return mo(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(c1(a),i)if(a.flags&256)a.flags&=-257,a=m0(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(m(558));else if(mt||oi(t,a,r,!1),i=(r&t.childLanes)!==0,mt||i){if(e=tt,e!==null&&(o=vh(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,he(t,o),Jt(e,t,o),pd;Ko(),a=m0(t,a,r)}else t=n.treeContext,nt=ya(o.nextSibling),_t=a,Y=!0,Wr=null,Ma=!1,t!==null&&Qh(a,t),a=mo(a,e),a.flags|=4096;return a}return t=rr(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function yo(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(m(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function f1(t,a,r,e,i){return ee(a),r=rd(t,a,r,e,void 0,i),e=ed(),t!==null&&!mt?(id(t,a,i),dr(t,a,i)):(Y&&e&&J1(a),a.flags|=1,Vt(t,a,r,i),a.child)}function y0(t,a,r,e,i,n){return ee(a),a.updateQueue=null,r=ru(a,e,r,i),au(t),e=ed(),t!==null&&!mt?(id(t,a,n),dr(t,a,n)):(Y&&e&&J1(a),a.flags|=1,Vt(t,a,r,n),a.child)}function w0(t,a,r,e,i){if(ee(a),a.stateNode===null){var n=Ne,o=r.contextType;typeof o=="object"&&o!==null&&(n=Tt(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=g1,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},P1(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?Tt(o):Ne,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(ml(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&g1.enqueueReplaceState(n,n.state,null),Xi(a,e,n,i),Yi(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var l=a.memoizedProps,h=oe(r,l);n.props=h;var s=n.context,v=r.contextType;o=Ne,typeof v=="object"&&v!==null&&(o=Tt(v));var k=r.getDerivedStateFromProps;v=typeof k=="function"||typeof n.getSnapshotBeforeUpdate=="function",l=a.pendingProps!==l,v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(l||s!==o)&&v0(a,n,e,o),kr=!1;var g=a.memoizedState;n.state=g,Xi(a,e,n,i),Yi(),s=a.memoizedState,l||g!==s||kr?(typeof k=="function"&&(ml(a,r,k,e),s=a.memoizedState),(h=kr||f0(a,r,h,e,g,s,o))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=s),n.props=e,n.state=s,n.context=o,e=h):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,o1(t,a),o=a.memoizedProps,v=oe(r,o),n.props=v,k=a.pendingProps,g=n.context,s=r.contextType,h=Ne,typeof s=="object"&&s!==null&&(h=Tt(s)),l=r.getDerivedStateFromProps,(s=typeof l=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==k||g!==h)&&v0(a,n,e,h),kr=!1,g=a.memoizedState,n.state=g,Xi(a,e,n,i),Yi();var x=a.memoizedState;o!==k||g!==x||kr||t!==null&&t.dependencies!==null&&No(t.dependencies)?(typeof l=="function"&&(ml(a,r,l,e),x=a.memoizedState),(v=kr||f0(a,r,v,e,g,x,h)||t!==null&&t.dependencies!==null&&No(t.dependencies))?(s||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,x,h),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,x,h)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=x),n.props=e,n.state=x,n.context=h,e=v):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&g===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,yo(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=ie(a,t.child,null,i),a.child=ie(a,null,r,i)):Vt(t,a,r,i),a.memoizedState=n.state,t=a.child):t=dr(t,a,i),t}function C0(t,a,r,e){return re(),a.flags|=256,Vt(t,a,r,e),a.child}var yl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wl(t){return{baseLanes:t,cachePool:Jh()}}function Cl(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=ia),t}function Uu(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(ut.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(Y){if(i?Lr(a):Mr(a),(t=nt)?(t=As(t,Ma),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Nr!==null?{id:Va,overflow:za}:null,retryLane:536870912,hydrationErrors:null},r=Yh(t),r.return=a,a.child=r,_t=a,nt=null)):t=null,t===null)throw Er(a);return H1(t)?a.lanes=32:a.lanes=536870912,null}var l=e.children;return e=e.fallback,i?(Mr(a),i=a.mode,l=Go({mode:"hidden",children:l},i),e=Ir(e,i,r,null),l.return=a,e.return=a,l.sibling=e,a.child=l,e=a.child,e.memoizedState=wl(r),e.childLanes=Cl(t,o,r),a.memoizedState=yl,Ei(null,e)):(Lr(a),v1(a,l))}var h=t.memoizedState;if(h!==null&&(l=h.dehydrated,l!==null)){if(n)a.flags&256?(Lr(a),a.flags&=-257,a=bl(t,a,r)):a.memoizedState!==null?(Mr(a),a.child=t.child,a.flags|=128,a=null):(Mr(a),l=e.fallback,i=a.mode,e=Go({mode:"visible",children:e.children},i),l=Ir(l,i,r,null),l.flags|=2,e.return=a,l.return=a,e.sibling=l,a.child=e,ie(a,t.child,null,r),e=a.child,e.memoizedState=wl(r),e.childLanes=Cl(t,o,r),a.memoizedState=yl,a=Ei(null,e));else if(Lr(a),H1(l)){if(o=l.nextSibling&&l.nextSibling.dataset,o)var s=o.dgst;o=s,e=Error(m(419)),e.stack="",e.digest=o,en({value:e,source:null,stack:null}),a=bl(t,a,r)}else if(mt||oi(t,a,r,!1),o=(r&t.childLanes)!==0,mt||o){if(o=tt,o!==null&&(e=vh(o,r),e!==0&&e!==h.retryLane))throw h.retryLane=e,he(t,e),Jt(o,t,e),pd;W1(l)||Ko(),a=bl(t,a,r)}else W1(l)?(a.flags|=192,a.child=t.child,a=null):(t=h.treeContext,nt=ya(l.nextSibling),_t=a,Y=!0,Wr=null,Ma=!1,t!==null&&Qh(a,t),a=v1(a,e.children),a.flags|=4096);return a}return i?(Mr(a),l=e.fallback,i=a.mode,h=t.child,s=h.sibling,e=rr(h,{mode:"hidden",children:e.children}),e.subtreeFlags=h.subtreeFlags&65011712,s!==null?l=rr(s,l):(l=Ir(l,i,r,null),l.flags|=2),l.return=a,e.return=a,e.sibling=l,a.child=e,Ei(null,e),e=a.child,l=t.child.memoizedState,l===null?l=wl(r):(i=l.cachePool,i!==null?(h=Mt._currentValue,i=i.parent!==h?{parent:h,pool:h}:i):i=Jh(),l={baseLanes:l.baseLanes|r,cachePool:i}),e.memoizedState=l,e.childLanes=Cl(t,o,r),a.memoizedState=yl,Ei(t.child,e)):(Lr(a),r=t.child,t=r.sibling,r=rr(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function v1(t,a){return a=Go({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function Go(t,a){return t=ea(22,t,null,a),t.lanes=0,t}function bl(t,a,r){return ie(a,t.child,null,r),t=v1(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function b0(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),e1(t.return,a,r)}function Bl(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function Zu(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=ut.current,l=(o&2)!==0;if(l?(o=o&1|2,a.flags|=128):o&=1,at(ut,o),Vt(t,a,e,r),e=Y?rn:0,!l&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&b0(t,r,a);else if(t.tag===19)b0(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&Oo(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),Bl(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&Oo(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Bl(a,!0,r,null,n,e);break;case"together":Bl(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function dr(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Or|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(oi(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(m(153));if(a.child!==null){for(t=a.child,r=rr(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=rr(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function fd(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&No(t)))}function X5(t,a,r){switch(a.tag){case 3:Ho(a,a.stateNode.containerInfo),xr(a,Mt,t.memoizedState.cache),re();break;case 27:case 5:Yl(a);break;case 4:Ho(a,a.stateNode.containerInfo);break;case 10:xr(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,c1(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(Lr(a),a.flags|=128,null):(r&a.child.childLanes)!==0?Uu(t,a,r):(Lr(a),t=dr(t,a,r),t!==null?t.sibling:null);Lr(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||(oi(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return Zu(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),at(ut,ut.current),e)break;return null;case 22:return a.lanes=0,Ou(t,a,r,a.pendingProps);case 24:xr(a,Mt,t.memoizedState.cache)}return dr(t,a,r)}function qu(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)mt=!0;else{if(!fd(t,r)&&(a.flags&128)===0)return mt=!1,X5(t,a,r);mt=(t.flags&131072)!==0}else mt=!1,Y&&(a.flags&1048576)!==0&&Xh(a,rn,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=Rr(a.elementType),a.type=t,typeof t=="function")K1(t)?(e=oe(t,e),a.tag=1,a=w0(null,a,t,e,r)):(a.tag=0,a=f1(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===z1){a.tag=11,a=x0(null,a,t,e,r);break t}else if(i===_1){a.tag=14,a=L0(null,a,t,e,r);break t}}throw a=ql(t)||t,Error(m(306,a,""))}}return a;case 0:return f1(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=oe(e,a.pendingProps),w0(t,a,e,i,r);case 3:t:{if(Ho(a,a.stateNode.containerInfo),t===null)throw Error(m(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,o1(t,a),Xi(a,e,null,r);var o=a.memoizedState;if(e=o.cache,xr(a,Mt,e),e!==n.cache&&i1(a,[Mt],r,!0),Yi(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=C0(t,a,e,r);break t}else if(e!==i){i=La(Error(m(424)),a),en(i),a=C0(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,nt=ya(t.firstChild),_t=a,Y=!0,Wr=null,Ma=!0,r=$h(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(re(),e===i){a=dr(t,a,r);break t}Vt(t,a,e,r)}a=a.child}return a;case 26:return yo(t,a),t===null?(r=K0(a.type,null,a.pendingProps,null))?a.memoizedState=r:Y||(r=a.type,t=a.pendingProps,e=$o(jr.current).createElement(r),e[zt]=a,e[Rt]=t,Nt(e,r,t),Wt(e),a.stateNode=e):a.memoizedState=K0(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Yl(a),t===null&&Y&&(e=a.stateNode=Vs(a.type,a.pendingProps,jr.current),_t=a,Ma=!0,i=nt,Zr(a.type)?(S1=i,nt=ya(e.firstChild)):nt=i),Vt(t,a,a.pendingProps.children,r),yo(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&Y&&((i=e=nt)&&(e=Mf(e,a.type,a.pendingProps,Ma),e!==null?(a.stateNode=e,_t=a,nt=ya(e.firstChild),Ma=!1,i=!0):i=!1),i||Er(a)),Yl(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,B1(i,n)?e=null:o!==null&&B1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=rd(t,a,N5,null,null,r),hn._currentValue=i),yo(t,a),Vt(t,a,e,r),a.child;case 6:return t===null&&Y&&((t=r=nt)&&(r=mf(r,a.pendingProps,Ma),r!==null?(a.stateNode=r,_t=a,nt=null,t=!0):t=!1),t||Er(a)),null;case 13:return Uu(t,a,r);case 4:return Ho(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=ie(a,null,e,r):Vt(t,a,e,r),a.child;case 11:return x0(t,a,a.type,a.pendingProps,r);case 7:return Vt(t,a,a.pendingProps,r),a.child;case 8:return Vt(t,a,a.pendingProps.children,r),a.child;case 12:return Vt(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,xr(a,a.type,e.value),Vt(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,ee(a),i=Tt(i),e=e(i),a.flags|=1,Vt(t,a,e,r),a.child;case 14:return L0(t,a,a.type,a.pendingProps,r);case 15:return Du(t,a,a.type,a.pendingProps,r);case 19:return Zu(t,a,r);case 31:return Y5(t,a,r);case 22:return Ou(t,a,r,a.pendingProps);case 24:return ee(a),e=Tt(Mt),t===null?(i=$1(),i===null&&(i=tt,n=F1(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},P1(a),xr(a,Mt,i)):((t.lanes&r)!==0&&(o1(t,a),Xi(a,null,null,r),Yi()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),xr(a,Mt,e)):(e=n.cache,xr(a,Mt,e),e!==i.cache&&i1(a,[Mt],r,!0))),Vt(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(m(156,a.tag))}function Ka(t){t.flags|=4}function jl(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(ss())t.flags|=8192;else throw te=Eo,I1}else t.flags&=-16777217}function B0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Ts(a))if(ss())t.flags|=8192;else throw te=Eo,I1}function no(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?gh():536870912,t.lanes|=a,Pe|=a)}function Si(t,a){if(!Y)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function it(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function Q5(t,a,r){var e=a.pendingProps;switch(R1(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(a),null;case 1:return it(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),er(Mt),Ke(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ce(a)?Ka(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,xl())),it(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(Ka(a),n!==null?(it(a),B0(a,n)):(it(a),jl(a,i,null,e,r))):n?n!==t.memoizedState?(Ka(a),it(a),B0(a,n)):(it(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&Ka(a),it(a),jl(a,i,t,e,r)),null;case 27:if(So(a),r=jr.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ka(a);else{if(!e){if(a.stateNode===null)throw Error(m(166));return it(a),null}t=Ta.current,Ce(a)?a0(a,t):(t=Vs(i,e,r),a.stateNode=t,Ka(a))}return it(a),null;case 5:if(So(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&Ka(a);else{if(!e){if(a.stateNode===null)throw Error(m(166));return it(a),null}if(n=Ta.current,Ce(a))a0(a,n);else{var o=$o(jr.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[zt]=a,n[Rt]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(Nt(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ka(a)}}return it(a),jl(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&Ka(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(m(166));if(t=jr.current,Ce(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=_t,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[zt]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||Ws(t.nodeValue,r)),t||Er(a,!0)}else t=$o(t).createTextNode(e),t[zt]=a,a.stateNode=t}return it(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=Ce(a),r!==null){if(t===null){if(!e)throw Error(m(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[zt]=a}else re(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;it(a),t=!1}else r=xl(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?(ra(a),a):(ra(a),null);if((a.flags&128)!==0)throw Error(m(558))}return it(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Ce(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(m(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[zt]=a}else re(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;it(a),i=!1}else i=xl(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(ra(a),a):(ra(a),null)}return ra(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),no(a,a.updateQueue),it(a),null);case 4:return Ke(),t===null&&yd(a.stateNode.containerInfo),it(a),null;case 10:return er(a.type),it(a),null;case 19:if(Ht(ut),e=a.memoizedState,e===null)return it(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)Si(e,!1);else{if(ht!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=Oo(t),n!==null){for(a.flags|=128,Si(e,!1),t=n.updateQueue,a.updateQueue=t,no(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)Gh(r,t),r=r.sibling;return at(ut,ut.current&1|2),Y&&$a(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&na()>Xo&&(a.flags|=128,i=!0,Si(e,!1),a.lanes=4194304)}else{if(!i)if(t=Oo(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,no(a,t),Si(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!Y)return it(a),null}else 2*na()-e.renderingStartTime>Xo&&r!==536870912&&(a.flags|=128,i=!0,Si(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=na(),t.sibling=null,r=ut.current,at(ut,i?r&1|2:r&1),Y&&$a(a,e.treeForkCount),t):(it(a),null);case 22:case 23:return ra(a),td(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(it(a),a.subtreeFlags&6&&(a.flags|=8192)):it(a),r=a.updateQueue,r!==null&&no(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&Ht(Pr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),er(Mt),it(a),null;case 25:return null;case 30:return null}throw Error(m(156,a.tag))}function K5(t,a){switch(R1(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return er(Mt),Ke(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return So(a),null;case 31:if(a.memoizedState!==null){if(ra(a),a.alternate===null)throw Error(m(340));re()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(ra(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(m(340));re()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Ht(ut),null;case 4:return Ke(),null;case 10:return er(a.type),null;case 22:case 23:return ra(a),td(),t!==null&&Ht(Pr),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return er(Mt),null;case 25:return null;default:return null}}function Gu(t,a){switch(R1(a),a.tag){case 3:er(Mt),Ke();break;case 26:case 27:case 5:So(a);break;case 4:Ke();break;case 31:a.memoizedState!==null&&ra(a);break;case 13:ra(a);break;case 19:Ht(ut);break;case 10:er(a.type);break;case 22:case 23:ra(a),td(),t!==null&&Ht(Pr);break;case 24:er(Mt)}}function mn(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(l){R(a,a.return,l)}}function Dr(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,l=o.destroy;if(l!==void 0){o.destroy=void 0,i=a;var h=r,s=l;try{s()}catch(v){R(i,h,v)}}}e=e.next}while(e!==n)}}catch(v){R(a,a.return,v)}}function Yu(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{Ph(a,r)}catch(e){R(t,t.return,e)}}}function Xu(t,a,r){r.props=oe(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){R(t,a,e)}}function Ki(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){R(t,a,i)}}function _a(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){R(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){R(t,a,i)}else r.current=null}function Qu(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){R(t,t.return,i)}}function Wl(t,a,r){try{var e=t.stateNode;pf(e,t.type,r,a),e[Rt]=a}catch(i){R(t,t.return,i)}}function Ku(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Zr(t.type)||t.tag===4}function Hl(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ku(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Zr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function k1(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=tr));else if(e!==4&&(e===27&&Zr(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(k1(t,a,r),t=t.sibling;t!==null;)k1(t,a,r),t=t.sibling}function Yo(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&Zr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Yo(t,a,r),t=t.sibling;t!==null;)Yo(t,a,r),t=t.sibling}function Ju(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Nt(a,e,r),a[zt]=t,a[Rt]=r}catch(n){R(t,t.return,n)}}var Ia=!1,Lt=!1,Sl=!1,j0=typeof WeakSet=="function"?WeakSet:Set,jt=null;function J5(t,a){if(t=t.containerInfo,C1=a2,t=Th(t),Y1(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,l=-1,h=-1,s=0,v=0,k=t,g=null;a:for(;;){for(var x;k!==r||i!==0&&k.nodeType!==3||(l=o+i),k!==n||e!==0&&k.nodeType!==3||(h=o+e),k.nodeType===3&&(o+=k.nodeValue.length),(x=k.firstChild)!==null;)g=k,k=x;for(;;){if(k===t)break a;if(g===r&&++s===i&&(l=o),g===n&&++v===e&&(h=o),(x=k.nextSibling)!==null)break;k=g,g=k.parentNode}k=x}r=l===-1||h===-1?null:{start:l,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(b1={focusedElem:t,selectionRange:r},a2=!1,jt=a;jt!==null;)if(a=jt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,jt=t;else for(;jt!==null;){switch(a=jt,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var y=oe(r.type,i);t=e.getSnapshotBeforeUpdate(y,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(b){R(r,r.return,b)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)j1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":j1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=a.sibling,t!==null){t.return=a.return,jt=t;break}jt=a.return}}function Ru(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:Ra(t,r),e&4&&mn(5,r);break;case 1:if(Ra(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){R(r,r.return,o)}else{var i=oe(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){R(r,r.return,o)}}e&64&&Yu(r),e&512&&Ki(r,r.return);break;case 3:if(Ra(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{Ph(t,a)}catch(o){R(r,r.return,o)}}break;case 27:a===null&&e&4&&Ju(r);case 26:case 5:Ra(t,r),a===null&&e&4&&Qu(r),e&512&&Ki(r,r.return);break;case 12:Ra(t,r);break;case 31:Ra(t,r),e&4&&Iu(t,r);break;case 13:Ra(t,r),e&4&&Pu(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=ef.bind(null,r),yf(t,r))));break;case 22:if(e=r.memoizedState!==null||Ia,!e){a=a!==null&&a.memoizedState!==null||Lt,i=Ia;var n=Lt;Ia=e,(Lt=a)&&!n?Fa(t,r,(r.subtreeFlags&8772)!==0):Ra(t,r),Ia=i,Lt=n}break;case 30:break;default:Ra(t,r)}}function Fu(t){var a=t.alternate;a!==null&&(t.alternate=null,Fu(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&D1(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var dt=null,Qt=!1;function Ja(t,a,r){for(r=r.child;r!==null;)$u(t,a,r),r=r.sibling}function $u(t,a,r){if(oa&&typeof oa.onCommitFiberUnmount=="function")try{oa.onCommitFiberUnmount(pn,r)}catch{}switch(r.tag){case 26:Lt||_a(r,a),Ja(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Lt||_a(r,a);var e=dt,i=Qt;Zr(r.type)&&(dt=r.stateNode,Qt=!1),Ja(t,a,r),$i(r.stateNode),dt=e,Qt=i;break;case 5:Lt||_a(r,a);case 6:if(e=dt,i=Qt,dt=null,Ja(t,a,r),dt=e,Qt=i,dt!==null)if(Qt)try{(dt.nodeType===9?dt.body:dt.nodeName==="HTML"?dt.ownerDocument.body:dt).removeChild(r.stateNode)}catch(n){R(r,a,n)}else try{dt.removeChild(r.stateNode)}catch(n){R(r,a,n)}break;case 18:dt!==null&&(Qt?(t=dt,q0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),ei(t)):q0(dt,r.stateNode));break;case 4:e=dt,i=Qt,dt=r.stateNode.containerInfo,Qt=!0,Ja(t,a,r),dt=e,Qt=i;break;case 0:case 11:case 14:case 15:Dr(2,r,a),Lt||Dr(4,r,a),Ja(t,a,r);break;case 1:Lt||(_a(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&Xu(r,a,e)),Ja(t,a,r);break;case 21:Ja(t,a,r);break;case 22:Lt=(e=Lt)||r.memoizedState!==null,Ja(t,a,r),Lt=e;break;default:Ja(t,a,r)}}function Iu(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ei(t)}catch(r){R(a,a.return,r)}}}function Pu(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ei(t)}catch(r){R(a,a.return,r)}}function R5(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new j0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new j0),a;default:throw Error(m(435,t.tag))}}function oo(t,a){var r=R5(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=nf.bind(null,t,e);e.then(i,i)}})}function Yt(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(Zr(l.type)){dt=l.stateNode,Qt=!1;break t}break;case 5:dt=l.stateNode,Qt=!1;break t;case 3:case 4:dt=l.stateNode.containerInfo,Qt=!0;break t}l=l.return}if(dt===null)throw Error(m(160));$u(n,o,i),dt=null,Qt=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)ts(a,t),a=a.sibling}var Wa=null;function ts(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yt(a,t),Xt(t),e&4&&(Dr(3,t,t.return),mn(3,t),Dr(5,t,t.return));break;case 1:Yt(a,t),Xt(t),e&512&&(Lt||r===null||_a(r,r.return)),e&64&&Ia&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=Wa;if(Yt(a,t),Xt(t),e&512&&(Lt||r===null||_a(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[kn]||n[zt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),Nt(n,e,r),n[zt]=t,Wt(n),e=n;break t;case"link":var o=R0("link","href",i).get(e+(r.href||""));if(o){for(var l=0;l<o.length;l++)if(n=o[l],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(l,1);break a}}n=i.createElement(e),Nt(n,e,r),i.head.appendChild(n);break;case"meta":if(o=R0("meta","content",i).get(e+(r.content||""))){for(l=0;l<o.length;l++)if(n=o[l],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(l,1);break a}}n=i.createElement(e),Nt(n,e,r),i.head.appendChild(n);break;default:throw Error(m(468,e))}n[zt]=t,Wt(n),e=n}t.stateNode=e}else F0(i,t.type,t.stateNode);else t.stateNode=J0(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?F0(i,t.type,t.stateNode):J0(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&Wl(t,t.memoizedProps,r.memoizedProps)}break;case 27:Yt(a,t),Xt(t),e&512&&(Lt||r===null||_a(r,r.return)),r!==null&&e&4&&Wl(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Yt(a,t),Xt(t),e&512&&(Lt||r===null||_a(r,r.return)),t.flags&32){i=t.stateNode;try{Re(i,"")}catch(y){R(t,t.return,y)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,Wl(t,i,r!==null?r.memoizedProps:i)),e&1024&&(Sl=!0);break;case 6:if(Yt(a,t),Xt(t),e&4){if(t.stateNode===null)throw Error(m(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(y){R(t,t.return,y)}}break;case 3:if(bo=null,i=Wa,Wa=Io(a.containerInfo),Yt(a,t),Wa=i,Xt(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{ei(a.containerInfo)}catch(y){R(t,t.return,y)}Sl&&(Sl=!1,as(t));break;case 4:e=Wa,Wa=Io(t.stateNode.containerInfo),Yt(a,t),Xt(t),Wa=e;break;case 12:Yt(a,t),Xt(t);break;case 31:Yt(a,t),Xt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,oo(t,e)));break;case 13:Yt(a,t),Xt(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(p2=na()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,oo(t,e)));break;case 22:i=t.memoizedState!==null;var h=r!==null&&r.memoizedState!==null,s=Ia,v=Lt;if(Ia=s||i,Lt=v||h,Yt(a,t),Lt=v,Ia=s,Xt(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||h||Ia||Lt||Fr(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){h=r=a;try{if(n=h.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{l=h.stateNode;var k=h.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(y){R(h,h.return,y)}}}else if(a.tag===6){if(r===null){h=a;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(y){R(h,h.return,y)}}}else if(a.tag===18){if(r===null){h=a;try{var x=h.stateNode;i?G0(x,!0):G0(h.stateNode,!1)}catch(y){R(h,h.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,oo(t,r))));break;case 19:Yt(a,t),Xt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,oo(t,e)));break;case 30:break;case 21:break;default:Yt(a,t),Xt(t)}}function Xt(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if(Ku(e)){r=e;break}e=e.return}if(r==null)throw Error(m(160));switch(r.tag){case 27:var i=r.stateNode,n=Hl(t);Yo(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(Re(o,""),r.flags&=-33);var l=Hl(t);Yo(t,l,o);break;case 3:case 4:var h=r.stateNode.containerInfo,s=Hl(t);k1(t,s,h);break;default:throw Error(m(161))}}catch(v){R(t,t.return,v)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function as(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;as(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function Ra(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Ru(t,a.alternate,a),a=a.sibling}function Fr(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Dr(4,a,a.return),Fr(a);break;case 1:_a(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&Xu(a,a.return,r),Fr(a);break;case 27:$i(a.stateNode);case 26:case 5:_a(a,a.return),Fr(a);break;case 22:a.memoizedState===null&&Fr(a);break;case 30:Fr(a);break;default:Fr(a)}t=t.sibling}}function Fa(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:Fa(i,n,r),mn(4,n);break;case 1:if(Fa(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(s){R(e,e.return,s)}if(e=n,i=e.updateQueue,i!==null){var l=e.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)Ih(h[i],l)}catch(s){R(e,e.return,s)}}r&&o&64&&Yu(n),Ki(n,n.return);break;case 27:Ju(n);case 26:case 5:Fa(i,n,r),r&&e===null&&o&4&&Qu(n),Ki(n,n.return);break;case 12:Fa(i,n,r);break;case 31:Fa(i,n,r),r&&o&4&&Iu(i,n);break;case 13:Fa(i,n,r),r&&o&4&&Pu(i,n);break;case 22:n.memoizedState===null&&Fa(i,n,r),Ki(n,n.return);break;case 30:break;default:Fa(i,n,r)}a=a.sibling}}function vd(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Ln(r))}function kd(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Ln(t))}function ja(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)rs(t,a,r,e),a=a.sibling}function rs(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:ja(t,a,r,e),i&2048&&mn(9,a);break;case 1:ja(t,a,r,e);break;case 3:ja(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Ln(t)));break;case 12:if(i&2048){ja(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,l=n.onPostCommit;typeof l=="function"&&l(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){R(a,a.return,h)}}else ja(t,a,r,e);break;case 31:ja(t,a,r,e);break;case 13:ja(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?ja(t,a,r,e):Ji(t,a):n._visibility&2?ja(t,a,r,e):(n._visibility|=2,Be(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&vd(o,a);break;case 24:ja(t,a,r,e),i&2048&&kd(a.alternate,a);break;default:ja(t,a,r,e)}}function Be(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,l=r,h=e,s=o.flags;switch(o.tag){case 0:case 11:case 15:Be(n,o,l,h,i),mn(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?Be(n,o,l,h,i):Ji(n,o):(v._visibility|=2,Be(n,o,l,h,i)),i&&s&2048&&vd(o.alternate,o);break;case 24:Be(n,o,l,h,i),i&&s&2048&&kd(o.alternate,o);break;default:Be(n,o,l,h,i)}a=a.sibling}}function Ji(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:Ji(r,e),i&2048&&vd(e.alternate,e);break;case 24:Ji(r,e),i&2048&&kd(e.alternate,e);break;default:Ji(r,e)}a=a.sibling}}var Di=8192;function be(t,a,r){if(t.subtreeFlags&Di)for(t=t.child;t!==null;)es(t,a,r),t=t.sibling}function es(t,a,r){switch(t.tag){case 26:be(t,a,r),t.flags&Di&&t.memoizedState!==null&&_f(r,Wa,t.memoizedState,t.memoizedProps);break;case 5:be(t,a,r);break;case 3:case 4:var e=Wa;Wa=Io(t.stateNode.containerInfo),be(t,a,r),Wa=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Di,Di=16777216,be(t,a,r),Di=e):be(t,a,r));break;default:be(t,a,r)}}function is(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function Ai(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];jt=e,os(e,t)}is(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ns(t),t=t.sibling}function ns(t){switch(t.tag){case 0:case 11:case 15:Ai(t),t.flags&2048&&Dr(9,t,t.return);break;case 3:Ai(t);break;case 12:Ai(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,wo(t)):Ai(t);break;default:Ai(t)}}function wo(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];jt=e,os(e,t)}is(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Dr(8,a,a.return),wo(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,wo(a));break;default:wo(a)}t=t.sibling}}function os(t,a){for(;jt!==null;){var r=jt;switch(r.tag){case 0:case 11:case 15:Dr(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Ln(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,jt=e;else t:for(r=t;jt!==null;){e=jt;var i=e.sibling,n=e.return;if(Fu(e),e===r){jt=null;break t}if(i!==null){i.return=n,jt=i;break t}jt=n}}}var F5={getCacheForType:function(t){var a=Tt(Mt),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return Tt(Mt).controller.signal}},$5=typeof WeakMap=="function"?WeakMap:Map,X=0,tt=null,q=null,G=0,J=0,aa=null,Cr=!1,di=!1,xd=!1,cr=0,ht=0,Or=0,ae=0,Ld=0,ia=0,Pe=0,Ri=null,Kt=null,x1=!1,p2=0,ls=0,Xo=1/0,Qo=null,Ar=null,yt=0,Vr=null,ti=null,ir=0,L1=0,M1=null,ds=null,Fi=0,m1=null;function da(){return(X&2)!==0&&G!==0?G&-G:z.T!==null?md():kh()}function cs(){if(ia===0)if((G&536870912)===0||Y){var t=Fn;Fn<<=1,(Fn&3932160)===0&&(Fn=262144),ia=t}else ia=536870912;return t=ha.current,t!==null&&(t.flags|=32),ia}function Jt(t,a,r){(t===tt&&(J===2||J===9)||t.cancelPendingCommit!==null)&&(ai(t,0),br(t,G,ia,!1)),vn(t,r),((X&2)===0||t!==tt)&&(t===tt&&((X&2)===0&&(ae|=r),ht===4&&br(t,G,ia,!1)),Ea(t))}function hs(t,a,r){if((X&6)!==0)throw Error(m(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||fn(t,a),i=e?tf(t,a):Al(t,a,!0),n=e;do{if(i===0){di&&!e&&br(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!I5(r)){i=Al(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var l=t;i=Ri;var h=l.current.memoizedState.isDehydrated;if(h&&(ai(l,o).flags|=256),o=Al(l,o,!1),o!==2){if(xd&&!h){l.errorRecoveryDisabledLanes|=n,ae|=n,i=4;break t}n=Kt,Kt=i,n!==null&&(Kt===null?Kt=n:Kt.push.apply(Kt,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){ai(t,0),br(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(m(345));case 4:if((a&4194048)!==a)break;case 6:br(e,a,ia,!Cr);break t;case 2:Kt=null;break;case 3:case 5:break;default:throw Error(m(329))}if((a&62914560)===a&&(i=p2+300-na(),10<i)){if(br(e,a,ia,!Cr),e2(e,0,!0)!==0)break t;ir=a,e.timeoutHandle=Ss(W0.bind(null,e,r,Kt,Qo,x1,a,ia,ae,Pe,Cr,n,"Throttled",-0,0),i);break t}W0(e,r,Kt,Qo,x1,a,ia,ae,Pe,Cr,n,null,-0,0)}}break}while(!0);Ea(t)}function W0(t,a,r,e,i,n,o,l,h,s,v,k,g,x){if(t.timeoutHandle=-1,k=a.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:tr},es(a,n,k);var y=(n&62914560)===n?p2-na():(n&4194048)===n?ls-na():0;if(y=Tf(k,y),y!==null){ir=n,t.cancelPendingCommit=y(S0.bind(null,t,a,n,r,e,i,o,l,h,v,k,null,g,x)),br(t,n,o,!s);return}}S0(t,a,n,r,e,i,o,l,h)}function I5(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!ca(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function br(t,a,r,e){a&=~Ld,a&=~ae,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-la(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&ph(t,r,a)}function f2(){return(X&6)===0?(yn(0,!1),!1):!0}function Md(){if(q!==null){if(J===0)var t=q.return;else t=q,ar=ue=null,nd(t),Ye=null,nn=0,t=q;for(;t!==null;)Gu(t.alternate,t),t=t.return;q=null}}function ai(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,kf(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ir=0,Md(),tt=t,q=r=rr(t.current,null),G=a,J=0,aa=null,Cr=!1,di=fn(t,a),xd=!1,Pe=ia=Ld=ae=Or=ht=0,Kt=Ri=null,x1=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-la(e),n=1<<i;a|=t[i],e&=~n}return cr=a,l2(),r}function us(t,a){N=null,z.H=ln,a===li||a===c2?(a=o0(),J=3):a===I1?(a=o0(),J=4):J=a===pd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,aa=a,q===null&&(ht=1,qo(t,La(a,t.current)))}function ss(){var t=ha.current;return t===null?!0:(G&4194048)===G?ma===null:(G&62914560)===G||(G&536870912)!==0?t===ma:!1}function gs(){var t=z.H;return z.H=ln,t===null?ln:t}function ps(){var t=z.A;return z.A=F5,t}function Ko(){ht=4,Cr||(G&4194048)!==G&&ha.current!==null||(di=!0),(Or&134217727)===0&&(ae&134217727)===0||tt===null||br(tt,G,ia,!1)}function Al(t,a,r){var e=X;X|=2;var i=gs(),n=ps();(tt!==t||G!==a)&&(Qo=null,ai(t,a)),a=!1;var o=ht;t:do try{if(J!==0&&q!==null){var l=q,h=aa;switch(J){case 8:Md(),o=6;break t;case 3:case 2:case 9:case 6:ha.current===null&&(a=!0);var s=J;if(J=0,aa=null,Oe(t,l,h,s),r&&di){o=0;break t}break;default:s=J,J=0,aa=null,Oe(t,l,h,s)}}P5(),o=ht;break}catch(v){us(t,v)}while(!0);return a&&t.shellSuspendCounter++,ar=ue=null,X=e,z.H=i,z.A=n,q===null&&(tt=null,G=0,l2()),o}function P5(){for(;q!==null;)fs(q)}function tf(t,a){var r=X;X|=2;var e=gs(),i=ps();tt!==t||G!==a?(Qo=null,Xo=na()+500,ai(t,a)):di=fn(t,a);t:do try{if(J!==0&&q!==null){a=q;var n=aa;a:switch(J){case 1:J=0,aa=null,Oe(t,a,n,1);break;case 2:case 9:if(n0(n)){J=0,aa=null,H0(a);break}a=function(){J!==2&&J!==9||tt!==t||(J=7),Ea(t)},n.then(a,a);break t;case 3:J=7;break t;case 4:J=5;break t;case 7:n0(n)?(J=0,aa=null,H0(a)):(J=0,aa=null,Oe(t,a,n,7));break;case 5:var o=null;switch(q.tag){case 26:o=q.memoizedState;case 5:case 27:var l=q;if(o?Ts(o):l.stateNode.complete){J=0,aa=null;var h=l.sibling;if(h!==null)q=h;else{var s=l.return;s!==null?(q=s,v2(s)):q=null}break a}}J=0,aa=null,Oe(t,a,n,5);break;case 6:J=0,aa=null,Oe(t,a,n,6);break;case 8:Md(),ht=6;break t;default:throw Error(m(462))}}af();break}catch(v){us(t,v)}while(!0);return ar=ue=null,z.H=e,z.A=i,X=r,q!==null?0:(tt=null,G=0,l2(),ht)}function af(){for(;q!==null&&!Cp();)fs(q)}function fs(t){var a=qu(t.alternate,t,cr);t.memoizedProps=t.pendingProps,a===null?v2(t):q=a}function H0(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=y0(r,a,a.pendingProps,a.type,void 0,G);break;case 11:a=y0(r,a,a.pendingProps,a.type.render,a.ref,G);break;case 5:nd(a);default:Gu(r,a),a=q=Gh(a,cr),a=qu(r,a,cr)}t.memoizedProps=t.pendingProps,a===null?v2(t):q=a}function Oe(t,a,r,e){ar=ue=null,nd(a),Ye=null,nn=0;var i=a.return;try{if(G5(t,i,a,r,G)){ht=1,qo(t,La(r,t.current)),q=null;return}}catch(n){if(i!==null)throw q=i,n;ht=1,qo(t,La(r,t.current)),q=null;return}a.flags&32768?(Y||e===1?t=!0:di||(G&536870912)!==0?t=!1:(Cr=t=!0,(e===2||e===9||e===3||e===6)&&(e=ha.current,e!==null&&e.tag===13&&(e.flags|=16384))),vs(a,t)):v2(a)}function v2(t){var a=t;do{if((a.flags&32768)!==0){vs(a,Cr);return}t=a.return;var r=Q5(a.alternate,a,cr);if(r!==null){q=r;return}if(a=a.sibling,a!==null){q=a;return}q=a=t}while(a!==null);ht===0&&(ht=5)}function vs(t,a){do{var r=K5(t.alternate,t);if(r!==null){r.flags&=32767,q=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){q=t;return}q=t=r}while(t!==null);ht=6,q=null}function S0(t,a,r,e,i,n,o,l,h){t.cancelPendingCommit=null;do k2();while(yt!==0);if((X&6)!==0)throw Error(m(327));if(a!==null){if(a===t.current)throw Error(m(177));if(n=a.lanes|a.childLanes,n|=X1,_p(t,r,n,o,l,h),t===tt&&(q=tt=null,G=0),ti=a,Vr=t,ir=r,L1=n,M1=i,ds=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,of(Ao,function(){return ms(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=z.T,z.T=null,i=Q.p,Q.p=2,o=X,X|=4;try{J5(t,a,r)}finally{X=o,Q.p=i,z.T=e}}yt=1,ks(),xs(),Ls()}}function ks(){if(yt===1){yt=0;var t=Vr,a=ti,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{ts(a,t);var n=b1,o=Th(t.containerInfo),l=n.focusedElem,h=n.selectionRange;if(o!==l&&l&&l.ownerDocument&&_h(l.ownerDocument.documentElement,l)){if(h!==null&&Y1(l)){var s=h.start,v=h.end;if(v===void 0&&(v=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(v,l.value.length);else{var k=l.ownerDocument||document,g=k&&k.defaultView||window;if(g.getSelection){var x=g.getSelection(),y=l.textContent.length,b=Math.min(h.start,y),E=h.end===void 0?b:Math.min(h.end,y);!x.extend&&b>E&&(o=E,E=b,b=o);var p=Ic(l,b),u=Ic(l,E);if(p&&u&&(x.rangeCount!==1||x.anchorNode!==p.node||x.anchorOffset!==p.offset||x.focusNode!==u.node||x.focusOffset!==u.offset)){var f=k.createRange();f.setStart(p.node,p.offset),x.removeAllRanges(),b>E?(x.addRange(f),x.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),x.addRange(f))}}}}for(k=[],x=l;x=x.parentNode;)x.nodeType===1&&k.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<k.length;l++){var L=k[l];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}a2=!!C1,b1=C1=null}finally{X=i,Q.p=e,z.T=r}}t.current=a,yt=2}}function xs(){if(yt===2){yt=0;var t=Vr,a=ti,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var e=Q.p;Q.p=2;var i=X;X|=4;try{Ru(t,a.alternate,a)}finally{X=i,Q.p=e,z.T=r}}yt=3}}function Ls(){if(yt===4||yt===3){yt=0,bp();var t=Vr,a=ti,r=ir,e=ds;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?yt=5:(yt=0,ti=Vr=null,Ms(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Ar=null),E1(r),a=a.stateNode,oa&&typeof oa.onCommitFiberRoot=="function")try{oa.onCommitFiberRoot(pn,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=z.T,i=Q.p,Q.p=2,z.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var l=e[o];n(l.value,{componentStack:l.stack})}}finally{z.T=a,Q.p=i}}(ir&3)!==0&&k2(),Ea(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===m1?Fi++:(Fi=0,m1=t):Fi=0,yn(0,!1)}}function Ms(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Ln(a)))}function k2(){return ks(),xs(),Ls(),ms()}function ms(){if(yt!==5)return!1;var t=Vr,a=L1;L1=0;var r=E1(ir),e=z.T,i=Q.p;try{Q.p=32>r?32:r,z.T=null,r=M1,M1=null;var n=Vr,o=ir;if(yt=0,ti=Vr=null,ir=0,(X&6)!==0)throw Error(m(331));var l=X;if(X|=4,ns(n.current),rs(n,n.current,o,r),X=l,yn(0,!1),oa&&typeof oa.onPostCommitFiberRoot=="function")try{oa.onPostCommitFiberRoot(pn,n)}catch{}return!0}finally{Q.p=i,z.T=e,Ms(t,a)}}function A0(t,a,r){a=La(r,a),a=p1(t.stateNode,a,2),t=Sr(t,a,2),t!==null&&(vn(t,2),Ea(t))}function R(t,a,r){if(t.tag===3)A0(t,t,r);else for(;a!==null;){if(a.tag===3){A0(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Ar===null||!Ar.has(e))){t=La(r,t),r=Nu(2),e=Sr(a,r,2),e!==null&&(Eu(r,e,a,t),vn(e,2),Ea(e));break}}a=a.return}}function Vl(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new $5;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(xd=!0,i.add(r),t=rf.bind(null,t,a,r),a.then(t,t))}function rf(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,tt===t&&(G&r)===r&&(ht===4||ht===3&&(G&62914560)===G&&300>na()-p2?(X&2)===0&&ai(t,0):Ld|=r,Pe===G&&(Pe=0)),Ea(t)}function ys(t,a){a===0&&(a=gh()),t=he(t,a),t!==null&&(vn(t,a),Ea(t))}function ef(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),ys(t,r)}function nf(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(m(314))}e!==null&&e.delete(a),ys(t,r)}function of(t,a){return T1(t,a)}var Jo=null,je=null,y1=!1,Ro=!1,zl=!1,Br=0;function Ea(t){t!==je&&t.next===null&&(je===null?Jo=je=t:je=je.next=t),Ro=!0,y1||(y1=!0,df())}function yn(t,a){if(!zl&&Ro){zl=!0;do for(var r=!1,e=Jo;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,l=e.pingedLanes;n=(1<<31-la(42|t)+1)-1,n&=i&~(o&~l),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,V0(e,n))}else n=G,n=e2(e,e===tt?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||fn(e,n)||(r=!0,V0(e,n));e=e.next}while(r);zl=!1}}function lf(){ws()}function ws(){Ro=y1=!1;var t=0;Br!==0&&vf()&&(t=Br);for(var a=na(),r=null,e=Jo;e!==null;){var i=e.next,n=Cs(e,a);n===0?(e.next=null,r===null?Jo=i:r.next=i,i===null&&(je=r)):(r=e,(t!==0||(n&3)!==0)&&(Ro=!0)),e=i}yt!==0&&yt!==5||yn(t,!1),Br!==0&&(Br=0)}function Cs(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-la(n),l=1<<o,h=i[o];h===-1?((l&r)===0||(l&e)!==0)&&(i[o]=zp(l,a)):h<=a&&(t.expiredLanes|=l),n&=~l}if(a=tt,r=G,r=e2(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(J===2||J===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&dl(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||fn(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&dl(e),E1(r)){case 2:case 8:r=uh;break;case 32:r=Ao;break;case 268435456:r=sh;break;default:r=Ao}return e=bs.bind(null,t),r=T1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&dl(e),t.callbackPriority=2,t.callbackNode=null,2}function bs(t,a){if(yt!==0&&yt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(k2()&&t.callbackNode!==r)return null;var e=G;return e=e2(t,t===tt?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(hs(t,e,a),Cs(t,na()),t.callbackNode!=null&&t.callbackNode===r?bs.bind(null,t):null)}function V0(t,a){if(k2())return null;hs(t,a,!0)}function df(){xf(function(){(X&6)!==0?T1(hh,lf):ws()})}function md(){if(Br===0){var t=Fe;t===0&&(t=Rn,Rn<<=1,(Rn&261888)===0&&(Rn=256)),Br=t}return Br}function z0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:po(""+t)}function _0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function cf(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=z0((i[Rt]||null).action),o=e.submitter;o&&(a=(a=o[Rt]||null)?z0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var l=new i2("action","action",null,e,i);t.push({event:l,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Br!==0){var h=o?_0(i,o):new FormData(i);s1(r,{pending:!0,data:h,method:i.method,action:n},null,h)}}else typeof n=="function"&&(l.preventDefault(),h=o?_0(i,o):new FormData(i),s1(r,{pending:!0,data:h,method:i.method,action:n},n,h))},currentTarget:i}]})}}for(lo=0;lo<t1.length;lo++)co=t1[lo],T0=co.toLowerCase(),N0=co[0].toUpperCase()+co.slice(1),Ha(T0,"on"+N0);var co,T0,N0,lo;Ha(Eh,"onAnimationEnd");Ha(Dh,"onAnimationIteration");Ha(Oh,"onAnimationStart");Ha("dblclick","onDoubleClick");Ha("focusin","onFocus");Ha("focusout","onBlur");Ha(B5,"onTransitionRun");Ha(j5,"onTransitionStart");Ha(W5,"onTransitionCancel");Ha(Uh,"onTransitionEnd");Je("onMouseEnter",["mouseout","mouseover"]);Je("onMouseLeave",["mouseout","mouseover"]);Je("onPointerEnter",["pointerout","pointerover"]);Je("onPointerLeave",["pointerout","pointerover"]);le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));le("onBeforeInput",["compositionend","keypress","textInput","paste"]);le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn));function Bs(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var l=e[o],h=l.instance,s=l.currentTarget;if(l=l.listener,h!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){zo(v)}i.currentTarget=null,n=h}else for(o=0;o<e.length;o++){if(l=e[o],h=l.instance,s=l.currentTarget,l=l.listener,h!==n&&i.isPropagationStopped())break t;n=l,i.currentTarget=s;try{n(i)}catch(v){zo(v)}i.currentTarget=null,n=h}}}}function Z(t,a){var r=a[Ql];r===void 0&&(r=a[Ql]=new Set);var e=t+"__bubble";r.has(e)||(js(a,t,2,!1),r.add(e))}function _l(t,a,r){var e=0;a&&(e|=4),js(r,t,e,a)}var ho="_reactListening"+Math.random().toString(36).slice(2);function yd(t){if(!t[ho]){t[ho]=!0,xh.forEach(function(r){r!=="selectionchange"&&(hf.has(r)||_l(r,!1,t),_l(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[ho]||(a[ho]=!0,_l("selectionchange",!1,a))}}function js(t,a,r,e){switch(Us(a)){case 2:var i=Df;break;case 8:i=Of;break;default:i=Bd}r=i.bind(null,a,r,t),i=void 0,!$l||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function Tl(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var l=e.stateNode.containerInfo;if(l===i)break;if(o===4)for(o=e.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;l!==null;){if(o=Se(l),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){e=n=o;continue t}l=l.parentNode}}e=e.return}Bh(function(){var s=n,v=U1(r),k=[];t:{var g=Zh.get(t);if(g!==void 0){var x=i2,y=t;switch(t){case"keypress":if(vo(r)===0)break t;case"keydown":case"keyup":x=i5;break;case"focusin":y="focus",x=gl;break;case"focusout":y="blur",x=gl;break;case"beforeblur":case"afterblur":x=gl;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=l5;break;case Eh:case Dh:case Oh:x=Rp;break;case Uh:x=c5;break;case"scroll":case"scrollend":x=Yp;break;case"wheel":x=u5;break;case"copy":case"cut":case"paste":x=$p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Xc;break;case"toggle":case"beforetoggle":x=g5}var b=(a&4)!==0,E=!b&&(t==="scroll"||t==="scrollend"),p=b?g!==null?g+"Capture":null:g;b=[];for(var u=s,f;u!==null;){var L=u;if(f=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||f===null||p===null||(L=Pi(u,p),L!=null&&b.push(cn(u,L,f))),E)break;u=u.return}0<b.length&&(g=new x(g,y,null,r,v),k.push({event:g,listeners:b}))}}if((a&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",g&&r!==Fl&&(y=r.relatedTarget||r.fromElement)&&(Se(y)||y[ii]))break t;if((x||g)&&(g=v.window===v?v:(g=v.ownerDocument)?g.defaultView||g.parentWindow:window,x?(y=r.relatedTarget||r.toElement,x=s,y=y?Se(y):null,y!==null&&(E=gn(y),b=y.tag,y!==E||b!==5&&b!==27&&b!==6)&&(y=null)):(x=null,y=s),x!==y)){if(b=Gc,L="onMouseLeave",p="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(b=Xc,L="onPointerLeave",p="onPointerEnter",u="pointer"),E=x==null?g:Ni(x),f=y==null?g:Ni(y),g=new b(L,u+"leave",x,r,v),g.target=E,g.relatedTarget=f,L=null,Se(v)===s&&(b=new b(p,u+"enter",y,r,v),b.target=f,b.relatedTarget=E,L=b),E=L,x&&y)a:{for(b=uf,p=x,u=y,f=0,L=p;L;L=b(L))f++;L=0;for(var W=u;W;W=b(W))L++;for(;0<f-L;)p=b(p),f--;for(;0<L-f;)u=b(u),L--;for(;f--;){if(p===u||u!==null&&p===u.alternate){b=p;break a}p=b(p),u=b(u)}b=null}else b=null;x!==null&&E0(k,g,x,b,!1),y!==null&&E!==null&&E0(k,E,y,b,!0)}}t:{if(g=s?Ni(s):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var _=Rc;else if(Jc(g))if(Vh)_=w5;else{_=m5;var B=M5}else x=g.nodeName,!x||x.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?s&&O1(s.elementType)&&(_=Rc):_=y5;if(_&&(_=_(t,s))){Ah(k,_,r,v);break t}B&&B(t,g,s),t==="focusout"&&s&&g.type==="number"&&s.memoizedProps.value!=null&&Rl(g,"number",g.value)}switch(B=s?Ni(s):window,t){case"focusin":(Jc(B)||B.contentEditable==="true")&&(ze=B,Il=s,Zi=null);break;case"focusout":Zi=Il=ze=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,Pc(k,r,v);break;case"selectionchange":if(b5)break;case"keydown":case"keyup":Pc(k,r,v)}var V;if(G1)t:{switch(t){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Ve?Hh(t,r)&&(D="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(Wh&&r.locale!=="ko"&&(Ve||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ve&&(V=jh()):(wr=v,Z1="value"in wr?wr.value:wr.textContent,Ve=!0)),B=Fo(s,D),0<B.length&&(D=new Yc(D,t,null,r,v),k.push({event:D,listeners:B}),V?D.data=V:(V=Sh(r),V!==null&&(D.data=V)))),(V=f5?v5(t,r):k5(t,r))&&(D=Fo(s,"onBeforeInput"),0<D.length&&(B=new Yc("onBeforeInput","beforeinput",null,r,v),k.push({event:B,listeners:D}),B.data=V)),cf(k,t,s,r,v)}Bs(k,a)})}function cn(t,a,r){return{instance:t,listener:a,currentTarget:r}}function Fo(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Pi(t,r),i!=null&&e.unshift(cn(t,i,n)),i=Pi(t,a),i!=null&&e.push(cn(t,i,n))),t.tag===3)return e;t=t.return}return[]}function uf(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function E0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var l=r,h=l.alternate,s=l.stateNode;if(l=l.tag,h!==null&&h===e)break;l!==5&&l!==26&&l!==27||s===null||(h=s,i?(s=Pi(r,n),s!=null&&o.unshift(cn(r,s,h))):i||(s=Pi(r,n),s!=null&&o.push(cn(r,s,h)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var sf=/\r\n?/g,gf=/\u0000|\uFFFD/g;function D0(t){return(typeof t=="string"?t:""+t).replace(sf,`
`).replace(gf,"")}function Ws(t,a){return a=D0(a),D0(t)===a}function $(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||Re(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&Re(t,""+e);break;case"className":In(t,"class",e);break;case"tabIndex":In(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":In(t,r,e);break;case"style":bh(t,e,n);break;case"data":if(a!=="object"){In(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=po(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&$(t,a,"name",i.name,i,null),$(t,a,"formEncType",i.formEncType,i,null),$(t,a,"formMethod",i.formMethod,i,null),$(t,a,"formTarget",i.formTarget,i,null)):($(t,a,"encType",i.encType,i,null),$(t,a,"method",i.method,i,null),$(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=po(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=tr);break;case"onScroll":e!=null&&Z("scroll",t);break;case"onScrollEnd":e!=null&&Z("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(m(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(m(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=po(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":Z("beforetoggle",t),Z("toggle",t),go(t,"popover",e);break;case"xlinkActuate":Qa(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Qa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Qa(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Qa(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Qa(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Qa(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Qa(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Qa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Qa(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":go(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=qp.get(r)||r,go(t,r,e))}}function w1(t,a,r,e,i,n){switch(r){case"style":bh(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(m(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(m(60));t.innerHTML=r}}break;case"children":typeof e=="string"?Re(t,e):(typeof e=="number"||typeof e=="bigint")&&Re(t,""+e);break;case"onScroll":e!=null&&Z("scroll",t);break;case"onScrollEnd":e!=null&&Z("scrollend",t);break;case"onClick":e!=null&&(t.onclick=tr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lh.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[Rt]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):go(t,r,e)}}}function Nt(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",t),Z("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:$(t,a,n,o,r,null)}}i&&$(t,a,"srcSet",r.srcSet,r,null),e&&$(t,a,"src",r.src,r,null);return;case"input":Z("invalid",t);var l=n=o=i=null,h=null,s=null;for(e in r)if(r.hasOwnProperty(e)){var v=r[e];if(v!=null)switch(e){case"name":i=v;break;case"type":o=v;break;case"checked":h=v;break;case"defaultChecked":s=v;break;case"value":n=v;break;case"defaultValue":l=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(m(137,a));break;default:$(t,a,e,v,r,null)}}yh(t,n,l,h,s,o,i,!1);return;case"select":Z("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(l=r[i],l!=null))switch(i){case"value":n=l;break;case"defaultValue":o=l;break;case"multiple":e=l;default:$(t,a,i,l,r,null)}a=n,r=o,t.multiple=!!e,a!=null?Ze(t,!!e,a,!1):r!=null&&Ze(t,!!e,r,!0);return;case"textarea":Z("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(l=r[o],l!=null))switch(o){case"value":e=l;break;case"defaultValue":i=l;break;case"children":n=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(m(91));break;default:$(t,a,o,l,r,null)}Ch(t,e,i,n);return;case"option":for(h in r)r.hasOwnProperty(h)&&(e=r[h],e!=null)&&(h==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":$(t,a,h,e,r,null));return;case"dialog":Z("beforetoggle",t),Z("toggle",t),Z("cancel",t),Z("close",t);break;case"iframe":case"object":Z("load",t);break;case"video":case"audio":for(e=0;e<dn.length;e++)Z(dn[e],t);break;case"image":Z("error",t),Z("load",t);break;case"details":Z("toggle",t);break;case"embed":case"source":case"link":Z("error",t),Z("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(s in r)if(r.hasOwnProperty(s)&&(e=r[s],e!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:$(t,a,s,e,r,null)}return;default:if(O1(a)){for(v in r)r.hasOwnProperty(v)&&(e=r[v],e!==void 0&&w1(t,a,v,e,r,void 0));return}}for(l in r)r.hasOwnProperty(l)&&(e=r[l],e!=null&&$(t,a,l,e,r,null))}function pf(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,l=null,h=null,s=null,v=null;for(x in r){var k=r[x];if(r.hasOwnProperty(x)&&k!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":h=k;default:e.hasOwnProperty(x)||$(t,a,x,null,e,k)}}for(var g in e){var x=e[g];if(k=r[g],e.hasOwnProperty(g)&&(x!=null||k!=null))switch(g){case"type":n=x;break;case"name":i=x;break;case"checked":s=x;break;case"defaultChecked":v=x;break;case"value":o=x;break;case"defaultValue":l=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(m(137,a));break;default:x!==k&&$(t,a,g,x,e,k)}}Jl(t,o,l,h,s,v,n,i);return;case"select":x=o=l=g=null;for(n in r)if(h=r[n],r.hasOwnProperty(n)&&h!=null)switch(n){case"value":break;case"multiple":x=h;default:e.hasOwnProperty(n)||$(t,a,n,null,e,h)}for(i in e)if(n=e[i],h=r[i],e.hasOwnProperty(i)&&(n!=null||h!=null))switch(i){case"value":g=n;break;case"defaultValue":l=n;break;case"multiple":o=n;default:n!==h&&$(t,a,i,n,e,h)}a=l,r=o,e=x,g!=null?Ze(t,!!r,g,!1):!!e!=!!r&&(a!=null?Ze(t,!!r,a,!0):Ze(t,!!r,r?[]:"",!1));return;case"textarea":x=g=null;for(l in r)if(i=r[l],r.hasOwnProperty(l)&&i!=null&&!e.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:$(t,a,l,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":g=i;break;case"defaultValue":x=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:i!==n&&$(t,a,o,i,e,n)}wh(t,g,x);return;case"option":for(var y in r)g=r[y],r.hasOwnProperty(y)&&g!=null&&!e.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:$(t,a,y,null,e,g));for(h in e)g=e[h],x=r[h],e.hasOwnProperty(h)&&g!==x&&(g!=null||x!=null)&&(h==="selected"?t.selected=g&&typeof g!="function"&&typeof g!="symbol":$(t,a,h,g,e,x));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in r)g=r[b],r.hasOwnProperty(b)&&g!=null&&!e.hasOwnProperty(b)&&$(t,a,b,null,e,g);for(s in e)if(g=e[s],x=r[s],e.hasOwnProperty(s)&&g!==x&&(g!=null||x!=null))switch(s){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(m(137,a));break;default:$(t,a,s,g,e,x)}return;default:if(O1(a)){for(var E in r)g=r[E],r.hasOwnProperty(E)&&g!==void 0&&!e.hasOwnProperty(E)&&w1(t,a,E,void 0,e,g);for(v in e)g=e[v],x=r[v],!e.hasOwnProperty(v)||g===x||g===void 0&&x===void 0||w1(t,a,v,g,e,x);return}}for(var p in r)g=r[p],r.hasOwnProperty(p)&&g!=null&&!e.hasOwnProperty(p)&&$(t,a,p,null,e,g);for(k in e)g=e[k],x=r[k],!e.hasOwnProperty(k)||g===x||g==null&&x==null||$(t,a,k,g,e,x)}function O0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ff(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,l=i.duration;if(n&&l&&O0(o)){for(o=0,l=i.responseEnd,e+=1;e<r.length;e++){var h=r[e],s=h.startTime;if(s>l)break;var v=h.transferSize,k=h.initiatorType;v&&O0(k)&&(h=h.responseEnd,o+=v*(h<l?1:(l-s)/(h-s)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var C1=null,b1=null;function $o(t){return t.nodeType===9?t:t.ownerDocument}function U0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hs(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function B1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Nl=null;function vf(){var t=window.event;return t&&t.type==="popstate"?t===Nl?!1:(Nl=t,!0):(Nl=null,!1)}var Ss=typeof setTimeout=="function"?setTimeout:void 0,kf=typeof clearTimeout=="function"?clearTimeout:void 0,Z0=typeof Promise=="function"?Promise:void 0,xf=typeof queueMicrotask=="function"?queueMicrotask:typeof Z0<"u"?function(t){return Z0.resolve(null).then(t).catch(Lf)}:Ss;function Lf(t){setTimeout(function(){throw t})}function Zr(t){return t==="head"}function q0(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),ei(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")$i(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,$i(r);for(var n=r.firstChild;n;){var o=n.nextSibling,l=n.nodeName;n[kn]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&$i(t.ownerDocument.body);r=i}while(r);ei(a)}function G0(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function j1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":j1(r),D1(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Mf(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[kn])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=ya(t.nextSibling),t===null)break}return null}function mf(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=ya(t.nextSibling),t===null))return null;return t}function As(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ya(t.nextSibling),t===null))return null;return t}function W1(t){return t.data==="$?"||t.data==="$~"}function H1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function yf(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function ya(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var S1=null;function Y0(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return ya(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function X0(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function Vs(t,a,r){switch(a=$o(r),t){case"html":if(t=a.documentElement,!t)throw Error(m(452));return t;case"head":if(t=a.head,!t)throw Error(m(453));return t;case"body":if(t=a.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function $i(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);D1(t)}var wa=new Map,Q0=new Set;function Io(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var hr=Q.d;Q.d={f:wf,r:Cf,D:bf,C:Bf,L:jf,m:Wf,X:Sf,S:Hf,M:Af};function wf(){var t=hr.f(),a=f2();return t||a}function Cf(t){var a=ni(t);a!==null&&a.tag===5&&a.type==="form"?bu(a):hr.r(t)}var ci=typeof document>"u"?null:document;function zs(t,a,r){var e=ci;if(e&&typeof a=="string"&&a){var i=xa(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),Q0.has(i)||(Q0.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),Nt(a,"link",t),Wt(a),e.head.appendChild(a)))}}function bf(t){hr.D(t),zs("dns-prefetch",t,null)}function Bf(t,a){hr.C(t,a),zs("preconnect",t,a)}function jf(t,a,r){hr.L(t,a,r);var e=ci;if(e&&t&&a){var i='link[rel="preload"][as="'+xa(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+xa(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+xa(r.imageSizes)+'"]')):i+='[href="'+xa(t)+'"]';var n=i;switch(a){case"style":n=ri(t);break;case"script":n=hi(t)}wa.has(n)||(t=ot({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),wa.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(wn(n))||a==="script"&&e.querySelector(Cn(n))||(a=e.createElement("link"),Nt(a,"link",t),Wt(a),e.head.appendChild(a)))}}function Wf(t,a){hr.m(t,a);var r=ci;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+xa(e)+'"][href="'+xa(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=hi(t)}if(!wa.has(n)&&(t=ot({rel:"modulepreload",href:t},a),wa.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Cn(n)))return}e=r.createElement("link"),Nt(e,"link",t),Wt(e),r.head.appendChild(e)}}}function Hf(t,a,r){hr.S(t,a,r);var e=ci;if(e&&t){var i=Ue(e).hoistableStyles,n=ri(t);a=a||"default";var o=i.get(n);if(!o){var l={loading:0,preload:null};if(o=e.querySelector(wn(n)))l.loading=5;else{t=ot({rel:"stylesheet",href:t,"data-precedence":a},r),(r=wa.get(n))&&wd(t,r);var h=o=e.createElement("link");Wt(h),Nt(h,"link",t),h._p=new Promise(function(s,v){h.onload=s,h.onerror=v}),h.addEventListener("load",function(){l.loading|=1}),h.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Co(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:l},i.set(n,o)}}}function Sf(t,a){hr.X(t,a);var r=ci;if(r&&t){var e=Ue(r).hoistableScripts,i=hi(t),n=e.get(i);n||(n=r.querySelector(Cn(i)),n||(t=ot({src:t,async:!0},a),(a=wa.get(i))&&Cd(t,a),n=r.createElement("script"),Wt(n),Nt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function Af(t,a){hr.M(t,a);var r=ci;if(r&&t){var e=Ue(r).hoistableScripts,i=hi(t),n=e.get(i);n||(n=r.querySelector(Cn(i)),n||(t=ot({src:t,async:!0,type:"module"},a),(a=wa.get(i))&&Cd(t,a),n=r.createElement("script"),Wt(n),Nt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function K0(t,a,r,e){var i=(i=jr.current)?Io(i):null;if(!i)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=ri(r.href),r=Ue(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=ri(r.href);var n=Ue(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(wn(t)))&&!n._p&&(o.instance=n,o.state.loading=5),wa.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},wa.set(t,r),n||Vf(i,t,r,o.state))),a&&e===null)throw Error(m(528,""));return o}if(a&&e!==null)throw Error(m(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=hi(r),r=Ue(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function ri(t){return'href="'+xa(t)+'"'}function wn(t){return'link[rel="stylesheet"]['+t+"]"}function _s(t){return ot({},t,{"data-precedence":t.precedence,precedence:null})}function Vf(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),Nt(a,"link",r),Wt(a),t.head.appendChild(a))}function hi(t){return'[src="'+xa(t)+'"]'}function Cn(t){return"script[async]"+t}function J0(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+xa(r.href)+'"]');if(e)return a.instance=e,Wt(e),e;var i=ot({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Wt(e),Nt(e,"style",i),Co(e,r.precedence,t),a.instance=e;case"stylesheet":i=ri(r.href);var n=t.querySelector(wn(i));if(n)return a.state.loading|=4,a.instance=n,Wt(n),n;e=_s(r),(i=wa.get(i))&&wd(e,i),n=(t.ownerDocument||t).createElement("link"),Wt(n);var o=n;return o._p=new Promise(function(l,h){o.onload=l,o.onerror=h}),Nt(n,"link",e),a.state.loading|=4,Co(n,r.precedence,t),a.instance=n;case"script":return n=hi(r.src),(i=t.querySelector(Cn(n)))?(a.instance=i,Wt(i),i):(e=r,(i=wa.get(n))&&(e=ot({},r),Cd(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),Wt(i),Nt(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(m(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,Co(e,r.precedence,t));return a.instance}function Co(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var l=e[o];if(l.dataset.precedence===a)n=l;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function wd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function Cd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var bo=null;function R0(t,a,r){if(bo===null){var e=new Map,i=bo=new Map;i.set(r,e)}else i=bo,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[kn]||n[zt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var l=e.get(o);l?l.push(n):e.set(o,[n])}}return e}function F0(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function zf(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Ts(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _f(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=ri(e.href),n=a.querySelector(wn(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=Po.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,Wt(n);return}n=a.ownerDocument||a,e=_s(e),(i=wa.get(i))&&wd(e,i),n=n.createElement("link"),Wt(n);var o=n;o._p=new Promise(function(l,h){o.onload=l,o.onerror=h}),Nt(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Po.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var El=0;function Tf(t,a){return t.stylesheets&&t.count===0&&Bo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&Bo(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&El===0&&(El=62500*ff());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bo(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>El?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function Po(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var t2=null;function Bo(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,t2=new Map,a.forEach(Nf,t),t2=null,Po.call(t))}function Nf(t,a){if(!(a.state.loading&4)){var r=t2.get(t);if(r)var e=r.get(null);else{r=new Map,t2.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=Po.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var hn={$$typeof:Pa,Provider:null,Consumer:null,_currentValue:$r,_currentValue2:$r,_threadCount:0};function Ef(t,a,r,e,i,n,o,l,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.hiddenUpdates=cl(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Ns(t,a,r,e,i,n,o,l,h,s,v,k){return t=new Ef(t,a,r,o,h,s,v,k,l),a=1,n===!0&&(a|=24),n=ea(3,null,null,a),t.current=n,n.stateNode=t,a=F1(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},P1(n),t}function Es(t){return t?(t=Ne,t):Ne}function Ds(t,a,r,e,i,n){i=Es(i),e.context===null?e.context=i:e.pendingContext=i,e=Hr(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=Sr(t,e,a),r!==null&&(Jt(r,t,a),Gi(r,t,a))}function $0(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function bd(t,a){$0(t,a),(t=t.alternate)&&$0(t,a)}function Os(t){if(t.tag===13||t.tag===31){var a=he(t,67108864);a!==null&&Jt(a,t,67108864),bd(t,67108864)}}function I0(t){if(t.tag===13||t.tag===31){var a=da();a=N1(a);var r=he(t,a);r!==null&&Jt(r,t,a),bd(t,a)}}var a2=!0;function Df(t,a,r,e){var i=z.T;z.T=null;var n=Q.p;try{Q.p=2,Bd(t,a,r,e)}finally{Q.p=n,z.T=i}}function Of(t,a,r,e){var i=z.T;z.T=null;var n=Q.p;try{Q.p=8,Bd(t,a,r,e)}finally{Q.p=n,z.T=i}}function Bd(t,a,r,e){if(a2){var i=A1(e);if(i===null)Tl(t,a,e,r2,r),P0(t,e);else if(Zf(i,t,a,r,e))e.stopPropagation();else if(P0(t,e),a&4&&-1<Uf.indexOf(t)){for(;i!==null;){var n=ni(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=Jr(n.pendingLanes);if(o!==0){var l=n;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var h=1<<31-la(o);l.entanglements[1]|=h,o&=~h}Ea(n),(X&6)===0&&(Xo=na()+500,yn(0,!1))}}break;case 31:case 13:l=he(n,2),l!==null&&Jt(l,n,2),f2(),bd(n,2)}if(n=A1(e),n===null&&Tl(t,a,e,r2,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else Tl(t,a,e,null,r)}}function A1(t){return t=U1(t),jd(t)}var r2=null;function jd(t){if(r2=null,t=Se(t),t!==null){var a=gn(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=nh(a),t!==null)return t;t=null}else if(r===31){if(t=oh(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return r2=t,null}function Us(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bp()){case hh:return 2;case uh:return 8;case Ao:case jp:return 32;case sh:return 268435456;default:return 32}default:return 32}}var V1=!1,zr=null,_r=null,Tr=null,un=new Map,sn=new Map,mr=[],Uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P0(t,a){switch(t){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":un.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":sn.delete(a.pointerId)}}function Vi(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=ni(a),a!==null&&Os(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function Zf(t,a,r,e,i){switch(a){case"focusin":return zr=Vi(zr,t,a,r,e,i),!0;case"dragenter":return _r=Vi(_r,t,a,r,e,i),!0;case"mouseover":return Tr=Vi(Tr,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return un.set(n,Vi(un.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,sn.set(n,Vi(sn.get(n)||null,t,a,r,e,i)),!0}return!1}function Zs(t){var a=Se(t.target);if(a!==null){var r=gn(a);if(r!==null){if(a=r.tag,a===13){if(a=nh(r),a!==null){t.blockedOn=a,Nc(t.priority,function(){I0(r)});return}}else if(a===31){if(a=oh(r),a!==null){t.blockedOn=a,Nc(t.priority,function(){I0(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=A1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);Fl=e,r.target.dispatchEvent(e),Fl=null}else return a=ni(r),a!==null&&Os(a),t.blockedOn=r,!1;a.shift()}return!0}function th(t,a,r){jo(t)&&r.delete(a)}function qf(){V1=!1,zr!==null&&jo(zr)&&(zr=null),_r!==null&&jo(_r)&&(_r=null),Tr!==null&&jo(Tr)&&(Tr=null),un.forEach(th),sn.forEach(th)}function uo(t,a){t.blockedOn===a&&(t.blockedOn=null,V1||(V1=!0,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,qf)))}var so=null;function ah(t){so!==t&&(so=t,wt.unstable_scheduleCallback(wt.unstable_NormalPriority,function(){so===t&&(so=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(jd(e||r)===null)continue;break}var n=ni(r);n!==null&&(t.splice(a,3),a-=3,s1(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function ei(t){function a(h){return uo(h,t)}zr!==null&&uo(zr,t),_r!==null&&uo(_r,t),Tr!==null&&uo(Tr,t),un.forEach(a),sn.forEach(a);for(var r=0;r<mr.length;r++){var e=mr[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<mr.length&&(r=mr[0],r.blockedOn===null);)Zs(r),r.blockedOn===null&&mr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[Rt]||null;if(typeof n=="function")o||ah(r);else if(o){var l=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[Rt]||null)l=o.formAction;else if(jd(i)!==null)continue}else l=o.action;typeof l=="function"?r[e+1]=l:(r.splice(e,3),e-=3),ah(r)}}}function qs(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function Wd(t){this._internalRoot=t}x2.prototype.render=Wd.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(m(409));var r=a.current,e=da();Ds(r,e,t,a,null,null)};x2.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Ds(t.current,2,null,t,null,null),f2(),a[ii]=null}};function x2(t){this._internalRoot=t}x2.prototype.unstable_scheduleHydration=function(t){if(t){var a=kh();t={blockedOn:null,target:t,priority:a};for(var r=0;r<mr.length&&a!==0&&a<mr[r].priority;r++);mr.splice(r,0,t),r===0&&Zs(t)}};var rh=eh.version;if(rh!=="19.2.8")throw Error(m(527,rh,"19.2.8"));Q.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=Lp(a),t=t!==null?lh(t):null,t=t===null?null:t.stateNode,t};var Gf={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(zi=__REACT_DEVTOOLS_GLOBAL_HOOK__,!zi.isDisabled&&zi.supportsFiber))try{pn=zi.inject(Gf),oa=zi}catch{}var zi;L2.createRoot=function(t,a){if(!ih(t))throw Error(m(299));var r=!1,e="",i=zu,n=_u,o=Tu;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=Ns(t,1,!1,null,null,r,e,null,i,n,o,qs),t[ii]=a.current,yd(t),new Wd(a)};L2.hydrateRoot=function(t,a,r){if(!ih(t))throw Error(m(299));var e=!1,i="",n=zu,o=_u,l=Tu,h=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(l=r.onRecoverableError),r.formState!==void 0&&(h=r.formState)),a=Ns(t,1,!0,a,r??null,e,i,h,n,o,l,qs),a.context=Es(null),r=a.current,e=da(),e=N1(e),i=Hr(e),i.callback=null,Sr(r,i,e),r=e,a.current.lanes=r,vn(a,r),Ea(a),t[ii]=a.current,yd(t),new x2(a)};L2.version="19.2.8"});var Qs=gr((wv,Xs)=>{"use strict";function Ys(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ys)}catch(t){console.error(t)}}Ys(),Xs.exports=Gs()});var Ct=Xr(Ya()),C4=Xr(Qs());var ui=Xr(Ya(),1);var Hd=Xr(Ya(),1),Sd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ad=Hd.default.createContext&&Hd.default.createContext(Sd);var Yf=["attr","size","title"];function Xf(t,a){if(t==null)return{};var r,e,i=Qf(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function Qf(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function M2(){return M2=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},M2.apply(null,arguments)}function Ks(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function m2(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?Ks(Object(r),!0).forEach(function(e){Kf(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Ks(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function Kf(t,a,r){return(a=Jf(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function Jf(t){var a=Rf(t,"string");return typeof a=="symbol"?a:a+""}function Rf(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function Js(t){return t&&t.map((a,r)=>ui.default.createElement(a.tag,m2({key:r},a.attr),Js(a.child)))}function O(t){return a=>ui.default.createElement(Ff,M2({attr:m2({},t.attr)},a),Js(t.child))}function Ff(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=Xf(t,Yf),l=i||r.size||"1em",h;return r.className&&(h=r.className),t.className&&(h=(h?h+" ":"")+t.className),ui.default.createElement("svg",M2({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:h,style:m2(m2({color:t.color||r.color},r.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),n&&ui.default.createElement("title",null,n),t.children)};return Ad!==void 0?ui.default.createElement(Ad.Consumer,null,r=>a(r)):a(Sd)}function Rs(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function Fs(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function $s(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function Is(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function Ps(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 14 4 9l5-5"},child:[]},{tag:"path",attr:{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"},child:[]}]})(t)}function tg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function ag(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function rg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function eg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function ig(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function ng(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},child:[]},{tag:"path",attr:{d:"M3 3v5h5"},child:[]}]})(t)}function og(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function lg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function dg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function cg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function hg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function ug(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function sg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function gg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function pg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function fg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function vg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function kg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function xg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function Lg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(t)}function Mg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function mg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function yg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function wg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function Cg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 11-5-5-5 5"},child:[]},{tag:"path",attr:{d:"m17 18-5-5-5 5"},child:[]}]})(t)}function bg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m7 6 5 5 5-5"},child:[]},{tag:"path",attr:{d:"m7 13 5 5 5-5"},child:[]}]})(t)}function Bg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function jg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function Wg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 6 9 17l-5-5"},child:[]}]})(t)}function Hg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function Sg(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]}]})(t)}function Ag(t){return O({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var Vg=pg,y2=Fs,zg=sg,Vd=ug,_g=vg,Tg=kg,Ng=eg,w2=$s,Eg=Mg,Dg=fg,bn=lg,Og=Wg,Ug=yg,si=wg,zd=tg,Zg=mg,_d=ag,Td=Bg,C2=jg,qg=Cg,Gg=bg,Bn=og;var gi=Rs,Nd=gg,Yg=hg,Xg=dg,Qg=cg,b2=Ag,Kg=ig,Jg=Hg,Rg=Is,Fg=rg,B2=Lg,$g=xg,Ig=Sg,Ed=Ps,Dd=ng;var gt=Xr(Ya());var j=Xr(Ya());var Pg={member:w2,coworker:Rg,admin_staff:Tg,leader:Fg,pastor:_g,admin:Ng},t4=["leader","pastor","admin"],Od=[{id:"work",label:"工作日誌",Icon:Vg,href:"work.html",roles:["pastor","admin_staff","admin"]},{id:"serve",label:"服事管理",Icon:y2,href:""},{id:"venue",label:"場地預約",Icon:Jg,href:""}],$f=t=>{let a=String(t||"").trim();return/^[\u4e00-\u9fff]+$/.test(a)?a.length===4?a.slice(2):a.length>=2&&a.length<=3?a.slice(1):a:a},a4=["pastor","admin_staff","admin"],r4=(t,a)=>!t.roles||t.roles.includes(a),If=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},e4=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},i4=({active:t,shell:a})=>{let[r,e]=(0,j.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(y=>{let b=!y;try{localStorage.setItem("tbcSidebarCollapsed",b?"1":"0")}catch{}return b}),[n,o]=(0,j.useState)(!1),[l,h]=(0,j.useState)(""),s=(0,j.useRef)(null),v=a.identity||{name:"",role:"member",status:"loading"},k=Pg[v.role]||w2,g=t4.includes(v.role),x=y=>{h(`${y} 尚未開放`),clearTimeout(s.current),s.current=setTimeout(()=>h(""),2200)};return j.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},j.default.createElement("div",{className:"flex flex-col"},j.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},j.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},j.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},j.default.createElement(b2,{size:20,strokeWidth:2})),r&&j.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},j.default.createElement(Vd,{size:18}))),!r&&j.default.createElement(j.default.Fragment,null,j.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),j.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},j.default.createElement(Vd,{size:18})))),j.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},Od.map(y=>{let b=t===y.id,E=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${b?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,p=j.default.createElement(j.default.Fragment,null,j.default.createElement(y.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&j.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},y.label));return y.href?b?j.default.createElement("div",{key:y.id,className:E,title:y.label,"aria-current":"page"},p):j.default.createElement("a",{key:y.id,href:y.href,className:E,title:y.label},p):j.default.createElement("button",{key:y.id,type:"button",onClick:()=>x(y.label),className:E,title:y.label},p)}))),j.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},j.default.createElement("button",{type:"button",onClick:()=>o(y=>!y),"aria-haspopup":"menu","aria-expanded":n,className:`tbc-sb-user flex items-center rounded-full transition-colors ${r?"justify-center w-12 h-12 mx-auto bg-slate-100 hover:bg-slate-200":"gap-3 px-4 h-12 w-full hover:bg-slate-100"}`},r?j.default.createElement("span",{className:"text-[13px] text-slate-900 truncate max-w-full px-1"},$f(v.name)):j.default.createElement(j.default.Fragment,null,j.default.createElement(k,{size:20,strokeWidth:1.75,className:`shrink-0 ${g?"text-amber-500":"text-slate-500"}`}),j.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},v.name))),n&&j.default.createElement(j.default.Fragment,null,j.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),j.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},j.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},j.default.createElement(zg,{size:18,strokeWidth:1.75}),"登出")))),l&&j.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},l))},n4=({supabase:t,notice:a})=>{let[r,e]=(0,j.useState)(!1),[i,n]=(0,j.useState)(""),[o,l]=(0,j.useState)(""),[h,s]=(0,j.useState)(!1),[v,k]=(0,j.useState)(""),g=async y=>{if(y.preventDefault(),!i.trim()||!o||h)return;s(!0),k("");let{error:b}=await t.auth.signInWithPassword({email:If(i),password:o});s(!1),b&&k("帳號或密碼不正確，請再試一次")},x="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return j.default.createElement("form",{onSubmit:g,className:"w-full max-w-sm mx-auto space-y-3"},j.default.createElement("input",{value:i,onChange:y=>n(y.target.value),placeholder:"帳號",autoComplete:"username",className:x}),j.default.createElement("div",{className:"relative"},j.default.createElement("input",{type:r?"text":"password",value:o,onChange:y=>l(y.target.value),placeholder:"密碼",autoComplete:"current-password",className:x+" pr-12"}),j.default.createElement("button",{type:"button",onClick:()=>e(y=>!y),title:r?"隱藏密碼":"顯示密碼","aria-label":r?"隱藏密碼":"顯示密碼",className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"},r?j.default.createElement(B2,{size:18}):j.default.createElement($g,{size:18}))),(v||a)&&j.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},j.default.createElement(si,{size:16}),v||a),j.default.createElement("button",{type:"submit",disabled:h||!i.trim()||!o,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},h?"登入中…":"登入"))},o4=({shell:t})=>{let a=t.identity||{},r=Pg[a.role]||w2,e=t4.includes(a.role);return j.default.createElement("div",{className:"flex flex-col items-center gap-3 mt-14"},j.default.createElement("p",{className:"text-sm text-slate-500"},"準備好了，開始或",j.default.createElement("button",{type:"button",onClick:t.onLogout,className:"tbc-logout ml-0.5 text-indigo-600 hover:text-indigo-700 underline underline-offset-4"},"登出")))};var Pf=({shell:t})=>{let[a,r]=(0,gt.useState)(""),e=(0,gt.useRef)(null),i=t.identity||{},n=Od.filter(l=>r4(l,i.role)),o=l=>{r(`${l} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return gt.default.createElement("div",{className:"relative h-[100dvh] w-full bg-white overflow-hidden"},gt.default.createElement("main",{className:"h-full overflow-auto custom-scrollbar"},gt.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},gt.default.createElement("div",{className:"text-center mb-14"},gt.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),gt.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),gt.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(l=>{let h=gt.default.createElement(gt.default.Fragment,null,gt.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},gt.default.createElement(l.Icon,{size:40,strokeWidth:1.75})),gt.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},l.label)),s="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return l.href?gt.default.createElement("a",{key:l.id,href:l.href,className:s},h):gt.default.createElement("button",{key:l.id,type:"button",onClick:()=>o(l.label),className:s},h)})),gt.default.createElement(o4,{shell:t}))),a&&gt.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},l4=Pf;var d=Xr(Ya());var Zd=["日","一","二","三","四","五","六"],d4={m:15,l:18},Ud=["pastor","admin_staff"],c4=[{id:"title",label:"工作摘要",locked:!0,sortable:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"派工",sortable:!0,w:t=>`${Math.ceil(t*4+22)}px`,min:t=>Math.ceil(t*4+22)},{id:"doer",label:"執行",sortable:!0,w:t=>`${Math.ceil(t*4+22)}px`,min:t=>Math.ceil(t*4+22)},{id:"status",label:"狀態",sortable:!0,w:t=>`${Math.ceil(t*.85*4+100)}px`,min:t=>Math.ceil(t*.85*4+100)},{id:"date",label:"日期",sortable:!0,w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(150px,1fr)",min:150},{id:"hours",label:"工時",sortable:!0,w:t=>`${Math.ceil(t*4.8+24)}px`,min:t=>Math.ceil(t*4.8+24)},{id:"priority",label:"優先順序",sortable:!0,w:t=>`${Math.ceil(t*.85*4+52)}px`,min:t=>Math.ceil(t*.85*4+52)},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],tv="Asia/Taipei",h4=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:tv,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},W2=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},x4=t=>new Date(t).toISOString().slice(0,10),j2=(t,a)=>x4(W2(t)+a*864e5),L4=(t,a)=>Math.round((W2(t)-W2(a))/864e5),M4=t=>new Date(W2(t)).getUTCDay(),av=t=>j2(t,-((M4(t)+6)%7)),Da=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},rv=(t,a)=>{let r=L4(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${Da(t)}（${Zd[M4(t)]}）`,tag:e}},Et=t=>t?String(t).slice(0,5):"",u4=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Et(t.start_time).split(":").map(Number),[e,i]=Et(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n>0?n/60:null},ev=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Et(t.start_time).split(":").map(Number),[e,i]=Et(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*10)/10} 小時`},s4={urgent:0,normal:1,routine:2},iv={routine:"例行",normal:"普通",urgent:"緊急"},g4={routine:"bg-violet-50 border-violet-100 text-violet-600",normal:"bg-slate-50 border-slate-200 text-slate-500",urgent:"bg-red-50 border-red-100 text-red-600"},nv={routine:"normal",normal:"urgent",urgent:"routine"},jn=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的工作"],["not your item","只有派工者可以修改這筆工作，負責人只能改狀態"],["nothing to confirm","這筆已經不是「待確認」狀態"],["nothing to return","這筆已經不是「待確認」狀態"],["assignee is not allowed","負責人必須是有權限的同工"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期的任務固定在最上面，不能搬移"],["item not in your list","這筆不在你的清單裡"],["item not found or canceled","這筆工作已被取消或不存在"],["more than one member record","這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號"],["no member record","找不到這個帳號對應的同工資料"],["no permission","沒有使用權限"],["permission denied","沒有使用權限"],["dates are required","日期必填"],["weekly rule needs","每週重複請至少選一個星期"],["monthly rule needs","每月重複請選幾號，或勾「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個週期工作"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},ov=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>Zd[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 號`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},p4=({person:t,strong:a})=>d.default.createElement("span",{className:`truncate max-w-full ${a?"font-bold text-slate-900":"text-slate-700"}`},t&&t.name||"（未知）"),f4=({id:t,options:a,selected:r,multi:e,onChange:i,bad:n,className:o=""})=>{let[l,h]=(0,d.useState)(!1),s=a.filter(k=>r.has(k.id)).map(k=>k.label),v=k=>{if(!e){i(new Set([k])),h(!1);return}let g=new Set(r);g.has(k)?g.delete(k):g.add(k),i(g)};return d.default.createElement("div",{className:`relative ${o}`},d.default.createElement("button",{id:t,type:"button",onClick:()=>h(k=>!k),className:`tbc-pick w-full flex items-center justify-between gap-2 bg-slate-50 border rounded-lg px-3 py-2.5 text-left outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${n?"border-red-400 ring-2 ring-red-200":"border-slate-200"}`},d.default.createElement("span",{className:`truncate ${s.length?"text-slate-900":"text-slate-400"}`},s.length?s.join("、"):"請選擇"),d.default.createElement(C2,{size:16,className:"text-slate-400 shrink-0"})),l&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-[110]",onClick:()=>h(!1)}),d.default.createElement("div",{className:"tbc-pick-menu absolute left-0 right-0 top-full mt-1 z-[120] bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in"},a.map(k=>d.default.createElement("label",{key:k.id,className:"flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 cursor-pointer select-none"},d.default.createElement("input",{type:e?"checkbox":"radio",checked:r.has(k.id),onChange:()=>v(k.id),className:"accent-indigo-600"}),k.label)))))},v4=({value:t,placeholder:a,canEdit:r,onSave:e,className:i="",centerEmpty:n})=>{let[o,l]=(0,d.useState)(!1),[h,s]=(0,d.useState)(t||""),v=(0,d.useRef)(!1);(0,d.useEffect)(()=>{o||s(t||"")},[t,o]);let k=async()=>{if(l(!1),v.current){v.current=!1;return}let g=h.trim();g!==(t||"").trim()&&await e(g)};return o?d.default.createElement("input",{autoFocus:!0,value:h,onChange:g=>s(g.target.value),onBlur:k,onKeyDown:g=>{g.key==="Enter"&&g.currentTarget.blur(),g.key==="Escape"&&(v.current=!0,g.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):d.default.createElement("div",{onClick:()=>r&&l(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} ${!t&&n?"text-center":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?d.default.createElement("span",{className:`text-slate-300 ${n?"block text-center":""}`},a):null))},k4=({type:t,a,b:r,canEdit:e,children:i,onSave:n})=>{let[o,l]=(0,d.useState)(!1),[h,s]=(0,d.useState)(a||""),[v,k]=(0,d.useState)(r||""),g=(0,d.useRef)(!1);(0,d.useEffect)(()=>{o||(s(a||""),k(r||""))},[a,r,o]);let x=async()=>{if(l(!1),g.current){g.current=!1;return}(h!==(a||"")||v!==(r||""))&&await n(h,v)};if(!o)return d.default.createElement("div",{onClick:()=>e&&l(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let y="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return d.default.createElement("div",{tabIndex:-1,onBlur:b=>{b.currentTarget.contains(b.relatedTarget)||x()},onKeyDown:b=>{b.key==="Enter"&&x(),b.key==="Escape"&&(g.current=!0,l(!1))},className:"flex flex-col gap-1"},d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",d.default.createElement("input",{autoFocus:!0,type:t,value:h,onChange:b=>s(b.target.value),className:y})),d.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",d.default.createElement("input",{type:t,value:v,onChange:b=>k(b.target.value),className:y})))},lv=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o,people:l=[],meId:h})=>{let s=a||{},v=t==="editRule",k=t!=="create",[g,x]=(0,d.useState)(s.title||""),[y,b]=(0,d.useState)(s.start_date||e),[E,p]=(0,d.useState)(Et(s.start_time)),[u,f]=(0,d.useState)(s.end_date||s.start_date||e),[L,W]=(0,d.useState)(Et(s.end_time)),[_,B]=(0,d.useState)(s.priority||"normal"),[V,D]=(0,d.useState)(s.note||""),[S,$t]=(0,d.useState)(v?s.freq:t==="createRule"?r||"weekly":"none"),[Oa,ge]=(0,d.useState)(!!s.weekdays_only),[Sa,pi]=(0,d.useState)(s.week_days||[]),[bt,H2]=(0,d.useState)(s.month_day?String(s.month_day):""),[pe,Wn]=(0,d.useState)(!!s.month_last_day),[fe,S2]=(0,d.useState)(s.until_date||""),[Hn,Gd]=(0,d.useState)(s.is_active===void 0?!0:s.is_active),fi=(0,d.useMemo)(()=>{let H=new Set,ft=[],Ca=ua=>{H.has(ua.member_id)||(H.add(ua.member_id),ft.push({id:ua.member_id,label:ua.member_id===h?"我":ua.name}))};return l.filter(ua=>ua.member_id===h).forEach(Ca),l.filter(ua=>Ud.includes(ua.role)).forEach(Ca),h&&!H.has(h)&&ft.unshift({id:h,label:"我"}),ft},[l,h]),[ve,Sn]=(0,d.useState)(()=>new Set(h?[h]:[])),[vi,A2]=(0,d.useState)(()=>new Set(h?[h]:[])),[An,V2]=(0,d.useState)(""),[Ua,qr]=(0,d.useState)(""),pt=(H,ft)=>{V2(H),qr(ft),setTimeout(()=>{let Ca=document.getElementById(ft);if(Ca){Ca.scrollIntoView({block:"center",behavior:"smooth"});try{Ca.focus({preventScroll:!0})}catch{}}},0)},St="text-xs font-medium text-slate-500",Za="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",ke=H=>pi(ft=>ft.includes(H)?ft.filter(Ca=>Ca!==H):[...ft,H]),Vn=()=>{if(V2(""),qr(""),!g.trim())return pt("輸入工作摘要","tbc-f-title");if(t==="create"&&ve.size===0)return pt("請選擇派工的人","tbc-f-disp");if(t==="create"&&vi.size===0)return pt("請至少選一位執行的人","tbc-f-doer");if(!y)return pt("開始日期必填","tbc-f-start");if(S==="none"&&(!u||u<y))return pt("結束日期不能早於開始日期","tbc-f-end");if(S==="weekly"&&Sa.length===0)return pt("每週重複請至少選一個星期","tbc-f-week");if(S==="monthly"&&!bt&&!pe)return pt("每月重複請選幾號，或勾「每月最後一天」","tbc-f-month");if(S!=="none"&&fe&&fe<y)return pt("重複的結束日不能早於開始日","tbc-f-until");n({title:g.trim(),startDate:y,startTime:E||null,endDate:S==="none"?u:y,endTime:L||null,priority:_,note:V.trim()||null,repeat:S,weekdaysOnly:S==="daily"&&Oa,weekDays:S==="weekly"?Sa:[],monthDay:S==="monthly"&&bt?Number(bt):null,monthLast:S==="monthly"&&pe,untilDate:fe||null,isActive:Hn,assigneeIds:[...vi],dispatcherId:[...ve][0]||h})};return d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},v?d.default.createElement(d.default.Fragment,null,d.default.createElement(Bn,{className:"text-indigo-600",size:20})," 修改週期工作"):t==="createRule"?d.default.createElement(d.default.Fragment,null,d.default.createElement(Bn,{className:"text-indigo-600",size:20})," 新增週期工作"):d.default.createElement(d.default.Fragment,null,d.default.createElement(bn,{className:"text-indigo-600",size:20})," 新增")),d.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(gi,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"工作摘要",d.default.createElement("span",{className:"text-red-500"},"*")),d.default.createElement("input",{id:"tbc-f-title",autoFocus:!0,value:g,onChange:H=>x(H.target.value),placeholder:"簡短描述工作內容",className:`${Za} ${Ua==="tbc-f-title"?"!border-red-400 ring-2 ring-red-200":""}`})),t==="create"&&fi.length>0&&d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"派工",d.default.createElement("span",{className:"text-red-500"},"*")),d.default.createElement(f4,{id:"tbc-f-disp",options:fi,selected:ve,onChange:Sn,bad:Ua==="tbc-f-disp"})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"執行",d.default.createElement("span",{className:"text-red-500"},"*")),d.default.createElement(f4,{id:"tbc-f-doer",options:fi,selected:vi,multi:!0,onChange:A2,bad:Ua==="tbc-f-doer"}))),k&&d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"重複"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([H])=>!((v||t==="createRule")&&H==="none")).map(([H,ft])=>d.default.createElement("button",{key:H,type:"button",onClick:()=>$t(H),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${S===H?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},ft))),S==="daily"&&d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:Oa,onChange:H=>ge(H.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),S==="weekly"&&d.default.createElement("div",{id:"tbc-f-week",tabIndex:-1,className:`flex gap-2 pt-1 flex-wrap outline-none rounded-lg ${Ua==="tbc-f-week"?"ring-2 ring-red-200":""}`},[1,2,3,4,5,6,7].map(H=>d.default.createElement("button",{key:H,type:"button",onClick:()=>ke(H),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${Sa.includes(H)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},Zd[H%7]))),S==="monthly"&&d.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},d.default.createElement("select",{id:"tbc-f-month",value:bt,onChange:H=>H2(H.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},d.default.createElement("option",{value:""},"不指定號數"),Array.from({length:31},(H,ft)=>ft+1).map(H=>d.default.createElement("option",{key:H,value:H},H," 號"))),d.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},d.default.createElement("input",{type:"checkbox",checked:pe,onChange:H=>Wn(H.target.checked),className:"accent-indigo-600"})," 每月最後一天"),bt&&Number(bt)>28&&!pe&&d.default.createElement("span",{className:"text-xs text-amber-600"},bt," 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」"))),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"開始日期"),d.default.createElement("input",{id:"tbc-f-start",type:"date",value:y,onChange:H=>{b(H.target.value),u<H.target.value&&f(H.target.value)},className:`${Za} ${Ua==="tbc-f-start"?"!border-red-400 ring-2 ring-red-200":""}`})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"開始時間（選填）"),d.default.createElement("input",{type:"time",value:E,onChange:H=>p(H.target.value),className:Za})),S==="none"?d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"結束日期"),d.default.createElement("input",{id:"tbc-f-end",type:"date",value:u,min:y,onChange:H=>f(H.target.value),className:`${Za} ${Ua==="tbc-f-end"?"!border-red-400 ring-2 ring-red-200":""}`})):d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"結束日期（選填）"),d.default.createElement("input",{id:"tbc-f-until",type:"date",value:fe,min:y,onChange:H=>S2(H.target.value),className:Za})),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"結束時間（選填）"),d.default.createElement("input",{type:"time",value:L,onChange:H=>W(H.target.value),className:Za}))),d.default.createElement("div",{className:"grid grid-cols-2 gap-4"},d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"優先順序"),d.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["routine","例行"],["normal","普通"],["urgent","緊急"]].map(([H,ft])=>d.default.createElement("button",{key:H,type:"button",onClick:()=>B(H),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${_===H?H==="urgent"?"bg-white text-red-600 shadow-sm":H==="routine"?"bg-white text-violet-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},ft))))),d.default.createElement("div",{className:"space-y-1.5"},d.default.createElement("label",{className:St},"備註"),d.default.createElement("textarea",{value:V,onChange:H=>D(H.target.value),rows:2,className:Za})),An&&d.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},d.default.createElement(si,{size:16})," ",An)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},d.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:Vn,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},v?"儲存":S==="none"?"新增":"儲存"))))},dv=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,d.useState)(h4()),[o,l]=(0,d.useState)(null),[h,s]=(0,d.useState)([]),[v,k]=(0,d.useState)(""),[g,x]=(0,d.useState)([]),[y,b]=(0,d.useState)(!0),[E,p]=(0,d.useState)({type:"",text:""}),[u,f]=(0,d.useState)(null),[L,W]=(0,d.useState)("mine"),[_,B]=(0,d.useState)("today"),[V,D]=(0,d.useState)(""),[S,$t]=(0,d.useState)(""),[Oa,ge]=(0,d.useState)(new Set),[Sa,pi]=(0,d.useState)(""),[bt,H2]=(0,d.useState)({col:null,dir:"asc"}),pe=c=>H2(M=>M.col!==c?{col:c,dir:"asc"}:M.dir==="asc"?{col:c,dir:"desc"}:{col:null,dir:"asc"}),[Wn,fe]=(0,d.useState)(()=>{try{let c=localStorage.getItem("tbcWorkFont");return d4[c]?c:"m"}catch{return"m"}}),S2=c=>{fe(c);try{localStorage.setItem("tbcWorkFont",c)}catch{}},[Hn,Gd]=(0,d.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),fi=c=>Gd(M=>{let w=M.includes(c)?M.filter(A=>A!==c):[...M,c];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(w))}catch{}return w}),[ve,Sn]=(0,d.useState)(!1),[vi,A2]=(0,d.useState)(""),[An,V2]=(0,d.useState)(""),[Ua,qr]=(0,d.useState)(!1),[pt,St]=(0,d.useState)(null),[Za,ke]=(0,d.useState)(!1),[Vn,H]=(0,d.useState)(!1),ft=(0,d.useRef)(!1),[Ca,ua]=(0,d.useState)([]),[zn,b4]=(0,d.useState)([]),[Yd,Xd]=(0,d.useState)([]),z2=(0,d.useRef)("mine"),[ki,_n]=(0,d.useState)(null),[Gr,_2]=(0,d.useState)(null),[B4,Tn]=(0,d.useState)(null),[Qd,T2]=(0,d.useState)(null),qa=d4[Wn],ur=qa+3,It=i.date,Kd=(0,d.useRef)(null),Nn=(0,d.useRef)(0),Ga=(c,M)=>{p({type:c,text:M}),clearTimeout(Kd.current),Kd.current=setTimeout(()=>p({type:"",text:""}),3200)},vt=async(c,M)=>{let{data:w,error:A}=await a.rpc(c,M||{});if(A)throw A;return w},Dt=async(c,M)=>{try{let w=await c();return await N2(!0),Mi(),z2.current==="notice"&&tc(),M&&Ga("success",typeof M=="function"?M(w):M),w}catch(w){Ga("error",jn(w)),await N2(!0);return}},At=(0,d.useMemo)(()=>{if(_==="today")return{start:It,end:It};if(_==="month"){let[w,A]=It.split("-").map(Number);return{start:`${w}-${String(A).padStart(2,"0")}-01`,end:x4(Date.UTC(w,A,0))}}if(_==="week"){let w=av(It);return{start:w,end:j2(w,6)}}let c=V||It,M=S||c;return c<=M?{start:c,end:M}:{start:M,end:c}},[_,V,S,It]);(0,d.useEffect)(()=>{let c=setInterval(()=>n(M=>{let w=h4();return w.date===M.date&&w.time===M.time?M:w}),3e4);return()=>clearInterval(c)},[]);let j4=async()=>{try{let c=await vt("work_current_member"),M=await vt("work_list_people");return l(c),s(M||[]),ge(new Set((M||[]).filter(w=>Ud.includes(w.role)).map(w=>w.member_id))),k(""),!0}catch(c){return k(jn(c)),!1}},N2=async c=>{let M=++Nn.current;c||b(!0);try{let w=r&&r.fetchAllData?r.fetchAllData:C=>C(),A=C=>{if(C&&C.error)throw C.error;return C&&C.data||[]},F=A(await w(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).lte("start_date",At.end).gte("end_date",At.start))),Bt=A(await w(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).lte("end_date",It).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),Ot=new Set(F.map(C=>C.id)),kt=Bt.map(C=>C.id).filter(C=>!Ot.has(C)),Pt=[];if(kt.length&&(Pt=A(await w(()=>a.from("work_items").select("*, work_assignees(*)").in("id",kt)))),M!==Nn.current)return;let U=[];for(let C of[...F,...Pt]){let{work_assignees:rt,...sa}=C;for(let ta of rt||[])U.push({key:ta.id,item:{...sa,assigneeCount:(rt||[]).length},a:ta})}x(U)}catch(w){M===Nn.current&&Ga("error","讀取失敗："+jn(w))}finally{M===Nn.current&&!c&&b(!1)}};(0,d.useEffect)(()=>{j4()},[]),(0,d.useEffect)(()=>{o&&N2(!1)},[o,At.start,At.end,It]),(0,d.useEffect)(()=>{_==="custom"&&!V&&(D(It),$t(j2(It,6)))},[_]);let xi=(0,d.useMemo)(()=>{let c={};return h.forEach(M=>{c[M.member_id]={name:M.name,role:M.role}}),c},[h]),sv=o?xi[o]:null,E2=(0,d.useMemo)(()=>h.filter(c=>Ud.includes(c.role)),[h]),Jd=c=>{let M=c.a.status==="done",w=c.a.status==="awaiting_confirm",A=!!c.a.skipped_at||c.a.status==="on_hold",F=Et(c.item.end_time),Bt=!M&&!w&&!A&&(c.item.end_date<i.date||c.item.end_date===i.date&&F&&F<i.time);return{...c,done:M,awaiting:w,skipped:A,overdue:Bt,isMine:c.a.member_id===o,isCreator:c.item.creator_member_id===o,canManage:c.item.creator_member_id===o||c.item.entered_by===o,isRoutine:c.item.assigneeCount===1&&c.item.creator_member_id===c.a.member_id,isRecurring:!!c.item.recurring_rule_id,person:xi[c.a.member_id],dispatcher:xi[c.item.creator_member_id]}},{overdueRows:En,groups:D2,total:Rd}=(0,d.useMemo)(()=>{let c=g.map(Jd),M=Sa.trim().toLowerCase(),w=C=>!M||[C.item.title,C.item.note,C.person&&C.person.name,C.dispatcher&&C.dispatcher.name].some(rt=>rt&&String(rt).toLowerCase().includes(M)),A=c.filter(C=>(L==="mine"?C.isMine:L==="tome"?C.isMine&&!C.isCreator:L==="dispatched"?C.canManage:Oa.has(C.a.member_id))&&w(C)),F=A.filter(C=>C.overdue).sort((C,rt)=>(C.item.end_date+Et(C.item.end_time)).localeCompare(rt.item.end_date+Et(rt.item.end_time))||(C.person&&C.person.name||"").localeCompare(rt.person&&rt.person.name||"")),Bt=A.filter(C=>!C.overdue&&C.item.start_date<=At.end&&C.item.end_date>=At.start),Ot={};Bt.forEach(C=>{(Ot[C.item.start_date]=Ot[C.item.start_date]||[]).push(C)});let kt=Object.keys(Ot).sort().map(C=>{let rt=Ot[C].sort((ta,sr)=>{if(L!=="all")return ta.a.sort_order-sr.a.sort_order||String(ta.a.created_at).localeCompare(String(sr.a.created_at));let K=Et(ta.item.start_time)||"99:99",P=Et(sr.item.start_time)||"99:99";return K.localeCompare(P)||(ta.person&&ta.person.name||"").localeCompare(sr.person&&sr.person.name||"")}),sa=L==="mine"&&C>=At.start&&!M;return{date:C,rows:rt,canMove:sa}}),Pt=F,U=kt;if(bt.col){let C=bt.dir==="asc"?1:-1,rt=(K,P)=>String(K||"").localeCompare(String(P||""),"zh-Hant"),sa=K=>K.done?3:K.awaiting?2:K.skipped?1:0,sr={title:(K,P)=>rt(K.item.title,P.item.title),who:(K,P)=>rt(K.dispatcher&&K.dispatcher.name,P.dispatcher&&P.dispatcher.name),doer:(K,P)=>rt(K.person&&K.person.name,P.person&&P.person.name),status:(K,P)=>sa(K)-sa(P),priority:(K,P)=>(s4[K.item.priority]??1)-(s4[P.item.priority]??1),hours:(K,P)=>{let Yr=u4(K.item),yi=u4(P.item);return Yr==null&&yi==null?0:Yr==null?2*C:yi==null?-2*C:Yr-yi},date:(K,P)=>(K.item.start_date+Et(K.item.start_time)).localeCompare(P.item.start_date+Et(P.item.start_time))}[bt.col];if(sr){let K=P=>[...P].sort((Yr,yi)=>C*sr(Yr,yi));bt.col==="date"?(Pt=K(F),U=[...kt].sort((P,Yr)=>C*P.date.localeCompare(Yr.date))):(Pt=K(F),U=kt.map(P=>({...P,rows:K(P.rows)})))}U=U.map(K=>({...K,canMove:!1}))}return{overdueRows:Pt,groups:U,total:F.length+Bt.length}},[g,i,o,L,Oa,At,xi,Sa,bt]),O2=(0,d.useMemo)(()=>{let c={};return zn.forEach(M=>{M.item_id&&!M.read_at&&!(M.item_id in c)&&(c[M.item_id]=M.created_at)}),Yd.map(Jd).filter(M=>(M.canManage||M.isMine)&&M.item.id in c).map(M=>({...M,notice:!0})).sort((M,w)=>String(c[w.item.id]||"").localeCompare(String(c[M.item.id]||"")))},[Yd,zn,o,xi,i]),Dn=c4.filter(c=>c.locked||!Hn.includes(c.id)),W4=c=>typeof c.w=="function"?c.w(qa):c.w,H4=c=>typeof c.min=="function"?c.min(qa):c.min,Fd=`56px ${Dn.map(W4).join(" ")}`,S4=56+Dn.reduce((c,M)=>c+H4(M),0)+16,Li=(c,M,w)=>Dt(()=>{let A={...c.item,...M};return vt("work_update_routine",{p_item_id:A.id,p_title:A.title,p_start_date:A.start_date,p_start_time:A.start_time||null,p_end_date:A.end_date,p_end_time:A.end_time||null,p_priority:A.priority||"normal",p_note:A.note||null,p_meeting_flag:null})},w),A4=(c,M,w)=>{if(!M||!w){Ga("error","日期必填");return}let A=M,F=w;if(M!==c.item.start_date&&w===c.item.end_date&&(F=j2(M,L4(c.item.end_date,c.item.start_date))),F<A){Ga("error","結束日期不能早於開始日期");return}let Bt=!(A<=At.end&&F>=At.start);return Li(c,{start_date:A,end_date:F},Bt?`已改到 ${Da(A)}（目前顯示範圍看不到，切換範圍就會出現）`:null)},V4=(c,M,w)=>Li(c,{start_time:M||null,end_time:w||null}),z4=(c,M)=>{if(!M){Ga("error","任務名稱不能空白");return}return Li(c,{title:M})},gv=c=>Dt(()=>vt("work_complete",{p_item_id:c.item.id,p_note:null}),"已完成"),_4=(c,M)=>Dt(()=>vt("work_set_status",{p_item_id:c.item.id,p_status:M}),M==="done"&&c.item.creator_member_id!==o?"完成回報，等待派工者確認":"狀態已更新"),T4=c=>Dt(()=>vt("work_confirm",{p_assignee_id:c.a.id}),"已確認完成"),[U2,Z2]=(0,d.useState)(null),[$d,On]=(0,d.useState)(null),[Id,Pd]=(0,d.useState)(""),N4=c=>{Pd(""),On(c)},E4=async()=>{let c=$d;On(null),await Dt(()=>vt("work_return",{p_assignee_id:c.a.id,p_note:Id.trim()||null}),"已退回，送出提醒")},Un=(c,M)=>Dt(()=>vt("work_move",{p_item_id:c.item.id,p_where:M})),D4=c=>Dt(()=>vt("work_copy",{p_item_id:c.item.id}),"複製成功"),O4=c=>f({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或擱置不會刪除，標記「取消」並保留紀錄`,onConfirm:async()=>{f(null),await Dt(()=>vt("work_delete",{p_item_id:c.item.id}),M=>M==="canceled"?"這筆已有進度紀錄，已改為取消並保留紀錄":"已刪除")}}),pv=async()=>{let c=vi.trim();if(!c||Ua)return;qr(!0);let M=An||It,w=await Dt(()=>vt("work_create_routine",{p_title:c,p_start_date:M,p_end_date:M}));if(qr(!1),w){A2("");let A=M<=At.end&&M>=At.start;Ga("success",A?"已新增":`已新增到 ${Da(M)}（目前顯示範圍看不到，切換範圍就會出現）`)}},U4=async c=>{qr(!0);let M;if(pt.mode==="editRule")M=await Dt(()=>vt("work_update_rule",{p_rule_id:pt.rule.id,p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:c.isActive}),"週期工作已儲存（只影響之後產生的工作）"),M!==void 0&&await Zn();else if(c.repeat==="none"&&c.assigneeIds&&!(c.assigneeIds.length===1&&c.assigneeIds[0]===o&&c.dispatcherId===o)){let w=c.assigneeIds.some(A=>A!==o);M=await Dt(()=>vt("work_assign_create",{p_title:c.title,p_assignee_ids:c.assigneeIds,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_dispatcher_id:c.dispatcherId}),w?"派工完成，送出提醒":"已新增")}else c.repeat==="none"?M=await Dt(()=>vt("work_create_routine",{p_title:c.title,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已新增"):M=await Dt(()=>vt("work_create_rule",{p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已建立週期工作，之後會在凌晨自動出現在清單");qr(!1),M!==void 0&&St(null)},Zn=async()=>{try{let{data:c,error:M}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(M)throw M;ua(c||[])}catch(c){Ga("error","讀取週期工作失敗："+jn(c))}},Mi=async()=>{try{let c=await vt("work_notifications_list")||[];return b4(c),c}catch{return[]}};(0,d.useEffect)(()=>{if(!o)return;Mi();let c=setInterval(Mi,6e4);return()=>clearInterval(c)},[o]);let Z4=zn.filter(c=>!c.read_at),q2=new Set(Z4.map(c=>c.item_id||c.id)).size,q4=async()=>{try{await vt("work_notifications_read",{p_ids:null}),await Mi()}catch{}},tc=async c=>{let M=[...new Set((c||zn).filter(w=>!w.read_at).map(w=>w.item_id).filter(Boolean))];if(!M.length){Xd([]);return}try{let{data:w,error:A}=await a.from("work_items").select("*, work_assignees(*)").in("id",M).is("canceled_at",null);if(A)throw A;let F=[];for(let Bt of w||[]){let{work_assignees:Ot,...kt}=Bt;for(let Pt of Ot||[])F.push({key:Pt.id,item:{...kt,assigneeCount:(Ot||[]).length},a:Pt})}Xd(F)}catch(w){Ga("error","讀取提醒失敗："+jn(w))}},mi=async c=>{let M=z2.current;if(z2.current=c,W(c),c==="notice"){let w=await Mi();await tc(w)}else M==="notice"&&await q4()},ac=async()=>{ke(!0),await Zn()};(0,d.useEffect)(()=>{!pt&&ft.current&&(ft.current=!1,ac())},[pt]);let G4=async c=>{await Dt(()=>vt("work_update_rule",{p_rule_id:c.id,p_title:c.title,p_freq:c.freq,p_weekdays_only:c.weekdays_only,p_week_days:c.week_days,p_month_day:c.month_day,p_month_last_day:c.month_last_day,p_start_date:c.start_date,p_until_date:c.until_date,p_start_time:c.start_time,p_end_time:c.end_time,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:!c.is_active}),c.is_active?"已暫停":"已啟用")!==void 0&&await Zn()},Y4=c=>f({title:"警告",confirmText:"刪除",message:`確定刪除週期工作「${c.title}」？
清單中還沒開始的幾次會一併移除，已過去或已有進度的紀錄會保留`,onConfirm:async()=>{f(null),await Dt(()=>vt("work_delete_rule",{p_rule_id:c.id}),"週期工作已刪除")!==void 0&&await Zn()}}),X4=async(c,M)=>{let w=Gr;if(_2(null),T2(null),Tn(null),!w||w.date!==c.date||w.key===M.key)return;let A=c.rows.filter(kt=>!kt.overdue),F=A.findIndex(kt=>kt.key===w.key),Bt=A.findIndex(kt=>kt.key===M.key),Ot=c.rows.find(kt=>kt.key===w.key);!Ot||F<0||Bt<0||await Dt(()=>vt("work_move_to",{p_item_id:Ot.item.id,p_target_item_id:M.item.id,p_after:F<Bt}))},xe="flex items-center bg-slate-100 p-1 rounded-full shrink-0",ba=c=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,Ba=ki?[...En,...D2.flatMap(c=>c.rows)].find(c=>c.key===ki.key):null,qn=Ba?D2.find(c=>c.rows.some(M=>M.key===Ba.key)):null,G2=(c,M)=>{let w=c.canManage,A=c.isMine&&c.isRoutine,F=M?M.rows.filter(U=>!U.overdue):[],Bt=!!M&&M.canMove&&A&&!c.overdue,Ot=Qd===c.key&&Gr&&Gr.key!==c.key,kt=c.done||c.skipped,Pt=U=>{switch(U.id){case"title":return d.default.createElement("div",{key:U.id,className:"min-w-0 w-full flex items-start gap-1.5"},d.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},c.a.status==="pending"&&c.a.return_note&&d.default.createElement("button",{type:"button",onClick:()=>Z2(c),className:"tbc-return-tag inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-amber-200 bg-amber-50 text-amber-700 font-bold hover:brightness-95 cursor-pointer whitespace-nowrap"},d.default.createElement(Dd,{size:Math.round(qa*.8)}),"退回"),c.isRecurring&&d.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},d.default.createElement(Bn,{size:Math.round(qa*.95)})),c.overdue&&d.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},d.default.createElement(zd,{size:Math.round(qa*.8)})," 逾期")),d.default.createElement("div",{className:"min-w-0 flex-1"},d.default.createElement(v4,{value:c.item.title,placeholder:"工作摘要",canEdit:w,onSave:C=>z4(c,C),className:`font-medium ${kt?"text-slate-400 line-through":c.overdue?"text-red-600":"text-slate-900"}`})));case"who":return d.default.createElement("div",{key:U.id,className:"min-w-0"},d.default.createElement(p4,{person:c.dispatcher,size:ur}));case"doer":return d.default.createElement("div",{key:U.id,className:"min-w-0"},d.default.createElement(p4,{person:c.person,size:ur}));case"date":{let C=c.item.start_date!==c.item.end_date;return d.default.createElement("div",{key:U.id,className:`min-w-0 ${c.overdue?"text-red-600":"text-slate-700"}`},d.default.createElement(k4,{type:"date",a:c.item.start_date,b:c.item.end_date,canEdit:w,onSave:(rt,sa)=>A4(c,rt,sa)},C?`${Da(c.item.start_date)} → ${Da(c.item.end_date)}`:Da(c.item.start_date)))}case"time":{let C=Et(c.item.start_time),rt=Et(c.item.end_time);return d.default.createElement("div",{key:U.id,className:"min-w-0 text-slate-700"},d.default.createElement(k4,{type:"time",a:C,b:rt,canEdit:w,onSave:(sa,ta)=>V4(c,sa,ta)},C||rt?`${C||"—"} ~ ${rt||"—"}`:d.default.createElement("span",{className:"text-slate-300"},w?"時間設定":"")))}case"hours":return d.default.createElement("div",{key:U.id,className:"text-slate-500 text-[0.9em]"},ev(c.item)||"");case"priority":return d.default.createElement("div",{key:U.id},d.default.createElement("button",{type:"button",disabled:!w,onClick:()=>Li(c,{priority:nv[c.item.priority]||"normal"}),title:w?"點一下切換":"",className:`tbc-prio text-[0.75em] px-2 py-0.5 rounded border font-bold ${g4[c.item.priority]||g4.normal} ${w?"hover:brightness-95 cursor-pointer":"cursor-default"}`},iv[c.item.priority]||"普通"));case"note":return d.default.createElement("div",{key:U.id,className:"min-w-0 w-full"},d.default.createElement(v4,{value:c.item.note,placeholder:"新增備註",centerEmpty:!0,canEdit:w,onSave:C=>Li(c,{note:C||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let C=c.done?"done":c.awaiting?"awaiting":c.skipped?"on_hold":"pending",rt=C==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":C==="awaiting"?"bg-sky-50 border-sky-200 text-sky-700":C==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600",sa={pending:"待處理",done:"完成",on_hold:"擱置",awaiting:"待確認"}[C];return c.awaiting&&c.isCreator&&!c.isMine?d.default.createElement("div",{key:U.id,className:"flex items-center gap-1.5 tbc-review whitespace-nowrap"},d.default.createElement("button",{type:"button",onClick:()=>T4(c),className:"h-8 px-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},d.default.createElement(Og,{size:14}),"確認"),d.default.createElement("button",{type:"button",onClick:()=>N4(c),className:"h-8 px-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},d.default.createElement(Ed,{size:14}),"退回")):c.isMine?d.default.createElement("select",{key:U.id,value:C,onChange:ta=>_4(c,ta.target.value),"aria-label":"狀態",title:"點一下改變狀態",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${rt}`},d.default.createElement("option",{value:"pending"},"待處理"),d.default.createElement("option",{value:"done"},"完成"),d.default.createElement("option",{value:"on_hold"},"擱置"),C==="awaiting"&&d.default.createElement("option",{value:"awaiting",disabled:!0},"待確認")):d.default.createElement("span",{key:U.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${rt}`},sa)}default:return null}};return d.default.createElement("div",{key:c.key,draggable:Bt&&B4===c.key,onDragStart:U=>{_2({key:c.key,date:M.date}),U.dataTransfer.effectAllowed="move";try{U.dataTransfer.setData("text/plain",c.key)}catch{}},onDragOver:U=>{Gr&&M&&Gr.date===M.date&&!c.overdue&&(U.preventDefault(),Qd!==c.key&&T2(c.key))},onDrop:U=>{U.preventDefault(),M&&X4(M,c)},onDragEnd:()=>{_2(null),T2(null),Tn(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors
                    ${c.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Gr&&Gr.key===c.key?"opacity-40":""}
                    ${Ot?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:Fd}},d.default.createElement("div",{className:"flex items-center gap-0.5 px-2"},Bt?d.default.createElement("span",{onMouseDown:()=>Tn(c.key),onMouseUp:()=>Tn(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},d.default.createElement(Dg,{size:ur})):d.default.createElement("span",{style:{width:ur}}),w?d.default.createElement("button",{onClick:U=>{let C=U.currentTarget.getBoundingClientRect();_n({key:c.key,x:Math.min(C.left,window.innerWidth-220),y:Math.min(C.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},d.default.createElement(Eg,{size:ur})):d.default.createElement("span",{style:{width:ur+8}})),Dn.map(U=>{let C=U.id==="title"||U.id==="note";return d.default.createElement("div",{key:U.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${C?"[&>*]:w-full":"justify-center text-center"}`},Pt(U))}))};return d.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:qa}},d.default.createElement(i4,{active:"work",shell:e}),d.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},d.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},d.default.createElement("div",{className:"flex items-center gap-4 min-w-0"},d.default.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:qa*1.45}},"工作日誌"),d.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},d.default.createElement(Kg,{size:16,className:"text-slate-400 shrink-0"}),d.default.createElement("input",{type:"text",value:Sa,onChange:c=>pi(c.target.value),onKeyDown:c=>{c.key==="Escape"&&pi("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),Sa&&d.default.createElement("button",{type:"button",onClick:()=>pi(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},d.default.createElement(gi,{size:14})))),d.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},d.default.createElement("button",{onClick:()=>St({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},d.default.createElement(bn,{size:16}),"新增"),d.default.createElement("div",{className:xe},d.default.createElement("button",{onClick:ac,className:ba(!1)},d.default.createElement(bn,{size:14,className:"text-slate-500"}),"週期工作")),d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>Sn(c=>!c),className:`${xe} !p-1.5`},d.default.createElement("span",{className:ba(ve)},d.default.createElement(B2,{size:14,className:"text-slate-500"}),"隱藏")),ve&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Sn(!1)}),d.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},c4.filter(c=>!c.locked).map(c=>d.default.createElement("label",{key:c.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${c.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},d.default.createElement("input",{type:"checkbox",disabled:c.locked,checked:c.locked||!Hn.includes(c.id),onChange:()=>fi(c.id),className:"accent-indigo-600"}),c.label,c.locked&&d.default.createElement(Nd,{size:11})))))),d.default.createElement("div",{className:xe,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([c,M,w])=>d.default.createElement("button",{key:c,onClick:()=>S2(c),title:M,"aria-label":`文字${M}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${Wn===c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:w}},"A"))))),v?d.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},d.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},d.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},d.default.createElement(Nd,{size:30})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),d.default.createElement("p",{className:"text-slate-500 font-normal"},v),d.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧師、行政與管理員。"))):d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 relative z-[15] shrink-0 space-y-3"},d.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},(q2>0||L==="notice")&&d.default.createElement("button",{onClick:()=>mi("notice"),"aria-label":"提醒",title:"提醒",className:`tbc-bell relative h-11 w-11 rounded-full flex items-center justify-center transition-colors ${L==="notice"?"bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-200":"bg-slate-100 hover:bg-slate-200 text-slate-600"}`},d.default.createElement(Ig,{size:18}),q2>0&&d.default.createElement("span",{className:"tbc-bell-count absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[11px] leading-[18px] text-center font-bold"},q2)),d.default.createElement("div",{className:xe},d.default.createElement("button",{onClick:()=>mi("mine"),className:ba(L==="mine")},"我的"),d.default.createElement("button",{onClick:()=>mi("tome"),className:ba(L==="tome")},"派工給我"),d.default.createElement("button",{onClick:()=>mi("dispatched"),className:ba(L==="dispatched")},"我派工的"),d.default.createElement("button",{onClick:()=>mi("all"),className:ba(L==="all")},"全部")),L==="all"&&d.default.createElement("div",{className:"relative"},d.default.createElement("button",{onClick:()=>H(c=>!c),className:`${xe} !p-1.5`},d.default.createElement("span",{className:ba(Vn)},d.default.createElement(y2,{size:14,className:"text-slate-500"}),"人員（",Oa.size,"/",E2.length,"）")),Vn&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>H(!1)}),d.default.createElement("div",{className:"absolute left-0 top-full mt-2 z-40 w-56 max-h-80 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},d.default.createElement("div",{className:"flex gap-2 px-1 pb-2 mb-1 border-b border-slate-100"},d.default.createElement("button",{onClick:()=>ge(new Set(E2.map(c=>c.member_id))),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全選"),d.default.createElement("button",{onClick:()=>ge(new Set),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全不選")),E2.map(c=>d.default.createElement("label",{key:c.member_id,className:"flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none text-slate-700 hover:bg-slate-50 cursor-pointer"},d.default.createElement("input",{type:"checkbox",checked:Oa.has(c.member_id),onChange:()=>ge(M=>{let w=new Set(M);return w.has(c.member_id)?w.delete(c.member_id):w.add(c.member_id),w}),className:"accent-indigo-600"}),c.name))))),L!=="notice"&&d.default.createElement("div",{className:xe},d.default.createElement("button",{onClick:()=>B("today"),className:ba(_==="today")},"今日"),d.default.createElement("button",{onClick:()=>B("week"),className:ba(_==="week")},"本週"),d.default.createElement("button",{onClick:()=>B("month"),className:ba(_==="month")},"本月"),d.default.createElement("button",{onClick:()=>B("custom"),className:ba(_==="custom")},"自訂")),L!=="notice"&&_==="custom"&&d.default.createElement("div",{className:"flex items-center gap-2"},d.default.createElement("input",{type:"date",value:V,onChange:c=>D(c.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),d.default.createElement("span",{className:"text-slate-400"},"～"),d.default.createElement("input",{type:"date",value:S,min:V,onChange:c=>$t(c.target.value),className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),d.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},L==="notice"?d.default.createElement("span",null,"提醒的派工　共 ",O2.length," 筆"):d.default.createElement(d.default.Fragment,null,At.start===At.end?Da(At.start):`${Da(At.start)} ～ ${Da(At.end)}`,d.default.createElement("span",{className:"ml-3"},"共 ",Rd," 筆"))))),d.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},d.default.createElement("div",{className:"space-y-4",style:{minWidth:S4}},d.default.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:Fd}},d.default.createElement("span",{className:"py-2"}),Dn.map(c=>c.sortable?d.default.createElement("button",{key:c.id,type:"button",onClick:()=>pe(c.id),title:"點一下排序","aria-sort":bt.col===c.id?bt.dir==="asc"?"ascending":"descending":"none",className:`py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap font-medium inline-flex items-center justify-center gap-0.5 hover:bg-slate-200/70 transition-colors ${bt.col===c.id?"text-indigo-600":""}`},c.label,bt.col===c.id&&(bt.dir==="asc"?d.default.createElement(Td,{size:14}):d.default.createElement(C2,{size:14}))):d.default.createElement("span",{key:c.id,className:"py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap"},c.label))),L==="notice"?O2.length===0?d.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},"目前沒有提醒"):d.default.createElement("div",{className:"tbc-notice-list bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},O2.map(c=>G2(c,null))):y&&g.length===0?d.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):Rd===0?d.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},Sa.trim()?`找不到符合「${Sa.trim()}」的工作（只搜尋目前顯示的範圍）`:"新增一筆工作，開始記錄"):d.default.createElement(d.default.Fragment,null,En.length>0&&d.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},d.default.createElement(zd,{size:ur})," 逾期未完成 ",d.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},En.length)),En.map(c=>G2(c,null))),D2.map(c=>{let M=rv(c.date,It);return d.default.createElement("div",{key:c.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},d.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},d.default.createElement("span",{className:`font-bold ${M.tag==="今天"?"text-indigo-600":"text-slate-800"}`},M.text)),c.rows.map(w=>G2(w,c)))}))))),U2&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm",onClick:()=>Z2(null)},d.default.createElement("div",{className:"tbc-return-info bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in",onClick:c=>c.stopPropagation()},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},d.default.createElement(Dd,{size:20,className:"text-amber-600"}),"退回原因"),d.default.createElement("button",{"aria-label":"關閉",onClick:()=>Z2(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},d.default.createElement(gi,{size:20}))),d.default.createElement("div",{className:"p-5 space-y-2"},d.default.createElement("div",{className:"text-sm text-slate-500"},U2.item.title),d.default.createElement("div",{className:"tbc-return-reason text-slate-900 whitespace-pre-wrap"},U2.a.return_note)))),$d&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},d.default.createElement(Ed,{size:20,className:"text-indigo-600"}),"退回"),d.default.createElement("button",{onClick:()=>On(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},d.default.createElement(gi,{size:20}))),d.default.createElement("div",{className:"p-5 space-y-2"},d.default.createElement("label",{className:"text-xs font-medium text-slate-500"},"退回原因（選填）"),d.default.createElement("textarea",{autoFocus:!0,value:Id,onChange:c=>Pd(c.target.value),rows:3,placeholder:"例如：請補上照片",className:"tbc-return-text w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"})),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},d.default.createElement("button",{onClick:()=>On(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full"},"取消"),d.default.createElement("button",{onClick:E4,className:"tbc-return-ok flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full"},"退回")))),ki&&Ba&&d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>_n(null),onContextMenu:c=>{c.preventDefault(),_n(null)}}),d.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:ki.x,top:ki.y,fontSize:qa}},(()=>{let c=qn?qn.rows.filter(F=>!F.overdue):[],M=c.findIndex(F=>F.key===Ba.key),w=!!qn&&qn.canMove&&M>=0,A=(F,Bt,Ot,kt,Pt)=>d.default.createElement("button",{disabled:kt,onClick:()=>{_n(null),Ot()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${Pt?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},d.default.createElement(F,{size:ur-1}),Bt);return d.default.createElement(d.default.Fragment,null,Ba.isRoutine&&d.default.createElement(d.default.Fragment,null,A(qg,"移到頂端",()=>Un(Ba,"top"),!w||M===0),A(Td,"上一行",()=>Un(Ba,"up"),!w||M===0),A(C2,"下一行",()=>Un(Ba,"down"),!w||M===c.length-1),A(Gg,"移到底部",()=>Un(Ba,"bottom"),!w||M===c.length-1),d.default.createElement("div",{className:"h-px bg-slate-100 my-1"}),A(Zg,"複製",()=>D4(Ba))),A(_d,"刪除",()=>O4(Ba),!1,!0))})())),pt&&d.default.createElement(lv,{key:pt.mode+(pt.rule?pt.rule.id:""),mode:pt.mode,initial:pt.rule,presetRepeat:pt.preset,today:It,busy:Ua,onClose:()=>St(null),onSubmit:U4,people:h,meId:o}),Za&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},d.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},d.default.createElement(Bn,{className:"text-indigo-600",size:20})," 我的週期工作"),d.default.createElement("button",{onClick:()=>ke(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},d.default.createElement(gi,{size:20}))),d.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},d.default.createElement("button",{onClick:()=>{ke(!1),St({mode:"createRule",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},d.default.createElement(bn,{size:16}),"新增週期工作"),Ca.length===0?d.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"尚未建立週期工作"):Ca.map(c=>d.default.createElement("div",{key:c.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${c.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},d.default.createElement("div",{className:"min-w-0"},d.default.createElement("div",{className:`font-medium truncate ${c.is_active?"text-slate-900":"text-slate-400"}`},c.title),d.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},ov(c),c.start_time?`　${Et(c.start_time)}${c.end_time?"~"+Et(c.end_time):""}`:"",c.until_date?`　到 ${Da(c.until_date)}`:"",c.is_active?"":"　（暫停）")),d.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},d.default.createElement("button",{onClick:()=>{ft.current=!0,ke(!1),St({mode:"editRule",rule:c})},className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},d.default.createElement(Qg,{size:16})),d.default.createElement("button",{onClick:()=>G4(c),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${c.is_active?"bg-emerald-50 text-emerald-600 hover:bg-emerald-100":"bg-amber-50 text-amber-600 hover:bg-amber-100"}`,title:c.is_active?"啟用":"暫停","aria-label":c.is_active?"啟用":"暫停"},c.is_active?d.default.createElement(Xg,{size:16}):d.default.createElement(Yg,{size:16})),d.default.createElement("button",{onClick:()=>Y4(c),className:"tbc-rule-del p-2.5 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg active:scale-95 transition-colors",title:"刪除","aria-label":"刪除週期工作"},d.default.createElement(_d,{size:16})))))))),E.text&&d.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},d.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${E.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},d.default.createElement("div",{className:"shrink-0 mt-0.5"},E.type==="success"?d.default.createElement(Ug,{size:18}):d.default.createElement(si,{size:18})),d.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},E.text))),u&&d.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},d.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},d.default.createElement("div",{className:"p-8 text-center"},d.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},d.default.createElement(si,{size:32})),d.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),d.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),d.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},d.default.createElement("button",{onClick:()=>f(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),d.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},m4=dv;var y4=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
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
`;var cv="https://jcepavwocdujoeoqxvsd.supabase.co",hv="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",qd=document.createElement("style");qd.id="tbc-one-css";qd.textContent=y4;document.head.appendChild(qd);var se=window.__TBC_SB||window.supabase.createClient(cv,hv),uv=({page:t})=>{let[a,r]=(0,Ct.useState)(void 0),[e,i]=(0,Ct.useState)(""),[n,o]=(0,Ct.useState)({status:"loading",name:"",role:"member"});(0,Ct.useEffect)(()=>{let v=!0;se.auth.getSession().then(({data:g})=>{v&&r(g.session||null)});let{data:k}=se.auth.onAuthStateChange((g,x)=>{v&&r(x||null)});return()=>{v=!1,k&&k.subscription&&k.subscription.unsubscribe()}},[]);let l=a&&a.user&&a.user.id;(0,Ct.useEffect)(()=>{if(!a)return;let v=!0;return e4(se,a).then(async k=>{if(v){if(k.status!=="ok"||!a4.includes(k.role)){try{await se.auth.signOut()}catch{}i("權限不足"),r(null);return}i(""),o(k)}}),()=>{v=!1}},[l]);let h=async()=>{try{await se.auth.signOut()}catch{}r(null),o({status:"loading",name:"",role:"member"})};if(a===void 0)return Ct.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return Ct.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},Ct.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},Ct.default.createElement(b2,{size:30})),Ct.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),Ct.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),Ct.default.createElement(n4,{supabase:se,notice:e}));if(n.status!=="ok")return Ct.default.createElement("div",{className:"h-[100dvh] bg-white"});let s={identity:n,onLogout:h};return t==="work"?Ct.default.createElement(m4,{session:a,supabase:se,utils:{},shell:s}):Ct.default.createElement(l4,{shell:s})},w4=document.getElementById("root");(0,C4.createRoot)(w4).render(Ct.default.createElement(uv,{page:w4.getAttribute("data-page")||"home"}));})();
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
