(()=>{var ap=Object.create;var gc=Object.defineProperty;var rp=Object.getOwnPropertyDescriptor;var ep=Object.getOwnPropertyNames;var ip=Object.getPrototypeOf,np=Object.prototype.hasOwnProperty;var xr=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var op=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of ep(a))!np.call(t,i)&&i!==r&&gc(t,i,{get:()=>a[i],enumerable:!(e=rp(a,i))||e.enumerable});return t};var Pr=(t,a,r)=>(r=t!=null?ap(ip(t)):{},op(a||!t||!t.__esModule?gc(r,"default",{value:t,enumerable:!0}):r,t));var Cc=xr(N=>{"use strict";var l2=Symbol.for("react.transitional.element"),lp=Symbol.for("react.portal"),dp=Symbol.for("react.fragment"),cp=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),up=Symbol.for("react.consumer"),sp=Symbol.for("react.context"),gp=Symbol.for("react.forward_ref"),pp=Symbol.for("react.suspense"),fp=Symbol.for("react.memo"),xc=Symbol.for("react.lazy"),vp=Symbol.for("react.activity"),pc=Symbol.iterator;function kp(t){return t===null||typeof t!="object"?null:(t=pc&&t[pc]||t["@@iterator"],typeof t=="function"?t:null)}var Lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mc=Object.assign,mc={};function Ve(t,a,r){this.props=t,this.context=a,this.refs=mc,this.updater=r||Lc}Ve.prototype.isReactComponent={};Ve.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};Ve.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yc(){}yc.prototype=Ve.prototype;function d2(t,a,r){this.props=t,this.context=a,this.refs=mc,this.updater=r||Lc}var c2=d2.prototype=new yc;c2.constructor=d2;Mc(c2,Ve.prototype);c2.isPureReactComponent=!0;var fc=Array.isArray;function o2(){}var dt={H:null,A:null,T:null,S:null},wc=Object.prototype.hasOwnProperty;function h2(t,a,r){var e=r.ref;return{$$typeof:l2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function xp(t,a){return h2(t.type,a,t.props)}function u2(t){return typeof t=="object"&&t!==null&&t.$$typeof===l2}function Lp(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var vc=/\/+/g;function n2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?Lp(""+t.key):a.toString(36)}function Mp(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(o2,o2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ae(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case l2:case lp:o=!0;break;case xc:return o=t._init,Ae(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+n2(t,0):e,fc(i)?(r="",o!=null&&(r=o.replace(vc,"$&/")+"/"),Ae(i,a,r,"",function(g){return g})):i!=null&&(u2(i)&&(i=xp(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(vc,"$&/")+"/")+o)),a.push(i)),1;o=0;var d=e===""?".":e+":";if(fc(t))for(var h=0;h<t.length;h++)e=t[h],n=d+n2(e,h),o+=Ae(e,a,r,n,i);else if(h=kp(t),typeof h=="function")for(t=h.call(t),h=0;!(e=t.next()).done;)e=e.value,n=d+n2(e,h++),o+=Ae(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return Ae(Mp(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function eo(t,a,r){if(t==null)return t;var e=[],i=0;return Ae(t,e,"","",function(n){return a.call(r,n,i++)}),e}function mp(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var kc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yp={map:eo,forEach:function(t,a,r){eo(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return eo(t,function(){a++}),a},toArray:function(t){return eo(t,function(a){return a})||[]},only:function(t){if(!u2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};N.Activity=vp;N.Children=yp;N.Component=Ve;N.Fragment=dp;N.Profiler=hp;N.PureComponent=d2;N.StrictMode=cp;N.Suspense=pp;N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=dt;N.__COMPILER_RUNTIME={__proto__:null,c:function(t){return dt.H.useMemoCache(t)}};N.cache=function(t){return function(){return t.apply(null,arguments)}};N.cacheSignal=function(){return null};N.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=Mc({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!wc.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),d=0;d<n;d++)o[d]=arguments[d+2];e.children=o}return h2(t.type,i,e)};N.createContext=function(t){return t={$$typeof:sp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:up,_context:t},t};N.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)wc.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var d=Array(o),h=0;h<o;h++)d[h]=arguments[h+2];i.children=d}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return h2(t,n,i)};N.createRef=function(){return{current:null}};N.forwardRef=function(t){return{$$typeof:gp,render:t}};N.isValidElement=u2;N.lazy=function(t){return{$$typeof:xc,_payload:{_status:-1,_result:t},_init:mp}};N.memo=function(t,a){return{$$typeof:fp,type:t,compare:a===void 0?null:a}};N.startTransition=function(t){var a=dt.T,r={};dt.T=r;try{var e=t(),i=dt.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(o2,kc)}catch(n){kc(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),dt.T=a}};N.unstable_useCacheRefresh=function(){return dt.H.useCacheRefresh()};N.use=function(t){return dt.H.use(t)};N.useActionState=function(t,a,r){return dt.H.useActionState(t,a,r)};N.useCallback=function(t,a){return dt.H.useCallback(t,a)};N.useContext=function(t){return dt.H.useContext(t)};N.useDebugValue=function(){};N.useDeferredValue=function(t,a){return dt.H.useDeferredValue(t,a)};N.useEffect=function(t,a){return dt.H.useEffect(t,a)};N.useEffectEvent=function(t){return dt.H.useEffectEvent(t)};N.useId=function(){return dt.H.useId()};N.useImperativeHandle=function(t,a,r){return dt.H.useImperativeHandle(t,a,r)};N.useInsertionEffect=function(t,a){return dt.H.useInsertionEffect(t,a)};N.useLayoutEffect=function(t,a){return dt.H.useLayoutEffect(t,a)};N.useMemo=function(t,a){return dt.H.useMemo(t,a)};N.useOptimistic=function(t,a){return dt.H.useOptimistic(t,a)};N.useReducer=function(t,a,r){return dt.H.useReducer(t,a,r)};N.useRef=function(t){return dt.H.useRef(t)};N.useState=function(t){return dt.H.useState(t)};N.useSyncExternalStore=function(t,a,r){return dt.H.useSyncExternalStore(t,a,r)};N.useTransition=function(){return dt.H.useTransition()};N.version="19.2.8"});var $a=xr((Hv,bc)=>{"use strict";bc.exports=Cc()});var Tc=xr(st=>{"use strict";function f2(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<io(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Ga(t){return t.length===0?null:t[0]}function oo(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,d=t[o],h=o+1,g=t[h];if(0>io(d,r))h<i&&0>io(g,d)?(t[e]=g,t[h]=r,e=h):(t[e]=d,t[o]=r,e=o);else if(h<i&&0>io(g,r))t[e]=g,t[h]=r,e=h;else break t}}return a}function io(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}st.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Bc=performance,st.unstable_now=function(){return Bc.now()}):(s2=Date,jc=s2.now(),st.unstable_now=function(){return s2.now()-jc});var Bc,s2,jc,Ia=[],Lr=[],wp=1,ya=null,Kt=3,v2=!1,Ui=!1,Zi=!1,k2=!1,Sc=typeof setTimeout=="function"?setTimeout:null,Ac=typeof clearTimeout=="function"?clearTimeout:null,Wc=typeof setImmediate<"u"?setImmediate:null;function no(t){for(var a=Ga(Lr);a!==null;){if(a.callback===null)oo(Lr);else if(a.startTime<=t)oo(Lr),a.sortIndex=a.expirationTime,f2(Ia,a);else break;a=Ga(Lr)}}function x2(t){if(Zi=!1,no(t),!Ui)if(Ga(Ia)!==null)Ui=!0,_e||(_e=!0,ze());else{var a=Ga(Lr);a!==null&&L2(x2,a.startTime-t)}}var _e=!1,qi=-1,Vc=5,zc=-1;function _c(){return k2?!0:!(st.unstable_now()-zc<Vc)}function g2(){if(k2=!1,_e){var t=st.unstable_now();zc=t;var a=!0;try{t:{Ui=!1,Zi&&(Zi=!1,Ac(qi),qi=-1),v2=!0;var r=Kt;try{a:{for(no(t),ya=Ga(Ia);ya!==null&&!(ya.expirationTime>t&&_c());){var e=ya.callback;if(typeof e=="function"){ya.callback=null,Kt=ya.priorityLevel;var i=e(ya.expirationTime<=t);if(t=st.unstable_now(),typeof i=="function"){ya.callback=i,no(t),a=!0;break a}ya===Ga(Ia)&&oo(Ia),no(t)}else oo(Ia);ya=Ga(Ia)}if(ya!==null)a=!0;else{var n=Ga(Lr);n!==null&&L2(x2,n.startTime-t),a=!1}}break t}finally{ya=null,Kt=r,v2=!1}a=void 0}}finally{a?ze():_e=!1}}}var ze;typeof Wc=="function"?ze=function(){Wc(g2)}:typeof MessageChannel<"u"?(p2=new MessageChannel,Hc=p2.port2,p2.port1.onmessage=g2,ze=function(){Hc.postMessage(null)}):ze=function(){Sc(g2,0)};var p2,Hc;function L2(t,a){qi=Sc(function(){t(st.unstable_now())},a)}st.unstable_IdlePriority=5;st.unstable_ImmediatePriority=1;st.unstable_LowPriority=4;st.unstable_NormalPriority=3;st.unstable_Profiling=null;st.unstable_UserBlockingPriority=2;st.unstable_cancelCallback=function(t){t.callback=null};st.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vc=0<t?Math.floor(1e3/t):5};st.unstable_getCurrentPriorityLevel=function(){return Kt};st.unstable_next=function(t){switch(Kt){case 1:case 2:case 3:var a=3;break;default:a=Kt}var r=Kt;Kt=a;try{return t()}finally{Kt=r}};st.unstable_requestPaint=function(){k2=!0};st.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=Kt;Kt=t;try{return a()}finally{Kt=r}};st.unstable_scheduleCallback=function(t,a,r){var e=st.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:wp++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,f2(Lr,t),Ga(Ia)===null&&t===Ga(Lr)&&(Zi?(Ac(qi),qi=-1):Zi=!0,L2(x2,r-e))):(t.sortIndex=i,f2(Ia,t),Ui||v2||(Ui=!0,_e||(_e=!0,ze()))),t};st.unstable_shouldYield=_c;st.unstable_wrapCallback=function(t){var a=Kt;return function(){var r=Kt;Kt=a;try{return t.apply(this,arguments)}finally{Kt=r}}}});var Ec=xr((Av,Nc)=>{"use strict";Nc.exports=Tc()});var Oc=xr(Rt=>{"use strict";var Cp=$a();function Dc(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Mr(){}var Jt={d:{f:Mr,r:function(){throw Error(Dc(522))},D:Mr,C:Mr,L:Mr,m:Mr,X:Mr,S:Mr,M:Mr},p:0,findDOMNode:null},bp=Symbol.for("react.portal");function Bp(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bp,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var Gi=Cp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function lo(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Jt;Rt.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(Dc(299));return Bp(t,a,null,r)};Rt.flushSync=function(t){var a=Gi.T,r=Jt.p;try{if(Gi.T=null,Jt.p=2,t)return t()}finally{Gi.T=a,Jt.p=r,Jt.d.f()}};Rt.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Jt.d.C(t,a))};Rt.prefetchDNS=function(t){typeof t=="string"&&Jt.d.D(t)};Rt.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=lo(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Jt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Jt.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};Rt.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=lo(a.as,a.crossOrigin);Jt.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Jt.d.M(t)};Rt.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=lo(r,a.crossOrigin);Jt.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};Rt.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=lo(a.as,a.crossOrigin);Jt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Jt.d.m(t)};Rt.requestFormReset=function(t){Jt.d.r(t)};Rt.unstable_batchedUpdates=function(t,a){return t(a)};Rt.useFormState=function(t,a,r){return Gi.H.useFormState(t,a,r)};Rt.useFormStatus=function(){return Gi.H.useHostTransitionStatus()};Rt.version="19.2.8"});var qc=xr((zv,Zc)=>{"use strict";function Uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uc)}catch(t){console.error(t)}}Uc(),Zc.exports=Oc()});var tg=xr(zl=>{"use strict";var Wt=Ec(),ph=$a(),jp=qc();function m(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sn(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function vh(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function kh(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Gc(t){if(Sn(t)!==t)throw Error(m(188))}function Wp(t){var a=t.alternate;if(!a){if(a=Sn(t),a===null)throw Error(m(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return Gc(i),t;if(n===e)return Gc(i),a;n=n.sibling}throw Error(m(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,d=i.child;d;){if(d===r){o=!0,r=i,e=n;break}if(d===e){o=!0,e=i,r=n;break}d=d.sibling}if(!o){for(d=n.child;d;){if(d===r){o=!0,r=n,e=i;break}if(d===e){o=!0,e=n,r=i;break}d=d.sibling}if(!o)throw Error(m(189))}}if(r.alternate!==e)throw Error(m(190))}if(r.tag!==3)throw Error(m(188));return r.stateNode.current===r?t:a}function xh(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=xh(t),a!==null)return a;t=t.sibling}return null}var ut=Object.assign,Hp=Symbol.for("react.element"),co=Symbol.for("react.transitional.element"),$i=Symbol.for("react.portal"),Ue=Symbol.for("react.fragment"),Lh=Symbol.for("react.strict_mode"),P2=Symbol.for("react.profiler"),Mh=Symbol.for("react.consumer"),or=Symbol.for("react.context"),J1=Symbol.for("react.forward_ref"),t1=Symbol.for("react.suspense"),a1=Symbol.for("react.suspense_list"),R1=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),r1=Symbol.for("react.activity"),Sp=Symbol.for("react.memo_cache_sentinel"),Yc=Symbol.iterator;function Yi(t){return t===null||typeof t!="object"?null:(t=Yc&&t[Yc]||t["@@iterator"],typeof t=="function"?t:null)}var Ap=Symbol.for("react.client.reference");function e1(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ap?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ue:return"Fragment";case P2:return"Profiler";case Lh:return"StrictMode";case t1:return"Suspense";case a1:return"SuspenseList";case r1:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case $i:return"Portal";case or:return t.displayName||"Context";case Mh:return(t._context.displayName||"Context")+".Consumer";case J1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R1:return a=t.displayName||null,a!==null?a:e1(t.type)||"Memo";case mr:a=t._payload,t=t._init;try{return e1(t(a))}catch{}}return null}var Ii=Array.isArray,z=ph.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=jp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},i1=[],Ze=-1;function Ja(t){return{current:t}}function Nt(t){0>Ze||(t.current=i1[Ze],i1[Ze]=null,Ze--)}function ot(t,a){Ze++,i1[Ze]=t.current,t.current=a}var Ka=Ja(null),vn=Ja(null),Vr=Ja(null),qo=Ja(null);function Go(t,a){switch(ot(Vr,a),ot(vn,t),ot(Ka,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?$0(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=$0(a),t=Us(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Nt(Ka),ot(Ka,t)}function ni(){Nt(Ka),Nt(vn),Nt(Vr)}function n1(t){t.memoizedState!==null&&ot(qo,t);var a=Ka.current,r=Us(a,t.type);a!==r&&(ot(vn,t),ot(Ka,r))}function Yo(t){vn.current===t&&(Nt(Ka),Nt(vn)),qo.current===t&&(Nt(qo),jn._currentValue=ne)}var M2,Xc;function ae(t){if(M2===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);M2=a&&a[1]||"",Xc=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+M2+t+Xc}var m2=!1;function y2(t,a){if(!t||m2)return"";m2=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(x){var p=x}Reflect.construct(t,[],k)}else{try{k.call()}catch(x){p=x}t.call(k.prototype)}}else{try{throw Error()}catch(x){p=x}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(x){if(x&&p&&typeof x.stack=="string")return[x.stack,p.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],d=n[1];if(o&&d){var h=o.split(`
`),g=d.split(`
`);for(i=e=0;e<h.length&&!h[e].includes("DetermineComponentFrameRoot");)e++;for(;i<g.length&&!g[i].includes("DetermineComponentFrameRoot");)i++;if(e===h.length||i===g.length)for(e=h.length-1,i=g.length-1;1<=e&&0<=i&&h[e]!==g[i];)i--;for(;1<=e&&0<=i;e--,i--)if(h[e]!==g[i]){if(e!==1||i!==1)do if(e--,i--,0>i||h[e]!==g[i]){var f=`
`+h[e].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=e&&0<=i);break}}}finally{m2=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?ae(r):""}function Vp(t,a){switch(t.tag){case 26:case 27:case 5:return ae(t.type);case 16:return ae("Lazy");case 13:return t.child!==a&&a!==null?ae("Suspense Fallback"):ae("Suspense");case 19:return ae("SuspenseList");case 0:case 15:return y2(t.type,!1);case 11:return y2(t.type.render,!1);case 1:return y2(t.type,!0);case 31:return ae("Activity");default:return""}}function Qc(t){try{var a="",r=null;do a+=Vp(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var o1=Object.prototype.hasOwnProperty,F1=Wt.unstable_scheduleCallback,w2=Wt.unstable_cancelCallback,zp=Wt.unstable_shouldYield,_p=Wt.unstable_requestPaint,pa=Wt.unstable_now,Tp=Wt.unstable_getCurrentPriorityLevel,mh=Wt.unstable_ImmediatePriority,yh=Wt.unstable_UserBlockingPriority,Xo=Wt.unstable_NormalPriority,Np=Wt.unstable_LowPriority,wh=Wt.unstable_IdlePriority,Ep=Wt.log,Dp=Wt.unstable_setDisableYieldValue,An=null,fa=null;function jr(t){if(typeof Ep=="function"&&Dp(t),fa&&typeof fa.setStrictMode=="function")try{fa.setStrictMode(An,t)}catch{}}var va=Math.clz32?Math.clz32:Zp,Op=Math.log,Up=Math.LN2;function Zp(t){return t>>>=0,t===0?32:31-(Op(t)/Up|0)|0}var ho=256,uo=262144,so=4194304;function re(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function kl(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var d=e&134217727;return d!==0?(e=d&~n,e!==0?i=re(e):(o&=d,o!==0?i=re(o):r||(r=d&~t,r!==0&&(i=re(r))))):(d=e&~n,d!==0?i=re(d):o!==0?i=re(o):r||(r=e&~t,r!==0&&(i=re(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function Vn(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function qp(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ch(){var t=so;return so<<=1,(so&62914560)===0&&(so=4194304),t}function C2(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function zn(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Gp(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var d=t.entanglements,h=t.expirationTimes,g=t.hiddenUpdates;for(r=o&~r;0<r;){var f=31-va(r),k=1<<f;d[f]=0,h[f]=-1;var p=g[f];if(p!==null)for(g[f]=null,f=0;f<p.length;f++){var x=p[f];x!==null&&(x.lane&=-536870913)}r&=~k}e!==0&&bh(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function bh(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-va(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function Bh(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-va(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function jh(t,a){var r=a&-a;return r=(r&42)!==0?1:$1(r),(r&(t.suspendedLanes|a))!==0?0:r}function $1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function I1(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Wh(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:$s(t.type))}function Kc(t,a){var r=$.p;try{return $.p=t,a()}finally{$.p=r}}var Xr=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Xr,na="__reactProps$"+Xr,vi="__reactContainer$"+Xr,l1="__reactEvents$"+Xr,Yp="__reactListeners$"+Xr,Xp="__reactHandles$"+Xr,Jc="__reactResources$"+Xr,_n="__reactMarker$"+Xr;function P1(t){delete t[Ut],delete t[na],delete t[l1],delete t[Yp],delete t[Xp]}function qe(t){var a=t[Ut];if(a)return a;for(var r=t.parentNode;r;){if(a=r[vi]||r[Ut]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=rh(t);t!==null;){if(r=t[Ut])return r;t=rh(t)}return a}t=r,r=t.parentNode}return null}function ki(t){if(t=t[Ut]||t[vi]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Pi(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(m(33))}function Ie(t){var a=t[Jc];return a||(a=t[Jc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Tt(t){t[_n]=!0}var Hh=new Set,Sh={};function fe(t,a){oi(t,a),oi(t+"Capture",a)}function oi(t,a){for(Sh[t]=a,t=0;t<a.length;t++)Hh.add(a[t])}var Qp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rc={},Fc={};function Kp(t){return o1.call(Fc,t)?!0:o1.call(Rc,t)?!1:Qp.test(t)?Fc[t]=!0:(Rc[t]=!0,!1)}function jo(t,a,r){if(Kp(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function go(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function Pa(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function Ca(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ah(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Jp(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function d1(t){if(!t._valueTracker){var a=Ah(t)?"checked":"value";t._valueTracker=Jp(t,a,""+t[a])}}function Vh(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=Ah(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function Qo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Rp=/[\n"\\]/g;function ja(t){return t.replace(Rp,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function c1(t,a,r,e,i,n,o,d){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+Ca(a)):t.value!==""+Ca(a)&&(t.value=""+Ca(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?h1(t,o,Ca(a)):r!=null?h1(t,o,Ca(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+Ca(d):t.removeAttribute("name")}function zh(t,a,r,e,i,n,o,d){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){d1(t);return}r=r!=null?""+Ca(r):"",a=a!=null?""+Ca(a):r,d||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=d?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),d1(t)}function h1(t,a,r){a==="number"&&Qo(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Pe(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+Ca(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function _h(t,a,r){if(a!=null&&(a=""+Ca(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+Ca(r):""}function Th(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(m(92));if(Ii(e)){if(1<e.length)throw Error(m(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=Ca(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),d1(t)}function li(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var Fp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $c(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||Fp.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function Nh(t,a,r){if(a!=null&&typeof a!="object")throw Error(m(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&$c(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&$c(t,n,a[n])}function td(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $p=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ip=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(t){return Ip.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function lr(){}var u1=null;function ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ge=null,ti=null;function Ic(t){var a=ki(t);if(a&&(t=a.stateNode)){var r=t[na]||null;t:switch(t=a.stateNode,a.type){case"input":if(c1(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ja(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[na]||null;if(!i)throw Error(m(90));c1(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&Vh(e)}break t;case"textarea":_h(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Pe(t,!!r.multiple,a,!1)}}}var b2=!1;function Eh(t,a,r){if(b2)return t(a,r);b2=!0;try{var e=t(a);return e}finally{if(b2=!1,(Ge!==null||ti!==null)&&(Hl(),Ge&&(a=Ge,t=ti,ti=Ge=null,Ic(a),t)))for(a=0;a<t.length;a++)Ic(t[a])}}function kn(t,a){var r=t.stateNode;if(r===null)return null;var e=r[na]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(m(231,a,typeof r));return r}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),s1=!1;if(sr)try{Te={},Object.defineProperty(Te,"passive",{get:function(){s1=!0}}),window.addEventListener("test",Te,Te),window.removeEventListener("test",Te,Te)}catch{s1=!1}var Te,Wr=null,rd=null,Ho=null;function Dh(){if(Ho)return Ho;var t,a=rd,r=a.length,e,i="value"in Wr?Wr.value:Wr.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return Ho=i.slice(t,1<e?1-e:void 0)}function So(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function po(){return!0}function Pc(){return!1}function oa(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(r=t[d],this[d]=r?r(n):n[d]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?po:Pc,this.isPropagationStopped=Pc,this}return ut(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=po)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=po)},persist:function(){},isPersistent:po}),a}var ve={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=oa(ve),Tn=ut({},ve,{view:0,detail:0}),Pp=oa(Tn),B2,j2,Xi,Ll=ut({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xi&&(Xi&&t.type==="mousemove"?(B2=t.screenX-Xi.screenX,j2=t.screenY-Xi.screenY):j2=B2=0,Xi=t),B2)},movementY:function(t){return"movementY"in t?t.movementY:j2}}),t0=oa(Ll),t5=ut({},Ll,{dataTransfer:0}),a5=oa(t5),r5=ut({},Tn,{relatedTarget:0}),W2=oa(r5),e5=ut({},ve,{animationName:0,elapsedTime:0,pseudoElement:0}),i5=oa(e5),n5=ut({},ve,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),o5=oa(n5),l5=ut({},ve,{data:0}),a0=oa(l5),d5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u5(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=h5[t])?!!a[t]:!1}function ed(){return u5}var s5=ut({},Tn,{key:function(t){if(t.key){var a=d5[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=So(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c5[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ed,charCode:function(t){return t.type==="keypress"?So(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?So(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g5=oa(s5),p5=ut({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),r0=oa(p5),f5=ut({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ed}),v5=oa(f5),k5=ut({},ve,{propertyName:0,elapsedTime:0,pseudoElement:0}),x5=oa(k5),L5=ut({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M5=oa(L5),m5=ut({},ve,{newState:0,oldState:0}),y5=oa(m5),w5=[9,13,27,32],id=sr&&"CompositionEvent"in window,rn=null;sr&&"documentMode"in document&&(rn=document.documentMode);var C5=sr&&"TextEvent"in window&&!rn,Oh=sr&&(!id||rn&&8<rn&&11>=rn),e0=" ",i0=!1;function Uh(t,a){switch(t){case"keyup":return w5.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ye=!1;function b5(t,a){switch(t){case"compositionend":return Zh(a);case"keypress":return a.which!==32?null:(i0=!0,e0);case"textInput":return t=a.data,t===e0&&i0?null:t;default:return null}}function B5(t,a){if(Ye)return t==="compositionend"||!id&&Uh(t,a)?(t=Dh(),Ho=rd=Wr=null,Ye=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Oh&&a.locale!=="ko"?null:a.data;default:return null}}var j5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!j5[t.type]:a==="textarea"}function qh(t,a,r,e){Ge?ti?ti.push(e):ti=[e]:Ge=e,a=hl(a,"onChange"),0<a.length&&(r=new xl("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var en=null,xn=null;function W5(t){Es(t,0)}function Ml(t){var a=Pi(t);if(Vh(a))return t}function o0(t,a){if(t==="change")return a}var Gh=!1;sr&&(sr?(vo="oninput"in document,vo||(H2=document.createElement("div"),H2.setAttribute("oninput","return;"),vo=typeof H2.oninput=="function"),fo=vo):fo=!1,Gh=fo&&(!document.documentMode||9<document.documentMode));var fo,vo,H2;function l0(){en&&(en.detachEvent("onpropertychange",Yh),xn=en=null)}function Yh(t){if(t.propertyName==="value"&&Ml(xn)){var a=[];qh(a,xn,t,ad(t)),Eh(W5,a)}}function H5(t,a,r){t==="focusin"?(l0(),en=a,xn=r,en.attachEvent("onpropertychange",Yh)):t==="focusout"&&l0()}function S5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(xn)}function A5(t,a){if(t==="click")return Ml(a)}function V5(t,a){if(t==="input"||t==="change")return Ml(a)}function z5(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var xa=typeof Object.is=="function"?Object.is:z5;function Ln(t,a){if(xa(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!o1.call(a,i)||!xa(t[i],a[i]))return!1}return!0}function d0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function c0(t,a){var r=d0(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=d0(r)}}function Xh(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Xh(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Qh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Qo(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=Qo(t.document)}return a}function nd(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var _5=sr&&"documentMode"in document&&11>=document.documentMode,Xe=null,g1=null,nn=null,p1=!1;function h0(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;p1||Xe==null||Xe!==Qo(e)||(e=Xe,"selectionStart"in e&&nd(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),nn&&Ln(nn,e)||(nn=e,e=hl(g1,"onSelect"),0<e.length&&(a=new xl("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=Xe)))}function te(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var Qe={animationend:te("Animation","AnimationEnd"),animationiteration:te("Animation","AnimationIteration"),animationstart:te("Animation","AnimationStart"),transitionrun:te("Transition","TransitionRun"),transitionstart:te("Transition","TransitionStart"),transitioncancel:te("Transition","TransitionCancel"),transitionend:te("Transition","TransitionEnd")},S2={},Kh={};sr&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete Qe.animationend.animation,delete Qe.animationiteration.animation,delete Qe.animationstart.animation),"TransitionEvent"in window||delete Qe.transitionend.transition);function ke(t){if(S2[t])return S2[t];if(!Qe[t])return t;var a=Qe[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in Kh)return S2[t]=a[r];return t}var Jh=ke("animationend"),Rh=ke("animationiteration"),Fh=ke("animationstart"),T5=ke("transitionrun"),N5=ke("transitionstart"),E5=ke("transitioncancel"),$h=ke("transitionend"),Ih=new Map,f1="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");f1.push("scrollEnd");function Da(t,a){Ih.set(t,a),fe(a,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},wa=[],Ke=0,od=0;function ml(){for(var t=Ke,a=od=Ke=0;a<t;){var r=wa[a];wa[a++]=null;var e=wa[a];wa[a++]=null;var i=wa[a];wa[a++]=null;var n=wa[a];if(wa[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&Ph(r,i,n)}}function yl(t,a,r,e){wa[Ke++]=t,wa[Ke++]=a,wa[Ke++]=r,wa[Ke++]=e,od|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function ld(t,a,r,e){return yl(t,a,r,e),Jo(t)}function xe(t,a){return yl(t,null,null,a),Jo(t)}function Ph(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-va(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function Jo(t){if(50<pn)throw pn=0,N1=null,Error(m(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Je={};function D5(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sa(t,a,r,e){return new D5(t,a,r,e)}function dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cr(t,a){var r=t.alternate;return r===null?(r=sa(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function tu(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Ao(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")dd(t)&&(o=1);else if(typeof t=="string")o=qf(t,r,Ka.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case r1:return t=sa(31,r,a,i),t.elementType=r1,t.lanes=n,t;case Ue:return oe(r.children,i,n,a);case Lh:o=8,i|=24;break;case P2:return t=sa(12,r,a,i|2),t.elementType=P2,t.lanes=n,t;case t1:return t=sa(13,r,a,i),t.elementType=t1,t.lanes=n,t;case a1:return t=sa(19,r,a,i),t.elementType=a1,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case or:o=10;break t;case Mh:o=9;break t;case J1:o=11;break t;case R1:o=14;break t;case mr:o=16,e=null;break t}o=29,r=Error(m(130,t===null?"null":typeof t,"")),e=null}return a=sa(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function oe(t,a,r,e){return t=sa(7,t,e,a),t.lanes=r,t}function A2(t,a,r){return t=sa(6,t,null,a),t.lanes=r,t}function au(t){var a=sa(18,null,null,0);return a.stateNode=t,a}function V2(t,a,r){return a=sa(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var u0=new WeakMap;function Wa(t,a){if(typeof t=="object"&&t!==null){var r=u0.get(t);return r!==void 0?r:(a={value:t,source:a,stack:Qc(a)},u0.set(t,a),a)}return{value:t,source:a,stack:Qc(a)}}var Re=[],Fe=0,Ro=null,Mn=0,ba=[],Ba=0,Zr=null,Ya=1,Xa="";function ir(t,a){Re[Fe++]=Mn,Re[Fe++]=Ro,Ro=t,Mn=a}function ru(t,a,r){ba[Ba++]=Ya,ba[Ba++]=Xa,ba[Ba++]=Zr,Zr=t;var e=Ya;t=Xa;var i=32-va(e)-1;e&=~(1<<i),r+=1;var n=32-va(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,Ya=1<<32-va(a)+i|r<<i|e,Xa=n+t}else Ya=1<<n|r<<i|e,Xa=t}function cd(t){t.return!==null&&(ir(t,1),ru(t,1,0))}function hd(t){for(;t===Ro;)Ro=Re[--Fe],Re[Fe]=null,Mn=Re[--Fe],Re[Fe]=null;for(;t===Zr;)Zr=ba[--Ba],ba[Ba]=null,Xa=ba[--Ba],ba[Ba]=null,Ya=ba[--Ba],ba[Ba]=null}function eu(t,a){ba[Ba++]=Ya,ba[Ba++]=Xa,ba[Ba++]=Zr,Ya=a.id,Xa=a.overflow,Zr=t}var Zt=null,ht=null,K=!1,zr=null,Ha=!1,v1=Error(m(519));function qr(t){var a=Error(m(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mn(Wa(a,t)),v1}function s0(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[Ut]=t,a[na]=e,r){case"dialog":Z("cancel",a),Z("close",a);break;case"iframe":case"object":case"embed":Z("load",a);break;case"video":case"audio":for(r=0;r<bn.length;r++)Z(bn[r],a);break;case"source":Z("error",a);break;case"img":case"image":case"link":Z("error",a),Z("load",a);break;case"details":Z("toggle",a);break;case"input":Z("invalid",a),zh(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":Z("invalid",a);break;case"textarea":Z("invalid",a),Th(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||Os(a.textContent,r)?(e.popover!=null&&(Z("beforetoggle",a),Z("toggle",a)),e.onScroll!=null&&Z("scroll",a),e.onScrollEnd!=null&&Z("scrollend",a),e.onClick!=null&&(a.onclick=lr),a=!0):a=!1,a||qr(t,!0)}function g0(t){for(Zt=t.return;Zt;)switch(Zt.tag){case 5:case 31:case 13:Ha=!1;return;case 27:case 3:Ha=!0;return;default:Zt=Zt.return}}function Ne(t){if(t!==Zt)return!1;if(!K)return g0(t),K=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Z1(t.type,t.memoizedProps)),r=!r),r&&ht&&qr(t),g0(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));ht=ah(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(317));ht=ah(t)}else a===27?(a=ht,Qr(t.type)?(t=X1,X1=null,ht=t):ht=a):ht=Zt?Aa(t.stateNode.nextSibling):null;return!0}function he(){ht=Zt=null,K=!1}function z2(){var t=zr;return t!==null&&(ea===null?ea=t:ea.push.apply(ea,t),zr=null),t}function mn(t){zr===null?zr=[t]:zr.push(t)}var k1=Ja(null),Le=null,dr=null;function wr(t,a,r){ot(k1,a._currentValue),a._currentValue=r}function hr(t){t._currentValue=k1.current,Nt(k1)}function x1(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function L1(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var d=n;n=i;for(var h=0;h<a.length;h++)if(d.context===a[h]){n.lanes|=r,d=n.alternate,d!==null&&(d.lanes|=r),x1(n.return,r,t),e||(o=null);break t}n=d.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),x1(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function xi(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(m(387));if(o=o.memoizedProps,o!==null){var d=i.type;xa(i.pendingProps.value,o.value)||(t!==null?t.push(d):t=[d])}}else if(i===qo.current){if(o=i.alternate,o===null)throw Error(m(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(jn):t=[jn])}i=i.return}t!==null&&L1(a,t,r,e),a.flags|=262144}function Fo(t){for(t=t.firstContext;t!==null;){if(!xa(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ue(t){Le=t,dr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qt(t){return iu(Le,t)}function ko(t,a){return Le===null&&ue(t),iu(t,a)}function iu(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},dr===null){if(t===null)throw Error(m(308));dr=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else dr=dr.next=a;return r}var O5=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},U5=Wt.unstable_scheduleCallback,Z5=Wt.unstable_NormalPriority,Ct={$$typeof:or,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ud(){return{controller:new O5,data:new Map,refCount:0}}function Nn(t){t.refCount--,t.refCount===0&&U5(Z5,function(){t.controller.abort()})}var on=null,M1=0,di=0,ai=null;function q5(t,a){if(on===null){var r=on=[];M1=0,di=Nd(),ai={status:"pending",value:void 0,then:function(e){r.push(e)}}}return M1++,a.then(p0,p0),a}function p0(){if(--M1===0&&on!==null){ai!==null&&(ai.status="fulfilled");var t=on;on=null,di=0,ai=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function G5(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var f0=z.S;z.S=function(t,a){xs=pa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&q5(t,a),f0!==null&&f0(t,a)};var le=Ja(null);function sd(){var t=le.current;return t!==null?t:nt.pooledCache}function Vo(t,a){a===null?ot(le,le.current):ot(le,a.pool)}function nu(){var t=sd();return t===null?null:{parent:Ct._currentValue,pool:t}}var Li=Error(m(460)),gd=Error(m(474)),wl=Error(m(542)),$o={then:function(){}};function v0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ou(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(lr,lr),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,x0(t),t;default:if(typeof a.status=="string")a.then(lr,lr);else{if(t=nt,t!==null&&100<t.shellSuspendCounter)throw Error(m(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,x0(t),t}throw de=a,Li}}function ee(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(de=r,Li):r}}var de=null;function k0(){if(de===null)throw Error(m(459));var t=de;return de=null,t}function x0(t){if(t===Li||t===wl)throw Error(m(483))}var ri=null,yn=0;function xo(t){var a=yn;return yn+=1,ri===null&&(ri=[]),ou(ri,t,a)}function Qi(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Lo(t,a){throw a.$$typeof===Hp?Error(m(525)):(t=Object.prototype.toString.call(a),Error(m(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function lu(t){function a(s,u){if(t){var v=s.deletions;v===null?(s.deletions=[u],s.flags|=16):v.push(u)}}function r(s,u){if(!t)return null;for(;u!==null;)a(s,u),u=u.sibling;return null}function e(s){for(var u=new Map;s!==null;)s.key!==null?u.set(s.key,s):u.set(s.index,s),s=s.sibling;return u}function i(s,u){return s=cr(s,u),s.index=0,s.sibling=null,s}function n(s,u,v){return s.index=v,t?(v=s.alternate,v!==null?(v=v.index,v<u?(s.flags|=67108866,u):v):(s.flags|=67108866,u)):(s.flags|=1048576,u)}function o(s){return t&&s.alternate===null&&(s.flags|=67108866),s}function d(s,u,v,M){return u===null||u.tag!==6?(u=A2(v,s.mode,M),u.return=s,u):(u=i(u,v),u.return=s,u)}function h(s,u,v,M){var B=v.type;return B===Ue?f(s,u,v.props.children,M,v.key):u!==null&&(u.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===mr&&ee(B)===u.type)?(u=i(u,v.props),Qi(u,v),u.return=s,u):(u=Ao(v.type,v.key,v.props,null,s.mode,M),Qi(u,v),u.return=s,u)}function g(s,u,v,M){return u===null||u.tag!==4||u.stateNode.containerInfo!==v.containerInfo||u.stateNode.implementation!==v.implementation?(u=V2(v,s.mode,M),u.return=s,u):(u=i(u,v.children||[]),u.return=s,u)}function f(s,u,v,M,B){return u===null||u.tag!==7?(u=oe(v,s.mode,M,B),u.return=s,u):(u=i(u,v),u.return=s,u)}function k(s,u,v){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=A2(""+u,s.mode,v),u.return=s,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case co:return v=Ao(u.type,u.key,u.props,null,s.mode,v),Qi(v,u),v.return=s,v;case $i:return u=V2(u,s.mode,v),u.return=s,u;case mr:return u=ee(u),k(s,u,v)}if(Ii(u)||Yi(u))return u=oe(u,s.mode,v,null),u.return=s,u;if(typeof u.then=="function")return k(s,xo(u),v);if(u.$$typeof===or)return k(s,ko(s,u),v);Lo(s,u)}return null}function p(s,u,v,M){var B=u!==null?u.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return B!==null?null:d(s,u,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case co:return v.key===B?h(s,u,v,M):null;case $i:return v.key===B?g(s,u,v,M):null;case mr:return v=ee(v),p(s,u,v,M)}if(Ii(v)||Yi(v))return B!==null?null:f(s,u,v,M,null);if(typeof v.then=="function")return p(s,u,xo(v),M);if(v.$$typeof===or)return p(s,u,ko(s,v),M);Lo(s,v)}return null}function x(s,u,v,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return s=s.get(v)||null,d(u,s,""+M,B);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case co:return s=s.get(M.key===null?v:M.key)||null,h(u,s,M,B);case $i:return s=s.get(M.key===null?v:M.key)||null,g(u,s,M,B);case mr:return M=ee(M),x(s,u,v,M,B)}if(Ii(M)||Yi(M))return s=s.get(v)||null,f(u,s,M,B,null);if(typeof M.then=="function")return x(s,u,v,xo(M),B);if(M.$$typeof===or)return x(s,u,v,ko(u,M),B);Lo(u,M)}return null}function y(s,u,v,M){for(var B=null,V=null,j=u,A=u=0,E=null;j!==null&&A<v.length;A++){j.index>A?(E=j,j=null):E=j.sibling;var O=p(s,j,v[A],M);if(O===null){j===null&&(j=E);break}t&&j&&O.alternate===null&&a(s,j),u=n(O,u,A),V===null?B=O:V.sibling=O,V=O,j=E}if(A===v.length)return r(s,j),K&&ir(s,A),B;if(j===null){for(;A<v.length;A++)j=k(s,v[A],M),j!==null&&(u=n(j,u,A),V===null?B=j:V.sibling=j,V=j);return K&&ir(s,A),B}for(j=e(j);A<v.length;A++)E=x(j,s,A,v[A],M),E!==null&&(t&&E.alternate!==null&&j.delete(E.key===null?A:E.key),u=n(E,u,A),V===null?B=E:V.sibling=E,V=E);return t&&j.forEach(function(lt){return a(s,lt)}),K&&ir(s,A),B}function b(s,u,v,M){if(v==null)throw Error(m(151));for(var B=null,V=null,j=u,A=u=0,E=null,O=v.next();j!==null&&!O.done;A++,O=v.next()){j.index>A?(E=j,j=null):E=j.sibling;var lt=p(s,j,O.value,M);if(lt===null){j===null&&(j=E);break}t&&j&&lt.alternate===null&&a(s,j),u=n(lt,u,A),V===null?B=lt:V.sibling=lt,V=lt,j=E}if(O.done)return r(s,j),K&&ir(s,A),B;if(j===null){for(;!O.done;A++,O=v.next())O=k(s,O.value,M),O!==null&&(u=n(O,u,A),V===null?B=O:V.sibling=O,V=O);return K&&ir(s,A),B}for(j=e(j);!O.done;A++,O=v.next())O=x(j,s,A,O.value,M),O!==null&&(t&&O.alternate!==null&&j.delete(O.key===null?A:O.key),u=n(O,u,A),V===null?B=O:V.sibling=O,V=O);return t&&j.forEach(function($t){return a(s,$t)}),K&&ir(s,A),B}function T(s,u,v,M){if(typeof v=="object"&&v!==null&&v.type===Ue&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case co:t:{for(var B=v.key;u!==null;){if(u.key===B){if(B=v.type,B===Ue){if(u.tag===7){r(s,u.sibling),M=i(u,v.props.children),M.return=s,s=M;break t}}else if(u.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===mr&&ee(B)===u.type){r(s,u.sibling),M=i(u,v.props),Qi(M,v),M.return=s,s=M;break t}r(s,u);break}else a(s,u);u=u.sibling}v.type===Ue?(M=oe(v.props.children,s.mode,M,v.key),M.return=s,s=M):(M=Ao(v.type,v.key,v.props,null,s.mode,M),Qi(M,v),M.return=s,s=M)}return o(s);case $i:t:{for(B=v.key;u!==null;){if(u.key===B)if(u.tag===4&&u.stateNode.containerInfo===v.containerInfo&&u.stateNode.implementation===v.implementation){r(s,u.sibling),M=i(u,v.children||[]),M.return=s,s=M;break t}else{r(s,u);break}else a(s,u);u=u.sibling}M=V2(v,s.mode,M),M.return=s,s=M}return o(s);case mr:return v=ee(v),T(s,u,v,M)}if(Ii(v))return y(s,u,v,M);if(Yi(v)){if(B=Yi(v),typeof B!="function")throw Error(m(150));return v=B.call(v),b(s,u,v,M)}if(typeof v.then=="function")return T(s,u,xo(v),M);if(v.$$typeof===or)return T(s,u,ko(s,v),M);Lo(s,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,u!==null&&u.tag===6?(r(s,u.sibling),M=i(u,v),M.return=s,s=M):(r(s,u),M=A2(v,s.mode,M),M.return=s,s=M),o(s)):r(s,u)}return function(s,u,v,M){try{yn=0;var B=T(s,u,v,M);return ri=null,B}catch(j){if(j===Li||j===wl)throw j;var V=sa(29,j,null,s.mode);return V.lanes=M,V.return=s,V}}}var se=lu(!0),du=lu(!1),yr=!1;function pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function m1(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _r(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Tr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(F&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=Jo(t),Ph(t,null,r),a}return yl(t,e,a,r),Jo(t)}function ln(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,Bh(t,r)}}function _2(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var y1=!1;function dn(){if(y1){var t=ai;if(t!==null)throw t}}function cn(t,a,r,e){y1=!1;var i=t.updateQueue;yr=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var h=d,g=h.next;h.next=null,o===null?n=g:o.next=g,o=h;var f=t.alternate;f!==null&&(f=f.updateQueue,d=f.lastBaseUpdate,d!==o&&(d===null?f.firstBaseUpdate=g:d.next=g,f.lastBaseUpdate=h))}if(n!==null){var k=i.baseState;o=0,f=g=h=null,d=n;do{var p=d.lane&-536870913,x=p!==d.lane;if(x?(Y&p)===p:(e&p)===p){p!==0&&p===di&&(y1=!0),f!==null&&(f=f.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var y=t,b=d;p=a;var T=r;switch(b.tag){case 1:if(y=b.payload,typeof y=="function"){k=y.call(T,k,p);break t}k=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,p=typeof y=="function"?y.call(T,k,p):y,p==null)break t;k=ut({},k,p);break t;case 2:yr=!0}}p=d.callback,p!==null&&(t.flags|=64,x&&(t.flags|=8192),x=i.callbacks,x===null?i.callbacks=[p]:x.push(p))}else x={lane:p,tag:d.tag,payload:d.payload,callback:d.callback,next:null},f===null?(g=f=x,h=k):f=f.next=x,o|=p;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;x=d,d=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);f===null&&(h=k),i.baseState=h,i.firstBaseUpdate=g,i.lastBaseUpdate=f,n===null&&(i.shared.lanes=0),Yr|=o,t.lanes=o,t.memoizedState=k}}function cu(t,a){if(typeof t!="function")throw Error(m(191,t));t.call(a)}function hu(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)cu(r[t],a)}var ci=Ja(null),Io=Ja(0);function L0(t,a){t=vr,ot(Io,t),ot(ci,a),vr=t|a.baseLanes}function w1(){ot(Io,vr),ot(ci,ci.current)}function fd(){vr=Io.current,Nt(ci),Nt(Io)}var La=Ja(null),Sa=null;function Cr(t){var a=t.alternate;ot(kt,kt.current&1),ot(La,t),Sa===null&&(a===null||ci.current!==null||a.memoizedState!==null)&&(Sa=t)}function C1(t){ot(kt,kt.current),ot(La,t),Sa===null&&(Sa=t)}function uu(t){t.tag===22?(ot(kt,kt.current),ot(La,t),Sa===null&&(Sa=t)):br(t)}function br(){ot(kt,kt.current),ot(La,La.current)}function ua(t){Nt(La),Sa===t&&(Sa=null),Nt(kt)}var kt=Ja(0);function Po(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||G1(r)||Y1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var gr=0,D=null,it=null,yt=null,tl=!1,ei=!1,ge=!1,al=0,wn=0,ii=null,Y5=0;function ft(){throw Error(m(321))}function vd(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!xa(t[r],a[r]))return!1;return!0}function kd(t,a,r,e,i,n){return gr=n,D=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,z.H=t===null||t.memoizedState===null?qu:Wd,ge=!1,n=r(e,i),ge=!1,ei&&(n=gu(a,r,e,i)),su(t),n}function su(t){z.H=Cn;var a=it!==null&&it.next!==null;if(gr=0,yt=it=D=null,tl=!1,wn=0,ii=null,a)throw Error(m(300));t===null||bt||(t=t.dependencies,t!==null&&Fo(t)&&(bt=!0))}function gu(t,a,r,e){D=t;var i=0;do{if(ei&&(ii=null),wn=0,ei=!1,25<=i)throw Error(m(301));if(i+=1,yt=it=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}z.H=Gu,n=a(r,e)}while(ei);return n}function X5(){var t=z.H,a=t.useState()[0];return a=typeof a.then=="function"?En(a):a,t=t.useState()[0],(it!==null?it.memoizedState:null)!==t&&(D.flags|=1024),a}function xd(){var t=al!==0;return al=0,t}function Ld(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function Md(t){if(tl){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}tl=!1}gr=0,yt=it=D=null,ei=!1,wn=al=0,ii=null}function Ft(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?D.memoizedState=yt=t:yt=yt.next=t,yt}function xt(){if(it===null){var t=D.alternate;t=t!==null?t.memoizedState:null}else t=it.next;var a=yt===null?D.memoizedState:yt.next;if(a!==null)yt=a,it=t;else{if(t===null)throw D.alternate===null?Error(m(467)):Error(m(310));it=t,t={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},yt===null?D.memoizedState=yt=t:yt=yt.next=t}return yt}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function En(t){var a=wn;return wn+=1,ii===null&&(ii=[]),t=ou(ii,t,a),a=D,(yt===null?a.memoizedState:yt.next)===null&&(a=a.alternate,z.H=a===null||a.memoizedState===null?qu:Wd),t}function bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return En(t);if(t.$$typeof===or)return qt(t)}throw Error(m(438,String(t)))}function md(t){var a=null,r=D.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=D.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=Cl(),D.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=Sp;return a.index++,r}function pr(t,a){return typeof a=="function"?a(t):a}function zo(t){var a=xt();return yd(a,it,t)}function yd(t,a,r){var e=t.queue;if(e===null)throw Error(m(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var d=o=null,h=null,g=a,f=!1;do{var k=g.lane&-536870913;if(k!==g.lane?(Y&k)===k:(gr&k)===k){var p=g.revertLane;if(p===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),k===di&&(f=!0);else if((gr&p)===p){g=g.next,p===di&&(f=!0);continue}else k={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},h===null?(d=h=k,o=n):h=h.next=k,D.lanes|=p,Yr|=p;k=g.action,ge&&r(n,k),n=g.hasEagerState?g.eagerState:r(n,k)}else p={lane:k,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},h===null?(d=h=p,o=n):h=h.next=p,D.lanes|=k,Yr|=k;g=g.next}while(g!==null&&g!==a);if(h===null?o=n:h.next=d,!xa(n,t.memoizedState)&&(bt=!0,f&&(r=ai,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=h,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function T2(t){var a=xt(),r=a.queue;if(r===null)throw Error(m(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);xa(n,a.memoizedState)||(bt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function pu(t,a,r){var e=D,i=xt(),n=K;if(n){if(r===void 0)throw Error(m(407));r=r()}else r=a();var o=!xa((it||i).memoizedState,r);if(o&&(i.memoizedState=r,bt=!0),i=i.queue,wd(ku.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||yt!==null&&yt.memoizedState.tag&1){if(e.flags|=2048,hi(9,{destroy:void 0},vu.bind(null,e,i,r,a),null),nt===null)throw Error(m(349));n||(gr&127)!==0||fu(e,a,r)}return r}function fu(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=D.updateQueue,a===null?(a=Cl(),D.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function vu(t,a,r,e){a.value=r,a.getSnapshot=e,xu(a)&&Lu(t)}function ku(t,a,r){return r(function(){xu(a)&&Lu(t)})}function xu(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!xa(t,r)}catch{return!0}}function Lu(t){var a=xe(t,2);a!==null&&ia(a,t,2)}function b1(t){var a=Ft();if(typeof t=="function"){var r=t;if(t=r(),ge){jr(!0);try{r()}finally{jr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:t},a}function Mu(t,a,r,e){return t.baseState=r,yd(t,it,typeof e=="function"?e:pr)}function Q5(t,a,r,e,i){if(jl(t))throw Error(m(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};z.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,mu(a,n)):(n.next=r.next,a.pending=r.next=n)}}function mu(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=z.T,o={};z.T=o;try{var d=r(i,e),h=z.S;h!==null&&h(o,d),M0(t,a,d)}catch(g){B1(t,a,g)}finally{n!==null&&o.types!==null&&(n.types=o.types),z.T=n}}else try{n=r(i,e),M0(t,a,n)}catch(g){B1(t,a,g)}}function M0(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){m0(t,a,e)},function(e){return B1(t,a,e)}):m0(t,a,r)}function m0(t,a,r){a.status="fulfilled",a.value=r,yu(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,mu(t,r)))}function B1(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,yu(a),a=a.next;while(a!==e)}t.action=null}function yu(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function wu(t,a){return a}function y0(t,a){if(K){var r=nt.formState;if(r!==null){t:{var e=D;if(K){if(ht){a:{for(var i=ht,n=Ha;i.nodeType!==8;){if(!n){i=null;break a}if(i=Aa(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){ht=Aa(i.nextSibling),e=i.data==="F!";break t}}qr(e)}e=!1}e&&(a=r[0])}}return r=Ft(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wu,lastRenderedState:a},r.queue=e,r=Ou.bind(null,D,e),e.dispatch=r,e=b1(!1),n=jd.bind(null,D,!1,e.queue),e=Ft(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=Q5.bind(null,D,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function w0(t){var a=xt();return Cu(a,it,t)}function Cu(t,a,r){if(a=yd(t,a,wu)[0],t=zo(pr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=En(a)}catch(o){throw o===Li?wl:o}else e=a;a=xt();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(D.flags|=2048,hi(9,{destroy:void 0},K5.bind(null,i,r),null)),[e,n,t]}function K5(t,a){t.action=a}function C0(t){var a=xt(),r=it;if(r!==null)return Cu(a,r,t);xt(),a=a.memoizedState,r=xt();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function hi(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=D.updateQueue,a===null&&(a=Cl(),D.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function bu(){return xt().memoizedState}function _o(t,a,r,e){var i=Ft();D.flags|=t,i.memoizedState=hi(1|a,{destroy:void 0},r,e===void 0?null:e)}function Bl(t,a,r,e){var i=xt();e=e===void 0?null:e;var n=i.memoizedState.inst;it!==null&&e!==null&&vd(e,it.memoizedState.deps)?i.memoizedState=hi(a,n,r,e):(D.flags|=t,i.memoizedState=hi(1|a,n,r,e))}function b0(t,a){_o(8390656,8,t,a)}function wd(t,a){Bl(2048,8,t,a)}function J5(t){D.flags|=4;var a=D.updateQueue;if(a===null)a=Cl(),D.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function Bu(t){var a=xt().memoizedState;return J5({ref:a,nextImpl:t}),function(){if((F&2)!==0)throw Error(m(440));return a.impl.apply(void 0,arguments)}}function ju(t,a){return Bl(4,2,t,a)}function Wu(t,a){return Bl(4,4,t,a)}function Hu(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Su(t,a,r){r=r!=null?r.concat([t]):null,Bl(4,4,Hu.bind(null,a,t),r)}function Cd(){}function Au(t,a){var r=xt();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&vd(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function Vu(t,a){var r=xt();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&vd(a,e[1]))return e[0];if(e=t(),ge){jr(!0);try{t()}finally{jr(!1)}}return r.memoizedState=[e,a],e}function bd(t,a,r){return r===void 0||(gr&1073741824)!==0&&(Y&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=Ms(),D.lanes|=t,Yr|=t,r)}function zu(t,a,r,e){return xa(r,a)?r:ci.current!==null?(t=bd(t,r,e),xa(t,a)||(bt=!0),t):(gr&42)===0||(gr&1073741824)!==0&&(Y&261930)===0?(bt=!0,t.memoizedState=r):(t=Ms(),D.lanes|=t,Yr|=t,a)}function _u(t,a,r,e,i){var n=$.p;$.p=n!==0&&8>n?n:8;var o=z.T,d={};z.T=d,jd(t,!1,a,r);try{var h=i(),g=z.S;if(g!==null&&g(d,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var f=G5(h,e);hn(t,a,f,ka(t))}else hn(t,a,e,ka(t))}catch(k){hn(t,a,{then:function(){},status:"rejected",reason:k},ka())}finally{$.p=n,o!==null&&d.types!==null&&(o.types=d.types),z.T=o}}function R5(){}function j1(t,a,r,e){if(t.tag!==5)throw Error(m(476));var i=Tu(t).queue;_u(t,i,a,ne,r===null?R5:function(){return Nu(t),r(e)})}function Tu(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:ne},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Nu(t){var a=Tu(t);a.next===null&&(a=t.alternate.memoizedState),hn(t,a.next.queue,{},ka())}function Bd(){return qt(jn)}function Eu(){return xt().memoizedState}function Du(){return xt().memoizedState}function F5(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=ka();t=_r(r);var e=Tr(a,t,r);e!==null&&(ia(e,a,r),ln(e,a,r)),a={cache:ud()},t.payload=a;return}a=a.return}}function $5(t,a,r){var e=ka();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},jl(t)?Uu(a,r):(r=ld(t,a,r,e),r!==null&&(ia(r,t,e),Zu(r,a,e)))}function Ou(t,a,r){var e=ka();hn(t,a,r,e)}function hn(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(jl(t))Uu(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,d=n(o,r);if(i.hasEagerState=!0,i.eagerState=d,xa(d,o))return yl(t,a,i,0),nt===null&&ml(),!1}catch{}if(r=ld(t,a,i,e),r!==null)return ia(r,t,e),Zu(r,a,e),!0}return!1}function jd(t,a,r,e){if(e={lane:2,revertLane:Nd(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},jl(t)){if(a)throw Error(m(479))}else a=ld(t,r,e,2),a!==null&&ia(a,t,2)}function jl(t){var a=t.alternate;return t===D||a!==null&&a===D}function Uu(t,a){ei=tl=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function Zu(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,Bh(t,r)}}var Cn={readContext:qt,use:bl,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useLayoutEffect:ft,useInsertionEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useSyncExternalStore:ft,useId:ft,useHostTransitionStatus:ft,useFormState:ft,useActionState:ft,useOptimistic:ft,useMemoCache:ft,useCacheRefresh:ft};Cn.useEffectEvent=ft;var qu={readContext:qt,use:bl,useCallback:function(t,a){return Ft().memoizedState=[t,a===void 0?null:a],t},useContext:qt,useEffect:b0,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,_o(4194308,4,Hu.bind(null,a,t),r)},useLayoutEffect:function(t,a){return _o(4194308,4,t,a)},useInsertionEffect:function(t,a){_o(4,2,t,a)},useMemo:function(t,a){var r=Ft();a=a===void 0?null:a;var e=t();if(ge){jr(!0);try{t()}finally{jr(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=Ft();if(r!==void 0){var i=r(a);if(ge){jr(!0);try{r(a)}finally{jr(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=$5.bind(null,D,t),[e.memoizedState,t]},useRef:function(t){var a=Ft();return t={current:t},a.memoizedState=t},useState:function(t){t=b1(t);var a=t.queue,r=Ou.bind(null,D,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:Cd,useDeferredValue:function(t,a){var r=Ft();return bd(r,t,a)},useTransition:function(){var t=b1(!1);return t=_u.bind(null,D,t.queue,!0,!1),Ft().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=D,i=Ft();if(K){if(r===void 0)throw Error(m(407));r=r()}else{if(r=a(),nt===null)throw Error(m(349));(Y&127)!==0||fu(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,b0(ku.bind(null,e,n,t),[t]),e.flags|=2048,hi(9,{destroy:void 0},vu.bind(null,e,n,r,a),null),r},useId:function(){var t=Ft(),a=nt.identifierPrefix;if(K){var r=Xa,e=Ya;r=(e&~(1<<32-va(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=al++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=Y5++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:Bd,useFormState:y0,useActionState:y0,useOptimistic:function(t){var a=Ft();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=jd.bind(null,D,!0,r),r.dispatch=a,[t,a]},useMemoCache:md,useCacheRefresh:function(){return Ft().memoizedState=F5.bind(null,D)},useEffectEvent:function(t){var a=Ft(),r={impl:t};return a.memoizedState=r,function(){if((F&2)!==0)throw Error(m(440));return r.impl.apply(void 0,arguments)}}},Wd={readContext:qt,use:bl,useCallback:Au,useContext:qt,useEffect:wd,useImperativeHandle:Su,useInsertionEffect:ju,useLayoutEffect:Wu,useMemo:Vu,useReducer:zo,useRef:bu,useState:function(){return zo(pr)},useDebugValue:Cd,useDeferredValue:function(t,a){var r=xt();return zu(r,it.memoizedState,t,a)},useTransition:function(){var t=zo(pr)[0],a=xt().memoizedState;return[typeof t=="boolean"?t:En(t),a]},useSyncExternalStore:pu,useId:Eu,useHostTransitionStatus:Bd,useFormState:w0,useActionState:w0,useOptimistic:function(t,a){var r=xt();return Mu(r,it,t,a)},useMemoCache:md,useCacheRefresh:Du};Wd.useEffectEvent=Bu;var Gu={readContext:qt,use:bl,useCallback:Au,useContext:qt,useEffect:wd,useImperativeHandle:Su,useInsertionEffect:ju,useLayoutEffect:Wu,useMemo:Vu,useReducer:T2,useRef:bu,useState:function(){return T2(pr)},useDebugValue:Cd,useDeferredValue:function(t,a){var r=xt();return it===null?bd(r,t,a):zu(r,it.memoizedState,t,a)},useTransition:function(){var t=T2(pr)[0],a=xt().memoizedState;return[typeof t=="boolean"?t:En(t),a]},useSyncExternalStore:pu,useId:Eu,useHostTransitionStatus:Bd,useFormState:C0,useActionState:C0,useOptimistic:function(t,a){var r=xt();return it!==null?Mu(r,it,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:md,useCacheRefresh:Du};Gu.useEffectEvent=Bu;function N2(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:ut({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var W1={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=ka(),i=_r(e);i.payload=a,r!=null&&(i.callback=r),a=Tr(t,i,e),a!==null&&(ia(a,t,e),ln(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=ka(),i=_r(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=Tr(t,i,e),a!==null&&(ia(a,t,e),ln(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=ka(),e=_r(r);e.tag=2,a!=null&&(e.callback=a),a=Tr(t,e,r),a!==null&&(ia(a,t,r),ln(a,t,r))}};function B0(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!Ln(r,e)||!Ln(i,n):!0}function j0(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&W1.enqueueReplaceState(a,a.state,null)}function pe(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=ut({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function Yu(t){Ko(t)}function Xu(t){console.error(t)}function Qu(t){Ko(t)}function rl(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function W0(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function H1(t,a,r){return r=_r(r),r.tag=3,r.payload={element:null},r.callback=function(){rl(t,a)},r}function Ku(t){return t=_r(t),t.tag=3,t}function Ju(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){W0(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){W0(a,r,e),typeof i!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var d=e.stack;this.componentDidCatch(e.value,{componentStack:d!==null?d:""})})}function I5(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&xi(a,r,i,!0),r=La.current,r!==null){switch(r.tag){case 31:case 13:return Sa===null?ll():r.alternate===null&&vt===0&&(vt=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===$o?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),K2(t,e,i)),!1;case 22:return r.flags|=65536,e===$o?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),K2(t,e,i)),!1}throw Error(m(435,r.tag))}return K2(t,e,i),ll(),!1}if(K)return a=La.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==v1&&(t=Error(m(422),{cause:e}),mn(Wa(t,r)))):(e!==v1&&(a=Error(m(423),{cause:e}),mn(Wa(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=Wa(e,r),i=H1(t.stateNode,e,i),_2(t,i),vt!==4&&(vt=2)),!1;var n=Error(m(520),{cause:e});if(n=Wa(n,r),gn===null?gn=[n]:gn.push(n),vt!==4&&(vt=2),a===null)return!0;e=Wa(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=H1(r.stateNode,e,t),_2(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Nr===null||!Nr.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=Ku(i),Ju(i,t,r,e),_2(r,i),!1}r=r.return}while(r!==null);return!1}var Hd=Error(m(461)),bt=!1;function Ot(t,a,r,e){a.child=t===null?du(a,null,r,e):se(a,t.child,r,e)}function H0(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var d in e)d!=="ref"&&(o[d]=e[d])}else o=e;return ue(a),e=kd(t,a,r,o,n,i),d=xd(),t!==null&&!bt?(Ld(t,a,i),fr(t,a,i)):(K&&d&&cd(a),a.flags|=1,Ot(t,a,e,i),a.child)}function S0(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!dd(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,Ru(t,a,n,e,i)):(t=Ao(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!Sd(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:Ln,r(o,e)&&t.ref===a.ref)return fr(t,a,i)}return a.flags|=1,t=cr(n,e),t.ref=a.ref,t.return=a,a.child=t}function Ru(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(Ln(n,e)&&t.ref===a.ref)if(bt=!1,a.pendingProps=e=n,Sd(t,i))(t.flags&131072)!==0&&(bt=!0);else return a.lanes=t.lanes,fr(t,a,i)}return S1(t,a,r,e,i)}function Fu(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return A0(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vo(a,n!==null?n.cachePool:null),n!==null?L0(a,n):w1(),uu(a);else return e=a.lanes=536870912,A0(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(Vo(a,n.cachePool),L0(a,n),br(a),a.memoizedState=null):(t!==null&&Vo(a,null),w1(),br(a));return Ot(t,a,i,r),a.child}function tn(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function A0(t,a,r,e,i){var n=sd();return n=n===null?null:{parent:Ct._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&Vo(a,null),w1(),uu(a),t!==null&&xi(t,a,e,!0),a.childLanes=i,null}function To(t,a){return a=el({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function V0(t,a,r){return se(a,t.child,null,r),t=To(a,a.pendingProps),t.flags|=2,ua(a),a.memoizedState=null,t}function P5(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(K){if(e.mode==="hidden")return t=To(a,e),a.lanes=536870912,tn(null,t);if(C1(a),(t=ht)?(t=qs(t,Ha),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Zr!==null?{id:Ya,overflow:Xa}:null,retryLane:536870912,hydrationErrors:null},r=au(t),r.return=a,a.child=r,Zt=a,ht=null)):t=null,t===null)throw qr(a);return a.lanes=536870912,null}return To(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(C1(a),i)if(a.flags&256)a.flags&=-257,a=V0(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(m(558));else if(bt||xi(t,a,r,!1),i=(r&t.childLanes)!==0,bt||i){if(e=nt,e!==null&&(o=jh(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,xe(t,o),ia(e,t,o),Hd;ll(),a=V0(t,a,r)}else t=n.treeContext,ht=Aa(o.nextSibling),Zt=a,K=!0,zr=null,Ha=!1,t!==null&&eu(a,t),a=To(a,e),a.flags|=4096;return a}return t=cr(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function No(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(m(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function S1(t,a,r,e,i){return ue(a),r=kd(t,a,r,e,void 0,i),e=xd(),t!==null&&!bt?(Ld(t,a,i),fr(t,a,i)):(K&&e&&cd(a),a.flags|=1,Ot(t,a,r,i),a.child)}function z0(t,a,r,e,i,n){return ue(a),a.updateQueue=null,r=gu(a,e,r,i),su(t),e=xd(),t!==null&&!bt?(Ld(t,a,n),fr(t,a,n)):(K&&e&&cd(a),a.flags|=1,Ot(t,a,r,n),a.child)}function _0(t,a,r,e,i){if(ue(a),a.stateNode===null){var n=Je,o=r.contextType;typeof o=="object"&&o!==null&&(n=qt(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=W1,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},pd(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?qt(o):Je,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(N2(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&W1.enqueueReplaceState(n,n.state,null),cn(a,e,n,i),dn(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var d=a.memoizedProps,h=pe(r,d);n.props=h;var g=n.context,f=r.contextType;o=Je,typeof f=="object"&&f!==null&&(o=qt(f));var k=r.getDerivedStateFromProps;f=typeof k=="function"||typeof n.getSnapshotBeforeUpdate=="function",d=a.pendingProps!==d,f||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(d||g!==o)&&j0(a,n,e,o),yr=!1;var p=a.memoizedState;n.state=p,cn(a,e,n,i),dn(),g=a.memoizedState,d||p!==g||yr?(typeof k=="function"&&(N2(a,r,k,e),g=a.memoizedState),(h=yr||B0(a,r,h,e,p,g,o))?(f||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=g),n.props=e,n.state=g,n.context=o,e=h):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,m1(t,a),o=a.memoizedProps,f=pe(r,o),n.props=f,k=a.pendingProps,p=n.context,g=r.contextType,h=Je,typeof g=="object"&&g!==null&&(h=qt(g)),d=r.getDerivedStateFromProps,(g=typeof d=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==k||p!==h)&&j0(a,n,e,h),yr=!1,p=a.memoizedState,n.state=p,cn(a,e,n,i),dn();var x=a.memoizedState;o!==k||p!==x||yr||t!==null&&t.dependencies!==null&&Fo(t.dependencies)?(typeof d=="function"&&(N2(a,r,d,e),x=a.memoizedState),(f=yr||B0(a,r,f,e,p,x,h)||t!==null&&t.dependencies!==null&&Fo(t.dependencies))?(g||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,x,h),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,x,h)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=x),n.props=e,n.state=x,n.context=h,e=f):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,No(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=se(a,t.child,null,i),a.child=se(a,null,r,i)):Ot(t,a,r,i),a.memoizedState=n.state,t=a.child):t=fr(t,a,i),t}function T0(t,a,r,e){return he(),a.flags|=256,Ot(t,a,r,e),a.child}var E2={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function D2(t){return{baseLanes:t,cachePool:nu()}}function O2(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=ga),t}function $u(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(kt.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(K){if(i?Cr(a):br(a),(t=ht)?(t=qs(t,Ha),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Zr!==null?{id:Ya,overflow:Xa}:null,retryLane:536870912,hydrationErrors:null},r=au(t),r.return=a,a.child=r,Zt=a,ht=null)):t=null,t===null)throw qr(a);return Y1(t)?a.lanes=32:a.lanes=536870912,null}var d=e.children;return e=e.fallback,i?(br(a),i=a.mode,d=el({mode:"hidden",children:d},i),e=oe(e,i,r,null),d.return=a,e.return=a,d.sibling=e,a.child=d,e=a.child,e.memoizedState=D2(r),e.childLanes=O2(t,o,r),a.memoizedState=E2,tn(null,e)):(Cr(a),A1(a,d))}var h=t.memoizedState;if(h!==null&&(d=h.dehydrated,d!==null)){if(n)a.flags&256?(Cr(a),a.flags&=-257,a=U2(t,a,r)):a.memoizedState!==null?(br(a),a.child=t.child,a.flags|=128,a=null):(br(a),d=e.fallback,i=a.mode,e=el({mode:"visible",children:e.children},i),d=oe(d,i,r,null),d.flags|=2,e.return=a,d.return=a,e.sibling=d,a.child=e,se(a,t.child,null,r),e=a.child,e.memoizedState=D2(r),e.childLanes=O2(t,o,r),a.memoizedState=E2,a=tn(null,e));else if(Cr(a),Y1(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var g=o.dgst;o=g,e=Error(m(419)),e.stack="",e.digest=o,mn({value:e,source:null,stack:null}),a=U2(t,a,r)}else if(bt||xi(t,a,r,!1),o=(r&t.childLanes)!==0,bt||o){if(o=nt,o!==null&&(e=jh(o,r),e!==0&&e!==h.retryLane))throw h.retryLane=e,xe(t,e),ia(o,t,e),Hd;G1(d)||ll(),a=U2(t,a,r)}else G1(d)?(a.flags|=192,a.child=t.child,a=null):(t=h.treeContext,ht=Aa(d.nextSibling),Zt=a,K=!0,zr=null,Ha=!1,t!==null&&eu(a,t),a=A1(a,e.children),a.flags|=4096);return a}return i?(br(a),d=e.fallback,i=a.mode,h=t.child,g=h.sibling,e=cr(h,{mode:"hidden",children:e.children}),e.subtreeFlags=h.subtreeFlags&65011712,g!==null?d=cr(g,d):(d=oe(d,i,r,null),d.flags|=2),d.return=a,e.return=a,e.sibling=d,a.child=e,tn(null,e),e=a.child,d=t.child.memoizedState,d===null?d=D2(r):(i=d.cachePool,i!==null?(h=Ct._currentValue,i=i.parent!==h?{parent:h,pool:h}:i):i=nu(),d={baseLanes:d.baseLanes|r,cachePool:i}),e.memoizedState=d,e.childLanes=O2(t,o,r),a.memoizedState=E2,tn(t.child,e)):(Cr(a),r=t.child,t=r.sibling,r=cr(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function A1(t,a){return a=el({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function el(t,a){return t=sa(22,t,null,a),t.lanes=0,t}function U2(t,a,r){return se(a,t.child,null,r),t=A1(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function N0(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),x1(t.return,a,r)}function Z2(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function Iu(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=kt.current,d=(o&2)!==0;if(d?(o=o&1|2,a.flags|=128):o&=1,ot(kt,o),Ot(t,a,e,r),e=K?Mn:0,!d&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&N0(t,r,a);else if(t.tag===19)N0(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&Po(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),Z2(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&Po(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}Z2(a,!0,r,null,n,e);break;case"together":Z2(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function fr(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Yr|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(xi(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(m(153));if(a.child!==null){for(t=a.child,r=cr(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=cr(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function Sd(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&Fo(t)))}function tf(t,a,r){switch(a.tag){case 3:Go(a,a.stateNode.containerInfo),wr(a,Ct,t.memoizedState.cache),he();break;case 27:case 5:n1(a);break;case 4:Go(a,a.stateNode.containerInfo);break;case 10:wr(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,C1(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(Cr(a),a.flags|=128,null):(r&a.child.childLanes)!==0?$u(t,a,r):(Cr(a),t=fr(t,a,r),t!==null?t.sibling:null);Cr(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||(xi(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return Iu(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ot(kt,kt.current),e)break;return null;case 22:return a.lanes=0,Fu(t,a,r,a.pendingProps);case 24:wr(a,Ct,t.memoizedState.cache)}return fr(t,a,r)}function Pu(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)bt=!0;else{if(!Sd(t,r)&&(a.flags&128)===0)return bt=!1,tf(t,a,r);bt=(t.flags&131072)!==0}else bt=!1,K&&(a.flags&1048576)!==0&&ru(a,Mn,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=ee(a.elementType),a.type=t,typeof t=="function")dd(t)?(e=pe(t,e),a.tag=1,a=_0(null,a,t,e,r)):(a.tag=0,a=S1(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===J1){a.tag=11,a=H0(null,a,t,e,r);break t}else if(i===R1){a.tag=14,a=S0(null,a,t,e,r);break t}}throw a=e1(t)||t,Error(m(306,a,""))}}return a;case 0:return S1(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=pe(e,a.pendingProps),_0(t,a,e,i,r);case 3:t:{if(Go(a,a.stateNode.containerInfo),t===null)throw Error(m(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,m1(t,a),cn(a,e,null,r);var o=a.memoizedState;if(e=o.cache,wr(a,Ct,e),e!==n.cache&&L1(a,[Ct],r,!0),dn(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=T0(t,a,e,r);break t}else if(e!==i){i=Wa(Error(m(424)),a),mn(i),a=T0(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ht=Aa(t.firstChild),Zt=a,K=!0,zr=null,Ha=!0,r=du(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(he(),e===i){a=fr(t,a,r);break t}Ot(t,a,e,r)}a=a.child}return a;case 26:return No(t,a),t===null?(r=ih(a.type,null,a.pendingProps,null))?a.memoizedState=r:K||(r=a.type,t=a.pendingProps,e=ul(Vr.current).createElement(r),e[Ut]=a,e[na]=t,Gt(e,r,t),Tt(e),a.stateNode=e):a.memoizedState=ih(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return n1(a),t===null&&K&&(e=a.stateNode=Gs(a.type,a.pendingProps,Vr.current),Zt=a,Ha=!0,i=ht,Qr(a.type)?(X1=i,ht=Aa(e.firstChild)):ht=i),Ot(t,a,a.pendingProps.children,r),No(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&K&&((i=e=ht)&&(e=Hf(e,a.type,a.pendingProps,Ha),e!==null?(a.stateNode=e,Zt=a,ht=Aa(e.firstChild),Ha=!1,i=!0):i=!1),i||qr(a)),n1(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,Z1(i,n)?e=null:o!==null&&Z1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=kd(t,a,X5,null,null,r),jn._currentValue=i),No(t,a),Ot(t,a,e,r),a.child;case 6:return t===null&&K&&((t=r=ht)&&(r=Sf(r,a.pendingProps,Ha),r!==null?(a.stateNode=r,Zt=a,ht=null,t=!0):t=!1),t||qr(a)),null;case 13:return $u(t,a,r);case 4:return Go(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=se(a,null,e,r):Ot(t,a,e,r),a.child;case 11:return H0(t,a,a.type,a.pendingProps,r);case 7:return Ot(t,a,a.pendingProps,r),a.child;case 8:return Ot(t,a,a.pendingProps.children,r),a.child;case 12:return Ot(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,wr(a,a.type,e.value),Ot(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,ue(a),i=qt(i),e=e(i),a.flags|=1,Ot(t,a,e,r),a.child;case 14:return S0(t,a,a.type,a.pendingProps,r);case 15:return Ru(t,a,a.type,a.pendingProps,r);case 19:return Iu(t,a,r);case 31:return P5(t,a,r);case 22:return Fu(t,a,r,a.pendingProps);case 24:return ue(a),e=qt(Ct),t===null?(i=sd(),i===null&&(i=nt,n=ud(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},pd(a),wr(a,Ct,i)):((t.lanes&r)!==0&&(m1(t,a),cn(a,null,null,r),dn()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),wr(a,Ct,e)):(e=n.cache,wr(a,Ct,e),e!==i.cache&&L1(a,[Ct],r,!0))),Ot(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(m(156,a.tag))}function tr(t){t.flags|=4}function q2(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(ws())t.flags|=8192;else throw de=$o,gd}else t.flags&=-16777217}function E0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Qs(a))if(ws())t.flags|=8192;else throw de=$o,gd}function Mo(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?Ch():536870912,t.lanes|=a,ui|=a)}function Ki(t,a){if(!K)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function ct(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function af(t,a,r){var e=a.pendingProps;switch(hd(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(a),null;case 1:return ct(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),hr(Ct),ni(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ne(a)?tr(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,z2())),ct(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(tr(a),n!==null?(ct(a),E0(a,n)):(ct(a),q2(a,i,null,e,r))):n?n!==t.memoizedState?(tr(a),ct(a),E0(a,n)):(ct(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&tr(a),ct(a),q2(a,i,t,e,r)),null;case 27:if(Yo(a),r=Vr.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&tr(a);else{if(!e){if(a.stateNode===null)throw Error(m(166));return ct(a),null}t=Ka.current,Ne(a)?s0(a,t):(t=Gs(i,e,r),a.stateNode=t,tr(a))}return ct(a),null;case 5:if(Yo(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&tr(a);else{if(!e){if(a.stateNode===null)throw Error(m(166));return ct(a),null}if(n=Ka.current,Ne(a))s0(a,n);else{var o=ul(Vr.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[Ut]=a,n[na]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(Gt(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&tr(a)}}return ct(a),q2(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&tr(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(m(166));if(t=Vr.current,Ne(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=Zt,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[Ut]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||Os(t.nodeValue,r)),t||qr(a,!0)}else t=ul(t).createTextNode(e),t[Ut]=a,a.stateNode=t}return ct(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=Ne(a),r!==null){if(t===null){if(!e)throw Error(m(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(m(557));t[Ut]=a}else he(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ct(a),t=!1}else r=z2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?(ua(a),a):(ua(a),null);if((a.flags&128)!==0)throw Error(m(558))}return ct(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Ne(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(m(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[Ut]=a}else he(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ct(a),i=!1}else i=z2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(ua(a),a):(ua(a),null)}return ua(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),Mo(a,a.updateQueue),ct(a),null);case 4:return ni(),t===null&&Ed(a.stateNode.containerInfo),ct(a),null;case 10:return hr(a.type),ct(a),null;case 19:if(Nt(kt),e=a.memoizedState,e===null)return ct(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)Ki(e,!1);else{if(vt!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=Po(t),n!==null){for(a.flags|=128,Ki(e,!1),t=n.updateQueue,a.updateQueue=t,Mo(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)tu(r,t),r=r.sibling;return ot(kt,kt.current&1|2),K&&ir(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&pa()>nl&&(a.flags|=128,i=!0,Ki(e,!1),a.lanes=4194304)}else{if(!i)if(t=Po(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,Mo(a,t),Ki(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!K)return ct(a),null}else 2*pa()-e.renderingStartTime>nl&&r!==536870912&&(a.flags|=128,i=!0,Ki(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=pa(),t.sibling=null,r=kt.current,ot(kt,i?r&1|2:r&1),K&&ir(a,e.treeForkCount),t):(ct(a),null);case 22:case 23:return ua(a),fd(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(ct(a),a.subtreeFlags&6&&(a.flags|=8192)):ct(a),r=a.updateQueue,r!==null&&Mo(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&Nt(le),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),hr(Ct),ct(a),null;case 25:return null;case 30:return null}throw Error(m(156,a.tag))}function rf(t,a){switch(hd(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return hr(Ct),ni(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Yo(a),null;case 31:if(a.memoizedState!==null){if(ua(a),a.alternate===null)throw Error(m(340));he()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(ua(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(m(340));he()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Nt(kt),null;case 4:return ni(),null;case 10:return hr(a.type),null;case 22:case 23:return ua(a),fd(),t!==null&&Nt(le),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return hr(Ct),null;case 25:return null;default:return null}}function ts(t,a){switch(hd(a),a.tag){case 3:hr(Ct),ni();break;case 26:case 27:case 5:Yo(a);break;case 4:ni();break;case 31:a.memoizedState!==null&&ua(a);break;case 13:ua(a);break;case 19:Nt(kt);break;case 10:hr(a.type);break;case 22:case 23:ua(a),fd(),t!==null&&Nt(le);break;case 24:hr(Ct)}}function Dn(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(d){rt(a,a.return,d)}}function Gr(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,i=a;var h=r,g=d;try{g()}catch(f){rt(i,h,f)}}}e=e.next}while(e!==n)}}catch(f){rt(a,a.return,f)}}function as(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{hu(a,r)}catch(e){rt(t,t.return,e)}}}function rs(t,a,r){r.props=pe(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){rt(t,a,e)}}function un(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){rt(t,a,i)}}function Qa(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){rt(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){rt(t,a,i)}else r.current=null}function es(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){rt(t,t.return,i)}}function G2(t,a,r){try{var e=t.stateNode;wf(e,t.type,r,a),e[na]=a}catch(i){rt(t,t.return,i)}}function is(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qr(t.type)||t.tag===4}function Y2(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||is(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function V1(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=lr));else if(e!==4&&(e===27&&Qr(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(V1(t,a,r),t=t.sibling;t!==null;)V1(t,a,r),t=t.sibling}function il(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&Qr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(il(t,a,r),t=t.sibling;t!==null;)il(t,a,r),t=t.sibling}function ns(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Gt(a,e,r),a[Ut]=t,a[na]=r}catch(n){rt(t,t.return,n)}}var nr=!1,wt=!1,X2=!1,D0=typeof WeakSet=="function"?WeakSet:Set,_t=null;function ef(t,a){if(t=t.containerInfo,O1=fl,t=Qh(t),nd(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,d=-1,h=-1,g=0,f=0,k=t,p=null;a:for(;;){for(var x;k!==r||i!==0&&k.nodeType!==3||(d=o+i),k!==n||e!==0&&k.nodeType!==3||(h=o+e),k.nodeType===3&&(o+=k.nodeValue.length),(x=k.firstChild)!==null;)p=k,k=x;for(;;){if(k===t)break a;if(p===r&&++g===i&&(d=o),p===n&&++f===e&&(h=o),(x=k.nextSibling)!==null)break;k=p,p=k.parentNode}k=x}r=d===-1||h===-1?null:{start:d,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(U1={focusedElem:t,selectionRange:r},fl=!1,_t=a;_t!==null;)if(a=_t,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,_t=t;else for(;_t!==null;){switch(a=_t,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var y=pe(r.type,i);t=e.getSnapshotBeforeUpdate(y,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(b){rt(r,r.return,b)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)q1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":q1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(m(163))}if(t=a.sibling,t!==null){t.return=a.return,_t=t;break}_t=a.return}}function os(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:rr(t,r),e&4&&Dn(5,r);break;case 1:if(rr(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){rt(r,r.return,o)}else{var i=pe(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){rt(r,r.return,o)}}e&64&&as(r),e&512&&un(r,r.return);break;case 3:if(rr(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{hu(t,a)}catch(o){rt(r,r.return,o)}}break;case 27:a===null&&e&4&&ns(r);case 26:case 5:rr(t,r),a===null&&e&4&&es(r),e&512&&un(r,r.return);break;case 12:rr(t,r);break;case 31:rr(t,r),e&4&&cs(t,r);break;case 13:rr(t,r),e&4&&hs(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=gf.bind(null,r),Af(t,r))));break;case 22:if(e=r.memoizedState!==null||nr,!e){a=a!==null&&a.memoizedState!==null||wt,i=nr;var n=wt;nr=e,(wt=a)&&!n?er(t,r,(r.subtreeFlags&8772)!==0):rr(t,r),nr=i,wt=n}break;case 30:break;default:rr(t,r)}}function ls(t){var a=t.alternate;a!==null&&(t.alternate=null,ls(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&P1(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,ra=!1;function ar(t,a,r){for(r=r.child;r!==null;)ds(t,a,r),r=r.sibling}function ds(t,a,r){if(fa&&typeof fa.onCommitFiberUnmount=="function")try{fa.onCommitFiberUnmount(An,r)}catch{}switch(r.tag){case 26:wt||Qa(r,a),ar(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:wt||Qa(r,a);var e=gt,i=ra;Qr(r.type)&&(gt=r.stateNode,ra=!1),ar(t,a,r),fn(r.stateNode),gt=e,ra=i;break;case 5:wt||Qa(r,a);case 6:if(e=gt,i=ra,gt=null,ar(t,a,r),gt=e,ra=i,gt!==null)if(ra)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(r.stateNode)}catch(n){rt(r,a,n)}else try{gt.removeChild(r.stateNode)}catch(n){rt(r,a,n)}break;case 18:gt!==null&&(ra?(t=gt,P0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),fi(t)):P0(gt,r.stateNode));break;case 4:e=gt,i=ra,gt=r.stateNode.containerInfo,ra=!0,ar(t,a,r),gt=e,ra=i;break;case 0:case 11:case 14:case 15:Gr(2,r,a),wt||Gr(4,r,a),ar(t,a,r);break;case 1:wt||(Qa(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&rs(r,a,e)),ar(t,a,r);break;case 21:ar(t,a,r);break;case 22:wt=(e=wt)||r.memoizedState!==null,ar(t,a,r),wt=e;break;default:ar(t,a,r)}}function cs(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{fi(t)}catch(r){rt(a,a.return,r)}}}function hs(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{fi(t)}catch(r){rt(a,a.return,r)}}function nf(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new D0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new D0),a;default:throw Error(m(435,t.tag))}}function mo(t,a){var r=nf(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=pf.bind(null,t,e);e.then(i,i)}})}function ta(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,d=o;t:for(;d!==null;){switch(d.tag){case 27:if(Qr(d.type)){gt=d.stateNode,ra=!1;break t}break;case 5:gt=d.stateNode,ra=!1;break t;case 3:case 4:gt=d.stateNode.containerInfo,ra=!0;break t}d=d.return}if(gt===null)throw Error(m(160));ds(n,o,i),gt=null,ra=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)us(a,t),a=a.sibling}var Ea=null;function us(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ta(a,t),aa(t),e&4&&(Gr(3,t,t.return),Dn(3,t),Gr(5,t,t.return));break;case 1:ta(a,t),aa(t),e&512&&(wt||r===null||Qa(r,r.return)),e&64&&nr&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=Ea;if(ta(a,t),aa(t),e&512&&(wt||r===null||Qa(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[_n]||n[Ut]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),Gt(n,e,r),n[Ut]=t,Tt(n),e=n;break t;case"link":var o=oh("link","href",i).get(e+(r.href||""));if(o){for(var d=0;d<o.length;d++)if(n=o[d],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(d,1);break a}}n=i.createElement(e),Gt(n,e,r),i.head.appendChild(n);break;case"meta":if(o=oh("meta","content",i).get(e+(r.content||""))){for(d=0;d<o.length;d++)if(n=o[d],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(d,1);break a}}n=i.createElement(e),Gt(n,e,r),i.head.appendChild(n);break;default:throw Error(m(468,e))}n[Ut]=t,Tt(n),e=n}t.stateNode=e}else lh(i,t.type,t.stateNode);else t.stateNode=nh(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?lh(i,t.type,t.stateNode):nh(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&G2(t,t.memoizedProps,r.memoizedProps)}break;case 27:ta(a,t),aa(t),e&512&&(wt||r===null||Qa(r,r.return)),r!==null&&e&4&&G2(t,t.memoizedProps,r.memoizedProps);break;case 5:if(ta(a,t),aa(t),e&512&&(wt||r===null||Qa(r,r.return)),t.flags&32){i=t.stateNode;try{li(i,"")}catch(y){rt(t,t.return,y)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,G2(t,i,r!==null?r.memoizedProps:i)),e&1024&&(X2=!0);break;case 6:if(ta(a,t),aa(t),e&4){if(t.stateNode===null)throw Error(m(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(y){rt(t,t.return,y)}}break;case 3:if(Oo=null,i=Ea,Ea=sl(a.containerInfo),ta(a,t),Ea=i,aa(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{fi(a.containerInfo)}catch(y){rt(t,t.return,y)}X2&&(X2=!1,ss(t));break;case 4:e=Ea,Ea=sl(t.stateNode.containerInfo),ta(a,t),aa(t),Ea=e;break;case 12:ta(a,t),aa(t);break;case 31:ta(a,t),aa(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,mo(t,e)));break;case 13:ta(a,t),aa(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Wl=pa()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,mo(t,e)));break;case 22:i=t.memoizedState!==null;var h=r!==null&&r.memoizedState!==null,g=nr,f=wt;if(nr=g||i,wt=f||h,ta(a,t),wt=f,nr=g,aa(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||h||nr||wt||ie(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){h=r=a;try{if(n=h.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=h.stateNode;var k=h.memoizedProps.style,p=k!=null&&k.hasOwnProperty("display")?k.display:null;d.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(y){rt(h,h.return,y)}}}else if(a.tag===6){if(r===null){h=a;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(y){rt(h,h.return,y)}}}else if(a.tag===18){if(r===null){h=a;try{var x=h.stateNode;i?th(x,!0):th(h.stateNode,!1)}catch(y){rt(h,h.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,mo(t,r))));break;case 19:ta(a,t),aa(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,mo(t,e)));break;case 30:break;case 21:break;default:ta(a,t),aa(t)}}function aa(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if(is(e)){r=e;break}e=e.return}if(r==null)throw Error(m(160));switch(r.tag){case 27:var i=r.stateNode,n=Y2(t);il(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(li(o,""),r.flags&=-33);var d=Y2(t);il(t,d,o);break;case 3:case 4:var h=r.stateNode.containerInfo,g=Y2(t);V1(t,g,h);break;default:throw Error(m(161))}}catch(f){rt(t,t.return,f)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function ss(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;ss(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function rr(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)os(t,a.alternate,a),a=a.sibling}function ie(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Gr(4,a,a.return),ie(a);break;case 1:Qa(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&rs(a,a.return,r),ie(a);break;case 27:fn(a.stateNode);case 26:case 5:Qa(a,a.return),ie(a);break;case 22:a.memoizedState===null&&ie(a);break;case 30:ie(a);break;default:ie(a)}t=t.sibling}}function er(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:er(i,n,r),Dn(4,n);break;case 1:if(er(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(g){rt(e,e.return,g)}if(e=n,i=e.updateQueue,i!==null){var d=e.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)cu(h[i],d)}catch(g){rt(e,e.return,g)}}r&&o&64&&as(n),un(n,n.return);break;case 27:ns(n);case 26:case 5:er(i,n,r),r&&e===null&&o&4&&es(n),un(n,n.return);break;case 12:er(i,n,r);break;case 31:er(i,n,r),r&&o&4&&cs(i,n);break;case 13:er(i,n,r),r&&o&4&&hs(i,n);break;case 22:n.memoizedState===null&&er(i,n,r),un(n,n.return);break;case 30:break;default:er(i,n,r)}a=a.sibling}}function Ad(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Nn(r))}function Vd(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Nn(t))}function Na(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)gs(t,a,r,e),a=a.sibling}function gs(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Na(t,a,r,e),i&2048&&Dn(9,a);break;case 1:Na(t,a,r,e);break;case 3:Na(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Nn(t)));break;case 12:if(i&2048){Na(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,d=n.onPostCommit;typeof d=="function"&&d(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){rt(a,a.return,h)}}else Na(t,a,r,e);break;case 31:Na(t,a,r,e);break;case 13:Na(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?Na(t,a,r,e):sn(t,a):n._visibility&2?Na(t,a,r,e):(n._visibility|=2,De(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&Ad(o,a);break;case 24:Na(t,a,r,e),i&2048&&Vd(a.alternate,a);break;default:Na(t,a,r,e)}}function De(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,d=r,h=e,g=o.flags;switch(o.tag){case 0:case 11:case 15:De(n,o,d,h,i),Dn(8,o);break;case 23:break;case 22:var f=o.stateNode;o.memoizedState!==null?f._visibility&2?De(n,o,d,h,i):sn(n,o):(f._visibility|=2,De(n,o,d,h,i)),i&&g&2048&&Ad(o.alternate,o);break;case 24:De(n,o,d,h,i),i&&g&2048&&Vd(o.alternate,o);break;default:De(n,o,d,h,i)}a=a.sibling}}function sn(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:sn(r,e),i&2048&&Ad(e.alternate,e);break;case 24:sn(r,e),i&2048&&Vd(e.alternate,e);break;default:sn(r,e)}a=a.sibling}}var an=8192;function Ee(t,a,r){if(t.subtreeFlags&an)for(t=t.child;t!==null;)ps(t,a,r),t=t.sibling}function ps(t,a,r){switch(t.tag){case 26:Ee(t,a,r),t.flags&an&&t.memoizedState!==null&&Gf(r,Ea,t.memoizedState,t.memoizedProps);break;case 5:Ee(t,a,r);break;case 3:case 4:var e=Ea;Ea=sl(t.stateNode.containerInfo),Ee(t,a,r),Ea=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=an,an=16777216,Ee(t,a,r),an=e):Ee(t,a,r));break;default:Ee(t,a,r)}}function fs(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function Ji(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];_t=e,ks(e,t)}fs(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vs(t),t=t.sibling}function vs(t){switch(t.tag){case 0:case 11:case 15:Ji(t),t.flags&2048&&Gr(9,t,t.return);break;case 3:Ji(t);break;case 12:Ji(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,Eo(t)):Ji(t);break;default:Ji(t)}}function Eo(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];_t=e,ks(e,t)}fs(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Gr(8,a,a.return),Eo(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,Eo(a));break;default:Eo(a)}t=t.sibling}}function ks(t,a){for(;_t!==null;){var r=_t;switch(r.tag){case 0:case 11:case 15:Gr(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Nn(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,_t=e;else t:for(r=t;_t!==null;){e=_t;var i=e.sibling,n=e.return;if(ls(e),e===r){_t=null;break t}if(i!==null){i.return=n,_t=i;break t}_t=n}}}var of={getCacheForType:function(t){var a=qt(Ct),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return qt(Ct).controller.signal}},lf=typeof WeakMap=="function"?WeakMap:Map,F=0,nt=null,q=null,Y=0,at=0,ha=null,Hr=!1,Mi=!1,zd=!1,vr=0,vt=0,Yr=0,ce=0,_d=0,ga=0,ui=0,gn=null,ea=null,z1=!1,Wl=0,xs=0,nl=1/0,ol=null,Nr=null,jt=0,Er=null,si=null,ur=0,_1=0,T1=null,Ls=null,pn=0,N1=null;function ka(){return(F&2)!==0&&Y!==0?Y&-Y:z.T!==null?Nd():Wh()}function Ms(){if(ga===0)if((Y&536870912)===0||K){var t=uo;uo<<=1,(uo&3932160)===0&&(uo=262144),ga=t}else ga=536870912;return t=La.current,t!==null&&(t.flags|=32),ga}function ia(t,a,r){(t===nt&&(at===2||at===9)||t.cancelPendingCommit!==null)&&(gi(t,0),Sr(t,Y,ga,!1)),zn(t,r),((F&2)===0||t!==nt)&&(t===nt&&((F&2)===0&&(ce|=r),vt===4&&Sr(t,Y,ga,!1)),Ra(t))}function ms(t,a,r){if((F&6)!==0)throw Error(m(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||Vn(t,a),i=e?hf(t,a):Q2(t,a,!0),n=e;do{if(i===0){Mi&&!e&&Sr(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!df(r)){i=Q2(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var d=t;i=gn;var h=d.current.memoizedState.isDehydrated;if(h&&(gi(d,o).flags|=256),o=Q2(d,o,!1),o!==2){if(zd&&!h){d.errorRecoveryDisabledLanes|=n,ce|=n,i=4;break t}n=ea,ea=i,n!==null&&(ea===null?ea=n:ea.push.apply(ea,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){gi(t,0),Sr(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(m(345));case 4:if((a&4194048)!==a)break;case 6:Sr(e,a,ga,!Hr);break t;case 2:ea=null;break;case 3:case 5:break;default:throw Error(m(329))}if((a&62914560)===a&&(i=Wl+300-pa(),10<i)){if(Sr(e,a,ga,!Hr),kl(e,0,!0)!==0)break t;ur=a,e.timeoutHandle=Zs(O0.bind(null,e,r,ea,ol,z1,a,ga,ce,ui,Hr,n,"Throttled",-0,0),i);break t}O0(e,r,ea,ol,z1,a,ga,ce,ui,Hr,n,null,-0,0)}}break}while(!0);Ra(t)}function O0(t,a,r,e,i,n,o,d,h,g,f,k,p,x){if(t.timeoutHandle=-1,k=a.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:lr},ps(a,n,k);var y=(n&62914560)===n?Wl-pa():(n&4194048)===n?xs-pa():0;if(y=Yf(k,y),y!==null){ur=n,t.cancelPendingCommit=y(Z0.bind(null,t,a,n,r,e,i,o,d,h,f,k,null,p,x)),Sr(t,n,o,!g);return}}Z0(t,a,n,r,e,i,o,d,h)}function df(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!xa(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Sr(t,a,r,e){a&=~_d,a&=~ce,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-va(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&bh(t,r,a)}function Hl(){return(F&6)===0?(On(0,!1),!1):!0}function Td(){if(q!==null){if(at===0)var t=q.return;else t=q,dr=Le=null,Md(t),ri=null,yn=0,t=q;for(;t!==null;)ts(t.alternate,t),t=t.return;q=null}}function gi(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Bf(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ur=0,Td(),nt=t,q=r=cr(t.current,null),Y=a,at=0,ha=null,Hr=!1,Mi=Vn(t,a),zd=!1,ui=ga=_d=ce=Yr=vt=0,ea=gn=null,z1=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-va(e),n=1<<i;a|=t[i],e&=~n}return vr=a,ml(),r}function ys(t,a){D=null,z.H=Cn,a===Li||a===wl?(a=k0(),at=3):a===gd?(a=k0(),at=4):at=a===Hd?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ha=a,q===null&&(vt=1,rl(t,Wa(a,t.current)))}function ws(){var t=La.current;return t===null?!0:(Y&4194048)===Y?Sa===null:(Y&62914560)===Y||(Y&536870912)!==0?t===Sa:!1}function Cs(){var t=z.H;return z.H=Cn,t===null?Cn:t}function bs(){var t=z.A;return z.A=of,t}function ll(){vt=4,Hr||(Y&4194048)!==Y&&La.current!==null||(Mi=!0),(Yr&134217727)===0&&(ce&134217727)===0||nt===null||Sr(nt,Y,ga,!1)}function Q2(t,a,r){var e=F;F|=2;var i=Cs(),n=bs();(nt!==t||Y!==a)&&(ol=null,gi(t,a)),a=!1;var o=vt;t:do try{if(at!==0&&q!==null){var d=q,h=ha;switch(at){case 8:Td(),o=6;break t;case 3:case 2:case 9:case 6:La.current===null&&(a=!0);var g=at;if(at=0,ha=null,$e(t,d,h,g),r&&Mi){o=0;break t}break;default:g=at,at=0,ha=null,$e(t,d,h,g)}}cf(),o=vt;break}catch(f){ys(t,f)}while(!0);return a&&t.shellSuspendCounter++,dr=Le=null,F=e,z.H=i,z.A=n,q===null&&(nt=null,Y=0,ml()),o}function cf(){for(;q!==null;)Bs(q)}function hf(t,a){var r=F;F|=2;var e=Cs(),i=bs();nt!==t||Y!==a?(ol=null,nl=pa()+500,gi(t,a)):Mi=Vn(t,a);t:do try{if(at!==0&&q!==null){a=q;var n=ha;a:switch(at){case 1:at=0,ha=null,$e(t,a,n,1);break;case 2:case 9:if(v0(n)){at=0,ha=null,U0(a);break}a=function(){at!==2&&at!==9||nt!==t||(at=7),Ra(t)},n.then(a,a);break t;case 3:at=7;break t;case 4:at=5;break t;case 7:v0(n)?(at=0,ha=null,U0(a)):(at=0,ha=null,$e(t,a,n,7));break;case 5:var o=null;switch(q.tag){case 26:o=q.memoizedState;case 5:case 27:var d=q;if(o?Qs(o):d.stateNode.complete){at=0,ha=null;var h=d.sibling;if(h!==null)q=h;else{var g=d.return;g!==null?(q=g,Sl(g)):q=null}break a}}at=0,ha=null,$e(t,a,n,5);break;case 6:at=0,ha=null,$e(t,a,n,6);break;case 8:Td(),vt=6;break t;default:throw Error(m(462))}}uf();break}catch(f){ys(t,f)}while(!0);return dr=Le=null,z.H=e,z.A=i,F=r,q!==null?0:(nt=null,Y=0,ml(),vt)}function uf(){for(;q!==null&&!zp();)Bs(q)}function Bs(t){var a=Pu(t.alternate,t,vr);t.memoizedProps=t.pendingProps,a===null?Sl(t):q=a}function U0(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=z0(r,a,a.pendingProps,a.type,void 0,Y);break;case 11:a=z0(r,a,a.pendingProps,a.type.render,a.ref,Y);break;case 5:Md(a);default:ts(r,a),a=q=tu(a,vr),a=Pu(r,a,vr)}t.memoizedProps=t.pendingProps,a===null?Sl(t):q=a}function $e(t,a,r,e){dr=Le=null,Md(a),ri=null,yn=0;var i=a.return;try{if(I5(t,i,a,r,Y)){vt=1,rl(t,Wa(r,t.current)),q=null;return}}catch(n){if(i!==null)throw q=i,n;vt=1,rl(t,Wa(r,t.current)),q=null;return}a.flags&32768?(K||e===1?t=!0:Mi||(Y&536870912)!==0?t=!1:(Hr=t=!0,(e===2||e===9||e===3||e===6)&&(e=La.current,e!==null&&e.tag===13&&(e.flags|=16384))),js(a,t)):Sl(a)}function Sl(t){var a=t;do{if((a.flags&32768)!==0){js(a,Hr);return}t=a.return;var r=af(a.alternate,a,vr);if(r!==null){q=r;return}if(a=a.sibling,a!==null){q=a;return}q=a=t}while(a!==null);vt===0&&(vt=5)}function js(t,a){do{var r=rf(t.alternate,t);if(r!==null){r.flags&=32767,q=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){q=t;return}q=t=r}while(t!==null);vt=6,q=null}function Z0(t,a,r,e,i,n,o,d,h){t.cancelPendingCommit=null;do Al();while(jt!==0);if((F&6)!==0)throw Error(m(327));if(a!==null){if(a===t.current)throw Error(m(177));if(n=a.lanes|a.childLanes,n|=od,Gp(t,r,n,o,d,h),t===nt&&(q=nt=null,Y=0),si=a,Er=t,ur=r,_1=n,T1=i,Ls=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ff(Xo,function(){return Vs(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=z.T,z.T=null,i=$.p,$.p=2,o=F,F|=4;try{ef(t,a,r)}finally{F=o,$.p=i,z.T=e}}jt=1,Ws(),Hs(),Ss()}}function Ws(){if(jt===1){jt=0;var t=Er,a=si,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var e=$.p;$.p=2;var i=F;F|=4;try{us(a,t);var n=U1,o=Qh(t.containerInfo),d=n.focusedElem,h=n.selectionRange;if(o!==d&&d&&d.ownerDocument&&Xh(d.ownerDocument.documentElement,d)){if(h!==null&&nd(d)){var g=h.start,f=h.end;if(f===void 0&&(f=g),"selectionStart"in d)d.selectionStart=g,d.selectionEnd=Math.min(f,d.value.length);else{var k=d.ownerDocument||document,p=k&&k.defaultView||window;if(p.getSelection){var x=p.getSelection(),y=d.textContent.length,b=Math.min(h.start,y),T=h.end===void 0?b:Math.min(h.end,y);!x.extend&&b>T&&(o=T,T=b,b=o);var s=c0(d,b),u=c0(d,T);if(s&&u&&(x.rangeCount!==1||x.anchorNode!==s.node||x.anchorOffset!==s.offset||x.focusNode!==u.node||x.focusOffset!==u.offset)){var v=k.createRange();v.setStart(s.node,s.offset),x.removeAllRanges(),b>T?(x.addRange(v),x.extend(u.node,u.offset)):(v.setEnd(u.node,u.offset),x.addRange(v))}}}}for(k=[],x=d;x=x.parentNode;)x.nodeType===1&&k.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<k.length;d++){var M=k[d];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}fl=!!O1,U1=O1=null}finally{F=i,$.p=e,z.T=r}}t.current=a,jt=2}}function Hs(){if(jt===2){jt=0;var t=Er,a=si,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var e=$.p;$.p=2;var i=F;F|=4;try{os(t,a.alternate,a)}finally{F=i,$.p=e,z.T=r}}jt=3}}function Ss(){if(jt===4||jt===3){jt=0,_p();var t=Er,a=si,r=ur,e=Ls;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?jt=5:(jt=0,si=Er=null,As(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Nr=null),I1(r),a=a.stateNode,fa&&typeof fa.onCommitFiberRoot=="function")try{fa.onCommitFiberRoot(An,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=z.T,i=$.p,$.p=2,z.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var d=e[o];n(d.value,{componentStack:d.stack})}}finally{z.T=a,$.p=i}}(ur&3)!==0&&Al(),Ra(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===N1?pn++:(pn=0,N1=t):pn=0,On(0,!1)}}function As(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Nn(a)))}function Al(){return Ws(),Hs(),Ss(),Vs()}function Vs(){if(jt!==5)return!1;var t=Er,a=_1;_1=0;var r=I1(ur),e=z.T,i=$.p;try{$.p=32>r?32:r,z.T=null,r=T1,T1=null;var n=Er,o=ur;if(jt=0,si=Er=null,ur=0,(F&6)!==0)throw Error(m(331));var d=F;if(F|=4,vs(n.current),gs(n,n.current,o,r),F=d,On(0,!1),fa&&typeof fa.onPostCommitFiberRoot=="function")try{fa.onPostCommitFiberRoot(An,n)}catch{}return!0}finally{$.p=i,z.T=e,As(t,a)}}function q0(t,a,r){a=Wa(r,a),a=H1(t.stateNode,a,2),t=Tr(t,a,2),t!==null&&(zn(t,2),Ra(t))}function rt(t,a,r){if(t.tag===3)q0(t,t,r);else for(;a!==null;){if(a.tag===3){q0(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Nr===null||!Nr.has(e))){t=Wa(r,t),r=Ku(2),e=Tr(a,r,2),e!==null&&(Ju(r,e,a,t),zn(e,2),Ra(e));break}}a=a.return}}function K2(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new lf;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(zd=!0,i.add(r),t=sf.bind(null,t,a,r),a.then(t,t))}function sf(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,nt===t&&(Y&r)===r&&(vt===4||vt===3&&(Y&62914560)===Y&&300>pa()-Wl?(F&2)===0&&gi(t,0):_d|=r,ui===Y&&(ui=0)),Ra(t)}function zs(t,a){a===0&&(a=Ch()),t=xe(t,a),t!==null&&(zn(t,a),Ra(t))}function gf(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),zs(t,r)}function pf(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(m(314))}e!==null&&e.delete(a),zs(t,r)}function ff(t,a){return F1(t,a)}var dl=null,Oe=null,E1=!1,cl=!1,J2=!1,Ar=0;function Ra(t){t!==Oe&&t.next===null&&(Oe===null?dl=Oe=t:Oe=Oe.next=t),cl=!0,E1||(E1=!0,kf())}function On(t,a){if(!J2&&cl){J2=!0;do for(var r=!1,e=dl;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,d=e.pingedLanes;n=(1<<31-va(42|t)+1)-1,n&=i&~(o&~d),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,G0(e,n))}else n=Y,n=kl(e,e===nt?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||Vn(e,n)||(r=!0,G0(e,n));e=e.next}while(r);J2=!1}}function vf(){_s()}function _s(){cl=E1=!1;var t=0;Ar!==0&&bf()&&(t=Ar);for(var a=pa(),r=null,e=dl;e!==null;){var i=e.next,n=Ts(e,a);n===0?(e.next=null,r===null?dl=i:r.next=i,i===null&&(Oe=r)):(r=e,(t!==0||(n&3)!==0)&&(cl=!0)),e=i}jt!==0&&jt!==5||On(t,!1),Ar!==0&&(Ar=0)}function Ts(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-va(n),d=1<<o,h=i[o];h===-1?((d&r)===0||(d&e)!==0)&&(i[o]=qp(d,a)):h<=a&&(t.expiredLanes|=d),n&=~d}if(a=nt,r=Y,r=kl(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(at===2||at===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&w2(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Vn(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&w2(e),I1(r)){case 2:case 8:r=yh;break;case 32:r=Xo;break;case 268435456:r=wh;break;default:r=Xo}return e=Ns.bind(null,t),r=F1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&w2(e),t.callbackPriority=2,t.callbackNode=null,2}function Ns(t,a){if(jt!==0&&jt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Al()&&t.callbackNode!==r)return null;var e=Y;return e=kl(t,t===nt?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(ms(t,e,a),Ts(t,pa()),t.callbackNode!=null&&t.callbackNode===r?Ns.bind(null,t):null)}function G0(t,a){if(Al())return null;ms(t,a,!0)}function kf(){jf(function(){(F&6)!==0?F1(mh,vf):_s()})}function Nd(){if(Ar===0){var t=di;t===0&&(t=ho,ho<<=1,(ho&261888)===0&&(ho=256)),Ar=t}return Ar}function Y0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Wo(""+t)}function X0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function xf(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=Y0((i[na]||null).action),o=e.submitter;o&&(a=(a=o[na]||null)?Y0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var d=new xl("action","action",null,e,i);t.push({event:d,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Ar!==0){var h=o?X0(i,o):new FormData(i);j1(r,{pending:!0,data:h,method:i.method,action:n},null,h)}}else typeof n=="function"&&(d.preventDefault(),h=o?X0(i,o):new FormData(i),j1(r,{pending:!0,data:h,method:i.method,action:n},n,h))},currentTarget:i}]})}}for(yo=0;yo<f1.length;yo++)wo=f1[yo],Q0=wo.toLowerCase(),K0=wo[0].toUpperCase()+wo.slice(1),Da(Q0,"on"+K0);var wo,Q0,K0,yo;Da(Jh,"onAnimationEnd");Da(Rh,"onAnimationIteration");Da(Fh,"onAnimationStart");Da("dblclick","onDoubleClick");Da("focusin","onFocus");Da("focusout","onBlur");Da(T5,"onTransitionRun");Da(N5,"onTransitionStart");Da(E5,"onTransitionCancel");Da($h,"onTransitionEnd");oi("onMouseEnter",["mouseout","mouseover"]);oi("onMouseLeave",["mouseout","mouseover"]);oi("onPointerEnter",["pointerout","pointerover"]);oi("onPointerLeave",["pointerout","pointerover"]);fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fe("onBeforeInput",["compositionend","keypress","textInput","paste"]);fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn));function Es(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var d=e[o],h=d.instance,g=d.currentTarget;if(d=d.listener,h!==n&&i.isPropagationStopped())break t;n=d,i.currentTarget=g;try{n(i)}catch(f){Ko(f)}i.currentTarget=null,n=h}else for(o=0;o<e.length;o++){if(d=e[o],h=d.instance,g=d.currentTarget,d=d.listener,h!==n&&i.isPropagationStopped())break t;n=d,i.currentTarget=g;try{n(i)}catch(f){Ko(f)}i.currentTarget=null,n=h}}}}function Z(t,a){var r=a[l1];r===void 0&&(r=a[l1]=new Set);var e=t+"__bubble";r.has(e)||(Ds(a,t,2,!1),r.add(e))}function R2(t,a,r){var e=0;a&&(e|=4),Ds(r,t,e,a)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Ed(t){if(!t[Co]){t[Co]=!0,Hh.forEach(function(r){r!=="selectionchange"&&(Lf.has(r)||R2(r,!1,t),R2(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Co]||(a[Co]=!0,R2("selectionchange",!1,a))}}function Ds(t,a,r,e){switch($s(a)){case 2:var i=Kf;break;case 8:i=Jf;break;default:i=Zd}r=i.bind(null,a,r,t),i=void 0,!s1||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function F2(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var d=e.stateNode.containerInfo;if(d===i)break;if(o===4)for(o=e.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;d!==null;){if(o=qe(d),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){e=n=o;continue t}d=d.parentNode}}e=e.return}Eh(function(){var g=n,f=ad(r),k=[];t:{var p=Ih.get(t);if(p!==void 0){var x=xl,y=t;switch(t){case"keypress":if(So(r)===0)break t;case"keydown":case"keyup":x=g5;break;case"focusin":y="focus",x=W2;break;case"focusout":y="blur",x=W2;break;case"beforeblur":case"afterblur":x=W2;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=t0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=a5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=v5;break;case Jh:case Rh:case Fh:x=i5;break;case $h:x=x5;break;case"scroll":case"scrollend":x=Pp;break;case"wheel":x=M5;break;case"copy":case"cut":case"paste":x=o5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=r0;break;case"toggle":case"beforetoggle":x=y5}var b=(a&4)!==0,T=!b&&(t==="scroll"||t==="scrollend"),s=b?p!==null?p+"Capture":null:p;b=[];for(var u=g,v;u!==null;){var M=u;if(v=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||v===null||s===null||(M=kn(u,s),M!=null&&b.push(Bn(u,M,v))),T)break;u=u.return}0<b.length&&(p=new x(p,y,null,r,f),k.push({event:p,listeners:b}))}}if((a&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",p&&r!==u1&&(y=r.relatedTarget||r.fromElement)&&(qe(y)||y[vi]))break t;if((x||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,x?(y=r.relatedTarget||r.toElement,x=g,y=y?qe(y):null,y!==null&&(T=Sn(y),b=y.tag,y!==T||b!==5&&b!==27&&b!==6)&&(y=null)):(x=null,y=g),x!==y)){if(b=t0,M="onMouseLeave",s="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(b=r0,M="onPointerLeave",s="onPointerEnter",u="pointer"),T=x==null?p:Pi(x),v=y==null?p:Pi(y),p=new b(M,u+"leave",x,r,f),p.target=T,p.relatedTarget=v,M=null,qe(f)===g&&(b=new b(s,u+"enter",y,r,f),b.target=v,b.relatedTarget=T,M=b),T=M,x&&y)a:{for(b=Mf,s=x,u=y,v=0,M=s;M;M=b(M))v++;M=0;for(var B=u;B;B=b(B))M++;for(;0<v-M;)s=b(s),v--;for(;0<M-v;)u=b(u),M--;for(;v--;){if(s===u||u!==null&&s===u.alternate){b=s;break a}s=b(s),u=b(u)}b=null}else b=null;x!==null&&J0(k,p,x,b,!1),y!==null&&T!==null&&J0(k,T,y,b,!0)}}t:{if(p=g?Pi(g):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var V=o0;else if(n0(p))if(Gh)V=V5;else{V=S5;var j=H5}else x=p.nodeName,!x||x.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?g&&td(g.elementType)&&(V=o0):V=A5;if(V&&(V=V(t,g))){qh(k,V,r,f);break t}j&&j(t,p,g),t==="focusout"&&g&&p.type==="number"&&g.memoizedProps.value!=null&&h1(p,"number",p.value)}switch(j=g?Pi(g):window,t){case"focusin":(n0(j)||j.contentEditable==="true")&&(Xe=j,g1=g,nn=null);break;case"focusout":nn=g1=Xe=null;break;case"mousedown":p1=!0;break;case"contextmenu":case"mouseup":case"dragend":p1=!1,h0(k,r,f);break;case"selectionchange":if(_5)break;case"keydown":case"keyup":h0(k,r,f)}var A;if(id)t:{switch(t){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else Ye?Uh(t,r)&&(E="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(E="onCompositionStart");E&&(Oh&&r.locale!=="ko"&&(Ye||E!=="onCompositionStart"?E==="onCompositionEnd"&&Ye&&(A=Dh()):(Wr=f,rd="value"in Wr?Wr.value:Wr.textContent,Ye=!0)),j=hl(g,E),0<j.length&&(E=new a0(E,t,null,r,f),k.push({event:E,listeners:j}),A?E.data=A:(A=Zh(r),A!==null&&(E.data=A)))),(A=C5?b5(t,r):B5(t,r))&&(E=hl(g,"onBeforeInput"),0<E.length&&(j=new a0("onBeforeInput","beforeinput",null,r,f),k.push({event:j,listeners:E}),j.data=A)),xf(k,t,g,r,f)}Es(k,a)})}function Bn(t,a,r){return{instance:t,listener:a,currentTarget:r}}function hl(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=kn(t,r),i!=null&&e.unshift(Bn(t,i,n)),i=kn(t,a),i!=null&&e.push(Bn(t,i,n))),t.tag===3)return e;t=t.return}return[]}function Mf(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function J0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var d=r,h=d.alternate,g=d.stateNode;if(d=d.tag,h!==null&&h===e)break;d!==5&&d!==26&&d!==27||g===null||(h=g,i?(g=kn(r,n),g!=null&&o.unshift(Bn(r,g,h))):i||(g=kn(r,n),g!=null&&o.push(Bn(r,g,h)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var mf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function R0(t){return(typeof t=="string"?t:""+t).replace(mf,`
`).replace(yf,"")}function Os(t,a){return a=R0(a),R0(t)===a}function et(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||li(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&li(t,""+e);break;case"className":go(t,"class",e);break;case"tabIndex":go(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":go(t,r,e);break;case"style":Nh(t,e,n);break;case"data":if(a!=="object"){go(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=Wo(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&et(t,a,"name",i.name,i,null),et(t,a,"formEncType",i.formEncType,i,null),et(t,a,"formMethod",i.formMethod,i,null),et(t,a,"formTarget",i.formTarget,i,null)):(et(t,a,"encType",i.encType,i,null),et(t,a,"method",i.method,i,null),et(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=Wo(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=lr);break;case"onScroll":e!=null&&Z("scroll",t);break;case"onScrollEnd":e!=null&&Z("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(m(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(m(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=Wo(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":Z("beforetoggle",t),Z("toggle",t),jo(t,"popover",e);break;case"xlinkActuate":Pa(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Pa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Pa(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Pa(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Pa(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Pa(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Pa(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Pa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Pa(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":jo(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=$p.get(r)||r,jo(t,r,e))}}function D1(t,a,r,e,i,n){switch(r){case"style":Nh(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(m(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(m(60));t.innerHTML=r}}break;case"children":typeof e=="string"?li(t,e):(typeof e=="number"||typeof e=="bigint")&&li(t,""+e);break;case"onScroll":e!=null&&Z("scroll",t);break;case"onScrollEnd":e!=null&&Z("scrollend",t);break;case"onClick":e!=null&&(t.onclick=lr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sh.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[na]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):jo(t,r,e)}}}function Gt(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Z("error",t),Z("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:et(t,a,n,o,r,null)}}i&&et(t,a,"srcSet",r.srcSet,r,null),e&&et(t,a,"src",r.src,r,null);return;case"input":Z("invalid",t);var d=n=o=i=null,h=null,g=null;for(e in r)if(r.hasOwnProperty(e)){var f=r[e];if(f!=null)switch(e){case"name":i=f;break;case"type":o=f;break;case"checked":h=f;break;case"defaultChecked":g=f;break;case"value":n=f;break;case"defaultValue":d=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(m(137,a));break;default:et(t,a,e,f,r,null)}}zh(t,n,d,h,g,o,i,!1);return;case"select":Z("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(d=r[i],d!=null))switch(i){case"value":n=d;break;case"defaultValue":o=d;break;case"multiple":e=d;default:et(t,a,i,d,r,null)}a=n,r=o,t.multiple=!!e,a!=null?Pe(t,!!e,a,!1):r!=null&&Pe(t,!!e,r,!0);return;case"textarea":Z("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(d=r[o],d!=null))switch(o){case"value":e=d;break;case"defaultValue":i=d;break;case"children":n=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(m(91));break;default:et(t,a,o,d,r,null)}Th(t,e,i,n);return;case"option":for(h in r)r.hasOwnProperty(h)&&(e=r[h],e!=null)&&(h==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":et(t,a,h,e,r,null));return;case"dialog":Z("beforetoggle",t),Z("toggle",t),Z("cancel",t),Z("close",t);break;case"iframe":case"object":Z("load",t);break;case"video":case"audio":for(e=0;e<bn.length;e++)Z(bn[e],t);break;case"image":Z("error",t),Z("load",t);break;case"details":Z("toggle",t);break;case"embed":case"source":case"link":Z("error",t),Z("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in r)if(r.hasOwnProperty(g)&&(e=r[g],e!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(m(137,a));default:et(t,a,g,e,r,null)}return;default:if(td(a)){for(f in r)r.hasOwnProperty(f)&&(e=r[f],e!==void 0&&D1(t,a,f,e,r,void 0));return}}for(d in r)r.hasOwnProperty(d)&&(e=r[d],e!=null&&et(t,a,d,e,r,null))}function wf(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,d=null,h=null,g=null,f=null;for(x in r){var k=r[x];if(r.hasOwnProperty(x)&&k!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":h=k;default:e.hasOwnProperty(x)||et(t,a,x,null,e,k)}}for(var p in e){var x=e[p];if(k=r[p],e.hasOwnProperty(p)&&(x!=null||k!=null))switch(p){case"type":n=x;break;case"name":i=x;break;case"checked":g=x;break;case"defaultChecked":f=x;break;case"value":o=x;break;case"defaultValue":d=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(m(137,a));break;default:x!==k&&et(t,a,p,x,e,k)}}c1(t,o,d,h,g,f,n,i);return;case"select":x=o=d=p=null;for(n in r)if(h=r[n],r.hasOwnProperty(n)&&h!=null)switch(n){case"value":break;case"multiple":x=h;default:e.hasOwnProperty(n)||et(t,a,n,null,e,h)}for(i in e)if(n=e[i],h=r[i],e.hasOwnProperty(i)&&(n!=null||h!=null))switch(i){case"value":p=n;break;case"defaultValue":d=n;break;case"multiple":o=n;default:n!==h&&et(t,a,i,n,e,h)}a=d,r=o,e=x,p!=null?Pe(t,!!r,p,!1):!!e!=!!r&&(a!=null?Pe(t,!!r,a,!0):Pe(t,!!r,r?[]:"",!1));return;case"textarea":x=p=null;for(d in r)if(i=r[d],r.hasOwnProperty(d)&&i!=null&&!e.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:et(t,a,d,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":p=i;break;case"defaultValue":x=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(m(91));break;default:i!==n&&et(t,a,o,i,e,n)}_h(t,p,x);return;case"option":for(var y in r)p=r[y],r.hasOwnProperty(y)&&p!=null&&!e.hasOwnProperty(y)&&(y==="selected"?t.selected=!1:et(t,a,y,null,e,p));for(h in e)p=e[h],x=r[h],e.hasOwnProperty(h)&&p!==x&&(p!=null||x!=null)&&(h==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":et(t,a,h,p,e,x));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in r)p=r[b],r.hasOwnProperty(b)&&p!=null&&!e.hasOwnProperty(b)&&et(t,a,b,null,e,p);for(g in e)if(p=e[g],x=r[g],e.hasOwnProperty(g)&&p!==x&&(p!=null||x!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(m(137,a));break;default:et(t,a,g,p,e,x)}return;default:if(td(a)){for(var T in r)p=r[T],r.hasOwnProperty(T)&&p!==void 0&&!e.hasOwnProperty(T)&&D1(t,a,T,void 0,e,p);for(f in e)p=e[f],x=r[f],!e.hasOwnProperty(f)||p===x||p===void 0&&x===void 0||D1(t,a,f,p,e,x);return}}for(var s in r)p=r[s],r.hasOwnProperty(s)&&p!=null&&!e.hasOwnProperty(s)&&et(t,a,s,null,e,p);for(k in e)p=e[k],x=r[k],!e.hasOwnProperty(k)||p===x||p==null&&x==null||et(t,a,k,p,e,x)}function F0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cf(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,d=i.duration;if(n&&d&&F0(o)){for(o=0,d=i.responseEnd,e+=1;e<r.length;e++){var h=r[e],g=h.startTime;if(g>d)break;var f=h.transferSize,k=h.initiatorType;f&&F0(k)&&(h=h.responseEnd,o+=f*(h<d?1:(d-g)/(h-g)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var O1=null,U1=null;function ul(t){return t.nodeType===9?t:t.ownerDocument}function $0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Us(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function Z1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var $2=null;function bf(){var t=window.event;return t&&t.type==="popstate"?t===$2?!1:($2=t,!0):($2=null,!1)}var Zs=typeof setTimeout=="function"?setTimeout:void 0,Bf=typeof clearTimeout=="function"?clearTimeout:void 0,I0=typeof Promise=="function"?Promise:void 0,jf=typeof queueMicrotask=="function"?queueMicrotask:typeof I0<"u"?function(t){return I0.resolve(null).then(t).catch(Wf)}:Zs;function Wf(t){setTimeout(function(){throw t})}function Qr(t){return t==="head"}function P0(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),fi(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")fn(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,fn(r);for(var n=r.firstChild;n;){var o=n.nextSibling,d=n.nodeName;n[_n]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&fn(t.ownerDocument.body);r=i}while(r);fi(a)}function th(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function q1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":q1(r),P1(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Hf(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[_n])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=Aa(t.nextSibling),t===null)break}return null}function Sf(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Aa(t.nextSibling),t===null))return null;return t}function qs(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Aa(t.nextSibling),t===null))return null;return t}function G1(t){return t.data==="$?"||t.data==="$~"}function Y1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Af(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function Aa(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var X1=null;function ah(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return Aa(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function rh(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function Gs(t,a,r){switch(a=ul(r),t){case"html":if(t=a.documentElement,!t)throw Error(m(452));return t;case"head":if(t=a.head,!t)throw Error(m(453));return t;case"body":if(t=a.body,!t)throw Error(m(454));return t;default:throw Error(m(451))}}function fn(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);P1(t)}var Va=new Map,eh=new Set;function sl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var kr=$.d;$.d={f:Vf,r:zf,D:_f,C:Tf,L:Nf,m:Ef,X:Of,S:Df,M:Uf};function Vf(){var t=kr.f(),a=Hl();return t||a}function zf(t){var a=ki(t);a!==null&&a.tag===5&&a.type==="form"?Nu(a):kr.r(t)}var mi=typeof document>"u"?null:document;function Ys(t,a,r){var e=mi;if(e&&typeof a=="string"&&a){var i=ja(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),eh.has(i)||(eh.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),Gt(a,"link",t),Tt(a),e.head.appendChild(a)))}}function _f(t){kr.D(t),Ys("dns-prefetch",t,null)}function Tf(t,a){kr.C(t,a),Ys("preconnect",t,a)}function Nf(t,a,r){kr.L(t,a,r);var e=mi;if(e&&t&&a){var i='link[rel="preload"][as="'+ja(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+ja(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+ja(r.imageSizes)+'"]')):i+='[href="'+ja(t)+'"]';var n=i;switch(a){case"style":n=pi(t);break;case"script":n=yi(t)}Va.has(n)||(t=ut({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),Va.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(Un(n))||a==="script"&&e.querySelector(Zn(n))||(a=e.createElement("link"),Gt(a,"link",t),Tt(a),e.head.appendChild(a)))}}function Ef(t,a){kr.m(t,a);var r=mi;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+ja(e)+'"][href="'+ja(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=yi(t)}if(!Va.has(n)&&(t=ut({rel:"modulepreload",href:t},a),Va.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Zn(n)))return}e=r.createElement("link"),Gt(e,"link",t),Tt(e),r.head.appendChild(e)}}}function Df(t,a,r){kr.S(t,a,r);var e=mi;if(e&&t){var i=Ie(e).hoistableStyles,n=pi(t);a=a||"default";var o=i.get(n);if(!o){var d={loading:0,preload:null};if(o=e.querySelector(Un(n)))d.loading=5;else{t=ut({rel:"stylesheet",href:t,"data-precedence":a},r),(r=Va.get(n))&&Dd(t,r);var h=o=e.createElement("link");Tt(h),Gt(h,"link",t),h._p=new Promise(function(g,f){h.onload=g,h.onerror=f}),h.addEventListener("load",function(){d.loading|=1}),h.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Do(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:d},i.set(n,o)}}}function Of(t,a){kr.X(t,a);var r=mi;if(r&&t){var e=Ie(r).hoistableScripts,i=yi(t),n=e.get(i);n||(n=r.querySelector(Zn(i)),n||(t=ut({src:t,async:!0},a),(a=Va.get(i))&&Od(t,a),n=r.createElement("script"),Tt(n),Gt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function Uf(t,a){kr.M(t,a);var r=mi;if(r&&t){var e=Ie(r).hoistableScripts,i=yi(t),n=e.get(i);n||(n=r.querySelector(Zn(i)),n||(t=ut({src:t,async:!0,type:"module"},a),(a=Va.get(i))&&Od(t,a),n=r.createElement("script"),Tt(n),Gt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function ih(t,a,r,e){var i=(i=Vr.current)?sl(i):null;if(!i)throw Error(m(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=pi(r.href),r=Ie(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=pi(r.href);var n=Ie(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(Un(t)))&&!n._p&&(o.instance=n,o.state.loading=5),Va.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Va.set(t,r),n||Zf(i,t,r,o.state))),a&&e===null)throw Error(m(528,""));return o}if(a&&e!==null)throw Error(m(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=yi(r),r=Ie(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(m(444,t))}}function pi(t){return'href="'+ja(t)+'"'}function Un(t){return'link[rel="stylesheet"]['+t+"]"}function Xs(t){return ut({},t,{"data-precedence":t.precedence,precedence:null})}function Zf(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),Gt(a,"link",r),Tt(a),t.head.appendChild(a))}function yi(t){return'[src="'+ja(t)+'"]'}function Zn(t){return"script[async]"+t}function nh(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+ja(r.href)+'"]');if(e)return a.instance=e,Tt(e),e;var i=ut({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Tt(e),Gt(e,"style",i),Do(e,r.precedence,t),a.instance=e;case"stylesheet":i=pi(r.href);var n=t.querySelector(Un(i));if(n)return a.state.loading|=4,a.instance=n,Tt(n),n;e=Xs(r),(i=Va.get(i))&&Dd(e,i),n=(t.ownerDocument||t).createElement("link"),Tt(n);var o=n;return o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),Gt(n,"link",e),a.state.loading|=4,Do(n,r.precedence,t),a.instance=n;case"script":return n=yi(r.src),(i=t.querySelector(Zn(n)))?(a.instance=i,Tt(i),i):(e=r,(i=Va.get(n))&&(e=ut({},r),Od(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),Tt(i),Gt(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(m(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,Do(e,r.precedence,t));return a.instance}function Do(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var d=e[o];if(d.dataset.precedence===a)n=d;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function Dd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function Od(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Oo=null;function oh(t,a,r){if(Oo===null){var e=new Map,i=Oo=new Map;i.set(r,e)}else i=Oo,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[_n]||n[Ut]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var d=e.get(o);d?d.push(n):e.set(o,[n])}}return e}function lh(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function qf(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Qs(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Gf(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=pi(e.href),n=a.querySelector(Un(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=gl.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,Tt(n);return}n=a.ownerDocument||a,e=Xs(e),(i=Va.get(i))&&Dd(e,i),n=n.createElement("link"),Tt(n);var o=n;o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),Gt(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=gl.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var I2=0;function Yf(t,a){return t.stylesheets&&t.count===0&&Uo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&Uo(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&I2===0&&(I2=62500*Cf());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Uo(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>I2?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function gl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Uo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pl=null;function Uo(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pl=new Map,a.forEach(Xf,t),pl=null,gl.call(t))}function Xf(t,a){if(!(a.state.loading&4)){var r=pl.get(t);if(r)var e=r.get(null);else{r=new Map,pl.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=gl.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var jn={$$typeof:or,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Qf(t,a,r,e,i,n,o,d,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=C2(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=C2(0),this.hiddenUpdates=C2(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Ks(t,a,r,e,i,n,o,d,h,g,f,k){return t=new Qf(t,a,r,o,h,g,f,k,d),a=1,n===!0&&(a|=24),n=sa(3,null,null,a),t.current=n,n.stateNode=t,a=ud(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},pd(n),t}function Js(t){return t?(t=Je,t):Je}function Rs(t,a,r,e,i,n){i=Js(i),e.context===null?e.context=i:e.pendingContext=i,e=_r(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=Tr(t,e,a),r!==null&&(ia(r,t,a),ln(r,t,a))}function dh(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function Ud(t,a){dh(t,a),(t=t.alternate)&&dh(t,a)}function Fs(t){if(t.tag===13||t.tag===31){var a=xe(t,67108864);a!==null&&ia(a,t,67108864),Ud(t,67108864)}}function ch(t){if(t.tag===13||t.tag===31){var a=ka();a=$1(a);var r=xe(t,a);r!==null&&ia(r,t,a),Ud(t,a)}}var fl=!0;function Kf(t,a,r,e){var i=z.T;z.T=null;var n=$.p;try{$.p=2,Zd(t,a,r,e)}finally{$.p=n,z.T=i}}function Jf(t,a,r,e){var i=z.T;z.T=null;var n=$.p;try{$.p=8,Zd(t,a,r,e)}finally{$.p=n,z.T=i}}function Zd(t,a,r,e){if(fl){var i=Q1(e);if(i===null)F2(t,a,e,vl,r),hh(t,e);else if(Ff(i,t,a,r,e))e.stopPropagation();else if(hh(t,e),a&4&&-1<Rf.indexOf(t)){for(;i!==null;){var n=ki(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=re(n.pendingLanes);if(o!==0){var d=n;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var h=1<<31-va(o);d.entanglements[1]|=h,o&=~h}Ra(n),(F&6)===0&&(nl=pa()+500,On(0,!1))}}break;case 31:case 13:d=xe(n,2),d!==null&&ia(d,n,2),Hl(),Ud(n,2)}if(n=Q1(e),n===null&&F2(t,a,e,vl,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else F2(t,a,e,null,r)}}function Q1(t){return t=ad(t),qd(t)}var vl=null;function qd(t){if(vl=null,t=qe(t),t!==null){var a=Sn(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=vh(a),t!==null)return t;t=null}else if(r===31){if(t=kh(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return vl=t,null}function $s(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Tp()){case mh:return 2;case yh:return 8;case Xo:case Np:return 32;case wh:return 268435456;default:return 32}default:return 32}}var K1=!1,Dr=null,Or=null,Ur=null,Wn=new Map,Hn=new Map,Br=[],Rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hh(t,a){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Wn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(a.pointerId)}}function Ri(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=ki(a),a!==null&&Fs(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function Ff(t,a,r,e,i){switch(a){case"focusin":return Dr=Ri(Dr,t,a,r,e,i),!0;case"dragenter":return Or=Ri(Or,t,a,r,e,i),!0;case"mouseover":return Ur=Ri(Ur,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return Wn.set(n,Ri(Wn.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,Hn.set(n,Ri(Hn.get(n)||null,t,a,r,e,i)),!0}return!1}function Is(t){var a=qe(t.target);if(a!==null){var r=Sn(a);if(r!==null){if(a=r.tag,a===13){if(a=vh(r),a!==null){t.blockedOn=a,Kc(t.priority,function(){ch(r)});return}}else if(a===31){if(a=kh(r),a!==null){t.blockedOn=a,Kc(t.priority,function(){ch(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=Q1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);u1=e,r.target.dispatchEvent(e),u1=null}else return a=ki(r),a!==null&&Fs(a),t.blockedOn=r,!1;a.shift()}return!0}function uh(t,a,r){Zo(t)&&r.delete(a)}function $f(){K1=!1,Dr!==null&&Zo(Dr)&&(Dr=null),Or!==null&&Zo(Or)&&(Or=null),Ur!==null&&Zo(Ur)&&(Ur=null),Wn.forEach(uh),Hn.forEach(uh)}function bo(t,a){t.blockedOn===a&&(t.blockedOn=null,K1||(K1=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,$f)))}var Bo=null;function sh(t){Bo!==t&&(Bo=t,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,function(){Bo===t&&(Bo=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(qd(e||r)===null)continue;break}var n=ki(r);n!==null&&(t.splice(a,3),a-=3,j1(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function fi(t){function a(h){return bo(h,t)}Dr!==null&&bo(Dr,t),Or!==null&&bo(Or,t),Ur!==null&&bo(Ur,t),Wn.forEach(a),Hn.forEach(a);for(var r=0;r<Br.length;r++){var e=Br[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<Br.length&&(r=Br[0],r.blockedOn===null);)Is(r),r.blockedOn===null&&Br.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[na]||null;if(typeof n=="function")o||sh(r);else if(o){var d=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[na]||null)d=o.formAction;else if(qd(i)!==null)continue}else d=o.action;typeof d=="function"?r[e+1]=d:(r.splice(e,3),e-=3),sh(r)}}}function Ps(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function Gd(t){this._internalRoot=t}Vl.prototype.render=Gd.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(m(409));var r=a.current,e=ka();Rs(r,e,t,a,null,null)};Vl.prototype.unmount=Gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Rs(t.current,2,null,t,null,null),Hl(),a[vi]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var a=Wh();t={blockedOn:null,target:t,priority:a};for(var r=0;r<Br.length&&a!==0&&a<Br[r].priority;r++);Br.splice(r,0,t),r===0&&Is(t)}};var gh=ph.version;if(gh!=="19.2.8")throw Error(m(527,gh,"19.2.8"));$.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(m(188)):(t=Object.keys(t).join(","),Error(m(268,t)));return t=Wp(a),t=t!==null?xh(t):null,t=t===null?null:t.stateNode,t};var If={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Fi.isDisabled&&Fi.supportsFiber))try{An=Fi.inject(If),fa=Fi}catch{}var Fi;zl.createRoot=function(t,a){if(!fh(t))throw Error(m(299));var r=!1,e="",i=Yu,n=Xu,o=Qu;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=Ks(t,1,!1,null,null,r,e,null,i,n,o,Ps),t[vi]=a.current,Ed(t),new Gd(a)};zl.hydrateRoot=function(t,a,r){if(!fh(t))throw Error(m(299));var e=!1,i="",n=Yu,o=Xu,d=Qu,h=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(d=r.onRecoverableError),r.formState!==void 0&&(h=r.formState)),a=Ks(t,1,!0,a,r??null,e,i,h,n,o,d,Ps),a.context=Js(null),r=a.current,e=ka(),e=$1(e),i=_r(e),i.callback=null,Tr(r,i,e),r=e,a.current.lanes=r,zn(a,r),Ra(a),t[vi]=a.current,Ed(t),new Vl(a)};zl.version="19.2.8"});var eg=xr((Tv,rg)=>{"use strict";function ag(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ag)}catch(t){console.error(t)}}ag(),rg.exports=tg()});var St=Pr($a()),T4=Pr(eg());var wi=Pr($a(),1);var Yd=Pr($a(),1),Xd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Qd=Yd.default.createContext&&Yd.default.createContext(Xd);var Pf=["attr","size","title"];function tv(t,a){if(t==null)return{};var r,e,i=av(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function av(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function _l(){return _l=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},_l.apply(null,arguments)}function ig(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function Tl(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?ig(Object(r),!0).forEach(function(e){rv(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ig(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function rv(t,a,r){return(a=ev(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function ev(t){var a=iv(t,"string");return typeof a=="symbol"?a:a+""}function iv(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function ng(t){return t&&t.map((a,r)=>wi.default.createElement(a.tag,Tl({key:r},a.attr),ng(a.child)))}function X(t){return a=>wi.default.createElement(nv,_l({attr:Tl({},t.attr)},a),ng(t.child))}function nv(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=tv(t,Pf),d=i||r.size||"1em",h;return r.className&&(h=r.className),t.className&&(h=(h?h+" ":"")+t.className),wi.default.createElement("svg",_l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:h,style:Tl(Tl({color:t.color||r.color},r.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),n&&wi.default.createElement("title",null,n),t.children)};return Qd!==void 0?wi.default.createElement(Qd.Consumer,null,r=>a(r)):a(Xd)}function og(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function lg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function dg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function cg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function hg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 14 4 9l5-5"},child:[]},{tag:"path",attr:{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"},child:[]}]})(t)}function ug(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function sg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function gg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function pg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function fg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function vg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},child:[]},{tag:"path",attr:{d:"M3 3v5h5"},child:[]}]})(t)}function kg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function xg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function Lg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function Mg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function mg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function yg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function wg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function Cg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function bg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function Bg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function jg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function Wg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function Hg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function Sg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(t)}function Ag(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function Vg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function zg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function _g(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function Tg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function Ng(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 18 6-6-6-6"},child:[]}]})(t)}function Eg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function Dg(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function Og(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]}]})(t)}function Ug(t){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var Zg=bg,Nl=lg,qg=wg,Kd=yg,Gg=jg,Yg=Wg,Xg=pg,El=dg,Qg=Ag,Kg=Bg,Ci=xg;var Jg=zg,bi=_g,Jd=ug,Rg=Vg,Rd=sg,Fg=Tg,Dl=Eg;var qn=kg;var Bi=og,Fd=Cg,$g=mg,Ig=Lg,Pg=Mg,Ol=Ug,t4=fg,a4=Dg,r4=cg,e4=gg,Ul=Sg,i4=Hg,n4=Og,o4=hg,$d=vg,l4=Ng;var Lt=Pr($a());var H=Pr($a());var d4={member:El,coworker:r4,admin_staff:Yg,leader:e4,pastor:Gg,admin:Xg},c4=["leader","pastor","admin"],Id=[{id:"work",label:"工作日誌",Icon:Zg,href:"work.html",roles:["pastor","admin_staff","admin"]},{id:"serve",label:"服事管理",Icon:Nl,href:""},{id:"venue",label:"場地預約",Icon:a4,href:""}],ov=t=>{let a=String(t||"").trim();return/^[\u4e00-\u9fff]+$/.test(a)?a.length===4?a.slice(2):a.length>=2&&a.length<=3?a.slice(1):a:a},h4=["pastor","admin_staff","admin"],u4=(t,a)=>!t.roles||t.roles.includes(a),lv=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},s4=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},g4=({active:t,shell:a})=>{let[r,e]=(0,H.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(y=>{let b=!y;try{localStorage.setItem("tbcSidebarCollapsed",b?"1":"0")}catch{}return b}),[n,o]=(0,H.useState)(!1),[d,h]=(0,H.useState)(""),g=(0,H.useRef)(null),f=a.identity||{name:"",role:"member",status:"loading"},k=d4[f.role]||El,p=c4.includes(f.role),x=y=>{h(`${y} 尚未開放`),clearTimeout(g.current),g.current=setTimeout(()=>h(""),2200)};return H.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},H.default.createElement("div",{className:"flex flex-col"},H.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},H.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},H.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},H.default.createElement(Ol,{size:20,strokeWidth:2})),r&&H.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},H.default.createElement(Kd,{size:18}))),!r&&H.default.createElement(H.default.Fragment,null,H.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),H.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},H.default.createElement(Kd,{size:18})))),H.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},Id.map(y=>{let b=t===y.id,T=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${b?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,s=H.default.createElement(H.default.Fragment,null,H.default.createElement(y.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&H.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},y.label));return y.href?b?H.default.createElement("div",{key:y.id,className:T,title:y.label,"aria-current":"page"},s):H.default.createElement("a",{key:y.id,href:y.href,className:T,title:y.label},s):H.default.createElement("button",{key:y.id,type:"button",onClick:()=>x(y.label),className:T,title:y.label},s)}))),H.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},H.default.createElement("button",{type:"button",onClick:()=>o(y=>!y),"aria-haspopup":"menu","aria-expanded":n,className:`tbc-sb-user flex items-center rounded-full transition-colors ${r?"justify-center w-12 h-12 mx-auto bg-slate-100 hover:bg-slate-200":"gap-3 px-4 h-12 w-full hover:bg-slate-100"}`},r?H.default.createElement("span",{className:"text-[13px] text-slate-900 truncate max-w-full px-1"},ov(f.name)):H.default.createElement(H.default.Fragment,null,H.default.createElement(k,{size:20,strokeWidth:1.75,className:`shrink-0 ${p?"text-amber-500":"text-slate-500"}`}),H.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},f.name))),n&&H.default.createElement(H.default.Fragment,null,H.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),H.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},H.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},H.default.createElement(qg,{size:18,strokeWidth:1.75}),"登出")))),d&&H.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},d))},p4=({supabase:t,notice:a})=>{let[r,e]=(0,H.useState)(!1),[i,n]=(0,H.useState)(""),[o,d]=(0,H.useState)(""),[h,g]=(0,H.useState)(!1),[f,k]=(0,H.useState)(""),p=async y=>{if(y.preventDefault(),!i.trim()||!o||h)return;g(!0),k("");let{error:b}=await t.auth.signInWithPassword({email:lv(i),password:o});g(!1),b&&k("帳號或密碼不正確，請再試一次")},x="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return H.default.createElement("form",{onSubmit:p,className:"w-full max-w-sm mx-auto space-y-3"},H.default.createElement("input",{value:i,onChange:y=>n(y.target.value),placeholder:"帳號",autoComplete:"username",className:x}),H.default.createElement("div",{className:"relative"},H.default.createElement("input",{type:r?"text":"password",value:o,onChange:y=>d(y.target.value),placeholder:"密碼",autoComplete:"current-password",className:x+" pr-12"}),H.default.createElement("button",{type:"button",onClick:()=>e(y=>!y),title:r?"隱藏密碼":"顯示密碼","aria-label":r?"隱藏密碼":"顯示密碼",className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"},r?H.default.createElement(Ul,{size:18}):H.default.createElement(i4,{size:18}))),(f||a)&&H.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},H.default.createElement(bi,{size:16}),f||a),H.default.createElement("button",{type:"submit",disabled:h||!i.trim()||!o,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},h?"登入中…":"登入"))},f4=({shell:t})=>{let a=t.identity||{},r=d4[a.role]||El,e=c4.includes(a.role);return H.default.createElement("div",{className:"flex flex-col items-center gap-3 mt-14"},H.default.createElement("p",{className:"text-sm text-slate-500"},"準備好了，開始或",H.default.createElement("button",{type:"button",onClick:t.onLogout,className:"tbc-logout ml-0.5 text-indigo-600 hover:text-indigo-700 underline underline-offset-4"},"登出")))};var dv=({shell:t})=>{let[a,r]=(0,Lt.useState)(""),e=(0,Lt.useRef)(null),i=t.identity||{},n=Id.filter(d=>u4(d,i.role)),o=d=>{r(`${d} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return Lt.default.createElement("div",{className:"relative h-[100dvh] w-full bg-white overflow-hidden"},Lt.default.createElement("main",{className:"h-full overflow-auto custom-scrollbar"},Lt.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},Lt.default.createElement("div",{className:"text-center mb-14"},Lt.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),Lt.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),Lt.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(d=>{let h=Lt.default.createElement(Lt.default.Fragment,null,Lt.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},Lt.default.createElement(d.Icon,{size:40,strokeWidth:1.75})),Lt.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},d.label)),g="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return d.href?Lt.default.createElement("a",{key:d.id,href:d.href,className:g},h):Lt.default.createElement("button",{key:d.id,type:"button",onClick:()=>o(d.label),className:g},h)})),Lt.default.createElement(f4,{shell:t}))),a&&Lt.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},v4=dv;var l=Pr($a());var rc=["日","一","二","三","四","五","六"],k4={m:15,l:18},tc=["pastor","admin_staff"],x4=[{id:"title",label:"工作摘要",locked:!0,sortable:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"派工",sortable:!0,w:t=>`${Math.ceil(t*4+22)}px`,min:t=>Math.ceil(t*4+22)},{id:"doer",label:"執行",sortable:!0,w:t=>`${Math.ceil(t*4+22)}px`,min:t=>Math.ceil(t*4+22)},{id:"status",label:"狀態",sortable:!0,w:t=>`${Math.ceil(t*.85*4+100)}px`,min:t=>Math.ceil(t*.85*4+100)},{id:"date",label:"日期",sortable:!0,w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(150px,1fr)",min:150},{id:"hours",label:"工時",sortable:!0,w:t=>`${Math.ceil(t*4.8+24)}px`,min:t=>Math.ceil(t*4.8+24)},{id:"priority",label:"優先順序",sortable:!0,w:t=>`${Math.ceil(t*.85*4+52)}px`,min:t=>Math.ceil(t*.85*4+52)},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],cv="Asia/Taipei",L4=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:cv,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},ql=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},H4=t=>new Date(t).toISOString().slice(0,10),Zl=(t,a)=>H4(ql(t)+a*864e5),S4=(t,a)=>Math.round((ql(t)-ql(a))/864e5),A4=t=>new Date(ql(t)).getUTCDay(),hv=t=>Zl(t,-((A4(t)+6)%7)),Fa=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},uv=(t,a)=>{let r=S4(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${Fa(t)}（${rc[A4(t)]}）`,tag:e}},Ht=t=>t?String(t).slice(0,5):"",M4=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Ht(t.start_time).split(":").map(Number),[e,i]=Ht(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n>0?n/60:null},sv=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Ht(t.start_time).split(":").map(Number),[e,i]=Ht(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*100)/100} 小時`},m4={urgent:0,normal:1,routine:2},gv={routine:"例行",normal:"普通",urgent:"緊急"},y4={routine:"bg-violet-50 border-violet-100 text-violet-600",normal:"bg-slate-50 border-slate-200 text-slate-500",urgent:"bg-red-50 border-red-100 text-red-600"},pv={routine:"normal",normal:"urgent",urgent:"routine"},Gn=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的工作"],["not your item","只有派工者可以修改這筆工作，負責人只能改狀態"],["nothing to confirm","這筆已經不是「待確認」狀態"],["nothing to return","這筆已經不是「待確認」狀態"],["assignee is not allowed","負責人必須是有權限的同工"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期的任務固定在最上面，不能搬移"],["item not in your list","這筆不在你的清單裡"],["item not found or canceled","這筆工作已被取消或不存在"],["more than one member record","這個帳號對應到多筆同工資料（共用帳號），請先拆分帳號"],["no member record","找不到這個帳號對應的同工資料"],["no permission","沒有使用權限"],["permission denied","沒有使用權限"],["dates are required","日期必填"],["weekly rule needs","每週重複請至少選一個星期"],["monthly rule needs","每月重複請選幾號，或勾「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個週期工作"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},fv=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>rc[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 號`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},w4=({person:t,strong:a})=>l.default.createElement("span",{className:`truncate max-w-full ${a?"font-bold text-slate-900":"text-slate-700"}`},t&&t.name||"（未知）"),C4=[[15,"15分鐘"],[30,"30分鐘"],[45,"45分鐘"],[60,"1小時"],[90,"1.5小時"]],za=t=>{if(!t)return null;let[a,r]=t.split(":").map(Number);return a*60+r},b4=t=>`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`,Pd=t=>String(Math.round(t/60*100)/100),vv=Array.from({length:24},(t,a)=>String(a).padStart(2,"0")),kv=Array.from({length:60},(t,a)=>String(a).padStart(2,"0")),ac=(t,a,r)=>t&&!a||!t&&a?"須同時填寫":t&&a&&r&&za(a)<za(t)?"結束時間不能早於開始時間":"",Gl=({value:t,onChange:a,className:r="",autoFocus:e,id:i,disabled:n})=>{let[o,d]=(t||"").split(":"),h=`tbc-time-sel bg-transparent outline-none cursor-pointer text-center ${o===void 0||o===""?"text-slate-400":"text-slate-900"}`;return l.default.createElement("div",{className:`tbc-time flex items-center gap-1 ${r}`},l.default.createElement("select",{id:i,disabled:n,autoFocus:e,"aria-label":"時",value:o||"",className:h,onChange:g=>{let f=g.target.value;a(f===""?"":`${f}:${d||"00"}`)}},l.default.createElement("option",{value:""},"--"),vv.map(g=>l.default.createElement("option",{key:g,value:g},g))),l.default.createElement("span",{className:"text-slate-400"},":"),l.default.createElement("select",{disabled:n,"aria-label":"分",value:d||"",className:h,onChange:g=>{let f=g.target.value;a(f===""&&!o?"":`${o||"00"}:${f||"00"}`)}},l.default.createElement("option",{value:""},"--"),kv.map(g=>l.default.createElement("option",{key:g,value:g},g))))},B4=({id:t,options:a,selected:r,multi:e,onChange:i,bad:n,className:o=""})=>{let[d,h]=(0,l.useState)(!1),g=a.filter(k=>r.has(k.id)).map(k=>k.label),f=k=>{if(!e){i(new Set([k])),h(!1);return}let p=new Set(r);p.has(k)?p.delete(k):p.add(k),i(p)};return l.default.createElement("div",{className:`relative ${o}`},l.default.createElement("button",{id:t,type:"button",onClick:()=>h(k=>!k),className:`tbc-pick w-full flex items-center justify-between gap-2 bg-slate-50 border rounded-lg px-3 py-2.5 text-left outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${n?"border-red-400 ring-2 ring-red-200":"border-slate-200"}`},l.default.createElement("span",{className:`truncate ${g.length?"text-slate-900":"text-slate-400"}`},g.length?g.join("、"):"請選擇"),l.default.createElement(Dl,{size:16,className:"text-slate-400 shrink-0"})),d&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-[110]",onClick:()=>h(!1)}),l.default.createElement("div",{className:"tbc-pick-menu absolute left-0 right-0 top-full mt-1 z-[120] bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in"},a.map(k=>l.default.createElement("label",{key:k.id,className:"flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 cursor-pointer select-none"},l.default.createElement("input",{type:e?"checkbox":"radio",checked:r.has(k.id),onChange:()=>f(k.id),className:"accent-indigo-600"}),k.label)))))},j4=({value:t,placeholder:a,canEdit:r,onSave:e,className:i="",centerEmpty:n})=>{let[o,d]=(0,l.useState)(!1),[h,g]=(0,l.useState)(t||""),f=(0,l.useRef)(!1);(0,l.useEffect)(()=>{o||g(t||"")},[t,o]);let k=async()=>{if(d(!1),f.current){f.current=!1;return}let p=h.trim();p!==(t||"").trim()&&await e(p)};return o?l.default.createElement("input",{autoFocus:!0,value:h,onChange:p=>g(p.target.value),onBlur:k,onKeyDown:p=>{p.key==="Enter"&&p.currentTarget.blur(),p.key==="Escape"&&(f.current=!0,p.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):l.default.createElement("div",{onClick:()=>r&&d(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} ${!t&&n?"text-center":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?l.default.createElement("span",{className:`text-slate-300 ${n?"block text-center":""}`},a):null))},W4=({type:t,a,b:r,canEdit:e,children:i,onSave:n,validate:o})=>{let[d,h]=(0,l.useState)(!1),[g,f]=(0,l.useState)(""),[k,p]=(0,l.useState)(a||""),[x,y]=(0,l.useState)(r||""),b=(0,l.useRef)(!1);(0,l.useEffect)(()=>{d||(p(a||""),y(r||""))},[a,r,d]);let T=async()=>{if(b.current){b.current=!1,h(!1),f("");return}let u=o?o(k,x):"";if(u){f(u);return}f(""),h(!1),(k!==(a||"")||x!==(r||""))&&await n(k,x)};if(!d)return l.default.createElement("div",{onClick:()=>e&&h(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let s="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return l.default.createElement("div",{tabIndex:-1,onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||T()},onKeyDown:u=>{u.key==="Enter"&&T(),u.key==="Escape"&&(b.current=!0,h(!1),f(""))},className:"flex flex-col gap-1"},l.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",t==="time"?l.default.createElement(Gl,{autoFocus:!0,value:k,onChange:p,className:s}):l.default.createElement("input",{autoFocus:!0,type:t,value:k,onChange:u=>p(u.target.value),className:s})),l.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",t==="time"?l.default.createElement(Gl,{value:x,onChange:y,className:s}):l.default.createElement("input",{type:t,value:x,onChange:u=>y(u.target.value),className:s})),g&&l.default.createElement("div",{role:"alert",className:"tbc-range-err text-[0.75em] text-red-600"},g))},xv=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o,people:d=[],meId:h,parent:g})=>{let f=a||{},k=t==="editRule",p=t!=="create",[x,y]=(0,l.useState)(f.title||""),[b,T]=(0,l.useState)(f.start_date||e),[s,u]=(0,l.useState)(Ht(f.start_time)),[v,M]=(0,l.useState)(f.end_date||f.start_date||e),[B,V]=(0,l.useState)(Ht(f.end_time)),[j,A]=(0,l.useState)(f.priority||(t==="createRule"?"routine":"normal")),[E,O]=(0,l.useState)(f.note||""),[lt,$t]=(0,l.useState)(null),[Kr,Ma]=(0,l.useState)(!1),[me,At]=(0,l.useState)(!1),[Yl,Yn]=(0,l.useState)(""),[ji,la]=(0,l.useState)(""),It=t==="createRule"||t==="editRule"||b===v;(0,l.useEffect)(()=>{It||(u(""),V(""),$t(null),Ma(!1),At(!1),la(""))},[It]);let ye=(C,_)=>{let R=za(C),I=za(_);if(!It||R===null||I===null||I<=R){$t(null),At(!1);return}$t(I-R),At(!1)},we=(C,_,R,I)=>{if(la(""),!!C){if(I!=="end"&&_){let Za=za(_)+C;if(Za>=1440){la("工時超出當天，請調整開始時間或工時");return}R&&za(R)!==Za&&la("開始、結束時間和工時不符，已自動修正結束時間"),V(b4(Za))}else if(R){let Za=za(R)-C;if(Za<0){la("工時超出當天，請調整結束時間或工時");return}_&&za(_)!==Za&&la("開始、結束時間和工時不符，已自動修正開始時間"),u(b4(Za))}}},Xl=C=>{C!==s&&(u(C),la(""),Kr&&lt?we(lt,C,B,"start"):ye(C,B))},Xn=C=>{C!==B&&(V(C),la(""),Kr&&lt?we(lt,s,C,"end"):ye(s,C))},Qn=C=>{if(la(""),C===""){Ma(!1),At(!1),ye(s,B);return}if(C==="custom"){Ma(!0),At(!0),Yn(lt?Pd(lt):"");return}let _=Number(C);Ma(!0),At(!1),$t(_),we(_,s,B,s?"start":"end")},Ql=C=>{Yn(C),Ma(!0),At(!0);let _=parseFloat(C);if(_>0&&Math.round(_*60)>Ce){$t(null),la(`工時不能超出當天，最多 ${Pd(Ce)} 小時`);return}if(_>0&&_<24){let R=Math.round(_*60);$t(R),we(R,s,B,s?"start":"end")}else $t(null),la("")},Ce=s?1439-za(s):B?za(B):1439,Wi=me?"custom":lt===null?"":C4.some(([C])=>C===lt)?String(lt):"custom",[Vt,Kn]=(0,l.useState)(k?f.freq:t==="createRule"?r||"weekly":"none"),[Jr,pt]=(0,l.useState)(!!f.weekdays_only),[Oa,Kl]=(0,l.useState)(f.week_days||[]),[ma,Jn]=(0,l.useState)(f.month_day?String(f.month_day):""),[Rr,Hi]=(0,l.useState)(!!f.month_last_day),[Fr,Jl]=(0,l.useState)(f.until_date||""),[Si,Rl]=(0,l.useState)(f.is_active===void 0?!0:f.is_active),be=(0,l.useMemo)(()=>{let C=new Set,_=[],R=I=>{C.has(I.member_id)||(C.add(I.member_id),_.push({id:I.member_id,label:I.member_id===h?"我":I.name}))};return d.filter(I=>I.member_id===h).forEach(R),d.filter(I=>tc.includes(I.role)).forEach(R),h&&!C.has(h)&&_.unshift({id:h,label:"我"}),_},[d,h]),[Ai,Be]=(0,l.useState)(()=>new Set(h?[h]:[])),[Vi,Rn]=(0,l.useState)(()=>new Set(h?[h]:[])),[zi,je]=(0,l.useState)(""),[Pt,$r]=(0,l.useState)(""),Bt=(C,_)=>{je(C),$r(_),setTimeout(()=>{let R=document.getElementById(_);if(R){R.scrollIntoView({block:"center",behavior:"smooth"});try{R.focus({preventScroll:!0})}catch{}}},0)},Yt="text-xs font-medium text-slate-500",Ua="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",We=C=>Kl(_=>_.includes(C)?_.filter(R=>R!==C):[..._,C]),Fn=()=>{if(je(""),$r(""),!x.trim())return Bt(g?"輸入子工作":"輸入工作摘要","tbc-f-title");if(t==="create"&&Ai.size===0)return Bt("請選擇派工的人","tbc-f-disp");if(t==="create"&&Vi.size===0)return Bt("請至少選一位執行的人","tbc-f-doer");if(!b)return Bt("開始日期必填","tbc-f-start");if(lt&&!s&&!B)return Bt("填寫開始時間或結束時間","tbc-f-stime");if(s&&!B||!s&&B)return Bt("須同時填寫",s?"tbc-f-etime":"tbc-f-stime");if(s&&B&&It&&za(B)<za(s))return Bt("結束時間不能早於開始時間","tbc-f-etime");if(Vt==="none"&&(!v||v<b))return Bt("結束日期不能早於開始日期","tbc-f-end");if(Vt==="weekly"&&Oa.length===0)return Bt("每週重複請至少選一個星期","tbc-f-week");if(Vt==="monthly"&&!ma&&!Rr)return Bt("每月重複請選幾號，或勾「每月最後一天」","tbc-f-month");if(Vt!=="none"&&Fr&&Fr<b)return Bt("重複的結束日不能早於開始日","tbc-f-until");n({title:x.trim(),startDate:b,startTime:It&&s||null,endDate:Vt==="none"?v:b,endTime:It&&B||null,priority:j,note:E.trim()||null,repeat:Vt,weekdaysOnly:Vt==="daily"&&Jr,weekDays:Vt==="weekly"?Oa:[],monthDay:Vt==="monthly"&&ma?Number(ma):null,monthLast:Vt==="monthly"&&Rr,untilDate:Fr||null,isActive:Si,assigneeIds:[...Vi],dispatcherId:[...Ai][0]||h})};return l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},k?l.default.createElement(l.default.Fragment,null,l.default.createElement(qn,{className:"text-indigo-600",size:20})," 修改週期工作"):t==="createRule"?l.default.createElement(l.default.Fragment,null,l.default.createElement(qn,{className:"text-indigo-600",size:20})," 新增週期工作"):l.default.createElement(l.default.Fragment,null,l.default.createElement(Ci,{className:"text-indigo-600",size:20})," ",g?"新增子工作":"新增")),l.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},l.default.createElement(Bi,{size:20}))),l.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Yt},g?"子工作":"工作摘要",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement("input",{id:"tbc-f-title",autoFocus:!0,value:x,onChange:C=>y(C.target.value),placeholder:"簡短描述工作內容",className:`${Ua} ${Pt==="tbc-f-title"?"!border-red-400 ring-2 ring-red-200":""}`})),t==="create"&&be.length>0&&l.default.createElement("div",{className:"grid grid-cols-2 gap-4"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Yt},"派工",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement(B4,{id:"tbc-f-disp",options:be,selected:Ai,onChange:Be,bad:Pt==="tbc-f-disp"})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Yt},"執行",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement(B4,{id:"tbc-f-doer",options:be,selected:Vi,multi:!0,onChange:Rn,bad:Pt==="tbc-f-doer"}))),p&&l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Yt},"重複"),l.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([C])=>!((k||t==="createRule")&&C==="none")).map(([C,_])=>l.default.createElement("button",{key:C,type:"button",onClick:()=>Kn(C),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${Vt===C?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},_))),Vt==="daily"&&l.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},l.default.createElement("input",{type:"checkbox",checked:Jr,onChange:C=>pt(C.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),Vt==="weekly"&&l.default.createElement("div",{id:"tbc-f-week",tabIndex:-1,className:`flex gap-2 pt-1 flex-wrap outline-none rounded-lg ${Pt==="tbc-f-week"?"ring-2 ring-red-200":""}`},[1,2,3,4,5,6,7].map(C=>l.default.createElement("button",{key:C,type:"button",onClick:()=>We(C),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${Oa.includes(C)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},rc[C%7]))),Vt==="monthly"&&l.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},l.default.createElement("select",{id:"tbc-f-month",value:ma,onChange:C=>Jn(C.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},l.default.createElement("option",{value:""},"不指定號數"),Array.from({length:31},(C,_)=>_+1).map(C=>l.default.createElement("option",{key:C,value:C},C," 號"))),l.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},l.default.createElement("input",{type:"checkbox",checked:Rr,onChange:C=>Hi(C.target.checked),className:"accent-indigo-600"})," 每月最後一天"),ma&&Number(ma)>28&&!Rr&&l.default.createElement("span",{className:"text-xs text-amber-600"},ma," 號遇到天數較少的月份會跳過，建議再勾「每月最後一天」"))),l.default.createElement("div",{className:"grid grid-cols-2 gap-4"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Yt},"開始日期"),l.default.createElement("input",{id:"tbc-f-start",type:"date",value:b,onChange:C=>{T(C.target.value),v<C.target.value&&M(C.target.value)},className:`${Ua} ${Pt==="tbc-f-start"?"!border-red-400 ring-2 ring-red-200":""}`})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Yt},"開始時間",It?"（選填）":"（禁填）"),l.default.createElement(Gl,{disabled:!It,id:"tbc-f-stime",value:s,onChange:Xl,className:`${Ua} !w-auto min-w-[8rem] ${Pt==="tbc-f-stime"?"!border-red-400 ring-2 ring-red-200":""}`})),Vt==="none"?l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Yt},"結束日期"),l.default.createElement("input",{id:"tbc-f-end",type:"date",value:v,min:b,onChange:C=>M(C.target.value),className:`${Ua} ${Pt==="tbc-f-end"?"!border-red-400 ring-2 ring-red-200":""}`})):l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Yt},"結束日期（選填）"),l.default.createElement("input",{id:"tbc-f-until",type:"date",value:Fr,min:b,onChange:C=>Jl(C.target.value),className:Ua})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Yt},"結束時間",It?"（選填）":"（禁填）"),(()=>{let C=s&&B?ac(s,B,!b||Vt!=="none"||v===b):"";return C?l.default.createElement("div",{role:"alert",className:"tbc-time-err text-xs text-red-600"},C):null})(),l.default.createElement(Gl,{disabled:!It,id:"tbc-f-etime",value:B,onChange:Xn,className:`${Ua} !w-auto min-w-[8rem] ${Pt==="tbc-f-etime"?"!border-red-400 ring-2 ring-red-200":""}`})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Yt},"優先順序"),l.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["routine","例行"],["normal","普通"],["urgent","緊急"]].map(([C,_])=>l.default.createElement("button",{key:C,type:"button",onClick:()=>A(C),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${j===C?C==="urgent"?"bg-white text-red-600 shadow-sm":C==="routine"?"bg-white text-violet-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},_)))),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Yt},"工時",It?"（選填）":"（禁填）"),l.default.createElement("div",{className:"flex items-center gap-2"},l.default.createElement("select",{id:"tbc-f-dur",disabled:!It,"aria-label":"工時",value:Wi,onChange:C=>Qn(C.target.value),className:`${Ua} !w-auto min-w-[8rem] cursor-pointer ${Wi?"text-slate-900":"text-slate-400"}`},l.default.createElement("option",{value:""},"--"),C4.map(([C,_])=>l.default.createElement("option",{key:C,value:C,disabled:C>Ce},_)),l.default.createElement("option",{value:"custom"},"自訂")),Wi==="custom"&&l.default.createElement("label",{className:"flex items-center gap-1.5 text-sm text-slate-500 whitespace-nowrap"},l.default.createElement("input",{"aria-label":"自訂工時（小時）",type:"number",min:"0.25",max:Math.floor(Ce/60*100)/100,step:"0.25",value:me?Yl:lt?Pd(lt):"",onChange:C=>Ql(C.target.value),className:"tbc-dur-custom w-20 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"}),"小時")))),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Yt},"備註"),l.default.createElement("textarea",{value:E,onChange:C=>O(C.target.value),rows:2,className:Ua})),ji&&l.default.createElement("div",{className:"tbc-hint bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-lg px-4 py-3"},ji),zi&&l.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},l.default.createElement(bi,{size:16})," ",zi)),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},l.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),l.default.createElement("button",{onClick:Fn,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},k?"儲存":Vt==="none"?"新增":"儲存"))))},Lv=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,l.useState)(L4()),[o,d]=(0,l.useState)(null),[h,g]=(0,l.useState)([]),[f,k]=(0,l.useState)(""),[p,x]=(0,l.useState)([]),[y,b]=(0,l.useState)(!0),[T,s]=(0,l.useState)({type:"",text:""}),[u,v]=(0,l.useState)(null),[M,B]=(0,l.useState)("mine"),[V,j]=(0,l.useState)("today"),[A,E]=(0,l.useState)(""),[O,lt]=(0,l.useState)(""),[$t,Kr]=(0,l.useState)(new Set),[Ma,me]=(0,l.useState)(""),[At,Yl]=(0,l.useState)({col:null,dir:"asc"}),Yn=c=>Yl(L=>L.col!==c?{col:c,dir:"asc"}:L.dir==="asc"?{col:c,dir:"desc"}:{col:null,dir:"asc"}),[ji,la]=(0,l.useState)(()=>{try{let c=localStorage.getItem("tbcWorkFont");return k4[c]?c:"m"}catch{return"m"}}),It=c=>{la(c);try{localStorage.setItem("tbcWorkFont",c)}catch{}},[ye,we]=(0,l.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),Xl=c=>we(L=>{let w=L.includes(c)?L.filter(S=>S!==c):[...L,c];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(w))}catch{}return w}),[Xn,Qn]=(0,l.useState)(!1),[Ql,Ce]=(0,l.useState)(""),[Wi,Vt]=(0,l.useState)(""),[Kn,Jr]=(0,l.useState)(!1),[pt,Oa]=(0,l.useState)(null),[Kl,ma]=(0,l.useState)(!1),[Jn,Rr]=(0,l.useState)(!1),Hi=(0,l.useRef)(!1),[Fr,Jl]=(0,l.useState)([]),[Si,Rl]=(0,l.useState)(()=>new Set),[be,Ai]=(0,l.useState)([]),[Be,Vi]=(0,l.useState)([]),[Rn,zi]=(0,l.useState)([]),je=(0,l.useRef)("mine"),[Pt,$r]=(0,l.useState)(null),[Bt,Yt]=(0,l.useState)(null),[Ua,We]=(0,l.useState)(null),[Fn,C]=(0,l.useState)(null),_=k4[ji],R=_+3,I=i.date,Za=(0,l.useRef)(null),_i=(0,l.useRef)(0),qa=(c,L)=>{s({type:c,text:L}),clearTimeout(Za.current),Za.current=setTimeout(()=>s({type:"",text:""}),3200)},Mt=async(c,L)=>{let{data:w,error:S}=await a.rpc(c,L||{});if(S)throw S;return w},Xt=async(c,L)=>{try{let w=await c();return await Fl(!0),Ei(),je.current==="notice"&&dc(),L&&qa("success",typeof L=="function"?L(w):L),w}catch(w){qa("error",Gn(w)),await Fl(!0);return}},Et=(0,l.useMemo)(()=>{if(V==="today")return{start:I,end:I};if(V==="month"){let[w,S]=I.split("-").map(Number);return{start:`${w}-${String(S).padStart(2,"0")}-01`,end:H4(Date.UTC(w,S,0))}}if(V==="week"){let w=hv(I);return{start:w,end:Zl(w,6)}}let c=A||I,L=O||c;return c<=L?{start:c,end:L}:{start:L,end:c}},[V,A,O,I]);(0,l.useEffect)(()=>{let c=setInterval(()=>n(L=>{let w=L4();return w.date===L.date&&w.time===L.time?L:w}),3e4);return()=>clearInterval(c)},[]);let N4=async()=>{try{let c=await Mt("work_current_member"),L=await Mt("work_list_people");return d(c),g(L||[]),Kr(new Set((L||[]).filter(w=>tc.includes(w.role)).map(w=>w.member_id))),k(""),!0}catch(c){return k(Gn(c)),!1}},Fl=async c=>{let L=++_i.current;c||b(!0);try{let w=r&&r.fetchAllData?r.fetchAllData:J=>J(),S=J=>{if(J&&J.error)throw J.error;return J&&J.data||[]},G=S(await w(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).is("parent_id",null).lte("start_date",Et.end).gte("end_date",Et.start))),zt=S(await w(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).is("parent_id",null).lte("end_date",I).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),Qt=new Set(G.map(J=>J.id)),mt=zt.map(J=>J.id).filter(J=>!Qt.has(J)),da=[];if(mt.length&&(da=S(await w(()=>a.from("work_items").select("*, work_assignees(*)").in("id",mt)))),L!==_i.current)return;let U=[];for(let J of[...G,...da]){let{work_assignees:Dt,...ca}=J;for(let Q of Dt||[])U.push({key:Q.id,item:{...ca,assigneeCount:(Dt||[]).length},a:Q})}x(U);let W=[...new Set(U.map(J=>J.item.id))],P=[];if(W.length){let J=S(await w(()=>a.from("work_items").select("*, work_assignees(*)").in("parent_id",W).is("canceled_at",null)));for(let Dt of J){let{work_assignees:ca,...Q}=Dt;for(let tt of ca||[])P.push({key:tt.id,item:{...Q,assigneeCount:(ca||[]).length},a:tt})}}if(L!==_i.current)return;Ai(P)}catch(w){L===_i.current&&qa("error","讀取失敗："+Gn(w))}finally{L===_i.current&&!c&&b(!1)}};(0,l.useEffect)(()=>{N4()},[]),(0,l.useEffect)(()=>{o&&Fl(!1)},[o,Et.start,Et.end,I]),(0,l.useEffect)(()=>{V==="custom"&&!A&&(E(I),lt(Zl(I,6)))},[V]);let He=(0,l.useMemo)(()=>{let c={};return h.forEach(L=>{c[L.member_id]={name:L.name,role:L.role}}),c},[h]),wv=o?He[o]:null,$l=(0,l.useMemo)(()=>h.filter(c=>tc.includes(c.role)),[h]),Il=c=>{let L=c.a.status==="done",w=c.a.status==="awaiting_confirm",S=!!c.a.skipped_at||c.a.status==="on_hold",G=Ht(c.item.end_time),zt=!L&&!w&&!S&&(c.item.end_date<i.date||c.item.end_date===i.date&&G&&G<i.time);return{...c,done:L,awaiting:w,skipped:S,overdue:zt,isMine:c.a.member_id===o,isCreator:c.item.creator_member_id===o,canManage:c.item.creator_member_id===o||c.item.entered_by===o,isRoutine:c.item.assigneeCount===1&&c.item.creator_member_id===c.a.member_id,isRecurring:!!c.item.recurring_rule_id,person:He[c.a.member_id],dispatcher:He[c.item.creator_member_id]}},{overdueRows:$n,groups:Pl,total:ic}=(0,l.useMemo)(()=>{let c=p.map(Il),L=Ma.trim().toLowerCase(),w=W=>!L||[W.item.title,W.item.note,W.person&&W.person.name,W.dispatcher&&W.dispatcher.name].some(P=>P&&String(P).toLowerCase().includes(L)),S=c.filter(W=>(M==="mine"?W.isMine:M==="tome"?W.isMine&&!W.isCreator:M==="dispatched"?W.canManage&&!W.isMine:$t.has(W.a.member_id))&&w(W)),G=S.filter(W=>W.overdue).sort((W,P)=>(W.item.end_date+Ht(W.item.end_time)).localeCompare(P.item.end_date+Ht(P.item.end_time))||(W.person&&W.person.name||"").localeCompare(P.person&&P.person.name||"")),zt=S.filter(W=>!W.overdue&&W.item.start_date<=Et.end&&W.item.end_date>=Et.start),Qt={};zt.forEach(W=>{(Qt[W.item.start_date]=Qt[W.item.start_date]||[]).push(W)});let mt=Object.keys(Qt).sort().map(W=>{let P=Qt[W].sort((Dt,ca)=>{if(M!=="all")return Dt.a.sort_order-ca.a.sort_order||String(Dt.a.created_at).localeCompare(String(ca.a.created_at));let Q=Ht(Dt.item.start_time)||"99:99",tt=Ht(ca.item.start_time)||"99:99";return Q.localeCompare(tt)||(Dt.person&&Dt.person.name||"").localeCompare(ca.person&&ca.person.name||"")}),J=M==="mine"&&W>=Et.start&&!L;return{date:W,rows:P,canMove:J}}),da=G,U=mt;if(At.col){let W=At.dir==="asc"?1:-1,P=(Q,tt)=>String(Q||"").localeCompare(String(tt||""),"zh-Hant"),J=Q=>Q.done?3:Q.awaiting?2:Q.skipped?1:0,ca={title:(Q,tt)=>P(Q.item.title,tt.item.title),who:(Q,tt)=>P(Q.dispatcher&&Q.dispatcher.name,tt.dispatcher&&tt.dispatcher.name),doer:(Q,tt)=>P(Q.person&&Q.person.name,tt.person&&tt.person.name),status:(Q,tt)=>J(Q)-J(tt),priority:(Q,tt)=>(m4[Q.item.priority]??1)-(m4[tt.item.priority]??1),hours:(Q,tt)=>{let Ir=M4(Q.item),Oi=M4(tt.item);return Ir==null&&Oi==null?0:Ir==null?2*W:Oi==null?-2*W:Ir-Oi},date:(Q,tt)=>(Q.item.start_date+Ht(Q.item.start_time)).localeCompare(tt.item.start_date+Ht(tt.item.start_time))}[At.col];if(ca){let Q=tt=>[...tt].sort((Ir,Oi)=>W*ca(Ir,Oi));At.col==="date"?(da=Q(G),U=[...mt].sort((tt,Ir)=>W*tt.date.localeCompare(Ir.date))):(da=Q(G),U=mt.map(tt=>({...tt,rows:Q(tt.rows)})))}U=U.map(Q=>({...Q,canMove:!1}))}return{overdueRows:da,groups:U,total:G.length+zt.length}},[p,i,o,M,$t,Et,He,Ma,At]),In=(0,l.useMemo)(()=>{let c={};return be.map(Il).sort((L,w)=>(L.item.start_date+Ht(L.item.start_time)).localeCompare(w.item.start_date+Ht(w.item.start_time))||String(L.item.created_at).localeCompare(String(w.item.created_at))).forEach(L=>{(c[L.item.parent_id]=c[L.item.parent_id]||[]).push(L)}),c},[be,i,o,He]),Pn=(0,l.useMemo)(()=>{let c={};return Be.forEach(L=>{L.item_id&&!L.read_at&&!(L.item_id in c)&&(c[L.item_id]=L.created_at)}),Rn.map(Il).filter(L=>(L.canManage||L.isMine)&&L.item.id in c).map(L=>({...L,notice:!0})).sort((L,w)=>String(c[w.item.id]||"").localeCompare(String(c[L.item.id]||"")))},[Rn,Be,o,He,i]),Ti=x4.filter(c=>c.locked||!ye.includes(c.id)),E4=c=>typeof c.w=="function"?c.w(_):c.w,D4=c=>typeof c.min=="function"?c.min(_):c.min,t2=`56px ${Ti.map(E4).join(" ")}`,O4=56+Ti.reduce((c,L)=>c+D4(L),0)+16,Ni=(c,L,w)=>Xt(()=>{let S={...c.item,...L};return Mt("work_update_routine",{p_item_id:S.id,p_title:S.title,p_start_date:S.start_date,p_start_time:S.start_time||null,p_end_date:S.end_date,p_end_time:S.end_time||null,p_priority:S.priority||"normal",p_note:S.note||null,p_meeting_flag:null})},w),U4=(c,L,w)=>{if(!L||!w){qa("error","日期必填");return}let S=L,G=w;if(L!==c.item.start_date&&w===c.item.end_date&&(G=Zl(L,S4(c.item.end_date,c.item.start_date))),G<S){qa("error","結束日期不能早於開始日期");return}let zt=!(S<=Et.end&&G>=Et.start);return Ni(c,S!==G?{start_date:S,end_date:G,start_time:null,end_time:null}:{start_date:S,end_date:G},zt?`工作移至 ${Fa(S)}`:null)},Z4=(c,L,w)=>{let S=ac(L,w,c.item.start_date===c.item.end_date);if(S){qa("error",S);return}return Ni(c,{start_time:L||null,end_time:w||null})},q4=(c,L)=>{if(!L){qa("error","任務名稱不能空白");return}return Ni(c,{title:L})},Cv=c=>Xt(()=>Mt("work_complete",{p_item_id:c.item.id,p_note:null}),"已完成"),G4=(c,L)=>Xt(()=>Mt("work_set_status",{p_item_id:c.item.id,p_status:L}),L==="done"&&c.item.creator_member_id!==o?"完成回報，等待派工者確認":"狀態已更新"),Y4=c=>Xt(()=>Mt("work_confirm",{p_assignee_id:c.a.id}),"已確認完成"),[a2,r2]=(0,l.useState)(null),[nc,to]=(0,l.useState)(null),[oc,lc]=(0,l.useState)(""),X4=c=>{lc(""),to(c)},Q4=async()=>{let c=nc;to(null),await Xt(()=>Mt("work_return",{p_assignee_id:c.a.id,p_note:oc.trim()||null}),"已退回")},bv=(c,L)=>Xt(()=>Mt("work_move",{p_item_id:c.item.id,p_where:L})),K4=c=>Xt(()=>Mt("work_copy",{p_item_id:c.item.id}),"複製成功"),J4=c=>v({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或擱置不會刪除，標記「取消」並保留紀錄`,onConfirm:async()=>{v(null),await Xt(()=>Mt("work_delete",{p_item_id:c.item.id}),L=>L==="canceled"?"刪除資料，保留原進度紀錄":"已刪除")}}),Bv=async()=>{let c=Ql.trim();if(!c||Kn)return;Jr(!0);let L=Wi||I,w=await Xt(()=>Mt("work_create_routine",{p_title:c,p_start_date:L,p_end_date:L}));if(Jr(!1),w){Ce("");let S=L<=Et.end&&L>=Et.start;qa("success",S?"已新增":`已新增到 ${Fa(L)}（目前顯示範圍看不到，切換範圍就會出現）`)}},R4=async c=>{Jr(!0);let L;if(pt.mode==="editRule")L=await Xt(()=>Mt("work_update_rule",{p_rule_id:pt.rule.id,p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:c.isActive}),"週期工作已儲存（只影響之後產生的工作）"),L!==void 0&&await ao();else if(c.repeat==="none"&&c.assigneeIds&&(pt.parent||!(c.assigneeIds.length===1&&c.assigneeIds[0]===o&&c.dispatcherId===o))){let w=c.assigneeIds.some(S=>S!==o);L=await Xt(()=>Mt("work_assign_create",{p_title:c.title,p_assignee_ids:c.assigneeIds,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_dispatcher_id:c.dispatcherId,p_parent_id:pt.parent?pt.parent.id:null}),w?"派工完成，送出提醒":pt.parent?"子工作已新增":"已新增"),L!==void 0&&pt.parent&&Rl(S=>new Set(S).add(pt.parent.id))}else c.repeat==="none"?L=await Xt(()=>Mt("work_create_routine",{p_title:c.title,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已新增"):L=await Xt(()=>Mt("work_create_rule",{p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已建立週期工作，之後會在凌晨自動出現在清單");Jr(!1),L!==void 0&&Oa(null)},ao=async()=>{try{let{data:c,error:L}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(L)throw L;Jl(c||[])}catch(c){qa("error","讀取週期工作失敗："+Gn(c))}},Ei=async()=>{try{let c=await Mt("work_notifications_list")||[];return Vi(c),c}catch{return[]}};(0,l.useEffect)(()=>{if(!o)return;Ei();let c=setInterval(Ei,6e4);return()=>clearInterval(c)},[o]);let F4=Be.filter(c=>!c.read_at),e2=new Set(F4.map(c=>c.item_id||c.id)).size,$4=async()=>{try{await Mt("work_notifications_read",{p_ids:null}),await Ei()}catch{}},dc=async c=>{let L=[...new Set((c||Be).filter(w=>!w.read_at).map(w=>w.item_id).filter(Boolean))];if(!L.length){zi([]);return}try{let{data:w,error:S}=await a.from("work_items").select("*, work_assignees(*)").in("id",L).is("canceled_at",null);if(S)throw S;let G=[];for(let zt of w||[]){let{work_assignees:Qt,...mt}=zt;for(let da of Qt||[])G.push({key:da.id,item:{...mt,assigneeCount:(Qt||[]).length},a:da})}zi(G)}catch(w){qa("error","讀取提醒失敗："+Gn(w))}},Di=async c=>{let L=je.current;if(je.current=c,B(c),c==="notice"){let w=await Ei();await dc(w)}else L==="notice"&&await $4()},cc=async()=>{ma(!0),await ao()};(0,l.useEffect)(()=>{!pt&&Hi.current&&(Hi.current=!1,cc())},[pt]);let I4=async c=>{await Xt(()=>Mt("work_update_rule",{p_rule_id:c.id,p_title:c.title,p_freq:c.freq,p_weekdays_only:c.weekdays_only,p_week_days:c.week_days,p_month_day:c.month_day,p_month_last_day:c.month_last_day,p_start_date:c.start_date,p_until_date:c.until_date,p_start_time:c.start_time,p_end_time:c.end_time,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:!c.is_active}),c.is_active?"已暫停":"已啟用")!==void 0&&await ao()},P4=c=>v({title:"警告",confirmText:"刪除",message:`刪除週期工作？
刪除未來排程，保留歷史紀錄`,onConfirm:async()=>{v(null),await Xt(()=>Mt("work_delete_rule",{p_rule_id:c.id}),"週期工作已刪除")!==void 0&&await ao()}}),tp=async(c,L)=>{let w=Bt;if(Yt(null),C(null),We(null),!w||w.date!==c.date||w.key===L.key)return;let S=c.rows.filter(mt=>!mt.overdue),G=S.findIndex(mt=>mt.key===w.key),zt=S.findIndex(mt=>mt.key===L.key),Qt=c.rows.find(mt=>mt.key===w.key);!Qt||G<0||zt<0||await Xt(()=>Mt("work_move_to",{p_item_id:Qt.item.id,p_target_item_id:L.item.id,p_after:G<zt}))},Se="flex items-center bg-slate-100 p-1 rounded-full shrink-0",_a=c=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,Ta=Pt?[...$n,...Pl.flatMap(c=>c.rows),...Pn,...Object.values(In).flat()].find(c=>c.key===Pt.key):null,ro=Ta?Pl.find(c=>c.rows.some(L=>L.key===Ta.key)):null,hc=(c,L)=>{let w=c.canManage,S=c.isMine&&c.isRoutine,G=L?L.rows.filter(U=>!U.overdue):[],zt=!!L&&L.canMove&&S&&!c.overdue,Qt=Fn===c.key&&Bt&&Bt.key!==c.key,mt=c.done||c.skipped,da=U=>{switch(U.id){case"title":return l.default.createElement("div",{key:U.id,className:"min-w-0 w-full flex items-start gap-1.5"},!c.item.parent_id&&(In[c.item.id]||[]).length>0&&l.default.createElement("button",{type:"button",onClick:()=>Rl(W=>{let P=new Set(W);return P.has(c.item.id)?P.delete(c.item.id):P.add(c.item.id),P}),"aria-label":Si.has(c.item.id)?"收合子工作":"展開子工作",className:"tbc-expand mt-0.5 shrink-0 inline-flex items-center gap-0.5 rounded-md px-1 py-0.5 text-slate-500 hover:bg-slate-100"},Si.has(c.item.id)?l.default.createElement(Dl,{size:R}):l.default.createElement(l4,{size:R}),l.default.createElement("span",{className:"text-[0.75em] px-1.5 rounded bg-slate-100 text-slate-600"},new Set(In[c.item.id].map(W=>W.item.id)).size)),l.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},c.a.status==="pending"&&c.a.return_note&&l.default.createElement("button",{type:"button",onClick:()=>r2(c),className:"tbc-return-tag inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-amber-200 bg-amber-50 text-amber-700 font-bold hover:brightness-95 cursor-pointer whitespace-nowrap"},l.default.createElement($d,{size:Math.round(_*.8)}),"退回"),c.isRecurring&&l.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},l.default.createElement(qn,{size:Math.round(_*.95)})),c.overdue&&l.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},l.default.createElement(Jd,{size:Math.round(_*.8)})," 逾期")),l.default.createElement("div",{className:"min-w-0 flex-1"},l.default.createElement(j4,{value:c.item.title,placeholder:"工作摘要",canEdit:w,onSave:W=>q4(c,W),className:`font-medium ${mt?"text-slate-400 line-through":c.overdue?"text-red-600":"text-slate-900"}`})));case"who":return l.default.createElement("div",{key:U.id,className:"min-w-0"},l.default.createElement(w4,{person:c.dispatcher,size:R}));case"doer":return l.default.createElement("div",{key:U.id,className:"min-w-0"},l.default.createElement(w4,{person:c.person,size:R}));case"date":{let W=c.item.start_date!==c.item.end_date;return l.default.createElement("div",{key:U.id,className:`min-w-0 ${c.overdue?"text-red-600":"text-slate-700"}`},l.default.createElement(W4,{type:"date",a:c.item.start_date,b:c.item.end_date,canEdit:w,onSave:(P,J)=>U4(c,P,J)},W?`${Fa(c.item.start_date)} → ${Fa(c.item.end_date)}`:Fa(c.item.start_date)))}case"time":{let W=Ht(c.item.start_time),P=Ht(c.item.end_time);return l.default.createElement("div",{key:U.id,className:"min-w-0 text-slate-700"},l.default.createElement(W4,{type:"time",a:W,b:P,canEdit:w&&c.item.start_date===c.item.end_date,onSave:(J,Dt)=>Z4(c,J,Dt),validate:(J,Dt)=>ac(J,Dt,c.item.start_date===c.item.end_date)},W||P?`${W||"—"} ~ ${P||"—"}`:l.default.createElement("span",{className:"text-slate-300"},w&&c.item.start_date===c.item.end_date?"時間設定":"")))}case"hours":return l.default.createElement("div",{key:U.id,className:"text-slate-500 text-[0.9em]"},sv(c.item)||"");case"priority":return l.default.createElement("div",{key:U.id},l.default.createElement("button",{type:"button",disabled:!w,onClick:()=>Ni(c,{priority:pv[c.item.priority]||"normal"}),title:w?"點一下切換":"",className:`tbc-prio text-[0.75em] px-2 py-0.5 rounded border font-bold ${y4[c.item.priority]||y4.normal} ${w?"hover:brightness-95 cursor-pointer":"cursor-default"}`},gv[c.item.priority]||"普通"));case"note":return l.default.createElement("div",{key:U.id,className:"min-w-0 w-full"},l.default.createElement(j4,{value:c.item.note,placeholder:"新增備註",centerEmpty:!0,canEdit:w,onSave:W=>Ni(c,{note:W||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let W=c.done?"done":c.awaiting?"awaiting":c.skipped?"on_hold":"pending",P=W==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":W==="awaiting"?"bg-sky-50 border-sky-200 text-sky-700":W==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600",J={pending:"待處理",done:"完成",on_hold:"擱置",awaiting:"待確認"}[W];return c.awaiting&&c.isCreator&&!c.isMine?l.default.createElement("div",{key:U.id,className:"flex items-center gap-1.5 tbc-review whitespace-nowrap"},l.default.createElement("button",{type:"button",onClick:()=>Y4(c),className:"h-8 px-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},"確認"),l.default.createElement("button",{type:"button",onClick:()=>X4(c),className:"h-8 px-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},"退回")):c.isMine?l.default.createElement("select",{key:U.id,value:W,onChange:Dt=>G4(c,Dt.target.value),"aria-label":"狀態",title:"點一下改變狀態",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${P}`},l.default.createElement("option",{value:"pending"},"待處理"),l.default.createElement("option",{value:"done"},"完成"),l.default.createElement("option",{value:"on_hold"},"擱置"),W==="awaiting"&&l.default.createElement("option",{value:"awaiting",disabled:!0},"待確認")):l.default.createElement("span",{key:U.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${P}`},J)}default:return null}};return l.default.createElement("div",{key:c.key,draggable:zt&&Ua===c.key,onDragStart:U=>{Yt({key:c.key,date:L.date}),U.dataTransfer.effectAllowed="move";try{U.dataTransfer.setData("text/plain",c.key)}catch{}},onDragOver:U=>{Bt&&L&&Bt.date===L.date&&!c.overdue&&(U.preventDefault(),Fn!==c.key&&C(c.key))},onDrop:U=>{U.preventDefault(),L&&tp(L,c)},onDragEnd:()=>{Yt(null),C(null),We(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors
                    ${c.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Bt&&Bt.key===c.key?"opacity-40":""}
                    ${Qt?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:t2}},l.default.createElement("div",{className:"flex items-center gap-0.5 px-2"},zt?l.default.createElement("span",{onMouseDown:()=>We(c.key),onMouseUp:()=>We(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},l.default.createElement(Kg,{size:R})):l.default.createElement("span",{style:{width:R}}),w||c.isMine&&!c.item.parent_id?l.default.createElement("button",{onClick:U=>{let W=U.currentTarget.getBoundingClientRect();$r({key:c.key,x:Math.min(W.left,window.innerWidth-220),y:Math.min(W.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},l.default.createElement(Qg,{size:R})):l.default.createElement("span",{style:{width:R+8}})),Ti.map(U=>{let W=U.id==="title"||U.id==="note";return l.default.createElement("div",{key:U.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${W?"[&>*]:w-full":"justify-center text-center"}`},da(U))}))},uc=new Set,sc=c=>Oa({mode:"create",parent:c.item,initial:{start_date:c.item.start_date,end_date:c.item.end_date}}),i2=(c,L)=>{let w=c.item.parent_id?[]:In[c.item.id]||[],S=w.length>0&&Si.has(c.item.id)&&!uc.has(c.item.id);return S&&uc.add(c.item.id),l.default.createElement(l.default.Fragment,{key:c.key},hc(c,L),S&&l.default.createElement("div",{className:"tbc-subs bg-slate-50/70 border-b border-slate-200 pl-8 pr-3 py-2"},l.default.createElement("div",{className:"rounded-lg border border-slate-200 bg-white overflow-hidden"},l.default.createElement("div",{className:"grid bg-slate-100 border-b border-slate-200 text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:t2}},l.default.createElement("span",{className:"py-1.5"}),Ti.map(G=>l.default.createElement("span",{key:G.id,className:"py-1.5 px-2 border-l border-slate-200 text-center whitespace-nowrap"},G.id==="title"?"子工作":G.label))),w.map(G=>hc(G,null)),(c.canManage||c.isMine)&&l.default.createElement("button",{type:"button",onClick:()=>sc(c),className:"tbc-add-sub w-full text-left px-4 py-2 text-[0.9em] text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-colors"},"+ 新增子工作"))))};return l.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:_}},l.default.createElement(g4,{active:"work",shell:e}),l.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},l.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},l.default.createElement("div",{className:"flex items-center gap-4 min-w-0"},l.default.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:_*1.45}},"工作日誌"),l.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},l.default.createElement(t4,{size:16,className:"text-slate-400 shrink-0"}),l.default.createElement("input",{type:"text",value:Ma,onChange:c=>me(c.target.value),onKeyDown:c=>{c.key==="Escape"&&me("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),Ma&&l.default.createElement("button",{type:"button",onClick:()=>me(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},l.default.createElement(Bi,{size:14})))),l.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},l.default.createElement("button",{onClick:()=>Oa({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},l.default.createElement(Ci,{size:16}),"新增"),l.default.createElement("div",{className:Se},l.default.createElement("button",{onClick:cc,className:_a(!1)},l.default.createElement(Ci,{size:14,className:"text-slate-500"}),"週期工作")),l.default.createElement("div",{className:"relative"},l.default.createElement("button",{onClick:()=>Qn(c=>!c),className:`${Se} !p-1.5`},l.default.createElement("span",{className:_a(Xn)},l.default.createElement(Ul,{size:14,className:"text-slate-500"}),"隱藏")),Xn&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Qn(!1)}),l.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},x4.filter(c=>!c.locked).map(c=>l.default.createElement("label",{key:c.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${c.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},l.default.createElement("input",{type:"checkbox",disabled:c.locked,checked:c.locked||!ye.includes(c.id),onChange:()=>Xl(c.id),className:"accent-indigo-600"}),c.label,c.locked&&l.default.createElement(Fd,{size:11})))))),l.default.createElement("div",{className:Se,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([c,L,w])=>l.default.createElement("button",{key:c,onClick:()=>It(c),title:L,"aria-label":`文字${L}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${ji===c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:w}},"A"))))),f?l.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},l.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},l.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},l.default.createElement(Fd,{size:30})),l.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),l.default.createElement("p",{className:"text-slate-500 font-normal"},f),l.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧者、行政與管理員。"))):l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 relative z-[15] shrink-0 space-y-3"},l.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},(e2>0||M==="notice")&&l.default.createElement("button",{onClick:()=>Di("notice"),"aria-label":"提醒",title:"提醒",className:`tbc-bell relative h-11 w-11 rounded-full flex items-center justify-center transition-colors ${M==="notice"?"bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-200":"bg-slate-100 hover:bg-slate-200 text-slate-600"}`},l.default.createElement(n4,{size:18}),e2>0&&l.default.createElement("span",{className:"tbc-bell-count absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[11px] leading-[18px] text-center font-bold"},e2)),l.default.createElement("div",{className:Se},l.default.createElement("button",{onClick:()=>Di("mine"),className:_a(M==="mine")},"我的"),l.default.createElement("button",{onClick:()=>Di("tome"),className:_a(M==="tome")},"派工給我"),l.default.createElement("button",{onClick:()=>Di("dispatched"),className:_a(M==="dispatched")},"我派工的"),l.default.createElement("button",{onClick:()=>Di("all"),className:_a(M==="all")},"全部")),M==="all"&&l.default.createElement("div",{className:"relative"},l.default.createElement("button",{onClick:()=>Rr(c=>!c),className:`${Se} !p-1.5`},l.default.createElement("span",{className:_a(Jn)},l.default.createElement(Nl,{size:14,className:"text-slate-500"}),"人員（",$t.size,"/",$l.length,"）")),Jn&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Rr(!1)}),l.default.createElement("div",{className:"absolute left-0 top-full mt-2 z-40 w-56 max-h-80 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},l.default.createElement("div",{className:"flex gap-2 px-1 pb-2 mb-1 border-b border-slate-100"},l.default.createElement("button",{onClick:()=>Kr(new Set($l.map(c=>c.member_id))),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全選"),l.default.createElement("button",{onClick:()=>Kr(new Set),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全不選")),$l.map(c=>l.default.createElement("label",{key:c.member_id,className:"flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none text-slate-700 hover:bg-slate-50 cursor-pointer"},l.default.createElement("input",{type:"checkbox",checked:$t.has(c.member_id),onChange:()=>Kr(L=>{let w=new Set(L);return w.has(c.member_id)?w.delete(c.member_id):w.add(c.member_id),w}),className:"accent-indigo-600"}),c.name))))),M!=="notice"&&l.default.createElement("div",{className:Se},l.default.createElement("button",{onClick:()=>j("today"),className:_a(V==="today")},"今日"),l.default.createElement("button",{onClick:()=>j("week"),className:_a(V==="week")},"本週"),l.default.createElement("button",{onClick:()=>j("month"),className:_a(V==="month")},"本月"),l.default.createElement("button",{onClick:()=>j("custom"),className:_a(V==="custom")},"自訂")),M!=="notice"&&V==="custom"&&l.default.createElement("div",{className:"flex items-center gap-2"},l.default.createElement("input",{type:"date",value:A,max:O||void 0,onChange:c=>{let L=c.target.value;E(L),O&&L>O&&lt(L)},className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),l.default.createElement("span",{className:"text-slate-400"},"～"),l.default.createElement("input",{type:"date",value:O,min:A,onChange:c=>{let L=c.target.value;lt(A&&L<A?A:L)},className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),l.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},M==="notice"?l.default.createElement("span",null,"提醒的派工　共 ",Pn.length," 筆"):l.default.createElement(l.default.Fragment,null,Et.start===Et.end?Fa(Et.start):`${Fa(Et.start)} ～ ${Fa(Et.end)}`,l.default.createElement("span",{className:"ml-3"},"共 ",ic," 筆"))))),l.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},l.default.createElement("div",{className:"space-y-4",style:{minWidth:O4}},l.default.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:t2}},l.default.createElement("span",{className:"py-2"}),Ti.map(c=>c.sortable?l.default.createElement("button",{key:c.id,type:"button",onClick:()=>Yn(c.id),title:"點一下排序","aria-sort":At.col===c.id?At.dir==="asc"?"ascending":"descending":"none",className:`py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap font-medium inline-flex items-center justify-center gap-0.5 hover:bg-slate-200/70 transition-colors ${At.col===c.id?"text-indigo-600":""}`},c.label,At.col===c.id&&(At.dir==="asc"?l.default.createElement(Fg,{size:14}):l.default.createElement(Dl,{size:14}))):l.default.createElement("span",{key:c.id,className:"py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap"},c.label))),M==="notice"?Pn.length===0?l.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},"目前沒有提醒"):l.default.createElement("div",{className:"tbc-notice-list bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},Pn.map(c=>i2(c,null))):y&&p.length===0?l.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):ic===0?l.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},Ma.trim()?`找不到符合「${Ma.trim()}」的工作（只搜尋目前顯示的範圍）`:"新增一筆工作，開始記錄"):l.default.createElement(l.default.Fragment,null,$n.length>0&&l.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},l.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},l.default.createElement(Jd,{size:R})," 逾期未完成 ",l.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},$n.length)),$n.map(c=>i2(c,null))),Pl.map(c=>{let L=uv(c.date,I);return l.default.createElement("div",{key:c.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},l.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},l.default.createElement("span",{className:`font-bold ${L.tag==="今天"?"text-indigo-600":"text-slate-800"}`},L.text)),c.rows.map(w=>i2(w,c)))}))))),a2&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm",onClick:()=>r2(null)},l.default.createElement("div",{className:"tbc-return-info bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in",onClick:c=>c.stopPropagation()},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement($d,{size:20,className:"text-amber-600"}),"退回原因"),l.default.createElement("button",{"aria-label":"關閉",onClick:()=>r2(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},l.default.createElement(Bi,{size:20}))),l.default.createElement("div",{className:"p-5 space-y-2"},l.default.createElement("div",{className:"tbc-return-title font-bold text-slate-900"},"工作摘要：",a2.item.title),l.default.createElement("div",{className:"tbc-return-reason text-slate-900 whitespace-pre-wrap"},a2.a.return_note)))),nc&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(o4,{size:20,className:"text-indigo-600"}),"退回"),l.default.createElement("button",{onClick:()=>to(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},l.default.createElement(Bi,{size:20}))),l.default.createElement("div",{className:"p-5 space-y-2"},l.default.createElement("label",{className:"text-xs font-medium text-slate-500"},"原因（選填）"),l.default.createElement("textarea",{autoFocus:!0,value:oc,onChange:c=>lc(c.target.value),rows:3,placeholder:"簡要說明",className:"tbc-return-text w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"})),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},l.default.createElement("button",{onClick:()=>to(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full"},"取消"),l.default.createElement("button",{onClick:Q4,className:"tbc-return-ok flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full"},"退回")))),Pt&&Ta&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>$r(null),onContextMenu:c=>{c.preventDefault(),$r(null)}}),l.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:Pt.x,top:Pt.y,fontSize:_}},(()=>{let L=(ro?ro.rows.filter(G=>!G.overdue):[]).findIndex(G=>G.key===Ta.key),w=!!ro&&ro.canMove&&L>=0,S=(G,zt,Qt,mt,da)=>l.default.createElement("button",{disabled:mt,onClick:()=>{$r(null),Qt()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${da?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},l.default.createElement(G,{size:R-1}),zt);return l.default.createElement(l.default.Fragment,null,!Ta.item.parent_id&&S(Ci,"新增子工作",()=>sc(Ta)),Ta.canManage&&Ta.isRoutine&&S(Rg,"複製",()=>K4(Ta)),Ta.canManage&&S(Rd,"刪除",()=>J4(Ta),!1,!0))})())),pt&&l.default.createElement(xv,{key:pt.mode+(pt.rule?pt.rule.id:"")+(pt.parent?pt.parent.id:""),mode:pt.mode,parent:pt.parent,initial:pt.rule||pt.initial,presetRepeat:pt.preset,today:I,busy:Kn,onClose:()=>Oa(null),onSubmit:R4,people:h,meId:o}),Kl&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(qn,{className:"text-indigo-600",size:20})," 我的週期工作"),l.default.createElement("button",{onClick:()=>ma(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},l.default.createElement(Bi,{size:20}))),l.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},l.default.createElement("button",{onClick:()=>{ma(!1),Oa({mode:"createRule",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},l.default.createElement(Ci,{size:16}),"新增週期工作"),Fr.length===0?l.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"尚未建立週期工作"):Fr.map(c=>l.default.createElement("div",{key:c.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${c.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},l.default.createElement("div",{className:"min-w-0"},l.default.createElement("div",{className:`font-medium truncate ${c.is_active?"text-slate-900":"text-slate-400"}`},c.title),l.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},fv(c),c.start_time?`　${Ht(c.start_time)}${c.end_time?"~"+Ht(c.end_time):""}`:"",c.until_date?`　到 ${Fa(c.until_date)}`:"",c.is_active?"":"　（暫停）")),l.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},l.default.createElement("button",{onClick:()=>{Hi.current=!0,ma(!1),Oa({mode:"editRule",rule:c})},className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},l.default.createElement(Pg,{size:16})),l.default.createElement("button",{onClick:()=>I4(c),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${c.is_active?"bg-emerald-50 text-emerald-600 hover:bg-emerald-100":"bg-amber-50 text-amber-600 hover:bg-amber-100"}`,title:c.is_active?"啟用":"暫停","aria-label":c.is_active?"啟用":"暫停"},c.is_active?l.default.createElement(Ig,{size:16}):l.default.createElement($g,{size:16})),l.default.createElement("button",{onClick:()=>P4(c),className:"tbc-rule-del p-2.5 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg active:scale-95 transition-colors",title:"刪除","aria-label":"刪除週期工作"},l.default.createElement(Rd,{size:16})))))))),T.text&&l.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},l.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${T.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},l.default.createElement("div",{className:"shrink-0 mt-0.5"},T.type==="success"?l.default.createElement(Jg,{size:18}):l.default.createElement(bi,{size:18})),l.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},T.text))),u&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"p-8 text-center"},l.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},l.default.createElement(bi,{size:32})),l.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),l.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},l.default.createElement("button",{onClick:()=>v(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),l.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},V4=Lv;var z4=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
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
`;var Mv="https://jcepavwocdujoeoqxvsd.supabase.co",mv="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",ec=document.createElement("style");ec.id="tbc-one-css";ec.textContent=z4;document.head.appendChild(ec);var Me=window.__TBC_SB||window.supabase.createClient(Mv,mv),yv=({page:t})=>{let[a,r]=(0,St.useState)(void 0),[e,i]=(0,St.useState)(""),[n,o]=(0,St.useState)({status:"loading",name:"",role:"member"});(0,St.useEffect)(()=>{let f=!0;Me.auth.getSession().then(({data:p})=>{f&&r(p.session||null)});let{data:k}=Me.auth.onAuthStateChange((p,x)=>{f&&r(x||null)});return()=>{f=!1,k&&k.subscription&&k.subscription.unsubscribe()}},[]);let d=a&&a.user&&a.user.id;(0,St.useEffect)(()=>{if(!a)return;let f=!0;return s4(Me,a).then(async k=>{if(f){if(k.status!=="ok"||!h4.includes(k.role)){try{await Me.auth.signOut()}catch{}i("權限不足"),r(null);return}i(""),o(k)}}),()=>{f=!1}},[d]);let h=async()=>{try{await Me.auth.signOut()}catch{}r(null),o({status:"loading",name:"",role:"member"})};if(a===void 0)return St.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return St.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},St.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},St.default.createElement(Ol,{size:30})),St.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),St.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),St.default.createElement(p4,{supabase:Me,notice:e}));if(n.status!=="ok")return St.default.createElement("div",{className:"h-[100dvh] bg-white"});let g={identity:n,onLogout:h};return t==="work"?St.default.createElement(V4,{session:a,supabase:Me,utils:{},shell:g}):St.default.createElement(v4,{shell:g})},_4=document.getElementById("root");(0,T4.createRoot)(_4).render(St.default.createElement(yv,{page:_4.getAttribute("data-page")||"home"}));})();
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
