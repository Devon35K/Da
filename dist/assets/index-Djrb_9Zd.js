(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();var Nf={exports:{}},oo={},If={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg;function Y_(){if(gg)return yt;gg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function y(O,ne,ke){this.props=O,this.context=ne,this.refs=b,this.updater=ke||_}y.prototype.isReactComponent={},y.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(O,ne,ke){this.props=O,this.context=ne,this.refs=b,this.updater=ke||_}var T=R.prototype=new S;T.constructor=R,M(T,y.prototype),T.isPureReactComponent=!0;var P=Array.isArray,F=Object.prototype.hasOwnProperty,N={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function w(O,ne,ke){var Xe,Be={},pe=null,Ae=null;if(ne!=null)for(Xe in ne.ref!==void 0&&(Ae=ne.ref),ne.key!==void 0&&(pe=""+ne.key),ne)F.call(ne,Xe)&&!B.hasOwnProperty(Xe)&&(Be[Xe]=ne[Xe]);var _e=arguments.length-2;if(_e===1)Be.children=ke;else if(1<_e){for(var ze=Array(_e),Qe=0;Qe<_e;Qe++)ze[Qe]=arguments[Qe+2];Be.children=ze}if(O&&O.defaultProps)for(Xe in _e=O.defaultProps,_e)Be[Xe]===void 0&&(Be[Xe]=_e[Xe]);return{$$typeof:r,type:O,key:pe,ref:Ae,props:Be,_owner:N.current}}function I(O,ne){return{$$typeof:r,type:O.type,key:ne,ref:O.ref,props:O.props,_owner:O._owner}}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function z(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ke){return ne[ke]})}var q=/\/+/g;function he(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):ne.toString(36)}function le(O,ne,ke,Xe,Be){var pe=typeof O;(pe==="undefined"||pe==="boolean")&&(O=null);var Ae=!1;if(O===null)Ae=!0;else switch(pe){case"string":case"number":Ae=!0;break;case"object":switch(O.$$typeof){case r:case e:Ae=!0}}if(Ae)return Ae=O,Be=Be(Ae),O=Xe===""?"."+he(Ae,0):Xe,P(Be)?(ke="",O!=null&&(ke=O.replace(q,"$&/")+"/"),le(Be,ne,ke,"",function(Qe){return Qe})):Be!=null&&(V(Be)&&(Be=I(Be,ke+(!Be.key||Ae&&Ae.key===Be.key?"":(""+Be.key).replace(q,"$&/")+"/")+O)),ne.push(Be)),1;if(Ae=0,Xe=Xe===""?".":Xe+":",P(O))for(var _e=0;_e<O.length;_e++){pe=O[_e];var ze=Xe+he(pe,_e);Ae+=le(pe,ne,ke,ze,Be)}else if(ze=m(O),typeof ze=="function")for(O=ze.call(O),_e=0;!(pe=O.next()).done;)pe=pe.value,ze=Xe+he(pe,_e++),Ae+=le(pe,ne,ke,ze,Be);else if(pe==="object")throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Ae}function W(O,ne,ke){if(O==null)return O;var Xe=[],Be=0;return le(O,Xe,"","",function(pe){return ne.call(ke,pe,Be++)}),Xe}function ee(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(ke){(O._status===0||O._status===-1)&&(O._status=1,O._result=ke)},function(ke){(O._status===0||O._status===-1)&&(O._status=2,O._result=ke)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var J={current:null},Z={transition:null},ue={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:Z,ReactCurrentOwner:N};function fe(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:W,forEach:function(O,ne,ke){W(O,function(){ne.apply(this,arguments)},ke)},count:function(O){var ne=0;return W(O,function(){ne++}),ne},toArray:function(O){return W(O,function(ne){return ne})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},yt.Component=y,yt.Fragment=t,yt.Profiler=a,yt.PureComponent=R,yt.StrictMode=i,yt.Suspense=d,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,yt.act=fe,yt.cloneElement=function(O,ne,ke){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Xe=M({},O.props),Be=O.key,pe=O.ref,Ae=O._owner;if(ne!=null){if(ne.ref!==void 0&&(pe=ne.ref,Ae=N.current),ne.key!==void 0&&(Be=""+ne.key),O.type&&O.type.defaultProps)var _e=O.type.defaultProps;for(ze in ne)F.call(ne,ze)&&!B.hasOwnProperty(ze)&&(Xe[ze]=ne[ze]===void 0&&_e!==void 0?_e[ze]:ne[ze])}var ze=arguments.length-2;if(ze===1)Xe.children=ke;else if(1<ze){_e=Array(ze);for(var Qe=0;Qe<ze;Qe++)_e[Qe]=arguments[Qe+2];Xe.children=_e}return{$$typeof:r,type:O.type,key:Be,ref:pe,props:Xe,_owner:Ae}},yt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},yt.createElement=w,yt.createFactory=function(O){var ne=w.bind(null,O);return ne.type=O,ne},yt.createRef=function(){return{current:null}},yt.forwardRef=function(O){return{$$typeof:f,render:O}},yt.isValidElement=V,yt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:ee}},yt.memo=function(O,ne){return{$$typeof:h,type:O,compare:ne===void 0?null:ne}},yt.startTransition=function(O){var ne=Z.transition;Z.transition={};try{O()}finally{Z.transition=ne}},yt.unstable_act=fe,yt.useCallback=function(O,ne){return J.current.useCallback(O,ne)},yt.useContext=function(O){return J.current.useContext(O)},yt.useDebugValue=function(){},yt.useDeferredValue=function(O){return J.current.useDeferredValue(O)},yt.useEffect=function(O,ne){return J.current.useEffect(O,ne)},yt.useId=function(){return J.current.useId()},yt.useImperativeHandle=function(O,ne,ke){return J.current.useImperativeHandle(O,ne,ke)},yt.useInsertionEffect=function(O,ne){return J.current.useInsertionEffect(O,ne)},yt.useLayoutEffect=function(O,ne){return J.current.useLayoutEffect(O,ne)},yt.useMemo=function(O,ne){return J.current.useMemo(O,ne)},yt.useReducer=function(O,ne,ke){return J.current.useReducer(O,ne,ke)},yt.useRef=function(O){return J.current.useRef(O)},yt.useState=function(O){return J.current.useState(O)},yt.useSyncExternalStore=function(O,ne,ke){return J.current.useSyncExternalStore(O,ne,ke)},yt.useTransition=function(){return J.current.useTransition()},yt.version="18.3.1",yt}var vg;function Sh(){return vg||(vg=1,If.exports=Y_()),If.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function q_(){if(xg)return oo;xg=1;var r=Sh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var g,v={},m=null,_=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(_=d.ref);for(g in d)i.call(d,g)&&!o.hasOwnProperty(g)&&(v[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)v[g]===void 0&&(v[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:_,props:v,_owner:a.current}}return oo.Fragment=t,oo.jsx=u,oo.jsxs=u,oo}var _g;function K_(){return _g||(_g=1,Nf.exports=q_()),Nf.exports}var H=K_(),Gl={},Df={exports:{}},Gn={},Uf={exports:{}},Ff={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function Z_(){return yg||(yg=1,(function(r){function e(Z,ue){var fe=Z.length;Z.push(ue);e:for(;0<fe;){var O=fe-1>>>1,ne=Z[O];if(0<a(ne,ue))Z[O]=ue,Z[fe]=ne,fe=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function i(Z){if(Z.length===0)return null;var ue=Z[0],fe=Z.pop();if(fe!==ue){Z[0]=fe;e:for(var O=0,ne=Z.length,ke=ne>>>1;O<ke;){var Xe=2*(O+1)-1,Be=Z[Xe],pe=Xe+1,Ae=Z[pe];if(0>a(Be,fe))pe<ne&&0>a(Ae,Be)?(Z[O]=Ae,Z[pe]=fe,O=pe):(Z[O]=Be,Z[Xe]=fe,O=Xe);else if(pe<ne&&0>a(Ae,fe))Z[O]=Ae,Z[pe]=fe,O=pe;else break e}}return ue}function a(Z,ue){var fe=Z.sortIndex-ue.sortIndex;return fe!==0?fe:Z.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;r.unstable_now=function(){return o.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var d=[],h=[],g=1,v=null,m=3,_=!1,M=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(Z){for(var ue=t(h);ue!==null;){if(ue.callback===null)i(h);else if(ue.startTime<=Z)i(h),ue.sortIndex=ue.expirationTime,e(d,ue);else break;ue=t(h)}}function P(Z){if(b=!1,T(Z),!M)if(t(d)!==null)M=!0,ee(F);else{var ue=t(h);ue!==null&&J(P,ue.startTime-Z)}}function F(Z,ue){M=!1,b&&(b=!1,S(w),w=-1),_=!0;var fe=m;try{for(T(ue),v=t(d);v!==null&&(!(v.expirationTime>ue)||Z&&!z());){var O=v.callback;if(typeof O=="function"){v.callback=null,m=v.priorityLevel;var ne=O(v.expirationTime<=ue);ue=r.unstable_now(),typeof ne=="function"?v.callback=ne:v===t(d)&&i(d),T(ue)}else i(d);v=t(d)}if(v!==null)var ke=!0;else{var Xe=t(h);Xe!==null&&J(P,Xe.startTime-ue),ke=!1}return ke}finally{v=null,m=fe,_=!1}}var N=!1,B=null,w=-1,I=5,V=-1;function z(){return!(r.unstable_now()-V<I)}function q(){if(B!==null){var Z=r.unstable_now();V=Z;var ue=!0;try{ue=B(!0,Z)}finally{ue?he():(N=!1,B=null)}}else N=!1}var he;if(typeof R=="function")he=function(){R(q)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,W=le.port2;le.port1.onmessage=q,he=function(){W.postMessage(null)}}else he=function(){y(q,0)};function ee(Z){B=Z,N||(N=!0,he())}function J(Z,ue){w=y(function(){Z(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){M||_||(M=!0,ee(F))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return m},r.unstable_getFirstCallbackNode=function(){return t(d)},r.unstable_next=function(Z){switch(m){case 1:case 2:case 3:var ue=3;break;default:ue=m}var fe=m;m=ue;try{return Z()}finally{m=fe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,ue){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var fe=m;m=Z;try{return ue()}finally{m=fe}},r.unstable_scheduleCallback=function(Z,ue,fe){var O=r.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?O+fe:O):fe=O,Z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=fe+ne,Z={id:g++,callback:ue,priorityLevel:Z,startTime:fe,expirationTime:ne,sortIndex:-1},fe>O?(Z.sortIndex=fe,e(h,Z),t(d)===null&&Z===t(h)&&(b?(S(w),w=-1):b=!0,J(P,fe-O))):(Z.sortIndex=ne,e(d,Z),M||_||(M=!0,ee(F))),Z},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(Z){var ue=m;return function(){var fe=m;m=ue;try{return Z.apply(this,arguments)}finally{m=fe}}}})(Ff)),Ff}var Sg;function J_(){return Sg||(Sg=1,Uf.exports=Z_()),Uf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function Q_(){if(Mg)return Gn;Mg=1;var r=Sh(),e=J_();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function o(n,s){u(n,s),u(n+"Capture",s)}function u(n,s){for(a[n]=s,n=0;n<s.length;n++)i.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function m(n){return d.call(v,n)?!0:d.call(g,n)?!1:h.test(n)?v[n]=!0:(g[n]=!0,!1)}function _(n,s,l,c){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,s,l,c){if(s===null||typeof s>"u"||_(n,s,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function b(n,s,l,c,p,x,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=s,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];y[s]=new b(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(S,R);y[s]=new b(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(S,R);y[s]=new b(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(S,R);y[s]=new b(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function T(n,s,l,c){var p=y.hasOwnProperty(s)?y[s]:null;(p!==null?p.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,p,c)&&(l=null),c||p===null?m(s)&&(l===null?n.removeAttribute(s):n.setAttribute(s,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,c=p.attributeNamespace,l===null?n.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?n.setAttributeNS(c,s,l):n.setAttribute(s,l))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),N=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),z=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),he=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var fe=Object.assign,O;function ne(n){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+n}var ke=!1;function Xe(n,s){if(!n||ke)return"";ke=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(de){var c=de}Reflect.construct(n,[],s)}else{try{s.call()}catch(de){c=de}n.call(s.prototype)}else{try{throw Error()}catch(de){c=de}n()}}catch(de){if(de&&c&&typeof de.stack=="string"){for(var p=de.stack.split(`
`),x=c.stack.split(`
`),A=p.length-1,U=x.length-1;1<=A&&0<=U&&p[A]!==x[U];)U--;for(;1<=A&&0<=U;A--,U--)if(p[A]!==x[U]){if(A!==1||U!==1)do if(A--,U--,0>U||p[A]!==x[U]){var G=`
`+p[A].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=A&&0<=U);break}}}finally{ke=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function Be(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case N:return"Portal";case I:return"Profiler";case w:return"StrictMode";case he:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case q:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return s=n.displayName||null,s!==null?s:pe(n.type)||"Memo";case ee:s=n._payload,n=n._init;try{return pe(n(s))}catch{}}return null}function Ae(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(s);case 8:return s===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Qe(n){var s=ze(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),c=""+n[s];if(!n.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,x=l.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){c=""+A,x.call(this,A)}}),Object.defineProperty(n,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function st(n){n._valueTracker||(n._valueTracker=Qe(n))}function It(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return n&&(c=ze(n)?n.checked?"true":"false":n.value),n=c,n!==l?(s.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function bt(n,s){var l=s.checked;return fe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Lt(n,s){var l=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;l=_e(s.value!=null?s.value:l),n._wrapperState={initialChecked:c,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function mt(n,s){s=s.checked,s!=null&&T(n,"checked",s,!1)}function Ot(n,s){mt(n,s);var l=_e(s.value),c=s.type;if(l!=null)c==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?un(n,s.type,l):s.hasOwnProperty("defaultValue")&&un(n,s.type,_e(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function kt(n,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,l||s===n.value||(n.value=s),n.defaultValue=s}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function un(n,s,l){(s!=="number"||pt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var j=Array.isArray;function Bt(n,s,l,c){if(n=n.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=s.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&c&&(n[l].defaultSelected=!0)}else{for(l=""+_e(l),s=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}s!==null||n[p].disabled||(s=n[p])}s!==null&&(s.selected=!0)}}function Ee(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return fe({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Te(n,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(j(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}n._wrapperState={initialValue:_e(l)}}function ge(n,s){var l=_e(s.value),c=_e(s.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),s.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),c!=null&&(n.defaultValue=""+c)}function Ie(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function L(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?L(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var D,ie=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,c,p){MSApp.execUnsafeLocalFunction(function(){return n(s,l,c,p)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(D=D||document.createElement("div"),D.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=D.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function oe(n,s){if(s){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=s;return}}n.textContent=s}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Se=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(n){Se.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),ye[s]=ye[n]})});function K(n,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||ye.hasOwnProperty(n)&&ye[n]?(""+s).trim():s+"px"}function me(n,s){n=n.style;for(var l in s)if(s.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=K(l,s[l],c);l==="float"&&(l="cssFloat"),c?n.setProperty(l,p):n[l]=p}}var Le=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fe(n,s){if(s){if(Le[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function xe(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Me=null;function lt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ke=null,it=null,k=null;function Re(n){if(n=Xa(n)){if(typeof Ke!="function")throw Error(t(280));var s=n.stateNode;s&&(s=rl(s),Ke(n.stateNode,n.type,s))}}function ve(n){it?k?k.push(n):k=[n]:it=n}function Ve(){if(it){var n=it,s=k;if(k=it=null,Re(n),s)for(n=0;n<s.length;n++)Re(s[n])}}function De(n,s){return n(s)}function we(){}var Ge=!1;function ct(n,s,l){if(Ge)return n(s,l);Ge=!0;try{return De(n,s,l)}finally{Ge=!1,(it!==null||k!==null)&&(we(),Ve())}}function Vt(n,s){var l=n.stateNode;if(l===null)return null;var c=rl(l);if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ct=!1;if(f)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Ct=!1}function ni(n,s,l,c,p,x,A,U,G){var de=Array.prototype.slice.call(arguments,3);try{s.apply(l,de)}catch(Ce){this.onError(Ce)}}var Wi=!1,ws=null,Xr=!1,Ts=null,ji={onError:function(n){Wi=!0,ws=n}};function Ta(n,s,l,c,p,x,A,U,G){Wi=!1,ws=null,ni.apply(ji,arguments)}function Vo(n,s,l,c,p,x,A,U,G){if(Ta.apply(this,arguments),Wi){if(Wi){var de=ws;Wi=!1,ws=null}else throw Error(t(198));Xr||(Xr=!0,Ts=de)}}function Ai(n){var s=n,l=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(l=s.return),n=s.return;while(n)}return s.tag===3?l:null}function $r(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function ba(n){if(Ai(n)!==n)throw Error(t(188))}function bs(n){var s=n.alternate;if(!s){if(s=Ai(n),s===null)throw Error(t(188));return s!==n?null:n}for(var l=n,c=s;;){var p=l.return;if(p===null)break;var x=p.alternate;if(x===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===l)return ba(p),n;if(x===c)return ba(p),s;x=x.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=x;else{for(var A=!1,U=p.child;U;){if(U===l){A=!0,l=p,c=x;break}if(U===c){A=!0,c=p,l=x;break}U=U.sibling}if(!A){for(U=x.child;U;){if(U===l){A=!0,l=x,c=p;break}if(U===c){A=!0,c=x,l=p;break}U=U.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:s}function Aa(n){return n=bs(n),n!==null?Ra(n):null}function Ra(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Ra(n);if(s!==null)return s;n=n.sibling}return null}var Ho=e.unstable_scheduleCallback,Go=e.unstable_cancelCallback,ec=e.unstable_shouldYield,tc=e.unstable_requestPaint,Zt=e.unstable_now,nc=e.unstable_getCurrentPriorityLevel,Ca=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,$=e.unstable_NormalPriority,ce=e.unstable_LowPriority,se=e.unstable_IdlePriority,re=null,Oe=null;function $e(n){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(re,n,void 0,(n.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:dt,Ze=Math.log,nt=Math.LN2;function dt(n){return n>>>=0,n===0?32:31-(Ze(n)/nt|0)|0}var ht=64,et=4194304;function At(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gt(n,s){var l=n.pendingLanes;if(l===0)return 0;var c=0,p=n.suspendedLanes,x=n.pingedLanes,A=l&268435455;if(A!==0){var U=A&~p;U!==0?c=At(U):(x&=A,x!==0&&(c=At(x)))}else A=l&~p,A!==0?c=At(A):x!==0&&(c=At(x));if(c===0)return 0;if(s!==0&&s!==c&&(s&p)===0&&(p=c&-c,x=s&-s,p>=x||p===16&&(x&4194240)!==0))return s;if((c&4)!==0&&(c|=l&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=c;0<s;)l=31-Ue(s),p=1<<l,c|=n[l],s&=~p;return c}function Yt(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(n,s){for(var l=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var A=31-Ue(x),U=1<<A,G=p[A];G===-1?((U&l)===0||(U&c)!==0)&&(p[A]=Yt(U,s)):G<=s&&(n.expiredLanes|=U),x&=~U}}function an(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function We(){var n=ht;return ht<<=1,(ht&4194240)===0&&(ht=64),n}function xn(n){for(var s=[],l=0;31>l;l++)s.push(n);return s}function xt(n,s,l){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Ue(s),n[s]=l}function Fn(n,s){var l=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Ue(l),x=1<<p;s[p]=0,c[p]=-1,n[p]=-1,l&=~x}}function On(n,s){var l=n.entangledLanes|=s;for(n=n.entanglements;l;){var c=31-Ue(l),p=1<<c;p&s|n[c]&s&&(n[c]|=s),l&=~p}}var _t=0;function Xi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Nt,jt,hi,Ut,pi,Ri=!1,Yr=[],vr=null,xr=null,_r=null,Pa=new Map,La=new Map,yr=[],gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qh(n,s){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":Pa.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":La.delete(s.pointerId)}}function Na(n,s,l,c,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:x,targetContainers:[p]},s!==null&&(s=Xa(s),s!==null&&jt(s)),n):(n.eventSystemFlags|=c,s=n.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),n)}function vx(n,s,l,c,p){switch(s){case"focusin":return vr=Na(vr,n,s,l,c,p),!0;case"dragenter":return xr=Na(xr,n,s,l,c,p),!0;case"mouseover":return _r=Na(_r,n,s,l,c,p),!0;case"pointerover":var x=p.pointerId;return Pa.set(x,Na(Pa.get(x)||null,n,s,l,c,p)),!0;case"gotpointercapture":return x=p.pointerId,La.set(x,Na(La.get(x)||null,n,s,l,c,p)),!0}return!1}function ep(n){var s=qr(n.target);if(s!==null){var l=Ai(s);if(l!==null){if(s=l.tag,s===13){if(s=$r(l),s!==null){n.blockedOn=s,pi(n.priority,function(){hi(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wo(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var l=rc(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var c=new l.constructor(l.type,l);Me=c,l.target.dispatchEvent(c),Me=null}else return s=Xa(l),s!==null&&jt(s),n.blockedOn=l,!1;s.shift()}return!0}function tp(n,s,l){Wo(n)&&l.delete(s)}function xx(){Ri=!1,vr!==null&&Wo(vr)&&(vr=null),xr!==null&&Wo(xr)&&(xr=null),_r!==null&&Wo(_r)&&(_r=null),Pa.forEach(tp),La.forEach(tp)}function Ia(n,s){n.blockedOn===s&&(n.blockedOn=null,Ri||(Ri=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,xx)))}function Da(n){function s(p){return Ia(p,n)}if(0<Yr.length){Ia(Yr[0],n);for(var l=1;l<Yr.length;l++){var c=Yr[l];c.blockedOn===n&&(c.blockedOn=null)}}for(vr!==null&&Ia(vr,n),xr!==null&&Ia(xr,n),_r!==null&&Ia(_r,n),Pa.forEach(s),La.forEach(s),l=0;l<yr.length;l++)c=yr[l],c.blockedOn===n&&(c.blockedOn=null);for(;0<yr.length&&(l=yr[0],l.blockedOn===null);)ep(l),l.blockedOn===null&&yr.shift()}var As=P.ReactCurrentBatchConfig,jo=!0;function _x(n,s,l,c){var p=_t,x=As.transition;As.transition=null;try{_t=1,ic(n,s,l,c)}finally{_t=p,As.transition=x}}function yx(n,s,l,c){var p=_t,x=As.transition;As.transition=null;try{_t=4,ic(n,s,l,c)}finally{_t=p,As.transition=x}}function ic(n,s,l,c){if(jo){var p=rc(n,s,l,c);if(p===null)Sc(n,s,c,Xo,l),Qh(n,c);else if(vx(p,n,s,l,c))c.stopPropagation();else if(Qh(n,c),s&4&&-1<gx.indexOf(n)){for(;p!==null;){var x=Xa(p);if(x!==null&&Nt(x),x=rc(n,s,l,c),x===null&&Sc(n,s,c,Xo,l),x===p)break;p=x}p!==null&&c.stopPropagation()}else Sc(n,s,c,null,l)}}var Xo=null;function rc(n,s,l,c){if(Xo=null,n=lt(c),n=qr(n),n!==null)if(s=Ai(n),s===null)n=null;else if(l=s.tag,l===13){if(n=$r(s),n!==null)return n;n=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Xo=n,null}function np(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nc()){case Ca:return 1;case C:return 4;case $:case ce:return 16;case se:return 536870912;default:return 16}default:return 16}}var Sr=null,sc=null,$o=null;function ip(){if($o)return $o;var n,s=sc,l=s.length,c,p="value"in Sr?Sr.value:Sr.textContent,x=p.length;for(n=0;n<l&&s[n]===p[n];n++);var A=l-n;for(c=1;c<=A&&s[l-c]===p[x-c];c++);return $o=p.slice(n,1<c?1-c:void 0)}function Yo(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function qo(){return!0}function rp(){return!1}function Yn(n){function s(l,c,p,x,A){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(l=n[U],this[U]=l?l(x):x[U]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?qo:rp,this.isPropagationStopped=rp,this}return fe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),s}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=Yn(Rs),Ua=fe({},Rs,{view:0,detail:0}),Sx=Yn(Ua),oc,lc,Fa,Ko=fe({},Ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Fa&&(Fa&&n.type==="mousemove"?(oc=n.screenX-Fa.screenX,lc=n.screenY-Fa.screenY):lc=oc=0,Fa=n),oc)},movementY:function(n){return"movementY"in n?n.movementY:lc}}),sp=Yn(Ko),Mx=fe({},Ko,{dataTransfer:0}),Ex=Yn(Mx),wx=fe({},Ua,{relatedTarget:0}),uc=Yn(wx),Tx=fe({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),bx=Yn(Tx),Ax=fe({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Rx=Yn(Ax),Cx=fe({},Rs,{data:0}),ap=Yn(Cx),Px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Nx[n])?!!s[n]:!1}function cc(){return Ix}var Dx=fe({},Ua,{key:function(n){if(n.key){var s=Px[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Yo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Lx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(n){return n.type==="keypress"?Yo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Yo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ux=Yn(Dx),Fx=fe({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Yn(Fx),Ox=fe({},Ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),kx=Yn(Ox),Bx=fe({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),zx=Yn(Bx),Vx=fe({},Ko,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Hx=Yn(Vx),Gx=[9,13,27,32],fc=f&&"CompositionEvent"in window,Oa=null;f&&"documentMode"in document&&(Oa=document.documentMode);var Wx=f&&"TextEvent"in window&&!Oa,lp=f&&(!fc||Oa&&8<Oa&&11>=Oa),up=" ",cp=!1;function fp(n,s){switch(n){case"keyup":return Gx.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cs=!1;function jx(n,s){switch(n){case"compositionend":return dp(s);case"keypress":return s.which!==32?null:(cp=!0,up);case"textInput":return n=s.data,n===up&&cp?null:n;default:return null}}function Xx(n,s){if(Cs)return n==="compositionend"||!fc&&fp(n,s)?(n=ip(),$o=sc=Sr=null,Cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return lp&&s.locale!=="ko"?null:s.data;default:return null}}var $x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!$x[n.type]:s==="textarea"}function pp(n,s,l,c){ve(c),s=tl(s,"onChange"),0<s.length&&(l=new ac("onChange","change",null,l,c),n.push({event:l,listeners:s}))}var ka=null,Ba=null;function Yx(n){Np(n,0)}function Zo(n){var s=Ds(n);if(It(s))return n}function qx(n,s){if(n==="change")return s}var mp=!1;if(f){var dc;if(f){var hc="oninput"in document;if(!hc){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),hc=typeof gp.oninput=="function"}dc=hc}else dc=!1;mp=dc&&(!document.documentMode||9<document.documentMode)}function vp(){ka&&(ka.detachEvent("onpropertychange",xp),Ba=ka=null)}function xp(n){if(n.propertyName==="value"&&Zo(Ba)){var s=[];pp(s,Ba,n,lt(n)),ct(Yx,s)}}function Kx(n,s,l){n==="focusin"?(vp(),ka=s,Ba=l,ka.attachEvent("onpropertychange",xp)):n==="focusout"&&vp()}function Zx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Zo(Ba)}function Jx(n,s){if(n==="click")return Zo(s)}function Qx(n,s){if(n==="input"||n==="change")return Zo(s)}function e_(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var mi=typeof Object.is=="function"?Object.is:e_;function za(n,s){if(mi(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var l=Object.keys(n),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!d.call(s,p)||!mi(n[p],s[p]))return!1}return!0}function _p(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yp(n,s){var l=_p(n);n=0;for(var c;l;){if(l.nodeType===3){if(c=n+l.textContent.length,n<=s&&c>=s)return{node:l,offset:s-n};n=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=_p(l)}}function Sp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Sp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Mp(){for(var n=window,s=pt();s instanceof n.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)n=s.contentWindow;else break;s=pt(n.document)}return s}function pc(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function t_(n){var s=Mp(),l=n.focusedElem,c=n.selectionRange;if(s!==l&&l&&l.ownerDocument&&Sp(l.ownerDocument.documentElement,l)){if(c!==null&&pc(l)){if(s=c.start,n=c.end,n===void 0&&(n=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(n,l.value.length);else if(n=(s=l.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,x=Math.min(c.start,p);c=c.end===void 0?x:Math.min(c.end,p),!n.extend&&x>c&&(p=c,c=x,x=p),p=yp(l,x);var A=yp(l,c);p&&A&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),n.removeAllRanges(),x>c?(n.addRange(s),n.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),n.addRange(s)))}}for(s=[],n=l;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)n=s[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var n_=f&&"documentMode"in document&&11>=document.documentMode,Ps=null,mc=null,Va=null,gc=!1;function Ep(n,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;gc||Ps==null||Ps!==pt(c)||(c=Ps,"selectionStart"in c&&pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Va&&za(Va,c)||(Va=c,c=tl(mc,"onSelect"),0<c.length&&(s=new ac("onSelect","select",null,s,l),n.push({event:s,listeners:c}),s.target=Ps)))}function Jo(n,s){var l={};return l[n.toLowerCase()]=s.toLowerCase(),l["Webkit"+n]="webkit"+s,l["Moz"+n]="moz"+s,l}var Ls={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},vc={},wp={};f&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Qo(n){if(vc[n])return vc[n];if(!Ls[n])return n;var s=Ls[n],l;for(l in s)if(s.hasOwnProperty(l)&&l in wp)return vc[n]=s[l];return n}var Tp=Qo("animationend"),bp=Qo("animationiteration"),Ap=Qo("animationstart"),Rp=Qo("transitionend"),Cp=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(n,s){Cp.set(n,s),o(s,[n])}for(var xc=0;xc<Pp.length;xc++){var _c=Pp[xc],i_=_c.toLowerCase(),r_=_c[0].toUpperCase()+_c.slice(1);Mr(i_,"on"+r_)}Mr(Tp,"onAnimationEnd"),Mr(bp,"onAnimationIteration"),Mr(Ap,"onAnimationStart"),Mr("dblclick","onDoubleClick"),Mr("focusin","onFocus"),Mr("focusout","onBlur"),Mr(Rp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ha));function Lp(n,s,l){var c=n.type||"unknown-event";n.currentTarget=l,Vo(c,s,void 0,n),n.currentTarget=null}function Np(n,s){s=(s&4)!==0;for(var l=0;l<n.length;l++){var c=n[l],p=c.event;c=c.listeners;e:{var x=void 0;if(s)for(var A=c.length-1;0<=A;A--){var U=c[A],G=U.instance,de=U.currentTarget;if(U=U.listener,G!==x&&p.isPropagationStopped())break e;Lp(p,U,de),x=G}else for(A=0;A<c.length;A++){if(U=c[A],G=U.instance,de=U.currentTarget,U=U.listener,G!==x&&p.isPropagationStopped())break e;Lp(p,U,de),x=G}}}if(Xr)throw n=Ts,Xr=!1,Ts=null,n}function Xt(n,s){var l=s[Ac];l===void 0&&(l=s[Ac]=new Set);var c=n+"__bubble";l.has(c)||(Ip(s,n,2,!1),l.add(c))}function yc(n,s,l){var c=0;s&&(c|=4),Ip(l,n,c,s)}var el="_reactListening"+Math.random().toString(36).slice(2);function Ga(n){if(!n[el]){n[el]=!0,i.forEach(function(l){l!=="selectionchange"&&(s_.has(l)||yc(l,!1,n),yc(l,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[el]||(s[el]=!0,yc("selectionchange",!1,s))}}function Ip(n,s,l,c){switch(np(s)){case 1:var p=_x;break;case 4:p=yx;break;default:p=ic}l=p.bind(null,s,l,n),p=void 0,!Ct||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(s,l,{capture:!0,passive:p}):n.addEventListener(s,l,!0):p!==void 0?n.addEventListener(s,l,{passive:p}):n.addEventListener(s,l,!1)}function Sc(n,s,l,c,p){var x=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var U=c.stateNode.containerInfo;if(U===p||U.nodeType===8&&U.parentNode===p)break;if(A===4)for(A=c.return;A!==null;){var G=A.tag;if((G===3||G===4)&&(G=A.stateNode.containerInfo,G===p||G.nodeType===8&&G.parentNode===p))return;A=A.return}for(;U!==null;){if(A=qr(U),A===null)return;if(G=A.tag,G===5||G===6){c=x=A;continue e}U=U.parentNode}}c=c.return}ct(function(){var de=x,Ce=lt(l),Pe=[];e:{var be=Cp.get(n);if(be!==void 0){var je=ac,qe=n;switch(n){case"keypress":if(Yo(l)===0)break e;case"keydown":case"keyup":je=Ux;break;case"focusin":qe="focus",je=uc;break;case"focusout":qe="blur",je=uc;break;case"beforeblur":case"afterblur":je=uc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=kx;break;case Tp:case bp:case Ap:je=bx;break;case Rp:je=zx;break;case"scroll":je=Sx;break;case"wheel":je=Hx;break;case"copy":case"cut":case"paste":je=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=op}var Je=(s&4)!==0,rn=!Je&&n==="scroll",te=Je?be!==null?be+"Capture":null:be;Je=[];for(var X=de,ae;X!==null;){ae=X;var Ne=ae.stateNode;if(ae.tag===5&&Ne!==null&&(ae=Ne,te!==null&&(Ne=Vt(X,te),Ne!=null&&Je.push(Wa(X,Ne,ae)))),rn)break;X=X.return}0<Je.length&&(be=new je(be,qe,null,l,Ce),Pe.push({event:be,listeners:Je}))}}if((s&7)===0){e:{if(be=n==="mouseover"||n==="pointerover",je=n==="mouseout"||n==="pointerout",be&&l!==Me&&(qe=l.relatedTarget||l.fromElement)&&(qr(qe)||qe[$i]))break e;if((je||be)&&(be=Ce.window===Ce?Ce:(be=Ce.ownerDocument)?be.defaultView||be.parentWindow:window,je?(qe=l.relatedTarget||l.toElement,je=de,qe=qe?qr(qe):null,qe!==null&&(rn=Ai(qe),qe!==rn||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(je=null,qe=de),je!==qe)){if(Je=sp,Ne="onMouseLeave",te="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Je=op,Ne="onPointerLeave",te="onPointerEnter",X="pointer"),rn=je==null?be:Ds(je),ae=qe==null?be:Ds(qe),be=new Je(Ne,X+"leave",je,l,Ce),be.target=rn,be.relatedTarget=ae,Ne=null,qr(Ce)===de&&(Je=new Je(te,X+"enter",qe,l,Ce),Je.target=ae,Je.relatedTarget=rn,Ne=Je),rn=Ne,je&&qe)t:{for(Je=je,te=qe,X=0,ae=Je;ae;ae=Ns(ae))X++;for(ae=0,Ne=te;Ne;Ne=Ns(Ne))ae++;for(;0<X-ae;)Je=Ns(Je),X--;for(;0<ae-X;)te=Ns(te),ae--;for(;X--;){if(Je===te||te!==null&&Je===te.alternate)break t;Je=Ns(Je),te=Ns(te)}Je=null}else Je=null;je!==null&&Dp(Pe,be,je,Je,!1),qe!==null&&rn!==null&&Dp(Pe,rn,qe,Je,!0)}}e:{if(be=de?Ds(de):window,je=be.nodeName&&be.nodeName.toLowerCase(),je==="select"||je==="input"&&be.type==="file")var tt=qx;else if(hp(be))if(mp)tt=Qx;else{tt=Zx;var at=Kx}else(je=be.nodeName)&&je.toLowerCase()==="input"&&(be.type==="checkbox"||be.type==="radio")&&(tt=Jx);if(tt&&(tt=tt(n,de))){pp(Pe,tt,l,Ce);break e}at&&at(n,be,de),n==="focusout"&&(at=be._wrapperState)&&at.controlled&&be.type==="number"&&un(be,"number",be.value)}switch(at=de?Ds(de):window,n){case"focusin":(hp(at)||at.contentEditable==="true")&&(Ps=at,mc=de,Va=null);break;case"focusout":Va=mc=Ps=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Ep(Pe,l,Ce);break;case"selectionchange":if(n_)break;case"keydown":case"keyup":Ep(Pe,l,Ce)}var ot;if(fc)e:{switch(n){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else Cs?fp(n,l)&&(ft="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ft="onCompositionStart");ft&&(lp&&l.locale!=="ko"&&(Cs||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Cs&&(ot=ip()):(Sr=Ce,sc="value"in Sr?Sr.value:Sr.textContent,Cs=!0)),at=tl(de,ft),0<at.length&&(ft=new ap(ft,n,null,l,Ce),Pe.push({event:ft,listeners:at}),ot?ft.data=ot:(ot=dp(l),ot!==null&&(ft.data=ot)))),(ot=Wx?jx(n,l):Xx(n,l))&&(de=tl(de,"onBeforeInput"),0<de.length&&(Ce=new ap("onBeforeInput","beforeinput",null,l,Ce),Pe.push({event:Ce,listeners:de}),Ce.data=ot))}Np(Pe,s)})}function Wa(n,s,l){return{instance:n,listener:s,currentTarget:l}}function tl(n,s){for(var l=s+"Capture",c=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=Vt(n,l),x!=null&&c.unshift(Wa(n,x,p)),x=Vt(n,s),x!=null&&c.push(Wa(n,x,p))),n=n.return}return c}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Dp(n,s,l,c,p){for(var x=s._reactName,A=[];l!==null&&l!==c;){var U=l,G=U.alternate,de=U.stateNode;if(G!==null&&G===c)break;U.tag===5&&de!==null&&(U=de,p?(G=Vt(l,x),G!=null&&A.unshift(Wa(l,G,U))):p||(G=Vt(l,x),G!=null&&A.push(Wa(l,G,U)))),l=l.return}A.length!==0&&n.push({event:s,listeners:A})}var a_=/\r\n?/g,o_=/\u0000|\uFFFD/g;function Up(n){return(typeof n=="string"?n:""+n).replace(a_,`
`).replace(o_,"")}function nl(n,s,l){if(s=Up(s),Up(n)!==s&&l)throw Error(t(425))}function il(){}var Mc=null,Ec=null;function wc(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Tc=typeof setTimeout=="function"?setTimeout:void 0,l_=typeof clearTimeout=="function"?clearTimeout:void 0,Fp=typeof Promise=="function"?Promise:void 0,u_=typeof queueMicrotask=="function"?queueMicrotask:typeof Fp<"u"?function(n){return Fp.resolve(null).then(n).catch(c_)}:Tc;function c_(n){setTimeout(function(){throw n})}function bc(n,s){var l=s,c=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){n.removeChild(p),Da(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);Da(s)}function Er(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Op(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return n;s--}else l==="/$"&&s++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Is,ja="__reactProps$"+Is,$i="__reactContainer$"+Is,Ac="__reactEvents$"+Is,f_="__reactListeners$"+Is,d_="__reactHandles$"+Is;function qr(n){var s=n[Ci];if(s)return s;for(var l=n.parentNode;l;){if(s=l[$i]||l[Ci]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(n=Op(n);n!==null;){if(l=n[Ci])return l;n=Op(n)}return s}n=l,l=n.parentNode}return null}function Xa(n){return n=n[Ci]||n[$i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function rl(n){return n[ja]||null}var Rc=[],Us=-1;function wr(n){return{current:n}}function $t(n){0>Us||(n.current=Rc[Us],Rc[Us]=null,Us--)}function Wt(n,s){Us++,Rc[Us]=n.current,n.current=s}var Tr={},Mn=wr(Tr),kn=wr(!1),Kr=Tr;function Fs(n,s){var l=n.type.contextTypes;if(!l)return Tr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in l)p[x]=s[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=p),p}function Bn(n){return n=n.childContextTypes,n!=null}function sl(){$t(kn),$t(Mn)}function kp(n,s,l){if(Mn.current!==Tr)throw Error(t(168));Wt(Mn,s),Wt(kn,l)}function Bp(n,s,l){var c=n.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in s))throw Error(t(108,Ae(n)||"Unknown",p));return fe({},l,c)}function al(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Tr,Kr=Mn.current,Wt(Mn,n),Wt(kn,kn.current),!0}function zp(n,s,l){var c=n.stateNode;if(!c)throw Error(t(169));l?(n=Bp(n,s,Kr),c.__reactInternalMemoizedMergedChildContext=n,$t(kn),$t(Mn),Wt(Mn,n)):$t(kn),Wt(kn,l)}var Yi=null,ol=!1,Cc=!1;function Vp(n){Yi===null?Yi=[n]:Yi.push(n)}function h_(n){ol=!0,Vp(n)}function br(){if(!Cc&&Yi!==null){Cc=!0;var n=0,s=_t;try{var l=Yi;for(_t=1;n<l.length;n++){var c=l[n];do c=c(!0);while(c!==null)}Yi=null,ol=!1}catch(p){throw Yi!==null&&(Yi=Yi.slice(n+1)),Ho(Ca,br),p}finally{_t=s,Cc=!1}}return null}var Os=[],ks=0,ll=null,ul=0,ii=[],ri=0,Zr=null,qi=1,Ki="";function Jr(n,s){Os[ks++]=ul,Os[ks++]=ll,ll=n,ul=s}function Hp(n,s,l){ii[ri++]=qi,ii[ri++]=Ki,ii[ri++]=Zr,Zr=n;var c=qi;n=Ki;var p=32-Ue(c)-1;c&=~(1<<p),l+=1;var x=32-Ue(s)+p;if(30<x){var A=p-p%5;x=(c&(1<<A)-1).toString(32),c>>=A,p-=A,qi=1<<32-Ue(s)+p|l<<p|c,Ki=x+n}else qi=1<<x|l<<p|c,Ki=n}function Pc(n){n.return!==null&&(Jr(n,1),Hp(n,1,0))}function Lc(n){for(;n===ll;)ll=Os[--ks],Os[ks]=null,ul=Os[--ks],Os[ks]=null;for(;n===Zr;)Zr=ii[--ri],ii[ri]=null,Ki=ii[--ri],ii[ri]=null,qi=ii[--ri],ii[ri]=null}var qn=null,Kn=null,qt=!1,gi=null;function Gp(n,s){var l=li(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=n,s=n.deletions,s===null?(n.deletions=[l],n.flags|=16):s.push(l)}function Wp(n,s){switch(n.tag){case 5:var l=n.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,qn=n,Kn=Er(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,qn=n,Kn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Zr!==null?{id:qi,overflow:Ki}:null,n.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=li(18,null,null,0),l.stateNode=s,l.return=n,n.child=l,qn=n,Kn=null,!0):!1;default:return!1}}function Nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ic(n){if(qt){var s=Kn;if(s){var l=s;if(!Wp(n,s)){if(Nc(n))throw Error(t(418));s=Er(l.nextSibling);var c=qn;s&&Wp(n,s)?Gp(c,l):(n.flags=n.flags&-4097|2,qt=!1,qn=n)}}else{if(Nc(n))throw Error(t(418));n.flags=n.flags&-4097|2,qt=!1,qn=n}}}function jp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;qn=n}function cl(n){if(n!==qn)return!1;if(!qt)return jp(n),qt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!wc(n.type,n.memoizedProps)),s&&(s=Kn)){if(Nc(n))throw Xp(),Error(t(418));for(;s;)Gp(n,s),s=Er(s.nextSibling)}if(jp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(s===0){Kn=Er(n.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}n=n.nextSibling}Kn=null}}else Kn=qn?Er(n.stateNode.nextSibling):null;return!0}function Xp(){for(var n=Kn;n;)n=Er(n.nextSibling)}function Bs(){Kn=qn=null,qt=!1}function Dc(n){gi===null?gi=[n]:gi.push(n)}var p_=P.ReactCurrentBatchConfig;function $a(n,s,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,n));var p=c,x=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(A){var U=p.refs;A===null?delete U[x]:U[x]=A},s._stringRef=x,s)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function fl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function $p(n){var s=n._init;return s(n._payload)}function Yp(n){function s(te,X){if(n){var ae=te.deletions;ae===null?(te.deletions=[X],te.flags|=16):ae.push(X)}}function l(te,X){if(!n)return null;for(;X!==null;)s(te,X),X=X.sibling;return null}function c(te,X){for(te=new Map;X!==null;)X.key!==null?te.set(X.key,X):te.set(X.index,X),X=X.sibling;return te}function p(te,X){return te=Dr(te,X),te.index=0,te.sibling=null,te}function x(te,X,ae){return te.index=ae,n?(ae=te.alternate,ae!==null?(ae=ae.index,ae<X?(te.flags|=2,X):ae):(te.flags|=2,X)):(te.flags|=1048576,X)}function A(te){return n&&te.alternate===null&&(te.flags|=2),te}function U(te,X,ae,Ne){return X===null||X.tag!==6?(X=bf(ae,te.mode,Ne),X.return=te,X):(X=p(X,ae),X.return=te,X)}function G(te,X,ae,Ne){var tt=ae.type;return tt===B?Ce(te,X,ae.props.children,Ne,ae.key):X!==null&&(X.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ee&&$p(tt)===X.type)?(Ne=p(X,ae.props),Ne.ref=$a(te,X,ae),Ne.return=te,Ne):(Ne=Ul(ae.type,ae.key,ae.props,null,te.mode,Ne),Ne.ref=$a(te,X,ae),Ne.return=te,Ne)}function de(te,X,ae,Ne){return X===null||X.tag!==4||X.stateNode.containerInfo!==ae.containerInfo||X.stateNode.implementation!==ae.implementation?(X=Af(ae,te.mode,Ne),X.return=te,X):(X=p(X,ae.children||[]),X.return=te,X)}function Ce(te,X,ae,Ne,tt){return X===null||X.tag!==7?(X=as(ae,te.mode,Ne,tt),X.return=te,X):(X=p(X,ae),X.return=te,X)}function Pe(te,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return X=bf(""+X,te.mode,ae),X.return=te,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case F:return ae=Ul(X.type,X.key,X.props,null,te.mode,ae),ae.ref=$a(te,null,X),ae.return=te,ae;case N:return X=Af(X,te.mode,ae),X.return=te,X;case ee:var Ne=X._init;return Pe(te,Ne(X._payload),ae)}if(j(X)||ue(X))return X=as(X,te.mode,ae,null),X.return=te,X;fl(te,X)}return null}function be(te,X,ae,Ne){var tt=X!==null?X.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return tt!==null?null:U(te,X,""+ae,Ne);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case F:return ae.key===tt?G(te,X,ae,Ne):null;case N:return ae.key===tt?de(te,X,ae,Ne):null;case ee:return tt=ae._init,be(te,X,tt(ae._payload),Ne)}if(j(ae)||ue(ae))return tt!==null?null:Ce(te,X,ae,Ne,null);fl(te,ae)}return null}function je(te,X,ae,Ne,tt){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return te=te.get(ae)||null,U(X,te,""+Ne,tt);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case F:return te=te.get(Ne.key===null?ae:Ne.key)||null,G(X,te,Ne,tt);case N:return te=te.get(Ne.key===null?ae:Ne.key)||null,de(X,te,Ne,tt);case ee:var at=Ne._init;return je(te,X,ae,at(Ne._payload),tt)}if(j(Ne)||ue(Ne))return te=te.get(ae)||null,Ce(X,te,Ne,tt,null);fl(X,Ne)}return null}function qe(te,X,ae,Ne){for(var tt=null,at=null,ot=X,ft=X=0,gn=null;ot!==null&&ft<ae.length;ft++){ot.index>ft?(gn=ot,ot=null):gn=ot.sibling;var Pt=be(te,ot,ae[ft],Ne);if(Pt===null){ot===null&&(ot=gn);break}n&&ot&&Pt.alternate===null&&s(te,ot),X=x(Pt,X,ft),at===null?tt=Pt:at.sibling=Pt,at=Pt,ot=gn}if(ft===ae.length)return l(te,ot),qt&&Jr(te,ft),tt;if(ot===null){for(;ft<ae.length;ft++)ot=Pe(te,ae[ft],Ne),ot!==null&&(X=x(ot,X,ft),at===null?tt=ot:at.sibling=ot,at=ot);return qt&&Jr(te,ft),tt}for(ot=c(te,ot);ft<ae.length;ft++)gn=je(ot,te,ft,ae[ft],Ne),gn!==null&&(n&&gn.alternate!==null&&ot.delete(gn.key===null?ft:gn.key),X=x(gn,X,ft),at===null?tt=gn:at.sibling=gn,at=gn);return n&&ot.forEach(function(Ur){return s(te,Ur)}),qt&&Jr(te,ft),tt}function Je(te,X,ae,Ne){var tt=ue(ae);if(typeof tt!="function")throw Error(t(150));if(ae=tt.call(ae),ae==null)throw Error(t(151));for(var at=tt=null,ot=X,ft=X=0,gn=null,Pt=ae.next();ot!==null&&!Pt.done;ft++,Pt=ae.next()){ot.index>ft?(gn=ot,ot=null):gn=ot.sibling;var Ur=be(te,ot,Pt.value,Ne);if(Ur===null){ot===null&&(ot=gn);break}n&&ot&&Ur.alternate===null&&s(te,ot),X=x(Ur,X,ft),at===null?tt=Ur:at.sibling=Ur,at=Ur,ot=gn}if(Pt.done)return l(te,ot),qt&&Jr(te,ft),tt;if(ot===null){for(;!Pt.done;ft++,Pt=ae.next())Pt=Pe(te,Pt.value,Ne),Pt!==null&&(X=x(Pt,X,ft),at===null?tt=Pt:at.sibling=Pt,at=Pt);return qt&&Jr(te,ft),tt}for(ot=c(te,ot);!Pt.done;ft++,Pt=ae.next())Pt=je(ot,te,ft,Pt.value,Ne),Pt!==null&&(n&&Pt.alternate!==null&&ot.delete(Pt.key===null?ft:Pt.key),X=x(Pt,X,ft),at===null?tt=Pt:at.sibling=Pt,at=Pt);return n&&ot.forEach(function($_){return s(te,$_)}),qt&&Jr(te,ft),tt}function rn(te,X,ae,Ne){if(typeof ae=="object"&&ae!==null&&ae.type===B&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case F:e:{for(var tt=ae.key,at=X;at!==null;){if(at.key===tt){if(tt=ae.type,tt===B){if(at.tag===7){l(te,at.sibling),X=p(at,ae.props.children),X.return=te,te=X;break e}}else if(at.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ee&&$p(tt)===at.type){l(te,at.sibling),X=p(at,ae.props),X.ref=$a(te,at,ae),X.return=te,te=X;break e}l(te,at);break}else s(te,at);at=at.sibling}ae.type===B?(X=as(ae.props.children,te.mode,Ne,ae.key),X.return=te,te=X):(Ne=Ul(ae.type,ae.key,ae.props,null,te.mode,Ne),Ne.ref=$a(te,X,ae),Ne.return=te,te=Ne)}return A(te);case N:e:{for(at=ae.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===ae.containerInfo&&X.stateNode.implementation===ae.implementation){l(te,X.sibling),X=p(X,ae.children||[]),X.return=te,te=X;break e}else{l(te,X);break}else s(te,X);X=X.sibling}X=Af(ae,te.mode,Ne),X.return=te,te=X}return A(te);case ee:return at=ae._init,rn(te,X,at(ae._payload),Ne)}if(j(ae))return qe(te,X,ae,Ne);if(ue(ae))return Je(te,X,ae,Ne);fl(te,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,X!==null&&X.tag===6?(l(te,X.sibling),X=p(X,ae),X.return=te,te=X):(l(te,X),X=bf(ae,te.mode,Ne),X.return=te,te=X),A(te)):l(te,X)}return rn}var zs=Yp(!0),qp=Yp(!1),dl=wr(null),hl=null,Vs=null,Uc=null;function Fc(){Uc=Vs=hl=null}function Oc(n){var s=dl.current;$t(dl),n._currentValue=s}function kc(n,s,l){for(;n!==null;){var c=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),n===l)break;n=n.return}}function Hs(n,s){hl=n,Uc=Vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(zn=!0),n.firstContext=null)}function si(n){var s=n._currentValue;if(Uc!==n)if(n={context:n,memoizedValue:s,next:null},Vs===null){if(hl===null)throw Error(t(308));Vs=n,hl.dependencies={lanes:0,firstContext:n}}else Vs=Vs.next=n;return s}var Qr=null;function Bc(n){Qr===null?Qr=[n]:Qr.push(n)}function Kp(n,s,l,c){var p=s.interleaved;return p===null?(l.next=l,Bc(s)):(l.next=p.next,p.next=l),s.interleaved=l,Zi(n,c)}function Zi(n,s){n.lanes|=s;var l=n.alternate;for(l!==null&&(l.lanes|=s),l=n,n=n.return;n!==null;)n.childLanes|=s,l=n.alternate,l!==null&&(l.childLanes|=s),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Ar=!1;function zc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zp(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ji(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function Rr(n,s,l){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Rt&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,Zi(n,l)}return p=c.interleaved,p===null?(s.next=s,Bc(c)):(s.next=p.next,p.next=s),c.interleaved=s,Zi(n,l)}function pl(n,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var c=s.lanes;c&=n.pendingLanes,l|=c,s.lanes=l,On(n,l)}}function Jp(n,s){var l=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?p=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?p=x=s:x=x.next=s}else p=x=s;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=s:n.next=s,l.lastBaseUpdate=s}function ml(n,s,l,c){var p=n.updateQueue;Ar=!1;var x=p.firstBaseUpdate,A=p.lastBaseUpdate,U=p.shared.pending;if(U!==null){p.shared.pending=null;var G=U,de=G.next;G.next=null,A===null?x=de:A.next=de,A=G;var Ce=n.alternate;Ce!==null&&(Ce=Ce.updateQueue,U=Ce.lastBaseUpdate,U!==A&&(U===null?Ce.firstBaseUpdate=de:U.next=de,Ce.lastBaseUpdate=G))}if(x!==null){var Pe=p.baseState;A=0,Ce=de=G=null,U=x;do{var be=U.lane,je=U.eventTime;if((c&be)===be){Ce!==null&&(Ce=Ce.next={eventTime:je,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var qe=n,Je=U;switch(be=s,je=l,Je.tag){case 1:if(qe=Je.payload,typeof qe=="function"){Pe=qe.call(je,Pe,be);break e}Pe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=Je.payload,be=typeof qe=="function"?qe.call(je,Pe,be):qe,be==null)break e;Pe=fe({},Pe,be);break e;case 2:Ar=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,be=p.effects,be===null?p.effects=[U]:be.push(U))}else je={eventTime:je,lane:be,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Ce===null?(de=Ce=je,G=Pe):Ce=Ce.next=je,A|=be;if(U=U.next,U===null){if(U=p.shared.pending,U===null)break;be=U,U=be.next,be.next=null,p.lastBaseUpdate=be,p.shared.pending=null}}while(!0);if(Ce===null&&(G=Pe),p.baseState=G,p.firstBaseUpdate=de,p.lastBaseUpdate=Ce,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else x===null&&(p.shared.lanes=0);ns|=A,n.lanes=A,n.memoizedState=Pe}}function Qp(n,s,l){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var c=n[s],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Ya={},Pi=wr(Ya),qa=wr(Ya),Ka=wr(Ya);function es(n){if(n===Ya)throw Error(t(174));return n}function Vc(n,s){switch(Wt(Ka,s),Wt(qa,n),Wt(Pi,Ya),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:E(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=E(s,n)}$t(Pi),Wt(Pi,s)}function Gs(){$t(Pi),$t(qa),$t(Ka)}function em(n){es(Ka.current);var s=es(Pi.current),l=E(s,n.type);s!==l&&(Wt(qa,n),Wt(Pi,l))}function Hc(n){qa.current===n&&($t(Pi),$t(qa))}var Jt=wr(0);function gl(n){for(var s=n;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Gc=[];function Wc(){for(var n=0;n<Gc.length;n++)Gc[n]._workInProgressVersionPrimary=null;Gc.length=0}var vl=P.ReactCurrentDispatcher,jc=P.ReactCurrentBatchConfig,ts=0,Qt=null,cn=null,pn=null,xl=!1,Za=!1,Ja=0,m_=0;function En(){throw Error(t(321))}function Xc(n,s){if(s===null)return!1;for(var l=0;l<s.length&&l<n.length;l++)if(!mi(n[l],s[l]))return!1;return!0}function $c(n,s,l,c,p,x){if(ts=x,Qt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,vl.current=n===null||n.memoizedState===null?__:y_,n=l(c,p),Za){x=0;do{if(Za=!1,Ja=0,25<=x)throw Error(t(301));x+=1,pn=cn=null,s.updateQueue=null,vl.current=S_,n=l(c,p)}while(Za)}if(vl.current=Sl,s=cn!==null&&cn.next!==null,ts=0,pn=cn=Qt=null,xl=!1,s)throw Error(t(300));return n}function Yc(){var n=Ja!==0;return Ja=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Qt.memoizedState=pn=n:pn=pn.next=n,pn}function ai(){if(cn===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var s=pn===null?Qt.memoizedState:pn.next;if(s!==null)pn=s,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},pn===null?Qt.memoizedState=pn=n:pn=pn.next=n}return pn}function Qa(n,s){return typeof s=="function"?s(n):s}function qc(n){var s=ai(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var c=cn,p=c.baseQueue,x=l.pending;if(x!==null){if(p!==null){var A=p.next;p.next=x.next,x.next=A}c.baseQueue=p=x,l.pending=null}if(p!==null){x=p.next,c=c.baseState;var U=A=null,G=null,de=x;do{var Ce=de.lane;if((ts&Ce)===Ce)G!==null&&(G=G.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),c=de.hasEagerState?de.eagerState:n(c,de.action);else{var Pe={lane:Ce,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};G===null?(U=G=Pe,A=c):G=G.next=Pe,Qt.lanes|=Ce,ns|=Ce}de=de.next}while(de!==null&&de!==x);G===null?A=c:G.next=U,mi(c,s.memoizedState)||(zn=!0),s.memoizedState=c,s.baseState=A,s.baseQueue=G,l.lastRenderedState=c}if(n=l.interleaved,n!==null){p=n;do x=p.lane,Qt.lanes|=x,ns|=x,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Kc(n){var s=ai(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var c=l.dispatch,p=l.pending,x=s.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do x=n(x,A.action),A=A.next;while(A!==p);mi(x,s.memoizedState)||(zn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,c]}function tm(){}function nm(n,s){var l=Qt,c=ai(),p=s(),x=!mi(c.memoizedState,p);if(x&&(c.memoizedState=p,zn=!0),c=c.queue,Zc(sm.bind(null,l,c,n),[n]),c.getSnapshot!==s||x||pn!==null&&pn.memoizedState.tag&1){if(l.flags|=2048,eo(9,rm.bind(null,l,c,p,s),void 0,null),mn===null)throw Error(t(349));(ts&30)!==0||im(l,s,p)}return p}function im(n,s,l){n.flags|=16384,n={getSnapshot:s,value:l},s=Qt.updateQueue,s===null?(s={lastEffect:null,stores:null},Qt.updateQueue=s,s.stores=[n]):(l=s.stores,l===null?s.stores=[n]:l.push(n))}function rm(n,s,l,c){s.value=l,s.getSnapshot=c,am(s)&&om(n)}function sm(n,s,l){return l(function(){am(s)&&om(n)})}function am(n){var s=n.getSnapshot;n=n.value;try{var l=s();return!mi(n,l)}catch{return!0}}function om(n){var s=Zi(n,1);s!==null&&yi(s,n,1,-1)}function lm(n){var s=Li();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qa,lastRenderedState:n},s.queue=n,n=n.dispatch=x_.bind(null,Qt,n),[s.memoizedState,n]}function eo(n,s,l,c){return n={tag:n,create:s,destroy:l,deps:c,next:null},s=Qt.updateQueue,s===null?(s={lastEffect:null,stores:null},Qt.updateQueue=s,s.lastEffect=n.next=n):(l=s.lastEffect,l===null?s.lastEffect=n.next=n:(c=l.next,l.next=n,n.next=c,s.lastEffect=n)),n}function um(){return ai().memoizedState}function _l(n,s,l,c){var p=Li();Qt.flags|=n,p.memoizedState=eo(1|s,l,void 0,c===void 0?null:c)}function yl(n,s,l,c){var p=ai();c=c===void 0?null:c;var x=void 0;if(cn!==null){var A=cn.memoizedState;if(x=A.destroy,c!==null&&Xc(c,A.deps)){p.memoizedState=eo(s,l,x,c);return}}Qt.flags|=n,p.memoizedState=eo(1|s,l,x,c)}function cm(n,s){return _l(8390656,8,n,s)}function Zc(n,s){return yl(2048,8,n,s)}function fm(n,s){return yl(4,2,n,s)}function dm(n,s){return yl(4,4,n,s)}function hm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function pm(n,s,l){return l=l!=null?l.concat([n]):null,yl(4,4,hm.bind(null,s,n),l)}function Jc(){}function mm(n,s){var l=ai();s=s===void 0?null:s;var c=l.memoizedState;return c!==null&&s!==null&&Xc(s,c[1])?c[0]:(l.memoizedState=[n,s],n)}function gm(n,s){var l=ai();s=s===void 0?null:s;var c=l.memoizedState;return c!==null&&s!==null&&Xc(s,c[1])?c[0]:(n=n(),l.memoizedState=[n,s],n)}function vm(n,s,l){return(ts&21)===0?(n.baseState&&(n.baseState=!1,zn=!0),n.memoizedState=l):(mi(l,s)||(l=We(),Qt.lanes|=l,ns|=l,n.baseState=!0),s)}function g_(n,s){var l=_t;_t=l!==0&&4>l?l:4,n(!0);var c=jc.transition;jc.transition={};try{n(!1),s()}finally{_t=l,jc.transition=c}}function xm(){return ai().memoizedState}function v_(n,s,l){var c=Nr(n);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},_m(n))ym(s,l);else if(l=Kp(n,s,l,c),l!==null){var p=Nn();yi(l,n,c,p),Sm(l,s,c)}}function x_(n,s,l){var c=Nr(n),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(_m(n))ym(s,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var A=s.lastRenderedState,U=x(A,l);if(p.hasEagerState=!0,p.eagerState=U,mi(U,A)){var G=s.interleaved;G===null?(p.next=p,Bc(s)):(p.next=G.next,G.next=p),s.interleaved=p;return}}catch{}finally{}l=Kp(n,s,p,c),l!==null&&(p=Nn(),yi(l,n,c,p),Sm(l,s,c))}}function _m(n){var s=n.alternate;return n===Qt||s!==null&&s===Qt}function ym(n,s){Za=xl=!0;var l=n.pending;l===null?s.next=s:(s.next=l.next,l.next=s),n.pending=s}function Sm(n,s,l){if((l&4194240)!==0){var c=s.lanes;c&=n.pendingLanes,l|=c,s.lanes=l,On(n,l)}}var Sl={readContext:si,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},__={readContext:si,useCallback:function(n,s){return Li().memoizedState=[n,s===void 0?null:s],n},useContext:si,useEffect:cm,useImperativeHandle:function(n,s,l){return l=l!=null?l.concat([n]):null,_l(4194308,4,hm.bind(null,s,n),l)},useLayoutEffect:function(n,s){return _l(4194308,4,n,s)},useInsertionEffect:function(n,s){return _l(4,2,n,s)},useMemo:function(n,s){var l=Li();return s=s===void 0?null:s,n=n(),l.memoizedState=[n,s],n},useReducer:function(n,s,l){var c=Li();return s=l!==void 0?l(s):s,c.memoizedState=c.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},c.queue=n,n=n.dispatch=v_.bind(null,Qt,n),[c.memoizedState,n]},useRef:function(n){var s=Li();return n={current:n},s.memoizedState=n},useState:lm,useDebugValue:Jc,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=lm(!1),s=n[0];return n=g_.bind(null,n[1]),Li().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,l){var c=Qt,p=Li();if(qt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),mn===null)throw Error(t(349));(ts&30)!==0||im(c,s,l)}p.memoizedState=l;var x={value:l,getSnapshot:s};return p.queue=x,cm(sm.bind(null,c,x,n),[n]),c.flags|=2048,eo(9,rm.bind(null,c,x,l,s),void 0,null),l},useId:function(){var n=Li(),s=mn.identifierPrefix;if(qt){var l=Ki,c=qi;l=(c&~(1<<32-Ue(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ja++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=m_++,s=":"+s+"r"+l.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},y_={readContext:si,useCallback:mm,useContext:si,useEffect:Zc,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:dm,useMemo:gm,useReducer:qc,useRef:um,useState:function(){return qc(Qa)},useDebugValue:Jc,useDeferredValue:function(n){var s=ai();return vm(s,cn.memoizedState,n)},useTransition:function(){var n=qc(Qa)[0],s=ai().memoizedState;return[n,s]},useMutableSource:tm,useSyncExternalStore:nm,useId:xm,unstable_isNewReconciler:!1},S_={readContext:si,useCallback:mm,useContext:si,useEffect:Zc,useImperativeHandle:pm,useInsertionEffect:fm,useLayoutEffect:dm,useMemo:gm,useReducer:Kc,useRef:um,useState:function(){return Kc(Qa)},useDebugValue:Jc,useDeferredValue:function(n){var s=ai();return cn===null?s.memoizedState=n:vm(s,cn.memoizedState,n)},useTransition:function(){var n=Kc(Qa)[0],s=ai().memoizedState;return[n,s]},useMutableSource:tm,useSyncExternalStore:nm,useId:xm,unstable_isNewReconciler:!1};function vi(n,s){if(n&&n.defaultProps){s=fe({},s),n=n.defaultProps;for(var l in n)s[l]===void 0&&(s[l]=n[l]);return s}return s}function Qc(n,s,l,c){s=n.memoizedState,l=l(c,s),l=l==null?s:fe({},s,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Ml={isMounted:function(n){return(n=n._reactInternals)?Ai(n)===n:!1},enqueueSetState:function(n,s,l){n=n._reactInternals;var c=Nn(),p=Nr(n),x=Ji(c,p);x.payload=s,l!=null&&(x.callback=l),s=Rr(n,x,p),s!==null&&(yi(s,n,p,c),pl(s,n,p))},enqueueReplaceState:function(n,s,l){n=n._reactInternals;var c=Nn(),p=Nr(n),x=Ji(c,p);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Rr(n,x,p),s!==null&&(yi(s,n,p,c),pl(s,n,p))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var l=Nn(),c=Nr(n),p=Ji(l,c);p.tag=2,s!=null&&(p.callback=s),s=Rr(n,p,c),s!==null&&(yi(s,n,c,l),pl(s,n,c))}};function Mm(n,s,l,c,p,x,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,A):s.prototype&&s.prototype.isPureReactComponent?!za(l,c)||!za(p,x):!0}function Em(n,s,l){var c=!1,p=Tr,x=s.contextType;return typeof x=="object"&&x!==null?x=si(x):(p=Bn(s)?Kr:Mn.current,c=s.contextTypes,x=(c=c!=null)?Fs(n,p):Tr),s=new s(l,x),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ml,n.stateNode=s,s._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),s}function wm(n,s,l,c){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==n&&Ml.enqueueReplaceState(s,s.state,null)}function ef(n,s,l,c){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},zc(n);var x=s.contextType;typeof x=="object"&&x!==null?p.context=si(x):(x=Bn(s)?Kr:Mn.current,p.context=Fs(n,x)),p.state=n.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Qc(n,s,x,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Ml.enqueueReplaceState(p,p.state,null),ml(n,l,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,s){try{var l="",c=s;do l+=Be(c),c=c.return;while(c);var p=l}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:s,stack:p,digest:null}}function tf(n,s,l){return{value:n,source:null,stack:l??null,digest:s??null}}function nf(n,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var M_=typeof WeakMap=="function"?WeakMap:Map;function Tm(n,s,l){l=Ji(-1,l),l.tag=3,l.payload={element:null};var c=s.value;return l.callback=function(){Cl||(Cl=!0,xf=c),nf(n,s)},l}function bm(n,s,l){l=Ji(-1,l),l.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=s.value;l.payload=function(){return c(p)},l.callback=function(){nf(n,s)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){nf(n,s),typeof c!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function Am(n,s,l){var c=n.pingCache;if(c===null){c=n.pingCache=new M_;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(l)||(p.add(l),n=F_.bind(null,n,s,l),s.then(n,n))}function Rm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Cm(n,s,l,c,p){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Ji(-1,1),s.tag=2,Rr(l,s,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var E_=P.ReactCurrentOwner,zn=!1;function Ln(n,s,l,c){s.child=n===null?qp(s,null,l,c):zs(s,n.child,l,c)}function Pm(n,s,l,c,p){l=l.render;var x=s.ref;return Hs(s,p),c=$c(n,s,l,c,x,p),l=Yc(),n!==null&&!zn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Qi(n,s,p)):(qt&&l&&Pc(s),s.flags|=1,Ln(n,s,c,p),s.child)}function Lm(n,s,l,c,p){if(n===null){var x=l.type;return typeof x=="function"&&!Tf(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,Nm(n,s,x,c,p)):(n=Ul(l.type,null,c,s,s.mode,p),n.ref=s.ref,n.return=s,s.child=n)}if(x=n.child,(n.lanes&p)===0){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:za,l(A,c)&&n.ref===s.ref)return Qi(n,s,p)}return s.flags|=1,n=Dr(x,c),n.ref=s.ref,n.return=s,s.child=n}function Nm(n,s,l,c,p){if(n!==null){var x=n.memoizedProps;if(za(x,c)&&n.ref===s.ref)if(zn=!1,s.pendingProps=c=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(zn=!0);else return s.lanes=n.lanes,Qi(n,s,p)}return rf(n,s,l,c,p)}function Im(n,s,l){var c=s.pendingProps,p=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(Xs,Zn),Zn|=l;else{if((l&1073741824)===0)return n=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Wt(Xs,Zn),Zn|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:l,Wt(Xs,Zn),Zn|=c}else x!==null?(c=x.baseLanes|l,s.memoizedState=null):c=l,Wt(Xs,Zn),Zn|=c;return Ln(n,s,p,l),s.child}function Dm(n,s){var l=s.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function rf(n,s,l,c,p){var x=Bn(l)?Kr:Mn.current;return x=Fs(s,x),Hs(s,p),l=$c(n,s,l,c,x,p),c=Yc(),n!==null&&!zn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,Qi(n,s,p)):(qt&&c&&Pc(s),s.flags|=1,Ln(n,s,l,p),s.child)}function Um(n,s,l,c,p){if(Bn(l)){var x=!0;al(s)}else x=!1;if(Hs(s,p),s.stateNode===null)wl(n,s),Em(s,l,c),ef(s,l,c,p),c=!0;else if(n===null){var A=s.stateNode,U=s.memoizedProps;A.props=U;var G=A.context,de=l.contextType;typeof de=="object"&&de!==null?de=si(de):(de=Bn(l)?Kr:Mn.current,de=Fs(s,de));var Ce=l.getDerivedStateFromProps,Pe=typeof Ce=="function"||typeof A.getSnapshotBeforeUpdate=="function";Pe||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==c||G!==de)&&wm(s,A,c,de),Ar=!1;var be=s.memoizedState;A.state=be,ml(s,c,A,p),G=s.memoizedState,U!==c||be!==G||kn.current||Ar?(typeof Ce=="function"&&(Qc(s,l,Ce,c),G=s.memoizedState),(U=Ar||Mm(s,l,U,c,be,G,de))?(Pe||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=G),A.props=c,A.state=G,A.context=de,c=U):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{A=s.stateNode,Zp(n,s),U=s.memoizedProps,de=s.type===s.elementType?U:vi(s.type,U),A.props=de,Pe=s.pendingProps,be=A.context,G=l.contextType,typeof G=="object"&&G!==null?G=si(G):(G=Bn(l)?Kr:Mn.current,G=Fs(s,G));var je=l.getDerivedStateFromProps;(Ce=typeof je=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==Pe||be!==G)&&wm(s,A,c,G),Ar=!1,be=s.memoizedState,A.state=be,ml(s,c,A,p);var qe=s.memoizedState;U!==Pe||be!==qe||kn.current||Ar?(typeof je=="function"&&(Qc(s,l,je,c),qe=s.memoizedState),(de=Ar||Mm(s,l,de,c,be,qe,G)||!1)?(Ce||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,qe,G),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,qe,G)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||U===n.memoizedProps&&be===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&be===n.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=qe),A.props=c,A.state=qe,A.context=G,c=de):(typeof A.componentDidUpdate!="function"||U===n.memoizedProps&&be===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&be===n.memoizedState||(s.flags|=1024),c=!1)}return sf(n,s,l,c,x,p)}function sf(n,s,l,c,p,x){Dm(n,s);var A=(s.flags&128)!==0;if(!c&&!A)return p&&zp(s,l,!1),Qi(n,s,x);c=s.stateNode,E_.current=s;var U=A&&typeof l.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,n!==null&&A?(s.child=zs(s,n.child,null,x),s.child=zs(s,null,U,x)):Ln(n,s,U,x),s.memoizedState=c.state,p&&zp(s,l,!0),s.child}function Fm(n){var s=n.stateNode;s.pendingContext?kp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&kp(n,s.context,!1),Vc(n,s.containerInfo)}function Om(n,s,l,c,p){return Bs(),Dc(p),s.flags|=256,Ln(n,s,l,c),s.child}var af={dehydrated:null,treeContext:null,retryLane:0};function of(n){return{baseLanes:n,cachePool:null,transitions:null}}function km(n,s,l){var c=s.pendingProps,p=Jt.current,x=!1,A=(s.flags&128)!==0,U;if((U=A)||(U=n!==null&&n.memoizedState===null?!1:(p&2)!==0),U?(x=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Wt(Jt,p&1),n===null)return Ic(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=c.children,n=c.fallback,x?(c=s.mode,x=s.child,A={mode:"hidden",children:A},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=Fl(A,c,0,null),n=as(n,c,l,null),x.return=s,n.return=s,x.sibling=n,s.child=x,s.child.memoizedState=of(l),s.memoizedState=af,n):lf(s,A));if(p=n.memoizedState,p!==null&&(U=p.dehydrated,U!==null))return w_(n,s,A,c,U,p,l);if(x){x=c.fallback,A=s.mode,p=n.child,U=p.sibling;var G={mode:"hidden",children:c.children};return(A&1)===0&&s.child!==p?(c=s.child,c.childLanes=0,c.pendingProps=G,s.deletions=null):(c=Dr(p,G),c.subtreeFlags=p.subtreeFlags&14680064),U!==null?x=Dr(U,x):(x=as(x,A,l,null),x.flags|=2),x.return=s,c.return=s,c.sibling=x,s.child=c,c=x,x=s.child,A=n.child.memoizedState,A=A===null?of(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=n.childLanes&~l,s.memoizedState=af,c}return x=n.child,n=x.sibling,c=Dr(x,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=l),c.return=s,c.sibling=null,n!==null&&(l=s.deletions,l===null?(s.deletions=[n],s.flags|=16):l.push(n)),s.child=c,s.memoizedState=null,c}function lf(n,s){return s=Fl({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function El(n,s,l,c){return c!==null&&Dc(c),zs(s,n.child,null,l),n=lf(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function w_(n,s,l,c,p,x,A){if(l)return s.flags&256?(s.flags&=-257,c=tf(Error(t(422))),El(n,s,A,c)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(x=c.fallback,p=s.mode,c=Fl({mode:"visible",children:c.children},p,0,null),x=as(x,p,A,null),x.flags|=2,c.return=s,x.return=s,c.sibling=x,s.child=c,(s.mode&1)!==0&&zs(s,n.child,null,A),s.child.memoizedState=of(A),s.memoizedState=af,x);if((s.mode&1)===0)return El(n,s,A,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var U=c.dgst;return c=U,x=Error(t(419)),c=tf(x,c,void 0),El(n,s,A,c)}if(U=(A&n.childLanes)!==0,zn||U){if(c=mn,c!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|A))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,Zi(n,p),yi(c,n,p,-1))}return wf(),c=tf(Error(t(421))),El(n,s,A,c)}return p.data==="$?"?(s.flags|=128,s.child=n.child,s=O_.bind(null,n),p._reactRetry=s,null):(n=x.treeContext,Kn=Er(p.nextSibling),qn=s,qt=!0,gi=null,n!==null&&(ii[ri++]=qi,ii[ri++]=Ki,ii[ri++]=Zr,qi=n.id,Ki=n.overflow,Zr=s),s=lf(s,c.children),s.flags|=4096,s)}function Bm(n,s,l){n.lanes|=s;var c=n.alternate;c!==null&&(c.lanes|=s),kc(n.return,s,l)}function uf(n,s,l,c,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=l,x.tailMode=p)}function zm(n,s,l){var c=s.pendingProps,p=c.revealOrder,x=c.tail;if(Ln(n,s,c.children,l),c=Jt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bm(n,l,s);else if(n.tag===19)Bm(n,l,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Wt(Jt,c),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)n=l.alternate,n!==null&&gl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),uf(s,!1,p,l,x);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(n=p.alternate,n!==null&&gl(n)===null){s.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}uf(s,!0,l,null,x);break;case"together":uf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function wl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function Qi(n,s,l){if(n!==null&&(s.dependencies=n.dependencies),ns|=s.lanes,(l&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,l=Dr(n,n.pendingProps),s.child=l,l.return=s;n.sibling!==null;)n=n.sibling,l=l.sibling=Dr(n,n.pendingProps),l.return=s;l.sibling=null}return s.child}function T_(n,s,l){switch(s.tag){case 3:Fm(s),Bs();break;case 5:em(s);break;case 1:Bn(s.type)&&al(s);break;case 4:Vc(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,p=s.memoizedProps.value;Wt(dl,c._currentValue),c._currentValue=p;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Wt(Jt,Jt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?km(n,s,l):(Wt(Jt,Jt.current&1),n=Qi(n,s,l),n!==null?n.sibling:null);Wt(Jt,Jt.current&1);break;case 19:if(c=(l&s.childLanes)!==0,(n.flags&128)!==0){if(c)return zm(n,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Wt(Jt,Jt.current),c)break;return null;case 22:case 23:return s.lanes=0,Im(n,s,l)}return Qi(n,s,l)}var Vm,cf,Hm,Gm;Vm=function(n,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},cf=function(){},Hm=function(n,s,l,c){var p=n.memoizedProps;if(p!==c){n=s.stateNode,es(Pi.current);var x=null;switch(l){case"input":p=bt(n,p),c=bt(n,c),x=[];break;case"select":p=fe({},p,{value:void 0}),c=fe({},c,{value:void 0}),x=[];break;case"textarea":p=Ee(n,p),c=Ee(n,c),x=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=il)}Fe(l,c);var A;l=null;for(de in p)if(!c.hasOwnProperty(de)&&p.hasOwnProperty(de)&&p[de]!=null)if(de==="style"){var U=p[de];for(A in U)U.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(a.hasOwnProperty(de)?x||(x=[]):(x=x||[]).push(de,null));for(de in c){var G=c[de];if(U=p!=null?p[de]:void 0,c.hasOwnProperty(de)&&G!==U&&(G!=null||U!=null))if(de==="style")if(U){for(A in U)!U.hasOwnProperty(A)||G&&G.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in G)G.hasOwnProperty(A)&&U[A]!==G[A]&&(l||(l={}),l[A]=G[A])}else l||(x||(x=[]),x.push(de,l)),l=G;else de==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,U=U?U.__html:void 0,G!=null&&U!==G&&(x=x||[]).push(de,G)):de==="children"?typeof G!="string"&&typeof G!="number"||(x=x||[]).push(de,""+G):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(a.hasOwnProperty(de)?(G!=null&&de==="onScroll"&&Xt("scroll",n),x||U===G||(x=[])):(x=x||[]).push(de,G))}l&&(x=x||[]).push("style",l);var de=x;(s.updateQueue=de)&&(s.flags|=4)}},Gm=function(n,s,l,c){l!==c&&(s.flags|=4)};function to(n,s){if(!qt)switch(n.tailMode){case"hidden":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function wn(n){var s=n.alternate!==null&&n.alternate.child===n.child,l=0,c=0;if(s)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=l,s}function b_(n,s,l){var c=s.pendingProps;switch(Lc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(s),null;case 1:return Bn(s.type)&&sl(),wn(s),null;case 3:return c=s.stateNode,Gs(),$t(kn),$t(Mn),Wc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(cl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,gi!==null&&(Sf(gi),gi=null))),cf(n,s),wn(s),null;case 5:Hc(s);var p=es(Ka.current);if(l=s.type,n!==null&&s.stateNode!=null)Hm(n,s,l,c,p),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return wn(s),null}if(n=es(Pi.current),cl(s)){c=s.stateNode,l=s.type;var x=s.memoizedProps;switch(c[Ci]=s,c[ja]=x,n=(s.mode&1)!==0,l){case"dialog":Xt("cancel",c),Xt("close",c);break;case"iframe":case"object":case"embed":Xt("load",c);break;case"video":case"audio":for(p=0;p<Ha.length;p++)Xt(Ha[p],c);break;case"source":Xt("error",c);break;case"img":case"image":case"link":Xt("error",c),Xt("load",c);break;case"details":Xt("toggle",c);break;case"input":Lt(c,x),Xt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},Xt("invalid",c);break;case"textarea":Te(c,x),Xt("invalid",c)}Fe(l,x),p=null;for(var A in x)if(x.hasOwnProperty(A)){var U=x[A];A==="children"?typeof U=="string"?c.textContent!==U&&(x.suppressHydrationWarning!==!0&&nl(c.textContent,U,n),p=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(x.suppressHydrationWarning!==!0&&nl(c.textContent,U,n),p=["children",""+U]):a.hasOwnProperty(A)&&U!=null&&A==="onScroll"&&Xt("scroll",c)}switch(l){case"input":st(c),kt(c,x,!0);break;case"textarea":st(c),Ie(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=il)}c=p,s.updateQueue=c,c!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=L(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(l,{is:c.is}):(n=A.createElement(l),l==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,l),n[Ci]=s,n[ja]=c,Vm(n,s,!1,!1),s.stateNode=n;e:{switch(A=xe(l,c),l){case"dialog":Xt("cancel",n),Xt("close",n),p=c;break;case"iframe":case"object":case"embed":Xt("load",n),p=c;break;case"video":case"audio":for(p=0;p<Ha.length;p++)Xt(Ha[p],n);p=c;break;case"source":Xt("error",n),p=c;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),p=c;break;case"details":Xt("toggle",n),p=c;break;case"input":Lt(n,c),p=bt(n,c),Xt("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=fe({},c,{value:void 0}),Xt("invalid",n);break;case"textarea":Te(n,c),p=Ee(n,c),Xt("invalid",n);break;default:p=c}Fe(l,p),U=p;for(x in U)if(U.hasOwnProperty(x)){var G=U[x];x==="style"?me(n,G):x==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&ie(n,G)):x==="children"?typeof G=="string"?(l!=="textarea"||G!=="")&&oe(n,G):typeof G=="number"&&oe(n,""+G):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?G!=null&&x==="onScroll"&&Xt("scroll",n):G!=null&&T(n,x,G,A))}switch(l){case"input":st(n),kt(n,c,!1);break;case"textarea":st(n),Ie(n);break;case"option":c.value!=null&&n.setAttribute("value",""+_e(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?Bt(n,!!c.multiple,x,!1):c.defaultValue!=null&&Bt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=il)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return wn(s),null;case 6:if(n&&s.stateNode!=null)Gm(n,s,n.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(l=es(Ka.current),es(Pi.current),cl(s)){if(c=s.stateNode,l=s.memoizedProps,c[Ci]=s,(x=c.nodeValue!==l)&&(n=qn,n!==null))switch(n.tag){case 3:nl(c.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&nl(c.nodeValue,l,(n.mode&1)!==0)}x&&(s.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[Ci]=s,s.stateNode=c}return wn(s),null;case 13:if($t(Jt),c=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qt&&Kn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Xp(),Bs(),s.flags|=98560,x=!1;else if(x=cl(s),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ci]=s}else Bs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;wn(s),x=!1}else gi!==null&&(Sf(gi),gi=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(Jt.current&1)!==0?fn===0&&(fn=3):wf())),s.updateQueue!==null&&(s.flags|=4),wn(s),null);case 4:return Gs(),cf(n,s),n===null&&Ga(s.stateNode.containerInfo),wn(s),null;case 10:return Oc(s.type._context),wn(s),null;case 17:return Bn(s.type)&&sl(),wn(s),null;case 19:if($t(Jt),x=s.memoizedState,x===null)return wn(s),null;if(c=(s.flags&128)!==0,A=x.rendering,A===null)if(c)to(x,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(A=gl(n),A!==null){for(s.flags|=128,to(x,!1),c=A.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=l,l=s.child;l!==null;)x=l,n=c,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,n=A.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Wt(Jt,Jt.current&1|2),s.child}n=n.sibling}x.tail!==null&&Zt()>$s&&(s.flags|=128,c=!0,to(x,!1),s.lanes=4194304)}else{if(!c)if(n=gl(A),n!==null){if(s.flags|=128,c=!0,l=n.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),to(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!qt)return wn(s),null}else 2*Zt()-x.renderingStartTime>$s&&l!==1073741824&&(s.flags|=128,c=!0,to(x,!1),s.lanes=4194304);x.isBackwards?(A.sibling=s.child,s.child=A):(l=x.last,l!==null?l.sibling=A:s.child=A,x.last=A)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=Zt(),s.sibling=null,l=Jt.current,Wt(Jt,c?l&1|2:l&1),s):(wn(s),null);case 22:case 23:return Ef(),c=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(Zn&1073741824)!==0&&(wn(s),s.subtreeFlags&6&&(s.flags|=8192)):wn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function A_(n,s){switch(Lc(s),s.tag){case 1:return Bn(s.type)&&sl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Gs(),$t(kn),$t(Mn),Wc(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Hc(s),null;case 13:if($t(Jt),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Bs()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return $t(Jt),null;case 4:return Gs(),null;case 10:return Oc(s.type._context),null;case 22:case 23:return Ef(),null;case 24:return null;default:return null}}var Tl=!1,Tn=!1,R_=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function js(n,s){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){nn(n,s,c)}else l.current=null}function ff(n,s,l){try{l()}catch(c){nn(n,s,c)}}var Wm=!1;function C_(n,s){if(Mc=jo,n=Mp(),pc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,U=-1,G=-1,de=0,Ce=0,Pe=n,be=null;t:for(;;){for(var je;Pe!==l||p!==0&&Pe.nodeType!==3||(U=A+p),Pe!==x||c!==0&&Pe.nodeType!==3||(G=A+c),Pe.nodeType===3&&(A+=Pe.nodeValue.length),(je=Pe.firstChild)!==null;)be=Pe,Pe=je;for(;;){if(Pe===n)break t;if(be===l&&++de===p&&(U=A),be===x&&++Ce===c&&(G=A),(je=Pe.nextSibling)!==null)break;Pe=be,be=Pe.parentNode}Pe=je}l=U===-1||G===-1?null:{start:U,end:G}}else l=null}l=l||{start:0,end:0}}else l=null;for(Ec={focusedElem:n,selectionRange:l},jo=!1,Ye=s;Ye!==null;)if(s=Ye,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Ye=n;else for(;Ye!==null;){s=Ye;try{var qe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var Je=qe.memoizedProps,rn=qe.memoizedState,te=s.stateNode,X=te.getSnapshotBeforeUpdate(s.elementType===s.type?Je:vi(s.type,Je),rn);te.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ae=s.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ne){nn(s,s.return,Ne)}if(n=s.sibling,n!==null){n.return=s.return,Ye=n;break}Ye=s.return}return qe=Wm,Wm=!1,qe}function no(n,s,l){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&ff(s,l,x)}p=p.next}while(p!==c)}}function bl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&n)===n){var c=l.create;l.destroy=c()}l=l.next}while(l!==s)}}function df(n){var s=n.ref;if(s!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof s=="function"?s(n):s.current=n}}function jm(n){var s=n.alternate;s!==null&&(n.alternate=null,jm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Ci],delete s[ja],delete s[Ac],delete s[f_],delete s[d_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xm(n){return n.tag===5||n.tag===3||n.tag===4}function $m(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hf(n,s,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(n,s):l.insertBefore(n,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(n,l)):(s=l,s.appendChild(n)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=il));else if(c!==4&&(n=n.child,n!==null))for(hf(n,s,l),n=n.sibling;n!==null;)hf(n,s,l),n=n.sibling}function pf(n,s,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,s?l.insertBefore(n,s):l.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(pf(n,s,l),n=n.sibling;n!==null;)pf(n,s,l),n=n.sibling}var _n=null,xi=!1;function Cr(n,s,l){for(l=l.child;l!==null;)Ym(n,s,l),l=l.sibling}function Ym(n,s,l){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(re,l)}catch{}switch(l.tag){case 5:Tn||js(l,s);case 6:var c=_n,p=xi;_n=null,Cr(n,s,l),_n=c,xi=p,_n!==null&&(xi?(n=_n,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):_n.removeChild(l.stateNode));break;case 18:_n!==null&&(xi?(n=_n,l=l.stateNode,n.nodeType===8?bc(n.parentNode,l):n.nodeType===1&&bc(n,l),Da(n)):bc(_n,l.stateNode));break;case 4:c=_n,p=xi,_n=l.stateNode.containerInfo,xi=!0,Cr(n,s,l),_n=c,xi=p;break;case 0:case 11:case 14:case 15:if(!Tn&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var x=p,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&ff(l,s,A),p=p.next}while(p!==c)}Cr(n,s,l);break;case 1:if(!Tn&&(js(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(U){nn(l,s,U)}Cr(n,s,l);break;case 21:Cr(n,s,l);break;case 22:l.mode&1?(Tn=(c=Tn)||l.memoizedState!==null,Cr(n,s,l),Tn=c):Cr(n,s,l);break;default:Cr(n,s,l)}}function qm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new R_),s.forEach(function(c){var p=k_.bind(null,n,c);l.has(c)||(l.add(c),c.then(p,p))})}}function _i(n,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var x=n,A=s,U=A;e:for(;U!==null;){switch(U.tag){case 5:_n=U.stateNode,xi=!1;break e;case 3:_n=U.stateNode.containerInfo,xi=!0;break e;case 4:_n=U.stateNode.containerInfo,xi=!0;break e}U=U.return}if(_n===null)throw Error(t(160));Ym(x,A,p),_n=null,xi=!1;var G=p.alternate;G!==null&&(G.return=null),p.return=null}catch(de){nn(p,s,de)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Km(s,n),s=s.sibling}function Km(n,s){var l=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(_i(s,n),Ni(n),c&4){try{no(3,n,n.return),bl(3,n)}catch(Je){nn(n,n.return,Je)}try{no(5,n,n.return)}catch(Je){nn(n,n.return,Je)}}break;case 1:_i(s,n),Ni(n),c&512&&l!==null&&js(l,l.return);break;case 5:if(_i(s,n),Ni(n),c&512&&l!==null&&js(l,l.return),n.flags&32){var p=n.stateNode;try{oe(p,"")}catch(Je){nn(n,n.return,Je)}}if(c&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,A=l!==null?l.memoizedProps:x,U=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{U==="input"&&x.type==="radio"&&x.name!=null&&mt(p,x),xe(U,A);var de=xe(U,x);for(A=0;A<G.length;A+=2){var Ce=G[A],Pe=G[A+1];Ce==="style"?me(p,Pe):Ce==="dangerouslySetInnerHTML"?ie(p,Pe):Ce==="children"?oe(p,Pe):T(p,Ce,Pe,de)}switch(U){case"input":Ot(p,x);break;case"textarea":ge(p,x);break;case"select":var be=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var je=x.value;je!=null?Bt(p,!!x.multiple,je,!1):be!==!!x.multiple&&(x.defaultValue!=null?Bt(p,!!x.multiple,x.defaultValue,!0):Bt(p,!!x.multiple,x.multiple?[]:"",!1))}p[ja]=x}catch(Je){nn(n,n.return,Je)}}break;case 6:if(_i(s,n),Ni(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(Je){nn(n,n.return,Je)}}break;case 3:if(_i(s,n),Ni(n),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Da(s.containerInfo)}catch(Je){nn(n,n.return,Je)}break;case 4:_i(s,n),Ni(n);break;case 13:_i(s,n),Ni(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(vf=Zt())),c&4&&qm(n);break;case 22:if(Ce=l!==null&&l.memoizedState!==null,n.mode&1?(Tn=(de=Tn)||Ce,_i(s,n),Tn=de):_i(s,n),Ni(n),c&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Ce&&(n.mode&1)!==0)for(Ye=n,Ce=n.child;Ce!==null;){for(Pe=Ye=Ce;Ye!==null;){switch(be=Ye,je=be.child,be.tag){case 0:case 11:case 14:case 15:no(4,be,be.return);break;case 1:js(be,be.return);var qe=be.stateNode;if(typeof qe.componentWillUnmount=="function"){c=be,l=be.return;try{s=c,qe.props=s.memoizedProps,qe.state=s.memoizedState,qe.componentWillUnmount()}catch(Je){nn(c,l,Je)}}break;case 5:js(be,be.return);break;case 22:if(be.memoizedState!==null){Qm(Pe);continue}}je!==null?(je.return=be,Ye=je):Qm(Pe)}Ce=Ce.sibling}e:for(Ce=null,Pe=n;;){if(Pe.tag===5){if(Ce===null){Ce=Pe;try{p=Pe.stateNode,de?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(U=Pe.stateNode,G=Pe.memoizedProps.style,A=G!=null&&G.hasOwnProperty("display")?G.display:null,U.style.display=K("display",A))}catch(Je){nn(n,n.return,Je)}}}else if(Pe.tag===6){if(Ce===null)try{Pe.stateNode.nodeValue=de?"":Pe.memoizedProps}catch(Je){nn(n,n.return,Je)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===n)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===n)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===n)break e;Ce===Pe&&(Ce=null),Pe=Pe.return}Ce===Pe&&(Ce=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:_i(s,n),Ni(n),c&4&&qm(n);break;case 21:break;default:_i(s,n),Ni(n)}}function Ni(n){var s=n.flags;if(s&2){try{e:{for(var l=n.return;l!==null;){if(Xm(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(oe(p,""),c.flags&=-33);var x=$m(n);pf(n,x,p);break;case 3:case 4:var A=c.stateNode.containerInfo,U=$m(n);hf(n,U,A);break;default:throw Error(t(161))}}catch(G){nn(n,n.return,G)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function P_(n,s,l){Ye=n,Zm(n)}function Zm(n,s,l){for(var c=(n.mode&1)!==0;Ye!==null;){var p=Ye,x=p.child;if(p.tag===22&&c){var A=p.memoizedState!==null||Tl;if(!A){var U=p.alternate,G=U!==null&&U.memoizedState!==null||Tn;U=Tl;var de=Tn;if(Tl=A,(Tn=G)&&!de)for(Ye=p;Ye!==null;)A=Ye,G=A.child,A.tag===22&&A.memoizedState!==null?eg(p):G!==null?(G.return=A,Ye=G):eg(p);for(;x!==null;)Ye=x,Zm(x),x=x.sibling;Ye=p,Tl=U,Tn=de}Jm(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,Ye=x):Jm(n)}}function Jm(n){for(;Ye!==null;){var s=Ye;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Tn||bl(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Tn)if(l===null)c.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:vi(s.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&Qp(s,x,c);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Qp(s,A,l)}break;case 5:var U=s.stateNode;if(l===null&&s.flags&4){l=U;var G=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&l.focus();break;case"img":G.src&&(l.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var de=s.alternate;if(de!==null){var Ce=de.memoizedState;if(Ce!==null){var Pe=Ce.dehydrated;Pe!==null&&Da(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||s.flags&512&&df(s)}catch(be){nn(s,s.return,be)}}if(s===n){Ye=null;break}if(l=s.sibling,l!==null){l.return=s.return,Ye=l;break}Ye=s.return}}function Qm(n){for(;Ye!==null;){var s=Ye;if(s===n){Ye=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Ye=l;break}Ye=s.return}}function eg(n){for(;Ye!==null;){var s=Ye;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{bl(4,s)}catch(G){nn(s,l,G)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var p=s.return;try{c.componentDidMount()}catch(G){nn(s,p,G)}}var x=s.return;try{df(s)}catch(G){nn(s,x,G)}break;case 5:var A=s.return;try{df(s)}catch(G){nn(s,A,G)}}}catch(G){nn(s,s.return,G)}if(s===n){Ye=null;break}var U=s.sibling;if(U!==null){U.return=s.return,Ye=U;break}Ye=s.return}}var L_=Math.ceil,Al=P.ReactCurrentDispatcher,mf=P.ReactCurrentOwner,oi=P.ReactCurrentBatchConfig,Rt=0,mn=null,on=null,yn=0,Zn=0,Xs=wr(0),fn=0,io=null,ns=0,Rl=0,gf=0,ro=null,Vn=null,vf=0,$s=1/0,er=null,Cl=!1,xf=null,Pr=null,Pl=!1,Lr=null,Ll=0,so=0,_f=null,Nl=-1,Il=0;function Nn(){return(Rt&6)!==0?Zt():Nl!==-1?Nl:Nl=Zt()}function Nr(n){return(n.mode&1)===0?1:(Rt&2)!==0&&yn!==0?yn&-yn:p_.transition!==null?(Il===0&&(Il=We()),Il):(n=_t,n!==0||(n=window.event,n=n===void 0?16:np(n.type)),n)}function yi(n,s,l,c){if(50<so)throw so=0,_f=null,Error(t(185));xt(n,l,c),((Rt&2)===0||n!==mn)&&(n===mn&&((Rt&2)===0&&(Rl|=l),fn===4&&Ir(n,yn)),Hn(n,c),l===1&&Rt===0&&(s.mode&1)===0&&($s=Zt()+500,ol&&br()))}function Hn(n,s){var l=n.callbackNode;Dt(n,s);var c=Gt(n,n===mn?yn:0);if(c===0)l!==null&&Go(l),n.callbackNode=null,n.callbackPriority=0;else if(s=c&-c,n.callbackPriority!==s){if(l!=null&&Go(l),s===1)n.tag===0?h_(ng.bind(null,n)):Vp(ng.bind(null,n)),u_(function(){(Rt&6)===0&&br()}),l=null;else{switch(Xi(c)){case 1:l=Ca;break;case 4:l=C;break;case 16:l=$;break;case 536870912:l=se;break;default:l=$}l=cg(l,tg.bind(null,n))}n.callbackPriority=s,n.callbackNode=l}}function tg(n,s){if(Nl=-1,Il=0,(Rt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ys()&&n.callbackNode!==l)return null;var c=Gt(n,n===mn?yn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||s)s=Dl(n,c);else{s=c;var p=Rt;Rt|=2;var x=rg();(mn!==n||yn!==s)&&(er=null,$s=Zt()+500,rs(n,s));do try{D_();break}catch(U){ig(n,U)}while(!0);Fc(),Al.current=x,Rt=p,on!==null?s=0:(mn=null,yn=0,s=fn)}if(s!==0){if(s===2&&(p=an(n),p!==0&&(c=p,s=yf(n,p))),s===1)throw l=io,rs(n,0),Ir(n,c),Hn(n,Zt()),l;if(s===6)Ir(n,c);else{if(p=n.current.alternate,(c&30)===0&&!N_(p)&&(s=Dl(n,c),s===2&&(x=an(n),x!==0&&(c=x,s=yf(n,x))),s===1))throw l=io,rs(n,0),Ir(n,c),Hn(n,Zt()),l;switch(n.finishedWork=p,n.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ss(n,Vn,er);break;case 3:if(Ir(n,c),(c&130023424)===c&&(s=vf+500-Zt(),10<s)){if(Gt(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){Nn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Tc(ss.bind(null,n,Vn,er),s);break}ss(n,Vn,er);break;case 4:if(Ir(n,c),(c&4194240)===c)break;for(s=n.eventTimes,p=-1;0<c;){var A=31-Ue(c);x=1<<A,A=s[A],A>p&&(p=A),c&=~x}if(c=p,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*L_(c/1960))-c,10<c){n.timeoutHandle=Tc(ss.bind(null,n,Vn,er),c);break}ss(n,Vn,er);break;case 5:ss(n,Vn,er);break;default:throw Error(t(329))}}}return Hn(n,Zt()),n.callbackNode===l?tg.bind(null,n):null}function yf(n,s){var l=ro;return n.current.memoizedState.isDehydrated&&(rs(n,s).flags|=256),n=Dl(n,s),n!==2&&(s=Vn,Vn=l,s!==null&&Sf(s)),n}function Sf(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function N_(n){for(var s=n;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],x=p.getSnapshot;p=p.value;try{if(!mi(x(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ir(n,s){for(s&=~gf,s&=~Rl,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var l=31-Ue(s),c=1<<l;n[l]=-1,s&=~c}}function ng(n){if((Rt&6)!==0)throw Error(t(327));Ys();var s=Gt(n,0);if((s&1)===0)return Hn(n,Zt()),null;var l=Dl(n,s);if(n.tag!==0&&l===2){var c=an(n);c!==0&&(s=c,l=yf(n,c))}if(l===1)throw l=io,rs(n,0),Ir(n,s),Hn(n,Zt()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,ss(n,Vn,er),Hn(n,Zt()),null}function Mf(n,s){var l=Rt;Rt|=1;try{return n(s)}finally{Rt=l,Rt===0&&($s=Zt()+500,ol&&br())}}function is(n){Lr!==null&&Lr.tag===0&&(Rt&6)===0&&Ys();var s=Rt;Rt|=1;var l=oi.transition,c=_t;try{if(oi.transition=null,_t=1,n)return n()}finally{_t=c,oi.transition=l,Rt=s,(Rt&6)===0&&br()}}function Ef(){Zn=Xs.current,$t(Xs)}function rs(n,s){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,l_(l)),on!==null)for(l=on.return;l!==null;){var c=l;switch(Lc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&sl();break;case 3:Gs(),$t(kn),$t(Mn),Wc();break;case 5:Hc(c);break;case 4:Gs();break;case 13:$t(Jt);break;case 19:$t(Jt);break;case 10:Oc(c.type._context);break;case 22:case 23:Ef()}l=l.return}if(mn=n,on=n=Dr(n.current,null),yn=Zn=s,fn=0,io=null,gf=Rl=ns=0,Vn=ro=null,Qr!==null){for(s=0;s<Qr.length;s++)if(l=Qr[s],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,x=l.pending;if(x!==null){var A=x.next;x.next=p,c.next=A}l.pending=c}Qr=null}return n}function ig(n,s){do{var l=on;try{if(Fc(),vl.current=Sl,xl){for(var c=Qt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}xl=!1}if(ts=0,pn=cn=Qt=null,Za=!1,Ja=0,mf.current=null,l===null||l.return===null){fn=1,io=s,on=null;break}e:{var x=n,A=l.return,U=l,G=s;if(s=yn,U.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var de=G,Ce=U,Pe=Ce.tag;if((Ce.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var be=Ce.alternate;be?(Ce.updateQueue=be.updateQueue,Ce.memoizedState=be.memoizedState,Ce.lanes=be.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var je=Rm(A);if(je!==null){je.flags&=-257,Cm(je,A,U,x,s),je.mode&1&&Am(x,de,s),s=je,G=de;var qe=s.updateQueue;if(qe===null){var Je=new Set;Je.add(G),s.updateQueue=Je}else qe.add(G);break e}else{if((s&1)===0){Am(x,de,s),wf();break e}G=Error(t(426))}}else if(qt&&U.mode&1){var rn=Rm(A);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),Cm(rn,A,U,x,s),Dc(Ws(G,U));break e}}x=G=Ws(G,U),fn!==4&&(fn=2),ro===null?ro=[x]:ro.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var te=Tm(x,G,s);Jp(x,te);break e;case 1:U=G;var X=x.type,ae=x.stateNode;if((x.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Pr===null||!Pr.has(ae)))){x.flags|=65536,s&=-s,x.lanes|=s;var Ne=bm(x,U,s);Jp(x,Ne);break e}}x=x.return}while(x!==null)}ag(l)}catch(tt){s=tt,on===l&&l!==null&&(on=l=l.return);continue}break}while(!0)}function rg(){var n=Al.current;return Al.current=Sl,n===null?Sl:n}function wf(){(fn===0||fn===3||fn===2)&&(fn=4),mn===null||(ns&268435455)===0&&(Rl&268435455)===0||Ir(mn,yn)}function Dl(n,s){var l=Rt;Rt|=2;var c=rg();(mn!==n||yn!==s)&&(er=null,rs(n,s));do try{I_();break}catch(p){ig(n,p)}while(!0);if(Fc(),Rt=l,Al.current=c,on!==null)throw Error(t(261));return mn=null,yn=0,fn}function I_(){for(;on!==null;)sg(on)}function D_(){for(;on!==null&&!ec();)sg(on)}function sg(n){var s=ug(n.alternate,n,Zn);n.memoizedProps=n.pendingProps,s===null?ag(n):on=s,mf.current=null}function ag(n){var s=n;do{var l=s.alternate;if(n=s.return,(s.flags&32768)===0){if(l=b_(l,s,Zn),l!==null){on=l;return}}else{if(l=A_(l,s),l!==null){l.flags&=32767,on=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,on=null;return}}if(s=s.sibling,s!==null){on=s;return}on=s=n}while(s!==null);fn===0&&(fn=5)}function ss(n,s,l){var c=_t,p=oi.transition;try{oi.transition=null,_t=1,U_(n,s,l,c)}finally{oi.transition=p,_t=c}return null}function U_(n,s,l,c){do Ys();while(Lr!==null);if((Rt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=l.lanes|l.childLanes;if(Fn(n,x),n===mn&&(on=mn=null,yn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Pl||(Pl=!0,cg($,function(){return Ys(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=oi.transition,oi.transition=null;var A=_t;_t=1;var U=Rt;Rt|=4,mf.current=null,C_(n,l),Km(l,n),t_(Ec),jo=!!Mc,Ec=Mc=null,n.current=l,P_(l),tc(),Rt=U,_t=A,oi.transition=x}else n.current=l;if(Pl&&(Pl=!1,Lr=n,Ll=p),x=n.pendingLanes,x===0&&(Pr=null),$e(l.stateNode),Hn(n,Zt()),s!==null)for(c=n.onRecoverableError,l=0;l<s.length;l++)p=s[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(Cl)throw Cl=!1,n=xf,xf=null,n;return(Ll&1)!==0&&n.tag!==0&&Ys(),x=n.pendingLanes,(x&1)!==0?n===_f?so++:(so=0,_f=n):so=0,br(),null}function Ys(){if(Lr!==null){var n=Xi(Ll),s=oi.transition,l=_t;try{if(oi.transition=null,_t=16>n?16:n,Lr===null)var c=!1;else{if(n=Lr,Lr=null,Ll=0,(Rt&6)!==0)throw Error(t(331));var p=Rt;for(Rt|=4,Ye=n.current;Ye!==null;){var x=Ye,A=x.child;if((Ye.flags&16)!==0){var U=x.deletions;if(U!==null){for(var G=0;G<U.length;G++){var de=U[G];for(Ye=de;Ye!==null;){var Ce=Ye;switch(Ce.tag){case 0:case 11:case 15:no(8,Ce,x)}var Pe=Ce.child;if(Pe!==null)Pe.return=Ce,Ye=Pe;else for(;Ye!==null;){Ce=Ye;var be=Ce.sibling,je=Ce.return;if(jm(Ce),Ce===de){Ye=null;break}if(be!==null){be.return=je,Ye=be;break}Ye=je}}}var qe=x.alternate;if(qe!==null){var Je=qe.child;if(Je!==null){qe.child=null;do{var rn=Je.sibling;Je.sibling=null,Je=rn}while(Je!==null)}}Ye=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,Ye=A;else e:for(;Ye!==null;){if(x=Ye,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:no(9,x,x.return)}var te=x.sibling;if(te!==null){te.return=x.return,Ye=te;break e}Ye=x.return}}var X=n.current;for(Ye=X;Ye!==null;){A=Ye;var ae=A.child;if((A.subtreeFlags&2064)!==0&&ae!==null)ae.return=A,Ye=ae;else e:for(A=X;Ye!==null;){if(U=Ye,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:bl(9,U)}}catch(tt){nn(U,U.return,tt)}if(U===A){Ye=null;break e}var Ne=U.sibling;if(Ne!==null){Ne.return=U.return,Ye=Ne;break e}Ye=U.return}}if(Rt=p,br(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(re,n)}catch{}c=!0}return c}finally{_t=l,oi.transition=s}}return!1}function og(n,s,l){s=Ws(l,s),s=Tm(n,s,1),n=Rr(n,s,1),s=Nn(),n!==null&&(xt(n,1,s),Hn(n,s))}function nn(n,s,l){if(n.tag===3)og(n,n,l);else for(;s!==null;){if(s.tag===3){og(s,n,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Pr===null||!Pr.has(c))){n=Ws(l,n),n=bm(s,n,1),s=Rr(s,n,1),n=Nn(),s!==null&&(xt(s,1,n),Hn(s,n));break}}s=s.return}}function F_(n,s,l){var c=n.pingCache;c!==null&&c.delete(s),s=Nn(),n.pingedLanes|=n.suspendedLanes&l,mn===n&&(yn&l)===l&&(fn===4||fn===3&&(yn&130023424)===yn&&500>Zt()-vf?rs(n,0):gf|=l),Hn(n,s)}function lg(n,s){s===0&&((n.mode&1)===0?s=1:(s=et,et<<=1,(et&130023424)===0&&(et=4194304)));var l=Nn();n=Zi(n,s),n!==null&&(xt(n,s,l),Hn(n,l))}function O_(n){var s=n.memoizedState,l=0;s!==null&&(l=s.retryLane),lg(n,l)}function k_(n,s){var l=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),lg(n,l)}var ug;ug=function(n,s,l){if(n!==null)if(n.memoizedProps!==s.pendingProps||kn.current)zn=!0;else{if((n.lanes&l)===0&&(s.flags&128)===0)return zn=!1,T_(n,s,l);zn=(n.flags&131072)!==0}else zn=!1,qt&&(s.flags&1048576)!==0&&Hp(s,ul,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;wl(n,s),n=s.pendingProps;var p=Fs(s,Mn.current);Hs(s,l),p=$c(null,s,c,n,p,l);var x=Yc();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Bn(c)?(x=!0,al(s)):x=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,zc(s),p.updater=Ml,s.stateNode=p,p._reactInternals=s,ef(s,c,n,l),s=sf(null,s,c,!0,x,l)):(s.tag=0,qt&&x&&Pc(s),Ln(null,s,p,l),s=s.child),s;case 16:c=s.elementType;e:{switch(wl(n,s),n=s.pendingProps,p=c._init,c=p(c._payload),s.type=c,p=s.tag=z_(c),n=vi(c,n),p){case 0:s=rf(null,s,c,n,l);break e;case 1:s=Um(null,s,c,n,l);break e;case 11:s=Pm(null,s,c,n,l);break e;case 14:s=Lm(null,s,c,vi(c.type,n),l);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:vi(c,p),rf(n,s,c,p,l);case 1:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:vi(c,p),Um(n,s,c,p,l);case 3:e:{if(Fm(s),n===null)throw Error(t(387));c=s.pendingProps,x=s.memoizedState,p=x.element,Zp(n,s),ml(s,c,null,l);var A=s.memoizedState;if(c=A.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){p=Ws(Error(t(423)),s),s=Om(n,s,c,l,p);break e}else if(c!==p){p=Ws(Error(t(424)),s),s=Om(n,s,c,l,p);break e}else for(Kn=Er(s.stateNode.containerInfo.firstChild),qn=s,qt=!0,gi=null,l=qp(s,null,c,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Bs(),c===p){s=Qi(n,s,l);break e}Ln(n,s,c,l)}s=s.child}return s;case 5:return em(s),n===null&&Ic(s),c=s.type,p=s.pendingProps,x=n!==null?n.memoizedProps:null,A=p.children,wc(c,p)?A=null:x!==null&&wc(c,x)&&(s.flags|=32),Dm(n,s),Ln(n,s,A,l),s.child;case 6:return n===null&&Ic(s),null;case 13:return km(n,s,l);case 4:return Vc(s,s.stateNode.containerInfo),c=s.pendingProps,n===null?s.child=zs(s,null,c,l):Ln(n,s,c,l),s.child;case 11:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:vi(c,p),Pm(n,s,c,p,l);case 7:return Ln(n,s,s.pendingProps,l),s.child;case 8:return Ln(n,s,s.pendingProps.children,l),s.child;case 12:return Ln(n,s,s.pendingProps.children,l),s.child;case 10:e:{if(c=s.type._context,p=s.pendingProps,x=s.memoizedProps,A=p.value,Wt(dl,c._currentValue),c._currentValue=A,x!==null)if(mi(x.value,A)){if(x.children===p.children&&!kn.current){s=Qi(n,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var U=x.dependencies;if(U!==null){A=x.child;for(var G=U.firstContext;G!==null;){if(G.context===c){if(x.tag===1){G=Ji(-1,l&-l),G.tag=2;var de=x.updateQueue;if(de!==null){de=de.shared;var Ce=de.pending;Ce===null?G.next=G:(G.next=Ce.next,Ce.next=G),de.pending=G}}x.lanes|=l,G=x.alternate,G!==null&&(G.lanes|=l),kc(x.return,l,s),U.lanes|=l;break}G=G.next}}else if(x.tag===10)A=x.type===s.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,U=A.alternate,U!==null&&(U.lanes|=l),kc(A,l,s),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===s){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Ln(n,s,p.children,l),s=s.child}return s;case 9:return p=s.type,c=s.pendingProps.children,Hs(s,l),p=si(p),c=c(p),s.flags|=1,Ln(n,s,c,l),s.child;case 14:return c=s.type,p=vi(c,s.pendingProps),p=vi(c.type,p),Lm(n,s,c,p,l);case 15:return Nm(n,s,s.type,s.pendingProps,l);case 17:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:vi(c,p),wl(n,s),s.tag=1,Bn(c)?(n=!0,al(s)):n=!1,Hs(s,l),Em(s,c,p),ef(s,c,p,l),sf(null,s,c,!0,n,l);case 19:return zm(n,s,l);case 22:return Im(n,s,l)}throw Error(t(156,s.tag))};function cg(n,s){return Ho(n,s)}function B_(n,s,l,c){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,s,l,c){return new B_(n,s,l,c)}function Tf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function z_(n){if(typeof n=="function")return Tf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===W)return 14}return 2}function Dr(n,s){var l=n.alternate;return l===null?(l=li(n.tag,s,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=s,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,s=n.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Ul(n,s,l,c,p,x){var A=2;if(c=n,typeof n=="function")Tf(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case B:return as(l.children,p,x,s);case w:A=8,p|=8;break;case I:return n=li(12,l,s,p|2),n.elementType=I,n.lanes=x,n;case he:return n=li(13,l,s,p),n.elementType=he,n.lanes=x,n;case le:return n=li(19,l,s,p),n.elementType=le,n.lanes=x,n;case J:return Fl(l,p,x,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:A=10;break e;case z:A=9;break e;case q:A=11;break e;case W:A=14;break e;case ee:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=li(A,l,s,p),s.elementType=n,s.type=c,s.lanes=x,s}function as(n,s,l,c){return n=li(7,n,c,s),n.lanes=l,n}function Fl(n,s,l,c){return n=li(22,n,c,s),n.elementType=J,n.lanes=l,n.stateNode={isHidden:!1},n}function bf(n,s,l){return n=li(6,n,null,s),n.lanes=l,n}function Af(n,s,l){return s=li(4,n.children!==null?n.children:[],n.key,s),s.lanes=l,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function V_(n,s,l,c,p){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Rf(n,s,l,c,p,x,A,U,G){return n=new V_(n,s,l,U,G),s===1?(s=1,x===!0&&(s|=8)):s=0,x=li(3,null,null,s),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(x),n}function H_(n,s,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:s,implementation:l}}function fg(n){if(!n)return Tr;n=n._reactInternals;e:{if(Ai(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Bn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Bn(l))return Bp(n,l,s)}return s}function dg(n,s,l,c,p,x,A,U,G){return n=Rf(l,c,!0,n,p,x,A,U,G),n.context=fg(null),l=n.current,c=Nn(),p=Nr(l),x=Ji(c,p),x.callback=s??null,Rr(l,x,p),n.current.lanes=p,xt(n,p,c),Hn(n,c),n}function Ol(n,s,l,c){var p=s.current,x=Nn(),A=Nr(p);return l=fg(l),s.context===null?s.context=l:s.pendingContext=l,s=Ji(x,A),s.payload={element:n},c=c===void 0?null:c,c!==null&&(s.callback=c),n=Rr(p,s,A),n!==null&&(yi(n,p,A,x),pl(n,p,A)),A}function kl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<s?l:s}}function Cf(n,s){hg(n,s),(n=n.alternate)&&hg(n,s)}function G_(){return null}var pg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Pf(n){this._internalRoot=n}Bl.prototype.render=Pf.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Ol(n,s,null,null)},Bl.prototype.unmount=Pf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;is(function(){Ol(null,n,null,null)}),s[$i]=null}};function Bl(n){this._internalRoot=n}Bl.prototype.unstable_scheduleHydration=function(n){if(n){var s=Ut();n={blockedOn:null,target:n,priority:s};for(var l=0;l<yr.length&&s!==0&&s<yr[l].priority;l++);yr.splice(l,0,n),l===0&&ep(n)}};function Lf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function zl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mg(){}function W_(n,s,l,c,p){if(p){if(typeof c=="function"){var x=c;c=function(){var de=kl(A);x.call(de)}}var A=dg(s,c,n,0,null,!1,!1,"",mg);return n._reactRootContainer=A,n[$i]=A.current,Ga(n.nodeType===8?n.parentNode:n),is(),A}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var U=c;c=function(){var de=kl(G);U.call(de)}}var G=Rf(n,0,!1,null,null,!1,!1,"",mg);return n._reactRootContainer=G,n[$i]=G.current,Ga(n.nodeType===8?n.parentNode:n),is(function(){Ol(s,G,l,c)}),G}function Vl(n,s,l,c,p){var x=l._reactRootContainer;if(x){var A=x;if(typeof p=="function"){var U=p;p=function(){var G=kl(A);U.call(G)}}Ol(s,A,n,p)}else A=W_(l,s,n,p,c);return kl(A)}Nt=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var l=At(s.pendingLanes);l!==0&&(On(s,l|1),Hn(s,Zt()),(Rt&6)===0&&($s=Zt()+500,br()))}break;case 13:is(function(){var c=Zi(n,1);if(c!==null){var p=Nn();yi(c,n,1,p)}}),Cf(n,1)}},jt=function(n){if(n.tag===13){var s=Zi(n,134217728);if(s!==null){var l=Nn();yi(s,n,134217728,l)}Cf(n,134217728)}},hi=function(n){if(n.tag===13){var s=Nr(n),l=Zi(n,s);if(l!==null){var c=Nn();yi(l,n,s,c)}Cf(n,s)}},Ut=function(){return _t},pi=function(n,s){var l=_t;try{return _t=n,s()}finally{_t=l}},Ke=function(n,s,l){switch(s){case"input":if(Ot(n,l),s=l.name,l.type==="radio"&&s!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==n&&c.form===n.form){var p=rl(c);if(!p)throw Error(t(90));It(c),Ot(c,p)}}}break;case"textarea":ge(n,l);break;case"select":s=l.value,s!=null&&Bt(n,!!l.multiple,s,!1)}},De=Mf,we=is;var j_={usingClientEntryPoint:!1,Events:[Xa,Ds,rl,ve,Ve,Mf]},ao={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X_={bundleType:ao.bundleType,version:ao.version,rendererPackageName:ao.rendererPackageName,rendererConfig:ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Aa(n),n===null?null:n.stateNode},findFiberByHostInstance:ao.findFiberByHostInstance||G_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{re=Hl.inject(X_),Oe=Hl}catch{}}return Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j_,Gn.createPortal=function(n,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lf(s))throw Error(t(200));return H_(n,s,null,l)},Gn.createRoot=function(n,s){if(!Lf(n))throw Error(t(299));var l=!1,c="",p=pg;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Rf(n,1,!1,null,null,l,!1,c,p),n[$i]=s.current,Ga(n.nodeType===8?n.parentNode:n),new Pf(s)},Gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Aa(s),n=n===null?null:n.stateNode,n},Gn.flushSync=function(n){return is(n)},Gn.hydrate=function(n,s,l){if(!zl(s))throw Error(t(200));return Vl(null,n,s,!0,l)},Gn.hydrateRoot=function(n,s,l){if(!Lf(n))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,x="",A=pg;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=dg(s,null,n,1,l??null,p,!1,x,A),n[$i]=s.current,Ga(n),c)for(n=0;n<c.length;n++)l=c[n],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Bl(s)},Gn.render=function(n,s,l){if(!zl(s))throw Error(t(200));return Vl(null,n,s,!1,l)},Gn.unmountComponentAtNode=function(n){if(!zl(n))throw Error(t(40));return n._reactRootContainer?(is(function(){Vl(null,null,n,!1,function(){n._reactRootContainer=null,n[$i]=null})}),!0):!1},Gn.unstable_batchedUpdates=Mf,Gn.unstable_renderSubtreeIntoContainer=function(n,s,l,c){if(!zl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Vl(n,s,l,!1,c)},Gn.version="18.3.1-next-f1338f8080-20240426",Gn}var Eg;function ey(){if(Eg)return Df.exports;Eg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Df.exports=Q_(),Df.exports}var wg;function ty(){if(wg)return Gl;wg=1;var r=ey();return Gl.createRoot=r.createRoot,Gl.hydrateRoot=r.hydrateRoot,Gl}var ny=ty(),Q=Sh();/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Tg="popstate";function iy(r={}){function e(i,a){let{pathname:o,search:u,hash:f}=i.location;return wd("",{pathname:o,search:u,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){return typeof a=="string"?a:bo(a)}return sy(e,t,null,r)}function tn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function zi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ry(){return Math.random().toString(36).substring(2,10)}function bg(r,e){return{usr:r.state,key:r.key,idx:e}}function wd(r,e,t=null,i){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ya(e):e,state:t,key:e&&e.key||i||ry()}}function bo({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function ya(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let i=r.indexOf("?");i>=0&&(e.search=r.substring(i),r=r.substring(0,i)),r&&(e.pathname=r)}return e}function sy(r,e,t,i={}){let{window:a=document.defaultView,v5Compat:o=!1}=i,u=a.history,f="POP",d=null,h=g();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function g(){return(u.state||{idx:null}).idx}function v(){f="POP";let y=g(),S=y==null?null:y-h;h=y,d&&d({action:f,location:b.location,delta:S})}function m(y,S){f="PUSH";let R=wd(b.location,y,S);h=g()+1;let T=bg(R,h),P=b.createHref(R);try{u.pushState(T,"",P)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;a.location.assign(P)}o&&d&&d({action:f,location:b.location,delta:1})}function _(y,S){f="REPLACE";let R=wd(b.location,y,S);h=g();let T=bg(R,h),P=b.createHref(R);u.replaceState(T,"",P),o&&d&&d({action:f,location:b.location,delta:0})}function M(y){return ay(y)}let b={get action(){return f},get location(){return r(a,u)},listen(y){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(Tg,v),d=y,()=>{a.removeEventListener(Tg,v),d=null}},createHref(y){return e(a,y)},createURL:M,encodeLocation(y){let S=M(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:_,go(y){return u.go(y)}};return b}function ay(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),tn(t,"No window.location.(origin|href) available to create URL");let i=typeof r=="string"?r:bo(r);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function av(r,e,t="/"){return oy(r,e,t,!1)}function oy(r,e,t,i){let a=typeof e=="string"?ya(e):e,o=dr(a.pathname||"/",t);if(o==null)return null;let u=ov(r);ly(u);let f=null;for(let d=0;f==null&&d<u.length;++d){let h=_y(o);f=vy(u[d],h,i)}return f}function ov(r,e=[],t=[],i="",a=!1){let o=(u,f,d=a,h)=>{let g={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(i)&&d)return;tn(g.relativePath.startsWith(i),`Absolute route path "${g.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(i.length)}let v=ur([i,g.relativePath]),m=t.concat(g);u.children&&u.children.length>0&&(tn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),ov(u.children,e,m,v,d)),!(u.path==null&&!u.index)&&e.push({path:v,score:my(v,u.index),routesMeta:m})};return r.forEach((u,f)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))o(u,f);else for(let h of lv(u.path))o(u,f,!0,h)}),e}function lv(r){let e=r.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(i.length===0)return a?[o,""]:[o];let u=lv(i.join("/")),f=[];return f.push(...u.map(d=>d===""?o:[o,d].join("/"))),a&&f.push(...u),f.map(d=>r.startsWith("/")&&d===""?"/":d)}function ly(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:gy(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var uy=/^:[\w-]+$/,cy=3,fy=2,dy=1,hy=10,py=-2,Ag=r=>r==="*";function my(r,e){let t=r.split("/"),i=t.length;return t.some(Ag)&&(i+=py),e&&(i+=fy),t.filter(a=>!Ag(a)).reduce((a,o)=>a+(uy.test(o)?cy:o===""?dy:hy),i)}function gy(r,e){return r.length===e.length&&r.slice(0,-1).every((i,a)=>i===e[a])?r[r.length-1]-e[e.length-1]:0}function vy(r,e,t=!1){let{routesMeta:i}=r,a={},o="/",u=[];for(let f=0;f<i.length;++f){let d=i[f],h=f===i.length-1,g=o==="/"?e:e.slice(o.length)||"/",v=Nu({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},g),m=d.route;if(!v&&h&&t&&!i[i.length-1].route.index&&(v=Nu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},g)),!v)return null;Object.assign(a,v.params),u.push({params:a,pathname:ur([o,v.pathname]),pathnameBase:Ey(ur([o,v.pathnameBase])),route:m}),v.pathnameBase!=="/"&&(o=ur([o,v.pathnameBase]))}return u}function Nu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,i]=xy(r.path,r.caseSensitive,r.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:i.reduce((h,{paramName:g,isOptional:v},m)=>{if(g==="*"){let M=f[m]||"";u=o.slice(0,o.length-M.length).replace(/(.)\/+$/,"$1")}const _=f[m];return v&&!_?h[g]=void 0:h[g]=(_||"").replace(/%2F/g,"/"),h},{}),pathname:o,pathnameBase:u,pattern:r}}function xy(r,e=!1,t=!0){zi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let i=[],a="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,d)=>(i.push({paramName:f,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(i.push({paramName:"*"}),a+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":r!==""&&r!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function _y(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function dr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=r.charAt(t);return i&&i!=="/"?null:r.slice(t)||"/"}var yy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Sy(r,e="/"){let{pathname:t,search:i="",hash:a=""}=typeof r=="string"?ya(r):r,o;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?o=Rg(t.substring(1),"/"):o=Rg(t,e)):o=e,{pathname:o,search:wy(i),hash:Ty(a)}}function Rg(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Of(r,e,t,i){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function My(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function uv(r){let e=My(r);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function cv(r,e,t,i=!1){let a;typeof r=="string"?a=ya(r):(a={...r},tn(!a.pathname||!a.pathname.includes("?"),Of("?","pathname","search",a)),tn(!a.pathname||!a.pathname.includes("#"),Of("#","pathname","hash",a)),tn(!a.search||!a.search.includes("#"),Of("#","search","hash",a)));let o=r===""||a.pathname==="",u=o?"/":a.pathname,f;if(u==null)f=t;else{let v=e.length-1;if(!i&&u.startsWith("..")){let m=u.split("/");for(;m[0]==="..";)m.shift(),v-=1;a.pathname=m.join("/")}f=v>=0?e[v]:"/"}let d=Sy(a,f),h=u&&u!=="/"&&u.endsWith("/"),g=(o||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||g)&&(d.pathname+="/"),d}var ur=r=>r.join("/").replace(/\/\/+/g,"/"),Ey=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),wy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Ty=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,by=class{constructor(r,e,t,i=!1){this.status=r,this.statusText=e||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Ay(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Ry(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var fv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function dv(r,e){let t=r;if(typeof t!="string"||!yy.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,a=!1;if(fv)try{let o=new URL(window.location.href),u=t.startsWith("//")?new URL(o.protocol+t):new URL(t),f=dr(u.pathname,e);u.origin===o.origin&&f!=null?t=f+u.search+u.hash:a=!0}catch{zi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:a,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var hv=["POST","PUT","PATCH","DELETE"];new Set(hv);var Cy=["GET",...hv];new Set(Cy);var Sa=Q.createContext(null);Sa.displayName="DataRouter";var Gu=Q.createContext(null);Gu.displayName="DataRouterState";var Py=Q.createContext(!1),pv=Q.createContext({isTransitioning:!1});pv.displayName="ViewTransition";var Ly=Q.createContext(new Map);Ly.displayName="Fetchers";var Ny=Q.createContext(null);Ny.displayName="Await";var di=Q.createContext(null);di.displayName="Navigation";var Uo=Q.createContext(null);Uo.displayName="Location";var mr=Q.createContext({outlet:null,matches:[],isDataRoute:!1});mr.displayName="Route";var Mh=Q.createContext(null);Mh.displayName="RouteError";var mv="REACT_ROUTER_ERROR",Iy="REDIRECT",Dy="ROUTE_ERROR_RESPONSE";function Uy(r){if(r.startsWith(`${mv}:${Iy}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Fy(r){if(r.startsWith(`${mv}:${Dy}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new by(e.status,e.statusText,e.data)}catch{}}function Oy(r,{relative:e}={}){tn(Fo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=Q.useContext(di),{hash:a,pathname:o,search:u}=Oo(r,{relative:e}),f=o;return t!=="/"&&(f=o==="/"?t:ur([t,o])),i.createHref({pathname:f,search:u,hash:a})}function Fo(){return Q.useContext(Uo)!=null}function _s(){return tn(Fo(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(Uo).location}var gv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function vv(r){Q.useContext(di).static||Q.useLayoutEffect(r)}function Wu(){let{isDataRoute:r}=Q.useContext(mr);return r?Ky():ky()}function ky(){tn(Fo(),"useNavigate() may be used only in the context of a <Router> component.");let r=Q.useContext(Sa),{basename:e,navigator:t}=Q.useContext(di),{matches:i}=Q.useContext(mr),{pathname:a}=_s(),o=JSON.stringify(uv(i)),u=Q.useRef(!1);return vv(()=>{u.current=!0}),Q.useCallback((d,h={})=>{if(zi(u.current,gv),!u.current)return;if(typeof d=="number"){t.go(d);return}let g=cv(d,JSON.parse(o),a,h.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ur([e,g.pathname])),(h.replace?t.replace:t.push)(g,h.state,h)},[e,t,o,a,r])}Q.createContext(null);function Oo(r,{relative:e}={}){let{matches:t}=Q.useContext(mr),{pathname:i}=_s(),a=JSON.stringify(uv(t));return Q.useMemo(()=>cv(r,JSON.parse(a),i,e==="path"),[r,a,i,e])}function By(r,e){return xv(r,e)}function xv(r,e,t,i,a){var R;tn(Fo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=Q.useContext(di),{matches:u}=Q.useContext(mr),f=u[u.length-1],d=f?f.params:{},h=f?f.pathname:"/",g=f?f.pathnameBase:"/",v=f&&f.route;{let T=v&&v.path||"";yv(h,!v||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let m=_s(),_;if(e){let T=typeof e=="string"?ya(e):e;tn(g==="/"||((R=T.pathname)==null?void 0:R.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${T.pathname}" was given in the \`location\` prop.`),_=T}else _=m;let M=_.pathname||"/",b=M;if(g!=="/"){let T=g.replace(/^\//,"").split("/");b="/"+M.replace(/^\//,"").split("/").slice(T.length).join("/")}let y=av(r,{pathname:b});zi(v||y!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),zi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=Wy(y&&y.map(T=>Object.assign({},T,{params:Object.assign({},d,T.params),pathname:ur([g,o.encodeLocation?o.encodeLocation(T.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?g:ur([g,o.encodeLocation?o.encodeLocation(T.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),u,t,i,a);return e&&S?Q.createElement(Uo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},S):S}function zy(){let r=qy(),e=Ay(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",r),u=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:o},"ErrorBoundary")," or"," ",Q.createElement("code",{style:o},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),t?Q.createElement("pre",{style:a},t):null,u)}var Vy=Q.createElement(zy,null),_v=class extends Q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=Fy(r.digest);t&&(r=t)}let e=r!==void 0?Q.createElement(mr.Provider,{value:this.props.routeContext},Q.createElement(Mh.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?Q.createElement(Hy,{error:r},e):e}};_v.contextType=Py;var kf=new WeakMap;function Hy({children:r,error:e}){let{basename:t}=Q.useContext(di);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=Uy(e.digest);if(i){let a=kf.get(e);if(a)throw a;let o=dv(i.location,t);if(fv&&!kf.get(e))if(o.isExternal||i.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:i.replace}));throw kf.set(e,u),u}return Q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return r}function Gy({routeContext:r,match:e,children:t}){let i=Q.useContext(Sa);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(mr.Provider,{value:r},t)}function Wy(r,e=[],t=null,i=null,a=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,u=t==null?void 0:t.errors;if(u!=null){let g=o.findIndex(v=>v.route.id&&(u==null?void 0:u[v.route.id])!==void 0);tn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let f=!1,d=-1;if(t)for(let g=0;g<o.length;g++){let v=o[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(d=g),v.route.id){let{loaderData:m,errors:_}=t,M=v.route.loader&&!m.hasOwnProperty(v.route.id)&&(!_||_[v.route.id]===void 0);if(v.route.lazy||M){f=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}let h=t&&i?(g,v)=>{var m,_;i(g,{location:t.location,params:((_=(m=t.matches)==null?void 0:m[0])==null?void 0:_.params)??{},unstable_pattern:Ry(t.matches),errorInfo:v})}:void 0;return o.reduceRight((g,v,m)=>{let _,M=!1,b=null,y=null;t&&(_=u&&v.route.id?u[v.route.id]:void 0,b=v.route.errorElement||Vy,f&&(d<0&&m===0?(yv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,y=null):d===m&&(M=!0,y=v.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),R=()=>{let T;return _?T=b:M?T=y:v.route.Component?T=Q.createElement(v.route.Component,null):v.route.element?T=v.route.element:T=g,Q.createElement(Gy,{match:v,routeContext:{outlet:g,matches:S,isDataRoute:t!=null},children:T})};return t&&(v.route.ErrorBoundary||v.route.errorElement||m===0)?Q.createElement(_v,{location:t.location,revalidation:t.revalidation,component:b,error:_,children:R(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:h}):R()},null)}function Eh(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jy(r){let e=Q.useContext(Sa);return tn(e,Eh(r)),e}function Xy(r){let e=Q.useContext(Gu);return tn(e,Eh(r)),e}function $y(r){let e=Q.useContext(mr);return tn(e,Eh(r)),e}function wh(r){let e=$y(r),t=e.matches[e.matches.length-1];return tn(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function Yy(){return wh("useRouteId")}function qy(){var i;let r=Q.useContext(Mh),e=Xy("useRouteError"),t=wh("useRouteError");return r!==void 0?r:(i=e.errors)==null?void 0:i[t]}function Ky(){let{router:r}=jy("useNavigate"),e=wh("useNavigate"),t=Q.useRef(!1);return vv(()=>{t.current=!0}),Q.useCallback(async(a,o={})=>{zi(t.current,gv),t.current&&(typeof a=="number"?await r.navigate(a):await r.navigate(a,{fromRouteId:e,...o}))},[r,e])}var Cg={};function yv(r,e,t){!e&&!Cg[r]&&(Cg[r]=!0,zi(!1,t))}Q.memo(Zy);function Zy({routes:r,future:e,state:t,onError:i}){return xv(r,void 0,t,i,e)}function Eu(r){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Jy({basename:r="/",children:e=null,location:t,navigationType:i="POP",navigator:a,static:o=!1,unstable_useTransitions:u}){tn(!Fo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),d=Q.useMemo(()=>({basename:f,navigator:a,static:o,unstable_useTransitions:u,future:{}}),[f,a,o,u]);typeof t=="string"&&(t=ya(t));let{pathname:h="/",search:g="",hash:v="",state:m=null,key:_="default"}=t,M=Q.useMemo(()=>{let b=dr(h,f);return b==null?null:{location:{pathname:b,search:g,hash:v,state:m,key:_},navigationType:i}},[f,h,g,v,m,_,i]);return zi(M!=null,`<Router basename="${f}"> is not able to match the URL "${h}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:Q.createElement(di.Provider,{value:d},Q.createElement(Uo.Provider,{children:e,value:M}))}function Qy({children:r,location:e}){return By(Td(r),e)}function Td(r,e=[]){let t=[];return Q.Children.forEach(r,(i,a)=>{if(!Q.isValidElement(i))return;let o=[...e,a];if(i.type===Q.Fragment){t.push.apply(t,Td(i.props.children,o));return}tn(i.type===Eu,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=Td(i.props.children,o)),t.push(u)}),t}var wu="get",Tu="application/x-www-form-urlencoded";function ju(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function eS(r){return ju(r)&&r.tagName.toLowerCase()==="button"}function tS(r){return ju(r)&&r.tagName.toLowerCase()==="form"}function nS(r){return ju(r)&&r.tagName.toLowerCase()==="input"}function iS(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function rS(r,e){return r.button===0&&(!e||e==="_self")&&!iS(r)}var Wl=null;function sS(){if(Wl===null)try{new FormData(document.createElement("form"),0),Wl=!1}catch{Wl=!0}return Wl}var aS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Bf(r){return r!=null&&!aS.has(r)?(zi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Tu}"`),null):r}function oS(r,e){let t,i,a,o,u;if(tS(r)){let f=r.getAttribute("action");i=f?dr(f,e):null,t=r.getAttribute("method")||wu,a=Bf(r.getAttribute("enctype"))||Tu,o=new FormData(r)}else if(eS(r)||nS(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=r.getAttribute("formaction")||f.getAttribute("action");if(i=d?dr(d,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||wu,a=Bf(r.getAttribute("formenctype"))||Bf(f.getAttribute("enctype"))||Tu,o=new FormData(f,r),!sS()){let{name:h,type:g,value:v}=r;if(g==="image"){let m=h?`${h}.`:"";o.append(`${m}x`,"0"),o.append(`${m}y`,"0")}else h&&o.append(h,v)}}else{if(ju(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=wu,i=null,a=Tu,u=r}return o&&a==="text/plain"&&(u=o,o=void 0),{action:i,method:t.toLowerCase(),encType:a,formData:o,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Th(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function lS(r,e,t,i){let a=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return t?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${i}`:a.pathname=`${a.pathname}.${i}`:a.pathname==="/"?a.pathname=`_root.${i}`:e&&dr(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function uS(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cS(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function fS(r,e,t){let i=await Promise.all(r.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await uS(o,t);return u.links?u.links():[]}return[]}));return mS(i.flat(1).filter(cS).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Pg(r,e,t,i,a,o){let u=(d,h)=>t[h]?d.route.id!==t[h].route.id:!0,f=(d,h)=>{var g;return t[h].pathname!==d.pathname||((g=t[h].route.path)==null?void 0:g.endsWith("*"))&&t[h].params["*"]!==d.params["*"]};return o==="assets"?e.filter((d,h)=>u(d,h)||f(d,h)):o==="data"?e.filter((d,h)=>{var v;let g=i.routes[d.route.id];if(!g||!g.hasLoader)return!1;if(u(d,h)||f(d,h))return!0;if(d.route.shouldRevalidate){let m=d.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(r,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function dS(r,e,{includeHydrateFallback:t}={}){return hS(r.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function hS(r){return[...new Set(r)]}function pS(r){let e={},t=Object.keys(r).sort();for(let i of t)e[i]=r[i];return e}function mS(r,e){let t=new Set;return new Set(e),r.reduce((i,a)=>{let o=JSON.stringify(pS(a));return t.has(o)||(t.add(o),i.push({key:o,link:a})),i},[])}function Sv(){let r=Q.useContext(Sa);return Th(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function gS(){let r=Q.useContext(Gu);return Th(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var bh=Q.createContext(void 0);bh.displayName="FrameworkContext";function Mv(){let r=Q.useContext(bh);return Th(r,"You must render this element inside a <HydratedRouter> element"),r}function vS(r,e){let t=Q.useContext(bh),[i,a]=Q.useState(!1),[o,u]=Q.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:h,onMouseLeave:g,onTouchStart:v}=e,m=Q.useRef(null);Q.useEffect(()=>{if(r==="render"&&u(!0),r==="viewport"){let b=S=>{S.forEach(R=>{u(R.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return m.current&&y.observe(m.current),()=>{y.disconnect()}}},[r]),Q.useEffect(()=>{if(i){let b=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(b)}}},[i]);let _=()=>{a(!0)},M=()=>{a(!1),u(!1)};return t?r!=="intent"?[o,m,{}]:[o,m,{onFocus:lo(f,_),onBlur:lo(d,M),onMouseEnter:lo(h,_),onMouseLeave:lo(g,M),onTouchStart:lo(v,_)}]:[!1,m,{}]}function lo(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function xS({page:r,...e}){let{router:t}=Sv(),i=Q.useMemo(()=>av(t.routes,r,t.basename),[t.routes,r,t.basename]);return i?Q.createElement(yS,{page:r,matches:i,...e}):null}function _S(r){let{manifest:e,routeModules:t}=Mv(),[i,a]=Q.useState([]);return Q.useEffect(()=>{let o=!1;return fS(r,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[r,e,t]),i}function yS({page:r,matches:e,...t}){let i=_s(),{future:a,manifest:o,routeModules:u}=Mv(),{basename:f}=Sv(),{loaderData:d,matches:h}=gS(),g=Q.useMemo(()=>Pg(r,e,h,o,i,"data"),[r,e,h,o,i]),v=Q.useMemo(()=>Pg(r,e,h,o,i,"assets"),[r,e,h,o,i]),m=Q.useMemo(()=>{if(r===i.pathname+i.search+i.hash)return[];let b=new Set,y=!1;if(e.forEach(R=>{var P;let T=o.routes[R.route.id];!T||!T.hasLoader||(!g.some(F=>F.route.id===R.route.id)&&R.route.id in d&&((P=u[R.route.id])!=null&&P.shouldRevalidate)||T.hasClientLoader?y=!0:b.add(R.route.id))}),b.size===0)return[];let S=lS(r,f,a.unstable_trailingSlashAwareDataRequests,"data");return y&&b.size>0&&S.searchParams.set("_routes",e.filter(R=>b.has(R.route.id)).map(R=>R.route.id).join(",")),[S.pathname+S.search]},[f,a.unstable_trailingSlashAwareDataRequests,d,i,o,g,e,r,u]),_=Q.useMemo(()=>dS(v,o),[v,o]),M=_S(v);return Q.createElement(Q.Fragment,null,m.map(b=>Q.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...t})),_.map(b=>Q.createElement("link",{key:b,rel:"modulepreload",href:b,...t})),M.map(({key:b,link:y})=>Q.createElement("link",{key:b,nonce:t.nonce,...y,crossOrigin:y.crossOrigin??t.crossOrigin})))}function SS(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var MS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{MS&&(window.__reactRouterVersion="7.13.0")}catch{}function ES({basename:r,children:e,unstable_useTransitions:t,window:i}){let a=Q.useRef();a.current==null&&(a.current=iy({window:i,v5Compat:!0}));let o=a.current,[u,f]=Q.useState({action:o.action,location:o.location}),d=Q.useCallback(h=>{t===!1?f(h):Q.startTransition(()=>f(h))},[t]);return Q.useLayoutEffect(()=>o.listen(d),[o,d]),Q.createElement(Jy,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o,unstable_useTransitions:t})}var Ev=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wv=Q.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:a,reloadDocument:o,replace:u,state:f,target:d,to:h,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:m,..._},M){let{basename:b,unstable_useTransitions:y}=Q.useContext(di),S=typeof h=="string"&&Ev.test(h),R=dv(h,b);h=R.to;let T=Oy(h,{relative:a}),[P,F,N]=vS(i,_),B=AS(h,{replace:u,state:f,target:d,preventScrollReset:g,relative:a,viewTransition:v,unstable_defaultShouldRevalidate:m,unstable_useTransitions:y});function w(V){e&&e(V),V.defaultPrevented||B(V)}let I=Q.createElement("a",{..._,...N,href:R.absoluteURL||T,onClick:R.isExternal||o?e:w,ref:SS(M,F),target:d,"data-discover":!S&&t==="render"?"true":void 0});return P&&!S?Q.createElement(Q.Fragment,null,I,Q.createElement(xS,{page:T})):I});wv.displayName="Link";var wS=Q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:a=!1,style:o,to:u,viewTransition:f,children:d,...h},g){let v=Oo(u,{relative:h.relative}),m=_s(),_=Q.useContext(Gu),{navigator:M,basename:b}=Q.useContext(di),y=_!=null&&NS(v)&&f===!0,S=M.encodeLocation?M.encodeLocation(v).pathname:v.pathname,R=m.pathname,T=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;t||(R=R.toLowerCase(),T=T?T.toLowerCase():null,S=S.toLowerCase()),T&&b&&(T=dr(T,b)||T);const P=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let F=R===S||!a&&R.startsWith(S)&&R.charAt(P)==="/",N=T!=null&&(T===S||!a&&T.startsWith(S)&&T.charAt(S.length)==="/"),B={isActive:F,isPending:N,isTransitioning:y},w=F?e:void 0,I;typeof i=="function"?I=i(B):I=[i,F?"active":null,N?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let V=typeof o=="function"?o(B):o;return Q.createElement(wv,{...h,"aria-current":w,className:I,ref:g,style:V,to:u,viewTransition:f},typeof d=="function"?d(B):d)});wS.displayName="NavLink";var TS=Q.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:a,state:o,method:u=wu,action:f,onSubmit:d,relative:h,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:m,..._},M)=>{let{unstable_useTransitions:b}=Q.useContext(di),y=PS(),S=LS(f,{relative:h}),R=u.toLowerCase()==="get"?"get":"post",T=typeof f=="string"&&Ev.test(f),P=F=>{if(d&&d(F),F.defaultPrevented)return;F.preventDefault();let N=F.nativeEvent.submitter,B=(N==null?void 0:N.getAttribute("formmethod"))||u,w=()=>y(N||F.currentTarget,{fetcherKey:e,method:B,navigate:t,replace:a,state:o,relative:h,preventScrollReset:g,viewTransition:v,unstable_defaultShouldRevalidate:m});b&&t!==!1?Q.startTransition(()=>w()):w()};return Q.createElement("form",{ref:M,method:R,action:S,onSubmit:i?d:P,..._,"data-discover":!T&&r==="render"?"true":void 0})});TS.displayName="Form";function bS(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tv(r){let e=Q.useContext(Sa);return tn(e,bS(r)),e}function AS(r,{target:e,replace:t,state:i,preventScrollReset:a,relative:o,viewTransition:u,unstable_defaultShouldRevalidate:f,unstable_useTransitions:d}={}){let h=Wu(),g=_s(),v=Oo(r,{relative:o});return Q.useCallback(m=>{if(rS(m,e)){m.preventDefault();let _=t!==void 0?t:bo(g)===bo(v),M=()=>h(r,{replace:_,state:i,preventScrollReset:a,relative:o,viewTransition:u,unstable_defaultShouldRevalidate:f});d?Q.startTransition(()=>M()):M()}},[g,h,v,t,i,e,r,a,o,u,f,d])}var RS=0,CS=()=>`__${String(++RS)}__`;function PS(){let{router:r}=Tv("useSubmit"),{basename:e}=Q.useContext(di),t=Yy(),i=r.fetch,a=r.navigate;return Q.useCallback(async(o,u={})=>{let{action:f,method:d,encType:h,formData:g,body:v}=oS(o,e);if(u.navigate===!1){let m=u.fetcherKey||CS();await i(m,t,u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:v,formMethod:u.method||d,formEncType:u.encType||h,flushSync:u.flushSync})}else await a(u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:g,body:v,formMethod:u.method||d,formEncType:u.encType||h,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[i,a,e,t])}function LS(r,{relative:e}={}){let{basename:t}=Q.useContext(di),i=Q.useContext(mr);tn(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),o={...Oo(r||".",{relative:e})},u=_s();if(r==null){o.search=u.search;let f=new URLSearchParams(o.search),d=f.getAll("index");if(d.some(g=>g==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let g=f.toString();o.search=g?`?${g}`:""}}return(!r||r===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:ur([t,o.pathname])),bo(o)}function NS(r,{relative:e}={}){let t=Q.useContext(pv);tn(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Tv("useViewTransitionState"),a=Oo(r,{relative:e});if(!t.isTransitioning)return!1;let o=dr(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=dr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Nu(a.pathname,u)!=null||Nu(a.pathname,o)!=null}const IS="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function DS(r){const[e,t]=Q.useState(!1),i=()=>{t(!0)},{src:a,alt:o,style:u,className:f,...d}=r;return e?H.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${f??""}`,style:u,children:H.jsx("div",{className:"flex items-center justify-center w-full h-full",children:H.jsx("img",{src:IS,alt:"Error loading image",...d,"data-original-url":a})})}):H.jsx("img",{src:a,alt:o,className:f,style:u,...d,onError:i})}const US="/assets/iconaws-CrGCPrQX.png";function Kt(r){const e=Math.sin(r+1)*1e4;return e-Math.floor(e)}const FS=["W","O","R","D","L","E","G","R","U"],OS=[{num:"1",title:"Setup AR Mode",body:"Point your camera at a flat surface and wait for plane detection."},{num:"2",title:"Smash Asteroids",body:"Tap on 3D asteroids to shatter them and collect falling letters."},{num:"3",title:"Solve Words",body:"Arrange letters to complete 5-letter words from the Warden's Codex."},{num:"4",title:"Color Feedback",body:null,feedback:[{dot:"#10b981",label:"Green",desc:"Correct letter, correct position"},{dot:"#facc15",label:"Yellow",desc:"Correct letter, wrong position"},{dot:"#6b7280",label:"Gray",desc:"Letter not in word"}]},{num:"5",title:"Defeat the Boss",body:"Survive enemy attacks and complete the Final Seal word to defeat the Rift Overlord."}];function kS(){const r=Wu(),[e,t]=Q.useState(!1),i=Q.useMemo(()=>Array.from({length:30},(d,h)=>({id:h,x:Kt(h*7.31)*100,y:Kt(h*3.71)*100,size:Kt(h*5.13)>.8?3:2,delay:`${Kt(h*2.91)*4}s`,duration:`${1.5+Kt(h*1.33)*2.5}s`})),[]),a=Q.useMemo(()=>FS.map((d,h)=>({id:h,char:d,x:Kt(h*11.71)*82+5,y:Kt(h*8.31)*75+5,color:["#10b981","#facc15","#a78bfa"][h%3],border:["#10b981","#facc15","#8b5cf6"][h%3],delay:`${Kt(h*6.71)*4}s`,duration:`${5+Kt(h*9.11)*4}s`,drift:`${(Kt(h*4.11)-.5)*40}px`})),[]),o=Q.useMemo(()=>Array.from({length:7},(d,h)=>({id:h,x:Kt(h*13.11)*88+3,size:Math.floor(4+Kt(h*5.91)*6),delay:`${Kt(h*7.71)*7}s`,duration:`${3+Kt(h*2.31)*3}s`,xDrift:`${(Kt(h*3.71)-.5)*50}px`})),[]),u=Q.useMemo(()=>Array.from({length:14},(d,h)=>({id:h,x:Kt(h*17.31)*85+5,color:Kt(h*6.31)>.5?"#f97316":"#facc15",size:Math.floor(2+Kt(h*3.91)*3),delay:`${Kt(h*4.91)*6}s`,duration:`${2+Kt(h*8.11)*2.5}s`})),[]),f=Q.useMemo(()=>Array.from({length:8},(d,h)=>({id:h,x:Kt(h*9.31)*80+10,y:Kt(h*6.11)*70+15,delay:`${Kt(h*3.51)*6}s`,duration:`${.4+Kt(h*7.11)*.5}s`})),[]);return H.jsxs("div",{className:"min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col items-center justify-between px-6 py-12 font-['Press_Start_2P',_monospace] relative overflow-hidden",children:[H.jsx("style",{children:`
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
      `}),i.map(d=>H.jsx("div",{className:"absolute bg-white pointer-events-none",style:{left:`${d.x}%`,top:`${d.y}%`,width:`${d.size}px`,height:`${d.size}px`,animation:`twinkle ${d.duration} ${d.delay} ease-in-out infinite`,zIndex:1}},`star-${d.id}`)),a.map(d=>H.jsx("div",{className:"absolute flex items-center justify-center pointer-events-none select-none",style:{left:`${d.x}%`,top:`${d.y}%`,width:"22px",height:"22px",border:`2px solid ${d.border}`,backgroundColor:"#1a0a2e",color:d.color,fontSize:"8px",fontFamily:"'Press Start 2P', monospace",textShadow:`0 0 8px ${d.color}`,boxShadow:`0 0 6px ${d.border}55, inset 0 0 4px ${d.border}22`,"--drift":d.drift,animation:`letterFloat ${d.duration} ${d.delay} ease-in-out infinite`,zIndex:2},children:d.char},`letter-${d.id}`)),o.map(d=>H.jsx("div",{className:"absolute pointer-events-none",style:{left:`${d.x}%`,top:"-12px",width:`${d.size}px`,height:`${d.size}px`,backgroundColor:"#78716c",boxShadow:"1px 1px 0 #a8a29e, 0 0 4px #f97316","--x-drift":d.xDrift,animation:`meteorFall ${d.duration} ${d.delay} linear infinite`,zIndex:2}},`meteor-${d.id}`)),u.map(d=>H.jsx("div",{className:"absolute pointer-events-none",style:{left:`${d.x}%`,bottom:"8px",width:`${d.size}px`,height:`${d.size}px`,backgroundColor:d.color,boxShadow:`0 0 4px ${d.color}, 0 0 8px ${d.color}88`,animation:`emberRise ${d.duration} ${d.delay} ease-out infinite`,zIndex:2}},`ember-${d.id}`)),f.map(d=>H.jsx("div",{className:"absolute pointer-events-none",style:{left:`${d.x}%`,top:`${d.y}%`,width:"4px",height:"4px",backgroundColor:"#60a5fa",boxShadow:"0 0 6px #3b82f6, 0 0 14px #93c5fd, 2px -2px 0 #bfdbfe, -2px 2px 0 #bfdbfe",animation:`electricSpark ${d.duration} ${d.delay} ease-in-out infinite`,zIndex:2}},`spark-${d.id}`)),H.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
          linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, .3) 25%, rgba(139, 92, 246, .3) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, .3) 75%, rgba(139, 92, 246, .3) 76%, transparent 77%, transparent)
        `,backgroundSize:"20px 20px"}}),H.jsxs("div",{className:"flex flex-col items-center mt-8 relative z-10",children:[H.jsx("div",{className:"w-32 h-32 mb-6 relative border-4 border-[#8b5cf6] bg-[#1a0a2e] p-2",style:{imageRendering:"pixelated",animation:"iconGlow 4s ease-in-out infinite"},children:H.jsx(DS,{src:US,alt:"AR Wordle Smasher Icon",className:"w-full h-full object-contain",style:{imageRendering:"pixelated"}})}),H.jsxs("h1",{className:"text-xl text-center mb-4 leading-relaxed tracking-wide",children:[H.jsx("span",{className:"text-[#10b981]",children:"AR"})," ",H.jsx("span",{className:"text-[#8b5cf6]",children:"WORDLE"}),H.jsx("br",{}),H.jsx("span",{className:"text-[#ec4899]",children:"SMASHER"})]}),H.jsx("p",{className:"text-[8px] text-[#a78bfa] text-center mb-2 tracking-wider uppercase leading-relaxed",children:"The Warden's Codex"})]}),H.jsx("div",{className:"flex flex-col items-center space-y-6 flex-grow justify-center relative z-10 w-full",children:H.jsxs("div",{className:"bg-[#1a0a2e] border-4 border-[#8b5cf6] p-4 w-full relative",children:[H.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsxs("p",{className:"text-[9px] text-white/90 text-center leading-[16px]",children:["Smash meteors in AR, collect letters, and solve puzzles to defeat the"," ",H.jsx("span",{className:"text-[#ec4899]",children:"Rift Overlord"})]})]})}),H.jsxs("div",{className:"w-full space-y-4 mb-8 relative z-10",children:[H.jsxs("button",{onClick:()=>r("/mission"),className:"w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-4 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1",children:[H.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"> START MISSION <"]}),H.jsxs("button",{onClick:()=>t(!0),className:"w-full bg-[#1a0a2e] border-4 border-white/30 text-white/90 py-3 px-6 text-[9px] relative hover:bg-[#2a1a3e] transition-colors active:translate-y-1",children:[H.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"How to Play"]})]}),e&&H.jsx("div",{className:"fixed inset-0 z-50 flex items-end justify-center px-4 pb-0",style:{backgroundColor:"rgba(10,1,24,0.85)",animation:"backdropFadeIn 0.25s ease-out"},onClick:()=>t(!1),children:H.jsxs("div",{className:"w-full max-w-md bg-[#0a0118] border-4 border-[#8b5cf6] relative overflow-y-auto",style:{maxHeight:"88vh",animation:"modalSlideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)"},onClick:d=>d.stopPropagation(),children:[H.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsxs("div",{className:"bg-[#1a0a2e] border-b-4 border-[#8b5cf6] px-5 py-4 flex items-center justify-between",style:{animation:"headerSlideDown 0.3s 0.15s ease-out both"},children:[H.jsx("p",{className:"text-[10px] text-[#8b5cf6] tracking-widest",children:"HOW TO PLAY"}),H.jsx("button",{onClick:()=>t(!1),className:"text-[#a78bfa] hover:text-white text-[9px] transition-colors",children:"✕"})]}),H.jsx("div",{className:"px-5 py-4 space-y-5",children:OS.map((d,h)=>H.jsxs("div",{className:"flex gap-3",style:{animation:`stepFadeIn 0.3s ${.2+h*.07}s ease-out both`},children:[H.jsx("div",{className:"w-6 h-6 flex-shrink-0 flex items-center justify-center border-2 border-[#ec4899] bg-[#1a0a2e]",style:{fontSize:"8px",color:"#ec4899"},children:d.num}),H.jsxs("div",{className:"flex-1",children:[H.jsx("p",{className:"text-[8px] text-[#facc15] mb-1 tracking-wide",children:d.title}),"body"in d&&d.body&&H.jsx("p",{className:"text-[7px] text-white/70 leading-[14px]",children:d.body}),"feedback"in d&&d.feedback&&H.jsx("div",{className:"space-y-1.5 mt-1",children:d.feedback.map(g=>H.jsxs("div",{className:"flex items-center gap-2",children:[H.jsx("div",{className:"w-3 h-3 flex-shrink-0",style:{backgroundColor:g.dot,boxShadow:`0 0 4px ${g.dot}`}}),H.jsxs("span",{className:"text-[7px] leading-[13px]",style:{color:g.dot},children:[g.label,":"]}),H.jsx("span",{className:"text-[7px] text-white/60 leading-[13px]",children:g.desc})]},g.label))})]})]},d.num))}),H.jsx("div",{className:"px-5 pb-5",children:H.jsxs("button",{onClick:()=>t(!1),className:"w-full bg-[#8b5cf6] border-4 border-[#ec4899] text-white py-3 px-6 text-[10px] relative hover:bg-[#a78bfa] transition-colors active:translate-y-1",children:[H.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"Got It!"]})}),H.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"})]})})]})}function uo(r){const e=Math.sin(r+1)*1e4;return e-Math.floor(e)}const jl=[{label:"CAMERA MODULE",run:async()=>{(await navigator.mediaDevices.getUserMedia({video:!0})).getTracks().forEach(e=>e.stop())}},{label:"AR PLANE DETECT",run:async()=>{if(!("xr"in navigator))throw new Error("WebXR not supported");if(!await navigator.xr.isSessionSupported("immersive-ar"))throw new Error("AR not supported")}},{label:"CODEX LINK",run:async()=>{if(!navigator.onLine)throw new Error("No network")}},{label:"ENEMY SCANNER",run:async()=>{if(!("DeviceOrientationEvent"in window))throw new Error("No motion sensor");await new Promise(r=>setTimeout(r,500))}}];function BS(){const r=Wu(),[e,t]=Q.useState(jl.map(()=>"idle")),[i,a]=Q.useState(!1);Q.useEffect(()=>{let u=!1;return(async()=>{for(let d=0;d<jl.length;d++){if(u)return;t(h=>{const g=[...h];return g[d]="checking",g});try{await jl[d].run(),u||t(h=>{const g=[...h];return g[d]="ok",g})}catch{u||t(h=>{const g=[...h];return g[d]="fail",g})}}u||a(!0)})(),()=>{u=!0}},[]);const o=Q.useMemo(()=>Array.from({length:22},(u,f)=>({id:f,x:uo(f*6.17)*100,y:uo(f*4.23)*100,size:uo(f*2.71)>.8?3:2,delay:`${uo(f*3.91)*4}s`,duration:`${1.5+uo(f*1.17)*2}s`})),[]);return H.jsxs("div",{className:"min-h-screen w-full max-w-md mx-auto bg-[#0a0118] flex flex-col px-6 py-8 font-['Press_Start_2P',_monospace] relative overflow-hidden",children:[H.jsx("style",{children:`
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
      `}),H.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:`
          linear-gradient(0deg, transparent 24%, rgba(139,92,246,.3) 25%, rgba(139,92,246,.3) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.3) 75%, rgba(139,92,246,.3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(139,92,246,.3) 25%, rgba(139,92,246,.3) 26%, transparent 27%, transparent 74%, rgba(139,92,246,.3) 75%, rgba(139,92,246,.3) 76%, transparent 77%, transparent)
        `,backgroundSize:"20px 20px"}}),o.map(u=>H.jsx("div",{className:"absolute bg-white pointer-events-none",style:{left:`${u.x}%`,top:`${u.y}%`,width:`${u.size}px`,height:`${u.size}px`,animation:`twinkle ${u.duration} ${u.delay} ease-in-out infinite`,zIndex:1}},`star-${u.id}`)),H.jsxs("div",{className:"flex items-center justify-between mb-4 relative z-10",children:[H.jsx("button",{onClick:()=>r("/"),className:"text-[8px] text-[#a78bfa] hover:text-white transition-colors",children:"← BACK"}),H.jsxs("div",{className:"text-[7px] text-[#10b981] border-2 border-[#10b981] px-2 py-1 relative",children:[H.jsx("div",{className:"absolute top-0 left-0 w-1 h-1 bg-[#0a0118]"}),H.jsx("div",{className:"absolute top-0 right-0 w-1 h-1 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 left-0 w-1 h-1 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 right-0 w-1 h-1 bg-[#0a0118]"}),"WAVE 01"]})]}),H.jsx("h2",{className:"text-[11px] text-[#8b5cf6] text-center mb-5 tracking-widest relative z-10",children:"MISSION BRIEF"}),H.jsxs("div",{className:"flex flex-col items-center mb-5 relative z-10",children:[H.jsxs("div",{className:"relative w-32 h-32",children:[H.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/20"}),H.jsx("div",{className:"absolute inset-[22%] rounded-full border border-[#10b981]/30"}),H.jsx("div",{className:"absolute inset-[44%] rounded-full border-2 border-[#10b981]/60"}),H.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/50",style:{animation:"radarPing 2s 0s ease-out infinite"}}),H.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-[#10b981]/30",style:{animation:"radarPing 2s 0.9s ease-out infinite"}}),H.jsxs("div",{className:"absolute inset-0 overflow-hidden rounded-full",style:{animation:"radarSweep 3s linear infinite"},children:[H.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"conic-gradient(rgba(16,185,129,0) 0deg, rgba(16,185,129,0.13) 60deg, rgba(16,185,129,0) 90deg, transparent 360deg)"}}),H.jsx("div",{className:"absolute top-1/2 origin-left",style:{left:"50%",width:"50%",height:"1px",background:"linear-gradient(to right, rgba(16,185,129,0.9), rgba(16,185,129,0.05))",transform:"translateY(-50%)"}})]}),H.jsx("div",{className:"absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-[#10b981]",style:{boxShadow:"0 0 6px #10b981"}}),i&&H.jsxs(H.Fragment,{children:[H.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#ec4899]",style:{top:"24%",left:"61%",boxShadow:"0 0 5px #ec4899",animation:"blipBlink 1.1s ease-in-out infinite"}}),H.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#facc15]",style:{top:"66%",left:"27%",boxShadow:"0 0 4px #facc15",animation:"blipBlink 0.9s 0.35s ease-in-out infinite"}}),H.jsx("div",{className:"absolute w-1.5 h-1.5 bg-[#f97316]",style:{top:"47%",left:"75%",boxShadow:"0 0 4px #f97316",animation:"blipBlink 1.3s 0.7s ease-in-out infinite"}})]})]}),H.jsx("p",{className:"text-[7px] mt-3 tracking-wider",style:{color:i?"#10b981":"#a78bfa",animation:i?"none":"blinkAnim 1s ease-in-out infinite"},children:i?"SURFACE DETECTED ✓":"SCANNING SURFACE..."})]}),H.jsxs("div",{className:"bg-[#1a0a2e] border-2 border-[#8b5cf6] p-3 mb-4 relative z-10",children:[H.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("p",{className:"text-[7px] text-[#a78bfa] mb-3 tracking-widest",children:"SYSTEM STATUS"}),H.jsx("div",{className:"space-y-2",children:jl.map((u,f)=>{const d=e[f],h=d==="ok"?"#10b981":d==="fail"?"#ef4444":d==="checking"?"#facc15":"#1f2937",g=d==="ok"?"#10b981":d==="fail"?"#ef4444":d==="checking"?"#facc15":"#374151";return H.jsxs("div",{className:"flex items-center gap-2",style:d==="ok"||d==="fail"?{animation:"slideIn 0.25s ease-out"}:{},children:[H.jsxs("div",{className:"w-4 h-4 border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-200",style:{borderColor:h,backgroundColor:d==="ok"?"#10b981":d==="fail"?"#ef4444":"transparent"},children:[d==="ok"&&H.jsx("span",{className:"text-[#0a0118] leading-none",style:{fontSize:"8px",animation:"checkPop 0.25s ease-out"},children:"✓"}),d==="fail"&&H.jsx("span",{className:"text-[#0a0118] leading-none",style:{fontSize:"8px",animation:"checkPop 0.25s ease-out"},children:"✕"}),d==="checking"&&H.jsx("span",{className:"text-[#facc15] leading-none",style:{fontSize:"6px",animation:"blinkAnim 0.5s ease-in-out infinite"},children:"■"})]}),H.jsx("span",{className:"text-[7px] tracking-wide transition-colors duration-200",style:{color:g},children:u.label}),d==="fail"&&H.jsx("span",{className:"text-[6px] text-[#ef444499] ml-auto",children:"FAILED"})]},f)})})]}),H.jsxs("div",{className:"bg-[#1a0a2e] border-2 border-[#ec4899] p-3 mb-5 relative z-10",children:[H.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("p",{className:"text-[7px] text-[#a78bfa] mb-2 tracking-widest",children:"TARGET WORD"}),H.jsxs("p",{className:"text-[7px] text-white/70 mb-3 leading-[14px]",children:["HINT: ",H.jsx("span",{className:"text-[#facc15]",children:"A CELESTIAL BODY"})]}),H.jsx("div",{className:"flex gap-2 justify-center",children:Array.from({length:5},(u,f)=>H.jsx("div",{className:"w-9 h-9 border-2 border-white/20 bg-[#0a0118] flex items-center justify-center",children:H.jsx("span",{className:"text-white/15 text-[8px]",children:"?"})},f))})]}),H.jsxs("button",{disabled:!i,onClick:()=>i&&r("/ar"),className:"w-full py-4 px-6 text-[10px] border-4 relative transition-all duration-300",style:{backgroundColor:i?"#8b5cf6":"#1a0a2e",borderColor:i?"#ec4899":"#1f2937",color:i?"#ffffff":"#374151",cursor:i?"pointer":"not-allowed",animation:i?"engagePulse 2s ease-in-out infinite":"none"},children:[H.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),i?"> ENGAGE MISSION <":"INITIALIZING..."]})]})}const zS="modulepreload",VS=function(r){return"/"+r},Lg={},HS=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){let u=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),d=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));a=u(t.map(h=>{if(h=VS(h),h in Lg)return;Lg[h]=!0;const g=h.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${v}`))return;const m=document.createElement("link");if(m.rel=g?"stylesheet":zS,g||(m.as="script"),m.crossOrigin="",m.href=h,d&&m.setAttribute("nonce",d),document.head.appendChild(m),g)return new Promise((_,M)=>{m.addEventListener("load",_),m.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function o(u){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=u,window.dispatchEvent(f),!f.defaultPrevented)throw u}return a.then(u=>{for(const f of u||[])f.status==="rejected"&&o(f.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ah="184",GS=0,Ng=1,WS=2,bu=1,jS=2,_o=3,Wr=0,$n=1,Fi=2,cr=0,da=1,Ig=2,Dg=3,Ug=4,XS=5,ds=100,$S=101,YS=102,qS=103,KS=104,ZS=200,JS=201,QS=202,eM=203,bd=204,Ad=205,tM=206,nM=207,iM=208,rM=209,sM=210,aM=211,oM=212,lM=213,uM=214,Rd=0,Cd=1,Pd=2,pa=3,Ld=4,Nd=5,Id=6,Dd=7,Xu=0,cM=1,fM=2,ki=0,bv=1,Av=2,Rv=3,Rh=4,Cv=5,Pv=6,Lv=7,Fg="attached",dM="detached",Nv=300,gs=301,ma=302,zf=303,Vf=304,$u=306,Ud=1e3,lr=1001,Fd=1002,Sn=1003,hM=1004,Xl=1005,Rn=1006,Hf=1007,ps=1008,ei=1009,Iv=1010,Dv=1011,Ao=1012,Ch=1013,Vi=1014,Ti=1015,hr=1016,Ph=1017,Lh=1018,Ro=1020,Uv=35902,Fv=35899,Ov=1021,kv=1022,ci=1023,pr=1026,ms=1027,Bv=1028,Nh=1029,vs=1030,Ih=1031,Dh=1033,Au=33776,Ru=33777,Cu=33778,Pu=33779,Od=35840,kd=35841,Bd=35842,zd=35843,Vd=36196,Hd=37492,Gd=37496,Wd=37488,jd=37489,Iu=37490,Xd=37491,$d=37808,Yd=37809,qd=37810,Kd=37811,Zd=37812,Jd=37813,Qd=37814,eh=37815,th=37816,nh=37817,ih=37818,rh=37819,sh=37820,ah=37821,oh=36492,lh=36494,uh=36495,ch=36283,fh=36284,Du=36285,dh=36286,Uu=2300,hh=2301,Gf=2302,Og=2303,kg=2400,Bg=2401,zg=2402,pM=2500,mM=3200,Co=0,gM=1,Hr="",Wn="srgb",Fu="srgb-linear",Ou="linear",Ft="srgb",qs=7680,Vg=519,vM=512,xM=513,_M=514,Uh=515,yM=516,SM=517,Fh=518,MM=519,Hg=35044,Gg="300 es",Oi=2e3,Po=2001;function EM(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function wM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Lo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function TM(){const r=Lo("canvas");return r.style.display="block",r}const Wg={};function jg(...r){const e="THREE."+r.shift();console.log(e,...r)}function zv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function rt(...r){r=zv(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function ut(...r){r=zv(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ph(...r){const e=r.join(" ");e in Wg||(Wg[e]=!0,rt(...r))}function bM(r,e,t){return new Promise(function(i,a){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const AM={[Rd]:Cd,[Pd]:Id,[Ld]:Dd,[pa]:Nd,[Cd]:Rd,[Id]:Pd,[Dd]:Ld,[Nd]:pa};class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,u=a.length;o<u;o++)a[o].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xg=1234567;const Eo=Math.PI/180,ga=180/Math.PI;function jr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function Oh(r,e){return(r%e+e)%e}function RM(r,e,t,i,a){return i+(r-e)*(a-i)/(t-e)}function CM(r,e,t){return r!==e?(t-r)/(e-r):0}function wo(r,e,t){return(1-t)*r+t*e}function PM(r,e,t,i){return wo(r,e,1-Math.exp(-t*i))}function LM(r,e=1){return e-Math.abs(Oh(r,e*2)-e)}function NM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function IM(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function DM(r,e){return r+Math.floor(Math.random()*(e-r+1))}function UM(r,e){return r+Math.random()*(e-r)}function FM(r){return r*(.5-Math.random())}function OM(r){r!==void 0&&(Xg=r);let e=Xg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function kM(r){return r*Eo}function BM(r){return r*ga}function zM(r){return(r&r-1)===0&&r!==0}function VM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function HM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function GM(r,e,t,i,a){const o=Math.cos,u=Math.sin,f=o(t/2),d=u(t/2),h=o((e+i)/2),g=u((e+i)/2),v=o((e-i)/2),m=u((e-i)/2),_=o((i-e)/2),M=u((i-e)/2);switch(a){case"XYX":r.set(f*g,d*v,d*m,f*h);break;case"YZY":r.set(d*m,f*g,d*v,f*h);break;case"ZXZ":r.set(d*v,d*m,f*g,f*h);break;case"XZX":r.set(f*g,d*M,d*_,f*h);break;case"YXY":r.set(d*_,f*g,d*M,f*h);break;case"ZYZ":r.set(d*M,d*_,f*g,f*h);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function fa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const NR={DEG2RAD:Eo,RAD2DEG:ga,generateUUID:jr,clamp:St,euclideanModulo:Oh,mapLinear:RM,inverseLerp:CM,lerp:wo,damp:PM,pingpong:LM,smoothstep:NM,smootherstep:IM,randInt:DM,randFloat:UM,randFloatSpread:FM,seededRandom:OM,degToRad:kM,radToDeg:BM,isPowerOfTwo:zM,ceilPowerOfTwo:VM,floorPowerOfTwo:HM,setQuaternionFromProperEuler:GM,normalize:In,denormalize:fa},Yh=class Yh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*a+e.x,this.y=o*a+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yh.prototype.isVector2=!0;let Et=Yh;class Ss{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,u,f){let d=i[a+0],h=i[a+1],g=i[a+2],v=i[a+3],m=o[u+0],_=o[u+1],M=o[u+2],b=o[u+3];if(v!==b||d!==m||h!==_||g!==M){let y=d*m+h*_+g*M+v*b;y<0&&(m=-m,_=-_,M=-M,b=-b,y=-y);let S=1-f;if(y<.9995){const R=Math.acos(y),T=Math.sin(R);S=Math.sin(S*R)/T,f=Math.sin(f*R)/T,d=d*S+m*f,h=h*S+_*f,g=g*S+M*f,v=v*S+b*f}else{d=d*S+m*f,h=h*S+_*f,g=g*S+M*f,v=v*S+b*f;const R=1/Math.sqrt(d*d+h*h+g*g+v*v);d*=R,h*=R,g*=R,v*=R}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,a,o,u){const f=i[a],d=i[a+1],h=i[a+2],g=i[a+3],v=o[u],m=o[u+1],_=o[u+2],M=o[u+3];return e[t]=f*M+g*v+d*_-h*m,e[t+1]=d*M+g*m+h*v-f*_,e[t+2]=h*M+g*_+f*m-d*v,e[t+3]=g*M-f*v-d*m-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(i/2),g=f(a/2),v=f(o/2),m=d(i/2),_=d(a/2),M=d(o/2);switch(u){case"XYZ":this._x=m*g*v+h*_*M,this._y=h*_*v-m*g*M,this._z=h*g*M+m*_*v,this._w=h*g*v-m*_*M;break;case"YXZ":this._x=m*g*v+h*_*M,this._y=h*_*v-m*g*M,this._z=h*g*M-m*_*v,this._w=h*g*v+m*_*M;break;case"ZXY":this._x=m*g*v-h*_*M,this._y=h*_*v+m*g*M,this._z=h*g*M+m*_*v,this._w=h*g*v-m*_*M;break;case"ZYX":this._x=m*g*v-h*_*M,this._y=h*_*v+m*g*M,this._z=h*g*M-m*_*v,this._w=h*g*v+m*_*M;break;case"YZX":this._x=m*g*v+h*_*M,this._y=h*_*v+m*g*M,this._z=h*g*M-m*_*v,this._w=h*g*v-m*_*M;break;case"XZY":this._x=m*g*v-h*_*M,this._y=h*_*v-m*g*M,this._z=h*g*M+m*_*v,this._w=h*g*v+m*_*M;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],u=t[1],f=t[5],d=t[9],h=t[2],g=t[6],v=t[10],m=i+f+v;if(m>0){const _=.5/Math.sqrt(m+1);this._w=.25/_,this._x=(g-d)*_,this._y=(o-h)*_,this._z=(u-a)*_}else if(i>f&&i>v){const _=2*Math.sqrt(1+i-f-v);this._w=(g-d)/_,this._x=.25*_,this._y=(a+u)/_,this._z=(o+h)/_}else if(f>v){const _=2*Math.sqrt(1+f-i-v);this._w=(o-h)/_,this._x=(a+u)/_,this._y=.25*_,this._z=(d+g)/_}else{const _=2*Math.sqrt(1+v-i-f);this._w=(u-a)/_,this._x=(o+h)/_,this._y=(d+g)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,u=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=i*g+u*f+a*h-o*d,this._y=a*g+u*d+o*f-i*h,this._z=o*g+u*h+i*d-a*f,this._w=u*g-i*f-a*d-o*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,o=e._z,u=e._w,f=this.dot(e);f<0&&(i=-i,a=-a,o=-o,u=-u,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qh=class qh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($g.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($g.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*a-f*i),g=2*(f*t-o*a),v=2*(o*i-u*t);return this.x=t+d*h+u*v-f*g,this.y=i+d*g+f*h-o*v,this.z=a+d*v+o*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,u=t.x,f=t.y,d=t.z;return this.x=a*d-o*f,this.y=o*u-i*d,this.z=i*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wf.copy(this).projectOnVector(e),this.sub(Wf)}reflect(e){return this.sub(Wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qh.prototype.isVector3=!0;let Y=qh;const Wf=new Y,$g=new Ss,Kh=class Kh{constructor(e,t,i,a,o,u,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,u,f,d,h)}set(e,t,i,a,o,u,f,d,h){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=o,g[5]=d,g[6]=i,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,u=i[0],f=i[3],d=i[6],h=i[1],g=i[4],v=i[7],m=i[2],_=i[5],M=i[8],b=a[0],y=a[3],S=a[6],R=a[1],T=a[4],P=a[7],F=a[2],N=a[5],B=a[8];return o[0]=u*b+f*R+d*F,o[3]=u*y+f*T+d*N,o[6]=u*S+f*P+d*B,o[1]=h*b+g*R+v*F,o[4]=h*y+g*T+v*N,o[7]=h*S+g*P+v*B,o[2]=m*b+_*R+M*F,o[5]=m*y+_*T+M*N,o[8]=m*S+_*P+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*u*g-t*f*h-i*o*g+i*f*d+a*o*h-a*u*d}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],v=g*u-f*h,m=f*d-g*o,_=h*o-u*d,M=t*v+i*m+a*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(a*h-g*i)*b,e[2]=(f*i-a*u)*b,e[3]=m*b,e[4]=(g*t-a*d)*b,e[5]=(a*o-f*t)*b,e[6]=_*b,e[7]=(i*d-h*t)*b,e[8]=(u*t-i*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,u,f){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*u+h*f)+u+e,-a*h,a*d,-a*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(jf.makeScale(e,t)),this}rotate(e){return this.premultiply(jf.makeRotation(-e)),this}translate(e,t){return this.premultiply(jf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kh.prototype.isMatrix3=!0;let gt=Kh;const jf=new gt,Yg=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qg=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WM(){const r={enabled:!0,workingColorSpace:Fu,spaces:{},convert:function(a,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Ft&&(a.r=fr(a.r),a.g=fr(a.g),a.b=fr(a.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(a.r=ha(a.r),a.g=ha(a.g),a.b=ha(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Hr?Ou:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,u){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return ph("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return ph("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Fu]:{primaries:e,whitePoint:i,transfer:Ou,toXYZ:Yg,fromXYZ:qg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:Ft,toXYZ:Yg,fromXYZ:qg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),r}const Tt=WM();function fr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ha(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ks;class jM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ks===void 0&&(Ks=Lo("canvas")),Ks.width=e.width,Ks.height=e.height;const a=Ks.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let u=0;u<o.length;u++)o[u]=fr(o[u]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fr(t[i]/255)*255):t[i]=fr(t[i]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XM=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?o.push(Xf(a[u].image)):o.push(Xf(a[u]))}else o=Xf(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Xf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let $M=0;const $f=new Y;class Cn extends ys{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,i=lr,a=lr,o=Rn,u=ps,f=ci,d=ei,h=Cn.DEFAULT_ANISOTROPY,g=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=jr(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ud:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ud:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Nv;Cn.DEFAULT_ANISOTROPY=1;const Zh=class Zh{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*a+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*a+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*a+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*a+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const d=e.elements,h=d[0],g=d[4],v=d[8],m=d[1],_=d[5],M=d[9],b=d[2],y=d[6],S=d[10];if(Math.abs(g-m)<.01&&Math.abs(v-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(v+b)<.1&&Math.abs(M+y)<.1&&Math.abs(h+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,P=(_+1)/2,F=(S+1)/2,N=(g+m)/4,B=(v+b)/4,w=(M+y)/4;return T>P&&T>F?T<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(T),a=N/i,o=B/i):P>F?P<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(P),i=N/a,o=w/a):F<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(F),i=B/o,a=w/o),this.set(i,a,o,t),this}let R=Math.sqrt((y-M)*(y-M)+(v-b)*(v-b)+(m-g)*(m-g));return Math.abs(R)<.001&&(R=1),this.x=(y-M)/R,this.y=(v-b)/R,this.z=(m-g)/R,this.w=Math.acos((h+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(St(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zh.prototype.isVector4=!0;let Ht=Zh;class YM extends ys{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},o=new Cn(a),u=i.count;for(let f=0;f<u;f++)this.textures[f]=o.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new kh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends YM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vv extends Cn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qM extends Cn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hu=class Hu{constructor(e,t,i,a,o,u,f,d,h,g,v,m,_,M,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,u,f,d,h,g,v,m,_,M,b,y)}set(e,t,i,a,o,u,f,d,h,g,v,m,_,M,b,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=a,S[1]=o,S[5]=u,S[9]=f,S[13]=d,S[2]=h,S[6]=g,S[10]=v,S[14]=m,S[3]=_,S[7]=M,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hu().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,a=1/Zs.setFromMatrixColumn(e,0).length(),o=1/Zs.setFromMatrixColumn(e,1).length(),u=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,u=Math.cos(i),f=Math.sin(i),d=Math.cos(a),h=Math.sin(a),g=Math.cos(o),v=Math.sin(o);if(e.order==="XYZ"){const m=u*g,_=u*v,M=f*g,b=f*v;t[0]=d*g,t[4]=-d*v,t[8]=h,t[1]=_+M*h,t[5]=m-b*h,t[9]=-f*d,t[2]=b-m*h,t[6]=M+_*h,t[10]=u*d}else if(e.order==="YXZ"){const m=d*g,_=d*v,M=h*g,b=h*v;t[0]=m+b*f,t[4]=M*f-_,t[8]=u*h,t[1]=u*v,t[5]=u*g,t[9]=-f,t[2]=_*f-M,t[6]=b+m*f,t[10]=u*d}else if(e.order==="ZXY"){const m=d*g,_=d*v,M=h*g,b=h*v;t[0]=m-b*f,t[4]=-u*v,t[8]=M+_*f,t[1]=_+M*f,t[5]=u*g,t[9]=b-m*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const m=u*g,_=u*v,M=f*g,b=f*v;t[0]=d*g,t[4]=M*h-_,t[8]=m*h+b,t[1]=d*v,t[5]=b*h+m,t[9]=_*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const m=u*d,_=u*h,M=f*d,b=f*h;t[0]=d*g,t[4]=b-m*v,t[8]=M*v+_,t[1]=v,t[5]=u*g,t[9]=-f*g,t[2]=-h*g,t[6]=_*v+M,t[10]=m-b*v}else if(e.order==="XZY"){const m=u*d,_=u*h,M=f*d,b=f*h;t[0]=d*g,t[4]=-v,t[8]=h*g,t[1]=m*v+b,t[5]=u*g,t[9]=_*v-M,t[2]=M*v-_,t[6]=f*g,t[10]=b*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KM,e,ZM)}lookAt(e,t,i){const a=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Fr.crossVectors(i,Jn),Fr.lengthSq()===0&&(Math.abs(i.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Fr.crossVectors(i,Jn)),Fr.normalize(),$l.crossVectors(Jn,Fr),a[0]=Fr.x,a[4]=$l.x,a[8]=Jn.x,a[1]=Fr.y,a[5]=$l.y,a[9]=Jn.y,a[2]=Fr.z,a[6]=$l.z,a[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,u=i[0],f=i[4],d=i[8],h=i[12],g=i[1],v=i[5],m=i[9],_=i[13],M=i[2],b=i[6],y=i[10],S=i[14],R=i[3],T=i[7],P=i[11],F=i[15],N=a[0],B=a[4],w=a[8],I=a[12],V=a[1],z=a[5],q=a[9],he=a[13],le=a[2],W=a[6],ee=a[10],J=a[14],Z=a[3],ue=a[7],fe=a[11],O=a[15];return o[0]=u*N+f*V+d*le+h*Z,o[4]=u*B+f*z+d*W+h*ue,o[8]=u*w+f*q+d*ee+h*fe,o[12]=u*I+f*he+d*J+h*O,o[1]=g*N+v*V+m*le+_*Z,o[5]=g*B+v*z+m*W+_*ue,o[9]=g*w+v*q+m*ee+_*fe,o[13]=g*I+v*he+m*J+_*O,o[2]=M*N+b*V+y*le+S*Z,o[6]=M*B+b*z+y*W+S*ue,o[10]=M*w+b*q+y*ee+S*fe,o[14]=M*I+b*he+y*J+S*O,o[3]=R*N+T*V+P*le+F*Z,o[7]=R*B+T*z+P*W+F*ue,o[11]=R*w+T*q+P*ee+F*fe,o[15]=R*I+T*he+P*J+F*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],u=e[1],f=e[5],d=e[9],h=e[13],g=e[2],v=e[6],m=e[10],_=e[14],M=e[3],b=e[7],y=e[11],S=e[15],R=d*_-h*m,T=f*_-h*v,P=f*m-d*v,F=u*_-h*g,N=u*m-d*g,B=u*v-f*g;return t*(b*R-y*T+S*P)-i*(M*R-y*F+S*N)+a*(M*T-b*F+S*B)-o*(M*P-b*N+y*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],v=e[9],m=e[10],_=e[11],M=e[12],b=e[13],y=e[14],S=e[15],R=t*f-i*u,T=t*d-a*u,P=t*h-o*u,F=i*d-a*f,N=i*h-o*f,B=a*h-o*d,w=g*b-v*M,I=g*y-m*M,V=g*S-_*M,z=v*y-m*b,q=v*S-_*b,he=m*S-_*y,le=R*he-T*q+P*z+F*V-N*I+B*w;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/le;return e[0]=(f*he-d*q+h*z)*W,e[1]=(a*q-i*he-o*z)*W,e[2]=(b*B-y*N+S*F)*W,e[3]=(m*N-v*B-_*F)*W,e[4]=(d*V-u*he-h*I)*W,e[5]=(t*he-a*V+o*I)*W,e[6]=(y*P-M*B-S*T)*W,e[7]=(g*B-m*P+_*T)*W,e[8]=(u*q-f*V+h*w)*W,e[9]=(i*V-t*q-o*w)*W,e[10]=(M*N-b*P+S*R)*W,e[11]=(v*P-g*N-_*R)*W,e[12]=(f*I-u*z-d*w)*W,e[13]=(t*z-i*I+a*w)*W,e[14]=(b*T-M*F-y*R)*W,e[15]=(g*F-v*T+m*R)*W,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,u=e.x,f=e.y,d=e.z,h=o*u,g=o*f;return this.set(h*u+i,h*f-a*d,h*d+a*f,0,h*f+a*d,g*f+i,g*d-a*u,0,h*d-a*f,g*d+a*u,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,u){return this.set(1,i,o,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,u=t._y,f=t._z,d=t._w,h=o+o,g=u+u,v=f+f,m=o*h,_=o*g,M=o*v,b=u*g,y=u*v,S=f*v,R=d*h,T=d*g,P=d*v,F=i.x,N=i.y,B=i.z;return a[0]=(1-(b+S))*F,a[1]=(_+P)*F,a[2]=(M-T)*F,a[3]=0,a[4]=(_-P)*N,a[5]=(1-(m+S))*N,a[6]=(y+R)*N,a[7]=0,a[8]=(M+T)*B,a[9]=(y-R)*B,a[10]=(1-(m+b))*B,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let u=Zs.set(a[0],a[1],a[2]).length();const f=Zs.set(a[4],a[5],a[6]).length(),d=Zs.set(a[8],a[9],a[10]).length();o<0&&(u=-u),Si.copy(this);const h=1/u,g=1/f,v=1/d;return Si.elements[0]*=h,Si.elements[1]*=h,Si.elements[2]*=h,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=v,Si.elements[9]*=v,Si.elements[10]*=v,t.setFromRotationMatrix(Si),i.x=u,i.y=f,i.z=d,this}makePerspective(e,t,i,a,o,u,f=Oi,d=!1){const h=this.elements,g=2*o/(t-e),v=2*o/(i-a),m=(t+e)/(t-e),_=(i+a)/(i-a);let M,b;if(d)M=o/(u-o),b=u*o/(u-o);else if(f===Oi)M=-(u+o)/(u-o),b=-2*u*o/(u-o);else if(f===Po)M=-u/(u-o),b=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,a,o,u,f=Oi,d=!1){const h=this.elements,g=2/(t-e),v=2/(i-a),m=-(t+e)/(t-e),_=-(i+a)/(i-a);let M,b;if(d)M=1/(u-o),b=u/(u-o);else if(f===Oi)M=-2/(u-o),b=-(u+o)/(u-o);else if(f===Po)M=-1/(u-o),b=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Hu.prototype.isMatrix4=!0;let wt=Hu;const Zs=new Y,Si=new wt,KM=new Y(0,0,0),ZM=new Y(1,1,1),Fr=new Y,$l=new Y,Jn=new Y,Kg=new wt,Zg=new Ss;class Hi{constructor(e=0,t=0,i=0,a=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],u=a[4],f=a[8],d=a[1],h=a[5],g=a[9],v=a[2],m=a[6],_=a[10];switch(t){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,_),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,_),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,o)):(this._x=Math.atan2(-g,_),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zg.setFromEuler(this),this.setFromQuaternion(Zg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JM=0;const Jg=new Y,Js=new Ss,tr=new wt,Yl=new Y,co=new Y,QM=new Y,eE=new Ss,Qg=new Y(1,0,0),e0=new Y(0,1,0),t0=new Y(0,0,1),n0={type:"added"},tE={type:"removed"},Qs={type:"childadded",child:null},Yf={type:"childremoved",child:null};class sn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JM++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new Y,t=new Hi,i=new Ss,a=new Y(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new wt},normalMatrix:{value:new gt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Qg,e)}rotateY(e){return this.rotateOnAxis(e0,e)}rotateZ(e){return this.rotateOnAxis(t0,e)}translateOnAxis(e,t){return Jg.copy(e).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qg,e)}translateY(e){return this.translateOnAxis(e0,e)}translateZ(e){return this.translateOnAxis(t0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Yl.copy(e):Yl.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(co,Yl,this.up):tr.lookAt(Yl,co,this.up),this.quaternion.setFromRotationMatrix(tr),a&&(tr.extractRotation(a.matrixWorld),Js.setFromRotationMatrix(tr),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(n0),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tE),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(n0),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,QM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,eE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*a,o[13]+=i-o[1]*t-o[5]*i-o[9]*a,o[14]+=a-o[2]*t-o[6]*i-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,u=a.length;o<u;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const v=d[h];o(e.shapes,v)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(o(e.materials,this.material[d]));a.material=f}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(o(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),g=u(e.images),v=u(e.shapes),m=u(e.skeletons),_=u(e.animations),M=u(e.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),g.length>0&&(i.images=g),v.length>0&&(i.shapes=v),m.length>0&&(i.skeletons=m),_.length>0&&(i.animations=_),M.length>0&&(i.nodes=M)}return i.object=a,i;function u(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}sn.DEFAULT_UP=new Y(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yo extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nE={type:"move"};class qf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,i),S=this._getHandJoint(h,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=g.position.distanceTo(v.position),_=.02,M=.005;h.inputState.pinching&&m>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(nE)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},ql={h:0,s:0,l:0};function Kf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=Tt.workingColorSpace){if(e=Oh(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=Kf(u,o,e+1/3),this.g=Kf(u,o,e),this.b=Kf(u,o,e-1/3)}return Tt.colorSpaceToWorking(this,a),this}setStyle(e,t=Wn){function i(o){o!==void 0&&parseFloat(o)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const i=Hv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Tt.workingToColorSpace(An.copy(this),e),Math.round(St(An.r*255,0,255))*65536+Math.round(St(An.g*255,0,255))*256+Math.round(St(An.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(An.copy(this),t);const i=An.r,a=An.g,o=An.b,u=Math.max(i,a,o),f=Math.min(i,a,o);let d,h;const g=(f+u)/2;if(f===u)d=0,h=0;else{const v=u-f;switch(h=g<=.5?v/(u+f):v/(2-u-f),u){case i:d=(a-o)/v+(a<o?6:0);break;case a:d=(o-i)/v+2;break;case o:d=(i-a)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Wn){Tt.workingToColorSpace(An.copy(this),e);const t=An.r,i=An.g,a=An.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(ql);const i=wo(Or.h,ql.h,t),a=wo(Or.s,ql.s,t),o=wo(Or.l,ql.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Mt;Mt.NAMES=Hv;class iE extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new Y,nr=new Y,Zf=new Y,ir=new Y,ea=new Y,ta=new Y,i0=new Y,Jf=new Y,Qf=new Y,ed=new Y,td=new Ht,nd=new Ht,id=new Ht;class wi{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Mi.subVectors(e,t),a.cross(Mi);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){Mi.subVectors(a,t),nr.subVectors(i,t),Zf.subVectors(e,t);const u=Mi.dot(Mi),f=Mi.dot(nr),d=Mi.dot(Zf),h=nr.dot(nr),g=nr.dot(Zf),v=u*h-f*f;if(v===0)return o.set(0,0,0),null;const m=1/v,_=(h*d-f*g)*m,M=(u*g-f*d)*m;return o.set(1-_-M,M,_)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,i,a,o,u,f,d){return this.getBarycoord(e,t,i,a,ir)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,ir.x),d.addScaledVector(u,ir.y),d.addScaledVector(f,ir.z),d)}static getInterpolatedAttribute(e,t,i,a,o,u){return td.setScalar(0),nd.setScalar(0),id.setScalar(0),td.fromBufferAttribute(e,t),nd.fromBufferAttribute(e,i),id.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(td,o.x),u.addScaledVector(nd,o.y),u.addScaledVector(id,o.z),u}static isFrontFacing(e,t,i,a){return Mi.subVectors(i,t),nr.subVectors(e,t),Mi.cross(nr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Mi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return wi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let u,f;ea.subVectors(a,i),ta.subVectors(o,i),Jf.subVectors(e,i);const d=ea.dot(Jf),h=ta.dot(Jf);if(d<=0&&h<=0)return t.copy(i);Qf.subVectors(e,a);const g=ea.dot(Qf),v=ta.dot(Qf);if(g>=0&&v<=g)return t.copy(a);const m=d*v-g*h;if(m<=0&&d>=0&&g<=0)return u=d/(d-g),t.copy(i).addScaledVector(ea,u);ed.subVectors(e,o);const _=ea.dot(ed),M=ta.dot(ed);if(M>=0&&_<=M)return t.copy(o);const b=_*h-d*M;if(b<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(i).addScaledVector(ta,f);const y=g*M-_*v;if(y<=0&&v-g>=0&&_-M>=0)return i0.subVectors(o,a),f=(v-g)/(v-g+(_-M)),t.copy(a).addScaledVector(i0,f);const S=1/(y+b+m);return u=b*S,f=m*S,t.copy(i).addScaledVector(ea,u).addScaledVector(ta,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ms{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=o.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(o,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Kl.copy(i.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}const a=e.children;for(let o=0,u=a.length;o<u;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Zl.subVectors(this.max,fo),na.subVectors(e.a,fo),ia.subVectors(e.b,fo),ra.subVectors(e.c,fo),kr.subVectors(ia,na),Br.subVectors(ra,ia),os.subVectors(na,ra);let t=[0,-kr.z,kr.y,0,-Br.z,Br.y,0,-os.z,os.y,kr.z,0,-kr.x,Br.z,0,-Br.x,os.z,0,-os.x,-kr.y,kr.x,0,-Br.y,Br.x,0,-os.y,os.x,0];return!rd(t,na,ia,ra,Zl)||(t=[1,0,0,0,1,0,0,0,1],!rd(t,na,ia,ra,Zl))?!1:(Jl.crossVectors(kr,Br),t=[Jl.x,Jl.y,Jl.z],rd(t,na,ia,ra,Zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ei=new Y,Kl=new Ms,na=new Y,ia=new Y,ra=new Y,kr=new Y,Br=new Y,os=new Y,fo=new Y,Zl=new Y,Jl=new Y,ls=new Y;function rd(r,e,t,i,a){for(let o=0,u=r.length-3;o<=u;o+=3){ls.fromArray(r,o);const f=a.x*Math.abs(ls.x)+a.y*Math.abs(ls.y)+a.z*Math.abs(ls.z),d=e.dot(ls),h=t.dot(ls),g=i.dot(ls);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const ln=new Y,Ql=new Et;let rE=0;class Xn extends ys{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Hg,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ql.fromBufferAttribute(this,t),Ql.applyMatrix3(e),this.setXY(t,Ql.x,Ql.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=In(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fa(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fa(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fa(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),i=In(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),i=In(i,this.array),a=In(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),i=In(i,this.array),a=In(a,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Gv extends Xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wv extends Xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ti extends Xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const sE=new Ms,ho=new Y,sd=new Y;class Es{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):sE.setFromPoints(e).getCenter(i);let a=0;for(let o=0,u=e.length;o<u;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const t=ho.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(ho,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(sd)),this.expandByPoint(ho.copy(e.center).sub(sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let aE=0;const ui=new wt,ad=new sn,sa=new Y,Qn=new Ms,po=new Ms,vn=new Y;class Un extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(EM(e)?Wv:Gv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new gt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,i){return ui.makeTranslation(e,t,i),this.applyMatrix4(ui),this}scale(e,t,i){return ui.makeScale(e,t,i),this.applyMatrix4(ui),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const u=e[a];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ti(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];Qn.setFromBufferAttribute(o),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const f=t[o];po.setFromBufferAttribute(f),this.morphTargetsRelative?(vn.addVectors(Qn.min,po.min),Qn.expandByPoint(vn),vn.addVectors(Qn.max,po.max),Qn.expandByPoint(vn)):(Qn.expandByPoint(po.min),Qn.expandByPoint(po.max))}Qn.getCenter(i);let a=0;for(let o=0,u=e.count;o<u;o++)vn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(vn));if(t)for(let o=0,u=t.length;o<u;o++){const f=t[o],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)vn.fromBufferAttribute(f,h),d&&(sa.fromBufferAttribute(e,h),vn.add(sa)),a=Math.max(a,i.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let w=0;w<i.count;w++)f[w]=new Y,d[w]=new Y;const h=new Y,g=new Y,v=new Y,m=new Et,_=new Et,M=new Et,b=new Y,y=new Y;function S(w,I,V){h.fromBufferAttribute(i,w),g.fromBufferAttribute(i,I),v.fromBufferAttribute(i,V),m.fromBufferAttribute(o,w),_.fromBufferAttribute(o,I),M.fromBufferAttribute(o,V),g.sub(h),v.sub(h),_.sub(m),M.sub(m);const z=1/(_.x*M.y-M.x*_.y);isFinite(z)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(v,-_.y).multiplyScalar(z),y.copy(v).multiplyScalar(_.x).addScaledVector(g,-M.x).multiplyScalar(z),f[w].add(b),f[I].add(b),f[V].add(b),d[w].add(y),d[I].add(y),d[V].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,I=R.length;w<I;++w){const V=R[w],z=V.start,q=V.count;for(let he=z,le=z+q;he<le;he+=3)S(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const T=new Y,P=new Y,F=new Y,N=new Y;function B(w){F.fromBufferAttribute(a,w),N.copy(F);const I=f[w];T.copy(I),T.sub(F.multiplyScalar(F.dot(I))).normalize(),P.crossVectors(N,I);const z=P.dot(d[w])<0?-1:1;u.setXYZW(w,T.x,T.y,T.z,z)}for(let w=0,I=R.length;w<I;++w){const V=R[w],z=V.start,q=V.count;for(let he=z,le=z+q;he<le;he+=3)B(e.getX(he+0)),B(e.getX(he+1)),B(e.getX(he+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,_=i.count;m<_;m++)i.setXYZ(m,0,0,0);const a=new Y,o=new Y,u=new Y,f=new Y,d=new Y,h=new Y,g=new Y,v=new Y;if(e)for(let m=0,_=e.count;m<_;m+=3){const M=e.getX(m+0),b=e.getX(m+1),y=e.getX(m+2);a.fromBufferAttribute(t,M),o.fromBufferAttribute(t,b),u.fromBufferAttribute(t,y),g.subVectors(u,o),v.subVectors(a,o),g.cross(v),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),f.add(g),d.add(g),h.add(g),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(b,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,_=t.count;m<_;m+=3)a.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),g.subVectors(u,o),v.subVectors(a,o),g.cross(v),i.setXYZ(m+0,g.x,g.y,g.z),i.setXYZ(m+1,g.x,g.y,g.z),i.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,v=f.normalized,m=new h.constructor(d.length*g);let _=0,M=0;for(let b=0,y=d.length;b<y;b++){f.isInterleavedBufferAttribute?_=d[b]*f.data.stride+f.offset:_=d[b]*g;for(let S=0;S<g;S++)m[M++]=h[_++]}return new Xn(m,g,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Un,i=this.index.array,a=this.attributes;for(const f in a){const d=a[f],h=e(d,i);t.setAttribute(f,h)}const o=this.morphAttributes;for(const f in o){const d=[],h=o[f];for(let g=0,v=h.length;g<v;g++){const m=h[g],_=e(m,i);d.push(_)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let v=0,m=h.length;v<m;v++){const _=h[v];g.push(_.toJSON(e.data))}g.length>0&&(a[d]=g,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const h in a){const g=a[h];this.setAttribute(h,g.clone(t))}const o=e.morphAttributes;for(const h in o){const g=[],v=o[h];for(let m=0,_=v.length;m<_;m++)g.push(v[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let oE=0;class gr extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=da,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Ad,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==da&&(i.blending=this.blending),this.side!==Wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ad&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const u=[];for(const f in o){const d=o[f];delete d.metadata,u.push(d)}return u}if(t){const o=a(e.textures),u=a(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sr=new Y,od=new Y,eu=new Y,zr=new Y,ld=new Y,tu=new Y,ud=new Y;class ko{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){od.copy(e).add(t).multiplyScalar(.5),eu.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(od);const o=e.distanceTo(t)*.5,u=-this.direction.dot(eu),f=zr.dot(this.direction),d=-zr.dot(eu),h=zr.lengthSq(),g=Math.abs(1-u*u);let v,m,_,M;if(g>0)if(v=u*d-f,m=u*f-d,M=o*g,v>=0)if(m>=-M)if(m<=M){const b=1/g;v*=b,m*=b,_=v*(v+u*m+2*f)+m*(u*v+m+2*d)+h}else m=o,v=Math.max(0,-(u*m+f)),_=-v*v+m*(m+2*d)+h;else m=-o,v=Math.max(0,-(u*m+f)),_=-v*v+m*(m+2*d)+h;else m<=-M?(v=Math.max(0,-(-u*o+f)),m=v>0?-o:Math.min(Math.max(-o,-d),o),_=-v*v+m*(m+2*d)+h):m<=M?(v=0,m=Math.min(Math.max(-o,-d),o),_=m*(m+2*d)+h):(v=Math.max(0,-(u*o+f)),m=v>0?o:Math.min(Math.max(-o,-d),o),_=-v*v+m*(m+2*d)+h);else m=u>0?-o:o,v=Math.max(0,-(u*m+f)),_=-v*v+m*(m+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(od).addScaledVector(eu,m),_}intersectSphere(e,t){sr.subVectors(e.center,this.origin);const i=sr.dot(this.direction),a=sr.dot(sr)-i*i,o=e.radius*e.radius;if(a>o)return null;const u=Math.sqrt(o-a),f=i-u,d=i+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,u,f,d;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,a=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,a=(e.min.x-m.x)*h),g>=0?(o=(e.min.y-m.y)*g,u=(e.max.y-m.y)*g):(o=(e.max.y-m.y)*g,u=(e.min.y-m.y)*g),i>u||o>a||((o>i||isNaN(i))&&(i=o),(u<a||isNaN(a))&&(a=u),v>=0?(f=(e.min.z-m.z)*v,d=(e.max.z-m.z)*v):(f=(e.max.z-m.z)*v,d=(e.min.z-m.z)*v),i>d||f>a)||((f>i||i!==i)&&(i=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,i,a,o){ld.subVectors(t,e),tu.subVectors(i,e),ud.crossVectors(ld,tu);let u=this.direction.dot(ud),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;zr.subVectors(this.origin,e);const d=f*this.direction.dot(tu.crossVectors(zr,tu));if(d<0)return null;const h=f*this.direction.dot(ld.cross(zr));if(h<0||d+h>u)return null;const g=-f*zr.dot(ud);return g<0?null:this.at(g/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zh extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const r0=new wt,us=new ko,nu=new Es,s0=new Y,iu=new Y,ru=new Y,su=new Y,cd=new Y,au=new Y,a0=new Y,ou=new Y;class fi extends sn{constructor(e=new Un,t=new zh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(o&&f){au.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const g=f[d],v=o[d];g!==0&&(cd.fromBufferAttribute(v,e),u?au.addScaledVector(cd,g):au.addScaledVector(cd.sub(t),g))}t.add(au)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nu.copy(i.boundingSphere),nu.applyMatrix4(o),us.copy(e.ray).recast(e.near),!(nu.containsPoint(us.origin)===!1&&(us.intersectSphere(nu,s0)===null||us.origin.distanceToSquared(s0)>(e.far-e.near)**2))&&(r0.copy(o).invert(),us.copy(e.ray).applyMatrix4(r0),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,i){let a;const o=this.geometry,u=this.material,f=o.index,d=o.attributes.position,h=o.attributes.uv,g=o.attributes.uv1,v=o.attributes.normal,m=o.groups,_=o.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=m.length;M<b;M++){const y=m[M],S=u[y.materialIndex],R=Math.max(y.start,_.start),T=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let P=R,F=T;P<F;P+=3){const N=f.getX(P),B=f.getX(P+1),w=f.getX(P+2);a=lu(this,S,e,i,h,g,v,N,B,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,_.start),b=Math.min(f.count,_.start+_.count);for(let y=M,S=b;y<S;y+=3){const R=f.getX(y),T=f.getX(y+1),P=f.getX(y+2);a=lu(this,u,e,i,h,g,v,R,T,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,b=m.length;M<b;M++){const y=m[M],S=u[y.materialIndex],R=Math.max(y.start,_.start),T=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let P=R,F=T;P<F;P+=3){const N=P,B=P+1,w=P+2;a=lu(this,S,e,i,h,g,v,N,B,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,_.start),b=Math.min(d.count,_.start+_.count);for(let y=M,S=b;y<S;y+=3){const R=y,T=y+1,P=y+2;a=lu(this,u,e,i,h,g,v,R,T,P),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function lE(r,e,t,i,a,o,u,f){let d;if(e.side===$n?d=i.intersectTriangle(u,o,a,!0,f):d=i.intersectTriangle(a,o,u,e.side===Wr,f),d===null)return null;ou.copy(f),ou.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(ou);return h<t.near||h>t.far?null:{distance:h,point:ou.clone(),object:r}}function lu(r,e,t,i,a,o,u,f,d,h){r.getVertexPosition(f,iu),r.getVertexPosition(d,ru),r.getVertexPosition(h,su);const g=lE(r,e,t,i,iu,ru,su,a0);if(g){const v=new Y;wi.getBarycoord(a0,iu,ru,su,v),a&&(g.uv=wi.getInterpolatedAttribute(a,f,d,h,v,new Et)),o&&(g.uv1=wi.getInterpolatedAttribute(o,f,d,h,v,new Et)),u&&(g.normal=wi.getInterpolatedAttribute(u,f,d,h,v,new Y),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new Y,materialIndex:0};wi.getNormal(iu,ru,su,m.normal),g.face=m,g.barycoord=v}return g}const mo=new Ht,o0=new Ht,l0=new Ht,uE=new Ht,u0=new wt,uu=new Y,fd=new Es,c0=new wt,dd=new ko;class IR extends fi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fg,this.bindMatrix=new wt,this.bindMatrixInverse=new wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ms),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uu),this.boundingBox.expandByPoint(uu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Es),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uu),this.boundingSphere.expandByPoint(uu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,a=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fd.copy(this.boundingSphere),fd.applyMatrix4(a),e.ray.intersectsSphere(fd)!==!1&&(c0.copy(a).invert(),dd.copy(e.ray).applyMatrix4(c0),!(this.boundingBox!==null&&dd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ht,t=this.geometry.attributes.skinWeight;for(let i=0,a=t.count;i<a;i++){e.fromBufferAttribute(t,i);const o=1/e.manhattanLength();o!==1/0?e.multiplyScalar(o):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dM?this.bindMatrixInverse.copy(this.bindMatrix).invert():rt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,a=this.geometry;o0.fromBufferAttribute(a.attributes.skinIndex,e),l0.fromBufferAttribute(a.attributes.skinWeight,e),t.isVector4?(mo.copy(t),t.set(0,0,0,0)):(mo.set(...t,1),t.set(0,0,0)),mo.applyMatrix4(this.bindMatrix);for(let o=0;o<4;o++){const u=l0.getComponent(o);if(u!==0){const f=o0.getComponent(o);u0.multiplyMatrices(i.bones[f].matrixWorld,i.boneInverses[f]),t.addScaledVector(uE.copy(mo).applyMatrix4(u0),u)}}return t.isVector4&&(t.w=mo.w),t.applyMatrix4(this.bindMatrixInverse)}}class cE extends sn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jv extends Cn{constructor(e=null,t=1,i=1,a,o,u,f,d,h=Sn,g=Sn,v,m){super(null,u,f,d,h,g,a,o,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const f0=new wt,fE=new wt;class Xv{constructor(e=[],t=[]){this.uuid=jr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){rt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,a=this.bones.length;i<a;i++)this.boneInverses.push(new wt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new wt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,a=this.boneTexture;for(let o=0,u=e.length;o<u;o++){const f=e[o]?e[o].matrixWorld:fE;f0.multiplyMatrices(f,t[o]),f0.toArray(i,o*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new Xv(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new jv(t,e,e,ci,Ti);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,a=e.bones.length;i<a;i++){const o=e.bones[i];let u=t[o];u===void 0&&(rt("Skeleton: No bone found with UUID:",o),u=new cE),this.bones.push(u),this.boneInverses.push(new wt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let a=0,o=t.length;a<o;a++){const u=t[a];e.bones.push(u.uuid);const f=i[a];e.boneInverses.push(f.toArray())}return e}}const hd=new Y,dE=new Y,hE=new gt;class fs{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=hd.subVectors(i,t).cross(dE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(hd),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hE.getNormalMatrix(e),a=this.coplanarPoint(hd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Es,pE=new Et(.5,.5),cu=new Y;class Vh{constructor(e=new fs,t=new fs,i=new fs,a=new fs,o=new fs,u=new fs){this.planes=[e,t,i,a,o,u]}set(e,t,i,a,o,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(a),f[4].copy(o),f[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Oi,i=!1){const a=this.planes,o=e.elements,u=o[0],f=o[1],d=o[2],h=o[3],g=o[4],v=o[5],m=o[6],_=o[7],M=o[8],b=o[9],y=o[10],S=o[11],R=o[12],T=o[13],P=o[14],F=o[15];if(a[0].setComponents(h-u,_-g,S-M,F-R).normalize(),a[1].setComponents(h+u,_+g,S+M,F+R).normalize(),a[2].setComponents(h+f,_+v,S+b,F+T).normalize(),a[3].setComponents(h-f,_-v,S-b,F-T).normalize(),i)a[4].setComponents(d,m,y,P).normalize(),a[5].setComponents(h-d,_-m,S-y,F-P).normalize();else if(a[4].setComponents(h-d,_-m,S-y,F-P).normalize(),t===Oi)a[5].setComponents(h+d,_+m,S+y,F+P).normalize();else if(t===Po)a[5].setComponents(d,m,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const t=pE.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(cu.x=a.normal.x>0?e.max.x:e.min.x,cu.y=a.normal.y>0?e.max.y:e.min.y,cu.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $v extends gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ku=new Y,Bu=new Y,d0=new wt,go=new ko,fu=new Es,pd=new Y,h0=new Y;class mE extends sn{constructor(e=new Un,t=new $v){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)ku.fromBufferAttribute(t,a-1),Bu.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=ku.distanceTo(Bu);e.setAttribute("lineDistance",new ti(i,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fu.copy(i.boundingSphere),fu.applyMatrix4(a),fu.radius+=o,e.ray.intersectsSphere(fu)===!1)return;d0.copy(a).invert(),go.copy(e.ray).applyMatrix4(d0);const f=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const _=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let b=_,y=M-1;b<y;b+=h){const S=g.getX(b),R=g.getX(b+1),T=du(this,e,go,d,S,R,b);T&&t.push(T)}if(this.isLineLoop){const b=g.getX(M-1),y=g.getX(_),S=du(this,e,go,d,b,y,M-1);S&&t.push(S)}}else{const _=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let b=_,y=M-1;b<y;b+=h){const S=du(this,e,go,d,b,b+1,b);S&&t.push(S)}if(this.isLineLoop){const b=du(this,e,go,d,M-1,_,M-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}}function du(r,e,t,i,a,o,u){const f=r.geometry.attributes.position;if(ku.fromBufferAttribute(f,a),Bu.fromBufferAttribute(f,o),t.distanceSqToSegment(ku,Bu,pd,h0)>i)return;pd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(pd);if(!(h<e.near||h>e.far))return{distance:h,point:h0.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}class gE extends mE{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Yv extends gr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const p0=new wt,mh=new ko,hu=new Es,pu=new Y;class vE extends sn{constructor(e=new Un,t=new Yv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hu.copy(i.boundingSphere),hu.applyMatrix4(a),hu.radius+=o,e.ray.intersectsSphere(hu)===!1)return;p0.copy(a).invert(),mh.copy(e.ray).applyMatrix4(p0);const f=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=i.index,v=i.attributes.position;if(h!==null){const m=Math.max(0,u.start),_=Math.min(h.count,u.start+u.count);for(let M=m,b=_;M<b;M++){const y=h.getX(M);pu.fromBufferAttribute(v,y),m0(pu,y,d,a,e,t,this)}}else{const m=Math.max(0,u.start),_=Math.min(v.count,u.start+u.count);for(let M=m,b=_;M<b;M++)pu.fromBufferAttribute(v,M),m0(pu,M,d,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=a.length;o<u;o++){const f=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=o}}}}}function m0(r,e,t,i,a,o,u){const f=mh.distanceSqToPoint(r);if(f<t){const d=new Y;mh.closestPointToPoint(r,d),d.applyMatrix4(i);const h=a.ray.origin.distanceTo(d);if(h<a.near||h>a.far)return;o.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class qv extends Cn{constructor(e=[],t=gs,i,a,o,u,f,d,h,g){super(e,t,i,a,o,u,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class va extends Cn{constructor(e,t,i=Vi,a,o,u,f=Sn,d=Sn,h,g=pr,v=1){if(g!==pr&&g!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,a,o,u,f,d,g,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xE extends va{constructor(e,t=Vi,i=gs,a,o,u=Sn,f=Sn,d,h=pr){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,i,a,o,u,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kv extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Bo extends Un{constructor(e=1,t=1,i=1,a=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:u};const f=this;a=Math.floor(a),o=Math.floor(o),u=Math.floor(u);const d=[],h=[],g=[],v=[];let m=0,_=0;M("z","y","x",-1,-1,i,t,e,u,o,0),M("z","y","x",1,-1,i,t,-e,u,o,1),M("x","z","y",1,1,e,i,t,a,u,2),M("x","z","y",1,-1,e,i,-t,a,u,3),M("x","y","z",1,-1,e,t,i,a,o,4),M("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(d),this.setAttribute("position",new ti(h,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(v,2));function M(b,y,S,R,T,P,F,N,B,w,I){const V=P/B,z=F/w,q=P/2,he=F/2,le=N/2,W=B+1,ee=w+1;let J=0,Z=0;const ue=new Y;for(let fe=0;fe<ee;fe++){const O=fe*z-he;for(let ne=0;ne<W;ne++){const ke=ne*V-q;ue[b]=ke*R,ue[y]=O*T,ue[S]=le,h.push(ue.x,ue.y,ue.z),ue[b]=0,ue[y]=0,ue[S]=N>0?1:-1,g.push(ue.x,ue.y,ue.z),v.push(ne/B),v.push(1-fe/w),J+=1}}for(let fe=0;fe<w;fe++)for(let O=0;O<B;O++){const ne=m+O+W*fe,ke=m+O+W*(fe+1),Xe=m+(O+1)+W*(fe+1),Be=m+(O+1)+W*fe;d.push(ne,ke,Be),d.push(ke,Xe,Be),Z+=6}f.addGroup(_,Z,I),_+=Z,m+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Hh extends Un{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const o=[],u=[];f(a),h(i),g(),this.setAttribute("position",new ti(o,3)),this.setAttribute("normal",new ti(o.slice(),3)),this.setAttribute("uv",new ti(u,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(R){const T=new Y,P=new Y,F=new Y;for(let N=0;N<t.length;N+=3)_(t[N+0],T),_(t[N+1],P),_(t[N+2],F),d(T,P,F,R)}function d(R,T,P,F){const N=F+1,B=[];for(let w=0;w<=N;w++){B[w]=[];const I=R.clone().lerp(P,w/N),V=T.clone().lerp(P,w/N),z=N-w;for(let q=0;q<=z;q++)q===0&&w===N?B[w][q]=I:B[w][q]=I.clone().lerp(V,q/z)}for(let w=0;w<N;w++)for(let I=0;I<2*(N-w)-1;I++){const V=Math.floor(I/2);I%2===0?(m(B[w][V+1]),m(B[w+1][V]),m(B[w][V])):(m(B[w][V+1]),m(B[w+1][V+1]),m(B[w+1][V]))}}function h(R){const T=new Y;for(let P=0;P<o.length;P+=3)T.x=o[P+0],T.y=o[P+1],T.z=o[P+2],T.normalize().multiplyScalar(R),o[P+0]=T.x,o[P+1]=T.y,o[P+2]=T.z}function g(){const R=new Y;for(let T=0;T<o.length;T+=3){R.x=o[T+0],R.y=o[T+1],R.z=o[T+2];const P=y(R)/2/Math.PI+.5,F=S(R)/Math.PI+.5;u.push(P,1-F)}M(),v()}function v(){for(let R=0;R<u.length;R+=6){const T=u[R+0],P=u[R+2],F=u[R+4],N=Math.max(T,P,F),B=Math.min(T,P,F);N>.9&&B<.1&&(T<.2&&(u[R+0]+=1),P<.2&&(u[R+2]+=1),F<.2&&(u[R+4]+=1))}}function m(R){o.push(R.x,R.y,R.z)}function _(R,T){const P=R*3;T.x=e[P+0],T.y=e[P+1],T.z=e[P+2]}function M(){const R=new Y,T=new Y,P=new Y,F=new Y,N=new Et,B=new Et,w=new Et;for(let I=0,V=0;I<o.length;I+=9,V+=6){R.set(o[I+0],o[I+1],o[I+2]),T.set(o[I+3],o[I+4],o[I+5]),P.set(o[I+6],o[I+7],o[I+8]),N.set(u[V+0],u[V+1]),B.set(u[V+2],u[V+3]),w.set(u[V+4],u[V+5]),F.copy(R).add(T).add(P).divideScalar(3);const z=y(F);b(N,V+0,R,z),b(B,V+2,T,z),b(w,V+4,P,z)}}function b(R,T,P,F){F<0&&R.x===1&&(u[T]=R.x-1),P.x===0&&P.z===0&&(u[T]=F/2/Math.PI+.5)}function y(R){return Math.atan2(R.z,-R.x)}function S(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hh(e.vertices,e.indices,e.radius,e.detail)}}class DR{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),o=0;t.push(0);for(let u=1;u<=e;u++)i=this.getPoint(u/e),o+=i.distanceTo(a),t.push(o),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const o=i.length;let u;t?u=t:u=e*i[o-1];let f=0,d=o-1,h;for(;f<=d;)if(a=Math.floor(f+(d-f)/2),h=i[a]-u,h<0)f=a+1;else if(h>0)d=a-1;else{d=a;break}if(a=d,i[a]===u)return a/(o-1);const g=i[a],m=i[a+1]-g,_=(u-g)/m;return(a+_)/(o-1)}getTangent(e,t){let a=e-1e-4,o=e+1e-4;a<0&&(a=0),o>1&&(o=1);const u=this.getPoint(a),f=this.getPoint(o),d=t||(u.isVector2?new Et:new Y);return d.copy(f).sub(u).normalize(),d}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new Y,a=[],o=[],u=[],f=new Y,d=new wt;for(let _=0;_<=e;_++){const M=_/e;a[_]=this.getTangentAt(M,new Y)}o[0]=new Y,u[0]=new Y;let h=Number.MAX_VALUE;const g=Math.abs(a[0].x),v=Math.abs(a[0].y),m=Math.abs(a[0].z);g<=h&&(h=g,i.set(1,0,0)),v<=h&&(h=v,i.set(0,1,0)),m<=h&&i.set(0,0,1),f.crossVectors(a[0],i).normalize(),o[0].crossVectors(a[0],f),u[0].crossVectors(a[0],o[0]);for(let _=1;_<=e;_++){if(o[_]=o[_-1].clone(),u[_]=u[_-1].clone(),f.crossVectors(a[_-1],a[_]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(St(a[_-1].dot(a[_]),-1,1));o[_].applyMatrix4(d.makeRotationAxis(f,M))}u[_].crossVectors(a[_],o[_])}if(t===!0){let _=Math.acos(St(o[0].dot(o[e]),-1,1));_/=e,a[0].dot(f.crossVectors(o[0],o[e]))>0&&(_=-_);for(let M=1;M<=e;M++)o[M].applyMatrix4(d.makeRotationAxis(a[M],_*M)),u[M].crossVectors(a[M],o[M])}return{tangents:a,normals:o,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function _E(r,e,t=2){const i=e&&e.length,a=i?e[0]*t:r.length;let o=Zv(r,0,a,t,!0);const u=[];if(!o||o.next===o.prev)return u;let f,d,h;if(i&&(o=wE(r,e,o,t)),r.length>80*t){f=r[0],d=r[1];let g=f,v=d;for(let m=t;m<a;m+=t){const _=r[m],M=r[m+1];_<f&&(f=_),M<d&&(d=M),_>g&&(g=_),M>v&&(v=M)}h=Math.max(g-f,v-d),h=h!==0?32767/h:0}return No(o,u,t,f,d,h,0),u}function Zv(r,e,t,i,a){let o;if(a===UE(r,e,t,i)>0)for(let u=e;u<t;u+=i)o=g0(u/i|0,r[u],r[u+1],o);else for(let u=t-i;u>=e;u-=i)o=g0(u/i|0,r[u],r[u+1],o);return o&&xa(o,o.next)&&(Do(o),o=o.next),o}function xs(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(xa(t,t.next)||en(t.prev,t,t.next)===0)){if(Do(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function No(r,e,t,i,a,o,u){if(!r)return;!u&&o&&CE(r,i,a,o);let f=r;for(;r.prev!==r.next;){const d=r.prev,h=r.next;if(o?SE(r,i,a,o):yE(r)){e.push(d.i,r.i,h.i),Do(r),r=h.next,f=h.next;continue}if(r=h,r===f){u?u===1?(r=ME(xs(r),e),No(r,e,t,i,a,o,2)):u===2&&EE(r,e,t,i,a,o):No(xs(r),e,t,i,a,o,1);break}}}function yE(r){const e=r.prev,t=r,i=r.next;if(en(e,t,i)>=0)return!1;const a=e.x,o=t.x,u=i.x,f=e.y,d=t.y,h=i.y,g=Math.min(a,o,u),v=Math.min(f,d,h),m=Math.max(a,o,u),_=Math.max(f,d,h);let M=i.next;for(;M!==e;){if(M.x>=g&&M.x<=m&&M.y>=v&&M.y<=_&&So(a,f,o,d,u,h,M.x,M.y)&&en(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function SE(r,e,t,i){const a=r.prev,o=r,u=r.next;if(en(a,o,u)>=0)return!1;const f=a.x,d=o.x,h=u.x,g=a.y,v=o.y,m=u.y,_=Math.min(f,d,h),M=Math.min(g,v,m),b=Math.max(f,d,h),y=Math.max(g,v,m),S=gh(_,M,e,t,i),R=gh(b,y,e,t,i);let T=r.prevZ,P=r.nextZ;for(;T&&T.z>=S&&P&&P.z<=R;){if(T.x>=_&&T.x<=b&&T.y>=M&&T.y<=y&&T!==a&&T!==u&&So(f,g,d,v,h,m,T.x,T.y)&&en(T.prev,T,T.next)>=0||(T=T.prevZ,P.x>=_&&P.x<=b&&P.y>=M&&P.y<=y&&P!==a&&P!==u&&So(f,g,d,v,h,m,P.x,P.y)&&en(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;T&&T.z>=S;){if(T.x>=_&&T.x<=b&&T.y>=M&&T.y<=y&&T!==a&&T!==u&&So(f,g,d,v,h,m,T.x,T.y)&&en(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;P&&P.z<=R;){if(P.x>=_&&P.x<=b&&P.y>=M&&P.y<=y&&P!==a&&P!==u&&So(f,g,d,v,h,m,P.x,P.y)&&en(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function ME(r,e){let t=r;do{const i=t.prev,a=t.next.next;!xa(i,a)&&Qv(i,t,t.next,a)&&Io(i,a)&&Io(a,i)&&(e.push(i.i,t.i,a.i),Do(t),Do(t.next),t=r=a),t=t.next}while(t!==r);return xs(t)}function EE(r,e,t,i,a,o){let u=r;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&NE(u,f)){let d=ex(u,f);u=xs(u,u.next),d=xs(d,d.next),No(u,e,t,i,a,o,0),No(d,e,t,i,a,o,0);return}f=f.next}u=u.next}while(u!==r)}function wE(r,e,t,i){const a=[];for(let o=0,u=e.length;o<u;o++){const f=e[o]*i,d=o<u-1?e[o+1]*i:r.length,h=Zv(r,f,d,i,!1);h===h.next&&(h.steiner=!0),a.push(LE(h))}a.sort(TE);for(let o=0;o<a.length;o++)t=bE(a[o],t);return t}function TE(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=i-a}return t}function bE(r,e){const t=AE(r,e);if(!t)return e;const i=ex(t,r);return xs(i,i.next),xs(t,t.next)}function AE(r,e){let t=e;const i=r.x,a=r.y;let o=-1/0,u;if(xa(r,t))return t;do{if(xa(r,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const v=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=i&&v>o&&(o=v,u=t.x<t.next.x?t:t.next,v===i))return u}t=t.next}while(t!==e);if(!u)return null;const f=u,d=u.x,h=u.y;let g=1/0;t=u;do{if(i>=t.x&&t.x>=d&&i!==t.x&&Jv(a<h?i:o,a,d,h,a<h?o:i,a,t.x,t.y)){const v=Math.abs(a-t.y)/(i-t.x);Io(t,r)&&(v<g||v===g&&(t.x>u.x||t.x===u.x&&RE(u,t)))&&(u=t,g=v)}t=t.next}while(t!==f);return u}function RE(r,e){return en(r.prev,r,e.prev)<0&&en(e.next,r,r.next)<0}function CE(r,e,t,i){let a=r;do a.z===0&&(a.z=gh(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==r);a.prevZ.nextZ=null,a.prevZ=null,PE(a)}function PE(r){let e,t=1;do{let i=r,a;r=null;let o=null;for(e=0;i;){e++;let u=i,f=0;for(let h=0;h<t&&(f++,u=u.nextZ,!!u);h++);let d=t;for(;f>0||d>0&&u;)f!==0&&(d===0||!u||i.z<=u.z)?(a=i,i=i.nextZ,f--):(a=u,u=u.nextZ,d--),o?o.nextZ=a:r=a,a.prevZ=o,o=a;i=u}o.nextZ=null,t*=2}while(e>1);return r}function gh(r,e,t,i,a){return r=(r-t)*a|0,e=(e-i)*a|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function LE(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Jv(r,e,t,i,a,o,u,f){return(a-u)*(e-f)>=(r-u)*(o-f)&&(r-u)*(i-f)>=(t-u)*(e-f)&&(t-u)*(o-f)>=(a-u)*(i-f)}function So(r,e,t,i,a,o,u,f){return!(r===u&&e===f)&&Jv(r,e,t,i,a,o,u,f)}function NE(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!IE(r,e)&&(Io(r,e)&&Io(e,r)&&DE(r,e)&&(en(r.prev,r,e.prev)||en(r,e.prev,e))||xa(r,e)&&en(r.prev,r,r.next)>0&&en(e.prev,e,e.next)>0)}function en(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function xa(r,e){return r.x===e.x&&r.y===e.y}function Qv(r,e,t,i){const a=gu(en(r,e,t)),o=gu(en(r,e,i)),u=gu(en(t,i,r)),f=gu(en(t,i,e));return!!(a!==o&&u!==f||a===0&&mu(r,t,e)||o===0&&mu(r,i,e)||u===0&&mu(t,r,i)||f===0&&mu(t,e,i))}function mu(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function gu(r){return r>0?1:r<0?-1:0}function IE(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Qv(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Io(r,e){return en(r.prev,r,r.next)<0?en(r,e,r.next)>=0&&en(r,r.prev,e)>=0:en(r,e,r.prev)<0||en(r,r.next,e)<0}function DE(r,e){let t=r,i=!1;const a=(r.x+e.x)/2,o=(r.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&a<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function ex(r,e){const t=vh(r.i,r.x,r.y),i=vh(e.i,e.x,e.y),a=r.next,o=e.prev;return r.next=e,e.prev=r,t.next=a,a.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function g0(r,e,t,i){const a=vh(r,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function Do(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function vh(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function UE(r,e,t,i){let a=0;for(let o=e,u=t-i;o<t;o+=i)a+=(r[u]-r[o])*(r[o+1]+r[u+1]),u=o;return a}class FE{static triangulate(e,t,i=2){return _E(e,t,i)}}class tx{static area(e){const t=e.length;let i=0;for(let a=t-1,o=0;o<t;a=o++)i+=e[a].x*e[o].y-e[o].x*e[a].y;return i*.5}static isClockWise(e){return tx.area(e)<0}static triangulateShape(e,t){const i=[],a=[],o=[];v0(e),x0(i,e);let u=e.length;t.forEach(v0);for(let d=0;d<t.length;d++)a.push(u),u+=t[d].length,x0(i,t[d]);const f=FE.triangulate(i,a);for(let d=0;d<f.length;d+=3)o.push(f.slice(d,d+3));return o}}function v0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function x0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Gh extends Hh{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gh(e.radius,e.detail)}}class Yu extends Un{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,u=t/2,f=Math.floor(i),d=Math.floor(a),h=f+1,g=d+1,v=e/f,m=t/d,_=[],M=[],b=[],y=[];for(let S=0;S<g;S++){const R=S*m-u;for(let T=0;T<h;T++){const P=T*v-o;M.push(P,-R,0),b.push(0,0,1),y.push(T/f),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let R=0;R<f;R++){const T=R+h*S,P=R+h*(S+1),F=R+1+h*(S+1),N=R+1+h*S;_.push(T,P,N),_.push(P,F,N)}this.setIndex(_),this.setAttribute("position",new ti(M,3)),this.setAttribute("normal",new ti(b,3)),this.setAttribute("uv",new ti(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.width,e.height,e.widthSegments,e.heightSegments)}}function _a(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];if(_0(a))a.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(_0(a[0])){const o=[];for(let u=0,f=a.length;u<f;u++)o[u]=a[u].clone();e[t][i]=o}else e[t][i]=a.slice();else e[t][i]=a}}return e}function Dn(r){const e={};for(let t=0;t<r.length;t++){const i=_a(r[t]);for(const a in i)e[a]=i[a]}return e}function _0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function OE(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function nx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const kE={clone:_a,merge:Dn};var BE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BE,this.fragmentShader=zE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=OE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class VE extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class y0 extends gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class UR extends gr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Mt(16777215),this.specular=new Mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Xu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class FR extends gr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=Xu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HE extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GE extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function vu(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function WE(r){function e(a,o){return r[a]-r[o]}const t=r.length,i=new Array(t);for(let a=0;a!==t;++a)i[a]=a;return i.sort(e),i}function S0(r,e,t){const i=r.length,a=new r.constructor(i);for(let o=0,u=0;u!==i;++o){const f=t[o]*e;for(let d=0;d!==e;++d)a[u++]=r[f+d]}return a}function ix(r,e,t,i){let a=1,o=r[0];for(;o!==void 0&&o[i]===void 0;)o=r[a++];if(o===void 0)return;let u=o[i];if(u!==void 0)if(Array.isArray(u))do u=o[i],u!==void 0&&(e.push(o.time),t.push(...u)),o=r[a++];while(o!==void 0);else if(u.toArray!==void 0)do u=o[i],u!==void 0&&(e.push(o.time),u.toArray(t,t.length)),o=r[a++];while(o!==void 0);else do u=o[i],u!==void 0&&(e.push(o.time),t.push(u)),o=r[a++];while(o!==void 0)}class zo{constructor(e,t,i,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,a=t[i],o=t[i-1];e:{t:{let u;n:{i:if(!(e<a)){for(let f=i+2;;){if(a===void 0){if(e<o)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===f)break;if(o=a,a=t[++i],e<a)break t}u=t.length;break n}if(!(e>=o)){const f=t[1];e<f&&(i=2,o=f);for(let d=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(a=o,o=t[--i-1],e>=o)break t}u=i,i=0;break n}break e}for(;i<u;){const f=i+u>>>1;e<t[f]?u=f:i=f+1}if(a=t[i],o=t[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,a)}return this.interpolate_(i,o,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,a=this.valueSize,o=e*a;for(let u=0;u!==a;++u)t[u]=i[o+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class jE extends zo{constructor(e,t,i,a){super(e,t,i,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kg,endingEnd:kg}}intervalChanged_(e,t,i){const a=this.parameterPositions;let o=e-2,u=e+1,f=a[o],d=a[u];if(f===void 0)switch(this.getSettings_().endingStart){case Bg:o=e,f=2*t-i;break;case zg:o=a.length-2,f=t+a[o]-a[o+1];break;default:o=e,f=i}if(d===void 0)switch(this.getSettings_().endingEnd){case Bg:u=e,d=2*i-t;break;case zg:u=1,d=i+a[1]-a[0];break;default:u=e-1,d=t}const h=(i-t)*.5,g=this.valueSize;this._weightPrev=h/(t-f),this._weightNext=h/(d-i),this._offsetPrev=o*g,this._offsetNext=u*g}interpolate_(e,t,i,a){const o=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,g=this._offsetPrev,v=this._offsetNext,m=this._weightPrev,_=this._weightNext,M=(i-t)/(a-t),b=M*M,y=b*M,S=-m*y+2*m*b-m*M,R=(1+m)*y+(-1.5-2*m)*b+(-.5+m)*M+1,T=(-1-_)*y+(1.5+_)*b+.5*M,P=_*y-_*b;for(let F=0;F!==f;++F)o[F]=S*u[g+F]+R*u[h+F]+T*u[d+F]+P*u[v+F];return o}}class XE extends zo{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const o=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,g=(i-t)/(a-t),v=1-g;for(let m=0;m!==f;++m)o[m]=u[h+m]*v+u[d+m]*g;return o}}class $E extends zo{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e){return this.copySampleValue_(e-1)}}class YE extends zo{interpolate_(e,t,i,a){const o=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,g=this.settings||this.DefaultSettings_,v=g.inTangents,m=g.outTangents;if(!v||!m){const b=(i-t)/(a-t),y=1-b;for(let S=0;S!==f;++S)o[S]=u[h+S]*y+u[d+S]*b;return o}const _=f*2,M=e-1;for(let b=0;b!==f;++b){const y=u[h+b],S=u[d+b],R=M*_+b*2,T=m[R],P=m[R+1],F=e*_+b*2,N=v[F],B=v[F+1];let w=(i-t)/(a-t),I,V,z,q,he;for(let le=0;le<8;le++){I=w*w,V=I*w,z=1-w,q=z*z,he=q*z;const ee=he*t+3*q*w*T+3*z*I*N+V*a-i;if(Math.abs(ee)<1e-10)break;const J=3*q*(T-t)+6*z*w*(N-T)+3*I*(a-N);if(Math.abs(J)<1e-10)break;w=w-ee/J,w=Math.max(0,Math.min(1,w))}o[b]=he*y+3*q*w*P+3*z*I*B+V*S}return o}}class bi{constructor(e,t,i,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vu(t,this.TimeBufferType),this.values=vu(i,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:vu(e.times,Array),values:vu(e.values,Array)};const a=e.getInterpolation();a!==e.DefaultInterpolation&&(i.interpolation=a)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $E(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new XE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new YE(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Uu:t=this.InterpolantFactoryMethodDiscrete;break;case hh:t=this.InterpolantFactoryMethodLinear;break;case Gf:t=this.InterpolantFactoryMethodSmooth;break;case Og:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return rt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uu;case this.InterpolantFactoryMethodLinear:return hh;case this.InterpolantFactoryMethodSmooth:return Gf;case this.InterpolantFactoryMethodBezier:return Og}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,a=t.length;i!==a;++i)t[i]*=e}return this}trim(e,t){const i=this.times,a=i.length;let o=0,u=a-1;for(;o!==a&&i[o]<e;)++o;for(;u!==-1&&i[u]>t;)--u;if(++u,o!==0||u!==a){o>=u&&(u=Math.max(u,1),o=u-1);const f=this.getValueSize();this.times=i.slice(o,u),this.values=this.values.slice(o*f,u*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ut("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,a=this.values,o=i.length;o===0&&(ut("KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==o;f++){const d=i[f];if(typeof d=="number"&&isNaN(d)){ut("KeyframeTrack: Time is not a valid number.",this,f,d),e=!1;break}if(u!==null&&u>d){ut("KeyframeTrack: Out of order keys.",this,f,d,u),e=!1;break}u=d}if(a!==void 0&&wM(a))for(let f=0,d=a.length;f!==d;++f){const h=a[f];if(isNaN(h)){ut("KeyframeTrack: Value is not a valid number.",this,f,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),a=this.getInterpolation()===Gf,o=e.length-1;let u=1;for(let f=1;f<o;++f){let d=!1;const h=e[f],g=e[f+1];if(h!==g&&(f!==1||h!==e[0]))if(a)d=!0;else{const v=f*i,m=v-i,_=v+i;for(let M=0;M!==i;++M){const b=t[v+M];if(b!==t[m+M]||b!==t[_+M]){d=!0;break}}}if(d){if(f!==u){e[u]=e[f];const v=f*i,m=u*i;for(let _=0;_!==i;++_)t[m+_]=t[v+_]}++u}}if(o>0){e[u]=e[o];for(let f=o*i,d=u*i,h=0;h!==i;++h)t[d+h]=t[f+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,a=new i(this.name,e,t);return a.createInterpolant=this.createInterpolant,a}}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=hh;class Ma extends bi{constructor(e,t,i){super(e,t,i)}}Ma.prototype.ValueTypeName="bool";Ma.prototype.ValueBufferType=Array;Ma.prototype.DefaultInterpolation=Uu;Ma.prototype.InterpolantFactoryMethodLinear=void 0;Ma.prototype.InterpolantFactoryMethodSmooth=void 0;class rx extends bi{constructor(e,t,i,a){super(e,t,i,a)}}rx.prototype.ValueTypeName="color";class zu extends bi{constructor(e,t,i,a){super(e,t,i,a)}}zu.prototype.ValueTypeName="number";class qE extends zo{constructor(e,t,i,a){super(e,t,i,a)}interpolate_(e,t,i,a){const o=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=(i-t)/(a-t);let h=e*f;for(let g=h+f;h!==g;h+=4)Ss.slerpFlat(o,0,u,h-f,u,h,d);return o}}class qu extends bi{constructor(e,t,i,a){super(e,t,i,a)}InterpolantFactoryMethodLinear(e){return new qE(this.times,this.values,this.getValueSize(),e)}}qu.prototype.ValueTypeName="quaternion";qu.prototype.InterpolantFactoryMethodSmooth=void 0;class Ea extends bi{constructor(e,t,i){super(e,t,i)}}Ea.prototype.ValueTypeName="string";Ea.prototype.ValueBufferType=Array;Ea.prototype.DefaultInterpolation=Uu;Ea.prototype.InterpolantFactoryMethodLinear=void 0;Ea.prototype.InterpolantFactoryMethodSmooth=void 0;class Vu extends bi{constructor(e,t,i,a){super(e,t,i,a)}}Vu.prototype.ValueTypeName="vector";class OR{constructor(e="",t=-1,i=[],a=pM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=a,this.uuid=jr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,a=1/(e.fps||1);for(let u=0,f=i.length;u!==f;++u)t.push(ZE(i[u]).scale(a));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o.userData=JSON.parse(e.userData||"{}"),o}static toJSON(e){const t=[],i=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let o=0,u=i.length;o!==u;++o)t.push(bi.toJSON(i[o]));return a}static CreateFromMorphTargetSequence(e,t,i,a){const o=t.length,u=[];for(let f=0;f<o;f++){let d=[],h=[];d.push((f+o-1)%o,f,(f+1)%o),h.push(0,1,0);const g=WE(d);d=S0(d,1,g),h=S0(h,1,g),!a&&d[0]===0&&(d.push(o),h.push(h[0])),u.push(new zu(".morphTargetInfluences["+t[f].name+"]",d,h).scale(1/i))}return new this(e,-1,u)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const a=e;i=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<i.length;a++)if(i[a].name===t)return i[a];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const a={},o=/^([\w-]*?)([\d]+)$/;for(let f=0,d=e.length;f<d;f++){const h=e[f],g=h.name.match(o);if(g&&g.length>1){const v=g[1];let m=a[v];m||(a[v]=m=[]),m.push(h)}}const u=[];for(const f in a)u.push(this.CreateFromMorphTargetSequence(f,a[f],t,i));return u}static parseAnimation(e,t){if(rt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ut("AnimationClip: No animation in JSONLoader data."),null;const i=function(v,m,_,M,b){if(_.length!==0){const y=[],S=[];ix(_,y,S,M),y.length!==0&&b.push(new v(m,y,S))}},a=[],o=e.name||"default",u=e.fps||30,f=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let v=0;v<h.length;v++){const m=h[v].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const _={};let M;for(M=0;M<m.length;M++)if(m[M].morphTargets)for(let b=0;b<m[M].morphTargets.length;b++)_[m[M].morphTargets[b]]=-1;for(const b in _){const y=[],S=[];for(let R=0;R!==m[M].morphTargets.length;++R){const T=m[M];y.push(T.time),S.push(T.morphTarget===b?1:0)}a.push(new zu(".morphTargetInfluence["+b+"]",y,S))}d=_.length*u}else{const _=".bones["+t[v].name+"]";i(Vu,_+".position",m,"pos",a),i(qu,_+".quaternion",m,"rot",a),i(Vu,_+".scale",m,"scl",a)}}return a.length===0?null:new this(o,d,a,f)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,a=e.length;i!==a;++i){const o=this.tracks[i];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function KE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zu;case"vector":case"vector2":case"vector3":case"vector4":return Vu;case"color":return rx;case"quaternion":return qu;case"bool":case"boolean":return Ma;case"string":return Ea}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ZE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=KE(r.type);if(r.times===void 0){const t=[],i=[];ix(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const To={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(M0(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!M0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function M0(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class sx{constructor(e,t,i){const a=this;let o=!1,u=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(g){f++,o===!1&&a.onStart!==void 0&&a.onStart(g,u,f),o=!0},this.itemEnd=function(g){u++,a.onProgress!==void 0&&a.onProgress(g,u,f),u===f&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,v){return h.push(g,v),this},this.removeHandler=function(g){const v=h.indexOf(g);return v!==-1&&h.splice(v,2),this},this.getHandler=function(g){for(let v=0,m=h.length;v<m;v+=2){const _=h[v],M=h[v+1];if(_.global&&(_.lastIndex=0),_.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const JE=new sx;class Ku{constructor(e){this.manager=e!==void 0?e:JE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ku.DEFAULT_MATERIAL_NAME="__DEFAULT";const ar={};class QE extends Error{constructor(e,t){super(e),this.response=t}}class kR extends Ku{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=To.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(ar[e]!==void 0){ar[e].push({onLoad:t,onProgress:i,onError:a});return}ar[e]=[],ar[e].push({onLoad:t,onProgress:i,onError:a});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,d=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&rt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const g=ar[e],v=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),_=m?parseInt(m):0,M=_!==0;let b=0;const y=new ReadableStream({start(S){R();function R(){v.read().then(({done:T,value:P})=>{if(T)S.close();else{b+=P.byteLength;const F=new ProgressEvent("progress",{lengthComputable:M,loaded:b,total:_});for(let N=0,B=g.length;N<B;N++){const w=g[N];w.onProgress&&w.onProgress(F)}S.enqueue(P),R()}},T=>{S.error(T)})}}});return new Response(y)}else throw new QE(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return h.json();default:if(f==="")return h.text();{const v=/charset="?([^;"\s]*)"?/i.exec(f),m=v&&v[1]?v[1].toLowerCase():void 0,_=new TextDecoder(m);return h.arrayBuffer().then(M=>_.decode(M))}}}).then(h=>{To.add(`file:${e}`,h);const g=ar[e];delete ar[e];for(let v=0,m=g.length;v<m;v++){const _=g[v];_.onLoad&&_.onLoad(h)}}).catch(h=>{const g=ar[e];if(g===void 0)throw this.manager.itemError(e),h;delete ar[e];for(let v=0,m=g.length;v<m;v++){const _=g[v];_.onError&&_.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const aa=new WeakMap;class e1 extends Ku{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,u=To.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(u),o.manager.itemEnd(e)},0);else{let v=aa.get(u);v===void 0&&(v=[],aa.set(u,v)),v.push({onLoad:t,onError:a})}return u}const f=Lo("img");function d(){g(),t&&t(this);const v=aa.get(this)||[];for(let m=0;m<v.length;m++){const _=v[m];_.onLoad&&_.onLoad(this)}aa.delete(this),o.manager.itemEnd(e)}function h(v){g(),a&&a(v),To.remove(`image:${e}`);const m=aa.get(this)||[];for(let _=0;_<m.length;_++){const M=m[_];M.onError&&M.onError(v)}aa.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function g(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),To.add(`image:${e}`,f),o.manager.itemStart(e),f.src=e,f}}class t1 extends Ku{constructor(e){super(e)}load(e,t,i,a){const o=new Cn,u=new e1(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){o.image=f,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class Zu extends sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const md=new wt,E0=new Y,w0=new Y;class Wh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vh,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;E0.setFromMatrixPosition(e.matrixWorld),t.position.copy(E0),w0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(w0),t.updateMatrixWorld(),md.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(md,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Po||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xu=new Y,_u=new Ss,Ii=new Y;class ax extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xu,_u,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xu,_u,Ii.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(xu,_u,Ii),Ii.x===1&&Ii.y===1&&Ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xu,_u,Ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new Y,T0=new Et,b0=new Et;class jn extends ax{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,T0,b0),t.subVectors(b0,T0)}setViewOffset(e,t,i,a,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Eo*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;o+=u.offsetX*a/d,t-=u.offsetY*i/h,a*=u.width/d,i*=u.height/h}const f=this.filmOffset;f!==0&&(o+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class n1 extends Wh{constructor(){super(new jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=ga*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(i!==t.fov||a!==t.aspect||o!==t.far)&&(t.fov=i,t.aspect=a,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class BR extends Zu{constructor(e,t,i=0,a=Math.PI/3,o=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.distance=i,this.angle=a,this.penumbra=o,this.decay=u,this.map=null,this.shadow=new n1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class i1 extends Wh{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0}}class zR extends Zu{constructor(e,t,i=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new i1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class jh extends ax{constructor(e=-1,t=1,i=1,a=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,u=i+e,f=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(o,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class r1 extends Wh{constructor(){super(new jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class A0 extends Zu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new r1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class s1 extends Zu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class VR{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const oa=-90,la=1;class a1 extends sn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new jn(oa,la,e,t);a.layers=this.layers,this.add(a);const o=new jn(oa,la,e,t);o.layers=this.layers,this.add(o);const u=new jn(oa,la,e,t);u.layers=this.layers,this.add(u);const f=new jn(oa,la,e,t);f.layers=this.layers,this.add(f);const d=new jn(oa,la,e,t);d.layers=this.layers,this.add(d);const h=new jn(oa,la,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,u,f,d]=t;for(const h of t)this.remove(h);if(e===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Po)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,f,d,h,g]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,2,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,3,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,m,_),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class o1 extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xh="\\[\\]\\.:\\/",l1=new RegExp("["+Xh+"]","g"),$h="[^"+Xh+"]",u1="[^"+Xh.replace("\\.","")+"]",c1=/((?:WC+[\/:])*)/.source.replace("WC",$h),f1=/(WCOD+)?/.source.replace("WCOD",u1),d1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$h),h1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$h),p1=new RegExp("^"+c1+f1+d1+h1+"$"),m1=["material","materials","bones","map"];class g1{constructor(e,t,i){const a=i||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,a=this._bindings[i];a!==void 0&&a.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let a=this._targetGroup.nCachedObjects_,o=i.length;a!==o;++a)i[a].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class zt{constructor(e,t,i){this.path=t,this.parsedPath=i||zt.parseTrackName(t),this.node=zt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new zt.Composite(e,t,i):new zt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(l1,"")}static parseTrackName(e){const t=p1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=i.nodeName&&i.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){const o=i.nodeName.substring(a+1);m1.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,a),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(o){for(let u=0;u<o.length;u++){const f=o[u];if(f.name===t||f.uuid===t)return f;const d=i(f.children);if(d)return d}return null},a=i(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)e[t++]=i[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let a=0,o=i.length;a!==o;++a)i[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,a=t.propertyName;let o=t.propertyIndex;if(e||(e=zt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===h){h=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[a];if(u===void 0){const h=t.nodeName;ut("PropertyBinding: Trying to update property for track: "+h+"."+a+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(o!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=o}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=a;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}zt.Composite=g1;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const R0=new wt;class v1{constructor(e,t,i=0,a=1/0){this.ray=new ko(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new Bh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return R0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(R0),this}intersectObject(e,t=!0,i=[]){return xh(e,this,i,t),i.sort(C0),i}intersectObjects(e,t=!0,i=[]){for(let a=0,o=e.length;a<o;a++)xh(e[a],this,i,t);return i.sort(C0),i}}function C0(r,e){return r.distance-e.distance}function xh(r,e,t,i){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const o=r.children;for(let u=0,f=o.length;u<f;u++)xh(o[u],e,t,!0)}}const Jh=class Jh{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=a,this}};Jh.prototype.isMatrix2=!0;let P0=Jh;function L0(r,e,t,i){const a=x1(i);switch(t){case Ov:return r*e;case Bv:return r*e/a.components*a.byteLength;case Nh:return r*e/a.components*a.byteLength;case vs:return r*e*2/a.components*a.byteLength;case Ih:return r*e*2/a.components*a.byteLength;case kv:return r*e*3/a.components*a.byteLength;case ci:return r*e*4/a.components*a.byteLength;case Dh:return r*e*4/a.components*a.byteLength;case Au:case Ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cu:case Pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kd:case zd:return Math.max(r,16)*Math.max(e,8)/4;case Od:case Bd:return Math.max(r,8)*Math.max(e,8)/2;case Vd:case Hd:case Wd:case jd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gd:case Iu:case Xd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case qd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case eh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case th:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case nh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ih:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case rh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case sh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ah:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case oh:case lh:case uh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ch:case fh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Du:case dh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function x1(r){switch(r){case ei:case Iv:return{byteLength:1,components:1};case Ao:case Dv:case hr:return{byteLength:2,components:1};case Ph:case Lh:return{byteLength:2,components:4};case Vi:case Ch:case Ti:return{byteLength:4,components:1};case Uv:case Fv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ox(){let r=null,e=!1,t=null,i=null;function a(o,u){t(o,u),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function _1(r){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,v=h.byteLength,m=r.createBuffer();r.bindBuffer(d,m),r.bufferData(d,h,g),f.onUploadCallback();let _;if(h instanceof Float32Array)_=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=r.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?_=r.HALF_FLOAT:_=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=r.SHORT;else if(h instanceof Uint32Array)_=r.UNSIGNED_INT;else if(h instanceof Int32Array)_=r.INT;else if(h instanceof Int8Array)_=r.BYTE;else if(h instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function i(f,d,h){const g=d.array,v=d.updateRanges;if(r.bindBuffer(h,f),v.length===0)r.bufferSubData(h,0,g);else{v.sort((_,M)=>_.start-M.start);let m=0;for(let _=1;_<v.length;_++){const M=v[m],b=v[_];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++m,v[m]=b)}v.length=m+1;for(let _=0,M=v.length;_<M;_++){const b=v[_];r.bufferSubData(h,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(r.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:a,remove:o,update:u}}var y1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S1=`#ifdef USE_ALPHAHASH
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
#endif`,M1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b1=`#ifdef USE_AOMAP
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
#endif`,A1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R1=`#ifdef USE_BATCHING
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
#endif`,C1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I1=`#ifdef USE_IRIDESCENCE
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
#endif`,D1=`#ifdef USE_BUMPMAP
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
#endif`,U1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,z1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,H1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,G1=`#define PI 3.141592653589793
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
} // validated`,W1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,j1=`vec3 transformedNormal = objectNormal;
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
#endif`,X1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J1=`#ifdef USE_ENVMAP
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
#endif`,Q1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ew=`#ifdef USE_ENVMAP
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
#endif`,tw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ow=`#ifdef USE_GRADIENTMAP
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
}`,lw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,dw=`#ifdef USE_ENVMAP
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
#endif`,hw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vw=`PhysicalMaterial material;
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
#endif`,xw=`uniform sampler2D dfgLUT;
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
}`,_w=`
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
#endif`,yw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ww=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Aw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pw=`#if defined( USE_POINTS_UV )
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
#endif`,Lw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fw=`#ifdef USE_MORPHTARGETS
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
#endif`,Ow=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gw=`#ifdef USE_NORMALMAP
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
#endif`,Ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$w=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sT=`float getShadowMask() {
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
}`,aT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oT=`#ifdef USE_SKINNING
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
#endif`,lT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uT=`#ifdef USE_SKINNING
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
#endif`,cT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pT=`#ifdef USE_TRANSMISSION
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
#endif`,mT=`#ifdef USE_TRANSMISSION
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
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ST=`uniform sampler2D t2D;
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
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`#include <common>
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
}`,AT=`#if DEPTH_PACKING == 3200
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
}`,RT=`#define DISTANCE
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
}`,CT=`#define DISTANCE
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
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`uniform float scale;
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
}`,IT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,UT=`uniform vec3 diffuse;
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
}`,FT=`#define LAMBERT
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
}`,OT=`#define LAMBERT
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
}`,kT=`#define MATCAP
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
}`,BT=`#define MATCAP
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
}`,zT=`#define NORMAL
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
}`,VT=`#define NORMAL
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
}`,HT=`#define PHONG
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
}`,GT=`#define PHONG
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
}`,WT=`#define STANDARD
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
}`,jT=`#define STANDARD
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
}`,XT=`#define TOON
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
}`,$T=`#define TOON
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
}`,YT=`uniform float size;
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
}`,qT=`uniform vec3 diffuse;
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
}`,KT=`#include <common>
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
}`,ZT=`uniform vec3 color;
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
}`,JT=`uniform float rotation;
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
}`,QT=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:y1,alphahash_pars_fragment:S1,alphamap_fragment:M1,alphamap_pars_fragment:E1,alphatest_fragment:w1,alphatest_pars_fragment:T1,aomap_fragment:b1,aomap_pars_fragment:A1,batching_pars_vertex:R1,batching_vertex:C1,begin_vertex:P1,beginnormal_vertex:L1,bsdfs:N1,iridescence_fragment:I1,bumpmap_pars_fragment:D1,clipping_planes_fragment:U1,clipping_planes_pars_fragment:F1,clipping_planes_pars_vertex:O1,clipping_planes_vertex:k1,color_fragment:B1,color_pars_fragment:z1,color_pars_vertex:V1,color_vertex:H1,common:G1,cube_uv_reflection_fragment:W1,defaultnormal_vertex:j1,displacementmap_pars_vertex:X1,displacementmap_vertex:$1,emissivemap_fragment:Y1,emissivemap_pars_fragment:q1,colorspace_fragment:K1,colorspace_pars_fragment:Z1,envmap_fragment:J1,envmap_common_pars_fragment:Q1,envmap_pars_fragment:ew,envmap_pars_vertex:tw,envmap_physical_pars_fragment:dw,envmap_vertex:nw,fog_vertex:iw,fog_pars_vertex:rw,fog_fragment:sw,fog_pars_fragment:aw,gradientmap_pars_fragment:ow,lightmap_pars_fragment:lw,lights_lambert_fragment:uw,lights_lambert_pars_fragment:cw,lights_pars_begin:fw,lights_toon_fragment:hw,lights_toon_pars_fragment:pw,lights_phong_fragment:mw,lights_phong_pars_fragment:gw,lights_physical_fragment:vw,lights_physical_pars_fragment:xw,lights_fragment_begin:_w,lights_fragment_maps:yw,lights_fragment_end:Sw,lightprobes_pars_fragment:Mw,logdepthbuf_fragment:Ew,logdepthbuf_pars_fragment:ww,logdepthbuf_pars_vertex:Tw,logdepthbuf_vertex:bw,map_fragment:Aw,map_pars_fragment:Rw,map_particle_fragment:Cw,map_particle_pars_fragment:Pw,metalnessmap_fragment:Lw,metalnessmap_pars_fragment:Nw,morphinstance_vertex:Iw,morphcolor_vertex:Dw,morphnormal_vertex:Uw,morphtarget_pars_vertex:Fw,morphtarget_vertex:Ow,normal_fragment_begin:kw,normal_fragment_maps:Bw,normal_pars_fragment:zw,normal_pars_vertex:Vw,normal_vertex:Hw,normalmap_pars_fragment:Gw,clearcoat_normal_fragment_begin:Ww,clearcoat_normal_fragment_maps:jw,clearcoat_pars_fragment:Xw,iridescence_pars_fragment:$w,opaque_fragment:Yw,packing:qw,premultiplied_alpha_fragment:Kw,project_vertex:Zw,dithering_fragment:Jw,dithering_pars_fragment:Qw,roughnessmap_fragment:eT,roughnessmap_pars_fragment:tT,shadowmap_pars_fragment:nT,shadowmap_pars_vertex:iT,shadowmap_vertex:rT,shadowmask_pars_fragment:sT,skinbase_vertex:aT,skinning_pars_vertex:oT,skinning_vertex:lT,skinnormal_vertex:uT,specularmap_fragment:cT,specularmap_pars_fragment:fT,tonemapping_fragment:dT,tonemapping_pars_fragment:hT,transmission_fragment:pT,transmission_pars_fragment:mT,uv_pars_fragment:gT,uv_pars_vertex:vT,uv_vertex:xT,worldpos_vertex:_T,background_vert:yT,background_frag:ST,backgroundCube_vert:MT,backgroundCube_frag:ET,cube_vert:wT,cube_frag:TT,depth_vert:bT,depth_frag:AT,distance_vert:RT,distance_frag:CT,equirect_vert:PT,equirect_frag:LT,linedashed_vert:NT,linedashed_frag:IT,meshbasic_vert:DT,meshbasic_frag:UT,meshlambert_vert:FT,meshlambert_frag:OT,meshmatcap_vert:kT,meshmatcap_frag:BT,meshnormal_vert:zT,meshnormal_frag:VT,meshphong_vert:HT,meshphong_frag:GT,meshphysical_vert:WT,meshphysical_frag:jT,meshtoon_vert:XT,meshtoon_frag:$T,points_vert:YT,points_frag:qT,shadow_vert:KT,shadow_frag:ZT,sprite_vert:JT,sprite_frag:QT},He={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ui={basic:{uniforms:Dn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Dn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Dn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Dn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Dn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Mt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Dn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Dn([He.points,He.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Dn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Dn([He.common,He.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Dn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Dn([He.sprite,He.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Dn([He.common,He.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Dn([He.lights,He.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Ui.physical={uniforms:Dn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const yu={r:0,b:0,g:0},eb=new wt,lx=new gt;lx.set(-1,0,0,0,1,0,0,0,1);function tb(r,e,t,i,a,o){const u=new Mt(0);let f=a===!0?0:1,d,h,g=null,v=0,m=null;function _(R){let T=R.isScene===!0?R.background:null;if(T&&T.isTexture){const P=R.backgroundBlurriness>0;T=e.get(T,P)}return T}function M(R){let T=!1;const P=_(R);P===null?y(u,f):P&&P.isColor&&(y(P,1),T=!0);const F=r.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(r.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(R,T){const P=_(T);P&&(P.isCubeTexture||P.mapping===$u)?(h===void 0&&(h=new fi(new Bo(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:_a(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,N,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(eb.makeRotationFromEuler(T.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(lx),h.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Ft,(g!==P||v!==P.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,g=P,v=P.version,m=r.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new fi(new Yu(2,2),new Gi({name:"BackgroundMaterial",uniforms:_a(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Ft,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||v!==P.version||m!==r.toneMapping)&&(d.material.needsUpdate=!0,g=P,v=P.version,m=r.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,T){R.getRGB(yu,nx(r)),t.buffers.color.setClear(yu.r,yu.g,yu.b,T,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,T=1){u.set(R),f=T,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,y(u,f)},render:M,addToRenderList:b,dispose:S}}function nb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=m(null);let o=a,u=!1;function f(z,q,he,le,W){let ee=!1;const J=v(z,le,he,q);o!==J&&(o=J,h(o.object)),ee=_(z,le,he,W),ee&&M(z,le,he,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,P(z,q,he,le),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return r.createVertexArray()}function h(z){return r.bindVertexArray(z)}function g(z){return r.deleteVertexArray(z)}function v(z,q,he,le){const W=le.wireframe===!0;let ee=i[q.id];ee===void 0&&(ee={},i[q.id]=ee);const J=z.isInstancedMesh===!0?z.id:0;let Z=ee[J];Z===void 0&&(Z={},ee[J]=Z);let ue=Z[he.id];ue===void 0&&(ue={},Z[he.id]=ue);let fe=ue[W];return fe===void 0&&(fe=m(d()),ue[W]=fe),fe}function m(z){const q=[],he=[],le=[];for(let W=0;W<t;W++)q[W]=0,he[W]=0,le[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:he,attributeDivisors:le,object:z,attributes:{},index:null}}function _(z,q,he,le){const W=o.attributes,ee=q.attributes;let J=0;const Z=he.getAttributes();for(const ue in Z)if(Z[ue].location>=0){const O=W[ue];let ne=ee[ue];if(ne===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(ne=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(ne=z.instanceColor)),O===void 0||O.attribute!==ne||ne&&O.data!==ne.data)return!0;J++}return o.attributesNum!==J||o.index!==le}function M(z,q,he,le){const W={},ee=q.attributes;let J=0;const Z=he.getAttributes();for(const ue in Z)if(Z[ue].location>=0){let O=ee[ue];O===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(O=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(O=z.instanceColor));const ne={};ne.attribute=O,O&&O.data&&(ne.data=O.data),W[ue]=ne,J++}o.attributes=W,o.attributesNum=J,o.index=le}function b(){const z=o.newAttributes;for(let q=0,he=z.length;q<he;q++)z[q]=0}function y(z){S(z,0)}function S(z,q){const he=o.newAttributes,le=o.enabledAttributes,W=o.attributeDivisors;he[z]=1,le[z]===0&&(r.enableVertexAttribArray(z),le[z]=1),W[z]!==q&&(r.vertexAttribDivisor(z,q),W[z]=q)}function R(){const z=o.newAttributes,q=o.enabledAttributes;for(let he=0,le=q.length;he<le;he++)q[he]!==z[he]&&(r.disableVertexAttribArray(he),q[he]=0)}function T(z,q,he,le,W,ee,J){J===!0?r.vertexAttribIPointer(z,q,he,W,ee):r.vertexAttribPointer(z,q,he,le,W,ee)}function P(z,q,he,le){b();const W=le.attributes,ee=he.getAttributes(),J=q.defaultAttributeValues;for(const Z in ee){const ue=ee[Z];if(ue.location>=0){let fe=W[Z];if(fe===void 0&&(Z==="instanceMatrix"&&z.instanceMatrix&&(fe=z.instanceMatrix),Z==="instanceColor"&&z.instanceColor&&(fe=z.instanceColor)),fe!==void 0){const O=fe.normalized,ne=fe.itemSize,ke=e.get(fe);if(ke===void 0)continue;const Xe=ke.buffer,Be=ke.type,pe=ke.bytesPerElement,Ae=Be===r.INT||Be===r.UNSIGNED_INT||fe.gpuType===Ch;if(fe.isInterleavedBufferAttribute){const _e=fe.data,ze=_e.stride,Qe=fe.offset;if(_e.isInstancedInterleavedBuffer){for(let st=0;st<ue.locationSize;st++)S(ue.location+st,_e.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let st=0;st<ue.locationSize;st++)y(ue.location+st);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let st=0;st<ue.locationSize;st++)T(ue.location+st,ne/ue.locationSize,Be,O,ze*pe,(Qe+ne/ue.locationSize*st)*pe,Ae)}else{if(fe.isInstancedBufferAttribute){for(let _e=0;_e<ue.locationSize;_e++)S(ue.location+_e,fe.meshPerAttribute);z.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let _e=0;_e<ue.locationSize;_e++)y(ue.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let _e=0;_e<ue.locationSize;_e++)T(ue.location+_e,ne/ue.locationSize,Be,O,ne*pe,ne/ue.locationSize*_e*pe,Ae)}}else if(J!==void 0){const O=J[Z];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(ue.location,O);break;case 3:r.vertexAttrib3fv(ue.location,O);break;case 4:r.vertexAttrib4fv(ue.location,O);break;default:r.vertexAttrib1fv(ue.location,O)}}}}R()}function F(){I();for(const z in i){const q=i[z];for(const he in q){const le=q[he];for(const W in le){const ee=le[W];for(const J in ee)g(ee[J].object),delete ee[J];delete le[W]}}delete i[z]}}function N(z){if(i[z.id]===void 0)return;const q=i[z.id];for(const he in q){const le=q[he];for(const W in le){const ee=le[W];for(const J in ee)g(ee[J].object),delete ee[J];delete le[W]}}delete i[z.id]}function B(z){for(const q in i){const he=i[q];for(const le in he){const W=he[le];if(W[z.id]===void 0)continue;const ee=W[z.id];for(const J in ee)g(ee[J].object),delete ee[J];delete W[z.id]}}}function w(z){for(const q in i){const he=i[q],le=z.isInstancedMesh===!0?z.id:0,W=he[le];if(W!==void 0){for(const ee in W){const J=W[ee];for(const Z in J)g(J[Z].object),delete J[Z];delete W[ee]}delete he[le],Object.keys(he).length===0&&delete i[q]}}}function I(){V(),u=!0,o!==a&&(o=a,h(o.object))}function V(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:I,resetDefaultState:V,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:w,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:y,disableUnusedAttributes:R}}function ib(r,e,t){let i;function a(d){i=d}function o(d,h){r.drawArrays(i,d,h),t.update(h,i,1)}function u(d,h,g){g!==0&&(r.drawArraysInstanced(i,d,h,g),t.update(h,i,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,g);let m=0;for(let _=0;_<g;_++)m+=h[_];t.update(m,i,1)}this.setMode=a,this.render=o,this.renderInstances=u,this.renderMultiDraw=f}function rb(r,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(B){return!(B!==ci&&i.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const w=B===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ei&&i.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ti&&!w)}function d(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(rt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:_,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:T,maxFragmentUniforms:P,maxSamples:F,samples:N}}function sb(r){const e=this;let t=null,i=0,a=!1,o=!1;const u=new fs,f=new gt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const _=v.length!==0||m||i!==0||a;return a=m,i=v.length,_},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,m){t=g(v,m,0)},this.setState=function(v,m,_){const M=v.clippingPlanes,b=v.clipIntersection,y=v.clipShadows,S=r.get(v);if(!a||M===null||M.length===0||o&&!y)o?g(null):h();else{const R=o?0:i,T=R*4;let P=S.clippingState||null;d.value=P,P=g(M,m,T,_);for(let F=0;F!==T;++F)P[F]=t[F];S.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(v,m,_,M){const b=v!==null?v.length:0;let y=null;if(b!==0){if(y=d.value,M!==!0||y===null){const S=_+b*4,R=m.matrixWorldInverse;f.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let T=0,P=_;T!==b;++T,P+=4)u.copy(v[T]).applyMatrix4(R,f),u.normal.toArray(y,P),y[P+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const Gr=4,N0=[.125,.215,.35,.446,.526,.582],hs=20,ab=256,vo=new jh,I0=new Mt;let gd=null,vd=0,xd=0,_d=!1;const ob=new Y;class D0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,o={}){const{size:u=256,position:f=ob}=o;gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,a,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=F0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gd,vd,xd),this._renderer.xr.enabled=_d,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gs||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gd=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:hr,format:ci,colorSpace:Fu,depthBuffer:!1},a=U0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U0(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lb(o)),this._blurMaterial=cb(o,e,t),this._ggxMaterial=ub(o,e,t)}return a}_compileMaterial(e){const t=new fi(new Un,e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,i,a,o){const d=new jn(90,1,t,i),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,_=v.toneMapping;v.getClearColor(I0),v.toneMapping=ki,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new Bo,new zh({name:"PMREM.Background",side:$n,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy(I0),S=!0);for(let T=0;T<6;T++){const P=T%3;P===0?(d.up.set(0,h[T],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+g[T],o.y,o.z)):P===1?(d.up.set(0,0,h[T]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+g[T],o.z)):(d.up.set(0,h[T],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+g[T]));const F=this._cubeSize;ua(a,P*F,T>2?F:0,F,F),v.setRenderTarget(a),S&&v.render(b,d),v.render(e,d)}v.toneMapping=_,v.autoClear=m,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===gs||e.mapping===ma;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=O0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=F0());const o=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const f=o.uniforms;f.envMap.value=e;const d=this._cubeSize;ua(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,vo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[i];f.material=u;const d=u.uniforms,h=i/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),m=0+h*1.25,_=v*m,{_lodMax:M}=this,b=this._sizeLods[i],y=3*b*(i>M-Gr?i-M+Gr:0),S=4*(this._cubeSize-b);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=M-t,ua(o,y,S,3*b,2*b),a.setRenderTarget(o),a.render(f,vo),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=M-i,ua(e,y,S,3*b,2*b),a.setRenderTarget(e),a.render(f,vo)}_blur(e,t,i,a,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,a,"latitudinal",o),this._halfBlur(u,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[a];v.material=h;const m=h.uniforms,_=this._sizeLods[i]-1,M=isFinite(o)?Math.PI/(2*_):2*Math.PI/(2*hs-1),b=o/M,y=isFinite(o)?1+Math.floor(g*b):hs;y>hs&&rt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${hs}`);const S=[];let R=0;for(let B=0;B<hs;++B){const w=B/b,I=Math.exp(-w*w/2);S.push(I),B===0?R+=I:B<y&&(R+=2*I)}for(let B=0;B<S.length;B++)S[B]=S[B]/R;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=S,m.latitudinal.value=u==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:T}=this;m.dTheta.value=M,m.mipInt.value=T-i;const P=this._sizeLods[a],F=3*P*(a>T-Gr?a-T+Gr:0),N=4*(this._cubeSize-P);ua(t,F,N,3*P,2*P),d.setRenderTarget(t),d.render(v,vo)}}function lb(r){const e=[],t=[],i=[];let a=r;const o=r-Gr+1+N0.length;for(let u=0;u<o;u++){const f=Math.pow(2,a);e.push(f);let d=1/f;u>r-Gr?d=N0[u-r+Gr-1]:u===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,v=1+h,m=[g,g,v,g,v,v,g,g,v,v,g,v],_=6,M=6,b=3,y=2,S=1,R=new Float32Array(b*M*_),T=new Float32Array(y*M*_),P=new Float32Array(S*M*_);for(let N=0;N<_;N++){const B=N%3*2/3-1,w=N>2?0:-1,I=[B,w,0,B+2/3,w,0,B+2/3,w+1,0,B,w,0,B+2/3,w+1,0,B,w+1,0];R.set(I,b*M*N),T.set(m,y*M*N);const V=[N,N,N,N,N,N];P.set(V,S*M*N)}const F=new Un;F.setAttribute("position",new Xn(R,b)),F.setAttribute("uv",new Xn(T,y)),F.setAttribute("faceIndex",new Xn(P,S)),i.push(new fi(F,null)),a>Gr&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function U0(r,e,t){const i=new Bi(r,e,t);return i.texture.mapping=$u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ua(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function ub(r,e,t){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ab,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function cb(r,e,t){const i=new Float32Array(hs),a=new Y(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function F0(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:cr,depthTest:!1,depthWrite:!1})}function O0(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Ju(){return`

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
	`}class ux extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new qv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Bo(5,5,5),o=new Gi({name:"CubemapFromEquirect",uniforms:_a(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$n,blending:cr});o.uniforms.tEquirect.value=t;const u=new fi(a,o),f=t.minFilter;return t.minFilter===ps&&(t.minFilter=Rn),new a1(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,a);e.setRenderTarget(o)}}function fb(r){let e=new WeakMap,t=new WeakMap,i=null;function a(m,_=!1){return m==null?null:_?u(m):o(m)}function o(m){if(m&&m.isTexture){const _=m.mapping;if(_===zf||_===Vf)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const b=new ux(M.height);return b.fromEquirectangularTexture(r,m),e.set(m,b),m.addEventListener("dispose",h),f(b.texture,m.mapping)}else return null}}return m}function u(m){if(m&&m.isTexture){const _=m.mapping,M=_===zf||_===Vf,b=_===gs||_===ma;if(M||b){let y=t.get(m);const S=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new D0(r)),y=M?i.fromEquirectangular(m,y):i.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const R=m.image;return M&&R&&R.height>0||b&&R&&d(R)?(i===null&&(i=new D0(r)),y=M?i.fromEquirectangular(m):i.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function f(m,_){return _===zf?m.mapping=gs:_===Vf&&(m.mapping=ma),m}function d(m){let _=0;const M=6;for(let b=0;b<M;b++)m[b]!==void 0&&_++;return _===M}function h(m){const _=m.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function g(m){const _=m.target;_.removeEventListener("dispose",g);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:v}}function db(r){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=r.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&ph("WebGLRenderer: "+i+" extension not supported."),a}}}function hb(r,e,t,i){const a={},o=new WeakMap;function u(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",u),delete a[m.id];const _=o.get(m);_&&(e.remove(_),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(v,m){return a[m.id]===!0||(m.addEventListener("dispose",u),a[m.id]=!0,t.memory.geometries++),m}function d(v){const m=v.attributes;for(const _ in m)e.update(m[_],r.ARRAY_BUFFER)}function h(v){const m=[],_=v.index,M=v.attributes.position;let b=0;if(M===void 0)return;if(_!==null){const R=_.array;b=_.version;for(let T=0,P=R.length;T<P;T+=3){const F=R[T+0],N=R[T+1],B=R[T+2];m.push(F,N,N,B,B,F)}}else{const R=M.array;b=M.version;for(let T=0,P=R.length/3-1;T<P;T+=3){const F=T+0,N=T+1,B=T+2;m.push(F,N,N,B,B,F)}}const y=new(M.count>=65535?Wv:Gv)(m,1);y.version=b;const S=o.get(v);S&&e.remove(S),o.set(v,y)}function g(v){const m=o.get(v);if(m){const _=v.index;_!==null&&m.version<_.version&&h(v)}else h(v);return o.get(v)}return{get:f,update:d,getWireframeAttribute:g}}function pb(r,e,t){let i;function a(v){i=v}let o,u;function f(v){o=v.type,u=v.bytesPerElement}function d(v,m){r.drawElements(i,m,o,v*u),t.update(m,i,1)}function h(v,m,_){_!==0&&(r.drawElementsInstanced(i,m,o,v*u,_),t.update(m,i,_))}function g(v,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,v,0,_);let b=0;for(let y=0;y<_;y++)b+=m[y];t.update(b,i,1)}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function mb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(o/3);break;case r.LINES:t.lines+=f*(o/2);break;case r.LINE_STRIP:t.lines+=f*(o-1);break;case r.LINE_LOOP:t.lines+=f*o;break;case r.POINTS:t.points+=f*o;break;default:ut("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function gb(r,e,t){const i=new WeakMap,a=new Ht;function o(u,f,d){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let m=i.get(f);if(m===void 0||m.count!==v){let I=function(){B.dispose(),i.delete(f),f.removeEventListener("dispose",I)};m!==void 0&&m.texture.dispose();const _=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],S=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let T=0;_===!0&&(T=1),M===!0&&(T=2),b===!0&&(T=3);let P=f.attributes.position.count*T,F=1;P>e.maxTextureSize&&(F=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const N=new Float32Array(P*F*4*v),B=new Vv(N,P,F,v);B.type=Ti,B.needsUpdate=!0;const w=T*4;for(let V=0;V<v;V++){const z=y[V],q=S[V],he=R[V],le=P*F*4*V;for(let W=0;W<z.count;W++){const ee=W*w;_===!0&&(a.fromBufferAttribute(z,W),N[le+ee+0]=a.x,N[le+ee+1]=a.y,N[le+ee+2]=a.z,N[le+ee+3]=0),M===!0&&(a.fromBufferAttribute(q,W),N[le+ee+4]=a.x,N[le+ee+5]=a.y,N[le+ee+6]=a.z,N[le+ee+7]=0),b===!0&&(a.fromBufferAttribute(he,W),N[le+ee+8]=a.x,N[le+ee+9]=a.y,N[le+ee+10]=a.z,N[le+ee+11]=he.itemSize===4?a.w:1)}}m={count:v,texture:B,size:new Et(P,F)},i.set(f,m),f.addEventListener("dispose",I)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let _=0;for(let b=0;b<h.length;b++)_+=h[b];const M=f.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",M),d.getUniforms().setValue(r,"morphTargetInfluences",h)}d.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}return{update:o}}function vb(r,e,t,i,a){let o=new WeakMap;function u(h){const g=a.render.frame,v=h.geometry,m=e.get(h,v);if(o.get(m)!==g&&(e.update(m),o.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==g&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,g))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==g&&(_.update(),o.set(_,g))}return m}function f(){o=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),i.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:f}}const xb={[bv]:"LINEAR_TONE_MAPPING",[Av]:"REINHARD_TONE_MAPPING",[Rv]:"CINEON_TONE_MAPPING",[Rh]:"ACES_FILMIC_TONE_MAPPING",[Pv]:"AGX_TONE_MAPPING",[Lv]:"NEUTRAL_TONE_MAPPING",[Cv]:"CUSTOM_TONE_MAPPING"};function _b(r,e,t,i,a){const o=new Bi(e,t,{type:r,depthBuffer:i,stencilBuffer:a,depthTexture:i?new va(e,t):void 0}),u=new Bi(e,t,{type:hr,depthBuffer:!1,stencilBuffer:!1}),f=new Un;f.setAttribute("position",new ti([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ti([0,2,0,0,2,0],2));const d=new VE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new fi(f,d),g=new jh(-1,1,1,-1,0,1);let v=null,m=null,_=!1,M,b=null,y=[],S=!1;this.setSize=function(R,T){o.setSize(R,T),u.setSize(R,T);for(let P=0;P<y.length;P++){const F=y[P];F.setSize&&F.setSize(R,T)}},this.setEffects=function(R){y=R,S=y.length>0&&y[0].isRenderPass===!0;const T=o.width,P=o.height;for(let F=0;F<y.length;F++){const N=y[F];N.setSize&&N.setSize(T,P)}},this.begin=function(R,T){if(_||R.toneMapping===ki&&y.length===0)return!1;if(b=T,T!==null){const P=T.width,F=T.height;(o.width!==P||o.height!==F)&&this.setSize(P,F)}return S===!1&&R.setRenderTarget(o),M=R.toneMapping,R.toneMapping=ki,!0},this.hasRenderPass=function(){return S},this.end=function(R,T){R.toneMapping=M,_=!0;let P=o,F=u;for(let N=0;N<y.length;N++){const B=y[N];if(B.enabled!==!1&&(B.render(R,F,P,T),B.needsSwap!==!1)){const w=P;P=F,F=w}}if(v!==R.outputColorSpace||m!==R.toneMapping){v=R.outputColorSpace,m=R.toneMapping,d.defines={},Tt.getTransfer(v)===Ft&&(d.defines.SRGB_TRANSFER="");const N=xb[m];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(b),R.render(h,g),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),u.dispose(),f.dispose(),d.dispose()}}const cx=new Cn,_h=new va(1,1),fx=new Vv,dx=new qM,hx=new qv,k0=[],B0=[],z0=new Float32Array(16),V0=new Float32Array(9),H0=new Float32Array(4);function wa(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let o=k0[a];if(o===void 0&&(o=new Float32Array(a),k0[a]=o),e!==0){i.toArray(o,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(o,f)}return o}function dn(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Qu(r,e){let t=B0[e];t===void 0&&(t=new Int32Array(e),B0[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function yb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Sb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function Mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function Eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function wb(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;H0.set(i),r.uniformMatrix2fv(this.addr,!1,H0),hn(t,i)}}function Tb(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;V0.set(i),r.uniformMatrix3fv(this.addr,!1,V0),hn(t,i)}}function bb(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(dn(t,i))return;z0.set(i),r.uniformMatrix4fv(this.addr,!1,z0),hn(t,i)}}function Ab(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function Cb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function Pb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function Lb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Nb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function Ib(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function Db(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function Ub(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(_h.compareFunction=t.isReversedDepthBuffer()?Fh:Uh,o=_h):o=cx,t.setTexture2D(e||o,a)}function Fb(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||dx,a)}function Ob(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||hx,a)}function kb(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||fx,a)}function Bb(r){switch(r){case 5126:return yb;case 35664:return Sb;case 35665:return Mb;case 35666:return Eb;case 35674:return wb;case 35675:return Tb;case 35676:return bb;case 5124:case 35670:return Ab;case 35667:case 35671:return Rb;case 35668:case 35672:return Cb;case 35669:case 35673:return Pb;case 5125:return Lb;case 36294:return Nb;case 36295:return Ib;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Fb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return kb}}function zb(r,e){r.uniform1fv(this.addr,e)}function Vb(r,e){const t=wa(e,this.size,2);r.uniform2fv(this.addr,t)}function Hb(r,e){const t=wa(e,this.size,3);r.uniform3fv(this.addr,t)}function Gb(r,e){const t=wa(e,this.size,4);r.uniform4fv(this.addr,t)}function Wb(r,e){const t=wa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function jb(r,e){const t=wa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Xb(r,e){const t=wa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function $b(r,e){r.uniform1iv(this.addr,e)}function Yb(r,e){r.uniform2iv(this.addr,e)}function qb(r,e){r.uniform3iv(this.addr,e)}function Kb(r,e){r.uniform4iv(this.addr,e)}function Zb(r,e){r.uniform1uiv(this.addr,e)}function Jb(r,e){r.uniform2uiv(this.addr,e)}function Qb(r,e){r.uniform3uiv(this.addr,e)}function eA(r,e){r.uniform4uiv(this.addr,e)}function tA(r,e,t){const i=this.cache,a=e.length,o=Qu(t,a);dn(i,o)||(r.uniform1iv(this.addr,o),hn(i,o));let u;this.type===r.SAMPLER_2D_SHADOW?u=_h:u=cx;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||u,o[f])}function nA(r,e,t){const i=this.cache,a=e.length,o=Qu(t,a);dn(i,o)||(r.uniform1iv(this.addr,o),hn(i,o));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||dx,o[u])}function iA(r,e,t){const i=this.cache,a=e.length,o=Qu(t,a);dn(i,o)||(r.uniform1iv(this.addr,o),hn(i,o));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||hx,o[u])}function rA(r,e,t){const i=this.cache,a=e.length,o=Qu(t,a);dn(i,o)||(r.uniform1iv(this.addr,o),hn(i,o));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||fx,o[u])}function sA(r){switch(r){case 5126:return zb;case 35664:return Vb;case 35665:return Hb;case 35666:return Gb;case 35674:return Wb;case 35675:return jb;case 35676:return Xb;case 5124:case 35670:return $b;case 35667:case 35671:return Yb;case 35668:case 35672:return qb;case 35669:case 35673:return Kb;case 5125:return Zb;case 36294:return Jb;case 36295:return Qb;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}class aA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Bb(t.type)}}class oA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sA(t.type)}}class lA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,u=a.length;o!==u;++o){const f=a[o];f.setValue(e,t[f.id],i)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function G0(r,e){r.seq.push(e),r.map[e.id]=e}function uA(r,e,t){const i=r.name,a=i.length;for(yd.lastIndex=0;;){const o=yd.exec(i),u=yd.lastIndex;let f=o[1];const d=o[2]==="]",h=o[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===a){G0(t,h===void 0?new aA(f,r,e):new oA(f,r,e));break}else{let v=t.map[f];v===void 0&&(v=new lA(f),G0(t,v)),t=v}}}class Lu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);uA(f,d,this)}const a=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):o.push(u);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,u=t.length;o!==u;++o){const f=t[o],d=i[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const u=e[a];u.id in t&&i.push(u)}return i}}function W0(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const cA=37297;let fA=0;function dA(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=a;u<o;u++){const f=u+1;i.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return i.join(`
`)}const j0=new gt;function hA(r){Tt._getMatrix(j0,Tt.workingColorSpace,r);const e=`mat3( ${j0.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(r)){case Ou:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function X0(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=(r.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+dA(r.getShaderSource(e),f)}else return o}function pA(r,e){const t=hA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const mA={[bv]:"Linear",[Av]:"Reinhard",[Rv]:"Cineon",[Rh]:"ACESFilmic",[Pv]:"AgX",[Lv]:"Neutral",[Cv]:"Custom"};function gA(r,e){const t=mA[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Su=new Y;function vA(){Tt.getLuminanceCoefficients(Su);const r=Su.x.toFixed(4),e=Su.y.toFixed(4),t=Su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function _A(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yA(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=r.getActiveAttrib(e,a),u=o.name;let f=1;o.type===r.FLOAT_MAT2&&(f=2),o.type===r.FLOAT_MAT3&&(f=3),o.type===r.FLOAT_MAT4&&(f=4),t[u]={type:o.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function Mo(r){return r!==""}function $0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(r){return r.replace(SA,EA)}const MA=new Map;function EA(r,e){let t=vt[e];if(t===void 0){const i=MA.get(e);if(i!==void 0)t=vt[i],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yh(t)}const wA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q0(r){return r.replace(wA,TA)}function TA(r,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function K0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const bA={[bu]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function AA(r){return bA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RA={[gs]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE",[$u]:"ENVMAP_TYPE_CUBE_UV"};function CA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":RA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const PA={[ma]:"ENVMAP_MODE_REFRACTION"};function LA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":PA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const NA={[Xu]:"ENVMAP_BLENDING_MULTIPLY",[cM]:"ENVMAP_BLENDING_MIX",[fM]:"ENVMAP_BLENDING_ADD"};function IA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":NA[r.combine]||"ENVMAP_BLENDING_NONE"}function DA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function UA(r,e,t,i){const a=r.getContext(),o=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=AA(t),h=CA(t),g=LA(t),v=IA(t),m=DA(t),_=xA(t),M=_A(o),b=a.createProgram();let y,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Mo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Mo).join(`
`),S.length>0&&(S+=`
`)):(y=[K0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),S=[K0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?vt.tonemapping_pars_fragment:"",t.toneMapping!==ki?gA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,pA("linearToOutputTexel",t.outputColorSpace),vA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mo).join(`
`)),u=yh(u),u=$0(u,t),u=Y0(u,t),f=yh(f),f=$0(f,t),f=Y0(f,t),u=q0(u),f=q0(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Gg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const T=R+y+u,P=R+S+f,F=W0(a,a.VERTEX_SHADER,T),N=W0(a,a.FRAGMENT_SHADER,P);a.attachShader(b,F),a.attachShader(b,N),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function B(z){if(r.debug.checkShaderErrors){const q=a.getProgramInfoLog(b)||"",he=a.getShaderInfoLog(F)||"",le=a.getShaderInfoLog(N)||"",W=q.trim(),ee=he.trim(),J=le.trim();let Z=!0,ue=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,b,F,N);else{const fe=X0(a,F,"vertex"),O=X0(a,N,"fragment");ut("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+W+`
`+fe+`
`+O)}else W!==""?rt("WebGLProgram: Program Info Log:",W):(ee===""||J==="")&&(ue=!1);ue&&(z.diagnostics={runnable:Z,programLog:W,vertexShader:{log:ee,prefix:y},fragmentShader:{log:J,prefix:S}})}a.deleteShader(F),a.deleteShader(N),w=new Lu(a,b),I=yA(a,b)}let w;this.getUniforms=function(){return w===void 0&&B(this),w};let I;this.getAttributes=function(){return I===void 0&&B(this),I};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=a.getProgramParameter(b,cA)),V},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=F,this.fragmentShader=N,this}let FA=0;class OA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(o)===!1&&(u.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kA(e),t.set(e,i)),i}}class kA{constructor(e){this.id=FA++,this.code=e,this.usedTimes=0}}function BA(r){return r===vs||r===Iu||r===Du}function zA(r,e,t,i,a,o){const u=new Bh,f=new OA,d=new Set,h=[],g=new Map,v=i.logarithmicDepthBuffer;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return d.add(w),w===0?"uv":`uv${w}`}function b(w,I,V,z,q,he){const le=z.fog,W=q.geometry,ee=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,J=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Z=e.get(w.envMap||ee,J),ue=Z&&Z.mapping===$u?Z.image.height:null,fe=_[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&rt("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const O=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ne=O!==void 0?O.length:0;let ke=0;W.morphAttributes.position!==void 0&&(ke=1),W.morphAttributes.normal!==void 0&&(ke=2),W.morphAttributes.color!==void 0&&(ke=3);let Xe,Be,pe,Ae;if(fe){const ct=Ui[fe];Xe=ct.vertexShader,Be=ct.fragmentShader}else Xe=w.vertexShader,Be=w.fragmentShader,f.update(w),pe=f.getVertexShaderID(w),Ae=f.getFragmentShaderID(w);const _e=r.getRenderTarget(),ze=r.state.buffers.depth.getReversed(),Qe=q.isInstancedMesh===!0,st=q.isBatchedMesh===!0,It=!!w.map,pt=!!w.matcap,bt=!!Z,Lt=!!w.aoMap,mt=!!w.lightMap,Ot=!!w.bumpMap,kt=!!w.normalMap,un=!!w.displacementMap,j=!!w.emissiveMap,Bt=!!w.metalnessMap,Ee=!!w.roughnessMap,Te=w.anisotropy>0,ge=w.clearcoat>0,Ie=w.dispersion>0,L=w.iridescence>0,E=w.sheen>0,D=w.transmission>0,ie=Te&&!!w.anisotropyMap,oe=ge&&!!w.clearcoatMap,ye=ge&&!!w.clearcoatNormalMap,Se=ge&&!!w.clearcoatRoughnessMap,K=L&&!!w.iridescenceMap,me=L&&!!w.iridescenceThicknessMap,Le=E&&!!w.sheenColorMap,Fe=E&&!!w.sheenRoughnessMap,xe=!!w.specularMap,Me=!!w.specularColorMap,lt=!!w.specularIntensityMap,Ke=D&&!!w.transmissionMap,it=D&&!!w.thicknessMap,k=!!w.gradientMap,Re=!!w.alphaMap,ve=w.alphaTest>0,Ve=!!w.alphaHash,De=!!w.extensions;let we=ki;w.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(we=r.toneMapping);const Ge={shaderID:fe,shaderType:w.type,shaderName:w.name,vertexShader:Xe,fragmentShader:Be,defines:w.defines,customVertexShaderID:pe,customFragmentShaderID:Ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:st,batchingColor:st&&q._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&q.instanceColor!==null,instancingMorph:Qe&&q.morphTexture!==null,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:It,matcap:pt,envMap:bt,envMapMode:bt&&Z.mapping,envMapCubeUVHeight:ue,aoMap:Lt,lightMap:mt,bumpMap:Ot,normalMap:kt,displacementMap:un,emissiveMap:j,normalMapObjectSpace:kt&&w.normalMapType===gM,normalMapTangentSpace:kt&&w.normalMapType===Co,packedNormalMap:kt&&w.normalMapType===Co&&BA(w.normalMap.format),metalnessMap:Bt,roughnessMap:Ee,anisotropy:Te,anisotropyMap:ie,clearcoat:ge,clearcoatMap:oe,clearcoatNormalMap:ye,clearcoatRoughnessMap:Se,dispersion:Ie,iridescence:L,iridescenceMap:K,iridescenceThicknessMap:me,sheen:E,sheenColorMap:Le,sheenRoughnessMap:Fe,specularMap:xe,specularColorMap:Me,specularIntensityMap:lt,transmission:D,transmissionMap:Ke,thicknessMap:it,gradientMap:k,opaque:w.transparent===!1&&w.blending===da&&w.alphaToCoverage===!1,alphaMap:Re,alphaTest:ve,alphaHash:Ve,combine:w.combine,mapUv:It&&M(w.map.channel),aoMapUv:Lt&&M(w.aoMap.channel),lightMapUv:mt&&M(w.lightMap.channel),bumpMapUv:Ot&&M(w.bumpMap.channel),normalMapUv:kt&&M(w.normalMap.channel),displacementMapUv:un&&M(w.displacementMap.channel),emissiveMapUv:j&&M(w.emissiveMap.channel),metalnessMapUv:Bt&&M(w.metalnessMap.channel),roughnessMapUv:Ee&&M(w.roughnessMap.channel),anisotropyMapUv:ie&&M(w.anisotropyMap.channel),clearcoatMapUv:oe&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:ye&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:me&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&M(w.sheenRoughnessMap.channel),specularMapUv:xe&&M(w.specularMap.channel),specularColorMapUv:Me&&M(w.specularColorMap.channel),specularIntensityMapUv:lt&&M(w.specularIntensityMap.channel),transmissionMapUv:Ke&&M(w.transmissionMap.channel),thicknessMapUv:it&&M(w.thicknessMap.channel),alphaMapUv:Re&&M(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(kt||Te),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!W.attributes.uv&&(It||Re),fog:!!le,useFog:w.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&kt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ze,skinning:q.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ke,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:we,decodeVideoTexture:It&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===Ft,decodeVideoTextureEmissive:j&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===Ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Fi,flipSided:w.side===$n,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&w.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ge.vertexUv1s=d.has(1),Ge.vertexUv2s=d.has(2),Ge.vertexUv3s=d.has(3),d.clear(),Ge}function y(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)I.push(V),I.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(S(I,w),R(I,w),I.push(r.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function S(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function R(w,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function T(w){const I=_[w.type];let V;if(I){const z=Ui[I];V=kE.clone(z.uniforms)}else V=w.uniforms;return V}function P(w,I){let V=g.get(I);return V!==void 0?++V.usedTimes:(V=new UA(r,I,w,a),h.push(V),g.set(I,V)),V}function F(w){if(--w.usedTimes===0){const I=h.indexOf(w);h[I]=h[h.length-1],h.pop(),g.delete(w.cacheKey),w.destroy()}}function N(w){f.remove(w)}function B(){f.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:T,acquireProgram:P,releaseProgram:F,releaseShaderCache:N,programs:h,dispose:B}}function VA(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function i(u){r.delete(u)}function a(u,f,d){r.get(u)[f]=d}function o(){r=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function HA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Z0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function J0(){const r=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function u(m){let _=0;return m.isInstancedMesh&&(_+=2),m.isSkinnedMesh&&(_+=1),_}function f(m,_,M,b,y,S){let R=r[e];return R===void 0?(R={id:m.id,object:m,geometry:_,material:M,materialVariant:u(m),groupOrder:b,renderOrder:m.renderOrder,z:y,group:S},r[e]=R):(R.id=m.id,R.object=m,R.geometry=_,R.material=M,R.materialVariant=u(m),R.groupOrder=b,R.renderOrder=m.renderOrder,R.z=y,R.group=S),e++,R}function d(m,_,M,b,y,S){const R=f(m,_,M,b,y,S);M.transmission>0?i.push(R):M.transparent===!0?a.push(R):t.push(R)}function h(m,_,M,b,y,S){const R=f(m,_,M,b,y,S);M.transmission>0?i.unshift(R):M.transparent===!0?a.unshift(R):t.unshift(R)}function g(m,_){t.length>1&&t.sort(m||HA),i.length>1&&i.sort(_||Z0),a.length>1&&a.sort(_||Z0)}function v(){for(let m=e,_=r.length;m<_;m++){const M=r[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:d,unshift:h,finish:v,sort:g}}function GA(){let r=new WeakMap;function e(i,a){const o=r.get(i);let u;return o===void 0?(u=new J0,r.set(i,[u])):a>=o.length?(u=new J0,o.push(u)):u=o[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function WA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Mt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[e.id]=t,t}}}function jA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let XA=0;function $A(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function YA(r){const e=new WA,t=jA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Y);const a=new Y,o=new wt,u=new wt;function f(h){let g=0,v=0,m=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let _=0,M=0,b=0,y=0,S=0,R=0,T=0,P=0,F=0,N=0,B=0;h.sort($A);for(let I=0,V=h.length;I<V;I++){const z=h[I],q=z.color,he=z.intensity,le=z.distance;let W=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===vs?W=z.shadow.map.texture:W=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=q.r*he,v+=q.g*he,m+=q.b*he;else if(z.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(z.sh.coefficients[ee],he);B++}else if(z.isDirectionalLight){const ee=e.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const J=z.shadow,Z=t.get(z);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=z.shadow.matrix,R++}i.directional[_]=ee,_++}else if(z.isSpotLight){const ee=e.get(z);ee.position.setFromMatrixPosition(z.matrixWorld),ee.color.copy(q).multiplyScalar(he),ee.distance=le,ee.coneCos=Math.cos(z.angle),ee.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ee.decay=z.decay,i.spot[b]=ee;const J=z.shadow;if(z.map&&(i.spotLightMap[F]=z.map,F++,J.updateMatrices(z),z.castShadow&&N++),i.spotLightMatrix[b]=J.matrix,z.castShadow){const Z=t.get(z);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,i.spotShadow[b]=Z,i.spotShadowMap[b]=W,P++}b++}else if(z.isRectAreaLight){const ee=e.get(z);ee.color.copy(q).multiplyScalar(he),ee.halfWidth.set(z.width*.5,0,0),ee.halfHeight.set(0,z.height*.5,0),i.rectArea[y]=ee,y++}else if(z.isPointLight){const ee=e.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),ee.distance=z.distance,ee.decay=z.decay,z.castShadow){const J=z.shadow,Z=t.get(z);Z.shadowIntensity=J.intensity,Z.shadowBias=J.bias,Z.shadowNormalBias=J.normalBias,Z.shadowRadius=J.radius,Z.shadowMapSize=J.mapSize,Z.shadowCameraNear=J.camera.near,Z.shadowCameraFar=J.camera.far,i.pointShadow[M]=Z,i.pointShadowMap[M]=W,i.pointShadowMatrix[M]=z.shadow.matrix,T++}i.point[M]=ee,M++}else if(z.isHemisphereLight){const ee=e.get(z);ee.skyColor.copy(z.color).multiplyScalar(he),ee.groundColor.copy(z.groundColor).multiplyScalar(he),i.hemi[S]=ee,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=He.LTC_FLOAT_1,i.rectAreaLTC2=He.LTC_FLOAT_2):(i.rectAreaLTC1=He.LTC_HALF_1,i.rectAreaLTC2=He.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==_||w.pointLength!==M||w.spotLength!==b||w.rectAreaLength!==y||w.hemiLength!==S||w.numDirectionalShadows!==R||w.numPointShadows!==T||w.numSpotShadows!==P||w.numSpotMaps!==F||w.numLightProbes!==B)&&(i.directional.length=_,i.spot.length=b,i.rectArea.length=y,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=P+F-N,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=B,w.directionalLength=_,w.pointLength=M,w.spotLength=b,w.rectAreaLength=y,w.hemiLength=S,w.numDirectionalShadows=R,w.numPointShadows=T,w.numSpotShadows=P,w.numSpotMaps=F,w.numLightProbes=B,i.version=XA++)}function d(h,g){let v=0,m=0,_=0,M=0,b=0;const y=g.matrixWorldInverse;for(let S=0,R=h.length;S<R;S++){const T=h[S];if(T.isDirectionalLight){const P=i.directional[v];P.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),v++}else if(T.isSpotLight){const P=i.spot[_];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(y),_++}else if(T.isRectAreaLight){const P=i.rectArea[M];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(y),u.identity(),o.copy(T.matrixWorld),o.premultiply(y),u.extractRotation(o),P.halfWidth.set(T.width*.5,0,0),P.halfHeight.set(0,T.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),M++}else if(T.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(T.matrixWorld),P.position.applyMatrix4(y),m++}else if(T.isHemisphereLight){const P=i.hemi[b];P.direction.setFromMatrixPosition(T.matrixWorld),P.direction.transformDirection(y),b++}}}return{setup:f,setupView:d,state:i}}function Q0(r){const e=new YA(r),t=[],i=[],a=[];function o(m){v.camera=m,t.length=0,i.length=0,a.length=0}function u(m){t.push(m)}function f(m){i.push(m)}function d(m){a.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function qA(r){let e=new WeakMap;function t(a,o=0){const u=e.get(a);let f;return u===void 0?(f=new Q0(r),e.set(a,[f])):o>=u.length?(f=new Q0(r),u.push(f)):f=u[o],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const KA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZA=`uniform sampler2D shadow_pass;
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
}`,JA=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],QA=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],ev=new wt,xo=new Y,Sd=new Y;function eR(r,e,t){let i=new Vh;const a=new Et,o=new Et,u=new Ht,f=new HE,d=new GE,h={},g=t.maxTextureSize,v={[Wr]:$n,[$n]:Wr,[Fi]:Fi},m=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:KA,fragmentShader:ZA}),_=m.clone();_.defines.HORIZONTAL_PASS=1;const M=new Un;M.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new fi(M,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let S=this.type;this.render=function(N,B,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===jS&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=bu);const I=r.getRenderTarget(),V=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),q=r.state;q.setBlending(cr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const he=S!==this.type;he&&B.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(W=>W.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,W=N.length;le<W;le++){const ee=N[le],J=ee.shadow;if(J===void 0){rt("WebGLShadowMap:",ee,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);const Z=J.getFrameExtents();a.multiply(Z),o.copy(J.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(o.x=Math.floor(g/Z.x),a.x=o.x*Z.x,J.mapSize.x=o.x),a.y>g&&(o.y=Math.floor(g/Z.y),a.y=o.y*Z.y,J.mapSize.y=o.y));const ue=r.state.buffers.depth.getReversed();if(J.camera._reversedDepth=ue,J.map===null||he===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===_o){if(ee.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Bi(a.x,a.y,{format:vs,type:hr,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),J.map.texture.name=ee.name+".shadowMap",J.map.depthTexture=new va(a.x,a.y,Ti),J.map.depthTexture.name=ee.name+".shadowMapDepth",J.map.depthTexture.format=pr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Sn,J.map.depthTexture.magFilter=Sn}else ee.isPointLight?(J.map=new ux(a.x),J.map.depthTexture=new xE(a.x,Vi)):(J.map=new Bi(a.x,a.y),J.map.depthTexture=new va(a.x,a.y,Vi)),J.map.depthTexture.name=ee.name+".shadowMap",J.map.depthTexture.format=pr,this.type===bu?(J.map.depthTexture.compareFunction=ue?Fh:Uh,J.map.depthTexture.minFilter=Rn,J.map.depthTexture.magFilter=Rn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Sn,J.map.depthTexture.magFilter=Sn);J.camera.updateProjectionMatrix()}const fe=J.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<fe;O++){if(J.map.isWebGLCubeRenderTarget)r.setRenderTarget(J.map,O),r.clear();else{O===0&&(r.setRenderTarget(J.map),r.clear());const ne=J.getViewport(O);u.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),q.viewport(u)}if(ee.isPointLight){const ne=J.camera,ke=J.matrix,Xe=ee.distance||ne.far;Xe!==ne.far&&(ne.far=Xe,ne.updateProjectionMatrix()),xo.setFromMatrixPosition(ee.matrixWorld),ne.position.copy(xo),Sd.copy(ne.position),Sd.add(JA[O]),ne.up.copy(QA[O]),ne.lookAt(Sd),ne.updateMatrixWorld(),ke.makeTranslation(-xo.x,-xo.y,-xo.z),ev.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),J._frustum.setFromProjectionMatrix(ev,ne.coordinateSystem,ne.reversedDepth)}else J.updateMatrices(ee);i=J.getFrustum(),P(B,w,J.camera,ee,this.type)}J.isPointLightShadow!==!0&&this.type===_o&&R(J,w),J.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(I,V,z)};function R(N,B){const w=e.update(b);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Bi(a.x,a.y,{format:vs,type:hr})),m.uniforms.shadow_pass.value=N.map.depthTexture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(B,null,w,m,b,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(B,null,w,_,b,null)}function T(N,B,w,I){let V=null;const z=w.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(z!==void 0)V=z;else if(V=w.isPointLight===!0?d:f,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const q=V.uuid,he=B.uuid;let le=h[q];le===void 0&&(le={},h[q]=le);let W=le[he];W===void 0&&(W=V.clone(),le[he]=W,B.addEventListener("dispose",F)),V=W}if(V.visible=B.visible,V.wireframe=B.wireframe,I===_o?V.side=B.shadowSide!==null?B.shadowSide:B.side:V.side=B.shadowSide!==null?B.shadowSide:v[B.side],V.alphaMap=B.alphaMap,V.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,V.map=B.map,V.clipShadows=B.clipShadows,V.clippingPlanes=B.clippingPlanes,V.clipIntersection=B.clipIntersection,V.displacementMap=B.displacementMap,V.displacementScale=B.displacementScale,V.displacementBias=B.displacementBias,V.wireframeLinewidth=B.wireframeLinewidth,V.linewidth=B.linewidth,w.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const q=r.properties.get(V);q.light=w}return V}function P(N,B,w,I,V){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===_o)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,N.matrixWorld);const he=e.update(N),le=N.material;if(Array.isArray(le)){const W=he.groups;for(let ee=0,J=W.length;ee<J;ee++){const Z=W[ee],ue=le[Z.materialIndex];if(ue&&ue.visible){const fe=T(N,ue,I,V);N.onBeforeShadow(r,N,B,w,he,fe,Z),r.renderBufferDirect(w,null,he,fe,N,Z),N.onAfterShadow(r,N,B,w,he,fe,Z)}}}else if(le.visible){const W=T(N,le,I,V);N.onBeforeShadow(r,N,B,w,he,W,null),r.renderBufferDirect(w,null,he,W,N,null),N.onAfterShadow(r,N,B,w,he,W,null)}}const q=N.children;for(let he=0,le=q.length;he<le;he++)P(q[he],B,w,I,V)}function F(N){N.target.removeEventListener("dispose",F);for(const w in h){const I=h[w],V=N.target.uuid;V in I&&(I[V].dispose(),delete I[V])}}}function tR(r,e){function t(){let k=!1;const Re=new Ht;let ve=null;const Ve=new Ht(0,0,0,0);return{setMask:function(De){ve!==De&&!k&&(r.colorMask(De,De,De,De),ve=De)},setLocked:function(De){k=De},setClear:function(De,we,Ge,ct,Vt){Vt===!0&&(De*=ct,we*=ct,Ge*=ct),Re.set(De,we,Ge,ct),Ve.equals(Re)===!1&&(r.clearColor(De,we,Ge,ct),Ve.copy(Re))},reset:function(){k=!1,ve=null,Ve.set(-1,0,0,0)}}}function i(){let k=!1,Re=!1,ve=null,Ve=null,De=null;return{setReversed:function(we){if(Re!==we){const Ge=e.get("EXT_clip_control");we?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Re=we;const ct=De;De=null,this.setClear(ct)}},getReversed:function(){return Re},setTest:function(we){we?_e(r.DEPTH_TEST):ze(r.DEPTH_TEST)},setMask:function(we){ve!==we&&!k&&(r.depthMask(we),ve=we)},setFunc:function(we){if(Re&&(we=AM[we]),Ve!==we){switch(we){case Rd:r.depthFunc(r.NEVER);break;case Cd:r.depthFunc(r.ALWAYS);break;case Pd:r.depthFunc(r.LESS);break;case pa:r.depthFunc(r.LEQUAL);break;case Ld:r.depthFunc(r.EQUAL);break;case Nd:r.depthFunc(r.GEQUAL);break;case Id:r.depthFunc(r.GREATER);break;case Dd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ve=we}},setLocked:function(we){k=we},setClear:function(we){De!==we&&(De=we,Re&&(we=1-we),r.clearDepth(we))},reset:function(){k=!1,ve=null,Ve=null,De=null,Re=!1}}}function a(){let k=!1,Re=null,ve=null,Ve=null,De=null,we=null,Ge=null,ct=null,Vt=null;return{setTest:function(Ct){k||(Ct?_e(r.STENCIL_TEST):ze(r.STENCIL_TEST))},setMask:function(Ct){Re!==Ct&&!k&&(r.stencilMask(Ct),Re=Ct)},setFunc:function(Ct,Pn,ni){(ve!==Ct||Ve!==Pn||De!==ni)&&(r.stencilFunc(Ct,Pn,ni),ve=Ct,Ve=Pn,De=ni)},setOp:function(Ct,Pn,ni){(we!==Ct||Ge!==Pn||ct!==ni)&&(r.stencilOp(Ct,Pn,ni),we=Ct,Ge=Pn,ct=ni)},setLocked:function(Ct){k=Ct},setClear:function(Ct){Vt!==Ct&&(r.clearStencil(Ct),Vt=Ct)},reset:function(){k=!1,Re=null,ve=null,Ve=null,De=null,we=null,Ge=null,ct=null,Vt=null}}}const o=new t,u=new i,f=new a,d=new WeakMap,h=new WeakMap;let g={},v={},m={},_=new WeakMap,M=[],b=null,y=!1,S=null,R=null,T=null,P=null,F=null,N=null,B=null,w=new Mt(0,0,0),I=0,V=!1,z=null,q=null,he=null,le=null,W=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Z=0;const ue=r.getParameter(r.VERSION);ue.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ue)[1]),J=Z>=1):ue.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),J=Z>=2);let fe=null,O={};const ne=r.getParameter(r.SCISSOR_BOX),ke=r.getParameter(r.VIEWPORT),Xe=new Ht().fromArray(ne),Be=new Ht().fromArray(ke);function pe(k,Re,ve,Ve){const De=new Uint8Array(4),we=r.createTexture();r.bindTexture(k,we),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ge=0;Ge<ve;Ge++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,Ve,0,r.RGBA,r.UNSIGNED_BYTE,De):r.texImage2D(Re+Ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,De);return we}const Ae={};Ae[r.TEXTURE_2D]=pe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ae[r.TEXTURE_CUBE_MAP]=pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[r.TEXTURE_2D_ARRAY]=pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ae[r.TEXTURE_3D]=pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),f.setClear(0),_e(r.DEPTH_TEST),u.setFunc(pa),Ot(!1),kt(Ng),_e(r.CULL_FACE),Lt(cr);function _e(k){g[k]!==!0&&(r.enable(k),g[k]=!0)}function ze(k){g[k]!==!1&&(r.disable(k),g[k]=!1)}function Qe(k,Re){return m[k]!==Re?(r.bindFramebuffer(k,Re),m[k]=Re,k===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=Re),k===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function st(k,Re){let ve=M,Ve=!1;if(k){ve=_.get(Re),ve===void 0&&(ve=[],_.set(Re,ve));const De=k.textures;if(ve.length!==De.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let we=0,Ge=De.length;we<Ge;we++)ve[we]=r.COLOR_ATTACHMENT0+we;ve.length=De.length,Ve=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,Ve=!0);Ve&&r.drawBuffers(ve)}function It(k){return b!==k?(r.useProgram(k),b=k,!0):!1}const pt={[ds]:r.FUNC_ADD,[$S]:r.FUNC_SUBTRACT,[YS]:r.FUNC_REVERSE_SUBTRACT};pt[qS]=r.MIN,pt[KS]=r.MAX;const bt={[ZS]:r.ZERO,[JS]:r.ONE,[QS]:r.SRC_COLOR,[bd]:r.SRC_ALPHA,[sM]:r.SRC_ALPHA_SATURATE,[iM]:r.DST_COLOR,[tM]:r.DST_ALPHA,[eM]:r.ONE_MINUS_SRC_COLOR,[Ad]:r.ONE_MINUS_SRC_ALPHA,[rM]:r.ONE_MINUS_DST_COLOR,[nM]:r.ONE_MINUS_DST_ALPHA,[aM]:r.CONSTANT_COLOR,[oM]:r.ONE_MINUS_CONSTANT_COLOR,[lM]:r.CONSTANT_ALPHA,[uM]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(k,Re,ve,Ve,De,we,Ge,ct,Vt,Ct){if(k===cr){y===!0&&(ze(r.BLEND),y=!1);return}if(y===!1&&(_e(r.BLEND),y=!0),k!==XS){if(k!==S||Ct!==V){if((R!==ds||F!==ds)&&(r.blendEquation(r.FUNC_ADD),R=ds,F=ds),Ct)switch(k){case da:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ig:r.blendFunc(r.ONE,r.ONE);break;case Dg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ug:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ut("WebGLState: Invalid blending: ",k);break}else switch(k){case da:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ig:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Dg:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ug:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",k);break}T=null,P=null,N=null,B=null,w.set(0,0,0),I=0,S=k,V=Ct}return}De=De||Re,we=we||ve,Ge=Ge||Ve,(Re!==R||De!==F)&&(r.blendEquationSeparate(pt[Re],pt[De]),R=Re,F=De),(ve!==T||Ve!==P||we!==N||Ge!==B)&&(r.blendFuncSeparate(bt[ve],bt[Ve],bt[we],bt[Ge]),T=ve,P=Ve,N=we,B=Ge),(ct.equals(w)===!1||Vt!==I)&&(r.blendColor(ct.r,ct.g,ct.b,Vt),w.copy(ct),I=Vt),S=k,V=!1}function mt(k,Re){k.side===Fi?ze(r.CULL_FACE):_e(r.CULL_FACE);let ve=k.side===$n;Re&&(ve=!ve),Ot(ve),k.blending===da&&k.transparent===!1?Lt(cr):Lt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),o.setMask(k.colorWrite);const Ve=k.stencilWrite;f.setTest(Ve),Ve&&(f.setMask(k.stencilWriteMask),f.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),f.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),j(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):ze(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(k){z!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),z=k)}function kt(k){k!==GS?(_e(r.CULL_FACE),k!==q&&(k===Ng?r.cullFace(r.BACK):k===WS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ze(r.CULL_FACE),q=k}function un(k){k!==he&&(J&&r.lineWidth(k),he=k)}function j(k,Re,ve){k?(_e(r.POLYGON_OFFSET_FILL),(le!==Re||W!==ve)&&(le=Re,W=ve,u.getReversed()&&(Re=-Re),r.polygonOffset(Re,ve))):ze(r.POLYGON_OFFSET_FILL)}function Bt(k){k?_e(r.SCISSOR_TEST):ze(r.SCISSOR_TEST)}function Ee(k){k===void 0&&(k=r.TEXTURE0+ee-1),fe!==k&&(r.activeTexture(k),fe=k)}function Te(k,Re,ve){ve===void 0&&(fe===null?ve=r.TEXTURE0+ee-1:ve=fe);let Ve=O[ve];Ve===void 0&&(Ve={type:void 0,texture:void 0},O[ve]=Ve),(Ve.type!==k||Ve.texture!==Re)&&(fe!==ve&&(r.activeTexture(ve),fe=ve),r.bindTexture(k,Re||Ae[k]),Ve.type=k,Ve.texture=Re)}function ge(){const k=O[fe];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Ie(){try{r.compressedTexImage2D(...arguments)}catch(k){ut("WebGLState:",k)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(k){ut("WebGLState:",k)}}function E(){try{r.texSubImage2D(...arguments)}catch(k){ut("WebGLState:",k)}}function D(){try{r.texSubImage3D(...arguments)}catch(k){ut("WebGLState:",k)}}function ie(){try{r.compressedTexSubImage2D(...arguments)}catch(k){ut("WebGLState:",k)}}function oe(){try{r.compressedTexSubImage3D(...arguments)}catch(k){ut("WebGLState:",k)}}function ye(){try{r.texStorage2D(...arguments)}catch(k){ut("WebGLState:",k)}}function Se(){try{r.texStorage3D(...arguments)}catch(k){ut("WebGLState:",k)}}function K(){try{r.texImage2D(...arguments)}catch(k){ut("WebGLState:",k)}}function me(){try{r.texImage3D(...arguments)}catch(k){ut("WebGLState:",k)}}function Le(k){return v[k]!==void 0?v[k]:r.getParameter(k)}function Fe(k,Re){v[k]!==Re&&(r.pixelStorei(k,Re),v[k]=Re)}function xe(k){Xe.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Xe.copy(k))}function Me(k){Be.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Be.copy(k))}function lt(k,Re){let ve=h.get(Re);ve===void 0&&(ve=new WeakMap,h.set(Re,ve));let Ve=ve.get(k);Ve===void 0&&(Ve=r.getUniformBlockIndex(Re,k.name),ve.set(k,Ve))}function Ke(k,Re){const Ve=h.get(Re).get(k);d.get(Re)!==Ve&&(r.uniformBlockBinding(Re,Ve,k.__bindingPointIndex),d.set(Re,Ve))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),g={},v={},fe=null,O={},m={},_=new WeakMap,M=[],b=null,y=!1,S=null,R=null,T=null,P=null,F=null,N=null,B=null,w=new Mt(0,0,0),I=0,V=!1,z=null,q=null,he=null,le=null,W=null,Xe.set(0,0,r.canvas.width,r.canvas.height),Be.set(0,0,r.canvas.width,r.canvas.height),o.reset(),u.reset(),f.reset()}return{buffers:{color:o,depth:u,stencil:f},enable:_e,disable:ze,bindFramebuffer:Qe,drawBuffers:st,useProgram:It,setBlending:Lt,setMaterial:mt,setFlipSided:Ot,setCullFace:kt,setLineWidth:un,setPolygonOffset:j,setScissorTest:Bt,activeTexture:Ee,bindTexture:Te,unbindTexture:ge,compressedTexImage2D:Ie,compressedTexImage3D:L,texImage2D:K,texImage3D:me,pixelStorei:Fe,getParameter:Le,updateUBOMapping:lt,uniformBlockBinding:Ke,texStorage2D:ye,texStorage3D:Se,texSubImage2D:E,texSubImage3D:D,compressedTexSubImage2D:ie,compressedTexSubImage3D:oe,scissor:xe,viewport:Me,reset:it}}function nR(r,e,t,i,a,o,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Et,g=new WeakMap,v=new Set;let m;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):Lo("canvas")}function y(L,E,D){let ie=1;const oe=Ie(L);if((oe.width>D||oe.height>D)&&(ie=D/Math.max(oe.width,oe.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ye=Math.floor(ie*oe.width),Se=Math.floor(ie*oe.height);m===void 0&&(m=b(ye,Se));const K=E?b(ye,Se):m;return K.width=ye,K.height=Se,K.getContext("2d").drawImage(L,0,0,ye,Se),rt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ye+"x"+Se+")."),K}else return"data"in L&&rt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),L;return L}function S(L){return L.generateMipmaps}function R(L){r.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function P(L,E,D,ie,oe,ye=!1){if(L!==null){if(r[L]!==void 0)return r[L];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Se;ie&&(Se=e.get("EXT_texture_norm16"),Se||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=E;if(E===r.RED&&(D===r.FLOAT&&(K=r.R32F),D===r.HALF_FLOAT&&(K=r.R16F),D===r.UNSIGNED_BYTE&&(K=r.R8),D===r.UNSIGNED_SHORT&&Se&&(K=Se.R16_EXT),D===r.SHORT&&Se&&(K=Se.R16_SNORM_EXT)),E===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(K=r.R8UI),D===r.UNSIGNED_SHORT&&(K=r.R16UI),D===r.UNSIGNED_INT&&(K=r.R32UI),D===r.BYTE&&(K=r.R8I),D===r.SHORT&&(K=r.R16I),D===r.INT&&(K=r.R32I)),E===r.RG&&(D===r.FLOAT&&(K=r.RG32F),D===r.HALF_FLOAT&&(K=r.RG16F),D===r.UNSIGNED_BYTE&&(K=r.RG8),D===r.UNSIGNED_SHORT&&Se&&(K=Se.RG16_EXT),D===r.SHORT&&Se&&(K=Se.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(D===r.UNSIGNED_BYTE&&(K=r.RG8UI),D===r.UNSIGNED_SHORT&&(K=r.RG16UI),D===r.UNSIGNED_INT&&(K=r.RG32UI),D===r.BYTE&&(K=r.RG8I),D===r.SHORT&&(K=r.RG16I),D===r.INT&&(K=r.RG32I)),E===r.RGB_INTEGER&&(D===r.UNSIGNED_BYTE&&(K=r.RGB8UI),D===r.UNSIGNED_SHORT&&(K=r.RGB16UI),D===r.UNSIGNED_INT&&(K=r.RGB32UI),D===r.BYTE&&(K=r.RGB8I),D===r.SHORT&&(K=r.RGB16I),D===r.INT&&(K=r.RGB32I)),E===r.RGBA_INTEGER&&(D===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),D===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),D===r.UNSIGNED_INT&&(K=r.RGBA32UI),D===r.BYTE&&(K=r.RGBA8I),D===r.SHORT&&(K=r.RGBA16I),D===r.INT&&(K=r.RGBA32I)),E===r.RGB&&(D===r.UNSIGNED_SHORT&&Se&&(K=Se.RGB16_EXT),D===r.SHORT&&Se&&(K=Se.RGB16_SNORM_EXT),D===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),D===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),E===r.RGBA){const me=ye?Ou:Tt.getTransfer(oe);D===r.FLOAT&&(K=r.RGBA32F),D===r.HALF_FLOAT&&(K=r.RGBA16F),D===r.UNSIGNED_BYTE&&(K=me===Ft?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT&&Se&&(K=Se.RGBA16_EXT),D===r.SHORT&&Se&&(K=Se.RGBA16_SNORM_EXT),D===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function F(L,E){let D;return L?E===null||E===Vi||E===Ro?D=r.DEPTH24_STENCIL8:E===Ti?D=r.DEPTH32F_STENCIL8:E===Ao&&(D=r.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Vi||E===Ro?D=r.DEPTH_COMPONENT24:E===Ti?D=r.DEPTH_COMPONENT32F:E===Ao&&(D=r.DEPTH_COMPONENT16),D}function N(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Sn&&L.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function B(L){const E=L.target;E.removeEventListener("dispose",B),I(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&v.delete(E)}function w(L){const E=L.target;E.removeEventListener("dispose",w),z(E)}function I(L){const E=i.get(L);if(E.__webglInit===void 0)return;const D=L.source,ie=_.get(D);if(ie){const oe=ie[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&V(L),Object.keys(ie).length===0&&_.delete(D)}i.remove(L)}function V(L){const E=i.get(L);r.deleteTexture(E.__webglTexture);const D=L.source,ie=_.get(D);delete ie[E.__cacheKey],u.memory.textures--}function z(L){const E=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let oe=0;oe<E.__webglFramebuffer[ie].length;oe++)r.deleteFramebuffer(E.__webglFramebuffer[ie][oe]);else r.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)r.deleteFramebuffer(E.__webglFramebuffer[ie]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const D=L.textures;for(let ie=0,oe=D.length;ie<oe;ie++){const ye=i.get(D[ie]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),u.memory.textures--),i.remove(D[ie])}i.remove(L)}let q=0;function he(){q=0}function le(){return q}function W(L){q=L}function ee(){const L=q;return L>=a.maxTextures&&rt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),q+=1,L}function J(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Z(L,E){const D=i.get(L);if(L.isVideoTexture&&Te(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&D.__version!==L.version){const ie=L.image;if(ie===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(D,L,E);return}}else L.isExternalTexture&&(D.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+E)}function ue(L,E){const D=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&D.__version!==L.version){ze(D,L,E);return}else L.isExternalTexture&&(D.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+E)}function fe(L,E){const D=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&D.__version!==L.version){ze(D,L,E);return}t.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+E)}function O(L,E){const D=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&D.__version!==L.version){Qe(D,L,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+E)}const ne={[Ud]:r.REPEAT,[lr]:r.CLAMP_TO_EDGE,[Fd]:r.MIRRORED_REPEAT},ke={[Sn]:r.NEAREST,[hM]:r.NEAREST_MIPMAP_NEAREST,[Xl]:r.NEAREST_MIPMAP_LINEAR,[Rn]:r.LINEAR,[Hf]:r.LINEAR_MIPMAP_NEAREST,[ps]:r.LINEAR_MIPMAP_LINEAR},Xe={[vM]:r.NEVER,[MM]:r.ALWAYS,[xM]:r.LESS,[Uh]:r.LEQUAL,[_M]:r.EQUAL,[Fh]:r.GEQUAL,[yM]:r.GREATER,[SM]:r.NOTEQUAL};function Be(L,E){if(E.type===Ti&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===Hf||E.magFilter===Xl||E.magFilter===ps||E.minFilter===Rn||E.minFilter===Hf||E.minFilter===Xl||E.minFilter===ps)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,ne[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,ne[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,ne[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ke[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ke[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==Xl&&E.minFilter!==ps||E.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function pe(L,E){let D=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",B));const ie=E.source;let oe=_.get(ie);oe===void 0&&(oe={},_.set(ie,oe));const ye=J(E);if(ye!==L.__cacheKey){oe[ye]===void 0&&(oe[ye]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,D=!0),oe[ye].usedTimes++;const Se=oe[L.__cacheKey];Se!==void 0&&(oe[L.__cacheKey].usedTimes--,Se.usedTimes===0&&V(E)),L.__cacheKey=ye,L.__webglTexture=oe[ye].texture}return D}function Ae(L,E,D){return Math.floor(Math.floor(L/D)/E)}function _e(L,E,D,ie){const ye=L.updateRanges;if(ye.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,D,ie,E.data);else{ye.sort((Fe,xe)=>Fe.start-xe.start);let Se=0;for(let Fe=1;Fe<ye.length;Fe++){const xe=ye[Se],Me=ye[Fe],lt=xe.start+xe.count,Ke=Ae(Me.start,E.width,4),it=Ae(xe.start,E.width,4);Me.start<=lt+1&&Ke===it&&Ae(Me.start+Me.count-1,E.width,4)===Ke?xe.count=Math.max(xe.count,Me.start+Me.count-xe.start):(++Se,ye[Se]=Me)}ye.length=Se+1;const K=t.getParameter(r.UNPACK_ROW_LENGTH),me=t.getParameter(r.UNPACK_SKIP_PIXELS),Le=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Fe=0,xe=ye.length;Fe<xe;Fe++){const Me=ye[Fe],lt=Math.floor(Me.start/4),Ke=Math.ceil(Me.count/4),it=lt%E.width,k=Math.floor(lt/E.width),Re=Ke,ve=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,it),t.pixelStorei(r.UNPACK_SKIP_ROWS,k),t.texSubImage2D(r.TEXTURE_2D,0,it,k,Re,ve,D,ie,E.data)}L.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,K),t.pixelStorei(r.UNPACK_SKIP_PIXELS,me),t.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function ze(L,E,D){let ie=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=r.TEXTURE_3D);const oe=pe(L,E),ye=E.source;t.bindTexture(ie,L.__webglTexture,r.TEXTURE0+D);const Se=i.get(ye);if(ye.version!==Se.__version||oe===!0){if(t.activeTexture(r.TEXTURE0+D),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=Tt.getPrimaries(Tt.workingColorSpace),Ve=E.colorSpace===Hr?null:Tt.getPrimaries(E.colorSpace),De=E.colorSpace===Hr||ve===Ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let me=y(E.image,!1,a.maxTextureSize);me=ge(E,me);const Le=o.convert(E.format,E.colorSpace),Fe=o.convert(E.type);let xe=P(E.internalFormat,Le,Fe,E.normalized,E.colorSpace,E.isVideoTexture);Be(ie,E);let Me;const lt=E.mipmaps,Ke=E.isVideoTexture!==!0,it=Se.__version===void 0||oe===!0,k=ye.dataReady,Re=N(E,me);if(E.isDepthTexture)xe=F(E.format===ms,E.type),it&&(Ke?t.texStorage2D(r.TEXTURE_2D,1,xe,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,xe,me.width,me.height,0,Le,Fe,null));else if(E.isDataTexture)if(lt.length>0){Ke&&it&&t.texStorage2D(r.TEXTURE_2D,Re,xe,lt[0].width,lt[0].height);for(let ve=0,Ve=lt.length;ve<Ve;ve++)Me=lt[ve],Ke?k&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,Me.width,Me.height,Le,Fe,Me.data):t.texImage2D(r.TEXTURE_2D,ve,xe,Me.width,Me.height,0,Le,Fe,Me.data);E.generateMipmaps=!1}else Ke?(it&&t.texStorage2D(r.TEXTURE_2D,Re,xe,me.width,me.height),k&&_e(E,me,Le,Fe)):t.texImage2D(r.TEXTURE_2D,0,xe,me.width,me.height,0,Le,Fe,me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,xe,lt[0].width,lt[0].height,me.depth);for(let ve=0,Ve=lt.length;ve<Ve;ve++)if(Me=lt[ve],E.format!==ci)if(Le!==null)if(Ke){if(k)if(E.layerUpdates.size>0){const De=L0(Me.width,Me.height,E.format,E.type);for(const we of E.layerUpdates){const Ge=Me.data.subarray(we*De/Me.data.BYTES_PER_ELEMENT,(we+1)*De/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,we,Me.width,Me.height,1,Le,Ge)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Me.width,Me.height,me.depth,Le,Me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,xe,Me.width,Me.height,me.depth,0,Me.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?k&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Me.width,Me.height,me.depth,Le,Fe,Me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ve,xe,Me.width,Me.height,me.depth,0,Le,Fe,Me.data)}else{Ke&&it&&t.texStorage2D(r.TEXTURE_2D,Re,xe,lt[0].width,lt[0].height);for(let ve=0,Ve=lt.length;ve<Ve;ve++)Me=lt[ve],E.format!==ci?Le!==null?Ke?k&&t.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,Me.width,Me.height,Le,Me.data):t.compressedTexImage2D(r.TEXTURE_2D,ve,xe,Me.width,Me.height,0,Me.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?k&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,Me.width,Me.height,Le,Fe,Me.data):t.texImage2D(r.TEXTURE_2D,ve,xe,Me.width,Me.height,0,Le,Fe,Me.data)}else if(E.isDataArrayTexture)if(Ke){if(it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,xe,me.width,me.height,me.depth),k)if(E.layerUpdates.size>0){const ve=L0(me.width,me.height,E.format,E.type);for(const Ve of E.layerUpdates){const De=me.data.subarray(Ve*ve/me.data.BYTES_PER_ELEMENT,(Ve+1)*ve/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ve,me.width,me.height,1,Le,Fe,De)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Le,Fe,me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,me.width,me.height,me.depth,0,Le,Fe,me.data);else if(E.isData3DTexture)Ke?(it&&t.texStorage3D(r.TEXTURE_3D,Re,xe,me.width,me.height,me.depth),k&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Le,Fe,me.data)):t.texImage3D(r.TEXTURE_3D,0,xe,me.width,me.height,me.depth,0,Le,Fe,me.data);else if(E.isFramebufferTexture){if(it)if(Ke)t.texStorage2D(r.TEXTURE_2D,Re,xe,me.width,me.height);else{let ve=me.width,Ve=me.height;for(let De=0;De<Re;De++)t.texImage2D(r.TEXTURE_2D,De,xe,ve,Ve,0,Le,Fe,null),ve>>=1,Ve>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const ve=r.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),me.parentNode!==ve){ve.appendChild(me),v.add(E),ve.onpaint=ct=>{const Vt=ct.changedElements;for(const Ct of v)Vt.includes(Ct.image)&&(Ct.needsUpdate=!0)},ve.requestPaint();return}const Ve=0,De=r.RGBA,we=r.RGBA,Ge=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ve,De,we,Ge,me),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(lt.length>0){if(Ke&&it){const ve=Ie(lt[0]);t.texStorage2D(r.TEXTURE_2D,Re,xe,ve.width,ve.height)}for(let ve=0,Ve=lt.length;ve<Ve;ve++)Me=lt[ve],Ke?k&&t.texSubImage2D(r.TEXTURE_2D,ve,0,0,Le,Fe,Me):t.texImage2D(r.TEXTURE_2D,ve,xe,Le,Fe,Me);E.generateMipmaps=!1}else if(Ke){if(it){const ve=Ie(me);t.texStorage2D(r.TEXTURE_2D,Re,xe,ve.width,ve.height)}k&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Le,Fe,me)}else t.texImage2D(r.TEXTURE_2D,0,xe,Le,Fe,me);S(E)&&R(ie),Se.__version=ye.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Qe(L,E,D){if(E.image.length!==6)return;const ie=pe(L,E),oe=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+D);const ye=i.get(oe);if(oe.version!==ye.__version||ie===!0){t.activeTexture(r.TEXTURE0+D);const Se=Tt.getPrimaries(Tt.workingColorSpace),K=E.colorSpace===Hr?null:Tt.getPrimaries(E.colorSpace),me=E.colorSpace===Hr||Se===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Le=E.isCompressedTexture||E.image[0].isCompressedTexture,Fe=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let we=0;we<6;we++)!Le&&!Fe?xe[we]=y(E.image[we],!0,a.maxCubemapSize):xe[we]=Fe?E.image[we].image:E.image[we],xe[we]=ge(E,xe[we]);const Me=xe[0],lt=o.convert(E.format,E.colorSpace),Ke=o.convert(E.type),it=P(E.internalFormat,lt,Ke,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Re=ye.__version===void 0||ie===!0,ve=oe.dataReady;let Ve=N(E,Me);Be(r.TEXTURE_CUBE_MAP,E);let De;if(Le){k&&Re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,it,Me.width,Me.height);for(let we=0;we<6;we++){De=xe[we].mipmaps;for(let Ge=0;Ge<De.length;Ge++){const ct=De[Ge];E.format!==ci?lt!==null?k?ve&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ge,0,0,ct.width,ct.height,lt,ct.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ge,it,ct.width,ct.height,0,ct.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ge,0,0,ct.width,ct.height,lt,Ke,ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ge,it,ct.width,ct.height,0,lt,Ke,ct.data)}}}else{if(De=E.mipmaps,k&&Re){De.length>0&&Ve++;const we=Ie(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,it,we.width,we.height)}for(let we=0;we<6;we++)if(Fe){k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,xe[we].width,xe[we].height,lt,Ke,xe[we].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,it,xe[we].width,xe[we].height,0,lt,Ke,xe[we].data);for(let Ge=0;Ge<De.length;Ge++){const Vt=De[Ge].image[we].image;k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ge+1,0,0,Vt.width,Vt.height,lt,Ke,Vt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ge+1,it,Vt.width,Vt.height,0,lt,Ke,Vt.data)}}else{k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,lt,Ke,xe[we]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,it,lt,Ke,xe[we]);for(let Ge=0;Ge<De.length;Ge++){const ct=De[Ge];k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ge+1,0,0,lt,Ke,ct.image[we]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ge+1,it,lt,Ke,ct.image[we])}}}S(E)&&R(r.TEXTURE_CUBE_MAP),ye.__version=oe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function st(L,E,D,ie,oe,ye){const Se=o.convert(D.format,D.colorSpace),K=o.convert(D.type),me=P(D.internalFormat,Se,K,D.normalized,D.colorSpace),Le=i.get(E),Fe=i.get(D);if(Fe.__renderTarget=E,!Le.__hasExternalTextures){const xe=Math.max(1,E.width>>ye),Me=Math.max(1,E.height>>ye);oe===r.TEXTURE_3D||oe===r.TEXTURE_2D_ARRAY?t.texImage3D(oe,ye,me,xe,Me,E.depth,0,Se,K,null):t.texImage2D(oe,ye,me,xe,Me,0,Se,K,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),Ee(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,oe,Fe.__webglTexture,0,Bt(E)):(oe===r.TEXTURE_2D||oe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,oe,Fe.__webglTexture,ye),t.bindFramebuffer(r.FRAMEBUFFER,null)}function It(L,E,D){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const ie=E.depthTexture,oe=ie&&ie.isDepthTexture?ie.type:null,ye=F(E.stencilBuffer,oe),Se=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ee(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Bt(E),ye,E.width,E.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt(E),ye,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ye,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,L)}else{const ie=E.textures;for(let oe=0;oe<ie.length;oe++){const ye=ie[oe],Se=o.convert(ye.format,ye.colorSpace),K=o.convert(ye.type),me=P(ye.internalFormat,Se,K,ye.normalized,ye.colorSpace);Ee(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Bt(E),me,E.width,E.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt(E),me,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,me,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(L,E,D){const ie=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(E.depthTexture);if(oe.__renderTarget=E,(!oe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),oe.__webglTexture===void 0){oe.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),Be(r.TEXTURE_CUBE_MAP,E.depthTexture);const Le=o.convert(E.depthTexture.format),Fe=o.convert(E.depthTexture.type);let xe;E.depthTexture.format===pr?xe=r.DEPTH_COMPONENT24:E.depthTexture.format===ms&&(xe=r.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,xe,E.width,E.height,0,Le,Fe,null)}}else Z(E.depthTexture,0);const ye=oe.__webglTexture,Se=Bt(E),K=ie?r.TEXTURE_CUBE_MAP_POSITIVE_X+D:r.TEXTURE_2D,me=E.depthTexture.format===ms?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===pr)Ee(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,K,ye,0,Se):r.framebufferTexture2D(r.FRAMEBUFFER,me,K,ye,0);else if(E.depthTexture.format===ms)Ee(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,K,ye,0,Se):r.framebufferTexture2D(r.FRAMEBUFFER,me,K,ye,0);else throw new Error("Unknown depthTexture format")}function bt(L){const E=i.get(L),D=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ie=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const oe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",oe)};ie.addEventListener("dispose",oe),E.__depthDisposeCallback=oe}E.__boundDepthTexture=ie}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(D)for(let ie=0;ie<6;ie++)pt(E.__webglFramebuffer[ie],L,ie);else{const ie=L.texture.mipmaps;ie&&ie.length>0?pt(E.__webglFramebuffer[0],L,0):pt(E.__webglFramebuffer,L,0)}else if(D){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=r.createRenderbuffer(),It(E.__webglDepthbuffer[ie],L,!1);else{const oe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=E.__webglDepthbuffer[ie];r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,ye)}}else{const ie=L.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),It(E.__webglDepthbuffer,L,!1);else{const oe=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ye),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,ye)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(L,E,D){const ie=i.get(L);E!==void 0&&st(ie.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&bt(L)}function mt(L){const E=L.texture,D=i.get(L),ie=i.get(E);L.addEventListener("dispose",w);const oe=L.textures,ye=L.isWebGLCubeRenderTarget===!0,Se=oe.length>1;if(Se||(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=E.version,u.memory.textures++),ye){D.__webglFramebuffer=[];for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0){D.__webglFramebuffer[K]=[];for(let me=0;me<E.mipmaps.length;me++)D.__webglFramebuffer[K][me]=r.createFramebuffer()}else D.__webglFramebuffer[K]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){D.__webglFramebuffer=[];for(let K=0;K<E.mipmaps.length;K++)D.__webglFramebuffer[K]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(Se)for(let K=0,me=oe.length;K<me;K++){const Le=i.get(oe[K]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),u.memory.textures++)}if(L.samples>0&&Ee(L)===!1){D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let K=0;K<oe.length;K++){const me=oe[K];D.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[K]);const Le=o.convert(me.format,me.colorSpace),Fe=o.convert(me.type),xe=P(me.internalFormat,Le,Fe,me.normalized,me.colorSpace,L.isXRRenderTarget===!0),Me=Bt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Me,xe,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,D.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),It(D.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ye){t.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),Be(r.TEXTURE_CUBE_MAP,E);for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)st(D.__webglFramebuffer[K][me],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,me);else st(D.__webglFramebuffer[K],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);S(E)&&R(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let K=0,me=oe.length;K<me;K++){const Le=oe[K],Fe=i.get(Le);let xe=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(xe=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,Fe.__webglTexture),Be(xe,Le),st(D.__webglFramebuffer,L,Le,r.COLOR_ATTACHMENT0+K,xe,0),S(Le)&&R(xe)}t.unbindTexture()}else{let K=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(K=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(K,ie.__webglTexture),Be(K,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)st(D.__webglFramebuffer[me],L,E,r.COLOR_ATTACHMENT0,K,me);else st(D.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,K,0);S(E)&&R(K),t.unbindTexture()}L.depthBuffer&&bt(L)}function Ot(L){const E=L.textures;for(let D=0,ie=E.length;D<ie;D++){const oe=E[D];if(S(oe)){const ye=T(L),Se=i.get(oe).__webglTexture;t.bindTexture(ye,Se),R(ye),t.unbindTexture()}}}const kt=[],un=[];function j(L){if(L.samples>0){if(Ee(L)===!1){const E=L.textures,D=L.width,ie=L.height;let oe=r.COLOR_BUFFER_BIT;const ye=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Se=i.get(L),K=E.length>1;if(K)for(let Le=0;Le<E.length;Le++)t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const me=L.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Le=0;Le<E.length;Le++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(oe|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(oe|=r.STENCIL_BUFFER_BIT)),K){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Se.__webglColorRenderbuffer[Le]);const Fe=i.get(E[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Fe,0)}r.blitFramebuffer(0,0,D,ie,0,0,D,ie,oe,r.NEAREST),d===!0&&(kt.length=0,un.length=0,kt.push(r.COLOR_ATTACHMENT0+Le),L.depthBuffer&&L.resolveDepthBuffer===!1&&(kt.push(ye),un.push(ye),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,un)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let Le=0;Le<E.length;Le++){t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,Se.__webglColorRenderbuffer[Le]);const Fe=i.get(E[Le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,Fe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Bt(L){return Math.min(a.maxSamples,L.samples)}function Ee(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(L){const E=u.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function ge(L,E){const D=L.colorSpace,ie=L.format,oe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||D!==Fu&&D!==Hr&&(Tt.getTransfer(D)===Ft?(ie!==ci||oe!==ei)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",D)),E}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=ee,this.resetTextureUnits=he,this.getTextureUnits=le,this.setTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=ue,this.setTexture3D=fe,this.setTextureCube=O,this.rebindTextures=Lt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function iR(r,e){function t(i,a=Hr){let o;const u=Tt.getTransfer(a);if(i===ei)return r.UNSIGNED_BYTE;if(i===Ph)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Lh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Uv)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Fv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Iv)return r.BYTE;if(i===Dv)return r.SHORT;if(i===Ao)return r.UNSIGNED_SHORT;if(i===Ch)return r.INT;if(i===Vi)return r.UNSIGNED_INT;if(i===Ti)return r.FLOAT;if(i===hr)return r.HALF_FLOAT;if(i===Ov)return r.ALPHA;if(i===kv)return r.RGB;if(i===ci)return r.RGBA;if(i===pr)return r.DEPTH_COMPONENT;if(i===ms)return r.DEPTH_STENCIL;if(i===Bv)return r.RED;if(i===Nh)return r.RED_INTEGER;if(i===vs)return r.RG;if(i===Ih)return r.RG_INTEGER;if(i===Dh)return r.RGBA_INTEGER;if(i===Au||i===Ru||i===Cu||i===Pu)if(u===Ft)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Au)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ru)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Au)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ru)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Od||i===kd||i===Bd||i===zd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Od)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Hd||i===Gd||i===Wd||i===jd||i===Iu||i===Xd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Vd||i===Hd)return u===Ft?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Gd)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Wd)return o.COMPRESSED_R11_EAC;if(i===jd)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Iu)return o.COMPRESSED_RG11_EAC;if(i===Xd)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$d||i===Yd||i===qd||i===Kd||i===Zd||i===Jd||i===Qd||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===ah)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===$d)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yd)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qd)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kd)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zd)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jd)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qd)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===eh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===th)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ih)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sh)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ah)return u===Ft?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oh||i===lh||i===uh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===oh)return u===Ft?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ch||i===fh||i===Du||i===dh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===ch)return o.COMPRESSED_RED_RGTC1_EXT;if(i===fh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Du)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const rR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sR=`
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

}`;class aR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Kv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gi({vertexShader:rR,fragmentShader:sR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fi(new Yu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oR extends ys{constructor(e,t){super();const i=this;let a=null,o=1,u=null,f="local-floor",d=1,h=null,g=null,v=null,m=null,_=null,M=null;const b=typeof XRWebGLBinding<"u",y=new aR,S={},R=t.getContextAttributes();let T=null,P=null;const F=[],N=[],B=new Et;let w=null;const I=new jn;I.viewport=new Ht;const V=new jn;V.viewport=new Ht;const z=[I,V],q=new o1;let he=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(pe){let Ae=F[pe];return Ae===void 0&&(Ae=new qf,F[pe]=Ae),Ae.getTargetRaySpace()},this.getControllerGrip=function(pe){let Ae=F[pe];return Ae===void 0&&(Ae=new qf,F[pe]=Ae),Ae.getGripSpace()},this.getHand=function(pe){let Ae=F[pe];return Ae===void 0&&(Ae=new qf,F[pe]=Ae),Ae.getHandSpace()};function W(pe){const Ae=N.indexOf(pe.inputSource);if(Ae===-1)return;const _e=F[Ae];_e!==void 0&&(_e.update(pe.inputSource,pe.frame,h||u),_e.dispatchEvent({type:pe.type,data:pe.inputSource}))}function ee(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",ee),a.removeEventListener("inputsourceschange",J);for(let pe=0;pe<F.length;pe++){const Ae=N[pe];Ae!==null&&(N[pe]=null,F[pe].disconnect(Ae))}he=null,le=null,y.reset();for(const pe in S)delete S[pe];e.setRenderTarget(T),_=null,m=null,v=null,a=null,P=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(pe){o=pe,i.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(pe){f=pe,i.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(pe){h=pe},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(a,t)),v},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(pe){if(a=pe,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",ee),a.addEventListener("inputsourceschange",J),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(B),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ze=null,Qe=null;R.depth&&(Qe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=R.stencil?ms:pr,ze=R.stencil?Ro:Vi);const st={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:o};v=this.getBinding(),m=v.createProjectionLayer(st),a.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new Bi(m.textureWidth,m.textureHeight,{format:ci,type:ei,depthTexture:new va(m.textureWidth,m.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const _e={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:o};_=new XRWebGLLayer(a,t,_e),a.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),P=new Bi(_.framebufferWidth,_.framebufferHeight,{format:ci,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await a.requestReferenceSpace(f),Be.setContext(a),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(pe){for(let Ae=0;Ae<pe.removed.length;Ae++){const _e=pe.removed[Ae],ze=N.indexOf(_e);ze>=0&&(N[ze]=null,F[ze].disconnect(_e))}for(let Ae=0;Ae<pe.added.length;Ae++){const _e=pe.added[Ae];let ze=N.indexOf(_e);if(ze===-1){for(let st=0;st<F.length;st++)if(st>=N.length){N.push(_e),ze=st;break}else if(N[st]===null){N[st]=_e,ze=st;break}if(ze===-1)break}const Qe=F[ze];Qe&&Qe.connect(_e)}}const Z=new Y,ue=new Y;function fe(pe,Ae,_e){Z.setFromMatrixPosition(Ae.matrixWorld),ue.setFromMatrixPosition(_e.matrixWorld);const ze=Z.distanceTo(ue),Qe=Ae.projectionMatrix.elements,st=_e.projectionMatrix.elements,It=Qe[14]/(Qe[10]-1),pt=Qe[14]/(Qe[10]+1),bt=(Qe[9]+1)/Qe[5],Lt=(Qe[9]-1)/Qe[5],mt=(Qe[8]-1)/Qe[0],Ot=(st[8]+1)/st[0],kt=It*mt,un=It*Ot,j=ze/(-mt+Ot),Bt=j*-mt;if(Ae.matrixWorld.decompose(pe.position,pe.quaternion,pe.scale),pe.translateX(Bt),pe.translateZ(j),pe.matrixWorld.compose(pe.position,pe.quaternion,pe.scale),pe.matrixWorldInverse.copy(pe.matrixWorld).invert(),Qe[10]===-1)pe.projectionMatrix.copy(Ae.projectionMatrix),pe.projectionMatrixInverse.copy(Ae.projectionMatrixInverse);else{const Ee=It+j,Te=pt+j,ge=kt-Bt,Ie=un+(ze-Bt),L=bt*pt/Te*Ee,E=Lt*pt/Te*Ee;pe.projectionMatrix.makePerspective(ge,Ie,L,E,Ee,Te),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert()}}function O(pe,Ae){Ae===null?pe.matrixWorld.copy(pe.matrix):pe.matrixWorld.multiplyMatrices(Ae.matrixWorld,pe.matrix),pe.matrixWorldInverse.copy(pe.matrixWorld).invert()}this.updateCamera=function(pe){if(a===null)return;let Ae=pe.near,_e=pe.far;y.texture!==null&&(y.depthNear>0&&(Ae=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),q.near=V.near=I.near=Ae,q.far=V.far=I.far=_e,(he!==q.near||le!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),he=q.near,le=q.far),q.layers.mask=pe.layers.mask|6,I.layers.mask=q.layers.mask&-5,V.layers.mask=q.layers.mask&-3;const ze=pe.parent,Qe=q.cameras;O(q,ze);for(let st=0;st<Qe.length;st++)O(Qe[st],ze);Qe.length===2?fe(q,I,V):q.projectionMatrix.copy(I.projectionMatrix),ne(pe,q,ze)};function ne(pe,Ae,_e){_e===null?pe.matrix.copy(Ae.matrixWorld):(pe.matrix.copy(_e.matrixWorld),pe.matrix.invert(),pe.matrix.multiply(Ae.matrixWorld)),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.updateMatrixWorld(!0),pe.projectionMatrix.copy(Ae.projectionMatrix),pe.projectionMatrixInverse.copy(Ae.projectionMatrixInverse),pe.isPerspectiveCamera&&(pe.fov=ga*2*Math.atan(1/pe.projectionMatrix.elements[5]),pe.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&_===null))return d},this.setFoveation=function(pe){d=pe,m!==null&&(m.fixedFoveation=pe),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=pe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(pe){return S[pe]};let ke=null;function Xe(pe,Ae){if(g=Ae.getViewerPose(h||u),M=Ae,g!==null){const _e=g.views;_!==null&&(e.setRenderTargetFramebuffer(P,_.framebuffer),e.setRenderTarget(P));let ze=!1;_e.length!==q.cameras.length&&(q.cameras.length=0,ze=!0);for(let pt=0;pt<_e.length;pt++){const bt=_e[pt];let Lt=null;if(_!==null)Lt=_.getViewport(bt);else{const Ot=v.getViewSubImage(m,bt);Lt=Ot.viewport,pt===0&&(e.setRenderTargetTextures(P,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(P))}let mt=z[pt];mt===void 0&&(mt=new jn,mt.layers.enable(pt),mt.viewport=new Ht,z[pt]=mt),mt.matrix.fromArray(bt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(bt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),pt===0&&(q.matrix.copy(mt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ze===!0&&q.cameras.push(mt)}const Qe=a.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){v=i.getBinding();const pt=v.getDepthInformation(_e[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,a.renderState)}if(Qe&&Qe.includes("camera-access")&&b){e.state.unbindTexture(),v=i.getBinding();for(let pt=0;pt<_e.length;pt++){const bt=_e[pt].camera;if(bt){let Lt=S[bt];Lt||(Lt=new Kv,S[bt]=Lt);const mt=v.getCameraImage(bt);Lt.sourceTexture=mt}}}}for(let _e=0;_e<F.length;_e++){const ze=N[_e],Qe=F[_e];ze!==null&&Qe!==void 0&&Qe.update(ze,Ae,h||u)}ke&&ke(pe,Ae),Ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ae}),M=null}const Be=new ox;Be.setAnimationLoop(Xe),this.setAnimationLoop=function(pe){ke=pe},this.dispose=function(){}}}const lR=new wt,px=new gt;px.set(-1,0,0,0,1,0,0,0,1);function uR(r,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,nx(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function a(y,S,R,T,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(y,S):S.isMeshLambertMaterial?(o(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(y,S),v(y,S)):S.isMeshPhongMaterial?(o(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(y,S),m(y,S),S.isMeshPhysicalMaterial&&_(y,S,P)):S.isMeshMatcapMaterial?(o(y,S),M(y,S)):S.isMeshDepthMaterial?o(y,S):S.isMeshDistanceMaterial?(o(y,S),b(y,S)):S.isMeshNormalMaterial?o(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?d(y,S,R,T):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===$n&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===$n&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),T=R.envMap,P=R.envMapRotation;T&&(y.envMap.value=T,y.envMapRotation.value.setFromMatrix4(lR.makeRotationFromEuler(P)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(px),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,R,T){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=T*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function m(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===$n&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function cR(r,e,t,i){let a={},o={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,T){const P=T.program;i.uniformBlockBinding(R,P)}function h(R,T){let P=a[R.id];P===void 0&&(M(R),P=g(R),a[R.id]=P,R.addEventListener("dispose",y));const F=T.program;i.updateUBOMapping(R,F);const N=e.render.frame;o[R.id]!==N&&(m(R),o[R.id]=N)}function g(R){const T=v();R.__bindingPointIndex=T;const P=r.createBuffer(),F=R.__size,N=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,F,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,P),P}function v(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const T=a[R.id],P=R.uniforms,F=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let N=0,B=P.length;N<B;N++){const w=Array.isArray(P[N])?P[N]:[P[N]];for(let I=0,V=w.length;I<V;I++){const z=w[I];if(_(z,N,I,F)===!0){const q=z.__offset,he=Array.isArray(z.value)?z.value:[z.value];let le=0;for(let W=0;W<he.length;W++){const ee=he[W],J=b(ee);typeof ee=="number"||typeof ee=="boolean"?(z.__data[0]=ee,r.bufferSubData(r.UNIFORM_BUFFER,q+le,z.__data)):ee.isMatrix3?(z.__data[0]=ee.elements[0],z.__data[1]=ee.elements[1],z.__data[2]=ee.elements[2],z.__data[3]=0,z.__data[4]=ee.elements[3],z.__data[5]=ee.elements[4],z.__data[6]=ee.elements[5],z.__data[7]=0,z.__data[8]=ee.elements[6],z.__data[9]=ee.elements[7],z.__data[10]=ee.elements[8],z.__data[11]=0):ArrayBuffer.isView(ee)?z.__data.set(new ee.constructor(ee.buffer,ee.byteOffset,z.__data.length)):(ee.toArray(z.__data,le),le+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function _(R,T,P,F){const N=R.value,B=T+"_"+P;if(F[B]===void 0)return typeof N=="number"||typeof N=="boolean"?F[B]=N:ArrayBuffer.isView(N)?F[B]=N.slice():F[B]=N.clone(),!0;{const w=F[B];if(typeof N=="number"||typeof N=="boolean"){if(w!==N)return F[B]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(w.equals(N)===!1)return w.copy(N),!0}}return!1}function M(R){const T=R.uniforms;let P=0;const F=16;for(let B=0,w=T.length;B<w;B++){const I=Array.isArray(T[B])?T[B]:[T[B]];for(let V=0,z=I.length;V<z;V++){const q=I[V],he=Array.isArray(q.value)?q.value:[q.value];for(let le=0,W=he.length;le<W;le++){const ee=he[le],J=b(ee),Z=P%F,ue=Z%J.boundary,fe=Z+ue;P+=ue,fe!==0&&F-fe<J.storage&&(P+=F-fe),q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=J.storage}}}const N=P%F;return N>0&&(P+=F-N),R.__size=P,R.__cache={},this}function b(R){const T={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(T.boundary=4,T.storage=4):R.isVector2?(T.boundary=8,T.storage=8):R.isVector3||R.isColor?(T.boundary=16,T.storage=12):R.isVector4?(T.boundary=16,T.storage=16):R.isMatrix3?(T.boundary=48,T.storage=48):R.isMatrix4?(T.boundary=64,T.storage=64):R.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(T.boundary=16,T.storage=R.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",R),T}function y(R){const T=R.target;T.removeEventListener("dispose",y);const P=u.indexOf(T.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(a[T.id]),delete a[T.id],delete o[T.id]}function S(){for(const R in a)r.deleteBuffer(a[R]);u=[],a={},o={}}return{bind:d,update:h,dispose:S}}const fR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function dR(){return Di===null&&(Di=new jv(fR,16,16,vs,hr),Di.name="DFG_LUT",Di.minFilter=Rn,Di.magFilter=Rn,Di.wrapS=lr,Di.wrapT=lr,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class hR{constructor(e={}){const{canvas:t=TM(),context:i=null,depth:a=!0,stencil:o=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:_=ei}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=u;const b=_,y=new Set([Dh,Ih,Nh]),S=new Set([ei,Vi,Ao,Ro,Ph,Lh]),R=new Uint32Array(4),T=new Int32Array(4),P=new Y;let F=null,N=null;const B=[],w=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let z=!1,q=null;this._outputColorSpace=Wn;let he=0,le=0,W=null,ee=-1,J=null;const Z=new Ht,ue=new Ht;let fe=null;const O=new Mt(0);let ne=0,ke=t.width,Xe=t.height,Be=1,pe=null,Ae=null;const _e=new Ht(0,0,ke,Xe),ze=new Ht(0,0,ke,Xe);let Qe=!1;const st=new Vh;let It=!1,pt=!1;const bt=new wt,Lt=new Y,mt=new Ht,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function un(){return W===null?Be:1}let j=i;function Bt(C,$){return t.getContext(C,$)}try{const C={alpha:!0,depth:a,stencil:o,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ah}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",ct,!1),j===null){const $="webgl2";if(j=Bt($,C),j===null)throw Bt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw ut("WebGLRenderer: "+C.message),C}let Ee,Te,ge,Ie,L,E,D,ie,oe,ye,Se,K,me,Le,Fe,xe,Me,lt,Ke,it,k,Re,ve;function Ve(){Ee=new db(j),Ee.init(),k=new iR(j,Ee),Te=new rb(j,Ee,e,k),ge=new tR(j,Ee),Te.reversedDepthBuffer&&m&&ge.buffers.depth.setReversed(!0),Ie=new mb(j),L=new VA,E=new nR(j,Ee,ge,L,Te,k,Ie),D=new fb(V),ie=new _1(j),Re=new nb(j,ie),oe=new hb(j,ie,Ie,Re),ye=new vb(j,oe,ie,Re,Ie),lt=new gb(j,Te,E),Fe=new sb(L),Se=new zA(V,D,Ee,Te,Re,Fe),K=new uR(V,L),me=new GA,Le=new qA(Ee),Me=new tb(V,D,ge,ye,M,d),xe=new eR(V,ye,Te),ve=new cR(j,Ie,Te,ge),Ke=new ib(j,Ee,Ie),it=new pb(j,Ee,Ie),Ie.programs=Se.programs,V.capabilities=Te,V.extensions=Ee,V.properties=L,V.renderLists=me,V.shadowMap=xe,V.state=ge,V.info=Ie}Ve(),b!==ei&&(I=new _b(b,t.width,t.height,a,o));const De=new oR(V,j);this.xr=De,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=Ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(C){C!==void 0&&(Be=C,this.setSize(ke,Xe,!1))},this.getSize=function(C){return C.set(ke,Xe)},this.setSize=function(C,$,ce=!0){if(De.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=C,Xe=$,t.width=Math.floor(C*Be),t.height=Math.floor($*Be),ce===!0&&(t.style.width=C+"px",t.style.height=$+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(ke*Be,Xe*Be).floor()},this.setDrawingBufferSize=function(C,$,ce){ke=C,Xe=$,Be=ce,t.width=Math.floor(C*ce),t.height=Math.floor($*ce),this.setViewport(0,0,C,$)},this.setEffects=function(C){if(b===ei){ut("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let $=0;$<C.length;$++)if(C[$].isOutputPass===!0){rt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Z)},this.getViewport=function(C){return C.copy(_e)},this.setViewport=function(C,$,ce,se){C.isVector4?_e.set(C.x,C.y,C.z,C.w):_e.set(C,$,ce,se),ge.viewport(Z.copy(_e).multiplyScalar(Be).round())},this.getScissor=function(C){return C.copy(ze)},this.setScissor=function(C,$,ce,se){C.isVector4?ze.set(C.x,C.y,C.z,C.w):ze.set(C,$,ce,se),ge.scissor(ue.copy(ze).multiplyScalar(Be).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(C){ge.setScissorTest(Qe=C)},this.setOpaqueSort=function(C){pe=C},this.setTransparentSort=function(C){Ae=C},this.getClearColor=function(C){return C.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,ce=!0){let se=0;if(C){let re=!1;if(W!==null){const Oe=W.texture.format;re=y.has(Oe)}if(re){const Oe=W.texture.type,$e=S.has(Oe),Ue=Me.getClearColor(),Ze=Me.getClearAlpha(),nt=Ue.r,dt=Ue.g,ht=Ue.b;$e?(R[0]=nt,R[1]=dt,R[2]=ht,R[3]=Ze,j.clearBufferuiv(j.COLOR,0,R)):(T[0]=nt,T[1]=dt,T[2]=ht,T[3]=Ze,j.clearBufferiv(j.COLOR,0,T))}else se|=j.COLOR_BUFFER_BIT}$&&(se|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(se|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&j.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),q=C},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",ct,!1),Me.dispose(),me.dispose(),Le.dispose(),L.dispose(),D.dispose(),ye.dispose(),Re.dispose(),ve.dispose(),Se.dispose(),De.dispose(),De.removeEventListener("sessionstart",Xr),De.removeEventListener("sessionend",Ts),ji.stop()};function we(C){C.preventDefault(),jg("WebGLRenderer: Context Lost."),z=!0}function Ge(){jg("WebGLRenderer: Context Restored."),z=!1;const C=Ie.autoReset,$=xe.enabled,ce=xe.autoUpdate,se=xe.needsUpdate,re=xe.type;Ve(),Ie.autoReset=C,xe.enabled=$,xe.autoUpdate=ce,xe.needsUpdate=se,xe.type=re}function ct(C){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Vt(C){const $=C.target;$.removeEventListener("dispose",Vt),Ct($)}function Ct(C){Pn(C),L.remove(C)}function Pn(C){const $=L.get(C).programs;$!==void 0&&($.forEach(function(ce){Se.releaseProgram(ce)}),C.isShaderMaterial&&Se.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,ce,se,re,Oe){$===null&&($=Ot);const $e=re.isMesh&&re.matrixWorld.determinant()<0,Ue=Go(C,$,ce,se,re);ge.setMaterial(se,$e);let Ze=ce.index,nt=1;if(se.wireframe===!0){if(Ze=oe.getWireframeAttribute(ce),Ze===void 0)return;nt=2}const dt=ce.drawRange,ht=ce.attributes.position;let et=dt.start*nt,At=(dt.start+dt.count)*nt;Oe!==null&&(et=Math.max(et,Oe.start*nt),At=Math.min(At,(Oe.start+Oe.count)*nt)),Ze!==null?(et=Math.max(et,0),At=Math.min(At,Ze.count)):ht!=null&&(et=Math.max(et,0),At=Math.min(At,ht.count));const Gt=At-et;if(Gt<0||Gt===1/0)return;Re.setup(re,se,Ue,ce,Ze);let Yt,Dt=Ke;if(Ze!==null&&(Yt=ie.get(Ze),Dt=it,Dt.setIndex(Yt)),re.isMesh)se.wireframe===!0?(ge.setLineWidth(se.wireframeLinewidth*un()),Dt.setMode(j.LINES)):Dt.setMode(j.TRIANGLES);else if(re.isLine){let an=se.linewidth;an===void 0&&(an=1),ge.setLineWidth(an*un()),re.isLineSegments?Dt.setMode(j.LINES):re.isLineLoop?Dt.setMode(j.LINE_LOOP):Dt.setMode(j.LINE_STRIP)}else re.isPoints?Dt.setMode(j.POINTS):re.isSprite&&Dt.setMode(j.TRIANGLES);if(re.isBatchedMesh)if(Ee.get("WEBGL_multi_draw"))Dt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const an=re._multiDrawStarts,We=re._multiDrawCounts,xn=re._multiDrawCount,xt=Ze?ie.get(Ze).bytesPerElement:1,Fn=L.get(se).currentProgram.getUniforms();for(let On=0;On<xn;On++)Fn.setValue(j,"_gl_DrawID",On),Dt.render(an[On]/xt,We[On])}else if(re.isInstancedMesh)Dt.renderInstances(et,Gt,re.count);else if(ce.isInstancedBufferGeometry){const an=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,We=Math.min(ce.instanceCount,an);Dt.renderInstances(et,Gt,We)}else Dt.render(et,Gt)};function ni(C,$,ce){C.transparent===!0&&C.side===Fi&&C.forceSinglePass===!1?(C.side=$n,C.needsUpdate=!0,bs(C,$,ce),C.side=Wr,C.needsUpdate=!0,bs(C,$,ce),C.side=Fi):bs(C,$,ce)}this.compile=function(C,$,ce=null){ce===null&&(ce=C),N=Le.get(ce),N.init($),w.push(N),ce.traverseVisible(function(re){re.isLight&&re.layers.test($.layers)&&(N.pushLight(re),re.castShadow&&N.pushShadow(re))}),C!==ce&&C.traverseVisible(function(re){re.isLight&&re.layers.test($.layers)&&(N.pushLight(re),re.castShadow&&N.pushShadow(re))}),N.setupLights();const se=new Set;return C.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Oe=re.material;if(Oe)if(Array.isArray(Oe))for(let $e=0;$e<Oe.length;$e++){const Ue=Oe[$e];ni(Ue,ce,re),se.add(Ue)}else ni(Oe,ce,re),se.add(Oe)}),N=w.pop(),se},this.compileAsync=function(C,$,ce=null){const se=this.compile(C,$,ce);return new Promise(re=>{function Oe(){if(se.forEach(function($e){L.get($e).currentProgram.isReady()&&se.delete($e)}),se.size===0){re(C);return}setTimeout(Oe,10)}Ee.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Wi=null;function ws(C){Wi&&Wi(C)}function Xr(){ji.stop()}function Ts(){ji.start()}const ji=new ox;ji.setAnimationLoop(ws),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(C){Wi=C,De.setAnimationLoop(C),C===null?ji.stop():ji.start()},De.addEventListener("sessionstart",Xr),De.addEventListener("sessionend",Ts),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;q!==null&&q.renderStart(C,$);const ce=De.enabled===!0&&De.isPresenting===!0,se=I!==null&&(W===null||ce)&&I.begin(V,W);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera($),$=De.getCamera()),C.isScene===!0&&C.onBeforeRender(V,C,$,W),N=Le.get(C,w.length),N.init($),N.state.textureUnits=E.getTextureUnits(),w.push(N),bt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),st.setFromProjectionMatrix(bt,Oi,$.reversedDepth),pt=this.localClippingEnabled,It=Fe.init(this.clippingPlanes,pt),F=me.get(C,B.length),F.init(),B.push(F),De.enabled===!0&&De.isPresenting===!0){const $e=V.xr.getDepthSensingMesh();$e!==null&&Ta($e,$,-1/0,V.sortObjects)}Ta(C,$,0,V.sortObjects),F.finish(),V.sortObjects===!0&&F.sort(pe,Ae),kt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,kt&&Me.addToRenderList(F,C),this.info.render.frame++,It===!0&&Fe.beginShadows();const re=N.state.shadowsArray;if(xe.render(re,C,$),It===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&I.hasRenderPass())===!1){const $e=F.opaque,Ue=F.transmissive;if(N.setupLights(),$.isArrayCamera){const Ze=$.cameras;if(Ue.length>0)for(let nt=0,dt=Ze.length;nt<dt;nt++){const ht=Ze[nt];Ai($e,Ue,C,ht)}kt&&Me.render(C);for(let nt=0,dt=Ze.length;nt<dt;nt++){const ht=Ze[nt];Vo(F,C,ht,ht.viewport)}}else Ue.length>0&&Ai($e,Ue,C,$),kt&&Me.render(C),Vo(F,C,$)}W!==null&&le===0&&(E.updateMultisampleRenderTarget(W),E.updateRenderTargetMipmap(W)),se&&I.end(V),C.isScene===!0&&C.onAfterRender(V,C,$),Re.resetDefaultState(),ee=-1,J=null,w.pop(),w.length>0?(N=w[w.length-1],E.setTextureUnits(N.state.textureUnits),It===!0&&Fe.setGlobalState(V.clippingPlanes,N.state.camera)):N=null,B.pop(),B.length>0?F=B[B.length-1]:F=null,q!==null&&q.renderEnd()};function Ta(C,$,ce,se){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)ce=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLightProbeGrid)N.pushLightProbeGrid(C);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||st.intersectsSprite(C)){se&&mt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(bt);const $e=ye.update(C),Ue=C.material;Ue.visible&&F.push(C,$e,Ue,ce,mt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||st.intersectsObject(C))){const $e=ye.update(C),Ue=C.material;if(se&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),mt.copy(C.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),mt.copy($e.boundingSphere.center)),mt.applyMatrix4(C.matrixWorld).applyMatrix4(bt)),Array.isArray(Ue)){const Ze=$e.groups;for(let nt=0,dt=Ze.length;nt<dt;nt++){const ht=Ze[nt],et=Ue[ht.materialIndex];et&&et.visible&&F.push(C,$e,et,ce,mt.z,ht)}}else Ue.visible&&F.push(C,$e,Ue,ce,mt.z,null)}}const Oe=C.children;for(let $e=0,Ue=Oe.length;$e<Ue;$e++)Ta(Oe[$e],$,ce,se)}function Vo(C,$,ce,se){const{opaque:re,transmissive:Oe,transparent:$e}=C;N.setupLightsView(ce),It===!0&&Fe.setGlobalState(V.clippingPlanes,ce),se&&ge.viewport(Z.copy(se)),re.length>0&&$r(re,$,ce),Oe.length>0&&$r(Oe,$,ce),$e.length>0&&$r($e,$,ce),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ai(C,$,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[se.id]===void 0){const et=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[se.id]=new Bi(1,1,{generateMipmaps:!0,type:et?hr:ei,minFilter:ps,samples:Math.max(4,Te.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Oe=N.state.transmissionRenderTarget[se.id],$e=se.viewport||Z;Oe.setSize($e.z*V.transmissionResolutionScale,$e.w*V.transmissionResolutionScale);const Ue=V.getRenderTarget(),Ze=V.getActiveCubeFace(),nt=V.getActiveMipmapLevel();V.setRenderTarget(Oe),V.getClearColor(O),ne=V.getClearAlpha(),ne<1&&V.setClearColor(16777215,.5),V.clear(),kt&&Me.render(ce);const dt=V.toneMapping;V.toneMapping=ki;const ht=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),N.setupLightsView(se),It===!0&&Fe.setGlobalState(V.clippingPlanes,se),$r(C,ce,se),E.updateMultisampleRenderTarget(Oe),E.updateRenderTargetMipmap(Oe),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let At=0,Gt=$.length;At<Gt;At++){const Yt=$[At],{object:Dt,geometry:an,material:We,group:xn}=Yt;if(We.side===Fi&&Dt.layers.test(se.layers)){const xt=We.side;We.side=$n,We.needsUpdate=!0,ba(Dt,ce,se,an,We,xn),We.side=xt,We.needsUpdate=!0,et=!0}}et===!0&&(E.updateMultisampleRenderTarget(Oe),E.updateRenderTargetMipmap(Oe))}V.setRenderTarget(Ue,Ze,nt),V.setClearColor(O,ne),ht!==void 0&&(se.viewport=ht),V.toneMapping=dt}function $r(C,$,ce){const se=$.isScene===!0?$.overrideMaterial:null;for(let re=0,Oe=C.length;re<Oe;re++){const $e=C[re],{object:Ue,geometry:Ze,group:nt}=$e;let dt=$e.material;dt.allowOverride===!0&&se!==null&&(dt=se),Ue.layers.test(ce.layers)&&ba(Ue,$,ce,Ze,dt,nt)}}function ba(C,$,ce,se,re,Oe){C.onBeforeRender(V,$,ce,se,re,Oe),C.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(V,$,ce,se,C,Oe),re.transparent===!0&&re.side===Fi&&re.forceSinglePass===!1?(re.side=$n,re.needsUpdate=!0,V.renderBufferDirect(ce,$,se,re,C,Oe),re.side=Wr,re.needsUpdate=!0,V.renderBufferDirect(ce,$,se,re,C,Oe),re.side=Fi):V.renderBufferDirect(ce,$,se,re,C,Oe),C.onAfterRender(V,$,ce,se,re,Oe)}function bs(C,$,ce){$.isScene!==!0&&($=Ot);const se=L.get(C),re=N.state.lights,Oe=N.state.shadowsArray,$e=re.state.version,Ue=Se.getParameters(C,re.state,Oe,$,ce,N.state.lightProbeGridArray),Ze=Se.getProgramCacheKey(Ue);let nt=se.programs;se.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?$.environment:null,se.fog=$.fog;const dt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;se.envMap=D.get(C.envMap||se.environment,dt),se.envMapRotation=se.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",Vt),nt=new Map,se.programs=nt);let ht=nt.get(Ze);if(ht!==void 0){if(se.currentProgram===ht&&se.lightsStateVersion===$e)return Ra(C,Ue),ht}else Ue.uniforms=Se.getUniforms(C),q!==null&&C.isNodeMaterial&&q.build(C,ce,Ue),C.onBeforeCompile(Ue,V),ht=Se.acquireProgram(Ue,Ze),nt.set(Ze,ht),se.uniforms=Ue.uniforms;const et=se.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(et.clippingPlanes=Fe.uniform),Ra(C,Ue),se.needsLights=tc(C),se.lightsStateVersion=$e,se.needsLights&&(et.ambientLightColor.value=re.state.ambient,et.lightProbe.value=re.state.probe,et.directionalLights.value=re.state.directional,et.directionalLightShadows.value=re.state.directionalShadow,et.spotLights.value=re.state.spot,et.spotLightShadows.value=re.state.spotShadow,et.rectAreaLights.value=re.state.rectArea,et.ltc_1.value=re.state.rectAreaLTC1,et.ltc_2.value=re.state.rectAreaLTC2,et.pointLights.value=re.state.point,et.pointLightShadows.value=re.state.pointShadow,et.hemisphereLights.value=re.state.hemi,et.directionalShadowMatrix.value=re.state.directionalShadowMatrix,et.spotLightMatrix.value=re.state.spotLightMatrix,et.spotLightMap.value=re.state.spotLightMap,et.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=N.state.lightProbeGridArray.length>0,se.currentProgram=ht,se.uniformsList=null,ht}function Aa(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Lu.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function Ra(C,$){const ce=L.get(C);ce.outputColorSpace=$.outputColorSpace,ce.batching=$.batching,ce.batchingColor=$.batchingColor,ce.instancing=$.instancing,ce.instancingColor=$.instancingColor,ce.instancingMorph=$.instancingMorph,ce.skinning=$.skinning,ce.morphTargets=$.morphTargets,ce.morphNormals=$.morphNormals,ce.morphColors=$.morphColors,ce.morphTargetsCount=$.morphTargetsCount,ce.numClippingPlanes=$.numClippingPlanes,ce.numIntersection=$.numClipIntersection,ce.vertexAlphas=$.vertexAlphas,ce.vertexTangents=$.vertexTangents,ce.toneMapping=$.toneMapping}function Ho(C,$){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;P.setFromMatrixPosition($.matrixWorld);for(let ce=0,se=C.length;ce<se;ce++){const re=C[ce];if(re.texture!==null&&re.boundingBox.containsPoint(P))return re}return null}function Go(C,$,ce,se,re){$.isScene!==!0&&($=Ot),E.resetTextureUnits();const Oe=$.fog,$e=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?$.environment:null,Ue=W===null?V.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Tt.workingColorSpace,Ze=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,nt=D.get(se.envMap||$e,Ze),dt=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ht=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),et=!!ce.morphAttributes.position,At=!!ce.morphAttributes.normal,Gt=!!ce.morphAttributes.color;let Yt=ki;se.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Yt=V.toneMapping);const Dt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,an=Dt!==void 0?Dt.length:0,We=L.get(se),xn=N.state.lights;if(It===!0&&(pt===!0||C!==J)){const Ut=C===J&&se.id===ee;Fe.setState(se,C,Ut)}let xt=!1;se.version===We.__version?(We.needsLights&&We.lightsStateVersion!==xn.state.version||We.outputColorSpace!==Ue||re.isBatchedMesh&&We.batching===!1||!re.isBatchedMesh&&We.batching===!0||re.isBatchedMesh&&We.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&We.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&We.instancing===!1||!re.isInstancedMesh&&We.instancing===!0||re.isSkinnedMesh&&We.skinning===!1||!re.isSkinnedMesh&&We.skinning===!0||re.isInstancedMesh&&We.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&We.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&We.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&We.instancingMorph===!1&&re.morphTexture!==null||We.envMap!==nt||se.fog===!0&&We.fog!==Oe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Fe.numPlanes||We.numIntersection!==Fe.numIntersection)||We.vertexAlphas!==dt||We.vertexTangents!==ht||We.morphTargets!==et||We.morphNormals!==At||We.morphColors!==Gt||We.toneMapping!==Yt||We.morphTargetsCount!==an||!!We.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,We.__version=se.version);let Fn=We.currentProgram;xt===!0&&(Fn=bs(se,$,re),q&&se.isNodeMaterial&&q.onUpdateProgram(se,Fn,We));let On=!1,_t=!1,Xi=!1;const Nt=Fn.getUniforms(),jt=We.uniforms;if(ge.useProgram(Fn.program)&&(On=!0,_t=!0,Xi=!0),se.id!==ee&&(ee=se.id,_t=!0),We.needsLights){const Ut=Ho(N.state.lightProbeGridArray,re);We.lightProbeGrid!==Ut&&(We.lightProbeGrid=Ut,_t=!0)}if(On||J!==C){ge.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Nt.setValue(j,"projectionMatrix",C.projectionMatrix),Nt.setValue(j,"viewMatrix",C.matrixWorldInverse);const pi=Nt.map.cameraPosition;pi!==void 0&&pi.setValue(j,Lt.setFromMatrixPosition(C.matrixWorld)),Te.logarithmicDepthBuffer&&Nt.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Nt.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),J!==C&&(J=C,_t=!0,Xi=!0)}if(We.needsLights&&(xn.state.directionalShadowMap.length>0&&Nt.setValue(j,"directionalShadowMap",xn.state.directionalShadowMap,E),xn.state.spotShadowMap.length>0&&Nt.setValue(j,"spotShadowMap",xn.state.spotShadowMap,E),xn.state.pointShadowMap.length>0&&Nt.setValue(j,"pointShadowMap",xn.state.pointShadowMap,E)),re.isSkinnedMesh){Nt.setOptional(j,re,"bindMatrix"),Nt.setOptional(j,re,"bindMatrixInverse");const Ut=re.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Nt.setValue(j,"boneTexture",Ut.boneTexture,E))}re.isBatchedMesh&&(Nt.setOptional(j,re,"batchingTexture"),Nt.setValue(j,"batchingTexture",re._matricesTexture,E),Nt.setOptional(j,re,"batchingIdTexture"),Nt.setValue(j,"batchingIdTexture",re._indirectTexture,E),Nt.setOptional(j,re,"batchingColorTexture"),re._colorsTexture!==null&&Nt.setValue(j,"batchingColorTexture",re._colorsTexture,E));const hi=ce.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&lt.update(re,ce,Fn),(_t||We.receiveShadow!==re.receiveShadow)&&(We.receiveShadow=re.receiveShadow,Nt.setValue(j,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&$.environment!==null&&(jt.envMapIntensity.value=$.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=dR()),_t){if(Nt.setValue(j,"toneMappingExposure",V.toneMappingExposure),We.needsLights&&ec(jt,Xi),Oe&&se.fog===!0&&K.refreshFogUniforms(jt,Oe),K.refreshMaterialUniforms(jt,se,Be,Xe,N.state.transmissionRenderTarget[C.id]),We.needsLights&&We.lightProbeGrid){const Ut=We.lightProbeGrid;jt.probesSH.value=Ut.texture,jt.probesMin.value.copy(Ut.boundingBox.min),jt.probesMax.value.copy(Ut.boundingBox.max),jt.probesResolution.value.copy(Ut.resolution)}Lu.upload(j,Aa(We),jt,E)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Lu.upload(j,Aa(We),jt,E),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Nt.setValue(j,"center",re.center),Nt.setValue(j,"modelViewMatrix",re.modelViewMatrix),Nt.setValue(j,"normalMatrix",re.normalMatrix),Nt.setValue(j,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const Ut=se.uniformsGroups;for(let pi=0,Ri=Ut.length;pi<Ri;pi++){const Yr=Ut[pi];ve.update(Yr,Fn),ve.bind(Yr,Fn)}}return Fn}function ec(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function tc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return he},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(C,$,ce){const se=L.get(C);se.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),L.get(C.texture).__webglTexture=$,L.get(C.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const ce=L.get(C);ce.__webglFramebuffer=$,ce.__useDefaultFramebuffer=$===void 0};const Zt=j.createFramebuffer();this.setRenderTarget=function(C,$=0,ce=0){W=C,he=$,le=ce;let se=null,re=!1,Oe=!1;if(C){const Ue=L.get(C);if(Ue.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(j.FRAMEBUFFER,Ue.__webglFramebuffer),Z.copy(C.viewport),ue.copy(C.scissor),fe=C.scissorTest,ge.viewport(Z),ge.scissor(ue),ge.setScissorTest(fe),ee=-1;return}else if(Ue.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(Ue.__hasExternalTextures)E.rebindTextures(C,L.get(C.texture).__webglTexture,L.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const dt=C.depthTexture;if(Ue.__boundDepthTexture!==dt){if(dt!==null&&L.has(dt)&&(C.width!==dt.image.width||C.height!==dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Oe=!0);const nt=L.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[$])?se=nt[$][ce]:se=nt[$],re=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?se=L.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?se=nt[ce]:se=nt,Z.copy(C.viewport),ue.copy(C.scissor),fe=C.scissorTest}else Z.copy(_e).multiplyScalar(Be).floor(),ue.copy(ze).multiplyScalar(Be).floor(),fe=Qe;if(ce!==0&&(se=Zt),ge.bindFramebuffer(j.FRAMEBUFFER,se)&&ge.drawBuffers(C,se),ge.viewport(Z),ge.scissor(ue),ge.setScissorTest(fe),re){const Ue=L.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ue.__webglTexture,ce)}else if(Oe){const Ue=$;for(let Ze=0;Ze<C.textures.length;Ze++){const nt=L.get(C.textures[Ze]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Ze,nt.__webglTexture,ce,Ue)}}else if(C!==null&&ce!==0){const Ue=L.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ue.__webglTexture,ce)}ee=-1},this.readRenderTargetPixels=function(C,$,ce,se,re,Oe,$e,Ue=0){if(!(C&&C.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&$e!==void 0&&(Ze=Ze[$e]),Ze){ge.bindFramebuffer(j.FRAMEBUFFER,Ze);try{const nt=C.textures[Ue],dt=nt.format,ht=nt.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ue),!Te.textureFormatReadable(dt)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(ht)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-se&&ce>=0&&ce<=C.height-re&&j.readPixels($,ce,se,re,k.convert(dt),k.convert(ht),Oe)}finally{const nt=W!==null?L.get(W).__webglFramebuffer:null;ge.bindFramebuffer(j.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,$,ce,se,re,Oe,$e,Ue=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&$e!==void 0&&(Ze=Ze[$e]),Ze)if($>=0&&$<=C.width-se&&ce>=0&&ce<=C.height-re){ge.bindFramebuffer(j.FRAMEBUFFER,Ze);const nt=C.textures[Ue],dt=nt.format,ht=nt.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ue),!Te.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,et),j.bufferData(j.PIXEL_PACK_BUFFER,Oe.byteLength,j.STREAM_READ),j.readPixels($,ce,se,re,k.convert(dt),k.convert(ht),0);const At=W!==null?L.get(W).__webglFramebuffer:null;ge.bindFramebuffer(j.FRAMEBUFFER,At);const Gt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await bM(j,Gt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,et),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Oe),j.deleteBuffer(et),j.deleteSync(Gt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,ce=0){const se=Math.pow(2,-ce),re=Math.floor(C.image.width*se),Oe=Math.floor(C.image.height*se),$e=$!==null?$.x:0,Ue=$!==null?$.y:0;E.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,ce,0,0,$e,Ue,re,Oe),ge.unbindTexture()};const nc=j.createFramebuffer(),Ca=j.createFramebuffer();this.copyTextureToTexture=function(C,$,ce=null,se=null,re=0,Oe=0){let $e,Ue,Ze,nt,dt,ht,et,At,Gt;const Yt=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(ce!==null)$e=ce.max.x-ce.min.x,Ue=ce.max.y-ce.min.y,Ze=ce.isBox3?ce.max.z-ce.min.z:1,nt=ce.min.x,dt=ce.min.y,ht=ce.isBox3?ce.min.z:0;else{const jt=Math.pow(2,-re);$e=Math.floor(Yt.width*jt),Ue=Math.floor(Yt.height*jt),C.isDataArrayTexture?Ze=Yt.depth:C.isData3DTexture?Ze=Math.floor(Yt.depth*jt):Ze=1,nt=0,dt=0,ht=0}se!==null?(et=se.x,At=se.y,Gt=se.z):(et=0,At=0,Gt=0);const Dt=k.convert($.format),an=k.convert($.type);let We;$.isData3DTexture?(E.setTexture3D($,0),We=j.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(E.setTexture2DArray($,0),We=j.TEXTURE_2D_ARRAY):(E.setTexture2D($,0),We=j.TEXTURE_2D),ge.activeTexture(j.TEXTURE0),ge.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),ge.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),ge.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment);const xn=ge.getParameter(j.UNPACK_ROW_LENGTH),xt=ge.getParameter(j.UNPACK_IMAGE_HEIGHT),Fn=ge.getParameter(j.UNPACK_SKIP_PIXELS),On=ge.getParameter(j.UNPACK_SKIP_ROWS),_t=ge.getParameter(j.UNPACK_SKIP_IMAGES);ge.pixelStorei(j.UNPACK_ROW_LENGTH,Yt.width),ge.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Yt.height),ge.pixelStorei(j.UNPACK_SKIP_PIXELS,nt),ge.pixelStorei(j.UNPACK_SKIP_ROWS,dt),ge.pixelStorei(j.UNPACK_SKIP_IMAGES,ht);const Xi=C.isDataArrayTexture||C.isData3DTexture,Nt=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const jt=L.get(C),hi=L.get($),Ut=L.get(jt.__renderTarget),pi=L.get(hi.__renderTarget);ge.bindFramebuffer(j.READ_FRAMEBUFFER,Ut.__webglFramebuffer),ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let Ri=0;Ri<Ze;Ri++)Xi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,L.get(C).__webglTexture,re,ht+Ri),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,L.get($).__webglTexture,Oe,Gt+Ri)),j.blitFramebuffer(nt,dt,$e,Ue,et,At,$e,Ue,j.DEPTH_BUFFER_BIT,j.NEAREST);ge.bindFramebuffer(j.READ_FRAMEBUFFER,null),ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(re!==0||C.isRenderTargetTexture||L.has(C)){const jt=L.get(C),hi=L.get($);ge.bindFramebuffer(j.READ_FRAMEBUFFER,nc),ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ca);for(let Ut=0;Ut<Ze;Ut++)Xi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,jt.__webglTexture,re,ht+Ut):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,jt.__webglTexture,re),Nt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,hi.__webglTexture,Oe,Gt+Ut):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,hi.__webglTexture,Oe),re!==0?j.blitFramebuffer(nt,dt,$e,Ue,et,At,$e,Ue,j.COLOR_BUFFER_BIT,j.NEAREST):Nt?j.copyTexSubImage3D(We,Oe,et,At,Gt+Ut,nt,dt,$e,Ue):j.copyTexSubImage2D(We,Oe,et,At,nt,dt,$e,Ue);ge.bindFramebuffer(j.READ_FRAMEBUFFER,null),ge.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Nt?C.isDataTexture||C.isData3DTexture?j.texSubImage3D(We,Oe,et,At,Gt,$e,Ue,Ze,Dt,an,Yt.data):$.isCompressedArrayTexture?j.compressedTexSubImage3D(We,Oe,et,At,Gt,$e,Ue,Ze,Dt,Yt.data):j.texSubImage3D(We,Oe,et,At,Gt,$e,Ue,Ze,Dt,an,Yt):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Oe,et,At,$e,Ue,Dt,an,Yt.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Oe,et,At,Yt.width,Yt.height,Dt,Yt.data):j.texSubImage2D(j.TEXTURE_2D,Oe,et,At,$e,Ue,Dt,an,Yt);ge.pixelStorei(j.UNPACK_ROW_LENGTH,xn),ge.pixelStorei(j.UNPACK_IMAGE_HEIGHT,xt),ge.pixelStorei(j.UNPACK_SKIP_PIXELS,Fn),ge.pixelStorei(j.UNPACK_SKIP_ROWS,On),ge.pixelStorei(j.UNPACK_SKIP_IMAGES,_t),Oe===0&&$.generateMipmaps&&j.generateMipmap(We),ge.unbindTexture()},this.initRenderTarget=function(C){L.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),ge.unbindTexture()},this.resetState=function(){he=0,le=0,W=null,ge.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const tv=3,pR=2500,nv=.55,mR=1.1,Mu=.35,Md=.45,or=100,gR=18,vR=.33,Ed=4e3,iv=8500,xR=3e3,_R=600,yR=2e-4,SR=.985,MR=75e-5,rv=.022,sv=55e-5,ER="/models/asteroid.fbx",ca="/models/1K/";function wR(){const[r,e]=Q.useState("checking"),[t,i]=Q.useState(0),[a,o]=Q.useState(1),[u,f]=Q.useState(or),[d,h]=Q.useState(0),[g,v]=Q.useState(""),[m,_]=Q.useState(!1),[M,b]=Q.useState(!0),y=Q.useRef(!1),S=Q.useRef(!0),R=Q.useRef(0),T=Q.useRef("checking"),P=Q.useRef(0),F=Q.useRef(or),N=Ee=>{T.current=Ee,e(Ee)},B=Q.useRef(null),w=Q.useRef(null),I=Q.useRef(null),V=Q.useRef(null),z=Q.useRef(null),q=Q.useRef(null),he=Q.useRef(1),le=Q.useRef([]),W=Q.useRef([]),ee=Q.useRef(new Map),J=Q.useRef(new Map),Z=Q.useRef(null),ue=Q.useRef(null),fe=Q.useRef(!1),O=Q.useRef(new v1),ne=Q.useRef(null),ke=Q.useRef(new Y);Q.useEffect(()=>{const Ee=navigator.xr;if(!Ee){N("unsupported");return}Ee.isSessionSupported("immersive-ar").then(Te=>N(Te?"idle":"unsupported")).catch(()=>N("unsupported"))},[]);const Xe=()=>{const Ee=new yo,Te=new Gh(1,2),ge=Te.attributes.position.array;for(let Ie=0;Ie<ge.length;Ie+=3){const L=.72+Math.random()*.56;ge[Ie]*=L,ge[Ie+1]*=L,ge[Ie+2]*=L}return Te.attributes.position.needsUpdate=!0,Te.computeVertexNormals(),Ee.add(new fi(Te,new y0({color:7035454,roughness:.95,metalness:.05}))),Ee},Be=async()=>{try{const{FBXLoader:Ee}=await HS(async()=>{const{FBXLoader:Se}=await import("./FBXLoader-BaE8Lqw6.js");return{FBXLoader:Se}},[]),Te=new sx;Te.setURLModifier(Se=>{const K=Se.split("/").pop();return K?ca+K:Se});const ge=new t1(Te),[Ie,L,E,D,ie]=await Promise.all([ge.loadAsync(ca+"Asteroid1d_Color_1K.png"),ge.loadAsync(ca+"Asteroid1d_Roughness_1K.png"),ge.loadAsync(ca+"Asteroid1d_Metalness_1K.png"),ge.loadAsync(ca+"Asteroid1d_NormalOpenGL_1K.png"),ge.loadAsync(ca+"Asteroid1d_AO_1K.png")]);Ie.colorSpace=Wn,[Ie,L,E,D,ie].forEach(Se=>{Se.flipY=!1,Se.anisotropy=8});const oe=new y0({map:Ie,roughnessMap:L,metalnessMap:E,normalMap:D,aoMap:ie,roughness:1,metalness:.6}),ye=new Ee(Te);return await new Promise((Se,K)=>{ye.load(ER,me=>{me.traverse(Le=>{var xe;const Fe=Le;if(Fe.isMesh){Fe.material=oe;const Me=Fe.geometry;(xe=Me==null?void 0:Me.attributes)!=null&&xe.uv&&!Me.attributes.uv2&&Me.setAttribute("uv2",Me.attributes.uv)}}),Se(me)},void 0,K)})}catch{return Xe()}},pe=(Ee,Te=16347926,ge=26)=>{const Ie=w.current;if(!Ie)return;const L=new Un,E=new Float32Array(ge*3),D=[];for(let oe=0;oe<ge;oe++)E[oe*3]=Ee.x,E[oe*3+1]=Ee.y,E[oe*3+2]=Ee.z,D.push(new Y((Math.random()-.5)*.04,.012+Math.random()*.022,(Math.random()-.5)*.04));L.setAttribute("position",new Xn(E,3));const ie=new vE(L,new Yv({color:Te,size:.03,transparent:!0,opacity:1}));Ie.add(ie),W.current.push({points:ie,velocities:D,frame:0,life:55})},Ae=Ee=>{const Te=q.current,ge=w.current,Ie=ue.current;if(!Te||!ge||!Ie)return null;const L=Te.clone(!0);let E=null;if(L.traverse(Le=>{const Fe=Le;if(Fe.isMesh){const xe=Fe.material.clone();Fe.material=xe,E||(E=xe)}}),!E)return null;const ie=(.2+Math.random()*.15)/he.current;L.scale.setScalar(ie);const oe=It(),ye=Math.random()*Math.PI*2;let Se;if(oe)L.position.set(oe.x,oe.y,oe.z),Se=oe.y;else{const Le=nv+Math.random()*(mR-nv);Se=Ie.y+Mu+Math.random()*Md,L.position.set(Ie.x+Math.cos(ye)*Le,Se,Ie.z+Math.sin(ye)*Le)}L.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),ge.add(L);const K=Math.random(),me=K<.5?"straight":K<.8?"curve":"orbit-strike";return{obj:L,baseMat:E,state:"drift",behaviour:me,velocity:new Y,angularVel:new Y((Math.random()-.5)*.02,(Math.random()-.5)*.024,(Math.random()-.5)*.016),nextAttackTime:Ee+xR+Math.random()*(iv-Ed),stateTimer:0,orbitCenter:L.position.clone(),orbitAngle:ye,orbitRadius:.04+Math.random()*.06,spawnHeight:Se,alive:!0}},_e=(Ee,Te)=>{const ge=w.current;!ge||!Ee.alive||(Ee.alive=!1,pe(Ee.obj.position.clone(),Te?16347926:16720384),ge.remove(Ee.obj),le.current=le.current.filter(Ie=>Ie!==Ee),Te&&(P.current++,i(P.current),P.current>0&&P.current%tv===0&&o(Ie=>Ie+1)),setTimeout(()=>{if(T.current!=="playing")return;const Ie=performance.now(),L=Ae(Ie);L&&le.current.push(L)},pR))},ze=()=>{F.current=Math.max(0,F.current-gR),f(F.current),h(Ee=>Ee+1),navigator.vibrate&&navigator.vibrate(200),F.current<=0&&N("game-over")},Qe=Q.useCallback(Ee=>{var Se;if(T.current!=="playing")return;const Te=B.current,ge=w.current;if(!Te||!ge||le.current.length===0)return;const Ie=Ee.touches[0];if(!Ie)return;const L=Ie.clientX/window.innerWidth*2-1,E=-(Ie.clientY/window.innerHeight)*2+1,D=Te.xr.getCamera(),ie=((Se=D.cameras)==null?void 0:Se.length)>0?D.cameras[0]:I.current;O.current.setFromCamera(new Et(L,E),ie);const oe=le.current.map(K=>K.obj),ye=O.current.intersectObjects(oe,!0);if(ye.length>0){let K=ye[0].object;for(;K.parent&&K.parent!==ge;)K=K.parent;const me=le.current.find(Le=>Le.obj===K);me&&_e(me,!0)}},[]),st=(Ee,Te)=>{const ge=w.current;if(!ge)return;const Ie=Ee.detectedPlanes??new Set,L=new Set,E=T.current==="playing"?.25:.85;Ie.forEach(ie=>{L.add(ie);const oe=Ee.getPose(ie.planeSpace,Te);if(!oe)return;const ye=oe.transform.position,Se=new Y(ye.x,ye.y,ye.z),K=ie.polygon??[];if(K.length<3)return;let me=0;for(let Ke=0;Ke<K.length;Ke++){const it=K[Ke],k=K[(Ke+1)%K.length];me+=it.x*k.z-k.x*it.z}me=Math.abs(me)/2;const Le=new wt().fromArray(oe.transform.matrix),Fe=K.map(Ke=>{const it=new Y(Ke.x,0,Ke.z);return it.applyMatrix4(Le),it});ee.current.set(ie,{center:Se,area:me,orientation:ie.orientation??"unknown",worldPolygon:Fe});let xe=J.current.get(ie);const Me=K.map(Ke=>new Y(Ke.x,0,Ke.z));if(xe){const Ke=xe.outline.geometry.attributes.position.array;if(Ke.length===Me.length*3){for(let k=0;k<Me.length;k++)Ke[k*3]=Me[k].x,Ke[k*3+1]=Me[k].y,Ke[k*3+2]=Me[k].z;xe.outline.geometry.attributes.position.needsUpdate=!0;const it=xe.fill.geometry.attributes.position.array;for(let k=0;k<Me.length;k++)it[k*3]=Me[k].x,it[k*3+1]=Me[k].y,it[k*3+2]=Me[k].z;xe.fill.geometry.attributes.position.needsUpdate=!0}else{const it=new Float32Array(Me.length*3);Me.forEach((Re,ve)=>{it[ve*3]=Re.x,it[ve*3+1]=Re.y,it[ve*3+2]=Re.z}),xe.outline.geometry.setAttribute("position",new Xn(it,3)),xe.fill.geometry.setAttribute("position",new Xn(it.slice(),3));const k=[];for(let Re=1;Re<Me.length-1;Re++)k.push(0,Re,Re+1);xe.fill.geometry.setIndex(k)}}else{const Ke=new Un().setFromPoints(Me),it=new $v({color:1096065,transparent:!0,opacity:E}),k=new gE(Ke,it),Re=new Un,ve=new Float32Array(Me.length*3);Me.forEach((Ge,ct)=>{ve[ct*3]=Ge.x,ve[ct*3+1]=Ge.y,ve[ct*3+2]=Ge.z}),Re.setAttribute("position",new Xn(ve,3));const Ve=[];for(let Ge=1;Ge<Me.length-1;Ge++)Ve.push(0,Ge,Ge+1);Re.setIndex(Ve),Re.computeVertexNormals();const De=new zh({color:1096065,transparent:!0,opacity:E*.18,side:Fi,depthWrite:!1}),we=new fi(Re,De);ge.add(k),ge.add(we),xe={outline:k,fill:we},J.current.set(ie,xe)}const lt=new wt().fromArray(oe.transform.matrix);xe.outline.matrix.copy(lt),xe.outline.matrixAutoUpdate=!1,xe.outline.updateMatrixWorld(!0),xe.fill.matrix.copy(lt),xe.fill.matrixAutoUpdate=!1,xe.fill.updateMatrixWorld(!0),xe.outline.visible=S.current,xe.fill.visible=S.current,xe.outline.material.opacity=E,xe.fill.material.opacity=E*.18}),ee.current.forEach((ie,oe)=>{L.has(oe)||ee.current.delete(oe)}),J.current.forEach((ie,oe)=>{L.has(oe)||(ge.remove(ie.outline),ge.remove(ie.fill),ie.outline.geometry.dispose(),ie.fill.geometry.dispose(),ie.outline.material.dispose(),ie.fill.material.dispose(),J.current.delete(oe))});let D=null;if(ee.current.forEach(ie=>{ie.orientation!=="horizontal"&&ie.orientation!=="unknown"||(!D||ie.area>D.area)&&(D=ie)}),D){const ie=D;Z.current=ie,fe.current||(ue.current=ie.center.clone(),T.current==="scanning"&&N("plane-found"))}},It=()=>{const Ee=Z.current;if(!Ee||Ee.worldPolygon.length<3)return null;const Te=Ee.worldPolygon;let ge=1/0,Ie=-1/0,L=1/0,E=-1/0;for(const D of Te)D.x<ge&&(ge=D.x),D.x>Ie&&(Ie=D.x),D.z<L&&(L=D.z),D.z>E&&(E=D.z);for(let D=0;D<40;D++){const ie=ge+Math.random()*(Ie-ge),oe=L+Math.random()*(E-L);let ye=!1;for(let Se=0,K=Te.length-1;Se<Te.length;K=Se++){const me=Te[Se].x,Le=Te[Se].z,Fe=Te[K].x,xe=Te[K].z;Le>oe!=xe>oe&&ie<(Fe-me)*(oe-Le)/(xe-Le)+me&&(ye=!ye)}if(ye)return{x:ie,y:Ee.center.y+Mu+Math.random()*Md,z:oe}}return{x:Ee.center.x,y:Ee.center.y+Mu,z:Ee.center.z}},pt=(Ee,Te,ge,Ie)=>{const L=Ee.getViewerPose(Te);if(L){const D=L.transform.position;ke.current.set(D.x,D.y,D.z)}const E=ke.current;le.current.forEach(D=>{var ie;if(D.obj.rotation.x+=D.angularVel.x,D.obj.rotation.y+=D.angularVel.y,D.obj.rotation.z+=D.angularVel.z,D.state==="drift"){D.orbitAngle+=.004;const oe=new Y(D.orbitCenter.x+Math.cos(D.orbitAngle)*D.orbitRadius,D.spawnHeight+Math.sin(Ie*.9+D.orbitAngle)*.03,D.orbitCenter.z+Math.sin(D.orbitAngle)*D.orbitRadius);D.obj.position.lerp(oe,.08),D.velocity.multiplyScalar(.9),ge>D.nextAttackTime&&(D.state="charging",D.stateTimer=ge,D.baseMat.emissive.setHex(16720384),D.baseMat.emissiveIntensity=1,D.angularVel.multiplyScalar(2.4))}else if(D.state==="charging"){const oe=(ge-D.stateTimer)/_R;if(D.baseMat.emissiveIntensity=.7+Math.sin(Ie*32)*.4,D.obj.position.x+=(Math.random()-.5)*.004,D.obj.position.y+=(Math.random()-.5)*.004,D.obj.position.z+=(Math.random()-.5)*.004,oe>=1){const ye=E.clone().sub(D.obj.position).normalize();D.velocity.copy(ye).multiplyScalar(.01),D.state="attacking"}}else if(D.state==="attacking"){const oe=E.clone().sub(D.obj.position),ye=oe.length();if(oe.normalize(),D.velocity.addScaledVector(oe,MR),D.behaviour==="curve"){const K=new Y(-oe.z,0,oe.x);D.velocity.addScaledVector(K,Math.sin(Ie*5)*sv)}else if(D.behaviour==="orbit-strike"){const K=new Y(-oe.z,0,oe.x);D.velocity.addScaledVector(K,sv*.6)}if(D.velocity.y-=yR,D.velocity.multiplyScalar(SR),D.velocity.length()>rv&&D.velocity.setLength(rv),D.obj.position.add(D.velocity),D.baseMat.emissiveIntensity=.6+Math.sin(Ie*22)*.4,ye<vR&&(ze(),_e(D,!1)),(ue.current?D.obj.position.distanceTo(ue.current):0)>3.5){D.state="drift",D.baseMat.emissive.setHex(0),D.baseMat.emissiveIntensity=0,D.velocity.set(0,0,0),D.angularVel.multiplyScalar(1/2.4);const K=It();K?(D.obj.position.set(K.x,K.y,K.z),D.orbitCenter.set(K.x,K.y,K.z),D.spawnHeight=K.y):D.spawnHeight=(((ie=ue.current)==null?void 0:ie.y)??0)+Mu+Math.random()*Md,D.orbitAngle=Math.random()*Math.PI*2,D.orbitRadius=.04+Math.random()*.06,D.nextAttackTime=ge+Ed+Math.random()*(iv-Ed)}}})},bt=Ee=>{W.current=W.current.filter(Te=>{if(Te.frame++,Te.frame>Te.life)return Ee.remove(Te.points),!1;const ge=Te.points.geometry.attributes.position.array;for(let Ie=0;Ie<Te.velocities.length;Ie++)ge[Ie*3]+=Te.velocities[Ie].x,ge[Ie*3+1]+=Te.velocities[Ie].y-4e-4*Te.frame,ge[Ie*3+2]+=Te.velocities[Ie].z;return Te.points.geometry.attributes.position.needsUpdate=!0,Te.points.material.opacity=Math.max(0,1-Te.frame/Te.life),!0})},Lt=async()=>{N("loading"),F.current=or,P.current=0,f(or),i(0),o(1),fe.current=!0;try{const Ee=await Be();q.current=Ee;const Te=new Ms().setFromObject(Ee),ge=new Y;Te.getSize(ge),he.current=Math.max(ge.x,ge.y,ge.z)||1;const Ie=performance.now();for(let L=0;L<tv;L++){const E=Ae(Ie);E&&le.current.push(E)}document.addEventListener("touchstart",Qe,{passive:!0}),N("playing")}catch(Ee){N("error"),v((Ee==null?void 0:Ee.message)??"Failed to load model")}},mt=()=>{const Ee=w.current;J.current.forEach(Te=>{Ee==null||Ee.remove(Te.outline),Ee==null||Ee.remove(Te.fill),Te.outline.geometry.dispose(),Te.fill.geometry.dispose(),Te.outline.material.dispose(),Te.fill.material.dispose()}),J.current.clear()},Ot=Q.useCallback(()=>{var Ee,Te,ge;document.removeEventListener("touchstart",Qe),(Ee=B.current)==null||Ee.setAnimationLoop(null),(Te=V.current)==null||Te.end().catch(()=>{}),V.current=null,(ge=ne.current)==null||ge.remove(),ne.current=null,le.current=[],W.current=[],ee.current.clear(),mt(),Z.current=null,ue.current=null,fe.current=!1},[Qe]),kt=async Ee=>{N("starting"),v(""),i(0),P.current=0,f(or),F.current=or,o(1),fe.current=!1,ee.current.clear(),Z.current=null;try{const Te=document.createElement("canvas");Te.style.cssText="position:fixed;inset:0;width:100%;height:100%;z-index:1;pointer-events:none;",document.body.appendChild(Te),ne.current=Te;const ge=Math.min(window.devicePixelRatio,1.5),Ie=new hR({canvas:Te,alpha:!0,antialias:ge<1.3,powerPreference:"high-performance"});Ie.xr.enabled=!0,Ie.setPixelRatio(ge),Ie.setSize(window.innerWidth,window.innerHeight),Ie.outputColorSpace=Wn,Ie.toneMapping=Rh,Ie.toneMappingExposure=1.1,B.current=Ie;const L=new iE;L.add(new s1(16777215,1.1));const E=new A0(16773590,3);E.position.set(2,4,2),L.add(E);const D=new A0(8956671,1);D.position.set(-2,2,-1),L.add(D),w.current=L;const ie=new jn(70,window.innerWidth/window.innerHeight,.01,100);I.current=ie;const oe=navigator.xr,ye={requiredFeatures:["plane-detection"],optionalFeatures:["hit-test","local-floor","dom-overlay"]};Ee&&(ye.domOverlay={root:Ee});const Se=await oe.requestSession("immersive-ar",ye);V.current=Se,await Ie.xr.setSession(Se);let K;try{K=await Se.requestReferenceSpace("local-floor")}catch{K=await Se.requestReferenceSpace("local")}z.current=K,N("scanning"),Ie.setAnimationLoop((me,Le)=>{if(Le){if(R.current++,(R.current&3)===0&&st(Le,K),T.current==="playing"&&!y.current){const Fe=performance.now(),xe=Fe*.001;pt(Le,K,Fe,xe),bt(L)}Ie.render(L,ie)}}),Se.addEventListener("end",()=>{Ie.setAnimationLoop(null),Te.remove(),ne.current=null,V.current=null,le.current=[],W.current=[],ee.current.clear(),mt(),Z.current=null,ue.current=null,fe.current=!1,N("idle"),i(0),P.current=0,f(or),F.current=or,o(1)})}catch(Te){Ot(),N("error"),v((Te==null?void 0:Te.message)??"Failed to start AR")}},un=Q.useCallback(()=>{y.current=!0,_(!0)},[]),j=Q.useCallback(()=>{y.current=!1,_(!1)},[]),Bt=Q.useCallback(()=>{const Ee=!S.current;S.current=Ee,b(Ee),J.current.forEach(Te=>{Te.outline.visible=Ee,Te.fill.visible=Ee})},[]);return Q.useEffect(()=>()=>Ot(),[Ot]),{phase:r,smashed:t,wave:a,hp:u,maxHp:or,damageTick:d,errorMsg:g,isSupported:r!=="unsupported"&&r!=="checking",paused:m,showPlane:M,startAR:kt,startGame:Lt,stopAR:Ot,pause:un,resume:j,togglePlane:Bt}}const TR={checking:"CHECKING DEVICE...",unsupported:"AR NOT SUPPORTED",idle:"READY TO SCAN",starting:"INITIALIZING AR...",scanning:"SCANNING SURFACE...","plane-found":"SURFACE LOCKED ✓",loading:"LOADING MODELS...",playing:"COMBAT ACTIVE","game-over":"DEFEATED",error:"SESSION ERROR"},bR={checking:"#a78bfa",unsupported:"#ef4444",idle:"#a78bfa",starting:"#facc15",scanning:"#facc15","plane-found":"#10b981",loading:"#a78bfa",playing:"#ec4899","game-over":"#ef4444",error:"#ef4444"};function AR(){const r=Wu(),e=Q.useRef(null),{phase:t,smashed:i,wave:a,hp:o,maxHp:u,damageTick:f,errorMsg:d,paused:h,showPlane:g,startAR:v,startGame:m,stopAR:_,pause:M,resume:b,togglePlane:y}=wR(),S=bR[t],R=TR[t],T=t==="scanning"||t==="plane-found"||t==="loading"||t==="playing"||t==="game-over",P=t==="idle"||t==="error",F=t==="plane-found",N=t==="playing",B=t==="loading"||t==="starting",w=t==="game-over",I=Math.max(0,Math.min(100,o/u*100)),V=I>60?"#10b981":I>30?"#facc15":"#ef4444",[z,q]=Q.useState(!1);Q.useEffect(()=>{if(f===0)return;q(!0);const W=setTimeout(()=>q(!1),350);return()=>clearTimeout(W)},[f]);const he=()=>v(e.current??void 0),le=()=>{_(),r("/mission")};return H.jsxs("div",{ref:e,className:"fixed inset-0 font-['Press_Start_2P',_monospace] select-none",style:{backgroundColor:T?"transparent":"#0a0118",zIndex:100},children:[H.jsx("style",{children:`
        @keyframes scanLine  { 0% { transform:translateY(-5%);opacity:.7 } 100% { transform:translateY(105vh);opacity:0 } }
        @keyframes pulseRing { 0% { transform:scale(.8);opacity:1 } 100% { transform:scale(2.2);opacity:0 } }
        @keyframes blink     { 0%,100% { opacity:1 } 50% { opacity:.15 } }
        @keyframes fadeSlide { from { opacity:0;transform:translateY(10px) } to { opacity:1;transform:translateY(0) } }
        @keyframes corner    { 0%,100% { opacity:1 } 50% { opacity:.25 } }
        @keyframes spin      { to { transform:rotate(360deg) } }
      `}),T&&H.jsx("div",{className:"pointer-events-none absolute inset-x-0 h-0.5",style:{background:`linear-gradient(to right,transparent,${S}88,transparent)`,animation:"scanLine 3.5s linear infinite",zIndex:10}}),["tl","tr","bl","br"].map(W=>H.jsx("div",{className:"absolute pointer-events-none",style:{top:W[0]==="t"?14:void 0,bottom:W[0]==="b"?14:void 0,left:W[1]==="l"?14:void 0,right:W[1]==="r"?14:void 0,width:28,height:28,borderTop:W[0]==="t"?`3px solid ${S}`:void 0,borderBottom:W[0]==="b"?`3px solid ${S}`:void 0,borderLeft:W[1]==="l"?`3px solid ${S}`:void 0,borderRight:W[1]==="r"?`3px solid ${S}`:void 0,animation:"corner 2s ease-in-out infinite",zIndex:20}},W)),H.jsxs("div",{className:"absolute top-0 inset-x-0 flex items-center justify-between px-10 py-4",style:{zIndex:30},children:[H.jsx("button",{onClick:le,className:"text-[8px] transition-colors",style:{color:T?"#ffffffcc":"#a78bfa"},children:"← EXIT"}),H.jsx("div",{className:"text-[7px] px-2 py-1 border",style:{color:S,borderColor:S,animation:T&&t!=="plane-found"&&!N?"blink 1s ease-in-out infinite":"none"},children:R}),N||w?H.jsxs("div",{className:"text-[7px] text-[#ec4899]",children:["KILLS ",i]}):H.jsx("div",{className:"text-[7px]",style:{color:T?"#10b981":"#374151"},children:"WAVE 01"})]}),(N||w)&&H.jsxs("div",{className:"absolute top-14 inset-x-0 px-10",style:{zIndex:30},children:[H.jsxs("div",{className:"flex items-center justify-between mb-1",children:[H.jsx("span",{className:"text-[6px] text-white/60 tracking-widest",children:"HP"}),H.jsxs("span",{className:"text-[6px] text-[#facc15] tracking-widest",children:["WAVE ",String(a).padStart(2,"0")]}),H.jsxs("span",{className:"text-[6px]",style:{color:V},children:[o,"/",u]})]}),H.jsx("div",{className:"w-full h-2 bg-[#1a0a2e]/80 border border-white/20",children:H.jsx("div",{className:"h-full transition-all duration-300 ease-out",style:{width:`${I}%`,backgroundColor:V,boxShadow:`0 0 8px ${V}`}})})]}),z&&H.jsx("div",{className:"pointer-events-none absolute inset-0",style:{backgroundColor:"rgba(239,68,68,0.35)",boxShadow:"inset 0 0 120px 40px rgba(239,68,68,0.6)",animation:"fadeSlide .35s ease-out",zIndex:45}}),N&&!h&&H.jsx("button",{onClick:M,className:"absolute top-16 right-6 w-10 h-10 flex items-center justify-center border-2 border-[#a78bfa] bg-[#0a0118]/70 active:scale-95",style:{zIndex:35},"aria-label":"Pause",children:H.jsxs("div",{className:"flex gap-1",children:[H.jsx("div",{className:"w-1.5 h-4 bg-[#a78bfa]"}),H.jsx("div",{className:"w-1.5 h-4 bg-[#a78bfa]"})]})}),N&&h&&H.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-5 px-8",style:{zIndex:60,backgroundColor:"rgba(10,1,24,0.85)",animation:"fadeSlide .25s ease-out"},children:[H.jsx("p",{className:"text-[18px] tracking-widest text-[#a78bfa]",children:"PAUSED"}),H.jsxs("div",{className:"flex flex-col gap-3 w-full max-w-xs",children:[H.jsx("button",{onClick:b,className:"py-4 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors",children:"> RESUME <"}),H.jsxs("button",{onClick:y,className:"py-3 text-[9px] border-2 transition-colors",style:{borderColor:g?"#10b981":"#facc15",color:g?"#10b981":"#facc15"},children:["PLANE: ",g?"VISIBLE":"HIDDEN"]}),H.jsx("button",{onClick:async()=>{b(),_(),await new Promise(W=>setTimeout(W,80)),he()},className:"py-3 text-[9px] border-2 border-white/40 text-white/80 hover:text-white transition-colors",children:"RESTART"}),H.jsx("button",{onClick:le,className:"py-3 text-[9px] border-2 border-white/20 text-white/60 hover:text-white/90 transition-colors",children:"EXIT TO MISSION"})]}),H.jsxs("p",{className:"text-[6px] text-white/40 tracking-widest mt-2",children:["KILLS ",i," · WAVE ",a," · HP ",o,"/",u]})]}),!T&&H.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-7 px-8",style:{zIndex:20,animation:"fadeSlide .4s ease-out"},children:[H.jsxs("div",{className:"relative flex items-center justify-center w-36 h-36",children:[H.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:S,opacity:.18}}),H.jsx("div",{className:"absolute w-24 h-24 rounded-full border",style:{borderColor:S,opacity:.35}}),B&&H.jsx("div",{className:"absolute w-full h-full rounded-full border-t-2",style:{borderColor:S,animation:"spin .9s linear infinite"}}),!B&&(t==="idle"||t==="error")&&H.jsxs(H.Fragment,{children:[H.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:S,animation:"pulseRing 1.6s ease-out infinite"}}),H.jsx("div",{className:"absolute w-full h-full rounded-full border-2",style:{borderColor:S,animation:"pulseRing 1.6s .8s ease-out infinite"}})]}),H.jsx("span",{className:"text-3xl",children:t==="unsupported"?"🚫":t==="error"?"⚠️":"📷"})]}),H.jsxs("div",{className:"text-center space-y-2",children:[H.jsx("p",{className:"text-[10px] tracking-widest",style:{color:S},children:R}),t==="unsupported"&&H.jsxs("p",{className:"text-[7px] text-white/40 leading-loose",children:["WebXR immersive-ar not",H.jsx("br",{}),"supported on this device."]}),t==="error"&&H.jsx("p",{className:"text-[7px] text-[#ef444488] leading-loose max-w-xs text-center",children:d}),t==="idle"&&H.jsxs("p",{className:"text-[7px] text-white/40 leading-loose",children:["Point camera at a flat surface",H.jsx("br",{}),"then tap START AR."]})]}),P&&H.jsxs("button",{onClick:he,className:"relative py-4 px-8 text-[10px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5",children:[H.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),t==="error"?"> RETRY AR <":"> START AR <"]})]}),T&&H.jsxs(H.Fragment,{children:[!N&&H.jsx("div",{className:"absolute pointer-events-none",style:{top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:20},children:t==="plane-found"?H.jsxs("div",{className:"text-center",children:[H.jsx("div",{className:"w-20 h-20 border-4 border-[#10b981] mx-auto",style:{boxShadow:"0 0 24px #10b98166"}}),H.jsx("p",{className:"text-[7px] text-[#10b981] mt-2 tracking-widest",style:{animation:"blink 1.5s ease-in-out infinite"},children:"SURFACE LOCKED"})]}):H.jsxs("div",{className:"text-center",children:[H.jsx("div",{className:"w-14 h-14 border-2 border-[#facc15] mx-auto",style:{boxShadow:"0 0 12px #facc1544",animation:"blink 1s ease-in-out infinite"}}),H.jsx("p",{className:"text-[7px] text-[#facc15] mt-2 tracking-widest",children:"SCANNING..."})]})}),F&&H.jsx("div",{className:"absolute bottom-10 inset-x-0 flex justify-center px-8",style:{zIndex:30,animation:"fadeSlide .4s ease-out"},children:H.jsx("button",{onClick:m,className:"w-full max-w-xs py-5 text-[11px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors active:translate-y-0.5",style:{boxShadow:"0 0 32px #8b5cf677"},children:"> START GAME <"})}),N&&H.jsx("div",{className:"absolute bottom-10 inset-x-0 text-center",style:{zIndex:30,animation:"fadeSlide .3s ease-out"},children:H.jsx("p",{className:"text-[8px] text-[#ec4899] tracking-widest",style:{animation:"blink 2.2s ease-in-out infinite"},children:"TAP RED ROCKS BEFORE THEY HIT YOU"})}),w&&H.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-4 px-8",style:{zIndex:50,backgroundColor:"rgba(10,1,24,.82)",animation:"fadeSlide .5s ease-out"},children:[H.jsx("p",{className:"text-[22px] tracking-widest text-[#ef4444]",children:"DEFEATED"}),H.jsxs("div",{className:"text-center space-y-2",children:[H.jsxs("p",{className:"text-[10px] text-[#ec4899] tracking-widest",children:["KILLS: ",i]}),H.jsxs("p",{className:"text-[8px] text-[#facc15] tracking-widest",children:["WAVE REACHED: ",a]})]}),H.jsxs("button",{onClick:async()=>{_(),await new Promise(W=>setTimeout(W,80)),he()},className:"mt-2 py-3 px-6 text-[9px] border-4 border-[#ec4899] bg-[#8b5cf6] text-white hover:bg-[#a78bfa] transition-colors relative",children:[H.jsx("div",{className:"absolute top-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute top-0 right-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 left-0 w-2 h-2 bg-[#0a0118]"}),H.jsx("div",{className:"absolute bottom-0 right-0 w-2 h-2 bg-[#0a0118]"}),"> RETRY <"]}),H.jsx("button",{onClick:le,className:"py-2 px-5 text-[8px] border-2 border-white/30 text-white/70 hover:text-white transition-colors",children:"EXIT TO MISSION"})]})]})]})}function RR(r){const e=Q.useRef(null),t=Q.useRef(!1);Q.useEffect(()=>{const i=new Audio(r);i.loop=!0,i.volume=.35,e.current=i;const a=()=>{t.current||(t.current=!0,i.play().catch(()=>{}))};return i.play().then(()=>{t.current=!0}).catch(()=>{document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0})}),()=>{i.pause(),i.src="",document.removeEventListener("click",a),document.removeEventListener("touchstart",a),document.removeEventListener("keydown",a)}},[r])}const CR="/assets/bmusic-DkBO5UAz.MP3";function PR(){return RR(CR),null}function LR(){return H.jsxs(ES,{children:[H.jsx(PR,{}),H.jsxs(Qy,{children:[H.jsx(Eu,{path:"/",element:H.jsx(kS,{})}),H.jsx(Eu,{path:"/mission",element:H.jsx(BS,{})}),H.jsx(Eu,{path:"/ar",element:H.jsx(AR,{})})]})]})}const mx=document.getElementById("root");if(!mx)throw new Error("Root element #root not found");ny.createRoot(mx).render(H.jsx(LR,{}));export{s1 as A,cE as B,DR as C,A0 as D,zf as E,kR as F,yo as G,Ku as L,UR as M,zu as N,sn as O,zt as P,Ss as Q,Ud as R,Wn as S,t1 as T,Gv as U,Ht as V,Y as a,VR as b,lr as c,Cn as d,FR as e,Tt as f,Mt as g,wt as h,jn as i,zR as j,NR as k,BR as l,IR as m,fi as n,$v as o,mE as p,Xv as q,Un as r,ti as s,gt as t,Et as u,tx as v,Hi as w,OR as x,Vu as y,qu as z};
