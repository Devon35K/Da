(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();var jd={exports:{}},So={},Xd={exports:{}},zt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function wy(){if(jg)return zt;jg=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(b){return b===null||typeof b!="object"?null:(b=g&&b[g]||b["@@iterator"],typeof b=="function"?b:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(b,H,xe){this.props=b,this.context=H,this.refs=E,this.updater=xe||_}y.prototype.isReactComponent={},y.prototype.setState=function(b,H){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,H,"setState")},y.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function S(){}S.prototype=y.prototype;function A(b,H,xe){this.props=b,this.context=H,this.refs=E,this.updater=xe||_}var P=A.prototype=new S;P.constructor=A,M(P,y.prototype),P.isPureReactComponent=!0;var I=Array.isArray,k=Object.prototype.hasOwnProperty,F={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function w(b,H,xe){var be,Me={},ee=null,re=null;if(H!=null)for(be in H.ref!==void 0&&(re=H.ref),H.key!==void 0&&(ee=""+H.key),H)k.call(H,be)&&!V.hasOwnProperty(be)&&(Me[be]=H[be]);var ce=arguments.length-2;if(ce===1)Me.children=xe;else if(1<ce){for(var ge=Array(ce),Oe=0;Oe<ce;Oe++)ge[Oe]=arguments[Oe+2];Me.children=ge}if(b&&b.defaultProps)for(be in ce=b.defaultProps,ce)Me[be]===void 0&&(Me[be]=ce[be]);return{$$typeof:s,type:b,key:ee,ref:re,props:Me,_owner:F.current}}function L(b,H){return{$$typeof:s,type:b.type,key:H,ref:b.ref,props:b.props,_owner:b._owner}}function z(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function B(b){var H={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(xe){return H[xe]})}var Y=/\/+/g;function se(b,H){return typeof b=="object"&&b!==null&&b.key!=null?B(""+b.key):H.toString(36)}function de(b,H,xe,be,Me){var ee=typeof b;(ee==="undefined"||ee==="boolean")&&(b=null);var re=!1;if(b===null)re=!0;else switch(ee){case"string":case"number":re=!0;break;case"object":switch(b.$$typeof){case s:case e:re=!0}}if(re)return re=b,Me=Me(re),b=be===""?"."+se(re,0):be,I(Me)?(xe="",b!=null&&(xe=b.replace(Y,"$&/")+"/"),de(Me,H,xe,"",function(Oe){return Oe})):Me!=null&&(z(Me)&&(Me=L(Me,xe+(!Me.key||re&&re.key===Me.key?"":(""+Me.key).replace(Y,"$&/")+"/")+b)),H.push(Me)),1;if(re=0,be=be===""?".":be+":",I(b))for(var ce=0;ce<b.length;ce++){ee=b[ce];var ge=be+se(ee,ce);re+=de(ee,H,xe,ge,Me)}else if(ge=v(b),typeof ge=="function")for(b=ge.call(b),ce=0;!(ee=b.next()).done;)ee=ee.value,ge=be+se(ee,ce++),re+=de(ee,H,xe,ge,Me);else if(ee==="object")throw H=String(b),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return re}function W(b,H,xe){if(b==null)return b;var be=[],Me=0;return de(b,be,"","",function(ee){return H.call(xe,ee,Me++)}),be}function J(b){if(b._status===-1){var H=b._result;H=H(),H.then(function(xe){(b._status===0||b._status===-1)&&(b._status=1,b._result=xe)},function(xe){(b._status===0||b._status===-1)&&(b._status=2,b._result=xe)}),b._status===-1&&(b._status=0,b._result=H)}if(b._status===1)return b._result.default;throw b._result}var K={current:null},te={transition:null},le={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:te,ReactCurrentOwner:F};function D(){throw Error("act(...) is not supported in production builds of React.")}return zt.Children={map:W,forEach:function(b,H,xe){W(b,function(){H.apply(this,arguments)},xe)},count:function(b){var H=0;return W(b,function(){H++}),H},toArray:function(b){return W(b,function(H){return H})||[]},only:function(b){if(!z(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},zt.Component=y,zt.Fragment=t,zt.Profiler=a,zt.PureComponent=A,zt.StrictMode=i,zt.Suspense=h,zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,zt.act=D,zt.cloneElement=function(b,H,xe){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var be=M({},b.props),Me=b.key,ee=b.ref,re=b._owner;if(H!=null){if(H.ref!==void 0&&(ee=H.ref,re=F.current),H.key!==void 0&&(Me=""+H.key),b.type&&b.type.defaultProps)var ce=b.type.defaultProps;for(ge in H)k.call(H,ge)&&!V.hasOwnProperty(ge)&&(be[ge]=H[ge]===void 0&&ce!==void 0?ce[ge]:H[ge])}var ge=arguments.length-2;if(ge===1)be.children=xe;else if(1<ge){ce=Array(ge);for(var Oe=0;Oe<ge;Oe++)ce[Oe]=arguments[Oe+2];be.children=ce}return{$$typeof:s,type:b.type,key:Me,ref:ee,props:be,_owner:re}},zt.createContext=function(b){return b={$$typeof:c,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:o,_context:b},b.Consumer=b},zt.createElement=w,zt.createFactory=function(b){var H=w.bind(null,b);return H.type=b,H},zt.createRef=function(){return{current:null}},zt.forwardRef=function(b){return{$$typeof:d,render:b}},zt.isValidElement=z,zt.lazy=function(b){return{$$typeof:m,_payload:{_status:-1,_result:b},_init:J}},zt.memo=function(b,H){return{$$typeof:f,type:b,compare:H===void 0?null:H}},zt.startTransition=function(b){var H=te.transition;te.transition={};try{b()}finally{te.transition=H}},zt.unstable_act=D,zt.useCallback=function(b,H){return K.current.useCallback(b,H)},zt.useContext=function(b){return K.current.useContext(b)},zt.useDebugValue=function(){},zt.useDeferredValue=function(b){return K.current.useDeferredValue(b)},zt.useEffect=function(b,H){return K.current.useEffect(b,H)},zt.useId=function(){return K.current.useId()},zt.useImperativeHandle=function(b,H,xe){return K.current.useImperativeHandle(b,H,xe)},zt.useInsertionEffect=function(b,H){return K.current.useInsertionEffect(b,H)},zt.useLayoutEffect=function(b,H){return K.current.useLayoutEffect(b,H)},zt.useMemo=function(b,H){return K.current.useMemo(b,H)},zt.useReducer=function(b,H,xe){return K.current.useReducer(b,H,xe)},zt.useRef=function(b){return K.current.useRef(b)},zt.useState=function(b){return K.current.useState(b)},zt.useSyncExternalStore=function(b,H,xe){return K.current.useSyncExternalStore(b,H,xe)},zt.useTransition=function(){return K.current.useTransition()},zt.version="18.3.1",zt}var Xg;function Xh(){return Xg||(Xg=1,Xd.exports=wy()),Xd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function Ty(){if($g)return So;$g=1;var s=Xh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,f){var m,g={},v=null,_=null;f!==void 0&&(v=""+f),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(_=h.ref);for(m in h)i.call(h,m)&&!o.hasOwnProperty(m)&&(g[m]=h[m]);if(d&&d.defaultProps)for(m in h=d.defaultProps,h)g[m]===void 0&&(g[m]=h[m]);return{$$typeof:e,type:d,key:v,ref:_,props:g,_owner:a.current}}return So.Fragment=t,So.jsx=c,So.jsxs=c,So}var Yg;function Ay(){return Yg||(Yg=1,jd.exports=Ty()),jd.exports}var C=Ay(),sc={},$d={exports:{}},ui={},Yd={exports:{}},qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function Ry(){return qg||(qg=1,(function(s){function e(te,le){var D=te.length;te.push(le);e:for(;0<D;){var b=D-1>>>1,H=te[b];if(0<a(H,le))te[b]=le,te[D]=H,D=b;else break e}}function t(te){return te.length===0?null:te[0]}function i(te){if(te.length===0)return null;var le=te[0],D=te.pop();if(D!==le){te[0]=D;e:for(var b=0,H=te.length,xe=H>>>1;b<xe;){var be=2*(b+1)-1,Me=te[be],ee=be+1,re=te[ee];if(0>a(Me,D))ee<H&&0>a(re,Me)?(te[b]=re,te[ee]=D,b=ee):(te[b]=Me,te[be]=D,b=be);else if(ee<H&&0>a(re,D))te[b]=re,te[ee]=D,b=ee;else break e}}return le}function a(te,le){var D=te.sortIndex-le.sortIndex;return D!==0?D:te.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;s.unstable_now=function(){return o.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var h=[],f=[],m=1,g=null,v=3,_=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(te){for(var le=t(f);le!==null;){if(le.callback===null)i(f);else if(le.startTime<=te)i(f),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(f)}}function I(te){if(E=!1,P(te),!M)if(t(h)!==null)M=!0,J(k);else{var le=t(f);le!==null&&K(I,le.startTime-te)}}function k(te,le){M=!1,E&&(E=!1,S(w),w=-1),_=!0;var D=v;try{for(P(le),g=t(h);g!==null&&(!(g.expirationTime>le)||te&&!B());){var b=g.callback;if(typeof b=="function"){g.callback=null,v=g.priorityLevel;var H=b(g.expirationTime<=le);le=s.unstable_now(),typeof H=="function"?g.callback=H:g===t(h)&&i(h),P(le)}else i(h);g=t(h)}if(g!==null)var xe=!0;else{var be=t(f);be!==null&&K(I,be.startTime-le),xe=!1}return xe}finally{g=null,v=D,_=!1}}var F=!1,V=null,w=-1,L=5,z=-1;function B(){return!(s.unstable_now()-z<L)}function Y(){if(V!==null){var te=s.unstable_now();z=te;var le=!0;try{le=V(!0,te)}finally{le?se():(F=!1,V=null)}}else F=!1}var se;if(typeof A=="function")se=function(){A(Y)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,W=de.port2;de.port1.onmessage=Y,se=function(){W.postMessage(null)}}else se=function(){y(Y,0)};function J(te){V=te,F||(F=!0,se())}function K(te,le){w=y(function(){te(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(te){te.callback=null},s.unstable_continueExecution=function(){M||_||(M=!0,J(k))},s.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<te?Math.floor(1e3/te):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(te){switch(v){case 1:case 2:case 3:var le=3;break;default:le=v}var D=v;v=le;try{return te()}finally{v=D}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(te,le){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var D=v;v=te;try{return le()}finally{v=D}},s.unstable_scheduleCallback=function(te,le,D){var b=s.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?b+D:b):D=b,te){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=D+H,te={id:m++,callback:le,priorityLevel:te,startTime:D,expirationTime:H,sortIndex:-1},D>b?(te.sortIndex=D,e(f,te),t(h)===null&&te===t(f)&&(E?(S(w),w=-1):E=!0,K(I,D-b))):(te.sortIndex=H,e(h,te),M||_||(M=!0,J(k))),te},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(te){var le=v;return function(){var D=v;v=le;try{return te.apply(this,arguments)}finally{v=D}}}})(qd)),qd}var Kg;function Cy(){return Kg||(Kg=1,Yd.exports=Ry()),Yd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function Py(){if(Zg)return ui;Zg=1;var s=Xh(),e=Cy();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function o(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)i.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(n){return h.call(g,n)?!0:h.call(m,n)?!1:f.test(n)?g[n]=!0:(m[n]=!0,!1)}function _(n,r,l,u){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,u){if(r===null||typeof r>"u"||_(n,r,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,u,p,x,R){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=x,this.removeEmptyString=R}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,A);y[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,A);y[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,A);y[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,l,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,u)&&(l=null),u||p===null?v(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,u=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?n.setAttributeNS(u,r,l):n.setAttribute(r,l))))}var I=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),F=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),B=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),te=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var D=Object.assign,b;function H(n){if(b===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);b=r&&r[1]||""}return`
`+b+n}var xe=!1;function be(n,r){if(!n||xe)return"";xe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(pe){var u=pe}Reflect.construct(n,[],r)}else{try{r.call()}catch(pe){u=pe}n.call(r.prototype)}else{try{throw Error()}catch(pe){u=pe}n()}}catch(pe){if(pe&&u&&typeof pe.stack=="string"){for(var p=pe.stack.split(`
`),x=u.stack.split(`
`),R=p.length-1,O=x.length-1;1<=R&&0<=O&&p[R]!==x[O];)O--;for(;1<=R&&0<=O;R--,O--)if(p[R]!==x[O]){if(R!==1||O!==1)do if(R--,O--,0>O||p[R]!==x[O]){var j=`
`+p[R].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=R&&0<=O);break}}}finally{xe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?H(n):""}function Me(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=be(n.type,!1),n;case 11:return n=be(n.type.render,!1),n;case 1:return n=be(n.type,!0),n;default:return""}}function ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case F:return"Portal";case L:return"Profiler";case w:return"StrictMode";case se:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case Y:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return r=n.displayName||null,r!==null?r:ee(n.type)||"Memo";case J:r=n._payload,n=n._init;try{return ee(n(r))}catch{}}return null}function re(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ge(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Oe(n){var r=ge(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,x=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(R){u=""+R,x.call(this,R)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(R){u=""+R},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Le(n){n._valueTracker||(n._valueTracker=Oe(n))}function ut(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),u="";return n&&(u=ge(n)?n.checked?"true":"false":n.value),n=u,n!==l?(r.setValue(n),!0):!1}function Qe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function We(n,r){var l=r.checked;return D({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function vt(n,r){var l=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;l=ce(r.value!=null?r.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function dt(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function It(n,r){dt(n,r);var l=ce(r.value),u=r.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?sn(n,r.type,l):r.hasOwnProperty("defaultValue")&&sn(n,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ut(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function sn(n,r,l){(r!=="number"||Qe(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var X=Array.isArray;function Kt(n,r,l,u){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&u&&(n[l].defaultSelected=!0)}else{for(l=""+ce(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function wt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return D({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $t(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(X(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:ce(l)}}function Ge(n,r){var l=ce(r.value),u=ce(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function Jt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?U(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ne,ye=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ne=ne||document.createElement("div"),ne.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function we(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ne={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Ne).forEach(function(n){ke.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ne[r]=Ne[n]})});function ve(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ne.hasOwnProperty(n)&&Ne[n]?(""+r).trim():r+"px"}function Se(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=ve(l,r[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,p):n[l]=p}}var je=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(n,r){if(r){if(je[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Be(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function xt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var yt=null,Tt=null,$=null;function Ue(n){if(n=so(n)){if(typeof yt!="function")throw Error(t(280));var r=n.stateNode;r&&(r=yl(r),yt(n.stateNode,n.type,r))}}function _e(n){Tt?$?$.push(n):$=[n]:Tt=n}function Ye(){if(Tt){var n=Tt,r=$;if($=Tt=null,Ue(n),r)for(n=0;n<r.length;n++)Ue(r[n])}}function ze(n,r){return n(r)}function Ae(){}var tt=!1;function St(n,r,l){if(tt)return n(r,l);tt=!0;try{return ze(n,r,l)}finally{tt=!1,(Tt!==null||$!==null)&&(Ae(),Ye())}}function Qt(n,r){var l=n.stateNode;if(l===null)return null;var u=yl(l);if(u===null)return null;l=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var fe=!1;if(d)try{var Ee={};Object.defineProperty(Ee,"passive",{get:function(){fe=!0}}),window.addEventListener("test",Ee,Ee),window.removeEventListener("test",Ee,Ee)}catch{fe=!1}function Te(n,r,l,u,p,x,R,O,j){var pe=Array.prototype.slice.call(arguments,3);try{r.apply(l,pe)}catch(Pe){this.onError(Pe)}}var Ce=!1,et=null,mt=!1,me=null,at={onError:function(n){Ce=!0,et=n}};function Et(n,r,l,u,p,x,R,O,j){Ce=!1,et=null,Te.apply(at,arguments)}function Ct(n,r,l,u,p,x,R,O,j){if(Et.apply(this,arguments),Ce){if(Ce){var pe=et;Ce=!1,et=null}else throw Error(t(198));mt||(mt=!0,me=pe)}}function Pt(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function bt(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function _t(n){if(Pt(n)!==n)throw Error(t(188))}function Sn(n){var r=n.alternate;if(!r){if(r=Pt(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,u=r;;){var p=l.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===l)return _t(p),n;if(x===u)return _t(p),r;x=x.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=x;else{for(var R=!1,O=p.child;O;){if(O===l){R=!0,l=p,u=x;break}if(O===u){R=!0,u=p,l=x;break}O=O.sibling}if(!R){for(O=x.child;O;){if(O===l){R=!0,l=x,u=p;break}if(O===u){R=!0,u=x,l=p;break}O=O.sibling}if(!R)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Jn(n){return n=Sn(n),n!==null?kt(n):null}function kt(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=kt(n);if(r!==null)return r;n=n.sibling}return null}var Gt=e.unstable_scheduleCallback,pn=e.unstable_cancelCallback,jt=e.unstable_shouldYield,on=e.unstable_requestPaint,ft=e.unstable_now,Rn=e.unstable_getCurrentPriorityLevel,Bn=e.unstable_ImmediatePriority,N=e.unstable_UserBlockingPriority,Q=e.unstable_NormalPriority,he=e.unstable_LowPriority,ie=e.unstable_IdlePriority,oe=null,He=null;function Ze(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(oe,n,void 0,(n.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:At,it=Math.log,lt=Math.LN2;function At(n){return n>>>=0,n===0?32:31-(it(n)/lt|0)|0}var Rt=64,st=4194304;function Xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function cn(n,r){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,x=n.pingedLanes,R=l&268435455;if(R!==0){var O=R&~p;O!==0?u=Xt(O):(x&=R,x!==0&&(u=Xt(x)))}else R=l&~p,R!==0?u=Xt(R):x!==0&&(u=Xt(x));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,x=r&-r,p>=x||p===16&&(x&4194240)!==0))return r;if((u&4)!==0&&(u|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)l=31-Ve(r),p=1<<l,u|=n[l],r&=~p;return u}function mn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function en(n,r){for(var l=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var R=31-Ve(x),O=1<<R,j=p[R];j===-1?((O&l)===0||(O&u)!==0)&&(p[R]=mn(O,r)):j<=r&&(n.expiredLanes|=O),x&=~O}}function wn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qe(){var n=Rt;return Rt<<=1,(Rt&4194240)===0&&(Rt=64),n}function zn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Ft(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ve(r),n[r]=l}function ii(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Ve(l),x=1<<p;r[p]=0,u[p]=-1,n[p]=-1,l&=~x}}function ri(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var u=31-Ve(l),p=1<<u;p&r|n[u]&r&&(n[u]|=r),l&=~p}}var Bt=0;function ur(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zt,dn,Di,tn,Ui,Yi=!1,ms=[],Or=null,kr=null,Br=null,Ga=new Map,Wa=new Map,zr=[],$x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rp(n,r){switch(n){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Ga.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(r.pointerId)}}function ja(n,r,l,u,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:r,domEventName:l,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},r!==null&&(r=so(r),r!==null&&dn(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function Yx(n,r,l,u,p){switch(r){case"focusin":return Or=ja(Or,n,r,l,u,p),!0;case"dragenter":return kr=ja(kr,n,r,l,u,p),!0;case"mouseover":return Br=ja(Br,n,r,l,u,p),!0;case"pointerover":var x=p.pointerId;return Ga.set(x,ja(Ga.get(x)||null,n,r,l,u,p)),!0;case"gotpointercapture":return x=p.pointerId,Wa.set(x,ja(Wa.get(x)||null,n,r,l,u,p)),!0}return!1}function Cp(n){var r=gs(n.target);if(r!==null){var l=Pt(r);if(l!==null){if(r=l.tag,r===13){if(r=bt(l),r!==null){n.blockedOn=r,Ui(n.priority,function(){Di(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function al(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=xu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);De=u,l.target.dispatchEvent(u),De=null}else return r=so(l),r!==null&&dn(r),n.blockedOn=l,!1;r.shift()}return!0}function Pp(n,r,l){al(n)&&l.delete(r)}function qx(){Yi=!1,Or!==null&&al(Or)&&(Or=null),kr!==null&&al(kr)&&(kr=null),Br!==null&&al(Br)&&(Br=null),Ga.forEach(Pp),Wa.forEach(Pp)}function Xa(n,r){n.blockedOn===r&&(n.blockedOn=null,Yi||(Yi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,qx)))}function $a(n){function r(p){return Xa(p,n)}if(0<ms.length){Xa(ms[0],n);for(var l=1;l<ms.length;l++){var u=ms[l];u.blockedOn===n&&(u.blockedOn=null)}}for(Or!==null&&Xa(Or,n),kr!==null&&Xa(kr,n),Br!==null&&Xa(Br,n),Ga.forEach(r),Wa.forEach(r),l=0;l<zr.length;l++)u=zr[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<zr.length&&(l=zr[0],l.blockedOn===null);)Cp(l),l.blockedOn===null&&zr.shift()}var Vs=I.ReactCurrentBatchConfig,ol=!0;function Kx(n,r,l,u){var p=Bt,x=Vs.transition;Vs.transition=null;try{Bt=1,vu(n,r,l,u)}finally{Bt=p,Vs.transition=x}}function Zx(n,r,l,u){var p=Bt,x=Vs.transition;Vs.transition=null;try{Bt=4,vu(n,r,l,u)}finally{Bt=p,Vs.transition=x}}function vu(n,r,l,u){if(ol){var p=xu(n,r,l,u);if(p===null)Uu(n,r,u,ll,l),Rp(n,u);else if(Yx(p,n,r,l,u))u.stopPropagation();else if(Rp(n,u),r&4&&-1<$x.indexOf(n)){for(;p!==null;){var x=so(p);if(x!==null&&Zt(x),x=xu(n,r,l,u),x===null&&Uu(n,r,u,ll,l),x===p)break;p=x}p!==null&&u.stopPropagation()}else Uu(n,r,u,null,l)}}var ll=null;function xu(n,r,l,u){if(ll=null,n=xt(u),n=gs(n),n!==null)if(r=Pt(n),r===null)n=null;else if(l=r.tag,l===13){if(n=bt(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return ll=n,null}function Np(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rn()){case Bn:return 1;case N:return 4;case Q:case he:return 16;case ie:return 536870912;default:return 16}default:return 16}}var Vr=null,_u=null,cl=null;function Lp(){if(cl)return cl;var n,r=_u,l=r.length,u,p="value"in Vr?Vr.value:Vr.textContent,x=p.length;for(n=0;n<l&&r[n]===p[n];n++);var R=l-n;for(u=1;u<=R&&r[l-u]===p[x-u];u++);return cl=p.slice(n,1<u?1-u:void 0)}function ul(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function dl(){return!0}function Ip(){return!1}function gi(n){function r(l,u,p,x,R){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=R,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(l=n[O],this[O]=l?l(x):x[O]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?dl:Ip,this.isPropagationStopped=Ip,this}return D(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),r}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yu=gi(Hs),Ya=D({},Hs,{view:0,detail:0}),Jx=gi(Ya),Su,Mu,qa,fl=D({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qa&&(qa&&n.type==="mousemove"?(Su=n.screenX-qa.screenX,Mu=n.screenY-qa.screenY):Mu=Su=0,qa=n),Su)},movementY:function(n){return"movementY"in n?n.movementY:Mu}}),Dp=gi(fl),Qx=D({},fl,{dataTransfer:0}),e_=gi(Qx),t_=D({},Ya,{relatedTarget:0}),Eu=gi(t_),n_=D({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),i_=gi(n_),r_=D({},Hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),s_=gi(r_),a_=D({},Hs,{data:0}),Up=gi(a_),o_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=c_[n])?!!r[n]:!1}function bu(){return u_}var d_=D({},Ya,{key:function(n){if(n.key){var r=o_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ul(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?l_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(n){return n.type==="keypress"?ul(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ul(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f_=gi(d_),h_=D({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=gi(h_),p_=D({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),m_=gi(p_),g_=D({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),v_=gi(g_),x_=D({},fl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),__=gi(x_),y_=[9,13,27,32],wu=d&&"CompositionEvent"in window,Ka=null;d&&"documentMode"in document&&(Ka=document.documentMode);var S_=d&&"TextEvent"in window&&!Ka,Op=d&&(!wu||Ka&&8<Ka&&11>=Ka),kp=" ",Bp=!1;function zp(n,r){switch(n){case"keyup":return y_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Gs=!1;function M_(n,r){switch(n){case"compositionend":return Vp(r);case"keypress":return r.which!==32?null:(Bp=!0,kp);case"textInput":return n=r.data,n===kp&&Bp?null:n;default:return null}}function E_(n,r){if(Gs)return n==="compositionend"||!wu&&zp(n,r)?(n=Lp(),cl=_u=Vr=null,Gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Op&&r.locale!=="ko"?null:r.data;default:return null}}var b_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!b_[n.type]:r==="textarea"}function Gp(n,r,l,u){_e(u),r=vl(r,"onChange"),0<r.length&&(l=new yu("onChange","change",null,l,u),n.push({event:l,listeners:r}))}var Za=null,Ja=null;function w_(n){om(n,0)}function hl(n){var r=Ys(n);if(ut(r))return n}function T_(n,r){if(n==="change")return r}var Wp=!1;if(d){var Tu;if(d){var Au="oninput"in document;if(!Au){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Au=typeof jp.oninput=="function"}Tu=Au}else Tu=!1;Wp=Tu&&(!document.documentMode||9<document.documentMode)}function Xp(){Za&&(Za.detachEvent("onpropertychange",$p),Ja=Za=null)}function $p(n){if(n.propertyName==="value"&&hl(Ja)){var r=[];Gp(r,Ja,n,xt(n)),St(w_,r)}}function A_(n,r,l){n==="focusin"?(Xp(),Za=r,Ja=l,Za.attachEvent("onpropertychange",$p)):n==="focusout"&&Xp()}function R_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hl(Ja)}function C_(n,r){if(n==="click")return hl(r)}function P_(n,r){if(n==="input"||n==="change")return hl(r)}function N_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Fi=typeof Object.is=="function"?Object.is:N_;function Qa(n,r){if(Fi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!h.call(r,p)||!Fi(n[p],r[p]))return!1}return!0}function Yp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qp(n,r){var l=Yp(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=r&&u>=r)return{node:l,offset:r-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Yp(l)}}function Kp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Kp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Zp(){for(var n=window,r=Qe();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Qe(n.document)}return r}function Ru(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function L_(n){var r=Zp(),l=n.focusedElem,u=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Kp(l.ownerDocument.documentElement,l)){if(u!==null&&Ru(l)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!n.extend&&x>u&&(p=u,u=x,x=p),p=qp(l,x);var R=qp(l,u);p&&R&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==R.node||n.focusOffset!==R.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),x>u?(n.addRange(r),n.extend(R.node,R.offset)):(r.setEnd(R.node,R.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var I_=d&&"documentMode"in document&&11>=document.documentMode,Ws=null,Cu=null,eo=null,Pu=!1;function Jp(n,r,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Pu||Ws==null||Ws!==Qe(u)||(u=Ws,"selectionStart"in u&&Ru(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),eo&&Qa(eo,u)||(eo=u,u=vl(Cu,"onSelect"),0<u.length&&(r=new yu("onSelect","select",null,r,l),n.push({event:r,listeners:u}),r.target=Ws)))}function pl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var js={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Nu={},Qp={};d&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function ml(n){if(Nu[n])return Nu[n];if(!js[n])return n;var r=js[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Qp)return Nu[n]=r[l];return n}var em=ml("animationend"),tm=ml("animationiteration"),nm=ml("animationstart"),im=ml("transitionend"),rm=new Map,sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,r){rm.set(n,r),o(r,[n])}for(var Lu=0;Lu<sm.length;Lu++){var Iu=sm[Lu],D_=Iu.toLowerCase(),U_=Iu[0].toUpperCase()+Iu.slice(1);Hr(D_,"on"+U_)}Hr(em,"onAnimationEnd"),Hr(tm,"onAnimationIteration"),Hr(nm,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(im,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F_=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function am(n,r,l){var u=n.type||"unknown-event";n.currentTarget=l,Ct(u,r,void 0,n),n.currentTarget=null}function om(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],p=u.event;u=u.listeners;e:{var x=void 0;if(r)for(var R=u.length-1;0<=R;R--){var O=u[R],j=O.instance,pe=O.currentTarget;if(O=O.listener,j!==x&&p.isPropagationStopped())break e;am(p,O,pe),x=j}else for(R=0;R<u.length;R++){if(O=u[R],j=O.instance,pe=O.currentTarget,O=O.listener,j!==x&&p.isPropagationStopped())break e;am(p,O,pe),x=j}}}if(mt)throw n=me,mt=!1,me=null,n}function fn(n,r){var l=r[Vu];l===void 0&&(l=r[Vu]=new Set);var u=n+"__bubble";l.has(u)||(lm(r,n,2,!1),l.add(u))}function Du(n,r,l){var u=0;r&&(u|=4),lm(l,n,u,r)}var gl="_reactListening"+Math.random().toString(36).slice(2);function no(n){if(!n[gl]){n[gl]=!0,i.forEach(function(l){l!=="selectionchange"&&(F_.has(l)||Du(l,!1,n),Du(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[gl]||(r[gl]=!0,Du("selectionchange",!1,r))}}function lm(n,r,l,u){switch(Np(r)){case 1:var p=Kx;break;case 4:p=Zx;break;default:p=vu}l=p.bind(null,r,l,n),p=void 0,!fe||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Uu(n,r,l,u,p){var x=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var R=u.tag;if(R===3||R===4){var O=u.stateNode.containerInfo;if(O===p||O.nodeType===8&&O.parentNode===p)break;if(R===4)for(R=u.return;R!==null;){var j=R.tag;if((j===3||j===4)&&(j=R.stateNode.containerInfo,j===p||j.nodeType===8&&j.parentNode===p))return;R=R.return}for(;O!==null;){if(R=gs(O),R===null)return;if(j=R.tag,j===5||j===6){u=x=R;continue e}O=O.parentNode}}u=u.return}St(function(){var pe=x,Pe=xt(l),Ie=[];e:{var Re=rm.get(n);if(Re!==void 0){var Ke=yu,nt=n;switch(n){case"keypress":if(ul(l)===0)break e;case"keydown":case"keyup":Ke=f_;break;case"focusin":nt="focus",Ke=Eu;break;case"focusout":nt="blur",Ke=Eu;break;case"beforeblur":case"afterblur":Ke=Eu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=e_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=m_;break;case em:case tm:case nm:Ke=i_;break;case im:Ke=v_;break;case"scroll":Ke=Jx;break;case"wheel":Ke=__;break;case"copy":case"cut":case"paste":Ke=s_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=Fp}var rt=(r&4)!==0,bn=!rt&&n==="scroll",ae=rt?Re!==null?Re+"Capture":null:Re;rt=[];for(var q=pe,ue;q!==null;){ue=q;var Fe=ue.stateNode;if(ue.tag===5&&Fe!==null&&(ue=Fe,ae!==null&&(Fe=Qt(q,ae),Fe!=null&&rt.push(io(q,Fe,ue)))),bn)break;q=q.return}0<rt.length&&(Re=new Ke(Re,nt,null,l,Pe),Ie.push({event:Re,listeners:rt}))}}if((r&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",Ke=n==="mouseout"||n==="pointerout",Re&&l!==De&&(nt=l.relatedTarget||l.fromElement)&&(gs(nt)||nt[dr]))break e;if((Ke||Re)&&(Re=Pe.window===Pe?Pe:(Re=Pe.ownerDocument)?Re.defaultView||Re.parentWindow:window,Ke?(nt=l.relatedTarget||l.toElement,Ke=pe,nt=nt?gs(nt):null,nt!==null&&(bn=Pt(nt),nt!==bn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(Ke=null,nt=pe),Ke!==nt)){if(rt=Dp,Fe="onMouseLeave",ae="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(rt=Fp,Fe="onPointerLeave",ae="onPointerEnter",q="pointer"),bn=Ke==null?Re:Ys(Ke),ue=nt==null?Re:Ys(nt),Re=new rt(Fe,q+"leave",Ke,l,Pe),Re.target=bn,Re.relatedTarget=ue,Fe=null,gs(Pe)===pe&&(rt=new rt(ae,q+"enter",nt,l,Pe),rt.target=ue,rt.relatedTarget=bn,Fe=rt),bn=Fe,Ke&&nt)t:{for(rt=Ke,ae=nt,q=0,ue=rt;ue;ue=Xs(ue))q++;for(ue=0,Fe=ae;Fe;Fe=Xs(Fe))ue++;for(;0<q-ue;)rt=Xs(rt),q--;for(;0<ue-q;)ae=Xs(ae),ue--;for(;q--;){if(rt===ae||ae!==null&&rt===ae.alternate)break t;rt=Xs(rt),ae=Xs(ae)}rt=null}else rt=null;Ke!==null&&cm(Ie,Re,Ke,rt,!1),nt!==null&&bn!==null&&cm(Ie,bn,nt,rt,!0)}}e:{if(Re=pe?Ys(pe):window,Ke=Re.nodeName&&Re.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&Re.type==="file")var ot=T_;else if(Hp(Re))if(Wp)ot=P_;else{ot=R_;var ht=A_}else(Ke=Re.nodeName)&&Ke.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(ot=C_);if(ot&&(ot=ot(n,pe))){Gp(Ie,ot,l,Pe);break e}ht&&ht(n,Re,pe),n==="focusout"&&(ht=Re._wrapperState)&&ht.controlled&&Re.type==="number"&&sn(Re,"number",Re.value)}switch(ht=pe?Ys(pe):window,n){case"focusin":(Hp(ht)||ht.contentEditable==="true")&&(Ws=ht,Cu=pe,eo=null);break;case"focusout":eo=Cu=Ws=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,Jp(Ie,l,Pe);break;case"selectionchange":if(I_)break;case"keydown":case"keyup":Jp(Ie,l,Pe)}var pt;if(wu)e:{switch(n){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Gs?zp(n,l)&&(Mt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(Mt="onCompositionStart");Mt&&(Op&&l.locale!=="ko"&&(Gs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Gs&&(pt=Lp()):(Vr=Pe,_u="value"in Vr?Vr.value:Vr.textContent,Gs=!0)),ht=vl(pe,Mt),0<ht.length&&(Mt=new Up(Mt,n,null,l,Pe),Ie.push({event:Mt,listeners:ht}),pt?Mt.data=pt:(pt=Vp(l),pt!==null&&(Mt.data=pt)))),(pt=S_?M_(n,l):E_(n,l))&&(pe=vl(pe,"onBeforeInput"),0<pe.length&&(Pe=new Up("onBeforeInput","beforeinput",null,l,Pe),Ie.push({event:Pe,listeners:pe}),Pe.data=pt))}om(Ie,r)})}function io(n,r,l){return{instance:n,listener:r,currentTarget:l}}function vl(n,r){for(var l=r+"Capture",u=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Qt(n,l),x!=null&&u.unshift(io(n,x,p)),x=Qt(n,r),x!=null&&u.push(io(n,x,p))),n=n.return}return u}function Xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function cm(n,r,l,u,p){for(var x=r._reactName,R=[];l!==null&&l!==u;){var O=l,j=O.alternate,pe=O.stateNode;if(j!==null&&j===u)break;O.tag===5&&pe!==null&&(O=pe,p?(j=Qt(l,x),j!=null&&R.unshift(io(l,j,O))):p||(j=Qt(l,x),j!=null&&R.push(io(l,j,O)))),l=l.return}R.length!==0&&n.push({event:r,listeners:R})}var O_=/\r\n?/g,k_=/\u0000|\uFFFD/g;function um(n){return(typeof n=="string"?n:""+n).replace(O_,`
`).replace(k_,"")}function xl(n,r,l){if(r=um(r),um(n)!==r&&l)throw Error(t(425))}function _l(){}var Fu=null,Ou=null;function ku(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Bu=typeof setTimeout=="function"?setTimeout:void 0,B_=typeof clearTimeout=="function"?clearTimeout:void 0,dm=typeof Promise=="function"?Promise:void 0,z_=typeof queueMicrotask=="function"?queueMicrotask:typeof dm<"u"?function(n){return dm.resolve(null).then(n).catch(V_)}:Bu;function V_(n){setTimeout(function(){throw n})}function zu(n,r){var l=r,u=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){n.removeChild(p),$a(r);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);$a(r)}function Gr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function fm(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var $s=Math.random().toString(36).slice(2),qi="__reactFiber$"+$s,ro="__reactProps$"+$s,dr="__reactContainer$"+$s,Vu="__reactEvents$"+$s,H_="__reactListeners$"+$s,G_="__reactHandles$"+$s;function gs(n){var r=n[qi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[dr]||l[qi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=fm(n);n!==null;){if(l=n[qi])return l;n=fm(n)}return r}n=l,l=n.parentNode}return null}function so(n){return n=n[qi]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function yl(n){return n[ro]||null}var Hu=[],qs=-1;function Wr(n){return{current:n}}function hn(n){0>qs||(n.current=Hu[qs],Hu[qs]=null,qs--)}function un(n,r){qs++,Hu[qs]=n.current,n.current=r}var jr={},jn=Wr(jr),si=Wr(!1),vs=jr;function Ks(n,r){var l=n.type.contextTypes;if(!l)return jr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in l)p[x]=r[x];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function ai(n){return n=n.childContextTypes,n!=null}function Sl(){hn(si),hn(jn)}function hm(n,r,l){if(jn.current!==jr)throw Error(t(168));un(jn,r),un(si,l)}function pm(n,r,l){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,re(n)||"Unknown",p));return D({},l,u)}function Ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||jr,vs=jn.current,un(jn,n),un(si,si.current),!0}function mm(n,r,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=pm(n,r,vs),u.__reactInternalMemoizedMergedChildContext=n,hn(si),hn(jn),un(jn,n)):hn(si),un(si,l)}var fr=null,El=!1,Gu=!1;function gm(n){fr===null?fr=[n]:fr.push(n)}function W_(n){El=!0,gm(n)}function Xr(){if(!Gu&&fr!==null){Gu=!0;var n=0,r=Bt;try{var l=fr;for(Bt=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}fr=null,El=!1}catch(p){throw fr!==null&&(fr=fr.slice(n+1)),Gt(Bn,Xr),p}finally{Bt=r,Gu=!1}}return null}var Zs=[],Js=0,bl=null,wl=0,Ei=[],bi=0,xs=null,hr=1,pr="";function _s(n,r){Zs[Js++]=wl,Zs[Js++]=bl,bl=n,wl=r}function vm(n,r,l){Ei[bi++]=hr,Ei[bi++]=pr,Ei[bi++]=xs,xs=n;var u=hr;n=pr;var p=32-Ve(u)-1;u&=~(1<<p),l+=1;var x=32-Ve(r)+p;if(30<x){var R=p-p%5;x=(u&(1<<R)-1).toString(32),u>>=R,p-=R,hr=1<<32-Ve(r)+p|l<<p|u,pr=x+n}else hr=1<<x|l<<p|u,pr=n}function Wu(n){n.return!==null&&(_s(n,1),vm(n,1,0))}function ju(n){for(;n===bl;)bl=Zs[--Js],Zs[Js]=null,wl=Zs[--Js],Zs[Js]=null;for(;n===xs;)xs=Ei[--bi],Ei[bi]=null,pr=Ei[--bi],Ei[bi]=null,hr=Ei[--bi],Ei[bi]=null}var vi=null,xi=null,gn=!1,Oi=null;function xm(n,r){var l=Ri(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function _m(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,vi=n,xi=Gr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,vi=n,xi=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=xs!==null?{id:hr,overflow:pr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Ri(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,vi=n,xi=null,!0):!1;default:return!1}}function Xu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function $u(n){if(gn){var r=xi;if(r){var l=r;if(!_m(n,r)){if(Xu(n))throw Error(t(418));r=Gr(l.nextSibling);var u=vi;r&&_m(n,r)?xm(u,l):(n.flags=n.flags&-4097|2,gn=!1,vi=n)}}else{if(Xu(n))throw Error(t(418));n.flags=n.flags&-4097|2,gn=!1,vi=n}}}function ym(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;vi=n}function Tl(n){if(n!==vi)return!1;if(!gn)return ym(n),gn=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!ku(n.type,n.memoizedProps)),r&&(r=xi)){if(Xu(n))throw Sm(),Error(t(418));for(;r;)xm(n,r),r=Gr(r.nextSibling)}if(ym(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){xi=Gr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}xi=null}}else xi=vi?Gr(n.stateNode.nextSibling):null;return!0}function Sm(){for(var n=xi;n;)n=Gr(n.nextSibling)}function Qs(){xi=vi=null,gn=!1}function Yu(n){Oi===null?Oi=[n]:Oi.push(n)}var j_=I.ReactCurrentBatchConfig;function ao(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var p=u,x=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(R){var O=p.refs;R===null?delete O[x]:O[x]=R},r._stringRef=x,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Al(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Mm(n){var r=n._init;return r(n._payload)}function Em(n){function r(ae,q){if(n){var ue=ae.deletions;ue===null?(ae.deletions=[q],ae.flags|=16):ue.push(q)}}function l(ae,q){if(!n)return null;for(;q!==null;)r(ae,q),q=q.sibling;return null}function u(ae,q){for(ae=new Map;q!==null;)q.key!==null?ae.set(q.key,q):ae.set(q.index,q),q=q.sibling;return ae}function p(ae,q){return ae=es(ae,q),ae.index=0,ae.sibling=null,ae}function x(ae,q,ue){return ae.index=ue,n?(ue=ae.alternate,ue!==null?(ue=ue.index,ue<q?(ae.flags|=2,q):ue):(ae.flags|=2,q)):(ae.flags|=1048576,q)}function R(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function O(ae,q,ue,Fe){return q===null||q.tag!==6?(q=Bd(ue,ae.mode,Fe),q.return=ae,q):(q=p(q,ue),q.return=ae,q)}function j(ae,q,ue,Fe){var ot=ue.type;return ot===V?Pe(ae,q,ue.props.children,Fe,ue.key):q!==null&&(q.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===J&&Mm(ot)===q.type)?(Fe=p(q,ue.props),Fe.ref=ao(ae,q,ue),Fe.return=ae,Fe):(Fe=Zl(ue.type,ue.key,ue.props,null,ae.mode,Fe),Fe.ref=ao(ae,q,ue),Fe.return=ae,Fe)}function pe(ae,q,ue,Fe){return q===null||q.tag!==4||q.stateNode.containerInfo!==ue.containerInfo||q.stateNode.implementation!==ue.implementation?(q=zd(ue,ae.mode,Fe),q.return=ae,q):(q=p(q,ue.children||[]),q.return=ae,q)}function Pe(ae,q,ue,Fe,ot){return q===null||q.tag!==7?(q=As(ue,ae.mode,Fe,ot),q.return=ae,q):(q=p(q,ue),q.return=ae,q)}function Ie(ae,q,ue){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Bd(""+q,ae.mode,ue),q.return=ae,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case k:return ue=Zl(q.type,q.key,q.props,null,ae.mode,ue),ue.ref=ao(ae,null,q),ue.return=ae,ue;case F:return q=zd(q,ae.mode,ue),q.return=ae,q;case J:var Fe=q._init;return Ie(ae,Fe(q._payload),ue)}if(X(q)||le(q))return q=As(q,ae.mode,ue,null),q.return=ae,q;Al(ae,q)}return null}function Re(ae,q,ue,Fe){var ot=q!==null?q.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return ot!==null?null:O(ae,q,""+ue,Fe);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case k:return ue.key===ot?j(ae,q,ue,Fe):null;case F:return ue.key===ot?pe(ae,q,ue,Fe):null;case J:return ot=ue._init,Re(ae,q,ot(ue._payload),Fe)}if(X(ue)||le(ue))return ot!==null?null:Pe(ae,q,ue,Fe,null);Al(ae,ue)}return null}function Ke(ae,q,ue,Fe,ot){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return ae=ae.get(ue)||null,O(q,ae,""+Fe,ot);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case k:return ae=ae.get(Fe.key===null?ue:Fe.key)||null,j(q,ae,Fe,ot);case F:return ae=ae.get(Fe.key===null?ue:Fe.key)||null,pe(q,ae,Fe,ot);case J:var ht=Fe._init;return Ke(ae,q,ue,ht(Fe._payload),ot)}if(X(Fe)||le(Fe))return ae=ae.get(ue)||null,Pe(q,ae,Fe,ot,null);Al(q,Fe)}return null}function nt(ae,q,ue,Fe){for(var ot=null,ht=null,pt=q,Mt=q=0,Un=null;pt!==null&&Mt<ue.length;Mt++){pt.index>Mt?(Un=pt,pt=null):Un=pt.sibling;var qt=Re(ae,pt,ue[Mt],Fe);if(qt===null){pt===null&&(pt=Un);break}n&&pt&&qt.alternate===null&&r(ae,pt),q=x(qt,q,Mt),ht===null?ot=qt:ht.sibling=qt,ht=qt,pt=Un}if(Mt===ue.length)return l(ae,pt),gn&&_s(ae,Mt),ot;if(pt===null){for(;Mt<ue.length;Mt++)pt=Ie(ae,ue[Mt],Fe),pt!==null&&(q=x(pt,q,Mt),ht===null?ot=pt:ht.sibling=pt,ht=pt);return gn&&_s(ae,Mt),ot}for(pt=u(ae,pt);Mt<ue.length;Mt++)Un=Ke(pt,ae,Mt,ue[Mt],Fe),Un!==null&&(n&&Un.alternate!==null&&pt.delete(Un.key===null?Mt:Un.key),q=x(Un,q,Mt),ht===null?ot=Un:ht.sibling=Un,ht=Un);return n&&pt.forEach(function(ts){return r(ae,ts)}),gn&&_s(ae,Mt),ot}function rt(ae,q,ue,Fe){var ot=le(ue);if(typeof ot!="function")throw Error(t(150));if(ue=ot.call(ue),ue==null)throw Error(t(151));for(var ht=ot=null,pt=q,Mt=q=0,Un=null,qt=ue.next();pt!==null&&!qt.done;Mt++,qt=ue.next()){pt.index>Mt?(Un=pt,pt=null):Un=pt.sibling;var ts=Re(ae,pt,qt.value,Fe);if(ts===null){pt===null&&(pt=Un);break}n&&pt&&ts.alternate===null&&r(ae,pt),q=x(ts,q,Mt),ht===null?ot=ts:ht.sibling=ts,ht=ts,pt=Un}if(qt.done)return l(ae,pt),gn&&_s(ae,Mt),ot;if(pt===null){for(;!qt.done;Mt++,qt=ue.next())qt=Ie(ae,qt.value,Fe),qt!==null&&(q=x(qt,q,Mt),ht===null?ot=qt:ht.sibling=qt,ht=qt);return gn&&_s(ae,Mt),ot}for(pt=u(ae,pt);!qt.done;Mt++,qt=ue.next())qt=Ke(pt,ae,Mt,qt.value,Fe),qt!==null&&(n&&qt.alternate!==null&&pt.delete(qt.key===null?Mt:qt.key),q=x(qt,q,Mt),ht===null?ot=qt:ht.sibling=qt,ht=qt);return n&&pt.forEach(function(by){return r(ae,by)}),gn&&_s(ae,Mt),ot}function bn(ae,q,ue,Fe){if(typeof ue=="object"&&ue!==null&&ue.type===V&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case k:e:{for(var ot=ue.key,ht=q;ht!==null;){if(ht.key===ot){if(ot=ue.type,ot===V){if(ht.tag===7){l(ae,ht.sibling),q=p(ht,ue.props.children),q.return=ae,ae=q;break e}}else if(ht.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===J&&Mm(ot)===ht.type){l(ae,ht.sibling),q=p(ht,ue.props),q.ref=ao(ae,ht,ue),q.return=ae,ae=q;break e}l(ae,ht);break}else r(ae,ht);ht=ht.sibling}ue.type===V?(q=As(ue.props.children,ae.mode,Fe,ue.key),q.return=ae,ae=q):(Fe=Zl(ue.type,ue.key,ue.props,null,ae.mode,Fe),Fe.ref=ao(ae,q,ue),Fe.return=ae,ae=Fe)}return R(ae);case F:e:{for(ht=ue.key;q!==null;){if(q.key===ht)if(q.tag===4&&q.stateNode.containerInfo===ue.containerInfo&&q.stateNode.implementation===ue.implementation){l(ae,q.sibling),q=p(q,ue.children||[]),q.return=ae,ae=q;break e}else{l(ae,q);break}else r(ae,q);q=q.sibling}q=zd(ue,ae.mode,Fe),q.return=ae,ae=q}return R(ae);case J:return ht=ue._init,bn(ae,q,ht(ue._payload),Fe)}if(X(ue))return nt(ae,q,ue,Fe);if(le(ue))return rt(ae,q,ue,Fe);Al(ae,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,q!==null&&q.tag===6?(l(ae,q.sibling),q=p(q,ue),q.return=ae,ae=q):(l(ae,q),q=Bd(ue,ae.mode,Fe),q.return=ae,ae=q),R(ae)):l(ae,q)}return bn}var ea=Em(!0),bm=Em(!1),Rl=Wr(null),Cl=null,ta=null,qu=null;function Ku(){qu=ta=Cl=null}function Zu(n){var r=Rl.current;hn(Rl),n._currentValue=r}function Ju(n,r,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===l)break;n=n.return}}function na(n,r){Cl=n,qu=ta=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(oi=!0),n.firstContext=null)}function wi(n){var r=n._currentValue;if(qu!==n)if(n={context:n,memoizedValue:r,next:null},ta===null){if(Cl===null)throw Error(t(308));ta=n,Cl.dependencies={lanes:0,firstContext:n}}else ta=ta.next=n;return r}var ys=null;function Qu(n){ys===null?ys=[n]:ys.push(n)}function wm(n,r,l,u){var p=r.interleaved;return p===null?(l.next=l,Qu(r)):(l.next=p.next,p.next=l),r.interleaved=l,mr(n,u)}function mr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var $r=!1;function ed(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Yr(n,r,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Yt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,mr(n,l)}return p=u.interleaved,p===null?(r.next=r,Qu(u)):(r.next=p.next,p.next=r),u.interleaved=r,mr(n,l)}function Pl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,ri(n,l)}}function Am(n,r){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var R={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?p=x=R:x=x.next=R,l=l.next}while(l!==null);x===null?p=x=r:x=x.next=r}else p=x=r;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Nl(n,r,l,u){var p=n.updateQueue;$r=!1;var x=p.firstBaseUpdate,R=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var j=O,pe=j.next;j.next=null,R===null?x=pe:R.next=pe,R=j;var Pe=n.alternate;Pe!==null&&(Pe=Pe.updateQueue,O=Pe.lastBaseUpdate,O!==R&&(O===null?Pe.firstBaseUpdate=pe:O.next=pe,Pe.lastBaseUpdate=j))}if(x!==null){var Ie=p.baseState;R=0,Pe=pe=j=null,O=x;do{var Re=O.lane,Ke=O.eventTime;if((u&Re)===Re){Pe!==null&&(Pe=Pe.next={eventTime:Ke,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var nt=n,rt=O;switch(Re=r,Ke=l,rt.tag){case 1:if(nt=rt.payload,typeof nt=="function"){Ie=nt.call(Ke,Ie,Re);break e}Ie=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=rt.payload,Re=typeof nt=="function"?nt.call(Ke,Ie,Re):nt,Re==null)break e;Ie=D({},Ie,Re);break e;case 2:$r=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Re=p.effects,Re===null?p.effects=[O]:Re.push(O))}else Ke={eventTime:Ke,lane:Re,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Pe===null?(pe=Pe=Ke,j=Ie):Pe=Pe.next=Ke,R|=Re;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;Re=O,O=Re.next,Re.next=null,p.lastBaseUpdate=Re,p.shared.pending=null}}while(!0);if(Pe===null&&(j=Ie),p.baseState=j,p.firstBaseUpdate=pe,p.lastBaseUpdate=Pe,r=p.shared.interleaved,r!==null){p=r;do R|=p.lane,p=p.next;while(p!==r)}else x===null&&(p.shared.lanes=0);Es|=R,n.lanes=R,n.memoizedState=Ie}}function Rm(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var oo={},Ki=Wr(oo),lo=Wr(oo),co=Wr(oo);function Ss(n){if(n===oo)throw Error(t(174));return n}function td(n,r){switch(un(co,r),un(lo,n),un(Ki,oo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:T(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=T(r,n)}hn(Ki),un(Ki,r)}function ia(){hn(Ki),hn(lo),hn(co)}function Cm(n){Ss(co.current);var r=Ss(Ki.current),l=T(r,n.type);r!==l&&(un(lo,n),un(Ki,l))}function nd(n){lo.current===n&&(hn(Ki),hn(lo))}var xn=Wr(0);function Ll(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var id=[];function rd(){for(var n=0;n<id.length;n++)id[n]._workInProgressVersionPrimary=null;id.length=0}var Il=I.ReactCurrentDispatcher,sd=I.ReactCurrentBatchConfig,Ms=0,_n=null,Cn=null,In=null,Dl=!1,uo=!1,fo=0,X_=0;function Xn(){throw Error(t(321))}function ad(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Fi(n[l],r[l]))return!1;return!0}function od(n,r,l,u,p,x){if(Ms=x,_n=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Il.current=n===null||n.memoizedState===null?K_:Z_,n=l(u,p),uo){x=0;do{if(uo=!1,fo=0,25<=x)throw Error(t(301));x+=1,In=Cn=null,r.updateQueue=null,Il.current=J_,n=l(u,p)}while(uo)}if(Il.current=Ol,r=Cn!==null&&Cn.next!==null,Ms=0,In=Cn=_n=null,Dl=!1,r)throw Error(t(300));return n}function ld(){var n=fo!==0;return fo=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return In===null?_n.memoizedState=In=n:In=In.next=n,In}function Ti(){if(Cn===null){var n=_n.alternate;n=n!==null?n.memoizedState:null}else n=Cn.next;var r=In===null?_n.memoizedState:In.next;if(r!==null)In=r,Cn=n;else{if(n===null)throw Error(t(310));Cn=n,n={memoizedState:Cn.memoizedState,baseState:Cn.baseState,baseQueue:Cn.baseQueue,queue:Cn.queue,next:null},In===null?_n.memoizedState=In=n:In=In.next=n}return In}function ho(n,r){return typeof r=="function"?r(n):r}function cd(n){var r=Ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=Cn,p=u.baseQueue,x=l.pending;if(x!==null){if(p!==null){var R=p.next;p.next=x.next,x.next=R}u.baseQueue=p=x,l.pending=null}if(p!==null){x=p.next,u=u.baseState;var O=R=null,j=null,pe=x;do{var Pe=pe.lane;if((Ms&Pe)===Pe)j!==null&&(j=j.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),u=pe.hasEagerState?pe.eagerState:n(u,pe.action);else{var Ie={lane:Pe,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};j===null?(O=j=Ie,R=u):j=j.next=Ie,_n.lanes|=Pe,Es|=Pe}pe=pe.next}while(pe!==null&&pe!==x);j===null?R=u:j.next=O,Fi(u,r.memoizedState)||(oi=!0),r.memoizedState=u,r.baseState=R,r.baseQueue=j,l.lastRenderedState=u}if(n=l.interleaved,n!==null){p=n;do x=p.lane,_n.lanes|=x,Es|=x,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function ud(n){var r=Ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,p=l.pending,x=r.memoizedState;if(p!==null){l.pending=null;var R=p=p.next;do x=n(x,R.action),R=R.next;while(R!==p);Fi(x,r.memoizedState)||(oi=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),l.lastRenderedState=x}return[x,u]}function Pm(){}function Nm(n,r){var l=_n,u=Ti(),p=r(),x=!Fi(u.memoizedState,p);if(x&&(u.memoizedState=p,oi=!0),u=u.queue,dd(Dm.bind(null,l,u,n),[n]),u.getSnapshot!==r||x||In!==null&&In.memoizedState.tag&1){if(l.flags|=2048,po(9,Im.bind(null,l,u,p,r),void 0,null),Dn===null)throw Error(t(349));(Ms&30)!==0||Lm(l,r,p)}return p}function Lm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=_n.updateQueue,r===null?(r={lastEffect:null,stores:null},_n.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Im(n,r,l,u){r.value=l,r.getSnapshot=u,Um(r)&&Fm(n)}function Dm(n,r,l){return l(function(){Um(r)&&Fm(n)})}function Um(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Fi(n,l)}catch{return!0}}function Fm(n){var r=mr(n,1);r!==null&&Vi(r,n,1,-1)}function Om(n){var r=Zi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:n},r.queue=n,n=n.dispatch=q_.bind(null,_n,n),[r.memoizedState,n]}function po(n,r,l,u){return n={tag:n,create:r,destroy:l,deps:u,next:null},r=_n.updateQueue,r===null?(r={lastEffect:null,stores:null},_n.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,r.lastEffect=n)),n}function km(){return Ti().memoizedState}function Ul(n,r,l,u){var p=Zi();_n.flags|=n,p.memoizedState=po(1|r,l,void 0,u===void 0?null:u)}function Fl(n,r,l,u){var p=Ti();u=u===void 0?null:u;var x=void 0;if(Cn!==null){var R=Cn.memoizedState;if(x=R.destroy,u!==null&&ad(u,R.deps)){p.memoizedState=po(r,l,x,u);return}}_n.flags|=n,p.memoizedState=po(1|r,l,x,u)}function Bm(n,r){return Ul(8390656,8,n,r)}function dd(n,r){return Fl(2048,8,n,r)}function zm(n,r){return Fl(4,2,n,r)}function Vm(n,r){return Fl(4,4,n,r)}function Hm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Gm(n,r,l){return l=l!=null?l.concat([n]):null,Fl(4,4,Hm.bind(null,r,n),l)}function fd(){}function Wm(n,r){var l=Ti();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&ad(r,u[1])?u[0]:(l.memoizedState=[n,r],n)}function jm(n,r){var l=Ti();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&ad(r,u[1])?u[0]:(n=n(),l.memoizedState=[n,r],n)}function Xm(n,r,l){return(Ms&21)===0?(n.baseState&&(n.baseState=!1,oi=!0),n.memoizedState=l):(Fi(l,r)||(l=qe(),_n.lanes|=l,Es|=l,n.baseState=!0),r)}function $_(n,r){var l=Bt;Bt=l!==0&&4>l?l:4,n(!0);var u=sd.transition;sd.transition={};try{n(!1),r()}finally{Bt=l,sd.transition=u}}function $m(){return Ti().memoizedState}function Y_(n,r,l){var u=Jr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},Ym(n))qm(r,l);else if(l=wm(n,r,l,u),l!==null){var p=ei();Vi(l,n,u,p),Km(l,r,u)}}function q_(n,r,l){var u=Jr(n),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ym(n))qm(r,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var R=r.lastRenderedState,O=x(R,l);if(p.hasEagerState=!0,p.eagerState=O,Fi(O,R)){var j=r.interleaved;j===null?(p.next=p,Qu(r)):(p.next=j.next,j.next=p),r.interleaved=p;return}}catch{}finally{}l=wm(n,r,p,u),l!==null&&(p=ei(),Vi(l,n,u,p),Km(l,r,u))}}function Ym(n){var r=n.alternate;return n===_n||r!==null&&r===_n}function qm(n,r){uo=Dl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Km(n,r,l){if((l&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,ri(n,l)}}var Ol={readContext:wi,useCallback:Xn,useContext:Xn,useEffect:Xn,useImperativeHandle:Xn,useInsertionEffect:Xn,useLayoutEffect:Xn,useMemo:Xn,useReducer:Xn,useRef:Xn,useState:Xn,useDebugValue:Xn,useDeferredValue:Xn,useTransition:Xn,useMutableSource:Xn,useSyncExternalStore:Xn,useId:Xn,unstable_isNewReconciler:!1},K_={readContext:wi,useCallback:function(n,r){return Zi().memoizedState=[n,r===void 0?null:r],n},useContext:wi,useEffect:Bm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Ul(4194308,4,Hm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Ul(4194308,4,n,r)},useInsertionEffect:function(n,r){return Ul(4,2,n,r)},useMemo:function(n,r){var l=Zi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var u=Zi();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Y_.bind(null,_n,n),[u.memoizedState,n]},useRef:function(n){var r=Zi();return n={current:n},r.memoizedState=n},useState:Om,useDebugValue:fd,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=Om(!1),r=n[0];return n=$_.bind(null,n[1]),Zi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var u=_n,p=Zi();if(gn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Dn===null)throw Error(t(349));(Ms&30)!==0||Lm(u,r,l)}p.memoizedState=l;var x={value:l,getSnapshot:r};return p.queue=x,Bm(Dm.bind(null,u,x,n),[n]),u.flags|=2048,po(9,Im.bind(null,u,x,l,r),void 0,null),l},useId:function(){var n=Zi(),r=Dn.identifierPrefix;if(gn){var l=pr,u=hr;l=(u&~(1<<32-Ve(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=fo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=X_++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Z_={readContext:wi,useCallback:Wm,useContext:wi,useEffect:dd,useImperativeHandle:Gm,useInsertionEffect:zm,useLayoutEffect:Vm,useMemo:jm,useReducer:cd,useRef:km,useState:function(){return cd(ho)},useDebugValue:fd,useDeferredValue:function(n){var r=Ti();return Xm(r,Cn.memoizedState,n)},useTransition:function(){var n=cd(ho)[0],r=Ti().memoizedState;return[n,r]},useMutableSource:Pm,useSyncExternalStore:Nm,useId:$m,unstable_isNewReconciler:!1},J_={readContext:wi,useCallback:Wm,useContext:wi,useEffect:dd,useImperativeHandle:Gm,useInsertionEffect:zm,useLayoutEffect:Vm,useMemo:jm,useReducer:ud,useRef:km,useState:function(){return ud(ho)},useDebugValue:fd,useDeferredValue:function(n){var r=Ti();return Cn===null?r.memoizedState=n:Xm(r,Cn.memoizedState,n)},useTransition:function(){var n=ud(ho)[0],r=Ti().memoizedState;return[n,r]},useMutableSource:Pm,useSyncExternalStore:Nm,useId:$m,unstable_isNewReconciler:!1};function ki(n,r){if(n&&n.defaultProps){r=D({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function hd(n,r,l,u){r=n.memoizedState,l=l(u,r),l=l==null?r:D({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var kl={isMounted:function(n){return(n=n._reactInternals)?Pt(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var u=ei(),p=Jr(n),x=gr(u,p);x.payload=r,l!=null&&(x.callback=l),r=Yr(n,x,p),r!==null&&(Vi(r,n,p,u),Pl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var u=ei(),p=Jr(n),x=gr(u,p);x.tag=1,x.payload=r,l!=null&&(x.callback=l),r=Yr(n,x,p),r!==null&&(Vi(r,n,p,u),Pl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=ei(),u=Jr(n),p=gr(l,u);p.tag=2,r!=null&&(p.callback=r),r=Yr(n,p,u),r!==null&&(Vi(r,n,u,l),Pl(r,n,u))}};function Zm(n,r,l,u,p,x,R){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,x,R):r.prototype&&r.prototype.isPureReactComponent?!Qa(l,u)||!Qa(p,x):!0}function Jm(n,r,l){var u=!1,p=jr,x=r.contextType;return typeof x=="object"&&x!==null?x=wi(x):(p=ai(r)?vs:jn.current,u=r.contextTypes,x=(u=u!=null)?Ks(n,p):jr),r=new r(l,x),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=kl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),r}function Qm(n,r,l,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==n&&kl.enqueueReplaceState(r,r.state,null)}function pd(n,r,l,u){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},ed(n);var x=r.contextType;typeof x=="object"&&x!==null?p.context=wi(x):(x=ai(r)?vs:jn.current,p.context=Ks(n,x)),p.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(hd(n,r,x,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&kl.enqueueReplaceState(p,p.state,null),Nl(n,l,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function ra(n,r){try{var l="",u=r;do l+=Me(u),u=u.return;while(u);var p=l}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:r,stack:p,digest:null}}function md(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function gd(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Q_=typeof WeakMap=="function"?WeakMap:Map;function eg(n,r,l){l=gr(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){jl||(jl=!0,Nd=u),gd(n,r)},l}function tg(n,r,l){l=gr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;l.payload=function(){return u(p)},l.callback=function(){gd(n,r)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){gd(n,r),typeof u!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})}),l}function ng(n,r,l){var u=n.pingCache;if(u===null){u=n.pingCache=new Q_;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(l)||(p.add(l),n=hy.bind(null,n,r,l),r.then(n,n))}function ig(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function rg(n,r,l,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=gr(-1,1),r.tag=2,Yr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var ey=I.ReactCurrentOwner,oi=!1;function Qn(n,r,l,u){r.child=n===null?bm(r,null,l,u):ea(r,n.child,l,u)}function sg(n,r,l,u,p){l=l.render;var x=r.ref;return na(r,p),u=od(n,r,l,u,x,p),l=ld(),n!==null&&!oi?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,vr(n,r,p)):(gn&&l&&Wu(r),r.flags|=1,Qn(n,r,u,p),r.child)}function ag(n,r,l,u,p){if(n===null){var x=l.type;return typeof x=="function"&&!kd(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=x,og(n,r,x,u,p)):(n=Zl(l.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(x=n.child,(n.lanes&p)===0){var R=x.memoizedProps;if(l=l.compare,l=l!==null?l:Qa,l(R,u)&&n.ref===r.ref)return vr(n,r,p)}return r.flags|=1,n=es(x,u),n.ref=r.ref,n.return=r,r.child=n}function og(n,r,l,u,p){if(n!==null){var x=n.memoizedProps;if(Qa(x,u)&&n.ref===r.ref)if(oi=!1,r.pendingProps=u=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(oi=!0);else return r.lanes=n.lanes,vr(n,r,p)}return vd(n,r,l,u,p)}function lg(n,r,l){var u=r.pendingProps,p=u.children,x=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},un(aa,_i),_i|=l;else{if((l&1073741824)===0)return n=x!==null?x.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,un(aa,_i),_i|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:l,un(aa,_i),_i|=u}else x!==null?(u=x.baseLanes|l,r.memoizedState=null):u=l,un(aa,_i),_i|=u;return Qn(n,r,p,l),r.child}function cg(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function vd(n,r,l,u,p){var x=ai(l)?vs:jn.current;return x=Ks(r,x),na(r,p),l=od(n,r,l,u,x,p),u=ld(),n!==null&&!oi?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,vr(n,r,p)):(gn&&u&&Wu(r),r.flags|=1,Qn(n,r,l,p),r.child)}function ug(n,r,l,u,p){if(ai(l)){var x=!0;Ml(r)}else x=!1;if(na(r,p),r.stateNode===null)zl(n,r),Jm(r,l,u),pd(r,l,u,p),u=!0;else if(n===null){var R=r.stateNode,O=r.memoizedProps;R.props=O;var j=R.context,pe=l.contextType;typeof pe=="object"&&pe!==null?pe=wi(pe):(pe=ai(l)?vs:jn.current,pe=Ks(r,pe));var Pe=l.getDerivedStateFromProps,Ie=typeof Pe=="function"||typeof R.getSnapshotBeforeUpdate=="function";Ie||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(O!==u||j!==pe)&&Qm(r,R,u,pe),$r=!1;var Re=r.memoizedState;R.state=Re,Nl(r,u,R,p),j=r.memoizedState,O!==u||Re!==j||si.current||$r?(typeof Pe=="function"&&(hd(r,l,Pe,u),j=r.memoizedState),(O=$r||Zm(r,l,O,u,Re,j,pe))?(Ie||typeof R.UNSAFE_componentWillMount!="function"&&typeof R.componentWillMount!="function"||(typeof R.componentWillMount=="function"&&R.componentWillMount(),typeof R.UNSAFE_componentWillMount=="function"&&R.UNSAFE_componentWillMount()),typeof R.componentDidMount=="function"&&(r.flags|=4194308)):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=j),R.props=u,R.state=j,R.context=pe,u=O):(typeof R.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{R=r.stateNode,Tm(n,r),O=r.memoizedProps,pe=r.type===r.elementType?O:ki(r.type,O),R.props=pe,Ie=r.pendingProps,Re=R.context,j=l.contextType,typeof j=="object"&&j!==null?j=wi(j):(j=ai(l)?vs:jn.current,j=Ks(r,j));var Ke=l.getDerivedStateFromProps;(Pe=typeof Ke=="function"||typeof R.getSnapshotBeforeUpdate=="function")||typeof R.UNSAFE_componentWillReceiveProps!="function"&&typeof R.componentWillReceiveProps!="function"||(O!==Ie||Re!==j)&&Qm(r,R,u,j),$r=!1,Re=r.memoizedState,R.state=Re,Nl(r,u,R,p);var nt=r.memoizedState;O!==Ie||Re!==nt||si.current||$r?(typeof Ke=="function"&&(hd(r,l,Ke,u),nt=r.memoizedState),(pe=$r||Zm(r,l,pe,u,Re,nt,j)||!1)?(Pe||typeof R.UNSAFE_componentWillUpdate!="function"&&typeof R.componentWillUpdate!="function"||(typeof R.componentWillUpdate=="function"&&R.componentWillUpdate(u,nt,j),typeof R.UNSAFE_componentWillUpdate=="function"&&R.UNSAFE_componentWillUpdate(u,nt,j)),typeof R.componentDidUpdate=="function"&&(r.flags|=4),typeof R.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof R.componentDidUpdate!="function"||O===n.memoizedProps&&Re===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Re===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=nt),R.props=u,R.state=nt,R.context=j,u=pe):(typeof R.componentDidUpdate!="function"||O===n.memoizedProps&&Re===n.memoizedState||(r.flags|=4),typeof R.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Re===n.memoizedState||(r.flags|=1024),u=!1)}return xd(n,r,l,u,x,p)}function xd(n,r,l,u,p,x){cg(n,r);var R=(r.flags&128)!==0;if(!u&&!R)return p&&mm(r,l,!1),vr(n,r,x);u=r.stateNode,ey.current=r;var O=R&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&R?(r.child=ea(r,n.child,null,x),r.child=ea(r,null,O,x)):Qn(n,r,O,x),r.memoizedState=u.state,p&&mm(r,l,!0),r.child}function dg(n){var r=n.stateNode;r.pendingContext?hm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&hm(n,r.context,!1),td(n,r.containerInfo)}function fg(n,r,l,u,p){return Qs(),Yu(p),r.flags|=256,Qn(n,r,l,u),r.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function yd(n){return{baseLanes:n,cachePool:null,transitions:null}}function hg(n,r,l){var u=r.pendingProps,p=xn.current,x=!1,R=(r.flags&128)!==0,O;if((O=R)||(O=n!==null&&n.memoizedState===null?!1:(p&2)!==0),O?(x=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),un(xn,p&1),n===null)return $u(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(R=u.children,n=u.fallback,x?(u=r.mode,x=r.child,R={mode:"hidden",children:R},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=R):x=Jl(R,u,0,null),n=As(n,u,l,null),x.return=r,n.return=r,x.sibling=n,r.child=x,r.child.memoizedState=yd(l),r.memoizedState=_d,n):Sd(r,R));if(p=n.memoizedState,p!==null&&(O=p.dehydrated,O!==null))return ty(n,r,R,u,O,p,l);if(x){x=u.fallback,R=r.mode,p=n.child,O=p.sibling;var j={mode:"hidden",children:u.children};return(R&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=j,r.deletions=null):(u=es(p,j),u.subtreeFlags=p.subtreeFlags&14680064),O!==null?x=es(O,x):(x=As(x,R,l,null),x.flags|=2),x.return=r,u.return=r,u.sibling=x,r.child=u,u=x,x=r.child,R=n.child.memoizedState,R=R===null?yd(l):{baseLanes:R.baseLanes|l,cachePool:null,transitions:R.transitions},x.memoizedState=R,x.childLanes=n.childLanes&~l,r.memoizedState=_d,u}return x=n.child,n=x.sibling,u=es(x,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=l),u.return=r,u.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=u,r.memoizedState=null,u}function Sd(n,r){return r=Jl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Bl(n,r,l,u){return u!==null&&Yu(u),ea(r,n.child,null,l),n=Sd(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function ty(n,r,l,u,p,x,R){if(l)return r.flags&256?(r.flags&=-257,u=md(Error(t(422))),Bl(n,r,R,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(x=u.fallback,p=r.mode,u=Jl({mode:"visible",children:u.children},p,0,null),x=As(x,p,R,null),x.flags|=2,u.return=r,x.return=r,u.sibling=x,r.child=u,(r.mode&1)!==0&&ea(r,n.child,null,R),r.child.memoizedState=yd(R),r.memoizedState=_d,x);if((r.mode&1)===0)return Bl(n,r,R,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var O=u.dgst;return u=O,x=Error(t(419)),u=md(x,u,void 0),Bl(n,r,R,u)}if(O=(R&n.childLanes)!==0,oi||O){if(u=Dn,u!==null){switch(R&-R){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|R))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,mr(n,p),Vi(u,n,p,-1))}return Od(),u=md(Error(t(421))),Bl(n,r,R,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=py.bind(null,n),p._reactRetry=r,null):(n=x.treeContext,xi=Gr(p.nextSibling),vi=r,gn=!0,Oi=null,n!==null&&(Ei[bi++]=hr,Ei[bi++]=pr,Ei[bi++]=xs,hr=n.id,pr=n.overflow,xs=r),r=Sd(r,u.children),r.flags|=4096,r)}function pg(n,r,l){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Ju(n.return,r,l)}function Md(n,r,l,u,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=l,x.tailMode=p)}function mg(n,r,l){var u=r.pendingProps,p=u.revealOrder,x=u.tail;if(Qn(n,r,u.children,l),u=xn.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&pg(n,l,r);else if(n.tag===19)pg(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(un(xn,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&Ll(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Md(r,!1,p,l,x);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Ll(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Md(r,!0,l,null,x);break;case"together":Md(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function zl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function vr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Es|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=es(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=es(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function ny(n,r,l){switch(r.tag){case 3:dg(r),Qs();break;case 5:Cm(r);break;case 1:ai(r.type)&&Ml(r);break;case 4:td(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;un(Rl,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(un(xn,xn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?hg(n,r,l):(un(xn,xn.current&1),n=vr(n,r,l),n!==null?n.sibling:null);un(xn,xn.current&1);break;case 19:if(u=(l&r.childLanes)!==0,(n.flags&128)!==0){if(u)return mg(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),un(xn,xn.current),u)break;return null;case 22:case 23:return r.lanes=0,lg(n,r,l)}return vr(n,r,l)}var gg,Ed,vg,xg;gg=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ed=function(){},vg=function(n,r,l,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,Ss(Ki.current);var x=null;switch(l){case"input":p=We(n,p),u=We(n,u),x=[];break;case"select":p=D({},p,{value:void 0}),u=D({},u,{value:void 0}),x=[];break;case"textarea":p=wt(n,p),u=wt(n,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=_l)}$e(l,u);var R;l=null;for(pe in p)if(!u.hasOwnProperty(pe)&&p.hasOwnProperty(pe)&&p[pe]!=null)if(pe==="style"){var O=p[pe];for(R in O)O.hasOwnProperty(R)&&(l||(l={}),l[R]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(a.hasOwnProperty(pe)?x||(x=[]):(x=x||[]).push(pe,null));for(pe in u){var j=u[pe];if(O=p!=null?p[pe]:void 0,u.hasOwnProperty(pe)&&j!==O&&(j!=null||O!=null))if(pe==="style")if(O){for(R in O)!O.hasOwnProperty(R)||j&&j.hasOwnProperty(R)||(l||(l={}),l[R]="");for(R in j)j.hasOwnProperty(R)&&O[R]!==j[R]&&(l||(l={}),l[R]=j[R])}else l||(x||(x=[]),x.push(pe,l)),l=j;else pe==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,O=O?O.__html:void 0,j!=null&&O!==j&&(x=x||[]).push(pe,j)):pe==="children"?typeof j!="string"&&typeof j!="number"||(x=x||[]).push(pe,""+j):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(a.hasOwnProperty(pe)?(j!=null&&pe==="onScroll"&&fn("scroll",n),x||O===j||(x=[])):(x=x||[]).push(pe,j))}l&&(x=x||[]).push("style",l);var pe=x;(r.updateQueue=pe)&&(r.flags|=4)}},xg=function(n,r,l,u){l!==u&&(r.flags|=4)};function mo(n,r){if(!gn)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function $n(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=l,r}function iy(n,r,l){var u=r.pendingProps;switch(ju(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $n(r),null;case 1:return ai(r.type)&&Sl(),$n(r),null;case 3:return u=r.stateNode,ia(),hn(si),hn(jn),rd(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Tl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Oi!==null&&(Dd(Oi),Oi=null))),Ed(n,r),$n(r),null;case 5:nd(r);var p=Ss(co.current);if(l=r.type,n!==null&&r.stateNode!=null)vg(n,r,l,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return $n(r),null}if(n=Ss(Ki.current),Tl(r)){u=r.stateNode,l=r.type;var x=r.memoizedProps;switch(u[qi]=r,u[ro]=x,n=(r.mode&1)!==0,l){case"dialog":fn("cancel",u),fn("close",u);break;case"iframe":case"object":case"embed":fn("load",u);break;case"video":case"audio":for(p=0;p<to.length;p++)fn(to[p],u);break;case"source":fn("error",u);break;case"img":case"image":case"link":fn("error",u),fn("load",u);break;case"details":fn("toggle",u);break;case"input":vt(u,x),fn("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},fn("invalid",u);break;case"textarea":$t(u,x),fn("invalid",u)}$e(l,x),p=null;for(var R in x)if(x.hasOwnProperty(R)){var O=x[R];R==="children"?typeof O=="string"?u.textContent!==O&&(x.suppressHydrationWarning!==!0&&xl(u.textContent,O,n),p=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(x.suppressHydrationWarning!==!0&&xl(u.textContent,O,n),p=["children",""+O]):a.hasOwnProperty(R)&&O!=null&&R==="onScroll"&&fn("scroll",u)}switch(l){case"input":Le(u),Ut(u,x,!0);break;case"textarea":Le(u),Jt(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=_l)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{R=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=R.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=R.createElement(l,{is:u.is}):(n=R.createElement(l),l==="select"&&(R=n,u.multiple?R.multiple=!0:u.size&&(R.size=u.size))):n=R.createElementNS(n,l),n[qi]=r,n[ro]=u,gg(n,r,!1,!1),r.stateNode=n;e:{switch(R=Be(l,u),l){case"dialog":fn("cancel",n),fn("close",n),p=u;break;case"iframe":case"object":case"embed":fn("load",n),p=u;break;case"video":case"audio":for(p=0;p<to.length;p++)fn(to[p],n);p=u;break;case"source":fn("error",n),p=u;break;case"img":case"image":case"link":fn("error",n),fn("load",n),p=u;break;case"details":fn("toggle",n),p=u;break;case"input":vt(n,u),p=We(n,u),fn("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=D({},u,{value:void 0}),fn("invalid",n);break;case"textarea":$t(n,u),p=wt(n,u),fn("invalid",n);break;default:p=u}$e(l,p),O=p;for(x in O)if(O.hasOwnProperty(x)){var j=O[x];x==="style"?Se(n,j):x==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&ye(n,j)):x==="children"?typeof j=="string"?(l!=="textarea"||j!=="")&&we(n,j):typeof j=="number"&&we(n,""+j):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?j!=null&&x==="onScroll"&&fn("scroll",n):j!=null&&P(n,x,j,R))}switch(l){case"input":Le(n),Ut(n,u,!1);break;case"textarea":Le(n),Jt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ce(u.value));break;case"select":n.multiple=!!u.multiple,x=u.value,x!=null?Kt(n,!!u.multiple,x,!1):u.defaultValue!=null&&Kt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=_l)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return $n(r),null;case 6:if(n&&r.stateNode!=null)xg(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(l=Ss(co.current),Ss(Ki.current),Tl(r)){if(u=r.stateNode,l=r.memoizedProps,u[qi]=r,(x=u.nodeValue!==l)&&(n=vi,n!==null))switch(n.tag){case 3:xl(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xl(u.nodeValue,l,(n.mode&1)!==0)}x&&(r.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[qi]=r,r.stateNode=u}return $n(r),null;case 13:if(hn(xn),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(gn&&xi!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Sm(),Qs(),r.flags|=98560,x=!1;else if(x=Tl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[qi]=r}else Qs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$n(r),x=!1}else Oi!==null&&(Dd(Oi),Oi=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(xn.current&1)!==0?Pn===0&&(Pn=3):Od())),r.updateQueue!==null&&(r.flags|=4),$n(r),null);case 4:return ia(),Ed(n,r),n===null&&no(r.stateNode.containerInfo),$n(r),null;case 10:return Zu(r.type._context),$n(r),null;case 17:return ai(r.type)&&Sl(),$n(r),null;case 19:if(hn(xn),x=r.memoizedState,x===null)return $n(r),null;if(u=(r.flags&128)!==0,R=x.rendering,R===null)if(u)mo(x,!1);else{if(Pn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(R=Ll(n),R!==null){for(r.flags|=128,mo(x,!1),u=R.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=l,l=r.child;l!==null;)x=l,n=u,x.flags&=14680066,R=x.alternate,R===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=R.childLanes,x.lanes=R.lanes,x.child=R.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=R.memoizedProps,x.memoizedState=R.memoizedState,x.updateQueue=R.updateQueue,x.type=R.type,n=R.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return un(xn,xn.current&1|2),r.child}n=n.sibling}x.tail!==null&&ft()>oa&&(r.flags|=128,u=!0,mo(x,!1),r.lanes=4194304)}else{if(!u)if(n=Ll(R),n!==null){if(r.flags|=128,u=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),mo(x,!0),x.tail===null&&x.tailMode==="hidden"&&!R.alternate&&!gn)return $n(r),null}else 2*ft()-x.renderingStartTime>oa&&l!==1073741824&&(r.flags|=128,u=!0,mo(x,!1),r.lanes=4194304);x.isBackwards?(R.sibling=r.child,r.child=R):(l=x.last,l!==null?l.sibling=R:r.child=R,x.last=R)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=ft(),r.sibling=null,l=xn.current,un(xn,u?l&1|2:l&1),r):($n(r),null);case 22:case 23:return Fd(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(_i&1073741824)!==0&&($n(r),r.subtreeFlags&6&&(r.flags|=8192)):$n(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function ry(n,r){switch(ju(r),r.tag){case 1:return ai(r.type)&&Sl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ia(),hn(si),hn(jn),rd(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return nd(r),null;case 13:if(hn(xn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Qs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return hn(xn),null;case 4:return ia(),null;case 10:return Zu(r.type._context),null;case 22:case 23:return Fd(),null;case 24:return null;default:return null}}var Vl=!1,Yn=!1,sy=typeof WeakSet=="function"?WeakSet:Set,Je=null;function sa(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){Mn(n,r,u)}else l.current=null}function bd(n,r,l){try{l()}catch(u){Mn(n,r,u)}}var _g=!1;function ay(n,r){if(Fu=ol,n=Zp(),Ru(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var R=0,O=-1,j=-1,pe=0,Pe=0,Ie=n,Re=null;t:for(;;){for(var Ke;Ie!==l||p!==0&&Ie.nodeType!==3||(O=R+p),Ie!==x||u!==0&&Ie.nodeType!==3||(j=R+u),Ie.nodeType===3&&(R+=Ie.nodeValue.length),(Ke=Ie.firstChild)!==null;)Re=Ie,Ie=Ke;for(;;){if(Ie===n)break t;if(Re===l&&++pe===p&&(O=R),Re===x&&++Pe===u&&(j=R),(Ke=Ie.nextSibling)!==null)break;Ie=Re,Re=Ie.parentNode}Ie=Ke}l=O===-1||j===-1?null:{start:O,end:j}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ou={focusedElem:n,selectionRange:l},ol=!1,Je=r;Je!==null;)if(r=Je,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Je=n;else for(;Je!==null;){r=Je;try{var nt=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var rt=nt.memoizedProps,bn=nt.memoizedState,ae=r.stateNode,q=ae.getSnapshotBeforeUpdate(r.elementType===r.type?rt:ki(r.type,rt),bn);ae.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var ue=r.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Fe){Mn(r,r.return,Fe)}if(n=r.sibling,n!==null){n.return=r.return,Je=n;break}Je=r.return}return nt=_g,_g=!1,nt}function go(n,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&bd(r,l,x)}p=p.next}while(p!==u)}}function Hl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function wd(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function yg(n){var r=n.alternate;r!==null&&(n.alternate=null,yg(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[qi],delete r[ro],delete r[Vu],delete r[H_],delete r[G_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Sg(n){return n.tag===5||n.tag===3||n.tag===4}function Mg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Sg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Td(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=_l));else if(u!==4&&(n=n.child,n!==null))for(Td(n,r,l),n=n.sibling;n!==null;)Td(n,r,l),n=n.sibling}function Ad(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Ad(n,r,l),n=n.sibling;n!==null;)Ad(n,r,l),n=n.sibling}var Vn=null,Bi=!1;function qr(n,r,l){for(l=l.child;l!==null;)Eg(n,r,l),l=l.sibling}function Eg(n,r,l){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(oe,l)}catch{}switch(l.tag){case 5:Yn||sa(l,r);case 6:var u=Vn,p=Bi;Vn=null,qr(n,r,l),Vn=u,Bi=p,Vn!==null&&(Bi?(n=Vn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Vn.removeChild(l.stateNode));break;case 18:Vn!==null&&(Bi?(n=Vn,l=l.stateNode,n.nodeType===8?zu(n.parentNode,l):n.nodeType===1&&zu(n,l),$a(n)):zu(Vn,l.stateNode));break;case 4:u=Vn,p=Bi,Vn=l.stateNode.containerInfo,Bi=!0,qr(n,r,l),Vn=u,Bi=p;break;case 0:case 11:case 14:case 15:if(!Yn&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,R=x.destroy;x=x.tag,R!==void 0&&((x&2)!==0||(x&4)!==0)&&bd(l,r,R),p=p.next}while(p!==u)}qr(n,r,l);break;case 1:if(!Yn&&(sa(l,r),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(O){Mn(l,r,O)}qr(n,r,l);break;case 21:qr(n,r,l);break;case 22:l.mode&1?(Yn=(u=Yn)||l.memoizedState!==null,qr(n,r,l),Yn=u):qr(n,r,l);break;default:qr(n,r,l)}}function bg(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new sy),r.forEach(function(u){var p=my.bind(null,n,u);l.has(u)||(l.add(u),u.then(p,p))})}}function zi(n,r){var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var x=n,R=r,O=R;e:for(;O!==null;){switch(O.tag){case 5:Vn=O.stateNode,Bi=!1;break e;case 3:Vn=O.stateNode.containerInfo,Bi=!0;break e;case 4:Vn=O.stateNode.containerInfo,Bi=!0;break e}O=O.return}if(Vn===null)throw Error(t(160));Eg(x,R,p),Vn=null,Bi=!1;var j=p.alternate;j!==null&&(j.return=null),p.return=null}catch(pe){Mn(p,r,pe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)wg(r,n),r=r.sibling}function wg(n,r){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(zi(r,n),Ji(n),u&4){try{go(3,n,n.return),Hl(3,n)}catch(rt){Mn(n,n.return,rt)}try{go(5,n,n.return)}catch(rt){Mn(n,n.return,rt)}}break;case 1:zi(r,n),Ji(n),u&512&&l!==null&&sa(l,l.return);break;case 5:if(zi(r,n),Ji(n),u&512&&l!==null&&sa(l,l.return),n.flags&32){var p=n.stateNode;try{we(p,"")}catch(rt){Mn(n,n.return,rt)}}if(u&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,R=l!==null?l.memoizedProps:x,O=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{O==="input"&&x.type==="radio"&&x.name!=null&&dt(p,x),Be(O,R);var pe=Be(O,x);for(R=0;R<j.length;R+=2){var Pe=j[R],Ie=j[R+1];Pe==="style"?Se(p,Ie):Pe==="dangerouslySetInnerHTML"?ye(p,Ie):Pe==="children"?we(p,Ie):P(p,Pe,Ie,pe)}switch(O){case"input":It(p,x);break;case"textarea":Ge(p,x);break;case"select":var Re=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var Ke=x.value;Ke!=null?Kt(p,!!x.multiple,Ke,!1):Re!==!!x.multiple&&(x.defaultValue!=null?Kt(p,!!x.multiple,x.defaultValue,!0):Kt(p,!!x.multiple,x.multiple?[]:"",!1))}p[ro]=x}catch(rt){Mn(n,n.return,rt)}}break;case 6:if(zi(r,n),Ji(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(rt){Mn(n,n.return,rt)}}break;case 3:if(zi(r,n),Ji(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{$a(r.containerInfo)}catch(rt){Mn(n,n.return,rt)}break;case 4:zi(r,n),Ji(n);break;case 13:zi(r,n),Ji(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(Pd=ft())),u&4&&bg(n);break;case 22:if(Pe=l!==null&&l.memoizedState!==null,n.mode&1?(Yn=(pe=Yn)||Pe,zi(r,n),Yn=pe):zi(r,n),Ji(n),u&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Pe&&(n.mode&1)!==0)for(Je=n,Pe=n.child;Pe!==null;){for(Ie=Je=Pe;Je!==null;){switch(Re=Je,Ke=Re.child,Re.tag){case 0:case 11:case 14:case 15:go(4,Re,Re.return);break;case 1:sa(Re,Re.return);var nt=Re.stateNode;if(typeof nt.componentWillUnmount=="function"){u=Re,l=Re.return;try{r=u,nt.props=r.memoizedProps,nt.state=r.memoizedState,nt.componentWillUnmount()}catch(rt){Mn(u,l,rt)}}break;case 5:sa(Re,Re.return);break;case 22:if(Re.memoizedState!==null){Rg(Ie);continue}}Ke!==null?(Ke.return=Re,Je=Ke):Rg(Ie)}Pe=Pe.sibling}e:for(Pe=null,Ie=n;;){if(Ie.tag===5){if(Pe===null){Pe=Ie;try{p=Ie.stateNode,pe?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(O=Ie.stateNode,j=Ie.memoizedProps.style,R=j!=null&&j.hasOwnProperty("display")?j.display:null,O.style.display=ve("display",R))}catch(rt){Mn(n,n.return,rt)}}}else if(Ie.tag===6){if(Pe===null)try{Ie.stateNode.nodeValue=pe?"":Ie.memoizedProps}catch(rt){Mn(n,n.return,rt)}}else if((Ie.tag!==22&&Ie.tag!==23||Ie.memoizedState===null||Ie===n)&&Ie.child!==null){Ie.child.return=Ie,Ie=Ie.child;continue}if(Ie===n)break e;for(;Ie.sibling===null;){if(Ie.return===null||Ie.return===n)break e;Pe===Ie&&(Pe=null),Ie=Ie.return}Pe===Ie&&(Pe=null),Ie.sibling.return=Ie.return,Ie=Ie.sibling}}break;case 19:zi(r,n),Ji(n),u&4&&bg(n);break;case 21:break;default:zi(r,n),Ji(n)}}function Ji(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Sg(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(we(p,""),u.flags&=-33);var x=Mg(n);Ad(n,x,p);break;case 3:case 4:var R=u.stateNode.containerInfo,O=Mg(n);Td(n,O,R);break;default:throw Error(t(161))}}catch(j){Mn(n,n.return,j)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function oy(n,r,l){Je=n,Tg(n)}function Tg(n,r,l){for(var u=(n.mode&1)!==0;Je!==null;){var p=Je,x=p.child;if(p.tag===22&&u){var R=p.memoizedState!==null||Vl;if(!R){var O=p.alternate,j=O!==null&&O.memoizedState!==null||Yn;O=Vl;var pe=Yn;if(Vl=R,(Yn=j)&&!pe)for(Je=p;Je!==null;)R=Je,j=R.child,R.tag===22&&R.memoizedState!==null?Cg(p):j!==null?(j.return=R,Je=j):Cg(p);for(;x!==null;)Je=x,Tg(x),x=x.sibling;Je=p,Vl=O,Yn=pe}Ag(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,Je=x):Ag(n)}}function Ag(n){for(;Je!==null;){var r=Je;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Yn||Hl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Yn)if(l===null)u.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:ki(r.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Rm(r,x,u);break;case 3:var R=r.updateQueue;if(R!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Rm(r,R,l)}break;case 5:var O=r.stateNode;if(l===null&&r.flags&4){l=O;var j=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&l.focus();break;case"img":j.src&&(l.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var pe=r.alternate;if(pe!==null){var Pe=pe.memoizedState;if(Pe!==null){var Ie=Pe.dehydrated;Ie!==null&&$a(Ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Yn||r.flags&512&&wd(r)}catch(Re){Mn(r,r.return,Re)}}if(r===n){Je=null;break}if(l=r.sibling,l!==null){l.return=r.return,Je=l;break}Je=r.return}}function Rg(n){for(;Je!==null;){var r=Je;if(r===n){Je=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Je=l;break}Je=r.return}}function Cg(n){for(;Je!==null;){var r=Je;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Hl(4,r)}catch(j){Mn(r,l,j)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(j){Mn(r,p,j)}}var x=r.return;try{wd(r)}catch(j){Mn(r,x,j)}break;case 5:var R=r.return;try{wd(r)}catch(j){Mn(r,R,j)}}}catch(j){Mn(r,r.return,j)}if(r===n){Je=null;break}var O=r.sibling;if(O!==null){O.return=r.return,Je=O;break}Je=r.return}}var ly=Math.ceil,Gl=I.ReactCurrentDispatcher,Rd=I.ReactCurrentOwner,Ai=I.ReactCurrentBatchConfig,Yt=0,Dn=null,Tn=null,Hn=0,_i=0,aa=Wr(0),Pn=0,vo=null,Es=0,Wl=0,Cd=0,xo=null,li=null,Pd=0,oa=1/0,xr=null,jl=!1,Nd=null,Kr=null,Xl=!1,Zr=null,$l=0,_o=0,Ld=null,Yl=-1,ql=0;function ei(){return(Yt&6)!==0?ft():Yl!==-1?Yl:Yl=ft()}function Jr(n){return(n.mode&1)===0?1:(Yt&2)!==0&&Hn!==0?Hn&-Hn:j_.transition!==null?(ql===0&&(ql=qe()),ql):(n=Bt,n!==0||(n=window.event,n=n===void 0?16:Np(n.type)),n)}function Vi(n,r,l,u){if(50<_o)throw _o=0,Ld=null,Error(t(185));Ft(n,l,u),((Yt&2)===0||n!==Dn)&&(n===Dn&&((Yt&2)===0&&(Wl|=l),Pn===4&&Qr(n,Hn)),ci(n,u),l===1&&Yt===0&&(r.mode&1)===0&&(oa=ft()+500,El&&Xr()))}function ci(n,r){var l=n.callbackNode;en(n,r);var u=cn(n,n===Dn?Hn:0);if(u===0)l!==null&&pn(l),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(l!=null&&pn(l),r===1)n.tag===0?W_(Ng.bind(null,n)):gm(Ng.bind(null,n)),z_(function(){(Yt&6)===0&&Xr()}),l=null;else{switch(ur(u)){case 1:l=Bn;break;case 4:l=N;break;case 16:l=Q;break;case 536870912:l=ie;break;default:l=Q}l=Bg(l,Pg.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Pg(n,r){if(Yl=-1,ql=0,(Yt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(la()&&n.callbackNode!==l)return null;var u=cn(n,n===Dn?Hn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Kl(n,u);else{r=u;var p=Yt;Yt|=2;var x=Ig();(Dn!==n||Hn!==r)&&(xr=null,oa=ft()+500,ws(n,r));do try{dy();break}catch(O){Lg(n,O)}while(!0);Ku(),Gl.current=x,Yt=p,Tn!==null?r=0:(Dn=null,Hn=0,r=Pn)}if(r!==0){if(r===2&&(p=wn(n),p!==0&&(u=p,r=Id(n,p))),r===1)throw l=vo,ws(n,0),Qr(n,u),ci(n,ft()),l;if(r===6)Qr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!cy(p)&&(r=Kl(n,u),r===2&&(x=wn(n),x!==0&&(u=x,r=Id(n,x))),r===1))throw l=vo,ws(n,0),Qr(n,u),ci(n,ft()),l;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Ts(n,li,xr);break;case 3:if(Qr(n,u),(u&130023424)===u&&(r=Pd+500-ft(),10<r)){if(cn(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){ei(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Bu(Ts.bind(null,n,li,xr),r);break}Ts(n,li,xr);break;case 4:if(Qr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var R=31-Ve(u);x=1<<R,R=r[R],R>p&&(p=R),u&=~x}if(u=p,u=ft()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*ly(u/1960))-u,10<u){n.timeoutHandle=Bu(Ts.bind(null,n,li,xr),u);break}Ts(n,li,xr);break;case 5:Ts(n,li,xr);break;default:throw Error(t(329))}}}return ci(n,ft()),n.callbackNode===l?Pg.bind(null,n):null}function Id(n,r){var l=xo;return n.current.memoizedState.isDehydrated&&(ws(n,r).flags|=256),n=Kl(n,r),n!==2&&(r=li,li=l,r!==null&&Dd(r)),n}function Dd(n){li===null?li=n:li.push.apply(li,n)}function cy(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],x=p.getSnapshot;p=p.value;try{if(!Fi(x(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(n,r){for(r&=~Cd,r&=~Wl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Ve(r),u=1<<l;n[l]=-1,r&=~u}}function Ng(n){if((Yt&6)!==0)throw Error(t(327));la();var r=cn(n,0);if((r&1)===0)return ci(n,ft()),null;var l=Kl(n,r);if(n.tag!==0&&l===2){var u=wn(n);u!==0&&(r=u,l=Id(n,u))}if(l===1)throw l=vo,ws(n,0),Qr(n,r),ci(n,ft()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ts(n,li,xr),ci(n,ft()),null}function Ud(n,r){var l=Yt;Yt|=1;try{return n(r)}finally{Yt=l,Yt===0&&(oa=ft()+500,El&&Xr())}}function bs(n){Zr!==null&&Zr.tag===0&&(Yt&6)===0&&la();var r=Yt;Yt|=1;var l=Ai.transition,u=Bt;try{if(Ai.transition=null,Bt=1,n)return n()}finally{Bt=u,Ai.transition=l,Yt=r,(Yt&6)===0&&Xr()}}function Fd(){_i=aa.current,hn(aa)}function ws(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,B_(l)),Tn!==null)for(l=Tn.return;l!==null;){var u=l;switch(ju(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Sl();break;case 3:ia(),hn(si),hn(jn),rd();break;case 5:nd(u);break;case 4:ia();break;case 13:hn(xn);break;case 19:hn(xn);break;case 10:Zu(u.type._context);break;case 22:case 23:Fd()}l=l.return}if(Dn=n,Tn=n=es(n.current,null),Hn=_i=r,Pn=0,vo=null,Cd=Wl=Es=0,li=xo=null,ys!==null){for(r=0;r<ys.length;r++)if(l=ys[r],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,x=l.pending;if(x!==null){var R=x.next;x.next=p,u.next=R}l.pending=u}ys=null}return n}function Lg(n,r){do{var l=Tn;try{if(Ku(),Il.current=Ol,Dl){for(var u=_n.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Dl=!1}if(Ms=0,In=Cn=_n=null,uo=!1,fo=0,Rd.current=null,l===null||l.return===null){Pn=1,vo=r,Tn=null;break}e:{var x=n,R=l.return,O=l,j=r;if(r=Hn,O.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var pe=j,Pe=O,Ie=Pe.tag;if((Pe.mode&1)===0&&(Ie===0||Ie===11||Ie===15)){var Re=Pe.alternate;Re?(Pe.updateQueue=Re.updateQueue,Pe.memoizedState=Re.memoizedState,Pe.lanes=Re.lanes):(Pe.updateQueue=null,Pe.memoizedState=null)}var Ke=ig(R);if(Ke!==null){Ke.flags&=-257,rg(Ke,R,O,x,r),Ke.mode&1&&ng(x,pe,r),r=Ke,j=pe;var nt=r.updateQueue;if(nt===null){var rt=new Set;rt.add(j),r.updateQueue=rt}else nt.add(j);break e}else{if((r&1)===0){ng(x,pe,r),Od();break e}j=Error(t(426))}}else if(gn&&O.mode&1){var bn=ig(R);if(bn!==null){(bn.flags&65536)===0&&(bn.flags|=256),rg(bn,R,O,x,r),Yu(ra(j,O));break e}}x=j=ra(j,O),Pn!==4&&(Pn=2),xo===null?xo=[x]:xo.push(x),x=R;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var ae=eg(x,j,r);Am(x,ae);break e;case 1:O=j;var q=x.type,ue=x.stateNode;if((x.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Kr===null||!Kr.has(ue)))){x.flags|=65536,r&=-r,x.lanes|=r;var Fe=tg(x,O,r);Am(x,Fe);break e}}x=x.return}while(x!==null)}Ug(l)}catch(ot){r=ot,Tn===l&&l!==null&&(Tn=l=l.return);continue}break}while(!0)}function Ig(){var n=Gl.current;return Gl.current=Ol,n===null?Ol:n}function Od(){(Pn===0||Pn===3||Pn===2)&&(Pn=4),Dn===null||(Es&268435455)===0&&(Wl&268435455)===0||Qr(Dn,Hn)}function Kl(n,r){var l=Yt;Yt|=2;var u=Ig();(Dn!==n||Hn!==r)&&(xr=null,ws(n,r));do try{uy();break}catch(p){Lg(n,p)}while(!0);if(Ku(),Yt=l,Gl.current=u,Tn!==null)throw Error(t(261));return Dn=null,Hn=0,Pn}function uy(){for(;Tn!==null;)Dg(Tn)}function dy(){for(;Tn!==null&&!jt();)Dg(Tn)}function Dg(n){var r=kg(n.alternate,n,_i);n.memoizedProps=n.pendingProps,r===null?Ug(n):Tn=r,Rd.current=null}function Ug(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=iy(l,r,_i),l!==null){Tn=l;return}}else{if(l=ry(l,r),l!==null){l.flags&=32767,Tn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Pn=6,Tn=null;return}}if(r=r.sibling,r!==null){Tn=r;return}Tn=r=n}while(r!==null);Pn===0&&(Pn=5)}function Ts(n,r,l){var u=Bt,p=Ai.transition;try{Ai.transition=null,Bt=1,fy(n,r,l,u)}finally{Ai.transition=p,Bt=u}return null}function fy(n,r,l,u){do la();while(Zr!==null);if((Yt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=l.lanes|l.childLanes;if(ii(n,x),n===Dn&&(Tn=Dn=null,Hn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Xl||(Xl=!0,Bg(Q,function(){return la(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=Ai.transition,Ai.transition=null;var R=Bt;Bt=1;var O=Yt;Yt|=4,Rd.current=null,ay(n,l),wg(l,n),L_(Ou),ol=!!Fu,Ou=Fu=null,n.current=l,oy(l),on(),Yt=O,Bt=R,Ai.transition=x}else n.current=l;if(Xl&&(Xl=!1,Zr=n,$l=p),x=n.pendingLanes,x===0&&(Kr=null),Ze(l.stateNode),ci(n,ft()),r!==null)for(u=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(jl)throw jl=!1,n=Nd,Nd=null,n;return($l&1)!==0&&n.tag!==0&&la(),x=n.pendingLanes,(x&1)!==0?n===Ld?_o++:(_o=0,Ld=n):_o=0,Xr(),null}function la(){if(Zr!==null){var n=ur($l),r=Ai.transition,l=Bt;try{if(Ai.transition=null,Bt=16>n?16:n,Zr===null)var u=!1;else{if(n=Zr,Zr=null,$l=0,(Yt&6)!==0)throw Error(t(331));var p=Yt;for(Yt|=4,Je=n.current;Je!==null;){var x=Je,R=x.child;if((Je.flags&16)!==0){var O=x.deletions;if(O!==null){for(var j=0;j<O.length;j++){var pe=O[j];for(Je=pe;Je!==null;){var Pe=Je;switch(Pe.tag){case 0:case 11:case 15:go(8,Pe,x)}var Ie=Pe.child;if(Ie!==null)Ie.return=Pe,Je=Ie;else for(;Je!==null;){Pe=Je;var Re=Pe.sibling,Ke=Pe.return;if(yg(Pe),Pe===pe){Je=null;break}if(Re!==null){Re.return=Ke,Je=Re;break}Je=Ke}}}var nt=x.alternate;if(nt!==null){var rt=nt.child;if(rt!==null){nt.child=null;do{var bn=rt.sibling;rt.sibling=null,rt=bn}while(rt!==null)}}Je=x}}if((x.subtreeFlags&2064)!==0&&R!==null)R.return=x,Je=R;else e:for(;Je!==null;){if(x=Je,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:go(9,x,x.return)}var ae=x.sibling;if(ae!==null){ae.return=x.return,Je=ae;break e}Je=x.return}}var q=n.current;for(Je=q;Je!==null;){R=Je;var ue=R.child;if((R.subtreeFlags&2064)!==0&&ue!==null)ue.return=R,Je=ue;else e:for(R=q;Je!==null;){if(O=Je,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Hl(9,O)}}catch(ot){Mn(O,O.return,ot)}if(O===R){Je=null;break e}var Fe=O.sibling;if(Fe!==null){Fe.return=O.return,Je=Fe;break e}Je=O.return}}if(Yt=p,Xr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(oe,n)}catch{}u=!0}return u}finally{Bt=l,Ai.transition=r}}return!1}function Fg(n,r,l){r=ra(l,r),r=eg(n,r,1),n=Yr(n,r,1),r=ei(),n!==null&&(Ft(n,1,r),ci(n,r))}function Mn(n,r,l){if(n.tag===3)Fg(n,n,l);else for(;r!==null;){if(r.tag===3){Fg(r,n,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Kr===null||!Kr.has(u))){n=ra(l,n),n=tg(r,n,1),r=Yr(r,n,1),n=ei(),r!==null&&(Ft(r,1,n),ci(r,n));break}}r=r.return}}function hy(n,r,l){var u=n.pingCache;u!==null&&u.delete(r),r=ei(),n.pingedLanes|=n.suspendedLanes&l,Dn===n&&(Hn&l)===l&&(Pn===4||Pn===3&&(Hn&130023424)===Hn&&500>ft()-Pd?ws(n,0):Cd|=l),ci(n,r)}function Og(n,r){r===0&&((n.mode&1)===0?r=1:(r=st,st<<=1,(st&130023424)===0&&(st=4194304)));var l=ei();n=mr(n,r),n!==null&&(Ft(n,r,l),ci(n,l))}function py(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Og(n,l)}function my(n,r){var l=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Og(n,l)}var kg;kg=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||si.current)oi=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return oi=!1,ny(n,r,l);oi=(n.flags&131072)!==0}else oi=!1,gn&&(r.flags&1048576)!==0&&vm(r,wl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;zl(n,r),n=r.pendingProps;var p=Ks(r,jn.current);na(r,l),p=od(null,r,u,n,p,l);var x=ld();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ai(u)?(x=!0,Ml(r)):x=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,ed(r),p.updater=kl,r.stateNode=p,p._reactInternals=r,pd(r,u,n,l),r=xd(null,r,u,!0,x,l)):(r.tag=0,gn&&x&&Wu(r),Qn(null,r,p,l),r=r.child),r;case 16:u=r.elementType;e:{switch(zl(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=vy(u),n=ki(u,n),p){case 0:r=vd(null,r,u,n,l);break e;case 1:r=ug(null,r,u,n,l);break e;case 11:r=sg(null,r,u,n,l);break e;case 14:r=ag(null,r,u,ki(u.type,n),l);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:ki(u,p),vd(n,r,u,p,l);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:ki(u,p),ug(n,r,u,p,l);case 3:e:{if(dg(r),n===null)throw Error(t(387));u=r.pendingProps,x=r.memoizedState,p=x.element,Tm(n,r),Nl(r,u,null,l);var R=r.memoizedState;if(u=R.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:R.cache,pendingSuspenseBoundaries:R.pendingSuspenseBoundaries,transitions:R.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){p=ra(Error(t(423)),r),r=fg(n,r,u,l,p);break e}else if(u!==p){p=ra(Error(t(424)),r),r=fg(n,r,u,l,p);break e}else for(xi=Gr(r.stateNode.containerInfo.firstChild),vi=r,gn=!0,Oi=null,l=bm(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Qs(),u===p){r=vr(n,r,l);break e}Qn(n,r,u,l)}r=r.child}return r;case 5:return Cm(r),n===null&&$u(r),u=r.type,p=r.pendingProps,x=n!==null?n.memoizedProps:null,R=p.children,ku(u,p)?R=null:x!==null&&ku(u,x)&&(r.flags|=32),cg(n,r),Qn(n,r,R,l),r.child;case 6:return n===null&&$u(r),null;case 13:return hg(n,r,l);case 4:return td(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=ea(r,null,u,l):Qn(n,r,u,l),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:ki(u,p),sg(n,r,u,p,l);case 7:return Qn(n,r,r.pendingProps,l),r.child;case 8:return Qn(n,r,r.pendingProps.children,l),r.child;case 12:return Qn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,x=r.memoizedProps,R=p.value,un(Rl,u._currentValue),u._currentValue=R,x!==null)if(Fi(x.value,R)){if(x.children===p.children&&!si.current){r=vr(n,r,l);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var O=x.dependencies;if(O!==null){R=x.child;for(var j=O.firstContext;j!==null;){if(j.context===u){if(x.tag===1){j=gr(-1,l&-l),j.tag=2;var pe=x.updateQueue;if(pe!==null){pe=pe.shared;var Pe=pe.pending;Pe===null?j.next=j:(j.next=Pe.next,Pe.next=j),pe.pending=j}}x.lanes|=l,j=x.alternate,j!==null&&(j.lanes|=l),Ju(x.return,l,r),O.lanes|=l;break}j=j.next}}else if(x.tag===10)R=x.type===r.type?null:x.child;else if(x.tag===18){if(R=x.return,R===null)throw Error(t(341));R.lanes|=l,O=R.alternate,O!==null&&(O.lanes|=l),Ju(R,l,r),R=x.sibling}else R=x.child;if(R!==null)R.return=x;else for(R=x;R!==null;){if(R===r){R=null;break}if(x=R.sibling,x!==null){x.return=R.return,R=x;break}R=R.return}x=R}Qn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,na(r,l),p=wi(p),u=u(p),r.flags|=1,Qn(n,r,u,l),r.child;case 14:return u=r.type,p=ki(u,r.pendingProps),p=ki(u.type,p),ag(n,r,u,p,l);case 15:return og(n,r,r.type,r.pendingProps,l);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:ki(u,p),zl(n,r),r.tag=1,ai(u)?(n=!0,Ml(r)):n=!1,na(r,l),Jm(r,u,p),pd(r,u,p,l),xd(null,r,u,!0,n,l);case 19:return mg(n,r,l);case 22:return lg(n,r,l)}throw Error(t(156,r.tag))};function Bg(n,r){return Gt(n,r)}function gy(n,r,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(n,r,l,u){return new gy(n,r,l,u)}function kd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vy(n){if(typeof n=="function")return kd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===W)return 14}return 2}function es(n,r){var l=n.alternate;return l===null?(l=Ri(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Zl(n,r,l,u,p,x){var R=2;if(u=n,typeof n=="function")kd(n)&&(R=1);else if(typeof n=="string")R=5;else e:switch(n){case V:return As(l.children,p,x,r);case w:R=8,p|=8;break;case L:return n=Ri(12,l,r,p|2),n.elementType=L,n.lanes=x,n;case se:return n=Ri(13,l,r,p),n.elementType=se,n.lanes=x,n;case de:return n=Ri(19,l,r,p),n.elementType=de,n.lanes=x,n;case K:return Jl(l,p,x,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:R=10;break e;case B:R=9;break e;case Y:R=11;break e;case W:R=14;break e;case J:R=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Ri(R,l,r,p),r.elementType=n,r.type=u,r.lanes=x,r}function As(n,r,l,u){return n=Ri(7,n,u,r),n.lanes=l,n}function Jl(n,r,l,u){return n=Ri(22,n,u,r),n.elementType=K,n.lanes=l,n.stateNode={isHidden:!1},n}function Bd(n,r,l){return n=Ri(6,n,null,r),n.lanes=l,n}function zd(n,r,l){return r=Ri(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function xy(n,r,l,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Vd(n,r,l,u,p,x,R,O,j){return n=new xy(n,r,l,O,j),r===1?(r=1,x===!0&&(r|=8)):r=0,x=Ri(3,null,null,r),n.current=x,x.stateNode=n,x.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(x),n}function _y(n,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:r,implementation:l}}function zg(n){if(!n)return jr;n=n._reactInternals;e:{if(Pt(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ai(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(ai(l))return pm(n,l,r)}return r}function Vg(n,r,l,u,p,x,R,O,j){return n=Vd(l,u,!0,n,p,x,R,O,j),n.context=zg(null),l=n.current,u=ei(),p=Jr(l),x=gr(u,p),x.callback=r??null,Yr(l,x,p),n.current.lanes=p,Ft(n,p,u),ci(n,u),n}function Ql(n,r,l,u){var p=r.current,x=ei(),R=Jr(p);return l=zg(l),r.context===null?r.context=l:r.pendingContext=l,r=gr(x,R),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Yr(p,r,R),n!==null&&(Vi(n,p,R,x),Pl(n,p,R)),R}function ec(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Hd(n,r){Hg(n,r),(n=n.alternate)&&Hg(n,r)}function yy(){return null}var Gg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Gd(n){this._internalRoot=n}tc.prototype.render=Gd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ql(n,r,null,null)},tc.prototype.unmount=Gd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;bs(function(){Ql(null,n,null,null)}),r[dr]=null}};function tc(n){this._internalRoot=n}tc.prototype.unstable_scheduleHydration=function(n){if(n){var r=tn();n={blockedOn:null,target:n,priority:r};for(var l=0;l<zr.length&&r!==0&&r<zr[l].priority;l++);zr.splice(l,0,n),l===0&&Cp(n)}};function Wd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Wg(){}function Sy(n,r,l,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var pe=ec(R);x.call(pe)}}var R=Vg(r,u,n,0,null,!1,!1,"",Wg);return n._reactRootContainer=R,n[dr]=R.current,no(n.nodeType===8?n.parentNode:n),bs(),R}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var O=u;u=function(){var pe=ec(j);O.call(pe)}}var j=Vd(n,0,!1,null,null,!1,!1,"",Wg);return n._reactRootContainer=j,n[dr]=j.current,no(n.nodeType===8?n.parentNode:n),bs(function(){Ql(r,j,l,u)}),j}function ic(n,r,l,u,p){var x=l._reactRootContainer;if(x){var R=x;if(typeof p=="function"){var O=p;p=function(){var j=ec(R);O.call(j)}}Ql(r,R,n,p)}else R=Sy(l,r,n,p,u);return ec(R)}Zt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Xt(r.pendingLanes);l!==0&&(ri(r,l|1),ci(r,ft()),(Yt&6)===0&&(oa=ft()+500,Xr()))}break;case 13:bs(function(){var u=mr(n,1);if(u!==null){var p=ei();Vi(u,n,1,p)}}),Hd(n,1)}},dn=function(n){if(n.tag===13){var r=mr(n,134217728);if(r!==null){var l=ei();Vi(r,n,134217728,l)}Hd(n,134217728)}},Di=function(n){if(n.tag===13){var r=Jr(n),l=mr(n,r);if(l!==null){var u=ei();Vi(l,n,r,u)}Hd(n,r)}},tn=function(){return Bt},Ui=function(n,r){var l=Bt;try{return Bt=n,r()}finally{Bt=l}},yt=function(n,r,l){switch(r){case"input":if(It(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var u=l[r];if(u!==n&&u.form===n.form){var p=yl(u);if(!p)throw Error(t(90));ut(u),It(u,p)}}}break;case"textarea":Ge(n,l);break;case"select":r=l.value,r!=null&&Kt(n,!!l.multiple,r,!1)}},ze=Ud,Ae=bs;var My={usingClientEntryPoint:!1,Events:[so,Ys,yl,_e,Ye,Ud]},yo={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ey={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Jn(n),n===null?null:n.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{oe=rc.inject(Ey),He=rc}catch{}}return ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=My,ui.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wd(r))throw Error(t(200));return _y(n,r,null,l)},ui.createRoot=function(n,r){if(!Wd(n))throw Error(t(299));var l=!1,u="",p=Gg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Vd(n,1,!1,null,null,l,!1,u,p),n[dr]=r.current,no(n.nodeType===8?n.parentNode:n),new Gd(r)},ui.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Jn(r),n=n===null?null:n.stateNode,n},ui.flushSync=function(n){return bs(n)},ui.hydrate=function(n,r,l){if(!nc(r))throw Error(t(200));return ic(null,n,r,!0,l)},ui.hydrateRoot=function(n,r,l){if(!Wd(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,x="",R=Gg;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(R=l.onRecoverableError)),r=Vg(r,null,n,1,l??null,p,!1,x,R),n[dr]=r.current,no(n),u)for(n=0;n<u.length;n++)l=u[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new tc(r)},ui.render=function(n,r,l){if(!nc(r))throw Error(t(200));return ic(null,n,r,!1,l)},ui.unmountComponentAtNode=function(n){if(!nc(n))throw Error(t(40));return n._reactRootContainer?(bs(function(){ic(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},ui.unstable_batchedUpdates=Ud,ui.unstable_renderSubtreeIntoContainer=function(n,r,l,u){if(!nc(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ic(n,r,l,!1,u)},ui.version="18.3.1-next-f1338f8080-20240426",ui}var Jg;function Ny(){if(Jg)return $d.exports;Jg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),$d.exports=Py(),$d.exports}var Qg;function Ly(){if(Qg)return sc;Qg=1;var s=Ny();return sc.createRoot=s.createRoot,sc.hydrateRoot=s.hydrateRoot,sc}var Iy=Ly(),G=Xh();/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var e0="popstate";function Dy(s={}){function e(i,a){let{pathname:o,search:c,hash:d}=i.location;return $f("",{pathname:o,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){return typeof a=="string"?a:$o(a)}return Fy(e,t,null,s)}function yn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function or(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Uy(){return Math.random().toString(36).substring(2,10)}function t0(s,e){return{usr:s.state,key:s.key,idx:e}}function $f(s,e,t=null,i){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?ka(e):e,state:t,key:e&&e.key||i||Uy()}}function $o({pathname:s="/",search:e="",hash:t=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(s+=t.charAt(0)==="#"?t:"#"+t),s}function ka(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substring(t),s=s.substring(0,t));let i=s.indexOf("?");i>=0&&(e.search=s.substring(i),s=s.substring(0,i)),s&&(e.pathname=s)}return e}function Fy(s,e,t,i={}){let{window:a=document.defaultView,v5Compat:o=!1}=i,c=a.history,d="POP",h=null,f=m();f==null&&(f=0,c.replaceState({...c.state,idx:f},""));function m(){return(c.state||{idx:null}).idx}function g(){d="POP";let y=m(),S=y==null?null:y-f;f=y,h&&h({action:d,location:E.location,delta:S})}function v(y,S){d="PUSH";let A=$f(E.location,y,S);f=m()+1;let P=t0(A,f),I=E.createHref(A);try{c.pushState(P,"",I)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(I)}o&&h&&h({action:d,location:E.location,delta:1})}function _(y,S){d="REPLACE";let A=$f(E.location,y,S);f=m();let P=t0(A,f),I=E.createHref(A);c.replaceState(P,"",I),o&&h&&h({action:d,location:E.location,delta:0})}function M(y){return Oy(y)}let E={get action(){return d},get location(){return s(a,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(e0,g),h=y,()=>{a.removeEventListener(e0,g),h=null}},createHref(y){return e(a,y)},createURL:M,encodeLocation(y){let S=M(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:v,replace:_,go(y){return c.go(y)}};return E}function Oy(s,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),yn(t,"No window.location.(origin|href) available to create URL");let i=typeof s=="string"?s:$o(s);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function Vv(s,e,t="/"){return ky(s,e,t,!1)}function ky(s,e,t,i){let a=typeof e=="string"?ka(e):e,o=Nr(a.pathname||"/",t);if(o==null)return null;let c=Hv(s);By(c);let d=null;for(let h=0;d==null&&h<c.length;++h){let f=Ky(o);d=Yy(c[h],f,i)}return d}function Hv(s,e=[],t=[],i="",a=!1){let o=(c,d,h=a,f)=>{let m={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(i)&&h)return;yn(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length)}let g=Rr([i,m.relativePath]),v=t.concat(m);c.children&&c.children.length>0&&(yn(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Hv(c.children,e,v,g,h)),!(c.path==null&&!c.index)&&e.push({path:g,score:Xy(g,c.index),routesMeta:v})};return s.forEach((c,d)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))o(c,d);else for(let f of Gv(c.path))o(c,d,!0,f)}),e}function Gv(s){let e=s.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(i.length===0)return a?[o,""]:[o];let c=Gv(i.join("/")),d=[];return d.push(...c.map(h=>h===""?o:[o,h].join("/"))),a&&d.push(...c),d.map(h=>s.startsWith("/")&&h===""?"/":h)}function By(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:$y(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var zy=/^:[\w-]+$/,Vy=3,Hy=2,Gy=1,Wy=10,jy=-2,n0=s=>s==="*";function Xy(s,e){let t=s.split("/"),i=t.length;return t.some(n0)&&(i+=jy),e&&(i+=Hy),t.filter(a=>!n0(a)).reduce((a,o)=>a+(zy.test(o)?Vy:o===""?Gy:Wy),i)}function $y(s,e){return s.length===e.length&&s.slice(0,-1).every((i,a)=>i===e[a])?s[s.length-1]-e[e.length-1]:0}function Yy(s,e,t=!1){let{routesMeta:i}=s,a={},o="/",c=[];for(let d=0;d<i.length;++d){let h=i[d],f=d===i.length-1,m=o==="/"?e:e.slice(o.length)||"/",g=Yc({path:h.relativePath,caseSensitive:h.caseSensitive,end:f},m),v=h.route;if(!g&&f&&t&&!i[i.length-1].route.index&&(g=Yc({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},m)),!g)return null;Object.assign(a,g.params),c.push({params:a,pathname:Rr([o,g.pathname]),pathnameBase:eS(Rr([o,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(o=Rr([o,g.pathnameBase]))}return c}function Yc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,i]=qy(s.path,s.caseSensitive,s.end),a=e.match(t);if(!a)return null;let o=a[0],c=o.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((f,{paramName:m,isOptional:g},v)=>{if(m==="*"){let M=d[v]||"";c=o.slice(0,o.length-M.length).replace(/(.)\/+$/,"$1")}const _=d[v];return g&&!_?f[m]=void 0:f[m]=(_||"").replace(/%2F/g,"/"),f},{}),pathname:o,pathnameBase:c,pattern:s}}function qy(s,e=!1,t=!0){or(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let i=[],a="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,h)=>(i.push({paramName:d,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(i.push({paramName:"*"}),a+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":s!==""&&s!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function Ky(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return or(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Nr(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=s.charAt(t);return i&&i!=="/"?null:s.slice(t)||"/"}var Zy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Jy(s,e="/"){let{pathname:t,search:i="",hash:a=""}=typeof s=="string"?ka(s):s,o;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?o=i0(t.substring(1),"/"):o=i0(t,e)):o=e,{pathname:o,search:tS(i),hash:nS(a)}}function i0(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Kd(s,e,t,i){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Qy(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Wv(s){let e=Qy(s);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function jv(s,e,t,i=!1){let a;typeof s=="string"?a=ka(s):(a={...s},yn(!a.pathname||!a.pathname.includes("?"),Kd("?","pathname","search",a)),yn(!a.pathname||!a.pathname.includes("#"),Kd("#","pathname","hash",a)),yn(!a.search||!a.search.includes("#"),Kd("#","search","hash",a)));let o=s===""||a.pathname==="",c=o?"/":a.pathname,d;if(c==null)d=t;else{let g=e.length-1;if(!i&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),g-=1;a.pathname=v.join("/")}d=g>=0?e[g]:"/"}let h=Jy(a,d),f=c&&c!=="/"&&c.endsWith("/"),m=(o||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(f||m)&&(h.pathname+="/"),h}var Rr=s=>s.join("/").replace(/\/\/+/g,"/"),eS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),tS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,nS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,iS=class{constructor(s,e,t,i=!1){this.status=s,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function rS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function sS(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Xv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function $v(s,e){let t=s;if(typeof t!="string"||!Zy.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,a=!1;if(Xv)try{let o=new URL(window.location.href),c=t.startsWith("//")?new URL(o.protocol+t):new URL(t),d=Nr(c.pathname,e);c.origin===o.origin&&d!=null?t=d+c.search+c.hash:a=!0}catch{or(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Yv=["POST","PUT","PATCH","DELETE"];new Set(Yv);var aS=["GET",...Yv];new Set(aS);var Ba=G.createContext(null);Ba.displayName="DataRouter";var cu=G.createContext(null);cu.displayName="DataRouterState";var oS=G.createContext(!1),qv=G.createContext({isTransitioning:!1});qv.displayName="ViewTransition";var lS=G.createContext(new Map);lS.displayName="Fetchers";var cS=G.createContext(null);cS.displayName="Await";var Ii=G.createContext(null);Ii.displayName="Navigation";var Jo=G.createContext(null);Jo.displayName="Location";var Dr=G.createContext({outlet:null,matches:[],isDataRoute:!1});Dr.displayName="Route";var $h=G.createContext(null);$h.displayName="RouteError";var Kv="REACT_ROUTER_ERROR",uS="REDIRECT",dS="ROUTE_ERROR_RESPONSE";function fS(s){if(s.startsWith(`${Kv}:${uS}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function hS(s){if(s.startsWith(`${Kv}:${dS}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new iS(e.status,e.statusText,e.data)}catch{}}function pS(s,{relative:e}={}){yn(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=G.useContext(Ii),{hash:a,pathname:o,search:c}=tl(s,{relative:e}),d=o;return t!=="/"&&(d=o==="/"?t:Rr([t,o])),i.createHref({pathname:d,search:c,hash:a})}function Qo(){return G.useContext(Jo)!=null}function Bs(){return yn(Qo(),"useLocation() may be used only in the context of a <Router> component."),G.useContext(Jo).location}var Zv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Jv(s){G.useContext(Ii).static||G.useLayoutEffect(s)}function el(){let{isDataRoute:s}=G.useContext(Dr);return s?AS():mS()}function mS(){yn(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let s=G.useContext(Ba),{basename:e,navigator:t}=G.useContext(Ii),{matches:i}=G.useContext(Dr),{pathname:a}=Bs(),o=JSON.stringify(Wv(i)),c=G.useRef(!1);return Jv(()=>{c.current=!0}),G.useCallback((h,f={})=>{if(or(c.current,Zv),!c.current)return;if(typeof h=="number"){t.go(h);return}let m=jv(h,JSON.parse(o),a,f.relative==="path");s==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Rr([e,m.pathname])),(f.replace?t.replace:t.push)(m,f.state,f)},[e,t,o,a,s])}G.createContext(null);function tl(s,{relative:e}={}){let{matches:t}=G.useContext(Dr),{pathname:i}=Bs(),a=JSON.stringify(Wv(t));return G.useMemo(()=>jv(s,JSON.parse(a),i,e==="path"),[s,a,i,e])}function gS(s,e){return Qv(s,e)}function Qv(s,e,t,i,a){var A;yn(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=G.useContext(Ii),{matches:c}=G.useContext(Dr),d=c[c.length-1],h=d?d.params:{},f=d?d.pathname:"/",m=d?d.pathnameBase:"/",g=d&&d.route;{let P=g&&g.path||"";tx(f,!g||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let v=Bs(),_;if(e){let P=typeof e=="string"?ka(e):e;yn(m==="/"||((A=P.pathname)==null?void 0:A.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${P.pathname}" was given in the \`location\` prop.`),_=P}else _=v;let M=_.pathname||"/",E=M;if(m!=="/"){let P=m.replace(/^\//,"").split("/");E="/"+M.replace(/^\//,"").split("/").slice(P.length).join("/")}let y=Vv(s,{pathname:E});or(g||y!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),or(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=SS(y&&y.map(P=>Object.assign({},P,{params:Object.assign({},h,P.params),pathname:Rr([m,o.encodeLocation?o.encodeLocation(P.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?m:Rr([m,o.encodeLocation?o.encodeLocation(P.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:P.pathnameBase])})),c,t,i,a);return e&&S?G.createElement(Jo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},S):S}function vS(){let s=TS(),e=rS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",s),c=G.createElement(G.Fragment,null,G.createElement("p",null,"💿 Hey developer 👋"),G.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",G.createElement("code",{style:o},"ErrorBoundary")," or"," ",G.createElement("code",{style:o},"errorElement")," prop on your route.")),G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),t?G.createElement("pre",{style:a},t):null,c)}var xS=G.createElement(vS,null),ex=class extends G.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const t=hS(s.digest);t&&(s=t)}let e=s!==void 0?G.createElement(Dr.Provider,{value:this.props.routeContext},G.createElement($h.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?G.createElement(_S,{error:s},e):e}};ex.contextType=oS;var Zd=new WeakMap;function _S({children:s,error:e}){let{basename:t}=G.useContext(Ii);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=fS(e.digest);if(i){let a=Zd.get(e);if(a)throw a;let o=$v(i.location,t);if(Xv&&!Zd.get(e))if(o.isExternal||i.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:i.replace}));throw Zd.set(e,c),c}return G.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return s}function yS({routeContext:s,match:e,children:t}){let i=G.useContext(Ba);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),G.createElement(Dr.Provider,{value:s},t)}function SS(s,e=[],t=null,i=null,a=null){if(s==null){if(!t)return null;if(t.errors)s=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let o=s,c=t==null?void 0:t.errors;if(c!=null){let m=o.findIndex(g=>g.route.id&&(c==null?void 0:c[g.route.id])!==void 0);yn(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let d=!1,h=-1;if(t)for(let m=0;m<o.length;m++){let g=o[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=m),g.route.id){let{loaderData:v,errors:_}=t,M=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!_||_[g.route.id]===void 0);if(g.route.lazy||M){d=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}let f=t&&i?(m,g)=>{var v,_;i(m,{location:t.location,params:((_=(v=t.matches)==null?void 0:v[0])==null?void 0:_.params)??{},unstable_pattern:sS(t.matches),errorInfo:g})}:void 0;return o.reduceRight((m,g,v)=>{let _,M=!1,E=null,y=null;t&&(_=c&&g.route.id?c[g.route.id]:void 0,E=g.route.errorElement||xS,d&&(h<0&&v===0?(tx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,y=null):h===v&&(M=!0,y=g.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,v+1)),A=()=>{let P;return _?P=E:M?P=y:g.route.Component?P=G.createElement(g.route.Component,null):g.route.element?P=g.route.element:P=m,G.createElement(yS,{match:g,routeContext:{outlet:m,matches:S,isDataRoute:t!=null},children:P})};return t&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?G.createElement(ex,{location:t.location,revalidation:t.revalidation,component:E,error:_,children:A(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:f}):A()},null)}function Yh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function MS(s){let e=G.useContext(Ba);return yn(e,Yh(s)),e}function ES(s){let e=G.useContext(cu);return yn(e,Yh(s)),e}function bS(s){let e=G.useContext(Dr);return yn(e,Yh(s)),e}function qh(s){let e=bS(s),t=e.matches[e.matches.length-1];return yn(t.route.id,`${s} can only be used on routes that contain a unique "id"`),t.route.id}function wS(){return qh("useRouteId")}function TS(){var i;let s=G.useContext($h),e=ES("useRouteError"),t=qh("useRouteError");return s!==void 0?s:(i=e.errors)==null?void 0:i[t]}function AS(){let{router:s}=MS("useNavigate"),e=qh("useNavigate"),t=G.useRef(!1);return Jv(()=>{t.current=!0}),G.useCallback(async(a,o={})=>{or(t.current,Zv),t.current&&(typeof a=="number"?await s.navigate(a):await s.navigate(a,{fromRouteId:e,...o}))},[s,e])}var r0={};function tx(s,e,t){!e&&!r0[s]&&(r0[s]=!0,or(!1,t))}G.memo(RS);function RS({routes:s,future:e,state:t,onError:i}){return Qv(s,void 0,t,i,e)}function Bo(s){yn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function CS({basename:s="/",children:e=null,location:t,navigationType:i="POP",navigator:a,static:o=!1,unstable_useTransitions:c}){yn(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),h=G.useMemo(()=>({basename:d,navigator:a,static:o,unstable_useTransitions:c,future:{}}),[d,a,o,c]);typeof t=="string"&&(t=ka(t));let{pathname:f="/",search:m="",hash:g="",state:v=null,key:_="default"}=t,M=G.useMemo(()=>{let E=Nr(f,d);return E==null?null:{location:{pathname:E,search:m,hash:g,state:v,key:_},navigationType:i}},[d,f,m,g,v,_,i]);return or(M!=null,`<Router basename="${d}"> is not able to match the URL "${f}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:G.createElement(Ii.Provider,{value:h},G.createElement(Jo.Provider,{children:e,value:M}))}function PS({children:s,location:e}){return gS(Yf(s),e)}function Yf(s,e=[]){let t=[];return G.Children.forEach(s,(i,a)=>{if(!G.isValidElement(i))return;let o=[...e,a];if(i.type===G.Fragment){t.push.apply(t,Yf(i.props.children,o));return}yn(i.type===Bo,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),yn(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=Yf(i.props.children,o)),t.push(c)}),t}var Bc="get",zc="application/x-www-form-urlencoded";function uu(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function NS(s){return uu(s)&&s.tagName.toLowerCase()==="button"}function LS(s){return uu(s)&&s.tagName.toLowerCase()==="form"}function IS(s){return uu(s)&&s.tagName.toLowerCase()==="input"}function DS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function US(s,e){return s.button===0&&(!e||e==="_self")&&!DS(s)}var ac=null;function FS(){if(ac===null)try{new FormData(document.createElement("form"),0),ac=!1}catch{ac=!0}return ac}var OS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jd(s){return s!=null&&!OS.has(s)?(or(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zc}"`),null):s}function kS(s,e){let t,i,a,o,c;if(LS(s)){let d=s.getAttribute("action");i=d?Nr(d,e):null,t=s.getAttribute("method")||Bc,a=Jd(s.getAttribute("enctype"))||zc,o=new FormData(s)}else if(NS(s)||IS(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=s.getAttribute("formaction")||d.getAttribute("action");if(i=h?Nr(h,e):null,t=s.getAttribute("formmethod")||d.getAttribute("method")||Bc,a=Jd(s.getAttribute("formenctype"))||Jd(d.getAttribute("enctype"))||zc,o=new FormData(d,s),!FS()){let{name:f,type:m,value:g}=s;if(m==="image"){let v=f?`${f}.`:"";o.append(`${v}x`,"0"),o.append(`${v}y`,"0")}else f&&o.append(f,g)}}else{if(uu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Bc,i=null,a=zc,c=s}return o&&a==="text/plain"&&(c=o,o=void 0),{action:i,method:t.toLowerCase(),encType:a,formData:o,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Kh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function BS(s,e,t,i){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${i}`:a.pathname=`${a.pathname}.${i}`:a.pathname==="/"?a.pathname=`_root.${i}`:e&&Nr(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function zS(s,e){if(s.id in e)return e[s.id];try{let t=await import(s.module);return e[s.id]=t,t}catch(t){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function VS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function HS(s,e,t){let i=await Promise.all(s.map(async a=>{let o=e.routes[a.route.id];if(o){let c=await zS(o,t);return c.links?c.links():[]}return[]}));return XS(i.flat(1).filter(VS).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function s0(s,e,t,i,a,o){let c=(h,f)=>t[f]?h.route.id!==t[f].route.id:!0,d=(h,f)=>{var m;return t[f].pathname!==h.pathname||((m=t[f].route.path)==null?void 0:m.endsWith("*"))&&t[f].params["*"]!==h.params["*"]};return o==="assets"?e.filter((h,f)=>c(h,f)||d(h,f)):o==="data"?e.filter((h,f)=>{var g;let m=i.routes[h.route.id];if(!m||!m.hasLoader)return!1;if(c(h,f)||d(h,f))return!0;if(h.route.shouldRevalidate){let v=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((g=t[0])==null?void 0:g.params)||{},nextUrl:new URL(s,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function GS(s,e,{includeHydrateFallback:t}={}){return WS(s.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function WS(s){return[...new Set(s)]}function jS(s){let e={},t=Object.keys(s).sort();for(let i of t)e[i]=s[i];return e}function XS(s,e){let t=new Set;return new Set(e),s.reduce((i,a)=>{let o=JSON.stringify(jS(a));return t.has(o)||(t.add(o),i.push({key:o,link:a})),i},[])}function nx(){let s=G.useContext(Ba);return Kh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function $S(){let s=G.useContext(cu);return Kh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Zh=G.createContext(void 0);Zh.displayName="FrameworkContext";function ix(){let s=G.useContext(Zh);return Kh(s,"You must render this element inside a <HydratedRouter> element"),s}function YS(s,e){let t=G.useContext(Zh),[i,a]=G.useState(!1),[o,c]=G.useState(!1),{onFocus:d,onBlur:h,onMouseEnter:f,onMouseLeave:m,onTouchStart:g}=e,v=G.useRef(null);G.useEffect(()=>{if(s==="render"&&c(!0),s==="viewport"){let E=S=>{S.forEach(A=>{c(A.isIntersecting)})},y=new IntersectionObserver(E,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[s]),G.useEffect(()=>{if(i){let E=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(E)}}},[i]);let _=()=>{a(!0)},M=()=>{a(!1),c(!1)};return t?s!=="intent"?[o,v,{}]:[o,v,{onFocus:Mo(d,_),onBlur:Mo(h,M),onMouseEnter:Mo(f,_),onMouseLeave:Mo(m,M),onTouchStart:Mo(g,_)}]:[!1,v,{}]}function Mo(s,e){return t=>{s&&s(t),t.defaultPrevented||e(t)}}function qS({page:s,...e}){let{router:t}=nx(),i=G.useMemo(()=>Vv(t.routes,s,t.basename),[t.routes,s,t.basename]);return i?G.createElement(ZS,{page:s,matches:i,...e}):null}function KS(s){let{manifest:e,routeModules:t}=ix(),[i,a]=G.useState([]);return G.useEffect(()=>{let o=!1;return HS(s,e,t).then(c=>{o||a(c)}),()=>{o=!0}},[s,e,t]),i}function ZS({page:s,matches:e,...t}){let i=Bs(),{future:a,manifest:o,routeModules:c}=ix(),{basename:d}=nx(),{loaderData:h,matches:f}=$S(),m=G.useMemo(()=>s0(s,e,f,o,i,"data"),[s,e,f,o,i]),g=G.useMemo(()=>s0(s,e,f,o,i,"assets"),[s,e,f,o,i]),v=G.useMemo(()=>{if(s===i.pathname+i.search+i.hash)return[];let E=new Set,y=!1;if(e.forEach(A=>{var I;let P=o.routes[A.route.id];!P||!P.hasLoader||(!m.some(k=>k.route.id===A.route.id)&&A.route.id in h&&((I=c[A.route.id])!=null&&I.shouldRevalidate)||P.hasClientLoader?y=!0:E.add(A.route.id))}),E.size===0)return[];let S=BS(s,d,a.unstable_trailingSlashAwareDataRequests,"data");return y&&E.size>0&&S.searchParams.set("_routes",e.filter(A=>E.has(A.route.id)).map(A=>A.route.id).join(",")),[S.pathname+S.search]},[d,a.unstable_trailingSlashAwareDataRequests,h,i,o,m,e,s,c]),_=G.useMemo(()=>GS(g,o),[g,o]),M=KS(g);return G.createElement(G.Fragment,null,v.map(E=>G.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),_.map(E=>G.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),M.map(({key:E,link:y})=>G.createElement("link",{key:E,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function JS(...s){return e=>{s.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var QS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{QS&&(window.__reactRouterVersion="7.13.0")}catch{}function eM({basename:s,children:e,unstable_useTransitions:t,window:i}){let a=G.useRef();a.current==null&&(a.current=Dy({window:i,v5Compat:!0}));let o=a.current,[c,d]=G.useState({action:o.action,location:o.location}),h=G.useCallback(f=>{t===!1?d(f):G.startTransition(()=>d(f))},[t]);return G.useLayoutEffect(()=>o.listen(h),[o,h]),G.createElement(CS,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:o,unstable_useTransitions:t})}var rx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sx=G.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:a,reloadDocument:o,replace:c,state:d,target:h,to:f,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:v,..._},M){let{basename:E,unstable_useTransitions:y}=G.useContext(Ii),S=typeof f=="string"&&rx.test(f),A=$v(f,E);f=A.to;let P=pS(f,{relative:a}),[I,k,F]=YS(i,_),V=rM(f,{replace:c,state:d,target:h,preventScrollReset:m,relative:a,viewTransition:g,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y});function w(z){e&&e(z),z.defaultPrevented||V(z)}let L=G.createElement("a",{..._,...F,href:A.absoluteURL||P,onClick:A.isExternal||o?e:w,ref:JS(M,k),target:h,"data-discover":!S&&t==="render"?"true":void 0});return I&&!S?G.createElement(G.Fragment,null,L,G.createElement(qS,{page:P})):L});sx.displayName="Link";var tM=G.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:a=!1,style:o,to:c,viewTransition:d,children:h,...f},m){let g=tl(c,{relative:f.relative}),v=Bs(),_=G.useContext(cu),{navigator:M,basename:E}=G.useContext(Ii),y=_!=null&&cM(g)&&d===!0,S=M.encodeLocation?M.encodeLocation(g).pathname:g.pathname,A=v.pathname,P=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;t||(A=A.toLowerCase(),P=P?P.toLowerCase():null,S=S.toLowerCase()),P&&E&&(P=Nr(P,E)||P);const I=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let k=A===S||!a&&A.startsWith(S)&&A.charAt(I)==="/",F=P!=null&&(P===S||!a&&P.startsWith(S)&&P.charAt(S.length)==="/"),V={isActive:k,isPending:F,isTransitioning:y},w=k?e:void 0,L;typeof i=="function"?L=i(V):L=[i,k?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let z=typeof o=="function"?o(V):o;return G.createElement(sx,{...f,"aria-current":w,className:L,ref:m,style:z,to:c,viewTransition:d},typeof h=="function"?h(V):h)});tM.displayName="NavLink";var nM=G.forwardRef(({discover:s="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:a,state:o,method:c=Bc,action:d,onSubmit:h,relative:f,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:v,..._},M)=>{let{unstable_useTransitions:E}=G.useContext(Ii),y=oM(),S=lM(d,{relative:f}),A=c.toLowerCase()==="get"?"get":"post",P=typeof d=="string"&&rx.test(d),I=k=>{if(h&&h(k),k.defaultPrevented)return;k.preventDefault();let F=k.nativeEvent.submitter,V=(F==null?void 0:F.getAttribute("formmethod"))||c,w=()=>y(F||k.currentTarget,{fetcherKey:e,method:V,navigate:t,replace:a,state:o,relative:f,preventScrollReset:m,viewTransition:g,unstable_defaultShouldRevalidate:v});E&&t!==!1?G.startTransition(()=>w()):w()};return G.createElement("form",{ref:M,method:A,action:S,onSubmit:i?h:I,..._,"data-discover":!P&&s==="render"?"true":void 0})});nM.displayName="Form";function iM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ax(s){let e=G.useContext(Ba);return yn(e,iM(s)),e}function rM(s,{target:e,replace:t,state:i,preventScrollReset:a,relative:o,viewTransition:c,unstable_defaultShouldRevalidate:d,unstable_useTransitions:h}={}){let f=el(),m=Bs(),g=tl(s,{relative:o});return G.useCallback(v=>{if(US(v,e)){v.preventDefault();let _=t!==void 0?t:$o(m)===$o(g),M=()=>f(s,{replace:_,state:i,preventScrollReset:a,relative:o,viewTransition:c,unstable_defaultShouldRevalidate:d});h?G.startTransition(()=>M()):M()}},[m,f,g,t,i,e,s,a,o,c,d,h])}var sM=0,aM=()=>`__${String(++sM)}__`;function oM(){let{router:s}=ax("useSubmit"),{basename:e}=G.useContext(Ii),t=wS(),i=s.fetch,a=s.navigate;return G.useCallback(async(o,c={})=>{let{action:d,method:h,encType:f,formData:m,body:g}=kS(o,e);if(c.navigate===!1){let v=c.fetcherKey||aM();await i(v,t,c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:g,formMethod:c.method||h,formEncType:c.encType||f,flushSync:c.flushSync})}else await a(c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:g,formMethod:c.method||h,formEncType:c.encType||f,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[i,a,e,t])}function lM(s,{relative:e}={}){let{basename:t}=G.useContext(Ii),i=G.useContext(Dr);yn(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),o={...tl(s||".",{relative:e})},c=Bs();if(s==null){o.search=c.search;let d=new URLSearchParams(o.search),h=d.getAll("index");if(h.some(m=>m==="")){d.delete("index"),h.filter(g=>g).forEach(g=>d.append("index",g));let m=d.toString();o.search=m?`?${m}`:""}}return(!s||s===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Rr([t,o.pathname])),$o(o)}function cM(s,{relative:e}={}){let t=G.useContext(qv);yn(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=ax("useViewTransitionState"),a=tl(s,{relative:e});if(!t.isTransitioning)return!1;let o=Nr(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Nr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Yc(a.pathname,c)!=null||Yc(a.pathname,o)!=null}const uM="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function dM(s){const[e,t]=G.useState(!1),i=()=>{t(!0)},{src:a,alt:o,style:c,className:d,...h}=s;return e?C.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${d??""}`,style:c,children:C.jsx("div",{className:"flex items-center justify-center w-full h-full",children:C.jsx("img",{src:uM,alt:"Error loading image",...h,"data-original-url":a})})}):C.jsx("img",{src:a,alt:o,className:d,style:c,...h,onError:i})}const fM="/assets/iconaws-CrGCPrQX.png",Wo={musicEnabled:!0,musicVolume:.35,vibrationEnabled:!0,aiHintsEnabled:!0,bossTauntsEnabled:!0,showPlanesDefault:!0,reduceMotion:!1},Jh="arwordle.settings.v1",qf="arwordle:settings-change";function qc(){try{const s=localStorage.getItem(Jh);if(!s)return{...Wo};const e=JSON.parse(s);return{...Wo,...e}}catch{return{...Wo}}}function a0(s){try{localStorage.setItem(Jh,JSON.stringify(s)),window.dispatchEvent(new CustomEvent(qf,{detail:s}))}catch{}}function ox(){const[s,e]=G.useState(()=>qc());G.useEffect(()=>{const a=c=>{const d=c.detail;d&&e(d)};window.addEventListener(qf,a);const o=c=>{c.key===Jh&&e(qc())};return window.addEventListener("storage",o),()=>{window.removeEventListener(qf,a),window.removeEventListener("storage",o)}},[]);const t=G.useCallback((a,o)=>{e(c=>{const d={...c,[a]:o};return a0(d),d})},[]),i=G.useCallback(()=>{a0({...Wo}),e({...Wo})},[]);return{settings:s,setSetting:t,resetSettings:i}}function hM(){return qc()}function Qd(s){try{if(!qc().vibrationEnabled)return;navigator.vibrate&&navigator.vibrate(s)}catch{}}function vn(s){const e=Math.sin(s+1)*1e4;return e-Math.floor(e)}const pM=["W","O","R","D","L","E","G","R","U"],mM=[{num:"1",title:"SCAN A SURFACE",color:"#10b981",icon:"◉",body:"Point your camera at a flat floor or table. The Warden auto-locks an origin after a few seconds even if your device cannot detect planes."},{num:"2",title:"TAP RED ROCKS ONLY",color:"#ef4444",icon:"◬",body:"Asteroids charge before they strike — they glow RED. Tap red rocks to smash them. Drifting (still) rocks are invulnerable; tapping them just kicks up dust."},{num:"3",title:"COLLECT LETTERS",color:"#facc15",icon:"✦",body:"Each smashed rock drops a letter onto your keyboard inventory. Numbers below each key show how many copies you carry."},{num:"4",title:"BEAT THE 60s TIMER",color:"#60a5fa",icon:"◷",body:"Each wave runs for 60 seconds. When the clock hits zero a Wordle puzzle slides up — solve it to advance. Asteroids freeze instantly when the timer ends."},{num:"5",title:"SOLVE THE SEAL",color:"#8b5cf6",icon:"▦",body:"Type a 5-letter word using your collected letters. You get 6 attempts.",wordleDemo:{word:"BLAZE",colors:["green","gray","yellow","gray","gray"]}},{num:"6",title:"DEFEAT THE OVERLORD",color:"#ec4899",icon:"★",body:"Every 10th wave is a boss fight. The Rift Overlord attacks every 8 seconds — break all his seals before HP runs out. The final seal is RIFTS.",bullets:[{label:"WAVE TIMER",value:"60s",color:"#10b981"},{label:"BOSS AT",value:"WAVE 10",color:"#facc15"},{label:"FINAL",value:"RIFTS",color:"#ec4899"}]}];function gM(){const s=el(),[e,t]=G.useState(!1),[i,a]=G.useState(!1);ox();const o=G.useMemo(()=>Array.from({length:30},(m,g)=>({id:g,x:vn(g*7.31)*100,y:vn(g*3.71)*100,size:vn(g*5.13)>.8?3:2,delay:`${vn(g*2.91)*4}s`,duration:`${1.5+vn(g*1.33)*2.5}s`})),[]),c=G.useMemo(()=>pM.map((m,g)=>({id:g,char:m,x:vn(g*11.71)*82+5,y:vn(g*8.31)*75+5,color:["#10b981","#facc15","#a78bfa"][g%3],border:["#10b981","#facc15","#8b5cf6"][g%3],delay:`${vn(g*6.71)*4}s`,duration:`${5+vn(g*9.11)*4}s`,drift:`${(vn(g*4.11)-.5)*40}px`})),[]),d=G.useMemo(()=>Array.from({length:7},(m,g)=>({id:g,x:vn(g*13.11)*88+3,size:Math.floor(4+vn(g*5.91)*6),delay:`${vn(g*7.71)*7}s`,duration:`${3+vn(g*2.31)*3}s`,xDrift:`${(vn(g*3.71)-.5)*50}px`})),[]),h=G.useMemo(()=>Array.from({length:14},(m,g)=>({id:g,x:vn(g*17.31)*85+5,color:vn(g*6.31)>.5?"#f97316":"#facc15",size:Math.floor(2+vn(g*3.91)*3),delay:`${vn(g*4.91)*6}s`,duration:`${2+vn(g*8.11)*2.5}s`})),[]),f=G.useMemo(()=>Array.from({length:8},(m,g)=>({id:g,x:vn(g*9.31)*80+10,y:vn(g*6.11)*70+15,delay:`${vn(g*3.51)*6}s`,duration:`${.4+vn(g*7.11)*.5}s`})),[]);return C.jsxs("div",{className:"min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col items-center justify-between px-6 py-12 font-['Press_Start_2P',_monospace] relative overflow-hidden",children:[C.jsx("style",{children:`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 1; }
        }
        @keyframes letterFloat {
          0%   { transform: translateY(0px) translateX(0px) rotate(-2deg); opacity: 0.7; }
          33%  { transform: translateY(-16px) translateX(var(--drift)) rotate(2deg); opacity: 1; }
          66%  { transform: translateY(-6px) translateX(calc(var(--drift) * -0.4)) rotate(-1deg); opacity: 0.9; }
          100% { transform: translateY(0px) translateX(0px) rotate(-2deg); opacity: 0.7; }
        }
        @keyframes meteorFall {
          0%   { transform: translateY(-20px) translateX(0px) rotate(0deg); opacity: 1; }
          85%  { opacity: 0.6; }
          100% { transform: translateY(110vh) translateX(var(--x-drift)) rotate(270deg); opacity: 0; }
        }
        @keyframes emberRise {
          0%   { transform: translateY(0px) scale(1); opacity: 0.9; }
          60%  { opacity: 0.7; }
          100% { transform: translateY(-90px) scale(0.3); opacity: 0; }
        }
        @keyframes electricSpark {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          45%, 55% { opacity: 1; transform: scale(1) rotate(45deg); }
        }
        @keyframes backdropFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { transform: translateY(110%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes stepFadeIn {
          from { transform: translateX(-12px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes headerSlideDown {
          from { transform: translateY(-10px); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
        @keyframes iconGlow {
          0%, 100% {
            box-shadow: 0 0 8px #8b5cf6, 0 0 22px #8b5cf6aa, 0 0 48px #8b5cf644, inset 0 0 12px #8b5cf611;
          }
          33% {
            box-shadow: 0 0 10px #ec4899, 0 0 28px #ec4899aa, 0 0 55px #ec489944, inset 0 0 14px #ec489911;
          }
          66% {
            box-shadow: 0 0 10px #60a5fa, 0 0 26px #60a5faaa, 0 0 52px #60a5fa44, inset 0 0 12px #60a5fa11;
          }
        }
      `}),o.map(m=>C.jsx("div",{className:"absolute bg-white pointer-events-none",style:{left:`${m.x}%`,top:`${m.y}%`,width:`${m.size}px`,height:`${m.size}px`,animation:`twinkle ${m.duration} ${m.delay} ease-in-out infinite`,zIndex:1}},`star-${m.id}`)),c.map(m=>C.jsx("div",{className:"absolute flex items-center justify-center pointer-events-none select-none",style:{left:`${m.x}%`,top:`${m.y}%`,width:"22px",height:"22px",border:`2px solid ${m.border}`,backgroundColor:"#1a0a2e",color:m.color,fontSize:"8px",fontFamily:"'Press Start 2P', monospace",textShadow:`0 0 8px ${m.color}`,boxShadow:`0 0 6px ${m.border}55, inset 0 0 4px ${m.border}22`,"--drift":m.drift,animation:`letterFloat ${m.duration} ${m.delay} ease-in-out infinite`,zIndex:2},children:m.char},`letter-${m.id}`)),d.map(m=>C.jsx("div",{className:"absolute pointer-events-none",style:{left:`${m.x}%`,top:"-12px",width:`${m.size}px`,height:`${m.size}px`,backgroundColor:"#78716c",boxShadow:"1px 1px 0 #a8a29e, 0 0 4px #f97316","--x-drift":m.xDrift,animation:`meteorFall ${m.duration} ${m.delay} linear infinite`,zIndex:2}},`meteor-${m.id}`)),h.map(m=>C.jsx("div",{className:"absolute pointer-events-none",style:{left:`${m.x}%`,bottom:"8px",width:`${m.size}px`,height:`${m.size}px`,backgroundColor:m.color,boxShadow:`0 0 4px ${m.color}, 0 0 8px ${m.color}88`,animation:`emberRise ${m.duration} ${m.delay} ease-out infinite`,zIndex:2}},`ember-${m.id}`)),f.map(m=>C.jsx("div",{className:"absolute pointer-events-none",style:{left:`${m.x}%`,top:`${m.y}%`,width:"4px",height:"4px",backgroundColor:"#60a5fa",boxShadow:"0 0 6px #3b82f6, 0 0 14px #93c5fd, 2px -2px 0 #bfdbfe, -2px 2px 0 #bfdbfe",animation:`electricSpark ${m.duration} ${m.delay} ease-in-out infinite`,zIndex:2}},`spark-${m.id}`)),C.jsx("div",{className:"absolute inset-0 opacity-10 pointer-events-none",style:{backgroundImage:`
          linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent)
        `,backgroundSize:"20px 20px"}}),C.jsxs("div",{className:"flex flex-col items-center mt-8 relative z-10",children:[C.jsx("div",{className:"w-32 h-32 mb-6 relative border-4 border-[#8b5cf6] bg-[#1a0a2e] p-2",style:{imageRendering:"pixelated",animation:"iconGlow 4s ease-in-out infinite"},children:C.jsx(dM,{src:fM,alt:"AR Wordle Smasher Icon",className:"w-full h-full object-contain",style:{imageRendering:"pixelated"}})}),C.jsxs("h1",{className:"text-xl text-center mb-4 leading-relaxed tracking-wide",children:[C.jsx("span",{className:"text-[#10b981]",children:"AR"})," ",C.jsx("span",{className:"text-[#8b5cf6]",children:"WORDLE"}),C.jsx("br",{}),C.jsx("span",{className:"text-[#ec4899]",children:"SMASHER"})]}),C.jsx("p",{className:"text-[8px] text-[#a78bfa] text-center mb-2 tracking-wider uppercase leading-relaxed",children:"The Warden's Codex"})]}),C.jsx("div",{className:"flex flex-col items-center space-y-6 flex-grow justify-center relative z-10 w-full",children:C.jsxs("div",{className:"bg-[#1a0a2e] border-4 border-[#8b5cf6] p-4 w-full relative",children:[C.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsxs("p",{className:"text-[9px] text-white/90 text-center leading-[16px]",children:["Smash meteors in AR, collect letters, and solve puzzles to defeat the"," ",C.jsx("span",{className:"text-[#ec4899]",children:"Rift Overlord"})]})]})}),C.jsxs("div",{className:"w-full space-y-4 mb-8 relative z-30",children:[C.jsxs("button",{onClick:()=>s("/mission"),className:"w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-4 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1",children:[C.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),"> START MISSION <"]}),C.jsxs("button",{onClick:()=>s("/codex"),className:"w-full bg-[#1a0a2e] border-4 border-[#10b981] text-[#10b981] py-3 px-6 text-[9px] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1",children:[C.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),"> CODEX DICTIONARY <"]}),C.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[C.jsxs("button",{onClick:()=>a(!0),className:"bg-[#1a0a2e] border-4 border-[#facc15] text-[#facc15] py-3 px-2 text-[8px] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1 flex items-center justify-center gap-1.5",children:[C.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("span",{style:{filter:"drop-shadow(0 0 4px #facc1599)"},children:"⚙"}),C.jsx("span",{children:"SETTINGS"})]}),C.jsxs("button",{onClick:()=>t(!0),className:"bg-[#1a0a2e] border-4 border-white/30 text-white/90 py-3 px-2 text-[8px] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1",children:[C.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),"How to Play"]})]})]}),e&&C.jsx("div",{className:"fixed inset-0 z-50 flex items-end justify-center px-4 pb-0",style:{backgroundColor:"rgba(10,1,24,0.85)",animation:"backdropFadeIn 0.25s ease-out"},onClick:()=>t(!1),children:C.jsxs("div",{className:"w-full max-w-md bg-[#0a0118] border-4 border-[#8b5cf6] relative overflow-y-auto",style:{maxHeight:"88vh",animation:"modalSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},onClick:m=>m.stopPropagation(),children:[C.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsxs("div",{className:"bg-[#1a0a2e] border-b-4 border-[#8b5cf6] px-5 py-4 flex items-center justify-between",style:{animation:"headerSlideDown 0.3s 0.15s ease-out both"},children:[C.jsxs("div",{children:[C.jsx("p",{className:"text-[10px] text-[#8b5cf6] tracking-widest",children:"HOW TO PLAY"}),C.jsx("p",{className:"text-[6px] text-white/40 tracking-widest mt-1",children:"FIELD MANUAL · v1"})]}),C.jsx("button",{onClick:()=>t(!1),className:"w-7 h-7 flex items-center justify-center border-2 border-[#a78bfa] text-[#a78bfa] hover:text-white hover:border-white text-[9px] transition-colors","aria-label":"Close",children:"✕"})]}),C.jsx("div",{className:"px-4 py-4 space-y-4",children:mM.map((m,g)=>C.jsxs("div",{className:"relative bg-[#0d0220] border-2 px-3 py-3",style:{borderColor:`${m.color}66`,animation:`stepFadeIn 0.3s ${.2+g*.07}s ease-out both`,boxShadow:`inset 0 0 12px ${m.color}1a`},children:[C.jsx("div",{className:"absolute top-0 left-0  w-1.5 h-1.5",style:{backgroundColor:m.color}}),C.jsx("div",{className:"absolute top-0 right-0 w-1.5 h-1.5",style:{backgroundColor:m.color}}),C.jsx("div",{className:"absolute bottom-0 left-0  w-1.5 h-1.5",style:{backgroundColor:m.color}}),C.jsx("div",{className:"absolute bottom-0 right-0 w-1.5 h-1.5",style:{backgroundColor:m.color}}),C.jsxs("div",{className:"flex gap-3",children:[C.jsxs("div",{className:"flex flex-col items-center gap-1 flex-shrink-0",children:[C.jsx("div",{className:"w-9 h-9 flex items-center justify-center border-2 bg-[#1a0a2e] text-[14px]",style:{borderColor:m.color,color:m.color,textShadow:`0 0 6px ${m.color}`,boxShadow:`0 0 8px ${m.color}55, inset 0 0 4px ${m.color}33`},children:m.icon}),C.jsxs("span",{className:"text-[6px] tracking-widest",style:{color:`${m.color}cc`},children:["STEP ",m.num]})]}),C.jsxs("div",{className:"flex-1 min-w-0 pt-0.5",children:[C.jsx("p",{className:"text-[8px] tracking-widest mb-1.5",style:{color:m.color},children:m.title}),m.body&&C.jsx("p",{className:"text-[7px] text-white/75 leading-[14px]",children:m.body}),m.wordleDemo&&(()=>{const v=M=>M==="green"?"#10b981":M==="yellow"?"#facc15":"#374151",_=M=>M==="gray"?"#9ca3af":"#0a0118";return C.jsxs("div",{className:"mt-3 space-y-2",children:[C.jsx("div",{className:"flex gap-1 justify-center",children:m.wordleDemo.word.split("").map((M,E)=>{const y=m.wordleDemo.colors[E];return C.jsx("div",{className:"w-6 h-6 flex items-center justify-center border-2",style:{backgroundColor:v(y),borderColor:v(y),color:_(y),fontSize:"10px",fontWeight:"bold",boxShadow:`0 0 4px ${v(y)}88`},children:M},E)})}),C.jsx("div",{className:"space-y-1 pt-1 border-t border-[#8b5cf6]/20",children:[["#10b981","GREEN","right letter, right slot"],["#facc15","YELLOW","right letter, wrong slot"],["#374151","GRAY","letter not in word"]].map(([M,E,y])=>C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsx("div",{className:"w-2.5 h-2.5 flex-shrink-0",style:{backgroundColor:M,boxShadow:`0 0 3px ${M}`}}),C.jsx("span",{className:"text-[6px] tracking-widest",style:{color:M},children:E}),C.jsx("span",{className:"text-[6px] text-white/50 leading-[10px]",children:y})]},E))})]})})(),m.bullets&&C.jsx("div",{className:"mt-3 grid grid-cols-3 gap-1.5",children:m.bullets.map(v=>C.jsxs("div",{className:"text-center border border-white/10 bg-[#0a0118]/50 py-1.5",children:[C.jsx("p",{className:"text-[5px] text-white/40 tracking-widest",children:v.label}),C.jsx("p",{className:"text-[7px] mt-0.5 tracking-widest",style:{color:v.color??m.color},children:v.value})]},v.label))})]})]})]},m.num))}),C.jsx("div",{className:"px-5 pb-5 pt-1",children:C.jsxs("button",{onClick:()=>t(!1),className:"w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-3 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1 tracking-widest",children:[C.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),"> GOT IT <"]})}),C.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"})]})})]})}function Eo(s){const e=Math.sin(s+1)*1e4;return e-Math.floor(e)}const Qi=[{label:"CAMERA MODULE",critical:!0,run:async()=>{(await navigator.mediaDevices.getUserMedia({video:!0})).getTracks().forEach(e=>e.stop())}},{label:"AR PLANE DETECT",critical:!0,run:async()=>{if(!("xr"in navigator))throw new Error("WebXR not supported");if(!await navigator.xr.isSessionSupported("immersive-ar"))throw new Error("AR not supported")}},{label:"CODEX LINK",critical:!1,run:async()=>{if(!navigator.onLine)throw new Error("No network")}},{label:"ENEMY SCANNER",critical:!1,run:async()=>{if(!("DeviceOrientationEvent"in window))throw new Error("No motion sensor");await new Promise(s=>setTimeout(s,500))}}];function vM(){const s=el(),[e,t]=G.useState(Qi.map(()=>"idle")),[i,a]=G.useState(!1),o=e.filter(_=>_==="ok").length,c=e.filter(_=>_==="checking").length,d=Qi.length,h=Qi.some((_,M)=>_.critical&&e[M]==="fail"),f=i&&!h,m=i&&o===d;G.useEffect(()=>{let _=!1;return(async()=>{for(let E=0;E<Qi.length;E++){if(_)return;t(y=>{const S=[...y];return S[E]="checking",S});try{await Qi[E].run(),_||t(y=>{const S=[...y];return S[E]="ok",S})}catch{_||t(y=>{const S=[...y];return S[E]="fail",S})}}_||a(!0)})(),()=>{_=!0}},[]);const g=()=>{t(Qi.map(()=>"idle")),a(!1),setTimeout(async()=>{for(let _=0;_<Qi.length;_++){t(M=>{const E=[...M];return E[_]="checking",E});try{await Qi[_].run(),t(M=>{const E=[...M];return E[_]="ok",E})}catch{t(M=>{const E=[...M];return E[_]="fail",E})}}a(!0)},100)},v=G.useMemo(()=>Array.from({length:22},(_,M)=>({id:M,x:Eo(M*6.17)*100,y:Eo(M*4.23)*100,size:Eo(M*2.71)>.8?3:2,delay:`${Eo(M*3.91)*4}s`,duration:`${1.5+Eo(M*1.17)*2}s`})),[]);return C.jsxs("div",{className:"min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col px-6 py-8 font-['Press_Start_2P',_monospace] relative overflow-hidden",children:[C.jsx("style",{children:`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 1; }
        }
        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes radarPing {
          0%   { transform: scale(0.4); opacity: 0.9; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes blinkAnim {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes checkPop {
          0%   { transform: scale(0); }
          65%  { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        @keyframes engagePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.7); }
          50%       { box-shadow: 0 0 0 12px rgba(139,92,246,0); }
        }
        @keyframes blipBlink {
          0%, 100% { opacity: 1;   transform: scale(1); }
          50%       { opacity: 0.2; transform: scale(0.6); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-6px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes failShake {
          0%, 100% { transform: translateX(0); }
          25%      { transform: translateX(-3px); }
          75%      { transform: translateX(3px); }
        }
        @keyframes statusPillGlow {
          0%, 100% { box-shadow: 0 0 4px currentColor; }
          50%      { box-shadow: 0 0 12px currentColor, 0 0 2px currentColor; }
        }
        @keyframes engageReadyPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(236,72,153,0.65), 0 0 24px 0 rgba(139,92,246,0.45); }
          50%      { box-shadow: 0 0 0 14px rgba(236,72,153,0),    0 0 36px 4px rgba(139,92,246,0.65); }
        }
      `}),C.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
          linear-gradient(0deg, transparent 24%, rgba(139,92,246,.3) 25%, rgba(139,92,246,.3) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.3) 75%, rgba(139,92,246,.3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139,92,246,.3) 25%, rgba(139,92,246,.3) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.3) 75%, rgba(139,92,246,.3) 76%, transparent 77%, transparent)
        `,backgroundSize:"20px 20px"}}),v.map(_=>C.jsx("div",{className:"absolute bg-white pointer-events-none",style:{left:`${_.x}%`,top:`${_.y}%`,width:`${_.size}px`,height:`${_.size}px`,animation:`twinkle ${_.duration} ${_.delay} ease-in-out infinite`,zIndex:1}},`star-${_.id}`)),C.jsxs("div",{className:"flex items-center justify-between mb-3 relative z-10",children:[C.jsx("button",{onClick:()=>s("/"),className:"text-[8px] text-[#a78bfa] hover:text-white transition-colors px-2 py-1 -ml-2",children:"← BACK"}),(()=>{const _=i?h?"#ef4444":m?"#10b981":"#f97316":"#facc15",M=i?h?"CRITICAL FAIL":m?"ALL SYSTEMS GO":`READY · ${o}/${d}`:`CHECKING ${o}/${d}`;return C.jsxs("div",{className:"text-[7px] border-2 px-2 py-1 relative tracking-widest",style:{color:_,borderColor:_,animation:i?"none":"statusPillGlow 1.2s ease-in-out infinite"},children:[C.jsx("div",{className:"absolute top-0 left-0  w-1 h-1 bg-[#0a0118]"}),C.jsx("div",{className:"absolute top-0 right-0 w-1 h-1 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 left-0  w-1 h-1 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-1 h-1 bg-[#0a0118]"}),M]})})()]}),C.jsxs("div",{className:"text-center mb-4 relative z-10",children:[C.jsx("h2",{className:"text-[12px] text-[#8b5cf6] tracking-widest mb-1",style:{textShadow:"0 0 8px #8b5cf6aa"},children:"MISSION BRIEF"}),C.jsx("p",{className:"text-[6px] text-white/40 tracking-widest",children:"PREPARE FOR DEPLOYMENT"})]}),C.jsx("div",{className:"flex flex-col items-center mb-4 relative z-10",children:C.jsxs("div",{className:"relative w-36 h-36",style:{filter:i&&!h?"drop-shadow(0 0 14px #10b98155)":"drop-shadow(0 0 8px #facc1544)"},children:[C.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/20"}),C.jsx("div",{className:"absolute inset-[18%] rounded-full border border-[#10b981]/30"}),C.jsx("div",{className:"absolute inset-[36%] rounded-full border border-[#10b981]/40"}),C.jsx("div",{className:"absolute inset-[54%] rounded-full border-2 border-[#10b981]/70"}),C.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/50",style:{animation:"radarPing 2s 0s ease-out infinite"}}),C.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/30",style:{animation:"radarPing 2s 0.9s ease-out infinite"}}),C.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-full",style:{animation:"radarSweep 3s linear infinite"},children:[C.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"conic-gradient(rgba(16,185,129,0) 0deg, rgba(16,185,129,0.18) 60deg, rgba(16,185,129,0) 90deg, transparent 360deg)"}}),C.jsx("div",{className:"absolute top-1/2 origin-left",style:{left:"50%",width:"50%",height:"1px",background:"linear-gradient(to right, rgba(16,185,129,0.95), rgba(16,185,129,0.05))",transform:"translateY(-50%)"}})]}),C.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-px bg-[#10b981]/15"}),C.jsx("div",{className:"absolute left-1/2 top-0 bottom-0 w-px bg-[#10b981]/15"}),C.jsx("div",{className:"absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-[#10b981]",style:{boxShadow:"0 0 8px #10b981"}}),f&&C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#ec4899]",style:{top:"24%",left:"61%",boxShadow:"0 0 6px #ec4899",animation:"blipBlink 1.1s ease-in-out infinite"}}),C.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#facc15]",style:{top:"66%",left:"27%",boxShadow:"0 0 5px #facc15",animation:"blipBlink 0.9s 0.35s ease-in-out infinite"}}),C.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#f97316]",style:{top:"47%",left:"75%",boxShadow:"0 0 5px #f97316",animation:"blipBlink 1.3s 0.7s ease-in-out infinite"}}),C.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#a78bfa]",style:{top:"78%",left:"60%",boxShadow:"0 0 5px #a78bfa",animation:"blipBlink 1.0s 1.1s ease-in-out infinite"}})]})]})}),C.jsxs("div",{className:"bg-[#1a0a2e] border-4 border-[#8b5cf6] p-3 mb-3 relative z-10",children:[C.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),C.jsxs("div",{className:"flex items-center justify-between mb-2.5",children:[C.jsx("p",{className:"text-[7px] text-[#a78bfa] tracking-widest",children:"SYSTEM CHECK"}),C.jsx("div",{className:"flex gap-1",children:Qi.map((_,M)=>{const E=e[M],y=E==="ok"?"#10b981":E==="fail"?"#ef4444":E==="checking"?"#facc15":"#1f2937";return C.jsx("div",{className:"w-2 h-2 transition-colors duration-200",style:{backgroundColor:y,boxShadow:E!=="idle"?`0 0 4px ${y}`:"none"}},M)})})]}),C.jsx("div",{className:"grid grid-cols-2 gap-x-3 gap-y-2",children:Qi.map((_,M)=>{const E=e[M],y=E==="ok"?"#10b981":E==="fail"?"#ef4444":E==="checking"?"#facc15":"#1f2937",S=E==="ok"?"#10b981":E==="fail"?"#ef4444":E==="checking"?"#facc15":"#374151",A=E==="fail"?"failShake 0.4s ease-out, slideIn 0.25s ease-out":E==="ok"?"slideIn 0.25s ease-out":void 0;return C.jsxs("div",{className:"flex items-center gap-2 min-w-0",style:A?{animation:A}:void 0,children:[C.jsxs("div",{className:"w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200",style:{borderColor:y,backgroundColor:E==="ok"?"#10b981":E==="fail"?"#ef4444":"transparent"},children:[E==="ok"&&C.jsx("span",{className:"text-[#0a0118] leading-none",style:{fontSize:"8px",animation:"checkPop 0.25s ease-out"},children:"✓"}),E==="fail"&&C.jsx("span",{className:"text-[#0a0118] leading-none",style:{fontSize:"8px",animation:"checkPop 0.25s ease-out"},children:"✕"}),E==="checking"&&C.jsx("span",{className:"text-[#facc15] leading-none",style:{fontSize:"6px",animation:"blinkAnim 0.5s ease-in-out infinite"},children:"■"})]}),C.jsx("span",{className:"text-[7px] tracking-wide truncate transition-colors duration-200",style:{color:S},title:_.label,children:_.label}),!_.critical&&E==="fail"&&C.jsx("span",{className:"text-[5px] text-[#facc1599] ml-auto",title:"Optional check",children:"OPT"})]},M)})})]}),C.jsxs("div",{className:"bg-[#1a0a2e] border-4 border-[#ec4899] p-3 mb-4 relative z-10",children:[C.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("p",{className:"text-[7px] text-[#a78bfa] mb-2 tracking-widest",children:"▸ OBJECTIVE"}),C.jsxs("p",{className:"text-[7px] text-white/85 leading-[13px] mb-2.5",children:["Smash ",C.jsx("span",{className:"text-[#f97316]",children:"red asteroids"}),", collect letters, solve ",C.jsx("span",{className:"text-[#facc15]",children:"Wordle seals"})," to advance."]}),C.jsxs("div",{className:"flex items-center justify-between gap-2 text-[6px] tracking-widest pt-2 border-t-2 border-[#ec4899]/30",children:[C.jsxs("div",{className:"flex flex-col items-center",children:[C.jsx("span",{className:"text-white/40",children:"WAVE TIMER"}),C.jsx("span",{className:"text-[#10b981] mt-1",children:"60s"})]}),C.jsxs("div",{className:"flex flex-col items-center",children:[C.jsx("span",{className:"text-white/40",children:"BOSS AT"}),C.jsx("span",{className:"text-[#facc15] mt-1",children:"WAVE 10"})]}),C.jsxs("div",{className:"flex flex-col items-center",children:[C.jsx("span",{className:"text-white/40",children:"FINAL SEAL"}),C.jsx("span",{className:"text-[#ec4899] mt-1",children:"RIFTS"})]})]})]}),h?C.jsxs("div",{className:"space-y-2 relative z-10",children:[C.jsx("p",{className:"text-[6px] text-[#ef4444] tracking-widest text-center",children:"CAMERA OR AR UNAVAILABLE · GRANT PERMISSIONS THEN RETRY"}),C.jsxs("button",{onClick:g,className:"w-full py-4 px-6 text-[10px] border-4 border-[#ef4444] bg-[#1a0a2e] text-[#ef4444] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1",children:[C.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"↻ RETRY CHECKS"]})]}):C.jsxs("button",{disabled:!f,onClick:()=>f&&s("/ar"),className:"w-full py-4 px-6 text-[10px] border-4 relative transition-all duration-300 z-10",style:{backgroundColor:f?"#8b5cf6":"#1a0a2e",borderColor:f?"#ec4899":"#1f2937",color:f?"#ffffff":"#374151",cursor:f?"pointer":"not-allowed",animation:f?"engageReadyPulse 2s ease-in-out infinite":"none"},children:[C.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),i?f?C.jsx(C.Fragment,{children:"> ENGAGE MISSION <"}):"BLOCKED":C.jsxs("span",{style:{animation:"blinkAnim 1.2s ease-in-out infinite"},children:["RUNNING DIAGNOSTICS · ",c?"CHECKING":`${o}/${d}`]})]})]})}const xM="modulepreload",_M=function(s){return"/"+s},o0={},yM=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){let c=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=c(t.map(f=>{if(f=_M(f),f in o0)return;o0[f]=!0;const m=f.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":xM,m||(v.as="script"),v.crossOrigin="",v.href=f,h&&v.setAttribute("nonce",h),document.head.appendChild(v),m)return new Promise((_,M)=>{v.addEventListener("load",_),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return a.then(c=>{for(const d of c||[])d.status==="rejected"&&o(d.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="184",SM=0,l0=1,MM=2,Vc=1,EM=2,zo=3,ds=0,hi=1,ir=2,Cr=0,Na=1,c0=2,u0=3,d0=4,bM=5,Is=100,wM=101,TM=102,AM=103,RM=104,CM=200,PM=201,NM=202,LM=203,Kf=204,Zf=205,IM=206,DM=207,UM=208,FM=209,OM=210,kM=211,BM=212,zM=213,VM=214,Jf=0,Qf=1,eh=2,Ia=3,th=4,nh=5,ih=6,rh=7,lx=0,HM=1,GM=2,sr=0,cx=1,ux=2,dx=3,ep=4,fx=5,hx=6,px=7,f0="attached",WM="detached",mx=300,Os=301,Da=302,ef=303,tf=304,du=306,sh=1e3,Tr=1001,ah=1002,Gn=1003,jM=1004,oc=1005,Zn=1006,nf=1007,Us=1008,Mi=1009,gx=1010,vx=1011,Yo=1012,tp=1013,lr=1014,Ni=1015,Lr=1016,np=1017,ip=1018,qo=1020,xx=35902,_x=35899,yx=1021,Sx=1022,Li=1023,Ir=1026,Fs=1027,rp=1028,sp=1029,ks=1030,ap=1031,op=1033,Hc=33776,Gc=33777,Wc=33778,jc=33779,oh=35840,lh=35841,ch=35842,uh=35843,dh=36196,fh=37492,hh=37496,ph=37488,mh=37489,Kc=37490,gh=37491,vh=37808,xh=37809,_h=37810,yh=37811,Sh=37812,Mh=37813,Eh=37814,bh=37815,wh=37816,Th=37817,Ah=37818,Rh=37819,Ch=37820,Ph=37821,Nh=36492,Lh=36494,Ih=36495,Dh=36283,Uh=36284,Zc=36285,Fh=36286,Jc=2300,Oh=2301,rf=2302,h0=2303,p0=2400,m0=2401,g0=2402,XM=2500,yC=0,SC=1,MC=2,$M=3200,kh=0,YM=1,cs="",di="srgb",Qc="srgb-linear",eu="linear",nn="srgb",ca=7680,v0=519,qM=512,KM=513,ZM=514,lp=515,JM=516,QM=517,cp=518,eE=519,Bh=35044,x0="300 es",rr=2e3,Ko=2001;function tE(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function nE(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function iE(){const s=Zo("canvas");return s.style.display="block",s}const _0={};function tu(...s){const e="THREE."+s.shift();console.log(e,...s)}function Mx(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ct(...s){s=Mx(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function gt(...s){s=Mx(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function zh(...s){const e=s.join(" ");e in _0||(_0[e]=!0,ct(...s))}function rE(s,e,t){return new Promise(function(i,a){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const sE={[Jf]:Qf,[eh]:ih,[th]:rh,[Ia]:nh,[Qf]:Jf,[ih]:eh,[rh]:th,[nh]:Ia};class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let y0=1234567;const jo=Math.PI/180,Ua=180/Math.PI;function Xi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]).toLowerCase()}function Vt(s,e,t){return Math.max(e,Math.min(t,s))}function up(s,e){return(s%e+e)%e}function aE(s,e,t,i,a){return i+(s-e)*(a-i)/(t-e)}function oE(s,e,t){return s!==e?(t-s)/(e-s):0}function Xo(s,e,t){return(1-t)*s+t*e}function lE(s,e,t,i){return Xo(s,e,1-Math.exp(-t*i))}function cE(s,e=1){return e-Math.abs(up(s,e*2)-e)}function uE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function dE(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function fE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function hE(s,e){return s+Math.random()*(e-s)}function pE(s){return s*(.5-Math.random())}function mE(s){s!==void 0&&(y0=s);let e=y0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gE(s){return s*jo}function vE(s){return s*Ua}function xE(s){return(s&s-1)===0&&s!==0}function _E(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yE(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function SE(s,e,t,i,a){const o=Math.cos,c=Math.sin,d=o(t/2),h=c(t/2),f=o((e+i)/2),m=c((e+i)/2),g=o((e-i)/2),v=c((e-i)/2),_=o((i-e)/2),M=c((i-e)/2);switch(a){case"XYX":s.set(d*m,h*g,h*v,d*f);break;case"YZY":s.set(h*v,d*m,h*g,d*f);break;case"ZXZ":s.set(h*g,h*v,d*m,d*f);break;case"XZX":s.set(d*m,h*M,h*_,d*f);break;case"YXY":s.set(h*_,d*m,h*M,d*f);break;case"ZYZ":s.set(h*M,h*_,d*m,d*f);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ji(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const EC={DEG2RAD:jo,RAD2DEG:Ua,generateUUID:Xi,clamp:Vt,euclideanModulo:up,mapLinear:aE,inverseLerp:oE,lerp:Xo,damp:lE,pingpong:cE,smoothstep:uE,smootherstep:dE,randInt:fE,randFloat:hE,randFloatSpread:pE,seededRandom:mE,degToRad:gE,radToDeg:vE,isPowerOfTwo:xE,ceilPowerOfTwo:_E,floorPowerOfTwo:yE,setQuaternionFromProperEuler:SE,normalize:rn,denormalize:ji},Ep=class Ep{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*a+e.x,this.y=o*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ep.prototype.isVector2=!0;let Lt=Ep;class hs{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,c,d){let h=i[a+0],f=i[a+1],m=i[a+2],g=i[a+3],v=o[c+0],_=o[c+1],M=o[c+2],E=o[c+3];if(g!==E||h!==v||f!==_||m!==M){let y=h*v+f*_+m*M+g*E;y<0&&(v=-v,_=-_,M=-M,E=-E,y=-y);let S=1-d;if(y<.9995){const A=Math.acos(y),P=Math.sin(A);S=Math.sin(S*A)/P,d=Math.sin(d*A)/P,h=h*S+v*d,f=f*S+_*d,m=m*S+M*d,g=g*S+E*d}else{h=h*S+v*d,f=f*S+_*d,m=m*S+M*d,g=g*S+E*d;const A=1/Math.sqrt(h*h+f*f+m*m+g*g);h*=A,f*=A,m*=A,g*=A}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,a,o,c){const d=i[a],h=i[a+1],f=i[a+2],m=i[a+3],g=o[c],v=o[c+1],_=o[c+2],M=o[c+3];return e[t]=d*M+m*g+h*_-f*v,e[t+1]=h*M+m*v+f*g-d*_,e[t+2]=f*M+m*_+d*v-h*g,e[t+3]=m*M-d*g-h*v-f*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,c=e._order,d=Math.cos,h=Math.sin,f=d(i/2),m=d(a/2),g=d(o/2),v=h(i/2),_=h(a/2),M=h(o/2);switch(c){case"XYZ":this._x=v*m*g+f*_*M,this._y=f*_*g-v*m*M,this._z=f*m*M+v*_*g,this._w=f*m*g-v*_*M;break;case"YXZ":this._x=v*m*g+f*_*M,this._y=f*_*g-v*m*M,this._z=f*m*M-v*_*g,this._w=f*m*g+v*_*M;break;case"ZXY":this._x=v*m*g-f*_*M,this._y=f*_*g+v*m*M,this._z=f*m*M+v*_*g,this._w=f*m*g-v*_*M;break;case"ZYX":this._x=v*m*g-f*_*M,this._y=f*_*g+v*m*M,this._z=f*m*M-v*_*g,this._w=f*m*g+v*_*M;break;case"YZX":this._x=v*m*g+f*_*M,this._y=f*_*g+v*m*M,this._z=f*m*M-v*_*g,this._w=f*m*g-v*_*M;break;case"XZY":this._x=v*m*g-f*_*M,this._y=f*_*g-v*m*M,this._z=f*m*M+v*_*g,this._w=f*m*g+v*_*M;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],c=t[1],d=t[5],h=t[9],f=t[2],m=t[6],g=t[10],v=i+d+g;if(v>0){const _=.5/Math.sqrt(v+1);this._w=.25/_,this._x=(m-h)*_,this._y=(o-f)*_,this._z=(c-a)*_}else if(i>d&&i>g){const _=2*Math.sqrt(1+i-d-g);this._w=(m-h)/_,this._x=.25*_,this._y=(a+c)/_,this._z=(o+f)/_}else if(d>g){const _=2*Math.sqrt(1+d-i-g);this._w=(o-f)/_,this._x=(a+c)/_,this._y=.25*_,this._z=(h+m)/_}else{const _=2*Math.sqrt(1+g-i-d);this._w=(c-a)/_,this._x=(o+f)/_,this._y=(h+m)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,c=e._w,d=t._x,h=t._y,f=t._z,m=t._w;return this._x=i*m+c*d+a*f-o*h,this._y=a*m+c*h+o*d-i*f,this._z=o*m+c*f+i*h-a*d,this._w=c*m-i*d-a*h-o*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,o=e._z,c=e._w,d=this.dot(e);d<0&&(i=-i,a=-a,o=-o,c=-c,d=-d);let h=1-t;if(d<.9995){const f=Math.acos(d),m=Math.sin(f);h=Math.sin(h*f)/m,t=Math.sin(t*f)/m,this._x=this._x*h+i*t,this._y=this._y*h+a*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+a*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bp=class bp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(S0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(S0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,c=e.y,d=e.z,h=e.w,f=2*(c*a-d*i),m=2*(d*t-o*a),g=2*(o*i-c*t);return this.x=t+h*f+c*g-d*m,this.y=i+h*m+d*f-o*g,this.z=a+h*g+o*m-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,c=t.x,d=t.y,h=t.z;return this.x=a*h-o*d,this.y=o*c-i*h,this.z=i*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return sf.copy(this).projectOnVector(e),this.sub(sf)}reflect(e){return this.sub(sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bp.prototype.isVector3=!0;let Z=bp;const sf=new Z,S0=new hs,wp=class wp{constructor(e,t,i,a,o,c,d,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,d,h,f)}set(e,t,i,a,o,c,d,h,f){const m=this.elements;return m[0]=e,m[1]=a,m[2]=d,m[3]=t,m[4]=o,m[5]=h,m[6]=i,m[7]=c,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],d=i[3],h=i[6],f=i[1],m=i[4],g=i[7],v=i[2],_=i[5],M=i[8],E=a[0],y=a[3],S=a[6],A=a[1],P=a[4],I=a[7],k=a[2],F=a[5],V=a[8];return o[0]=c*E+d*A+h*k,o[3]=c*y+d*P+h*F,o[6]=c*S+d*I+h*V,o[1]=f*E+m*A+g*k,o[4]=f*y+m*P+g*F,o[7]=f*S+m*I+g*V,o[2]=v*E+_*A+M*k,o[5]=v*y+_*P+M*F,o[8]=v*S+_*I+M*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8];return t*c*m-t*d*f-i*o*m+i*d*h+a*o*f-a*c*h}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8],g=m*c-d*f,v=d*h-m*o,_=f*o-c*h,M=t*g+i*v+a*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(a*f-m*i)*E,e[2]=(d*i-a*c)*E,e[3]=v*E,e[4]=(m*t-a*h)*E,e[5]=(a*o-d*t)*E,e[6]=_*E,e[7]=(i*h-f*t)*E,e[8]=(c*t-i*o)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,c,d){const h=Math.cos(o),f=Math.sin(o);return this.set(i*h,i*f,-i*(h*c+f*d)+c+e,-a*f,a*h,-a*(-f*c+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(af.makeScale(e,t)),this}rotate(e){return this.premultiply(af.makeRotation(-e)),this}translate(e,t){return this.premultiply(af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wp.prototype.isMatrix3=!0;let Nt=wp;const af=new Nt,M0=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E0=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ME(){const s={enabled:!0,workingColorSpace:Qc,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===nn&&(a.r=Pr(a.r),a.g=Pr(a.g),a.b=Pr(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===nn&&(a.r=La(a.r),a.g=La(a.g),a.b=La(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===cs?eu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return zh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return zh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Qc]:{primaries:e,whitePoint:i,transfer:eu,toXYZ:M0,fromXYZ:E0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:i,transfer:nn,toXYZ:M0,fromXYZ:E0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),s}const Wt=ME();function Pr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function La(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ua;class EE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ua===void 0&&(ua=Zo("canvas")),ua.width=e.width,ua.height=e.height;const a=ua.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=ua}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Pr(o[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pr(t[i]/255)*255):t[i]=Pr(t[i]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bE=0;class dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bE++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?o.push(of(a[c].image)):o.push(of(a[c]))}else o=of(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function of(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?EE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let wE=0;const lf=new Z;class Wn extends zs{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,i=Tr,a=Tr,o=Zn,c=Us,d=Li,h=Mi,f=Wn.DEFAULT_ANISOTROPY,m=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wE++}),this.uuid=Xi(),this.name="",this.source=new dp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lf).x}get height(){return this.source.getSize(lf).y}get depth(){return this.source.getSize(lf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sh:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sh:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=mx;Wn.DEFAULT_ANISOTROPY=1;const Tp=class Tp{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const h=e.elements,f=h[0],m=h[4],g=h[8],v=h[1],_=h[5],M=h[9],E=h[2],y=h[6],S=h[10];if(Math.abs(m-v)<.01&&Math.abs(g-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+E)<.1&&Math.abs(M+y)<.1&&Math.abs(f+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,I=(_+1)/2,k=(S+1)/2,F=(m+v)/4,V=(g+E)/4,w=(M+y)/4;return P>I&&P>k?P<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(P),a=F/i,o=V/i):I>k?I<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(I),i=F/a,o=w/a):k<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(k),i=V/o,a=w/o),this.set(i,a,o,t),this}let A=Math.sqrt((y-M)*(y-M)+(g-E)*(g-E)+(v-m)*(v-m));return Math.abs(A)<.001&&(A=1),this.x=(y-M)/A,this.y=(g-E)/A,this.z=(v-m)/A,this.w=Math.acos((f+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this.w=Vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this.w=Vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tp.prototype.isVector4=!0;let ln=Tp;class TE extends zs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},o=new Wn(a),c=i.count;for(let d=0;d<c;d++)this.textures[d]=o.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new dp(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends TE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ex extends Wn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AE extends Wn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=class lu{constructor(e,t,i,a,o,c,d,h,f,m,g,v,_,M,E,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,d,h,f,m,g,v,_,M,E,y)}set(e,t,i,a,o,c,d,h,f,m,g,v,_,M,E,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=a,S[1]=o,S[5]=c,S[9]=d,S[13]=h,S[2]=f,S[6]=m,S[10]=g,S[14]=v,S[3]=_,S[7]=M,S[11]=E,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,a=1/da.setFromMatrixColumn(e,0).length(),o=1/da.setFromMatrixColumn(e,1).length(),c=1/da.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,c=Math.cos(i),d=Math.sin(i),h=Math.cos(a),f=Math.sin(a),m=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const v=c*m,_=c*g,M=d*m,E=d*g;t[0]=h*m,t[4]=-h*g,t[8]=f,t[1]=_+M*f,t[5]=v-E*f,t[9]=-d*h,t[2]=E-v*f,t[6]=M+_*f,t[10]=c*h}else if(e.order==="YXZ"){const v=h*m,_=h*g,M=f*m,E=f*g;t[0]=v+E*d,t[4]=M*d-_,t[8]=c*f,t[1]=c*g,t[5]=c*m,t[9]=-d,t[2]=_*d-M,t[6]=E+v*d,t[10]=c*h}else if(e.order==="ZXY"){const v=h*m,_=h*g,M=f*m,E=f*g;t[0]=v-E*d,t[4]=-c*g,t[8]=M+_*d,t[1]=_+M*d,t[5]=c*m,t[9]=E-v*d,t[2]=-c*f,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const v=c*m,_=c*g,M=d*m,E=d*g;t[0]=h*m,t[4]=M*f-_,t[8]=v*f+E,t[1]=h*g,t[5]=E*f+v,t[9]=_*f-M,t[2]=-f,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const v=c*h,_=c*f,M=d*h,E=d*f;t[0]=h*m,t[4]=E-v*g,t[8]=M*g+_,t[1]=g,t[5]=c*m,t[9]=-d*m,t[2]=-f*m,t[6]=_*g+M,t[10]=v-E*g}else if(e.order==="XZY"){const v=c*h,_=c*f,M=d*h,E=d*f;t[0]=h*m,t[4]=-g,t[8]=f*m,t[1]=v*g+E,t[5]=c*m,t[9]=_*g-M,t[2]=M*g-_,t[6]=d*m,t[10]=E*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RE,e,CE)}lookAt(e,t,i){const a=this.elements;return yi.subVectors(e,t),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),ns.crossVectors(i,yi),ns.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),ns.crossVectors(i,yi)),ns.normalize(),lc.crossVectors(yi,ns),a[0]=ns.x,a[4]=lc.x,a[8]=yi.x,a[1]=ns.y,a[5]=lc.y,a[9]=yi.y,a[2]=ns.z,a[6]=lc.z,a[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],d=i[4],h=i[8],f=i[12],m=i[1],g=i[5],v=i[9],_=i[13],M=i[2],E=i[6],y=i[10],S=i[14],A=i[3],P=i[7],I=i[11],k=i[15],F=a[0],V=a[4],w=a[8],L=a[12],z=a[1],B=a[5],Y=a[9],se=a[13],de=a[2],W=a[6],J=a[10],K=a[14],te=a[3],le=a[7],D=a[11],b=a[15];return o[0]=c*F+d*z+h*de+f*te,o[4]=c*V+d*B+h*W+f*le,o[8]=c*w+d*Y+h*J+f*D,o[12]=c*L+d*se+h*K+f*b,o[1]=m*F+g*z+v*de+_*te,o[5]=m*V+g*B+v*W+_*le,o[9]=m*w+g*Y+v*J+_*D,o[13]=m*L+g*se+v*K+_*b,o[2]=M*F+E*z+y*de+S*te,o[6]=M*V+E*B+y*W+S*le,o[10]=M*w+E*Y+y*J+S*D,o[14]=M*L+E*se+y*K+S*b,o[3]=A*F+P*z+I*de+k*te,o[7]=A*V+P*B+I*W+k*le,o[11]=A*w+P*Y+I*J+k*D,o[15]=A*L+P*se+I*K+k*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],c=e[1],d=e[5],h=e[9],f=e[13],m=e[2],g=e[6],v=e[10],_=e[14],M=e[3],E=e[7],y=e[11],S=e[15],A=h*_-f*v,P=d*_-f*g,I=d*v-h*g,k=c*_-f*m,F=c*v-h*m,V=c*g-d*m;return t*(E*A-y*P+S*I)-i*(M*A-y*k+S*F)+a*(M*P-E*k+S*V)-o*(M*I-E*F+y*V)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8],g=e[9],v=e[10],_=e[11],M=e[12],E=e[13],y=e[14],S=e[15],A=t*d-i*c,P=t*h-a*c,I=t*f-o*c,k=i*h-a*d,F=i*f-o*d,V=a*f-o*h,w=m*E-g*M,L=m*y-v*M,z=m*S-_*M,B=g*y-v*E,Y=g*S-_*E,se=v*S-_*y,de=A*se-P*Y+I*B+k*z-F*L+V*w;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/de;return e[0]=(d*se-h*Y+f*B)*W,e[1]=(a*Y-i*se-o*B)*W,e[2]=(E*V-y*F+S*k)*W,e[3]=(v*F-g*V-_*k)*W,e[4]=(h*z-c*se-f*L)*W,e[5]=(t*se-a*z+o*L)*W,e[6]=(y*I-M*V-S*P)*W,e[7]=(m*V-v*I+_*P)*W,e[8]=(c*Y-d*z+f*w)*W,e[9]=(i*z-t*Y-o*w)*W,e[10]=(M*F-E*I+S*A)*W,e[11]=(g*I-m*F-_*A)*W,e[12]=(d*L-c*B-h*w)*W,e[13]=(t*B-i*L+a*w)*W,e[14]=(E*P-M*k-y*A)*W,e[15]=(m*k-g*P+v*A)*W,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,c=e.x,d=e.y,h=e.z,f=o*c,m=o*d;return this.set(f*c+i,f*d-a*h,f*h+a*d,0,f*d+a*h,m*d+i,m*h-a*c,0,f*h-a*d,m*h+a*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,c){return this.set(1,i,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,c=t._y,d=t._z,h=t._w,f=o+o,m=c+c,g=d+d,v=o*f,_=o*m,M=o*g,E=c*m,y=c*g,S=d*g,A=h*f,P=h*m,I=h*g,k=i.x,F=i.y,V=i.z;return a[0]=(1-(E+S))*k,a[1]=(_+I)*k,a[2]=(M-P)*k,a[3]=0,a[4]=(_-I)*F,a[5]=(1-(v+S))*F,a[6]=(y+A)*F,a[7]=0,a[8]=(M+P)*V,a[9]=(y-A)*V,a[10]=(1-(v+E))*V,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let c=da.set(a[0],a[1],a[2]).length();const d=da.set(a[4],a[5],a[6]).length(),h=da.set(a[8],a[9],a[10]).length();o<0&&(c=-c),Hi.copy(this);const f=1/c,m=1/d,g=1/h;return Hi.elements[0]*=f,Hi.elements[1]*=f,Hi.elements[2]*=f,Hi.elements[4]*=m,Hi.elements[5]*=m,Hi.elements[6]*=m,Hi.elements[8]*=g,Hi.elements[9]*=g,Hi.elements[10]*=g,t.setFromRotationMatrix(Hi),i.x=c,i.y=d,i.z=h,this}makePerspective(e,t,i,a,o,c,d=rr,h=!1){const f=this.elements,m=2*o/(t-e),g=2*o/(i-a),v=(t+e)/(t-e),_=(i+a)/(i-a);let M,E;if(h)M=o/(c-o),E=c*o/(c-o);else if(d===rr)M=-(c+o)/(c-o),E=-2*c*o/(c-o);else if(d===Ko)M=-c/(c-o),E=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=m,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=g,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,a,o,c,d=rr,h=!1){const f=this.elements,m=2/(t-e),g=2/(i-a),v=-(t+e)/(t-e),_=-(i+a)/(i-a);let M,E;if(h)M=1/(c-o),E=c/(c-o);else if(d===rr)M=-2/(c-o),E=-(c+o)/(c-o);else if(d===Ko)M=-1/(c-o),E=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=m,f[4]=0,f[8]=0,f[12]=v,f[1]=0,f[5]=g,f[9]=0,f[13]=_,f[2]=0,f[6]=0,f[10]=M,f[14]=E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};lu.prototype.isMatrix4=!0;let Ot=lu;const da=new Z,Hi=new Ot,RE=new Z(0,0,0),CE=new Z(1,1,1),ns=new Z,lc=new Z,yi=new Z,b0=new Ot,w0=new hs;class fs{constructor(e=0,t=0,i=0,a=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],c=a[4],d=a[8],h=a[1],f=a[5],m=a[9],g=a[2],v=a[6],_=a[10];switch(t){case"XYZ":this._y=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,_),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,_),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,_),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,_),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(d,_));break;case"XZY":this._z=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(d,o)):(this._x=Math.atan2(-m,_),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return b0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(b0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return w0.setFromEuler(this),this.setFromQuaternion(w0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class fp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PE=0;const T0=new Z,fa=new hs,_r=new Ot,cc=new Z,bo=new Z,NE=new Z,LE=new hs,A0=new Z(1,0,0),R0=new Z(0,1,0),C0=new Z(0,0,1),P0={type:"added"},IE={type:"removed"},ha={type:"childadded",child:null},cf={type:"childremoved",child:null};class En extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new Z,t=new fs,i=new hs,a=new Z(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Nt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.multiply(fa),this}rotateOnWorldAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.premultiply(fa),this}rotateX(e){return this.rotateOnAxis(A0,e)}rotateY(e){return this.rotateOnAxis(R0,e)}rotateZ(e){return this.rotateOnAxis(C0,e)}translateOnAxis(e,t){return T0.copy(e).applyQuaternion(this.quaternion),this.position.add(T0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(A0,e)}translateY(e){return this.translateOnAxis(R0,e)}translateZ(e){return this.translateOnAxis(C0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cc.copy(e):cc.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(bo,cc,this.up):_r.lookAt(cc,bo,this.up),this.quaternion.setFromRotationMatrix(_r),a&&(_r.extractRotation(a.matrixWorld),fa.setFromRotationMatrix(_r),this.quaternion.premultiply(fa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(P0),ha.child=e,this.dispatchEvent(ha),ha.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(IE),cf.child=e,this.dispatchEvent(cf),cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(P0),ha.child=e,this.dispatchEvent(ha),ha.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,NE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,LE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*a,o[13]+=i-o[1]*t-o[5]*i-o[9]*a,o[14]+=a-o[2]*t-o[6]*i-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const g=h[f];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,f=this.material.length;h<f;h++)d.push(o(e.materials,this.material[h]));a.material=d}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(o(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),f=c(e.textures),m=c(e.images),g=c(e.shapes),v=c(e.skeletons),_=c(e.animations),M=c(e.nodes);d.length>0&&(i.geometries=d),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),v.length>0&&(i.skeletons=v),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=a,i;function c(d){const h=[];for(const f in d){const m=d[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}En.DEFAULT_UP=new Z(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vo extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DE={type:"move"};class uf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,c=null;const d=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,i),S=this._getHandJoint(f,E);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],v=m.position.distanceTo(g.position),_=.02,M=.005;f.inputState.pinching&&v>_+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=_-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(DE)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},uc={h:0,s:0,l:0};function df(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Wt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Wt.workingColorSpace){if(e=up(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=df(c,o,e+1/3),this.g=df(c,o,e),this.b=df(c,o,e-1/3)}return Wt.colorSpaceToWorking(this,a),this}setStyle(e,t=di){function i(o){o!==void 0&&parseFloat(o)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const i=bx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Wt.workingToColorSpace(Kn.copy(this),e),Math.round(Vt(Kn.r*255,0,255))*65536+Math.round(Vt(Kn.g*255,0,255))*256+Math.round(Vt(Kn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(Kn.copy(this),t);const i=Kn.r,a=Kn.g,o=Kn.b,c=Math.max(i,a,o),d=Math.min(i,a,o);let h,f;const m=(d+c)/2;if(d===c)h=0,f=0;else{const g=c-d;switch(f=m<=.5?g/(c+d):g/(2-c-d),c){case i:h=(a-o)/g+(a<o?6:0);break;case a:h=(o-i)/g+2;break;case o:h=(i-a)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=m,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=di){Wt.workingToColorSpace(Kn.copy(this),e);const t=Kn.r,i=Kn.g,a=Kn.b;return e!==di?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(uc);const i=Xo(is.h,uc.h,t),a=Xo(is.s,uc.s,t),o=Xo(is.l,uc.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new Ht;Ht.NAMES=bx;class UE extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gi=new Z,yr=new Z,ff=new Z,Sr=new Z,pa=new Z,ma=new Z,N0=new Z,hf=new Z,pf=new Z,mf=new Z,gf=new ln,vf=new ln,xf=new ln;class Pi{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Gi.subVectors(e,t),a.cross(Gi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){Gi.subVectors(a,t),yr.subVectors(i,t),ff.subVectors(e,t);const c=Gi.dot(Gi),d=Gi.dot(yr),h=Gi.dot(ff),f=yr.dot(yr),m=yr.dot(ff),g=c*f-d*d;if(g===0)return o.set(0,0,0),null;const v=1/g,_=(f*h-d*m)*v,M=(c*m-d*h)*v;return o.set(1-_-M,M,_)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,i,a,o,c,d,h){return this.getBarycoord(e,t,i,a,Sr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Sr.x),h.addScaledVector(c,Sr.y),h.addScaledVector(d,Sr.z),h)}static getInterpolatedAttribute(e,t,i,a,o,c){return gf.setScalar(0),vf.setScalar(0),xf.setScalar(0),gf.fromBufferAttribute(e,t),vf.fromBufferAttribute(e,i),xf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(gf,o.x),c.addScaledVector(vf,o.y),c.addScaledVector(xf,o.z),c}static isFrontFacing(e,t,i,a){return Gi.subVectors(i,t),yr.subVectors(e,t),Gi.cross(yr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Gi.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return Pi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let c,d;pa.subVectors(a,i),ma.subVectors(o,i),hf.subVectors(e,i);const h=pa.dot(hf),f=ma.dot(hf);if(h<=0&&f<=0)return t.copy(i);pf.subVectors(e,a);const m=pa.dot(pf),g=ma.dot(pf);if(m>=0&&g<=m)return t.copy(a);const v=h*g-m*f;if(v<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(i).addScaledVector(pa,c);mf.subVectors(e,o);const _=pa.dot(mf),M=ma.dot(mf);if(M>=0&&_<=M)return t.copy(o);const E=_*f-h*M;if(E<=0&&f>=0&&M<=0)return d=f/(f-M),t.copy(i).addScaledVector(ma,d);const y=m*M-_*g;if(y<=0&&g-m>=0&&_-M>=0)return N0.subVectors(o,a),d=(g-m)/(g-m+(_-M)),t.copy(a).addScaledVector(N0,d);const S=1/(y+E+v);return c=E*S,d=v*S,t.copy(i).addScaledVector(pa,c).addScaledVector(ma,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ur{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=o.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Wi):Wi.fromBufferAttribute(o,c),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),dc.copy(i.boundingBox)),dc.applyMatrix4(e.matrixWorld),this.union(dc)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),fc.subVectors(this.max,wo),ga.subVectors(e.a,wo),va.subVectors(e.b,wo),xa.subVectors(e.c,wo),rs.subVectors(va,ga),ss.subVectors(xa,va),Rs.subVectors(ga,xa);let t=[0,-rs.z,rs.y,0,-ss.z,ss.y,0,-Rs.z,Rs.y,rs.z,0,-rs.x,ss.z,0,-ss.x,Rs.z,0,-Rs.x,-rs.y,rs.x,0,-ss.y,ss.x,0,-Rs.y,Rs.x,0];return!_f(t,ga,va,xa,fc)||(t=[1,0,0,0,1,0,0,0,1],!_f(t,ga,va,xa,fc))?!1:(hc.crossVectors(rs,ss),t=[hc.x,hc.y,hc.z],_f(t,ga,va,xa,fc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Wi=new Z,dc=new Ur,ga=new Z,va=new Z,xa=new Z,rs=new Z,ss=new Z,Rs=new Z,wo=new Z,fc=new Z,hc=new Z,Cs=new Z;function _f(s,e,t,i,a){for(let o=0,c=s.length-3;o<=c;o+=3){Cs.fromArray(s,o);const d=a.x*Math.abs(Cs.x)+a.y*Math.abs(Cs.y)+a.z*Math.abs(Cs.z),h=e.dot(Cs),f=t.dot(Cs),m=i.dot(Cs);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>d)return!1}return!0}const An=new Z,pc=new Lt;let FE=0;class On extends zs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bh,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pc.fromBufferAttribute(this,t),pc.applyMatrix3(e),this.setXY(t,pc.x,pc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),a=rn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),a=rn(a,this.array),o=rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class wx extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tx extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pi extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}const OE=new Ur,To=new Z,yf=new Z;class Fr{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):OE.setFromPoints(e).getCenter(i);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const t=To.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(To,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(yf)),this.expandByPoint(To.copy(e.center).sub(yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kE=0;const Ci=new Ot,Sf=new En,_a=new Z,Si=new Ur,Ao=new Ur,Fn=new Z;class kn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kE++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tE(e)?Tx:wx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Nt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,i){return Ci.makeTranslation(e,t,i),this.applyMatrix4(Ci),this}scale(e,t,i){return Ci.makeScale(e,t,i),this.applyMatrix4(Ci),this}lookAt(e){return Sf.lookAt(e),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new pi(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Si.setFromBufferAttribute(o),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const d=t[o];Ao.setFromBufferAttribute(d),this.morphTargetsRelative?(Fn.addVectors(Si.min,Ao.min),Si.expandByPoint(Fn),Fn.addVectors(Si.max,Ao.max),Si.expandByPoint(Fn)):(Si.expandByPoint(Ao.min),Si.expandByPoint(Ao.max))}Si.getCenter(i);let a=0;for(let o=0,c=e.count;o<c;o++)Fn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(Fn));if(t)for(let o=0,c=t.length;o<c;o++){const d=t[o],h=this.morphTargetsRelative;for(let f=0,m=d.count;f<m;f++)Fn.fromBufferAttribute(d,f),h&&(_a.fromBufferAttribute(e,f),Fn.add(_a)),a=Math.max(a,i.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let w=0;w<i.count;w++)d[w]=new Z,h[w]=new Z;const f=new Z,m=new Z,g=new Z,v=new Lt,_=new Lt,M=new Lt,E=new Z,y=new Z;function S(w,L,z){f.fromBufferAttribute(i,w),m.fromBufferAttribute(i,L),g.fromBufferAttribute(i,z),v.fromBufferAttribute(o,w),_.fromBufferAttribute(o,L),M.fromBufferAttribute(o,z),m.sub(f),g.sub(f),_.sub(v),M.sub(v);const B=1/(_.x*M.y-M.x*_.y);isFinite(B)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-_.y).multiplyScalar(B),y.copy(g).multiplyScalar(_.x).addScaledVector(m,-M.x).multiplyScalar(B),d[w].add(E),d[L].add(E),d[z].add(E),h[w].add(y),h[L].add(y),h[z].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let w=0,L=A.length;w<L;++w){const z=A[w],B=z.start,Y=z.count;for(let se=B,de=B+Y;se<de;se+=3)S(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const P=new Z,I=new Z,k=new Z,F=new Z;function V(w){k.fromBufferAttribute(a,w),F.copy(k);const L=d[w];P.copy(L),P.sub(k.multiplyScalar(k.dot(L))).normalize(),I.crossVectors(F,L);const B=I.dot(h[w])<0?-1:1;c.setXYZW(w,P.x,P.y,P.z,B)}for(let w=0,L=A.length;w<L;++w){const z=A[w],B=z.start,Y=z.count;for(let se=B,de=B+Y;se<de;se+=3)V(e.getX(se+0)),V(e.getX(se+1)),V(e.getX(se+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,_=i.count;v<_;v++)i.setXYZ(v,0,0,0);const a=new Z,o=new Z,c=new Z,d=new Z,h=new Z,f=new Z,m=new Z,g=new Z;if(e)for(let v=0,_=e.count;v<_;v+=3){const M=e.getX(v+0),E=e.getX(v+1),y=e.getX(v+2);a.fromBufferAttribute(t,M),o.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),m.subVectors(c,o),g.subVectors(a,o),m.cross(g),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,y),d.add(m),h.add(m),f.add(m),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(E,h.x,h.y,h.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let v=0,_=t.count;v<_;v+=3)a.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),m.subVectors(c,o),g.subVectors(a,o),m.cross(g),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(d,h){const f=d.array,m=d.itemSize,g=d.normalized,v=new f.constructor(h.length*m);let _=0,M=0;for(let E=0,y=h.length;E<y;E++){d.isInterleavedBufferAttribute?_=h[E]*d.data.stride+d.offset:_=h[E]*m;for(let S=0;S<m;S++)v[M++]=f[_++]}return new On(v,m,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,i=this.index.array,a=this.attributes;for(const d in a){const h=a[d],f=e(h,i);t.setAttribute(d,f)}const o=this.morphAttributes;for(const d in o){const h=[],f=o[d];for(let m=0,g=f.length;m<g;m++){const v=f[m],_=e(v,i);h.push(_)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const f=c[d];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const a={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let g=0,v=f.length;g<v;g++){const _=f[g];m.push(_.toJSON(e.data))}m.length>0&&(a[h]=m,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const f in a){const m=a[f];this.setAttribute(f,m.clone(t))}const o=e.morphAttributes;for(const f in o){const m=[],g=o[f];for(let v=0,_=g.length;v<_;v++)m.push(g[v].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,m=c.length;f<m;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class BE{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bh,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ti=new Z;class nu{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ji(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),a=rn(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),a=rn(a,this.array),o=rn(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){tu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let zE=0;class ps extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Na,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kf,this.blendDst=Zf,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Na&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kf&&(i.blendSrc=this.blendSrc),this.blendDst!==Zf&&(i.blendDst=this.blendDst),this.blendEquation!==Is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ca&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ca&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ca&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const d in o){const h=o[d];delete h.metadata,c.push(h)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ax extends ps{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ya;const Ro=new Z,Sa=new Z,Ma=new Z,Ea=new Lt,Co=new Lt,Rx=new Ot,mc=new Z,Po=new Z,gc=new Z,L0=new Lt,Mf=new Lt,I0=new Lt;class VE extends En{constructor(e=new Ax){if(super(),this.isSprite=!0,this.type="Sprite",ya===void 0){ya=new kn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new BE(t,5);ya.setIndex([0,1,2,0,2,3]),ya.setAttribute("position",new nu(i,3,0,!1)),ya.setAttribute("uv",new nu(i,2,3,!1))}this.geometry=ya,this.material=e,this.center=new Lt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sa.setFromMatrixScale(this.matrixWorld),Rx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ma.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sa.multiplyScalar(-Ma.z);const i=this.material.rotation;let a,o;i!==0&&(o=Math.cos(i),a=Math.sin(i));const c=this.center;vc(mc.set(-.5,-.5,0),Ma,c,Sa,a,o),vc(Po.set(.5,-.5,0),Ma,c,Sa,a,o),vc(gc.set(.5,.5,0),Ma,c,Sa,a,o),L0.set(0,0),Mf.set(1,0),I0.set(1,1);let d=e.ray.intersectTriangle(mc,Po,gc,!1,Ro);if(d===null&&(vc(Po.set(-.5,.5,0),Ma,c,Sa,a,o),Mf.set(0,1),d=e.ray.intersectTriangle(mc,gc,Po,!1,Ro),d===null))return;const h=e.ray.origin.distanceTo(Ro);h<e.near||h>e.far||t.push({distance:h,point:Ro.clone(),uv:Pi.getInterpolation(Ro,mc,Po,gc,L0,Mf,I0,new Lt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function vc(s,e,t,i,a,o){Ea.subVectors(s,t).addScalar(.5).multiply(i),a!==void 0?(Co.x=o*Ea.x-a*Ea.y,Co.y=a*Ea.x+o*Ea.y):Co.copy(Ea),s.copy(e),s.x+=Co.x,s.y+=Co.y,s.applyMatrix4(Rx)}const Er=new Z,Ef=new Z,xc=new Z,as=new Z,bf=new Z,_c=new Z,wf=new Z;class nl{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,t),Er.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Ef.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),as.copy(this.origin).sub(Ef);const o=e.distanceTo(t)*.5,c=-this.direction.dot(xc),d=as.dot(this.direction),h=-as.dot(xc),f=as.lengthSq(),m=Math.abs(1-c*c);let g,v,_,M;if(m>0)if(g=c*h-d,v=c*d-h,M=o*m,g>=0)if(v>=-M)if(v<=M){const E=1/m;g*=E,v*=E,_=g*(g+c*v+2*d)+v*(c*g+v+2*h)+f}else v=o,g=Math.max(0,-(c*v+d)),_=-g*g+v*(v+2*h)+f;else v=-o,g=Math.max(0,-(c*v+d)),_=-g*g+v*(v+2*h)+f;else v<=-M?(g=Math.max(0,-(-c*o+d)),v=g>0?-o:Math.min(Math.max(-o,-h),o),_=-g*g+v*(v+2*h)+f):v<=M?(g=0,v=Math.min(Math.max(-o,-h),o),_=v*(v+2*h)+f):(g=Math.max(0,-(c*o+d)),v=g>0?o:Math.min(Math.max(-o,-h),o),_=-g*g+v*(v+2*h)+f);else v=c>0?-o:o,g=Math.max(0,-(c*v+d)),_=-g*g+v*(v+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Ef).addScaledVector(xc,v),_}intersectSphere(e,t){Er.subVectors(e.center,this.origin);const i=Er.dot(this.direction),a=Er.dot(Er)-i*i,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),d=i-c,h=i+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,c,d,h;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return f>=0?(i=(e.min.x-v.x)*f,a=(e.max.x-v.x)*f):(i=(e.max.x-v.x)*f,a=(e.min.x-v.x)*f),m>=0?(o=(e.min.y-v.y)*m,c=(e.max.y-v.y)*m):(o=(e.max.y-v.y)*m,c=(e.min.y-v.y)*m),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),g>=0?(d=(e.min.z-v.z)*g,h=(e.max.z-v.z)*g):(d=(e.max.z-v.z)*g,h=(e.min.z-v.z)*g),i>h||d>a)||((d>i||i!==i)&&(i=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,t,i,a,o){bf.subVectors(t,e),_c.subVectors(i,e),wf.crossVectors(bf,_c);let c=this.direction.dot(wf),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;as.subVectors(this.origin,e);const h=d*this.direction.dot(_c.crossVectors(as,_c));if(h<0)return null;const f=d*this.direction.dot(bf.cross(as));if(f<0||h+f>c)return null;const m=-d*as.dot(wf);return m<0?null:this.at(m/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hp extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const D0=new Ot,Ps=new nl,yc=new Fr,U0=new Z,Sc=new Z,Mc=new Z,Ec=new Z,Tf=new Z,bc=new Z,F0=new Z,wc=new Z;class mi extends En{constructor(e=new kn,t=new hp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const d=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(o&&d){bc.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const m=d[h],g=o[h];m!==0&&(Tf.fromBufferAttribute(g,e),c?bc.addScaledVector(Tf,m):bc.addScaledVector(Tf.sub(t),m))}t.add(bc)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(o),Ps.copy(e.ray).recast(e.near),!(yc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(yc,U0)===null||Ps.origin.distanceToSquared(U0)>(e.far-e.near)**2))&&(D0.copy(o).invert(),Ps.copy(e.ray).applyMatrix4(D0),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,i){let a;const o=this.geometry,c=this.material,d=o.index,h=o.attributes.position,f=o.attributes.uv,m=o.attributes.uv1,g=o.attributes.normal,v=o.groups,_=o.drawRange;if(d!==null)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const y=v[M],S=c[y.materialIndex],A=Math.max(y.start,_.start),P=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let I=A,k=P;I<k;I+=3){const F=d.getX(I),V=d.getX(I+1),w=d.getX(I+2);a=Tc(this,S,e,i,f,m,g,F,V,w),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,_.start),E=Math.min(d.count,_.start+_.count);for(let y=M,S=E;y<S;y+=3){const A=d.getX(y),P=d.getX(y+1),I=d.getX(y+2);a=Tc(this,c,e,i,f,m,g,A,P,I),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,E=v.length;M<E;M++){const y=v[M],S=c[y.materialIndex],A=Math.max(y.start,_.start),P=Math.min(h.count,Math.min(y.start+y.count,_.start+_.count));for(let I=A,k=P;I<k;I+=3){const F=I,V=I+1,w=I+2;a=Tc(this,S,e,i,f,m,g,F,V,w),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,_.start),E=Math.min(h.count,_.start+_.count);for(let y=M,S=E;y<S;y+=3){const A=y,P=y+1,I=y+2;a=Tc(this,c,e,i,f,m,g,A,P,I),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function HE(s,e,t,i,a,o,c,d){let h;if(e.side===hi?h=i.intersectTriangle(c,o,a,!0,d):h=i.intersectTriangle(a,o,c,e.side===ds,d),h===null)return null;wc.copy(d),wc.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(wc);return f<t.near||f>t.far?null:{distance:f,point:wc.clone(),object:s}}function Tc(s,e,t,i,a,o,c,d,h,f){s.getVertexPosition(d,Sc),s.getVertexPosition(h,Mc),s.getVertexPosition(f,Ec);const m=HE(s,e,t,i,Sc,Mc,Ec,F0);if(m){const g=new Z;Pi.getBarycoord(F0,Sc,Mc,Ec,g),a&&(m.uv=Pi.getInterpolatedAttribute(a,d,h,f,g,new Lt)),o&&(m.uv1=Pi.getInterpolatedAttribute(o,d,h,f,g,new Lt)),c&&(m.normal=Pi.getInterpolatedAttribute(c,d,h,f,g,new Z),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const v={a:d,b:h,c:f,normal:new Z,materialIndex:0};Pi.getNormal(Sc,Mc,Ec,v.normal),m.face=v,m.barycoord=g}return m}const No=new ln,O0=new ln,k0=new ln,GE=new ln,B0=new Ot,Ac=new Z,Af=new Fr,z0=new Ot,Rf=new nl;class bC extends mi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=f0,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ur),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ac),this.boundingBox.expandByPoint(Ac)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ac),this.boundingSphere.expandByPoint(Ac)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,a=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Af.copy(this.boundingSphere),Af.applyMatrix4(a),e.ray.intersectsSphere(Af)!==!1&&(z0.copy(a).invert(),Rf.copy(e.ray).applyMatrix4(z0),!(this.boundingBox!==null&&Rf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Rf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ln,t=this.geometry.attributes.skinWeight;for(let i=0,a=t.count;i<a;i++){e.fromBufferAttribute(t,i);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===f0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===WM?this.bindMatrixInverse.copy(this.bindMatrix).invert():ct("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,a=this.geometry;O0.fromBufferAttribute(a.attributes.skinIndex,e),k0.fromBufferAttribute(a.attributes.skinWeight,e),t.isVector4?(No.copy(t),t.set(0,0,0,0)):(No.set(...t,1),t.set(0,0,0)),No.applyMatrix4(this.bindMatrix);for(let o=0;o<4;o++){const c=k0.getComponent(o);if(c!==0){const d=O0.getComponent(o);B0.multiplyMatrices(i.bones[d].matrixWorld,i.boneInverses[d]),t.addScaledVector(GE.copy(No).applyMatrix4(B0),c)}}return t.isVector4&&(t.w=No.w),t.applyMatrix4(this.bindMatrixInverse)}}class WE extends En{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pp extends Wn{constructor(e=null,t=1,i=1,a,o,c,d,h,f=Gn,m=Gn,g,v){super(null,c,d,h,f,m,a,o,g,v),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const V0=new Ot,jE=new Ot;class Cx{constructor(e=[],t=[]){this.uuid=Xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ct("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,a=this.bones.length;i<a;i++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ot;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,a=this.boneTexture;for(let o=0,c=e.length;o<c;o++){const d=e[o]?e[o].matrixWorld:jE;V0.multiplyMatrices(d,t[o]),V0.toArray(i,o*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Cx(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new pp(t,e,e,Li,Ni);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,a=e.bones.length;i<a;i++){const o=e.bones[i];let c=t[o];c===void 0&&(ct("Skeleton: No bone found with UUID:",o),c=new WE),this.bones.push(c),this.boneInverses.push(new Ot().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let a=0,o=t.length;a<o;a++){const c=t[a];e.bones.push(c.uuid);const d=i[a];e.boneInverses.push(d.toArray())}return e}}class H0 extends On{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ba=new Ot,G0=new Ot,Rc=[],W0=new Ur,XE=new Ot,Lo=new mi,Io=new Fr;class wC extends mi{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new H0(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,XE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ur),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ba),W0.copy(e.boundingBox).applyMatrix4(ba),this.boundingBox.union(W0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ba),Io.copy(e.boundingSphere).applyMatrix4(ba),this.boundingSphere.union(Io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,o=i.length+1,c=e*o+1;for(let d=0;d<i.length;d++)i[d]=a[c+d]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(i),e.ray.intersectsSphere(Io)!==!1))for(let o=0;o<a;o++){this.getMatrixAt(o,ba),G0.multiplyMatrices(i,ba),Lo.matrixWorld=G0,Lo.raycast(e,Rc);for(let c=0,d=Rc.length;c<d;c++){const h=Rc[c];h.instanceId=o,h.object=this,t.push(h)}Rc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new H0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new pp(new Float32Array(a*this.count),a,this.count,rp,Ni));const o=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const d=this.geometry.morphTargetsRelative?1:1-c,h=a*e;return o[h]=d,o.set(i,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cf=new Z,$E=new Z,YE=new Nt;class Ls{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Cf.subVectors(i,t).cross($E.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Cf),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||YE.getNormalMatrix(e),a=this.coplanarPoint(Cf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new Fr,qE=new Lt(.5,.5),Cc=new Z;class mp{constructor(e=new Ls,t=new Ls,i=new Ls,a=new Ls,o=new Ls,c=new Ls){this.planes=[e,t,i,a,o,c]}set(e,t,i,a,o,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(i),d[3].copy(a),d[4].copy(o),d[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=rr,i=!1){const a=this.planes,o=e.elements,c=o[0],d=o[1],h=o[2],f=o[3],m=o[4],g=o[5],v=o[6],_=o[7],M=o[8],E=o[9],y=o[10],S=o[11],A=o[12],P=o[13],I=o[14],k=o[15];if(a[0].setComponents(f-c,_-m,S-M,k-A).normalize(),a[1].setComponents(f+c,_+m,S+M,k+A).normalize(),a[2].setComponents(f+d,_+g,S+E,k+P).normalize(),a[3].setComponents(f-d,_-g,S-E,k-P).normalize(),i)a[4].setComponents(h,v,y,I).normalize(),a[5].setComponents(f-h,_-v,S-y,k-I).normalize();else if(a[4].setComponents(f-h,_-v,S-y,k-I).normalize(),t===rr)a[5].setComponents(f+h,_+v,S+y,k+I).normalize();else if(t===Ko)a[5].setComponents(h,v,y,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);const t=qE.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Cc.x=a.normal.x>0?e.max.x:e.min.x,Cc.y=a.normal.y>0?e.max.y:e.min.y,Cc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Px extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const iu=new Z,ru=new Z,j0=new Ot,Do=new nl,Pc=new Fr,Pf=new Z,X0=new Z;class Nx extends En{constructor(e=new kn,t=new Px){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)iu.fromBufferAttribute(t,a-1),ru.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=iu.distanceTo(ru);e.setAttribute("lineDistance",new pi(i,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pc.copy(i.boundingSphere),Pc.applyMatrix4(a),Pc.radius+=o,e.ray.intersectsSphere(Pc)===!1)return;j0.copy(a).invert(),Do.copy(e.ray).applyMatrix4(j0);const d=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=this.isLineSegments?2:1,m=i.index,v=i.attributes.position;if(m!==null){const _=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=_,y=M-1;E<y;E+=f){const S=m.getX(E),A=m.getX(E+1),P=Nc(this,e,Do,h,S,A,E);P&&t.push(P)}if(this.isLineLoop){const E=m.getX(M-1),y=m.getX(_),S=Nc(this,e,Do,h,E,y,M-1);S&&t.push(S)}}else{const _=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=_,y=M-1;E<y;E+=f){const S=Nc(this,e,Do,h,E,E+1,E);S&&t.push(S)}if(this.isLineLoop){const E=Nc(this,e,Do,h,M-1,_,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const d=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}}function Nc(s,e,t,i,a,o,c){const d=s.geometry.attributes.position;if(iu.fromBufferAttribute(d,a),ru.fromBufferAttribute(d,o),t.distanceSqToSegment(iu,ru,Pf,X0)>i)return;Pf.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(Pf);if(!(f<e.near||f>e.far))return{distance:f,point:X0.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const $0=new Z,Y0=new Z;class TC extends Nx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,o=t.count;a<o;a+=2)$0.fromBufferAttribute(t,a),Y0.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+$0.distanceTo(Y0);e.setAttribute("lineDistance",new pi(i,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class KE extends Nx{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xc extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const q0=new Ot,Vh=new nl,Lc=new Fr,Ic=new Z;class Nf extends En{constructor(e=new kn,t=new Xc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lc.copy(i.boundingSphere),Lc.applyMatrix4(a),Lc.radius+=o,e.ray.intersectsSphere(Lc)===!1)return;q0.copy(a).invert(),Vh.copy(e.ray).applyMatrix4(q0);const d=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=i.index,g=i.attributes.position;if(f!==null){const v=Math.max(0,c.start),_=Math.min(f.count,c.start+c.count);for(let M=v,E=_;M<E;M++){const y=f.getX(M);Ic.fromBufferAttribute(g,y),K0(Ic,y,h,a,e,t,this)}}else{const v=Math.max(0,c.start),_=Math.min(g.count,c.start+c.count);for(let M=v,E=_;M<E;M++)Ic.fromBufferAttribute(g,M),K0(Ic,M,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const d=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}}function K0(s,e,t,i,a,o,c){const d=Vh.distanceSqToPoint(s);if(d<t){const h=new Z;Vh.closestPointToPoint(s,h),h.applyMatrix4(i);const f=a.ray.origin.distanceTo(h);if(f<a.near||f>a.far)return;o.push({distance:f,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Lx extends Wn{constructor(e=[],t=Os,i,a,o,c,d,h,f,m){super(e,t,i,a,o,c,d,h,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ZE extends Wn{constructor(e,t,i,a,o,c,d,h,f){super(e,t,i,a,o,c,d,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fa extends Wn{constructor(e,t,i=lr,a,o,c,d=Gn,h=Gn,f,m=Ir,g=1){if(m!==Ir&&m!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:g};super(v,a,o,c,d,h,m,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class JE extends Fa{constructor(e,t=lr,i=Os,a,o,c=Gn,d=Gn,h,f=Ir){const m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,t,i,a,o,c,d,h,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ix extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class il extends kn{constructor(e=1,t=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const d=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const h=[],f=[],m=[],g=[];let v=0,_=0;M("z","y","x",-1,-1,i,t,e,c,o,0),M("z","y","x",1,-1,i,t,-e,c,o,1),M("x","z","y",1,1,e,i,t,a,c,2),M("x","z","y",1,-1,e,i,-t,a,c,3),M("x","y","z",1,-1,e,t,i,a,o,4),M("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(h),this.setAttribute("position",new pi(f,3)),this.setAttribute("normal",new pi(m,3)),this.setAttribute("uv",new pi(g,2));function M(E,y,S,A,P,I,k,F,V,w,L){const z=I/V,B=k/w,Y=I/2,se=k/2,de=F/2,W=V+1,J=w+1;let K=0,te=0;const le=new Z;for(let D=0;D<J;D++){const b=D*B-se;for(let H=0;H<W;H++){const xe=H*z-Y;le[E]=xe*A,le[y]=b*P,le[S]=de,f.push(le.x,le.y,le.z),le[E]=0,le[y]=0,le[S]=F>0?1:-1,m.push(le.x,le.y,le.z),g.push(H/V),g.push(1-D/w),K+=1}}for(let D=0;D<w;D++)for(let b=0;b<V;b++){const H=v+b+W*D,xe=v+b+W*(D+1),be=v+(b+1)+W*(D+1),Me=v+(b+1)+W*D;h.push(H,xe,Me),h.push(xe,be,Me),te+=6}d.addGroup(_,te,L),_+=te,v+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gp extends kn{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const o=[],c=[];d(a),f(i),m(),this.setAttribute("position",new pi(o,3)),this.setAttribute("normal",new pi(o.slice(),3)),this.setAttribute("uv",new pi(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(A){const P=new Z,I=new Z,k=new Z;for(let F=0;F<t.length;F+=3)_(t[F+0],P),_(t[F+1],I),_(t[F+2],k),h(P,I,k,A)}function h(A,P,I,k){const F=k+1,V=[];for(let w=0;w<=F;w++){V[w]=[];const L=A.clone().lerp(I,w/F),z=P.clone().lerp(I,w/F),B=F-w;for(let Y=0;Y<=B;Y++)Y===0&&w===F?V[w][Y]=L:V[w][Y]=L.clone().lerp(z,Y/B)}for(let w=0;w<F;w++)for(let L=0;L<2*(F-w)-1;L++){const z=Math.floor(L/2);L%2===0?(v(V[w][z+1]),v(V[w+1][z]),v(V[w][z])):(v(V[w][z+1]),v(V[w+1][z+1]),v(V[w+1][z]))}}function f(A){const P=new Z;for(let I=0;I<o.length;I+=3)P.x=o[I+0],P.y=o[I+1],P.z=o[I+2],P.normalize().multiplyScalar(A),o[I+0]=P.x,o[I+1]=P.y,o[I+2]=P.z}function m(){const A=new Z;for(let P=0;P<o.length;P+=3){A.x=o[P+0],A.y=o[P+1],A.z=o[P+2];const I=y(A)/2/Math.PI+.5,k=S(A)/Math.PI+.5;c.push(I,1-k)}M(),g()}function g(){for(let A=0;A<c.length;A+=6){const P=c[A+0],I=c[A+2],k=c[A+4],F=Math.max(P,I,k),V=Math.min(P,I,k);F>.9&&V<.1&&(P<.2&&(c[A+0]+=1),I<.2&&(c[A+2]+=1),k<.2&&(c[A+4]+=1))}}function v(A){o.push(A.x,A.y,A.z)}function _(A,P){const I=A*3;P.x=e[I+0],P.y=e[I+1],P.z=e[I+2]}function M(){const A=new Z,P=new Z,I=new Z,k=new Z,F=new Lt,V=new Lt,w=new Lt;for(let L=0,z=0;L<o.length;L+=9,z+=6){A.set(o[L+0],o[L+1],o[L+2]),P.set(o[L+3],o[L+4],o[L+5]),I.set(o[L+6],o[L+7],o[L+8]),F.set(c[z+0],c[z+1]),V.set(c[z+2],c[z+3]),w.set(c[z+4],c[z+5]),k.copy(A).add(P).add(I).divideScalar(3);const B=y(k);E(F,z+0,A,B),E(V,z+2,P,B),E(w,z+4,I,B)}}function E(A,P,I,k){k<0&&A.x===1&&(c[P]=A.x-1),I.x===0&&I.z===0&&(c[P]=k/2/Math.PI+.5)}function y(A){return Math.atan2(A.z,-A.x)}function S(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.vertices,e.indices,e.radius,e.detail)}}class vp extends gp{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vp(e.radius,e.detail)}}class fu extends kn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,c=t/2,d=Math.floor(i),h=Math.floor(a),f=d+1,m=h+1,g=e/d,v=t/h,_=[],M=[],E=[],y=[];for(let S=0;S<m;S++){const A=S*v-c;for(let P=0;P<f;P++){const I=P*g-o;M.push(I,-A,0),E.push(0,0,1),y.push(P/d),y.push(1-S/h)}}for(let S=0;S<h;S++)for(let A=0;A<d;A++){const P=A+f*S,I=A+f*(S+1),k=A+1+f*(S+1),F=A+1+f*S;_.push(P,I,F),_.push(I,k,F)}this.setIndex(_),this.setAttribute("position",new pi(M,3)),this.setAttribute("normal",new pi(E,3)),this.setAttribute("uv",new pi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}function Oa(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];if(Z0(a))a.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(Z0(a[0])){const o=[];for(let c=0,d=a.length;c<d;c++)o[c]=a[c].clone();e[t][i]=o}else e[t][i]=a.slice();else e[t][i]=a}}return e}function ni(s){const e={};for(let t=0;t<s.length;t++){const i=Oa(s[t]);for(const a in i)e[a]=i[a]}return e}function Z0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function QE(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Dx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}const e1={clone:Oa,merge:ni};var t1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t1,this.fragmentShader=n1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oa(e.uniforms),this.uniformsGroups=QE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class i1 extends cr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Hh extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class AC extends Hh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class r1 extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$M,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class s1 extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Dc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function a1(s){function e(a,o){return s[a]-s[o]}const t=s.length,i=new Array(t);for(let a=0;a!==t;++a)i[a]=a;return i.sort(e),i}function J0(s,e,t){const i=s.length,a=new s.constructor(i);for(let o=0,c=0;c!==i;++o){const d=t[o]*e;for(let h=0;h!==e;++h)a[c++]=s[d+h]}return a}function Ux(s,e,t,i){let a=1,o=s[0];for(;o!==void 0&&o[i]===void 0;)o=s[a++];if(o===void 0)return;let c=o[i];if(c!==void 0)if(Array.isArray(c))do c=o[i],c!==void 0&&(e.push(o.time),t.push(...c)),o=s[a++];while(o!==void 0);else if(c.toArray!==void 0)do c=o[i],c!==void 0&&(e.push(o.time),c.toArray(t,t.length)),o=s[a++];while(o!==void 0);else do c=o[i],c!==void 0&&(e.push(o.time),t.push(c)),o=s[a++];while(o!==void 0)}class rl{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,a=t[i],o=t[i-1];e:{t:{let c;n:{i:if(!(e<a)){for(let d=i+2;;){if(a===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===d)break;if(o=a,a=t[++i],e<a)break t}c=t.length;break n}if(!(e>=o)){const d=t[1];e<d&&(i=2,o=d);for(let h=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(a=o,o=t[--i-1],e>=o)break t}c=i,i=0;break n}break e}for(;i<c;){const d=i+c>>>1;e<t[d]?c=d:i=d+1}if(a=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,a)}return this.interpolate_(i,o,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,o=e*a;for(let c=0;c!==a;++c)t[c]=i[o+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class o1 extends rl{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:p0,endingEnd:p0}}intervalChanged_(e,t,i){const a=this.parameterPositions;let o=e-2,c=e+1,d=a[o],h=a[c];if(d===void 0)switch(this.getSettings_().endingStart){case m0:o=e,d=2*t-i;break;case g0:o=a.length-2,d=t+a[o]-a[o+1];break;default:o=e,d=i}if(h===void 0)switch(this.getSettings_().endingEnd){case m0:c=e,h=2*i-t;break;case g0:c=1,h=i+a[1]-a[0];break;default:c=e-1,h=t}const f=(i-t)*.5,m=this.valueSize;this._weightPrev=f/(t-d),this._weightNext=f/(h-i),this._offsetPrev=o*m,this._offsetNext=c*m}interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=e*d,f=h-d,m=this._offsetPrev,g=this._offsetNext,v=this._weightPrev,_=this._weightNext,M=(i-t)/(a-t),E=M*M,y=E*M,S=-v*y+2*v*E-v*M,A=(1+v)*y+(-1.5-2*v)*E+(-.5+v)*M+1,P=(-1-_)*y+(1.5+_)*E+.5*M,I=_*y-_*E;for(let k=0;k!==d;++k)o[k]=S*c[m+k]+A*c[f+k]+P*c[h+k]+I*c[g+k];return o}}class l1 extends rl{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=e*d,f=h-d,m=(i-t)/(a-t),g=1-m;for(let v=0;v!==d;++v)o[v]=c[f+v]*g+c[h+v]*m;return o}}class c1 extends rl{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}}class u1 extends rl{interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=e*d,f=h-d,m=this.settings||this.DefaultSettings_,g=m.inTangents,v=m.outTangents;if(!g||!v){const E=(i-t)/(a-t),y=1-E;for(let S=0;S!==d;++S)o[S]=c[f+S]*y+c[h+S]*E;return o}const _=d*2,M=e-1;for(let E=0;E!==d;++E){const y=c[f+E],S=c[h+E],A=M*_+E*2,P=v[A],I=v[A+1],k=e*_+E*2,F=g[k],V=g[k+1];let w=(i-t)/(a-t),L,z,B,Y,se;for(let de=0;de<8;de++){L=w*w,z=L*w,B=1-w,Y=B*B,se=Y*B;const J=se*t+3*Y*w*P+3*B*L*F+z*a-i;if(Math.abs(J)<1e-10)break;const K=3*Y*(P-t)+6*B*w*(F-P)+3*L*(a-F);if(Math.abs(K)<1e-10)break;w=w-J/K,w=Math.max(0,Math.min(1,w))}o[E]=se*y+3*Y*w*I+3*B*L*V+z*S}return o}}class $i{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dc(t,this.TimeBufferType),this.values=Dc(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Dc(e.times,Array),values:Dc(e.values,Array)};const a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new c1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new l1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new o1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new u1(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Jc:t=this.InterpolantFactoryMethodDiscrete;break;case Oh:t=this.InterpolantFactoryMethodLinear;break;case rf:t=this.InterpolantFactoryMethodSmooth;break;case h0:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ct("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jc;case this.InterpolantFactoryMethodLinear:return Oh;case this.InterpolantFactoryMethodSmooth:return rf;case this.InterpolantFactoryMethodBezier:return h0}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){const i=this.times,a=i.length;let o=0,c=a-1;for(;o!==a&&i[o]<e;)++o;for(;c!==-1&&i[c]>t;)--c;if(++c,o!==0||c!==a){o>=c&&(c=Math.max(c,1),o=c-1);const d=this.getValueSize();this.times=i.slice(o,c),this.values=this.values.slice(o*d,c*d)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(gt("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,a=this.values,o=i.length;o===0&&(gt("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let d=0;d!==o;d++){const h=i[d];if(typeof h=="number"&&isNaN(h)){gt("KeyframeTrack: Time is not a valid number.",this,d,h),e=!1;break}if(c!==null&&c>h){gt("KeyframeTrack: Out of order keys.",this,d,h,c),e=!1;break}c=h}if(a!==void 0&&nE(a))for(let d=0,h=a.length;d!==h;++d){const f=a[d];if(isNaN(f)){gt("KeyframeTrack: Value is not a valid number.",this,d,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===rf,o=e.length-1;let c=1;for(let d=1;d<o;++d){let h=!1;const f=e[d],m=e[d+1];if(f!==m&&(d!==1||f!==e[0]))if(a)h=!0;else{const g=d*i,v=g-i,_=g+i;for(let M=0;M!==i;++M){const E=t[g+M];if(E!==t[v+M]||E!==t[_+M]){h=!0;break}}}if(h){if(d!==c){e[c]=e[d];const g=d*i,v=c*i;for(let _=0;_!==i;++_)t[v+_]=t[g+_]}++c}}if(o>0){e[c]=e[o];for(let d=o*i,h=c*i,f=0;f!==i;++f)t[h+f]=t[d+f];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}}$i.prototype.ValueTypeName="";$i.prototype.TimeBufferType=Float32Array;$i.prototype.ValueBufferType=Float32Array;$i.prototype.DefaultInterpolation=Oh;class za extends $i{constructor(e,t,i){super(e,t,i)}}za.prototype.ValueTypeName="bool";za.prototype.ValueBufferType=Array;za.prototype.DefaultInterpolation=Jc;za.prototype.InterpolantFactoryMethodLinear=void 0;za.prototype.InterpolantFactoryMethodSmooth=void 0;class Fx extends $i{constructor(e,t,i,a){super(e,t,i,a)}}Fx.prototype.ValueTypeName="color";class su extends $i{constructor(e,t,i,a){super(e,t,i,a)}}su.prototype.ValueTypeName="number";class d1 extends rl{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=(i-t)/(a-t);let f=e*d;for(let m=f+d;f!==m;f+=4)hs.slerpFlat(o,0,c,f-d,c,f,h);return o}}class hu extends $i{constructor(e,t,i,a){super(e,t,i,a)}InterpolantFactoryMethodLinear(e){return new d1(this.times,this.values,this.getValueSize(),e)}}hu.prototype.ValueTypeName="quaternion";hu.prototype.InterpolantFactoryMethodSmooth=void 0;class Va extends $i{constructor(e,t,i){super(e,t,i)}}Va.prototype.ValueTypeName="string";Va.prototype.ValueBufferType=Array;Va.prototype.DefaultInterpolation=Jc;Va.prototype.InterpolantFactoryMethodLinear=void 0;Va.prototype.InterpolantFactoryMethodSmooth=void 0;class au extends $i{constructor(e,t,i,a){super(e,t,i,a)}}au.prototype.ValueTypeName="vector";class RC{constructor(e="",t=-1,i=[],a=XM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=a,this.uuid=Xi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,a=1/(e.fps||1);for(let c=0,d=i.length;c!==d;++c)t.push(h1(i[c]).scale(a));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],i=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,c=i.length;o!==c;++o)t.push($i.toJSON(i[o]));return a}static CreateFromMorphTargetSequence(e,t,i,a){const o=t.length,c=[];for(let d=0;d<o;d++){let h=[],f=[];h.push((d+o-1)%o,d,(d+1)%o),f.push(0,1,0);const m=a1(h);h=J0(h,1,m),f=J0(f,1,m),!a&&h[0]===0&&(h.push(o),f.push(f[0])),c.push(new su(".morphTargetInfluences["+t[d].name+"]",h,f).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const a=e;i=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<i.length;a++)if(i[a].name===t)return i[a];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const a={},o=/^([\w-]*?)([\d]+)$/;for(let d=0,h=e.length;d<h;d++){const f=e[d],m=f.name.match(o);if(m&&m.length>1){const g=m[1];let v=a[g];v||(a[g]=v=[]),v.push(f)}}const c=[];for(const d in a)c.push(this.CreateFromMorphTargetSequence(d,a[d],t,i));return c}static parseAnimation(e,t){if(ct("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return gt("AnimationClip: No animation in JSONLoader data."),null;const i=function(g,v,_,M,E){if(_.length!==0){const y=[],S=[];Ux(_,y,S,M),y.length!==0&&E.push(new g(v,y,S))}},a=[],o=e.name||"default",c=e.fps||30,d=e.blendMode;let h=e.length||-1;const f=e.hierarchy||[];for(let g=0;g<f.length;g++){const v=f[g].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const _={};let M;for(M=0;M<v.length;M++)if(v[M].morphTargets)for(let E=0;E<v[M].morphTargets.length;E++)_[v[M].morphTargets[E]]=-1;for(const E in _){const y=[],S=[];for(let A=0;A!==v[M].morphTargets.length;++A){const P=v[M];y.push(P.time),S.push(P.morphTarget===E?1:0)}a.push(new su(".morphTargetInfluence["+E+"]",y,S))}h=_.length*c}else{const _=".bones["+t[g].name+"]";i(au,_+".position",v,"pos",a),i(hu,_+".quaternion",v,"rot",a),i(au,_+".scale",v,"scl",a)}}return a.length===0?null:new this(o,h,a,d)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,a=e.length;i!==a;++i){const o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function f1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return su;case"vector":case"vector2":case"vector3":case"vector4":return au;case"color":return Fx;case"quaternion":return hu;case"bool":case"boolean":return za;case"string":return Va}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function h1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=f1(s.type);if(s.times===void 0){const t=[],i=[];Ux(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ar={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Q0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Q0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Q0(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class p1{constructor(e,t,i){const a=this;let o=!1,c=0,d=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(m){d++,o===!1&&a.onStart!==void 0&&a.onStart(m,c,d),o=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,d),c===d&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,g){return f.push(m,g),this},this.removeHandler=function(m){const g=f.indexOf(m);return g!==-1&&f.splice(g,2),this},this.getHandler=function(m){for(let g=0,v=f.length;g<v;g+=2){const _=f[g],M=f[g+1];if(_.global&&(_.lastIndex=0),_.test(m))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const m1=new p1;class sl{constructor(e){this.manager=e!==void 0?e:m1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}sl.DEFAULT_MATERIAL_NAME="__DEFAULT";const br={};class g1 extends Error{constructor(e,t){super(e),this.response=t}}class CC extends sl{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Ar.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(br[e]!==void 0){br[e].push({onLoad:t,onProgress:i,onError:a});return}br[e]=[],br[e].push({onLoad:t,onProgress:i,onError:a});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,h=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&ct("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const m=br[e],g=f.body.getReader(),v=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),_=v?parseInt(v):0,M=_!==0;let E=0;const y=new ReadableStream({start(S){A();function A(){g.read().then(({done:P,value:I})=>{if(P)S.close();else{E+=I.byteLength;const k=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:_});for(let F=0,V=m.length;F<V;F++){const w=m[F];w.onProgress&&w.onProgress(k)}S.enqueue(I),A()}},P=>{S.error(P)})}}});return new Response(y)}else throw new g1(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(m=>new DOMParser().parseFromString(m,d));case"json":return f.json();default:if(d==="")return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(d),v=g&&g[1]?g[1].toLowerCase():void 0,_=new TextDecoder(v);return f.arrayBuffer().then(M=>_.decode(M))}}}).then(f=>{Ar.add(`file:${e}`,f);const m=br[e];delete br[e];for(let g=0,v=m.length;g<v;g++){const _=m[g];_.onLoad&&_.onLoad(f)}}).catch(f=>{const m=br[e];if(m===void 0)throw this.manager.itemError(e),f;delete br[e];for(let g=0,v=m.length;g<v;g++){const _=m[g];_.onError&&_.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const wa=new WeakMap;class v1 extends sl{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Ar.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0);else{let g=wa.get(c);g===void 0&&(g=[],wa.set(c,g)),g.push({onLoad:t,onError:a})}return c}const d=Zo("img");function h(){m(),t&&t(this);const g=wa.get(this)||[];for(let v=0;v<g.length;v++){const _=g[v];_.onLoad&&_.onLoad(this)}wa.delete(this),o.manager.itemEnd(e)}function f(g){m(),a&&a(g),Ar.remove(`image:${e}`);const v=wa.get(this)||[];for(let _=0;_<v.length;_++){const M=v[_];M.onError&&M.onError(g)}wa.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){d.removeEventListener("load",h,!1),d.removeEventListener("error",f,!1)}return d.addEventListener("load",h,!1),d.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Ar.add(`image:${e}`,d),o.manager.itemStart(e),d.src=e,d}}class PC extends sl{constructor(e){super(e)}load(e,t,i,a){const o=new Wn,c=new v1(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){o.image=d,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class pu extends En{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Lf=new Ot,ev=new Z,tv=new Z;class xp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ev.setFromMatrixPosition(e.matrixWorld),t.position.copy(ev),tv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tv),t.updateMatrixWorld(),Lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ko||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Uc=new Z,Fc=new hs,er=new Z;class Ox extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=rr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Uc,Fc,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Fc,er.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Uc,Fc,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Uc,Fc,er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const os=new Z,nv=new Lt,iv=new Lt;class fi extends Ox{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,nv,iv),t.subVectors(iv,nv)}setViewOffset(e,t,i,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;o+=c.offsetX*a/h,t-=c.offsetY*i/f,a*=c.width/h,i*=c.height/f}const d=this.filmOffset;d!==0&&(o+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class x1 extends xp{constructor(){super(new fi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Ua*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(i!==t.fov||a!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=a,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class NC extends pu{constructor(e,t,i=0,a=Math.PI/3,o=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.distance=i,this.angle=a,this.penumbra=o,this.decay=c,this.map=null,this.shadow=new x1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class _1 extends xp{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0}}class LC extends pu{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new _1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class _p extends Ox{constructor(e=-1,t=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,c=i+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,d-=m*this.view.offsetY,h=d-m*this.view.height}this.projectionMatrix.makeOrthographic(o,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class y1 extends xp{constructor(){super(new _p(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rv extends pu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new y1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class S1 extends pu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class IC{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const If=new WeakMap;class DC extends sl{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ct("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ct("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Ar.get(`image-bitmap:${e}`);if(c!==void 0){if(o.manager.itemStart(e),c.then){c.then(f=>{If.has(c)===!0?(a&&a(If.get(c)),o.manager.itemError(e),o.manager.itemEnd(e)):(t&&t(f),o.manager.itemEnd(e))});return}setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0);return}const d={};d.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",d.headers=this.requestHeader,d.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const h=fetch(e,d).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(f){Ar.add(`image-bitmap:${e}`,f),t&&t(f),o.manager.itemEnd(e)}).catch(function(f){a&&a(f),If.set(h,f),Ar.remove(`image-bitmap:${e}`),o.manager.itemError(e),o.manager.itemEnd(e)});Ar.add(`image-bitmap:${e}`,h),o.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ta=-90,Aa=1;class M1 extends En{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new fi(Ta,Aa,e,t);a.layers=this.layers,this.add(a);const o=new fi(Ta,Aa,e,t);o.layers=this.layers,this.add(o);const c=new fi(Ta,Aa,e,t);c.layers=this.layers,this.add(c);const d=new fi(Ta,Aa,e,t);d.layers=this.layers,this.add(d);const h=new fi(Ta,Aa,e,t);h.layers=this.layers,this.add(h);const f=new fi(Ta,Aa,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,c,d,h]=t;for(const f of t)this.remove(f);if(e===rr)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,d,h,f,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(g,v,_),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class E1 extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const yp="\\[\\]\\.:\\/",b1=new RegExp("["+yp+"]","g"),Sp="[^"+yp+"]",w1="[^"+yp.replace("\\.","")+"]",T1=/((?:WC+[\/:])*)/.source.replace("WC",Sp),A1=/(WCOD+)?/.source.replace("WCOD",w1),R1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sp),C1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sp),P1=new RegExp("^"+T1+A1+R1+C1+"$"),N1=["material","materials","bones","map"];class L1{constructor(e,t,i){const a=i||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=i.length;a!==o;++a)i[a].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class an{constructor(e,t,i){this.path=t,this.parsedPath=i||an.parseTrackName(t),this.node=an.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new an.Composite(e,t,i):new an(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b1,"")}static parseTrackName(e){const t=P1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){const o=i.nodeName.substring(a+1);N1.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(o){for(let c=0;c<o.length;c++){const d=o[c];if(d.name===t||d.uuid===t)return d;const h=i(d.children);if(h)return h}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,a=t.propertyName;let o=t.propertyIndex;if(e||(e=an.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=t.objectIndex;switch(i){case"materials":if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===f){f=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(f!==void 0){if(e[f]===void 0){gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const c=e[a];if(c===void 0){const f=t.nodeName;gt("PropertyBinding: Trying to update property for track: "+f+"."+a+" but it wasn't found.",e);return}let d=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?d=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(d=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(o!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=a;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][d]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}an.Composite=L1;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const sv=new Ot;class I1{constructor(e,t,i=0,a=1/0){this.ray=new nl(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new fp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):gt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sv),this}intersectObject(e,t=!0,i=[]){return Gh(e,this,i,t),i.sort(av),i}intersectObjects(e,t=!0,i=[]){for(let a=0,o=e.length;a<o;a++)Gh(e[a],this,i,t);return i.sort(av),i}}function av(s,e){return s.distance-e.distance}function Gh(s,e,t,i){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const o=s.children;for(let c=0,d=o.length;c<d;c++)Gh(o[c],e,t,!0)}}const Ap=class Ap{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=a,this}};Ap.prototype.isMatrix2=!0;let ov=Ap;function lv(s,e,t,i){const a=D1(i);switch(t){case yx:return s*e;case rp:return s*e/a.components*a.byteLength;case sp:return s*e/a.components*a.byteLength;case ks:return s*e*2/a.components*a.byteLength;case ap:return s*e*2/a.components*a.byteLength;case Sx:return s*e*3/a.components*a.byteLength;case Li:return s*e*4/a.components*a.byteLength;case op:return s*e*4/a.components*a.byteLength;case Hc:case Gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wc:case jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lh:case uh:return Math.max(s,16)*Math.max(e,8)/4;case oh:case ch:return Math.max(s,8)*Math.max(e,8)/2;case dh:case fh:case ph:case mh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hh:case Kc:case gh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case yh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case bh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case wh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Th:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Nh:case Lh:case Ih:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Dh:case Uh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zc:case Fh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function D1(s){switch(s){case Mi:case gx:return{byteLength:1,components:1};case Yo:case vx:case Lr:return{byteLength:2,components:1};case np:case ip:return{byteLength:2,components:4};case lr:case tp:case Ni:return{byteLength:4,components:1};case xx:case _x:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kx(){let s=null,e=!1,t=null,i=null;function a(o,c){t(o,c),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function U1(s){const e=new WeakMap;function t(d,h){const f=d.array,m=d.usage,g=f.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,f,m),d.onUploadCallback();let _;if(f instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)_=s.HALF_FLOAT;else if(f instanceof Uint16Array)d.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=s.SHORT;else if(f instanceof Uint32Array)_=s.UNSIGNED_INT;else if(f instanceof Int32Array)_=s.INT;else if(f instanceof Int8Array)_=s.BYTE;else if(f instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:g}}function i(d,h,f){const m=h.array,g=h.updateRanges;if(s.bindBuffer(f,d),g.length===0)s.bufferSubData(f,0,m);else{g.sort((_,M)=>_.start-M.start);let v=0;for(let _=1;_<g.length;_++){const M=g[v],E=g[_];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++v,g[v]=E)}g.length=v+1;for(let _=0,M=g.length;_<M;_++){const E=g[_];s.bufferSubData(f,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const f=e.get(d);if(f===void 0)e.set(d,t(d,h));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,d,h),f.version=d.version}}return{get:a,remove:o,update:c}}var F1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,O1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,k1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,G1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,j1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,q1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,K1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,sb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ab=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ob=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ub=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,db=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ab=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Rb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ib=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Db=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ub=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kb=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$b=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ew=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ww=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Aw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Iw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ow=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ww=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dt={alphahash_fragment:F1,alphahash_pars_fragment:O1,alphamap_fragment:k1,alphamap_pars_fragment:B1,alphatest_fragment:z1,alphatest_pars_fragment:V1,aomap_fragment:H1,aomap_pars_fragment:G1,batching_pars_vertex:W1,batching_vertex:j1,begin_vertex:X1,beginnormal_vertex:$1,bsdfs:Y1,iridescence_fragment:q1,bumpmap_pars_fragment:K1,clipping_planes_fragment:Z1,clipping_planes_pars_fragment:J1,clipping_planes_pars_vertex:Q1,clipping_planes_vertex:eb,color_fragment:tb,color_pars_fragment:nb,color_pars_vertex:ib,color_vertex:rb,common:sb,cube_uv_reflection_fragment:ab,defaultnormal_vertex:ob,displacementmap_pars_vertex:lb,displacementmap_vertex:cb,emissivemap_fragment:ub,emissivemap_pars_fragment:db,colorspace_fragment:fb,colorspace_pars_fragment:hb,envmap_fragment:pb,envmap_common_pars_fragment:mb,envmap_pars_fragment:gb,envmap_pars_vertex:vb,envmap_physical_pars_fragment:Rb,envmap_vertex:xb,fog_vertex:_b,fog_pars_vertex:yb,fog_fragment:Sb,fog_pars_fragment:Mb,gradientmap_pars_fragment:Eb,lightmap_pars_fragment:bb,lights_lambert_fragment:wb,lights_lambert_pars_fragment:Tb,lights_pars_begin:Ab,lights_toon_fragment:Cb,lights_toon_pars_fragment:Pb,lights_phong_fragment:Nb,lights_phong_pars_fragment:Lb,lights_physical_fragment:Ib,lights_physical_pars_fragment:Db,lights_fragment_begin:Ub,lights_fragment_maps:Fb,lights_fragment_end:Ob,lightprobes_pars_fragment:kb,logdepthbuf_fragment:Bb,logdepthbuf_pars_fragment:zb,logdepthbuf_pars_vertex:Vb,logdepthbuf_vertex:Hb,map_fragment:Gb,map_pars_fragment:Wb,map_particle_fragment:jb,map_particle_pars_fragment:Xb,metalnessmap_fragment:$b,metalnessmap_pars_fragment:Yb,morphinstance_vertex:qb,morphcolor_vertex:Kb,morphnormal_vertex:Zb,morphtarget_pars_vertex:Jb,morphtarget_vertex:Qb,normal_fragment_begin:ew,normal_fragment_maps:tw,normal_pars_fragment:nw,normal_pars_vertex:iw,normal_vertex:rw,normalmap_pars_fragment:sw,clearcoat_normal_fragment_begin:aw,clearcoat_normal_fragment_maps:ow,clearcoat_pars_fragment:lw,iridescence_pars_fragment:cw,opaque_fragment:uw,packing:dw,premultiplied_alpha_fragment:fw,project_vertex:hw,dithering_fragment:pw,dithering_pars_fragment:mw,roughnessmap_fragment:gw,roughnessmap_pars_fragment:vw,shadowmap_pars_fragment:xw,shadowmap_pars_vertex:_w,shadowmap_vertex:yw,shadowmask_pars_fragment:Sw,skinbase_vertex:Mw,skinning_pars_vertex:Ew,skinning_vertex:bw,skinnormal_vertex:ww,specularmap_fragment:Tw,specularmap_pars_fragment:Aw,tonemapping_fragment:Rw,tonemapping_pars_fragment:Cw,transmission_fragment:Pw,transmission_pars_fragment:Nw,uv_pars_fragment:Lw,uv_pars_vertex:Iw,uv_vertex:Dw,worldpos_vertex:Uw,background_vert:Fw,background_frag:Ow,backgroundCube_vert:kw,backgroundCube_frag:Bw,cube_vert:zw,cube_frag:Vw,depth_vert:Hw,depth_frag:Gw,distance_vert:Ww,distance_frag:jw,equirect_vert:Xw,equirect_frag:$w,linedashed_vert:Yw,linedashed_frag:qw,meshbasic_vert:Kw,meshbasic_frag:Zw,meshlambert_vert:Jw,meshlambert_frag:Qw,meshmatcap_vert:eT,meshmatcap_frag:tT,meshnormal_vert:nT,meshnormal_frag:iT,meshphong_vert:rT,meshphong_frag:sT,meshphysical_vert:aT,meshphysical_frag:oT,meshtoon_vert:lT,meshtoon_frag:cT,points_vert:uT,points_frag:dT,shadow_vert:fT,shadow_frag:hT,sprite_vert:pT,sprite_frag:mT},Xe={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},nr={basic:{uniforms:ni([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:ni([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:ni([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:ni([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:ni([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:ni([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:ni([Xe.points,Xe.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:ni([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:ni([Xe.common,Xe.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:ni([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:ni([Xe.sprite,Xe.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distance:{uniforms:ni([Xe.common,Xe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distance_vert,fragmentShader:Dt.distance_frag},shadow:{uniforms:ni([Xe.lights,Xe.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};nr.physical={uniforms:ni([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const Oc={r:0,b:0,g:0},gT=new Ot,Bx=new Nt;Bx.set(-1,0,0,0,1,0,0,0,1);function vT(s,e,t,i,a,o){const c=new Ht(0);let d=a===!0?0:1,h,f,m=null,g=0,v=null;function _(A){let P=A.isScene===!0?A.background:null;if(P&&P.isTexture){const I=A.backgroundBlurriness>0;P=e.get(P,I)}return P}function M(A){let P=!1;const I=_(A);I===null?y(c,d):I&&I.isColor&&(y(I,1),P=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?t.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(A,P){const I=_(P);I&&(I.isCubeTexture||I.mapping===du)?(f===void 0&&(f=new mi(new il(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:Oa(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(k,F,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=I,f.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(gT.makeRotationFromEuler(P.backgroundRotation)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Bx),f.material.toneMapped=Wt.getTransfer(I.colorSpace)!==nn,(m!==I||g!==I.version||v!==s.toneMapping)&&(f.material.needsUpdate=!0,m=I,g=I.version,v=s.toneMapping),f.layers.enableAll(),A.unshift(f,f.geometry,f.material,0,0,null)):I&&I.isTexture&&(h===void 0&&(h=new mi(new fu(2,2),new cr({name:"BackgroundMaterial",uniforms:Oa(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=I,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=Wt.getTransfer(I.colorSpace)!==nn,I.matrixAutoUpdate===!0&&I.updateMatrix(),h.material.uniforms.uvTransform.value.copy(I.matrix),(m!==I||g!==I.version||v!==s.toneMapping)&&(h.material.needsUpdate=!0,m=I,g=I.version,v=s.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function y(A,P){A.getRGB(Oc,Dx(s)),t.buffers.color.setClear(Oc.r,Oc.g,Oc.b,P,o)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,P=1){c.set(A),d=P,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(A){d=A,y(c,d)},render:M,addToRenderList:E,dispose:S}}function xT(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=v(null);let o=a,c=!1;function d(B,Y,se,de,W){let J=!1;const K=g(B,de,se,Y);o!==K&&(o=K,f(o.object)),J=_(B,de,se,W),J&&M(B,de,se,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(J||c)&&(c=!1,I(B,Y,se,de),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function h(){return s.createVertexArray()}function f(B){return s.bindVertexArray(B)}function m(B){return s.deleteVertexArray(B)}function g(B,Y,se,de){const W=de.wireframe===!0;let J=i[Y.id];J===void 0&&(J={},i[Y.id]=J);const K=B.isInstancedMesh===!0?B.id:0;let te=J[K];te===void 0&&(te={},J[K]=te);let le=te[se.id];le===void 0&&(le={},te[se.id]=le);let D=le[W];return D===void 0&&(D=v(h()),le[W]=D),D}function v(B){const Y=[],se=[],de=[];for(let W=0;W<t;W++)Y[W]=0,se[W]=0,de[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:se,attributeDivisors:de,object:B,attributes:{},index:null}}function _(B,Y,se,de){const W=o.attributes,J=Y.attributes;let K=0;const te=se.getAttributes();for(const le in te)if(te[le].location>=0){const b=W[le];let H=J[le];if(H===void 0&&(le==="instanceMatrix"&&B.instanceMatrix&&(H=B.instanceMatrix),le==="instanceColor"&&B.instanceColor&&(H=B.instanceColor)),b===void 0||b.attribute!==H||H&&b.data!==H.data)return!0;K++}return o.attributesNum!==K||o.index!==de}function M(B,Y,se,de){const W={},J=Y.attributes;let K=0;const te=se.getAttributes();for(const le in te)if(te[le].location>=0){let b=J[le];b===void 0&&(le==="instanceMatrix"&&B.instanceMatrix&&(b=B.instanceMatrix),le==="instanceColor"&&B.instanceColor&&(b=B.instanceColor));const H={};H.attribute=b,b&&b.data&&(H.data=b.data),W[le]=H,K++}o.attributes=W,o.attributesNum=K,o.index=de}function E(){const B=o.newAttributes;for(let Y=0,se=B.length;Y<se;Y++)B[Y]=0}function y(B){S(B,0)}function S(B,Y){const se=o.newAttributes,de=o.enabledAttributes,W=o.attributeDivisors;se[B]=1,de[B]===0&&(s.enableVertexAttribArray(B),de[B]=1),W[B]!==Y&&(s.vertexAttribDivisor(B,Y),W[B]=Y)}function A(){const B=o.newAttributes,Y=o.enabledAttributes;for(let se=0,de=Y.length;se<de;se++)Y[se]!==B[se]&&(s.disableVertexAttribArray(se),Y[se]=0)}function P(B,Y,se,de,W,J,K){K===!0?s.vertexAttribIPointer(B,Y,se,W,J):s.vertexAttribPointer(B,Y,se,de,W,J)}function I(B,Y,se,de){E();const W=de.attributes,J=se.getAttributes(),K=Y.defaultAttributeValues;for(const te in J){const le=J[te];if(le.location>=0){let D=W[te];if(D===void 0&&(te==="instanceMatrix"&&B.instanceMatrix&&(D=B.instanceMatrix),te==="instanceColor"&&B.instanceColor&&(D=B.instanceColor)),D!==void 0){const b=D.normalized,H=D.itemSize,xe=e.get(D);if(xe===void 0)continue;const be=xe.buffer,Me=xe.type,ee=xe.bytesPerElement,re=Me===s.INT||Me===s.UNSIGNED_INT||D.gpuType===tp;if(D.isInterleavedBufferAttribute){const ce=D.data,ge=ce.stride,Oe=D.offset;if(ce.isInstancedInterleavedBuffer){for(let Le=0;Le<le.locationSize;Le++)S(le.location+Le,ce.meshPerAttribute);B.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Le=0;Le<le.locationSize;Le++)y(le.location+Le);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Le=0;Le<le.locationSize;Le++)P(le.location+Le,H/le.locationSize,Me,b,ge*ee,(Oe+H/le.locationSize*Le)*ee,re)}else{if(D.isInstancedBufferAttribute){for(let ce=0;ce<le.locationSize;ce++)S(le.location+ce,D.meshPerAttribute);B.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ce=0;ce<le.locationSize;ce++)y(le.location+ce);s.bindBuffer(s.ARRAY_BUFFER,be);for(let ce=0;ce<le.locationSize;ce++)P(le.location+ce,H/le.locationSize,Me,b,H*ee,H/le.locationSize*ce*ee,re)}}else if(K!==void 0){const b=K[te];if(b!==void 0)switch(b.length){case 2:s.vertexAttrib2fv(le.location,b);break;case 3:s.vertexAttrib3fv(le.location,b);break;case 4:s.vertexAttrib4fv(le.location,b);break;default:s.vertexAttrib1fv(le.location,b)}}}}A()}function k(){L();for(const B in i){const Y=i[B];for(const se in Y){const de=Y[se];for(const W in de){const J=de[W];for(const K in J)m(J[K].object),delete J[K];delete de[W]}}delete i[B]}}function F(B){if(i[B.id]===void 0)return;const Y=i[B.id];for(const se in Y){const de=Y[se];for(const W in de){const J=de[W];for(const K in J)m(J[K].object),delete J[K];delete de[W]}}delete i[B.id]}function V(B){for(const Y in i){const se=i[Y];for(const de in se){const W=se[de];if(W[B.id]===void 0)continue;const J=W[B.id];for(const K in J)m(J[K].object),delete J[K];delete W[B.id]}}}function w(B){for(const Y in i){const se=i[Y],de=B.isInstancedMesh===!0?B.id:0,W=se[de];if(W!==void 0){for(const J in W){const K=W[J];for(const te in K)m(K[te].object),delete K[te];delete W[J]}delete se[de],Object.keys(se).length===0&&delete i[Y]}}}function L(){z(),c=!0,o!==a&&(o=a,f(o.object))}function z(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:L,resetDefaultState:z,dispose:k,releaseStatesOfGeometry:F,releaseStatesOfObject:w,releaseStatesOfProgram:V,initAttributes:E,enableAttribute:y,disableUnusedAttributes:A}}function _T(s,e,t){let i;function a(h){i=h}function o(h,f){s.drawArrays(i,h,f),t.update(f,i,1)}function c(h,f,m){m!==0&&(s.drawArraysInstanced(i,h,f,m),t.update(f,i,m))}function d(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,m);let v=0;for(let _=0;_<m;_++)v+=f[_];t.update(v,i,1)}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=d}function yT(s,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(V){return!(V!==Li&&i.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const w=V===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Mi&&i.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Ni&&!w)}function h(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(ct("WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&v===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),I=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:_,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:A,maxVaryings:P,maxFragmentUniforms:I,maxSamples:k,samples:F}}function ST(s){const e=this;let t=null,i=0,a=!1,o=!1;const c=new Ls,d=new Nt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const _=g.length!==0||v||i!==0||a;return a=v,i=g.length,_},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,_){const M=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,S=s.get(g);if(!a||M===null||M.length===0||o&&!y)o?m(null):f();else{const A=o?0:i,P=A*4;let I=S.clippingState||null;h.value=I,I=m(M,v,P,_);for(let k=0;k!==P;++k)I[k]=t[k];S.clippingState=I,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,v,_,M){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=h.value,M!==!0||y===null){const S=_+E*4,A=v.matrixWorldInverse;d.getNormalMatrix(A),(y===null||y.length<S)&&(y=new Float32Array(S));for(let P=0,I=_;P!==E;++P,I+=4)c.copy(g[P]).applyMatrix4(A,d),c.normal.toArray(y,I),y[I+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}const us=4,cv=[.125,.215,.35,.446,.526,.582],Ds=20,MT=256,Uo=new _p,uv=new Ht;let Df=null,Uf=0,Ff=0,Of=!1;const ET=new Z;class dv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,o={}){const{size:c=256,position:d=ET}=o;Df=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,a,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Df,Uf,Ff),this._renderer.xr.enabled=Of,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Df=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Ff=this._renderer.getActiveMipmapLevel(),Of=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Lr,format:Li,colorSpace:Qc,depthBuffer:!1},a=fv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fv(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=bT(o)),this._blurMaterial=TT(o,e,t),this._ggxMaterial=wT(o,e,t)}return a}_compileMaterial(e){const t=new mi(new kn,e);this._renderer.compile(t,Uo)}_sceneToCubeUV(e,t,i,a,o){const h=new fi(90,1,t,i),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,_=g.toneMapping;g.getClearColor(uv),g.toneMapping=sr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(a),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mi(new il,new hp({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,y=E.material;let S=!1;const A=e.background;A?A.isColor&&(y.color.copy(A),e.background=null,S=!0):(y.color.copy(uv),S=!0);for(let P=0;P<6;P++){const I=P%3;I===0?(h.up.set(0,f[P],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+m[P],o.y,o.z)):I===1?(h.up.set(0,0,f[P]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+m[P],o.z)):(h.up.set(0,f[P],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+m[P]));const k=this._cubeSize;Ra(a,I*k,P>2?k:0,k,k),g.setRenderTarget(a),S&&g.render(E,h),g.render(e,h)}g.toneMapping=_,g.autoClear=v,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Os||e.mapping===Da;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hv());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const d=o.uniforms;d.envMap.value=e;const h=this._cubeSize;Ra(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Uo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,f=i/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),g=Math.sqrt(f*f-m*m),v=0+f*1.25,_=g*v,{_lodMax:M}=this,E=this._sizeLods[i],y=3*E*(i>M-us?i-M+us:0),S=4*(this._cubeSize-E);h.envMap.value=e.texture,h.roughness.value=_,h.mipInt.value=M-t,Ra(o,y,S,3*E,2*E),a.setRenderTarget(o),a.render(d,Uo),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=M-i,Ra(e,y,S,3*E,2*E),a.setRenderTarget(e),a.render(d,Uo)}_blur(e,t,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",o),this._halfBlur(c,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,c,d){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const m=3,g=this._lodMeshes[a];g.material=f;const v=f.uniforms,_=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*Ds-1),E=o/M,y=isFinite(o)?1+Math.floor(m*E):Ds;y>Ds&&ct(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ds}`);const S=[];let A=0;for(let V=0;V<Ds;++V){const w=V/E,L=Math.exp(-w*w/2);S.push(L),V===0?A+=L:V<y&&(A+=2*L)}for(let V=0;V<S.length;V++)S[V]=S[V]/A;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=c==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:P}=this;v.dTheta.value=M,v.mipInt.value=P-i;const I=this._sizeLods[a],k=3*I*(a>P-us?a-P+us:0),F=4*(this._cubeSize-I);Ra(t,k,F,3*I,2*I),h.setRenderTarget(t),h.render(g,Uo)}}function bT(s){const e=[],t=[],i=[];let a=s;const o=s-us+1+cv.length;for(let c=0;c<o;c++){const d=Math.pow(2,a);e.push(d);let h=1/d;c>s-us?h=cv[c-s+us-1]:c===0&&(h=0),t.push(h);const f=1/(d-2),m=-f,g=1+f,v=[m,m,g,m,g,g,m,m,g,g,m,g],_=6,M=6,E=3,y=2,S=1,A=new Float32Array(E*M*_),P=new Float32Array(y*M*_),I=new Float32Array(S*M*_);for(let F=0;F<_;F++){const V=F%3*2/3-1,w=F>2?0:-1,L=[V,w,0,V+2/3,w,0,V+2/3,w+1,0,V,w,0,V+2/3,w+1,0,V,w+1,0];A.set(L,E*M*F),P.set(v,y*M*F);const z=[F,F,F,F,F,F];I.set(z,S*M*F)}const k=new kn;k.setAttribute("position",new On(A,E)),k.setAttribute("uv",new On(P,y)),k.setAttribute("faceIndex",new On(I,S)),i.push(new mi(k,null)),a>us&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function fv(s,e,t){const i=new ar(s,e,t);return i.texture.mapping=du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ra(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function wT(s,e,t){return new cr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function TT(s,e,t){const i=new Float32Array(Ds),a=new Z(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function hv(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function pv(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class zx extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Lx(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new il(5,5,5),o=new cr({name:"CubemapFromEquirect",uniforms:Oa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:Cr});o.uniforms.tEquirect.value=t;const c=new mi(a,o),d=t.minFilter;return t.minFilter===Us&&(t.minFilter=Zn),new M1(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(o)}}function AT(s){let e=new WeakMap,t=new WeakMap,i=null;function a(v,_=!1){return v==null?null:_?c(v):o(v)}function o(v){if(v&&v.isTexture){const _=v.mapping;if(_===ef||_===tf)if(e.has(v)){const M=e.get(v).texture;return d(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const E=new zx(M.height);return E.fromEquirectangularTexture(s,v),e.set(v,E),v.addEventListener("dispose",f),d(E.texture,v.mapping)}else return null}}return v}function c(v){if(v&&v.isTexture){const _=v.mapping,M=_===ef||_===tf,E=_===Os||_===Da;if(M||E){let y=t.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return i===null&&(i=new dv(s)),y=M?i.fromEquirectangular(v,y):i.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const A=v.image;return M&&A&&A.height>0||E&&A&&h(A)?(i===null&&(i=new dv(s)),y=M?i.fromEquirectangular(v):i.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",m),y.texture):null}}}return v}function d(v,_){return _===ef?v.mapping=Os:_===tf&&(v.mapping=Da),v}function h(v){let _=0;const M=6;for(let E=0;E<M;E++)v[E]!==void 0&&_++;return _===M}function f(v){const _=v.target;_.removeEventListener("dispose",f);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function m(v){const _=v.target;_.removeEventListener("dispose",m);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:g}}function RT(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=s.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&zh("WebGLRenderer: "+i+" extension not supported."),a}}}function CT(s,e,t,i){const a={},o=new WeakMap;function c(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",c),delete a[v.id];const _=o.get(v);_&&(e.remove(_),o.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function d(g,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,t.memory.geometries++),v}function h(g){const v=g.attributes;for(const _ in v)e.update(v[_],s.ARRAY_BUFFER)}function f(g){const v=[],_=g.index,M=g.attributes.position;let E=0;if(M===void 0)return;if(_!==null){const A=_.array;E=_.version;for(let P=0,I=A.length;P<I;P+=3){const k=A[P+0],F=A[P+1],V=A[P+2];v.push(k,F,F,V,V,k)}}else{const A=M.array;E=M.version;for(let P=0,I=A.length/3-1;P<I;P+=3){const k=P+0,F=P+1,V=P+2;v.push(k,F,F,V,V,k)}}const y=new(M.count>=65535?Tx:wx)(v,1);y.version=E;const S=o.get(g);S&&e.remove(S),o.set(g,y)}function m(g){const v=o.get(g);if(v){const _=g.index;_!==null&&v.version<_.version&&f(g)}else f(g);return o.get(g)}return{get:d,update:h,getWireframeAttribute:m}}function PT(s,e,t){let i;function a(g){i=g}let o,c;function d(g){o=g.type,c=g.bytesPerElement}function h(g,v){s.drawElements(i,v,o,g*c),t.update(v,i,1)}function f(g,v,_){_!==0&&(s.drawElementsInstanced(i,v,o,g*c,_),t.update(v,i,_))}function m(g,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,o,g,0,_);let E=0;for(let y=0;y<_;y++)E+=v[y];t.update(E,i,1)}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=f,this.renderMultiDraw=m}function NT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(o/3);break;case s.LINES:t.lines+=d*(o/2);break;case s.LINE_STRIP:t.lines+=d*(o-1);break;case s.LINE_LOOP:t.lines+=d*o;break;case s.POINTS:t.points+=d*o;break;default:gt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function LT(s,e,t){const i=new WeakMap,a=new ln;function o(c,d,h){const f=c.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=m!==void 0?m.length:0;let v=i.get(d);if(v===void 0||v.count!==g){let L=function(){V.dispose(),i.delete(d),d.removeEventListener("dispose",L)};v!==void 0&&v.texture.dispose();const _=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let P=0;_===!0&&(P=1),M===!0&&(P=2),E===!0&&(P=3);let I=d.attributes.position.count*P,k=1;I>e.maxTextureSize&&(k=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*k*4*g),V=new Ex(F,I,k,g);V.type=Ni,V.needsUpdate=!0;const w=P*4;for(let z=0;z<g;z++){const B=y[z],Y=S[z],se=A[z],de=I*k*4*z;for(let W=0;W<B.count;W++){const J=W*w;_===!0&&(a.fromBufferAttribute(B,W),F[de+J+0]=a.x,F[de+J+1]=a.y,F[de+J+2]=a.z,F[de+J+3]=0),M===!0&&(a.fromBufferAttribute(Y,W),F[de+J+4]=a.x,F[de+J+5]=a.y,F[de+J+6]=a.z,F[de+J+7]=0),E===!0&&(a.fromBufferAttribute(se,W),F[de+J+8]=a.x,F[de+J+9]=a.y,F[de+J+10]=a.z,F[de+J+11]=se.itemSize===4?a.w:1)}}v={count:g,texture:V,size:new Lt(I,k)},i.set(d,v),d.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let _=0;for(let E=0;E<f.length;E++)_+=f[E];const M=d.morphTargetsRelative?1:1-_;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",f)}h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:o}}function IT(s,e,t,i,a){let o=new WeakMap;function c(f){const m=a.render.frame,g=f.geometry,v=e.get(f,g);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==m&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,m))),f.isSkinnedMesh){const _=f.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return v}function d(){o=new WeakMap}function h(f){const m=f.target;m.removeEventListener("dispose",h),i.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:d}}const DT={[cx]:"LINEAR_TONE_MAPPING",[ux]:"REINHARD_TONE_MAPPING",[dx]:"CINEON_TONE_MAPPING",[ep]:"ACES_FILMIC_TONE_MAPPING",[hx]:"AGX_TONE_MAPPING",[px]:"NEUTRAL_TONE_MAPPING",[fx]:"CUSTOM_TONE_MAPPING"};function UT(s,e,t,i,a){const o=new ar(e,t,{type:s,depthBuffer:i,stencilBuffer:a,depthTexture:i?new Fa(e,t):void 0}),c=new ar(e,t,{type:Lr,depthBuffer:!1,stencilBuffer:!1}),d=new kn;d.setAttribute("position",new pi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new pi([0,2,0,0,2,0],2));const h=new i1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new mi(d,h),m=new _p(-1,1,1,-1,0,1);let g=null,v=null,_=!1,M,E=null,y=[],S=!1;this.setSize=function(A,P){o.setSize(A,P),c.setSize(A,P);for(let I=0;I<y.length;I++){const k=y[I];k.setSize&&k.setSize(A,P)}},this.setEffects=function(A){y=A,S=y.length>0&&y[0].isRenderPass===!0;const P=o.width,I=o.height;for(let k=0;k<y.length;k++){const F=y[k];F.setSize&&F.setSize(P,I)}},this.begin=function(A,P){if(_||A.toneMapping===sr&&y.length===0)return!1;if(E=P,P!==null){const I=P.width,k=P.height;(o.width!==I||o.height!==k)&&this.setSize(I,k)}return S===!1&&A.setRenderTarget(o),M=A.toneMapping,A.toneMapping=sr,!0},this.hasRenderPass=function(){return S},this.end=function(A,P){A.toneMapping=M,_=!0;let I=o,k=c;for(let F=0;F<y.length;F++){const V=y[F];if(V.enabled!==!1&&(V.render(A,k,I,P),V.needsSwap!==!1)){const w=I;I=k,k=w}}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,h.defines={},Wt.getTransfer(g)===nn&&(h.defines.SRGB_TRANSFER="");const F=DT[v];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,A.setRenderTarget(E),A.render(f,m),E=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),c.dispose(),d.dispose(),h.dispose()}}const Vx=new Wn,Wh=new Fa(1,1),Hx=new Ex,Gx=new AE,Wx=new Lx,mv=[],gv=[],vv=new Float32Array(16),xv=new Float32Array(9),_v=new Float32Array(4);function Ha(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let o=mv[a];if(o===void 0&&(o=new Float32Array(a),mv[a]=o),e!==0){i.toArray(o,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(o,d)}return o}function Nn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Ln(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function gu(s,e){let t=gv[e];t===void 0&&(t=new Int32Array(e),gv[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function FT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function OT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2fv(this.addr,e),Ln(t,e)}}function kT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nn(t,e))return;s.uniform3fv(this.addr,e),Ln(t,e)}}function BT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4fv(this.addr,e),Ln(t,e)}}function zT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ln(t,e)}else{if(Nn(t,i))return;_v.set(i),s.uniformMatrix2fv(this.addr,!1,_v),Ln(t,i)}}function VT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ln(t,e)}else{if(Nn(t,i))return;xv.set(i),s.uniformMatrix3fv(this.addr,!1,xv),Ln(t,i)}}function HT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ln(t,e)}else{if(Nn(t,i))return;vv.set(i),s.uniformMatrix4fv(this.addr,!1,vv),Ln(t,i)}}function GT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function WT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2iv(this.addr,e),Ln(t,e)}}function jT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;s.uniform3iv(this.addr,e),Ln(t,e)}}function XT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4iv(this.addr,e),Ln(t,e)}}function $T(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function YT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2uiv(this.addr,e),Ln(t,e)}}function qT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;s.uniform3uiv(this.addr,e),Ln(t,e)}}function KT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4uiv(this.addr,e),Ln(t,e)}}function ZT(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let o;this.type===s.SAMPLER_2D_SHADOW?(Wh.compareFunction=t.isReversedDepthBuffer()?cp:lp,o=Wh):o=Vx,t.setTexture2D(e||o,a)}function JT(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Gx,a)}function QT(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Wx,a)}function eA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Hx,a)}function tA(s){switch(s){case 5126:return FT;case 35664:return OT;case 35665:return kT;case 35666:return BT;case 35674:return zT;case 35675:return VT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return WT;case 35668:case 35672:return jT;case 35669:case 35673:return XT;case 5125:return $T;case 36294:return YT;case 36295:return qT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return QT;case 36289:case 36303:case 36311:case 36292:return eA}}function nA(s,e){s.uniform1fv(this.addr,e)}function iA(s,e){const t=Ha(e,this.size,2);s.uniform2fv(this.addr,t)}function rA(s,e){const t=Ha(e,this.size,3);s.uniform3fv(this.addr,t)}function sA(s,e){const t=Ha(e,this.size,4);s.uniform4fv(this.addr,t)}function aA(s,e){const t=Ha(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function oA(s,e){const t=Ha(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function lA(s,e){const t=Ha(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function cA(s,e){s.uniform1iv(this.addr,e)}function uA(s,e){s.uniform2iv(this.addr,e)}function dA(s,e){s.uniform3iv(this.addr,e)}function fA(s,e){s.uniform4iv(this.addr,e)}function hA(s,e){s.uniform1uiv(this.addr,e)}function pA(s,e){s.uniform2uiv(this.addr,e)}function mA(s,e){s.uniform3uiv(this.addr,e)}function gA(s,e){s.uniform4uiv(this.addr,e)}function vA(s,e,t){const i=this.cache,a=e.length,o=gu(t,a);Nn(i,o)||(s.uniform1iv(this.addr,o),Ln(i,o));let c;this.type===s.SAMPLER_2D_SHADOW?c=Wh:c=Vx;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||c,o[d])}function xA(s,e,t){const i=this.cache,a=e.length,o=gu(t,a);Nn(i,o)||(s.uniform1iv(this.addr,o),Ln(i,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Gx,o[c])}function _A(s,e,t){const i=this.cache,a=e.length,o=gu(t,a);Nn(i,o)||(s.uniform1iv(this.addr,o),Ln(i,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Wx,o[c])}function yA(s,e,t){const i=this.cache,a=e.length,o=gu(t,a);Nn(i,o)||(s.uniform1iv(this.addr,o),Ln(i,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Hx,o[c])}function SA(s){switch(s){case 5126:return nA;case 35664:return iA;case 35665:return rA;case 35666:return sA;case 35674:return aA;case 35675:return oA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return dA;case 35669:case 35673:return fA;case 5125:return hA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return vA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return yA}}class MA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tA(t.type)}}class EA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SA(t.type)}}class bA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const d=a[o];d.setValue(e,t[d.id],i)}}}const kf=/(\w+)(\])?(\[|\.)?/g;function yv(s,e){s.seq.push(e),s.map[e.id]=e}function wA(s,e,t){const i=s.name,a=i.length;for(kf.lastIndex=0;;){const o=kf.exec(i),c=kf.lastIndex;let d=o[1];const h=o[2]==="]",f=o[3];if(h&&(d=d|0),f===void 0||f==="["&&c+2===a){yv(t,f===void 0?new MA(d,s,e):new EA(d,s,e));break}else{let g=t.map[d];g===void 0&&(g=new bA(d),yv(t,g)),t=g}}}class $c{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const d=e.getActiveUniform(t,c),h=e.getUniformLocation(t,d.name);wA(d,h,this)}const a=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,c=t.length;o!==c;++o){const d=t[o],h=i[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function Sv(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const TA=37297;let AA=0;function RA(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const d=c+1;i.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return i.join(`
`)}const Mv=new Nt;function CA(s){Wt._getMatrix(Mv,Wt.workingColorSpace,s);const e=`mat3( ${Mv.elements.map(t=>t.toFixed(4))} )`;switch(Wt.getTransfer(s)){case eu:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ev(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=(s.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+RA(s.getShaderSource(e),d)}else return o}function PA(s,e){const t=CA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const NA={[cx]:"Linear",[ux]:"Reinhard",[dx]:"Cineon",[ep]:"ACESFilmic",[hx]:"AgX",[px]:"Neutral",[fx]:"Custom"};function LA(s,e){const t=NA[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const kc=new Z;function IA(){Wt.getLuminanceCoefficients(kc);const s=kc.x.toFixed(4),e=kc.y.toFixed(4),t=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function UA(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function FA(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(e,a),c=o.name;let d=1;o.type===s.FLOAT_MAT2&&(d=2),o.type===s.FLOAT_MAT3&&(d=3),o.type===s.FLOAT_MAT4&&(d=4),t[c]={type:o.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function Ho(s){return s!==""}function bv(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OA=/^[ \t]*#include +<([\w\d./]+)>/gm;function jh(s){return s.replace(OA,BA)}const kA=new Map;function BA(s,e){let t=Dt[e];if(t===void 0){const i=kA.get(e);if(i!==void 0)t=Dt[i],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jh(t)}const zA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tv(s){return s.replace(zA,VA)}function VA(s,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Av(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const HA={[Vc]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function GA(s){return HA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WA={[Os]:"ENVMAP_TYPE_CUBE",[Da]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function jA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":WA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const XA={[Da]:"ENVMAP_MODE_REFRACTION"};function $A(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":XA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const YA={[lx]:"ENVMAP_BLENDING_MULTIPLY",[HM]:"ENVMAP_BLENDING_MIX",[GM]:"ENVMAP_BLENDING_ADD"};function qA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":YA[s.combine]||"ENVMAP_BLENDING_NONE"}function KA(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ZA(s,e,t,i){const a=s.getContext(),o=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=GA(t),f=jA(t),m=$A(t),g=qA(t),v=KA(t),_=DA(t),M=UA(o),E=a.createProgram();let y,S,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ho).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ho).join(`
`),S.length>0&&(S+=`
`)):(y=[Av(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),S=[Av(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?Dt.tonemapping_pars_fragment:"",t.toneMapping!==sr?LA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,PA("linearToOutputTexel",t.outputColorSpace),IA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ho).join(`
`)),c=jh(c),c=bv(c,t),c=wv(c,t),d=jh(d),d=bv(d,t),d=wv(d,t),c=Tv(c),d=Tv(d),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===x0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===x0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=A+y+c,I=A+S+d,k=Sv(a,a.VERTEX_SHADER,P),F=Sv(a,a.FRAGMENT_SHADER,I);a.attachShader(E,k),a.attachShader(E,F),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function V(B){if(s.debug.checkShaderErrors){const Y=a.getProgramInfoLog(E)||"",se=a.getShaderInfoLog(k)||"",de=a.getShaderInfoLog(F)||"",W=Y.trim(),J=se.trim(),K=de.trim();let te=!0,le=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,k,F);else{const D=Ev(a,k,"vertex"),b=Ev(a,F,"fragment");gt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+D+`
`+b)}else W!==""?ct("WebGLProgram: Program Info Log:",W):(J===""||K==="")&&(le=!1);le&&(B.diagnostics={runnable:te,programLog:W,vertexShader:{log:J,prefix:y},fragmentShader:{log:K,prefix:S}})}a.deleteShader(k),a.deleteShader(F),w=new $c(a,E),L=FA(a,E)}let w;this.getUniforms=function(){return w===void 0&&V(this),w};let L;this.getAttributes=function(){return L===void 0&&V(this),L};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=a.getProgramParameter(E,TA)),z},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=k,this.fragmentShader=F,this}let JA=0;class QA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new eR(e),t.set(e,i)),i}}class eR{constructor(e){this.id=JA++,this.code=e,this.usedTimes=0}}function tR(s){return s===ks||s===Kc||s===Zc}function nR(s,e,t,i,a,o){const c=new fp,d=new QA,h=new Set,f=[],m=new Map,g=i.logarithmicDepthBuffer;let v=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function E(w,L,z,B,Y,se){const de=B.fog,W=Y.geometry,J=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,K=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,te=e.get(w.envMap||J,K),le=te&&te.mapping===du?te.image.height:null,D=_[w.type];w.precision!==null&&(v=i.getMaxPrecision(w.precision),v!==w.precision&&ct("WebGLProgram.getParameters:",w.precision,"not supported, using",v,"instead."));const b=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,H=b!==void 0?b.length:0;let xe=0;W.morphAttributes.position!==void 0&&(xe=1),W.morphAttributes.normal!==void 0&&(xe=2),W.morphAttributes.color!==void 0&&(xe=3);let be,Me,ee,re;if(D){const St=nr[D];be=St.vertexShader,Me=St.fragmentShader}else be=w.vertexShader,Me=w.fragmentShader,d.update(w),ee=d.getVertexShaderID(w),re=d.getFragmentShaderID(w);const ce=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Oe=Y.isInstancedMesh===!0,Le=Y.isBatchedMesh===!0,ut=!!w.map,Qe=!!w.matcap,We=!!te,vt=!!w.aoMap,dt=!!w.lightMap,It=!!w.bumpMap,Ut=!!w.normalMap,sn=!!w.displacementMap,X=!!w.emissiveMap,Kt=!!w.metalnessMap,wt=!!w.roughnessMap,$t=w.anisotropy>0,Ge=w.clearcoat>0,Jt=w.dispersion>0,U=w.iridescence>0,T=w.sheen>0,ne=w.transmission>0,ye=$t&&!!w.anisotropyMap,we=Ge&&!!w.clearcoatMap,Ne=Ge&&!!w.clearcoatNormalMap,ke=Ge&&!!w.clearcoatRoughnessMap,ve=U&&!!w.iridescenceMap,Se=U&&!!w.iridescenceThicknessMap,je=T&&!!w.sheenColorMap,$e=T&&!!w.sheenRoughnessMap,Be=!!w.specularMap,De=!!w.specularColorMap,xt=!!w.specularIntensityMap,yt=ne&&!!w.transmissionMap,Tt=ne&&!!w.thicknessMap,$=!!w.gradientMap,Ue=!!w.alphaMap,_e=w.alphaTest>0,Ye=!!w.alphaHash,ze=!!w.extensions;let Ae=sr;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const tt={shaderID:D,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:Me,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:v,batching:Le,batchingColor:Le&&Y._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&Y.instanceColor!==null,instancingMorph:Oe&&Y.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ut,matcap:Qe,envMap:We,envMapMode:We&&te.mapping,envMapCubeUVHeight:le,aoMap:vt,lightMap:dt,bumpMap:It,normalMap:Ut,displacementMap:sn,emissiveMap:X,normalMapObjectSpace:Ut&&w.normalMapType===YM,normalMapTangentSpace:Ut&&w.normalMapType===kh,packedNormalMap:Ut&&w.normalMapType===kh&&tR(w.normalMap.format),metalnessMap:Kt,roughnessMap:wt,anisotropy:$t,anisotropyMap:ye,clearcoat:Ge,clearcoatMap:we,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ke,dispersion:Jt,iridescence:U,iridescenceMap:ve,iridescenceThicknessMap:Se,sheen:T,sheenColorMap:je,sheenRoughnessMap:$e,specularMap:Be,specularColorMap:De,specularIntensityMap:xt,transmission:ne,transmissionMap:yt,thicknessMap:Tt,gradientMap:$,opaque:w.transparent===!1&&w.blending===Na&&w.alphaToCoverage===!1,alphaMap:Ue,alphaTest:_e,alphaHash:Ye,combine:w.combine,mapUv:ut&&M(w.map.channel),aoMapUv:vt&&M(w.aoMap.channel),lightMapUv:dt&&M(w.lightMap.channel),bumpMapUv:It&&M(w.bumpMap.channel),normalMapUv:Ut&&M(w.normalMap.channel),displacementMapUv:sn&&M(w.displacementMap.channel),emissiveMapUv:X&&M(w.emissiveMap.channel),metalnessMapUv:Kt&&M(w.metalnessMap.channel),roughnessMapUv:wt&&M(w.roughnessMap.channel),anisotropyMapUv:ye&&M(w.anisotropyMap.channel),clearcoatMapUv:we&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:je&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:$e&&M(w.sheenRoughnessMap.channel),specularMapUv:Be&&M(w.specularMap.channel),specularColorMapUv:De&&M(w.specularColorMap.channel),specularIntensityMapUv:xt&&M(w.specularIntensityMap.channel),transmissionMapUv:yt&&M(w.transmissionMap.channel),thicknessMapUv:Tt&&M(w.thicknessMap.channel),alphaMapUv:Ue&&M(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ut||$t),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(ut||Ue),fog:!!de,useFog:w.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&Ut===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ge,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:xe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ut&&w.map.isVideoTexture===!0&&Wt.getTransfer(w.map.colorSpace)===nn,decodeVideoTextureEmissive:X&&w.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(w.emissiveMap.colorSpace)===nn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ir,flipSided:w.side===hi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ze&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&w.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tt.vertexUv1s=h.has(1),tt.vertexUv2s=h.has(2),tt.vertexUv3s=h.has(3),h.clear(),tt}function y(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)L.push(z),L.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(S(L,w),A(L,w),L.push(s.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function S(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function A(w,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),L.packedNormalMap&&c.enable(22),L.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),L.numLightProbeGrids>0&&c.enable(22),w.push(c.mask)}function P(w){const L=_[w.type];let z;if(L){const B=nr[L];z=e1.clone(B.uniforms)}else z=w.uniforms;return z}function I(w,L){let z=m.get(L);return z!==void 0?++z.usedTimes:(z=new ZA(s,L,w,a),f.push(z),m.set(L,z)),z}function k(w){if(--w.usedTimes===0){const L=f.indexOf(w);f[L]=f[f.length-1],f.pop(),m.delete(w.cacheKey),w.destroy()}}function F(w){d.remove(w)}function V(){d.dispose()}return{getParameters:E,getProgramCacheKey:y,getUniforms:P,acquireProgram:I,releaseProgram:k,releaseShaderCache:F,programs:f,dispose:V}}function iR(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function i(c){s.delete(c)}function a(c,d,h){s.get(c)[d]=h}function o(){s=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function rR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Rv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Cv(){const s=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function c(v){let _=0;return v.isInstancedMesh&&(_+=2),v.isSkinnedMesh&&(_+=1),_}function d(v,_,M,E,y,S){let A=s[e];return A===void 0?(A={id:v.id,object:v,geometry:_,material:M,materialVariant:c(v),groupOrder:E,renderOrder:v.renderOrder,z:y,group:S},s[e]=A):(A.id=v.id,A.object=v,A.geometry=_,A.material=M,A.materialVariant=c(v),A.groupOrder=E,A.renderOrder=v.renderOrder,A.z=y,A.group=S),e++,A}function h(v,_,M,E,y,S){const A=d(v,_,M,E,y,S);M.transmission>0?i.push(A):M.transparent===!0?a.push(A):t.push(A)}function f(v,_,M,E,y,S){const A=d(v,_,M,E,y,S);M.transmission>0?i.unshift(A):M.transparent===!0?a.unshift(A):t.unshift(A)}function m(v,_){t.length>1&&t.sort(v||rR),i.length>1&&i.sort(_||Rv),a.length>1&&a.sort(_||Rv)}function g(){for(let v=e,_=s.length;v<_;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:h,unshift:f,finish:g,sort:m}}function sR(){let s=new WeakMap;function e(i,a){const o=s.get(i);let c;return o===void 0?(c=new Cv,s.set(i,[c])):a>=o.length?(c=new Cv,o.push(c)):c=o[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function aR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Ht};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":t={color:new Ht,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function oR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let lR=0;function cR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function uR(s){const e=new aR,t=oR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new Z);const a=new Z,o=new Ot,c=new Ot;function d(f){let m=0,g=0,v=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let _=0,M=0,E=0,y=0,S=0,A=0,P=0,I=0,k=0,F=0,V=0;f.sort(cR);for(let L=0,z=f.length;L<z;L++){const B=f[L],Y=B.color,se=B.intensity,de=B.distance;let W=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ks?W=B.shadow.map.texture:W=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)m+=Y.r*se,g+=Y.g*se,v+=Y.b*se;else if(B.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(B.sh.coefficients[J],se);V++}else if(B.isDirectionalLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,te=t.get(B);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,i.directionalShadow[_]=te,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=B.shadow.matrix,A++}i.directional[_]=J,_++}else if(B.isSpotLight){const J=e.get(B);J.position.setFromMatrixPosition(B.matrixWorld),J.color.copy(Y).multiplyScalar(se),J.distance=de,J.coneCos=Math.cos(B.angle),J.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),J.decay=B.decay,i.spot[E]=J;const K=B.shadow;if(B.map&&(i.spotLightMap[k]=B.map,k++,K.updateMatrices(B),B.castShadow&&F++),i.spotLightMatrix[E]=K.matrix,B.castShadow){const te=t.get(B);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,i.spotShadow[E]=te,i.spotShadowMap[E]=W,I++}E++}else if(B.isRectAreaLight){const J=e.get(B);J.color.copy(Y).multiplyScalar(se),J.halfWidth.set(B.width*.5,0,0),J.halfHeight.set(0,B.height*.5,0),i.rectArea[y]=J,y++}else if(B.isPointLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),J.distance=B.distance,J.decay=B.decay,B.castShadow){const K=B.shadow,te=t.get(B);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,i.pointShadow[M]=te,i.pointShadowMap[M]=W,i.pointShadowMatrix[M]=B.shadow.matrix,P++}i.point[M]=J,M++}else if(B.isHemisphereLight){const J=e.get(B);J.skyColor.copy(B.color).multiplyScalar(se),J.groundColor.copy(B.groundColor).multiplyScalar(se),i.hemi[S]=J,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=v;const w=i.hash;(w.directionalLength!==_||w.pointLength!==M||w.spotLength!==E||w.rectAreaLength!==y||w.hemiLength!==S||w.numDirectionalShadows!==A||w.numPointShadows!==P||w.numSpotShadows!==I||w.numSpotMaps!==k||w.numLightProbes!==V)&&(i.directional.length=_,i.spot.length=E,i.rectArea.length=y,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=I+k-F,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=V,w.directionalLength=_,w.pointLength=M,w.spotLength=E,w.rectAreaLength=y,w.hemiLength=S,w.numDirectionalShadows=A,w.numPointShadows=P,w.numSpotShadows=I,w.numSpotMaps=k,w.numLightProbes=V,i.version=lR++)}function h(f,m){let g=0,v=0,_=0,M=0,E=0;const y=m.matrixWorldInverse;for(let S=0,A=f.length;S<A;S++){const P=f[S];if(P.isDirectionalLight){const I=i.directional[g];I.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(y),g++}else if(P.isSpotLight){const I=i.spot[_];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(y),_++}else if(P.isRectAreaLight){const I=i.rectArea[M];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(y),c.identity(),o.copy(P.matrixWorld),o.premultiply(y),c.extractRotation(o),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),I.halfWidth.applyMatrix4(c),I.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const I=i.point[v];I.position.setFromMatrixPosition(P.matrixWorld),I.position.applyMatrix4(y),v++}else if(P.isHemisphereLight){const I=i.hemi[E];I.direction.setFromMatrixPosition(P.matrixWorld),I.direction.transformDirection(y),E++}}}return{setup:d,setupView:h,state:i}}function Pv(s){const e=new uR(s),t=[],i=[],a=[];function o(v){g.camera=v,t.length=0,i.length=0,a.length=0}function c(v){t.push(v)}function d(v){i.push(v)}function h(v){a.push(v)}function f(){e.setup(t)}function m(v){e.setupView(t,v)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:f,setupLightsView:m,pushLight:c,pushShadow:d,pushLightProbeGrid:h}}function dR(s){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let d;return c===void 0?(d=new Pv(s),e.set(a,[d])):o>=c.length?(d=new Pv(s),c.push(d)):d=c[o],d}function i(){e=new WeakMap}return{get:t,dispose:i}}const fR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pR=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],mR=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Nv=new Ot,Fo=new Z,Bf=new Z;function gR(s,e,t){let i=new mp;const a=new Lt,o=new Lt,c=new ln,d=new r1,h=new s1,f={},m=t.maxTextureSize,g={[ds]:hi,[hi]:ds,[ir]:ir},v=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:fR,fragmentShader:hR}),_=v.clone();_.defines.HORIZONTAL_PASS=1;const M=new kn;M.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new mi(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let S=this.type;this.render=function(F,V,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;this.type===EM&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vc);const L=s.getRenderTarget(),z=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(Cr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const se=S!==this.type;se&&V.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(W=>W.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,W=F.length;de<W;de++){const J=F[de],K=J.shadow;if(K===void 0){ct("WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;a.copy(K.mapSize);const te=K.getFrameExtents();a.multiply(te),o.copy(K.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(o.x=Math.floor(m/te.x),a.x=o.x*te.x,K.mapSize.x=o.x),a.y>m&&(o.y=Math.floor(m/te.y),a.y=o.y*te.y,K.mapSize.y=o.y));const le=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=le,K.map===null||se===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===zo){if(J.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new ar(a.x,a.y,{format:ks,type:Lr,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),K.map.texture.name=J.name+".shadowMap",K.map.depthTexture=new Fa(a.x,a.y,Ni),K.map.depthTexture.name=J.name+".shadowMapDepth",K.map.depthTexture.format=Ir,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Gn,K.map.depthTexture.magFilter=Gn}else J.isPointLight?(K.map=new zx(a.x),K.map.depthTexture=new JE(a.x,lr)):(K.map=new ar(a.x,a.y),K.map.depthTexture=new Fa(a.x,a.y,lr)),K.map.depthTexture.name=J.name+".shadowMap",K.map.depthTexture.format=Ir,this.type===Vc?(K.map.depthTexture.compareFunction=le?cp:lp,K.map.depthTexture.minFilter=Zn,K.map.depthTexture.magFilter=Zn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Gn,K.map.depthTexture.magFilter=Gn);K.camera.updateProjectionMatrix()}const D=K.map.isWebGLCubeRenderTarget?6:1;for(let b=0;b<D;b++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,b),s.clear();else{b===0&&(s.setRenderTarget(K.map),s.clear());const H=K.getViewport(b);c.set(o.x*H.x,o.y*H.y,o.x*H.z,o.y*H.w),Y.viewport(c)}if(J.isPointLight){const H=K.camera,xe=K.matrix,be=J.distance||H.far;be!==H.far&&(H.far=be,H.updateProjectionMatrix()),Fo.setFromMatrixPosition(J.matrixWorld),H.position.copy(Fo),Bf.copy(H.position),Bf.add(pR[b]),H.up.copy(mR[b]),H.lookAt(Bf),H.updateMatrixWorld(),xe.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Nv.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Nv,H.coordinateSystem,H.reversedDepth)}else K.updateMatrices(J);i=K.getFrustum(),I(V,w,K.camera,J,this.type)}K.isPointLightShadow!==!0&&this.type===zo&&A(K,w),K.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(L,z,B)};function A(F,V){const w=e.update(E);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,_.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,_.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ar(a.x,a.y,{format:ks,type:Lr})),v.uniforms.shadow_pass.value=F.map.depthTexture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(V,null,w,v,E,null),_.uniforms.shadow_pass.value=F.mapPass.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(V,null,w,_,E,null)}function P(F,V,w,L){let z=null;const B=w.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)z=B;else if(z=w.isPointLight===!0?h:d,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const Y=z.uuid,se=V.uuid;let de=f[Y];de===void 0&&(de={},f[Y]=de);let W=de[se];W===void 0&&(W=z.clone(),de[se]=W,V.addEventListener("dispose",k)),z=W}if(z.visible=V.visible,z.wireframe=V.wireframe,L===zo?z.side=V.shadowSide!==null?V.shadowSide:V.side:z.side=V.shadowSide!==null?V.shadowSide:g[V.side],z.alphaMap=V.alphaMap,z.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,z.map=V.map,z.clipShadows=V.clipShadows,z.clippingPlanes=V.clippingPlanes,z.clipIntersection=V.clipIntersection,z.displacementMap=V.displacementMap,z.displacementScale=V.displacementScale,z.displacementBias=V.displacementBias,z.wireframeLinewidth=V.wireframeLinewidth,z.linewidth=V.linewidth,w.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const Y=s.properties.get(z);Y.light=w}return z}function I(F,V,w,L,z){if(F.visible===!1)return;if(F.layers.test(V.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&z===zo)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,F.matrixWorld);const se=e.update(F),de=F.material;if(Array.isArray(de)){const W=se.groups;for(let J=0,K=W.length;J<K;J++){const te=W[J],le=de[te.materialIndex];if(le&&le.visible){const D=P(F,le,L,z);F.onBeforeShadow(s,F,V,w,se,D,te),s.renderBufferDirect(w,null,se,D,F,te),F.onAfterShadow(s,F,V,w,se,D,te)}}}else if(de.visible){const W=P(F,de,L,z);F.onBeforeShadow(s,F,V,w,se,W,null),s.renderBufferDirect(w,null,se,W,F,null),F.onAfterShadow(s,F,V,w,se,W,null)}}const Y=F.children;for(let se=0,de=Y.length;se<de;se++)I(Y[se],V,w,L,z)}function k(F){F.target.removeEventListener("dispose",k);for(const w in f){const L=f[w],z=F.target.uuid;z in L&&(L[z].dispose(),delete L[z])}}}function vR(s,e){function t(){let $=!1;const Ue=new ln;let _e=null;const Ye=new ln(0,0,0,0);return{setMask:function(ze){_e!==ze&&!$&&(s.colorMask(ze,ze,ze,ze),_e=ze)},setLocked:function(ze){$=ze},setClear:function(ze,Ae,tt,St,Qt){Qt===!0&&(ze*=St,Ae*=St,tt*=St),Ue.set(ze,Ae,tt,St),Ye.equals(Ue)===!1&&(s.clearColor(ze,Ae,tt,St),Ye.copy(Ue))},reset:function(){$=!1,_e=null,Ye.set(-1,0,0,0)}}}function i(){let $=!1,Ue=!1,_e=null,Ye=null,ze=null;return{setReversed:function(Ae){if(Ue!==Ae){const tt=e.get("EXT_clip_control");Ae?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Ue=Ae;const St=ze;ze=null,this.setClear(St)}},getReversed:function(){return Ue},setTest:function(Ae){Ae?ce(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Ae){_e!==Ae&&!$&&(s.depthMask(Ae),_e=Ae)},setFunc:function(Ae){if(Ue&&(Ae=sE[Ae]),Ye!==Ae){switch(Ae){case Jf:s.depthFunc(s.NEVER);break;case Qf:s.depthFunc(s.ALWAYS);break;case eh:s.depthFunc(s.LESS);break;case Ia:s.depthFunc(s.LEQUAL);break;case th:s.depthFunc(s.EQUAL);break;case nh:s.depthFunc(s.GEQUAL);break;case ih:s.depthFunc(s.GREATER);break;case rh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ye=Ae}},setLocked:function(Ae){$=Ae},setClear:function(Ae){ze!==Ae&&(ze=Ae,Ue&&(Ae=1-Ae),s.clearDepth(Ae))},reset:function(){$=!1,_e=null,Ye=null,ze=null,Ue=!1}}}function a(){let $=!1,Ue=null,_e=null,Ye=null,ze=null,Ae=null,tt=null,St=null,Qt=null;return{setTest:function(fe){$||(fe?ce(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(fe){Ue!==fe&&!$&&(s.stencilMask(fe),Ue=fe)},setFunc:function(fe,Ee,Te){(_e!==fe||Ye!==Ee||ze!==Te)&&(s.stencilFunc(fe,Ee,Te),_e=fe,Ye=Ee,ze=Te)},setOp:function(fe,Ee,Te){(Ae!==fe||tt!==Ee||St!==Te)&&(s.stencilOp(fe,Ee,Te),Ae=fe,tt=Ee,St=Te)},setLocked:function(fe){$=fe},setClear:function(fe){Qt!==fe&&(s.clearStencil(fe),Qt=fe)},reset:function(){$=!1,Ue=null,_e=null,Ye=null,ze=null,Ae=null,tt=null,St=null,Qt=null}}}const o=new t,c=new i,d=new a,h=new WeakMap,f=new WeakMap;let m={},g={},v={},_=new WeakMap,M=[],E=null,y=!1,S=null,A=null,P=null,I=null,k=null,F=null,V=null,w=new Ht(0,0,0),L=0,z=!1,B=null,Y=null,se=null,de=null,W=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,te=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(le)[1]),K=te>=1):le.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),K=te>=2);let D=null,b={};const H=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),be=new ln().fromArray(H),Me=new ln().fromArray(xe);function ee($,Ue,_e,Ye){const ze=new Uint8Array(4),Ae=s.createTexture();s.bindTexture($,Ae),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<_e;tt++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,Ye,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(Ue+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return Ae}const re={};re[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ce(s.DEPTH_TEST),c.setFunc(Ia),It(!1),Ut(l0),ce(s.CULL_FACE),vt(Cr);function ce($){m[$]!==!0&&(s.enable($),m[$]=!0)}function ge($){m[$]!==!1&&(s.disable($),m[$]=!1)}function Oe($,Ue){return v[$]!==Ue?(s.bindFramebuffer($,Ue),v[$]=Ue,$===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ue),$===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Le($,Ue){let _e=M,Ye=!1;if($){_e=_.get(Ue),_e===void 0&&(_e=[],_.set(Ue,_e));const ze=$.textures;if(_e.length!==ze.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let Ae=0,tt=ze.length;Ae<tt;Ae++)_e[Ae]=s.COLOR_ATTACHMENT0+Ae;_e.length=ze.length,Ye=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Ye=!0);Ye&&s.drawBuffers(_e)}function ut($){return E!==$?(s.useProgram($),E=$,!0):!1}const Qe={[Is]:s.FUNC_ADD,[wM]:s.FUNC_SUBTRACT,[TM]:s.FUNC_REVERSE_SUBTRACT};Qe[AM]=s.MIN,Qe[RM]=s.MAX;const We={[CM]:s.ZERO,[PM]:s.ONE,[NM]:s.SRC_COLOR,[Kf]:s.SRC_ALPHA,[OM]:s.SRC_ALPHA_SATURATE,[UM]:s.DST_COLOR,[IM]:s.DST_ALPHA,[LM]:s.ONE_MINUS_SRC_COLOR,[Zf]:s.ONE_MINUS_SRC_ALPHA,[FM]:s.ONE_MINUS_DST_COLOR,[DM]:s.ONE_MINUS_DST_ALPHA,[kM]:s.CONSTANT_COLOR,[BM]:s.ONE_MINUS_CONSTANT_COLOR,[zM]:s.CONSTANT_ALPHA,[VM]:s.ONE_MINUS_CONSTANT_ALPHA};function vt($,Ue,_e,Ye,ze,Ae,tt,St,Qt,fe){if($===Cr){y===!0&&(ge(s.BLEND),y=!1);return}if(y===!1&&(ce(s.BLEND),y=!0),$!==bM){if($!==S||fe!==z){if((A!==Is||k!==Is)&&(s.blendEquation(s.FUNC_ADD),A=Is,k=Is),fe)switch($){case Na:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case c0:s.blendFunc(s.ONE,s.ONE);break;case u0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case d0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:gt("WebGLState: Invalid blending: ",$);break}else switch($){case Na:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case c0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case u0:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case d0:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",$);break}P=null,I=null,F=null,V=null,w.set(0,0,0),L=0,S=$,z=fe}return}ze=ze||Ue,Ae=Ae||_e,tt=tt||Ye,(Ue!==A||ze!==k)&&(s.blendEquationSeparate(Qe[Ue],Qe[ze]),A=Ue,k=ze),(_e!==P||Ye!==I||Ae!==F||tt!==V)&&(s.blendFuncSeparate(We[_e],We[Ye],We[Ae],We[tt]),P=_e,I=Ye,F=Ae,V=tt),(St.equals(w)===!1||Qt!==L)&&(s.blendColor(St.r,St.g,St.b,Qt),w.copy(St),L=Qt),S=$,z=!1}function dt($,Ue){$.side===ir?ge(s.CULL_FACE):ce(s.CULL_FACE);let _e=$.side===hi;Ue&&(_e=!_e),It(_e),$.blending===Na&&$.transparent===!1?vt(Cr):vt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),c.setFunc($.depthFunc),c.setTest($.depthTest),c.setMask($.depthWrite),o.setMask($.colorWrite);const Ye=$.stencilWrite;d.setTest(Ye),Ye&&(d.setMask($.stencilWriteMask),d.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),d.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),X($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function It($){B!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),B=$)}function Ut($){$!==SM?(ce(s.CULL_FACE),$!==Y&&($===l0?s.cullFace(s.BACK):$===MM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),Y=$}function sn($){$!==se&&(K&&s.lineWidth($),se=$)}function X($,Ue,_e){$?(ce(s.POLYGON_OFFSET_FILL),(de!==Ue||W!==_e)&&(de=Ue,W=_e,c.getReversed()&&(Ue=-Ue),s.polygonOffset(Ue,_e))):ge(s.POLYGON_OFFSET_FILL)}function Kt($){$?ce(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function wt($){$===void 0&&($=s.TEXTURE0+J-1),D!==$&&(s.activeTexture($),D=$)}function $t($,Ue,_e){_e===void 0&&(D===null?_e=s.TEXTURE0+J-1:_e=D);let Ye=b[_e];Ye===void 0&&(Ye={type:void 0,texture:void 0},b[_e]=Ye),(Ye.type!==$||Ye.texture!==Ue)&&(D!==_e&&(s.activeTexture(_e),D=_e),s.bindTexture($,Ue||re[$]),Ye.type=$,Ye.texture=Ue)}function Ge(){const $=b[D];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Jt(){try{s.compressedTexImage2D(...arguments)}catch($){gt("WebGLState:",$)}}function U(){try{s.compressedTexImage3D(...arguments)}catch($){gt("WebGLState:",$)}}function T(){try{s.texSubImage2D(...arguments)}catch($){gt("WebGLState:",$)}}function ne(){try{s.texSubImage3D(...arguments)}catch($){gt("WebGLState:",$)}}function ye(){try{s.compressedTexSubImage2D(...arguments)}catch($){gt("WebGLState:",$)}}function we(){try{s.compressedTexSubImage3D(...arguments)}catch($){gt("WebGLState:",$)}}function Ne(){try{s.texStorage2D(...arguments)}catch($){gt("WebGLState:",$)}}function ke(){try{s.texStorage3D(...arguments)}catch($){gt("WebGLState:",$)}}function ve(){try{s.texImage2D(...arguments)}catch($){gt("WebGLState:",$)}}function Se(){try{s.texImage3D(...arguments)}catch($){gt("WebGLState:",$)}}function je($){return g[$]!==void 0?g[$]:s.getParameter($)}function $e($,Ue){g[$]!==Ue&&(s.pixelStorei($,Ue),g[$]=Ue)}function Be($){be.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),be.copy($))}function De($){Me.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),Me.copy($))}function xt($,Ue){let _e=f.get(Ue);_e===void 0&&(_e=new WeakMap,f.set(Ue,_e));let Ye=_e.get($);Ye===void 0&&(Ye=s.getUniformBlockIndex(Ue,$.name),_e.set($,Ye))}function yt($,Ue){const Ye=f.get(Ue).get($);h.get(Ue)!==Ye&&(s.uniformBlockBinding(Ue,Ye,$.__bindingPointIndex),h.set(Ue,Ye))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),m={},g={},D=null,b={},v={},_=new WeakMap,M=[],E=null,y=!1,S=null,A=null,P=null,I=null,k=null,F=null,V=null,w=new Ht(0,0,0),L=0,z=!1,B=null,Y=null,se=null,de=null,W=null,be.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),d.reset()}return{buffers:{color:o,depth:c,stencil:d},enable:ce,disable:ge,bindFramebuffer:Oe,drawBuffers:Le,useProgram:ut,setBlending:vt,setMaterial:dt,setFlipSided:It,setCullFace:Ut,setLineWidth:sn,setPolygonOffset:X,setScissorTest:Kt,activeTexture:wt,bindTexture:$t,unbindTexture:Ge,compressedTexImage2D:Jt,compressedTexImage3D:U,texImage2D:ve,texImage3D:Se,pixelStorei:$e,getParameter:je,updateUBOMapping:xt,uniformBlockBinding:yt,texStorage2D:Ne,texStorage3D:ke,texSubImage2D:T,texSubImage3D:ne,compressedTexSubImage2D:ye,compressedTexSubImage3D:we,scissor:Be,viewport:De,reset:Tt}}function xR(s,e,t,i,a,o,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Lt,m=new WeakMap,g=new Set;let v;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,T){return M?new OffscreenCanvas(U,T):Zo("canvas")}function y(U,T,ne){let ye=1;const we=Jt(U);if((we.width>ne||we.height>ne)&&(ye=ne/Math.max(we.width,we.height)),ye<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ne=Math.floor(ye*we.width),ke=Math.floor(ye*we.height);v===void 0&&(v=E(Ne,ke));const ve=T?E(Ne,ke):v;return ve.width=Ne,ve.height=ke,ve.getContext("2d").drawImage(U,0,0,Ne,ke),ct("WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+Ne+"x"+ke+")."),ve}else return"data"in U&&ct("WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),U;return U}function S(U){return U.generateMipmaps}function A(U){s.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(U,T,ne,ye,we,Ne=!1){if(U!==null){if(s[U]!==void 0)return s[U];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ke;ye&&(ke=e.get("EXT_texture_norm16"),ke||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=T;if(T===s.RED&&(ne===s.FLOAT&&(ve=s.R32F),ne===s.HALF_FLOAT&&(ve=s.R16F),ne===s.UNSIGNED_BYTE&&(ve=s.R8),ne===s.UNSIGNED_SHORT&&ke&&(ve=ke.R16_EXT),ne===s.SHORT&&ke&&(ve=ke.R16_SNORM_EXT)),T===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ve=s.R8UI),ne===s.UNSIGNED_SHORT&&(ve=s.R16UI),ne===s.UNSIGNED_INT&&(ve=s.R32UI),ne===s.BYTE&&(ve=s.R8I),ne===s.SHORT&&(ve=s.R16I),ne===s.INT&&(ve=s.R32I)),T===s.RG&&(ne===s.FLOAT&&(ve=s.RG32F),ne===s.HALF_FLOAT&&(ve=s.RG16F),ne===s.UNSIGNED_BYTE&&(ve=s.RG8),ne===s.UNSIGNED_SHORT&&ke&&(ve=ke.RG16_EXT),ne===s.SHORT&&ke&&(ve=ke.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ve=s.RG8UI),ne===s.UNSIGNED_SHORT&&(ve=s.RG16UI),ne===s.UNSIGNED_INT&&(ve=s.RG32UI),ne===s.BYTE&&(ve=s.RG8I),ne===s.SHORT&&(ve=s.RG16I),ne===s.INT&&(ve=s.RG32I)),T===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),ne===s.UNSIGNED_INT&&(ve=s.RGB32UI),ne===s.BYTE&&(ve=s.RGB8I),ne===s.SHORT&&(ve=s.RGB16I),ne===s.INT&&(ve=s.RGB32I)),T===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),ne===s.UNSIGNED_INT&&(ve=s.RGBA32UI),ne===s.BYTE&&(ve=s.RGBA8I),ne===s.SHORT&&(ve=s.RGBA16I),ne===s.INT&&(ve=s.RGBA32I)),T===s.RGB&&(ne===s.UNSIGNED_SHORT&&ke&&(ve=ke.RGB16_EXT),ne===s.SHORT&&ke&&(ve=ke.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(ve=s.R11F_G11F_B10F)),T===s.RGBA){const Se=Ne?eu:Wt.getTransfer(we);ne===s.FLOAT&&(ve=s.RGBA32F),ne===s.HALF_FLOAT&&(ve=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(ve=Se===nn?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&ke&&(ve=ke.RGBA16_EXT),ne===s.SHORT&&ke&&(ve=ke.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function k(U,T){let ne;return U?T===null||T===lr||T===qo?ne=s.DEPTH24_STENCIL8:T===Ni?ne=s.DEPTH32F_STENCIL8:T===Yo&&(ne=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===lr||T===qo?ne=s.DEPTH_COMPONENT24:T===Ni?ne=s.DEPTH_COMPONENT32F:T===Yo&&(ne=s.DEPTH_COMPONENT16),ne}function F(U,T){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Gn&&U.minFilter!==Zn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function V(U){const T=U.target;T.removeEventListener("dispose",V),L(T),T.isVideoTexture&&m.delete(T),T.isHTMLTexture&&g.delete(T)}function w(U){const T=U.target;T.removeEventListener("dispose",w),B(T)}function L(U){const T=i.get(U);if(T.__webglInit===void 0)return;const ne=U.source,ye=_.get(ne);if(ye){const we=ye[T.__cacheKey];we.usedTimes--,we.usedTimes===0&&z(U),Object.keys(ye).length===0&&_.delete(ne)}i.remove(U)}function z(U){const T=i.get(U);s.deleteTexture(T.__webglTexture);const ne=U.source,ye=_.get(ne);delete ye[T.__cacheKey],c.memory.textures--}function B(U){const T=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(T.__webglFramebuffer[ye]))for(let we=0;we<T.__webglFramebuffer[ye].length;we++)s.deleteFramebuffer(T.__webglFramebuffer[ye][we]);else s.deleteFramebuffer(T.__webglFramebuffer[ye]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ye])}else{if(Array.isArray(T.__webglFramebuffer))for(let ye=0;ye<T.__webglFramebuffer.length;ye++)s.deleteFramebuffer(T.__webglFramebuffer[ye]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ye=0;ye<T.__webglColorRenderbuffer.length;ye++)T.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ye]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ne=U.textures;for(let ye=0,we=ne.length;ye<we;ye++){const Ne=i.get(ne[ye]);Ne.__webglTexture&&(s.deleteTexture(Ne.__webglTexture),c.memory.textures--),i.remove(ne[ye])}i.remove(U)}let Y=0;function se(){Y=0}function de(){return Y}function W(U){Y=U}function J(){const U=Y;return U>=a.maxTextures&&ct("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),Y+=1,U}function K(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function te(U,T){const ne=i.get(U);if(U.isVideoTexture&&$t(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ne.__version!==U.version){const ye=U.image;if(ye===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(ne,U,T);return}}else U.isExternalTexture&&(ne.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+T)}function le(U,T){const ne=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){ge(ne,U,T);return}else U.isExternalTexture&&(ne.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+T)}function D(U,T){const ne=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){ge(ne,U,T);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+T)}function b(U,T){const ne=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&ne.__version!==U.version){Oe(ne,U,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+T)}const H={[sh]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[ah]:s.MIRRORED_REPEAT},xe={[Gn]:s.NEAREST,[jM]:s.NEAREST_MIPMAP_NEAREST,[oc]:s.NEAREST_MIPMAP_LINEAR,[Zn]:s.LINEAR,[nf]:s.LINEAR_MIPMAP_NEAREST,[Us]:s.LINEAR_MIPMAP_LINEAR},be={[qM]:s.NEVER,[eE]:s.ALWAYS,[KM]:s.LESS,[lp]:s.LEQUAL,[ZM]:s.EQUAL,[cp]:s.GEQUAL,[JM]:s.GREATER,[QM]:s.NOTEQUAL};function Me(U,T){if(T.type===Ni&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Zn||T.magFilter===nf||T.magFilter===oc||T.magFilter===Us||T.minFilter===Zn||T.minFilter===nf||T.minFilter===oc||T.minFilter===Us)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,H[T.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,H[T.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,H[T.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,xe[T.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,xe[T.minFilter]),T.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,be[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Gn||T.minFilter!==oc&&T.minFilter!==Us||T.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ee(U,T){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",V));const ye=T.source;let we=_.get(ye);we===void 0&&(we={},_.set(ye,we));const Ne=K(T);if(Ne!==U.__cacheKey){we[Ne]===void 0&&(we[Ne]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),we[Ne].usedTimes++;const ke=we[U.__cacheKey];ke!==void 0&&(we[U.__cacheKey].usedTimes--,ke.usedTimes===0&&z(T)),U.__cacheKey=Ne,U.__webglTexture=we[Ne].texture}return ne}function re(U,T,ne){return Math.floor(Math.floor(U/ne)/T)}function ce(U,T,ne,ye){const Ne=U.updateRanges;if(Ne.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,ne,ye,T.data);else{Ne.sort(($e,Be)=>$e.start-Be.start);let ke=0;for(let $e=1;$e<Ne.length;$e++){const Be=Ne[ke],De=Ne[$e],xt=Be.start+Be.count,yt=re(De.start,T.width,4),Tt=re(Be.start,T.width,4);De.start<=xt+1&&yt===Tt&&re(De.start+De.count-1,T.width,4)===yt?Be.count=Math.max(Be.count,De.start+De.count-Be.start):(++ke,Ne[ke]=De)}Ne.length=ke+1;const ve=t.getParameter(s.UNPACK_ROW_LENGTH),Se=t.getParameter(s.UNPACK_SKIP_PIXELS),je=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let $e=0,Be=Ne.length;$e<Be;$e++){const De=Ne[$e],xt=Math.floor(De.start/4),yt=Math.ceil(De.count/4),Tt=xt%T.width,$=Math.floor(xt/T.width),Ue=yt,_e=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Tt),t.pixelStorei(s.UNPACK_SKIP_ROWS,$),t.texSubImage2D(s.TEXTURE_2D,0,Tt,$,Ue,_e,ne,ye,T.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ve),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(s.UNPACK_SKIP_ROWS,je)}}function ge(U,T,ne){let ye=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ye=s.TEXTURE_3D);const we=ee(U,T),Ne=T.source;t.bindTexture(ye,U.__webglTexture,s.TEXTURE0+ne);const ke=i.get(Ne);if(Ne.version!==ke.__version||we===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const _e=Wt.getPrimaries(Wt.workingColorSpace),Ye=T.colorSpace===cs?null:Wt.getPrimaries(T.colorSpace),ze=T.colorSpace===cs||_e===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let Se=y(T.image,!1,a.maxTextureSize);Se=Ge(T,Se);const je=o.convert(T.format,T.colorSpace),$e=o.convert(T.type);let Be=I(T.internalFormat,je,$e,T.normalized,T.colorSpace,T.isVideoTexture);Me(ye,T);let De;const xt=T.mipmaps,yt=T.isVideoTexture!==!0,Tt=ke.__version===void 0||we===!0,$=Ne.dataReady,Ue=F(T,Se);if(T.isDepthTexture)Be=k(T.format===Fs,T.type),Tt&&(yt?t.texStorage2D(s.TEXTURE_2D,1,Be,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,Be,Se.width,Se.height,0,je,$e,null));else if(T.isDataTexture)if(xt.length>0){yt&&Tt&&t.texStorage2D(s.TEXTURE_2D,Ue,Be,xt[0].width,xt[0].height);for(let _e=0,Ye=xt.length;_e<Ye;_e++)De=xt[_e],yt?$&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,De.width,De.height,je,$e,De.data):t.texImage2D(s.TEXTURE_2D,_e,Be,De.width,De.height,0,je,$e,De.data);T.generateMipmaps=!1}else yt?(Tt&&t.texStorage2D(s.TEXTURE_2D,Ue,Be,Se.width,Se.height),$&&ce(T,Se,je,$e)):t.texImage2D(s.TEXTURE_2D,0,Be,Se.width,Se.height,0,je,$e,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){yt&&Tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Be,xt[0].width,xt[0].height,Se.depth);for(let _e=0,Ye=xt.length;_e<Ye;_e++)if(De=xt[_e],T.format!==Li)if(je!==null)if(yt){if($)if(T.layerUpdates.size>0){const ze=lv(De.width,De.height,T.format,T.type);for(const Ae of T.layerUpdates){const tt=De.data.subarray(Ae*ze/De.data.BYTES_PER_ELEMENT,(Ae+1)*ze/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,Ae,De.width,De.height,1,je,tt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,De.width,De.height,Se.depth,je,De.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Be,De.width,De.height,Se.depth,0,De.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?$&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,De.width,De.height,Se.depth,je,$e,De.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,Be,De.width,De.height,Se.depth,0,je,$e,De.data)}else{yt&&Tt&&t.texStorage2D(s.TEXTURE_2D,Ue,Be,xt[0].width,xt[0].height);for(let _e=0,Ye=xt.length;_e<Ye;_e++)De=xt[_e],T.format!==Li?je!==null?yt?$&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,De.width,De.height,je,De.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,Be,De.width,De.height,0,De.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?$&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,De.width,De.height,je,$e,De.data):t.texImage2D(s.TEXTURE_2D,_e,Be,De.width,De.height,0,je,$e,De.data)}else if(T.isDataArrayTexture)if(yt){if(Tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Be,Se.width,Se.height,Se.depth),$)if(T.layerUpdates.size>0){const _e=lv(Se.width,Se.height,T.format,T.type);for(const Ye of T.layerUpdates){const ze=Se.data.subarray(Ye*_e/Se.data.BYTES_PER_ELEMENT,(Ye+1)*_e/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ye,Se.width,Se.height,1,je,$e,ze)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,je,$e,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,Se.width,Se.height,Se.depth,0,je,$e,Se.data);else if(T.isData3DTexture)yt?(Tt&&t.texStorage3D(s.TEXTURE_3D,Ue,Be,Se.width,Se.height,Se.depth),$&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,je,$e,Se.data)):t.texImage3D(s.TEXTURE_3D,0,Be,Se.width,Se.height,Se.depth,0,je,$e,Se.data);else if(T.isFramebufferTexture){if(Tt)if(yt)t.texStorage2D(s.TEXTURE_2D,Ue,Be,Se.width,Se.height);else{let _e=Se.width,Ye=Se.height;for(let ze=0;ze<Ue;ze++)t.texImage2D(s.TEXTURE_2D,ze,Be,_e,Ye,0,je,$e,null),_e>>=1,Ye>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),Se.parentNode!==_e){_e.appendChild(Se),g.add(T),_e.onpaint=St=>{const Qt=St.changedElements;for(const fe of g)Qt.includes(fe.image)&&(fe.needsUpdate=!0)},_e.requestPaint();return}const Ye=0,ze=s.RGBA,Ae=s.RGBA,tt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Ye,ze,Ae,tt,Se),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(xt.length>0){if(yt&&Tt){const _e=Jt(xt[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Be,_e.width,_e.height)}for(let _e=0,Ye=xt.length;_e<Ye;_e++)De=xt[_e],yt?$&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,je,$e,De):t.texImage2D(s.TEXTURE_2D,_e,Be,je,$e,De);T.generateMipmaps=!1}else if(yt){if(Tt){const _e=Jt(Se);t.texStorage2D(s.TEXTURE_2D,Ue,Be,_e.width,_e.height)}$&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,je,$e,Se)}else t.texImage2D(s.TEXTURE_2D,0,Be,je,$e,Se);S(T)&&A(ye),ke.__version=Ne.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Oe(U,T,ne){if(T.image.length!==6)return;const ye=ee(U,T),we=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ne);const Ne=i.get(we);if(we.version!==Ne.__version||ye===!0){t.activeTexture(s.TEXTURE0+ne);const ke=Wt.getPrimaries(Wt.workingColorSpace),ve=T.colorSpace===cs?null:Wt.getPrimaries(T.colorSpace),Se=T.colorSpace===cs||ke===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const je=T.isCompressedTexture||T.image[0].isCompressedTexture,$e=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let Ae=0;Ae<6;Ae++)!je&&!$e?Be[Ae]=y(T.image[Ae],!0,a.maxCubemapSize):Be[Ae]=$e?T.image[Ae].image:T.image[Ae],Be[Ae]=Ge(T,Be[Ae]);const De=Be[0],xt=o.convert(T.format,T.colorSpace),yt=o.convert(T.type),Tt=I(T.internalFormat,xt,yt,T.normalized,T.colorSpace),$=T.isVideoTexture!==!0,Ue=Ne.__version===void 0||ye===!0,_e=we.dataReady;let Ye=F(T,De);Me(s.TEXTURE_CUBE_MAP,T);let ze;if(je){$&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ye,Tt,De.width,De.height);for(let Ae=0;Ae<6;Ae++){ze=Be[Ae].mipmaps;for(let tt=0;tt<ze.length;tt++){const St=ze[tt];T.format!==Li?xt!==null?$?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt,0,0,St.width,St.height,xt,St.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt,Tt,St.width,St.height,0,St.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt,0,0,St.width,St.height,xt,yt,St.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt,Tt,St.width,St.height,0,xt,yt,St.data)}}}else{if(ze=T.mipmaps,$&&Ue){ze.length>0&&Ye++;const Ae=Jt(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ye,Tt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if($e){$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Be[Ae].width,Be[Ae].height,xt,yt,Be[Ae].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Tt,Be[Ae].width,Be[Ae].height,0,xt,yt,Be[Ae].data);for(let tt=0;tt<ze.length;tt++){const Qt=ze[tt].image[Ae].image;$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt+1,0,0,Qt.width,Qt.height,xt,yt,Qt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt+1,Tt,Qt.width,Qt.height,0,xt,yt,Qt.data)}}else{$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,xt,yt,Be[Ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Tt,xt,yt,Be[Ae]);for(let tt=0;tt<ze.length;tt++){const St=ze[tt];$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt+1,0,0,xt,yt,St.image[Ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt+1,Tt,xt,yt,St.image[Ae])}}}S(T)&&A(s.TEXTURE_CUBE_MAP),Ne.__version=we.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Le(U,T,ne,ye,we,Ne){const ke=o.convert(ne.format,ne.colorSpace),ve=o.convert(ne.type),Se=I(ne.internalFormat,ke,ve,ne.normalized,ne.colorSpace),je=i.get(T),$e=i.get(ne);if($e.__renderTarget=T,!je.__hasExternalTextures){const Be=Math.max(1,T.width>>Ne),De=Math.max(1,T.height>>Ne);we===s.TEXTURE_3D||we===s.TEXTURE_2D_ARRAY?t.texImage3D(we,Ne,Se,Be,De,T.depth,0,ke,ve,null):t.texImage2D(we,Ne,Se,Be,De,0,ke,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),wt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,we,$e.__webglTexture,0,Kt(T)):(we===s.TEXTURE_2D||we>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,we,$e.__webglTexture,Ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(U,T,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,U),T.depthBuffer){const ye=T.depthTexture,we=ye&&ye.isDepthTexture?ye.type:null,Ne=k(T.stencilBuffer,we),ke=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;wt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt(T),Ne,T.width,T.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt(T),Ne,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,U)}else{const ye=T.textures;for(let we=0;we<ye.length;we++){const Ne=ye[we],ke=o.convert(Ne.format,Ne.colorSpace),ve=o.convert(Ne.type),Se=I(Ne.internalFormat,ke,ve,Ne.normalized,Ne.colorSpace);wt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt(T),Se,T.width,T.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt(T),Se,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Se,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qe(U,T,ne){const ye=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const we=i.get(T.depthTexture);if(we.__renderTarget=T,(!we.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ye){if(we.__webglInit===void 0&&(we.__webglInit=!0,T.depthTexture.addEventListener("dispose",V)),we.__webglTexture===void 0){we.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,we.__webglTexture),Me(s.TEXTURE_CUBE_MAP,T.depthTexture);const je=o.convert(T.depthTexture.format),$e=o.convert(T.depthTexture.type);let Be;T.depthTexture.format===Ir?Be=s.DEPTH_COMPONENT24:T.depthTexture.format===Fs&&(Be=s.DEPTH24_STENCIL8);for(let De=0;De<6;De++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Be,T.width,T.height,0,je,$e,null)}}else te(T.depthTexture,0);const Ne=we.__webglTexture,ke=Kt(T),ve=ye?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,Se=T.depthTexture.format===Fs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ir)wt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,ve,Ne,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,Se,ve,Ne,0);else if(T.depthTexture.format===Fs)wt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,ve,Ne,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,Se,ve,Ne,0);else throw new Error("Unknown depthTexture format")}function We(U){const T=i.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ye=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ye){const we=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ye.removeEventListener("dispose",we)};ye.addEventListener("dispose",we),T.__depthDisposeCallback=we}T.__boundDepthTexture=ye}if(U.depthTexture&&!T.__autoAllocateDepthBuffer)if(ne)for(let ye=0;ye<6;ye++)Qe(T.__webglFramebuffer[ye],U,ye);else{const ye=U.texture.mipmaps;ye&&ye.length>0?Qe(T.__webglFramebuffer[0],U,0):Qe(T.__webglFramebuffer,U,0)}else if(ne){T.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ye]),T.__webglDepthbuffer[ye]===void 0)T.__webglDepthbuffer[ye]=s.createRenderbuffer(),ut(T.__webglDepthbuffer[ye],U,!1);else{const we=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=T.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,Ne)}}else{const ye=U.texture.mipmaps;if(ye&&ye.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ut(T.__webglDepthbuffer,U,!1);else{const we=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,Ne)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(U,T,ne){const ye=i.get(U);T!==void 0&&Le(ye.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&We(U)}function dt(U){const T=U.texture,ne=i.get(U),ye=i.get(T);U.addEventListener("dispose",w);const we=U.textures,Ne=U.isWebGLCubeRenderTarget===!0,ke=we.length>1;if(ke||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=T.version,c.memory.textures++),Ne){ne.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer[ve]=[];for(let Se=0;Se<T.mipmaps.length;Se++)ne.__webglFramebuffer[ve][Se]=s.createFramebuffer()}else ne.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ne.__webglFramebuffer=[];for(let ve=0;ve<T.mipmaps.length;ve++)ne.__webglFramebuffer[ve]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(ke)for(let ve=0,Se=we.length;ve<Se;ve++){const je=i.get(we[ve]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),c.memory.textures++)}if(U.samples>0&&wt(U)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ve=0;ve<we.length;ve++){const Se=we[ve];ne.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]);const je=o.convert(Se.format,Se.colorSpace),$e=o.convert(Se.type),Be=I(Se.internalFormat,je,$e,Se.normalized,Se.colorSpace,U.isXRRenderTarget===!0),De=Kt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Be,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,ne.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(ne.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Me(s.TEXTURE_CUBE_MAP,T);for(let ve=0;ve<6;ve++)if(T.mipmaps&&T.mipmaps.length>0)for(let Se=0;Se<T.mipmaps.length;Se++)Le(ne.__webglFramebuffer[ve][Se],U,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Se);else Le(ne.__webglFramebuffer[ve],U,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);S(T)&&A(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let ve=0,Se=we.length;ve<Se;ve++){const je=we[ve],$e=i.get(je);let Be=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Be=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Be,$e.__webglTexture),Me(Be,je),Le(ne.__webglFramebuffer,U,je,s.COLOR_ATTACHMENT0+ve,Be,0),S(je)&&A(Be)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ve=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,ye.__webglTexture),Me(ve,T),T.mipmaps&&T.mipmaps.length>0)for(let Se=0;Se<T.mipmaps.length;Se++)Le(ne.__webglFramebuffer[Se],U,T,s.COLOR_ATTACHMENT0,ve,Se);else Le(ne.__webglFramebuffer,U,T,s.COLOR_ATTACHMENT0,ve,0);S(T)&&A(ve),t.unbindTexture()}U.depthBuffer&&We(U)}function It(U){const T=U.textures;for(let ne=0,ye=T.length;ne<ye;ne++){const we=T[ne];if(S(we)){const Ne=P(U),ke=i.get(we).__webglTexture;t.bindTexture(Ne,ke),A(Ne),t.unbindTexture()}}}const Ut=[],sn=[];function X(U){if(U.samples>0){if(wt(U)===!1){const T=U.textures,ne=U.width,ye=U.height;let we=s.COLOR_BUFFER_BIT;const Ne=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=i.get(U),ve=T.length>1;if(ve)for(let je=0;je<T.length;je++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const Se=U.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let je=0;je<T.length;je++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(we|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(we|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[je]);const $e=i.get(T[je]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,ne,ye,0,0,ne,ye,we,s.NEAREST),h===!0&&(Ut.length=0,sn.length=0,Ut.push(s.COLOR_ATTACHMENT0+je),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ut.push(Ne),sn.push(Ne),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,sn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let je=0;je<T.length;je++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,ke.__webglColorRenderbuffer[je]);const $e=i.get(T[je]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const T=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Kt(U){return Math.min(a.maxSamples,U.samples)}function wt(U){const T=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $t(U){const T=c.render.frame;m.get(U)!==T&&(m.set(U,T),U.update())}function Ge(U,T){const ne=U.colorSpace,ye=U.format,we=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==Qc&&ne!==cs&&(Wt.getTransfer(ne)===nn?(ye!==Li||we!==Mi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",ne)),T}function Jt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=J,this.resetTextureUnits=se,this.getTextureUnits=de,this.setTextureUnits=W,this.setTexture2D=te,this.setTexture2DArray=le,this.setTexture3D=D,this.setTextureCube=b,this.rebindTextures=vt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _R(s,e){function t(i,a=cs){let o;const c=Wt.getTransfer(a);if(i===Mi)return s.UNSIGNED_BYTE;if(i===np)return s.UNSIGNED_SHORT_4_4_4_4;if(i===ip)return s.UNSIGNED_SHORT_5_5_5_1;if(i===xx)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===_x)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===gx)return s.BYTE;if(i===vx)return s.SHORT;if(i===Yo)return s.UNSIGNED_SHORT;if(i===tp)return s.INT;if(i===lr)return s.UNSIGNED_INT;if(i===Ni)return s.FLOAT;if(i===Lr)return s.HALF_FLOAT;if(i===yx)return s.ALPHA;if(i===Sx)return s.RGB;if(i===Li)return s.RGBA;if(i===Ir)return s.DEPTH_COMPONENT;if(i===Fs)return s.DEPTH_STENCIL;if(i===rp)return s.RED;if(i===sp)return s.RED_INTEGER;if(i===ks)return s.RG;if(i===ap)return s.RG_INTEGER;if(i===op)return s.RGBA_INTEGER;if(i===Hc||i===Gc||i===Wc||i===jc)if(c===nn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Hc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Hc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oh||i===lh||i===ch||i===uh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===oh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ch)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dh||i===fh||i===hh||i===ph||i===mh||i===Kc||i===gh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===dh||i===fh)return c===nn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===hh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===ph)return o.COMPRESSED_R11_EAC;if(i===mh)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Kc)return o.COMPRESSED_RG11_EAC;if(i===gh)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vh||i===xh||i===_h||i===yh||i===Sh||i===Mh||i===Eh||i===bh||i===wh||i===Th||i===Ah||i===Rh||i===Ch||i===Ph)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===vh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_h)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Th)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ah)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ch)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ph)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nh||i===Lh||i===Ih)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Nh)return c===nn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ih)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dh||i===Uh||i===Zc||i===Fh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Dh)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Uh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qo?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ix(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cr({vertexShader:yR,fragmentShader:SR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mi(new fu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ER extends zs{constructor(e,t){super();const i=this;let a=null,o=1,c=null,d="local-floor",h=1,f=null,m=null,g=null,v=null,_=null,M=null;const E=typeof XRWebGLBinding<"u",y=new MR,S={},A=t.getContextAttributes();let P=null,I=null;const k=[],F=[],V=new Lt;let w=null;const L=new fi;L.viewport=new ln;const z=new fi;z.viewport=new ln;const B=[L,z],Y=new E1;let se=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let re=k[ee];return re===void 0&&(re=new uf,k[ee]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ee){let re=k[ee];return re===void 0&&(re=new uf,k[ee]=re),re.getGripSpace()},this.getHand=function(ee){let re=k[ee];return re===void 0&&(re=new uf,k[ee]=re),re.getHandSpace()};function W(ee){const re=F.indexOf(ee.inputSource);if(re===-1)return;const ce=k[re];ce!==void 0&&(ce.update(ee.inputSource,ee.frame,f||c),ce.dispatchEvent({type:ee.type,data:ee.inputSource}))}function J(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",J),a.removeEventListener("inputsourceschange",K);for(let ee=0;ee<k.length;ee++){const re=F[ee];re!==null&&(F[ee]=null,k[ee].disconnect(re))}se=null,de=null,y.reset();for(const ee in S)delete S[ee];e.setRenderTarget(P),_=null,v=null,g=null,a=null,I=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){o=ee,i.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,i.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(ee){f=ee},this.getBaseLayer=function(){return v!==null?v:_},this.getBinding=function(){return g===null&&E&&(g=new XRWebGLBinding(a,t)),g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",J),a.addEventListener("inputsourceschange",K),A.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(V),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ge=null,Oe=null;A.depth&&(Oe=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=A.stencil?Fs:Ir,ge=A.stencil?qo:lr);const Le={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:o};g=this.getBinding(),v=g.createProjectionLayer(Le),a.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),I=new ar(v.textureWidth,v.textureHeight,{format:Li,type:Mi,depthTexture:new Fa(v.textureWidth,v.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ce={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(a,t,ce),a.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),I=new ar(_.framebufferWidth,_.framebufferHeight,{format:Li,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await a.requestReferenceSpace(d),Me.setContext(a),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(ee){for(let re=0;re<ee.removed.length;re++){const ce=ee.removed[re],ge=F.indexOf(ce);ge>=0&&(F[ge]=null,k[ge].disconnect(ce))}for(let re=0;re<ee.added.length;re++){const ce=ee.added[re];let ge=F.indexOf(ce);if(ge===-1){for(let Le=0;Le<k.length;Le++)if(Le>=F.length){F.push(ce),ge=Le;break}else if(F[Le]===null){F[Le]=ce,ge=Le;break}if(ge===-1)break}const Oe=k[ge];Oe&&Oe.connect(ce)}}const te=new Z,le=new Z;function D(ee,re,ce){te.setFromMatrixPosition(re.matrixWorld),le.setFromMatrixPosition(ce.matrixWorld);const ge=te.distanceTo(le),Oe=re.projectionMatrix.elements,Le=ce.projectionMatrix.elements,ut=Oe[14]/(Oe[10]-1),Qe=Oe[14]/(Oe[10]+1),We=(Oe[9]+1)/Oe[5],vt=(Oe[9]-1)/Oe[5],dt=(Oe[8]-1)/Oe[0],It=(Le[8]+1)/Le[0],Ut=ut*dt,sn=ut*It,X=ge/(-dt+It),Kt=X*-dt;if(re.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Kt),ee.translateZ(X),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Oe[10]===-1)ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const wt=ut+X,$t=Qe+X,Ge=Ut-Kt,Jt=sn+(ge-Kt),U=We*Qe/$t*wt,T=vt*Qe/$t*wt;ee.projectionMatrix.makePerspective(Ge,Jt,U,T,wt,$t),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function b(ee,re){re===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(re.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let re=ee.near,ce=ee.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(ce=y.depthFar)),Y.near=z.near=L.near=re,Y.far=z.far=L.far=ce,(se!==Y.near||de!==Y.far)&&(a.updateRenderState({depthNear:Y.near,depthFar:Y.far}),se=Y.near,de=Y.far),Y.layers.mask=ee.layers.mask|6,L.layers.mask=Y.layers.mask&-5,z.layers.mask=Y.layers.mask&-3;const ge=ee.parent,Oe=Y.cameras;b(Y,ge);for(let Le=0;Le<Oe.length;Le++)b(Oe[Le],ge);Oe.length===2?D(Y,L,z):Y.projectionMatrix.copy(L.projectionMatrix),H(ee,Y,ge)};function H(ee,re,ce){ce===null?ee.matrix.copy(re.matrixWorld):(ee.matrix.copy(ce.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(re.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ua*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&_===null))return h},this.setFoveation=function(ee){h=ee,v!==null&&(v.fixedFoveation=ee),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(ee){return S[ee]};let xe=null;function be(ee,re){if(m=re.getViewerPose(f||c),M=re,m!==null){const ce=m.views;_!==null&&(e.setRenderTargetFramebuffer(I,_.framebuffer),e.setRenderTarget(I));let ge=!1;ce.length!==Y.cameras.length&&(Y.cameras.length=0,ge=!0);for(let Qe=0;Qe<ce.length;Qe++){const We=ce[Qe];let vt=null;if(_!==null)vt=_.getViewport(We);else{const It=g.getViewSubImage(v,We);vt=It.viewport,Qe===0&&(e.setRenderTargetTextures(I,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(I))}let dt=B[Qe];dt===void 0&&(dt=new fi,dt.layers.enable(Qe),dt.viewport=new ln,B[Qe]=dt),dt.matrix.fromArray(We.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(We.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(vt.x,vt.y,vt.width,vt.height),Qe===0&&(Y.matrix.copy(dt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),ge===!0&&Y.cameras.push(dt)}const Oe=a.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){g=i.getBinding();const Qe=g.getDepthInformation(ce[0]);Qe&&Qe.isValid&&Qe.texture&&y.init(Qe,a.renderState)}if(Oe&&Oe.includes("camera-access")&&E){e.state.unbindTexture(),g=i.getBinding();for(let Qe=0;Qe<ce.length;Qe++){const We=ce[Qe].camera;if(We){let vt=S[We];vt||(vt=new Ix,S[We]=vt);const dt=g.getCameraImage(We);vt.sourceTexture=dt}}}}for(let ce=0;ce<k.length;ce++){const ge=F[ce],Oe=k[ce];ge!==null&&Oe!==void 0&&Oe.update(ge,re,f||c)}xe&&xe(ee,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),M=null}const Me=new kx;Me.setAnimationLoop(be),this.setAnimationLoop=function(ee){xe=ee},this.dispose=function(){}}}const bR=new Ot,jx=new Nt;jx.set(-1,0,0,0,1,0,0,0,1);function wR(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,Dx(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function a(y,S,A,P,I){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),g(y,S)):S.isMeshPhongMaterial?(o(y,S),m(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),v(y,S),S.isMeshPhysicalMaterial&&_(y,S,I)):S.isMeshMatcapMaterial?(o(y,S),M(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),E(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?h(y,S,A,P):S.isSpriteMaterial?f(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===hi&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===hi&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const A=e.get(S),P=A.envMap,I=A.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(bR.makeRotationFromEuler(I)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(jx),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function h(y,S,A,P){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*A,y.scale.value=P*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function g(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,A){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===hi&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function E(y,S){const A=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function TR(s,e,t,i){let a={},o={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(A,P){const I=P.program;i.uniformBlockBinding(A,I)}function f(A,P){let I=a[A.id];I===void 0&&(M(A),I=m(A),a[A.id]=I,A.addEventListener("dispose",y));const k=P.program;i.updateUBOMapping(A,k);const F=e.render.frame;o[A.id]!==F&&(v(A),o[A.id]=F)}function m(A){const P=g();A.__bindingPointIndex=P;const I=s.createBuffer(),k=A.__size,F=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,k,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,I),I}function g(){for(let A=0;A<d;A++)if(c.indexOf(A)===-1)return c.push(A),A;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(A){const P=a[A.id],I=A.uniforms,k=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,V=I.length;F<V;F++){const w=Array.isArray(I[F])?I[F]:[I[F]];for(let L=0,z=w.length;L<z;L++){const B=w[L];if(_(B,F,L,k)===!0){const Y=B.__offset,se=Array.isArray(B.value)?B.value:[B.value];let de=0;for(let W=0;W<se.length;W++){const J=se[W],K=E(J);typeof J=="number"||typeof J=="boolean"?(B.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,Y+de,B.__data)):J.isMatrix3?(B.__data[0]=J.elements[0],B.__data[1]=J.elements[1],B.__data[2]=J.elements[2],B.__data[3]=0,B.__data[4]=J.elements[3],B.__data[5]=J.elements[4],B.__data[6]=J.elements[5],B.__data[7]=0,B.__data[8]=J.elements[6],B.__data[9]=J.elements[7],B.__data[10]=J.elements[8],B.__data[11]=0):ArrayBuffer.isView(J)?B.__data.set(new J.constructor(J.buffer,J.byteOffset,B.__data.length)):(J.toArray(B.__data,de),de+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(A,P,I,k){const F=A.value,V=P+"_"+I;if(k[V]===void 0)return typeof F=="number"||typeof F=="boolean"?k[V]=F:ArrayBuffer.isView(F)?k[V]=F.slice():k[V]=F.clone(),!0;{const w=k[V];if(typeof F=="number"||typeof F=="boolean"){if(w!==F)return k[V]=F,!0}else{if(ArrayBuffer.isView(F))return!0;if(w.equals(F)===!1)return w.copy(F),!0}}return!1}function M(A){const P=A.uniforms;let I=0;const k=16;for(let V=0,w=P.length;V<w;V++){const L=Array.isArray(P[V])?P[V]:[P[V]];for(let z=0,B=L.length;z<B;z++){const Y=L[z],se=Array.isArray(Y.value)?Y.value:[Y.value];for(let de=0,W=se.length;de<W;de++){const J=se[de],K=E(J),te=I%k,le=te%K.boundary,D=te+le;I+=le,D!==0&&k-D<K.storage&&(I+=k-D),Y.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=I,I+=K.storage}}}const F=I%k;return F>0&&(I+=k-F),A.__size=I,A.__cache={},this}function E(A){const P={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(P.boundary=4,P.storage=4):A.isVector2?(P.boundary=8,P.storage=8):A.isVector3||A.isColor?(P.boundary=16,P.storage=12):A.isVector4?(P.boundary=16,P.storage=16):A.isMatrix3?(P.boundary=48,P.storage=48):A.isMatrix4?(P.boundary=64,P.storage=64):A.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(P.boundary=16,P.storage=A.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",A),P}function y(A){const P=A.target;P.removeEventListener("dispose",y);const I=c.indexOf(P.__bindingPointIndex);c.splice(I,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete o[P.id]}function S(){for(const A in a)s.deleteBuffer(a[A]);c=[],a={},o={}}return{bind:h,update:f,dispose:S}}const AR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tr=null;function RR(){return tr===null&&(tr=new pp(AR,16,16,ks,Lr),tr.name="DFG_LUT",tr.minFilter=Zn,tr.magFilter=Zn,tr.wrapS=Tr,tr.wrapT=Tr,tr.generateMipmaps=!1,tr.needsUpdate=!0),tr}class CR{constructor(e={}){const{canvas:t=iE(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:_=Mi}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const E=_,y=new Set([op,ap,sp]),S=new Set([Mi,lr,Yo,qo,np,ip]),A=new Uint32Array(4),P=new Int32Array(4),I=new Z;let k=null,F=null;const V=[],w=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let B=!1,Y=null;this._outputColorSpace=di;let se=0,de=0,W=null,J=-1,K=null;const te=new ln,le=new ln;let D=null;const b=new Ht(0);let H=0,xe=t.width,be=t.height,Me=1,ee=null,re=null;const ce=new ln(0,0,xe,be),ge=new ln(0,0,xe,be);let Oe=!1;const Le=new mp;let ut=!1,Qe=!1;const We=new Ot,vt=new Z,dt=new ln,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function sn(){return W===null?Me:1}let X=i;function Kt(N,Q){return t.getContext(N,Q)}try{const N={alpha:!0,depth:a,stencil:o,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qh}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",St,!1),X===null){const Q="webgl2";if(X=Kt(Q,N),X===null)throw Kt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw gt("WebGLRenderer: "+N.message),N}let wt,$t,Ge,Jt,U,T,ne,ye,we,Ne,ke,ve,Se,je,$e,Be,De,xt,yt,Tt,$,Ue,_e;function Ye(){wt=new RT(X),wt.init(),$=new _R(X,wt),$t=new yT(X,wt,e,$),Ge=new vR(X,wt),$t.reversedDepthBuffer&&v&&Ge.buffers.depth.setReversed(!0),Jt=new NT(X),U=new iR,T=new xR(X,wt,Ge,U,$t,$,Jt),ne=new AT(z),ye=new U1(X),Ue=new xT(X,ye),we=new CT(X,ye,Jt,Ue),Ne=new IT(X,we,ye,Ue,Jt),xt=new LT(X,$t,T),$e=new ST(U),ke=new nR(z,ne,wt,$t,Ue,$e),ve=new wR(z,U),Se=new sR,je=new dR(wt),De=new vT(z,ne,Ge,Ne,M,h),Be=new gR(z,Ne,$t),_e=new TR(X,Jt,$t,Ge),yt=new _T(X,wt,Jt),Tt=new PT(X,wt,Jt),Jt.programs=ke.programs,z.capabilities=$t,z.extensions=wt,z.properties=U,z.renderLists=Se,z.shadowMap=Be,z.state=Ge,z.info=Jt}Ye(),E!==Mi&&(L=new UT(E,t.width,t.height,a,o));const ze=new ER(z,X);this.xr=ze,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const N=wt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=wt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(N){N!==void 0&&(Me=N,this.setSize(xe,be,!1))},this.getSize=function(N){return N.set(xe,be)},this.setSize=function(N,Q,he=!0){if(ze.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=N,be=Q,t.width=Math.floor(N*Me),t.height=Math.floor(Q*Me),he===!0&&(t.style.width=N+"px",t.style.height=Q+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,N,Q)},this.getDrawingBufferSize=function(N){return N.set(xe*Me,be*Me).floor()},this.setDrawingBufferSize=function(N,Q,he){xe=N,be=Q,Me=he,t.width=Math.floor(N*he),t.height=Math.floor(Q*he),this.setViewport(0,0,N,Q)},this.setEffects=function(N){if(E===Mi){gt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Q=0;Q<N.length;Q++)if(N[Q].isOutputPass===!0){ct("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(te)},this.getViewport=function(N){return N.copy(ce)},this.setViewport=function(N,Q,he,ie){N.isVector4?ce.set(N.x,N.y,N.z,N.w):ce.set(N,Q,he,ie),Ge.viewport(te.copy(ce).multiplyScalar(Me).round())},this.getScissor=function(N){return N.copy(ge)},this.setScissor=function(N,Q,he,ie){N.isVector4?ge.set(N.x,N.y,N.z,N.w):ge.set(N,Q,he,ie),Ge.scissor(le.copy(ge).multiplyScalar(Me).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(N){Ge.setScissorTest(Oe=N)},this.setOpaqueSort=function(N){ee=N},this.setTransparentSort=function(N){re=N},this.getClearColor=function(N){return N.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(N=!0,Q=!0,he=!0){let ie=0;if(N){let oe=!1;if(W!==null){const He=W.texture.format;oe=y.has(He)}if(oe){const He=W.texture.type,Ze=S.has(He),Ve=De.getClearColor(),it=De.getClearAlpha(),lt=Ve.r,At=Ve.g,Rt=Ve.b;Ze?(A[0]=lt,A[1]=At,A[2]=Rt,A[3]=it,X.clearBufferuiv(X.COLOR,0,A)):(P[0]=lt,P[1]=At,P[2]=Rt,P[3]=it,X.clearBufferiv(X.COLOR,0,P))}else ie|=X.COLOR_BUFFER_BIT}Q&&(ie|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ie|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&X.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),Y=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",St,!1),De.dispose(),Se.dispose(),je.dispose(),U.dispose(),ne.dispose(),Ne.dispose(),Ue.dispose(),_e.dispose(),ke.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",mt),ze.removeEventListener("sessionend",me),at.stop()};function Ae(N){N.preventDefault(),tu("WebGLRenderer: Context Lost."),B=!0}function tt(){tu("WebGLRenderer: Context Restored."),B=!1;const N=Jt.autoReset,Q=Be.enabled,he=Be.autoUpdate,ie=Be.needsUpdate,oe=Be.type;Ye(),Jt.autoReset=N,Be.enabled=Q,Be.autoUpdate=he,Be.needsUpdate=ie,Be.type=oe}function St(N){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Qt(N){const Q=N.target;Q.removeEventListener("dispose",Qt),fe(Q)}function fe(N){Ee(N),U.remove(N)}function Ee(N){const Q=U.get(N).programs;Q!==void 0&&(Q.forEach(function(he){ke.releaseProgram(he)}),N.isShaderMaterial&&ke.releaseShaderCache(N))}this.renderBufferDirect=function(N,Q,he,ie,oe,He){Q===null&&(Q=It);const Ze=oe.isMesh&&oe.matrixWorld.determinant()<0,Ve=pn(N,Q,he,ie,oe);Ge.setMaterial(ie,Ze);let it=he.index,lt=1;if(ie.wireframe===!0){if(it=we.getWireframeAttribute(he),it===void 0)return;lt=2}const At=he.drawRange,Rt=he.attributes.position;let st=At.start*lt,Xt=(At.start+At.count)*lt;He!==null&&(st=Math.max(st,He.start*lt),Xt=Math.min(Xt,(He.start+He.count)*lt)),it!==null?(st=Math.max(st,0),Xt=Math.min(Xt,it.count)):Rt!=null&&(st=Math.max(st,0),Xt=Math.min(Xt,Rt.count));const cn=Xt-st;if(cn<0||cn===1/0)return;Ue.setup(oe,ie,Ve,he,it);let mn,en=yt;if(it!==null&&(mn=ye.get(it),en=Tt,en.setIndex(mn)),oe.isMesh)ie.wireframe===!0?(Ge.setLineWidth(ie.wireframeLinewidth*sn()),en.setMode(X.LINES)):en.setMode(X.TRIANGLES);else if(oe.isLine){let wn=ie.linewidth;wn===void 0&&(wn=1),Ge.setLineWidth(wn*sn()),oe.isLineSegments?en.setMode(X.LINES):oe.isLineLoop?en.setMode(X.LINE_LOOP):en.setMode(X.LINE_STRIP)}else oe.isPoints?en.setMode(X.POINTS):oe.isSprite&&en.setMode(X.TRIANGLES);if(oe.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))en.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const wn=oe._multiDrawStarts,qe=oe._multiDrawCounts,zn=oe._multiDrawCount,Ft=it?ye.get(it).bytesPerElement:1,ii=U.get(ie).currentProgram.getUniforms();for(let ri=0;ri<zn;ri++)ii.setValue(X,"_gl_DrawID",ri),en.render(wn[ri]/Ft,qe[ri])}else if(oe.isInstancedMesh)en.renderInstances(st,cn,oe.count);else if(he.isInstancedBufferGeometry){const wn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,qe=Math.min(he.instanceCount,wn);en.renderInstances(st,cn,qe)}else en.render(st,cn)};function Te(N,Q,he){N.transparent===!0&&N.side===ir&&N.forceSinglePass===!1?(N.side=hi,N.needsUpdate=!0,Sn(N,Q,he),N.side=ds,N.needsUpdate=!0,Sn(N,Q,he),N.side=ir):Sn(N,Q,he)}this.compile=function(N,Q,he=null){he===null&&(he=N),F=je.get(he),F.init(Q),w.push(F),he.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(F.pushLight(oe),oe.castShadow&&F.pushShadow(oe))}),N!==he&&N.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(F.pushLight(oe),oe.castShadow&&F.pushShadow(oe))}),F.setupLights();const ie=new Set;return N.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const He=oe.material;if(He)if(Array.isArray(He))for(let Ze=0;Ze<He.length;Ze++){const Ve=He[Ze];Te(Ve,he,oe),ie.add(Ve)}else Te(He,he,oe),ie.add(He)}),F=w.pop(),ie},this.compileAsync=function(N,Q,he=null){const ie=this.compile(N,Q,he);return new Promise(oe=>{function He(){if(ie.forEach(function(Ze){U.get(Ze).currentProgram.isReady()&&ie.delete(Ze)}),ie.size===0){oe(N);return}setTimeout(He,10)}wt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Ce=null;function et(N){Ce&&Ce(N)}function mt(){at.stop()}function me(){at.start()}const at=new kx;at.setAnimationLoop(et),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(N){Ce=N,ze.setAnimationLoop(N),N===null?at.stop():at.start()},ze.addEventListener("sessionstart",mt),ze.addEventListener("sessionend",me),this.render=function(N,Q){if(Q!==void 0&&Q.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;Y!==null&&Y.renderStart(N,Q);const he=ze.enabled===!0&&ze.isPresenting===!0,ie=L!==null&&(W===null||he)&&L.begin(z,W);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(Q),Q=ze.getCamera()),N.isScene===!0&&N.onBeforeRender(z,N,Q,W),F=je.get(N,w.length),F.init(Q),F.state.textureUnits=T.getTextureUnits(),w.push(F),We.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Le.setFromProjectionMatrix(We,rr,Q.reversedDepth),Qe=this.localClippingEnabled,ut=$e.init(this.clippingPlanes,Qe),k=Se.get(N,V.length),k.init(),V.push(k),ze.enabled===!0&&ze.isPresenting===!0){const Ze=z.xr.getDepthSensingMesh();Ze!==null&&Et(Ze,Q,-1/0,z.sortObjects)}Et(N,Q,0,z.sortObjects),k.finish(),z.sortObjects===!0&&k.sort(ee,re),Ut=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,Ut&&De.addToRenderList(k,N),this.info.render.frame++,ut===!0&&$e.beginShadows();const oe=F.state.shadowsArray;if(Be.render(oe,N,Q),ut===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&L.hasRenderPass())===!1){const Ze=k.opaque,Ve=k.transmissive;if(F.setupLights(),Q.isArrayCamera){const it=Q.cameras;if(Ve.length>0)for(let lt=0,At=it.length;lt<At;lt++){const Rt=it[lt];Pt(Ze,Ve,N,Rt)}Ut&&De.render(N);for(let lt=0,At=it.length;lt<At;lt++){const Rt=it[lt];Ct(k,N,Rt,Rt.viewport)}}else Ve.length>0&&Pt(Ze,Ve,N,Q),Ut&&De.render(N),Ct(k,N,Q)}W!==null&&de===0&&(T.updateMultisampleRenderTarget(W),T.updateRenderTargetMipmap(W)),ie&&L.end(z),N.isScene===!0&&N.onAfterRender(z,N,Q),Ue.resetDefaultState(),J=-1,K=null,w.pop(),w.length>0?(F=w[w.length-1],T.setTextureUnits(F.state.textureUnits),ut===!0&&$e.setGlobalState(z.clippingPlanes,F.state.camera)):F=null,V.pop(),V.length>0?k=V[V.length-1]:k=null,Y!==null&&Y.renderEnd()};function Et(N,Q,he,ie){if(N.visible===!1)return;if(N.layers.test(Q.layers)){if(N.isGroup)he=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Q);else if(N.isLightProbeGrid)F.pushLightProbeGrid(N);else if(N.isLight)F.pushLight(N),N.castShadow&&F.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Le.intersectsSprite(N)){ie&&dt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(We);const Ze=Ne.update(N),Ve=N.material;Ve.visible&&k.push(N,Ze,Ve,he,dt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Le.intersectsObject(N))){const Ze=Ne.update(N),Ve=N.material;if(ie&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),dt.copy(N.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),dt.copy(Ze.boundingSphere.center)),dt.applyMatrix4(N.matrixWorld).applyMatrix4(We)),Array.isArray(Ve)){const it=Ze.groups;for(let lt=0,At=it.length;lt<At;lt++){const Rt=it[lt],st=Ve[Rt.materialIndex];st&&st.visible&&k.push(N,Ze,st,he,dt.z,Rt)}}else Ve.visible&&k.push(N,Ze,Ve,he,dt.z,null)}}const He=N.children;for(let Ze=0,Ve=He.length;Ze<Ve;Ze++)Et(He[Ze],Q,he,ie)}function Ct(N,Q,he,ie){const{opaque:oe,transmissive:He,transparent:Ze}=N;F.setupLightsView(he),ut===!0&&$e.setGlobalState(z.clippingPlanes,he),ie&&Ge.viewport(te.copy(ie)),oe.length>0&&bt(oe,Q,he),He.length>0&&bt(He,Q,he),Ze.length>0&&bt(Ze,Q,he),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Pt(N,Q,he,ie){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ie.id]===void 0){const st=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ie.id]=new ar(1,1,{generateMipmaps:!0,type:st?Lr:Mi,minFilter:Us,samples:Math.max(4,$t.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}const He=F.state.transmissionRenderTarget[ie.id],Ze=ie.viewport||te;He.setSize(Ze.z*z.transmissionResolutionScale,Ze.w*z.transmissionResolutionScale);const Ve=z.getRenderTarget(),it=z.getActiveCubeFace(),lt=z.getActiveMipmapLevel();z.setRenderTarget(He),z.getClearColor(b),H=z.getClearAlpha(),H<1&&z.setClearColor(16777215,.5),z.clear(),Ut&&De.render(he);const At=z.toneMapping;z.toneMapping=sr;const Rt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),F.setupLightsView(ie),ut===!0&&$e.setGlobalState(z.clippingPlanes,ie),bt(N,he,ie),T.updateMultisampleRenderTarget(He),T.updateRenderTargetMipmap(He),wt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Xt=0,cn=Q.length;Xt<cn;Xt++){const mn=Q[Xt],{object:en,geometry:wn,material:qe,group:zn}=mn;if(qe.side===ir&&en.layers.test(ie.layers)){const Ft=qe.side;qe.side=hi,qe.needsUpdate=!0,_t(en,he,ie,wn,qe,zn),qe.side=Ft,qe.needsUpdate=!0,st=!0}}st===!0&&(T.updateMultisampleRenderTarget(He),T.updateRenderTargetMipmap(He))}z.setRenderTarget(Ve,it,lt),z.setClearColor(b,H),Rt!==void 0&&(ie.viewport=Rt),z.toneMapping=At}function bt(N,Q,he){const ie=Q.isScene===!0?Q.overrideMaterial:null;for(let oe=0,He=N.length;oe<He;oe++){const Ze=N[oe],{object:Ve,geometry:it,group:lt}=Ze;let At=Ze.material;At.allowOverride===!0&&ie!==null&&(At=ie),Ve.layers.test(he.layers)&&_t(Ve,Q,he,it,At,lt)}}function _t(N,Q,he,ie,oe,He){N.onBeforeRender(z,Q,he,ie,oe,He),N.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),oe.onBeforeRender(z,Q,he,ie,N,He),oe.transparent===!0&&oe.side===ir&&oe.forceSinglePass===!1?(oe.side=hi,oe.needsUpdate=!0,z.renderBufferDirect(he,Q,ie,oe,N,He),oe.side=ds,oe.needsUpdate=!0,z.renderBufferDirect(he,Q,ie,oe,N,He),oe.side=ir):z.renderBufferDirect(he,Q,ie,oe,N,He),N.onAfterRender(z,Q,he,ie,oe,He)}function Sn(N,Q,he){Q.isScene!==!0&&(Q=It);const ie=U.get(N),oe=F.state.lights,He=F.state.shadowsArray,Ze=oe.state.version,Ve=ke.getParameters(N,oe.state,He,Q,he,F.state.lightProbeGridArray),it=ke.getProgramCacheKey(Ve);let lt=ie.programs;ie.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Q.environment:null,ie.fog=Q.fog;const At=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ie.envMap=ne.get(N.envMap||ie.environment,At),ie.envMapRotation=ie.environment!==null&&N.envMap===null?Q.environmentRotation:N.envMapRotation,lt===void 0&&(N.addEventListener("dispose",Qt),lt=new Map,ie.programs=lt);let Rt=lt.get(it);if(Rt!==void 0){if(ie.currentProgram===Rt&&ie.lightsStateVersion===Ze)return kt(N,Ve),Rt}else Ve.uniforms=ke.getUniforms(N),Y!==null&&N.isNodeMaterial&&Y.build(N,he,Ve),N.onBeforeCompile(Ve,z),Rt=ke.acquireProgram(Ve,it),lt.set(it,Rt),ie.uniforms=Ve.uniforms;const st=ie.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(st.clippingPlanes=$e.uniform),kt(N,Ve),ie.needsLights=on(N),ie.lightsStateVersion=Ze,ie.needsLights&&(st.ambientLightColor.value=oe.state.ambient,st.lightProbe.value=oe.state.probe,st.directionalLights.value=oe.state.directional,st.directionalLightShadows.value=oe.state.directionalShadow,st.spotLights.value=oe.state.spot,st.spotLightShadows.value=oe.state.spotShadow,st.rectAreaLights.value=oe.state.rectArea,st.ltc_1.value=oe.state.rectAreaLTC1,st.ltc_2.value=oe.state.rectAreaLTC2,st.pointLights.value=oe.state.point,st.pointLightShadows.value=oe.state.pointShadow,st.hemisphereLights.value=oe.state.hemi,st.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,st.spotLightMatrix.value=oe.state.spotLightMatrix,st.spotLightMap.value=oe.state.spotLightMap,st.pointShadowMatrix.value=oe.state.pointShadowMatrix),ie.lightProbeGrid=F.state.lightProbeGridArray.length>0,ie.currentProgram=Rt,ie.uniformsList=null,Rt}function Jn(N){if(N.uniformsList===null){const Q=N.currentProgram.getUniforms();N.uniformsList=$c.seqWithValue(Q.seq,N.uniforms)}return N.uniformsList}function kt(N,Q){const he=U.get(N);he.outputColorSpace=Q.outputColorSpace,he.batching=Q.batching,he.batchingColor=Q.batchingColor,he.instancing=Q.instancing,he.instancingColor=Q.instancingColor,he.instancingMorph=Q.instancingMorph,he.skinning=Q.skinning,he.morphTargets=Q.morphTargets,he.morphNormals=Q.morphNormals,he.morphColors=Q.morphColors,he.morphTargetsCount=Q.morphTargetsCount,he.numClippingPlanes=Q.numClippingPlanes,he.numIntersection=Q.numClipIntersection,he.vertexAlphas=Q.vertexAlphas,he.vertexTangents=Q.vertexTangents,he.toneMapping=Q.toneMapping}function Gt(N,Q){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;I.setFromMatrixPosition(Q.matrixWorld);for(let he=0,ie=N.length;he<ie;he++){const oe=N[he];if(oe.texture!==null&&oe.boundingBox.containsPoint(I))return oe}return null}function pn(N,Q,he,ie,oe){Q.isScene!==!0&&(Q=It),T.resetTextureUnits();const He=Q.fog,Ze=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Q.environment:null,Ve=W===null?z.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Wt.workingColorSpace,it=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,lt=ne.get(ie.envMap||Ze,it),At=ie.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Rt=!!he.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),st=!!he.morphAttributes.position,Xt=!!he.morphAttributes.normal,cn=!!he.morphAttributes.color;let mn=sr;ie.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(mn=z.toneMapping);const en=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,wn=en!==void 0?en.length:0,qe=U.get(ie),zn=F.state.lights;if(ut===!0&&(Qe===!0||N!==K)){const tn=N===K&&ie.id===J;$e.setState(ie,N,tn)}let Ft=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==zn.state.version||qe.outputColorSpace!==Ve||oe.isBatchedMesh&&qe.batching===!1||!oe.isBatchedMesh&&qe.batching===!0||oe.isBatchedMesh&&qe.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&qe.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&qe.instancing===!1||!oe.isInstancedMesh&&qe.instancing===!0||oe.isSkinnedMesh&&qe.skinning===!1||!oe.isSkinnedMesh&&qe.skinning===!0||oe.isInstancedMesh&&qe.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&qe.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&qe.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&qe.instancingMorph===!1&&oe.morphTexture!==null||qe.envMap!==lt||ie.fog===!0&&qe.fog!==He||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==$e.numPlanes||qe.numIntersection!==$e.numIntersection)||qe.vertexAlphas!==At||qe.vertexTangents!==Rt||qe.morphTargets!==st||qe.morphNormals!==Xt||qe.morphColors!==cn||qe.toneMapping!==mn||qe.morphTargetsCount!==wn||!!qe.lightProbeGrid!=F.state.lightProbeGridArray.length>0)&&(Ft=!0):(Ft=!0,qe.__version=ie.version);let ii=qe.currentProgram;Ft===!0&&(ii=Sn(ie,Q,oe),Y&&ie.isNodeMaterial&&Y.onUpdateProgram(ie,ii,qe));let ri=!1,Bt=!1,ur=!1;const Zt=ii.getUniforms(),dn=qe.uniforms;if(Ge.useProgram(ii.program)&&(ri=!0,Bt=!0,ur=!0),ie.id!==J&&(J=ie.id,Bt=!0),qe.needsLights){const tn=Gt(F.state.lightProbeGridArray,oe);qe.lightProbeGrid!==tn&&(qe.lightProbeGrid=tn,Bt=!0)}if(ri||K!==N){Ge.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Zt.setValue(X,"projectionMatrix",N.projectionMatrix),Zt.setValue(X,"viewMatrix",N.matrixWorldInverse);const Ui=Zt.map.cameraPosition;Ui!==void 0&&Ui.setValue(X,vt.setFromMatrixPosition(N.matrixWorld)),$t.logarithmicDepthBuffer&&Zt.setValue(X,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Zt.setValue(X,"isOrthographic",N.isOrthographicCamera===!0),K!==N&&(K=N,Bt=!0,ur=!0)}if(qe.needsLights&&(zn.state.directionalShadowMap.length>0&&Zt.setValue(X,"directionalShadowMap",zn.state.directionalShadowMap,T),zn.state.spotShadowMap.length>0&&Zt.setValue(X,"spotShadowMap",zn.state.spotShadowMap,T),zn.state.pointShadowMap.length>0&&Zt.setValue(X,"pointShadowMap",zn.state.pointShadowMap,T)),oe.isSkinnedMesh){Zt.setOptional(X,oe,"bindMatrix"),Zt.setOptional(X,oe,"bindMatrixInverse");const tn=oe.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Zt.setValue(X,"boneTexture",tn.boneTexture,T))}oe.isBatchedMesh&&(Zt.setOptional(X,oe,"batchingTexture"),Zt.setValue(X,"batchingTexture",oe._matricesTexture,T),Zt.setOptional(X,oe,"batchingIdTexture"),Zt.setValue(X,"batchingIdTexture",oe._indirectTexture,T),Zt.setOptional(X,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Zt.setValue(X,"batchingColorTexture",oe._colorsTexture,T));const Di=he.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&xt.update(oe,he,ii),(Bt||qe.receiveShadow!==oe.receiveShadow)&&(qe.receiveShadow=oe.receiveShadow,Zt.setValue(X,"receiveShadow",oe.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Q.environment!==null&&(dn.envMapIntensity.value=Q.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=RR()),Bt){if(Zt.setValue(X,"toneMappingExposure",z.toneMappingExposure),qe.needsLights&&jt(dn,ur),He&&ie.fog===!0&&ve.refreshFogUniforms(dn,He),ve.refreshMaterialUniforms(dn,ie,Me,be,F.state.transmissionRenderTarget[N.id]),qe.needsLights&&qe.lightProbeGrid){const tn=qe.lightProbeGrid;dn.probesSH.value=tn.texture,dn.probesMin.value.copy(tn.boundingBox.min),dn.probesMax.value.copy(tn.boundingBox.max),dn.probesResolution.value.copy(tn.resolution)}$c.upload(X,Jn(qe),dn,T)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&($c.upload(X,Jn(qe),dn,T),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Zt.setValue(X,"center",oe.center),Zt.setValue(X,"modelViewMatrix",oe.modelViewMatrix),Zt.setValue(X,"normalMatrix",oe.normalMatrix),Zt.setValue(X,"modelMatrix",oe.matrixWorld),ie.uniformsGroups!==void 0){const tn=ie.uniformsGroups;for(let Ui=0,Yi=tn.length;Ui<Yi;Ui++){const ms=tn[Ui];_e.update(ms,ii),_e.bind(ms,ii)}}return ii}function jt(N,Q){N.ambientLightColor.needsUpdate=Q,N.lightProbe.needsUpdate=Q,N.directionalLights.needsUpdate=Q,N.directionalLightShadows.needsUpdate=Q,N.pointLights.needsUpdate=Q,N.pointLightShadows.needsUpdate=Q,N.spotLights.needsUpdate=Q,N.spotLightShadows.needsUpdate=Q,N.rectAreaLights.needsUpdate=Q,N.hemisphereLights.needsUpdate=Q}function on(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(N,Q,he){const ie=U.get(N);ie.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),U.get(N.texture).__webglTexture=Q,U.get(N.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:he,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Q){const he=U.get(N);he.__webglFramebuffer=Q,he.__useDefaultFramebuffer=Q===void 0};const ft=X.createFramebuffer();this.setRenderTarget=function(N,Q=0,he=0){W=N,se=Q,de=he;let ie=null,oe=!1,He=!1;if(N){const Ve=U.get(N);if(Ve.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(X.FRAMEBUFFER,Ve.__webglFramebuffer),te.copy(N.viewport),le.copy(N.scissor),D=N.scissorTest,Ge.viewport(te),Ge.scissor(le),Ge.setScissorTest(D),J=-1;return}else if(Ve.__webglFramebuffer===void 0)T.setupRenderTarget(N);else if(Ve.__hasExternalTextures)T.rebindTextures(N,U.get(N.texture).__webglTexture,U.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const At=N.depthTexture;if(Ve.__boundDepthTexture!==At){if(At!==null&&U.has(At)&&(N.width!==At.image.width||N.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(N)}}const it=N.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(He=!0);const lt=U.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(lt[Q])?ie=lt[Q][he]:ie=lt[Q],oe=!0):N.samples>0&&T.useMultisampledRTT(N)===!1?ie=U.get(N).__webglMultisampledFramebuffer:Array.isArray(lt)?ie=lt[he]:ie=lt,te.copy(N.viewport),le.copy(N.scissor),D=N.scissorTest}else te.copy(ce).multiplyScalar(Me).floor(),le.copy(ge).multiplyScalar(Me).floor(),D=Oe;if(he!==0&&(ie=ft),Ge.bindFramebuffer(X.FRAMEBUFFER,ie)&&Ge.drawBuffers(N,ie),Ge.viewport(te),Ge.scissor(le),Ge.setScissorTest(D),oe){const Ve=U.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ve.__webglTexture,he)}else if(He){const Ve=Q;for(let it=0;it<N.textures.length;it++){const lt=U.get(N.textures[it]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+it,lt.__webglTexture,he,Ve)}}else if(N!==null&&he!==0){const Ve=U.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ve.__webglTexture,he)}J=-1},this.readRenderTargetPixels=function(N,Q,he,ie,oe,He,Ze,Ve=0){if(!(N&&N.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=U.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ze!==void 0&&(it=it[Ze]),it){Ge.bindFramebuffer(X.FRAMEBUFFER,it);try{const lt=N.textures[Ve],At=lt.format,Rt=lt.type;if(N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ve),!$t.textureFormatReadable(At)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Rt)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=N.width-ie&&he>=0&&he<=N.height-oe&&X.readPixels(Q,he,ie,oe,$.convert(At),$.convert(Rt),He)}finally{const lt=W!==null?U.get(W).__webglFramebuffer:null;Ge.bindFramebuffer(X.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(N,Q,he,ie,oe,He,Ze,Ve=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=U.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ze!==void 0&&(it=it[Ze]),it)if(Q>=0&&Q<=N.width-ie&&he>=0&&he<=N.height-oe){Ge.bindFramebuffer(X.FRAMEBUFFER,it);const lt=N.textures[Ve],At=lt.format,Rt=lt.type;if(N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ve),!$t.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,st),X.bufferData(X.PIXEL_PACK_BUFFER,He.byteLength,X.STREAM_READ),X.readPixels(Q,he,ie,oe,$.convert(At),$.convert(Rt),0);const Xt=W!==null?U.get(W).__webglFramebuffer:null;Ge.bindFramebuffer(X.FRAMEBUFFER,Xt);const cn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await rE(X,cn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,st),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,He),X.deleteBuffer(st),X.deleteSync(cn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Q=null,he=0){const ie=Math.pow(2,-he),oe=Math.floor(N.image.width*ie),He=Math.floor(N.image.height*ie),Ze=Q!==null?Q.x:0,Ve=Q!==null?Q.y:0;T.setTexture2D(N,0),X.copyTexSubImage2D(X.TEXTURE_2D,he,0,0,Ze,Ve,oe,He),Ge.unbindTexture()};const Rn=X.createFramebuffer(),Bn=X.createFramebuffer();this.copyTextureToTexture=function(N,Q,he=null,ie=null,oe=0,He=0){let Ze,Ve,it,lt,At,Rt,st,Xt,cn;const mn=N.isCompressedTexture?N.mipmaps[He]:N.image;if(he!==null)Ze=he.max.x-he.min.x,Ve=he.max.y-he.min.y,it=he.isBox3?he.max.z-he.min.z:1,lt=he.min.x,At=he.min.y,Rt=he.isBox3?he.min.z:0;else{const dn=Math.pow(2,-oe);Ze=Math.floor(mn.width*dn),Ve=Math.floor(mn.height*dn),N.isDataArrayTexture?it=mn.depth:N.isData3DTexture?it=Math.floor(mn.depth*dn):it=1,lt=0,At=0,Rt=0}ie!==null?(st=ie.x,Xt=ie.y,cn=ie.z):(st=0,Xt=0,cn=0);const en=$.convert(Q.format),wn=$.convert(Q.type);let qe;Q.isData3DTexture?(T.setTexture3D(Q,0),qe=X.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(T.setTexture2DArray(Q,0),qe=X.TEXTURE_2D_ARRAY):(T.setTexture2D(Q,0),qe=X.TEXTURE_2D),Ge.activeTexture(X.TEXTURE0),Ge.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),Ge.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Ge.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment);const zn=Ge.getParameter(X.UNPACK_ROW_LENGTH),Ft=Ge.getParameter(X.UNPACK_IMAGE_HEIGHT),ii=Ge.getParameter(X.UNPACK_SKIP_PIXELS),ri=Ge.getParameter(X.UNPACK_SKIP_ROWS),Bt=Ge.getParameter(X.UNPACK_SKIP_IMAGES);Ge.pixelStorei(X.UNPACK_ROW_LENGTH,mn.width),Ge.pixelStorei(X.UNPACK_IMAGE_HEIGHT,mn.height),Ge.pixelStorei(X.UNPACK_SKIP_PIXELS,lt),Ge.pixelStorei(X.UNPACK_SKIP_ROWS,At),Ge.pixelStorei(X.UNPACK_SKIP_IMAGES,Rt);const ur=N.isDataArrayTexture||N.isData3DTexture,Zt=Q.isDataArrayTexture||Q.isData3DTexture;if(N.isDepthTexture){const dn=U.get(N),Di=U.get(Q),tn=U.get(dn.__renderTarget),Ui=U.get(Di.__renderTarget);Ge.bindFramebuffer(X.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ge.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Yi=0;Yi<it;Yi++)ur&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,U.get(N).__webglTexture,oe,Rt+Yi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,U.get(Q).__webglTexture,He,cn+Yi)),X.blitFramebuffer(lt,At,Ze,Ve,st,Xt,Ze,Ve,X.DEPTH_BUFFER_BIT,X.NEAREST);Ge.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(oe!==0||N.isRenderTargetTexture||U.has(N)){const dn=U.get(N),Di=U.get(Q);Ge.bindFramebuffer(X.READ_FRAMEBUFFER,Rn),Ge.bindFramebuffer(X.DRAW_FRAMEBUFFER,Bn);for(let tn=0;tn<it;tn++)ur?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,dn.__webglTexture,oe,Rt+tn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,dn.__webglTexture,oe),Zt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Di.__webglTexture,He,cn+tn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Di.__webglTexture,He),oe!==0?X.blitFramebuffer(lt,At,Ze,Ve,st,Xt,Ze,Ve,X.COLOR_BUFFER_BIT,X.NEAREST):Zt?X.copyTexSubImage3D(qe,He,st,Xt,cn+tn,lt,At,Ze,Ve):X.copyTexSubImage2D(qe,He,st,Xt,lt,At,Ze,Ve);Ge.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Zt?N.isDataTexture||N.isData3DTexture?X.texSubImage3D(qe,He,st,Xt,cn,Ze,Ve,it,en,wn,mn.data):Q.isCompressedArrayTexture?X.compressedTexSubImage3D(qe,He,st,Xt,cn,Ze,Ve,it,en,mn.data):X.texSubImage3D(qe,He,st,Xt,cn,Ze,Ve,it,en,wn,mn):N.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,He,st,Xt,Ze,Ve,en,wn,mn.data):N.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,He,st,Xt,mn.width,mn.height,en,mn.data):X.texSubImage2D(X.TEXTURE_2D,He,st,Xt,Ze,Ve,en,wn,mn);Ge.pixelStorei(X.UNPACK_ROW_LENGTH,zn),Ge.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ft),Ge.pixelStorei(X.UNPACK_SKIP_PIXELS,ii),Ge.pixelStorei(X.UNPACK_SKIP_ROWS,ri),Ge.pixelStorei(X.UNPACK_SKIP_IMAGES,Bt),He===0&&Q.generateMipmaps&&X.generateMipmap(qe),Ge.unbindTexture()},this.initRenderTarget=function(N){U.get(N).__webglFramebuffer===void 0&&T.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?T.setTextureCube(N,0):N.isData3DTexture?T.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?T.setTexture2DArray(N,0):T.setTexture2D(N,0),Ge.unbindTexture()},this.resetState=function(){se=0,de=0,W=null,Ge.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}}const zf=["BLAZE","STORM","FROST","FLAME","SPELL","MAGIC","WRATH","CRYPT","CURSE","POWER","SWORD","ARROW","ARMOR","BRAVE","QUEST","SHADE","GHOST","BEAST","DEMON","ANGEL","RAVEN","TIGER","EAGLE","GIANT","KNAVE","NOBLE","ELDER","ROYAL","CROWN","RELIC","VAULT","TOTEM","EARTH","ETHER","NIGHT","LIGHT","PRIDE","HONOR","VALOR","GLINT","DREAM","JEWEL","CRAFT","SCALE","RANGE","FATAL"];function PR(s,e){const t=s.toUpperCase(),i=e.toUpperCase(),a=i.length,o=new Array(a).fill("gray"),c=i.split("");for(let d=0;d<a;d++)t[d]===i[d]&&(o[d]="green",c[d]=null);for(let d=0;d<a;d++){if(o[d]==="green")continue;const h=c.indexOf(t[d]);h!==-1&&(o[d]="yellow",c[h]=null)}return o}function ls(s){let e;do e=zf[Math.floor(Math.random()*zf.length)];while(s&&e===s&&zf.length>1);return e}function NR(s,e=.6){if(s&&Math.random()<e)return s[Math.floor(Math.random()*s.length)].toUpperCase();const t="AEIOUSTRLNCDMHPGBFKWYV";return t[Math.floor(Math.random()*t.length)]}const LR="/assets/asteroid-D7FGWxEV.glb",IR="/assets/asteroid_01-6TzOJz_n.glb",DR="/assets/asteroid_low_poly-CIoEJvOk.glb",UR="/assets/54509-yorp_asteroid_potential_earth_impactor-Cq4gmqj4.glb",FR="/assets/metal_asteroid-B7Ks757Z.glb",OR="/assets/giant_asteroid_with_purple_accents-DIZHWRLh.glb",kR="/assets/giant_asteroid_with_purple_accents-DIZHWRLh.glb",BR=[LR,IR,DR,UR,FR,OR,kR],Lv=3,zR=6,VR=2500,Ca=.55,Vf=1.1,Pa=.35,Oo=.45,wr=100,HR=18,GR=.33,ko=4e3,Hf=8500,WR=3e3,jR=600,Iv=2e-4,XR=.985,$R=75e-5,Dv=.022,Uv=55e-5;function YR(){const[s,e]=G.useState("checking"),[t,i]=G.useState(0),[a,o]=G.useState(1),[c,d]=G.useState(wr),[h,f]=G.useState(0),[m,g]=G.useState(""),[v,_]=G.useState(!1),[M,E]=G.useState(!0),[y,S]=G.useState(()=>ls()),[A,P]=G.useState([]),[I,k]=G.useState(""),[F,V]=G.useState([]),[w,L]=G.useState(0),[z,B]=G.useState(null),Y=G.useRef(""),se=G.useRef([]);G.useEffect(()=>{Y.current=y},[y]);const de=G.useRef(!1),W=G.useRef(!0),J=G.useRef(0),K=G.useRef("checking"),te=G.useRef(0),le=G.useRef(wr),D=fe=>{K.current=fe,e(fe)},b=G.useRef(null),H=G.useRef(null),xe=G.useRef(null),be=G.useRef(null),Me=G.useRef(null),ee=G.useRef([]),re=G.useRef([]),ce=G.useRef([]),ge=G.useRef([]),Oe=G.useRef([]),Le=G.useRef(new Map),ut=G.useRef(new Map),Qe=G.useRef(null),We=G.useRef(null),vt=G.useRef(!1),dt=G.useRef(new I1),It=G.useRef(null),Ut=G.useRef(new Z),sn=G.useRef(0),X=G.useRef(!1);G.useEffect(()=>{const fe=navigator.xr;if(!fe){D("unsupported");return}fe.isSessionSupported("immersive-ar").then(Ee=>D(Ee?"idle":"unsupported")).catch(()=>D("unsupported"))},[]);const Kt=()=>{const fe=new Vo,Ee=new vp(1,2),Te=Ee.attributes.position.array;for(let Ce=0;Ce<Te.length;Ce+=3){const et=.72+Math.random()*.56;Te[Ce]*=et,Te[Ce+1]*=et,Te[Ce+2]*=et}return Ee.attributes.position.needsUpdate=!0,Ee.computeVertexNormals(),fe.add(new mi(Ee,new Hh({color:7035454,roughness:.95,metalness:.05}))),fe},wt=async()=>{try{const{GLTFLoader:fe}=await yM(async()=>{const{GLTFLoader:et}=await import("./GLTFLoader-CNLKIH7N.js");return{GLTFLoader:et}},[]),Ee=new fe,Te=await Promise.allSettled(BR.map(et=>Ee.loadAsync(et))),Ce=[];return Te.forEach(et=>{et.status==="fulfilled"&&et.value.scene.traverse(mt=>{const me=mt;me.isMesh&&(me.position.set(0,0,0),me.rotation.set(0,0,0),me.scale.setScalar(1),me.material||(me.material=new Hh({color:9078137,roughness:.95,metalness:.05})),Ce.push(me))})}),Ce.length===0?[Kt()]:Ce}catch{return[Kt()]}},$t=(fe,Ee=16347926,Te=26,Ce="burst")=>{const et=H.current;if(!et)return;const mt=new kn,me=new Float32Array(Te*3),at=[],Et=Ce==="burst";for(let Pt=0;Pt<Te;Pt++)me[Pt*3]=fe.x,me[Pt*3+1]=fe.y,me[Pt*3+2]=fe.z,Et?at.push(new Z((Math.random()-.5)*.04,.012+Math.random()*.022,(Math.random()-.5)*.04)):at.push(new Z((Math.random()-.5)*.015,-.002-Math.random()*.006,(Math.random()-.5)*.015));mt.setAttribute("position",new On(me,3));const Ct=new Nf(mt,new Xc({color:Ee,size:Et?.03:.018,transparent:!0,opacity:1}));et.add(Ct),ge.current.push({points:Ct,velocities:at,frame:0,life:Et?55:28})},Ge=fe=>{const Te=document.createElement("canvas");Te.width=128,Te.height=128;const Ce=Te.getContext("2d");Ce.fillStyle="rgba(10,1,24,0.78)",Ce.fillRect(0,0,128,128),Ce.strokeStyle="#a78bfa",Ce.lineWidth=6,Ce.strokeRect(6,6,116,116),Ce.fillStyle="#ec4899",Ce.font='bold 78px "Press Start 2P", monospace',Ce.textAlign="center",Ce.textBaseline="middle",Ce.fillText(fe,128/2,128/2+4);const et=new ZE(Te);et.colorSpace=di,et.anisotropy=4;const mt=new Ax({map:et,transparent:!0,depthWrite:!1}),me=new VE(mt);return me.scale.set(.1,.1,.1),me},Jt=fe=>{const Ee=H.current;if(!Ee)return;const Te=NR(Y.current),Ce=Ge(Te);Ce.position.copy(fe),Ee.add(Ce),Oe.current.push({sprite:Ce,letter:Te,velocity:new Z((Math.random()-.5)*.012,.018+Math.random()*.01,(Math.random()-.5)*.012),life:0,maxLife:140})},U=()=>{const fe=H.current;if(!fe)return;const Ee=[];Oe.current=Oe.current.filter(Te=>{var Ce;return Te.life++,Te.velocity.y-=Iv*.7,Te.velocity.multiplyScalar(.992),Te.sprite.position.add(Te.velocity),Te.sprite.material.opacity=.75+.25*Math.sin(Te.life*.18),Te.life>=Te.maxLife?(Ee.push(Te.letter),fe.remove(Te.sprite),(Ce=Te.sprite.material.map)==null||Ce.dispose(),Te.sprite.material.dispose(),!1):!0}),Ee.length>0&&(se.current.push(...Ee),P([...se.current]))},T=(fe,Ee=3)=>{const Te=H.current;if(!Te)return;const Ce=new kn,et=new Float32Array(Ee*3),mt=[];for(let Ct=0;Ct<Ee;Ct++){const Pt=.025+Math.random()*.025,bt=Math.random()*Math.PI*2;et[Ct*3]=fe.x+Math.cos(bt)*Pt,et[Ct*3+1]=fe.y-.02-Math.random()*.03,et[Ct*3+2]=fe.z+Math.sin(bt)*Pt,mt.push(new Z((Math.random()-.5)*.004,-.001-Math.random()*.003,(Math.random()-.5)*.004))}Ce.setAttribute("position",new On(et,3));const me=Math.random(),at=me<.4?7035454:me<.75?9074784:5917238,Et=new Nf(Ce,new Xc({color:at,size:.012,transparent:!0,opacity:.7,depthWrite:!1}));Te.add(Et),ge.current.push({points:Et,velocities:mt,frame:0,life:40})},ne=(fe,Ee,Te=5)=>{const Ce=H.current;if(!Ce)return;const et=Ee.clone();et.lengthSq()>1e-4?et.normalize():et.set(0,1,0);const mt=new kn,me=new Float32Array(Te*3),at=[];for(let bt=0;bt<Te;bt++){me[bt*3]=fe.x,me[bt*3+1]=fe.y,me[bt*3+2]=fe.z;const _t=et.clone().multiplyScalar(.013+Math.random()*.018);_t.x+=(Math.random()-.5)*.01,_t.y+=(Math.random()-.25)*.012,_t.z+=(Math.random()-.5)*.01,at.push(_t)}mt.setAttribute("position",new On(me,3));const Et=Math.random(),Ct=Et<.33?16765514:Et<.7?16742946:16724753,Pt=new Nf(mt,new Xc({color:Ct,size:.032,transparent:!0,opacity:.95,depthWrite:!1}));Ce.add(Pt),ge.current.push({points:Pt,velocities:at,frame:0,life:22})},ye=fe=>{const Ee=ee.current,Te=H.current,Ce=We.current;if(Ee.length===0||!Te||!Ce)return null;const mt=Ee[Math.floor(Math.random()*Ee.length)].clone(!0);let me=null;if(mt.traverse(Gt=>{const pn=Gt;if(pn.isMesh){const jt=pn.material.clone();pn.material=jt,me||(me=jt)}}),!me)return null;const at=new Ur().setFromObject(mt),Et=new Z;at.getSize(Et);const Ct=Math.max(Et.x,Et.y,Et.z)||1,Pt=.2+Math.random()*.15;mt.scale.setScalar(Pt/Ct);const bt=$e(),_t=Math.random()*Math.PI*2;let Sn;if(bt)mt.position.set(bt.x,bt.y,bt.z),Sn=bt.y;else{const Gt=Ca+Math.random()*(Vf-Ca);Sn=Ce.y+Pa+Math.random()*Oo,mt.position.set(Ce.x+Math.cos(_t)*Gt,Sn,Ce.z+Math.sin(_t)*Gt)}mt.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),Te.add(mt);const Jn=Math.random(),kt=Jn<.5?"straight":Jn<.8?"curve":"orbit-strike";return{obj:mt,baseMat:me,state:"drift",behaviour:kt,velocity:new Z,angularVel:new Z((Math.random()-.5)*.02,(Math.random()-.5)*.024,(Math.random()-.5)*.016),nextAttackTime:fe+WR+Math.random()*(Hf-ko),stateTimer:0,orbitCenter:mt.position.clone(),orbitAngle:_t,orbitRadius:.04+Math.random()*.06,spawnHeight:Sn,alive:!0}},we=(fe,Ee)=>{const Te=$e(),Ce=We.current;let et;if(Te)fe.obj.position.set(Te.x,Te.y,Te.z),et=Te.y;else if(Ce){const me=Math.random()*Math.PI*2,at=Ca+Math.random()*(Vf-Ca);et=Ce.y+Pa+Math.random()*Oo,fe.obj.position.set(Ce.x+Math.cos(me)*at,et,Ce.z+Math.sin(me)*at)}else return!1;fe.obj.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),fe.obj.visible=!0,fe.state="drift",fe.velocity.set(0,0,0),fe.angularVel.set((Math.random()-.5)*.02,(Math.random()-.5)*.024,(Math.random()-.5)*.016);const mt=Math.random();return fe.behaviour=mt<.5?"straight":mt<.8?"curve":"orbit-strike",fe.orbitCenter.copy(fe.obj.position),fe.orbitAngle=Math.random()*Math.PI*2,fe.orbitRadius=.04+Math.random()*.06,fe.spawnHeight=et,fe.nextAttackTime=Ee+ko+Math.random()*(Hf-ko),fe.stateTimer=0,fe.alive=!0,fe.baseMat.emissive.setHex(0),fe.baseMat.emissiveIntensity=0,!0},Ne=fe=>{const Ee=ce.current.find(Te=>!Te.alive);return!Ee||!we(Ee,fe)?!1:(re.current.push(Ee),!0)},ke=(fe,Ee)=>{fe.alive&&(fe.alive=!1,$t(fe.obj.position.clone(),Ee?16347926:16720384),fe.obj.visible=!1,re.current=re.current.filter(Te=>Te!==fe),Ee&&(te.current++,i(te.current),Jt(fe.obj.position.clone())),setTimeout(()=>{K.current==="playing"&&(de.current||Ne(performance.now()))},VR))},ve=()=>{le.current=Math.max(0,le.current-HR),d(le.current),f(fe=>fe+1),Qd(200),le.current<=0&&D("game-over")},Se=G.useCallback(fe=>{var Pt;if(K.current!=="playing")return;const Ee=b.current,Te=H.current;if(!Ee||!Te||re.current.length===0)return;const Ce=fe.touches[0];if(!Ce)return;const et=Ce.clientX/window.innerWidth*2-1,mt=-(Ce.clientY/window.innerHeight)*2+1,me=Ee.xr.getCamera(),at=((Pt=me.cameras)==null?void 0:Pt.length)>0?me.cameras[0]:xe.current;dt.current.setFromCamera(new Lt(et,mt),at);const Et=re.current.map(bt=>bt.obj),Ct=dt.current.intersectObjects(Et,!0);if(Ct.length>0){let bt=Ct[0].object;for(;bt.parent&&bt.parent!==Te;)bt=bt.parent;const _t=re.current.find(Sn=>Sn.obj===bt);if(!_t)return;_t.state==="charging"||_t.state==="attacking"?ke(_t,!0):(T(_t.obj.position.clone(),6),Qd(30))}},[]),je=(fe,Ee)=>{const Te=H.current;if(!Te)return;const Ce=fe.detectedPlanes??new Set,et=new Set,mt=K.current==="playing"?.25:.85;Ce.forEach(at=>{et.add(at);const Et=fe.getPose(at.planeSpace,Ee);if(!Et)return;const Ct=Et.transform.position,Pt=new Z(Ct.x,Ct.y,Ct.z),bt=at.polygon??[];if(bt.length<3)return;let _t=0;for(let jt=0;jt<bt.length;jt++){const on=bt[jt],ft=bt[(jt+1)%bt.length];_t+=on.x*ft.z-ft.x*on.z}_t=Math.abs(_t)/2;const Sn=new Ot().fromArray(Et.transform.matrix),Jn=bt.map(jt=>{const on=new Z(jt.x,0,jt.z);return on.applyMatrix4(Sn),on});Le.current.set(at,{center:Pt,area:_t,orientation:at.orientation??"unknown",worldPolygon:Jn});let kt=ut.current.get(at);const Gt=bt.map(jt=>new Z(jt.x,0,jt.z));if(kt){const jt=kt.outline.geometry.attributes.position.array;if(jt.length===Gt.length*3){for(let ft=0;ft<Gt.length;ft++)jt[ft*3]=Gt[ft].x,jt[ft*3+1]=Gt[ft].y,jt[ft*3+2]=Gt[ft].z;kt.outline.geometry.attributes.position.needsUpdate=!0;const on=kt.fill.geometry.attributes.position.array;for(let ft=0;ft<Gt.length;ft++)on[ft*3]=Gt[ft].x,on[ft*3+1]=Gt[ft].y,on[ft*3+2]=Gt[ft].z;kt.fill.geometry.attributes.position.needsUpdate=!0}else{const on=new Float32Array(Gt.length*3);Gt.forEach((Rn,Bn)=>{on[Bn*3]=Rn.x,on[Bn*3+1]=Rn.y,on[Bn*3+2]=Rn.z}),kt.outline.geometry.setAttribute("position",new On(on,3)),kt.fill.geometry.setAttribute("position",new On(on.slice(),3));const ft=[];for(let Rn=1;Rn<Gt.length-1;Rn++)ft.push(0,Rn,Rn+1);kt.fill.geometry.setIndex(ft)}}else{const jt=new kn().setFromPoints(Gt),on=new Px({color:1096065,transparent:!0,opacity:mt}),ft=new KE(jt,on),Rn=new kn,Bn=new Float32Array(Gt.length*3);Gt.forEach((ie,oe)=>{Bn[oe*3]=ie.x,Bn[oe*3+1]=ie.y,Bn[oe*3+2]=ie.z}),Rn.setAttribute("position",new On(Bn,3));const N=[];for(let ie=1;ie<Gt.length-1;ie++)N.push(0,ie,ie+1);Rn.setIndex(N),Rn.computeVertexNormals();const Q=new hp({color:1096065,transparent:!0,opacity:mt*.18,side:ir,depthWrite:!1}),he=new mi(Rn,Q);Te.add(ft),Te.add(he),kt={outline:ft,fill:he},ut.current.set(at,kt)}const pn=new Ot().fromArray(Et.transform.matrix);kt.outline.matrix.copy(pn),kt.outline.matrixAutoUpdate=!1,kt.outline.updateMatrixWorld(!0),kt.fill.matrix.copy(pn),kt.fill.matrixAutoUpdate=!1,kt.fill.updateMatrixWorld(!0),kt.outline.visible=W.current,kt.fill.visible=W.current,kt.outline.material.opacity=mt,kt.fill.material.opacity=mt*.18}),Le.current.forEach((at,Et)=>{et.has(Et)||Le.current.delete(Et)}),ut.current.forEach((at,Et)=>{et.has(Et)||(Te.remove(at.outline),Te.remove(at.fill),at.outline.geometry.dispose(),at.fill.geometry.dispose(),at.outline.material.dispose(),at.fill.material.dispose(),ut.current.delete(Et))});let me=null;if(Le.current.forEach(at=>{at.orientation!=="horizontal"&&at.orientation!=="unknown"||(!me||at.area>me.area)&&(me=at)}),me){const at=me;Qe.current=at,vt.current||(We.current=at.center.clone(),K.current==="scanning"&&D("plane-found"))}},$e=()=>{const fe=Qe.current;if(!fe||fe.worldPolygon.length<3){const me=We.current;if(!me)return null;const at=Ca+Math.random()*(Vf-Ca),Et=Math.random()*Math.PI*2;return{x:me.x+Math.cos(Et)*at,y:me.y+Pa+Math.random()*Oo,z:me.z+Math.sin(Et)*at}}const Ee=fe.worldPolygon;let Te=1/0,Ce=-1/0,et=1/0,mt=-1/0;for(const me of Ee)me.x<Te&&(Te=me.x),me.x>Ce&&(Ce=me.x),me.z<et&&(et=me.z),me.z>mt&&(mt=me.z);for(let me=0;me<40;me++){const at=Te+Math.random()*(Ce-Te),Et=et+Math.random()*(mt-et);let Ct=!1;for(let Pt=0,bt=Ee.length-1;Pt<Ee.length;bt=Pt++){const _t=Ee[Pt].x,Sn=Ee[Pt].z,Jn=Ee[bt].x,kt=Ee[bt].z;Sn>Et!=kt>Et&&at<(Jn-_t)*(Et-Sn)/(kt-Sn)+_t&&(Ct=!Ct)}if(Ct)return{x:at,y:fe.center.y+Pa+Math.random()*Oo,z:Et}}return{x:fe.center.x,y:fe.center.y+Pa,z:fe.center.z}},Be=(fe,Ee,Te,Ce)=>{const et=fe.getViewerPose(Ee);if(et){const me=et.transform.position;Ut.current.set(me.x,me.y,me.z)}const mt=Ut.current;re.current.forEach((me,at)=>{var Et;if(me.obj.rotation.x+=me.angularVel.x,me.obj.rotation.y+=me.angularVel.y,me.obj.rotation.z+=me.angularVel.z,me.state==="drift"){me.orbitAngle+=.004;const Ct=new Z(me.orbitCenter.x+Math.cos(me.orbitAngle)*me.orbitRadius,me.spawnHeight+Math.sin(Ce*.9+me.orbitAngle)*.03,me.orbitCenter.z+Math.sin(me.orbitAngle)*me.orbitRadius);me.obj.position.lerp(Ct,.08),me.velocity.multiplyScalar(.9),(J.current+at*7)%25===0&&T(me.obj.position,2),Te>me.nextAttackTime&&(me.state="charging",me.stateTimer=Te,me.baseMat.emissive.setHex(16720384),me.baseMat.emissiveIntensity=1,me.angularVel.multiplyScalar(2.4))}else if(me.state==="charging"){const Ct=(Te-me.stateTimer)/jR;if(me.baseMat.emissiveIntensity=.7+Math.sin(Ce*32)*.4,me.obj.position.x+=(Math.random()-.5)*.004,me.obj.position.y+=(Math.random()-.5)*.004,me.obj.position.z+=(Math.random()-.5)*.004,J.current%5===0){const Pt=mt.clone().sub(me.obj.position);ne(me.obj.position,Pt,3)}if(Ct>=1){const Pt=mt.clone().sub(me.obj.position).normalize();me.velocity.copy(Pt).multiplyScalar(.01),me.state="attacking"}}else if(me.state==="attacking"){const Ct=mt.clone().sub(me.obj.position),Pt=Ct.length();if(Ct.normalize(),me.velocity.addScaledVector(Ct,$R),me.behaviour==="curve"){const _t=new Z(-Ct.z,0,Ct.x);me.velocity.addScaledVector(_t,Math.sin(Ce*5)*Uv)}else if(me.behaviour==="orbit-strike"){const _t=new Z(-Ct.z,0,Ct.x);me.velocity.addScaledVector(_t,Uv*.6)}if(me.velocity.y-=Iv,me.velocity.multiplyScalar(XR),me.velocity.length()>Dv&&me.velocity.setLength(Dv),me.obj.position.add(me.velocity),me.baseMat.emissiveIntensity=.6+Math.sin(Ce*22)*.4,J.current%3===0&&ne(me.obj.position,me.velocity,6),Pt<GR&&(ve(),ke(me,!1)),(We.current?me.obj.position.distanceTo(We.current):0)>3.5){me.state="drift",me.baseMat.emissive.setHex(0),me.baseMat.emissiveIntensity=0,me.velocity.set(0,0,0),me.angularVel.multiplyScalar(1/2.4);const _t=$e();_t?(me.obj.position.set(_t.x,_t.y,_t.z),me.orbitCenter.set(_t.x,_t.y,_t.z),me.spawnHeight=_t.y):me.spawnHeight=(((Et=We.current)==null?void 0:Et.y)??0)+Pa+Math.random()*Oo,me.orbitAngle=Math.random()*Math.PI*2,me.orbitRadius=.04+Math.random()*.06,me.nextAttackTime=Te+ko+Math.random()*(Hf-ko)}}})},De=fe=>{ge.current=ge.current.filter(Ee=>{if(Ee.frame++,Ee.frame>Ee.life)return fe.remove(Ee.points),!1;const Te=Ee.points.geometry.attributes.position.array;for(let Ce=0;Ce<Ee.velocities.length;Ce++)Te[Ce*3]+=Ee.velocities[Ce].x,Te[Ce*3+1]+=Ee.velocities[Ce].y-4e-4*Ee.frame,Te[Ce*3+2]+=Ee.velocities[Ce].z;return Ee.points.geometry.attributes.position.needsUpdate=!0,Ee.points.material.opacity=Math.max(0,1-Ee.frame/Ee.life),!0})},xt=async()=>{D("loading"),le.current=wr,te.current=0,d(wr),i(0),o(1),vt.current=!0;try{const fe=await wt();ee.current=fe;const Ee=performance.now();for(let Te=0;Te<zR;Te++){const Ce=ye(Ee);Ce&&(Ce.obj.visible=!1,Ce.alive=!1,ce.current.push(Ce))}for(let Te=0;Te<Lv;Te++)Ne(Ee);document.addEventListener("touchstart",Se,{passive:!0}),D("playing")}catch(fe){D("error"),g((fe==null?void 0:fe.message)??"Failed to load model")}},yt=()=>{const fe=H.current;ut.current.forEach(Ee=>{fe==null||fe.remove(Ee.outline),fe==null||fe.remove(Ee.fill),Ee.outline.geometry.dispose(),Ee.fill.geometry.dispose(),Ee.outline.material.dispose(),Ee.fill.material.dispose()}),ut.current.clear()},Tt=G.useCallback(()=>{var fe,Ee,Te;document.removeEventListener("touchstart",Se),(fe=b.current)==null||fe.setAnimationLoop(null),(Ee=be.current)==null||Ee.end().catch(()=>{}),be.current=null,(Te=It.current)==null||Te.remove(),It.current=null,ce.current.forEach(Ce=>{var et;return(et=H.current)==null?void 0:et.remove(Ce.obj)}),ce.current=[],re.current=[],ge.current=[],Le.current.clear(),yt(),Qe.current=null,We.current=null,vt.current=!1},[Se]),$=async fe=>{D("starting"),g(""),i(0),te.current=0,d(wr),le.current=wr,o(1),vt.current=!1,Le.current.clear(),Qe.current=null;try{const Ee=document.createElement("canvas");Ee.style.cssText="position:fixed;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;",document.body.appendChild(Ee),It.current=Ee;const Te=Math.min(window.devicePixelRatio,1.5),Ce=new CR({canvas:Ee,alpha:!0,antialias:Te<1.3,powerPreference:"high-performance"});Ce.xr.enabled=!0,Ce.setPixelRatio(Te),Ce.setSize(window.innerWidth,window.innerHeight),Ce.outputColorSpace=di,Ce.toneMapping=ep,Ce.toneMappingExposure=1.1,b.current=Ce;const et=new UE;et.add(new S1(16777215,1.1));const mt=new rv(16773590,3);mt.position.set(2,4,2),et.add(mt);const me=new rv(8956671,1);me.position.set(-2,2,-1),et.add(me),H.current=et;const at=new fi(70,window.innerWidth/window.innerHeight,.01,100);xe.current=at;const Et=navigator.xr,Ct={requiredFeatures:[],optionalFeatures:["plane-detection","hit-test","local-floor","dom-overlay"]};fe&&(Ct.domOverlay={root:fe});const Pt={requiredFeatures:[],optionalFeatures:["dom-overlay"]};fe&&(Pt.domOverlay={root:fe});const bt={requiredFeatures:[],optionalFeatures:[]};let _t=null;const Sn=[{label:"full",init:Ct},{label:"overlay",init:Pt},{label:"bare",init:bt}],Jn=[];for(const Gt of Sn)try{console.log("[AR] Trying immersive-ar session:",Gt.label,Gt.init),_t=await Et.requestSession("immersive-ar",Gt.init),console.log("[AR] Session created with config:",Gt.label);break}catch(pn){const jt=`${Gt.label}: ${(pn==null?void 0:pn.name)??"Error"} — ${(pn==null?void 0:pn.message)??pn}`;Jn.push(jt),console.warn("[AR] Session attempt failed —",jt)}if(!_t)throw new Error(`AR unavailable. Tried ${Sn.length} configs:
${Jn.join(`
`)}`);be.current=_t,await Ce.xr.setSession(_t);let kt;try{kt=await _t.requestReferenceSpace("local-floor")}catch{kt=await _t.requestReferenceSpace("local")}Me.current=kt,D("scanning"),sn.current=performance.now(),X.current=!1,Ce.setAnimationLoop((Gt,pn)=>{if(pn){if(J.current++,(J.current&3)===0&&je(pn,kt),K.current==="scanning"&&!vt.current&&!X.current&&performance.now()-sn.current>3500){const jt=pn.getViewerPose(kt);if(jt){const on=jt.transform.position,ft=jt.transform.orientation,Rn=new hs(ft.x,ft.y,ft.z,ft.w),Bn=new Z(0,0,-1).applyQuaternion(Rn),N=new Z(on.x+Bn.x*1.4,on.y-.4,on.z+Bn.z*1.4);We.current=N,X.current=!0,D("plane-found")}}if(K.current==="playing"&&!de.current){const jt=performance.now(),on=jt*.001;Be(pn,kt,jt,on),U(),De(et)}Ce.render(et,at)}}),_t.addEventListener("end",()=>{Ce.setAnimationLoop(null),Ee.remove(),It.current=null,be.current=null,ce.current.forEach(Gt=>et.remove(Gt.obj)),ce.current=[],re.current=[],ge.current=[],Le.current.clear(),yt(),Qe.current=null,We.current=null,vt.current=!1,D("idle"),i(0),te.current=0,d(wr),le.current=wr,o(1)})}catch(Ee){Tt(),D("error"),g((Ee==null?void 0:Ee.message)??"Failed to start AR")}},Ue=G.useCallback(()=>{de.current=!0,_(!0)},[]),_e=G.useCallback(()=>{de.current=!1,_(!1)},[]),Ye=G.useCallback(()=>{const fe=!W.current;W.current=fe,E(fe),ut.current.forEach(Ee=>{Ee.outline.visible=fe,Ee.fill.visible=fe})},[]);G.useEffect(()=>()=>Tt(),[Tt]);const ze=G.useCallback(fe=>{o(Math.max(1,Math.floor(fe)))},[]),Ae=G.useCallback(fe=>{fe<=0||(le.current=Math.max(0,le.current-fe),d(le.current),f(Ee=>Ee+1),Qd(180),le.current<=0&&D("game-over"))},[]),tt=G.useCallback(()=>{re.current.forEach(fe=>{fe.alive=!1,fe.obj.visible=!1}),re.current=[]},[]),St=G.useCallback((fe=Lv)=>{re.current.forEach(Te=>{Te.alive=!1,Te.obj.visible=!1}),re.current=[];const Ee=performance.now();for(let Te=0;Te<fe;Te++)Ne(Ee)},[]),Qt=G.useCallback(fe=>{if(!fe.length)return;const Ee=[...se.current];for(const Te of fe){const Ce=Ee.indexOf(Te.toUpperCase());Ce!==-1&&Ee.splice(Ce,1)}se.current=Ee,P(Ee)},[]);return{phase:s,smashed:t,wave:a,hp:c,maxHp:wr,damageTick:h,errorMsg:m,isSupported:s!=="unsupported"&&s!=="checking",paused:v,showPlane:M,collectedLetters:A,startAR:$,startGame:xt,stopAR:Tt,pause:Ue,resume:_e,togglePlane:Ye,setWaveTo:ze,damagePlayer:Ae,consumeLetters:Qt,clearActiveAsteroids:tt,respawnWave:St}}const Go=6e4,Fv=6,qR=8e3,Ov=18,KR=8,ou=10;function ZR(s){return 3+Math.floor((s-ou)/ou)}function JR(s){const{onBossAttack:e,onWaveStart:t,onWaveEnd:i,enabled:a}=s,[o,c]=G.useState("idle"),[d,h]=G.useState(1),[f,m]=G.useState(Go),[g,v]=G.useState(()=>ls()),[_,M]=G.useState(""),[E,y]=G.useState([]),[S,A]=G.useState(0),[P,I]=G.useState(0),[k,F]=G.useState(0),V=G.useRef("idle"),w=G.useRef(1);G.useEffect(()=>{V.current=o},[o]),G.useEffect(()=>{w.current=d},[d]),G.useEffect(()=>{if(!a||o!=="wave-active")return;const W=performance.now(),J=f,K=()=>{const le=performance.now()-W,D=Math.max(0,J-le);if(m(D),D<=0){const b=w.current,H=b%ou===0;if(H){const xe=ZR(b);I(xe),F(xe),c("boss-fight")}else c("intermission");v(ls(g)),M(""),y([]),i==null||i(b,H);return}},te=window.setInterval(K,100);return()=>window.clearInterval(te)},[a,o]),G.useEffect(()=>{if(!a||o!=="boss-fight")return;const W=window.setInterval(()=>{e(Ov)},qR);return()=>window.clearInterval(W)},[a,o,e]);const L=G.useCallback(()=>{h(1),w.current=1,v(ls()),M(""),y([]),A(0),I(0),F(0),m(Go),c("wave-active"),t==null||t(1)},[t]),z=G.useCallback(()=>{c("idle"),h(1),M(""),y([]),A(0),I(0),F(0),m(Go)},[]),B=G.useCallback(W=>{if(V.current!=="intermission"&&V.current!=="boss-fight")return;const J=W.toUpperCase();/^[A-Z]$/.test(J)&&M(K=>K.length>=5?K:K+J)},[]),Y=G.useCallback(()=>{M(W=>W.slice(0,-1))},[]),se=G.useCallback(()=>{const W=w.current+1;h(W),w.current=W,M(""),y([]),I(0),F(0),v(ls(g)),m(Go),c("wave-active"),t==null||t(W)},[t,g]),de=G.useCallback(()=>{const W={ok:!1,result:"continue",event:null,solvedWord:null,attemptsUsed:0};if(_.length!==5)return W;const J=V.current;if(J!=="intermission"&&J!=="boss-fight")return W;const K=PR(_,g),te=_.toUpperCase()===g.toUpperCase(),le=[...E,{word:_.toUpperCase(),colors:K}];if(y(le),M(""),te){const D=g.toUpperCase(),b=le.length;if(A(H=>H+1),J==="boss-fight"){const H=P-1;return I(H),H<=0?(se(),{ok:!0,result:"win",event:"boss-defeated",solvedWord:D,attemptsUsed:b}):(v(ls(g)),y([]),{ok:!0,result:"continue",event:"seal-broken",solvedWord:D,attemptsUsed:b})}else return se(),{ok:!0,result:"win",event:"wave-cleared",solvedWord:D,attemptsUsed:b}}return J==="boss-fight"&&e(KR),le.length>=Fv?(J==="boss-fight"&&e(Ov),v(ls(g)),y([]),{ok:!0,result:"lose",event:null,solvedWord:null,attemptsUsed:0}):{ok:!0,result:"continue",event:null,solvedWord:null,attemptsUsed:0}},[_,g,E,V,P,se,e]);return{metaPhase:o,wave:d,timeRemainingMs:f,targetWord:g,guess:_,attempts:E,guessesRemaining:Fv-E.length,bossActive:o==="boss-fight",bossWordsLeft:P,bossWordsTotal:k,wordsSolved:S,startGame:L,addLetter:B,backspace:Y,submitGuess:de,reset:z}}const Gf={},kv=["Focus on letters you have not yet tried.","One of your letters sits in the wrong constellation.","Trust the colors. They never lie.","The seal is forged from elements both ancient and familiar."],Bv=(Gf==null?void 0:Gf.VITE_API_BASE)??"";function QR(){const[s,e]=G.useState(null),[t,i]=G.useState(!1),a=G.useCallback(async d=>{try{const h=d?`?exclude=${encodeURIComponent(d)}`:"",f=await fetch(`${Bv}/api/codex/word/${h}`,{signal:AbortSignal.timeout(3e3)});if(!f.ok)throw new Error(`HTTP ${f.status}`);return(await f.json()).word.toUpperCase()}catch{return ls(d)}},[]),o=G.useCallback(async(d,h)=>{if(!hM().aiHintsEnabled){const f=kv[Math.floor(Math.random()*kv.length)];return e(f),f}i(!0),e(null);try{const f=await fetch(`${Bv}/api/codex/hint/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:d,attempts:h}),signal:AbortSignal.timeout(8e3)});if(!f.ok)throw new Error(`HTTP ${f.status}`);const g=(await f.json()).hint;return e(g),g}catch{const f="The Codex is silent… trust your instincts, Warden.";return e(f),f}finally{i(!1)}},[]),c=G.useCallback(()=>e(null),[]);return{fetchWord:a,fetchHint:o,clearHint:c,hint:s,hintLoading:t}}const eC=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]];function tC({title:s,subtitle:e,variant:t="normal",wordLength:i=5,guess:a,attempts:o,collectedLetters:c,maxAttempts:d=6,guessesRemaining:h,bossWordsLeft:f,bossWordsTotal:m,hp:g,maxHp:v,hint:_,hintLoading:M,onAddLetter:E,onBackspace:y,onSubmit:S,onRequestHint:A}){G.useEffect(()=>{const L=z=>{z.key==="Enter"?(z.preventDefault(),S()):z.key==="Backspace"?(z.preventDefault(),y()):/^[a-zA-Z]$/.test(z.key)&&(z.preventDefault(),E(z.key.toUpperCase()))};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[S,y,E]);const P={};for(const L of c)P[L.toUpperCase()]=(P[L.toUpperCase()]||0)+1;const I={},k={gray:0,yellow:1,green:2};o.forEach(L=>{L.word.split("").forEach((z,B)=>{const Y=L.colors[B];(!I[z]||k[Y]>k[I[z]])&&(I[z]=Y)})});const F=t==="boss"?"#ec4899":"#a78bfa",V=t==="boss"?"border-[#ec4899]":"border-[#8b5cf6]",w=[];for(o.forEach(L=>w.push({letters:L.word.split(""),colors:L.colors,locked:!0,isCurrent:!1})),w.length<d&&w.push({letters:a.padEnd(i," ").split("").slice(0,i),colors:Array(i).fill("gray"),locked:!1,isCurrent:!0});w.length<d;)w.push({letters:Array(i).fill(" "),colors:Array(i).fill("gray"),locked:!1,isCurrent:!1});return C.jsxs("div",{className:"fixed inset-0 z-40 flex items-end justify-center px-2 pb-2",style:{backgroundColor:"rgba(10,1,24,0.92)",animation:"wpFadeIn 0.25s ease-out"},children:[C.jsx("style",{children:`
        @keyframes wpFadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes wpSlideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes wpFlip    { 0% { transform: rotateX(0); } 50% { transform: rotateX(90deg); } 100% { transform: rotateX(0); } }
        @keyframes wpBossPulse { 0%, 100% { box-shadow: 0 0 8px #ec4899, 0 0 18px #ec4899aa; } 50% { box-shadow: 0 0 14px #ec4899, 0 0 30px #ec4899; } }
      `}),C.jsxs("div",{className:`w-full max-w-md bg-[#0a0118] border-4 ${V} relative font-['Press_Start_2P',_monospace]`,style:{maxHeight:"96vh",overflowY:"auto",animation:`wpSlideUp 0.32s cubic-bezier(0.22, 1, 0.36, 1)${t==="boss"?", wpBossPulse 2.2s ease-in-out infinite":""}`},children:[C.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),C.jsxs("div",{className:`bg-[#1a0a2e] border-b-4 ${V} px-4 py-3 text-center`,children:[C.jsx("p",{className:"text-[10px] tracking-widest",style:{color:F},children:s}),e&&C.jsx("p",{className:"text-[7px] text-white/70 mt-1 tracking-wider",children:e}),t==="boss"&&m!==void 0&&C.jsxs("div",{className:"mt-2 flex items-center justify-center gap-1",children:[Array.from({length:m}).map((L,z)=>{const B=z<m-(f??0);return C.jsx("div",{className:"w-3 h-3 border-2",style:{borderColor:B?"#10b981":"#ec4899",backgroundColor:B?"#10b981":"transparent",boxShadow:B?"0 0 6px #10b981":"0 0 4px #ec489988"}},z)}),C.jsxs("span",{className:"text-[7px] text-[#ec4899] ml-2 tracking-widest",children:[m-(f??0)," / ",m," SEALS"]})]}),t==="boss"&&g!==void 0&&v!==void 0&&C.jsxs("div",{className:"mt-2 flex items-center justify-center gap-2",children:[C.jsx("span",{className:"text-[6px] text-[#facc15] tracking-widest",children:"HP"}),C.jsx("div",{className:"w-32 h-2 bg-[#1a0a2e] border border-[#facc15]/50 relative",children:C.jsx("div",{className:"h-full transition-all",style:{width:`${g/v*100}%`,backgroundColor:g>v*.5?"#10b981":g>v*.25?"#facc15":"#ef4444"}})}),C.jsx("span",{className:"text-[7px] text-white/80",children:g})]})]}),C.jsxs("div",{className:"px-3 py-3 flex flex-col items-center gap-1",children:[w.map((L,z)=>C.jsx("div",{className:"flex gap-1",children:L.letters.map((B,Y)=>{const se=L.locked?L.colors[Y]==="green"?"#10b981":L.colors[Y]==="yellow"?"#facc15":"#3a2a4e":"#1a0a2e",de=L.locked?se:L.isCurrent&&B!==" "?"#a78bfa":"#3a2a4e",W=L.locked&&L.colors[Y]==="yellow"?"#0a0118":"#ffffff";return C.jsx("div",{className:"flex items-center justify-center",style:{width:"38px",height:"38px",backgroundColor:se,border:`2px solid ${de}`,color:W,fontSize:"14px",fontWeight:"bold",animation:L.locked?`wpFlip 0.4s ${Y*.08}s ease-in-out both`:"none"},children:B.trim()||""},Y)})},z)),C.jsxs("p",{className:"text-[7px] text-[#a78bfa]/70 mt-1 tracking-widest",children:[h," TRIES LEFT"]})]}),(_||M)&&C.jsxs("div",{className:"mx-3 mb-2 px-3 py-2 border-2 border-[#60a5fa] bg-[#60a5fa]/10",children:[C.jsx("p",{className:"text-[6px] text-[#60a5fa] tracking-widest mb-1",children:"⚡ WARDEN'S HINT"}),C.jsx("p",{className:"text-[7px] text-white/90 leading-[12px] italic",children:M?"Consulting the codex...":_})]}),C.jsxs("div",{className:"px-3 py-2 border-t-2 border-[#8b5cf6]/30 flex items-center justify-between",children:[C.jsxs("p",{className:"text-[6px] text-[#a78bfa] tracking-widest",children:["COLLECTED: ",C.jsx("span",{className:"text-[#10b981]",children:c.length})]}),A&&C.jsx("button",{onClick:A,disabled:M||!!_,className:"text-[6px] px-2 py-1 border-2 border-[#60a5fa] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-[#0a0118] disabled:opacity-40 disabled:cursor-not-allowed tracking-widest",children:_?"HINT USED":"HINT?"})]}),C.jsx("div",{className:"px-2 pb-3 pt-1 space-y-1",children:eC.map((L,z)=>C.jsxs("div",{className:"flex gap-1 justify-center",children:[z===2&&C.jsx("button",{onClick:S,disabled:a.length!==5,className:"px-2 text-[7px] bg-[#10b981] text-white border-2 border-[#10b981] hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed tracking-widest",style:{minWidth:"42px"},children:"ENT"}),L.map(B=>{const Y=(P[B]??0)>0,se=I[B];let de=Y?"#1a0a2e":"#0a0118",W=Y?"#8b5cf6":"#3a2a4e",J=Y?"#ffffff":"#6b7280";return se==="green"&&(de="#10b981",W="#10b981",J="#ffffff"),se==="yellow"&&(de="#facc15",W="#facc15",J="#0a0118"),se==="gray"&&(de="#1f1530",W="#3a2a4e",J="#6b7280"),C.jsxs("button",{onClick:()=>E(B),className:"text-[9px] active:translate-y-px relative",style:{minWidth:"24px",height:"32px",backgroundColor:de,border:`2px solid ${W}`,color:J,fontFamily:"'Press Start 2P', monospace"},title:Y?`${P[B]} in inventory`:"Not yet collected",children:[B,Y&&C.jsx("span",{className:"absolute -top-1 -right-1 text-[5px] px-0.5",style:{backgroundColor:"#ec4899",color:"#0a0118",fontFamily:"'Press Start 2P', monospace"},children:P[B]})]},B)}),z===2&&C.jsx("button",{onClick:y,className:"px-2 text-[7px] bg-[#ef4444] text-white border-2 border-[#ef4444] hover:opacity-90 tracking-widest",style:{minWidth:"42px"},children:"⌫"})]},z))})]})]})}var Mp={};(function s(e,t,i,a){var o=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),c=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var D=new OffscreenCanvas(1,1),b=D.getContext("2d");b.fillRect(0,0,1,1);var H=D.transferToImageBitmap();b.createPattern(H,"no-repeat")}catch{return!1}return!0})();function h(){}function f(D){var b=t.exports.Promise,H=b!==void 0?b:e.Promise;return typeof H=="function"?new H(D):(D(h,h),null)}var m=(function(D,b){return{transform:function(H){if(D)return H;if(b.has(H))return b.get(H);var xe=new OffscreenCanvas(H.width,H.height),be=xe.getContext("2d");return be.drawImage(H,0,0),b.set(H,xe),xe},clear:function(){b.clear()}}})(d,new Map),g=(function(){var D=Math.floor(16.666666666666668),b,H,xe={},be=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(Me){var ee=Math.random();return xe[ee]=requestAnimationFrame(function re(ce){be===ce||be+D-1<ce?(be=ce,delete xe[ee],Me()):xe[ee]=requestAnimationFrame(re)}),ee},H=function(Me){xe[Me]&&cancelAnimationFrame(xe[Me])}):(b=function(Me){return setTimeout(Me,D)},H=function(Me){return clearTimeout(Me)}),{frame:b,cancel:H}})(),v=(function(){var D,b,H={};function xe(be){function Me(ee,re){be.postMessage({options:ee||{},callback:re})}be.init=function(re){var ce=re.transferControlToOffscreen();be.postMessage({canvas:ce},[ce])},be.fire=function(re,ce,ge){if(b)return Me(re,null),b;var Oe=Math.random().toString(36).slice(2);return b=f(function(Le){function ut(Qe){Qe.data.callback===Oe&&(delete H[Oe],be.removeEventListener("message",ut),b=null,m.clear(),ge(),Le())}be.addEventListener("message",ut),Me(re,Oe),H[Oe]=ut.bind(null,{data:{callback:Oe}})}),b},be.reset=function(){be.postMessage({reset:!0});for(var re in H)H[re](),delete H[re]}}return function(){if(D)return D;if(!i&&o){var be=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{D=new Worker(URL.createObjectURL(new Blob([be])))}catch(Me){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Me),null}xe(D)}return D}})(),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function M(D,b){return b?b(D):D}function E(D){return D!=null}function y(D,b,H){return M(D&&E(D[b])?D[b]:_[b],H)}function S(D){return D<0?0:Math.floor(D)}function A(D,b){return Math.floor(Math.random()*(b-D))+D}function P(D){return parseInt(D,16)}function I(D){return D.map(k)}function k(D){var b=String(D).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:P(b.substring(0,2)),g:P(b.substring(2,4)),b:P(b.substring(4,6))}}function F(D){var b=y(D,"origin",Object);return b.x=y(b,"x",Number),b.y=y(b,"y",Number),b}function V(D){D.width=document.documentElement.clientWidth,D.height=document.documentElement.clientHeight}function w(D){var b=D.getBoundingClientRect();D.width=b.width,D.height=b.height}function L(D){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=D,b}function z(D,b,H,xe,be,Me,ee,re,ce){D.save(),D.translate(b,H),D.rotate(Me),D.scale(xe,be),D.arc(0,0,1,ee,re,ce),D.restore()}function B(D){var b=D.angle*(Math.PI/180),H=D.spread*(Math.PI/180);return{x:D.x,y:D.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:D.startVelocity*.5+Math.random()*D.startVelocity,angle2D:-b+(.5*H-Math.random()*H),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:D.color,shape:D.shape,tick:0,totalTicks:D.ticks,decay:D.decay,drift:D.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:D.gravity*3,ovalScalar:.6,scalar:D.scalar,flat:D.flat}}function Y(D,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var H=b.tick++/b.totalTicks,xe=b.x+b.random*b.tiltCos,be=b.y+b.random*b.tiltSin,Me=b.wobbleX+b.random*b.tiltCos,ee=b.wobbleY+b.random*b.tiltSin;if(D.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-H)+")",D.beginPath(),c&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))D.fill(K(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(Me-xe)*.1,Math.abs(ee-be)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var re=Math.PI/10*b.wobble,ce=Math.abs(Me-xe)*.1,ge=Math.abs(ee-be)*.1,Oe=b.shape.bitmap.width*b.scalar,Le=b.shape.bitmap.height*b.scalar,ut=new DOMMatrix([Math.cos(re)*ce,Math.sin(re)*ce,-Math.sin(re)*ge,Math.cos(re)*ge,b.x,b.y]);ut.multiplySelf(new DOMMatrix(b.shape.matrix));var Qe=D.createPattern(m.transform(b.shape.bitmap),"no-repeat");Qe.setTransform(ut),D.globalAlpha=1-H,D.fillStyle=Qe,D.fillRect(b.x-Oe/2,b.y-Le/2,Oe,Le),D.globalAlpha=1}else if(b.shape==="circle")D.ellipse?D.ellipse(b.x,b.y,Math.abs(Me-xe)*b.ovalScalar,Math.abs(ee-be)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):z(D,b.x,b.y,Math.abs(Me-xe)*b.ovalScalar,Math.abs(ee-be)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var We=Math.PI/2*3,vt=4*b.scalar,dt=8*b.scalar,It=b.x,Ut=b.y,sn=5,X=Math.PI/sn;sn--;)It=b.x+Math.cos(We)*dt,Ut=b.y+Math.sin(We)*dt,D.lineTo(It,Ut),We+=X,It=b.x+Math.cos(We)*vt,Ut=b.y+Math.sin(We)*vt,D.lineTo(It,Ut),We+=X;else D.moveTo(Math.floor(b.x),Math.floor(b.y)),D.lineTo(Math.floor(b.wobbleX),Math.floor(be)),D.lineTo(Math.floor(Me),Math.floor(ee)),D.lineTo(Math.floor(xe),Math.floor(b.wobbleY));return D.closePath(),D.fill(),b.tick<b.totalTicks}function se(D,b,H,xe,be){var Me=b.slice(),ee=D.getContext("2d"),re,ce,ge=f(function(Oe){function Le(){re=ce=null,ee.clearRect(0,0,xe.width,xe.height),m.clear(),be(),Oe()}function ut(){i&&!(xe.width===a.width&&xe.height===a.height)&&(xe.width=D.width=a.width,xe.height=D.height=a.height),!xe.width&&!xe.height&&(H(D),xe.width=D.width,xe.height=D.height),ee.clearRect(0,0,xe.width,xe.height),Me=Me.filter(function(Qe){return Y(ee,Qe)}),Me.length?re=g.frame(ut):Le()}re=g.frame(ut),ce=Le});return{addFettis:function(Oe){return Me=Me.concat(Oe),ge},canvas:D,promise:ge,reset:function(){re&&g.cancel(re),ce&&ce()}}}function de(D,b){var H=!D,xe=!!y(b||{},"resize"),be=!1,Me=y(b,"disableForReducedMotion",Boolean),ee=o&&!!y(b||{},"useWorker"),re=ee?v():null,ce=H?V:w,ge=D&&re?!!D.__confetti_initialized:!1,Oe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Le;function ut(We,vt,dt){for(var It=y(We,"particleCount",S),Ut=y(We,"angle",Number),sn=y(We,"spread",Number),X=y(We,"startVelocity",Number),Kt=y(We,"decay",Number),wt=y(We,"gravity",Number),$t=y(We,"drift",Number),Ge=y(We,"colors",I),Jt=y(We,"ticks",Number),U=y(We,"shapes"),T=y(We,"scalar"),ne=!!y(We,"flat"),ye=F(We),we=It,Ne=[],ke=D.width*ye.x,ve=D.height*ye.y;we--;)Ne.push(B({x:ke,y:ve,angle:Ut,spread:sn,startVelocity:X,color:Ge[we%Ge.length],shape:U[A(0,U.length)],ticks:Jt,decay:Kt,gravity:wt,drift:$t,scalar:T,flat:ne}));return Le?Le.addFettis(Ne):(Le=se(D,Ne,ce,vt,dt),Le.promise)}function Qe(We){var vt=Me||y(We,"disableForReducedMotion",Boolean),dt=y(We,"zIndex",Number);if(vt&&Oe)return f(function(X){X()});H&&Le?D=Le.canvas:H&&!D&&(D=L(dt),document.body.appendChild(D)),xe&&!ge&&ce(D);var It={width:D.width,height:D.height};re&&!ge&&re.init(D),ge=!0,re&&(D.__confetti_initialized=!0);function Ut(){if(re){var X={getBoundingClientRect:function(){if(!H)return D.getBoundingClientRect()}};ce(X),re.postMessage({resize:{width:X.width,height:X.height}});return}It.width=It.height=null}function sn(){Le=null,xe&&(be=!1,e.removeEventListener("resize",Ut)),H&&D&&(document.body.contains(D)&&document.body.removeChild(D),D=null,ge=!1)}return xe&&!be&&(be=!0,e.addEventListener("resize",Ut,!1)),re?re.fire(We,It,sn):ut(We,It,sn)}return Qe.reset=function(){re&&re.reset(),Le&&Le.reset()},Qe}var W;function J(){return W||(W=de(null,{useWorker:!0,resize:!0})),W}function K(D,b,H,xe,be,Me,ee){var re=new Path2D(D),ce=new Path2D;ce.addPath(re,new DOMMatrix(b));var ge=new Path2D;return ge.addPath(ce,new DOMMatrix([Math.cos(ee)*be,Math.sin(ee)*be,-Math.sin(ee)*Me,Math.cos(ee)*Me,H,xe])),ge}function te(D){if(!c)throw new Error("path confetti are not supported in this browser");var b,H;typeof D=="string"?b=D:(b=D.path,H=D.matrix);var xe=new Path2D(b),be=document.createElement("canvas"),Me=be.getContext("2d");if(!H){for(var ee=1e3,re=ee,ce=ee,ge=0,Oe=0,Le,ut,Qe=0;Qe<ee;Qe+=2)for(var We=0;We<ee;We+=2)Me.isPointInPath(xe,Qe,We,"nonzero")&&(re=Math.min(re,Qe),ce=Math.min(ce,We),ge=Math.max(ge,Qe),Oe=Math.max(Oe,We));Le=ge-re,ut=Oe-ce;var vt=10,dt=Math.min(vt/Le,vt/ut);H=[dt,0,0,dt,-Math.round(Le/2+re)*dt,-Math.round(ut/2+ce)*dt]}return{type:"path",path:b,matrix:H}}function le(D){var b,H=1,xe="#000000",be='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof D=="string"?b=D:(b=D.text,H="scalar"in D?D.scalar:H,be="fontFamily"in D?D.fontFamily:be,xe="color"in D?D.color:xe);var Me=10*H,ee=""+Me+"px "+be,re=new OffscreenCanvas(Me,Me),ce=re.getContext("2d");ce.font=ee;var ge=ce.measureText(b),Oe=Math.ceil(ge.actualBoundingBoxRight+ge.actualBoundingBoxLeft),Le=Math.ceil(ge.actualBoundingBoxAscent+ge.actualBoundingBoxDescent),ut=2,Qe=ge.actualBoundingBoxLeft+ut,We=ge.actualBoundingBoxAscent+ut;Oe+=ut+ut,Le+=ut+ut,re=new OffscreenCanvas(Oe,Le),ce=re.getContext("2d"),ce.font=ee,ce.fillStyle=xe,ce.fillText(b,Qe,We);var vt=1/H;return{type:"bitmap",bitmap:re.transferToImageBitmap(),matrix:[vt,0,0,vt,-Oe*vt/2,-Le*vt/2]}}t.exports=function(){return J().apply(this,arguments)},t.exports.reset=function(){J().reset()},t.exports.create=de,t.exports.shapeFromPath=te,t.exports.shapeFromText=le})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Mp,!1);const nC=Mp.exports;Mp.exports.create;const iC={"wave-cleared":{title:"WAVE CLEARED",subtitle:"The path opens. Onward, Warden.",color:"#10b981",borderColor:"#10b981",confettiColors:["#10b981","#a78bfa","#ec4899","#facc15"],emoji:"✦"},"seal-broken":{title:"SEAL BROKEN",subtitle:"The Overlord weakens.",color:"#facc15",borderColor:"#facc15",confettiColors:["#facc15","#ec4899","#ef4444","#a78bfa"],emoji:"⚡"},"boss-defeated":{title:"BOSS DEFEATED",subtitle:"The Rift retreats. For now.",color:"#ec4899",borderColor:"#ec4899",confettiColors:["#ec4899","#facc15","#10b981","#a78bfa","#60a5fa"],emoji:"★"}};function rC({kind:s,word:e,wave:t,attemptsUsed:i,sealsBroken:a,sealsTotal:o,duration:c=2500,onDismiss:d}){const h=iC[s];return G.useEffect(()=>{const f=(g,v,_)=>{try{nC({particleCount:g,spread:v,startVelocity:_,origin:{x:.5,y:.35},colors:h.confettiColors,zIndex:100,ticks:200})}catch{}};f(80,65,35),s==="boss-defeated"&&(setTimeout(()=>f(60,90,45),250),setTimeout(()=>f(60,90,45),500));const m=setTimeout(d,c);return()=>clearTimeout(m)},[s,c,d,h.confettiColors]),C.jsxs("div",{className:"fixed inset-0 z-[60] flex items-center justify-center px-6 font-['Press_Start_2P',_monospace]",style:{backgroundColor:"rgba(10,1,24,0.7)",animation:"celebFadeIn 0.2s ease-out"},onClick:d,children:[C.jsx("style",{children:`
        @keyframes celebFadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes celebPopIn   { 0% { transform: scale(0.6) rotate(-2deg); opacity: 0; } 60% { transform: scale(1.08) rotate(1deg); opacity: 1; } 100% { transform: scale(1) rotate(0); opacity: 1; } }
        @keyframes celebGlow    { 0%, 100% { filter: drop-shadow(0 0 8px var(--c, #10b981)) drop-shadow(0 0 18px var(--c, #10b981)); } 50% { filter: drop-shadow(0 0 14px var(--c, #10b981)) drop-shadow(0 0 28px var(--c, #10b981)); } }
        @keyframes celebSparkle { 0%, 100% { transform: scale(1) rotate(0); opacity: 0.9; } 50% { transform: scale(1.2) rotate(15deg); opacity: 1; } }
        @keyframes celebStripe  { 0% { background-position: 0 0; } 100% { background-position: 40px 0; } }
      `}),C.jsxs("div",{className:"relative w-full max-w-sm bg-[#0a0118] border-4 px-6 py-7 text-center",style:{borderColor:h.borderColor,animation:"celebPopIn 0.5s cubic-bezier(0.22, 1, 0.36, 1)",boxShadow:`0 0 24px ${h.borderColor}99, 0 0 60px ${h.borderColor}55`,"--c":h.color},onClick:f=>f.stopPropagation(),children:[C.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20",style:{backgroundImage:`repeating-linear-gradient(45deg, ${h.color} 0, ${h.color} 2px, transparent 2px, transparent 14px)`,animation:"celebStripe 1.2s linear infinite"}}),C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"text-5xl mb-2",style:{color:h.color,animation:"celebSparkle 1.6s ease-in-out infinite, celebGlow 2s ease-in-out infinite"},children:h.emoji}),C.jsx("p",{className:"text-[14px] tracking-widest mb-1",style:{color:h.color,textShadow:`0 0 8px ${h.color}`},children:h.title}),C.jsx("p",{className:"text-[7px] text-white/70 leading-relaxed mb-4 px-2",children:h.subtitle}),C.jsx("div",{className:"flex items-center justify-center gap-1 mb-4",children:e.split("").map((f,m)=>C.jsx("div",{className:"flex items-center justify-center",style:{width:"32px",height:"32px",backgroundColor:h.color,border:`2px solid ${h.color}`,color:"#0a0118",fontSize:"13px",fontWeight:"bold",animation:`celebPopIn 0.4s ${.15+m*.05}s cubic-bezier(0.22, 1, 0.36, 1) both`,boxShadow:`0 0 6px ${h.color}88`},children:f},m))}),C.jsxs("div",{className:"flex items-center justify-center gap-4 text-[6px] tracking-widest mb-3",children:[C.jsxs("span",{className:"text-white/50",children:["WAVE ",C.jsx("span",{className:"text-white",children:t})]}),C.jsx("span",{className:"text-white/30",children:"·"}),C.jsxs("span",{className:"text-white/50",children:[i," ",C.jsx("span",{className:"text-white",children:i===1?"TRY":"TRIES"})]}),o!==void 0&&a!==void 0&&C.jsxs(C.Fragment,{children:[C.jsx("span",{className:"text-white/30",children:"·"}),C.jsxs("span",{className:"text-white/50",children:["SEAL ",C.jsxs("span",{style:{color:h.color},children:[a,"/",o]})]})]})]}),C.jsx("p",{className:"text-[6px] text-white/30 tracking-widest",style:{animation:"celebFadeIn 0.5s 0.6s ease-out both"},children:"TAP TO CONTINUE"})]})]})]})}const Wf={},sC=(Wf==null?void 0:Wf.VITE_API_BASE)??"",aC={asteroid_smashed:["Another fragment falls… you cannot stop the Rift.","Destroy all you wish — the void is infinite."],word_solved:["The seal weakens… but the Overlord is eternal.","One word closer to your doom."],wave_start:["A new wave descends upon you. Brace yourself.","My sentinels multiply. You will not."],wave_cleared:["Impossible. My asteroids… defeated?","One wave falls. Ten more await."],game_over:["The Rift swallows you whole. As it always will.","Fade into the void, Warden. Fade."],player_hurt:["Feel the weight of the cosmos, little Warden.","Pain is a reminder that you are mortal."],hint_requested:["You need guidance? How… pathetically human.","Seek your hint. It will not save you."]};function zv(s){const e=aC[s]??["The Rift watches. Always."];return e[Math.floor(Math.random()*e.length)]}async function jf(s,e=""){try{const t=localStorage.getItem("arwordle.settings.v1");if(t){const i=JSON.parse(t);if(i&&i.bossTauntsEnabled===!1)return zv(s)}}catch{}try{const t=await fetch(`${sC}/api/boss/taunt/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:s,context:e}),signal:AbortSignal.timeout(5e3)});if(!t.ok)throw new Error(`HTTP ${t.status}`);return(await t.json()).taunt}catch{return zv(s)}}const oC={checking:"CHECKING DEVICE...",unsupported:"AR NOT SUPPORTED",idle:"READY TO SCAN",starting:"INITIALIZING AR...",scanning:"SCANNING SURFACE...","plane-found":"SURFACE LOCKED ✓",loading:"LOADING MODELS...",playing:"COMBAT ACTIVE","game-over":"DEFEATED",error:"SESSION ERROR"},lC={checking:"#a78bfa",unsupported:"#ef4444",idle:"#a78bfa",starting:"#facc15",scanning:"#facc15","plane-found":"#10b981",loading:"#a78bfa",playing:"#ec4899","game-over":"#ef4444",error:"#ef4444"};function cC(){const s=el(),e=G.useRef(null),{phase:t,smashed:i,hp:a,maxHp:o,damageTick:c,errorMsg:d,paused:h,showPlane:f,collectedLetters:m,startAR:g,startGame:v,stopAR:_,pause:M,resume:E,togglePlane:y,setWaveTo:S,damagePlayer:A,clearActiveAsteroids:P,respawnWave:I}=YR(),{fetchHint:k,hint:F,hintLoading:V,clearHint:w}=QR(),L=JR({enabled:t==="playing",onBossAttack:ge=>A(ge),onWaveStart:ge=>{w(),ge>1&&I(),E()},onWaveEnd:(ge,Oe)=>{P(),M(),w(),Oe&&jf("wave_start","Boss wave begins").then(Y)}}),z=L.wave,[B,Y]=G.useState(null),[se,de]=G.useState(null);G.useEffect(()=>{t==="playing"&&L.metaPhase==="idle"&&L.startGame()},[t,L.metaPhase,L.startGame]),G.useEffect(()=>{S(L.wave)},[L.wave,S]),G.useEffect(()=>{t==="game-over"&&(L.reset(),Y(null),jf("game_over").then(Y))},[t,L.reset]);const W=lC[t],J=oC[t],K=t==="scanning"||t==="plane-found"||t==="loading"||t==="playing"||t==="game-over",te=t==="idle"||t==="error",le=t==="plane-found",D=t==="playing",b=t==="loading"||t==="starting",H=t==="game-over",xe=Math.max(0,Math.min(100,a/o*100)),be=xe>60?"#10b981":xe>30?"#facc15":"#ef4444",[Me,ee]=G.useState(!1);G.useEffect(()=>{if(c===0)return;ee(!0);const ge=setTimeout(()=>ee(!1),350);return()=>clearTimeout(ge)},[c]);const re=()=>g(e.current??void 0),ce=()=>{_(),s("/mission")};return C.jsxs("div",{ref:e,className:"fixed inset-0 font-['Press_Start_2P',_monospace] select-none",style:{backgroundColor:K?"transparent":"#0a0118",zIndex:100},children:[C.jsx("style",{children:`
        @keyframes scanLine  { 0% { transform:translateY(-5%);opacity:.7 } 100% { transform:translateY(105vh);opacity:0 } }
        @keyframes pulseRing { 0% { transform:scale(.8);opacity:1 } 100% { transform:scale(2.2);opacity:0 } }
        @keyframes blink     { 0%,100% { opacity:1 } 50% { opacity:.15 } }
        @keyframes fadeSlide { from { opacity:0;transform:translateY(10px) } to { opacity:1;transform:translateY(0) } }
        @keyframes corner    { 0%,100% { opacity:1 } 50% { opacity:.25 } }
        @keyframes spin      { to { transform:rotate(360deg) } }
      `}),K&&C.jsx("div",{className:"pointer-events-none absolute inset-x-0 h-0.5",style:{background:`linear-gradient(to right,transparent,${W}88,transparent)`,animation:"scanLine 3.5s linear infinite",zIndex:10}}),["tl","tr","bl","br"].map(ge=>C.jsx("div",{className:"absolute pointer-events-none",style:{top:ge[0]==="t"?14:void 0,bottom:ge[0]==="b"?14:void 0,left:ge[1]==="l"?14:void 0,right:ge[1]==="r"?14:void 0,width:28,height:28,borderTop:ge[0]==="t"?`3px solid ${W}`:void 0,borderBottom:ge[0]==="b"?`3px solid ${W}`:void 0,borderLeft:ge[1]==="l"?`3px solid ${W}`:void 0,borderRight:ge[1]==="r"?`3px solid ${W}`:void 0,animation:"corner 2s ease-in-out infinite",zIndex:20}},ge)),C.jsxs("div",{className:"absolute top-0 inset-x-0 flex items-center justify-between px-10 py-4",style:{zIndex:30},children:[C.jsx("button",{onClick:ce,className:"text-[8px] transition-colors",style:{color:K?"#ffffffcc":"#a78bfa"},children:"← EXIT"}),C.jsx("div",{className:"text-[7px] px-2 py-1 border",style:{color:W,borderColor:W,animation:K&&t!=="plane-found"&&!D?"blink 1s ease-in-out infinite":"none"},children:J}),D||H?C.jsxs("div",{className:"text-[7px] text-[#ec4899]",children:["KILLS ",i]}):C.jsx("div",{className:"text-[7px]",style:{color:K?"#10b981":"#374151"},children:"WAVE 01"})]}),D&&L.metaPhase==="wave-active"&&C.jsxs("div",{className:"absolute top-24 inset-x-0 px-10",style:{zIndex:30},children:[C.jsxs("div",{className:"flex items-center justify-between mb-1",children:[C.jsx("span",{className:"text-[6px] text-white/60 tracking-widest",children:"TIME"}),C.jsxs("span",{className:"text-[6px] tracking-widest",style:{color:L.timeRemainingMs<1e4?"#ef4444":"#a78bfa",animation:L.timeRemainingMs<1e4?"blink 0.6s ease-in-out infinite":"none"},children:[Math.ceil(L.timeRemainingMs/1e3),"s",z%ou===0&&" → BOSS"]}),C.jsxs("span",{className:"text-[6px] text-[#10b981] tracking-widest",children:["☕ ",m.length]})]}),C.jsx("div",{className:"w-full h-1.5 bg-[#1a0a2e]/80 border border-white/10",children:C.jsx("div",{className:"h-full transition-all",style:{width:`${L.timeRemainingMs/Go*100}%`,backgroundColor:L.timeRemainingMs<1e4?"#ef4444":"#8b5cf6",boxShadow:`0 0 6px ${L.timeRemainingMs<1e4?"#ef4444":"#8b5cf6"}`}})})]}),(D||H)&&C.jsxs("div",{className:"absolute top-14 inset-x-0 px-10",style:{zIndex:30},children:[C.jsxs("div",{className:"flex items-center justify-between mb-1",children:[C.jsx("span",{className:"text-[6px] text-white/60 tracking-widest",children:"HP"}),C.jsxs("span",{className:"text-[6px] text-[#facc15] tracking-widest",children:["WAVE ",String(z).padStart(2,"0")]}),C.jsxs("span",{className:"text-[6px]",style:{color:be},children:[a,"/",o]})]}),C.jsx("div",{className:"w-full h-2 bg-[#1a0a2e]/80 border border-white/20",children:C.jsx("div",{className:"h-full transition-all duration-300 ease-out",style:{width:`${xe}%`,backgroundColor:be,boxShadow:`0 0 8px ${be}`}})})]}),Me&&C.jsx("div",{className:"pointer-events-none absolute inset-0",style:{backgroundColor:"rgba(239,68,68,0.35)",boxShadow:"inset 0 0 120px 40px rgba(239,68,68,0.6)",animation:"fadeSlide .35s ease-out",zIndex:45}}),D&&!h&&L.metaPhase==="wave-active"&&C.jsx("button",{onClick:M,className:"absolute bottom-6 right-4 w-11 h-11 flex items-center justify-center border-2 border-[#a78bfa] bg-[#0a0118]/85 active:scale-95 hover:bg-[#1a0a2e]",style:{zIndex:35,boxShadow:"0 0 12px #8b5cf677, 0 0 4px #0a0118"},"aria-label":"Pause",children:C.jsxs("div",{className:"flex gap-1",children:[C.jsx("div",{className:"w-1.5 h-4 bg-[#a78bfa]"}),C.jsx("div",{className:"w-1.5 h-4 bg-[#a78bfa]"})]})}),D&&h&&L.metaPhase==="wave-active"&&C.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-5 px-8",style:{zIndex:60,backgroundColor:"rgba(10,1,24,0.85)",animation:"fadeSlide .25s ease-out"},children:[C.jsx("p",{className:"text-[18px] tracking-widest text-[#a78bfa]",children:"PAUSED"}),C.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-xs",children:[C.jsx("button",{onClick:E,className:"py-4 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors",children:"> RESUME <"}),C.jsxs("button",{onClick:y,className:"py-3 text-[9px] border-2 transition-colors",style:{borderColor:f?"#10b981":"#facc15",color:f?"#10b981":"#facc15"},children:["PLANE: ",f?"VISIBLE":"HIDDEN"]}),C.jsx("button",{onClick:async()=>{E(),_(),await new Promise(ge=>setTimeout(ge,80)),re()},className:"py-3 text-[9px] border-2 border-white/40 text-white/80 hover:text-white transition-colors",children:"RESTART"}),C.jsx("button",{onClick:ce,className:"py-3 text-[9px] border-2 border-white/20 text-white/60 hover:text-white/90 transition-colors",children:"EXIT TO MISSION"})]}),C.jsxs("p",{className:"text-[6px] text-white/40 tracking-widest mt-2",children:["KILLS ",i," · WAVE ",z," · HP ",a,"/",o]})]}),!K&&C.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-7 px-8",style:{zIndex:20,animation:"fadeSlide .4s ease-out"},children:[C.jsxs("div",{className:"relative flex items-center justify-center w-36 h-36",children:[C.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:W,opacity:.18}}),C.jsx("div",{className:"absolute w-24 h-24 rounded-full border",style:{borderColor:W,opacity:.35}}),b&&C.jsx("div",{className:"absolute w-full h-full rounded-full border-t-2",style:{borderColor:W,animation:"spin .9s linear infinite"}}),!b&&(t==="idle"||t==="error")&&C.jsxs(C.Fragment,{children:[C.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:W,animation:"pulseRing 1.6s ease-out infinite"}}),C.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:W,animation:"pulseRing 1.6s .8s ease-out infinite"}})]}),C.jsx("span",{className:"text-3xl",children:t==="unsupported"?"🚫":t==="error"?"⚠️":"📷"})]}),C.jsxs("div",{className:"text-center space-y-2",children:[C.jsx("p",{className:"text-[10px] tracking-widest",style:{color:W},children:J}),t==="unsupported"&&C.jsxs("p",{className:"text-[7px] text-white/40 leading-loose",children:["WebXR immersive-ar not",C.jsx("br",{}),"supported on this device."]}),t==="error"&&C.jsx("pre",{className:"text-[7px] text-[#ef444488] leading-relaxed max-w-xs text-left whitespace-pre-wrap break-words px-3 py-2 border border-[#ef444444] bg-[#ef44440a]",style:{fontFamily:"'Press Start 2P', monospace"},children:d}),t==="idle"&&C.jsxs("p",{className:"text-[7px] text-white/40 leading-loose",children:["Point camera at a flat surface",C.jsx("br",{}),"then tap START AR."]})]}),te&&C.jsxs("button",{onClick:re,className:"relative py-4 px-8 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5",children:[C.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),t==="error"?"> RETRY AR <":"> START AR <"]})]}),K&&C.jsxs(C.Fragment,{children:[!D&&C.jsx("div",{className:"absolute pointer-events-none",style:{top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:20},children:t==="plane-found"?C.jsxs("div",{className:"text-center",children:[C.jsx("div",{className:"w-20 h-20 border-4 border-[#10b981] mx-auto",style:{boxShadow:"0 0 24px #10b98166"}}),C.jsx("p",{className:"text-[7px] text-[#10b981] mt-2 tracking-widest",style:{animation:"blink 1.5s ease-in-out infinite"},children:"SURFACE LOCKED"})]}):C.jsxs("div",{className:"text-center",children:[C.jsx("div",{className:"w-14 h-14 border-2 border-[#facc15] mx-auto",style:{boxShadow:"0 0 12px #facc1544",animation:"blink 1s ease-in-out infinite"}}),C.jsx("p",{className:"text-[7px] text-[#facc15] mt-2 tracking-widest",children:"SCANNING..."})]})}),le&&C.jsx("div",{className:"absolute bottom-10 inset-x-0 flex justify-center px-8",style:{zIndex:30,animation:"fadeSlide .4s ease-out"},children:C.jsx("button",{onClick:v,className:"w-full max-w-xs py-5 text-[11px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5",style:{boxShadow:"0 0 32px #8b5cf677"},children:"> START GAME <"})}),D&&L.metaPhase==="wave-active"&&C.jsx("div",{className:"absolute bottom-10 inset-x-0 text-center",style:{zIndex:30,animation:"fadeSlide .3s ease-out"},children:C.jsx("p",{className:"text-[8px] text-[#ec4899] tracking-widest",style:{animation:"blink 2.2s ease-in-out infinite"},children:"TAP ONLY RED ROCKS · WAIT TO STRIKE"})}),D&&(L.metaPhase==="intermission"||L.metaPhase==="boss-fight")&&C.jsx(tC,{variant:L.metaPhase==="boss-fight"?"boss":"normal",title:L.metaPhase==="boss-fight"?`BOSS · WAVE ${z}`:`WAVE ${z} CLEARED`,subtitle:L.metaPhase==="boss-fight"?B??"The Rift Overlord blocks your path. Solve the seals!":"Solve to advance to the next wave",guess:L.guess,attempts:L.attempts,guessesRemaining:L.guessesRemaining,collectedLetters:m,bossWordsLeft:L.bossWordsLeft,bossWordsTotal:L.bossWordsTotal,hp:L.metaPhase==="boss-fight"?a:void 0,maxHp:L.metaPhase==="boss-fight"?o:void 0,hint:F,hintLoading:V,onAddLetter:L.addLetter,onBackspace:L.backspace,onSubmit:()=>{const ge=L.bossWordsTotal,Oe=L.bossWordsLeft,Le=L.submitGuess();Le.event&&(de({kind:Le.event,word:Le.solvedWord??"",wave:z,attemptsUsed:Le.attemptsUsed,sealsTotal:ge||void 0,sealsBroken:ge?ge-Oe+1:void 0}),(Le.event==="seal-broken"||Le.event==="boss-defeated")&&jf("word_solved",`Solved ${Le.solvedWord} in ${Le.attemptsUsed}`).then(Y))},onRequestHint:()=>k(L.targetWord,L.attempts.map(ge=>({guess:ge.word,colors:ge.colors})))}),se&&C.jsx(rC,{kind:se.kind,word:se.word,wave:se.wave,attemptsUsed:se.attemptsUsed,sealsBroken:se.sealsBroken,sealsTotal:se.sealsTotal,onDismiss:()=>de(null)}),H&&C.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-4 px-8",style:{zIndex:50,backgroundColor:"rgba(10,1,24,.82)",animation:"fadeSlide .5s ease-out"},children:[C.jsx("p",{className:"text-[22px] tracking-widest text-[#ef4444]",children:"DEFEATED"}),C.jsxs("div",{className:"text-center space-y-2",children:[C.jsxs("p",{className:"text-[10px] text-[#ec4899] tracking-widest",children:["KILLS: ",i]}),C.jsxs("p",{className:"text-[8px] text-[#facc15] tracking-widest",children:["WAVE REACHED: ",z]})]}),C.jsxs("button",{onClick:async()=>{_(),await new Promise(ge=>setTimeout(ge,80)),re()},className:"mt-2 py-3 px-6 text-[9px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors relative",children:[C.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"> RETRY <"]}),C.jsx("button",{onClick:ce,className:"py-2 px-5 text-[8px] border-2 border-white/30 text-white/70 hover:text-white transition-colors",children:"EXIT TO MISSION"})]})]})]})}const uC=[{word:"BLAZE",ipa:"/bleɪz/",syllables:"blaze",pos:"noun",definition:"A fierce, bright fire or flame; an intense outburst.",example:"A blaze tore through the dry forest by morning."},{word:"STORM",ipa:"/stɔːrm/",syllables:"storm",pos:"noun",definition:"A violent disturbance of weather with strong wind, rain, or thunder.",example:"The storm shook the windows for hours."},{word:"FROST",ipa:"/frɒst/",syllables:"frost",pos:"noun",definition:"A thin layer of ice formed from water vapor on cold surfaces.",example:"Morning frost glittered on the rooftops."},{word:"FLAME",ipa:"/fleɪm/",syllables:"flame",pos:"noun",definition:"A hot, glowing body of ignited gas produced by fire.",example:"A single candle flame lit the entire chamber."},{word:"SPELL",ipa:"/spɛl/",syllables:"spell",pos:"noun",definition:"A magical incantation believed to have supernatural power.",example:"The witch cast a spell to silence the crows."},{word:"MAGIC",ipa:"/ˈmæ.dʒɪk/",syllables:"ma·gic",pos:"noun",definition:"The power of influencing events using mysterious or supernatural forces.",example:"Children believe in the magic of fireflies."},{word:"WRATH",ipa:"/ræθ/",syllables:"wrath",pos:"noun",definition:"Extreme, fierce anger or vengeful rage.",example:"They feared the wrath of the storm gods."},{word:"CRYPT",ipa:"/krɪpt/",syllables:"crypt",pos:"noun",definition:"An underground room or vault, usually beneath a church, used as a burial place.",example:"The knight was laid to rest in the ancient crypt."},{word:"CURSE",ipa:"/kɜːrs/",syllables:"curse",pos:"noun",definition:"A solemn utterance intended to invoke supernatural harm on someone.",example:"Legends say a curse guards the buried treasure."},{word:"POWER",ipa:"/ˈpaʊ.ər/",syllables:"pow·er",pos:"noun",definition:"The ability to act or produce an effect; great strength or influence.",example:"With great power comes great responsibility."},{word:"SWORD",ipa:"/sɔːrd/",syllables:"sword",pos:"noun",definition:"A weapon with a long metal blade and a hilt with a hand guard.",example:"The hero unsheathed his sword in a single fluid motion."},{word:"ARROW",ipa:"/ˈæ.roʊ/",syllables:"ar·row",pos:"noun",definition:"A pointed projectile shot from a bow.",example:"The arrow struck the target dead-center."},{word:"ARMOR",ipa:"/ˈɑːr.mər/",syllables:"ar·mor",pos:"noun",definition:"Protective metal or leather covering worn during combat.",example:"Her armor was forged from sky-iron."},{word:"BRAVE",ipa:"/breɪv/",syllables:"brave",pos:"adjective",definition:"Showing courage in the face of danger or pain.",example:"A brave choice can change the world."},{word:"QUEST",ipa:"/kwɛst/",syllables:"quest",pos:"noun",definition:"A long or arduous search for something of value or significance.",example:"They began a quest to find the lost city."},{word:"SHADE",ipa:"/ʃeɪd/",syllables:"shade",pos:"noun",definition:"Comparative darkness caused by something blocking the light; a ghost in folklore.",example:"We rested in the shade of an oak."},{word:"GHOST",ipa:"/ɡoʊst/",syllables:"ghost",pos:"noun",definition:"The apparition of a dead person believed to appear to the living.",example:"Stories of a ghost haunt that old manor."},{word:"BEAST",ipa:"/biːst/",syllables:"beast",pos:"noun",definition:"A large or dangerous wild animal.",example:"A beast crept from the forest at dusk."},{word:"DEMON",ipa:"/ˈdiː.mən/",syllables:"de·mon",pos:"noun",definition:"An evil spirit or malevolent supernatural being.",example:"Ancient texts warned of a demon trapped in the mountain."},{word:"ANGEL",ipa:"/ˈeɪn.dʒəl/",syllables:"an·gel",pos:"noun",definition:"A spiritual being attendant upon a deity; a guardian or messenger.",example:"She has the patience of an angel."},{word:"RAVEN",ipa:"/ˈreɪ.vən/",syllables:"ra·ven",pos:"noun",definition:"A large, all-black bird of the crow family, often a symbol of mystery.",example:"A raven perched on the broken weather-vane."},{word:"TIGER",ipa:"/ˈtaɪ.ɡər/",syllables:"ti·ger",pos:"noun",definition:"A large striped Asian cat, the biggest of all wild cats.",example:"The tiger moved silently through the bamboo."},{word:"EAGLE",ipa:"/ˈiː.ɡəl/",syllables:"ea·gle",pos:"noun",definition:"A large bird of prey known for keen sight and powerful flight.",example:"An eagle soared above the canyon."},{word:"GIANT",ipa:"/ˈdʒaɪ.ənt/",syllables:"gi·ant",pos:"noun",definition:"An imaginary or mythical being of enormous size and strength.",example:"In the tale, a giant guarded the bridge."},{word:"KNAVE",ipa:"/neɪv/",syllables:"knave",pos:"noun",definition:"A dishonest or unscrupulous man (archaic); also the jack in a deck of cards.",example:"The merchant called the thief a knave."},{word:"NOBLE",ipa:"/ˈnoʊ.bəl/",syllables:"no·ble",pos:"adjective",definition:"Having or showing fine personal qualities or high moral principles.",example:"It was a noble act of self-sacrifice."},{word:"ELDER",ipa:"/ˈɛl.dər/",syllables:"el·der",pos:"noun",definition:"A person of greater age, especially one with influence or authority.",example:"The village elder welcomed every traveler."},{word:"ROYAL",ipa:"/ˈrɔɪ.əl/",syllables:"roy·al",pos:"adjective",definition:"Having the status of a king or queen, or relating to a monarch.",example:"A royal banner flew above the gate."},{word:"CROWN",ipa:"/kraʊn/",syllables:"crown",pos:"noun",definition:"A circular ornamental headdress worn by a monarch as a symbol of authority.",example:"A jeweled crown sat upon a velvet cushion."},{word:"RELIC",ipa:"/ˈrɛl.ɪk/",syllables:"rel·ic",pos:"noun",definition:"An object surviving from an earlier time, often of cultural or sacred value.",example:"The museum displayed a relic of the lost dynasty."},{word:"VAULT",ipa:"/vɔːlt/",syllables:"vault",pos:"noun",definition:"A secure room used for storing valuables; an arched roof or chamber.",example:"The bank vault held centuries of secrets."},{word:"TOTEM",ipa:"/ˈtoʊ.təm/",syllables:"to·tem",pos:"noun",definition:"A natural object or animal believed to have spiritual significance, often serving as an emblem.",example:"The carved totem watched over the river."},{word:"EARTH",ipa:"/ɜːrθ/",syllables:"earth",pos:"noun",definition:"The planet on which we live; the world; soil or ground.",example:"Astronauts gazed back at Earth from orbit."},{word:"ETHER",ipa:"/ˈiː.θər/",syllables:"e·ther",pos:"noun",definition:"The clear sky or upper regions of air; in alchemy, a fifth element pervading space.",example:"Their voices vanished into the ether."},{word:"NIGHT",ipa:"/naɪt/",syllables:"night",pos:"noun",definition:"The period from sunset to sunrise when it is dark.",example:"A cold night settled over the camp."},{word:"LIGHT",ipa:"/laɪt/",syllables:"light",pos:"noun",definition:"The natural agent that makes things visible; brightness or illumination.",example:"A shaft of light pierced the cave."},{word:"PRIDE",ipa:"/praɪd/",syllables:"pride",pos:"noun",definition:"A feeling of deep satisfaction in achievements; also, a group of lions.",example:"She glowed with pride at the ceremony."},{word:"HONOR",ipa:"/ˈɒn.ər/",syllables:"hon·or",pos:"noun",definition:"High respect, esteem, or adherence to ethical principles.",example:"A knight is bound by honor."},{word:"VALOR",ipa:"/ˈvæl.ər/",syllables:"val·or",pos:"noun",definition:"Great courage in the face of danger, especially in battle.",example:"They were decorated for valor in combat."},{word:"GLINT",ipa:"/ɡlɪnt/",syllables:"glint",pos:"noun",definition:"A small flash of light; a glance reflected from a surface.",example:"A glint of gold caught his eye."},{word:"DREAM",ipa:"/driːm/",syllables:"dream",pos:"noun",definition:"A series of images or thoughts in sleep; a cherished aspiration.",example:"She had a dream of becoming a pilot."},{word:"JEWEL",ipa:"/ˈdʒuː.əl/",syllables:"jew·el",pos:"noun",definition:"A precious stone or piece of ornamental art; a person or thing of great worth.",example:"The crown was set with a single jewel."},{word:"CRAFT",ipa:"/kræft/",syllables:"craft",pos:"noun",definition:"An activity involving skill in making things by hand; cunning ingenuity.",example:"Pottery is an ancient craft."},{word:"SCALE",ipa:"/skeɪl/",syllables:"scale",pos:"noun",definition:"A graded range of values; one of the small thin plates on fish or reptile skin.",example:"Every scale on the dragon shimmered."},{word:"RANGE",ipa:"/reɪndʒ/",syllables:"range",pos:"noun",definition:"The area of variation between limits; a row of mountains; an open area for grazing.",example:"The rifle had a range of three hundred meters."},{word:"FATAL",ipa:"/ˈfeɪ.təl/",syllables:"fa·tal",pos:"adjective",definition:"Causing or capable of causing death; leading to disaster.",example:"A fatal mistake ended the expedition."},{word:"RIFTS",ipa:"/rɪfts/",syllables:"rifts",pos:"noun (plural)",definition:"Cracks or splits, especially in rock; serious breaks in friendly relations.",example:"Cosmic rifts tore through the fabric of space.",is_final_seal:!0}],Xf={},dC=(Xf==null?void 0:Xf.VITE_API_BASE)??"",fC=uC;function hC(){const[s,e]=G.useState([]),[t,i]=G.useState(!0),[a,o]=G.useState(null);return G.useEffect(()=>{let c=!1;return(async()=>{try{const d=await fetch(`${dC}/api/codex/dictionary/`,{signal:AbortSignal.timeout(4e3)});if(!d.ok)throw new Error(`HTTP ${d.status}`);const h=await d.json();c||(e(h.entries),o(null))}catch{c||(e(fC),o("Backend offline — showing limited offline entries."))}finally{c||i(!1)}})(),()=>{c=!0}},[]),{entries:s,loading:t,error:a}}function pC(s){try{const e=window.speechSynthesis;if(!e)return;e.cancel();const t=new SpeechSynthesisUtterance(s.toLowerCase());t.rate=.85,t.pitch=1,t.volume=1,t.lang="en-US",e.speak(t)}catch{}}function mC(){const s=el(),{entries:e,loading:t,error:i}=hC(),[a,o]=G.useState(""),[c,d]=G.useState("all"),[h,f]=G.useState(null),m=G.useMemo(()=>{const g=a.trim().toUpperCase();return e.filter(v=>!(g&&!v.word.includes(g)&&!v.definition.toUpperCase().includes(g)||c==="noun"&&!v.pos.startsWith("noun")||c==="adjective"&&!v.pos.startsWith("adjective")||c==="seal"&&!v.is_final_seal))},[e,a,c]);return C.jsxs("div",{className:"min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col font-['Press_Start_2P',_monospace] relative",children:[C.jsx("style",{children:`
        @keyframes fadeInUp {
          from { transform: translateY(8px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 6px #8b5cf6, 0 0 14px #8b5cf6aa; }
          50%      { box-shadow: 0 0 10px #ec4899, 0 0 22px #ec4899aa; }
        }
        .codex-grid {
          background-image:
            linear-gradient(0deg,  transparent 24%, rgba(139,92,246,.18) 25%, rgba(139,92,246,.18) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.18) 75%, rgba(139,92,246,.18) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(139,92,246,.18) 25%, rgba(139,92,246,.18) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.18) 75%, rgba(139,92,246,.18) 76%, transparent 77%, transparent);
          background-size: 20px 20px;
        }
      `}),C.jsx("div",{className:"absolute inset-0 codex-grid opacity-30 pointer-events-none"}),C.jsxs("div",{className:"relative z-10 bg-[#1a0a2e] border-b-4 border-[#8b5cf6] px-4 py-3 flex items-center justify-between",children:[C.jsx("button",{onClick:()=>s("/"),className:"text-[8px] text-[#a78bfa] hover:text-white px-2 py-1 border-2 border-[#8b5cf6] bg-[#0a0118] active:translate-y-0.5",children:"< BACK"}),C.jsx("p",{className:"text-[10px] text-[#8b5cf6] tracking-widest",children:"CODEX"}),C.jsx("div",{className:"w-[60px]"})]}),C.jsxs("div",{className:"relative z-10 px-4 py-3 space-y-2 border-b-2 border-[#8b5cf6]/40 bg-[#0a0118]/95",children:[C.jsx("input",{type:"text",placeholder:"SEARCH...",value:a,onChange:g=>o(g.target.value),className:"w-full bg-[#1a0a2e] border-2 border-[#8b5cf6] text-white text-[9px] px-3 py-2 placeholder-[#a78bfa]/50 focus:border-[#ec4899] focus:outline-none tracking-widest",style:{fontFamily:"'Press Start 2P', monospace"}}),C.jsx("div",{className:"flex gap-1.5",children:["all","noun","adjective","seal"].map(g=>C.jsx("button",{onClick:()=>d(g),className:`flex-1 text-[7px] py-1.5 border-2 tracking-widest transition-colors ${c===g?"bg-[#8b5cf6] border-[#ec4899] text-white":"bg-[#1a0a2e] border-[#8b5cf6]/40 text-[#a78bfa] hover:border-[#8b5cf6]"}`,children:g.toUpperCase()},g))})]}),t&&C.jsx("div",{className:"relative z-10 text-center py-10 text-[8px] text-[#a78bfa] tracking-widest animate-pulse",children:"LOADING CODEX..."}),i&&!t&&C.jsx("div",{className:"relative z-10 mx-4 mt-3 text-[7px] text-[#facc15] border-2 border-[#facc15]/50 bg-[#facc15]/10 px-3 py-2 leading-relaxed",children:i}),C.jsxs("div",{className:"relative z-10 flex-1 overflow-y-auto px-4 py-3 space-y-2 pb-20",children:[!t&&m.length===0&&C.jsx("p",{className:"text-center text-[8px] text-[#a78bfa]/60 py-8 tracking-widest",children:"NO ENTRIES FOUND"}),m.map((g,v)=>{const _=h===g.word;return C.jsxs("div",{className:`bg-[#1a0a2e] border-2 ${g.is_final_seal?"border-[#ec4899]":"border-[#8b5cf6]"} relative`,style:{animation:`fadeInUp 0.25s ${Math.min(v,12)*.03}s ease-out both`,...g.is_final_seal&&{animation:"pulseGlow 2s ease-in-out infinite, fadeInUp 0.25s ease-out both"}},children:[C.jsx("div",{className:"absolute top-0 left-0  w-1.5 h-1.5 bg-[#0a0118]"}),C.jsx("div",{className:"absolute top-0 right-0 w-1.5 h-1.5 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 left-0  w-1.5 h-1.5 bg-[#0a0118]"}),C.jsx("div",{className:"absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#0a0118]"}),C.jsxs("button",{onClick:()=>f(_?null:g.word),className:"w-full text-left px-3 py-2.5 flex items-center justify-between hover:bg-[#2a1a3e]/60 transition-colors",children:[C.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[C.jsx("span",{className:`text-[12px] tracking-widest ${g.is_final_seal?"text-[#ec4899]":"text-[#10b981]"}`,children:g.word}),C.jsx("span",{className:"text-[7px] text-[#a78bfa] truncate",children:g.ipa})]}),C.jsx("span",{className:"text-[#a78bfa] text-[8px] flex-shrink-0",children:_?"▼":"▶"})]}),_&&C.jsxs("div",{className:"px-3 pb-3 pt-1 space-y-2 border-t-2 border-[#8b5cf6]/30",style:{animation:"fadeInUp 0.18s ease-out"},children:[C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("p",{className:"text-[7px] text-[#facc15] tracking-widest",children:[g.pos.toUpperCase(),g.is_final_seal&&C.jsx("span",{className:"ml-2 text-[#ec4899]",children:"★ FINAL SEAL"})]}),C.jsx("button",{onClick:()=>pC(g.word),className:"text-[6px] px-2 py-1 border-2 border-[#60a5fa] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-[#0a0118] tracking-widest",title:"Hear pronunciation",children:"♪ SAY"})]}),C.jsxs("div",{className:"flex gap-2 text-[7px] leading-relaxed",children:[C.jsx("span",{className:"text-[#a78bfa] flex-shrink-0",children:"SYL:"}),C.jsx("span",{className:"text-white/90 tracking-wider",children:g.syllables})]}),C.jsxs("div",{className:"flex gap-2 text-[7px] leading-[14px]",children:[C.jsx("span",{className:"text-[#a78bfa] flex-shrink-0",children:"DEF:"}),C.jsx("span",{className:"text-white/90",children:g.definition})]}),C.jsxs("div",{className:"flex gap-2 text-[7px] leading-[14px] italic",children:[C.jsx("span",{className:"text-[#a78bfa] flex-shrink-0 not-italic",children:"EX:"}),C.jsxs("span",{className:"text-white/70",children:['"',g.example,'"']})]})]})]},g.word)}),!t&&C.jsxs("p",{className:"text-center text-[7px] text-[#a78bfa]/50 pt-3 tracking-widest",children:[m.length," / ",e.length," ENTRIES"]})]})]})}function gC(s){const e=G.useRef(null),t=G.useRef(!1),{settings:i}=ox();G.useEffect(()=>{const a=new Audio;a.src=s,a.loop=!0,a.volume=i.musicVolume,a.preload="auto",e.current=a;const o=()=>{};a.addEventListener("error",o);const c=()=>{t.current||!e.current||e.current.play().then(()=>{t.current=!0}).catch(()=>{})};return i.musicEnabled&&a.play().then(()=>{t.current=!0}).catch(()=>{document.addEventListener("click",c,{once:!0}),document.addEventListener("touchstart",c,{once:!0}),document.addEventListener("keydown",c,{once:!0})}),()=>{a.pause(),a.removeEventListener("error",o),a.src="",document.removeEventListener("click",c),document.removeEventListener("touchstart",c),document.removeEventListener("keydown",c),e.current=null,t.current=!1}},[s]),G.useEffect(()=>{const a=e.current;a&&(a.volume=i.musicVolume,i.musicEnabled?a.paused&&a.play().then(()=>{t.current=!0}).catch(()=>{}):a.pause())},[i.musicEnabled,i.musicVolume])}const vC="/assets/bmusic-DkBO5UAz.mp3";function xC(){return gC(vC),null}function _C(){return C.jsxs(eM,{children:[C.jsx(xC,{}),C.jsxs(PS,{children:[C.jsx(Bo,{path:"/",element:C.jsx(gM,{})}),C.jsx(Bo,{path:"/mission",element:C.jsx(vM,{})}),C.jsx(Bo,{path:"/ar",element:C.jsx(cC,{})}),C.jsx(Bo,{path:"/codex",element:C.jsx(mC,{})})]})]})}const Xx=document.getElementById("root");if(!Xx)throw new Error("Root element #root not found");Iy.createRoot(Xx).render(C.jsx(_C,{}));export{WE as $,bC as A,On as B,Ht as C,rv as D,mi as E,CC as F,TC as G,Nx as H,wC as I,KE as J,Nf as K,sl as L,AC as M,oc as N,En as O,LC as P,hs as Q,sh as R,di as S,yC as T,Vo as U,Lt as V,fi as W,EC as X,_p as Y,Cx as Z,RC as _,MC as a,Jc as a0,Oh as a1,nu as a2,Wn as a3,au as a4,su as a5,hu as a6,Wt as a7,ds as a8,rl as a9,Ur as aa,Fr as ab,SC as b,IC as c,Qc as d,NC as e,Ot as f,Z as g,H0 as h,PC as i,DC as j,BE as k,Us as l,nf as m,jM as n,Zn as o,Gn as p,ah as q,Tr as r,Xc as s,ps as t,Px as u,Hh as v,ir as w,hp as x,an as y,kn as z};
