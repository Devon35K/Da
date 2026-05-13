(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();var Xd={exports:{}},Mo={},$d={exports:{}},zt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function Ay(){if(Xg)return zt;Xg=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function g(w){return w===null||typeof w!="object"?null:(w=x&&w[x]||w["@@iterator"],typeof w=="function"?w:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(w,H,ve){this.props=w,this.context=H,this.refs=E,this.updater=ve||m}y.prototype.isReactComponent={},y.prototype.setState=function(w,H){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,H,"setState")},y.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(w,H,ve){this.props=w,this.context=H,this.refs=E,this.updater=ve||m}var P=R.prototype=new S;P.constructor=R,M(P,y.prototype),P.isPureReactComponent=!0;var L=Array.isArray,k=Object.prototype.hasOwnProperty,F={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function T(w,H,ve){var Ee,Me={},ee=null,re=null;if(H!=null)for(Ee in H.ref!==void 0&&(re=H.ref),H.key!==void 0&&(ee=""+H.key),H)k.call(H,Ee)&&!V.hasOwnProperty(Ee)&&(Me[Ee]=H[Ee]);var ce=arguments.length-2;if(ce===1)Me.children=ve;else if(1<ce){for(var ge=Array(ce),Oe=0;Oe<ce;Oe++)ge[Oe]=arguments[Oe+2];Me.children=ge}if(w&&w.defaultProps)for(Ee in ce=w.defaultProps,ce)Me[Ee]===void 0&&(Me[Ee]=ce[Ee]);return{$$typeof:s,type:w,key:ee,ref:re,props:Me,_owner:F.current}}function I(w,H){return{$$typeof:s,type:w.type,key:H,ref:w.ref,props:w.props,_owner:w._owner}}function z(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function B(w){var H={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ve){return H[ve]})}var Y=/\/+/g;function se(w,H){return typeof w=="object"&&w!==null&&w.key!=null?B(""+w.key):H.toString(36)}function de(w,H,ve,Ee,Me){var ee=typeof w;(ee==="undefined"||ee==="boolean")&&(w=null);var re=!1;if(w===null)re=!0;else switch(ee){case"string":case"number":re=!0;break;case"object":switch(w.$$typeof){case s:case e:re=!0}}if(re)return re=w,Me=Me(re),w=Ee===""?"."+se(re,0):Ee,L(Me)?(ve="",w!=null&&(ve=w.replace(Y,"$&/")+"/"),de(Me,H,ve,"",function(Oe){return Oe})):Me!=null&&(z(Me)&&(Me=I(Me,ve+(!Me.key||re&&re.key===Me.key?"":(""+Me.key).replace(Y,"$&/")+"/")+w)),H.push(Me)),1;if(re=0,Ee=Ee===""?".":Ee+":",L(w))for(var ce=0;ce<w.length;ce++){ee=w[ce];var ge=Ee+se(ee,ce);re+=de(ee,H,ve,ge,Me)}else if(ge=g(w),typeof ge=="function")for(w=ge.call(w),ce=0;!(ee=w.next()).done;)ee=ee.value,ge=Ee+se(ee,ce++),re+=de(ee,H,ve,ge,Me);else if(ee==="object")throw H=String(w),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return re}function W(w,H,ve){if(w==null)return w;var Ee=[],Me=0;return de(w,Ee,"","",function(ee){return H.call(ve,ee,Me++)}),Ee}function J(w){if(w._status===-1){var H=w._result;H=H(),H.then(function(ve){(w._status===0||w._status===-1)&&(w._status=1,w._result=ve)},function(ve){(w._status===0||w._status===-1)&&(w._status=2,w._result=ve)}),w._status===-1&&(w._status=0,w._result=H)}if(w._status===1)return w._result.default;throw w._result}var K={current:null},te={transition:null},le={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:te,ReactCurrentOwner:F};function D(){throw Error("act(...) is not supported in production builds of React.")}return zt.Children={map:W,forEach:function(w,H,ve){W(w,function(){H.apply(this,arguments)},ve)},count:function(w){var H=0;return W(w,function(){H++}),H},toArray:function(w){return W(w,function(H){return H})||[]},only:function(w){if(!z(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},zt.Component=y,zt.Fragment=t,zt.Profiler=a,zt.PureComponent=R,zt.StrictMode=i,zt.Suspense=h,zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,zt.act=D,zt.cloneElement=function(w,H,ve){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var Ee=M({},w.props),Me=w.key,ee=w.ref,re=w._owner;if(H!=null){if(H.ref!==void 0&&(ee=H.ref,re=F.current),H.key!==void 0&&(Me=""+H.key),w.type&&w.type.defaultProps)var ce=w.type.defaultProps;for(ge in H)k.call(H,ge)&&!V.hasOwnProperty(ge)&&(Ee[ge]=H[ge]===void 0&&ce!==void 0?ce[ge]:H[ge])}var ge=arguments.length-2;if(ge===1)Ee.children=ve;else if(1<ge){ce=Array(ge);for(var Oe=0;Oe<ge;Oe++)ce[Oe]=arguments[Oe+2];Ee.children=ce}return{$$typeof:s,type:w.type,key:Me,ref:ee,props:Ee,_owner:re}},zt.createContext=function(w){return w={$$typeof:c,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:o,_context:w},w.Consumer=w},zt.createElement=T,zt.createFactory=function(w){var H=T.bind(null,w);return H.type=w,H},zt.createRef=function(){return{current:null}},zt.forwardRef=function(w){return{$$typeof:d,render:w}},zt.isValidElement=z,zt.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:J}},zt.memo=function(w,H){return{$$typeof:f,type:w,compare:H===void 0?null:H}},zt.startTransition=function(w){var H=te.transition;te.transition={};try{w()}finally{te.transition=H}},zt.unstable_act=D,zt.useCallback=function(w,H){return K.current.useCallback(w,H)},zt.useContext=function(w){return K.current.useContext(w)},zt.useDebugValue=function(){},zt.useDeferredValue=function(w){return K.current.useDeferredValue(w)},zt.useEffect=function(w,H){return K.current.useEffect(w,H)},zt.useId=function(){return K.current.useId()},zt.useImperativeHandle=function(w,H,ve){return K.current.useImperativeHandle(w,H,ve)},zt.useInsertionEffect=function(w,H){return K.current.useInsertionEffect(w,H)},zt.useLayoutEffect=function(w,H){return K.current.useLayoutEffect(w,H)},zt.useMemo=function(w,H){return K.current.useMemo(w,H)},zt.useReducer=function(w,H,ve){return K.current.useReducer(w,H,ve)},zt.useRef=function(w){return K.current.useRef(w)},zt.useState=function(w){return K.current.useState(w)},zt.useSyncExternalStore=function(w,H,ve){return K.current.useSyncExternalStore(w,H,ve)},zt.useTransition=function(){return K.current.useTransition()},zt.version="18.3.1",zt}var $g;function $h(){return $g||($g=1,$d.exports=Ay()),$d.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function Ry(){if(Yg)return Mo;Yg=1;var s=$h(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,f){var v,x={},g=null,m=null;f!==void 0&&(g=""+f),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(m=h.ref);for(v in h)i.call(h,v)&&!o.hasOwnProperty(v)&&(x[v]=h[v]);if(d&&d.defaultProps)for(v in h=d.defaultProps,h)x[v]===void 0&&(x[v]=h[v]);return{$$typeof:e,type:d,key:g,ref:m,props:x,_owner:a.current}}return Mo.Fragment=t,Mo.jsx=c,Mo.jsxs=c,Mo}var qg;function Cy(){return qg||(qg=1,Xd.exports=Ry()),Xd.exports}var b=Cy(),ac={},Yd={exports:{}},ui={},qd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function Py(){return Kg||(Kg=1,(function(s){function e(te,le){var D=te.length;te.push(le);e:for(;0<D;){var w=D-1>>>1,H=te[w];if(0<a(H,le))te[w]=le,te[D]=H,D=w;else break e}}function t(te){return te.length===0?null:te[0]}function i(te){if(te.length===0)return null;var le=te[0],D=te.pop();if(D!==le){te[0]=D;e:for(var w=0,H=te.length,ve=H>>>1;w<ve;){var Ee=2*(w+1)-1,Me=te[Ee],ee=Ee+1,re=te[ee];if(0>a(Me,D))ee<H&&0>a(re,Me)?(te[w]=re,te[ee]=D,w=ee):(te[w]=Me,te[Ee]=D,w=Ee);else if(ee<H&&0>a(re,D))te[w]=re,te[ee]=D,w=ee;else break e}}return le}function a(te,le){var D=te.sortIndex-le.sortIndex;return D!==0?D:te.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;s.unstable_now=function(){return o.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var h=[],f=[],v=1,x=null,g=3,m=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(te){for(var le=t(f);le!==null;){if(le.callback===null)i(f);else if(le.startTime<=te)i(f),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(f)}}function L(te){if(E=!1,P(te),!M)if(t(h)!==null)M=!0,J(k);else{var le=t(f);le!==null&&K(L,le.startTime-te)}}function k(te,le){M=!1,E&&(E=!1,S(T),T=-1),m=!0;var D=g;try{for(P(le),x=t(h);x!==null&&(!(x.expirationTime>le)||te&&!B());){var w=x.callback;if(typeof w=="function"){x.callback=null,g=x.priorityLevel;var H=w(x.expirationTime<=le);le=s.unstable_now(),typeof H=="function"?x.callback=H:x===t(h)&&i(h),P(le)}else i(h);x=t(h)}if(x!==null)var ve=!0;else{var Ee=t(f);Ee!==null&&K(L,Ee.startTime-le),ve=!1}return ve}finally{x=null,g=D,m=!1}}var F=!1,V=null,T=-1,I=5,z=-1;function B(){return!(s.unstable_now()-z<I)}function Y(){if(V!==null){var te=s.unstable_now();z=te;var le=!0;try{le=V(!0,te)}finally{le?se():(F=!1,V=null)}}else F=!1}var se;if(typeof R=="function")se=function(){R(Y)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,W=de.port2;de.port1.onmessage=Y,se=function(){W.postMessage(null)}}else se=function(){y(Y,0)};function J(te){V=te,F||(F=!0,se())}function K(te,le){T=y(function(){te(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(te){te.callback=null},s.unstable_continueExecution=function(){M||m||(M=!0,J(k))},s.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<te?Math.floor(1e3/te):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(te){switch(g){case 1:case 2:case 3:var le=3;break;default:le=g}var D=g;g=le;try{return te()}finally{g=D}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(te,le){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var D=g;g=te;try{return le()}finally{g=D}},s.unstable_scheduleCallback=function(te,le,D){var w=s.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?w+D:w):D=w,te){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=D+H,te={id:v++,callback:le,priorityLevel:te,startTime:D,expirationTime:H,sortIndex:-1},D>w?(te.sortIndex=D,e(f,te),t(h)===null&&te===t(f)&&(E?(S(T),T=-1):E=!0,K(L,D-w))):(te.sortIndex=H,e(h,te),M||m||(M=!0,J(k))),te},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(te){var le=g;return function(){var D=g;g=le;try{return te.apply(this,arguments)}finally{g=D}}}})(Kd)),Kd}var Zg;function Ny(){return Zg||(Zg=1,qd.exports=Py()),qd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function Iy(){if(Jg)return ui;Jg=1;var s=$h(),e=Ny();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function o(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(a[n]=r,n=0;n<r.length;n++)i.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function g(n){return h.call(x,n)?!0:h.call(v,n)?!1:f.test(n)?x[n]=!0:(v[n]=!0,!1)}function m(n,r,l,u){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,u){if(r===null||typeof r>"u"||m(n,r,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,u,p,_,C){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=_,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,R);y[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,R);y[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,R);y[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,r,l,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,u)&&(l=null),u||p===null?g(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,u=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?n.setAttributeNS(u,r,l):n.setAttribute(r,l))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),F=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),B=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),te=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var D=Object.assign,w;function H(n){if(w===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);w=r&&r[1]||""}return`
`+w+n}var ve=!1;function Ee(n,r){if(!n||ve)return"";ve=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(pe){var u=pe}Reflect.construct(n,[],r)}else{try{r.call()}catch(pe){u=pe}n.call(r.prototype)}else{try{throw Error()}catch(pe){u=pe}n()}}catch(pe){if(pe&&u&&typeof pe.stack=="string"){for(var p=pe.stack.split(`
`),_=u.stack.split(`
`),C=p.length-1,O=_.length-1;1<=C&&0<=O&&p[C]!==_[O];)O--;for(;1<=C&&0<=O;C--,O--)if(p[C]!==_[O]){if(C!==1||O!==1)do if(C--,O--,0>O||p[C]!==_[O]){var j=`
`+p[C].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=C&&0<=O);break}}}finally{ve=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?H(n):""}function Me(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case F:return"Portal";case I:return"Profiler";case T:return"StrictMode";case se:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case Y:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return r=n.displayName||null,r!==null?r:ee(n.type)||"Memo";case J:r=n._payload,n=n._init;try{return ee(n(r))}catch{}}return null}function re(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ge(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Oe(n){var r=ge(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(C){u=""+C,_.call(this,C)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ie(n){n._valueTracker||(n._valueTracker=Oe(n))}function ut(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),u="";return n&&(u=ge(n)?n.checked?"true":"false":n.value),n=u,n!==l?(r.setValue(n),!0):!1}function Qe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function We(n,r){var l=r.checked;return D({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function xt(n,r){var l=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;l=ce(r.value!=null?r.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function dt(n,r){r=r.checked,r!=null&&P(n,"checked",r,!1)}function Lt(n,r){dt(n,r);var l=ce(r.value),u=r.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?sn(n,r.type,l):r.hasOwnProperty("defaultValue")&&sn(n,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ut(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function sn(n,r,l){(r!=="number"||Qe(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var X=Array.isArray;function Kt(n,r,l,u){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&u&&(n[l].defaultSelected=!0)}else{for(l=""+ce(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function wt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return D({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $t(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(X(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:ce(l)}}function Ge(n,r){var l=ce(r.value),u=ce(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function Jt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function A(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?U(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ne,ye=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ne=ne||document.createElement("div"),ne.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function we(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ne={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Ne).forEach(function(n){ke.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ne[r]=Ne[n]})});function xe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ne.hasOwnProperty(n)&&Ne[n]?(""+r).trim():r+"px"}function Se(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=xe(l,r[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,p):n[l]=p}}var je=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(n,r){if(r){if(je[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Be(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function vt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var yt=null,Tt=null,$=null;function Ue(n){if(n=ao(n)){if(typeof yt!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Sl(r),yt(n.stateNode,n.type,r))}}function _e(n){Tt?$?$.push(n):$=[n]:Tt=n}function Ye(){if(Tt){var n=Tt,r=$;if($=Tt=null,Ue(n),r)for(n=0;n<r.length;n++)Ue(r[n])}}function ze(n,r){return n(r)}function Ae(){}var tt=!1;function St(n,r,l){if(tt)return n(r,l);tt=!0;try{return ze(n,r,l)}finally{tt=!1,(Tt!==null||$!==null)&&(Ae(),Ye())}}function Qt(n,r){var l=n.stateNode;if(l===null)return null;var u=Sl(l);if(u===null)return null;l=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var fe=!1;if(d)try{var be={};Object.defineProperty(be,"passive",{get:function(){fe=!0}}),window.addEventListener("test",be,be),window.removeEventListener("test",be,be)}catch{fe=!1}function Te(n,r,l,u,p,_,C,O,j){var pe=Array.prototype.slice.call(arguments,3);try{r.apply(l,pe)}catch(Pe){this.onError(Pe)}}var Ce=!1,et=null,mt=!1,me=null,at={onError:function(n){Ce=!0,et=n}};function bt(n,r,l,u,p,_,C,O,j){Ce=!1,et=null,Te.apply(at,arguments)}function Ct(n,r,l,u,p,_,C,O,j){if(bt.apply(this,arguments),Ce){if(Ce){var pe=et;Ce=!1,et=null}else throw Error(t(198));mt||(mt=!0,me=pe)}}function Pt(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Et(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function _t(n){if(Pt(n)!==n)throw Error(t(188))}function Sn(n){var r=n.alternate;if(!r){if(r=Pt(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,u=r;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return _t(p),n;if(_===u)return _t(p),r;_=_.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=_;else{for(var C=!1,O=p.child;O;){if(O===l){C=!0,l=p,u=_;break}if(O===u){C=!0,u=p,l=_;break}O=O.sibling}if(!C){for(O=_.child;O;){if(O===l){C=!0,l=_,u=p;break}if(O===u){C=!0,u=_,l=p;break}O=O.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Jn(n){return n=Sn(n),n!==null?kt(n):null}function kt(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=kt(n);if(r!==null)return r;n=n.sibling}return null}var Gt=e.unstable_scheduleCallback,pn=e.unstable_cancelCallback,jt=e.unstable_shouldYield,on=e.unstable_requestPaint,ft=e.unstable_now,Rn=e.unstable_getCurrentPriorityLevel,Bn=e.unstable_ImmediatePriority,N=e.unstable_UserBlockingPriority,Q=e.unstable_NormalPriority,he=e.unstable_LowPriority,ie=e.unstable_IdlePriority,oe=null,He=null;function Ze(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(oe,n,void 0,(n.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:At,it=Math.log,lt=Math.LN2;function At(n){return n>>>=0,n===0?32:31-(it(n)/lt|0)|0}var Rt=64,st=4194304;function Xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function cn(n,r){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,_=n.pingedLanes,C=l&268435455;if(C!==0){var O=C&~p;O!==0?u=Xt(O):(_&=C,_!==0&&(u=Xt(_)))}else C=l&~p,C!==0?u=Xt(C):_!==0&&(u=Xt(_));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,_=r&-r,p>=_||p===16&&(_&4194240)!==0))return r;if((u&4)!==0&&(u|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)l=31-Ve(r),p=1<<l,u|=n[l],r&=~p;return u}function mn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function en(n,r){for(var l=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var C=31-Ve(_),O=1<<C,j=p[C];j===-1?((O&l)===0||(O&u)!==0)&&(p[C]=mn(O,r)):j<=r&&(n.expiredLanes|=O),_&=~O}}function wn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qe(){var n=Rt;return Rt<<=1,(Rt&4194240)===0&&(Rt=64),n}function zn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Ft(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ve(r),n[r]=l}function ii(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Ve(l),_=1<<p;r[p]=0,u[p]=-1,n[p]=-1,l&=~_}}function ri(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var u=31-Ve(l),p=1<<u;p&r|n[u]&r&&(n[u]|=r),l&=~p}}var Bt=0;function ur(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zt,dn,Di,tn,Ui,Yi=!1,ms=[],Or=null,kr=null,Br=null,Wa=new Map,ja=new Map,zr=[],qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(n,r){switch(n){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Wa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(r.pointerId)}}function Xa(n,r,l,u,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:l,eventSystemFlags:u,nativeEvent:_,targetContainers:[p]},r!==null&&(r=ao(r),r!==null&&dn(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function Kv(n,r,l,u,p){switch(r){case"focusin":return Or=Xa(Or,n,r,l,u,p),!0;case"dragenter":return kr=Xa(kr,n,r,l,u,p),!0;case"mouseover":return Br=Xa(Br,n,r,l,u,p),!0;case"pointerover":var _=p.pointerId;return Wa.set(_,Xa(Wa.get(_)||null,n,r,l,u,p)),!0;case"gotpointercapture":return _=p.pointerId,ja.set(_,Xa(ja.get(_)||null,n,r,l,u,p)),!0}return!1}function Pp(n){var r=gs(n.target);if(r!==null){var l=Pt(r);if(l!==null){if(r=l.tag,r===13){if(r=Et(l),r!==null){n.blockedOn=r,Ui(n.priority,function(){Di(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ol(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=_u(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);De=u,l.target.dispatchEvent(u),De=null}else return r=ao(l),r!==null&&dn(r),n.blockedOn=l,!1;r.shift()}return!0}function Np(n,r,l){ol(n)&&l.delete(r)}function Zv(){Yi=!1,Or!==null&&ol(Or)&&(Or=null),kr!==null&&ol(kr)&&(kr=null),Br!==null&&ol(Br)&&(Br=null),Wa.forEach(Np),ja.forEach(Np)}function $a(n,r){n.blockedOn===r&&(n.blockedOn=null,Yi||(Yi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zv)))}function Ya(n){function r(p){return $a(p,n)}if(0<ms.length){$a(ms[0],n);for(var l=1;l<ms.length;l++){var u=ms[l];u.blockedOn===n&&(u.blockedOn=null)}}for(Or!==null&&$a(Or,n),kr!==null&&$a(kr,n),Br!==null&&$a(Br,n),Wa.forEach(r),ja.forEach(r),l=0;l<zr.length;l++)u=zr[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<zr.length&&(l=zr[0],l.blockedOn===null);)Pp(l),l.blockedOn===null&&zr.shift()}var Vs=L.ReactCurrentBatchConfig,ll=!0;function Jv(n,r,l,u){var p=Bt,_=Vs.transition;Vs.transition=null;try{Bt=1,vu(n,r,l,u)}finally{Bt=p,Vs.transition=_}}function Qv(n,r,l,u){var p=Bt,_=Vs.transition;Vs.transition=null;try{Bt=4,vu(n,r,l,u)}finally{Bt=p,Vs.transition=_}}function vu(n,r,l,u){if(ll){var p=_u(n,r,l,u);if(p===null)Fu(n,r,u,cl,l),Cp(n,u);else if(Kv(p,n,r,l,u))u.stopPropagation();else if(Cp(n,u),r&4&&-1<qv.indexOf(n)){for(;p!==null;){var _=ao(p);if(_!==null&&Zt(_),_=_u(n,r,l,u),_===null&&Fu(n,r,u,cl,l),_===p)break;p=_}p!==null&&u.stopPropagation()}else Fu(n,r,u,null,l)}}var cl=null;function _u(n,r,l,u){if(cl=null,n=vt(u),n=gs(n),n!==null)if(r=Pt(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Et(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return cl=n,null}function Ip(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rn()){case Bn:return 1;case N:return 4;case Q:case he:return 16;case ie:return 536870912;default:return 16}default:return 16}}var Vr=null,yu=null,ul=null;function Lp(){if(ul)return ul;var n,r=yu,l=r.length,u,p="value"in Vr?Vr.value:Vr.textContent,_=p.length;for(n=0;n<l&&r[n]===p[n];n++);var C=l-n;for(u=1;u<=C&&r[l-u]===p[_-u];u++);return ul=p.slice(n,1<u?1-u:void 0)}function dl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function fl(){return!0}function Dp(){return!1}function gi(n){function r(l,u,p,_,C){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=_,this.target=C,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(l=n[O],this[O]=l?l(_):_[O]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?fl:Dp,this.isPropagationStopped=Dp,this}return D(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),r}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=gi(Hs),qa=D({},Hs,{view:0,detail:0}),e_=gi(qa),Mu,bu,Ka,hl=D({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ka&&(Ka&&n.type==="mousemove"?(Mu=n.screenX-Ka.screenX,bu=n.screenY-Ka.screenY):bu=Mu=0,Ka=n),Mu)},movementY:function(n){return"movementY"in n?n.movementY:bu}}),Up=gi(hl),t_=D({},hl,{dataTransfer:0}),n_=gi(t_),i_=D({},qa,{relatedTarget:0}),Eu=gi(i_),r_=D({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),s_=gi(r_),a_=D({},Hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),o_=gi(a_),l_=D({},Hs,{data:0}),Fp=gi(l_),c_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=d_[n])?!!r[n]:!1}function wu(){return f_}var h_=D({},qa,{key:function(n){if(n.key){var r=c_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=dl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?u_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(n){return n.type==="keypress"?dl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?dl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p_=gi(h_),m_=D({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Op=gi(m_),g_=D({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),x_=gi(g_),v_=D({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),__=gi(v_),y_=D({},hl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),S_=gi(y_),M_=[9,13,27,32],Tu=d&&"CompositionEvent"in window,Za=null;d&&"documentMode"in document&&(Za=document.documentMode);var b_=d&&"TextEvent"in window&&!Za,kp=d&&(!Tu||Za&&8<Za&&11>=Za),Bp=" ",zp=!1;function Vp(n,r){switch(n){case"keyup":return M_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Gs=!1;function E_(n,r){switch(n){case"compositionend":return Hp(r);case"keypress":return r.which!==32?null:(zp=!0,Bp);case"textInput":return n=r.data,n===Bp&&zp?null:n;default:return null}}function w_(n,r){if(Gs)return n==="compositionend"||!Tu&&Vp(n,r)?(n=Lp(),ul=yu=Vr=null,Gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return kp&&r.locale!=="ko"?null:r.data;default:return null}}var T_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!T_[n.type]:r==="textarea"}function Wp(n,r,l,u){_e(u),r=vl(r,"onChange"),0<r.length&&(l=new Su("onChange","change",null,l,u),n.push({event:l,listeners:r}))}var Ja=null,Qa=null;function A_(n){lm(n,0)}function pl(n){var r=Ys(n);if(ut(r))return n}function R_(n,r){if(n==="change")return r}var jp=!1;if(d){var Au;if(d){var Ru="oninput"in document;if(!Ru){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Ru=typeof Xp.oninput=="function"}Au=Ru}else Au=!1;jp=Au&&(!document.documentMode||9<document.documentMode)}function $p(){Ja&&(Ja.detachEvent("onpropertychange",Yp),Qa=Ja=null)}function Yp(n){if(n.propertyName==="value"&&pl(Qa)){var r=[];Wp(r,Qa,n,vt(n)),St(A_,r)}}function C_(n,r,l){n==="focusin"?($p(),Ja=r,Qa=l,Ja.attachEvent("onpropertychange",Yp)):n==="focusout"&&$p()}function P_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return pl(Qa)}function N_(n,r){if(n==="click")return pl(r)}function I_(n,r){if(n==="input"||n==="change")return pl(r)}function L_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Fi=typeof Object.is=="function"?Object.is:L_;function eo(n,r){if(Fi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!h.call(r,p)||!Fi(n[p],r[p]))return!1}return!0}function qp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kp(n,r){var l=qp(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=r&&u>=r)return{node:l,offset:r-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=qp(l)}}function Zp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Zp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Jp(){for(var n=window,r=Qe();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Qe(n.document)}return r}function Cu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function D_(n){var r=Jp(),l=n.focusedElem,u=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Zp(l.ownerDocument.documentElement,l)){if(u!==null&&Cu(l)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,_=Math.min(u.start,p);u=u.end===void 0?_:Math.min(u.end,p),!n.extend&&_>u&&(p=u,u=_,_=p),p=Kp(l,_);var C=Kp(l,u);p&&C&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),_>u?(n.addRange(r),n.extend(C.node,C.offset)):(r.setEnd(C.node,C.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var U_=d&&"documentMode"in document&&11>=document.documentMode,Ws=null,Pu=null,to=null,Nu=!1;function Qp(n,r,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nu||Ws==null||Ws!==Qe(u)||(u=Ws,"selectionStart"in u&&Cu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),to&&eo(to,u)||(to=u,u=vl(Pu,"onSelect"),0<u.length&&(r=new Su("onSelect","select",null,r,l),n.push({event:r,listeners:u}),r.target=Ws)))}function ml(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var js={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},Iu={},em={};d&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function gl(n){if(Iu[n])return Iu[n];if(!js[n])return n;var r=js[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in em)return Iu[n]=r[l];return n}var tm=gl("animationend"),nm=gl("animationiteration"),im=gl("animationstart"),rm=gl("transitionend"),sm=new Map,am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,r){sm.set(n,r),o(r,[n])}for(var Lu=0;Lu<am.length;Lu++){var Du=am[Lu],F_=Du.toLowerCase(),O_=Du[0].toUpperCase()+Du.slice(1);Hr(F_,"on"+O_)}Hr(tm,"onAnimationEnd"),Hr(nm,"onAnimationIteration"),Hr(im,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(rm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k_=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function om(n,r,l){var u=n.type||"unknown-event";n.currentTarget=l,Ct(u,r,void 0,n),n.currentTarget=null}function lm(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],p=u.event;u=u.listeners;e:{var _=void 0;if(r)for(var C=u.length-1;0<=C;C--){var O=u[C],j=O.instance,pe=O.currentTarget;if(O=O.listener,j!==_&&p.isPropagationStopped())break e;om(p,O,pe),_=j}else for(C=0;C<u.length;C++){if(O=u[C],j=O.instance,pe=O.currentTarget,O=O.listener,j!==_&&p.isPropagationStopped())break e;om(p,O,pe),_=j}}}if(mt)throw n=me,mt=!1,me=null,n}function fn(n,r){var l=r[Hu];l===void 0&&(l=r[Hu]=new Set);var u=n+"__bubble";l.has(u)||(cm(r,n,2,!1),l.add(u))}function Uu(n,r,l){var u=0;r&&(u|=4),cm(l,n,u,r)}var xl="_reactListening"+Math.random().toString(36).slice(2);function io(n){if(!n[xl]){n[xl]=!0,i.forEach(function(l){l!=="selectionchange"&&(k_.has(l)||Uu(l,!1,n),Uu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[xl]||(r[xl]=!0,Uu("selectionchange",!1,r))}}function cm(n,r,l,u){switch(Ip(r)){case 1:var p=Jv;break;case 4:p=Qv;break;default:p=vu}l=p.bind(null,r,l,n),p=void 0,!fe||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Fu(n,r,l,u,p){var _=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var O=u.stateNode.containerInfo;if(O===p||O.nodeType===8&&O.parentNode===p)break;if(C===4)for(C=u.return;C!==null;){var j=C.tag;if((j===3||j===4)&&(j=C.stateNode.containerInfo,j===p||j.nodeType===8&&j.parentNode===p))return;C=C.return}for(;O!==null;){if(C=gs(O),C===null)return;if(j=C.tag,j===5||j===6){u=_=C;continue e}O=O.parentNode}}u=u.return}St(function(){var pe=_,Pe=vt(l),Le=[];e:{var Re=sm.get(n);if(Re!==void 0){var Ke=Su,nt=n;switch(n){case"keypress":if(dl(l)===0)break e;case"keydown":case"keyup":Ke=p_;break;case"focusin":nt="focus",Ke=Eu;break;case"focusout":nt="blur",Ke=Eu;break;case"beforeblur":case"afterblur":Ke=Eu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=n_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=x_;break;case tm:case nm:case im:Ke=s_;break;case rm:Ke=__;break;case"scroll":Ke=e_;break;case"wheel":Ke=S_;break;case"copy":case"cut":case"paste":Ke=o_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=Op}var rt=(r&4)!==0,En=!rt&&n==="scroll",ae=rt?Re!==null?Re+"Capture":null:Re;rt=[];for(var q=pe,ue;q!==null;){ue=q;var Fe=ue.stateNode;if(ue.tag===5&&Fe!==null&&(ue=Fe,ae!==null&&(Fe=Qt(q,ae),Fe!=null&&rt.push(ro(q,Fe,ue)))),En)break;q=q.return}0<rt.length&&(Re=new Ke(Re,nt,null,l,Pe),Le.push({event:Re,listeners:rt}))}}if((r&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",Ke=n==="mouseout"||n==="pointerout",Re&&l!==De&&(nt=l.relatedTarget||l.fromElement)&&(gs(nt)||nt[dr]))break e;if((Ke||Re)&&(Re=Pe.window===Pe?Pe:(Re=Pe.ownerDocument)?Re.defaultView||Re.parentWindow:window,Ke?(nt=l.relatedTarget||l.toElement,Ke=pe,nt=nt?gs(nt):null,nt!==null&&(En=Pt(nt),nt!==En||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(Ke=null,nt=pe),Ke!==nt)){if(rt=Up,Fe="onMouseLeave",ae="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(rt=Op,Fe="onPointerLeave",ae="onPointerEnter",q="pointer"),En=Ke==null?Re:Ys(Ke),ue=nt==null?Re:Ys(nt),Re=new rt(Fe,q+"leave",Ke,l,Pe),Re.target=En,Re.relatedTarget=ue,Fe=null,gs(Pe)===pe&&(rt=new rt(ae,q+"enter",nt,l,Pe),rt.target=ue,rt.relatedTarget=En,Fe=rt),En=Fe,Ke&&nt)t:{for(rt=Ke,ae=nt,q=0,ue=rt;ue;ue=Xs(ue))q++;for(ue=0,Fe=ae;Fe;Fe=Xs(Fe))ue++;for(;0<q-ue;)rt=Xs(rt),q--;for(;0<ue-q;)ae=Xs(ae),ue--;for(;q--;){if(rt===ae||ae!==null&&rt===ae.alternate)break t;rt=Xs(rt),ae=Xs(ae)}rt=null}else rt=null;Ke!==null&&um(Le,Re,Ke,rt,!1),nt!==null&&En!==null&&um(Le,En,nt,rt,!0)}}e:{if(Re=pe?Ys(pe):window,Ke=Re.nodeName&&Re.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&Re.type==="file")var ot=R_;else if(Gp(Re))if(jp)ot=I_;else{ot=P_;var ht=C_}else(Ke=Re.nodeName)&&Ke.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(ot=N_);if(ot&&(ot=ot(n,pe))){Wp(Le,ot,l,Pe);break e}ht&&ht(n,Re,pe),n==="focusout"&&(ht=Re._wrapperState)&&ht.controlled&&Re.type==="number"&&sn(Re,"number",Re.value)}switch(ht=pe?Ys(pe):window,n){case"focusin":(Gp(ht)||ht.contentEditable==="true")&&(Ws=ht,Pu=pe,to=null);break;case"focusout":to=Pu=Ws=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Qp(Le,l,Pe);break;case"selectionchange":if(U_)break;case"keydown":case"keyup":Qp(Le,l,Pe)}var pt;if(Tu)e:{switch(n){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Gs?Vp(n,l)&&(Mt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(Mt="onCompositionStart");Mt&&(kp&&l.locale!=="ko"&&(Gs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Gs&&(pt=Lp()):(Vr=Pe,yu="value"in Vr?Vr.value:Vr.textContent,Gs=!0)),ht=vl(pe,Mt),0<ht.length&&(Mt=new Fp(Mt,n,null,l,Pe),Le.push({event:Mt,listeners:ht}),pt?Mt.data=pt:(pt=Hp(l),pt!==null&&(Mt.data=pt)))),(pt=b_?E_(n,l):w_(n,l))&&(pe=vl(pe,"onBeforeInput"),0<pe.length&&(Pe=new Fp("onBeforeInput","beforeinput",null,l,Pe),Le.push({event:Pe,listeners:pe}),Pe.data=pt))}lm(Le,r)})}function ro(n,r,l){return{instance:n,listener:r,currentTarget:l}}function vl(n,r){for(var l=r+"Capture",u=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Qt(n,l),_!=null&&u.unshift(ro(n,_,p)),_=Qt(n,r),_!=null&&u.push(ro(n,_,p))),n=n.return}return u}function Xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function um(n,r,l,u,p){for(var _=r._reactName,C=[];l!==null&&l!==u;){var O=l,j=O.alternate,pe=O.stateNode;if(j!==null&&j===u)break;O.tag===5&&pe!==null&&(O=pe,p?(j=Qt(l,_),j!=null&&C.unshift(ro(l,j,O))):p||(j=Qt(l,_),j!=null&&C.push(ro(l,j,O)))),l=l.return}C.length!==0&&n.push({event:r,listeners:C})}var B_=/\r\n?/g,z_=/\u0000|\uFFFD/g;function dm(n){return(typeof n=="string"?n:""+n).replace(B_,`
`).replace(z_,"")}function _l(n,r,l){if(r=dm(r),dm(n)!==r&&l)throw Error(t(425))}function yl(){}var Ou=null,ku=null;function Bu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var zu=typeof setTimeout=="function"?setTimeout:void 0,V_=typeof clearTimeout=="function"?clearTimeout:void 0,fm=typeof Promise=="function"?Promise:void 0,H_=typeof queueMicrotask=="function"?queueMicrotask:typeof fm<"u"?function(n){return fm.resolve(null).then(n).catch(G_)}:zu;function G_(n){setTimeout(function(){throw n})}function Vu(n,r){var l=r,u=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){n.removeChild(p),Ya(r);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);Ya(r)}function Gr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function hm(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var $s=Math.random().toString(36).slice(2),qi="__reactFiber$"+$s,so="__reactProps$"+$s,dr="__reactContainer$"+$s,Hu="__reactEvents$"+$s,W_="__reactListeners$"+$s,j_="__reactHandles$"+$s;function gs(n){var r=n[qi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[dr]||l[qi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=hm(n);n!==null;){if(l=n[qi])return l;n=hm(n)}return r}n=l,l=n.parentNode}return null}function ao(n){return n=n[qi]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Sl(n){return n[so]||null}var Gu=[],qs=-1;function Wr(n){return{current:n}}function hn(n){0>qs||(n.current=Gu[qs],Gu[qs]=null,qs--)}function un(n,r){qs++,Gu[qs]=n.current,n.current=r}var jr={},jn=Wr(jr),si=Wr(!1),xs=jr;function Ks(n,r){var l=n.type.contextTypes;if(!l)return jr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=r[_];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function ai(n){return n=n.childContextTypes,n!=null}function Ml(){hn(si),hn(jn)}function pm(n,r,l){if(jn.current!==jr)throw Error(t(168));un(jn,r),un(si,l)}function mm(n,r,l){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,re(n)||"Unknown",p));return D({},l,u)}function bl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||jr,xs=jn.current,un(jn,n),un(si,si.current),!0}function gm(n,r,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=mm(n,r,xs),u.__reactInternalMemoizedMergedChildContext=n,hn(si),hn(jn),un(jn,n)):hn(si),un(si,l)}var fr=null,El=!1,Wu=!1;function xm(n){fr===null?fr=[n]:fr.push(n)}function X_(n){El=!0,xm(n)}function Xr(){if(!Wu&&fr!==null){Wu=!0;var n=0,r=Bt;try{var l=fr;for(Bt=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}fr=null,El=!1}catch(p){throw fr!==null&&(fr=fr.slice(n+1)),Gt(Bn,Xr),p}finally{Bt=r,Wu=!1}}return null}var Zs=[],Js=0,wl=null,Tl=0,bi=[],Ei=0,vs=null,hr=1,pr="";function _s(n,r){Zs[Js++]=Tl,Zs[Js++]=wl,wl=n,Tl=r}function vm(n,r,l){bi[Ei++]=hr,bi[Ei++]=pr,bi[Ei++]=vs,vs=n;var u=hr;n=pr;var p=32-Ve(u)-1;u&=~(1<<p),l+=1;var _=32-Ve(r)+p;if(30<_){var C=p-p%5;_=(u&(1<<C)-1).toString(32),u>>=C,p-=C,hr=1<<32-Ve(r)+p|l<<p|u,pr=_+n}else hr=1<<_|l<<p|u,pr=n}function ju(n){n.return!==null&&(_s(n,1),vm(n,1,0))}function Xu(n){for(;n===wl;)wl=Zs[--Js],Zs[Js]=null,Tl=Zs[--Js],Zs[Js]=null;for(;n===vs;)vs=bi[--Ei],bi[Ei]=null,pr=bi[--Ei],bi[Ei]=null,hr=bi[--Ei],bi[Ei]=null}var xi=null,vi=null,gn=!1,Oi=null;function _m(n,r){var l=Ri(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function ym(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,xi=n,vi=Gr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,xi=n,vi=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=vs!==null?{id:hr,overflow:pr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Ri(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,xi=n,vi=null,!0):!1;default:return!1}}function $u(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Yu(n){if(gn){var r=vi;if(r){var l=r;if(!ym(n,r)){if($u(n))throw Error(t(418));r=Gr(l.nextSibling);var u=xi;r&&ym(n,r)?_m(u,l):(n.flags=n.flags&-4097|2,gn=!1,xi=n)}}else{if($u(n))throw Error(t(418));n.flags=n.flags&-4097|2,gn=!1,xi=n}}}function Sm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;xi=n}function Al(n){if(n!==xi)return!1;if(!gn)return Sm(n),gn=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Bu(n.type,n.memoizedProps)),r&&(r=vi)){if($u(n))throw Mm(),Error(t(418));for(;r;)_m(n,r),r=Gr(r.nextSibling)}if(Sm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){vi=Gr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}vi=null}}else vi=xi?Gr(n.stateNode.nextSibling):null;return!0}function Mm(){for(var n=vi;n;)n=Gr(n.nextSibling)}function Qs(){vi=xi=null,gn=!1}function qu(n){Oi===null?Oi=[n]:Oi.push(n)}var $_=L.ReactCurrentBatchConfig;function oo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var p=u,_=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===_?r.ref:(r=function(C){var O=p.refs;C===null?delete O[_]:O[_]=C},r._stringRef=_,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Rl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function bm(n){var r=n._init;return r(n._payload)}function Em(n){function r(ae,q){if(n){var ue=ae.deletions;ue===null?(ae.deletions=[q],ae.flags|=16):ue.push(q)}}function l(ae,q){if(!n)return null;for(;q!==null;)r(ae,q),q=q.sibling;return null}function u(ae,q){for(ae=new Map;q!==null;)q.key!==null?ae.set(q.key,q):ae.set(q.index,q),q=q.sibling;return ae}function p(ae,q){return ae=es(ae,q),ae.index=0,ae.sibling=null,ae}function _(ae,q,ue){return ae.index=ue,n?(ue=ae.alternate,ue!==null?(ue=ue.index,ue<q?(ae.flags|=2,q):ue):(ae.flags|=2,q)):(ae.flags|=1048576,q)}function C(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function O(ae,q,ue,Fe){return q===null||q.tag!==6?(q=zd(ue,ae.mode,Fe),q.return=ae,q):(q=p(q,ue),q.return=ae,q)}function j(ae,q,ue,Fe){var ot=ue.type;return ot===V?Pe(ae,q,ue.props.children,Fe,ue.key):q!==null&&(q.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===J&&bm(ot)===q.type)?(Fe=p(q,ue.props),Fe.ref=oo(ae,q,ue),Fe.return=ae,Fe):(Fe=Jl(ue.type,ue.key,ue.props,null,ae.mode,Fe),Fe.ref=oo(ae,q,ue),Fe.return=ae,Fe)}function pe(ae,q,ue,Fe){return q===null||q.tag!==4||q.stateNode.containerInfo!==ue.containerInfo||q.stateNode.implementation!==ue.implementation?(q=Vd(ue,ae.mode,Fe),q.return=ae,q):(q=p(q,ue.children||[]),q.return=ae,q)}function Pe(ae,q,ue,Fe,ot){return q===null||q.tag!==7?(q=As(ue,ae.mode,Fe,ot),q.return=ae,q):(q=p(q,ue),q.return=ae,q)}function Le(ae,q,ue){if(typeof q=="string"&&q!==""||typeof q=="number")return q=zd(""+q,ae.mode,ue),q.return=ae,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case k:return ue=Jl(q.type,q.key,q.props,null,ae.mode,ue),ue.ref=oo(ae,null,q),ue.return=ae,ue;case F:return q=Vd(q,ae.mode,ue),q.return=ae,q;case J:var Fe=q._init;return Le(ae,Fe(q._payload),ue)}if(X(q)||le(q))return q=As(q,ae.mode,ue,null),q.return=ae,q;Rl(ae,q)}return null}function Re(ae,q,ue,Fe){var ot=q!==null?q.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return ot!==null?null:O(ae,q,""+ue,Fe);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case k:return ue.key===ot?j(ae,q,ue,Fe):null;case F:return ue.key===ot?pe(ae,q,ue,Fe):null;case J:return ot=ue._init,Re(ae,q,ot(ue._payload),Fe)}if(X(ue)||le(ue))return ot!==null?null:Pe(ae,q,ue,Fe,null);Rl(ae,ue)}return null}function Ke(ae,q,ue,Fe,ot){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return ae=ae.get(ue)||null,O(q,ae,""+Fe,ot);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case k:return ae=ae.get(Fe.key===null?ue:Fe.key)||null,j(q,ae,Fe,ot);case F:return ae=ae.get(Fe.key===null?ue:Fe.key)||null,pe(q,ae,Fe,ot);case J:var ht=Fe._init;return Ke(ae,q,ue,ht(Fe._payload),ot)}if(X(Fe)||le(Fe))return ae=ae.get(ue)||null,Pe(q,ae,Fe,ot,null);Rl(q,Fe)}return null}function nt(ae,q,ue,Fe){for(var ot=null,ht=null,pt=q,Mt=q=0,Un=null;pt!==null&&Mt<ue.length;Mt++){pt.index>Mt?(Un=pt,pt=null):Un=pt.sibling;var qt=Re(ae,pt,ue[Mt],Fe);if(qt===null){pt===null&&(pt=Un);break}n&&pt&&qt.alternate===null&&r(ae,pt),q=_(qt,q,Mt),ht===null?ot=qt:ht.sibling=qt,ht=qt,pt=Un}if(Mt===ue.length)return l(ae,pt),gn&&_s(ae,Mt),ot;if(pt===null){for(;Mt<ue.length;Mt++)pt=Le(ae,ue[Mt],Fe),pt!==null&&(q=_(pt,q,Mt),ht===null?ot=pt:ht.sibling=pt,ht=pt);return gn&&_s(ae,Mt),ot}for(pt=u(ae,pt);Mt<ue.length;Mt++)Un=Ke(pt,ae,Mt,ue[Mt],Fe),Un!==null&&(n&&Un.alternate!==null&&pt.delete(Un.key===null?Mt:Un.key),q=_(Un,q,Mt),ht===null?ot=Un:ht.sibling=Un,ht=Un);return n&&pt.forEach(function(ts){return r(ae,ts)}),gn&&_s(ae,Mt),ot}function rt(ae,q,ue,Fe){var ot=le(ue);if(typeof ot!="function")throw Error(t(150));if(ue=ot.call(ue),ue==null)throw Error(t(151));for(var ht=ot=null,pt=q,Mt=q=0,Un=null,qt=ue.next();pt!==null&&!qt.done;Mt++,qt=ue.next()){pt.index>Mt?(Un=pt,pt=null):Un=pt.sibling;var ts=Re(ae,pt,qt.value,Fe);if(ts===null){pt===null&&(pt=Un);break}n&&pt&&ts.alternate===null&&r(ae,pt),q=_(ts,q,Mt),ht===null?ot=ts:ht.sibling=ts,ht=ts,pt=Un}if(qt.done)return l(ae,pt),gn&&_s(ae,Mt),ot;if(pt===null){for(;!qt.done;Mt++,qt=ue.next())qt=Le(ae,qt.value,Fe),qt!==null&&(q=_(qt,q,Mt),ht===null?ot=qt:ht.sibling=qt,ht=qt);return gn&&_s(ae,Mt),ot}for(pt=u(ae,pt);!qt.done;Mt++,qt=ue.next())qt=Ke(pt,ae,Mt,qt.value,Fe),qt!==null&&(n&&qt.alternate!==null&&pt.delete(qt.key===null?Mt:qt.key),q=_(qt,q,Mt),ht===null?ot=qt:ht.sibling=qt,ht=qt);return n&&pt.forEach(function(Ty){return r(ae,Ty)}),gn&&_s(ae,Mt),ot}function En(ae,q,ue,Fe){if(typeof ue=="object"&&ue!==null&&ue.type===V&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case k:e:{for(var ot=ue.key,ht=q;ht!==null;){if(ht.key===ot){if(ot=ue.type,ot===V){if(ht.tag===7){l(ae,ht.sibling),q=p(ht,ue.props.children),q.return=ae,ae=q;break e}}else if(ht.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===J&&bm(ot)===ht.type){l(ae,ht.sibling),q=p(ht,ue.props),q.ref=oo(ae,ht,ue),q.return=ae,ae=q;break e}l(ae,ht);break}else r(ae,ht);ht=ht.sibling}ue.type===V?(q=As(ue.props.children,ae.mode,Fe,ue.key),q.return=ae,ae=q):(Fe=Jl(ue.type,ue.key,ue.props,null,ae.mode,Fe),Fe.ref=oo(ae,q,ue),Fe.return=ae,ae=Fe)}return C(ae);case F:e:{for(ht=ue.key;q!==null;){if(q.key===ht)if(q.tag===4&&q.stateNode.containerInfo===ue.containerInfo&&q.stateNode.implementation===ue.implementation){l(ae,q.sibling),q=p(q,ue.children||[]),q.return=ae,ae=q;break e}else{l(ae,q);break}else r(ae,q);q=q.sibling}q=Vd(ue,ae.mode,Fe),q.return=ae,ae=q}return C(ae);case J:return ht=ue._init,En(ae,q,ht(ue._payload),Fe)}if(X(ue))return nt(ae,q,ue,Fe);if(le(ue))return rt(ae,q,ue,Fe);Rl(ae,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,q!==null&&q.tag===6?(l(ae,q.sibling),q=p(q,ue),q.return=ae,ae=q):(l(ae,q),q=zd(ue,ae.mode,Fe),q.return=ae,ae=q),C(ae)):l(ae,q)}return En}var ea=Em(!0),wm=Em(!1),Cl=Wr(null),Pl=null,ta=null,Ku=null;function Zu(){Ku=ta=Pl=null}function Ju(n){var r=Cl.current;hn(Cl),n._currentValue=r}function Qu(n,r,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===l)break;n=n.return}}function na(n,r){Pl=n,Ku=ta=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(oi=!0),n.firstContext=null)}function wi(n){var r=n._currentValue;if(Ku!==n)if(n={context:n,memoizedValue:r,next:null},ta===null){if(Pl===null)throw Error(t(308));ta=n,Pl.dependencies={lanes:0,firstContext:n}}else ta=ta.next=n;return r}var ys=null;function ed(n){ys===null?ys=[n]:ys.push(n)}function Tm(n,r,l,u){var p=r.interleaved;return p===null?(l.next=l,ed(r)):(l.next=p.next,p.next=l),r.interleaved=l,mr(n,u)}function mr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var $r=!1;function td(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Am(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Yr(n,r,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Yt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,mr(n,l)}return p=u.interleaved,p===null?(r.next=r,ed(u)):(r.next=p.next,p.next=r),u.interleaved=r,mr(n,l)}function Nl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,ri(n,l)}}function Rm(n,r){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=C:_=_.next=C,l=l.next}while(l!==null);_===null?p=_=r:_=_.next=r}else p=_=r;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Il(n,r,l,u){var p=n.updateQueue;$r=!1;var _=p.firstBaseUpdate,C=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var j=O,pe=j.next;j.next=null,C===null?_=pe:C.next=pe,C=j;var Pe=n.alternate;Pe!==null&&(Pe=Pe.updateQueue,O=Pe.lastBaseUpdate,O!==C&&(O===null?Pe.firstBaseUpdate=pe:O.next=pe,Pe.lastBaseUpdate=j))}if(_!==null){var Le=p.baseState;C=0,Pe=pe=j=null,O=_;do{var Re=O.lane,Ke=O.eventTime;if((u&Re)===Re){Pe!==null&&(Pe=Pe.next={eventTime:Ke,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var nt=n,rt=O;switch(Re=r,Ke=l,rt.tag){case 1:if(nt=rt.payload,typeof nt=="function"){Le=nt.call(Ke,Le,Re);break e}Le=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=rt.payload,Re=typeof nt=="function"?nt.call(Ke,Le,Re):nt,Re==null)break e;Le=D({},Le,Re);break e;case 2:$r=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Re=p.effects,Re===null?p.effects=[O]:Re.push(O))}else Ke={eventTime:Ke,lane:Re,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Pe===null?(pe=Pe=Ke,j=Le):Pe=Pe.next=Ke,C|=Re;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;Re=O,O=Re.next,Re.next=null,p.lastBaseUpdate=Re,p.shared.pending=null}}while(!0);if(Pe===null&&(j=Le),p.baseState=j,p.firstBaseUpdate=pe,p.lastBaseUpdate=Pe,r=p.shared.interleaved,r!==null){p=r;do C|=p.lane,p=p.next;while(p!==r)}else _===null&&(p.shared.lanes=0);bs|=C,n.lanes=C,n.memoizedState=Le}}function Cm(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var lo={},Ki=Wr(lo),co=Wr(lo),uo=Wr(lo);function Ss(n){if(n===lo)throw Error(t(174));return n}function nd(n,r){switch(un(uo,r),un(co,n),un(Ki,lo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:A(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=A(r,n)}hn(Ki),un(Ki,r)}function ia(){hn(Ki),hn(co),hn(uo)}function Pm(n){Ss(uo.current);var r=Ss(Ki.current),l=A(r,n.type);r!==l&&(un(co,n),un(Ki,l))}function id(n){co.current===n&&(hn(Ki),hn(co))}var vn=Wr(0);function Ll(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var rd=[];function sd(){for(var n=0;n<rd.length;n++)rd[n]._workInProgressVersionPrimary=null;rd.length=0}var Dl=L.ReactCurrentDispatcher,ad=L.ReactCurrentBatchConfig,Ms=0,_n=null,Cn=null,Ln=null,Ul=!1,fo=!1,ho=0,Y_=0;function Xn(){throw Error(t(321))}function od(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Fi(n[l],r[l]))return!1;return!0}function ld(n,r,l,u,p,_){if(Ms=_,_n=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Dl.current=n===null||n.memoizedState===null?J_:Q_,n=l(u,p),fo){_=0;do{if(fo=!1,ho=0,25<=_)throw Error(t(301));_+=1,Ln=Cn=null,r.updateQueue=null,Dl.current=ey,n=l(u,p)}while(fo)}if(Dl.current=kl,r=Cn!==null&&Cn.next!==null,Ms=0,Ln=Cn=_n=null,Ul=!1,r)throw Error(t(300));return n}function cd(){var n=ho!==0;return ho=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?_n.memoizedState=Ln=n:Ln=Ln.next=n,Ln}function Ti(){if(Cn===null){var n=_n.alternate;n=n!==null?n.memoizedState:null}else n=Cn.next;var r=Ln===null?_n.memoizedState:Ln.next;if(r!==null)Ln=r,Cn=n;else{if(n===null)throw Error(t(310));Cn=n,n={memoizedState:Cn.memoizedState,baseState:Cn.baseState,baseQueue:Cn.baseQueue,queue:Cn.queue,next:null},Ln===null?_n.memoizedState=Ln=n:Ln=Ln.next=n}return Ln}function po(n,r){return typeof r=="function"?r(n):r}function ud(n){var r=Ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=Cn,p=u.baseQueue,_=l.pending;if(_!==null){if(p!==null){var C=p.next;p.next=_.next,_.next=C}u.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,u=u.baseState;var O=C=null,j=null,pe=_;do{var Pe=pe.lane;if((Ms&Pe)===Pe)j!==null&&(j=j.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),u=pe.hasEagerState?pe.eagerState:n(u,pe.action);else{var Le={lane:Pe,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};j===null?(O=j=Le,C=u):j=j.next=Le,_n.lanes|=Pe,bs|=Pe}pe=pe.next}while(pe!==null&&pe!==_);j===null?C=u:j.next=O,Fi(u,r.memoizedState)||(oi=!0),r.memoizedState=u,r.baseState=C,r.baseQueue=j,l.lastRenderedState=u}if(n=l.interleaved,n!==null){p=n;do _=p.lane,_n.lanes|=_,bs|=_,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function dd(n){var r=Ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,p=l.pending,_=r.memoizedState;if(p!==null){l.pending=null;var C=p=p.next;do _=n(_,C.action),C=C.next;while(C!==p);Fi(_,r.memoizedState)||(oi=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),l.lastRenderedState=_}return[_,u]}function Nm(){}function Im(n,r){var l=_n,u=Ti(),p=r(),_=!Fi(u.memoizedState,p);if(_&&(u.memoizedState=p,oi=!0),u=u.queue,fd(Um.bind(null,l,u,n),[n]),u.getSnapshot!==r||_||Ln!==null&&Ln.memoizedState.tag&1){if(l.flags|=2048,mo(9,Dm.bind(null,l,u,p,r),void 0,null),Dn===null)throw Error(t(349));(Ms&30)!==0||Lm(l,r,p)}return p}function Lm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=_n.updateQueue,r===null?(r={lastEffect:null,stores:null},_n.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Dm(n,r,l,u){r.value=l,r.getSnapshot=u,Fm(r)&&Om(n)}function Um(n,r,l){return l(function(){Fm(r)&&Om(n)})}function Fm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Fi(n,l)}catch{return!0}}function Om(n){var r=mr(n,1);r!==null&&Vi(r,n,1,-1)}function km(n){var r=Zi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:po,lastRenderedState:n},r.queue=n,n=n.dispatch=Z_.bind(null,_n,n),[r.memoizedState,n]}function mo(n,r,l,u){return n={tag:n,create:r,destroy:l,deps:u,next:null},r=_n.updateQueue,r===null?(r={lastEffect:null,stores:null},_n.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,r.lastEffect=n)),n}function Bm(){return Ti().memoizedState}function Fl(n,r,l,u){var p=Zi();_n.flags|=n,p.memoizedState=mo(1|r,l,void 0,u===void 0?null:u)}function Ol(n,r,l,u){var p=Ti();u=u===void 0?null:u;var _=void 0;if(Cn!==null){var C=Cn.memoizedState;if(_=C.destroy,u!==null&&od(u,C.deps)){p.memoizedState=mo(r,l,_,u);return}}_n.flags|=n,p.memoizedState=mo(1|r,l,_,u)}function zm(n,r){return Fl(8390656,8,n,r)}function fd(n,r){return Ol(2048,8,n,r)}function Vm(n,r){return Ol(4,2,n,r)}function Hm(n,r){return Ol(4,4,n,r)}function Gm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Wm(n,r,l){return l=l!=null?l.concat([n]):null,Ol(4,4,Gm.bind(null,r,n),l)}function hd(){}function jm(n,r){var l=Ti();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&od(r,u[1])?u[0]:(l.memoizedState=[n,r],n)}function Xm(n,r){var l=Ti();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&od(r,u[1])?u[0]:(n=n(),l.memoizedState=[n,r],n)}function $m(n,r,l){return(Ms&21)===0?(n.baseState&&(n.baseState=!1,oi=!0),n.memoizedState=l):(Fi(l,r)||(l=qe(),_n.lanes|=l,bs|=l,n.baseState=!0),r)}function q_(n,r){var l=Bt;Bt=l!==0&&4>l?l:4,n(!0);var u=ad.transition;ad.transition={};try{n(!1),r()}finally{Bt=l,ad.transition=u}}function Ym(){return Ti().memoizedState}function K_(n,r,l){var u=Jr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},qm(n))Km(r,l);else if(l=Tm(n,r,l,u),l!==null){var p=ei();Vi(l,n,u,p),Zm(l,r,u)}}function Z_(n,r,l){var u=Jr(n),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(qm(n))Km(r,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var C=r.lastRenderedState,O=_(C,l);if(p.hasEagerState=!0,p.eagerState=O,Fi(O,C)){var j=r.interleaved;j===null?(p.next=p,ed(r)):(p.next=j.next,j.next=p),r.interleaved=p;return}}catch{}finally{}l=Tm(n,r,p,u),l!==null&&(p=ei(),Vi(l,n,u,p),Zm(l,r,u))}}function qm(n){var r=n.alternate;return n===_n||r!==null&&r===_n}function Km(n,r){fo=Ul=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Zm(n,r,l){if((l&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,ri(n,l)}}var kl={readContext:wi,useCallback:Xn,useContext:Xn,useEffect:Xn,useImperativeHandle:Xn,useInsertionEffect:Xn,useLayoutEffect:Xn,useMemo:Xn,useReducer:Xn,useRef:Xn,useState:Xn,useDebugValue:Xn,useDeferredValue:Xn,useTransition:Xn,useMutableSource:Xn,useSyncExternalStore:Xn,useId:Xn,unstable_isNewReconciler:!1},J_={readContext:wi,useCallback:function(n,r){return Zi().memoizedState=[n,r===void 0?null:r],n},useContext:wi,useEffect:zm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Fl(4194308,4,Gm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Fl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Fl(4,2,n,r)},useMemo:function(n,r){var l=Zi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var u=Zi();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=K_.bind(null,_n,n),[u.memoizedState,n]},useRef:function(n){var r=Zi();return n={current:n},r.memoizedState=n},useState:km,useDebugValue:hd,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=km(!1),r=n[0];return n=q_.bind(null,n[1]),Zi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var u=_n,p=Zi();if(gn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Dn===null)throw Error(t(349));(Ms&30)!==0||Lm(u,r,l)}p.memoizedState=l;var _={value:l,getSnapshot:r};return p.queue=_,zm(Um.bind(null,u,_,n),[n]),u.flags|=2048,mo(9,Dm.bind(null,u,_,l,r),void 0,null),l},useId:function(){var n=Zi(),r=Dn.identifierPrefix;if(gn){var l=pr,u=hr;l=(u&~(1<<32-Ve(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=ho++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Y_++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Q_={readContext:wi,useCallback:jm,useContext:wi,useEffect:fd,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:Hm,useMemo:Xm,useReducer:ud,useRef:Bm,useState:function(){return ud(po)},useDebugValue:hd,useDeferredValue:function(n){var r=Ti();return $m(r,Cn.memoizedState,n)},useTransition:function(){var n=ud(po)[0],r=Ti().memoizedState;return[n,r]},useMutableSource:Nm,useSyncExternalStore:Im,useId:Ym,unstable_isNewReconciler:!1},ey={readContext:wi,useCallback:jm,useContext:wi,useEffect:fd,useImperativeHandle:Wm,useInsertionEffect:Vm,useLayoutEffect:Hm,useMemo:Xm,useReducer:dd,useRef:Bm,useState:function(){return dd(po)},useDebugValue:hd,useDeferredValue:function(n){var r=Ti();return Cn===null?r.memoizedState=n:$m(r,Cn.memoizedState,n)},useTransition:function(){var n=dd(po)[0],r=Ti().memoizedState;return[n,r]},useMutableSource:Nm,useSyncExternalStore:Im,useId:Ym,unstable_isNewReconciler:!1};function ki(n,r){if(n&&n.defaultProps){r=D({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function pd(n,r,l,u){r=n.memoizedState,l=l(u,r),l=l==null?r:D({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Bl={isMounted:function(n){return(n=n._reactInternals)?Pt(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var u=ei(),p=Jr(n),_=gr(u,p);_.payload=r,l!=null&&(_.callback=l),r=Yr(n,_,p),r!==null&&(Vi(r,n,p,u),Nl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var u=ei(),p=Jr(n),_=gr(u,p);_.tag=1,_.payload=r,l!=null&&(_.callback=l),r=Yr(n,_,p),r!==null&&(Vi(r,n,p,u),Nl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=ei(),u=Jr(n),p=gr(l,u);p.tag=2,r!=null&&(p.callback=r),r=Yr(n,p,u),r!==null&&(Vi(r,n,u,l),Nl(r,n,u))}};function Jm(n,r,l,u,p,_,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,C):r.prototype&&r.prototype.isPureReactComponent?!eo(l,u)||!eo(p,_):!0}function Qm(n,r,l){var u=!1,p=jr,_=r.contextType;return typeof _=="object"&&_!==null?_=wi(_):(p=ai(r)?xs:jn.current,u=r.contextTypes,_=(u=u!=null)?Ks(n,p):jr),r=new r(l,_),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Bl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),r}function eg(n,r,l,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==n&&Bl.enqueueReplaceState(r,r.state,null)}function md(n,r,l,u){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},td(n);var _=r.contextType;typeof _=="object"&&_!==null?p.context=wi(_):(_=ai(r)?xs:jn.current,p.context=Ks(n,_)),p.state=n.memoizedState,_=r.getDerivedStateFromProps,typeof _=="function"&&(pd(n,r,_,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Bl.enqueueReplaceState(p,p.state,null),Il(n,l,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function ra(n,r){try{var l="",u=r;do l+=Me(u),u=u.return;while(u);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:r,stack:p,digest:null}}function gd(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function xd(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var ty=typeof WeakMap=="function"?WeakMap:Map;function tg(n,r,l){l=gr(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){Xl||(Xl=!0,Id=u),xd(n,r)},l}function ng(n,r,l){l=gr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;l.payload=function(){return u(p)},l.callback=function(){xd(n,r)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){xd(n,r),typeof u!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})}),l}function ig(n,r,l){var u=n.pingCache;if(u===null){u=n.pingCache=new ty;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(l)||(p.add(l),n=my.bind(null,n,r,l),r.then(n,n))}function rg(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function sg(n,r,l,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=gr(-1,1),r.tag=2,Yr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var ny=L.ReactCurrentOwner,oi=!1;function Qn(n,r,l,u){r.child=n===null?wm(r,null,l,u):ea(r,n.child,l,u)}function ag(n,r,l,u,p){l=l.render;var _=r.ref;return na(r,p),u=ld(n,r,l,u,_,p),l=cd(),n!==null&&!oi?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,xr(n,r,p)):(gn&&l&&ju(r),r.flags|=1,Qn(n,r,u,p),r.child)}function og(n,r,l,u,p){if(n===null){var _=l.type;return typeof _=="function"&&!Bd(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=_,lg(n,r,_,u,p)):(n=Jl(l.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,(n.lanes&p)===0){var C=_.memoizedProps;if(l=l.compare,l=l!==null?l:eo,l(C,u)&&n.ref===r.ref)return xr(n,r,p)}return r.flags|=1,n=es(_,u),n.ref=r.ref,n.return=r,r.child=n}function lg(n,r,l,u,p){if(n!==null){var _=n.memoizedProps;if(eo(_,u)&&n.ref===r.ref)if(oi=!1,r.pendingProps=u=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(oi=!0);else return r.lanes=n.lanes,xr(n,r,p)}return vd(n,r,l,u,p)}function cg(n,r,l){var u=r.pendingProps,p=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},un(aa,_i),_i|=l;else{if((l&1073741824)===0)return n=_!==null?_.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,un(aa,_i),_i|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=_!==null?_.baseLanes:l,un(aa,_i),_i|=u}else _!==null?(u=_.baseLanes|l,r.memoizedState=null):u=l,un(aa,_i),_i|=u;return Qn(n,r,p,l),r.child}function ug(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function vd(n,r,l,u,p){var _=ai(l)?xs:jn.current;return _=Ks(r,_),na(r,p),l=ld(n,r,l,u,_,p),u=cd(),n!==null&&!oi?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,xr(n,r,p)):(gn&&u&&ju(r),r.flags|=1,Qn(n,r,l,p),r.child)}function dg(n,r,l,u,p){if(ai(l)){var _=!0;bl(r)}else _=!1;if(na(r,p),r.stateNode===null)Vl(n,r),Qm(r,l,u),md(r,l,u,p),u=!0;else if(n===null){var C=r.stateNode,O=r.memoizedProps;C.props=O;var j=C.context,pe=l.contextType;typeof pe=="object"&&pe!==null?pe=wi(pe):(pe=ai(l)?xs:jn.current,pe=Ks(r,pe));var Pe=l.getDerivedStateFromProps,Le=typeof Pe=="function"||typeof C.getSnapshotBeforeUpdate=="function";Le||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(O!==u||j!==pe)&&eg(r,C,u,pe),$r=!1;var Re=r.memoizedState;C.state=Re,Il(r,u,C,p),j=r.memoizedState,O!==u||Re!==j||si.current||$r?(typeof Pe=="function"&&(pd(r,l,Pe,u),j=r.memoizedState),(O=$r||Jm(r,l,O,u,Re,j,pe))?(Le||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(r.flags|=4194308)):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=j),C.props=u,C.state=j,C.context=pe,u=O):(typeof C.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{C=r.stateNode,Am(n,r),O=r.memoizedProps,pe=r.type===r.elementType?O:ki(r.type,O),C.props=pe,Le=r.pendingProps,Re=C.context,j=l.contextType,typeof j=="object"&&j!==null?j=wi(j):(j=ai(l)?xs:jn.current,j=Ks(r,j));var Ke=l.getDerivedStateFromProps;(Pe=typeof Ke=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(O!==Le||Re!==j)&&eg(r,C,u,j),$r=!1,Re=r.memoizedState,C.state=Re,Il(r,u,C,p);var nt=r.memoizedState;O!==Le||Re!==nt||si.current||$r?(typeof Ke=="function"&&(pd(r,l,Ke,u),nt=r.memoizedState),(pe=$r||Jm(r,l,pe,u,Re,nt,j)||!1)?(Pe||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,nt,j),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,nt,j)),typeof C.componentDidUpdate=="function"&&(r.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof C.componentDidUpdate!="function"||O===n.memoizedProps&&Re===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Re===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=nt),C.props=u,C.state=nt,C.context=j,u=pe):(typeof C.componentDidUpdate!="function"||O===n.memoizedProps&&Re===n.memoizedState||(r.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Re===n.memoizedState||(r.flags|=1024),u=!1)}return _d(n,r,l,u,_,p)}function _d(n,r,l,u,p,_){ug(n,r);var C=(r.flags&128)!==0;if(!u&&!C)return p&&gm(r,l,!1),xr(n,r,_);u=r.stateNode,ny.current=r;var O=C&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&C?(r.child=ea(r,n.child,null,_),r.child=ea(r,null,O,_)):Qn(n,r,O,_),r.memoizedState=u.state,p&&gm(r,l,!0),r.child}function fg(n){var r=n.stateNode;r.pendingContext?pm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&pm(n,r.context,!1),nd(n,r.containerInfo)}function hg(n,r,l,u,p){return Qs(),qu(p),r.flags|=256,Qn(n,r,l,u),r.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function Sd(n){return{baseLanes:n,cachePool:null,transitions:null}}function pg(n,r,l){var u=r.pendingProps,p=vn.current,_=!1,C=(r.flags&128)!==0,O;if((O=C)||(O=n!==null&&n.memoizedState===null?!1:(p&2)!==0),O?(_=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),un(vn,p&1),n===null)return Yu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(C=u.children,n=u.fallback,_?(u=r.mode,_=r.child,C={mode:"hidden",children:C},(u&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=C):_=Ql(C,u,0,null),n=As(n,u,l,null),_.return=r,n.return=r,_.sibling=n,r.child=_,r.child.memoizedState=Sd(l),r.memoizedState=yd,n):Md(r,C));if(p=n.memoizedState,p!==null&&(O=p.dehydrated,O!==null))return iy(n,r,C,u,O,p,l);if(_){_=u.fallback,C=r.mode,p=n.child,O=p.sibling;var j={mode:"hidden",children:u.children};return(C&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=j,r.deletions=null):(u=es(p,j),u.subtreeFlags=p.subtreeFlags&14680064),O!==null?_=es(O,_):(_=As(_,C,l,null),_.flags|=2),_.return=r,u.return=r,u.sibling=_,r.child=u,u=_,_=r.child,C=n.child.memoizedState,C=C===null?Sd(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},_.memoizedState=C,_.childLanes=n.childLanes&~l,r.memoizedState=yd,u}return _=n.child,n=_.sibling,u=es(_,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=l),u.return=r,u.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=u,r.memoizedState=null,u}function Md(n,r){return r=Ql({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function zl(n,r,l,u){return u!==null&&qu(u),ea(r,n.child,null,l),n=Md(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function iy(n,r,l,u,p,_,C){if(l)return r.flags&256?(r.flags&=-257,u=gd(Error(t(422))),zl(n,r,C,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(_=u.fallback,p=r.mode,u=Ql({mode:"visible",children:u.children},p,0,null),_=As(_,p,C,null),_.flags|=2,u.return=r,_.return=r,u.sibling=_,r.child=u,(r.mode&1)!==0&&ea(r,n.child,null,C),r.child.memoizedState=Sd(C),r.memoizedState=yd,_);if((r.mode&1)===0)return zl(n,r,C,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var O=u.dgst;return u=O,_=Error(t(419)),u=gd(_,u,void 0),zl(n,r,C,u)}if(O=(C&n.childLanes)!==0,oi||O){if(u=Dn,u!==null){switch(C&-C){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|C))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,mr(n,p),Vi(u,n,p,-1))}return kd(),u=gd(Error(t(421))),zl(n,r,C,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=gy.bind(null,n),p._reactRetry=r,null):(n=_.treeContext,vi=Gr(p.nextSibling),xi=r,gn=!0,Oi=null,n!==null&&(bi[Ei++]=hr,bi[Ei++]=pr,bi[Ei++]=vs,hr=n.id,pr=n.overflow,vs=r),r=Md(r,u.children),r.flags|=4096,r)}function mg(n,r,l){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Qu(n.return,r,l)}function bd(n,r,l,u,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=l,_.tailMode=p)}function gg(n,r,l){var u=r.pendingProps,p=u.revealOrder,_=u.tail;if(Qn(n,r,u.children,l),u=vn.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&mg(n,l,r);else if(n.tag===19)mg(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(un(vn,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&Ll(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),bd(r,!1,p,l,_);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Ll(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}bd(r,!0,l,null,_);break;case"together":bd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Vl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function xr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),bs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=es(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=es(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function ry(n,r,l){switch(r.tag){case 3:fg(r),Qs();break;case 5:Pm(r);break;case 1:ai(r.type)&&bl(r);break;case 4:nd(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;un(Cl,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(un(vn,vn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?pg(n,r,l):(un(vn,vn.current&1),n=xr(n,r,l),n!==null?n.sibling:null);un(vn,vn.current&1);break;case 19:if(u=(l&r.childLanes)!==0,(n.flags&128)!==0){if(u)return gg(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),un(vn,vn.current),u)break;return null;case 22:case 23:return r.lanes=0,cg(n,r,l)}return xr(n,r,l)}var xg,Ed,vg,_g;xg=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ed=function(){},vg=function(n,r,l,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,Ss(Ki.current);var _=null;switch(l){case"input":p=We(n,p),u=We(n,u),_=[];break;case"select":p=D({},p,{value:void 0}),u=D({},u,{value:void 0}),_=[];break;case"textarea":p=wt(n,p),u=wt(n,u),_=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=yl)}$e(l,u);var C;l=null;for(pe in p)if(!u.hasOwnProperty(pe)&&p.hasOwnProperty(pe)&&p[pe]!=null)if(pe==="style"){var O=p[pe];for(C in O)O.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(a.hasOwnProperty(pe)?_||(_=[]):(_=_||[]).push(pe,null));for(pe in u){var j=u[pe];if(O=p!=null?p[pe]:void 0,u.hasOwnProperty(pe)&&j!==O&&(j!=null||O!=null))if(pe==="style")if(O){for(C in O)!O.hasOwnProperty(C)||j&&j.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in j)j.hasOwnProperty(C)&&O[C]!==j[C]&&(l||(l={}),l[C]=j[C])}else l||(_||(_=[]),_.push(pe,l)),l=j;else pe==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,O=O?O.__html:void 0,j!=null&&O!==j&&(_=_||[]).push(pe,j)):pe==="children"?typeof j!="string"&&typeof j!="number"||(_=_||[]).push(pe,""+j):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(a.hasOwnProperty(pe)?(j!=null&&pe==="onScroll"&&fn("scroll",n),_||O===j||(_=[])):(_=_||[]).push(pe,j))}l&&(_=_||[]).push("style",l);var pe=_;(r.updateQueue=pe)&&(r.flags|=4)}},_g=function(n,r,l,u){l!==u&&(r.flags|=4)};function go(n,r){if(!gn)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function $n(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=l,r}function sy(n,r,l){var u=r.pendingProps;switch(Xu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $n(r),null;case 1:return ai(r.type)&&Ml(),$n(r),null;case 3:return u=r.stateNode,ia(),hn(si),hn(jn),sd(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Al(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Oi!==null&&(Ud(Oi),Oi=null))),Ed(n,r),$n(r),null;case 5:id(r);var p=Ss(uo.current);if(l=r.type,n!==null&&r.stateNode!=null)vg(n,r,l,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return $n(r),null}if(n=Ss(Ki.current),Al(r)){u=r.stateNode,l=r.type;var _=r.memoizedProps;switch(u[qi]=r,u[so]=_,n=(r.mode&1)!==0,l){case"dialog":fn("cancel",u),fn("close",u);break;case"iframe":case"object":case"embed":fn("load",u);break;case"video":case"audio":for(p=0;p<no.length;p++)fn(no[p],u);break;case"source":fn("error",u);break;case"img":case"image":case"link":fn("error",u),fn("load",u);break;case"details":fn("toggle",u);break;case"input":xt(u,_),fn("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!_.multiple},fn("invalid",u);break;case"textarea":$t(u,_),fn("invalid",u)}$e(l,_),p=null;for(var C in _)if(_.hasOwnProperty(C)){var O=_[C];C==="children"?typeof O=="string"?u.textContent!==O&&(_.suppressHydrationWarning!==!0&&_l(u.textContent,O,n),p=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(_.suppressHydrationWarning!==!0&&_l(u.textContent,O,n),p=["children",""+O]):a.hasOwnProperty(C)&&O!=null&&C==="onScroll"&&fn("scroll",u)}switch(l){case"input":Ie(u),Ut(u,_,!0);break;case"textarea":Ie(u),Jt(u);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(u.onclick=yl)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{C=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=C.createElement(l,{is:u.is}):(n=C.createElement(l),l==="select"&&(C=n,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):n=C.createElementNS(n,l),n[qi]=r,n[so]=u,xg(n,r,!1,!1),r.stateNode=n;e:{switch(C=Be(l,u),l){case"dialog":fn("cancel",n),fn("close",n),p=u;break;case"iframe":case"object":case"embed":fn("load",n),p=u;break;case"video":case"audio":for(p=0;p<no.length;p++)fn(no[p],n);p=u;break;case"source":fn("error",n),p=u;break;case"img":case"image":case"link":fn("error",n),fn("load",n),p=u;break;case"details":fn("toggle",n),p=u;break;case"input":xt(n,u),p=We(n,u),fn("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=D({},u,{value:void 0}),fn("invalid",n);break;case"textarea":$t(n,u),p=wt(n,u),fn("invalid",n);break;default:p=u}$e(l,p),O=p;for(_ in O)if(O.hasOwnProperty(_)){var j=O[_];_==="style"?Se(n,j):_==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&ye(n,j)):_==="children"?typeof j=="string"?(l!=="textarea"||j!=="")&&we(n,j):typeof j=="number"&&we(n,""+j):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?j!=null&&_==="onScroll"&&fn("scroll",n):j!=null&&P(n,_,j,C))}switch(l){case"input":Ie(n),Ut(n,u,!1);break;case"textarea":Ie(n),Jt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ce(u.value));break;case"select":n.multiple=!!u.multiple,_=u.value,_!=null?Kt(n,!!u.multiple,_,!1):u.defaultValue!=null&&Kt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=yl)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return $n(r),null;case 6:if(n&&r.stateNode!=null)_g(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(l=Ss(uo.current),Ss(Ki.current),Al(r)){if(u=r.stateNode,l=r.memoizedProps,u[qi]=r,(_=u.nodeValue!==l)&&(n=xi,n!==null))switch(n.tag){case 3:_l(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_l(u.nodeValue,l,(n.mode&1)!==0)}_&&(r.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[qi]=r,r.stateNode=u}return $n(r),null;case 13:if(hn(vn),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(gn&&vi!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Mm(),Qs(),r.flags|=98560,_=!1;else if(_=Al(r),u!==null&&u.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=r.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[qi]=r}else Qs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$n(r),_=!1}else Oi!==null&&(Ud(Oi),Oi=null),_=!0;if(!_)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(vn.current&1)!==0?Pn===0&&(Pn=3):kd())),r.updateQueue!==null&&(r.flags|=4),$n(r),null);case 4:return ia(),Ed(n,r),n===null&&io(r.stateNode.containerInfo),$n(r),null;case 10:return Ju(r.type._context),$n(r),null;case 17:return ai(r.type)&&Ml(),$n(r),null;case 19:if(hn(vn),_=r.memoizedState,_===null)return $n(r),null;if(u=(r.flags&128)!==0,C=_.rendering,C===null)if(u)go(_,!1);else{if(Pn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(C=Ll(n),C!==null){for(r.flags|=128,go(_,!1),u=C.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=l,l=r.child;l!==null;)_=l,n=u,_.flags&=14680066,C=_.alternate,C===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=C.childLanes,_.lanes=C.lanes,_.child=C.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=C.memoizedProps,_.memoizedState=C.memoizedState,_.updateQueue=C.updateQueue,_.type=C.type,n=C.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return un(vn,vn.current&1|2),r.child}n=n.sibling}_.tail!==null&&ft()>oa&&(r.flags|=128,u=!0,go(_,!1),r.lanes=4194304)}else{if(!u)if(n=Ll(C),n!==null){if(r.flags|=128,u=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),go(_,!0),_.tail===null&&_.tailMode==="hidden"&&!C.alternate&&!gn)return $n(r),null}else 2*ft()-_.renderingStartTime>oa&&l!==1073741824&&(r.flags|=128,u=!0,go(_,!1),r.lanes=4194304);_.isBackwards?(C.sibling=r.child,r.child=C):(l=_.last,l!==null?l.sibling=C:r.child=C,_.last=C)}return _.tail!==null?(r=_.tail,_.rendering=r,_.tail=r.sibling,_.renderingStartTime=ft(),r.sibling=null,l=vn.current,un(vn,u?l&1|2:l&1),r):($n(r),null);case 22:case 23:return Od(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(_i&1073741824)!==0&&($n(r),r.subtreeFlags&6&&(r.flags|=8192)):$n(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function ay(n,r){switch(Xu(r),r.tag){case 1:return ai(r.type)&&Ml(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ia(),hn(si),hn(jn),sd(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return id(r),null;case 13:if(hn(vn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Qs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return hn(vn),null;case 4:return ia(),null;case 10:return Ju(r.type._context),null;case 22:case 23:return Od(),null;case 24:return null;default:return null}}var Hl=!1,Yn=!1,oy=typeof WeakSet=="function"?WeakSet:Set,Je=null;function sa(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){Mn(n,r,u)}else l.current=null}function wd(n,r,l){try{l()}catch(u){Mn(n,r,u)}}var yg=!1;function ly(n,r){if(Ou=ll,n=Jp(),Cu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var C=0,O=-1,j=-1,pe=0,Pe=0,Le=n,Re=null;t:for(;;){for(var Ke;Le!==l||p!==0&&Le.nodeType!==3||(O=C+p),Le!==_||u!==0&&Le.nodeType!==3||(j=C+u),Le.nodeType===3&&(C+=Le.nodeValue.length),(Ke=Le.firstChild)!==null;)Re=Le,Le=Ke;for(;;){if(Le===n)break t;if(Re===l&&++pe===p&&(O=C),Re===_&&++Pe===u&&(j=C),(Ke=Le.nextSibling)!==null)break;Le=Re,Re=Le.parentNode}Le=Ke}l=O===-1||j===-1?null:{start:O,end:j}}else l=null}l=l||{start:0,end:0}}else l=null;for(ku={focusedElem:n,selectionRange:l},ll=!1,Je=r;Je!==null;)if(r=Je,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Je=n;else for(;Je!==null;){r=Je;try{var nt=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var rt=nt.memoizedProps,En=nt.memoizedState,ae=r.stateNode,q=ae.getSnapshotBeforeUpdate(r.elementType===r.type?rt:ki(r.type,rt),En);ae.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var ue=r.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Fe){Mn(r,r.return,Fe)}if(n=r.sibling,n!==null){n.return=r.return,Je=n;break}Je=r.return}return nt=yg,yg=!1,nt}function xo(n,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&wd(r,l,_)}p=p.next}while(p!==u)}}function Gl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function Td(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Sg(n){var r=n.alternate;r!==null&&(n.alternate=null,Sg(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[qi],delete r[so],delete r[Hu],delete r[W_],delete r[j_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Mg(n){return n.tag===5||n.tag===3||n.tag===4}function bg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Mg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ad(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=yl));else if(u!==4&&(n=n.child,n!==null))for(Ad(n,r,l),n=n.sibling;n!==null;)Ad(n,r,l),n=n.sibling}function Rd(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Rd(n,r,l),n=n.sibling;n!==null;)Rd(n,r,l),n=n.sibling}var Vn=null,Bi=!1;function qr(n,r,l){for(l=l.child;l!==null;)Eg(n,r,l),l=l.sibling}function Eg(n,r,l){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(oe,l)}catch{}switch(l.tag){case 5:Yn||sa(l,r);case 6:var u=Vn,p=Bi;Vn=null,qr(n,r,l),Vn=u,Bi=p,Vn!==null&&(Bi?(n=Vn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Vn.removeChild(l.stateNode));break;case 18:Vn!==null&&(Bi?(n=Vn,l=l.stateNode,n.nodeType===8?Vu(n.parentNode,l):n.nodeType===1&&Vu(n,l),Ya(n)):Vu(Vn,l.stateNode));break;case 4:u=Vn,p=Bi,Vn=l.stateNode.containerInfo,Bi=!0,qr(n,r,l),Vn=u,Bi=p;break;case 0:case 11:case 14:case 15:if(!Yn&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var _=p,C=_.destroy;_=_.tag,C!==void 0&&((_&2)!==0||(_&4)!==0)&&wd(l,r,C),p=p.next}while(p!==u)}qr(n,r,l);break;case 1:if(!Yn&&(sa(l,r),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(O){Mn(l,r,O)}qr(n,r,l);break;case 21:qr(n,r,l);break;case 22:l.mode&1?(Yn=(u=Yn)||l.memoizedState!==null,qr(n,r,l),Yn=u):qr(n,r,l);break;default:qr(n,r,l)}}function wg(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new oy),r.forEach(function(u){var p=xy.bind(null,n,u);l.has(u)||(l.add(u),u.then(p,p))})}}function zi(n,r){var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var _=n,C=r,O=C;e:for(;O!==null;){switch(O.tag){case 5:Vn=O.stateNode,Bi=!1;break e;case 3:Vn=O.stateNode.containerInfo,Bi=!0;break e;case 4:Vn=O.stateNode.containerInfo,Bi=!0;break e}O=O.return}if(Vn===null)throw Error(t(160));Eg(_,C,p),Vn=null,Bi=!1;var j=p.alternate;j!==null&&(j.return=null),p.return=null}catch(pe){Mn(p,r,pe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Tg(r,n),r=r.sibling}function Tg(n,r){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(zi(r,n),Ji(n),u&4){try{xo(3,n,n.return),Gl(3,n)}catch(rt){Mn(n,n.return,rt)}try{xo(5,n,n.return)}catch(rt){Mn(n,n.return,rt)}}break;case 1:zi(r,n),Ji(n),u&512&&l!==null&&sa(l,l.return);break;case 5:if(zi(r,n),Ji(n),u&512&&l!==null&&sa(l,l.return),n.flags&32){var p=n.stateNode;try{we(p,"")}catch(rt){Mn(n,n.return,rt)}}if(u&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,C=l!==null?l.memoizedProps:_,O=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{O==="input"&&_.type==="radio"&&_.name!=null&&dt(p,_),Be(O,C);var pe=Be(O,_);for(C=0;C<j.length;C+=2){var Pe=j[C],Le=j[C+1];Pe==="style"?Se(p,Le):Pe==="dangerouslySetInnerHTML"?ye(p,Le):Pe==="children"?we(p,Le):P(p,Pe,Le,pe)}switch(O){case"input":Lt(p,_);break;case"textarea":Ge(p,_);break;case"select":var Re=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ke=_.value;Ke!=null?Kt(p,!!_.multiple,Ke,!1):Re!==!!_.multiple&&(_.defaultValue!=null?Kt(p,!!_.multiple,_.defaultValue,!0):Kt(p,!!_.multiple,_.multiple?[]:"",!1))}p[so]=_}catch(rt){Mn(n,n.return,rt)}}break;case 6:if(zi(r,n),Ji(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(rt){Mn(n,n.return,rt)}}break;case 3:if(zi(r,n),Ji(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Ya(r.containerInfo)}catch(rt){Mn(n,n.return,rt)}break;case 4:zi(r,n),Ji(n);break;case 13:zi(r,n),Ji(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Nd=ft())),u&4&&wg(n);break;case 22:if(Pe=l!==null&&l.memoizedState!==null,n.mode&1?(Yn=(pe=Yn)||Pe,zi(r,n),Yn=pe):zi(r,n),Ji(n),u&8192){if(pe=n.memoizedState!==null,(n.stateNode.isHidden=pe)&&!Pe&&(n.mode&1)!==0)for(Je=n,Pe=n.child;Pe!==null;){for(Le=Je=Pe;Je!==null;){switch(Re=Je,Ke=Re.child,Re.tag){case 0:case 11:case 14:case 15:xo(4,Re,Re.return);break;case 1:sa(Re,Re.return);var nt=Re.stateNode;if(typeof nt.componentWillUnmount=="function"){u=Re,l=Re.return;try{r=u,nt.props=r.memoizedProps,nt.state=r.memoizedState,nt.componentWillUnmount()}catch(rt){Mn(u,l,rt)}}break;case 5:sa(Re,Re.return);break;case 22:if(Re.memoizedState!==null){Cg(Le);continue}}Ke!==null?(Ke.return=Re,Je=Ke):Cg(Le)}Pe=Pe.sibling}e:for(Pe=null,Le=n;;){if(Le.tag===5){if(Pe===null){Pe=Le;try{p=Le.stateNode,pe?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(O=Le.stateNode,j=Le.memoizedProps.style,C=j!=null&&j.hasOwnProperty("display")?j.display:null,O.style.display=xe("display",C))}catch(rt){Mn(n,n.return,rt)}}}else if(Le.tag===6){if(Pe===null)try{Le.stateNode.nodeValue=pe?"":Le.memoizedProps}catch(rt){Mn(n,n.return,rt)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===n)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===n)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===n)break e;Pe===Le&&(Pe=null),Le=Le.return}Pe===Le&&(Pe=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:zi(r,n),Ji(n),u&4&&wg(n);break;case 21:break;default:zi(r,n),Ji(n)}}function Ji(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Mg(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(we(p,""),u.flags&=-33);var _=bg(n);Rd(n,_,p);break;case 3:case 4:var C=u.stateNode.containerInfo,O=bg(n);Ad(n,O,C);break;default:throw Error(t(161))}}catch(j){Mn(n,n.return,j)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function cy(n,r,l){Je=n,Ag(n)}function Ag(n,r,l){for(var u=(n.mode&1)!==0;Je!==null;){var p=Je,_=p.child;if(p.tag===22&&u){var C=p.memoizedState!==null||Hl;if(!C){var O=p.alternate,j=O!==null&&O.memoizedState!==null||Yn;O=Hl;var pe=Yn;if(Hl=C,(Yn=j)&&!pe)for(Je=p;Je!==null;)C=Je,j=C.child,C.tag===22&&C.memoizedState!==null?Pg(p):j!==null?(j.return=C,Je=j):Pg(p);for(;_!==null;)Je=_,Ag(_),_=_.sibling;Je=p,Hl=O,Yn=pe}Rg(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Je=_):Rg(n)}}function Rg(n){for(;Je!==null;){var r=Je;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Yn||Gl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Yn)if(l===null)u.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:ki(r.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var _=r.updateQueue;_!==null&&Cm(r,_,u);break;case 3:var C=r.updateQueue;if(C!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Cm(r,C,l)}break;case 5:var O=r.stateNode;if(l===null&&r.flags&4){l=O;var j=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&l.focus();break;case"img":j.src&&(l.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var pe=r.alternate;if(pe!==null){var Pe=pe.memoizedState;if(Pe!==null){var Le=Pe.dehydrated;Le!==null&&Ya(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Yn||r.flags&512&&Td(r)}catch(Re){Mn(r,r.return,Re)}}if(r===n){Je=null;break}if(l=r.sibling,l!==null){l.return=r.return,Je=l;break}Je=r.return}}function Cg(n){for(;Je!==null;){var r=Je;if(r===n){Je=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Je=l;break}Je=r.return}}function Pg(n){for(;Je!==null;){var r=Je;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Gl(4,r)}catch(j){Mn(r,l,j)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(j){Mn(r,p,j)}}var _=r.return;try{Td(r)}catch(j){Mn(r,_,j)}break;case 5:var C=r.return;try{Td(r)}catch(j){Mn(r,C,j)}}}catch(j){Mn(r,r.return,j)}if(r===n){Je=null;break}var O=r.sibling;if(O!==null){O.return=r.return,Je=O;break}Je=r.return}}var uy=Math.ceil,Wl=L.ReactCurrentDispatcher,Cd=L.ReactCurrentOwner,Ai=L.ReactCurrentBatchConfig,Yt=0,Dn=null,Tn=null,Hn=0,_i=0,aa=Wr(0),Pn=0,vo=null,bs=0,jl=0,Pd=0,_o=null,li=null,Nd=0,oa=1/0,vr=null,Xl=!1,Id=null,Kr=null,$l=!1,Zr=null,Yl=0,yo=0,Ld=null,ql=-1,Kl=0;function ei(){return(Yt&6)!==0?ft():ql!==-1?ql:ql=ft()}function Jr(n){return(n.mode&1)===0?1:(Yt&2)!==0&&Hn!==0?Hn&-Hn:$_.transition!==null?(Kl===0&&(Kl=qe()),Kl):(n=Bt,n!==0||(n=window.event,n=n===void 0?16:Ip(n.type)),n)}function Vi(n,r,l,u){if(50<yo)throw yo=0,Ld=null,Error(t(185));Ft(n,l,u),((Yt&2)===0||n!==Dn)&&(n===Dn&&((Yt&2)===0&&(jl|=l),Pn===4&&Qr(n,Hn)),ci(n,u),l===1&&Yt===0&&(r.mode&1)===0&&(oa=ft()+500,El&&Xr()))}function ci(n,r){var l=n.callbackNode;en(n,r);var u=cn(n,n===Dn?Hn:0);if(u===0)l!==null&&pn(l),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(l!=null&&pn(l),r===1)n.tag===0?X_(Ig.bind(null,n)):xm(Ig.bind(null,n)),H_(function(){(Yt&6)===0&&Xr()}),l=null;else{switch(ur(u)){case 1:l=Bn;break;case 4:l=N;break;case 16:l=Q;break;case 536870912:l=ie;break;default:l=Q}l=zg(l,Ng.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Ng(n,r){if(ql=-1,Kl=0,(Yt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(la()&&n.callbackNode!==l)return null;var u=cn(n,n===Dn?Hn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Zl(n,u);else{r=u;var p=Yt;Yt|=2;var _=Dg();(Dn!==n||Hn!==r)&&(vr=null,oa=ft()+500,ws(n,r));do try{hy();break}catch(O){Lg(n,O)}while(!0);Zu(),Wl.current=_,Yt=p,Tn!==null?r=0:(Dn=null,Hn=0,r=Pn)}if(r!==0){if(r===2&&(p=wn(n),p!==0&&(u=p,r=Dd(n,p))),r===1)throw l=vo,ws(n,0),Qr(n,u),ci(n,ft()),l;if(r===6)Qr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!dy(p)&&(r=Zl(n,u),r===2&&(_=wn(n),_!==0&&(u=_,r=Dd(n,_))),r===1))throw l=vo,ws(n,0),Qr(n,u),ci(n,ft()),l;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:Ts(n,li,vr);break;case 3:if(Qr(n,u),(u&130023424)===u&&(r=Nd+500-ft(),10<r)){if(cn(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){ei(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=zu(Ts.bind(null,n,li,vr),r);break}Ts(n,li,vr);break;case 4:if(Qr(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var C=31-Ve(u);_=1<<C,C=r[C],C>p&&(p=C),u&=~_}if(u=p,u=ft()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*uy(u/1960))-u,10<u){n.timeoutHandle=zu(Ts.bind(null,n,li,vr),u);break}Ts(n,li,vr);break;case 5:Ts(n,li,vr);break;default:throw Error(t(329))}}}return ci(n,ft()),n.callbackNode===l?Ng.bind(null,n):null}function Dd(n,r){var l=_o;return n.current.memoizedState.isDehydrated&&(ws(n,r).flags|=256),n=Zl(n,r),n!==2&&(r=li,li=l,r!==null&&Ud(r)),n}function Ud(n){li===null?li=n:li.push.apply(li,n)}function dy(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],_=p.getSnapshot;p=p.value;try{if(!Fi(_(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(n,r){for(r&=~Pd,r&=~jl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Ve(r),u=1<<l;n[l]=-1,r&=~u}}function Ig(n){if((Yt&6)!==0)throw Error(t(327));la();var r=cn(n,0);if((r&1)===0)return ci(n,ft()),null;var l=Zl(n,r);if(n.tag!==0&&l===2){var u=wn(n);u!==0&&(r=u,l=Dd(n,u))}if(l===1)throw l=vo,ws(n,0),Qr(n,r),ci(n,ft()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ts(n,li,vr),ci(n,ft()),null}function Fd(n,r){var l=Yt;Yt|=1;try{return n(r)}finally{Yt=l,Yt===0&&(oa=ft()+500,El&&Xr())}}function Es(n){Zr!==null&&Zr.tag===0&&(Yt&6)===0&&la();var r=Yt;Yt|=1;var l=Ai.transition,u=Bt;try{if(Ai.transition=null,Bt=1,n)return n()}finally{Bt=u,Ai.transition=l,Yt=r,(Yt&6)===0&&Xr()}}function Od(){_i=aa.current,hn(aa)}function ws(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,V_(l)),Tn!==null)for(l=Tn.return;l!==null;){var u=l;switch(Xu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ml();break;case 3:ia(),hn(si),hn(jn),sd();break;case 5:id(u);break;case 4:ia();break;case 13:hn(vn);break;case 19:hn(vn);break;case 10:Ju(u.type._context);break;case 22:case 23:Od()}l=l.return}if(Dn=n,Tn=n=es(n.current,null),Hn=_i=r,Pn=0,vo=null,Pd=jl=bs=0,li=_o=null,ys!==null){for(r=0;r<ys.length;r++)if(l=ys[r],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,_=l.pending;if(_!==null){var C=_.next;_.next=p,u.next=C}l.pending=u}ys=null}return n}function Lg(n,r){do{var l=Tn;try{if(Zu(),Dl.current=kl,Ul){for(var u=_n.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Ul=!1}if(Ms=0,Ln=Cn=_n=null,fo=!1,ho=0,Cd.current=null,l===null||l.return===null){Pn=1,vo=r,Tn=null;break}e:{var _=n,C=l.return,O=l,j=r;if(r=Hn,O.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var pe=j,Pe=O,Le=Pe.tag;if((Pe.mode&1)===0&&(Le===0||Le===11||Le===15)){var Re=Pe.alternate;Re?(Pe.updateQueue=Re.updateQueue,Pe.memoizedState=Re.memoizedState,Pe.lanes=Re.lanes):(Pe.updateQueue=null,Pe.memoizedState=null)}var Ke=rg(C);if(Ke!==null){Ke.flags&=-257,sg(Ke,C,O,_,r),Ke.mode&1&&ig(_,pe,r),r=Ke,j=pe;var nt=r.updateQueue;if(nt===null){var rt=new Set;rt.add(j),r.updateQueue=rt}else nt.add(j);break e}else{if((r&1)===0){ig(_,pe,r),kd();break e}j=Error(t(426))}}else if(gn&&O.mode&1){var En=rg(C);if(En!==null){(En.flags&65536)===0&&(En.flags|=256),sg(En,C,O,_,r),qu(ra(j,O));break e}}_=j=ra(j,O),Pn!==4&&(Pn=2),_o===null?_o=[_]:_o.push(_),_=C;do{switch(_.tag){case 3:_.flags|=65536,r&=-r,_.lanes|=r;var ae=tg(_,j,r);Rm(_,ae);break e;case 1:O=j;var q=_.type,ue=_.stateNode;if((_.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Kr===null||!Kr.has(ue)))){_.flags|=65536,r&=-r,_.lanes|=r;var Fe=ng(_,O,r);Rm(_,Fe);break e}}_=_.return}while(_!==null)}Fg(l)}catch(ot){r=ot,Tn===l&&l!==null&&(Tn=l=l.return);continue}break}while(!0)}function Dg(){var n=Wl.current;return Wl.current=kl,n===null?kl:n}function kd(){(Pn===0||Pn===3||Pn===2)&&(Pn=4),Dn===null||(bs&268435455)===0&&(jl&268435455)===0||Qr(Dn,Hn)}function Zl(n,r){var l=Yt;Yt|=2;var u=Dg();(Dn!==n||Hn!==r)&&(vr=null,ws(n,r));do try{fy();break}catch(p){Lg(n,p)}while(!0);if(Zu(),Yt=l,Wl.current=u,Tn!==null)throw Error(t(261));return Dn=null,Hn=0,Pn}function fy(){for(;Tn!==null;)Ug(Tn)}function hy(){for(;Tn!==null&&!jt();)Ug(Tn)}function Ug(n){var r=Bg(n.alternate,n,_i);n.memoizedProps=n.pendingProps,r===null?Fg(n):Tn=r,Cd.current=null}function Fg(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=sy(l,r,_i),l!==null){Tn=l;return}}else{if(l=ay(l,r),l!==null){l.flags&=32767,Tn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Pn=6,Tn=null;return}}if(r=r.sibling,r!==null){Tn=r;return}Tn=r=n}while(r!==null);Pn===0&&(Pn=5)}function Ts(n,r,l){var u=Bt,p=Ai.transition;try{Ai.transition=null,Bt=1,py(n,r,l,u)}finally{Ai.transition=p,Bt=u}return null}function py(n,r,l,u){do la();while(Zr!==null);if((Yt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(ii(n,_),n===Dn&&(Tn=Dn=null,Hn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||$l||($l=!0,zg(Q,function(){return la(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=Ai.transition,Ai.transition=null;var C=Bt;Bt=1;var O=Yt;Yt|=4,Cd.current=null,ly(n,l),Tg(l,n),D_(ku),ll=!!Ou,ku=Ou=null,n.current=l,cy(l),on(),Yt=O,Bt=C,Ai.transition=_}else n.current=l;if($l&&($l=!1,Zr=n,Yl=p),_=n.pendingLanes,_===0&&(Kr=null),Ze(l.stateNode),ci(n,ft()),r!==null)for(u=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(Xl)throw Xl=!1,n=Id,Id=null,n;return(Yl&1)!==0&&n.tag!==0&&la(),_=n.pendingLanes,(_&1)!==0?n===Ld?yo++:(yo=0,Ld=n):yo=0,Xr(),null}function la(){if(Zr!==null){var n=ur(Yl),r=Ai.transition,l=Bt;try{if(Ai.transition=null,Bt=16>n?16:n,Zr===null)var u=!1;else{if(n=Zr,Zr=null,Yl=0,(Yt&6)!==0)throw Error(t(331));var p=Yt;for(Yt|=4,Je=n.current;Je!==null;){var _=Je,C=_.child;if((Je.flags&16)!==0){var O=_.deletions;if(O!==null){for(var j=0;j<O.length;j++){var pe=O[j];for(Je=pe;Je!==null;){var Pe=Je;switch(Pe.tag){case 0:case 11:case 15:xo(8,Pe,_)}var Le=Pe.child;if(Le!==null)Le.return=Pe,Je=Le;else for(;Je!==null;){Pe=Je;var Re=Pe.sibling,Ke=Pe.return;if(Sg(Pe),Pe===pe){Je=null;break}if(Re!==null){Re.return=Ke,Je=Re;break}Je=Ke}}}var nt=_.alternate;if(nt!==null){var rt=nt.child;if(rt!==null){nt.child=null;do{var En=rt.sibling;rt.sibling=null,rt=En}while(rt!==null)}}Je=_}}if((_.subtreeFlags&2064)!==0&&C!==null)C.return=_,Je=C;else e:for(;Je!==null;){if(_=Je,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:xo(9,_,_.return)}var ae=_.sibling;if(ae!==null){ae.return=_.return,Je=ae;break e}Je=_.return}}var q=n.current;for(Je=q;Je!==null;){C=Je;var ue=C.child;if((C.subtreeFlags&2064)!==0&&ue!==null)ue.return=C,Je=ue;else e:for(C=q;Je!==null;){if(O=Je,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Gl(9,O)}}catch(ot){Mn(O,O.return,ot)}if(O===C){Je=null;break e}var Fe=O.sibling;if(Fe!==null){Fe.return=O.return,Je=Fe;break e}Je=O.return}}if(Yt=p,Xr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(oe,n)}catch{}u=!0}return u}finally{Bt=l,Ai.transition=r}}return!1}function Og(n,r,l){r=ra(l,r),r=tg(n,r,1),n=Yr(n,r,1),r=ei(),n!==null&&(Ft(n,1,r),ci(n,r))}function Mn(n,r,l){if(n.tag===3)Og(n,n,l);else for(;r!==null;){if(r.tag===3){Og(r,n,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Kr===null||!Kr.has(u))){n=ra(l,n),n=ng(r,n,1),r=Yr(r,n,1),n=ei(),r!==null&&(Ft(r,1,n),ci(r,n));break}}r=r.return}}function my(n,r,l){var u=n.pingCache;u!==null&&u.delete(r),r=ei(),n.pingedLanes|=n.suspendedLanes&l,Dn===n&&(Hn&l)===l&&(Pn===4||Pn===3&&(Hn&130023424)===Hn&&500>ft()-Nd?ws(n,0):Pd|=l),ci(n,r)}function kg(n,r){r===0&&((n.mode&1)===0?r=1:(r=st,st<<=1,(st&130023424)===0&&(st=4194304)));var l=ei();n=mr(n,r),n!==null&&(Ft(n,r,l),ci(n,l))}function gy(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),kg(n,l)}function xy(n,r){var l=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),kg(n,l)}var Bg;Bg=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||si.current)oi=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return oi=!1,ry(n,r,l);oi=(n.flags&131072)!==0}else oi=!1,gn&&(r.flags&1048576)!==0&&vm(r,Tl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Vl(n,r),n=r.pendingProps;var p=Ks(r,jn.current);na(r,l),p=ld(null,r,u,n,p,l);var _=cd();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ai(u)?(_=!0,bl(r)):_=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,td(r),p.updater=Bl,r.stateNode=p,p._reactInternals=r,md(r,u,n,l),r=_d(null,r,u,!0,_,l)):(r.tag=0,gn&&_&&ju(r),Qn(null,r,p,l),r=r.child),r;case 16:u=r.elementType;e:{switch(Vl(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=_y(u),n=ki(u,n),p){case 0:r=vd(null,r,u,n,l);break e;case 1:r=dg(null,r,u,n,l);break e;case 11:r=ag(null,r,u,n,l);break e;case 14:r=og(null,r,u,ki(u.type,n),l);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:ki(u,p),vd(n,r,u,p,l);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:ki(u,p),dg(n,r,u,p,l);case 3:e:{if(fg(r),n===null)throw Error(t(387));u=r.pendingProps,_=r.memoizedState,p=_.element,Am(n,r),Il(r,u,null,l);var C=r.memoizedState;if(u=C.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){p=ra(Error(t(423)),r),r=hg(n,r,u,l,p);break e}else if(u!==p){p=ra(Error(t(424)),r),r=hg(n,r,u,l,p);break e}else for(vi=Gr(r.stateNode.containerInfo.firstChild),xi=r,gn=!0,Oi=null,l=wm(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Qs(),u===p){r=xr(n,r,l);break e}Qn(n,r,u,l)}r=r.child}return r;case 5:return Pm(r),n===null&&Yu(r),u=r.type,p=r.pendingProps,_=n!==null?n.memoizedProps:null,C=p.children,Bu(u,p)?C=null:_!==null&&Bu(u,_)&&(r.flags|=32),ug(n,r),Qn(n,r,C,l),r.child;case 6:return n===null&&Yu(r),null;case 13:return pg(n,r,l);case 4:return nd(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=ea(r,null,u,l):Qn(n,r,u,l),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:ki(u,p),ag(n,r,u,p,l);case 7:return Qn(n,r,r.pendingProps,l),r.child;case 8:return Qn(n,r,r.pendingProps.children,l),r.child;case 12:return Qn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,_=r.memoizedProps,C=p.value,un(Cl,u._currentValue),u._currentValue=C,_!==null)if(Fi(_.value,C)){if(_.children===p.children&&!si.current){r=xr(n,r,l);break e}}else for(_=r.child,_!==null&&(_.return=r);_!==null;){var O=_.dependencies;if(O!==null){C=_.child;for(var j=O.firstContext;j!==null;){if(j.context===u){if(_.tag===1){j=gr(-1,l&-l),j.tag=2;var pe=_.updateQueue;if(pe!==null){pe=pe.shared;var Pe=pe.pending;Pe===null?j.next=j:(j.next=Pe.next,Pe.next=j),pe.pending=j}}_.lanes|=l,j=_.alternate,j!==null&&(j.lanes|=l),Qu(_.return,l,r),O.lanes|=l;break}j=j.next}}else if(_.tag===10)C=_.type===r.type?null:_.child;else if(_.tag===18){if(C=_.return,C===null)throw Error(t(341));C.lanes|=l,O=C.alternate,O!==null&&(O.lanes|=l),Qu(C,l,r),C=_.sibling}else C=_.child;if(C!==null)C.return=_;else for(C=_;C!==null;){if(C===r){C=null;break}if(_=C.sibling,_!==null){_.return=C.return,C=_;break}C=C.return}_=C}Qn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,na(r,l),p=wi(p),u=u(p),r.flags|=1,Qn(n,r,u,l),r.child;case 14:return u=r.type,p=ki(u,r.pendingProps),p=ki(u.type,p),og(n,r,u,p,l);case 15:return lg(n,r,r.type,r.pendingProps,l);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:ki(u,p),Vl(n,r),r.tag=1,ai(u)?(n=!0,bl(r)):n=!1,na(r,l),Qm(r,u,p),md(r,u,p,l),_d(null,r,u,!0,n,l);case 19:return gg(n,r,l);case 22:return cg(n,r,l)}throw Error(t(156,r.tag))};function zg(n,r){return Gt(n,r)}function vy(n,r,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(n,r,l,u){return new vy(n,r,l,u)}function Bd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _y(n){if(typeof n=="function")return Bd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===W)return 14}return 2}function es(n,r){var l=n.alternate;return l===null?(l=Ri(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Jl(n,r,l,u,p,_){var C=2;if(u=n,typeof n=="function")Bd(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case V:return As(l.children,p,_,r);case T:C=8,p|=8;break;case I:return n=Ri(12,l,r,p|2),n.elementType=I,n.lanes=_,n;case se:return n=Ri(13,l,r,p),n.elementType=se,n.lanes=_,n;case de:return n=Ri(19,l,r,p),n.elementType=de,n.lanes=_,n;case K:return Ql(l,p,_,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:C=10;break e;case B:C=9;break e;case Y:C=11;break e;case W:C=14;break e;case J:C=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Ri(C,l,r,p),r.elementType=n,r.type=u,r.lanes=_,r}function As(n,r,l,u){return n=Ri(7,n,u,r),n.lanes=l,n}function Ql(n,r,l,u){return n=Ri(22,n,u,r),n.elementType=K,n.lanes=l,n.stateNode={isHidden:!1},n}function zd(n,r,l){return n=Ri(6,n,null,r),n.lanes=l,n}function Vd(n,r,l){return r=Ri(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function yy(n,r,l,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Hd(n,r,l,u,p,_,C,O,j){return n=new yy(n,r,l,O,j),r===1?(r=1,_===!0&&(r|=8)):r=0,_=Ri(3,null,null,r),n.current=_,_.stateNode=n,_.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},td(_),n}function Sy(n,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:r,implementation:l}}function Vg(n){if(!n)return jr;n=n._reactInternals;e:{if(Pt(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ai(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(ai(l))return mm(n,l,r)}return r}function Hg(n,r,l,u,p,_,C,O,j){return n=Hd(l,u,!0,n,p,_,C,O,j),n.context=Vg(null),l=n.current,u=ei(),p=Jr(l),_=gr(u,p),_.callback=r??null,Yr(l,_,p),n.current.lanes=p,Ft(n,p,u),ci(n,u),n}function ec(n,r,l,u){var p=r.current,_=ei(),C=Jr(p);return l=Vg(l),r.context===null?r.context=l:r.pendingContext=l,r=gr(_,C),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Yr(p,r,C),n!==null&&(Vi(n,p,C,_),Nl(n,p,C)),C}function tc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Gd(n,r){Gg(n,r),(n=n.alternate)&&Gg(n,r)}function My(){return null}var Wg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wd(n){this._internalRoot=n}nc.prototype.render=Wd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));ec(n,r,null,null)},nc.prototype.unmount=Wd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Es(function(){ec(null,n,null,null)}),r[dr]=null}};function nc(n){this._internalRoot=n}nc.prototype.unstable_scheduleHydration=function(n){if(n){var r=tn();n={blockedOn:null,target:n,priority:r};for(var l=0;l<zr.length&&r!==0&&r<zr[l].priority;l++);zr.splice(l,0,n),l===0&&Pp(n)}};function jd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ic(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jg(){}function by(n,r,l,u,p){if(p){if(typeof u=="function"){var _=u;u=function(){var pe=tc(C);_.call(pe)}}var C=Hg(r,u,n,0,null,!1,!1,"",jg);return n._reactRootContainer=C,n[dr]=C.current,io(n.nodeType===8?n.parentNode:n),Es(),C}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var O=u;u=function(){var pe=tc(j);O.call(pe)}}var j=Hd(n,0,!1,null,null,!1,!1,"",jg);return n._reactRootContainer=j,n[dr]=j.current,io(n.nodeType===8?n.parentNode:n),Es(function(){ec(r,j,l,u)}),j}function rc(n,r,l,u,p){var _=l._reactRootContainer;if(_){var C=_;if(typeof p=="function"){var O=p;p=function(){var j=tc(C);O.call(j)}}ec(r,C,n,p)}else C=by(l,r,n,p,u);return tc(C)}Zt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Xt(r.pendingLanes);l!==0&&(ri(r,l|1),ci(r,ft()),(Yt&6)===0&&(oa=ft()+500,Xr()))}break;case 13:Es(function(){var u=mr(n,1);if(u!==null){var p=ei();Vi(u,n,1,p)}}),Gd(n,1)}},dn=function(n){if(n.tag===13){var r=mr(n,134217728);if(r!==null){var l=ei();Vi(r,n,134217728,l)}Gd(n,134217728)}},Di=function(n){if(n.tag===13){var r=Jr(n),l=mr(n,r);if(l!==null){var u=ei();Vi(l,n,r,u)}Gd(n,r)}},tn=function(){return Bt},Ui=function(n,r){var l=Bt;try{return Bt=n,r()}finally{Bt=l}},yt=function(n,r,l){switch(r){case"input":if(Lt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var u=l[r];if(u!==n&&u.form===n.form){var p=Sl(u);if(!p)throw Error(t(90));ut(u),Lt(u,p)}}}break;case"textarea":Ge(n,l);break;case"select":r=l.value,r!=null&&Kt(n,!!l.multiple,r,!1)}},ze=Fd,Ae=Es;var Ey={usingClientEntryPoint:!1,Events:[ao,Ys,Sl,_e,Ye,Fd]},So={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wy={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Jn(n),n===null?null:n.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||My,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{oe=sc.inject(wy),He=sc}catch{}}return ui.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ey,ui.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(r))throw Error(t(200));return Sy(n,r,null,l)},ui.createRoot=function(n,r){if(!jd(n))throw Error(t(299));var l=!1,u="",p=Wg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=Hd(n,1,!1,null,null,l,!1,u,p),n[dr]=r.current,io(n.nodeType===8?n.parentNode:n),new Wd(r)},ui.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Jn(r),n=n===null?null:n.stateNode,n},ui.flushSync=function(n){return Es(n)},ui.hydrate=function(n,r,l){if(!ic(r))throw Error(t(200));return rc(null,n,r,!0,l)},ui.hydrateRoot=function(n,r,l){if(!jd(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,_="",C=Wg;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),r=Hg(r,null,n,1,l??null,p,!1,_,C),n[dr]=r.current,io(n),u)for(n=0;n<u.length;n++)l=u[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new nc(r)},ui.render=function(n,r,l){if(!ic(r))throw Error(t(200));return rc(null,n,r,!1,l)},ui.unmountComponentAtNode=function(n){if(!ic(n))throw Error(t(40));return n._reactRootContainer?(Es(function(){rc(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},ui.unstable_batchedUpdates=Fd,ui.unstable_renderSubtreeIntoContainer=function(n,r,l,u){if(!ic(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return rc(n,r,l,!1,u)},ui.version="18.3.1-next-f1338f8080-20240426",ui}var Qg;function Hx(){if(Qg)return Yd.exports;Qg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Yd.exports=Iy(),Yd.exports}var e0;function Ly(){if(e0)return ac;e0=1;var s=Hx();return ac.createRoot=s.createRoot,ac.hydrateRoot=s.hydrateRoot,ac}var Dy=Ly(),G=$h();/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var t0="popstate";function Uy(s={}){function e(i,a){let{pathname:o,search:c,hash:d}=i.location;return Yf("",{pathname:o,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){return typeof a=="string"?a:Yo(a)}return Oy(e,t,null,s)}function yn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function or(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Fy(){return Math.random().toString(36).substring(2,10)}function n0(s,e){return{usr:s.state,key:s.key,idx:e}}function Yf(s,e,t=null,i){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ba(e):e,state:t,key:e&&e.key||i||Fy()}}function Yo({pathname:s="/",search:e="",hash:t=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(s+=t.charAt(0)==="#"?t:"#"+t),s}function Ba(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substring(t),s=s.substring(0,t));let i=s.indexOf("?");i>=0&&(e.search=s.substring(i),s=s.substring(0,i)),s&&(e.pathname=s)}return e}function Oy(s,e,t,i={}){let{window:a=document.defaultView,v5Compat:o=!1}=i,c=a.history,d="POP",h=null,f=v();f==null&&(f=0,c.replaceState({...c.state,idx:f},""));function v(){return(c.state||{idx:null}).idx}function x(){d="POP";let y=v(),S=y==null?null:y-f;f=y,h&&h({action:d,location:E.location,delta:S})}function g(y,S){d="PUSH";let R=Yf(E.location,y,S);f=v()+1;let P=n0(R,f),L=E.createHref(R);try{c.pushState(P,"",L)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;a.location.assign(L)}o&&h&&h({action:d,location:E.location,delta:1})}function m(y,S){d="REPLACE";let R=Yf(E.location,y,S);f=v();let P=n0(R,f),L=E.createHref(R);c.replaceState(P,"",L),o&&h&&h({action:d,location:E.location,delta:0})}function M(y){return ky(y)}let E={get action(){return d},get location(){return s(a,c)},listen(y){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(t0,x),h=y,()=>{a.removeEventListener(t0,x),h=null}},createHref(y){return e(a,y)},createURL:M,encodeLocation(y){let S=M(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:g,replace:m,go(y){return c.go(y)}};return E}function ky(s,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),yn(t,"No window.location.(origin|href) available to create URL");let i=typeof s=="string"?s:Yo(s);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function Gx(s,e,t="/"){return By(s,e,t,!1)}function By(s,e,t,i){let a=typeof e=="string"?Ba(e):e,o=Nr(a.pathname||"/",t);if(o==null)return null;let c=Wx(s);zy(c);let d=null;for(let h=0;d==null&&h<c.length;++h){let f=Zy(o);d=qy(c[h],f,i)}return d}function Wx(s,e=[],t=[],i="",a=!1){let o=(c,d,h=a,f)=>{let v={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(i)&&h)return;yn(v.relativePath.startsWith(i),`Absolute route path "${v.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(i.length)}let x=Rr([i,v.relativePath]),g=t.concat(v);c.children&&c.children.length>0&&(yn(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Wx(c.children,e,g,x,h)),!(c.path==null&&!c.index)&&e.push({path:x,score:$y(x,c.index),routesMeta:g})};return s.forEach((c,d)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))o(c,d);else for(let f of jx(c.path))o(c,d,!0,f)}),e}function jx(s){let e=s.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(i.length===0)return a?[o,""]:[o];let c=jx(i.join("/")),d=[];return d.push(...c.map(h=>h===""?o:[o,h].join("/"))),a&&d.push(...c),d.map(h=>s.startsWith("/")&&h===""?"/":h)}function zy(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:Yy(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var Vy=/^:[\w-]+$/,Hy=3,Gy=2,Wy=1,jy=10,Xy=-2,i0=s=>s==="*";function $y(s,e){let t=s.split("/"),i=t.length;return t.some(i0)&&(i+=Xy),e&&(i+=Gy),t.filter(a=>!i0(a)).reduce((a,o)=>a+(Vy.test(o)?Hy:o===""?Wy:jy),i)}function Yy(s,e){return s.length===e.length&&s.slice(0,-1).every((i,a)=>i===e[a])?s[s.length-1]-e[e.length-1]:0}function qy(s,e,t=!1){let{routesMeta:i}=s,a={},o="/",c=[];for(let d=0;d<i.length;++d){let h=i[d],f=d===i.length-1,v=o==="/"?e:e.slice(o.length)||"/",x=qc({path:h.relativePath,caseSensitive:h.caseSensitive,end:f},v),g=h.route;if(!x&&f&&t&&!i[i.length-1].route.index&&(x=qc({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!x)return null;Object.assign(a,x.params),c.push({params:a,pathname:Rr([o,x.pathname]),pathnameBase:tS(Rr([o,x.pathnameBase])),route:g}),x.pathnameBase!=="/"&&(o=Rr([o,x.pathnameBase]))}return c}function qc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,i]=Ky(s.path,s.caseSensitive,s.end),a=e.match(t);if(!a)return null;let o=a[0],c=o.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((f,{paramName:v,isOptional:x},g)=>{if(v==="*"){let M=d[g]||"";c=o.slice(0,o.length-M.length).replace(/(.)\/+$/,"$1")}const m=d[g];return x&&!m?f[v]=void 0:f[v]=(m||"").replace(/%2F/g,"/"),f},{}),pathname:o,pathnameBase:c,pattern:s}}function Ky(s,e=!1,t=!0){or(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let i=[],a="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,h)=>(i.push({paramName:d,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(i.push({paramName:"*"}),a+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":s!==""&&s!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function Zy(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return or(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Nr(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=s.charAt(t);return i&&i!=="/"?null:s.slice(t)||"/"}var Jy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Qy(s,e="/"){let{pathname:t,search:i="",hash:a=""}=typeof s=="string"?Ba(s):s,o;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?o=r0(t.substring(1),"/"):o=r0(t,e)):o=e,{pathname:o,search:nS(i),hash:iS(a)}}function r0(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Zd(s,e,t,i){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function eS(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Xx(s){let e=eS(s);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function $x(s,e,t,i=!1){let a;typeof s=="string"?a=Ba(s):(a={...s},yn(!a.pathname||!a.pathname.includes("?"),Zd("?","pathname","search",a)),yn(!a.pathname||!a.pathname.includes("#"),Zd("#","pathname","hash",a)),yn(!a.search||!a.search.includes("#"),Zd("#","search","hash",a)));let o=s===""||a.pathname==="",c=o?"/":a.pathname,d;if(c==null)d=t;else{let x=e.length-1;if(!i&&c.startsWith("..")){let g=c.split("/");for(;g[0]==="..";)g.shift(),x-=1;a.pathname=g.join("/")}d=x>=0?e[x]:"/"}let h=Qy(a,d),f=c&&c!=="/"&&c.endsWith("/"),v=(o||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(f||v)&&(h.pathname+="/"),h}var Rr=s=>s.join("/").replace(/\/\/+/g,"/"),tS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),nS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,iS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,rS=class{constructor(s,e,t,i=!1){this.status=s,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function sS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function aS(s){return s.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Yx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function qx(s,e){let t=s;if(typeof t!="string"||!Jy.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,a=!1;if(Yx)try{let o=new URL(window.location.href),c=t.startsWith("//")?new URL(o.protocol+t):new URL(t),d=Nr(c.pathname,e);c.origin===o.origin&&d!=null?t=d+c.search+c.hash:a=!0}catch{or(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Kx=["POST","PUT","PATCH","DELETE"];new Set(Kx);var oS=["GET",...Kx];new Set(oS);var za=G.createContext(null);za.displayName="DataRouter";var uu=G.createContext(null);uu.displayName="DataRouterState";var lS=G.createContext(!1),Zx=G.createContext({isTransitioning:!1});Zx.displayName="ViewTransition";var cS=G.createContext(new Map);cS.displayName="Fetchers";var uS=G.createContext(null);uS.displayName="Await";var Li=G.createContext(null);Li.displayName="Navigation";var Qo=G.createContext(null);Qo.displayName="Location";var Dr=G.createContext({outlet:null,matches:[],isDataRoute:!1});Dr.displayName="Route";var Yh=G.createContext(null);Yh.displayName="RouteError";var Jx="REACT_ROUTER_ERROR",dS="REDIRECT",fS="ROUTE_ERROR_RESPONSE";function hS(s){if(s.startsWith(`${Jx}:${dS}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function pS(s){if(s.startsWith(`${Jx}:${fS}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new rS(e.status,e.statusText,e.data)}catch{}}function mS(s,{relative:e}={}){yn(el(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=G.useContext(Li),{hash:a,pathname:o,search:c}=nl(s,{relative:e}),d=o;return t!=="/"&&(d=o==="/"?t:Rr([t,o])),i.createHref({pathname:d,search:c,hash:a})}function el(){return G.useContext(Qo)!=null}function Bs(){return yn(el(),"useLocation() may be used only in the context of a <Router> component."),G.useContext(Qo).location}var Qx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ev(s){G.useContext(Li).static||G.useLayoutEffect(s)}function tl(){let{isDataRoute:s}=G.useContext(Dr);return s?RS():gS()}function gS(){yn(el(),"useNavigate() may be used only in the context of a <Router> component.");let s=G.useContext(za),{basename:e,navigator:t}=G.useContext(Li),{matches:i}=G.useContext(Dr),{pathname:a}=Bs(),o=JSON.stringify(Xx(i)),c=G.useRef(!1);return ev(()=>{c.current=!0}),G.useCallback((h,f={})=>{if(or(c.current,Qx),!c.current)return;if(typeof h=="number"){t.go(h);return}let v=$x(h,JSON.parse(o),a,f.relative==="path");s==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Rr([e,v.pathname])),(f.replace?t.replace:t.push)(v,f.state,f)},[e,t,o,a,s])}G.createContext(null);function nl(s,{relative:e}={}){let{matches:t}=G.useContext(Dr),{pathname:i}=Bs(),a=JSON.stringify(Xx(t));return G.useMemo(()=>$x(s,JSON.parse(a),i,e==="path"),[s,a,i,e])}function xS(s,e){return tv(s,e)}function tv(s,e,t,i,a){var R;yn(el(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=G.useContext(Li),{matches:c}=G.useContext(Dr),d=c[c.length-1],h=d?d.params:{},f=d?d.pathname:"/",v=d?d.pathnameBase:"/",x=d&&d.route;{let P=x&&x.path||"";iv(f,!x||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let g=Bs(),m;if(e){let P=typeof e=="string"?Ba(e):e;yn(v==="/"||((R=P.pathname)==null?void 0:R.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${P.pathname}" was given in the \`location\` prop.`),m=P}else m=g;let M=m.pathname||"/",E=M;if(v!=="/"){let P=v.replace(/^\//,"").split("/");E="/"+M.replace(/^\//,"").split("/").slice(P.length).join("/")}let y=Gx(s,{pathname:E});or(x||y!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),or(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=MS(y&&y.map(P=>Object.assign({},P,{params:Object.assign({},h,P.params),pathname:Rr([v,o.encodeLocation?o.encodeLocation(P.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?v:Rr([v,o.encodeLocation?o.encodeLocation(P.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:P.pathnameBase])})),c,t,i,a);return e&&S?G.createElement(Qo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},S):S}function vS(){let s=AS(),e=sS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",s),c=G.createElement(G.Fragment,null,G.createElement("p",null,"💿 Hey developer 👋"),G.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",G.createElement("code",{style:o},"ErrorBoundary")," or"," ",G.createElement("code",{style:o},"errorElement")," prop on your route.")),G.createElement(G.Fragment,null,G.createElement("h2",null,"Unexpected Application Error!"),G.createElement("h3",{style:{fontStyle:"italic"}},e),t?G.createElement("pre",{style:a},t):null,c)}var _S=G.createElement(vS,null),nv=class extends G.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const t=pS(s.digest);t&&(s=t)}let e=s!==void 0?G.createElement(Dr.Provider,{value:this.props.routeContext},G.createElement(Yh.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?G.createElement(yS,{error:s},e):e}};nv.contextType=lS;var Jd=new WeakMap;function yS({children:s,error:e}){let{basename:t}=G.useContext(Li);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=hS(e.digest);if(i){let a=Jd.get(e);if(a)throw a;let o=qx(i.location,t);if(Yx&&!Jd.get(e))if(o.isExternal||i.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:i.replace}));throw Jd.set(e,c),c}return G.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return s}function SS({routeContext:s,match:e,children:t}){let i=G.useContext(za);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),G.createElement(Dr.Provider,{value:s},t)}function MS(s,e=[],t=null,i=null,a=null){if(s==null){if(!t)return null;if(t.errors)s=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)s=t.matches;else return null}let o=s,c=t==null?void 0:t.errors;if(c!=null){let v=o.findIndex(x=>x.route.id&&(c==null?void 0:c[x.route.id])!==void 0);yn(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,v+1))}let d=!1,h=-1;if(t)for(let v=0;v<o.length;v++){let x=o[v];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(h=v),x.route.id){let{loaderData:g,errors:m}=t,M=x.route.loader&&!g.hasOwnProperty(x.route.id)&&(!m||m[x.route.id]===void 0);if(x.route.lazy||M){d=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}let f=t&&i?(v,x)=>{var g,m;i(v,{location:t.location,params:((m=(g=t.matches)==null?void 0:g[0])==null?void 0:m.params)??{},unstable_pattern:aS(t.matches),errorInfo:x})}:void 0;return o.reduceRight((v,x,g)=>{let m,M=!1,E=null,y=null;t&&(m=c&&x.route.id?c[x.route.id]:void 0,E=x.route.errorElement||_S,d&&(h<0&&g===0?(iv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,y=null):h===g&&(M=!0,y=x.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,g+1)),R=()=>{let P;return m?P=E:M?P=y:x.route.Component?P=G.createElement(x.route.Component,null):x.route.element?P=x.route.element:P=v,G.createElement(SS,{match:x,routeContext:{outlet:v,matches:S,isDataRoute:t!=null},children:P})};return t&&(x.route.ErrorBoundary||x.route.errorElement||g===0)?G.createElement(nv,{location:t.location,revalidation:t.revalidation,component:E,error:m,children:R(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:f}):R()},null)}function qh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bS(s){let e=G.useContext(za);return yn(e,qh(s)),e}function ES(s){let e=G.useContext(uu);return yn(e,qh(s)),e}function wS(s){let e=G.useContext(Dr);return yn(e,qh(s)),e}function Kh(s){let e=wS(s),t=e.matches[e.matches.length-1];return yn(t.route.id,`${s} can only be used on routes that contain a unique "id"`),t.route.id}function TS(){return Kh("useRouteId")}function AS(){var i;let s=G.useContext(Yh),e=ES("useRouteError"),t=Kh("useRouteError");return s!==void 0?s:(i=e.errors)==null?void 0:i[t]}function RS(){let{router:s}=bS("useNavigate"),e=Kh("useNavigate"),t=G.useRef(!1);return ev(()=>{t.current=!0}),G.useCallback(async(a,o={})=>{or(t.current,Qx),t.current&&(typeof a=="number"?await s.navigate(a):await s.navigate(a,{fromRouteId:e,...o}))},[s,e])}var s0={};function iv(s,e,t){!e&&!s0[s]&&(s0[s]=!0,or(!1,t))}G.memo(CS);function CS({routes:s,future:e,state:t,onError:i}){return tv(s,void 0,t,i,e)}function zo(s){yn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function PS({basename:s="/",children:e=null,location:t,navigationType:i="POP",navigator:a,static:o=!1,unstable_useTransitions:c}){yn(!el(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),h=G.useMemo(()=>({basename:d,navigator:a,static:o,unstable_useTransitions:c,future:{}}),[d,a,o,c]);typeof t=="string"&&(t=Ba(t));let{pathname:f="/",search:v="",hash:x="",state:g=null,key:m="default"}=t,M=G.useMemo(()=>{let E=Nr(f,d);return E==null?null:{location:{pathname:E,search:v,hash:x,state:g,key:m},navigationType:i}},[d,f,v,x,g,m,i]);return or(M!=null,`<Router basename="${d}"> is not able to match the URL "${f}${v}${x}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:G.createElement(Li.Provider,{value:h},G.createElement(Qo.Provider,{children:e,value:M}))}function NS({children:s,location:e}){return xS(qf(s),e)}function qf(s,e=[]){let t=[];return G.Children.forEach(s,(i,a)=>{if(!G.isValidElement(i))return;let o=[...e,a];if(i.type===G.Fragment){t.push.apply(t,qf(i.props.children,o));return}yn(i.type===zo,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),yn(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=qf(i.props.children,o)),t.push(c)}),t}var zc="get",Vc="application/x-www-form-urlencoded";function du(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function IS(s){return du(s)&&s.tagName.toLowerCase()==="button"}function LS(s){return du(s)&&s.tagName.toLowerCase()==="form"}function DS(s){return du(s)&&s.tagName.toLowerCase()==="input"}function US(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function FS(s,e){return s.button===0&&(!e||e==="_self")&&!US(s)}var oc=null;function OS(){if(oc===null)try{new FormData(document.createElement("form"),0),oc=!1}catch{oc=!0}return oc}var kS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qd(s){return s!=null&&!kS.has(s)?(or(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vc}"`),null):s}function BS(s,e){let t,i,a,o,c;if(LS(s)){let d=s.getAttribute("action");i=d?Nr(d,e):null,t=s.getAttribute("method")||zc,a=Qd(s.getAttribute("enctype"))||Vc,o=new FormData(s)}else if(IS(s)||DS(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=s.getAttribute("formaction")||d.getAttribute("action");if(i=h?Nr(h,e):null,t=s.getAttribute("formmethod")||d.getAttribute("method")||zc,a=Qd(s.getAttribute("formenctype"))||Qd(d.getAttribute("enctype"))||Vc,o=new FormData(d,s),!OS()){let{name:f,type:v,value:x}=s;if(v==="image"){let g=f?`${f}.`:"";o.append(`${g}x`,"0"),o.append(`${g}y`,"0")}else f&&o.append(f,x)}}else{if(du(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=zc,i=null,a=Vc,c=s}return o&&a==="text/plain"&&(c=o,o=void 0),{action:i,method:t.toLowerCase(),encType:a,formData:o,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Zh(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function zS(s,e,t,i){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${i}`:a.pathname=`${a.pathname}.${i}`:a.pathname==="/"?a.pathname=`_root.${i}`:e&&Nr(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function VS(s,e){if(s.id in e)return e[s.id];try{let t=await import(s.module);return e[s.id]=t,t}catch(t){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function HS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function GS(s,e,t){let i=await Promise.all(s.map(async a=>{let o=e.routes[a.route.id];if(o){let c=await VS(o,t);return c.links?c.links():[]}return[]}));return $S(i.flat(1).filter(HS).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function a0(s,e,t,i,a,o){let c=(h,f)=>t[f]?h.route.id!==t[f].route.id:!0,d=(h,f)=>{var v;return t[f].pathname!==h.pathname||((v=t[f].route.path)==null?void 0:v.endsWith("*"))&&t[f].params["*"]!==h.params["*"]};return o==="assets"?e.filter((h,f)=>c(h,f)||d(h,f)):o==="data"?e.filter((h,f)=>{var x;let v=i.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(c(h,f)||d(h,f))return!0;if(h.route.shouldRevalidate){let g=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=t[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function WS(s,e,{includeHydrateFallback:t}={}){return jS(s.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function jS(s){return[...new Set(s)]}function XS(s){let e={},t=Object.keys(s).sort();for(let i of t)e[i]=s[i];return e}function $S(s,e){let t=new Set;return new Set(e),s.reduce((i,a)=>{let o=JSON.stringify(XS(a));return t.has(o)||(t.add(o),i.push({key:o,link:a})),i},[])}function rv(){let s=G.useContext(za);return Zh(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function YS(){let s=G.useContext(uu);return Zh(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Jh=G.createContext(void 0);Jh.displayName="FrameworkContext";function sv(){let s=G.useContext(Jh);return Zh(s,"You must render this element inside a <HydratedRouter> element"),s}function qS(s,e){let t=G.useContext(Jh),[i,a]=G.useState(!1),[o,c]=G.useState(!1),{onFocus:d,onBlur:h,onMouseEnter:f,onMouseLeave:v,onTouchStart:x}=e,g=G.useRef(null);G.useEffect(()=>{if(s==="render"&&c(!0),s==="viewport"){let E=S=>{S.forEach(R=>{c(R.isIntersecting)})},y=new IntersectionObserver(E,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[s]),G.useEffect(()=>{if(i){let E=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(E)}}},[i]);let m=()=>{a(!0)},M=()=>{a(!1),c(!1)};return t?s!=="intent"?[o,g,{}]:[o,g,{onFocus:bo(d,m),onBlur:bo(h,M),onMouseEnter:bo(f,m),onMouseLeave:bo(v,M),onTouchStart:bo(x,m)}]:[!1,g,{}]}function bo(s,e){return t=>{s&&s(t),t.defaultPrevented||e(t)}}function KS({page:s,...e}){let{router:t}=rv(),i=G.useMemo(()=>Gx(t.routes,s,t.basename),[t.routes,s,t.basename]);return i?G.createElement(JS,{page:s,matches:i,...e}):null}function ZS(s){let{manifest:e,routeModules:t}=sv(),[i,a]=G.useState([]);return G.useEffect(()=>{let o=!1;return GS(s,e,t).then(c=>{o||a(c)}),()=>{o=!0}},[s,e,t]),i}function JS({page:s,matches:e,...t}){let i=Bs(),{future:a,manifest:o,routeModules:c}=sv(),{basename:d}=rv(),{loaderData:h,matches:f}=YS(),v=G.useMemo(()=>a0(s,e,f,o,i,"data"),[s,e,f,o,i]),x=G.useMemo(()=>a0(s,e,f,o,i,"assets"),[s,e,f,o,i]),g=G.useMemo(()=>{if(s===i.pathname+i.search+i.hash)return[];let E=new Set,y=!1;if(e.forEach(R=>{var L;let P=o.routes[R.route.id];!P||!P.hasLoader||(!v.some(k=>k.route.id===R.route.id)&&R.route.id in h&&((L=c[R.route.id])!=null&&L.shouldRevalidate)||P.hasClientLoader?y=!0:E.add(R.route.id))}),E.size===0)return[];let S=zS(s,d,a.unstable_trailingSlashAwareDataRequests,"data");return y&&E.size>0&&S.searchParams.set("_routes",e.filter(R=>E.has(R.route.id)).map(R=>R.route.id).join(",")),[S.pathname+S.search]},[d,a.unstable_trailingSlashAwareDataRequests,h,i,o,v,e,s,c]),m=G.useMemo(()=>WS(x,o),[x,o]),M=ZS(x);return G.createElement(G.Fragment,null,g.map(E=>G.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),m.map(E=>G.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),M.map(({key:E,link:y})=>G.createElement("link",{key:E,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function QS(...s){return e=>{s.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var eM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{eM&&(window.__reactRouterVersion="7.13.0")}catch{}function tM({basename:s,children:e,unstable_useTransitions:t,window:i}){let a=G.useRef();a.current==null&&(a.current=Uy({window:i,v5Compat:!0}));let o=a.current,[c,d]=G.useState({action:o.action,location:o.location}),h=G.useCallback(f=>{t===!1?d(f):G.startTransition(()=>d(f))},[t]);return G.useLayoutEffect(()=>o.listen(h),[o,h]),G.createElement(PS,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:o,unstable_useTransitions:t})}var av=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ov=G.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:a,reloadDocument:o,replace:c,state:d,target:h,to:f,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:g,...m},M){let{basename:E,unstable_useTransitions:y}=G.useContext(Li),S=typeof f=="string"&&av.test(f),R=qx(f,E);f=R.to;let P=mS(f,{relative:a}),[L,k,F]=qS(i,m),V=sM(f,{replace:c,state:d,target:h,preventScrollReset:v,relative:a,viewTransition:x,unstable_defaultShouldRevalidate:g,unstable_useTransitions:y});function T(z){e&&e(z),z.defaultPrevented||V(z)}let I=G.createElement("a",{...m,...F,href:R.absoluteURL||P,onClick:R.isExternal||o?e:T,ref:QS(M,k),target:h,"data-discover":!S&&t==="render"?"true":void 0});return L&&!S?G.createElement(G.Fragment,null,I,G.createElement(KS,{page:P})):I});ov.displayName="Link";var nM=G.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:a=!1,style:o,to:c,viewTransition:d,children:h,...f},v){let x=nl(c,{relative:f.relative}),g=Bs(),m=G.useContext(uu),{navigator:M,basename:E}=G.useContext(Li),y=m!=null&&uM(x)&&d===!0,S=M.encodeLocation?M.encodeLocation(x).pathname:x.pathname,R=g.pathname,P=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;t||(R=R.toLowerCase(),P=P?P.toLowerCase():null,S=S.toLowerCase()),P&&E&&(P=Nr(P,E)||P);const L=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let k=R===S||!a&&R.startsWith(S)&&R.charAt(L)==="/",F=P!=null&&(P===S||!a&&P.startsWith(S)&&P.charAt(S.length)==="/"),V={isActive:k,isPending:F,isTransitioning:y},T=k?e:void 0,I;typeof i=="function"?I=i(V):I=[i,k?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let z=typeof o=="function"?o(V):o;return G.createElement(ov,{...f,"aria-current":T,className:I,ref:v,style:z,to:c,viewTransition:d},typeof h=="function"?h(V):h)});nM.displayName="NavLink";var iM=G.forwardRef(({discover:s="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:a,state:o,method:c=zc,action:d,onSubmit:h,relative:f,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:g,...m},M)=>{let{unstable_useTransitions:E}=G.useContext(Li),y=lM(),S=cM(d,{relative:f}),R=c.toLowerCase()==="get"?"get":"post",P=typeof d=="string"&&av.test(d),L=k=>{if(h&&h(k),k.defaultPrevented)return;k.preventDefault();let F=k.nativeEvent.submitter,V=(F==null?void 0:F.getAttribute("formmethod"))||c,T=()=>y(F||k.currentTarget,{fetcherKey:e,method:V,navigate:t,replace:a,state:o,relative:f,preventScrollReset:v,viewTransition:x,unstable_defaultShouldRevalidate:g});E&&t!==!1?G.startTransition(()=>T()):T()};return G.createElement("form",{ref:M,method:R,action:S,onSubmit:i?h:L,...m,"data-discover":!P&&s==="render"?"true":void 0})});iM.displayName="Form";function rM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lv(s){let e=G.useContext(za);return yn(e,rM(s)),e}function sM(s,{target:e,replace:t,state:i,preventScrollReset:a,relative:o,viewTransition:c,unstable_defaultShouldRevalidate:d,unstable_useTransitions:h}={}){let f=tl(),v=Bs(),x=nl(s,{relative:o});return G.useCallback(g=>{if(FS(g,e)){g.preventDefault();let m=t!==void 0?t:Yo(v)===Yo(x),M=()=>f(s,{replace:m,state:i,preventScrollReset:a,relative:o,viewTransition:c,unstable_defaultShouldRevalidate:d});h?G.startTransition(()=>M()):M()}},[v,f,x,t,i,e,s,a,o,c,d,h])}var aM=0,oM=()=>`__${String(++aM)}__`;function lM(){let{router:s}=lv("useSubmit"),{basename:e}=G.useContext(Li),t=TS(),i=s.fetch,a=s.navigate;return G.useCallback(async(o,c={})=>{let{action:d,method:h,encType:f,formData:v,body:x}=BS(o,e);if(c.navigate===!1){let g=c.fetcherKey||oM();await i(g,t,c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:v,body:x,formMethod:c.method||h,formEncType:c.encType||f,flushSync:c.flushSync})}else await a(c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:v,body:x,formMethod:c.method||h,formEncType:c.encType||f,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[i,a,e,t])}function cM(s,{relative:e}={}){let{basename:t}=G.useContext(Li),i=G.useContext(Dr);yn(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),o={...nl(s||".",{relative:e})},c=Bs();if(s==null){o.search=c.search;let d=new URLSearchParams(o.search),h=d.getAll("index");if(h.some(v=>v==="")){d.delete("index"),h.filter(x=>x).forEach(x=>d.append("index",x));let v=d.toString();o.search=v?`?${v}`:""}}return(!s||s===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Rr([t,o.pathname])),Yo(o)}function uM(s,{relative:e}={}){let t=G.useContext(Zx);yn(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=lv("useViewTransitionState"),a=nl(s,{relative:e});if(!t.isTransitioning)return!1;let o=Nr(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Nr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return qc(a.pathname,c)!=null||qc(a.pathname,o)!=null}const dM="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function fM(s){const[e,t]=G.useState(!1),i=()=>{t(!0)},{src:a,alt:o,style:c,className:d,...h}=s;return e?b.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${d??""}`,style:c,children:b.jsx("div",{className:"flex items-center justify-center w-full h-full",children:b.jsx("img",{src:dM,alt:"Error loading image",...h,"data-original-url":a})})}):b.jsx("img",{src:a,alt:o,className:d,style:c,...h,onError:i})}const hM="/assets/iconaws-CrGCPrQX.png",jo={musicEnabled:!0,musicVolume:.35,vibrationEnabled:!0,aiHintsEnabled:!0,bossTauntsEnabled:!0,showPlanesDefault:!0,reduceMotion:!1},Qh="arwordle.settings.v1",Kf="arwordle:settings-change";function Kc(){try{const s=localStorage.getItem(Qh);if(!s)return{...jo};const e=JSON.parse(s);return{...jo,...e}}catch{return{...jo}}}function o0(s){try{localStorage.setItem(Qh,JSON.stringify(s)),window.dispatchEvent(new CustomEvent(Kf,{detail:s}))}catch{}}function cv(){const[s,e]=G.useState(()=>Kc());G.useEffect(()=>{const a=c=>{const d=c.detail;d&&e(d)};window.addEventListener(Kf,a);const o=c=>{c.key===Qh&&e(Kc())};return window.addEventListener("storage",o),()=>{window.removeEventListener(Kf,a),window.removeEventListener("storage",o)}},[]);const t=G.useCallback((a,o)=>{e(c=>{const d={...c,[a]:o};return o0(d),d})},[]),i=G.useCallback(()=>{o0({...jo}),e({...jo})},[]);return{settings:s,setSetting:t,resetSettings:i}}function pM(){return Kc()}function ef(s){try{if(!Kc().vibrationEnabled)return;navigator.vibrate&&navigator.vibrate(s)}catch{}}var mM=Hx();function ca({label:s,description:e,value:t,onChange:i,color:a="#10b981"}){return b.jsxs("div",{className:"flex items-center justify-between gap-3 py-2 border-b-2 border-[#8b5cf6]/20 last:border-b-0",children:[b.jsxs("div",{className:"flex-1 min-w-0",children:[b.jsx("p",{className:"text-[8px] text-white tracking-widest mb-1",children:s}),b.jsx("p",{className:"text-[6px] text-white/50 leading-[10px]",children:e})]}),b.jsx("button",{onClick:()=>i(!t),className:"flex-shrink-0 relative w-12 h-6 border-2 transition-colors",style:{backgroundColor:t?a:"#1a0a2e",borderColor:t?a:"#3a2a4e",boxShadow:t?`0 0 8px ${a}88`:"none"},"aria-pressed":t,children:b.jsx("div",{className:"absolute top-0.5 w-4 h-4 transition-all",style:{left:t?"24px":"2px",backgroundColor:t?"#0a0118":"#a78bfa"}})})]})}function gM({label:s,description:e,value:t,onChange:i,min:a=0,max:o=1,step:c=.05,format:d=f=>`${Math.round(f*100)}%`,color:h="#8b5cf6"}){return b.jsxs("div",{className:"py-2 border-b-2 border-[#8b5cf6]/20 last:border-b-0",children:[b.jsxs("div",{className:"flex items-center justify-between mb-1",children:[b.jsx("p",{className:"text-[8px] text-white tracking-widest",children:s}),b.jsx("span",{className:"text-[7px] tracking-widest",style:{color:h},children:d(t)})]}),b.jsx("p",{className:"text-[6px] text-white/50 leading-[10px] mb-2",children:e}),b.jsx("input",{type:"range",min:a,max:o,step:c,value:t,onChange:f=>i(parseFloat(f.target.value)),className:"w-full",style:{accentColor:h}})]})}function xM({open:s,settings:e,setSetting:t,resetSettings:i,onClose:a}){if(G.useEffect(()=>{if(!s)return;const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=c}},[s]),!s)return null;const o=c=>{c.target===c.currentTarget&&a()};return mM.createPortal(b.jsxs("div",{className:"fixed inset-0 z-[9999] flex items-end justify-center px-4 pb-0 font-['Press_Start_2P',_monospace]",style:{backgroundColor:"rgba(10,1,24,0.85)",animation:"backdropFadeIn 0.25s ease-out"},onMouseDown:o,children:[b.jsx("style",{children:`
        @keyframes backdropFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modalSlideUp   { from { transform: translateY(110%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes headerSlideDown { from { transform: translateY(-10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}),b.jsxs("div",{className:"w-full max-w-md bg-[#0a0118] border-4 border-[#facc15] relative overflow-y-auto",style:{maxHeight:"88vh",animation:"modalSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},onClick:c=>c.stopPropagation(),children:[b.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsxs("div",{className:"bg-[#1a0a2e] border-b-4 border-[#facc15] px-5 py-4 flex items-center justify-between",style:{animation:"headerSlideDown 0.3s 0.15s ease-out both"},children:[b.jsx("p",{className:"text-[10px] text-[#facc15] tracking-widest",children:"⚙ SETTINGS"}),b.jsx("button",{onClick:a,className:"text-[#a78bfa] hover:text-white text-[9px] transition-colors","aria-label":"Close settings",children:"✕"})]}),b.jsxs("div",{className:"px-5 py-3 space-y-3",children:[b.jsxs("section",{children:[b.jsx("p",{className:"text-[7px] text-[#a78bfa] tracking-widest mb-1",children:"🎵 AUDIO"}),b.jsx(ca,{label:"MUSIC",description:"Loop the background soundtrack.",value:e.musicEnabled,onChange:c=>t("musicEnabled",c),color:"#10b981"}),b.jsx(gM,{label:"MUSIC VOLUME",description:"Loud or whisper-quiet, your call.",value:e.musicVolume,onChange:c=>t("musicVolume",c),color:"#10b981"})]}),b.jsxs("section",{children:[b.jsx("p",{className:"text-[7px] text-[#a78bfa] tracking-widest mb-1",children:"📳 HAPTICS"}),b.jsx(ca,{label:"VIBRATION",description:"Buzz on damage and impact (mobile only).",value:e.vibrationEnabled,onChange:c=>t("vibrationEnabled",c),color:"#ec4899"})]}),b.jsxs("section",{children:[b.jsx("p",{className:"text-[7px] text-[#a78bfa] tracking-widest mb-1",children:"🤖 AI"}),b.jsx(ca,{label:"AI HINTS",description:"Use the Warden's AI for cryptic Wordle hints. Off uses preset hints.",value:e.aiHintsEnabled,onChange:c=>t("aiHintsEnabled",c),color:"#60a5fa"}),b.jsx(ca,{label:"BOSS TAUNTS",description:"Live AI-generated taunts from the Rift Overlord. Off uses preset lines.",value:e.bossTauntsEnabled,onChange:c=>t("bossTauntsEnabled",c),color:"#60a5fa"})]}),b.jsxs("section",{children:[b.jsx("p",{className:"text-[7px] text-[#a78bfa] tracking-widest mb-1",children:"👁 AR"}),b.jsx(ca,{label:"SHOW PLANES",description:"Render detected surfaces by default. Toggle anytime in pause menu.",value:e.showPlanesDefault,onChange:c=>t("showPlanesDefault",c),color:"#a78bfa"}),b.jsx(ca,{label:"REDUCE MOTION",description:"Tone down screen shake and flashing animations.",value:e.reduceMotion,onChange:c=>t("reduceMotion",c),color:"#a78bfa"})]})]}),b.jsxs("div",{className:"px-5 pb-5 pt-2 space-y-2 border-t-2 border-[#facc15]/30",children:[b.jsx("button",{onClick:()=>{confirm("Reset all settings to defaults?")&&i()},className:"w-full py-2.5 text-[8px] border-2 border-[#ef4444]/60 text-[#ef4444] hover:bg-[#ef4444]/10 transition-colors tracking-widest",children:"RESET TO DEFAULTS"}),b.jsxs("button",{onClick:a,className:"w-full bg-[#facc15] border-4 border-[#ec4899] text-[#0a0118] py-3 px-6 text-[10px] relative hover:opacity-90 transition-opacity active:translate-y-1",children:[b.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"DONE"]})]})]})]}),document.body)}function xn(s){const e=Math.sin(s+1)*1e4;return e-Math.floor(e)}const vM=["W","O","R","D","L","E","G","R","U"],_M=[{num:"1",title:"SCAN A SURFACE",color:"#10b981",icon:"◉",body:"Point your camera at a flat floor or table. The Warden auto-locks an origin after a few seconds even if your device cannot detect planes."},{num:"2",title:"TAP RED ROCKS ONLY",color:"#ef4444",icon:"◬",body:"Asteroids charge before they strike — they glow RED. Tap red rocks to smash them. Drifting (still) rocks are invulnerable; tapping them just kicks up dust."},{num:"3",title:"COLLECT LETTERS",color:"#facc15",icon:"✦",body:"Each smashed rock drops a letter onto your keyboard inventory. Numbers below each key show how many copies you carry."},{num:"4",title:"BEAT THE 60s TIMER",color:"#60a5fa",icon:"◷",body:"Each wave runs for 60 seconds. When the clock hits zero a Wordle puzzle slides up — solve it to advance. Asteroids freeze instantly when the timer ends."},{num:"5",title:"SOLVE THE SEAL",color:"#8b5cf6",icon:"▦",body:"Type a 5-letter word using your collected letters. You get 6 attempts.",wordleDemo:{word:"BLAZE",colors:["green","gray","yellow","gray","gray"]}},{num:"6",title:"DEFEAT THE OVERLORD",color:"#ec4899",icon:"★",body:"Every 10th wave is a boss fight. The Rift Overlord attacks every 8 seconds — break all his seals before HP runs out. The final seal is RIFTS.",bullets:[{label:"WAVE TIMER",value:"60s",color:"#10b981"},{label:"BOSS AT",value:"WAVE 10",color:"#facc15"},{label:"FINAL",value:"RIFTS",color:"#ec4899"}]}];function yM(){const s=tl(),[e,t]=G.useState(!1),[i,a]=G.useState(!1),{settings:o,setSetting:c,resetSettings:d}=cv(),h=G.useMemo(()=>Array.from({length:30},(m,M)=>({id:M,x:xn(M*7.31)*100,y:xn(M*3.71)*100,size:xn(M*5.13)>.8?3:2,delay:`${xn(M*2.91)*4}s`,duration:`${1.5+xn(M*1.33)*2.5}s`})),[]),f=G.useMemo(()=>vM.map((m,M)=>({id:M,char:m,x:xn(M*11.71)*82+5,y:xn(M*8.31)*75+5,color:["#10b981","#facc15","#a78bfa"][M%3],border:["#10b981","#facc15","#8b5cf6"][M%3],delay:`${xn(M*6.71)*4}s`,duration:`${5+xn(M*9.11)*4}s`,drift:`${(xn(M*4.11)-.5)*40}px`})),[]),v=G.useMemo(()=>Array.from({length:7},(m,M)=>({id:M,x:xn(M*13.11)*88+3,size:Math.floor(4+xn(M*5.91)*6),delay:`${xn(M*7.71)*7}s`,duration:`${3+xn(M*2.31)*3}s`,xDrift:`${(xn(M*3.71)-.5)*50}px`})),[]),x=G.useMemo(()=>Array.from({length:14},(m,M)=>({id:M,x:xn(M*17.31)*85+5,color:xn(M*6.31)>.5?"#f97316":"#facc15",size:Math.floor(2+xn(M*3.91)*3),delay:`${xn(M*4.91)*6}s`,duration:`${2+xn(M*8.11)*2.5}s`})),[]),g=G.useMemo(()=>Array.from({length:8},(m,M)=>({id:M,x:xn(M*9.31)*80+10,y:xn(M*6.11)*70+15,delay:`${xn(M*3.51)*6}s`,duration:`${.4+xn(M*7.11)*.5}s`})),[]);return b.jsxs("div",{className:"min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col items-center justify-between px-6 pt-6 pb-4 font-['Press_Start_2P',_monospace] relative overflow-hidden",children:[b.jsx("style",{children:`
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
        @keyframes ringRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes tileFlip {
          0%   { transform: rotateX(0); background-color: #1a0a2e; color: #facc15; border-color: #8b5cf6; }
          50%  { transform: rotateX(90deg); }
          51%  { background-color: var(--reveal-bg); color: var(--reveal-fg); border-color: var(--reveal-bg); }
          100% { transform: rotateX(0); background-color: var(--reveal-bg); color: var(--reveal-fg); border-color: var(--reveal-bg); }
        }
        @keyframes titleEnter {
          from { transform: translateY(-12px); opacity: 0; letter-spacing: 0.4em; }
          to   { transform: translateY(0); opacity: 1; letter-spacing: normal; }
        }
        @keyframes ctaShimmer {
          0%, 100% { box-shadow: 0 0 0 0 rgba(236,72,153,0), 0 0 24px 0 rgba(139,92,246,0.45); }
          50%      { box-shadow: 0 0 0 12px rgba(236,72,153,0), 0 0 36px 4px rgba(139,92,246,0.7); }
        }
      `}),h.map(m=>b.jsx("div",{className:"absolute bg-white pointer-events-none",style:{left:`${m.x}%`,top:`${m.y}%`,width:`${m.size}px`,height:`${m.size}px`,animation:`twinkle ${m.duration} ${m.delay} ease-in-out infinite`,zIndex:1}},`star-${m.id}`)),f.map(m=>b.jsx("div",{className:"absolute flex items-center justify-center pointer-events-none select-none",style:{left:`${m.x}%`,top:`${m.y}%`,width:"22px",height:"22px",border:`2px solid ${m.border}`,backgroundColor:"#1a0a2e",color:m.color,fontSize:"8px",fontFamily:"'Press Start 2P', monospace",textShadow:`0 0 8px ${m.color}`,boxShadow:`0 0 6px ${m.border}55, inset 0 0 4px ${m.border}22`,"--drift":m.drift,animation:`letterFloat ${m.duration} ${m.delay} ease-in-out infinite`,zIndex:2},children:m.char},`letter-${m.id}`)),v.map(m=>b.jsx("div",{className:"absolute pointer-events-none",style:{left:`${m.x}%`,top:"-12px",width:`${m.size}px`,height:`${m.size}px`,backgroundColor:"#78716c",boxShadow:"1px 1px 0 #a8a29e, 0 0 4px #f97316","--x-drift":m.xDrift,animation:`meteorFall ${m.duration} ${m.delay} linear infinite`,zIndex:2}},`meteor-${m.id}`)),x.map(m=>b.jsx("div",{className:"absolute pointer-events-none",style:{left:`${m.x}%`,bottom:"8px",width:`${m.size}px`,height:`${m.size}px`,backgroundColor:m.color,boxShadow:`0 0 4px ${m.color}, 0 0 8px ${m.color}88`,animation:`emberRise ${m.duration} ${m.delay} ease-out infinite`,zIndex:2}},`ember-${m.id}`)),g.map(m=>b.jsx("div",{className:"absolute pointer-events-none",style:{left:`${m.x}%`,top:`${m.y}%`,width:"4px",height:"4px",backgroundColor:"#60a5fa",boxShadow:"0 0 6px #3b82f6, 0 0 14px #93c5fd, 2px -2px 0 #bfdbfe, -2px 2px 0 #bfdbfe",animation:`electricSpark ${m.duration} ${m.delay} ease-in-out infinite`,zIndex:2}},`spark-${m.id}`)),b.jsx("div",{className:"absolute inset-0 opacity-10 pointer-events-none",style:{backgroundImage:`
          linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent)
        `,backgroundSize:"20px 20px"}}),b.jsxs("div",{className:"flex flex-col items-center mt-4 relative z-10",children:[b.jsxs("div",{className:"relative w-36 h-36 mb-4 flex items-center justify-center",children:[b.jsx("div",{className:"absolute inset-[-8px] border-2 border-[#8b5cf6]/40 pointer-events-none",style:{animation:"ringRotate 20s linear infinite",borderRadius:"2px",clipPath:"polygon(0 0, 30% 0, 30% 8%, 70% 8%, 70% 0, 100% 0, 100% 30%, 92% 30%, 92% 70%, 100% 70%, 100% 100%, 70% 100%, 70% 92%, 30% 92%, 30% 100%, 0 100%, 0 70%, 8% 70%, 8% 30%, 0 30%)"}}),b.jsxs("div",{className:"w-32 h-32 relative border-4 border-[#8b5cf6] bg-[#1a0a2e] p-2",style:{imageRendering:"pixelated",animation:"iconGlow 4s ease-in-out infinite"},children:[b.jsx(fM,{src:hM,alt:"AR Wordle Smasher Icon",className:"w-full h-full object-contain",style:{imageRendering:"pixelated"}}),b.jsx("div",{className:"absolute -top-1 -left-1  w-2 h-2 bg-[#facc15] pointer-events-none"}),b.jsx("div",{className:"absolute -top-1 -right-1 w-2 h-2 bg-[#10b981] pointer-events-none"}),b.jsx("div",{className:"absolute -bottom-1 -left-1  w-2 h-2 bg-[#ec4899] pointer-events-none"}),b.jsx("div",{className:"absolute -bottom-1 -right-1 w-2 h-2 bg-[#60a5fa] pointer-events-none"})]})]}),b.jsxs("h1",{className:"text-center mb-1 leading-[1.4] tracking-wide",style:{animation:"titleEnter 0.6s 0.1s cubic-bezier(0.22, 1, 0.36, 1) both"},children:[b.jsxs("span",{className:"block text-[18px]",children:[b.jsx("span",{className:"text-[#10b981]",style:{textShadow:"0 0 8px #10b98188"},children:"AR"})," ",b.jsx("span",{className:"text-[#8b5cf6]",style:{textShadow:"0 0 8px #8b5cf688"},children:"WORDLE"})]}),b.jsx("span",{className:"block text-[22px] mt-1 text-[#ec4899]",style:{textShadow:"0 0 12px #ec489988, 0 0 24px #ec489944"},children:"SMASHER"})]}),b.jsxs("div",{className:"flex items-center gap-2 mb-3 mt-1",children:[b.jsx("span",{className:"block w-6 h-px bg-[#a78bfa]/40"}),b.jsx("p",{className:"text-[7px] text-[#a78bfa] tracking-widest",children:"THE WARDEN'S CODEX"}),b.jsx("span",{className:"block w-6 h-px bg-[#a78bfa]/40"})]}),(()=>{const m="BLAZE",M=[{bg:"#10b981",fg:"#0a0118"},{bg:"#374151",fg:"#9ca3af"},{bg:"#facc15",fg:"#0a0118"},{bg:"#374151",fg:"#9ca3af"},{bg:"#374151",fg:"#9ca3af"}];return b.jsx("div",{className:"flex gap-1.5 mb-2",children:m.split("").map((E,y)=>b.jsx("div",{className:"w-7 h-7 flex items-center justify-center border-2 text-[12px] font-bold",style:{backfaceVisibility:"hidden",animation:`tileFlip 0.6s ${.6+y*.18}s cubic-bezier(0.22, 1, 0.36, 1) both`,"--reveal-bg":M[y].bg,"--reveal-fg":M[y].fg,backgroundColor:"#1a0a2e",borderColor:"#8b5cf6",color:"#facc15",boxShadow:`0 0 6px ${M[y].bg}55`},children:E},y))})})()]}),b.jsxs("div",{className:"flex flex-col items-center gap-3 flex-grow justify-center relative z-10 w-full",children:[b.jsxs("div",{className:"text-center",children:[b.jsxs("p",{className:"text-[12px] tracking-widest text-white",children:[b.jsx("span",{className:"text-[#ef4444]",children:"SMASH"}),b.jsx("span",{className:"text-white/40 mx-1.5",children:"·"}),b.jsx("span",{className:"text-[#facc15]",children:"SOLVE"}),b.jsx("span",{className:"text-white/40 mx-1.5",children:"·"}),b.jsx("span",{className:"text-[#10b981]",children:"SURVIVE"})]}),b.jsxs("p",{className:"text-[7px] text-white/55 leading-[12px] mt-2 max-w-[280px] mx-auto",children:["Smash asteroids in AR, collect letters, break the seals before the"," ",b.jsx("span",{className:"text-[#ec4899]",children:"Rift Overlord"})," destroys you."]})]}),b.jsx("div",{className:"grid grid-cols-3 gap-2 w-full max-w-xs",children:[{label:"SEALS",value:"47",color:"#10b981"},{label:"BOSS AT",value:"W·10",color:"#facc15"},{label:"OVERLORD",value:"×1",color:"#ec4899"}].map(m=>b.jsxs("div",{className:"relative bg-[#1a0a2e] border-2 py-2 text-center",style:{borderColor:`${m.color}66`},children:[b.jsx("div",{className:"absolute top-0 left-0  w-1.5 h-1.5 pointer-events-none",style:{backgroundColor:m.color}}),b.jsx("div",{className:"absolute top-0 right-0 w-1.5 h-1.5 pointer-events-none",style:{backgroundColor:m.color}}),b.jsx("div",{className:"absolute bottom-0 left-0  w-1.5 h-1.5 pointer-events-none",style:{backgroundColor:m.color}}),b.jsx("div",{className:"absolute bottom-0 right-0 w-1.5 h-1.5 pointer-events-none",style:{backgroundColor:m.color}}),b.jsx("p",{className:"text-[11px] tracking-widest",style:{color:m.color,textShadow:`0 0 6px ${m.color}88`},children:m.value}),b.jsx("p",{className:"text-[6px] text-white/40 tracking-widest mt-0.5",children:m.label})]},m.label))})]}),b.jsxs("div",{className:"w-full space-y-3 mb-3 relative z-30",children:[b.jsxs("button",{type:"button",style:{touchAction:"manipulation",animation:"ctaShimmer 2.6s ease-in-out infinite"},onClick:()=>s("/mission"),className:"w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-4 px-6 text-[11px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1 tracking-widest",children:[b.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),b.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),b.jsxs("span",{className:"inline-flex items-center gap-2 justify-center",children:[b.jsx("span",{children:"▶"}),b.jsx("span",{children:"START MISSION"}),b.jsx("span",{children:"◀"})]})]}),b.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{label:"CODEX",icon:"✦",color:"#10b981",onClick:()=>s("/codex")},{label:"SETTINGS",icon:"⚙",color:"#facc15",onClick:()=>a(!0)},{label:"HOW TO",icon:"?",color:"#60a5fa",onClick:()=>t(!0)}].map(m=>b.jsxs("button",{type:"button",style:{touchAction:"manipulation"},onClick:m.onClick,className:"relative bg-[#1a0a2e] border-2 py-2.5 flex flex-col items-center justify-center gap-1 hover:bg-[#2a1a3e] transition-colors active:translate-y-0.5",children:[b.jsx("div",{className:"absolute top-0 left-0  w-1.5 h-1.5 pointer-events-none",style:{backgroundColor:m.color}}),b.jsx("div",{className:"absolute top-0 right-0 w-1.5 h-1.5 pointer-events-none",style:{backgroundColor:m.color}}),b.jsx("div",{className:"absolute bottom-0 left-0  w-1.5 h-1.5 pointer-events-none",style:{backgroundColor:m.color}}),b.jsx("div",{className:"absolute bottom-0 right-0 w-1.5 h-1.5 pointer-events-none",style:{backgroundColor:m.color}}),b.jsx("span",{className:"text-[16px] leading-none",style:{color:m.color,textShadow:`0 0 6px ${m.color}99`,filter:`drop-shadow(0 0 3px ${m.color}aa)`},children:m.icon}),b.jsx("span",{className:"text-[6px] text-white/70 tracking-widest",children:m.label}),b.jsx("div",{className:"absolute inset-0 border-2 pointer-events-none opacity-40",style:{borderColor:m.color}})]},m.label))})]}),b.jsxs("div",{className:"w-full flex items-center justify-between mb-2 relative z-30 text-[5px] tracking-widest",children:[b.jsx("span",{className:"text-white/30",children:"v1.0"}),b.jsx("span",{className:"text-[#a78bfa]/50",children:"// THE WARDEN'S WATCH"}),b.jsx("span",{className:"text-white/30",children:"WEBXR"})]}),e&&b.jsx("div",{className:"fixed inset-0 z-50 flex items-end justify-center px-4 pb-0",style:{backgroundColor:"rgba(10,1,24,0.85)",animation:"backdropFadeIn 0.25s ease-out"},onClick:()=>t(!1),children:b.jsxs("div",{className:"w-full max-w-md bg-[#0a0118] border-4 border-[#8b5cf6] relative overflow-y-auto",style:{maxHeight:"88vh",animation:"modalSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},onClick:m=>m.stopPropagation(),children:[b.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),b.jsxs("div",{className:"bg-[#1a0a2e] border-b-4 border-[#8b5cf6] px-5 py-4 flex items-center justify-between",style:{animation:"headerSlideDown 0.3s 0.15s ease-out both"},children:[b.jsxs("div",{children:[b.jsx("p",{className:"text-[10px] text-[#8b5cf6] tracking-widest",children:"HOW TO PLAY"}),b.jsx("p",{className:"text-[6px] text-white/40 tracking-widest mt-1",children:"FIELD MANUAL · v1"})]}),b.jsx("button",{onClick:()=>t(!1),className:"w-7 h-7 flex items-center justify-center border-2 border-[#a78bfa] text-[#a78bfa] hover:text-white hover:border-white text-[9px] transition-colors","aria-label":"Close",children:"✕"})]}),b.jsx("div",{className:"px-4 py-4 space-y-4",children:_M.map((m,M)=>b.jsxs("div",{className:"relative bg-[#0d0220] border-2 px-3 py-3",style:{borderColor:`${m.color}66`,animation:`stepFadeIn 0.3s ${.2+M*.07}s ease-out both`,boxShadow:`inset 0 0 12px ${m.color}1a`},children:[b.jsx("div",{className:"absolute top-0 left-0  w-1.5 h-1.5",style:{backgroundColor:m.color}}),b.jsx("div",{className:"absolute top-0 right-0 w-1.5 h-1.5",style:{backgroundColor:m.color}}),b.jsx("div",{className:"absolute bottom-0 left-0  w-1.5 h-1.5",style:{backgroundColor:m.color}}),b.jsx("div",{className:"absolute bottom-0 right-0 w-1.5 h-1.5",style:{backgroundColor:m.color}}),b.jsxs("div",{className:"flex gap-3",children:[b.jsxs("div",{className:"flex flex-col items-center gap-1 flex-shrink-0",children:[b.jsx("div",{className:"w-9 h-9 flex items-center justify-center border-2 bg-[#1a0a2e] text-[14px]",style:{borderColor:m.color,color:m.color,textShadow:`0 0 6px ${m.color}`,boxShadow:`0 0 8px ${m.color}55, inset 0 0 4px ${m.color}33`},children:m.icon}),b.jsxs("span",{className:"text-[6px] tracking-widest",style:{color:`${m.color}cc`},children:["STEP ",m.num]})]}),b.jsxs("div",{className:"flex-1 min-w-0 pt-0.5",children:[b.jsx("p",{className:"text-[8px] tracking-widest mb-1.5",style:{color:m.color},children:m.title}),m.body&&b.jsx("p",{className:"text-[7px] text-white/75 leading-[14px]",children:m.body}),m.wordleDemo&&(()=>{const E=S=>S==="green"?"#10b981":S==="yellow"?"#facc15":"#374151",y=S=>S==="gray"?"#9ca3af":"#0a0118";return b.jsxs("div",{className:"mt-3 space-y-2",children:[b.jsx("div",{className:"flex gap-1 justify-center",children:m.wordleDemo.word.split("").map((S,R)=>{const P=m.wordleDemo.colors[R];return b.jsx("div",{className:"w-6 h-6 flex items-center justify-center border-2",style:{backgroundColor:E(P),borderColor:E(P),color:y(P),fontSize:"10px",fontWeight:"bold",boxShadow:`0 0 4px ${E(P)}88`},children:S},R)})}),b.jsx("div",{className:"space-y-1 pt-1 border-t border-[#8b5cf6]/20",children:[["#10b981","GREEN","right letter, right slot"],["#facc15","YELLOW","right letter, wrong slot"],["#374151","GRAY","letter not in word"]].map(([S,R,P])=>b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx("div",{className:"w-2.5 h-2.5 flex-shrink-0",style:{backgroundColor:S,boxShadow:`0 0 3px ${S}`}}),b.jsx("span",{className:"text-[6px] tracking-widest",style:{color:S},children:R}),b.jsx("span",{className:"text-[6px] text-white/50 leading-[10px]",children:P})]},R))})]})})(),m.bullets&&b.jsx("div",{className:"mt-3 grid grid-cols-3 gap-1.5",children:m.bullets.map(E=>b.jsxs("div",{className:"text-center border border-white/10 bg-[#0a0118]/50 py-1.5",children:[b.jsx("p",{className:"text-[5px] text-white/40 tracking-widest",children:E.label}),b.jsx("p",{className:"text-[7px] mt-0.5 tracking-widest",style:{color:E.color??m.color},children:E.value})]},E.label))})]})]})]},m.num))}),b.jsx("div",{className:"px-5 pb-5 pt-1",children:b.jsxs("button",{type:"button",style:{touchAction:"manipulation"},onClick:()=>t(!1),className:"w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-3 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1 tracking-widest",children:[b.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),b.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),"> GOT IT <"]})}),b.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118] pointer-events-none"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118] pointer-events-none"})]})}),b.jsx(xM,{open:i,settings:o,setSetting:c,resetSettings:d,onClose:()=>a(!1)})]})}function Eo(s){const e=Math.sin(s+1)*1e4;return e-Math.floor(e)}const Qi=[{label:"CAMERA MODULE",critical:!0,run:async()=>{(await navigator.mediaDevices.getUserMedia({video:!0})).getTracks().forEach(e=>e.stop())}},{label:"AR PLANE DETECT",critical:!0,run:async()=>{if(!("xr"in navigator))throw new Error("WebXR not supported");if(!await navigator.xr.isSessionSupported("immersive-ar"))throw new Error("AR not supported")}},{label:"CODEX LINK",critical:!1,run:async()=>{if(!navigator.onLine)throw new Error("No network")}},{label:"ENEMY SCANNER",critical:!1,run:async()=>{if(!("DeviceOrientationEvent"in window))throw new Error("No motion sensor");await new Promise(s=>setTimeout(s,500))}}];function SM(){const s=tl(),[e,t]=G.useState(Qi.map(()=>"idle")),[i,a]=G.useState(!1),o=e.filter(m=>m==="ok").length,c=e.filter(m=>m==="checking").length,d=Qi.length,h=Qi.some((m,M)=>m.critical&&e[M]==="fail"),f=i&&!h,v=i&&o===d;G.useEffect(()=>{let m=!1;return(async()=>{for(let E=0;E<Qi.length;E++){if(m)return;t(y=>{const S=[...y];return S[E]="checking",S});try{await Qi[E].run(),m||t(y=>{const S=[...y];return S[E]="ok",S})}catch{m||t(y=>{const S=[...y];return S[E]="fail",S})}}m||a(!0)})(),()=>{m=!0}},[]);const x=()=>{t(Qi.map(()=>"idle")),a(!1),setTimeout(async()=>{for(let m=0;m<Qi.length;m++){t(M=>{const E=[...M];return E[m]="checking",E});try{await Qi[m].run(),t(M=>{const E=[...M];return E[m]="ok",E})}catch{t(M=>{const E=[...M];return E[m]="fail",E})}}a(!0)},100)},g=G.useMemo(()=>Array.from({length:22},(m,M)=>({id:M,x:Eo(M*6.17)*100,y:Eo(M*4.23)*100,size:Eo(M*2.71)>.8?3:2,delay:`${Eo(M*3.91)*4}s`,duration:`${1.5+Eo(M*1.17)*2}s`})),[]);return b.jsxs("div",{className:"min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col px-6 py-8 font-['Press_Start_2P',_monospace] relative overflow-hidden",children:[b.jsx("style",{children:`
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
      `}),b.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
          linear-gradient(0deg, transparent 24%, rgba(139,92,246,.3) 25%, rgba(139,92,246,.3) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.3) 75%, rgba(139,92,246,.3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139,92,246,.3) 25%, rgba(139,92,246,.3) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.3) 75%, rgba(139,92,246,.3) 76%, transparent 77%, transparent)
        `,backgroundSize:"20px 20px"}}),g.map(m=>b.jsx("div",{className:"absolute bg-white pointer-events-none",style:{left:`${m.x}%`,top:`${m.y}%`,width:`${m.size}px`,height:`${m.size}px`,animation:`twinkle ${m.duration} ${m.delay} ease-in-out infinite`,zIndex:1}},`star-${m.id}`)),b.jsxs("div",{className:"flex items-center justify-between mb-3 relative z-10",children:[b.jsx("button",{onClick:()=>s("/"),className:"text-[8px] text-[#a78bfa] hover:text-white transition-colors px-2 py-1 -ml-2",children:"← BACK"}),(()=>{const m=i?h?"#ef4444":v?"#10b981":"#f97316":"#facc15",M=i?h?"CRITICAL FAIL":v?"ALL SYSTEMS GO":`READY · ${o}/${d}`:`CHECKING ${o}/${d}`;return b.jsxs("div",{className:"text-[7px] border-2 px-2 py-1 relative tracking-widest",style:{color:m,borderColor:m,animation:i?"none":"statusPillGlow 1.2s ease-in-out infinite"},children:[b.jsx("div",{className:"absolute top-0 left-0  w-1 h-1 bg-[#0a0118]"}),b.jsx("div",{className:"absolute top-0 right-0 w-1 h-1 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 left-0  w-1 h-1 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-1 h-1 bg-[#0a0118]"}),M]})})()]}),b.jsxs("div",{className:"text-center mb-4 relative z-10",children:[b.jsx("h2",{className:"text-[12px] text-[#8b5cf6] tracking-widest mb-1",style:{textShadow:"0 0 8px #8b5cf6aa"},children:"MISSION BRIEF"}),b.jsx("p",{className:"text-[6px] text-white/40 tracking-widest",children:"PREPARE FOR DEPLOYMENT"})]}),b.jsx("div",{className:"flex flex-col items-center mb-4 relative z-10",children:b.jsxs("div",{className:"relative w-36 h-36",style:{filter:i&&!h?"drop-shadow(0 0 14px #10b98155)":"drop-shadow(0 0 8px #facc1544)"},children:[b.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/20"}),b.jsx("div",{className:"absolute inset-[18%] rounded-full border border-[#10b981]/30"}),b.jsx("div",{className:"absolute inset-[36%] rounded-full border border-[#10b981]/40"}),b.jsx("div",{className:"absolute inset-[54%] rounded-full border-2 border-[#10b981]/70"}),b.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/50",style:{animation:"radarPing 2s 0s ease-out infinite"}}),b.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/30",style:{animation:"radarPing 2s 0.9s ease-out infinite"}}),b.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-full",style:{animation:"radarSweep 3s linear infinite"},children:[b.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"conic-gradient(rgba(16,185,129,0) 0deg, rgba(16,185,129,0.18) 60deg, rgba(16,185,129,0) 90deg, transparent 360deg)"}}),b.jsx("div",{className:"absolute top-1/2 origin-left",style:{left:"50%",width:"50%",height:"1px",background:"linear-gradient(to right, rgba(16,185,129,0.95), rgba(16,185,129,0.05))",transform:"translateY(-50%)"}})]}),b.jsx("div",{className:"absolute top-1/2 left-0 right-0 h-px bg-[#10b981]/15"}),b.jsx("div",{className:"absolute left-1/2 top-0 bottom-0 w-px bg-[#10b981]/15"}),b.jsx("div",{className:"absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-[#10b981]",style:{boxShadow:"0 0 8px #10b981"}}),f&&b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#ec4899]",style:{top:"24%",left:"61%",boxShadow:"0 0 6px #ec4899",animation:"blipBlink 1.1s ease-in-out infinite"}}),b.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#facc15]",style:{top:"66%",left:"27%",boxShadow:"0 0 5px #facc15",animation:"blipBlink 0.9s 0.35s ease-in-out infinite"}}),b.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#f97316]",style:{top:"47%",left:"75%",boxShadow:"0 0 5px #f97316",animation:"blipBlink 1.3s 0.7s ease-in-out infinite"}}),b.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#a78bfa]",style:{top:"78%",left:"60%",boxShadow:"0 0 5px #a78bfa",animation:"blipBlink 1.0s 1.1s ease-in-out infinite"}})]})]})}),b.jsxs("div",{className:"bg-[#1a0a2e] border-4 border-[#8b5cf6] p-3 mb-3 relative z-10",children:[b.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsxs("div",{className:"flex items-center justify-between mb-2.5",children:[b.jsx("p",{className:"text-[7px] text-[#a78bfa] tracking-widest",children:"SYSTEM CHECK"}),b.jsx("div",{className:"flex gap-1",children:Qi.map((m,M)=>{const E=e[M],y=E==="ok"?"#10b981":E==="fail"?"#ef4444":E==="checking"?"#facc15":"#1f2937";return b.jsx("div",{className:"w-2 h-2 transition-colors duration-200",style:{backgroundColor:y,boxShadow:E!=="idle"?`0 0 4px ${y}`:"none"}},M)})})]}),b.jsx("div",{className:"grid grid-cols-2 gap-x-3 gap-y-2",children:Qi.map((m,M)=>{const E=e[M],y=E==="ok"?"#10b981":E==="fail"?"#ef4444":E==="checking"?"#facc15":"#1f2937",S=E==="ok"?"#10b981":E==="fail"?"#ef4444":E==="checking"?"#facc15":"#374151",R=E==="fail"?"failShake 0.4s ease-out, slideIn 0.25s ease-out":E==="ok"?"slideIn 0.25s ease-out":void 0;return b.jsxs("div",{className:"flex items-center gap-2 min-w-0",style:R?{animation:R}:void 0,children:[b.jsxs("div",{className:"w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200",style:{borderColor:y,backgroundColor:E==="ok"?"#10b981":E==="fail"?"#ef4444":"transparent"},children:[E==="ok"&&b.jsx("span",{className:"text-[#0a0118] leading-none",style:{fontSize:"8px",animation:"checkPop 0.25s ease-out"},children:"✓"}),E==="fail"&&b.jsx("span",{className:"text-[#0a0118] leading-none",style:{fontSize:"8px",animation:"checkPop 0.25s ease-out"},children:"✕"}),E==="checking"&&b.jsx("span",{className:"text-[#facc15] leading-none",style:{fontSize:"6px",animation:"blinkAnim 0.5s ease-in-out infinite"},children:"■"})]}),b.jsx("span",{className:"text-[7px] tracking-wide truncate transition-colors duration-200",style:{color:S},title:m.label,children:m.label}),!m.critical&&E==="fail"&&b.jsx("span",{className:"text-[5px] text-[#facc1599] ml-auto",title:"Optional check",children:"OPT"})]},M)})})]}),b.jsxs("div",{className:"bg-[#1a0a2e] border-4 border-[#ec4899] p-3 mb-4 relative z-10",children:[b.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("p",{className:"text-[7px] text-[#a78bfa] mb-2 tracking-widest",children:"▸ OBJECTIVE"}),b.jsxs("p",{className:"text-[7px] text-white/85 leading-[13px] mb-2.5",children:["Smash ",b.jsx("span",{className:"text-[#f97316]",children:"red asteroids"}),", collect letters, solve ",b.jsx("span",{className:"text-[#facc15]",children:"Wordle seals"})," to advance."]}),b.jsxs("div",{className:"flex items-center justify-between gap-2 text-[6px] tracking-widest pt-2 border-t-2 border-[#ec4899]/30",children:[b.jsxs("div",{className:"flex flex-col items-center",children:[b.jsx("span",{className:"text-white/40",children:"WAVE TIMER"}),b.jsx("span",{className:"text-[#10b981] mt-1",children:"60s"})]}),b.jsxs("div",{className:"flex flex-col items-center",children:[b.jsx("span",{className:"text-white/40",children:"BOSS AT"}),b.jsx("span",{className:"text-[#facc15] mt-1",children:"WAVE 10"})]}),b.jsxs("div",{className:"flex flex-col items-center",children:[b.jsx("span",{className:"text-white/40",children:"FINAL SEAL"}),b.jsx("span",{className:"text-[#ec4899] mt-1",children:"RIFTS"})]})]})]}),h?b.jsxs("div",{className:"space-y-2 relative z-10",children:[b.jsx("p",{className:"text-[6px] text-[#ef4444] tracking-widest text-center",children:"CAMERA OR AR UNAVAILABLE · GRANT PERMISSIONS THEN RETRY"}),b.jsxs("button",{onClick:x,className:"w-full py-4 px-6 text-[10px] border-4 border-[#ef4444] bg-[#1a0a2e] text-[#ef4444] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1",children:[b.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"↻ RETRY CHECKS"]})]}):b.jsxs("button",{disabled:!f,onClick:()=>f&&s("/ar"),className:"w-full py-4 px-6 text-[10px] border-4 relative transition-all duration-300 z-10",style:{backgroundColor:f?"#8b5cf6":"#1a0a2e",borderColor:f?"#ec4899":"#1f2937",color:f?"#ffffff":"#374151",cursor:f?"pointer":"not-allowed",animation:f?"engageReadyPulse 2s ease-in-out infinite":"none"},children:[b.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),i?f?b.jsx(b.Fragment,{children:"> ENGAGE MISSION <"}):"BLOCKED":b.jsxs("span",{style:{animation:"blinkAnim 1.2s ease-in-out infinite"},children:["RUNNING DIAGNOSTICS · ",c?"CHECKING":`${o}/${d}`]})]})]})}const MM="modulepreload",bM=function(s){return"/"+s},l0={},EM=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){let c=function(f){return Promise.all(f.map(v=>Promise.resolve(v).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=c(t.map(f=>{if(f=bM(f),f in l0)return;l0[f]=!0;const v=f.endsWith(".css"),x=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${x}`))return;const g=document.createElement("link");if(g.rel=v?"stylesheet":MM,v||(g.as="script"),g.crossOrigin="",g.href=f,h&&g.setAttribute("nonce",h),document.head.appendChild(g),v)return new Promise((m,M)=>{g.addEventListener("load",m),g.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return a.then(c=>{for(const d of c||[])d.status==="rejected"&&o(d.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ep="184",wM=0,c0=1,TM=2,Hc=1,AM=2,Vo=3,ds=0,hi=1,ir=2,Cr=0,Ia=1,u0=2,d0=3,f0=4,RM=5,Ls=100,CM=101,PM=102,NM=103,IM=104,LM=200,DM=201,UM=202,FM=203,Zf=204,Jf=205,OM=206,kM=207,BM=208,zM=209,VM=210,HM=211,GM=212,WM=213,jM=214,Qf=0,eh=1,th=2,Da=3,nh=4,ih=5,rh=6,sh=7,uv=0,XM=1,$M=2,sr=0,dv=1,fv=2,hv=3,tp=4,pv=5,mv=6,gv=7,h0="attached",YM="detached",xv=300,Os=301,Ua=302,tf=303,nf=304,fu=306,ah=1e3,Tr=1001,oh=1002,Gn=1003,qM=1004,lc=1005,Zn=1006,rf=1007,Us=1008,Mi=1009,vv=1010,_v=1011,qo=1012,np=1013,lr=1014,Ni=1015,Ir=1016,ip=1017,rp=1018,Ko=1020,yv=35902,Sv=35899,Mv=1021,bv=1022,Ii=1023,Lr=1026,Fs=1027,sp=1028,ap=1029,ks=1030,op=1031,lp=1033,Gc=33776,Wc=33777,jc=33778,Xc=33779,lh=35840,ch=35841,uh=35842,dh=35843,fh=36196,hh=37492,ph=37496,mh=37488,gh=37489,Zc=37490,xh=37491,vh=37808,_h=37809,yh=37810,Sh=37811,Mh=37812,bh=37813,Eh=37814,wh=37815,Th=37816,Ah=37817,Rh=37818,Ch=37819,Ph=37820,Nh=37821,Ih=36492,Lh=36494,Dh=36495,Uh=36283,Fh=36284,Jc=36285,Oh=36286,Qc=2300,kh=2301,sf=2302,p0=2303,m0=2400,g0=2401,x0=2402,KM=2500,EC=0,wC=1,TC=2,ZM=3200,Bh=0,JM=1,cs="",di="srgb",eu="srgb-linear",tu="linear",nn="srgb",ua=7680,v0=519,QM=512,eb=513,tb=514,cp=515,nb=516,ib=517,up=518,rb=519,zh=35044,_0="300 es",rr=2e3,Zo=2001;function sb(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ab(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Jo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ob(){const s=Jo("canvas");return s.style.display="block",s}const y0={};function nu(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ev(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ct(...s){s=Ev(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function gt(...s){s=Ev(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Vh(...s){const e=s.join(" ");e in y0||(y0[e]=!0,ct(...s))}function lb(s,e,t){return new Promise(function(i,a){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const cb={[Qf]:eh,[th]:rh,[nh]:sh,[Da]:ih,[eh]:Qf,[rh]:th,[sh]:nh,[ih]:Da};class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let S0=1234567;const Xo=Math.PI/180,Fa=180/Math.PI;function Xi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]).toLowerCase()}function Vt(s,e,t){return Math.max(e,Math.min(t,s))}function dp(s,e){return(s%e+e)%e}function ub(s,e,t,i,a){return i+(s-e)*(a-i)/(t-e)}function db(s,e,t){return s!==e?(t-s)/(e-s):0}function $o(s,e,t){return(1-t)*s+t*e}function fb(s,e,t,i){return $o(s,e,1-Math.exp(-t*i))}function hb(s,e=1){return e-Math.abs(dp(s,e*2)-e)}function pb(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mb(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gb(s,e){return s+Math.floor(Math.random()*(e-s+1))}function xb(s,e){return s+Math.random()*(e-s)}function vb(s){return s*(.5-Math.random())}function _b(s){s!==void 0&&(S0=s);let e=S0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yb(s){return s*Xo}function Sb(s){return s*Fa}function Mb(s){return(s&s-1)===0&&s!==0}function bb(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Eb(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wb(s,e,t,i,a){const o=Math.cos,c=Math.sin,d=o(t/2),h=c(t/2),f=o((e+i)/2),v=c((e+i)/2),x=o((e-i)/2),g=c((e-i)/2),m=o((i-e)/2),M=c((i-e)/2);switch(a){case"XYX":s.set(d*v,h*x,h*g,d*f);break;case"YZY":s.set(h*g,d*v,h*x,d*f);break;case"ZXZ":s.set(h*x,h*g,d*v,d*f);break;case"XZX":s.set(d*v,h*M,h*m,d*f);break;case"YXY":s.set(h*m,d*v,h*M,d*f);break;case"ZYZ":s.set(h*M,h*m,d*v,d*f);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function ji(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const AC={DEG2RAD:Xo,RAD2DEG:Fa,generateUUID:Xi,clamp:Vt,euclideanModulo:dp,mapLinear:ub,inverseLerp:db,lerp:$o,damp:fb,pingpong:hb,smoothstep:pb,smootherstep:mb,randInt:gb,randFloat:xb,randFloatSpread:vb,seededRandom:_b,degToRad:yb,radToDeg:Sb,isPowerOfTwo:Mb,ceilPowerOfTwo:bb,floorPowerOfTwo:Eb,setQuaternionFromProperEuler:wb,normalize:rn,denormalize:ji},Ep=class Ep{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*a+e.x,this.y=o*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ep.prototype.isVector2=!0;let It=Ep;class hs{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,c,d){let h=i[a+0],f=i[a+1],v=i[a+2],x=i[a+3],g=o[c+0],m=o[c+1],M=o[c+2],E=o[c+3];if(x!==E||h!==g||f!==m||v!==M){let y=h*g+f*m+v*M+x*E;y<0&&(g=-g,m=-m,M=-M,E=-E,y=-y);let S=1-d;if(y<.9995){const R=Math.acos(y),P=Math.sin(R);S=Math.sin(S*R)/P,d=Math.sin(d*R)/P,h=h*S+g*d,f=f*S+m*d,v=v*S+M*d,x=x*S+E*d}else{h=h*S+g*d,f=f*S+m*d,v=v*S+M*d,x=x*S+E*d;const R=1/Math.sqrt(h*h+f*f+v*v+x*x);h*=R,f*=R,v*=R,x*=R}}e[t]=h,e[t+1]=f,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,i,a,o,c){const d=i[a],h=i[a+1],f=i[a+2],v=i[a+3],x=o[c],g=o[c+1],m=o[c+2],M=o[c+3];return e[t]=d*M+v*x+h*m-f*g,e[t+1]=h*M+v*g+f*x-d*m,e[t+2]=f*M+v*m+d*g-h*x,e[t+3]=v*M-d*x-h*g-f*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,c=e._order,d=Math.cos,h=Math.sin,f=d(i/2),v=d(a/2),x=d(o/2),g=h(i/2),m=h(a/2),M=h(o/2);switch(c){case"XYZ":this._x=g*v*x+f*m*M,this._y=f*m*x-g*v*M,this._z=f*v*M+g*m*x,this._w=f*v*x-g*m*M;break;case"YXZ":this._x=g*v*x+f*m*M,this._y=f*m*x-g*v*M,this._z=f*v*M-g*m*x,this._w=f*v*x+g*m*M;break;case"ZXY":this._x=g*v*x-f*m*M,this._y=f*m*x+g*v*M,this._z=f*v*M+g*m*x,this._w=f*v*x-g*m*M;break;case"ZYX":this._x=g*v*x-f*m*M,this._y=f*m*x+g*v*M,this._z=f*v*M-g*m*x,this._w=f*v*x+g*m*M;break;case"YZX":this._x=g*v*x+f*m*M,this._y=f*m*x+g*v*M,this._z=f*v*M-g*m*x,this._w=f*v*x-g*m*M;break;case"XZY":this._x=g*v*x-f*m*M,this._y=f*m*x-g*v*M,this._z=f*v*M+g*m*x,this._w=f*v*x+g*m*M;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],c=t[1],d=t[5],h=t[9],f=t[2],v=t[6],x=t[10],g=i+d+x;if(g>0){const m=.5/Math.sqrt(g+1);this._w=.25/m,this._x=(v-h)*m,this._y=(o-f)*m,this._z=(c-a)*m}else if(i>d&&i>x){const m=2*Math.sqrt(1+i-d-x);this._w=(v-h)/m,this._x=.25*m,this._y=(a+c)/m,this._z=(o+f)/m}else if(d>x){const m=2*Math.sqrt(1+d-i-x);this._w=(o-f)/m,this._x=(a+c)/m,this._y=.25*m,this._z=(h+v)/m}else{const m=2*Math.sqrt(1+x-i-d);this._w=(c-a)/m,this._x=(o+f)/m,this._y=(h+v)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,c=e._w,d=t._x,h=t._y,f=t._z,v=t._w;return this._x=i*v+c*d+a*f-o*h,this._y=a*v+c*h+o*d-i*f,this._z=o*v+c*f+i*h-a*d,this._w=c*v-i*d-a*h-o*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,o=e._z,c=e._w,d=this.dot(e);d<0&&(i=-i,a=-a,o=-o,c=-c,d=-d);let h=1-t;if(d<.9995){const f=Math.acos(d),v=Math.sin(f);h=Math.sin(h*f)/v,t=Math.sin(t*f)/v,this._x=this._x*h+i*t,this._y=this._y*h+a*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+a*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wp=class wp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(M0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(M0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,c=e.y,d=e.z,h=e.w,f=2*(c*a-d*i),v=2*(d*t-o*a),x=2*(o*i-c*t);return this.x=t+h*f+c*x-d*v,this.y=i+h*v+d*f-o*x,this.z=a+h*x+o*v-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,c=t.x,d=t.y,h=t.z;return this.x=a*h-o*d,this.y=o*c-i*h,this.z=i*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wp.prototype.isVector3=!0;let Z=wp;const af=new Z,M0=new hs,Tp=class Tp{constructor(e,t,i,a,o,c,d,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,d,h,f)}set(e,t,i,a,o,c,d,h,f){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=t,v[4]=o,v[5]=h,v[6]=i,v[7]=c,v[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],d=i[3],h=i[6],f=i[1],v=i[4],x=i[7],g=i[2],m=i[5],M=i[8],E=a[0],y=a[3],S=a[6],R=a[1],P=a[4],L=a[7],k=a[2],F=a[5],V=a[8];return o[0]=c*E+d*R+h*k,o[3]=c*y+d*P+h*F,o[6]=c*S+d*L+h*V,o[1]=f*E+v*R+x*k,o[4]=f*y+v*P+x*F,o[7]=f*S+v*L+x*V,o[2]=g*E+m*R+M*k,o[5]=g*y+m*P+M*F,o[8]=g*S+m*L+M*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],d=e[5],h=e[6],f=e[7],v=e[8];return t*c*v-t*d*f-i*o*v+i*d*h+a*o*f-a*c*h}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],d=e[5],h=e[6],f=e[7],v=e[8],x=v*c-d*f,g=d*h-v*o,m=f*o-c*h,M=t*x+i*g+a*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=x*E,e[1]=(a*f-v*i)*E,e[2]=(d*i-a*c)*E,e[3]=g*E,e[4]=(v*t-a*h)*E,e[5]=(a*o-d*t)*E,e[6]=m*E,e[7]=(i*h-f*t)*E,e[8]=(c*t-i*o)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,c,d){const h=Math.cos(o),f=Math.sin(o);return this.set(i*h,i*f,-i*(h*c+f*d)+c+e,-a*f,a*h,-a*(-f*c+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(of.makeScale(e,t)),this}rotate(e){return this.premultiply(of.makeRotation(-e)),this}translate(e,t){return this.premultiply(of.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tp.prototype.isMatrix3=!0;let Nt=Tp;const of=new Nt,b0=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E0=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tb(){const s={enabled:!0,workingColorSpace:eu,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===nn&&(a.r=Pr(a.r),a.g=Pr(a.g),a.b=Pr(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===nn&&(a.r=La(a.r),a.g=La(a.g),a.b=La(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===cs?tu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Vh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Vh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[eu]:{primaries:e,whitePoint:i,transfer:tu,toXYZ:b0,fromXYZ:E0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:i,transfer:nn,toXYZ:b0,fromXYZ:E0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),s}const Wt=Tb();function Pr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function La(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let da;class Ab{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{da===void 0&&(da=Jo("canvas")),da.width=e.width,da.height=e.height;const a=da.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=da}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Pr(o[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pr(t[i]/255)*255):t[i]=Pr(t[i]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rb=0;class fp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?o.push(lf(a[c].image)):o.push(lf(a[c]))}else o=lf(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function lf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ab.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let Cb=0;const cf=new Z;class Wn extends zs{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,i=Tr,a=Tr,o=Zn,c=Us,d=Ii,h=Mi,f=Wn.DEFAULT_ANISOTROPY,v=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=Xi(),this.name="",this.source=new fp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=d,this.internalFormat=null,this.type=h,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cf).x}get height(){return this.source.getSize(cf).y}get depth(){return this.source.getSize(cf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ah:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case oh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ah:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case oh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=xv;Wn.DEFAULT_ANISOTROPY=1;const Ap=class Ap{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const h=e.elements,f=h[0],v=h[4],x=h[8],g=h[1],m=h[5],M=h[9],E=h[2],y=h[6],S=h[10];if(Math.abs(v-g)<.01&&Math.abs(x-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+E)<.1&&Math.abs(M+y)<.1&&Math.abs(f+m+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,L=(m+1)/2,k=(S+1)/2,F=(v+g)/4,V=(x+E)/4,T=(M+y)/4;return P>L&&P>k?P<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(P),a=F/i,o=V/i):L>k?L<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(L),i=F/a,o=T/a):k<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(k),i=V/o,a=T/o),this.set(i,a,o,t),this}let R=Math.sqrt((y-M)*(y-M)+(x-E)*(x-E)+(g-v)*(g-v));return Math.abs(R)<.001&&(R=1),this.x=(y-M)/R,this.y=(x-E)/R,this.z=(g-v)/R,this.w=Math.acos((f+m+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this.w=Vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this.w=Vt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Vt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ap.prototype.isVector4=!0;let ln=Ap;class Pb extends zs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ln(0,0,e,t),this.scissorTest=!1,this.viewport=new ln(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},o=new Wn(a),c=i.count;for(let d=0;d<c;d++)this.textures[d]=o.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new fp(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends Pb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wv extends Wn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nb extends Wn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cu=class cu{constructor(e,t,i,a,o,c,d,h,f,v,x,g,m,M,E,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,d,h,f,v,x,g,m,M,E,y)}set(e,t,i,a,o,c,d,h,f,v,x,g,m,M,E,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=a,S[1]=o,S[5]=c,S[9]=d,S[13]=h,S[2]=f,S[6]=v,S[10]=x,S[14]=g,S[3]=m,S[7]=M,S[11]=E,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,a=1/fa.setFromMatrixColumn(e,0).length(),o=1/fa.setFromMatrixColumn(e,1).length(),c=1/fa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,c=Math.cos(i),d=Math.sin(i),h=Math.cos(a),f=Math.sin(a),v=Math.cos(o),x=Math.sin(o);if(e.order==="XYZ"){const g=c*v,m=c*x,M=d*v,E=d*x;t[0]=h*v,t[4]=-h*x,t[8]=f,t[1]=m+M*f,t[5]=g-E*f,t[9]=-d*h,t[2]=E-g*f,t[6]=M+m*f,t[10]=c*h}else if(e.order==="YXZ"){const g=h*v,m=h*x,M=f*v,E=f*x;t[0]=g+E*d,t[4]=M*d-m,t[8]=c*f,t[1]=c*x,t[5]=c*v,t[9]=-d,t[2]=m*d-M,t[6]=E+g*d,t[10]=c*h}else if(e.order==="ZXY"){const g=h*v,m=h*x,M=f*v,E=f*x;t[0]=g-E*d,t[4]=-c*x,t[8]=M+m*d,t[1]=m+M*d,t[5]=c*v,t[9]=E-g*d,t[2]=-c*f,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const g=c*v,m=c*x,M=d*v,E=d*x;t[0]=h*v,t[4]=M*f-m,t[8]=g*f+E,t[1]=h*x,t[5]=E*f+g,t[9]=m*f-M,t[2]=-f,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,m=c*f,M=d*h,E=d*f;t[0]=h*v,t[4]=E-g*x,t[8]=M*x+m,t[1]=x,t[5]=c*v,t[9]=-d*v,t[2]=-f*v,t[6]=m*x+M,t[10]=g-E*x}else if(e.order==="XZY"){const g=c*h,m=c*f,M=d*h,E=d*f;t[0]=h*v,t[4]=-x,t[8]=f*v,t[1]=g*x+E,t[5]=c*v,t[9]=m*x-M,t[2]=M*x-m,t[6]=d*v,t[10]=E*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ib,e,Lb)}lookAt(e,t,i){const a=this.elements;return yi.subVectors(e,t),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),ns.crossVectors(i,yi),ns.lengthSq()===0&&(Math.abs(i.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),ns.crossVectors(i,yi)),ns.normalize(),cc.crossVectors(yi,ns),a[0]=ns.x,a[4]=cc.x,a[8]=yi.x,a[1]=ns.y,a[5]=cc.y,a[9]=yi.y,a[2]=ns.z,a[6]=cc.z,a[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],d=i[4],h=i[8],f=i[12],v=i[1],x=i[5],g=i[9],m=i[13],M=i[2],E=i[6],y=i[10],S=i[14],R=i[3],P=i[7],L=i[11],k=i[15],F=a[0],V=a[4],T=a[8],I=a[12],z=a[1],B=a[5],Y=a[9],se=a[13],de=a[2],W=a[6],J=a[10],K=a[14],te=a[3],le=a[7],D=a[11],w=a[15];return o[0]=c*F+d*z+h*de+f*te,o[4]=c*V+d*B+h*W+f*le,o[8]=c*T+d*Y+h*J+f*D,o[12]=c*I+d*se+h*K+f*w,o[1]=v*F+x*z+g*de+m*te,o[5]=v*V+x*B+g*W+m*le,o[9]=v*T+x*Y+g*J+m*D,o[13]=v*I+x*se+g*K+m*w,o[2]=M*F+E*z+y*de+S*te,o[6]=M*V+E*B+y*W+S*le,o[10]=M*T+E*Y+y*J+S*D,o[14]=M*I+E*se+y*K+S*w,o[3]=R*F+P*z+L*de+k*te,o[7]=R*V+P*B+L*W+k*le,o[11]=R*T+P*Y+L*J+k*D,o[15]=R*I+P*se+L*K+k*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],c=e[1],d=e[5],h=e[9],f=e[13],v=e[2],x=e[6],g=e[10],m=e[14],M=e[3],E=e[7],y=e[11],S=e[15],R=h*m-f*g,P=d*m-f*x,L=d*g-h*x,k=c*m-f*v,F=c*g-h*v,V=c*x-d*v;return t*(E*R-y*P+S*L)-i*(M*R-y*k+S*F)+a*(M*P-E*k+S*V)-o*(M*L-E*F+y*V)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],d=e[5],h=e[6],f=e[7],v=e[8],x=e[9],g=e[10],m=e[11],M=e[12],E=e[13],y=e[14],S=e[15],R=t*d-i*c,P=t*h-a*c,L=t*f-o*c,k=i*h-a*d,F=i*f-o*d,V=a*f-o*h,T=v*E-x*M,I=v*y-g*M,z=v*S-m*M,B=x*y-g*E,Y=x*S-m*E,se=g*S-m*y,de=R*se-P*Y+L*B+k*z-F*I+V*T;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/de;return e[0]=(d*se-h*Y+f*B)*W,e[1]=(a*Y-i*se-o*B)*W,e[2]=(E*V-y*F+S*k)*W,e[3]=(g*F-x*V-m*k)*W,e[4]=(h*z-c*se-f*I)*W,e[5]=(t*se-a*z+o*I)*W,e[6]=(y*L-M*V-S*P)*W,e[7]=(v*V-g*L+m*P)*W,e[8]=(c*Y-d*z+f*T)*W,e[9]=(i*z-t*Y-o*T)*W,e[10]=(M*F-E*L+S*R)*W,e[11]=(x*L-v*F-m*R)*W,e[12]=(d*I-c*B-h*T)*W,e[13]=(t*B-i*I+a*T)*W,e[14]=(E*P-M*k-y*R)*W,e[15]=(v*k-x*P+g*R)*W,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,c=e.x,d=e.y,h=e.z,f=o*c,v=o*d;return this.set(f*c+i,f*d-a*h,f*h+a*d,0,f*d+a*h,v*d+i,v*h-a*c,0,f*h-a*d,v*h+a*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,c){return this.set(1,i,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,c=t._y,d=t._z,h=t._w,f=o+o,v=c+c,x=d+d,g=o*f,m=o*v,M=o*x,E=c*v,y=c*x,S=d*x,R=h*f,P=h*v,L=h*x,k=i.x,F=i.y,V=i.z;return a[0]=(1-(E+S))*k,a[1]=(m+L)*k,a[2]=(M-P)*k,a[3]=0,a[4]=(m-L)*F,a[5]=(1-(g+S))*F,a[6]=(y+R)*F,a[7]=0,a[8]=(M+P)*V,a[9]=(y-R)*V,a[10]=(1-(g+E))*V,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let c=fa.set(a[0],a[1],a[2]).length();const d=fa.set(a[4],a[5],a[6]).length(),h=fa.set(a[8],a[9],a[10]).length();o<0&&(c=-c),Hi.copy(this);const f=1/c,v=1/d,x=1/h;return Hi.elements[0]*=f,Hi.elements[1]*=f,Hi.elements[2]*=f,Hi.elements[4]*=v,Hi.elements[5]*=v,Hi.elements[6]*=v,Hi.elements[8]*=x,Hi.elements[9]*=x,Hi.elements[10]*=x,t.setFromRotationMatrix(Hi),i.x=c,i.y=d,i.z=h,this}makePerspective(e,t,i,a,o,c,d=rr,h=!1){const f=this.elements,v=2*o/(t-e),x=2*o/(i-a),g=(t+e)/(t-e),m=(i+a)/(i-a);let M,E;if(h)M=o/(c-o),E=c*o/(c-o);else if(d===rr)M=-(c+o)/(c-o),E=-2*c*o/(c-o);else if(d===Zo)M=-c/(c-o),E=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=v,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=x,f[9]=m,f[13]=0,f[2]=0,f[6]=0,f[10]=M,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,a,o,c,d=rr,h=!1){const f=this.elements,v=2/(t-e),x=2/(i-a),g=-(t+e)/(t-e),m=-(i+a)/(i-a);let M,E;if(h)M=1/(c-o),E=c/(c-o);else if(d===rr)M=-2/(c-o),E=-(c+o)/(c-o);else if(d===Zo)M=-1/(c-o),E=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=v,f[4]=0,f[8]=0,f[12]=g,f[1]=0,f[5]=x,f[9]=0,f[13]=m,f[2]=0,f[6]=0,f[10]=M,f[14]=E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};cu.prototype.isMatrix4=!0;let Ot=cu;const fa=new Z,Hi=new Ot,Ib=new Z(0,0,0),Lb=new Z(1,1,1),ns=new Z,cc=new Z,yi=new Z,w0=new Ot,T0=new hs;class fs{constructor(e=0,t=0,i=0,a=fs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],c=a[4],d=a[8],h=a[1],f=a[5],v=a[9],x=a[2],g=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,m),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,m),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-x,o),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,m),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Vt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,m),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,f),this._y=Math.atan2(-x,o)):(this._x=0,this._y=Math.atan2(d,m));break;case"XZY":this._z=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(d,o)):(this._x=Math.atan2(-v,m),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return w0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(w0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return T0.setFromEuler(this),this.setFromQuaternion(T0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fs.DEFAULT_ORDER="XYZ";class hp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Db=0;const A0=new Z,ha=new hs,_r=new Ot,uc=new Z,wo=new Z,Ub=new Z,Fb=new hs,R0=new Z(1,0,0),C0=new Z(0,1,0),P0=new Z(0,0,1),N0={type:"added"},Ob={type:"removed"},pa={type:"childadded",child:null},uf={type:"childremoved",child:null};class bn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new Z,t=new fs,i=new hs,a=new Z(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Nt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ha.setFromAxisAngle(e,t),this.quaternion.multiply(ha),this}rotateOnWorldAxis(e,t){return ha.setFromAxisAngle(e,t),this.quaternion.premultiply(ha),this}rotateX(e){return this.rotateOnAxis(R0,e)}rotateY(e){return this.rotateOnAxis(C0,e)}rotateZ(e){return this.rotateOnAxis(P0,e)}translateOnAxis(e,t){return A0.copy(e).applyQuaternion(this.quaternion),this.position.add(A0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(R0,e)}translateY(e){return this.translateOnAxis(C0,e)}translateZ(e){return this.translateOnAxis(P0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?uc.copy(e):uc.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(wo,uc,this.up):_r.lookAt(uc,wo,this.up),this.quaternion.setFromRotationMatrix(_r),a&&(_r.extractRotation(a.matrixWorld),ha.setFromRotationMatrix(_r),this.quaternion.premultiply(ha.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(N0),pa.child=e,this.dispatchEvent(pa),pa.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ob),uf.child=e,this.dispatchEvent(uf),uf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(N0),pa.child=e,this.dispatchEvent(pa),pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,Ub),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,Fb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*a,o[13]+=i-o[1]*t-o[5]*i-o[9]*a,o[14]+=a-o[2]*t-o[6]*i-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let f=0,v=h.length;f<v;f++){const x=h[f];o(e.shapes,x)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,f=this.material.length;h<f;h++)d.push(o(e.materials,this.material[h]));a.material=d}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(o(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),f=c(e.textures),v=c(e.images),x=c(e.shapes),g=c(e.skeletons),m=c(e.animations),M=c(e.nodes);d.length>0&&(i.geometries=d),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),v.length>0&&(i.images=v),x.length>0&&(i.shapes=x),g.length>0&&(i.skeletons=g),m.length>0&&(i.animations=m),M.length>0&&(i.nodes=M)}return i.object=a,i;function c(d){const h=[];for(const f in d){const v=d[f];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}bn.DEFAULT_UP=new Z(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ho extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kb={type:"move"};class df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,c=null;const d=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,i),S=this._getHandJoint(f,E);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=f.joints["index-finger-tip"],x=f.joints["thumb-tip"],g=v.position.distanceTo(x.position),m=.02,M=.005;f.inputState.pinching&&g>m+M?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=m-M&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kb)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},dc={h:0,s:0,l:0};function ff(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Wt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Wt.workingColorSpace){if(e=dp(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=ff(c,o,e+1/3),this.g=ff(c,o,e),this.b=ff(c,o,e-1/3)}return Wt.colorSpaceToWorking(this,a),this}setStyle(e,t=di){function i(o){o!==void 0&&parseFloat(o)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const i=Tv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Wt.workingToColorSpace(Kn.copy(this),e),Math.round(Vt(Kn.r*255,0,255))*65536+Math.round(Vt(Kn.g*255,0,255))*256+Math.round(Vt(Kn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Wt.workingColorSpace){Wt.workingToColorSpace(Kn.copy(this),t);const i=Kn.r,a=Kn.g,o=Kn.b,c=Math.max(i,a,o),d=Math.min(i,a,o);let h,f;const v=(d+c)/2;if(d===c)h=0,f=0;else{const x=c-d;switch(f=v<=.5?x/(c+d):x/(2-c-d),c){case i:h=(a-o)/x+(a<o?6:0);break;case a:h=(o-i)/x+2;break;case o:h=(i-a)/x+4;break}h/=6}return e.h=h,e.s=f,e.l=v,e}getRGB(e,t=Wt.workingColorSpace){return Wt.workingToColorSpace(Kn.copy(this),t),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=di){Wt.workingToColorSpace(Kn.copy(this),e);const t=Kn.r,i=Kn.g,a=Kn.b;return e!==di?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(dc);const i=$o(is.h,dc.h,t),a=$o(is.s,dc.s,t),o=$o(is.l,dc.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new Ht;Ht.NAMES=Tv;class Bb extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fs,this.environmentIntensity=1,this.environmentRotation=new fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Gi=new Z,yr=new Z,hf=new Z,Sr=new Z,ma=new Z,ga=new Z,I0=new Z,pf=new Z,mf=new Z,gf=new Z,xf=new ln,vf=new ln,_f=new ln;class Pi{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Gi.subVectors(e,t),a.cross(Gi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){Gi.subVectors(a,t),yr.subVectors(i,t),hf.subVectors(e,t);const c=Gi.dot(Gi),d=Gi.dot(yr),h=Gi.dot(hf),f=yr.dot(yr),v=yr.dot(hf),x=c*f-d*d;if(x===0)return o.set(0,0,0),null;const g=1/x,m=(f*h-d*v)*g,M=(c*v-d*h)*g;return o.set(1-m-M,M,m)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,i,a,o,c,d,h){return this.getBarycoord(e,t,i,a,Sr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Sr.x),h.addScaledVector(c,Sr.y),h.addScaledVector(d,Sr.z),h)}static getInterpolatedAttribute(e,t,i,a,o,c){return xf.setScalar(0),vf.setScalar(0),_f.setScalar(0),xf.fromBufferAttribute(e,t),vf.fromBufferAttribute(e,i),_f.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(xf,o.x),c.addScaledVector(vf,o.y),c.addScaledVector(_f,o.z),c}static isFrontFacing(e,t,i,a){return Gi.subVectors(i,t),yr.subVectors(e,t),Gi.cross(yr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Gi.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return Pi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return Pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let c,d;ma.subVectors(a,i),ga.subVectors(o,i),pf.subVectors(e,i);const h=ma.dot(pf),f=ga.dot(pf);if(h<=0&&f<=0)return t.copy(i);mf.subVectors(e,a);const v=ma.dot(mf),x=ga.dot(mf);if(v>=0&&x<=v)return t.copy(a);const g=h*x-v*f;if(g<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(i).addScaledVector(ma,c);gf.subVectors(e,o);const m=ma.dot(gf),M=ga.dot(gf);if(M>=0&&m<=M)return t.copy(o);const E=m*f-h*M;if(E<=0&&f>=0&&M<=0)return d=f/(f-M),t.copy(i).addScaledVector(ga,d);const y=v*M-m*x;if(y<=0&&x-v>=0&&m-M>=0)return I0.subVectors(o,a),d=(x-v)/(x-v+(m-M)),t.copy(a).addScaledVector(I0,d);const S=1/(y+E+g);return c=E*S,d=g*S,t.copy(i).addScaledVector(ma,c).addScaledVector(ga,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ur{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=o.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Wi):Wi.fromBufferAttribute(o,c),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fc.copy(i.boundingBox)),fc.applyMatrix4(e.matrixWorld),this.union(fc)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),hc.subVectors(this.max,To),xa.subVectors(e.a,To),va.subVectors(e.b,To),_a.subVectors(e.c,To),rs.subVectors(va,xa),ss.subVectors(_a,va),Rs.subVectors(xa,_a);let t=[0,-rs.z,rs.y,0,-ss.z,ss.y,0,-Rs.z,Rs.y,rs.z,0,-rs.x,ss.z,0,-ss.x,Rs.z,0,-Rs.x,-rs.y,rs.x,0,-ss.y,ss.x,0,-Rs.y,Rs.x,0];return!yf(t,xa,va,_a,hc)||(t=[1,0,0,0,1,0,0,0,1],!yf(t,xa,va,_a,hc))?!1:(pc.crossVectors(rs,ss),t=[pc.x,pc.y,pc.z],yf(t,xa,va,_a,hc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Wi=new Z,fc=new Ur,xa=new Z,va=new Z,_a=new Z,rs=new Z,ss=new Z,Rs=new Z,To=new Z,hc=new Z,pc=new Z,Cs=new Z;function yf(s,e,t,i,a){for(let o=0,c=s.length-3;o<=c;o+=3){Cs.fromArray(s,o);const d=a.x*Math.abs(Cs.x)+a.y*Math.abs(Cs.y)+a.z*Math.abs(Cs.z),h=e.dot(Cs),f=t.dot(Cs),v=i.dot(Cs);if(Math.max(-Math.max(h,f,v),Math.min(h,f,v))>d)return!1}return!0}const An=new Z,mc=new It;let zb=0;class On extends zs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zh,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mc.fromBufferAttribute(this,t),mc.applyMatrix3(e),this.setXY(t,mc.x,mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix3(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),a=rn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),a=rn(a,this.array),o=rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Av extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Rv extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class pi extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Vb=new Ur,Ao=new Z,Sf=new Z;class Fr{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vb.setFromPoints(e).getCenter(i);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const t=Ao.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Ao,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(Sf)),this.expandByPoint(Ao.copy(e.center).sub(Sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hb=0;const Ci=new Ot,Mf=new bn,ya=new Z,Si=new Ur,Ro=new Ur,Fn=new Z;class kn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sb(e)?Rv:Av)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Nt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,i){return Ci.makeTranslation(e,t,i),this.applyMatrix4(Ci),this}scale(e,t,i){return Ci.makeScale(e,t,i),this.applyMatrix4(Ci),this}lookAt(e){return Mf.lookAt(e),Mf.updateMatrix(),this.applyMatrix4(Mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ya).negate(),this.translate(ya.x,ya.y,ya.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new pi(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Si.setFromBufferAttribute(o),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const d=t[o];Ro.setFromBufferAttribute(d),this.morphTargetsRelative?(Fn.addVectors(Si.min,Ro.min),Si.expandByPoint(Fn),Fn.addVectors(Si.max,Ro.max),Si.expandByPoint(Fn)):(Si.expandByPoint(Ro.min),Si.expandByPoint(Ro.max))}Si.getCenter(i);let a=0;for(let o=0,c=e.count;o<c;o++)Fn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(Fn));if(t)for(let o=0,c=t.length;o<c;o++){const d=t[o],h=this.morphTargetsRelative;for(let f=0,v=d.count;f<v;f++)Fn.fromBufferAttribute(d,f),h&&(ya.fromBufferAttribute(e,f),Fn.add(ya)),a=Math.max(a,i.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let T=0;T<i.count;T++)d[T]=new Z,h[T]=new Z;const f=new Z,v=new Z,x=new Z,g=new It,m=new It,M=new It,E=new Z,y=new Z;function S(T,I,z){f.fromBufferAttribute(i,T),v.fromBufferAttribute(i,I),x.fromBufferAttribute(i,z),g.fromBufferAttribute(o,T),m.fromBufferAttribute(o,I),M.fromBufferAttribute(o,z),v.sub(f),x.sub(f),m.sub(g),M.sub(g);const B=1/(m.x*M.y-M.x*m.y);isFinite(B)&&(E.copy(v).multiplyScalar(M.y).addScaledVector(x,-m.y).multiplyScalar(B),y.copy(x).multiplyScalar(m.x).addScaledVector(v,-M.x).multiplyScalar(B),d[T].add(E),d[I].add(E),d[z].add(E),h[T].add(y),h[I].add(y),h[z].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,I=R.length;T<I;++T){const z=R[T],B=z.start,Y=z.count;for(let se=B,de=B+Y;se<de;se+=3)S(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const P=new Z,L=new Z,k=new Z,F=new Z;function V(T){k.fromBufferAttribute(a,T),F.copy(k);const I=d[T];P.copy(I),P.sub(k.multiplyScalar(k.dot(I))).normalize(),L.crossVectors(F,I);const B=L.dot(h[T])<0?-1:1;c.setXYZW(T,P.x,P.y,P.z,B)}for(let T=0,I=R.length;T<I;++T){const z=R[T],B=z.start,Y=z.count;for(let se=B,de=B+Y;se<de;se+=3)V(e.getX(se+0)),V(e.getX(se+1)),V(e.getX(se+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,m=i.count;g<m;g++)i.setXYZ(g,0,0,0);const a=new Z,o=new Z,c=new Z,d=new Z,h=new Z,f=new Z,v=new Z,x=new Z;if(e)for(let g=0,m=e.count;g<m;g+=3){const M=e.getX(g+0),E=e.getX(g+1),y=e.getX(g+2);a.fromBufferAttribute(t,M),o.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),v.subVectors(c,o),x.subVectors(a,o),v.cross(x),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,y),d.add(v),h.add(v),f.add(v),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(E,h.x,h.y,h.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let g=0,m=t.count;g<m;g+=3)a.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),v.subVectors(c,o),x.subVectors(a,o),v.cross(x),i.setXYZ(g+0,v.x,v.y,v.z),i.setXYZ(g+1,v.x,v.y,v.z),i.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(d,h){const f=d.array,v=d.itemSize,x=d.normalized,g=new f.constructor(h.length*v);let m=0,M=0;for(let E=0,y=h.length;E<y;E++){d.isInterleavedBufferAttribute?m=h[E]*d.data.stride+d.offset:m=h[E]*v;for(let S=0;S<v;S++)g[M++]=f[m++]}return new On(g,v,x)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kn,i=this.index.array,a=this.attributes;for(const d in a){const h=a[d],f=e(h,i);t.setAttribute(d,f)}const o=this.morphAttributes;for(const d in o){const h=[],f=o[d];for(let v=0,x=f.length;v<x;v++){const g=f[v],m=e(g,i);h.push(m)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const f=c[d];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const a={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],v=[];for(let x=0,g=f.length;x<g;x++){const m=f[x];v.push(m.toJSON(e.data))}v.length>0&&(a[h]=v,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const f in a){const v=a[f];this.setAttribute(f,v.clone(t))}const o=e.morphAttributes;for(const f in o){const v=[],x=o[f];for(let g=0,m=x.length;g<m;g++)v.push(x[g].clone(t));this.morphAttributes[f]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,v=c.length;f<v;f++){const x=c[f];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zh,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ti=new Z;class iu{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ji(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),a=rn(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),a=rn(a,this.array),o=rn(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){nu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new iu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){nu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Wb=0;class ps extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Ia,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zf,this.blendDst=Jf,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ia&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zf&&(i.blendSrc=this.blendSrc),this.blendDst!==Jf&&(i.blendDst=this.blendDst),this.blendEquation!==Ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Da&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ua&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ua&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ua&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const d in o){const h=o[d];delete h.metadata,c.push(h)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cv extends ps{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Sa;const Co=new Z,Ma=new Z,ba=new Z,Ea=new It,Po=new It,Pv=new Ot,gc=new Z,No=new Z,xc=new Z,L0=new It,bf=new It,D0=new It;class jb extends bn{constructor(e=new Cv){if(super(),this.isSprite=!0,this.type="Sprite",Sa===void 0){Sa=new kn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Gb(t,5);Sa.setIndex([0,1,2,0,2,3]),Sa.setAttribute("position",new iu(i,3,0,!1)),Sa.setAttribute("uv",new iu(i,2,3,!1))}this.geometry=Sa,this.material=e,this.center=new It(.5,.5),this.count=1}raycast(e,t){e.camera===null&&gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ma.setFromMatrixScale(this.matrixWorld),Pv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ba.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ma.multiplyScalar(-ba.z);const i=this.material.rotation;let a,o;i!==0&&(o=Math.cos(i),a=Math.sin(i));const c=this.center;vc(gc.set(-.5,-.5,0),ba,c,Ma,a,o),vc(No.set(.5,-.5,0),ba,c,Ma,a,o),vc(xc.set(.5,.5,0),ba,c,Ma,a,o),L0.set(0,0),bf.set(1,0),D0.set(1,1);let d=e.ray.intersectTriangle(gc,No,xc,!1,Co);if(d===null&&(vc(No.set(-.5,.5,0),ba,c,Ma,a,o),bf.set(0,1),d=e.ray.intersectTriangle(gc,xc,No,!1,Co),d===null))return;const h=e.ray.origin.distanceTo(Co);h<e.near||h>e.far||t.push({distance:h,point:Co.clone(),uv:Pi.getInterpolation(Co,gc,No,xc,L0,bf,D0,new It),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function vc(s,e,t,i,a,o){Ea.subVectors(s,t).addScalar(.5).multiply(i),a!==void 0?(Po.x=o*Ea.x-a*Ea.y,Po.y=a*Ea.x+o*Ea.y):Po.copy(Ea),s.copy(e),s.x+=Po.x,s.y+=Po.y,s.applyMatrix4(Pv)}const br=new Z,Ef=new Z,_c=new Z,as=new Z,wf=new Z,yc=new Z,Tf=new Z;class il{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,t),br.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){Ef.copy(e).add(t).multiplyScalar(.5),_c.copy(t).sub(e).normalize(),as.copy(this.origin).sub(Ef);const o=e.distanceTo(t)*.5,c=-this.direction.dot(_c),d=as.dot(this.direction),h=-as.dot(_c),f=as.lengthSq(),v=Math.abs(1-c*c);let x,g,m,M;if(v>0)if(x=c*h-d,g=c*d-h,M=o*v,x>=0)if(g>=-M)if(g<=M){const E=1/v;x*=E,g*=E,m=x*(x+c*g+2*d)+g*(c*x+g+2*h)+f}else g=o,x=Math.max(0,-(c*g+d)),m=-x*x+g*(g+2*h)+f;else g=-o,x=Math.max(0,-(c*g+d)),m=-x*x+g*(g+2*h)+f;else g<=-M?(x=Math.max(0,-(-c*o+d)),g=x>0?-o:Math.min(Math.max(-o,-h),o),m=-x*x+g*(g+2*h)+f):g<=M?(x=0,g=Math.min(Math.max(-o,-h),o),m=g*(g+2*h)+f):(x=Math.max(0,-(c*o+d)),g=x>0?o:Math.min(Math.max(-o,-h),o),m=-x*x+g*(g+2*h)+f);else g=c>0?-o:o,x=Math.max(0,-(c*g+d)),m=-x*x+g*(g+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(Ef).addScaledVector(_c,g),m}intersectSphere(e,t){br.subVectors(e.center,this.origin);const i=br.dot(this.direction),a=br.dot(br)-i*i,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),d=i-c,h=i+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,c,d,h;const f=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return f>=0?(i=(e.min.x-g.x)*f,a=(e.max.x-g.x)*f):(i=(e.max.x-g.x)*f,a=(e.min.x-g.x)*f),v>=0?(o=(e.min.y-g.y)*v,c=(e.max.y-g.y)*v):(o=(e.max.y-g.y)*v,c=(e.min.y-g.y)*v),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),x>=0?(d=(e.min.z-g.z)*x,h=(e.max.z-g.z)*x):(d=(e.max.z-g.z)*x,h=(e.min.z-g.z)*x),i>h||d>a)||((d>i||i!==i)&&(i=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,i,a,o){wf.subVectors(t,e),yc.subVectors(i,e),Tf.crossVectors(wf,yc);let c=this.direction.dot(Tf),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;as.subVectors(this.origin,e);const h=d*this.direction.dot(yc.crossVectors(as,yc));if(h<0)return null;const f=d*this.direction.dot(wf.cross(as));if(f<0||h+f>c)return null;const v=-d*as.dot(Tf);return v<0?null:this.at(v/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pp extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.combine=uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const U0=new Ot,Ps=new il,Sc=new Fr,F0=new Z,Mc=new Z,bc=new Z,Ec=new Z,Af=new Z,wc=new Z,O0=new Z,Tc=new Z;class mi extends bn{constructor(e=new kn,t=new pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const d=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(o&&d){wc.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const v=d[h],x=o[h];v!==0&&(Af.fromBufferAttribute(x,e),c?wc.addScaledVector(Af,v):wc.addScaledVector(Af.sub(t),v))}t.add(wc)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(o),Ps.copy(e.ray).recast(e.near),!(Sc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Sc,F0)===null||Ps.origin.distanceToSquared(F0)>(e.far-e.near)**2))&&(U0.copy(o).invert(),Ps.copy(e.ray).applyMatrix4(U0),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,i){let a;const o=this.geometry,c=this.material,d=o.index,h=o.attributes.position,f=o.attributes.uv,v=o.attributes.uv1,x=o.attributes.normal,g=o.groups,m=o.drawRange;if(d!==null)if(Array.isArray(c))for(let M=0,E=g.length;M<E;M++){const y=g[M],S=c[y.materialIndex],R=Math.max(y.start,m.start),P=Math.min(d.count,Math.min(y.start+y.count,m.start+m.count));for(let L=R,k=P;L<k;L+=3){const F=d.getX(L),V=d.getX(L+1),T=d.getX(L+2);a=Ac(this,S,e,i,f,v,x,F,V,T),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,m.start),E=Math.min(d.count,m.start+m.count);for(let y=M,S=E;y<S;y+=3){const R=d.getX(y),P=d.getX(y+1),L=d.getX(y+2);a=Ac(this,c,e,i,f,v,x,R,P,L),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,E=g.length;M<E;M++){const y=g[M],S=c[y.materialIndex],R=Math.max(y.start,m.start),P=Math.min(h.count,Math.min(y.start+y.count,m.start+m.count));for(let L=R,k=P;L<k;L+=3){const F=L,V=L+1,T=L+2;a=Ac(this,S,e,i,f,v,x,F,V,T),a&&(a.faceIndex=Math.floor(L/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,m.start),E=Math.min(h.count,m.start+m.count);for(let y=M,S=E;y<S;y+=3){const R=y,P=y+1,L=y+2;a=Ac(this,c,e,i,f,v,x,R,P,L),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Xb(s,e,t,i,a,o,c,d){let h;if(e.side===hi?h=i.intersectTriangle(c,o,a,!0,d):h=i.intersectTriangle(a,o,c,e.side===ds,d),h===null)return null;Tc.copy(d),Tc.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Tc);return f<t.near||f>t.far?null:{distance:f,point:Tc.clone(),object:s}}function Ac(s,e,t,i,a,o,c,d,h,f){s.getVertexPosition(d,Mc),s.getVertexPosition(h,bc),s.getVertexPosition(f,Ec);const v=Xb(s,e,t,i,Mc,bc,Ec,O0);if(v){const x=new Z;Pi.getBarycoord(O0,Mc,bc,Ec,x),a&&(v.uv=Pi.getInterpolatedAttribute(a,d,h,f,x,new It)),o&&(v.uv1=Pi.getInterpolatedAttribute(o,d,h,f,x,new It)),c&&(v.normal=Pi.getInterpolatedAttribute(c,d,h,f,x,new Z),v.normal.dot(i.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:h,c:f,normal:new Z,materialIndex:0};Pi.getNormal(Mc,bc,Ec,g.normal),v.face=g,v.barycoord=x}return v}const Io=new ln,k0=new ln,B0=new ln,$b=new ln,z0=new Ot,Rc=new Z,Rf=new Fr,V0=new Ot,Cf=new il;class RC extends mi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=h0,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ur),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Rc),this.boundingBox.expandByPoint(Rc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Rc),this.boundingSphere.expandByPoint(Rc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,a=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rf.copy(this.boundingSphere),Rf.applyMatrix4(a),e.ray.intersectsSphere(Rf)!==!1&&(V0.copy(a).invert(),Cf.copy(e.ray).applyMatrix4(V0),!(this.boundingBox!==null&&Cf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ln,t=this.geometry.attributes.skinWeight;for(let i=0,a=t.count;i<a;i++){e.fromBufferAttribute(t,i);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===h0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===YM?this.bindMatrixInverse.copy(this.bindMatrix).invert():ct("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,a=this.geometry;k0.fromBufferAttribute(a.attributes.skinIndex,e),B0.fromBufferAttribute(a.attributes.skinWeight,e),t.isVector4?(Io.copy(t),t.set(0,0,0,0)):(Io.set(...t,1),t.set(0,0,0)),Io.applyMatrix4(this.bindMatrix);for(let o=0;o<4;o++){const c=B0.getComponent(o);if(c!==0){const d=k0.getComponent(o);z0.multiplyMatrices(i.bones[d].matrixWorld,i.boneInverses[d]),t.addScaledVector($b.copy(Io).applyMatrix4(z0),c)}}return t.isVector4&&(t.w=Io.w),t.applyMatrix4(this.bindMatrixInverse)}}class Yb extends bn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mp extends Wn{constructor(e=null,t=1,i=1,a,o,c,d,h,f=Gn,v=Gn,x,g){super(null,c,d,h,f,v,a,o,x,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const H0=new Ot,qb=new Ot;class Nv{constructor(e=[],t=[]){this.uuid=Xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ct("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,a=this.bones.length;i<a;i++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ot;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,a=this.boneTexture;for(let o=0,c=e.length;o<c;o++){const d=e[o]?e[o].matrixWorld:qb;H0.multiplyMatrices(d,t[o]),H0.toArray(i,o*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Nv(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new mp(t,e,e,Ii,Ni);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,a=e.bones.length;i<a;i++){const o=e.bones[i];let c=t[o];c===void 0&&(ct("Skeleton: No bone found with UUID:",o),c=new Yb),this.bones.push(c),this.boneInverses.push(new Ot().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let a=0,o=t.length;a<o;a++){const c=t[a];e.bones.push(c.uuid);const d=i[a];e.boneInverses.push(d.toArray())}return e}}class G0 extends On{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wa=new Ot,W0=new Ot,Cc=[],j0=new Ur,Kb=new Ot,Lo=new mi,Do=new Fr;class CC extends mi{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new G0(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,Kb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ur),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wa),j0.copy(e.boundingBox).applyMatrix4(wa),this.boundingBox.union(j0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,wa),Do.copy(e.boundingSphere).applyMatrix4(wa),this.boundingSphere.union(Do)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,a=this.morphTexture.source.data.data,o=i.length+1,c=e*o+1;for(let d=0;d<i.length;d++)i[d]=a[c+d]}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(i),e.ray.intersectsSphere(Do)!==!1))for(let o=0;o<a;o++){this.getMatrixAt(o,wa),W0.multiplyMatrices(i,wa),Lo.matrixWorld=W0,Lo.raycast(e,Cc);for(let c=0,d=Cc.length;c<d;c++){const h=Cc[c];h.instanceId=o,h.object=this,t.push(h)}Cc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new G0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,a=i.length+1;this.morphTexture===null&&(this.morphTexture=new mp(new Float32Array(a*this.count),a,this.count,sp,Ni));const o=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const d=this.geometry.morphTargetsRelative?1:1-c,h=a*e;return o[h]=d,o.set(i,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Pf=new Z,Zb=new Z,Jb=new Nt;class Is{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=Pf.subVectors(i,t).cross(Zb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(Pf),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Jb.getNormalMatrix(e),a=this.coplanarPoint(Pf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new Fr,Qb=new It(.5,.5),Pc=new Z;class gp{constructor(e=new Is,t=new Is,i=new Is,a=new Is,o=new Is,c=new Is){this.planes=[e,t,i,a,o,c]}set(e,t,i,a,o,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(i),d[3].copy(a),d[4].copy(o),d[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=rr,i=!1){const a=this.planes,o=e.elements,c=o[0],d=o[1],h=o[2],f=o[3],v=o[4],x=o[5],g=o[6],m=o[7],M=o[8],E=o[9],y=o[10],S=o[11],R=o[12],P=o[13],L=o[14],k=o[15];if(a[0].setComponents(f-c,m-v,S-M,k-R).normalize(),a[1].setComponents(f+c,m+v,S+M,k+R).normalize(),a[2].setComponents(f+d,m+x,S+E,k+P).normalize(),a[3].setComponents(f-d,m-x,S-E,k-P).normalize(),i)a[4].setComponents(h,g,y,L).normalize(),a[5].setComponents(f-h,m-g,S-y,k-L).normalize();else if(a[4].setComponents(f-h,m-g,S-y,k-L).normalize(),t===rr)a[5].setComponents(f+h,m+g,S+y,k+L).normalize();else if(t===Zo)a[5].setComponents(h,g,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);const t=Qb.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(Pc.x=a.normal.x>0?e.max.x:e.min.x,Pc.y=a.normal.y>0?e.max.y:e.min.y,Pc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Iv extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ru=new Z,su=new Z,X0=new Ot,Uo=new il,Nc=new Fr,Nf=new Z,$0=new Z;class Lv extends bn{constructor(e=new kn,t=new Iv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)ru.fromBufferAttribute(t,a-1),su.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=ru.distanceTo(su);e.setAttribute("lineDistance",new pi(i,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(a),Nc.radius+=o,e.ray.intersectsSphere(Nc)===!1)return;X0.copy(a).invert(),Uo.copy(e.ray).applyMatrix4(X0);const d=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=this.isLineSegments?2:1,v=i.index,g=i.attributes.position;if(v!==null){const m=Math.max(0,c.start),M=Math.min(v.count,c.start+c.count);for(let E=m,y=M-1;E<y;E+=f){const S=v.getX(E),R=v.getX(E+1),P=Ic(this,e,Uo,h,S,R,E);P&&t.push(P)}if(this.isLineLoop){const E=v.getX(M-1),y=v.getX(m),S=Ic(this,e,Uo,h,E,y,M-1);S&&t.push(S)}}else{const m=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let E=m,y=M-1;E<y;E+=f){const S=Ic(this,e,Uo,h,E,E+1,E);S&&t.push(S)}if(this.isLineLoop){const E=Ic(this,e,Uo,h,M-1,m,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const d=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}}function Ic(s,e,t,i,a,o,c){const d=s.geometry.attributes.position;if(ru.fromBufferAttribute(d,a),su.fromBufferAttribute(d,o),t.distanceSqToSegment(ru,su,Nf,$0)>i)return;Nf.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(Nf);if(!(f<e.near||f>e.far))return{distance:f,point:$0.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const Y0=new Z,q0=new Z;class PC extends Lv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,o=t.count;a<o;a+=2)Y0.fromBufferAttribute(t,a),q0.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Y0.distanceTo(q0);e.setAttribute("lineDistance",new pi(i,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class e1 extends Lv{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class $c extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const K0=new Ot,Hh=new il,Lc=new Fr,Dc=new Z;class If extends bn{constructor(e=new kn,t=new $c){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lc.copy(i.boundingSphere),Lc.applyMatrix4(a),Lc.radius+=o,e.ray.intersectsSphere(Lc)===!1)return;K0.copy(a).invert(),Hh.copy(e.ray).applyMatrix4(K0);const d=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=i.index,x=i.attributes.position;if(f!==null){const g=Math.max(0,c.start),m=Math.min(f.count,c.start+c.count);for(let M=g,E=m;M<E;M++){const y=f.getX(M);Dc.fromBufferAttribute(x,y),Z0(Dc,y,h,a,e,t,this)}}else{const g=Math.max(0,c.start),m=Math.min(x.count,c.start+c.count);for(let M=g,E=m;M<E;M++)Dc.fromBufferAttribute(x,M),Z0(Dc,M,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const d=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}}function Z0(s,e,t,i,a,o,c){const d=Hh.distanceSqToPoint(s);if(d<t){const h=new Z;Hh.closestPointToPoint(s,h),h.applyMatrix4(i);const f=a.ray.origin.distanceTo(h);if(f<a.near||f>a.far)return;o.push({distance:f,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Dv extends Wn{constructor(e=[],t=Os,i,a,o,c,d,h,f,v){super(e,t,i,a,o,c,d,h,f,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t1 extends Wn{constructor(e,t,i,a,o,c,d,h,f){super(e,t,i,a,o,c,d,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oa extends Wn{constructor(e,t,i=lr,a,o,c,d=Gn,h=Gn,f,v=Lr,x=1){if(v!==Lr&&v!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:x};super(g,a,o,c,d,h,v,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class n1 extends Oa{constructor(e,t=lr,i=Os,a,o,c=Gn,d=Gn,h,f=Lr){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,i,a,o,c,d,h,f),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Uv extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rl extends kn{constructor(e=1,t=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const d=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const h=[],f=[],v=[],x=[];let g=0,m=0;M("z","y","x",-1,-1,i,t,e,c,o,0),M("z","y","x",1,-1,i,t,-e,c,o,1),M("x","z","y",1,1,e,i,t,a,c,2),M("x","z","y",1,-1,e,i,-t,a,c,3),M("x","y","z",1,-1,e,t,i,a,o,4),M("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(h),this.setAttribute("position",new pi(f,3)),this.setAttribute("normal",new pi(v,3)),this.setAttribute("uv",new pi(x,2));function M(E,y,S,R,P,L,k,F,V,T,I){const z=L/V,B=k/T,Y=L/2,se=k/2,de=F/2,W=V+1,J=T+1;let K=0,te=0;const le=new Z;for(let D=0;D<J;D++){const w=D*B-se;for(let H=0;H<W;H++){const ve=H*z-Y;le[E]=ve*R,le[y]=w*P,le[S]=de,f.push(le.x,le.y,le.z),le[E]=0,le[y]=0,le[S]=F>0?1:-1,v.push(le.x,le.y,le.z),x.push(H/V),x.push(1-D/T),K+=1}}for(let D=0;D<T;D++)for(let w=0;w<V;w++){const H=g+w+W*D,ve=g+w+W*(D+1),Ee=g+(w+1)+W*(D+1),Me=g+(w+1)+W*D;h.push(H,ve,Me),h.push(ve,Ee,Me),te+=6}d.addGroup(m,te,I),m+=te,g+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xp extends kn{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const o=[],c=[];d(a),f(i),v(),this.setAttribute("position",new pi(o,3)),this.setAttribute("normal",new pi(o.slice(),3)),this.setAttribute("uv",new pi(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function d(R){const P=new Z,L=new Z,k=new Z;for(let F=0;F<t.length;F+=3)m(t[F+0],P),m(t[F+1],L),m(t[F+2],k),h(P,L,k,R)}function h(R,P,L,k){const F=k+1,V=[];for(let T=0;T<=F;T++){V[T]=[];const I=R.clone().lerp(L,T/F),z=P.clone().lerp(L,T/F),B=F-T;for(let Y=0;Y<=B;Y++)Y===0&&T===F?V[T][Y]=I:V[T][Y]=I.clone().lerp(z,Y/B)}for(let T=0;T<F;T++)for(let I=0;I<2*(F-T)-1;I++){const z=Math.floor(I/2);I%2===0?(g(V[T][z+1]),g(V[T+1][z]),g(V[T][z])):(g(V[T][z+1]),g(V[T+1][z+1]),g(V[T+1][z]))}}function f(R){const P=new Z;for(let L=0;L<o.length;L+=3)P.x=o[L+0],P.y=o[L+1],P.z=o[L+2],P.normalize().multiplyScalar(R),o[L+0]=P.x,o[L+1]=P.y,o[L+2]=P.z}function v(){const R=new Z;for(let P=0;P<o.length;P+=3){R.x=o[P+0],R.y=o[P+1],R.z=o[P+2];const L=y(R)/2/Math.PI+.5,k=S(R)/Math.PI+.5;c.push(L,1-k)}M(),x()}function x(){for(let R=0;R<c.length;R+=6){const P=c[R+0],L=c[R+2],k=c[R+4],F=Math.max(P,L,k),V=Math.min(P,L,k);F>.9&&V<.1&&(P<.2&&(c[R+0]+=1),L<.2&&(c[R+2]+=1),k<.2&&(c[R+4]+=1))}}function g(R){o.push(R.x,R.y,R.z)}function m(R,P){const L=R*3;P.x=e[L+0],P.y=e[L+1],P.z=e[L+2]}function M(){const R=new Z,P=new Z,L=new Z,k=new Z,F=new It,V=new It,T=new It;for(let I=0,z=0;I<o.length;I+=9,z+=6){R.set(o[I+0],o[I+1],o[I+2]),P.set(o[I+3],o[I+4],o[I+5]),L.set(o[I+6],o[I+7],o[I+8]),F.set(c[z+0],c[z+1]),V.set(c[z+2],c[z+3]),T.set(c[z+4],c[z+5]),k.copy(R).add(P).add(L).divideScalar(3);const B=y(k);E(F,z+0,R,B),E(V,z+2,P,B),E(T,z+4,L,B)}}function E(R,P,L,k){k<0&&R.x===1&&(c[P]=R.x-1),L.x===0&&L.z===0&&(c[P]=k/2/Math.PI+.5)}function y(R){return Math.atan2(R.z,-R.x)}function S(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xp(e.vertices,e.indices,e.radius,e.detail)}}class vp extends xp{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new vp(e.radius,e.detail)}}class hu extends kn{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,c=t/2,d=Math.floor(i),h=Math.floor(a),f=d+1,v=h+1,x=e/d,g=t/h,m=[],M=[],E=[],y=[];for(let S=0;S<v;S++){const R=S*g-c;for(let P=0;P<f;P++){const L=P*x-o;M.push(L,-R,0),E.push(0,0,1),y.push(P/d),y.push(1-S/h)}}for(let S=0;S<h;S++)for(let R=0;R<d;R++){const P=R+f*S,L=R+f*(S+1),k=R+1+f*(S+1),F=R+1+f*S;m.push(P,L,F),m.push(L,k,F)}this.setIndex(m),this.setAttribute("position",new pi(M,3)),this.setAttribute("normal",new pi(E,3)),this.setAttribute("uv",new pi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}function ka(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const a=s[t][i];if(J0(a))a.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(J0(a[0])){const o=[];for(let c=0,d=a.length;c<d;c++)o[c]=a[c].clone();e[t][i]=o}else e[t][i]=a.slice();else e[t][i]=a}}return e}function ni(s){const e={};for(let t=0;t<s.length;t++){const i=ka(s[t]);for(const a in i)e[a]=i[a]}return e}function J0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function i1(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fv(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Wt.workingColorSpace}const r1={clone:ka,merge:ni};var s1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s1,this.fragmentShader=a1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ka(e.uniforms),this.uniformsGroups=i1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class o1 extends cr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gh extends ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class NC extends Gh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class l1 extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c1 extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Uc(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function u1(s){function e(a,o){return s[a]-s[o]}const t=s.length,i=new Array(t);for(let a=0;a!==t;++a)i[a]=a;return i.sort(e),i}function Q0(s,e,t){const i=s.length,a=new s.constructor(i);for(let o=0,c=0;c!==i;++o){const d=t[o]*e;for(let h=0;h!==e;++h)a[c++]=s[d+h]}return a}function Ov(s,e,t,i){let a=1,o=s[0];for(;o!==void 0&&o[i]===void 0;)o=s[a++];if(o===void 0)return;let c=o[i];if(c!==void 0)if(Array.isArray(c))do c=o[i],c!==void 0&&(e.push(o.time),t.push(...c)),o=s[a++];while(o!==void 0);else if(c.toArray!==void 0)do c=o[i],c!==void 0&&(e.push(o.time),c.toArray(t,t.length)),o=s[a++];while(o!==void 0);else do c=o[i],c!==void 0&&(e.push(o.time),t.push(c)),o=s[a++];while(o!==void 0)}class sl{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,a=t[i],o=t[i-1];e:{t:{let c;n:{i:if(!(e<a)){for(let d=i+2;;){if(a===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===d)break;if(o=a,a=t[++i],e<a)break t}c=t.length;break n}if(!(e>=o)){const d=t[1];e<d&&(i=2,o=d);for(let h=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(a=o,o=t[--i-1],e>=o)break t}c=i,i=0;break n}break e}for(;i<c;){const d=i+c>>>1;e<t[d]?c=d:i=d+1}if(a=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,a)}return this.interpolate_(i,o,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,o=e*a;for(let c=0;c!==a;++c)t[c]=i[o+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class d1 extends sl{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:m0,endingEnd:m0}}intervalChanged_(e,t,i){const a=this.parameterPositions;let o=e-2,c=e+1,d=a[o],h=a[c];if(d===void 0)switch(this.getSettings_().endingStart){case g0:o=e,d=2*t-i;break;case x0:o=a.length-2,d=t+a[o]-a[o+1];break;default:o=e,d=i}if(h===void 0)switch(this.getSettings_().endingEnd){case g0:c=e,h=2*i-t;break;case x0:c=1,h=i+a[1]-a[0];break;default:c=e-1,h=t}const f=(i-t)*.5,v=this.valueSize;this._weightPrev=f/(t-d),this._weightNext=f/(h-i),this._offsetPrev=o*v,this._offsetNext=c*v}interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=e*d,f=h-d,v=this._offsetPrev,x=this._offsetNext,g=this._weightPrev,m=this._weightNext,M=(i-t)/(a-t),E=M*M,y=E*M,S=-g*y+2*g*E-g*M,R=(1+g)*y+(-1.5-2*g)*E+(-.5+g)*M+1,P=(-1-m)*y+(1.5+m)*E+.5*M,L=m*y-m*E;for(let k=0;k!==d;++k)o[k]=S*c[v+k]+R*c[f+k]+P*c[h+k]+L*c[x+k];return o}}class f1 extends sl{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=e*d,f=h-d,v=(i-t)/(a-t),x=1-v;for(let g=0;g!==d;++g)o[g]=c[f+g]*x+c[h+g]*v;return o}}class h1 extends sl{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}}class p1 extends sl{interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=e*d,f=h-d,v=this.settings||this.DefaultSettings_,x=v.inTangents,g=v.outTangents;if(!x||!g){const E=(i-t)/(a-t),y=1-E;for(let S=0;S!==d;++S)o[S]=c[f+S]*y+c[h+S]*E;return o}const m=d*2,M=e-1;for(let E=0;E!==d;++E){const y=c[f+E],S=c[h+E],R=M*m+E*2,P=g[R],L=g[R+1],k=e*m+E*2,F=x[k],V=x[k+1];let T=(i-t)/(a-t),I,z,B,Y,se;for(let de=0;de<8;de++){I=T*T,z=I*T,B=1-T,Y=B*B,se=Y*B;const J=se*t+3*Y*T*P+3*B*I*F+z*a-i;if(Math.abs(J)<1e-10)break;const K=3*Y*(P-t)+6*B*T*(F-P)+3*I*(a-F);if(Math.abs(K)<1e-10)break;T=T-J/K,T=Math.max(0,Math.min(1,T))}o[E]=se*y+3*Y*T*L+3*B*I*V+z*S}return o}}class $i{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Uc(t,this.TimeBufferType),this.values=Uc(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Uc(e.times,Array),values:Uc(e.values,Array)};const a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new h1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new f1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new d1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new p1(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Qc:t=this.InterpolantFactoryMethodDiscrete;break;case kh:t=this.InterpolantFactoryMethodLinear;break;case sf:t=this.InterpolantFactoryMethodSmooth;break;case p0:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ct("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qc;case this.InterpolantFactoryMethodLinear:return kh;case this.InterpolantFactoryMethodSmooth:return sf;case this.InterpolantFactoryMethodBezier:return p0}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){const i=this.times,a=i.length;let o=0,c=a-1;for(;o!==a&&i[o]<e;)++o;for(;c!==-1&&i[c]>t;)--c;if(++c,o!==0||c!==a){o>=c&&(c=Math.max(c,1),o=c-1);const d=this.getValueSize();this.times=i.slice(o,c),this.values=this.values.slice(o*d,c*d)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(gt("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,a=this.values,o=i.length;o===0&&(gt("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let d=0;d!==o;d++){const h=i[d];if(typeof h=="number"&&isNaN(h)){gt("KeyframeTrack: Time is not a valid number.",this,d,h),e=!1;break}if(c!==null&&c>h){gt("KeyframeTrack: Out of order keys.",this,d,h,c),e=!1;break}c=h}if(a!==void 0&&ab(a))for(let d=0,h=a.length;d!==h;++d){const f=a[d];if(isNaN(f)){gt("KeyframeTrack: Value is not a valid number.",this,d,f),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===sf,o=e.length-1;let c=1;for(let d=1;d<o;++d){let h=!1;const f=e[d],v=e[d+1];if(f!==v&&(d!==1||f!==e[0]))if(a)h=!0;else{const x=d*i,g=x-i,m=x+i;for(let M=0;M!==i;++M){const E=t[x+M];if(E!==t[g+M]||E!==t[m+M]){h=!0;break}}}if(h){if(d!==c){e[c]=e[d];const x=d*i,g=c*i;for(let m=0;m!==i;++m)t[g+m]=t[x+m]}++c}}if(o>0){e[c]=e[o];for(let d=o*i,h=c*i,f=0;f!==i;++f)t[h+f]=t[d+f];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}}$i.prototype.ValueTypeName="";$i.prototype.TimeBufferType=Float32Array;$i.prototype.ValueBufferType=Float32Array;$i.prototype.DefaultInterpolation=kh;class Va extends $i{constructor(e,t,i){super(e,t,i)}}Va.prototype.ValueTypeName="bool";Va.prototype.ValueBufferType=Array;Va.prototype.DefaultInterpolation=Qc;Va.prototype.InterpolantFactoryMethodLinear=void 0;Va.prototype.InterpolantFactoryMethodSmooth=void 0;class kv extends $i{constructor(e,t,i,a){super(e,t,i,a)}}kv.prototype.ValueTypeName="color";class au extends $i{constructor(e,t,i,a){super(e,t,i,a)}}au.prototype.ValueTypeName="number";class m1 extends sl{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const o=this.resultBuffer,c=this.sampleValues,d=this.valueSize,h=(i-t)/(a-t);let f=e*d;for(let v=f+d;f!==v;f+=4)hs.slerpFlat(o,0,c,f-d,c,f,h);return o}}class pu extends $i{constructor(e,t,i,a){super(e,t,i,a)}InterpolantFactoryMethodLinear(e){return new m1(this.times,this.values,this.getValueSize(),e)}}pu.prototype.ValueTypeName="quaternion";pu.prototype.InterpolantFactoryMethodSmooth=void 0;class Ha extends $i{constructor(e,t,i){super(e,t,i)}}Ha.prototype.ValueTypeName="string";Ha.prototype.ValueBufferType=Array;Ha.prototype.DefaultInterpolation=Qc;Ha.prototype.InterpolantFactoryMethodLinear=void 0;Ha.prototype.InterpolantFactoryMethodSmooth=void 0;class ou extends $i{constructor(e,t,i,a){super(e,t,i,a)}}ou.prototype.ValueTypeName="vector";class IC{constructor(e="",t=-1,i=[],a=KM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=a,this.uuid=Xi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,a=1/(e.fps||1);for(let c=0,d=i.length;c!==d;++c)t.push(x1(i[c]).scale(a));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],i=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,c=i.length;o!==c;++o)t.push($i.toJSON(i[o]));return a}static CreateFromMorphTargetSequence(e,t,i,a){const o=t.length,c=[];for(let d=0;d<o;d++){let h=[],f=[];h.push((d+o-1)%o,d,(d+1)%o),f.push(0,1,0);const v=u1(h);h=Q0(h,1,v),f=Q0(f,1,v),!a&&h[0]===0&&(h.push(o),f.push(f[0])),c.push(new au(".morphTargetInfluences["+t[d].name+"]",h,f).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const a=e;i=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<i.length;a++)if(i[a].name===t)return i[a];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const a={},o=/^([\w-]*?)([\d]+)$/;for(let d=0,h=e.length;d<h;d++){const f=e[d],v=f.name.match(o);if(v&&v.length>1){const x=v[1];let g=a[x];g||(a[x]=g=[]),g.push(f)}}const c=[];for(const d in a)c.push(this.CreateFromMorphTargetSequence(d,a[d],t,i));return c}static parseAnimation(e,t){if(ct("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return gt("AnimationClip: No animation in JSONLoader data."),null;const i=function(x,g,m,M,E){if(m.length!==0){const y=[],S=[];Ov(m,y,S,M),y.length!==0&&E.push(new x(g,y,S))}},a=[],o=e.name||"default",c=e.fps||30,d=e.blendMode;let h=e.length||-1;const f=e.hierarchy||[];for(let x=0;x<f.length;x++){const g=f[x].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const m={};let M;for(M=0;M<g.length;M++)if(g[M].morphTargets)for(let E=0;E<g[M].morphTargets.length;E++)m[g[M].morphTargets[E]]=-1;for(const E in m){const y=[],S=[];for(let R=0;R!==g[M].morphTargets.length;++R){const P=g[M];y.push(P.time),S.push(P.morphTarget===E?1:0)}a.push(new au(".morphTargetInfluence["+E+"]",y,S))}h=m.length*c}else{const m=".bones["+t[x].name+"]";i(ou,m+".position",g,"pos",a),i(pu,m+".quaternion",g,"rot",a),i(ou,m+".scale",g,"scl",a)}}return a.length===0?null:new this(o,h,a,d)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,a=e.length;i!==a;++i){const o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function g1(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return au;case"vector":case"vector2":case"vector3":case"vector4":return ou;case"color":return kv;case"quaternion":return pu;case"bool":case"boolean":return Va;case"string":return Ha}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function x1(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=g1(s.type);if(s.times===void 0){const t=[],i=[];Ov(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Ar={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(ex(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!ex(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function ex(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class v1{constructor(e,t,i){const a=this;let o=!1,c=0,d=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(v){d++,o===!1&&a.onStart!==void 0&&a.onStart(v,c,d),o=!0},this.itemEnd=function(v){c++,a.onProgress!==void 0&&a.onProgress(v,c,d),c===d&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(v){a.onError!==void 0&&a.onError(v)},this.resolveURL=function(v){return h?h(v):v},this.setURLModifier=function(v){return h=v,this},this.addHandler=function(v,x){return f.push(v,x),this},this.removeHandler=function(v){const x=f.indexOf(v);return x!==-1&&f.splice(x,2),this},this.getHandler=function(v){for(let x=0,g=f.length;x<g;x+=2){const m=f[x],M=f[x+1];if(m.global&&(m.lastIndex=0),m.test(v))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _1=new v1;class al{constructor(e){this.manager=e!==void 0?e:_1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}al.DEFAULT_MATERIAL_NAME="__DEFAULT";const Er={};class y1 extends Error{constructor(e,t){super(e),this.response=t}}class LC extends al{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Ar.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(Er[e]!==void 0){Er[e].push({onLoad:t,onProgress:i,onError:a});return}Er[e]=[],Er[e].push({onLoad:t,onProgress:i,onError:a});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,h=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&ct("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const v=Er[e],x=f.body.getReader(),g=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),m=g?parseInt(g):0,M=m!==0;let E=0;const y=new ReadableStream({start(S){R();function R(){x.read().then(({done:P,value:L})=>{if(P)S.close();else{E+=L.byteLength;const k=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:m});for(let F=0,V=v.length;F<V;F++){const T=v[F];T.onProgress&&T.onProgress(k)}S.enqueue(L),R()}},P=>{S.error(P)})}}});return new Response(y)}else throw new y1(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(v=>new DOMParser().parseFromString(v,d));case"json":return f.json();default:if(d==="")return f.text();{const x=/charset="?([^;"\s]*)"?/i.exec(d),g=x&&x[1]?x[1].toLowerCase():void 0,m=new TextDecoder(g);return f.arrayBuffer().then(M=>m.decode(M))}}}).then(f=>{Ar.add(`file:${e}`,f);const v=Er[e];delete Er[e];for(let x=0,g=v.length;x<g;x++){const m=v[x];m.onLoad&&m.onLoad(f)}}).catch(f=>{const v=Er[e];if(v===void 0)throw this.manager.itemError(e),f;delete Er[e];for(let x=0,g=v.length;x<g;x++){const m=v[x];m.onError&&m.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ta=new WeakMap;class S1 extends al{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Ar.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0);else{let x=Ta.get(c);x===void 0&&(x=[],Ta.set(c,x)),x.push({onLoad:t,onError:a})}return c}const d=Jo("img");function h(){v(),t&&t(this);const x=Ta.get(this)||[];for(let g=0;g<x.length;g++){const m=x[g];m.onLoad&&m.onLoad(this)}Ta.delete(this),o.manager.itemEnd(e)}function f(x){v(),a&&a(x),Ar.remove(`image:${e}`);const g=Ta.get(this)||[];for(let m=0;m<g.length;m++){const M=g[m];M.onError&&M.onError(x)}Ta.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function v(){d.removeEventListener("load",h,!1),d.removeEventListener("error",f,!1)}return d.addEventListener("load",h,!1),d.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Ar.add(`image:${e}`,d),o.manager.itemStart(e),d.src=e,d}}class DC extends al{constructor(e){super(e)}load(e,t,i,a){const o=new Wn,c=new S1(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){o.image=d,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class mu extends bn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Lf=new Ot,tx=new Z,nx=new Z;class _p{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;tx.setFromMatrixPosition(e.matrixWorld),t.position.copy(tx),nx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nx),t.updateMatrixWorld(),Lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Zo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Fc=new Z,Oc=new hs,er=new Z;class Bv extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=rr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fc,Oc,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Oc,er.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Fc,Oc,er),er.x===1&&er.y===1&&er.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fc,Oc,er.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const os=new Z,ix=new It,rx=new It;class fi extends Bv{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(os.x,os.y).multiplyScalar(-e/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(os.x,os.y).multiplyScalar(-e/os.z)}getViewSize(e,t){return this.getViewBounds(e,ix,rx),t.subVectors(rx,ix)}setViewOffset(e,t,i,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xo*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;o+=c.offsetX*a/h,t-=c.offsetY*i/f,a*=c.width/h,i*=c.height/f}const d=this.filmOffset;d!==0&&(o+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class M1 extends _p{constructor(){super(new fi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Fa*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(i!==t.fov||a!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=a,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class UC extends mu{constructor(e,t,i=0,a=Math.PI/3,o=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.distance=i,this.angle=a,this.penumbra=o,this.decay=c,this.map=null,this.shadow=new M1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class b1 extends _p{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0}}class FC extends mu{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new b1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class yp extends Bv{constructor(e=-1,t=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,c=i+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,d-=v*this.view.offsetY,h=d-v*this.view.height}this.projectionMatrix.makeOrthographic(o,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class E1 extends _p{constructor(){super(new yp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sx extends mu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new E1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class w1 extends mu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class OC{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Df=new WeakMap;class kC extends al{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ct("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ct("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=Ar.get(`image-bitmap:${e}`);if(c!==void 0){if(o.manager.itemStart(e),c.then){c.then(f=>{Df.has(c)===!0?(a&&a(Df.get(c)),o.manager.itemError(e),o.manager.itemEnd(e)):(t&&t(f),o.manager.itemEnd(e))});return}setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0);return}const d={};d.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",d.headers=this.requestHeader,d.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const h=fetch(e,d).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(f){Ar.add(`image-bitmap:${e}`,f),t&&t(f),o.manager.itemEnd(e)}).catch(function(f){a&&a(f),Df.set(h,f),Ar.remove(`image-bitmap:${e}`),o.manager.itemError(e),o.manager.itemEnd(e)});Ar.add(`image-bitmap:${e}`,h),o.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Aa=-90,Ra=1;class T1 extends bn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new fi(Aa,Ra,e,t);a.layers=this.layers,this.add(a);const o=new fi(Aa,Ra,e,t);o.layers=this.layers,this.add(o);const c=new fi(Aa,Ra,e,t);c.layers=this.layers,this.add(c);const d=new fi(Aa,Ra,e,t);d.layers=this.layers,this.add(d);const h=new fi(Aa,Ra,e,t);h.layers=this.layers,this.add(h);const f=new fi(Aa,Ra,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,c,d,h]=t;for(const f of t)this.remove(f);if(e===rr)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Zo)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,d,h,f,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,g,m),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class A1 extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sp="\\[\\]\\.:\\/",R1=new RegExp("["+Sp+"]","g"),Mp="[^"+Sp+"]",C1="[^"+Sp.replace("\\.","")+"]",P1=/((?:WC+[\/:])*)/.source.replace("WC",Mp),N1=/(WCOD+)?/.source.replace("WCOD",C1),I1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mp),L1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mp),D1=new RegExp("^"+P1+N1+I1+L1+"$"),U1=["material","materials","bones","map"];class F1{constructor(e,t,i){const a=i||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=i.length;a!==o;++a)i[a].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class an{constructor(e,t,i){this.path=t,this.parsedPath=i||an.parseTrackName(t),this.node=an.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new an.Composite(e,t,i):new an(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(R1,"")}static parseTrackName(e){const t=D1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){const o=i.nodeName.substring(a+1);U1.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(o){for(let c=0;c<o.length;c++){const d=o[c];if(d.name===t||d.uuid===t)return d;const h=i(d.children);if(h)return h}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,a=t.propertyName;let o=t.propertyIndex;if(e||(e=an.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ct("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let f=t.objectIndex;switch(i){case"materials":if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let v=0;v<e.length;v++)if(e[v].name===f){f=v;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(f!==void 0){if(e[f]===void 0){gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[f]}}const c=e[a];if(c===void 0){const f=t.nodeName;gt("PropertyBinding: Trying to update property for track: "+f+"."+a+" but it wasn't found.",e);return}let d=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?d=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(d=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(o!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=o}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=a;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][d]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}an.Composite=F1;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ax=new Ot;class O1{constructor(e,t,i=0,a=1/0){this.ray=new il(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new hp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):gt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ax.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ax),this}intersectObject(e,t=!0,i=[]){return Wh(e,this,i,t),i.sort(ox),i}intersectObjects(e,t=!0,i=[]){for(let a=0,o=e.length;a<o;a++)Wh(e[a],this,i,t);return i.sort(ox),i}}function ox(s,e){return s.distance-e.distance}function Wh(s,e,t,i){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const o=s.children;for(let c=0,d=o.length;c<d;c++)Wh(o[c],e,t,!0)}}const Rp=class Rp{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=a,this}};Rp.prototype.isMatrix2=!0;let lx=Rp;function cx(s,e,t,i){const a=k1(i);switch(t){case Mv:return s*e;case sp:return s*e/a.components*a.byteLength;case ap:return s*e/a.components*a.byteLength;case ks:return s*e*2/a.components*a.byteLength;case op:return s*e*2/a.components*a.byteLength;case bv:return s*e*3/a.components*a.byteLength;case Ii:return s*e*4/a.components*a.byteLength;case lp:return s*e*4/a.components*a.byteLength;case Gc:case Wc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jc:case Xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ch:case dh:return Math.max(s,16)*Math.max(e,8)/4;case lh:case uh:return Math.max(s,8)*Math.max(e,8)/2;case fh:case hh:case mh:case gh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ph:case Zc:case xh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case yh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Th:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ph:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ih:case Lh:case Dh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Uh:case Fh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jc:case Oh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function k1(s){switch(s){case Mi:case vv:return{byteLength:1,components:1};case qo:case _v:case Ir:return{byteLength:2,components:1};case ip:case rp:return{byteLength:2,components:4};case lr:case np:case Ni:return{byteLength:4,components:1};case yv:case Sv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ep}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ep);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zv(){let s=null,e=!1,t=null,i=null;function a(o,c){t(o,c),i=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function B1(s){const e=new WeakMap;function t(d,h){const f=d.array,v=d.usage,x=f.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,f,v),d.onUploadCallback();let m;if(f instanceof Float32Array)m=s.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)m=s.HALF_FLOAT;else if(f instanceof Uint16Array)d.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=s.SHORT;else if(f instanceof Uint32Array)m=s.UNSIGNED_INT;else if(f instanceof Int32Array)m=s.INT;else if(f instanceof Int8Array)m=s.BYTE;else if(f instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:x}}function i(d,h,f){const v=h.array,x=h.updateRanges;if(s.bindBuffer(f,d),x.length===0)s.bufferSubData(f,0,v);else{x.sort((m,M)=>m.start-M.start);let g=0;for(let m=1;m<x.length;m++){const M=x[g],E=x[m];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,x[g]=E)}x.length=g+1;for(let m=0,M=x.length;m<M;m++){const E=x[m];s.bufferSubData(f,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const f=e.get(d);if(f===void 0)e.set(d,t(d,h));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,d,h),f.version=d.version}}return{get:a,remove:o,update:c}}var z1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V1=`#ifdef USE_ALPHAHASH
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
#endif`,H1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X1=`#ifdef USE_AOMAP
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
#endif`,$1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Y1=`#ifdef USE_BATCHING
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
#endif`,q1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q1=`#ifdef USE_IRIDESCENCE
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
#endif`,eE=`#ifdef USE_BUMPMAP
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
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cE=`#define PI 3.141592653589793
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
} // validated`,uE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dE=`vec3 transformedNormal = objectNormal;
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
#endif`,fE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gE="gl_FragColor = linearToOutputTexel( gl_FragColor );",xE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vE=`#ifdef USE_ENVMAP
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
#endif`,_E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
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
#endif`,SE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
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
#endif`,bE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AE=`#ifdef USE_GRADIENTMAP
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
}`,RE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,IE=`#ifdef USE_ENVMAP
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
#endif`,LE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OE=`PhysicalMaterial material;
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
#endif`,kE=`uniform sampler2D dfgLUT;
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
}`,BE=`
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
#endif`,zE=`#if defined( RE_IndirectDiffuse )
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
#endif`,VE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,GE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KE=`#if defined( USE_POINTS_UV )
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
#endif`,ZE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ew=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nw=`#ifdef USE_MORPHTARGETS
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
#endif`,iw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cw=`#ifdef USE_NORMALMAP
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
#endif`,uw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_w=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ew=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ww=`float getShadowMask() {
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
}`,Tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Aw=`#ifdef USE_SKINNING
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
#endif`,Rw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cw=`#ifdef USE_SKINNING
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
#endif`,Pw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dw=`#ifdef USE_TRANSMISSION
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
#endif`,Uw=`#ifdef USE_TRANSMISSION
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
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vw=`uniform sampler2D t2D;
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
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xw=`#include <common>
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
}`,$w=`#if DEPTH_PACKING == 3200
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
}`,Yw=`#define DISTANCE
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
}`,qw=`#define DISTANCE
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
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jw=`uniform float scale;
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
}`,Qw=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,tT=`uniform vec3 diffuse;
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
}`,nT=`#define LAMBERT
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
}`,iT=`#define LAMBERT
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
}`,rT=`#define MATCAP
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
}`,sT=`#define MATCAP
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
}`,aT=`#define NORMAL
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
}`,oT=`#define NORMAL
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
}`,lT=`#define PHONG
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
}`,cT=`#define PHONG
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
}`,uT=`#define STANDARD
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
}`,dT=`#define STANDARD
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
}`,fT=`#define TOON
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
}`,hT=`#define TOON
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
}`,pT=`uniform float size;
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,xT=`uniform vec3 color;
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
}`,vT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,Dt={alphahash_fragment:z1,alphahash_pars_fragment:V1,alphamap_fragment:H1,alphamap_pars_fragment:G1,alphatest_fragment:W1,alphatest_pars_fragment:j1,aomap_fragment:X1,aomap_pars_fragment:$1,batching_pars_vertex:Y1,batching_vertex:q1,begin_vertex:K1,beginnormal_vertex:Z1,bsdfs:J1,iridescence_fragment:Q1,bumpmap_pars_fragment:eE,clipping_planes_fragment:tE,clipping_planes_pars_fragment:nE,clipping_planes_pars_vertex:iE,clipping_planes_vertex:rE,color_fragment:sE,color_pars_fragment:aE,color_pars_vertex:oE,color_vertex:lE,common:cE,cube_uv_reflection_fragment:uE,defaultnormal_vertex:dE,displacementmap_pars_vertex:fE,displacementmap_vertex:hE,emissivemap_fragment:pE,emissivemap_pars_fragment:mE,colorspace_fragment:gE,colorspace_pars_fragment:xE,envmap_fragment:vE,envmap_common_pars_fragment:_E,envmap_pars_fragment:yE,envmap_pars_vertex:SE,envmap_physical_pars_fragment:IE,envmap_vertex:ME,fog_vertex:bE,fog_pars_vertex:EE,fog_fragment:wE,fog_pars_fragment:TE,gradientmap_pars_fragment:AE,lightmap_pars_fragment:RE,lights_lambert_fragment:CE,lights_lambert_pars_fragment:PE,lights_pars_begin:NE,lights_toon_fragment:LE,lights_toon_pars_fragment:DE,lights_phong_fragment:UE,lights_phong_pars_fragment:FE,lights_physical_fragment:OE,lights_physical_pars_fragment:kE,lights_fragment_begin:BE,lights_fragment_maps:zE,lights_fragment_end:VE,lightprobes_pars_fragment:HE,logdepthbuf_fragment:GE,logdepthbuf_pars_fragment:WE,logdepthbuf_pars_vertex:jE,logdepthbuf_vertex:XE,map_fragment:$E,map_pars_fragment:YE,map_particle_fragment:qE,map_particle_pars_fragment:KE,metalnessmap_fragment:ZE,metalnessmap_pars_fragment:JE,morphinstance_vertex:QE,morphcolor_vertex:ew,morphnormal_vertex:tw,morphtarget_pars_vertex:nw,morphtarget_vertex:iw,normal_fragment_begin:rw,normal_fragment_maps:sw,normal_pars_fragment:aw,normal_pars_vertex:ow,normal_vertex:lw,normalmap_pars_fragment:cw,clearcoat_normal_fragment_begin:uw,clearcoat_normal_fragment_maps:dw,clearcoat_pars_fragment:fw,iridescence_pars_fragment:hw,opaque_fragment:pw,packing:mw,premultiplied_alpha_fragment:gw,project_vertex:xw,dithering_fragment:vw,dithering_pars_fragment:_w,roughnessmap_fragment:yw,roughnessmap_pars_fragment:Sw,shadowmap_pars_fragment:Mw,shadowmap_pars_vertex:bw,shadowmap_vertex:Ew,shadowmask_pars_fragment:ww,skinbase_vertex:Tw,skinning_pars_vertex:Aw,skinning_vertex:Rw,skinnormal_vertex:Cw,specularmap_fragment:Pw,specularmap_pars_fragment:Nw,tonemapping_fragment:Iw,tonemapping_pars_fragment:Lw,transmission_fragment:Dw,transmission_pars_fragment:Uw,uv_pars_fragment:Fw,uv_pars_vertex:Ow,uv_vertex:kw,worldpos_vertex:Bw,background_vert:zw,background_frag:Vw,backgroundCube_vert:Hw,backgroundCube_frag:Gw,cube_vert:Ww,cube_frag:jw,depth_vert:Xw,depth_frag:$w,distance_vert:Yw,distance_frag:qw,equirect_vert:Kw,equirect_frag:Zw,linedashed_vert:Jw,linedashed_frag:Qw,meshbasic_vert:eT,meshbasic_frag:tT,meshlambert_vert:nT,meshlambert_frag:iT,meshmatcap_vert:rT,meshmatcap_frag:sT,meshnormal_vert:aT,meshnormal_frag:oT,meshphong_vert:lT,meshphong_frag:cT,meshphysical_vert:uT,meshphysical_frag:dT,meshtoon_vert:fT,meshtoon_frag:hT,points_vert:pT,points_frag:mT,shadow_vert:gT,shadow_frag:xT,sprite_vert:vT,sprite_frag:_T},Xe={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},nr={basic:{uniforms:ni([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:ni([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:ni([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:ni([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:ni([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:ni([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:ni([Xe.points,Xe.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:ni([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:ni([Xe.common,Xe.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:ni([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:ni([Xe.sprite,Xe.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distance:{uniforms:ni([Xe.common,Xe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distance_vert,fragmentShader:Dt.distance_frag},shadow:{uniforms:ni([Xe.lights,Xe.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};nr.physical={uniforms:ni([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const kc={r:0,b:0,g:0},yT=new Ot,Vv=new Nt;Vv.set(-1,0,0,0,1,0,0,0,1);function ST(s,e,t,i,a,o){const c=new Ht(0);let d=a===!0?0:1,h,f,v=null,x=0,g=null;function m(R){let P=R.isScene===!0?R.background:null;if(P&&P.isTexture){const L=R.backgroundBlurriness>0;P=e.get(P,L)}return P}function M(R){let P=!1;const L=m(R);L===null?y(c,d):L&&L.isColor&&(y(L,1),P=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?t.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(R,P){const L=m(P);L&&(L.isCubeTexture||L.mapping===fu)?(f===void 0&&(f=new mi(new rl(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:ka(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(k,F,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=L,f.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(yT.makeRotationFromEuler(P.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Vv),f.material.toneMapped=Wt.getTransfer(L.colorSpace)!==nn,(v!==L||x!==L.version||g!==s.toneMapping)&&(f.material.needsUpdate=!0,v=L,x=L.version,g=s.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new mi(new hu(2,2),new cr({name:"BackgroundMaterial",uniforms:ka(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=Wt.getTransfer(L.colorSpace)!==nn,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||x!==L.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=L,x=L.version,g=s.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function y(R,P){R.getRGB(kc,Fv(s)),t.buffers.color.setClear(kc.r,kc.g,kc.b,P,o)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,P=1){c.set(R),d=P,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,y(c,d)},render:M,addToRenderList:E,dispose:S}}function MT(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=g(null);let o=a,c=!1;function d(B,Y,se,de,W){let J=!1;const K=x(B,de,se,Y);o!==K&&(o=K,f(o.object)),J=m(B,de,se,W),J&&M(B,de,se,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(J||c)&&(c=!1,L(B,Y,se,de),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function h(){return s.createVertexArray()}function f(B){return s.bindVertexArray(B)}function v(B){return s.deleteVertexArray(B)}function x(B,Y,se,de){const W=de.wireframe===!0;let J=i[Y.id];J===void 0&&(J={},i[Y.id]=J);const K=B.isInstancedMesh===!0?B.id:0;let te=J[K];te===void 0&&(te={},J[K]=te);let le=te[se.id];le===void 0&&(le={},te[se.id]=le);let D=le[W];return D===void 0&&(D=g(h()),le[W]=D),D}function g(B){const Y=[],se=[],de=[];for(let W=0;W<t;W++)Y[W]=0,se[W]=0,de[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:se,attributeDivisors:de,object:B,attributes:{},index:null}}function m(B,Y,se,de){const W=o.attributes,J=Y.attributes;let K=0;const te=se.getAttributes();for(const le in te)if(te[le].location>=0){const w=W[le];let H=J[le];if(H===void 0&&(le==="instanceMatrix"&&B.instanceMatrix&&(H=B.instanceMatrix),le==="instanceColor"&&B.instanceColor&&(H=B.instanceColor)),w===void 0||w.attribute!==H||H&&w.data!==H.data)return!0;K++}return o.attributesNum!==K||o.index!==de}function M(B,Y,se,de){const W={},J=Y.attributes;let K=0;const te=se.getAttributes();for(const le in te)if(te[le].location>=0){let w=J[le];w===void 0&&(le==="instanceMatrix"&&B.instanceMatrix&&(w=B.instanceMatrix),le==="instanceColor"&&B.instanceColor&&(w=B.instanceColor));const H={};H.attribute=w,w&&w.data&&(H.data=w.data),W[le]=H,K++}o.attributes=W,o.attributesNum=K,o.index=de}function E(){const B=o.newAttributes;for(let Y=0,se=B.length;Y<se;Y++)B[Y]=0}function y(B){S(B,0)}function S(B,Y){const se=o.newAttributes,de=o.enabledAttributes,W=o.attributeDivisors;se[B]=1,de[B]===0&&(s.enableVertexAttribArray(B),de[B]=1),W[B]!==Y&&(s.vertexAttribDivisor(B,Y),W[B]=Y)}function R(){const B=o.newAttributes,Y=o.enabledAttributes;for(let se=0,de=Y.length;se<de;se++)Y[se]!==B[se]&&(s.disableVertexAttribArray(se),Y[se]=0)}function P(B,Y,se,de,W,J,K){K===!0?s.vertexAttribIPointer(B,Y,se,W,J):s.vertexAttribPointer(B,Y,se,de,W,J)}function L(B,Y,se,de){E();const W=de.attributes,J=se.getAttributes(),K=Y.defaultAttributeValues;for(const te in J){const le=J[te];if(le.location>=0){let D=W[te];if(D===void 0&&(te==="instanceMatrix"&&B.instanceMatrix&&(D=B.instanceMatrix),te==="instanceColor"&&B.instanceColor&&(D=B.instanceColor)),D!==void 0){const w=D.normalized,H=D.itemSize,ve=e.get(D);if(ve===void 0)continue;const Ee=ve.buffer,Me=ve.type,ee=ve.bytesPerElement,re=Me===s.INT||Me===s.UNSIGNED_INT||D.gpuType===np;if(D.isInterleavedBufferAttribute){const ce=D.data,ge=ce.stride,Oe=D.offset;if(ce.isInstancedInterleavedBuffer){for(let Ie=0;Ie<le.locationSize;Ie++)S(le.location+Ie,ce.meshPerAttribute);B.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ie=0;Ie<le.locationSize;Ie++)y(le.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Ie=0;Ie<le.locationSize;Ie++)P(le.location+Ie,H/le.locationSize,Me,w,ge*ee,(Oe+H/le.locationSize*Ie)*ee,re)}else{if(D.isInstancedBufferAttribute){for(let ce=0;ce<le.locationSize;ce++)S(le.location+ce,D.meshPerAttribute);B.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ce=0;ce<le.locationSize;ce++)y(le.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let ce=0;ce<le.locationSize;ce++)P(le.location+ce,H/le.locationSize,Me,w,H*ee,H/le.locationSize*ce*ee,re)}}else if(K!==void 0){const w=K[te];if(w!==void 0)switch(w.length){case 2:s.vertexAttrib2fv(le.location,w);break;case 3:s.vertexAttrib3fv(le.location,w);break;case 4:s.vertexAttrib4fv(le.location,w);break;default:s.vertexAttrib1fv(le.location,w)}}}}R()}function k(){I();for(const B in i){const Y=i[B];for(const se in Y){const de=Y[se];for(const W in de){const J=de[W];for(const K in J)v(J[K].object),delete J[K];delete de[W]}}delete i[B]}}function F(B){if(i[B.id]===void 0)return;const Y=i[B.id];for(const se in Y){const de=Y[se];for(const W in de){const J=de[W];for(const K in J)v(J[K].object),delete J[K];delete de[W]}}delete i[B.id]}function V(B){for(const Y in i){const se=i[Y];for(const de in se){const W=se[de];if(W[B.id]===void 0)continue;const J=W[B.id];for(const K in J)v(J[K].object),delete J[K];delete W[B.id]}}}function T(B){for(const Y in i){const se=i[Y],de=B.isInstancedMesh===!0?B.id:0,W=se[de];if(W!==void 0){for(const J in W){const K=W[J];for(const te in K)v(K[te].object),delete K[te];delete W[J]}delete se[de],Object.keys(se).length===0&&delete i[Y]}}}function I(){z(),c=!0,o!==a&&(o=a,f(o.object))}function z(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:I,resetDefaultState:z,dispose:k,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:V,initAttributes:E,enableAttribute:y,disableUnusedAttributes:R}}function bT(s,e,t){let i;function a(h){i=h}function o(h,f){s.drawArrays(i,h,f),t.update(f,i,1)}function c(h,f,v){v!==0&&(s.drawArraysInstanced(i,h,f,v),t.update(f,i,v))}function d(h,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,v);let g=0;for(let m=0;m<v;m++)g+=f[m];t.update(g,i,1)}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=d}function ET(s,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(V){return!(V!==Ii&&i.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const T=V===Ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Mi&&i.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Ni&&!T)}function h(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const v=h(f);v!==f&&(ct("WebGLRenderer:",f,"not supported, using",v,"instead."),f=v);const x=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:f,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:L,maxSamples:k,samples:F}}function wT(s){const e=this;let t=null,i=0,a=!1,o=!1;const c=new Is,d=new Nt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const m=x.length!==0||g||i!==0||a;return a=g,i=x.length,m},this.beginShadows=function(){o=!0,v(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(x,g){t=v(x,g,0)},this.setState=function(x,g,m){const M=x.clippingPlanes,E=x.clipIntersection,y=x.clipShadows,S=s.get(x);if(!a||M===null||M.length===0||o&&!y)o?v(null):f();else{const R=o?0:i,P=R*4;let L=S.clippingState||null;h.value=L,L=v(M,g,P,m);for(let k=0;k!==P;++k)L[k]=t[k];S.clippingState=L,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function v(x,g,m,M){const E=x!==null?x.length:0;let y=null;if(E!==0){if(y=h.value,M!==!0||y===null){const S=m+E*4,R=g.matrixWorldInverse;d.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let P=0,L=m;P!==E;++P,L+=4)c.copy(x[P]).applyMatrix4(R,d),c.normal.toArray(y,L),y[L+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}const us=4,ux=[.125,.215,.35,.446,.526,.582],Ds=20,TT=256,Fo=new yp,dx=new Ht;let Uf=null,Ff=0,Of=0,kf=!1;const AT=new Z;class fx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,o={}){const{size:c=256,position:d=AT}=o;Uf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,a,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=px(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf,Ff,Of),this._renderer.xr.enabled=kf,e.scissorTest=!1,Ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Ir,format:Ii,colorSpace:eu,depthBuffer:!1},a=hx(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hx(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RT(o)),this._blurMaterial=PT(o,e,t),this._ggxMaterial=CT(o,e,t)}return a}_compileMaterial(e){const t=new mi(new kn,e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,i,a,o){const h=new fi(90,1,t,i),f=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,m=x.toneMapping;x.getClearColor(dx),x.toneMapping=sr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(a),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mi(new rl,new pp({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,y=E.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy(dx),S=!0);for(let P=0;P<6;P++){const L=P%3;L===0?(h.up.set(0,f[P],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+v[P],o.y,o.z)):L===1?(h.up.set(0,0,f[P]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+v[P],o.z)):(h.up.set(0,f[P],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+v[P]));const k=this._cubeSize;Ca(a,L*k,P>2?k:0,k,k),x.setRenderTarget(a),S&&x.render(E,h),x.render(e,h)}x.toneMapping=m,x.autoClear=g,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Os||e.mapping===Ua;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=mx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=px());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const d=o.uniforms;d.envMap.value=e;const h=this._cubeSize;Ca(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Fo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,f=i/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(f*f-v*v),g=0+f*1.25,m=x*g,{_lodMax:M}=this,E=this._sizeLods[i],y=3*E*(i>M-us?i-M+us:0),S=4*(this._cubeSize-E);h.envMap.value=e.texture,h.roughness.value=m,h.mipInt.value=M-t,Ca(o,y,S,3*E,2*E),a.setRenderTarget(o),a.render(d,Fo),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=M-i,Ca(e,y,S,3*E,2*E),a.setRenderTarget(e),a.render(d,Fo)}_blur(e,t,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",o),this._halfBlur(c,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,c,d){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[a];x.material=f;const g=f.uniforms,m=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Ds-1),E=o/M,y=isFinite(o)?1+Math.floor(v*E):Ds;y>Ds&&ct(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ds}`);const S=[];let R=0;for(let V=0;V<Ds;++V){const T=V/E,I=Math.exp(-T*T/2);S.push(I),V===0?R+=I:V<y&&(R+=2*I)}for(let V=0;V<S.length;V++)S[V]=S[V]/R;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=c==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:P}=this;g.dTheta.value=M,g.mipInt.value=P-i;const L=this._sizeLods[a],k=3*L*(a>P-us?a-P+us:0),F=4*(this._cubeSize-L);Ca(t,k,F,3*L,2*L),h.setRenderTarget(t),h.render(x,Fo)}}function RT(s){const e=[],t=[],i=[];let a=s;const o=s-us+1+ux.length;for(let c=0;c<o;c++){const d=Math.pow(2,a);e.push(d);let h=1/d;c>s-us?h=ux[c-s+us-1]:c===0&&(h=0),t.push(h);const f=1/(d-2),v=-f,x=1+f,g=[v,v,x,v,x,x,v,v,x,x,v,x],m=6,M=6,E=3,y=2,S=1,R=new Float32Array(E*M*m),P=new Float32Array(y*M*m),L=new Float32Array(S*M*m);for(let F=0;F<m;F++){const V=F%3*2/3-1,T=F>2?0:-1,I=[V,T,0,V+2/3,T,0,V+2/3,T+1,0,V,T,0,V+2/3,T+1,0,V,T+1,0];R.set(I,E*M*F),P.set(g,y*M*F);const z=[F,F,F,F,F,F];L.set(z,S*M*F)}const k=new kn;k.setAttribute("position",new On(R,E)),k.setAttribute("uv",new On(P,y)),k.setAttribute("faceIndex",new On(L,S)),i.push(new mi(k,null)),a>us&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function hx(s,e,t){const i=new ar(s,e,t);return i.texture.mapping=fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ca(s,e,t,i,a){s.viewport.set(e,t,i,a),s.scissor.set(e,t,i,a)}function CT(s,e,t){return new cr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function PT(s,e,t){const i=new Float32Array(Ds),a=new Z(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function px(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function mx(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}class Hv extends ar{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new Dv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new rl(5,5,5),o=new cr({name:"CubemapFromEquirect",uniforms:ka(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hi,blending:Cr});o.uniforms.tEquirect.value=t;const c=new mi(a,o),d=t.minFilter;return t.minFilter===Us&&(t.minFilter=Zn),new T1(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(o)}}function NT(s){let e=new WeakMap,t=new WeakMap,i=null;function a(g,m=!1){return g==null?null:m?c(g):o(g)}function o(g){if(g&&g.isTexture){const m=g.mapping;if(m===tf||m===nf)if(e.has(g)){const M=e.get(g).texture;return d(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const E=new Hv(M.height);return E.fromEquirectangularTexture(s,g),e.set(g,E),g.addEventListener("dispose",f),d(E.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const m=g.mapping,M=m===tf||m===nf,E=m===Os||m===Ua;if(M||E){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return i===null&&(i=new fx(s)),y=M?i.fromEquirectangular(g,y):i.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const R=g.image;return M&&R&&R.height>0||E&&R&&h(R)?(i===null&&(i=new fx(s)),y=M?i.fromEquirectangular(g):i.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function d(g,m){return m===tf?g.mapping=Os:m===nf&&(g.mapping=Ua),g}function h(g){let m=0;const M=6;for(let E=0;E<M;E++)g[E]!==void 0&&m++;return m===M}function f(g){const m=g.target;m.removeEventListener("dispose",f);const M=e.get(m);M!==void 0&&(e.delete(m),M.dispose())}function v(g){const m=g.target;m.removeEventListener("dispose",v);const M=t.get(m);M!==void 0&&(t.delete(m),M.dispose())}function x(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:x}}function IT(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=s.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Vh("WebGLRenderer: "+i+" extension not supported."),a}}}function LT(s,e,t,i){const a={},o=new WeakMap;function c(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete a[g.id];const m=o.get(g);m&&(e.remove(m),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(x,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function h(x){const g=x.attributes;for(const m in g)e.update(g[m],s.ARRAY_BUFFER)}function f(x){const g=[],m=x.index,M=x.attributes.position;let E=0;if(M===void 0)return;if(m!==null){const R=m.array;E=m.version;for(let P=0,L=R.length;P<L;P+=3){const k=R[P+0],F=R[P+1],V=R[P+2];g.push(k,F,F,V,V,k)}}else{const R=M.array;E=M.version;for(let P=0,L=R.length/3-1;P<L;P+=3){const k=P+0,F=P+1,V=P+2;g.push(k,F,F,V,V,k)}}const y=new(M.count>=65535?Rv:Av)(g,1);y.version=E;const S=o.get(x);S&&e.remove(S),o.set(x,y)}function v(x){const g=o.get(x);if(g){const m=x.index;m!==null&&g.version<m.version&&f(x)}else f(x);return o.get(x)}return{get:d,update:h,getWireframeAttribute:v}}function DT(s,e,t){let i;function a(x){i=x}let o,c;function d(x){o=x.type,c=x.bytesPerElement}function h(x,g){s.drawElements(i,g,o,x*c),t.update(g,i,1)}function f(x,g,m){m!==0&&(s.drawElementsInstanced(i,g,o,x*c,m),t.update(g,i,m))}function v(x,g,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,o,x,0,m);let E=0;for(let y=0;y<m;y++)E+=g[y];t.update(E,i,1)}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=f,this.renderMultiDraw=v}function UT(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(o/3);break;case s.LINES:t.lines+=d*(o/2);break;case s.LINE_STRIP:t.lines+=d*(o-1);break;case s.LINE_LOOP:t.lines+=d*o;break;case s.POINTS:t.points+=d*o;break;default:gt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function FT(s,e,t){const i=new WeakMap,a=new ln;function o(c,d,h){const f=c.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let g=i.get(d);if(g===void 0||g.count!==x){let I=function(){V.dispose(),i.delete(d),d.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();const m=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let P=0;m===!0&&(P=1),M===!0&&(P=2),E===!0&&(P=3);let L=d.attributes.position.count*P,k=1;L>e.maxTextureSize&&(k=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*k*4*x),V=new wv(F,L,k,x);V.type=Ni,V.needsUpdate=!0;const T=P*4;for(let z=0;z<x;z++){const B=y[z],Y=S[z],se=R[z],de=L*k*4*z;for(let W=0;W<B.count;W++){const J=W*T;m===!0&&(a.fromBufferAttribute(B,W),F[de+J+0]=a.x,F[de+J+1]=a.y,F[de+J+2]=a.z,F[de+J+3]=0),M===!0&&(a.fromBufferAttribute(Y,W),F[de+J+4]=a.x,F[de+J+5]=a.y,F[de+J+6]=a.z,F[de+J+7]=0),E===!0&&(a.fromBufferAttribute(se,W),F[de+J+8]=a.x,F[de+J+9]=a.y,F[de+J+10]=a.z,F[de+J+11]=se.itemSize===4?a.w:1)}}g={count:x,texture:V,size:new It(L,k)},i.set(d,g),d.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let m=0;for(let E=0;E<f.length;E++)m+=f[E];const M=d.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",f)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:o}}function OT(s,e,t,i,a){let o=new WeakMap;function c(f){const v=a.render.frame,x=f.geometry,g=e.get(f,x);if(o.get(g)!==v&&(e.update(g),o.set(g,v)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==v&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,v))),f.isSkinnedMesh){const m=f.skeleton;o.get(m)!==v&&(m.update(),o.set(m,v))}return g}function d(){o=new WeakMap}function h(f){const v=f.target;v.removeEventListener("dispose",h),i.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:d}}const kT={[dv]:"LINEAR_TONE_MAPPING",[fv]:"REINHARD_TONE_MAPPING",[hv]:"CINEON_TONE_MAPPING",[tp]:"ACES_FILMIC_TONE_MAPPING",[mv]:"AGX_TONE_MAPPING",[gv]:"NEUTRAL_TONE_MAPPING",[pv]:"CUSTOM_TONE_MAPPING"};function BT(s,e,t,i,a){const o=new ar(e,t,{type:s,depthBuffer:i,stencilBuffer:a,depthTexture:i?new Oa(e,t):void 0}),c=new ar(e,t,{type:Ir,depthBuffer:!1,stencilBuffer:!1}),d=new kn;d.setAttribute("position",new pi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new pi([0,2,0,0,2,0],2));const h=new o1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new mi(d,h),v=new yp(-1,1,1,-1,0,1);let x=null,g=null,m=!1,M,E=null,y=[],S=!1;this.setSize=function(R,P){o.setSize(R,P),c.setSize(R,P);for(let L=0;L<y.length;L++){const k=y[L];k.setSize&&k.setSize(R,P)}},this.setEffects=function(R){y=R,S=y.length>0&&y[0].isRenderPass===!0;const P=o.width,L=o.height;for(let k=0;k<y.length;k++){const F=y[k];F.setSize&&F.setSize(P,L)}},this.begin=function(R,P){if(m||R.toneMapping===sr&&y.length===0)return!1;if(E=P,P!==null){const L=P.width,k=P.height;(o.width!==L||o.height!==k)&&this.setSize(L,k)}return S===!1&&R.setRenderTarget(o),M=R.toneMapping,R.toneMapping=sr,!0},this.hasRenderPass=function(){return S},this.end=function(R,P){R.toneMapping=M,m=!0;let L=o,k=c;for(let F=0;F<y.length;F++){const V=y[F];if(V.enabled!==!1&&(V.render(R,k,L,P),V.needsSwap!==!1)){const T=L;L=k,k=T}}if(x!==R.outputColorSpace||g!==R.toneMapping){x=R.outputColorSpace,g=R.toneMapping,h.defines={},Wt.getTransfer(x)===nn&&(h.defines.SRGB_TRANSFER="");const F=kT[g];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,R.setRenderTarget(E),R.render(f,v),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),c.dispose(),d.dispose(),h.dispose()}}const Gv=new Wn,jh=new Oa(1,1),Wv=new wv,jv=new Nb,Xv=new Dv,gx=[],xx=[],vx=new Float32Array(16),_x=new Float32Array(9),yx=new Float32Array(4);function Ga(s,e,t){const i=s[0];if(i<=0||i>0)return s;const a=e*t;let o=gx[a];if(o===void 0&&(o=new Float32Array(a),gx[a]=o),e!==0){i.toArray(o,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(o,d)}return o}function Nn(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function In(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function xu(s,e){let t=xx[e];t===void 0&&(t=new Int32Array(e),xx[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function zT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function VT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2fv(this.addr,e),In(t,e)}}function HT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nn(t,e))return;s.uniform3fv(this.addr,e),In(t,e)}}function GT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4fv(this.addr,e),In(t,e)}}function WT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),In(t,e)}else{if(Nn(t,i))return;yx.set(i),s.uniformMatrix2fv(this.addr,!1,yx),In(t,i)}}function jT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),In(t,e)}else{if(Nn(t,i))return;_x.set(i),s.uniformMatrix3fv(this.addr,!1,_x),In(t,i)}}function XT(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),In(t,e)}else{if(Nn(t,i))return;vx.set(i),s.uniformMatrix4fv(this.addr,!1,vx),In(t,i)}}function $T(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function YT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2iv(this.addr,e),In(t,e)}}function qT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;s.uniform3iv(this.addr,e),In(t,e)}}function KT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4iv(this.addr,e),In(t,e)}}function ZT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function JT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2uiv(this.addr,e),In(t,e)}}function QT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;s.uniform3uiv(this.addr,e),In(t,e)}}function eA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4uiv(this.addr,e),In(t,e)}}function tA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let o;this.type===s.SAMPLER_2D_SHADOW?(jh.compareFunction=t.isReversedDepthBuffer()?up:cp,o=jh):o=Gv,t.setTexture2D(e||o,a)}function nA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||jv,a)}function iA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Xv,a)}function rA(s,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Wv,a)}function sA(s){switch(s){case 5126:return zT;case 35664:return VT;case 35665:return HT;case 35666:return GT;case 35674:return WT;case 35675:return jT;case 35676:return XT;case 5124:case 35670:return $T;case 35667:case 35671:return YT;case 35668:case 35672:return qT;case 35669:case 35673:return KT;case 5125:return ZT;case 36294:return JT;case 36295:return QT;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}function aA(s,e){s.uniform1fv(this.addr,e)}function oA(s,e){const t=Ga(e,this.size,2);s.uniform2fv(this.addr,t)}function lA(s,e){const t=Ga(e,this.size,3);s.uniform3fv(this.addr,t)}function cA(s,e){const t=Ga(e,this.size,4);s.uniform4fv(this.addr,t)}function uA(s,e){const t=Ga(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function dA(s,e){const t=Ga(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function fA(s,e){const t=Ga(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function hA(s,e){s.uniform1iv(this.addr,e)}function pA(s,e){s.uniform2iv(this.addr,e)}function mA(s,e){s.uniform3iv(this.addr,e)}function gA(s,e){s.uniform4iv(this.addr,e)}function xA(s,e){s.uniform1uiv(this.addr,e)}function vA(s,e){s.uniform2uiv(this.addr,e)}function _A(s,e){s.uniform3uiv(this.addr,e)}function yA(s,e){s.uniform4uiv(this.addr,e)}function SA(s,e,t){const i=this.cache,a=e.length,o=xu(t,a);Nn(i,o)||(s.uniform1iv(this.addr,o),In(i,o));let c;this.type===s.SAMPLER_2D_SHADOW?c=jh:c=Gv;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||c,o[d])}function MA(s,e,t){const i=this.cache,a=e.length,o=xu(t,a);Nn(i,o)||(s.uniform1iv(this.addr,o),In(i,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||jv,o[c])}function bA(s,e,t){const i=this.cache,a=e.length,o=xu(t,a);Nn(i,o)||(s.uniform1iv(this.addr,o),In(i,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Xv,o[c])}function EA(s,e,t){const i=this.cache,a=e.length,o=xu(t,a);Nn(i,o)||(s.uniform1iv(this.addr,o),In(i,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Wv,o[c])}function wA(s){switch(s){case 5126:return aA;case 35664:return oA;case 35665:return lA;case 35666:return cA;case 35674:return uA;case 35675:return dA;case 35676:return fA;case 5124:case 35670:return hA;case 35667:case 35671:return pA;case 35668:case 35672:return mA;case 35669:case 35673:return gA;case 5125:return xA;case 36294:return vA;case 36295:return _A;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return MA;case 35680:case 36300:case 36308:case 36293:return bA;case 36289:case 36303:case 36311:case 36292:return EA}}class TA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sA(t.type)}}class AA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wA(t.type)}}class RA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const d=a[o];d.setValue(e,t[d.id],i)}}}const Bf=/(\w+)(\])?(\[|\.)?/g;function Sx(s,e){s.seq.push(e),s.map[e.id]=e}function CA(s,e,t){const i=s.name,a=i.length;for(Bf.lastIndex=0;;){const o=Bf.exec(i),c=Bf.lastIndex;let d=o[1];const h=o[2]==="]",f=o[3];if(h&&(d=d|0),f===void 0||f==="["&&c+2===a){Sx(t,f===void 0?new TA(d,s,e):new AA(d,s,e));break}else{let x=t.map[d];x===void 0&&(x=new RA(d),Sx(t,x)),t=x}}}class Yc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const d=e.getActiveUniform(t,c),h=e.getUniformLocation(t,d.name);CA(d,h,this)}const a=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,c=t.length;o!==c;++o){const d=t[o],h=i[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function Mx(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const PA=37297;let NA=0;function IA(s,e){const t=s.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const d=c+1;i.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return i.join(`
`)}const bx=new Nt;function LA(s){Wt._getMatrix(bx,Wt.workingColorSpace,s);const e=`mat3( ${bx.elements.map(t=>t.toFixed(4))} )`;switch(Wt.getTransfer(s)){case tu:return[e,"LinearTransferOETF"];case nn:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ex(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=(s.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+IA(s.getShaderSource(e),d)}else return o}function DA(s,e){const t=LA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const UA={[dv]:"Linear",[fv]:"Reinhard",[hv]:"Cineon",[tp]:"ACESFilmic",[mv]:"AgX",[gv]:"Neutral",[pv]:"Custom"};function FA(s,e){const t=UA[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bc=new Z;function OA(){Wt.getLuminanceCoefficients(Bc);const s=Bc.x.toFixed(4),e=Bc.y.toFixed(4),t=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function BA(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zA(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=s.getActiveAttrib(e,a),c=o.name;let d=1;o.type===s.FLOAT_MAT2&&(d=2),o.type===s.FLOAT_MAT3&&(d=3),o.type===s.FLOAT_MAT4&&(d=4),t[c]={type:o.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function Go(s){return s!==""}function wx(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tx(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(s){return s.replace(VA,GA)}const HA=new Map;function GA(s,e){let t=Dt[e];if(t===void 0){const i=HA.get(e);if(i!==void 0)t=Dt[i],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Xh(t)}const WA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ax(s){return s.replace(WA,jA)}function jA(s,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Rx(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const XA={[Hc]:"SHADOWMAP_TYPE_PCF",[Vo]:"SHADOWMAP_TYPE_VSM"};function $A(s){return XA[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YA={[Os]:"ENVMAP_TYPE_CUBE",[Ua]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function qA(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":YA[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const KA={[Ua]:"ENVMAP_MODE_REFRACTION"};function ZA(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":KA[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const JA={[uv]:"ENVMAP_BLENDING_MULTIPLY",[XM]:"ENVMAP_BLENDING_MIX",[$M]:"ENVMAP_BLENDING_ADD"};function QA(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":JA[s.combine]||"ENVMAP_BLENDING_NONE"}function eR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function tR(s,e,t,i){const a=s.getContext(),o=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=$A(t),f=qA(t),v=ZA(t),x=QA(t),g=eR(t),m=kA(t),M=BA(o),E=a.createProgram();let y,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Go).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Go).join(`
`),S.length>0&&(S+=`
`)):(y=[Rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),S=[Rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?Dt.tonemapping_pars_fragment:"",t.toneMapping!==sr?FA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Dt.colorspace_pars_fragment,DA("linearToOutputTexel",t.outputColorSpace),OA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Go).join(`
`)),c=Xh(c),c=wx(c,t),c=Tx(c,t),d=Xh(d),d=wx(d,t),d=Tx(d,t),c=Ax(c),d=Ax(d),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===_0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=R+y+c,L=R+S+d,k=Mx(a,a.VERTEX_SHADER,P),F=Mx(a,a.FRAGMENT_SHADER,L);a.attachShader(E,k),a.attachShader(E,F),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function V(B){if(s.debug.checkShaderErrors){const Y=a.getProgramInfoLog(E)||"",se=a.getShaderInfoLog(k)||"",de=a.getShaderInfoLog(F)||"",W=Y.trim(),J=se.trim(),K=de.trim();let te=!0,le=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,k,F);else{const D=Ex(a,k,"vertex"),w=Ex(a,F,"fragment");gt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+D+`
`+w)}else W!==""?ct("WebGLProgram: Program Info Log:",W):(J===""||K==="")&&(le=!1);le&&(B.diagnostics={runnable:te,programLog:W,vertexShader:{log:J,prefix:y},fragmentShader:{log:K,prefix:S}})}a.deleteShader(k),a.deleteShader(F),T=new Yc(a,E),I=zA(a,E)}let T;this.getUniforms=function(){return T===void 0&&V(this),T};let I;this.getAttributes=function(){return I===void 0&&V(this),I};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=a.getProgramParameter(E,PA)),z},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=k,this.fragmentShader=F,this}let nR=0;class iR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rR(e),t.set(e,i)),i}}class rR{constructor(e){this.id=nR++,this.code=e,this.usedTimes=0}}function sR(s){return s===ks||s===Zc||s===Jc}function aR(s,e,t,i,a,o){const c=new hp,d=new iR,h=new Set,f=[],v=new Map,x=i.logarithmicDepthBuffer;let g=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function E(T,I,z,B,Y,se){const de=B.fog,W=Y.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,te=e.get(T.envMap||J,K),le=te&&te.mapping===fu?te.image.height:null,D=m[T.type];T.precision!==null&&(g=i.getMaxPrecision(T.precision),g!==T.precision&&ct("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const w=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,H=w!==void 0?w.length:0;let ve=0;W.morphAttributes.position!==void 0&&(ve=1),W.morphAttributes.normal!==void 0&&(ve=2),W.morphAttributes.color!==void 0&&(ve=3);let Ee,Me,ee,re;if(D){const St=nr[D];Ee=St.vertexShader,Me=St.fragmentShader}else Ee=T.vertexShader,Me=T.fragmentShader,d.update(T),ee=d.getVertexShaderID(T),re=d.getFragmentShaderID(T);const ce=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Oe=Y.isInstancedMesh===!0,Ie=Y.isBatchedMesh===!0,ut=!!T.map,Qe=!!T.matcap,We=!!te,xt=!!T.aoMap,dt=!!T.lightMap,Lt=!!T.bumpMap,Ut=!!T.normalMap,sn=!!T.displacementMap,X=!!T.emissiveMap,Kt=!!T.metalnessMap,wt=!!T.roughnessMap,$t=T.anisotropy>0,Ge=T.clearcoat>0,Jt=T.dispersion>0,U=T.iridescence>0,A=T.sheen>0,ne=T.transmission>0,ye=$t&&!!T.anisotropyMap,we=Ge&&!!T.clearcoatMap,Ne=Ge&&!!T.clearcoatNormalMap,ke=Ge&&!!T.clearcoatRoughnessMap,xe=U&&!!T.iridescenceMap,Se=U&&!!T.iridescenceThicknessMap,je=A&&!!T.sheenColorMap,$e=A&&!!T.sheenRoughnessMap,Be=!!T.specularMap,De=!!T.specularColorMap,vt=!!T.specularIntensityMap,yt=ne&&!!T.transmissionMap,Tt=ne&&!!T.thicknessMap,$=!!T.gradientMap,Ue=!!T.alphaMap,_e=T.alphaTest>0,Ye=!!T.alphaHash,ze=!!T.extensions;let Ae=sr;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const tt={shaderID:D,shaderType:T.type,shaderName:T.name,vertexShader:Ee,fragmentShader:Me,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ie,batchingColor:Ie&&Y._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&Y.instanceColor!==null,instancingMorph:Oe&&Y.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Wt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ut,matcap:Qe,envMap:We,envMapMode:We&&te.mapping,envMapCubeUVHeight:le,aoMap:xt,lightMap:dt,bumpMap:Lt,normalMap:Ut,displacementMap:sn,emissiveMap:X,normalMapObjectSpace:Ut&&T.normalMapType===JM,normalMapTangentSpace:Ut&&T.normalMapType===Bh,packedNormalMap:Ut&&T.normalMapType===Bh&&sR(T.normalMap.format),metalnessMap:Kt,roughnessMap:wt,anisotropy:$t,anisotropyMap:ye,clearcoat:Ge,clearcoatMap:we,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ke,dispersion:Jt,iridescence:U,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:A,sheenColorMap:je,sheenRoughnessMap:$e,specularMap:Be,specularColorMap:De,specularIntensityMap:vt,transmission:ne,transmissionMap:yt,thicknessMap:Tt,gradientMap:$,opaque:T.transparent===!1&&T.blending===Ia&&T.alphaToCoverage===!1,alphaMap:Ue,alphaTest:_e,alphaHash:Ye,combine:T.combine,mapUv:ut&&M(T.map.channel),aoMapUv:xt&&M(T.aoMap.channel),lightMapUv:dt&&M(T.lightMap.channel),bumpMapUv:Lt&&M(T.bumpMap.channel),normalMapUv:Ut&&M(T.normalMap.channel),displacementMapUv:sn&&M(T.displacementMap.channel),emissiveMapUv:X&&M(T.emissiveMap.channel),metalnessMapUv:Kt&&M(T.metalnessMap.channel),roughnessMapUv:wt&&M(T.roughnessMap.channel),anisotropyMapUv:ye&&M(T.anisotropyMap.channel),clearcoatMapUv:we&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:je&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:$e&&M(T.sheenRoughnessMap.channel),specularMapUv:Be&&M(T.specularMap.channel),specularColorMapUv:De&&M(T.specularColorMap.channel),specularIntensityMapUv:vt&&M(T.specularIntensityMap.channel),transmissionMapUv:yt&&M(T.transmissionMap.channel),thicknessMapUv:Tt&&M(T.thicknessMap.channel),alphaMapUv:Ue&&M(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ut||$t),vertexNormals:!!W.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(ut||Ue),fog:!!de,useFog:T.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||W.attributes.normal===void 0&&Ut===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ge,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ve,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:ut&&T.map.isVideoTexture===!0&&Wt.getTransfer(T.map.colorSpace)===nn,decodeVideoTextureEmissive:X&&T.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(T.emissiveMap.colorSpace)===nn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ir,flipSided:T.side===hi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return tt.vertexUv1s=h.has(1),tt.vertexUv2s=h.has(2),tt.vertexUv3s=h.has(3),h.clear(),tt}function y(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)I.push(z),I.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(S(I,T),R(I,T),I.push(s.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function S(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function R(T,I){c.disableAll(),I.instancing&&c.enable(0),I.instancingColor&&c.enable(1),I.instancingMorph&&c.enable(2),I.matcap&&c.enable(3),I.envMap&&c.enable(4),I.normalMapObjectSpace&&c.enable(5),I.normalMapTangentSpace&&c.enable(6),I.clearcoat&&c.enable(7),I.iridescence&&c.enable(8),I.alphaTest&&c.enable(9),I.vertexColors&&c.enable(10),I.vertexAlphas&&c.enable(11),I.vertexUv1s&&c.enable(12),I.vertexUv2s&&c.enable(13),I.vertexUv3s&&c.enable(14),I.vertexTangents&&c.enable(15),I.anisotropy&&c.enable(16),I.alphaHash&&c.enable(17),I.batching&&c.enable(18),I.dispersion&&c.enable(19),I.batchingColor&&c.enable(20),I.gradientMap&&c.enable(21),I.packedNormalMap&&c.enable(22),I.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.reversedDepthBuffer&&c.enable(4),I.skinning&&c.enable(5),I.morphTargets&&c.enable(6),I.morphNormals&&c.enable(7),I.morphColors&&c.enable(8),I.premultipliedAlpha&&c.enable(9),I.shadowMapEnabled&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.decodeVideoTextureEmissive&&c.enable(20),I.alphaToCoverage&&c.enable(21),I.numLightProbeGrids>0&&c.enable(22),T.push(c.mask)}function P(T){const I=m[T.type];let z;if(I){const B=nr[I];z=r1.clone(B.uniforms)}else z=T.uniforms;return z}function L(T,I){let z=v.get(I);return z!==void 0?++z.usedTimes:(z=new tR(s,I,T,a),f.push(z),v.set(I,z)),z}function k(T){if(--T.usedTimes===0){const I=f.indexOf(T);f[I]=f[f.length-1],f.pop(),v.delete(T.cacheKey),T.destroy()}}function F(T){d.remove(T)}function V(){d.dispose()}return{getParameters:E,getProgramCacheKey:y,getUniforms:P,acquireProgram:L,releaseProgram:k,releaseShaderCache:F,programs:f,dispose:V}}function oR(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function i(c){s.delete(c)}function a(c,d,h){s.get(c)[d]=h}function o(){s=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function lR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Cx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Px(){const s=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function c(g){let m=0;return g.isInstancedMesh&&(m+=2),g.isSkinnedMesh&&(m+=1),m}function d(g,m,M,E,y,S){let R=s[e];return R===void 0?(R={id:g.id,object:g,geometry:m,material:M,materialVariant:c(g),groupOrder:E,renderOrder:g.renderOrder,z:y,group:S},s[e]=R):(R.id=g.id,R.object=g,R.geometry=m,R.material=M,R.materialVariant=c(g),R.groupOrder=E,R.renderOrder=g.renderOrder,R.z=y,R.group=S),e++,R}function h(g,m,M,E,y,S){const R=d(g,m,M,E,y,S);M.transmission>0?i.push(R):M.transparent===!0?a.push(R):t.push(R)}function f(g,m,M,E,y,S){const R=d(g,m,M,E,y,S);M.transmission>0?i.unshift(R):M.transparent===!0?a.unshift(R):t.unshift(R)}function v(g,m){t.length>1&&t.sort(g||lR),i.length>1&&i.sort(m||Cx),a.length>1&&a.sort(m||Cx)}function x(){for(let g=e,m=s.length;g<m;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:h,unshift:f,finish:x,sort:v}}function cR(){let s=new WeakMap;function e(i,a){const o=s.get(i);let c;return o===void 0?(c=new Px,s.set(i,[c])):a>=o.length?(c=new Px,o.push(c)):c=o[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function uR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Ht};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":t={color:new Ht,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function dR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let fR=0;function hR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pR(s){const e=new uR,t=dR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new Z);const a=new Z,o=new Ot,c=new Ot;function d(f){let v=0,x=0,g=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let m=0,M=0,E=0,y=0,S=0,R=0,P=0,L=0,k=0,F=0,V=0;f.sort(hR);for(let I=0,z=f.length;I<z;I++){const B=f[I],Y=B.color,se=B.intensity,de=B.distance;let W=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ks?W=B.shadow.map.texture:W=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=Y.r*se,x+=Y.g*se,g+=Y.b*se;else if(B.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(B.sh.coefficients[J],se);V++}else if(B.isDirectionalLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,te=t.get(B);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=W,i.directionalShadowMatrix[m]=B.shadow.matrix,R++}i.directional[m]=J,m++}else if(B.isSpotLight){const J=e.get(B);J.position.setFromMatrixPosition(B.matrixWorld),J.color.copy(Y).multiplyScalar(se),J.distance=de,J.coneCos=Math.cos(B.angle),J.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),J.decay=B.decay,i.spot[E]=J;const K=B.shadow;if(B.map&&(i.spotLightMap[k]=B.map,k++,K.updateMatrices(B),B.castShadow&&F++),i.spotLightMatrix[E]=K.matrix,B.castShadow){const te=t.get(B);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,i.spotShadow[E]=te,i.spotShadowMap[E]=W,L++}E++}else if(B.isRectAreaLight){const J=e.get(B);J.color.copy(Y).multiplyScalar(se),J.halfWidth.set(B.width*.5,0,0),J.halfHeight.set(0,B.height*.5,0),i.rectArea[y]=J,y++}else if(B.isPointLight){const J=e.get(B);if(J.color.copy(B.color).multiplyScalar(B.intensity),J.distance=B.distance,J.decay=B.decay,B.castShadow){const K=B.shadow,te=t.get(B);te.shadowIntensity=K.intensity,te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,i.pointShadow[M]=te,i.pointShadowMap[M]=W,i.pointShadowMatrix[M]=B.shadow.matrix,P++}i.point[M]=J,M++}else if(B.isHemisphereLight){const J=e.get(B);J.skyColor.copy(B.color).multiplyScalar(se),J.groundColor.copy(B.groundColor).multiplyScalar(se),i.hemi[S]=J,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=v,i.ambient[1]=x,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==m||T.pointLength!==M||T.spotLength!==E||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==R||T.numPointShadows!==P||T.numSpotShadows!==L||T.numSpotMaps!==k||T.numLightProbes!==V)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=y,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=L+k-F,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=V,T.directionalLength=m,T.pointLength=M,T.spotLength=E,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=R,T.numPointShadows=P,T.numSpotShadows=L,T.numSpotMaps=k,T.numLightProbes=V,i.version=fR++)}function h(f,v){let x=0,g=0,m=0,M=0,E=0;const y=v.matrixWorldInverse;for(let S=0,R=f.length;S<R;S++){const P=f[S];if(P.isDirectionalLight){const L=i.directional[x];L.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(y),x++}else if(P.isSpotLight){const L=i.spot[m];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(y),m++}else if(P.isRectAreaLight){const L=i.rectArea[M];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(y),c.identity(),o.copy(P.matrixWorld),o.premultiply(y),c.extractRotation(o),L.halfWidth.set(P.width*.5,0,0),L.halfHeight.set(0,P.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const L=i.point[g];L.position.setFromMatrixPosition(P.matrixWorld),L.position.applyMatrix4(y),g++}else if(P.isHemisphereLight){const L=i.hemi[E];L.direction.setFromMatrixPosition(P.matrixWorld),L.direction.transformDirection(y),E++}}}return{setup:d,setupView:h,state:i}}function Nx(s){const e=new pR(s),t=[],i=[],a=[];function o(g){x.camera=g,t.length=0,i.length=0,a.length=0}function c(g){t.push(g)}function d(g){i.push(g)}function h(g){a.push(g)}function f(){e.setup(t)}function v(g){e.setupView(t,g)}const x={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:x,setupLights:f,setupLightsView:v,pushLight:c,pushShadow:d,pushLightProbeGrid:h}}function mR(s){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let d;return c===void 0?(d=new Nx(s),e.set(a,[d])):o>=c.length?(d=new Nx(s),c.push(d)):d=c[o],d}function i(){e=new WeakMap}return{get:t,dispose:i}}const gR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xR=`uniform sampler2D shadow_pass;
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
}`,vR=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],_R=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Ix=new Ot,Oo=new Z,zf=new Z;function yR(s,e,t){let i=new gp;const a=new It,o=new It,c=new ln,d=new l1,h=new c1,f={},v=t.maxTextureSize,x={[ds]:hi,[hi]:ds,[ir]:ir},g=new cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:gR,fragmentShader:xR}),m=g.clone();m.defines.HORIZONTAL_PASS=1;const M=new kn;M.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new mi(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hc;let S=this.type;this.render=function(F,V,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;this.type===AM&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Hc);const I=s.getRenderTarget(),z=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(Cr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const se=S!==this.type;se&&V.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(W=>W.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,W=F.length;de<W;de++){const J=F[de],K=J.shadow;if(K===void 0){ct("WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;a.copy(K.mapSize);const te=K.getFrameExtents();a.multiply(te),o.copy(K.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(o.x=Math.floor(v/te.x),a.x=o.x*te.x,K.mapSize.x=o.x),a.y>v&&(o.y=Math.floor(v/te.y),a.y=o.y*te.y,K.mapSize.y=o.y));const le=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=le,K.map===null||se===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Vo){if(J.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new ar(a.x,a.y,{format:ks,type:Ir,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),K.map.texture.name=J.name+".shadowMap",K.map.depthTexture=new Oa(a.x,a.y,Ni),K.map.depthTexture.name=J.name+".shadowMapDepth",K.map.depthTexture.format=Lr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Gn,K.map.depthTexture.magFilter=Gn}else J.isPointLight?(K.map=new Hv(a.x),K.map.depthTexture=new n1(a.x,lr)):(K.map=new ar(a.x,a.y),K.map.depthTexture=new Oa(a.x,a.y,lr)),K.map.depthTexture.name=J.name+".shadowMap",K.map.depthTexture.format=Lr,this.type===Hc?(K.map.depthTexture.compareFunction=le?up:cp,K.map.depthTexture.minFilter=Zn,K.map.depthTexture.magFilter=Zn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Gn,K.map.depthTexture.magFilter=Gn);K.camera.updateProjectionMatrix()}const D=K.map.isWebGLCubeRenderTarget?6:1;for(let w=0;w<D;w++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,w),s.clear();else{w===0&&(s.setRenderTarget(K.map),s.clear());const H=K.getViewport(w);c.set(o.x*H.x,o.y*H.y,o.x*H.z,o.y*H.w),Y.viewport(c)}if(J.isPointLight){const H=K.camera,ve=K.matrix,Ee=J.distance||H.far;Ee!==H.far&&(H.far=Ee,H.updateProjectionMatrix()),Oo.setFromMatrixPosition(J.matrixWorld),H.position.copy(Oo),zf.copy(H.position),zf.add(vR[w]),H.up.copy(_R[w]),H.lookAt(zf),H.updateMatrixWorld(),ve.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Ix.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Ix,H.coordinateSystem,H.reversedDepth)}else K.updateMatrices(J);i=K.getFrustum(),L(V,T,K.camera,J,this.type)}K.isPointLightShadow!==!0&&this.type===Vo&&R(K,T),K.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(I,z,B)};function R(F,V){const T=e.update(E);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,m.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,m.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ar(a.x,a.y,{format:ks,type:Ir})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(V,null,T,g,E,null),m.uniforms.shadow_pass.value=F.mapPass.texture,m.uniforms.resolution.value=F.mapSize,m.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(V,null,T,m,E,null)}function P(F,V,T,I){let z=null;const B=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)z=B;else if(z=T.isPointLight===!0?h:d,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const Y=z.uuid,se=V.uuid;let de=f[Y];de===void 0&&(de={},f[Y]=de);let W=de[se];W===void 0&&(W=z.clone(),de[se]=W,V.addEventListener("dispose",k)),z=W}if(z.visible=V.visible,z.wireframe=V.wireframe,I===Vo?z.side=V.shadowSide!==null?V.shadowSide:V.side:z.side=V.shadowSide!==null?V.shadowSide:x[V.side],z.alphaMap=V.alphaMap,z.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,z.map=V.map,z.clipShadows=V.clipShadows,z.clippingPlanes=V.clippingPlanes,z.clipIntersection=V.clipIntersection,z.displacementMap=V.displacementMap,z.displacementScale=V.displacementScale,z.displacementBias=V.displacementBias,z.wireframeLinewidth=V.wireframeLinewidth,z.linewidth=V.linewidth,T.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const Y=s.properties.get(z);Y.light=T}return z}function L(F,V,T,I,z){if(F.visible===!1)return;if(F.layers.test(V.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&z===Vo)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const se=e.update(F),de=F.material;if(Array.isArray(de)){const W=se.groups;for(let J=0,K=W.length;J<K;J++){const te=W[J],le=de[te.materialIndex];if(le&&le.visible){const D=P(F,le,I,z);F.onBeforeShadow(s,F,V,T,se,D,te),s.renderBufferDirect(T,null,se,D,F,te),F.onAfterShadow(s,F,V,T,se,D,te)}}}else if(de.visible){const W=P(F,de,I,z);F.onBeforeShadow(s,F,V,T,se,W,null),s.renderBufferDirect(T,null,se,W,F,null),F.onAfterShadow(s,F,V,T,se,W,null)}}const Y=F.children;for(let se=0,de=Y.length;se<de;se++)L(Y[se],V,T,I,z)}function k(F){F.target.removeEventListener("dispose",k);for(const T in f){const I=f[T],z=F.target.uuid;z in I&&(I[z].dispose(),delete I[z])}}}function SR(s,e){function t(){let $=!1;const Ue=new ln;let _e=null;const Ye=new ln(0,0,0,0);return{setMask:function(ze){_e!==ze&&!$&&(s.colorMask(ze,ze,ze,ze),_e=ze)},setLocked:function(ze){$=ze},setClear:function(ze,Ae,tt,St,Qt){Qt===!0&&(ze*=St,Ae*=St,tt*=St),Ue.set(ze,Ae,tt,St),Ye.equals(Ue)===!1&&(s.clearColor(ze,Ae,tt,St),Ye.copy(Ue))},reset:function(){$=!1,_e=null,Ye.set(-1,0,0,0)}}}function i(){let $=!1,Ue=!1,_e=null,Ye=null,ze=null;return{setReversed:function(Ae){if(Ue!==Ae){const tt=e.get("EXT_clip_control");Ae?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Ue=Ae;const St=ze;ze=null,this.setClear(St)}},getReversed:function(){return Ue},setTest:function(Ae){Ae?ce(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Ae){_e!==Ae&&!$&&(s.depthMask(Ae),_e=Ae)},setFunc:function(Ae){if(Ue&&(Ae=cb[Ae]),Ye!==Ae){switch(Ae){case Qf:s.depthFunc(s.NEVER);break;case eh:s.depthFunc(s.ALWAYS);break;case th:s.depthFunc(s.LESS);break;case Da:s.depthFunc(s.LEQUAL);break;case nh:s.depthFunc(s.EQUAL);break;case ih:s.depthFunc(s.GEQUAL);break;case rh:s.depthFunc(s.GREATER);break;case sh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ye=Ae}},setLocked:function(Ae){$=Ae},setClear:function(Ae){ze!==Ae&&(ze=Ae,Ue&&(Ae=1-Ae),s.clearDepth(Ae))},reset:function(){$=!1,_e=null,Ye=null,ze=null,Ue=!1}}}function a(){let $=!1,Ue=null,_e=null,Ye=null,ze=null,Ae=null,tt=null,St=null,Qt=null;return{setTest:function(fe){$||(fe?ce(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(fe){Ue!==fe&&!$&&(s.stencilMask(fe),Ue=fe)},setFunc:function(fe,be,Te){(_e!==fe||Ye!==be||ze!==Te)&&(s.stencilFunc(fe,be,Te),_e=fe,Ye=be,ze=Te)},setOp:function(fe,be,Te){(Ae!==fe||tt!==be||St!==Te)&&(s.stencilOp(fe,be,Te),Ae=fe,tt=be,St=Te)},setLocked:function(fe){$=fe},setClear:function(fe){Qt!==fe&&(s.clearStencil(fe),Qt=fe)},reset:function(){$=!1,Ue=null,_e=null,Ye=null,ze=null,Ae=null,tt=null,St=null,Qt=null}}}const o=new t,c=new i,d=new a,h=new WeakMap,f=new WeakMap;let v={},x={},g={},m=new WeakMap,M=[],E=null,y=!1,S=null,R=null,P=null,L=null,k=null,F=null,V=null,T=new Ht(0,0,0),I=0,z=!1,B=null,Y=null,se=null,de=null,W=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,te=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(le)[1]),K=te>=1):le.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),K=te>=2);let D=null,w={};const H=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Ee=new ln().fromArray(H),Me=new ln().fromArray(ve);function ee($,Ue,_e,Ye){const ze=new Uint8Array(4),Ae=s.createTexture();s.bindTexture($,Ae),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<_e;tt++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,Ye,0,s.RGBA,s.UNSIGNED_BYTE,ze):s.texImage2D(Ue+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ze);return Ae}const re={};re[s.TEXTURE_2D]=ee(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=ee(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=ee(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=ee(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ce(s.DEPTH_TEST),c.setFunc(Da),Lt(!1),Ut(c0),ce(s.CULL_FACE),xt(Cr);function ce($){v[$]!==!0&&(s.enable($),v[$]=!0)}function ge($){v[$]!==!1&&(s.disable($),v[$]=!1)}function Oe($,Ue){return g[$]!==Ue?(s.bindFramebuffer($,Ue),g[$]=Ue,$===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ue),$===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Ie($,Ue){let _e=M,Ye=!1;if($){_e=m.get(Ue),_e===void 0&&(_e=[],m.set(Ue,_e));const ze=$.textures;if(_e.length!==ze.length||_e[0]!==s.COLOR_ATTACHMENT0){for(let Ae=0,tt=ze.length;Ae<tt;Ae++)_e[Ae]=s.COLOR_ATTACHMENT0+Ae;_e.length=ze.length,Ye=!0}}else _e[0]!==s.BACK&&(_e[0]=s.BACK,Ye=!0);Ye&&s.drawBuffers(_e)}function ut($){return E!==$?(s.useProgram($),E=$,!0):!1}const Qe={[Ls]:s.FUNC_ADD,[CM]:s.FUNC_SUBTRACT,[PM]:s.FUNC_REVERSE_SUBTRACT};Qe[NM]=s.MIN,Qe[IM]=s.MAX;const We={[LM]:s.ZERO,[DM]:s.ONE,[UM]:s.SRC_COLOR,[Zf]:s.SRC_ALPHA,[VM]:s.SRC_ALPHA_SATURATE,[BM]:s.DST_COLOR,[OM]:s.DST_ALPHA,[FM]:s.ONE_MINUS_SRC_COLOR,[Jf]:s.ONE_MINUS_SRC_ALPHA,[zM]:s.ONE_MINUS_DST_COLOR,[kM]:s.ONE_MINUS_DST_ALPHA,[HM]:s.CONSTANT_COLOR,[GM]:s.ONE_MINUS_CONSTANT_COLOR,[WM]:s.CONSTANT_ALPHA,[jM]:s.ONE_MINUS_CONSTANT_ALPHA};function xt($,Ue,_e,Ye,ze,Ae,tt,St,Qt,fe){if($===Cr){y===!0&&(ge(s.BLEND),y=!1);return}if(y===!1&&(ce(s.BLEND),y=!0),$!==RM){if($!==S||fe!==z){if((R!==Ls||k!==Ls)&&(s.blendEquation(s.FUNC_ADD),R=Ls,k=Ls),fe)switch($){case Ia:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case u0:s.blendFunc(s.ONE,s.ONE);break;case d0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case f0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:gt("WebGLState: Invalid blending: ",$);break}else switch($){case Ia:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case u0:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case d0:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case f0:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",$);break}P=null,L=null,F=null,V=null,T.set(0,0,0),I=0,S=$,z=fe}return}ze=ze||Ue,Ae=Ae||_e,tt=tt||Ye,(Ue!==R||ze!==k)&&(s.blendEquationSeparate(Qe[Ue],Qe[ze]),R=Ue,k=ze),(_e!==P||Ye!==L||Ae!==F||tt!==V)&&(s.blendFuncSeparate(We[_e],We[Ye],We[Ae],We[tt]),P=_e,L=Ye,F=Ae,V=tt),(St.equals(T)===!1||Qt!==I)&&(s.blendColor(St.r,St.g,St.b,Qt),T.copy(St),I=Qt),S=$,z=!1}function dt($,Ue){$.side===ir?ge(s.CULL_FACE):ce(s.CULL_FACE);let _e=$.side===hi;Ue&&(_e=!_e),Lt(_e),$.blending===Ia&&$.transparent===!1?xt(Cr):xt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),c.setFunc($.depthFunc),c.setTest($.depthTest),c.setMask($.depthWrite),o.setMask($.colorWrite);const Ye=$.stencilWrite;d.setTest(Ye),Ye&&(d.setMask($.stencilWriteMask),d.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),d.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),X($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Lt($){B!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),B=$)}function Ut($){$!==wM?(ce(s.CULL_FACE),$!==Y&&($===c0?s.cullFace(s.BACK):$===TM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),Y=$}function sn($){$!==se&&(K&&s.lineWidth($),se=$)}function X($,Ue,_e){$?(ce(s.POLYGON_OFFSET_FILL),(de!==Ue||W!==_e)&&(de=Ue,W=_e,c.getReversed()&&(Ue=-Ue),s.polygonOffset(Ue,_e))):ge(s.POLYGON_OFFSET_FILL)}function Kt($){$?ce(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function wt($){$===void 0&&($=s.TEXTURE0+J-1),D!==$&&(s.activeTexture($),D=$)}function $t($,Ue,_e){_e===void 0&&(D===null?_e=s.TEXTURE0+J-1:_e=D);let Ye=w[_e];Ye===void 0&&(Ye={type:void 0,texture:void 0},w[_e]=Ye),(Ye.type!==$||Ye.texture!==Ue)&&(D!==_e&&(s.activeTexture(_e),D=_e),s.bindTexture($,Ue||re[$]),Ye.type=$,Ye.texture=Ue)}function Ge(){const $=w[D];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Jt(){try{s.compressedTexImage2D(...arguments)}catch($){gt("WebGLState:",$)}}function U(){try{s.compressedTexImage3D(...arguments)}catch($){gt("WebGLState:",$)}}function A(){try{s.texSubImage2D(...arguments)}catch($){gt("WebGLState:",$)}}function ne(){try{s.texSubImage3D(...arguments)}catch($){gt("WebGLState:",$)}}function ye(){try{s.compressedTexSubImage2D(...arguments)}catch($){gt("WebGLState:",$)}}function we(){try{s.compressedTexSubImage3D(...arguments)}catch($){gt("WebGLState:",$)}}function Ne(){try{s.texStorage2D(...arguments)}catch($){gt("WebGLState:",$)}}function ke(){try{s.texStorage3D(...arguments)}catch($){gt("WebGLState:",$)}}function xe(){try{s.texImage2D(...arguments)}catch($){gt("WebGLState:",$)}}function Se(){try{s.texImage3D(...arguments)}catch($){gt("WebGLState:",$)}}function je($){return x[$]!==void 0?x[$]:s.getParameter($)}function $e($,Ue){x[$]!==Ue&&(s.pixelStorei($,Ue),x[$]=Ue)}function Be($){Ee.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),Ee.copy($))}function De($){Me.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),Me.copy($))}function vt($,Ue){let _e=f.get(Ue);_e===void 0&&(_e=new WeakMap,f.set(Ue,_e));let Ye=_e.get($);Ye===void 0&&(Ye=s.getUniformBlockIndex(Ue,$.name),_e.set($,Ye))}function yt($,Ue){const Ye=f.get(Ue).get($);h.get(Ue)!==Ye&&(s.uniformBlockBinding(Ue,Ye,$.__bindingPointIndex),h.set(Ue,Ye))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},x={},D=null,w={},g={},m=new WeakMap,M=[],E=null,y=!1,S=null,R=null,P=null,L=null,k=null,F=null,V=null,T=new Ht(0,0,0),I=0,z=!1,B=null,Y=null,se=null,de=null,W=null,Ee.set(0,0,s.canvas.width,s.canvas.height),Me.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),d.reset()}return{buffers:{color:o,depth:c,stencil:d},enable:ce,disable:ge,bindFramebuffer:Oe,drawBuffers:Ie,useProgram:ut,setBlending:xt,setMaterial:dt,setFlipSided:Lt,setCullFace:Ut,setLineWidth:sn,setPolygonOffset:X,setScissorTest:Kt,activeTexture:wt,bindTexture:$t,unbindTexture:Ge,compressedTexImage2D:Jt,compressedTexImage3D:U,texImage2D:xe,texImage3D:Se,pixelStorei:$e,getParameter:je,updateUBOMapping:vt,uniformBlockBinding:yt,texStorage2D:Ne,texStorage3D:ke,texSubImage2D:A,texSubImage3D:ne,compressedTexSubImage2D:ye,compressedTexSubImage3D:we,scissor:Be,viewport:De,reset:Tt}}function MR(s,e,t,i,a,o,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new It,v=new WeakMap,x=new Set;let g;const m=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,A){return M?new OffscreenCanvas(U,A):Jo("canvas")}function y(U,A,ne){let ye=1;const we=Jt(U);if((we.width>ne||we.height>ne)&&(ye=ne/Math.max(we.width,we.height)),ye<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Ne=Math.floor(ye*we.width),ke=Math.floor(ye*we.height);g===void 0&&(g=E(Ne,ke));const xe=A?E(Ne,ke):g;return xe.width=Ne,xe.height=ke,xe.getContext("2d").drawImage(U,0,0,Ne,ke),ct("WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+Ne+"x"+ke+")."),xe}else return"data"in U&&ct("WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),U;return U}function S(U){return U.generateMipmaps}function R(U){s.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(U,A,ne,ye,we,Ne=!1){if(U!==null){if(s[U]!==void 0)return s[U];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ke;ye&&(ke=e.get("EXT_texture_norm16"),ke||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=A;if(A===s.RED&&(ne===s.FLOAT&&(xe=s.R32F),ne===s.HALF_FLOAT&&(xe=s.R16F),ne===s.UNSIGNED_BYTE&&(xe=s.R8),ne===s.UNSIGNED_SHORT&&ke&&(xe=ke.R16_EXT),ne===s.SHORT&&ke&&(xe=ke.R16_SNORM_EXT)),A===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.R8UI),ne===s.UNSIGNED_SHORT&&(xe=s.R16UI),ne===s.UNSIGNED_INT&&(xe=s.R32UI),ne===s.BYTE&&(xe=s.R8I),ne===s.SHORT&&(xe=s.R16I),ne===s.INT&&(xe=s.R32I)),A===s.RG&&(ne===s.FLOAT&&(xe=s.RG32F),ne===s.HALF_FLOAT&&(xe=s.RG16F),ne===s.UNSIGNED_BYTE&&(xe=s.RG8),ne===s.UNSIGNED_SHORT&&ke&&(xe=ke.RG16_EXT),ne===s.SHORT&&ke&&(xe=ke.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.RG8UI),ne===s.UNSIGNED_SHORT&&(xe=s.RG16UI),ne===s.UNSIGNED_INT&&(xe=s.RG32UI),ne===s.BYTE&&(xe=s.RG8I),ne===s.SHORT&&(xe=s.RG16I),ne===s.INT&&(xe=s.RG32I)),A===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),ne===s.UNSIGNED_INT&&(xe=s.RGB32UI),ne===s.BYTE&&(xe=s.RGB8I),ne===s.SHORT&&(xe=s.RGB16I),ne===s.INT&&(xe=s.RGB32I)),A===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),ne===s.UNSIGNED_INT&&(xe=s.RGBA32UI),ne===s.BYTE&&(xe=s.RGBA8I),ne===s.SHORT&&(xe=s.RGBA16I),ne===s.INT&&(xe=s.RGBA32I)),A===s.RGB&&(ne===s.UNSIGNED_SHORT&&ke&&(xe=ke.RGB16_EXT),ne===s.SHORT&&ke&&(xe=ke.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),A===s.RGBA){const Se=Ne?tu:Wt.getTransfer(we);ne===s.FLOAT&&(xe=s.RGBA32F),ne===s.HALF_FLOAT&&(xe=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(xe=Se===nn?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&ke&&(xe=ke.RGBA16_EXT),ne===s.SHORT&&ke&&(xe=ke.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function k(U,A){let ne;return U?A===null||A===lr||A===Ko?ne=s.DEPTH24_STENCIL8:A===Ni?ne=s.DEPTH32F_STENCIL8:A===qo&&(ne=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===lr||A===Ko?ne=s.DEPTH_COMPONENT24:A===Ni?ne=s.DEPTH_COMPONENT32F:A===qo&&(ne=s.DEPTH_COMPONENT16),ne}function F(U,A){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Gn&&U.minFilter!==Zn?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function V(U){const A=U.target;A.removeEventListener("dispose",V),I(A),A.isVideoTexture&&v.delete(A),A.isHTMLTexture&&x.delete(A)}function T(U){const A=U.target;A.removeEventListener("dispose",T),B(A)}function I(U){const A=i.get(U);if(A.__webglInit===void 0)return;const ne=U.source,ye=m.get(ne);if(ye){const we=ye[A.__cacheKey];we.usedTimes--,we.usedTimes===0&&z(U),Object.keys(ye).length===0&&m.delete(ne)}i.remove(U)}function z(U){const A=i.get(U);s.deleteTexture(A.__webglTexture);const ne=U.source,ye=m.get(ne);delete ye[A.__cacheKey],c.memory.textures--}function B(U){const A=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(A.__webglFramebuffer[ye]))for(let we=0;we<A.__webglFramebuffer[ye].length;we++)s.deleteFramebuffer(A.__webglFramebuffer[ye][we]);else s.deleteFramebuffer(A.__webglFramebuffer[ye]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ye])}else{if(Array.isArray(A.__webglFramebuffer))for(let ye=0;ye<A.__webglFramebuffer.length;ye++)s.deleteFramebuffer(A.__webglFramebuffer[ye]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ye=0;ye<A.__webglColorRenderbuffer.length;ye++)A.__webglColorRenderbuffer[ye]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ye]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ne=U.textures;for(let ye=0,we=ne.length;ye<we;ye++){const Ne=i.get(ne[ye]);Ne.__webglTexture&&(s.deleteTexture(Ne.__webglTexture),c.memory.textures--),i.remove(ne[ye])}i.remove(U)}let Y=0;function se(){Y=0}function de(){return Y}function W(U){Y=U}function J(){const U=Y;return U>=a.maxTextures&&ct("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),Y+=1,U}function K(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function te(U,A){const ne=i.get(U);if(U.isVideoTexture&&$t(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&ne.__version!==U.version){const ye=U.image;if(ye===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(ne,U,A);return}}else U.isExternalTexture&&(ne.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+A)}function le(U,A){const ne=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){ge(ne,U,A);return}else U.isExternalTexture&&(ne.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+A)}function D(U,A){const ne=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){ge(ne,U,A);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+A)}function w(U,A){const ne=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&ne.__version!==U.version){Oe(ne,U,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+A)}const H={[ah]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[oh]:s.MIRRORED_REPEAT},ve={[Gn]:s.NEAREST,[qM]:s.NEAREST_MIPMAP_NEAREST,[lc]:s.NEAREST_MIPMAP_LINEAR,[Zn]:s.LINEAR,[rf]:s.LINEAR_MIPMAP_NEAREST,[Us]:s.LINEAR_MIPMAP_LINEAR},Ee={[QM]:s.NEVER,[rb]:s.ALWAYS,[eb]:s.LESS,[cp]:s.LEQUAL,[tb]:s.EQUAL,[up]:s.GEQUAL,[nb]:s.GREATER,[ib]:s.NOTEQUAL};function Me(U,A){if(A.type===Ni&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Zn||A.magFilter===rf||A.magFilter===lc||A.magFilter===Us||A.minFilter===Zn||A.minFilter===rf||A.minFilter===lc||A.minFilter===Us)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,H[A.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,H[A.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,H[A.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,ve[A.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,ve[A.minFilter]),A.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Gn||A.minFilter!==lc&&A.minFilter!==Us||A.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,a.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ee(U,A){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",V));const ye=A.source;let we=m.get(ye);we===void 0&&(we={},m.set(ye,we));const Ne=K(A);if(Ne!==U.__cacheKey){we[Ne]===void 0&&(we[Ne]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ne=!0),we[Ne].usedTimes++;const ke=we[U.__cacheKey];ke!==void 0&&(we[U.__cacheKey].usedTimes--,ke.usedTimes===0&&z(A)),U.__cacheKey=Ne,U.__webglTexture=we[Ne].texture}return ne}function re(U,A,ne){return Math.floor(Math.floor(U/ne)/A)}function ce(U,A,ne,ye){const Ne=U.updateRanges;if(Ne.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ne,ye,A.data);else{Ne.sort(($e,Be)=>$e.start-Be.start);let ke=0;for(let $e=1;$e<Ne.length;$e++){const Be=Ne[ke],De=Ne[$e],vt=Be.start+Be.count,yt=re(De.start,A.width,4),Tt=re(Be.start,A.width,4);De.start<=vt+1&&yt===Tt&&re(De.start+De.count-1,A.width,4)===yt?Be.count=Math.max(Be.count,De.start+De.count-Be.start):(++ke,Ne[ke]=De)}Ne.length=ke+1;const xe=t.getParameter(s.UNPACK_ROW_LENGTH),Se=t.getParameter(s.UNPACK_SKIP_PIXELS),je=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let $e=0,Be=Ne.length;$e<Be;$e++){const De=Ne[$e],vt=Math.floor(De.start/4),yt=Math.ceil(De.count/4),Tt=vt%A.width,$=Math.floor(vt/A.width),Ue=yt,_e=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Tt),t.pixelStorei(s.UNPACK_SKIP_ROWS,$),t.texSubImage2D(s.TEXTURE_2D,0,Tt,$,Ue,_e,ne,ye,A.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(s.UNPACK_SKIP_ROWS,je)}}function ge(U,A,ne){let ye=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ye=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ye=s.TEXTURE_3D);const we=ee(U,A),Ne=A.source;t.bindTexture(ye,U.__webglTexture,s.TEXTURE0+ne);const ke=i.get(Ne);if(Ne.version!==ke.__version||we===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const _e=Wt.getPrimaries(Wt.workingColorSpace),Ye=A.colorSpace===cs?null:Wt.getPrimaries(A.colorSpace),ze=A.colorSpace===cs||_e===Ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let Se=y(A.image,!1,a.maxTextureSize);Se=Ge(A,Se);const je=o.convert(A.format,A.colorSpace),$e=o.convert(A.type);let Be=L(A.internalFormat,je,$e,A.normalized,A.colorSpace,A.isVideoTexture);Me(ye,A);let De;const vt=A.mipmaps,yt=A.isVideoTexture!==!0,Tt=ke.__version===void 0||we===!0,$=Ne.dataReady,Ue=F(A,Se);if(A.isDepthTexture)Be=k(A.format===Fs,A.type),Tt&&(yt?t.texStorage2D(s.TEXTURE_2D,1,Be,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,Be,Se.width,Se.height,0,je,$e,null));else if(A.isDataTexture)if(vt.length>0){yt&&Tt&&t.texStorage2D(s.TEXTURE_2D,Ue,Be,vt[0].width,vt[0].height);for(let _e=0,Ye=vt.length;_e<Ye;_e++)De=vt[_e],yt?$&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,De.width,De.height,je,$e,De.data):t.texImage2D(s.TEXTURE_2D,_e,Be,De.width,De.height,0,je,$e,De.data);A.generateMipmaps=!1}else yt?(Tt&&t.texStorage2D(s.TEXTURE_2D,Ue,Be,Se.width,Se.height),$&&ce(A,Se,je,$e)):t.texImage2D(s.TEXTURE_2D,0,Be,Se.width,Se.height,0,je,$e,Se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){yt&&Tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Be,vt[0].width,vt[0].height,Se.depth);for(let _e=0,Ye=vt.length;_e<Ye;_e++)if(De=vt[_e],A.format!==Ii)if(je!==null)if(yt){if($)if(A.layerUpdates.size>0){const ze=cx(De.width,De.height,A.format,A.type);for(const Ae of A.layerUpdates){const tt=De.data.subarray(Ae*ze/De.data.BYTES_PER_ELEMENT,(Ae+1)*ze/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,Ae,De.width,De.height,1,je,tt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,De.width,De.height,Se.depth,je,De.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,Be,De.width,De.height,Se.depth,0,De.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else yt?$&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,De.width,De.height,Se.depth,je,$e,De.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,Be,De.width,De.height,Se.depth,0,je,$e,De.data)}else{yt&&Tt&&t.texStorage2D(s.TEXTURE_2D,Ue,Be,vt[0].width,vt[0].height);for(let _e=0,Ye=vt.length;_e<Ye;_e++)De=vt[_e],A.format!==Ii?je!==null?yt?$&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,De.width,De.height,je,De.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,Be,De.width,De.height,0,De.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):yt?$&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,De.width,De.height,je,$e,De.data):t.texImage2D(s.TEXTURE_2D,_e,Be,De.width,De.height,0,je,$e,De.data)}else if(A.isDataArrayTexture)if(yt){if(Tt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Be,Se.width,Se.height,Se.depth),$)if(A.layerUpdates.size>0){const _e=cx(Se.width,Se.height,A.format,A.type);for(const Ye of A.layerUpdates){const ze=Se.data.subarray(Ye*_e/Se.data.BYTES_PER_ELEMENT,(Ye+1)*_e/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ye,Se.width,Se.height,1,je,$e,ze)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,je,$e,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,Se.width,Se.height,Se.depth,0,je,$e,Se.data);else if(A.isData3DTexture)yt?(Tt&&t.texStorage3D(s.TEXTURE_3D,Ue,Be,Se.width,Se.height,Se.depth),$&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,je,$e,Se.data)):t.texImage3D(s.TEXTURE_3D,0,Be,Se.width,Se.height,Se.depth,0,je,$e,Se.data);else if(A.isFramebufferTexture){if(Tt)if(yt)t.texStorage2D(s.TEXTURE_2D,Ue,Be,Se.width,Se.height);else{let _e=Se.width,Ye=Se.height;for(let ze=0;ze<Ue;ze++)t.texImage2D(s.TEXTURE_2D,ze,Be,_e,Ye,0,je,$e,null),_e>>=1,Ye>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){const _e=s.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),Se.parentNode!==_e){_e.appendChild(Se),x.add(A),_e.onpaint=St=>{const Qt=St.changedElements;for(const fe of x)Qt.includes(fe.image)&&(fe.needsUpdate=!0)},_e.requestPaint();return}const Ye=0,ze=s.RGBA,Ae=s.RGBA,tt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Ye,ze,Ae,tt,Se),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(vt.length>0){if(yt&&Tt){const _e=Jt(vt[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Be,_e.width,_e.height)}for(let _e=0,Ye=vt.length;_e<Ye;_e++)De=vt[_e],yt?$&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,je,$e,De):t.texImage2D(s.TEXTURE_2D,_e,Be,je,$e,De);A.generateMipmaps=!1}else if(yt){if(Tt){const _e=Jt(Se);t.texStorage2D(s.TEXTURE_2D,Ue,Be,_e.width,_e.height)}$&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,je,$e,Se)}else t.texImage2D(s.TEXTURE_2D,0,Be,je,$e,Se);S(A)&&R(ye),ke.__version=Ne.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Oe(U,A,ne){if(A.image.length!==6)return;const ye=ee(U,A),we=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ne);const Ne=i.get(we);if(we.version!==Ne.__version||ye===!0){t.activeTexture(s.TEXTURE0+ne);const ke=Wt.getPrimaries(Wt.workingColorSpace),xe=A.colorSpace===cs?null:Wt.getPrimaries(A.colorSpace),Se=A.colorSpace===cs||ke===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const je=A.isCompressedTexture||A.image[0].isCompressedTexture,$e=A.image[0]&&A.image[0].isDataTexture,Be=[];for(let Ae=0;Ae<6;Ae++)!je&&!$e?Be[Ae]=y(A.image[Ae],!0,a.maxCubemapSize):Be[Ae]=$e?A.image[Ae].image:A.image[Ae],Be[Ae]=Ge(A,Be[Ae]);const De=Be[0],vt=o.convert(A.format,A.colorSpace),yt=o.convert(A.type),Tt=L(A.internalFormat,vt,yt,A.normalized,A.colorSpace),$=A.isVideoTexture!==!0,Ue=Ne.__version===void 0||ye===!0,_e=we.dataReady;let Ye=F(A,De);Me(s.TEXTURE_CUBE_MAP,A);let ze;if(je){$&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ye,Tt,De.width,De.height);for(let Ae=0;Ae<6;Ae++){ze=Be[Ae].mipmaps;for(let tt=0;tt<ze.length;tt++){const St=ze[tt];A.format!==Ii?vt!==null?$?_e&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt,0,0,St.width,St.height,vt,St.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt,Tt,St.width,St.height,0,St.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt,0,0,St.width,St.height,vt,yt,St.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt,Tt,St.width,St.height,0,vt,yt,St.data)}}}else{if(ze=A.mipmaps,$&&Ue){ze.length>0&&Ye++;const Ae=Jt(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ye,Tt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if($e){$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Be[Ae].width,Be[Ae].height,vt,yt,Be[Ae].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Tt,Be[Ae].width,Be[Ae].height,0,vt,yt,Be[Ae].data);for(let tt=0;tt<ze.length;tt++){const Qt=ze[tt].image[Ae].image;$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt+1,0,0,Qt.width,Qt.height,vt,yt,Qt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt+1,Tt,Qt.width,Qt.height,0,vt,yt,Qt.data)}}else{$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,vt,yt,Be[Ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Tt,vt,yt,Be[Ae]);for(let tt=0;tt<ze.length;tt++){const St=ze[tt];$?_e&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt+1,0,0,vt,yt,St.image[Ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,tt+1,Tt,vt,yt,St.image[Ae])}}}S(A)&&R(s.TEXTURE_CUBE_MAP),Ne.__version=we.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function Ie(U,A,ne,ye,we,Ne){const ke=o.convert(ne.format,ne.colorSpace),xe=o.convert(ne.type),Se=L(ne.internalFormat,ke,xe,ne.normalized,ne.colorSpace),je=i.get(A),$e=i.get(ne);if($e.__renderTarget=A,!je.__hasExternalTextures){const Be=Math.max(1,A.width>>Ne),De=Math.max(1,A.height>>Ne);we===s.TEXTURE_3D||we===s.TEXTURE_2D_ARRAY?t.texImage3D(we,Ne,Se,Be,De,A.depth,0,ke,xe,null):t.texImage2D(we,Ne,Se,Be,De,0,ke,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),wt(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ye,we,$e.__webglTexture,0,Kt(A)):(we===s.TEXTURE_2D||we>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ye,we,$e.__webglTexture,Ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ut(U,A,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,U),A.depthBuffer){const ye=A.depthTexture,we=ye&&ye.isDepthTexture?ye.type:null,Ne=k(A.stencilBuffer,we),ke=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;wt(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt(A),Ne,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt(A),Ne,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,U)}else{const ye=A.textures;for(let we=0;we<ye.length;we++){const Ne=ye[we],ke=o.convert(Ne.format,Ne.colorSpace),xe=o.convert(Ne.type),Se=L(Ne.internalFormat,ke,xe,Ne.normalized,Ne.colorSpace);wt(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt(A),Se,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt(A),Se,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Se,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qe(U,A,ne){const ye=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const we=i.get(A.depthTexture);if(we.__renderTarget=A,(!we.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ye){if(we.__webglInit===void 0&&(we.__webglInit=!0,A.depthTexture.addEventListener("dispose",V)),we.__webglTexture===void 0){we.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,we.__webglTexture),Me(s.TEXTURE_CUBE_MAP,A.depthTexture);const je=o.convert(A.depthTexture.format),$e=o.convert(A.depthTexture.type);let Be;A.depthTexture.format===Lr?Be=s.DEPTH_COMPONENT24:A.depthTexture.format===Fs&&(Be=s.DEPTH24_STENCIL8);for(let De=0;De<6;De++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Be,A.width,A.height,0,je,$e,null)}}else te(A.depthTexture,0);const Ne=we.__webglTexture,ke=Kt(A),xe=ye?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,Se=A.depthTexture.format===Fs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===Lr)wt(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,xe,Ne,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,Se,xe,Ne,0);else if(A.depthTexture.format===Fs)wt(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,xe,Ne,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,Se,xe,Ne,0);else throw new Error("Unknown depthTexture format")}function We(U){const A=i.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const ye=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ye){const we=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ye.removeEventListener("dispose",we)};ye.addEventListener("dispose",we),A.__depthDisposeCallback=we}A.__boundDepthTexture=ye}if(U.depthTexture&&!A.__autoAllocateDepthBuffer)if(ne)for(let ye=0;ye<6;ye++)Qe(A.__webglFramebuffer[ye],U,ye);else{const ye=U.texture.mipmaps;ye&&ye.length>0?Qe(A.__webglFramebuffer[0],U,0):Qe(A.__webglFramebuffer,U,0)}else if(ne){A.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ye]),A.__webglDepthbuffer[ye]===void 0)A.__webglDepthbuffer[ye]=s.createRenderbuffer(),ut(A.__webglDepthbuffer[ye],U,!1);else{const we=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=A.__webglDepthbuffer[ye];s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,Ne)}}else{const ye=U.texture.mipmaps;if(ye&&ye.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ut(A.__webglDepthbuffer,U,!1);else{const we=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,Ne)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(U,A,ne){const ye=i.get(U);A!==void 0&&Ie(ye.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&We(U)}function dt(U){const A=U.texture,ne=i.get(U),ye=i.get(A);U.addEventListener("dispose",T);const we=U.textures,Ne=U.isWebGLCubeRenderTarget===!0,ke=we.length>1;if(ke||(ye.__webglTexture===void 0&&(ye.__webglTexture=s.createTexture()),ye.__version=A.version,c.memory.textures++),Ne){ne.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer[xe]=[];for(let Se=0;Se<A.mipmaps.length;Se++)ne.__webglFramebuffer[xe][Se]=s.createFramebuffer()}else ne.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let xe=0;xe<A.mipmaps.length;xe++)ne.__webglFramebuffer[xe]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(ke)for(let xe=0,Se=we.length;xe<Se;xe++){const je=i.get(we[xe]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),c.memory.textures++)}if(U.samples>0&&wt(U)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let xe=0;xe<we.length;xe++){const Se=we[xe];ne.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[xe]);const je=o.convert(Se.format,Se.colorSpace),$e=o.convert(Se.type),Be=L(Se.internalFormat,je,$e,Se.normalized,Se.colorSpace,U.isXRRenderTarget===!0),De=Kt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Be,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,ne.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),ut(ne.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ye.__webglTexture),Me(s.TEXTURE_CUBE_MAP,A);for(let xe=0;xe<6;xe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Se=0;Se<A.mipmaps.length;Se++)Ie(ne.__webglFramebuffer[xe][Se],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else Ie(ne.__webglFramebuffer[xe],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);S(A)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let xe=0,Se=we.length;xe<Se;xe++){const je=we[xe],$e=i.get(je);let Be=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Be=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Be,$e.__webglTexture),Me(Be,je),Ie(ne.__webglFramebuffer,U,je,s.COLOR_ATTACHMENT0+xe,Be,0),S(je)&&R(Be)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(xe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,ye.__webglTexture),Me(xe,A),A.mipmaps&&A.mipmaps.length>0)for(let Se=0;Se<A.mipmaps.length;Se++)Ie(ne.__webglFramebuffer[Se],U,A,s.COLOR_ATTACHMENT0,xe,Se);else Ie(ne.__webglFramebuffer,U,A,s.COLOR_ATTACHMENT0,xe,0);S(A)&&R(xe),t.unbindTexture()}U.depthBuffer&&We(U)}function Lt(U){const A=U.textures;for(let ne=0,ye=A.length;ne<ye;ne++){const we=A[ne];if(S(we)){const Ne=P(U),ke=i.get(we).__webglTexture;t.bindTexture(Ne,ke),R(Ne),t.unbindTexture()}}}const Ut=[],sn=[];function X(U){if(U.samples>0){if(wt(U)===!1){const A=U.textures,ne=U.width,ye=U.height;let we=s.COLOR_BUFFER_BIT;const Ne=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=i.get(U),xe=A.length>1;if(xe)for(let je=0;je<A.length;je++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const Se=U.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let je=0;je<A.length;je++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(we|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(we|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[je]);const $e=i.get(A[je]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,ne,ye,0,0,ne,ye,we,s.NEAREST),h===!0&&(Ut.length=0,sn.length=0,Ut.push(s.COLOR_ATTACHMENT0+je),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ut.push(Ne),sn.push(Ne),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,sn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let je=0;je<A.length;je++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,ke.__webglColorRenderbuffer[je]);const $e=i.get(A[je]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const A=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Kt(U){return Math.min(a.maxSamples,U.samples)}function wt(U){const A=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function $t(U){const A=c.render.frame;v.get(U)!==A&&(v.set(U,A),U.update())}function Ge(U,A){const ne=U.colorSpace,ye=U.format,we=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==eu&&ne!==cs&&(Wt.getTransfer(ne)===nn?(ye!==Ii||we!==Mi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",ne)),A}function Jt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=J,this.resetTextureUnits=se,this.getTextureUnits=de,this.setTextureUnits=W,this.setTexture2D=te,this.setTexture2DArray=le,this.setTexture3D=D,this.setTextureCube=w,this.rebindTextures=xt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bR(s,e){function t(i,a=cs){let o;const c=Wt.getTransfer(a);if(i===Mi)return s.UNSIGNED_BYTE;if(i===ip)return s.UNSIGNED_SHORT_4_4_4_4;if(i===rp)return s.UNSIGNED_SHORT_5_5_5_1;if(i===yv)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Sv)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===vv)return s.BYTE;if(i===_v)return s.SHORT;if(i===qo)return s.UNSIGNED_SHORT;if(i===np)return s.INT;if(i===lr)return s.UNSIGNED_INT;if(i===Ni)return s.FLOAT;if(i===Ir)return s.HALF_FLOAT;if(i===Mv)return s.ALPHA;if(i===bv)return s.RGB;if(i===Ii)return s.RGBA;if(i===Lr)return s.DEPTH_COMPONENT;if(i===Fs)return s.DEPTH_STENCIL;if(i===sp)return s.RED;if(i===ap)return s.RED_INTEGER;if(i===ks)return s.RG;if(i===op)return s.RG_INTEGER;if(i===lp)return s.RGBA_INTEGER;if(i===Gc||i===Wc||i===jc||i===Xc)if(c===nn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Gc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Gc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lh||i===ch||i===uh||i===dh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===lh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ch)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fh||i===hh||i===ph||i===mh||i===gh||i===Zc||i===xh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===fh||i===hh)return c===nn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ph)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===mh)return o.COMPRESSED_R11_EAC;if(i===gh)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Zc)return o.COMPRESSED_RG11_EAC;if(i===xh)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vh||i===_h||i===yh||i===Sh||i===Mh||i===bh||i===Eh||i===wh||i===Th||i===Ah||i===Rh||i===Ch||i===Ph||i===Nh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===vh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_h)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Th)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ah)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ch)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ph)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nh)return c===nn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ih||i===Lh||i===Dh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Ih)return c===nn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uh||i===Fh||i===Jc||i===Oh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Uh)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Fh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Jc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ko?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const ER=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wR=`
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

}`;class TR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Uv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cr({vertexShader:ER,fragmentShader:wR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mi(new hu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AR extends zs{constructor(e,t){super();const i=this;let a=null,o=1,c=null,d="local-floor",h=1,f=null,v=null,x=null,g=null,m=null,M=null;const E=typeof XRWebGLBinding<"u",y=new TR,S={},R=t.getContextAttributes();let P=null,L=null;const k=[],F=[],V=new It;let T=null;const I=new fi;I.viewport=new ln;const z=new fi;z.viewport=new ln;const B=[I,z],Y=new A1;let se=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let re=k[ee];return re===void 0&&(re=new df,k[ee]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ee){let re=k[ee];return re===void 0&&(re=new df,k[ee]=re),re.getGripSpace()},this.getHand=function(ee){let re=k[ee];return re===void 0&&(re=new df,k[ee]=re),re.getHandSpace()};function W(ee){const re=F.indexOf(ee.inputSource);if(re===-1)return;const ce=k[re];ce!==void 0&&(ce.update(ee.inputSource,ee.frame,f||c),ce.dispatchEvent({type:ee.type,data:ee.inputSource}))}function J(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",J),a.removeEventListener("inputsourceschange",K);for(let ee=0;ee<k.length;ee++){const re=F[ee];re!==null&&(F[ee]=null,k[ee].disconnect(re))}se=null,de=null,y.reset();for(const ee in S)delete S[ee];e.setRenderTarget(P),m=null,g=null,x=null,a=null,L=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){o=ee,i.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,i.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(ee){f=ee},this.getBaseLayer=function(){return g!==null?g:m},this.getBinding=function(){return x===null&&E&&(x=new XRWebGLBinding(a,t)),x},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",J),a.addEventListener("inputsourceschange",K),R.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(V),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,ge=null,Oe=null;R.depth&&(Oe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=R.stencil?Fs:Lr,ge=R.stencil?Ko:lr);const Ie={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:o};x=this.getBinding(),g=x.createProjectionLayer(Ie),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),L=new ar(g.textureWidth,g.textureHeight,{format:Ii,type:Mi,depthTexture:new Oa(g.textureWidth,g.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ce={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(a,t,ce),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),L=new ar(m.framebufferWidth,m.framebufferHeight,{format:Ii,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await a.requestReferenceSpace(d),Me.setContext(a),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(ee){for(let re=0;re<ee.removed.length;re++){const ce=ee.removed[re],ge=F.indexOf(ce);ge>=0&&(F[ge]=null,k[ge].disconnect(ce))}for(let re=0;re<ee.added.length;re++){const ce=ee.added[re];let ge=F.indexOf(ce);if(ge===-1){for(let Ie=0;Ie<k.length;Ie++)if(Ie>=F.length){F.push(ce),ge=Ie;break}else if(F[Ie]===null){F[Ie]=ce,ge=Ie;break}if(ge===-1)break}const Oe=k[ge];Oe&&Oe.connect(ce)}}const te=new Z,le=new Z;function D(ee,re,ce){te.setFromMatrixPosition(re.matrixWorld),le.setFromMatrixPosition(ce.matrixWorld);const ge=te.distanceTo(le),Oe=re.projectionMatrix.elements,Ie=ce.projectionMatrix.elements,ut=Oe[14]/(Oe[10]-1),Qe=Oe[14]/(Oe[10]+1),We=(Oe[9]+1)/Oe[5],xt=(Oe[9]-1)/Oe[5],dt=(Oe[8]-1)/Oe[0],Lt=(Ie[8]+1)/Ie[0],Ut=ut*dt,sn=ut*Lt,X=ge/(-dt+Lt),Kt=X*-dt;if(re.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Kt),ee.translateZ(X),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Oe[10]===-1)ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const wt=ut+X,$t=Qe+X,Ge=Ut-Kt,Jt=sn+(ge-Kt),U=We*Qe/$t*wt,A=xt*Qe/$t*wt;ee.projectionMatrix.makePerspective(Ge,Jt,U,A,wt,$t),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function w(ee,re){re===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(re.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let re=ee.near,ce=ee.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(ce=y.depthFar)),Y.near=z.near=I.near=re,Y.far=z.far=I.far=ce,(se!==Y.near||de!==Y.far)&&(a.updateRenderState({depthNear:Y.near,depthFar:Y.far}),se=Y.near,de=Y.far),Y.layers.mask=ee.layers.mask|6,I.layers.mask=Y.layers.mask&-5,z.layers.mask=Y.layers.mask&-3;const ge=ee.parent,Oe=Y.cameras;w(Y,ge);for(let Ie=0;Ie<Oe.length;Ie++)w(Oe[Ie],ge);Oe.length===2?D(Y,I,z):Y.projectionMatrix.copy(I.projectionMatrix),H(ee,Y,ge)};function H(ee,re,ce){ce===null?ee.matrix.copy(re.matrixWorld):(ee.matrix.copy(ce.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(re.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Fa*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&m===null))return h},this.setFoveation=function(ee){h=ee,g!==null&&(g.fixedFoveation=ee),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(ee){return S[ee]};let ve=null;function Ee(ee,re){if(v=re.getViewerPose(f||c),M=re,v!==null){const ce=v.views;m!==null&&(e.setRenderTargetFramebuffer(L,m.framebuffer),e.setRenderTarget(L));let ge=!1;ce.length!==Y.cameras.length&&(Y.cameras.length=0,ge=!0);for(let Qe=0;Qe<ce.length;Qe++){const We=ce[Qe];let xt=null;if(m!==null)xt=m.getViewport(We);else{const Lt=x.getViewSubImage(g,We);xt=Lt.viewport,Qe===0&&(e.setRenderTargetTextures(L,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(L))}let dt=B[Qe];dt===void 0&&(dt=new fi,dt.layers.enable(Qe),dt.viewport=new ln,B[Qe]=dt),dt.matrix.fromArray(We.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(We.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(xt.x,xt.y,xt.width,xt.height),Qe===0&&(Y.matrix.copy(dt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),ge===!0&&Y.cameras.push(dt)}const Oe=a.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&E){x=i.getBinding();const Qe=x.getDepthInformation(ce[0]);Qe&&Qe.isValid&&Qe.texture&&y.init(Qe,a.renderState)}if(Oe&&Oe.includes("camera-access")&&E){e.state.unbindTexture(),x=i.getBinding();for(let Qe=0;Qe<ce.length;Qe++){const We=ce[Qe].camera;if(We){let xt=S[We];xt||(xt=new Uv,S[We]=xt);const dt=x.getCameraImage(We);xt.sourceTexture=dt}}}}for(let ce=0;ce<k.length;ce++){const ge=F[ce],Oe=k[ce];ge!==null&&Oe!==void 0&&Oe.update(ge,re,f||c)}ve&&ve(ee,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),M=null}const Me=new zv;Me.setAnimationLoop(Ee),this.setAnimationLoop=function(ee){ve=ee},this.dispose=function(){}}}const RR=new Ot,$v=new Nt;$v.set(-1,0,0,0,1,0,0,0,1);function CR(s,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,Fv(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function a(y,S,R,P,L){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),x(y,S)):S.isMeshPhongMaterial?(o(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),g(y,S),S.isMeshPhysicalMaterial&&m(y,S,L)):S.isMeshMatcapMaterial?(o(y,S),M(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),E(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?h(y,S,R,P):S.isSpriteMaterial?f(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===hi&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===hi&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),P=R.envMap,L=R.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(RR.makeRotationFromEuler(L)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply($v),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function h(y,S,R,P){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=P*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function f(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function m(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===hi&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function E(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function PR(s,e,t,i){let a={},o={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,P){const L=P.program;i.uniformBlockBinding(R,L)}function f(R,P){let L=a[R.id];L===void 0&&(M(R),L=v(R),a[R.id]=L,R.addEventListener("dispose",y));const k=P.program;i.updateUBOMapping(R,k);const F=e.render.frame;o[R.id]!==F&&(g(R),o[R.id]=F)}function v(R){const P=x();R.__bindingPointIndex=P;const L=s.createBuffer(),k=R.__size,F=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,k,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,L),L}function x(){for(let R=0;R<d;R++)if(c.indexOf(R)===-1)return c.push(R),R;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const P=a[R.id],L=R.uniforms,k=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,V=L.length;F<V;F++){const T=Array.isArray(L[F])?L[F]:[L[F]];for(let I=0,z=T.length;I<z;I++){const B=T[I];if(m(B,F,I,k)===!0){const Y=B.__offset,se=Array.isArray(B.value)?B.value:[B.value];let de=0;for(let W=0;W<se.length;W++){const J=se[W],K=E(J);typeof J=="number"||typeof J=="boolean"?(B.__data[0]=J,s.bufferSubData(s.UNIFORM_BUFFER,Y+de,B.__data)):J.isMatrix3?(B.__data[0]=J.elements[0],B.__data[1]=J.elements[1],B.__data[2]=J.elements[2],B.__data[3]=0,B.__data[4]=J.elements[3],B.__data[5]=J.elements[4],B.__data[6]=J.elements[5],B.__data[7]=0,B.__data[8]=J.elements[6],B.__data[9]=J.elements[7],B.__data[10]=J.elements[8],B.__data[11]=0):ArrayBuffer.isView(J)?B.__data.set(new J.constructor(J.buffer,J.byteOffset,B.__data.length)):(J.toArray(B.__data,de),de+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(R,P,L,k){const F=R.value,V=P+"_"+L;if(k[V]===void 0)return typeof F=="number"||typeof F=="boolean"?k[V]=F:ArrayBuffer.isView(F)?k[V]=F.slice():k[V]=F.clone(),!0;{const T=k[V];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return k[V]=F,!0}else{if(ArrayBuffer.isView(F))return!0;if(T.equals(F)===!1)return T.copy(F),!0}}return!1}function M(R){const P=R.uniforms;let L=0;const k=16;for(let V=0,T=P.length;V<T;V++){const I=Array.isArray(P[V])?P[V]:[P[V]];for(let z=0,B=I.length;z<B;z++){const Y=I[z],se=Array.isArray(Y.value)?Y.value:[Y.value];for(let de=0,W=se.length;de<W;de++){const J=se[de],K=E(J),te=L%k,le=te%K.boundary,D=te+le;L+=le,D!==0&&k-D<K.storage&&(L+=k-D),Y.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=L,L+=K.storage}}}const F=L%k;return F>0&&(L+=k-F),R.__size=L,R.__cache={},this}function E(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(P.boundary=16,P.storage=R.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",R),P}function y(R){const P=R.target;P.removeEventListener("dispose",y);const L=c.indexOf(P.__bindingPointIndex);c.splice(L,1),s.deleteBuffer(a[P.id]),delete a[P.id],delete o[P.id]}function S(){for(const R in a)s.deleteBuffer(a[R]);c=[],a={},o={}}return{bind:h,update:f,dispose:S}}const NR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let tr=null;function IR(){return tr===null&&(tr=new mp(NR,16,16,ks,Ir),tr.name="DFG_LUT",tr.minFilter=Zn,tr.magFilter=Zn,tr.wrapS=Tr,tr.wrapT=Tr,tr.generateMipmaps=!1,tr.needsUpdate=!0),tr}class LR{constructor(e={}){const{canvas:t=ob(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:m=Mi}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const E=m,y=new Set([lp,op,ap]),S=new Set([Mi,lr,qo,Ko,ip,rp]),R=new Uint32Array(4),P=new Int32Array(4),L=new Z;let k=null,F=null;const V=[],T=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let B=!1,Y=null;this._outputColorSpace=di;let se=0,de=0,W=null,J=-1,K=null;const te=new ln,le=new ln;let D=null;const w=new Ht(0);let H=0,ve=t.width,Ee=t.height,Me=1,ee=null,re=null;const ce=new ln(0,0,ve,Ee),ge=new ln(0,0,ve,Ee);let Oe=!1;const Ie=new gp;let ut=!1,Qe=!1;const We=new Ot,xt=new Z,dt=new ln,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function sn(){return W===null?Me:1}let X=i;function Kt(N,Q){return t.getContext(N,Q)}try{const N={alpha:!0,depth:a,stencil:o,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ep}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",St,!1),X===null){const Q="webgl2";if(X=Kt(Q,N),X===null)throw Kt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw gt("WebGLRenderer: "+N.message),N}let wt,$t,Ge,Jt,U,A,ne,ye,we,Ne,ke,xe,Se,je,$e,Be,De,vt,yt,Tt,$,Ue,_e;function Ye(){wt=new IT(X),wt.init(),$=new bR(X,wt),$t=new ET(X,wt,e,$),Ge=new SR(X,wt),$t.reversedDepthBuffer&&g&&Ge.buffers.depth.setReversed(!0),Jt=new UT(X),U=new oR,A=new MR(X,wt,Ge,U,$t,$,Jt),ne=new NT(z),ye=new B1(X),Ue=new MT(X,ye),we=new LT(X,ye,Jt,Ue),Ne=new OT(X,we,ye,Ue,Jt),vt=new FT(X,$t,A),$e=new wT(U),ke=new aR(z,ne,wt,$t,Ue,$e),xe=new CR(z,U),Se=new cR,je=new mR(wt),De=new ST(z,ne,Ge,Ne,M,h),Be=new yR(z,Ne,$t),_e=new PR(X,Jt,$t,Ge),yt=new bT(X,wt,Jt),Tt=new DT(X,wt,Jt),Jt.programs=ke.programs,z.capabilities=$t,z.extensions=wt,z.properties=U,z.renderLists=Se,z.shadowMap=Be,z.state=Ge,z.info=Jt}Ye(),E!==Mi&&(I=new BT(E,t.width,t.height,a,o));const ze=new AR(z,X);this.xr=ze,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const N=wt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=wt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(N){N!==void 0&&(Me=N,this.setSize(ve,Ee,!1))},this.getSize=function(N){return N.set(ve,Ee)},this.setSize=function(N,Q,he=!0){if(ze.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=N,Ee=Q,t.width=Math.floor(N*Me),t.height=Math.floor(Q*Me),he===!0&&(t.style.width=N+"px",t.style.height=Q+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,N,Q)},this.getDrawingBufferSize=function(N){return N.set(ve*Me,Ee*Me).floor()},this.setDrawingBufferSize=function(N,Q,he){ve=N,Ee=Q,Me=he,t.width=Math.floor(N*he),t.height=Math.floor(Q*he),this.setViewport(0,0,N,Q)},this.setEffects=function(N){if(E===Mi){gt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Q=0;Q<N.length;Q++)if(N[Q].isOutputPass===!0){ct("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(te)},this.getViewport=function(N){return N.copy(ce)},this.setViewport=function(N,Q,he,ie){N.isVector4?ce.set(N.x,N.y,N.z,N.w):ce.set(N,Q,he,ie),Ge.viewport(te.copy(ce).multiplyScalar(Me).round())},this.getScissor=function(N){return N.copy(ge)},this.setScissor=function(N,Q,he,ie){N.isVector4?ge.set(N.x,N.y,N.z,N.w):ge.set(N,Q,he,ie),Ge.scissor(le.copy(ge).multiplyScalar(Me).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(N){Ge.setScissorTest(Oe=N)},this.setOpaqueSort=function(N){ee=N},this.setTransparentSort=function(N){re=N},this.getClearColor=function(N){return N.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(N=!0,Q=!0,he=!0){let ie=0;if(N){let oe=!1;if(W!==null){const He=W.texture.format;oe=y.has(He)}if(oe){const He=W.texture.type,Ze=S.has(He),Ve=De.getClearColor(),it=De.getClearAlpha(),lt=Ve.r,At=Ve.g,Rt=Ve.b;Ze?(R[0]=lt,R[1]=At,R[2]=Rt,R[3]=it,X.clearBufferuiv(X.COLOR,0,R)):(P[0]=lt,P[1]=At,P[2]=Rt,P[3]=it,X.clearBufferiv(X.COLOR,0,P))}else ie|=X.COLOR_BUFFER_BIT}Q&&(ie|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ie|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&X.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),Y=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",St,!1),De.dispose(),Se.dispose(),je.dispose(),U.dispose(),ne.dispose(),Ne.dispose(),Ue.dispose(),_e.dispose(),ke.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",mt),ze.removeEventListener("sessionend",me),at.stop()};function Ae(N){N.preventDefault(),nu("WebGLRenderer: Context Lost."),B=!0}function tt(){nu("WebGLRenderer: Context Restored."),B=!1;const N=Jt.autoReset,Q=Be.enabled,he=Be.autoUpdate,ie=Be.needsUpdate,oe=Be.type;Ye(),Jt.autoReset=N,Be.enabled=Q,Be.autoUpdate=he,Be.needsUpdate=ie,Be.type=oe}function St(N){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Qt(N){const Q=N.target;Q.removeEventListener("dispose",Qt),fe(Q)}function fe(N){be(N),U.remove(N)}function be(N){const Q=U.get(N).programs;Q!==void 0&&(Q.forEach(function(he){ke.releaseProgram(he)}),N.isShaderMaterial&&ke.releaseShaderCache(N))}this.renderBufferDirect=function(N,Q,he,ie,oe,He){Q===null&&(Q=Lt);const Ze=oe.isMesh&&oe.matrixWorld.determinant()<0,Ve=pn(N,Q,he,ie,oe);Ge.setMaterial(ie,Ze);let it=he.index,lt=1;if(ie.wireframe===!0){if(it=we.getWireframeAttribute(he),it===void 0)return;lt=2}const At=he.drawRange,Rt=he.attributes.position;let st=At.start*lt,Xt=(At.start+At.count)*lt;He!==null&&(st=Math.max(st,He.start*lt),Xt=Math.min(Xt,(He.start+He.count)*lt)),it!==null?(st=Math.max(st,0),Xt=Math.min(Xt,it.count)):Rt!=null&&(st=Math.max(st,0),Xt=Math.min(Xt,Rt.count));const cn=Xt-st;if(cn<0||cn===1/0)return;Ue.setup(oe,ie,Ve,he,it);let mn,en=yt;if(it!==null&&(mn=ye.get(it),en=Tt,en.setIndex(mn)),oe.isMesh)ie.wireframe===!0?(Ge.setLineWidth(ie.wireframeLinewidth*sn()),en.setMode(X.LINES)):en.setMode(X.TRIANGLES);else if(oe.isLine){let wn=ie.linewidth;wn===void 0&&(wn=1),Ge.setLineWidth(wn*sn()),oe.isLineSegments?en.setMode(X.LINES):oe.isLineLoop?en.setMode(X.LINE_LOOP):en.setMode(X.LINE_STRIP)}else oe.isPoints?en.setMode(X.POINTS):oe.isSprite&&en.setMode(X.TRIANGLES);if(oe.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))en.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const wn=oe._multiDrawStarts,qe=oe._multiDrawCounts,zn=oe._multiDrawCount,Ft=it?ye.get(it).bytesPerElement:1,ii=U.get(ie).currentProgram.getUniforms();for(let ri=0;ri<zn;ri++)ii.setValue(X,"_gl_DrawID",ri),en.render(wn[ri]/Ft,qe[ri])}else if(oe.isInstancedMesh)en.renderInstances(st,cn,oe.count);else if(he.isInstancedBufferGeometry){const wn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,qe=Math.min(he.instanceCount,wn);en.renderInstances(st,cn,qe)}else en.render(st,cn)};function Te(N,Q,he){N.transparent===!0&&N.side===ir&&N.forceSinglePass===!1?(N.side=hi,N.needsUpdate=!0,Sn(N,Q,he),N.side=ds,N.needsUpdate=!0,Sn(N,Q,he),N.side=ir):Sn(N,Q,he)}this.compile=function(N,Q,he=null){he===null&&(he=N),F=je.get(he),F.init(Q),T.push(F),he.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(F.pushLight(oe),oe.castShadow&&F.pushShadow(oe))}),N!==he&&N.traverseVisible(function(oe){oe.isLight&&oe.layers.test(Q.layers)&&(F.pushLight(oe),oe.castShadow&&F.pushShadow(oe))}),F.setupLights();const ie=new Set;return N.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const He=oe.material;if(He)if(Array.isArray(He))for(let Ze=0;Ze<He.length;Ze++){const Ve=He[Ze];Te(Ve,he,oe),ie.add(Ve)}else Te(He,he,oe),ie.add(He)}),F=T.pop(),ie},this.compileAsync=function(N,Q,he=null){const ie=this.compile(N,Q,he);return new Promise(oe=>{function He(){if(ie.forEach(function(Ze){U.get(Ze).currentProgram.isReady()&&ie.delete(Ze)}),ie.size===0){oe(N);return}setTimeout(He,10)}wt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Ce=null;function et(N){Ce&&Ce(N)}function mt(){at.stop()}function me(){at.start()}const at=new zv;at.setAnimationLoop(et),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(N){Ce=N,ze.setAnimationLoop(N),N===null?at.stop():at.start()},ze.addEventListener("sessionstart",mt),ze.addEventListener("sessionend",me),this.render=function(N,Q){if(Q!==void 0&&Q.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;Y!==null&&Y.renderStart(N,Q);const he=ze.enabled===!0&&ze.isPresenting===!0,ie=I!==null&&(W===null||he)&&I.begin(z,W);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(Q),Q=ze.getCamera()),N.isScene===!0&&N.onBeforeRender(z,N,Q,W),F=je.get(N,T.length),F.init(Q),F.state.textureUnits=A.getTextureUnits(),T.push(F),We.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Ie.setFromProjectionMatrix(We,rr,Q.reversedDepth),Qe=this.localClippingEnabled,ut=$e.init(this.clippingPlanes,Qe),k=Se.get(N,V.length),k.init(),V.push(k),ze.enabled===!0&&ze.isPresenting===!0){const Ze=z.xr.getDepthSensingMesh();Ze!==null&&bt(Ze,Q,-1/0,z.sortObjects)}bt(N,Q,0,z.sortObjects),k.finish(),z.sortObjects===!0&&k.sort(ee,re),Ut=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,Ut&&De.addToRenderList(k,N),this.info.render.frame++,ut===!0&&$e.beginShadows();const oe=F.state.shadowsArray;if(Be.render(oe,N,Q),ut===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&I.hasRenderPass())===!1){const Ze=k.opaque,Ve=k.transmissive;if(F.setupLights(),Q.isArrayCamera){const it=Q.cameras;if(Ve.length>0)for(let lt=0,At=it.length;lt<At;lt++){const Rt=it[lt];Pt(Ze,Ve,N,Rt)}Ut&&De.render(N);for(let lt=0,At=it.length;lt<At;lt++){const Rt=it[lt];Ct(k,N,Rt,Rt.viewport)}}else Ve.length>0&&Pt(Ze,Ve,N,Q),Ut&&De.render(N),Ct(k,N,Q)}W!==null&&de===0&&(A.updateMultisampleRenderTarget(W),A.updateRenderTargetMipmap(W)),ie&&I.end(z),N.isScene===!0&&N.onAfterRender(z,N,Q),Ue.resetDefaultState(),J=-1,K=null,T.pop(),T.length>0?(F=T[T.length-1],A.setTextureUnits(F.state.textureUnits),ut===!0&&$e.setGlobalState(z.clippingPlanes,F.state.camera)):F=null,V.pop(),V.length>0?k=V[V.length-1]:k=null,Y!==null&&Y.renderEnd()};function bt(N,Q,he,ie){if(N.visible===!1)return;if(N.layers.test(Q.layers)){if(N.isGroup)he=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Q);else if(N.isLightProbeGrid)F.pushLightProbeGrid(N);else if(N.isLight)F.pushLight(N),N.castShadow&&F.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Ie.intersectsSprite(N)){ie&&dt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(We);const Ze=Ne.update(N),Ve=N.material;Ve.visible&&k.push(N,Ze,Ve,he,dt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Ie.intersectsObject(N))){const Ze=Ne.update(N),Ve=N.material;if(ie&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),dt.copy(N.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),dt.copy(Ze.boundingSphere.center)),dt.applyMatrix4(N.matrixWorld).applyMatrix4(We)),Array.isArray(Ve)){const it=Ze.groups;for(let lt=0,At=it.length;lt<At;lt++){const Rt=it[lt],st=Ve[Rt.materialIndex];st&&st.visible&&k.push(N,Ze,st,he,dt.z,Rt)}}else Ve.visible&&k.push(N,Ze,Ve,he,dt.z,null)}}const He=N.children;for(let Ze=0,Ve=He.length;Ze<Ve;Ze++)bt(He[Ze],Q,he,ie)}function Ct(N,Q,he,ie){const{opaque:oe,transmissive:He,transparent:Ze}=N;F.setupLightsView(he),ut===!0&&$e.setGlobalState(z.clippingPlanes,he),ie&&Ge.viewport(te.copy(ie)),oe.length>0&&Et(oe,Q,he),He.length>0&&Et(He,Q,he),Ze.length>0&&Et(Ze,Q,he),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Pt(N,Q,he,ie){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ie.id]===void 0){const st=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ie.id]=new ar(1,1,{generateMipmaps:!0,type:st?Ir:Mi,minFilter:Us,samples:Math.max(4,$t.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace})}const He=F.state.transmissionRenderTarget[ie.id],Ze=ie.viewport||te;He.setSize(Ze.z*z.transmissionResolutionScale,Ze.w*z.transmissionResolutionScale);const Ve=z.getRenderTarget(),it=z.getActiveCubeFace(),lt=z.getActiveMipmapLevel();z.setRenderTarget(He),z.getClearColor(w),H=z.getClearAlpha(),H<1&&z.setClearColor(16777215,.5),z.clear(),Ut&&De.render(he);const At=z.toneMapping;z.toneMapping=sr;const Rt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),F.setupLightsView(ie),ut===!0&&$e.setGlobalState(z.clippingPlanes,ie),Et(N,he,ie),A.updateMultisampleRenderTarget(He),A.updateRenderTargetMipmap(He),wt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Xt=0,cn=Q.length;Xt<cn;Xt++){const mn=Q[Xt],{object:en,geometry:wn,material:qe,group:zn}=mn;if(qe.side===ir&&en.layers.test(ie.layers)){const Ft=qe.side;qe.side=hi,qe.needsUpdate=!0,_t(en,he,ie,wn,qe,zn),qe.side=Ft,qe.needsUpdate=!0,st=!0}}st===!0&&(A.updateMultisampleRenderTarget(He),A.updateRenderTargetMipmap(He))}z.setRenderTarget(Ve,it,lt),z.setClearColor(w,H),Rt!==void 0&&(ie.viewport=Rt),z.toneMapping=At}function Et(N,Q,he){const ie=Q.isScene===!0?Q.overrideMaterial:null;for(let oe=0,He=N.length;oe<He;oe++){const Ze=N[oe],{object:Ve,geometry:it,group:lt}=Ze;let At=Ze.material;At.allowOverride===!0&&ie!==null&&(At=ie),Ve.layers.test(he.layers)&&_t(Ve,Q,he,it,At,lt)}}function _t(N,Q,he,ie,oe,He){N.onBeforeRender(z,Q,he,ie,oe,He),N.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),oe.onBeforeRender(z,Q,he,ie,N,He),oe.transparent===!0&&oe.side===ir&&oe.forceSinglePass===!1?(oe.side=hi,oe.needsUpdate=!0,z.renderBufferDirect(he,Q,ie,oe,N,He),oe.side=ds,oe.needsUpdate=!0,z.renderBufferDirect(he,Q,ie,oe,N,He),oe.side=ir):z.renderBufferDirect(he,Q,ie,oe,N,He),N.onAfterRender(z,Q,he,ie,oe,He)}function Sn(N,Q,he){Q.isScene!==!0&&(Q=Lt);const ie=U.get(N),oe=F.state.lights,He=F.state.shadowsArray,Ze=oe.state.version,Ve=ke.getParameters(N,oe.state,He,Q,he,F.state.lightProbeGridArray),it=ke.getProgramCacheKey(Ve);let lt=ie.programs;ie.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Q.environment:null,ie.fog=Q.fog;const At=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ie.envMap=ne.get(N.envMap||ie.environment,At),ie.envMapRotation=ie.environment!==null&&N.envMap===null?Q.environmentRotation:N.envMapRotation,lt===void 0&&(N.addEventListener("dispose",Qt),lt=new Map,ie.programs=lt);let Rt=lt.get(it);if(Rt!==void 0){if(ie.currentProgram===Rt&&ie.lightsStateVersion===Ze)return kt(N,Ve),Rt}else Ve.uniforms=ke.getUniforms(N),Y!==null&&N.isNodeMaterial&&Y.build(N,he,Ve),N.onBeforeCompile(Ve,z),Rt=ke.acquireProgram(Ve,it),lt.set(it,Rt),ie.uniforms=Ve.uniforms;const st=ie.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(st.clippingPlanes=$e.uniform),kt(N,Ve),ie.needsLights=on(N),ie.lightsStateVersion=Ze,ie.needsLights&&(st.ambientLightColor.value=oe.state.ambient,st.lightProbe.value=oe.state.probe,st.directionalLights.value=oe.state.directional,st.directionalLightShadows.value=oe.state.directionalShadow,st.spotLights.value=oe.state.spot,st.spotLightShadows.value=oe.state.spotShadow,st.rectAreaLights.value=oe.state.rectArea,st.ltc_1.value=oe.state.rectAreaLTC1,st.ltc_2.value=oe.state.rectAreaLTC2,st.pointLights.value=oe.state.point,st.pointLightShadows.value=oe.state.pointShadow,st.hemisphereLights.value=oe.state.hemi,st.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,st.spotLightMatrix.value=oe.state.spotLightMatrix,st.spotLightMap.value=oe.state.spotLightMap,st.pointShadowMatrix.value=oe.state.pointShadowMatrix),ie.lightProbeGrid=F.state.lightProbeGridArray.length>0,ie.currentProgram=Rt,ie.uniformsList=null,Rt}function Jn(N){if(N.uniformsList===null){const Q=N.currentProgram.getUniforms();N.uniformsList=Yc.seqWithValue(Q.seq,N.uniforms)}return N.uniformsList}function kt(N,Q){const he=U.get(N);he.outputColorSpace=Q.outputColorSpace,he.batching=Q.batching,he.batchingColor=Q.batchingColor,he.instancing=Q.instancing,he.instancingColor=Q.instancingColor,he.instancingMorph=Q.instancingMorph,he.skinning=Q.skinning,he.morphTargets=Q.morphTargets,he.morphNormals=Q.morphNormals,he.morphColors=Q.morphColors,he.morphTargetsCount=Q.morphTargetsCount,he.numClippingPlanes=Q.numClippingPlanes,he.numIntersection=Q.numClipIntersection,he.vertexAlphas=Q.vertexAlphas,he.vertexTangents=Q.vertexTangents,he.toneMapping=Q.toneMapping}function Gt(N,Q){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;L.setFromMatrixPosition(Q.matrixWorld);for(let he=0,ie=N.length;he<ie;he++){const oe=N[he];if(oe.texture!==null&&oe.boundingBox.containsPoint(L))return oe}return null}function pn(N,Q,he,ie,oe){Q.isScene!==!0&&(Q=Lt),A.resetTextureUnits();const He=Q.fog,Ze=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Q.environment:null,Ve=W===null?z.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Wt.workingColorSpace,it=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,lt=ne.get(ie.envMap||Ze,it),At=ie.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Rt=!!he.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),st=!!he.morphAttributes.position,Xt=!!he.morphAttributes.normal,cn=!!he.morphAttributes.color;let mn=sr;ie.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(mn=z.toneMapping);const en=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,wn=en!==void 0?en.length:0,qe=U.get(ie),zn=F.state.lights;if(ut===!0&&(Qe===!0||N!==K)){const tn=N===K&&ie.id===J;$e.setState(ie,N,tn)}let Ft=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==zn.state.version||qe.outputColorSpace!==Ve||oe.isBatchedMesh&&qe.batching===!1||!oe.isBatchedMesh&&qe.batching===!0||oe.isBatchedMesh&&qe.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&qe.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&qe.instancing===!1||!oe.isInstancedMesh&&qe.instancing===!0||oe.isSkinnedMesh&&qe.skinning===!1||!oe.isSkinnedMesh&&qe.skinning===!0||oe.isInstancedMesh&&qe.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&qe.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&qe.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&qe.instancingMorph===!1&&oe.morphTexture!==null||qe.envMap!==lt||ie.fog===!0&&qe.fog!==He||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==$e.numPlanes||qe.numIntersection!==$e.numIntersection)||qe.vertexAlphas!==At||qe.vertexTangents!==Rt||qe.morphTargets!==st||qe.morphNormals!==Xt||qe.morphColors!==cn||qe.toneMapping!==mn||qe.morphTargetsCount!==wn||!!qe.lightProbeGrid!=F.state.lightProbeGridArray.length>0)&&(Ft=!0):(Ft=!0,qe.__version=ie.version);let ii=qe.currentProgram;Ft===!0&&(ii=Sn(ie,Q,oe),Y&&ie.isNodeMaterial&&Y.onUpdateProgram(ie,ii,qe));let ri=!1,Bt=!1,ur=!1;const Zt=ii.getUniforms(),dn=qe.uniforms;if(Ge.useProgram(ii.program)&&(ri=!0,Bt=!0,ur=!0),ie.id!==J&&(J=ie.id,Bt=!0),qe.needsLights){const tn=Gt(F.state.lightProbeGridArray,oe);qe.lightProbeGrid!==tn&&(qe.lightProbeGrid=tn,Bt=!0)}if(ri||K!==N){Ge.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Zt.setValue(X,"projectionMatrix",N.projectionMatrix),Zt.setValue(X,"viewMatrix",N.matrixWorldInverse);const Ui=Zt.map.cameraPosition;Ui!==void 0&&Ui.setValue(X,xt.setFromMatrixPosition(N.matrixWorld)),$t.logarithmicDepthBuffer&&Zt.setValue(X,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Zt.setValue(X,"isOrthographic",N.isOrthographicCamera===!0),K!==N&&(K=N,Bt=!0,ur=!0)}if(qe.needsLights&&(zn.state.directionalShadowMap.length>0&&Zt.setValue(X,"directionalShadowMap",zn.state.directionalShadowMap,A),zn.state.spotShadowMap.length>0&&Zt.setValue(X,"spotShadowMap",zn.state.spotShadowMap,A),zn.state.pointShadowMap.length>0&&Zt.setValue(X,"pointShadowMap",zn.state.pointShadowMap,A)),oe.isSkinnedMesh){Zt.setOptional(X,oe,"bindMatrix"),Zt.setOptional(X,oe,"bindMatrixInverse");const tn=oe.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Zt.setValue(X,"boneTexture",tn.boneTexture,A))}oe.isBatchedMesh&&(Zt.setOptional(X,oe,"batchingTexture"),Zt.setValue(X,"batchingTexture",oe._matricesTexture,A),Zt.setOptional(X,oe,"batchingIdTexture"),Zt.setValue(X,"batchingIdTexture",oe._indirectTexture,A),Zt.setOptional(X,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Zt.setValue(X,"batchingColorTexture",oe._colorsTexture,A));const Di=he.morphAttributes;if((Di.position!==void 0||Di.normal!==void 0||Di.color!==void 0)&&vt.update(oe,he,ii),(Bt||qe.receiveShadow!==oe.receiveShadow)&&(qe.receiveShadow=oe.receiveShadow,Zt.setValue(X,"receiveShadow",oe.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Q.environment!==null&&(dn.envMapIntensity.value=Q.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=IR()),Bt){if(Zt.setValue(X,"toneMappingExposure",z.toneMappingExposure),qe.needsLights&&jt(dn,ur),He&&ie.fog===!0&&xe.refreshFogUniforms(dn,He),xe.refreshMaterialUniforms(dn,ie,Me,Ee,F.state.transmissionRenderTarget[N.id]),qe.needsLights&&qe.lightProbeGrid){const tn=qe.lightProbeGrid;dn.probesSH.value=tn.texture,dn.probesMin.value.copy(tn.boundingBox.min),dn.probesMax.value.copy(tn.boundingBox.max),dn.probesResolution.value.copy(tn.resolution)}Yc.upload(X,Jn(qe),dn,A)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Yc.upload(X,Jn(qe),dn,A),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Zt.setValue(X,"center",oe.center),Zt.setValue(X,"modelViewMatrix",oe.modelViewMatrix),Zt.setValue(X,"normalMatrix",oe.normalMatrix),Zt.setValue(X,"modelMatrix",oe.matrixWorld),ie.uniformsGroups!==void 0){const tn=ie.uniformsGroups;for(let Ui=0,Yi=tn.length;Ui<Yi;Ui++){const ms=tn[Ui];_e.update(ms,ii),_e.bind(ms,ii)}}return ii}function jt(N,Q){N.ambientLightColor.needsUpdate=Q,N.lightProbe.needsUpdate=Q,N.directionalLights.needsUpdate=Q,N.directionalLightShadows.needsUpdate=Q,N.pointLights.needsUpdate=Q,N.pointLightShadows.needsUpdate=Q,N.spotLights.needsUpdate=Q,N.spotLightShadows.needsUpdate=Q,N.rectAreaLights.needsUpdate=Q,N.hemisphereLights.needsUpdate=Q}function on(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(N,Q,he){const ie=U.get(N);ie.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),U.get(N.texture).__webglTexture=Q,U.get(N.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:he,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Q){const he=U.get(N);he.__webglFramebuffer=Q,he.__useDefaultFramebuffer=Q===void 0};const ft=X.createFramebuffer();this.setRenderTarget=function(N,Q=0,he=0){W=N,se=Q,de=he;let ie=null,oe=!1,He=!1;if(N){const Ve=U.get(N);if(Ve.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(X.FRAMEBUFFER,Ve.__webglFramebuffer),te.copy(N.viewport),le.copy(N.scissor),D=N.scissorTest,Ge.viewport(te),Ge.scissor(le),Ge.setScissorTest(D),J=-1;return}else if(Ve.__webglFramebuffer===void 0)A.setupRenderTarget(N);else if(Ve.__hasExternalTextures)A.rebindTextures(N,U.get(N.texture).__webglTexture,U.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const At=N.depthTexture;if(Ve.__boundDepthTexture!==At){if(At!==null&&U.has(At)&&(N.width!==At.image.width||N.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(N)}}const it=N.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(He=!0);const lt=U.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(lt[Q])?ie=lt[Q][he]:ie=lt[Q],oe=!0):N.samples>0&&A.useMultisampledRTT(N)===!1?ie=U.get(N).__webglMultisampledFramebuffer:Array.isArray(lt)?ie=lt[he]:ie=lt,te.copy(N.viewport),le.copy(N.scissor),D=N.scissorTest}else te.copy(ce).multiplyScalar(Me).floor(),le.copy(ge).multiplyScalar(Me).floor(),D=Oe;if(he!==0&&(ie=ft),Ge.bindFramebuffer(X.FRAMEBUFFER,ie)&&Ge.drawBuffers(N,ie),Ge.viewport(te),Ge.scissor(le),Ge.setScissorTest(D),oe){const Ve=U.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ve.__webglTexture,he)}else if(He){const Ve=Q;for(let it=0;it<N.textures.length;it++){const lt=U.get(N.textures[it]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+it,lt.__webglTexture,he,Ve)}}else if(N!==null&&he!==0){const Ve=U.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ve.__webglTexture,he)}J=-1},this.readRenderTargetPixels=function(N,Q,he,ie,oe,He,Ze,Ve=0){if(!(N&&N.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=U.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ze!==void 0&&(it=it[Ze]),it){Ge.bindFramebuffer(X.FRAMEBUFFER,it);try{const lt=N.textures[Ve],At=lt.format,Rt=lt.type;if(N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ve),!$t.textureFormatReadable(At)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Rt)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=N.width-ie&&he>=0&&he<=N.height-oe&&X.readPixels(Q,he,ie,oe,$.convert(At),$.convert(Rt),He)}finally{const lt=W!==null?U.get(W).__webglFramebuffer:null;Ge.bindFramebuffer(X.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(N,Q,he,ie,oe,He,Ze,Ve=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=U.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ze!==void 0&&(it=it[Ze]),it)if(Q>=0&&Q<=N.width-ie&&he>=0&&he<=N.height-oe){Ge.bindFramebuffer(X.FRAMEBUFFER,it);const lt=N.textures[Ve],At=lt.format,Rt=lt.type;if(N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Ve),!$t.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,st),X.bufferData(X.PIXEL_PACK_BUFFER,He.byteLength,X.STREAM_READ),X.readPixels(Q,he,ie,oe,$.convert(At),$.convert(Rt),0);const Xt=W!==null?U.get(W).__webglFramebuffer:null;Ge.bindFramebuffer(X.FRAMEBUFFER,Xt);const cn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await lb(X,cn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,st),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,He),X.deleteBuffer(st),X.deleteSync(cn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Q=null,he=0){const ie=Math.pow(2,-he),oe=Math.floor(N.image.width*ie),He=Math.floor(N.image.height*ie),Ze=Q!==null?Q.x:0,Ve=Q!==null?Q.y:0;A.setTexture2D(N,0),X.copyTexSubImage2D(X.TEXTURE_2D,he,0,0,Ze,Ve,oe,He),Ge.unbindTexture()};const Rn=X.createFramebuffer(),Bn=X.createFramebuffer();this.copyTextureToTexture=function(N,Q,he=null,ie=null,oe=0,He=0){let Ze,Ve,it,lt,At,Rt,st,Xt,cn;const mn=N.isCompressedTexture?N.mipmaps[He]:N.image;if(he!==null)Ze=he.max.x-he.min.x,Ve=he.max.y-he.min.y,it=he.isBox3?he.max.z-he.min.z:1,lt=he.min.x,At=he.min.y,Rt=he.isBox3?he.min.z:0;else{const dn=Math.pow(2,-oe);Ze=Math.floor(mn.width*dn),Ve=Math.floor(mn.height*dn),N.isDataArrayTexture?it=mn.depth:N.isData3DTexture?it=Math.floor(mn.depth*dn):it=1,lt=0,At=0,Rt=0}ie!==null?(st=ie.x,Xt=ie.y,cn=ie.z):(st=0,Xt=0,cn=0);const en=$.convert(Q.format),wn=$.convert(Q.type);let qe;Q.isData3DTexture?(A.setTexture3D(Q,0),qe=X.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(A.setTexture2DArray(Q,0),qe=X.TEXTURE_2D_ARRAY):(A.setTexture2D(Q,0),qe=X.TEXTURE_2D),Ge.activeTexture(X.TEXTURE0),Ge.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),Ge.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Ge.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment);const zn=Ge.getParameter(X.UNPACK_ROW_LENGTH),Ft=Ge.getParameter(X.UNPACK_IMAGE_HEIGHT),ii=Ge.getParameter(X.UNPACK_SKIP_PIXELS),ri=Ge.getParameter(X.UNPACK_SKIP_ROWS),Bt=Ge.getParameter(X.UNPACK_SKIP_IMAGES);Ge.pixelStorei(X.UNPACK_ROW_LENGTH,mn.width),Ge.pixelStorei(X.UNPACK_IMAGE_HEIGHT,mn.height),Ge.pixelStorei(X.UNPACK_SKIP_PIXELS,lt),Ge.pixelStorei(X.UNPACK_SKIP_ROWS,At),Ge.pixelStorei(X.UNPACK_SKIP_IMAGES,Rt);const ur=N.isDataArrayTexture||N.isData3DTexture,Zt=Q.isDataArrayTexture||Q.isData3DTexture;if(N.isDepthTexture){const dn=U.get(N),Di=U.get(Q),tn=U.get(dn.__renderTarget),Ui=U.get(Di.__renderTarget);Ge.bindFramebuffer(X.READ_FRAMEBUFFER,tn.__webglFramebuffer),Ge.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Yi=0;Yi<it;Yi++)ur&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,U.get(N).__webglTexture,oe,Rt+Yi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,U.get(Q).__webglTexture,He,cn+Yi)),X.blitFramebuffer(lt,At,Ze,Ve,st,Xt,Ze,Ve,X.DEPTH_BUFFER_BIT,X.NEAREST);Ge.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(oe!==0||N.isRenderTargetTexture||U.has(N)){const dn=U.get(N),Di=U.get(Q);Ge.bindFramebuffer(X.READ_FRAMEBUFFER,Rn),Ge.bindFramebuffer(X.DRAW_FRAMEBUFFER,Bn);for(let tn=0;tn<it;tn++)ur?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,dn.__webglTexture,oe,Rt+tn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,dn.__webglTexture,oe),Zt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Di.__webglTexture,He,cn+tn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Di.__webglTexture,He),oe!==0?X.blitFramebuffer(lt,At,Ze,Ve,st,Xt,Ze,Ve,X.COLOR_BUFFER_BIT,X.NEAREST):Zt?X.copyTexSubImage3D(qe,He,st,Xt,cn+tn,lt,At,Ze,Ve):X.copyTexSubImage2D(qe,He,st,Xt,lt,At,Ze,Ve);Ge.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Zt?N.isDataTexture||N.isData3DTexture?X.texSubImage3D(qe,He,st,Xt,cn,Ze,Ve,it,en,wn,mn.data):Q.isCompressedArrayTexture?X.compressedTexSubImage3D(qe,He,st,Xt,cn,Ze,Ve,it,en,mn.data):X.texSubImage3D(qe,He,st,Xt,cn,Ze,Ve,it,en,wn,mn):N.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,He,st,Xt,Ze,Ve,en,wn,mn.data):N.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,He,st,Xt,mn.width,mn.height,en,mn.data):X.texSubImage2D(X.TEXTURE_2D,He,st,Xt,Ze,Ve,en,wn,mn);Ge.pixelStorei(X.UNPACK_ROW_LENGTH,zn),Ge.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ft),Ge.pixelStorei(X.UNPACK_SKIP_PIXELS,ii),Ge.pixelStorei(X.UNPACK_SKIP_ROWS,ri),Ge.pixelStorei(X.UNPACK_SKIP_IMAGES,Bt),He===0&&Q.generateMipmaps&&X.generateMipmap(qe),Ge.unbindTexture()},this.initRenderTarget=function(N){U.get(N).__webglFramebuffer===void 0&&A.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?A.setTextureCube(N,0):N.isData3DTexture?A.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?A.setTexture2DArray(N,0):A.setTexture2D(N,0),Ge.unbindTexture()},this.resetState=function(){se=0,de=0,W=null,Ge.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Wt._getUnpackColorSpace()}}const Vf=["BLAZE","STORM","FROST","FLAME","SPELL","MAGIC","WRATH","CRYPT","CURSE","POWER","SWORD","ARROW","ARMOR","BRAVE","QUEST","SHADE","GHOST","BEAST","DEMON","ANGEL","RAVEN","TIGER","EAGLE","GIANT","KNAVE","NOBLE","ELDER","ROYAL","CROWN","RELIC","VAULT","TOTEM","EARTH","ETHER","NIGHT","LIGHT","PRIDE","HONOR","VALOR","GLINT","DREAM","JEWEL","CRAFT","SCALE","RANGE","FATAL"];function DR(s,e){const t=s.toUpperCase(),i=e.toUpperCase(),a=i.length,o=new Array(a).fill("gray"),c=i.split("");for(let d=0;d<a;d++)t[d]===i[d]&&(o[d]="green",c[d]=null);for(let d=0;d<a;d++){if(o[d]==="green")continue;const h=c.indexOf(t[d]);h!==-1&&(o[d]="yellow",c[h]=null)}return o}function ls(s){let e;do e=Vf[Math.floor(Math.random()*Vf.length)];while(s&&e===s&&Vf.length>1);return e}function UR(s,e=.6){if(s&&Math.random()<e)return s[Math.floor(Math.random()*s.length)].toUpperCase();const t="AEIOUSTRLNCDMHPGBFKWYV";return t[Math.floor(Math.random()*t.length)]}const FR="/assets/asteroid-D7FGWxEV.glb",OR="/assets/asteroid_01-6TzOJz_n.glb",kR="/assets/asteroid_low_poly-CIoEJvOk.glb",BR="/assets/54509-yorp_asteroid_potential_earth_impactor-Cq4gmqj4.glb",zR="/assets/metal_asteroid-B7Ks757Z.glb",VR="/assets/giant_asteroid_with_purple_accents-DIZHWRLh.glb",HR="/assets/giant_asteroid_with_purple_accents-DIZHWRLh.glb",GR=[FR,OR,kR,BR,zR,VR,HR],Lx=3,WR=6,jR=2500,Pa=.55,Hf=1.1,Na=.35,ko=.45,wr=100,XR=18,$R=.33,Bo=4e3,Gf=8500,YR=3e3,qR=600,Dx=2e-4,KR=.985,ZR=75e-5,Ux=.022,Fx=55e-5;function JR(){const[s,e]=G.useState("checking"),[t,i]=G.useState(0),[a,o]=G.useState(1),[c,d]=G.useState(wr),[h,f]=G.useState(0),[v,x]=G.useState(""),[g,m]=G.useState(!1),[M,E]=G.useState(!0),[y,S]=G.useState(()=>ls()),[R,P]=G.useState([]),[L,k]=G.useState(""),[F,V]=G.useState([]),[T,I]=G.useState(0),[z,B]=G.useState(null),Y=G.useRef(""),se=G.useRef([]);G.useEffect(()=>{Y.current=y},[y]);const de=G.useRef(!1),W=G.useRef(!0),J=G.useRef(0),K=G.useRef("checking"),te=G.useRef(0),le=G.useRef(wr),D=fe=>{K.current=fe,e(fe)},w=G.useRef(null),H=G.useRef(null),ve=G.useRef(null),Ee=G.useRef(null),Me=G.useRef(null),ee=G.useRef([]),re=G.useRef([]),ce=G.useRef([]),ge=G.useRef([]),Oe=G.useRef([]),Ie=G.useRef(new Map),ut=G.useRef(new Map),Qe=G.useRef(null),We=G.useRef(null),xt=G.useRef(!1),dt=G.useRef(new O1),Lt=G.useRef(null),Ut=G.useRef(new Z),sn=G.useRef(0),X=G.useRef(!1);G.useEffect(()=>{const fe=navigator.xr;if(!fe){D("unsupported");return}fe.isSessionSupported("immersive-ar").then(be=>D(be?"idle":"unsupported")).catch(()=>D("unsupported"))},[]);const Kt=()=>{const fe=new Ho,be=new vp(1,2),Te=be.attributes.position.array;for(let Ce=0;Ce<Te.length;Ce+=3){const et=.72+Math.random()*.56;Te[Ce]*=et,Te[Ce+1]*=et,Te[Ce+2]*=et}return be.attributes.position.needsUpdate=!0,be.computeVertexNormals(),fe.add(new mi(be,new Gh({color:7035454,roughness:.95,metalness:.05}))),fe},wt=async()=>{try{const{GLTFLoader:fe}=await EM(async()=>{const{GLTFLoader:et}=await import("./GLTFLoader-ZHvBOAAa.js");return{GLTFLoader:et}},[]),be=new fe,Te=await Promise.allSettled(GR.map(et=>be.loadAsync(et))),Ce=[];return Te.forEach(et=>{et.status==="fulfilled"&&et.value.scene.traverse(mt=>{const me=mt;me.isMesh&&(me.position.set(0,0,0),me.rotation.set(0,0,0),me.scale.setScalar(1),me.material||(me.material=new Gh({color:9078137,roughness:.95,metalness:.05})),Ce.push(me))})}),Ce.length===0?[Kt()]:Ce}catch{return[Kt()]}},$t=(fe,be=16347926,Te=26,Ce="burst")=>{const et=H.current;if(!et)return;const mt=new kn,me=new Float32Array(Te*3),at=[],bt=Ce==="burst";for(let Pt=0;Pt<Te;Pt++)me[Pt*3]=fe.x,me[Pt*3+1]=fe.y,me[Pt*3+2]=fe.z,bt?at.push(new Z((Math.random()-.5)*.04,.012+Math.random()*.022,(Math.random()-.5)*.04)):at.push(new Z((Math.random()-.5)*.015,-.002-Math.random()*.006,(Math.random()-.5)*.015));mt.setAttribute("position",new On(me,3));const Ct=new If(mt,new $c({color:be,size:bt?.03:.018,transparent:!0,opacity:1}));et.add(Ct),ge.current.push({points:Ct,velocities:at,frame:0,life:bt?55:28})},Ge=fe=>{const Te=document.createElement("canvas");Te.width=128,Te.height=128;const Ce=Te.getContext("2d");Ce.fillStyle="rgba(10,1,24,0.78)",Ce.fillRect(0,0,128,128),Ce.strokeStyle="#a78bfa",Ce.lineWidth=6,Ce.strokeRect(6,6,116,116),Ce.fillStyle="#ec4899",Ce.font='bold 78px "Press Start 2P", monospace',Ce.textAlign="center",Ce.textBaseline="middle",Ce.fillText(fe,128/2,128/2+4);const et=new t1(Te);et.colorSpace=di,et.anisotropy=4;const mt=new Cv({map:et,transparent:!0,depthWrite:!1}),me=new jb(mt);return me.scale.set(.1,.1,.1),me},Jt=fe=>{const be=H.current;if(!be)return;const Te=UR(Y.current),Ce=Ge(Te);Ce.position.copy(fe),be.add(Ce),Oe.current.push({sprite:Ce,letter:Te,velocity:new Z((Math.random()-.5)*.012,.018+Math.random()*.01,(Math.random()-.5)*.012),life:0,maxLife:140})},U=()=>{const fe=H.current;if(!fe)return;const be=[];Oe.current=Oe.current.filter(Te=>{var Ce;return Te.life++,Te.velocity.y-=Dx*.7,Te.velocity.multiplyScalar(.992),Te.sprite.position.add(Te.velocity),Te.sprite.material.opacity=.75+.25*Math.sin(Te.life*.18),Te.life>=Te.maxLife?(be.push(Te.letter),fe.remove(Te.sprite),(Ce=Te.sprite.material.map)==null||Ce.dispose(),Te.sprite.material.dispose(),!1):!0}),be.length>0&&(se.current.push(...be),P([...se.current]))},A=(fe,be=3)=>{const Te=H.current;if(!Te)return;const Ce=new kn,et=new Float32Array(be*3),mt=[];for(let Ct=0;Ct<be;Ct++){const Pt=.025+Math.random()*.025,Et=Math.random()*Math.PI*2;et[Ct*3]=fe.x+Math.cos(Et)*Pt,et[Ct*3+1]=fe.y-.02-Math.random()*.03,et[Ct*3+2]=fe.z+Math.sin(Et)*Pt,mt.push(new Z((Math.random()-.5)*.004,-.001-Math.random()*.003,(Math.random()-.5)*.004))}Ce.setAttribute("position",new On(et,3));const me=Math.random(),at=me<.4?7035454:me<.75?9074784:5917238,bt=new If(Ce,new $c({color:at,size:.012,transparent:!0,opacity:.7,depthWrite:!1}));Te.add(bt),ge.current.push({points:bt,velocities:mt,frame:0,life:40})},ne=(fe,be,Te=5)=>{const Ce=H.current;if(!Ce)return;const et=be.clone();et.lengthSq()>1e-4?et.normalize():et.set(0,1,0);const mt=new kn,me=new Float32Array(Te*3),at=[];for(let Et=0;Et<Te;Et++){me[Et*3]=fe.x,me[Et*3+1]=fe.y,me[Et*3+2]=fe.z;const _t=et.clone().multiplyScalar(.013+Math.random()*.018);_t.x+=(Math.random()-.5)*.01,_t.y+=(Math.random()-.25)*.012,_t.z+=(Math.random()-.5)*.01,at.push(_t)}mt.setAttribute("position",new On(me,3));const bt=Math.random(),Ct=bt<.33?16765514:bt<.7?16742946:16724753,Pt=new If(mt,new $c({color:Ct,size:.032,transparent:!0,opacity:.95,depthWrite:!1}));Ce.add(Pt),ge.current.push({points:Pt,velocities:at,frame:0,life:22})},ye=fe=>{const be=ee.current,Te=H.current,Ce=We.current;if(be.length===0||!Te||!Ce)return null;const mt=be[Math.floor(Math.random()*be.length)].clone(!0);let me=null;if(mt.traverse(Gt=>{const pn=Gt;if(pn.isMesh){const jt=pn.material.clone();pn.material=jt,me||(me=jt)}}),!me)return null;const at=new Ur().setFromObject(mt),bt=new Z;at.getSize(bt);const Ct=Math.max(bt.x,bt.y,bt.z)||1,Pt=.2+Math.random()*.15;mt.scale.setScalar(Pt/Ct);const Et=$e(),_t=Math.random()*Math.PI*2;let Sn;if(Et)mt.position.set(Et.x,Et.y,Et.z),Sn=Et.y;else{const Gt=Pa+Math.random()*(Hf-Pa);Sn=Ce.y+Na+Math.random()*ko,mt.position.set(Ce.x+Math.cos(_t)*Gt,Sn,Ce.z+Math.sin(_t)*Gt)}mt.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),Te.add(mt);const Jn=Math.random(),kt=Jn<.5?"straight":Jn<.8?"curve":"orbit-strike";return{obj:mt,baseMat:me,state:"drift",behaviour:kt,velocity:new Z,angularVel:new Z((Math.random()-.5)*.02,(Math.random()-.5)*.024,(Math.random()-.5)*.016),nextAttackTime:fe+YR+Math.random()*(Gf-Bo),stateTimer:0,orbitCenter:mt.position.clone(),orbitAngle:_t,orbitRadius:.04+Math.random()*.06,spawnHeight:Sn,alive:!0}},we=(fe,be)=>{const Te=$e(),Ce=We.current;let et;if(Te)fe.obj.position.set(Te.x,Te.y,Te.z),et=Te.y;else if(Ce){const me=Math.random()*Math.PI*2,at=Pa+Math.random()*(Hf-Pa);et=Ce.y+Na+Math.random()*ko,fe.obj.position.set(Ce.x+Math.cos(me)*at,et,Ce.z+Math.sin(me)*at)}else return!1;fe.obj.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),fe.obj.visible=!0,fe.state="drift",fe.velocity.set(0,0,0),fe.angularVel.set((Math.random()-.5)*.02,(Math.random()-.5)*.024,(Math.random()-.5)*.016);const mt=Math.random();return fe.behaviour=mt<.5?"straight":mt<.8?"curve":"orbit-strike",fe.orbitCenter.copy(fe.obj.position),fe.orbitAngle=Math.random()*Math.PI*2,fe.orbitRadius=.04+Math.random()*.06,fe.spawnHeight=et,fe.nextAttackTime=be+Bo+Math.random()*(Gf-Bo),fe.stateTimer=0,fe.alive=!0,fe.baseMat.emissive.setHex(0),fe.baseMat.emissiveIntensity=0,!0},Ne=fe=>{const be=ce.current.find(Te=>!Te.alive);return!be||!we(be,fe)?!1:(re.current.push(be),!0)},ke=(fe,be)=>{fe.alive&&(fe.alive=!1,$t(fe.obj.position.clone(),be?16347926:16720384),fe.obj.visible=!1,re.current=re.current.filter(Te=>Te!==fe),be&&(te.current++,i(te.current),Jt(fe.obj.position.clone())),setTimeout(()=>{K.current==="playing"&&(de.current||Ne(performance.now()))},jR))},xe=()=>{le.current=Math.max(0,le.current-XR),d(le.current),f(fe=>fe+1),ef(200),le.current<=0&&D("game-over")},Se=G.useCallback(fe=>{var Pt;if(K.current!=="playing")return;const be=w.current,Te=H.current;if(!be||!Te||re.current.length===0)return;const Ce=fe.touches[0];if(!Ce)return;const et=Ce.clientX/window.innerWidth*2-1,mt=-(Ce.clientY/window.innerHeight)*2+1,me=be.xr.getCamera(),at=((Pt=me.cameras)==null?void 0:Pt.length)>0?me.cameras[0]:ve.current;dt.current.setFromCamera(new It(et,mt),at);const bt=re.current.map(Et=>Et.obj),Ct=dt.current.intersectObjects(bt,!0);if(Ct.length>0){let Et=Ct[0].object;for(;Et.parent&&Et.parent!==Te;)Et=Et.parent;const _t=re.current.find(Sn=>Sn.obj===Et);if(!_t)return;_t.state==="charging"||_t.state==="attacking"?ke(_t,!0):(A(_t.obj.position.clone(),6),ef(30))}},[]),je=(fe,be)=>{const Te=H.current;if(!Te)return;const Ce=fe.detectedPlanes??new Set,et=new Set,mt=K.current==="playing"?.25:.85;Ce.forEach(at=>{et.add(at);const bt=fe.getPose(at.planeSpace,be);if(!bt)return;const Ct=bt.transform.position,Pt=new Z(Ct.x,Ct.y,Ct.z),Et=at.polygon??[];if(Et.length<3)return;let _t=0;for(let jt=0;jt<Et.length;jt++){const on=Et[jt],ft=Et[(jt+1)%Et.length];_t+=on.x*ft.z-ft.x*on.z}_t=Math.abs(_t)/2;const Sn=new Ot().fromArray(bt.transform.matrix),Jn=Et.map(jt=>{const on=new Z(jt.x,0,jt.z);return on.applyMatrix4(Sn),on});Ie.current.set(at,{center:Pt,area:_t,orientation:at.orientation??"unknown",worldPolygon:Jn});let kt=ut.current.get(at);const Gt=Et.map(jt=>new Z(jt.x,0,jt.z));if(kt){const jt=kt.outline.geometry.attributes.position.array;if(jt.length===Gt.length*3){for(let ft=0;ft<Gt.length;ft++)jt[ft*3]=Gt[ft].x,jt[ft*3+1]=Gt[ft].y,jt[ft*3+2]=Gt[ft].z;kt.outline.geometry.attributes.position.needsUpdate=!0;const on=kt.fill.geometry.attributes.position.array;for(let ft=0;ft<Gt.length;ft++)on[ft*3]=Gt[ft].x,on[ft*3+1]=Gt[ft].y,on[ft*3+2]=Gt[ft].z;kt.fill.geometry.attributes.position.needsUpdate=!0}else{const on=new Float32Array(Gt.length*3);Gt.forEach((Rn,Bn)=>{on[Bn*3]=Rn.x,on[Bn*3+1]=Rn.y,on[Bn*3+2]=Rn.z}),kt.outline.geometry.setAttribute("position",new On(on,3)),kt.fill.geometry.setAttribute("position",new On(on.slice(),3));const ft=[];for(let Rn=1;Rn<Gt.length-1;Rn++)ft.push(0,Rn,Rn+1);kt.fill.geometry.setIndex(ft)}}else{const jt=new kn().setFromPoints(Gt),on=new Iv({color:1096065,transparent:!0,opacity:mt}),ft=new e1(jt,on),Rn=new kn,Bn=new Float32Array(Gt.length*3);Gt.forEach((ie,oe)=>{Bn[oe*3]=ie.x,Bn[oe*3+1]=ie.y,Bn[oe*3+2]=ie.z}),Rn.setAttribute("position",new On(Bn,3));const N=[];for(let ie=1;ie<Gt.length-1;ie++)N.push(0,ie,ie+1);Rn.setIndex(N),Rn.computeVertexNormals();const Q=new pp({color:1096065,transparent:!0,opacity:mt*.18,side:ir,depthWrite:!1}),he=new mi(Rn,Q);Te.add(ft),Te.add(he),kt={outline:ft,fill:he},ut.current.set(at,kt)}const pn=new Ot().fromArray(bt.transform.matrix);kt.outline.matrix.copy(pn),kt.outline.matrixAutoUpdate=!1,kt.outline.updateMatrixWorld(!0),kt.fill.matrix.copy(pn),kt.fill.matrixAutoUpdate=!1,kt.fill.updateMatrixWorld(!0),kt.outline.visible=W.current,kt.fill.visible=W.current,kt.outline.material.opacity=mt,kt.fill.material.opacity=mt*.18}),Ie.current.forEach((at,bt)=>{et.has(bt)||Ie.current.delete(bt)}),ut.current.forEach((at,bt)=>{et.has(bt)||(Te.remove(at.outline),Te.remove(at.fill),at.outline.geometry.dispose(),at.fill.geometry.dispose(),at.outline.material.dispose(),at.fill.material.dispose(),ut.current.delete(bt))});let me=null;if(Ie.current.forEach(at=>{at.orientation!=="horizontal"&&at.orientation!=="unknown"||(!me||at.area>me.area)&&(me=at)}),me){const at=me;Qe.current=at,xt.current||(We.current=at.center.clone(),K.current==="scanning"&&D("plane-found"))}},$e=()=>{const fe=Qe.current;if(!fe||fe.worldPolygon.length<3){const me=We.current;if(!me)return null;const at=Pa+Math.random()*(Hf-Pa),bt=Math.random()*Math.PI*2;return{x:me.x+Math.cos(bt)*at,y:me.y+Na+Math.random()*ko,z:me.z+Math.sin(bt)*at}}const be=fe.worldPolygon;let Te=1/0,Ce=-1/0,et=1/0,mt=-1/0;for(const me of be)me.x<Te&&(Te=me.x),me.x>Ce&&(Ce=me.x),me.z<et&&(et=me.z),me.z>mt&&(mt=me.z);for(let me=0;me<40;me++){const at=Te+Math.random()*(Ce-Te),bt=et+Math.random()*(mt-et);let Ct=!1;for(let Pt=0,Et=be.length-1;Pt<be.length;Et=Pt++){const _t=be[Pt].x,Sn=be[Pt].z,Jn=be[Et].x,kt=be[Et].z;Sn>bt!=kt>bt&&at<(Jn-_t)*(bt-Sn)/(kt-Sn)+_t&&(Ct=!Ct)}if(Ct)return{x:at,y:fe.center.y+Na+Math.random()*ko,z:bt}}return{x:fe.center.x,y:fe.center.y+Na,z:fe.center.z}},Be=(fe,be,Te,Ce)=>{const et=fe.getViewerPose(be);if(et){const me=et.transform.position;Ut.current.set(me.x,me.y,me.z)}const mt=Ut.current;re.current.forEach((me,at)=>{var bt;if(me.obj.rotation.x+=me.angularVel.x,me.obj.rotation.y+=me.angularVel.y,me.obj.rotation.z+=me.angularVel.z,me.state==="drift"){me.orbitAngle+=.004;const Ct=new Z(me.orbitCenter.x+Math.cos(me.orbitAngle)*me.orbitRadius,me.spawnHeight+Math.sin(Ce*.9+me.orbitAngle)*.03,me.orbitCenter.z+Math.sin(me.orbitAngle)*me.orbitRadius);me.obj.position.lerp(Ct,.08),me.velocity.multiplyScalar(.9),(J.current+at*7)%25===0&&A(me.obj.position,2),Te>me.nextAttackTime&&(me.state="charging",me.stateTimer=Te,me.baseMat.emissive.setHex(16720384),me.baseMat.emissiveIntensity=1,me.angularVel.multiplyScalar(2.4))}else if(me.state==="charging"){const Ct=(Te-me.stateTimer)/qR;if(me.baseMat.emissiveIntensity=.7+Math.sin(Ce*32)*.4,me.obj.position.x+=(Math.random()-.5)*.004,me.obj.position.y+=(Math.random()-.5)*.004,me.obj.position.z+=(Math.random()-.5)*.004,J.current%5===0){const Pt=mt.clone().sub(me.obj.position);ne(me.obj.position,Pt,3)}if(Ct>=1){const Pt=mt.clone().sub(me.obj.position).normalize();me.velocity.copy(Pt).multiplyScalar(.01),me.state="attacking"}}else if(me.state==="attacking"){const Ct=mt.clone().sub(me.obj.position),Pt=Ct.length();if(Ct.normalize(),me.velocity.addScaledVector(Ct,ZR),me.behaviour==="curve"){const _t=new Z(-Ct.z,0,Ct.x);me.velocity.addScaledVector(_t,Math.sin(Ce*5)*Fx)}else if(me.behaviour==="orbit-strike"){const _t=new Z(-Ct.z,0,Ct.x);me.velocity.addScaledVector(_t,Fx*.6)}if(me.velocity.y-=Dx,me.velocity.multiplyScalar(KR),me.velocity.length()>Ux&&me.velocity.setLength(Ux),me.obj.position.add(me.velocity),me.baseMat.emissiveIntensity=.6+Math.sin(Ce*22)*.4,J.current%3===0&&ne(me.obj.position,me.velocity,6),Pt<$R&&(xe(),ke(me,!1)),(We.current?me.obj.position.distanceTo(We.current):0)>3.5){me.state="drift",me.baseMat.emissive.setHex(0),me.baseMat.emissiveIntensity=0,me.velocity.set(0,0,0),me.angularVel.multiplyScalar(1/2.4);const _t=$e();_t?(me.obj.position.set(_t.x,_t.y,_t.z),me.orbitCenter.set(_t.x,_t.y,_t.z),me.spawnHeight=_t.y):me.spawnHeight=(((bt=We.current)==null?void 0:bt.y)??0)+Na+Math.random()*ko,me.orbitAngle=Math.random()*Math.PI*2,me.orbitRadius=.04+Math.random()*.06,me.nextAttackTime=Te+Bo+Math.random()*(Gf-Bo)}}})},De=fe=>{ge.current=ge.current.filter(be=>{if(be.frame++,be.frame>be.life)return fe.remove(be.points),!1;const Te=be.points.geometry.attributes.position.array;for(let Ce=0;Ce<be.velocities.length;Ce++)Te[Ce*3]+=be.velocities[Ce].x,Te[Ce*3+1]+=be.velocities[Ce].y-4e-4*be.frame,Te[Ce*3+2]+=be.velocities[Ce].z;return be.points.geometry.attributes.position.needsUpdate=!0,be.points.material.opacity=Math.max(0,1-be.frame/be.life),!0})},vt=async()=>{D("loading"),le.current=wr,te.current=0,d(wr),i(0),o(1),xt.current=!0;try{const fe=await wt();ee.current=fe;const be=performance.now();for(let Te=0;Te<WR;Te++){const Ce=ye(be);Ce&&(Ce.obj.visible=!1,Ce.alive=!1,ce.current.push(Ce))}for(let Te=0;Te<Lx;Te++)Ne(be);document.addEventListener("touchstart",Se,{passive:!0}),D("playing")}catch(fe){D("error"),x((fe==null?void 0:fe.message)??"Failed to load model")}},yt=()=>{const fe=H.current;ut.current.forEach(be=>{fe==null||fe.remove(be.outline),fe==null||fe.remove(be.fill),be.outline.geometry.dispose(),be.fill.geometry.dispose(),be.outline.material.dispose(),be.fill.material.dispose()}),ut.current.clear()},Tt=G.useCallback(()=>{var fe,be,Te;document.removeEventListener("touchstart",Se),(fe=w.current)==null||fe.setAnimationLoop(null),(be=Ee.current)==null||be.end().catch(()=>{}),Ee.current=null,(Te=Lt.current)==null||Te.remove(),Lt.current=null,ce.current.forEach(Ce=>{var et;return(et=H.current)==null?void 0:et.remove(Ce.obj)}),ce.current=[],re.current=[],ge.current=[],Ie.current.clear(),yt(),Qe.current=null,We.current=null,xt.current=!1},[Se]),$=async fe=>{D("starting"),x(""),i(0),te.current=0,d(wr),le.current=wr,o(1),xt.current=!1,Ie.current.clear(),Qe.current=null;try{const be=document.createElement("canvas");be.style.cssText="position:fixed;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;",document.body.appendChild(be),Lt.current=be;const Te=Math.min(window.devicePixelRatio,1.5),Ce=new LR({canvas:be,alpha:!0,antialias:Te<1.3,powerPreference:"high-performance"});Ce.xr.enabled=!0,Ce.setPixelRatio(Te),Ce.setSize(window.innerWidth,window.innerHeight),Ce.outputColorSpace=di,Ce.toneMapping=tp,Ce.toneMappingExposure=1.1,w.current=Ce;const et=new Bb;et.add(new w1(16777215,1.1));const mt=new sx(16773590,3);mt.position.set(2,4,2),et.add(mt);const me=new sx(8956671,1);me.position.set(-2,2,-1),et.add(me),H.current=et;const at=new fi(70,window.innerWidth/window.innerHeight,.01,100);ve.current=at;const bt=navigator.xr,Ct={requiredFeatures:[],optionalFeatures:["plane-detection","hit-test","local-floor","dom-overlay"]};fe&&(Ct.domOverlay={root:fe});const Pt={requiredFeatures:[],optionalFeatures:["dom-overlay"]};fe&&(Pt.domOverlay={root:fe});const Et={requiredFeatures:[],optionalFeatures:[]};let _t=null;const Sn=[{label:"full",init:Ct},{label:"overlay",init:Pt},{label:"bare",init:Et}],Jn=[];for(const Gt of Sn)try{console.log("[AR] Trying immersive-ar session:",Gt.label,Gt.init),_t=await bt.requestSession("immersive-ar",Gt.init),console.log("[AR] Session created with config:",Gt.label);break}catch(pn){const jt=`${Gt.label}: ${(pn==null?void 0:pn.name)??"Error"} — ${(pn==null?void 0:pn.message)??pn}`;Jn.push(jt),console.warn("[AR] Session attempt failed —",jt)}if(!_t)throw new Error(`AR unavailable. Tried ${Sn.length} configs:
${Jn.join(`
`)}`);Ee.current=_t,await Ce.xr.setSession(_t);let kt;try{kt=await _t.requestReferenceSpace("local-floor")}catch{kt=await _t.requestReferenceSpace("local")}Me.current=kt,D("scanning"),sn.current=performance.now(),X.current=!1,Ce.setAnimationLoop((Gt,pn)=>{if(pn){if(J.current++,(J.current&3)===0&&je(pn,kt),K.current==="scanning"&&!xt.current&&!X.current&&performance.now()-sn.current>3500){const jt=pn.getViewerPose(kt);if(jt){const on=jt.transform.position,ft=jt.transform.orientation,Rn=new hs(ft.x,ft.y,ft.z,ft.w),Bn=new Z(0,0,-1).applyQuaternion(Rn),N=new Z(on.x+Bn.x*1.4,on.y-.4,on.z+Bn.z*1.4);We.current=N,X.current=!0,D("plane-found")}}if(K.current==="playing"&&!de.current){const jt=performance.now(),on=jt*.001;Be(pn,kt,jt,on),U(),De(et)}Ce.render(et,at)}}),_t.addEventListener("end",()=>{Ce.setAnimationLoop(null),be.remove(),Lt.current=null,Ee.current=null,ce.current.forEach(Gt=>et.remove(Gt.obj)),ce.current=[],re.current=[],ge.current=[],Ie.current.clear(),yt(),Qe.current=null,We.current=null,xt.current=!1,D("idle"),i(0),te.current=0,d(wr),le.current=wr,o(1)})}catch(be){Tt(),D("error"),x((be==null?void 0:be.message)??"Failed to start AR")}},Ue=G.useCallback(()=>{de.current=!0,m(!0)},[]),_e=G.useCallback(()=>{de.current=!1,m(!1)},[]),Ye=G.useCallback(()=>{const fe=!W.current;W.current=fe,E(fe),ut.current.forEach(be=>{be.outline.visible=fe,be.fill.visible=fe})},[]);G.useEffect(()=>()=>Tt(),[Tt]);const ze=G.useCallback(fe=>{o(Math.max(1,Math.floor(fe)))},[]),Ae=G.useCallback(fe=>{fe<=0||(le.current=Math.max(0,le.current-fe),d(le.current),f(be=>be+1),ef(180),le.current<=0&&D("game-over"))},[]),tt=G.useCallback(()=>{re.current.forEach(fe=>{fe.alive=!1,fe.obj.visible=!1}),re.current=[]},[]),St=G.useCallback((fe=Lx)=>{re.current.forEach(Te=>{Te.alive=!1,Te.obj.visible=!1}),re.current=[];const be=performance.now();for(let Te=0;Te<fe;Te++)Ne(be)},[]),Qt=G.useCallback(fe=>{if(!fe.length)return;const be=[...se.current];for(const Te of fe){const Ce=be.indexOf(Te.toUpperCase());Ce!==-1&&be.splice(Ce,1)}se.current=be,P(be)},[]);return{phase:s,smashed:t,wave:a,hp:c,maxHp:wr,damageTick:h,errorMsg:v,isSupported:s!=="unsupported"&&s!=="checking",paused:g,showPlane:M,collectedLetters:R,startAR:$,startGame:vt,stopAR:Tt,pause:Ue,resume:_e,togglePlane:Ye,setWaveTo:ze,damagePlayer:Ae,consumeLetters:Qt,clearActiveAsteroids:tt,respawnWave:St}}const Wo=6e4,Ox=6,QR=8e3,kx=18,eC=8,lu=10;function tC(s){return 3+Math.floor((s-lu)/lu)}function nC(s){const{onBossAttack:e,onWaveStart:t,onWaveEnd:i,enabled:a}=s,[o,c]=G.useState("idle"),[d,h]=G.useState(1),[f,v]=G.useState(Wo),[x,g]=G.useState(()=>ls()),[m,M]=G.useState(""),[E,y]=G.useState([]),[S,R]=G.useState(0),[P,L]=G.useState(0),[k,F]=G.useState(0),V=G.useRef("idle"),T=G.useRef(1);G.useEffect(()=>{V.current=o},[o]),G.useEffect(()=>{T.current=d},[d]),G.useEffect(()=>{if(!a||o!=="wave-active")return;const W=performance.now(),J=f,K=()=>{const le=performance.now()-W,D=Math.max(0,J-le);if(v(D),D<=0){const w=T.current,H=w%lu===0;if(H){const ve=tC(w);L(ve),F(ve),c("boss-fight")}else c("intermission");g(ls(x)),M(""),y([]),i==null||i(w,H);return}},te=window.setInterval(K,100);return()=>window.clearInterval(te)},[a,o]),G.useEffect(()=>{if(!a||o!=="boss-fight")return;const W=window.setInterval(()=>{e(kx)},QR);return()=>window.clearInterval(W)},[a,o,e]);const I=G.useCallback(()=>{h(1),T.current=1,g(ls()),M(""),y([]),R(0),L(0),F(0),v(Wo),c("wave-active"),t==null||t(1)},[t]),z=G.useCallback(()=>{c("idle"),h(1),M(""),y([]),R(0),L(0),F(0),v(Wo)},[]),B=G.useCallback(W=>{if(V.current!=="intermission"&&V.current!=="boss-fight")return;const J=W.toUpperCase();/^[A-Z]$/.test(J)&&M(K=>K.length>=5?K:K+J)},[]),Y=G.useCallback(()=>{M(W=>W.slice(0,-1))},[]),se=G.useCallback(()=>{const W=T.current+1;h(W),T.current=W,M(""),y([]),L(0),F(0),g(ls(x)),v(Wo),c("wave-active"),t==null||t(W)},[t,x]),de=G.useCallback(()=>{const W={ok:!1,result:"continue",event:null,solvedWord:null,attemptsUsed:0};if(m.length!==5)return W;const J=V.current;if(J!=="intermission"&&J!=="boss-fight")return W;const K=DR(m,x),te=m.toUpperCase()===x.toUpperCase(),le=[...E,{word:m.toUpperCase(),colors:K}];if(y(le),M(""),te){const D=x.toUpperCase(),w=le.length;if(R(H=>H+1),J==="boss-fight"){const H=P-1;return L(H),H<=0?(se(),{ok:!0,result:"win",event:"boss-defeated",solvedWord:D,attemptsUsed:w}):(g(ls(x)),y([]),{ok:!0,result:"continue",event:"seal-broken",solvedWord:D,attemptsUsed:w})}else return se(),{ok:!0,result:"win",event:"wave-cleared",solvedWord:D,attemptsUsed:w}}return J==="boss-fight"&&e(eC),le.length>=Ox?(J==="boss-fight"&&e(kx),g(ls(x)),y([]),{ok:!0,result:"lose",event:null,solvedWord:null,attemptsUsed:0}):{ok:!0,result:"continue",event:null,solvedWord:null,attemptsUsed:0}},[m,x,E,V,P,se,e]);return{metaPhase:o,wave:d,timeRemainingMs:f,targetWord:x,guess:m,attempts:E,guessesRemaining:Ox-E.length,bossActive:o==="boss-fight",bossWordsLeft:P,bossWordsTotal:k,wordsSolved:S,startGame:I,addLetter:B,backspace:Y,submitGuess:de,reset:z}}const Wf={},Bx=["Focus on letters you have not yet tried.","One of your letters sits in the wrong constellation.","Trust the colors. They never lie.","The seal is forged from elements both ancient and familiar."],zx=(Wf==null?void 0:Wf.VITE_API_BASE)??"";function iC(){const[s,e]=G.useState(null),[t,i]=G.useState(!1),a=G.useCallback(async d=>{try{const h=d?`?exclude=${encodeURIComponent(d)}`:"",f=await fetch(`${zx}/api/codex/word/${h}`,{signal:AbortSignal.timeout(3e3)});if(!f.ok)throw new Error(`HTTP ${f.status}`);return(await f.json()).word.toUpperCase()}catch{return ls(d)}},[]),o=G.useCallback(async(d,h)=>{if(!pM().aiHintsEnabled){const f=Bx[Math.floor(Math.random()*Bx.length)];return e(f),f}i(!0),e(null);try{const f=await fetch(`${zx}/api/codex/hint/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({word:d,attempts:h}),signal:AbortSignal.timeout(8e3)});if(!f.ok)throw new Error(`HTTP ${f.status}`);const x=(await f.json()).hint;return e(x),x}catch{const f="The Codex is silent… trust your instincts, Warden.";return e(f),f}finally{i(!1)}},[]),c=G.useCallback(()=>e(null),[]);return{fetchWord:a,fetchHint:o,clearHint:c,hint:s,hintLoading:t}}const rC=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]];function sC({title:s,subtitle:e,variant:t="normal",wordLength:i=5,guess:a,attempts:o,collectedLetters:c,maxAttempts:d=6,guessesRemaining:h,bossWordsLeft:f,bossWordsTotal:v,hp:x,maxHp:g,hint:m,hintLoading:M,onAddLetter:E,onBackspace:y,onSubmit:S,onRequestHint:R}){G.useEffect(()=>{const I=z=>{z.key==="Enter"?(z.preventDefault(),S()):z.key==="Backspace"?(z.preventDefault(),y()):/^[a-zA-Z]$/.test(z.key)&&(z.preventDefault(),E(z.key.toUpperCase()))};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[S,y,E]);const P={};for(const I of c)P[I.toUpperCase()]=(P[I.toUpperCase()]||0)+1;const L={},k={gray:0,yellow:1,green:2};o.forEach(I=>{I.word.split("").forEach((z,B)=>{const Y=I.colors[B];(!L[z]||k[Y]>k[L[z]])&&(L[z]=Y)})});const F=t==="boss"?"#ec4899":"#a78bfa",V=t==="boss"?"border-[#ec4899]":"border-[#8b5cf6]",T=[];for(o.forEach(I=>T.push({letters:I.word.split(""),colors:I.colors,locked:!0,isCurrent:!1})),T.length<d&&T.push({letters:a.padEnd(i," ").split("").slice(0,i),colors:Array(i).fill("gray"),locked:!1,isCurrent:!0});T.length<d;)T.push({letters:Array(i).fill(" "),colors:Array(i).fill("gray"),locked:!1,isCurrent:!1});return b.jsxs("div",{className:"fixed inset-0 z-40 flex items-end justify-center px-2 pb-2",style:{backgroundColor:"rgba(10,1,24,0.92)",animation:"wpFadeIn 0.25s ease-out"},children:[b.jsx("style",{children:`
        @keyframes wpFadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes wpSlideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes wpFlip    { 0% { transform: rotateX(0); } 50% { transform: rotateX(90deg); } 100% { transform: rotateX(0); } }
        @keyframes wpBossPulse { 0%, 100% { box-shadow: 0 0 8px #ec4899, 0 0 18px #ec4899aa; } 50% { box-shadow: 0 0 14px #ec4899, 0 0 30px #ec4899; } }
      `}),b.jsxs("div",{className:`w-full max-w-md bg-[#0a0118] border-4 ${V} relative font-['Press_Start_2P',_monospace]`,style:{maxHeight:"96vh",overflowY:"auto",animation:`wpSlideUp 0.32s cubic-bezier(0.22, 1, 0.36, 1)${t==="boss"?", wpBossPulse 2.2s ease-in-out infinite":""}`},children:[b.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsxs("div",{className:`bg-[#1a0a2e] border-b-4 ${V} px-4 py-3 text-center`,children:[b.jsx("p",{className:"text-[10px] tracking-widest",style:{color:F},children:s}),e&&b.jsx("p",{className:"text-[7px] text-white/70 mt-1 tracking-wider",children:e}),t==="boss"&&v!==void 0&&b.jsxs("div",{className:"mt-2 flex items-center justify-center gap-1",children:[Array.from({length:v}).map((I,z)=>{const B=z<v-(f??0);return b.jsx("div",{className:"w-3 h-3 border-2",style:{borderColor:B?"#10b981":"#ec4899",backgroundColor:B?"#10b981":"transparent",boxShadow:B?"0 0 6px #10b981":"0 0 4px #ec489988"}},z)}),b.jsxs("span",{className:"text-[7px] text-[#ec4899] ml-2 tracking-widest",children:[v-(f??0)," / ",v," SEALS"]})]}),t==="boss"&&x!==void 0&&g!==void 0&&b.jsxs("div",{className:"mt-2 flex items-center justify-center gap-2",children:[b.jsx("span",{className:"text-[6px] text-[#facc15] tracking-widest",children:"HP"}),b.jsx("div",{className:"w-32 h-2 bg-[#1a0a2e] border border-[#facc15]/50 relative",children:b.jsx("div",{className:"h-full transition-all",style:{width:`${x/g*100}%`,backgroundColor:x>g*.5?"#10b981":x>g*.25?"#facc15":"#ef4444"}})}),b.jsx("span",{className:"text-[7px] text-white/80",children:x})]})]}),b.jsxs("div",{className:"px-3 py-3 flex flex-col items-center gap-1",children:[T.map((I,z)=>b.jsx("div",{className:"flex gap-1",children:I.letters.map((B,Y)=>{const se=I.locked?I.colors[Y]==="green"?"#10b981":I.colors[Y]==="yellow"?"#facc15":"#3a2a4e":"#1a0a2e",de=I.locked?se:I.isCurrent&&B!==" "?"#a78bfa":"#3a2a4e",W=I.locked&&I.colors[Y]==="yellow"?"#0a0118":"#ffffff";return b.jsx("div",{className:"flex items-center justify-center",style:{width:"38px",height:"38px",backgroundColor:se,border:`2px solid ${de}`,color:W,fontSize:"14px",fontWeight:"bold",animation:I.locked?`wpFlip 0.4s ${Y*.08}s ease-in-out both`:"none"},children:B.trim()||""},Y)})},z)),b.jsxs("p",{className:"text-[7px] text-[#a78bfa]/70 mt-1 tracking-widest",children:[h," TRIES LEFT"]})]}),(m||M)&&b.jsxs("div",{className:"mx-3 mb-2 px-3 py-2 border-2 border-[#60a5fa] bg-[#60a5fa]/10",children:[b.jsx("p",{className:"text-[6px] text-[#60a5fa] tracking-widest mb-1",children:"⚡ WARDEN'S HINT"}),b.jsx("p",{className:"text-[7px] text-white/90 leading-[12px] italic",children:M?"Consulting the codex...":m})]}),b.jsxs("div",{className:"px-3 py-2 border-t-2 border-[#8b5cf6]/30 flex items-center justify-between",children:[b.jsxs("p",{className:"text-[6px] text-[#a78bfa] tracking-widest",children:["COLLECTED: ",b.jsx("span",{className:"text-[#10b981]",children:c.length})]}),R&&b.jsx("button",{onClick:R,disabled:M||!!m,className:"text-[6px] px-2 py-1 border-2 border-[#60a5fa] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-[#0a0118] disabled:opacity-40 disabled:cursor-not-allowed tracking-widest",children:m?"HINT USED":"HINT?"})]}),b.jsx("div",{className:"px-2 pb-3 pt-1 space-y-1",children:rC.map((I,z)=>b.jsxs("div",{className:"flex gap-1 justify-center",children:[z===2&&b.jsx("button",{onClick:S,disabled:a.length!==5,className:"px-2 text-[7px] bg-[#10b981] text-white border-2 border-[#10b981] hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed tracking-widest",style:{minWidth:"42px"},children:"ENT"}),I.map(B=>{const Y=(P[B]??0)>0,se=L[B];let de=Y?"#1a0a2e":"#0a0118",W=Y?"#8b5cf6":"#3a2a4e",J=Y?"#ffffff":"#6b7280";return se==="green"&&(de="#10b981",W="#10b981",J="#ffffff"),se==="yellow"&&(de="#facc15",W="#facc15",J="#0a0118"),se==="gray"&&(de="#1f1530",W="#3a2a4e",J="#6b7280"),b.jsxs("button",{onClick:()=>E(B),className:"text-[9px] active:translate-y-px relative",style:{minWidth:"24px",height:"32px",backgroundColor:de,border:`2px solid ${W}`,color:J,fontFamily:"'Press Start 2P', monospace"},title:Y?`${P[B]} in inventory`:"Not yet collected",children:[B,Y&&b.jsx("span",{className:"absolute -top-1 -right-1 text-[5px] px-0.5",style:{backgroundColor:"#ec4899",color:"#0a0118",fontFamily:"'Press Start 2P', monospace"},children:P[B]})]},B)}),z===2&&b.jsx("button",{onClick:y,className:"px-2 text-[7px] bg-[#ef4444] text-white border-2 border-[#ef4444] hover:opacity-90 tracking-widest",style:{minWidth:"42px"},children:"⌫"})]},z))})]})]})}var bp={};(function s(e,t,i,a){var o=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),c=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var D=new OffscreenCanvas(1,1),w=D.getContext("2d");w.fillRect(0,0,1,1);var H=D.transferToImageBitmap();w.createPattern(H,"no-repeat")}catch{return!1}return!0})();function h(){}function f(D){var w=t.exports.Promise,H=w!==void 0?w:e.Promise;return typeof H=="function"?new H(D):(D(h,h),null)}var v=(function(D,w){return{transform:function(H){if(D)return H;if(w.has(H))return w.get(H);var ve=new OffscreenCanvas(H.width,H.height),Ee=ve.getContext("2d");return Ee.drawImage(H,0,0),w.set(H,ve),ve},clear:function(){w.clear()}}})(d,new Map),x=(function(){var D=Math.floor(16.666666666666668),w,H,ve={},Ee=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(Me){var ee=Math.random();return ve[ee]=requestAnimationFrame(function re(ce){Ee===ce||Ee+D-1<ce?(Ee=ce,delete ve[ee],Me()):ve[ee]=requestAnimationFrame(re)}),ee},H=function(Me){ve[Me]&&cancelAnimationFrame(ve[Me])}):(w=function(Me){return setTimeout(Me,D)},H=function(Me){return clearTimeout(Me)}),{frame:w,cancel:H}})(),g=(function(){var D,w,H={};function ve(Ee){function Me(ee,re){Ee.postMessage({options:ee||{},callback:re})}Ee.init=function(re){var ce=re.transferControlToOffscreen();Ee.postMessage({canvas:ce},[ce])},Ee.fire=function(re,ce,ge){if(w)return Me(re,null),w;var Oe=Math.random().toString(36).slice(2);return w=f(function(Ie){function ut(Qe){Qe.data.callback===Oe&&(delete H[Oe],Ee.removeEventListener("message",ut),w=null,v.clear(),ge(),Ie())}Ee.addEventListener("message",ut),Me(re,Oe),H[Oe]=ut.bind(null,{data:{callback:Oe}})}),w},Ee.reset=function(){Ee.postMessage({reset:!0});for(var re in H)H[re](),delete H[re]}}return function(){if(D)return D;if(!i&&o){var Ee=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{D=new Worker(URL.createObjectURL(new Blob([Ee])))}catch(Me){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Me),null}ve(D)}return D}})(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function M(D,w){return w?w(D):D}function E(D){return D!=null}function y(D,w,H){return M(D&&E(D[w])?D[w]:m[w],H)}function S(D){return D<0?0:Math.floor(D)}function R(D,w){return Math.floor(Math.random()*(w-D))+D}function P(D){return parseInt(D,16)}function L(D){return D.map(k)}function k(D){var w=String(D).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:P(w.substring(0,2)),g:P(w.substring(2,4)),b:P(w.substring(4,6))}}function F(D){var w=y(D,"origin",Object);return w.x=y(w,"x",Number),w.y=y(w,"y",Number),w}function V(D){D.width=document.documentElement.clientWidth,D.height=document.documentElement.clientHeight}function T(D){var w=D.getBoundingClientRect();D.width=w.width,D.height=w.height}function I(D){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=D,w}function z(D,w,H,ve,Ee,Me,ee,re,ce){D.save(),D.translate(w,H),D.rotate(Me),D.scale(ve,Ee),D.arc(0,0,1,ee,re,ce),D.restore()}function B(D){var w=D.angle*(Math.PI/180),H=D.spread*(Math.PI/180);return{x:D.x,y:D.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:D.startVelocity*.5+Math.random()*D.startVelocity,angle2D:-w+(.5*H-Math.random()*H),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:D.color,shape:D.shape,tick:0,totalTicks:D.ticks,decay:D.decay,drift:D.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:D.gravity*3,ovalScalar:.6,scalar:D.scalar,flat:D.flat}}function Y(D,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var H=w.tick++/w.totalTicks,ve=w.x+w.random*w.tiltCos,Ee=w.y+w.random*w.tiltSin,Me=w.wobbleX+w.random*w.tiltCos,ee=w.wobbleY+w.random*w.tiltSin;if(D.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-H)+")",D.beginPath(),c&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))D.fill(K(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(Me-ve)*.1,Math.abs(ee-Ee)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var re=Math.PI/10*w.wobble,ce=Math.abs(Me-ve)*.1,ge=Math.abs(ee-Ee)*.1,Oe=w.shape.bitmap.width*w.scalar,Ie=w.shape.bitmap.height*w.scalar,ut=new DOMMatrix([Math.cos(re)*ce,Math.sin(re)*ce,-Math.sin(re)*ge,Math.cos(re)*ge,w.x,w.y]);ut.multiplySelf(new DOMMatrix(w.shape.matrix));var Qe=D.createPattern(v.transform(w.shape.bitmap),"no-repeat");Qe.setTransform(ut),D.globalAlpha=1-H,D.fillStyle=Qe,D.fillRect(w.x-Oe/2,w.y-Ie/2,Oe,Ie),D.globalAlpha=1}else if(w.shape==="circle")D.ellipse?D.ellipse(w.x,w.y,Math.abs(Me-ve)*w.ovalScalar,Math.abs(ee-Ee)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):z(D,w.x,w.y,Math.abs(Me-ve)*w.ovalScalar,Math.abs(ee-Ee)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var We=Math.PI/2*3,xt=4*w.scalar,dt=8*w.scalar,Lt=w.x,Ut=w.y,sn=5,X=Math.PI/sn;sn--;)Lt=w.x+Math.cos(We)*dt,Ut=w.y+Math.sin(We)*dt,D.lineTo(Lt,Ut),We+=X,Lt=w.x+Math.cos(We)*xt,Ut=w.y+Math.sin(We)*xt,D.lineTo(Lt,Ut),We+=X;else D.moveTo(Math.floor(w.x),Math.floor(w.y)),D.lineTo(Math.floor(w.wobbleX),Math.floor(Ee)),D.lineTo(Math.floor(Me),Math.floor(ee)),D.lineTo(Math.floor(ve),Math.floor(w.wobbleY));return D.closePath(),D.fill(),w.tick<w.totalTicks}function se(D,w,H,ve,Ee){var Me=w.slice(),ee=D.getContext("2d"),re,ce,ge=f(function(Oe){function Ie(){re=ce=null,ee.clearRect(0,0,ve.width,ve.height),v.clear(),Ee(),Oe()}function ut(){i&&!(ve.width===a.width&&ve.height===a.height)&&(ve.width=D.width=a.width,ve.height=D.height=a.height),!ve.width&&!ve.height&&(H(D),ve.width=D.width,ve.height=D.height),ee.clearRect(0,0,ve.width,ve.height),Me=Me.filter(function(Qe){return Y(ee,Qe)}),Me.length?re=x.frame(ut):Ie()}re=x.frame(ut),ce=Ie});return{addFettis:function(Oe){return Me=Me.concat(Oe),ge},canvas:D,promise:ge,reset:function(){re&&x.cancel(re),ce&&ce()}}}function de(D,w){var H=!D,ve=!!y(w||{},"resize"),Ee=!1,Me=y(w,"disableForReducedMotion",Boolean),ee=o&&!!y(w||{},"useWorker"),re=ee?g():null,ce=H?V:T,ge=D&&re?!!D.__confetti_initialized:!1,Oe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ie;function ut(We,xt,dt){for(var Lt=y(We,"particleCount",S),Ut=y(We,"angle",Number),sn=y(We,"spread",Number),X=y(We,"startVelocity",Number),Kt=y(We,"decay",Number),wt=y(We,"gravity",Number),$t=y(We,"drift",Number),Ge=y(We,"colors",L),Jt=y(We,"ticks",Number),U=y(We,"shapes"),A=y(We,"scalar"),ne=!!y(We,"flat"),ye=F(We),we=Lt,Ne=[],ke=D.width*ye.x,xe=D.height*ye.y;we--;)Ne.push(B({x:ke,y:xe,angle:Ut,spread:sn,startVelocity:X,color:Ge[we%Ge.length],shape:U[R(0,U.length)],ticks:Jt,decay:Kt,gravity:wt,drift:$t,scalar:A,flat:ne}));return Ie?Ie.addFettis(Ne):(Ie=se(D,Ne,ce,xt,dt),Ie.promise)}function Qe(We){var xt=Me||y(We,"disableForReducedMotion",Boolean),dt=y(We,"zIndex",Number);if(xt&&Oe)return f(function(X){X()});H&&Ie?D=Ie.canvas:H&&!D&&(D=I(dt),document.body.appendChild(D)),ve&&!ge&&ce(D);var Lt={width:D.width,height:D.height};re&&!ge&&re.init(D),ge=!0,re&&(D.__confetti_initialized=!0);function Ut(){if(re){var X={getBoundingClientRect:function(){if(!H)return D.getBoundingClientRect()}};ce(X),re.postMessage({resize:{width:X.width,height:X.height}});return}Lt.width=Lt.height=null}function sn(){Ie=null,ve&&(Ee=!1,e.removeEventListener("resize",Ut)),H&&D&&(document.body.contains(D)&&document.body.removeChild(D),D=null,ge=!1)}return ve&&!Ee&&(Ee=!0,e.addEventListener("resize",Ut,!1)),re?re.fire(We,Lt,sn):ut(We,Lt,sn)}return Qe.reset=function(){re&&re.reset(),Ie&&Ie.reset()},Qe}var W;function J(){return W||(W=de(null,{useWorker:!0,resize:!0})),W}function K(D,w,H,ve,Ee,Me,ee){var re=new Path2D(D),ce=new Path2D;ce.addPath(re,new DOMMatrix(w));var ge=new Path2D;return ge.addPath(ce,new DOMMatrix([Math.cos(ee)*Ee,Math.sin(ee)*Ee,-Math.sin(ee)*Me,Math.cos(ee)*Me,H,ve])),ge}function te(D){if(!c)throw new Error("path confetti are not supported in this browser");var w,H;typeof D=="string"?w=D:(w=D.path,H=D.matrix);var ve=new Path2D(w),Ee=document.createElement("canvas"),Me=Ee.getContext("2d");if(!H){for(var ee=1e3,re=ee,ce=ee,ge=0,Oe=0,Ie,ut,Qe=0;Qe<ee;Qe+=2)for(var We=0;We<ee;We+=2)Me.isPointInPath(ve,Qe,We,"nonzero")&&(re=Math.min(re,Qe),ce=Math.min(ce,We),ge=Math.max(ge,Qe),Oe=Math.max(Oe,We));Ie=ge-re,ut=Oe-ce;var xt=10,dt=Math.min(xt/Ie,xt/ut);H=[dt,0,0,dt,-Math.round(Ie/2+re)*dt,-Math.round(ut/2+ce)*dt]}return{type:"path",path:w,matrix:H}}function le(D){var w,H=1,ve="#000000",Ee='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof D=="string"?w=D:(w=D.text,H="scalar"in D?D.scalar:H,Ee="fontFamily"in D?D.fontFamily:Ee,ve="color"in D?D.color:ve);var Me=10*H,ee=""+Me+"px "+Ee,re=new OffscreenCanvas(Me,Me),ce=re.getContext("2d");ce.font=ee;var ge=ce.measureText(w),Oe=Math.ceil(ge.actualBoundingBoxRight+ge.actualBoundingBoxLeft),Ie=Math.ceil(ge.actualBoundingBoxAscent+ge.actualBoundingBoxDescent),ut=2,Qe=ge.actualBoundingBoxLeft+ut,We=ge.actualBoundingBoxAscent+ut;Oe+=ut+ut,Ie+=ut+ut,re=new OffscreenCanvas(Oe,Ie),ce=re.getContext("2d"),ce.font=ee,ce.fillStyle=ve,ce.fillText(w,Qe,We);var xt=1/H;return{type:"bitmap",bitmap:re.transferToImageBitmap(),matrix:[xt,0,0,xt,-Oe*xt/2,-Ie*xt/2]}}t.exports=function(){return J().apply(this,arguments)},t.exports.reset=function(){J().reset()},t.exports.create=de,t.exports.shapeFromPath=te,t.exports.shapeFromText=le})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),bp,!1);const aC=bp.exports;bp.exports.create;const oC={"wave-cleared":{title:"WAVE CLEARED",subtitle:"The path opens. Onward, Warden.",color:"#10b981",borderColor:"#10b981",confettiColors:["#10b981","#a78bfa","#ec4899","#facc15"],emoji:"✦"},"seal-broken":{title:"SEAL BROKEN",subtitle:"The Overlord weakens.",color:"#facc15",borderColor:"#facc15",confettiColors:["#facc15","#ec4899","#ef4444","#a78bfa"],emoji:"⚡"},"boss-defeated":{title:"BOSS DEFEATED",subtitle:"The Rift retreats. For now.",color:"#ec4899",borderColor:"#ec4899",confettiColors:["#ec4899","#facc15","#10b981","#a78bfa","#60a5fa"],emoji:"★"}};function lC({kind:s,word:e,wave:t,attemptsUsed:i,sealsBroken:a,sealsTotal:o,duration:c=2500,onDismiss:d}){const h=oC[s];return G.useEffect(()=>{const f=(x,g,m)=>{try{aC({particleCount:x,spread:g,startVelocity:m,origin:{x:.5,y:.35},colors:h.confettiColors,zIndex:100,ticks:200})}catch{}};f(80,65,35),s==="boss-defeated"&&(setTimeout(()=>f(60,90,45),250),setTimeout(()=>f(60,90,45),500));const v=setTimeout(d,c);return()=>clearTimeout(v)},[s,c,d,h.confettiColors]),b.jsxs("div",{className:"fixed inset-0 z-[60] flex items-center justify-center px-6 font-['Press_Start_2P',_monospace]",style:{backgroundColor:"rgba(10,1,24,0.7)",animation:"celebFadeIn 0.2s ease-out"},onClick:d,children:[b.jsx("style",{children:`
        @keyframes celebFadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes celebPopIn   { 0% { transform: scale(0.6) rotate(-2deg); opacity: 0; } 60% { transform: scale(1.08) rotate(1deg); opacity: 1; } 100% { transform: scale(1) rotate(0); opacity: 1; } }
        @keyframes celebGlow    { 0%, 100% { filter: drop-shadow(0 0 8px var(--c, #10b981)) drop-shadow(0 0 18px var(--c, #10b981)); } 50% { filter: drop-shadow(0 0 14px var(--c, #10b981)) drop-shadow(0 0 28px var(--c, #10b981)); } }
        @keyframes celebSparkle { 0%, 100% { transform: scale(1) rotate(0); opacity: 0.9; } 50% { transform: scale(1.2) rotate(15deg); opacity: 1; } }
        @keyframes celebStripe  { 0% { background-position: 0 0; } 100% { background-position: 40px 0; } }
      `}),b.jsxs("div",{className:"relative w-full max-w-sm bg-[#0a0118] border-4 px-6 py-7 text-center",style:{borderColor:h.borderColor,animation:"celebPopIn 0.5s cubic-bezier(0.22, 1, 0.36, 1)",boxShadow:`0 0 24px ${h.borderColor}99, 0 0 60px ${h.borderColor}55`,"--c":h.color},onClick:f=>f.stopPropagation(),children:[b.jsx("div",{className:"absolute top-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 left-0  w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-20",style:{backgroundImage:`repeating-linear-gradient(45deg, ${h.color} 0, ${h.color} 2px, transparent 2px, transparent 14px)`,animation:"celebStripe 1.2s linear infinite"}}),b.jsxs("div",{className:"relative",children:[b.jsx("div",{className:"text-5xl mb-2",style:{color:h.color,animation:"celebSparkle 1.6s ease-in-out infinite, celebGlow 2s ease-in-out infinite"},children:h.emoji}),b.jsx("p",{className:"text-[14px] tracking-widest mb-1",style:{color:h.color,textShadow:`0 0 8px ${h.color}`},children:h.title}),b.jsx("p",{className:"text-[7px] text-white/70 leading-relaxed mb-4 px-2",children:h.subtitle}),b.jsx("div",{className:"flex items-center justify-center gap-1 mb-4",children:e.split("").map((f,v)=>b.jsx("div",{className:"flex items-center justify-center",style:{width:"32px",height:"32px",backgroundColor:h.color,border:`2px solid ${h.color}`,color:"#0a0118",fontSize:"13px",fontWeight:"bold",animation:`celebPopIn 0.4s ${.15+v*.05}s cubic-bezier(0.22, 1, 0.36, 1) both`,boxShadow:`0 0 6px ${h.color}88`},children:f},v))}),b.jsxs("div",{className:"flex items-center justify-center gap-4 text-[6px] tracking-widest mb-3",children:[b.jsxs("span",{className:"text-white/50",children:["WAVE ",b.jsx("span",{className:"text-white",children:t})]}),b.jsx("span",{className:"text-white/30",children:"·"}),b.jsxs("span",{className:"text-white/50",children:[i," ",b.jsx("span",{className:"text-white",children:i===1?"TRY":"TRIES"})]}),o!==void 0&&a!==void 0&&b.jsxs(b.Fragment,{children:[b.jsx("span",{className:"text-white/30",children:"·"}),b.jsxs("span",{className:"text-white/50",children:["SEAL ",b.jsxs("span",{style:{color:h.color},children:[a,"/",o]})]})]})]}),b.jsx("p",{className:"text-[6px] text-white/30 tracking-widest",style:{animation:"celebFadeIn 0.5s 0.6s ease-out both"},children:"TAP TO CONTINUE"})]})]})]})}const jf={},cC=(jf==null?void 0:jf.VITE_API_BASE)??"",uC={asteroid_smashed:["Another fragment falls… you cannot stop the Rift.","Destroy all you wish — the void is infinite."],word_solved:["The seal weakens… but the Overlord is eternal.","One word closer to your doom."],wave_start:["A new wave descends upon you. Brace yourself.","My sentinels multiply. You will not."],wave_cleared:["Impossible. My asteroids… defeated?","One wave falls. Ten more await."],game_over:["The Rift swallows you whole. As it always will.","Fade into the void, Warden. Fade."],player_hurt:["Feel the weight of the cosmos, little Warden.","Pain is a reminder that you are mortal."],hint_requested:["You need guidance? How… pathetically human.","Seek your hint. It will not save you."]};function Vx(s){const e=uC[s]??["The Rift watches. Always."];return e[Math.floor(Math.random()*e.length)]}async function Xf(s,e=""){try{const t=localStorage.getItem("arwordle.settings.v1");if(t){const i=JSON.parse(t);if(i&&i.bossTauntsEnabled===!1)return Vx(s)}}catch{}try{const t=await fetch(`${cC}/api/boss/taunt/`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:s,context:e}),signal:AbortSignal.timeout(5e3)});if(!t.ok)throw new Error(`HTTP ${t.status}`);return(await t.json()).taunt}catch{return Vx(s)}}const dC={checking:"CHECKING DEVICE...",unsupported:"AR NOT SUPPORTED",idle:"READY TO SCAN",starting:"INITIALIZING AR...",scanning:"SCANNING SURFACE...","plane-found":"SURFACE LOCKED ✓",loading:"LOADING MODELS...",playing:"COMBAT ACTIVE","game-over":"DEFEATED",error:"SESSION ERROR"},fC={checking:"#a78bfa",unsupported:"#ef4444",idle:"#a78bfa",starting:"#facc15",scanning:"#facc15","plane-found":"#10b981",loading:"#a78bfa",playing:"#ec4899","game-over":"#ef4444",error:"#ef4444"};function hC(){const s=tl(),e=G.useRef(null),{phase:t,smashed:i,hp:a,maxHp:o,damageTick:c,errorMsg:d,paused:h,showPlane:f,collectedLetters:v,startAR:x,startGame:g,stopAR:m,pause:M,resume:E,togglePlane:y,setWaveTo:S,damagePlayer:R,clearActiveAsteroids:P,respawnWave:L}=JR(),{fetchHint:k,hint:F,hintLoading:V,clearHint:T}=iC(),I=nC({enabled:t==="playing",onBossAttack:ge=>R(ge),onWaveStart:ge=>{T(),ge>1&&L(),E()},onWaveEnd:(ge,Oe)=>{P(),M(),T(),Oe&&Xf("wave_start","Boss wave begins").then(Y)}}),z=I.wave,[B,Y]=G.useState(null),[se,de]=G.useState(null);G.useEffect(()=>{t==="playing"&&I.metaPhase==="idle"&&I.startGame()},[t,I.metaPhase,I.startGame]),G.useEffect(()=>{S(I.wave)},[I.wave,S]),G.useEffect(()=>{t==="game-over"&&(I.reset(),Y(null),Xf("game_over").then(Y))},[t,I.reset]);const W=fC[t],J=dC[t],K=t==="scanning"||t==="plane-found"||t==="loading"||t==="playing"||t==="game-over",te=t==="idle"||t==="error",le=t==="plane-found",D=t==="playing",w=t==="loading"||t==="starting",H=t==="game-over",ve=Math.max(0,Math.min(100,a/o*100)),Ee=ve>60?"#10b981":ve>30?"#facc15":"#ef4444",[Me,ee]=G.useState(!1);G.useEffect(()=>{if(c===0)return;ee(!0);const ge=setTimeout(()=>ee(!1),350);return()=>clearTimeout(ge)},[c]);const re=()=>x(e.current??void 0),ce=()=>{m(),s("/mission")};return b.jsxs("div",{ref:e,className:"fixed inset-0 font-['Press_Start_2P',_monospace] select-none",style:{backgroundColor:K?"transparent":"#0a0118",zIndex:100},children:[b.jsx("style",{children:`
        @keyframes scanLine  { 0% { transform:translateY(-5%);opacity:.7 } 100% { transform:translateY(105vh);opacity:0 } }
        @keyframes pulseRing { 0% { transform:scale(.8);opacity:1 } 100% { transform:scale(2.2);opacity:0 } }
        @keyframes blink     { 0%,100% { opacity:1 } 50% { opacity:.15 } }
        @keyframes fadeSlide { from { opacity:0;transform:translateY(10px) } to { opacity:1;transform:translateY(0) } }
        @keyframes corner    { 0%,100% { opacity:1 } 50% { opacity:.25 } }
        @keyframes spin      { to { transform:rotate(360deg) } }
      `}),K&&b.jsx("div",{className:"pointer-events-none absolute inset-x-0 h-0.5",style:{background:`linear-gradient(to right,transparent,${W}88,transparent)`,animation:"scanLine 3.5s linear infinite",zIndex:10}}),["tl","tr","bl","br"].map(ge=>b.jsx("div",{className:"absolute pointer-events-none",style:{top:ge[0]==="t"?14:void 0,bottom:ge[0]==="b"?14:void 0,left:ge[1]==="l"?14:void 0,right:ge[1]==="r"?14:void 0,width:28,height:28,borderTop:ge[0]==="t"?`3px solid ${W}`:void 0,borderBottom:ge[0]==="b"?`3px solid ${W}`:void 0,borderLeft:ge[1]==="l"?`3px solid ${W}`:void 0,borderRight:ge[1]==="r"?`3px solid ${W}`:void 0,animation:"corner 2s ease-in-out infinite",zIndex:20}},ge)),b.jsxs("div",{className:"absolute top-0 inset-x-0 flex items-center justify-between px-10 py-4",style:{zIndex:30},children:[b.jsx("button",{onClick:ce,className:"text-[8px] transition-colors",style:{color:K?"#ffffffcc":"#a78bfa"},children:"← EXIT"}),b.jsx("div",{className:"text-[7px] px-2 py-1 border",style:{color:W,borderColor:W,animation:K&&t!=="plane-found"&&!D?"blink 1s ease-in-out infinite":"none"},children:J}),D||H?b.jsxs("div",{className:"text-[7px] text-[#ec4899]",children:["KILLS ",i]}):b.jsx("div",{className:"text-[7px]",style:{color:K?"#10b981":"#374151"},children:"WAVE 01"})]}),D&&I.metaPhase==="wave-active"&&b.jsxs("div",{className:"absolute top-24 inset-x-0 px-10",style:{zIndex:30},children:[b.jsxs("div",{className:"flex items-center justify-between mb-1",children:[b.jsx("span",{className:"text-[6px] text-white/60 tracking-widest",children:"TIME"}),b.jsxs("span",{className:"text-[6px] tracking-widest",style:{color:I.timeRemainingMs<1e4?"#ef4444":"#a78bfa",animation:I.timeRemainingMs<1e4?"blink 0.6s ease-in-out infinite":"none"},children:[Math.ceil(I.timeRemainingMs/1e3),"s",z%lu===0&&" → BOSS"]}),b.jsxs("span",{className:"text-[6px] text-[#10b981] tracking-widest",children:["☕ ",v.length]})]}),b.jsx("div",{className:"w-full h-1.5 bg-[#1a0a2e]/80 border border-white/10",children:b.jsx("div",{className:"h-full transition-all",style:{width:`${I.timeRemainingMs/Wo*100}%`,backgroundColor:I.timeRemainingMs<1e4?"#ef4444":"#8b5cf6",boxShadow:`0 0 6px ${I.timeRemainingMs<1e4?"#ef4444":"#8b5cf6"}`}})})]}),(D||H)&&b.jsxs("div",{className:"absolute top-14 inset-x-0 px-10",style:{zIndex:30},children:[b.jsxs("div",{className:"flex items-center justify-between mb-1",children:[b.jsx("span",{className:"text-[6px] text-white/60 tracking-widest",children:"HP"}),b.jsxs("span",{className:"text-[6px] text-[#facc15] tracking-widest",children:["WAVE ",String(z).padStart(2,"0")]}),b.jsxs("span",{className:"text-[6px]",style:{color:Ee},children:[a,"/",o]})]}),b.jsx("div",{className:"w-full h-2 bg-[#1a0a2e]/80 border border-white/20",children:b.jsx("div",{className:"h-full transition-all duration-300 ease-out",style:{width:`${ve}%`,backgroundColor:Ee,boxShadow:`0 0 8px ${Ee}`}})})]}),Me&&b.jsx("div",{className:"pointer-events-none absolute inset-0",style:{backgroundColor:"rgba(239,68,68,0.35)",boxShadow:"inset 0 0 120px 40px rgba(239,68,68,0.6)",animation:"fadeSlide .35s ease-out",zIndex:45}}),D&&!h&&I.metaPhase==="wave-active"&&b.jsx("button",{onClick:M,className:"absolute bottom-6 right-4 w-11 h-11 flex items-center justify-center border-2 border-[#a78bfa] bg-[#0a0118]/85 active:scale-95 hover:bg-[#1a0a2e]",style:{zIndex:35,boxShadow:"0 0 12px #8b5cf677, 0 0 4px #0a0118"},"aria-label":"Pause",children:b.jsxs("div",{className:"flex gap-1",children:[b.jsx("div",{className:"w-1.5 h-4 bg-[#a78bfa]"}),b.jsx("div",{className:"w-1.5 h-4 bg-[#a78bfa]"})]})}),D&&h&&I.metaPhase==="wave-active"&&b.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-5 px-8",style:{zIndex:60,backgroundColor:"rgba(10,1,24,0.85)",animation:"fadeSlide .25s ease-out"},children:[b.jsx("p",{className:"text-[18px] tracking-widest text-[#a78bfa]",children:"PAUSED"}),b.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-xs",children:[b.jsx("button",{onClick:E,className:"py-4 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors",children:"> RESUME <"}),b.jsxs("button",{onClick:y,className:"py-3 text-[9px] border-2 transition-colors",style:{borderColor:f?"#10b981":"#facc15",color:f?"#10b981":"#facc15"},children:["PLANE: ",f?"VISIBLE":"HIDDEN"]}),b.jsx("button",{onClick:async()=>{E(),m(),await new Promise(ge=>setTimeout(ge,80)),re()},className:"py-3 text-[9px] border-2 border-white/40 text-white/80 hover:text-white transition-colors",children:"RESTART"}),b.jsx("button",{onClick:ce,className:"py-3 text-[9px] border-2 border-white/20 text-white/60 hover:text-white/90 transition-colors",children:"EXIT TO MISSION"})]}),b.jsxs("p",{className:"text-[6px] text-white/40 tracking-widest mt-2",children:["KILLS ",i," · WAVE ",z," · HP ",a,"/",o]})]}),!K&&b.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-7 px-8",style:{zIndex:20,animation:"fadeSlide .4s ease-out"},children:[b.jsxs("div",{className:"relative flex items-center justify-center w-36 h-36",children:[b.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:W,opacity:.18}}),b.jsx("div",{className:"absolute w-24 h-24 rounded-full border",style:{borderColor:W,opacity:.35}}),w&&b.jsx("div",{className:"absolute w-full h-full rounded-full border-t-2",style:{borderColor:W,animation:"spin .9s linear infinite"}}),!w&&(t==="idle"||t==="error")&&b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:W,animation:"pulseRing 1.6s ease-out infinite"}}),b.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:W,animation:"pulseRing 1.6s .8s ease-out infinite"}})]}),b.jsx("span",{className:"text-3xl",children:t==="unsupported"?"🚫":t==="error"?"⚠️":"📷"})]}),b.jsxs("div",{className:"text-center space-y-2",children:[b.jsx("p",{className:"text-[10px] tracking-widest",style:{color:W},children:J}),t==="unsupported"&&b.jsxs("p",{className:"text-[7px] text-white/40 leading-loose",children:["WebXR immersive-ar not",b.jsx("br",{}),"supported on this device."]}),t==="error"&&b.jsx("pre",{className:"text-[7px] text-[#ef444488] leading-relaxed max-w-xs text-left whitespace-pre-wrap break-words px-3 py-2 border border-[#ef444444] bg-[#ef44440a]",style:{fontFamily:"'Press Start 2P', monospace"},children:d}),t==="idle"&&b.jsxs("p",{className:"text-[7px] text-white/40 leading-loose",children:["Point camera at a flat surface",b.jsx("br",{}),"then tap START AR."]})]}),te&&b.jsxs("button",{onClick:re,className:"relative py-4 px-8 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5",children:[b.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),t==="error"?"> RETRY AR <":"> START AR <"]})]}),K&&b.jsxs(b.Fragment,{children:[!D&&b.jsx("div",{className:"absolute pointer-events-none",style:{top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:20},children:t==="plane-found"?b.jsxs("div",{className:"text-center",children:[b.jsx("div",{className:"w-20 h-20 border-4 border-[#10b981] mx-auto",style:{boxShadow:"0 0 24px #10b98166"}}),b.jsx("p",{className:"text-[7px] text-[#10b981] mt-2 tracking-widest",style:{animation:"blink 1.5s ease-in-out infinite"},children:"SURFACE LOCKED"})]}):b.jsxs("div",{className:"text-center",children:[b.jsx("div",{className:"w-14 h-14 border-2 border-[#facc15] mx-auto",style:{boxShadow:"0 0 12px #facc1544",animation:"blink 1s ease-in-out infinite"}}),b.jsx("p",{className:"text-[7px] text-[#facc15] mt-2 tracking-widest",children:"SCANNING..."})]})}),le&&b.jsx("div",{className:"absolute bottom-10 inset-x-0 flex justify-center px-8",style:{zIndex:30,animation:"fadeSlide .4s ease-out"},children:b.jsx("button",{onClick:g,className:"w-full max-w-xs py-5 text-[11px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5",style:{boxShadow:"0 0 32px #8b5cf677"},children:"> START GAME <"})}),D&&I.metaPhase==="wave-active"&&b.jsx("div",{className:"absolute bottom-10 inset-x-0 text-center",style:{zIndex:30,animation:"fadeSlide .3s ease-out"},children:b.jsx("p",{className:"text-[8px] text-[#ec4899] tracking-widest",style:{animation:"blink 2.2s ease-in-out infinite"},children:"TAP ONLY RED ROCKS · WAIT TO STRIKE"})}),D&&(I.metaPhase==="intermission"||I.metaPhase==="boss-fight")&&b.jsx(sC,{variant:I.metaPhase==="boss-fight"?"boss":"normal",title:I.metaPhase==="boss-fight"?`BOSS · WAVE ${z}`:`WAVE ${z} CLEARED`,subtitle:I.metaPhase==="boss-fight"?B??"The Rift Overlord blocks your path. Solve the seals!":"Solve to advance to the next wave",guess:I.guess,attempts:I.attempts,guessesRemaining:I.guessesRemaining,collectedLetters:v,bossWordsLeft:I.bossWordsLeft,bossWordsTotal:I.bossWordsTotal,hp:I.metaPhase==="boss-fight"?a:void 0,maxHp:I.metaPhase==="boss-fight"?o:void 0,hint:F,hintLoading:V,onAddLetter:I.addLetter,onBackspace:I.backspace,onSubmit:()=>{const ge=I.bossWordsTotal,Oe=I.bossWordsLeft,Ie=I.submitGuess();Ie.event&&(de({kind:Ie.event,word:Ie.solvedWord??"",wave:z,attemptsUsed:Ie.attemptsUsed,sealsTotal:ge||void 0,sealsBroken:ge?ge-Oe+1:void 0}),(Ie.event==="seal-broken"||Ie.event==="boss-defeated")&&Xf("word_solved",`Solved ${Ie.solvedWord} in ${Ie.attemptsUsed}`).then(Y))},onRequestHint:()=>k(I.targetWord,I.attempts.map(ge=>({guess:ge.word,colors:ge.colors})))}),se&&b.jsx(lC,{kind:se.kind,word:se.word,wave:se.wave,attemptsUsed:se.attemptsUsed,sealsBroken:se.sealsBroken,sealsTotal:se.sealsTotal,onDismiss:()=>de(null)}),H&&b.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-4 px-8",style:{zIndex:50,backgroundColor:"rgba(10,1,24,.82)",animation:"fadeSlide .5s ease-out"},children:[b.jsx("p",{className:"text-[22px] tracking-widest text-[#ef4444]",children:"DEFEATED"}),b.jsxs("div",{className:"text-center space-y-2",children:[b.jsxs("p",{className:"text-[10px] text-[#ec4899] tracking-widest",children:["KILLS: ",i]}),b.jsxs("p",{className:"text-[8px] text-[#facc15] tracking-widest",children:["WAVE REACHED: ",z]})]}),b.jsxs("button",{onClick:async()=>{m(),await new Promise(ge=>setTimeout(ge,80)),re()},className:"mt-2 py-3 px-6 text-[9px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors relative",children:[b.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"> RETRY <"]}),b.jsx("button",{onClick:ce,className:"py-2 px-5 text-[8px] border-2 border-white/30 text-white/70 hover:text-white transition-colors",children:"EXIT TO MISSION"})]})]})]})}const pC=[{word:"BLAZE",ipa:"/bleɪz/",syllables:"blaze",pos:"noun",definition:"A fierce, bright fire or flame; an intense outburst.",example:"A blaze tore through the dry forest by morning."},{word:"STORM",ipa:"/stɔːrm/",syllables:"storm",pos:"noun",definition:"A violent disturbance of weather with strong wind, rain, or thunder.",example:"The storm shook the windows for hours."},{word:"FROST",ipa:"/frɒst/",syllables:"frost",pos:"noun",definition:"A thin layer of ice formed from water vapor on cold surfaces.",example:"Morning frost glittered on the rooftops."},{word:"FLAME",ipa:"/fleɪm/",syllables:"flame",pos:"noun",definition:"A hot, glowing body of ignited gas produced by fire.",example:"A single candle flame lit the entire chamber."},{word:"SPELL",ipa:"/spɛl/",syllables:"spell",pos:"noun",definition:"A magical incantation believed to have supernatural power.",example:"The witch cast a spell to silence the crows."},{word:"MAGIC",ipa:"/ˈmæ.dʒɪk/",syllables:"ma·gic",pos:"noun",definition:"The power of influencing events using mysterious or supernatural forces.",example:"Children believe in the magic of fireflies."},{word:"WRATH",ipa:"/ræθ/",syllables:"wrath",pos:"noun",definition:"Extreme, fierce anger or vengeful rage.",example:"They feared the wrath of the storm gods."},{word:"CRYPT",ipa:"/krɪpt/",syllables:"crypt",pos:"noun",definition:"An underground room or vault, usually beneath a church, used as a burial place.",example:"The knight was laid to rest in the ancient crypt."},{word:"CURSE",ipa:"/kɜːrs/",syllables:"curse",pos:"noun",definition:"A solemn utterance intended to invoke supernatural harm on someone.",example:"Legends say a curse guards the buried treasure."},{word:"POWER",ipa:"/ˈpaʊ.ər/",syllables:"pow·er",pos:"noun",definition:"The ability to act or produce an effect; great strength or influence.",example:"With great power comes great responsibility."},{word:"SWORD",ipa:"/sɔːrd/",syllables:"sword",pos:"noun",definition:"A weapon with a long metal blade and a hilt with a hand guard.",example:"The hero unsheathed his sword in a single fluid motion."},{word:"ARROW",ipa:"/ˈæ.roʊ/",syllables:"ar·row",pos:"noun",definition:"A pointed projectile shot from a bow.",example:"The arrow struck the target dead-center."},{word:"ARMOR",ipa:"/ˈɑːr.mər/",syllables:"ar·mor",pos:"noun",definition:"Protective metal or leather covering worn during combat.",example:"Her armor was forged from sky-iron."},{word:"BRAVE",ipa:"/breɪv/",syllables:"brave",pos:"adjective",definition:"Showing courage in the face of danger or pain.",example:"A brave choice can change the world."},{word:"QUEST",ipa:"/kwɛst/",syllables:"quest",pos:"noun",definition:"A long or arduous search for something of value or significance.",example:"They began a quest to find the lost city."},{word:"SHADE",ipa:"/ʃeɪd/",syllables:"shade",pos:"noun",definition:"Comparative darkness caused by something blocking the light; a ghost in folklore.",example:"We rested in the shade of an oak."},{word:"GHOST",ipa:"/ɡoʊst/",syllables:"ghost",pos:"noun",definition:"The apparition of a dead person believed to appear to the living.",example:"Stories of a ghost haunt that old manor."},{word:"BEAST",ipa:"/biːst/",syllables:"beast",pos:"noun",definition:"A large or dangerous wild animal.",example:"A beast crept from the forest at dusk."},{word:"DEMON",ipa:"/ˈdiː.mən/",syllables:"de·mon",pos:"noun",definition:"An evil spirit or malevolent supernatural being.",example:"Ancient texts warned of a demon trapped in the mountain."},{word:"ANGEL",ipa:"/ˈeɪn.dʒəl/",syllables:"an·gel",pos:"noun",definition:"A spiritual being attendant upon a deity; a guardian or messenger.",example:"She has the patience of an angel."},{word:"RAVEN",ipa:"/ˈreɪ.vən/",syllables:"ra·ven",pos:"noun",definition:"A large, all-black bird of the crow family, often a symbol of mystery.",example:"A raven perched on the broken weather-vane."},{word:"TIGER",ipa:"/ˈtaɪ.ɡər/",syllables:"ti·ger",pos:"noun",definition:"A large striped Asian cat, the biggest of all wild cats.",example:"The tiger moved silently through the bamboo."},{word:"EAGLE",ipa:"/ˈiː.ɡəl/",syllables:"ea·gle",pos:"noun",definition:"A large bird of prey known for keen sight and powerful flight.",example:"An eagle soared above the canyon."},{word:"GIANT",ipa:"/ˈdʒaɪ.ənt/",syllables:"gi·ant",pos:"noun",definition:"An imaginary or mythical being of enormous size and strength.",example:"In the tale, a giant guarded the bridge."},{word:"KNAVE",ipa:"/neɪv/",syllables:"knave",pos:"noun",definition:"A dishonest or unscrupulous man (archaic); also the jack in a deck of cards.",example:"The merchant called the thief a knave."},{word:"NOBLE",ipa:"/ˈnoʊ.bəl/",syllables:"no·ble",pos:"adjective",definition:"Having or showing fine personal qualities or high moral principles.",example:"It was a noble act of self-sacrifice."},{word:"ELDER",ipa:"/ˈɛl.dər/",syllables:"el·der",pos:"noun",definition:"A person of greater age, especially one with influence or authority.",example:"The village elder welcomed every traveler."},{word:"ROYAL",ipa:"/ˈrɔɪ.əl/",syllables:"roy·al",pos:"adjective",definition:"Having the status of a king or queen, or relating to a monarch.",example:"A royal banner flew above the gate."},{word:"CROWN",ipa:"/kraʊn/",syllables:"crown",pos:"noun",definition:"A circular ornamental headdress worn by a monarch as a symbol of authority.",example:"A jeweled crown sat upon a velvet cushion."},{word:"RELIC",ipa:"/ˈrɛl.ɪk/",syllables:"rel·ic",pos:"noun",definition:"An object surviving from an earlier time, often of cultural or sacred value.",example:"The museum displayed a relic of the lost dynasty."},{word:"VAULT",ipa:"/vɔːlt/",syllables:"vault",pos:"noun",definition:"A secure room used for storing valuables; an arched roof or chamber.",example:"The bank vault held centuries of secrets."},{word:"TOTEM",ipa:"/ˈtoʊ.təm/",syllables:"to·tem",pos:"noun",definition:"A natural object or animal believed to have spiritual significance, often serving as an emblem.",example:"The carved totem watched over the river."},{word:"EARTH",ipa:"/ɜːrθ/",syllables:"earth",pos:"noun",definition:"The planet on which we live; the world; soil or ground.",example:"Astronauts gazed back at Earth from orbit."},{word:"ETHER",ipa:"/ˈiː.θər/",syllables:"e·ther",pos:"noun",definition:"The clear sky or upper regions of air; in alchemy, a fifth element pervading space.",example:"Their voices vanished into the ether."},{word:"NIGHT",ipa:"/naɪt/",syllables:"night",pos:"noun",definition:"The period from sunset to sunrise when it is dark.",example:"A cold night settled over the camp."},{word:"LIGHT",ipa:"/laɪt/",syllables:"light",pos:"noun",definition:"The natural agent that makes things visible; brightness or illumination.",example:"A shaft of light pierced the cave."},{word:"PRIDE",ipa:"/praɪd/",syllables:"pride",pos:"noun",definition:"A feeling of deep satisfaction in achievements; also, a group of lions.",example:"She glowed with pride at the ceremony."},{word:"HONOR",ipa:"/ˈɒn.ər/",syllables:"hon·or",pos:"noun",definition:"High respect, esteem, or adherence to ethical principles.",example:"A knight is bound by honor."},{word:"VALOR",ipa:"/ˈvæl.ər/",syllables:"val·or",pos:"noun",definition:"Great courage in the face of danger, especially in battle.",example:"They were decorated for valor in combat."},{word:"GLINT",ipa:"/ɡlɪnt/",syllables:"glint",pos:"noun",definition:"A small flash of light; a glance reflected from a surface.",example:"A glint of gold caught his eye."},{word:"DREAM",ipa:"/driːm/",syllables:"dream",pos:"noun",definition:"A series of images or thoughts in sleep; a cherished aspiration.",example:"She had a dream of becoming a pilot."},{word:"JEWEL",ipa:"/ˈdʒuː.əl/",syllables:"jew·el",pos:"noun",definition:"A precious stone or piece of ornamental art; a person or thing of great worth.",example:"The crown was set with a single jewel."},{word:"CRAFT",ipa:"/kræft/",syllables:"craft",pos:"noun",definition:"An activity involving skill in making things by hand; cunning ingenuity.",example:"Pottery is an ancient craft."},{word:"SCALE",ipa:"/skeɪl/",syllables:"scale",pos:"noun",definition:"A graded range of values; one of the small thin plates on fish or reptile skin.",example:"Every scale on the dragon shimmered."},{word:"RANGE",ipa:"/reɪndʒ/",syllables:"range",pos:"noun",definition:"The area of variation between limits; a row of mountains; an open area for grazing.",example:"The rifle had a range of three hundred meters."},{word:"FATAL",ipa:"/ˈfeɪ.təl/",syllables:"fa·tal",pos:"adjective",definition:"Causing or capable of causing death; leading to disaster.",example:"A fatal mistake ended the expedition."},{word:"RIFTS",ipa:"/rɪfts/",syllables:"rifts",pos:"noun (plural)",definition:"Cracks or splits, especially in rock; serious breaks in friendly relations.",example:"Cosmic rifts tore through the fabric of space.",is_final_seal:!0}],$f={},mC=($f==null?void 0:$f.VITE_API_BASE)??"",gC=pC;function xC(){const[s,e]=G.useState([]),[t,i]=G.useState(!0),[a,o]=G.useState(null);return G.useEffect(()=>{let c=!1;return(async()=>{try{const d=await fetch(`${mC}/api/codex/dictionary/`,{signal:AbortSignal.timeout(4e3)});if(!d.ok)throw new Error(`HTTP ${d.status}`);const h=await d.json();c||(e(h.entries),o(null))}catch{c||(e(gC),o("Backend offline — showing limited offline entries."))}finally{c||i(!1)}})(),()=>{c=!0}},[]),{entries:s,loading:t,error:a}}function vC(s){try{const e=window.speechSynthesis;if(!e)return;e.cancel();const t=new SpeechSynthesisUtterance(s.toLowerCase());t.rate=.85,t.pitch=1,t.volume=1,t.lang="en-US",e.speak(t)}catch{}}function _C(){const s=tl(),{entries:e,loading:t,error:i}=xC(),[a,o]=G.useState(""),[c,d]=G.useState("all"),[h,f]=G.useState(null),v=G.useMemo(()=>{const x=a.trim().toUpperCase();return e.filter(g=>!(x&&!g.word.includes(x)&&!g.definition.toUpperCase().includes(x)||c==="noun"&&!g.pos.startsWith("noun")||c==="adjective"&&!g.pos.startsWith("adjective")||c==="seal"&&!g.is_final_seal))},[e,a,c]);return b.jsxs("div",{className:"min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col font-['Press_Start_2P',_monospace] relative",children:[b.jsx("style",{children:`
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
      `}),b.jsx("div",{className:"absolute inset-0 codex-grid opacity-30 pointer-events-none"}),b.jsxs("div",{className:"relative z-10 bg-[#1a0a2e] border-b-4 border-[#8b5cf6] px-4 py-3 flex items-center justify-between",children:[b.jsx("button",{onClick:()=>s("/"),className:"text-[8px] text-[#a78bfa] hover:text-white px-2 py-1 border-2 border-[#8b5cf6] bg-[#0a0118] active:translate-y-0.5",children:"< BACK"}),b.jsx("p",{className:"text-[10px] text-[#8b5cf6] tracking-widest",children:"CODEX"}),b.jsx("div",{className:"w-[60px]"})]}),b.jsxs("div",{className:"relative z-10 px-4 py-3 space-y-2 border-b-2 border-[#8b5cf6]/40 bg-[#0a0118]/95",children:[b.jsx("input",{type:"text",placeholder:"SEARCH...",value:a,onChange:x=>o(x.target.value),className:"w-full bg-[#1a0a2e] border-2 border-[#8b5cf6] text-white text-[9px] px-3 py-2 placeholder-[#a78bfa]/50 focus:border-[#ec4899] focus:outline-none tracking-widest",style:{fontFamily:"'Press Start 2P', monospace"}}),b.jsx("div",{className:"flex gap-1.5",children:["all","noun","adjective","seal"].map(x=>b.jsx("button",{onClick:()=>d(x),className:`flex-1 text-[7px] py-1.5 border-2 tracking-widest transition-colors ${c===x?"bg-[#8b5cf6] border-[#ec4899] text-white":"bg-[#1a0a2e] border-[#8b5cf6]/40 text-[#a78bfa] hover:border-[#8b5cf6]"}`,children:x.toUpperCase()},x))})]}),t&&b.jsx("div",{className:"relative z-10 text-center py-10 text-[8px] text-[#a78bfa] tracking-widest animate-pulse",children:"LOADING CODEX..."}),i&&!t&&b.jsx("div",{className:"relative z-10 mx-4 mt-3 text-[7px] text-[#facc15] border-2 border-[#facc15]/50 bg-[#facc15]/10 px-3 py-2 leading-relaxed",children:i}),b.jsxs("div",{className:"relative z-10 flex-1 overflow-y-auto px-4 py-3 space-y-2 pb-20",children:[!t&&v.length===0&&b.jsx("p",{className:"text-center text-[8px] text-[#a78bfa]/60 py-8 tracking-widest",children:"NO ENTRIES FOUND"}),v.map((x,g)=>{const m=h===x.word;return b.jsxs("div",{className:`bg-[#1a0a2e] border-2 ${x.is_final_seal?"border-[#ec4899]":"border-[#8b5cf6]"} relative`,style:{animation:`fadeInUp 0.25s ${Math.min(g,12)*.03}s ease-out both`,...x.is_final_seal&&{animation:"pulseGlow 2s ease-in-out infinite, fadeInUp 0.25s ease-out both"}},children:[b.jsx("div",{className:"absolute top-0 left-0  w-1.5 h-1.5 bg-[#0a0118]"}),b.jsx("div",{className:"absolute top-0 right-0 w-1.5 h-1.5 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 left-0  w-1.5 h-1.5 bg-[#0a0118]"}),b.jsx("div",{className:"absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#0a0118]"}),b.jsxs("button",{onClick:()=>f(m?null:x.word),className:"w-full text-left px-3 py-2.5 flex items-center justify-between hover:bg-[#2a1a3e]/60 transition-colors",children:[b.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[b.jsx("span",{className:`text-[12px] tracking-widest ${x.is_final_seal?"text-[#ec4899]":"text-[#10b981]"}`,children:x.word}),b.jsx("span",{className:"text-[7px] text-[#a78bfa] truncate",children:x.ipa})]}),b.jsx("span",{className:"text-[#a78bfa] text-[8px] flex-shrink-0",children:m?"▼":"▶"})]}),m&&b.jsxs("div",{className:"px-3 pb-3 pt-1 space-y-2 border-t-2 border-[#8b5cf6]/30",style:{animation:"fadeInUp 0.18s ease-out"},children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsxs("p",{className:"text-[7px] text-[#facc15] tracking-widest",children:[x.pos.toUpperCase(),x.is_final_seal&&b.jsx("span",{className:"ml-2 text-[#ec4899]",children:"★ FINAL SEAL"})]}),b.jsx("button",{onClick:()=>vC(x.word),className:"text-[6px] px-2 py-1 border-2 border-[#60a5fa] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-[#0a0118] tracking-widest",title:"Hear pronunciation",children:"♪ SAY"})]}),b.jsxs("div",{className:"flex gap-2 text-[7px] leading-relaxed",children:[b.jsx("span",{className:"text-[#a78bfa] flex-shrink-0",children:"SYL:"}),b.jsx("span",{className:"text-white/90 tracking-wider",children:x.syllables})]}),b.jsxs("div",{className:"flex gap-2 text-[7px] leading-[14px]",children:[b.jsx("span",{className:"text-[#a78bfa] flex-shrink-0",children:"DEF:"}),b.jsx("span",{className:"text-white/90",children:x.definition})]}),b.jsxs("div",{className:"flex gap-2 text-[7px] leading-[14px] italic",children:[b.jsx("span",{className:"text-[#a78bfa] flex-shrink-0 not-italic",children:"EX:"}),b.jsxs("span",{className:"text-white/70",children:['"',x.example,'"']})]})]})]},x.word)}),!t&&b.jsxs("p",{className:"text-center text-[7px] text-[#a78bfa]/50 pt-3 tracking-widest",children:[v.length," / ",e.length," ENTRIES"]})]})]})}function yC(s){const e=G.useRef(null),t=G.useRef(!1),{settings:i}=cv();G.useEffect(()=>{const a=new Audio;a.src=s,a.loop=!0,a.volume=i.musicVolume,a.preload="auto",e.current=a;const o=()=>{};a.addEventListener("error",o);const c=()=>{t.current||!e.current||e.current.play().then(()=>{t.current=!0}).catch(()=>{})};return i.musicEnabled&&a.play().then(()=>{t.current=!0}).catch(()=>{document.addEventListener("click",c,{once:!0}),document.addEventListener("touchstart",c,{once:!0}),document.addEventListener("keydown",c,{once:!0})}),()=>{a.pause(),a.removeEventListener("error",o),a.src="",document.removeEventListener("click",c),document.removeEventListener("touchstart",c),document.removeEventListener("keydown",c),e.current=null,t.current=!1}},[s]),G.useEffect(()=>{const a=e.current;a&&(a.volume=i.musicVolume,i.musicEnabled?a.paused&&a.play().then(()=>{t.current=!0}).catch(()=>{}):a.pause())},[i.musicEnabled,i.musicVolume])}const SC="/assets/bmusic-DkBO5UAz.mp3";function MC(){return yC(SC),null}function bC(){return b.jsxs(tM,{children:[b.jsx(MC,{}),b.jsxs(NS,{children:[b.jsx(zo,{path:"/",element:b.jsx(yM,{})}),b.jsx(zo,{path:"/mission",element:b.jsx(SM,{})}),b.jsx(zo,{path:"/ar",element:b.jsx(hC,{})}),b.jsx(zo,{path:"/codex",element:b.jsx(_C,{})})]})]})}const Yv=document.getElementById("root");if(!Yv)throw new Error("Root element #root not found");Dy.createRoot(Yv).render(b.jsx(bC,{}));export{Yb as $,RC as A,On as B,Ht as C,sx as D,mi as E,LC as F,PC as G,Lv as H,CC as I,e1 as J,If as K,al as L,NC as M,lc as N,bn as O,FC as P,hs as Q,ah as R,di as S,EC as T,Ho as U,It as V,fi as W,AC as X,yp as Y,Nv as Z,IC as _,TC as a,Qc as a0,kh as a1,iu as a2,Wn as a3,ou as a4,au as a5,pu as a6,Wt as a7,ds as a8,sl as a9,Ur as aa,Fr as ab,wC as b,OC as c,eu as d,UC as e,Ot as f,Z as g,G0 as h,DC as i,kC as j,Gb as k,Us as l,rf as m,qM as n,Zn as o,Gn as p,oh as q,Tr as r,$c as s,ps as t,Iv as u,Gh as v,ir as w,pp as x,an as y,kn as z};
