(()=>{var op=Object.create;var kc=Object.defineProperty;var lp=Object.getOwnPropertyDescriptor;var dp=Object.getOwnPropertyNames;var cp=Object.getPrototypeOf,hp=Object.prototype.hasOwnProperty;var mr=(t,a)=>()=>{try{return a||t((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}};var up=(t,a,r,e)=>{if(a&&typeof a=="object"||typeof a=="function")for(let i of dp(a))!hp.call(t,i)&&i!==r&&kc(t,i,{get:()=>a[i],enumerable:!(e=lp(a,i))||e.enumerable});return t};var te=(t,a,r)=>(r=t!=null?op(cp(t)):{},up(a||!t||!t.__esModule?kc(r,"default",{value:t,enumerable:!0}):r,t));var Wc=mr(E=>{"use strict";var c2=Symbol.for("react.transitional.element"),sp=Symbol.for("react.portal"),gp=Symbol.for("react.fragment"),pp=Symbol.for("react.strict_mode"),fp=Symbol.for("react.profiler"),vp=Symbol.for("react.consumer"),kp=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),Lp=Symbol.for("react.suspense"),Mp=Symbol.for("react.memo"),yc=Symbol.for("react.lazy"),mp=Symbol.for("react.activity"),xc=Symbol.iterator;function yp(t){return t===null||typeof t!="object"?null:(t=xc&&t[xc]||t["@@iterator"],typeof t=="function"?t:null)}var wc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,bc={};function Ae(t,a,r){this.props=t,this.context=a,this.refs=bc,this.updater=r||wc}Ae.prototype.isReactComponent={};Ae.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};Ae.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bc(){}Bc.prototype=Ae.prototype;function h2(t,a,r){this.props=t,this.context=a,this.refs=bc,this.updater=r||wc}var u2=h2.prototype=new Bc;u2.constructor=h2;Cc(u2,Ae.prototype);u2.isPureReactComponent=!0;var Lc=Array.isArray;function d2(){}var ot={H:null,A:null,T:null,S:null},jc=Object.prototype.hasOwnProperty;function s2(t,a,r){var e=r.ref;return{$$typeof:c2,type:t,key:a,ref:e!==void 0?e:null,props:r}}function wp(t,a){return s2(t.type,a,t.props)}function g2(t){return typeof t=="object"&&t!==null&&t.$$typeof===c2}function Cp(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return a[r]})}var Mc=/\/+/g;function l2(t,a){return typeof t=="object"&&t!==null&&t.key!=null?Cp(""+t.key):a.toString(36)}function bp(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(d2,d2):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Se(t,a,r,e,i){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(n){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case c2:case sp:o=!0;break;case yc:return o=t._init,Se(o(t._payload),a,r,e,i)}}if(o)return i=i(t),o=e===""?"."+l2(t,0):e,Lc(i)?(r="",o!=null&&(r=o.replace(Mc,"$&/")+"/"),Se(i,a,r,"",function(g){return g})):i!=null&&(g2(i)&&(i=wp(i,r+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(Mc,"$&/")+"/")+o)),a.push(i)),1;o=0;var d=e===""?".":e+":";if(Lc(t))for(var h=0;h<t.length;h++)e=t[h],n=d+l2(e,h),o+=Se(e,a,r,n,i);else if(h=yp(t),typeof h=="function")for(t=h.call(t),h=0;!(e=t.next()).done;)e=e.value,n=d+l2(e,h++),o+=Se(e,a,r,n,i);else if(n==="object"){if(typeof t.then=="function")return Se(bp(t),a,r,e,i);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return o}function io(t,a,r){if(t==null)return t;var e=[],i=0;return Se(t,e,"","",function(n){return a.call(r,n,i++)}),e}function Bp(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var mc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},jp={map:io,forEach:function(t,a,r){io(t,function(){a.apply(this,arguments)},r)},count:function(t){var a=0;return io(t,function(){a++}),a},toArray:function(t){return io(t,function(a){return a})||[]},only:function(t){if(!g2(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};E.Activity=mp;E.Children=jp;E.Component=Ae;E.Fragment=gp;E.Profiler=fp;E.PureComponent=h2;E.StrictMode=pp;E.Suspense=Lp;E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ot;E.__COMPILER_RUNTIME={__proto__:null,c:function(t){return ot.H.useMemoCache(t)}};E.cache=function(t){return function(){return t.apply(null,arguments)}};E.cacheSignal=function(){return null};E.cloneElement=function(t,a,r){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=Cc({},t.props),i=t.key;if(a!=null)for(n in a.key!==void 0&&(i=""+a.key),a)!jc.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=r;else if(1<n){for(var o=Array(n),d=0;d<n;d++)o[d]=arguments[d+2];e.children=o}return s2(t.type,i,e)};E.createContext=function(t){return t={$$typeof:kp,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:vp,_context:t},t};E.createElement=function(t,a,r){var e,i={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)jc.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(i[e]=a[e]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var d=Array(o),h=0;h<o;h++)d[h]=arguments[h+2];i.children=d}if(t&&t.defaultProps)for(e in o=t.defaultProps,o)i[e]===void 0&&(i[e]=o[e]);return s2(t,n,i)};E.createRef=function(){return{current:null}};E.forwardRef=function(t){return{$$typeof:xp,render:t}};E.isValidElement=g2;E.lazy=function(t){return{$$typeof:yc,_payload:{_status:-1,_result:t},_init:Bp}};E.memo=function(t,a){return{$$typeof:Mp,type:t,compare:a===void 0?null:a}};E.startTransition=function(t){var a=ot.T,r={};ot.T=r;try{var e=t(),i=ot.S;i!==null&&i(r,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(d2,mc)}catch(n){mc(n)}finally{a!==null&&r.types!==null&&(a.types=r.types),ot.T=a}};E.unstable_useCacheRefresh=function(){return ot.H.useCacheRefresh()};E.use=function(t){return ot.H.use(t)};E.useActionState=function(t,a,r){return ot.H.useActionState(t,a,r)};E.useCallback=function(t,a){return ot.H.useCallback(t,a)};E.useContext=function(t){return ot.H.useContext(t)};E.useDebugValue=function(){};E.useDeferredValue=function(t,a){return ot.H.useDeferredValue(t,a)};E.useEffect=function(t,a){return ot.H.useEffect(t,a)};E.useEffectEvent=function(t){return ot.H.useEffectEvent(t)};E.useId=function(){return ot.H.useId()};E.useImperativeHandle=function(t,a,r){return ot.H.useImperativeHandle(t,a,r)};E.useInsertionEffect=function(t,a){return ot.H.useInsertionEffect(t,a)};E.useLayoutEffect=function(t,a){return ot.H.useLayoutEffect(t,a)};E.useMemo=function(t,a){return ot.H.useMemo(t,a)};E.useOptimistic=function(t,a){return ot.H.useOptimistic(t,a)};E.useReducer=function(t,a,r){return ot.H.useReducer(t,a,r)};E.useRef=function(t){return ot.H.useRef(t)};E.useState=function(t){return ot.H.useState(t)};E.useSyncExternalStore=function(t,a,r){return ot.H.useSyncExternalStore(t,a,r)};E.useTransition=function(){return ot.H.useTransition()};E.version="19.2.8"});var Pa=mr((Tv,Hc)=>{"use strict";Hc.exports=Wc()});var Oc=mr(ut=>{"use strict";function k2(t,a){var r=t.length;t.push(a);t:for(;0<r;){var e=r-1>>>1,i=t[e];if(0<no(i,a))t[e]=a,t[r]=i,r=e;else break t}}function Ga(t){return t.length===0?null:t[0]}function lo(t){if(t.length===0)return null;var a=t[0],r=t.pop();if(r!==a){t[0]=r;t:for(var e=0,i=t.length,n=i>>>1;e<n;){var o=2*(e+1)-1,d=t[o],h=o+1,g=t[h];if(0>no(d,r))h<i&&0>no(g,d)?(t[e]=g,t[h]=r,e=h):(t[e]=d,t[o]=r,e=o);else if(h<i&&0>no(g,r))t[e]=g,t[h]=r,e=h;else break t}}return a}function no(t,a){var r=t.sortIndex-a.sortIndex;return r!==0?r:t.id-a.id}ut.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Sc=performance,ut.unstable_now=function(){return Sc.now()}):(p2=Date,Ac=p2.now(),ut.unstable_now=function(){return p2.now()-Ac});var Sc,p2,Ac,tr=[],yr=[],Wp=1,Ba=null,Rt=3,x2=!1,Ui=!1,Zi=!1,L2=!1,_c=typeof setTimeout=="function"?setTimeout:null,Tc=typeof clearTimeout=="function"?clearTimeout:null,Vc=typeof setImmediate<"u"?setImmediate:null;function oo(t){for(var a=Ga(yr);a!==null;){if(a.callback===null)lo(yr);else if(a.startTime<=t)lo(yr),a.sortIndex=a.expirationTime,k2(tr,a);else break;a=Ga(yr)}}function M2(t){if(Zi=!1,oo(t),!Ui)if(Ga(tr)!==null)Ui=!0,ze||(ze=!0,Ve());else{var a=Ga(yr);a!==null&&m2(M2,a.startTime-t)}}var ze=!1,qi=-1,Nc=5,Ec=-1;function Dc(){return L2?!0:!(ut.unstable_now()-Ec<Nc)}function f2(){if(L2=!1,ze){var t=ut.unstable_now();Ec=t;var a=!0;try{t:{Ui=!1,Zi&&(Zi=!1,Tc(qi),qi=-1),x2=!0;var r=Rt;try{a:{for(oo(t),Ba=Ga(tr);Ba!==null&&!(Ba.expirationTime>t&&Dc());){var e=Ba.callback;if(typeof e=="function"){Ba.callback=null,Rt=Ba.priorityLevel;var i=e(Ba.expirationTime<=t);if(t=ut.unstable_now(),typeof i=="function"){Ba.callback=i,oo(t),a=!0;break a}Ba===Ga(tr)&&lo(tr),oo(t)}else lo(tr);Ba=Ga(tr)}if(Ba!==null)a=!0;else{var n=Ga(yr);n!==null&&m2(M2,n.startTime-t),a=!1}}break t}finally{Ba=null,Rt=r,x2=!1}a=void 0}}finally{a?Ve():ze=!1}}}var Ve;typeof Vc=="function"?Ve=function(){Vc(f2)}:typeof MessageChannel<"u"?(v2=new MessageChannel,zc=v2.port2,v2.port1.onmessage=f2,Ve=function(){zc.postMessage(null)}):Ve=function(){_c(f2,0)};var v2,zc;function m2(t,a){qi=_c(function(){t(ut.unstable_now())},a)}ut.unstable_IdlePriority=5;ut.unstable_ImmediatePriority=1;ut.unstable_LowPriority=4;ut.unstable_NormalPriority=3;ut.unstable_Profiling=null;ut.unstable_UserBlockingPriority=2;ut.unstable_cancelCallback=function(t){t.callback=null};ut.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Nc=0<t?Math.floor(1e3/t):5};ut.unstable_getCurrentPriorityLevel=function(){return Rt};ut.unstable_next=function(t){switch(Rt){case 1:case 2:case 3:var a=3;break;default:a=Rt}var r=Rt;Rt=a;try{return t()}finally{Rt=r}};ut.unstable_requestPaint=function(){L2=!0};ut.unstable_runWithPriority=function(t,a){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=Rt;Rt=t;try{return a()}finally{Rt=r}};ut.unstable_scheduleCallback=function(t,a,r){var e=ut.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?e+r:e):r=e,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,t={id:Wp++,callback:a,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},r>e?(t.sortIndex=r,k2(yr,t),Ga(tr)===null&&t===Ga(yr)&&(Zi?(Tc(qi),qi=-1):Zi=!0,m2(M2,r-e))):(t.sortIndex=i,k2(tr,t),Ui||x2||(Ui=!0,ze||(ze=!0,Ve()))),t};ut.unstable_shouldYield=Dc;ut.unstable_wrapCallback=function(t){var a=Rt;return function(){var r=Rt;Rt=a;try{return t.apply(this,arguments)}finally{Rt=r}}}});var Zc=mr((Ev,Uc)=>{"use strict";Uc.exports=Oc()});var Gc=mr($t=>{"use strict";var Hp=Pa();function qc(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function wr(){}var Ft={d:{f:wr,r:function(){throw Error(qc(522))},D:wr,C:wr,L:wr,m:wr,X:wr,S:wr,M:wr},p:0,findDOMNode:null},Sp=Symbol.for("react.portal");function Ap(t,a,r){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sp,key:e==null?null:""+e,children:t,containerInfo:a,implementation:r}}var Gi=Hp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function co(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}$t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ft;$t.createPortal=function(t,a){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(qc(299));return Ap(t,a,null,r)};$t.flushSync=function(t){var a=Gi.T,r=Ft.p;try{if(Gi.T=null,Ft.p=2,t)return t()}finally{Gi.T=a,Ft.p=r,Ft.d.f()}};$t.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Ft.d.C(t,a))};$t.prefetchDNS=function(t){typeof t=="string"&&Ft.d.D(t)};$t.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var r=a.as,e=co(r,a.crossOrigin),i=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;r==="style"?Ft.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:i,fetchPriority:n}):r==="script"&&Ft.d.X(t,{crossOrigin:e,integrity:i,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};$t.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var r=co(a.as,a.crossOrigin);Ft.d.M(t,{crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&Ft.d.M(t)};$t.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var r=a.as,e=co(r,a.crossOrigin);Ft.d.L(t,r,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};$t.preloadModule=function(t,a){if(typeof t=="string")if(a){var r=co(a.as,a.crossOrigin);Ft.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:r,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else Ft.d.m(t)};$t.requestFormReset=function(t){Ft.d.r(t)};$t.unstable_batchedUpdates=function(t,a){return t(a)};$t.useFormState=function(t,a,r){return Gi.H.useFormState(t,a,r)};$t.useFormStatus=function(){return Gi.H.useHostTransitionStatus()};$t.version="19.2.8"});var Qc=mr((Ov,Xc)=>{"use strict";function Yc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yc)}catch(t){console.error(t)}}Yc(),Xc.exports=Gc()});var ig=mr(_l=>{"use strict";var Wt=Zc(),xh=Pa(),Vp=Qc();function y(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)a+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sn(t){var a=t,r=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.flags&4098)!==0&&(r=a.return),t=a.return;while(t)}return a.tag===3?r:null}function Mh(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function mh(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Kc(t){if(Sn(t)!==t)throw Error(y(188))}function zp(t){var a=t.alternate;if(!a){if(a=Sn(t),a===null)throw Error(y(188));return a!==t?null:t}for(var r=t,e=a;;){var i=r.return;if(i===null)break;var n=i.alternate;if(n===null){if(e=i.return,e!==null){r=e;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===r)return Kc(i),t;if(n===e)return Kc(i),a;n=n.sibling}throw Error(y(188))}if(r.return!==e.return)r=i,e=n;else{for(var o=!1,d=i.child;d;){if(d===r){o=!0,r=i,e=n;break}if(d===e){o=!0,e=i,r=n;break}d=d.sibling}if(!o){for(d=n.child;d;){if(d===r){o=!0,r=n,e=i;break}if(d===e){o=!0,e=n,r=i;break}d=d.sibling}if(!o)throw Error(y(189))}}if(r.alternate!==e)throw Error(y(190))}if(r.tag!==3)throw Error(y(188));return r.stateNode.current===r?t:a}function yh(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=yh(t),a!==null)return a;t=t.sibling}return null}var ct=Object.assign,_p=Symbol.for("react.element"),ho=Symbol.for("react.transitional.element"),$i=Symbol.for("react.portal"),Oe=Symbol.for("react.fragment"),wh=Symbol.for("react.strict_mode"),a1=Symbol.for("react.profiler"),Ch=Symbol.for("react.consumer"),dr=Symbol.for("react.context"),F1=Symbol.for("react.forward_ref"),r1=Symbol.for("react.suspense"),e1=Symbol.for("react.suspense_list"),$1=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),i1=Symbol.for("react.activity"),Tp=Symbol.for("react.memo_cache_sentinel"),Jc=Symbol.iterator;function Yi(t){return t===null||typeof t!="object"?null:(t=Jc&&t[Jc]||t["@@iterator"],typeof t=="function"?t:null)}var Np=Symbol.for("react.client.reference");function n1(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Np?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Oe:return"Fragment";case a1:return"Profiler";case wh:return"StrictMode";case r1:return"Suspense";case e1:return"SuspenseList";case i1:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case $i:return"Portal";case dr:return t.displayName||"Context";case Ch:return(t._context.displayName||"Context")+".Consumer";case F1:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $1:return a=t.displayName||null,a!==null?a:n1(t.type)||"Memo";case Cr:a=t._payload,t=t._init;try{return n1(t(a))}catch{}}return null}var Ii=Array.isArray,T=xh.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=Vp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe={pending:!1,data:null,method:null,action:null},o1=[],Ue=-1;function Ja(t){return{current:t}}function Dt(t){0>Ue||(t.current=o1[Ue],o1[Ue]=null,Ue--)}function it(t,a){Ue++,o1[Ue]=t.current,t.current=a}var Ka=Ja(null),vn=Ja(null),Tr=Ja(null),Go=Ja(null);function Yo(t,a){switch(it(Tr,a),it(vn,t),it(Ka,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?ah(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=ah(a),t=Ys(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Dt(Ka),it(Ka,t)}function ii(){Dt(Ka),Dt(vn),Dt(Tr)}function l1(t){t.memoizedState!==null&&it(Go,t);var a=Ka.current,r=Ys(a,t.type);a!==r&&(it(vn,t),it(Ka,r))}function Xo(t){vn.current===t&&(Dt(Ka),Dt(vn)),Go.current===t&&(Dt(Go),jn._currentValue=oe)}var y2,Rc;function re(t){if(y2===void 0)try{throw Error()}catch(r){var a=r.stack.trim().match(/\n( *(at )?)/);y2=a&&a[1]||"",Rc=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+y2+t+Rc}var w2=!1;function C2(t,a){if(!t||w2)return"";w2=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var k=function(){throw Error()};if(Object.defineProperty(k.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(k,[])}catch(x){var p=x}Reflect.construct(t,[],k)}else{try{k.call()}catch(x){p=x}t.call(k.prototype)}}else{try{throw Error()}catch(x){p=x}(k=t())&&typeof k.catch=="function"&&k.catch(function(){})}}catch(x){if(x&&p&&typeof x.stack=="string")return[x.stack,p.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),o=n[0],d=n[1];if(o&&d){var h=o.split(`
`),g=d.split(`
`);for(i=e=0;e<h.length&&!h[e].includes("DetermineComponentFrameRoot");)e++;for(;i<g.length&&!g[i].includes("DetermineComponentFrameRoot");)i++;if(e===h.length||i===g.length)for(e=h.length-1,i=g.length-1;1<=e&&0<=i&&h[e]!==g[i];)i--;for(;1<=e&&0<=i;e--,i--)if(h[e]!==g[i]){if(e!==1||i!==1)do if(e--,i--,0>i||h[e]!==g[i]){var f=`
`+h[e].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=e&&0<=i);break}}}finally{w2=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?re(r):""}function Ep(t,a){switch(t.tag){case 26:case 27:case 5:return re(t.type);case 16:return re("Lazy");case 13:return t.child!==a&&a!==null?re("Suspense Fallback"):re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return C2(t.type,!1);case 11:return C2(t.type.render,!1);case 1:return C2(t.type,!0);case 31:return re("Activity");default:return""}}function Fc(t){try{var a="",r=null;do a+=Ep(t,r),r=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var d1=Object.prototype.hasOwnProperty,I1=Wt.unstable_scheduleCallback,b2=Wt.unstable_cancelCallback,Dp=Wt.unstable_shouldYield,Op=Wt.unstable_requestPaint,xa=Wt.unstable_now,Up=Wt.unstable_getCurrentPriorityLevel,bh=Wt.unstable_ImmediatePriority,Bh=Wt.unstable_UserBlockingPriority,Qo=Wt.unstable_NormalPriority,Zp=Wt.unstable_LowPriority,jh=Wt.unstable_IdlePriority,qp=Wt.log,Gp=Wt.unstable_setDisableYieldValue,An=null,La=null;function Sr(t){if(typeof qp=="function"&&Gp(t),La&&typeof La.setStrictMode=="function")try{La.setStrictMode(An,t)}catch{}}var Ma=Math.clz32?Math.clz32:Qp,Yp=Math.log,Xp=Math.LN2;function Qp(t){return t>>>=0,t===0?32:31-(Yp(t)/Xp|0)|0}var uo=256,so=262144,go=4194304;function ee(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xl(t,a,r){var e=t.pendingLanes;if(e===0)return 0;var i=0,n=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var d=e&134217727;return d!==0?(e=d&~n,e!==0?i=ee(e):(o&=d,o!==0?i=ee(o):r||(r=d&~t,r!==0&&(i=ee(r))))):(d=e&~n,d!==0?i=ee(d):o!==0?i=ee(o):r||(r=e&~t,r!==0&&(i=ee(r)))),i===0?0:a!==0&&a!==i&&(a&n)===0&&(n=i&-i,r=a&-a,n>=r||n===32&&(r&4194048)!==0)?a:i}function Vn(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Kp(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wh(){var t=go;return go<<=1,(go&62914560)===0&&(go=4194304),t}function B2(t){for(var a=[],r=0;31>r;r++)a.push(t);return a}function zn(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Jp(t,a,r,e,i,n){var o=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var d=t.entanglements,h=t.expirationTimes,g=t.hiddenUpdates;for(r=o&~r;0<r;){var f=31-Ma(r),k=1<<f;d[f]=0,h[f]=-1;var p=g[f];if(p!==null)for(g[f]=null,f=0;f<p.length;f++){var x=p[f];x!==null&&(x.lane&=-536870913)}r&=~k}e!==0&&Hh(t,e,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(o&~a))}function Hh(t,a,r){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-Ma(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|r&261930}function Sh(t,a){var r=t.entangledLanes|=a;for(t=t.entanglements;r;){var e=31-Ma(r),i=1<<e;i&a|t[e]&a&&(t[e]|=a),r&=~i}}function Ah(t,a){var r=a&-a;return r=(r&42)!==0?1:P1(r),(r&(t.suspendedLanes|a))!==0?0:r}function P1(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function td(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Vh(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:ag(t.type))}function $c(t,a){var r=$.p;try{return $.p=t,a()}finally{$.p=r}}var Jr=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Jr,da="__reactProps$"+Jr,fi="__reactContainer$"+Jr,c1="__reactEvents$"+Jr,Rp="__reactListeners$"+Jr,Fp="__reactHandles$"+Jr,Ic="__reactResources$"+Jr,_n="__reactMarker$"+Jr;function ad(t){delete t[Yt],delete t[da],delete t[c1],delete t[Rp],delete t[Fp]}function Ze(t){var a=t[Yt];if(a)return a;for(var r=t.parentNode;r;){if(a=r[fi]||r[Yt]){if(r=a.alternate,a.child!==null||r!==null&&r.child!==null)for(t=oh(t);t!==null;){if(r=t[Yt])return r;t=oh(t)}return a}t=r,r=t.parentNode}return null}function vi(t){if(t=t[Yt]||t[fi]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Pi(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(y(33))}function $e(t){var a=t[Ic];return a||(a=t[Ic]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Et(t){t[_n]=!0}var zh=new Set,_h={};function ve(t,a){ni(t,a),ni(t+"Capture",a)}function ni(t,a){for(_h[t]=a,t=0;t<a.length;t++)zh.add(a[t])}var $p=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pc={},t0={};function Ip(t){return d1.call(t0,t)?!0:d1.call(Pc,t)?!1:$p.test(t)?t0[t]=!0:(Pc[t]=!0,!1)}function Wo(t,a,r){if(Ip(a))if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+r)}}function po(t,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+r)}}function ar(t,a,r,e){if(e===null)t.removeAttribute(r);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(a,r,""+e)}}function Wa(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Th(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Pp(t,a,r){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var i=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,n.call(this,o)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function h1(t){if(!t._valueTracker){var a=Th(t)?"checked":"value";t._valueTracker=Pp(t,a,""+t[a])}}function Nh(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var r=a.getValue(),e="";return t&&(e=Th(t)?t.checked?"true":"false":t.value),t=e,t!==r?(a.setValue(t),!0):!1}function Ko(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var t5=/[\n"\\]/g;function Aa(t){return t.replace(t5,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function u1(t,a,r,e,i,n,o,d){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),a!=null?o==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+Wa(a)):t.value!==""+Wa(a)&&(t.value=""+Wa(a)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),a!=null?s1(t,o,Wa(a)):r!=null?s1(t,o,Wa(r)):e!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+Wa(d):t.removeAttribute("name")}function Eh(t,a,r,e,i,n,o,d){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||r!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){h1(t);return}r=r!=null?""+Wa(r):"",a=a!=null?""+Wa(a):r,d||a===t.value||(t.value=a),t.defaultValue=a}e=e??i,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=d?t.checked:!!e,t.defaultChecked=!!e,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),h1(t)}function s1(t,a,r){a==="number"&&Ko(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function Ie(t,a,r,e){if(t=t.options,a){a={};for(var i=0;i<r.length;i++)a["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=a.hasOwnProperty("$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&e&&(t[r].defaultSelected=!0)}else{for(r=""+Wa(r),a=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,e&&(t[i].defaultSelected=!0);return}a!==null||t[i].disabled||(a=t[i])}a!==null&&(a.selected=!0)}}function Dh(t,a,r){if(a!=null&&(a=""+Wa(a),a!==t.value&&(t.value=a),r==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=r!=null?""+Wa(r):""}function Oh(t,a,r,e){if(a==null){if(e!=null){if(r!=null)throw Error(y(92));if(Ii(e)){if(1<e.length)throw Error(y(93));e=e[0]}r=e}r==null&&(r=""),a=r}r=Wa(a),t.defaultValue=r,e=t.textContent,e===r&&e!==""&&e!==null&&(t.value=e),h1(t)}function oi(t,a){if(a){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=a;return}}t.textContent=a}var a5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function a0(t,a,r){var e=a.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,r):typeof r!="number"||r===0||a5.has(a)?a==="float"?t.cssFloat=r:t[a]=(""+r).trim():t[a]=r+"px"}function Uh(t,a,r){if(a!=null&&typeof a!="object")throw Error(y(62));if(t=t.style,r!=null){for(var e in r)!r.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var i in a)e=a[i],a.hasOwnProperty(i)&&r[i]!==e&&a0(t,i,e)}else for(var n in a)a.hasOwnProperty(n)&&a0(t,n,a[n])}function rd(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var r5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),e5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(t){return e5.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function cr(){}var g1=null;function ed(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qe=null,Pe=null;function r0(t){var a=vi(t);if(a&&(t=a.stateNode)){var r=t[da]||null;t:switch(t=a.stateNode,a.type){case"input":if(u1(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),a=r.name,r.type==="radio"&&a!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Aa(""+a)+'"][type="radio"]'),a=0;a<r.length;a++){var e=r[a];if(e!==t&&e.form===t.form){var i=e[da]||null;if(!i)throw Error(y(90));u1(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(a=0;a<r.length;a++)e=r[a],e.form===t.form&&Nh(e)}break t;case"textarea":Dh(t,r.value,r.defaultValue);break t;case"select":a=r.value,a!=null&&Ie(t,!!r.multiple,a,!1)}}}var j2=!1;function Zh(t,a,r){if(j2)return t(a,r);j2=!0;try{var e=t(a);return e}finally{if(j2=!1,(qe!==null||Pe!==null)&&(Sl(),qe&&(a=qe,t=Pe,Pe=qe=null,r0(a),t)))for(a=0;a<t.length;a++)r0(t[a])}}function kn(t,a){var r=t.stateNode;if(r===null)return null;var e=r[da]||null;if(e===null)return null;r=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(y(231,a,typeof r));return r}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p1=!1;if(pr)try{_e={},Object.defineProperty(_e,"passive",{get:function(){p1=!0}}),window.addEventListener("test",_e,_e),window.removeEventListener("test",_e,_e)}catch{p1=!1}var _e,Ar=null,id=null,So=null;function qh(){if(So)return So;var t,a=id,r=a.length,e,i="value"in Ar?Ar.value:Ar.textContent,n=i.length;for(t=0;t<r&&a[t]===i[t];t++);var o=r-t;for(e=1;e<=o&&a[r-e]===i[n-e];e++);return So=i.slice(t,1<e?1-e:void 0)}function Ao(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function e0(){return!1}function ca(t){function a(r,e,i,n,o){this._reactName=r,this._targetInst=i,this.type=e,this.nativeEvent=n,this.target=o,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(r=t[d],this[d]=r?r(n):n[d]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?fo:e0,this.isPropagationStopped=e0,this}return ct(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),a}var ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=ca(ke),Tn=ct({},ke,{view:0,detail:0}),i5=ca(Tn),W2,H2,Xi,Ml=ct({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xi&&(Xi&&t.type==="mousemove"?(W2=t.screenX-Xi.screenX,H2=t.screenY-Xi.screenY):H2=W2=0,Xi=t),W2)},movementY:function(t){return"movementY"in t?t.movementY:H2}}),i0=ca(Ml),n5=ct({},Ml,{dataTransfer:0}),o5=ca(n5),l5=ct({},Tn,{relatedTarget:0}),S2=ca(l5),d5=ct({},ke,{animationName:0,elapsedTime:0,pseudoElement:0}),c5=ca(d5),h5=ct({},ke,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),u5=ca(h5),s5=ct({},ke,{data:0}),n0=ca(s5),g5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v5(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=f5[t])?!!a[t]:!1}function nd(){return v5}var k5=ct({},Tn,{key:function(t){if(t.key){var a=g5[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p5[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nd,charCode:function(t){return t.type==="keypress"?Ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x5=ca(k5),L5=ct({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),o0=ca(L5),M5=ct({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nd}),m5=ca(M5),y5=ct({},ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),w5=ca(y5),C5=ct({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),b5=ca(C5),B5=ct({},ke,{newState:0,oldState:0}),j5=ca(B5),W5=[9,13,27,32],od=pr&&"CompositionEvent"in window,rn=null;pr&&"documentMode"in document&&(rn=document.documentMode);var H5=pr&&"TextEvent"in window&&!rn,Gh=pr&&(!od||rn&&8<rn&&11>=rn),l0=" ",d0=!1;function Yh(t,a){switch(t){case"keyup":return W5.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ge=!1;function S5(t,a){switch(t){case"compositionend":return Xh(a);case"keypress":return a.which!==32?null:(d0=!0,l0);case"textInput":return t=a.data,t===l0&&d0?null:t;default:return null}}function A5(t,a){if(Ge)return t==="compositionend"||!od&&Yh(t,a)?(t=qh(),So=id=Ar=null,Ge=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Gh&&a.locale!=="ko"?null:a.data;default:return null}}var V5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function c0(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!V5[t.type]:a==="textarea"}function Qh(t,a,r,e){qe?Pe?Pe.push(e):Pe=[e]:qe=e,a=ul(a,"onChange"),0<a.length&&(r=new Ll("onChange","change",null,r,e),t.push({event:r,listeners:a}))}var en=null,xn=null;function z5(t){Zs(t,0)}function ml(t){var a=Pi(t);if(Nh(a))return t}function h0(t,a){if(t==="change")return a}var Kh=!1;pr&&(pr?(ko="oninput"in document,ko||(A2=document.createElement("div"),A2.setAttribute("oninput","return;"),ko=typeof A2.oninput=="function"),vo=ko):vo=!1,Kh=vo&&(!document.documentMode||9<document.documentMode));var vo,ko,A2;function u0(){en&&(en.detachEvent("onpropertychange",Jh),xn=en=null)}function Jh(t){if(t.propertyName==="value"&&ml(xn)){var a=[];Qh(a,xn,t,ed(t)),Zh(z5,a)}}function _5(t,a,r){t==="focusin"?(u0(),en=a,xn=r,en.attachEvent("onpropertychange",Jh)):t==="focusout"&&u0()}function T5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(xn)}function N5(t,a){if(t==="click")return ml(a)}function E5(t,a){if(t==="input"||t==="change")return ml(a)}function D5(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var ya=typeof Object.is=="function"?Object.is:D5;function Ln(t,a){if(ya(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var r=Object.keys(t),e=Object.keys(a);if(r.length!==e.length)return!1;for(e=0;e<r.length;e++){var i=r[e];if(!d1.call(a,i)||!ya(t[i],a[i]))return!1}return!0}function s0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function g0(t,a){var r=s0(t);t=0;for(var e;r;){if(r.nodeType===3){if(e=t+r.textContent.length,t<=a&&e>=a)return{node:r,offset:a-t};t=e}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=s0(r)}}function Rh(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Rh(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Fh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Ko(t.document);a instanceof t.HTMLIFrameElement;){try{var r=typeof a.contentWindow.location.href=="string"}catch{r=!1}if(r)t=a.contentWindow;else break;a=Ko(t.document)}return a}function ld(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var O5=pr&&"documentMode"in document&&11>=document.documentMode,Ye=null,f1=null,nn=null,v1=!1;function p0(t,a,r){var e=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;v1||Ye==null||Ye!==Ko(e)||(e=Ye,"selectionStart"in e&&ld(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),nn&&Ln(nn,e)||(nn=e,e=ul(f1,"onSelect"),0<e.length&&(a=new Ll("onSelect","select",null,a,r),t.push({event:a,listeners:e}),a.target=Ye)))}function ae(t,a){var r={};return r[t.toLowerCase()]=a.toLowerCase(),r["Webkit"+t]="webkit"+a,r["Moz"+t]="moz"+a,r}var Xe={animationend:ae("Animation","AnimationEnd"),animationiteration:ae("Animation","AnimationIteration"),animationstart:ae("Animation","AnimationStart"),transitionrun:ae("Transition","TransitionRun"),transitionstart:ae("Transition","TransitionStart"),transitioncancel:ae("Transition","TransitionCancel"),transitionend:ae("Transition","TransitionEnd")},V2={},$h={};pr&&($h=document.createElement("div").style,"AnimationEvent"in window||(delete Xe.animationend.animation,delete Xe.animationiteration.animation,delete Xe.animationstart.animation),"TransitionEvent"in window||delete Xe.transitionend.transition);function xe(t){if(V2[t])return V2[t];if(!Xe[t])return t;var a=Xe[t],r;for(r in a)if(a.hasOwnProperty(r)&&r in $h)return V2[t]=a[r];return t}var Ih=xe("animationend"),Ph=xe("animationiteration"),tu=xe("animationstart"),U5=xe("transitionrun"),Z5=xe("transitionstart"),q5=xe("transitioncancel"),au=xe("transitionend"),ru=new Map,k1="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");k1.push("scrollEnd");function qa(t,a){ru.set(t,a),ve(a,[t])}var Jo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ja=[],Qe=0,dd=0;function yl(){for(var t=Qe,a=dd=Qe=0;a<t;){var r=ja[a];ja[a++]=null;var e=ja[a];ja[a++]=null;var i=ja[a];ja[a++]=null;var n=ja[a];if(ja[a++]=null,e!==null&&i!==null){var o=e.pending;o===null?i.next=i:(i.next=o.next,o.next=i),e.pending=i}n!==0&&eu(r,i,n)}}function wl(t,a,r,e){ja[Qe++]=t,ja[Qe++]=a,ja[Qe++]=r,ja[Qe++]=e,dd|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function cd(t,a,r,e){return wl(t,a,r,e),Ro(t)}function Le(t,a){return wl(t,null,null,a),Ro(t)}function eu(t,a,r){t.lanes|=r;var e=t.alternate;e!==null&&(e.lanes|=r);for(var i=!1,n=t.return;n!==null;)n.childLanes|=r,e=n.alternate,e!==null&&(e.childLanes|=r),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&a!==null&&(i=31-Ma(r),t=n.hiddenUpdates,e=t[i],e===null?t[i]=[a]:e.push(a),a.lane=r|536870912),n):null}function Ro(t){if(50<pn)throw pn=0,D1=null,Error(y(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Ke={};function G5(t,a,r,e){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function va(t,a,r,e){return new G5(t,a,r,e)}function hd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ur(t,a){var r=t.alternate;return r===null?(r=va(t.tag,a,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=a,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,a=t.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function iu(t,a){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,a=r.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Vo(t,a,r,e,i,n){var o=0;if(e=t,typeof t=="function")hd(t)&&(o=1);else if(typeof t=="string")o=Kf(t,r,Ka.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case i1:return t=va(31,r,a,i),t.elementType=i1,t.lanes=n,t;case Oe:return le(r.children,i,n,a);case wh:o=8,i|=24;break;case a1:return t=va(12,r,a,i|2),t.elementType=a1,t.lanes=n,t;case r1:return t=va(13,r,a,i),t.elementType=r1,t.lanes=n,t;case e1:return t=va(19,r,a,i),t.elementType=e1,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dr:o=10;break t;case Ch:o=9;break t;case F1:o=11;break t;case $1:o=14;break t;case Cr:o=16,e=null;break t}o=29,r=Error(y(130,t===null?"null":typeof t,"")),e=null}return a=va(o,r,a,i),a.elementType=t,a.type=e,a.lanes=n,a}function le(t,a,r,e){return t=va(7,t,e,a),t.lanes=r,t}function z2(t,a,r){return t=va(6,t,null,a),t.lanes=r,t}function nu(t){var a=va(18,null,null,0);return a.stateNode=t,a}function _2(t,a,r){return a=va(4,t.children!==null?t.children:[],t.key,a),a.lanes=r,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var f0=new WeakMap;function Va(t,a){if(typeof t=="object"&&t!==null){var r=f0.get(t);return r!==void 0?r:(a={value:t,source:a,stack:Fc(a)},f0.set(t,a),a)}return{value:t,source:a,stack:Fc(a)}}var Je=[],Re=0,Fo=null,Mn=0,Ha=[],Sa=0,Yr=null,Ya=1,Xa="";function or(t,a){Je[Re++]=Mn,Je[Re++]=Fo,Fo=t,Mn=a}function ou(t,a,r){Ha[Sa++]=Ya,Ha[Sa++]=Xa,Ha[Sa++]=Yr,Yr=t;var e=Ya;t=Xa;var i=32-Ma(e)-1;e&=~(1<<i),r+=1;var n=32-Ma(a)+i;if(30<n){var o=i-i%5;n=(e&(1<<o)-1).toString(32),e>>=o,i-=o,Ya=1<<32-Ma(a)+i|r<<i|e,Xa=n+t}else Ya=1<<n|r<<i|e,Xa=t}function ud(t){t.return!==null&&(or(t,1),ou(t,1,0))}function sd(t){for(;t===Fo;)Fo=Je[--Re],Je[Re]=null,Mn=Je[--Re],Je[Re]=null;for(;t===Yr;)Yr=Ha[--Sa],Ha[Sa]=null,Xa=Ha[--Sa],Ha[Sa]=null,Ya=Ha[--Sa],Ha[Sa]=null}function lu(t,a){Ha[Sa++]=Ya,Ha[Sa++]=Xa,Ha[Sa++]=Yr,Ya=a.id,Xa=a.overflow,Yr=t}var Xt=null,dt=null,J=!1,Nr=null,za=!1,x1=Error(y(519));function Xr(t){var a=Error(y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mn(Va(a,t)),x1}function v0(t){var a=t.stateNode,r=t.type,e=t.memoizedProps;switch(a[Yt]=t,a[da]=e,r){case"dialog":G("cancel",a),G("close",a);break;case"iframe":case"object":case"embed":G("load",a);break;case"video":case"audio":for(r=0;r<bn.length;r++)G(bn[r],a);break;case"source":G("error",a);break;case"img":case"image":case"link":G("error",a),G("load",a);break;case"details":G("toggle",a);break;case"input":G("invalid",a),Eh(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":G("invalid",a);break;case"textarea":G("invalid",a),Oh(a,e.value,e.defaultValue,e.children)}r=e.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||a.textContent===""+r||e.suppressHydrationWarning===!0||Gs(a.textContent,r)?(e.popover!=null&&(G("beforetoggle",a),G("toggle",a)),e.onScroll!=null&&G("scroll",a),e.onScrollEnd!=null&&G("scrollend",a),e.onClick!=null&&(a.onclick=cr),a=!0):a=!1,a||Xr(t,!0)}function k0(t){for(Xt=t.return;Xt;)switch(Xt.tag){case 5:case 31:case 13:za=!1;return;case 27:case 3:za=!0;return;default:Xt=Xt.return}}function Te(t){if(t!==Xt)return!1;if(!J)return k0(t),J=!0,!1;var a=t.tag,r;if((r=a!==3&&a!==27)&&((r=a===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||G1(t.type,t.memoizedProps)),r=!r),r&&dt&&Xr(t),k0(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));dt=nh(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));dt=nh(t)}else a===27?(a=dt,Rr(t.type)?(t=K1,K1=null,dt=t):dt=a):dt=Xt?Ta(t.stateNode.nextSibling):null;return!0}function ue(){dt=Xt=null,J=!1}function T2(){var t=Nr;return t!==null&&(oa===null?oa=t:oa.push.apply(oa,t),Nr=null),t}function mn(t){Nr===null?Nr=[t]:Nr.push(t)}var L1=Ja(null),Me=null,hr=null;function Br(t,a,r){it(L1,a._currentValue),a._currentValue=r}function sr(t){t._currentValue=L1.current,Dt(L1)}function M1(t,a,r){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===r)break;t=t.return}}function m1(t,a,r,e){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var o=i.child;n=n.firstContext;t:for(;n!==null;){var d=n;n=i;for(var h=0;h<a.length;h++)if(d.context===a[h]){n.lanes|=r,d=n.alternate,d!==null&&(d.lanes|=r),M1(n.return,r,t),e||(o=null);break t}n=d.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=r,n=o.alternate,n!==null&&(n.lanes|=r),M1(o,r,t),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ki(t,a,r,e){t=null;for(var i=a,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(y(387));if(o=o.memoizedProps,o!==null){var d=i.type;ya(i.pendingProps.value,o.value)||(t!==null?t.push(d):t=[d])}}else if(i===Go.current){if(o=i.alternate,o===null)throw Error(y(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(jn):t=[jn])}i=i.return}t!==null&&m1(a,t,r,e),a.flags|=262144}function $o(t){for(t=t.firstContext;t!==null;){if(!ya(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function se(t){Me=t,hr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Qt(t){return du(Me,t)}function xo(t,a){return Me===null&&se(t),du(t,a)}function du(t,a){var r=a._currentValue;if(a={context:a,memoizedValue:r,next:null},hr===null){if(t===null)throw Error(y(308));hr=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else hr=hr.next=a;return r}var Y5=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(r,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(r){return r()})}},X5=Wt.unstable_scheduleCallback,Q5=Wt.unstable_NormalPriority,bt={$$typeof:dr,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gd(){return{controller:new Y5,data:new Map,refCount:0}}function Nn(t){t.refCount--,t.refCount===0&&X5(Q5,function(){t.controller.abort()})}var on=null,y1=0,li=0,ti=null;function K5(t,a){if(on===null){var r=on=[];y1=0,li=Dd(),ti={status:"pending",value:void 0,then:function(e){r.push(e)}}}return y1++,a.then(x0,x0),a}function x0(){if(--y1===0&&on!==null){ti!==null&&(ti.status="fulfilled");var t=on;on=null,li=0,ti=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function J5(t,a){var r=[],e={status:"pending",value:null,reason:null,then:function(i){r.push(i)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var i=0;i<r.length;i++)(0,r[i])(a)},function(i){for(e.status="rejected",e.reason=i,i=0;i<r.length;i++)(0,r[i])(void 0)}),e}var L0=T.S;T.S=function(t,a){ys=xa(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&K5(t,a),L0!==null&&L0(t,a)};var de=Ja(null);function pd(){var t=de.current;return t!==null?t:rt.pooledCache}function zo(t,a){a===null?it(de,de.current):it(de,a.pool)}function cu(){var t=pd();return t===null?null:{parent:bt._currentValue,pool:t}}var xi=Error(y(460)),fd=Error(y(474)),Cl=Error(y(542)),Io={then:function(){}};function M0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function hu(t,a,r){switch(r=t[r],r===void 0?t.push(a):r!==a&&(a.then(cr,cr),a=r),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,y0(t),t;default:if(typeof a.status=="string")a.then(cr,cr);else{if(t=rt,t!==null&&100<t.shellSuspendCounter)throw Error(y(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var i=a;i.status="fulfilled",i.value=e}},function(e){if(a.status==="pending"){var i=a;i.status="rejected",i.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,y0(t),t}throw ce=a,xi}}function ie(t){try{var a=t._init;return a(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ce=r,xi):r}}var ce=null;function m0(){if(ce===null)throw Error(y(459));var t=ce;return ce=null,t}function y0(t){if(t===xi||t===Cl)throw Error(y(483))}var ai=null,yn=0;function Lo(t){var a=yn;return yn+=1,ai===null&&(ai=[]),hu(ai,t,a)}function Qi(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Mo(t,a){throw a.$$typeof===_p?Error(y(525)):(t=Object.prototype.toString.call(a),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function uu(t){function a(s,u){if(t){var v=s.deletions;v===null?(s.deletions=[u],s.flags|=16):v.push(u)}}function r(s,u){if(!t)return null;for(;u!==null;)a(s,u),u=u.sibling;return null}function e(s){for(var u=new Map;s!==null;)s.key!==null?u.set(s.key,s):u.set(s.index,s),s=s.sibling;return u}function i(s,u){return s=ur(s,u),s.index=0,s.sibling=null,s}function n(s,u,v){return s.index=v,t?(v=s.alternate,v!==null?(v=v.index,v<u?(s.flags|=67108866,u):v):(s.flags|=67108866,u)):(s.flags|=1048576,u)}function o(s){return t&&s.alternate===null&&(s.flags|=67108866),s}function d(s,u,v,M){return u===null||u.tag!==6?(u=z2(v,s.mode,M),u.return=s,u):(u=i(u,v),u.return=s,u)}function h(s,u,v,M){var j=v.type;return j===Oe?f(s,u,v.props.children,M,v.key):u!==null&&(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Cr&&ie(j)===u.type)?(u=i(u,v.props),Qi(u,v),u.return=s,u):(u=Vo(v.type,v.key,v.props,null,s.mode,M),Qi(u,v),u.return=s,u)}function g(s,u,v,M){return u===null||u.tag!==4||u.stateNode.containerInfo!==v.containerInfo||u.stateNode.implementation!==v.implementation?(u=_2(v,s.mode,M),u.return=s,u):(u=i(u,v.children||[]),u.return=s,u)}function f(s,u,v,M,j){return u===null||u.tag!==7?(u=le(v,s.mode,M,j),u.return=s,u):(u=i(u,v),u.return=s,u)}function k(s,u,v){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=z2(""+u,s.mode,v),u.return=s,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ho:return v=Vo(u.type,u.key,u.props,null,s.mode,v),Qi(v,u),v.return=s,v;case $i:return u=_2(u,s.mode,v),u.return=s,u;case Cr:return u=ie(u),k(s,u,v)}if(Ii(u)||Yi(u))return u=le(u,s.mode,v,null),u.return=s,u;if(typeof u.then=="function")return k(s,Lo(u),v);if(u.$$typeof===dr)return k(s,xo(s,u),v);Mo(s,u)}return null}function p(s,u,v,M){var j=u!==null?u.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return j!==null?null:d(s,u,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:return v.key===j?h(s,u,v,M):null;case $i:return v.key===j?g(s,u,v,M):null;case Cr:return v=ie(v),p(s,u,v,M)}if(Ii(v)||Yi(v))return j!==null?null:f(s,u,v,M,null);if(typeof v.then=="function")return p(s,u,Lo(v),M);if(v.$$typeof===dr)return p(s,u,xo(s,v),M);Mo(s,v)}return null}function x(s,u,v,M,j){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return s=s.get(v)||null,d(u,s,""+M,j);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ho:return s=s.get(M.key===null?v:M.key)||null,h(u,s,M,j);case $i:return s=s.get(M.key===null?v:M.key)||null,g(u,s,M,j);case Cr:return M=ie(M),x(s,u,v,M,j)}if(Ii(M)||Yi(M))return s=s.get(v)||null,f(u,s,M,j,null);if(typeof M.then=="function")return x(s,u,v,Lo(M),j);if(M.$$typeof===dr)return x(s,u,v,xo(u,M),j);Mo(u,M)}return null}function w(s,u,v,M){for(var j=null,_=null,H=u,V=u=0,D=null;H!==null&&V<v.length;V++){H.index>V?(D=H,H=null):D=H.sibling;var U=p(s,H,v[V],M);if(U===null){H===null&&(H=D);break}t&&H&&U.alternate===null&&a(s,H),u=n(U,u,V),_===null?j=U:_.sibling=U,_=U,H=D}if(V===v.length)return r(s,H),J&&or(s,V),j;if(H===null){for(;V<v.length;V++)H=k(s,v[V],M),H!==null&&(u=n(H,u,V),_===null?j=H:_.sibling=H,_=H);return J&&or(s,V),j}for(H=e(H);V<v.length;V++)D=x(H,s,V,v[V],M),D!==null&&(t&&D.alternate!==null&&H.delete(D.key===null?V:D.key),u=n(D,u,V),_===null?j=D:_.sibling=D,_=D);return t&&H.forEach(function(nt){return a(s,nt)}),J&&or(s,V),j}function b(s,u,v,M){if(v==null)throw Error(y(151));for(var j=null,_=null,H=u,V=u=0,D=null,U=v.next();H!==null&&!U.done;V++,U=v.next()){H.index>V?(D=H,H=null):D=H.sibling;var nt=p(s,H,U.value,M);if(nt===null){H===null&&(H=D);break}t&&H&&nt.alternate===null&&a(s,H),u=n(nt,u,V),_===null?j=nt:_.sibling=nt,_=nt,H=D}if(U.done)return r(s,H),J&&or(s,V),j;if(H===null){for(;!U.done;V++,U=v.next())U=k(s,U.value,M),U!==null&&(u=n(U,u,V),_===null?j=U:_.sibling=U,_=U);return J&&or(s,V),j}for(H=e(H);!U.done;V++,U=v.next())U=x(H,s,V,U.value,M),U!==null&&(t&&U.alternate!==null&&H.delete(U.key===null?V:U.key),u=n(U,u,V),_===null?j=U:_.sibling=U,_=U);return t&&H.forEach(function(Pt){return a(s,Pt)}),J&&or(s,V),j}function z(s,u,v,M){if(typeof v=="object"&&v!==null&&v.type===Oe&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:t:{for(var j=v.key;u!==null;){if(u.key===j){if(j=v.type,j===Oe){if(u.tag===7){r(s,u.sibling),M=i(u,v.props.children),M.return=s,s=M;break t}}else if(u.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Cr&&ie(j)===u.type){r(s,u.sibling),M=i(u,v.props),Qi(M,v),M.return=s,s=M;break t}r(s,u);break}else a(s,u);u=u.sibling}v.type===Oe?(M=le(v.props.children,s.mode,M,v.key),M.return=s,s=M):(M=Vo(v.type,v.key,v.props,null,s.mode,M),Qi(M,v),M.return=s,s=M)}return o(s);case $i:t:{for(j=v.key;u!==null;){if(u.key===j)if(u.tag===4&&u.stateNode.containerInfo===v.containerInfo&&u.stateNode.implementation===v.implementation){r(s,u.sibling),M=i(u,v.children||[]),M.return=s,s=M;break t}else{r(s,u);break}else a(s,u);u=u.sibling}M=_2(v,s.mode,M),M.return=s,s=M}return o(s);case Cr:return v=ie(v),z(s,u,v,M)}if(Ii(v))return w(s,u,v,M);if(Yi(v)){if(j=Yi(v),typeof j!="function")throw Error(y(150));return v=j.call(v),b(s,u,v,M)}if(typeof v.then=="function")return z(s,u,Lo(v),M);if(v.$$typeof===dr)return z(s,u,xo(s,v),M);Mo(s,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,u!==null&&u.tag===6?(r(s,u.sibling),M=i(u,v),M.return=s,s=M):(r(s,u),M=z2(v,s.mode,M),M.return=s,s=M),o(s)):r(s,u)}return function(s,u,v,M){try{yn=0;var j=z(s,u,v,M);return ai=null,j}catch(H){if(H===xi||H===Cl)throw H;var _=va(29,H,null,s.mode);return _.lanes=M,_.return=s,_}}}var ge=uu(!0),su=uu(!1),br=!1;function vd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function w1(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Er(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Dr(t,a,r){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(F&2)!==0){var i=e.pending;return i===null?a.next=a:(a.next=i.next,i.next=a),e.pending=a,a=Ro(t),eu(t,null,r),a}return wl(t,e,a,r),Ro(t)}function ln(t,a,r){if(a=a.updateQueue,a!==null&&(a=a.shared,(r&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,Sh(t,r)}}function N2(t,a){var r=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,r===e)){var i=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var o={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};n===null?i=n=o:n=n.next=o,r=r.next}while(r!==null);n===null?i=n=a:n=n.next=a}else i=n=a;r={baseState:e.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=a:t.next=a,r.lastBaseUpdate=a}var C1=!1;function dn(){if(C1){var t=ti;if(t!==null)throw t}}function cn(t,a,r,e){C1=!1;var i=t.updateQueue;br=!1;var n=i.firstBaseUpdate,o=i.lastBaseUpdate,d=i.shared.pending;if(d!==null){i.shared.pending=null;var h=d,g=h.next;h.next=null,o===null?n=g:o.next=g,o=h;var f=t.alternate;f!==null&&(f=f.updateQueue,d=f.lastBaseUpdate,d!==o&&(d===null?f.firstBaseUpdate=g:d.next=g,f.lastBaseUpdate=h))}if(n!==null){var k=i.baseState;o=0,f=g=h=null,d=n;do{var p=d.lane&-536870913,x=p!==d.lane;if(x?(X&p)===p:(e&p)===p){p!==0&&p===li&&(C1=!0),f!==null&&(f=f.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var w=t,b=d;p=a;var z=r;switch(b.tag){case 1:if(w=b.payload,typeof w=="function"){k=w.call(z,k,p);break t}k=w;break t;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,p=typeof w=="function"?w.call(z,k,p):w,p==null)break t;k=ct({},k,p);break t;case 2:br=!0}}p=d.callback,p!==null&&(t.flags|=64,x&&(t.flags|=8192),x=i.callbacks,x===null?i.callbacks=[p]:x.push(p))}else x={lane:p,tag:d.tag,payload:d.payload,callback:d.callback,next:null},f===null?(g=f=x,h=k):f=f.next=x,o|=p;if(d=d.next,d===null){if(d=i.shared.pending,d===null)break;x=d,d=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);f===null&&(h=k),i.baseState=h,i.firstBaseUpdate=g,i.lastBaseUpdate=f,n===null&&(i.shared.lanes=0),Kr|=o,t.lanes=o,t.memoizedState=k}}function gu(t,a){if(typeof t!="function")throw Error(y(191,t));t.call(a)}function pu(t,a){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)gu(r[t],a)}var di=Ja(null),Po=Ja(0);function w0(t,a){t=xr,it(Po,t),it(di,a),xr=t|a.baseLanes}function b1(){it(Po,xr),it(di,di.current)}function kd(){xr=Po.current,Dt(di),Dt(Po)}var wa=Ja(null),_a=null;function jr(t){var a=t.alternate;it(kt,kt.current&1),it(wa,t),_a===null&&(a===null||di.current!==null||a.memoizedState!==null)&&(_a=t)}function B1(t){it(kt,kt.current),it(wa,t),_a===null&&(_a=t)}function fu(t){t.tag===22?(it(kt,kt.current),it(wa,t),_a===null&&(_a=t)):Wr(t)}function Wr(){it(kt,kt.current),it(wa,wa.current)}function fa(t){Dt(wa),_a===t&&(_a=null),Dt(kt)}var kt=Ja(0);function tl(t){for(var a=t;a!==null;){if(a.tag===13){var r=a.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||X1(r)||Q1(r)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var fr=0,O=null,at=null,wt=null,al=!1,ri=!1,pe=!1,rl=0,wn=0,ei=null,R5=0;function pt(){throw Error(y(321))}function xd(t,a){if(a===null)return!1;for(var r=0;r<a.length&&r<t.length;r++)if(!ya(t[r],a[r]))return!1;return!0}function Ld(t,a,r,e,i,n){return fr=n,O=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,T.H=t===null||t.memoizedState===null?Qu:Sd,pe=!1,n=r(e,i),pe=!1,ri&&(n=ku(a,r,e,i)),vu(t),n}function vu(t){T.H=Cn;var a=at!==null&&at.next!==null;if(fr=0,wt=at=O=null,al=!1,wn=0,ei=null,a)throw Error(y(300));t===null||Bt||(t=t.dependencies,t!==null&&$o(t)&&(Bt=!0))}function ku(t,a,r,e){O=t;var i=0;do{if(ri&&(ei=null),wn=0,ri=!1,25<=i)throw Error(y(301));if(i+=1,wt=at=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}T.H=Ku,n=a(r,e)}while(ri);return n}function F5(){var t=T.H,a=t.useState()[0];return a=typeof a.then=="function"?En(a):a,t=t.useState()[0],(at!==null?at.memoizedState:null)!==t&&(O.flags|=1024),a}function Md(){var t=rl!==0;return rl=0,t}function md(t,a,r){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~r}function yd(t){if(al){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}al=!1}fr=0,wt=at=O=null,ri=!1,wn=rl=0,ei=null}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?O.memoizedState=wt=t:wt=wt.next=t,wt}function xt(){if(at===null){var t=O.alternate;t=t!==null?t.memoizedState:null}else t=at.next;var a=wt===null?O.memoizedState:wt.next;if(a!==null)wt=a,at=t;else{if(t===null)throw O.alternate===null?Error(y(467)):Error(y(310));at=t,t={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},wt===null?O.memoizedState=wt=t:wt=wt.next=t}return wt}function bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function En(t){var a=wn;return wn+=1,ei===null&&(ei=[]),t=hu(ei,t,a),a=O,(wt===null?a.memoizedState:wt.next)===null&&(a=a.alternate,T.H=a===null||a.memoizedState===null?Qu:Sd),t}function Bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return En(t);if(t.$$typeof===dr)return Qt(t)}throw Error(y(438,String(t)))}function wd(t){var a=null,r=O.updateQueue;if(r!==null&&(a=r.memoCache),a==null){var e=O.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(i){return i.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),r===null&&(r=bl(),O.updateQueue=r),r.memoCache=a,r=a.data[a.index],r===void 0)for(r=a.data[a.index]=Array(t),e=0;e<t;e++)r[e]=Tp;return a.index++,r}function vr(t,a){return typeof a=="function"?a(t):a}function _o(t){var a=xt();return Cd(a,at,t)}function Cd(t,a,r){var e=t.queue;if(e===null)throw Error(y(311));e.lastRenderedReducer=r;var i=t.baseQueue,n=e.pending;if(n!==null){if(i!==null){var o=i.next;i.next=n.next,n.next=o}a.baseQueue=i=n,e.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{a=i.next;var d=o=null,h=null,g=a,f=!1;do{var k=g.lane&-536870913;if(k!==g.lane?(X&k)===k:(fr&k)===k){var p=g.revertLane;if(p===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),k===li&&(f=!0);else if((fr&p)===p){g=g.next,p===li&&(f=!0);continue}else k={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},h===null?(d=h=k,o=n):h=h.next=k,O.lanes|=p,Kr|=p;k=g.action,pe&&r(n,k),n=g.hasEagerState?g.eagerState:r(n,k)}else p={lane:k,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},h===null?(d=h=p,o=n):h=h.next=p,O.lanes|=k,Kr|=k;g=g.next}while(g!==null&&g!==a);if(h===null?o=n:h.next=d,!ya(n,t.memoizedState)&&(Bt=!0,f&&(r=ti,r!==null)))throw r;t.memoizedState=n,t.baseState=o,t.baseQueue=h,e.lastRenderedState=n}return i===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function E2(t){var a=xt(),r=a.queue;if(r===null)throw Error(y(311));r.lastRenderedReducer=t;var e=r.dispatch,i=r.pending,n=a.memoizedState;if(i!==null){r.pending=null;var o=i=i.next;do n=t(n,o.action),o=o.next;while(o!==i);ya(n,a.memoizedState)||(Bt=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),r.lastRenderedState=n}return[n,e]}function xu(t,a,r){var e=O,i=xt(),n=J;if(n){if(r===void 0)throw Error(y(407));r=r()}else r=a();var o=!ya((at||i).memoizedState,r);if(o&&(i.memoizedState=r,Bt=!0),i=i.queue,bd(mu.bind(null,e,i,t),[t]),i.getSnapshot!==a||o||wt!==null&&wt.memoizedState.tag&1){if(e.flags|=2048,ci(9,{destroy:void 0},Mu.bind(null,e,i,r,a),null),rt===null)throw Error(y(349));n||(fr&127)!==0||Lu(e,a,r)}return r}function Lu(t,a,r){t.flags|=16384,t={getSnapshot:a,value:r},a=O.updateQueue,a===null?(a=bl(),O.updateQueue=a,a.stores=[t]):(r=a.stores,r===null?a.stores=[t]:r.push(t))}function Mu(t,a,r,e){a.value=r,a.getSnapshot=e,yu(a)&&wu(t)}function mu(t,a,r){return r(function(){yu(a)&&wu(t)})}function yu(t){var a=t.getSnapshot;t=t.value;try{var r=a();return!ya(t,r)}catch{return!0}}function wu(t){var a=Le(t,2);a!==null&&la(a,t,2)}function j1(t){var a=It();if(typeof t=="function"){var r=t;if(t=r(),pe){Sr(!0);try{r()}finally{Sr(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:t},a}function Cu(t,a,r,e){return t.baseState=r,Cd(t,at,typeof e=="function"?e:vr)}function $5(t,a,r,e,i){if(Wl(t))throw Error(y(485));if(t=a.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){n.listeners.push(o)}};T.T!==null?r(!0):n.isTransition=!1,e(n),r=a.pending,r===null?(n.next=a.pending=n,bu(a,n)):(n.next=r.next,a.pending=r.next=n)}}function bu(t,a){var r=a.action,e=a.payload,i=t.state;if(a.isTransition){var n=T.T,o={};T.T=o;try{var d=r(i,e),h=T.S;h!==null&&h(o,d),C0(t,a,d)}catch(g){W1(t,a,g)}finally{n!==null&&o.types!==null&&(n.types=o.types),T.T=n}}else try{n=r(i,e),C0(t,a,n)}catch(g){W1(t,a,g)}}function C0(t,a,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(e){b0(t,a,e)},function(e){return W1(t,a,e)}):b0(t,a,r)}function b0(t,a,r){a.status="fulfilled",a.value=r,Bu(a),t.state=r,a=t.pending,a!==null&&(r=a.next,r===a?t.pending=null:(r=r.next,a.next=r,bu(t,r)))}function W1(t,a,r){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=r,Bu(a),a=a.next;while(a!==e)}t.action=null}function Bu(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function ju(t,a){return a}function B0(t,a){if(J){var r=rt.formState;if(r!==null){t:{var e=O;if(J){if(dt){a:{for(var i=dt,n=za;i.nodeType!==8;){if(!n){i=null;break a}if(i=Ta(i.nextSibling),i===null){i=null;break a}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){dt=Ta(i.nextSibling),e=i.data==="F!";break t}}Xr(e)}e=!1}e&&(a=r[0])}}return r=It(),r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ju,lastRenderedState:a},r.queue=e,r=Gu.bind(null,O,e),e.dispatch=r,e=j1(!1),n=Hd.bind(null,O,!1,e.queue),e=It(),i={state:a,dispatch:null,action:t,pending:null},e.queue=i,r=$5.bind(null,O,i,n,r),i.dispatch=r,e.memoizedState=t,[a,r,!1]}function j0(t){var a=xt();return Wu(a,at,t)}function Wu(t,a,r){if(a=Cd(t,a,ju)[0],t=_o(vr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=En(a)}catch(o){throw o===xi?Cl:o}else e=a;a=xt();var i=a.queue,n=i.dispatch;return r!==a.memoizedState&&(O.flags|=2048,ci(9,{destroy:void 0},I5.bind(null,i,r),null)),[e,n,t]}function I5(t,a){t.action=a}function W0(t){var a=xt(),r=at;if(r!==null)return Wu(a,r,t);xt(),a=a.memoizedState,r=xt();var e=r.queue.dispatch;return r.memoizedState=t,[a,e,!1]}function ci(t,a,r,e){return t={tag:t,create:r,deps:e,inst:a,next:null},a=O.updateQueue,a===null&&(a=bl(),O.updateQueue=a),r=a.lastEffect,r===null?a.lastEffect=t.next=t:(e=r.next,r.next=t,t.next=e,a.lastEffect=t),t}function Hu(){return xt().memoizedState}function To(t,a,r,e){var i=It();O.flags|=t,i.memoizedState=ci(1|a,{destroy:void 0},r,e===void 0?null:e)}function jl(t,a,r,e){var i=xt();e=e===void 0?null:e;var n=i.memoizedState.inst;at!==null&&e!==null&&xd(e,at.memoizedState.deps)?i.memoizedState=ci(a,n,r,e):(O.flags|=t,i.memoizedState=ci(1|a,n,r,e))}function H0(t,a){To(8390656,8,t,a)}function bd(t,a){jl(2048,8,t,a)}function P5(t){O.flags|=4;var a=O.updateQueue;if(a===null)a=bl(),O.updateQueue=a,a.events=[t];else{var r=a.events;r===null?a.events=[t]:r.push(t)}}function Su(t){var a=xt().memoizedState;return P5({ref:a,nextImpl:t}),function(){if((F&2)!==0)throw Error(y(440));return a.impl.apply(void 0,arguments)}}function Au(t,a){return jl(4,2,t,a)}function Vu(t,a){return jl(4,4,t,a)}function zu(t,a){if(typeof a=="function"){t=t();var r=a(t);return function(){typeof r=="function"?r():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function _u(t,a,r){r=r!=null?r.concat([t]):null,jl(4,4,zu.bind(null,a,t),r)}function Bd(){}function Tu(t,a){var r=xt();a=a===void 0?null:a;var e=r.memoizedState;return a!==null&&xd(a,e[1])?e[0]:(r.memoizedState=[t,a],t)}function Nu(t,a){var r=xt();a=a===void 0?null:a;var e=r.memoizedState;if(a!==null&&xd(a,e[1]))return e[0];if(e=t(),pe){Sr(!0);try{t()}finally{Sr(!1)}}return r.memoizedState=[e,a],e}function jd(t,a,r){return r===void 0||(fr&1073741824)!==0&&(X&261930)===0?t.memoizedState=a:(t.memoizedState=r,t=Cs(),O.lanes|=t,Kr|=t,r)}function Eu(t,a,r,e){return ya(r,a)?r:di.current!==null?(t=jd(t,r,e),ya(t,a)||(Bt=!0),t):(fr&42)===0||(fr&1073741824)!==0&&(X&261930)===0?(Bt=!0,t.memoizedState=r):(t=Cs(),O.lanes|=t,Kr|=t,a)}function Du(t,a,r,e,i){var n=$.p;$.p=n!==0&&8>n?n:8;var o=T.T,d={};T.T=d,Hd(t,!1,a,r);try{var h=i(),g=T.S;if(g!==null&&g(d,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var f=J5(h,e);hn(t,a,f,ma(t))}else hn(t,a,e,ma(t))}catch(k){hn(t,a,{then:function(){},status:"rejected",reason:k},ma())}finally{$.p=n,o!==null&&d.types!==null&&(o.types=d.types),T.T=o}}function tf(){}function H1(t,a,r,e){if(t.tag!==5)throw Error(y(476));var i=Ou(t).queue;Du(t,i,a,oe,r===null?tf:function(){return Uu(t),r(e)})}function Ou(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:oe,baseState:oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:oe},next:null};var r={};return a.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:r},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Uu(t){var a=Ou(t);a.next===null&&(a=t.alternate.memoizedState),hn(t,a.next.queue,{},ma())}function Wd(){return Qt(jn)}function Zu(){return xt().memoizedState}function qu(){return xt().memoizedState}function af(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var r=ma();t=Er(r);var e=Dr(a,t,r);e!==null&&(la(e,a,r),ln(e,a,r)),a={cache:gd()},t.payload=a;return}a=a.return}}function rf(t,a,r){var e=ma();r={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Wl(t)?Yu(a,r):(r=cd(t,a,r,e),r!==null&&(la(r,t,e),Xu(r,a,e)))}function Gu(t,a,r){var e=ma();hn(t,a,r,e)}function hn(t,a,r,e){var i={lane:e,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wl(t))Yu(a,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var o=a.lastRenderedState,d=n(o,r);if(i.hasEagerState=!0,i.eagerState=d,ya(d,o))return wl(t,a,i,0),rt===null&&yl(),!1}catch{}if(r=cd(t,a,i,e),r!==null)return la(r,t,e),Xu(r,a,e),!0}return!1}function Hd(t,a,r,e){if(e={lane:2,revertLane:Dd(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Wl(t)){if(a)throw Error(y(479))}else a=cd(t,r,e,2),a!==null&&la(a,t,2)}function Wl(t){var a=t.alternate;return t===O||a!==null&&a===O}function Yu(t,a){ri=al=!0;var r=t.pending;r===null?a.next=a:(a.next=r.next,r.next=a),t.pending=a}function Xu(t,a,r){if((r&4194048)!==0){var e=a.lanes;e&=t.pendingLanes,r|=e,a.lanes=r,Sh(t,r)}}var Cn={readContext:Qt,use:Bl,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useLayoutEffect:pt,useInsertionEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useSyncExternalStore:pt,useId:pt,useHostTransitionStatus:pt,useFormState:pt,useActionState:pt,useOptimistic:pt,useMemoCache:pt,useCacheRefresh:pt};Cn.useEffectEvent=pt;var Qu={readContext:Qt,use:Bl,useCallback:function(t,a){return It().memoizedState=[t,a===void 0?null:a],t},useContext:Qt,useEffect:H0,useImperativeHandle:function(t,a,r){r=r!=null?r.concat([t]):null,To(4194308,4,zu.bind(null,a,t),r)},useLayoutEffect:function(t,a){return To(4194308,4,t,a)},useInsertionEffect:function(t,a){To(4,2,t,a)},useMemo:function(t,a){var r=It();a=a===void 0?null:a;var e=t();if(pe){Sr(!0);try{t()}finally{Sr(!1)}}return r.memoizedState=[e,a],e},useReducer:function(t,a,r){var e=It();if(r!==void 0){var i=r(a);if(pe){Sr(!0);try{r(a)}finally{Sr(!1)}}}else i=a;return e.memoizedState=e.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},e.queue=t,t=t.dispatch=rf.bind(null,O,t),[e.memoizedState,t]},useRef:function(t){var a=It();return t={current:t},a.memoizedState=t},useState:function(t){t=j1(t);var a=t.queue,r=Gu.bind(null,O,a);return a.dispatch=r,[t.memoizedState,r]},useDebugValue:Bd,useDeferredValue:function(t,a){var r=It();return jd(r,t,a)},useTransition:function(){var t=j1(!1);return t=Du.bind(null,O,t.queue,!0,!1),It().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,r){var e=O,i=It();if(J){if(r===void 0)throw Error(y(407));r=r()}else{if(r=a(),rt===null)throw Error(y(349));(X&127)!==0||Lu(e,a,r)}i.memoizedState=r;var n={value:r,getSnapshot:a};return i.queue=n,H0(mu.bind(null,e,n,t),[t]),e.flags|=2048,ci(9,{destroy:void 0},Mu.bind(null,e,n,r,a),null),r},useId:function(){var t=It(),a=rt.identifierPrefix;if(J){var r=Xa,e=Ya;r=(e&~(1<<32-Ma(e)-1)).toString(32)+r,a="_"+a+"R_"+r,r=rl++,0<r&&(a+="H"+r.toString(32)),a+="_"}else r=R5++,a="_"+a+"r_"+r.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:Wd,useFormState:B0,useActionState:B0,useOptimistic:function(t){var a=It();a.memoizedState=a.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=r,a=Hd.bind(null,O,!0,r),r.dispatch=a,[t,a]},useMemoCache:wd,useCacheRefresh:function(){return It().memoizedState=af.bind(null,O)},useEffectEvent:function(t){var a=It(),r={impl:t};return a.memoizedState=r,function(){if((F&2)!==0)throw Error(y(440));return r.impl.apply(void 0,arguments)}}},Sd={readContext:Qt,use:Bl,useCallback:Tu,useContext:Qt,useEffect:bd,useImperativeHandle:_u,useInsertionEffect:Au,useLayoutEffect:Vu,useMemo:Nu,useReducer:_o,useRef:Hu,useState:function(){return _o(vr)},useDebugValue:Bd,useDeferredValue:function(t,a){var r=xt();return Eu(r,at.memoizedState,t,a)},useTransition:function(){var t=_o(vr)[0],a=xt().memoizedState;return[typeof t=="boolean"?t:En(t),a]},useSyncExternalStore:xu,useId:Zu,useHostTransitionStatus:Wd,useFormState:j0,useActionState:j0,useOptimistic:function(t,a){var r=xt();return Cu(r,at,t,a)},useMemoCache:wd,useCacheRefresh:qu};Sd.useEffectEvent=Su;var Ku={readContext:Qt,use:Bl,useCallback:Tu,useContext:Qt,useEffect:bd,useImperativeHandle:_u,useInsertionEffect:Au,useLayoutEffect:Vu,useMemo:Nu,useReducer:E2,useRef:Hu,useState:function(){return E2(vr)},useDebugValue:Bd,useDeferredValue:function(t,a){var r=xt();return at===null?jd(r,t,a):Eu(r,at.memoizedState,t,a)},useTransition:function(){var t=E2(vr)[0],a=xt().memoizedState;return[typeof t=="boolean"?t:En(t),a]},useSyncExternalStore:xu,useId:Zu,useHostTransitionStatus:Wd,useFormState:W0,useActionState:W0,useOptimistic:function(t,a){var r=xt();return at!==null?Cu(r,at,t,a):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:wd,useCacheRefresh:qu};Ku.useEffectEvent=Su;function D2(t,a,r,e){a=t.memoizedState,r=r(e,a),r=r==null?a:ct({},a,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var S1={enqueueSetState:function(t,a,r){t=t._reactInternals;var e=ma(),i=Er(e);i.payload=a,r!=null&&(i.callback=r),a=Dr(t,i,e),a!==null&&(la(a,t,e),ln(a,t,e))},enqueueReplaceState:function(t,a,r){t=t._reactInternals;var e=ma(),i=Er(e);i.tag=1,i.payload=a,r!=null&&(i.callback=r),a=Dr(t,i,e),a!==null&&(la(a,t,e),ln(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var r=ma(),e=Er(r);e.tag=2,a!=null&&(e.callback=a),a=Dr(t,e,r),a!==null&&(la(a,t,r),ln(a,t,r))}};function S0(t,a,r,e,i,n,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,o):a.prototype&&a.prototype.isPureReactComponent?!Ln(r,e)||!Ln(i,n):!0}function A0(t,a,r,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(r,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(r,e),a.state!==t&&S1.enqueueReplaceState(a,a.state,null)}function fe(t,a){var r=a;if("ref"in a){r={};for(var e in a)e!=="ref"&&(r[e]=a[e])}if(t=t.defaultProps){r===a&&(r=ct({},r));for(var i in t)r[i]===void 0&&(r[i]=t[i])}return r}function Ju(t){Jo(t)}function Ru(t){console.error(t)}function Fu(t){Jo(t)}function el(t,a){try{var r=t.onUncaughtError;r(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function V0(t,a,r){try{var e=t.onCaughtError;e(r.value,{componentStack:r.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function A1(t,a,r){return r=Er(r),r.tag=3,r.payload={element:null},r.callback=function(){el(t,a)},r}function $u(t){return t=Er(t),t.tag=3,t}function Iu(t,a,r,e){var i=r.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;t.payload=function(){return i(n)},t.callback=function(){V0(a,r,e)}}var o=r.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){V0(a,r,e),typeof i!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var d=e.stack;this.componentDidCatch(e.value,{componentStack:d!==null?d:""})})}function ef(t,a,r,e,i){if(r.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=r.alternate,a!==null&&ki(a,r,i,!0),r=wa.current,r!==null){switch(r.tag){case 31:case 13:return _a===null?dl():r.alternate===null&&ft===0&&(ft=3),r.flags&=-257,r.flags|=65536,r.lanes=i,e===Io?r.flags|=16384:(a=r.updateQueue,a===null?r.updateQueue=new Set([e]):a.add(e),R2(t,e,i)),!1;case 22:return r.flags|=65536,e===Io?r.flags|=16384:(a=r.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},r.updateQueue=a):(r=a.retryQueue,r===null?a.retryQueue=new Set([e]):r.add(e)),R2(t,e,i)),!1}throw Error(y(435,r.tag))}return R2(t,e,i),dl(),!1}if(J)return a=wa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=i,e!==x1&&(t=Error(y(422),{cause:e}),mn(Va(t,r)))):(e!==x1&&(a=Error(y(423),{cause:e}),mn(Va(a,r))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,e=Va(e,r),i=A1(t.stateNode,e,i),N2(t,i),ft!==4&&(ft=2)),!1;var n=Error(y(520),{cause:e});if(n=Va(n,r),gn===null?gn=[n]:gn.push(n),ft!==4&&(ft=2),a===null)return!0;e=Va(e,r),r=a;do{switch(r.tag){case 3:return r.flags|=65536,t=i&-i,r.lanes|=t,t=A1(r.stateNode,e,t),N2(r,t),!1;case 1:if(a=r.type,n=r.stateNode,(r.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(Or===null||!Or.has(n))))return r.flags|=65536,i&=-i,r.lanes|=i,i=$u(i),Iu(i,t,r,e),N2(r,i),!1}r=r.return}while(r!==null);return!1}var Ad=Error(y(461)),Bt=!1;function Gt(t,a,r,e){a.child=t===null?su(a,null,r,e):ge(a,t.child,r,e)}function z0(t,a,r,e,i){r=r.render;var n=a.ref;if("ref"in e){var o={};for(var d in e)d!=="ref"&&(o[d]=e[d])}else o=e;return se(a),e=Ld(t,a,r,o,n,i),d=Md(),t!==null&&!Bt?(md(t,a,i),kr(t,a,i)):(J&&d&&ud(a),a.flags|=1,Gt(t,a,e,i),a.child)}function _0(t,a,r,e,i){if(t===null){var n=r.type;return typeof n=="function"&&!hd(n)&&n.defaultProps===void 0&&r.compare===null?(a.tag=15,a.type=n,Pu(t,a,n,e,i)):(t=Vo(r.type,null,e,a,a.mode,i),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!Vd(t,i)){var o=n.memoizedProps;if(r=r.compare,r=r!==null?r:Ln,r(o,e)&&t.ref===a.ref)return kr(t,a,i)}return a.flags|=1,t=ur(n,e),t.ref=a.ref,t.return=a,a.child=t}function Pu(t,a,r,e,i){if(t!==null){var n=t.memoizedProps;if(Ln(n,e)&&t.ref===a.ref)if(Bt=!1,a.pendingProps=e=n,Vd(t,i))(t.flags&131072)!==0&&(Bt=!0);else return a.lanes=t.lanes,kr(t,a,i)}return V1(t,a,r,e,i)}function ts(t,a,r,e){var i=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((a.flags&128)!==0){if(n=n!==null?n.baseLanes|r:r,t!==null){for(e=a.child=t.child,i=0;e!==null;)i=i|e.lanes|e.childLanes,e=e.sibling;e=i&~n}else e=0,a.child=null;return T0(t,a,n,r,e)}if((r&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&zo(a,n!==null?n.cachePool:null),n!==null?w0(a,n):b1(),fu(a);else return e=a.lanes=536870912,T0(t,a,n!==null?n.baseLanes|r:r,r,e)}else n!==null?(zo(a,n.cachePool),w0(a,n),Wr(a),a.memoizedState=null):(t!==null&&zo(a,null),b1(),Wr(a));return Gt(t,a,i,r),a.child}function tn(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function T0(t,a,r,e,i){var n=pd();return n=n===null?null:{parent:bt._currentValue,pool:n},a.memoizedState={baseLanes:r,cachePool:n},t!==null&&zo(a,null),b1(),fu(a),t!==null&&ki(t,a,e,!0),a.childLanes=i,null}function No(t,a){return a=il({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function N0(t,a,r){return ge(a,t.child,null,r),t=No(a,a.pendingProps),t.flags|=2,fa(a),a.memoizedState=null,t}function nf(t,a,r){var e=a.pendingProps,i=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(J){if(e.mode==="hidden")return t=No(a,e),a.lanes=536870912,tn(null,t);if(B1(a),(t=dt)?(t=Qs(t,za),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Yr!==null?{id:Ya,overflow:Xa}:null,retryLane:536870912,hydrationErrors:null},r=nu(t),r.return=a,a.child=r,Xt=a,dt=null)):t=null,t===null)throw Xr(a);return a.lanes=536870912,null}return No(a,e)}var n=t.memoizedState;if(n!==null){var o=n.dehydrated;if(B1(a),i)if(a.flags&256)a.flags&=-257,a=N0(t,a,r);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(y(558));else if(Bt||ki(t,a,r,!1),i=(r&t.childLanes)!==0,Bt||i){if(e=rt,e!==null&&(o=Ah(e,r),o!==0&&o!==n.retryLane))throw n.retryLane=o,Le(t,o),la(e,t,o),Ad;dl(),a=N0(t,a,r)}else t=n.treeContext,dt=Ta(o.nextSibling),Xt=a,J=!0,Nr=null,za=!1,t!==null&&lu(a,t),a=No(a,e),a.flags|=4096;return a}return t=ur(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function Eo(t,a){var r=a.ref;if(r===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(y(284));(t===null||t.ref!==r)&&(a.flags|=4194816)}}function V1(t,a,r,e,i){return se(a),r=Ld(t,a,r,e,void 0,i),e=Md(),t!==null&&!Bt?(md(t,a,i),kr(t,a,i)):(J&&e&&ud(a),a.flags|=1,Gt(t,a,r,i),a.child)}function E0(t,a,r,e,i,n){return se(a),a.updateQueue=null,r=ku(a,e,r,i),vu(t),e=Md(),t!==null&&!Bt?(md(t,a,n),kr(t,a,n)):(J&&e&&ud(a),a.flags|=1,Gt(t,a,r,n),a.child)}function D0(t,a,r,e,i){if(se(a),a.stateNode===null){var n=Ke,o=r.contextType;typeof o=="object"&&o!==null&&(n=Qt(o)),n=new r(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=S1,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},vd(a),o=r.contextType,n.context=typeof o=="object"&&o!==null?Qt(o):Ke,n.state=a.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(D2(a,r,o,e),n.state=a.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(o=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),o!==n.state&&S1.enqueueReplaceState(n,n.state,null),cn(a,e,n,i),dn(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var d=a.memoizedProps,h=fe(r,d);n.props=h;var g=n.context,f=r.contextType;o=Ke,typeof f=="object"&&f!==null&&(o=Qt(f));var k=r.getDerivedStateFromProps;f=typeof k=="function"||typeof n.getSnapshotBeforeUpdate=="function",d=a.pendingProps!==d,f||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(d||g!==o)&&A0(a,n,e,o),br=!1;var p=a.memoizedState;n.state=p,cn(a,e,n,i),dn(),g=a.memoizedState,d||p!==g||br?(typeof k=="function"&&(D2(a,r,k,e),g=a.memoizedState),(h=br||S0(a,r,h,e,p,g,o))?(f||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=g),n.props=e,n.state=g,n.context=o,e=h):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,w1(t,a),o=a.memoizedProps,f=fe(r,o),n.props=f,k=a.pendingProps,p=n.context,g=r.contextType,h=Ke,typeof g=="object"&&g!==null&&(h=Qt(g)),d=r.getDerivedStateFromProps,(g=typeof d=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(o!==k||p!==h)&&A0(a,n,e,h),br=!1,p=a.memoizedState,n.state=p,cn(a,e,n,i),dn();var x=a.memoizedState;o!==k||p!==x||br||t!==null&&t.dependencies!==null&&$o(t.dependencies)?(typeof d=="function"&&(D2(a,r,d,e),x=a.memoizedState),(f=br||S0(a,r,f,e,p,x,h)||t!==null&&t.dependencies!==null&&$o(t.dependencies))?(g||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,x,h),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,x,h)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=x),n.props=e,n.state=x,n.context=h,e=f):(typeof n.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,Eo(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,r=e&&typeof r.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=ge(a,t.child,null,i),a.child=ge(a,null,r,i)):Gt(t,a,r,i),a.memoizedState=n.state,t=a.child):t=kr(t,a,i),t}function O0(t,a,r,e){return ue(),a.flags|=256,Gt(t,a,r,e),a.child}var O2={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function U2(t){return{baseLanes:t,cachePool:cu()}}function Z2(t,a,r){return t=t!==null?t.childLanes&~r:0,a&&(t|=ka),t}function as(t,a,r){var e=a.pendingProps,i=!1,n=(a.flags&128)!==0,o;if((o=n)||(o=t!==null&&t.memoizedState===null?!1:(kt.current&2)!==0),o&&(i=!0,a.flags&=-129),o=(a.flags&32)!==0,a.flags&=-33,t===null){if(J){if(i?jr(a):Wr(a),(t=dt)?(t=Qs(t,za),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:Yr!==null?{id:Ya,overflow:Xa}:null,retryLane:536870912,hydrationErrors:null},r=nu(t),r.return=a,a.child=r,Xt=a,dt=null)):t=null,t===null)throw Xr(a);return Q1(t)?a.lanes=32:a.lanes=536870912,null}var d=e.children;return e=e.fallback,i?(Wr(a),i=a.mode,d=il({mode:"hidden",children:d},i),e=le(e,i,r,null),d.return=a,e.return=a,d.sibling=e,a.child=d,e=a.child,e.memoizedState=U2(r),e.childLanes=Z2(t,o,r),a.memoizedState=O2,tn(null,e)):(jr(a),z1(a,d))}var h=t.memoizedState;if(h!==null&&(d=h.dehydrated,d!==null)){if(n)a.flags&256?(jr(a),a.flags&=-257,a=q2(t,a,r)):a.memoizedState!==null?(Wr(a),a.child=t.child,a.flags|=128,a=null):(Wr(a),d=e.fallback,i=a.mode,e=il({mode:"visible",children:e.children},i),d=le(d,i,r,null),d.flags|=2,e.return=a,d.return=a,e.sibling=d,a.child=e,ge(a,t.child,null,r),e=a.child,e.memoizedState=U2(r),e.childLanes=Z2(t,o,r),a.memoizedState=O2,a=tn(null,e));else if(jr(a),Q1(d)){if(o=d.nextSibling&&d.nextSibling.dataset,o)var g=o.dgst;o=g,e=Error(y(419)),e.stack="",e.digest=o,mn({value:e,source:null,stack:null}),a=q2(t,a,r)}else if(Bt||ki(t,a,r,!1),o=(r&t.childLanes)!==0,Bt||o){if(o=rt,o!==null&&(e=Ah(o,r),e!==0&&e!==h.retryLane))throw h.retryLane=e,Le(t,e),la(o,t,e),Ad;X1(d)||dl(),a=q2(t,a,r)}else X1(d)?(a.flags|=192,a.child=t.child,a=null):(t=h.treeContext,dt=Ta(d.nextSibling),Xt=a,J=!0,Nr=null,za=!1,t!==null&&lu(a,t),a=z1(a,e.children),a.flags|=4096);return a}return i?(Wr(a),d=e.fallback,i=a.mode,h=t.child,g=h.sibling,e=ur(h,{mode:"hidden",children:e.children}),e.subtreeFlags=h.subtreeFlags&65011712,g!==null?d=ur(g,d):(d=le(d,i,r,null),d.flags|=2),d.return=a,e.return=a,e.sibling=d,a.child=e,tn(null,e),e=a.child,d=t.child.memoizedState,d===null?d=U2(r):(i=d.cachePool,i!==null?(h=bt._currentValue,i=i.parent!==h?{parent:h,pool:h}:i):i=cu(),d={baseLanes:d.baseLanes|r,cachePool:i}),e.memoizedState=d,e.childLanes=Z2(t,o,r),a.memoizedState=O2,tn(t.child,e)):(jr(a),r=t.child,t=r.sibling,r=ur(r,{mode:"visible",children:e.children}),r.return=a,r.sibling=null,t!==null&&(o=a.deletions,o===null?(a.deletions=[t],a.flags|=16):o.push(t)),a.child=r,a.memoizedState=null,r)}function z1(t,a){return a=il({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function il(t,a){return t=va(22,t,null,a),t.lanes=0,t}function q2(t,a,r){return ge(a,t.child,null,r),t=z1(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function U0(t,a,r){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),M1(t.return,a,r)}function G2(t,a,r,e,i,n){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:r,tailMode:i,treeForkCount:n}:(o.isBackwards=a,o.rendering=null,o.renderingStartTime=0,o.last=e,o.tail=r,o.tailMode=i,o.treeForkCount=n)}function rs(t,a,r){var e=a.pendingProps,i=e.revealOrder,n=e.tail;e=e.children;var o=kt.current,d=(o&2)!==0;if(d?(o=o&1|2,a.flags|=128):o&=1,it(kt,o),Gt(t,a,e,r),e=J?Mn:0,!d&&t!==null&&(t.flags&128)!==0)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&U0(t,r,a);else if(t.tag===19)U0(t,r,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(r=a.child,i=null;r!==null;)t=r.alternate,t!==null&&tl(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=a.child,a.child=null):(i=r.sibling,r.sibling=null),G2(a,!1,i,r,n,e);break;case"backwards":case"unstable_legacy-backwards":for(r=null,i=a.child,a.child=null;i!==null;){if(t=i.alternate,t!==null&&tl(t)===null){a.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}G2(a,!0,r,null,n,e);break;case"together":G2(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function kr(t,a,r){if(t!==null&&(a.dependencies=t.dependencies),Kr|=a.lanes,(r&a.childLanes)===0)if(t!==null){if(ki(t,a,r,!1),(r&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(y(153));if(a.child!==null){for(t=a.child,r=ur(t,t.pendingProps),a.child=r,r.return=a;t.sibling!==null;)t=t.sibling,r=r.sibling=ur(t,t.pendingProps),r.return=a;r.sibling=null}return a.child}function Vd(t,a){return(t.lanes&a)!==0?!0:(t=t.dependencies,!!(t!==null&&$o(t)))}function of(t,a,r){switch(a.tag){case 3:Yo(a,a.stateNode.containerInfo),Br(a,bt,t.memoizedState.cache),ue();break;case 27:case 5:l1(a);break;case 4:Yo(a,a.stateNode.containerInfo);break;case 10:Br(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,B1(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(jr(a),a.flags|=128,null):(r&a.child.childLanes)!==0?as(t,a,r):(jr(a),t=kr(t,a,r),t!==null?t.sibling:null);jr(a);break;case 19:var i=(t.flags&128)!==0;if(e=(r&a.childLanes)!==0,e||(ki(t,a,r,!1),e=(r&a.childLanes)!==0),i){if(e)return rs(t,a,r);a.flags|=128}if(i=a.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),it(kt,kt.current),e)break;return null;case 22:return a.lanes=0,ts(t,a,r,a.pendingProps);case 24:Br(a,bt,t.memoizedState.cache)}return kr(t,a,r)}function es(t,a,r){if(t!==null)if(t.memoizedProps!==a.pendingProps)Bt=!0;else{if(!Vd(t,r)&&(a.flags&128)===0)return Bt=!1,of(t,a,r);Bt=(t.flags&131072)!==0}else Bt=!1,J&&(a.flags&1048576)!==0&&ou(a,Mn,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=ie(a.elementType),a.type=t,typeof t=="function")hd(t)?(e=fe(t,e),a.tag=1,a=D0(null,a,t,e,r)):(a.tag=0,a=V1(null,a,t,e,r));else{if(t!=null){var i=t.$$typeof;if(i===F1){a.tag=11,a=z0(null,a,t,e,r);break t}else if(i===$1){a.tag=14,a=_0(null,a,t,e,r);break t}}throw a=n1(t)||t,Error(y(306,a,""))}}return a;case 0:return V1(t,a,a.type,a.pendingProps,r);case 1:return e=a.type,i=fe(e,a.pendingProps),D0(t,a,e,i,r);case 3:t:{if(Yo(a,a.stateNode.containerInfo),t===null)throw Error(y(387));e=a.pendingProps;var n=a.memoizedState;i=n.element,w1(t,a),cn(a,e,null,r);var o=a.memoizedState;if(e=o.cache,Br(a,bt,e),e!==n.cache&&m1(a,[bt],r,!0),dn(),e=o.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:o.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=O0(t,a,e,r);break t}else if(e!==i){i=Va(Error(y(424)),a),mn(i),a=O0(t,a,e,r);break t}else for(t=a.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,dt=Ta(t.firstChild),Xt=a,J=!0,Nr=null,za=!0,r=su(a,null,e,r),a.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ue(),e===i){a=kr(t,a,r);break t}Gt(t,a,e,r)}a=a.child}return a;case 26:return Eo(t,a),t===null?(r=dh(a.type,null,a.pendingProps,null))?a.memoizedState=r:J||(r=a.type,t=a.pendingProps,e=sl(Tr.current).createElement(r),e[Yt]=a,e[da]=t,Kt(e,r,t),Et(e),a.stateNode=e):a.memoizedState=dh(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return l1(a),t===null&&J&&(e=a.stateNode=Ks(a.type,a.pendingProps,Tr.current),Xt=a,za=!0,i=dt,Rr(a.type)?(K1=i,dt=Ta(e.firstChild)):dt=i),Gt(t,a,a.pendingProps.children,r),Eo(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&J&&((i=e=dt)&&(e=_f(e,a.type,a.pendingProps,za),e!==null?(a.stateNode=e,Xt=a,dt=Ta(e.firstChild),za=!1,i=!0):i=!1),i||Xr(a)),l1(a),i=a.type,n=a.pendingProps,o=t!==null?t.memoizedProps:null,e=n.children,G1(i,n)?e=null:o!==null&&G1(i,o)&&(a.flags|=32),a.memoizedState!==null&&(i=Ld(t,a,F5,null,null,r),jn._currentValue=i),Eo(t,a),Gt(t,a,e,r),a.child;case 6:return t===null&&J&&((t=r=dt)&&(r=Tf(r,a.pendingProps,za),r!==null?(a.stateNode=r,Xt=a,dt=null,t=!0):t=!1),t||Xr(a)),null;case 13:return as(t,a,r);case 4:return Yo(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=ge(a,null,e,r):Gt(t,a,e,r),a.child;case 11:return z0(t,a,a.type,a.pendingProps,r);case 7:return Gt(t,a,a.pendingProps,r),a.child;case 8:return Gt(t,a,a.pendingProps.children,r),a.child;case 12:return Gt(t,a,a.pendingProps.children,r),a.child;case 10:return e=a.pendingProps,Br(a,a.type,e.value),Gt(t,a,e.children,r),a.child;case 9:return i=a.type._context,e=a.pendingProps.children,se(a),i=Qt(i),e=e(i),a.flags|=1,Gt(t,a,e,r),a.child;case 14:return _0(t,a,a.type,a.pendingProps,r);case 15:return Pu(t,a,a.type,a.pendingProps,r);case 19:return rs(t,a,r);case 31:return nf(t,a,r);case 22:return ts(t,a,r,a.pendingProps);case 24:return se(a),e=Qt(bt),t===null?(i=pd(),i===null&&(i=rt,n=gd(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=r),i=n),a.memoizedState={parent:e,cache:i},vd(a),Br(a,bt,i)):((t.lanes&r)!==0&&(w1(t,a),cn(a,null,null,r),dn()),i=t.memoizedState,n=a.memoizedState,i.parent!==e?(i={parent:e,cache:e},a.memoizedState=i,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=i),Br(a,bt,e)):(e=n.cache,Br(a,bt,e),e!==i.cache&&m1(a,[bt],r,!0))),Gt(t,a,a.pendingProps.children,r),a.child;case 29:throw a.pendingProps}throw Error(y(156,a.tag))}function rr(t){t.flags|=4}function Y2(t,a,r,e,i){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(js())t.flags|=8192;else throw ce=Io,fd}else t.flags&=-16777217}function Z0(t,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Fs(a))if(js())t.flags|=8192;else throw ce=Io,fd}function mo(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?Wh():536870912,t.lanes|=a,hi|=a)}function Ki(t,a){if(!J)switch(t.tailMode){case"hidden":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var e=null;r!==null;)r.alternate!==null&&(e=r),r=r.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function lt(t){var a=t.alternate!==null&&t.alternate.child===t.child,r=0,e=0;if(a)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags&65011712,e|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,e|=i.subtreeFlags,e|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=e,t.childLanes=r,a}function lf(t,a,r){var e=a.pendingProps;switch(sd(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(a),null;case 1:return lt(a),null;case 3:return r=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),sr(bt),ii(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Te(a)?rr(a):t===null||t.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,T2())),lt(a),null;case 26:var i=a.type,n=a.memoizedState;return t===null?(rr(a),n!==null?(lt(a),Z0(a,n)):(lt(a),Y2(a,i,null,e,r))):n?n!==t.memoizedState?(rr(a),lt(a),Z0(a,n)):(lt(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&rr(a),lt(a),Y2(a,i,t,e,r)),null;case 27:if(Xo(a),r=Tr.current,i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&rr(a);else{if(!e){if(a.stateNode===null)throw Error(y(166));return lt(a),null}t=Ka.current,Te(a)?v0(a,t):(t=Ks(i,e,r),a.stateNode=t,rr(a))}return lt(a),null;case 5:if(Xo(a),i=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&rr(a);else{if(!e){if(a.stateNode===null)throw Error(y(166));return lt(a),null}if(n=Ka.current,Te(a))v0(a,n);else{var o=sl(Tr.current);switch(n){case 1:n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?o.createElement("select",{is:e.is}):o.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?o.createElement(i,{is:e.is}):o.createElement(i)}}n[Yt]=a,n[da]=e;t:for(o=a.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break t;for(;o.sibling===null;){if(o.return===null||o.return===a)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}a.stateNode=n;t:switch(Kt(n,i,e),i){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&rr(a)}}return lt(a),Y2(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,r),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&rr(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(y(166));if(t=Tr.current,Te(a)){if(t=a.stateNode,r=a.memoizedProps,e=null,i=Xt,i!==null)switch(i.tag){case 27:case 5:e=i.memoizedProps}t[Yt]=a,t=!!(t.nodeValue===r||e!==null&&e.suppressHydrationWarning===!0||Gs(t.nodeValue,r)),t||Xr(a,!0)}else t=sl(t).createTextNode(e),t[Yt]=a,a.stateNode=t}return lt(a),null;case 31:if(r=a.memoizedState,t===null||t.memoizedState!==null){if(e=Te(a),r!==null){if(t===null){if(!e)throw Error(y(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(557));t[Yt]=a}else ue(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;lt(a),t=!1}else r=T2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return a.flags&256?(fa(a),a):(fa(a),null);if((a.flags&128)!==0)throw Error(y(558))}return lt(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=Te(a),e!==null&&e.dehydrated!==null){if(t===null){if(!i)throw Error(y(318));if(i=a.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Yt]=a}else ue(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;lt(a),i=!1}else i=T2(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return a.flags&256?(fa(a),a):(fa(a),null)}return fa(a),(a.flags&128)!==0?(a.lanes=r,a):(r=e!==null,t=t!==null&&t.memoizedState!==null,r&&(e=a.child,i=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(i=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==i&&(e.flags|=2048)),r!==t&&r&&(a.child.flags|=8192),mo(a,a.updateQueue),lt(a),null);case 4:return ii(),t===null&&Od(a.stateNode.containerInfo),lt(a),null;case 10:return sr(a.type),lt(a),null;case 19:if(Dt(kt),e=a.memoizedState,e===null)return lt(a),null;if(i=(a.flags&128)!==0,n=e.rendering,n===null)if(i)Ki(e,!1);else{if(ft!==0||t!==null&&(t.flags&128)!==0)for(t=a.child;t!==null;){if(n=tl(t),n!==null){for(a.flags|=128,Ki(e,!1),t=n.updateQueue,a.updateQueue=t,mo(a,t),a.subtreeFlags=0,t=r,r=a.child;r!==null;)iu(r,t),r=r.sibling;return it(kt,kt.current&1|2),J&&or(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&xa()>ol&&(a.flags|=128,i=!0,Ki(e,!1),a.lanes=4194304)}else{if(!i)if(t=tl(n),t!==null){if(a.flags|=128,i=!0,t=t.updateQueue,a.updateQueue=t,mo(a,t),Ki(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!J)return lt(a),null}else 2*xa()-e.renderingStartTime>ol&&r!==536870912&&(a.flags|=128,i=!0,Ki(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=xa(),t.sibling=null,r=kt.current,it(kt,i?r&1|2:r&1),J&&or(a,e.treeForkCount),t):(lt(a),null);case 22:case 23:return fa(a),kd(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?(r&536870912)!==0&&(a.flags&128)===0&&(lt(a),a.subtreeFlags&6&&(a.flags|=8192)):lt(a),r=a.updateQueue,r!==null&&mo(a,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==r&&(a.flags|=2048),t!==null&&Dt(de),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),a.memoizedState.cache!==r&&(a.flags|=2048),sr(bt),lt(a),null;case 25:return null;case 30:return null}throw Error(y(156,a.tag))}function df(t,a){switch(sd(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return sr(bt),ii(),t=a.flags,(t&65536)!==0&&(t&128)===0?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return Xo(a),null;case 31:if(a.memoizedState!==null){if(fa(a),a.alternate===null)throw Error(y(340));ue()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(fa(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(y(340));ue()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return Dt(kt),null;case 4:return ii(),null;case 10:return sr(a.type),null;case 22:case 23:return fa(a),kd(),t!==null&&Dt(de),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return sr(bt),null;case 25:return null;default:return null}}function is(t,a){switch(sd(a),a.tag){case 3:sr(bt),ii();break;case 26:case 27:case 5:Xo(a);break;case 4:ii();break;case 31:a.memoizedState!==null&&fa(a);break;case 13:fa(a);break;case 19:Dt(kt);break;case 10:sr(a.type);break;case 22:case 23:fa(a),kd(),t!==null&&Dt(de);break;case 24:sr(bt)}}function Dn(t,a){try{var r=a.updateQueue,e=r!==null?r.lastEffect:null;if(e!==null){var i=e.next;r=i;do{if((r.tag&t)===t){e=void 0;var n=r.create,o=r.inst;e=n(),o.destroy=e}r=r.next}while(r!==i)}}catch(d){P(a,a.return,d)}}function Qr(t,a,r){try{var e=a.updateQueue,i=e!==null?e.lastEffect:null;if(i!==null){var n=i.next;e=n;do{if((e.tag&t)===t){var o=e.inst,d=o.destroy;if(d!==void 0){o.destroy=void 0,i=a;var h=r,g=d;try{g()}catch(f){P(i,h,f)}}}e=e.next}while(e!==n)}}catch(f){P(a,a.return,f)}}function ns(t){var a=t.updateQueue;if(a!==null){var r=t.stateNode;try{pu(a,r)}catch(e){P(t,t.return,e)}}}function os(t,a,r){r.props=fe(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(e){P(t,a,e)}}function un(t,a){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof r=="function"?t.refCleanup=r(e):r.current=e}}catch(i){P(t,a,i)}}function Qa(t,a){var r=t.ref,e=t.refCleanup;if(r!==null)if(typeof e=="function")try{e()}catch(i){P(t,a,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(i){P(t,a,i)}else r.current=null}function ls(t){var a=t.type,r=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":r.autoFocus&&e.focus();break t;case"img":r.src?e.src=r.src:r.srcSet&&(e.srcset=r.srcSet)}}catch(i){P(t,t.return,i)}}function X2(t,a,r){try{var e=t.stateNode;Wf(e,t.type,r,a),e[da]=a}catch(i){P(t,t.return,i)}}function ds(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Rr(t.type)||t.tag===4}function Q2(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ds(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Rr(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _1(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,a):(a=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,a.appendChild(t),r=r._reactRootContainer,r!=null||a.onclick!==null||(a.onclick=cr));else if(e!==4&&(e===27&&Rr(t.type)&&(r=t.stateNode,a=null),t=t.child,t!==null))for(_1(t,a,r),t=t.sibling;t!==null;)_1(t,a,r),t=t.sibling}function nl(t,a,r){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?r.insertBefore(t,a):r.appendChild(t);else if(e!==4&&(e===27&&Rr(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(nl(t,a,r),t=t.sibling;t!==null;)nl(t,a,r),t=t.sibling}function cs(t){var a=t.stateNode,r=t.memoizedProps;try{for(var e=t.type,i=a.attributes;i.length;)a.removeAttributeNode(i[0]);Kt(a,e,r),a[Yt]=t,a[da]=r}catch(n){P(t,t.return,n)}}var lr=!1,Ct=!1,K2=!1,q0=typeof WeakSet=="function"?WeakSet:Set,Nt=null;function cf(t,a){if(t=t.containerInfo,Z1=vl,t=Fh(t),ld(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var e=r.getSelection&&r.getSelection();if(e&&e.rangeCount!==0){r=e.anchorNode;var i=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break t}var o=0,d=-1,h=-1,g=0,f=0,k=t,p=null;a:for(;;){for(var x;k!==r||i!==0&&k.nodeType!==3||(d=o+i),k!==n||e!==0&&k.nodeType!==3||(h=o+e),k.nodeType===3&&(o+=k.nodeValue.length),(x=k.firstChild)!==null;)p=k,k=x;for(;;){if(k===t)break a;if(p===r&&++g===i&&(d=o),p===n&&++f===e&&(h=o),(x=k.nextSibling)!==null)break;k=p,p=k.parentNode}k=x}r=d===-1||h===-1?null:{start:d,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(q1={focusedElem:t,selectionRange:r},vl=!1,Nt=a;Nt!==null;)if(a=Nt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,Nt=t;else for(;Nt!==null;){switch(a=Nt,n=a.alternate,t=a.flags,a.tag){case 0:if((t&4)!==0&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)i=t[r],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,r=a,i=n.memoizedProps,n=n.memoizedState,e=r.stateNode;try{var w=fe(r.type,i);t=e.getSnapshotBeforeUpdate(w,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(b){P(r,r.return,b)}}break;case 3:if((t&1024)!==0){if(t=a.stateNode.containerInfo,r=t.nodeType,r===9)Y1(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Y1(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(y(163))}if(t=a.sibling,t!==null){t.return=a.return,Nt=t;break}Nt=a.return}}function hs(t,a,r){var e=r.flags;switch(r.tag){case 0:case 11:case 15:ir(t,r),e&4&&Dn(5,r);break;case 1:if(ir(t,r),e&4)if(t=r.stateNode,a===null)try{t.componentDidMount()}catch(o){P(r,r.return,o)}else{var i=fe(r.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(i,a,t.__reactInternalSnapshotBeforeUpdate)}catch(o){P(r,r.return,o)}}e&64&&ns(r),e&512&&un(r,r.return);break;case 3:if(ir(t,r),e&64&&(t=r.updateQueue,t!==null)){if(a=null,r.child!==null)switch(r.child.tag){case 27:case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}try{pu(t,a)}catch(o){P(r,r.return,o)}}break;case 27:a===null&&e&4&&cs(r);case 26:case 5:ir(t,r),a===null&&e&4&&ls(r),e&512&&un(r,r.return);break;case 12:ir(t,r);break;case 31:ir(t,r),e&4&&gs(t,r);break;case 13:ir(t,r),e&4&&ps(t,r),e&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=xf.bind(null,r),Nf(t,r))));break;case 22:if(e=r.memoizedState!==null||lr,!e){a=a!==null&&a.memoizedState!==null||Ct,i=lr;var n=Ct;lr=e,(Ct=a)&&!n?nr(t,r,(r.subtreeFlags&8772)!==0):ir(t,r),lr=i,Ct=n}break;case 30:break;default:ir(t,r)}}function us(t){var a=t.alternate;a!==null&&(t.alternate=null,us(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&ad(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var st=null,na=!1;function er(t,a,r){for(r=r.child;r!==null;)ss(t,a,r),r=r.sibling}function ss(t,a,r){if(La&&typeof La.onCommitFiberUnmount=="function")try{La.onCommitFiberUnmount(An,r)}catch{}switch(r.tag){case 26:Ct||Qa(r,a),er(t,a,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Ct||Qa(r,a);var e=st,i=na;Rr(r.type)&&(st=r.stateNode,na=!1),er(t,a,r),fn(r.stateNode),st=e,na=i;break;case 5:Ct||Qa(r,a);case 6:if(e=st,i=na,st=null,er(t,a,r),st=e,na=i,st!==null)if(na)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(r.stateNode)}catch(n){P(r,a,n)}else try{st.removeChild(r.stateNode)}catch(n){P(r,a,n)}break;case 18:st!==null&&(na?(t=st,eh(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),pi(t)):eh(st,r.stateNode));break;case 4:e=st,i=na,st=r.stateNode.containerInfo,na=!0,er(t,a,r),st=e,na=i;break;case 0:case 11:case 14:case 15:Qr(2,r,a),Ct||Qr(4,r,a),er(t,a,r);break;case 1:Ct||(Qa(r,a),e=r.stateNode,typeof e.componentWillUnmount=="function"&&os(r,a,e)),er(t,a,r);break;case 21:er(t,a,r);break;case 22:Ct=(e=Ct)||r.memoizedState!==null,er(t,a,r),Ct=e;break;default:er(t,a,r)}}function gs(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{pi(t)}catch(r){P(a,a.return,r)}}}function ps(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{pi(t)}catch(r){P(a,a.return,r)}}function hf(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new q0),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new q0),a;default:throw Error(y(435,t.tag))}}function yo(t,a){var r=hf(t);a.forEach(function(e){if(!r.has(e)){r.add(e);var i=Lf.bind(null,t,e);e.then(i,i)}})}function ea(t,a){var r=a.deletions;if(r!==null)for(var e=0;e<r.length;e++){var i=r[e],n=t,o=a,d=o;t:for(;d!==null;){switch(d.tag){case 27:if(Rr(d.type)){st=d.stateNode,na=!1;break t}break;case 5:st=d.stateNode,na=!1;break t;case 3:case 4:st=d.stateNode.containerInfo,na=!0;break t}d=d.return}if(st===null)throw Error(y(160));ss(n,o,i),st=null,na=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)fs(a,t),a=a.sibling}var Za=null;function fs(t,a){var r=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ea(a,t),ia(t),e&4&&(Qr(3,t,t.return),Dn(3,t),Qr(5,t,t.return));break;case 1:ea(a,t),ia(t),e&512&&(Ct||r===null||Qa(r,r.return)),e&64&&lr&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?e:r.concat(e))));break;case 26:var i=Za;if(ea(a,t),ia(t),e&512&&(Ct||r===null||Qa(r,r.return)),e&4){var n=r!==null?r.memoizedState:null;if(e=t.memoizedState,r===null)if(e===null)if(t.stateNode===null){t:{e=t.type,r=t.memoizedProps,i=i.ownerDocument||i;a:switch(e){case"title":n=i.getElementsByTagName("title")[0],(!n||n[_n]||n[Yt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(e),i.head.insertBefore(n,i.querySelector("head > title"))),Kt(n,e,r),n[Yt]=t,Et(n),e=n;break t;case"link":var o=hh("link","href",i).get(e+(r.href||""));if(o){for(var d=0;d<o.length;d++)if(n=o[d],n.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&n.getAttribute("rel")===(r.rel==null?null:r.rel)&&n.getAttribute("title")===(r.title==null?null:r.title)&&n.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){o.splice(d,1);break a}}n=i.createElement(e),Kt(n,e,r),i.head.appendChild(n);break;case"meta":if(o=hh("meta","content",i).get(e+(r.content||""))){for(d=0;d<o.length;d++)if(n=o[d],n.getAttribute("content")===(r.content==null?null:""+r.content)&&n.getAttribute("name")===(r.name==null?null:r.name)&&n.getAttribute("property")===(r.property==null?null:r.property)&&n.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&n.getAttribute("charset")===(r.charSet==null?null:r.charSet)){o.splice(d,1);break a}}n=i.createElement(e),Kt(n,e,r),i.head.appendChild(n);break;default:throw Error(y(468,e))}n[Yt]=t,Et(n),e=n}t.stateNode=e}else uh(i,t.type,t.stateNode);else t.stateNode=ch(i,e,t.memoizedProps);else n!==e?(n===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):n.count--,e===null?uh(i,t.type,t.stateNode):ch(i,e,t.memoizedProps)):e===null&&t.stateNode!==null&&X2(t,t.memoizedProps,r.memoizedProps)}break;case 27:ea(a,t),ia(t),e&512&&(Ct||r===null||Qa(r,r.return)),r!==null&&e&4&&X2(t,t.memoizedProps,r.memoizedProps);break;case 5:if(ea(a,t),ia(t),e&512&&(Ct||r===null||Qa(r,r.return)),t.flags&32){i=t.stateNode;try{oi(i,"")}catch(w){P(t,t.return,w)}}e&4&&t.stateNode!=null&&(i=t.memoizedProps,X2(t,i,r!==null?r.memoizedProps:i)),e&1024&&(K2=!0);break;case 6:if(ea(a,t),ia(t),e&4){if(t.stateNode===null)throw Error(y(162));e=t.memoizedProps,r=t.stateNode;try{r.nodeValue=e}catch(w){P(t,t.return,w)}}break;case 3:if(Uo=null,i=Za,Za=gl(a.containerInfo),ea(a,t),Za=i,ia(t),e&4&&r!==null&&r.memoizedState.isDehydrated)try{pi(a.containerInfo)}catch(w){P(t,t.return,w)}K2&&(K2=!1,vs(t));break;case 4:e=Za,Za=gl(t.stateNode.containerInfo),ea(a,t),ia(t),Za=e;break;case 12:ea(a,t),ia(t);break;case 31:ea(a,t),ia(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,yo(t,e)));break;case 13:ea(a,t),ia(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Hl=xa()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,yo(t,e)));break;case 22:i=t.memoizedState!==null;var h=r!==null&&r.memoizedState!==null,g=lr,f=Ct;if(lr=g||i,Ct=f||h,ea(a,t),Ct=f,lr=g,ia(t),e&8192)t:for(a=t.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,i&&(r===null||h||lr||Ct||ne(t)),r=null,a=t;;){if(a.tag===5||a.tag===26){if(r===null){h=r=a;try{if(n=h.stateNode,i)o=n.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{d=h.stateNode;var k=h.memoizedProps.style,p=k!=null&&k.hasOwnProperty("display")?k.display:null;d.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(w){P(h,h.return,w)}}}else if(a.tag===6){if(r===null){h=a;try{h.stateNode.nodeValue=i?"":h.memoizedProps}catch(w){P(h,h.return,w)}}}else if(a.tag===18){if(r===null){h=a;try{var x=h.stateNode;i?ih(x,!0):ih(h.stateNode,!1)}catch(w){P(h,h.return,w)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;r===a&&(r=null),a=a.return}r===a&&(r=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(r=e.retryQueue,r!==null&&(e.retryQueue=null,yo(t,r))));break;case 19:ea(a,t),ia(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,yo(t,e)));break;case 30:break;case 21:break;default:ea(a,t),ia(t)}}function ia(t){var a=t.flags;if(a&2){try{for(var r,e=t.return;e!==null;){if(ds(e)){r=e;break}e=e.return}if(r==null)throw Error(y(160));switch(r.tag){case 27:var i=r.stateNode,n=Q2(t);nl(t,n,i);break;case 5:var o=r.stateNode;r.flags&32&&(oi(o,""),r.flags&=-33);var d=Q2(t);nl(t,d,o);break;case 3:case 4:var h=r.stateNode.containerInfo,g=Q2(t);_1(t,g,h);break;default:throw Error(y(161))}}catch(f){P(t,t.return,f)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function vs(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;vs(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function ir(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)hs(t,a.alternate,a),a=a.sibling}function ne(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:Qr(4,a,a.return),ne(a);break;case 1:Qa(a,a.return);var r=a.stateNode;typeof r.componentWillUnmount=="function"&&os(a,a.return,r),ne(a);break;case 27:fn(a.stateNode);case 26:case 5:Qa(a,a.return),ne(a);break;case 22:a.memoizedState===null&&ne(a);break;case 30:ne(a);break;default:ne(a)}t=t.sibling}}function nr(t,a,r){for(r=r&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,i=t,n=a,o=n.flags;switch(n.tag){case 0:case 11:case 15:nr(i,n,r),Dn(4,n);break;case 1:if(nr(i,n,r),e=n,i=e.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(g){P(e,e.return,g)}if(e=n,i=e.updateQueue,i!==null){var d=e.stateNode;try{var h=i.shared.hiddenCallbacks;if(h!==null)for(i.shared.hiddenCallbacks=null,i=0;i<h.length;i++)gu(h[i],d)}catch(g){P(e,e.return,g)}}r&&o&64&&ns(n),un(n,n.return);break;case 27:cs(n);case 26:case 5:nr(i,n,r),r&&e===null&&o&4&&ls(n),un(n,n.return);break;case 12:nr(i,n,r);break;case 31:nr(i,n,r),r&&o&4&&gs(i,n);break;case 13:nr(i,n,r),r&&o&4&&ps(i,n);break;case 22:n.memoizedState===null&&nr(i,n,r),un(n,n.return);break;case 30:break;default:nr(i,n,r)}a=a.sibling}}function zd(t,a){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&Nn(r))}function _d(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Nn(t))}function Ua(t,a,r,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ks(t,a,r,e),a=a.sibling}function ks(t,a,r,e){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Ua(t,a,r,e),i&2048&&Dn(9,a);break;case 1:Ua(t,a,r,e);break;case 3:Ua(t,a,r,e),i&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&Nn(t)));break;case 12:if(i&2048){Ua(t,a,r,e),t=a.stateNode;try{var n=a.memoizedProps,o=n.id,d=n.onPostCommit;typeof d=="function"&&d(o,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){P(a,a.return,h)}}else Ua(t,a,r,e);break;case 31:Ua(t,a,r,e);break;case 13:Ua(t,a,r,e);break;case 23:break;case 22:n=a.stateNode,o=a.alternate,a.memoizedState!==null?n._visibility&2?Ua(t,a,r,e):sn(t,a):n._visibility&2?Ua(t,a,r,e):(n._visibility|=2,Ee(t,a,r,e,(a.subtreeFlags&10256)!==0||!1)),i&2048&&zd(o,a);break;case 24:Ua(t,a,r,e),i&2048&&_d(a.alternate,a);break;default:Ua(t,a,r,e)}}function Ee(t,a,r,e,i){for(i=i&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,o=a,d=r,h=e,g=o.flags;switch(o.tag){case 0:case 11:case 15:Ee(n,o,d,h,i),Dn(8,o);break;case 23:break;case 22:var f=o.stateNode;o.memoizedState!==null?f._visibility&2?Ee(n,o,d,h,i):sn(n,o):(f._visibility|=2,Ee(n,o,d,h,i)),i&&g&2048&&zd(o.alternate,o);break;case 24:Ee(n,o,d,h,i),i&&g&2048&&_d(o.alternate,o);break;default:Ee(n,o,d,h,i)}a=a.sibling}}function sn(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var r=t,e=a,i=e.flags;switch(e.tag){case 22:sn(r,e),i&2048&&zd(e.alternate,e);break;case 24:sn(r,e),i&2048&&_d(e.alternate,e);break;default:sn(r,e)}a=a.sibling}}var an=8192;function Ne(t,a,r){if(t.subtreeFlags&an)for(t=t.child;t!==null;)xs(t,a,r),t=t.sibling}function xs(t,a,r){switch(t.tag){case 26:Ne(t,a,r),t.flags&an&&t.memoizedState!==null&&Jf(r,Za,t.memoizedState,t.memoizedProps);break;case 5:Ne(t,a,r);break;case 3:case 4:var e=Za;Za=gl(t.stateNode.containerInfo),Ne(t,a,r),Za=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=an,an=16777216,Ne(t,a,r),an=e):Ne(t,a,r));break;default:Ne(t,a,r)}}function Ls(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function Ji(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];Nt=e,ms(e,t)}Ls(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ms(t),t=t.sibling}function Ms(t){switch(t.tag){case 0:case 11:case 15:Ji(t),t.flags&2048&&Qr(9,t,t.return);break;case 3:Ji(t);break;case 12:Ji(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,Do(t)):Ji(t);break;default:Ji(t)}}function Do(t){var a=t.deletions;if((t.flags&16)!==0){if(a!==null)for(var r=0;r<a.length;r++){var e=a[r];Nt=e,ms(e,t)}Ls(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:Qr(8,a,a.return),Do(a);break;case 22:r=a.stateNode,r._visibility&2&&(r._visibility&=-3,Do(a));break;default:Do(a)}t=t.sibling}}function ms(t,a){for(;Nt!==null;){var r=Nt;switch(r.tag){case 0:case 11:case 15:Qr(8,r,a);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var e=r.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Nn(r.memoizedState.cache)}if(e=r.child,e!==null)e.return=r,Nt=e;else t:for(r=t;Nt!==null;){e=Nt;var i=e.sibling,n=e.return;if(us(e),e===r){Nt=null;break t}if(i!==null){i.return=n,Nt=i;break t}Nt=n}}}var uf={getCacheForType:function(t){var a=Qt(bt),r=a.data.get(t);return r===void 0&&(r=t(),a.data.set(t,r)),r},cacheSignal:function(){return Qt(bt).controller.signal}},sf=typeof WeakMap=="function"?WeakMap:Map,F=0,rt=null,Y=null,X=0,I=0,pa=null,Vr=!1,Li=!1,Td=!1,xr=0,ft=0,Kr=0,he=0,Nd=0,ka=0,hi=0,gn=null,oa=null,T1=!1,Hl=0,ys=0,ol=1/0,ll=null,Or=null,jt=0,Ur=null,ui=null,gr=0,N1=0,E1=null,ws=null,pn=0,D1=null;function ma(){return(F&2)!==0&&X!==0?X&-X:T.T!==null?Dd():Vh()}function Cs(){if(ka===0)if((X&536870912)===0||J){var t=so;so<<=1,(so&3932160)===0&&(so=262144),ka=t}else ka=536870912;return t=wa.current,t!==null&&(t.flags|=32),ka}function la(t,a,r){(t===rt&&(I===2||I===9)||t.cancelPendingCommit!==null)&&(si(t,0),zr(t,X,ka,!1)),zn(t,r),((F&2)===0||t!==rt)&&(t===rt&&((F&2)===0&&(he|=r),ft===4&&zr(t,X,ka,!1)),Ra(t))}function bs(t,a,r){if((F&6)!==0)throw Error(y(327));var e=!r&&(a&127)===0&&(a&t.expiredLanes)===0||Vn(t,a),i=e?ff(t,a):J2(t,a,!0),n=e;do{if(i===0){Li&&!e&&zr(t,a,0,!1);break}else{if(r=t.current.alternate,n&&!gf(r)){i=J2(t,a,!1),n=!1;continue}if(i===2){if(n=a,t.errorRecoveryDisabledLanes&n)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){a=o;t:{var d=t;i=gn;var h=d.current.memoizedState.isDehydrated;if(h&&(si(d,o).flags|=256),o=J2(d,o,!1),o!==2){if(Td&&!h){d.errorRecoveryDisabledLanes|=n,he|=n,i=4;break t}n=oa,oa=i,n!==null&&(oa===null?oa=n:oa.push.apply(oa,n))}i=o}if(n=!1,i!==2)continue}}if(i===1){si(t,0),zr(t,a,0,!0);break}t:{switch(e=t,n=i,n){case 0:case 1:throw Error(y(345));case 4:if((a&4194048)!==a)break;case 6:zr(e,a,ka,!Vr);break t;case 2:oa=null;break;case 3:case 5:break;default:throw Error(y(329))}if((a&62914560)===a&&(i=Hl+300-xa(),10<i)){if(zr(e,a,ka,!Vr),xl(e,0,!0)!==0)break t;gr=a,e.timeoutHandle=Xs(G0.bind(null,e,r,oa,ll,T1,a,ka,he,hi,Vr,n,"Throttled",-0,0),i);break t}G0(e,r,oa,ll,T1,a,ka,he,hi,Vr,n,null,-0,0)}}break}while(!0);Ra(t)}function G0(t,a,r,e,i,n,o,d,h,g,f,k,p,x){if(t.timeoutHandle=-1,k=a.subtreeFlags,k&8192||(k&16785408)===16785408){k={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cr},xs(a,n,k);var w=(n&62914560)===n?Hl-xa():(n&4194048)===n?ys-xa():0;if(w=Rf(k,w),w!==null){gr=n,t.cancelPendingCommit=w(X0.bind(null,t,a,n,r,e,i,o,d,h,f,k,null,p,x)),zr(t,n,o,!g);return}}X0(t,a,n,r,e,i,o,d,h)}function gf(t){for(var a=t;;){var r=a.tag;if((r===0||r===11||r===15)&&a.flags&16384&&(r=a.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var e=0;e<r.length;e++){var i=r[e],n=i.getSnapshot;i=i.value;try{if(!ya(n(),i))return!1}catch{return!1}}if(r=a.child,a.subtreeFlags&16384&&r!==null)r.return=a,a=r;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function zr(t,a,r,e){a&=~Nd,a&=~he,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var i=a;0<i;){var n=31-Ma(i),o=1<<n;e[n]=-1,i&=~o}r!==0&&Hh(t,r,a)}function Sl(){return(F&6)===0?(On(0,!1),!1):!0}function Ed(){if(Y!==null){if(I===0)var t=Y.return;else t=Y,hr=Me=null,yd(t),ai=null,yn=0,t=Y;for(;t!==null;)is(t.alternate,t),t=t.return;Y=null}}function si(t,a){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Af(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),gr=0,Ed(),rt=t,Y=r=ur(t.current,null),X=a,I=0,pa=null,Vr=!1,Li=Vn(t,a),Td=!1,hi=ka=Nd=he=Kr=ft=0,oa=gn=null,T1=!1,(a&8)!==0&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var i=31-Ma(e),n=1<<i;a|=t[i],e&=~n}return xr=a,yl(),r}function Bs(t,a){O=null,T.H=Cn,a===xi||a===Cl?(a=m0(),I=3):a===fd?(a=m0(),I=4):I=a===Ad?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,pa=a,Y===null&&(ft=1,el(t,Va(a,t.current)))}function js(){var t=wa.current;return t===null?!0:(X&4194048)===X?_a===null:(X&62914560)===X||(X&536870912)!==0?t===_a:!1}function Ws(){var t=T.H;return T.H=Cn,t===null?Cn:t}function Hs(){var t=T.A;return T.A=uf,t}function dl(){ft=4,Vr||(X&4194048)!==X&&wa.current!==null||(Li=!0),(Kr&134217727)===0&&(he&134217727)===0||rt===null||zr(rt,X,ka,!1)}function J2(t,a,r){var e=F;F|=2;var i=Ws(),n=Hs();(rt!==t||X!==a)&&(ll=null,si(t,a)),a=!1;var o=ft;t:do try{if(I!==0&&Y!==null){var d=Y,h=pa;switch(I){case 8:Ed(),o=6;break t;case 3:case 2:case 9:case 6:wa.current===null&&(a=!0);var g=I;if(I=0,pa=null,Fe(t,d,h,g),r&&Li){o=0;break t}break;default:g=I,I=0,pa=null,Fe(t,d,h,g)}}pf(),o=ft;break}catch(f){Bs(t,f)}while(!0);return a&&t.shellSuspendCounter++,hr=Me=null,F=e,T.H=i,T.A=n,Y===null&&(rt=null,X=0,yl()),o}function pf(){for(;Y!==null;)Ss(Y)}function ff(t,a){var r=F;F|=2;var e=Ws(),i=Hs();rt!==t||X!==a?(ll=null,ol=xa()+500,si(t,a)):Li=Vn(t,a);t:do try{if(I!==0&&Y!==null){a=Y;var n=pa;a:switch(I){case 1:I=0,pa=null,Fe(t,a,n,1);break;case 2:case 9:if(M0(n)){I=0,pa=null,Y0(a);break}a=function(){I!==2&&I!==9||rt!==t||(I=7),Ra(t)},n.then(a,a);break t;case 3:I=7;break t;case 4:I=5;break t;case 7:M0(n)?(I=0,pa=null,Y0(a)):(I=0,pa=null,Fe(t,a,n,7));break;case 5:var o=null;switch(Y.tag){case 26:o=Y.memoizedState;case 5:case 27:var d=Y;if(o?Fs(o):d.stateNode.complete){I=0,pa=null;var h=d.sibling;if(h!==null)Y=h;else{var g=d.return;g!==null?(Y=g,Al(g)):Y=null}break a}}I=0,pa=null,Fe(t,a,n,5);break;case 6:I=0,pa=null,Fe(t,a,n,6);break;case 8:Ed(),ft=6;break t;default:throw Error(y(462))}}vf();break}catch(f){Bs(t,f)}while(!0);return hr=Me=null,T.H=e,T.A=i,F=r,Y!==null?0:(rt=null,X=0,yl(),ft)}function vf(){for(;Y!==null&&!Dp();)Ss(Y)}function Ss(t){var a=es(t.alternate,t,xr);t.memoizedProps=t.pendingProps,a===null?Al(t):Y=a}function Y0(t){var a=t,r=a.alternate;switch(a.tag){case 15:case 0:a=E0(r,a,a.pendingProps,a.type,void 0,X);break;case 11:a=E0(r,a,a.pendingProps,a.type.render,a.ref,X);break;case 5:yd(a);default:is(r,a),a=Y=iu(a,xr),a=es(r,a,xr)}t.memoizedProps=t.pendingProps,a===null?Al(t):Y=a}function Fe(t,a,r,e){hr=Me=null,yd(a),ai=null,yn=0;var i=a.return;try{if(ef(t,i,a,r,X)){ft=1,el(t,Va(r,t.current)),Y=null;return}}catch(n){if(i!==null)throw Y=i,n;ft=1,el(t,Va(r,t.current)),Y=null;return}a.flags&32768?(J||e===1?t=!0:Li||(X&536870912)!==0?t=!1:(Vr=t=!0,(e===2||e===9||e===3||e===6)&&(e=wa.current,e!==null&&e.tag===13&&(e.flags|=16384))),As(a,t)):Al(a)}function Al(t){var a=t;do{if((a.flags&32768)!==0){As(a,Vr);return}t=a.return;var r=lf(a.alternate,a,xr);if(r!==null){Y=r;return}if(a=a.sibling,a!==null){Y=a;return}Y=a=t}while(a!==null);ft===0&&(ft=5)}function As(t,a){do{var r=df(t.alternate,t);if(r!==null){r.flags&=32767,Y=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!a&&(t=t.sibling,t!==null)){Y=t;return}Y=t=r}while(t!==null);ft=6,Y=null}function X0(t,a,r,e,i,n,o,d,h){t.cancelPendingCommit=null;do Vl();while(jt!==0);if((F&6)!==0)throw Error(y(327));if(a!==null){if(a===t.current)throw Error(y(177));if(n=a.lanes|a.childLanes,n|=dd,Jp(t,r,n,o,d,h),t===rt&&(Y=rt=null,X=0),ui=a,Ur=t,gr=r,N1=n,E1=i,ws=e,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Mf(Qo,function(){return Ns(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||e){e=T.T,T.T=null,i=$.p,$.p=2,o=F,F|=4;try{cf(t,a,r)}finally{F=o,$.p=i,T.T=e}}jt=1,Vs(),zs(),_s()}}function Vs(){if(jt===1){jt=0;var t=Ur,a=ui,r=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||r){r=T.T,T.T=null;var e=$.p;$.p=2;var i=F;F|=4;try{fs(a,t);var n=q1,o=Fh(t.containerInfo),d=n.focusedElem,h=n.selectionRange;if(o!==d&&d&&d.ownerDocument&&Rh(d.ownerDocument.documentElement,d)){if(h!==null&&ld(d)){var g=h.start,f=h.end;if(f===void 0&&(f=g),"selectionStart"in d)d.selectionStart=g,d.selectionEnd=Math.min(f,d.value.length);else{var k=d.ownerDocument||document,p=k&&k.defaultView||window;if(p.getSelection){var x=p.getSelection(),w=d.textContent.length,b=Math.min(h.start,w),z=h.end===void 0?b:Math.min(h.end,w);!x.extend&&b>z&&(o=z,z=b,b=o);var s=g0(d,b),u=g0(d,z);if(s&&u&&(x.rangeCount!==1||x.anchorNode!==s.node||x.anchorOffset!==s.offset||x.focusNode!==u.node||x.focusOffset!==u.offset)){var v=k.createRange();v.setStart(s.node,s.offset),x.removeAllRanges(),b>z?(x.addRange(v),x.extend(u.node,u.offset)):(v.setEnd(u.node,u.offset),x.addRange(v))}}}}for(k=[],x=d;x=x.parentNode;)x.nodeType===1&&k.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<k.length;d++){var M=k[d];M.element.scrollLeft=M.left,M.element.scrollTop=M.top}}vl=!!Z1,q1=Z1=null}finally{F=i,$.p=e,T.T=r}}t.current=a,jt=2}}function zs(){if(jt===2){jt=0;var t=Ur,a=ui,r=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||r){r=T.T,T.T=null;var e=$.p;$.p=2;var i=F;F|=4;try{hs(t,a.alternate,a)}finally{F=i,$.p=e,T.T=r}}jt=3}}function _s(){if(jt===4||jt===3){jt=0,Op();var t=Ur,a=ui,r=gr,e=ws;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?jt=5:(jt=0,ui=Ur=null,Ts(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(Or=null),td(r),a=a.stateNode,La&&typeof La.onCommitFiberRoot=="function")try{La.onCommitFiberRoot(An,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=T.T,i=$.p,$.p=2,T.T=null;try{for(var n=t.onRecoverableError,o=0;o<e.length;o++){var d=e[o];n(d.value,{componentStack:d.stack})}}finally{T.T=a,$.p=i}}(gr&3)!==0&&Vl(),Ra(t),i=t.pendingLanes,(r&261930)!==0&&(i&42)!==0?t===D1?pn++:(pn=0,D1=t):pn=0,On(0,!1)}}function Ts(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,Nn(a)))}function Vl(){return Vs(),zs(),_s(),Ns()}function Ns(){if(jt!==5)return!1;var t=Ur,a=N1;N1=0;var r=td(gr),e=T.T,i=$.p;try{$.p=32>r?32:r,T.T=null,r=E1,E1=null;var n=Ur,o=gr;if(jt=0,ui=Ur=null,gr=0,(F&6)!==0)throw Error(y(331));var d=F;if(F|=4,Ms(n.current),ks(n,n.current,o,r),F=d,On(0,!1),La&&typeof La.onPostCommitFiberRoot=="function")try{La.onPostCommitFiberRoot(An,n)}catch{}return!0}finally{$.p=i,T.T=e,Ts(t,a)}}function Q0(t,a,r){a=Va(r,a),a=A1(t.stateNode,a,2),t=Dr(t,a,2),t!==null&&(zn(t,2),Ra(t))}function P(t,a,r){if(t.tag===3)Q0(t,t,r);else for(;a!==null;){if(a.tag===3){Q0(a,t,r);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Or===null||!Or.has(e))){t=Va(r,t),r=$u(2),e=Dr(a,r,2),e!==null&&(Iu(r,e,a,t),zn(e,2),Ra(e));break}}a=a.return}}function R2(t,a,r){var e=t.pingCache;if(e===null){e=t.pingCache=new sf;var i=new Set;e.set(a,i)}else i=e.get(a),i===void 0&&(i=new Set,e.set(a,i));i.has(r)||(Td=!0,i.add(r),t=kf.bind(null,t,a,r),a.then(t,t))}function kf(t,a,r){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,rt===t&&(X&r)===r&&(ft===4||ft===3&&(X&62914560)===X&&300>xa()-Hl?(F&2)===0&&si(t,0):Nd|=r,hi===X&&(hi=0)),Ra(t)}function Es(t,a){a===0&&(a=Wh()),t=Le(t,a),t!==null&&(zn(t,a),Ra(t))}function xf(t){var a=t.memoizedState,r=0;a!==null&&(r=a.retryLane),Es(t,r)}function Lf(t,a){var r=0;switch(t.tag){case 31:case 13:var e=t.stateNode,i=t.memoizedState;i!==null&&(r=i.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(y(314))}e!==null&&e.delete(a),Es(t,r)}function Mf(t,a){return I1(t,a)}var cl=null,De=null,O1=!1,hl=!1,F2=!1,_r=0;function Ra(t){t!==De&&t.next===null&&(De===null?cl=De=t:De=De.next=t),hl=!0,O1||(O1=!0,yf())}function On(t,a){if(!F2&&hl){F2=!0;do for(var r=!1,e=cl;e!==null;){if(!a)if(t!==0){var i=e.pendingLanes;if(i===0)var n=0;else{var o=e.suspendedLanes,d=e.pingedLanes;n=(1<<31-Ma(42|t)+1)-1,n&=i&~(o&~d),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(r=!0,K0(e,n))}else n=X,n=xl(e,e===rt?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||Vn(e,n)||(r=!0,K0(e,n));e=e.next}while(r);F2=!1}}function mf(){Ds()}function Ds(){hl=O1=!1;var t=0;_r!==0&&Sf()&&(t=_r);for(var a=xa(),r=null,e=cl;e!==null;){var i=e.next,n=Os(e,a);n===0?(e.next=null,r===null?cl=i:r.next=i,i===null&&(De=r)):(r=e,(t!==0||(n&3)!==0)&&(hl=!0)),e=i}jt!==0&&jt!==5||On(t,!1),_r!==0&&(_r=0)}function Os(t,a){for(var r=t.suspendedLanes,e=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var o=31-Ma(n),d=1<<o,h=i[o];h===-1?((d&r)===0||(d&e)!==0)&&(i[o]=Kp(d,a)):h<=a&&(t.expiredLanes|=d),n&=~d}if(a=rt,r=X,r=xl(t,t===a?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,r===0||t===a&&(I===2||I===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&b2(e),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Vn(t,r)){if(a=r&-r,a===t.callbackPriority)return a;switch(e!==null&&b2(e),td(r)){case 2:case 8:r=Bh;break;case 32:r=Qo;break;case 268435456:r=jh;break;default:r=Qo}return e=Us.bind(null,t),r=I1(r,e),t.callbackPriority=a,t.callbackNode=r,a}return e!==null&&e!==null&&b2(e),t.callbackPriority=2,t.callbackNode=null,2}function Us(t,a){if(jt!==0&&jt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(Vl()&&t.callbackNode!==r)return null;var e=X;return e=xl(t,t===rt?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(bs(t,e,a),Os(t,xa()),t.callbackNode!=null&&t.callbackNode===r?Us.bind(null,t):null)}function K0(t,a){if(Vl())return null;bs(t,a,!0)}function yf(){Vf(function(){(F&6)!==0?I1(bh,mf):Ds()})}function Dd(){if(_r===0){var t=li;t===0&&(t=uo,uo<<=1,(uo&261888)===0&&(uo=256)),_r=t}return _r}function J0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ho(""+t)}function R0(t,a){var r=a.ownerDocument.createElement("input");return r.name=a.name,r.value=a.value,t.id&&r.setAttribute("form",t.id),a.parentNode.insertBefore(r,a),t=new FormData(t),r.parentNode.removeChild(r),t}function wf(t,a,r,e,i){if(a==="submit"&&r&&r.stateNode===i){var n=J0((i[da]||null).action),o=e.submitter;o&&(a=(a=o[da]||null)?J0(a.formAction):o.getAttribute("formAction"),a!==null&&(n=a,o=null));var d=new Ll("action","action",null,e,i);t.push({event:d,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(_r!==0){var h=o?R0(i,o):new FormData(i);H1(r,{pending:!0,data:h,method:i.method,action:n},null,h)}}else typeof n=="function"&&(d.preventDefault(),h=o?R0(i,o):new FormData(i),H1(r,{pending:!0,data:h,method:i.method,action:n},n,h))},currentTarget:i}]})}}for(wo=0;wo<k1.length;wo++)Co=k1[wo],F0=Co.toLowerCase(),$0=Co[0].toUpperCase()+Co.slice(1),qa(F0,"on"+$0);var Co,F0,$0,wo;qa(Ih,"onAnimationEnd");qa(Ph,"onAnimationIteration");qa(tu,"onAnimationStart");qa("dblclick","onDoubleClick");qa("focusin","onFocus");qa("focusout","onBlur");qa(U5,"onTransitionRun");qa(Z5,"onTransitionStart");qa(q5,"onTransitionCancel");qa(au,"onTransitionEnd");ni("onMouseEnter",["mouseout","mouseover"]);ni("onMouseLeave",["mouseout","mouseover"]);ni("onPointerEnter",["pointerout","pointerover"]);ni("onPointerLeave",["pointerout","pointerover"]);ve("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ve("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ve("onBeforeInput",["compositionend","keypress","textInput","paste"]);ve("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ve("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ve("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn));function Zs(t,a){a=(a&4)!==0;for(var r=0;r<t.length;r++){var e=t[r],i=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var o=e.length-1;0<=o;o--){var d=e[o],h=d.instance,g=d.currentTarget;if(d=d.listener,h!==n&&i.isPropagationStopped())break t;n=d,i.currentTarget=g;try{n(i)}catch(f){Jo(f)}i.currentTarget=null,n=h}else for(o=0;o<e.length;o++){if(d=e[o],h=d.instance,g=d.currentTarget,d=d.listener,h!==n&&i.isPropagationStopped())break t;n=d,i.currentTarget=g;try{n(i)}catch(f){Jo(f)}i.currentTarget=null,n=h}}}}function G(t,a){var r=a[c1];r===void 0&&(r=a[c1]=new Set);var e=t+"__bubble";r.has(e)||(qs(a,t,2,!1),r.add(e))}function $2(t,a,r){var e=0;a&&(e|=4),qs(r,t,e,a)}var bo="_reactListening"+Math.random().toString(36).slice(2);function Od(t){if(!t[bo]){t[bo]=!0,zh.forEach(function(r){r!=="selectionchange"&&(Cf.has(r)||$2(r,!1,t),$2(r,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[bo]||(a[bo]=!0,$2("selectionchange",!1,a))}}function qs(t,a,r,e){switch(ag(a)){case 2:var i=If;break;case 8:i=Pf;break;default:i=Gd}r=i.bind(null,a,r,t),i=void 0,!p1||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(i=!0),e?i!==void 0?t.addEventListener(a,r,{capture:!0,passive:i}):t.addEventListener(a,r,!0):i!==void 0?t.addEventListener(a,r,{passive:i}):t.addEventListener(a,r,!1)}function I2(t,a,r,e,i){var n=e;if((a&1)===0&&(a&2)===0&&e!==null)t:for(;;){if(e===null)return;var o=e.tag;if(o===3||o===4){var d=e.stateNode.containerInfo;if(d===i)break;if(o===4)for(o=e.return;o!==null;){var h=o.tag;if((h===3||h===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;d!==null;){if(o=Ze(d),o===null)return;if(h=o.tag,h===5||h===6||h===26||h===27){e=n=o;continue t}d=d.parentNode}}e=e.return}Zh(function(){var g=n,f=ed(r),k=[];t:{var p=ru.get(t);if(p!==void 0){var x=Ll,w=t;switch(t){case"keypress":if(Ao(r)===0)break t;case"keydown":case"keyup":x=x5;break;case"focusin":w="focus",x=S2;break;case"focusout":w="blur",x=S2;break;case"beforeblur":case"afterblur":x=S2;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=i0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=o5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=m5;break;case Ih:case Ph:case tu:x=c5;break;case au:x=w5;break;case"scroll":case"scrollend":x=i5;break;case"wheel":x=b5;break;case"copy":case"cut":case"paste":x=u5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=o0;break;case"toggle":case"beforetoggle":x=j5}var b=(a&4)!==0,z=!b&&(t==="scroll"||t==="scrollend"),s=b?p!==null?p+"Capture":null:p;b=[];for(var u=g,v;u!==null;){var M=u;if(v=M.stateNode,M=M.tag,M!==5&&M!==26&&M!==27||v===null||s===null||(M=kn(u,s),M!=null&&b.push(Bn(u,M,v))),z)break;u=u.return}0<b.length&&(p=new x(p,w,null,r,f),k.push({event:p,listeners:b}))}}if((a&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",p&&r!==g1&&(w=r.relatedTarget||r.fromElement)&&(Ze(w)||w[fi]))break t;if((x||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,x?(w=r.relatedTarget||r.toElement,x=g,w=w?Ze(w):null,w!==null&&(z=Sn(w),b=w.tag,w!==z||b!==5&&b!==27&&b!==6)&&(w=null)):(x=null,w=g),x!==w)){if(b=i0,M="onMouseLeave",s="onMouseEnter",u="mouse",(t==="pointerout"||t==="pointerover")&&(b=o0,M="onPointerLeave",s="onPointerEnter",u="pointer"),z=x==null?p:Pi(x),v=w==null?p:Pi(w),p=new b(M,u+"leave",x,r,f),p.target=z,p.relatedTarget=v,M=null,Ze(f)===g&&(b=new b(s,u+"enter",w,r,f),b.target=v,b.relatedTarget=z,M=b),z=M,x&&w)a:{for(b=bf,s=x,u=w,v=0,M=s;M;M=b(M))v++;M=0;for(var j=u;j;j=b(j))M++;for(;0<v-M;)s=b(s),v--;for(;0<M-v;)u=b(u),M--;for(;v--;){if(s===u||u!==null&&s===u.alternate){b=s;break a}s=b(s),u=b(u)}b=null}else b=null;x!==null&&I0(k,p,x,b,!1),w!==null&&z!==null&&I0(k,z,w,b,!0)}}t:{if(p=g?Pi(g):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var _=h0;else if(c0(p))if(Kh)_=E5;else{_=T5;var H=_5}else x=p.nodeName,!x||x.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?g&&rd(g.elementType)&&(_=h0):_=N5;if(_&&(_=_(t,g))){Qh(k,_,r,f);break t}H&&H(t,p,g),t==="focusout"&&g&&p.type==="number"&&g.memoizedProps.value!=null&&s1(p,"number",p.value)}switch(H=g?Pi(g):window,t){case"focusin":(c0(H)||H.contentEditable==="true")&&(Ye=H,f1=g,nn=null);break;case"focusout":nn=f1=Ye=null;break;case"mousedown":v1=!0;break;case"contextmenu":case"mouseup":case"dragend":v1=!1,p0(k,r,f);break;case"selectionchange":if(O5)break;case"keydown":case"keyup":p0(k,r,f)}var V;if(od)t:{switch(t){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Ge?Yh(t,r)&&(D="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(D="onCompositionStart");D&&(Gh&&r.locale!=="ko"&&(Ge||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ge&&(V=qh()):(Ar=f,id="value"in Ar?Ar.value:Ar.textContent,Ge=!0)),H=ul(g,D),0<H.length&&(D=new n0(D,t,null,r,f),k.push({event:D,listeners:H}),V?D.data=V:(V=Xh(r),V!==null&&(D.data=V)))),(V=H5?S5(t,r):A5(t,r))&&(D=ul(g,"onBeforeInput"),0<D.length&&(H=new n0("onBeforeInput","beforeinput",null,r,f),k.push({event:H,listeners:D}),H.data=V)),wf(k,t,g,r,f)}Zs(k,a)})}function Bn(t,a,r){return{instance:t,listener:a,currentTarget:r}}function ul(t,a){for(var r=a+"Capture",e=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=kn(t,r),i!=null&&e.unshift(Bn(t,i,n)),i=kn(t,a),i!=null&&e.push(Bn(t,i,n))),t.tag===3)return e;t=t.return}return[]}function bf(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function I0(t,a,r,e,i){for(var n=a._reactName,o=[];r!==null&&r!==e;){var d=r,h=d.alternate,g=d.stateNode;if(d=d.tag,h!==null&&h===e)break;d!==5&&d!==26&&d!==27||g===null||(h=g,i?(g=kn(r,n),g!=null&&o.unshift(Bn(r,g,h))):i||(g=kn(r,n),g!=null&&o.push(Bn(r,g,h)))),r=r.return}o.length!==0&&t.push({event:a,listeners:o})}var Bf=/\r\n?/g,jf=/\u0000|\uFFFD/g;function P0(t){return(typeof t=="string"?t:""+t).replace(Bf,`
`).replace(jf,"")}function Gs(t,a){return a=P0(a),P0(t)===a}function tt(t,a,r,e,i,n){switch(r){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||oi(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&oi(t,""+e);break;case"className":po(t,"class",e);break;case"tabIndex":po(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":po(t,r,e);break;case"style":Uh(t,e,n);break;case"data":if(a!=="object"){po(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||r!=="href")){t.removeAttribute(r);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=Ho(""+e),t.setAttribute(r,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(r==="formAction"?(a!=="input"&&tt(t,a,"name",i.name,i,null),tt(t,a,"formEncType",i.formEncType,i,null),tt(t,a,"formMethod",i.formMethod,i,null),tt(t,a,"formTarget",i.formTarget,i,null)):(tt(t,a,"encType",i.encType,i,null),tt(t,a,"method",i.method,i,null),tt(t,a,"target",i.target,i,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(r);break}e=Ho(""+e),t.setAttribute(r,e);break;case"onClick":e!=null&&(t.onclick=cr);break;case"onScroll":e!=null&&G("scroll",t);break;case"onScrollEnd":e!=null&&G("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(y(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(y(60));t.innerHTML=r}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}r=Ho(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""+e):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":e===!0?t.setAttribute(r,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(r,e):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(r,e):t.removeAttribute(r);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(r):t.setAttribute(r,e);break;case"popover":G("beforetoggle",t),G("toggle",t),Wo(t,"popover",e);break;case"xlinkActuate":ar(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":ar(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":ar(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":ar(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":ar(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":ar(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":ar(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":ar(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":ar(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Wo(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=r5.get(r)||r,Wo(t,r,e))}}function U1(t,a,r,e,i,n){switch(r){case"style":Uh(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(y(61));if(r=e.__html,r!=null){if(i.children!=null)throw Error(y(60));t.innerHTML=r}}break;case"children":typeof e=="string"?oi(t,e):(typeof e=="number"||typeof e=="bigint")&&oi(t,""+e);break;case"onScroll":e!=null&&G("scroll",t);break;case"onScrollEnd":e!=null&&G("scrollend",t);break;case"onClick":e!=null&&(t.onclick=cr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_h.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(i=r.endsWith("Capture"),a=r.slice(2,i?r.length-7:void 0),n=t[da]||null,n=n!=null?n[r]:null,typeof n=="function"&&t.removeEventListener(a,n,i),typeof e=="function")){typeof n!="function"&&n!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(a,e,i);break t}r in t?t[r]=e:e===!0?t.setAttribute(r,""):Wo(t,r,e)}}}function Kt(t,a,r){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",t),G("load",t);var e=!1,i=!1,n;for(n in r)if(r.hasOwnProperty(n)){var o=r[n];if(o!=null)switch(n){case"src":e=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(y(137,a));default:tt(t,a,n,o,r,null)}}i&&tt(t,a,"srcSet",r.srcSet,r,null),e&&tt(t,a,"src",r.src,r,null);return;case"input":G("invalid",t);var d=n=o=i=null,h=null,g=null;for(e in r)if(r.hasOwnProperty(e)){var f=r[e];if(f!=null)switch(e){case"name":i=f;break;case"type":o=f;break;case"checked":h=f;break;case"defaultChecked":g=f;break;case"value":n=f;break;case"defaultValue":d=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(y(137,a));break;default:tt(t,a,e,f,r,null)}}Eh(t,n,d,h,g,o,i,!1);return;case"select":G("invalid",t),e=o=n=null;for(i in r)if(r.hasOwnProperty(i)&&(d=r[i],d!=null))switch(i){case"value":n=d;break;case"defaultValue":o=d;break;case"multiple":e=d;default:tt(t,a,i,d,r,null)}a=n,r=o,t.multiple=!!e,a!=null?Ie(t,!!e,a,!1):r!=null&&Ie(t,!!e,r,!0);return;case"textarea":G("invalid",t),n=i=e=null;for(o in r)if(r.hasOwnProperty(o)&&(d=r[o],d!=null))switch(o){case"value":e=d;break;case"defaultValue":i=d;break;case"children":n=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(y(91));break;default:tt(t,a,o,d,r,null)}Oh(t,e,i,n);return;case"option":for(h in r)r.hasOwnProperty(h)&&(e=r[h],e!=null)&&(h==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":tt(t,a,h,e,r,null));return;case"dialog":G("beforetoggle",t),G("toggle",t),G("cancel",t),G("close",t);break;case"iframe":case"object":G("load",t);break;case"video":case"audio":for(e=0;e<bn.length;e++)G(bn[e],t);break;case"image":G("error",t),G("load",t);break;case"details":G("toggle",t);break;case"embed":case"source":case"link":G("error",t),G("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in r)if(r.hasOwnProperty(g)&&(e=r[g],e!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(y(137,a));default:tt(t,a,g,e,r,null)}return;default:if(rd(a)){for(f in r)r.hasOwnProperty(f)&&(e=r[f],e!==void 0&&U1(t,a,f,e,r,void 0));return}}for(d in r)r.hasOwnProperty(d)&&(e=r[d],e!=null&&tt(t,a,d,e,r,null))}function Wf(t,a,r,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,o=null,d=null,h=null,g=null,f=null;for(x in r){var k=r[x];if(r.hasOwnProperty(x)&&k!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":h=k;default:e.hasOwnProperty(x)||tt(t,a,x,null,e,k)}}for(var p in e){var x=e[p];if(k=r[p],e.hasOwnProperty(p)&&(x!=null||k!=null))switch(p){case"type":n=x;break;case"name":i=x;break;case"checked":g=x;break;case"defaultChecked":f=x;break;case"value":o=x;break;case"defaultValue":d=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(y(137,a));break;default:x!==k&&tt(t,a,p,x,e,k)}}u1(t,o,d,h,g,f,n,i);return;case"select":x=o=d=p=null;for(n in r)if(h=r[n],r.hasOwnProperty(n)&&h!=null)switch(n){case"value":break;case"multiple":x=h;default:e.hasOwnProperty(n)||tt(t,a,n,null,e,h)}for(i in e)if(n=e[i],h=r[i],e.hasOwnProperty(i)&&(n!=null||h!=null))switch(i){case"value":p=n;break;case"defaultValue":d=n;break;case"multiple":o=n;default:n!==h&&tt(t,a,i,n,e,h)}a=d,r=o,e=x,p!=null?Ie(t,!!r,p,!1):!!e!=!!r&&(a!=null?Ie(t,!!r,a,!0):Ie(t,!!r,r?[]:"",!1));return;case"textarea":x=p=null;for(d in r)if(i=r[d],r.hasOwnProperty(d)&&i!=null&&!e.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:tt(t,a,d,null,e,i)}for(o in e)if(i=e[o],n=r[o],e.hasOwnProperty(o)&&(i!=null||n!=null))switch(o){case"value":p=i;break;case"defaultValue":x=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(y(91));break;default:i!==n&&tt(t,a,o,i,e,n)}Dh(t,p,x);return;case"option":for(var w in r)p=r[w],r.hasOwnProperty(w)&&p!=null&&!e.hasOwnProperty(w)&&(w==="selected"?t.selected=!1:tt(t,a,w,null,e,p));for(h in e)p=e[h],x=r[h],e.hasOwnProperty(h)&&p!==x&&(p!=null||x!=null)&&(h==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":tt(t,a,h,p,e,x));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in r)p=r[b],r.hasOwnProperty(b)&&p!=null&&!e.hasOwnProperty(b)&&tt(t,a,b,null,e,p);for(g in e)if(p=e[g],x=r[g],e.hasOwnProperty(g)&&p!==x&&(p!=null||x!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(y(137,a));break;default:tt(t,a,g,p,e,x)}return;default:if(rd(a)){for(var z in r)p=r[z],r.hasOwnProperty(z)&&p!==void 0&&!e.hasOwnProperty(z)&&U1(t,a,z,void 0,e,p);for(f in e)p=e[f],x=r[f],!e.hasOwnProperty(f)||p===x||p===void 0&&x===void 0||U1(t,a,f,p,e,x);return}}for(var s in r)p=r[s],r.hasOwnProperty(s)&&p!=null&&!e.hasOwnProperty(s)&&tt(t,a,s,null,e,p);for(k in e)p=e[k],x=r[k],!e.hasOwnProperty(k)||p===x||p==null&&x==null||tt(t,a,k,p,e,x)}function th(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Hf(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,r=performance.getEntriesByType("resource"),e=0;e<r.length;e++){var i=r[e],n=i.transferSize,o=i.initiatorType,d=i.duration;if(n&&d&&th(o)){for(o=0,d=i.responseEnd,e+=1;e<r.length;e++){var h=r[e],g=h.startTime;if(g>d)break;var f=h.transferSize,k=h.initiatorType;f&&th(k)&&(h=h.responseEnd,o+=f*(h<d?1:(d-g)/(h-g)))}if(--e,a+=8*(n+o)/(i.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Z1=null,q1=null;function sl(t){return t.nodeType===9?t:t.ownerDocument}function ah(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ys(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function G1(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var P2=null;function Sf(){var t=window.event;return t&&t.type==="popstate"?t===P2?!1:(P2=t,!0):(P2=null,!1)}var Xs=typeof setTimeout=="function"?setTimeout:void 0,Af=typeof clearTimeout=="function"?clearTimeout:void 0,rh=typeof Promise=="function"?Promise:void 0,Vf=typeof queueMicrotask=="function"?queueMicrotask:typeof rh<"u"?function(t){return rh.resolve(null).then(t).catch(zf)}:Xs;function zf(t){setTimeout(function(){throw t})}function Rr(t){return t==="head"}function eh(t,a){var r=a,e=0;do{var i=r.nextSibling;if(t.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"||r==="/&"){if(e===0){t.removeChild(i),pi(a);return}e--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")e++;else if(r==="html")fn(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,fn(r);for(var n=r.firstChild;n;){var o=n.nextSibling,d=n.nodeName;n[_n]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&n.rel.toLowerCase()==="stylesheet"||r.removeChild(n),n=o}}else r==="body"&&fn(t.ownerDocument.body);r=i}while(r);pi(a)}function ih(t,a){var r=t;t=0;do{var e=r.nextSibling;if(r.nodeType===1?a?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(a?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),e&&e.nodeType===8)if(r=e.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=e}while(r)}function Y1(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var r=a;switch(a=a.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Y1(r),ad(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function _f(t,a,r,e){for(;t.nodeType===1;){var i=r;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[_n])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=Ta(t.nextSibling),t===null)break}return null}function Tf(t,a,r){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=Ta(t.nextSibling),t===null))return null;return t}function Qs(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ta(t.nextSibling),t===null))return null;return t}function X1(t){return t.data==="$?"||t.data==="$~"}function Q1(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Nf(t,a){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||r.readyState!=="loading")a();else{var e=function(){a(),r.removeEventListener("DOMContentLoaded",e)};r.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function Ta(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var K1=null;function nh(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(a===0)return Ta(t.nextSibling);a--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||a++}t=t.nextSibling}return null}function oh(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(a===0)return t;a--}else r!=="/$"&&r!=="/&"||a++}t=t.previousSibling}return null}function Ks(t,a,r){switch(a=sl(r),t){case"html":if(t=a.documentElement,!t)throw Error(y(452));return t;case"head":if(t=a.head,!t)throw Error(y(453));return t;case"body":if(t=a.body,!t)throw Error(y(454));return t;default:throw Error(y(451))}}function fn(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ad(t)}var Na=new Map,lh=new Set;function gl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Lr=$.d;$.d={f:Ef,r:Df,D:Of,C:Uf,L:Zf,m:qf,X:Yf,S:Gf,M:Xf};function Ef(){var t=Lr.f(),a=Sl();return t||a}function Df(t){var a=vi(t);a!==null&&a.tag===5&&a.type==="form"?Uu(a):Lr.r(t)}var Mi=typeof document>"u"?null:document;function Js(t,a,r){var e=Mi;if(e&&typeof a=="string"&&a){var i=Aa(a);i='link[rel="'+t+'"][href="'+i+'"]',typeof r=="string"&&(i+='[crossorigin="'+r+'"]'),lh.has(i)||(lh.add(i),t={rel:t,crossOrigin:r,href:a},e.querySelector(i)===null&&(a=e.createElement("link"),Kt(a,"link",t),Et(a),e.head.appendChild(a)))}}function Of(t){Lr.D(t),Js("dns-prefetch",t,null)}function Uf(t,a){Lr.C(t,a),Js("preconnect",t,a)}function Zf(t,a,r){Lr.L(t,a,r);var e=Mi;if(e&&t&&a){var i='link[rel="preload"][as="'+Aa(a)+'"]';a==="image"&&r&&r.imageSrcSet?(i+='[imagesrcset="'+Aa(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(i+='[imagesizes="'+Aa(r.imageSizes)+'"]')):i+='[href="'+Aa(t)+'"]';var n=i;switch(a){case"style":n=gi(t);break;case"script":n=mi(t)}Na.has(n)||(t=ct({rel:"preload",href:a==="image"&&r&&r.imageSrcSet?void 0:t,as:a},r),Na.set(n,t),e.querySelector(i)!==null||a==="style"&&e.querySelector(Un(n))||a==="script"&&e.querySelector(Zn(n))||(a=e.createElement("link"),Kt(a,"link",t),Et(a),e.head.appendChild(a)))}}function qf(t,a){Lr.m(t,a);var r=Mi;if(r&&t){var e=a&&typeof a.as=="string"?a.as:"script",i='link[rel="modulepreload"][as="'+Aa(e)+'"][href="'+Aa(t)+'"]',n=i;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=mi(t)}if(!Na.has(n)&&(t=ct({rel:"modulepreload",href:t},a),Na.set(n,t),r.querySelector(i)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Zn(n)))return}e=r.createElement("link"),Kt(e,"link",t),Et(e),r.head.appendChild(e)}}}function Gf(t,a,r){Lr.S(t,a,r);var e=Mi;if(e&&t){var i=$e(e).hoistableStyles,n=gi(t);a=a||"default";var o=i.get(n);if(!o){var d={loading:0,preload:null};if(o=e.querySelector(Un(n)))d.loading=5;else{t=ct({rel:"stylesheet",href:t,"data-precedence":a},r),(r=Na.get(n))&&Ud(t,r);var h=o=e.createElement("link");Et(h),Kt(h,"link",t),h._p=new Promise(function(g,f){h.onload=g,h.onerror=f}),h.addEventListener("load",function(){d.loading|=1}),h.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Oo(o,a,e)}o={type:"stylesheet",instance:o,count:1,state:d},i.set(n,o)}}}function Yf(t,a){Lr.X(t,a);var r=Mi;if(r&&t){var e=$e(r).hoistableScripts,i=mi(t),n=e.get(i);n||(n=r.querySelector(Zn(i)),n||(t=ct({src:t,async:!0},a),(a=Na.get(i))&&Zd(t,a),n=r.createElement("script"),Et(n),Kt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function Xf(t,a){Lr.M(t,a);var r=Mi;if(r&&t){var e=$e(r).hoistableScripts,i=mi(t),n=e.get(i);n||(n=r.querySelector(Zn(i)),n||(t=ct({src:t,async:!0,type:"module"},a),(a=Na.get(i))&&Zd(t,a),n=r.createElement("script"),Et(n),Kt(n,"link",t),r.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(i,n))}}function dh(t,a,r,e){var i=(i=Tr.current)?gl(i):null;if(!i)throw Error(y(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(a=gi(r.href),r=$e(i).hoistableStyles,e=r.get(a),e||(e={type:"style",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=gi(r.href);var n=$e(i).hoistableStyles,o=n.get(t);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,o),(n=i.querySelector(Un(t)))&&!n._p&&(o.instance=n,o.state.loading=5),Na.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Na.set(t,r),n||Qf(i,t,r,o.state))),a&&e===null)throw Error(y(528,""));return o}if(a&&e!==null)throw Error(y(529,""));return null;case"script":return a=r.async,r=r.src,typeof r=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=mi(r),r=$e(i).hoistableScripts,e=r.get(a),e||(e={type:"script",instance:null,count:0,state:null},r.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(y(444,t))}}function gi(t){return'href="'+Aa(t)+'"'}function Un(t){return'link[rel="stylesheet"]['+t+"]"}function Rs(t){return ct({},t,{"data-precedence":t.precedence,precedence:null})}function Qf(t,a,r,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),Kt(a,"link",r),Et(a),t.head.appendChild(a))}function mi(t){return'[src="'+Aa(t)+'"]'}function Zn(t){return"script[async]"+t}function ch(t,a,r){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+Aa(r.href)+'"]');if(e)return a.instance=e,Et(e),e;var i=ct({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Et(e),Kt(e,"style",i),Oo(e,r.precedence,t),a.instance=e;case"stylesheet":i=gi(r.href);var n=t.querySelector(Un(i));if(n)return a.state.loading|=4,a.instance=n,Et(n),n;e=Rs(r),(i=Na.get(i))&&Ud(e,i),n=(t.ownerDocument||t).createElement("link"),Et(n);var o=n;return o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),Kt(n,"link",e),a.state.loading|=4,Oo(n,r.precedence,t),a.instance=n;case"script":return n=mi(r.src),(i=t.querySelector(Zn(n)))?(a.instance=i,Et(i),i):(e=r,(i=Na.get(n))&&(e=ct({},r),Zd(e,i)),t=t.ownerDocument||t,i=t.createElement("script"),Et(i),Kt(i,"link",e),t.head.appendChild(i),a.instance=i);case"void":return null;default:throw Error(y(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(e=a.instance,a.state.loading|=4,Oo(e,r.precedence,t));return a.instance}function Oo(t,a,r){for(var e=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=e.length?e[e.length-1]:null,n=i,o=0;o<e.length;o++){var d=e[o];if(d.dataset.precedence===a)n=d;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=r.nodeType===9?r.head:r,a.insertBefore(t,a.firstChild))}function Ud(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function Zd(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Uo=null;function hh(t,a,r){if(Uo===null){var e=new Map,i=Uo=new Map;i.set(r,e)}else i=Uo,e=i.get(r),e||(e=new Map,i.set(r,e));if(e.has(t))return e;for(e.set(t,null),r=r.getElementsByTagName(t),i=0;i<r.length;i++){var n=r[i];if(!(n[_n]||n[Yt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var o=n.getAttribute(a)||"";o=t+o;var d=e.get(o);d?d.push(n):e.set(o,[n])}}return e}function uh(t,a,r){t=t.ownerDocument||t,t.head.insertBefore(r,a==="title"?t.querySelector("head > title"):null)}function Kf(t,a,r){if(r===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;return a.rel==="stylesheet"?(t=a.disabled,typeof a.precedence=="string"&&t==null):!0;case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Fs(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Jf(t,a,r,e){if(r.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var i=gi(e.href),n=a.querySelector(Un(i));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=pl.bind(t),a.then(t,t)),r.state.loading|=4,r.instance=n,Et(n);return}n=a.ownerDocument||a,e=Rs(e),(i=Na.get(i))&&Ud(e,i),n=n.createElement("link"),Et(n);var o=n;o._p=new Promise(function(d,h){o.onload=d,o.onerror=h}),Kt(n,"link",e),r.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,a),(a=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=pl.bind(t),a.addEventListener("load",r),a.addEventListener("error",r))}}var t1=0;function Rf(t,a){return t.stylesheets&&t.count===0&&Zo(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var e=setTimeout(function(){if(t.stylesheets&&Zo(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&t1===0&&(t1=62500*Hf());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Zo(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>t1?50:800)+a);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(i)}}:null}function pl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zo(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var fl=null;function Zo(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fl=new Map,a.forEach(Ff,t),fl=null,pl.call(t))}function Ff(t,a){if(!(a.state.loading&4)){var r=fl.get(t);if(r)var e=r.get(null);else{r=new Map,fl.set(t,r);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var o=i[n];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(r.set(o.dataset.precedence,o),e=o)}e&&r.set(null,e)}i=a.instance,o=i.getAttribute("data-precedence"),n=r.get(o)||e,n===e&&r.set(null,i),r.set(o,i),this.count++,e=pl.bind(this),i.addEventListener("load",e),i.addEventListener("error",e),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),a.state.loading|=4}}var jn={$$typeof:dr,Provider:null,Consumer:null,_currentValue:oe,_currentValue2:oe,_threadCount:0};function $f(t,a,r,e,i,n,o,d,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=B2(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=B2(0),this.hiddenUpdates=B2(null),this.identifierPrefix=e,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function $s(t,a,r,e,i,n,o,d,h,g,f,k){return t=new $f(t,a,r,o,h,g,f,k,d),a=1,n===!0&&(a|=24),n=va(3,null,null,a),t.current=n,n.stateNode=t,a=gd(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:r,cache:a},vd(n),t}function Is(t){return t?(t=Ke,t):Ke}function Ps(t,a,r,e,i,n){i=Is(i),e.context===null?e.context=i:e.pendingContext=i,e=Er(a),e.payload={element:r},n=n===void 0?null:n,n!==null&&(e.callback=n),r=Dr(t,e,a),r!==null&&(la(r,t,a),ln(r,t,a))}function sh(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<a?r:a}}function qd(t,a){sh(t,a),(t=t.alternate)&&sh(t,a)}function tg(t){if(t.tag===13||t.tag===31){var a=Le(t,67108864);a!==null&&la(a,t,67108864),qd(t,67108864)}}function gh(t){if(t.tag===13||t.tag===31){var a=ma();a=P1(a);var r=Le(t,a);r!==null&&la(r,t,a),qd(t,a)}}var vl=!0;function If(t,a,r,e){var i=T.T;T.T=null;var n=$.p;try{$.p=2,Gd(t,a,r,e)}finally{$.p=n,T.T=i}}function Pf(t,a,r,e){var i=T.T;T.T=null;var n=$.p;try{$.p=8,Gd(t,a,r,e)}finally{$.p=n,T.T=i}}function Gd(t,a,r,e){if(vl){var i=J1(e);if(i===null)I2(t,a,e,kl,r),ph(t,e);else if(av(i,t,a,r,e))e.stopPropagation();else if(ph(t,e),a&4&&-1<tv.indexOf(t)){for(;i!==null;){var n=vi(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var o=ee(n.pendingLanes);if(o!==0){var d=n;for(d.pendingLanes|=2,d.entangledLanes|=2;o;){var h=1<<31-Ma(o);d.entanglements[1]|=h,o&=~h}Ra(n),(F&6)===0&&(ol=xa()+500,On(0,!1))}}break;case 31:case 13:d=Le(n,2),d!==null&&la(d,n,2),Sl(),qd(n,2)}if(n=J1(e),n===null&&I2(t,a,e,kl,r),n===i)break;i=n}i!==null&&e.stopPropagation()}else I2(t,a,e,null,r)}}function J1(t){return t=ed(t),Yd(t)}var kl=null;function Yd(t){if(kl=null,t=Ze(t),t!==null){var a=Sn(t);if(a===null)t=null;else{var r=a.tag;if(r===13){if(t=Mh(a),t!==null)return t;t=null}else if(r===31){if(t=mh(a),t!==null)return t;t=null}else if(r===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return kl=t,null}function ag(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Up()){case bh:return 2;case Bh:return 8;case Qo:case Zp:return 32;case jh:return 268435456;default:return 32}default:return 32}}var R1=!1,Zr=null,qr=null,Gr=null,Wn=new Map,Hn=new Map,Hr=[],tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ph(t,a){switch(t){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":Wn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(a.pointerId)}}function Ri(t,a,r,e,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:r,eventSystemFlags:e,nativeEvent:n,targetContainers:[i]},a!==null&&(a=vi(a),a!==null&&tg(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,i!==null&&a.indexOf(i)===-1&&a.push(i),t)}function av(t,a,r,e,i){switch(a){case"focusin":return Zr=Ri(Zr,t,a,r,e,i),!0;case"dragenter":return qr=Ri(qr,t,a,r,e,i),!0;case"mouseover":return Gr=Ri(Gr,t,a,r,e,i),!0;case"pointerover":var n=i.pointerId;return Wn.set(n,Ri(Wn.get(n)||null,t,a,r,e,i)),!0;case"gotpointercapture":return n=i.pointerId,Hn.set(n,Ri(Hn.get(n)||null,t,a,r,e,i)),!0}return!1}function rg(t){var a=Ze(t.target);if(a!==null){var r=Sn(a);if(r!==null){if(a=r.tag,a===13){if(a=Mh(r),a!==null){t.blockedOn=a,$c(t.priority,function(){gh(r)});return}}else if(a===31){if(a=mh(r),a!==null){t.blockedOn=a,$c(t.priority,function(){gh(r)});return}}else if(a===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var r=J1(t.nativeEvent);if(r===null){r=t.nativeEvent;var e=new r.constructor(r.type,r);g1=e,r.target.dispatchEvent(e),g1=null}else return a=vi(r),a!==null&&tg(a),t.blockedOn=r,!1;a.shift()}return!0}function fh(t,a,r){qo(t)&&r.delete(a)}function rv(){R1=!1,Zr!==null&&qo(Zr)&&(Zr=null),qr!==null&&qo(qr)&&(qr=null),Gr!==null&&qo(Gr)&&(Gr=null),Wn.forEach(fh),Hn.forEach(fh)}function Bo(t,a){t.blockedOn===a&&(t.blockedOn=null,R1||(R1=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,rv)))}var jo=null;function vh(t){jo!==t&&(jo=t,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,function(){jo===t&&(jo=null);for(var a=0;a<t.length;a+=3){var r=t[a],e=t[a+1],i=t[a+2];if(typeof e!="function"){if(Yd(e||r)===null)continue;break}var n=vi(r);n!==null&&(t.splice(a,3),a-=3,H1(n,{pending:!0,data:i,method:r.method,action:e},e,i))}}))}function pi(t){function a(h){return Bo(h,t)}Zr!==null&&Bo(Zr,t),qr!==null&&Bo(qr,t),Gr!==null&&Bo(Gr,t),Wn.forEach(a),Hn.forEach(a);for(var r=0;r<Hr.length;r++){var e=Hr[r];e.blockedOn===t&&(e.blockedOn=null)}for(;0<Hr.length&&(r=Hr[0],r.blockedOn===null);)rg(r),r.blockedOn===null&&Hr.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(e=0;e<r.length;e+=3){var i=r[e],n=r[e+1],o=i[da]||null;if(typeof n=="function")o||vh(r);else if(o){var d=null;if(n&&n.hasAttribute("formAction")){if(i=n,o=n[da]||null)d=o.formAction;else if(Yd(i)!==null)continue}else d=o.action;typeof d=="function"?r[e+1]=d:(r.splice(e,3),e-=3),vh(r)}}}function eg(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function a(){i!==null&&(i(),i=null),e||setTimeout(r,20)}function r(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(r,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),i!==null&&(i(),i=null)}}}function Xd(t){this._internalRoot=t}zl.prototype.render=Xd.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(y(409));var r=a.current,e=ma();Ps(r,e,t,a,null,null)};zl.prototype.unmount=Xd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;Ps(t.current,2,null,t,null,null),Sl(),a[fi]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var a=Vh();t={blockedOn:null,target:t,priority:a};for(var r=0;r<Hr.length&&a!==0&&a<Hr[r].priority;r++);Hr.splice(r,0,t),r===0&&rg(t)}};var kh=xh.version;if(kh!=="19.2.8")throw Error(y(527,kh,"19.2.8"));$.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=zp(a),t=t!==null?yh(t):null,t=t===null?null:t.stateNode,t};var ev={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Fi.isDisabled&&Fi.supportsFiber))try{An=Fi.inject(ev),La=Fi}catch{}var Fi;_l.createRoot=function(t,a){if(!Lh(t))throw Error(y(299));var r=!1,e="",i=Ju,n=Ru,o=Fu;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError)),a=$s(t,1,!1,null,null,r,e,null,i,n,o,eg),t[fi]=a.current,Od(t),new Xd(a)};_l.hydrateRoot=function(t,a,r){if(!Lh(t))throw Error(y(299));var e=!1,i="",n=Ju,o=Ru,d=Fu,h=null;return r!=null&&(r.unstable_strictMode===!0&&(e=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onUncaughtError!==void 0&&(n=r.onUncaughtError),r.onCaughtError!==void 0&&(o=r.onCaughtError),r.onRecoverableError!==void 0&&(d=r.onRecoverableError),r.formState!==void 0&&(h=r.formState)),a=$s(t,1,!0,a,r??null,e,i,h,n,o,d,eg),a.context=Is(null),r=a.current,e=ma(),e=P1(e),i=Er(e),i.callback=null,Dr(r,i,e),r=e,a.current.lanes=r,zn(a,r),Ra(a),t[fi]=a.current,Od(t),new zl(a)};_l.version="19.2.8"});var lg=mr((Zv,og)=>{"use strict";function ng(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ng)}catch(t){console.error(t)}}ng(),og.exports=ig()});var St=te(Pa()),D4=te(lg());var yi=te(Pa(),1);var Qd=te(Pa(),1),Kd={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jd=Qd.default.createContext&&Qd.default.createContext(Kd);var iv=["attr","size","title"];function nv(t,a){if(t==null)return{};var r,e,i=ov(t,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)r=n[e],a.indexOf(r)===-1&&{}.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function ov(t,a){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(a.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var e in r)({}).hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t},Tl.apply(null,arguments)}function dg(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,e)}return r}function Nl(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?dg(Object(r),!0).forEach(function(e){lv(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):dg(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function lv(t,a,r){return(a=dv(a))in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function dv(t){var a=cv(t,"string");return typeof a=="symbol"?a:a+""}function cv(t,a){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var e=r.call(t,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function cg(t){return t&&t.map((a,r)=>yi.default.createElement(a.tag,Nl({key:r},a.attr),cg(a.child)))}function Q(t){return a=>yi.default.createElement(hv,Tl({attr:Nl({},t.attr)},a),cg(t.child))}function hv(t){var a=r=>{var e=t.attr,i=t.size,n=t.title,o=nv(t,iv),d=i||r.size||"1em",h;return r.className&&(h=r.className),t.className&&(h=(h?h+" ":"")+t.className),yi.default.createElement("svg",Tl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,e,o,{className:h,style:Nl(Nl({color:t.color||r.color},r.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),n&&yi.default.createElement("title",null,n),t.children)};return Jd!==void 0?yi.default.createElement(Jd.Consumer,null,r=>a(r)):a(Kd)}function hg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 6 6 18"},child:[]},{tag:"path",attr:{d:"m6 6 12 12"},child:[]}]})(t)}function ug(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M22 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(t)}function sg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(t)}function gg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"16 11 18 13 22 9"},child:[]}]})(t)}function pg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 14 4 9l5-5"},child:[]},{tag:"path",attr:{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"},child:[]}]})(t)}function fg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"},child:[]},{tag:"path",attr:{d:"M12 9v4"},child:[]},{tag:"path",attr:{d:"M12 17h.01"},child:[]}]})(t)}function vg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 6h18"},child:[]},{tag:"path",attr:{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"},child:[]},{tag:"path",attr:{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"},child:[]},{tag:"line",attr:{x1:"10",x2:"10",y1:"11",y2:"17"},child:[]},{tag:"line",attr:{x1:"14",x2:"14",y1:"11",y2:"17"},child:[]}]})(t)}function kg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"},child:[]}]})(t)}function xg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function Lg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"path",attr:{d:"m21 21-4.3-4.3"},child:[]}]})(t)}function Mg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"},child:[]},{tag:"path",attr:{d:"M3 3v5h5"},child:[]}]})(t)}function mg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m17 2 4 4-4 4"},child:[]},{tag:"path",attr:{d:"M3 11v-1a4 4 0 0 1 4-4h14"},child:[]},{tag:"path",attr:{d:"m7 22-4-4 4-4"},child:[]},{tag:"path",attr:{d:"M21 13v1a4 4 0 0 1-4 4H3"},child:[]}]})(t)}function yg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]},{tag:"path",attr:{d:"M12 5v14"},child:[]}]})(t)}function wg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"6 3 20 12 6 21 6 3"},child:[]}]})(t)}function Cg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"},child:[]},{tag:"path",attr:{d:"m15 5 4 4"},child:[]}]})(t)}function bg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"14",y:"4",width:"4",height:"16",rx:"1"},child:[]},{tag:"rect",attr:{x:"6",y:"4",width:"4",height:"16",rx:"1"},child:[]}]})(t)}function Bg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"18",x:"3",y:"3",rx:"2"},child:[]},{tag:"path",attr:{d:"M9 3v18"},child:[]}]})(t)}function jg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",x2:"9",y1:"12",y2:"12"},child:[]}]})(t)}function Wg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(t)}function Hg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m3 17 2 2 4-4"},child:[]},{tag:"path",attr:{d:"m3 7 2 2 4-4"},child:[]},{tag:"path",attr:{d:"M13 6h8"},child:[]},{tag:"path",attr:{d:"M13 12h8"},child:[]},{tag:"path",attr:{d:"M13 18h8"},child:[]}]})(t)}function Sg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"9",cy:"19",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"15",cy:"19",r:"1"},child:[]}]})(t)}function Ag(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"},child:[]},{tag:"path",attr:{d:"M22 10v6"},child:[]},{tag:"path",attr:{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"},child:[]}]})(t)}function Vg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"},child:[]}]})(t)}function zg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(t)}function _g(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"},child:[]},{tag:"path",attr:{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"},child:[]},{tag:"path",attr:{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"},child:[]},{tag:"path",attr:{d:"m2 2 20 20"},child:[]}]})(t)}function Tg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"5",r:"1"},child:[]},{tag:"circle",attr:{cx:"12",cy:"19",r:"1"},child:[]}]})(t)}function Ng(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"},child:[]}]})(t)}function Eg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m9 12 2 2 4-4"},child:[]}]})(t)}function Dg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",x2:"12",y1:"8",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",x2:"12.01",y1:"16",y2:"16"},child:[]}]})(t)}function Og(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m18 15-6-6-6 6"},child:[]}]})(t)}function Ug(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m9 18 6-6-6-6"},child:[]}]})(t)}function Zg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m6 9 6 6 6-6"},child:[]}]})(t)}function qg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M3 10h5"},child:[]},{tag:"path",attr:{d:"M17.5 17.5 16 16.3V14"},child:[]},{tag:"circle",attr:{cx:"16",cy:"16",r:"6"},child:[]}]})(t)}function Gg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"},child:[]},{tag:"path",attr:{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"},child:[]}]})(t)}function Yg(t){return Q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"m14.31 8 5.74 9.94"},child:[]},{tag:"path",attr:{d:"M9.69 8h11.48"},child:[]},{tag:"path",attr:{d:"m7.38 12 5.74-9.94"},child:[]},{tag:"path",attr:{d:"M9.69 16 3.95 6.06"},child:[]},{tag:"path",attr:{d:"M14.31 16H2.83"},child:[]},{tag:"path",attr:{d:"m16.62 12-5.74 9.94"},child:[]}]})(t)}var Xg=Hg,El=ug,Qg=jg,Rd=Bg,Kg=Ag,Jg=Vg,Rg=xg,Dl=sg,Fg=Tg,$g=Sg,wi=yg;var Ig=Eg,Ci=Dg,Fd=fg,Pg=Ng,$d=vg,t4=Og,Ol=Zg;var qn=mg;var bi=hg,Id=Wg,a4=bg,r4=wg,Pd=Cg,Ul=Yg,e4=Lg,i4=qg,n4=gg,o4=kg,Zl=_g,l4=zg,d4=Gg,c4=pg,tc=Mg,h4=Ug;var Lt=te(Pa());var S=te(Pa());var u4={member:Dl,coworker:n4,admin_staff:Jg,leader:o4,pastor:Kg,admin:Rg},s4=["leader","pastor","admin"],ac=[{id:"work",label:"工作日誌",Icon:Xg,href:"work.html",roles:["pastor","admin_staff","admin"]},{id:"serve",label:"服事管理",Icon:El,href:""},{id:"venue",label:"場地預約",Icon:i4,href:""}],uv=t=>{let a=String(t||"").trim();return/^[\u4e00-\u9fff]+$/.test(a)?a.length===4?a.slice(2):a.length>=2&&a.length<=3?a.slice(1):a:a},g4=["pastor","admin_staff","admin"],p4=(t,a)=>!t.roles||t.roles.includes(a),sv=t=>{let a=String(t||"").trim().toLowerCase();return a.includes("@")?a:`${a}@tbc.gmail.com`},f4=async(t,a)=>{let r=(a&&a.user&&a.user.email?a.user.email.split("@")[0]:"")||"使用者";try{let e=await t.rpc("work_current_member");if(e.error)throw e.error;let i=await t.rpc("work_list_people");if(i.error)throw i.error;let n=(i.data||[]).find(o=>o.member_id===e.data);if(!n)throw new Error("not in list");return{status:"ok",name:n.name,role:n.role,memberId:n.member_id}}catch{return{status:"denied",name:r,role:"member",memberId:null}}},v4=({active:t,shell:a})=>{let[r,e]=(0,S.useState)(()=>{try{return localStorage.getItem("tbcSidebarCollapsed")==="1"}catch{return!1}}),i=()=>e(w=>{let b=!w;try{localStorage.setItem("tbcSidebarCollapsed",b?"1":"0")}catch{}return b}),[n,o]=(0,S.useState)(!1),[d,h]=(0,S.useState)(""),g=(0,S.useRef)(null),f=a.identity||{name:"",role:"member",status:"loading"},k=u4[f.role]||Dl,p=s4.includes(f.role),x=w=>{h(`${w} 尚未開放`),clearTimeout(g.current),g.current=setTimeout(()=>h(""),2200)};return S.default.createElement("aside",{"data-sb":r?"collapsed":"open","aria-label":"主選單",className:`tbc-sb relative shrink-0 h-full z-30 flex flex-col justify-between bg-white border-r border-slate-200 transition-[width] duration-200 ease-in-out ${r?"w-[72px]":"w-64"}`},S.default.createElement("div",{className:"flex flex-col"},S.default.createElement("div",{className:`flex items-center h-16 ${r?"justify-center":"gap-3 px-4"}`},S.default.createElement("button",{onClick:r?i:void 0,title:r?"開啟側邊欄":void 0,"aria-label":r?"開啟側邊欄":"TBC ONE",className:`tbc-sb-logobtn group relative w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${r?"cursor-pointer":"cursor-default"}`},S.default.createElement("span",{className:`absolute inset-0 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center ${r?"group-hover:opacity-0":""} transition-opacity`},S.default.createElement(Ul,{size:20,strokeWidth:2})),r&&S.default.createElement("span",{className:"absolute inset-0 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"},S.default.createElement(Rd,{size:18}))),!r&&S.default.createElement(S.default.Fragment,null,S.default.createElement("a",{href:"index.html",className:"tbc-sb-title flex-1 text-[17px] font-semibold text-slate-900 hover:text-indigo-600 transition-colors"},"TBC ONE"),S.default.createElement("button",{onClick:i,title:"隱藏側邊欄","aria-label":"隱藏側邊欄",className:"tbc-sb-toggle w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"},S.default.createElement(Rd,{size:18})))),S.default.createElement("nav",{className:"flex flex-col gap-1 px-3"},ac.map(w=>{let b=t===w.id,z=`tbc-sb-item flex items-center ${r?"justify-center w-12 h-12 mx-auto":"gap-3 px-4 h-11 w-full"} rounded-full text-[15px] transition-colors ${b?"bg-indigo-50 text-indigo-600 font-semibold":"text-slate-600 hover:bg-slate-100"}`,s=S.default.createElement(S.default.Fragment,null,S.default.createElement(w.Icon,{size:20,strokeWidth:1.75,className:"shrink-0"}),!r&&S.default.createElement("span",{className:"tbc-sb-label whitespace-nowrap"},w.label));return w.href?b?S.default.createElement("div",{key:w.id,className:z,title:w.label,"aria-current":"page"},s):S.default.createElement("a",{key:w.id,href:w.href,className:z,title:w.label},s):S.default.createElement("button",{key:w.id,type:"button",onClick:()=>x(w.label),className:z,title:w.label},s)}))),S.default.createElement("div",{className:"relative p-3 border-t border-slate-100"},S.default.createElement("button",{type:"button",onClick:()=>o(w=>!w),"aria-haspopup":"menu","aria-expanded":n,className:`tbc-sb-user flex items-center rounded-full transition-colors ${r?"justify-center w-12 h-12 mx-auto bg-slate-100 hover:bg-slate-200":"gap-3 px-4 h-12 w-full hover:bg-slate-100"}`},r?S.default.createElement("span",{className:"text-[13px] text-slate-900 truncate max-w-full px-1"},uv(f.name)):S.default.createElement(S.default.Fragment,null,S.default.createElement(k,{size:20,strokeWidth:1.75,className:`shrink-0 ${p?"text-amber-500":"text-slate-500"}`}),S.default.createElement("span",{className:"tbc-sb-label truncate text-[15px] text-slate-900"},f.name))),n&&S.default.createElement(S.default.Fragment,null,S.default.createElement("div",{className:"fixed inset-0 z-40",onClick:()=>o(!1)}),S.default.createElement("div",{role:"menu",className:`absolute z-50 w-40 bg-white rounded-lg border border-slate-200 shadow-hover-soft p-1.5 animate-fade-in ${r?"left-full bottom-3 ml-2":"left-3 bottom-full mb-1"}`},S.default.createElement("button",{role:"menuitem",onClick:()=>{o(!1),a.onLogout()},className:"tbc-sb-logout w-full flex items-center gap-2.5 px-3 h-10 rounded-full text-[15px] text-slate-700 hover:bg-slate-100 transition-colors"},S.default.createElement(Qg,{size:18,strokeWidth:1.75}),"登出")))),d&&S.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},d))},k4=({supabase:t,notice:a})=>{let[r,e]=(0,S.useState)(!1),[i,n]=(0,S.useState)(""),[o,d]=(0,S.useState)(""),[h,g]=(0,S.useState)(!1),[f,k]=(0,S.useState)(""),p=async w=>{if(w.preventDefault(),!i.trim()||!o||h)return;g(!0),k("");let{error:b}=await t.auth.signInWithPassword({email:sv(i),password:o});g(!1),b&&k("帳號或密碼不正確，再試一次")},x="w-full h-12 px-4 rounded-full bg-slate-100 outline-none text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-indigo-500/40 transition-colors";return S.default.createElement("form",{onSubmit:p,className:"w-full max-w-sm mx-auto space-y-3"},S.default.createElement("input",{value:i,onChange:w=>n(w.target.value),placeholder:"帳號",autoComplete:"username",className:x}),S.default.createElement("div",{className:"relative"},S.default.createElement("input",{type:r?"text":"password",value:o,onChange:w=>d(w.target.value),placeholder:"密碼",autoComplete:"current-password",className:x+" pr-12"}),S.default.createElement("button",{type:"button",onClick:()=>e(w=>!w),title:r?"隱藏密碼":"顯示密碼","aria-label":r?"隱藏密碼":"顯示密碼",className:"absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"},r?S.default.createElement(Zl,{size:18}):S.default.createElement(l4,{size:18}))),(f||a)&&S.default.createElement("div",{className:"flex items-center gap-2 text-sm text-red-600 px-2"},S.default.createElement(Ci,{size:16}),f||a),S.default.createElement("button",{type:"submit",disabled:h||!i.trim()||!o,className:"w-full h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors disabled:opacity-40"},h?"登入中…":"登入"))},x4=({shell:t})=>{let a=t.identity||{},r=u4[a.role]||Dl,e=s4.includes(a.role);return S.default.createElement("div",{className:"flex flex-col items-center gap-3 mt-14"},S.default.createElement("p",{className:"text-sm text-slate-500"},"準備好了，開始或",S.default.createElement("button",{type:"button",onClick:t.onLogout,className:"tbc-logout ml-0.5 text-indigo-600 hover:text-indigo-700 underline underline-offset-4"},"登出")))};var gv=({shell:t})=>{let[a,r]=(0,Lt.useState)(""),e=(0,Lt.useRef)(null),i=t.identity||{},n=ac.filter(d=>p4(d,i.role)),o=d=>{r(`${d} 尚未開放`),clearTimeout(e.current),e.current=setTimeout(()=>r(""),2200)};return Lt.default.createElement("div",{className:"relative h-[100dvh] w-full bg-white overflow-hidden"},Lt.default.createElement("main",{className:"h-full overflow-auto custom-scrollbar"},Lt.default.createElement("div",{className:"max-w-3xl mx-auto px-6 pt-24 pb-16"},Lt.default.createElement("div",{className:"text-center mb-14"},Lt.default.createElement("h1",{className:"text-5xl font-semibold text-slate-900 leading-tight"},"TBC ONE"),Lt.default.createElement("p",{className:"mt-4 text-lg text-slate-500"},"One God. One Church. One Mission.")),Lt.default.createElement("nav",{"aria-label":"功能入口",className:"flex justify-center gap-6 sm:gap-10 flex-wrap"},n.map(d=>{let h=Lt.default.createElement(Lt.default.Fragment,null,Lt.default.createElement("span",{className:"entry-icon w-24 h-24 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-900 transition-colors"},Lt.default.createElement(d.Icon,{size:40,strokeWidth:1.75})),Lt.default.createElement("span",{className:"text-base font-medium text-slate-900 whitespace-nowrap"},d.label)),g="entry group flex flex-col items-center gap-3 w-28 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 rounded-lg";return d.href?Lt.default.createElement("a",{key:d.id,href:d.href,className:g},h):Lt.default.createElement("button",{key:d.id,type:"button",onClick:()=>o(d.label),className:g},h)})),Lt.default.createElement(x4,{shell:t}))),a&&Lt.default.createElement("div",{role:"status",className:"fixed left-1/2 -translate-x-1/2 bottom-8 z-[120] px-5 h-11 flex items-center rounded-full bg-slate-800 text-white text-sm shadow-hover-soft animate-fade-in"},a))},L4=gv;var l=te(Pa());var ic=["日","一","二","三","四","五","六"],M4={m:15,l:18},Bi="!text-red-600 [&_*]:!text-red-600",ql=["pastor","admin_staff"],m4=[{id:"title",label:"工作摘要",locked:!0,sortable:!0,w:"minmax(240px,2.4fr)",min:240},{id:"who",label:"派工",sortable:!0,w:t=>`${Math.ceil(t*4+22)}px`,min:t=>Math.ceil(t*4+22)},{id:"doer",label:"執行",sortable:!0,w:t=>`${Math.ceil(t*4+22)}px`,min:t=>Math.ceil(t*4+22)},{id:"status",label:"狀態",sortable:!0,w:t=>`${Math.ceil(t*.85*4+100)}px`,min:t=>Math.ceil(t*.85*4+100)},{id:"date",label:"日期",sortable:!0,w:"minmax(96px,0.9fr)",min:96},{id:"time",label:"時間",w:"minmax(150px,1fr)",min:150},{id:"hours",label:"工時",sortable:!0,w:t=>`${Math.ceil(t*4.8+24)}px`,min:t=>Math.ceil(t*4.8+24)},{id:"priority",label:"優先順序",sortable:!0,w:t=>`${Math.ceil(t*.85*4+52)}px`,min:t=>Math.ceil(t*.85*4+52)},{id:"note",label:"備註",w:"minmax(120px,1.5fr)",min:120}],pv="Asia/Taipei",y4=()=>{let t=new Intl.DateTimeFormat("sv-SE",{timeZone:pv,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).format(new Date);return{date:t.slice(0,10),time:t.slice(11,16)}},Yl=t=>{let[a,r,e]=t.split("-").map(Number);return Date.UTC(a,r-1,e)},V4=t=>new Date(t).toISOString().slice(0,10),Gl=(t,a)=>V4(Yl(t)+a*864e5),z4=(t,a)=>Math.round((Yl(t)-Yl(a))/864e5),_4=t=>new Date(Yl(t)).getUTCDay(),fv=t=>Gl(t,-((_4(t)+6)%7)),Fa=t=>{let[,a,r]=t.split("-").map(Number);return`${a}/${r}`},vv=(t,a)=>{let r=z4(t,a),e=r===0?"今天":r===1?"明天":r===-1?"昨天":"";return{text:`${Fa(t)}（${ic[_4(t)]}）`,tag:e}},Ht=t=>t?String(t).slice(0,5):"",w4=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Ht(t.start_time).split(":").map(Number),[e,i]=Ht(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n>0?n/60:null},kv=t=>{if(!t.start_time||!t.end_time||t.start_date!==t.end_date)return null;let[a,r]=Ht(t.start_time).split(":").map(Number),[e,i]=Ht(t.end_time).split(":").map(Number),n=e*60+i-(a*60+r);return n<=0?null:`${Math.round(n/60*100)/100} 小時`},C4={urgent:0,normal:1,routine:2},xv={routine:"例行",normal:"普通",urgent:"緊急"},b4={routine:"bg-violet-50 border-violet-100 text-violet-600",normal:"bg-slate-50 border-slate-200 text-slate-500",urgent:"bg-red-50 border-red-100 text-red-600"},Lv={routine:"normal",normal:"urgent",urgent:"routine"},Gn=t=>{let a=String(t&&t.message||t||""),r=[["not your routine item","只有本人可以修改自己的工作"],["not your item","只有派工者可以修改這筆工作，負責人只能改狀態"],["nothing to confirm","這筆已經不是「待確認」狀態"],["nothing to return","這筆已經不是「待確認」狀態"],["assignee is not allowed","負責人必須是有權限的同工"],["cannot complete","這筆已經完成、跳過或取消，不能再按完成"],["cannot skip","只有「週期自動產生、尚未完成」的工作可以跳過"],["overdue items cannot be moved","逾期工作不能移動"],["item not in your list","不在清單中"],["item not found or canceled","工作被取消或不存在"],["more than one member record","共用帳號，洽行政辦公室"],["no member record","找不到資料"],["no permission","權限不足"],["permission denied","權限不足"],["dates are required","日期必填"],["weekly rule needs","至少選一個星期"],["monthly rule needs","選日期，或「每月最後一天」"],["until date is before","重複的結束日不能早於開始日"],["not your recurring rule","只有建立者可以修改這個週期工作"],["violates check constraint","內容不符合規則（例如任務名稱空白、結束日期早於開始日期）"]];for(let[e,i]of r)if(a.includes(e))return i;return a||"發生未知錯誤"},Mv=t=>{if(t.freq==="daily")return t.weekdays_only?"每天（週一到週五）":"每天";if(t.freq==="weekly")return"每週 "+[...t.week_days||[]].sort((r,e)=>r-e).map(r=>ic[r%7]).join("、");let a=[];return t.month_day&&a.push(`${t.month_day} 日`),t.month_last_day&&a.push("最後一天"),"每月 "+a.join("、")},B4=({person:t,strong:a})=>l.default.createElement("span",{className:`truncate max-w-full ${a?"font-bold text-slate-900":"text-slate-700"}`},t&&t.name||"（未知）"),j4=[[15,"15分鐘"],[30,"30分鐘"],[45,"45分鐘"],[60,"1小時"],[90,"1.5小時"]],Ea=t=>{if(!t)return null;let[a,r]=t.split(":").map(Number);return a*60+r},W4=t=>`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`,rc=t=>String(Math.round(t/60*100)/100),mv=Array.from({length:24},(t,a)=>String(a).padStart(2,"0")),yv=Array.from({length:60},(t,a)=>String(a).padStart(2,"0")),ec=(t,a,r)=>t&&!a||!t&&a?"同時填寫或同時取消":t&&a&&r&&Ea(a)<Ea(t)?"結束時間不能早於開始時間":"",Xl=({value:t,onChange:a,className:r="",autoFocus:e,id:i,disabled:n})=>{let[o,d]=(t||"").split(":"),h=`tbc-time-sel bg-transparent outline-none cursor-pointer text-center ${o===void 0||o===""?"text-slate-400":"text-slate-900"}`;return l.default.createElement("div",{className:`tbc-time flex items-center gap-1 ${r}`},l.default.createElement("select",{id:i,disabled:n,autoFocus:e,"aria-label":"時",value:o||"",className:h,onChange:g=>{let f=g.target.value;a(f===""?"":`${f}:${d||"00"}`)}},l.default.createElement("option",{value:""},"--"),mv.map(g=>l.default.createElement("option",{key:g,value:g},g))),l.default.createElement("span",{className:"text-slate-400"},":"),l.default.createElement("select",{disabled:n,"aria-label":"分",value:d||"",className:h,onChange:g=>{let f=g.target.value;a(f===""&&!o?"":`${o||"00"}:${f||"00"}`)}},l.default.createElement("option",{value:""},"--"),yv.map(g=>l.default.createElement("option",{key:g,value:g},g))))},H4=({id:t,options:a,selected:r,multi:e,onChange:i,bad:n,className:o=""})=>{let[d,h]=(0,l.useState)(!1),g=a.filter(k=>r.has(k.id)).map(k=>k.label),f=k=>{if(!e){i(new Set([k])),h(!1);return}let p=new Set(r);p.has(k)?p.delete(k):p.add(k),i(p)};return l.default.createElement("div",{className:`relative ${o}`},l.default.createElement("button",{id:t,type:"button",onClick:()=>h(k=>!k),className:`tbc-pick w-full flex items-center justify-between gap-2 bg-slate-50 border rounded-lg px-3 py-2.5 text-left outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all ${n?"border-red-400 ring-2 ring-red-200":"border-slate-200"}`},l.default.createElement("span",{className:`truncate ${g.length?"text-slate-900":"text-slate-400"}`},g.length?g.join("、"):"請選擇"),l.default.createElement(Ol,{size:16,className:"text-slate-400 shrink-0"})),d&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-[110]",onClick:()=>h(!1)}),l.default.createElement("div",{className:"tbc-pick-menu absolute left-0 right-0 top-full mt-1 z-[120] bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in"},a.map(k=>l.default.createElement("label",{key:k.id,className:"flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 cursor-pointer select-none"},l.default.createElement("input",{type:e?"checkbox":"radio",checked:r.has(k.id),onChange:()=>f(k.id),className:"accent-indigo-600"}),k.label)))))},wv=({canEdit:t,options:a,ids:r,onSave:e,children:i})=>{let[n,o]=(0,l.useState)(!1),[d,h]=(0,l.useState)({x:0,y:0}),[g,f]=(0,l.useState)(()=>new Set(r));if(!t)return i;let k=w=>{let b=w.currentTarget.getBoundingClientRect();h({x:Math.min(b.left,window.innerWidth-190),y:Math.min(b.bottom+4,window.innerHeight-200)}),f(new Set(r)),o(!0)},p=()=>{o(!1),g.size===r.length&&r.every(b=>g.has(b))||e([...g])},x=w=>f(b=>{let z=new Set(b);return z.has(w)?z.delete(w):z.add(w),z});return l.default.createElement("div",null,l.default.createElement("div",{onClick:k,title:"更換執行",className:"tbc-doer-edit cursor-pointer hover:bg-slate-100/80 rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]"},i),n&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:p}),l.default.createElement("div",{style:{left:d.x,top:d.y},className:"tbc-doer-menu fixed z-[70] w-44 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in"},a.map(w=>l.default.createElement("label",{key:w.id,className:"flex items-center gap-2 px-2.5 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 cursor-pointer select-none"},l.default.createElement("input",{type:"checkbox",checked:g.has(w.id),onChange:()=>x(w.id),className:"accent-indigo-600"}),w.label)))))},S4=({value:t,placeholder:a,canEdit:r,onSave:e,className:i="",centerEmpty:n})=>{let[o,d]=(0,l.useState)(!1),[h,g]=(0,l.useState)(t||""),f=(0,l.useRef)(!1);(0,l.useEffect)(()=>{o||g(t||"")},[t,o]);let k=async()=>{if(d(!1),f.current){f.current=!1;return}let p=h.trim();p!==(t||"").trim()&&await e(p)};return o?l.default.createElement("input",{autoFocus:!0,value:h,onChange:p=>g(p.target.value),onBlur:k,onKeyDown:p=>{p.key==="Enter"&&p.currentTarget.blur(),p.key==="Escape"&&(f.current=!0,p.currentTarget.blur())},className:"w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-1 outline-none font-normal text-slate-900"}):l.default.createElement("div",{onClick:()=>r&&d(!0),className:`${i} ${r?"cursor-text hover:bg-slate-100/80":""} ${!t&&n?"text-center":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em] break-words`},t||(r?l.default.createElement("span",{className:`text-slate-300 ${n?"block text-center":""}`},a):null))},A4=({type:t,a,b:r,canEdit:e,children:i,onSave:n,validate:o})=>{let[d,h]=(0,l.useState)(!1),[g,f]=(0,l.useState)(""),[k,p]=(0,l.useState)(a||""),[x,w]=(0,l.useState)(r||""),b=(0,l.useRef)(!1);(0,l.useEffect)(()=>{d||(p(a||""),w(r||""))},[a,r,d]);let z=async()=>{if(b.current){b.current=!1,h(!1),f("");return}let u=o?o(k,x):"";if(u){f(u);return}f(""),h(!1),(k!==(a||"")||x!==(r||""))&&await n(k,x)};if(!d)return l.default.createElement("div",{onClick:()=>e&&h(!0),className:`${e?"cursor-pointer hover:bg-slate-100/80":""} rounded px-1.5 py-1 -mx-1.5 min-h-[1.9em]`},i);let s="w-full bg-white border border-indigo-300 ring-2 ring-indigo-500/20 rounded px-1.5 py-0.5 outline-none text-[0.9em] font-normal text-slate-900";return l.default.createElement("div",{tabIndex:-1,onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||z()},onKeyDown:u=>{u.key==="Enter"&&z(),u.key==="Escape"&&(b.current=!0,h(!1),f(""))},className:"flex flex-col gap-1"},l.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"起",t==="time"?l.default.createElement(Xl,{autoFocus:!0,value:k,onChange:p,className:s}):l.default.createElement("input",{autoFocus:!0,type:t,value:k,onChange:u=>p(u.target.value),className:s})),l.default.createElement("label",{className:"flex items-center gap-1 text-[0.75em] text-slate-400"},"迄",t==="time"?l.default.createElement(Xl,{value:x,onChange:w,className:s}):l.default.createElement("input",{type:t,value:x,onChange:u=>w(u.target.value),className:s})),g&&l.default.createElement("div",{role:"alert",className:"tbc-range-err text-[0.75em] text-red-600"},g))},Cv=({mode:t,initial:a,presetRepeat:r,today:e,onClose:i,onSubmit:n,busy:o,people:d=[],meId:h,parent:g})=>{let f=a||{},k=t==="editRule",p=t!=="create",[x,w]=(0,l.useState)(f.title||""),[b,z]=(0,l.useState)(f.start_date||e),[s,u]=(0,l.useState)(Ht(f.start_time)),[v,M]=(0,l.useState)(f.end_date||f.start_date||e),[j,_]=(0,l.useState)(Ht(f.end_time)),[H,V]=(0,l.useState)(f.priority||(t==="createRule"?"routine":"normal")),[D,U]=(0,l.useState)(f.note||""),[nt,Pt]=(0,l.useState)(null),[Fr,Ca]=(0,l.useState)(!1),[ye,At]=(0,l.useState)(!1),[Ql,Yn]=(0,l.useState)(""),[ji,ha]=(0,l.useState)(""),ta=t==="createRule"||t==="editRule"||b===v;(0,l.useEffect)(()=>{ta||(u(""),_(""),Pt(null),Ca(!1),At(!1),ha(""))},[ta]);let we=(C,q)=>{let ht=Ea(C),et=Ea(q);if(!ta||ht===null||et===null||et<=ht){Pt(null),At(!1);return}Pt(et-ht),At(!1)},Ce=(C,q,ht,et)=>{if(ha(""),!!C){if(et!=="end"&&q){let zt=Ea(q)+C;if(zt>=1440){ha("工時超出當天，請調整開始時間或工時");return}ht&&Ea(ht)!==zt&&ha("開始、結束時間和工時不符，已自動修正結束時間"),_(W4(zt))}else if(ht){let zt=Ea(ht)-C;if(zt<0){ha("工時超出當天，請調整結束時間或工時");return}q&&Ea(q)!==zt&&ha("開始、結束時間和工時不符，已自動修正開始時間"),u(W4(zt))}}},Kl=C=>{C!==s&&(u(C),ha(""),Fr&&nt?Ce(nt,C,j,"start"):we(C,j))},Xn=C=>{C!==j&&(_(C),ha(""),Fr&&nt?Ce(nt,s,C,"end"):we(s,C))},Qn=C=>{if(ha(""),C===""){Ca(!1),At(!1),we(s,j);return}if(C==="custom"){Ca(!0),At(!0),Yn(nt?rc(nt):"");return}let q=Number(C);Ca(!0),At(!1),Pt(q),Ce(q,s,j,s?"start":"end")},Jl=C=>{Yn(C),Ca(!0),At(!0);let q=parseFloat(C);if(q>0&&Math.round(q*60)>be){Pt(null),ha(`工時不能超出當天，最多 ${rc(be)} 小時`);return}if(q>0&&q<24){let ht=Math.round(q*60);Pt(ht),Ce(ht,s,j,s?"start":"end")}else Pt(null),ha("")},be=s?1439-Ea(s):j?Ea(j):1439,Wi=ye?"custom":nt===null?"":j4.some(([C])=>C===nt)?String(nt):"custom",[Vt,Kn]=(0,l.useState)(k?f.freq:t==="createRule"?r||"weekly":"none"),[$r,Rl]=(0,l.useState)(!!f.weekdays_only),[Hi,gt]=(0,l.useState)(f.week_days||[]),[aa,Fl]=(0,l.useState)(f.month_day?String(f.month_day):""),[$a,Jn]=(0,l.useState)(!!f.month_last_day),[Ir,Si]=(0,l.useState)(f.until_date||""),[Rn,oc]=(0,l.useState)(f.is_active===void 0?!0:f.is_active),Pr=(0,l.useMemo)(()=>{let C=new Set,q=[],ht=et=>{C.has(et.member_id)||(C.add(et.member_id),q.push({id:et.member_id,label:et.member_id===h?"我":et.name}))};return d.filter(et=>et.member_id===h).forEach(ht),d.filter(et=>ql.includes(et.role)).forEach(ht),h&&!C.has(h)&&q.unshift({id:h,label:"我"}),q},[d,h]),[Be,Fn]=(0,l.useState)(()=>new Set(h?[h]:[])),[Ai,je]=(0,l.useState)(()=>new Set(h?[h]:[])),[$n,Vi]=(0,l.useState)(""),[Da,We]=(0,l.useState)(""),Ot=(C,q)=>{Vi(C),We(q),setTimeout(()=>{let ht=document.getElementById(q);if(ht){ht.scrollIntoView({block:"center",behavior:"smooth"});try{ht.focus({preventScroll:!0})}catch{}}},0)},Ut="text-xs font-medium text-slate-500",Jt="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none font-normal text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all",zi=C=>gt(q=>q.includes(C)?q.filter(ht=>ht!==C):[...q,C]),$l=()=>{if(Vi(""),We(""),!x.trim())return Ot(g?"輸入子工作":"輸入工作摘要","tbc-f-title");if(t==="create"&&Be.size===0)return Ot("請選擇派工的人","tbc-f-disp");if(t==="create"&&Ai.size===0)return Ot("請至少選一位執行的人","tbc-f-doer");if(!b)return Ot("開始日期必填","tbc-f-start");if(nt&&!s&&!j)return Ot("填寫開始時間或結束時間","tbc-f-stime");if(s&&!j||!s&&j)return Ot("同時填寫或同時取消",s?"tbc-f-etime":"tbc-f-stime");if(s&&j&&ta&&Ea(j)<Ea(s))return Ot("結束時間不能早於開始時間","tbc-f-etime");if(Vt==="none"&&(!v||v<b))return Ot("結束日期不能早於開始日期","tbc-f-end");if(Vt==="weekly"&&Hi.length===0)return Ot("至少選一個星期","tbc-f-week");if(Vt==="monthly"&&!aa&&!$a)return Ot("選日期，或「每月最後一天」","tbc-f-month");if(Vt!=="none"&&Ir&&Ir<b)return Ot("重複的結束日不能早於開始日","tbc-f-until");n({title:x.trim(),startDate:b,startTime:ta&&s||null,endDate:Vt==="none"?v:b,endTime:ta&&j||null,priority:H,note:D.trim()||null,repeat:Vt,weekdaysOnly:Vt==="daily"&&$r,weekDays:Vt==="weekly"?Hi:[],monthDay:Vt==="monthly"&&aa?Number(aa):null,monthLast:Vt==="monthly"&&$a,untilDate:Ir||null,isActive:Rn,assigneeIds:[...Ai],dispatcherId:[...Be][0]||h})};return l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-2xl max-h-[92dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},k?l.default.createElement(l.default.Fragment,null,l.default.createElement(qn,{className:"text-indigo-600",size:20})," 修改週期工作"):t==="createRule"?l.default.createElement(l.default.Fragment,null,l.default.createElement(qn,{className:"text-indigo-600",size:20})," 新增週期工作"):l.default.createElement(l.default.Fragment,null,l.default.createElement(wi,{className:"text-indigo-600",size:20})," ",g?"新增子工作":"新增")),l.default.createElement("button",{onClick:i,className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},l.default.createElement(bi,{size:20}))),l.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-5 flex-1"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Ut},g?"子工作":"工作摘要",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement("input",{id:"tbc-f-title",autoFocus:!0,value:x,onChange:C=>w(C.target.value),placeholder:"簡短描述工作內容",className:`${Jt} ${Da==="tbc-f-title"?"!border-red-400 ring-2 ring-red-200":""}`})),t==="create"&&Pr.length>0&&l.default.createElement("div",{className:"grid grid-cols-2 gap-4"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Ut},"派工",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement(H4,{id:"tbc-f-disp",options:Pr,selected:Be,onChange:Fn,bad:Da==="tbc-f-disp"})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Ut},"執行",l.default.createElement("span",{className:"text-red-500"},"*")),l.default.createElement(H4,{id:"tbc-f-doer",options:Pr,selected:Ai,multi:!0,onChange:je,bad:Da==="tbc-f-doer"}))),p&&l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Ut},"重複"),l.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["none","不重複"],["daily","每天"],["weekly","每週"],["monthly","每月"]].filter(([C])=>!((k||t==="createRule")&&C==="none")).map(([C,q])=>l.default.createElement("button",{key:C,type:"button",onClick:()=>Kn(C),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${Vt===C?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`},q))),Vt==="daily"&&l.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 pt-1 cursor-pointer select-none"},l.default.createElement("input",{type:"checkbox",checked:$r,onChange:C=>Rl(C.target.checked),className:"accent-indigo-600"})," 只排週一到週五"),Vt==="weekly"&&l.default.createElement("div",{id:"tbc-f-week",tabIndex:-1,className:`flex gap-2 pt-1 flex-wrap outline-none rounded-lg ${Da==="tbc-f-week"?"ring-2 ring-red-200":""}`},[1,2,3,4,5,6,7].map(C=>l.default.createElement("button",{key:C,type:"button",onClick:()=>zi(C),className:`w-10 h-10 rounded-full border text-sm font-medium transition-all ${Hi.includes(C)?"bg-indigo-600 border-indigo-600 text-white shadow-sm":"bg-white border-slate-200 text-slate-600 hover:border-indigo-300"}`},ic[C%7]))),Vt==="monthly"&&l.default.createElement("div",{className:"flex items-center gap-4 pt-1 flex-wrap"},l.default.createElement("select",{id:"tbc-f-month",value:aa,onChange:C=>Fl(C.target.value),className:"bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-sm text-slate-900"},l.default.createElement("option",{value:""},"不指定"),Array.from({length:31},(C,q)=>q+1).map(C=>l.default.createElement("option",{key:C,value:C},C," 日"))),l.default.createElement("label",{className:"flex items-center gap-2 text-sm text-slate-600 cursor-pointer select-none"},l.default.createElement("input",{type:"checkbox",checked:$a,onChange:C=>Jn(C.target.checked),className:"accent-indigo-600"})," 每月最後一天"),aa&&Number(aa)>28&&!$a&&l.default.createElement("span",{className:"text-xs text-amber-600"}"月份沒有",aa," 日排程將自動跳過。建議同時勾選「每月最後一天」"))),l.default.createElement("div",{className:"grid grid-cols-2 gap-4"},l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Ut},"開始日期"),l.default.createElement("input",{id:"tbc-f-start",type:"date",value:b,onChange:C=>{z(C.target.value),v<C.target.value&&M(C.target.value)},className:`${Jt} ${Da==="tbc-f-start"?"!border-red-400 ring-2 ring-red-200":""}`})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Ut},"開始時間",ta?"（選填）":"（禁填）"),l.default.createElement(Xl,{disabled:!ta,id:"tbc-f-stime",value:s,onChange:Kl,className:`${Jt} !w-auto min-w-[8rem] ${Da==="tbc-f-stime"?"!border-red-400 ring-2 ring-red-200":""}`})),Vt==="none"?l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Ut},"結束日期"),l.default.createElement("input",{id:"tbc-f-end",type:"date",value:v,min:b,onChange:C=>M(C.target.value),className:`${Jt} ${Da==="tbc-f-end"?"!border-red-400 ring-2 ring-red-200":""}`})):l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Ut},"結束日期（選填）"),l.default.createElement("input",{id:"tbc-f-until",type:"date",value:Ir,min:b,onChange:C=>Si(C.target.value),className:Jt})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Ut},"結束時間",ta?"（選填）":"（禁填）"),(()=>{let C=s&&j?ec(s,j,!b||Vt!=="none"||v===b):"";return C?l.default.createElement("div",{role:"alert",className:"tbc-time-err text-xs text-red-600"},C):null})(),l.default.createElement(Xl,{disabled:!ta,id:"tbc-f-etime",value:j,onChange:Xn,className:`${Jt} !w-auto min-w-[8rem] ${Da==="tbc-f-etime"?"!border-red-400 ring-2 ring-red-200":""}`})),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Ut},"優先順序"),l.default.createElement("div",{className:"flex items-center bg-slate-50 p-1.5 rounded-lg border border-slate-200 w-max"},[["routine","例行"],["normal","普通"],["urgent","緊急"]].map(([C,q])=>l.default.createElement("button",{key:C,type:"button",onClick:()=>V(C),className:`h-8 px-4 rounded-md text-xs font-medium transition-all ${H===C?C==="urgent"?"bg-white text-red-600 shadow-sm":C==="routine"?"bg-white text-violet-600 shadow-sm":"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`},q)))),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Ut},"工時",ta?"（選填）":"（禁填）"),l.default.createElement("div",{className:"flex items-center gap-2"},l.default.createElement("select",{id:"tbc-f-dur",disabled:!ta,"aria-label":"工時",value:Wi,onChange:C=>Qn(C.target.value),className:`${Jt} !w-auto min-w-[8rem] cursor-pointer ${Wi?"text-slate-900":"text-slate-400"}`},l.default.createElement("option",{value:""},"--"),j4.map(([C,q])=>l.default.createElement("option",{key:C,value:C,disabled:C>be},q)),l.default.createElement("option",{value:"custom"},"自訂")),Wi==="custom"&&l.default.createElement("label",{className:"flex items-center gap-1.5 text-sm text-slate-500 whitespace-nowrap"},l.default.createElement("input",{"aria-label":"自訂工時（小時）",type:"number",min:"0.25",max:Math.floor(be/60*100)/100,step:"0.25",value:ye?Ql:nt?rc(nt):"",onChange:C=>Jl(C.target.value),className:"tbc-dur-custom w-20 bg-slate-50 border border-slate-200 rounded-lg px-2 py-2 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"}),"小時")))),l.default.createElement("div",{className:"space-y-1.5"},l.default.createElement("label",{className:Ut},"備註"),l.default.createElement("textarea",{value:D,onChange:C=>U(C.target.value),rows:2,className:Jt})),ji&&l.default.createElement("div",{className:"tbc-hint bg-amber-50 border border-amber-200 text-amber-700 text-sm rounded-lg px-4 py-3"},ji),$n&&l.default.createElement("div",{className:"bg-red-50 border border-red-100 text-red-600 text-sm rounded-lg px-4 py-2.5 flex items-center gap-2"},l.default.createElement(Ci,{size:16})," ",$n)),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100 shrink-0"},l.default.createElement("button",{onClick:i,className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),l.default.createElement("button",{onClick:$l,disabled:o,className:"flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors disabled:opacity-50"},k?"儲存":Vt==="none"?"新增":"儲存"))))},bv=({session:t,supabase:a,utils:r,shell:e})=>{let[i,n]=(0,l.useState)(y4()),[o,d]=(0,l.useState)(null),[h,g]=(0,l.useState)([]),[f,k]=(0,l.useState)(""),[p,x]=(0,l.useState)([]),[w,b]=(0,l.useState)(!0),[z,s]=(0,l.useState)({type:"",text:""}),[u,v]=(0,l.useState)(null),[M,j]=(0,l.useState)("mine"),[_,H]=(0,l.useState)("today"),[V,D]=(0,l.useState)(""),[U,nt]=(0,l.useState)(""),[Pt,Fr]=(0,l.useState)(new Set),[Ca,ye]=(0,l.useState)(""),[At,Ql]=(0,l.useState)({col:null,dir:"asc"}),Yn=c=>Ql(L=>L.col!==c?{col:c,dir:"asc"}:L.dir==="asc"?{col:c,dir:"desc"}:{col:null,dir:"asc"}),[ji,ha]=(0,l.useState)(()=>{try{let c=localStorage.getItem("tbcWorkFont");return M4[c]?c:"m"}catch{return"m"}}),ta=c=>{ha(c);try{localStorage.setItem("tbcWorkFont",c)}catch{}},[we,Ce]=(0,l.useState)(()=>{try{return JSON.parse(localStorage.getItem("tbcWorkHiddenCols")||"[]")}catch{return[]}}),Kl=c=>Ce(L=>{let m=L.includes(c)?L.filter(B=>B!==c):[...L,c];try{localStorage.setItem("tbcWorkHiddenCols",JSON.stringify(m))}catch{}return m}),[Xn,Qn]=(0,l.useState)(!1),[Jl,be]=(0,l.useState)(""),[Wi,Vt]=(0,l.useState)(""),[Kn,$r]=(0,l.useState)(!1),[Rl,Hi]=(0,l.useState)(()=>new Set),[gt,aa]=(0,l.useState)(null),[Fl,$a]=(0,l.useState)(!1),[Jn,Ir]=(0,l.useState)(!1),Si=(0,l.useRef)(!1),[Rn,oc]=(0,l.useState)([]),[Pr,Be]=(0,l.useState)(()=>new Set),[Fn,Ai]=(0,l.useState)([]),[je,$n]=(0,l.useState)([]),[Vi,Da]=(0,l.useState)([]),We=(0,l.useRef)("mine"),[Ot,Ut]=(0,l.useState)(null),[Jt,zi]=(0,l.useState)(null),[$l,C]=(0,l.useState)(null),[q,ht]=(0,l.useState)(null),et=M4[ji],zt=et+3,ua=i.date,lc=(0,l.useRef)(null),_i=(0,l.useRef)(0),ba=(c,L)=>{s({type:c,text:L}),clearTimeout(lc.current),lc.current=setTimeout(()=>s({type:"",text:""}),3200)},vt=async(c,L)=>{let{data:m,error:B}=await a.rpc(c,L||{});if(B)throw B;return m},Zt=async(c,L)=>{try{let m=await c();return await Il(!0),Ei(),We.current==="notice"&&sc(),L&&ba("success",typeof L=="function"?L(m):L),m}catch(m){ba("error",Gn(m)),await Il(!0);return}},qt=(0,l.useMemo)(()=>{if(_==="today")return{start:ua,end:ua};if(_==="month"){let[m,B]=ua.split("-").map(Number);return{start:`${m}-${String(B).padStart(2,"0")}-01`,end:V4(Date.UTC(m,B,0))}}if(_==="week"){let m=fv(ua);return{start:m,end:Gl(m,6)}}let c=V||ua,L=U||c;return c<=L?{start:c,end:L}:{start:L,end:c}},[_,V,U,ua]);(0,l.useEffect)(()=>{let c=setInterval(()=>n(L=>{let m=y4();return m.date===L.date&&m.time===L.time?L:m}),3e4);return()=>clearInterval(c)},[]);let O4=async()=>{try{let c=await vt("work_current_member"),L=await vt("work_list_people");return d(c),g(L||[]),Fr(new Set((L||[]).filter(m=>ql.includes(m.role)).map(m=>m.member_id))),k(""),!0}catch(c){return k(Gn(c)),!1}},Il=async c=>{let L=++_i.current;c||b(!0);try{let m=r&&r.fetchAllData?r.fetchAllData:Z=>Z(),B=Z=>{if(Z&&Z.error)throw Z.error;return Z&&Z.data||[]},A=B(await m(()=>a.from("work_items").select("*, work_assignees(*)").is("canceled_at",null).is("parent_id",null).lte("start_date",qt.end).gte("end_date",qt.start))),_t=B(await m(()=>a.from("work_items").select("id, work_assignees!inner(id)").is("canceled_at",null).is("parent_id",null).lte("end_date",ua).neq("work_assignees.status","done").is("work_assignees.skipped_at",null))),Tt=new Set(A.map(Z=>Z.id)),Mt=_t.map(Z=>Z.id).filter(Z=>!Tt.has(Z)),sa=[];if(Mt.length&&(sa=B(await m(()=>a.from("work_items").select("*, work_assignees(*)").in("id",Mt)))),L!==_i.current)return;let ga=[];for(let Z of[...A,...sa]){let{work_assignees:mt,...yt}=Z;for(let K of mt||[])ga.push({key:K.id,item:{...yt,assigneeCount:(mt||[]).length,assigneeIds:(mt||[]).map(R=>R.member_id)},a:K})}x(ga);let W=[...new Set(ga.map(Z=>Z.item.id))],N=[];if(W.length){let Z=B(await m(()=>a.from("work_items").select("*, work_assignees(*)").in("parent_id",W).is("canceled_at",null)));for(let mt of Z){let{work_assignees:yt,...K}=mt;for(let R of yt||[])N.push({key:R.id,item:{...K,assigneeCount:(yt||[]).length,assigneeIds:(yt||[]).map(Ia=>Ia.member_id)},a:R})}}if(L!==_i.current)return;Ai(N)}catch(m){L===_i.current&&ba("error","讀取失敗："+Gn(m))}finally{L===_i.current&&!c&&b(!1)}};(0,l.useEffect)(()=>{O4()},[]),(0,l.useEffect)(()=>{o&&Il(!1)},[o,qt.start,qt.end,ua]),(0,l.useEffect)(()=>{_==="custom"&&!V&&(D(ua),nt(Gl(ua,6)))},[_]);let Mr=(0,l.useMemo)(()=>{let c={};return h.forEach(L=>{c[L.member_id]={name:L.name,role:L.role}}),c},[h]),Hv=o?Mr[o]:null,Pl=(0,l.useMemo)(()=>h.filter(c=>ql.includes(c.role)),[h]),t2=c=>{let L=c.a.status==="done",m=c.a.status==="awaiting_confirm",B=!!c.a.skipped_at||c.a.status==="on_hold",A=Ht(c.item.end_time),_t=!L&&!m&&!B&&(c.item.end_date<i.date||c.item.end_date===i.date&&A&&A<i.time);return{...c,done:L,awaiting:m,skipped:B,overdue:_t,isMine:c.a.member_id===o,isCreator:c.item.creator_member_id===o,canManage:c.item.creator_member_id===o||c.item.entered_by===o,isRoutine:c.item.assigneeCount===1&&c.item.creator_member_id===c.a.member_id,isRecurring:!!c.item.recurring_rule_id,person:Mr[c.a.member_id],dispatcher:Mr[c.item.creator_member_id]}},{overdueRows:In,groups:a2,total:dc}=(0,l.useMemo)(()=>{let c=p.map(t2),L=Ca.trim().toLowerCase(),m=W=>!L||[W.item.title,W.item.note,W.person&&W.person.name,W.dispatcher&&W.dispatcher.name].some(N=>N&&String(N).toLowerCase().includes(L)),B=c.filter(W=>(M==="mine"?W.isMine:M==="tome"?W.isMine&&!W.isCreator:M==="dispatched"?W.canManage&&!W.isMine:Pt.has(W.a.member_id))&&m(W)),A=B.filter(W=>W.overdue).sort((W,N)=>(W.item.end_date+Ht(W.item.end_time)).localeCompare(N.item.end_date+Ht(N.item.end_time))||(W.person&&W.person.name||"").localeCompare(N.person&&N.person.name||"")),_t=B.filter(W=>!W.overdue&&W.item.start_date<=qt.end&&W.item.end_date>=qt.start),Tt={};_t.forEach(W=>{(Tt[W.item.start_date]=Tt[W.item.start_date]||[]).push(W)});let Mt=Object.keys(Tt).sort().map(W=>{let N=Tt[W].sort((mt,yt)=>{if(M!=="all")return mt.a.sort_order-yt.a.sort_order||String(mt.a.created_at).localeCompare(String(yt.a.created_at));let K=Ht(mt.item.start_time)||"99:99",R=Ht(yt.item.start_time)||"99:99";return K.localeCompare(R)||(mt.person&&mt.person.name||"").localeCompare(yt.person&&yt.person.name||"")}),Z=M==="mine"&&W>=qt.start&&!L;return{date:W,rows:N,canMove:Z}}),sa=A,ga=Mt;if(At.col){let W=At.dir==="asc"?1:-1,N=(K,R)=>String(K||"").localeCompare(String(R||""),"zh-Hant"),Z=K=>K.done?3:K.awaiting?2:K.skipped?1:0,yt={title:(K,R)=>N(K.item.title,R.item.title),who:(K,R)=>N(K.dispatcher&&K.dispatcher.name,R.dispatcher&&R.dispatcher.name),doer:(K,R)=>N(K.person&&K.person.name,R.person&&R.person.name),status:(K,R)=>Z(K)-Z(R),priority:(K,R)=>(C4[K.item.priority]??1)-(C4[R.item.priority]??1),hours:(K,R)=>{let Ia=w4(K.item),Oi=w4(R.item);return Ia==null&&Oi==null?0:Ia==null?2*W:Oi==null?-2*W:Ia-Oi},date:(K,R)=>(K.item.start_date+Ht(K.item.start_time)).localeCompare(R.item.start_date+Ht(R.item.start_time))}[At.col];if(yt){let K=R=>[...R].sort((Ia,Oi)=>W*yt(Ia,Oi));At.col==="date"?(sa=K(A),ga=[...Mt].sort((R,Ia)=>W*R.date.localeCompare(Ia.date))):(sa=K(A),ga=Mt.map(R=>({...R,rows:K(R.rows)})))}ga=ga.map(K=>({...K,canMove:!1}))}return{overdueRows:sa,groups:ga,total:A.length+_t.length}},[p,i,o,M,Pt,qt,Mr,Ca,At]),Pn=(0,l.useMemo)(()=>{let c={};return Fn.map(t2).sort((L,m)=>(L.item.start_date+Ht(L.item.start_time)).localeCompare(m.item.start_date+Ht(m.item.start_time))||String(L.item.created_at).localeCompare(String(m.item.created_at))).forEach(L=>{(c[L.item.parent_id]=c[L.item.parent_id]||[]).push(L)}),c},[Fn,i,o,Mr]),to=(0,l.useMemo)(()=>{let c={},L={};return je.forEach(m=>{if(m.item_id&&!m.read_at&&!(m.item_id in c)&&(c[m.item_id]=m.created_at),m.item_id&&!m.read_at&&m.kind==="edited"&&m.change_note){let B=L[m.item_id]=L[m.item_id]||[];m.change_note.split("、").forEach(A=>{B.includes(A)||B.push(A)})}}),Vi.map(t2).filter(m=>(m.canManage||m.isMine)&&m.item.id in c).map(m=>({...m,notice:!0,changedFields:L[m.item.id]||[]})).sort((m,B)=>String(c[B.item.id]||"").localeCompare(String(c[m.item.id]||"")))},[Vi,je,o,Mr,i]),Ti=m4.filter(c=>c.locked||!we.includes(c.id)),U4=c=>typeof c.w=="function"?c.w(et):c.w,Z4=c=>typeof c.min=="function"?c.min(et):c.min,r2=`56px ${Ti.map(U4).join(" ")}`,q4=56+Ti.reduce((c,L)=>c+Z4(L),0)+16,Ni=(c,L,m)=>Zt(()=>{let B={...c.item,...L};return vt("work_update_routine",{p_item_id:B.id,p_title:B.title,p_start_date:B.start_date,p_start_time:B.start_time||null,p_end_date:B.end_date,p_end_time:B.end_time||null,p_priority:B.priority||"normal",p_note:B.note||null,p_meeting_flag:null})},m||(c.canManage?void 0:"資料更新，通知派工者")),G4=(c,L,m)=>{if(!L||!m){ba("error","日期必填");return}let B=L,A=m;if(L!==c.item.start_date&&m===c.item.end_date&&(A=Gl(L,z4(c.item.end_date,c.item.start_date))),A<B){ba("error","結束日期不能早於開始日期");return}let _t=!(B<=qt.end&&A>=qt.start);return Ni(c,B!==A?{start_date:B,end_date:A,start_time:null,end_time:null}:{start_date:B,end_date:A},_t?`工作移至 ${Fa(B)}`:null)},Y4=(c,L,m)=>{let B=ec(L,m,c.item.start_date===c.item.end_date);if(B){ba("error",B);return}return Ni(c,{start_time:L||null,end_time:m||null})},X4=c=>{let L=new Set,m=[],B=(A,_t)=>{A&&!L.has(A)&&(L.add(A),m.push({id:A,label:A===o?"我":_t}))};return o&&B(o,"我"),h.filter(A=>ql.includes(A.role)).forEach(A=>B(A.member_id,A.name)),(c||[]).forEach(A=>B(A,Mr[A]&&Mr[A].name||"—")),m},Q4=(c,L)=>{if(L.length===0){ba("error","請至少選一位執行的人");return}return Zt(()=>vt("work_set_assignees",{p_item_id:c.item.id,p_member_ids:L}),c.canManage?"執行已更新":"資料更新，通知派工者")},K4=(c,L)=>{if(!L){ba("error","任務名稱不能空白");return}return Ni(c,{title:L})},Sv=c=>Zt(()=>vt("work_complete",{p_item_id:c.item.id,p_note:null}),"已完成"),J4=(c,L)=>Zt(()=>vt("work_set_status",{p_item_id:c.item.id,p_status:L}),L==="done"&&c.item.creator_member_id!==o?"完成回報，等待派工者確認":"狀態已更新"),R4=c=>Zt(()=>vt("work_confirm",{p_assignee_id:c.a.id}),"已確認完成"),[e2,i2]=(0,l.useState)(null),[cc,ao]=(0,l.useState)(null),[hc,uc]=(0,l.useState)(""),F4=c=>{uc(""),ao(c)},$4=async()=>{let c=cc;ao(null),await Zt(()=>vt("work_return",{p_assignee_id:c.a.id,p_note:hc.trim()||null}),"已退回")},Av=(c,L)=>Zt(()=>vt("work_move",{p_item_id:c.item.id,p_where:L})),I4=c=>Zt(()=>vt("work_copy",{p_item_id:c.item.id}),"複製成功"),P4=c=>v({title:"警告",confirmText:"刪除",message:`確定刪除？
完成或擱置不會刪除，標記「取消」並保留紀錄`,onConfirm:async()=>{v(null),await Zt(()=>vt("work_delete",{p_item_id:c.item.id}),L=>L==="canceled"?"刪除資料，保留原進度紀錄":"已刪除")}}),Vv=async()=>{let c=Jl.trim();if(!c||Kn)return;$r(!0);let L=Wi||ua,m=await Zt(()=>vt("work_create_routine",{p_title:c,p_start_date:L,p_end_date:L}));if($r(!1),m){be("");let B=L<=qt.end&&L>=qt.start;ba("success",B?"已新增":`已新增到 ${Fa(L)}（目前顯示範圍看不到，切換範圍就會出現）`)}},tp=async c=>{$r(!0);let L;if(gt.mode==="editRule")L=await Zt(()=>vt("work_update_rule",{p_rule_id:gt.rule.id,p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:c.isActive}),"週期工作已儲存（只影響之後產生的工作）"),L!==void 0&&await ro();else if(c.repeat==="none"&&c.assigneeIds&&(gt.parent||!(c.assigneeIds.length===1&&c.assigneeIds[0]===o&&c.dispatcherId===o))){let m=c.assigneeIds.some(B=>B!==o);L=await Zt(()=>vt("work_assign_create",{p_title:c.title,p_assignee_ids:c.assigneeIds,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_dispatcher_id:c.dispatcherId,p_parent_id:gt.parent?gt.parent.id:null}),m?"派工完成，送出提醒":gt.parent?"子工作已新增":"已新增"),L!==void 0&&gt.parent&&Be(B=>new Set(B).add(gt.parent.id))}else c.repeat==="none"?L=await Zt(()=>vt("work_create_routine",{p_title:c.title,p_start_date:c.startDate,p_start_time:c.startTime,p_end_date:c.endDate,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"已新增"):L=await Zt(()=>vt("work_create_rule",{p_title:c.title,p_freq:c.repeat,p_weekdays_only:c.weekdaysOnly,p_week_days:c.weekDays,p_month_day:c.monthDay,p_month_last_day:c.monthLast,p_start_date:c.startDate,p_until_date:c.untilDate,p_start_time:c.startTime,p_end_time:c.endTime,p_priority:c.priority,p_note:c.note,p_meeting_flag:null}),"週期工作設定完成");$r(!1),L!==void 0&&aa(null)},ro=async()=>{try{let{data:c,error:L}=await a.from("work_recurring_rules").select("*").eq("creator_member_id",o).order("created_at");if(L)throw L;oc(c||[])}catch(c){ba("error","讀取週期工作失敗："+Gn(c))}},Ei=async()=>{try{let c=await vt("work_notifications_list")||[];return $n(c),c}catch{return[]}};(0,l.useEffect)(()=>{if(!o)return;Ei();let c=setInterval(Ei,6e4);return()=>clearInterval(c)},[o]);let ap=je.filter(c=>!c.read_at),n2=new Set(ap.map(c=>c.item_id||c.id)).size,rp=async()=>{try{await vt("work_notifications_read",{p_ids:null}),await Ei()}catch{}},sc=async c=>{let L=[...new Set((c||je).filter(m=>!m.read_at).map(m=>m.item_id).filter(Boolean))];if(!L.length){Da([]);return}try{let{data:m,error:B}=await a.from("work_items").select("*, work_assignees(*)").in("id",L).is("canceled_at",null);if(B)throw B;let A=[];for(let _t of m||[]){let{work_assignees:Tt,...Mt}=_t;for(let sa of Tt||[])A.push({key:sa.id,item:{...Mt,assigneeCount:(Tt||[]).length,assigneeIds:(Tt||[]).map(ga=>ga.member_id)},a:sa})}Da(A)}catch(m){ba("error","讀取提醒失敗："+Gn(m))}},Di=async c=>{let L=We.current;if(We.current=c,j(c),c==="notice"){let m=await Ei();await sc(m)}else L==="notice"&&await rp()},gc=async()=>{$a(!0),await ro()};(0,l.useEffect)(()=>{!gt&&Si.current&&(Si.current=!1,gc())},[gt]);let ep=async c=>{await Zt(()=>vt("work_update_rule",{p_rule_id:c.id,p_title:c.title,p_freq:c.freq,p_weekdays_only:c.weekdays_only,p_week_days:c.week_days,p_month_day:c.month_day,p_month_last_day:c.month_last_day,p_start_date:c.start_date,p_until_date:c.until_date,p_start_time:c.start_time,p_end_time:c.end_time,p_priority:c.priority,p_note:c.note,p_meeting_flag:null,p_is_active:!c.is_active}),c.is_active?"已暫停":"已啟用")!==void 0&&await ro()},ip=c=>v({title:"警告",confirmText:"刪除",message:`刪除週期工作？
刪除未來排程，保留歷史紀錄`,onConfirm:async()=>{v(null),await Zt(()=>vt("work_delete_rule",{p_rule_id:c.id}),"週期工作已刪除")!==void 0&&await ro()}}),np=async(c,L)=>{let m=Jt;if(zi(null),ht(null),C(null),!m||m.date!==c.date||m.key===L.key)return;let B=c.rows.filter(Mt=>!Mt.overdue),A=B.findIndex(Mt=>Mt.key===m.key),_t=B.findIndex(Mt=>Mt.key===L.key),Tt=c.rows.find(Mt=>Mt.key===m.key);!Tt||A<0||_t<0||await Zt(()=>vt("work_move_to",{p_item_id:Tt.item.id,p_target_item_id:L.item.id,p_after:A<_t}))},He="flex items-center bg-slate-100 p-1 rounded-full shrink-0",Oa=c=>`h-8 px-4 rounded-full text-[0.8em] font-medium transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 ${c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}`,ra=Ot?[...In,...a2.flatMap(c=>c.rows),...to,...Object.values(Pn).flat()].find(c=>c.key===Ot.key):null,eo=ra?a2.find(c=>c.rows.some(L=>L.key===ra.key)):null,pc=(c,L)=>{let m=W=>!!(c.notice&&c.changedFields&&c.changedFields.includes(W)),B=c.canManage||c.isMine&&Rl.has(c.item.id),A=c.isMine&&c.isRoutine,_t=L?L.rows.filter(W=>!W.overdue):[],Tt=!!L&&L.canMove&&A&&!c.overdue,Mt=q===c.key&&Jt&&Jt.key!==c.key,sa=c.done||c.skipped,ga=W=>{switch(W.id){case"title":return l.default.createElement("div",{key:W.id,className:"min-w-0 w-full flex items-start gap-1.5"},!c.item.parent_id&&(Pn[c.item.id]||[]).length>0&&l.default.createElement("button",{type:"button",onClick:()=>Be(N=>{let Z=new Set(N);return Z.has(c.item.id)?Z.delete(c.item.id):Z.add(c.item.id),Z}),"aria-label":Pr.has(c.item.id)?"收合子工作":"展開子工作",className:"tbc-expand mt-0.5 shrink-0 inline-flex items-center gap-0.5 rounded-md px-1 py-0.5 text-slate-500 hover:bg-slate-100"},Pr.has(c.item.id)?l.default.createElement(Ol,{size:zt}):l.default.createElement(h4,{size:zt}),l.default.createElement("span",{className:"text-[0.75em] px-1.5 rounded bg-slate-100 text-slate-600"},new Set(Pn[c.item.id].map(N=>N.item.id)).size)),l.default.createElement("div",{className:"flex items-center gap-1 pt-1 shrink-0"},c.a.status==="pending"&&c.a.return_note&&l.default.createElement("button",{type:"button",onClick:()=>i2(c),className:"tbc-return-tag inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-amber-200 bg-amber-50 text-amber-700 font-bold hover:brightness-95 cursor-pointer whitespace-nowrap"},l.default.createElement(tc,{size:Math.round(et*.8)}),"退回"),c.isRecurring&&l.default.createElement("span",{title:"週期性工作，自動產生",className:"text-slate-400"},l.default.createElement(qn,{size:Math.round(et*.95)})),c.overdue&&l.default.createElement("span",{className:"inline-flex items-center gap-0.5 text-[0.7em] px-1.5 py-0.5 rounded border border-red-100 bg-red-50 text-red-600 font-bold"},l.default.createElement(Fd,{size:Math.round(et*.8)})," 逾期")),l.default.createElement("div",{className:"min-w-0 flex-1"},l.default.createElement(S4,{value:c.item.title,placeholder:"工作摘要",canEdit:B,onSave:N=>K4(c,N),className:`font-medium ${sa?"text-slate-400 line-through":c.overdue||m("工作摘要")?"text-red-600":"text-slate-900"}`})));case"who":return l.default.createElement("div",{key:W.id,className:"min-w-0"},l.default.createElement(B4,{person:c.dispatcher,size:zt}));case"doer":return l.default.createElement("div",{key:W.id,className:`min-w-0 ${m("執行")?Bi:""}`},l.default.createElement(wv,{canEdit:B,options:X4(c.item.assigneeIds),ids:c.item.assigneeIds||[c.a.member_id],onSave:N=>Q4(c,N)},l.default.createElement(B4,{person:c.person,size:zt})));case"date":{let N=c.item.start_date!==c.item.end_date;return l.default.createElement("div",{key:W.id,className:`min-w-0 ${c.overdue||m("日期")?"text-red-600":"text-slate-700"} ${m("日期")?Bi:""}`},l.default.createElement(A4,{type:"date",a:c.item.start_date,b:c.item.end_date,canEdit:B,onSave:(Z,mt)=>G4(c,Z,mt)},N?`${Fa(c.item.start_date)} → ${Fa(c.item.end_date)}`:Fa(c.item.start_date)))}case"time":{let N=Ht(c.item.start_time),Z=Ht(c.item.end_time);return l.default.createElement("div",{key:W.id,className:`min-w-0 text-slate-700 ${m("時間")?Bi:""}`},l.default.createElement(A4,{type:"time",a:N,b:Z,canEdit:B&&c.item.start_date===c.item.end_date,onSave:(mt,yt)=>Y4(c,mt,yt),validate:(mt,yt)=>ec(mt,yt,c.item.start_date===c.item.end_date)},N||Z?`${N||"—"} ~ ${Z||"—"}`:l.default.createElement("span",{className:"text-slate-300"},B&&c.item.start_date===c.item.end_date?"時間設定":"")))}case"hours":return l.default.createElement("div",{key:W.id,className:`text-slate-500 text-[0.9em] ${m("時間")?Bi:""}`},kv(c.item)||"");case"priority":return l.default.createElement("div",{key:W.id,className:m("優先順序")?Bi:""},l.default.createElement("button",{type:"button",disabled:!B,onClick:()=>Ni(c,{priority:Lv[c.item.priority]||"normal"}),title:B?"點一下切換":"",className:`tbc-prio text-[0.75em] px-2 py-0.5 rounded border font-bold ${b4[c.item.priority]||b4.normal} ${B?"hover:brightness-95 cursor-pointer":"cursor-default"}`},xv[c.item.priority]||"普通"));case"note":return l.default.createElement("div",{key:W.id,className:`min-w-0 w-full ${m("備註")?Bi:""}`},l.default.createElement(S4,{value:c.item.note,placeholder:"新增備註",centerEmpty:!0,canEdit:B,onSave:N=>Ni(c,{note:N||null}),className:"text-slate-600 text-[0.92em]"}));case"status":{let N=c.done?"done":c.awaiting?"awaiting":c.skipped?"on_hold":"pending",Z=N==="done"?"bg-emerald-50 border-emerald-200 text-emerald-700":N==="awaiting"?"bg-sky-50 border-sky-200 text-sky-700":N==="on_hold"?"bg-amber-50 border-amber-200 text-amber-700":"bg-slate-100 border-slate-200 text-slate-600",mt={pending:"待處理",done:"完成",on_hold:"擱置",awaiting:"待確認"}[N];return c.awaiting&&c.isCreator&&!c.isMine?l.default.createElement("div",{key:W.id,className:"flex items-center gap-1.5 tbc-review whitespace-nowrap"},l.default.createElement("button",{type:"button",onClick:()=>R4(c),className:"h-8 px-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},"確認"),l.default.createElement("button",{type:"button",onClick:()=>F4(c),className:"h-8 px-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-[0.85em] font-medium transition-colors inline-flex items-center gap-1 whitespace-nowrap shrink-0"},"退回")):c.isMine?l.default.createElement("select",{key:W.id,value:N,onChange:yt=>J4(c,yt.target.value),"aria-label":"狀態",title:"點一下改變狀態",className:`h-8 pl-3 pr-2 rounded-full border text-[0.85em] font-medium outline-none cursor-pointer text-center ${Z}`},l.default.createElement("option",{value:"pending"},"待處理"),l.default.createElement("option",{value:"done"},"完成"),l.default.createElement("option",{value:"on_hold"},"擱置"),N==="awaiting"&&l.default.createElement("option",{value:"awaiting",disabled:!0},"待確認")):l.default.createElement("span",{key:W.id,className:`inline-flex items-center h-8 px-3 rounded-full border text-[0.85em] font-medium ${Z}`},mt)}default:return null}};return l.default.createElement("div",{key:c.key,draggable:Tt&&$l===c.key,onDragStart:W=>{zi({key:c.key,date:L.date}),W.dataTransfer.effectAllowed="move";try{W.dataTransfer.setData("text/plain",c.key)}catch{}},onDragOver:W=>{Jt&&L&&Jt.date===L.date&&!c.overdue&&(W.preventDefault(),q!==c.key&&ht(c.key))},onDrop:W=>{W.preventDefault(),L&&np(L,c)},onDragEnd:()=>{zi(null),ht(null),C(null)},className:`group grid items-stretch border-b border-slate-200 last:border-b-0 transition-colors                    ${c.overdue?"bg-red-50/40":"hover:bg-indigo-50/30"} ${Jt&&Jt.key===c.key?"opacity-40":""}
                    ${Mt?"ring-2 ring-inset ring-indigo-400 bg-indigo-50/60":""}`,style:{gridTemplateColumns:r2}},l.default.createElement("div",{className:"flex items-center gap-0.5 px-2"},Tt?l.default.createElement("span",{onMouseDown:()=>C(c.key),onMouseUp:()=>C(null),title:"按住拖曳排序",className:"cursor-grab active:cursor-grabbing text-slate-300 hover:text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity"},l.default.createElement($g,{size:zt})):l.default.createElement("span",{style:{width:zt}}),B||c.isMine?l.default.createElement("button",{onClick:W=>{let N=W.currentTarget.getBoundingClientRect();Ut({key:c.key,x:Math.min(N.left,window.innerWidth-220),y:Math.min(N.bottom+4,window.innerHeight-300)})},className:"p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors",title:"更多"},l.default.createElement(Fg,{size:zt})):l.default.createElement("span",{style:{width:zt+8}})),Ti.map(W=>{let N=W.id==="title"||W.id==="note";return l.default.createElement("div",{key:W.id,className:`min-w-0 px-2 py-2.5 border-l border-slate-200 flex items-center ${N?"[&>*]:w-full":"justify-center text-center"}`},ga(W))}))},fc=new Set,vc=c=>aa({mode:"create",parent:c.item,initial:{start_date:c.item.start_date,end_date:c.item.end_date}}),o2=(c,L)=>{let m=c.item.parent_id?[]:Pn[c.item.id]||[],B=m.length>0&&Pr.has(c.item.id)&&!fc.has(c.item.id);return B&&fc.add(c.item.id),l.default.createElement(l.default.Fragment,{key:c.key},pc(c,L),B&&l.default.createElement("div",{className:"tbc-subs bg-slate-50/70 border-b border-slate-200 pl-8 pr-3 py-2"},l.default.createElement("div",{className:"rounded-lg border border-slate-200 bg-white overflow-hidden"},l.default.createElement("div",{className:"grid bg-slate-100 border-b border-slate-200 text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:r2}},l.default.createElement("span",{className:"py-1.5"}),Ti.map(A=>l.default.createElement("span",{key:A.id,className:"py-1.5 px-2 border-l border-slate-200 text-center whitespace-nowrap"},A.id==="title"?"子工作":A.label))),m.map(A=>pc(A,null)),(c.canManage||c.isMine)&&l.default.createElement("button",{type:"button",onClick:()=>vc(c),className:"tbc-add-sub w-full text-left px-4 py-2 text-[0.9em] text-slate-500 hover:text-indigo-600 hover:bg-slate-50 transition-colors"},"+ 新增子工作"))))};return l.default.createElement("div",{className:"flex h-[100dvh] w-full bg-slate-50 overflow-hidden relative",style:{fontSize:et}},l.default.createElement(v4,{active:"work",shell:e}),l.default.createElement("div",{className:"flex-1 flex flex-col relative bg-slate-50 overflow-hidden animate-fade-in min-w-0"},l.default.createElement("div",{className:"bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center gap-4 shrink-0 shadow-sm z-20"},l.default.createElement("div",{className:"flex items-center gap-4 min-w-0"},l.default.createElement("h1",{className:"font-semibold text-slate-900 shrink-0",style:{fontSize:et*1.45}},"工作日誌"),l.default.createElement("label",{className:"flex items-center gap-2 h-11 w-64 px-4 rounded-full bg-slate-100 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/40 transition-colors"},l.default.createElement(e4,{size:16,className:"text-slate-400 shrink-0"}),l.default.createElement("input",{type:"text",value:Ca,onChange:c=>ye(c.target.value),onKeyDown:c=>{c.key==="Escape"&&ye("")},placeholder:"搜尋：姓名、關鍵字","aria-label":"搜尋",className:"flex-1 min-w-0 bg-transparent outline-none text-[0.9em] text-slate-900 placeholder:text-slate-400"}),Ca&&l.default.createElement("button",{type:"button",onClick:()=>ye(""),title:"清除搜尋","aria-label":"清除搜尋",className:"text-slate-400 hover:text-slate-700"},l.default.createElement(bi,{size:14})))),l.default.createElement("div",{className:"flex items-center gap-3 shrink-0"},l.default.createElement("button",{onClick:()=>aa({mode:"create"}),className:"h-11 px-5 rounded-full text-[0.9em] font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center gap-1 whitespace-nowrap"},l.default.createElement(wi,{size:16}),"新增"),l.default.createElement("div",{className:He},l.default.createElement("button",{onClick:gc,className:Oa(!1)},l.default.createElement(wi,{size:14,className:"text-slate-500"}),"週期工作")),l.default.createElement("div",{className:"relative"},l.default.createElement("button",{onClick:()=>Qn(c=>!c),className:`${He} !p-1.5`},l.default.createElement("span",{className:Oa(Xn)},l.default.createElement(Zl,{size:14,className:"text-slate-500"}),"隱藏")),Xn&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Qn(!1)}),l.default.createElement("div",{className:"absolute right-0 top-full mt-2 z-40 w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},m4.filter(c=>!c.locked).map(c=>l.default.createElement("label",{key:c.id,className:`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none ${c.locked?"text-slate-300":"text-slate-700 hover:bg-slate-50 cursor-pointer"}`},l.default.createElement("input",{type:"checkbox",disabled:c.locked,checked:c.locked||!we.includes(c.id),onChange:()=>Kl(c.id),className:"accent-indigo-600"}),c.label,c.locked&&l.default.createElement(Id,{size:11})))))),l.default.createElement("div",{className:He,title:"文字大小"},[["m","標準",15],["l","大",19]].map(([c,L,m])=>l.default.createElement("button",{key:c,onClick:()=>ta(c),title:L,"aria-label":`文字${L}`,className:`h-8 w-9 rounded-full font-bold leading-none transition-all ${ji===c?"bg-white text-indigo-600 shadow-sm":"text-slate-500 hover:bg-slate-200/50"}`,style:{fontSize:m}},"A"))))),f?l.default.createElement("div",{className:"flex-1 flex items-center justify-center p-6"},l.default.createElement("div",{className:"bg-white rounded-2xl shadow-soft border border-slate-100 p-10 text-center max-w-md"},l.default.createElement("div",{className:"w-16 h-16 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-5"},l.default.createElement(Id,{size:30})),l.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-2"},"無法使用工作日誌"),l.default.createElement("p",{className:"text-slate-500 font-normal"},f),l.default.createElement("p",{className:"text-slate-400 text-[0.85em] mt-3"},"工作日誌只開放給牧者、行政與管理員。"))):l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"px-6 pt-4 pb-2 bg-slate-50 relative z-[15] shrink-0 space-y-3"},l.default.createElement("div",{className:"flex items-center gap-3 flex-wrap"},(n2>0||M==="notice")&&l.default.createElement("button",{onClick:()=>Di("notice"),"aria-label":"提醒",title:"提醒",className:`tbc-bell relative h-11 w-11 rounded-full flex items-center justify-center transition-colors ${M==="notice"?"bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-200":"bg-slate-100 hover:bg-slate-200 text-slate-600"}`},l.default.createElement(d4,{size:18}),n2>0&&l.default.createElement("span",{className:"tbc-bell-count absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[11px] leading-[18px] text-center font-bold"},n2)),l.default.createElement("div",{className:He},l.default.createElement("button",{onClick:()=>Di("mine"),className:Oa(M==="mine")},"我的"),l.default.createElement("button",{onClick:()=>Di("tome"),className:Oa(M==="tome")},"派工給我"),l.default.createElement("button",{onClick:()=>Di("dispatched"),className:Oa(M==="dispatched")},"我派工的"),l.default.createElement("button",{onClick:()=>Di("all"),className:Oa(M==="all")},"全部")),M==="all"&&l.default.createElement("div",{className:"relative"},l.default.createElement("button",{onClick:()=>Ir(c=>!c),className:`${He} !p-1.5`},l.default.createElement("span",{className:Oa(Jn)},l.default.createElement(El,{size:14,className:"text-slate-500"}),"人員（",Pt.size,"/",Pl.length,"）")),Jn&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-30",onClick:()=>Ir(!1)}),l.default.createElement("div",{className:"absolute left-0 top-full mt-2 z-40 w-56 max-h-80 overflow-y-auto custom-scrollbar bg-white rounded-xl shadow-hover-soft border border-slate-100 p-2 animate-fade-in"},l.default.createElement("div",{className:"flex gap-2 px-1 pb-2 mb-1 border-b border-slate-100"},l.default.createElement("button",{onClick:()=>Fr(new Set(Pl.map(c=>c.member_id))),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全選"),l.default.createElement("button",{onClick:()=>Fr(new Set),className:"flex-1 h-8 rounded-full text-[0.85em] text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"},"全不選")),Pl.map(c=>l.default.createElement("label",{key:c.member_id,className:"flex items-center gap-2 px-2 py-1.5 rounded-lg text-[0.9em] select-none text-slate-700 hover:bg-slate-50 cursor-pointer"},l.default.createElement("input",{type:"checkbox",checked:Pt.has(c.member_id),onChange:()=>Fr(L=>{let m=new Set(L);return m.has(c.member_id)?m.delete(c.member_id):m.add(c.member_id),m}),className:"accent-indigo-600"}),c.name))))),M!=="notice"&&l.default.createElement("div",{className:He},l.default.createElement("button",{onClick:()=>H("today"),className:Oa(_==="today")},"今日"),l.default.createElement("button",{onClick:()=>H("week"),className:Oa(_==="week")},"本週"),l.default.createElement("button",{onClick:()=>H("month"),className:Oa(_==="month")},"本月"),l.default.createElement("button",{onClick:()=>H("custom"),className:Oa(_==="custom")},"自訂")),M!=="notice"&&_==="custom"&&l.default.createElement("div",{className:"flex items-center gap-2"},l.default.createElement("input",{type:"date",value:V,max:U||void 0,onChange:c=>{let L=c.target.value;D(L),U&&L>U&&nt(L)},className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"}),l.default.createElement("span",{className:"text-slate-400"},"～"),l.default.createElement("input",{type:"date",value:U,min:V,onChange:c=>{let L=c.target.value;nt(V&&L<V?V:L)},className:"bg-white border border-slate-200 rounded-lg px-3 py-1.5 outline-none text-[0.9em] text-slate-900 focus:ring-2 focus:ring-indigo-500/20"})),l.default.createElement("span",{className:"text-slate-400 text-[0.85em]"},M==="notice"?l.default.createElement("span",null,"提醒的派工　共 ",to.length," 筆"):l.default.createElement(l.default.Fragment,null,qt.start===qt.end?Fa(qt.start):`${Fa(qt.start)} ～ ${Fa(qt.end)}`,l.default.createElement("span",{className:"ml-3"},"共 ",dc," 筆"))))),l.default.createElement("div",{className:"flex-1 overflow-auto custom-scrollbar px-6 pt-2 pb-24"},l.default.createElement("div",{className:"space-y-4",style:{minWidth:q4}},l.default.createElement("div",{className:"grid sticky top-0 z-10 bg-slate-100 border border-slate-300 rounded-lg overflow-hidden text-[0.85em] font-medium text-slate-700",style:{gridTemplateColumns:r2}},l.default.createElement("span",{className:"py-2"}),Ti.map(c=>c.sortable?l.default.createElement("button",{key:c.id,type:"button",onClick:()=>Yn(c.id),title:"點一下排序","aria-sort":At.col===c.id?At.dir==="asc"?"ascending":"descending":"none",className:`py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap font-medium inline-flex items-center justify-center gap-0.5 hover:bg-slate-200/70 transition-colors ${At.col===c.id?"text-indigo-600":""}`},c.label,At.col===c.id&&(At.dir==="asc"?l.default.createElement(t4,{size:14}):l.default.createElement(Ol,{size:14}))):l.default.createElement("span",{key:c.id,className:"py-2 px-2 border-l border-slate-300 text-center whitespace-nowrap"},c.label))),M==="notice"?to.length===0?l.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},"目前沒有提醒"):l.default.createElement("div",{className:"tbc-notice-list bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},to.map(c=>o2(c,null))):w&&p.length===0?l.default.createElement("div",{className:"text-center py-20 text-slate-400 font-medium animate-pulse"},"Loading..."):dc===0?l.default.createElement("div",{className:"text-center py-16 text-slate-400 font-normal bg-white rounded-xl border border-dashed border-slate-200"},Ca.trim()?`找不到符合「${Ca.trim()}」的工作（只搜尋目前顯示的範圍）`:"新增一筆工作，開始記錄"):l.default.createElement(l.default.Fragment,null,In.length>0&&l.default.createElement("div",{className:"bg-white rounded-xl shadow-soft border border-red-100 overflow-hidden"},l.default.createElement("div",{className:"px-4 py-2.5 bg-red-50 border-b border-red-100 flex items-center gap-2 text-red-600 font-bold"},l.default.createElement(Fd,{size:zt})," 逾期未完成 ",l.default.createElement("span",{className:"text-[0.8em] bg-white/80 border border-red-100 px-2 rounded-md"},In.length)),In.map(c=>o2(c,null))),a2.map(c=>{let L=vv(c.date,ua);return l.default.createElement("div",{key:c.date,className:"bg-white rounded-xl shadow-soft border border-slate-100 overflow-hidden"},l.default.createElement("div",{className:"px-4 py-2.5 bg-slate-50/80 border-b border-slate-100 flex items-center gap-2"},l.default.createElement("span",{className:`font-bold ${L.tag==="今天"?"text-indigo-600":"text-slate-800"}`},L.text)),c.rows.map(m=>o2(m,c)))}))))),e2&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm",onClick:()=>i2(null)},l.default.createElement("div",{className:"tbc-return-info bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in",onClick:c=>c.stopPropagation()},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(tc,{size:20,className:"text-amber-600"}),"退回原因"),l.default.createElement("button",{"aria-label":"關閉",onClick:()=>i2(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},l.default.createElement(bi,{size:20}))),l.default.createElement("div",{className:"p-5 space-y-2"},l.default.createElement("div",{className:"tbc-return-title font-bold text-slate-900"},"工作摘要：",e2.item.title),l.default.createElement("div",{className:"tbc-return-reason text-slate-900 whitespace-pre-wrap"},e2.a.return_note)))),cc&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-md rounded-2xl shadow-hover-soft border border-slate-100 overflow-hidden animate-fade-in"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(c4,{size:20,className:"text-indigo-600"}),"退回"),l.default.createElement("button",{onClick:()=>ao(null),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400"},l.default.createElement(bi,{size:20}))),l.default.createElement("div",{className:"p-5 space-y-2"},l.default.createElement("label",{className:"text-xs font-medium text-slate-500"},"原因（選填）"),l.default.createElement("textarea",{autoFocus:!0,value:hc,onChange:c=>uc(c.target.value),rows:3,placeholder:"簡要說明",className:"tbc-return-text w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 outline-none text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"})),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},l.default.createElement("button",{onClick:()=>ao(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full"},"取消"),l.default.createElement("button",{onClick:$4,className:"tbc-return-ok flex-1 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full"},"退回")))),Ot&&ra&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"fixed inset-0 z-[60]",onClick:()=>Ut(null),onContextMenu:c=>{c.preventDefault(),Ut(null)}}),l.default.createElement("div",{className:"fixed z-[70] w-52 bg-white rounded-xl shadow-hover-soft border border-slate-100 p-1.5 animate-fade-in",style:{left:Ot.x,top:Ot.y,fontSize:et}},(()=>{let L=(eo?eo.rows.filter(A=>!A.overdue):[]).findIndex(A=>A.key===ra.key),m=!!eo&&eo.canMove&&L>=0,B=(A,_t,Tt,Mt,sa)=>l.default.createElement("button",{disabled:Mt,onClick:()=>{Ut(null),Tt()},className:`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${sa?"text-red-600 hover:bg-red-50":"text-slate-700 hover:bg-slate-50"}`},l.default.createElement(A,{size:zt-1}),_t);return l.default.createElement(l.default.Fragment,null,ra.isMine&&!ra.canManage&&B(Pd,"編輯",()=>{Hi(A=>new Set(A).add(ra.item.id)),ba("success","點選欄位修改，完成自動通知派工者")}),!ra.item.parent_id&&B(wi,"新增子工作",()=>vc(ra)),ra.canManage&&ra.isRoutine&&B(Pg,"複製",()=>I4(ra)),ra.canManage&&B($d,"刪除",()=>P4(ra),!1,!0))})())),gt&&l.default.createElement(Cv,{key:gt.mode+(gt.rule?gt.rule.id:"")+(gt.parent?gt.parent.id:""),mode:gt.mode,parent:gt.parent,initial:gt.rule||gt.initial,presetRepeat:gt.preset,today:ua,busy:Kn,onClose:()=>aa(null),onSubmit:tp,people:h,meId:o}),Fl&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-xl max-h-[85dvh] rounded-2xl shadow-hover-soft overflow-hidden flex flex-col animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"px-5 py-4 border-b border-slate-100 flex justify-between items-center shrink-0"},l.default.createElement("h3",{className:"text-lg font-bold text-slate-900 flex items-center gap-2"},l.default.createElement(qn,{className:"text-indigo-600",size:20})," 我的週期工作"),l.default.createElement("button",{onClick:()=>$a(!1),className:"p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors"},l.default.createElement(bi,{size:20}))),l.default.createElement("div",{className:"p-5 overflow-y-auto custom-scrollbar space-y-3 flex-1"},l.default.createElement("button",{onClick:()=>{$a(!1),aa({mode:"createRule",preset:"weekly"})},className:"w-full h-11 rounded-full text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5"},l.default.createElement(wi,{size:16}),"新增週期工作"),Rn.length===0?l.default.createElement("div",{className:"text-center py-8 text-slate-400 font-normal bg-slate-50 rounded-xl border border-dashed border-slate-200"},"尚未建立週期工作"):Rn.map(c=>l.default.createElement("div",{key:c.id,className:`flex items-center justify-between gap-3 border rounded-xl p-3 shadow-sm ${c.is_active?"bg-white border-slate-100":"bg-slate-50 border-dashed border-slate-200"}`},l.default.createElement("div",{className:"min-w-0"},l.default.createElement("div",{className:`font-medium truncate ${c.is_active?"text-slate-900":"text-slate-400"}`},c.title),l.default.createElement("div",{className:"text-[0.8em] text-slate-500 mt-0.5"},Mv(c),c.start_time?`　${Ht(c.start_time)}${c.end_time?"~"+Ht(c.end_time):""}`:"",c.until_date?`　到 ${Fa(c.until_date)}`:"",c.is_active?"":"　（暫停）")),l.default.createElement("div",{className:"flex items-center gap-1.5 shrink-0"},l.default.createElement("button",{onClick:()=>{Si.current=!0,$a(!1),aa({mode:"editRule",rule:c})},className:"p-2.5 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-lg active:scale-95 transition-colors",title:"編輯"},l.default.createElement(Pd,{size:16})),l.default.createElement("button",{onClick:()=>ep(c),className:`p-2.5 rounded-lg active:scale-95 transition-colors ${c.is_active?"bg-emerald-50 text-emerald-600 hover:bg-emerald-100":"bg-amber-50 text-amber-600 hover:bg-amber-100"}`,title:c.is_active?"啟用":"暫停","aria-label":c.is_active?"啟用":"暫停"},c.is_active?l.default.createElement(r4,{size:16}):l.default.createElement(a4,{size:16})),l.default.createElement("button",{onClick:()=>ip(c),className:"tbc-rule-del p-2.5 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg active:scale-95 transition-colors",title:"刪除","aria-label":"刪除週期工作"},l.default.createElement($d,{size:16})))))))),z.text&&l.default.createElement("div",{className:"fixed top-24 inset-x-0 z-[110] flex justify-center px-4 pointer-events-none"},l.default.createElement("div",{className:`px-5 py-3 rounded-xl font-medium shadow-soft animate-fade-in flex items-start gap-2 max-w-full w-max ${z.type==="success"?"bg-emerald-600 text-white":"bg-red-600 text-white"}`},l.default.createElement("div",{className:"shrink-0 mt-0.5"},z.type==="success"?l.default.createElement(Ig,{size:18}):l.default.createElement(Ci,{size:18})),l.default.createElement("div",{className:"text-sm leading-snug break-words flex-1"},z.text))),u&&l.default.createElement("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"},l.default.createElement("div",{className:"bg-white w-full max-w-sm rounded-2xl shadow-hover-soft flex flex-col overflow-hidden animate-fade-in border border-slate-100"},l.default.createElement("div",{className:"p-8 text-center"},l.default.createElement("div",{className:"w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 bg-red-50 text-red-500"},l.default.createElement(Ci,{size:32})),l.default.createElement("h3",{className:"text-xl font-bold text-slate-900 mb-3"},u.title),l.default.createElement("p",{className:"text-sm font-normal text-slate-500 whitespace-pre-line"},u.message)),l.default.createElement("div",{className:"p-3 bg-slate-50 flex gap-2 border-t border-slate-100"},l.default.createElement("button",{onClick:()=>v(null),className:"flex-1 py-3 font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-colors"},"取消"),l.default.createElement("button",{onClick:u.onConfirm,className:"flex-1 py-3 font-medium text-white rounded-full transition-all duration-200 bg-red-500 hover:bg-red-600"},u.confirmText||"確定"))))))},T4=bv;var N4=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
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
  .w-44 {
    width: calc(var(--spacing) * 44);
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
  .\\!text-red-600 {
    color: var(--color-red-600) !important;
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
  .\\[\\&_\\*\\]\\:\\!text-red-600 * {
    color: var(--color-red-600) !important;
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
`;var Bv="https://jcepavwocdujoeoqxvsd.supabase.co",jv="sb_publishable_Tj2n8e3yY1HyvaFzXRyO_w_PWrVFB7E",nc=document.createElement("style");nc.id="tbc-one-css";nc.textContent=N4;document.head.appendChild(nc);var me=window.__TBC_SB||window.supabase.createClient(Bv,jv),Wv=({page:t})=>{let[a,r]=(0,St.useState)(void 0),[e,i]=(0,St.useState)(""),[n,o]=(0,St.useState)({status:"loading",name:"",role:"member"});(0,St.useEffect)(()=>{let f=!0;me.auth.getSession().then(({data:p})=>{f&&r(p.session||null)});let{data:k}=me.auth.onAuthStateChange((p,x)=>{f&&r(x||null)});return()=>{f=!1,k&&k.subscription&&k.subscription.unsubscribe()}},[]);let d=a&&a.user&&a.user.id;(0,St.useEffect)(()=>{if(!a)return;let f=!0;return f4(me,a).then(async k=>{if(f){if(k.status!=="ok"||!g4.includes(k.role)){try{await me.auth.signOut()}catch{}i("權限不足"),r(null);return}i(""),o(k)}}),()=>{f=!1}},[d]);let h=async()=>{try{await me.auth.signOut()}catch{}r(null),o({status:"loading",name:"",role:"member"})};if(a===void 0)return St.default.createElement("div",{className:"h-[100dvh] bg-white"});if(!a)return St.default.createElement("div",{className:"min-h-[100dvh] bg-white flex flex-col items-center justify-center px-6"},St.default.createElement("div",{className:"w-14 h-14 rounded-full border-2 border-[#7e00c8] text-[#7e00c8] flex items-center justify-center mb-5"},St.default.createElement(Ul,{size:30})),St.default.createElement("h1",{className:"text-4xl font-semibold text-slate-900"},"TBC ONE"),St.default.createElement("p",{className:"mt-3 mb-10 text-slate-500"},"One God. One Church. One Mission."),St.default.createElement(k4,{supabase:me,notice:e}));if(n.status!=="ok")return St.default.createElement("div",{className:"h-[100dvh] bg-white"});let g={identity:n,onLogout:h};return t==="work"?St.default.createElement(T4,{session:a,supabase:me,utils:{},shell:g}):St.default.createElement(L4,{shell:g})},E4=document.getElementById("root");(0,D4.createRoot)(E4).render(St.default.createElement(Wv,{page:E4.getAttribute("data-page")||"home"}));})();
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
